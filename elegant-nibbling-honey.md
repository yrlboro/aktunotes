# Plan: AktuNotes Exam Simulation Module (Batch 7)

## Context
Building a CBT-style (Computer Based Test) interactive exam simulation at `/exam-sim`. AktuNotes already has 13 CF1 past exam files with 11 full solution files (markdown). The sim will dynamically extract questions from the most recent exam (`2025-11-CF1-answered.md`) at build time, serving a complete 180-minute timed exam with navigator, flagging, auto-submit, and scoring — matching the PAI/AAMAI CBT experience.

---

## Architecture Decisions

| Decision | Choice | Reason |
|---|---|---|
| New npm packages | **None** | Use Node `fs` (built-in) + KaTeX (already installed) + vanilla JS |
| State management | **LocalStorage** | Static site, no React/Vue needed; survives refresh |
| Data source | **Build-time fs.readFileSync** | Parses existing markdown content; truly dynamic |
| Layout | **BaseLayout only** (distraction-free) | No NoteLayout sidebar/nav during exam |
| All logic | **Single file** `exam-sim/index.astro` | No components/ needed; consistent with project pattern |

---

## Files

### New
- `src/pages/exam-sim/index.astro` — Full exam simulation page (layout + parser + client JS)

### Modified
- `src/layouts/NoteLayout.astro` — Add "Simulasi Ujian" link under `▸ Resources` nav section

---

## Data Pipeline (Build Time)

```
content/CF1/exams/solutions/2025-11-CF1-answered.md
  ↓  fs.readFileSync (Node.js, Astro frontmatter)
  ↓  parseExam(raw) regex parser
  ↓  questions: Array<Question>
  ↓  JSON.stringify → inlined into <script> tag as const QUESTIONS = [...]
  ↓  client-side JS reads QUESTIONS
```

### Parsing Logic (in Astro `---` frontmatter, Node.js context)

```js
import { readFileSync } from 'fs';
import { resolve } from 'path';

const EXAM_ID = '2025-11-CF1';
const raw = readFileSync(
  resolve('./content/CF1/exams/solutions/2025-11-CF1-answered.md'), 'utf-8'
);

function parseExam(content) {
  // Split on HR separators (--- between questions)
  const blocks = content.split(/\n---\n/);
  const questions = [];

  for (const block of blocks) {
    const numMatch = block.match(/^## \*\*No\. (\d+)\*\*/m);
    if (!numMatch) continue;
    const num = parseInt(numMatch[1]);

    // Pre-summary section (question text + options)
    const preSummary = block.split(/^> \[!summary\]/m)[0] ?? block;

    // Options: lines starting with a. b. c. d. e.
    const optMatches = [...preSummary.matchAll(/^([a-e])\.\s*(.+?)(?=\n[a-e]\.\s|\n\n|\n>|$)/gms)];
    if (optMatches.length < 2) continue; // skip non-question blocks
    const options = optMatches.map(m => ({ letter: m[1], text: m[2].trim() }));

    // Question body = text between ## header and first option
    const bodyStart = block.indexOf('\n') + 1;
    const firstOptPos = preSummary.search(/^[a-e]\./m);
    const text = preSummary.slice(bodyStart, firstOptPos < 0 ? undefined : firstOptPos).trim();

    // Correct answer from > **(x).
    const answerMatch = block.match(/> \*\*\(([a-e])\)\./);
    const answer = answerMatch?.[1] ?? null;
    if (!answer) continue; // skip if no answer available

    // Metadata from summary table
    const diffMatch = block.match(/\*\*Difficulty\*\*\s*\|\s*(\w+)/);
    const topicMatch = block.match(/\*\*Topik CF1\*\*\s*\|\s*(.+?)\s*\|/);

    questions.push({
      num,
      text,
      options,
      answer,
      difficulty: diffMatch?.[1] ?? null,
      topic: topicMatch?.[1]?.trim() ?? null,
    });
  }

  return questions;
}

const questions = parseExam(raw);
const examMeta = { id: EXAM_ID, label: 'CF1 — November 2025', total: questions.length, durationSec: 10800 };
```

---

## Page Layout (Distraction-Free, 2-Column)

```
┌─────────────────── Header bar (sticky) ───────────────────────┐
│  [CF1 · Simulasi Ujian]   [SELESAI & KUMPULKAN]   [⏱ 179:58] │
├──────────────────────────────────────┬────────────────────────┤
│                                      │  NAVIGASI SOAL         │
│  No. 1  Easy · Topik 3               │  [1][2][3]...[30]      │
│  ─────────────────────────────────   │                        │
│  [Question text with KaTeX math]     │  □ Belum dijawab       │
│  [Markdown tables rendered to HTML]  │  ■ Sudah dijawab       │
│                                      │  ◆ Ragu-ragu           │
│  ○  a. Option A text                 │                        │
│  ○  b. Option B text                 │  [⚑ Tandai Ragu-Ragu] │
│  ○  c. Option C text                 │                        │
│  ○  d. Option D text                 │  [📄 Formula Sheet]   │
│  ○  e. Option E text                 │                        │
│                                      │                        │
│  [← Prev]                [Next →]    │                        │
└──────────────────────────────────────┴────────────────────────┘
```

**Timer bar**: sticky top, color normal → `var(--yellow)` at ≤30min → `var(--pink)` at ≤10min  
**Layout**: CSS Grid `1fr 200px`, no NoteLayout sidebar (BaseLayout only)

---

## Client-Side State (LocalStorage)

```js
// Schema stored under key `aktunotes-exam-${examMeta.id}`
{
  exam: '2025-11-CF1',
  answers:   { '1': 'a', '2': null, '3': 'b', ... },  // null = unanswered
  flagged:   [3, 7, 12],                                // question nums
  currentQ:  1,
  startTime: '2026-04-03T10:00:00.000Z',               // ISO string
  submitted: false
}
```

On page load: restore from localStorage if `exam` matches and `submitted === false`.  
On any change (select option, flag, navigate): auto-save to localStorage.

---

## Timer

```js
const elapsed = (Date.now() - new Date(state.startTime).getTime()) / 1000;
let remaining = examMeta.durationSec - elapsed;
setInterval(() => {
  remaining--;
  if (remaining <= 0) autoSubmit();
  updateTimerDisplay(remaining);
}, 1000);
```

Auto-submit: calls same logic as manual submit button.

---

## Question Renderer (client-side)

Since question text contains LaTeX inline math and markdown tables, render with this priority:
1. `$$...$$` → `katex.renderToString(math, { displayMode: true })`
2. `$...$` → `katex.renderToString(math, { displayMode: false })`
3. Simple markdown table → regex to `<table><tr><td>` HTML
4. `**text**` → `<strong>`, `_text_` → `<em>`
5. Plain text → `textContent`

KaTeX is already loaded via CDN in `BaseLayout.astro` (the stylesheet is there); the JS library is used client-side from the `katex` import already installed.

---

## Navigator Button Colors

| State | CSS class | Color |
|---|---|---|
| Unanswered | `.nav-q` | `var(--cream3)` border ink |
| Answered | `.nav-q.answered` | `var(--teal)` background |
| Flagged (unanswered) | `.nav-q.flagged` | `var(--yellow)` background |
| Flagged (answered) | `.nav-q.answered.flagged` | `var(--yellow)` border, teal bg |
| Current | `.nav-q.current` | `var(--pink)` border |

---

## Score Dashboard (post-submit)

Shown in full-page overlay after submit:
- **Score**: X / 30 (`YY%`)
- **Pass/Fail**: ≥ 60% = LULUS (teal), < 60% = BELUM LULUS (pink)
- **Per-topic table**: unique topics from questions → correct/total per topic
- **Action buttons**: "Lihat Review" (enters review mode), "Kembali ke CF1"

**Review mode**: cycles through all questions, shows:
- Question text + selected answer (red if wrong, green if correct)
- Reveal button: shows correct answer letter

---

## Formula Sheet (inline popup)

Floating panel toggled by navigator button:
- 10 key CF1 formulas as KaTeX display
- Topics: PV, FV, annuity-immediate, annuity-due, perpetuity, bond price, forward rate, Macaulay duration, NPV, force of interest
- Reuses existing formula data from the `formulas[]` array in `src/pages/index.astro:595-605`

---

## NoteLayout.astro Change

Under `▸ Resources` nav section, add:
```astro
<a href="/exam-sim" class="nav-item">Simulasi Ujian CF1</a>
```

---

## Verification

1. `npm run build` — no errors, 115+ pages built (adds `/exam-sim/index.html`)
2. Page loads → timer starts at 180:00
3. Select option → navigator button turns green, option highlighted
4. Flag button → navigator button turns yellow/orange
5. Navigate between questions → selection persists
6. Refresh → session restored from localStorage, timer continues from elapsed point
7. Timer reaches 0 → auto-submit triggers, score dashboard shows
8. Manual submit → score dashboard shows with pass/fail and topic breakdown
9. KaTeX math renders in question text and option labels
10. Formula sheet popup opens/closes on button click
