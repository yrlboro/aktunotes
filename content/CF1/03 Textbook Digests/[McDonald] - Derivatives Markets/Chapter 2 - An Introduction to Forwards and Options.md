---
type: "condensed-book"
exam: "CF1"
book: "Derivatives Markets"
author: "R. L. McDonald et al."
chapter: "2"
chapter_title: "An Introduction to Forwards and Options"
cf1_topics: ["6.1", "6.2"]
cf1_relevance: "High"
source_scope: "McDonald Chapter 2; CF1 core scope is Sections 2.1–2.3"
compression_level: "Condensed"
tags: [CF1, CondensedBook, McDonald, Derivatives, Forward, Call, Put]
date_created: "2026-08-25"
status: "study-note"
---

# McDonald — Chapter 2: An Introduction to Forwards and Options

> [!ABSTRACT] Chapter in One View
> Chapter 2 memperkenalkan tiga building blocks paling dasar dalam derivatives: **forward contract, call option, dan put option**. McDonald membangun semuanya melalui satu bahasa analisis yang konsisten: **payoff** pada expiration dan **profit** setelah memperhitungkan initial investment/premium beserta time value of money. Forward memberi **kewajiban** untuk bertransaksi di masa depan, sedangkan option memberi **hak** kepada buyer sehingga payoff holder terpotong pada nol. Perbedaan inilah yang menjelaskan mengapa forward umumnya tidak membutuhkan premium awal, sementara option buyer membayar premium kepada writer. Chapter juga menunjukkan bagaimana long/short positions saling menjadi mirror image, bagaimana funded dan unfunded positions dibandingkan secara fair, serta bagaimana payoff/profit diagrams merangkum risk structure secara visual. Untuk CF1, Sections 2.1–2.3 adalah **[CORE CF1]** dan menjadi fondasi langsung bagi [[6.1 Options – Call and Put]] dan [[6.2 Forwards and Futures]].

## 1. Why This Chapter Exists

Sebelum membahas pricing derivatives secara lebih formal, McDonald terlebih dahulu memastikan pembaca memahami **apa kontraknya**, **siapa memiliki hak/kewajiban**, **kapan cash flow terjadi**, dan **bagaimana untung-rugi berubah terhadap harga underlying**.

Urutan chapter sangat deliberate:

1. mulai dari forward karena bentuk payoff-nya linear dan kedua pihak sama-sama terikat;
2. modifikasi forward menjadi call dengan memberi buyer hak untuk “walk away”;
3. perkenalkan put sebagai hak menjual;
4. gunakan payoff/profit diagrams untuk menunjukkan bagaimana bentuk risiko berubah.

Mental model utamanya:

> **Contract terms → terminal payoff → initial cost → profit → graph → economic interpretation.**

## 2. Chapter Map

- **2.1 Forward Contracts** — definisi, long/short, payoff, funded vs unfunded comparison, payoff vs profit, zero-coupon bond interpretation, cash settlement, credit risk.
- **2.2 Call Options** — call sebagai hak membeli, strike, exercise, expiration, exercise style, long/short call payoff dan profit.
- **2.3 Put Options** — put sebagai hak menjual, long/short put payoff dan profit, hubungan intuitif dengan insurance.
- **Chapter summary / supporting material** — merangkum payoff shapes, maximum gain/loss, serta terminology.
- **Appendix / institutional discussion** — beberapa detail market practice, margin, tax, dan transaksi option berada di luar kebutuhan inti CF1.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 2.1 | [CORE CF1] | [[6.2 Forwards and Futures]] |
| 2.2 | [CORE CF1] | [[6.1 Options – Call and Put]] |
| 2.3 | [CORE CF1] | [[6.1 Options – Call and Put]] |
| Institutional/tax details | [BEYOND CF1] | tidak dijadikan materi inti |

---

# 3. Section 2.1 — Forward Contracts

## 3.1 Core Definition

Forward contract menetapkan **hari ini** syarat transaksi yang baru akan diselesaikan pada waktu tertentu di masa depan.

Kontrak menentukan:

- exact asset/commodity yang diserahkan;
- quantity;
- delivery time/date/place;
- harga yang dibayar pada settlement;
- kewajiban seller untuk menjual;
- kewajiban buyer untuk membeli.

Tanggal settlement disebut **expiration date**, dan asset yang menjadi dasar kontrak disebut **underlying asset**.

[CORE CF1] Dalam setup dasar McDonald, forward contract umumnya tidak membutuhkan initial premium. Harga transaksi masa depan yang disepakati disebut **forward price**.

### Long dan Short

- **Long forward** = pihak yang wajib membeli underlying pada expiration.
- **Short forward** = pihak yang wajib menjual underlying pada expiration.

Jika contracted forward price adalah $F_{0,T}$ dan spot price pada expiration adalah $S_T$:

$$
\boxed{
\text{Payoff}_{\text{long fwd}}
=
S_T-F_{0,T}
}
$$

dan

$$
\boxed{
\text{Payoff}_{\text{short fwd}}
=
F_{0,T}-S_T
}
$$

Sehingga:

$$
\text{Payoff}_{\text{short}}
=
-\text{Payoff}_{\text{long}}.
$$

Ini adalah zero-sum relation pada kontrak yang sama.

## 3.2 Textbook Example — S&R Forward

McDonald menggunakan indeks hipotetis S&R 500 dengan:

- spot saat ini: $1000$;
- 6-month forward price: $1020$.

Jika:

$$
S_T=1050,
$$

long forward memperoleh:

$$
1050-1020=30,
$$

sementara short rugi $30$.

Jika:

$$
S_T=900,
$$

long forward rugi:

$$
900-1020=-120,
$$

dan short memperoleh $120$.

### Visual Meaning

Payoff long forward adalah garis lurus dengan:

- slope $+1$;
- zero crossing di $S_T=F_{0,T}$.

Short forward adalah mirror image terhadap horizontal axis.

[IMPORTANT DISTINCTION] Forward tidak memiliki kink. Buyer tetap wajib membeli meskipun $S_T<F_{0,T}$.

---

## 3.3 Spot Purchase vs Forward Purchase

McDonald kemudian membandingkan:

1. membeli underlying langsung pada time 0;
2. memasuki long forward dan membayar nanti.

Sekilas keduanya tampak berbeda karena initial investment berbeda.

Jika physical index dibeli sekarang seharga $1000$, investor langsung mengeluarkan $1000$.

Jika investor masuk forward, initial cash outlay kontrak adalah nol dan pembayaran $1020$ baru terjadi enam bulan kemudian.

### Funded vs Unfunded

McDonald memakai terminology:

- **funded position** — sudah dibiayai penuh sekarang;
- **unfunded position** — pembayaran utama ditunda.

Agar dua investasi dibandingkan secara fair, financing harus disamakan.

Misalkan effective 6-month interest rate adalah $2\%$.

Karena:

$$
1000(1.02)=1020,
$$

maka:

- long forward + zero-coupon bond yang tumbuh menjadi $1020$ memberikan ownership indeks pada maturity;
- borrowing $1000$ untuk membeli index sekarang menghasilkan pembayaran kembali $1020$ pada maturity.

Jadi untuk non-dividend-paying asset dalam contoh:

> membeli asset sekarang dan long forward berbeda terutama pada **timing financing**.

Ini menjadi bridge menuju no-arbitrage forward pricing di Chapter 5.

---

## 3.4 Payoff vs Profit

Salah satu kontribusi paling penting chapter ini adalah membedakan dua diagram.

### Payoff

**Payoff** adalah cash value posisi pada suatu future date, tanpa otomatis mengurangi initial investment.

### Profit

**Profit** dalam framework McDonald:

$$
\boxed{
\text{Profit at }T
=
\text{Payoff at }T
-
\operatorname{FV}_T(\text{initial investment})
}
$$

Jika initial cash flow justru merupakan inflow, future value inflow tersebut ditambahkan.

Untuk standard forward contract dengan zero initial premium:

$$
\text{Profit}=\text{Payoff}.
$$

Untuk stock atau option yang memerlukan cash outlay sekarang, payoff dan profit berbeda.

[IMPORTANT DISTINCTION]

> **Payoff menjelaskan terminal contract value. Profit membandingkan terminal outcome setelah financing initial cost diperhitungkan.**

Ini sangat penting ketika mengerjakan option problems di Sections 2.2–2.3.

---

## 3.5 Zero-Coupon Bonds and Vertical Shifts

McDonald menunjukkan bahwa zero-coupon bond dapat menggeser **payoff** secara vertikal.

Contoh:

$$
\text{Long Forward Payoff}=S_T-1020.
$$

Tambahkan bond yang membayar $1020$ pada $T$:

$$
(S_T-1020)+1020=S_T.
$$

Hasilnya sama dengan payoff physical underlying.

Tetapi karena membeli bond membutuhkan initial investment, bond tidak mengubah **profit diagram** setelah initial investment dihitung dengan konsisten.

Ini memberi prinsip yang nanti sangat berguna di put-call parity:

> Fixed future cash flow dapat direpresentasikan sebagai bond component.

---

## 3.6 Cash Settlement vs Physical Delivery

Forward dapat diselesaikan melalui:

### Physical delivery

Short menyerahkan underlying; long membayar contracted forward price.

### Cash settlement

Tidak ada delivery underlying. Pihak yang rugi membayar net amount kepada pihak yang untung.

Jika:

$$
S_T=1040,\qquad F_{0,T}=1020,
$$

maka long menerima cash:

$$
1040-1020=20.
$$

Cash settlement ekonominya sama dengan physical settlement diikuti immediate resale, jika transaction costs diabaikan.

---

## 3.7 Credit Risk

Forward memiliki **counterparty credit risk**: pihak yang seharusnya membayar atau menyerahkan asset dapat gagal memenuhi kewajibannya.

McDonald membedakan secara konseptual:

- exchange-traded contracts menggunakan institutional mechanisms dan collateral untuk mengurangi credit risk;
- OTC contracts membuat counterparties lebih langsung menanggung credit risk satu sama lain.

[CF1 SUPPORTING CONTEXT] Detail institutional credit controls bukan fokus kalkulasi CF1, tetapi terminology forward/futures dan counterparty obligation penting dipahami.

---

# 4. Section 2.2 — Call Options

## 4.1 Why a Call Exists

Forward buyer tetap wajib membeli meskipun underlying jatuh di bawah contracted price.

Call mengubah struktur itu:

> **Call option memberi buyer hak membeli underlying pada harga tertentu, tanpa kewajiban membeli.**

Karena buyer memiliki asymmetric advantage ini, buyer membayar **premium** kepada seller/writer.

---

## 4.2 Option Terminology

### Strike Price

Harga yang harus dibayar holder jika call di-exercise.

Dilambangkan:

$$
K.
$$

### Exercise

Tindakan holder menggunakan haknya untuk membeli underlying dengan membayar strike.

### Expiration

Tanggal terakhir option dapat digunakan.

### Exercise Style

McDonald membedakan:

- **European option** — exercise hanya pada expiration;
- **American option** — exercise dapat dilakukan selama option masih hidup;
- **Bermudan option** — exercise hanya pada tanggal/period tertentu.

[CORE CF1] CF1 terutama membutuhkan pemahaman terminology dan payoff mechanics; detailed early-exercise valuation berada di luar chapter scope inti.

---

## 4.3 Purchased Call: Payoff

Untuk European call:

$$
\boxed{
C_T
=
\max(0,S_T-K)
}
$$

atau piecewise:

$$
C_T=
\begin{cases}
0, & S_T\le K,\\
S_T-K, & S_T>K.
\end{cases}
$$

Reasoning:

- jika $S_T\le K$, membeli di pasar sama atau lebih murah → tidak exercise;
- jika $S_T>K$, exercise memungkinkan membeli seharga $K$ asset yang bernilai $S_T$.

### Shape

Purchased call payoff:

- flat di $0$ untuk $S_T\le K$;
- kink di $K$;
- slope $+1$ setelah $K$.

Karena holder dapat walk away, payoff holder tidak negatif.

---

## 4.4 Purchased Call: Profit

Misalkan premium call pada time 0 adalah $C_0$.

Jika profit dinilai pada expiration:

$$
\boxed{
\Pi_{\text{long call}}
=
\max(0,S_T-K)
-
C_0(1+i)^T
}
$$

untuk rate convention diskrit yang sesuai.

Lebih umum:

$$
\Pi_{\text{long call}}
=
\text{Payoff}
-
\operatorname{FV}_T(C_0).
$$

[IMPORTANT DISTINCTION]

Call dapat memiliki payoff nol tetapi profit negatif karena premium tetap telah dibayar.

### Break-Even

Jika future value premium di $T$ adalah $C_T^{\text{prem}}$:

$$
S_T^{BE}=K+C_T^{\text{prem}}.
$$

Jadi:

$$
S_T=K
$$

adalah **payoff kink**, bukan profit break-even.

---

## 4.5 Written Call

Writer menerima premium dan memiliki kewajiban memenuhi exercise decision holder.

Payoff writer:

$$
\boxed{
\text{Payoff}_{\text{short call}}
=
-\max(0,S_T-K)
}
$$

Profit writer:

$$
\boxed{
\Pi_{\text{short call}}
=
-\max(0,S_T-K)
+
C_T^{\text{prem}}
}
$$

### Risk Structure

Untuk long call:

- maximum loss = premium pada valuation date yang dipakai;
- upside tidak dibatasi.

Untuk short call:

- maximum gain = premium;
- potential loss meningkat tanpa bound ketika $S_T$ meningkat.

---

# 5. Section 2.3 — Put Options

## 5.1 Put as a Right to Sell

Put option memberi buyer:

> **hak menjual underlying pada strike price $K$.**

Jika market price jatuh, hak menjual pada harga tetap menjadi valuable.

Inilah basis intuition bahwa purchased put bertindak seperti insurance terhadap downside.

---

## 5.2 Purchased Put: Payoff

European put payoff:

$$
\boxed{
P_T
=
\max(0,K-S_T)
}
$$

atau:

$$
P_T=
\begin{cases}
K-S_T, & S_T<K,\\
0, & S_T\ge K.
\end{cases}
$$

Reasoning:

- jika $S_T<K$, holder dapat membeli/menilai asset di pasar seharga $S_T$ lalu menjual pada $K$;
- jika $S_T\ge K$, exercise tidak menguntungkan.

### Shape

Purchased put:

- slope $-1$ ketika $S_T<K$;
- kink di $K$;
- flat di $0$ untuk $S_T\ge K$.

---

## 5.3 Purchased Put: Profit

Jika premium awal $P_0$:

$$
\boxed{
\Pi_{\text{long put}}
=
\max(0,K-S_T)
-
\operatorname{FV}_T(P_0)
}
$$

Jika future value premium ditulis $P_T^{\text{prem}}$:

$$
\Pi_{\text{long put}}
=
\max(0,K-S_T)-P_T^{\text{prem}}.
$$

### Break-Even

Di region ketika put active:

$$
K-S_T-P_T^{\text{prem}}=0.
$$

Maka:

$$
\boxed{
S_T^{BE}
=
K-P_T^{\text{prem}}
}
$$

---

## 5.4 Written Put

Payoff writer:

$$
\boxed{
\text{Payoff}_{\text{short put}}
=
-\max(0,K-S_T)
}
$$

Profit:

$$
\boxed{
\Pi_{\text{short put}}
=
-\max(0,K-S_T)
+
P_T^{\text{prem}}
}
$$

Dengan assumption harga underlying tidak negatif:

- maximum gain short put = premium;
- worst terminal exercise payoff terjadi saat $S_T=0$.

---

# 6. Core Payoff Map

| Position | Payoff at $T$ |
|---|---|
| Long forward | $S_T-F_{0,T}$ |
| Short forward | $F_{0,T}-S_T$ |
| Long call | $\max(0,S_T-K)$ |
| Short call | $-\max(0,S_T-K)$ |
| Long put | $\max(0,K-S_T)$ |
| Short put | $-\max(0,K-S_T)$ |

Jika initial premium/cost ada:

$$
\text{Profit}
=
\text{Payoff}
-
\operatorname{FV}_T(\text{net initial outflow}).
$$

---

# 7. Long vs Short — The Sign Logic

McDonald membangun sign logic yang dapat dipakai terus-menerus.

### Forward

- long mendapat benefit ketika price naik;
- short mendapat benefit ketika price turun.

### Option

- long = membeli **hak**;
- short = menjual/menulis hak dan menerima **kewajiban contingent**.

Untuk contract yang sama:

$$
\text{short payoff}
=
-\text{long payoff}.
$$

Jika premium dinilai pada tanggal yang sama:

$$
\text{short profit}
=
-\text{long profit}.
$$

Ini adalah sanity check yang sangat kuat.

---

# 8. Moneyness and Exercise Intuition

[CF1 SUPPORTING CONTEXT]

Moneyness menanyakan apakah immediate/exercise value positif relatif terhadap strike.

| Option | ITM | ATM | OTM |
|---|---|---|---|
| Call | $S>K$ | $S\approx K$ | $S<K$ |
| Put | $S<K$ | $S\approx K$ | $S>K$ |

[IMPORTANT DISTINCTION]

> ITM bukan berarti total profit positif.

Option mungkin ITM tetapi payoff belum cukup besar untuk menutup premium.

---

# 9. Comparing Option Strikes

Untuk options dengan underlying dan maturity sama:

### Calls

Jika:

$$
K_1<K_2,
$$

maka state-by-state:

$$
\max(0,S_T-K_1)
\ge
\max(0,S_T-K_2).
$$

Lower-strike call memberi holder hak membeli lebih murah dan karenanya secara payoff lebih valuable.

### Puts

Jika:

$$
K_1<K_2,
$$

maka:

$$
\max(0,K_2-S_T)
\ge
\max(0,K_1-S_T).
$$

Higher-strike put memberi holder hak menjual lebih mahal dan karenanya lebih valuable.

Ini mendukung arah hubungan strike–premium yang ditekankan dalam exercises chapter.

---

# 10. Payoff vs Profit — The Chapter’s Most Important Distinction

Gunakan urutan ini setiap kali bertemu soal derivative:

1. identifikasi posisi;
2. tulis payoff contract;
3. tentukan initial premium/cost;
4. pindahkan premium ke valuation date yang sama;
5. hitung profit.

Contoh long call:

$$
\text{Payoff}
=
\max(0,S_T-K)
$$

tetapi

$$
\text{Profit}
=
\max(0,S_T-K)-C_T^{\text{prem}}.
$$

Contoh forward:

$$
\text{Payoff}
=
S_T-F_{0,T}
$$

dan karena standard initial premium $=0$:

$$
\text{Profit}
=
S_T-F_{0,T}.
$$

---

# 11. Figures and Mental Models

## Figure 2.2 — Long and Short Forward

Yang harus dilihat:

- dua garis linear;
- zero crossing pada forward price;
- slope $+1$ untuk long dan $-1$ untuk short;
- payoff satu pihak exact negative pihak lain.

## Figures Call/Put

Mental pattern:

- **call** memiliki kink lalu naik;
- **put** turun menuju kink lalu flat;
- long option payoff tidak pernah negatif;
- short option adalah mirror image.

## Figure 2.3 / 2.4 — Physical Index vs Forward + Bond

Lesson:

> underlying ownership dapat direplikasi oleh kombinasi derivative + fixed cash flow.

Ini menjadi conceptual bridge ke synthetic positions dan put-call parity pada Chapter 3.

---

# 12. Worked Example — Call Profit

Anggap:

- strike $K=1020$;
- option premium saat ini $=80$;
- effective rate hingga expiration $=2\%$;
- $S_T=1120$.

Future value premium:

$$
80(1.02)=81.60.
$$

Call payoff:

$$
1120-1020=100.
$$

Profit:

$$
100-81.60=18.40.
$$

Interpretation:

- call clearly ITM;
- payoff $100$;
- profit lebih kecil karena premium financing cost harus diperhitungkan.

---

# 13. Worked Example — Put as Downside Protection

Anggap:

- $K=1000$;
- $S_T=900$.

Long put payoff:

$$
1000-900=100.
$$

Jika premium accumulated ke expiration adalah $75$:

$$
\Pi=100-75=25.
$$

Jika ternyata:

$$
S_T=1050,
$$

put payoff:

$$
0,
$$

tetapi profit:

$$
-75.
$$

Ini menegaskan bahwa insurance yang tidak digunakan tetap memiliki cost.

---

# 14. Common Conceptual Traps

### Trap 1 — Forward buyer boleh tidak membeli

Salah. Long forward memiliki obligation.

### Trap 2 — Long call selalu untung jika ITM

Salah. ITM hanya berarti payoff positif. Profit masih harus menutup premium.

### Trap 3 — Option premium dimasukkan ke payoff

Salah. Premium masuk ke **profit**, bukan terminal contractual payoff.

### Trap 4 — Short put sama dengan long put bertanda positif

Salah. Writer payoff adalah exact negative holder payoff.

### Trap 5 — $S_T=K$ adalah break-even

Hanya benar untuk payoff, bukan profit. Profit break-even bergeser karena premium.

### Trap 6 — European/American menunjukkan lokasi pasar

Salah. Itu exercise style.

### Trap 7 — Membandingkan initial cost dan terminal payoff tanpa TVM

Salah. Semua cash flow harus dinilai pada valuation date yang sama.

---

# 15. What to Retain for CF1

[CORE CF1]

Pahami dan dapat gunakan tanpa melihat catatan:

$$
\text{Long Forward}=S_T-F_{0,T}
$$

$$
\text{Long Call}=\max(0,S_T-K)
$$

$$
\text{Long Put}=\max(0,K-S_T)
$$

serta:

$$
\text{Short payoff}=-\text{Long payoff}.
$$

Juga kuasai:

- forward = obligation;
- option = right for holder, obligation for writer;
- payoff vs profit;
- premium and time value of money;
- strike, expiration, exercise style;
- cash settlement;
- basic credit-risk intuition;
- call/put payoff diagrams;
- option sebagai insurance intuition.

---

# 16. Beyond CF1 / Compressed Material

[BEYOND CF1] Detail institutional seperti current exchange listings, historical contract examples, tax treatment, constructive sale rules, changing margin rules, dan market-specific settlement convention tidak dirangkum lebih lanjut. Material tersebut tidak diperlukan untuk core learning outcomes Topik 6 berdasarkan silabus CF1.

---

# 17. Chapter-End Mental Checklist

Sebelum menyelesaikan soal Chapter 2, tanyakan:

1. Forward, call, atau put?
2. Long atau short?
3. Apa underlying?
4. Berapa strike/forward price?
5. Kapan expiration?
6. Apakah yang ditanya payoff atau profit?
7. Jika profit, berapa initial premium/cost dan future value-nya?
8. Di region mana $S_T$ berada?
9. Apakah sign sudah konsisten dengan holder/writer?
10. Apakah hasil masuk akal dari bentuk payoff graph?

---

# 18. Link to CF1 Notes

- Forward mechanics → [[6.2 Forwards and Futures]]
- Call/put mechanics → [[6.1 Options – Call and Put]]
- Combination strategies → [[6.3 Option Strategies]]
- Time value of premium → [[1.4 Accumulation and Present Value]]

---

## Source Note

Condensed note ini mengikuti struktur dan reasoning **McDonald et al., Derivatives Markets, Chapter 2 — An Introduction to Forwards and Options**. Fokus detail ditempatkan pada Sections 2.1–2.3 karena bagian tersebut eksplisit berada dalam scope CF1. Data/market anecdotes dan institutional appendices dikompresi sesuai aturan prompt.

#CF1 #CondensedBook #McDonald #Derivatives
