---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "4"
chapter_title: "Annuities with different payment and conversion periods"
cf1_topics: ["2.1", "2.2", "2.3", "2.4", "2.6"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 4, Sections 4.1–4.7; problem set 4.8 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler, Annuities, PaymentFrequency]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 4: Annuities with different payment and conversion periods

> [!ABSTRACT] Chapter in One View
> Chapter 4 menghapus simplifying assumption Chapter 3 bahwa **payment period dan interest conversion period berimpit**. Vaaler memisahkan dua kasus: pembayaran **lebih jarang** daripada interest conversion dan pembayaran **lebih sering** daripada interest conversion. Untuk kasus pertama, valuation dapat dilakukan dengan equivalent effective rate per payment interval atau dengan ratio dari familiar annuity symbols. Untuk kasus kedua, chapter memperkenalkan actuarial $m$-thly annuity notation, yang secara alami melibatkan nominal interest dan discount rates convertible $m$ times. Framework kemudian diperluas ke payments in arithmetic progression dengan frequency mismatch. Dengan membiarkan payment frequency meningkat tanpa batas, Vaaler memperoleh **continuously paying annuities**, termasuk level dan increasing continuous payments. Chapter ditutup dengan yield-rate example untuk menunjukkan bahwa unsynchronized cash flows tetap tunduk pada equation-of-value principle yang sama. Untuk CF1, chapter ini terutama mendukung [[2.1 Annuity-Immediate and Annuity-Due]], [[2.3 Varying Annuities]], [[2.4 Continuous Annuities]], dan frequency discipline yang mendasari [[2.6 Varying Interest Rates]].

## 1. Why This Chapter Exists

Chapter 3 sengaja memilih unit waktu sehingga:

> one payment period = one interest period.

Pilihan itu membuat formulas bersih, tetapi tidak selalu sesuai contract sebenarnya. Misalnya:

- interest dapat dikonversi monthly sementara payments quarterly;
- interest dapat efektif tahunan sementara payments monthly;
- suatu annuity dapat membayar beberapa kali dalam satu interest period;
- payment amount dapat sekaligus berubah menurut arithmetic progression.

Chapter 4 menunjukkan bahwa tidak ada prinsip finansial baru. Yang berubah hanya **calendar structure**. Karena itu alur aman tetap:

1. identifikasi actual payment dates;
2. identifikasi interest-conversion dates;
3. tentukan accumulation factor di antara payment dates;
4. baru gunakan annuity notation atau geometric-series algebra.

Vaaler juga menunjukkan dua complementary approaches:

- **convert the rate** ke effective rate yang cocok dengan payment interval; atau
- pertahankan original interest-period rate dan gunakan specialized annuity relations.

Kedua pendekatan harus menghasilkan value yang sama.

## 2. Chapter Map

- **4.1 Introduction** — mengapa payment dan interest periods perlu dipisahkan.
- **4.2 Level Annuities with Payments Less Frequent Than Each Interest Period** — satu payment period mencakup beberapa interest periods.
- **4.3 Level Annuities with Payments More Frequent Than Each Interest Period** — beberapa payments terjadi dalam satu interest period; $m$-thly notation.
- **4.4 Annuities with Payments Less Frequent Than Each Interest Period and Payments in Arithmetic Progression** — arithmetic patterns dengan coarse payment intervals.
- **4.5 Annuities with Payments More Frequent Than Each Interest Period and Payments in Arithmetic Progression** — arithmetic patterns dengan multiple payments per interest period.
- **4.6 Continuously Paying Annuities** — limit dari increasingly frequent payments; level dan increasing cases.
- **4.7 A Yield Rate Example** — unknown rate dari unsynchronized annuity cash flows.
- **4.8 Problems** — latihan; tidak diringkas.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 4.1–4.3 | Core | [[2.1 Annuity-Immediate and Annuity-Due]], rate-frequency discipline |
| 4.2 | Supporting/Core | [[2.2 Perpetuity]] |
| 4.4–4.5 | Core | [[2.3 Varying Annuities]] |
| 4.6 | Core | [[2.4 Continuous Annuities]] |
| 4.7 | Supporting | yield / equation-of-value skill |
| whole chapter | Core principle | [[2.6 Varying Interest Rates]] via basis consistency |

## 3. 4.1 Introduction

Vaaler explicitly drops the requirement that payment period and interest period coincide.

The chapter distinguishes:

### Case A — Payments less frequent than interest conversion

Example:

- interest converted monthly;
- payment every quarter.

One payment interval spans multiple interest periods.

### Case B — Payments more frequent than interest conversion

Example:

- annual effective interest period;
- payments monthly.

One interest period contains multiple payment intervals.

The distinction matters because the convenient annuity denominator must represent growth over the relevant payment spacing.

> [!IMPORTANT] Core Rule
> Never insert a quoted annual or nominal rate into an annuity factor merely because it is “the rate in the problem.” The rate basis must match the cash-flow timing represented by that factor.

Chapter 4 also introduces increasing annuities under these unsynchronized frequencies and then takes the high-frequency limit to continuous payment.

## 4. 4.2 Level Annuities with Payments Less Frequent Than Each Interest Period

Suppose base interest period has effective rate $i$, while annuity payments occur every $k$ interest periods.

Then one **payment period** accumulates by:

$$
(1+i)^k.
$$

Therefore the effective rate per payment period is:

$$
\boxed{
I=(1+i)^k-1.
}
$$

Let there be $r$ payments. The total term contains:

$$
n=rk
$$

base interest periods.

### 4.1 Direct equivalent-rate method

For an annuity-immediate paying 1 every $k$ periods:

$$
PV
=
a_{\overline{r}|I}.
$$

That is:

$$
PV
=
\frac{1-(1+I)^{-r}}{I}.
$$

Because:

$$
1+I=(1+i)^k,
$$

this is exactly the sum:

$$
v^k+v^{2k}+\cdots+v^{rk}.
$$

### 4.2 Ratio-of-annuity-symbols method

Vaaler also expresses the same value using familiar factors at the base interest rate.

Since:

$$
s_{\overline{k}|i}
=
\frac{(1+i)^k-1}{i}
=
\frac{I}{i},
$$

and:

$$
a_{\overline{n}|i}
=
\frac{1-v^n}{i},
$$

we obtain:

$$
\boxed{
a_{\overline{r}|I}
=
\frac{
a_{\overline{rk}|i}
}{
s_{\overline{k}|i}
}.
}
$$

This formula is not a different financial model. It is algebraic repackaging of the equivalent-rate method.

### 4.3 Annuity-due

For payments at the **beginning** of each $k$-period payment interval, use the effective discount rate corresponding to $I$:

$$
D=\frac{I}{1+I}.
$$

Then:

$$
\ddot{a}_{\overline{r}|I}
=
\frac{1-(1+I)^{-r}}{D}.
$$

As always:

$$
\boxed{
\ddot{a}_{\overline{r}|I}
=
(1+I)a_{\overline{r}|I}.
}
$$

The shift is one **payment period**, not one base interest period.

### 4.4 Perpetuity with sparse payments

If one payment of 1 occurs at the **end of every $k$ interest periods**, the perpetuity PV is:

$$
\boxed{
\frac{1}{I}
=
\frac{1}{(1+i)^k-1}.
}
$$

Using:

$$
I=i\,s_{\overline{k}|i},
$$

Vaaler also writes:

$$
\boxed{
a_{\overline{\infty}|I}
=
\frac{1}{
i\,s_{\overline{k}|i}
}.
}
$$

For payments at the **beginning** of every $k$ periods:

$$
\boxed{
\ddot{a}_{\overline{\infty}|I}
=
\frac{1}{D}.
}
$$

### 4.5 Textbook Example 4.2.12 — Perpetuity replacement

A perpetuity paying $1,650 at the **end of each year** has present value $31,250.

Thus annual effective rate is:

$$
31{,}250
=
\frac{1{,}650}{i},
$$

so:

$$
i
=
\frac{1{,}650}{31{,}250}
=
0.0528.
$$

It is replaced by a perpetuity paying $X$ at the **beginning of each two years**.

The two-year effective rate is:

$$
I=(1.0528)^2-1.
$$

Corresponding two-year effective discount rate:

$$
D=\frac{I}{1+I}.
$$

Since a due perpetuity has value $X/D$:

$$
31{,}250
=
\frac{X}{D}.
$$

Hence:

$$
X=31{,}250D.
$$

Vaaler obtains approximately:

$$
\boxed{
X\approx \$3{,}055.90.
}
$$

**Lesson:** the payment spacing changes from one year to two years, so the relevant effective rate must also change to a two-year basis.

## 5. 4.3 Level Annuities with Payments More Frequent Than Each Interest Period

Now reverse the structure: one interest period contains multiple payments.

Suppose there are $m$ equal subperiods per interest period and the annuity makes $m$ payments during each interest period.

Vaaler uses the standard actuarial convention that each payment is:

$$
\frac{1}{m},
$$

so total nominal payment over one full interest period is 1.

### 5.1 Effective subperiod rate and nominal rate

If $i$ is the effective rate per full interest period, the effective rate per $1/m$ subperiod is:

$$
j
=
(1+i)^{1/m}-1.
$$

The corresponding nominal rate convertible $m$ times is:

$$
\boxed{
i^{(m)}
=
mj
=
m\left[(1+i)^{1/m}-1\right].
}
$$

Similarly, nominal discount rate convertible $m$ times is:

$$
\boxed{
d^{(m)}
=
m\left[1-(1+i)^{-1/m}\right].
}
$$

### 5.2 $m$-thly annuity-immediate

For term $n$ full interest periods, there are $mn$ payments of $1/m$ at:

$$
\frac{1}{m},
\frac{2}{m},
\ldots,
n.
$$

Present value:

$$
a_{\overline{n}|i}^{(m)}
=
\frac{1}{m}
\sum_{k=1}^{mn}
(1+i)^{-k/m}.
$$

This is geometric. Simplification gives:

$$
\boxed{
a_{\overline{n}|i}^{(m)}
=
\frac{1-v^n}{i^{(m)}}.
}
$$

### 5.3 $m$-thly annuity-due

Payments occur at:

$$
0,\frac{1}{m},\ldots,n-\frac{1}{m}.
$$

The corresponding PV is:

$$
\boxed{
\ddot{a}_{\overline{n}|i}^{(m)}
=
\frac{1-v^n}{d^{(m)}}.
}
$$

The due stream is shifted one **subperiod** earlier than the immediate stream.

### 5.4 Accumulated values

The same-stream PV/AV relationship remains:

$$
\boxed{
s_{\overline{n}|i}^{(m)}
=
(1+i)^n
a_{\overline{n}|i}^{(m)}.
}
$$

and:

$$
\boxed{
\ddot{s}_{\overline{n}|i}^{(m)}
=
(1+i)^n
\ddot{a}_{\overline{n}|i}^{(m)}.
}
$$

### 5.5 Why nominal rates appear naturally

For ordinary annual annuity:

$$
a_{\overline{n}|i}
=
\frac{1-v^n}{i}.
$$

For $m$-thly payments:

$$
a_{\overline{n}|i}^{(m)}
=
\frac{1-v^n}{i^{(m)}}.
$$

The numerator represents the same total-term discount effect. The denominator changes because each payment is split into $m$ smaller installments and the relevant subperiod growth is encoded by $i^{(m)}$.

> [!WARNING] Scaling Convention
> In $a_{\overline{n}|}^{(m)}$, each subperiod payment is usually $1/m$, **not 1**. If an actual contract pays $R$ each subperiod, scale the factor accordingly.

### 5.6 Timing ordering

For positive interest and the same total nominal payment per full period:

- due payments are earlier than continuous payments;
- continuous payments are earlier on average than immediate $m$-thly payments concentrated at subperiod ends.

As $m$ increases, immediate and due $m$-thly values move toward the same continuous-payment limit.

## 6. 4.4 Payments Less Frequent Than Each Interest Period and Arithmetic Progression

Now payments occur every $k$ base interest periods **and** payment amounts follow an arithmetic progression.

Suppose payments at the end of each payment period are:

$$
P,\;
P+Q,\;
P+2Q,\ldots,
P+(r-1)Q.
$$

The correct first step is still to move from base interest rate $i$ to the effective rate per payment interval:

$$
\boxed{
I=(1+i)^k-1.
}
$$

Once that conversion is made, Chapter 3 arithmetic-annuity formulas apply unchanged, because relative to the payment calendar this is simply an arithmetic annuity with rate $I$.

### 6.1 Present value

For immediate payments:

$$
\boxed{
PV
=
P\,a_{\overline{r}|I}
+
\frac{Q}{I}
\left(
a_{\overline{r}|I}
-
r(1+I)^{-r}
\right).
}
$$

This is Chapter 3's $P+Q(j-1)$ structure with the correct **payment-period rate**.

### 6.2 Why conversion first is safe

If one incorrectly uses $i$ directly, the annuity formula assumes payments every base interest period, which is false.

The financial sequence is:

```text
base rate i
    ↓ accumulate for k base periods
payment-period rate I
    ↓
arithmetic-annuity formula
```

### 6.3 Alternative symbol-ratio approach

Vaaler also develops formulas in terms of ratios of annuity symbols at the base rate. These can be computationally elegant, especially in actuarial notation, but conceptually they encode the same relationship as the equivalent-rate method.

> [!TIP] CF1 Mental Rule
> If payment interval contains several compounding intervals, **collapse those compounding intervals into one effective payment-period rate** before applying a standard varying-annuity formula.

## 7. 4.5 Payments More Frequent Than Each Interest Period and Arithmetic Progression

This case combines:

- multiple payments per interest period; and
- an arithmetic change in the payment structure.

The main difficulty is not new algebra; it is precise interpretation of **what quantity is increasing**.

Vaaler constructs specialized $m$-thly increasing-annuity symbols. A common convention is that the subperiod payments within a year are scaled so that the **total payment associated with year $j$** follows an arithmetic pattern.

### 7.1 Decomposition logic

Any arithmetic pattern can be decomposed into:

$$
\text{level component}
+
\text{increasing component}.
$$

Schematically:

$$
PV
=
P\,
a_{\overline{n}|i}^{(m)}
+
Q\,
(Ia)_{\overline{n}|i}^{(m)},
$$

with scaling depending on how the textbook defines the $m$-thly payment amounts.

The important structural lesson is:

1. identify whether increase occurs every subperiod or by annual block;
2. write the first few actual payments;
3. use the specialized symbol only after the pattern is unambiguous.

### 7.2 Frequency and gradient are separate dimensions

Do not mix:

- **payment frequency**: when cash flows occur;
- **gradient**: how amounts change.

A robust workflow is:

```text
timing grid
   ↓
actual payment amount at each grid point
   ↓
discount factor for each grid point
   ↓
group into level + gradient components
```

### 7.3 Why these formulas exist

Without specialized notation, a 20-year annuity paying monthly would contain 240 terms. If its payment pattern is regular, $m$-thly annuity symbols compress the same equation of value into a reusable factor.

[CORE CF1] The user should understand the mechanics and rate/timing basis. Memorizing every specialized symbol variant is less important than being able to rebuild the cash-flow equation correctly.

## 8. 4.6 Continuously Paying Annuities

Vaaler obtains a continuous annuity as a limit of increasingly frequent payments.

In real life money does not literally “drip” continuously, but continuous cash-flow models are mathematically useful and are explicitly relevant to actuarial work.

### 8.1 Level continuous payment

Suppose payment occurs continuously at **rate 1 per unit time** from $t=0$ through $t=n$.

An infinitesimal interval $dt$ contributes payment:

$$
dt.
$$

Under constant force of interest $\delta$:

$$
v^t=e^{-\delta t}.
$$

Present value:

$$
\bar{a}_{\overline{n}|}
=
\int_0^n e^{-\delta t}\,dt.
$$

Integrating:

$$
\boxed{
\bar{a}_{\overline{n}|}
=
\frac{1-e^{-\delta n}}{\delta}
=
\frac{1-v^n}{\delta}.
}
$$

### 8.2 Accumulated value

At time $n$:

$$
\bar{s}_{\overline{n}|}
=
\int_0^n e^{\delta(n-t)}\,dt.
$$

Thus:

$$
\boxed{
\bar{s}_{\overline{n}|}
=
\frac{e^{\delta n}-1}{\delta}.
}
$$

As expected:

$$
\boxed{
\bar{s}_{\overline{n}|}
=
e^{\delta n}
\bar{a}_{\overline{n}|}.
}
$$

Since:

$$
e^{\delta n}=(1+i)^n,
$$

this is the same focal-date relationship as discrete annuities.

### 8.3 Limit from $m$-thly annuities

As payment frequency increases:

$$
m\to\infty,
$$

nominal convertible rate tends to the force:

$$
i^{(m)}
\to
\delta.
$$

Hence:

$$
a_{\overline{n}|}^{(m)}
=
\frac{1-v^n}{i^{(m)}}
\longrightarrow
\frac{1-v^n}{\delta}.
$$

Therefore:

$$
\boxed{
\lim_{m\to\infty}
a_{\overline{n}|}^{(m)}
=
\bar{a}_{\overline{n}|}.
}
$$

The corresponding due sequence has the same limit, because the difference between beginning and end of an infinitesimal subperiod vanishes.

### 8.4 Increasing continuous payment rate

Suppose instantaneous payment rate at time $t$ is:

$$
t.
$$

The infinitesimal payment is:

$$
t\,dt.
$$

PV:

$$
(I\bar{a})_{\overline{n}|}
=
\int_0^n
t e^{-\delta t}\,dt.
$$

Integration by parts gives:

$$
\boxed{
(I\bar{a})_{\overline{n}|}
=
\frac{
\bar{a}_{\overline{n}|}
-
nv^n
}{
\delta
}.
}
$$

This is the continuous analogue of the discrete increasing-annuity identity.

### 8.5 General continuous payment rate

If payments occur continuously at rate $R(t)$:

$$
\boxed{
PV_0
=
\int_0^n
R(t)e^{-\delta t}\,dt
}
$$

under constant force $\delta$.

More generally, if the accumulation function is $a(t)$:

$$
\boxed{
PV_0
=
\int_0^n
\frac{R(t)}{a(t)}\,dt.
}
$$

> [!IMPORTANT] Payment Rate vs Payment Amount
> $R(t)$ has units of **currency per unit time**.  
> The infinitesimal cash flow is $R(t)\,dt$.

### 8.6 Timing ordering

For positive interest, with total payment 1 per full period:

$$
a_{\overline{n}|}
<
\bar{a}_{\overline{n}|}
<
\ddot{a}_{\overline{n}|}.
$$

Intuition:

- immediate payments are latest;
- due payments are earliest;
- continuous flow lies between them.

## 9. 4.7 A Yield Rate Example

Vaaler closes the chapter by showing that a complicated annuity with multiple timing features is still solved by an equation of value.

The rate is not obtained from a new “Chapter 4 yield formula.” Instead:

1. list actual cash flows;
2. value them consistently at one date;
3. write the nonlinear equation in the unknown rate;
4. solve numerically.

In the textbook example, successive numerical trials lead to annual effective yield approximately:

$$
\boxed{
i=0.055435235
}
$$

or about:

$$
\boxed{
5.5435\%.
}
$$

The calculator representation gives a quarterly yield of approximately:

$$
1.357968437\%
$$

which compounds to the same annual effective rate.

### 9.1 Rate-basis check

If quarterly effective yield is $j$:

$$
1+i=(1+j)^4.
$$

Thus:

$$
i=(1+j)^4-1.
$$

A quarterly IRR should **not** simply be multiplied by 4 if the question asks for annual effective yield.

### 9.2 Conceptual lesson

> Complex timing changes the equation, not the definition of yield.

Yield remains the rate that equates values of the actual cash flows.

## 10. Core Formula Network

### Payments every $k$ interest periods

$$
\boxed{
I=(1+i)^k-1
}
$$

$$
\boxed{
a_{\overline{r}|I}
=
\frac{
a_{\overline{rk}|i}
}{
s_{\overline{k}|i}
}
}
$$

### $m$ payments per interest period

$$
\boxed{
i^{(m)}
=
m\left[(1+i)^{1/m}-1\right]
}
$$

$$
\boxed{
d^{(m)}
=
m\left[1-(1+i)^{-1/m}\right]
}
$$

$$
\boxed{
a_{\overline{n}|i}^{(m)}
=
\frac{1-v^n}{i^{(m)}}
}
$$

$$
\boxed{
\ddot{a}_{\overline{n}|i}^{(m)}
=
\frac{1-v^n}{d^{(m)}}
}
$$

### Continuous payment

$$
\boxed{
\bar{a}_{\overline{n}|}
=
\frac{1-v^n}{\delta}
}
$$

$$
\boxed{
\bar{s}_{\overline{n}|}
=
\frac{(1+i)^n-1}{\delta}
}
$$

### Continuous increasing payment

$$
\boxed{
(I\bar{a})_{\overline{n}|}
=
\frac{
\bar{a}_{\overline{n}|}
-
nv^n
}{
\delta
}
}
$$

## 11. Two Master Frequency Cases

| Structure | What to do first |
|---|---|
| Payment less frequent than interest conversion | Accumulate several interest periods into one effective payment-period rate |
| Payment more frequent than interest conversion | Determine subperiod rate / use $m$-thly annuity notation |
| Continuous payments | Treat as limit or integrate discounted payment rate |
| Arithmetic payments + frequency mismatch | Resolve timing frequency first, then apply gradient structure |

The order matters:

> **frequency first, pattern second.**

## 12. Important Distinctions

> [!IMPORTANT] Payment Period vs Interest Period
> Payment period tells us when cash flow occurs. Interest period tells us when the quoted rate's effective growth interval occurs.

> [!IMPORTANT] Effective Rate vs Nominal Rate
> $i$ is effective over a full base period. $i^{(m)}/m$ is the effective rate over one $1/m$ subperiod when $i^{(m)}$ is nominal convertible $m$ times.

> [!IMPORTANT] More Frequent Payments vs More Frequent Compounding
> More frequent payments change **cash-flow timing**. More frequent compounding changes the **interest process**.

> [!IMPORTANT] $a_{\overline{n}|}^{(m)}$ Payment Size
> Standard $m$-thly notation uses payments of $1/m$, not unit payment at every subperiod.

> [!IMPORTANT] Continuous Interest vs Continuous Payment
> A constant force $\delta$ describes continuous accumulation. A continuous annuity describes continuous **cash-flow delivery**. They are conceptually distinct.

> [!IMPORTANT] Arithmetic Gradient vs Frequency
> A payment stream can simultaneously have subannual timing and annual/subperiod arithmetic growth. Write actual first payments before using specialized notation.

## 13. Sanity and Limiting Checks

### Same frequency case

If:

$$
k=1,
$$

then:

$$
I=i,
$$

so Section 4.2 collapses to ordinary Chapter 3 annuity formulas.

If:

$$
m=1,
$$

then:

$$
i^{(1)}=i,
$$

and:

$$
a_{\overline{n}|}^{(1)}
=
a_{\overline{n}|}.
$$

### Continuous limit

As:

$$
m\to\infty,
$$

$$
i^{(m)}\to\delta,
$$

and:

$$
a_{\overline{n}|}^{(m)}
\to
\bar{a}_{\overline{n}|}.
$$

### Zero-interest limit

As $i\to0$ and hence $\delta\to0$:

$$
\bar{a}_{\overline{n}|}
\to n.
$$

This equals the undiscounted total payment of a continuous rate-1 stream lasting $n$ units of time.

### Timing order

For $i>0$:

$$
a_{\overline{n}|}
<
\bar{a}_{\overline{n}|}
<
\ddot{a}_{\overline{n}|}.
$$

### Rate basis

If payments are quarterly, a quarterly effective rate must be paired with a quarterly payment count. If payment count is annual, use an annual effective rate.

## 14. Worked Pattern Library

### Pattern A — Quarterly payments, monthly compounding

Suppose nominal rate is $i^{(12)}$ convertible monthly and payments occur quarterly.

Monthly rate:

$$
j_m=\frac{i^{(12)}}{12}.
$$

Quarterly effective rate:

$$
\boxed{
j_q=(1+j_m)^3-1.
}
$$

Then an annuity with $N$ quarterly payments uses:

$$
a_{\overline{N}|j_q}.
$$

### Pattern B — Monthly payments, annual effective interest

If annual effective rate is $i$:

$$
j_m=(1+i)^{1/12}-1.
$$

For unit-per-year payment intensity split into 12 equal monthly payments, each payment is $1/12$ and:

$$
PV
=
a_{\overline{n}|i}^{(12)}.
$$

If actual monthly payment is $R$, scale:

$$
PV
=
12R\,
a_{\overline{n}|i}^{(12)}.
$$

because the standard factor uses $1/12$ per month.

### Pattern C — Payments every two years

Annual effective rate $i$:

$$
I=(1+i)^2-1.
$$

For $r$ end-of-two-year payments of $R$:

$$
PV
=
R\,a_{\overline{r}|I}.
$$

### Pattern D — Continuous payment rate $C$

For constant continuous payment rate $C$ during $[0,n]$:

$$
PV
=
C\bar{a}_{\overline{n}|}
=
C\frac{1-v^n}{\delta}.
$$

## 15. CF1 Connection Map

```text
Chapter 3
payment period = interest period
        ↓
Chapter 4
frequency mismatch
        ├─ payments less frequent
        │      ↓
        │   equivalent payment-period rate
        │
        ├─ payments more frequent
        │      ↓
        │   m-thly annuity notation
        │
        ├─ arithmetic pattern + frequency
        │      ↓
        │   [[2.3 Varying Annuities]]
        │
        └─ frequency → infinity
               ↓
           [[2.4 Continuous Annuities]]

All cases require
rate basis ↔ cash-flow timing consistency
        ↓
[[2.1 Annuity-Immediate and Annuity-Due]]
[[2.6 Varying Interest Rates]]
```

## 16. Quick Reading Review

- Chapter 4 does not introduce a new valuation principle; it fixes frequency mismatch.
- If payments are less frequent than compounding, find the effective rate over one payment interval.
- If there are $k$ interest periods per payment interval, $I=(1+i)^k-1$.
- Ratio-of-annuity-symbol formulas are algebraic alternatives to equivalent-rate conversion.
- If payments are more frequent, use subperiod rates or $m$-thly annuity notation.
- Standard $m$-thly factors use payments of $1/m$.
- $a_{\overline{n}|}^{(m)}=(1-v^n)/i^{(m)}$.
- $\ddot{a}_{\overline{n}|}^{(m)}=(1-v^n)/d^{(m)}$.
- Resolve frequency before handling arithmetic gradients.
- Continuous annuity is the limit of increasingly frequent payments.
- $\bar{a}_{\overline{n}|}=(1-v^n)/\delta$.
- A continuous payment rate is currency per unit time, not a lump sum.
- Increasing continuous annuity values arise from integration of $t e^{-\delta t}$.
- Unsynchronized annuity yield is still found by equation of value and numerical root solving.
- Quarterly, monthly, nominal, effective, and annual rates must never be mixed without explicit conversion.

## 17. Compression Notes

### Retained in Detail

- distinction between payment and interest conversion periods;
- equivalent-rate method for less-frequent payments;
- ratio-of-annuity-symbol logic;
- sparse-payment perpetuity;
- $m$-thly immediate/due notation;
- nominal interest and discount rate relationships;
- arithmetic progression under both frequency cases;
- continuous annuity derivation and limit;
- continuous increasing payments;
- yield-rate interpretation;
- representative perpetuity example.

### Compressed

- repeated calculator procedures;
- repeated examples that only vary payment frequency numerically;
- long tables of factor values;
- specialized notation variants whose mechanics are already clear from the general formula.

### Omitted

- Chapter 4 problem set;
- BA II Plus keystrokes;
- routine exercises and repeated numerical trials.

## Source Traceability

- **Primary textbook:** Vaaler, Vaaler & Daniel, *Mathematical Interest Theory*, 2nd ed., Chapter 4, “Annuities with different payment and conversion periods.”
- **Source scope used:** Sections 4.1–4.7.
- **CF1 scope:** Topik 2 — Anuitas dan Nilai Arus Kas; Vaaler Chapters 3–4 are official references.
- **No outside textbook was used to expand the mathematical content.**
