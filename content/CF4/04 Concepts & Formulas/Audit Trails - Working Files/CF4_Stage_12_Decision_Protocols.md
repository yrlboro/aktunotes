---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 12
stage_name: "Decision Protocols"
status: "exam-routing-validated-not-frozen"
date_created: "2026-08-30"
baseline_stage_11: "CF4_Stage_11_Perspective_Matrix.md"
decision_protocol_layer_frozen: false
---

# CF4 — Stage 12: Decision Protocols

> [!ABSTRACT] Tujuan
> Stage 12 mengubah hasil Stages 1–11 menjadi **exam-time routing algorithms**.
>
> Targetnya bukan menambah materi baru, melainkan mengurangi:
>
> - salah memilih concept;
> - salah perspective;
> - salah formula convention;
> - salah treatment;
> - salah interpretasi;
> - dan waktu yang terbuang karena mencoba semua pendekatan sekaligus.

## 1. Master Routing Algorithm

Gunakan ini untuk setiap soal CF4:

```text
Question
   ↓
What family is this?
   ↓
Concept / Accounting / Ratio / Security / Financing /
Capital Budgeting / Governance / Market-Risk-Return
   ↓
Who is the perspective?
   ↓
What canonical term / treatment / formula applies?
   ↓
What source convention matters?
   ↓
Calculate if needed
   ↓
Interpret
   ↓
Eliminate distractors
```

### 10-Second First Pass

Before calculating anything:

```text
1. Topic?
2. Concept?
3. Perspective?
4. Calculation actually needed?
```

If #4 = **no**, do not create unnecessary algebra.

## 2. Decision Protocol Matrix

| ID | Question Family | Routing Chain | Execution Steps | Main Failure Mode | Typical Use | Baseline |
|---|---|---|---|---|---|---|
| DP01 | Conceptual / Theory MCQ | Keyword → Concept Family → Canonical Definition → Critical Distinction → Perspective → Best Answer | 1. Identify the tested concept family from the stem. 2. Recall the Stage-4 canonical term. 3. Ask which nearby concept it must NOT be confused with. 4. Identify stakeholder/perspective if relevant. 5. Eliminate options that are true in another context but not this one. 6. Choose the statement that matches the source definition most precisely. | Terminology confusion; perspective confusion; overgeneralization. | Revenue vs cash receipt; secured vs senior; required vs realized return. | Stages 3–4, 7, 10–11 |
| DP02 | Accounting Treatment | Economic Event → Recognition → Account(s) Affected → Increase/Decrease → Income Statement → SFP → Cash → Equity → Interpretation | 1. Ignore debit/credit initially. 2. Determine whether the event is earned/incurred/paid/received. 3. Identify the account class. 4. Determine increase/decrease. 5. Trace statement effects. 6. Separate cash timing from accrual effect. 7. Verify A = L + E. 8. Interpret downstream ratio/cash-flow consequences only after treatment is correct. | Cash = revenue/expense; payment creates new expense; collection creates new revenue. | Customer advance; credit sale; accrued expense; prepaid expense; depreciation. | Stages 5, 10 |
| DP03 | Financial Statement Construction | Transactions → Revenue/Expense → Net Income → Retained Earnings → Equity → SFP → Balance Check | 1. Process each transaction through DP02. 2. Build income statement effects. 3. Compute net income. 4. Roll retained earnings. 5. Build statement of financial position. 6. Verify accounting equation. 7. If group accounts: apply control/NCI/intercompany elimination logic. | Retained earnings treated as cash; standalone statements simply added for consolidation. | Simple statement construction; parent/subsidiary group accounts. | Stages 5, 9 |
| DP04 | Ratio Calculation | Requested Ratio → Exact Definition → Numerator → Denominator → Average/Ending Convention → Calculate → Direction → Interpretation → Limitation | 1. Name the exact ratio. 2. Check source/problem convention. 3. Identify whether denominator uses average or ending balance. 4. Check whether debt means liabilities or interest-bearing debt. 5. Calculate. 6. Compare with benchmark/time/peer if available. 7. Interpret driver and limitation. | Using memorized formula without checking convention. | ROA, ROE, debt-to-assets, AR turnover, asset turnover. | Stages 8–10 |
| DP05 | Ratio Interpretation | Ratio Change → Numerator Driver → Denominator Driver → Operating/Financing Cause → Perspective → Context → Limitation | 1. Do not classify higher/lower as good/bad immediately. 2. Identify which component moved. 3. Trace accounting/operating cause. 4. Check leverage/accounting-treatment effects. 5. Compare to history/industry if given. 6. State one limitation. | Higher is always better; ROE increase means operations improved. | Current ratio, turnover, margin, ROA, ROE, leverage. | Stage 10 |
| DP06 | Security / Instrument Identification | Instrument → Claim Type → Cash-Flow Rights → Priority → Maturity → Collateral → Optionality → Risk → Return | 1. Identify debt/equity/derivative/lease. 2. Determine contractual vs discretionary cash flows. 3. Check priority and collateral separately. 4. Check maturity. 5. Identify embedded options and who owns them. 6. Compare issuer vs investor consequence. | Secured = senior; preferred = debt; callable/convertible option ownership reversed. | Common, preferred, bonds, convertible, callable, leases. | Stages 4, 6, 11 |
| DP07 | Financing Choice | Funding Need → Horizon → Amount → Source → Cost → Commitment/Collateral → Flexibility → Funding Risk → Tax/Perspective | 1. Classify need as temporary/permanent, short/long horizon. 2. Match financing maturity to need. 3. Compare explicit and implicit cost. 4. Assess collateral/covenants. 5. Assess refinancing risk/flexibility. 6. Consider tax and claim-priority consequences. | Choosing cheapest nominal source without considering effective cost/risk. | Trade credit, line/revolver, bridge loan, CP, debt, equity, lease. | Stages 6, 10–11 |
| DP08 | Capital Raising / Offering | Need for Capital → Primary vs Secondary → Offering Type → Pricing → Direct Cost → Underpricing/Dilution → Net Proceeds | 1. Ask whether company receives cash. 2. Identify IPO/SEO/private issue/rights etc. 3. Separate primary from secondary shares. 4. Calculate spread/net proceeds if needed. 5. Treat underpricing separately from direct underwriting cost. 6. Evaluate dilution and ownership effects. | Secondary sale treated as new company financing; underpricing = underwriting spread. | IPO, SEO, primary/secondary shares, pre/post-money valuation. | Stages 8–11 |
| DP09 | Derivative Payoff | Contract → Long/Short → Right/Obligation → Strike/Delivery Price → Terminal Underlying → Payoff → Premium → Profit | 1. Identify option vs forward/futures. 2. Identify long/short. 3. For options, determine right to buy/sell. 4. Compute payoff. 5. Only then include premium if question asks profit. 6. Interpret from holder/writer perspective. | Payoff = profit; forward payoff truncated at zero. | Call, put, forward, futures. | Stages 8–11 |
| DP10 | Hedging vs Speculation | Existing Exposure? → New Position → Combined Exposure → Risk Reduced or Added? → Classification | 1. Identify the underlying economic exposure before the derivative. 2. Determine derivative direction. 3. Combine both positions. 4. If net exposure falls, hedge. 5. If exposure is created/increased, speculation. 6. Evaluate combined P&L, not derivative alone. | Derivative loses money therefore hedge failed. | FX/rate/commodity/equity hedge questions. | Stages 10–11 |
| DP11 | Capital Budgeting — Cash Flow Setup | Project Decision → Incremental CF → Sunk Cost? → Opportunity Cost? → CapEx → Depreciation Tax Shield → ΔNWC → Terminal Effects | 1. Use with-project minus without-project logic. 2. Exclude sunk costs. 3. Include opportunity costs/externalities if source/question requires. 4. Separate accounting profit from cash flow. 5. Include CapEx and working-capital investment/release. 6. Apply tax effects consistently. | Using accounting earnings; treating CapEx as expense; omitting NWC recovery. | Project FCF construction. | Stages 5, 9 |
| DP12 | Capital Budgeting — Decision Metric | Cash Flows → Risk-Appropriate Rate → NPV First → IRR/MIRR/Payback/ARR/PI as Supporting Metric | 1. Calculate NPV using appropriate rate. 2. For independent normal projects, check IRR vs required return. 3. If mutually exclusive/ranking conflict, prioritize NPV in cited sources. 4. Use payback for recovery/liquidity, ARR for accounting return, PI with source-qualified definition. | Highest IRR always best; short payback = highest value; PI convention mixed. | NPV, IRR, MIRR, payback, ARR, PI. | Stages 8–10 |
| DP13 | WACC / Cost of Capital | Financing Claims → Component Required Returns → Tax Treatment → Appropriate Weights → WACC → Project-Risk Check | 1. Identify debt/preferred/equity components. 2. Apply tax adjustment only to debt if source context supports. 3. Use appropriate target/market weights. 4. Compute WACC. 5. Ask whether project risk matches firm risk before using as project discount rate. | Book weights silently used; tax-adjusting equity; universal project WACC. | WACC and project discount-rate questions. | Stages 9–11 |
| DP14 | Capital Structure | More Debt/Equity → Tax Benefit → Financial Risk → Distress/Agency Cost → Flexibility → Stakeholder Effect → Value | 1. Identify financing change. 2. Trace tax shield. 3. Trace fixed obligations/refinancing/default risk. 4. Identify agency effects and flexibility. 5. Interpret from shareholder and creditor sides. 6. Avoid one-direction value conclusion without context. | Debt is good because tax shield; equity always safer therefore always better. | Leverage and financing-mix theory. | Stages 10–11 |
| DP15 | Governance / Agency | Principal → Agent → Incentive Misalignment → Behavior → Agency Cost → Governance Mechanism → Residual Cost | 1. Identify principal and agent/claimants. 2. State the incentive conflict. 3. Identify possible wealth transfer/behavior distortion. 4. Match governance mechanism to specific conflict. 5. Consider implementation/flexibility cost. | Agency problem = agency cost; governance always good. | Manager-shareholder, shareholder-creditor, takeover/covenant questions. | Stages 10–11 |
| DP16 | Market / Economic Variable | Variable/Shock → Expected Cash-Flow Channel → Required-Return/Risk-Premium Channel → Price → Total Return → Counter-Channel | 1. Identify inflation/rate/growth/risk-aversion/etc. 2. Ask what happens to expected cash flows. 3. Ask what happens to required return. 4. Combine price effects. 5. If channels conflict and no dominance info is given, classify as context-dependent. | Good economy = stocks up; rate increase = all assets down. | Inflation, recession, rates, economic growth, capital flows. | Stages 10–11 |
| DP17 | Risk / Return Classification | Historical/Expected/Required/Realized? → Nominal/Real? → Total/Systematic? → Metric → Formula → Interpretation | 1. Label time perspective. 2. Label purchasing-power basis. 3. Identify total vs systematic risk. 4. Select arithmetic/CAGR/beta/CAPM/real-return relation accordingly. 5. Interpret without mixing ex ante and ex post quantities. | Historical average = expected return; volatility = beta. | CAPM, beta, historical returns, real returns. | Stages 7–10 |
| DP18 | Bond Price / Yield | Contractual CF → Market Yield → PV → Price → Investor vs Issuer Interpretation | 1. Identify coupon and face cash flows. 2. Discount at market yield. 3. Use inverse price-yield rule as sanity check. 4. Separate coupon rate from yield. 5. Interpret rate changes from existing-holder vs new-investor/issuer perspective. | Coupon rate = yield; rates ↑ is good/bad for everyone. | Bond pricing and rate-direction questions. | Stages 9–11 |
| DP19 | Equity Valuation / Gordon | Expected Dividend → Growth → Required Return → Intrinsic Value → Market Comparison | 1. Confirm constant-growth assumptions and r > g. 2. Use next dividend D1. 3. Apply required return. 4. Compare intrinsic and market value only if question asks. 5. Do not infer model validity from algebra alone. | Using D0 instead of D1; using Gordon when growth not stable. | Constant-growth stock value. | Stage 9–10 |
| DP20 | Consolidation / Group Accounts | Control? → Consolidate? → Combine External Balances → Eliminate Intercompany → Identify NCI → Attribute Profit/Equity | 1. Test control. 2. If controlled, treat group as one economic entity. 3. Eliminate internal balances/transactions. 4. Recognize NCI if ownership <100%. 5. Avoid attributing all group profit to parent owners. | Simple arithmetic sum of statements; NCI treated as ordinary external liability. | Parent/subsidiary group questions. | Stages 5, 10 |
| DP21 | Tax Interpretation | Tax Quantity → Accounting vs Tax Basis → Marginal/Average → Deductibility → Cash-Tax Effect → After-Tax Value | 1. Identify taxable income vs accounting profit. 2. Identify marginal vs average tax rate. 3. Check deductible/non-deductible item. 4. Distinguish tax expense from cash tax timing. 5. Apply after-tax impact only within source/jurisdiction context. | Current Indonesian law silently imported; average tax used for incremental decision. | Taxation and tax-shield questions. | Stages 4–5, 9–10 |
| DP22 | Unknown / Mixed Question | Classify → Route → Solve → Cross-Check | 1. Identify whether the core is accounting, ratio, instrument, financing, capital budgeting, governance, or market. 2. Route to the corresponding protocol. 3. Solve using canonical terms/formulas. 4. Cross-check perspective, convention, units, and interpretation. 5. If two protocols seem relevant, use the more primitive one first. | Jumping straight to remembered formula/keyword. | Multi-topic MCQs. | Stages 1–11 |

## 3. Protocol A — Conceptual / Theory Questions

Use:

```text
Keyword
→ Concept Family
→ Canonical Definition
→ Critical Distinction
→ Perspective
→ Best Answer
```

### Exam Technique

When two choices both look true:

1. ask which one answers the **exact term in the stem**;
2. ask whether one choice uses the wrong perspective;
3. ask whether one choice is merely a consequence, not the definition;
4. ask whether one choice is true only under an unstated assumption.

### Example Logic

If stem asks about **liquidity**:

```text
short-term payment capacity
```

not:

```text
long-term capital structure
```

which belongs to solvency.

## 4. Protocol B — Accounting Treatment Questions

```text
Economic Event
→ Earned / Incurred / Paid / Received?
→ Account(s)
→ Increase / Decrease
→ IS Effect
→ SFP Effect
→ Cash Effect
→ Equity Effect
→ Interpretation
```

### Mandatory Checks

- revenue ≠ cash receipt;
- expense ≠ cash payment;
- owner contribution ≠ revenue;
- borrowing ≠ revenue;
- principal repayment ≠ expense;
- dividend ≠ expense;
- depreciation ≠ current cash outflow.

Final consistency:

$$
Assets
=
Liabilities
+
Equity
$$

## 5. Protocol C — Ratio Questions

### Calculation

```text
Exact ratio name
→ source convention
→ numerator
→ denominator
→ average or ending?
→ calculate
```

### Interpretation

```text
ratio changed
→ which component caused it?
→ operating or financing driver?
→ stakeholder perspective
→ benchmark/context
→ limitation
```

### Mandatory Convention Check

Particularly for:

- ROA;
- ROE;
- asset turnover;
- debt ratio;
- receivable/collection measures.

If the question defines the ratio, **the question wins**.

## 6. Protocol D — Security / Instrument Questions

```text
Instrument
→ Debt / Equity / Derivative / Lease
→ Cash-flow rights
→ Priority
→ Maturity
→ Collateral
→ Optionality
→ Risk
→ Return
→ Issuer vs Investor
```

### Independent Axes

Never collapse:

```text
Secured ≠ Senior
Unsecured ≠ Subordinated
Private ≠ Short-Term
Preferred ≠ Debt
Maturity ≠ Duration
```

## 7. Protocol E — Financing Choice

```text
Funding Need
→ Temporary / Permanent?
→ Short / Long Horizon?
→ Financing Source
→ Effective Cost
→ Fixed Obligation
→ Collateral / Covenant
→ Flexibility
→ Refinancing Risk
→ Tax Effect
```

Use matching logic:

```text
Temporary need
→ shorter financing can be reasonable

Permanent need
→ repeated short-term refinancing can create funding risk
```

But cost and flexibility still matter.

## 8. Protocol F — Capital Raising

```text
Does company receive cash?
        ↓
Yes → primary issuance
No  → secondary sale
        ↓
IPO / SEO / private / rights / debt issue
        ↓
price / spread / underpricing / dilution / net proceeds
```

### Three Costs Must Stay Separate

```text
Underwriting spread
≠
other flotation fees
≠
IPO underpricing
```

## 9. Protocol G — Derivatives

### Options

```text
Call or Put?
→ Long or Short?
→ Right to Buy / Sell?
→ Payoff
→ Premium
→ Profit
```

### Forward / Futures

```text
Long or Short?
→ contractual delivery price
→ terminal underlying
→ symmetric payoff
```

### Hedging

Always evaluate:

```text
Derivative
+
Existing Exposure
=
Combined Economic Position
```

Do not judge hedge quality from derivative P&L alone.

## 10. Protocol H — Capital Budgeting

### Step 1 — Relevant Cash Flows

```text
With Project
-
Without Project
=
Incremental Cash Flow
```

Include when relevant:

- opportunity cost;
- CapEx;
- tax effects;
- depreciation tax shield;
- operating NWC;
- terminal recovery.

Exclude:

- sunk cost.

### Step 2 — Required Return

```text
Project Risk
→ Appropriate Discount Rate
```

Do not default automatically to company WACC.

### Step 3 — Decision

Primary:

$$
NPV
=
\sum_{t=0}^{n}
\frac{CF_t}{(1+r)^t}
$$

Supporting:

- IRR / MIRR;
- payback;
- ARR;
- source-qualified PI.

### Conflict Rule

If mutually exclusive project rankings conflict:

> **Use NPV as the value-maximizing benchmark in the cited CF4 sources.**

## 11. Protocol I — WACC

```text
Debt
→ before-tax cost
→ after-tax cost

Preferred
→ required return

Common Equity
→ required return

+
appropriate weights
→ WACC
```

Canonical:

$$
WACC
=
w_Dr_D(1-T)
+
w_Pr_P
+
w_Er_E
$$

Then ask:

> Is this actually the right risk rate for the project?

## 12. Protocol J — Governance / Agency

```text
Who is principal?
→ Who is agent / other claimant?
→ Incentive mismatch?
→ Behavior induced?
→ Economic cost?
→ Governance mechanism?
→ New cost / limitation?
```

Typical routing:

```text
Shareholder ↔ Manager
Shareholder ↔ Creditor
Controlling ↔ Minority Shareholder
```

## 13. Protocol K — Market / Economic Questions

Use two channels:

```text
Economic Variable
        ↓
Expected Cash Flow?
        +
Required Return / Risk Premium?
        ↓
Price
        ↓
Realized Return
```

### Strong Rules

- required return ↑ → PV ↓, ceteris paribus;
- fixed-rate bond yield ↑ → price ↓;
- inflation ↑ with same nominal return → real return ↓.

### Weak / Context-Dependent Rules

Do not automatically conclude:

- growth ↑ → stock price ↑;
- inflation ↑ → all asset prices ↓;
- recession → all rates ↑;
- good news → positive return.

## 14. Protocol L — Risk / Return

First classify:

```text
Historical?
Expected?
Required?
Realized?
```

Then:

```text
Nominal or Real?
Total Risk or Systematic Risk?
Arithmetic or Compound?
```

Only then select:

- arithmetic mean;
- CAGR;
- beta;
- CAPM;
- nominal-real relation;
- total return.

## 15. Master Distractor-Elimination Protocol

For each answer choice, test:

### Test 1 — Wrong Concept?

Example:

> uses solvency definition when question asks liquidity.

### Test 2 — Wrong Perspective?

Example:

> calls higher interest “favorable” without stating lender perspective.

### Test 3 — Wrong Timing?

Example:

> uses realized return where question asks expected return.

### Test 4 — Wrong Measurement Basis?

Example:

> uses book value when market value is required.

### Test 5 — Wrong Convention?

Example:

> Brigham PI used for Berk scarce-resource question.

### Test 6 — Too Absolute?

Watch for wording such as:

- always;
- necessarily;
- guarantees;
- must increase;
- all else not stated.

Many CF4 relationships are context-dependent.

## 16. Calculation Sanity Checks

After calculation:

### Accounting

$$
A=L+E
$$

### NPV

- sign plausible?
- cash flow timing correct?
- discount rate correct?

### WACC

- weights sum to 1;
- debt tax adjustment only once;
- component costs match weights.

### Option

- long option payoff cannot be negative;
- profit can be negative because premium.

### Forward

- long + short payoff = 0 before counterparty/friction effects.

### Return

- distinguish percentage return from price level;
- nominal vs real basis consistent.

### Ratio

- numerator/denominator units compatible;
- average vs ending convention checked.

## 17. Time-Pressure Routing

### First Pass — Fast Recognition

Answer immediately when the question is:

- direct definition;
- clear terminology distinction;
- one-step ratio;
- one-step directional relationship.

### Second Pass — Structured Calculation

Use for:

- statement construction;
- WACC;
- NPV/IRR;
- derivative payoff;
- return calculation.

### Third Pass — Ambiguous / Cross-Topic

Reserve for questions involving:

- ratio convention ambiguity;
- multiple stakeholder perspectives;
- market channels that conflict;
- capital-budgeting metric conflicts;
- source-qualified terminology.

## 18. Stop Rules

Stop calculating when:

1. one option is already uniquely consistent with the canonical definition;
2. sign/direction is sufficient to eliminate all alternatives;
3. requested answer is conceptual, not numeric;
4. extra precision cannot change the selected option.

This prevents unnecessary calculation in a 40-question, 3-hour exam.

## 19. Universal Final Check

Before locking an answer, ask:

```text
Concept correct?
Perspective correct?
Convention correct?
Timing correct?
Units/sign correct?
Interpretation correct?
```

If all six are yes, move on.

## 20. Stage-12 Validation Checklist

- [x] Conceptual protocol created.
- [x] Accounting-treatment protocol created.
- [x] Financial-statement construction protocol created.
- [x] Ratio calculation/interpretation protocol created.
- [x] Security/instrument protocol created.
- [x] Financing-choice protocol created.
- [x] Capital-raising protocol created.
- [x] Derivative/hedging protocol created.
- [x] Capital-budgeting protocol created.
- [x] WACC protocol created.
- [x] Governance/agency protocol created.
- [x] Market/economic protocol created.
- [x] Risk/return protocol created.
- [x] Distractor-elimination protocol created.
- [x] Sanity checks and stop rules created.
- [x] No new subject-matter scope added beyond Stages 1–11.
- [x] Decision-protocol layer remains validated-not-frozen.

## 21. Exit Decision

**Stage 12 is complete as the CF4 Decision Protocol layer.**

Next stage:

> **Stage 13 — Exam Trap Layer**

Stage 13 should extract only source-supported, reconciliation-supported traps and organize them by:

```text
Trap
→ Why tempting
→ Why wrong
→ Correct rule
→ Typical question signal
→ Prevention protocol
```

Past-exam evidence can later be added in Stage 17; Stage 13 itself should not invent frequency claims without evidence.
