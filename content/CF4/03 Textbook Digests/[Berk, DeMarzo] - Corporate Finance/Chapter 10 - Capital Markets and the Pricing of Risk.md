---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk and Peter DeMarzo"
chapter: "10"
chapter_title: "Capital Markets and the Pricing of Risk"
cf4_topics: ["5.1", "5.3", "5.4"]
cf4_relevance: "High"
source_scope: "Chapter 10, Sections 10.1-10.8"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo]
date_created: "2026-08-25"
status: "study-note"
---

# Berk and DeMarzo — Chapter 10: Capital Markets and the Pricing of Risk

> [!ABSTRACT] Chapter in One View
> Chapter ini menjawab pertanyaan inti: **risiko apa yang benar-benar dihargai oleh pasar, dan berapa return yang harus ditawarkan untuk menanggungnya?** Data historis menunjukkan bahwa portofolio aset yang lebih volatil umumnya menghasilkan average return lebih tinggi, tetapi pola ini tidak berlaku jika volatility individual stock dibandingkan secara langsung. Penyebabnya adalah diversification: firm-specific risk dapat saling menghapus dalam portofolio besar, sedangkan systematic risk yang berasal dari guncangan ekonomi tetap bertahan. Karena investor tidak perlu menanggung diversifiable risk, pasar tidak memberi risk premium untuk risiko tersebut. Systematic risk diukur menggunakan **beta**, yaitu sensitivitas return suatu investasi terhadap return market portfolio. Market risk premium kemudian disesuaikan dengan beta untuk menentukan required return atau cost of capital melalui CAPM. Dengan demikian, alur chapter bergerak dari data historis, pengukuran return dan risk, diversification, hingga pricing of systematic risk.

## 1. Why This Chapter Exists

Investor General Mills, eBay, dan Treasury bills memperoleh pola return yang sangat berbeda: bukan hanya average return-nya, tetapi juga variasi hasil dari tahun ke tahun. Chapter ini ingin menjelaskan mengapa perbedaan tersebut muncul dan mengembangkan cara menentukan risk premium serta cost of capital suatu investasi.

Masalahnya tidak selesai dengan pernyataan sederhana bahwa “higher risk requires higher return.” Pertama, risk dan return harus dapat diukur. Kedua, data historis mengandung estimation error yang besar. Ketiga, tidak semua risiko relevan bagi investor yang dapat membentuk portofolio. Chapter ini karena itu menyaring total risk menjadi diversifiable dan systematic risk, lalu menghubungkan systematic risk dengan required return.

```text
Business or investment decision
        ↓
Uncertain future cash flows and returns
        ↓
Separate diversifiable risk from systematic risk
        ↓
Measure systematic risk with beta
        ↓
Required return / cost of capital
        ↓
Value impact
```

## 2. Chapter Map

```text
Chapter 10 — Capital Markets and the Pricing of Risk
├── 10.1 Risk and Return: Insights from 86 Years of Investor History
├── 10.2 Common Measures of Risk and Return
│   ├── Probability distributions
│   ├── Expected return
│   └── Variance, standard deviation, and volatility
├── 10.3 Historical Returns of Stocks and Bonds
│   ├── Realized and annual returns
│   ├── Empirical distribution and average return
│   ├── Historical volatility
│   ├── Estimation error
│   └── Arithmetic average versus compound annual return
├── 10.4 The Historical Trade-Off Between Risk and Return
│   ├── Large portfolios
│   └── Individual stocks
├── 10.5 Common Versus Independent Risk
├── 10.6 Diversification in Stock Portfolios
│   ├── Firm-specific versus systematic risk
│   └── No-arbitrage implication for risk premiums
├── 10.7 Measuring Systematic Risk
│   ├── Efficient and market portfolios
│   └── Beta
└── 10.8 Beta and the Cost of Capital
    ├── Market risk premium
    ├── Beta-adjusted risk premium
    └── CAPM
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 10.1–10.4 | Historical characteristics and return–risk relationship across asset groups | [[5.1 Investment Asset Characteristics]], [[5.4 Return Relationships and Economic Variables]] |
| 10.5–10.6 | Economic sources of common risk and the effect of diversification | [[5.3 Economic Influences on Markets]], [[5.4 Return Relationships and Economic Variables]] |
| 10.7–10.8 | Market sensitivity, beta, risk premium, and required return | [[5.4 Return Relationships and Economic Variables]] |

## 3. Risk and Return: Insights from 86 Years of Investor History

[CORE CF4] Berk dan DeMarzo membandingkan hasil investasi \$100 pada akhir 1925 dalam lima kelompok: U.S. small stocks, S&P 500, world stock portfolio, long-term AAA corporate bonds, dan one-month Treasury bills. Semua cash flow diasumsikan direinvestasikan dan transaction costs diabaikan.

> [!NOTE] Textbook Context
> Data historis chapter berakhir pada awal 2012 dan menggunakan periode 1926–2011. Angka berikut dipertahankan untuk mengikuti argumentasi textbook, bukan sebagai estimasi pasar terkini.

### Figure 10.1–10.2 — Long-Run Growth and Investment Horizon

Dalam keseluruhan periode 86 tahun, small stocks memberi ending value tertinggi, diikuti S&P 500, world stocks, corporate bonds, lalu Treasury bills. Namun, urutan long-run performance ini juga merupakan urutan variability. Small stocks mengalami penurunan sangat besar pada Great Depression dan financial crisis 2008; Treasury bills tumbuh lebih lambat tetapi jauh lebih stabil.

Ketika horizon diperpanjang dari 1 menjadi 5, 10, dan 20 tahun, relative performance saham membaik. Akan tetapi, horizon panjang tidak menjamin saham selalu mengalahkan aset aman. Pada beberapa 10-year periods, saham kalah dari Treasuries; small stocks bahkan pernah kalah dari S&P 500 dan corporate bonds pada horizon 20 tahun. Investor juga dapat terpaksa menjual pada saat buruk sebelum horizon berakhir.

Pelajarannya bukan bahwa saham selalu lebih baik dalam jangka panjang, melainkan bahwa historical reward yang tinggi datang bersama exposure terhadap kerugian besar, terutama ketika keadaan ekonomi memburuk dan kekayaan sangat dibutuhkan. Karena investor risk-averse, aset yang cenderung merugi pada bad times harus menawarkan expected return lebih tinggi.

## 4. Common Measures of Risk and Return

### Probability Distributions

Return menyatakan percentage increase in investment value per unit dana awal. Untuk investasi berisiko, hasil akhirnya tidak tunggal; setiap possible return $R$ memiliki probability $p_R$. **Probability distribution** merangkum seluruh kemungkinan return beserta probabilitasnya.

[TEXTBOOK EXAMPLE] Saham BFI berharga \$100 dan tidak membayar dividend. Dalam satu tahun, harganya diperkirakan menjadi \$140, \$110, atau \$80 dengan probabilitas masing-masing 25%, 50%, dan 25%. Possible returns-nya adalah 40%, 10%, dan -20%.

### Expected Return

Expected atau mean return adalah probability-weighted average dari seluruh possible returns:

$$
E[R] = \sum_R p_R R
$$

- $R$: possible return;
- $p_R$: probability bahwa return $R$ terjadi;
- $E[R]$: return rata-rata yang diperoleh bila investasi yang sama secara konseptual dapat diulang berkali-kali.

Untuk BFI:

$$
E[R_{BFI}] = 0.25(-20\%) + 0.50(10\%) + 0.25(40\%) = 10\%
$$

Secara visual, expected return merupakan balancing point dari probability distribution. Ia bukan jaminan return pada satu periode.

### Variance, Standard Deviation, and Volatility

Variance mengukur expected squared deviation dari mean, sedangkan standard deviation adalah akar variance:

$$
\operatorname{Var}(R)
= E\left[(R-E[R])^2\right]
= \sum_R p_R(R-E[R])^2
$$

$$
SD(R)=\sqrt{\operatorname{Var}(R)}
$$

Dalam finance, standard deviation of return disebut **volatility**. Variance dan volatility sama-sama mengukur sebaran hasil, tetapi volatility lebih mudah ditafsirkan karena satuannya sama dengan return. Jika return selalu sama dengan mean-nya, variance adalah nol; semakin jauh outcomes tersebar dari mean, semakin besar variance.

### Example — Expected Return and Volatility of AMC

**Situation**

AMC memiliki peluang sama untuk menghasilkan 45% atau -25%.

**Reasoning and Calculation**

$$
E[R_{AMC}] = 0.5(45\%) + 0.5(-25\%) = 10\%
$$

$$
\operatorname{Var}(R_{AMC})
=0.5(0.45-0.10)^2+0.5(-0.25-0.10)^2
=0.1225
$$

$$
SD(R_{AMC})=\sqrt{0.1225}=35\%
$$

**Meaning**

AMC dan BFI sama-sama mempunyai expected return 10%, tetapi AMC lebih volatile: 35% dibandingkan 21.2% untuk BFI. Expected return saja tidak cukup untuk menggambarkan investasi.

> [!INFO] Supporting Context
> Variance dan standard deviation tidak membedakan upside dari downside risk. Textbook menyebut semivariance dan expected tail loss sebagai alternatif, tetapi tidak mengembangkannya karena lebih kompleks dan biasanya digunakan untuk aplikasi khusus.

## 5. Historical Returns of Stocks and Bonds

Probability distribution yang diyakini investor biasanya tidak dapat diamati secara langsung. Jika lingkungan cukup stabil dan future distribution dianggap menyerupai past distribution, historical returns dapat digunakan untuk mengestimasi expected return dan volatility. Pendekatan ini tetap memiliki keterbatasan penting.

### Computing Realized Returns

Jika saham dibeli pada $t$ seharga $P_t$, membayar dividend $Div_{t+1}$, lalu dijual pada $t+1$ seharga $P_{t+1}$, realized atau total return adalah:

$$
R_{t+1}
=\frac{Div_{t+1}+P_{t+1}}{P_t}-1
=\frac{Div_{t+1}}{P_t}+\frac{P_{t+1}-P_t}{P_t}
$$

$$
R_{t+1}=\text{Dividend Yield}+\text{Capital Gain Rate}
$$

Formula yang sama berlaku untuk security lain dengan mengganti dividend menggunakan cash flow security tersebut, misalnya coupon untuk bond.

Jika terdapat beberapa subperiod dan seluruh dividends direinvestasikan, longer-period return harus diperoleh melalui compounding. Untuk quarterly returns:

$$
1+R_{annual}
=(1+R_{Q1})(1+R_{Q2})(1+R_{Q3})(1+R_{Q4})
$$

### Example — Microsoft Realized Returns

**Situation**

Textbook menghitung return Microsoft pada setiap interval dividend dan mengasumsikan dividend segera direinvestasikan.

**Calculation**

Hasil compounding subperiod menghasilkan:

$$
R_{2004}=(0.9982)(1.1186)(0.9755)-1=8.92\%
$$

$$
R_{2008}=(0.7944)(1.0611)(0.9211)(0.7229)(0.9908)-1=-44.39\%
$$

**Meaning**

Total return harus memasukkan dividend dan capital gain/loss. Contoh juga menunjukkan bahwa realized return berbeda antar tahun dan dapat jauh di bawah expected return.

### Empirical Distribution and Average Annual Return

Dengan mengamati return selama banyak periode dan menghitung frekuensi return dalam setiap range, kita membentuk **empirical distribution**. Jika underlying distribution stabil, arithmetic average dari realized returns dapat mengestimasi expected return:

$$
\bar R=\frac{R_1+R_2+\cdots+R_T}{T}
=\frac{1}{T}\sum_{t=1}^{T}R_t
$$

### Table 10.3–10.4 — Historical Return and Volatility, 1926–2011

| Investment | Average Annual Return | Volatility |
|---|---:|---:|
| Small stocks | 18.7% | 39.2% |
| S&P 500 | 11.7% | 20.3% |
| Corporate bonds | 6.6% | 7.0% |
| Treasury bills | 3.6% | 3.1% |

Empirical variance menggunakan sample average sebagai pengganti unknown true mean:

$$
\widehat{\operatorname{Var}}(R)
=\frac{1}{T-1}\sum_{t=1}^{T}(R_t-\bar R)^2
$$

Pembagi $T-1$ digunakan karena satu degree of freedom telah dipakai untuk mengestimasi $\bar R$. Historical volatility adalah akar dari variance estimate. Jika return bulanan hendak diannualisasi, variance dikalikan 12 dan standard deviation dikalikan $\sqrt{12}$.

### Estimation Error: Past Returns Do Not Reveal Expected Return Precisely

Ada dua masalah ketika historical average digunakan untuk menentukan cost of capital:

1. Yang terlihat hanyalah realized returns, bukan returns yang sebelumnya diharapkan investor. Kerugian S&P 500 sebesar 37% pada 2008 jelas bukan return yang mereka rencanakan di awal tahun.
2. Historical average hanyalah estimate dari true expected return dan dapat memiliki estimation error besar.

Jika returns independent and identically distributed (IID), standard error dari estimated mean adalah:

$$
SE(\bar R)=\frac{SD(R)}{\sqrt{T}}
$$

Approximate 95% confidence interval:

$$
\bar R \pm 2SE(\bar R)
$$

[TEXTBOOK EXAMPLE] Untuk S&P 500 selama 1926–2011, $\bar R=11.7\%$, $SD=20.3\%$, dan $T=86$. Intervalnya sekitar:

$$
11.7\% \pm 2\left(\frac{20.3\%}{\sqrt{86}}\right)
=11.7\%\pm4.4\%
$$

atau 7.3% sampai 16.1%. Bahkan 86 tahun data belum menghasilkan expected-return estimate yang sangat presisi. Dengan hanya data 2002–2011, estimate 5.0% dan volatility 20.5% memberi interval sekitar -8% sampai 18%.

Implikasinya penting: historical average individual stock, yang biasanya lebih volatile dan memiliki data lebih pendek, tidak dapat menjadi basis cost of capital yang andal. Chapter kemudian beralih dari “mengestimasi expected return langsung dari mean historis” menuju “mengestimasi risk terlebih dahulu, lalu menggunakan market pricing of risk.”

### Arithmetic Average Versus Compound Annual Return

Compound annual return atau CAGR adalah geometric average:

$$
R_{compound}
=\left[(1+R_1)(1+R_2)\cdots(1+R_T)\right]^{1/T}-1
$$

$$
R_{compound}
=\left(\frac{\text{Final Value}}{\text{Initial Value}}\right)^{1/T}-1
$$

> [!WARNING] Important Distinction
> **Arithmetic average return ≠ compound annual return.**
>
> - Arithmetic average digunakan untuk mengestimasi expected return per future period dari independent historical draws.
> - CAGR menggambarkan equivalent constant return yang mereplikasi long-run realized performance.

CAGR selalu berada di bawah arithmetic average ketika return volatile; gap biasanya sekitar setengah variance. Sebagai ilustrasi, return +20% lalu -20% memiliki arithmetic average 0%, tetapi investasi \$1 menjadi $1(1.20)(0.80)=0.96$, sehingga CAGR dua tahunnya sekitar -2.02%.

## 6. The Historical Trade-Off Between Risk and Return

### The Returns of Large Portfolios

**Excess return** adalah average return suatu investment di atas average Treasury bill return dan digunakan sebagai historical measure of risk premium:

$$
\text{Excess Return}=\bar R_{investment}-\bar R_{T\text{-bill}}
$$

### Table/Figure 10.5–10.6 — Volatility and Excess Return

| Investment | Volatility | Historical Excess Return |
|---|---:|---:|
| Small stocks | 39.2% | 15.1% |
| S&P 500 | 20.3% | 8.1% |
| Corporate bonds | 7.0% | 3.0% |
| Treasury bills | 3.1% | 0.0% |

Untuk large diversified portfolios, historical evidence memperlihatkan positive relationship: portofolio yang lebih volatile memberi average return lebih tinggi. Ini konsisten dengan risk aversion—investor meminta compensation untuk mengambil risiko tambahan.

### The Returns of Individual Stocks

Pola tersebut pecah ketika diterapkan pada individual stocks. Data 500 saham menunjukkan:

- larger stocks cenderung memiliki volatility lebih rendah;
- bahkan large individual stocks biasanya lebih volatile daripada diversified S&P 500;
- tidak ada hubungan jelas antara volatility individual stock dan average return;
- banyak saham mempunyai volatility lebih tinggi tetapi return lebih rendah daripada saham lain.

> [!WARNING] Important Distinction
> **Volatility dapat berguna untuk membandingkan risiko diversified portfolios, tetapi total volatility bukan penjelas yang memadai atas expected return individual security.** Sebagian volatility individual stock berasal dari risiko yang dapat dihilangkan melalui diversification.

## 7. Common Versus Independent Risk

### Theft Versus Earthquake Insurance

[TEXTBOOK EXAMPLE] Anggap satu rumah di San Francisco mempunyai 1% probability mengalami pencurian dan 1% probability terkena kerusakan gempa. Untuk satu rumah, kedua risiko tampak sama. Namun, portfolio 100,000 policies menghasilkan profil risiko yang sangat berbeda.

- **Theft claims** diasumsikan independent. Sekitar 1,000 claims akan muncul per tahun dan actual number tidak jauh dari expectation. Unlucky dan lucky outcomes saling merata dalam portfolio.
- **Earthquake claims** bersifat common. Kebanyakan tahun tidak ada klaim, tetapi jika gempa terjadi, seluruh 100,000 rumah dapat terdampak bersamaan.

**Common risk** adalah risiko yang berkorelasi di antara exposures. **Independent risk** tidak berkorelasi, sehingga dapat saling menghapus ketika digabungkan. Proses averaging out independent risks dalam large portfolio disebut **diversification**.

Untuk satu policy dengan 1% chance of claim, standard deviation claim indicator adalah sekitar 9.95%. Earthquake insurer tetap menghadapi standard deviation percentage claims sekitar 9.95%, karena semua claims bergerak bersama. Theft insurer memperoleh:

$$
SD(\text{percentage theft claims})
=\frac{9.95\%}{\sqrt{100{,}000}}
\approx0.03\%
$$

Jadi, banyak exposures mengurangi risiko hanya jika outcomes-nya sufficiently independent. Prinsip yang sama digunakan pada life, health, dan auto insurance serta pada diversification of crops, supply chains, dan product lines.

### Example — Diversification and Gambling

**Situation**

Pada roulette dengan 38 outcomes, casino menang \$1 jika player kalah dan kehilangan \$35 jika player menang. Probability player menang adalah $1/38$.

**Calculation**

$$
E[\text{casino payoff}]
=\frac{1}{38}(-35)+\frac{37}{38}(1)
=\$0.0526
$$

Single-bet standard deviation adalah \$5.76. Jika ada 9 juta independent bets:

$$
SD(\text{average payoff})
=\frac{\$5.76}{\sqrt{9{,}000{,}000}}
=\$0.0019
$$

**Meaning**

Single bet sangat risky relatif terhadap expected profit, tetapi jutaan independent bets menghasilkan average casino revenue yang sangat predictable. Jika seluruh uang justru ditempatkan dalam satu bet, diversification hilang. Karena itu casino membatasi ukuran individual bet.

## 8. Diversification in Stock Portfolios

### Firm-Specific Versus Systematic Risk

Stock return berubah karena dua kelompok news:

| Source of News | Nature of Risk | Alternative Terms | Diversified Away? |
|---|---|---|---|
| News khusus perusahaan, misalnya product recall atau perubahan management | Firm-specific risk | Idiosyncratic, unique, diversifiable risk | Ya, dalam large portfolio |
| News ekonomi luas, misalnya recession atau perubahan interest rate | Systematic risk | Market, common, undiversifiable risk | Tidak |

Firm-specific good and bad news cenderung saling menghapus ketika banyak stocks digabungkan. Market-wide news memengaruhi firms secara bersamaan sehingga tetap berada dalam portfolio.

### Figure 10.8 — Portfolio Size and Volatility

Textbook membangun dua hypothetical firm types:

- **Type S** hanya menghadapi systematic risk: return 40% ketika ekonomi kuat dan -20% ketika ekonomi lemah. Karena semua firms bergerak bersama, portfolio berisi banyak type S firms tetap mempunyai volatility 30%.
- **Type I** hanya menghadapi independent firm-specific risk: return 35% atau -25%. Satu saham mempunyai volatility 30%, tetapi portfolio 10 independent type I stocks mempunyai volatility:

$$
\frac{30\%}{\sqrt{10}}=9.5\%
$$

Typical firms menghadapi kedua jenis risiko. Ketika jumlah stocks bertambah, portfolio volatility menurun karena idiosyncratic component hilang, tetapi kemudian mendatar pada systematic-risk floor.

### No Arbitrage and the Risk Premium

Jika pure firm-specific risk memberi expected return di atas risk-free rate, investor dapat membeli large diversified portfolio of type I firms, menghilangkan hampir seluruh risiko, dan tetap memperoleh excess return. Permintaan atas portfolio tersebut akan menaikkan current prices dan menurunkan expected returns sampai sama dengan risk-free rate. Law of One Price menghilangkan kesempatan memperoleh reward tanpa relevant risk.

Maka dua prinsip utama muncul:

1. **Risk premium untuk diversifiable risk adalah nol.** Investor tidak dibayar untuk menanggung firm-specific risk yang dapat dihilangkan secara gratis.
2. **Risk premium security ditentukan oleh systematic risk, bukan total risk atau diversifiable risk.**

Type S dan Type I individual stocks sama-sama mempunyai volatility 30%, tetapi Type S memiliki expected return 10% dan Type I 5%. Jika risk-free rate 5%, Type I tidak memperoleh premium karena risikonya dapat didiversifikasi; Type S memperoleh 5% premium karena risikonya bergerak bersama ekonomi.

### Example — Classifying Risk

**Situation**

Textbook mengklasifikasikan empat shocks: founder/CEO retires, oil price rises, faulty product recall, dan economic slowdown.

**Reasoning and Meaning**

- CEO retirement dan product recall bersifat firm-specific. Keduanya memengaruhi cash-flow estimate perusahaan tetapi tidak menambah required risk premium.
- Oil price increase dan economic slowdown berpotensi memengaruhi banyak firms secara serentak. Keduanya systematic dan memengaruhi risk premium.

> [!WARNING] Important Distinction
> Sebuah risk dapat **penting bagi expected cash flow** tanpa memengaruhi **cost of capital**. Firm-specific bad news tetap menurunkan estimated cash flows, tetapi tidak memperoleh risk premium karena dapat didiversifikasi.

### Diversification During Crises

[TEXTBOOK CONTEXT] Secara historis, sekitar separuh individual-stock volatility sejak 1970 dapat didiversifikasi. Namun, bagian yang dapat didiversifikasi turun tajam selama market crashes, sementara market volatility melonjak. Dari 2006 ke kuartal terakhir 2008, textbook mencatat market risk meningkat sekitar tujuh kali lipat, dari 10% menjadi 70%. Diversification tetap lebih baik daripada concentration, tetapi benefit-nya dapat menyusut pada extreme crises ketika correlations meningkat.

### The Fallacy of Long-Run Diversification

Diversifying across securities tidak sama dengan sekadar menunggu lebih lama. Untuk IID annual returns, volatility dari **average annual return** memang menurun dengan $\sqrt{T}$, tetapi investor peduli pada uncertain cumulative wealth. Kerugian persentase hari ini tetap menurunkan seluruh future wealth path; karena itu cumulative-return risk tidak otomatis hilang karena horizon panjang.

Time horizon baru dapat mengurangi risiko jika terjadi reliable mean reversion—low return hari ini menaikkan kemungkinan high future return. Textbook menyatakan tidak ada bukti mean reversion untuk short horizons dan bukti long-run-nya belum meyakinkan.

## 9. Measuring Systematic Risk

### Identifying Systematic Risk: The Market Portfolio

Untuk mengukur systematic risk, diperlukan benchmark portfolio yang hanya membawa non-diversifiable risk. **Efficient portfolio** tidak dapat dikurangi risikonya tanpa mengurangi expected return. Karena diversification membaik ketika lebih banyak securities digabungkan, natural candidate-nya adalah **market portfolio**, yaitu portfolio seluruh stocks dan securities yang diperdagangkan di capital markets.

Dalam praktik textbook, S&P 500 sering digunakan sebagai approximation karena actual all-security market portfolio sulit diukur. Asumsinya: S&P 500 cukup luas untuk dianggap essentially fully diversified.

### Sensitivity to Systematic Risk: Beta

Jika market portfolio efisien, movements-nya merepresentasikan systematic shocks. **Beta ($\beta$)** suatu security adalah expected percentage change in its return untuk setiap 1% change in market portfolio return. Dengan kata lain, beta bukan ukuran seluruh ketidakpastian security; beta mengukur market sensitivity.

Interpretasi:

- $\beta=1$: return cenderung berubah searah dan sebesar market movement;
- $\beta>1$: systematic response lebih kuat daripada market;
- $0<\beta<1$: tetap searah tetapi kurang sensitif;
- $\beta=0$: tidak sensitif terhadap market-wide shocks;
- $\beta<0$: cenderung bergerak berlawanan dan memberi insurance ketika market memburuk.

### Example — Estimating Beta

**Situation**

Market portfolio naik 47% pada strong economy dan turun 25% pada weak economy. Type S firm memberi 40% dan -20% pada kondisi yang sama.

**Calculation**

Market return berubah 72 percentage points, sedangkan Type S return berubah 60 percentage points:

$$
\beta_S=\frac{40\%-(-20\%)}{47\%-(-25\%)}
=\frac{60\%}{72\%}=0.833
$$

Type I firm hanya memiliki idiosyncratic risk dan expected return-nya tidak berubah bersama ekonomi:

$$
\beta_I=\frac{0\%}{72\%}=0
$$

**Meaning**

Setiap 1% market movement berkaitan dengan expected 0.833% movement pada Type S. Type I mungkin volatile, tetapi systematic sensitivity-nya nol.

### Interpreting Real-Firm Betas

Average stock dalam market mempunyai beta sekitar 1. Cyclical industries, luxury retailers, dan highly levered cyclical firms cenderung mempunyai beta tinggi karena revenue, profit, dan cash flow sensitif terhadap business cycle. Utilities, food, pharmaceuticals, dan defensive retailers cenderung mempunyai beta rendah karena demand mereka lebih stabil terhadap booms and busts.

> [!WARNING] Important Distinction
> **Beta ≠ volatility.** Volatility mengukur total risk; beta hanya mengukur systematic-risk exposure. Dua stocks dapat memiliki volatility yang mirip tetapi beta berbeda jika proporsi idiosyncratic dan systematic risk-nya berbeda.

## 10. Beta and the Cost of Capital

Cost of capital suatu investment opportunity adalah expected return dari alternative market investment yang memiliki comparable risk and term. Untuk risky investment, cost of capital terdiri atas risk-free interest rate dan appropriate risk premium.

### Market Risk Premium

Investor risk tolerance diobservasi secara tidak langsung melalui premium yang mereka minta untuk menanggung market risk:

$$
\text{Market Risk Premium}=E[R_{Mkt}]-r_f
$$

- $E[R_{Mkt}]$: expected return market portfolio;
- $r_f$: risk-free interest rate.

Jika $r_f=5\%$ dan $E[R_{Mkt}]=11\%$, market risk premium adalah 6%. Risk-free rate merefleksikan time value of money; market risk premium merefleksikan market price of systematic risk.

### Adjusting the Risk Premium for Beta

Market portfolio mempunyai beta 1. Investment dengan beta 2 membawa dua kali systematic exposure, sehingga Law of One Price menuntut dua kali market risk premium. Secara umum:

$$
\text{Investment Risk Premium}
=\beta_I\left(E[R_{Mkt}]-r_f\right)
$$

### CAPM and the Cost of Capital

[CORE CF4] Capital Asset Pricing Model (CAPM) mengestimasi required return atau cost of capital sebagai:

$$
r_I=r_f+\beta_I\left(E[R_{Mkt}]-r_f\right)
$$

- $r_I$: cost of capital / required expected return investment $I$;
- $r_f$: compensation for time value of money;
- $\beta_I$: quantity of systematic risk per unit investment;
- $E[R_{Mkt}]-r_f$: price or premium per unit market risk.

[TEXTBOOK EXAMPLE] Dengan market risk premium 6% dan $r_f=5\%$:

$$
r_{eBay}=5\%+1.48(6\%)=13.9\%
$$

$$
r_{General\ Mills}=5\%+0.20(6\%)=6.2\%
$$

eBay membutuhkan expected return lebih tinggi bukan semata-mata karena lebih volatile, melainkan karena beta dan systematic exposure-nya lebih tinggi.

### Example — Expected Return and Beta

**Situation**

Economy equally likely strong atau weak. Market returns adalah 47% dan -25%; Type S returns 40% dan -20%; $r_f=5\%$; dan $\beta_S=0.833$.

**Calculation**

$$
E[R_{Mkt}]=0.5(47\%)+0.5(-25\%)=11\%
$$

$$
r_S=5\%+0.833(11\%-5\%)=10\%
$$

Direct expected return Type S juga:

$$
E[R_S]=0.5(40\%)+0.5(-20\%)=10\%
$$

**Meaning**

CAPM menghasilkan return yang sama dengan expected payoff distribution: investor memperoleh compensation yang tepat untuk systematic risk yang ditanggung.

Jika beta negatif, CAPM menghasilkan risk premium negatif dan expected return di bawah risk-free rate. Ini tidak irasional: security tersebut cenderung berkinerja baik saat market buruk sehingga menyediakan insurance. Risk-averse investors bersedia membayar benefit itu melalui expected return yang lebih rendah.

> [!INFO] Textbook Boundary
> Chapter 10 memberikan intuitive justification untuk CAPM. Formal assumptions dan portfolio optimization dikembangkan pada Chapter 11; statistical beta estimation pada Chapter 12; empirical evidence serta extensions pada Chapter 13.

## Chapter Synthesis

Seluruh chapter dapat dibaca sebagai satu proses penyaringan. Historical evidence mula-mula menunjukkan bahwa diversified asset portfolios dengan variability lebih besar telah memberi average return lebih tinggi. Namun, ketika pola yang sama dicoba pada individual stocks, total volatility gagal menjelaskan return. Perbedaan ini mengungkap bahwa sebuah stock mengandung dua lapisan risiko.

Firm-specific risk dapat dihilangkan dengan menggabungkan banyak independent exposures. Karena investor dapat menghilangkannya tanpa mengorbankan expected return, competitive pricing tidak memberi premium untuk risiko tersebut. Systematic risk tetap bertahan karena seluruh firms terkena common economic shocks. Inilah risiko yang relevan bagi diversified investor dan harus diberi compensation.

Market portfolio digunakan sebagai benchmark systematic risk, sementara beta mengukur sensitivity investment terhadap benchmark tersebut. Market risk premium menunjukkan harga satu unit systematic risk. CAPM menyatukan quantity dan price of risk: cost of capital sama dengan risk-free rate ditambah beta dikali market risk premium. Bagi corporate manager, required return ini menjadi discount rate yang menghubungkan business cash-flow risk dengan value.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Realized return | Actual total return dari cash flow dan price change | Dasar pengukuran historical performance | [[5.4 Return Relationships and Economic Variables]] |
| Expected return | Probability-weighted mean return | Return yang diharapkan, bukan guaranteed outcome | [[5.4 Return Relationships and Economic Variables]] |
| Variance | Expected squared deviation dari mean | Mengukur dispersion | [[5.4 Return Relationships and Economic Variables]] |
| Volatility | Standard deviation of return | Ukuran total variability | [[5.1 Investment Asset Characteristics]] |
| Empirical distribution | Distribution yang dibangun dari realized historical observations | Basis estimasi historical return and risk | [[5.4 Return Relationships and Economic Variables]] |
| Standard error | Uncertainty pada estimate of the mean | Menjelaskan mengapa historical average tidak presisi | [[5.4 Return Relationships and Economic Variables]] |
| Arithmetic average | Mean period-by-period returns | Estimate expected single-period return | [[5.4 Return Relationships and Economic Variables]] |
| CAGR | Constant compounded rate yang menyamai long-run growth | Menggambarkan realized long-run performance | [[5.4 Return Relationships and Economic Variables]] |
| Excess return | Return di atas risk-free return | Historical risk premium | [[5.4 Return Relationships and Economic Variables]] |
| Diversification | Averaging out independent risks | Menghilangkan firm-specific component | [[5.1 Investment Asset Characteristics]] |
| Firm-specific risk | Risk dari company-specific news | Diversifiable; no risk premium | [[5.4 Return Relationships and Economic Variables]] |
| Systematic risk | Risk dari market-wide economic news | Tidak dapat didiversifikasi; menentukan premium | [[5.3 Economic Influences on Markets]] |
| Efficient portfolio | Portfolio yang risikonya tidak dapat diturunkan tanpa menurunkan expected return | Benchmark untuk relevant risk | [[5.4 Return Relationships and Economic Variables]] |
| Market portfolio | Portfolio seluruh traded securities | Practical benchmark untuk systematic shocks | [[5.4 Return Relationships and Economic Variables]] |
| Beta | Sensitivity return terhadap market return | Quantity of systematic risk | [[5.4 Return Relationships and Economic Variables]] |
| Market risk premium | $E[R_{Mkt}]-r_f$ | Price of market risk | [[5.4 Return Relationships and Economic Variables]] |
| CAPM | $r_I=r_f+\beta_I(E[R_{Mkt}]-r_f)$ | Mengestimasi cost of capital dari systematic risk | [[5.4 Return Relationships and Economic Variables]] |

## Compression Notes

### Retained in Detail

- conceptual progression dari historical evidence menuju CAPM;
- formulas untuk expected return, variance, realized return, compounding, historical estimates, standard error, CAGR, beta, market risk premium, dan CAPM;
- examples yang membangun intuition tentang diversification, systematic risk, beta, dan cost of capital;
- distinction antara total volatility dan priced systematic risk;
- estimation error dan arithmetic-average-versus-CAGR caveat.

### Condensed

- long historical narratives dan repeated descriptions pada Figures 10.1–10.8;
- Microsoft subperiod price/dividend table;
- full list 50 company betas pada Table 10.6, diganti dengan interpretation by industry;
- detailed crisis chronology dan repeated concept checks.

### Omitted / Beyond CF4

- website references, further-reading bibliography, end-of-chapter problems, dan data case;
- full derivation and assumptions of CAPM, yang menurut textbook baru dibahas pada Chapter 11;
- statistical procedure for estimating real-firm beta, yang dialihkan textbook ke Chapter 12.

## CF4 Connection Map

```text
Historical asset returns and volatility
        ↓
[[5.1 Investment Asset Characteristics]]
        ↓
Economic shocks: firm-specific vs market-wide
        ↓
[[5.3 Economic Influences on Markets]]
        ↓
Diversification → systematic risk → beta
        ↓
Market risk premium → CAPM → required return
        ↓
[[5.4 Return Relationships and Economic Variables]]
```

## Quick Reading Review

- Higher historical return pada diversified portfolios datang bersama higher risk, tetapi bukan jaminan performance pada setiap horizon.
- Expected return adalah probability-weighted mean; volatility adalah standard deviation.
- Realized total return terdiri atas cash-flow yield dan capital gain rate.
- Returns lintas subperiod harus di-compound, bukan dijumlahkan.
- Historical average mengestimasi expected return dengan error yang dapat tetap besar meskipun data panjang.
- Arithmetic average mengestimasi expected period return; CAGR menjelaskan realized long-run growth.
- Positive volatility–return relationship terlihat pada large portfolios, bukan individual stocks.
- Diversification menghapus independent firm-specific risk, bukan common systematic risk.
- Firm-specific risk tidak memperoleh risk premium karena investor dapat menghilangkannya tanpa biaya.
- Systematic risk ditentukan oleh exposure terhadap economy-wide shocks.
- Beta mengukur market sensitivity, sedangkan volatility mengukur total risk.
- Market risk premium adalah $E[R_{Mkt}]-r_f$.
- CAPM menetapkan $r_I=r_f+\beta_I(E[R_{Mkt}]-r_f)$.
- Negative beta dapat memiliki expected return di bawah risk-free rate karena memberikan insurance pada bad times.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Risk and return over alternative horizons | Chapter 10 introduction; Section 10.1; Figures 10.1–10.2 |
| Probability distributions, expected return, and volatility | Section 10.2; Table 10.1; Examples 10.1; Figures 10.3–10.4 |
| Realized and historical returns | Section 10.3; Equations 10.4–10.9; Examples 10.2–10.4; Tables 10.2–10.4 |
| Arithmetic average versus CAGR | Section 10.3 feature: Arithmetic Average Returns Versus Compound Annual Returns |
| Historical risk–return trade-off | Section 10.4; Table 10.5; Figures 10.6–10.7 |
| Common and independent risk | Section 10.5; Example 10.5 |
| Diversification and priced risk | Section 10.6; Examples 10.6–10.7; Figure 10.8; Global Financial Crisis feature |
| Market portfolio and beta | Section 10.7; Example 10.8; Table 10.6 |
| Market risk premium, CAPM, and cost of capital | Section 10.8; Equations 10.10–10.11; Example 10.9 |
