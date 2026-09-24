---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "8"
chapter_title: "Arbitrage, the term structure of interest rates, and derivatives"
cf1_topics: ["3.1", "3.2"]
cf1_relevance: "Mixed"
source_scope: "Vaaler Chapter 8, Sections 8.1–8.11; Section 8.3 retained in detail because it is the CF1-assigned scope; other sections compressed as beyond/supporting context; problem set 8.12 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler, TermStructure, SpotRates, ForwardRates, Arbitrage]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 8: Arbitrage, the term structure of interest rates, and derivatives

> [!ABSTRACT] Chapter in One View
> Chapter 8 is broader than the CF1 assignment for Vaaler: the syllabus uses **Section 8.3** as a principal source for the term structure of interest rates, while the remainder of the chapter develops arbitrage and derivatives. Vaaler begins from the **law of one price**: in an arbitrage-free market, two portfolios with identical cash flows must have identical prices. Section 8.3 then applies this principle to fixed-income securities. The central objects are **spot rates** $r_t$, which price single cash flows by maturity, and **implied/theoretical forward rates** $f_{[t,s]}$, which are the future-interval rates implied by current spot rates. Coupon-bond prices can be used recursively to infer spot rates, while spot rates in turn price any fixed deterministic cash-flow stream. Vaaler emphasizes that a bond's yield to maturity is not the same thing as its individual maturity-specific spot rates, and that implied forward rates are not forecasts guaranteed to equal future market rates. The later sections on forwards, futures, options, option pricing, and swaps illustrate broader no-arbitrage applications but are outside the Vaaler chapter scope assigned to CF1 Topik 3 and are therefore highly compressed here.

## 1. Why This Chapter Exists

Earlier chapters often value a stream by one level yield. Market data, however, need not support the same rate for every maturity.

A one-year zero-coupon security may yield one rate, while a five-year zero-coupon security yields another. Once rates depend on maturity, a single yield no longer represents the full market discount structure.

Chapter 8 therefore asks two questions:

1. **How must security prices relate if arbitrage is impossible?**
2. **How do market prices across maturities determine a term structure of spot and forward rates?**

For CF1, the second question is central.

> [!IMPORTANT] CF1 Scope Boundary
> According to the CF1 syllabus, the Vaaler reference for Topik 3 is **Chapter 8.3 and Chapter 9**, not all of Chapter 8. Therefore Sections 8.1–8.2 and 8.4–8.11 are retained only as brief context unless they directly explain the no-arbitrage logic behind Section 8.3.

## 2. Chapter Map

- **8.1 Introduction**
- **8.2 Arbitrage**
- **8.3 The Term Structure of Interest Rates** — **[CORE CF1]**
- **8.4 Forward Contracts** — [BEYOND CF1 in Vaaler mapping]
- **8.5 Commodity Futures Held Until Delivery** — [BEYOND CF1]
- **8.6 Offsetting Positions and Liquidity of Futures Contracts** — [BEYOND CF1]
- **8.7 Price Discovery and More Kinds of Futures** — [BEYOND CF1]
- **8.8 Options** — [BEYOND CF1]
- **8.9 Using Replicating Portfolios to Price Options** — [BEYOND CF1]
- **8.10 Using Weighted Averages to Price Options** — [BEYOND CF1]
- **8.11 Swaps** — [BEYOND CF1]
- **8.12 Problems** — omitted.

| Section | CF1 Relevance | Connected Note |
|---|---|---|
| 8.1–8.2 | Supporting | [[3.1 Spot Rates and Forward Rates]], [[3.2 Yield Curve]] |
| 8.3 | Core | [[3.1 Spot Rates and Forward Rates]], [[3.2 Yield Curve]] |
| 8.4–8.11 | Beyond this Vaaler CF1 mapping | derivative topics are separately sourced from McDonald in CF1 |

## 3. 8.1 Introduction

Vaaler defines **arbitrage** as an opportunity to make money with no capital outlay and no possibility of loss.

In a market where arbitrage opportunities are rapidly exploited, the working assumption is that persistent arbitrage should not exist.

This yields the **law of one price**:

> If two investments produce exactly the same cash flows, they must have the same price.

Section 8.3 uses this logic to derive maturity-specific interest rates from market prices.

## 4. 8.2 Arbitrage

[CF1 SUPPORTING CONTEXT]

The key principle is replication.

If portfolio A and portfolio B generate identical future cash flows but:

$$
P_A<P_B,
$$

an arbitrageur can:

- buy A;
- short or sell B;
- receive positive cash today;
- have future cash flows cancel.

Therefore, in an arbitrage-free model:

$$
\boxed{
\text{same future cash flows}
\Rightarrow
\text{same current price}.
}
$$

This is the conceptual foundation for coupon stripping and spot-rate extraction.

## 5. 8.3 The Term Structure of Interest Rates

[CORE CF1]

### 5.1 Why one yield is not enough

A coupon bond's yield to maturity is a **single internal rate** that reproduces the bond price when applied to all its cash flows.

But if the market assigns different rates to different maturities, each cash flow should be discounted using the rate associated with its own payment date.

This maturity-dependent collection of rates is the **term structure of interest rates**.

### 5.2 Spot rate definition

For $t>0$, Vaaler defines $r_t$ as the annual effective **spot rate** for money invested over:

$$
[0,t].
$$

If $K$ is invested at time 0, it grows to:

$$
\boxed{
K(1+r_t)^t
}
$$

at time $t$.

Therefore the time-0 value of a single payment $C_t$ due at $t$ is:

$$
\boxed{
PV_0(C_t)
=
C_t(1+r_t)^{-t}.
}
$$

For deterministic cash flows $C_1,\ldots,C_n$:

$$
\boxed{
P
=
\sum_{t=1}^{n}
C_t(1+r_t)^{-t}.
}
$$

> [!IMPORTANT] Maturity Matching
> Cash flow at time $t$ uses **spot rate $r_t$**, not a common YTM unless the term structure is flat.

### 5.3 Spot rate from a zero-coupon price

If a zero-coupon security costs $P$ and pays $F$ at time $t$:

$$
P(1+r_t)^t=F.
$$

Thus:

$$
\boxed{
r_t
=
\left(\frac{F}{P}\right)^{1/t}-1.
}
$$

A zero-coupon bond therefore reveals its maturity spot rate directly.

### 5.4 Coupon stripping and replication

A coupon bond can be viewed as a package of separate future cash flows.

In an arbitrage-free market, if zero-coupon securities exist for the relevant dates, the coupon bond price must equal the sum of the prices of securities that replicate each payment.

This is the logic behind **coupon stripping**.

[TEXTBOOK CONTEXT] Vaaler discusses the historical development of stripping and Treasury STRIPS as institutional context. The financial lesson is that individual coupon and principal cash flows can be treated as separately priced maturity claims.

### 5.5 Bootstrapping / recursively determining spot rates

Suppose shorter spot rates are already known.

For a coupon bond with price $P$, annual coupon $C$, redemption $F$, and maturity $n$:

$$
P
=
\sum_{t=1}^{n-1}
C(1+r_t)^{-t}
+
(C+F)(1+r_n)^{-n}.
$$

Everything except $r_n$ is known, so:

$$
(C+F)(1+r_n)^{-n}
=
P
-
\sum_{t=1}^{n-1}
C(1+r_t)^{-t}.
$$

Hence $r_n$ can be solved.

This is the recursive logic used to obtain a spot-rate curve from successively longer bonds.

### 5.6 Textbook Example 8.3.3 — two-year spot rate

Vaaler considers a one-year $1,000 security selling for:

$$
975
$$

and a two-year $1,000 bond with a 3% annual coupon selling for:

$$
984.
$$

The first-year $30 coupon can be replicated by 3% of the one-year $1,000 security.

Its price is:

$$
0.03(975)=29.25.
$$

Therefore the remaining two-year cash flow of $1,030 has implicit current price:

$$
984-29.25
=
954.75.
$$

So:

$$
954.75(1+r_2)^2
=
1030.
$$

Thus:

$$
\boxed{
r_2
=
\left(\frac{1030}{954.75}\right)^{1/2}-1
\approx
3.866088985\%.
}
$$

The second solution in the textbook is particularly instructive because it shows exactly how replication identifies the correct maturity price.

### 5.7 Why the bootstrapped rate is forced by no-arbitrage

Suppose a two-year zero-coupon bond existed at a materially different yield from the $r_2$ implied above.

Then one could combine:

- a position in the original coupon bond;
- a one-year zero-coupon security to reproduce the first coupon;
- the mispriced two-year zero-coupon bond to reproduce the maturity cash flow;

and create a riskless net profit.

Therefore the spot rate is not merely a statistical estimate; in the no-arbitrage framework it is the rate required for cash-flow prices to be internally consistent.

## 6. Yield Curve and Spot Rate Curve

Vaaler distinguishes a bond **yield curve** from the **spot-rate curve**.

A yield curve plots yields of coupon-bearing securities against maturity. Since each coupon-bond YTM compresses multiple maturity cash flows into one rate, it is not the same object as the spot curve.

Vaaler states:

- for a **normal/upward-sloping yield curve**, the spot curve tends to lie above the yield curve;
- for an **inverted yield curve**, the spot curve tends to lie below the yield curve.

The reason is that a coupon bond receives some value from earlier coupons. Its YTM is therefore influenced by shorter-maturity rates as well as the terminal rate.

> [!IMPORTANT] YTM vs Spot
> **YTM:** one internal rate for the entire bond.  
> **Spot rates:** separate rates for individual maturities.

## 7. Example 8.3.5 — Spot Rates from Coupon-Bond Yields

Vaaler provides a table of 5% par-value annual-coupon bonds:

| Term | Yield |
|---:|---:|
| 1 year | 1.7568% |
| 2 years | 3.0153% |
| 3 years | 3.5463% |
| 4 years | 3.8616% |
| 5 years | 4.2984% |

The one-year bond's only coupon coincides with maturity, so it effectively provides the one-year spot rate.

For longer bonds, Vaaler recursively discounts earlier coupons with already determined spot rates and isolates the terminal maturity cash flow.

The resulting spot accumulation factors used later in the chapter include approximately:

$$
1+r_1=1.017568,
$$

$$
(1+r_2)^2\approx1.061859431,
$$

$$
(1+r_3)^3\approx1.111737654,
$$

$$
(1+r_4)^4\approx1.166330699,
$$

$$
(1+r_5)^5\approx1.239807347.
$$

These factors become the inputs for implied forward rates.

## 8. Implied / Theoretical Forward Rates

Let:

$$
0<t<s.
$$

If $K$ invested at time 0 grows to:

$$
K(1+r_t)^t
$$

at time $t$, and the same original $K$ must grow to:

$$
K(1+r_s)^s
$$

at time $s$, then the accumulation factor over $[t,s]$ must be:

$$
\frac{(1+r_s)^s}{(1+r_t)^t}.
$$

Vaaler defines the annual effective **implied/theoretical forward rate** $f_{[t,s]}$ by:

$$
\boxed{
(1+f_{[t,s]})^{s-t}
=
\frac{(1+r_s)^s}{(1+r_t)^t}.
}
$$

Thus:

$$
\boxed{
f_{[t,s]}
=
\left[
\frac{(1+r_s)^s}{(1+r_t)^t}
\right]^{1/(s-t)}
-1.
}
$$

For $t=0$, Vaaler defines:

$$
\boxed{
f_{[0,s]}=r_s.
}
$$

### 8.1 Mental derivation

There are two equivalent paths from time 0 to time $s$:

```text
Path A:
0 -------------------------- s
          spot r_s

Path B:
0 ------------ t ----------- s
     spot r_t      forward f_[t,s]
```

No-arbitrage consistency requires both paths to have the same total accumulation.

> [!WARNING] Forward Rate Is Not a Difference
> In general:
>
> $$
> f_{[t,s]}
> \ne
> r_s-r_t.
> $$
>
> Interest accumulation is multiplicative, not additive.

## 9. Example 8.3.9 — Forward Rate Curves

Using the spot accumulation factors derived from the 5% coupon-bond table, Vaaler computes implied forward rates.

For example, the forward rate over years 2 to 5 satisfies:

$$
1+f_{[2,5]}
=
\left[
\frac{(1+r_5)^5}{(1+r_2)^2}
\right]^{1/3}.
$$

Substituting the textbook factors:

$$
1+f_{[2,5]}
\approx
\left(
\frac{1.239807347}{1.061859431}
\right)^{1/3}
\approx
1.053001668.
$$

Therefore:

$$
\boxed{
f_{[2,5]}
\approx
5.300166768\%.
}
$$

Vaaler then builds **forward curves** by fixing an interval length $w$ and plotting:

$$
\left(t,f_{[t,t+w]}\right).
$$

This differs from the spot curve because a forward curve isolates the implied rate over a future subinterval rather than from today to a maturity.

## 10. Reconstructing Spot Accumulation from Forward Rates

If:

$$
0<t_1<t_2<\cdots<t_k=t,
$$

then Vaaler gives:

$$
\boxed{
(1+r_t)^t
=
(1+f_{[0,t_1]})^{t_1}
(1+f_{[t_1,t_2]})^{t_2-t_1}
\cdots
(1+f_{[t_{k-1},t_k]})^{t_k-t_{k-1}}.
}
$$

This is Equation 8.3.10.

It says that the spot accumulation factor over the whole horizon can be decomposed into successive forward accumulation factors.

## 11. Implied Forward Rate vs Future Market Rate

Vaaler is explicit that the **implied forward rate** need not equal the actual rate available in the future.

- $f_{[t,s]}$ is implied by current spot rates.
- The actual market rate observed at time $t$ for lending until $s$ may be higher or lower.

If an investor believes the future market rate will differ from the implied forward rate, the investor may speculate on that expectation. Profit is then **not arbitrage** because the outcome depends on whether the forecast is correct.

> [!IMPORTANT] Distinction
> Implied forward rate = current no-arbitrage implication.  
> Future market rate = rate actually observed later.  
> They are not guaranteed to be equal.

## 12. CF1 Calculation Workflow

### A. Zero-coupon price → spot rate

$$
P=F(1+r_t)^{-t}.
$$

Solve:

$$
r_t
=
(F/P)^{1/t}-1.
$$

### B. Coupon bond → next spot rate

1. identify all cash flows;
2. discount earlier cash flows with already-known spot rates;
3. subtract their PVs from bond price;
4. isolate terminal cash flow;
5. solve terminal spot rate.

### C. Two spot rates → implied forward rate

$$
(1+f_{[t,s]})^{s-t}
=
\frac{(1+r_s)^s}{(1+r_t)^t}.
$$

Then annualize using exponent:

$$
1/(s-t).
$$

### D. Forward rates → spot accumulation

Multiply successive forward growth factors over their actual interval lengths.

## 13. 8.4–8.11 — Beyond CF1 Scope in This Vaaler Mapping

### 8.4 Forward Contracts

[BEYOND CF1 for this Vaaler chapter mapping]

Vaaler applies no-arbitrage pricing to forward contracts and derives forward prices by comparing spot purchase plus financing/carrying cash flows with contracted future delivery.

### 8.5–8.7 Futures

[BEYOND CF1]

These sections discuss futures held to delivery, offsetting positions, liquidity, marking-to-market ideas, price discovery, and additional classes of futures.

### 8.8 Options

[BEYOND CF1]

Vaaler introduces call and put option structures and their payoff characteristics.

### 8.9–8.10 Option Pricing

[BEYOND CF1]

No-arbitrage replicating portfolios and weighted-average/risk-neutral-style constructions are used to price options in simplified models.

### 8.11 Swaps

[BEYOND CF1]

Vaaler discusses interest-rate, currency, and equity swaps. The examples emphasize transforming uncertain cash-flow exposures into different payment patterns.

> [!NOTE] CF1 Source Boundary
> Derivatives are indeed in the CF1 syllabus, but the designated source there is **McDonald**, not Vaaler Chapter 8. Therefore these sections are not expanded in a Vaaler Topik 3 condensed note.

## 14. Core Formula Network

### Spot rate

$$
\boxed{
P_t
=
F(1+r_t)^{-t}
}
$$

$$
\boxed{
r_t
=
\left(\frac{F}{P_t}\right)^{1/t}-1
}
$$

### Spot pricing of deterministic cash flows

$$
\boxed{
P
=
\sum_t C_t(1+r_t)^{-t}
}
$$

### Implied forward

$$
\boxed{
(1+f_{[t,s]})^{s-t}
=
\frac{(1+r_s)^s}{(1+r_t)^t}
}
$$

$$
\boxed{
f_{[t,s]}
=
\left[
\frac{(1+r_s)^s}{(1+r_t)^t}
\right]^{1/(s-t)}-1
}
$$

### Forward reconstruction

$$
\boxed{
(1+r_t)^t
=
\prod_j
(1+f_j)^{\Delta t_j}
}
$$

where the forward intervals partition $[0,t]$.

## 15. Important Distinctions

> [!IMPORTANT] Spot Rate vs YTM
> Spot rate belongs to one maturity. YTM is one internal rate for a multi-cash-flow security.

> [!IMPORTANT] Spot Curve vs Yield Curve
> Spot curve is maturity-specific zero-coupon discount information. Yield curve often refers to observed yields of coupon-bearing instruments.

> [!IMPORTANT] Implied Forward vs Future Market Rate
> Theoretical forward is computed today from spot rates; future market rate is unknown today.

> [!IMPORTANT] No-Arbitrage vs Forecasting
> Spot/forward consistency is an arbitrage condition. Predicting future market rates is a forecasting problem.

> [!IMPORTANT] Multi-Year Forward
> Always annualize over the interval length $s-t$.

## 16. Sanity Checks

- A zero-coupon security has exactly one maturity-specific discount rate.
- If all spot rates are equal to $i$:

$$
r_t=i
$$

for all $t$, then every implied forward rate also equals $i$.
- Forward accumulation over consecutive intervals must reproduce the terminal spot accumulation.
- If a coupon bond is repriced from spot rates, the PV of its individual cash flows must sum to the observed arbitrage-free price.
- A forward rate can lie above or below both endpoint spot rates depending on curve shape; it is not constrained to be an arithmetic average.

## 17. CF1 Connection Map

```text
No-arbitrage / law of one price
            ↓
Zero-coupon prices
            ↓
Spot rates by maturity
            ↓
[[3.1 Spot Rates and Forward Rates]]
            ├─ spot discounting
            └─ implied forward rates
            ↓
Coupon-bond market prices
            ↓
recursive spot extraction
            ↓
[[3.2 Yield Curve]]
            ↓
Chapter 9 interest-rate sensitivity
```

## 18. Quick Reading Review

- Vaaler Chapter 8 is broader than CF1 Topik 3; Section 8.3 is the core assigned portion.
- Arbitrage-free pricing gives the law of one price.
- Spot rate $r_t$ is the annual effective rate for $[0,t]$.
- Cash flow at maturity $t$ is discounted using $r_t$.
- Zero-coupon prices reveal spot rates directly.
- Coupon bonds can be stripped conceptually into maturity-specific cash flows.
- Shorter spot rates can be used recursively to bootstrap longer spot rates.
- Bond YTM is not the same as a collection of spot rates.
- Theoretical forward rate satisfies accumulation consistency between two spot maturities.
- Forward rates are not arithmetic differences of spot rates.
- Forward curves fix an interval length and plot implied forward rates by start date.
- Successive forward accumulation factors reconstruct terminal spot accumulation.
- Implied forward rates need not equal actual future market rates.
- A prediction about future rates is speculation, not arbitrage.
- Other derivative sections in Chapter 8 are compressed because CF1 assigns derivatives to McDonald.

## 19. Compression Notes

### Retained in Detail

- arbitrage / law of one price;
- Section 8.3 spot-rate definition;
- maturity-specific discounting;
- coupon stripping;
- recursive spot extraction;
- Example 8.3.3;
- spot vs yield curve;
- implied forward-rate derivation;
- Example 8.3.9;
- Equation 8.3.10;
- implied vs market forward distinction.

### Compressed

- historical stripping context;
- forward/futures/options/swaps sections outside the Vaaler CF1 Topik 3 mapping.

### Omitted

- Chapter 8 problem set;
- detailed derivatives calculations that belong to the McDonald CF1 source.

## Source Traceability

- **Primary textbook:** Vaaler, Vaaler & Daniel, *Mathematical Interest Theory*, 2nd ed., Chapter 8, “Arbitrage, the term structure of interest rates, and derivatives.”
- **Core source scope:** Section 8.3, “The term structure of interest rates.”
- **Supporting source scope:** Sections 8.1–8.2 for no-arbitrage logic.
- **CF1 scope:** Topik 3 — Struktur Jangka Waktu Suku Bunga; syllabus assigns Vaaler Chapter 8.3 & Chapter 9.
- **No outside textbook was used to expand this chapter.**
