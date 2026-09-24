---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 6
stage_name: "Concept Hierarchy"
status: "structured-not-status-assigned"
date_created: "2026-08-30"
baseline_stage_1: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md"
baseline_stage_2: "CF4_Stage_2_Cross_Source_Reconciliation.md"
baseline_stage_3: "CF4_Stage_3_Terminology_Collision_Audit.md"
baseline_stage_4: "CF4_Stage_4_Canonical_Terminology_Dictionary.md"
baseline_stage_5: "CF4_Stage_5_Canonical_Accounting_Treatment_Map.md"
knowledge_status_assigned: false
---

# CF4 — Stage 6: Concept Hierarchy

> [!ABSTRACT] Tujuan
> Stage 6 mengubah hasil reconciliation Stages 1–5 menjadi **knowledge architecture bertingkat**.
>
> Struktur:
>
> - **Level 0 — Universal Reasoning Rules**
> - **Level 1 — Primitive / Foundation Concepts**
> - **Level 2 — Core Derived Concepts**
> - **Level 3 — Convenience / Special Case / Context Detail**
>
> Stage ini **belum** menentukan MEMORIZE / UNDERSTAND-RECONSTRUCT / REFERENCE ONLY / AVOID AS DEFAULT. Itu adalah Stage 7.

## 1. Hierarchy Principle

Hierarchy tidak sama dengan exam weight.

- **Level 0** = rules yang dipakai lintas banyak soal.
- **Level 1** = building blocks yang harus dipahami agar konsep lain bisa dibangun.
- **Level 2** = konsep utama yang diturunkan dari Level 0–1 dan dipakai langsung dalam banyak soal.
- **Level 3** = detail, extension, special case, source-specific convention, atau convenience representation.

Dengan demikian, konsep **Topik 1** dapat sangat penting secara exam weight tetapi tetap berada di Level 1/2, sedangkan detail yang rumit bisa tetap Level 3.

## 2. Level 0 — Universal Reasoning Rules


| ID | Rule | Canonical Reasoning | Source Area | Why It Is Level 0 |
|---|---|---|---|---|
| L0-A1 | Accounting Substance First | Economic event → recognition → measurement → presentation/disclosure → statement effect → interpretation. | 1.2–1.5 | Prevents debit/credit-first reasoning and cash-vs-accrual confusion. |
| L0-A2 | Accrual Timing Rule | Earn/incur determines accounting recognition; cash timing may differ. | 1.3–1.5 | Foundation for revenue/AR, accrued expense, prepaid, unearned revenue, depreciation. |
| L0-A3 | Statement Linkage Rule | Income Statement → Net Income → Retained Earnings/Equity → Statement of Financial Position. | 1.4–1.5 | Connects performance to financial position. |
| L0-A4 | Accounting Equation Check | Assets = Liabilities + Equity after every transaction set. | 1.4–1.5 | Universal consistency check for construction questions. |
| L0-A5 | Group-as-One-Entity Rule | If control exists, consolidated accounts treat parent + subsidiary as one economic reporting entity; internal effects are eliminated. | 1.4 | Foundation for consolidation/NCI reasoning. |
| L0-R1 | Ratio Interpretation Rule | Statement data → formula → calculation → comparison → direction → interpretation → limitation. | 1.6 | Prevents formula-only ratio answers. |
| L0-S1 | Security Rights Rule | Instrument → cash-flow rights → priority → maturity → optionality → risk → return → issuer/investor consequence. | 2.1–2.4, 5.1–5.2 | Unifies equity, debt, preferred, leases, derivatives. |
| L0-F1 | Financing Choice Rule | Funding need → maturity → source → cost → commitment/collateral → flexibility → funding risk. | 2.2–2.5, 3.2 | Unifies short-, medium-, and long-term financing. |
| L0-C1 | Corporate Finance Value Rule | Decision → incremental cash flow → risk → required return/cost of capital → present value → value creation. | 3.2–3.4, 4.2 | Core bridge for WACC, NPV, project choice. |
| L0-C2 | Project Relevance Rule | Include incremental future cash flows and opportunity costs; exclude sunk costs. | 3.3–3.4 | Foundation for capital budgeting. |
| L0-C3 | Risk-Rate Matching Rule | Discount rate must match the risk of the cash flows; company WACC is not universally valid for every project. | 3.3 | Prevents indiscriminate WACC usage. |
| L0-M1 | Market Valuation Rule | Expected cash flow ↑ raises value; required return ↑ lowers value, ceteris paribus. | 4.1–4.2, 5.3–5.4 | Core valuation transmission rule. |
| L0-M2 | Economic-Channel Rule | Economic variable → expected cash flow and/or required return/risk premium → price → total return. | 5.3–5.4 | Prevents one-step macro shortcuts. |
| L0-M3 | Expectation-Surprise Rule | Market reaction depends on new information relative to prior expectations, not merely whether the news sounds good/bad. | 5.3–5.4 | Core market-pricing interpretation. |
| L0-K1 | Perspective Rule | Always identify whose perspective applies: company/issuer, investor/shareholder, creditor/lender, analyst, or management. | 2.1–5.4 | Resolves many apparent contradictions across textbooks. |
| L0-K2 | Terminology Boundary Rule | Do not merge terms merely because values can coincide; map aliases only when concepts are genuinely identical. | Stage 3–4 | Protects required vs expected return, debt vs liabilities, book vs market value, etc. |
| L0-K3 | Source-Convention Rule | When official sources use different formula conventions, preserve the convention explicitly rather than silently merging. | 1.6, 3.4 | Applies especially to ratio definitions and Profitability Index. |

## 3. Level 1 — Primitive / Foundation Concepts

| ID | Foundation Concept | Core Meaning | Source Area | Role |
|---|---|---|---|---|
| L1-01 | Accounting Equation | Assets, liabilities, equity, residual ownership. | 1.4–1.5 | Accounting foundation |
| L1-02 | Accrual Accounting | Revenue/expense recognition independent of cash timing. | 1.3–1.5 | Accounting foundation |
| L1-03 | Financial Statement Architecture | Statement of Financial Position, Income Statement, Cash Flow Statement, Changes in Equity, Notes. | 1.2–1.4 | Reporting foundation |
| L1-04 | Recognition–Measurement–Presentation–Disclosure | Four distinct reporting questions. | 1.2–1.3 | Reporting foundation |
| L1-05 | Revenue / Expense / Net Income | Period performance concepts. | 1.4–1.5 | Accounting foundation |
| L1-06 | Cash / Receivable / Payable / Prepaid / Unearned | Core transaction accounts driving accrual timing. | 1.5 | Transaction foundation |
| L1-07 | Retained Earnings | Cumulative earnings retained in equity; not cash. | 1.4–1.5 | Equity foundation |
| L1-08 | Taxable Income / Marginal vs Average Tax Rate | Basic taxation quantities. | 1.1 | Tax foundation |
| L1-09 | Financial Ratio Families | Liquidity, efficiency, profitability, solvency/leverage, market/shareholder measures. | 1.6 | Analysis foundation |
| L1-10 | Debt vs Equity Claims | Contractual/senior claim vs residual ownership claim. | 2.1–2.2, 3.2, 5.1 | Security foundation |
| L1-11 | Common vs Preferred Equity | Residual common claim vs preferred rights/seniority. | 2.1, 5.1 | Security foundation |
| L1-12 | Collateral / Seniority / Maturity / Covenants | Independent dimensions of debt design. | 2.2 | Debt foundation |
| L1-13 | Primary vs Secondary Issuance/Trading | New capital to issuer vs trading/existing-owner sale distinctions. | 2.5, 5.1 | Market/issuance foundation |
| L1-14 | Working Capital & Financing Need | Temporary/permanent needs and matching principle. | 2.3 | Short-term finance foundation |
| L1-15 | Derivative Contract Families | Forward, futures, option, swap; rights/obligations and underlying exposure. | 2.4, 5.2 | Derivative foundation |
| L1-16 | Long vs Short / Payoff vs Profit | Contract-side and economics distinction. | 2.4, 5.2 | Derivative foundation |
| L1-17 | Business Entity Forms | Sole proprietorship, partnership, limited partnership, LLC, corporation. | 3.1 | Corporate structure foundation |
| L1-18 | Capital Structure | Debt/equity financing mix and leverage. | 3.2 | Corporate finance foundation |
| L1-19 | Internal vs External Financing | Internal funds vs new debt/equity claims. | 3.2 | Financing foundation |
| L1-20 | Incremental Project Cash Flow | Project cash-flow basis for investment appraisal. | 3.3 | Capital budgeting foundation |
| L1-21 | Cost of Capital Components | Debt, preferred, common equity required returns. | 3.3 | Valuation foundation |
| L1-22 | Time Value / Present Value Relationship | Future cash flows discounted at appropriate required return. | 3.3–3.4, 4.1–4.2 | Valuation foundation |
| L1-23 | NPV Concept | Present-value measure of value creation. | 3.3–3.4, 4.2 | Capital budgeting foundation |
| L1-24 | Agency Relationship | Principal-agent structure and incentive misalignment. | 3.1, 4.3 | Governance foundation |
| L1-25 | Financial vs Real Resources | Financial claims/funding vs productive resources generating operating cash flows. | 4.2, 5.1 | Resource-allocation foundation |
| L1-26 | Market Value vs Intrinsic Value | Observed market value vs model-based PV value. | 4.1 | Valuation foundation |
| L1-27 | Total Return | Income component + capital gain/loss component. | 5.3–5.4 | Return foundation |
| L1-28 | Expected / Required / Realized Return | Ex-ante expected, ex-ante required, ex-post realized. | 5.4 | Return foundation |
| L1-29 | Nominal vs Real Return | Money return vs purchasing-power-adjusted return. | 5.3–5.4 | Economic return foundation |
| L1-30 | Total vs Systematic Risk | Volatility vs non-diversifiable market/economic risk. | 5.3–5.4 | Risk foundation |
| L1-31 | Beta | CAPM market-sensitivity measure. | 5.4 | Risk foundation |
| L1-32 | Risk-Free Rate & Market Risk Premium | Base return and systematic-risk compensation. | 5.3–5.4 | CAPM foundation |
| L1-33 | Economic Drivers | Inflation, rates, business activity, risk aversion, fiscal/monetary/international factors. | 5.3 | Market foundation |

## 4. Level 2 — Core Derived Concepts

| ID | Derived Concept | Core Use | Source Area | Built From |
|---|---|---|---|---|
| L2-01 | Transaction Analysis | Map business events into accounts, statement effects, cash effects, and equity effects. | 1.5 | Derived from accounting equation + accrual rules. |
| L2-02 | Simple Financial Statement Construction | Build Income Statement and Statement of Financial Position from transactions/balances. | 1.5 | Derived from statement architecture + transaction analysis. |
| L2-03 | Basic Consolidated Accounts Logic | Control → consolidate; eliminate intercompany effects; identify NCI. | 1.4 | Derived from reporting entity + control. |
| L2-04 | Tax Shield Logic | Interest deduction → taxable income lower → tax saving → after-tax debt cost lower. | 1.1, 3.2–3.3 | Derived from taxation + debt financing. |
| L2-05 | Ratio Calculation & Interpretation | Current/quick/cash ratios, turnover, profitability, leverage, market ratios, Du Pont-style links as supported by sources. | 1.6 | Derived from financial statement data. |
| L2-06 | Equity Instrument Comparison | Common, preferred, convertible preferred, repurchase/split implications. | 2.1 | Derived from security-rights framework. |
| L2-07 | Debt Instrument Comparison | Secured/unsecured, senior/subordinated, public/private, callable/convertible, sinking fund, maturity. | 2.2 | Derived from debt-design dimensions. |
| L2-08 | Short/Medium-Term Financing Choice | Trade credit, bank loan, line/revolver, bridge loan, commercial paper, secured finance, lease. | 2.3 | Derived from funding-need rule. |
| L2-09 | Trade Credit Effective Cost | Cost of foregoing discount and annualized financing cost. | 2.3 | Derived from financing-cost reasoning. |
| L2-10 | Capital Raising Mechanics | Private rounds, IPO, SEO, underwriting, rights, private placement, shelf, securitization. | 2.5 | Derived from security + offering-method + cash-destination layers. |
| L2-11 | Embedded Option Logic | Callable, convertible, real options: identify who owns the option and payoff consequences. | 2.4 | Derived from option-rights foundation. |
| L2-12 | Hedging vs Speculation | Same derivative family, different objective/exposure. | 5.2 | Derived from exposure perspective. |
| L2-13 | Capital Structure Trade-Off | Tax benefit of debt vs financial-distress/agency/flexibility costs. | 3.2 | Derived from debt/equity + tax + risk. |
| L2-14 | Distribution Policy | Dividend vs repurchase as shareholder payout mechanisms. | 3.2 | Derived from equity/payout concepts. |
| L2-15 | WACC | Weighted aggregate of component costs using appropriate weights. | 3.3 | Derived from component required returns + capital structure. |
| L2-16 | Project Free Cash Flow | Operating cash flow effects, CapEx, depreciation tax shield, NWC, opportunity costs, externalities. | 3.3 | Derived from incremental cash-flow rule. |
| L2-17 | NPV Decision Rule | Accept positive-NPV independent projects; use NPV as value-maximizing benchmark. | 3.4 | Derived from PV + value creation. |
| L2-18 | IRR | Rate setting NPV to zero; compare with required return subject to cash-flow pattern. | 3.4 | Derived from NPV relationship. |
| L2-19 | MIRR | Modified rate measure under Brigham assumptions. | 3.4 | Derived from IRR limitations. |
| L2-20 | Payback / Discounted Payback | Recovery-time measures, with/without discounting. | 3.4 | Derived from project cash flows. |
| L2-21 | Accounting Rate of Return | Accounting-income-based appraisal metric. | 3.4 | Derived from accounting profit measures. |
| L2-22 | Profitability Index Conventions | Brigham project PI vs Berk scarce-resource PI retained as source-qualified distinct formulas. | 3.4 | Derived from source-specific resource/value relationships. |
| L2-23 | Agency Costs | Economic consequences of incentive conflicts and monitoring/constraint mechanisms. | 4.3 | Derived from agency relationship. |
| L2-24 | Corporate Governance Mechanisms | Board, compensation, ownership, debt discipline, shareholder action, takeover threat, monitoring, regulation. | 4.3 | Derived from agency problem. |
| L2-25 | Market for Corporate Control | Takeover/acquisition mechanism as external governance discipline. | 4.1, 4.3 | Derived from governance + market structure. |
| L2-26 | Real Resource Value Creation | Operating resources → FCF → discounted value; growth creates value only if returns exceed opportunity cost. | 4.2 | Derived from real resources + NPV/WACC. |
| L2-27 | Bond Price–Yield Relationship | Market yield ↑ → fixed-rate bond price ↓, ceteris paribus. | 5.3 | Derived from PV rule. |
| L2-28 | Stock Valuation Comparative Statics | Expected cash flow/growth ↑ supports value; required return ↑ lowers value, ceteris paribus. | 5.3 | Derived from market valuation rule. |
| L2-29 | Arithmetic vs Compound Return | One-period average estimate vs long-run wealth growth. | 5.4 | Derived from realized-return series. |
| L2-30 | Excess Return / Risk Premium | Return above risk-free benchmark, with ex-ante vs ex-post distinction. | 5.4 | Derived from required/realized return distinction. |
| L2-31 | Diversification | Firm-specific risk can be reduced; systematic risk remains. | 5.4 | Derived from portfolio risk concepts. |
| L2-32 | CAPM | Required return = risk-free rate + beta × market risk premium. | 5.4 | Derived from systematic risk + beta. |
| L2-33 | Economic Shock Transmission | Inflation/rates/business/risk-aversion/fiscal/international shocks through cash-flow and discount-rate channels. | 5.3–5.4 | Derived from market valuation rule. |
| L2-34 | Historical Risk–Return Evidence | Historical broad-asset return/volatility patterns interpreted as sample evidence, not guarantees. | 5.4 | Derived from realized return + statistics. |

## 5. Level 3 — Convenience / Special Case / Context Detail

| ID | Detail / Special Case | Role | Source Area | Why Level 3 |
|---|---|---|---|---|
| L3-01 | Debit/Credit Mnemonic | Verification shorthand after economic classification. | 1.5 | Convenience tool; not default reasoning. |
| L3-02 | Detailed Ratio Variants | Cash ratio, specific turnover definitions, vendor/source numerator/denominator variants. | 1.6 | Convention-sensitive reference detail. |
| L3-03 | Historical/Legacy Tax Parameters | Tax brackets, dividend-exclusion percentages, jurisdiction-specific textbook examples. | 1.1 | Textbook context only. |
| L3-04 | Detailed Consolidation Mechanics | Advanced goodwill/PPA, step acquisitions, detailed elimination journals, translation. | 1.4 | Beyond core unless syllabus/past exam later requires. |
| L3-05 | Special Equity Features | Specific venture-capital preferred rights, detailed repurchase methods, stock split/reverse split mechanics. | 2.1 | Special-case/security detail. |
| L3-06 | Debt Contract Details | Specific covenant clauses, sinking-fund variants, refunding/project-finance details. | 2.2 | Reference detail unless exam emphasis warrants. |
| L3-07 | Credit-Line Variants | Committed/uncommitted, revolving, evergreen, compensating-balance details. | 2.3 | Convenience/special arrangement. |
| L3-08 | Lease Classification Details | Operating vs financial/capital lease labels and historical accounting treatment. | 2.3 | Textbook-context detail. |
| L3-09 | IPO Process Details | Road show, book-building, greenshoe, lockup, winner's curse. | 2.5 | Mechanics/detail layer. |
| L3-10 | Option Strategy Combinations | Straddle, strangle, butterfly, protective-put construction beyond core option logic. | 2.4 | Special-case derivative detail. |
| L3-11 | Put–Call Parity Rearrangements | Equivalent forms and dividend-adjusted variants. | 2.4 | Formula-convenience layer. |
| L3-12 | Real-Option Subtypes | Delay, expand, abandon, staged investment. | 2.4 | Special-case application layer. |
| L3-13 | Capital-Structure Signaling/Reserve Capacity Details | Signaling, reserve borrowing capacity, payout-signaling nuances. | 3.2 | Contextual derived detail. |
| L3-14 | NPV Profile / Crossover Rate | Graphical/ranking aid for mutually exclusive projects. | 3.4 | Convenience analysis. |
| L3-15 | Capital Rationing Extensions | Resource constraints, replacement chain, EAA/economic-life extensions where present in source. | 3.4 | Supporting rather than core. |
| L3-16 | Takeover Defense Details | Specific defense mechanisms and M&A mechanics. | 4.3 | Special governance detail. |
| L3-17 | International Market Segmentation Details | Integrated vs segmented capital markets, currency/capital-flow nuances. | 4.1 | Contextual market detail. |
| L3-18 | Historical Return Sample Values | 1926–2011 asset-class average returns/volatilities. | 5.4 | Historical evidence, not universal parameters. |
| L3-19 | Standard Error / Historical Mean Confidence Approximation | Sampling-uncertainty calculation for historical returns. | 5.4 | Supporting statistical detail. |
| L3-20 | Negative Beta Interpretation | Insurance-like asset can have expected return below risk-free rate in CAPM. | 5.4 | Special conceptual case. |
| L3-21 | Empirical CAPM Departures | Size, value, momentum evidence discussed as model/market evidence. | 5.4 | Reference-only empirical context until status stage. |
| L3-22 | Directional Macro Matrices | First-pass ceteris-paribus tables for rates, inflation, recession, capital flows. | 5.3–5.4 | Convenience framework; not deterministic law. |

## 6. Dependency Maps

### 6.1 Accounting

```text
L0 Accounting Substance First
        ↓
L1 Accounting Equation + Accrual Accounting
        ↓
L1 Statement Architecture
        ↓
L1 Recognition / Measurement / Presentation / Disclosure
        ↓
L2 Transaction Analysis
        ↓
L2 Financial Statement Construction
        ↓
L2 Ratio Calculation & Interpretation
```

### 6.2 Securities and Financing

```text
L0 Security Rights Rule
        ↓
L1 Debt vs Equity Claims
        ↓
L1 Collateral / Seniority / Maturity / Optionality
        ↓
L2 Equity Instrument Comparison
L2 Debt Instrument Comparison
L2 Short/Medium-Term Financing Choice
        ↓
L2 Capital Raising Mechanics
```

### 6.3 Capital Budgeting

```text
L0 Corporate Finance Value Rule
        ↓
L1 Incremental Project Cash Flow
+
L1 Cost of Capital Components
+
L1 Present Value
        ↓
L2 WACC / Project FCF
        ↓
L2 NPV
        ↓
L2 IRR / MIRR / Payback / ARR / PI
```

### 6.4 Governance and Real Resources

```text
L1 Agency Relationship
        ↓
L2 Agency Costs
        ↓
L2 Governance Mechanisms
        ↓
L2 Market for Corporate Control

L1 Financial vs Real Resources
        ↓
L2 Real Resource Value Creation
        ↓
FCF + WACC
        ↓
Intrinsic Value
```

### 6.5 Market, Risk, and Return

```text
L0 Market Valuation Rule
+
L0 Economic-Channel Rule
        ↓
L1 Expected / Required / Realized Return
+
L1 Total vs Systematic Risk
+
L1 Beta
        ↓
L2 Diversification
        ↓
L2 CAPM
        ↓
L2 Economic Shock Transmission
        ↓
Market Price / Total Return
```

## 7. Cross-Topic Bridges

These concepts intentionally connect multiple syllabus topics.

| Bridge | From | To | Canonical Connection |
|---|---|---|---|
| Tax → Financing | 1.1 | 3.2–3.3 | Interest deductibility → tax shield → after-tax debt cost |
| Accounting → Ratios | 1.5 | 1.6 | Transaction treatment changes numerator/denominator and interpretation |
| Accounting → Project FCF | 1.5 | 3.3 | Depreciation, CapEx, NWC: accounting treatment differs from cash-flow effect |
| Securities → Capital Structure | 2.1–2.3 | 3.2 | Security claims become financing choices |
| Derivatives → Corporate Finance | 2.4 | 5.2 | Same optionality/contract logic, different use perspective |
| Required Return → Cost of Capital | 5.4 | 3.3 | Investor required return is issuer cost of capital for corresponding claim/risk |
| Markets → Valuation | 4.1 | 5.3 | Market required returns and expectations determine prices |
| Real Resources → Firm Value | 4.2 | 3.3–3.4 | Productive resources generate FCF; value depends on PV relative to cost of capital |
| Agency → Capital Structure | 4.3 | 3.2 | Financing choices alter incentives and claimant conflicts |
| Economic Variables → Return | 5.3 | 5.4 | Cash-flow/discount-rate shocks produce repricing and realized returns |

## 8. Concepts That Should NOT Be Promoted Upward

Several items may look important because they are formula-rich or detailed, but remain lower-level because they are **applications**, not foundations.

Examples:

- MIRR is not a foundation above NPV/IRR.
- Payback is not a universal project-value rule.
- Historical asset-return numbers are evidence, not primitives.
- Put–call parity rearrangements are not more fundamental than option rights/payoff logic.
- Detailed IPO mechanics are not more fundamental than security + offering method + cash destination.
- Specific ratio variants are not more fundamental than statement data + ratio interpretation.
- Advanced consolidation mechanics are not more fundamental than control + one-economic-entity principle.

## 9. Concepts That Must Stay High in the Hierarchy

The following should remain Level 0/1 even if they appear “simple”:

1. Revenue ≠ cash receipt.
2. Expense ≠ cash payment.
3. Retained earnings ≠ cash.
4. Debt ≠ equity.
5. Debt ≠ total liabilities.
6. Secured ≠ senior.
7. Coupon ≠ yield.
8. Required ≠ expected ≠ realized return.
9. Volatility ≠ systematic risk.
10. Book ≠ market ≠ intrinsic value.
11. Company WACC ≠ universal project discount rate.
12. Economic growth ≠ market return.
13. Growth ≠ value creation.

These are structural distinctions that support many downstream questions.

## 10. Topic-by-Topic Hierarchy View

### Topik 1 — Pelaporan Keuangan dan Perpajakan
- **Level 0:** accrual timing, accounting substance, statement linkage, ratio interpretation.
- **Level 1:** accounting equation, statement architecture, recognition/measurement/presentation/disclosure, taxation basics.
- **Level 2:** transaction analysis, statement construction, ratios, tax shield bridge, consolidation basics.
- **Level 3:** detailed ratio variants, historical tax parameters, advanced consolidation details.

### Topik 2 — Sekuritas dan Bentuk Lain Keuangan Korporasi
- **Level 0:** security rights rule, financing choice rule, perspective rule.
- **Level 1:** debt/equity claims, maturity/collateral/seniority, derivative families.
- **Level 2:** instrument comparison, financing arrangements, capital raising, embedded options, hedging.
- **Level 3:** specific covenant/IPO/credit-line/option-strategy details.

### Topik 3 — Pembiayaan Korporasi
- **Level 0:** corporate-finance value rule, project relevance, risk-rate matching.
- **Level 1:** capital structure, incremental project cash flow, cost-of-capital components, PV, NPV.
- **Level 2:** WACC, project FCF, capital-structure trade-off, NPV/IRR/MIRR/payback/ARR/PI.
- **Level 3:** NPV profiles, crossover, capital-rationing extensions, signaling details.

### Topik 4 — Peran dan Struktur Sistem Keuangan
- **Level 0:** perspective rule, market valuation rule.
- **Level 1:** agency relationship, financial vs real resources, market vs intrinsic value.
- **Level 2:** agency costs, governance mechanisms, market for corporate control, real-resource value creation.
- **Level 3:** takeover-defense and international-segmentation details.

### Topik 5 — Pasar Keuangan
- **Level 0:** market valuation, economic-channel, expectation-surprise rules.
- **Level 1:** total return, required/expected/realized return, nominal/real, total/systematic risk, beta, economic drivers.
- **Level 2:** price-yield relationship, CAPM, diversification, economic shock transmission, historical risk-return interpretation.
- **Level 3:** historical sample values, standard-error detail, negative beta special case, empirical CAPM anomalies, directional macro tables.

## 11. Hierarchy Governance Rules

A concept may move levels later only if validation shows one of these:

1. **Reconstruction dependency:** many Level-2 concepts cannot be reconstructed without it.
2. **Recurring exam requirement:** past exams repeatedly require direct retrieval.
3. **Source centrality:** official sources treat it as a core organizing principle.
4. **Cognitive efficiency:** moving it upward materially reduces exam-time reasoning cost.

A concept should move downward if:

1. it is a special case of a more general rule;
2. it is source-specific detail;
3. it is a historical parameter/example;
4. it is formula convenience rather than conceptual foundation;
5. it is rarely needed and easily reconstructed.

## 12. Stage-6 Validation Checklist

- [x] Stages 1–5 used as baseline.
- [x] Accounting concepts organized by dependency.
- [x] Security/financing concepts organized by rights and financing logic.
- [x] Corporate-finance concepts organized around cash flow, risk, required return, and value.
- [x] Governance concepts separated into agency → cost → mechanism.
- [x] Market/risk/return concepts organized around economic channels and pricing.
- [x] Cross-topic bridges made explicit.
- [x] Source-specific details kept at Level 3.
- [x] No MEMORIZE/RECONSTRUCT/REFERENCE status assigned yet.
- [x] No final freeze performed.

## 13. Exit Decision

**Stage 6 is complete as the CF4 Concept Hierarchy.**

Next stage:

> **Stage 7 — Knowledge Status Assignment**

Stage 7 should assign each Level-1/2/3 item one operational status:

- **MEMORIZE**
- **UNDERSTAND / RECONSTRUCT**
- **REFERENCE ONLY**
- **AVOID AS DEFAULT**

with an explicit reason based on exam utility, reconstruction cost, ambiguity risk, and source centrality.

Level 0 rules should generally be treated as **universal reasoning protocols**, not ordinary memorization items.
