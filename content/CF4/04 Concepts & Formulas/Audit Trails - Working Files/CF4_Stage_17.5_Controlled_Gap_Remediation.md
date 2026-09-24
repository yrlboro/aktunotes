---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: "17.5"
stage_name: "Controlled Gap Remediation"
status: "gap-classification-and-remediation-complete"
date_created: "2026-08-30"
baseline_stage_17: "CF4_Stage_17_Past_Exam_Usability_Validation.md"
source_policy: "syllabus -> topic notes -> prescribed references -> past exam evidence"
general_knowledge_fill: false
master_freeze_allowed: false
---

# CF4 — Stage 17.5: Controlled Gap Remediation

> [!ABSTRACT] Tujuan
> Stage 17.5 menutup gap yang ditemukan pada Stage 16 dan Stage 17 **secara terarah tanpa membangun ulang sistem dari nol**.
>
> Rule:
>
> ```text
> Gap
> → check syllabus
> → check topic note
> → check prescribed source
> → classify canonical destination
> → add only what is source-supported
> → do not promote unsupported historical edge
> ```
>
> Tidak ada gap yang ditutup dengan general knowledge.

## 1. Remediation Decision Matrix

| Gap ID | Topic | Gap | Resolution | Source-Supported Finding | Canonical Action | Source Basis |
|---|---|---|---|---|---|---|
| G01 | 1.2 | Financial Reporting Requirements | RESOLVED — CORE | Topic note explicitly covers why companies publish accounts/annual reports, users, standards, regulators, audit, annual report vs regulatory filing. | Promote compact reporting-requirements/regulation map to Master Sections 02, 08, 10. | 1.2 Financial Reporting Requirements.md; Robinson/Brigham/Weygandt source set |
| G02 | 1.3 | Sustainability Context | RESOLVED — CORE | Topic note explicitly frames sustainability through economic, social, environmental context and warns against importing unsupported modern ESG frameworks. | Add three-dimension sustainability context + scope boundary to terminology/interpretation. | 1.3 Accounting Concepts and Sustainability.md |
| G03 | 2.4 | Swaps in Corporate Finance | RESOLVED — CORE | Topic note explicitly covers interest-rate/currency swaps, cash-flow transformation, counterparty risk, and floating-to-fixed exposure. | Add swap mechanics and issuer perspective; no unnecessary pricing formula. | 2.4 Derivative Securities in Corporate Finance.md; Brigham/Berk prescribed sources |
| G04 | 3.1 | Business Entity Pros/Cons | RESOLVED — CORE | Topic note contains entity forms and comparison dimensions suitable for an exam-ready table. | Add entity comparison: liability, control, continuity, capital access, transferability, taxation/source context. | 3.1 Business Entity Structures.md; Berk & DeMarzo Ch.1 |
| G05 | 4.1 | National/International Market Structure | RESOLVED — CORE | Topic note is specifically devoted to financial-market structure, exchanges, organized vs OTC, primary/secondary and market functions. | Add compact market-structure map to Master. | 4.1 Financial Markets Structure.md |
| G06 | 4.2 | Country-Level Financial vs Real Resources | RESOLVED — CORE | Topic note covers finance as allocation mechanism linking scarce financial capital to real-resource investment and broader economic allocation objectives. | Add firm-level vs economy-level resource-allocation distinction. | 4.2 Finance and Real Resources.md |
| G07 | 5.1 | Investment Asset Characteristics | RESOLVED — CORE | Topic note provides asset/instrument characteristics and market comparison material; issue was compression, not missing source support. | Add asset-class comparison table to Master. | 5.1 Investment Asset Characteristics.md; Robinson/Brigham prescribed sources |
| G08 | 5.2 | Swaps + Derivative Market Comparison | RESOLVED — CORE | Topic note explicitly covers forwards, futures, options, swaps, exchange/OTC mechanics, counterparty and hedging/speculation. | Add four-family derivative comparison and market venue distinction. | 5.2 Derivative Investments.md; Brigham Ch.8/23 |
| E01 | 5.3 | Four Fundamental Factors Affecting Cost of Money | RESOLVED — CORE | Prescribed Brigham framework supports production opportunities, time preference for consumption, risk, and inflation. | Add as compact conceptual recall card. | Brigham prescribed Topik 5 source |
| E02 | 1.6 | DuPont Identity | RESOLVED — FORMULA CARD | Brigham explicitly gives ROA = profit margin × total assets turnover and ROE = ROA × equity multiplier; extended DuPont multiplies all three. | Add formula card + interpretation driver map. | Topik 1 Brigham Ch.3 |
| E03 | 1.6 / 2.1 | EPS, P/E, Payout and Related Market Ratios | RESOLVED — CORE FORMULA CARDS | 1.6 note explicitly includes EPS, P/E, payout ratio and market-to-book. | Promote omitted market/shareholder ratio cards to Stage-9-equivalent addendum. | 1.6 Financial Ratios and Interpretation.md; Weygandt/Brigham |
| E04 | 2.4 / 5.2 | Black–Scholes | RESOLVED — APPENDIX / REFERENCE ONLY | Black–Scholes appears in prescribed derivative sources; topic note deliberately avoids forcing full numerical valuation into core. | Add source-qualified reference card and input intuition; not MEMORIZE core unless final exam-priority decision promotes it. | 2.4 note; Brigham options source |
| E05 | 1.5–1.6 | Debit/Credit + Vertical/Horizontal Analysis | RESOLVED — REFERENCE + CORE DISTINCTION | Bookkeeping mechanics and vertical/horizontal analysis are supported by prescribed accounting sources. | Keep substance-first treatment as default; add compact journal/accounting-cycle reference and vertical-vs-horizontal distinction. | 1.5 note; Weygandt/Robinson |
| E06 | 1.3 | Channel Stuffing | RESOLVED — HISTORICAL-EDGE ALIAS | Exact named term was not found in the current prescribed-source corpus searched. Underlying premature/improper revenue recognition is source-supported. | Do not promote named term as canonical source concept; list in Past-Exam Historical Edge as an alias for premature revenue recognition. | Past-exam validation + source search |
| E07 | 1.4 | Comprehensive Income / OCI | RESOLVED — CORE | Robinson/Weygandt prescribed sources explicitly discuss comprehensive income and OCI. | Add CI/OCI distinction and formula-level relationship where presentation permits. | Robinson; Weygandt prescribed sources |
| E08 | 4.2 | EROIC Exact Convention | RESOLVED — FORMULA CARD | 4.2 note explicitly states EROIC = Expected NOPAT / Operating Capital and compares it with WACC. | Promote from reference-only to exam-ready interpretation/formula card. | 4.2 Finance and Real Resources.md |
| E09 | 1.2 / 4.3 | Sarbanes–Oxley / Section 404 | RESOLVED — SOURCE-CONTEXT APPENDIX | Brigham prescribed source explicitly discusses SOX Section 404 internal-control requirements; this is U.S. textbook context. | Add to Source/Convention Appendix; do not present as universal/current Indonesian law. | Brigham governance source |
| E10 | 4.3 | ESOP | RESOLVED — REFERENCE APPENDIX | Brigham governance source explicitly includes Employee Stock Ownership Plans. | Add compact definition, purpose and governance implication in appendix/reference. | Brigham Ch.13 governance source |
| E11 | 3.4 | Incremental IRR / Crossover Rate | RESOLVED — CORE | 3.4 note explicitly defines incremental IRR as IRR of cash-flow differences between mutually exclusive alternatives. | Add reconstruction/decision card; NPV remains final value-ranking benchmark. | 3.4 Investment Return Methods.md; Berk & DeMarzo |
| E12 | 1.6 | Market-to-Book | RESOLVED — FORMULA CARD | 1.6 note explicitly gives Market/Book = Market Price per Share / Book Value per Share. | Promote formula card with market-data caveat. | 1.6 Financial Ratios and Interpretation.md |
| E13 | 1.3–1.5 | Installment Method | RESOLVED — APPENDIX / REFERENCE ONLY | Robinson prescribed source explicitly discusses installment method for certain cases with uncertainty about buyer payments. | Add special revenue-recognition method to appendix; do not make it default accrual rule. | Robinson prescribed Topik 1 source |
| E14 | 1.5 / 3.3 | FCFF Alternative Bridges | RESOLVED — CORE/APPENDIX FORMULAS | Robinson prescribed source gives FCFF from NI and from CFO, including after-tax interest and fixed-capital investment adjustments. | Add source-qualified FCFF bridge formulas alongside Brigham FCF primitive. | Robinson cash-flow statement chapter |
| E15 | 1.5 | FIFO / LIFO / Weighted-Average Effects | RESOLVED — CORE CONCEPT / APPENDIX DETAIL | Prescribed accounting sources contain inventory cost-flow methods; past exam confirms operational usefulness. | Add directional comparison under rising/falling prices; keep jurisdiction/source caveats. | Robinson/Weygandt/Brigham prescribed sources |
| E16 | 3.2–3.3 | Unlevered Cost of Capital | RESOLVED — CORE FORMULA | Prescribed Berk & DeMarzo material explicitly defines unlevered cost of capital / asset cost of capital within perfect-capital-market framework. | Add formula/reconstruction card and distinguish from WACC under taxes/frictions. | Berk & DeMarzo prescribed source |
| E17 | 2.2 / 5.3 | Inflation-Indexed Note Mechanics | RESOLVED — REFERENCE FORMULA | Prescribed Berk & DeMarzo source contains inflation-indexed bond/note mechanics. | Add index-adjusted principal/coupon mechanism as reference card. | Berk & DeMarzo prescribed debt source |
| E18 | 3.4 | Profitability Index Convention | RESOLVED — CRITICAL CONVENTION RULE | Both official definitions are already source-supported; past-exam usage proves author/topic inference alone is unsafe. | Final rule: read exact problem definition. Preserve Brigham PI and Berk scarce-resource PI as separate quantities. | 3.4 note; Brigham; Berk & DeMarzo; Stage 17 |
| E19 | 1.3 | Historical Cost Principle | RESOLVED — CORE | 1.3 note and prescribed accounting sources support historical-cost measurement as a fundamental accounting concept. | Promote explicit canonical term and Do-Not-Confuse with market value. | 1.3 Accounting Concepts and Sustainability.md; accounting sources |
| E20 | 1.6 / 2.1 | Basic and Diluted EPS | RESOLVED — CORE + APPENDIX DETAIL | Weygandt/Robinson prescribed sources explicitly give basic EPS; Robinson provides diluted EPS and if-converted method. | Add basic EPS to core; diluted EPS mechanics as exam-ready formula/reference cards. | Weygandt; Robinson prescribed sources |
| E21 | 2.5 / 4.1 | Investment Bank Functions | RESOLVED — CORE CONCEPT | 2.5 note explicitly covers investment bank/underwriter roles including issue management, pricing/distribution and underwriting. | Add compact functional map. | 2.5 Capital Raising Methods.md; Brigham/Berk |
| E22 | 4.3 / 2.5 | Going Private / LBO / MBO | RESOLVED — REFERENCE APPENDIX | Brigham prescribed source explicitly contains going-private, LBO, MBO and private-equity framing. | Add compact concept card in appendix/capital-raising-governance crosslink. | Brigham financing source |
| E23 | 1.6 | Times Interest Earned | RESOLVED — FORMULA CARD | 1.6 note explicitly gives Weygandt and equivalent EBIT-based forms. | Promote TIE formula and cash-flow limitation. | 1.6 Financial Ratios and Interpretation.md |
| E24 | 2.5 | Angel / VC / PE Taxonomy | RESOLVED — CORE CONCEPT | 2.5 note explicitly includes angel investors, venture capital and related private-financing roles. | Add funding-stage/investor-type comparison. | 2.5 Capital Raising Methods.md |
| E25 | 3.4 | Annuity / Growing-Perpetuity PV Building Blocks | RESOLVED — RECONSTRUCT / REFERENCE | 3.4 note and prescribed finance sources support annuity/EAA/growing-perpetuity extensions. | Keep as reconstruction/reference building blocks rather than bloating main formula sheet. | 3.4 Investment Return Methods.md; Brigham/Berk |
| E26 | 1.6 / 2.5 / 5.1 | Comparable-Multiple Valuation | RESOLVED — REFERENCE FORMULA | P/E and market ratios are source-supported; comparable valuation is an exam-use extension. | Add P/E- and revenue-multiple valuation as reference card if the problem supplies the comparable multiple. | 1.6 note; prescribed market/capital-raising sources |
| E27 | 4.1 / 3.2 | Perfect Capital Market Assumptions | RESOLVED — CORE | Berk & DeMarzo prescribed source explicitly states benchmark assumptions such as fairly priced securities, no taxes/transaction costs and financing not changing project cash flows. | Add assumption card and link to MM/unlevered-cost questions. | Berk & DeMarzo prescribed source |
| E28 | 1.6 | Debt-to-Equity Convention | RESOLVED — CRITICAL CONVENTION RULE | Past-exam use validates Stage-8 warning: debt may mean interest-bearing debt rather than total liabilities. | Keep formula problem-defined; never silently replace with total liabilities. | 1.6 note + Stage 17 evidence |
| E29 | 3.2 | MM Proposition I / II | RESOLVED — CORE / SOURCE-QUALIFIED | Prescribed Brigham/Berk capital-structure sources contain MM benchmark and tax-shield relations. | Add source-qualified no-tax/tax MM formulas and assumptions; do not universalize. | 3.2 note; Brigham/Berk prescribed sources |
| E30 | 1.5 | Basic Bookkeeping Terminology | RESOLVED — REFERENCE ONLY | 1.5 note/accounting source supports journal/trial-balance/adjusting-entry mechanics. | Add compact terminology appendix; retain substance-first DP02 as default reasoning. | 1.5 Financial Statements Construction.md; accounting sources |
| E31 | Historical Past Exam | Rolling Budget | RESOLVED — DO NOT PROMOTE / HISTORICAL EDGE | No support was found for rolling-budget material in the current syllabus/topic-note/prescribed-source corpus searched. | Keep as historical edge/scope anomaly; do not expand canonical CF4 with unsupported management-accounting content. | Stage 17 past-exam signal + negative source search |

## 2. Stage-16 Gap Closure

All eight syllabus-level gaps can be closed from material already present in the project.

### G01 — Reporting Requirements

```text
Why publish?
→ investor/creditor information need
→ comparability/standardization
→ legal/regulatory requirements
→ audit/credibility
```

Keep distinct:

```text
Accounting standard setter
≠
Securities regulator
≠
Auditor
```

Also:

```text
Annual Report
≠
Financial Statements
≠
Regulatory Filing
```

### G02 — Sustainability

```text
Sustainability
=
economic
+
social
+
environmental context
```

Do not import external modern frameworks as CF4 core when the prescribed material does not require them.

### G03 / G08 — Swaps

```text
Swap
=
contractual exchange of cash-flow profiles
```

Interest-rate intuition:

```text
Original debt: pay floating + spread
Swap: receive floating, pay fixed
Net: fixed-like exposure + original spread
```

A swap changes economic exposure without necessarily extinguishing the original debt.

### G04 — Business Entity Comparison

Final comparison axes:

```text
owner liability
control
continuity
transferability
capital access
administrative complexity
tax/source context
```

### G05 — Market Structure

```text
Primary ↔ Secondary
Exchange-organized ↔ OTC
Money market ↔ Capital market
Domestic/National ↔ International/Global
```

### G06 — Financial vs Real Resources

```text
Firm:
financial capital → real investment → operating FCF → value

Economy:
financial system → directs savings/capital → real resource allocation
```

### G07 — Investment Asset Characteristics

Use:

```text
asset class
→ cash-flow rights
→ maturity
→ liquidity
→ risk
→ return source
→ market venue
```

## 3. High-Value Formula Restorations

### 3.1 DuPont

$$
ROA
=
Profit\ Margin
\times
Total\ Assets\ Turnover
$$

$$
Equity\ Multiplier
=
\frac{Total\ Assets}{Common\ Equity}
$$

$$
ROE
=
Profit\ Margin
\times
Total\ Assets\ Turnover
\times
Equity\ Multiplier
$$

### 3.2 EPS

$$
EPS
=
\frac{
Net\ Income-Preferred\ Dividends
}{
Weighted\text{-}Average\ Common\ Shares
}
$$

### 3.3 P/E

$$
P/E
=
\frac{
Market\ Price\ per\ Share
}{
EPS
}
$$

### 3.4 Market-to-Book

$$
Market/Book
=
\frac{
Market\ Price\ per\ Share
}{
Book\ Value\ per\ Share
}
$$

### 3.5 Times Interest Earned

$$
TIE
=
\frac{
Net\ Income+Interest+Tax
}{
Interest
}
$$

Equivalent source form:

$$
TIE
=
\frac{EBIT}{Interest}
$$

### 3.6 Comprehensive Income / OCI

$$
Comprehensive\ Income
=
Net\ Income
+
Other\ Comprehensive\ Income
$$

### 3.7 EROIC

$$
EROIC
=
\frac{
Expected\ NOPAT
}{
Operating\ Capital
}
$$

```text
EROIC > WACC → growth can create value
EROIC = WACC → marginal value-neutral growth
EROIC < WACC → growth can destroy value
```

### 3.8 Incremental IRR

$$
\Delta CF_t
=
CF_{A,t}
-
CF_{B,t}
$$

Then calculate the IRR of the incremental cash flows. NPV remains the final value-ranking benchmark.

### 3.9 FCFF — Robinson Bridges

$$
FCFF
=
NI
+
NCC
+
Interest(1-T)
-
FCInv
-
WCInv
$$

When the reporting convention includes interest paid in CFO:

$$
FCFF
=
CFO
+
Interest(1-T)
-
FCInv
$$

These source-qualified bridges do not replace Brigham's operating-capital FCF primitive.

## 4. Capital-Structure Restorations

### Perfect Capital Market

Prescribed Berk & DeMarzo benchmark includes assumptions such as:

- fairly priced securities;
- no taxes;
- no transaction costs;
- financing choice does not change project total cash flows.

### Unlevered Cost of Capital

Canonical meaning:

> required return on the underlying business/assets independent of leverage.

### MM Tax-Shield Relation

Source-qualified simplified relation:

$$
V_L
=
V_U
+
TD
$$

Do not infer that maximum debt is optimal outside the model assumptions.

### Debt Definition

```text
Debt ratio / DER
→ read problem definition
→ interest-bearing debt vs total liabilities
→ never silently substitute
```

## 5. Accounting Special Cases

### Historical Cost

Promote to core terminology and keep distinct from market/intrinsic value.

### Inventory Cost-Flow Methods

Restore a compact comparison of FIFO, weighted average, and LIFO directional effects under changing prices. Exact permissibility remains source/jurisdiction dependent.

### Installment Method

Keep as **Reference Only** for source-described special revenue-recognition circumstances.

### Vertical vs Horizontal Analysis

```text
Horizontal → change over time
Vertical/common-size → percentage of a base within a period
```

## 6. Capital-Raising / Institutional Restorations

### Investment Bank

```text
advisory
→ issue design
→ pricing
→ underwriting/purchase
→ distribution/resale
```

### Angel / VC / PE

Keep as financing-stage/investor-type taxonomy.

### Going Private / LBO / MBO

Keep as appendix/reference concepts.

### SOX / ESOP

Supported by prescribed sources but remain **SOURCE-CONTEXT / APPENDIX**.

## 7. Derivative Restorations

### Swaps

Promote to Core.

### Black–Scholes

Classification:

```text
REFERENCE ONLY / APPENDIX FORMULA
```

It appears in prescribed derivative material and past-exam evidence, but should not become the default tool for ordinary derivative questions.

## 8. PI Convention — Final Rule

Brigham:

$$
PI_B
=
\frac{PV(Future\ Inflows)}
{Initial\ Investment}
$$

Berk & DeMarzo scarce-resource framing:

$$
PI_{BD}
=
\frac{NPV}
{Resource\ Consumed}
$$

Final routing rule:

> **Read the exact problem definition. Do not infer PI convention solely from author, topic, or the phrase "capital rationing".**

## 9. Historical-Edge Decisions

### Channel Stuffing

Exact named term was not found in the searched prescribed-source corpus.

Decision:

```text
Historical Edge Alias
→ map to premature/aggressive revenue recognition
→ do not present as canonical source term
```

### Rolling Budget

No support was found in the current syllabus, topic notes, or prescribed-source corpus searched.

Decision:

```text
DO NOT PROMOTE
```

Keep only as a past-exam historical scope anomaly.

## 10. Canonical Destination Summary

| Destination | Items |
|---|---|
| **Promote to Core** | G01–G08, E01, E02, E03, E07, E08, E11, E12, E14, E15, E16, E18, E19, E20-basic, E21, E23, E24, E27, E28, E29 |
| **Core + Special-Case Appendix** | E20 diluted EPS, E25 annuity/growing-perpetuity |
| **Reference / Appendix** | E04, E05 detail, E09, E10, E13, E17, E22, E26, E30 |
| **Historical Edge Alias** | E06 |
| **Do Not Promote / Scope Anomaly** | E31 |

## 11. Stage-Layer Patch Map

| Layer | Required Patch |
|---|---|
| Canonical Terminology | reporting/regulation roles, sustainability, swaps, historical cost, OCI, investor types, perfect market |
| Accounting Treatment | special revenue recognition reference, inventory-method effects, diluted EPS reference |
| Concept Hierarchy | market structure, economy-level resource allocation, swaps, MM/perfect-market benchmark |
| Knowledge Status | Black–Scholes/ESOP/SOX/installment/indexed note as Reference; DuPont/EPS/OCI as Core |
| Formula Layer | DuPont, EPS, P/E, M/B, TIE, CI/OCI, EROIC, incremental IRR, FCFF bridges, unlevered/MM formulas |
| Interpretation Layer | inventory effects, DuPont drivers, EROIC, market multiples |
| Perspective Matrix | swaps, PE/VC/angel, investment bank, indexed debt |
| Decision Protocols | PI definition check, diluted EPS routing, derivative-pricing appendix route |
| Trap Layer | debt definition, PI convention, EPS denominator, diluted EPS, TIE cash limitation |
| Reconstruction Paths | DuPont, EPS/P-E, incremental IRR, FCFF bridge, MM/unlevered cost |
| Source Appendix | SOX, ESOP, Black–Scholes, installment method, indexed note, going private |

## 12. Revalidation Result

```text
G01–G08
→ source support located
→ canonical destination assigned
→ RESOLVED
```

```text
E01–E30
→ source-supported destination assigned
→ RESOLVED
```

```text
E31
→ no source support located
→ excluded from canonical scope
→ RESOLVED as HISTORICAL SCOPE ANOMALY
```

No gap remains in an **unclassified** state.

## 13. Updated Freeze Gate

Before Stage 17.5:

```text
G01–G08 unresolved
E01–E31 unresolved/classification pending
```

After Stage 17.5:

```text
Unclassified syllabus gaps: 0
Unclassified past-exam gaps: 0
Unsupported item promoted to core: 0
Historical scope anomaly retained: E31
```

Remaining gates:

```text
Stage 18 — MathJax / Markdown QA
Stage 19 — Cross-System Consistency Audit
Stage 20 — Merge + Freeze
```

## 14. Stage-17.5 Validation Checklist

- [x] All G01–G08 reviewed against project sources.
- [x] All E01–E31 classified.
- [x] No gap filled with general knowledge.
- [x] Source-supported omitted formulas identified.
- [x] Institutional details separated from core.
- [x] Historical-edge labels separated from canonical terms.
- [x] Rolling-budget scope anomaly explicitly excluded.
- [x] Debt-definition rule strengthened by past-exam evidence.
- [x] PI convention rule strengthened by past-exam evidence.
- [x] Black–Scholes retained without over-promoting it.
- [x] Remediation destinations assigned to canonical layers.
- [x] No unclassified gap remains.
- [x] Freeze remains pending QA and consistency audit.

## 15. Exit Decision

**Controlled Gap Remediation is complete.**

Next:

> **Stage 18 — MathJax / Markdown QA**

Stage 18 should audit both original canonical files and the new remediation formulas/structures before final merge.
