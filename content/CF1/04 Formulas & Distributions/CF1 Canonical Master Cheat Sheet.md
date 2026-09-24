---
title: "CF1 Canonical Master Cheat Sheet v1"
exam: "CF1 — Matematika Keuangan"
type: "Canonical Formula & Decision Sheet"
status: "v1"
basis: "27 CF1 syllabus notes + reconciled legacy FM formula sheets"
---

# CF1 Canonical Master Cheat Sheet v1

> [!IMPORTANT] Cara pakai
> Ini **bukan daftar semua rumus yang pernah muncul**. Ini adalah satu interface canonical untuk exam prep.
>
> Urutan default:
>
> **Narasi → Cash flow → Timeline → Rate basis → Focal date → Equation/model → Formula → Solve → Sanity check**
>
> Label:
> - **[M] MEMORIZE** = formula/core relation yang layak diingat langsung.
> - **[R] RECONSTRUCT** = lebih baik diturunkan dari canonical formula bila lupa.
> - **[A] ASSUMPTION** = jangan pakai tanpa mengecek syarat.
> - **[TRAP]** = kesalahan exam yang sering terjadi.

---

# 0. Universal CF1 Decision Protocol

Sebelum memilih rumus, jawab:

1. **Unknown apa?** Amount / rate / term / balance / yield / risk?
2. **Cash flow apa saja dan kapan terjadi?**
3. **Focal date di mana?**
4. **Rate basis apa?** Annual effective, nominal convertible, force, periodic yield?
5. **Apakah payment frequency = rate period?**
6. **Apakah stream level, arithmetic, geometric, atau arbitrary?**
7. **Apakah satu rate berlaku untuk semua maturity?**
8. **Apakah formula exact atau approximation?**
9. **Apakah sign dan timing masuk akal?**

> [!TIP] Default fallback
> Jika lupa shortcut tetapi cash flows jelas, kembali ke **equation of value**.

---

# 1. Canonical Notation — Minimum Set

## Rates / TVM

| Symbol | Meaning |
|---|---|
| $i$ | effective interest rate per relevant period |
| $d$ | effective discount rate per same period |
| $v$ | discount factor, $v=(1+i)^{-1}$ |
| $i^{(m)}$ | nominal interest rate convertible $m$-thly |
| $d^{(m)}$ | nominal discount rate convertible $m$-thly |
| $\delta$ | force of interest |
| $a(t)$ | accumulation function |
| $C_t$ | signed cash flow at time $t$ |
| $\tau$ | focal / valuation date |
| $i_{\text{real}}$ | real effective rate |
| $\pi$ | inflation rate |

## Annuities / Loans

| Symbol | Meaning |
|---|---|
| $a_{\overline{n}\rvert}$ | annuity-immediate PV factor |
| $\ddot a_{\overline{n}\rvert}$ | annuity-due PV factor |
| $s_{\overline{n}\rvert}$ | annuity-immediate AV factor |
| $\ddot s_{\overline{n}\rvert}$ | annuity-due AV factor |
| $R$ | level payment |
| $L$ | original loan |
| $B_t$ | outstanding balance after payment $t$ |
| $I_t$ | interest portion of payment $t$ |
| $P_t$ | principal portion of loan payment $t$ |
| $i_{\text{SF}}$ | sinking-fund earning rate |
| $D$ | periodic sinking-fund deposit |

## Bonds

| Symbol | Meaning |
|---|---|
| $P$ | bond price |
| $F$ | face / par amount |
| $C$ | redemption value |
| $r$ | coupon rate per coupon period |
| $Fr$ | coupon amount per coupon period |
| $j$ | yield per coupon period |
| $g=Fr/C$ | modified coupon rate |
| $B_t$ | bond book value after coupon $t$ |

## Term Structure / Risk

| Symbol | Meaning |
|---|---|
| $s_t$ | $t$-period spot rate |
| $D(0,t)$ | discount factor to time 0 for maturity $t$ |
| $f_{t_1,t_2}$ | implied forward interest rate |
| $D_{\text{Mac}},D_{\text{Mod}}$ | Macaulay / modified duration |
| $C_{\text{Mod}}$ | modified convexity |

## Derivatives / Portfolio

| Symbol | Meaning |
|---|---|
| $S_0,S_T$ | underlying price now / at expiration |
| $K$ | option strike / delivery price when context states |
| $F_{0,T}$ | forward price |
| $R_i,R_p$ | asset / portfolio return |
| $w_i$ | portfolio weight |
| $\sigma_i,\sigma_p$ | standard deviation |
| $\rho_{ij}$ | correlation |
| $\beta_i$ | beta |
| $R_f,R_M$ | risk-free / market return |

> [!DANGER] Collision utama
> - $j$: jangan gunakan sekaligus untuk bond yield, sinking-fund rate, dan real rate.
> - $r$: di master ini digunakan untuk **coupon rate**; inflation ditulis $\pi$.
> - $P_t$: digunakan untuk **loan principal portion**, bukan bond principal adjustment.
> - $F$: future value di TVM vs face value di bond — baca konteks.

---

# 2. Rate & Discount Engine

## 2.1 Effective Interest / Discount

### [M] Anchor

$$
\boxed{v=\frac{1}{1+i}=1-d}
$$

Sehingga:

$$
d=\frac{i}{1+i}=iv,
\qquad
i=\frac{d}{1-d}.
$$

### [M] Accumulation / PV

$$
F=P\,a(t),
\qquad
P=\frac{F}{a(t)}.
$$

Constant compound interest:

$$
\boxed{a(t)=(1+i)^t}
$$

Simple interest:

$$
a(t)=1+it.
$$

> [!TRAP]
> Jangan menggunakan $a(t_2-t_1)$ untuk arbitrary accumulation function kecuali model time-homogeneous. Bentuk aman:
>
> $$
> \frac{a(t_2)}{a(t_1)}.
> $$

---

## 2.2 Nominal Rates & Force

### [M] One equivalence chain

$$
\boxed{
1+i
=
\left(1+\frac{i^{(m)}}m\right)^m
=
e^\delta
=
\left(1-\frac{d^{(p)}}p\right)^{-p}
=
\frac{1}{1-d}
}
$$

### [R] Extract individual conversion

$$
i^{(m)}
=
m\left[(1+i)^{1/m}-1\right]
$$

$$
d^{(m)}
=
m\left[1-(1-d)^{1/m}\right]
$$

$$
\delta=\ln(1+i).
$$

Variable force:

$$
\delta_t=\frac{a'(t)}{a(t)},
\qquad
a(t)=
\exp\left(\int_0^t\delta_r\,dr\right).
$$

> [!TIP]
> Jangan hafalkan setiap pairwise conversion. Samakan **accumulation factor pada horizon yang sama**.

---

# 3. Equation-of-Value Engine

## 3.1 General Focal-Date Formula

### [M] Foundation

$$
\boxed{
V_\tau
=
\sum_k C_{t_k}\frac{a(\tau)}{a(t_k)}
}
$$

Under constant compound rate:

$$
\boxed{
V_\tau
=
\sum_k C_{t_k}(1+i)^{\tau-t_k}
}
$$

Untuk transaksi ekuivalen:

$$
\boxed{
\sum_k C_{t_k}(1+i)^{\tau-t_k}=0
}
$$

> [!IMPORTANT]
> Annuities, loans, bonds, IRR, YTM, dan banyak formula CF1 adalah **equation of value yang sudah disederhanakan**.

---

## 3.2 Inflation / Real Rate

Exact Fisher relation:

$$
\boxed{
1+i_N=(1+i_{\text{real}})(1+\pi)
}
$$

Sehingga:

$$
i_{\text{real}}
=
\frac{1+i_N}{1+\pi}-1.
$$

Approximation:

$$
i_{\text{real}}\approx i_N-\pi.
$$

> [!TRAP]
> Approximation bukan equality exact.

---

# 4. NPV, IRR, DWRR, TWRR

## 4.1 NPV / IRR

NPV at discount rate $r$:

$$
\boxed{
NPV(r)=\sum_t C_t(1+r)^{-t}
}
$$

IRR:

$$
\boxed{NPV(i^*)=0}
$$

> [!TRAP]
> IRR adalah **root problem**. Multiple sign changes dapat menghasilkan multiple roots / ambiguity.

---

## 4.2 DWRR

For measurement period $[0,1]$, beginning balance $A$, ending balance $B$, external contribution $C_t$ at time $t$:

### Exact equation

$$
\boxed{
B
=
A(1+j_{\text{dw}})
+
\sum_t C_t(1+j_{\text{dw}})^{1-t}
}
$$

Investment gain:

$$
I=B-A-\sum_t C_t.
$$

Approximation:

$$
\boxed{
j_{\text{dw}}
\approx
\frac{I}
{A+\sum_t C_t(1-t)}
}
$$

### [A]
Approximation uses time-weighted capital exposure, not exact compounding of each external flow.

---

## 4.3 TWRR

Split at every external cash flow.

For subperiod returns $j_1,\ldots,j_m$:

$$
\boxed{
1+j_{\text{tw}}
=
\prod_{k=1}^m(1+j_k)
}
$$

> [!TIP]
> DWRR = investor experience / cash-flow weighted.  
> TWRR = linked fund performance, less dominated by investor flow timing.

---

# 5. Annuity Timing Engine

## 5.1 Annuity-Immediate

Payments $1$ at $t=1,\ldots,n$.

### [M]

$$
\boxed{
a_{\overline{n}\rvert}
=
v+v^2+\cdots+v^n
=
\frac{1-v^n}{i}
}
$$

Accumulated value at $t=n$:

$$
\boxed{
s_{\overline{n}\rvert}
=
1+(1+i)+\cdots+(1+i)^{n-1}
=
\frac{(1+i)^n-1}{i}
}
$$

Identity:

$$
s_{\overline{n}\rvert}
=
(1+i)^n a_{\overline{n}\rvert}.
$$

---

## 5.2 Annuity-Due

Payments at $t=0,\ldots,n-1$.

### [M] Timing shift

$$
\boxed{
\ddot a_{\overline{n}\rvert}
=
(1+i)a_{\overline{n}\rvert}
}
$$

$$
\boxed{
\ddot s_{\overline{n}\rvert}
=
(1+i)s_{\overline{n}\rvert}
}
$$

### [R]

$$
\ddot a_{\overline{n}\rvert}
=
\frac{1-v^n}{d}.
$$

> [!TRAP]
> Immediate vs due is mostly **timing**, not a separate mathematical engine.

---

## 5.3 Deferred Annuity

$m$-period deferred annuity-immediate:

### [M]

$$
\boxed{
{}_{m\vert}a_{\overline{n}\rvert}
=
v^m a_{\overline{n}\rvert}
}
$$

### [R]

$$
{}_{m\vert}a_{\overline{n}\rvert}
=
a_{\overline{m+n}\rvert}
-
a_{\overline{m}\rvert}.
$$

> [!TRAP]
> $m$-period deferred annuity-immediate → first payment at $t=m+1$.

---

## 5.4 Perpetuity

### [M]

$$
\boxed{
a_{\overline{\infty}\rvert}=\frac1i
}
$$

$$
\boxed{
\ddot a_{\overline{\infty}\rvert}=\frac1d
}
$$

Continuous:

$$
\boxed{
\bar a_{\overline{\infty}\rvert}=\frac{1}\delta
}
$$

---

# 6. Varying Payments / Continuous Cash Flows

## 6.1 Arithmetic Progression

Increasing payments $1,2,\ldots,n$:

$$
(Ia)_{\overline{n}\rvert}
=
\sum_{k=1}^n kv^k
$$

### [M/Core Derived]

$$
\boxed{
(Ia)_{\overline{n}\rvert}
=
\frac{\ddot a_{\overline{n}\rvert}-nv^n}{i}
}
$$

Decreasing $n,n-1,\ldots,1$:

$$
\boxed{
(Da)_{\overline{n}\rvert}
=
\frac{n-a_{\overline{n}\rvert}}{i}
}
$$

For payments

$$
P,\ P+Q,\ldots,P+(n-1)Q,
$$

prefer decomposition:

$$
PV
=
(P-Q)a_{\overline{n}\rvert}
+
Q(Ia)_{\overline{n}\rvert}
$$

or write the cash-flow sum directly.

> [!TIP]
> **Pattern first, formula second.**

---

## 6.2 Geometric Progression

Payments

$$
1,(1+k),(1+k)^2,\ldots,(1+k)^{n-1}.
$$

### [R/Core Derived]

$$
\boxed{
PV
=
\frac{
1-\left(\frac{1+k}{1+i}\right)^n
}{i-k}
},
\qquad i\ne k.
$$

If $i=k$, evaluate the series directly rather than dividing by zero.

---

## 6.3 Continuous Annuity

Constant force $\delta$:

$$
\boxed{
\bar a_{\overline{n}\rvert}
=
\int_0^n e^{-\delta t}\,dt
=
\frac{1-v^n}{\delta}
}
$$

General payment rate $f(t)$:

$$
\boxed{
PV
=
\int_0^n
f(t)
\exp\left(
-\int_0^t\delta_r\,dr
\right)dt
}
$$

---

## 6.4 Varying Discrete Rates

For period-specific rates $i_1,\ldots,i_n$:

$$
\boxed{
a_n=\prod_{k=1}^n(1+i_k)
}
$$

PV of cash flow at $t$:

$$
PV(C_t)
=
\frac{C_t}
{\prod_{k=1}^{t}(1+i_k)}.
$$

> [!TRAP]
> Arithmetic-average rate generally does **not** preserve accumulation.

---

# 7. Loan Balance Engine

## 7.1 Level-Payment Loan

Initial equation:

$$
\boxed{
L=R\,a_{\overline{n}\rvert i}
}
$$

---

## 7.2 Outstanding Balance after Payment $t$

### Prospective [M]

$$
\boxed{
B_t
=
R\,a_{\overline{n-t}\rvert i}
}
$$

Interpretation:

$$
B_t=PV_t(\text{remaining payments}).
$$

### Retrospective [R]

$$
\boxed{
B_t
=
L(1+i)^t
-
R\,s_{\overline{t}\rvert i}
}
$$

### Recursion [M]

$$
\boxed{
B_t
=
B_{t-1}(1+i)-R_t
}
$$

All three compute the **same $B_t$**.

---

## 7.3 Payment Split

### [M]

$$
\boxed{
I_t=iB_{t-1}
}
$$

$$
\boxed{
P_t=R_t-I_t
}
$$

$$
\boxed{
B_t=B_{t-1}-P_t
}
$$

For level payments:

$$
P_{t+s}=P_t(1+i)^s.
$$

> [!SANITY]
> For positive-rate level-payment amortization:
> - interest portion tends to decrease;
> - principal portion tends to increase;
> - balance tends to decrease.

---

# 8. Sinking Fund Engine

Two accounts must remain separate.

Loan principal $L$ is not amortized directly; borrower pays loan interest and deposits into a separate fund.

### [M]

$$
\boxed{
D\,s_{\overline{n}\rvert i_{\text{SF}}}=L
}
$$

Thus:

$$
\boxed{
D=
\frac{L}{s_{\overline{n}\rvert i_{\text{SF}}}}
}
$$

If loan rate is $i_L$:

$$
\boxed{
\text{periodic outflow}
=
i_LL+D
}
$$

Fund balance after $t$ deposits:

$$
S_t
=
D\,s_{\overline{t}\rvert i_{\text{SF}}}.
$$

Net amount still economically uncovered:

$$
L-S_t.
$$

> [!DANGER]
> Sinking-fund deposit is **not** a principal payment to the lender.

---

# 9. Bond Price & Book Value Engine

## 9.1 Cash-Flow Setup

Per coupon period:

- face/par = $F$;
- coupon rate = $r$;
- coupon = $Fr$;
- redemption = $C$;
- yield = $j$;
- number of coupons = $n$.

Do **not** assume $F=C$ unless stated.

---

## 9.2 Bond Price

### [M] Default formula

$$
\boxed{
P
=
Fr\,a_{\overline{n}\rvert j}
+
Cv_j^n
}
$$

This is equation of value:

$$
\text{price}
=
PV(\text{coupons})
+
PV(\text{redemption}).
$$

### [R] Premium / Discount form

$$
\boxed{
P
=
C+(Fr-Cj)a_{\overline{n}\rvert j}
}
$$

Define:

$$
g=\frac{Fr}{C}.
$$

Then:

$$
P
=
C+C(g-j)a_{\overline{n}\rvert j}.
$$

---

## 9.3 Premium / Par / Discount

### [M]

$$
Fr>Cj
\iff
g>j
\iff
P>C
\quad \text{premium}
$$

$$
Fr=Cj
\iff
g=j
\iff
P=C
\quad \text{par relative to redemption}
$$

$$
Fr<Cj
\iff
g<j
\iff
P<C
\quad \text{discount}
$$

If $F=C$:

$$
r>j\Rightarrow\text{premium},
\qquad
r<j\Rightarrow\text{discount}.
$$

---

## 9.4 Book Value after Coupon $t$

### [M]

$$
\boxed{
B_t
=
Fr\,a_{\overline{n-t}\rvert j}
+
Cv_j^{n-t}
}
$$

### Recursion [M]

$$
\boxed{
B_t=(1+j)B_{t-1}-Fr
}
$$

Interest earned:

$$
\boxed{
I_t=jB_{t-1}
}
$$

Premium:

$$
Fr-I_t=B_{t-1}-B_t.
$$

Discount:

$$
I_t-Fr=B_t-B_{t-1}.
$$

> [!INSIGHT]
> Loan balance recursion and bond book-value recursion are the same engine:
>
> $$
> \text{new balance}
> =
> \text{old balance}\times(1+\text{rate})
> -
> \text{cash payment}.
> $$

---

## 9.5 Yield / Coupon / Term Unknown

Use the same price equation:

$$
P
=
Fr\,a_{\overline{n}\rvert j}
+
Cv_j^n.
$$

### Yield unknown

$$
f(j)
=
Fr\,a_{\overline{n}\rvert j}
+
Cv_j^n
-
P=0.
$$

### Coupon amount unknown

$$
\boxed{
Fr
=
\frac{P-Cv_j^n}
{a_{\overline{n}\rvert j}}
}
$$

### Redemption unknown

$$
\boxed{
C
=
\frac{P-Fr\,a_{\overline{n}\rvert j}}
{v_j^n}
}
$$

> [!TRAP]
> YTM is one rate that prices the entire cash-flow package; it is not automatically a spot rate.

---

# 10. Spot / Forward / Yield Curve Engine

## 10.1 Spot Rate

For a payment at maturity $t$:

$$
\boxed{
D(0,t)
=
(1+s_t)^{-t}
}
$$

Zero-coupon bond paying $F$:

$$
P_t=F(1+s_t)^{-t}.
$$

Therefore:

$$
\boxed{
s_t
=
\left(\frac{F}{P_t}\right)^{1/t}-1
}
$$

---

## 10.2 Pricing with Spot Curve

### [M]

$$
\boxed{
P
=
\sum_{t=1}^n
\frac{C_t}{(1+s_t)^t}
}
$$

> [!DANGER]
> Do not discount all coupon cash flows with $s_n$ unless term structure is flat.

---

## 10.3 Forward Rate from Spots

### [M] Accumulation consistency

$$
\boxed{
(1+s_{t_2})^{t_2}
=
(1+s_{t_1})^{t_1}
(1+f_{t_1,t_2})^{t_2-t_1}
}
$$

Hence:

$$
1+f_{t_1,t_2}
=
\left[
\frac{(1+s_{t_2})^{t_2}}
{(1+s_{t_1})^{t_1}}
\right]^{1/(t_2-t_1)}.
$$

> [!TRAP]
> Forward rate is **not** $s_{t_2}-s_{t_1}$.

---

## 10.4 Bootstrapping

If $s_1,\ldots,s_{n-1}$ are known:

$$
P
=
\sum_{t=1}^{n-1}
\frac{C_t}{(1+s_t)^t}
+
\frac{C_n}{(1+s_n)^n}.
$$

Then isolate the last term:

$$
\boxed{
s_n
=
\left[
\frac{C_n}
{
P-\displaystyle\sum_{t=1}^{n-1}
\frac{C_t}{(1+s_t)^t}
}
\right]^{1/n}
-1
}
$$

**Mental rule:**

**known early spots → discount early cash flows → isolate terminal cash flow → solve next spot.**

---

## 10.5 Yield Curve Theory — Concept Card

Shapes:

- normal / upward;
- inverted / downward;
- flat;
- humped.

Core theories:

- pure expectations;
- liquidity preference;
- preferred habitat;
- market segmentation.

> [!TRAP]
> Curve shape is data. The theory explains *why* it may take that shape.  
> Upward curve does not prove future short rates will actually rise.

---

# 11. Duration Engine

For price:

$$
P=\sum_t C_tv^t.
$$

## 11.1 Macaulay Duration

### [M]

$$
\boxed{
D_{\text{Mac}}
=
\frac{\sum_t tC_tv^t}
{\sum_t C_tv^t}
=
\frac{\sum_t tC_tv^t}{P}
}
$$

Interpretation: PV-weighted average payment time.

---

## 11.2 Modified Duration

### [M]

$$
\boxed{
D_{\text{Mod}}
=
-\frac{P'(i)}{P(i)}
=
\frac{D_{\text{Mac}}}{1+i}
}
$$

### First-order price approximation [M]

$$
\boxed{
\frac{\Delta P}{P}
\approx
-D_{\text{Mod}}\Delta i
}
$$

or

$$
P(i+\Delta i)
\approx
P(i)
\left(1-D_{\text{Mod}}\Delta i\right).
$$

> [!TRAP]
> Duration approximation is local; accuracy deteriorates for larger yield changes.

---

# 12. Convexity Engine

## 12.1 Modified Convexity

### [M]

$$
\boxed{
C_{\text{Mod}}
=
\frac{P''(i)}{P(i)}
=
\frac{
\sum_t t(t+1)C_tv^{t+2}
}{P}
}
$$

## 12.2 Second-Order Approximation

### [M]

$$
\boxed{
\frac{\Delta P}{P}
\approx
-D_{\text{Mod}}\Delta i
+
\frac12C_{\text{Mod}}(\Delta i)^2
}
$$

> [!DANGER]
> Macaulay-convexity formulas using $t^2$ and modified-convexity formulas using $t(t+1)$ are different parameterizations. Do not mix labels.

---

# 13. Immunization Engine

## 13.1 Redington Conditions

### [M]

At target yield:

$$
\boxed{P_A=P_L}
$$

$$
\boxed{D_A=D_L}
$$

$$
\boxed{C_A\ge C_L}
$$

### [A] Scope

- common valuation basis / flat yield framework;
- parallel yield shifts;
- local protection around target yield;
- small changes.

> [!DANGER]
> Duration matching **alone** is not Redington immunization.

---

# 14. Options Engine

## 14.1 Primitive Payoffs

### [M]

Long call:

$$
\boxed{
\max(S_T-K,0)
}
$$

Short call:

$$
-\max(S_T-K,0).
$$

Long put:

$$
\boxed{
\max(K-S_T,0)
}
$$

Short put:

$$
-\max(K-S_T,0).
$$

---

## 14.2 Profit vs Payoff

If premium is paid at time 0 and profit is measured at $T$:

$$
\boxed{
\text{profit}_T
=
\text{payoff}_T
-
FV_T(\text{premium paid})
}
$$

For a short position, initial premium received has opposite sign.

> [!TRAP]
> Payoff ≠ profit.

---

## 14.3 Strategy Construction

For any strategy:

$$
\boxed{
\text{portfolio payoff}
=
\sum_k
\text{component payoff}_k
}
$$

Use this for:

- bull / bear spread;
- ratio spread;
- collar;
- straddle;
- strangle;
- butterfly.

**Do not memorize an independent piecewise formula for every strategy if you can reconstruct it from components.**

---

# 15. Forward / Futures Engine

## 15.1 Forward Contract

Long forward payoff:

$$
\boxed{
S_T-K
}
$$

Short:

$$
K-S_T.
$$

Under a no-income asset and continuously compounded financing rate $r_f$:

$$
\boxed{
F_{0,T}=S_0e^{r_fT}
}
$$

Prepaid forward under the same no-income setup:

$$
F^P_{0,T}=S_0.
$$

With known asset income/dividend, use the corresponding cost-of-carry adjustment from the source setup.

> [!DANGER]
> $f_{t_1,t_2}$ = forward **interest rate**.  
> $F_{0,T}$ = forward **contract price**.  
> Same English word, different objects.

## 15.2 Futures

Key mechanics rather than a new pricing formula:

- standardized contract;
- exchange traded;
- marked-to-market;
- margin account;
- daily gains/losses.

---

# 16. Portfolio Risk–Return Engine

## 16.1 Expected Portfolio Return

### [M]

$$
\boxed{
E[R_p]
=
\sum_i w_iE[R_i]
}
$$

Weights satisfy:

$$
\sum_iw_i=1
$$

for a fully invested portfolio under the standard setup.

---

## 16.2 Portfolio Variance

### [M]

$$
\boxed{
\sigma_p^2
=
\sum_i\sum_j
w_iw_j\operatorname{Cov}(R_i,R_j)
}
$$

Two assets:

$$
\boxed{
\sigma_p^2
=
w_1^2\sigma_1^2
+
w_2^2\sigma_2^2
+
2w_1w_2\rho_{12}\sigma_1\sigma_2
}
$$

Covariance relation:

$$
\operatorname{Cov}(R_i,R_j)
=
\rho_{ij}\sigma_i\sigma_j.
$$

> [!TRAP]
> Correlation affects **risk**, not the weighted-average expected return formula.

---

# 17. CAPM / Factor Model Core

## 17.1 Beta

### [M]

$$
\boxed{
\beta_i
=
\frac{
\operatorname{Cov}(R_i,R_M)
}{
\operatorname{Var}(R_M)
}
}
$$

## 17.2 CAPM / SML

### [M]

$$
\boxed{
E[R_i]
=
R_f
+
\beta_i
\left(E[R_M]-R_f\right)
}
$$

Interpretation:

- $\beta=1$: market-level systematic exposure;
- $\beta>1$: more sensitive than market;
- $\beta<1$: less sensitive.

> [!TRAP]
> $\sigma$ measures total volatility; $\beta$ measures systematic market exposure.

> [!NOTE]
> The syllabus notes mention single-factor and multi-factor models, but the supplied Ross chapters used for those notes do not support a detailed universal mathematical specification strongly enough to justify adding extra factor-model formulas here. Treat factor-model specification as source-dependent rather than inventing a canonical equation.

---

# 18. High-Risk Exam Traps

| Area | Trap | Correct mental check |
|---|---|---|
| TVM | annual rate used with monthly $n$ | convert to payment-period rate first |
| EOV | comparing values at different dates | choose one focal date |
| Annuity | immediate vs due | locate first payment |
| Deferred | treating $m$ as first payment time | first payment is usually $m+1$ for ${}_{m\vert}a_n$ |
| Varying annuity | recognizing formula before payment pattern | write first 3–4 payments |
| Loan | balance before vs after payment | define $B_t$ timing |
| Sinking fund | deposit treated as lender principal payment | keep two accounts |
| Bond | assume $F=C$ | check redemption explicitly |
| Bond | coupon rate compared to yield on wrong basis | convert both per coupon period |
| Yield | YTM treated as spot rate | coupon bond has multiple maturity-specific discount rates |
| Forward rate | subtract spot rates | use accumulation consistency |
| Bootstrapping | use one rate for all cash flows | each maturity has its own spot rate |
| Duration | approximation treated exact | check size of $\Delta i$ |
| Convexity | Macaulay/modified convention mixed | inspect derivative variable |
| Immunization | duration match only | also PV and convexity condition |
| Options | payoff confused with profit | account for premium + valuation date |
| Portfolio | average SDs linearly | use covariance variance formula |

---

# 19. Reconstruction Map — What to Do If You Forget

## Forgot a rate conversion?

Write:

$$
\text{same accumulation over same horizon}.
$$

Example:

$$
\left(1+\frac{i^{(m)}}m\right)^m=1+i.
$$

---

## Forgot an annuity formula?

Write the series:

$$
v+v^2+\cdots+v^n
$$

and use geometric series.

---

## Forgot annuity-due?

Shift immediate one period earlier:

$$
\ddot a_n=(1+i)a_n.
$$

---

## Forgot deferred annuity?

Value the annuity one period before its first payment, then discount back.

---

## Forgot loan balance?

Use:

$$
B_t=PV_t(\text{remaining payments})
$$

or recursion:

$$
B_t=B_{t-1}(1+i)-R_t.
$$

---

## Forgot bond book value?

It is simply the value at time $t$ of remaining coupons + redemption:

$$
B_t
=
Fr\,a_{n-t}+Cv^{n-t}.
$$

---

## Forgot premium/discount relation?

Compare coupon cash amount with required interest on redemption basis:

$$
Fr \quad \text{vs}\quad Cj.
$$

---

## Forgot forward-rate formula?

Equate accumulation over the same total horizon:

$$
\text{long spot accumulation}
=
\text{short spot accumulation}
\times
\text{forward accumulation}.
$$

---

## Forgot duration?

Start from price sensitivity:

$$
D_{\text{Mod}}
=
-\frac{1}{P}\frac{dP}{di}.
$$

---

## Forgot an option strategy?

Sum the primitive call/put/underlying payoffs.

---

## Forgot portfolio variance?

Return is linear; risk is quadratic:

$$
\sigma_p^2=w^\top\Sigma w.
$$

---

# 20. Memorization Tiers

## Tier 1 — Must Be Automatic

- $v=(1+i)^{-1}=1-d$
- rate-equivalence accumulation chain
- equation of value
- $a_{\overline{n}\rvert}$, $s_{\overline{n}\rvert}$
- immediate ↔ due timing shift
- deferred annuity $v^m a_n$
- loan recursion / prospective balance
- loan interest & principal split
- sinking-fund accumulation equation
- bond price
- bond book-value recursion
- spot-forward relation
- duration first-order approximation
- convexity second-order approximation
- Redington conditions + assumptions
- primitive call/put payoffs
- portfolio expected return & variance
- beta + CAPM

## Tier 2 — Know / Reconstruct Quickly

- nominal-rate pairwise conversions
- arithmetic annuity closed forms
- geometric annuity
- retrospective loan balance
- bond premium-discount rearrangements
- coupon/redemption unknown rearrangements
- bootstrapping algebra
- special duration identities

## Tier 3 — Reference Only Unless Practice Shows Need

- unusual $(Is),(Ds)$ variants
- many $m$-thly special annuity identities
- continuous increasing-annuity variants
- Makeham/base-amount special rearrangements
- reinvestment edge-case formulas
- callable-bond shortcuts
- specialized liability matching formulas
- calculator keystroke recipes

---

# 21. 30-Second Pre-Solve Checklist

```text
□ Draw timeline
□ Mark + / − cash flows
□ Identify first and last payment
□ Choose focal date
□ Convert rate to correct period
□ Decide: one rate or spot curve?
□ Identify quantity, not formula name
□ Use canonical equation
□ Solve
□ Check direction / sign / timing
```

---

# 22. One-Sentence Mental Models

- **TVM:** same money at different dates needs an accumulation/discount bridge.
- **Equation of value:** compare all cash flows at one date.
- **Annuity:** geometric series with payment timing.
- **Loan:** remaining debt = PV of remaining payments.
- **Sinking fund:** loan and repayment fund are separate accounts.
- **Bond:** price = PV coupons + PV redemption.
- **Spot curve:** each maturity has its own discount rate.
- **Forward rate:** whatever rate makes two accumulation paths equal.
- **Duration:** first-order price sensitivity to yield.
- **Convexity:** curvature correction to duration.
- **Immunization:** match value and first-order sensitivity, with sufficient curvature.
- **Option:** payoff is state-dependent terminal cash flow.
- **Portfolio:** expected return is linear; risk depends on covariance.
- **CAPM:** expected return compensates systematic, not total, risk.

---

# 23. Legacy Cheat Sheet Translation Key

When consulting old sheets:

| Legacy notation | Read canonically as |
|---|---|
| ACTEX loan payment $P$ | $R$ |
| Theory loan level payment $P_A$ | $R$ |
| ACTEX spot rate $r_t$ | $s_t$ |
| Sinking fund $j$ | $i_{\text{SF}}$ |
| Inflation $r$ | $\pi$ |
| Bond yield $i$ in FM sheets | $j$ in this CF1 master |
| Bond book value $BV_t$ | $B_t$ in bond context |

> [!FINAL] Core rule
> **Do not memorize notation from the legacy sheet. Translate the quantity into this canonical system first.**
