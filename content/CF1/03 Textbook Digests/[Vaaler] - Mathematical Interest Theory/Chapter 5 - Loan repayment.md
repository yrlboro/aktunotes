---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "5"
chapter_title: "Loan repayment"
cf1_topics: ["4.1", "4.2", "4.3"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 5, Sections 5.1–5.5; problem set 5.6 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler, Loans, Amortization, SinkingFund]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 5: Loan repayment

> [!ABSTRACT] Chapter in One View
> Chapter 5 mengembangkan aplikasi langsung annuity valuation pada **loan repayment**. Vaaler memulai dari **amortized loan**, yaitu pinjaman yang setiap payment-nya terlebih dahulu membayar interest atas outstanding balance lalu sisanya mengurangi principal. Dari sini chapter membangun **amortization schedule**, menghubungkan prospective balance dengan interest/principal decomposition, dan menunjukkan pola geometrik principal portions pada level-payment loans. Metode kedua adalah **sinking fund method**: principal loan tetap outstanding sementara borrower membayar interest kepada lender dan menabung secara terpisah agar sinking fund tumbuh menjadi sebesar principal pada maturity. Jika loan rate dan sinking-fund rate berbeda, total borrower payment dapat dipetakan ke equivalent amortized-loan rate. Chapter kemudian memperluas repayment ke arithmetic/geometric payment patterns dan menutup dengan yield-rate problems serta konsep **replacement of capital**. Untuk CF1, chapter ini langsung mendukung [[4.1 Loan Terminology]], [[4.2 Amortization Method]], dan [[4.3 Sinking Fund Method]].

## 1. Why This Chapter Exists

Chapter 3 telah menunjukkan bahwa loan dengan level end-of-period payments dapat dinilai sebagai annuity. Chapter 5 bertanya lebih jauh:

1. setelah beberapa payments, berapa **outstanding balance**?
2. dari suatu payment, berapa yang merupakan **interest** dan berapa yang merupakan **principal**?
3. bagaimana membuat **amortization schedule**?
4. bagaimana mekanik berubah jika principal tidak dibayar langsung, tetapi dikumpulkan melalui **sinking fund**?
5. bagaimana jika payment amount tidak level?
6. apakah stated loan rate selalu sama dengan lender's realized yield?

Semua hasil tetap berasal dari equation of value. Chapter ini terutama mengubah valuation framework menjadi mechanics repayment yang operasional.

## 2. Chapter Map

- **5.1 Introduction** — roadmap loan repayment.
- **5.2 Amortized Loans and Amortization Schedules** — interest/principal split, schedule, balance formulas, level payments, final reduced payment.
- **5.3 The Sinking Fund Method** — separate fund, net balance, differing loan/fund rates, equivalent amortization rate.
- **5.4 Loans with Other Repayment Patterns** — arithmetic/geometric payment streams dan irregular repayment structures.
- **5.5 Yield Rate Examples and Replacement of Capital** — lender yield ketika principal replacement dilakukan melalui separate fund.
- **5.6 Problems** — latihan; tidak diringkas.

| Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 5.1 | Core | [[4.1 Loan Terminology]] |
| 5.2 | Core | [[4.2 Amortization Method]] |
| 5.3 | Core | [[4.3 Sinking Fund Method]] |
| 5.4 | Core/Supporting | [[4.2 Amortization Method]], varying annuity tools |
| 5.5 | Supporting | yield interpretation / replacement of capital |

## 3. 5.1 Introduction

Vaaler distinguishes two main repayment structures.

### Amortized loan

Each payment contains:

$$
\text{Payment}
=
\text{Interest due}
+
\text{Principal payment}.
$$

Principal payments directly reduce the loan balance.

### Sinking fund loan

Borrower:

1. keeps interest on the loan current; and
2. accumulates the principal amount in a separate savings account.

The sinking fund may earn a rate lower than the loan rate.

> [!IMPORTANT] Two Different Balance Ideas
> Pada amortization, **loan balance itself declines**.  
> Pada sinking fund, gross loan principal may remain unchanged while a separate asset grows; the economically relevant **net balance** is loan principal minus sinking-fund balance.

## 4. 5.2 Amortized Loans and Amortization Schedules

### 4.1 Fundamental payment decomposition

Suppose immediately after the previous payment the outstanding balance is $B_{t-1}$ and one-period effective loan rate is $i$.

By the next payment date, balance before payment becomes:

$$
B_{t-1}(1+i).
$$

Interest due is:

$$
\boxed{
I_t=iB_{t-1}.
}
$$

If payment is $R_t$, principal portion is:

$$
\boxed{
P_t=R_t-I_t.
}
$$

and new balance:

$$
\boxed{
B_t=B_{t-1}-P_t
}
$$

or equivalently:

$$
\boxed{
B_t=B_{t-1}(1+i)-R_t.
}
$$

This recursion is the mechanical heart of an amortization schedule.

### 4.2 Example 5.2.1 — irregularly spaced payments

LaTroy borrows $2,000 at 5%.

At time 1 he pays $800.

Interest:

$$
2000(0.05)=100.
$$

Principal:

$$
800-100=700.
$$

Balance:

$$
2000-700=1300.
$$

Next payment is at time 3, so two years of interest accrue:

$$
1300\left[(1.05)^2-1\right]
=
133.25.
$$

From a $1,000 payment:

$$
P=1000-133.25=866.75.
$$

Balance after payment:

$$
1300-866.75
=
\boxed{433.25}.
$$

**Lesson:** interest is determined by the balance and elapsed time since the previous payment, not simply by “rate × payment.”

### 4.3 Amortization schedule

An amortization schedule records:

| Time | Payment | Interest | Principal | Balance after payment |
|---|---:|---:|---:|---:|

The row logic is always:

```text
previous balance
     ↓ accrue interest
interest due
     ↓ subtract payment
principal portion
     ↓
new outstanding balance
```

### 4.4 Prospective balance for regular payments

Suppose a loan lasts $n$ periods and is repaid by level payments $Q$ except a slightly reduced final payment $R$.

Immediately after payment at time $k-1$, remaining cash flows are:

- $Q$ at times $k,\ldots,n-1$;
- final payment $R$ at time $n$.

Hence prospective balance is:

$$
\boxed{
B_{k-1}
=
Q\,a_{\overline{n-k}|i}
+
Rv^{\,n-k+1}.
}
$$

Interest in payment $k$:

$$
I_k
=
iB_{k-1}.
$$

Using:

$$
i\,a_{\overline{m}|i}
=
1-v^m,
$$

Vaaler obtains:

$$
\boxed{
I_k
=
Q(1-v^{\,n-k})
+
Ri\,v^{\,n-k+1}.
}
$$

Then principal is payment minus interest.

### 4.5 Level-payment special case

If all payments are equal, $Q=R$, then for payment $k$:

$$
\boxed{
B_{k-1}
=
Q\,a_{\overline{n-k+1}|i}.
}
$$

Interest:

$$
\boxed{
I_k
=
Q(1-v^{\,n-k+1}).
}
$$

Principal:

$$
\boxed{
P_k
=
Qv^{\,n-k+1}.
}
$$

Therefore:

$$
\boxed{
P_{k+1}=(1+i)P_k.
}
$$

This is one of the chapter's most useful structural results:

> principal portions of a level-payment amortized loan form a geometric progression with ratio $1+i$.

### 4.6 Why interest decreases while principal increases

Since balance declines:

$$
I_t=iB_{t-1}
$$

normally declines.

With level payment $Q$:

$$
P_t=Q-I_t
$$

therefore increases.

Thus early payments are interest-heavy and late payments are principal-heavy.

### 4.7 Interest paid over a block of payments

Vaaler emphasizes a useful identity:

$$
\boxed{
\text{Interest paid over interval}
=
\text{Total payments over interval}
-
\text{Decrease in outstanding balance}.
}
$$

For a mortgage, this can be substantially faster than summing every interest component separately.

### 4.8 Example 5.2.4 — rounding and final payment

Vaaler considers a $20,000 four-year loan at annual effective discount rate 4.8%.

Convert discount to interest:

$$
i=\frac{d}{1-d}
=
\frac{0.048}{0.952}
\approx 5.042016807\%.
$$

Payments are $5,645.75 for the first three years and $5,645.72 at time 4.

The resulting rounded schedule is:

| Time | Payment | Interest | Principal | Balance |
|---:|---:|---:|---:|---:|
| 0 | — | — | — | 20,000.00 |
| 1 | 5,645.75 | 1,008.40 | 4,637.35 | 15,362.65 |
| 2 | 5,645.75 | 774.59 | 4,871.16 | 10,491.49 |
| 3 | 5,645.75 | 528.98 | 5,116.77 | 5,374.72 |
| 4 | 5,645.72 | 271.00 | 5,374.72 | 0.00 |

[TEXTBOOK EXAMPLE]

The tiny discrepancy before rounding comes from payments being constrained to whole cents.

> [!IMPORTANT] Final-Payment Principle
> Exact amortization mathematics may produce a non-cent payment. In practice the regular installment is rounded, and the final payment is adjusted so the balance closes to zero.

## 5. 5.3 The Sinking Fund Method

### 5.1 Two-account structure

Let:

- loan principal = $L$;
- loan effective rate per period = $i$;
- sinking-fund effective rate per period = $j$;
- term = $n$ periods.

The borrower keeps loan interest current:

$$
\boxed{
\text{loan interest payment each period}=iL.
}
$$

Separately, level sinking-fund deposit $D$ must accumulate to $L$:

$$
D\,s_{\overline{n}|j}=L.
$$

Thus:

$$
\boxed{
D=\frac{L}{s_{\overline{n}|j}}.
}
$$

Total regular borrower outflow:

$$
\boxed{
iL+\frac{L}{s_{\overline{n}|j}}.
}
$$

### 5.2 Sinking-fund schedule

A sinking-fund schedule tracks:

- interest paid on loan;
- fund deposit;
- interest earned in the sinking fund;
- sinking-fund balance;
- **net balance on loan**.

If sinking-fund balance after time $t$ is $S_t$, then:

$$
\boxed{
\text{Net balance}=L-S_t.
}
$$

The loan itself may still be legally $L$ until maturity, but the accumulating fund economically offsets part of it.

### 5.3 Example — LaTroy under sinking fund

Using the same $2,000 loan, suppose loan interest is 5% while sinking fund earns 2.5%.

Vaaler obtains a final sinking-fund deposit about:

$$
\boxed{
431.30.
}
$$

The final total payment includes loan interest of $100:

$$
431.30+100
=
\boxed{531.30}.
$$

This is higher than the corresponding amortized payoff because the borrower earns only 2.5% in the fund while paying 5% on the loan.

### 5.4 Equivalent amortized-loan rate

A sinking-fund loan with total level periodic payment:

$$
L\left(
i+\frac{1}{s_{\overline{n}|j}}
\right)
$$

can be compared with an amortized loan of amount $L$ at effective rate $i'$ whose level payment is:

$$
\frac{L}{a_{\overline{n}|i'}}.
$$

Equating payments:

$$
\boxed{
i+\frac{1}{s_{\overline{n}|j}}
=
\frac{1}{a_{\overline{n}|i'}}.
}
$$

If:

$$
i=j,
$$

then using the annuity identity:

$$
\frac{1}{a_{\overline{n}|i}}
=
i+\frac{1}{s_{\overline{n}|i}},
$$

we get:

$$
\boxed{
i'=i.
}
$$

Thus amortization and sinking fund are economically equivalent when the loan and sinking-fund rates are the same and timing is identical.

### 5.5 Example — $2,000,000 sinking-fund loan

Vaaler studies:

- principal $2,000,000;
- 5-year term;
- loan rate 8%;
- sinking-fund rate 5%.

Annual loan interest:

$$
0.08(2{,}000{,}000)=160{,}000.
$$

Fund deposit:

$$
D
=
\frac{2{,}000{,}000}{s_{\overline{5}|0.05}}
\approx
361{,}949.60.
$$

Total annual payment:

$$
521{,}949.60.
$$

This payment stream is approximately equivalent to amortizing $2,000,000 over five years at:

$$
\boxed{
i'\approx9.580261711\%.
}
$$

Interpretation:

> a relatively low sinking-fund earning rate makes the economic burden materially higher than the stated 8% loan rate.

## 6. 5.4 Loans with Other Repayment Patterns

Vaaler next removes the level-payment assumption.

The universal equation remains:

$$
\boxed{
L=\sum_{t=1}^{n}R_t v^t
}
$$

for repayments $R_t$ at regular period ends.

Outstanding balance immediately after time $k$ is still the present value of remaining payments:

$$
\boxed{
B_k
=
\sum_{t=k+1}^{n}
R_t v^{t-k}.
}
$$

Then:

$$
I_{k+1}=iB_k,
$$

$$
P_{k+1}=R_{k+1}-I_{k+1}.
$$

### 6.1 Arithmetic repayment pattern

If payments follow an arithmetic progression, Chapter 3–4 arithmetic-annuity formulas value the loan.

The key idea is not a new loan formula:

```text
identify payment sequence
     ↓
value it as varying annuity
     ↓
obtain outstanding balance
     ↓
interest = rate × balance
     ↓
principal = payment − interest
```

### 6.2 Geometric repayment pattern

If payment amounts grow by a fixed ratio, use the geometric-annuity structure.

Again, loan mechanics afterward are unchanged.

### 6.3 Negative amortization

If a payment is smaller than interest due:

$$
R_t<I_t,
$$

then:

$$
P_t=R_t-I_t<0.
$$

The “principal payment” is negative and the outstanding balance increases.

This is not an algebraic anomaly; it means the payment failed to cover accrued interest.

> [!IMPORTANT] Nonlevel Does Not Break Recursion
> Even for varying payments:
>
> $$
> B_t=B_{t-1}(1+i)-R_t
> $$
>
> remains valid.

## 7. 5.5 Yield Rate Examples and Replacement of Capital

This section changes perspective from the **borrower** to the **lender/investor**.

A lender may receive payments consisting of:

- investment income; and
- return of capital.

If the lender wants to maintain capital intact, returned principal can be deposited into a sinking fund.

This is **replacement of capital**.

### 7.1 Contractual loan rate versus lender yield

The loan rate determines the borrower's contractual cash flows.

But lender yield can depend on:

- whether principal portions are reinvested;
- the reinvestment rate;
- whether the lender owns the sinking-fund account or a third party does;
- timing of capital replacement.

Therefore:

> stated loan rate and realized investment yield are not automatically the same quantity.

### 7.2 General replacement-of-capital structure

Suppose lender invests $L$ and wants to earn overall yield $y$ while replacing capital by depositing into a fund earning rate $j$.

At each payment date, the lender's received cash flow is conceptually split into:

1. amount that can be consumed as yield/income;
2. amount deposited to replace the original capital by maturity.

The sinking-fund deposits must accumulate to:

$$
L.
$$

Hence yield is determined from the **combined actual cash-flow arrangement**, not by merely reading the contractual loan rate.

### 7.3 Why ownership of the sinking fund matters

If fund deposits are sent to a third party, those deposits are not retained as lender investment earnings.

If the lender itself holds the sinking fund, interest earned inside that fund may affect the lender's total investment return.

This changes the equation of value used to compute yield.

[CF1 SUPPORTING CONTEXT]

For CF1 Topik 4, the core requirement remains amortization and sinking-fund mechanics. Replacement-of-capital examples are valuable because they reinforce the distinction between **interest rate on a contract** and **yield on an investment experience**.

## 8. Core Formula Network

### Amortized loan

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
B_t=B_{t-1}(1+i)-R_t
}
$$

For level payment $Q$:

$$
\boxed{
B_{k-1}
=
Q\,a_{\overline{n-k+1}|i}
}
$$

$$
\boxed{
P_k
=
Qv^{\,n-k+1}
}
$$

$$
\boxed{
P_{k+1}=(1+i)P_k
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
\text{total payment}
=
iL+\frac{L}{s_{\overline{n}|j}}
}
$$

$$
\boxed{
\text{net loan balance}
=
L-\text{sinking-fund balance}
}
$$

Equivalent amortized rate $i'$:

$$
\boxed{
i+\frac{1}{s_{\overline{n}|j}}
=
\frac{1}{a_{\overline{n}|i'}}
}
$$

## 9. Important Distinctions

> [!IMPORTANT] Interest vs Principal
> Interest is computed from the **outstanding balance**, not from payment amount.

> [!IMPORTANT] Balance Before vs After Payment
> Always identify the exact side of the cash flow.

> [!IMPORTANT] Gross Loan vs Net Loan in Sinking Fund
> Gross principal may remain $L$ while net economic balance declines as the fund grows.

> [!IMPORTANT] Loan Rate vs Sinking-Fund Rate
> Keep $i$ and $j$ separate. They often differ.

> [!IMPORTANT] Contract Rate vs Yield
> Contract rate determines contractual accrual; yield describes return on a complete investment cash-flow experience.

> [!IMPORTANT] Level vs Varying Payments
> Varying payments change the valuation formula but not the balance recursion.

## 10. Sanity Checks

For a normal positive-rate level-payment amortized loan:

$$
B_0>B_1>\cdots>B_n=0.
$$

Interest portions normally decrease:

$$
I_1>I_2>\cdots>I_n.
$$

Principal portions increase:

$$
P_{t+1}=(1+i)P_t.
$$

For sinking fund:

$$
S_0=0,
\qquad
S_n=L.
$$

Thus net balance:

$$
L-S_n=0.
$$

If:

$$
j<i,
$$

the equivalent amortized rate is generally above the stated loan rate because capital replacement earns less than the loan costs.

## 11. Quick Reading Review

- An amortized payment first pays accrued interest; the remainder reduces principal.
- $I_t=iB_{t-1}$.
- $P_t=R_t-I_t$.
- $B_t=B_{t-1}(1+i)-R_t$.
- Prospective balance equals the value of remaining required payments.
- In level-payment loans, principal portions form a geometric progression with ratio $1+i$.
- Interest-heavy early payments occur because the balance is largest early.
- Block interest = total payments − decline in outstanding balance.
- Rounding regular installments can force a slightly adjusted final payment.
- Sinking fund separates loan interest from principal accumulation.
- Level fund deposit is $L/s_{\overline{n}|j}$.
- Net loan balance is loan principal minus fund balance.
- If loan rate and fund rate are equal, sinking-fund and amortization methods can be economically equivalent.
- If the fund earns less than the loan rate, equivalent total borrowing cost rises.
- Arithmetic/geometric repayments are handled with varying-annuity valuation.
- Negative principal means payment failed to cover interest.
- Replacement of capital explains why lender yield can differ from the contractual loan rate.

## 12. Compression Notes

### Retained in Detail

- payment decomposition;
- prospective balance logic;
- level-payment principal progression;
- amortization schedule mechanics;
- rounding/final-payment issue;
- sinking-fund construction;
- net balance;
- differing loan/fund rates;
- equivalent amortization rate;
- varying repayment patterns;
- negative amortization;
- replacement-of-capital concept.

### Compressed

- BA II Plus amortization worksheet procedures;
- repeated mortgage examples using identical mechanics;
- long numerical tables;
- repeated yield examples.

### Omitted

- Chapter 5 problem set;
- calculator keystrokes;
- repetitive computational variants.

## Source Traceability

- **Primary textbook:** Vaaler, Vaaler & Daniel, *Mathematical Interest Theory*, 2nd ed., Chapter 5, “Loan repayment.”
- **Source scope used:** Sections 5.1–5.5.
- **CF1 scope:** Topik 4 — Pengembalian Pinjaman.
- **No outside textbook was used to expand the chapter content.**
