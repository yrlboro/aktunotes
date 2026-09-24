---
type: "condensed-book"
exam: "CF1"
book: "Derivatives Markets"
author: "R. L. McDonald et al."
chapter: "5"
chapter_title: "Financial Forwards and Futures"
cf1_topics: ["6.2"]
cf1_relevance: "High for §§5.1–5.4; later sections beyond core CF1 scope"
source_scope: "McDonald Chapter 5; detailed treatment of Sections 5.1–5.4 per CF1 syllabus"
compression_level: "Condensed"
tags: [CF1, CondensedBook, McDonald, Derivatives, Forward, Futures, PrepaidForward, CostOfCarry, Arbitrage]
date_created: "2026-08-25"
status: "study-note"
---

# McDonald — Chapter 5: Financial Forwards and Futures

> [!ABSTRACT] Chapter in One View
> Chapter 5 menjawab pertanyaan yang sengaja ditunda di Chapter 2: **berapa fair forward/futures price, dan mengapa?** McDonald membangun jawabannya dengan no-arbitrage reasoning. Pertama, chapter memperkenalkan **prepaid forward**, karena kontrak ini memisahkan masalah delivery dari financing. Untuk saham tanpa dividend, prepaid forward price sama dengan spot price. Jika saham membayar dividend, prepaid forward lebih murah daripada spot karena buyer yang menerima saham hanya pada maturity kehilangan dividend selama waiting period. Ordinary forward kemudian diperoleh dengan **menunda pembayaran prepaid forward sampai maturity**, sehingga forward price adalah future value dari prepaid forward price. Untuk continuous dividend yield $\delta$ dan continuously compounded risk-free rate $r$, hasil inti adalah
>
> $$
> F_{0,T}=S_0e^{(r-\delta)T}.
> $$
>
> Chapter lalu menunjukkan bahwa formula tersebut bukan forecast model, tetapi **no-arbitrage relation** yang dapat direplikasi dengan stock + borrowing/lending. Dari sini muncul cash-and-carry, reverse cash-and-carry, synthetic forwards, dan implied repo rate. Section 5.4 kemudian menjelaskan mengapa futures secara ekonomi sangat mirip forward tetapi secara institutional berbeda karena **margin, daily marking-to-market, maintenance margin, dan margin calls**. Untuk CF1, Sections 5.1–5.4 adalah **[CORE CF1]** dan merupakan source utama [[6.2 Forwards and Futures]].

---

# 1. Why This Chapter Exists

Chapter 2 sudah memberi mechanics forward:

- long forward wajib membeli pada maturity;
- short forward wajib menjual;
- standard forward tidak membutuhkan premium awal;
- long forward payoff:

$$
S_T-F_{0,T}.
$$

Tetapi Chapter 2 mengambil $F_{0,T}$ sebagai given.

Chapter 5 sekarang bertanya:

1. bagaimana menentukan $F_{0,T}$ dari spot price, interest rate, dan income underlying?
2. bagaimana dividend mengubah forward price?
3. apa relationship antara stock, forward, dan zero-coupon bond?
4. kapan mispricing menghasilkan arbitrage?
5. bagaimana futures secara institutional berbeda dari forwards?

McDonald tidak memulai dari expected return atau forecasting. Ia memulai dari:

> **Jika dua strategies menghasilkan future cash flow yang sama, law of one price mensyaratkan nilai sekarang yang sama.**

Ini adalah core no-arbitrage logic chapter.

---

# 2. CF1 Scope Map

| Textbook Section | CF1 Relevance | Main Learning Value |
|---|---|---|
| §5.1 | [CORE CF1] | setup financial forwards/futures dan pricing logic |
| §5.2 | [CORE CF1] | prepaid forward; no dividend, discrete dividend, continuous dividend |
| §5.3 | [CORE CF1] | ordinary forward price, cost of carry, forward premium, synthetic positions, cash-and-carry arbitrage |
| §5.4 | [CORE CF1] | futures mechanics: margin, open interest, marking-to-market, maintenance margin, forward-vs-futures distinction |
| Later Chapter 5 sections | [BEYOND CF1] | currency forwards, interest-rate/Eurodollar futures, dan applications lanjutan |

CF1 learning outcome yang langsung didukung:

> Menentukan *payoff*, *profit*, *forward price*, dan *prepaid forward price* pada saham tanpa dividend, dividend diskrit, dan continuous dividend, serta menjelaskan karakteristik forward dan futures.

Connected note:

- [[6.2 Forwards and Futures]]
- [[1.4 Accumulation and Present Value]]
- [[6.1 Options – Call and Put]]

---

# 3. Notation Used in Chapter 5

| Symbol | Meaning |
|---|---|
| $S_0$ | spot price underlying pada time 0 |
| $S_T$ | spot price pada maturity $T$ |
| $F^P_{0,T}$ | prepaid forward price pada time 0 untuk delivery di $T$ |
| $F_{0,T}$ | ordinary forward price agreed at time 0 for delivery at $T$ |
| $T$ | time to maturity, dalam years pada continuous-compounding formulas |
| $r$ | continuously compounded risk-free / financing rate appropriate to maturity $T$ |
| $\delta$ | continuous dividend yield |
| $D_i$ | discrete dividend payment |
| $t_i$ | time dividend $D_i$ dibayar |
| $P(0,T)$ | price at time 0 of zero-coupon bond paying 1 at time $T$ |

[IMPORTANT DISTINCTION]

Simbol $\delta$ di McDonald Chapter 5 berarti **continuous dividend yield**, bukan force of interest seperti pada interest theory.

---

# 4. §5.1 — Financial Forwards and Futures: The Pricing Problem

## 4.1 Forward Price Is Not an Arbitrary Forecast

Forward contract fixes today the future transaction price.

Long forward payoff at expiration:

$$
\boxed{
S_T-F_{0,T}
}
$$

Short forward payoff:

$$
\boxed{
F_{0,T}-S_T
}
$$

Karena standard forward memiliki zero initial premium, McDonald menanyakan:

> Harga delivery berapa yang membuat kedua pihak bersedia masuk kontrak dengan value awal zero?

Jawabannya ditentukan dengan replication/no-arbitrage, bukan dengan sekadar menebak $E[S_T]$.

---

## 4.2 Three Transactions to Separate

Chapter secara konseptual membedakan:

| Transaction | Payment | Delivery |
|---|---|---|
| Spot purchase | sekarang | sekarang |
| Prepaid forward | sekarang | maturity |
| Ordinary forward | maturity | maturity |

Urutan ini sangat penting.

McDonald sengaja memasukkan prepaid forward sebagai intermediate object karena:

> **Spot vs prepaid forward berbeda hanya karena income/benefits selama holding period.  
> Prepaid forward vs ordinary forward berbeda hanya karena timing pembayaran.**

Dengan memisahkan dua effects itu, pricing menjadi sederhana.

---

# 5. §5.2 — Prepaid Forward Contracts on Stock

## 5.1 Definition

A **prepaid forward** adalah kontrak di mana buyer:

- membayar sekarang;
- menerima underlying pada future date $T$.

Price dibayar sekarang disebut:

$$
F^P_{0,T}.
$$

Karena payment sudah dilakukan, tidak ada financing cost yang perlu ditambahkan sampai maturity.

---

## 5.2 No-Dividend Stock

Jika stock tidak membayar dividend sampai $T$, menerima stock sekarang atau menerima stock di $T$ setelah membayar sekarang tidak berbeda dalam cash income selama holding period.

Maka:

$$
\boxed{
F^P_{0,T}=S_0
}
$$

[ASSUMPTION]

Tidak ada dividend atau benefit of ownership lain yang relevan selama periode tersebut.

### Intuition

Jika prepaid forward lebih mahal dari spot:

- beli stock sekarang;
- jual overpriced prepaid forward equivalent.

Jika prepaid forward lebih murah:

- reverse strategy.

Law of one price menutup gap.

---

## 5.3 Discrete Known Dividends

Sekarang stock membayar known cash dividends sebelum maturity.

Jika buyer membeli stock sekarang, ia menerima dividend.

Jika buyer membeli prepaid forward, ia **tidak menerima stock sampai $T$**, sehingga tidak menerima dividend sebelum $T$.

Karena prepaid forward melewatkan dividend, nilainya harus lebih rendah daripada spot.

Jika dividends:

$$
D_1,D_2,\ldots,D_n
$$

dibayar pada:

$$
t_1,t_2,\ldots,t_n<T,
$$

maka:

$$
\boxed{
F^P_{0,T}
=
S_0-\sum_{i=1}^n PV_0(D_i)
}
$$

Dengan continuously compounded rate $r$:

$$
\boxed{
F^P_{0,T}
=
S_0-\sum_{i=1}^n D_i e^{-rt_i}
}
$$

jika appropriate discount rate $r$ sama untuk cash flows tersebut.

### Why Present Value Is Subtracted

Spot purchase dapat dipandang sebagai dua assets:

1. right to receive future stock at $T$;
2. right to receive all dividends before $T$.

Prepaid forward hanya memberikan komponen pertama.

Maka:

$$
\text{Spot}
=
\text{Prepaid Forward}
+
PV(\text{Dividends}).
$$

Rearrange:

$$
F^P_{0,T}
=
S_0-PV(\text{Dividends}).
$$

---

## 5.4 Timeline — Discrete Dividend

Suppose stock pays a dividend $D$ at $t_d<T$.

| Time | 0 | $t_d$ | $T$ |
|---:|---:|---:|---:|
| Buy stock | $-S_0$ | $+D$ | own stock |
| Prepaid forward | $-F^P_{0,T}$ | 0 | receive stock |

Untuk membuat stock purchase economically comparable dengan prepaid forward, remove the value of dividend stream from spot.

---

## 5.5 Worked Example — Discrete Dividend

Suppose:

$$
S_0=100,
$$

dividend:

$$
D=4
$$

pada:

$$
t=0.5,
$$

maturity:

$$
T=1,
$$

dan continuously compounded rate:

$$
r=5\%.
$$

Present value dividend:

$$
PV(D)
=
4e^{-0.05(0.5)}
\approx3.9012.
$$

Prepaid forward:

$$
F^P_{0,1}
=
100-3.9012
=
96.0988.
$$

Thus:

$$
\boxed{
F^P_{0,1}\approx96.10
}
$$

### Meaning

Prepaid forward lebih murah dari stock karena holder stock menerima dividend $4$, sedangkan prepaid forward holder tidak.

---

# 6. Continuous Dividend Yield

## 6.1 Dividend as Reinvestment in Additional Shares

Untuk stock index atau portfolio, dividend sering dimodelkan sebagai continuously paid yield $\delta$.

Jika satu unit stock/index direinvestasikan continuously pada dividend yield $\delta$, jumlah shares berkembang seperti:

$$
e^{\delta T}.
$$

Karena target prepaid forward adalah menerima **exactly one unit** pada $T$, kita cukup membeli sekarang:

$$
e^{-\delta T}
$$

units.

Biaya sekarang:

$$
S_0e^{-\delta T}.
$$

Therefore:

$$
\boxed{
F^P_{0,T}
=
S_0e^{-\delta T}
}
\tag{5.4}
$$

---

## 6.2 Textbook-Style Illustration

McDonald memberikan intuition dengan annual continuous dividend yield $3\%$ dan index price $125$.

Satu share berkembang menjadi:

$$
e^{0.03}
=
1.030455
$$

shares setelah reinvesting dividends selama satu tahun.

Agar tepat memiliki satu share di akhir satu tahun, investor hanya perlu membeli:

$$
e^{-0.03}
=
0.970446
$$

shares sekarang.

Prepaid forward value:

$$
125e^{-0.03}
=
121.306.
$$

### Lesson

Continuous dividend yield bertindak sebagai **holding benefit**.

Semakin besar $\delta$:

$$
F^P_{0,T}
$$

semakin rendah.

---

# 7. §5.3 — Forward Contracts on Stock

## 7.1 From Prepaid Forward to Ordinary Forward

Ordinary forward:

- payment = di maturity;
- delivery = di maturity.

Prepaid forward:

- payment = sekarang;
- delivery = di maturity.

Keduanya memberikan delivery underlying yang sama pada $T$.

Satu-satunya difference adalah timing pembayaran.

Maka ordinary forward price adalah future value prepaid forward price:

$$
\boxed{
F_{0,T}
=
FV\left(F^P_{0,T}\right)
}
\tag{5.5}
$$

Jika $r$ continuously compounded:

$$
\boxed{
F_{0,T}
=
F^P_{0,T}e^{rT}
}
$$

---

## 7.2 No-Dividend Forward Price

Jika:

$$
F^P_{0,T}=S_0,
$$

maka:

$$
\boxed{
F_{0,T}
=
S_0e^{rT}
}
$$

### Economic Meaning

Forward buyer tidak membayar $S_0$ sekarang.

Menunda pembayaran sampai $T$ berarti buyer secara ekonomi menikmati financing.

Karena itu future payment harus sebesar future value spot/prepaid cost.

---

## 7.3 Discrete Dividend Forward Price

Combine:

$$
F^P_{0,T}
=
S_0-\sum_iD_ie^{-rt_i}
$$

dengan:

$$
F_{0,T}
=
F^P_{0,T}e^{rT}.
$$

Maka:

$$
\boxed{
F_{0,T}
=
\left(
S_0-\sum_iD_ie^{-rt_i}
\right)e^{rT}
}
$$

Jika term structure berbeda per maturity, discount each dividend dan forward funding menggunakan appropriate maturity-specific zero-coupon factors, bukan satu $r$ secara membabi buta.

---

## 7.4 Continuous Dividend Forward Price

Dari:

$$
F^P_{0,T}
=
S_0e^{-\delta T}
$$

dan:

$$
F_{0,T}
=
e^{rT}F^P_{0,T},
$$

diperoleh:

$$
\boxed{
F_{0,T}
=
S_0e^{(r-\delta)T}
}
\tag{5.6}
$$

Ini adalah formula sentral Chapter 5 dan **[CORE CF1]**.

### Cost-of-Carry Interpretation

Net cost of carrying the stock:

$$
r-\delta.
$$

- $r$ = financing cost;
- $\delta$ = benefit of owning the stock while waiting.

Therefore:

> **Forward price = Spot × accumulated net cost of carry.**

---

# 8. Forward Price with Zero-Coupon Bond Notation

McDonald juga menulis relationship menggunakan zero-coupon bond price:

$$
P(0,T)=e^{-rT}.
$$

Because:

$$
F^P_{0,T}=S_0e^{-\delta T},
$$

then:

$$
\boxed{
F_{0,T}
=
\frac{S_0e^{-\delta T}}{P(0,T)}
}
$$

Ini penting karena:

- rate dapat berbeda menurut maturity;
- discount factor lebih fundamental daripada assuming single flat $r$.

[CF1 SUPPORTING CONTEXT]

Di CF1, jika rate quotation diberikan dalam basis lain, convert basis dengan benar sebelum menggunakan exponential formula.

---

# 9. Forward Premium

McDonald defines forward premium ratio:

$$
\boxed{
\text{Forward Premium}
=
\frac{F_{0,T}}{S_0}
}
\tag{5.7}
$$

Untuk annualized continuously compounded form:

$$
\boxed{
\text{Annualized Forward Premium}
=
\frac{1}{T}
\ln\left(\frac{F_{0,T}}{S_0}\right)
}
$$

Untuk continuous dividend case:

$$
F_{0,T}
=
S_0e^{(r-\delta)T},
$$

sehingga:

$$
\frac1T\ln\left(\frac{F_{0,T}}{S_0}\right)
=
r-\delta.
$$

Therefore:

$$
\boxed{
\text{Annualized Forward Premium}
=
r-\delta
}
$$

---

# 10. Fair Value of the Underlying

Kadang futures/forward market sedang trading sementara cash market underlying belum open.

Jika:

- $F_{0,T}$ observable;
- $r,\delta,T$ known/estimated;

formula forward dapat dibalik untuk infer implied spot price:

$$
F_{0,T}
=
S_0e^{(r-\delta)T}.
$$

So:

$$
\boxed{
S_0
=
F_{0,T}e^{-(r-\delta)T}
}
$$

McDonald menyebut implied underlying value ini sebagai **fair value**.

---

# 11. Does Forward Price Predict Future Spot Price?

## 11.1 Important Conceptual Distinction

McDonald explicitly warns against assuming:

$$
F_{0,T}
=
E[S_T].
$$

Forward price arises from **arbitrage pricing**, not necessarily unbiased forecasting.

If stock has positive risk premium, expected future stock price can exceed forward price.

Chapter expresses expected stock return conceptually as:

$$
\alpha
=
r
+
(\alpha-r),
$$

where:

- $r$ = compensation for time value;
- $\alpha-r$ = risk premium.

Stock investor provides capital now and bears risk.

Forward investor provides essentially no initial investment, but still obtains underlying price exposure.

Therefore expected forward gain can reflect risk premium, and forward price need not be an unbiased predictor of future spot.

[IMPORTANT DISTINCTION]

> **Forward pricing asks: “What price prevents arbitrage?”**  
> **Forecasting asks: “What future spot do we expect?”**  
> These are different questions.

---

# 12. Synthetic Forward

## 12.1 Replicating Long Forward with Stock + Borrowing

For continuous dividend yield $\delta$, buy a **tailed stock position**:

$$
e^{-\delta T}
$$

shares today.

Cost:

$$
S_0e^{-\delta T}.
$$

Because dividends are reinvested, this position grows to one share at time $T$.

Borrow the exact initial stock cost:

$$
S_0e^{-\delta T}.
$$

At maturity, loan repayment:

$$
S_0e^{(r-\delta)T}.
$$

Sell/retain stock worth $S_T$.

Net payoff:

$$
S_T-S_0e^{(r-\delta)T}.
$$

If fair forward price is:

$$
F_{0,T}=S_0e^{(r-\delta)T},
$$

this equals:

$$
\boxed{
S_T-F_{0,T}
}
$$

the long forward payoff.

---

## 12.2 Cash-Flow Table — Synthetic Long Forward

| Transaction | Time 0 | Time $T$ |
|---|---:|---:|
| Buy $e^{-\delta T}$ stock units | $-S_0e^{-\delta T}$ | $+S_T$ |
| Borrow $S_0e^{-\delta T}$ | $+S_0e^{-\delta T}$ | $-S_0e^{(r-\delta)T}$ |
| **Total** | **0** | **$S_T-S_0e^{(r-\delta)T}$** |

Thus:

$$
\boxed{
\text{Forward}
=
\text{Stock}
-
\text{Zero-Coupon Bond}
}
\tag{5.10}
$$

where “stock” means the appropriately tailed stock position.

---

# 13. Other Synthetic Equivalences

Rearrange:

$$
\text{Forward}
=
\text{Stock}
-
\text{Bond}.
$$

Then:

$$
\boxed{
\text{Stock}
=
\text{Forward}
+
\text{Bond}
}
$$

and:

$$
\boxed{
\text{Bond}
=
\text{Stock}
-
\text{Forward}
}
$$

These are payoff-equivalent portfolios.

All positions can be reversed to create synthetic shorts.

---

# 14. Implied Repo Rate

Suppose investor:

- buys the appropriately tailed stock;
- shorts a forward.

At maturity:

- stock is delivered into the forward;
- investor receives fixed forward price.

Thus uncertain $S_T$ cancels.

The resulting cash flow behaves like lending today and receiving a known amount later.

The rate earned on this synthetic borrowing/lending transaction is called the **implied repo rate**.

[CF1 SUPPORTING CONTEXT]

The exam-important lesson is not terminology alone, but that:

> **stock + opposite forward can eliminate market-price risk and create a risk-free-style cash flow.**

---

# 15. Cash-and-Carry Arbitrage

## 15.1 Forward Overpriced

Theoretical fair price:

$$
F^*_{0,T}
=
S_0e^{(r-\delta)T}.
$$

Suppose market forward:

$$
F^{mkt}_{0,T}
>
F^*_{0,T}.
$$

Then forward is overpriced.

Strategy:

1. borrow;
2. buy tailed stock position;
3. short forward at high market price.

At maturity:

- stock position delivers one unit;
- deliver it into short forward;
- receive $F^{mkt}_{0,T}$;
- repay borrowing $F^*_{0,T}$.

Risk-free profit:

$$
\boxed{
F^{mkt}_{0,T}
-
F^*_{0,T}
}
$$

per unit at $T$, ignoring transaction frictions.

This is **cash-and-carry arbitrage**.

---

## 15.2 Forward Underpriced

If:

$$
F^{mkt}_{0,T}
<
F^*_{0,T},
$$

use reverse cash-and-carry:

1. short the appropriate stock position;
2. invest/lend proceeds;
3. enter long forward at low market price.

At maturity, acquired stock from long forward is used to close short stock position.

Profit direction:

$$
\boxed{
F^*_{0,T}
-
F^{mkt}_{0,T}
}
$$

before frictions.

---

## 15.3 Why Borrowing/Lending Is Explicit

McDonald emphasizes that including borrowing/lending directly in the arbitrage portfolio automatically incorporates time value of money.

Without financing leg, one might compare:

- an outflow now;
- an inflow later;

and still need an additional PV/FV calculation.

With financing included, all net initial cash flows can be set to zero and the maturity payoff directly reveals arbitrage.

---

# 16. Market-Maker Hedging Logic

Suppose customer takes **long forward**.

Market-maker becomes short forward.

To eliminate exposure, market-maker creates synthetic long forward:

- buy tailed stock;
- borrow funding.

Short actual forward + long synthetic forward cancels underlying risk.

Similarly, if customer takes short forward, market-maker can hedge the resulting long forward by reversing the synthetic position.

This explains economically why forward pricing must line up with stock and financing markets.

---

# 17. Worked Example — No Dividend Forward

Suppose:

$$
S_0=500,
$$

$$
r=6\%,
$$

continuously compounded, and:

$$
T=0.75.
$$

Because no dividend:

$$
F^P_{0,T}=500.
$$

Forward:

$$
F_{0,T}
=
500e^{0.06(0.75)}
=
500e^{0.045}.
$$

Therefore:

$$
\boxed{
F_{0,T}\approx523.01
}
$$

### Check

Positive financing cost, zero holding benefit:

$$
r-\delta=6\%>0.
$$

Forward should exceed spot.

It does.

---

# 18. Worked Example — Continuous Dividend

Suppose:

$$
S_0=1{,}200,
$$

$$
r=5\%,
$$

$$
\delta=2\%,
$$

$$
T=1.5.
$$

Prepaid forward:

$$
F^P_{0,T}
=
1{,}200e^{-0.02(1.5)}
\approx1{,}164.53.
$$

Ordinary forward:

$$
F_{0,T}
=
1{,}200e^{(0.05-0.02)(1.5)}
$$

$$
=
1{,}200e^{0.045}
\approx1{,}255.23.
$$

Thus:

$$
\boxed{
F_{0,T}\approx1{,}255.23
}
$$

Net carry:

$$
r-\delta=3\%.
$$

---

# 19. Worked Example — Discrete Dividend

Using earlier data:

$$
S_0=100,\quad
D=4,\quad
t_D=0.5,\quad
T=1,\quad
r=5\%.
$$

Prepaid forward:

$$
F^P_{0,1}
=
100-4e^{-0.025}
\approx96.0988.
$$

Ordinary forward:

$$
F_{0,1}
=
96.0988e^{0.05}
\approx101.03.
$$

Compare no-dividend forward:

$$
100e^{0.05}\approx105.13.
$$

Dividend reduces forward price by the future-value-equivalent effect of the lost dividend.

---

# 20. Rate-Basis Discipline

The formulas:

$$
S_0e^{rT}
$$

and:

$$
S_0e^{(r-\delta)T}
$$

use McDonald's continuous-compounding convention.

If problem gives annual effective rate $i$, do **not** write:

$$
e^{iT}.
$$

Instead either convert:

$$
r=\ln(1+i)
$$

for one-year effective $i$,

or use appropriate discrete accumulation factor directly.

Example:

$$
F_{0,T}
=
S_0(1+i)^T
$$

for no-dividend stock under an annual effective rate framework when exponent interpretation is appropriate.

Core principle:

> **Use accumulation factor consistent with the quoted rate.**

---

# 21. Dividend Timing Discipline

For known discrete dividends:

$$
PV_0(D_i)
=
D_ie^{-rt_i}.
$$

[IMPORTANT DISTINCTION]

Do not discount all dividends with exponent $T$.

Each dividend has its own payment time.

Workflow:

1. identify each $t_i$;
2. discount each dividend to time 0;
3. subtract total dividend PV from $S_0$;
4. accumulate prepaid forward value to $T$.

---

# 22. §5.4 — Futures Contracts

## 22.1 Futures and Forwards Share the Same Core Obligation

Both contracts:

- create long and short positions;
- specify future transaction exposure;
- have no option-like right to walk away;
- are approximately zero-cost at inception in the basic setup.

But futures differ institutionally because gains and losses are settled periodically.

---

# 23. Futures Contract Specification

McDonald uses S&P 500 futures as principal example.

The contract specifies:

- underlying index;
- exchange;
- contract multiplier;
- expiration months;
- settlement method.

For index futures, settlement is typically cash settlement rather than physical delivery of hundreds of component stocks.

[TEXTBOOK CONTEXT]

Specific exchange names, multiplier values, and settlement conventions are historical textbook context and may change over time. Their conceptual role is more important than memorizing market-specific details for CF1.

---

# 24. Notional Value

If futures price is $F$ and contract multiplier is $M$:

$$
\boxed{
\text{Notional per Contract}
=
M F
}
$$

If investor takes $N$ contracts:

$$
\boxed{
\text{Total Notional}
=
NMF
}
$$

McDonald example:

- S&P futures price $=1100$;
- multiplier $=250$.

Per contract:

$$
250(1100)=275{,}000.
$$

Eight contracts:

$$
8(250)(1100)
=
2{,}200{,}000.
$$

---

# 25. Open Interest

For every futures buyer there is a seller.

**Open interest** is number of outstanding buyer-seller contract pairs.

It is not the same as cumulative trading volume.

[CF1 SUPPORTING CONTEXT]

Important mainly for understanding market mechanics, not forward pricing formula.

---

# 26. Margin Is Not a Premium

Both buyer and seller post a **performance bond**, called margin.

Purpose:

> protect against counterparty default.

[IMPORTANT DISTINCTION]

Margin is **not** an option premium.

- option premium = price paid to acquire asymmetric rights;
- futures margin = collateral/performance bond.

Thus futures contracts are still considered essentially costless at inception, apart from commissions/bid-ask spread, even though margin collateral must be posted.

---

# 27. Marking-to-Market

Futures gains/losses are settled periodically—typically daily.

If long futures price changes from $F_{old}$ to $F_{new}$:

$$
\boxed{
\text{MTM Gain/Loss}_{long}
=
M(F_{new}-F_{old})
}
$$

for one contract.

For $N$ contracts:

$$
\boxed{
N M(F_{new}-F_{old})
}
$$

Short position has opposite sign.

### Fundamental Sign Rule

- price rises → long gains;
- price falls → long loses;
- short opposite.

---

# 28. Textbook Margin Example

McDonald assumes:

- 8 long futures contracts;
- effective exposure multiplier total:

$$
8(250)=2000
$$

index units;
- futures price initially:

$$
1100;
$$

- initial margin:

$$
220{,}000.
$$

Suppose after one week price falls to:

$$
1027.99.
$$

Price change:

$$
1027.99-1100=-72.01.
$$

Mark-to-market loss:

$$
2000(-72.01)
=
-144{,}020.
$$

If continuously compounded margin account rate is $6\%$, after one week:

$$
220{,}000e^{0.06/52}-144{,}020
\approx76{,}233.99.
$$

This demonstrates leverage:

a relatively small percentage movement in futures price can produce a very large percentage movement in margin equity.

---

# 29. Maintenance Margin and Margin Call

Broker requires margin balance not fall below a minimum:

**maintenance margin**.

If balance falls below maintenance level:

- broker issues **margin call**;
- investor must post additional collateral.

If investor fails:

- broker can close/offset the position.

Economic purpose:

> preserve credit protection as futures market moves.

---

# 30. Offsetting a Futures Position

Because futures are standardized and exchange traded, investor can close exposure before maturity by entering opposite contract position.

Long $N$ contracts can be offset by short $N$ contracts with same underlying and maturity.

This realizes/locks accumulated gain/loss without waiting for final settlement.

---

# 31. Forward vs Futures — Settlement Timing

Forward:

- typically no interim settlement;
- payoff concentrated at maturity.

Futures:

- gains/losses settled repeatedly through marking-to-market.

This timing difference matters when interest rates are uncertain because intermediate cash flows can be reinvested or financed at changing rates.

---

# 32. When Forward and Futures Prices Are Equal

McDonald explains:

- if interest rates are deterministic, forward and futures prices can coincide under standard assumptions;
- with stochastic interest rates, marking-to-market can cause theoretical differences.

Why?

Suppose futures price tends to rise when interest rates are high.

A long futures receives gains at precisely times when reinvestment rates are high, which can make futures more valuable than equivalent forward.

If correlation is reversed, relation can reverse.

[CF1 SUPPORTING CONTEXT]

For short-lived contracts, empirical differences are often small.

Do not state:

> “forward price always equals futures price”

without assumptions.

---

# 33. Futures Price and Expected Spot Price

Just as with forwards, futures price should not automatically be interpreted as unbiased expected future spot.

Pricing is tied to carry/no-arbitrage.

Expected return and risk premium are separate concepts.

This is especially useful as a guard against conceptual distractors such as:

- “higher beta mechanically raises fair futures price”;
- “fair futures price equals expected future stock price.”

Those statements are not implied by Chapter 5 pricing formula.

---

# 34. Chapter 5 Core Formula Network

## Prepaid Forward — No Dividend

$$
\boxed{
F^P_{0,T}=S_0
}
$$

## Prepaid Forward — Known Discrete Dividends

$$
\boxed{
F^P_{0,T}
=
S_0-\sum_iPV(D_i)
}
$$

With continuous discounting:

$$
\boxed{
F^P_{0,T}
=
S_0-\sum_iD_ie^{-rt_i}
}
$$

## Prepaid Forward — Continuous Dividend Yield

$$
\boxed{
F^P_{0,T}
=
S_0e^{-\delta T}
}
$$

## Ordinary Forward from Prepaid Forward

$$
\boxed{
F_{0,T}
=
FV(F^P_{0,T})
}
$$

With continuous compounding:

$$
\boxed{
F_{0,T}
=
F^P_{0,T}e^{rT}
}
$$

## No-Dividend Forward

$$
\boxed{
F_{0,T}
=
S_0e^{rT}
}
$$

## Continuous-Dividend Forward

$$
\boxed{
F_{0,T}
=
S_0e^{(r-\delta)T}
}
$$

## Zero-Coupon Bond Form

$$
\boxed{
F_{0,T}
=
\frac{S_0e^{-\delta T}}{P(0,T)}
}
$$

## Forward Premium Ratio

$$
\boxed{
\frac{F_{0,T}}{S_0}
}
$$

## Annualized Continuous Forward Premium

$$
\boxed{
\frac1T
\ln\left(\frac{F_{0,T}}{S_0}\right)
}
$$

Continuous dividend case:

$$
\boxed{
r-\delta
}
$$

## Long Forward Payoff

$$
\boxed{
S_T-F_{0,T}
}
$$

## Long Futures MTM

$$
\boxed{
NM(F_{new}-F_{old})
}
$$

---

# 35. One Unified Pricing Framework

McDonald Chapter 5 dapat diringkas menjadi:

> **Forward price = spot adjusted for benefits/costs of holding, then financed to delivery date.**

For stock:

```text
Spot price
   ↓ subtract value of dividends missed
Prepaid forward
   ↓ accumulate financing cost
Ordinary forward price
```

Mathematically:

$$
S_0
\longrightarrow
F^P_{0,T}
\longrightarrow
F_{0,T}.
$$

This two-step framework is more robust than memorizing separate formulas.

---

# 36. CF1 Calculation Workflow

## Case A — No Dividend

1. identify $S_0$;
2. identify rate basis;
3. identify $T$;
4. compute:

$$
F^P_{0,T}=S_0;
$$

5. accumulate to $T$.

---

## Case B — Known Discrete Dividends

1. list all dividends and dates;
2. compute each PV;
3. subtract from spot:

$$
F^P=S_0-PV(D);
$$

4. accumulate prepaid forward to $T$.

---

## Case C — Continuous Dividend Yield

1. confirm $r$ and $\delta$ use compatible continuous basis;
2. compute:

$$
F^P=S_0e^{-\delta T};
$$

3. compute:

$$
F=S_0e^{(r-\delta)T}.
$$

---

## Case D — Arbitrage Question

1. calculate theoretical fair forward:

$$
F^*;
$$

2. compare with market price;
3. if:

$$
F^{mkt}>F^*,
$$

short forward + buy/finance stock;

4. if:

$$
F^{mkt}<F^*,
$$

long forward + short/invest stock proceeds;

5. verify:
   - initial net cash flow;
   - terminal deterministic profit.

---

## Case E — Futures Margin

1. identify long/short;
2. calculate price change:

$$
\Delta F;
$$

3. multiply by contract multiplier and number contracts;
4. add/subtract from margin balance;
5. include margin interest if problem explicitly specifies;
6. compare to maintenance margin.

---

# 37. Important Distinctions

> [!IMPORTANT] Spot vs Prepaid Forward
> Both pay now, but spot delivers now while prepaid forward delivers later.

> [!IMPORTANT] Prepaid Forward vs Ordinary Forward
> Both deliver later, but prepaid forward is paid now while ordinary forward is paid later.

> [!IMPORTANT] Forward Price vs Forward Value
> $F_{0,T}$ is contractual delivery price for a new fair contract at inception. The value of an existing forward after market conditions change is a different quantity.

> [!IMPORTANT] Forward Price vs Expected Future Spot
> Forward price is no-arbitrage price; expected future spot is a forecast/expectation.

> [!IMPORTANT] Dividend vs Financing Cost
> Interest raises forward price; dividend benefit lowers it.

> [!IMPORTANT] Margin vs Premium
> Margin is collateral. Premium is a purchase price for an option/right.

> [!IMPORTANT] Forward vs Futures
> Same broad economic exposure, but different settlement mechanics.

---

# 38. Sanity Checks

### No Dividend + Positive Rate

If:

$$
r>0,\quad\delta=0,
$$

then:

$$
F_{0,T}>S_0.
$$

### Positive Dividend

Holding stock has benefit, so relative to no-dividend case:

$$
F_{0,T}
$$

should be lower.

### If $\delta=r$

Then:

$$
F_{0,T}=S_0.
$$

### If $\delta>r$

Then:

$$
F_{0,T}<S_0.
$$

This is not inherently an error: holding benefits exceed financing cost.

### Discrete Dividend

Every positive known dividend before $T$ should lower prepaid forward price.

### Futures MTM

Long + short gains must sum to zero before transaction/default frictions.

---

# 39. Common CF1 Traps

## Trap 1 — Adding Dividend Instead of Subtracting

Wrong:

$$
F=S_0e^{(r+\delta)T}.
$$

Correct:

$$
F=S_0e^{(r-\delta)T}.
$$

Reason:

stock holder receives dividends; forward holder does not before delivery.

---

## Trap 2 — Discounting All Dividends to $T$

Prepaid forward is valued at time 0.

Use:

$$
D_ie^{-rt_i},
$$

not:

$$
D_ie^{-rT}
$$

unless $t_i=T$.

---

## Trap 3 — Annual Effective Rate Put Directly in $e^{rT}$

If rate is not continuously compounded, convert basis or use correct accumulation function.

---

## Trap 4 — Forward Price = Expected Future Price

No. Forward pricing uses no-arbitrage cost-of-carry.

---

## Trap 5 — Beta Enters Forward Pricing Formula

Not in Chapter 5's no-arbitrage formula:

$$
F=S_0e^{(r-\delta)T}.
$$

Beta belongs to expected-return/risk models, not this replication equation.

---

## Trap 6 — Margin Is Initial Cost of Futures

Margin is collateral and remains investor property subject to gains/losses and contract rules.

---

## Trap 7 — Futures Long Loses When Price Rises

Long gains when futures price rises.

---

## Trap 8 — Forward and Futures Always Exactly Equal

Only under appropriate assumptions. Stochastic rates + daily settlement can create differences.

---

## Trap 9 — Use Option Payoff Logic for Forward

Do not write:

$$
\max(0,S_T-F).
$$

Forward is an obligation:

$$
S_T-F.
$$

Negative payoff is possible.

---

# 40. Figures and Tables Worth Retaining Mentally

## Synthetic Forward Tables

McDonald’s cash-flow tables are important because they show replication explicitly:

- tailed stock + borrowing = long forward;
- forward + lending = synthetic stock;
- stock + short forward = synthetic zero-coupon bond.

The educational lesson is:

> uncertain terminal stock value can cancel when opposite positions are combined.

---

## S&P 500 Futures Contract Figure

The figure illustrates that futures contract is standardized by:

- underlying;
- multiplier;
- delivery months;
- settlement.

[TEXTBOOK CONTEXT] Market-specific values are not timeless; the structural idea is.

---

## Margin Table

The multi-week table demonstrates:

- repeated daily/weekly gains/losses;
- margin balance evolution;
- leverage;
- possibility of margin calls before final expiration.

This is why futures cannot be understood only by looking at final payoff.

---

# 41. Later Chapter 5 Material

[BEYOND CF1]

After the stock forward/futures material assigned by the CF1 syllabus, Chapter 5 continues into broader financial-forward applications such as currency and interest-rate futures.

McDonald shows the same cost-of-carry principle in foreign exchange:

- foreign interest acts economically like a dividend/holding benefit;
- covered interest arbitrage parallels stock cash-and-carry.

The chapter also discusses Eurodollar/interest-rate futures and more specialized institutional issues.

These sections are not expanded here because the CF1 syllabus specifies **Chapter 5.1–5.4** for Topik 6.

---

# 42. Chapter-End Mental Model

When you see any CF1 stock forward/futures problem, use:

```text
1. What contract?
   spot / prepaid forward / forward / futures

2. What does the underlying pay before T?
   none / known cash dividends / continuous dividend yield

3. What is the rate basis?
   effective / nominal / continuous

4. Price prepaid forward first
   S0 minus holding benefits

5. Finance prepaid price to T
   → ordinary forward price

6. If market price differs
   → cash-and-carry direction

7. If futures
   → apply multiplier + marking-to-market + margin mechanics
```

---

# 43. Must-Know Results for CF1

The minimum formula set that should be recallable instantly:

$$
\boxed{
F^P_{0,T}=S_0
}
\qquad\text{(no dividend)}
$$

$$
\boxed{
F^P_{0,T}
=
S_0-\sum_iPV(D_i)
}
\qquad\text{(known discrete dividends)}
$$

$$
\boxed{
F^P_{0,T}=S_0e^{-\delta T}
}
\qquad\text{(continuous dividend)}
$$

$$
\boxed{
F_{0,T}
=
FV(F^P_{0,T})
}
$$

$$
\boxed{
F_{0,T}=S_0e^{(r-\delta)T}
}
$$

$$
\boxed{
\text{Long Forward Payoff}
=
S_T-F_{0,T}
}
$$

and remember:

> **Forward pricing = no-arbitrage, not forecasting.**

> **Margin = collateral, not premium.**

> **Dividend lowers forward price.**

> **Interest raises forward price.**

---

# 44. Links to CF1 Knowledge Base

- Main syllabus note → [[6.2 Forwards and Futures]]
- Basic forward payoff → [[6.2 Forwards and Futures]]
- TVM/rate conversion → [[1.2 Effective, Nominal, and Force of Interest]]
- Accumulation / PV → [[1.4 Accumulation and Present Value]]
- Option contrast → [[6.1 Options – Call and Put]]
- Option strategies using forwards synthetically → [[6.3 Option Strategies]]

---

## Source Note

Condensed note ini mengikuti conceptual progression **McDonald et al., Derivatives Markets, Chapter 5 — Financial Forwards and Futures**. Sesuai CF1 syllabus, **Sections 5.1–5.4 dirangkum secara detail**: prepaid forwards, stock forward pricing, dividends, synthetic positions, cash-and-carry arbitrage, futures margin, marking-to-market, dan forward-versus-futures mechanics. Later chapter material hanya diberi context singkat dan ditandai `[BEYOND CF1]`.

#CF1 #CondensedBook #McDonald #Derivatives #Forwards #Futures
