// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** Remark plugin: convert Obsidian [[wiki links]] to plain text */
function remarkWikiLink() {
  /** @param {import('unist').Node} node */
  function walk(node) {
    if (node.type === 'text') {
      // @ts-ignore
      node.value = node.value.replace(
        /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
        /** @param {string} _ @param {string} link @param {string} [alias] */
        (_, link, alias) => alias || link.split('/').pop() || link
      );
    }
    // @ts-ignore
    if (node.children) node.children.forEach(walk);
  }
  /** @param {import('unist').Node} tree */
  return (tree) => walk(tree);
}

/**
 * Rehype plugin: Transform Obsidian callouts to styled <details> elements.
 * Supports: > [!TYPE]  (open), > [!TYPE]+  (open), > [!TYPE]-  (collapsed)
 */
function rehypeCallouts() {
  const ICONS = /** @type {Record<string, string>} */ ({
    note: 'ℹ', info: 'ℹ', todo: '○',
    tip: '◈', hint: '◈', important: '◈',
    abstract: '≡', summary: '≡', tldr: '≡',
    success: '✓', check: '✓', done: '✓',
    question: '?', help: '?', faq: '?',
    warning: '▲', caution: '▲', attention: '▲',
    failure: '✘', fail: '✘', missing: '✘',
    danger: '✘', error: '✘',
    bug: '⬡',
    example: '▸',
    quote: '❝', cite: '❝',
  });

  /** @param {any} node */
  function transform(node) {
    // Post-order: process children first so nested callouts work correctly
    if (Array.isArray(node.children)) node.children.forEach(transform);

    if (node.type !== 'element' || node.tagName !== 'blockquote') return;

    // Find the first <p> child
    const pIdx = node.children.findIndex(
      /** @param {any} c */ (c) => c.type === 'element' && c.tagName === 'p'
    );
    if (pIdx === -1) return;

    const firstP = node.children[pIdx];
    if (!firstP.children || firstP.children.length === 0) return;

    // The FIRST child of <p> must be a text node starting with [!TYPE]
    const firstChild = firstP.children[0];
    if (firstChild.type !== 'text') return;

    // Match [!TYPE], [!TYPE]+, or [!TYPE]- at the very start, plus any trailing spaces
    const match = (firstChild.value || '').match(/^\[!(\w+)\]([+-]?)[ \t]*/);
    if (!match) return;

    const [fullMatch, type, modifier] = match;
    const slug = type.toLowerCase();
    const isOpen = modifier !== '-';
    const icon = ICONS[slug] || '▸';

    // Strip the [!TYPE] prefix from the first text node.
    // Whatever remains (the title text on the same line) stays in the node.
    const remaining = firstChild.value.slice(fullMatch.length);
    if (remaining) {
      firstChild.value = remaining;
    } else {
      // Empty text node — remove it so the label shows what follows (e.g. <strong>)
      firstP.children.shift();
    }

    // The modified firstP becomes the rich-content label inside <summary>.
    // Remove it from blockquote; remaining children become the body.
    node.children.splice(pIdx, 1);

    const labelChildren = firstP.children.length > 0
      ? firstP.children
      : [{ type: 'text', value: slug.charAt(0).toUpperCase() + slug.slice(1) }];

    const bodyChildren = [...node.children];

    node.tagName = 'details';
    node.properties = { className: ['callout', `callout-${slug}`] };
    if (isOpen) node.properties.open = '';

    node.children = [
      {
        type: 'element', tagName: 'summary',
        properties: { className: ['callout-title'] },
        children: [
          { type: 'element', tagName: 'span', properties: { className: ['callout-icon'] }, children: [{ type: 'text', value: icon }] },
          { type: 'element', tagName: 'span', properties: { className: ['callout-label'] }, children: labelChildren },
          { type: 'element', tagName: 'span', properties: { className: ['callout-fold'] }, children: [{ type: 'text', value: '›' }] },
        ],
      },
      {
        type: 'element', tagName: 'div',
        properties: { className: ['callout-body'] },
        children: bodyChildren,
      },
    ];
  }

  // @ts-ignore
  return (tree) => transform(tree);
}

export default defineConfig({
  site: 'https://aktunotes.my.id',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath, remarkWikiLink],
    rehypePlugins: [rehypeKatex, rehypeCallouts],
  },
});
