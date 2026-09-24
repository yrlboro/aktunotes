---
title: "CF4 Canonical Master Cheat Sheet"
exam: "CF4"
status: "FROZEN"
freeze_stage: 20
---

# CF4 Canonical Master Cheat Sheet

## 1. Core Distinctions

```text
Revenue ≠ Cash Receipt
Expense ≠ Cash Payment
Net Income ≠ OCF ≠ FCF
Retained Earnings ≠ Cash
Debt ≠ Liabilities
Secured ≠ Senior
Coupon ≠ Yield
Book ≠ Market ≠ Intrinsic Value
Required ≠ Expected ≠ Realized Return
Volatility ≠ Beta
NPV ≠ IRR
ARR ≠ IRR
Payoff ≠ Profit
Forward ≠ Option
Growth ≠ Value Creation
```

## 2. Accounting

$$
Assets=Liabilities+Equity
$$

$$
Net\ Income=Revenue-Expenses
$$

$$
RE_{end}=RE_{begin}+NI-Dividends
$$

Accrual anchor:

```text
earned/incurred?
vs
paid/received?
```

## 3. Liquidity / Turnover / Profitability

$$
Current\ Ratio=\frac{Current\ Assets}{Current\ Liabilities}
$$

$$
Quick\ Ratio=\frac{Cash+Short\text{-}Term\ Investments+Net\ Receivables}{Current\ Liabilities}
$$

$$
AR\ Turnover=\frac{Net\ Credit\ Sales}{Average\ Net\ AR}
$$

$$
Inventory\ Turnover=\frac{COGS}{Average\ Inventory}
$$

$$
ROA=\frac{Net\ Income}{Average\ Total\ Assets}
$$

$$
ROE=\frac{Net\ Income-Preferred\ Dividends}{Average\ Common\ Equity}
$$

DuPont:

$$
ROE=Profit\ Margin\times Asset\ Turnover\times Equity\ Multiplier
$$

## 4. Market / Per-Share Ratios

$$
EPS=\frac{Net\ Income-Preferred\ Dividends}{Weighted\text{-}Average\ Common\ Shares}
$$

$$
P/E=\frac{Market\ Price\ per\ Share}{EPS}
$$

$$
Market/Book=\frac{Market\ Price\ per\ Share}{Book\ Value\ per\ Share}
$$

$$
TIE=\frac{EBIT}{Interest}
$$

## 5. Financing / WACC / FCF

$$
r_D^{AT}=r_D(1-T)
$$

$$
WACC=w_Dr_D(1-T)+w_Pr_P+w_Er_E
$$

$$
NOPAT=EBIT(1-T)
$$

$$
FCF=NOPAT-Net\ Investment\ in\ Operating\ Capital
$$

$$
\Delta NWC_t=NWC_t-NWC_{t-1}
$$

Rule:

```text
ΔNWC > 0 → FCF ↓
CapEx ↑ → FCF ↓
```

## 6. Capital Budgeting

$$
NPV=\sum_{t=0}^{n}\frac{CF_t}{(1+r)^t}
$$

$$
0=\sum_{t=0}^{n}\frac{CF_t}{(1+IRR)^t}
$$

$$
MIRR=\left(\frac{TV(Inflows)}{PV(Costs)}\right)^{1/n}-1
$$

$$
ARR=\frac{Expected\ Annual\ Net\ Income}{Average\ Investment}
$$

Brigham PI:

$$
PI_B=\frac{PV(Future\ Inflows)}{Initial\ Investment}
$$

Berk & DeMarzo PI:

$$
PI_{BD}=\frac{NPV}{Resource\ Consumed}
$$

## 7. Securities / Derivatives

$$
Call\ Payoff=\max(S_T-K,0)
$$

$$
Put\ Payoff=\max(K-S_T,0)
$$

$$
Option\ Profit=Payoff-Premium
$$

$$
Forward\ Long\ Payoff=S_T-K
$$

Swap intuition:

```text
original floating debt
+ receive floating / pay fixed swap
= fixed-like net exposure
```

## 8. Returns / Risk / Valuation

$$
R_t=\frac{Div_t+P_t-P_{t-1}}{P_{t-1}}
$$

$$
\bar R=\frac{1}{T}\sum R_t
$$

$$
R_g=\left[\prod(1+R_t)\right]^{1/T}-1
$$

$$
\beta_i=\frac{Cov(R_i,R_M)}{Var(R_M)}
$$

$$
r_i=r_f+\beta_i(E[R_M]-r_f)
$$

$$
1+r_n=(1+r_r)(1+\pi)
$$

$$
P_0=\sum_{t=1}^{n}\frac{C}{(1+y)^t}+\frac{F}{(1+y)^n}
$$

$$
P_0=\frac{D_1}{r_s-g}
$$

## 9. Value Creation

```text
NPV > 0 → value created
EROIC > WACC → growth can create value
EROIC = WACC → marginal value neutral
EROIC < WACC → growth can destroy value
```

## 10. Critical Exam Rules

1. Read exact debt definition.
2. Read exact PI definition.
3. Check average vs ending denominator.
4. Company WACC is not universal project rate.
5. NPV is the value-ranking benchmark when project rankings conflict.
6. Payoff is not profit.
7. Historical return is not guaranteed expected return.
8. Good news does not guarantee positive market return.
9. Higher ratio is not automatically better.
10. Interpret from the relevant stakeholder perspective.
