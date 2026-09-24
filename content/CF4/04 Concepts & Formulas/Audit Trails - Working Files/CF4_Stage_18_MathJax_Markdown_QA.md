---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 18
stage_name: "MathJax / Markdown QA"
status: "qa-complete"
date_created: "2026-08-30"
baseline_stage_17_5: "CF4_Stage_17.5_Controlled_Gap_Remediation.md"
qa_baseline_stage_1: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v4.md"
qa_baseline_stage_16: "CF4_Stage_16_Syllabus_Validation_FIXED.md"
master_freeze_allowed: false
---

# CF4 — Stage 18: MathJax / Markdown QA

> [!ABSTRACT] Tujuan
> Stage 18 melakukan **rendering and structural QA** sebelum canonical merge/freeze.
>
> Audit mencakup:
>
> - balanced `$$ ... $$`;
> - malformed LaTeX braces;
> - `\left` / `\right` pairing;
> - malformed `\text{...}`;
> - display math inside Markdown tables;
> - table-column consistency;
> - blank lines inside tables;
> - fenced-code balance;
> - accidental literal tabs.

## 1. Repairs Made During QA

### 1.1 Stage 1 baseline repaired

Stage-1 FIXED v3 masih memiliki **15 dangling `$$` openers inside Markdown table rows** pada later raw-inventory sections. Ini dapat membuat Obsidian menganggap sebagian besar dokumen setelah titik tersebut sebagai display math.

Repair:

```text
CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md
→
CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v4.md
```

Treatment:

- formula tails that survived extraction were converted to inline MathJax;
- dangling delimiters with no surviving formula content were removed;
- no missing formula was invented.

**FIXED_v4 is now the Stage-1 QA baseline.**

### 1.2 Stage 16 table schema repaired

The Stage-16 `Gap Register` body had seven columns, while its header/separator declared six.

Repair:

```text
CF4_Stage_16_Syllabus_Validation.md
→
CF4_Stage_16_Syllabus_Validation_FIXED.md
```

The missing `Gap Area` header was added. No syllabus finding or gap decision was changed.

## 2. File-by-File QA Matrix

| File | Lines | Display Math Blocks | QA Status | Remaining Finding |
|---|---:|---:|---|---|

| CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v4.md | 2343 | 0 | PASS | — |
| CF4_Stage_2_Cross_Source_Reconciliation.md | 874 | 3 | PASS | — |
| CF4_Stage_3_Terminology_Collision_Audit.md | 663 | 0 | PASS | — |
| CF4_Stage_4_Canonical_Terminology_Dictionary.md | 476 | 2 | PASS | — |
| CF4_Stage_5_Canonical_Accounting_Treatment_Map.md | 539 | 13 | PASS | — |
| CF4_Stage_6_Concept_Hierarchy.md | 394 | 0 | PASS | — |
| CF4_Stage_7_Knowledge_Status_Assignment.md | 540 | 0 | PASS | — |
| CF4_Stage_8_Concept_and_Formula_Reconciliation_Matrix.md | 438 | 4 | PASS | — |
| CF4_Stage_9_Canonical_Formula_Layer.md | 1808 | 114 | PASS | — |
| CF4_Stage_10_Interpretation_Reconciliation.md | 485 | 0 | PASS | — |
| CF4_Stage_11_Perspective_Matrix.md | 465 | 0 | PASS | — |
| CF4_Stage_12_Decision_Protocols.md | 666 | 4 | PASS | — |
| CF4_Stage_13_Exam_Trap_Layer.md | 495 | 0 | PASS | — |
| CF4_Stage_14_Reconstruction_Paths.md | 483 | 0 | PASS | — |
| CF4_Stage_15_Canonical_Master_Reference_Structure.md | 882 | 0 | PASS | — |
| CF4_Stage_16_Syllabus_Validation_FIXED.md | 391 | 0 | PASS | — |
| CF4_Stage_17_Past_Exam_Usability_Validation.md | 496 | 0 | PASS | — |
| CF4_Stage_17.5_Controlled_Gap_Remediation.md | 595 | 16 | PASS | — |

## 3. QA Result

Files audited: **18**

Files with blocking MathJax/Markdown findings after repairs: **0**

**All files in the Stage-18 baseline PASS the structural/rendering checks.**

## 4. MathJax Rules for Final Merge

The final master must use these rules:

### Display Math

Use:

```text
$$
formula
$$
```

on standalone lines.

Do not place display-math delimiters inside Markdown tables.

### Inline Math

For formulas inside a table or sentence:

```text
$formula$
```

### Formula Prose

Keep descriptive prose outside MathJax whenever possible.

Preferred:

```text
After-tax debt cost:
$$
r_D(1-T)
$$
```

rather than embedding long text inside a math expression.

### `\text{...}`

Use only within valid math delimiters and always with paired braces.

### Equivalent Forms

If two formulas are source-qualified rather than algebraically equivalent, show them in separate blocks and label the source/convention.

## 5. Markdown Table Rules

Final merge rules:

1. No blank lines inside a table.
2. Header, separator, and body rows must have the same number of columns.
3. Literal `|` inside content must be escaped as `\|`.
4. Do not put multiline display math inside cells.
5. Long conceptual explanations should move below the table if they make cells unstable.

## 6. Obsidian-Specific Safe Pattern

Recommended formula card:

```text
### WACC

**Meaning:** weighted required return of capital providers.

$$
WACC
=
w_Dr_D(1-T)+w_Pr_P+w_Er_E
$$

**Convention:** use appropriate target/market weights.

**Trap:** company WACC is not automatically the project discount rate.
```

Recommended ratio table:

```text
| Ratio | Formula | Interpretation |
|---|---|---|
| Current Ratio | $CA/CL$ | Short-term coverage |
```

## 7. Remediation Formula QA

The Stage-17.5 additions were checked for balanced display math and structural Markdown.

The following restored families are safe to merge structurally:

- DuPont;
- EPS;
- P/E;
- Market-to-Book;
- Times Interest Earned;
- Comprehensive Income / OCI;
- EROIC;
- Incremental IRR;
- FCFF bridges;
- MM tax-shield relation;
- PI source-qualified formulas.

Stage 18 validates **rendering/structure**, not economic/source correctness. Source correctness remains governed by Stage 17.5 and will be cross-checked for consistency in Stage 19.

## 8. Files Superseded for Final Merge

Use:

```text
Stage 1:
CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v4.md
```

instead of v3.

Use:

```text
Stage 16:
CF4_Stage_16_Syllabus_Validation_FIXED.md
```

instead of the original Stage-16 file.

All other Stage-18 baseline files remain unchanged.

## 9. Stage-18 Validation Checklist

- [x] Stage 1 dangling MathJax delimiters repaired.
- [x] Stage 16 table schema repaired.
- [x] All canonical/audit files scanned.
- [x] Display MathJax delimiter balance checked.
- [x] Basic brace pairing checked.
- [x] `\left` / `\right` pairing checked.
- [x] `\text{...}` syntax checked.
- [x] Display math inside table rows checked.
- [x] Table-column consistency checked.
- [x] Blank lines inside tables checked.
- [x] Fenced code blocks checked.
- [x] Stage-17.5 remediation formulas checked.
- [x] Obsidian-safe merge rules defined.

## 10. Exit Decision

**Stage 18 is complete.**

The Stage-18 baseline is structurally safe for the next gate:

> **Stage 19 — Cross-System Consistency Audit**

Stage 19 should now test whether terminology, formula convention, perspective, knowledge status, traps, reconstruction paths, Stage-17.5 remediation decisions, and syllabus/past-exam validation all tell the **same canonical story** before final merge/freeze.
