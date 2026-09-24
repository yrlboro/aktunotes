---
type: "condensed-book"
exam: "CF1"
book: "Fundamentals of Corporate Finance"
author: "Stephen A. Ross, Randolph W. Westerfield, Bradford D. Jordan"
chapter: "12"
chapter_title: "Some Lessons from Capital Market History"
cf1_topics: ["7.1", "7.2"]
cf1_relevance: "High"
source_scope: "Chapter 12"
compression_level: "Condensed"
tags: [CF1, CondensedBook, RossJordan, Portfolio, RiskReturn]
date_created: "2026-08-25"
status: "study-note"
---

# Ross & Jordan — Chapter 12: Some Lessons from Capital Market History

> [!ABSTRACT] Chapter in One View
> Chapter ini membangun fondasi empiris untuk memahami **return** dan **risk** sebelum Chapter 13 menjelaskan bagaimana pasar memberi harga pada risk. Ross, Westerfield, dan Jordan memulai dari cara menghitung return investasi, lalu menggunakan sejarah pasar modal untuk menunjukkan dua pelajaran besar: **investor secara historis memperoleh reward karena menanggung risk**, tetapi **reward yang lebih tinggi datang bersama variability yang lebih besar**. Return dipisahkan menjadi income dan capital gain/loss, lalu dinyatakan dalam dollar maupun percentage terms. Historical average return memperkenalkan **risk premium**, sedangkan variance dan standard deviation mengukur dispersion return. Chapter kemudian membahas normal-distribution intuition sebagai alat interpretasi, serta capital-market efficiency sebagai konteks bagaimana informasi tercermin dalam harga. Untuk CF1, bagian paling penting adalah return calculation, average/expected-return intuition, risk premium, variance-standard deviation, dan hubungan risk-return yang menjadi jembatan ke diversification, beta, SML, dan CAPM pada Chapter 13.

## 1. Why This Chapter Exists

Sebelum menentukan required return sebuah aset atau proyek, kita perlu memahami dua pertanyaan dasar: **berapa return yang secara historis ditawarkan aset berisiko, dan seberapa tidak pasti return tersebut?** Chapter 12 menjawabnya dengan melihat data pasar modal dan memperkenalkan ukuran yang akan dipakai kembali pada Chapter 13.

Logika chapter bergerak dari pengukuran sederhana menuju interpretasi risk-return:

1. hitung return satu periode;
2. lihat bagaimana berbagai kelas aset berperilaku secara historis;
3. ringkas return historis menggunakan arithmetic average;
4. ukur variability dengan variance dan standard deviation;
5. simpulkan bahwa risk dan reward bergerak bersama;
6. diskusikan sejauh mana informasi yang tersedia sudah tercermin dalam harga pasar.

> [!INFO] CF1 Connection
> [CORE CF1] Chapter ini terutama menopang [[7.1 CAPM and Factor Models]] dan [[7.2 Mean-Variance Portfolio Theory]] melalui fondasi **return, risk premium, variance, standard deviation, dan risk-return trade-off**.

## 2. Chapter Map

- **12.1 Returns**
  - dollar returns
  - percentage returns
  - dividend yield dan capital gains yield
- **12.2 The Historical Record**
  - historical returns berbagai kelas aset
  - nominal vs real context
- **12.3 Average Returns: The First Lesson**
  - arithmetic average return
  - risk-free return, excess return, risk premium
  - first lesson: reward for bearing risk
- **12.4 The Variability of Returns: The Second Lesson**
  - variance
  - standard deviation
  - normal-distribution interpretation
  - second lesson: greater potential reward comes with greater risk
- **12.5 Capital Market Efficiency**
  - information and prices
  - efficient market forms
- **12.6 Summary and Conclusions**

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 12.1 Returns | Core | [[7.2 Mean-Variance Portfolio Theory]] |
| 12.2 Historical Record | Supporting | [[7.1 CAPM and Factor Models]], [[7.2 Mean-Variance Portfolio Theory]] |
| 12.3 Average Returns | Core | [[7.1 CAPM and Factor Models]] |
| 12.4 Variability of Returns | Core | [[7.2 Mean-Variance Portfolio Theory]] |
| 12.5 Capital Market Efficiency | Supporting | [[7.1 CAPM and Factor Models]] |
| 12.6 Summary | Supporting | [[7.1 CAPM and Factor Models]], [[7.2 Mean-Variance Portfolio Theory]] |

## 3. 12.1 Returns

### 3.1 Dollar Return: Income + Capital Gain/Loss

Jika sebuah aset dibeli pada awal periode dan nilainya berubah selama periode tersebut, total return memiliki dua komponen:

1. **income component** — cash yang diterima selama memegang aset, misalnya dividend;
2. **capital gain or loss** — perubahan market value aset.

Secara dollar:

$$
\text{Total dollar return}
=
\text{Dividend income}
+
\text{Capital gain (or loss)}.
$$

Untuk saham dengan harga awal $P_t$, harga akhir $P_{t+1}$, dividend per share $D_{t+1}$, dan $N$ shares:

$$
\text{Dividend income}=N D_{t+1},
$$

$$
\text{Capital gain}=N(P_{t+1}-P_t).
$$

Maka:

$$
\text{Total dollar return}
=
N\left[D_{t+1}+P_{t+1}-P_t\right].
$$

### Example — Video Concept Company

**Situation.** Textbook menggunakan harga awal $\$37$, harga akhir $\$40.33$, dividend $\$1.85$ per share, dan 100 shares.

**Calculation.**

$$
\text{Dividend income}=100(1.85)=\$185.
$$

$$
\text{Capital gain}=100(40.33-37)=\$333.
$$

$$
\text{Total dollar return}=185+333=\$518.
$$

Jika saham dijual pada akhir tahun:

$$
\text{Total cash}
=
\text{Initial investment}+\text{Total return}
=
3{,}700+518
=
\$4{,}218.
$$

**Meaning.** Figure 12.1 menampilkan investasi awal sebagai outflow pada waktu 0 dan market value akhir plus dividend sebagai inflows pada waktu 1. Ini membuat jelas bahwa return adalah perubahan wealth, bukan hanya cash yang benar-benar ditarik dari investasi.

> [!WARNING] Important Distinction
> **Unrealized capital gain tetap bagian dari return.** Keputusan untuk tidak menjual aset tidak menghapus perubahan nilai ekonominya. Investor dapat menjual dan segera membeli kembali aset yang sama; tanpa pajak atau friksi, economic position-nya tetap setara.

### 3.2 Percentage Return

Dollar return bergantung pada ukuran investasi. Percentage return lebih mudah dibandingkan antar-investasi karena mengukur return **per dollar invested**.

Dividend yield:

$$
\text{Dividend yield}
=
\frac{D_{t+1}}{P_t}.
$$

Capital gains yield:

$$
\text{Capital gains yield}
=
\frac{P_{t+1}-P_t}{P_t}.
$$

Total percentage return:

$$
R_{t+1}
=
\frac{D_{t+1}+P_{t+1}-P_t}{P_t}.
$$

Equivalently:

$$
1+R_{t+1}
=
\frac{D_{t+1}+P_{t+1}}{P_t}.
$$

Pada Video Concept example:

$$
\text{Dividend yield}=\frac{1.85}{37}=5\%,
$$

$$
\text{Capital gains yield}=\frac{40.33-37}{37}=9\%,
$$

sehingga:

$$
R=5\%+9\%=14\%.
$$

### Example — Purchase at $25, Ending Price $35, Dividend $2

Dividend yield:

$$
\frac{2}{25}=8\%.
$$

Capital gains yield:

$$
\frac{35-25}{25}=40\%.
$$

Total return:

$$
R=48\%.
$$

Investasi $\$1{,}000$ menjadi:

$$
1{,}000(1.48)=\$1{,}480.
$$

### Interpretation

Return selalu harus dibaca sebagai perubahan wealth relatif terhadap beginning value. Karena itu, percentage return adalah natural bridge menuju probabilistic return pada Chapter 13.

## 4. 12.2 The Historical Record

Ross et al. menggunakan historical market data untuk beberapa kategori investasi, termasuk large-company stocks, small-company stocks, long-term corporate bonds, long-term government bonds, dan Treasury bills. Data juga dibandingkan dengan inflation.

[CF1 SUPPORTING CONTEXT] Tujuan angka historis di section ini bukan menghafalkan setiap angka tahun tertentu. Pelajaran matematisnya adalah bahwa different asset classes menunjukkan pola return dan volatility yang berbeda selama periode panjang.

### What the Historical Record Shows

- Saham secara historis memberi cumulative growth jauh lebih tinggi daripada risk-free short-term instruments, tetapi jalurnya jauh lebih volatile.
- Small-company stocks memiliki potential reward besar, tetapi juga dispersion return yang sangat besar.
- Government bills memiliki variability yang jauh lebih rendah, sehingga menjadi natural benchmark untuk **risk-free rate** dalam discussion berikutnya.
- Inflation matters karena nominal growth tidak sama dengan growth purchasing power.

> [!NOTE] Textbook Context
> Dataset dan specific historical period di chapter ini berasal dari textbook edition tersebut. Condensed note mempertahankan analytical lesson, bukan memperbarui historical sample menggunakan data eksternal.

## 5. 12.3 Average Returns: The First Lesson

### 5.1 Arithmetic Average Return

Jika terdapat historical returns $R_1,R_2,\ldots,R_T$, arithmetic average return adalah:

$$
\bar R
=
\frac{R_1+R_2+\cdots+R_T}{T}.
$$

Arithmetic average menjawab pertanyaan:

> “Berapa average return untuk satu periode yang dipilih secara acak dari historical sample?”

Ini berbeda dari compounded multi-period growth rate. Chapter 12 menggunakan arithmetic mean sebagai summary statistic historical annual return.

### 5.2 Risk-Free Return, Excess Return, and Risk Premium

Treasury bills digunakan sebagai low-risk benchmark. Return risky asset di atas risk-free return disebut **excess return** untuk periode tertentu.

Dalam average terms, difference antara average risky return dan average risk-free return adalah **risk premium**.

Secara konsep:

$$
\text{Risk premium}
=
\text{Average risky return}
-
\text{Average risk-free return}.
$$

Chapter 13 akan mengubah ini menjadi forward-looking version:

$$
E(R_i)-R_f.
$$

### 5.3 The First Lesson

First lesson dari capital market history:

> **There is a reward for bearing risk.**

Investor yang menanggung risky assets secara historis menerima average return lebih tinggi daripada investors pada safer assets. Namun ini bukan free lunch; bagian berikutnya menunjukkan cost-nya berupa variability yang lebih tinggi.

> [!INFO] CF1 Connection
> Risk premium adalah building block CAPM. Chapter 13 menanyakan bukan hanya “apakah ada premium?”, tetapi **risk mana yang layak memperoleh premium dan berapa besarnya**.

## 6. 12.4 The Variability of Returns: The Second Lesson

Average return saja tidak cukup. Dua investments dapat memiliki average return mirip tetapi distribution return sangat berbeda. Ross menggunakan variance dan standard deviation untuk mengukur variability.

### 6.1 Variance from Historical Returns

Dengan $T$ historical returns dan arithmetic mean $\bar R$, sample variance di textbook ditulis sebagai:

$$
\operatorname{Var}(R)
=
\frac{(R_1-\bar R)^2+\cdots+(R_T-\bar R)^2}{T-1}.
$$

Langkah konseptual:

1. hitung average return $\bar R$;
2. cari deviation tiap return dari average;
3. square deviations agar negative dan positive deviations tidak saling cancel;
4. jumlahkan;
5. divide by $T-1$ untuk sample variance.

Standard deviation:

$$
\operatorname{SD}(R)=\sigma_R=\sqrt{\operatorname{Var}(R)}.
$$

> [!WARNING] Important Distinction
> **Variance ≠ standard deviation.** Variance menggunakan squared return units, sedangkan standard deviation kembali ke unit return asli dan lebih mudah diinterpretasikan secara finansial.

### 6.2 Why Standard Deviation Measures Risk Here

Dalam historical context chapter ini, risk didekati sebagai dispersion return di sekitar average. Semakin besar standard deviation, semakin lebar range outcomes yang secara historis terjadi.

Ini adalah **total risk** measure. Chapter 13 akan menunjukkan bahwa untuk diversified investor, tidak seluruh total risk memperoleh risk premium.

### 6.3 Normal Distribution Approximation

Ross memakai normal distribution untuk memberi intuition tentang standard deviation. Jika returns approximately normal:

- sekitar dua pertiga observations berada dalam kira-kira satu standard deviation dari mean;
- sekitar 95% berada dalam kira-kira dua standard deviations dari mean;
- outcomes lebih jauh dari mean menjadi semakin jarang.

[ASSUMPTION] Ini adalah approximation yang bergantung pada return distribution being reasonably close to normal. Textbook memakainya untuk interpretation, bukan sebagai claim bahwa semua financial returns exactly normal.

### 6.4 The Second Lesson

Second lesson:

> **The greater the potential reward, the greater the risk.**

Historical asset classes dengan average return lebih tinggi juga cenderung memiliki larger standard deviation. Jadi first lesson dan second lesson harus dibaca bersama:

```text
higher historical average return
        ↕
higher variability / risk
```

Tidak ada contradiction antara keduanya. Risk premium adalah compensation untuk menerima uncertainty yang lebih besar.

## 7. 12.5 Capital Market Efficiency

Section ini bergeser dari measurement menuju pertanyaan informasi: **seberapa cepat dan akurat harga market mencerminkan informasi yang tersedia?**

### 7.1 Efficient Market Intuition

Market disebut efficient bila harga securities secara cepat mencerminkan available relevant information. Jika information sudah reflected in price, investor tidak dapat secara sistematis menghasilkan abnormal return hanya dengan trading berdasarkan informasi yang sudah diketahui pasar.

Ross membahas tiga forms of efficiency:

1. **Weak form** — prices reflect historical price information.
2. **Semistrong form** — prices reflect all publicly available information.
3. **Strong form** — prices reflect all information, public maupun private.

[CF1 SUPPORTING CONTEXT] Detail taxonomy ini mendukung equilibrium intuition di Chapter 13, tetapi bukan mathematical core portfolio calculation.

### 7.2 Announcement and Price Reaction

Figure dan discussion di section ini menekankan bahwa unexpected information mendorong price adjustment. Jika announcement sepenuhnya expected, tidak ada reason untuk sudden value change karena expected component seharusnya sudah incorporated.

Jembatan ke Chapter 13 sangat penting:

> **risk berasal dari surprises, bukan dari bagian outcome yang sudah diketahui sebelumnya.**

## 8. Chapter Synthesis

Chapter 12 dapat dipahami sebagai satu alur sederhana. Investment menghasilkan return dari income dan perubahan price. Return yang berbeda antarperiode kemudian diringkas dengan arithmetic average untuk mengukur typical one-period performance. Average risky return di atas risk-free return menghasilkan historical risk premium, menunjukkan bahwa pasar secara historis memberi reward untuk menanggung uncertainty. Namun return tidak konstan; dispersion di sekitar average diukur oleh variance dan standard deviation. Asset classes dengan premium tinggi juga memperlihatkan variability tinggi, sehingga risk dan reward tidak dapat dipisahkan.

Capital-market efficiency kemudian memberi institutional logic: expected information cenderung sudah tercermin dalam price, sehingga truly risky part of return berasal dari unexpected news. Chapter 13 mengambil semua pieces ini dan bertanya lebih tajam: jika investors dapat diversify, **bagian mana dari total risk yang benar-benar diberi harga oleh market?** Jawabannya mengarah ke systematic risk, beta, SML, dan CAPM.

## 9. Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| Total dollar return | Income + capital gain/loss | One holding period | [[7.2 Mean-Variance Portfolio Theory]] |
| Dividend yield | Dividend per beginning price | One period | [[7.2 Mean-Variance Portfolio Theory]] |
| Capital gains yield | Price change per beginning price | One period | [[7.2 Mean-Variance Portfolio Theory]] |
| Total percentage return | Dividend yield + capital gains yield | One period | [[7.2 Mean-Variance Portfolio Theory]] |
| Arithmetic average | Mean of historical periodic returns | Historical sample | [[7.2 Mean-Variance Portfolio Theory]] |
| Excess return | Risky return minus risk-free return | Same period | [[7.1 CAPM and Factor Models]] |
| Risk premium | Average/expected excess return | Same basis | [[7.1 CAPM and Factor Models]] |
| Variance | Average squared dispersion around mean, sample-adjusted | Historical sample | [[7.2 Mean-Variance Portfolio Theory]] |
| Standard deviation | Square root of variance | Same return units | [[7.2 Mean-Variance Portfolio Theory]] |
| First lesson | Risk bearing historically earns reward | Long-run historical evidence | [[7.1 CAPM and Factor Models]] |
| Second lesson | Higher potential reward comes with higher variability | Historical evidence | [[7.2 Mean-Variance Portfolio Theory]] |
| Market efficiency | Prices reflect available information | Depends on efficiency form | [[7.1 CAPM and Factor Models]] |

Core return formula:

$$
R_{t+1}
=
\frac{D_{t+1}+P_{t+1}-P_t}{P_t}.
$$

Historical sample variance:

$$
s_R^2
=
\frac{\sum_{t=1}^{T}(R_t-\bar R)^2}{T-1}.
$$

## 10. Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $P_t$ | Beginning stock price | Currency/share | Price at start of holding period |
| $P_{t+1}$ | Ending stock price | Currency/share | Price at end of holding period |
| $D_{t+1}$ | Dividend during period | Currency/share | Income component |
| $R_t$ | Return for period $t$ | Percentage / decimal | Total percentage return |
| $\bar R$ | Arithmetic average return | Percentage / decimal | Historical mean |
| $\operatorname{Var}(R)$ | Variance of returns | Squared return units | Total variability measure |
| $\sigma_R$ | Standard deviation of returns | Percentage / decimal | Square root of variance |
| $R_f$ | Risk-free return/rate | Percentage / period | Used explicitly in risk-premium context |

## 11. Compression Notes

### Retained in Detail

- dollar vs percentage return;
- dividend yield and capital gains yield;
- treatment of unrealized capital gains;
- arithmetic average return;
- risk premium intuition;
- variance and standard deviation;
- the two central lessons from market history;
- market-efficiency bridge to unexpected returns.

### Condensed

- long historical tables for each asset class;
- year-by-year market anecdotes;
- detailed normal-distribution illustrations;
- extended examples that repeat the same return or variance mechanics;
- lengthy discussion of market-price reactions to individual announcements.

### Omitted / Beyond CF1

- website references and online exercises;
- historical trivia that does not change the analytical lesson;
- end-of-chapter mechanical exercise set;
- detailed empirical market-efficiency evidence not required to understand CF1 portfolio mathematics.

## 12. CF1 Connection Map

```text
Dollar and percentage return
        ↓
Historical average return
        ↓
Risk-free return and risk premium
        ↓
Variance and standard deviation
        ↓
Risk-return trade-off
        ↓
Unexpected information creates risk
        ↓
Chapter 13: diversification and systematic risk
        ↓
[[7.1 CAPM and Factor Models]]
        +
[[7.2 Mean-Variance Portfolio Theory]]
```

## 13. Quick Reading Review

- Total return terdiri dari **income** dan **capital gain/loss**.
- Percentage return memakai beginning market value sebagai denominator.
- Unrealized capital gain tetap merupakan economic return.
- Dividend yield dan capital gains yield menjumlah menjadi total percentage return.
- Arithmetic average merangkum typical historical one-period return, bukan compounded growth rate.
- Risk premium adalah return risky asset di atas risk-free benchmark.
- First lesson: historical markets memberi reward untuk risk bearing.
- Variance mengukur squared dispersion; standard deviation adalah square root-nya.
- Standard deviation Chapter 12 adalah measure of **total variability**.
- Second lesson: potential reward yang lebih besar datang bersama risk yang lebih besar.
- Normal distribution dipakai sebagai approximation untuk memahami range return, bukan exact law.
- Market efficiency menekankan bahwa expected information seharusnya tercermin dalam prices.
- Jembatan ke Chapter 13: risk yang relevan berasal dari unexpected outcomes, lalu diversification menentukan bagian risk mana yang dapat dihilangkan.

## 14. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Return definition and dollar return | Chapter 12 §12.1 Returns |
| Percentage return, dividend yield, capital gains yield | Chapter 12 §12.1 Returns |
| Historical asset classes and long-run context | Chapter 12 §12.2 The Historical Record |
| Arithmetic average and risk premium | Chapter 12 §12.3 Average Returns: The First Lesson |
| Variance and standard deviation | Chapter 12 §12.4 The Variability of Returns: The Second Lesson |
| Normal-distribution interpretation | Chapter 12 §12.4 |
| Market efficiency and information | Chapter 12 §12.5 Capital Market Efficiency |
| Overall risk-return lessons | Chapter 12 §12.6 Summary and Conclusions |
