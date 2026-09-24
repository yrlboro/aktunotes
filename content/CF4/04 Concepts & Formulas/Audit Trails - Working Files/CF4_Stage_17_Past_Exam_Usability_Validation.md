---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 17
stage_name: "Past Exam Usability Validation"
status: "past-exam-tested-gaps-found"
date_created: "2026-08-30"
baseline_stage_16: "CF4_Stage_16_Syllabus_Validation.md"
past_exam_frequency_claims_finalized: false
master_freeze_allowed: false
---

# CF4 — Stage 17: Past Exam Usability Validation

> [!ABSTRACT] Tujuan
> Stage 17 menguji apakah canonical system yang dibangun pada Stages 1–16 benar-benar dapat dipakai untuk **historical CF4 exam questions** tanpa kembali ke unreconciled notes.
>
> Audit menggunakan past-exam / pembahasan files yang tersedia untuk beberapa sitting, termasuk 2026-05, 2025-11, 2025-08, 2025-05, 2024-10, 2024-07, 2024-04, dan 2023-11.
>
> Status di sini menilai **usability of the current canonical master architecture**, bukan correctness dari setiap historical official key.

## 1. Usability Status

| Status | Meaning |
|---|---|
| **SOLVABLE** | Current canonical system contains the concept/formula/protocol needed to solve the question family. |
| **PARTIAL** | Core reasoning is present, but a formula, named concept, convention, or fast-path is missing. |
| **GAP** | A material exam-tested concept/formula is absent from the current canonical layer. |
| **CONVENTION RISK** | The system knows the concept but historical exam usage exposes an actual definition/source collision. |
| **SCOPE CHECK** | Past exam contains a family that should not be added until syllabus/prescribed-source support is confirmed. |

## 2. Past-Exam Usability Matrix

| Exam | Question | Topic | Tested Skill | Current Usability | Validation Finding | Gap / Action |
|---|---|---|---|---|---|---|
| 2026-05 | Q1 | 5.3 | Fundamental factors affecting cost of money | PARTIAL / GAP | Canonical macro framework covers inflation/risk/economic factors, but the explicit Brigham four-factor list (production opportunities, time preference, risk, inflation) is not preserved as a high-speed canonical recall item. | E01 |
| 2026-05 | Q2–5 | 1.5 | Accounting equation, classification, NI, equity | SOLVABLE | Directly covered by Accounting Treatment Map, formula layer, and DP02/DP03. | — |
| 2026-05 | Q7 | 1.6 | DuPont decomposition | GAP | Stage 10 discusses ROE drivers, but the exact three-step DuPont identity is not currently a canonical formula card. | E02 |
| 2026-05 | Q8+ | 1.6 | P/E and per-share/market ratios | PARTIAL / GAP | Market/shareholder ratios are not represented with enough exact formula coverage in Stage 9. | E03 |
| 2026-05 | Q30 | 5.2 | Black–Scholes call pricing | GAP | Current canonical derivative layer covers payoff/profit and forwards, not Black–Scholes pricing inputs/formula. | E04 |
| 2025-11 | Q1–2 | 1.5–1.6 | Journal entry / debit-credit mechanics; vertical vs horizontal analysis | PARTIAL / GAP | Economic treatment is covered, but Stage 15 intentionally deemphasized debit/credit and the master does not yet preserve vertical-vs-horizontal analysis explicitly. | E05 |
| 2025-11 | Q4 | 1.3 | Channel stuffing / earnings quality | GAP | Premature revenue recognition is conceptually covered, but named earnings-quality techniques such as channel stuffing are absent from canonical terminology/trap layer. | E06 |
| 2025-11 | Q5 | 1.4 | Comprehensive income and OCI | GAP | Net income and equity are covered; comprehensive income/OCI formula is not canonicalized. | E07 |
| 2025-11 | Q16–17 | 4.2 | EROIC vs WACC / value-based management | PARTIAL | Stage 10 has EROIC interpretation but Stage 9 leaves EROIC as reference and does not preserve the exact next-period numerator convention robustly enough. | E08 |
| 2025-11 | Q18 | 4.3 / 1.2 | Sarbanes–Oxley governance/reporting provisions | GAP / SOURCE-CONTEXT | Governance concepts are covered, but named SOX provisions are not in canonical system. | E09 |
| 2025-11 | Q19–20 | 4.3 | ESOP accounting/valuation; entrenchment | PARTIAL / GAP | Agency/entrenchment logic is covered, but ESOP-specific accounting and off-balance-sheet implications are absent. | E10 |
| 2025-08 | Q1 | 3.3 | Project discount rate and financing ambiguity | SOLVABLE | DP13 and Stage 9 explicitly protect against 'equity-financed → cost of equity' shortcut and require project-risk matching. | — |
| 2025-08 | Q2 | 1.6 | DuPont identity | GAP | Exact formula not yet in Canonical Formula Layer. | E02 |
| 2025-08 | Q3 | 3.4 | Incremental IRR for mutually exclusive projects | PARTIAL / GAP | Decision protocol recognizes NPV-vs-IRR conflicts but exact incremental-IRR construction is not a canonical formula/path. | E11 |
| 2025-08 | Q4 | 1.6 | Net working capital | SOLVABLE | Canonical NWC formula present. | — |
| 2025-08 | Q5 | 1.6 | Market-to-book ratio | GAP | Book vs market value distinction exists, but market-to-book formula is not canonicalized. | E12 |
| 2025-05 | Q4–6 | 1.5 | Assets, net income, equity | SOLVABLE | Fully covered by accounting classification and A=L+E. | — |
| 2025-05 | Q7 | 1.3 / 1.5 | Installment method profit recognition | GAP | Current accrual map does not include installment-sales gross-profit recognition mechanics. | E13 |
| 2025-05 | Q9 | 1.6 | Quick ratio with net receivables | SOLVABLE | Quick-ratio formula and net-receivable interpretation are compatible with current system. | — |
| 2025-05 | Q10–11 | 3.3 | FCFF from operating cash flow / financing items | PARTIAL | FCF conceptual framework is present, but alternative FCFF-from-CFO reconciliation is not a canonical formula path. | E14 |
| 2025-05 | Q20 | 1.5 | FIFO / weighted average / LIFO under rising prices | GAP | Inventory cost-flow methods and directional effects are absent from the canonical master layers. | E15 |
| 2025-05 | Q27 | 3.3 | Unlevered cost of capital | GAP | Current WACC layer does not include the unlevered-cost formula used in perfect-capital-market questions. | E16 |
| 2025-05 | Q28 | 2.2 / 5.3 | Inflation-indexed note coupon | GAP | Indexed-note principal/coupon adjustment mechanics are not in canonical security/formula layer. | E17 |
| 2025-05 | Q29 | 3.4 | PI under capital rationing | CONVENTION RISK | Past discussion uses PV inflows / initial investment while Stage 8 also preserved Berk scarce-resource NPV/resource PI. Past-exam wording must decide which convention the exam expects; this is a real usability collision. | E18 |
| 2024-10 | Q2 | 1.3 | Historical-cost principle | PARTIAL / GAP | Book-vs-market distinction exists, but historical-cost principle is not a dedicated high-speed canonical rule. | E19 |
| 2024-10 | Q3–5 | 1.5 | Assets / NI / equity | SOLVABLE | Fully covered. | — |
| 2024-10 | Q8 | 3.3 | FCFF | PARTIAL | Core FCF present, but question-specific FCFF decomposition may require an alternate formula not yet indexed. | E14 |
| 2024-10 | Q9 | 1.6 / 2.1 | Basic vs diluted EPS, if-converted method | GAP | EPS and diluted EPS are not in canonical formula layer. | E20 |
| 2024-10 | Q10 | 2.5 / 4.1 | Investment-bank functions | GAP | Capital raising mechanics exist but investment-bank functional role is not retained as canonical terminology. | E21 |
| 2024-10 | Q14 | 4.3 | Going-private advantages | GAP | Governance/agency framework is generic; going-private-specific advantages are not retained. | E22 |
| 2024-10 | Q15 | 1.6 | Liquidity ratio classification / times-interest-earned | PARTIAL / GAP | Liquidity ratios covered, but times-interest-earned is absent from formula/reference layer. | E23 |
| 2024-10 | Q16 | 2.5 | Angel investor vs VC / PE | GAP | Capital-raising stages exist, but investor-type taxonomy is not canonicalized. | E24 |
| 2024-10 | Q17 / Q20–21 | 3.4 | NPV annuity/growing perpetuity/incremental IRR | PARTIAL | NPV principle solves the economics, but annuity/growing-perpetuity and incremental-IRR operational forms are not all in Stage 9. | E11/E25 |
| 2024-10 | Q18 | 2.5 / 5.1 | IPO comparable valuation using P/E and P/Revenue | GAP | Comparable-multiple valuation formulas are absent. | E26 |
| 2024-10 | Q23 | 3.3 / 5.4 | Unlevered cost of capital | GAP | Not canonicalized. | E16 |
| 2024-10 | Q24 | 2.1 / 1.6 | Dividend from P/E and payout ratio | GAP | EPS/P-E/payout chain is not canonicalized. | E03/E20 |
| 2024-10 | Q26 | 2.5 | VC ownership / post-money valuation | SOLVABLE | Pre-/post-money reconstruction path exists. | — |
| 2024-10 | Q27 | 4.1 | Perfect capital-market assumptions | GAP | Market structure is a Stage-16 gap and perfect-market assumptions are not retained explicitly. | E27 |
| 2024-10 | Q28 | 2.3 | Revolving line of credit identification | SOLVABLE | Short/medium-term financing taxonomy and funding-choice protocol cover the instrument. | — |
| 2024-10 | Q29 | 4.2 | Constant-growth FCFF valuation | SOLVABLE | Value-of-operations and horizon/growing-perpetuity logic available, although a direct one-line constant-growth operations formula would improve speed. | — |
| 2024-10 | Q30 | 2.2 / 5.3 | Inflation-indexed note coupon | GAP | Not canonicalized. | E17 |
| 2024-07 | Q5 | 2.5 | IPO pre-/post-money pricing | SOLVABLE | Pre/post-money valuation path present. | — |
| 2024-07 | Q6 | 1.6 | EPS | GAP | EPS formula not in canonical layer. | E20 |
| 2024-07 | Q10–11 | 1.6 | Inventory turnover; debt-to-equity convention | PARTIAL / CONVENTION RISK | Inventory turnover is covered; DER shows the exact Stage-8 warning that debt may mean interest-bearing debt rather than total liabilities. | E28 |
| 2024-04 | Q6 | 1.5 | FIFO/LIFO/weighted-average inventory effect | GAP | Inventory cost-flow method comparison absent. | E15 |
| 2024-04 | Q7 | 1.6 / 2.1 | Basic vs diluted EPS | GAP | Not canonicalized. | E20 |
| 2024-04 | Q17–18 | 3.2–3.3 | MM II / unlevered cost of capital | GAP | Capital-structure trade-off is present but exact MM proposition formulas are not canonicalized. | E16/E29 |
| 2023-11 | Q2 | 1.5 | Journal/trial balance/adjusting entry/footing terminology | GAP / REFERENCE | Canonical system deliberately deemphasizes bookkeeping terminology, but past exam shows direct recognition questions can require it. | E30 |
| 2023-11 | Q3 | 1.5 / management accounting | Rolling budget mechanics | GAP / SCOPE CHECK | Rolling-budget question appears in past exam, but this family is not represented in the current canonical system and should be checked against syllabus/source scope before inclusion. | E31 |

## 3. Audit Summary

Historical cases reviewed in this validation matrix: **49**.

The main result is not a simple pass/fail percentage because several entries are grouped question families. The audit nevertheless shows a clear pattern:

- the current canonical system is **strong on core accounting mechanics, NPV/WACC logic, claim/perspective reasoning, and basic return/risk interpretation**;
- it is **not yet sufficient as a stand-alone past-exam reference**;
- historical questions expose several exact formulas, named accounting concepts, institutional details, and ratio/security mechanics that were compressed away during Stages 4–15.

This is precisely the purpose of Stage 17: catch omissions that a pure syllabus/concept audit may miss.

## 4. Past-Exam Gap Register

| Gap ID | Topic | Missing Exam-Tested Item | Required Canonical Action | Priority |
|---|---|---|---|---|
| E01 | 5.3 | Fundamental cost-of-money factors | Add Brigham's production opportunities, time preference, risk, inflation as a compact conceptual recall item. | High |
| E02 | 1.6 | DuPont identity | Add three-step DuPont formula and interpretation link: margin × asset turnover × equity multiplier. | High |
| E03 | 1.6 / 2.1 | P/E and related per-share market ratios | Add EPS/P-E/dividend-payout chain and market-ratio definitions validated from Weygandt/Brigham. | High |
| E04 | 5.2 | Black–Scholes call pricing | Direct source/syllabus check required; 2026-05 past exam explicitly uses it. Add formula/inputs only if prescribed-source/syllabus support is confirmed. | High |
| E05 | 1.5–1.6 | Debit-credit / vertical-horizontal analysis | Add a compact reference layer for journal mechanics plus vertical/horizontal analysis; do not replace substance-first protocol. | Medium-High |
| E06 | 1.3 | Earnings-quality techniques | Add source-supported named techniques such as channel stuffing/premature revenue recognition if within note/source scope. | Medium |
| E07 | 1.4 | Comprehensive income / OCI | Add CI = NI + OCI and core OCI framing from source. | High |
| E08 | 4.2 | EROIC exact convention | Promote exact source formula/convention from reference-only to exam-ready card. | Medium-High |
| E09 | 1.2 / 4.3 | SOX provisions | Check against source/syllabus; if retained, keep as textbook-context institutional detail rather than universal current law. | Medium |
| E10 | 4.3 | ESOP accounting/valuation | Source check and add only if within prescribed material; likely appendix/reference. | Medium |
| E11 | 3.4 | Incremental IRR | Add A−B/B−A construction rule and decision criterion for mutually exclusive projects. | High |
| E12 | 1.6 | Market-to-book ratio | Add market capitalization / book equity formula. | High |
| E13 | 1.3–1.5 | Installment-sales profit recognition | Source/syllabus check; add if official notes contain method. | Medium |
| E14 | 3.3 | FCFF alternative decompositions | Add source-qualified bridges such as CFO + after-tax interest − CapEx when officially supported. | High |
| E15 | 1.5 | Inventory cost-flow methods | Add FIFO/LIFO/weighted-average directional effects under changing prices. | High |
| E16 | 3.2–3.3 | Unlevered cost of capital | Add perfect-market weighted asset-return formula and relationship to leveraged equity/debt. | High |
| E17 | 2.2 / 5.3 | Inflation-indexed note mechanics | Add index-ratio principal adjustment and coupon logic from source if syllabus-supported. | Medium-High |
| E18 | 3.4 | PI convention in actual exam usage | Past exam evidence suggests wording may use Brigham-style PI even in capital-rationing context; Stage 17 must preserve exam-specific source cue rather than assuming topic-author convention. | Critical |
| E19 | 1.3 | Historical cost principle | Promote to explicit canonical accounting concept / do-not-confuse with market value. | Medium-High |
| E20 | 1.6 / 2.1 | Basic and diluted EPS | Add basic EPS, preferred-dividend adjustment, if-converted diluted EPS mechanics. | High |
| E21 | 2.5 / 4.1 | Investment bank functions | Add advisory, underwriting/purchase, resale/distribution roles. | Medium |
| E22 | 4.3 | Going private | Add source-supported advantages/disadvantages if in official reference. | Medium |
| E23 | 1.6 | Times Interest Earned | Add coverage ratio formula and classification. | Medium-High |
| E24 | 2.5 | Investor-type taxonomy | Angel / VC / PE / institutional investor distinctions. | Medium |
| E25 | 3.4 | Annuity / growing-perpetuity project PV | Add compact PV building blocks if source and exam practice require speed. | High |
| E26 | 2.5 / 5.1 | Comparable-multiple valuation | Add P/E and P/Revenue valuation mechanics where source-supported. | Medium-High |
| E27 | 4.1 | Perfect capital-market assumptions | Add canonical assumptions list from prescribed source. | Medium-High |
| E28 | 1.6 | Debt-to-equity convention | Retain explicit interest-bearing debt convention when exam provides corporate-finance DER framing. | Critical |
| E29 | 3.2 | MM Proposition I / II formulas | Add source-qualified perfect-market leverage formulas and no-tax/tax context distinctions. | High |
| E30 | 1.5 | Basic bookkeeping terminology | Add compact reference for journal, trial balance, adjusting entry, footing/tracing where source supports. | Medium |
| E31 | 1.5 / scope | Rolling budget | Do not add automatically. First verify this past-exam family against syllabus and prescribed sources; may represent a historical/out-of-scope edge case. | Scope Check |

## 5. Important New Findings

### 5.1 Stage 16 Was Necessary but Not Sufficient

Stage 16 identified broad syllabus gaps such as:

- reporting requirements;
- sustainability;
- swaps;
- entity structures;
- market structure;
- country-level resource allocation;
- asset characteristics.

Stage 17 identifies a **different kind of gap**:

> concepts/formulas that may sit inside already-covered syllabus headings but were lost during canonical compression.

Examples:

- DuPont;
- basic/diluted EPS;
- comprehensive income / OCI;
- FIFO/LIFO/weighted-average effects;
- unlevered cost of capital;
- MM propositions;
- market-to-book;
- times-interest-earned;
- indexed-note coupon mechanics;
- Black–Scholes.

Therefore syllabus coverage and past-exam usability are complementary tests.

## 6. Canonical System Areas That Passed Well

### Accounting Mechanics

The system successfully handles:

```text
transaction classification
→ A = L + E
→ net income
→ retained earnings/equity
```

This directly supports multiple recent accounting construction questions.

### NPV / Value Logic

The system is strong on:

- NPV;
- risk-appropriate discount rate;
- value creation;
- WACC misuse trap;
- working-capital/capex cash-flow logic.

### Perspective / Claim Logic

The current perspective matrix is useful for:

- dividend vs expense;
- debt/equity;
- primary vs secondary issue;
- financing cost vs investor required return;
- secured/senior distinction.

### Market/Risk Core

The system correctly protects against:

- required vs realized return;
- volatility vs beta;
- nominal vs real;
- market-return vs risk-premium confusion.

## 7. Areas That Failed Because of Over-Compression

The canonicalization process correctly removed many duplicates, but some **exam-operational items were compressed too aggressively**.

### Ratios / Per-Share Metrics

Missing or too thin:

```text
DuPont
P/E
market-to-book
EPS
diluted EPS
times-interest-earned
```

These should be restored as compact cards, not long textbook notes.

### Accounting Named Mechanics

Missing or too thin:

```text
comprehensive income / OCI
FIFO / LIFO / weighted average
channel stuffing
historical cost
vertical vs horizontal analysis
basic bookkeeping terminology
installment method
```

### Corporate Finance Exact Mechanics

Missing:

```text
unlevered cost of capital
MM I / MM II
incremental IRR
alternative FCFF formulas
```

### Security / Market Special Cases

Missing:

```text
indexed notes
Black–Scholes
investment-bank functions
investor-type taxonomy
comparable-multiple valuation
```

## 8. Critical Convention Findings

### 8.1 Debt Definition Is a Real Exam Risk

A July 2024 DER question uses:

```text
Debt
=
Short-Term Borrowing
+
Long-Term Debt
```

rather than total liabilities.

This confirms the Stage-8 rule:

> **Never freeze one universal debt-ratio denominator/numerator definition without context.**

This should be marked **Critical** in the final Do-Not-Confuse and Formula Convention appendix.

### 8.2 Profitability Index Is More Complex Than Author Labels Alone

A May 2025 capital-rationing question is discussed using:

```text
PV(future inflows)
/
initial investment
```

even though the broader reconciliation distinguished a Berk scarce-resource PI as:

```text
NPV
/
resource consumed
```

Therefore final handling should be:

```text
Read the exact problem definition / source framing.
Do not infer PI convention solely from topic label or textbook name.
```

This is a stronger rule than Stage 8 alone.

## 9. Official-Key / Source-Conflict Handling

Past-exam discussions can contain official-key issues.

Example pattern:

```text
textbook computation
≠
official revised key
```

The canonical master should never silently overwrite one with the other.

Required final policy:

```text
Official Key
→ record

Textbook / canonical computation
→ record

If conflict
→ mark KEY CONFLICT
→ do not distort canonical formula to force the official answer
```

This is especially important for EROIC-style questions.

## 10. Trap Frequency — What Can Now Be Said

Stage 13 intentionally avoided historical frequency claims.

Stage 17 provides evidence that several trap families recur across multiple sittings:

### Repeated / Strong Evidence

- accounting classification and owner-distribution vs expense;
- ratio-definition/convention issues;
- NPV/IRR/project-ranking distinctions;
- WACC/project-risk distinctions;
- debt-definition issues;
- per-share/market-ratio mechanics.

### Evidence Exists but Frequency Not Yet Quantified

- inventory methods;
- EPS/dilution;
- indexed notes;
- MM propositions;
- earnings-quality terms;
- Black–Scholes;
- institutional/governance details.

A true frequency table would require parsing every question in every sitting, which this Stage-17 matrix does not claim to have done.

## 11. Stage-17 Remediation Strategy

Do **not** rebuild the system from scratch.

Use two queues:

### Queue A — Stage-16 Syllabus Gaps

Resolve G01–G08 from syllabus/topic notes/official references.

### Queue B — Stage-17 Exam-Usability Gaps

Resolve E01–E31.

Each E-gap should follow:

```text
Past Exam Trigger
→ check syllabus
→ check prescribed source
→ if supported:
     canonical term/formula
     interpretation
     trap
     reconstruction path
→ if not supported:
     mark historical edge / out-of-scope
```

This preserves the source-first rule.

## 12. Freeze Gate After Stage 17

Stage 20 remains blocked.

Current unresolved classes:

```text
Stage-16 syllabus gaps: G01–G08
Stage-17 usability gaps: E01–E31
```

Not every E-gap will necessarily become a main-body item.

Possible outcomes:

- **Promote to Core**
- **Add to Appendix**
- **Add as Formula Card**
- **Add as Trap**
- **Mark Source-Context**
- **Mark Historical Edge / Scope Check**

## 13. High-Priority Pre-Freeze Remediation

Before any final master is generated, the highest-value missing items are:

1. DuPont identity
2. EPS / diluted EPS
3. P/E / market-to-book / times-interest-earned
4. Comprehensive income / OCI
5. Inventory cost-flow methods
6. Unlevered cost of capital
7. MM Proposition I / II
8. Incremental IRR
9. Alternative FCFF bridges
10. PI convention rule based on actual problem definition
11. Historical-cost principle
12. Black–Scholes — pending syllabus/source verification
13. Indexed-note mechanics
14. Stage-16 G01/G02 reporting and sustainability gaps
15. Swaps

## 14. Past-Exam Usability Decision

**The current canonical system is not yet ready to replace all topic notes/past-exam discussions as a stand-alone exam reference.**

However, the architecture itself is working correctly:

- the reasoning layers solve many core questions;
- the validation process exposes exactly what was compressed away;
- the remaining work is targeted remediation, not structural redesign.

## 15. Stage-17 Validation Checklist

- [x] Multiple historical exam sittings reviewed.
- [x] Core accounting questions tested.
- [x] Ratio questions tested.
- [x] Security/financing questions tested.
- [x] Capital-budgeting/WACC questions tested.
- [x] Governance questions tested.
- [x] Market/derivative questions tested.
- [x] Existing Stage-16 gaps distinguished from new exam-usability gaps.
- [x] Debt-definition collision validated by actual past exam.
- [x] PI convention risk validated by actual past-exam usage.
- [x] Official-key conflict policy identified.
- [x] No unsupported exact frequency table claimed.
- [x] Freeze remains blocked.

## 16. Exit Decision

**Stage 17 is complete as the CF4 Past Exam Usability Validation layer.**

The audit reveals that the next step should **not** immediately freeze the master.

Before final QA/freeze, the canonical system needs a controlled remediation pass for:

```text
G01–G08
+
E01–E31
```

After remediation, the planned workflow can continue to:

> **Stage 18 — MathJax / Markdown QA**

followed by:

> **Stage 19 — Cross-System Consistency Audit**

and:

> **Stage 20 — Freeze**
