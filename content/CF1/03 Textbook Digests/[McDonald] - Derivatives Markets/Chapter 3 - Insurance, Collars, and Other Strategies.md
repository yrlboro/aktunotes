---
type: "condensed-book"
exam: "CF1"
book: "Derivatives Markets"
author: "R. L. McDonald et al."
chapter: "3"
chapter_title: "Insurance, Collars, and Other Strategies"
cf1_topics: ["6.1", "6.3"]
cf1_relevance: "High"
source_scope: "McDonald Chapter 3"
compression_level: "Condensed"
tags: [CF1, CondensedBook, McDonald, Derivatives, OptionStrategies, PutCallParity, Collar, Spread, Straddle, Butterfly]
date_created: "2026-08-25"
status: "study-note"
---

# McDonald — Chapter 3: Insurance, Collars, and Other Strategies

> [!ABSTRACT] Chapter in One View
> Chapter 3 mengambil call, put, forward, stock, dan bond dari Chapter 2 lalu menunjukkan bahwa instrumen-instrumen tersebut dapat **digabungkan untuk membentuk payoff baru**. McDonald memulai dari konsep **insurance**: stock + put menciptakan downside floor, sementara posisi covered call menukar sebagian upside dengan premium. Dari equivalence payoff tersebut, chapter mengembangkan **synthetic forwards** dan **put-call parity**, salah satu hubungan no-arbitrage paling penting dalam options. Setelah itu, chapter membangun **spreads dan collars** untuk mengatur range payoff dengan biaya yang lebih rendah, lalu beralih dari directional bets ke **volatility strategies** seperti straddle, strangle, dan butterfly. Untuk CF1, seluruh Chapter 3 adalah referensi resmi, dengan emphasis terbesar pada option spreads, collar, straddle, strangle, butterfly, serta kemampuan membaca dan menggabungkan payoff legs.

## 1. Why This Chapter Exists

Chapter 2 memperkenalkan building blocks secara individual. Chapter 3 menjawab pertanyaan berikut:

> Jika payoff sederhana dapat ditambah dan dikurangi, payoff seperti apa yang dapat kita desain?

Prinsip dasarnya:

$$
\boxed{
\text{Portfolio Payoff}
=
\sum_j \text{Payoff}_j
}
$$

dan jika profit dinilai pada expiration:

$$
\boxed{
\text{Portfolio Profit}
=
\text{Portfolio Payoff}
-
\operatorname{FV}_T(\text{net initial outflow})
}
$$

Jika net premium merupakan inflow, future value-nya ditambahkan.

Karena option payoff piecewise linear, portfolio options juga menghasilkan piecewise-linear payoff dengan kink pada strike-strike yang digunakan.

---

# 2. Chapter Map

- **3.1 Insurance and Equivalent Positions** — insured stock, covered calls, insured short positions, covered puts.
- **3.2 Put-Call Parity** — synthetic forwards, parity equation, equivalent positions, no-arbitrage logic.
- **3.3 Spreads and Collars** — bull spread, bear spread, box spread, ratio spread, collars, zero-cost collars.
- **3.4 Speculating on Volatility** — straddle, strangle, butterfly, volatility-oriented payoff structures.
- **Chapter summary** — visual comparison berbagai strategies dan mapping antara price view dan volatility view.

| Section | CF1 Relevance | Connected Topic |
|---|---|---|
| 3.1 | [CF1 SUPPORTING CONTEXT] / concept foundation | [[6.1 Options – Call and Put]] |
| 3.2 | [CF1 SUPPORTING CONTEXT] penting untuk no-arbitrage reasoning | [[6.3 Option Strategies]] |
| 3.3 | [CORE CF1] | [[6.3 Option Strategies]] |
| 3.4 | [CORE CF1] | [[6.3 Option Strategies]] |
| Box spreads/tax applications | [BEYOND CF1] kecuali conceptual bridge | — |

---

# 3. Section 3.1 — Insurance and Equivalent Positions

## 3.1 Insuring a Long Stock Position

Suppose investor owns stock/index and membeli put pada strike $K$.

Portfolio:

$$
S + P(K).
$$

Terminal payoff:

$$
S_T+\max(0,K-S_T).
$$

Piecewise:

$$
=
\begin{cases}
K, & S_T<K,\\
S_T, & S_T\ge K.
\end{cases}
$$

Jadi payoff dapat ditulis:

$$
\boxed{
\max(S_T,K)
}
$$

### Economic Meaning

Purchased put menciptakan **floor**.

- jika stock jatuh di bawah $K$, put menutup penurunan sehingga terminal gross payoff tidak turun di bawah $K$;
- jika stock naik, put dibiarkan expire dan investor tetap menikmati upside.

Inilah alasan McDonald menyebut put sebagai insurance.

[IMPORTANT DISTINCTION] Floor pada payoff bukan berarti profit tidak bisa negatif. Premium put tetap merupakan cost.

---

## 3.2 Stock + Put vs Bond + Call

McDonald menunjukkan bahwa insured stock memiliki payoff yang sama dengan:

- zero-coupon bond yang membayar $K$ pada expiration;
- long call dengan strike $K$.

Karena:

$$
K+\max(0,S_T-K)
=
\max(S_T,K).
$$

Jadi:

$$
\boxed{
S+P
\equiv
\text{Bond}(K)+C
}
$$

dalam payoff.

Jika initial prices juga konsisten, profit profiles sama.

Ini menjadi salah satu langkah menuju put-call parity.

---

## 3.3 Covered Written Call

Portfolio:

- long stock;
- short call.

Payoff:

$$
S_T-\max(0,S_T-K).
$$

Piecewise:

$$
=
\begin{cases}
S_T, & S_T\le K,\\
K, & S_T>K.
\end{cases}
$$

atau:

$$
\boxed{
\min(S_T,K)
}
$$

Economic meaning:

- investor menerima call premium;
- upside di atas $K$ dikorbankan;
- downside stock tetap ada.

Covered call bukan free income: premium diterima sebagai kompensasi karena investor menyerahkan upside.

---

## 3.4 Insured Short and Covered Written Put

Chapter juga menampilkan mirror-image positions:

### Short stock + long call

Call membatasi kerugian short stock jika harga naik sangat tinggi.

### Short stock + short put

Gabungan menghasilkan capped behavior yang ekuivalen secara shape dengan written call plus fixed financing component.

McDonald merangkum equivalent positions dalam table chapter summary.

---

# 4. Section 3.2 — Put-Call Parity

## 4.1 Synthetic Forward

Beli call dan jual put dengan:

- same underlying;
- same strike $K$;
- same expiration $T$.

Portfolio payoff:

$$
\max(0,S_T-K)-\max(0,K-S_T).
$$

Untuk semua $S_T$:

$$
\boxed{
S_T-K
}
$$

Karena:

- jika $S_T>K$, call exercised;
- jika $S_T<K$, written put assigned;
- dalam kedua kasus investor effectively membeli underlying seharga $K$.

Jadi:

$$
\boxed{
C(K,T)-P(K,T)
}
$$

menciptakan **synthetic long forward** dengan delivery price $K$.

---

## 4.2 Why Net Premium Depends on $K$

Actual forward price adalah $F_{0,T}$ dan standard forward memiliki zero premium.

Synthetic forward membeli asset di $K$.

Jika:

$$
K<F_{0,T},
$$

synthetic forward memberi bargain purchase price, sehingga net option premium harus positif.

Jika:

$$
K>F_{0,T},
$$

future purchase price terlalu tinggi, sehingga investor seharusnya menerima compensation initially.

Jika:

$$
K=F_{0,T},
$$

net option premium harus zero:

$$
C=P.
$$

---

## 4.3 Put-Call Parity Equation

McDonald menulis:

$$
PV(F_{0,T})
=
[C(K,T)-P(K,T)]
+
PV(K).
$$

Maka:

$$
\boxed{
C(K,T)-P(K,T)
=
PV(F_{0,T}-K)
}
$$

Ini adalah put-call parity dalam notation chapter.

Jika underlying price today sama dengan present value forward price di no-dividend setup:

$$
S_0=PV(F_{0,T}),
$$

maka bentuk familiar-nya:

$$
\boxed{
C-P
=
S_0-PV(K)
}
$$

[IMPORTANT DISTINCTION] Parity adalah relation antara **premiums sekarang**, bukan terminal payoff saja.

---

## 4.4 Textbook Example — S&R 1000 Strike

Data:

- 6-month forward price = $1020$;
- strike $K=1000$;
- 6-month effective interest = $2\%$;
- call premium = $93.809$;
- put premium = $74.201$.

Net option premium:

$$
93.809-74.201=19.608\approx 19.61.
$$

Bargain element pada expiration:

$$
1020-1000=20.
$$

Present value:

$$
\frac{20}{1.02}=19.61.
$$

Sama dengan premium difference, sebagaimana parity mensyaratkan.

---

## 4.5 Equivalent Positions

Parity dapat di-rearrange untuk membentuk synthetic positions.

Contoh:

$$
S+P
\equiv
C+\text{Bond}(K).
$$

dan:

$$
S-C
\equiv
\text{Bond}(K)-P.
$$

Ini menjelaskan mengapa:

- insured stock setara dengan call + bond;
- covered written call setara dengan short put + bond component.

### No-Arbitrage Meaning

Jika dua portfolios mempunyai future payoff yang sama tetapi harga sekarang berbeda, investor dapat:

- membeli portfolio yang lebih murah;
- menjual portfolio yang lebih mahal;

untuk mendapatkan arbitrage.

Jadi payoff equivalence memaksa price relation.

---

# 5. Section 3.3 — Spreads and Collars

## 5.1 Big Idea of a Spread

Spread menggabungkan options sejenis dengan strike berbeda.

Tujuannya bukan selalu untuk “memaksimalkan upside”, melainkan membentuk trade-off antara:

- initial premium;
- downside;
- upside;
- region harga yang diinginkan.

Rule:

> Menjual option lain dapat mengurangi cost long option, tetapi sebagai gantinya sebagian payoff dikorbankan.

---

## 5.2 Bull Spread Using Calls

Ambil:

$$
K_1<K_2.
$$

Construct:

- buy call strike $K_1$;
- sell call strike $K_2$.

Payoff:

$$
\boxed{
B_T
=
\max(0,S_T-K_1)
-
\max(0,S_T-K_2)
}
$$

Piecewise:

$$
B_T=
\begin{cases}
0, & S_T\le K_1,\\
S_T-K_1, & K_1<S_T<K_2,\\
K_2-K_1, & S_T\ge K_2.
\end{cases}
$$

### Interpretation

- bearish/flat region: payoff 0;
- moderate rise: payoff naik satu-for-satu;
- large rise: payoff capped.

Maximum payoff:

$$
\boxed{
K_2-K_1
}
$$

Economic view:

> bullish, tetapi tidak membutuhkan unlimited upside.

Selling the higher-strike call mengurangi premium cost dan menukar upside di atas $K_2$ dengan financing.

---

## 5.3 Textbook Example — 40–45 Bull Spread

McDonald menggunakan options strike $40$ dan $45$.

Construct:

- long 40-call;
- short 45-call.

Gross payoff:

- $0$ below $40$;
- rises from $0$ to $5$ between $40$ and $45$;
- capped at $5$ above $45$.

Profit differs from payoff by future value net premium.

Figure 3.7 memperlihatkan capped-upside shape yang khas.

---

## 5.4 Bear Spread

Bear spread adalah opposite position dari bull spread.

Dengan calls:

- sell lower-strike call;
- buy higher-strike call.

Payoff/profit graph adalah negative dari corresponding bull spread.

Economic view:

> moderate bearish view dengan bounded outcome.

---

## 5.5 Box Spread

[BEYOND CF1 / SUPPORTING]

Box spread menggabungkan synthetic long forward pada satu strike dan synthetic short forward pada strike lain sehingga future payoff fixed.

McDonald menunjukkan bahwa box spread secara ekonomi menyerupai borrowing/lending instrument.

Konsep ini membantu memahami no-arbitrage, tetapi bukan strategi inti yang disebut eksplisit dalam learning outcome CF1.

---

## 5.6 Ratio Spread

Ratio spread membeli $m$ options pada satu strike dan menjual $n$ options pada strike berbeda, dengan:

- same type;
- same underlying;
- same expiration.

Contoh yang ditonjolkan chapter:

- buy 1 lower-strike call;
- sell 2 higher-strike calls.

General form:

$$
mC(K_1)-nC(K_2).
$$

Karena quantities tidak sama, tail slope tidak harus nol.

### Why Ratio Matters

Dengan memilih ratio tertentu, premium dapat dibuat sangat kecil atau bahkan zero.

Trade-off:

> “insurance” yang murah atau zero-cost dapat memiliki adverse tail payoff ketika protection benar-benar dibutuhkan.

[IMPORTANT DISTINCTION] Jangan memperlakukan ratio spread sebagai ordinary 1:1 spread. Multiplicity mengubah slope terminal.

---

# 6. Collars

## 6.1 Definition

McDonald mendefinisikan collar sebagai:

- buy put;
- sell call dengan strike lebih tinggi;
- same underlying;
- same expiration.

Misalkan:

$$
K_P<K_C.
$$

Collar payoff:

$$
\boxed{
P(K_P)-C(K_C)
}
$$

Jika ditambahkan ke stock, posisi menjadi **collared stock**:

$$
S+P(K_P)-C(K_C).
$$

---

## 6.2 Collared Stock Payoff

Terminal payoff:

$$
S_T+\max(0,K_P-S_T)-\max(0,S_T-K_C).
$$

Piecewise:

$$
=
\begin{cases}
K_P, & S_T<K_P,\\
S_T, & K_P\le S_T\le K_C,\\
K_C, & S_T>K_C.
\end{cases}
$$

Jadi:

- downside floor = $K_P$;
- middle region mengikuti stock;
- upside cap = $K_C$.

Ini adalah insurance yang dibiayai sebagian dengan menjual upside.

---

## 6.3 Collar Width

McDonald mendefinisikan:

$$
\boxed{
\text{Collar Width}
=
K_C-K_P.
}
$$

Semakin jauh strikes, semakin luas range stock movement yang masih diikuti.

---

## 6.4 Zero-Cost Collar

Jika call premium yang diterima sama dengan put premium yang dibayar:

$$
\boxed{
P_0=C_0
}
$$

net initial option premium:

$$
0.
$$

Maka investor memiliki downside protection tanpa net upfront option premium, tetapi harus menyerahkan upside di atas call strike.

[IMPORTANT DISTINCTION]

> Zero-cost tidak berarti zero economic cost.

Economic cost-nya adalah upside yang dikorbankan.

---

# 7. Section 3.4 — Speculating on Volatility

McDonald membedakan dua jenis view:

1. **directional view** — harga naik atau turun;
2. **volatility view** — besar pergerakan, tanpa harus mengetahui arahnya.

Call/put tunggal banyak membawa directional exposure.

Straddle dan strangle dirancang untuk memperoleh benefit dari **large moves** ke arah mana pun.

Butterfly merupakan kebalikannya: lebih sesuai ketika investor mengharapkan harga berakhir dekat region tertentu.

---

# 8. Straddle

## 8.1 Long Straddle

Construct:

- buy call strike $K$;
- buy put strike $K$;
- same expiration.

Payoff:

$$
\boxed{
\max(0,S_T-K)+\max(0,K-S_T)
}
$$

yang menyederhana menjadi:

$$
\boxed{
|S_T-K|
}
$$

### Shape

- minimum payoff di $S_T=K$;
- payoff meningkat jika harga bergerak jauh ke bawah atau ke atas;
- V-shaped payoff.

### Economic View

Long straddle:

> view bahwa underlying akan bergerak **besar**, tanpa conviction arah.

Kerugian maksimum profit terjadi sekitar strike jika pergerakan terlalu kecil karena kedua premiums dibayar.

---

## 8.2 Written Straddle

Sell call + sell put pada same strike.

Payoff:

$$
-|S_T-K|.
$$

Writer memperoleh premium jika stock tidak bergerak terlalu jauh, tetapi menghadapi large tail losses.

McDonald menempatkan written straddle sebagai low-volatility view.

---

# 9. Strangle

## 9.1 Construction

Long strangle:

- buy put dengan lower strike $K_P$;
- buy call dengan higher strike $K_C$;
- $K_P<K_C$.

Payoff:

$$
\boxed{
\max(0,K_P-S_T)
+
\max(0,S_T-K_C)
}
$$

Piecewise:

$$
=
\begin{cases}
K_P-S_T, & S_T<K_P,\\
0, & K_P\le S_T\le K_C,\\
S_T-K_C, & S_T>K_C.
\end{cases}
$$

### Economic View

Strangle mirip straddle tetapi:

- options lebih OTM;
- initial premium umumnya lebih rendah;
- underlying harus bergerak lebih jauh sebelum payoff menjadi positif.

---

## 9.2 Straddle vs Strangle

| Feature | Straddle | Strangle |
|---|---|---|
| Strikes | same $K$ | $K_P<K_C$ |
| Initial premium | lebih tinggi | lebih rendah |
| Zero-payoff region | satu titik sekitar $K$ | interval $[K_P,K_C]$ |
| Move needed | lebih kecil | lebih besar |
| View | high volatility | very large move |

---

# 10. Butterfly Spread

## 10.1 Intuition

McDonald menjelaskan butterfly sebagai payoff yang cocok ketika investor memperkirakan harga akan berakhir dekat middle region tetapi ingin tail risk dibatasi.

Salah satu construction dengan calls:

- buy 1 call at $K_1$;
- sell 2 calls at $K_2$;
- buy 1 call at $K_3$;

dengan:

$$
K_1<K_2<K_3.
$$

Untuk symmetric butterfly:

$$
K_2-K_1
=
K_3-K_2.
$$

---

## 10.2 Payoff

$$
\boxed{
B_T
=
\max(0,S_T-K_1)
-
2\max(0,S_T-K_2)
+
\max(0,S_T-K_3)
}
$$

Untuk equal-width strikes:

$$
B_T=
\begin{cases}
0, & S_T\le K_1,\\
S_T-K_1, & K_1<S_T\le K_2,\\
K_3-S_T, & K_2<S_T<K_3,\\
0, & S_T\ge K_3.
\end{cases}
$$

Maximum payoff di:

$$
S_T=K_2.
$$

Maximum payoff:

$$
\boxed{
K_2-K_1
=
K_3-K_2
}
$$

---

## 10.3 Butterfly as Combined Spreads

Butterfly dapat dibangun sebagai:

- bull spread pada $K_1$–$K_2$;
- bear spread pada $K_2$–$K_3$.

Karena middle strike muncul di kedua spreads, coefficient menjadi $-2$.

Mental shortcut yang sah:

> **Butterfly calls = $+1,-2,+1$ pada strikes ascending.**

---

## 10.4 Volatility Interpretation

Butterfly:

- payoff tinggi jika $S_T$ dekat middle strike;
- payoff rendah/zero di tails;
- tail losses pada profit dibatasi oleh initial premium structure.

McDonald membandingkannya dengan written straddle yang juga low-volatility view tetapi memiliki lebih severe tail risk.

---

# 11. Portfolio Profit and Net Premium

Untuk multi-leg strategy, jangan menghitung premium per leg secara terpisah di akhir tanpa sign discipline.

Define net initial outflow:

$$
Q_0
=
\sum \text{premiums paid}
-
\sum \text{premiums received}.
$$

Kemudian:

$$
\boxed{
\Pi_T
=
\text{Portfolio Payoff}
-
\operatorname{FV}_T(Q_0)
}
$$

Jika:

$$
Q_0<0,
$$

portfolio menghasilkan initial net inflow sehingga accumulated inflow meningkatkan profit at expiration.

---

# 12. Break-Even Logic

## Bull Spread

Break-even biasanya berada pada active rising region:

$$
S_T
=
K_1
+
\operatorname{FV}_T(\text{net premium}).
$$

Tetapi selalu verify bahwa result memang berada antara $K_1$ dan $K_2$.

## Long Straddle

Jika future value total premiums = $Q_T$:

Lower BE:

$$
\boxed{
K-Q_T
}
$$

Upper BE:

$$
\boxed{
K+Q_T
}
$$

## Long Strangle

Jika future value net premium = $Q_T$:

Lower BE:

$$
\boxed{
K_P-Q_T
}
$$

Upper BE:

$$
\boxed{
K_C+Q_T
}
$$

[IMPORTANT DISTINCTION] Kink points dan break-even points bukan hal yang sama ketika premium tidak nol.

---

# 13. Direction vs Volatility Map

McDonald merangkum strategy selection secara konseptual.

| Market View | Typical Position |
|---|---|
| Price expected to rise | long stock, long call, bull spread |
| Price expected to fall | short stock, long put, bear spread |
| Large move, direction uncertain | long straddle / long strangle |
| Low volatility / price stays near middle | butterfly atau written straddle, dengan risk profile berbeda |
| Need downside floor and accept capped upside | collared stock |

[CF1 SUPPORTING CONTEXT] Table ini bukan aturan universal “best trade”; ia memetakan direction/volatility view terhadap payoff shape.

---

# 14. Worked Example — 40–45 Bull Spread

Suppose:

- buy 40-call;
- sell 45-call.

Payoff:

### If $S_T=38$

$$
0-0=0.
$$

### If $S_T=43$

$$
(43-40)-0=3.
$$

### If $S_T=50$

$$
(50-40)-(50-45)=5.
$$

Jadi payoff capped:

$$
\boxed{5}.
$$

Jika future value net premium adalah $1.85$:

$$
\Pi_T=
\begin{cases}
-1.85, & S_T\le 40,\\
S_T-40-1.85, & 40<S_T<45,\\
5-1.85=3.15, & S_T\ge45.
\end{cases}
$$

Break-even:

$$
40+1.85=41.85.
$$

---

# 15. Worked Example — Zero-Cost Collar on Stock

Suppose stock is held and investor creates collar:

- long put strike $40$;
- short call strike $45$;
- premiums offset exactly.

Terminal option payoff:

$$
\max(0,40-S_T)-\max(0,S_T-45).
$$

Add stock:

$$
S_T+\max(0,40-S_T)-\max(0,S_T-45).
$$

Therefore:

$$
=
\begin{cases}
40, & S_T<40,\\
S_T, & 40\le S_T\le45,\\
45, & S_T>45.
\end{cases}
$$

Interpretation:

- floor $40$;
- stock participation between $40$ and $45$;
- cap $45$;
- no net option premium at inception.

---

# 16. Worked Example — Long Straddle

Strike:

$$
K=50.
$$

Suppose total accumulated premium at expiration:

$$
Q_T=8.
$$

Profit:

$$
|S_T-50|-8.
$$

Break-even:

$$
42
\quad\text{and}\quad
58.
$$

If:

$$
S_T=70,
$$

profit:

$$
20-8=12.
$$

If:

$$
S_T=50,
$$

profit:

$$
-8.
$$

Lesson:

> Strategy needs sufficiently large movement; direction itself is secondary.

---

# 17. Worked Example — Symmetric Butterfly

Use strikes:

$$
40,\ 45,\ 50.
$$

Position:

$$
+C(40)-2C(45)+C(50).
$$

At:

### $S_T=42$

$$
2-0+0=2.
$$

### $S_T=45$

$$
5-0+0=5.
$$

### $S_T=48$

$$
8-2(3)+0=2.
$$

### $S_T=55$

$$
15-2(10)+5=0.
$$

Peak:

$$
5
=
45-40.
$$

---

# 18. Common Exam Traps

### Trap 1 — Lupa multiplicity

Untuk butterfly:

$$
+1,-2,+1,
$$

bukan $+1,-1,+1$.

### Trap 2 — Bull spread unlimited upside

Salah. Long lower-strike call + short higher-strike call menghasilkan capped payoff.

### Trap 3 — Collar = stock + put

Itu insured stock. **Collar** sendiri adalah put purchase + call sale; **collared stock** menambahkan stock.

### Trap 4 — Zero-cost = no risk

Salah. Zero-cost hanya berarti net initial option premium nol.

### Trap 5 — Straddle memilih direction

Tidak. Long straddle primarily memilih **magnitude** of movement.

### Trap 6 — Strangle sama dengan straddle

Tidak. Strangle menggunakan two different strikes dan memiliki wider central zero-payoff region.

### Trap 7 — Butterfly adalah high-volatility strategy

Salah untuk long standard butterfly. Payoff tertinggi terjadi dekat middle strike.

### Trap 8 — Premium dikurangi pada time 0 ketika profit dinilai di $T$

Harus samakan valuation date.

### Trap 9 — Put-call parity dipakai tanpa matching contract terms

Parity membutuhkan same underlying, same strike, dan same expiration untuk options yang dibandingkan.

### Trap 10 — Synthetic forward dianggap standard zero-premium forward

Jika $K\neq F_{0,T}$, synthetic position dapat mempunyai nonzero net premium dan disebut off-market forward interpretation.

---

# 19. Formula Map

## Put-Call Parity

$$
\boxed{
C(K,T)-P(K,T)=PV(F_{0,T}-K)
}
$$

## Bull Spread

$$
\boxed{
C(K_1)-C(K_2),\qquad K_1<K_2
}
$$

## Collar

$$
\boxed{
P(K_P)-C(K_C),\qquad K_P<K_C
}
$$

## Collared Stock

$$
\boxed{
S+P(K_P)-C(K_C)
}
$$

## Long Straddle

$$
\boxed{
C(K)+P(K)
}
$$

Payoff:

$$
\boxed{
|S_T-K|
}
$$

## Long Strangle

$$
\boxed{
P(K_P)+C(K_C),\qquad K_P<K_C
}
$$

## Symmetric Butterfly

$$
\boxed{
C(K_1)-2C(K_2)+C(K_3)
}
$$

with:

$$
K_2-K_1=K_3-K_2.
$$

---

# 20. Shape Recognition

| Strategy | Shape | Main Economic Idea |
|---|---|---|
| Bull spread | rises then caps | moderate bullish |
| Bear spread | falls/opposite bull | moderate bearish |
| Collared stock | floor–linear–cap | downside protection funded by capped upside |
| Long straddle | V | large movement |
| Long strangle | wide V with flat middle | very large movement, cheaper premium |
| Long butterfly | tent | price near middle / low volatility |
| 2:1 ratio spread | rise then adverse tail | cheap/zero-cost directional insurance trade-off |

---

# 21. Figure 3.16 — Chapter Summary Mental Image

McDonald merangkum profit diagrams untuk:

- bull spread;
- collar;
- straddle;
- strangle;
- butterfly;
- 2:1 ratio spread.

Yang perlu dilihat bukan sekadar nama strategy, tetapi:

1. slope per region;
2. lokasi kink;
3. apakah tails capped atau unbounded;
4. apakah central region flat;
5. apakah strategy directional atau volatility-based.

---

# 22. Beyond CF1 / Compressed Material

[BEYOND CF1] Detailed tax applications, historical uses of box spreads, practitioner trading references, dan later-chapter discussions of American-option parity tidak dirangkum lebih lanjut.

Box spread dipertahankan hanya sebagai conceptual illustration bahwa option combinations dapat mereplikasi fixed cash flow.

---

# 23. Chapter-End Mental Checklist

Saat menerima soal strategy:

1. Tulis semua legs dengan sign:
   - long $=+$;
   - short $=-$.
2. Urutkan strikes.
3. Tulis payoff setiap leg.
4. Tentukan kink points.
5. Bagi $S_T$ menjadi regions.
6. Jumlahkan payoff region-by-region.
7. Hitung net initial premium.
8. Accumulate/discount premium ke valuation date yang sesuai.
9. Dapatkan profit.
10. Interpretasikan:
   - bullish/bearish?
   - high/low volatility?
   - floor?
   - cap?
   - bounded/unbounded tail?
11. Lakukan sanity check terhadap graph shape.

---

# 24. Link to CF1 Notes

- Call/put building blocks → [[6.1 Options – Call and Put]]
- Forward mechanics → [[6.2 Forwards and Futures]]
- Strategy synthesis → [[6.3 Option Strategies]]
- Time value of premiums → [[1.4 Accumulation and Present Value]]

---

## Source Note

Condensed note ini mengikuti struktur dan conceptual progression **McDonald et al., Derivatives Markets, Chapter 3 — Insurance, Collars, and Other Strategies**. Put-call parity dan equivalent positions dipertahankan sebagai conceptual bridge, sedangkan emphasis terbesar diberikan pada spreads, collars, straddles, strangles, ratio spreads, dan butterflies sesuai learning outcomes CF1.

#CF1 #CondensedBook #McDonald #Derivatives #OptionStrategies
