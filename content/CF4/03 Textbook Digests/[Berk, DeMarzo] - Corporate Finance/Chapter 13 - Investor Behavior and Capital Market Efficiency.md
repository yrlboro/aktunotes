---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk and Peter DeMarzo"
chapter: "13"
chapter_title: "Investor Behavior and Capital Market Efficiency"
cf4_topics: ["5.1", "5.3", "5.4"]
cf4_relevance: "High"
source_scope: "Chapter 13, Sections 13.1-13.8"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo]
date_created: "2026-08-25"
status: "study-note"
---

# Berk and DeMarzo — Chapter 13: Investor Behavior and Capital Market Efficiency

> [!ABSTRACT] Chapter in One View
> Chapter ini menguji apakah market portfolio benar-benar efficient sebagaimana diasumsikan CAPM. Competition antar investor mendorong prices menyesuaikan information dan menghapus non-zero alpha, tetapi efficiency hanya dapat bertahan jika cukup banyak investor memiliki rational expectations atau setidaknya melindungi diri dengan memegang market portfolio. Dalam kenyataan, individual investors sering underdiversified, overconfident, excessive trading, terkena disposition effect, dan mengikuti herd. Kesalahan mereka dapat memengaruhi prices bila terjadi secara sistematis, tetapi profesional juga tidak mudah mengubah mispricing menjadi return bersih bagi fund investors. Historical evidence mengenai small stocks, value stocks, dan momentum menunjukkan positive CAPM alphas dan menimbulkan perdebatan: apakah pasar tidak efisien, atau CAPM tidak menangkap seluruh systematic risk? Multifactor models menjawab kemungkinan kedua dengan menggunakan beberapa factor portfolios. Meskipun demikian, praktik corporate finance tetap paling banyak menggunakan CAPM karena sederhana dan reasonably reliable.

## 1. Why This Chapter Exists

William Miller dari Legg Mason Value Trust mengalahkan market selama 15 tahun berturut-turut pada 1991-2005, lalu fund-nya jatuh hampir 65% pada 2007-2008 dan kembali tertinggal sesudahnya. Episode ini menimbulkan pertanyaan yang sulit dibedakan secara empiris: apakah superior past performance merupakan skill, luck, atau compensation for hidden risk?

Menurut CAPM, market portfolio efficient sehingga investor tidak dapat secara konsisten menghasilkan return lebih tinggi tanpa mengambil additional risk. Chapter ini menguji klaim tersebut dari tiga arah:

1. bagaimana competition dan information seharusnya menghapus mispricing;
2. apakah actual investor behavior cukup rasional untuk menghasilkan market efficiency;
3. apakah patterns seperti size, value, dan momentum merupakan genuine positive-NPV opportunities atau bukti bahwa CAPM mengukur risk secara tidak lengkap.

Jika market portfolio memang bukan efficient benchmark, chapter kemudian mencari cara alternatif menentukan cost of capital melalui multifactor models.

```text
New information or investor bias
        ↓
Price may deviate from required return
        ↓
Alpha appears
        ↓
Competition exploits or fails to eliminate alpha
        ↓
Test market-portfolio efficiency
        ↓
CAPM or multifactor cost of capital
```

## 2. Chapter Map

```text
Chapter 13 — Investor Behavior and Capital Market Efficiency
├── 13.1 Competition and Capital Markets
│   ├── Alpha
│   └── Price adjustment and competition
├── 13.2 Information and Rational Expectations
│   ├── Informed versus uninformed investors
│   └── Conditions for market inefficiency
├── 13.3 The Behavior of Individual Investors
│   ├── Underdiversification and familiarity bias
│   └── Excessive trading and overconfidence
├── 13.4 Systematic Trading Biases
│   ├── Disposition effect
│   ├── Attention, mood, and experience
│   └── Herd behavior
├── 13.5 The Efficiency of the Market Portfolio
│   ├── Trading on news and recommendations
│   ├── Fund-manager performance
│   └── Winners and losers
├── 13.6 Style-Based Techniques and the Market Efficiency Debate
│   ├── Size and value effects
│   ├── Momentum
│   └── Explanations for positive alpha
├── 13.7 Multifactor Models of Risk
│   ├── Factor and self-financing portfolios
│   ├── SMB, HML, and PR1YR
│   └── Fama-French-Carhart specification
└── 13.8 Methods Used in Practice
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 13.1-13.2 | Information, competition, prices, expected return, dan alpha | [[5.3 Economic Influences on Markets]], [[5.4 Return Relationships and Economic Variables]] |
| 13.3-13.5 | Investor behavior, trading, market prices, dan performance | [[5.3 Economic Influences on Markets]], [[5.4 Return Relationships and Economic Variables]] |
| 13.6 | Historical size, value, dan momentum relationships | [[5.1 Investment Asset Characteristics]], [[5.4 Return Relationships and Economic Variables]] |
| 13.7-13.8 | Alternative risk models dan practical cost-of-capital methods | [[5.4 Return Relationships and Economic Variables]] |

## 3. Competition and Capital Markets

### Identifying a Stock's Alpha

[CORE CF4] Dalam CAPM equilibrium, market portfolio efficient dan setiap security berada pada security market line (SML). Required return security $s$ adalah:

$$
r_s=r_f+\beta_s\left(E[R_{Mkt}]-r_f\right)
$$

Sekarang anggap muncul information baru yang mengubah expected returns beberapa stocks tanpa segera mengubah prices. Market portfolio yang sebelumnya efficient mungkin tidak lagi optimal karena alternative portfolios dapat menawarkan higher expected return untuk volatility yang sama, atau lower volatility untuk expected return yang sama.

Selisih antara expected return security dan required return menurut SML disebut **alpha**:

$$
\alpha_s=E[R_s]-r_s
$$

Interpretasinya:

- $\alpha_s>0$: security menawarkan expected return di atas compensation yang disyaratkan untuk beta-nya;
- $\alpha_s<0$: expected return berada di bawah required return;
- $\alpha_s=0$: security berada pada SML.

Jika market portfolio efficient, seluruh securities mempunyai alpha nol. Investor dapat memperbaiki Sharpe ratio dengan membeli positive-alpha stocks dan menjual atau mengurangi negative-alpha stocks.

### Profiting from Non-Zero Alpha Stocks

Ketika savvy investors membeli positive-alpha stocks, buy orders menaikkan current price. Higher current price menurunkan dividend yield dan future capital gain rate sehingga expected return serta alpha menyusut. Sebaliknya, selling pressure pada negative-alpha stocks menurunkan price, menaikkan expected return, dan mendorong alpha kembali ke nol.

```text
Positive alpha
    ↓
Investor demand rises
    ↓
Current price rises
    ↓
Expected return falls
    ↓
Alpha returns toward zero
```

Competition memberi dua conclusions. Pertama, market mungkin tidak literally efficient pada setiap saat, tetapi aktivitas investor yang mencari alpha menjaga market portfolio mendekati efficiency. Dalam arti ini, CAPM dapat dipandang sebagai approximate description of a competitive market. Kedua, temporary non-zero alphas dan strategies yang mengalahkan market tetap mungkin ada sebelum prices sepenuhnya menyesuaikan.

> [!WARNING] Important Distinction
> **Positive alpha bukan sekadar high return.** Alpha adalah return di atas required return setelah systematic risk yang diukur model diperhitungkan.

## 4. Information and Rational Expectations

### Public Information and Immediate Price Adjustment

Jika public news membuat suatu stock positive-alpha, banyak investors akan mencoba membeli pada old price sementara calon sellers menolak menjual. Order imbalance hanya dapat hilang ketika price naik sampai alpha kembali nol. Price bahkan dapat berubah sebelum actual trade terjadi; competition memasukkan information ke price terlalu cepat bagi sebagian besar investors untuk mengambil untung pada old price.

### Informed Versus Uninformed Investors

Homogeneous expectations dalam CAPM berarti semua investors memiliki information yang sama. Dalam real world, information dan research skill berbeda sehingga sophisticated investors mungkin lebih cepat menemukan positive alpha. Tetapi profitable trade tetap membutuhkan counterparty yang bersedia berada di sisi yang salah.

CAPM memberi perlindungan sederhana bagi uninformed investor: pegang market portfolio. Advice ini tidak bergantung pada information quality atau stock-picking skill.

### Example — How an Uninformed Investor Avoids Being Outsmarted

**Situation**

Seorang investor tidak mempunyai stock-specific information, sedangkan investors lain melakukan extensive research. Ia khawatir portfolionya akan underperform average investor.

**Reasoning**

Aggregate holdings seluruh investors harus sama dengan market portfolio karena total demand sama dengan total supply. Dengan memegang market portfolio, investor memperoleh return yang sama dengan value-weighted average investor.

Jika ia underweights suatu stock relatif terhadap market weight, investors lain secara aggregate harus overweight stock itu. Karena investors lain lebih informed, deviasi tersebut justru membuka kemungkinan mereka mengambil keuntungan darinya.

**Meaning**

Passive market holding menjamin alpha nol relatif terhadap average investor sebelum costs. Uninformed investor tidak perlu menebak winners untuk menghindari negative alpha.

### Rational Expectations and the Zero-Sum Alpha Logic

**Rational expectations** berarti investors menggunakan dan menafsirkan information mereka dengan benar, termasuk signals dari market prices dan trades investor lain. CAPM tidak benar-benar memerlukan semua orang mempunyai information identik.

Average portfolio seluruh investors adalah market portfolio, sehingga average alpha adalah nol. Jika rational investors menolak negative-alpha portfolios karena mereka selalu dapat memegang market portfolio, tidak ada investor yang dapat secara sistematis memperoleh positive alpha. Oleh sebab itu, market portfolio dapat inefficient hanya jika sejumlah material investors:

1. salah menafsirkan information dan mengira portfolionya positive-alpha padahal negative-alpha; atau
2. memedulikan characteristics selain expected return dan volatility sehingga bersedia memegang inefficient portfolios.

> [!INFO] CF4 Connection
> Informasi ekonomi memengaruhi prices bukan hanya melalui perubahan fundamental cash flows, tetapi juga melalui kecepatan investor memahami information, order imbalance, dan competition yang mengubah expected returns.

## 5. The Behavior of Individual Investors

### Underdiversification and Portfolio Biases

Diversification mengurangi risk tanpa mengurangi expected return, tetapi individual investors sering tidak memanfaatkannya. [TEXTBOOK CONTEXT] Data U.S. Survey of Consumer Finances menunjukkan bahwa pada 2001 median household stockholder hanya memiliki empat stocks dan 90% memiliki kurang dari sepuluh. Holdings juga sering terkonsentrasi pada industry atau geographic area yang sama. Employees pada large retirement plans menempatkan hampir sepertiga assets pada employer stock, dan Swedish evidence menunjukkan sekitar separuh portfolio volatility berasal dari firm-specific risk.

Penjelasan utamanya meliputi:

- **familiarity bias**: memilih companies atau sectors yang dikenal;
- **relative wealth concerns**: ingin menjaga performance agar mirip peers;
- concentration pada employer atau local stocks yang terasa lebih mudah dipahami.

Hasilnya adalah underdiversification: investor menanggung idiosyncratic risk tanpa expected compensation.

### Excessive Trading and Overconfidence

Market portfolio merupakan value-weighted passive portfolio; daily price changes tidak menuntut continuous rebalancing. Jika seluruh investors mengikuti CAPM, trading volume seharusnya relatif rendah. Kenyataannya, turnover sangat tinggi.

**Overconfidence bias** adalah kecenderungan uninformed individuals melebihkan precision pengetahuan mereka. Investor merasa mampu memilih winners and losers, kemudian trade terlalu sering. Jika mereka tidak mempunyai true skill, gross return tidak meningkat; setelah commissions dan bid-ask spreads, net performance justru turun.

### Figure 13.4 — Return Versus Portfolio Turnover

Dalam brokerage data 1991-1997, investors dengan lowest turnover sedikit mengungguli S&P 500 secara statistically insignificant, sedangkan performance menurun secara bertahap ketika turnover meningkat. Evidence lain dalam textbook menghubungkan greater trading dengan overconfidence dan sensation seeking; additional activity tersebut tidak menghasilkan profit.

### Individual Behavior and Market Prices

Individual deviations dari CAPM belum tentu mengubah aggregate price. Jika mistakes bersifat random dan idiosyncratic, deviations saling membatalkan. Individuals mungkin hanya trade satu sama lain dan mentransfer commissions kepada brokers tanpa mengubah market efficiency.

Behavior baru memengaruhi prices apabila errors mempunyai common pattern yang membuat trades berkorelasi. Systematic investor bias dapat menambah systematic uncertainty pada prices dan menciptakan opportunities bagi sophisticated investors.

## 6. Systematic Trading Biases

### Disposition Effect

**Disposition effect** adalah tendency untuk menahan losing stocks dan menjual winning stocks. Investor mungkin menjadi lebih risk-seeking ketika menghadapi loss atau enggan mengakui kesalahan dengan merealisasikan loss.

[TEXTBOOK CONTEXT] Dalam Taiwanese market 1995-1999, investors secara aggregate sekitar dua kali lebih mungkin merealisasikan gains daripada losses dan hampir 85% individual investors menunjukkan bias tersebut. Mutual funds dan foreign investors tidak menunjukkan pattern yang sama kuat, sehingga sophistication tampak mengurangi bias.

Behavior ini juga costly secara tax logic: taxable gain seharusnya ditunda bila memungkinkan, sementara losses dapat direalisasikan lebih awal untuk tax write-off. Menahan losers hanya akan rasional jika ada justified expectation bahwa mereka akan rebound, tetapi textbook melaporkan losers yang dipertahankan malah underperformed winners yang dijual sebesar 3.4% selama tahun berikutnya.

### Prospect Theory as a Behavioral Foundation

[CF4 SUPPORTING CONTEXT] Prospect Theory menggambarkan bagaimana people actually decide under uncertainty. Outcomes dinilai relatif terhadap reference point, losses mendorong willingness to take risk, framing matters, dan low-probability events sering diberi weight terlalu besar. Disposition effect dapat muncul ketika investor menggunakan purchase price setiap stock sebagai reference point.

### Attention, Mood, and Experience

Limited attention membuat individual investors lebih mungkin membeli stocks yang baru masuk news, banyak beriklan, mempunyai abnormal volume, atau baru mengalami extreme returns. Behavior juga tampak terpengaruh mood dan personal macroeconomic experience.

[TEXTBOOK CONTEXT] Chapter menyajikan historical studies yang menghubungkan local sunshine serta major sports losses dengan next-day returns. Angka tersebut bukan causal rule untuk forecasting, melainkan evidence bahwa shared moods dapat membuat trading errors berkorelasi. People yang hidup dalam periode strong stock returns juga lebih bersedia berinvestasi pada stocks dibandingkan mereka yang mengalami poor markets.

### Herd Behavior

**Herd behavior** terjadi ketika individuals meniru actions investor lain. Motifnya dapat berupa:

- keyakinan bahwa orang lain memiliki superior information;
- relative wealth concerns dan ketakutan tertinggal dari peers;
- reputational risk bagi professional managers yang berbeda terlalu jauh dari consensus.

Ketika traders mengabaikan private information dan mengikuti observed actions orang lain, muncul **informational cascade**. Herding membuat mistakes tidak lagi independent; common errors dapat masuk ke market prices.

### Implications

Jika biased investors menerima negative alpha, sophisticated investors secara teori dapat berada di sisi sebaliknya dan memperoleh positive alpha. Namun, opportunity hanya bertahan apabila mistakes cukup pervasive dan competition atau arbitrage dibatasi oleh costs, risks, atau constraints.

## 7. The Efficiency of the Market Portfolio

### Conditions for Sophisticated Investors to Profit

Dua conditions harus dipenuhi:

1. investor mistakes cukup persistent dan widespread untuk menggeser prices serta menciptakan observable non-zero alpha;
2. competition untuk mengeksploitasi opportunity terbatas, sehingga alpha tidak hilang sebelum trade dapat dilakukan secara profitable.

### Trading on Takeover News

Takeover target biasanya menerima offer premium sehingga price melonjak saat announcement, tetapi tidak langsung menyamai offer price karena deal dapat berhasil, renegotiated, atau gagal. **Cumulative abnormal return** mengukur return target relatif terhadap return yang diprediksi berdasarkan beta.

Figure 13.5 menunjukkan bahwa setelah initial jump, target stocks secara average tidak menghasilkan abnormal subsequent return. Target yang akhirnya acquired memiliki positive alpha, sedangkan failed targets negative alpha. Profit karena itu memerlukan ability untuk memprediksi deal outcome, bukan hanya membaca announcement publik.

### Trading on Stock Recommendations

Untuk recommendations yang bertepatan dengan genuine company news, price adjustment terjadi segera dan subsequent alpha mendekati nol. Recommendations tanpa news pada smaller, less-liquid stocks menghasilkan short-term price jump lalu reversal dan negative alpha. Individual buying pressure tampaknya mendorong price terlalu tinggi.

Sophisticated investors memang short stocks tersebut, tetapi difficult borrowing dan shorting costs membatasi arbitrage. Mispricing dapat bertahan bukan karena tidak terlihat, melainkan karena costly to correct.

> [!WARNING] Important Distinction
> **Public information dapat memindahkan price tanpa menyediakan profitable trade.** Mengetahui news setelah market bereaksi tidak sama dengan dapat bertransaksi pada pre-news price.

### The Performance of Fund Managers

Evidence memberi jawaban berbeda untuk manager skill dan investor benefit:

- **Gross value added:** average mutual fund manager dapat menemukan opportunities bernilai sekitar \$2 juta per tahun sebelum fees, tetapi median manager menghancurkan value karena trading costs melebihi gains.
- **Net return to fund investors:** average actively managed U.S. equity fund mempunyai negative alpha; broader studies umumnya menemukan alpha tidak berbeda dari nol setelah costs.
- **Persistence:** past winners dan awards tidak reliably memprediksi future outperformance. Dalam textbook, portfolio Forbes Honor Roll menghasilkan 11.2% per tahun selama 19 tahun versus 13.1% untuk market index.

Competition menjelaskan hasil tersebut. Ketika manager dianggap skilled, capital flows masuk. Larger AUM membuat profitable opportunities semakin sulit diperoleh; alpha turun sampai investor tidak lagi menerima superior net return. Manager dapat menangkap economic rent melalui aggregate fees, sedangkan fund investors memperoleh kira-kira zero alpha.

Fund size dapat menjadi signal of value added karena skilled managers menarik lebih banyak capital. Namun, ini tidak berarti percentage return investor akan tinggi. Institutional plan sponsors juga cenderung merekrut managers dengan strong past performance, tetapi post-hiring excess return turun mendekati average fund dan kurang lebih habis oleh management fees.

### The Winners and Losers

Beating market membutuhkan information analysis atau trading infrastructure yang cukup baik untuk mengatasi behavioral errors dan transaction costs. Individual investors biasanya berada pada posisi lemah dalam kedua hal tersebut. [TEXTBOOK CONTEXT] Taiwanese evidence menunjukkan individual investors kehilangan sekitar 3.8% per tahun dari trading, kira-kira sepertiga karena poor trades dan dua pertiga karena transaction costs; institutions menghasilkan sekitar 1.5% dari trades. Namun, profits professional managers tidak otomatis diteruskan kepada fund investors.

Kesimpulan pragmatic textbook: bagi kebanyakan people, holding the market merupakan pilihan paling defensible.

## 8. Style-Based Techniques and the Market Efficiency Debate

### Size Effect

Small stocks secara historis menghasilkan average returns lebih tinggi. **Size effect** lebih spesifik: small-cap portfolios cenderung menghasilkan return di atas yang diprediksi CAPM setelah beta diperhitungkan.

Fama dan French membagi stocks ke dalam sepuluh portfolios berdasarkan market capitalization. Higher-beta portfolios memang menghasilkan higher returns, tetapi sembilan dari sepuluh portfolios berada di atas SML dan smallest deciles menunjukkan positive alphas paling besar. Masing-masing alpha estimate memiliki standard error besar, tetapi joint hypothesis bahwa semua alphas nol dapat ditolak.

### Value Effect and Book-to-Market Ratio

**Book-to-market ratio** adalah book value of equity dibagi market value of equity:

$$
\text{Book-to-Market Ratio}
=\frac{\text{Book Value of Equity}}{\text{Market Value of Equity}}
$$

- high book-to-market stocks disebut **value stocks**;
- low book-to-market stocks disebut **growth stocks**.

Portfolios of value stocks cenderung menghasilkan positive CAPM alphas, sedangkan growth portfolios low atau negative alphas. Size dan value patterns awalnya dicurigai sebagai **data snooping bias**: jika researchers menguji sangat banyak characteristics, sebagian akan terlihat correlated dengan return hanya karena sampling error.

Namun, terdapat theoretical link antara expected return dan market value. Jika stock memiliki higher true cost of capital atau positive alpha relative to an imperfect model, future dividends harus didiskontokan pada rate lebih tinggi, menghasilkan lower current price dan market capitalization. Lower market value juga menaikkan book-to-market ratio.

### Example — Risk and the Market Value of Equity

**Situation**

SM Industries dan BiG Corporation sama-sama membayar expected dividend \$1 juta per tahun selamanya. Cost of capital SM 14% karena lebih risky; BiG 10%. Estimated CAPM beta keduanya keliru dianggap sama dan memberi required return 12%.

**Calculation**

$$
V_{SM}=\frac{1}{0.14}=\$7.143\text{ million}
$$

$$
V_{BiG}=\frac{1}{0.10}=\$10\text{ million}
$$

$$
\alpha_{SM}=14\%-12\%=2\%
$$

$$
\alpha_{BiG}=10\%-12\%=-2\%
$$

**Meaning**

Firm dengan lower market value mempunyai higher expected return dan higher alpha relatif terhadap misspecified CAPM. Karena itu, sorting by small market cap atau high book-to-market mechanically cenderung mengumpulkan stocks dengan higher expected returns ketika beta tidak mengukur risk secara sempurna.

### Momentum

Momentum portfolios dibentuk dengan membeli past winners dan short-selling past losers. Dalam study 1965-1989 yang dirangkum textbook, stocks dengan best returns selama 6-12 bulan sebelumnya mempunyai positive alphas selama 3-12 bulan berikutnya; long-winner/short-loser strategy menghasilkan alpha lebih dari 12% per tahun.

Momentum bertentangan dengan CAPM prediction jika past return tidak seharusnya memprediksi risk-adjusted future return. Tetapi positive CAPM alpha belum membuktikan riskless profit karena model mungkin mengabaikan relevant risk.

### What Positive-Alpha Strategies Can Mean

Size, value, dan momentum evidence menghasilkan dua possible interpretations:

1. **Market inefficiency:** investors mengabaikan positive-NPV opportunities, mungkin karena behavioral biases atau implementation barriers.
2. **Model failure:** strategies menanggung systematic risk yang tidak ditangkap market beta, sehingga CAPM-required return terlalu rendah.

Karena characteristics dan strategies tersebut telah lama diketahui dan banyak funds dapat mengimplementasikannya, pure ignorance atau entry barrier bukan explanation yang sepenuhnya memuaskan. Textbook karena itu memberi perhatian besar pada kemungkinan kedua.

### Market Efficiency Versus Market-Portfolio Efficiency

> [!WARNING] Important Distinction
> **Efficient markets hypothesis (EMH) ≠ assumption bahwa market portfolio merupakan efficient portfolio dalam mean-variance sense.**
>
> EMH menyatakan competition menghapus positive-NPV trading opportunities untuk securities dengan equivalent risk. Masalahnya, “equivalent risk” hanya dapat diuji setelah risk model ditentukan. CAPM test selalu merupakan joint test atas market efficiency dan correctness of CAPM risk measurement.

Textbook membedakan:

| Form | Information Set That Should Not Generate Consistent Profit |
|---|---|
| Weak form | Past prices and returns |
| Semi-strong form | All public information, termasuk news dan recommendations |
| Strong form | Bahkan private information |

EMH tidak mengatakan price selalu benar jika dilihat menggunakan future information. Mengetahui setelah crisis bahwa prior prices terlalu tinggi tidak membuktikan ex ante opportunity, kecuali mispricing dapat diprediksi dan dieksploitasi secara konsisten saat itu.

### Why the Observed Market Portfolio May Be Inefficient

1. **Proxy error.** True market portfolio mencakup seluruh traded investment wealth, seperti stocks, bonds, real estate, precious metals, dan assets lain. S&P 500 atau stock-only index mungkin imperfect proxy. Non-zero alpha terhadap proxy tidak otomatis berarti positive NPV terhadap true efficient portfolio.
2. **Systematic behavioral biases.** Jika biased investors overpay large growth stocks atau trade melawan momentum, sophisticated investors harus overweight small, value, dan momentum stocks. Their efficient portfolio berbeda dari observed aggregate market portfolio.
3. **Alternative preferences and non-tradable wealth.** Investors mungkin memedulikan skewness atau lottery-like payoffs, bukan hanya mean dan variance. Mereka juga memiliki non-tradable human capital. Banker sudah exposed ke financial sector risk, sedangkan software engineer exposed ke technology risk; portfolio holdings dapat sengaja meng-offset occupational exposure.

Market portfolio yang inefficient tidak berarti tidak ada efficient portfolio sama sekali. CAPM-type pricing relation tetap berlaku terhadap any truly efficient portfolio, yang membuka jalan bagi multifactor models.

## 9. Multifactor Models of Risk

### From One Efficient Portfolio to Multiple Factors

Jika efficient portfolio dapat diidentifikasi, expected return security $s$ adalah:

$$
E[R_s]=r_f+\beta_s^{Eff}\left(E[R_{Eff}]-r_f\right)
$$

Masalahnya, expected return dan volatility sulit diestimasi sehingga identifying one efficient portfolio secara langsung hampir tidak praktis. Tetapi efficient portfolio pasti well diversified dan dapat dibentuk sebagai combination of other well-diversified portfolios. Karena itu, systematic risk dapat diukur menggunakan beberapa **factor portfolios** tanpa mengetahui precise efficient portfolio.

Untuk $N$ factor portfolios:

$$
E[R_s]
=r_f+\sum_{n=1}^{N}\beta_s^{F_n}
\left(E[R_{F_n}]-r_f\right)
$$

Factor beta $\beta_s^{F_n}$ mengukur expected percentage change pada excess return security untuk 1% change pada excess return factor portfolio $n$, holding other factors constant. Risk premium security adalah sum dari exposure terhadap setiap factor dikali premium factor tersebut.

Single-factor dan multifactor models tidak logically inconsistent. One efficient portfolio dapat merangkum seluruh systematic risk sendiri; several diversified factors bersama-sama dapat menangkap components dari systematic risk yang sama. Multifactor framework juga disebut **Arbitrage Pricing Theory (APT)**.

### Self-Financing Factor Portfolios

**Self-financing portfolio** costs nothing to construct karena long position dibiayai borrowing atau equal-value short position. Portfolio weights menjumlah ke nol, bukan satu. Dengan self-financing factors:

$$
E[R_s]=r_f+\sum_{n=1}^{N}\beta_s^{F_n}E[R_{F_n}]
$$

Expected factor return langsung merepresentasikan risk premium karena tidak ada initial net investment.

### Selecting Factor Portfolios

Empirical CAPM anomalies memberi candidates yang logis:

| Factor | Construction | Exposure Represented |
|---|---|---|
| $Mkt-r_f$ | Long market, financed at risk-free rate | Broad market risk |
| SMB | Long small stocks, short big stocks | Size-related risk |
| HML | Long high book-to-market/value stocks, short low book-to-market/growth stocks | Value-related risk |
| PR1YR | Long top 30% past-year winners, short bottom 30% losers | Momentum-related risk |

SMB berarti **small minus big**, HML **high minus low**, dan PR1YR **prior one-year momentum**. Untuk momentum, most recent month biasanya dihapus agar short-term trading effects tidak mendistorsi signal, sehingga practical lookback sekitar 11 bulan.

### Fama-French-Carhart Factor Specification

Empat factors tersebut menghasilkan:

$$
\begin{aligned}
E[R_s] ={}& r_f
+\beta_s^{Mkt}\left(E[R_{Mkt}]-r_f\right)\\
&+\beta_s^{SMB}E[R_{SMB}]\\
&+\beta_s^{HML}E[R_{HML}]\\
&+\beta_s^{PR1YR}E[R_{PR1YR}]
\end{aligned}
$$

Keunggulan multifactor model adalah lebih mudah menemukan collection of portfolios yang bersama-sama menangkap systematic risk daripada satu perfect benchmark. Kekurangannya: setiap factor beta dan expected factor return harus diestimasi. Menambah factor dapat memperbaiki risk description tetapi juga memperbesar estimation burden dan uncertainty.

[TEXTBOOK CONTEXT] Karena economic interpretation dan forward-looking premium factors tidak mudah ditentukan, textbook menggunakan historical average returns. Untuk 1927-2012, average monthly factor returns adalah:

| Factor | Average Monthly Return | Approx. 95% Confidence Band |
|---|---:|---:|
| $Mkt-r_f$ | 0.61% | $\pm0.34\%$ |
| SMB | 0.25% | $\pm0.20\%$ |
| HML | 0.38% | $\pm0.22\%$ |
| PR1YR | 0.70% | $\pm0.29\%$ |

Bahkan dengan lebih dari 80 tahun data, factor expected returns tetap imprecise.

### Example — FFC Cost of Capital for a Fast-Food Project

**Situation**

Project memiliki non-diversifiable risk setara McDonald's. Monthly risk-free rate 0.125%. Estimated factor betas dari data 2003-2011 adalah:

| Factor | Beta Estimate |
|---|---:|
| Market | 0.687 |
| SMB | -0.299 |
| HML | -0.156 |
| PR1YR | 0.123 |

**Calculation**

$$
\begin{aligned}
E[R_{MCD}]={}&0.125\%
+0.687(0.61\%)
-0.299(0.25\%)\\
&-0.156(0.38\%)
+0.123(0.70\%)\\
={}&0.496\%\text{ per month}
\end{aligned}
$$

Annualized as an APR:

$$
0.496\%\times12=5.95\%\approx6\%
$$

Standard CAPM pada same period menggunakan estimated beta 0.54 dan menghasilkan sekitar 5.5% per year.

**Meaning**

Different factor specification mengubah both beta estimates dan required return. Namun, selisih point estimate tidak boleh diperlakukan terlalu presisi karena factor betas dan premiums mempunyai wide confidence intervals.

FFC banyak digunakan dalam academic performance measurement. Textbook menyebut bahwa past high-return funds dapat terlihat memiliki positive CAPM alpha, tetapi alpha tersebut hilang ketika evaluated dengan FFC factors, suggesting that apparent skill may reflect factor exposure.

## 10. Methods Used in Practice

[TEXTBOOK CONTEXT] Survey terhadap 392 CFOs menemukan:

- 73.5% menggunakan CAPM untuk cost of capital, dengan adoption lebih tinggi pada large firms;
- sekitar sepertiga menggunakan multifactor model;
- 40% menggunakan arithmetic historical average return;
- 16% menggunakan dividend discount model, yaitu expected growth ditambah current dividend yield.

Percentages tidak mutually exclusive karena firms dapat menggunakan lebih dari satu method.

Tidak ada universal consensus karena seluruh methods imprecise dan implementation complexity berbeda. Multifactor models lebih kaya tetapi menuntut lebih banyak estimates. Historical averages memiliki large sampling error. Dividend-growth estimate juga uncertain. CAPM bertahan karena simple to implement dan reasonably reliable.

Dalam capital budgeting, cost of capital hanyalah satu uncertain input pada NPV. Error pada projected cash flows sering lebih besar daripada error pada discount rate. Karena itu, simplest adequate model kerap lebih berguna daripada model complex yang memberi false precision.

## Chapter Synthesis

Chapter dimulai dari mekanisme ideal: ketika information menciptakan non-zero alpha, competition mengubah prices dan expected returns sampai alpha hilang. Market efficiency tidak memerlukan semua investors equally informed; uninformed investors dapat melindungi diri dengan market portfolio. Namun, positive alpha hanya mungkin jika pihak lain menerima negative alpha atau mempunyai objectives di luar expected return dan volatility.

Actual behavior menyediakan kandidat pihak tersebut. Individual investors underdiversify, trade excessively, terlalu percaya diri, menahan losers, mengejar attention-grabbing stocks, dan herd. Tetapi mistakes tidak otomatis menciptakan market-level mispricing; errors harus correlated dan arbitrage harus constrained. Professional managers kadang menemukan opportunities, namun fees, trading costs, capital inflows, dan competition membuat benefit jarang sampai kepada fund investors.

Size, value, dan momentum strategies menghasilkan historical positive CAPM alphas. Evidence ini tidak memberi verdict sederhana. Either investors meninggalkan positive-NPV opportunities, atau CAPM market beta tidak menangkap relevant systematic risk. Proxy error, behavioral demand, alternative preferences, dan non-tradable human capital semuanya dapat membuat observed market portfolio inefficient.

Multifactor models mempertahankan central insight bahwa systematic exposure menentukan expected return, tetapi mengganti one-market benchmark dengan several diversified factor portfolios. Dalam praktik, uncertainty tetap besar, sehingga CAPM masih dominan karena keseimbangan simplicity dan reliability.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Alpha | $E[R_s]-r_s$ | Mengukur return di atas required return menurut model | [[5.4 Return Relationships and Economic Variables]] |
| Price competition | Trading response yang mendorong alpha kembali nol | Menjelaskan incorporation of information into prices | [[5.3 Economic Influences on Markets]] |
| Rational expectations | Correct use of own information dan market signals | Sufficient condition yang lebih lemah dari homogeneous information | [[5.3 Economic Influences on Markets]] |
| Underdiversification | Terlalu banyak firm-specific risk dalam portfolio | Investor menanggung unpriced risk | [[5.1 Investment Asset Characteristics]] |
| Familiarity bias | Preferensi terhadap known firms atau local assets | Mendorong concentrated holdings | [[5.3 Economic Influences on Markets]] |
| Overconfidence | Overestimate precision of one's knowledge | Menyebabkan excessive and costly trading | [[5.3 Economic Influences on Markets]] |
| Disposition effect | Sell winners, retain losers | Systematic behavioral trading bias | [[5.3 Economic Influences on Markets]] |
| Herd behavior | Meniru trades investor lain | Membuat errors berkorelasi dan memengaruhi prices | [[5.3 Economic Influences on Markets]] |
| Cumulative abnormal return | Return relatif terhadap beta-predicted benchmark over event window | Mengukur market reaction to events | [[5.4 Return Relationships and Economic Variables]] |
| Size effect | Positive CAPM alpha pada small stocks | Evidence against simple market-beta pricing | [[5.4 Return Relationships and Economic Variables]] |
| Value effect | High book-to-market stocks cenderung positive-alpha | Dasar HML factor | [[5.4 Return Relationships and Economic Variables]] |
| Momentum | Past winners outperform past losers over intermediate horizons | Dasar PR1YR factor | [[5.4 Return Relationships and Economic Variables]] |
| Data snooping bias | False pattern akibat searching many variables | Caveat untuk empirical anomalies | [[5.4 Return Relationships and Economic Variables]] |
| Proxy error | Observed index bukan true market portfolio | Non-zero alpha mungkin model artifact | [[5.4 Return Relationships and Economic Variables]] |
| Factor portfolio | Diversified portfolio yang menangkap systematic component | Building block multifactor model | [[5.4 Return Relationships and Economic Variables]] |
| Self-financing portfolio | Long positions dibiayai borrowing atau shorts | Factor return langsung menjadi premium | [[5.4 Return Relationships and Economic Variables]] |
| APT / multifactor model | Expected return dijelaskan beberapa factor exposures | Alternative when market benchmark is incomplete | [[5.4 Return Relationships and Economic Variables]] |
| FFC factors | Market, SMB, HML, dan PR1YR | Popular empirical specification | [[5.4 Return Relationships and Economic Variables]] |

## Compression Notes

### Retained in Detail

- alpha, SML, price-adjustment, dan rational-expectations logic;
- major individual and systematic behavioral biases;
- evidence on news trading, recommendations, dan mutual funds;
- size, value, momentum, dan alternative interpretations;
- distinction antara EMH dan market-portfolio efficiency;
- multifactor formulas, factor construction, dan FFC cost-of-capital example;
- practical-method survey dan model uncertainty.

### Condensed

- introductory William Miller chronology;
- detailed citations dan full historical study descriptions;
- figures of turnover, event returns, manager hiring, dan style portfolios, retained as their main relationships;
- interview sidebar on diversification and investor practice;
- repeated concept checks dan chapter recap.

### Omitted / Beyond CF4

- end-of-chapter problems dan Chapter 13 Appendix derivation;
- researcher biographies dan bibliography details;
- full confidence intervals for individual McDonald's factor betas;
- implementation mechanics beyond what is needed to understand the factor model.

## CF4 Connection Map

```text
Economic information and investor psychology
        ↓
[[5.3 Economic Influences on Markets]]
        ↓
Competition, price adjustment, and market efficiency
        ↓
Historical size, value, and momentum relationships
        ↓
CAPM versus multifactor expected-return models
        ↓
[[5.4 Return Relationships and Economic Variables]]
```

## Quick Reading Review

- Alpha adalah expected return dikurangi required return menurut risk model.
- Buying pressure pada positive-alpha stock menaikkan price dan menurunkan future expected return.
- Public information dapat masuk ke price sebelum investor dapat trade pada old price.
- Uninformed investor dapat memperoleh average performance dengan memegang market portfolio.
- Positive alpha seseorang membutuhkan negative alpha pihak lain secara aggregate.
- Individual investors sering underdiversified dan terlalu banyak trade.
- Overconfidence meningkatkan turnover; transaction costs menurunkan net return.
- Random individual mistakes tidak mengubah market; systematic correlated biases dapat mengubah prices.
- Disposition effect berarti menjual winners terlalu cepat dan menahan losers terlalu lama.
- Attention, mood, personal experience, dan herding dapat menciptakan common trading patterns.
- News atau recommendation hanya profitable jika reaction dapat diprediksi dan arbitrage costs tidak menghapus gain.
- Manager skill dapat menciptakan gross value, tetapi competition, scale, dan fees menghilangkan investor alpha.
- Small, value, dan momentum portfolios mempunyai historical positive CAPM alphas.
- Positive CAPM alpha dapat berarti market inefficiency atau omitted systematic risk.
- EMH test selalu bergantung pada model yang digunakan untuk mendefinisikan equivalent risk.
- Multifactor model menambahkan factor betas dan factor risk premiums.
- FFC menggunakan market, SMB, HML, dan PR1YR factors.
- CAPM tetap paling umum dalam praktik karena simple dan reasonably reliable.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Alpha and competition | Chapter 13 introduction; Section 13.1; Figures 13.1-13.2 |
| Information and rational expectations | Section 13.2; Example 13.1 |
| Individual investor behavior | Section 13.3; Figures 13.3-13.4 |
| Systematic behavioral biases | Section 13.4; Prospect Theory feature |
| News, recommendations, and fund managers | Section 13.5; Figures 13.5-13.8 |
| Size, value, momentum, and efficiency debate | Section 13.6; Figures 13.9-13.10; Example 13.2; market-efficiency feature |
| Multifactor and FFC models | Section 13.7; Equations 13.3-13.6; Table 13.1; Example 13.3 |
| Practical cost-of-capital methods | Section 13.8; Figure 13.11 |
