---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "9"
chapter_title: "Interest rate sensitivity"
cf1_topics: ["3.3", "3.4", "3.5"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 9, Sections 9.1–9.5; problem set 9.6 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler, Duration, Convexity, Immunization, InterestRateRisk]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 9: Interest rate sensitivity

> [!ABSTRACT] Chapter in One View
> Chapter 9 studies what happens when interest rates move after assets and liabilities have been established. Section 9.1 motivates the problem using **reinvestment risk** for short assets and **market-value risk** for long assets, then introduces cash-flow matching as one way to remove timing uncertainty. Section 9.2 turns the price function $P(i)$ into a first-order sensitivity measure. **Modified duration** is defined from the derivative of price with respect to yield, while **Macaulay duration** becomes the present-value-weighted average payment time. Section 9.3 adds **convexity**, the second derivative / curvature term needed to improve price approximations and distinguish portfolios with similar duration. Section 9.4 applies these ideas to **immunization**: Redington immunization matches present value and duration and requires sufficient asset convexity; a stronger full-immunization result is developed for a special cash-flow structure. Section 9.5 introduces other duration concepts—especially **effective duration** for interest-sensitive cash flows and key-rate/partial duration for nonparallel term-structure movement. This chapter is central to CF1 [[3.3 Duration (Macaulay and Modified)]], [[3.4 Convexity]], and [[3.5 Immunization]].

## 1. Why This Chapter Exists

Suppose you owe a fixed amount five years from now.

Three broad strategies illustrate the problem:

- buy a five-year zero-coupon bond → cash flow matches the liability exactly;
- buy a shorter bond → you must reinvest when it matures, so future reinvestment rates matter;
- buy a longer bond → you must sell before maturity, so future market yields determine the sale price.

The shorter strategy prefers **high future rates** because proceeds must be reinvested.

The longer strategy prefers **low future rates** because lower rates raise the bond's sale price.

This opposition suggests a way to reduce interest-rate risk:

> combine assets whose reinvestment and price risks offset.

Duration, convexity, and immunization formalize this idea.

## 2. Chapter Map

- **9.1 Overview**
- **9.2 Duration**
- **9.3 Convexity**
- **9.4 Immunization**
- **9.5 Other Types of Duration**
- **9.6 Problems** — omitted.

| Section | CF1 Relevance | Connected Note |
|---|---|---|
| 9.1 | Core conceptual bridge | [[3.5 Immunization]] |
| 9.2 | Core | [[3.3 Duration (Macaulay and Modified)]] |
| 9.3 | Core | [[3.4 Convexity]] |
| 9.4 | Core | [[3.5 Immunization]] |
| 9.5 | Supporting | duration extensions |

## 3. 9.1 Overview — Interest-Rate Risk

### 3.1 Reinvestment risk

If an asset matures **before** the liability date, the proceeds must be reinvested.

The unknown future reinvestment rate creates risk.

For a five-year liability funded by a three-year zero coupon:

- low rates at year 3 are harmful;
- high rates at year 3 are helpful.

### 3.2 Market-value / liquidation risk

If an asset matures **after** the liability date, it must be sold before maturity.

The sale price depends on prevailing yields.

For a five-year liability funded by a seven-year zero coupon:

- high rates at year 5 lower sale value;
- low rates at year 5 raise sale value.

### 3.3 Matching maturity

A zero-coupon bond maturing exactly when the liability is due removes both risks for that liability because no reinvestment or premature sale is needed.

This is the simplest form of **cash-flow matching**.

### 3.4 Cash-flow matching / dedication

If there are multiple liability dates, one can choose assets whose contractual inflows match each liability.

The approach is often called **dedication**.

The method is conceptually strongest because it does not rely on a future repricing assumption for already-matched dates.

However, exact matching may be expensive or impossible when suitable securities are unavailable.

### 3.5 Why duration enters

When exact cash-flow matching is not practical, we want a numerical measure describing how price reacts to a small change in yield.

That sensitivity is developed in Section 9.2.

## 4. 9.2 Duration

### 4.1 Price as a function of yield

For fixed positive cash flows $C_t$ at times $t$:

$$
\boxed{
P(i)
=
\sum_t C_t(1+i)^{-t}.
}
$$

If $i$ changes, price changes.

Differentiate:

$$
P'(i)
=
-\sum_t tC_t(1+i)^{-t-1}.
$$

For positive cash flows:

$$
\boxed{
P'(i)<0.
}
$$

Hence price and yield move in opposite directions.

### 4.2 First-order approximation

For a small change $h$:

$$
P(i+h)
\approx
P(i)+P'(i)h.
$$

Divide by current price:

$$
\frac{P(i+h)-P(i)}{P(i)}
\approx
\frac{P'(i)}{P(i)}h.
$$

This motivates modified duration.

### 4.3 Modified duration

Vaaler defines modified duration for annual effective yield by:

$$
\boxed{
D_{\mathrm{Mod}}(i)
=
-\frac{P'(i)}{P(i)}.
}
$$

Therefore:

$$
\boxed{
\frac{\Delta P}{P}
\approx
-D_{\mathrm{Mod}}\Delta i.
}
$$

Interpretation:

> modified duration is approximately the percentage price decrease produced by a one-unit increase in yield.

For a 100-basis-point increase:

$$
\Delta i=0.01,
$$

so price changes approximately:

$$
-0.01D_{\mathrm{Mod}}.
$$

### 4.4 Macaulay duration

Rewrite modified duration:

$$
-\frac{P'(i)}{P(i)}
=
\frac{
\sum_t tC_t(1+i)^{-t-1}
}{
P(i)
}.
$$

Multiplying by $1+i$ gives:

$$
\boxed{
D_{\mathrm{Mac}}
=
(1+i)D_{\mathrm{Mod}}
=
\frac{
\sum_t tC_t(1+i)^{-t}
}{
P(i)
}.
}
$$

Define PV weight:

$$
w_t
=
\frac{
C_t(1+i)^{-t}
}{
P(i)
}.
$$

Then:

$$
\sum_t w_t=1
$$

and:

$$
\boxed{
D_{\mathrm{Mac}}
=
\sum_t w_t t.
}
$$

This is the fundamental interpretation:

> Macaulay duration is the **present-value-weighted average time of payment**.

### 4.5 Zero-coupon bond

A zero-coupon bond has one payment at time $N$.

Therefore:

$$
\boxed{
D_{\mathrm{Mac}}=N.
}
$$

Modified duration:

$$
\boxed{
D_{\mathrm{Mod}}
=
\frac{N}{1+i}.
}
$$

### 4.6 Coupon bond

Coupon payments occur before maturity, so some PV weight lies at earlier times.

For a standard positive-coupon bond:

$$
\boxed{
D_{\mathrm{Mac}}<\text{maturity}.
}
$$

### 4.7 Example 9.2.23 — coupon bond

Vaaler considers:

- 10-year bond;
- face value $15,000$;
- nominal 8% coupon rate, semiannual;
- coupon $600$ every half-year;
- redemption $16,500$;
- semiannual yield 3%.

Annual effective yield:

$$
i=(1.03)^2-1
=
0.0609.
$$

Price:

$$
P
=
600a_{\overline{20}|0.03}
+
16500(1.03)^{-20}
\approx
18062.13486.
$$

Vaaler obtains:

$$
\boxed{
D_{\mathrm{Mac}}
\approx
7.411047515\text{ years}.
}
$$

Modified duration:

$$
D_{\mathrm{Mod}}
=
\frac{7.411047515}{1.0609}
\approx
\boxed{
6.985623070.
}
$$

Sanity:

$$
7.411<10
$$

because coupons arrive before maturity.

### 4.8 Yield quoted convertible $m$ times

Vaaler generalizes modified duration when price is treated as a function of nominal yield $i^{(m)}$.

The relationship is:

$$
\boxed{
D(i,m)
=
\frac{
D(i,1)
}{
1+\frac{i^{(m)}}{m}
}.
}
$$

The exact notation in Vaaler distinguishes the yield variable with respect to which price is differentiated.

The practical lesson is:

> duration conversion must use the **same yield basis** as the rate change being applied.

### 4.9 Par-value bond result

Vaaler derives a useful special result for a par-value bond purchased for its redemption amount.

For an $n$-year par bond with $m$ coupons per year and yield consistent with its coupon rate, Macaulay duration has a compact annuity expression.

Vaaler records the result as Important Fact 9.2.25 and notes:

- duration increases with term $n$;
- duration decreases as yield increases;
- duration decreases as coupon frequency $m$ increases.

The economic reason is that more/faster coupon payments shift PV weight earlier.

### 4.10 Discount vs premium intuition

A discount bond places relatively more value in the terminal redemption payment, increasing duration.

A premium bond places relatively more value in coupons, reducing duration.

### 4.11 Portfolio duration

If a portfolio contains securities with prices $P_k$ and durations $D_k$, total price is:

$$
P=\sum_kP_k.
$$

Vaaler's Important Fact 9.2.28 gives:

$$
\boxed{
D_p
=
\sum_k
\frac{P_k}{P}
D_k.
}
$$

Thus portfolio duration is a **market-value-weighted average**, not a face-value-weighted average.

## 5. Duration Approximation and Basis Points

For small yield change:

$$
\boxed{
P_1
\approx
P_0
\left(
1-D_{\mathrm{Mod}}\Delta i
\right).
}
$$

A basis point is:

$$
1\text{ bp}
=
0.0001.
$$

Thus a 25 bp increase is:

$$
\Delta i=0.0025.
$$

[CF1 SUPPORTING CONTEXT]

The common quantity DV01 follows directly from the source-supported first-order approximation:

$$
|\Delta P|
\approx
P D_{\mathrm{Mod}}(0.0001).
$$

The label “DV01” is syllabus terminology; Vaaler's core mathematical content is the derivative approximation itself.

## 6. 9.3 Convexity

Duration approximates the price-yield curve by a tangent line.

But the actual price function is curved.

Convexity uses the second derivative to capture this curvature.

### 6.1 Modified convexity

Vaaler defines modified convexity as:

$$
\boxed{
C_{\mathrm{Mod}}(i)
=
\frac{P''(i)}{P(i)}.
}
$$

For positive fixed cash flows:

$$
P''(i)>0.
$$

Thus:

$$
\boxed{
C_{\mathrm{Mod}}>0.
}
$$

### 6.2 Second-order Taylor approximation

Taylor expansion gives:

$$
P(i+h)
\approx
P(i)
+
P'(i)h
+
\frac12P''(i)h^2.
$$

Divide by $P(i)$:

$$
\boxed{
\frac{\Delta P}{P}
\approx
-D_{\mathrm{Mod}}\Delta i
+
\frac12
C_{\mathrm{Mod}}(\Delta i)^2.
}
$$

The factor $1/2$ comes directly from the second-order Taylor term.

### 6.3 Why convexity matters

Because:

$$
(\Delta i)^2\ge0,
$$

positive convexity adds a positive correction whether yield rises or falls.

Therefore duration-only approximation:

- tends to overstate a price decline when yields rise;
- tends to understate a price increase when yields fall.

### 6.4 Macaulay convexity

Vaaler introduces a Macaulay-style timing measure.

Using the same PV weights $w_t$:

$$
\boxed{
C_{\mathrm{Mac}}
=
\sum_t w_t t^2.
}
$$

This is a PV-weighted average of **squared payment times**.

Zero coupon at maturity $N$:

$$
\boxed{
C_{\mathrm{Mac}}=N^2.
}
$$

### 6.5 Macaulay-to-modified convexity

For annual effective yield:

$$
\boxed{
C_{\mathrm{Mod}}
=
\frac{
C_{\mathrm{Mac}}+D_{\mathrm{Mac}}
}{
(1+i)^2
}.
}
$$

This is an important distinction: modified convexity is **not** simply $C_{\mathrm{Mac}}/(1+i)^2$.

For a nominal yield convertible $m$ times, Vaaler derives the corresponding basis-adjusted relationship.

### 6.6 Dispersion

Since:

$$
D_{\mathrm{Mac}}
=
E_w[t],
$$

and:

$$
C_{\mathrm{Mac}}
=
E_w[t^2],
$$

Vaaler connects duration and convexity through the dispersion of payment times:

$$
\operatorname{Var}_w(t)
=
C_{\mathrm{Mac}}
-
D_{\mathrm{Mac}}^2.
$$

Thus two securities can have the same duration but different spread of payment timing and therefore different convexity.

### 6.7 Example 9.3.15 — same duration, different convexity

Vaaler compares a coupon bond and a zero-coupon bond chosen to have the same Macaulay duration.

The coupon bond has multiple payment dates, while the zero coupon concentrates all value at one date.

The example demonstrates that equal duration does not imply equal response to larger interest-rate shifts: **convexity distinguishes their second-order behavior**.

### 6.8 Portfolio convexity

For portfolio price:

$$
P=\sum_k P_k,
$$

Vaaler Important Fact 9.3.16 gives:

$$
\boxed{
C_p
=
\sum_k
\frac{P_k}{P}
C_k.
}
$$

Again, use market-value weights.

### 6.9 Example 9.3.17

Vaaler combines:

1. a two-year coupon bond with:
   $$
   P_1\approx2058.680315,
   $$
   $$
   C_1\approx3.761671472;
   $$
2. a five-year zero-coupon bond with:
   $$
   P_2\approx8024.510465,
   $$
   $$
   C_2=25.
   $$

Total price:

$$
P\approx10083.190780.
$$

Portfolio Macaulay convexity:

$$
C_p
=
\frac{2058.680315}{10083.190780}(3.761671472)
+
\frac{8024.510465}{10083.190780}(25).
$$

Thus:

$$
\boxed{
C_p\approx20.66378046.
}
$$

## 7. Duration + Convexity Price Estimate

For known:

- current price $P_0$;
- modified duration $D$;
- modified convexity $C$;
- yield shift $\Delta i$;

compute:

$$
r_P
=
-D\Delta i
+
\frac12C(\Delta i)^2.
$$

Then:

$$
\boxed{
P_1
\approx
P_0(1+r_P).
}
$$

This is a **second-order approximation**, not exact repricing.

## 8. 9.4 Immunization

### 8.1 Asset-liability setting

Let:

$$
P_A(i)
$$

be the present value of assets and:

$$
P_L(i)
$$

the present value of liabilities.

Define surplus:

$$
\boxed{
S(i)
=
P_A(i)-P_L(i).
}
$$

If:

$$
S(i)\ge0,
$$

assets are sufficient to cover liabilities under the model.

### 8.2 Redington immunization conditions

At current rate $i_0$, Redington immunization requires:

$$
\boxed{
S(i_0)=0,
}
$$

$$
\boxed{
S'(i_0)=0,
}
$$

and:

$$
\boxed{
S''(i_0)\ge0.
}
$$

Financial interpretation:

1. current PV assets equals PV liabilities;
2. first-order rate sensitivity matches;
3. assets have at least as much curvature protection as liabilities.

Vaaler records the equivalent duration/convexity conditions:

$$
\boxed{
P_A=P_L,
}
$$

$$
\boxed{
D_A=D_L,
}
$$

$$
\boxed{
C_A\ge C_L.
}
$$

### 8.3 Why duration matching follows

Since:

$$
P'_A=-D_A P_A
$$

and:

$$
P'_L=-D_L P_L,
$$

if PVs are equal, then:

$$
P'_A=P'_L
$$

is equivalent to:

$$
D_A=D_L.
$$

### 8.4 Why convexity condition follows

Similarly:

$$
P_A''=C_A P_A
$$

and:

$$
P_L''=C_L P_L.
$$

With equal PVs:

$$
P_A''\ge P_L''
$$

is equivalent to:

$$
C_A\ge C_L.
$$

### 8.5 Example 9.4.4 — Redington immunization

Alan and Peabody Insurance owes:

$$
120000
$$

in exactly four years.

Current annual effective yield is:

$$
4.5\%.
$$

Assets available:

- two-year zero-coupon bonds;
- five-year zero-coupon bonds.

PV of liability:

$$
\frac{120000}{(1.045)^4}
\approx
\boxed{
100627.36.
}
$$

Let:

- $a$ = amount spent today on two-year zeros;
- $b$ = amount spent today on five-year zeros.

PV matching:

$$
\boxed{
a+b=100627.36.
}
$$

Macaulay durations:

$$
D_2=2,
\qquad
D_5=5,
\qquad
D_L=4.
$$

Duration condition:

$$
2\frac{a}{a+b}
+
5\frac{b}{a+b}
=
4.
$$

Therefore:

$$
2a+5b
=
4a+4b,
$$

so:

$$
\boxed{
b=2a.
}
$$

With PV condition:

$$
3a=100627.36.
$$

Hence approximately:

$$
\boxed{
a=33542.45,
\qquad
b=67084.91.
}
$$

Asset Macaulay convexity:

$$
C_A
=
\frac{a}{a+b}(2^2)
+
\frac{b}{a+b}(5^2)
\approx18.
$$

Liability convexity:

$$
C_L=4^2=16.
$$

Thus:

$$
\boxed{
C_A>C_L,
}
$$

so the Redington convexity condition is satisfied.

### 8.6 Small-rate-shift illustration

Vaaler illustrates that if yield rises from 4.5% to 5%, or falls to 4%, the asset strategy still produces slightly more than the $120,000 liability after the intermediate reinvestment/sale process.

This is the sense in which Redington immunization protects against **small** changes around the current yield.

### 8.7 Coupon-bond asset variant

Example 9.4.5 replaces the two-year zero coupon with a two-year 6% coupon bond.

Its Macaulay duration is approximately:

$$
1.915703104
$$

rather than exactly 2.

Therefore the required asset mix changes.

The example reinforces:

> use the actual asset duration, not simply maturity, when coupons exist.

## 9. Full Immunization

Vaaler develops a stronger result for a **special structure**:

- one liability at time $T$;
- one asset payment before $T$;
- one asset payment after $T$.

Using force-of-interest notation, if current PV and first derivative are matched appropriately, the surplus remains nonnegative for any rate shift in the flat-curve model.

This is **full immunization**.

> [!WARNING] Do Not Generalize
> The theorem depends on a specific cash-flow structure and the flat/parallel-rate model. It is not true that arbitrary portfolios become fully immunized merely because PV and duration match.

### 9.1 Example 9.4.7 — large shifts

The same two-zero portfolio from Example 9.4.4 is shown to cover the $120,000 liability even with large rate changes.

If rate is 10% at year 2:

$$
\text{5-year zero sale value}
=
\frac{83600}{(1.10)^3}
\approx62809.92.
$$

Add two-year redemption:

$$
36629.19+62809.92
=
99439.11.
$$

Accumulate two more years:

$$
99439.11(1.10)^2
\approx
\boxed{
120321.32.
}
$$

If rate is 1%:

$$
\frac{83600}{(1.01)^3}
\approx81141.34,
$$

so:

$$
36629.19+81141.34
=
117770.53,
$$

and:

$$
117770.53(1.01)^2
\approx
\boxed{
120137.72.
}
$$

Both exceed the liability.

## 10. Rebalancing and Model Limitations

Immunization is not automatically permanent.

As time passes:

- maturities shorten;
- asset and liability durations change;
- convexities change;
- the derivative matching condition can fail.

Therefore immunized portfolios require **rebalancing**.

Vaaler also stresses a deeper limitation:

> the assumption that the yield curve is flat and then shifts while remaining flat is unrealistic.

A real term structure has many spot rates. Different parts of the curve can move differently.

This connects Chapter 9 back to Section 8.3.

## 11. 9.5 Other Types of Duration

[CF1 SUPPORTING CONTEXT]

### 11.1 Why modified duration may fail

Modified duration assumes the cash flows themselves remain fixed as interest rates change.

For callable bonds or other interest-sensitive instruments, rate changes may alter the future cash flows.

Then $P(i)$ may even fail to be differentiable at a rate where exercise/call behavior changes.

### 11.2 Effective duration

Vaaler replaces the tangent slope by a centered secant slope.

For step $h$:

$$
\boxed{
m_h(i_0)
=
\frac{
P(i_0+h)-P(i_0-h)
}{
2h
}.
}
$$

Effective duration:

$$
\boxed{
E_h(i_0)
=
-\frac{m_h(i_0)}{P(i_0)}.
}
$$

If cash flows are fixed and $h$ is small:

$$
E_h(i_0)
\approx
D_{\mathrm{Mod}}(i_0).
$$

But effective duration can incorporate changes in the cash-flow pattern itself.

### 11.3 Example 9.5.3

A callable bond has:

$$
P=970
$$

and effective duration:

$$
E=4.4.
$$

If rate falls by 100 bp, estimated price increase is approximately:

$$
4.4\%.
$$

Dollar increase:

$$
0.044(970)=42.68.
$$

Estimated price:

$$
\boxed{
1012.68.
}
$$

For a 50 bp decrease, approximate increase is half:

$$
21.34,
$$

giving:

$$
\boxed{
991.34.
}
$$

### 11.4 Key-rate / partial duration

Vaaler also notes **key-rate duration** or **partial duration**, where sensitivity is measured with respect to several spot rates rather than one parallel yield.

Partial derivatives replace the single derivative of the one-yield model.

This is conceptually better suited to term-structure movement in which different maturities shift by different amounts.

Vaaler's broader conclusion:

> no single duration measure is universally best for all portfolios.

## 12. Core Formula Network

### Price function

$$
\boxed{
P(i)
=
\sum_tC_t(1+i)^{-t}
}
$$

### Modified duration

$$
\boxed{
D_{\mathrm{Mod}}
=
-\frac{P'(i)}{P(i)}
}
$$

### Macaulay duration

$$
\boxed{
D_{\mathrm{Mac}}
=
(1+i)D_{\mathrm{Mod}}
}
$$

$$
\boxed{
D_{\mathrm{Mac}}
=
\frac{
\sum_t tC_t(1+i)^{-t}
}{
P(i)
}
}
$$

### First-order approximation

$$
\boxed{
\frac{\Delta P}{P}
\approx
-D_{\mathrm{Mod}}\Delta i
}
$$

### Modified convexity

$$
\boxed{
C_{\mathrm{Mod}}
=
\frac{P''(i)}{P(i)}
}
$$

### Second-order approximation

$$
\boxed{
\frac{\Delta P}{P}
\approx
-D_{\mathrm{Mod}}\Delta i
+
\frac12C_{\mathrm{Mod}}(\Delta i)^2
}
$$

### Macaulay convexity

$$
\boxed{
C_{\mathrm{Mac}}
=
\sum_t w_t t^2
}
$$

### Annual-effective conversion

$$
\boxed{
C_{\mathrm{Mod}}
=
\frac{
C_{\mathrm{Mac}}+D_{\mathrm{Mac}}
}{
(1+i)^2
}
}
$$

### Redington

$$
\boxed{
P_A=P_L,
\qquad
D_A=D_L,
\qquad
C_A\ge C_L.
}
$$

### Effective duration

$$
\boxed{
E_h(i_0)
=
-\frac{
P(i_0+h)-P(i_0-h)
}{
2hP(i_0)
}.
}
$$

## 13. Important Distinctions

> [!IMPORTANT] Maturity vs Duration
> Maturity is the final payment date. Duration is a PV-weighted timing/sensitivity measure.

> [!IMPORTANT] Macaulay vs Modified Duration
> Macaulay duration measures weighted timing. Modified duration is the derivative-based price sensitivity.

> [!IMPORTANT] Duration vs Convexity
> Duration = first-order slope. Convexity = second-order curvature.

> [!IMPORTANT] Exact Repricing vs Approximation
> Duration and convexity approximate price changes. Repricing every cash flow at the new yield is exact within the model.

> [!IMPORTANT] Cash-Flow Matching vs Redington
> Cash-flow matching matches actual payment dates. Redington matches value and local sensitivity.

> [!IMPORTANT] Redington vs Full Immunization
> Redington is local for small shifts. Full immunization is stronger but requires a special structure.

> [!IMPORTANT] Modified vs Effective Duration
> Modified duration is best for fixed cash flows. Effective duration is designed for interest-sensitive cash flows.

> [!IMPORTANT] Parallel Shift vs Key-Rate Movement
> One-yield duration assumes a scalar rate move. Key-rate duration recognizes movements at different maturities.

## 14. Sanity Checks

For positive fixed cash flows:

$$
P'(i)<0,
$$

and:

$$
P''(i)>0.
$$

Therefore:

- yield up → price down;
- standard fixed-cash-flow price curve is convex.

For zero coupon maturity $N$:

$$
D_{\mathrm{Mac}}=N,
$$

$$
C_{\mathrm{Mac}}=N^2.
$$

For coupon bond:

$$
D_{\mathrm{Mac}}<N
$$

under ordinary positive-coupon conditions.

PV weights must satisfy:

$$
\sum_t w_t=1.
$$

Portfolio duration and convexity should lie within the range of component values for positive market-value weights.

For Redington:

1. check PV equality;
2. check duration equality;
3. check convexity inequality.

## 15. Exam-Oriented Workflow

### Duration from cash flows

1. identify yield basis;
2. discount each cash flow;
3. compute price;
4. compute:
   $$
   t\times PV_t;
   $$
5. divide:
   $$
   D_{\mathrm{Mac}}
   =
   \frac{\sum tPV_t}{P};
   $$
6. convert to modified duration.

### Convexity from cash flows

Use same PV weights:

$$
C_{\mathrm{Mac}}
=
\frac{\sum t^2PV_t}{P}.
$$

Then convert to modified convexity if required.

### Price estimate

1. convert bps to decimal;
2. compute:
   $$
   -D_{\mathrm{Mod}}\Delta i;
   $$
3. if convexity required, add:
   $$
   \frac12C_{\mathrm{Mod}}(\Delta i)^2;
   $$
4. multiply by current price.

### Immunization

1. value liabilities;
2. value assets / define asset amounts;
3. match PV;
4. match duration;
5. solve weights or amounts;
6. check convexity;
7. state the rate-shift assumptions.

## 16. Common Traps

### Trap 1 — Coupon bond duration = maturity

Wrong. Coupons place value before maturity.

### Trap 2 — Use face-value weights

Portfolio duration/convexity use **market-value weights**.

### Trap 3 — Mix Macaulay and modified quantities

Match like with like. Do not place Macaulay duration into a modified-duration approximation.

### Trap 4 — Basis-point conversion

$$
50\text{ bp}=0.005,
$$

not $0.05$.

### Trap 5 — Forget the convexity factor $1/2$

The second-order Taylor correction is:

$$
\frac12C(\Delta i)^2.
$$

### Trap 6 — Treat approximation as exact

Duration/convexity estimates are local approximations.

### Trap 7 — Duration match alone = Redington

No. Redington also requires PV match and the convexity condition.

### Trap 8 — Redington protects against arbitrary yield-curve moves

No. Vaaler's standard setup assumes a flat curve with parallel shift and gives local protection.

### Trap 9 — Full immunization is universal

No. The theorem relies on a special cash-flow structure.

### Trap 10 — Ignore rebalancing

An immunized portfolio today may not remain immunized as time passes.

## 17. CF1 Connection Map

```text
Vaaler §8.3
spot / term structure
       ↓
Interest-rate uncertainty
       ↓
Chapter 9
       ├─ 9.2 Duration
       │      ↓
       │  [[3.3 Duration (Macaulay and Modified)]]
       │
       ├─ 9.3 Convexity
       │      ↓
       │  [[3.4 Convexity]]
       │
       └─ 9.4 Immunization
              ↓
          [[3.5 Immunization]]

9.5 effective / key-rate duration
       ↓
limitations of one-yield parallel-shift model
```

## 18. Quick Reading Review

- Short assets create reinvestment risk; long assets create sale-price risk.
- Exact maturity/cash-flow matching removes the corresponding timing risk.
- Price is a decreasing function of yield for positive fixed cash flows.
- Modified duration is $-P'/P$.
- Macaulay duration is the PV-weighted average payment time.
- Zero-coupon Macaulay duration equals maturity.
- Coupon-bond duration is normally below maturity.
- Portfolio duration uses market-value weights.
- Duration gives a first-order price approximation.
- Convexity uses $P''/P$ and gives the second-order correction.
- Macaulay convexity is the PV-weighted average of squared payment times.
- Portfolio convexity also uses market-value weights.
- Redington requires PV match, duration match, and asset convexity at least liability convexity.
- Redington is local under the flat/parallel-shift model.
- Full immunization is stronger but requires special structure.
- Immunized portfolios require rebalancing.
- Effective duration is useful when rates change the cash flows themselves.
- Key-rate duration recognizes that the term structure can move nonparallelly.

## 19. Compression Notes

### Retained in Detail

- reinvestment vs sale-price risk;
- cash-flow matching motivation;
- modified and Macaulay duration derivations;
- coupon-bond worked example;
- portfolio duration;
- convexity derivation and second-order approximation;
- Macaulay convexity;
- portfolio convexity;
- Redington conditions;
- worked zero-coupon immunization example;
- full immunization;
- large-shift illustration;
- rebalancing;
- effective duration;
- key-rate duration context.

### Compressed

- long calculus manipulations that repeat derivative mechanics;
- repeated bond examples with identical duration procedure;
- technical proof of the full-immunization theorem;
- calculator procedures.

### Omitted

- Chapter 9 problem set;
- extended technical exercises.

## Source Traceability

- **Primary textbook:** Vaaler, Vaaler & Daniel, *Mathematical Interest Theory*, 2nd ed., Chapter 9, “Interest rate sensitivity.”
- **Source scope used:** Sections 9.1–9.5.
- **CF1 scope:** Topik 3 — Struktur Jangka Waktu Suku Bunga.
- **No outside textbook was used to expand the chapter content.**
