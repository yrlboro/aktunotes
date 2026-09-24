---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 4
stage_name: "Canonical Terminology Dictionary"
status: "validated-not-frozen"
date_created: "2026-08-30"
baseline_stage_1: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md"
baseline_stage_2: "CF4_Stage_2_Cross_Source_Reconciliation.md"
baseline_stage_3: "CF4_Stage_3_Terminology_Collision_Audit.md"
canonical_dictionary_frozen: false
---

# CF4 — Stage 4: Canonical Terminology Dictionary

> [!ABSTRACT] Purpose
> Stage 4 converts the Stage-3 collision audit into a **controlled canonical terminology layer** for CF4.
>
> The aim is:
>
> **one concept → one preferred operational label → source aliases → precise boundary → do-not-confuse layer**
>
> This file is **validated but not yet frozen**. Final freeze happens only after later system-wide validation.

## 1. Canonical Dictionary Rules

1. **Preferred label is operational, not exclusive.** Source aliases remain searchable.
2. **True synonyms may collapse.** Related-but-distinct terms must remain separate.
3. **Perspective is explicit** when the same economic quantity changes meaning by viewpoint.
4. **Time basis is explicit** for ex-ante/ex-post and point-in-time/period quantities.
5. **Measurement basis is explicit** for book/market/intrinsic and nominal/real concepts.
6. **Source-qualified labels remain source-qualified** when official references use the same term for different quantities.
7. Formula details are linked conceptually but **formula status is not frozen in Stage 4**.

## 2. Canonical Terminology Dictionary

| Domain | Canonical Term | Indonesian Meaning | English Source Term(s) | Aliases / Synonyms | Concept Type | Perspective | Time Basis | Measurement Basis | Do Not Confuse With | Source Context | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Accounting | Statement of Financial Position | Laporan posisi keuangan yang menunjukkan assets, liabilities, dan equity pada satu tanggal tertentu. | Balance Sheet | Balance Sheet | Accounting / Reporting | Analyst / Company | Point-in-time | Book / Accounting | Income Statement; Cash Flow Statement | Robinson Ch.1; Weygandt Ch.1–2; Brigham Ch.2 | VALIDATED |
| Accounting | Income Statement | Laporan kinerja selama suatu periode melalui revenue/income dan expenses sehingga menghasilkan profit/loss. | Statement of Profit or Loss; Profit and Loss Statement | Profit and Loss Statement | Accounting / Reporting | Analyst / Company | Period | Book / Accounting | Statement of Financial Position | Robinson Ch.1; Weygandt Ch.1–2 | VALIDATED |
| Accounting | Net Income | Laba bersih periode setelah income/revenue dan expenses/losses yang relevan. | Net Profit; Net Earnings | Net Profit; Net Earnings | Accounting / Reporting | Analyst / Company | Period | Book / Accounting | Operating Cash Flow; Free Cash Flow | Robinson; Weygandt; Brigham | VALIDATED |
| Accounting | Financial Reporting | Proses yang lebih luas untuk menyediakan dan mengomunikasikan informasi keuangan kepada pengguna eksternal. | Financial Reporting | — | Accounting / Reporting | Company / External Users | Period / Ongoing | Reporting framework | Financial Statements; Financial Statement Analysis | Robinson Ch.1; Weygandt Ch.1 | VALIDATED |
| Accounting | Financial Statements | Laporan terstruktur yang merangkum financial position, performance, equity changes, dan cash flows. | Financial Statements | — | Accounting / Reporting | Company / External Users | Point-in-time + Period | Book / Accounting | Financial Reporting | Robinson Ch.1 | VALIDATED |
| Accounting | Financial Statement Analysis | Proses menggunakan dan mengevaluasi financial statements serta informasi lain untuk keputusan ekonomi. | Financial Statement Analysis | — | Analysis | Analyst / Investor / Creditor | Period / Comparative | Analytical | Financial Reporting | Robinson Ch.1 | VALIDATED |
| Accounting | Recognition | Keputusan apakah suatu item memenuhi kriteria untuk dimasukkan ke financial statements. | Recognition | — | Accounting Concept | Preparer / Analyst | Event-based | Accounting | Measurement; Presentation; Disclosure | Robinson Ch.3 | VALIDATED |
| Accounting | Measurement | Penentuan amount atau basis nilai yang dilaporkan untuk item yang diakui. | Measurement | — | Accounting Concept | Preparer / Analyst | Event / Reporting date | Historical cost / Fair value / other source basis | Recognition | Robinson Ch.3 | VALIDATED |
| Accounting | Presentation | Cara item diklasifikasikan dan ditampilkan dalam financial statements. | Presentation | — | Accounting Concept | Preparer / Analyst | Reporting date / Period | Accounting presentation | Disclosure | Robinson Ch.3 | VALIDATED |
| Accounting | Disclosure | Informasi tambahan yang menjelaskan angka, policies, estimates, risks, commitments, atau context. | Disclosure; Notes; Footnotes | Notes / Footnotes | Accounting Concept | Preparer / External User | Reporting period | Narrative / supplementary | Presentation | Robinson Ch.1 & Ch.3 | VALIDATED |
| Accounting | Revenue | Income dari ordinary activities yang diakui sesuai accounting rules. | Revenue | Sales (context-dependent) | Accounting / Reporting | Company / Analyst | Period | Accrual accounting | Cash Receipt | Weygandt Ch.1–2; Robinson | VALIDATED |
| Accounting | Expense | Pengorbanan economic benefits yang diakui pada periode dan mengurangi equity selain distributions kepada owners. | Expense | Cost (context-dependent) | Accounting / Reporting | Company / Analyst | Period | Accrual accounting | Cash Payment; Asset | Weygandt Ch.1–2; Robinson | VALIDATED |
| Accounting | Asset | Economic resource yang dikendalikan perusahaan. | Asset | — | Accounting / Reporting | Company / Analyst | Point-in-time | Book / Accounting | Expense | Weygandt; Robinson | VALIDATED |
| Accounting | Liability | Present obligation perusahaan kepada pihak lain. | Liability | Obligation | Accounting / Reporting | Company / Creditor / Analyst | Point-in-time | Book / Accounting | Debt; Expense | Weygandt; Robinson | VALIDATED |
| Accounting | Equity | Residual interest setelah liabilities dikurangkan dari assets. | Equity | Shareholders' Equity; Owners' Equity | Accounting / Ownership | Company / Shareholder / Analyst | Point-in-time | Book or Market depending context | Retained Earnings; Cash | Weygandt; Robinson; Brigham | VALIDATED |
| Accounting | Retained Earnings | Akumulasi earnings yang tidak didistribusikan kepada owners dan menjadi komponen equity. | Retained Earnings | Accumulated Earnings (context) | Accounting / Reporting | Company / Shareholder / Analyst | Cumulative | Book / Accounting | Cash; Revenue | Weygandt; Brigham | VALIDATED |
| Accounting | Operating Cash Flow | Cash flow yang berasal dari operating activities selama periode. | Cash Flow from Operating Activities; CFO | CFO | Cash Flow | Company / Analyst / Creditor | Period | Cash basis statement measure | Net Income; Free Cash Flow | Robinson; Brigham | VALIDATED |
| Accounting | Free Cash Flow | Cash flow yang tersedia setelah kebutuhan reinvestment/operating capital sesuai definisi source telah diperhitungkan. | Free Cash Flow; FCF | FCF | Corporate Finance / Valuation | Company / Investor | Period / Forecast | Economic / Market valuation | Operating Cash Flow; Project Cash Flow | Brigham Ch.13; capital-budgeting material | VALIDATED |
| Accounting | Incremental Project Cash Flow | Perubahan cash flow yang terjadi karena project diterima dibandingkan tanpa project. | Incremental Cash Flow; Project FCF | Project Cash Flow | Capital Budgeting | Company / Management | Forecast period | Economic / Project | Accounting Earnings; Total Company Cash Flow | Brigham Ch.10; Berk & DeMarzo | VALIDATED |
| Accounting | Liquidity | Kemampuan memenuhi short-term obligations dan memiliki resources yang cukup liquid. | Liquidity | Short-term liquidity | Financial Analysis | Company / Creditor / Analyst | Short-term | Analytical | Solvency; Funding Risk | Robinson; Weygandt | VALIDATED |
| Accounting | Solvency | Kemampuan jangka panjang perusahaan memenuhi obligations dan mempertahankan financial viability. | Solvency | Long-term solvency | Financial Analysis | Company / Creditor / Analyst | Long-term | Analytical | Liquidity; Funding Risk | Robinson; Weygandt | VALIDATED |
| Accounting | Book Value | Nilai berdasarkan accounting records/measurement. | Book Value | Carrying Amount (when source-specific) | Measurement | Company / Analyst | Point-in-time | Book / Accounting | Market Value; Intrinsic Value | Accounting sources; Brigham ratio/valuation context | VALIDATED |
| Accounting | Market Value | Nilai berdasarkan harga/valuation di financial market. | Market Value | Market Price; Market Capitalization (specific contexts) | Valuation / Market | Investor / Company / Analyst | Point-in-time | Market | Book Value; Intrinsic Value | Brigham; Berk & DeMarzo | VALIDATED |
| Accounting | Intrinsic Value | Nilai berdasarkan expected future cash flows yang didiskontokan pada required return/cost of capital yang sesuai dalam framing Brigham. | Intrinsic Value | Fundamental Value (only when source context supports) | Valuation | Company / Investor / Analyst | Forward-looking | Model / Present Value | Market Value | Brigham Ch.13 | VALIDATED |
| Tax | Taxable Income | Income yang menjadi basis pengenaan pajak menurut aturan source/context. | Taxable Income | — | Tax | Company / Investor | Period | Tax basis | Accounting Profit | Brigham Ch.2 | VALIDATED |
| Tax | Marginal Tax Rate | Tax rate yang berlaku pada tambahan unit income terakhir. | Marginal Tax Rate | Marginal Rate | Tax | Company / Investor | Incremental / Ex ante | Tax | Average Tax Rate | Brigham Ch.2 | VALIDATED |
| Tax | Average Tax Rate | Total tax dibagi total taxable income. | Average Tax Rate | Effective Average Tax Rate (context-dependent) | Tax | Company / Investor | Period | Tax | Marginal Tax Rate | Brigham Ch.2 | VALIDATED |
| Tax | Tax Shield | Penghematan pajak yang timbul karena suatu deduction mengurangi taxable income, terutama interest dalam model CF4. | Tax Shield | Interest Tax Shield | Tax / Corporate Finance | Company / Investor | Period / Forecast | Economic / Tax | Tax Deduction | Brigham Ch.2, Ch.9, Ch.15 | VALIDATED |
| Securities | Common Stock | Equity security yang mewakili residual ownership dan biasanya membawa voting rights. | Common Stock; Ordinary Shares | Ordinary Shares | Security / Equity | Issuer / Investor | Ongoing | Market / Ownership | Preferred Stock; Debt | Berk & DeMarzo Ch.1/23 | VALIDATED |
| Securities | Common Equity | Aggregate residual ownership claim/value attributable to common shareholders. | Common Equity | Common Shareholders' Equity | Capital Structure | Issuer / Investor | Point-in-time | Book or Market depending context | Common Stock | Berk & DeMarzo; Brigham | VALIDATED |
| Securities | Preferred Stock | Equity/hybrid security dengan preference tertentu atas common stock, misalnya dividend atau liquidation priority. | Preferred Stock | Preferred Shares | Security / Equity | Issuer / Investor | Ongoing | Market / Ownership | Common Stock; Debt | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | Debt | Contractual financing claim yang mewajibkan borrower melakukan pembayaran sesuai terms. | Debt | Borrowings; Debt Financing | Security / Financing | Issuer / Investor / Creditor | Contractual horizon | Market / Contract | Liabilities; Equity | Berk & DeMarzo Ch.14/24; Brigham | VALIDATED |
| Securities | Secured Debt | Debt yang memiliki specific collateral. | Secured Debt | Collateralized Debt | Security / Debt | Issuer / Creditor | Contractual horizon | Contract | Senior Debt | Berk & DeMarzo Ch.24 | VALIDATED |
| Securities | Senior Debt | Debt dengan payment priority lebih tinggi relatif terhadap subordinated claims. | Senior Debt | Senior Claim | Security / Debt | Issuer / Creditor | Contractual horizon | Contract | Secured Debt; Subordinated Debt | Berk & DeMarzo Ch.24 | VALIDATED |
| Securities | Subordinated Debt | Debt dengan payment priority di bawah senior debt. | Subordinated Debt | Junior Debt (context) | Security / Debt | Issuer / Creditor | Contractual horizon | Contract | Unsecured Debt | Berk & DeMarzo Ch.24 | VALIDATED |
| Securities | Coupon Rate | Contractual coupon divided by par/face value of a bond. | Coupon Rate | Coupon | Debt / Return | Issuer / Investor | Contractual | Contract | Yield / YTM | Brigham / Berk & DeMarzo | VALIDATED |
| Securities | Yield | Market return/discount-rate measure implied by price and contractual cash flows in debt context. | Yield; Yield to Maturity when specifically YTM | YTM (specific) | Debt / Return | Investor / Issuer | Ex ante | Market | Coupon Rate; Required Return | Brigham / Berk & DeMarzo | VALIDATED |
| Securities | Primary Shares | New shares issued by company; proceeds go to issuer. | Primary Shares | Primary Offering Shares | Capital Raising | Issuer / Investor | Issue date | Market transaction | Secondary Shares; Primary Market | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | Secondary Shares | Existing shares sold by current owners; proceeds go to selling owners. | Secondary Shares | Secondary Sale Shares | Capital Raising | Existing Owner / Investor | Transaction date | Market transaction | Primary Shares; Secondary Market | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | Primary Market | Market/process where new securities are issued to investors. | Primary Market | New-Issue Market | Financial Market | Issuer / Investor | Issue date | Market structure | Secondary Market; Primary Shares | Brigham/Berk context | VALIDATED |
| Securities | Secondary Market | Market where existing securities trade among investors after issuance. | Secondary Market | Trading Market | Financial Market | Investor | Ongoing | Market structure | Primary Market; Secondary Shares | Brigham/Berk context | VALIDATED |
| Securities | IPO | First public sale of stock by a previously private company. | Initial Public Offering | Initial Public Offering | Capital Raising | Issuer / Investor | Event | Market | SEO | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | SEO | Equity offering by a company that is already publicly traded. | Seasoned Equity Offering | Seasoned Equity Offering | Capital Raising | Issuer / Investor | Event | Market | IPO | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | Underwriting Spread | Difference/fee between offer price and proceeds retained by issuer under underwriting arrangement. | Underwriting Spread | Spread | Capital Raising | Issuer / Underwriter | Issue date | Transaction cost | IPO Underpricing | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | IPO Underpricing | Situation where market price after offering exceeds offer price; treated as indirect issuance cost/wealth transfer in source context. | IPO Underpricing | Underpricing | Capital Raising | Issuer / Investor | Issue date | Market | Underwriting Spread | Berk & DeMarzo Ch.23 | VALIDATED |
| Securities | Private Debt | Debt raised from a limited investor/lender base through negotiated/private arrangements. | Private Debt | Private Placement Debt | Debt / Capital Raising | Issuer / Lender | Contractual horizon | Placement | Short-Term Debt | Berk & DeMarzo Ch.24 | VALIDATED |
| Financing | Capital Structure | Mix of long-term financing sources, especially debt and equity. | Capital Structure | Financing Mix | Corporate Finance | Company / Investor | Strategic / Long-term | Market / Financing | Capital Raising Method | Brigham Ch.14 | VALIDATED |
| Financing | Financial Leverage | Use of debt financing/fixed financial obligations that changes risk borne by equity holders. | Financial Leverage | Leverage | Corporate Finance | Company / Shareholder | Strategic | Financing | Business Risk | Brigham Ch.14 | VALIDATED |
| Financing | Business Risk | Risk arising from operations before financing leverage. | Business Risk | Operating Business Risk | Corporate Finance / Risk | Company / Investor | Ongoing | Economic | Financial Risk | Brigham | VALIDATED |
| Financing | Financial Risk | Additional risk to shareholders created by the use of debt financing. | Financial Risk | Leverage Risk | Corporate Finance / Risk | Shareholder / Company | Ongoing | Economic | Business Risk | Brigham | VALIDATED |
| Financing | Internal Financing | Financing from internally generated funds/cash rather than new external claims. | Internal Financing | Internally Generated Funds | Corporate Finance | Company | Period / Strategic | Financing | Retained Earnings | Brigham | VALIDATED |
| Financing | Distribution Policy | Policy governing cash distributions to shareholders, including dividends and repurchases. | Distribution Policy | Payout Policy | Corporate Finance | Company / Shareholder | Strategic | Financing / Payout | Dividend Policy | Brigham Ch.15 | VALIDATED |
| Financing | Dividend Policy | Policy specifically concerning cash dividends to shareholders. | Dividend Policy | Dividend Payout Policy | Corporate Finance | Company / Shareholder | Strategic | Payout | Distribution Policy | Brigham Ch.15 | VALIDATED |
| Financing | Share Repurchase | Company uses cash to buy back its own shares. | Share Repurchase | Stock Repurchase; Buyback | Corporate Finance / Equity | Company / Shareholder | Transaction / Policy | Market | Dividend | Berk & DeMarzo Ch.17 | VALIDATED |
| Financing | Funding Risk | Risk that refinancing/funding is unavailable or only available at very high cost. | Funding Risk | Refinancing Risk (context) | Financing Risk | Company / Creditor | Short/Medium-term | Financing | Liquidity; Solvency | Berk & DeMarzo Ch.27 | VALIDATED |
| Financing | Net Working Capital | Current assets minus current liabilities, or operating NWC when project context explicitly uses operating items. | Net Working Capital; NWC | Working Capital (only when source uses broadly) | Corporate Finance / Accounting | Company / Analyst | Point-in-time | Book / Operating | Working Capital | Berk & DeMarzo Ch.27; Brigham project context | VALIDATED |
| Financing | Permanent Working Capital | Base level of working capital that is continuously required. | Permanent Working Capital | Permanent NWC | Working Capital | Company | Ongoing | Operating | Temporary Working Capital | Berk & DeMarzo Ch.27 | VALIDATED |
| Financing | Temporary Working Capital | Seasonal/fluctuating working-capital requirement above the permanent base. | Temporary Working Capital | Seasonal Working Capital | Working Capital | Company | Short-term | Operating | Permanent Working Capital | Berk & DeMarzo Ch.27 | VALIDATED |
| Financing | Bridge Loan | Temporary loan used until permanent financing or expected cash receipt becomes available. | Bridge Loan | Bridge Financing | Short-Term Finance | Borrower / Lender | Temporary | Financing | Short-lived asset financing | Berk & DeMarzo Ch.27 | VALIDATED |
| Financing | Lease | Contract granting use of an asset in exchange for periodic payments; may have debt-like economic features. | Lease | Lease Financing | Financing / Contract | Lessee / Lessor | Contractual horizon | Contract | Debt | Brigham Ch.18 | VALIDATED |
| CapitalBudgeting | Capital Budgeting | Process of evaluating long-term investment projects and deciding which should be accepted. | Capital Budgeting | Investment Appraisal | Corporate Finance | Company / Management | Project horizon | Economic / Project | Financing Decision | Brigham Ch.10; Berk & DeMarzo | VALIDATED |
| CapitalBudgeting | Cost of Capital | Required return demanded by providers of capital for a given risk; from issuer/project perspective it is a financing/valuation cost. | Cost of Capital | Required Return (mirror perspective) | Corporate Finance / Return | Issuer / Investor | Ex ante | Market / Economic | WACC | Brigham Ch.9 | VALIDATED |
| CapitalBudgeting | WACC | Weighted average of relevant component costs of capital using appropriate capital-structure weights. | Weighted Average Cost of Capital | WACC | Corporate Finance / Formula | Company / Investor | Ex ante | Market / Financing | Cost of Equity; Project Discount Rate | Brigham Ch.9 | VALIDATED |
| CapitalBudgeting | Project Discount Rate | Required return/discount rate appropriate for project risk and financing assumptions. | Project Cost of Capital; Project Discount Rate | Hurdle Rate (only if source supports context) | Corporate Finance / Valuation | Company / Management | Ex ante | Economic | Company WACC | Brigham Ch.9–10 | VALIDATED |
| CapitalBudgeting | NPV | Present value of project benefits/cash inflows minus present value of costs/cash outflows; direct measure of value creation. | Net Present Value | NPV | Capital Budgeting | Company / Investor | Ex ante | Present Value | IRR | Brigham Ch.10; Berk & DeMarzo Ch.3/7; Weygandt Ch.26 | VALIDATED |
| CapitalBudgeting | IRR | Discount rate that makes project NPV equal to zero. | Internal Rate of Return | IRR | Capital Budgeting | Company / Investor | Ex ante | Rate of return | NPV; MIRR | Brigham Ch.10 | VALIDATED |
| CapitalBudgeting | MIRR | Modified internal rate of return using modified reinvestment/financing assumptions in Brigham framework. | Modified Internal Rate of Return | MIRR | Capital Budgeting | Company / Investor | Ex ante | Rate of return | IRR | Brigham Ch.10 | VALIDATED |
| CapitalBudgeting | Payback Period | Time required for undiscounted project cash flows to recover initial investment. | Payback Period | Regular Payback | Capital Budgeting | Company / Management | Project horizon | Time | Discounted Payback | Brigham / Weygandt | VALIDATED |
| CapitalBudgeting | Discounted Payback Period | Time required for discounted project cash flows to recover initial investment. | Discounted Payback Period | Discounted Payback | Capital Budgeting | Company / Management | Project horizon | Discounted cash flow | Payback Period | Brigham | VALIDATED |
| CapitalBudgeting | Accounting Rate of Return | Accounting-income-based project return measure used in Weygandt's appraisal context. | Annual Rate of Return; Accounting Rate of Return | ARR | Capital Budgeting / Accounting | Company / Management | Period | Accounting | IRR | Weygandt Ch.26 | VALIDATED |
| CapitalBudgeting | Profitability Index — Brigham Convention | Ratio of PV of future inflows to initial investment for the project-ratio convention used by Brigham. | Profitability Index | PI | Capital Budgeting | Company / Management | Ex ante | Present Value | Profitability Index — Berk Convention | Brigham Ch.10 | SOURCE-QUALIFIED |
| CapitalBudgeting | Profitability Index — Berk & DeMarzo Scarce-Resource Convention | NPV per unit of constrained resource consumed in the scarce-resource framing. | Profitability Index | PI | Capital Budgeting | Company / Management | Ex ante | Present Value / Resource | Profitability Index — Brigham Convention | Berk & DeMarzo Ch.7 | SOURCE-QUALIFIED |
| CapitalBudgeting | Sunk Cost | Past cost that cannot be changed by the current project decision. | Sunk Cost | — | Capital Budgeting | Company / Management | Past | Economic | Opportunity Cost | Brigham / Berk & DeMarzo | VALIDATED |
| CapitalBudgeting | Opportunity Cost | Benefit/value forgone because a resource is used for the project. | Opportunity Cost | — | Capital Budgeting | Company / Management | Ex ante | Economic | Sunk Cost | Brigham / Berk & DeMarzo | VALIDATED |
| CapitalBudgeting | Independent Projects | Projects that can be accepted together if each satisfies the acceptance criterion and capital is not otherwise constrained. | Independent Projects | — | Capital Budgeting | Company / Management | Decision setting | Economic | Mutually Exclusive Projects | Brigham Ch.10 | VALIDATED |
| CapitalBudgeting | Mutually Exclusive Projects | Projects where accepting one prevents accepting the other. | Mutually Exclusive Projects | — | Capital Budgeting | Company / Management | Decision setting | Economic | Independent Projects | Brigham Ch.10 | VALIDATED |
| Derivatives | Call Option | Option granting holder the right, not obligation, to buy underlying at strike price. | Call Option | Call | Derivative | Holder / Writer | Until expiry | Market / Contract | Put Option; Forward | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Put Option | Option granting holder the right, not obligation, to sell underlying at strike price. | Put Option | Put | Derivative | Holder / Writer | Until expiry | Market / Contract | Call Option | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Long Option | Buyer/holder side of an option contract. | Long Option | Option Holder | Derivative | Investor / Hedger / Speculator | Contractual | Market / Contract | Short Option | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Short Option | Writer/seller side of an option contract. | Short Option | Option Writer | Derivative | Investor / Hedger / Speculator | Contractual | Market / Contract | Long Option | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Payoff | Contractual cash-flow outcome at exercise/expiration before considering initial premium/cost. | Payoff | Terminal Payoff | Derivative / Return | Holder / Writer | Expiration / Exercise | Contract | Profit | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Profit | Net economic result including payoff and initial premium/cost. | Profit | Net Profit from Position | Derivative / Return | Holder / Writer | Holding period | Economic | Payoff | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Strike Price | Predetermined exercise price in an option contract. | Strike Price; Exercise Price | Exercise Price | Derivative | Holder / Writer | Contractual | Contract | Forward/Delivery Price | Berk & DeMarzo Ch.20 | VALIDATED |
| Derivatives | Forward Contract | Bilateral agreement obligating parties to transact underlying at a future date/price. | Forward Contract | Forward | Derivative | Hedger / Speculator / Counterparty | Contractual | OTC / Contract | Futures Contract; Option | Brigham Ch.23 | VALIDATED |
| Derivatives | Futures Contract | Standardized exchange-traded derivative with future transaction exposure and marking-to-market mechanics. | Futures Contract | Futures | Derivative | Hedger / Speculator | Contractual | Exchange / Contract | Forward Contract | Brigham Ch.23 | VALIDATED |
| Derivatives | Hedging | Use of a position to reduce an existing economic exposure. | Hedging | Hedge | Risk Management | Company / Investor | Ongoing / Contractual | Economic | Speculation | Brigham Ch.23 | VALIDATED |
| Derivatives | Speculation | Taking or increasing directional exposure to seek profit from expected market movement. | Speculation | Speculative Position | Risk Management / Investment | Investor | Ongoing / Contractual | Economic | Hedging | Brigham Ch.23 | VALIDATED |
| Derivatives | Underlying | Asset, price, rate, index, or variable from which a derivative derives value. | Underlying | Underlying Asset / Variable | Derivative | All perspectives | Contractual | Market | Derivative | Brigham / Berk & DeMarzo | VALIDATED |
| Derivatives | Embedded Option | Option feature contained within another security or contract. | Embedded Option | Embedded Call / Conversion Option | Derivative / Security | Issuer / Investor | Contractual | Security design | Standalone Option | Berk & DeMarzo Ch.24 | VALIDATED |
| Derivatives | Real Option | Business/project flexibility with option-like economic structure, such as delay, expand, or abandon. | Real Option | Option to Delay / Expand / Abandon | Corporate Finance | Management / Investor | Project horizon | Economic | Financial Option | Berk & DeMarzo Ch.22 | VALIDATED |
| RiskReturn | Expected Return | Probability-weighted or otherwise forward-looking return anticipated before outcome is known. | Expected Return | Expected Rate of Return | Return / Risk | Investor | Ex ante | Market / Model | Required Return; Realized Return | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Required Return | Minimum return demanded as compensation for time value and relevant risk. | Required Return | Required Rate of Return | Return / Risk | Investor / Issuer mirror | Ex ante | Market / Model | Expected Return; Realized Return | Berk & DeMarzo Ch.10; Brigham | VALIDATED |
| RiskReturn | Realized Return | Actual return that occurred over a holding period. | Realized Return | Actual Return | Return / Risk | Investor | Ex post | Market | Expected Return; Required Return | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Historical Average Return | Arithmetic average of historical realized returns used as sample evidence/estimate under assumptions. | Historical Average Return | Average Historical Return | Return / Statistics | Investor / Analyst | Ex post sample | Historical | Expected Return | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Arithmetic Average Return | Simple average of periodic returns. | Arithmetic Average Return | Arithmetic Mean Return | Return / Statistics | Investor / Analyst | Historical / Periodic | Historical | CAGR | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Compound Annual Return | Constant annual compound rate linking initial and final wealth over multiple periods. | Compound Annual Return; CAGR | Geometric Return | Return / Statistics | Investor / Analyst | Ex post multi-period | Historical | Arithmetic Average Return | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Nominal Return | Return measured in nominal money terms before inflation adjustment. | Nominal Return | Nominal Rate of Return | Return / Economics | Investor | Ex ante or ex post | Nominal | Real Return | Brigham / Topic 5 sources | VALIDATED |
| RiskReturn | Real Return | Return adjusted for inflation/purchasing-power effect. | Real Return | Inflation-Adjusted Return | Return / Economics | Investor | Ex ante or ex post | Real | Nominal Return | Brigham / Topic 5 sources | VALIDATED |
| RiskReturn | Volatility | Dispersion of returns, typically measured by standard deviation. | Volatility | Standard Deviation of Returns | Risk | Investor / Analyst | Historical / Ex ante estimate | Statistical | Systematic Risk; Beta | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Systematic Risk | Non-diversifiable market/economic risk that remains in a diversified portfolio. | Systematic Risk | Market Risk (CAPM context) | Risk | Investor / Company | Ex ante | Economic | Total Risk; Beta | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Beta | Measure of sensitivity of a security's return to market return in CAPM framework. | Beta | Market Beta | Risk / CAPM | Investor / Company | Ex ante estimate / Historical estimate | Statistical / Model | Volatility; Correlation | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Risk Premium | Expected/required compensation above risk-free return for bearing relevant risk. | Risk Premium | Required Risk Premium | Return / Risk | Investor / Issuer | Ex ante | Market / Model | Excess Return | Berk & DeMarzo; Brigham | VALIDATED |
| RiskReturn | Excess Return | Asset return minus risk-free return for a specified period or expectation context. | Excess Return | Return in Excess of Risk-Free | Return / Risk | Investor / Analyst | Ex post or Ex ante if stated | Market / Historical | Risk Premium | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Market Risk Premium | Expected market return minus risk-free return in forward-looking/CAPM context. | Market Risk Premium | Equity Risk Premium (only when source context supports) | Return / Risk | Investor / Issuer | Ex ante | Market / Model | Historical Market Excess Return | Berk & DeMarzo; Brigham | VALIDATED |
| RiskReturn | Alpha | Return relative to a model-implied benchmark, often CAPM-based in source context. | Alpha | Abnormal Return (model-relative) | Return / Model | Investor / Analyst | Ex ante or ex post depending calculation | Model | Guaranteed Arbitrage | Berk & DeMarzo Ch.13 | VALIDATED |
| RiskReturn | Risk-Free Rate | Base return used as time-value benchmark in CAPM/risk-premium relationships. | Risk-Free Rate | Risk-Free Return | Return / Risk | Investor / Issuer | Ex ante | Market / Model | Market Risk Premium | Berk & DeMarzo Ch.10 | VALIDATED |
| RiskReturn | Market Portfolio | Theoretical broad portfolio of traded risky assets used in CAPM framework. | Market Portfolio | Market | Portfolio / Risk | Investor / Analyst | Ex ante model | Model | S&P 500 Proxy | Berk & DeMarzo Ch.10 | VALIDATED |
| Governance | Agency Problem | Conflict arising when decision-maker/agent incentives differ from principal interests. | Agency Problem; Agency Conflict | Principal-Agent Conflict | Governance | Shareholder / Manager / Creditor | Ongoing | Economic | Agency Cost | Berk & DeMarzo Ch.29; Brigham Ch.13 | VALIDATED |
| Governance | Agency Cost | Economic cost arising from agency conflict and/or measures taken to mitigate it. | Agency Cost | Agency Costs | Governance | Shareholder / Company | Ongoing | Economic | Agency Problem | Berk & DeMarzo Ch.29 | VALIDATED |
| Governance | Corporate Governance | System of controls, rights, incentives, monitoring, laws/rules, and procedures used to influence corporate decisions and reduce conflicts. | Corporate Governance | Governance | Governance | Shareholder / Board / Management / Creditor | Ongoing | Institutional | Agency Theory | Brigham Ch.13; Berk & DeMarzo Ch.29 | VALIDATED |
| Governance | Principal | Party that delegates authority/resources in an agency relationship. | Principal | — | Governance | Varies | Ongoing | Economic | Agent | Berk & DeMarzo | VALIDATED |
| Governance | Agent | Party that acts or makes decisions on behalf of principal. | Agent | — | Governance | Varies | Ongoing | Economic | Principal | Berk & DeMarzo | VALIDATED |
| Governance | Financial Asset | Financial claim on future cash flow/value. | Financial Asset | Security (when specific instrument) | Markets / Investment | Investor | Ongoing | Market | Real Resource | Brigham / Topic 5 sources | VALIDATED |
| Governance | Real Resource | Productive resource used to generate goods/services and operating cash flows. | Real Resource; Real Asset | Operating Asset (subset/context) | Corporate Finance / Economics | Company / Society | Ongoing | Economic | Financial Asset | Brigham Ch.13 | VALIDATED |
| Governance | Operating Asset | Asset/resource used in operations to generate operating cash flow. | Operating Asset | Assets-in-Place (subset/context) | Corporate Finance / Valuation | Company / Investor | Ongoing | Economic | Nonoperating Financial Asset | Brigham Ch.13 | VALIDATED |
| Governance | Nonoperating Financial Asset | Financial asset held by company outside core operating assets, such as excess cash/marketable securities in Brigham framing. | Nonoperating Asset; Nonoperating Financial Asset | Financial Asset Holdings | Corporate Finance / Valuation | Company / Investor | Point-in-time | Market | Operating Asset | Brigham Ch.13 | VALIDATED |
| Markets | Economic Growth | Expansion in business/economic activity; not itself an investment return. | Economic Growth; Business Activity | Expansion | Economics / Markets | Company / Investor | Macro period | Economic | Market Return | Brigham Ch.1 | VALIDATED |
| Markets | Interest Rate | Required/market rate for borrowing/lending or discounting in specified context. | Interest Rate | Market Rate | Economics / Markets | Borrower / Lender / Investor | Ex ante / Market | Market | Inflation; Yield | Brigham Ch.1 | VALIDATED |
| Markets | Inflation | General rise in price level reducing purchasing power of nominal money. | Inflation | Expected Inflation when forward-looking | Economics / Markets | Investor / Company | Period / Expected | Economic | Interest Rate | Brigham Ch.1 | VALIDATED |
| Markets | Market Price | Observed price/value of a security at a point in time. | Market Price | Security Price | Markets | Investor / Company | Point-in-time | Market | Total Return | Brigham / Berk & DeMarzo | VALIDATED |
| Markets | Total Return | Income received plus capital gain/loss over a holding period relative to initial value. | Total Return | Holding-Period Return | Markets / Return | Investor | Period | Market | Market Price | Berk & DeMarzo Ch.10 | VALIDATED |
| Markets | Economic Surprise | Difference between actual/new information and what the market previously expected. | New Information; Surprise | Unexpected Information | Markets | Investor / Company | Event | Market / Expectations | Good News as absolute level | Berk & DeMarzo Ch.13 | VALIDATED |

## 3. Mandatory Do-Not-Confuse Set

These pairs are considered high-risk enough to be mandatory in the final study system.

### Accounting / Reporting
- Financial Reporting ≠ Financial Statements
- Financial Reporting ≠ Financial Statement Analysis
- Recognition ≠ Measurement
- Presentation ≠ Disclosure
- Revenue ≠ Cash Receipt
- Expense ≠ Cash Payment
- Asset ≠ Expense
- Liability ≠ Expense
- Equity ≠ Retained Earnings
- Retained Earnings ≠ Cash
- Net Income ≠ Operating Cash Flow
- Operating Cash Flow ≠ Free Cash Flow
- Accounting Earnings ≠ Incremental Project Cash Flow
- Liquidity ≠ Solvency
- Solvency ≠ Funding Risk
- Debt ≠ Liabilities
- Book Value ≠ Market Value
- Market Value ≠ Intrinsic Value

### Securities / Financing
- Common Stock ≠ Preferred Stock
- Dividend ≠ Interest
- Capital Structure ≠ Capital Raising Method
- Primary Shares ≠ Secondary Shares
- Primary Shares ≠ Primary Market
- Secondary Shares ≠ Secondary Market
- Secured Debt ≠ Senior Debt
- Unsecured Debt ≠ Subordinated Debt
- Coupon Rate ≠ Yield
- Private Debt ≠ Short-Term Debt
- Lease ≠ Debt

### Capital Budgeting
- Cost of Capital ≠ WACC
- Company WACC ≠ Project Discount Rate
- NPV ≠ IRR
- IRR ≠ MIRR
- Payback ≠ Discounted Payback
- Accounting Rate of Return ≠ IRR
- Sunk Cost ≠ Opportunity Cost
- Independent Projects ≠ Mutually Exclusive Projects
- Profitability Index — Brigham ≠ Profitability Index — Berk & DeMarzo

### Derivatives
- Call ≠ Put
- Long Option ≠ Short Option
- Payoff ≠ Profit
- Strike Price ≠ Forward/Delivery Price
- Forward ≠ Futures
- Option ≠ Forward/Futures
- Hedging ≠ Speculation
- Underlying ≠ Derivative
- Real Option ≠ Financial Option

### Risk / Return / Markets
- Expected Return ≠ Required Return
- Expected Return ≠ Realized Return
- Historical Average Return ≠ Expected Return
- Arithmetic Average Return ≠ CAGR
- Nominal Return ≠ Real Return
- Volatility ≠ Systematic Risk
- Systematic Risk ≠ Beta
- Beta ≠ Correlation
- Risk Premium ≠ Realized Excess Return
- Market Risk Premium ≠ Historical Market Excess Return
- Alpha ≠ Guaranteed Arbitrage
- Risk-Free Rate ≠ Market Risk Premium
- Market Portfolio ≠ S&P 500 Proxy
- Economic Growth ≠ Market Return
- Good Economic News ≠ Guaranteed Positive Market Return

## 4. Canonical Alias Map

These are the strongest synonym/alias mappings currently accepted:

| Canonical Term | Accepted Aliases / Source Terms |
|---|---|
| Statement of Financial Position | Balance Sheet |
| Net Income | Net Profit; Net Earnings |
| Shareholder | Stockholder; Equity Holder |
| Preferred Stock | Preferred Shares |
| Common Stock | Ordinary Shares |
| Share Repurchase | Stock Repurchase; Buyback |
| NPV | Net Present Value |
| IRR | Internal Rate of Return |
| MIRR | Modified Internal Rate of Return |
| WACC | Weighted Average Cost of Capital |
| Operating Cash Flow | Cash Flow from Operating Activities; CFO |
| Free Cash Flow | FCF |
| Compound Annual Return | CAGR; Geometric Return |
| Systematic Risk | Market Risk, only in CAPM context |
| Beta | Market Beta |
| Strike Price | Exercise Price |

> [!WARNING]
> Aliases are accepted only within the CF4 source context. They are not universal legal/accounting definitions outside the syllabus.

## 5. Source-Qualified Terms

The following entries intentionally do **not** collapse into one canonical definition:

### Profitability Index

**Brigham convention**

$$
PI
=
\frac{PV(\text{future inflows})}{\text{initial investment}}
$$

**Berk & DeMarzo scarce-resource convention**

$$
PI
=
\frac{NPV}{\text{resource consumed}}
$$

These remain two source-qualified canonical entries until the Formula Reconciliation stage.

### Debt Ratios

Terms such as:

- debt ratio;
- debt-to-assets;
- debt-to-equity;

must carry the exact numerator/denominator convention when source definitions differ.

### Flow-to-Stock Ratios

When a flow item is divided by a balance-sheet stock, the dictionary does not silently choose:

- average balance;
- ending balance.

That choice remains a formula/input convention.

### Note / Debenture

Where source/legal usage can vary, terminology should remain tied to the specific textbook context rather than treated as universal law.

### Lease Classification

Operating vs financial/capital lease terminology is preserved as **textbook context**, not silently modernized beyond the source.

## 6. Canonical Perspective Map

| Canonical Quantity / Concept | Company / Issuer Perspective | Investor / Shareholder Perspective | Creditor / Lender Perspective | Analyst Perspective |
|---|---|---|---|---|
| Debt | Financing source + fixed obligation | Fixed-income claim | Contractual claim / priority | Leverage / solvency input |
| Equity | Ownership financing | Residual claim | Junior cushion behind debt | Book/market ownership measure |
| Cost of Capital | Financing/valuation cost | Required return | Required return on debt component | Discount-rate input |
| Dividend | Payout decision | Cash return | Reduces residual resources | Payout / return component |
| WACC | Aggregate financing cost | Weighted required return on capital claims | Includes debt component return | Valuation / project benchmark |
| Market Value | Financing/control signal | Current market price/value | Credit-market signal | External valuation measure |
| Derivative | Hedge / financing / embedded option | Hedge / investment / speculation | Counterparty exposure | Risk/valuation instrument |
| Free Cash Flow | Cash available after operating reinvestment | Basis of value/return potential | Debt-service capacity signal | Valuation input |

## 7. Canonical Time-Basis Map

| Term | Time Basis |
|---|---|
| Statement of Financial Position | Point-in-time |
| Income Statement | Period |
| Net Income | Period |
| Operating Cash Flow | Period |
| Free Cash Flow | Period / Forecast |
| Market Value | Point-in-time |
| Intrinsic Value | Forward-looking model value |
| Expected Return | Ex ante |
| Required Return | Ex ante |
| Realized Return | Ex post |
| Historical Average Return | Ex post sample |
| WACC | Ex ante / current required financing cost |
| Project Discount Rate | Ex ante |
| NPV | Ex ante appraisal |
| IRR | Ex ante appraisal |
| Total Return | Holding period |
| Market Price | Point-in-time |

## 8. Canonical Measurement-Basis Map

| Basis | Canonical Meaning | Typical CF4 Use |
|---|---|---|
| Book | Accounting-record amount | Financial statements / ratios |
| Market | Observable/implied market value | Securities / capital structure / pricing |
| Intrinsic | Model-based PV of expected future cash flows | Corporate valuation |
| Nominal | Money return before inflation adjustment | Market return / required nominal return |
| Real | Purchasing-power adjusted return | Inflation analysis |
| Historical | Realized past sample | Return evidence / estimation |
| Ex ante model | Forward-looking expected/required value | CAPM / WACC / valuation |

## 9. Canonical Reasoning Sequences

### Accounting

```text
Economic Event
→ Recognition
→ Measurement
→ Presentation
→ Disclosure
→ Statement Effect
→ Interpretation
```

### Transaction

```text
Economic Event
→ Account Affected
→ Asset / Liability / Equity / Revenue / Expense
→ Increase / Decrease
→ Net Income Effect?
→ Cash Effect?
→ Balance-Sheet Effect
```

### Security

```text
Instrument
→ Cash-Flow Rights
→ Priority
→ Maturity
→ Embedded Option
→ Risk
→ Return
→ Issuer vs Investor Consequence
```

### Corporate Finance

```text
Decision
→ Incremental Cash Flow
→ Risk
→ Required Return / Cost of Capital
→ Value
→ Decision
```

### Market / Return

```text
Economic Variable
→ Expected Cash Flow?
→ Required Return / Risk Premium?
→ Market Price
→ Income + Price Change
→ Total Return
```

## 10. Dictionary Governance Rules

Before freeze, every new term must pass these questions:

1. Does it represent a genuinely new concept?
2. Is it merely an alias of an existing canonical term?
3. Is it a source-specific convention?
4. Does it need a perspective qualifier?
5. Does it need a time-basis qualifier?
6. Does it need a measurement-basis qualifier?
7. Does adding it create a collision with an existing term?

If the answer to #2 is yes, do **not** create a second canonical term.

If the answer to #3 is yes, create a **source-qualified entry** rather than silently merging.

## 11. Stage-4 Validation Checklist

- [x] Stage 3 collision audit converted into a controlled dictionary.
- [x] Preferred operational labels selected.
- [x] Genuine aliases preserved.
- [x] High-risk terms kept separate.
- [x] Perspective fields included.
- [x] Time-basis fields included.
- [x] Measurement-basis fields included.
- [x] Source-qualified terminology retained where needed.
- [x] Mandatory do-not-confuse layer created.
- [x] Profitability Index conflict preserved.
- [x] Formula choices not prematurely frozen.
- [x] Dictionary status remains validated-not-frozen.

## 12. Exit Decision

**Stage 4 is complete as a validated canonical terminology layer.**

The next workflow stage should be:

> **Stage 5 — Canonical Accounting Treatment Map**

Stage 5 should focus only on accounting-heavy areas and use the following structure:

```text
Economic Event
→ Recognition
→ Account(s) Affected
→ Increase / Decrease
→ Income-Statement Effect
→ Statement-of-Financial-Position Effect
→ Cash-Flow Effect
→ Equity Effect
→ Interpretation
```

The Stage-4 dictionary should be treated as the preferred terminology source while building Stage 5, but it is **not yet frozen**.
