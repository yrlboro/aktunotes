---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "20"
chapter_title: "Financial Options"
cf4_topics: ["2.4 Derivative Securities in Corporate Finance", "5.2 Derivative Investments"]
cf4_relevance: "High"
source_scope: "Berk & DeMarzo, Chapter 20 — Sections 20.1–20.6 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, Options, Derivatives, CorporateFinance]
date_created: "2026-08-24"
status: "study-note"
---

# Berk & DeMarzo — Chapter 20: Financial Options

> [!ABSTRACT] Chapter in One View
> Chapter 20 memperkenalkan **financial options** sebagai kontrak yang memberi pemegangnya **right, but not obligation**, untuk membeli atau menjual underlying asset pada harga yang telah ditentukan. Dua basic contracts adalah **call option**—hak membeli—dan **put option**—hak menjual.
>
> Chapter bergerak dari mechanics paling dasar menuju corporate-finance interpretation. Pertama, Berk & DeMarzo membangun terminology seperti **strike price, expiration date, American vs European option, long vs short position, option premium, in-the-money, at-the-money, dan out-of-the-money**. Kemudian payoff pada expiration ditulis secara formal:
>
> $$
> C_T=\max(S_T-K,0)
> $$
>
> $$
> P_T=\max(K-S_T,0)
> $$
>
> Payoff long option tidak pernah negatif, tetapi **profit** dapat negatif karena option harus dibeli dengan premium. Short option menghasilkan payoff kebalikan: short call memiliki potentially unlimited loss ketika stock price naik, sedangkan short put memiliki downside yang terbatas oleh strike price.
>
> Options dapat digabung untuk menghasilkan exposures tertentu. **Straddle** memperoleh value jika stock bergerak jauh ke kedua arah; **strangle** memiliki logic mirip dengan strike berbeda; **butterfly spread** memperoleh payoff terbesar ketika terminal price berada dekat middle strike; dan **protective put** memberikan portfolio insurance dengan membatasi downside sambil mempertahankan upside.
>
> Hubungan paling penting antar securities adalah **put–call parity**. Untuk European options:
>
> $$
> C=P+S-PV(K)-PV(Div)
> $$
>
> Ini berasal dari **Law of One Price**: stock + put menghasilkan terminal payoff yang sama dengan bond + call, sehingga portfolios tersebut harus mempunyai value sama.
>
> Option values dipengaruhi oleh **stock price, strike price, time to expiration, dividends, interest rates, dan terutama volatility**. Karena option payoff asymmetric—holder mendapat upside tetapi dapat memilih tidak exercise ketika unfavorable—higher volatility biasanya meningkatkan value baik call maupun put.
>
> Untuk American options, early exercise tidak selalu optimal. **American call pada non-dividend-paying stock tidak pernah optimal untuk di-exercise early**, karena option memiliki positive time value. Deep in-the-money American put dapat optimal untuk di-exercise early. Untuk dividend-paying stock, call dapat optimal di-exercise tepat sebelum ex-dividend date apabila dividend yang akan hilang lebih besar daripada benefit menunggu.
>
> Bagian akhir menghubungkan options dengan corporate finance. **Equity dapat dipandang sebagai call option atas firm assets dengan strike sebesar promised debt payment.** Risky debt dapat dipandang sebagai **risk-free debt minus put option** pada firm assets. Framework ini membantu memahami **credit spreads, default risk, asset substitution, dan debt overhang**.
>
> Untuk CF4, Chapter 20 merupakan source langsung bagi [[2.4 Derivative Securities in Corporate Finance]] dan juga memberi fondasi untuk [[5.2 Derivative Investments]].

---

## 1. Why This Chapter Exists

Options muncul dalam finance dalam dua peran yang berbeda tetapi terhubung.

Pertama, options adalah **tradable derivative securities**. Corporations dan investors dapat menggunakannya untuk mengubah exposure terhadap:

- stock prices;
- exchange rates;
- interest rates;
- commodity prices;
- business risks lainnya.

Kedua, option framework juga dapat digunakan untuk memahami securities perusahaan itu sendiri. Jika sebuah firm mempunyai debt yang harus dibayar pada maturity, shareholders hanya memperoleh residual assets setelah debt dibayar. Struktur payoff tersebut ternyata identik dengan **call option**.

Karena itu chapter dibangun bertahap:

```text
Option contract
      ↓
Call vs put
      ↓
Payoff at expiration
      ↓
Option combinations
      ↓
Put-call parity
      ↓
What drives option value?
      ↓
Should an option be exercised early?
      ↓
Equity and debt as option-like claims
```

Chapter 20 belum membangun full option-pricing model. Tujuannya adalah memahami **economic structure dan payoff logic** sebelum Chapter 21 membahas valuation lebih dalam.

> [!INFO] CF4 Connection
> `[CORE CF4]` Chapter 20 tercantum sebagai referensi resmi Topik 2 dan sangat langsung mendukung [[2.4 Derivative Securities in Corporate Finance]]. Concepts call, put, payoff, hedging, dan put-call parity juga menjadi foundation untuk [[5.2 Derivative Investments]].

---

## 2. Chapter Map

```text
Chapter 20 — Financial Options
├── 20.1 Option Basics
│   ├── Call and put options
│   ├── Strike / exercise price
│   ├── Expiration date
│   ├── American vs European options
│   ├── Long vs short positions
│   ├── Option premium
│   ├── In / at / out of the money
│   └── Options on other financial securities
│
├── 20.2 Option Payoffs at Expiration
│   ├── Long call
│   ├── Long put
│   ├── Short call / short put
│   ├── Payoff vs profit
│   ├── Option returns
│   ├── Straddle
│   ├── Strangle
│   ├── Butterfly spread
│   └── Portfolio insurance / protective put
│
├── 20.3 Put-Call Parity
│   ├── Stock + put
│   ├── Bond + call
│   ├── Law of One Price
│   └── Dividend adjustment
│
├── 20.4 Factors Affecting Option Prices
│   ├── Stock price
│   ├── Strike price
│   ├── Arbitrage bounds
│   ├── Intrinsic value
│   ├── Time value
│   ├── Time to expiration
│   └── Volatility
│
├── 20.5 Exercising Options Early
│   ├── Non-dividend-paying stocks
│   ├── American calls
│   ├── American puts
│   └── Dividend-paying stocks
│
└── 20.6 Options and Corporate Finance
    ├── Equity as a call option
    ├── Debt as an option portfolio
    ├── Credit default swaps
    ├── Pricing risky debt
    └── Agency conflicts
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 20.1 Option Basics | Very High | [[2.4 Derivative Securities in Corporate Finance]], [[5.2 Derivative Investments]] |
| 20.2 Payoffs | Very High | [[5.2 Derivative Investments]] |
| 20.3 Put-Call Parity | High | [[5.2 Derivative Investments]] |
| 20.4 Option Price Factors | High | [[5.2 Derivative Investments]] |
| 20.5 Early Exercise | High supporting | [[5.2 Derivative Investments]] |
| 20.6 Corporate Finance Applications | Very High | [[2.4 Derivative Securities in Corporate Finance]] |

---

## 3. 20.1 Option Basics

### 3.1 What Is an Option?

A **financial option** gives its owner the **right, but not the obligation**, to buy or sell an asset at a fixed price at or before a future date, depending on contract type.

Two basic options:

| Option | Holder's Right | Intuition |
|---|---|---|
| **Call** | Buy underlying asset | Benefits from upside |
| **Put** | Sell underlying asset | Protects / benefits from downside |

> [!WARNING] Important Distinction
> An option gives the **holder a right**, not an obligation.
>
> The **writer / seller** takes the opposite side and therefore has the obligation if the holder exercises.

---

### 3.2 Strike Price and Exercise

The **strike price** or **exercise price**, \(K\), is the predetermined price at which the underlying asset can be bought or sold.

To **exercise** an option means to use the contractual right.

For a call:

```text
Exercise
↓
Pay K
↓
Receive underlying asset
```

For a put:

```text
Exercise
↓
Deliver underlying asset
↓
Receive K
```

---

### 3.3 Expiration Date

The **expiration date** is the final date associated with the option contract.

Two styles:

#### American Option

Can be exercised:

\[
\text{any time up to and including expiration}
\]

#### European Option

Can be exercised:

\[
\text{only on expiration date}
\]

The terms American and European describe **exercise rules**, not trading location.

---

### 3.4 Long and Short Positions

The option buyer / holder has the **long position**.

The option writer / seller has the **short position**.

For every option contract:

\[
\text{Long payoff} + \text{Short payoff} = 0
\]

at exercise/expiration, ignoring the original premium.

If a call holder gains $15 from exercising, the writer loses $15 on the exercise obligation.

---

### 3.5 Option Premium

Why would anyone write an option if the writer can lose money when exercised?

Because the writer receives payment upfront.

The market price of the option is the **option premium**.

Thus:

```text
Option holder
Pays premium now
↓
Receives optional future payoff

Option writer
Receives premium now
↓
Accepts contingent future obligation
```

> [!WARNING] Important Distinction
> **Payoff ≠ profit.**
>
> Payoff ignores the option premium paid initially.
>
> Profit must subtract the initial cost of buying the option.

---

### 3.6 Moneyness

An option is:

- **in-the-money (ITM)** if immediate exercise produces positive payoff;
- **at-the-money (ATM)** if stock price approximately equals strike price;
- **out-of-the-money (OTM)** if immediate exercise has zero payoff.

For calls:

\[
S>K \Rightarrow \text{ITM}
\]

\[
S=K \Rightarrow \text{ATM}
\]

\[
S<K \Rightarrow \text{OTM}
\]

For puts, the relation is reversed:

\[
S<K \Rightarrow \text{ITM}
\]

\[
S=K \Rightarrow \text{ATM}
\]

\[
S>K \Rightarrow \text{OTM}
\]

---

### 3.7 Option Quotations

Textbook Table 20.1 uses Amazon option quotations to illustrate market data.

A quotation typically identifies:

- underlying;
- expiration month/year;
- strike price;
- call or put;
- last sale;
- bid;
- ask;
- trading volume;
- **open interest**.

**Open interest** = number of outstanding contracts of that option.

> [!TEXTBOOK CONTEXT]
> Exact exchange conventions and quoted historical Amazon prices are period-specific. Durable concepts are contract identification, bid/ask quotation, volume, and open interest.

---

### 3.8 Options on Other Securities

Options need not be written only on individual stocks.

Textbook notes derivatives can be based on:

- stock indices;
- currencies;
- interest-rate instruments;
- other financial assets.

This makes options useful for corporate risk management because a firm may hedge exposures beyond its own stock.

---

## 4. 20.2 Option Payoffs at Expiration

### 4.1 Long Call

At expiration:

\[
\boxed{
C_T=\max(S_T-K,0)
}
\tag{20.1}
\]

where:

- \(S_T\) = stock price at expiration;
- \(K\) = strike price.

If:

\[
S_T>K
\]

exercise and receive:

\[
S_T-K
\]

If:

\[
S_T\le K
\]

do not exercise:

\[
C_T=0
\]

### Example

Call strike:

\[
K=20
\]

If stock expires at:

\[
S_T=30
\]

payoff:

\[
30-20=10
\]

If:

\[
S_T=15
\]

payoff:

\[
0
\]

The holder does not voluntarily choose a negative exercise payoff.

---

### 4.2 Long Put

At expiration:

\[
\boxed{
P_T=\max(K-S_T,0)
}
\tag{20.2}
\]

If:

\[
S_T<K
\]

the holder sells stock at \(K\) even though market value is only \(S_T\).

Payoff:

\[
K-S_T
\]

If:

\[
S_T\ge K
\]

the put expires worthless.

---

### 4.3 Short Call

Short option payoff is negative of long payoff:

\[
\text{Short Call Payoff}
=
-\max(S_T-K,0)
\]

If stock price rises without bound, short-call loss can also rise without bound.

> [!DANGER] Risk Profile
> **Short call has potentially unlimited loss.**

---

### 4.4 Short Put

\[
\text{Short Put Payoff}
=
-\max(K-S_T,0)
\]

Because stock price cannot fall below zero, maximum short-put loss at expiration is bounded by:

\[
K
\]

per share, before considering premium received.

---

### 4.5 Payoff Versus Profit

Suppose a call costs premium \(C_0\).

Profit at expiration:

\[
\Pi_{\text{long call}}
=
\max(S_T-K,0)-C_0
\]

If we ignore time value of money for the premium, break-even occurs when:

\[
S_T=K+C_0
\]

For a put purchased for \(P_0\):

\[
\Pi_{\text{long put}}
=
\max(K-S_T,0)-P_0
\]

Break-even:

\[
S_T=K-P_0
\]

> [!WARNING] Important Distinction
> An option can finish **in-the-money** and still generate a negative overall profit if its payoff is smaller than the premium paid.

---

### 4.6 Option Returns

Options create **leveraged exposure** because a relatively small premium can produce a large percentage gain or loss.

This does not mean options mechanically create superior investments.

Higher percentage upside comes with:

- high probability of losing premium;
- potentially very volatile returns;
- nonlinear payoff.

The chapter uses option-return diagrams to show that options magnify exposure relative to owning the underlying stock.

---

## 5. Option Combinations

Options can be combined to engineer specific payoff patterns.

---

### 5.1 Straddle

A **long straddle** combines:

- long call;
- long put;
- same strike \(K\);
- same expiration.

Payoff:

\[
\max(S_T-K,0)
+
\max(K-S_T,0)
\]

which simplifies to:

\[
|S_T-K|
\]

before premium costs.

The strategy gains from a **large move in either direction**.

```text
Big rise  → call pays
Near K    → little/no payoff
Big fall  → put pays
```

A long straddle therefore represents a view that future volatility will be high, without requiring a directional forecast.

A short straddle represents the opposite exposure.

---

### 5.2 Strangle

A **strangle** also combines a call and put but with **different strike prices**.

Textbook example:

- long call with \(K_C=40\);
- long put with \(K_P=30\).

If terminal stock price remains between 30 and 40, both may expire worthless.

Compared with a straddle, a strangle requires a larger price move before payoff appears.

---

### 5.3 Butterfly Spread

Textbook constructs a butterfly using calls:

- long one call at low strike;
- short two calls at middle strike;
- long one call at high strike.

Example strikes:

\[
20,\quad 30,\quad 40
\]

Maximum payoff occurs near the middle strike \(30\).

Payoff is zero at sufficiently low or high stock prices.

Thus:

> **Butterfly spread benefits when terminal price ends near the middle strike rather than moving far away.**

This is essentially the opposite shape of long-volatility strategies such as straddles.

Because its terminal payoff is nonnegative and sometimes positive, the butterfly must have a positive initial cost; otherwise an arbitrage opportunity would exist.

---

### 5.4 Protective Put / Portfolio Insurance

Suppose you own stock but want protection against a large decline.

Buy:

\[
\text{Stock}+\text{Put}
\]

with strike \(K\).

At expiration:

\[
S_T+\max(K-S_T,0)
\]

Therefore:

\[
=
\begin{cases}
K, & S_T<K \\
S_T, & S_T\ge K
\end{cases}
\]

or:

\[
\boxed{
\max(S_T,K)
}
\]

The portfolio has:

- downside floor \(K\);
- upside participation above \(K\).

This is why a put is economically similar to insurance.

---

### 5.5 Alternative Portfolio Insurance

The same terminal payoff can be produced using:

- a risk-free zero-coupon bond paying \(K\);
- a call option with strike \(K\).

At expiration:

\[
K+\max(S_T-K,0)
=
\max(S_T,K)
\]

Therefore:

```text
Stock + Put
        ≡
Bond + Call
```

This replication becomes the foundation for put-call parity.

---

## 6. 20.3 Put-Call Parity

### 6.1 Law of One Price

If two portfolios always produce identical future payoffs, they must have the same price today.

For a non-dividend-paying stock:

\[
S+P=PV(K)+C
\]

Rearrange:

\[
\boxed{
C=P+S-PV(K)
}
\tag{20.3}
\]

This is **put-call parity** for European options on a non-dividend-paying stock.

---

### 6.2 Economic Interpretation

The call can be replicated using:

1. long stock;
2. long put;
3. borrowing \(PV(K)\).

So:

\[
\text{Call}
=
\text{Stock}
+
\text{Put}
-
\text{Risk-free Bond}
\]

Another interpretation:

> A call is a **levered stock position with downside insurance**.

---

### 6.3 Dividend-Paying Stock

If the stock pays dividends during the life of the options, owning the stock generates cash flows that call ownership does not.

Therefore:

\[
S+P
=
PV(K)+PV(Div)+C
\]

Rearrange:

\[
\boxed{
C=P+S-PV(K)-PV(Div)
}
\tag{20.4}
\]

where \(PV(Div)\) is the present value of dividends expected during the option life.

---

### 6.4 Example — Replicating a Call

Textbook Example 20.6:

- one-year European call;
- \(K=20\);
- stock price \(S=18\);
- European put price \(P=3.50\);
- risk-free rate \(r=6\%\);
- no dividends.

Present value of strike:

\[
PV(K)
=
\frac{20}{1.06}
\approx18.87
\]

Thus:

\[
C
=
3.50+18-18.87
\approx2.63
\]

A dealer can replicate the call for about $2.63, so charging less would not cover replication cost.

The example shows why option relationships can be derived without forecasting the actual terminal stock price: **replication + no arbitrage** is enough.

---

## 7. 20.4 Factors Affecting Option Prices

### 7.1 Stock Price and Strike Price

For otherwise identical calls:

\[
S\uparrow \Rightarrow C\uparrow
\]

\[
K\uparrow \Rightarrow C\downarrow
\]

For puts:

\[
S\uparrow \Rightarrow P\downarrow
\]

\[
K\uparrow \Rightarrow P\uparrow
\]

Intuition:

- call benefits from buying valuable stock at low fixed price;
- put benefits from selling low-valued stock at high fixed price.

---

### 7.2 Arbitrage Bounds

Options cannot take arbitrary prices.

#### Nonnegativity

\[
C\ge0,\qquad P\ge0
\]

#### American vs European

An American option has at least all rights of equivalent European option:

\[
V_{\text{American}}
\ge
V_{\text{European}}
\]

#### Put Upper Bound

Maximum possible put payoff occurs when:

\[
S_T=0
\]

Therefore:

\[
P\le K
\]

for the simple upper-bound logic used here.

#### Call Upper Bound

A call cannot be worth more than the stock:

\[
C\le S
\]

If call strike were zero, it would essentially deliver the stock for free; no positive-strike call can be more valuable than that.

#### American Option Lower Bound

An American option cannot be worth less than its **intrinsic value**, because holder could buy it and immediately exercise.

---

### 7.3 Intrinsic Value

Intrinsic value = value if option expired **right now**.

For call:

\[
IV_C=\max(S-K,0)
\]

For put:

\[
IV_P=\max(K-S,0)
\]

---

### 7.4 Time Value

**Time value**:

\[
\boxed{
\text{Time Value}
=
\text{Option Price}
-
\text{Intrinsic Value}
}
\]

For an American option:

\[
\text{Time Value}\ge0
\]

because price cannot be below immediate-exercise value.

Time value captures the value of retaining future optionality.

---

### 7.5 Time to Expiration

For otherwise identical **American options**:

> Longer time to expiration cannot reduce option value.

Why?

A longer-lived American option includes all exercise opportunities of the shorter-lived option plus additional time.

Therefore:

\[
T_2>T_1
\Rightarrow
V_A(T_2)\ge V_A(T_1)
\]

For European options, the same ordering is not guaranteed because the later option cannot be exercised on the earlier date.

The textbook uses a liquidating-dividend example to show how a later-expiry European call can potentially be worth less.

---

### 7.6 Volatility

One of the most important results:

\[
\boxed{
\sigma\uparrow
\Rightarrow
C\uparrow,\quad P\uparrow
}
\]

generally.

Why?

Option payoff is asymmetric.

For a call:

- huge upside → higher payoff;
- huge downside → payoff stops at zero.

The holder benefits from greater upside dispersion but is protected against further negative payoff below zero.

Textbook Example 20.7 compares two stocks with the same expected future price:

- low-volatility stock = exactly $50;
- high-volatility stock = either $40 or $60;
- call strike = $50.

Low-volatility call expires worthless with certainty.

High-volatility call has:

- 50% chance payoff = 0;
- 50% chance payoff = 10.

Thus it has positive value despite identical expected stock price.

> [!IMPORTANT] Core Lesson
> **Option value depends on the distribution of outcomes, not only expected stock price.**

Puts similarly become more valuable with volatility because downside insurance is more valuable when underlying risk is greater.

---

## 8. 20.5 Exercising Options Early

American options permit early exercise. That does **not** imply exercising early is generally wise.

---

### 8.1 Non-Dividend-Paying Stock: American Call

For a non-dividend-paying stock:

\[
C=P+S-PV(K)
\]

Textbook rewrites:

\[
PV(K)=K-dis(K)
\]

where \(dis(K)\) is the discount from face value because the strike does not have to be paid until expiration.

Then:

\[
\boxed{
C=(S-K)+dis(K)+P
}
\tag{20.5}
\]

For an in-the-money call:

- \(S-K\) = intrinsic value;
- \(dis(K)+P\) = time value.

With positive rates before maturity:

\[
dis(K)>0
\]

and generally:

\[
P>0
\]

Therefore call time value is positive.

Hence:

\[
C>S-K
\]

before expiration.

> [!IMPORTANT] Core Result
> **It is never optimal to exercise an American call on a non-dividend-paying stock early.**

If you want to exit the position, selling the option gives more value than exercising it.

Why delay exercise?

1. You postpone paying the strike price.
2. You retain downside protection—the right not to exercise if stock later falls.

Therefore an American call on a non-dividend-paying stock has the same price as its otherwise identical European counterpart.

---

### 8.2 American Put on Non-Dividend-Paying Stock

Rearranging parity:

\[
\boxed{
P=(K-S)+C-dis(K)
}
\tag{20.6}
\]

Time value includes:

\[
C-dis(K)
\]

which can be negative for a sufficiently deep in-the-money put.

Why can early exercise make sense?

If stock is extremely low:

- put is near maximum payoff \(K\);
- little additional upside remains;
- exercising now gives \(K\) sooner;
- proceeds can earn interest.

Thus:

> **Deep in-the-money American puts may optimally be exercised early.**

The textbook Google example shows very high-strike puts for which immediate exercise exceeds proceeds from selling the put plus stock.

---

### 8.3 Dividend-Paying Stock: Call

For dividend-paying stock:

\[
\boxed{
C=(S-K)+dis(K)+P-PV(Div)
}
\tag{20.7}
\]

Dividend reduces call time value because the option holder does not receive dividends unless they exercise and become stockholder.

If:

\[
PV(Div)
\]

is large relative to:

\[
dis(K)+P
\]

early exercise can be worthwhile.

The relevant timing is:

> **just before the ex-dividend date**.

The trade-off:

```text
Wait
↓
Keep option time value
+ delay paying strike

Exercise before ex-dividend
↓
Become shareholder
+ capture dividend
```

---

### 8.4 Dividend-Paying Stock: Put

Put relation:

\[
\boxed{
P=(K-S)+C-dis(K)+PV(Div)
}
\tag{20.8}
\]

Dividends help put value because expected stock-price drop at ex-dividend makes the put more valuable.

Thus dividends generally make early exercise of puts **less attractive**, all else equal.

---

### 8.5 American vs European Summary

| Situation | Early Exercise Logic |
|---|---|
| American call, no dividends | Never optimal early |
| Deep ITM American put, no dividends | Can be optimal |
| American call, dividends | Can be optimal just before ex-dividend |
| American put, dividends | Dividend tends to increase value of waiting |

---

## 9. 20.6 Options and Corporate Finance

This section turns option mechanics into corporate-finance insight.

---

### 9.1 Equity as a Call Option

Suppose a firm has assets worth \(A_T\) at debt maturity and debt requiring payment \(K\).

Shareholders receive:

\[
\max(A_T-K,0)
\]

Why?

If:

\[
A_T>K
\]

shareholders pay debt and keep residual:

\[
A_T-K
\]

If:

\[
A_T\le K
\]

equity holders can default / surrender firm assets and receive zero due to limited liability.

This is exactly the payoff of a call:

\[
\boxed{
E_T=\max(A_T-K,0)
}
\]

Therefore:

> **Equity is economically equivalent to a call option on the firm's assets with strike equal to promised debt payment.**

Underlying asset:

\[
\text{Firm Assets}
\]

Strike:

\[
\text{Required Debt Payment}
\]

Expiration:

\[
\text{Debt Maturity}
\]

---

### 9.2 Debt as an Option Portfolio

Debt holders receive:

\[
\min(A_T,K)
\]

This can be decomposed as:

\[
K-\max(K-A_T,0)
\]

Thus risky debt is equivalent to:

```text
Risk-free bond promising K
minus
Put option on firm assets with strike K
```

or:

\[
\boxed{
D
=
PV(K)-P_{\text{firm}}
}
\]

conceptually.

Debt holders are therefore economically **short a put option** on the firm's assets.

If firm value collapses below promised debt payment, the put-like loss is borne by creditors.

---

### 9.3 Equity + Debt = Firm Assets

The option representation remains consistent with total firm value:

\[
A=E+D
\]

because:

\[
\max(A_T-K,0)
+
\min(A_T,K)
=
A_T
\]

Security design changes how asset payoff is split but not the total asset payoff.

This ties Chapter 20 back to the MM logic from Chapter 14.

---

### 9.4 Credit Default Swaps

A **credit default swap (CDS)** is a contract that provides protection against credit/default losses.

Economic roles:

- bond investor can hedge default exposure;
- another investor can take speculative exposure to credit deterioration/improvement;
- counterparties exchange contractual cash flows tied to credit event.

Textbook discusses the rapid expansion of CDS markets before the global financial crisis.

> [!TEXTBOOK CONTEXT]
> Historical CDS market size and Lehman-era figures are period-specific. The enduring concept is that CDS transfers **credit risk** without requiring transfer of the underlying bond.

---

### 9.5 Pricing Risky Debt with Option Logic

Because:

\[
D=A-E
\]

if we can estimate:

- total firm value;
- value of equity as a call option;

we can infer value of risky debt.

Then debt yield can be calculated from:

\[
\text{Debt Price}
=
\frac{\text{Face Value}}
{(1+y)^T}
\]

and:

\[
\text{Credit Spread}
=
y-r_f
\]

Textbook Example 20.10 applies this to hypothetical Google debt.

Given:

- equity/firm value before recap ≈ $229.2 billion;
- face value debt = $163.5 billion;
- equity after recap valued like a call ≈ $72.6 billion;

debt value:

\[
D
=
229.2-72.6
=
156.6\text{ billion}
\]

For 16-month maturity:

\[
y
=
\left(
\frac{163.5}{156.6}
\right)^{12/16}
-1
\approx3.29\%
\]

With risk-free rate:

\[
r_f=0.25\%
\]

credit spread:

\[
3.29\%-0.25\%
=
3.04\%
\]

The accompanying textbook figure shows:

> **As amount borrowed increases, implied debt yield rises.**

Why?

More leverage pushes debt closer to default states, increasing credit risk.

---

### 9.6 Agency Conflict: Asset Substitution

Equity is a call option.

Call value generally increases with volatility.

Therefore:

\[
\sigma_A\uparrow
\Rightarrow
E\uparrow
\]

holding other valuation inputs appropriately fixed.

This creates an incentive problem after debt is issued.

Shareholders may prefer projects that increase asset risk because:

- upside largely accrues to equity;
- downside is partly absorbed by debt holders due to limited liability.

Debt holders, who are effectively short a put, lose when asset volatility increases.

This is the **asset substitution / risk-shifting problem**.

```text
Higher asset risk
      ↓
Call-like equity becomes more valuable
      ↓
Put written by creditors becomes more costly
      ↓
Value transfer from debt to equity
```

---

### 9.7 Agency Conflict: Debt Overhang

Suppose firm considers a new positive-value investment.

Increasing firm asset value benefits both:

- equity;
- debt.

Because risky debt becomes safer when asset value rises, part of project value goes to creditors.

If shareholders must fund the investment but capture only part of its benefit, they may reject a positive-NPV project.

This is **debt overhang / underinvestment**.

Option interpretation:

- debt holders are short a put;
- higher asset value reduces put value;
- therefore debt value rises;
- some investment benefit transfers from equity to debt.

> [!INFO] CF4 Connection
> Option framing makes debt-equity conflicts much easier to understand:
>
> **volatility increase → favors equity, hurts debt**
>
> **asset-value increase → helps both, potentially causing debt overhang when equity bears investment cost**

---

## Chapter Synthesis

Chapter 20 can be understood as one story about **contingent claims**.

A normal stock or bond delivers cash flows according to ownership or debt contract. An option adds another layer: whether cash flow occurs depends on the value of an underlying asset.

A call is a right to buy. Its payoff is:

\[
\max(S_T-K,0)
\]

A put is a right to sell:

\[
\max(K-S_T,0)
\]

These formulas immediately explain the asymmetry of option ownership. The holder can exercise only when beneficial, so downside payoff is floored at zero. The writer receives premium upfront precisely because they accept the opposite contingent obligation.

Once basic calls and puts are understood, combinations become intuitive. A straddle is a bet on movement rather than direction. A protective put creates a floor under portfolio value. A butterfly spread concentrates payoff around a middle terminal price.

The Law of One Price then ties these positions together. Stock plus put creates the same terminal payoff as a risk-free bond plus call. Therefore their prices must satisfy **put-call parity**:

\[
C=P+S-PV(K)-PV(Div)
\]

This relation is not merely a formula to memorize. It demonstrates a foundational derivative-pricing idea:

> **Value can be inferred from a replicating portfolio.**

The chapter next asks what makes options expensive. Call value rises with stock price and falls with strike; put value moves in the opposite direction. Longer exercise flexibility helps American options. Most importantly, volatility increases both call and put value because the option holder participates in favorable extremes while being protected by the right not to exercise in unfavorable states.

That same optionality explains early exercise. A non-dividend-paying call has valuable time value from delaying strike payment and retaining downside protection, so exercising early destroys value. Deep in-the-money puts can be different because receiving the strike earlier may be more valuable than waiting. Dividends alter the trade-off because call holders do not receive them unless they exercise and own the stock.

Finally, Berk & DeMarzo show that options are not only derivative contracts—they are also a powerful way to interpret corporate securities.

With limited liability:

\[
E_T=\max(A_T-K,0)
\]

so equity is a call on firm assets. Debt is a risk-free claim minus a put-like default exposure. This simple representation explains:

- why debt yields rise with leverage;
- why equity holders may prefer excessive risk;
- why debt holders dislike volatility;
- why debt overhang can suppress positive-NPV investment.

The entire chapter therefore connects derivative mechanics to corporate finance:

```text
Option payoff
      ↓
Replication
      ↓
Option value drivers
      ↓
Exercise decision
      ↓
Equity and debt as contingent claims
      ↓
Credit risk + agency conflicts
```

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Call option | Right to buy underlying at strike | Basic upside derivative | [[5.2 Derivative Investments]] |
| Put option | Right to sell underlying at strike | Downside protection | [[5.2 Derivative Investments]] |
| Strike price | Contractual buy/sell price | Determines option payoff | [[5.2 Derivative Investments]] |
| American option | Exercise anytime through expiration | Early-exercise flexibility | [[5.2 Derivative Investments]] |
| European option | Exercise only at expiration | Core for put-call parity | [[5.2 Derivative Investments]] |
| Long option | Holder owns exercise right | Limited downside to premium | [[5.2 Derivative Investments]] |
| Short option | Writer has exercise obligation | Potentially large loss | [[5.2 Derivative Investments]] |
| Option premium | Market price paid for option | Separates payoff from profit | [[5.2 Derivative Investments]] |
| Moneyness | ITM / ATM / OTM status | Immediate-exercise economics | [[5.2 Derivative Investments]] |
| Intrinsic value | Immediate-exercise value | Lower bound for American option | [[5.2 Derivative Investments]] |
| Time value | Option price minus intrinsic value | Value of remaining optionality | [[5.2 Derivative Investments]] |
| Straddle | Long call + put, same strike | Exposure to large movement | [[5.2 Derivative Investments]] |
| Strangle | Call + put with different strikes | Lower-cost wide-move exposure | [[5.2 Derivative Investments]] |
| Butterfly spread | Multi-call position peaked near middle strike | Nonlinear targeted payoff | [[5.2 Derivative Investments]] |
| Protective put | Stock + put | Portfolio insurance | [[2.4 Derivative Securities in Corporate Finance]] |
| Put-call parity | Replication relationship between stock, bond, call, put | Core no-arbitrage relation | [[5.2 Derivative Investments]] |
| Volatility | Dispersion of underlying outcomes | Higher volatility generally raises option value | [[5.2 Derivative Investments]] |
| Equity as call | Shareholders own residual claim with limited liability | Connects options to capital structure | [[2.4 Derivative Securities in Corporate Finance]] |
| Risky debt as bond minus put | Creditors bear default downside | Explains credit risk | [[2.4 Derivative Securities in Corporate Finance]] |
| Asset substitution | Equity may prefer greater firm risk | Debt-equity agency conflict | [[2.4 Derivative Securities in Corporate Finance]] |
| Debt overhang | Equity underinvests because benefit shifts to debt | Financing-induced agency conflict | [[2.4 Derivative Securities in Corporate Finance]] |

---

## Compression Notes

### Retained in Detail

- definition of calls and puts;
- strike, expiration, exercise, American/European distinction;
- long versus short positions;
- option premium;
- moneyness;
- option payoff formulas;
- payoff versus profit;
- short-call and short-put risk;
- straddle, strangle, butterfly spread;
- protective put / portfolio insurance;
- put-call parity with and without dividends;
- Law of One Price reasoning;
- intrinsic value and time value;
- arbitrage bounds;
- time-to-expiration logic;
- volatility effect;
- early exercise of American calls and puts;
- dividend effect on early exercise;
- equity as call option;
- debt as bond minus put;
- CDS conceptual role;
- risky debt / credit spread example;
- asset substitution;
- debt overhang.

### Condensed

- full historical CBOE option quote tables;
- repeated payoff graphs once the algebraic payoff is clear;
- detailed option-return plots;
- repeated numerical examples teaching identical payoff shapes;
- institutional trading conventions;
- historical CDS market statistics and crisis anecdotes;
- full Google option quote table used for risky-debt illustration.

### Omitted / Beyond CF4

- end-of-chapter exercises and MyFinanceLab material;
- detailed empirical/historical exchange data;
- website references;
- derivation of full option-pricing model, which is deferred by the textbook to Chapter 21;
- implementation details not needed to understand Chapter 20 concepts.

> [!IMPORTANT] Reading Priority
> Untuk CF4, prioritaskan:
>
> 1. **call vs put**;
> 2. **long vs short**;
> 3. payoff formulas;
> 4. **payoff vs profit**;
> 5. protective put / portfolio insurance;
> 6. **put-call parity**;
> 7. intrinsic value vs time value;
> 8. option-price drivers, especially **volatility**;
> 9. early exercise rules;
> 10. **equity as a call option** dan risky debt as an option portfolio.

---

## CF4 Connection Map

```text
Financial option
      ↓
Call / Put
      ↓
[[5.2 Derivative Investments]]
      ↓
Payoff + hedging + replication
      ↓
Put-call parity
      ↓
Option value drivers
      ↓
Corporate applications
      ↓
Equity = call on firm assets
Debt = risk-free bond - put
      ↓
[[2.4 Derivative Securities in Corporate Finance]]
```

Corporate risk-management logic:

```text
Business risk exposure
      ↓
Choose derivative payoff
      ↓
Offset undesirable state
      ↓
Retain desirable exposure
```

Capital-structure option logic:

```text
Firm assets at debt maturity
      ↓
Assets > debt?
   ┌───────┴────────┐
  Yes              No
   ↓                ↓
Equity gets       Equity gets 0
A - K             Creditors absorb loss
   ↓
Equity payoff = max(A - K, 0)
```

---

## Quick Reading Review

- Option = **right, not obligation**.
- Call = right to **buy**.
- Put = right to **sell**.
- Holder = long; writer = short.
- Strike price = contractual transaction price.
- American = exercise anytime through expiration.
- European = exercise only at expiration.
- Option premium = upfront market price.
- Call payoff:
  \[
  C_T=\max(S_T-K,0)
  \]
- Put payoff:
  \[
  P_T=\max(K-S_T,0)
  \]
- Short option payoff is negative of long payoff.
- Short call can have unlimited loss.
- **Payoff ≠ profit** because premium must be included.
- ITM means immediate exercise is valuable.
- ATM means \(S\approx K\).
- OTM means immediate exercise has zero payoff.
- Long straddle = call + put with same strike; benefits from large movement either way.
- Strangle uses different call and put strikes.
- Butterfly spread is most valuable near its middle strike.
- Stock + put = downside-insured stock position.
- Bond + call can replicate the same insured payoff.
- Put-call parity without dividends:
  \[
  C=P+S-PV(K)
  \]
- With dividends:
  \[
  C=P+S-PV(K)-PV(Div)
  \]
- Intrinsic value = immediate-exercise value.
- Time value = option price − intrinsic value.
- Call value rises with stock price and falls with strike.
- Put value falls with stock price and rises with strike.
- Higher volatility generally increases both call and put values.
- A longer-lived American option cannot be worth less than otherwise identical shorter-lived American option.
- Never exercise an American call on a non-dividend-paying stock early.
- Deep ITM American put may optimally be exercised early.
- Dividend-paying American call may be exercised just before ex-dividend date.
- Equity payoff:
  \[
  E_T=\max(A_T-K,0)
  \]
  so equity resembles a call option on firm assets.
- Risky debt can be viewed as a risk-free bond minus a put.
- Higher leverage increases default risk and therefore credit spread.
- Higher asset volatility can transfer value from debt to equity → **asset substitution**.
- Positive investment can partly benefit creditors, potentially discouraging shareholders → **debt overhang**.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose / options in corporate finance | Berk & DeMarzo, Chapter 20 introduction |
| Financial option, call, put | Chapter 20, §20.1 |
| Strike, exercise, expiration | Chapter 20, §20.1 — Understanding Option Contracts |
| American vs European options | Chapter 20, §20.1 |
| Long / short positions and option premium | Chapter 20, §20.1 |
| Moneyness | Chapter 20, §20.1 |
| Option quotations and open interest | Chapter 20, §20.1 — Interpreting Stock Option Quotations |
| Long call payoff | Chapter 20, §20.2, Eq. 20.1 |
| Long put payoff | Chapter 20, §20.2, Eq. 20.2 |
| Short option positions | Chapter 20, §20.2 |
| Payoff vs profit / option returns | Chapter 20, §20.2 |
| Straddle | Chapter 20, §20.2 |
| Strangle | Chapter 20, Example 20.5 |
| Butterfly spread | Chapter 20, §20.2 / Figure 20.6 |
| Portfolio insurance / protective put | Chapter 20, §20.2 / Figure 20.7 |
| Put-call parity | Chapter 20, §20.3, Eqs. 20.3–20.4 |
| Put-call parity worked example | Chapter 20, Example 20.6 |
| Stock and strike effects | Chapter 20, §20.4 |
| Arbitrage bounds | Chapter 20, §20.4 |
| Intrinsic and time value | Chapter 20, §20.4 |
| Time to exercise | Chapter 20, §20.4 |
| Volatility | Chapter 20, §20.4 / Example 20.7 |
| Non-dividend call early exercise | Chapter 20, §20.5, Eq. 20.5 |
| American put early exercise | Chapter 20, §20.5, Eq. 20.6 |
| Dividend-paying option early exercise | Chapter 20, §20.5, Eqs. 20.7–20.8 |
| Equity as call option | Chapter 20, §20.6 |
| Debt as option portfolio | Chapter 20, §20.6 |
| Credit default swaps | Chapter 20, §20.6 |
| Pricing risky debt | Chapter 20, §20.6 / Example 20.10 |
| Asset substitution and debt overhang | Chapter 20, §20.6 — Agency Conflicts |
