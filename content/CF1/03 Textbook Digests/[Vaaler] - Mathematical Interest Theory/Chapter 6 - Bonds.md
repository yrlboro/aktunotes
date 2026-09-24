---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "6"
chapter_title: "Bonds"
cf1_topics: ["5.1", "5.2", "5.3"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 6, Sections 6.1–6.10; calculator section 6.11 compressed; problem set 6.12 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler, Bonds, BondPricing, Amortization, Yield]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 6: Bonds

> [!ABSTRACT] Chapter in One View
> Chapter 6 applies equation-of-value and loan-amortization machinery to **bonds**. Vaaler first establishes a deliberately detailed notation system distinguishing **face value $F$**, **redemption amount $C$**, coupon rates, yield rates, price $P$, base amount $G$, and present value of redemption $K$. The basic price formula values coupon cash flows plus redemption. Rewriting it produces the **premium-discount formula**, which immediately explains why coupon rate above yield creates a premium and coupon rate below yield creates a discount. Alternative forms, especially the base-amount/Makeham-style representation, make many unknown-term and book-value problems easier. Bond amortization is then treated as a special case of loan amortization: book value evolves by earning yield and paying coupon, with premium amortized or discount accumulated over time. Sections 6.6–6.7 distinguish values between coupon dates, including clean versus dirty prices and book value versus market sale price. Section 6.8 develops yield-rate problems, while callable and floating-rate bonds are introduced later as extensions. For CF1, the chapter is the core source for [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]], and [[5.3 Yield Rate and Coupon Calculations]].

## 1. Why This Chapter Exists

A bond is a structured package of future cash flows.

For a standard coupon bond, investor:

- pays a purchase price now;
- receives coupons at regular intervals;
- receives redemption amount at maturity.

Therefore bond mathematics is not a new theory. It is:

```text
coupon annuity
+
redemption lump sum
+
yield-rate equation of value
```

What makes bonds tricky is terminology and convention:

- face value need not equal redemption value;
- coupon rate is not yield;
- annual effective yield differs from nominal yield convertible with coupon frequency;
- price at issue, book value, clean price, dirty price, and market sale price can differ.

Chapter 6 develops language and formulas that prevent these quantities from being mixed.

## 2. Chapter Map

- **6.1 Introduction**
- **6.2 Bond Alphabet Soup and the Basic Price Formula**
- **6.3 The Premium-Discount Formula**
- **6.4 Other Pricing Formulas for Bonds**
- **6.5 Bond Amortization Schedules**
- **6.6 Valuing a Bond After Its Date of Issue**
- **6.7 Selling a Bond After Its Date of Issue**
- **6.8 Yield Rate Examples**
- **6.9 Callable Bonds**
- **6.10 Floating-Rate Bonds**
- **6.11 BA II Plus Calculator Bond Worksheet**
- **6.12 Problems**

| Section | CF1 Relevance | Connected Note |
|---|---|---|
| 6.1–6.4 | Core | [[5.1 Bond Pricing]], [[5.3 Yield Rate and Coupon Calculations]] |
| 6.5 | Core | [[5.2 Book Value, Premium and Discount Amortization]] |
| 6.6–6.8 | Core/Supporting | [[5.1 Bond Pricing]], [[5.3 Yield Rate and Coupon Calculations]] |
| 6.9 | Supporting | callable-bond yield logic |
| 6.10 | Beyond/core-supporting | floating-rate extension |
| 6.11 | Calculator-only | compressed |

## 3. 6.1 Introduction

A **bond** is a security issued by a government entity or corporation promising future payments.

Key dates:

- **issue date** — investor effectively loans money to issuer;
- **maturity/redemption date** — final contractual payment date;
- **term** — time from issue to maturity.

A **zero-coupon bond** promises one principal payment at maturity.

A **coupon bond** promises periodic coupon payments plus redemption amount at maturity.

A bond with fixed maturity is **noncallable**. Callable bonds are introduced later because the issuer or holder may have choices affecting actual redemption date.

## 4. 6.2 Bond Alphabet Soup and the Basic Price Formula

Vaaler intentionally introduces many symbols because bond problems contain several similar-looking rates and dollar amounts.

### 4.1 Core notation

Let:

- $F$ = face/par value;
- $\alpha$ = nominal annual coupon rate convertible $m$ times per year;
- $m$ = coupons per year;
- $N$ = term in years;
- $n=Nm$ = number of coupon periods;
- $r=\alpha/m$ = coupon rate per coupon period;
- $Fr$ = coupon amount;
- $C$ = redemption amount;
- $g=Fr/C$ = modified coupon rate;
- $I$ = nominal annual yield rate convertible $m$ times;
- $j=I/m$ = effective yield per coupon period;
- $i=(1+j)^m-1$ = annual effective yield;
- $G=Fr/j$ = base amount;
- $P$ = bond price;
- $v_j=(1+j)^{-1}$;
- $K=Cv_j^n$ = present value of redemption.

> [!IMPORTANT] Face vs Redemption
> Do not silently assume:
>
> $$
> F=C.
> $$
>
> A par-value bond satisfies $F=C$, but Vaaler explicitly keeps the quantities separate.

### 4.2 Coupon amount

Coupon per period:

$$
\boxed{
Fr=F\frac{\alpha}{m}.
}
$$

Modified coupon rate:

$$
\boxed{
g=\frac{Fr}{C}.
}
$$

Hence:

$$
Fr=Cg.
$$

Base amount:

$$
\boxed{
G=\frac{Fr}{j}.
}
$$

so:

$$
Fr=Gj.
$$

$G$ is the amount that, invested at yield $j$, would produce one coupon as its periodic interest.

### 4.3 Basic price formula

Cash-flow timeline:

| Coupon period | 0 | 1 | 2 | $\cdots$ | $n$ |
|---:|---:|---:|---:|---:|---:|
| Investor cash flow | $-P$ | $Fr$ | $Fr$ | $\cdots$ | $Fr+C$ |

Equation of value at issue:

$$
\boxed{
P
=
(Fr)a_{\overline{n}|j}
+
Cv_j^n.
}
$$

Equivalently:

$$
\boxed{
P
=
(Cg)a_{\overline{n}|j}
+
Cv_j^n.
}
$$

This is Vaaler's **basic price formula**.

### 4.4 Example 6.2.3 — price and base amount

Eight-year bond:

- $F=3,000$;
- nominal coupon 10%, semiannual;
- $C=2,800$;
- annual effective yield 12%.

Coupon rate per half-year:

$$
r=0.10/2=0.05.
$$

Coupon:

$$
Fr=3000(0.05)=150.
$$

Effective half-year yield:

$$
j=(1.12)^{1/2}-1
\approx0.058300524.
$$

Base amount:

$$
G=\frac{150}{j}
\approx
\boxed{2,572.88}.
$$

Price:

$$
P
=
150a_{\overline{16}|j}
+
2800v_j^{16}
\approx
\boxed{2,664.61}.
$$

### 4.5 Example 6.2.5 — solving yield

Twelve-year $2,000 8% par-value bond with quarterly coupons is bought for $2,200.

Coupon:

$$
2000\left(\frac{0.08}{4}\right)=40.
$$

There are:

$$
n=12(4)=48
$$

coupons.

Yield per quarter solves:

$$
2200
=
40a_{\overline{48}|j}
+
2000(1+j)^{-48}.
$$

Vaaler obtains:

$$
j\approx1.693949325\%.
$$

Then annual effective:

$$
i=(1+j)^4-1
\approx
6.949917684\%.
$$

Nominal yield convertible quarterly:

$$
I=4j
\approx
6.7757973\%.
$$

> [!WARNING] Frequency Trap
> Coupon period yield $j$, nominal annual yield $I$, and annual effective yield $i$ are different quantities.

## 5. 6.3 The Premium-Discount Formula

Start with:

$$
P=(Cg)a_{\overline{n}|j}+Cv_j^n.
$$

Use:

$$
v_j^n=1-ja_{\overline{n}|j}.
$$

Then:

$$
P
=
Cg\,a_{\overline{n}|j}
+
C\left(1-ja_{\overline{n}|j}\right).
$$

Thus:

$$
\boxed{
P
=
C
+
C(g-j)a_{\overline{n}|j}.
}
$$

This is the **premium-discount formula**.

### 5.1 Premium condition

If:

$$
g>j,
$$

then:

$$
P>C.
$$

Premium amount:

$$
\boxed{
P-C
=
C(g-j)a_{\overline{n}|j}.
}
$$

Economic interpretation:

Coupons are larger than the yield-interest required on redemption amount $C$, so investor pays extra upfront.

### 5.2 Discount condition

If:

$$
g<j,
$$

then:

$$
P<C.
$$

Discount amount:

$$
\boxed{
C-P
=
C(j-g)a_{\overline{n}|j}.
}
$$

Coupons are insufficient to provide yield $j$ on $C$, so investor compensates by paying less than redemption value.

### 5.3 Par condition

If:

$$
g=j,
$$

then:

$$
\boxed{
P=C.
}
$$

> [!IMPORTANT] Compare with Redemption, Not Automatically Face
> Premium/discount is defined relative to **redemption amount $C$** in Vaaler's setup.

## 6. 6.4 Other Pricing Formulas for Bonds

Vaaler derives alternative expressions because one formula may expose an unknown more conveniently than another.

### 6.1 Base amount form

Since:

$$
Fr=Gj,
$$

basic price formula becomes:

$$
P
=
Gj\,a_{\overline{n}|j}
+
Cv_j^n.
$$

Using:

$$
j\,a_{\overline{n}|j}=1-v_j^n,
$$

we obtain:

$$
P
=
G(1-v_j^n)
+
Cv_j^n.
$$

Thus:

$$
\boxed{
P
=
G+(C-G)v_j^n.
}
$$

This form is especially useful when solving for term $n$:

$$
P-G
=
(C-G)v_j^n.
$$

Hence:

$$
\boxed{
v_j^n
=
\frac{P-G}{C-G}.
}
$$

Then logarithms can isolate $n$.

### 6.2 Makeham-style decomposition

The same formula can be interpreted as:

$$
\boxed{
P=G+(C-G)v_j^n.
}
$$

It separates bond price into:

- base amount $G$;
- discounted adjustment from $G$ to final redemption $C$.

This often simplifies problems with unknown redemption, term, or yield relationships.

## 7. 6.5 Bond Amortization Schedules

Bond amortization is a special case of loan amortization from the investor's perspective.

Let $B_t$ denote **book value immediately after coupon $t$**.

Boundary values:

$$
\boxed{
B_0=P,
\qquad
B_n=C.
}
$$

### 7.1 Yield interest

During coupon period $t$, book value $B_{t-1}$ earns yield interest:

$$
\boxed{
I_t=jB_{t-1}.
}
$$

The investor receives coupon:

$$
Cg.
$$

Book value recursion:

$$
\boxed{
B_t
=
B_{t-1}(1+j)-Cg.
}
$$

### 7.2 Prospective book value

Immediately after coupon $t$, remaining cash flows are:

- $n-t$ coupons;
- redemption $C$.

Therefore:

$$
\boxed{
B_t
=
Cg\,a_{\overline{n-t}|j}
+
Cv_j^{n-t}.
}
$$

Premium-discount form:

$$
\boxed{
B_t
=
C+C(g-j)a_{\overline{n-t}|j}.
}
$$

Base-amount form:

$$
\boxed{
B_t
=
G+(C-G)v_j^{n-t}.
}
$$

### 7.3 Premium amortization

For a premium bond:

$$
g>j.
$$

Coupon exceeds yield interest:

$$
Cg>jB_{t-1}.
$$

The excess:

$$
\boxed{
\text{premium amortized in coupon }t
=
Cg-jB_{t-1}.
}
$$

Therefore book value decreases toward $C$.

### 7.4 Discount accumulation

For a discount bond:

$$
g<j.
$$

Yield interest exceeds coupon:

$$
jB_{t-1}>Cg.
$$

The difference:

$$
\boxed{
\text{discount accumulated in period }t
=
jB_{t-1}-Cg.
}
$$

Book value rises toward $C$.

### 7.5 Principal-adjustment progression

Define book-value change:

$$
B_t-B_{t-1}.
$$

From the recursion:

$$
B_t-B_{t-1}
=
jB_{t-1}-Cg.
$$

For a discount bond this is positive accumulation; for premium it is negative.

Successive principal adjustments form a geometric pattern tied to $1+j$, paralleling amortized loans.

### 7.6 Endpoint sanity check

Regardless of premium or discount:

$$
\boxed{
B_n=C.
}
$$

Thus:

- premium bond: $B_t$ declines to $C$;
- discount bond: $B_t$ rises to $C$;
- par bond: $B_t=C$ throughout coupon dates.

## 8. 6.6 Valuing a Bond After Its Date of Issue

At a coupon date, book value is straightforward.

Between coupon dates, Vaaler distinguishes valuation conventions because accrued coupon interest has not yet been paid.

### 8.1 Dirty value

The **dirty value** includes accrued interest.

Under the theoretical compound-interest approach, if fraction $h$ of a coupon period has elapsed since the previous coupon:

$$
\boxed{
\text{dirty value}
=
B_t(1+j)^h.
}
$$

where $B_t$ is book value immediately after the previous coupon.

### 8.2 Clean value

The **clean value** removes accrued coupon interest from the dirty value.

In practice, accrued coupon interest is often approximated proportionally to time since last coupon.

Thus conceptually:

$$
\boxed{
\text{clean value}
=
\text{dirty value}
-
\text{accrued coupon interest}.
}
$$

### 8.3 Theoretical versus practical method

Vaaler discusses both:

- a theoretical compound-interest interpolation;
- a practical market-style accrued-interest convention.

[CF1 SUPPORTING CONTEXT]

For core CF1 bond mathematics, the crucial point is to distinguish:

> book value at coupon dates  
> versus  
> between-coupon dirty/clean valuation.

## 9. 6.7 Selling a Bond After Its Date of Issue

A bond holder need not hold until maturity.

If sold, the new market price is determined by the **new purchaser's required yield**, not by the original investor's book yield.

Therefore:

- **book value** = value under original purchase yield;
- **market/sale price** = value under current yield applicable at sale.

At a coupon date with $n-t$ periods remaining and new yield $y$:

$$
\boxed{
P_{\text{sale}}
=
Cg\,a_{\overline{n-t}|y}
+
Cv_y^{n-t}.
}
$$

If sale occurs between coupon dates, clean/dirty price distinctions apply.

### 9.1 Original investor's actual yield

If investor buys at $P_0$, receives coupons, and sells at $P_s$, actual holding-period yield solves the equation of value for those **actual realized cash flows**.

Therefore it can differ from the original yield-to-maturity.

> [!IMPORTANT] Book Value Is Not Automatically Market Value
> Book value assumes the original yield basis. Market value reprices remaining cash flows at the new yield.

## 10. 6.8 Yield Rate Examples

Yield is always the rate solving the bond equation of value.

For ordinary bond:

$$
P
=
Cg\,a_{\overline{n}|j}
+
Cv_j^n.
$$

When $P$, coupon, redemption, and term are known, $j$ usually requires numerical solution.

### 10.1 Price-yield direction

Because future positive cash flows are discounted more heavily at larger yield:

$$
\boxed{
j\uparrow
\quad\Rightarrow\quad
P\downarrow.
}
$$

This gives a strong root-finding sanity check.

### 10.2 Reinvestment and realized yield

Quoted yield-to-maturity assumes the contractual cash flows are valued consistently at that yield.

If coupons are actually reinvested at another rate, realized accumulation over the holding period may differ.

Thus distinguish:

- **yield to maturity** from bond price equation;
- **realized yield** from actual investment experience.

### 10.3 Inflation-linked example

Vaaler includes a bond whose coupon and redemption grow with a projected inflation factor. The valuation is still performed by discounting the actual growing cash flows.

The chapter thereby reinforces that a bond need not have level coupons; the basic principle remains NPV of promised payments.

## 11. 6.9 Callable Bonds

[CF1 SUPPORTING CONTEXT]

A callable bond allows redemption at permitted earlier coupon dates.

For a possible call after coupon $k$ with redemption $C$:

$$
P
=
Cg\,a_{\overline{k}|y_k}
+
Cv_{y_k}^{k}.
$$

This defines yield $y_k$ conditional on that call date.

Vaaler shows an important monotonic result for a bond purchased at a **discount** with level call amount $C$: later redemption produces a lower yield, so if issuer controls call timing, maturity can be the least favorable yield to the investor.

Callable-bond optimization is broader than the core Topik 5 syllabus list, so the detailed proof is not retained here.

## 12. 6.10 Floating-Rate Bonds

[BEYOND CF1]

Floating-rate bonds have coupons linked to prevailing interest rates rather than fixed coupons. Their cash flows are therefore interest-sensitive and require valuation rules that account for reset mechanics. The section is useful context but is not part of the central CF1 Topik 5 learning outcomes, so it is not expanded further.

## 13. 6.11 BA II Plus Calculator Bond Worksheet

[BEYOND CF1 / TOOL-SPECIFIC]

Vaaler explains calculator-specific bond worksheet procedures. Per condensed-note rules, calculator keystrokes are omitted; the underlying mathematics is already captured by Sections 6.2–6.8.

## 14. Core Formula Network

### Basic price

$$
\boxed{
P
=
Fr\,a_{\overline{n}|j}
+
Cv_j^n
}
$$

or:

$$
\boxed{
P
=
Cg\,a_{\overline{n}|j}
+
Cv_j^n
}
$$

### Premium-discount

$$
\boxed{
P
=
C+C(g-j)a_{\overline{n}|j}
}
$$

Premium:

$$
\boxed{
P-C
=
C(g-j)a_{\overline{n}|j}
}
$$

Discount:

$$
\boxed{
C-P
=
C(j-g)a_{\overline{n}|j}
}
$$

### Base amount

$$
\boxed{
G=\frac{Fr}{j}
}
$$

$$
\boxed{
P=G+(C-G)v_j^n
}
$$

### Book value

$$
\boxed{
B_t
=
Cg\,a_{\overline{n-t}|j}
+
Cv_j^{n-t}
}
$$

$$
\boxed{
B_t
=
G+(C-G)v_j^{n-t}
}
$$

Recursion:

$$
\boxed{
B_t=(1+j)B_{t-1}-Cg
}
$$

Yield interest:

$$
\boxed{
I_t=jB_{t-1}
}
$$

Premium amortization:

$$
\boxed{
Cg-jB_{t-1}
}
$$

Discount accumulation:

$$
\boxed{
jB_{t-1}-Cg
}
$$

## 15. Important Distinctions

> [!IMPORTANT] Face Value $F$ vs Redemption $C$
> Face determines coupon amount. Redemption is the principal cash flow at maturity. They need not be equal.

> [!IMPORTANT] Coupon Rate vs Yield Rate
> Coupon rate determines contractual coupon. Yield is the investor's return implied by price and cash flows.

> [!IMPORTANT] $r$ vs $g$
> $r$ is coupon rate per coupon period relative to face $F$.  
> $g$ is modified coupon rate relative to redemption $C$.

> [!IMPORTANT] $j$ vs $i$ vs $I$
> $j$ = effective yield per coupon period.  
> $I=mj$ = nominal annual yield convertible $m$ times.  
> $i=(1+j)^m-1$ = annual effective yield.

> [!IMPORTANT] Premium/Discount Reference
> In Vaaler's formulas compare price to **redemption $C$**, not automatically to face $F$.

> [!IMPORTANT] Book Value vs Market Price
> Book value uses original yield basis; sale price uses current market/new-purchaser yield.

> [!IMPORTANT] Clean vs Dirty
> Dirty includes accrued interest; clean removes accrued coupon interest.

## 16. Sanity Checks

### Price-yield relationship

$$
j\uparrow
\Rightarrow
P\downarrow.
$$

### Premium bond

If:

$$
g>j,
$$

then:

$$
P>C.
$$

Book value should move downward toward $C$.

### Discount bond

If:

$$
g<j,
$$

then:

$$
P<C.
$$

Book value should move upward toward $C$.

### Par bond

If:

$$
g=j,
$$

then:

$$
P=C.
$$

At coupon dates, book value remains $C$.

### Endpoint

Always:

$$
B_n=C.
$$

## 17. Worked Pattern Library

### Pattern A — Find price

1. convert quoted yield to coupon-period $j$;
2. compute coupon $Fr$;
3. count coupon periods $n$;
4. use:

$$
P=Fr\,a_{\overline{n}|j}+Cv_j^n.
$$

### Pattern B — Find yield

Set:

$$
P
=
Fr\,a_{\overline{n}|j}
+
Cv_j^n
$$

and solve numerically for $j$.

Then convert to requested annual basis.

### Pattern C — Find term

If $G$ is convenient:

$$
P=G+(C-G)v_j^n.
$$

Then:

$$
v_j^n
=
\frac{P-G}{C-G}.
$$

Use logs.

### Pattern D — Find premium amortization

Immediately before coupon $t$, use prior book value $B_{t-1}$:

$$
\text{yield interest}=jB_{t-1}.
$$

For premium bond:

$$
\text{amortization}=Cg-jB_{t-1}.
$$

### Pattern E — Find sale price after $t$ coupons

Reprice **remaining** cash flows with new yield $y$:

$$
P_t
=
Cg\,a_{\overline{n-t}|y}
+
Cv_y^{n-t}.
$$

## 18. CF1 Connection Map

```text
TVM + equation of value
        ↓
annuity valuation
        ↓
coupon stream + redemption
        ↓
[[5.1 Bond Pricing]]
        ├─ basic price formula
        ├─ premium-discount formula
        └─ base amount form
                ↓
book value recursion
        ↓
[[5.2 Book Value, Premium and Discount Amortization]]
        ↓
unknown yield / coupon / redemption / term
        ↓
[[5.3 Yield Rate and Coupon Calculations]]
```

## 19. Quick Reading Review

- A coupon bond is an annuity of coupons plus a redemption lump sum.
- Face value and redemption value need not be equal.
- Coupon amount is $Fr$.
- Modified coupon rate satisfies $Fr=Cg$.
- Effective yield per coupon period is $j$.
- Basic price: $P=Fr\,a_{\overline{n}|j}+Cv_j^n$.
- Premium-discount formula: $P=C+C(g-j)a_{\overline{n}|j}$.
- Premium iff $g>j$; discount iff $g<j$.
- Base amount $G=Fr/j$ gives $P=G+(C-G)v_j^n$.
- Book value is the value of remaining bond cash flows at the original yield.
- Book value recursion is $B_t=(1+j)B_{t-1}-Cg$.
- Premium amortization = coupon − yield interest.
- Discount accumulation = yield interest − coupon.
- Book value converges to redemption $C$.
- Dirty value includes accrued interest; clean value excludes it.
- Market sale price is based on the new purchaser's required yield.
- Yield generally requires numerical root solving.
- Higher yield means lower price.
- Callable and floating-rate bonds are extensions of the same cash-flow valuation framework.

## 20. Compression Notes

### Retained in Detail

- Vaaler bond notation;
- basic price formula;
- premium-discount derivation;
- base amount formula;
- coupon/yield frequency conversion;
- book value and amortization mechanics;
- premium amortization and discount accumulation;
- between-coupon clean/dirty distinction;
- sale-price repricing;
- yield-rate interpretation;
- representative textbook examples.

### Compressed

- inflation-linked bond example;
- callable-bond proof;
- detailed day-count examples;
- repeated numerical yield problems;
- BA II Plus instructions.

### Omitted

- Chapter 6 problem set;
- calculator keystrokes;
- detailed floating-rate mechanics outside core CF1 scope.

## Source Traceability

- **Primary textbook:** Vaaler, Vaaler & Daniel, *Mathematical Interest Theory*, 2nd ed., Chapter 6, “Bonds.”
- **Source scope used:** Sections 6.1–6.10, with 6.11 compressed as tool-specific context.
- **CF1 scope:** Topik 5 — Model Penentuan Harga Obligasi.
- **No outside textbook was used to expand the chapter content.**
