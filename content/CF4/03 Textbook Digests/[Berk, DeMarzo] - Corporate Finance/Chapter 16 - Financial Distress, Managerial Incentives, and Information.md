---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk and Peter DeMarzo"
chapter: "16"
chapter_title: "Financial Distress, Managerial Incentives, and Information"
cf4_topics: ["4.3"]
cf4_relevance: "High"
source_scope: "Chapter 16; Sections 16.1-16.9, with Sections 16.1-16.7 retained in greatest detail in accordance with the CF4 syllabus"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, CorporateFinance, CapitalStructure, AgencyTheory]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 16: Financial Distress, Managerial Incentives, and Information

> [!ABSTRACT] Chapter in One View
> Dalam pasar modal sempurna, kemungkinan gagal bayar dan kebangkrutan tidak dengan sendirinya mengurangi nilai perusahaan: keduanya hanya mengalihkan kepemilikan aset dari pemegang saham kepada kreditur. Di dunia nyata, proses distress menimbulkan biaya langsung dan tidak langsung yang mengurangi arus kas total bagi seluruh investor. Karena itu, manfaat pajak utang harus dipertukarkan dengan present value biaya financial distress. Leverage juga mengubah insentif: pemegang saham perusahaan yang mendekati gagal bayar dapat mengambil risiko berlebihan, menolak proyek positif-NPV, atau menarik aset dari perusahaan sehingga merugikan kreditur dan menurunkan nilai total. Namun utang juga dapat memberi manfaat agensi dengan mempertahankan konsentrasi kepemilikan, mengurangi free cash flow yang dapat dihamburkan, meningkatkan monitoring, dan mendisiplinkan manajer. Trade-off theory yang diperluas menempatkan struktur modal optimal pada tingkat utang yang menyeimbangkan seluruh manfaat dan biaya tersebut. Bagian akhir bab menambahkan bahwa asymmetric information dapat membuat utang menjadi sinyal kredibel dan menyebabkan perusahaan lebih memilih retained earnings, lalu debt, lalu equity. Untuk CF4, inti chapter adalah bagaimana kepentingan pemegang saham, kreditur, dan manajer memengaruhi keputusan perusahaan serta bagaimana konflik itu dicegah atau dibatasi.

## 1. Why This Chapter Exists

Modigliani dan Miller menunjukkan bahwa struktur modal tidak memengaruhi nilai perusahaan dalam pasar modal sempurna. Chapter 15 kemudian menambahkan manfaat pajak utang. Jika utang memberi tax shield, mengapa perusahaan tidak mendanai hampir seluruh operasinya dengan utang?

Chapter ini menjawab pertanyaan tersebut dengan meninggalkan asumsi pasar sempurna secara bertahap. Pertama, chapter membedakan **economic distress** dari **financial distress** dan menunjukkan bahwa kebangkrutan saja bukan sumber hilangnya nilai. Kedua, chapter memasukkan biaya nyata dari distress. Ketiga, chapter menunjukkan bahwa utang mengubah keputusan manusia: pemegang saham, kreditur, dan manajer tidak selalu mempunyai kepentingan yang sama. Terakhir, chapter menjelaskan bagaimana informasi privat manajer dapat memengaruhi pilihan pendanaan.

Alur corporate finance-nya adalah:

```text
Pilihan leverage
↓
Kewajiban pembayaran dan distribusi risiko berubah
↓
Probabilitas distress serta insentif stakeholder berubah
↓
Arus kas aktual perusahaan dapat berubah
↓
Nilai perusahaan dan struktur modal optimal berubah
```

## 2. Chapter Map

```text
Chapter 16 — Financial Distress, Managerial Incentives, and Information
├── 16.1 Default and Bankruptcy in a Perfect Market
├── 16.2 The Costs of Bankruptcy and Financial Distress
├── 16.3 Financial Distress Costs and Firm Value
├── 16.4 Optimal Capital Structure: The Trade-Off Theory
├── 16.5 Exploiting Debt Holders: The Agency Costs of Leverage
│   ├── Excessive risk-taking and asset substitution
│   ├── Debt overhang and under-investment
│   ├── Cashing out
│   ├── Leverage ratchet effect
│   └── Debt maturity and covenants
├── 16.6 Motivating Managers: The Agency Benefits of Leverage
│   ├── Concentration of ownership
│   ├── Reduction of wasteful investment
│   └── Leverage and commitment
├── 16.7 Agency Costs and the Trade-Off Theory
├── 16.8 Asymmetric Information and Capital Structure
└── 16.9 Capital Structure: The Bottom Line
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 16.1-16.3 Default, bankruptcy, dan distress costs | High — dasar untuk memahami konsekuensi leverage dan konflik klaim | [[4.3 Agency Theory and Governance]] |
| 16.4 Trade-off theory | High — menghubungkan risiko, biaya distress, dan keputusan struktur modal | [[4.3 Agency Theory and Governance]] |
| 16.5 Agency costs of leverage | Very High — konflik shareholder-creditor dan mekanisme pembatasannya | [[4.3 Agency Theory and Governance]] |
| 16.6 Agency benefits of leverage | Very High — konflik manager-owner dan fungsi disiplin utang | [[4.3 Agency Theory and Governance]] |
| 16.7 Extended trade-off theory | High — sintesis biaya dan manfaat agensi | [[4.3 Agency Theory and Governance]] |
| 16.8 Asymmetric information | Beyond prescribed Chapter 16 scope, tetapi relevan sebagai konteks struktur modal | [[4.3 Agency Theory and Governance]] |
| 16.9 Bottom line | Supporting synthesis | [[4.3 Agency Theory and Governance]] |

## 3. 16.1 Default and Bankruptcy in a Perfect Market

Utang menciptakan kewajiban hukum. Perusahaan berada dalam **default** ketika gagal membayar bunga atau pokok utang yang diwajibkan. Sesudah default, kreditur memperoleh hak tertentu atas aset perusahaan; dalam kasus ekstrem, mereka mengambil kepemilikan melalui proses **bankruptcy**. Equity berbeda: perusahaan berharap membayar dividen, tetapi tidak mempunyai kewajiban hukum untuk melakukannya.

Sekilas, kemungkinan bankruptcy tampak sebagai kelemahan utama debt financing. Namun dalam pasar sempurna, MM Proposition I tetap berlaku walaupun utang berisiko dan perusahaan mungkin default. Untuk memahami alasannya, kita harus melihat nilai total yang tersedia bagi semua investor, bukan hanya payoff salah satu kelompok.

### Armin Industries: leverage dan risiko default

Armin akan bernilai USD 150 juta pada akhir tahun jika produk barunya berhasil dan USD 80 juta jika gagal. Perusahaan dapat memakai all-equity financing atau menerbitkan utang dengan pembayaran USD 100 juta pada akhir tahun.

| Outcome | Unlevered: Debt | Unlevered: Equity | Levered: Debt | Levered: Equity | Total untuk investor |
|---|---:|---:|---:|---:|---:|
| Produk berhasil | — | USD 150 juta | USD 100 juta | USD 50 juta | USD 150 juta |
| Produk gagal | — | USD 80 juta | USD 80 juta | USD 0 | USD 80 juta |

Jika produk berhasil tetapi perusahaan tidak mempunyai kas USD 100 juta, Armin tidak harus default. Dalam pasar modal sempurna, selama market value aset melebihi liabilitas, perusahaan dapat memperoleh pinjaman baru atau menerbitkan saham dengan harga wajar untuk membayar utang. Jadi solvency ditentukan oleh **nilai relatif aset dan liabilitas**, bukan semata-mata saldo kas saat pembayaran jatuh tempo.

Jika produk gagal, nilai aset hanya USD 80 juta sehingga pembayaran USD 100 juta tidak dapat dipenuhi. Kreditur memperoleh aset senilai USD 80 juta dan menanggung kekurangan USD 20 juta; pemegang saham menerima nol karena limited liability. Namun penurunan nilai total tetap USD 70 juta, dari USD 150 juta menjadi USD 80 juta, sama seperti pada perusahaan tanpa utang.

> [!WARNING] Important Distinction
> **Economic distress ≠ financial distress.**
>
> *Economic distress* adalah penurunan besar nilai aset akibat hasil bisnis yang buruk. *Financial distress* muncul ketika leverage membuat perusahaan tidak mampu memenuhi kewajibannya. Dalam contoh Armin, kegagalan produk menyebabkan kerugian ekonomi USD 70 juta dengan atau tanpa debt. Bankruptcy mengubah pembagian kerugian antara debt dan equity, tetapi dalam pasar sempurna tidak menciptakan kerugian tambahan.

### Example — Bankruptcy Risk and Firm Value

**Situation**

Produk Armin memiliki peluang sukses dan gagal masing-masing 50%. Risiko bersifat diversifiable, sehingga cost of capital sama dengan risk-free rate 5%.

**Calculation**

Tanpa leverage:

$$
V^U=\frac{0.5(150)+0.5(80)}{1.05}=109.52\text{ juta}
$$

Dengan leverage:

$$
E=\frac{0.5(50)+0.5(0)}{1.05}=23.81\text{ juta}
$$

$$
D=\frac{0.5(100)+0.5(80)}{1.05}=85.71\text{ juta}
$$

$$
V^L=E+D=23.81+85.71=109.52\text{ juta}
$$

**Meaning**

MM Proposition I tetap berlaku: $V^L=V^U$. Default risk memengaruhi harga dan payoff debt serta equity, tetapi tidak mengurangi total firm value jika tidak ada biaya atau friksi lain.

## 4. 16.2 The Costs of Bankruptcy and Financial Distress

Deskripsi pasar sempurna tidak realistis karena kebangkrutan bukan sekadar menyerahkan kunci perusahaan kepada kreditur. Prosesnya kompleks, memakan waktu, membutuhkan koordinasi banyak pihak, dan dapat merusak hubungan perusahaan bahkan sebelum filing terjadi. Biaya ini mengurangi cash flow yang akhirnya tersedia bagi investor.

### Bankruptcy code: liquidation versus reorganization

Tanpa prosedur terkoordinasi, masing-masing kreditur dapat mencoba menyita aset lebih dahulu. Perebutan ini tidak hanya tidak adil, tetapi juga dapat menghancurkan going-concern value jika aset yang lebih bernilai sebagai satu kesatuan dijual secara terpisah.

Dalam konteks textbook Amerika Serikat:

| Bentuk | Mekanisme | Hasil utama |
|---|---|---|
| **Chapter 7 liquidation** | Trustee menjual aset melalui auction | Hasil penjualan membayar kreditur dan perusahaan berhenti beroperasi |
| **Chapter 11 reorganization** | Upaya penagihan ditangguhkan; existing management mula-mula menyusun reorganization plan | Kreditur dapat menerima cash, debt baru, atau equity; bisnis tetap beroperasi bila reorganisasi disetujui |

Reorganization masuk akal bila nilai perusahaan sebagai going concern lebih besar daripada nilai likuidasinya. Jika rencana yang dapat diterima tidak tercapai, pengadilan dapat memaksakan liquidation.

### Direct costs of bankruptcy

Biaya langsung adalah pembayaran kepada profesional dan institusi yang menjalankan proses: lawyer, accountant, consultant, appraiser, auctioneer, restructuring adviser, dan investment banker. Kreditur juga menanggung biaya hukum serta opportunity cost karena pembayaran tertunda.

Dalam nilai absolut, biaya pada korporasi besar dapat sangat besar. Sebagai persentase nilai perusahaan, textbook mencatat direct costs rata-rata sekitar 3%-4% dari pre-bankruptcy market value aset pada sejumlah studi, dengan kecenderungan persentasenya lebih tinggi pada perusahaan kecil. Perusahaan dapat menguranginya melalui negotiated workout atau **prepackaged bankruptcy**, yaitu reorganization plan yang dinegosiasikan terlebih dahulu sebelum filing.

### Indirect costs of financial distress

Biaya tidak langsung lebih sulit diukur dan sering lebih besar. Banyak yang timbul sebelum bankruptcy karena pelanggan, pemasok, karyawan, dan pihak lain mengantisipasi perusahaan mungkin tidak memenuhi komitmen jangka panjangnya.

| Indirect cost | Mekanisme penurunan nilai | Paling berat ketika... |
|---|---|---|
| Loss of customers | Pelanggan menghindari produk karena warranty, service, upgrade, atau delivery masa depan diragukan | Nilai produk bergantung pada dukungan berkelanjutan, misalnya airline, auto, hardware/software |
| Loss of suppliers | Pemasok menolak trade credit atau pengiriman karena takut tidak dibayar | Perusahaan sangat bergantung pada inventory dan supplier financing |
| Loss of employees | Karyawan penting keluar; merekrut atau mempertahankan talent menjadi mahal | Nilai perusahaan terutama berasal dari human capital |
| Loss of receivables | Pelanggan yang berutang menunda atau menghindari pembayaran karena enforcement diperkirakan melemah | Collection bergantung pada hubungan dan reputasi berulang |
| Fire sale of assets | Kebutuhan kas mendesak memaksa aset atau subsidiary dijual di bawah nilai optimal | Aset tidak memiliki pasar yang kompetitif dan likuid |
| Inefficient liquidation/continuation | Aset produktif dipaksa dilepas, atau perusahaan negatif-NPV dibiarkan terus hidup | Prosedur dan insentif menghambat keputusan shutdown yang tepat |
| Costs to creditors | Default besar mendorong kreditur sendiri ke distress | Eksposur kreditur terkonsentrasi pada perusahaan tersebut |

**Debtor-in-possession (DIP) financing** dapat membantu perusahaan dalam bankruptcy terus beroperasi. Utang baru ini senior terhadap klaim lama, sehingga pemberi dana bersedia menyediakan working capital meskipun perusahaan telah filing.

Ada batas alami pada biaya yang ditanggung langsung oleh investor dan kreditur: bila bankruptcy formal terlalu mahal, mereka dapat memilih workout atau prepack. Namun tidak ada batas serupa pada kerusakan hubungan dengan pelanggan, pemasok, dan karyawan. Pihak-pihak ini mungkin meminta harga yang lebih menguntungkan bagi mereka—wage lebih tinggi, purchase price lebih rendah, atau supplier price lebih tinggi—hanya karena perusahaan terlalu levered.

> [!WARNING] Important Distinction
> **Kerugian kreditur karena tidak menerima seluruh face value bukan dengan sendirinya financial distress cost.** Itu terutama transfer/realokasi payoff akibat nilai aset yang rendah. Financial distress cost adalah penurunan tambahan pada nilai total—misalnya pelanggan pergi karena warranty diragukan atau aset dijual secara fire sale—di atas kerugian yang sudah disebabkan oleh economic distress.

Dalam menaksir indirect cost, dua filter harus selalu dipakai:

1. Apakah ini mengurangi **total firm value**, bukan hanya memindahkan nilai dari satu stakeholder ke stakeholder lain?
2. Apakah kerugian ini **incremental karena financial distress**, bukan kerugian bisnis yang tetap terjadi tanpa leverage?

Textbook mengutip estimasi potential distress loss sekitar 10%-20% dari firm value untuk highly levered firms yang mengalami distress. Angka tersebut menunjukkan bahwa biaya distress dapat secara material mengimbangi tax shield.

## 5. 16.3 Financial Distress Costs and Firm Value

Begitu distress costs memengaruhi cash flow aset, asumsi MM bahwa capital structure tidak memengaruhi cash flow perusahaan tidak lagi berlaku.

### Example — Firm Value When Financial Distress Is Costly

**Situation**

Kembali ke Armin. Tanpa leverage, nilai aset tetap USD 150 juta jika berhasil dan USD 80 juta jika gagal. Dengan utang USD 100 juta, kegagalan produk memicu distress dan USD 20 juta dari asset value hilang, sehingga kreditur hanya menerima USD 60 juta.

**Calculation**

Levered equity tetap bernilai USD 23.81 juta. Debt sekarang bernilai:

$$
D=\frac{0.5(100)+0.5(60)}{1.05}=76.19\text{ juta}
$$

Maka:

$$
V^L=23.81+76.19=100.00\text{ juta}
$$

Present value distress costs:

$$
PV(\text{Financial Distress Costs})
=\frac{0.5(0)+0.5(20)}{1.05}
=9.52\text{ juta}
$$

Sehingga:

$$
V^L=V^U-PV(\text{Financial Distress Costs})
=109.52-9.52=100.00\text{ juta}
$$

**Meaning**

Leverage kini menurunkan total firm value karena dalam failure state terdapat USD 20 juta value destruction yang tidak terjadi pada unlevered firm.

### Who pays for financial distress costs?

Secara ex post, ketika bankruptcy telah terjadi dan equity bernilai nol, biaya distress tampak sepenuhnya ditanggung kreditur. Tetapi kreditur mengantisipasinya pada saat debt diterbitkan dan membayar lebih sedikit untuk sekuritas tersebut. Proceeds yang lebih rendah mengurangi dana yang tersedia untuk dividend, share repurchase, atau investment. Karena itu:

> Ketika securities fairly priced, **original shareholders membayar present value dari bankruptcy dan financial distress costs**.

### Example — Financial Distress Costs and the Stock Price

Armin semula memiliki 10 juta saham dan tanpa debt. Nilai unlevered USD 109.52 juta, sehingga harga awal USD 10.952 per saham. Pengumuman recapitalization dengan debt menurunkan nilai perusahaan menjadi USD 100 juta. Harga saham segera turun menjadi:

$$
P_0=\frac{100\text{ juta}}{10\text{ juta}}=\$10.00
$$

Debt dijual seharga USD 76.19 juta dan digunakan membeli kembali 7.619 juta saham, menyisakan 2.381 juta saham. Levered equity USD 23.81 juta berarti harga pascatransaksi tetap USD 10.00. Kerugian pemegang saham lama adalah USD 0.952 per saham atau USD 9.52 juta total—tepat sama dengan PV distress costs.

## 6. 16.4 Optimal Capital Structure: The Trade-Off Theory

**Trade-off theory** menimbang tax benefit of debt terhadap expected financial distress costs. Nilai levered firm adalah:

$$
\boxed{V^L=V^U+PV(\text{Interest Tax Shield})-PV(\text{Financial Distress Costs})}
\tag{16.1}
$$

Keterangan:

- $V^L$: value of the levered firm;
- $V^U$: value of the unlevered firm;
- $PV(\text{Interest Tax Shield})$: nilai kini pajak yang dihemat karena interest;
- $PV(\text{Financial Distress Costs})$: nilai kini expected value destruction akibat distress.

Pada debt rendah, default risk kecil dan kenaikan debt terutama menambah tax shield. Pada debt tinggi, probability of default serta distress costs tumbuh dan dapat mengalahkan manfaat pajak. Optimal debt $D^*$ adalah tingkat yang memaksimalkan $V^L$; secara marginal, tambahan tax saving dari sedikit debt lagi tepat diimbangi tambahan expected distress cost.

### Determinants of PV financial distress costs

Tiga komponen menentukan present value tersebut:

1. **Probability of distress.** Naik ketika liabilities relatif terhadap assets meningkat, cash flow atau asset value makin volatile, dan kemampuan memenuhi debt commitment menurun.
2. **Magnitude of costs if distress occurs.** Tinggi pada perusahaan yang bergantung pada human capital, customer confidence, future service, dan intangible assets; lebih rendah bila aset tangible mudah dijual tanpa diskon besar.
3. **Discount rate appropriate for distress costs.** Distress costs cenderung tinggi saat keadaan ekonomi buruk, sehingga beta cash flow biaya tersebut berlawanan tanda dengan beta perusahaan. Untuk high-beta firm, distress lebih mungkin saat downturn dan PV risk-adjusted dari biaya distress dapat lebih tinggi.

Implikasinya, utility dengan stable and predictable cash flow dapat menanggung debt lebih tinggi dengan default probability rendah. Technology atau semiconductor firm dengan volatile cash flow dan human capital penting seharusnya memakai debt lebih rendah.

### Figure 16.1 — Optimal Leverage with Taxes and Financial Distress Costs

Figure menunjukkan $V^L$ terhadap debt $D$. Tanpa distress costs, value naik bersama tax shield sampai interest melebihi EBIT dan tax shield tidak lagi bertambah penuh. Dengan distress costs, kurva membelok turun. Firm dengan high distress costs mencapai puncak pada $D^*_{high}$ yang lebih rendah daripada $D^*_{low}$ milik firm dengan low distress costs.

### Example — Choosing an Optimal Debt Level

Greenleaf memperkirakan effective tax advantage $\tau^*=15\%$ dan alternative debt berikut (juta dolar):

| Debt | 0 | 10 | 20 | 25 | 30 | 35 |
|---:|---:|---:|---:|---:|---:|---:|
| PV tax shield | 0.00 | 1.50 | 3.00 | 3.75 | 4.50 | 5.25 |
| PV distress costs | 0.00 | 0.00 | 0.38 | 1.62 | 4.00 | 6.38 |
| Net benefit | 0.00 | 1.50 | **2.62** | 2.13 | 0.50 | -1.13 |

Optimal debt adalah USD 20 juta karena net benefit maksimum USD 2.62 juta. Memilih debt maksimum USD 35 juta justru menghancurkan nilai: distress costs melebihi tax shield.

## 7. 16.5 Exploiting Debt Holders: The Agency Costs of Leverage

**Agency costs** timbul ketika stakeholder mempunyai kepentingan yang bertentangan. Manajer sering bertindak demi equity holders karena dipilih oleh board yang dipilih shareholders dan mungkin memiliki saham. Ketika debt ada, keputusan yang menaikkan equity value tidak selalu menaikkan debt value atau total firm value. Konflik paling parah saat debt berisiko dan firm mendekati distress.

### Excessive risk-taking and asset substitution

### Example — Baxter's Risky Strategy

Baxter berutang USD 1 juta pada akhir tahun. Tanpa perubahan strategi, aset akan bernilai USD 900,000: firm default, debt holders menerima USD 900,000, equity menerima nol.

Strategi baru tanpa initial investment menghasilkan aset USD 1.3 juta bila sukses dan USD 300,000 bila gagal, masing-masing dengan peluang 50%. Expected asset value hanya:

$$
0.5(1{,}300{,}000)+0.5(300{,}000)=800{,}000
$$

Jadi strategi menghancurkan expected value USD 100,000. Namun payoff-nya adalah:

| Strategy/outcome (USD 000) | Asset value | Debt | Equity |
|---|---:|---:|---:|
| Old strategy | 900 | 900 | 0 |
| Risky strategy: success | 1,300 | 1,000 | 300 |
| Risky strategy: failure | 300 | 300 | 0 |
| Risky strategy: expected | 800 | 650 | 150 |

Equity holders naik dari payoff nol menjadi expected payoff USD 150,000; debt holders turun dari USD 900,000 menjadi USD 650,000. Dari penurunan USD 250,000 pada debt, USD 150,000 ditransfer ke equity dan USD 100,000 benar-benar destroyed oleh negative expected payoff.

Karena limited liability, downside tambahan banyak ditanggung debt holders sementara equity menangkap upside. Inilah **asset substitution problem**: shareholders mengganti low-risk assets/strategy dengan yang lebih berisiko. Konflik ini dapat menghasilkan **over-investment** pada proyek negative-NPV jika risikonya cukup tinggi.

### Debt overhang and under-investment

Baxter kemudian mempertimbangkan proyek risk-free: investasi USD 100,000 hari ini menghasilkan USD 150,000 pada akhir tahun. Dengan risk-free rate 5%, proyek jelas positive-NPV:

$$
NPV=-100{,}000+\frac{150{,}000}{1.05}=42{,}857
$$

Namun existing assets hanya USD 900,000 dan debt claim USD 1 juta. Jika shareholders memasukkan USD 100,000, total year-end asset value menjadi USD 1.05 juta. Debt naik dari recovery USD 900,000 menjadi USD 1 juta; equity baru menerima USD 50,000. Shareholders membayar USD 100,000 untuk memperoleh USD 50,000, sehingga menolak proyek walaupun proyek menambah total firm value.

**Debt overhang** atau **under-investment problem** terjadi ketika keuntungan proyek positive-NPV terutama mengalir kepada existing debt holders sehingga equity holders tidak mau membiayainya. Cost bagi perusahaan adalah NPV dari peluang pertumbuhan yang dilewatkan. Karena itu, masalah paling berat pada highly levered firms yang masih memiliki banyak future growth opportunities.

### Cashing out

Saat default hampir pasti, shareholders juga terdorong menarik cash sebelum kreditur mengambil sisa aset. Baxter dapat menjual equipment seharga USD 25,000 dan membayarkannya sebagai immediate dividend, meskipun kehilangan equipment menurunkan year-end firm value dari USD 900,000 menjadi USD 800,000. Equity mendapat USD 25,000 sekarang sedangkan penurunan USD 100,000 terutama ditanggung debt holders. Ini adalah bentuk ekstrem under-investment: aset dilikuidasi di bawah nilai ekonominya untuk mendistribusikan proceeds kepada shareholders.

### Estimating debt overhang

Untuk proyek dengan risiko serupa dengan firm, equity holders akan mendapat manfaat hanya jika profitability index melewati cutoff berikut:

$$
\boxed{\frac{NPV}{I}>\frac{\beta_D}{\beta_E}\frac{D}{E}}
\tag{16.2}
$$

Keterangan:

- $I$: initial investment oleh equity holders;
- $D$ dan $E$: market value debt dan equity;
- $\beta_D$ dan $\beta_E$: debt beta dan equity beta;
- $NPV/I$: profitability index proyek.

Cutoff adalah relative riskiness of debt dikalikan debt-equity ratio. Tanpa debt ($D=0$) atau dengan risk-free debt ($\beta_D=0$), syarat kembali menjadi $NPV>0$. Jika debt berisiko, cutoff positif dan naik bersama leverage, sehingga beberapa proyek positive-NPV ditolak.

### Example — Estimating the Debt Overhang

Untuk Sears, $\beta_E=1.36$, $\beta_D=0.17$, dan $D/E=0.30$:

$$
\frac{NPV}{I}>\frac{0.17}{1.36}(0.30)=0.0375
$$

Investasi USD 100,000 harus mempunyai minimum NPV USD 3,750 agar menguntungkan shareholders. Untuk Saks, $\beta_E=1.85$, $\beta_D=0.31$, dan $D/E=1.0$:

$$
\frac{NPV}{I}>\frac{0.31}{1.85}(1.0)=0.1675
$$

Minimum NPV menjadi USD 16,750. Debt overhang Saks lebih parah karena debt lebih berisiko dan leverage lebih tinggi.

### Who ultimately bears agency costs?

Ex post, shareholders dapat mentransfer nilai dari debt holders. Ex ante, kreditur rasional mengantisipasi perilaku tersebut dan membayar lebih sedikit atau meminta yield lebih tinggi ketika debt diterbitkan. Proceeds yang lebih rendah dibebankan kepada original shareholders. Seperti distress cost, anticipated agency cost menurunkan initial firm/share value.

Agency costs hanya material bila terdapat peluang default yang membebankan loss pada debt holders. Karena itu, agency costs cenderung naik bersama amount dan riskiness of debt.

### Less leverage as a control

Jika debt Baxter hanya USD 400,000, old strategy menyisakan equity USD 500,000. Risky strategy memberi expected equity USD 450,000, sehingga shareholders menolaknya. Proyek positive-NPV menaikkan equity menjadi USD 650,000 untuk investasi USD 100,000, sehingga diterima. Menjual equipment demi dividend juga tidak menarik karena shareholders sendiri menanggung sebagian besar penurunan future asset value. Leverage yang lebih rendah menyelaraskan keputusan equity dengan total firm value.

### The leverage ratchet effect

Ketika perusahaan pertama kali menerbitkan debt, shareholders menanggung anticipated costs melalui issue price yang lebih rendah. Namun setelah debt lama berada di tangan kreditur, sebagian cost dari debt tambahan dibebankan kepada **existing debt holders** melalui penurunan harga klaim mereka. Ini menciptakan dua kecenderungan:

1. shareholders mungkin ingin **menambah leverage**, bahkan jika total firm value turun;
2. shareholders tidak ingin **mengurangi leverage** melalui debt buyback, bahkan jika deleveraging menaikkan total firm value.

Dalam contoh Baxter, menurunkan principal dari USD 1 juta menjadi USD 400,000 menghilangkan under-investment dan menaikkan firm value. Tetapi existing debt harus dibeli kembali pada post-transaction fair value yang sudah mencerminkan perbaikan tersebut. Shareholders harus membayar kreditur untuk value gain yang deleveraging ciptakan, sehingga mereka sendiri tidak memperoleh net benefit. Utang karena itu dapat bergerak seperti ratchet: mudah naik, sulit turun secara sukarela.

### Debt maturity and covenants

Dua mekanisme dapat mengurangi agency costs of debt:

- **Shorter debt maturity.** Dengan short-term debt, firm harus repay, refinance, default, atau renegotiate sebelum mempunyai banyak kesempatan mengeksploitasi kreditur. Tetapi refinancing yang lebih sering dapat menaikkan liquidity/default risk dan distress costs.
- **Debt covenants.** Kreditur membatasi dividend besar, jenis investment tertentu, asset sales, atau additional borrowing. Covenants mencegah risk shifting dan cashing out serta dapat membuat debt lebih murah. Namun pembatasan juga mengurangi managerial flexibility dan berpotensi menghalangi positive-NPV opportunity.

> [!INFO] CF4 Connection
> Konflik shareholder-creditor bukan sekadar persoalan etika. Limited liability dan prioritas klaim secara mekanis mengubah payoff keputusan. Debt maturity dan covenants adalah governance/contracting devices yang berusaha menyelaraskan kembali insentif tersebut.

## 8. 16.6 Motivating Managers: The Agency Benefits of Leverage

Section sebelumnya mengasumsikan managers bertindak untuk shareholders. Namun pada public corporation, ownership dan control terpisah. Manajer biasanya hanya memiliki sebagian kecil saham dan jarang diberhentikan kecuali performance sangat buruk. **Management entrenchment** terjadi ketika lemahnya ancaman penggantian membuat manajer dapat menjalankan perusahaan demi kepentingan sendiri.

Utang dapat memberi **agency benefits** dengan meningkatkan effort, mengurangi perks dan wasteful investment, memperkuat monitoring, dan menciptakan commitment. Jadi leverage bukan hanya sumber agency cost; pada kondisi tertentu ia memperbaiki governance.

### Concentration of ownership

Ross Jackson membutuhkan modal untuk memperluas toko furniturnya. Bila memakai debt, ia mempertahankan 100% equity. Setiap USD 1 peningkatan firm value menaikkan kekayaannya USD 1. Bila menjual 40% equity, ia hanya menangkap USD 0.60 dari setiap USD 1 peningkatan value dan hanya menanggung 60% biaya perks.

Akibat dilution, effort Ross mungkin turun dan konsumsi corporate perks naik. Investor baru akan mengantisipasi perilaku itu dan mendiskon harga saham yang mereka beli; original owner tetap membayar agency cost. Debt dapat menghindari dilution, mempertahankan ownership concentration, dan membuat owner-manager menangkap penuh manfaat serta biaya keputusannya.

Namun concentration tidak selalu lebih baik tanpa batas. Ownership block yang besar juga dapat membuat manager lebih sulit diganti dan memperkuat entrenchment. Yang penting adalah efek bersih pada alignment dan control.

### Reduction of wasteful investment

Ketika perusahaan membesar, ownership cenderung tersebar: founder pensiun atau melakukan diversification, kebutuhan capital melebihi debt capacity, dan professional managers memiliki sedikit saham. Konflik manager-shareholder meningkat.

Masalah yang lebih besar daripada personal perks adalah **wasteful investment**. Manager dapat melakukan negative-NPV investment karena:

- **Empire building:** ukuran perusahaan, bukan profitability, meningkatkan salary, prestige, power, atau publicity. Akibatnya manager mempertahankan division merugi, membayar acquisition terlalu mahal, menambah capex atau employees yang tidak perlu.
- **Overconfidence dan escalation of commitment:** manager terlalu optimistis terhadap prospect atau terus mendanai proyek yang seharusnya dihentikan.

**Free cash flow hypothesis** menyatakan bahwa wasteful spending paling mungkin ketika perusahaan memiliki cash flow melebihi kebutuhan seluruh positive-NPV investments dan debt payments. Debt menciptakan mandatory interest payments, menyisakan lebih sedikit discretionary cash bagi manager. Cash yang ketat memaksa operasi lebih efisien dan membuat external fundraising—yang mengundang scrutiny—diperlukan untuk investment tambahan.

Leverage juga mengurangi entrenchment karena distress meningkatkan kemungkinan manager diberhentikan. Kreditur yang terekspos loss ikut memonitor tindakan manajer. Dengan demikian, debt dapat menjadi layer tambahan oversight.

### Leverage and commitment

Debt dapat mengikat tangan manajemen dan membuat commitment tertentu lebih kredibel. Ancaman bankruptcy dapat memperkuat posisi perusahaan dalam renegotiating wage atau supplier terms karena counterparties memahami bahwa tanpa concession perusahaan mungkin benar-benar gagal. Leverage juga dapat mendorong perusahaan bersaing lebih agresif untuk melindungi market share.

Namun efek commitment dapat berbalik: firm yang terlalu fragile mungkin tidak mampu menghadapi kompetisi, sehingga rivals justru lebih agresif. Manfaat leverage selalu bergantung pada karakter bisnis dan level debt.

### Moral hazard and external guarantees

**Moral hazard** muncul ketika pihak mengubah perilaku karena tidak menanggung seluruh konsekuensinya. Equity holders dapat mengambil risiko berlebihan bila downside ditanggung bondholders; bankers dapat meningkatkan leverage bila deposit insurance atau expected government bailout mensubsidi debt. Biasanya lenders merespons dengan higher borrowing cost, monitoring, atau covenants. Jika bailout melindungi bondholders, disiplin tersebut melemah dan sebagian cost akhirnya berpindah kepada taxpayers.

> [!WARNING] Important Distinction
> **Agency cost of debt** adalah konflik equity-creditor yang diperburuk oleh leverage. **Agency benefit of debt** adalah perbaikan konflik manager-owner melalui discipline, monitoring, ownership concentration, dan pengurangan free cash flow. Debt yang sama dapat menghasilkan keduanya sekaligus.

## 9. 16.7 Agency Costs and the Trade-Off Theory

Trade-off theory yang lebih lengkap memasukkan konsekuensi insentif:

$$
\boxed{
V^L=V^U+PV(\text{Interest Tax Shield})
-PV(\text{Financial Distress Costs})
-PV(\text{Agency Costs of Debt})
+PV(\text{Agency Benefits of Debt})
}
\tag{16.3}
$$

Pada debt rendah, tambahan leverage dapat menaikkan value melalui tax shield dan improved managerial incentives. Bila leverage terlalu tinggi, hilangnya tax benefits akibat excess interest, distress costs, excessive risk-taking, under-investment, dan konflik kreditur mendominasi. Optimal debt $D^*$ menyeimbangkan seluruh efek tersebut, bukan hanya tax shield versus legal bankruptcy cost.

### Figure 16.2 — Optimal Leverage with Taxes, Distress, and Agency Effects

Di sisi **too little leverage**, value yang hilang berasal dari unused tax benefits, excessive perks, wasteful investment, dan empire building. Di sisi **too much leverage**, value hilang karena excess interest, distress costs, excessive risk-taking, dan under-investment. Puncak kurva adalah $D^*$, tetapi lokasi puncak berbeda antarperusahaan.

### Firm characteristics and optimal debt

| Characteristic | R&D-intensive / growth firm | Mature, low-growth firm |
|---|---|---|
| Current free cash flow | Rendah | Tinggi |
| Future growth opportunities | Banyak | Sedikit |
| Main assets | Human capital, intangible, technology | Tangible assets |
| Distress costs | Tinggi | Relatif rendah |
| Risk shifting flexibility | Tinggi | Lebih rendah |
| Debt overhang concern | Tinggi karena perlu future financing | Lebih rendah |
| Agency benefit of discipline | Relatif kecil | Tinggi karena excess cash |
| Predicted leverage | Rendah | Tinggi |

Biotech dan technology firms cenderung memakai leverage rendah karena tidak membutuhkan banyak tax shield saat current cash flow rendah, distress dapat menghancurkan human capital/customer relationships, strategy mudah dibuat lebih berisiko, dan growth projects memerlukan future capital. Real estate, utilities, dan supermarket chains lebih cocok memakai debt tinggi karena cash flow stabil, tangible assets mudah dilikuidasi, dan discipline atas free cash flow lebih bermanfaat.

### Debt levels in practice and management entrenchment theory

Trade-off theory menjelaskan bagaimana firm **seharusnya** memilih capital structure untuk memaksimalkan shareholder value, tetapi actual decision dibuat oleh managers yang mempunyai kepentingan sendiri. Management entrenchment theory menyatakan managers cenderung menghindari debt discipline dan job-loss risk, sehingga memilih leverage di bawah $D^*$. Mereka menaikkan leverage hanya ketika shareholder activism atau takeover threat membuat underleverage berbahaya bagi posisi mereka.

> [!INFO] CF4 Connection
> Struktur modal adalah hasil governance. Kita tidak dapat menganggap manager otomatis memilih $D^*$: pihak yang mengambil keputusan juga merasakan manfaat dan biaya pribadi yang berbeda dari pemegang saham, kreditur, maupun total firm.

## 10. 16.8 Asymmetric Information and Capital Structure

> [!NOTE] Beyond CF4 prescribed scope
> Silabus CF4 mencantumkan Berk & DeMarzo Chapter 16.1-16.7. Section 16.8 dipertahankan secara ringkas untuk menjaga alur chapter, tetapi tidak dibahas sedalam bagian inti.

Managers biasanya mengetahui prospect dan true value perusahaan lebih baik daripada outside investors. Karena cheap talk yang menguntungkan dirinya sendiri tidak kredibel, **credibility principle** menyatakan bahwa claim menjadi kredibel bila didukung tindakan yang terlalu mahal dilakukan jika claim itu salah. Debt dapat menjadi signal: manager yang menerima large future debt payments menunjukkan keyakinan bahwa firm mampu menghasilkan cash flow; bila keyakinan itu palsu, distress dan kehilangan pekerjaan menjadi cost baginya.

Pada equity issuance, private information menciptakan **adverse selection**. Investor memahami manager lebih bersedia menjual equity ketika overpriced dan karena itu menurunkan harga yang mau dibayar—**lemons principle**. Akibatnya, announcement of equity issue cenderung menekan share price dan manager yang percaya saham underpriced enggan menerbitkannya.

**Pecking order hypothesis** memprediksi urutan preferensi financing: (1) retained earnings, yang tidak mengalami adverse-selection discount; (2) debt, yang payoff-nya relatif kurang sensitif terhadap private information; lalu (3) equity. Namun ini bukan rule absolut dan tidak dengan sendirinya menentukan target leverage. **Market timing view** menambahkan bahwa capital structure saat ini sebagian mencerminkan kondisi pasar ketika firm historically mencari funding.

## 11. 16.9 Capital Structure: The Bottom Line

MM tetap menjadi titik awal: dalam perfect market, security choice mengubah pembagian risk tetapi tidak mengubah total value. Karena itu, semua alasan struktur modal memengaruhi value harus ditelusuri ke market imperfections.

Tax shield adalah benefit yang paling jelas. Tetapi default risk sendiri bukan cost; konsekuensi distress yang menghancurkan cash flow-lah yang menjadi cost. Too much debt juga mendorong risk shifting dan under-investment, sedangkan too little debt dapat membiarkan excessive free cash flow dan managerial waste. Financing choice selanjutnya dipengaruhi private information, signaling, dan adverse selection.

Capital structure optimal juga tidak harus dipertahankan secara presisi setiap saat. Mengubah debt-equity mix melalui issuance atau repurchase menimbulkan transaction costs. Firm dapat membiarkan leverage bergerak pasif akibat perubahan market value equity dan baru melakukan adjustment ketika deviasi dari target cukup besar.

## Chapter Synthesis

Jika seluruh chapter diringkas menjadi satu cerita, ceritanya adalah bahwa **utang mengubah lebih dari sekadar cara cash flow dibagi**. Dalam perfect market, perubahan pembagian itu tidak relevan bagi total value: bankruptcy hanya memindahkan control kepada creditor setelah bad business outcome. Di dunia nyata, kemungkinan distress mengubah perilaku pelanggan, pemasok, karyawan, investor, manager, dan shareholders—dan perubahan perilaku inilah yang dapat menciptakan atau menghancurkan value.

Konflik pertama berada antara equity dan debt. Ketika debt hampir default, limited liability membuat equity menyerupai residual claim dengan upside tetapi sedikit downside: shareholders terdorong menaikkan risk, menolak investasi yang benefit-nya jatuh ke creditor, atau menarik asset lebih awal. Contract design melalui maturity dan covenants berusaha membatasi tindakan tersebut.

Konflik kedua berada antara owners dan managers. Karena managers tidak menanggung seluruh biaya perks atau wasteful expansion, debt dapat menjadi alat disiplin: ia mengurangi discretionary free cash flow, meningkatkan monitoring, mempertahankan ownership concentration, dan membuat poor performance lebih berbahaya bagi manager. Namun discipline berubah menjadi fragility bila debt berlebihan.

Maka tidak ada universal debt ratio yang terbaik. Optimal leverage adalah firm-specific balance antara tax shield, distress costs, agency costs, dan agency benefits. Bahkan sesudah economic optimum diketahui, managerial entrenchment, information asymmetry, signaling, adverse selection, dan transaction costs menjelaskan mengapa actual leverage dapat berbeda dari target.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Default | Kegagalan memenuhi required debt payment | Memicu hak creditor dan kemungkinan bankruptcy | [[4.3 Agency Theory and Governance]] |
| Economic distress | Penurunan value akibat buruknya business outcome | Harus dipisahkan dari cost yang benar-benar disebabkan financing | [[4.3 Agency Theory and Governance]] |
| Financial distress | Kesulitan memenuhi debt obligation serta konsekuensinya | Sumber potential value destruction pada levered firm | [[4.3 Agency Theory and Governance]] |
| Direct bankruptcy costs | Legal, accounting, advisory, dan administrative costs | Mengurangi cash flow total bagi investor | [[4.3 Agency Theory and Governance]] |
| Indirect distress costs | Kerusakan relationship, operations, asset sales, dan incentives | Sering lebih besar dan muncul sebelum filing | [[4.3 Agency Theory and Governance]] |
| Trade-off theory | Menyeimbangkan benefits dan costs of debt | Menjelaskan firm-specific optimal leverage | [[4.3 Agency Theory and Governance]] |
| Asset substitution | Equity memilih risk lebih tinggi yang merugikan debt/firm | Bentuk over-investment dan risk shifting | [[4.3 Agency Theory and Governance]] |
| Debt overhang | Equity menolak positive-NPV project karena benefit mengalir ke debt | Menjelaskan under-investment pada distressed firm | [[4.3 Agency Theory and Governance]] |
| Cashing out | Asset/cash ditarik untuk shareholders sebelum default | Transfer value dari creditors dan dapat menghancurkan firm value | [[4.3 Agency Theory and Governance]] |
| Leverage ratchet effect | Existing debt mendorong leverage naik dan menghambat deleveraging | Menjelaskan persistence of excessive debt | [[4.3 Agency Theory and Governance]] |
| Debt covenants | Contractual restrictions atas corporate actions | Mengurangi agency cost tetapi membatasi flexibility | [[4.3 Agency Theory and Governance]] |
| Management entrenchment | Manager terlindungi dari threat of replacement | Menyebabkan keputusan demi kepentingan manager | [[4.3 Agency Theory and Governance]] |
| Free cash flow hypothesis | Excess cash mendorong wasteful spending | Menjelaskan agency benefit of debt discipline | [[4.3 Agency Theory and Governance]] |
| Agency benefits of debt | Alignment, discipline, monitoring, dan commitment dari leverage | Menjelaskan mengapa zero debt juga tidak selalu optimal | [[4.3 Agency Theory and Governance]] |
| Moral hazard | Perilaku berubah karena pelaku tidak menanggung seluruh downside | Penting pada equity-creditor conflict dan bailout | [[4.3 Agency Theory and Governance]] |
| Asymmetric information | Manager memiliki informasi lebih baik daripada investor | Memengaruhi signaling dan financing choice | [[4.3 Agency Theory and Governance]] |

## Compression Notes

### Retained in Detail

- Logika Armin Industries dalam perfect market dan saat distress costs dimasukkan.
- Perbedaan economic distress, financial distress, transfer antarclaimants, dan destruction of total value.
- Direct serta indirect bankruptcy/distress costs dan mekanisme dampaknya.
- Trade-off theory, formulas (16.1)-(16.3), dan Greenleaf optimal-debt example.
- Baxter examples untuk asset substitution, debt overhang, cashing out, leverage ratchet, maturity, dan covenants.
- Agency benefits melalui ownership concentration, free cash flow discipline, monitoring, dan commitment.
- Perbandingan R&D-intensive firms dengan mature low-growth firms.

### Condensed

- Detail prosedural dan voting thresholds dalam U.S. bankruptcy code.
- Company cases United Airlines, Enron, WorldCom, Lehman, Chrysler, dan kasus corporate perks dijadikan supporting context, bukan narasi panjang.
- Empirical references dan academic citations diringkas menjadi findings yang digunakan chapter.
- Moral hazard dalam government bailout dipadatkan ke mekanisme insentifnya.
- Section 16.8 asymmetric information dan Section 16.9 dirangkum lebih agresif karena berada di luar prescribed CF4 scope 16.1-16.7 atau berfungsi sebagai synthesis.

### Omitted / Beyond CF4

- Detail historis kasus, footnotes bibliografis, Nobel Prize feature, dan extended numerical examples pada Section 16.8.
- End-of-chapter concept checks dan problem sets, sesuai aturan condensed textbook note.
- Technical option-valuation methods untuk menaksir distress costs yang baru dikembangkan pada chapter lain.

## CF4 Connection Map

```text
Stakeholder mempunyai payoff dan informasi berbeda
↓
[[4.3 Agency Theory and Governance]]
↓
Shareholder-creditor conflict
→ asset substitution / debt overhang / cashing out
→ debt maturity dan covenants
↓
Manager-owner conflict
→ entrenchment / perks / empire building
→ leverage discipline dan creditor monitoring
↓
Capital structure sebagai governance mechanism
```

## Quick Reading Review

- Default risk sendiri tidak menurunkan firm value dalam perfect market; distress costs yang menghancurkan cash flow-lah yang menurunkannya.
- Nilai total seluruh investor adalah fokus yang benar; jangan keliru menganggap transfer debt-equity sebagai total economic loss.
- Original shareholders membayar anticipated distress dan agency costs melalui lower security issue proceeds atau lower initial share price.
- PV distress costs bergantung pada probability, magnitude, dan risk-adjusted discount rate.
- Trade-off theory memilih debt yang memaksimalkan levered firm value, bukan debt yang memaksimalkan tax shield saja.
- Saat mendekati default, equity dapat memilih negative-NPV risk karena downside jatuh pada debt holders.
- Debt overhang membuat positive-NPV project ditolak bila benefit terutama menaikkan recovery kreditur.
- Existing debt menciptakan leverage ratchet: incentive menambah debt dan resistance terhadap debt buyback.
- Short-term debt dan covenants mengurangi kesempatan mengeksploitasi creditors, tetapi mempunyai refinancing dan flexibility costs.
- Leverage dapat memperbaiki manager-owner alignment melalui ownership concentration, lower free cash flow, monitoring, dan job-loss threat.
- R&D/growth firms umumnya cocok dengan low debt; mature firms dengan stable cash flow dan tangible assets dapat memakai more debt.
- Actual leverage dapat berada di bawah optimum bila entrenched managers menghindari discipline of debt.
- Asymmetric information membuat equity issue rentan adverse-selection discount dan mendukung pecking order retained earnings → debt → equity.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists; Chapter Map | Chapter 16 opening and notation |
| Default, Armin, and MM | Section 16.1; Table 16.1; Example 16.1 |
| Bankruptcy process and distress costs | Section 16.2 |
| Firm value and who pays | Section 16.3; Table 16.2; Examples 16.2-16.3 |
| Trade-off theory and Greenleaf | Section 16.4; Eq. 16.1; Figure 16.1; Example 16.4 |
| Agency costs, Baxter, and mitigation | Section 16.5; Tables 16.3-16.4; Eq. 16.2; Examples 16.5-16.7 |
| Agency benefits of leverage | Section 16.6 |
| Extended trade-off and firm types | Section 16.7; Eq. 16.3; Figure 16.2 |
| Asymmetric information overview | Section 16.8 |
| Synthesis | Section 16.9 and Chapter Summary |
