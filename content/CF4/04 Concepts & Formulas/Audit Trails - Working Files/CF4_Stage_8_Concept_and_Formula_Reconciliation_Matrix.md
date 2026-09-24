---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 8
stage_name: "Concept and Formula Reconciliation Matrix"
status: "matrix-built-formulas-not-frozen"
date_created: "2026-08-30"
baseline_stage_1: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md"
baseline_stage_2: "CF4_Stage_2_Cross_Source_Reconciliation.md"
baseline_stage_3: "CF4_Stage_3_Terminology_Collision_Audit.md"
baseline_stage_4: "CF4_Stage_4_Canonical_Terminology_Dictionary.md"
baseline_stage_5: "CF4_Stage_5_Canonical_Accounting_Treatment_Map.md"
baseline_stage_6: "CF4_Stage_6_Concept_Hierarchy.md"
baseline_stage_7: "CF4_Stage_7_Knowledge_Status_Assignment.md"
formula_layer_frozen: false
---

# CF4 — Stage 8: Concept & Formula Reconciliation Matrix

> [!ABSTRACT] Tujuan
> Stage 8 menyatukan hasil Stages 1–7 menjadi satu **system-wide reconciliation matrix**.
>
> Untuk setiap concept/quantity, matrix ini menunjukkan:
>
> **canonical concept/form → source variants → relationship → perspective → assumptions/convention → knowledge status → reconciliation note**
>
> Stage ini masih **belum membekukan formula layer**. Tujuan utamanya adalah memastikan formula yang tampak berbeda benar-benar diklasifikasikan dulu sebelum Stage 9 memilih operational default.

## 1. Reconciliation Rules

1. **Concept first, formula second.**
2. Formula yang nilainya bisa sama belum tentu merupakan quantity yang sama.
3. Source convention tidak boleh dihapus hanya demi uniformity.
4. Perspective harus dinyatakan jika investor required return menjadi issuer cost of capital.
5. Average-vs-ending balance dan debt-vs-liability denominator harus source-qualified.
6. Exact vs approximation harus diberi label eksplisit.
7. Historical evidence bukan universal parameter.
8. Stage-7 knowledge status dibawa ke matrix, tetapi **formula-specific status baru final pada Stage 9**.

## 2. System-Wide Concept & Formula Reconciliation Matrix

| Topic | Concept / Quantity | Canonical Meaning | Canonical / Working Form | Official Source Basis | Source Variant / Collision | Relationship | Perspective | Assumption / Convention | Knowledge Status | Stage-8 Resolution |
|---|---|---|---|---|---|---|---|---|---|---|
| 1.1 | Taxable Income | Tax base, not accounting profit | Conceptual definition | Brigham Ch.2 | Accounting profit is not automatically taxable income | Genuinely distinct | Tax / Company | Jurisdiction/source rules | MEMORIZE | Keep distinction; no canonical formula beyond definition. |
| 1.1 | Marginal Tax Rate | Tax on incremental income | $T_m$ | Brigham Ch.2 | Average tax rate = total tax / taxable income | Genuinely distinct | Tax / Company / Investor | Progressive-tax context | MEMORIZE | Use marginal rate for incremental decision logic when source/question indicates. |
| 1.1 | Average Tax Rate | Average tax burden | $T_{avg}=\frac{\text{Total Tax}}{\text{Taxable Income}}$ | Brigham Ch.2 | Marginal rate differs | Genuinely distinct | Tax / Company / Investor | Taxable income > 0 | MEMORIZE | Do not substitute marginal rate. |
| 1.1 | After-Tax Income / Return | Before-tax amount after tax | $X_{AT}=X_{BT}(1-T)$ | Brigham Ch.2 | Partial-taxability versions exist | General formula + special case | Investor / Company | Single applicable tax rate on full amount | UNDERSTAND / RECONSTRUCT | Use only when whole relevant amount is taxable at T. |
| 1.1 | Taxable-Equivalent Yield | Taxable yield giving same after-tax return as tax-exempt yield | $r_{taxable}=\frac{r_{TE}}{1-T}$ | Brigham Ch.2 | After-tax taxable yield = $r(1-T)$ | Algebraic inverse | Investor | Comparable risk/maturity; stated tax rate applies | UNDERSTAND / RECONSTRUCT | Reconstruct from after-tax equality if forgotten. |
| 1.1 | Tax Shield | Tax saving from deductible interest | $\text{Tax Shield}=T\times \text{Deductible Interest}$ | Brigham Ch.2 / Ch.9 | After-tax debt cost $r_D(1-T)$ | Definition → consequence | Company | Interest deductibility in source context | UNDERSTAND / RECONSTRUCT | Carry to WACC; jurisdiction-specific source context. |
| 1.4–1.5 | Accounting Equation | Core statement identity | $Assets=Liabilities+Equity$ | Weygandt Ch.1–2; Robinson Ch.1 | Expanded equation adds contributed capital, RE, revenue, expense, dividends | General vs expanded form | Accounting / Company | All transactions properly recognized | MEMORIZE | Primitive identity. |
| 1.5 | Net Income | Period performance | $NI=Revenue-Expenses$ | Weygandt Ch.1–2 | Broader income/gain/loss presentation variants | General vs expanded form | Accounting / Analyst | Simplified statement setting | MEMORIZE | Keep concept separate from cash flow. |
| 1.5 | Ending Retained Earnings | Equity roll-forward | $RE_{end}=RE_{begin}+NI-Dividends$ | Weygandt Ch.1–2 | Owner contributions are separate from retained earnings | Core identity | Accounting / Company | No omitted direct-to-equity items in simplified CF4 setting | MEMORIZE | Use as bridge from IS to SFP. |
| 1.6 | Current Ratio | Short-term liquidity | $\frac{Current\ Assets}{Current\ Liabilities}$ | Weygandt Ch.18; Robinson; Brigham Ch.3 | No major formula conflict | Exact conceptual duplicate | Analyst / Creditor | Point-in-time balance sheet | MEMORIZE | Interpret composition/quality, not just magnitude. |
| 1.6 | Quick Ratio | Stricter liquidity | $\frac{Cash+Marketable\ Securities+Receivables}{Current\ Liabilities}$ | Weygandt / Robinson | Short-term investments vs marketable securities wording | Same concept, different terminology | Analyst / Creditor | Definitions per source/question | MEMORIZE | Preserve source wording; do not include inventory. |
| 1.6 | Cash Ratio | Most conservative liquidity | $\frac{Cash+Marketable\ Securities}{Current\ Liabilities}$ | Robinson | Not always emphasized by other sources | Source emphasis difference | Analyst / Creditor | Point-in-time | MEMORIZE | Reference if explicitly in source/question. |
| 1.6 | Average Balance | Flow-to-stock denominator convention | $Average\ Balance=\frac{Beginning+Ending}{2}$ | Weygandt Ch.18 | Some sources/data providers use ending balance | Same quantity, different convention | Analyst | Beginning and ending balances available | UNDERSTAND / RECONSTRUCT | Question/source convention overrides silent standardization. |
| 1.6 | AR Turnover | Collection efficiency | $\frac{Net\ Credit\ Sales}{Average\ Net\ AR}$ | Weygandt Ch.18 | Sales definition can vary if credit sales unavailable | Convention-sensitive | Analyst | Use source/problem numerator | MEMORIZE | Do not mix total sales unless source/problem does. |
| 1.6 | Average Collection Period | Days to collect | $\frac{365}{AR\ Turnover}$ | Weygandt / Brigham | DSO variants may use receivables / daily sales | Algebraic / convention variant | Analyst | Day-count/source convention | UNDERSTAND / RECONSTRUCT | Recognize equivalent intent, map convention. |
| 1.6 | Inventory Turnover | Inventory efficiency | $\frac{COGS}{Average\ Inventory}$ | Weygandt | Some texts may use sales for other turnover concepts | Genuinely distinct numerator choices by metric | Analyst | Use COGS for canonical inventory turnover in source set | MEMORIZE | Do not substitute sales. |
| 1.6 | ROA | Return on assets | $\frac{Net\ Income}{Average\ Total\ Assets}$ | Weygandt / Robinson | Brigham may use different profitability conventions in some contexts | Convention-sensitive | Analyst / Investor | Average vs ending assets depends source | MEMORIZE | Formula label should preserve denominator convention. |
| 1.6 | ROE | Return on equity | $\frac{Net\ Income}{Average\ Common\ Equity}$ | Weygandt / Robinson / Brigham | Equity basis may vary by source/data provider | Convention-sensitive | Analyst / Shareholder | Common vs total equity must be explicit | MEMORIZE | Never hide denominator definition. |
| 1.6 | Debt Ratio / Debt-to-Assets | Leverage measure | Source-qualified only | Brigham / Robinson / vendors | Debt may mean interest-bearing debt or broader liabilities | Same label, different convention | Analyst / Creditor | Exact source/problem definition required | REFERENCE ONLY | Do not freeze one universal formula here. |
| 2.1 | Equity Value | Residual ownership | $Equity\ Value=Asset\ Value-Debt\ and\ Senior\ Claims$ | Berk & DeMarzo Ch.14 | Accounting equity uses book measurement | Same economic idea, different measurement basis | Investor / Issuer | Market-value context | UNDERSTAND / RECONSTRUCT | Do not mix book and market values. |
| 2.1 / 5.4 | Total Shareholder Return | Dividend + capital gain | $R=\frac{D_1+P_1-P_0}{P_0}$ | Berk & DeMarzo Ch.10; Brigham Ch.7 | Can be decomposed into dividend yield + capital gain yield | Formula equivalence | Investor | Holding-period return | MEMORIZE | Core return identity. |
| 2.3 | Net Working Capital | Short-term operating funding measure | $NWC=Current\ Assets-Current\ Liabilities$ | Berk & DeMarzo Ch.27 | Project context may use operating NWC only | Same label, context-sensitive definition | Company / Analyst | State whether total or operating NWC | MEMORIZE | Carry qualifier into project FCF. |
| 2.3 | Trade Credit Periodic Cost | Cost of forgoing discount | $r_p=\frac{d}{1-d}$ | Berk & DeMarzo Ch.26 | Discount terms drive period length separately | Core formula | Borrower | Forgone discount d | UNDERSTAND / RECONSTRUCT | Reconstruct from extra amount paid / funds retained. |
| 2.3 | Trade Credit EAR | Annualized cost | $EAR=(1+\frac{d}{1-d})^{365/N}-1$ | Berk & DeMarzo Ch.26 | Day-count may vary by convention | Same quantity, different convention | Borrower | N = extra credit days; day-count stated | UNDERSTAND / RECONSTRUCT | Do not memorize numeric examples. |
| 2.3 | Discount Loan Effective Cost | True cost based on usable proceeds | $Usable\ Proceeds=F-I$ | Berk & DeMarzo Ch.27 | Effective rate depends repayment amount and term | Definition → derived effective rate | Borrower | Interest deducted upfront | UNDERSTAND / RECONSTRUCT | Use cash actually received as denominator. |
| 2.4 | Call Payoff | Right to buy | $C_T=\max(S_T-K,0)$ | Berk & DeMarzo Ch.20 | Short call = negative of long-call payoff | Exact opposite by position | Investor / Issuer | Expiration payoff, premium excluded | MEMORIZE | Payoff ≠ profit. |
| 2.4 | Put Payoff | Right to sell | $P_T=\max(K-S_T,0)$ | Berk & DeMarzo Ch.20 | Short put = negative of long-put payoff | Exact opposite by position | Investor / Issuer | Expiration payoff, premium excluded | MEMORIZE | Payoff ≠ profit. |
| 2.4 | Option Profit | Payoff net of premium | $\Pi_{LC}=\max(S_T-K,0)-c_0$ | Berk & DeMarzo Ch.20 | Analogous put/short-position forms | General vs position-specific forms | Investor | Premium timing ignored beyond initial cost unless question states otherwise | UNDERSTAND / RECONSTRUCT | Reconstruct from payoff ± premium. |
| 2.4 | Put–Call Parity | Law-of-One-Price relationship | $C=P+S-PV(K)-PV(Div)$ | Berk & DeMarzo Ch.20 | Equivalent rearrangements exist | Formula equivalence | Investor | European options; source dividend treatment | REFERENCE ONLY | Keep one source form; derive rearrangements. |
| 2.5 | Pre-Money Valuation | Old shares × price | $V_{pre}=N_{old}P$ | Berk & DeMarzo Ch.23 | Post-money = pre-money + new capital | Definition chain | Issuer / Investor | Single financing round | UNDERSTAND / RECONSTRUCT | Reconstruct from ownership mechanics. |
| 2.5 | Post-Money Valuation | Value after new cash | $V_{post}=V_{pre}+New\ Capital$ | Berk & DeMarzo Ch.23 | Also $(N_{old}+N_{new})P$ | Formula equivalence | Issuer / Investor | Same share price in round framing | UNDERSTAND / RECONSTRUCT | Map ownership to post-money. |
| 2.5 | New Investor Ownership | Ownership fraction after round | $\frac{Amount\ Invested}{V_{post}}$ | Berk & DeMarzo Ch.23 | Equivalent share-count fraction | Formula equivalence | Issuer / Investor | Same round valuation basis | UNDERSTAND / RECONSTRUCT | Do not treat dilution as automatic wealth loss. |
| 2.5 | Underwriting Spread | Direct flotation cost | $s=\frac{P_{offer}-P_{issuer}}{P_{offer}}$ | Berk & DeMarzo Ch.23 | Can also express per-share spread | General vs per-share form | Issuer / Underwriter | Offer price and issuer proceeds defined | MEMORIZE | Distinct from underpricing. |
| 2.5 | Net Proceeds | Cash retained by issuer | $Net\ Proceeds=N P_{offer}(1-s)-F$ | Berk & DeMarzo Ch.23 | May omit F if no extra costs | General vs simplified form | Issuer | Primary shares only | UNDERSTAND / RECONSTRUCT | Secondary shares do not raise company cash. |
| 2.5 | IPO Initial Return | Underpricing measure | $R_{initial}=\frac{P_1-P_0}{P_0}$ | Berk & DeMarzo Ch.23 | Money left on table = $N(P_1-P_0)$ | Different quantity, same inputs | Investor / Issuer | Initial market price compared with offer price | MEMORIZE | Do not confuse direct spread with underpricing. |
| 3.2 | WACC (Debt + Equity) | Weighted required return on capital | $WACC=w_Er_E+w_Dr_D(1-T)$ | Brigham Ch.9 | Preferred-stock extension adds $w_Pr_P$ | General vs extended form | Issuer / Investor | Target/market weights; component costs current/relevant | MEMORIZE | Final formula status reconfirmed in Stage 9. |
| 3.2–3.3 | After-Tax Cost of Debt | Debt cost after tax shield | $r_D^{AT}=r_D(1-T)$ | Brigham Ch.9 | Tax shield representation equivalent economically | Definition vs consequence | Issuer | Interest deductibility source context | MEMORIZE | Tax context must be explicit. |
| 3.3 | Project FCF | Cash available from project after operating effects/reinvestment | Source-structured rather than one universal formula | Brigham Ch.10; Berk & DeMarzo Ch.8 | NOPAT + Depreciation − CapEx − ΔNWC is a common source-compatible form | Same quantity, presentation variants | Company | Incremental project basis | UNDERSTAND / RECONSTRUCT | Stage 9 should choose canonical displayed form only if fully source-supported. |
| 3.3 | Depreciation Tax Shield | Tax saving from depreciation | $DTS=T\times Depreciation$ | Brigham Ch.10 | Embedded inside after-tax operating cash flow in some derivations | Formula equivalence by decomposition | Company | Tax-deductible depreciation | UNDERSTAND / RECONSTRUCT | Use as reconstruction aid. |
| 3.3 | Change in NWC | Project cash tied/released | $\Delta NWC_t=NWC_t-NWC_{t-1}$ | Brigham / Berk & DeMarzo | Increase reduces FCF; release raises FCF | Definition → cash-flow consequence | Company | Operating NWC convention | UNDERSTAND / RECONSTRUCT | Sign discipline is more important than memorizing prose. |
| 3.4 | NPV | Present-value value creation | $NPV=\sum_{t=0}^{n}\frac{CF_t}{(1+r)^t}$ | Brigham Ch.10; Berk & DeMarzo Ch.3/7; Weygandt Ch.26 | Equivalent $PV(Benefits)-PV(Costs)$ | Formula equivalence | Company / Investor | Risk-appropriate discount rate | MEMORIZE | Canonical core quantity. |
| 3.4 | IRR | Rate making NPV zero | $0=\sum_{t=0}^{n}\frac{CF_t}{(1+IRR)^t}$ | Brigham Ch.10; Berk & DeMarzo Ch.7 | Decision rule IRR > required return for normal standalone project | Definition + decision consequence | Company / Investor | Normal cash-flow caveat | MEMORIZE | Nonnormal cash flows can break uniqueness/usefulness. |
| 3.4 | MIRR | Modified project return | Source-specific MIRR construction | Brigham Ch.10 | Several equivalent computational presentations possible | Same quantity, presentation variants | Company / Investor | Brigham assumptions | UNDERSTAND / RECONSTRUCT | Keep exact form for Stage 9 after source check. |
| 3.4 | Payback Period | Undiscounted recovery time | Cumulative undiscounted CF until initial outlay recovered | Brigham / Weygandt | Discounted payback uses discounted CF | Genuinely distinct metric | Company | Recovery-time metric | MEMORIZE | Does not directly measure value creation. |
| 3.4 | Discounted Payback | Discounted recovery time | Cumulative discounted CF until recovery | Brigham | Regular payback ignores discounting | Genuinely distinct | Company | Chosen discount rate | MEMORIZE | Still ignores post-payback CF. |
| 3.4 | Accounting Rate of Return | Accounting-income-based return | Source-specific accounting-return formula | Weygandt Ch.26 | Not IRR; numerator/denominator accounting quantities | Genuinely distinct | Company | Accounting basis | MEMORIZE | Stage 9 to retain exact source formula. |
| 3.4 | Profitability Index — Brigham | PV inflows relative to initial investment | $PI_B=\frac{PV(Future\ Inflows)}{Initial\ Investment}$ | Brigham Ch.10 | Threshold > 1 in standard setup | Source-specific convention | Company | Simple initial investment setting | MEMORIZE | Keep source label. |
| 3.4 | Profitability Index — Berk | NPV per scarce resource | $PI_{BD}=\frac{NPV}{Resource\ Consumed}$ | Berk & DeMarzo Ch.7 | Not algebraically equivalent to Brigham PI | Same label, different convention | Company | Capital/resource constraint context | MEMORIZE | Keep source label; never silently merge. |
| 4.1 / 4.2 | Value of Operations | PV of future FCF | $V_{operations}=\sum_{t=1}^{\infty}\frac{FCF_t}{(1+WACC)^t}$ | Brigham Ch.13 | Finite-horizon versions possible | General valuation form | Company / Investor | FCF/WACC matched in risk and definition | UNDERSTAND / RECONSTRUCT | Core value bridge, not a standalone memorization priority. |
| 4.2 | FCF from Operating Capital | Operating return minus reinvestment | $FCF=NOPAT-Investment\ in\ Operating\ Capital$ | Brigham Ch.13 | Can be decomposed in detailed project form | General vs decomposed form | Company / Investor | Operating-company valuation context | UNDERSTAND / RECONSTRUCT | Reconstruct meaning first. |
| 4.2 | EROIC | Expected return on invested capital | $EROIC=\frac{Expected\ NOPAT}{Operating\ Capital}$ | Brigham Ch.13 | Compare against WACC | Definition + comparison rule | Company / Investor | Expected operating return context | REFERENCE ONLY | Growth creates value only if return exceeds opportunity cost. |
| 5.2 | Long Forward Payoff | Obligation to buy at K | $S_T-K$ | Brigham Ch.23 | Short forward = $K-S_T$ | Exact opposite by position | Investor / Hedger | Maturity payoff; ignore transaction costs/default | MEMORIZE | Symmetric payoff, unlike option. |
| 5.2 | Forward vs Futures | Similar exposure, different mechanics | No single formula identity | Brigham Ch.23 | Futures marked-to-market; forwards customized OTC | Genuinely distinct | Investor / Hedger | Institutional mechanics matter | MEMORIZE | Do not collapse based on similar terminal economics. |
| 5.4 | Arithmetic Average Return | Mean periodic realized return | $\bar R=\frac{1}{T}\sum_{t=1}^{T}R_t$ | Berk & DeMarzo Ch.10 | CAGR is geometric, not same | Genuinely distinct | Investor / Analyst | Historical sample | MEMORIZE | Use for one-period expected estimate under stable-distribution assumption. |
| 5.4 | Compound Annual Return | Long-run wealth growth | $R_g=\left[\prod_{t=1}^{T}(1+R_t)\right]^{1/T}-1$ | Berk & DeMarzo Ch.10 | Equivalent $(FV/PV)^{1/T}-1$ | Formula equivalence | Investor / Analyst | Multi-period realized wealth | MEMORIZE | Do not use as arithmetic expected-return estimate. |
| 5.4 | Historical Variance | Sample return variance | $s^2=\frac{1}{T-1}\sum(R_t-\bar R)^2$ | Berk & DeMarzo Ch.10 | Population denominator variants exist outside sample context | Convention-sensitive | Analyst | Historical sample | REFERENCE ONLY | Keep sample denominator as source context. |
| 5.4 | Standard Error of Mean Return | Uncertainty of historical mean | $SE(\bar R)=\frac{SD(R)}{\sqrt{T}}$ | Berk & DeMarzo Ch.10 | Approx. 95% interval = mean ± 2SE | Definition + approximation | Analyst | Independent/stable-distribution style approximation in source | REFERENCE ONLY | Do not overstate precision. |
| 5.4 | Excess Return | Return above risk-free benchmark | $R_{excess}=R_i-R_f$ | Berk & DeMarzo Ch.10 | Market risk premium is expected/required, not realized historical excess necessarily | Ex post vs ex ante distinction | Investor / Analyst | Time basis must be explicit | MEMORIZE | Label historical/realized vs expected. |
| 5.4 | Beta | Market sensitivity | $\beta_i=\frac{Cov(R_i,R_M)}{Var(R_M)}$ | Berk & DeMarzo Ch.10 | Not correlation; not volatility | Concept vs measure | Investor / Issuer | CAPM framework | MEMORIZE | Core systematic-risk measure. |
| 5.4 | CAPM | Required expected return from systematic risk | $r_i=r_f+\beta_i(E[R_M]-r_f)$ | Berk & DeMarzo Ch.10 | Same form used as cost of equity in corporate-finance context | Same economic quantity, different perspective | Investor / Issuer | CAPM assumptions/model context | MEMORIZE | Investor required return ↔ issuer cost of equity. |
| 5.3–5.4 | Nominal–Real Return Relation | Purchasing-power adjustment | $1+r_n=(1+r_r)(1+\pi)$ | Brigham / topic source framework | Approximation $r_r\approx r_n-\pi$ | Exact vs approximation | Investor | Inflation rate over same horizon | MEMORIZE | Keep exact identity and label approximation. |
| 5.3 | Bond Price | PV of fixed cash flows | $P_0=\sum_{t=1}^{n}\frac{C}{(1+y)^t}+\frac{F}{(1+y)^n}$ | Brigham/Berk context | Price-yield inverse direction is consequence | Definition → consequence | Investor / Issuer | Fixed contractual CF; market yield y | UNDERSTAND / RECONSTRUCT | Direction more important than full formula for CF4. |
| 5.3 | Constant-Growth Stock Value | PV under constant dividend growth | $P_0=\frac{D_1}{r_s-g}$ | Brigham Ch.7 | Expected return form $r_s=\frac{D_1}{P_0}+g$ | Algebraic equivalence under same model | Investor / Issuer | Constant growth; $r_s>g$ | MEMORIZE | Model-specific, not universal equity valuation. |
| 5.4 | Expected Stock Return — Gordon | Dividend yield + growth | $r_s=\frac{D_1}{P_0}+g$ | Brigham Ch.7 | Historical capital-gain yield is not automatically g | Model relationship | Investor / Issuer | Constant-growth assumptions | MEMORIZE | Do not substitute historical growth mechanically. |
| 5.4 | Alpha | Return relative to CAPM benchmark | $\alpha_i=E[R_i]-[r_f+\beta_i(E[R_M]-r_f)]$ | Berk & DeMarzo Ch.13 | Positive alpha may reflect mispricing or model limitations | Model-relative quantity | Investor / Analyst | CAPM benchmark | REFERENCE ONLY | Not guaranteed arbitrage. |

## 3. Collision Classes Requiring Explicit Handling

### 3.1 Same Concept, Different Terminology

Safe to normalize conceptually:

- Statement of Financial Position ↔ Balance Sheet
- Net Income ↔ Net Profit / Net Earnings
- Shareholder ↔ Stockholder / Equity Holder
- Quick Ratio wording: short-term investments ↔ marketable securities, subject to source definition

These can use one preferred term plus aliases.

### 3.2 Same Quantity, Different Convention

Must remain source/problem qualified:

- Average balance vs ending balance in flow-to-stock ratios
- Debt vs total liabilities in leverage ratios
- Common equity vs total equity denominator
- Day-count convention in annualization
- Operating NWC vs total current assets minus current liabilities

These are **not conceptual errors**; they are definition/convention choices.

### 3.3 Same Label, Different Quantity

Must not be silently merged:

#### Profitability Index

Brigham convention:

$$
PI_B
=
\frac{PV(\text{future inflows})}{\text{initial investment}}
$$

Berk & DeMarzo scarce-resource convention:

$$
PI_{BD}
=
\frac{NPV}{\text{resource consumed}}
$$

Stage-8 decision:

> retain both with explicit source qualifier.

### 3.4 Exact vs Approximation

Nominal-real relationship:

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

Stage-8 decision:

> exact identity and approximation remain separate formula entries in Stage 9.

### 3.5 Same Economic Quantity, Different Perspective

```text
Investor required return
        ↕
Issuer cost of capital
```

Examples:

- cost of equity ↔ equity investor required return;
- debt yield/required return ↔ issuer debt cost, subject to market/fair-pricing assumptions;
- WACC ↔ weighted required return on capital providers from company perspective.

Stage-8 decision:

> preserve one economic bridge but keep perspective label in final formula sheet.

## 4. Formula Families Ready for Stage 9

The following families are sufficiently reconciled to receive a default formula in Stage 9:

1. Accounting equation
2. Net income
3. Retained earnings roll-forward
4. Average balance
5. Current ratio
6. Quick ratio
7. Cash ratio
8. AR turnover / collection period
9. Inventory turnover
10. ROA / ROE, with denominator convention labels
11. Marginal/average tax rate
12. After-tax amount / taxable-equivalent yield
13. Tax shield / after-tax debt cost
14. Net working capital
15. Trade-credit cost
16. Option payoff/profit
17. Pre-/post-money valuation
18. Underwriting spread / net proceeds / IPO initial return
19. WACC
20. Depreciation tax shield
21. ΔNWC
22. NPV
23. IRR
24. Payback / discounted payback
25. Source-qualified Profitability Index
26. Value of operations / FCF relation
27. Forward payoff
28. Total return
29. Arithmetic vs compound return
30. Excess return
31. Beta
32. CAPM
33. Nominal-real relation
34. Bond price
35. Constant-growth stock value / expected return
36. Alpha

## 5. Formula Families NOT Yet Safe to Freeze

These require one more careful Stage-9 source pass before a default expression is selected:

### 5.1 Debt / Leverage Ratios

Reason:

> official/reference conventions may differ on whether “debt” means interest-bearing debt or broader liabilities.

### 5.2 ROA / ROE Denominators

Reason:

> average vs ending balance and common-vs-total equity conventions can differ.

### 5.3 Project FCF

Reason:

> the economic quantity is clear, but exact displayed formula can vary by decomposition and whether operating NWC, depreciation, taxes, and CapEx are written separately.

### 5.4 MIRR

Reason:

> same quantity can be represented through different computational sequences; Stage 9 should pick one operational form only after a direct source check.

### 5.5 Accounting Rate of Return

Reason:

> exact source numerator/denominator wording must be preserved from Weygandt rather than generalized from memory.

### 5.6 Ratio Day Counts / Annualization

Reason:

> 365 vs source-specific period convention should remain explicit.

## 6. Formula Status Logic for Stage 9

Stage 9 should assign formula-level status according to these rules.

### MEMORIZE

Use when:

- quantity is central;
- formula is compact;
- convention is stable;
- reconstruction cost in exam is unnecessary.

Likely candidates:

- accounting equation;
- retained earnings;
- current/quick ratio;
- WACC;
- NPV;
- IRR definition;
- call/put payoff;
- total return;
- beta;
- CAPM;
- nominal-real exact relation.

### RECONSTRUCT

Use when:

- formula follows directly from a higher-level principle;
- multiple equivalent forms exist;
- memorizing every form creates confusion.

Likely candidates:

- taxable-equivalent yield;
- trade-credit EAR;
- project FCF;
- depreciation tax shield;
- net proceeds;
- pre/post-money ownership;
- forward short payoff;
- stock expected return rearrangement.

### REFERENCE ONLY

Use when:

- source convention is specialized;
- detail is infrequently required;
- formula is easy to look up but costly to memorize.

Likely candidates:

- cash ratio if not emphasized in exam;
- standard error / confidence approximation;
- alpha;
- detailed put-call parity variants;
- EROIC;
- advanced appraisal extensions.

### AVOID AS DEFAULT

Use when:

- shortcut is valid only under narrow assumptions;
- formula invites a common wrong inference.

Likely examples:

- historical return sample numbers;
- deterministic macro-direction tables;
- any leverage ratio formula without explicit source denominator;
- using company WACC for all projects.

## 7. Cross-Topic Quantity Map

| Quantity | Accounting View | Corporate-Finance View | Investor / Market View |
|---|---|---|---|
| Profit / NI | Accrual performance | Input but not project cash flow | Signal, not return itself |
| Cash Flow | Statement cash movement | Incremental/project FCF | Basis for valuation |
| Equity | Book residual interest | Financing source | Market ownership claim |
| Debt | Liability/financing account | Capital-structure component | Fixed-income claim |
| Tax | Expense/payable context | Tax shield / after-tax cash flow | After-tax return |
| Required Return | — | Cost of capital | Compensation demanded |
| Market Value | External value | Capital weights / valuation | Security price |
| NPV | — | Project value creation | Present value of incremental investment opportunity |
| Beta | — | Cost-of-equity input | Systematic market sensitivity |

## 8. Formula Interpretation Protocol

Every formula in Stage 9 should be accompanied by five fields:

```text
Quantity
→ Formula
→ Inputs
→ Assumptions / Convention
→ Financial Meaning
```

For high-risk formulas add:

```text
Do Not Confuse With
```

Example:

```text
WACC
→ w_D r_D(1-T) + w_E r_E
→ market/target weights + current component costs
→ project risk comparable to firm if used as project rate
→ weighted required return on financing claims
→ NOT universal discount rate for every project
```

## 9. Stage-8 Validation Checklist

- [x] Stages 1–7 used as baseline.
- [x] Concept and formula variants placed in one matrix.
- [x] Source-specific conventions retained.
- [x] Same-label/different-quantity conflicts preserved.
- [x] Exact vs approximation separated.
- [x] Investor-vs-issuer perspective mapping preserved.
- [x] Historical data separated from forward-looking parameters.
- [x] Formula families ready for Stage 9 identified.
- [x] Formula families requiring direct source check identified.
- [x] No formula layer freeze performed.

## 10. Exit Decision

**Stage 8 is complete as the CF4 Concept & Formula Reconciliation Matrix.**

Next stage:

> **Stage 9 — Canonical Formula Layer**

Stage 9 should produce:

```text
One canonical quantity
→ one default formula
→ equivalent forms
→ assumptions / convention
→ financial meaning
→ formula status
→ reconstruction path
→ exam trap
```

and should perform a **manual MathJax/LaTeX QA** before finalizing.
