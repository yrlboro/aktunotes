---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 13
stage_name: "Exam Trap Layer"
status: "source-supported-traps-not-frequency-validated"
date_created: "2026-08-30"
baseline_stage_12: "CF4_Stage_12_Decision_Protocols.md"
past_exam_frequency_validated: false
trap_layer_frozen: false
---

# CF4 — Stage 13: Exam Trap Layer

> [!ABSTRACT] Tujuan
> Stage 13 menyatukan **source-supported dan reconciliation-supported traps** yang sudah muncul dari Stages 1–12.
>
> Format:
>
> **Trap → Why Tempting → Why Wrong → Correct Rule → Typical Question Signal → Prevention Protocol**
>
> Stage ini **tidak menyatakan trap mana yang “sering keluar”**. Frequency dan actual past-exam evidence baru divalidasi pada Stage 17.

## 1. Trap Severity Meaning

| Severity | Meaning |
|---|---|
| **Critical** | Salah memilih konsep/quantity; hampir pasti menghasilkan jawaban salah meskipun perhitungan benar. |
| **High** | Common conceptual shortcut yang dapat menyesatkan lintas beberapa topik. |
| **Medium** | Biasanya muncul pada convention, special case, atau wording tertentu. |

## 2. Master Exam Trap Matrix

| ID | Topic | Trap | Why Tempting | Why Wrong | Correct Rule | Typical Question Signal | Prevention Protocol | Evidence Basis |
|---|---|---|---|---|---|---|---|---|
| T01 | 1.1 | Using average tax rate for an incremental decision | Average tax rate is easy to compute and often appears in statements/examples. | Incremental after-tax decisions depend on the tax rate applied to the next unit of income in the source framework. | Use marginal tax rate for incremental decision logic when the question/source indicates it. | incremental income; additional project income; next dollar of income | DP21 — Tax Interpretation | Brigham Ch.2 / Stage 4–12 |
| T02 | 1.1 | Treating tax expense as equal to cash tax paid | Both relate to tax and may be close in simple examples. | Accounting tax expense and cash payment can differ in timing. | Separate recognition from cash timing. | tax expense; tax payable; cash tax; timing | DP02 + DP21 | Stage 5 / Topic 1.1 |
| T03 | 1.2–1.5 | Treating every cash receipt as revenue | Cash inflow feels like income. | Borrowing, owner contributions, AR collection, and customer advances can increase cash without creating revenue. | Ask whether revenue has been earned before recognizing revenue. | cash received; advance; loan proceeds; owner contribution | DP02 — Accounting Treatment | Stage 5 |
| T04 | 1.5 | Treating every cash payment as expense | Cash outflow feels like a cost. | Loan principal repayment, asset purchase, AP settlement, and prepayment can reduce cash without creating current-period expense. | Ask whether an expense has been incurred and whether a future asset/old liability is involved. | cash paid; repayment; equipment purchase; prepaid | DP02 | Stage 5 |
| T05 | 1.5 | Treating owner contribution as revenue | Both increase assets and equity. | Owner contribution is financing from owners, not operating performance. | Owner contribution increases cash and contributed equity, not revenue. | owner invests cash; issued shares for cash | DP02 | Stage 5 |
| T06 | 1.5 | Treating borrowing proceeds as revenue | Cash and liabilities both rise, but the cash inflow can look like income. | Borrowing creates a contractual obligation; it is financing, not earned revenue. | Cash ↑ and debt/liability ↑; no revenue. | bank loan received; bond proceeds; borrowing | DP02 / DP07 | Stage 5 |
| T07 | 1.5 | Treating loan principal repayment as expense | It is a cash outflow related to financing. | Principal repayment settles a liability; interest is the financing expense. | Cash ↓ and debt ↓; principal does not reduce net income. | loan installment; principal; repayment | DP02 | Stage 5 |
| T08 | 1.5 | Treating dividend as expense | Dividend reduces cash and equity. | Dividend is a distribution to owners, not an operating/financing expense in net income. | Cash ↓ and equity/retained earnings ↓; no expense. | dividend declared/paid | DP02 / DP14 | Stage 5 |
| T09 | 1.5 | Recognizing revenue again when AR is collected | Cash arrives at collection date. | Revenue was already recognized when earned on credit. | Collection changes asset composition: Cash ↑, AR ↓. | collect receivable; customer payment after credit sale | DP02 | Stage 5 |
| T10 | 1.5 | Recognizing customer advance immediately as revenue | Cash has already been received. | Before earning/performance, company owes goods/services; the amount is a liability. | Cash ↑ and unearned revenue/liability ↑ until earned. | deposit; advance payment; unearned revenue | DP02 | Stage 5 |
| T11 | 1.5 | Expensing a prepayment immediately | Cash was paid now. | Future benefit remains, so an asset exists until consumed. | Cash ↓ and prepaid asset ↑ first; expense recognized as benefit is consumed. | prepaid insurance; prepaid rent | DP02 | Stage 5 |
| T12 | 1.5 / 3.3 | Treating depreciation as a current cash outflow | Depreciation is called an expense. | It is a noncash cost allocation in the period, although it can affect cash taxes. | Separate accounting expense from cash flow; use tax-shield logic if relevant. | depreciation expense; project cash flow | DP02 / DP11 | Stage 5 / Stage 9 |
| T13 | 1.4–1.5 | Treating retained earnings as a cash reserve | The word 'retained' sounds like cash retained in a bank account. | Retained earnings is an equity account, not a dedicated cash asset. | Use RE only as accumulated earnings less distributions. | retained earnings; available cash | DP03 | Stage 3–5 |
| T14 | 1.4 | Adding parent and subsidiary statements without eliminations | Consolidation superficially resembles arithmetic addition. | Intercompany balances/transactions are internal to the group and must be eliminated. | Treat the group as one economic reporting entity. | consolidated; intercompany; parent/subsidiary | DP20 | Stage 5 |
| T15 | 1.4 | Attributing all consolidated profit to parent shareholders | Parent controls the subsidiary. | Control does not imply 100% ownership; NCI can share in profit/equity. | Consolidate, then attribute where NCI exists. | 80% subsidiary; non-controlling interest | DP20 | Stage 5 |
| T16 | 1.6 | Using a ratio formula without checking source convention | The ratio name looks familiar. | ROA, ROE, asset turnover, and leverage ratios can differ in average-vs-ending balance or debt definition. | Read numerator, denominator, and averaging convention before calculating. | ROA; ROE; debt ratio; turnover | DP04 | Stage 8–9 |
| T17 | 1.6 | Assuming higher current ratio is always better | Liquidity ratios are usually taught as higher = safer. | Excess inventory/cash or inefficient working capital can inflate the ratio. | Identify what drives the ratio and compare with context/industry. | current ratio increases | DP05 | Stage 10 |
| T18 | 1.6 | Assuming higher ROE means operations improved | ROE is an attractive shareholder metric. | ROE can increase because leverage rises or equity shrinks. | Decompose driver: margin, efficiency, leverage, accounting base. | ROE rises | DP05 | Stage 10 |
| T19 | 1.6 | Using total sales instead of net credit sales for AR turnover | Total sales may be easier to find. | Weygandt's canonical formula uses net credit sales. | Use problem/source numerator exactly. | accounts receivable turnover | DP04 | Stage 9 |
| T20 | 1.6 | Using sales instead of COGS for inventory turnover | Many turnover ratios use sales in numerator. | Canonical Weygandt inventory turnover uses COGS. | COGS / average inventory. | inventory turnover | DP04 | Stage 9 |
| T21 | 1.6 | Treating 'debt' as universally equal to total liabilities | Some textbooks use a broad debt-to-assets ratio. | Corporate-finance contexts may use interest-bearing debt more narrowly. | Use an explicit source-qualified definition. | debt ratio; debt-to-assets; leverage | DP04 | Stage 8–9 |
| T22 | 2.1–2.2 | Treating preferred stock as ordinary debt | Preferred dividends can look fixed. | Preferred remains an equity/hybrid security and is a separate capital component in WACC. | Check claim type and payment rights, not just cash-flow pattern. | preferred shares; preferred dividend | DP06 | Stage 3–4 |
| T23 | 2.2 | Treating secured debt as synonymous with senior debt | Both sound safer for creditors. | Secured refers to collateral; senior refers to payment priority. | Analyze collateral and seniority as separate axes. | secured; senior; collateral; priority | DP06 | Stage 3–4 |
| T24 | 2.2 | Treating unsecured debt as synonymous with subordinated debt | Both can sound 'weaker'. | Unsecured means no specific collateral; subordinated means lower payment priority. | Keep collateral and priority independent. | unsecured; subordinated | DP06 | Stage 3–4 |
| T25 | 2.2–2.3 | Choosing shortest/cheapest financing solely by nominal cost | Short-term borrowing often has lower quoted cost. | Funding/refinancing risk, maturity matching, collateral, and flexibility matter. | Use the financing-choice chain, not one-dimensional cost ranking. | short-term loan; bridge; line of credit; permanent need | DP07 | Stage 10–12 |
| T26 | 2.3 | Treating trade discount percentage as annual financing cost | A 2% discount can appear 'small'. | Forgoing it repeatedly over short intervals can imply a very high annualized cost. | Compute periodic cost then annualize over extra-credit days. | 2/10 net 30; trade credit | DP07 | Stage 9 |
| T27 | 2.5 | Treating secondary share sale as new company financing | Shares are being sold in the market. | Proceeds go to selling shareholders, not the issuer. | Ask first: does the company receive cash? | secondary shares; block sale | DP08 | Stage 4 / 12 |
| T28 | 2.5 | Treating IPO underpricing as the underwriting spread | Both are flotation/issuance costs. | Spread is direct underwriter compensation; underpricing is offer price below initial market price. | Keep direct spread and money-left-on-table separate. | offer price; first-day price; underwriter proceeds | DP08 | Stage 9–10 |
| T29 | 2.5 | Assuming dilution automatically destroys shareholder wealth | Existing ownership percentage falls after new shares. | If shares are issued at fair value and capital is productive, percentage dilution need not equal wealth loss. | Separate ownership percentage from value per shareholder. | new issue; post-money; dilution | DP08 | Stage 10–11 |
| T30 | 2.4 / 5.2 | Treating option payoff as option profit | Payoff is often the first number computed. | Profit must include initial premium/cost. | Compute payoff first, then subtract/add premium. | call/put profit; premium | DP09 | Stage 9 |
| T31 | 2.4 | Reversing call and put rights | Both use strike price and max functions. | Call holder has right to buy; put holder has right to sell. | Translate contract right into plain language before formula. | call; put; strike | DP09 | Stage 4 / 9 |
| T32 | 2.4 | Reversing option holder and writer | Long/short can be confused with bullish/bearish intuition. | Holder owns the right; writer bears the corresponding obligation. | Identify contract side before payoff sign. | long call; short call; writer | DP09 | Stage 11 |
| T33 | 5.2 | Truncating forward payoff at zero like an option | Both depend on S_T and a contract price. | Forward parties are obligated; long payoff can be negative. | Use S_T − K for long forward without max(·,0). | forward payoff | DP09 | Stage 9 |
| T34 | 5.2 | Calling a hedge unsuccessful because the derivative position lost money | Loss is visible on the derivative leg. | A hedge is evaluated on the combined underlying + derivative position. | Identify existing exposure before classifying result. | hedge loss; derivative loss | DP10 | Stage 10–12 |
| T35 | 3.3 | Using accounting net income as project cash flow | Net income is a familiar profitability measure. | Capital budgeting uses incremental cash flow, including CapEx/NWC/tax effects. | Use with-project minus without-project cash flows. | project earnings; project cash flow | DP11 | Stage 5 / 9 |
| T36 | 3.3 | Including sunk cost in project cash flow | The cost may be large and psychologically salient. | It cannot be changed by the current decision. | Exclude past unavoidable costs. | already spent; feasibility study cost | DP11 | Stage 6 / 12 |
| T37 | 3.3 | Ignoring opportunity cost because no cash payment occurs | There may be no explicit invoice. | Using an existing resource can forgo value elsewhere. | Include forgone benefit if incremental to project decision. | owned land/building used by project | DP11 | Stage 6 / 12 |
| T38 | 3.3 | Treating CapEx as immediate accounting expense | CapEx is a cash outflow. | Accounting capitalizes long-lived asset; project FCF records cash outflow immediately. | Separate accounting treatment from project cash flow. | equipment purchase; initial investment | DP02 + DP11 | Stage 5 |
| T39 | 3.3 | Omitting working-capital investment or terminal recovery | NWC is not an expense and may look secondary. | An increase ties up cash; release returns cash. | Include Δ operating NWC with correct sign and terminal unwind if stated. | inventory/AR build; terminal recovery | DP11 | Stage 5 / 9 |
| T40 | 3.3 | Tax-adjusting cost of equity in WACC | Debt cost is multiplied by (1−T), making it tempting to apply to all components. | Corporate tax shield in the cited framework applies to interest, not common-equity return. | Apply after-tax adjustment only to debt. | WACC; cost of equity | DP13 | Stage 9 |
| T41 | 3.3 | Using book-value weights automatically in WACC | Book values are easy to read from financial statements. | Brigham emphasizes target/market-value capital weights for WACC. | Use appropriate target/market weights unless question specifies otherwise. | WACC weights | DP13 | Stage 9 |
| T42 | 3.3 | Using company WACC for every project | WACC is the company's headline hurdle rate. | Project risk can differ from firm-average risk. | Match discount rate to project cash-flow risk. | new project; different business risk | DP13 | Stage 6 / 9 |
| T43 | 3.4 | Choosing the project with highest IRR when NPV rankings conflict | IRR is intuitive as a percentage return. | Mutually exclusive projects can differ in scale/timing; highest IRR need not maximize value. | Use NPV as primary value-maximizing benchmark in cited sources. | mutually exclusive; crossover; ranking conflict | DP12 | Stage 9–10 |
| T44 | 3.4 | Assuming one IRR always exists and is meaningful | IRR is commonly taught as one number. | Nonnormal cash flows can produce multiple or no useful IRRs. | Inspect cash-flow sign pattern; fall back to NPV. | multiple sign changes | DP12 | Stage 9 |
| T45 | 3.4 | Treating shorter payback as equivalent to higher value | Fast recovery feels safer. | Payback ignores post-payback cash flows; regular payback ignores TVM. | Use payback as supplementary liquidity/recovery measure. | payback ranking | DP12 | Stage 10 |
| T46 | 3.4 | Treating ARR as IRR | Both are expressed as rates of return. | ARR uses accounting net income/average investment; IRR is a cash-flow discount rate. | Check numerator, denominator, and TVM basis. | annual rate of return; accounting rate | DP12 | Stage 9 |
| T47 | 3.4 | Using Brigham PI threshold on Berk & DeMarzo PI | Both are called profitability index. | They are different quantities in current source set. | Keep source-qualified PI definitions. | profitability index; scarce resource | DP12 | Stage 8–9 |
| T48 | 4.3 | Treating agency problem and agency cost as synonyms | Both appear in the same governance discussion. | Agency problem is the conflict; agency cost is the economic consequence/mitigation cost. | Use conflict → cost → governance chain. | agency problem; agency cost | DP15 | Stage 3–4 |
| T49 | 4.3 | Assuming governance mechanism is always value-increasing | Governance aims to reduce agency problems. | Monitoring, constraints, and incentives also impose direct/flexibility costs. | Assess benefit of conflict reduction versus implementation cost. | board control; covenant; takeover defense | DP15 | Stage 10–11 |
| T50 | 4.2 | Equating growth with value creation | Growth sounds positive and can increase revenue/assets. | Growth destroys value if incremental returns are below opportunity cost of capital. | Compare expected operating return/value creation against cost of capital. | growth; expansion; new investment | DP12 / DP15 | Stage 6 / 10 |
| T51 | 5.4 | Treating required return, expected return, and realized return as synonyms | All are expressed as percentages. | Required/expected are ex ante; realized is ex post; required and expected can differ outside equilibrium/model assumptions. | Label time perspective before formula. | expected; required; actual; realized | DP17 | Stage 3–4 |
| T52 | 5.4 | Treating historical average return as guaranteed expected return | Historical mean is often used as an estimate. | It is noisy sample evidence and may not represent future distribution. | Label it historical estimate and state uncertainty. | historical average; forecast | DP17 | Stage 9–10 |
| T53 | 5.4 | Treating CAGR as arithmetic average return | Both summarize multi-year performance. | CAGR measures compound wealth growth; arithmetic mean averages one-period returns. | Choose statistic based on question objective. | average return; compounded return | DP17 | Stage 9 |
| T54 | 5.4 | Treating volatility as beta/systematic risk | Both are measures of risk. | Volatility measures total dispersion; beta measures market sensitivity/systematic exposure. | Ask what risk quantity the question needs. | standard deviation; beta; systematic risk | DP17 | Stage 4 / 9 |
| T55 | 5.4 | Using market return instead of market risk premium in CAPM beta term | The market return is visible in the formula inputs. | CAPM scales the excess market return over risk-free rate. | Use beta × (E[R_M] − r_f). | CAPM; expected market return | DP17 | Stage 9 |
| T56 | 5.4 | Assuming every risky asset must have expected return above risk-free | Risk usually commands a premium. | A negative-beta asset can hedge market risk and have CAPM expected return below risk-free. | Use beta sign in CAPM rather than generic 'riskier means higher return'. | negative beta | DP17 | Stage 6 / 10 |
| T57 | 5.3–5.4 | Presenting real return ≈ nominal − inflation as exact | The approximation is simple and often numerically close. | Exact relation is multiplicative. | Use exact Fisher-style identity unless approximation is explicitly acceptable. | real return; inflation | DP17 | Stage 9 |
| T58 | 5.3 | Treating coupon rate as yield | Both are percentages attached to a bond. | Coupon rate is contractual relative to par; yield is market-required return implied by price/cash flows. | Separate contract cash flow from market discount rate. | coupon; YTM; bond price | DP18 | Stage 4 / 9 |
| T59 | 5.3 | Assuming higher market rates are favorable/unfavorable to everyone | Higher rates have a clear direction in some contexts. | Existing fixed-rate bond holders lose price; new lenders may get higher yields; issuers face higher borrowing cost. | State stakeholder and existing/new position. | interest rates rise | DP18 | Stage 11 |
| T60 | 5.3 | Assuming good economic news guarantees positive market return | Better economy sounds like better stocks. | Prices react to surprises and both expected-cash-flow and discount-rate channels. | Compare news with prior expectations and required-return effect. | strong GDP; good earnings news; market falls | DP16 | Stage 10 |
| T61 | 5.3 | Assuming inflation increase means all asset prices fall | Higher inflation often raises nominal rates. | Cash-flow effects, pricing power, real claims, and rate responses differ across assets. | Use cash-flow + required-return channels. | inflation rises | DP16 | Stage 10 |
| T62 | 5.3 | Assuming recession makes all interest rates rise | Risk premiums can rise in recession. | Risk-free rates can fall while risky credit spreads rise. | Separate risk-free rate from credit/risk premium. | recession; yields | DP16 | Stage 10 |
| T63 | 5.4 | Interpreting positive alpha as guaranteed arbitrage | Positive alpha sounds like free excess return. | It is model-relative and can reflect omitted risk, estimation error, or mispricing. | Treat alpha as benchmark-relative, not certainty. | alpha; abnormal return | DP17 | Stage 9–10 |
| T64 | 5.3–5.4 | Treating market portfolio as identical to a particular index | Indices are commonly used as market proxies. | The theoretical market portfolio is broader; an index is an empirical proxy. | Label proxy explicitly. | S&P 500; market portfolio | DP17 | Stage 3–4 |

## 3. Critical Trap Families

The following trap families are structurally dangerous because they change the **quantity itself**, not merely arithmetic.

### 3.1 Accrual vs Cash

```text
Revenue ≠ Cash Receipt
Expense ≠ Cash Payment
Profit ≠ Cash Flow
```

If this distinction is wrong, downstream:

- statement construction;
- ratio interpretation;
- project cash flow;

can all become wrong.

### 3.2 Accounting vs Corporate-Finance Cash Flow

```text
Accounting Net Income
≠
Operating Cash Flow
≠
Free Cash Flow
≠
Incremental Project Cash Flow
```

### 3.3 Claim Classification

```text
Debt ≠ Equity
Preferred ≠ Ordinary Debt
Secured ≠ Senior
Unsecured ≠ Subordinated
```

### 3.4 Return Vocabulary

```text
Required
≠
Expected
≠
Realized
```

and:

```text
Arithmetic Average
≠
CAGR
```

### 3.5 Risk Vocabulary

```text
Volatility
≠
Systematic Risk
≠
Beta
```

### 3.6 Source-Convention Collision

```text
Profitability Index — Brigham
≠
Profitability Index — Berk & DeMarzo
```

and:

```text
Debt ratio formula
→ source definition required
```

## 4. Accounting Trap Prevention Card

Before answering any transaction question:

```text
1. What happened economically?
2. Earned / incurred?
3. Paid / received?
4. Asset, liability, equity, revenue, or expense?
5. Cash changed?
6. Net income changed?
7. Does A = L + E still hold?
```

### Red-Flag Words

- advance;
- accrued;
- prepaid;
- credit;
- collection;
- borrowing;
- principal;
- dividend;
- depreciation.

These usually signal a timing/classification trap.

## 5. Ratio Trap Prevention Card

```text
Ratio name
→ exact numerator?
→ exact denominator?
→ average or ending?
→ debt or liabilities?
→ calculate
→ interpret driver
```

### Never Accept Automatically

```text
Higher ratio = better company
```

The following especially need context:

- current ratio;
- quick ratio;
- asset turnover;
- ROA;
- ROE;
- leverage.

## 6. Financing Trap Prevention Card

```text
Financing need
→ horizon
→ claim type
→ fixed obligation
→ effective cost
→ collateral / priority
→ flexibility
→ refinancing risk
```

### Red Flags

- “cheapest”;
- “shortest maturity”;
- “secured therefore senior”;
- “equity has no cost”;
- “tax shield therefore more debt is always better”.

## 7. Capital-Budgeting Trap Prevention Card

```text
Relevant incremental CF?
→ sunk cost removed?
→ opportunity cost included?
→ CapEx correct?
→ ΔNWC correct?
→ tax effect correct?
→ project-specific rate?
→ NPV?
```

### If Metrics Conflict

Ask:

```text
Independent or mutually exclusive?
Normal or nonnormal cash flows?
Value ranking or recovery/rate question?
```

Do not mechanically pick the largest percentage.

## 8. Derivative Trap Prevention Card

### Option

```text
Call / Put
→ Long / Short
→ Right
→ Payoff
→ Premium
→ Profit
```

### Forward

```text
Long payoff = S_T - K
Short payoff = K - S_T
```

No zero-floor.

### Hedge

```text
Derivative P&L
+
Underlying Exposure P&L
=
Hedge Result
```

## 9. Market / Return Trap Prevention Card

Before using any formula:

```text
Historical / Expected / Required / Realized?
Nominal / Real?
Total Risk / Systematic Risk?
Market Return / Market Risk Premium?
```

Before any macro-direction conclusion:

```text
Expected cash flow?
Required return?
Prior expectation?
```

## 10. “Too Absolute” Wording Filter

Treat these words as signals to test carefully:

- always;
- necessarily;
- guarantees;
- must;
- never;
- every;
- all assets;
- automatically.

They are not automatically wrong, but CF4 contains many relationships where the correct statement is:

> **ceteris paribus**, **under the stated model**, or **context-dependent**.

## 11. Distractor Construction Patterns

### Pattern A — Correct fact, wrong concept

Example:

> “Solvency measures short-term ability to pay current liabilities.”

The statement describes liquidity, not solvency.

### Pattern B — Correct concept, wrong perspective

Example:

> “Higher interest rates are favorable.”

Could be true for a new lender, false for an issuer or existing fixed-rate bond holder.

### Pattern C — Correct formula, wrong convention

Example:

> using Brigham PI in a Berk scarce-resource problem.

### Pattern D — Correct direction, wrong reason

Example:

> bond price falls when yield rises **because coupon falls**.

Coupon does not change; discount rate does.

### Pattern E — Correct relationship turned into universal law

Example:

> “More debt always increases firm value because interest is deductible.”

Ignores distress, agency, and flexibility costs.

## 12. Trap-to-Protocol Routing

| Trap Family | Primary Prevention Protocol |
|---|---|
| Accrual vs cash | DP02 Accounting Treatment |
| Statement linkage | DP03 Statement Construction |
| Ratio convention | DP04 Ratio Calculation |
| Ratio “higher = better” | DP05 Ratio Interpretation |
| Security classification | DP06 Security Identification |
| Financing cost/risk | DP07 Financing Choice |
| Primary vs secondary / flotation | DP08 Capital Raising |
| Payoff vs profit | DP09 Derivative Payoff |
| Hedge judgment | DP10 Hedging vs Speculation |
| Relevant project cash flow | DP11 Capital-Budgeting CF |
| NPV vs IRR / PI | DP12 Decision Metric |
| WACC misuse | DP13 WACC |
| Leverage one-sided interpretation | DP14 Capital Structure |
| Agency terminology | DP15 Governance |
| Macro deterministic direction | DP16 Market/Economic |
| Return/risk terminology | DP17 Risk/Return |
| Coupon/yield / rate perspective | DP18 Bond Price/Yield |
| Gordon assumptions | DP19 Equity Valuation |
| Consolidation/NCI | DP20 Consolidation |
| Tax basis/rate/timing | DP21 Tax |
| Multi-topic ambiguity | DP22 Mixed Question |

## 13. What Stage 13 Does NOT Claim

Stage 13 does **not** claim:

- how often each trap appears in PAI exams;
- which trap is statistically the most likely;
- which wording is used most often by exam writers;
- whether a trap appeared in a particular exam sitting.

Those claims require **Stage 17 — Past Exam Usability Validation**.

Therefore every trap in this file should currently be read as:

> **“Supported by the syllabus/source/reconciliation system and capable of producing an exam error.”**

not:

> **“Historically frequent in the exam.”**

## 14. Minimal Trap Sheet Candidate

If later compressed into a one-page sheet, the minimum set should include:

1. Revenue ≠ Cash Receipt.
2. Expense ≠ Cash Payment.
3. Retained Earnings ≠ Cash.
4. Debt ≠ Liabilities.
5. Secured ≠ Senior.
6. Coupon ≠ Yield.
7. Payoff ≠ Profit.
8. Accounting Profit ≠ Project Cash Flow.
9. Sunk Cost excluded; Opportunity Cost included.
10. Company WACC ≠ universal project rate.
11. NPV ≠ IRR; NPV wins value-ranking conflict.
12. Brigham PI ≠ Berk PI.
13. Required ≠ Expected ≠ Realized Return.
14. Volatility ≠ Beta.
15. Arithmetic Average ≠ CAGR.
16. Nominal − Inflation is approximation, not exact relation.
17. Market Return ≠ Market Risk Premium.
18. Good News ≠ Guaranteed Positive Return.
19. Growth ≠ Value Creation.
20. Higher Ratio ≠ Automatically Better.

## 15. Stage-13 Validation Checklist

- [x] Trap layer derived from Stages 1–12.
- [x] Accounting traps included.
- [x] Ratio traps included.
- [x] Security/financing traps included.
- [x] Capital-raising traps included.
- [x] Derivative traps included.
- [x] Capital-budgeting traps included.
- [x] WACC/capital-structure traps included.
- [x] Governance traps included.
- [x] Market/risk/return traps included.
- [x] Each trap has why tempting, why wrong, correct rule, question signal, and prevention protocol.
- [x] Source/convention conflicts remain qualified.
- [x] No unsupported past-exam frequency claims added.
- [x] Trap layer remains validated-not-frozen.

## 16. Exit Decision

**Stage 13 is complete as the CF4 Exam Trap Layer.**

Next stage:

> **Stage 14 — Reconstruction Paths**

Stage 14 should answer:

```text
“If I forget this in the exam, what is the shortest safe path to rebuild it?”
```

for formulas, concepts, classifications, accounting treatments, and interpretation rules.
