---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 19
stage_name: "Cross-System Consistency Audit"
status: "consistency-audit-passed-with-stage17_5-merge-patches"
date_created: "2026-08-30"
baseline_stage_18: "CF4_Stage_18_MathJax_Markdown_QA.md"
master_freeze_allowed: true
freeze_requires_stage20_merge: true
---

# CF4 — Stage 19: Cross-System Consistency Audit

> [!ABSTRACT] Tujuan
> Stage 19 memeriksa apakah seluruh canonical system menceritakan **satu cerita yang sama** sebelum final merge/freeze.
>
> Audit difokuskan pada:
>
> - terminology;
> - formula convention;
> - accounting treatment;
> - interpretation;
> - stakeholder perspective;
> - knowledge/formula status;
> - decision protocols;
> - traps;
> - reconstruction paths;
> - syllabus validation;
> - past-exam remediation;
> - scope control.
>
> Stage 18 memastikan file **render dengan benar**. Stage 19 memastikan isi **tidak saling bertentangan**.

## 1. Audit Baseline

The consistency audit uses the post-QA baseline:

```text
Stage 1 FIXED v4
Stages 2–15
Stage 16 FIXED
Stage 17
Stage 17.5
Stage 18
```

Earlier Stage-1 v3 and original Stage-16 files are superseded for final merge.

## 2. Cross-System Consistency Matrix

| Family | Audit Status | Cross-Layer Finding | Required Final Handling |
|---|---|---|---|
| Terminology: Profit vs Cash Flow | PASS | Stage 4, 5, 10, 13, 14 consistently separate Net Income, OCF, FCF and project cash flow. | Keep distinction in Master Do-Not-Confuse. |
| Terminology: Debt vs Liabilities | PASS — CRITICAL QUALIFIER | Stage 4/8/9 warn that debt can be narrower than liabilities; Stage 17 past-exam evidence confirms this. | Final formula layer must never show an unqualified universal debt ratio. |
| Terminology: Secured vs Senior | PASS | Stages 3–4, 11–14 consistently treat collateral and priority as separate dimensions. | Keep as memorized distinction. |
| Terminology: Required / Expected / Realized Return | PASS | Stages 4, 7, 9, 10, 13, 14 all preserve ex-ante/ex-post distinctions. | Keep three-way distinction. |
| Risk: Volatility / Systematic Risk / Beta | PASS | Stages 4, 7, 9, 10, 13, 14 are aligned. | No change. |
| Valuation: Book / Market / Intrinsic | PASS | Terminology and interpretation remain distinct across Stages 3–4, 10, 15, 17.5. | Keep measurement-basis qualifier. |
| Accounting: Accrual vs Cash | PASS | Stage 5 treatment map, Stage 10 interpretation, Stage 12 protocol, Stage 13 traps and Stage 14 reconstruction tell the same story. | No change. |
| Accounting: Retained Earnings vs Cash | PASS | Consistent across treatment, trap and reconstruction layers. | No change. |
| Formula: ROA convention | PASS — SOURCE QUALIFIED | Stage 9 uses Weygandt average-assets default but explicitly preserves Brigham alternate convention. | Final master must retain source/problem convention label. |
| Formula: ROE convention | PASS — SOURCE QUALIFIED | Weygandt common-equity denominator and preferred-dividend adjustment preserved; no conflicting universal formula elsewhere. | Final master uses Weygandt default with source/problem override. |
| Formula: Debt-to-Assets / DER | PASS — CRITICAL QUALIFIER | Stage 9 Weygandt total-liabilities ratio coexists with Stage 17/17.5 interest-bearing debt exam usage. | Promote 'problem-defined debt' rule to formula and trap layers. |
| Formula: Profitability Index | PASS — CRITICAL QUALIFIER | Stage 8/9 preserve Brigham PI and Berk scarce-resource PI; Stage 17.5 strengthens routing to exact problem definition. | Final master must display both definitions separately. |
| Formula: WACC | PASS | Stage 9 formula, Stage 10 interpretation, Stage 11 mirror perspective, Stage 12 routing and Stage 13 trap are consistent. | Keep market/target weights and debt tax adjustment only. |
| Formula: Company WACC vs Project Rate | PASS | Stages 9–14 consistently reject universal use of company WACC for all projects. | Keep as high-priority trap. |
| Formula: FCF | PASS WITH SOURCE LAYERING | Stage 9 uses Brigham operating-capital primitive; Stage 17.5 adds Robinson FCFF bridges as source-qualified alternatives. | Master should show Brigham primitive first; Robinson bridges in source-qualified subsection. |
| Formula: NPV vs IRR | PASS | Value-vs-rate distinction is consistent across Stages 9–14 and Stage 17.5 incremental-IRR restoration. | NPV remains value-ranking benchmark. |
| Formula: MIRR | PASS | Stage 9 source-checked Brigham construction; no contradictory later version. | No change. |
| Formula: ARR | PASS | Stage 9 source-checked Weygandt convention; no conflict later. | No change. |
| Formula: Nominal vs Real | PASS | Exact multiplicative identity and subtraction approximation are consistently separated. | Keep exact as default. |
| Derivative: Payoff vs Profit | PASS | Stages 9–14 consistent. | No change. |
| Derivative: Forward vs Option | PASS | Forward payoff remains symmetric/non-truncated; option payoff has max function. | No change. |
| Derivative: Swaps | PATCH REQUIRED FROM 17.5 | Earlier canonical core was thin; Stage 17.5 resolved G03/G08 and mandates promotion. | Must merge swap core card during Stage 20. |
| Derivative: Black–Scholes | PASS — APPENDIX ONLY | Stage 17.5 classifies it as Reference/Appendix despite past-exam evidence. | Do not promote to default derivative formula. |
| Accounting: Comprehensive Income / OCI | PATCH REQUIRED FROM 17.5 | Absent from early canonical layers; Stage 17.5 resolves E07 as Core. | Must merge into terminology/formula/interpretation during Stage 20. |
| Accounting: Inventory methods | PATCH REQUIRED FROM 17.5 | Absent from early canonical layers; Stage 17.5 resolves E15. | Add compact directional comparison, source/jurisdiction caveat. |
| Ratios: DuPont | PATCH REQUIRED FROM 17.5 | Stage 10 conceptually recognized ROE drivers but Stage 17.5 restores exact identity. | Merge formula + interpretation + reconstruction. |
| Ratios: EPS / P-E / Market-to-Book / TIE | PATCH REQUIRED FROM 17.5 | Past-exam validation exposed over-compression; Stage 17.5 assigns formula-card destinations. | Merge into formula layer and traps where applicable. |
| Capital Structure: Unlevered Cost / MM | PATCH REQUIRED FROM 17.5 | Stage 17.5 restores source-qualified benchmark formulas/assumptions. | Merge as core/source-qualified; do not universalize. |
| Capital Budgeting: Incremental IRR | PATCH REQUIRED FROM 17.5 | Stage 17.5 restores exact difference-cash-flow construction. | Merge into protocol/reconstruction; NPV remains primary. |
| Market Structure / Asset Classes / Reporting / Sustainability | PATCH REQUIRED FROM 17.5 | Stage 16 gaps G01–G08 were classified as resolved from existing project sources. | Merge their compact conceptual maps into final Master. |
| Knowledge Status vs Formula Status | PASS | Stage 7 explicitly governs concept retrieval; Stage 9 governs formula retrieval. No contradiction. | Preserve both status systems with clear legend. |
| Historical Edge: Channel Stuffing | PASS — HISTORICAL EDGE | Stage 17.5 does not promote unsupported exact label; maps it to premature revenue recognition. | Keep only in historical-edge appendix. |
| Historical Edge: Rolling Budget | PASS — EXCLUDE | Stage 17.5 found no support in current syllabus/source corpus. | Do not include in canonical core. |
| Institutional Context: SOX / ESOP | PASS — SOURCE CONTEXT | Stage 17.5 keeps these in appendix/source-context rather than universal law. | Preserve qualifier. |
| Governance: Agency Problem vs Agency Cost | PASS | Stages 4, 10, 13, 14 consistent. | No change. |
| Growth vs Value Creation | PASS | Stages 4, 10, 13 consistently require return > opportunity cost/cost of capital. | No change. |
| Market shock logic | PASS | Stage 10/12/13 consistently use cash-flow channel + required-return channel + expectations. | No deterministic macro shortcut. |
| Perspective: Issuer vs Investor | PASS | Stage 11 perspective matrix aligns with Stage 10 interpretation and Stage 12 routing. | Keep stakeholder label where sign can flip. |
| Scope control | PASS | Stage 17.5 explicitly excludes unsupported historical anomaly and keeps source-context details qualified. | No silent general-knowledge expansion. |
| MathJax / Markdown baseline | PASS | Stage 18 repaired Stage 1 and Stage 16; all 18 baseline files passed structural checks. | Use Stage 1 v4 and Stage 16 FIXED only. |

## 3. Audit Summary

Consistency families reviewed: **40**

- **32** families are internally consistent as currently represented.
- **8** families require a **Stage-17.5 merge patch**, not conceptual re-reconciliation.
- **3** families carry a **critical convention qualifier** that must remain visible after freeze.

Most importantly:

> **No unresolved logical contradiction was found that requires reopening Stages 2–14.**

The remaining work is controlled merge work.

## 4. Final Critical Convention Rules

### 4.1 Debt

Final rule:

```text
“Debt”
→ read the problem/source definition
→ interest-bearing debt?
→ total liabilities?
→ then choose formula
```

Never freeze:

```text
Debt Ratio = Debt / Assets
```

without defining `Debt`.

### 4.2 Profitability Index

Keep two quantities:

$$
PI_B
=
\frac{PV(Future\ Inflows)}{Initial\ Investment}
$$

and:

$$
PI_{BD}
=
\frac{NPV}{Resource\ Consumed}
$$

Final routing rule:

> Read the exact problem definition; do not infer the PI formula solely from the author, topic, or the phrase “capital rationing”.

### 4.3 ROA / Turnover

Average vs ending balances remain convention-sensitive.

The final master should use Weygandt average-balance forms as operational defaults where appropriate, while preserving explicit source/problem overrides.

### 4.4 Company WACC

Final rule:

```text
Company WACC
≠
automatically appropriate project discount rate
```

Project risk must match.

## 5. Stage-17.5 Merge Patches Required Before Freeze

These are not new gaps. Their canonical destinations have already been decided.

### Patch A — Reporting / Sustainability / Markets / Asset Classes

Merge compact core coverage for:

- reporting requirements/regulation roles;
- sustainability economic/social/environmental framing;
- business-entity comparison;
- market structure;
- economy-level financial-vs-real-resource allocation;
- asset-class comparison;
- swap core mechanics.

### Patch B — Formula Restorations

Merge:

- DuPont;
- EPS;
- P/E;
- Market-to-Book;
- Times Interest Earned;
- Comprehensive Income / OCI;
- EROIC;
- Incremental IRR;
- FCFF Robinson bridges;
- unlevered cost of capital;
- source-qualified MM relations.

### Patch C — Reference / Appendix Items

Keep out of the main recall layer unless specifically needed:

- Black–Scholes;
- SOX;
- ESOP;
- installment method;
- inflation-indexed note mechanics;
- going private / LBO / MBO;
- detailed bookkeeping terminology;
- comparable-multiple valuation extensions.

### Patch D — Historical Edge Handling

```text
Channel stuffing
→ Historical Edge Alias
→ underlying concept: premature/aggressive revenue recognition
```

```text
Rolling budget
→ Historical Scope Anomaly
→ exclude from canonical core
```

## 6. Layer-to-Layer Consistency Findings

### Terminology ↔ Formula

PASS.

Formula cards generally use canonical quantities established by Stage 4.

Exceptions are not contradictions; they are source-qualified labels, especially:

- PI;
- ROA/asset-turnover denominator convention;
- debt/leverage definitions.

### Formula ↔ Interpretation

PASS.

Examples:

```text
WACC ↑
→ PV of unchanged cash flows ↓

ΔNWC > 0
→ FCF ↓

Beta ↑
→ CAPM required return ↑
when market risk premium > 0
```

### Interpretation ↔ Perspective

PASS.

Examples:

```text
Interest:
issuer cost
↔
lender income
```

and:

```text
Dividend:
company cash outflow
↔
shareholder cash receipt
```

### Perspective ↔ Trap Layer

PASS.

The trap layer correctly rejects universal-sign statements where perspective matters.

### Decision Protocol ↔ Reconstruction

PASS.

Decision protocols route to the same primitive concepts used by reconstruction paths.

### Syllabus Validation ↔ Past Exam Validation

PASS after Stage 17.5.

Stage 16 found broad coverage gaps.

Stage 17 found operational/exam-specific over-compression gaps.

Stage 17.5 assigns source-supported destinations for both.

## 7. Knowledge-Status Consistency

No conflict was found between:

```text
Stage 7 knowledge status
```

and:

```text
Stage 9 formula status
```

They answer different questions:

### Knowledge Status

```text
Should the concept be memorized, reconstructed, referenced, or avoided?
```

### Formula Status

```text
Should the exact mathematical form be memorized, reconstructed, referenced, or avoided?
```

This distinction must remain explicit in the final master legend.

## 8. Source-Qualified Content Policy

The final master must preserve three content classes.

### Core Canonical

Stable syllabus concepts/formulas suitable for primary study.

### Source-Context / Appendix

Valid prescribed-textbook detail that is:

- jurisdictional;
- institutional;
- specialized;
- or infrequent.

Examples:

- SOX;
- ESOP;
- Black–Scholes;
- installment method.

### Historical Edge

Past-exam terminology or anomaly that is not sufficiently supported for canonical promotion.

Examples:

- channel stuffing as an alias;
- rolling budget as excluded historical scope anomaly.

## 9. Freeze Readiness

At the end of Stage 19:

```text
Unclassified syllabus gaps: 0
Unclassified past-exam gaps: 0
Blocking MathJax/Markdown issues: 0
Unresolved conceptual contradictions: 0
Unresolved formula collisions without qualifier: 0
Unsupported historical anomalies promoted to core: 0
```

Therefore the system is **eligible for Stage 20 merge/freeze**.

Important distinction:

> Stage 19 does not mean every earlier audit file becomes frozen individually.

Stage 20 must construct the final canonical artifacts from the validated decisions and mark those final artifacts as frozen.

## 10. Stage-20 Merge Rules

When producing the final Master Reference:

1. Use Stage 4 terminology as the canonical vocabulary base.
2. Use Stage 5 for accounting treatment.
3. Use Stage 6–7 for hierarchy/status.
4. Use Stage 9 plus Stage-17.5 formula restorations for mathematical content.
5. Use Stage 10 for interpretation.
6. Use Stage 11 for stakeholder perspective.
7. Use Stage 12 for exam routing.
8. Use Stage 13 for traps.
9. Use Stage 14 for reconstruction.
10. Use Stage 16 FIXED for syllabus coverage.
11. Use Stage 17 for historical usability evidence.
12. Use Stage 17.5 for remediation destination decisions.
13. Use Stage 18 rendering rules.
14. Do not copy obsolete Stage-1 raw objects directly into the master.

## 11. Do-Not-Reopen List

The following are considered reconciled and should not be reopened during Stage 20 unless a merge error appears:

- Profit vs cash-flow taxonomy.
- Revenue/cash-receipt and expense/cash-payment timing.
- Debt vs equity.
- Secured vs senior.
- Required/expected/realized return.
- Volatility/systematic risk/beta.
- Book/market/intrinsic value.
- WACC structure.
- NPV vs IRR.
- Exact nominal-real relation.
- Payoff vs profit.
- Hedge vs speculation.
- Agency problem vs agency cost.
- Growth vs value creation.

## 12. Stage-19 Validation Checklist

- [x] Terminology consistency audited.
- [x] Formula conventions audited.
- [x] Accounting-treatment consistency audited.
- [x] Interpretation consistency audited.
- [x] Perspective consistency audited.
- [x] Knowledge-vs-formula status distinction validated.
- [x] Decision protocols cross-checked.
- [x] Exam traps cross-checked.
- [x] Reconstruction paths cross-checked.
- [x] Stage-16 syllabus findings reconciled with Stage-17 usability findings.
- [x] Stage-17.5 remediation decisions incorporated into freeze plan.
- [x] Stage-18 fixed baselines adopted.
- [x] Scope anomalies isolated.
- [x] Critical convention rules preserved.
- [x] No conceptual redesign required.
- [x] Stage 20 merge/freeze authorized.

## 13. Exit Decision

**Stage 19 is complete.**

The CF4 system is now internally consistent enough to proceed to:

> **Stage 20 — Final Merge + Freeze**

Stage 20 should create the actual end products:

```text
CF4_Canonical_Master_Reference.md
CF4_Canonical_Master_Cheat_Sheet.md
CF4_Do_Not_Confuse_Sheet.md
CF4_Decision_Protocol_Sheet.md
CF4_Exam_Trap_Sheet.md
CF4_Reconstruction_Sheet.md
CF4_Syllabus_Coverage_Map.md
```

and mark the final canonical system as frozen.
