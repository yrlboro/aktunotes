// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/**
 * Remark plugin: convert Obsidian [[wiki links]] to real <a> links.
 * Same-collection links: [[Note Name]] → /{collection}/{slug}
 * Cross-collection links: [[CF2/Note Name]] → /CF2/{slug}
 */
function remarkWikiLink() {
  const WIKI_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

  /** @param {string} str */
  function makeSlug(str) {
    return str.trim()
      .replace(/\.mdx?$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9/_-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/\/-/g, '/')
      .replace(/-\//g, '/');
  }

  /**
   * @param {string} link  — the raw link text inside [[ ]]
   * @param {string} collection — current file's collection (CF1, CF2, etc.)
   */
  function wikiLinkToUrl(link, collection) {
    const trimmed = link.trim();
    const parts = trimmed.split('/');
    if (parts.length >= 2) {
      // Cross-collection: [[CF2/Note Name]] or [[AAMAI-101/Note]]
      const base = parts[0].toUpperCase().replace('AAMAI-101', 'AAMAI101');
      const rest = parts.slice(1).join('/');
      return `/${base}/${makeSlug(rest)}`;
    }
    // Same-collection: [[Note Name]]
    if (collection) return `/${collection}/${makeSlug(trimmed)}`;
    return `/${makeSlug(trimmed)}`;
  }

  /**
   * Split a text value by wiki link syntax; return mdast nodes.
   * @param {string} value
   * @param {string} collection
   * @returns {any[]}
   */
  function parseText(value, collection) {
    const nodes = [];
    let lastIndex = 0;
    let match;
    WIKI_RE.lastIndex = 0;
    while ((match = WIKI_RE.exec(value)) !== null) {
      if (match.index > lastIndex) {
        nodes.push({ type: 'text', value: value.slice(lastIndex, match.index) });
      }
      const link = match[1];
      const alias = match[2];
      const display = alias || link.split('/').pop() || link;
      nodes.push({
        type: 'link',
        url: wikiLinkToUrl(link, collection),
        title: null,
        children: [{ type: 'text', value: display }],
      });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < value.length) {
      nodes.push({ type: 'text', value: value.slice(lastIndex) });
    }
    return nodes;
  }

  /**
   * @param {any} node
   * @param {string} collection
   */
  function walk(node, collection) {
    if (!node.children) return;
    const newChildren = [];
    for (const child of node.children) {
      if (child.type === 'text' && WIKI_RE.test(child.value)) {
        WIKI_RE.lastIndex = 0;
        newChildren.push(...parseText(child.value, collection));
      } else {
        walk(child, collection);
        newChildren.push(child);
      }
    }
    node.children = newChildren;
  }

  /** @param {any} tree @param {any} vFile */
  return (tree, vFile) => {
    // Detect collection from file path
    const fp = (vFile.history?.[0] || '').replace(/\\/g, '/');
    const colMatch = fp.match(/\/content\/(CF1|CF2|AAMAI-101|AAMAI101)\//i);
    const collection = colMatch
      ? colMatch[1].toUpperCase().replace('AAMAI-101', 'AAMAI101')
      : '';
    walk(tree, collection);
  };
}

/**
 * Rehype plugin: Transform Obsidian callouts to styled <details> elements.
 *
 * Collapsible types (can be opened/closed by user):
 *   [!example]   — default open, toggle allowed
 *
 * Static types (always open, cannot be closed):
 *   everything else — always expanded
 *
 * Modifier: [!TYPE]+  force open, [!TYPE]-  force collapsed (example only)
 *
 * Bug fix: if the callout title and body are in the same <p> (joined by \n),
 * we split at the first \n so body content is correctly placed in callout-body.
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
    // Post-order: process children first so nested callouts work
    if (Array.isArray(node.children)) node.children.forEach(transform);

    if (node.type !== 'element' || node.tagName !== 'blockquote') return;

    const pIdx = node.children.findIndex(
      /** @param {any} c */ (c) => c.type === 'element' && c.tagName === 'p'
    );
    if (pIdx === -1) return;

    const firstP = node.children[pIdx];
    if (!firstP.children || firstP.children.length === 0) return;

    const firstChild = firstP.children[0];
    if (firstChild.type !== 'text') return;

    const match = (firstChild.value || '').match(/^\[!(\w+)\]([+-]?)[ \t]*/);
    if (!match) return;

    const [fullMatch, type, modifier] = match;
    const slug = type.toLowerCase();
    // Only [!example] is collapsible; everything else is always-open static
    const isCollapsible = slug === 'example';
    const isOpen = !isCollapsible || modifier !== '-';
    const icon = ICONS[slug] || '▸';

    const remaining = firstChild.value.slice(fullMatch.length);
    // ── Bug fix: split title and body at first \n in the same paragraph ──
    const nlIdx = remaining.indexOf('\n');

    /** @type {any[]} */ let labelChildren;
    /** @type {any[]} */ let bodyChildren;

    if (nlIdx !== -1) {
      // Title text is before the newline; body content is after
      const titleText = remaining.slice(0, nlIdx);
      const bodyText = remaining.slice(nlIdx + 1);

      // Label = title text (if any)
      const labelTextNodes = titleText.trim()
        ? [{ type: 'text', value: titleText }]
        : [];

      // Siblings after firstChild in firstP (e.g. <strong>, more text)
      const restSiblings = firstP.children.slice(1);

      // Body = bodyText + rest of firstP children, wrapped in <p>
      const bodyParaNodes = [
        ...(bodyText ? [{ type: 'text', value: bodyText }] : []),
        ...restSiblings,
      ];

      node.children.splice(pIdx, 1);

      const bodyFromFirstP = bodyParaNodes.length > 0
        ? [{ type: 'element', tagName: 'p', properties: {}, children: bodyParaNodes }]
        : [];

      labelChildren = labelTextNodes.length > 0
        ? labelTextNodes
        : [{ type: 'text', value: slug.charAt(0).toUpperCase() + slug.slice(1) }];
      bodyChildren = [...bodyFromFirstP, ...node.children];
    } else {
      // No newline — original behaviour
      if (remaining) {
        firstChild.value = remaining;
      } else {
        firstP.children.shift();
      }
      node.children.splice(pIdx, 1);
      labelChildren = firstP.children.length > 0
        ? firstP.children
        : [{ type: 'text', value: slug.charAt(0).toUpperCase() + slug.slice(1) }];
      bodyChildren = [...node.children];
    }

    node.tagName = 'details';
    node.properties = {
      className: isCollapsible
        ? ['callout', `callout-${slug}`]
        : ['callout', `callout-${slug}`, 'callout-static'],
    };
    if (isOpen) node.properties.open = true;

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

/**
 * Remark plugin: promote inlineMath nodes that sit alone on their own "line"
 * within a paragraph (preceded and/or followed by a break node) to block math
 * nodes, splitting the paragraph around them.
 *
 * Root cause: remark-math parses $$formula$$ as inlineMath (not math/display)
 * when the $$ appears inside a paragraph — even on its own line, because the
 * hard-break (two trailing spaces) keeps it in the same paragraph block.
 * rehype-katex renders inlineMath with class "math-inline" → small, left-aligned.
 *
 * Fix: detect inlineMath bounded on both sides by a break (or paragraph edge),
 * split the paragraph, and rebuild the node with the exact data structure that
 * remark-math produces for a real display-math block so rehype-katex renders
 * it centred in display mode.
 */
function remarkPromoteIsolatedMathToDisplay() {
  function cleanBreaks(arr) {
    while (arr.length > 0 && arr[0].type === 'break') arr.shift();
    while (arr.length > 0 && arr[arr.length - 1].type === 'break') arr.pop();
    return arr;
  }

  /** Build a display-math node with the same data shape remark-math uses. */
  function makeDisplayMath(value) {
    return {
      type: 'math',
      meta: null,
      value,
      data: {
        hName: 'pre',
        hChildren: [{
          type: 'element',
          tagName: 'code',
          properties: { className: ['language-math', 'math-display'] },
          children: [{ type: 'text', value }],
        }],
      },
    };
  }

  function splitParagraph(para) {
    const kids = para.children;
    const result = [];
    let buf = [];

    for (let i = 0; i < kids.length; i++) {
      const child = kids[i];

      if (child.type === 'inlineMath') {
        const prev = buf[buf.length - 1];
        const next = kids[i + 1];
        const afterBreak = !prev || prev.type === 'break';
        const beforeBreak = !next || next.type === 'break';

        if (afterBreak && beforeBreak) {
          // Remove the preceding break from buf
          if (prev && prev.type === 'break') buf.pop();
          // Flush buf as a paragraph
          const flushed = cleanBreaks([...buf]);
          if (flushed.length > 0) result.push({ type: 'paragraph', children: flushed });
          buf = [];
          // Skip following break
          if (next && next.type === 'break') i++;
          // Promote to display math with correct hast data
          result.push(makeDisplayMath(child.value));
        } else {
          buf.push(child);
        }
      } else {
        buf.push(child);
      }
    }

    const remaining = cleanBreaks(buf);
    if (remaining.length > 0) result.push({ type: 'paragraph', children: remaining });
    return result.length > 0 ? result : [para];
  }

  function walk(node) {
    if (!node.children) return;
    node.children.forEach(walk);

    const next = [];
    let changed = false;
    for (const child of node.children) {
      if (child.type === 'paragraph') {
        const parts = splitParagraph(child);
        next.push(...parts);
        if (parts.length !== 1 || parts[0] !== child) changed = true;
      } else {
        next.push(child);
      }
    }
    if (changed) node.children = next;
  }

  return walk;
}

export default defineConfig({
  site: 'https://aktunotes.my.id',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath, remarkWikiLink, remarkPromoteIsolatedMathToDisplay],
    rehypePlugins: [rehypeKatex, rehypeCallouts],
  },
});
