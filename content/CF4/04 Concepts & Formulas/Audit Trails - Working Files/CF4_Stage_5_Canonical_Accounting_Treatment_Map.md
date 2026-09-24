---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 5
stage_name: "Canonical Accounting Treatment Map"
status: "validated-not-frozen"
date_created: "2026-08-30"
baseline_stage_1: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md"
baseline_stage_2: "CF4_Stage_2_Cross_Source_Reconciliation.md"
baseline_stage_3: "CF4_Stage_3_Terminology_Collision_Audit.md"
baseline_stage_4: "CF4_Stage_4_Canonical_Terminology_Dictionary.md"
canonical_treatment_frozen: false
---

# CF4 — Stage 5: Canonical Accounting Treatment Map

> [!ABSTRACT] Tujuan
> Stage 5 mengubah terminology canonical Stage 4 menjadi **accounting-mechanics map**:
>
> **economic event → recognition → account effect → statement effect → cash effect → equity effect → interpretation**
>
> Fokus utama adalah Topik 1, dengan bridge terbatas ke taxation, project cash flow, dan group reporting jika source CF4 memang menghubungkannya.
>
> Stage ini **tidak memperluas scope ke advanced bookkeeping atau advanced accounting standards**.

## 1. Governing Reasoning Sequence

Gunakan urutan ini sebelum memikirkan debit/credit:

```text
Economic Event
        ↓
Has income/expense been earned/incurred?
        ↓
Recognition
        ↓
Which accounts change?
        ↓
Asset / Liability / Equity / Revenue / Expense
        ↓
Increase / Decrease
        ↓
Income Statement Effect
        ↓
Statement of Financial Position Effect
        ↓
Cash Effect
        ↓
Equity Effect
        ↓
Interpretation
```

> [!IMPORTANT]
> Debit/credit tetap valid sebagai verification tool, tetapi canonical reasoning CF4 dimulai dari **economic substance**, sesuai scope financial-statement construction.

## 2. Canonical Accounting Treatment Matrix

| ID | Economic Event | Recognition / Treatment | Accounts Affected | Income Statement | Statement of Financial Position | Cash Effect | Equity Effect | Interpretation | Do Not Confuse With | Source Note |
|---|---|---|---|---|---|---|---|---|---|---|
| AT01 | Owner contributes cash | Recognize financing/owner contribution; not revenue | Cash ↑; Contributed Capital/Equity ↑ | No effect | Assets ↑; Equity ↑ | Cash ↑ | Equity ↑ | Financing activity; owner funding, not operating performance | Owner contribution ≠ revenue | 1.5 Financial Statements Construction |
| AT02 | Borrow cash from lender/bank | Recognize liability financing | Cash ↑; Debt/Liability ↑ | No effect on borrowing principal | Assets ↑; Liabilities ↑ | Cash ↑ | No direct equity effect | Financing inflow creates obligation | Borrowing ≠ revenue | 1.5 Financial Statements Construction |
| AT03 | Revenue earned for cash | Recognize revenue when earned | Cash ↑; Revenue ↑ | Revenue ↑; Net Income ↑ | Assets ↑; Equity ↑ through NI | Cash ↑ | Equity ↑ through NI | Operating performance and cash occur together | Revenue ≠ all cash receipts | 1.5 Financial Statements Construction |
| AT04 | Revenue earned on credit | Recognize revenue when earned even without cash | Accounts Receivable ↑; Revenue ↑ | Revenue ↑; Net Income ↑ | Assets ↑; Equity ↑ through NI | No immediate cash effect | Equity ↑ through NI | Accrual accounting: earning precedes collection | Revenue ≠ cash receipt | 1.5 Financial Statements Construction |
| AT05 | Collect existing accounts receivable | No new revenue; settle receivable | Cash ↑; Accounts Receivable ↓ | No new effect | Asset composition changes; total assets usually unchanged | Cash ↑ | No new equity effect | Collection converts one asset into another | Collection ≠ revenue | 1.5 Financial Statements Construction |
| AT06 | Purchase inventory on credit | Recognize inventory asset and payable | Inventory ↑; Accounts Payable ↑ | No immediate expense if inventory not yet consumed/sold | Assets ↑; Liabilities ↑ | No immediate cash effect | No direct equity effect | Supplier financing creates asset + liability | Purchase ≠ immediate expense by default | 1.5 Financial Statements Construction |
| AT07 | Pay existing accounts payable | Settle liability; no new expense if previously recognized | Cash ↓; Accounts Payable ↓ | No new effect | Assets ↓; Liabilities ↓ | Cash ↓ | No new equity effect | Settlement of prior obligation | Payment of payable ≠ new expense | 1.5 Financial Statements Construction |
| AT08 | Cash operating expense paid and incurred | Recognize expense and cash outflow | Cash ↓; Expense ↑ | Expense ↑; Net Income ↓ | Assets ↓; Equity ↓ through NI | Cash ↓ | Equity ↓ through NI | Operating resource consumed and paid | Expense timing must match source fact pattern | 1.5 Financial Statements Construction |
| AT09 | Expense incurred but unpaid | Recognize accrued expense and liability | Expense ↑; Accrued Liability ↑ | Expense ↑; Net Income ↓ | Liabilities ↑; Equity ↓ through NI | No immediate cash effect | Equity ↓ through NI | Accrual creates expense before payment | Expense ≠ cash payment | 1.5 Financial Statements Construction |
| AT10 | Pay previously accrued expense | Settle accrued liability | Cash ↓; Accrued Liability ↓ | No new expense if already recognized | Assets ↓; Liabilities ↓ | Cash ↓ | No new equity effect | Payment settles prior accrual | Cash payment ≠ current-period expense automatically | 1.5 Financial Statements Construction |
| AT11 | Customer pays in advance before earning | Recognize cash and unearned-revenue liability | Cash ↑; Unearned Revenue ↑ | No revenue yet | Assets ↑; Liabilities ↑ | Cash ↑ | No direct equity effect | Company has performance obligation | Cash received ≠ revenue if not earned | 1.5 Financial Statements Construction |
| AT12 | Previously unearned amount becomes earned | Recognize revenue; reduce liability | Unearned Revenue ↓; Revenue ↑ | Revenue ↑; Net Income ↑ | Liabilities ↓; Equity ↑ through NI | Usually no new cash at earning date | Equity ↑ through NI | Obligation satisfied, so liability converts into revenue | Do not recognize revenue twice | 1.5 Financial Statements Construction |
| AT13 | Prepay future expense/service | Recognize prepaid asset, not immediate expense | Cash ↓; Prepaid Asset ↑ | No immediate effect | Asset composition changes; total assets usually unchanged | Cash ↓ | No direct equity effect | Payment precedes consumption of benefit | Prepayment ≠ expense at payment date | 1.5 Financial Statements Construction |
| AT14 | Consume prepaid benefit | Recognize expense; reduce prepaid asset | Prepaid Asset ↓; Expense ↑ | Expense ↑; Net Income ↓ | Assets ↓; Equity ↓ through NI | No current cash effect | Equity ↓ through NI | Asset is consumed over time | Expense may occur without cash outflow in same period | 1.5 Financial Statements Construction |
| AT15 | Purchase long-lived equipment for cash | Capitalize long-lived asset when source treatment requires | Cash ↓; PP&E ↑ | No immediate full expense | Asset composition changes; total assets usually unchanged initially | Cash ↓ | No immediate equity effect | Capital expenditure exchanges cash for productive asset | Asset purchase ≠ immediate expense | 1.5 Financial Statements Construction |
| AT16 | Record depreciation | Allocate asset cost over periods of use | Depreciation Expense ↑; Accumulated Depreciation ↑; Net PP&E ↓ | Expense ↑; Net Income ↓ | Net PP&E ↓; Equity ↓ through NI | No current-period cash outflow from depreciation entry | Equity ↓ through NI | Non-cash expense; affects tax/project cash flow through tax shield in corporate-finance context | Depreciation expense ≠ cash outflow | 1.5 Financial Statements Construction; 3.3 Capital Budgeting and Cost of Capital |
| AT17 | Receive owner dividend/distribution decision and payment | Treat as owner distribution, not expense | Cash ↓; Retained Earnings/Equity ↓ | No expense; no effect on Net Income | Assets ↓; Equity ↓ | Cash ↓ | Equity ↓ | Distribution of value to owners | Dividend ≠ expense | 1.5 Financial Statements Construction |
| AT18 | Repay loan principal | Settle financing liability | Cash ↓; Debt/Liability ↓ | No expense for principal | Assets ↓; Liabilities ↓ | Cash ↓ | No direct equity effect | Financing outflow reduces obligation | Principal repayment ≠ interest expense | 1.5 Financial Statements Construction |
| AT19 | Pay/recognize interest expense | Recognize financing cost when incurred under accrual accounting | Cash may ↓ or Interest Payable ↑; Interest Expense ↑ | Expense ↑; Net Income ↓ | Assets ↓ if paid or Liabilities ↑ if unpaid; Equity ↓ through NI | Cash ↓ if paid | Equity ↓ through NI | Cost of debt financing; tax deductibility may create tax shield in Brigham context | Interest ≠ principal; interest treatment ≠ dividend | 1.1 Taxation Principles; 1.5 Financial Statements Construction |
| AT20 | Pay dividend from corporation | Recognize owner distribution; in Brigham tax context not deductible | Cash ↓; Equity/Retained Earnings ↓ | No expense; no tax deduction in cited Brigham context | Assets ↓; Equity ↓ | Cash ↓ | Equity ↓ | Equity payout occurs after corporate-tax treatment in source framing | Dividend ≠ interest; dividend ≠ expense | 1.1 Taxation Principles; 1.5 Financial Statements Construction |
| AT21 | Interest paid creates tax deduction (Brigham context) | Apply tax rule given/source context; interest reduces taxable income | Taxable Income ↓ relative to no deduction; tax payable/expense impact depends timing/accounting detail | Tax expense may be lower if current tax effect recognized | After-tax retained value/cash flow higher than without deduction, all else equal | Cash tax may be lower; exact timing may differ from tax expense | Equity benefited indirectly through lower tax burden | Tax shield is economic benefit from deductibility | Do not generalize beyond source/jurisdiction; tax expense ≠ cash tax automatically | 1.1 Taxation Principles; 3.3 Capital Budgeting and Cost of Capital |
| AT22 | Income tax expense recognized vs cash tax paid | Recognize tax expense according to accounting/tax treatment; payment timing may differ | Income Tax Expense and tax payable/cash depend timing | Tax expense ↓ Net Income | Liability may arise if unpaid; cash falls when paid | Cash effect may occur in different period | Equity ↓ through after-tax NI | Tax accounting reinforces profit ≠ cash flow | Do not import deep deferred-tax mechanics beyond scope | 1.1 Taxation Principles |
| AT23 | Parent controls subsidiary | Prepare consolidated group accounts in addition to/versus standalone view | Combine parent + controlled subsidiary line items subject to consolidation rules | Group income includes subsidiary results subject to allocation | Group assets/liabilities include controlled subsidiary line items | Group cash flow reflects group external cash flows | Equity includes parent equity plus NCI presentation where applicable | Group is treated as one economic reporting entity | Control, not merely investment existence, drives consolidation | 1.4 Company Account Structure |
| AT24 | Intercompany transaction within consolidated group | Eliminate internal effects in consolidated accounts | Remove intercompany receivable/payable/revenue/expense or other internal effects as appropriate | Internal group revenue/expense effects are eliminated to avoid treating group as trading with itself | Internal balances eliminated | Internal cash transfers are not external group cash flows | No creation of external group equity from internal dealing | Consolidated accounts show external economic activity of group | Do not simply add standalone statements without eliminations | 1.4 Company Account Structure |
| AT25 | Subsidiary less than 100% owned but controlled | Consolidate controlled subsidiary; identify non-controlling interest | Subsidiary line items included; NCI recognized/presented as applicable | Group profit may require attribution between parent owners and NCI | Group assets/liabilities consolidated | Cash flows consolidated as group external flows | NCI represents portion not attributable to parent shareholders | Control determines consolidation; ownership <100% affects allocation | Group profit ≠ entirely parent shareholders' profit | 1.4 Company Account Structure |
| AT26 | Customer advance incorrectly recorded as revenue — correction logic | Reverse premature revenue recognition; recognize liability until earned | Revenue ↓; Unearned Revenue/Liability ↑; Cash unchanged | Net Income ↓ relative to incorrect treatment | Liabilities ↑; Equity ↓ relative to incorrect treatment | Cash unchanged by correction if already received | Equity ↓ via corrected NI | Shows why accounting classification changes ratios and interpretation | Do not infer cash changed because profit changed | 1.5 Financial Statements Construction; 1.6 Financial Ratios and Interpretation |
| AT27 | Credit sale incorrectly treated as cash sale | Recognize receivable rather than cash if cash not received | Accounts Receivable ↑ instead of Cash ↑; Revenue remains if earned | Net Income unchanged if revenue amount correctly recognized | Asset composition changes, total assets usually same | Cash lower than mistaken record; AR higher | Equity unchanged relative to correctly recognized revenue | Classification matters for liquidity analysis even when profit unchanged | Revenue recognition and cash classification are separate | 1.5 Financial Statements Construction |
| AT28 | Increase in operating NWC for project | Treat increase in operating NWC as project cash use, not accounting expense | Operating current assets/liabilities change per project need | No direct accounting expense solely because NWC rises | Balance-sheet operating capital rises | Project FCF ↓ by increase in NWC | No direct equity classification from cash-flow formula alone | Capital tied up in operations reduces cash available to investors | NWC investment ≠ accounting expense | 3.3 Capital Budgeting and Cost of Capital |
| AT29 | Release of operating NWC at project end | Reverse prior working-capital investment as cash recovery | Operating working-capital balances fall/release | No inherent revenue simply from recovery | Operating assets/liabilities unwind | Project FCF ↑ when NWC is released | No direct equity classification from formula alone | Recovery of previously tied-up cash | NWC recovery ≠ project revenue | 3.3 Capital Budgeting and Cost of Capital |
| AT30 | Capital expenditure in project FCF | Treat CapEx as project cash outflow; accounting expense occurs over time via depreciation where applicable | PP&E ↑; Cash ↓ | No immediate full expense under capitalization; depreciation affects later periods | Assets reclassified/increased net of cash exchange | Project FCF ↓ at CapEx date | No immediate full equity reduction solely from purchase | Separates cash investment from accounting cost allocation | CapEx ≠ depreciation; CapEx ≠ immediate expense | 1.5 Financial Statements Construction; 3.3 Capital Budgeting and Cost of Capital |

## 3. Core Accounting Identities

### Accounting Equation

$$
Assets = Liabilities + Equity
$$

### Net Income

$$
Net\ Income = Revenue - Expenses
$$

### Ending Retained Earnings

$$
RE_{end}
=
RE_{begin}
+
Net\ Income
-
Dividends
$$

### Net PP&E

$$
Net\ PP\&E
=
Gross\ PP\&E
-
Accumulated\ Depreciation
$$

These identities are used as **consistency checks**, not as substitutes for transaction recognition.

## 4. Accrual Timing Map

| Economic Pattern | Cash Timing | Recognition Logic | Canonical Account Pattern |
|---|---|---|---|
| Earn now, collect now | Same period | Revenue recognized when earned | Cash ↑ + Revenue ↑ |
| Earn now, collect later | Cash after revenue | Revenue recognized now | AR ↑ + Revenue ↑ |
| Collect now, earn later | Cash before revenue | Liability first | Cash ↑ + Unearned Revenue ↑ |
| Incur now, pay now | Same period | Expense recognized now | Cash ↓ + Expense ↑ |
| Incur now, pay later | Cash after expense | Expense + liability now | Expense ↑ + Accrued Liability ↑ |
| Pay now, consume later | Cash before expense | Asset first | Cash ↓ + Prepaid Asset ↑ |
| Consume long-lived asset | Cash paid earlier | Periodic allocation | Depreciation Expense ↑ + Accumulated Depreciation ↑ |

> [!DANGER]
> **Revenue ≠ cash receipt** and **Expense ≠ cash payment** are the two highest-priority accounting distinctions in this stage.

## 5. Financing vs Operating Treatment Map

| Event | Operating Performance? | Financing Effect? | Net Income? | Cash? |
|---|---|---|---|---|
| Owner contribution | No | Equity financing ↑ | No | ↑ |
| Borrow principal | No | Debt financing ↑ | No | ↑ |
| Repay principal | No | Debt financing ↓ | No | ↓ |
| Interest expense | Financing cost | Debt-related cost | ↓ | ↓ if paid |
| Dividend | No | Equity distribution | No | ↓ |
| Revenue earned | Yes | No direct financing effect | ↑ | Depends on collection |
| Operating expense | Yes | No direct financing effect | ↓ | Depends on payment |

This prevents the common error of treating **all cash inflows as revenue** and **all cash outflows as expense**.

## 6. Taxation Bridge

Stage 5 only retains tax mechanics explicitly supported by current CF4 sources.

### Interest

In Brigham's cited tax framework:

```text
Interest expense
→ deductible for corporate tax
→ taxable income lower
→ tax burden lower
→ after-tax cost of debt lower
```

Corporate-finance expression:

$$
After\text{-}Tax\ Cost\ of\ Debt
=
r_D(1-T)
$$

### Dividend

In the same source context:

```text
Dividend paid
→ owner distribution
→ not deductible for corporate tax
→ no interest-style corporate tax shield
```

> [!WARNING] Textbook Context
> These are **source/jurisdiction-specific textbook rules**. Do not silently convert them into current Indonesian tax law.

### Tax Expense vs Cash Tax

The topic notes explicitly preserve:

> tax expense and cash tax payment may occur at different times.

Therefore:

```text
Tax Expense
≠
Cash Tax Paid
```

Advanced deferred-tax mechanics remain outside the core treatment map unless later syllabus validation shows otherwise.

## 7. Group / Consolidation Treatment Map

### Control

```text
Parent controls subsidiary
        ↓
Consolidated financial statements
        ↓
Parent + controlled subsidiary treated as one economic reporting entity
```

### Intercompany Effects

```text
Parent ↔ Subsidiary internal transaction
        ↓
Exists in standalone entity accounts
        ↓
Eliminate in consolidated group accounts
```

### Non-Controlling Interest

```text
Control exists
+
ownership < 100%
        ↓
Consolidate subsidiary
+
identify NCI
```

> [!IMPORTANT]
> Group profit is not automatically entirely attributable to parent shareholders when NCI exists.

Advanced purchase-price allocation, goodwill mechanics, step acquisitions, foreign-subsidiary translation, and detailed elimination journals remain **beyond this Stage-5 core map**.

## 8. Accounting → Ratio Transmission

Accounting treatment affects ratios because ratios are functions of reported amounts.

Example source-supported error:

```text
Customer advance
incorrectly recognized as revenue
        ↓
Revenue / Net Income overstated
Liability understated
Equity overstated
        ↓
Current Ratio distorted
ROA / ROE potentially distorted
```

Canonical ratio-analysis sequence:

```text
Transaction Treatment
→ Reported Statement Amount
→ Ratio Numerator / Denominator
→ Direction
→ Interpretation
→ Limitation
```

Do not assess a ratio without first checking whether underlying accounting classification is correct.

## 9. Accounting → Project Cash Flow Bridge

This bridge is necessary because CF4 connects accounting to capital budgeting.

### Depreciation

Accounting:

```text
Depreciation
→ Expense ↑
→ Net Income ↓
→ No current cash payment
```

Project cash flow:

```text
Depreciation
→ taxable income lower
→ tax saving
→ depreciation tax shield
```

Source-supported relationship:

$$
Depreciation\ Tax\ Shield
=
T \times Depreciation
$$

### CapEx

Accounting:

```text
Cash ↓
PP&E ↑
No immediate full expense
```

Project FCF:

```text
CapEx
→ immediate project cash outflow
```

### Net Working Capital

$$
\Delta NWC_t
=
NWC_t-NWC_{t-1}
$$

If:

$$
\Delta NWC_t > 0
$$

then additional cash is tied up in operations and:

$$
FCF \downarrow
$$

If working capital is released:

$$
\Delta NWC_t < 0
$$

then:

$$
FCF \uparrow
$$

> [!DANGER]
> **Accounting expense, capital expenditure, and project cash outflow are not interchangeable concepts.**

## 10. Statement-Linkage Protocol

For simple CF4 construction questions:

```text
Transactions
→ Revenue / Expenses
→ Income Statement
→ Net Income
→ Retained Earnings
→ Equity
→ Statement of Financial Position
→ Balance Check
```

Canonical shortcut:

> **IS → NI → RE → SFP → check A = L + E**

This is a construction sequence, not a rule that the statements are economically independent.

## 11. Statement Timing Protocol

| Question Wording | Canonical Statement |
|---|---|
| “at year-end”, “as of [date]”, resources/obligations | Statement of Financial Position |
| “during the year”, revenue/expenses/performance | Income Statement |
| “cash generated/used” | Statement of Cash Flows |
| “why equity changed” | Statement of Changes in Equity |
| accounting policies / detail / estimates | Notes / Disclosure |

## 12. High-Risk Accounting Traps

1. **Owner contribution = revenue** → wrong.
2. **Borrowing = revenue** → wrong.
3. **Loan principal repayment = expense** → wrong.
4. **Dividend = expense** → wrong.
5. **Credit sale means cash increased** → wrong.
6. **AR collection creates new revenue** → wrong.
7. **Payment of AP creates new expense** → wrong when already recognized.
8. **Customer advance = revenue immediately** → wrong if not earned.
9. **Prepayment = expense immediately** → wrong if future benefit remains.
10. **Depreciation = current cash outflow** → wrong.
11. **Retained earnings = cash reserve** → wrong.
12. **Positive net income = cash increased by same amount** → wrong.
13. **CapEx = depreciation** → wrong.
14. **NWC investment = accounting expense** → wrong.
15. **Group statements = simple sum of parent + subsidiary** → wrong because intercompany effects require elimination.
16. **Group profit = fully parent-owned profit** → wrong when NCI exists.
17. **Tax expense = cash tax paid in same period** → not necessarily.
18. **Interest and dividend have identical tax/accounting treatment** → wrong in cited Brigham context.

## 13. Sanity-Check Protocol

### Check 1 — Accounting Equation

$$
A=L+E
$$

must hold after the transaction set.

### Check 2 — Recognition Timing

Ask:

- earned?
- incurred?
- paid?
- received?
- before or after earning/consumption?

### Check 3 — Income vs Cash

If profit changes but cash does not, verify:

- receivable;
- payable/accrual;
- prepaid item;
- unearned revenue;
- depreciation;
- working capital.

### Check 4 — Equity Bridge

$$
RE_{end}
=
RE_{begin}
+
NI
-
Dividends
$$

### Check 5 — Group Logic

For consolidated accounts:

- control?
- ownership percentage?
- intercompany effects eliminated?
- NCI needed?

### Check 6 — Tax Context

- current/source tax rule given?
- interest or dividend?
- accounting tax expense or cash tax?
- avoid importing current-law assumptions.

## 14. Scope Boundaries

### Core Stage-5 Scope

- transaction classification;
- accrual timing;
- simple statement construction;
- retained earnings linkage;
- depreciation;
- prepaid/accrued/unearned items;
- debt/equity financing cash-flow distinction;
- basic tax bridge;
- basic group consolidation logic;
- accounting-to-ratio effects;
- accounting-to-project-cash-flow bridge.

### Not Canonicalized Here

- advanced adjusting-entry mechanics;
- full bookkeeping cycle;
- detailed journal posting;
- advanced deferred tax;
- advanced revenue-recognition standards;
- detailed lease accounting under modern standards;
- purchase price allocation;
- complex goodwill;
- foreign currency translation;
- complex consolidation elimination journals.

These remain outside the Stage-5 map unless later syllabus validation specifically requires them.

## 15. Stage-5 Validation Checklist

- [x] Stage 4 canonical terminology used.
- [x] Core Topik-1 transaction treatments mapped.
- [x] Revenue/cash and expense/cash timing separated.
- [x] Owner financing, debt financing, and operating performance separated.
- [x] Retained earnings/equity effects mapped.
- [x] Depreciation accounting and cash-flow effects separated.
- [x] Tax bridge retained without importing outside-law rules.
- [x] Consolidation/NCI/intercompany logic included at basic syllabus level.
- [x] Ratio transmission included.
- [x] Capital-budgeting bridge included only where sources support it.
- [x] Advanced accounting areas explicitly excluded.
- [x] Treatment map remains validated-not-frozen.

## 16. Exit Decision

**Stage 5 is complete as a Canonical Accounting Treatment Map.**

Next workflow stage:

> **Stage 6 — Concept Hierarchy**

Stage 6 should organize the reconciled CF4 system into:

- **Level 0 — Universal Reasoning Rules**
- **Level 1 — Primitive / Foundation Concepts**
- **Level 2 — Core Derived Concepts**
- **Level 3 — Convenience / Special Case / Context Detail**

Stage 6 should use Stages 1–5 as input and should **not yet assign MEMORIZE / UNDERSTAND-RECONSTRUCT / REFERENCE ONLY / AVOID AS DEFAULT**; that belongs to Stage 7.
