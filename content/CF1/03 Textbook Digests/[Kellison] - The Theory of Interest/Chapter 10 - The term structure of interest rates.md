---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "10"
chapter_title: "The term structure of interest rates"
cf1_topics: ["3.1", "3.2"]
cf1_relevance: "Very High"
source_scope: "Kellison Chapter 10, Sections 10.1-10.7"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison, TermStructure, SpotRates, ForwardRates, YieldCurve]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 10: The Term Structure of Interest Rates

> [!ABSTRACT] Chapter in One View
> Chapters sebelumnya umumnya menggunakan satu level rate untuk seluruh horizon. Chapter 10 mengganti asumsi itu dengan **term structure of interest rates**: rate dapat berbeda menurut maturity. Kellison membangun chapter dari bentuk **yield curve**, lalu mendefinisikan **spot rates** sebagai rates yang berlaku dari sekarang sampai maturity tertentu. Spot rates memungkinkan setiap cash flow didiskontokan dengan maturity-specific rate, sehingga valuation menjadi lebih konsisten dengan observed market prices. Hubungan spot rates dengan coupon-bond yields menghasilkan **Law of One Price** dan **bootstrap method** untuk memperoleh spot curve dari bond prices. Selanjutnya, spot rates dihubungkan dengan **forward rates**, yaitu rates future periods yang diimplikasikan oleh current term structure. Jika harga instrumen tidak konsisten dengan spot/forward relationships, timbul **arbitrage**. Bagian akhir menunjukkan continuous version menggunakan level continuously compounded spot rate $\lambda_t$ dan instantaneous force/forward rate $\delta_t$. Untuk CF1, chapter ini adalah source utama Kellison bagi [[3.1 Spot Rates and Forward Rates]] dan [[3.2 Yield Curve]].

## 1. Why This Chapter Exists

Dalam Chapters 1–9, banyak valuation memakai satu interest rate yang dianggap berlaku untuk semua maturities. Kellison menekankan bahwa dalam actual financial markets, short-term dan long-term rates sering berbeda.

Fenomena hubungan antara:

- **interest rate**, dan
- **term to maturity**

disebut **term structure of interest rates**.

Chapter ini mengembangkan model valuation yang mengizinkan rate berbeda untuk maturity berbeda. Selain valuation, chapter juga menelusuri consistency relationships antarsecurities. Jika dua portfolios dengan future cash flows identik mempunyai harga berbeda, **arbitrage** menjadi mungkin.

---

## 2. Chapter Map

- **10.1 Introduction** — mengapa level-yield model perlu diperluas.
- **10.2 Yield Curves** — bentuk term structure dan economic explanations.
- **10.3 Spot Rates** — maturity-specific discount rates dan generalized NPV.
- **10.4 Relationship with Bond Yields** — coupon-bond yield, Law of One Price, dan bootstrapping.
- **10.5 Forward Rates** — rates untuk future intervals yang implied by current spot rates.
- **10.6 Arbitrage** — consistency pricing dan construction of riskless profit.
- **10.7 A Continuous Model** — continuously compounded spot rates dan instantaneous forward rates.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 10.1–10.2 | Core | [[3.2 Yield Curve]] |
| 10.3 | Core | [[3.1 Spot Rates and Forward Rates]] |
| 10.4 | Core | [[3.2 Yield Curve]], [[5.1 Bond Pricing]] |
| 10.5 | Core | [[3.1 Spot Rates and Forward Rates]] |
| 10.6 | Core supporting | [[3.1 Spot Rates and Forward Rates]], [[3.2 Yield Curve]] |
| 10.7 | Supporting/Core | [[3.1 Spot Rates and Forward Rates]], [[3.2 Yield Curve]] |

---

## 3. 10.1 Introduction

The central departure from earlier chapters is simple:

> **One rate need not value all maturities correctly.**

A bond's yield to maturity is a single internal rate that discounts all of its cash flows. A term-structure model instead recognizes that each maturity can have its own market discount rate.

Kellison therefore develops:

1. a discrete model based on spot rates;
2. consistency relationships among spot rates, forward rates, and bond prices;
3. a continuous analogue.

The chapter also emphasizes that these relationships are not merely algebraic conveniences. Under efficient pricing, they must be mutually consistent or arbitrage opportunities arise.

---

## 4. 10.2 Yield Curves

A **yield curve** is a graph of interest rate against term of investment.

### 4.1 Normal yield curve

A **normal yield curve** slopes upward:

- longer maturities have higher rates;
- short maturities have lower rates.

Kellison discusses three explanations.

#### Expectations theory

Long rates may be higher because investors expect future short rates to rise.

#### Liquidity preference theory

Investors generally prefer shorter commitments because funds remain more accessible. Longer commitments therefore may need to offer higher rates to induce investors to lock in capital.

#### Inflation premium theory

Longer investments face more uncertainty about future inflation. Investors may therefore require an additional return for longer terms.

These explanations are not mutually exclusive.

### 4.2 Inverted yield curve

An **inverted yield curve** slopes downward:

$$
\text{short-term rates}>\text{long-term rates}.
$$

Kellison notes that this may occur when:

- monetary policy keeps short rates high;
- market participants expect inflation or economic activity to weaken;
- expected future rates are below current short rates.

### 4.3 Flat yield curve

A **flat yield curve** has little pronounced slope over a substantial range of maturities.

It may occur in relatively stable periods when investors do not anticipate strong changes in economic conditions, financial markets, or inflation.

### 4.4 Other shapes

Yield curves need not be monotone. They can show:

- humps;
- dips;
- mostly flat regions with positive or negative slopes at one end.

> [!WARNING] Important Distinction
> **Yield curve shape is not a fixed permanent property.**
>
> Kellison explicitly notes that shape can change materially over weeks or months.

---

## 5. 10.3 Spot Rates

Kellison calls the rates on the yield curve **spot rates**.

Let:

$$
s_t
$$

denote the annual effective spot rate for an investment of length $t$.

For a single payment $R_t$ at time $t$, present value is

$$
\boxed{
PV_0(R_t)=\frac{R_t}{(1+s_t)^t}.
}
$$

For a general cash-flow stream $R_0,R_1,\ldots,R_n$:

$$
\boxed{
P(s)
=
\sum_{t=0}^{n}(1+s_t)^{-t}R_t.
}
$$

Kellison presents this as a generalized form of the ordinary NPV equation

$$
P(i)=\sum_{t=0}^{n}v^tR_t,
$$

which uses one common rate $i$.

### 5.1 Why spot-rate valuation is different from IRR/YTM valuation

A single IRR or YTM compresses the term structure into one rate.

Spot valuation instead asks:

> What market discount rate belongs to each cash-flow maturity?

Thus two securities can have the same YTM but different cash-flow patterns and still have different exposure to the underlying spot curve.

### 5.2 Zero-coupon interpretation

A zero-coupon instrument maturing at $t$ directly reveals the $t$-period spot rate.

If a zero-coupon bond pays $C$ at $t$ and sells for $P$:

$$
P=\frac{C}{(1+s_t)^t}.
$$

Therefore:

$$
\boxed{
s_t=\left(\frac{C}{P}\right)^{1/t}-1.
}
$$

### 5.3 Spot discount factor

It is useful to define

$$
D_t=(1+s_t)^{-t}.
$$

Then

$$
PV_0=\sum_{t=0}^{n}D_tR_t.
$$

The sequence of $D_t$ contains the same valuation information as the sequence of spot rates.

---

## 6. 10.4 Relationship with Bond Yields

Recall the ordinary bond formula using one level yield $i$:

$$
P=Fr\,a_{\overline{n}|i}+Cv_i^n.
$$

With term structure, each coupon is discounted by its own spot rate:

$$
\boxed{
P
=
Fr\sum_{t=1}^{n}(1+s_t)^{-t}
+
C(1+s_n)^{-n}.
}
$$

For a par-value bond with redemption included in the last cash flow, equivalently:

$$
P=\sum_{t=1}^{n}\frac{CF_t}{(1+s_t)^t}.
$$

### 6.1 Law of One Price

Kellison states that a coupon bond can be decomposed into a collection of zero-coupon cash flows.

If the coupon bond and the replicating zero-coupon portfolio have identical future cash flows, they must have the same price.

> **Law of One Price:** identical cash flows must have identical current value.

If not, arbitrage exists.

### 6.2 Yield to maturity as a summary rate

The bond's YTM $i$ is the single rate satisfying

$$
P=\sum_{t=1}^{n}\frac{CF_t}{(1+i)^t}.
$$

The spot-rate valuation satisfies

$$
P=\sum_{t=1}^{n}\frac{CF_t}{(1+s_t)^t}.
$$

These equations have the same price but use different discounting structures.

Thus YTM is not generally equal to any one particular spot rate. It is an internal summary rate determined by:

- bond cash-flow pattern;
- current spot curve;
- bond price.

> [!IMPORTANT] Yield vs Spot Rate
> **YTM is bond-specific. Spot rate is maturity-specific.**
>
> Two coupon bonds of the same maturity can have different YTMs if their coupon structures differ, even though the same spot curve is used to price both.

---

## 7. Bootstrap Method

Kellison reverses the valuation problem:

> Given prices of coupon bonds, solve successively for spot rates.

This sequential technique is the **bootstrap method**.

### 7.1 One-year bond

Suppose a one-year bond has known price and known year-1 cash flow $CF_1$.

Then

$$
P_1=\frac{CF_1}{1+s_1},
$$

so $s_1$ is solved directly.

### 7.2 Two-year bond

Once $s_1$ is known:

$$
P_2
=
\frac{CF_1}{1+s_1}
+
\frac{CF_2}{(1+s_2)^2}.
$$

Everything except $s_2$ is known.

### 7.3 Three-year bond

After $s_1$ and $s_2$ are known:

$$
P_3
=
\frac{CF_1}{1+s_1}
+
\frac{CF_2}{(1+s_2)^2}
+
\frac{CF_3}{(1+s_3)^3}.
$$

Solve for $s_3$.

Continue recursively.

### 7.4 Textbook example

Kellison's bond-price example produces:

| Maturity $t$ | Spot rate $s_t$ |
|---:|---:|
| 1 | 7.00% |
| 2 | 8.00% |
| 3 | 8.75% |

The important lesson is the **sequential structure** rather than the particular rates.

> [!INFO] CF1 Connection
> Bootstrapping is central to [[3.2 Yield Curve]] because market coupon-bond prices can be transformed into maturity-specific spot rates.

---

## 8. 10.5 Forward Rates

A **forward rate** is a rate for a future interval implied by today's spot rates.

Kellison motivates the idea by comparing alternative borrowing/investment strategies.

Suppose:

- one-year spot rate is $s_1$;
- two-year spot rate is $s_2$;
- one-year rate beginning one year from now is $f_1$.

Two ways to cover a two-year horizon must be consistent:

### Strategy A — lock in two-year spot rate now

Accumulation:

$$
(1+s_2)^2.
$$

### Strategy B — one year now, then future one-year rate

Accumulation:

$$
(1+s_1)(1+f_1).
$$

No-arbitrage consistency requires:

$$
\boxed{
(1+s_2)^2
=
(1+s_1)(1+f_1).
}
$$

Therefore:

$$
\boxed{
1+f_1
=
\frac{(1+s_2)^2}{1+s_1}.
}
$$

and

$$
\boxed{
f_1
=
\frac{(1+s_2)^2}{1+s_1}-1.
}
$$

### 8.1 General one-period forward rate

If $f_t$ is the one-period forward rate from time $t$ to $t+1$:

$$
\boxed{
(1+s_{t+1})^{t+1}
=
(1+s_t)^t(1+f_t).
}
$$

Hence:

$$
\boxed{
1+f_t
=
\frac{(1+s_{t+1})^{t+1}}{(1+s_t)^t}.
}
$$

### 8.2 Spot rate as geometric average of forward rates

Starting from time 0:

$$
\boxed{
(1+s_n)^n
=
\prod_{t=0}^{n-1}(1+f_t).
}
$$

with

$$
f_0=s_1.
$$

Therefore $s_n$ is a geometric-average type summary of the sequence of one-period forward rates through maturity $n$.

### 8.3 Deferred multi-period forward rate

For a rate applying from time $m$ to time $n$:

$$
\boxed{
(1+f_{m,n})^{n-m}
=
\frac{(1+s_n)^n}{(1+s_m)^m}.
}
$$

so

$$
\boxed{
f_{m,n}
=
\left[
\frac{(1+s_n)^n}{(1+s_m)^m}
\right]^{1/(n-m)}-1.
}
$$

### 8.4 Interpretation caution

Kellison describes forward rates as expected future spot rates in the chapter's exposition, but mathematically the quantity is determined by current spot-rate consistency.

For CF1 problem solving, the safe interpretation is:

> Forward rate is the future-period rate **implied by current term structure**.

It is not a guarantee that the future observed market spot rate will equal it.

---

## 9. Valuing Future Cash Flows with Expected Forward Rates

Kellison gives an example in which an annuity has already made two payments and expected future rates differ from current spot rates.

At the future valuation date, remaining payments are discounted using the rates expected to apply from that date onward.

This separates two questions:

1. today's value based on today's spot curve;
2. expected future value based on an assumed future rate curve.

> [!WARNING] Important Distinction
> **Current forward rate ≠ future realized spot rate.**
>
> A forward rate is inferred now. A future spot rate is observed later.

---

## 10. 10.6 Arbitrage

Kellison defines arbitrage as an investment strategy in which:

> a certain profit can be made with no risk of loss.

The chapter uses arbitrage to enforce consistency among:

- spot rates;
- forward rates;
- coupon-bond prices;
- zero-coupon bond prices.

### 10.1 Replication logic

Suppose a coupon bond's cash flows can be exactly replicated by zero-coupon bonds.

Let:

$$
P_{\text{bond}}
$$

be coupon-bond price and

$$
P_{\text{rep}}
$$

be cost of zero-coupon replicating portfolio.

If

$$
P_{\text{bond}}>P_{\text{rep}},
$$

then the coupon bond is overpriced relative to its replicating cash flows.

A generic arbitrage is:

1. short the overpriced bond;
2. buy the cheaper replicating zero-coupon portfolio;
3. collect positive net cash at time 0;
4. future cash flows offset exactly.

If

$$
P_{\text{bond}}<P_{\text{rep}},
$$

reverse the trade.

### 10.2 Why future cash flows must match

An apparent cheap/expensive comparison is not sufficient. A true replication arbitrage requires future obligations and receipts to offset in every relevant state/date.

The profit then comes only from the current price discrepancy.

### 10.3 No-arbitrage forward relationship

The relation

$$
(1+s_{t+1})^{t+1}
=
(1+s_t)^t(1+f_t)
$$

is itself a no-arbitrage condition.

If a contract offers a future borrowing/lending rate inconsistent with this implied rate, a strategy can potentially be constructed by borrowing through one route and lending through the other.

---

## 11. 10.7 A Continuous Model

The discrete model assigns spot rates at discrete maturities. Kellison then develops a continuous version because real yield curves are not completely flat between observed maturity points.

Let:

$$
\lambda_t
$$

be the continuously compounded **level spot rate** over the interval $[0,t]$.

Then accumulation from 0 to $t$ is

$$
\boxed{
a(t)
=
(1+s_t)^t
=
e^{t\lambda_t}.
}
$$

Hence:

$$
\boxed{
e^{\lambda_t}=1+s_t,
}
$$

$$
\boxed{
s_t=e^{\lambda_t}-1,
}
$$

and

$$
\boxed{
\lambda_t=\ln(1+s_t).
}
$$

### 11.1 Relation to varying force of interest

Let $\delta_r$ be the instantaneous force of interest at time $r$.

General accumulation is

$$
a(t)
=
e^{\int_0^t\delta_r\,dr}.
$$

Since also

$$
a(t)=e^{t\lambda_t},
$$

we obtain

$$
t\lambda_t
=
\int_0^t\delta_r\,dr.
$$

Thus:

$$
\boxed{
\lambda_t
=
\frac{1}{t}
\int_0^t\delta_r\,dr.
}
$$

Interpretation:

> $\lambda_t$ is the continuous average of the varying force of interest over $[0,t]$.

### 11.2 Instantaneous forward rate

Kellison interprets $\delta_t$ as an **instantaneous forward rate** at time $t$.

Differentiate:

$$
t\lambda_t
=
\int_0^t\delta_r\,dr.
$$

Then:

$$
\boxed{
\lambda_t+t\frac{d\lambda_t}{dt}
=
\delta_t.
}
$$

or

$$
\boxed{
\delta_t
=
\lambda_t+t\lambda_t'.
}
$$

This is the continuous analogue of the discrete relation between spot rates and forward rates.

### 11.3 Yield-curve slope implication

For a normal continuously compounded spot curve:

$$
\frac{d\lambda_t}{dt}>0.
$$

Then:

$$
\delta_t>\lambda_t.
$$

The instantaneous forward rate at the endpoint lies above the average spot rate over the interval.

Similarly, for a downward-sloping curve:

$$
\lambda_t'<0
$$

implies

$$
\delta_t<\lambda_t.
$$

---

## 12. Spot vs Forward vs Yield-to-Maturity

> [!WARNING] Important Distinction
> **Spot rate, forward rate, and yield to maturity are three different objects.**

### Spot rate $s_t$

- applies from time 0 to maturity $t$;
- maturity-specific;
- directly prices a zero-coupon cash flow.

### Forward rate $f_t$ or $f_{m,n}$

- applies to a future interval;
- implied by current spot rates under consistency/no-arbitrage.

### Yield to maturity $i$

- single internal rate for one bond's entire cash-flow stream;
- bond-specific;
- depends on the bond's coupon pattern as well as market prices.

---

## Chapter Synthesis

Chapter 10 replaces the single-rate valuation world with a maturity-dependent discount structure. The yield curve is the visual representation of this structure. Spot rates provide the fundamental discount rates for individual maturities: each cash flow is valued using the spot rate corresponding to its date. Coupon bonds then become portfolios of zero-coupon cash flows, so their market prices must equal the sum of spot-discounted components under the Law of One Price. This observation also lets us work backward from bond prices to spot rates through bootstrapping.

Once spot rates are known, forward rates are not independent quantities; they are rates implied by the requirement that alternative investment paths over the same total horizon accumulate to the same value. This path-independence is a no-arbitrage condition. If observed security prices or borrowing/lending rates violate these consistency relationships, replication can create certain profit with no future net exposure. Finally, the continuous model expresses the same structure through a continuously compounded spot rate $\lambda_t$ and instantaneous forward rate $\delta_t$, with $\lambda_t$ equal to the average force over $[0,t]$ and $\delta_t=\lambda_t+t\lambda_t'$ linking curve slope to instantaneous future rates.

---

## Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| Term structure | Rates depend on maturity | otherwise comparable instruments | [[3.2 Yield Curve]] |
| Normal curve | Rate rises with maturity | upward slope | [[3.2 Yield Curve]] |
| Inverted curve | Short rates exceed long rates | downward slope | [[3.2 Yield Curve]] |
| Spot PV | $R_t/(1+s_t)^t$ | cash flow at $t$ | [[3.1 Spot Rates and Forward Rates]] |
| General spot valuation | $\sum R_t(1+s_t)^{-t}$ | maturity-specific rates | [[3.1 Spot Rates and Forward Rates]] |
| Zero-coupon spot extraction | price determines $s_t$ | one terminal CF | [[3.1 Spot Rates and Forward Rates]] |
| Bond via spot rates | value each coupon separately | same current spot curve | [[3.2 Yield Curve]] |
| Law of One Price | identical CFs → identical price | frictionless consistency principle | [[3.2 Yield Curve]] |
| Bootstrapping | solve $s_1,s_2,\ldots$ sequentially | suitable bond prices available | [[3.2 Yield Curve]] |
| One-period forward | spot-path equivalence | future interval $t\to t+1$ | [[3.1 Spot Rates and Forward Rates]] |
| Multi-period forward | deferred accumulation equivalence | interval $m\to n$ | [[3.1 Spot Rates and Forward Rates]] |
| Arbitrage | certain profit, no risk of loss | inconsistent prices/rates | [[3.1 Spot Rates and Forward Rates]] |
| Continuous spot | $(1+s_t)^t=e^{t\lambda_t}$ | continuously compounded representation | [[3.1 Spot Rates and Forward Rates]] |
| Average force | $\lambda_t=t^{-1}\int_0^t\delta_rdr$ | continuous model | [[3.1 Spot Rates and Forward Rates]] |
| Instantaneous forward | $\delta_t=\lambda_t+t\lambda_t'$ | differentiable curve | [[3.1 Spot Rates and Forward Rates]] |

### Core forward-rate formula

$$
(1+s_n)^n
=
(1+s_m)^m(1+f_{m,n})^{n-m}.
$$

Therefore:

$$
f_{m,n}
=
\left[
\frac{(1+s_n)^n}{(1+s_m)^m}
\right]^{1/(n-m)}-1.
$$

---

## Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $s_t$ | spot rate for maturity $t$ | annual effective | level over $0$ to $t$ |
| $f_t$ | one-period forward rate beginning at $t$ | effective for future interval | implied from spot rates |
| $f_{m,n}$ | forward rate from $m$ to $n$ | effective over deferred interval | notation written explicitly here for clarity |
| $R_t$ | cash flow at time $t$ | currency | positive or negative |
| $P(s)$ | PV/NPV using spot curve | currency | maturity-specific discounting |
| $i$ | level yield / YTM | effective per stated period | bond-specific summary rate |
| $\lambda_t$ | continuously compounded level spot rate | continuous rate | applies over $0$ to $t$ |
| $\delta_t$ | instantaneous force / forward rate | instantaneous | varying force |

---

## Compression Notes

### Retained in Detail

- definition of term structure;
- normal, inverted, and flat yield curves;
- expectations, liquidity preference, and inflation premium explanations;
- spot-rate valuation;
- distinction between spot rates and level yield;
- bond pricing with spot rates;
- Law of One Price;
- bootstrap method;
- forward-rate derivation;
- arbitrage replication logic;
- continuous spot-rate and instantaneous-forward-rate model.

### Condensed

- repeated numerical illustrations once the same bootstrap/forward mechanism was established;
- detailed market anecdotes;
- routine algebra in end-of-chapter exercises;
- repeated arbitrage examples with the same replication structure.

### Omitted / Beyond CF1

- end-of-chapter exercise set is not reproduced;
- historical yield-curve dates and descriptive examples were compressed;
- no material from Chapter 11 has been inserted into this Chapter 10 note.

---

## CF1 Connection Map

```text
Term structure
        ↓
Yield curve
        ↓
Spot rates by maturity
        ↓
Discount each cash flow separately
        ↓
Coupon-bond price
        ↓
Law of One Price
        ↓
Bootstrap spot curve from bond prices
        ↓
Spot-rate consistency
        ↓
Forward rates
        ↓
No-arbitrage relationships
        ↓
Continuous term-structure model

[[3.1 Spot Rates and Forward Rates]]
[[3.2 Yield Curve]]
```

---

## Quick Reading Review

- Term structure means rates differ by maturity.
- A yield curve graphs rate against term.
- Normal = upward sloping; inverted = downward; flat = little slope.
- Kellison discusses expectations, liquidity preference, and inflation premium as explanations for upward slope.
- $s_t$ is the spot rate from now to maturity $t$.
- A cash flow at $t$ is discounted with $(1+s_t)^{-t}$.
- Spot-rate NPV uses a different maturity-specific discount factor for each cash flow.
- YTM is a single bond-specific summary rate; it is not the same object as a spot rate.
- A coupon bond can be decomposed into zero-coupon cash flows.
- Law of One Price forces the bond and its replicating zero-coupon portfolio to have equal prices.
- Bootstrapping solves spot rates successively from short to long maturity.
- Forward rates are implied by alternative accumulation paths.
- $(1+s_{t+1})^{t+1}=(1+s_t)^t(1+f_t)$.
- Inconsistent prices/rates create arbitrage opportunities.
- In the continuous model, $(1+s_t)^t=e^{t\lambda_t}$.
- $\lambda_t$ is the average force over $[0,t]$.
- $\delta_t=\lambda_t+t\lambda_t'$ is the instantaneous forward-rate relation.
