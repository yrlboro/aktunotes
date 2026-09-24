---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "6"
chapter_title: "Bonds and other securities"
cf1_topics: ["5.1", "5.2", "5.3"]
cf1_relevance: "High"
source_scope: "Kellison Chapter 6, Sections 6.1-6.11"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison, Bonds, BondPricing, BookValue, Yield]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 6: Bonds and Other Securities

> [!ABSTRACT] Chapter in One View
> Chapter 6 applies the theory of interest to securities, especially **redeemable bonds**. Kellison frames three central questions: given a desired yield, what price should an investor pay; given the purchase price, what yield results; and what is the value of the security after purchase? The chapter first distinguishes common security types, then develops bond notation and pricing from present value. From the basic price formula come the **premium-discount formula** and **Makeham's formula**, which reveal how coupon rate, yield rate, price, and redemption value interact. The chapter then develops **book value**, premium amortization and discount accumulation, valuation between coupon dates, yield determination, callable and serial bonds, cases with frequency or rate generalizations, and finally selected nonbond securities and asset-value concepts. For CF1, the core is [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]], and [[5.3 Yield Rate and Coupon Calculations]].

## 1. Why This Chapter Exists

Kellison identifies three questions:

1. **Given a desired yield rate, what price should be paid?**
2. **Given the purchase price, what yield rate will the investor earn?**
3. **At a later date, what is the value of the security?**

No new time-value principle is required. A security is valued by discounting its future cash flows at the relevant yield.

---

## 2. Chapter Map

- **6.1 Introduction**
- **6.2 Types of Securities**
- **6.3 Price of a Bond**
- **6.4 Premium and Discount**
- **6.5 Valuation Between Coupon Payment Dates**
- **6.6 Determination of Yield Rates**
- **6.7 Callable Bonds**
- **6.8 Serial Bonds**
- **6.9 Some Generalizations**
- **6.10 Other Securities**
- **6.11 Valuation of Securities**

| Section | CF1 Relevance | Connected Note |
|---|---|---|
| 6.1–6.4 | Core | [[5.1 Bond Pricing]], [[5.3 Yield Rate and Coupon Calculations]] |
| 6.5 | Core/Supporting | [[5.2 Book Value, Premium and Discount Amortization]] |
| 6.6 | Core | [[5.3 Yield Rate and Coupon Calculations]] |
| 6.7–6.9 | Supporting | Bond valuation variations |
| 6.10–6.11 | Mostly Supporting / Beyond core CF1 | broader securities |

---

## 3. 6.1 Introduction

The chapter studies bonds and other securities from the investor's point of view.

A security's value is determined by:

- future promised or expected cash flows;
- timing of those cash flows;
- yield rate used for valuation.

For bonds, this leads naturally to present-value formulas based on coupons and redemption payment.

---

## 4. 6.2 Types of Securities

Kellison describes three traditional security types.

### 4.1 Bonds

A bond is a debt security. The issuer promises specified payments to the investor.

Common forms include:

- **zero-coupon bond** — one redemption payment at maturity;
- **coupon bond** — periodic coupon payments plus redemption value.

### 4.2 Preferred stock

Preferred stock is an ownership security, but its dividend pattern often resembles a perpetuity: level dividends with no fixed redemption date.

### 4.3 Common stock

Common stock represents ownership and generally does not promise fixed dividends or redemption value.

Because common-stock dividends are discretionary and uncertain, its valuation requires assumptions different from a fixed-income bond.

> [!NOTE] CF1 Scope
> The syllabus focuses on bond mathematics. Preferred/common stock discussion is useful context but is not the core of Topik 5.

---

## 5. Bond Notation

Kellison uses a standard set of quantities.

Let:

- $F$ = face/par value;
- $r$ = coupon rate per coupon period;
- $Fr$ = coupon amount;
- $C$ = redemption value;
- $n$ = number of remaining coupon periods;
- $i$ = yield rate per coupon period;
- $v=(1+i)^{-1}$;
- $P$ = bond price.

> [!IMPORTANT] Face Value vs Redemption Value
> Do not silently assume $F=C$. A bond can have coupons based on $F$ but redeem for another amount $C$.

Coupon amount is

$$
\boxed{
Fr.
}
$$

---

## 6. 6.3 Price of a Bond

### 6.1 Basic price formula

A bond is the sum of two cash-flow components:

1. annuity of coupons;
2. redemption payment.

Therefore,

$$
\boxed{
P=Fr\,a_{\overline{n}|i}+Cv^n.
}
$$

Kellison calls this the **basic formula**.

This is simply an equation of value at the purchase date.

### 6.2 Cash-flow timeline

| Time | 0 | 1 | 2 | $\cdots$ | $n$ |
|---:|---:|---:|---:|---:|---:|
| Investor CF | $-P$ | $Fr$ | $Fr$ | $\cdots$ | $Fr+C$ |

Yield $i$ is the rate that equates the purchase price with the PV of all future cash flows.

### 6.3 Zero-coupon bond

If $Fr=0$:

$$
\boxed{
P=Cv^n.
}
$$

Thus:

$$
1+i=\left(\frac{C}{P}\right)^{1/n}.
$$

---

## 7. 6.4 Premium and Discount

Kellison rewrites the basic price formula to show the relationship between coupon rate and yield.

Starting from

$$
P=Fr a_{\overline{n}|}+Cv^n,
$$

and using

$$
v^n=1-i a_{\overline{n}|},
$$

we obtain

$$
P
=
Fr a_{\overline{n}|}
+
C(1-i a_{\overline{n}|}).
$$

Hence

$$
\boxed{
P=C+(Fr-Ci)a_{\overline{n}|}.
}
$$

This is the **premium-discount formula**.

Define the coupon amount expressed relative to redemption:

$$
g=\frac{Fr}{C}.
$$

Then

$$
Fr-Ci=C(g-i),
$$

so

$$
\boxed{
P=C+C(g-i)a_{\overline{n}|}.
}
$$

### 7.1 Premium bond

If

$$
g>i,
$$

then

$$
P>C.
$$

The bond sells at a **premium**.

### 7.2 Discount bond

If

$$
g<i,
$$

then

$$
P<C.
$$

The bond sells at a **discount**.

### 7.3 Par

If

$$
g=i,
$$

then

$$
P=C.
$$

> [!IMPORTANT] Price-Yield Logic
> The comparison must be made on the **same periodic basis**. Coupon rate and yield rate cannot be compared before matching frequencies and conventions.

---

## 8. Makeham's Formula

Kellison develops another useful expression.

Let

$$
K=Cv^n
$$

be the present value of the redemption amount.

From the basic price formula:

$$
P=Fr a_{\overline{n}|}+K.
$$

Using

$$
a_{\overline{n}|}
=
\frac{1-v^n}{i}
=
\frac{1-K/C}{i},
$$

we obtain

$$
P
=
\frac{Fr}{i}
+
K\left(1-\frac{Fr}{Ci}\right).
$$

With

$$
g=\frac{Fr}{C},
$$

this becomes

$$
\boxed{
P
=
\frac{g}{i}C
+
\left(1-\frac{g}{i}\right)K.
}
$$

Equivalent common form:

$$
\boxed{
P=K+\frac{g}{i}(C-K).
}
$$

This is **Makeham's formula**.

### Why it is useful

If $C$, $K$, $g$, and $i$ are convenient, price can be found without directly evaluating the full annuity factor.

It also decomposes bond value into redemption PV plus a coupon-related adjustment.

---

## 9. Book Value of a Bond

If a bond is purchased to yield $i$ and is held under that valuation basis, its **book value** at a coupon date is the value at that date of remaining payments using the original yield rate.

Let $B_t$ be book value immediately after coupon $t$.

Prospectively:

$$
\boxed{
B_t
=
Fr\,a_{\overline{n-t}|i}
+
Cv^{n-t}.
}
$$

At purchase:

$$
B_0=P.
$$

At maturity:

$$
B_n=C.
$$

### 9.1 Book value recursion

Between coupon dates:

$$
B_{t-1}(1+i)
$$

is the accumulated book value just before coupon payment.

After paying coupon $Fr$:

$$
\boxed{
B_t=B_{t-1}(1+i)-Fr.
}
$$

Equivalently:

$$
\boxed{
B_t-B_{t-1}=iB_{t-1}-Fr.
}
$$

This is mathematically identical to loan amortization recursion.

---

## 10. Premium Amortization and Discount Accumulation

### 10.1 Premium bond

If $P>C$, book value must decline from $P$ to $C$.

Coupon income received is larger than yield income earned on book value.

Yield income:

$$
iB_{t-1}.
$$

Coupon:

$$
Fr.
$$

Premium amortized during period $t$:

$$
\boxed{
Fr-iB_{t-1}.
}
$$

Because this is positive for a premium bond,

$$
B_t=B_{t-1}-\left(Fr-iB_{t-1}\right).
$$

### 10.2 Discount bond

If $P<C$, book value must rise toward $C$.

Yield income exceeds coupon received.

Discount accumulation:

$$
\boxed{
iB_{t-1}-Fr.
}
$$

Then

$$
B_t=B_{t-1}+\left(iB_{t-1}-Fr\right).
$$

### 10.3 Unified formula

In both cases:

$$
\boxed{
B_t-B_{t-1}=iB_{t-1}-Fr.
}
$$

Sign determines interpretation:

- negative change → premium amortization;
- positive change → discount accumulation.

> [!IMPORTANT] Bond–Loan Duality
> The book-value schedule of a bond has the same recursion structure as an amortization schedule. In a bond, coupon is the periodic cash flow and redemption is the terminal amount.

---

## 11. Price Relative to Coupon Rate and Yield

For a par-value bond where $F=C$ and periodic coupon rate is $r$:

- $r>i$ → premium;
- $r=i$ → par;
- $r<i$ → discount.

This gives the familiar ordering:

### Premium bond

$$
\boxed{
\text{yield rate}<\text{coupon rate}.
}
$$

### Discount bond

$$
\boxed{
\text{yield rate}>\text{coupon rate}.
}
$$

The statement requires comparable periodic rates.

---

## 12. 6.5 Valuation Between Coupon Payment Dates

Previous formulas value bonds at coupon dates. Kellison next studies dates between coupons.

Let:

- $B_0$ and $B_1$ be book values at two consecutive coupon dates;
- $t$ be the fraction of the coupon period since the earlier coupon date, $0<t<1$.

### 12.1 Book value interpolation under yield basis

If yield $i$ applies over the coupon period, accumulated book value before allocating the coupon is related by compound accumulation.

Kellison distinguishes:

- **market price**;
- **flat price**;
- accrued coupon/interest component.

### 12.2 Accrued coupon

A common practical convention allocates part of the next coupon to the seller according to time elapsed.

If coupon per period is $Fr$, accrued coupon after fraction $t$ of a period is approximately

$$
\boxed{
tFr
}
$$

under simple proportional accrual.

Then:

$$
\boxed{
\text{market/full price}
=
\text{flat price}
+
\text{accrued coupon}.
}
$$

Terminology can vary, so the cash-flow meaning matters more than the label.

### 12.3 Theoretical book value between dates

A yield-consistent value can be constructed by accumulating the previous coupon-date book value over fraction $t$ and accounting for the coupon allocation convention.

The essential lesson is:

> Value between coupon dates requires both **compound yield accumulation** and a clear convention for **accrued coupon**.

[CF1 SUPPORTING CONTEXT] The syllabus emphasizes bond price/book value and amortization. Detailed market quotation conventions are secondary unless explicitly tested.

---

## 13. 6.6 Determination of Yield Rates

Given price $P$, coupon $Fr$, redemption $C$, and term $n$, yield $i$ solves

$$
\boxed{
P=Fr a_{\overline{n}|i}+Cv_i^n.
}
$$

The unknown appears in both the annuity factor and discount factor, so there is generally no simple closed-form solution.

### 13.1 Numerical root problem

Define

$$
f(i)
=
Fr a_{\overline{n}|i}+Cv_i^n-P.
$$

The yield is a root:

$$
f(i)=0.
$$

Methods include:

- interpolation/approximation;
- financial calculator;
- numerical iteration.

### 13.2 Monotonic relationship

For fixed positive bond cash flows:

$$
i\uparrow
\quad\Rightarrow\quad
P\downarrow.
$$

This gives a strong sanity check for trial yields.

### 13.3 Approximate yield

Kellison discusses approximation as a practical estimate, but the exact yield is always the rate solving the bond equation of value.

> [!NOTE] Numerical Method Rule
> Always write the bond equation first. Calculator output is a solution method, not the financial model.

---

## 14. Unknown Coupon, Redemption Value, or Term

The same basic price equation can be rearranged for other unknowns.

### 14.1 Unknown coupon amount

$$
Fr
=
\frac{P-Cv^n}{a_{\overline{n}|}}.
$$

If face $F$ is known:

$$
\boxed{
r=\frac{P-Cv^n}{F a_{\overline{n}|}}.
}
$$

### 14.2 Unknown redemption value

$$
\boxed{
C
=
\frac{P-Fr a_{\overline{n}|}}{v^n}.
}
$$

### 14.3 Unknown term

If all other quantities are known, solve

$$
P=Fr a_{\overline{n}|}+Cv^n
$$

for $n$, generally by algebra/logarithms where possible or by numerical/discrete search.

This is directly aligned with CF1 learning outcomes on coupon, redemption, yield, and term.

---

## 15. 6.7 Callable Bonds

A callable bond allows redemption at one of several permitted call dates, potentially with different call prices.

This creates uncertainty for the investor about the actual redemption date.

### 15.1 Yield-to-call principle

For a specified possible call date $k$ and call price $C_k$, solve:

$$
P
=
Fr a_{\overline{k}|i_k}
+
C_kv_{i_k}^k.
$$

This gives the yield if the issuer calls at that date.

### 15.2 Investor guarantee

To determine the yield an investor can guarantee, examine all redemption scenarios available to the issuer and take the **least favorable yield** to the investor.

Conceptually:

$$
\boxed{
\text{guaranteed yield}
=
\min(\text{yield over feasible call scenarios})
}
$$

subject to contract terms.

### 15.3 Price limits

If a desired minimum yield is specified, price must be low enough that the yield requirement is met under every permissible call.

[CF1 SUPPORTING CONTEXT] Callable-bond optimization is broader than the core Topik 5 list but reinforces price/yield and redemption mechanics.

---

## 16. 6.8 Serial Bonds

A serial bond issue redeems portions of the total issue at different dates rather than redeeming all principal at one maturity date.

### 16.1 Known redemption schedule

If redemption dates and amounts are known, value each group separately and sum:

$$
\boxed{
P_{\text{issue}}
=
\sum_j P_j.
}
$$

### 16.2 Uncertain individual redemption

An investor holding one bond may not know exactly which serial redemption date applies to that particular bond.

However, the total issue can still be valued from the known aggregate redemption schedule.

Kellison shows that valuation can often be structured through Makeham-style decomposition.

[CF1 SUPPORTING CONTEXT] The core CF1 emphasis remains ordinary bond pricing/book value/yield; serial bonds are an application of the same valuation framework.

---

## 17. 6.9 Some Generalizations

Kellison groups several extensions under one principle:

> When the standard formula no longer matches the cash-flow structure, return to equation of value.

### 17.1 Coupon frequency differs from yield frequency

Two-step method:

1. convert yield to an effective rate matching coupon frequency;
2. value coupon and redemption cash flows with that rate.

### 17.2 Coupon rate not constant

If coupons vary over time, treat them as a varying annuity:

$$
\boxed{
P
=
\sum_{t=1}^{n}C_t v^t
+
Rv^n.
}
$$

Chapter 4 varying-annuity methods can simplify special patterns.

### 17.3 Yield rate not constant

If yield/discount rate varies by period, each cash flow must use the discount factors applicable to its maturity:

$$
\boxed{
P
=
\sum_{t=1}^{n}
C_t
\prod_{k=1}^{t}(1+i_k)^{-1}
+
R
\prod_{k=1}^{n}(1+i_k)^{-1}.
}
$$

This is the natural bridge toward term-structure analysis in later chapters.

---

## 18. 6.10 Other Securities

### 18.1 Preferred stock and perpetual bonds

If a security pays level dividend/coupon $D$ forever and the required effective yield per payment period is $i$:

$$
\boxed{
P=\frac{D}{i}.
}
$$

This is a perpetuity.

Preferred stock with a fixed redemption date can instead be valued like a bond.

### 18.2 Common stock

Common stock has no fixed redemption and dividends may vary.

If dividends grow indefinitely at constant rate $g$ and required yield is $i$ with $i>g$, Kellison's present-value reasoning yields the growing-perpetuity form:

$$
\boxed{
P
=
\frac{D_1}{i-g},
}
$$

where $D_1$ is next period's dividend.

The chapter gives examples where earnings/dividends grow at different rates for finite stages and then change assumptions.

> [!NOTE] CF1 Scope
> Common-stock dividend valuation is not part of the stated Topik 5 learning outcomes. Treat as `[CF1 SUPPORTING CONTEXT]`, not core memorization.

---

## 19. 6.11 Valuation of Securities

Kellison closes the chapter by noting that "value" is not unique in practical accounting or investment contexts.

Three broad valuation approaches are discussed.

### 19.1 Market value method

Use observed market price.

Strength:
- reflects current transaction conditions.

Limitation:
- market may be thin, nonexistent, or distorted.

### 19.2 Cost method

Use original or adjusted historical cost.

For redeemable bonds, an adjusted-cost approach naturally resembles book-value amortization.

### 19.3 Present-value method

Value future cash flows using an appropriate yield/discount rate.

This is the method developed mathematically throughout the chapter.

[CF1 SUPPORTING CONTEXT] CF1 primarily tests mathematical bond valuation, so accounting policy distinctions should not displace the PV mechanics.

---

## 20. Bond Book-Value Schedule

For a bond purchased at $P$ and yielding $i$:

| Period | Beginning Book Value | Yield Income | Coupon | Change in Book Value | Ending Book Value |
|---:|---:|---:|---:|---:|---:|
| $t$ | $B_{t-1}$ | $iB_{t-1}$ | $Fr$ | $iB_{t-1}-Fr$ | $B_t$ |

where

$$
\boxed{
B_t=B_{t-1}(1+i)-Fr.
}
$$

At maturity:

$$
\boxed{
B_n=C.
}
$$

### Premium

$$
Fr>iB_{t-1}
$$

so book value falls.

### Discount

$$
Fr<iB_{t-1}
$$

so book value rises.

---

## 21. Core Formula Map

### Bond price

$$
\boxed{
P=Fr a_{\overline{n}|i}+Cv_i^n
}
$$

### Premium-discount formula

$$
\boxed{
P=C+(Fr-Ci)a_{\overline{n}|i}
}
$$

or with

$$
g=\frac{Fr}{C},
$$

$$
\boxed{
P=C+C(g-i)a_{\overline{n}|i}.
}
$$

### Makeham formula

Let $K=Cv^n$:

$$
\boxed{
P=K+\frac{g}{i}(C-K).
}
$$

### Book value

$$
\boxed{
B_t
=
Fr a_{\overline{n-t}|i}
+
Cv_i^{n-t}.
}
$$

### Book-value recursion

$$
\boxed{
B_t=B_{t-1}(1+i)-Fr.
}
$$

### Premium amortization

$$
\boxed{
Fr-iB_{t-1}.
}
$$

### Discount accumulation

$$
\boxed{
iB_{t-1}-Fr.
}
$$

---

## 22. Important Distinctions

> [!IMPORTANT] Coupon Rate vs Yield Rate
> Coupon rate determines promised coupon amount. Yield rate discounts the investor's cash flows and depends on price.

> [!IMPORTANT] Face Value vs Redemption Value
> $F$ determines coupon under the stated coupon rate. $C$ is the amount repaid at redemption.

> [!IMPORTANT] Price vs Book Value
> Price is purchase/market transaction value at a date. Book value is valuation under a specified yield basis as time passes.

> [!IMPORTANT] Premium vs Discount
> Premium/discount is relative to redemption value, not merely face value unless $F=C$.

> [!IMPORTANT] Coupon Income vs Yield Income
> Coupon cash received is $Fr$. Interest/yield earned on book value is $iB_{t-1}$.

> [!IMPORTANT] Exact Yield vs Approximate Yield
> Exact yield solves the bond equation of value. Any shortcut is only an approximation.

---

## 23. Textbook Reasoning Patterns

### Pattern A — Given yield, find price

1. Declare yield per coupon period.
2. Determine coupon amount $Fr$.
3. Determine $n$.
4. Write:

$$
P=Fr a_{\overline{n}|}+Cv^n.
$$

5. Calculate.
6. Compare price with redemption value as a reasonableness check.

---

### Pattern B — Given price, find yield

Write:

$$
P=Fr a_{\overline{n}|i}+Cv_i^n.
$$

Solve numerically for $i$.

Check:

- premium bond should normally imply yield below comparable coupon rate;
- discount bond should imply yield above it.

---

### Pattern C — Book value after $t$ coupons

Use prospective form:

$$
B_t
=
Fr a_{\overline{n-t}|}
+
Cv^{n-t}.
$$

Or recursion if previous book value is already known:

$$
B_t=B_{t-1}(1+i)-Fr.
$$

---

### Pattern D — Premium amortized in payment $t$

Calculate yield income:

$$
iB_{t-1}.
$$

Then:

$$
\boxed{
\text{premium amortized}
=
Fr-iB_{t-1}.
}
$$

---

### Pattern E — Coupon frequency mismatch

Convert yield to the coupon period **before** using bond formulas.

For annual effective yield $i_a$ and semiannual coupons:

$$
i_{1/2}
=
(1+i_a)^{1/2}-1.
$$

Then use $i_{1/2}$ with the number of semiannual coupon periods.

---

## 24. CF1 Connection Map

```text
Chapter 1–2
time value + equation of value
        ↓
Chapter 3
annuities
        ↓
Chapter 6
coupon stream + redemption
        ↓
bond price
        ├─ basic formula
        ├─ premium-discount formula
        └─ Makeham formula
        ↓
book value recursion
        ├─ premium amortization
        └─ discount accumulation
        ↓
yield / coupon / redemption / term unknowns
        ↓
[[5.1 Bond Pricing]]
[[5.2 Book Value, Premium and Discount Amortization]]
[[5.3 Yield Rate and Coupon Calculations]]
```

---

## 25. Quick Reading Review

- A bond is valued as PV of coupons plus PV of redemption.
- Basic formula: $P=Fr a_{\overline{n}|}+Cv^n$.
- Face and redemption value need not be equal.
- Premium-discount formula makes the price/yield relationship explicit.
- If coupon rate relative to redemption exceeds yield, price exceeds redemption value.
- Makeham's formula reorganizes bond price around the PV of redemption.
- Book value is prospective value of remaining bond payments at the valuation yield.
- Book value recursion is $B_t=B_{t-1}(1+i)-Fr$.
- Premium amortization is coupon minus yield income.
- Discount accumulation is yield income minus coupon.
- Premium book value moves downward toward redemption; discount book value moves upward.
- Between coupon dates, accrued coupon and valuation convention matter.
- Yield is usually a numerical root of the bond equation.
- Unknown coupon/redemption/term are solved from the same equation of value.
- Callable bonds require checking alternative redemption dates.
- Serial bonds are valued by summing component redemption streams.
- Nonlevel coupons or varying yields require returning to general cash-flow valuation.
- Preferred stock can reduce to a perpetuity; common-stock valuation is supporting context, not core Topik 5.

---

## 26. Compression Notes

### Retained in Detail

- security types needed to frame the chapter;
- bond terminology and notation;
- basic bond price formula;
- premium-discount formula;
- Makeham's formula;
- book value and recursion;
- premium amortization / discount accumulation;
- valuation between coupon dates;
- yield determination;
- callable and serial bond logic;
- frequency/rate generalizations;
- selected other securities and valuation context.

### Compressed

- repeated bond-price examples with identical mechanics;
- lengthy market convention discussion;
- calculator keystrokes;
- routine exercises;
- detailed accounting discussion in Section 6.11.

### Scope Note

Sections 6.10–6.11 are retained mainly as textbook context. The CF1 core from this chapter is bond pricing, book value, premium/discount amortization, coupon/redemption quantities, yield, and term.
