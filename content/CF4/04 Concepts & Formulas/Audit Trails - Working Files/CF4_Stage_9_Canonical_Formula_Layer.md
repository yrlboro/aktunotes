---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 9
stage_name: "Canonical Formula Layer"
status: "canonical-formulas-validated-not-frozen"
date_created: "2026-08-30"
baseline_stage_8: "CF4_Stage_8_Concept_and_Formula_Reconciliation_Matrix.md"
formula_layer_frozen: false
---

# CF4 — Stage 9: Canonical Formula Layer

> [!ABSTRACT] Tujuan
> Stage 9 menetapkan **operational default formula layer** setelah formula reconciliation Stage 8.
>
> Setiap formula disusun sebagai:
>
> **quantity → default formula → equivalent form → inputs → assumptions/convention → meaning → formula status → reconstruction path → exam trap**
>
> Formula layer ini **validated but not yet frozen**. Freeze menunggu later consistency dan syllabus validation.

## 1. Formula Status Policy

| Status | Meaning |
|---|---|
| **MEMORIZE** | Compact, central, convention cukup stabil; direct retrieval worth the memory cost. |
| **UNDERSTAND / RECONSTRUCT** | Lebih aman dibangun dari primitive relationship; memorizing multiple forms menambah confusion. |
| **REFERENCE ONLY** | Valid tetapi specialized, infrequent, source-contextual, atau secondary. |
| **AVOID AS DEFAULT** | Valid shortcut/formula hanya pada narrow conditions dan mudah disalahgunakan. |

> [!IMPORTANT]
> Formula status dapat berbeda dari Stage-7 knowledge status. Stage 9 mengatur **exact mathematical retrieval**.

## 2. Canonical Formula Index

| ID | Topic | Quantity | Formula Status | Official Source Basis |
|---|---|---|---|---|
| F01 | 1.4–1.5 | Accounting Equation | **MEMORIZE** | Weygandt Ch.1–2; Brigham Ch.2 |
| F02 | 1.5 | Net Income | **MEMORIZE** | Weygandt Ch.1–2; Robinson |
| F03 | 1.5 | Ending Retained Earnings | **MEMORIZE** | Weygandt Ch.1–2; Brigham Ch.2 |
| F04 | 1.1 | Average Tax Rate | **MEMORIZE** | Brigham Ch.2 |
| F05 | 1.1 | After-Tax Amount | **UNDERSTAND / RECONSTRUCT** | Brigham Ch.2 |
| F06 | 1.1 | Taxable-Equivalent Yield | **UNDERSTAND / RECONSTRUCT** | Brigham Ch.2 |
| F07 | 1.6 | Average Balance | **UNDERSTAND / RECONSTRUCT** | Weygandt Ch.18 |
| F08 | 1.6 | Current Ratio | **MEMORIZE** | Weygandt Ch.18; Robinson |
| F09 | 1.6 | Quick Ratio | **MEMORIZE** | Weygandt Ch.18; Robinson |
| F10 | 1.6 | Accounts Receivable Turnover | **MEMORIZE** | Weygandt Ch.18 |
| F11 | 1.6 | Inventory Turnover | **MEMORIZE** | Weygandt Ch.18 |
| F12 | 1.6 | Profit Margin | **MEMORIZE** | Weygandt Ch.18; Brigham Ch.3 |
| F13 | 1.6 | Asset Turnover | **MEMORIZE** | Weygandt Ch.18; Brigham Ch.3 |
| F14 | 1.6 | Return on Assets (ROA) | **MEMORIZE** | Weygandt Ch.18; Brigham Ch.3 |
| F15 | 1.6 | Return on Common Equity (ROE) | **MEMORIZE** | Weygandt Ch.18 |
| F16 | 1.6 | Debt-to-Assets — Weygandt | **MEMORIZE** | Weygandt Ch.18 |
| F17 | 2.3 | Net Working Capital | **MEMORIZE** | Berk & DeMarzo Ch.27; Brigham Ch.2 |
| F18 | 2.3 | Trade Credit Periodic Cost | **UNDERSTAND / RECONSTRUCT** | Berk & DeMarzo Ch.26 |
| F19 | 2.4 | Long Call Payoff | **MEMORIZE** | Berk & DeMarzo Ch.20 |
| F20 | 2.4 | Long Put Payoff | **MEMORIZE** | Berk & DeMarzo Ch.20 |
| F21 | 2.4 | Long Option Profit | **UNDERSTAND / RECONSTRUCT** | Berk & DeMarzo Ch.20 |
| F22 | 2.5 | Pre-/Post-Money Valuation | **UNDERSTAND / RECONSTRUCT** | Berk & DeMarzo Ch.23 |
| F23 | 2.5 | Underwriting Spread | **MEMORIZE** | Berk & DeMarzo Ch.23 |
| F24 | 3.2–3.3 | After-Tax Cost of Debt | **MEMORIZE** | Brigham Ch.9 |
| F25 | 3.3 | WACC | **MEMORIZE** | Brigham Ch.9 |
| F26 | 3.3 / 4.2 | NOPAT | **MEMORIZE** | Brigham Ch.2 & Ch.13 |
| F27 | 3.3 / 4.2 | Free Cash Flow — Brigham Operating-Capital Form | **MEMORIZE** | Brigham Ch.2 & Ch.13 |
| F28 | 3.3 | Change in Net Working Capital | **UNDERSTAND / RECONSTRUCT** | Brigham Ch.2; project FCF notes |
| F29 | 3.3 | Depreciation Tax Shield | **UNDERSTAND / RECONSTRUCT** | Brigham capital-budgeting / FCF framework |
| F30 | 3.4 | Net Present Value | **MEMORIZE** | Brigham Ch.10; Berk & DeMarzo Ch.3/7; Weygandt Ch.26 |
| F31 | 3.4 | Internal Rate of Return | **MEMORIZE** | Brigham Ch.10; Berk & DeMarzo Ch.7 |
| F32 | 3.4 | Modified Internal Rate of Return | **MEMORIZE** | Brigham Ch.10 §10.6 |
| F33 | 3.4 | Annual / Accounting Rate of Return | **MEMORIZE** | Weygandt Ch.26 |
| F34 | 3.4 | Profitability Index — Brigham | **MEMORIZE** | Brigham Ch.10 §10.8 |
| F35 | 3.4 | Profitability Index — Berk & DeMarzo | **MEMORIZE** | Berk & DeMarzo Ch.7 |
| F36 | 4.2 | Value of Operations | **UNDERSTAND / RECONSTRUCT** | Brigham Ch.13 |
| F37 | 4.2 | Horizon Value | **UNDERSTAND / RECONSTRUCT** | Brigham Ch.13 Eq.13-2 |
| F38 | 5.2 | Forward Payoff | **MEMORIZE** | Brigham Ch.23 |
| F39 | 5.4 | Total Stock Return | **MEMORIZE** | Berk & DeMarzo Ch.10 |
| F40 | 5.4 | Arithmetic Average Return | **MEMORIZE** | Berk & DeMarzo Ch.10 |
| F41 | 5.4 | Compound Annual Return | **MEMORIZE** | Berk & DeMarzo Ch.10 |
| F42 | 5.4 | Excess Return | **MEMORIZE** | Berk & DeMarzo Ch.10 |
| F43 | 5.4 | Beta | **MEMORIZE** | Berk & DeMarzo Ch.10 |
| F44 | 5.4 | CAPM Required Return | **MEMORIZE** | Berk & DeMarzo Ch.10 |
| F45 | 5.3–5.4 | Nominal–Real Return Relation | **MEMORIZE** | Brigham / Topic 5 source framework |
| F46 | 5.3 | Fixed-Rate Bond Price | **UNDERSTAND / RECONSTRUCT** | Brigham/Berk debt valuation context |
| F47 | 5.3–5.4 | Constant-Growth Stock Value | **MEMORIZE** | Brigham Ch.7 |
| F48 | 5.4 | Standard Error of Historical Mean Return | **REFERENCE ONLY** | Berk & DeMarzo Ch.10 |
| F49 | 5.4 | Alpha — CAPM Benchmark | **REFERENCE ONLY** | Berk & DeMarzo Ch.13 |

## 3. Canonical Formula Cards

### F01 — Accounting Equation

**Topic:** 1.4–1.5  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.1–2; Brigham Ch.2

**Default Formula**

$$
Assets = Liabilities + Equity
$$

**Inputs:** Assets, liabilities, equity  

**Assumption / Convention:** All recognized transactions properly classified.  

**Financial Meaning:** Balance-sheet identity.  

**Reconstruction Path:** Residual ownership: assets financed by creditors and owners.  

**Exam Trap:** Do not add revenue/expense/cash-flow categories as extra sides.

### F02 — Net Income

**Topic:** 1.5  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.1–2; Robinson

**Default Formula**

$$
Net\ Income = Revenue - Expenses
$$

**Inputs:** Recognized revenues/income and expenses  

**Assumption / Convention:** Simplified CF4 construction setting.  

**Financial Meaning:** Accrual-period performance.  

**Reconstruction Path:** Performance = recognized income minus recognized expenses.  

**Exam Trap:** Net income ≠ operating cash flow ≠ FCF.

### F03 — Ending Retained Earnings

**Topic:** 1.5  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.1–2; Brigham Ch.2

**Default Formula**

$$
RE_{end}=RE_{begin}+Net\ Income-Dividends
$$

**Inputs:** Beginning RE, net income, dividends  

**Assumption / Convention:** No omitted direct-to-equity items in simplified question.  

**Financial Meaning:** Roll-forward of accumulated retained earnings.  

**Reconstruction Path:** Beginning RE + profit retained − distributions.  

**Exam Trap:** Retained earnings ≠ cash.

### F04 — Average Tax Rate

**Topic:** 1.1  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.2

**Default Formula**

$$
T_{avg}=\frac{Total\ Tax}{Taxable\ Income}
$$

**Inputs:** Total tax and taxable income  

**Assumption / Convention:** Taxable income positive.  

**Financial Meaning:** Average historical tax burden.  

**Reconstruction Path:** Total tax / total tax base.  

**Exam Trap:** Average tax rate ≠ marginal tax rate.

### F05 — After-Tax Amount

**Topic:** 1.1  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham Ch.2

**Default Formula**

$$
X_{AT}=X_{BT}(1-T)
$$

**Equivalent / Related Form**

$$
Tax=X_{BT}T
$$

**Inputs:** Before-tax amount and tax rate  

**Assumption / Convention:** Entire relevant amount taxable at stated rate.  

**Financial Meaning:** Generic after-tax transformation.  

**Reconstruction Path:** Keep fraction 1−T after tax.  

**Exam Trap:** Do not use when source tax treatment differs.

### F06 — Taxable-Equivalent Yield

**Topic:** 1.1  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham Ch.2

**Default Formula**

$$
r_{taxable}=\frac{r_{tax\text{-}exempt}}{1-T}
$$

**Equivalent / Related Form**

$$
r_{tax\text{-}exempt}=r_{taxable}(1-T)
$$

**Inputs:** Tax-exempt yield, tax rate  

**Assumption / Convention:** Comparable risk/horizon; stated tax rate applies.  

**Financial Meaning:** Taxable yield matching tax-exempt after-tax yield.  

**Reconstruction Path:** Set after-tax taxable yield equal to tax-exempt yield.  

**Exam Trap:** Do not compare pre-tax yields when after-tax equivalence is asked.

### F07 — Average Balance

**Topic:** 1.6  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Weygandt Ch.18

**Default Formula**

$$
Average\ Balance=\frac{Beginning\ Balance+Ending\ Balance}{2}
$$

**Inputs:** Beginning and ending balances  

**Assumption / Convention:** Simple two-point average; source/problem calls for average balance.  

**Financial Meaning:** Common flow-to-stock denominator convention.  

**Reconstruction Path:** Average opening and closing stock quantities.  

**Exam Trap:** Some sources use ending balance; follow source/problem.

### F08 — Current Ratio

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18; Robinson

**Default Formula**

$$
Current\ Ratio=\frac{Current\ Assets}{Current\ Liabilities}
$$

**Inputs:** Current assets, current liabilities  

**Assumption / Convention:** Source classification of current items.  

**Financial Meaning:** Short-term debt-paying capacity.  

**Reconstruction Path:** Near-term resources / near-term obligations.  

**Exam Trap:** Higher is not automatically better.

### F09 — Quick Ratio

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18; Robinson

**Default Formula**

$$
Quick\ Ratio=\frac{Cash+Short\text{-}Term\ Investments+Net\ Receivables}{Current\ Liabilities}
$$

**Equivalent / Related Form**

$$
Marketable securities may replace short-term investments in source wording.
$$

**Inputs:** Cash, short-term investments, net receivables, current liabilities  

**Assumption / Convention:** Use source/problem quick-asset definition.  

**Financial Meaning:** Immediate liquidity.  

**Reconstruction Path:** Current assets excluding less-liquid items such as inventory/prepaids.  

**Exam Trap:** Do not include inventory by default.

### F10 — Accounts Receivable Turnover

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18

**Default Formula**

$$
AR\ Turnover=\frac{Net\ Credit\ Sales}{Average\ Net\ AR}
$$

**Equivalent / Related Form**

$$
Average\ Collection\ Period=\frac{365}{AR\ Turnover}
$$

**Inputs:** Net credit sales, average net receivables  

**Assumption / Convention:** Use given day-count convention.  

**Financial Meaning:** Collection speed.  

**Reconstruction Path:** Credit-sales flow / receivable stock.  

**Exam Trap:** Do not silently use total sales when credit sales are given.

### F11 — Inventory Turnover

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18

**Default Formula**

$$
Inventory\ Turnover=\frac{COGS}{Average\ Inventory}
$$

**Inputs:** COGS, average inventory  

**Assumption / Convention:** Consistent inventory measurement.  

**Financial Meaning:** Inventory utilization/sales cycle.  

**Reconstruction Path:** Cost flow / average inventory.  

**Exam Trap:** Do not use sales as numerator for the Weygandt formula.

### F12 — Profit Margin

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18; Brigham Ch.3

**Default Formula**

$$
Profit\ Margin=\frac{Net\ Income}{Net\ Sales}
$$

**Equivalent / Related Form**

$$
Brigham may use Sales rather than Net Sales depending data.
$$

**Inputs:** Net income, net sales  

**Assumption / Convention:** Follow source data definition.  

**Financial Meaning:** Net income per unit of sales.  

**Reconstruction Path:** Profit / sales.  

**Exam Trap:** High margin does not guarantee high ROA.

### F13 — Asset Turnover

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18; Brigham Ch.3

**Default Formula**

$$
Asset\ Turnover=\frac{Net\ Sales}{Average\ Total\ Assets}
$$

**Equivalent / Related Form**

$$
Brigham may use Sales / Total Assets.
$$

**Inputs:** Sales and asset base  

**Assumption / Convention:** Average vs ending assets is source/problem convention.  

**Financial Meaning:** Sales generated per unit of assets.  

**Reconstruction Path:** Sales flow / asset stock.  

**Exam Trap:** Never hide average-vs-ending denominator convention.

### F14 — Return on Assets (ROA)

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18; Brigham Ch.3

**Default Formula**

$$
ROA=\frac{Net\ Income}{Average\ Total\ Assets}
$$

**Equivalent / Related Form**

$$
Brigham can use Net Income / Total Assets.
$$

**Inputs:** Net income and asset base  

**Assumption / Convention:** Use source/problem denominator convention.  

**Financial Meaning:** Profitability relative to assets.  

**Reconstruction Path:** Profit / assets.  

**Exam Trap:** Average-assets vs ending-assets is a definition trap.

### F15 — Return on Common Equity (ROE)

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18

**Default Formula**

$$
ROE=\frac{Net\ Income-Preferred\ Dividends}{Average\ Common\ Stockholders'\ Equity}
$$

**Equivalent / Related Form**

$$
If no preferred dividends, numerator reduces to Net Income.
$$

**Inputs:** Net income, preferred dividends, average common equity  

**Assumption / Convention:** Common-stockholder perspective.  

**Financial Meaning:** Profitability attributable to common owners.  

**Reconstruction Path:** Common earnings / common equity base.  

**Exam Trap:** Do not mix total equity with common equity if preferred stock exists.

### F16 — Debt-to-Assets — Weygandt

**Topic:** 1.6  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.18

**Default Formula**

$$
Debt\text{-}to\text{-}Assets=\frac{Total\ Liabilities}{Total\ Assets}
$$

**Equivalent / Related Form**

$$
Brigham debt ratio may depend on narrower debt definition.
$$

**Inputs:** Total liabilities, total assets  

**Assumption / Convention:** Explicitly Weygandt convention.  

**Financial Meaning:** Share of assets financed by creditors.  

**Reconstruction Path:** Creditor claims / total assets.  

**Exam Trap:** Do not assume every debt ratio uses total liabilities.

### F17 — Net Working Capital

**Topic:** 2.3  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.27; Brigham Ch.2

**Default Formula**

$$
NWC=Current\ Assets-Current\ Liabilities
$$

**Equivalent / Related Form**

$$
Operating NWC uses operating current assets minus operating current liabilities.
$$

**Inputs:** Current asset/liability definitions  

**Assumption / Convention:** State total or operating NWC.  

**Financial Meaning:** Net short-term capital.  

**Reconstruction Path:** Current resources less current obligations.  

**Exam Trap:** Project FCF often requires operating NWC.

### F18 — Trade Credit Periodic Cost

**Topic:** 2.3  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Berk & DeMarzo Ch.26

**Default Formula**

$$
r_p=\frac{d}{1-d}
$$

**Equivalent / Related Form**

$$
EAR=(1+r_p)^{365/N}-1
$$

**Inputs:** Cash discount d; extra credit days N  

**Assumption / Convention:** Forgo discount and pay at later date.  

**Financial Meaning:** Implicit financing cost of not taking discount.  

**Reconstruction Path:** Lost discount / funds effectively retained.  

**Exam Trap:** Annualization depends on extra-credit period and day-count.

### F19 — Long Call Payoff

**Topic:** 2.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.20

**Default Formula**

$$
C_T=\max(S_T-K,0)
$$

**Equivalent / Related Form**

$$
Short call payoff = -C_T
$$

**Inputs:** Terminal price, strike  

**Assumption / Convention:** Expiration payoff before premium/fees.  

**Financial Meaning:** Right to buy.  

**Reconstruction Path:** Exercise only when S_T > K.  

**Exam Trap:** Payoff ≠ profit.

### F20 — Long Put Payoff

**Topic:** 2.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.20

**Default Formula**

$$
P_T=\max(K-S_T,0)
$$

**Equivalent / Related Form**

$$
Short put payoff = -P_T
$$

**Inputs:** Terminal price, strike  

**Assumption / Convention:** Expiration payoff before premium/fees.  

**Financial Meaning:** Right to sell.  

**Reconstruction Path:** Exercise only when K > S_T.  

**Exam Trap:** Payoff ≠ profit.

### F21 — Long Option Profit

**Topic:** 2.4  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Berk & DeMarzo Ch.20

**Default Formula**

$$
Profit_{long}=Payoff-Premium
$$

**Equivalent / Related Form**

$$
Short\ Profit=Premium-Payoff
$$

**Inputs:** Payoff and premium  

**Assumption / Convention:** Simple single-period treatment.  

**Financial Meaning:** Economic result after initial premium.  

**Reconstruction Path:** What you receive minus what you paid.  

**Exam Trap:** Do not call terminal payoff profit.

### F22 — Pre-/Post-Money Valuation

**Topic:** 2.5  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Berk & DeMarzo Ch.23

**Default Formula**

$$
V_{pre}=N_{old}P,\qquad V_{post}=V_{pre}+New\ Capital
$$

**Equivalent / Related Form**

$$
V_{post}=(N_{old}+N_{new})P
$$

**Inputs:** Old shares, price, new capital  

**Assumption / Convention:** Single financing round; consistent price basis.  

**Financial Meaning:** Ownership valuation before/after fresh capital.  

**Reconstruction Path:** Old ownership value then add new cash.  

**Exam Trap:** Dilution is not automatically wealth loss.

### F23 — Underwriting Spread

**Topic:** 2.5  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.23

**Default Formula**

$$
s=\frac{P_{offer}-P_{issuer}}{P_{offer}}
$$

**Equivalent / Related Form**

$$
Per\text{-}share\ spread=P_{offer}-P_{issuer}
$$

**Inputs:** Offer price, issuer proceeds price  

**Assumption / Convention:** Source underwriting framing.  

**Financial Meaning:** Direct underwriter compensation.  

**Reconstruction Path:** Public price minus issuer-effective price.  

**Exam Trap:** Spread ≠ underpricing.

### F24 — After-Tax Cost of Debt

**Topic:** 3.2–3.3  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.9

**Default Formula**

$$
r_D^{AT}=r_D(1-T)
$$

**Equivalent / Related Form**

$$
Tax\ Shield=T\times Interest
$$

**Inputs:** Before-tax debt cost, tax rate  

**Assumption / Convention:** Interest deductibility in cited textbook context.  

**Financial Meaning:** Effective debt cost after tax shield.  

**Reconstruction Path:** Keep 1−T of debt cost.  

**Exam Trap:** Do not tax-adjust common equity cost.

### F25 — WACC

**Topic:** 3.3  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.9

**Default Formula**

$$
WACC=w_Dr_D(1-T)+w_Pr_P+w_Er_E
$$

**Equivalent / Related Form**

$$
If no preferred: WACC=w_Dr_D(1-T)+w_Er_E
$$

**Inputs:** Weights and component costs  

**Assumption / Convention:** Appropriate target/market weights; current relevant component costs.  

**Financial Meaning:** Weighted required return on capital.  

**Reconstruction Path:** Weighted average of capital-provider required returns.  

**Exam Trap:** Company WACC is not universal project discount rate.

### F26 — NOPAT

**Topic:** 3.3 / 4.2  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.2 & Ch.13

**Default Formula**

$$
NOPAT=EBIT(1-T)
$$

**Inputs:** EBIT, tax rate  

**Assumption / Convention:** Operating profit after tax; financing effects excluded.  

**Financial Meaning:** After-tax operating performance.  

**Reconstruction Path:** Tax EBIT directly.  

**Exam Trap:** NOPAT ≠ net income.

### F27 — Free Cash Flow — Brigham Operating-Capital Form

**Topic:** 3.3 / 4.2  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.2 & Ch.13

**Default Formula**

$$
FCF=NOPAT-Net\ Investment\ in\ Operating\ Capital
$$

**Equivalent / Related Form**

$$
FCF=Operating\ Cash\ Flow-Gross\ Investment\ in\ Operating\ Capital
$$

**Inputs:** NOPAT and operating-capital investment  

**Assumption / Convention:** Brigham operating-company/project economic cash-flow framing.  

**Financial Meaning:** Cash after reinvestment available to investors.  

**Reconstruction Path:** After-tax operating profit minus reinvestment.  

**Exam Trap:** FCF ≠ net income ≠ EBITDA.

### F28 — Change in Net Working Capital

**Topic:** 3.3  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham Ch.2; project FCF notes

**Default Formula**

$$
\Delta NWC_t=NWC_t-NWC_{t-1}
$$

**Equivalent / Related Form**

$$
Increase = cash use; decrease = cash source.
$$

**Inputs:** Current and prior operating NWC  

**Assumption / Convention:** Use operating NWC in project/FCF context.  

**Financial Meaning:** Cash tied/released in short-term operations.  

**Reconstruction Path:** Compare current required NWC with prior NWC.  

**Exam Trap:** Increase in NWC is not accounting expense.

### F29 — Depreciation Tax Shield

**Topic:** 3.3  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham capital-budgeting / FCF framework

**Default Formula**

$$
DTS=T\times Depreciation
$$

**Equivalent / Related Form**

$$
Embedded in after-tax OCF if depreciation is deducted and added back.
$$

**Inputs:** Tax rate, depreciation  

**Assumption / Convention:** Depreciation tax-deductible under stated rules.  

**Financial Meaning:** Cash-tax saving from noncash deduction.  

**Reconstruction Path:** Each depreciation dollar saves T tax dollars.  

**Exam Trap:** Depreciation itself is not cash outflow.

### F30 — Net Present Value

**Topic:** 3.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.10; Berk & DeMarzo Ch.3/7; Weygandt Ch.26

**Default Formula**

$$
NPV=\sum_{t=0}^{n}\frac{CF_t}{(1+r)^t}
$$

**Equivalent / Related Form**

$$
NPV=PV(Benefits)-PV(Costs)
$$

**Inputs:** Incremental cash flows, risk-appropriate r  

**Assumption / Convention:** Cash timing and discount rate aligned.  

**Financial Meaning:** Absolute value created.  

**Reconstruction Path:** PV every incremental CF and sum.  

**Exam Trap:** For mutually exclusive projects, highest IRR need not maximize value.

### F31 — Internal Rate of Return

**Topic:** 3.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.10; Berk & DeMarzo Ch.7

**Default Formula**

$$
0=\sum_{t=0}^{n}\frac{CF_t}{(1+IRR)^t}
$$

**Equivalent / Related Form**

$$
IRR is the rate at which NPV=0.
$$

**Inputs:** Project cash-flow stream  

**Assumption / Convention:** Normal independent project gives cleanest interpretation.  

**Financial Meaning:** Break-even discount rate.  

**Reconstruction Path:** Solve rate making PV sum zero.  

**Exam Trap:** Nonnormal CF can generate multiple/no useful IRR.

### F32 — Modified Internal Rate of Return

**Topic:** 3.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.10 §10.6

**Default Formula**

$$
MIRR=\left(\frac{TV(Inflows)}{PV(Costs)}\right)^{1/n}-1
$$

**Equivalent / Related Form**

$$
PV(Costs)(1+MIRR)^n=TV(Inflows)
$$

**Inputs:** PV costs, TV inflows, horizon  

**Assumption / Convention:** Brigham procedure with specified financing/reinvestment rate, typically cost of capital.  

**Financial Meaning:** Modified percentage-return measure.  

**Reconstruction Path:** Move costs to t0, inflows to terminal date, solve connecting rate.  

**Exam Trap:** MIRR ≠ IRR; NPV remains primary if rankings conflict.

### F33 — Annual / Accounting Rate of Return

**Topic:** 3.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Weygandt Ch.26

**Default Formula**

$$
ARR=\frac{Expected\ Annual\ Net\ Income}{Average\ Investment}
$$

**Equivalent / Related Form**

$$
Average\ Investment=\frac{Original\ Investment+Ending\ Value}{2}
$$

**Inputs:** Annual net income, original investment, ending value  

**Assumption / Convention:** Weygandt convention.  

**Financial Meaning:** Accounting-profit return on average investment.  

**Reconstruction Path:** Accounting net income / average investment.  

**Exam Trap:** ARR ≠ IRR; ARR ignores TVM.

### F34 — Profitability Index — Brigham

**Topic:** 3.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.10 §10.8

**Default Formula**

$$
PI_B=\frac{PV(Future\ Inflows)}{Initial\ Investment}
$$

**Equivalent / Related Form**

$$
PI_B=1+\frac{NPV}{Initial\ Investment}
$$

**Inputs:** PV future inflows, initial investment  

**Assumption / Convention:** Simple initial-outlay setup.  

**Financial Meaning:** PV benefits per dollar initial cost.  

**Reconstruction Path:** PV inflows / upfront cost.  

**Exam Trap:** Do not confuse with Berk scarce-resource PI.

### F35 — Profitability Index — Berk & DeMarzo

**Topic:** 3.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.7

**Default Formula**

$$
PI_{BD}=\frac{NPV}{Resource\ Consumed}
$$

**Inputs:** NPV, constrained resource  

**Assumption / Convention:** Single scarce-resource ranking context.  

**Financial Meaning:** Value per unit of scarce resource.  

**Reconstruction Path:** NPV / scarce resource.  

**Exam Trap:** Brigham threshold >1 does not transfer.

### F36 — Value of Operations

**Topic:** 4.2  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham Ch.13

**Default Formula**

$$
V_{operations}=\sum_{t=1}^{\infty}\frac{FCF_t}{(1+WACC)^t}
$$

**Equivalent / Related Form**

$$
Explicit\ Forecast\ PV+Horizon\ Value\ PV
$$

**Inputs:** Expected FCFs, WACC  

**Assumption / Convention:** Operating FCF matched with operating WACC.  

**Financial Meaning:** Intrinsic value of operating assets.  

**Reconstruction Path:** PV of future FCF.  

**Exam Trap:** Do not mix financing CF into operating FCF.

### F37 — Horizon Value

**Topic:** 4.2  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham Ch.13 Eq.13-2

**Default Formula**

$$
HV_N=\frac{FCF_{N+1}}{WACC-g}=\frac{FCF_N(1+g)}{WACC-g}
$$

**Inputs:** FCF, WACC, growth g  

**Assumption / Convention:** Constant growth after N; WACC > g.  

**Financial Meaning:** Value at horizon date of subsequent FCF.  

**Reconstruction Path:** Growing perpetuity at time N.  

**Exam Trap:** Still discount horizon value back to valuation date.

### F38 — Forward Payoff

**Topic:** 5.2  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.23

**Default Formula**

$$
Payoff_{long}=S_T-K
$$

**Equivalent / Related Form**

$$
Payoff_{short}=K-S_T
$$

**Inputs:** Terminal price, delivery/forward price  

**Assumption / Convention:** Simple maturity payoff.  

**Financial Meaning:** Symmetric obligation-based exposure.  

**Reconstruction Path:** Long pays K for something worth S_T.  

**Exam Trap:** Forward payoff is not truncated at zero.

### F39 — Total Stock Return

**Topic:** 5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
R_t=\frac{Div_t+P_t-P_{t-1}}{P_{t-1}}
$$

**Equivalent / Related Form**

$$
R=Dividend\ Yield+Capital\ Gain\ Yield
$$

**Inputs:** Dividend, beginning price, ending price  

**Assumption / Convention:** Matched holding period.  

**Financial Meaning:** Income + price change.  

**Reconstruction Path:** Distribution plus change in value / beginning value.  

**Exam Trap:** Dividend yield alone is not total return.

### F40 — Arithmetic Average Return

**Topic:** 5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
\bar R=\frac{1}{T}\sum_{t=1}^{T}R_t
$$

**Inputs:** Periodic realized returns  

**Assumption / Convention:** Historical sample.  

**Financial Meaning:** Simple mean periodic return.  

**Reconstruction Path:** Add returns and divide by T.  

**Exam Trap:** Arithmetic average ≠ CAGR.

### F41 — Compound Annual Return

**Topic:** 5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
R_g=\left[\prod_{t=1}^{T}(1+R_t)\right]^{1/T}-1
$$

**Equivalent / Related Form**

$$
R_g=\left(\frac{FV}{PV}\right)^{1/T}-1
$$

**Inputs:** Periodic returns or initial/final wealth  

**Assumption / Convention:** Multi-period realized wealth path.  

**Financial Meaning:** Constant annual compound growth rate.  

**Reconstruction Path:** Multiply gross returns, root, subtract 1.  

**Exam Trap:** Do not use CAGR as arithmetic expected one-period return.

### F42 — Excess Return

**Topic:** 5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
R_{excess}=R_i-R_f
$$

**Equivalent / Related Form**

$$
Historical\ Market\ Excess=R_M-R_f
$$

**Inputs:** Asset and risk-free returns  

**Assumption / Convention:** Same period/basis.  

**Financial Meaning:** Return above risk-free benchmark.  

**Reconstruction Path:** Subtract benchmark.  

**Exam Trap:** Historical excess ≠ forward-looking required premium automatically.

### F43 — Beta

**Topic:** 5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
\beta_i=\frac{Cov(R_i,R_M)}{Var(R_M)}
$$

**Inputs:** Covariance with market, market variance  

**Assumption / Convention:** CAPM/systematic-risk framework.  

**Financial Meaning:** Market sensitivity.  

**Reconstruction Path:** Regression-style slope.  

**Exam Trap:** Beta ≠ SD ≠ correlation.

### F44 — CAPM Required Return

**Topic:** 5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
r_i=r_f+\beta_i\left(E[R_M]-r_f\right)
$$

**Equivalent / Related Form**

$$
Required\ Return=Risk\text{-}Free+\beta\times Market\ Risk\ Premium
$$

**Inputs:** Risk-free rate, beta, market premium  

**Assumption / Convention:** CAPM benchmark/model context.  

**Financial Meaning:** Required expected return for systematic risk.  

**Reconstruction Path:** Base return + beta-scaled premium.  

**Exam Trap:** Multiply beta by market risk premium, not market return itself.

### F45 — Nominal–Real Return Relation

**Topic:** 5.3–5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham / Topic 5 source framework

**Default Formula**

$$
1+r_n=(1+r_r)(1+\pi)
$$

**Equivalent / Related Form**

$$
r_r=\frac{1+r_n}{1+\pi}-1;\qquad r_r\approx r_n-\pi
$$

**Inputs:** Nominal return, real return, inflation  

**Assumption / Convention:** Same horizon; subtraction is approximation.  

**Financial Meaning:** Purchasing-power adjustment.  

**Reconstruction Path:** Nominal gross growth = real gross growth × inflation growth.  

**Exam Trap:** Do not present r_n−π as exact.

### F46 — Fixed-Rate Bond Price

**Topic:** 5.3  
**Formula Status:** **UNDERSTAND / RECONSTRUCT**  
**Source Basis:** Brigham/Berk debt valuation context

**Default Formula**

$$
P_0=\sum_{t=1}^{n}\frac{C}{(1+y)^t}+\frac{F}{(1+y)^n}
$$

**Equivalent / Related Form**

$$
Price=PV(Coupons)+PV(Face\ Value)
$$

**Inputs:** Coupon, face value, yield, maturity  

**Assumption / Convention:** Fixed contractual CF and matched yield convention.  

**Financial Meaning:** PV of promised debt cash flows.  

**Reconstruction Path:** Discount coupons and principal.  

**Exam Trap:** Yield ↑ implies price ↓, ceteris paribus.

### F47 — Constant-Growth Stock Value

**Topic:** 5.3–5.4  
**Formula Status:** **MEMORIZE**  
**Source Basis:** Brigham Ch.7

**Default Formula**

$$
P_0=\frac{D_1}{r_s-g}
$$

**Equivalent / Related Form**

$$
r_s=\frac{D_1}{P_0}+g
$$

**Inputs:** Next dividend, required return, growth  

**Assumption / Convention:** Perpetual constant growth; r_s > g.  

**Financial Meaning:** Gordon equity valuation.  

**Reconstruction Path:** Growing perpetuity.  

**Exam Trap:** Model-specific; do not use if assumptions fail.

### F48 — Standard Error of Historical Mean Return

**Topic:** 5.4  
**Formula Status:** **REFERENCE ONLY**  
**Source Basis:** Berk & DeMarzo Ch.10

**Default Formula**

$$
SE(\bar R)=\frac{SD(R)}{\sqrt{T}}
$$

**Equivalent / Related Form**

$$
Approx.\ 95\%\ interval=\bar R\pm2SE(\bar R)
$$

**Inputs:** Historical SD, sample size  

**Assumption / Convention:** Textbook approximation/statistical framing.  

**Financial Meaning:** Sampling uncertainty of historical mean.  

**Reconstruction Path:** Mean uncertainty shrinks with sqrt(T).  

**Exam Trap:** Long history can still yield imprecise expected-return estimates.

### F49 — Alpha — CAPM Benchmark

**Topic:** 5.4  
**Formula Status:** **REFERENCE ONLY**  
**Source Basis:** Berk & DeMarzo Ch.13

**Default Formula**

$$
\alpha_i=E[R_i]-\left[r_f+\beta_i(E[R_M]-r_f)\right]
$$

**Equivalent / Related Form**

$$
Expected\ Return-CAPM\ Benchmark
$$

**Inputs:** Expected asset return and CAPM inputs  

**Assumption / Convention:** CAPM chosen as benchmark.  

**Financial Meaning:** Model-relative abnormal expected return.  

**Reconstruction Path:** Expected return minus model-required return.  

**Exam Trap:** Positive alpha ≠ guaranteed arbitrage.

## 4. Source-Qualified Formula Families

### 4.1 ROA

Weygandt operational default:

$$
ROA
=
\frac{Net\ Income}{Average\ Total\ Assets}
$$

Brigham can use:

$$
ROA
=
\frac{Net\ Income}{Total\ Assets}
$$

**Rule:** follow the source/problem denominator convention.

### 4.2 Asset Turnover

Weygandt:

$$
Asset\ Turnover
=
\frac{Net\ Sales}{Average\ Total\ Assets}
$$

Brigham can use:

$$
Total\ Assets\ Turnover
=
\frac{Sales}{Total\ Assets}
$$

**Rule:** formula meaning is stable; denominator convention is not universally identical.

### 4.3 Debt-to-Assets / Debt Ratio

Weygandt:

$$
Debt\text{-}to\text{-}Assets
=
\frac{Total\ Liabilities}{Total\ Assets}
$$

Other corporate-finance sources can define debt more narrowly.

**Rule:** never use a leverage formula without checking what “debt” means.

### 4.4 Profitability Index

Brigham:

$$
PI_B
=
\frac{PV(Future\ Inflows)}{Initial\ Investment}
$$

Berk & DeMarzo:

$$
PI_{BD}
=
\frac{NPV}{Resource\ Consumed}
$$

**Rule:** these are two source-qualified quantities sharing one label, not equivalent formulas.

## 5. Best-Reconstructed Families

### Trade Credit EAR

Start with:

$$
r_p
=
\frac{d}{1-d}
$$

then annualize:

$$
EAR
=
(1+r_p)^{365/N}-1
$$

### Free Cash Flow

Brigham primitive:

$$
FCF
=
NOPAT
-
Net\ Investment\ in\ Operating\ Capital
$$

Equivalent decomposition:

$$
FCF
=
Operating\ Cash\ Flow
-
Gross\ Investment\ in\ Operating\ Capital
$$

This is preferable to memorizing every longer decomposition as a separate formula.

### Bond Price

```text
Bond Value
=
PV of coupons
+
PV of face value
```

### Value of Operations

```text
Expected FCF
→ discount at matched WACC
→ sum present values
```

## 6. Formula Hierarchy

### Tier A — Immediate Recall

Accounting equation; net income; retained earnings; current/quick ratio; AR/inventory turnover; profit margin; asset turnover; ROA/ROE with convention label; NWC; call/put payoff; after-tax cost of debt; WACC; NOPAT; FCF; NPV; IRR; MIRR; ARR; source-qualified PI; forward payoff; total return; arithmetic average; CAGR; excess return; beta; CAPM; exact nominal-real relation; Gordon model.

### Tier B — Reconstruct

Taxable-equivalent yield; average balance; trade-credit EAR; option profit; pre/post-money valuation; ΔNWC cash-flow effect; depreciation tax shield; value of operations; horizon value; bond price.

### Tier C — Reference

Standard error of historical mean return; alpha; specialized ratio variants.

## 7. Mandatory Formula Distinctions

### NPV vs IRR

$$
NPV
=
\sum_{t=0}^{n}
\frac{CF_t}{(1+r)^t}
$$

IRR solves:

$$
0
=
\sum_{t=0}^{n}
\frac{CF_t}{(1+IRR)^t}
$$

### Payoff vs Profit

For a long call:

$$
Payoff
=
\max(S_T-K,0)
$$

but:

$$
Profit
=
\max(S_T-K,0)-Premium
$$

### Required vs Realized Return

CAPM:

$$
r_i
=
r_f
+
\beta_i
\left(
E[R_M]-r_f
\right)
$$

is ex ante.

Realized stock return:

$$
R_t
=
\frac{Div_t+P_t-P_{t-1}}{P_{t-1}}
$$

is ex post.

### Nominal vs Real

Exact:

$$
1+r_n
=
(1+r_r)(1+\pi)
$$

Approximation:

$$
r_r
\approx
r_n-\pi
$$

## 8. Formula Selection Protocol

```text
1. Name the quantity.
2. Identify perspective.
3. Identify source/convention if ratio or PI.
4. Identify time basis: point-in-time / period / ex ante / ex post.
5. Write canonical formula.
6. Check units and sign.
7. Interpret the result.
```

For ambiguous ratios:

```text
Question wording
→ numerator definition?
→ denominator definition?
→ average or ending?
→ calculate
```

For capital budgeting:

```text
Incremental cash flow?
→ risk-appropriate rate?
→ NPV first
→ supporting rate/recovery metrics second
```

## 9. Formula Traps Excluded from Default Cheat Sheet

1. Generic debt ratio without defining debt.
2. Generic ROA without average-vs-ending convention.
3. Generic PI without Brigham/Berk qualifier.
4. Real return = nominal − inflation presented as exact.
5. Company WACC presented as universal project discount rate.
6. Historical average return presented as guaranteed expected return.
7. Option payoff presented as option profit.
8. Coupon rate presented as bond yield/total return.
9. Retained earnings presented as available cash.
10. Higher volatility → higher required return applied without systematic-risk context.

## 10. Direct Source Checks Completed

### MIRR

Brigham explicitly gives:

$$
PV(Costs)(1+MIRR)^n
=
TV(Inflows)
$$

hence:

$$
MIRR
=
\left(
\frac{TV(Inflows)}
{PV(Costs)}
\right)^{1/n}
-1
$$

### Annual / Accounting Rate of Return

Weygandt explicitly gives:

$$
Annual\ Rate\ of\ Return
=
\frac{Expected\ Annual\ Net\ Income}
{Average\ Investment}
$$

and:

$$
Average\ Investment
=
\frac{Original\ Investment+Ending\ Value}{2}
$$

### ROA / ROE / Debt-to-Assets

Weygandt Chapter 18 explicitly uses:

$$
ROA
=
\frac{Net\ Income}
{Average\ Total\ Assets}
$$

$$
ROE
=
\frac{Net\ Income-Preferred\ Dividends}
{Average\ Common\ Stockholders'\ Equity}
$$

$$
Debt\text{-}to\text{-}Assets
=
\frac{Total\ Liabilities}
{Total\ Assets}
$$

These are canonical **Weygandt conventions**; alternatives remain qualified.

### FCF

Brigham primitive:

$$
FCF
=
NOPAT
-
Net\ Investment\ in\ Operating\ Capital
$$

Alternative:

$$
FCF
=
Operating\ Cash\ Flow
-
Gross\ Investment\ in\ Operating\ Capital
$$

Therefore Stage 9 does not force one long decomposition as the only valid form.

## 11. MathJax / Markdown Rendering Rules

- display math uses standalone `$$ ... $$`;
- formulas are never wrapped in backticks;
- no prose/headings inside math delimiters;
- tables avoid multiline MathJax;
- source-qualified alternatives use separate display blocks;
- prose stays outside math delimiters.

## 12. Stage-9 Validation Checklist

- [x] Stage 8 used as baseline.
- [x] One operational default selected where safe.
- [x] Equivalent forms retained only when useful.
- [x] Assumptions/conventions attached.
- [x] Formula-level statuses assigned.
- [x] PI remains source-qualified.
- [x] Ratio conventions explicit.
- [x] MIRR directly rechecked.
- [x] ARR directly rechecked.
- [x] ROA / ROE / Debt-to-Assets directly rechecked.
- [x] FCF directly rechecked.
- [x] Exact vs approximation separated.
- [x] Investor-vs-issuer perspective preserved.
- [x] MathJax structured for Obsidian rendering.
- [x] Formula layer remains validated-not-frozen.

## 13. Exit Decision

**Stage 9 is complete as the CF4 Canonical Formula Layer.**

Next:

> **Stage 10 — Interpretation Reconciliation**

Stage 10 should move from formula identity to:

```text
metric / event
→ what changed
→ why
→ who benefits / bears risk
→ favorable / unfavorable / context-dependent
→ limitation
```
