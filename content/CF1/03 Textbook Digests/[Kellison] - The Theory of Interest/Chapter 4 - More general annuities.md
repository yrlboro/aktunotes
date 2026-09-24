---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "4"
chapter_title: "More general annuities"
cf1_topics: ["2.1", "2.3", "2.4", "2.6"]
cf1_relevance: "Very High"
source_scope: "Kellison Chapter 4, Sections 4.1-4.10"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison, Annuities, VaryingAnnuities]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 4: More general annuities

> [!ABSTRACT] Chapter in One View
> Chapter 4 removes the simplifying assumptions of Chapter 3. Payments no longer harus selalu occur once per interest conversion period, dan payment amounts tidak harus level. Kellison pertama-tama menangani mismatch antara **payment frequency** dan **interest conversion frequency**, membedakan annuities payable less frequently atau more frequently daripada interest conversion. Dengan meningkatkan payment frequency hingga limit, chapter memperoleh **continuous annuities**. Bagian kedua chapter memperluas payment pattern menjadi **arithmetic progression**, **geometric progression**, more general varying annuities, dan akhirnya continuously varying payment rates. Untuk CF1, chapter ini sangat langsung mendukung [[2.1 Annuity-Immediate and Annuity-Due]], [[2.3 Varying Annuities]], [[2.4 Continuous Annuities]], dan prinsip rate-frequency pada [[2.6 Varying Interest Rates]].

## 1. Why This Chapter Exists

Chapter 3 memakai convenient alignment:

> one payment period = one interest conversion period.

Dalam praktik, alignment tersebut sering tidak berlaku. Seseorang dapat membayar monthly sementara interest quoted convertible quarterly, atau sebaliknya. Selain itu, payments dapat meningkat atau menurun dari waktu ke waktu.

Chapter 4 menunjukkan bahwa tidak diperlukan theory baru. Metodenya tetap:

1. identifikasi actual payment dates;
2. identifikasi rate yang berlaku untuk interval tersebut;
3. value cash flows pada common date;
4. cari structure yang memungkinkan simplification.

Kellison kemudian memperlihatkan bahwa banyak specialized annuity formulas sebenarnya berasal dari:

- equivalent periodic rates;
- geometric-series algebra;
- arithmetic-series identities;
- integration sebagai limit of increasingly frequent payments.

---

## 2. Chapter Map

- **4.1 Introduction** — generalized annuity setting.
- **4.2 Differing Payment and Interest Conversion Periods** — framework untuk frequency mismatch.
- **4.3 Annuities Payable Less Frequently Than Interest Is Convertible** — beberapa interest conversions per payment period.
- **4.4 Annuities Payable More Frequently Than Interest Is Convertible** — beberapa payments per interest conversion period.
- **4.5 Continuous Annuities** — limit ketika payment frequency meningkat tanpa batas.
- **4.6 Payments Varying in Arithmetic Progression** — increasing/decreasing annuities.
- **4.7 Payments Varying in Geometric Progression** — payments with constant growth ratio.
- **4.8 More General Varying Annuities** — arbitrary discrete payment patterns.
- **4.9 Continuously Varying Annuities** — continuous payment rate $A(t)$.
- **4.10 Summary of Results** — formula relationships and frequency map.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 4.1–4.4 | Core | [[2.1 Annuity-Immediate and Annuity-Due]], [[2.6 Varying Interest Rates]] |
| 4.5 | Core | [[2.4 Continuous Annuities]] |
| 4.6–4.8 | Core | [[2.3 Varying Annuities]] |
| 4.9 | Core | [[2.4 Continuous Annuities]], [[2.3 Varying Annuities]] |
| 4.10 | Core review | Topik 2 |

---

## 3. 4.1 Introduction

Chapter 4 considers annuities for which either:

- payment period differs from interest conversion period;
- payment amount varies;
- payment stream is continuous;
- or some combination of these features occurs.

The core warning is:

> **Do not combine a payment factor and a rate quotation unless their periods are compatible.**

If rates and payments operate on different frequencies, first translate the interest process into an effective rate over the interval relevant to the payment pattern, or derive the annuity directly from first principles.

---

## 4. 4.2 Differing Payment and Interest Conversion Periods

Suppose a nominal annual rate is convertible $m$ times per year while payments occur with a different frequency.

There are two broad cases:

1. payments **less frequently** than interest is convertible;
2. payments **more frequently** than interest is convertible.

Kellison treats them separately because the useful algebra and notation differ.

### 4.1 General equivalent-rate principle

If there are $q$ interest conversion periods during one payment period and the effective rate per conversion period is $j$, then effective rate per payment period is

$$
\boxed{
1+i_p=(1+j)^q.
}
$$

If quoted rate is nominal $i^{(m)}$:

$$
j=\frac{i^{(m)}}{m}.
$$

Then

$$
i_p
=
\left(1+\frac{i^{(m)}}{m}\right)^q-1.
$$

Once $i_p$ is obtained, standard annuity formulas may be used **if** one payment occurs per payment period and the accumulation law is compound.

### 4.2 Why direct division fails

If annual effective rate is $i$, a monthly effective rate is not generally $i/12$. It must satisfy

$$
(1+i_m)^{12}=1+i.
$$

Thus

$$
\boxed{
i_m=(1+i)^{1/12}-1.
}
$$

This frequency consistency is fundamental throughout the chapter.

---

## 5. 4.3 Annuities Payable Less Frequently Than Interest Is Convertible

Suppose interest converts $m$ times during each payment interval. For example, interest may be convertible monthly while payments are annual.

Let $j$ be the effective rate per interest conversion period. Then the effective rate over one payment period is

$$
1+i_p=(1+j)^m.
$$

A level annuity with one payment per payment period can then be valued using

$$
a_{\overline{n}|i_p}
=
\frac{1-(1+i_p)^{-n}}{i_p}.
$$

### 5.1 Timeline interpretation

If payments occur every $m$ conversion periods, the discounted payments are

$$
v_j^m,\;
v_j^{2m},\;
\ldots,\;
v_j^{nm}.
$$

Define

$$
v_p=v_j^m.
$$

Then the stream becomes a geometric series in $v_p$, exactly the same algebra as a standard annuity-immediate.

### 5.2 Key lesson

The annuity factor should use the **effective rate over one payment interval**, not the quoted nominal rate and not necessarily the rate per interest conversion period.

> [!WARNING] Frequency Trap
> If payments are annual but rate is nominal convertible monthly, do not insert $i^{(12)}$ or $i^{(12)}/12$ directly into an annual annuity factor. First form the annual accumulation factor.

---

## 6. 4.4 Annuities Payable More Frequently Than Interest Is Convertible

This case is more subtle. Suppose there are $m$ payments during one interest conversion period.

A common actuarial convention is to scale each payment to $1/m$, so that total payments over one interest conversion period sum to 1. Kellison develops notation for these frequently payable annuities.

### 6.1 Annuity-immediate payable $m$-thly

For $n$ interest periods, payments of $1/m$ occur at

$$
\frac{1}{m},\frac{2}{m},\ldots,n.
$$

The present value is denoted by an $m$-thly annuity factor, commonly written

$$
a_{\overline{n}|}^{(m)}
$$

in actuarial notation.

Under compound accumulation with annual/effective period rate $i$, define nominal rate convertible $m$ times:

$$
i^{(m)}
=
m\left[(1+i)^{1/m}-1\right].
$$

Then the present value relation is

$$
\boxed{
a_{\overline{n}|}^{(m)}
=
\frac{1-v^n}{i^{(m)}}.
}
$$

The intuition is identical to the ordinary formula, except that:

- each subperiod payment is $1/m$;
- the relevant geometric ratio is $(1+i)^{-1/m}$;
- the denominator naturally becomes the nominal rate $i^{(m)}$.

### 6.2 Annuity-due payable $m$-thly

Payments occur at the beginning of each $1/m$ subinterval.

Using nominal discount rate convertible $m$ times,

$$
d^{(m)}
=
m\left[1-(1+i)^{-1/m}\right],
$$

the corresponding factor is

$$
\boxed{
\ddot{a}_{\overline{n}|}^{(m)}
=
\frac{1-v^n}{d^{(m)}}.
}
$$

### 6.3 Accumulated values

As in Chapter 3, PV and AV of the same stream are connected by total accumulation over the term:

$$
s_{\overline{n}|}^{(m)}
=
(1+i)^n a_{\overline{n}|}^{(m)},
$$

$$
\ddot{s}_{\overline{n}|}^{(m)}
=
(1+i)^n \ddot{a}_{\overline{n}|}^{(m)}
$$

when focal-date conventions are matched.

### 6.4 Ordering of annuity values

For positive interest, moving payments earlier increases PV. As payment frequency becomes finer while annual total payment remains fixed, the annuity-immediate and annuity-due values move toward a common continuous-payment limit.

This prepares Section 4.5.

---

## 7. 4.5 Continuous Annuities

A continuous annuity is obtained as the limit of an annuity payable increasingly frequently with total payment rate fixed.

### 7.1 Level continuous payment rate

Suppose payment occurs continuously at rate 1 per unit time from $0$ to $n$.

Under constant force of interest $\delta$, an infinitesimal payment during $[t,t+dt]$ is

$$
dt.
$$

Its present value is

$$
e^{-\delta t}dt.
$$

Thus

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
\frac{1-e^{-\delta n}}{\delta}.
}
$$

Since

$$
v^n=e^{-\delta n},
$$

we can write

$$
\boxed{
\bar{a}_{\overline{n}|}
=
\frac{1-v^n}{\delta}.
}
$$

### 7.2 Accumulated value

Value at time $n$:

$$
\bar{s}_{\overline{n}|}
=
\int_0^n e^{\delta(n-t)}\,dt.
$$

Hence

$$
\boxed{
\bar{s}_{\overline{n}|}
=
\frac{e^{\delta n}-1}{\delta}.
}
$$

and

$$
\bar{s}_{\overline{n}|}
=
e^{\delta n}\bar{a}_{\overline{n}|}.
$$

### 7.3 Continuous factor as frequency limit

As $m\to\infty$,

$$
i^{(m)}\to\delta,
$$

so

$$
a_{\overline{n}|}^{(m)}
=
\frac{1-v^n}{i^{(m)}}
\longrightarrow
\frac{1-v^n}{\delta}
=
\bar{a}_{\overline{n}|}.
$$

This provides a conceptual bridge between discrete annuities and continuous payment streams.

### 7.4 Ordering

For $i>0$ and equal total annual payment rate:

$$
a_{\overline{n}|}
<
\bar{a}_{\overline{n}|}
<
\ddot{a}_{\overline{n}|}.
$$

Reason:

- annuity-immediate pays latest;
- annuity-due pays earliest;
- continuous payment is spread between them.

### 7.5 Differential-equation interpretation

If a fund receives continuous inflow at rate 1 and earns force $\delta$, its balance $B(t)$ satisfies

$$
B'(t)=\delta B(t)+1
$$

for accumulation problems, with appropriate initial condition.

This gives the same result as the integral approach and highlights that continuous annuity valuation is fundamentally a cash-flow-rate problem.

---

## 8. 4.6 Payments Varying in Arithmetic Progression

Kellison next drops the level-payment assumption.

A general arithmetic payment sequence can be written

$$
P,\;
P+Q,\;
P+2Q,\;
\ldots,\;
P+(n-1)Q.
$$

This is useful because it decomposes into:

- a level annuity of amount $P$;
- plus $Q$ times an increasing arithmetic pattern.

### 8.1 Increasing annuity-immediate

Define

$$
(Ia)_{\overline{n}|}
=
v+2v^2+\cdots+n v^n.
$$

The standard identity is

$$
\boxed{
(Ia)_{\overline{n}|}
=
\frac{\ddot{a}_{\overline{n}|}-n v^n}{i}.
}
$$

Equivalent forms may be obtained using

$$
\ddot{a}_{\overline{n}|}=(1+i)a_{\overline{n}|}.
$$

#### Derivation idea

Let

$$
X=v+2v^2+\cdots+n v^n.
$$

Multiply by $(1+i)=1/v$:

$$
(1+i)X
=
1+2v+\cdots+n v^{n-1}.
$$

Subtract $X$:

$$
iX
=
1+v+\cdots+v^{n-1}-n v^n
=
\ddot{a}_{\overline{n}|}-n v^n.
$$

Hence the formula.

The important reusable technique is:

> **Multiply a weighted geometric series by its inverse ratio, then subtract.**

### 8.2 Increasing accumulated value

Accumulated value at $n$ is

$$
(Is)_{\overline{n}|}
=
(1+i)^n (Ia)_{\overline{n}|}.
$$

### 8.3 Decreasing annuity-immediate

Define payments

$$
n,n-1,\ldots,1.
$$

A useful identity is

$$
\boxed{
(Da)_{\overline{n}|}
=
\frac{n-i a_{\overline{n}|}}{i}
}
$$

under the standard actuarial convention for decreasing annuity-immediate.

Another particularly intuitive relation pairs increasing and decreasing annuities:

$$
(Ia)_{\overline{n}|}
+
(Da)_{\overline{n}|}
=
(n+1)a_{\overline{n}|}.
$$

Why? At every payment date, the increasing and decreasing payments sum to $n+1$.

### 8.4 General arithmetic payment pattern

For

$$
P+(k-1)Q
$$

at time $k$,

$$
PV
=
P a_{\overline{n}|}
+
Q\left[
(Ia)_{\overline{n}|}-a_{\overline{n}|}
\right].
$$

Equivalently, depending on indexing, decompose the pattern into the exact level and increasing components that match the first payment.

> [!WARNING] Indexing Trap
> An arithmetic annuity may start $P,P+Q,\ldots$ or $P+Q,P+2Q,\ldots$. Write the first three payments explicitly before selecting a formula.

---

## 9. 4.7 Payments Varying in Geometric Progression

Suppose first payment is $P$ at time 1 and payments grow at rate $g$:

$$
P,\;
P(1+g),\;
P(1+g)^2,\ldots,
P(1+g)^{n-1}.
$$

Present value:

$$
PV
=
\sum_{k=1}^{n}
P(1+g)^{k-1}v^k.
$$

Factor $Pv$:

$$
PV
=
Pv
\sum_{k=0}^{n-1}
\left[(1+g)v\right]^k.
$$

Thus, if $(1+g)v\neq1$,

$$
\boxed{
PV
=
Pv
\frac{1-\left[(1+g)v\right]^n}
{1-(1+g)v}.
}
$$

Since

$$
1-(1+g)v
=
\frac{i-g}{1+i},
$$

this simplifies to

$$
\boxed{
PV
=
P\frac{1-\left(\frac{1+g}{1+i}\right)^n}{i-g}.
}
$$

### 9.1 Special case $g=i$

If growth rate equals interest rate:

$$
(1+g)v=1.
$$

Then every discounted payment has the same present value $Pv$, so

$$
\boxed{
PV=nPv
=
\frac{nP}{1+i}.
}
$$

The usual formula appears as $0/0$ when $g=i$, so the special case must be handled directly or by taking a limit.

### 9.2 Accumulated value

Multiply present value by $(1+i)^n$ to value the same stream at time $n$.

### 9.3 Interpretation

Geometric growth competes with discounting through the ratio

$$
\boxed{
q=\frac{1+g}{1+i}.
}
$$

- $q<1$: discounted payments decline over time;
- $q=1$: discounted payments are equal;
- $q>1$: later discounted payments are larger.

This ratio is often more intuitive than memorizing the final formula.

---

## 10. 4.8 More General Varying Annuities

For arbitrary discrete payments

$$
R_1,R_2,\ldots,R_n
$$

at times $1,2,\ldots,n$, no special formula is required.

Present value:

$$
\boxed{
PV_0
=
\sum_{k=1}^{n}R_k v^k.
}
$$

Accumulated value at $n$:

$$
\boxed{
AV_n
=
\sum_{k=1}^{n}
R_k(1+i)^{n-k}.
}
$$

### 10.1 Decomposition principle

Whenever the sequence can be expressed as a combination of known patterns, decompose:

$$
R_k
=
\text{level part}
+
\text{arithmetic part}
+
\text{geometric or other part}.
$$

Then value each component separately.

### 10.2 Recursion

A fund receiving payments $R_k$ at the end of each period satisfies

$$
B_k
=
B_{k-1}(1+i)+R_k.
$$

This recursion is often computationally easier for irregular series.

### 10.3 Difference method for arithmetic changes

Kellison develops useful manipulation techniques where adjacent payment differences are simpler than the payments themselves. This is the discrete analogue of the differentiation/integration ideas appearing in continuous varying annuities.

---

## 11. 4.9 Continuously Varying Annuities

Now payment is not a sequence of lump sums but a **payment rate function**.

Let

$$
A(t)
$$

be the amount paid per unit time at time $t$.

Then payment over the small interval $[t,t+dt]$ is approximately

$$
A(t)\,dt.
$$

### 11.1 Present value

Under constant force $\delta$:

$$
\boxed{
PV_0
=
\int_0^n A(t)e^{-\delta t}\,dt.
}
$$

This is the continuous analogue of

$$
\sum R_k v^k.
$$

### 11.2 Accumulated value

At time $n$:

$$
\boxed{
AV_n
=
\int_0^n A(t)e^{\delta(n-t)}\,dt.
}
$$

### 11.3 Continuous increasing annuity

For payment rate

$$
A(t)=t,
$$

the present value is

$$
(\overline{I a})_{\overline{n}|}
=
\int_0^n t e^{-\delta t}\,dt.
$$

Integration by parts gives

$$
\int_0^n t e^{-\delta t}\,dt
=
\frac{\bar{a}_{\overline{n}|}-n v^n}{\delta}.
$$

Thus

$$
\boxed{
(\overline{I a})_{\overline{n}|}
=
\frac{\bar{a}_{\overline{n}|}-n v^n}{\delta}.
}
$$

The structure mirrors the discrete increasing-annuity formula:

$$
(Ia)_{\overline{n}|}
=
\frac{\ddot{a}_{\overline{n}|}-n v^n}{i}.
$$

This parallel is one of the most useful conceptual bridges in Chapter 4.

### 11.4 Linear payment rate

If

$$
A(t)=P+Qt,
$$

then

$$
PV_0
=
P\bar{a}_{\overline{n}|}
+
Q(\overline{I a})_{\overline{n}|}.
$$

Again, decomposition is the central technique.

### 11.5 General valuation perspective

Discrete and continuous varying annuities are the same idea in two forms:

$$
\text{Discrete: }
PV=\sum R_k v^k,
$$

$$
\text{Continuous: }
PV=\int A(t)v^t\,dt.
$$

The integral is not a separate theory; it is the limiting valuation of increasingly small cash flows.

---

## 12. 4.10 Summary of Results

Kellison ends the chapter by organizing the relationships among level annuities under different payment frequencies.

The structural pattern is:

| Payment Pattern | Natural Denominator | Core PV Form |
|---|---|---|
| annual/immediate | $i$ | $(1-v^n)/i$ |
| annual/due | $d$ | $(1-v^n)/d$ |
| $m$-thly/immediate | $i^{(m)}$ | $(1-v^n)/i^{(m)}$ |
| $m$-thly/due | $d^{(m)}$ | $(1-v^n)/d^{(m)}$ |
| continuous | $\delta$ | $(1-v^n)/\delta$ |

This table is not a coincidence. In each case, the denominator is the rate measure naturally associated with the timing convention of the payments.

As payment frequency rises:

$$
i^{(m)}\to\delta,
\qquad
d^{(m)}\to\delta,
$$

so the corresponding annuity values converge to the continuous factor.

---

## 13. Formula Family — Payment Frequency

### Ordinary annuity-immediate

$$
\boxed{
a_{\overline{n}|}
=
\frac{1-v^n}{i}
}
$$

### Ordinary annuity-due

$$
\boxed{
\ddot{a}_{\overline{n}|}
=
\frac{1-v^n}{d}
}
$$

### $m$-thly annuity-immediate

$$
\boxed{
a_{\overline{n}|}^{(m)}
=
\frac{1-v^n}{i^{(m)}}
}
$$

### $m$-thly annuity-due

$$
\boxed{
\ddot{a}_{\overline{n}|}^{(m)}
=
\frac{1-v^n}{d^{(m)}}
}
$$

### Continuous annuity

$$
\boxed{
\bar{a}_{\overline{n}|}
=
\frac{1-v^n}{\delta}
}
$$

These formulas are easiest to remember as one structural family rather than five unrelated equations.

---

## 14. Formula Family — Varying Payments

### Arithmetic increasing

$$
\boxed{
(Ia)_{\overline{n}|}
=
\frac{\ddot{a}_{\overline{n}|}-n v^n}{i}
}
$$

### Geometric growth

For first payment $P$ at $t=1$ and growth $g$:

$$
\boxed{
PV
=
P\frac{1-\left(\frac{1+g}{1+i}\right)^n}{i-g},
\qquad g\neq i.
}
$$

Special case:

$$
\boxed{
g=i
\Rightarrow
PV=\frac{nP}{1+i}.
}
$$

### Arbitrary discrete payments

$$
\boxed{
PV_0=\sum_{k=1}^{n}R_kv^k.
}
$$

### Arbitrary continuous payment rate

$$
\boxed{
PV_0
=
\int_0^n A(t)e^{-\delta t}\,dt.
}
$$

---

## 15. Worked Reasoning Patterns

### Pattern A — Payment frequency does not match quoted rate

**Situation**

Payments quarterly, annual effective rate $i$.

**Step 1 — Convert**

$$
1+i_q=(1+i)^{1/4}.
$$

**Step 2 — Use quarterly annuity factor**

If there are $N$ quarterly payments:

$$
PV=R a_{\overline{N}|i_q}.
$$

**Check**

Exponent and rate basis both use quarters.

---

### Pattern B — Nominal convertible rate with annual payments

Suppose rate is $i^{(12)}$ convertible monthly and payments are annual.

Monthly rate:

$$
j=\frac{i^{(12)}}{12}.
$$

Annual effective rate:

$$
i_a=(1+j)^{12}-1.
$$

Then:

$$
PV=R a_{\overline{n}|i_a}.
$$

---

### Pattern C — Arithmetic increasing payments

Payments are

$$
P,\;
P+Q,\;
\ldots,
P+(n-1)Q.
$$

Decompose:

$$
P+(k-1)Q
=
(P-Q)+Qk.
$$

Thus

$$
PV
=
(P-Q)a_{\overline{n}|}
+
Q(Ia)_{\overline{n}|}.
$$

This decomposition prevents indexing errors.

---

### Pattern D — Geometric payments

Write first three discounted payments:

$$
Pv,\quad
P(1+g)v^2,\quad
P(1+g)^2v^3.
$$

Their common ratio is

$$
q=(1+g)v.
$$

Then sum as a geometric series.

---

### Pattern E — Continuous payment rate

For $A(t)$:

1. write differential payment $A(t)dt$;
2. discount to focal date with $e^{-\delta t}$;
3. integrate over actual payment interval.

$$
PV=\int A(t)e^{-\delta t}dt.
$$

---

## 16. Important Distinctions

> [!IMPORTANT] Interest Conversion Period vs Payment Period
> They are not automatically the same. Annuity formulas require a rate consistent with the interval between payments.

> [!IMPORTANT] More Frequent Payments vs More Frequent Compounding
> Increasing payment frequency changes cash-flow timing. Increasing compounding frequency changes the interest process. They are different operations.

> [!IMPORTANT] Payment Amount vs Payment Rate
> In continuous annuities, $A(t)$ is currency per unit time. The actual infinitesimal cash flow is $A(t)dt$.

> [!IMPORTANT] Arithmetic vs Geometric Variation
> Arithmetic: constant **difference**.  
> Geometric: constant **ratio**.

> [!IMPORTANT] $g=i$ in Geometric Annuity
> The generic formula has a removable singularity. Treat the case directly: every discounted payment is equal.

> [!IMPORTANT] Continuous Interest vs Continuous Payments
> A force of interest $\delta$ describes how money grows continuously. A continuous annuity describes how payments flow continuously. Either concept can appear without confusing the other.

---

## 17. Limiting and Sanity Checks

### Zero-interest limit

As $i\to0$,

$$
a_{\overline{n}|}\to n,
$$

because the PV of $n$ unit payments approaches their undiscounted sum.

Similarly,

$$
\bar{a}_{\overline{n}|}
\to n
$$

as $\delta\to0$.

### Frequency limit

As $m\to\infty$:

$$
a_{\overline{n}|}^{(m)}
\to
\bar{a}_{\overline{n}|}.
$$

### Timing order

For positive rate:

$$
a_{\overline{n}|}
<
\bar{a}_{\overline{n}|}
<
\ddot{a}_{\overline{n}|}.
$$

### Geometric growth

If $g<i$, discounting dominates growth and later discounted payments tend to shrink.

If $g>i$, growth dominates discounting and later discounted payments can become larger.

---

## 18. CF1 Connection Map

```text
Chapter 3 — Basic annuities
        ↓
Chapter 4 — More general annuities
        ├─ payment-rate frequency mismatch
        │       ↓
        │   [[2.1 Annuity-Immediate and Annuity-Due]]
        │   [[2.6 Varying Interest Rates]]
        │
        ├─ continuous payment
        │       ↓
        │   [[2.4 Continuous Annuities]]
        │
        ├─ arithmetic progression
        │       ↓
        │   [[2.3 Varying Annuities]]
        │
        ├─ geometric progression
        │       ↓
        │   [[2.3 Varying Annuities]]
        │
        └─ arbitrary discrete/continuous streams
                ↓
            general equation-of-value framework
```

---

## 19. Quick Reading Review

- First match the rate period to the payment period.
- Payments less frequently than compounding can usually be handled by converting to an effective rate per payment interval.
- For payments more frequently than the basic interest period, actuarial $m$-thly annuity notation is useful.
- $a_{\overline{n}|}^{(m)}=(1-v^n)/i^{(m)}$ for the standard $1/m$-payment convention.
- $\ddot{a}_{\overline{n}|}^{(m)}=(1-v^n)/d^{(m)}$.
- Continuous annuity is the limit of increasingly frequent payments.
- $\bar{a}_{\overline{n}|}=(1-v^n)/\delta$.
- Arithmetic varying annuities are best handled by decomposition and weighted-geometric-series identities.
- Geometric varying annuities are ordinary geometric series after discounting.
- The critical ratio is $(1+g)/(1+i)$.
- If $g=i$, each discounted geometric payment is equal.
- Arbitrary varying annuities can always be valued from $\sum R_kv^k$.
- Continuous varying annuities replace the sum by $\int A(t)e^{-\delta t}dt$.
- The same underlying equation-of-value logic connects all of Chapter 4.

---

## 20. Compression Notes

### Retained in Detail

- differing payment and interest conversion periods;
- annuities payable less/more frequently than interest conversion;
- $m$-thly annuity logic;
- continuous annuity derivation and interpretation;
- arithmetic increasing/decreasing annuities;
- geometric varying annuities;
- general varying annuity valuation;
- continuously varying payment rates;
- key limiting relationships.

### Compressed

- repeated numerical illustrations of equivalent-rate conversion;
- tables of repeated annuity factors;
- calculator/table operational detail;
- multiple examples with identical arithmetic/geometric-series mechanics.

### Omitted / Supporting Only

- exercise sets;
- long lookup-table procedures;
- appendix formulas that duplicate the same structural identities without adding a new conceptual method.

---

## Source Traceability

- **Primary textbook:** Stephen G. Kellison, *The Theory of Interest*, 3rd ed., Chapter 4, “More general annuities.”
- **Chapter structure verified from the supplied Kellison scan:** Sections 4.1–4.10.
- **CF1 scope:** Topik 2 — Anuitas dan Nilai Arus Kas; Kellison Chapters 3–4 are official references.
- **No outside source was used to expand the mathematical content.**
