---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 15
stage_name: "Canonical Master Reference Structure"
status: "architecture-designed-not-yet-frozen"
date_created: "2026-08-30"
baseline_stage_14: "CF4_Stage_14_Reconstruction_Paths.md"
master_reference_frozen: false
---

# CF4 — Stage 15: Canonical Master Reference Structure

> [!ABSTRACT] Tujuan
> Stage 15 berhenti menambah materi baru dan mulai mendesain **single source of truth** untuk seluruh sistem CF4.
>
> Fokusnya adalah:
>
> **what survives → where it lives → how it is organized → what is primary vs supporting → how later validation/freeze will work**
>
> Hasil Stage 15 bukan final cheat sheet, melainkan **arsitektur master reference** yang akan menyerap output yang sudah direkonsiliasi dari Stages 4–14 setelah Stage 16–20 selesai.

## 1. Design Principles

Canonical Master Reference harus memenuhi tujuh prinsip:

1. **Single source of truth**  
   Tidak boleh ada dua default definitions/formulas yang bertentangan tanpa qualifier.

2. **Concept before formula**  
   Formula selalu ditempatkan setelah quantity dan meaning jelas.

3. **Perspective-aware**  
   Issuer, investor, creditor, management, dan analyst tidak dicampur.

4. **Convention-aware**  
   Source-sensitive formulas tetap diberi qualifier.

5. **Exam-operational**  
   Isi harus membantu recognition, calculation, interpretation, dan elimination.

6. **Layered**  
   Core recall dipisah dari reconstruction dan reference detail.

7. **Auditable**  
   Setiap canonical item dapat dilacak kembali ke stage/source yang mendasarinya.

## 2. Final Master Architecture

Canonical Master Reference nantinya menggunakan struktur berikut.

```text
CF4 CANONICAL MASTER REFERENCE
│
├── 00. How to Use This Reference
│
├── 01. Universal Reasoning Rules
│
├── 02. Canonical Terminology Dictionary
│
├── 03. Do-Not-Confuse Dictionary
│
├── 04. Accounting Treatment Map
│
├── 05. Concept Hierarchy
│
├── 06. Knowledge Status Layer
│
├── 07. Canonical Formula Layer
│
├── 08. Interpretation Rules
│
├── 09. Perspective Matrix
│
├── 10. Decision Protocols
│
├── 11. Exam Trap Layer
│
├── 12. Reconstruction Paths
│
├── 13. Syllabus Coverage Map
│
├── 14. Past Exam Validation Map
│
└── 15. Source / Convention Appendix
```

## 3. Section 00 — How to Use This Reference

This section should stay short.

### Required Contents

- Scope of CF4.
- Status legend:
  - MEMORIZE
  - UNDERSTAND / RECONSTRUCT
  - REFERENCE ONLY
  - AVOID AS DEFAULT
- Formula-status legend.
- Source-qualifier rules.
- Perspective labels.
- How to route a question.

### One-Screen Routing Summary

```text
Question
→ identify family
→ identify perspective
→ retrieve canonical term/treatment/formula
→ check convention
→ calculate if required
→ interpret
→ eliminate distractors
```

This section should be suitable for reading immediately before a practice session.

## 4. Section 01 — Universal Reasoning Rules

Source: primarily Stage 6 Level 0 and Stage 12.

This section should contain only high-level protocols such as:

### Accounting

```text
Economic Event
→ Recognition
→ Account Effect
→ Statement Effect
→ Cash Effect
→ Interpretation
```

### Corporate Finance

```text
Decision
→ Incremental Cash Flow
→ Risk
→ Required Return
→ Present Value
→ Value
```

### Security

```text
Instrument
→ Rights
→ Priority
→ Maturity
→ Optionality
→ Risk
→ Return
```

### Market

```text
Economic Variable
→ Expected Cash Flow
+
Required Return
→ Price
→ Realized Return
```

### Perspective

```text
Who receives?
Who pays?
Who owns the right?
Who bears the obligation?
```

No textbook prose should be copied here unless necessary.

## 5. Section 02 — Canonical Terminology Dictionary

Source: Stage 4.

### Entry Structure

Each term should follow:

```text
Canonical Term
Indonesian Meaning
English Source Term
Aliases
Perspective
Time Basis
Measurement Basis
Source Context
Do Not Confuse With
```

### Inclusion Rule

Include only:

- core syllabus terminology;
- terminology appearing in official sources;
- terms needed to resolve collisions;
- terms needed for exam routing.

Do not include every heading from topic notes.

## 6. Section 03 — Do-Not-Confuse Dictionary

Source: Stages 3–4, 10, 13.

This should be one of the most visible sections because CF4 is theory-heavy.

### Minimum Set

```text
Revenue ≠ Cash Receipt
Expense ≠ Cash Payment
Net Income ≠ Cash Flow
Retained Earnings ≠ Cash
Debt ≠ Liabilities
Debt ≠ Equity
Secured ≠ Senior
Unsecured ≠ Subordinated
Coupon Rate ≠ Yield
Book Value ≠ Market Value ≠ Intrinsic Value
Required ≠ Expected ≠ Realized Return
Volatility ≠ Systematic Risk ≠ Beta
Cost of Capital ≠ WACC
Company WACC ≠ Project Discount Rate
NPV ≠ IRR
ARR ≠ IRR
Payoff ≠ Profit
Forward ≠ Futures
Hedging ≠ Speculation
Agency Problem ≠ Agency Cost
Financial Asset ≠ Real Resource
Growth ≠ Value Creation
```

### Format

| Term A | Term B | Exact Difference | Fast Exam Cue |
|---|---|---|---|

This section should be optimized for active recall.

## 7. Section 04 — Accounting Treatment Map

Source: Stage 5.

### Required Structure

```text
Economic Event
→ Recognition
→ Accounts Affected
→ Increase / Decrease
→ Income Statement
→ SFP
→ Cash
→ Equity
→ Interpretation
```

### Core Events

Must include at minimum:

- cash revenue;
- credit revenue;
- AR collection;
- expense paid;
- accrued expense;
- AP payment;
- customer advance;
- prepaid expense;
- owner contribution;
- borrowing;
- principal repayment;
- dividend;
- CapEx;
- depreciation;
- NWC change;
- basic consolidation / NCI / intercompany elimination.

### Design Rule

Do not overload this section with debit/credit journals unless required.

## 8. Section 05 — Concept Hierarchy

Source: Stage 6.

Only a compressed hierarchy should survive.

### Level 0

Universal reasoning rules.

### Level 1

Primitive concepts.

### Level 2

Core derived concepts.

### Level 3

Special cases / reference detail.

### Master Rule

The final reference should prioritize:

```text
Level 0
+
Level 1
+
high-value Level 2
```

Level 3 should mostly move to Appendix / Reference.

## 9. Section 06 — Knowledge Status Layer

Source: Stage 7.

This section is not a second content dump.

It should function as a study-control table:

| Item | Status | Study Action |
|---|---|---|
| Core terminology | MEMORIZE | Active recall |
| Project FCF logic | UNDERSTAND / RECONSTRUCT | Derivation drill |
| Historical parameters | REFERENCE ONLY | Review on demand |
| Deterministic macro shortcuts | AVOID AS DEFAULT | Use channel analysis |

The final master reference should visually distinguish these statuses.

## 10. Section 07 — Canonical Formula Layer

Source: Stage 9.

This becomes the mathematical core.

### Formula Card Structure

```text
Quantity
Default Formula
Equivalent Form
Inputs
Assumptions / Convention
Financial Meaning
Formula Status
Reconstruction Path
Exam Trap
```

### Formula Grouping

#### Accounting / Ratios
- accounting equation;
- net income;
- retained earnings;
- current/quick ratio;
- AR turnover;
- inventory turnover;
- profit margin;
- asset turnover;
- ROA / ROE;
- debt-to-assets.

#### Tax / Financing
- average tax;
- after-tax amount;
- taxable-equivalent yield;
- after-tax debt cost;
- WACC;
- NOPAT;
- FCF;
- ΔNWC;
- depreciation tax shield.

#### Capital Budgeting
- NPV;
- IRR;
- MIRR;
- ARR;
- Brigham PI;
- Berk & DeMarzo PI;
- horizon value.

#### Securities / Derivatives
- call/put payoff;
- option profit;
- forward payoff;
- pre/post-money;
- underwriting spread.

#### Markets / Returns
- total return;
- arithmetic return;
- CAGR;
- excess return;
- beta;
- CAPM;
- nominal-real;
- bond price;
- Gordon model.

### Source-Qualified Boxes

Must remain visibly separate for:

- ROA convention;
- asset turnover convention;
- debt ratio definition;
- PI convention.

## 11. Section 08 — Interpretation Rules

Source: Stage 10.

This section should be organized by question family rather than by textbook.

### Accounting

```text
Profit ↑
→ why?
→ cash also ↑?
→ sustainable?
```

### Ratio

```text
Ratio ↑
→ numerator?
→ denominator?
→ driver?
→ favorable?
→ limitation?
```

### Financing

```text
Debt ↑
→ tax benefit
+
financial risk
+
agency / flexibility effects
```

### Market

```text
Economic shock
→ cash-flow channel
+
discount-rate channel
→ net price effect
```

### Strong vs Context-Dependent Rules

The master reference should clearly separate:

**Strong directional rules**

from:

**Context-dependent rules**

to avoid deterministic shortcuts.

## 12. Section 09 — Perspective Matrix

Source: Stage 11.

### Condensed Structure

| Concept / Event | Company | Investor | Creditor | Management |
|---|---|---|---|---|

Only high-value recurring perspective conflicts should remain in the core.

Examples:

- debt;
- equity;
- dividend;
- repurchase;
- secured debt;
- WACC;
- NPV;
- leverage;
- hedge;
- interest-rate changes.

Long-form perspective detail can live in appendix.

## 13. Section 10 — Decision Protocols

Source: Stage 12.

This should become the operational exam engine.

### Core Protocols to Keep in Main Reference

1. Conceptual MCQ
2. Accounting Treatment
3. Ratio
4. Security / Instrument
5. Financing Choice
6. Capital Raising
7. Derivative
8. Capital Budgeting
9. WACC
10. Governance
11. Market / Economic
12. Risk / Return
13. Consolidation
14. Tax

### Format

Each should fit on a compact card:

```text
Trigger
→ Routing Chain
→ Critical Check
→ Stop Rule
```

## 14. Section 11 — Exam Trap Layer

Source: Stage 13.

The final master reference should **not include all 64 traps in the main body**.

Instead:

### Main Body

Include approximately the highest-value structural traps:

- accrual vs cash;
- retained earnings vs cash;
- debt vs liabilities;
- secured vs senior;
- payoff vs profit;
- net income vs FCF;
- sunk vs opportunity cost;
- WACC misuse;
- NPV vs IRR;
- PI source split;
- required/expected/realized;
- volatility vs beta;
- arithmetic vs CAGR;
- market return vs market risk premium;
- good news vs positive return;
- growth vs value creation.

### Appendix

Keep the complete trap register.

Frequency tags should be added only after Stage 17.

## 15. Section 12 — Reconstruction Paths

Source: Stage 14.

The main reference should keep only the shortest reconstruction anchors.

### Accounting Anchor

```text
earned/incurred
vs
paid/received
```

### Ratio Anchor

```text
flow / stock
```

### WACC Anchor

```text
weighted required returns
+
tax-adjust debt only
```

### NPV Anchor

```text
PV all incremental cash flows
```

### Option Anchor

```text
Call = buy
Put = sell
```

### CAPM Anchor

```text
risk-free
+
beta × market premium
```

### Market Anchor

```text
cash-flow channel
+
discount-rate channel
```

The full 57-entry reconstruction matrix can stay in appendix/reference.

## 16. Section 13 — Syllabus Coverage Map

To be populated in Stage 16.

Planned schema:

| Syllabus Item | Canonical Coverage | Concept | Formula | Interpretation | Protocol | Gap Status |
|---|---|---|---|---|---|---|

Allowed statuses:

- **Fully Covered**
- **Partially Covered**
- **Conceptual — No Formula Needed**
- **Calculation Covered**
- **Interpretation Covered**
- **Gap Found**

No final master freeze can occur while unresolved `Gap Found` items remain.

## 17. Section 14 — Past Exam Validation Map

To be populated in Stage 17.

Planned schema:

| Exam Period | Question | Topic | Canonical Section Used | Trap | Solvable? | Gap? |
|---|---|---|---|---|---|---|

Stage 17 will answer:

```text
Can the canonical system actually solve historical exam questions
without returning to unreconciled notes?
```

This is the practical usability test.

## 18. Section 15 — Source / Convention Appendix

This appendix preserves detail that should not pollute the core.

### Must Include

- source-qualified PI;
- ratio denominator conventions;
- debt-definition conventions;
- historical tax/context details;
- lease terminology context;
- market-index proxy caveat;
- advanced/special-case items from Level 3.

### Purpose

```text
Core reference = operational certainty
Appendix = source nuance / lookup
```

## 19. Main Reference vs Supporting Files

The final system should have three layers.

### Layer A — Canonical Master Reference

Primary study source.

### Layer B — Derived Exam Tools

Generated from Master Reference:

```text
CF4 Canonical Master Cheat Sheet
CF4 Do-Not-Confuse Sheet
CF4 Decision Protocol Sheet
CF4 Exam Trap Sheet
CF4 Reconstruction Sheet
```

### Layer C — Audit Trail

Stages 1–20.

These are not daily study files.

Their purpose is:

- provenance;
- debugging;
- future revision;
- explaining why a canonical decision was made.

## 20. Proposed Final File Set

After Stage 20 freeze, recommended final files:

```text
CF4_Canonical_Master_Reference.md
CF4_Canonical_Master_Cheat_Sheet.md
CF4_Do_Not_Confuse_Sheet.md
CF4_Decision_Protocol_Sheet.md
CF4_Exam_Trap_Sheet.md
CF4_Reconstruction_Sheet.md
CF4_Syllabus_Coverage_Map.md
```

Optional archive folder:

```text
/_reconciliation_audit/
    Stage_01...
    Stage_02...
    ...
    Stage_20...
```

This prevents the audit files from cluttering the study workspace.

## 21. Recommended Obsidian Hierarchy

```text
CF4/
│
├── 00 Canonical/
│   ├── CF4 Canonical Master Reference.md
│   ├── CF4 Canonical Master Cheat Sheet.md
│   ├── CF4 Do Not Confuse Sheet.md
│   ├── CF4 Decision Protocol Sheet.md
│   ├── CF4 Exam Trap Sheet.md
│   └── CF4 Reconstruction Sheet.md
│
├── 01 Syllabus Notes/
│   ├── 1.1 ...
│   └── ...
│
├── 02 Condensed Textbooks/
│
├── 03 Past Exams/
│
├── 04 Exam Discussions/
│
└── 99 Reconciliation Audit/
    ├── Stage 01
    ├── Stage 02
    └── ...
```

## 22. Master Reference Navigation Rules

Every major section should have:

- short explanation;
- compact table/card;
- `Do Not Confuse` link if relevant;
- source qualifier if needed;
- link to deeper note if user wants detail.

### Example Internal Link Pattern

```text
[[CF4 Canonical Master Reference#WACC]]
[[CF4 Do Not Confuse Sheet#Required vs Expected vs Realized Return]]
[[CF4 Exam Trap Sheet#Company WACC Is Not Universal Project Rate]]
```

## 23. Compression Rules

When building the final master:

### Keep

- canonical definition;
- critical distinction;
- default formula;
- assumption;
- interpretation;
- perspective;
- trap;
- reconstruction anchor.

### Remove / Move to Appendix

- duplicate textbook prose;
- worked examples unless uniquely instructive;
- repeated equivalent formulas;
- historical sample values;
- long descriptive lists;
- jurisdiction-specific detail not central to syllabus;
- Level-3 material unless exam evidence promotes it.

## 24. Freeze Eligibility Rules

A canonical item may enter the final frozen Master Reference only if:

1. terminology is reconciled;
2. formula convention is reconciled;
3. perspective is clear;
4. interpretation is consistent;
5. source/context qualifier is attached if needed;
6. syllabus coverage is validated;
7. no contradiction appears in past-exam usability check;
8. MathJax/Markdown renders correctly;
9. cross-file consistency audit passes.

## 25. Stage-15 Validation Checklist

- [x] Final master architecture designed.
- [x] Main-body vs appendix boundary defined.
- [x] Audit trail separated from study layer.
- [x] Derived study-tool outputs defined.
- [x] Obsidian folder structure proposed.
- [x] Navigation/link strategy defined.
- [x] Compression rules defined.
- [x] Freeze eligibility rules defined.
- [x] Stage 16 and Stage 17 placeholders defined.
- [x] No new subject-matter content added.
- [x] Master reference remains not frozen.

## 26. Exit Decision

**Stage 15 is complete as the CF4 Canonical Master Reference Structure.**

The system now has a defined end-product architecture.

Next stage:

> **Stage 16 — Syllabus Validation**

Stage 16 should audit every CF4 syllabus item against the canonical system and assign:

```text
Fully Covered
Partially Covered
Conceptual — No Formula Needed
Calculation Covered
Interpretation Covered
Gap Found
```

Any `Gap Found` item must be resolved before Stage 20 freeze.
