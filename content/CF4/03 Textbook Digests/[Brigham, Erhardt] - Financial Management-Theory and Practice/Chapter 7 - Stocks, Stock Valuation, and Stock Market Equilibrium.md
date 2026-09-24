---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham and Michael C. Ehrhardt"
chapter: "7"
chapter_title: "Stocks, Stock Valuation, and Stock Market Equilibrium"
cf4_topics: ["5.1", "5.3", "5.4"]
cf4_relevance: "High"
source_scope: "Chapter 7, Sections 7.1-7.13"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BrighamEhrhardt, StockValuation]
date_created: "2026-08-25"
status: "study-note"
---

# Brigham & Ehrhardt — Chapter 7: Stocks, Stock Valuation, and Stock Market Equilibrium

> [!ABSTRACT] Chapter in One View
> Chapter ini menjelaskan bagaimana karakteristik saham dan ekspektasi investor diterjemahkan menjadi harga. Saham biasa memberikan hak kepemilikan dan kendali, tetapi nilainya secara ekonomi berasal dari arus kas masa depan yang diharapkan investor. Nilai intrinsik saham adalah present value dari seluruh dividen masa depan; harga jual yang diharapkan tidak menciptakan sumber nilai baru karena harga tersebut sendiri bergantung pada dividen sesudah tanggal penjualan. Untuk perusahaan matang, aliran dividen dapat dinilai dengan *constant growth model*; untuk perusahaan bertumbuh tidak konstan, nilai dibagi menjadi dividen selama periode pertumbuhan abnormal dan *horizon value*. Chapter ini juga memperkenalkan valuasi berbasis free cash flow, market multiples, dan saham preferen. Di pasar, transaksi investor marginal mendorong harga menuju kondisi equilibrium, yaitu expected return sama dengan required return dan harga pasar sama dengan nilai intrinsik. Efficient Markets Hypothesis menjelaskan mengapa informasi baru cepat masuk ke harga, tetapi behavioral finance mengingatkan bahwa penyimpangan dari nilai intrinsik tetap dapat terjadi.

## 1. Why This Chapter Exists

Chapter sebelumnya membahas risiko saham dan faktor yang menentukan *required return*. Chapter 7 melanjutkan alur tersebut dengan memakai required return sebagai discount rate untuk mengestimasi nilai intrinsik saham. Masalah intinya adalah: jika saham menjanjikan dividen yang tidak pasti, memiliki potensi capital gain, dan diperdagangkan pada harga yang terus berubah, bagaimana investor menentukan harga yang masuk akal?

Jawabannya menghubungkan keputusan bisnis dengan penciptaan nilai:

```text
Managerial actions, economic environment, and political climate
                              ↓
             Expected cash flows and risk
                              ↓
                 Required return and value
                              ↓
                  Market price of stock
```

Bagi investor, model valuasi membantu membedakan saham yang *undervalued* dan *overvalued*. Bagi manajer, model yang sama menunjukkan bagaimana keputusan operasional, investasi, pendanaan, dan dividen dapat memengaruhi nilai perusahaan serta kapan penerbitan atau pembelian kembali saham perlu dipertimbangkan dengan hati-hati.

## 2. Chapter Map

```text
Chapter 7 — Stocks, Stock Valuation, and Stock Market Equilibrium
├── 7.1 Legal Rights and Privileges of Common Stockholders
├── 7.2 Types of Common Stock
├── 7.3 Market Stock Price versus Intrinsic Value
├── 7.4 Stock Market Reporting
├── 7.5 Valuing Common Stocks
├── 7.6 Valuing a Constant Growth Stock
├── 7.7 Expected Rate of Return on a Constant Growth Stock
├── 7.8 Valuing Nonconstant Growth Stocks
├── 7.9 Stock Valuation by the Free Cash Flow Approach
├── 7.10 Market Multiple Analysis
├── 7.11 Preferred Stock
├── 7.12 Stock Market Equilibrium
└── 7.13 Efficient Markets Hypothesis
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 7.1-7.2 Rights and types of common stock | Karakteristik saham sebagai aset investasi | [[5.1 Investment Asset Characteristics]] |
| 7.3-7.8 Intrinsic value and dividend models | Harga, return, growth, dan valuasi saham | [[5.1 Investment Asset Characteristics]]; [[5.4 Return Relationships and Economic Variables]] |
| 7.9-7.11 Alternative valuation and preferred stock | Karakteristik aset serta pendekatan penilaian | [[5.1 Investment Asset Characteristics]] |
| 7.12 Equilibrium and volatility | Hubungan risk, required return, growth, dan price | [[5.3 Economic Influences on Markets]]; [[5.4 Return Relationships and Economic Variables]] |
| 7.13 Market efficiency | Pembentukan harga dan respons terhadap informasi | [[5.3 Economic Influences on Markets]] |

## 3. Legal Rights and Privileges of Common Stockholders

### 3.1 Ownership and Control of the Firm

Pemegang **saham biasa (*common stock*)** adalah pemilik perusahaan. Mereka memilih directors, kemudian directors memilih officers yang menjalankan bisnis. Dalam perusahaan kecil, pemegang saham terbesar sering sekaligus menjadi pimpinan. Dalam perusahaan publik besar, manajer biasanya memiliki saham, tetapi kepemilikannya tidak selalu cukup untuk mengendalikan voting. Karena itu, secara prinsip pemegang saham dapat mengganti manajemen yang tidak efektif.

Pemilihan directors dilakukan secara periodik, biasanya pada annual meeting. Umumnya setiap saham memberikan satu suara untuk setiap posisi director. Pemegang saham dapat hadir dan memilih langsung, tetapi lebih sering memberikan **proxy**, yaitu kuasa kepada pihak lain untuk menggunakan hak suaranya. Manajemen biasanya mengumpulkan proxy tersebut. Ketika kinerja buruk dan pemegang saham tidak puas, kelompok eksternal dapat berusaha mengumpulkan proxy untuk mengganti manajemen; proses ini disebut **proxy fight**.

Dalam *cumulative voting*, total suara pemegang saham sama dengan jumlah saham dikalikan jumlah posisi director yang diperebutkan, dan seluruhnya dapat diberikan kepada satu kandidat. Mekanisme ini membantu minority stockholders memperoleh perwakilan di board.

### 3.2 The Preemptive Right

**Preemptive right** memberi pemegang saham lama hak membeli bagian proporsional dari saham baru yang diterbitkan. Hak ini memiliki dua fungsi:

1. mempertahankan proporsi kendali pemegang saham lama; dan
2. mencegah perpindahan kekayaan akibat saham baru dijual di bawah market value.

### Example — Dilution Without Preemptive Rights

**Situation**

Terdapat 1.000 saham dengan harga USD 100 per saham, sehingga total market value perusahaan adalah USD 100.000. Perusahaan lalu menjual 1.000 saham baru seharga USD 50 per saham dan memperoleh USD 50.000.

**Reasoning**

Sesudah penerbitan, total nilai menjadi USD 150.000 dan tersebar pada 2.000 saham.

**Calculation**

$$
\text{Nilai per saham setelah penerbitan}
=\frac{\$150{,}000}{2{,}000}
=\$75
$$

Pemegang saham lama kehilangan USD 25 per saham, sedangkan pembeli saham baru memperoleh nilai langsung sebesar USD 25 per saham.

**Meaning**

Penerbitan di bawah nilai pasar mendilusi nilai dan dapat mentransfer kekayaan dari pemegang saham lama kepada pembeli baru. Preemptive right membatasi peluang penyalahgunaan tersebut.

## 4. Types of Common Stock

Sebagian besar perusahaan hanya memiliki satu kelas common stock, tetapi **classified stock** dapat diterbitkan untuk memenuhi kebutuhan khusus. Tidak ada arti universal untuk label Class A atau Class B; hak setiap kelas harus dilihat dari ketentuan penerbitannya.

Perusahaan baru kadang menjual satu kelas kepada publik yang berhak atas dividen tetapi sementara tidak memiliki voting rights, sementara pendiri memegang kelas lain dengan voting rights penuh tetapi pembatasan dividen. Saham pendiri ini disebut **founders' shares**. Struktur tersebut memungkinkan perusahaan memperoleh modal eksternal sambil mempertahankan kendali pendiri pada masa awal dan membatasi penarikan kas oleh pemilik awal.

Voting rights memiliki nilai karena memberikan pengaruh terhadap kendali. Jika dua kelas identik kecuali hak suara, saham dengan voting rights biasanya lebih bernilai. Nilai tambahan hak suara cenderung lebih besar ketika perlindungan hukum terhadap minority stockholders lebih lemah.

**Tracking stock** atau **target stock** adalah kelas saham yang dividennya dikaitkan dengan bagian bisnis tertentu. Tujuannya adalah membantu pasar menilai lini usaha dengan prospek pertumbuhan berbeda secara terpisah. Namun tracking stock tidak sama dengan saham perusahaan independen: laporan keuangan masih dikonsolidasikan dan manajemen masih memiliki keleluasaan mengalokasikan biaya serta modal antardivisi.

> [!WARNING] Important Distinction
> **Class A ≠ selalu saham publik, dan Class B ≠ selalu founders' shares.**
>
> Penamaan kelas tidak terstandardisasi. Hak voting, dividen, dan ketentuan lain harus dibaca dari charter atau terms penerbitan.

## 5. The Market Stock Price versus Intrinsic Value

**Market price**, $P_0$, adalah harga saham yang dapat diamati saat ini. **Intrinsic value**, $\hat{P}_0$, adalah estimasi nilai ekonomis berdasarkan expected future cash flows dan risiko arus kas tersebut. Karena cash flow dan risk masa depan tidak dapat diamati secara pasti, intrinsic value harus diestimasi dan dapat berbeda antarinvestor.

Figure 7-1 membedakan dua jalur:

```text
Actual managerial actions and external conditions
                ├── "true" cash flows and risk ──> Intrinsic value
                └── perceived cash flows and risk ──> Market price
```

Dalam **market equilibrium**, persepsi investor marginal cukup dekat dengan kondisi ekonomis yang mendasari sehingga:

$$
P_0=\hat{P}_0
$$

Jika pasar cukup efisien, gap antara harga dan nilai intrinsik cenderung kecil dan tidak bertahan lama. Namun textbook menekankan bahwa perbedaan yang besar tetap dapat muncul dan bertahan, terutama ketika risiko tidak dipahami atau sentimen mendorong harga.

Investor mencari saham dengan $P_0<\hat{P}_0$ dan menghindari saham dengan $P_0>\hat{P}_0$. Manajer juga perlu memahami intrinsic value karena:

- keputusan bisnis memengaruhi expected cash flows, risk, dan akhirnya value;
- penerbitan saham ketika saham diyakini undervalued dapat merugikan pemegang saham lama; dan
- keputusan repurchase atau transaksi korporasi lain tidak dapat dinilai hanya dari quoted price.

Dua model dasar yang disebut chapter ini adalah **discounted dividend model**, yang berfokus pada dividen kepada shareholders, dan **corporate valuation model**, yang menelusuri sales, costs, serta free cash flows perusahaan.

> [!WARNING] Important Distinction
> **Harga pasar ≠ nilai intrinsik.** Harga pasar adalah hasil transaksi aktual; nilai intrinsik adalah estimasi berdasarkan asumsi cash flow dan risk. Kesamaan keduanya merupakan kondisi equilibrium, bukan identitas yang selalu benar.

## 6. Stock Market Reporting

Quote saham modern tidak hanya menunjukkan latest price. Data yang biasanya tersedia mencakup previous close, opening price, perubahan harga dan persentasenya, daily range, bid, ask, 52-week range, volume, average volume, market capitalization, dividend, dividend yield, trailing EPS, P/E ratio, historical chart, serta analyst forecasts.

**Bid** adalah harga yang bersedia dibayar pembeli, sedangkan **ask** adalah harga yang diminta penjual. **Market capitalization** adalah harga pasar per saham dikalikan jumlah common shares outstanding. Data pasar merupakan titik awal analisis, bukan pengganti estimasi intrinsic value.

> [!NOTE] Textbook Context
> Contoh quote dan saluran informasi dalam buku berasal dari 2009. Jenis data yang dijelaskan tetap relevan, tetapi website, tampilan, dan angka spesifiknya bersifat historis.

## 7. Valuing Common Stocks

### 7.1 Valuation Terms

| Symbol | Meaning |
|---|---|
| $D_t$ | Dividen yang diharapkan pada akhir tahun $t$. $D_0$ sudah dibayar; pembeli baru pertama kali menerima $D_1$. |
| $P_0$ | Harga pasar aktual saham hari ini. |
| $\hat{P}_t$ | Estimasi intrinsic value atau expected price pada waktu $t$. |
| $D_1/P_0$ | Expected dividend yield selama tahun mendatang. |
| $(\hat{P}_1-P_0)/P_0$ | Expected capital gains yield selama tahun mendatang. |
| $g$ | Expected growth rate dividen; dalam constant growth model juga menjadi growth rate earnings dan price. |
| $r_s$ | Required rate of return: return minimum yang sesuai dengan risk dan alternatif investasi. |
| $\hat{r}_s$ | Expected rate of return berdasarkan harga dan cash flows yang diperkirakan. |
| $\bar{r}_s$ | Actual atau realized return setelah periode berlalu. |

Investor yang berbeda dapat memiliki $\hat{P}_0$ dan $\hat{r}_s$ berbeda karena memakai estimasi dividen, growth, dan risk berbeda. Namun hanya satu $P_0$ yang diamati pada saat tertentu. Harga itu ditentukan oleh **marginal investors**, yaitu kelompok investor yang saat ini aktif bertransaksi dan pandangannya menggerakkan harga.

Expected total return satu tahun terdiri dari dua bagian:

$$
\hat{r}_s
=\frac{D_1}{P_0}
+\frac{\hat{P}_1-P_0}{P_0}
$$

Bagian pertama adalah dividend yield; bagian kedua adalah capital gains yield. Realized return dapat berbeda jauh karena dividen dan harga aktual mungkin tidak sama dengan ekspektasi.

### 7.2 Expected Dividends as the Basis for Stock Values

[CORE CF4] Nilai saham adalah present value seluruh expected future dividends:

$$
\hat{P}_0
=\sum_{t=1}^{\infty}\frac{D_t}{(1+r_s)^t}
$$

Pada pandangan pertama, investor yang berencana menjual saham tampak menerima dua cash flows: dividen dan harga jual. Namun harga jual pada akhir tahun pertama, $\hat{P}_1$, ditentukan oleh dividen sesudah tahun pertama dan harga jual pada periode berikutnya. Proses ini berulang tanpa batas. Karena itu, selama perusahaan tidak dilikuidasi atau diakuisisi untuk kemudian hilang, sumber ultimate cash flow kepada seluruh generasi shareholders tetaplah dividen.

> [!WARNING] Important Distinction
> **Capital gain bukan sumber nilai yang terpisah dari future cash flows.**
>
> Investor individual dapat merealisasikan capital gain saat menjual, tetapi pembeli hanya bersedia membayar harga tersebut karena mengharapkan dividen atau nilai distribusi sesudahnya. Harga jual meneruskan klaim atas cash flow, bukan menciptakan cash flow baru.

## 8. Valuing a Constant Growth Stock

### 8.1 Gordon Growth Model

Jika dividen tumbuh selamanya pada tingkat konstan $g$, maka:

$$
D_t=D_0(1+g)^t
$$

Substitusi ke general dividend valuation model menghasilkan **constant growth model** atau **Gordon model**:

$$
\hat{P}_0
=\frac{D_1}{r_s-g}
=\frac{D_0(1+g)}{r_s-g}
$$

Syarat yang wajib dipenuhi adalah:

$$
r_s>g
$$

Jika $g\ge r_s$ diasumsikan berlangsung selamanya, present value series tidak konvergen. Harga negatif yang muncul ketika $g>r_s$ dimasukkan ke formula bukanlah hasil ekonomis, melainkan tanda bahwa model digunakan di luar domainnya.

### Example — MicroDrive Constant Growth Stock

**Situation**

MicroDrive baru membayar $D_0=\$1.15$. Required return adalah $r_s=13.4\%$ dan dividen diperkirakan tumbuh konstan pada $g=8\%$.

**Reasoning**

Pembeli baru tidak menerima $D_0$; cash flow pertama adalah $D_1$.

**Calculation**

$$
D_1=\$1.15(1.08)=\$1.242
$$

$$
\hat{P}_0
=\frac{\$1.242}{0.134-0.08}
=\$23.00
$$

**Meaning**

Dividen nominal tumbuh 8%, tetapi karena didiskontokan pada 13,4%, present value setiap dividen berikutnya makin kecil. Jumlah present value seluruh dividen tetap terbatas dan sama dengan USD 23.

Figure 7-3 menunjukkan dua pola yang berjalan bersamaan: jumlah dividen meningkat dari tahun ke tahun, sedangkan present value tiap dividen menurun karena $r_s>g$. Area kumulatif di bawah rangkaian present value adalah intrinsic value saham.

### 8.2 Sustainable Dividend and Earnings Growth

Menaikkan dividen tahun depan hanya berdampak besar pada harga jika investor menganggap kenaikan itu **sustainable**. Dividen dibayar dengan kas, sehingga pertumbuhan dividen berkelanjutan harus didukung pertumbuhan cash flow. Profitability, operating capital investment, debt, dan dividend policy saling terkait:

- satu dolar yang dibayarkan sebagai dividen tidak dapat sekaligus direinvestasikan atau digunakan membayar utang;
- dividen yang lebih tinggi, ceteris paribus, berarti growth lebih rendah atau penggunaan debt lebih tinggi;
- debt dapat menopang dividend growth untuk sementara, tetapi tidak tanpa batas; dan
- dalam jangka panjang, dividend growth dibatasi oleh earnings growth.

EPS growth dipengaruhi faktor ekonomi, industri, dan firm-specific. Agar perusahaan tumbuh lebih cepat daripada ekonomi dalam jangka panjang, industrinya harus mengambil porsi ekonomi yang lebih besar atau perusahaan harus merebut market share. Competition dan market saturation akhirnya membatasi pertumbuhan.

### 8.3 Long-Term versus Short-Term Events

Untuk MicroDrive, present value dividen lima tahun pertama sekitar USD 5, sedangkan total nilai saham USD 23. Jadi hanya sekitar 22% nilai berasal dari cash flows lima tahun pertama; bagian terbesar berasal dari periode yang lebih jauh.

Ini tidak berarti quarterly earnings tidak penting. Short-term earnings penting terutama karena mengandung **informasi tentang long-term prospects**. Earnings yang turun karena R&D lebih tinggi dapat mengisyaratkan future cash flows yang lebih besar; earnings yang turun karena produk ditolak pelanggan dapat menurunkan estimasi long-term $g$. Karena valuasi sensitif terhadap $g$, informasi kecil yang mengubah ekspektasi jangka panjang dapat mengubah harga secara besar.

Fokus manajer pada short-term earnings juga dapat muncul dari compensation systems yang mengaitkan bonus pada current earnings, bukan semata-mata karena nilai perusahaan.

### 8.4 Appropriate Use and Zero Growth

Constant growth model paling sesuai untuk perusahaan matang dengan riwayat growth stabil. Istilah “constant” bersifat probabilistik: $g$ adalah best estimate untuk setiap periode, bukan janji bahwa realisasi growth pasti sama setiap tahun.

Jika $g=0$, model menjadi perpetuity:

$$
\hat{P}_0=\frac{D}{r_s}
$$

## 9. Expected Rate of Return on a Constant Growth Stock

Gordon model dapat disusun ulang untuk memperoleh expected return:

$$
\hat{r}_s
=\frac{D_1}{P_0}+g
$$

Untuk constant growth stock, $g$ sekaligus merupakan expected dividend growth rate, expected stock-price growth rate, dan expected capital gains yield.

### Example — Return Components of MicroDrive

Dengan $P_0=\$23$, $D_1=\$1.242$, dan $g=8\%$:

$$
\hat{r}_s
=\frac{\$1.242}{\$23}+8\%
=5.4\%+8\%
=13.4\%
$$

Expected price satu tahun kemudian adalah:

$$
D_2=\$1.242(1.08)=\$1.3414
$$

$$
\hat{P}_1
=\frac{D_2}{r_s-g}
=\frac{\$1.3414}{0.134-0.08}
=\$24.84
$$

Hasil yang sama diperoleh dari $\hat{P}_1=P_0(1+g)=\$23(1.08)=\$24.84$. Capital gain adalah $\$1.84$, atau 8% dari beginning price. Jadi dalam constant growth equilibrium:

1. dividen tumbuh pada $g$;
2. harga saham tumbuh pada $g$;
3. dividend yield konstan;
4. capital gains yield konstan dan sama dengan $g$; dan
5. expected total return sama dengan dividend yield ditambah $g$.

> [!WARNING] Important Distinction
> **Expected return ≠ required return ≠ realized return.**
>
> Expected return berasal dari cash flows dan harga yang diperkirakan. Required return adalah kompensasi minimum atas time value dan risk. Keduanya sama hanya pada equilibrium. Realized return baru diketahui setelah kejadian aktual berlangsung.

## 10. Valuing Nonconstant Growth Stocks

### 10.1 Life Cycle and Growth Patterns

Growth banyak perusahaan tidak konstan. Pada fase awal, earnings dan dividends dapat tumbuh jauh lebih cepat daripada ekonomi; kemudian growth mendekati pertumbuhan normal, dan pada fase matang atau menurun dapat menjadi lebih lambat. Product cycles dan business cycles juga dapat menciptakan periode pertumbuhan abnormal pada perusahaan yang sudah besar.

Figure 7-4 membandingkan empat pola: normal growth, supernormal growth yang kemudian turun ke normal, zero growth, dan negative growth. Negative growth tidak otomatis membuat saham tidak menarik. Harga dapat menurun, tetapi dividend yield yang cukup tinggi masih dapat menghasilkan competitive total return.

### 10.2 Horizon Date and Horizon Value

Asumsikan growth nonconstant berlangsung sampai waktu $N$, lalu dividen tumbuh konstan sebesar $g_L$. Waktu $N$ disebut **horizon date** atau **terminal date**. Nilai seluruh dividen setelah $N$, diukur pada waktu $N$, adalah **horizon value**:

$$
\hat{P}_N
=\frac{D_{N+1}}{r_s-g_L}
=\frac{D_N(1+g_L)}{r_s-g_L}
$$

Intrinsic value hari ini adalah jumlah present value dividen selama periode nonconstant dan present value horizon value:

$$
\hat{P}_0
=\sum_{t=1}^{N}\frac{D_t}{(1+r_s)^t}
+\frac{\hat{P}_N}{(1+r_s)^N}
$$

Mekanismenya terdiri dari tiga langkah:

1. proyeksikan setiap dividen selama nonconstant growth period;
2. hitung horizon value pada akhir periode tersebut dengan constant growth model; dan
3. diskontokan seluruh dividen eksplisit dan horizon value ke waktu 0, lalu jumlahkan.

> [!WARNING] Important Distinction
> $\hat{P}_N$ menggunakan **$D_{N+1}$**, bukan $D_N$, karena horizon value pada waktu $N$ menilai cash flow yang pertama kali diterima setelah tanggal tersebut.

### Example — Supernormal Growth Stock

**Situation**

MicroDrive memiliki $D_0=\$1.15$, required return $r_s=13.4\%$, supernormal growth $g_s=30\%$ selama tiga tahun, kemudian long-run growth $g_L=8\%$.

**Reasoning**

Dividen tahun 1-3 dihitung satu per satu pada growth 30%. Pada akhir tahun 3, saham diperlakukan sebagai constant growth stock; karena itu horizon value pada $t=3$ memakai $D_4$.

**Calculation**

$$
\begin{aligned}
D_1&=\$1.15(1.30)=\$1.4950\\
D_2&=\$1.4950(1.30)=\$1.9435\\
D_3&=\$1.9435(1.30)=\$2.5266\\
D_4&=\$2.5266(1.08)=\$2.7287
\end{aligned}
$$

$$
\hat{P}_3
=\frac{\$2.7287}{0.134-0.08}
=\$50.5310
$$

Present value dividen nonconstant adalah sekitar USD 4,5622, sedangkan present value horizon value adalah sekitar USD 34,6512:

$$
\hat{P}_0
=\$4.5622+\$34.6512
=\$39.2134\approx\$39.21
$$

**Meaning**

Horizon value bukan cash flow tambahan di luar dividen; ia adalah nilai pada waktu 3 dari seluruh dividen mulai tahun 4 hingga tak terhingga. Besarnya kontribusi horizon value juga menunjukkan bahwa asumsi long-run growth dan required return sangat menentukan hasil valuasi.

## 11. Stock Valuation by the Free Cash Flow Approach

Dividend model menilai cash flows kepada common shareholders. Sebaliknya, **free cash flow approach** terlebih dahulu menilai operasi perusahaan dari cash flows yang tersedia bagi seluruh investors, baik debt maupun equity holders.

Jika FCF tumbuh konstan:

$$
V_{\text{operations}}
=\frac{FCF_1}{WACC-g}
=\frac{FCF_0(1+g)}{WACC-g}
$$

Alur dari enterprise value ke value per share adalah:

```text
PV of expected FCF at WACC
          + nonoperating assets
          = total firm value
          - debt and preferred claims
          = common equity value
          ÷ common shares outstanding
          = intrinsic value per share
```

### Example — Crum Inc.

**Situation**

FCF terakhir adalah USD 200 juta, long-run growth 5%, WACC 9%, debt plus preferred stock USD 2.000 juta, dan common shares outstanding 325 juta.

**Calculation**

$$
V_{\text{operations}}
=\frac{\$200(1.05)}{0.09-0.05}
=\$5{,}250\text{ juta}
$$

Dengan asumsi tidak ada nonoperating assets:

$$
\text{Common equity value}
=\$5{,}250-\$2{,}000
=\$3{,}250\text{ juta}
$$

$$
\text{Intrinsic value per share}
=\frac{\$3{,}250}{325}
=\$10
$$

**Meaning**

FCF didiskontokan pada WACC karena keduanya mencakup seluruh capital providers. Debt dan preferred stock baru dikurangkan setelah operating value diperoleh.

> [!WARNING] Important Distinction
> **FCF/WACC menghasilkan value of operations, bukan langsung common equity value.** Klaim non-common harus dikurangkan sebelum membagi dengan jumlah common shares.

## 12. Market Multiple Analysis

Untuk perusahaan privat, quoted market price tidak tersedia. Selain DCF, analis dapat mengestimasi value memakai **market multiples** dari comparable publicly traded firms. Metric perusahaan dikalikan comparable multiple, misalnya:

$$
\text{Estimated price per share}
=\text{Forecast EPS}\times\text{Comparable P/E}
$$

Jika forecast EPS Tapley Products adalah USD 7,70 dan comparable P/E adalah 12, estimasi nilainya:

$$
\$7.70\times 12=\$92.40
$$

Multiples dapat diterapkan pada earnings, sales, book value, atau operating metric yang penting bagi bisnis tertentu. Metode ini praktis tetapi lebih judgmental daripada discounted dividend method karena hasil bergantung pada pemilihan peer group, metric, dan multiple.

**EBITDA multiple** adalah **entity multiple**:

$$
\text{EV/EBITDA}
=\frac{\text{Market value of equity + debt}}{EBITDA}
$$

Karena EBITDA tersedia untuk memberi kompensasi kepada stockholders dan bondholders, multiple tersebut mengestimasi total company value. Untuk memperoleh common equity value, debt dikurangkan; hasilnya kemudian dibagi shares outstanding.

## 13. Preferred Stock

**Preferred stock** adalah hybrid security. Seperti bond, ia biasanya memiliki par value dan fixed dividend yang harus dibayar sebelum common dividend. Namun directors dapat melewatkan preferred dividend tanpa secara otomatis menyebabkan bankruptcy. Jadi cash payment-nya bersifat tetap seperti debt, tetapi konsekuensi gagal bayarnya tidak sama dengan interest pada debt.

Jika preferred dividend berlangsung selamanya, saham preferen adalah perpetuity:

$$
V_{ps}=\frac{D_{ps}}{r_{ps}}
$$

Jika harga dan dividen diketahui, expected return adalah:

$$
\hat{r}_{ps}=\frac{D_{ps}}{V_{ps}}
$$

Contoh: preferred dividend USD 10 per tahun dan required return 10% menghasilkan $V_{ps}=\$100$.

Preferred stock dengan finite maturity dinilai seperti bond: present value dari seluruh fixed dividends ditambah present value par value pada maturity. Jika pembayaran dilakukan quarterly, nominal return perlu dikonversi menjadi effective annual rate agar dapat dibandingkan secara konsisten dengan instrumen lain:

$$
EAR=\left(1+\frac{r_{NOM}}{M}\right)^M-1
$$

## 14. Stock Market Equilibrium

Required return untuk Stock $i$ dapat ditentukan dengan CAPM:

$$
r_i=r_{RF}+RP_Mb_i
$$

Investor marginal membeli jika $\hat{r}_i>r_i$, menjual jika $\hat{r}_i<r_i$, dan bersedia mempertahankan posisi jika keduanya sama. Buy dan sell pressure mengubah $P_0$ sampai equilibrium tercapai.

### Example — Price Adjustment toward Equilibrium

**Situation**

Risk-free rate 8%, market risk premium 4%, beta 2, sehingga required return adalah 16%. Saham memiliki $D_0=\$2.8571$, expected growth 5%, dan harga pasar USD 30.

**Calculation**

$$
r_i=8\%+(4\%)(2)=16\%
$$

$$
D_1=\$2.8571(1.05)=\$3
$$

Pada harga USD 30:

$$
\hat{r}_i=\frac{\$3}{\$30}+5\%=15\%
$$

Karena $15\%<16\%$, investor ingin menjual. Harga turun sampai:

$$
\hat{P}_0
=\frac{\$3}{0.16-0.05}
=\$27.27
$$

Pada harga USD 27,27, dividend yield 11% ditambah capital gains yield 5% sama dengan required return 16%.

**Meaning**

Equilibrium membutuhkan dua kondisi yang ekuivalen dari sudut pandang marginal investor:

$$
\hat{r}_i=r_i
$$

$$
P_0=\hat{P}_0
$$

### 14.1 Changes in Equilibrium and Volatility

Harga equilibrium berubah ketika informasi baru mengubah expected dividends, growth, risk-free rate, market risk premium, atau beta. Karena denominator Gordon model adalah $r_s-g$, perubahan kecil pada $r_s$ atau $g$ dapat menghasilkan perubahan harga yang besar, terutama ketika selisih keduanya kecil.

Dalam contoh textbook, perubahan $r_{RF}$ dari 8% ke 7%, market risk premium dari 4% ke 3%, beta dari 2 ke 1, dan growth dari 5% ke 6% menurunkan required return dari 16% ke 10%. Nilai saham berubah dari USD 27,27 menjadi:

$$
\hat{P}_0
=\frac{\$2.8571(1.06)}{0.10-0.06}
=\$75.71
$$

Volatility tidak dengan sendirinya membuktikan irrational pricing. Jika informasi mengalir terus-menerus, intrinsic value juga terus berubah dan harga menyesuaikan. Harga yang tampak stabil karena informasi jarang dirilis justru dapat meloncat drastis ketika informasi akhirnya tersedia.

> [!INFO] CF4 Connection
> Bagian ini menghubungkan [[5.3 Economic Influences on Markets]] dan [[5.4 Return Relationships and Economic Variables]]: interest rates, market risk premium, firm risk, expected dividends, dan growth bekerja bersama menentukan required return serta equilibrium price.

## 15. The Efficient Markets Hypothesis

**Efficient Markets Hypothesis (EMH)** menyatakan bahwa saham berada dalam equilibrium dan investor tidak dapat secara konsisten memperoleh return di atas tingkat yang dibenarkan oleh risk. Logikanya: banyak analis profesional mengikuti jumlah saham yang relatif terbatas, memiliki modal untuk memanfaatkan mispricing, dan menerima informasi baru dengan cepat. Kompetisi mereka membuat informasi segera masuk ke harga.

### 15.1 Weak-Form Efficiency

Weak form menyatakan bahwa current price sudah mencerminkan seluruh informasi dalam historical prices. Jika pola harga masa lalu memberikan profit yang dapat diprediksi, investor akan segera mengeksploitasinya; tindakan tersebut mengubah harga hari ini dan menghapus kesempatan. Implikasinya, technical analysis berbasis pola harga historis tidak dapat secara konsisten menghasilkan abnormal return.

### 15.2 Semistrong-Form Efficiency

Semistrong form menyatakan bahwa harga mencerminkan seluruh publicly available information. Analisis laporan tahunan atau berita publik tidak secara konsisten menghasilkan abnormal return karena pasar telah menyesuaikan ketika informasi keluar.

Harga merespons **surprise**, bukan sekadar isi announcement. Earnings naik 30% dapat tidak mengubah harga jika sesuai ekspektasi; harga dapat turun jika pasar sebelumnya mengharapkan lebih dari 30%, atau naik jika ekspektasi awal lebih rendah.

### 15.3 Strong-Form Efficiency

Strong form menyatakan bahwa harga mencerminkan seluruh informasi relevan, baik publik maupun privat. Jika benar, bahkan insiders tidak dapat secara konsisten memperoleh abnormal returns. Bukti bahwa inside information dapat menghasilkan abnormal profits menentang strong-form efficiency.

| Form | Information Reflected in Price | Main Implication |
|---|---|---|
| Weak | Historical prices and trading data | Past price patterns tidak memberi consistent abnormal return. |
| Semistrong | All publicly available information | Published analysis tidak memberi consistent abnormal return. |
| Strong | All public and private information | Bahkan insiders tidak dapat consistently beat the market. |

### 15.4 Is the Market Efficient?

Textbook menyimpulkan bahwa evidence mendukung weak-form efficiency dan cukup mendukung semistrong form, terutama untuk saham besar yang banyak diikuti, tetapi tidak mendukung strong form. Pengujian empiris biasanya merupakan **joint test** antara EMH dan asset pricing model: abnormal return hanya dapat didefinisikan relatif terhadap model required return seperti CAPM atau Fama-French model.

Market bubbles menunjukkan bahwa investor tidak selalu memproses informasi secara murni rasional. **Behavioral finance** mempelajari pengaruh faktor psikologis seperti:

- **animal spirits** — optimisme atau pesimisme emosional yang memengaruhi keputusan;
- **herding** — mengikuti tindakan kelompok daripada analisis sendiri; dan
- **anchoring bias** — terlalu menambatkan prediksi pada pengalaman atau informasi terbaru.

EMH tidak mensyaratkan setiap investor rasional. Pasar masih dapat efisien jika tindakan investor yang mengeksploitasi mispricing cukup kuat untuk membawa harga kembali menuju intrinsic value. Namun bila mispricing bertahan lama, investor rasional dapat mengalami kerugian besar sebelum akhirnya terbukti benar.

Bottom line chapter ini bersifat seimbang: untuk kebanyakan saham dan sebagian besar waktu, masuk akal menganggap $P_0\approx\hat{P}_0$. Namun penyimpangan besar dapat muncul dan berlangsung lama. Analisis fundamental tetap penting, tetapi hasilnya harus digunakan dengan kesadaran bahwa timing koreksi pasar tidak pasti.

### 15.5 Implications for Financial Decisions

Bagi investor, sulitnya mengalahkan pasar dan biaya aktif yang lebih tinggi membantu menjelaskan daya tarik index funds. Bagi manajer, jika harga umumnya fair, keputusan issuance, repurchase, atau tender offer yang hanya didasarkan pada keyakinan bahwa saham salah harga perlu diperlakukan hati-hati. Manajer mungkin memiliki informasi lebih baik tentang perusahaannya, tetapi tidak boleh menggunakan atau menyebarkan informasi secara ilegal atau menyesatkan.

> [!WARNING] Important Distinction
> **Pasar efisien ≠ harga tidak pernah berubah dan ≠ setiap investor rasional.** Efisiensi berarti harga cepat menyesuaikan terhadap informasi dan abnormal return konsisten sulit diperoleh setelah memperhitungkan risk.

## Chapter Synthesis

Chapter ini membangun satu cerita tentang bagaimana kepemilikan berubah menjadi nilai pasar. Common stock memberikan hak kepemilikan dan kendali, tetapi nilai ekonomisnya berasal dari cash flows masa depan. Investor mengestimasi dividen atau free cash flow, menilai risikonya melalui required return, lalu mendiskontokan arus kas tersebut untuk memperoleh intrinsic value. Growth meningkatkan expected cash flows, tetapi harus sustainable dan selalu dinilai bersama risk serta financing consequences.

Harga pasar adalah titik temu berbagai estimasi investor. Jika expected return pada harga saat ini terlalu rendah dibanding required return, investor menjual dan harga turun; jika terlalu tinggi, mereka membeli dan harga naik. Perdagangan membawa pasar ke equilibrium. Karena informasi baru terus mengubah cash-flow expectations dan risk, equilibrium price juga terus berubah—kadang sangat besar. EMH menjelaskan kecepatan proses tersebut, sedangkan behavioral finance menjelaskan mengapa persepsi, emosi, dan herding dapat membuat harga menyimpang dari intrinsic value. Dengan demikian, valuasi bukan usaha mencari satu angka yang pasti, melainkan kerangka konsisten untuk menghubungkan business decisions, cash flows, risk, required return, dan price.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Proxy / proxy fight | Pemberian kuasa voting; perebutan proxy untuk mengganti kendali | Menjelaskan mekanisme control pada common stock | [[5.1 Investment Asset Characteristics]] |
| Preemptive right | Hak proporsional membeli saham baru | Melindungi control dan mencegah wealth dilution | [[5.1 Investment Asset Characteristics]] |
| Classified stock | Kelas saham dengan hak berbeda | Hak voting dan dividen memengaruhi karakteristik dan value | [[5.1 Investment Asset Characteristics]] |
| Market price | Harga transaksi saham saat ini | Menjadi input keputusan dan expected return | [[5.1 Investment Asset Characteristics]] |
| Intrinsic value | PV expected cash flows pada risk-adjusted required return | Dasar membandingkan price dengan economic value | [[5.1 Investment Asset Characteristics]] |
| Dividend yield | $D_1/P_0$ | Komponen income dari total return | [[5.4 Return Relationships and Economic Variables]] |
| Capital gains yield | $(\hat{P}_1-P_0)/P_0$ | Komponen price appreciation dari total return | [[5.4 Return Relationships and Economic Variables]] |
| Gordon model | $\hat{P}_0=D_1/(r_s-g)$ | Valuasi mature constant-growth stock | [[5.1 Investment Asset Characteristics]] |
| Horizon value | Nilai pada $N$ dari cash flows setelah explicit forecast | Menggabungkan nonconstant dan constant growth | [[5.1 Investment Asset Characteristics]] |
| FCF valuation | PV FCF pada WACC, lalu bridge ke equity | Menilai firm sebelum mengalokasikan value ke claimholders | [[5.1 Investment Asset Characteristics]] |
| Market multiple | Valuasi relatif berdasarkan comparable firms | Alternatif atau pelengkap DCF | [[5.1 Investment Asset Characteristics]] |
| Preferred stock | Hybrid dengan fixed dividend tetapi tanpa default otomatis | Karakteristiknya berbeda dari common stock dan bond | [[5.1 Investment Asset Characteristics]] |
| Marginal investor | Investor aktif yang pandangannya menentukan market price | Menghubungkan individual estimates dengan satu quoted price | [[5.3 Economic Influences on Markets]] |
| Market equilibrium | $\hat{r}=r$ dan $P_0=\hat{P}_0$ | Menjelaskan arah price adjustment | [[5.3 Economic Influences on Markets]] |
| EMH | Informasi cepat masuk ke price; abnormal return konsisten sulit | Kerangka memahami information-price relationship | [[5.3 Economic Influences on Markets]] |
| Behavioral finance | Dampak bias dan emosi pada keputusan investor | Menjelaskan potensi penyimpangan price dari value | [[5.3 Economic Influences on Markets]] |

## Compression Notes

### Retained in Detail

- perbedaan market price dan intrinsic value;
- general dividend valuation model dan alasan harga jual tetap bergantung pada dividen;
- constant growth model, syarat $r_s>g$, dan example MicroDrive;
- hubungan dividend growth, earnings, cash flow, dan long-term value;
- expected return, required return, dan equilibrium;
- nonconstant growth, horizon value, dan worked example tiga tahap;
- FCF approach, market multiples, preferred stock, dan EMH;
- peran informasi dan behavioral factors dalam pembentukan harga.

### Condensed

- historical company anecdotes dan data saham individual;
- penjelasan berulang mengenai data quote saham;
- footnotes penelitian, sejarah teori, dan variasi teknis model;
- website resources dan prosedur kalkulator/spreadsheet;
- diskusi empiris panjang tentang anomalies dan mutual fund performance.

### Omitted / Beyond CF4

- end-of-chapter questions dan problems;
- alamat website, bibliography detail, serta software instructions;
- detail teknis quarterly dividend valuation yang hanya disebut dalam footnote;
- derivasi aljabar lengkap Gordon model pada Web Extension 7A.

## CF4 Connection Map

```text
Common and preferred stock characteristics
                    ↓
      [[5.1 Investment Asset Characteristics]]
                    ↓
Expected dividends + growth + required return
                    ↓
[[5.4 Return Relationships and Economic Variables]]
                    ↓
Information, interest rates, risk premium, and equilibrium
                    ↓
       [[5.3 Economic Influences on Markets]]
```

## Quick Reading Review

- Common stock memberikan ownership dan voting rights; proxy memungkinkan voting diwakilkan.
- Preemptive rights menjaga proporsi control dan melindungi pemegang saham lama dari dilution akibat saham baru dijual terlalu murah.
- Classified stock dapat memisahkan voting dan dividend rights; label kelas tidak memiliki arti universal.
- Market price dapat diamati, sedangkan intrinsic value harus diestimasi dari expected cash flows dan risk.
- Ultimate source of common-stock value adalah expected dividends, walaupun investor individual berharap menjual saham dengan capital gain.
- Expected total return sama dengan dividend yield ditambah capital gains yield.
- Gordon model adalah $\hat{P}_0=D_1/(r_s-g)$ dan hanya valid jika $r_s>g$.
- Dalam constant growth equilibrium, dividend, price, dan capital gains tumbuh pada $g$, sedangkan dividend yield tetap.
- Short-term earnings penting terutama karena informasinya mengenai long-term cash flows dan growth.
- Nonconstant-growth valuation menjumlahkan PV explicit dividends dan PV horizon value.
- Horizon value pada $N$ memakai $D_{N+1}$.
- FCF/WACC menghasilkan operating value; debt dan preferred claims harus dikurangkan untuk mendapatkan common equity value.
- Perpetual preferred stock dinilai sebagai $D_{ps}/r_{ps}$.
- Equilibrium mensyaratkan $\hat{r}=r$ dan $P_0=\hat{P}_0$ bagi marginal investor.
- Harga yang volatil dapat mencerminkan penyesuaian rasional terhadap informasi baru.
- Weak, semistrong, dan strong EMH berbeda menurut cakupan informasi yang dianggap sudah tercermin dalam harga.
- Behavioral finance menunjukkan bahwa pasar yang umumnya efisien tetap dapat mengalami mispricing dan bubbles.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Sections 3-4 | Chapter 7, Sections 7.1-7.2 |
| Section 5 | Chapter 7, Section 7.3 and Figure 7-1 |
| Section 6 | Chapter 7, Section 7.4 and Figure 7-2 |
| Section 7 | Chapter 7, Section 7.5 |
| Sections 8-9 | Chapter 7, Sections 7.6-7.7 and Figure 7-3 |
| Section 10 | Chapter 7, Section 7.8 and Figures 7-4 to 7-5 |
| Sections 11-13 | Chapter 7, Sections 7.9-7.11 |
| Section 14 | Chapter 7, Section 7.12 |
| Section 15 | Chapter 7, Section 7.13 |
| Chapter Synthesis onward | Chapter 7 synthesis and summary |
