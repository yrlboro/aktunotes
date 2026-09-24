---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "5"
chapter_title: "Amortization schedules and sinking funds"
cf1_topics: ["4.1", "4.2", "4.3"]
cf1_relevance: "Medium"
source_scope: "Kellison Chapter 5, Sections 5.1-5.8"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison, Loans, Amortization, SinkingFund]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 5: Amortization Schedules and Sinking Funds

> [!ABSTRACT] Chapter in One View
> Chapter 5 memindahkan theory of annuities ke **loan repayment**. Kellison membandingkan dua metode utama: **amortization method**, ketika setiap installment langsung membayar interest dan mengurangi principal, dan **sinking fund method**, ketika borrower membayar interest atas loan secara terpisah sambil mengakumulasi dana untuk melunasi principal pada maturity. Chapter ini membangun tiga cara melihat outstanding loan balance—**prospective**, **retrospective**, dan **recursion**—lalu mengembangkan amortization schedule, pemisahan installment menjadi interest dan principal, hubungan geometrik principal portions, sinking-fund schedules, kasus loan rate berbeda dari sinking-fund rate, mismatch payment/conversion frequency, varying payments, continuous repayment, dan step-rate principal structures. Untuk CF1, inti chapter langsung mendukung [[4.1 Loan Terminology]], [[4.2 Amortization Method]], dan [[4.3 Sinking Fund Method]].

## 1. Why This Chapter Exists

Chapter 3–4 memberi tools untuk menilai annuities. Chapter 5 menggunakannya untuk menjawab pertanyaan praktis pada loan:

1. Berapa **outstanding loan balance** pada suatu waktu?
2. Berapa bagian suatu payment yang merupakan **interest** dan berapa yang merupakan **principal repayment**?
3. Bagaimana struktur pembayaran berubah jika principal dibangun melalui **sinking fund**?
4. Bagaimana jika payment frequency, interest conversion frequency, atau payment amount tidak sederhana?

Kellison menekankan bahwa formula loan bukan teori baru. Semuanya berasal dari equation of value dan annuity relationships.

---

## 2. Chapter Map

- **5.1 Introduction** — amortization vs sinking fund.
- **5.2 Finding the Outstanding Loan Balance** — prospective and retrospective methods.
- **5.3 Amortization Schedules** — interest/principal split, recursion, schedule mechanics.
- **5.4 Sinking Funds** — separate accumulation fund and comparison with amortization.
- **5.5 Differing Payment Periods and Interest Conversion Periods** — frequency mismatch.
- **5.6 Varying Series of Payments** — nonlevel repayment streams.
- **5.7 Amortization with Continuous Payments** — continuous payment rate and differential formulation.
- **5.8 Step-Rate Amounts of Principal** — piecewise loan rates applied to blocks of outstanding balance.

| Textbook Section | CF1 Relevance | Connected Note |
|---|---|---|
| 5.1 | Core | [[4.1 Loan Terminology]] |
| 5.2–5.3 | Core | [[4.2 Amortization Method]] |
| 5.4 | Core | [[4.3 Sinking Fund Method]] |
| 5.5–5.6 | Core/Supporting | [[4.2 Amortization Method]], [[4.3 Sinking Fund Method]] |
| 5.7–5.8 | Supporting | Loan mechanics; special repayment structures |

---

## 3. 5.1 Introduction — Two Ways to Repay a Loan

### Amortization method

Borrower repays the lender by a sequence of installments. Each payment contains:

$$
\text{Payment}
=
\text{Interest on outstanding balance}
+
\text{Principal repaid}.
$$

Because principal is repaid over time, the outstanding loan balance normally declines.

### Sinking fund method

Borrower:

1. pays interest on the **full loan principal** to the lender during the term; and
2. makes deposits into a separate **sinking fund** that accumulates to the loan principal at maturity.

The loan principal itself is generally not reduced before maturity. Instead, the sinking fund grows as an offsetting asset.

> [!IMPORTANT] Important Distinction
> In an amortized loan, principal is directly reduced by installments.  
> In a sinking-fund loan, the debt may remain unchanged while a separate fund accumulates.

---

## 4. 5.2 Finding the Outstanding Loan Balance

Let an original loan be repaid by level payments of 1 at the end of each period for $n$ periods. With effective interest rate $i$ per payment period,

$$
L=a_{\overline{n}|}.
$$

Suppose $t$ payments have been made, with $0<t<n$.

Kellison develops two equivalent views of the balance.

### 4.1 Prospective method

The outstanding loan balance immediately after payment $t$ equals the present value at time $t$ of all future required payments.

There are $n-t$ payments remaining:

$$
\boxed{
B_t^{P}=a_{\overline{n-t}|}.
}
$$

For level payment $R$:

$$
\boxed{
B_t^{P}=R\,a_{\overline{n-t}|}.
}
$$

This method **looks forward**.

### 4.2 Retrospective method

Start with the original loan and accumulate it to time $t$, then subtract the accumulated value of payments already made:

$$
\boxed{
B_t^{R}
=
L(1+i)^t
-
R s_{\overline{t}|}.
}
$$

For the unit-payment loan $L=a_{\overline{n}|}$,

$$
\boxed{
B_t^{R}
=
a_{\overline{n}|}(1+i)^t-s_{\overline{t}|}.
}
$$

This method **looks backward**.

### 4.3 Why they are equal

Both formulas value the same financial position at the same time. Algebraically,

$$
R a_{\overline{n-t}|}
=
L(1+i)^t-Rs_{\overline{t}|}.
$$

Conceptually:

> Accumulated value of original loan  
> minus accumulated value of past payments  
> equals present value of future payments.

Hence:

$$
\boxed{
B_t^{P}=B_t^{R}.
}
$$

### 4.4 Choosing the more efficient method

- If future payments are simple/known: **prospective** is usually shorter.
- If original loan and past payments are simple/known: **retrospective** may be easier.
- If several successive balances are needed: use **recursion** from Section 5.3.

---

## 5. Textbook Example — Prospective vs Retrospective Balance

Kellison considers a repayment pattern with 10 payments of 2,000 followed by 10 payments of 1,000, at nominal interest convertible semiannually, and asks for the balance after five payments.

The point is not the particular numbers but the equivalence of the methods:

### Prospective view

At the balance date, value only the payments still due:

$$
B_t
=
\text{PV of remaining 2,000 payments}
+
\text{PV of later 1,000 payments}.
$$

### Retrospective view

Accumulate the original loan to the balance date, then subtract accumulated past payments:

$$
B_t
=
L(1+i)^t
-
\text{AV of payments already made}.
$$

Both methods produce the same outstanding balance.

> [!NOTE] Textbook lesson
> Method choice is computational, not conceptual. The outstanding balance is unique.

---

## 6. 5.3 Amortization Schedules

An **amortization schedule** records, for each payment period:

- payment amount;
- interest paid;
- principal repaid;
- outstanding loan balance after payment.

Let $B_{t-1}$ be the balance immediately after payment $t-1$.

During period $t$, interest accrues:

$$
\boxed{
I_t=iB_{t-1}.
}
$$

If payment is $R_t$, then principal repaid is

$$
\boxed{
P_t=R_t-I_t.
}
$$

The new balance is

$$
\boxed{
B_t=B_{t-1}-P_t.
}
$$

Combining:

$$
\boxed{
B_t=B_{t-1}(1+i)-R_t.
}
$$

This is Kellison's **recursion method**.

### 6.1 Standard level-payment loan

For constant payment $R$:

$$
B_t=B_{t-1}(1+i)-R.
$$

Three equivalent methods are therefore available:

1. prospective;
2. retrospective;
3. recursion.

### 6.2 Principal pattern for a level-payment loan

For a unit-payment loan, Kellison derives

$$
I_t=1-v^{n-t+1},
$$

and

$$
P_t=v^{n-t+1}.
$$

For level payment $R$:

$$
\boxed{
P_t=R v^{n-t+1}.
}
$$

Thus successive principal portions satisfy

$$
\boxed{
P_{t+1}=(1+i)P_t.
}
$$

Principal repayments form a geometric progression with common ratio $1+i$.

Since total payment is fixed:

- interest portion declines;
- principal portion increases.

### 6.3 Total principal and interest

Across the complete loan:

$$
\sum_{t=1}^{n}P_t=L.
$$

Total interest equals

$$
\boxed{
\text{Total interest}
=
\sum R_t-L.
}
$$

For level payment $R$:

$$
\text{Total interest}=nR-L.
$$

### 6.4 Interest over a subset of payments

The interest paid during a block of periods can be found as

$$
\boxed{
\text{Interest during interval}
=
\text{Total payments during interval}
-
\text{Decrease in outstanding balance}.
}
$$

This often avoids computing every interest component separately.

---

## 7. Representative Amortization Schedule

Kellison constructs a schedule for a $1,000$ loan repaid over four years at 8%.

The level payment is

$$
R=\frac{1000}{a_{\overline{4}|0.08}}
\approx 301.92.
$$

The schedule illustrates the mechanics:

| Year | Payment | Interest | Principal | Balance |
|---:|---:|---:|---:|---:|
| 0 | — | — | — | 1,000.00 |
| 1 | 301.92 | 80.00 | 221.92 | 778.08 |
| 2 | 301.92 | 62.25 | 239.67 | 538.41 |
| 3 | 301.92 | 43.07 | 258.85 | 279.56 |
| 4 | 301.92 | 22.36 | 279.56 | 0 |

The essential progression is:

$$
221.92(1.08)\approx239.67,
$$

then

$$
239.67(1.08)\approx258.85.
$$

> [!IMPORTANT] Interpretation
> The total installment can be constant while its economic composition changes every period.

---

## 8. Irregular Final Payments

Kellison notes that practical loans may require a smaller final payment because level payments rounded to cents do not exactly amortize the loan.

The correct final payment is determined by:

1. find the balance immediately before the final payment;
2. include the accrued interest to the payment date;
3. pay exactly the amount needed to set the balance to zero.

This is the mathematical basis behind **drop payments** and related final-payment adjustments.

---

## 9. 5.4 Sinking Funds

### 9.1 Basic structure

Suppose a loan of amount $L$ is outstanding for $n$ periods.

The borrower pays:

- loan interest at rate $i$;
- sinking fund deposit $D$ into a fund earning rate $j$.

If sinking-fund deposits are made at the end of each period and must accumulate to $L$:

$$
D s_{\overline{n}|j}=L.
$$

Therefore,

$$
\boxed{
D=\frac{L}{s_{\overline{n}|j}}.
}
$$

Total periodic cash outflow is

$$
\boxed{
Li+\frac{L}{s_{\overline{n}|j}}.
}
$$

### 9.2 When $i=j$

Kellison shows the important identity

$$
\frac{1}{a_{\overline{n}|}}
=
i+\frac{1}{s_{\overline{n}|}}.
$$

Therefore, if the loan rate and sinking-fund rate are the same:

$$
\boxed{
\frac{L}{a_{\overline{n}|}}
=
Li+\frac{L}{s_{\overline{n}|}}.
}
$$

So the total periodic payment under the sinking-fund method equals the level payment under the amortization method.

This is a deep equivalence: the two methods distribute principal repayment differently, but when both rates are equal their total periodic burden is identical.

---

## 10. Sinking Fund Schedule vs Amortization Schedule

Kellison compares the two schedules for the same $1,000$ four-year, 8% setting.

For the sinking fund:

$$
D=\frac{1000}{s_{\overline{4}|0.08}}
\approx221.92.
$$

Loan interest each year remains:

$$
1000(0.08)=80.
$$

So total annual outflow is:

$$
80+221.92=301.92,
$$

equal to the amortization payment.

### Important correspondences

Kellison highlights:

1. **Total periodic payment** is the same when $i=j$.
2. **Net interest cost** under sinking fund equals interest portion under amortization.
3. **Increment in sinking fund** equals principal repaid in the corresponding amortization schedule.
4. **Loan minus sinking fund balance** equals amortized outstanding balance.

If $F_t$ is sinking fund balance,

$$
\boxed{
L-F_t=B_t^{\text{amortized}}.
}
$$

This makes the two methods economically equivalent under equal rates.

---

## 11. Sinking Fund Rate Different from Loan Rate

Usually $j\neq i$.

The borrower’s periodic cost is

$$
Li+\frac{L}{s_{\overline{n}|j}}.
$$

Kellison defines an equivalent amortization rate $i'$ by

$$
\boxed{
\frac{L}{a_{\overline{n}|i'}}
=
Li+\frac{L}{s_{\overline{n}|j}}.
}
$$

For unit principal:

$$
\boxed{
\frac{1}{a_{\overline{n}|i'}}
=
i+\frac{1}{s_{\overline{n}|j}}.
}
$$

Using

$$
\frac{1}{a_{\overline{n}|j}}
=
j+\frac{1}{s_{\overline{n}|j}},
$$

we obtain

$$
\boxed{
\frac{1}{a_{\overline{n}|i'}}
=
\frac{1}{a_{\overline{n}|j}}+(i-j).
}
$$

Kellison also gives an approximation:

$$
\boxed{
i'
\approx
i+\frac12(i-j)
}
$$

for many ordinary settings.

Interpretation:

- if $i>j$, the effective burden is above $i$;
- if sinking fund earns less than the loan rate, accumulating principal replacement is relatively expensive.

---

## 12. Replacement of Capital Insight

A lender may receive installments and wish to separate:

- **investment income**, and
- **return/replacement of capital**.

Under amortization, principal portions represent capital returned.

If principal portions are reinvested at another rate, the lender’s actual overall yield can differ from the contractual loan rate.

This is why Kellison distinguishes:

> interest received on the loan  
> from  
> yield on the lender’s complete investment experience.

[CF1 SUPPORTING CONTEXT] This distinction becomes useful in yield problems but the core CF1 requirement remains loan and sinking-fund mechanics.

---

## 13. 5.5 Differing Payment Periods and Interest Conversion Periods

If payments occur at one frequency while interest is convertible at another, Kellison recommends returning to basic principles.

### General two-step approach

1. Convert the stated rate to an effective rate with the same frequency as the payments.
2. Construct the amortization/sinking-fund calculation using that rate.

For example, monthly payments with annual effective rate $i$ require monthly rate

$$
i_m=(1+i)^{1/12}-1.
$$

If nominal rate $i^{(m)}$ is convertible $m$ times annually and payments have another frequency, derive the equivalent rate for the actual payment interval.

> [!WARNING] Frequency Trap
> The interest portion of a monthly payment must use the **monthly effective rate**, not an annual effective or nominal annual rate directly.

### Sinking funds may involve three frequencies

Potentially different:

1. loan-interest payment frequency;
2. sinking-fund deposit frequency;
3. sinking-fund interest conversion frequency.

Each account must be valued on its own correct basis.

---

## 14. 5.6 Varying Series of Payments

Suppose a loan of amount $L$ is repaid through nonlevel installments

$$
R_1,R_2,\ldots,R_n.
$$

Then the original equation is

$$
\boxed{
L=\sum_{t=1}^{n}v^tR_t.
}
$$

At time $t$, prospective balance is

$$
\boxed{
B_t
=
\sum_{k=t+1}^{n}R_kv^{k-t}.
}
$$

Recursion remains

$$
\boxed{
B_t=B_{t-1}(1+i)-R_t.
}
$$

Interest and principal:

$$
I_t=iB_{t-1},
$$

$$
P_t=R_t-I_t.
$$

Thus level-payment formulas are merely special cases.

### Arithmetic or geometric installments

If $R_t$ follows an arithmetic or geometric progression, Chapter 4 varying-annuity formulas can be used to value the remaining payments.

This creates the bridge:

```text
Varying annuities (Chapter 4)
        ↓
Varying loan installments (Chapter 5)
```

---

## 15. 5.7 Amortization with Continuous Payments

Kellison extends amortization to a continuous payment stream.

Suppose:

- loan amount at time 0 is $a_{\overline{n}|}$ under continuous-payment notation;
- payments occur continuously at rate 1;
- constant force of interest is $\delta$.

Let $B_t$ be outstanding balance.

### Prospective balance

At time $t$:

$$
\boxed{
B_t^{P}
=
\bar a_{\overline{n-t}|}.
}
$$

### Retrospective balance

Accumulated original loan minus accumulated continuous payments:

$$
\boxed{
B_t^{R}
=
a_0e^{\delta t}
-
\bar s_{\overline{t}|}.
}
$$

### Instantaneous interest and principal rates

If payment rate is 1:

$$
\boxed{
I_t=\delta B_t,
}
$$

and the instantaneous principal repayment rate is

$$
\boxed{
P_t=1-\delta B_t.
}
$$

This is the continuous analogue of

$$
I_t=iB_{t-1},
\qquad
P_t=R-I_t.
$$

### Differential equation

Balance changes according to

$$
\boxed{
\frac{dB_t}{dt}
=
\delta B_t-1.
}
$$

Interest continuously increases the balance; continuous payments decrease it.

[CF1 SUPPORTING CONTEXT] Continuous annuities are explicitly in Topik 2, but continuous loan amortization itself is more specialized than the main loan learning outcomes.

---

## 16. 5.8 Step-Rate Amounts of Principal

Kellison considers practical loans where different portions of the outstanding balance are charged different rates.

Example structure:

- first block of principal earns rate $i_1$;
- next block earns rate $i_2$;
- possibly further blocks at other rates.

### Why this is not one ordinary amortized loan

Interest at a payment date becomes a piecewise function of the balance.

If crossover level is $L^*$:

$$
I(B)
=
\begin{cases}
i_1B, & B\le L^*,\\
i_1L^*+i_2(B-L^*), & B>L^*.
\end{cases}
$$

The borrower may still make one level payment $R$, but the balance recursion changes when $B_t$ crosses the step boundary.

### Practical algorithm

1. Assume current rate tier.
2. Compute payments/balances until the balance reaches the crossover amount.
3. Identify the exact period in which the tier changes.
4. Recompute subsequent interest using the new piecewise rule.
5. Continue until balance is zero.

> [!IMPORTANT] Textbook lesson
> Even when repayment terms become unusual, the fundamental sequence remains:
>
> **beginning balance → interest → payment → principal → ending balance.**

---

## 17. Formula Map

### Outstanding balance

Prospective:

$$
\boxed{
B_t=R a_{\overline{n-t}|}.
}
$$

Retrospective:

$$
\boxed{
B_t=L(1+i)^t-Rs_{\overline{t}|}.
}
$$

Recursion:

$$
\boxed{
B_t=B_{t-1}(1+i)-R_t.
}
$$

### Payment decomposition

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

### Level-payment principal progression

$$
\boxed{
P_t=Rv^{n-t+1}
}
$$

$$
\boxed{
P_{t+1}=(1+i)P_t
}
$$

### Sinking fund

$$
\boxed{
D=\frac{L}{s_{\overline{n}|j}}
}
$$

$$
\boxed{
\text{Periodic outflow}
=
Li+\frac{L}{s_{\overline{n}|j}}
}
$$

Equal-rate identity:

$$
\boxed{
\frac{1}{a_{\overline{n}|}}
=
i+\frac{1}{s_{\overline{n}|}}
}
$$

---

## 18. Important Distinctions

> [!IMPORTANT] Balance Before vs After Payment
> $I_t=iB_{t-1}$ uses the balance **before** payment $t$ but after payment $t-1$.

> [!IMPORTANT] Interest vs Principal
> Interest is not rate times payment. It is rate times outstanding balance.

> [!IMPORTANT] Prospective vs Retrospective
> Prospective = PV future obligations.  
> Retrospective = AV original loan − AV past payments.

> [!IMPORTANT] Amortization vs Sinking Fund
> Amortization reduces debt directly. Sinking fund accumulates a separate asset.

> [!IMPORTANT] Loan Rate vs Sinking-Fund Rate
> The two rates need not be equal. Keep the accounts separate.

> [!IMPORTANT] Contractual Rate vs Lender Yield
> Reinvestment/replacement-of-capital assumptions can make overall yield differ from the stated loan rate.

---

## 19. CF1 Connection Map

```text
Chapter 3–4 annuities
        ↓
loan equation of value
        ↓
outstanding balance
        ├─ prospective
        ├─ retrospective
        └─ recursion
        ↓
payment split
        ├─ interest
        └─ principal
        ↓
amortization schedule
        ↓
[[4.1 Loan Terminology]]
[[4.2 Amortization Method]]

Alternative principal-repayment structure
        ↓
sinking fund
        ↓
[[4.3 Sinking Fund Method]]
```

---

## 20. Quick Reading Review

- Outstanding balance is the value, at the balance date, of the remaining loan obligation.
- Prospective method values future payments.
- Retrospective method accumulates the original loan and subtracts accumulated past payments.
- Both methods must agree.
- Recursion is $B_t=B_{t-1}(1+i)-R_t$.
- Interest in payment $t$ is $iB_{t-1}$.
- Principal is payment minus interest.
- For a level-payment loan, principal portions increase geometrically by factor $1+i$.
- Sinking fund keeps principal repayment in a separate accumulation account.
- Deposit required is $L/s_{\overline{n}|j}$.
- If loan and sinking-fund rates are equal, total periodic payment equals the amortization payment.
- If rates differ, the two methods are not economically equivalent at the same stated loan rate.
- Frequency mismatches must be resolved before schedule calculations.
- Varying installments are handled by general equation-of-value mechanics.
- Continuous repayment replaces discrete recursion with a differential equation.
- Step-rate loans use piecewise interest rules but preserve the same balance logic.

---

## 21. Compression Notes

### Retained in Detail

- prospective, retrospective, and recursion methods;
- amortization schedule mechanics;
- interest/principal decomposition;
- geometric progression of principal portions;
- sinking fund construction and equal-rate equivalence;
- differing loan and sinking-fund rates;
- frequency mismatch;
- varying payments;
- continuous amortization;
- step-rate principal concept.

### Compressed

- repeated numerical examples using identical schedule mechanics;
- financial-calculator keystrokes;
- long schedule arithmetic;
- routine exercises.

### Source Boundary

The note follows Kellison Chapter 5 and does not import Vaaler formulas or outside loan conventions as primary content. CF1 internal links are used only to map the chapter to the syllabus.
