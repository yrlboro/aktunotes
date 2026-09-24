---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 3
stage_name: "Terminology Collision Audit"
status: "audited-not-frozen"
date_created: "2026-08-30"
baseline_stage_1: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md"
baseline_stage_2: "CF4_Stage_2_Cross_Source_Reconciliation.md"
canonical_dictionary_frozen: false
---

# CF4 — Stage 3: Terminology Collision Audit

> [!ABSTRACT] Tujuan
> Stage 3 mengaudit istilah yang **sama, mirip, tumpang tindih, atau mudah tertukar** di seluruh sistem CF4.
>
> Fokusnya bukan lagi “formula mana yang benar”, melainkan:
>
> **term recognition → same/different? → exact boundary → source context → ambiguity risk → proposed canonical handling**
>
> Output ini **belum merupakan Canonical Terminology Dictionary final**. Kolom *Proposed Canonical Handling* adalah proposal untuk Stage 4, belum freeze.

## 1. Baseline

Stage 3 menggunakan:

1. **CF4 Stage 1 — Raw Knowledge Inventory FIXED v3** sebagai inventory baseline.
2. **CF4 Stage 2 — Cross-Source Reconciliation** sebagai relationship-classification baseline.
3. Silabus CF4 dan official textbook framing yang sudah dipakai pada Stage 2 sebagai source authority.

Tidak ada legacy/general-knowledge term yang ditambahkan sebagai core apabila tidak didukung oleh source system.

## 2. Collision Types

| Type | Meaning |
|---|---|
| Same concept | Dua istilah dapat dipetakan sebagai synonym/alias dalam scope CF4 |
| Category vs component | Salah satu adalah bagian dari yang lain |
| Object vs property | Satu adalah item/akun/instrumen, satu adalah karakteristiknya |
| Cause vs consequence | Satu adalah mekanisme/trigger, satu adalah efek |
| Framework vs implementation | Satu menjelaskan prinsip, satu menerapkan/mengendalikan |
| Concept vs measure | Satu adalah economic concept, satu adalah metric/proxy |
| Ex ante vs ex post | Perbedaan waktu/knowledge set |
| Exact vs approximation | Relation matematis terkait tetapi tidak identik |
| Same label, different convention | Nama sama tetapi source mendefinisikan quantity berbeda |
| Different perspective | Economic core sama tetapi issuer/investor/accounting perspective berbeda |
| Genuinely distinct | Tidak boleh disatukan |

## 3. Master Terminology Collision Matrix

| ID | Term A | Term B | Same / Different? | Exact Difference | Source Mapping | Ambiguity Risk | Proposed Canonical Handling |
|---|---|---|---|---|---|---|---|
| T01 | Statement of Financial Position | Balance Sheet | Same concept | Different textbook/reporting terminology for the same statement of assets, liabilities, and equity at a point in time. | Robinson vs Weygandt/Brigham wording | Low | Use **Statement of Financial Position (Balance Sheet)** on first mention; canonical short label: **Statement of Financial Position**. |
| T02 | Net income | Net profit / Net earnings | Same concept in general CF4 usage | Alternative labels for period profit after revenues/income and expenses, subject to source presentation. | Robinson / Weygandt / Brigham | Low | Canonical: **Net Income**; retain aliases for recognition. |
| T03 | Financial reporting | Financial statements | Different | Financial reporting is the broader communication system; financial statements are structured reports within it. | Robinson Ch.1; Weygandt Ch.1 | High | Never use as synonyms. Canonical definitions remain separate. |
| T04 | Financial reporting | Financial statement analysis | Different | Reporting prepares/communicates information; analysis evaluates and uses it for decisions. | Robinson Ch.1 | High | Separate process labels; add producer vs user perspective. |
| T05 | Annual report | Financial statements | Different | Annual report is a wider reporting package; financial statements are a core component. | Robinson / Brigham | Medium | Canonical distinction: package vs statements. |
| T06 | Notes / footnotes | Management commentary / MD&A | Different | Notes form part of financial statement disclosures; management commentary is management's narrative discussion. | Robinson | High | Do not treat MD&A as audited financial statements by default. |
| T07 | Accounting standards | Regulation / regulator | Different roles | Standards prescribe recognition/measurement/presentation/disclosure; regulators enforce reporting/securities requirements. | Robinson / Weygandt | Medium | Canonical role split: **standard setter** vs **regulator**. |
| T08 | Recognition | Measurement | Different | Recognition asks whether an item enters statements; measurement asks at what amount. | Robinson Ch.3 | High | Keep separate and sequence recognition → measurement. |
| T09 | Presentation | Disclosure | Different | Presentation concerns where/how an item appears in statements; disclosure provides supplementary explanatory information. | Robinson Ch.3 | High | Do not collapse into generic 'reporting'. |
| T10 | Relevance | Faithful representation | Different qualitative characteristics | Relevance concerns decision usefulness; faithful representation concerns depiction of the economic phenomenon. | Robinson Ch.3 | Medium | Canonical definitions remain distinct. |
| T11 | Comparability | Consistency | Related but different | Consistency supports comparability across periods, but comparability is the broader user-oriented characteristic. | Robinson / Weygandt | Medium | Canonical: consistency is a means; comparability is an information quality. |
| T12 | Materiality | Relevance | Related but different | Materiality is entity/item-specific significance for decisions; relevance is the broader decision-usefulness characteristic. | Robinson | Medium | Do not treat materiality as a universal numeric threshold. |
| T13 | Accrual basis | Cash basis / cash movement | Different | Accrual accounting recognizes economic effects according to accounting rules, not solely when cash moves. | Weygandt / Robinson | High | Canonical warning: accrual recognition ≠ cash timing. |
| T14 | Revenue | Cash receipt | Different | Revenue may be recognized before or after cash receipt depending on the event/treatment. | Weygandt Ch.1–2 | Very High | Hard separation in transaction reasoning. |
| T15 | Expense | Cash payment | Different | Expense recognition can differ in timing from cash payment. | Weygandt Ch.1–2 | Very High | Hard separation in transaction reasoning. |
| T16 | Asset | Expense | Different | Asset is a resource; expense is consumption/outflow recognized in performance. | Weygandt / Robinson | High | CapEx purchase is not automatically full-period expense. |
| T17 | Liability | Expense | Different | Liability is an obligation at a point in time; expense is a period performance item. | Weygandt / Robinson | High | Accrued expense may create both expense and liability; terms remain distinct. |
| T18 | Equity | Retained earnings | Category vs component | Equity is residual interest; retained earnings is one accumulated component of equity. | Weygandt / Brigham | High | Canonical hierarchy: Equity → retained earnings as component. |
| T19 | Retained earnings | Cash | Different | Retained earnings is an equity account; it does not represent a dedicated cash reserve. | Brigham Ch.2 / Weygandt | Very High | Permanent exam warning: retained earnings ≠ cash. |
| T20 | Profit / Net income | Operating cash flow | Different | Profit is accrual performance; operating cash flow records operating cash movement. | Robinson / Brigham | Very High | Do not use interchangeably. |
| T21 | Operating cash flow | Free cash flow | Different | Operating cash flow is a statement cash-flow measure; FCF subtracts required investment/reinvestment depending on source model. | Brigham valuation framework | Very High | Canonical labels must include which FCF definition/context is used. |
| T22 | Project cash flow | Accounting earnings | Different | Capital budgeting uses incremental cash flow, not accounting profit. | Brigham Ch.10; Berk & DeMarzo | Very High | Canonical phrase: **incremental project cash flow**. |
| T23 | Current assets | Liquidity | Object vs property | Current assets are balance-sheet items; liquidity is ability to meet short-term obligations / convert resources into cash. | Weygandt / Robinson | Medium | Avoid 'more current assets = automatically more liquid'. |
| T24 | Liquidity | Solvency | Different | Liquidity concerns short-term obligations; solvency concerns longer-term financial viability/obligations. | Robinson / Weygandt | Very High | Use time-horizon cue. |
| T25 | Solvency | Funding risk | Different | Solvency is overall long-term ability; funding risk is inability/high cost of refinancing or obtaining finance. | Berk & DeMarzo Ch.27 | High | Keep refinancing risk separate from solvency. |
| T26 | Debt | Liabilities | Subset vs broader category | Debt is a financing claim; liabilities include debt plus other obligations. | Weygandt / Berk & DeMarzo | Very High | Ratio formulas must specify whether denominator/numerator uses debt or total liabilities. |
| T27 | Book value | Market value | Different measurement bases | Book value comes from accounting measurement; market value comes from market pricing. | Accounting texts vs corporate-finance texts | Very High | Never substitute silently. |
| T28 | Market value | Intrinsic value | Different valuation concepts | Market value is observed market price/value; intrinsic value is model-based value from expected cash flows and required return in Brigham framing. | Brigham Ch.13 | High | Canonical labels remain separate. |
| T29 | Common stock | Common equity | Instrument vs aggregate claim | Common stock refers to shares/security; common equity may refer to aggregate ownership residual/value. | Berk & DeMarzo / Brigham | Medium | Use **common stock/shares** for instrument; **common equity** for aggregate capital claim. |
| T30 | Common stock | Preferred stock | Different equity classes | Common is residual; preferred has contractual preferences relative to common. | Berk & DeMarzo Ch.23 | High | Keep class distinctions; preferred is not ordinary debt. |
| T31 | Shareholder | Stockholder / Equity holder | Same concept in broad context | Alternative labels for owner of equity securities. | Berk & DeMarzo | Low | Canonical: **Shareholder**; retain aliases. |
| T32 | Dividend | Interest | Different cash-flow rights | Dividend is an equity distribution and generally discretionary for common stock; interest is contractual debt payment. | Berk & DeMarzo / Brigham | Very High | Never use as generic 'return payment'. |
| T33 | Dividend policy | Distribution policy | Narrow vs broad | Distribution policy includes dividends plus share repurchases; dividend policy is narrower. | Brigham Ch.15 | Medium | Canonical broader label: **Distribution Policy** when repurchases included. |
| T34 | Share repurchase | Dividend | Different payout mechanisms | Both distribute cash/value to shareholders but via different mechanics and flexibility. | Berk & DeMarzo Ch.17 / Brigham | High | Treat as same family, distinct mechanisms. |
| T35 | Debt financing | Equity financing | Different capital claims | Debt creates contractual obligations; equity gives residual ownership. | Berk & DeMarzo Ch.1 / Ch.14 | Very High | Use claim-rights framework. |
| T36 | Business risk | Financial risk | Different | Business risk arises from operations before leverage; financial risk is incremental equity risk from debt financing. | Brigham capital structure | High | Do not use total firm risk as synonym for financial risk. |
| T37 | Financial leverage | Operating leverage | Different | Financial leverage comes from financing fixed obligations; operating leverage comes from operating fixed costs. | Brigham context | Medium | Only retain operating leverage if explicitly in scope/source section; do not infer one from the other. |
| T38 | Capital structure | Capital raising method | Different | Capital structure is financing mix; capital raising method is process/channel used to obtain funding. | Brigham / Berk & DeMarzo | High | Security choice and offering method are separate layers. |
| T39 | Internal financing | Retained earnings | Related but not identical | Internal financing comes from internally generated funds/cash; retained earnings is an accounting equity balance, not cash itself. | Brigham | Very High | Avoid 'retained earnings finance = cash balance' shortcut. |
| T40 | Primary shares | Secondary shares | Different offering cash destination | Primary shares are newly issued and proceeds go to company; secondary shares are existing-owner sales. | Berk & DeMarzo Ch.23 | Very High | Canonical labels must include **shares**. |
| T41 | Primary market | Secondary market | Different market functions | Primary market handles new issuance; secondary market handles subsequent trading. | Brigham financial-market context | High | Do not confuse with primary/secondary shares. |
| T42 | IPO | SEO | Different offering stages | IPO is first public sale by a private firm; SEO is additional equity issue by an already public firm. | Berk & DeMarzo Ch.23 | High | Canonical distinction based on issuer public status. |
| T43 | Best efforts | Firm commitment | Different underwriting arrangements | Best efforts leaves more placement risk with issuer; firm commitment transfers more issue-distribution risk to underwriter. | Berk & DeMarzo Ch.23 | Medium | Keep as paired underwriting terms. |
| T44 | Underwriting spread | IPO underpricing | Different issuance costs | Spread is direct underwriter compensation; underpricing is indirect wealth transfer/cost via offer price below first-market price. | Berk & DeMarzo Ch.23 | High | Do not add them as the same cost item. |
| T45 | Private debt | Short-term debt | Different dimensions | Private describes placement/investor base; short-term describes maturity. | Berk & DeMarzo Ch.24 | High | Use separate axes: placement vs maturity. |
| T46 | Secured debt | Senior debt | Different dimensions | Secured concerns collateral; senior concerns payment priority. | Berk & DeMarzo Ch.24 | Very High | A debt can be senior unsecured or secured; do not equate. |
| T47 | Unsecured debt | Subordinated debt | Different dimensions | Unsecured means no specific collateral; subordinated means lower priority. | Berk & DeMarzo Ch.24 | Very High | Preserve collateral vs priority axes. |
| T48 | Note | Debenture | Context-sensitive labels | In the cited Berk & DeMarzo context both can denote unsecured corporate debt; terminology can vary by market/jurisdiction. | Berk & DeMarzo Ch.24 | Medium | Mark as textbook-context terminology; do not impose universal legal definition. |
| T49 | Maturity | Duration | Different | Maturity is contractual final date; duration is an interest-rate sensitivity/timing measure where in scope. | Debt/market context | High | Do not use duration as synonym for maturity. |
| T50 | Coupon rate | Yield / YTM | Different | Coupon rate determines contractual coupon relative to par; yield reflects market-required return given price and cash flows. | Brigham / Berk & DeMarzo | Very High | Hard separation. |
| T51 | Yield | Required return | Related, context-dependent | For a fairly priced bond, market yield may represent required return, but terms are conceptually distinct. | Brigham valuation context | High | Map equality only when model/question assumptions support it. |
| T52 | Required return | Expected return | Different ex-ante concepts that may align in equilibrium | Required is minimum compensation for risk; expected is probability-weighted anticipated return. | Berk & DeMarzo Ch.10 | Very High | Keep distinct; note equilibrium relationship. |
| T53 | Expected return | Realized return | Ex ante vs ex post | Expected return is forward-looking; realized return is actual outcome. | Berk & DeMarzo Ch.10 | Very High | Hard time-perspective distinction. |
| T54 | Historical average return | Expected return | Estimate vs target quantity | Historical mean is backward-looking data used as an estimate under assumptions, not the expected return itself. | Berk & DeMarzo Ch.10 | High | Always label historical estimate. |
| T55 | Arithmetic average return | Compound annual return / CAGR | Different statistics | Arithmetic mean describes average periodic return; CAGR describes compounded wealth growth. | Berk & DeMarzo Ch.10 | Very High | Do not interchange. |
| T56 | Nominal return | Real return | Different purchasing-power basis | Real return adjusts nominal return for inflation. | Brigham / Berk & DeMarzo supporting framework | Very High | Canonical labels include nominal vs real. |
| T57 | Exact Fisher-style relation | Real ≈ nominal − inflation | Exact vs approximation | Multiplicative identity is exact; subtraction is approximation for moderate/small rates. | Topik 5 source framework | High | Label approximation explicitly. |
| T58 | Total risk / Volatility | Systematic risk | Different | Volatility is total dispersion; systematic risk is non-diversifiable market/economic exposure. | Berk & DeMarzo Ch.10 | Very High | No synonymy. |
| T59 | Systematic risk | Beta | Concept vs measure | Systematic risk is the underlying priced risk concept; beta is a measure of market sensitivity in CAPM. | Berk & DeMarzo Ch.10 | High | Canonical: beta measures systematic exposure. |
| T60 | Beta | Correlation | Different statistics | Beta equals covariance divided by market variance; correlation is standardized covariance. | Berk & DeMarzo Ch.10 | High | Do not interpret beta as correlation. |
| T61 | Risk premium | Excess return | Expected/required vs realized/historical framing | Risk premium is compensation above risk-free rate in expected/required terms; excess return can refer to realized return minus risk-free return. | Berk & DeMarzo Ch.10 | High | Always label ex ante vs ex post. |
| T62 | Market risk premium | Historical market excess return | Target vs estimate | Expected market risk premium is forward-looking; historical excess return is sample evidence. | Berk & DeMarzo / Brigham | Very High | Never silently set them equal. |
| T63 | Alpha | Guaranteed arbitrage | Different | Positive alpha is model-relative abnormal expected/performed return; it may reflect mispricing, model misspecification, omitted risk, or frictions. | Berk & DeMarzo Ch.13 | High | Do not translate alpha into 'free money'. |
| T64 | Cost of capital | Required return | Mirror perspectives | Investor required return is the issuer/project cost of capital when claims/risk correspond. | Brigham Ch.9; Berk & DeMarzo | High | Use perspective tag: investor vs issuer. |
| T65 | Component cost of capital | WACC | Component vs aggregate | Component cost is one financing source's required return; WACC is weighted combination of relevant components. | Brigham Ch.9 | Very High | Never call WACC 'cost of equity'. |
| T66 | Company WACC | Project discount rate | Potentially different | Company WACC is appropriate only when project risk/financing are consistent with assumptions; project-specific risk may require adjustment. | Brigham Ch.9–10 | Very High | No universal company-WACC shortcut. |
| T67 | Cost of debt before tax | After-tax cost of debt | Different | After-tax cost reflects interest tax shield in the model: $r_D(1-T)$. | Brigham Ch.9 | Very High | Label before-tax vs after-tax explicitly. |
| T68 | Tax rate | Effective tax rate | Different | Marginal/statutory-type rate used for incremental decisions can differ from average/effective burden. | Brigham Ch.2 | High | Do not substitute without context. |
| T69 | Marginal tax rate | Average tax rate | Different | Marginal applies to additional income; average is total tax divided by taxable income. | Brigham Ch.2 | Very High | Hard distinction. |
| T70 | Taxable income | Accounting profit | Different | Taxable income follows tax rules; accounting profit follows accounting rules. | Brigham taxation context / accounting texts | Very High | Do not assume equality. |
| T71 | Tax shield | Tax deduction | Cause vs economic benefit | Deductibility is tax treatment; tax shield is the resulting tax saving/economic benefit. | Brigham Ch.2 / Ch.9 | Medium | Canonical chain: deduction → taxable income ↓ → tax saving. |
| T72 | Capital budgeting | Financing decision | Different corporate decisions | Capital budgeting chooses investments; financing decision determines how capital is raised. | Berk & DeMarzo Ch.1 / Brigham | High | Keep separate even though WACC links them. |
| T73 | NPV | IRR | Different appraisal metrics | NPV measures value created; IRR is the discount rate setting NPV to zero. | Brigham Ch.10; Berk & DeMarzo Ch.7 | Very High | Never use as synonyms for 'return'. |
| T74 | IRR | MIRR | Different rate metrics | MIRR modifies reinvestment/financing assumptions and resolves some IRR issues; not algebraically identical. | Brigham Ch.10 | High | Keep separate labels. |
| T75 | Payback | Discounted payback | Different | Regular payback ignores time value before recovery; discounted payback uses discounted cash flows. | Brigham / Weygandt | High | Do not omit 'discounted'. |
| T76 | Annual / accounting rate of return | IRR | Different accounting vs cash-flow measures | Accounting return uses accounting-income/balance concepts; IRR is a cash-flow discount-rate metric. | Weygandt Ch.26; Brigham | Very High | Hard separation. |
| T77 | Profitability Index — Brigham | Profitability Index — Berk & DeMarzo | Same label, different formula/convention | Brigham-style PI uses PV inflows / initial investment; Berk & DeMarzo scarce-resource PI uses NPV / resource consumed. | Brigham Ch.10; Berk & DeMarzo Ch.7 | Critical | Provisional labels must remain source-qualified until formula stage. |
| T78 | Independent projects | Mutually exclusive projects | Different decision settings | Independent projects can both be accepted; mutually exclusive projects compete for selection. | Brigham Ch.10 | High | Decision rule must identify project relationship first. |
| T79 | Normal cash flow | Nonnormal cash flow | Different sign patterns | Normal cash flow usually has one sign change; nonnormal has multiple sign changes and may produce multiple/no meaningful IRR. | Brigham Ch.10 | High | Use sign-pattern cue. |
| T80 | Sunk cost | Opportunity cost | Different relevance | Sunk cost is past/unavoidable and excluded; opportunity cost is forgone benefit and included if incremental. | Brigham / Berk & DeMarzo capital budgeting | Very High | Hard distinction. |
| T81 | Incremental cash flow | Total company cash flow | Different scope | Project evaluation uses cash-flow changes caused by the project, not all company cash flows. | Brigham Ch.10 | High | Canonical phrase: with-project minus without-project. |
| T82 | Working capital | Net working capital | Different | Working capital may be used broadly; NWC is current assets minus current liabilities or operating version in project context. | Berk & DeMarzo Ch.27 / Brigham project context | High | Always state definition/context. |
| T83 | Permanent working capital | Temporary working capital | Different horizon components | Permanent is base ongoing need; temporary is seasonal/fluctuating need. | Berk & DeMarzo Ch.27 | Medium | Use financing-maturity matching context. |
| T84 | Line of credit | Revolving credit | Related but not identical | Revolving credit is typically a longer/committed facility permitting repeated draw-repay-redraw; line of credit is broader. | Berk & DeMarzo Ch.27 | Medium | Keep hierarchy; avoid universal maturity claims outside source. |
| T85 | Bridge loan | Short-lived asset financing | Different | Bridge loan describes temporary financing until permanent funding/cash receipt arrives, not the life of underlying asset. | Berk & DeMarzo Ch.27 | High | Canonical cue: timing gap. |
| T86 | Lease | Debt | Different legal instrument with debt-like economics | Lease can be financing-like and create fixed commitments, but is not automatically the same as a bond/debt security. | Brigham Ch.18 | High | Preserve legal/instrument distinction; note debt-like economics where source supports. |
| T87 | Operating lease | Financial / Capital lease | Different lease classifications in textbook framing | Different economics/accounting treatment in historical textbook context. | Brigham Ch.18 | Medium | Retain textbook-context label; do not silently modernize standards. |
| T88 | Call option | Put option | Different rights | Call = right to buy; put = right to sell. | Berk & DeMarzo Ch.20 | Very High | Hard distinction. |
| T89 | Long option | Short option | Different contract sides | Long is holder/buyer; short is writer/seller. | Berk & DeMarzo Ch.20 | Very High | Payoff signs must preserve side. |
| T90 | Payoff | Profit | Different | Payoff is terminal contractual cash flow; profit adjusts for initial premium/cost. | Berk & DeMarzo Ch.20 | Very High | Never omit premium when question asks profit. |
| T91 | Strike price | Forward/delivery price | Different contract terms | Strike belongs to option exercise; delivery/forward price belongs to forward contract. | Berk & DeMarzo / Brigham derivatives | High | No generic 'contract price' in canonical dictionary. |
| T92 | Forward | Futures | Different contracts | Both create future transaction exposure but differ in standardization, trading venue, settlement/marking-to-market, and counterparty structure. | Brigham Ch.23 | Very High | Keep separate. |
| T93 | Option | Forward/Futures | Different rights/obligations | Option holder has right without obligation; forward/futures positions impose bilateral contractual obligations. | Berk & DeMarzo / Brigham | Very High | Use right-vs-obligation test. |
| T94 | Hedging | Speculation | Different purpose/exposure | Hedging offsets existing risk; speculation creates/adds directional exposure. | Brigham Ch.23 | Very High | Classify by economic purpose, not by instrument. |
| T95 | Underlying | Derivative | Different | Underlying is the asset/rate/index driving value; derivative is the contract whose value depends on it. | Brigham / Berk & DeMarzo | High | Keep separate object labels. |
| T96 | Embedded option | Standalone option | Same option logic, different host context | Embedded option is contained in another security/contract; standalone option is separately traded/contracted. | Berk & DeMarzo Ch.24 / Ch.20 | Medium | Map host security + option owner. |
| T97 | Real option | Financial option | Same optionality logic, different underlying decision | Real option concerns business/project flexibility; financial option concerns financial contract rights. | Berk & DeMarzo Ch.22 | High | Keep separate branches under optionality. |
| T98 | Agency problem | Agency cost | Cause vs consequence | Agency problem/conflict is misalignment; agency cost is economic cost arising from conflict and mitigation. | Berk & DeMarzo Ch.29 | High | Canonical chain: conflict → cost. |
| T99 | Agency theory | Corporate governance | Framework vs mitigation system | Agency theory explains conflicts/incentives; governance provides controls, rights, monitoring, incentives. | Brigham Ch.13; Berk & DeMarzo Ch.29 | High | Do not use as synonyms. |
| T100 | Principal | Agent | Different roles | Principal delegates authority/resources; agent acts on principal's behalf. | Berk & DeMarzo governance | Very High | Always identify relationship before evaluating conflict. |
| T101 | Shareholder–manager conflict | Shareholder–creditor conflict | Different agency relationships | First concerns ownership-control; second concerns claim priority/investment incentives such as risk shifting/debt overhang. | Berk & DeMarzo Ch.16/29 | High | Tag principal/claim sides. |
| T102 | Growth | Value creation | Different | Growth is scale/activity expansion; value creation requires returns/cash flows exceeding opportunity cost of capital. | Brigham Ch.13 | Very High | Reject growth = value shortcut. |
| T103 | Financial asset | Real asset / real resource | Different | Financial asset is a claim; real resource/operating asset produces goods/services and operating cash flows. | Brigham Ch.13 / investment topics | Very High | Keep claim vs productive-resource distinction. |
| T104 | Operating asset | Nonoperating financial asset | Different | Operating assets generate operating cash flow; nonoperating assets include excess cash/marketable securities/investments. | Brigham Ch.13 | High | Preserve valuation bridge. |
| T105 | Market price | Total return | Different | Price is a point-in-time market value; total return combines income plus price change over a period. | Berk & DeMarzo Ch.10 | High | Do not infer return from price level alone. |
| T106 | Economic growth | Market return | Different | Economic growth is macro/business activity; market return is asset-market performance and depends on expectations, cash flows, and discount rates. | Brigham / Berk & DeMarzo | High | No one-step causal equivalence. |
| T107 | Interest rate | Inflation | Different but related | Inflation expectations can influence nominal required rates; they are not the same variable. | Brigham Ch.1 | High | Map channel rather than synonym. |
| T108 | Risk-free rate | Market risk premium | Different CAPM components | Risk-free rate is time-value/base return; market risk premium compensates systematic risk. | Berk & DeMarzo Ch.10 | Very High | Keep separate inputs. |
| T109 | Market portfolio | S&P 500 proxy | Concept vs practical proxy | The theoretical market portfolio is broader; S&P 500 may be used as an empirical approximation. | Berk & DeMarzo Ch.10 | Medium | Canonical: market portfolio; proxy label explicit. |
| T110 | Good economic news | Positive market return | Not equivalent | Market response depends on surprise relative to expectations and on cash-flow vs discount-rate effects. | Berk & DeMarzo Ch.13 / Brigham Ch.1 | Very High | Canonical reasoning: actual vs expected + valuation channel. |

## 4. High-Risk Collision Shortlist

Istilah berikut layak menjadi **mandatory 'do not confuse' layer** pada Stage 4 karena ambiguity risk-nya Very High/Critical.

| ID | Collision | Why It Matters |
|---|---|---|
| T14 | Revenue ↔ Cash receipt | Revenue may be recognized before or after cash receipt depending on the event/treatment. |
| T15 | Expense ↔ Cash payment | Expense recognition can differ in timing from cash payment. |
| T19 | Retained earnings ↔ Cash | Retained earnings is an equity account; it does not represent a dedicated cash reserve. |
| T20 | Profit / Net income ↔ Operating cash flow | Profit is accrual performance; operating cash flow records operating cash movement. |
| T21 | Operating cash flow ↔ Free cash flow | Operating cash flow is a statement cash-flow measure; FCF subtracts required investment/reinvestment depending on source model. |
| T22 | Project cash flow ↔ Accounting earnings | Capital budgeting uses incremental cash flow, not accounting profit. |
| T24 | Liquidity ↔ Solvency | Liquidity concerns short-term obligations; solvency concerns longer-term financial viability/obligations. |
| T26 | Debt ↔ Liabilities | Debt is a financing claim; liabilities include debt plus other obligations. |
| T27 | Book value ↔ Market value | Book value comes from accounting measurement; market value comes from market pricing. |
| T32 | Dividend ↔ Interest | Dividend is an equity distribution and generally discretionary for common stock; interest is contractual debt payment. |
| T35 | Debt financing ↔ Equity financing | Debt creates contractual obligations; equity gives residual ownership. |
| T39 | Internal financing ↔ Retained earnings | Internal financing comes from internally generated funds/cash; retained earnings is an accounting equity balance, not cash itself. |
| T40 | Primary shares ↔ Secondary shares | Primary shares are newly issued and proceeds go to company; secondary shares are existing-owner sales. |
| T46 | Secured debt ↔ Senior debt | Secured concerns collateral; senior concerns payment priority. |
| T47 | Unsecured debt ↔ Subordinated debt | Unsecured means no specific collateral; subordinated means lower priority. |
| T50 | Coupon rate ↔ Yield / YTM | Coupon rate determines contractual coupon relative to par; yield reflects market-required return given price and cash flows. |
| T52 | Required return ↔ Expected return | Required is minimum compensation for risk; expected is probability-weighted anticipated return. |
| T53 | Expected return ↔ Realized return | Expected return is forward-looking; realized return is actual outcome. |
| T55 | Arithmetic average return ↔ Compound annual return / CAGR | Arithmetic mean describes average periodic return; CAGR describes compounded wealth growth. |
| T56 | Nominal return ↔ Real return | Real return adjusts nominal return for inflation. |
| T58 | Total risk / Volatility ↔ Systematic risk | Volatility is total dispersion; systematic risk is non-diversifiable market/economic exposure. |
| T62 | Market risk premium ↔ Historical market excess return | Expected market risk premium is forward-looking; historical excess return is sample evidence. |
| T65 | Component cost of capital ↔ WACC | Component cost is one financing source's required return; WACC is weighted combination of relevant components. |
| T66 | Company WACC ↔ Project discount rate | Company WACC is appropriate only when project risk/financing are consistent with assumptions; project-specific risk may require adjustment. |
| T67 | Cost of debt before tax ↔ After-tax cost of debt | After-tax cost reflects interest tax shield in the model: $r_D(1-T)$. |
| T69 | Marginal tax rate ↔ Average tax rate | Marginal applies to additional income; average is total tax divided by taxable income. |
| T70 | Taxable income ↔ Accounting profit | Taxable income follows tax rules; accounting profit follows accounting rules. |
| T73 | NPV ↔ IRR | NPV measures value created; IRR is the discount rate setting NPV to zero. |
| T76 | Annual / accounting rate of return ↔ IRR | Accounting return uses accounting-income/balance concepts; IRR is a cash-flow discount-rate metric. |
| T77 | Profitability Index — Brigham ↔ Profitability Index — Berk & DeMarzo | Brigham-style PI uses PV inflows / initial investment; Berk & DeMarzo scarce-resource PI uses NPV / resource consumed. |
| T80 | Sunk cost ↔ Opportunity cost | Sunk cost is past/unavoidable and excluded; opportunity cost is forgone benefit and included if incremental. |
| T88 | Call option ↔ Put option | Call = right to buy; put = right to sell. |
| T89 | Long option ↔ Short option | Long is holder/buyer; short is writer/seller. |
| T90 | Payoff ↔ Profit | Payoff is terminal contractual cash flow; profit adjusts for initial premium/cost. |
| T92 | Forward ↔ Futures | Both create future transaction exposure but differ in standardization, trading venue, settlement/marking-to-market, and counterparty structure. |
| T93 | Option ↔ Forward/Futures | Option holder has right without obligation; forward/futures positions impose bilateral contractual obligations. |
| T94 | Hedging ↔ Speculation | Hedging offsets existing risk; speculation creates/adds directional exposure. |
| T100 | Principal ↔ Agent | Principal delegates authority/resources; agent acts on principal's behalf. |
| T102 | Growth ↔ Value creation | Growth is scale/activity expansion; value creation requires returns/cash flows exceeding opportunity cost of capital. |
| T103 | Financial asset ↔ Real asset / real resource | Financial asset is a claim; real resource/operating asset produces goods/services and operating cash flows. |
| T108 | Risk-free rate ↔ Market risk premium | Risk-free rate is time-value/base return; market risk premium compensates systematic risk. |
| T110 | Good economic news ↔ Positive market return | Market response depends on surprise relative to expectations and on cash-flow vs discount-rate effects. |

## 5. Collision Architecture by Knowledge Domain

### Accounting & Reporting (Topik 1)

- **Statement of Financial Position ↔ Balance Sheet** — Same concept.
- **Net income ↔ Net profit / Net earnings** — Same concept in general CF4 usage.
- **Financial reporting ↔ Financial statements** — Different.
- **Financial reporting ↔ Financial statement analysis** — Different.
- **Annual report ↔ Financial statements** — Different.
- **Notes / footnotes ↔ Management commentary / MD&A** — Different.
- **Accounting standards ↔ Regulation / regulator** — Different roles.
- **Recognition ↔ Measurement** — Different.
- **Presentation ↔ Disclosure** — Different.
- **Relevance ↔ Faithful representation** — Different qualitative characteristics.
- **Comparability ↔ Consistency** — Related but different.
- **Materiality ↔ Relevance** — Related but different.
- **Accrual basis ↔ Cash basis / cash movement** — Different.
- **Revenue ↔ Cash receipt** — Different.
- **Expense ↔ Cash payment** — Different.
- **Asset ↔ Expense** — Different.
- **Liability ↔ Expense** — Different.
- **Equity ↔ Retained earnings** — Category vs component.
- **Retained earnings ↔ Cash** — Different.
- **Profit / Net income ↔ Operating cash flow** — Different.
- **Operating cash flow ↔ Free cash flow** — Different.
- **Project cash flow ↔ Accounting earnings** — Different.
- **Current assets ↔ Liquidity** — Object vs property.
- **Liquidity ↔ Solvency** — Different.
- **Solvency ↔ Funding risk** — Different.
- **Debt ↔ Liabilities** — Subset vs broader category.
- **Book value ↔ Market value** — Different measurement bases.
- **Market value ↔ Intrinsic value** — Different valuation concepts.

### Securities & Financing (Topik 2–3)

- **Common stock ↔ Common equity** — Instrument vs aggregate claim.
- **Common stock ↔ Preferred stock** — Different equity classes.
- **Shareholder ↔ Stockholder / Equity holder** — Same concept in broad context.
- **Dividend ↔ Interest** — Different cash-flow rights.
- **Dividend policy ↔ Distribution policy** — Narrow vs broad.
- **Share repurchase ↔ Dividend** — Different payout mechanisms.
- **Debt financing ↔ Equity financing** — Different capital claims.
- **Business risk ↔ Financial risk** — Different.
- **Financial leverage ↔ Operating leverage** — Different.
- **Capital structure ↔ Capital raising method** — Different.
- **Internal financing ↔ Retained earnings** — Related but not identical.
- **Primary shares ↔ Secondary shares** — Different offering cash destination.
- **Primary market ↔ Secondary market** — Different market functions.
- **IPO ↔ SEO** — Different offering stages.
- **Best efforts ↔ Firm commitment** — Different underwriting arrangements.
- **Underwriting spread ↔ IPO underpricing** — Different issuance costs.
- **Private debt ↔ Short-term debt** — Different dimensions.
- **Secured debt ↔ Senior debt** — Different dimensions.
- **Unsecured debt ↔ Subordinated debt** — Different dimensions.
- **Note ↔ Debenture** — Context-sensitive labels.
- **Maturity ↔ Duration** — Different.
- **Coupon rate ↔ Yield / YTM** — Different.
- **Yield ↔ Required return** — Related, context-dependent.
- **Required return ↔ Expected return** — Different ex-ante concepts that may align in equilibrium.
- **Expected return ↔ Realized return** — Ex ante vs ex post.
- **Historical average return ↔ Expected return** — Estimate vs target quantity.
- **Arithmetic average return ↔ Compound annual return / CAGR** — Different statistics.
- **Nominal return ↔ Real return** — Different purchasing-power basis.
- **Exact Fisher-style relation ↔ Real ≈ nominal − inflation** — Exact vs approximation.
- **Total risk / Volatility ↔ Systematic risk** — Different.
- **Systematic risk ↔ Beta** — Concept vs measure.
- **Beta ↔ Correlation** — Different statistics.
- **Risk premium ↔ Excess return** — Expected/required vs realized/historical framing.
- **Market risk premium ↔ Historical market excess return** — Target vs estimate.
- **Alpha ↔ Guaranteed arbitrage** — Different.
- **Cost of capital ↔ Required return** — Mirror perspectives.
- **Component cost of capital ↔ WACC** — Component vs aggregate.
- **Company WACC ↔ Project discount rate** — Potentially different.
- **Cost of debt before tax ↔ After-tax cost of debt** — Different.
- **Tax rate ↔ Effective tax rate** — Different.
- **Marginal tax rate ↔ Average tax rate** — Different.
- **Taxable income ↔ Accounting profit** — Different.
- **Tax shield ↔ Tax deduction** — Cause vs economic benefit.
- **Capital budgeting ↔ Financing decision** — Different corporate decisions.
- **NPV ↔ IRR** — Different appraisal metrics.
- **IRR ↔ MIRR** — Different rate metrics.
- **Payback ↔ Discounted payback** — Different.
- **Annual / accounting rate of return ↔ IRR** — Different accounting vs cash-flow measures.
- **Profitability Index — Brigham ↔ Profitability Index — Berk & DeMarzo** — Same label, different formula/convention.
- **Independent projects ↔ Mutually exclusive projects** — Different decision settings.
- **Normal cash flow ↔ Nonnormal cash flow** — Different sign patterns.
- **Sunk cost ↔ Opportunity cost** — Different relevance.
- **Incremental cash flow ↔ Total company cash flow** — Different scope.
- **Working capital ↔ Net working capital** — Different.
- **Permanent working capital ↔ Temporary working capital** — Different horizon components.
- **Line of credit ↔ Revolving credit** — Related but not identical.
- **Bridge loan ↔ Short-lived asset financing** — Different.
- **Lease ↔ Debt** — Different legal instrument with debt-like economics.
- **Operating lease ↔ Financial / Capital lease** — Different lease classifications in textbook framing.

### Derivatives (Topik 2.4 & 5.2)

- **Call option ↔ Put option** — Different rights.
- **Long option ↔ Short option** — Different contract sides.
- **Payoff ↔ Profit** — Different.
- **Strike price ↔ Forward/delivery price** — Different contract terms.
- **Forward ↔ Futures** — Different contracts.
- **Option ↔ Forward/Futures** — Different rights/obligations.
- **Hedging ↔ Speculation** — Different purpose/exposure.
- **Underlying ↔ Derivative** — Different.
- **Embedded option ↔ Standalone option** — Same option logic, different host context.
- **Real option ↔ Financial option** — Same optionality logic, different underlying decision.

### Governance, Resources & Markets (Topik 4–5)

- **Agency problem ↔ Agency cost** — Cause vs consequence.
- **Agency theory ↔ Corporate governance** — Framework vs mitigation system.
- **Principal ↔ Agent** — Different roles.
- **Shareholder–manager conflict ↔ Shareholder–creditor conflict** — Different agency relationships.
- **Growth ↔ Value creation** — Different.
- **Financial asset ↔ Real asset / real resource** — Different.
- **Operating asset ↔ Nonoperating financial asset** — Different.
- **Market price ↔ Total return** — Different.
- **Economic growth ↔ Market return** — Different.
- **Interest rate ↔ Inflation** — Different but related.
- **Risk-free rate ↔ Market risk premium** — Different CAPM components.
- **Market portfolio ↔ S&P 500 proxy** — Concept vs practical proxy.
- **Good economic news ↔ Positive market return** — Not equivalent.

## 6. Canonical-Handling Rules Proposed for Stage 4

Stage 3 menghasilkan beberapa rules yang sebaiknya dipakai ketika membangun **CF4 Canonical Terminology Dictionary**.

### Rule 1 — One concept, one preferred canonical label

Jika dua istilah benar-benar sama dalam scope:

```text
Preferred canonical term
        ↓
Aliases / source terminology
```

Contoh:

```text
Statement of Financial Position
Aliases: Balance Sheet
```

Alias tetap disimpan karena kandidat harus dapat mengenali wording textbook/soal.

---

### Rule 2 — Do not merge terms merely because values may coincide

Contoh:

```text
Required return
≠
Expected return
≠
Realized return
```

Mereka dapat memiliki hubungan tertentu, tetapi bukan synonym.

Hal yang sama berlaku untuk:

```text
Yield
≠
Coupon rate
≠
Discount rate
≠
Cost of capital
```

---

### Rule 3 — Perspective must be part of terminology when needed

Contoh:

```text
Investor required return
↔
Issuer cost of capital
```

Economic bridge-nya sama, tetapi perspektif harus terlihat.

---

### Rule 4 — Context label required for source-dependent terminology

Gunakan explicit source/context qualifier bila satu istilah memiliki lebih dari satu valid definition.

Contoh paling penting:

```text
Profitability Index — Brigham convention

Profitability Index — Berk & DeMarzo scarce-resource convention
```

Stage 4 **tidak boleh** menghapus qualifier sampai Formula Reconciliation stage memutuskan operational default.

---

### Rule 5 — Accounting stage terms must remain sequential

Canonical accounting vocabulary harus mempertahankan:

```text
Recognition
→ Measurement
→ Presentation
→ Disclosure
```

Karena masing-masing menjawab pertanyaan berbeda.

---

### Rule 6 — Security classification should use independent axes

Debt/security terminology sebaiknya tidak dibuat sebagai satu hierarchy yang menyesatkan.

Gunakan axes:

```text
Maturity
Placement
Collateral
Seniority
Embedded option
Payment structure
```

Maka:

- private ≠ short-term;
- secured ≠ senior;
- unsecured ≠ subordinated.

---

### Rule 7 — Return vocabulary must explicitly show time perspective

Setiap term return di Stage 4 sebaiknya memiliki tag:

- **Ex ante**
- **Ex post**
- **Historical estimate**
- **Nominal**
- **Real**
- **Required**
- **Expected**
- **Realized**

---

### Rule 8 — Risk vocabulary must show what risk is measured

Canonical dictionary harus membedakan:

```text
Volatility / standard deviation
→ total dispersion

Systematic risk
→ non-diversifiable economic exposure

Beta
→ market-sensitivity measure within CAPM
```

---

### Rule 9 — Cash-flow vocabulary must identify accounting vs corporate-finance layer

Minimum distinct terms:

- Revenue
- Expense
- Net Income
- Operating Cash Flow
- Free Cash Flow
- Incremental Project Cash Flow

Jangan membangun shortcut “profit ≈ cash”.

---

### Rule 10 — Directional market terms are not deterministic labels

Terms seperti:

- economic growth;
- inflation;
- risk aversion;
- rate increase;
- good news;

tidak boleh langsung dipetakan menjadi “asset price up/down” tanpa channel.

Canonical market reasoning:

```text
Economic variable
→ expected cash flow?
→ required return / risk premium?
→ price
→ total return
```

## 7. Proposed Dictionary Fields for Stage 4

Berdasarkan collision audit, setiap canonical term sebaiknya mempunyai fields berikut:

| Field | Purpose |
|---|---|
| Canonical Term | Preferred operational label |
| Indonesian Meaning | Concise exam-ready explanation |
| English Source Term(s) | Recognition terhadap textbook wording |
| Aliases / Synonyms | Only genuine synonyms |
| Concept Type | Accounting / Security / Corporate Finance / Market / Return / Risk |
| Perspective | Company / Investor / Creditor / Analyst / Management |
| Time Basis | Point-in-time / Period / Ex ante / Ex post |
| Measurement Basis | Book / Market / Intrinsic / Nominal / Real, jika relevan |
| Formula Convention | Link only; formula not frozen here |
| Do Not Confuse With | High-risk collision |
| Source Context | Official source mapping |
| Status | Proposed / Validated / Frozen |

## 8. Terms Requiring Mandatory Source Qualifier

Beberapa terms tidak aman bila disimpan tanpa source/context qualifier:

1. **Profitability Index**
   - Brigham convention
   - Berk & DeMarzo scarce-resource convention

2. **Debt ratio / debt-to-assets**
   - broad-liability vs interest-bearing-debt definitions may vary by source/data convention

3. **Flow ÷ stock ratios**
   - average balance vs ending balance convention

4. **Lease classification terminology**
   - operating vs financial/capital lease is retained as textbook-context wording

5. **Note / debenture**
   - legal usage can vary; use source framing rather than universal legal assertion

6. **Market portfolio proxy**
   - theoretical market portfolio vs empirical proxy such as S&P 500

## 9. Terms Safe to Collapse into Aliases at Stage 4

Subject to final validation, these are strong candidates:

- Statement of Financial Position ↔ Balance Sheet
- Net Income ↔ Net Profit ↔ Net Earnings
- Shareholder ↔ Stockholder ↔ Equity Holder (broad ownership context)

These should still preserve source aliases so exam wording remains recognizable.

## 10. Terms That Must Remain Separate

The following pairs should **never** be collapsed in the final dictionary:

- Financial reporting vs financial statements
- Recognition vs measurement
- Presentation vs disclosure
- Revenue vs cash receipt
- Expense vs cash payment
- Equity vs retained earnings
- Retained earnings vs cash
- Profit vs cash flow
- Liquidity vs solvency
- Debt vs liabilities
- Book value vs market value
- Market value vs intrinsic value
- Dividend vs interest
- Debt vs equity
- Secured vs senior
- Unsecured vs subordinated
- Coupon rate vs yield
- Required vs expected vs realized return
- Arithmetic average vs CAGR
- Nominal vs real return
- Total risk vs systematic risk
- Systematic risk vs beta
- Cost of capital vs WACC
- Company WACC vs project discount rate
- Marginal vs average tax rate
- Taxable income vs accounting profit
- Capital budgeting vs financing decision
- NPV vs IRR
- IRR vs MIRR
- Payback vs discounted payback
- Accounting rate of return vs IRR
- Sunk cost vs opportunity cost
- Forward vs futures
- Option vs forward/futures
- Payoff vs profit
- Hedging vs speculation
- Agency problem vs agency cost
- Agency theory vs governance
- Financial asset vs real resource
- Economic growth vs market return

## 11. Stage-3 Validation Checklist

- [x] Stage 1 FIXED v3 used as inventory baseline.
- [x] Stage 2 used as relationship baseline.
- [x] Accounting collisions audited.
- [x] Security/financing collisions audited.
- [x] Return/risk/cost-of-capital collisions audited.
- [x] Capital-budgeting terminology audited.
- [x] Derivative terminology audited.
- [x] Governance/resource/market terminology audited.
- [x] Same-label/different-convention cases isolated.
- [x] High-risk 'do not confuse' pairs identified.
- [x] Proposed canonical handling drafted.
- [x] No final terminology freeze performed.

## 12. Exit Decision

**Stage 3 is complete as a terminology-collision audit.**

Next stage:

> **Stage 4 — Canonical Terminology Dictionary**

Stage 4 should convert this audit into a controlled dictionary:

```text
Canonical Term
→ precise meaning
→ source aliases
→ perspective
→ measurement/time basis
→ do-not-confuse-with
→ source mapping
```

Stage 4 may choose preferred labels, but the dictionary should remain **validated-but-not-finally-frozen** until later system-wide validation is complete.

> [!IMPORTANT]
> Formula conventions are only referenced here. Formula winner/status decisions remain for the later Formula Reconciliation layer.
