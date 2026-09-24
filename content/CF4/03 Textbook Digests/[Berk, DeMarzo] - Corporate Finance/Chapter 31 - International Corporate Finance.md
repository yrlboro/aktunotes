---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk dan Peter DeMarzo"
chapter: "31"
chapter_title: "International Corporate Finance"
cf4_topics: ["4.1", "4.2"]
cf4_relevance: "High"
source_scope: "Chapter 31, Sections 31.1–31.5"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, InternationalCorporateFinance]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 31: International Corporate Finance

> [!ABSTRACT] Chapter in One View
> Foreign investment berbeda dari domestic investment karena project cash flows biasanya berdenominasi foreign currency, foreign interest rates dan cost of capital dapat berbeda, serta laba dapat terkena aturan pajak host country dan home country. Chapter ini menggunakan **internationally integrated capital markets** sebagai benchmark: bila investor bebas bertransaksi lintas negara dan mata uang, nilai project tidak bergantung pada currency yang dipakai untuk melakukan valuasi. Karena itu, foreign project dapat dinilai dengan dua metode ekuivalen—menghitung NPV dalam foreign currency lalu mengonversinya pada spot rate, atau mengonversi expected foreign cash flows menggunakan forward rates lalu mendiskontokannya dengan domestic cost of capital. Kesetaraan tersebut hanya berlaku bila pasar terintegrasi dan uncertainty dalam exchange rate tidak berkorelasi dengan project cash flows. International taxation dapat mengubah after-tax cash flows melalui perbedaan tax rates, foreign tax credits, pooling, dan timing repatriation. Bila pasar tersegmentasi karena information asymmetry, capital controls, currency restrictions, atau country risk, cost of capital dapat berbeda secara nyata lintas negara dan firms tertentu dapat memiliki comparative financing advantage. Terakhir, bila inputs dan outputs bergantung pada mata uang berbeda, cash flows sendiri menjadi correlated dengan exchange rates; cash flows harus dipisahkan berdasarkan currency exposure dan dinilai secara konsisten. Bagi CF4, chapter ini menjelaskan bagaimana financial resources bergerak lintas negara untuk membiayai real investment, dan bagaimana market structure, regulation, taxes, serta currency risk memengaruhi value.

## 1. Why This Chapter Exists

Domestic capital budgeting biasanya dilakukan dalam satu mata uang, satu tax environment, dan satu capital market. Foreign project menambahkan tiga masalah:

1. project menghasilkan **foreign currency cash flows**, sedangkan parent company dan shareholders menilai hasil dalam home currency;
2. foreign country dapat memiliki interest rate dan cost of capital berbeda karena macroeconomic environment; dan
3. project menghadapi foreign tax rules sekaligus home-country tax treatment.

Opening case Starbucks di Jepang memperlihatkan keputusan yang harus dibuat multinational firm: apakah real investment di foreign market menciptakan value, mitra lokal apa yang diperlukan, dan apakah ekspansi sebaiknya dibiayai di home market atau foreign market. Jawaban tidak dapat diperoleh hanya dengan mengonversi nominal cash flows. Analyst harus menjaga konsistensi antara currency cash flow, exchange rate, discount rate, market access, tax treatment, dan exposure terhadap currency risk.

Chapter ini membangun benchmark integrated markets terlebih dahulu, lalu secara bertahap melonggarkan asumsinya. Dengan demikian, pembaca dapat membedakan perbedaan nominal antarnegara yang tidak menciptakan peluang ekonomis dari genuine market segmentation yang dapat menciptakan comparative advantage.

## 2. Chapter Map

```text
Chapter 31 — International Corporate Finance
├── 31.1 Internationally Integrated Capital Markets
│   ├── Currency-invariant valuation
│   ├── Law of One Price
│   └── Cost-of-capital relation
├── 31.2 Valuation of Foreign Currency Cash Flows
│   ├── Two equivalent valuation methods
│   ├── WACC valuation in domestic currency
│   ├── Ityesi U.K. project
│   └── Law of One Price robustness check
├── 31.3 Valuation and International Taxation
│   ├── Immediate repatriation
│   ├── Multiple foreign projects
│   └── Deferral of repatriation
├── 31.4 Internationally Segmented Capital Markets
│   ├── Differential access to markets
│   ├── Currency swaps
│   ├── Macro-level distortions
│   └── Valuation implications
└── 31.5 Capital Budgeting with Exchange Risk
    ├── Correlated cash flows and exchange rates
    ├── Separation by currency exposure
    └── Modified Ityesi project
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 31.1 Internationally Integrated Capital Markets | Core—hubungan pasar keuangan lintas negara dan Law of One Price | [[4.1 Financial Markets Structure]] |
| 31.2 Valuation of Foreign Currency Cash Flows | Core—financial resources untuk foreign real investment | [[4.2 Finance and Real Resources]] |
| 31.3 Valuation and International Taxation | Supporting—pajak mengubah lokasi, timing, dan value investasi internasional | [[4.2 Finance and Real Resources]] |
| 31.4 Internationally Segmented Capital Markets | Core—capital-market structure dan differential access | [[4.1 Financial Markets Structure]] |
| 31.5 Capital Budgeting with Exchange Risk | Core—currency exposure dalam evaluasi real project | [[4.2 Finance and Real Resources]] |

## 3. 31.1 Internationally Integrated Capital Markets

### Integrated Markets as a Benchmark

Capital markets disebut **internationally integrated** bila nilai foreign investment tidak bergantung pada apakah analisis dilakukan dalam home currency atau foreign currency. Dengan kata lain, mengganti unit pengukuran tidak boleh mengubah economic value.

Misalkan risky foreign asset membayar expected cash flow $C_{FC}$ dalam satu periode. Notasi chapter:

- $C_{FC}$ = expected foreign-currency cash flow;
- $S$ = current spot exchange rate, dinyatakan sebagai home currency per unit foreign currency;
- $F$ = one-period forward rate dengan quotation yang sama;
- $r_{FC}^{*}$ = appropriate foreign-currency cost of capital;
- $r_{H}^{*}$ = appropriate home-currency cost of capital.

Nilai asset bagi local investor dalam foreign currency adalah:

$$
PV_{FC}=\frac{C_{FC}}{1+r_{FC}^{*}}
\tag{31.1}
$$

Nilai tersebut bila dinyatakan dalam home currency pada spot rate adalah:

$$
PV_H=S\left(\frac{C_{FC}}{1+r_{FC}^{*}}\right)
\tag{31.2}
$$

Alternatifnya, home investor dapat mengonversi expected future cash flow pada forward rate. Jika uncertainty pada spot exchange rate tidak berkorelasi dengan uncertainty pada foreign cash flow, expected home-currency cash flow adalah $F C_{FC}$, sehingga:

$$
PV_H=\frac{F C_{FC}}{1+r_H^{*}}
\tag{31.3}
$$

Law of One Price mengharuskan kedua nilai home currency sama:

$$
S\left(\frac{C_{FC}}{1+r_{FC}^{*}}\right)
=\frac{F C_{FC}}{1+r_H^{*}}
$$

Setelah disederhanakan:

$$
F=S\left(\frac{1+r_H^{*}}{1+r_{FC}^{*}}\right)
\tag{31.4}
$$

Persamaan 31.4 menyerupai covered interest parity, tetapi menggunakan risky discount rates. Intuisinya: perbedaan cost of capital antarcurrency harus konsisten dengan forward–spot relation agar asset yang sama tidak memiliki dua values.

### Assumptions Behind Integration

Benchmark ini memerlukan competitive normal markets. Investor harus dapat:

- menukar kedua currencies pada spot dan forward rates;
- membeli atau menjual securities dalam jumlah yang diinginkan;
- mengakses securities di kedua negara; serta
- bertransaksi tanpa barriers yang menciptakan persistent pricing differences.

Selain market access, penggunaan expected foreign cash flow dikalikan forward rate memerlukan assumption bahwa uncertainty dalam spot rate tidak berkorelasi dengan uncertainty dalam project cash flow. Bila keduanya correlated, expected value of their product tidak sama dengan product of their expected values.

> [!WARNING] Important Distinction
> **Integrated markets tidak berarti interest rates dan costs of capital harus sama.** Rates boleh berbeda antarcurrency. Yang harus sama adalah economic value setelah exchange rates dan currency-specific discount rates diperlakukan secara konsisten.

### Example — Present Value in Yen and Dollars

**Situation**

Cash flow satu tahun sebesar ¥10 juta. Spot rate adalah ¥110/USD, forward rate ¥105,8095/USD, dollar cost of capital 5%, dan yen cost of capital 1%.

Karena exchange-rate quotation di example adalah yen per dollar—kebalikan dari quotation pada formula umum—konversi ke dollar dilakukan dengan membagi jumlah yen.

**Method 1: Value in Yen, Then Convert at Spot**

$$
PV_{¥}=\frac{¥10{,}000{,}000}{1.01}
=¥9{,}900{,}990
$$

$$
PV_{USD}=\frac{¥9{,}900{,}990}{¥110/USD}
=USD\,90{,}009
$$

**Method 2: Convert Future Cash Flow at Forward, Then Discount in Dollars**

$$
PV_{USD}
=\frac{¥10{,}000{,}000/(¥105.8095/USD)}{1.05}
=USD\,90{,}009
$$

**Meaning**

Kedua metode menghasilkan value identik. Dalam integrated markets, currency choice mengubah angka nominal dan discount rate yang digunakan, tetapi tidak mengubah economic value.

## 4. 31.2 Valuation of Foreign Currency Cash Flows

Foreign project yang dimiliki domestic corporation harus diterjemahkan menjadi home-currency value. Dalam integrated markets tersedia dua metode:

### Method 1 — Foreign-Currency NPV

1. Forecast cash flows dalam foreign currency.
2. Discount menggunakan foreign-currency cost of capital.
3. Kurangi initial investment untuk memperoleh foreign-currency NPV.
4. Convert NPV ke home currency menggunakan **current spot rate**.

### Method 2 — Domestic-Currency NPV

1. Convert expected foreign cash flows ke expected home-currency cash flows menggunakan forward rates.
2. Discount home-currency cash flows menggunakan domestic cost of capital.
3. Kurangi initial investment yang telah dinyatakan dalam home currency.

Jika markets integrated dan exchange-rate uncertainty uncorrelated dengan project cash-flow uncertainty, kedua metode memberikan NPV yang sama.

> [!WARNING] Important Distinction
> **Foreign NPV dikonversi pada spot rate; future foreign cash flows dikonversi menggunakan forward rates.** Spot digunakan untuk nilai yang sudah berada pada time 0, sedangkan forward rate digunakan untuk currency conversion pada tanggal cash flow masa depan.

### Application — Ityesi’s U.K. Project

Ityesi, manufacturer asal AS, mengevaluasi project empat tahun di Inggris. Project self-contained: revenues dan costs seluruhnya timbul di U.K. Data utama:

- annual sales: £37,5 juta;
- annual manufacturing costs: £15,625 juta;
- annual operating expenses: £5,625 juta;
- capital equipment pada year 0: £15 juta, depreciated £3,75 juta per tahun selama empat tahun;
- initial marketing expense: £4,167 juta;
- tax rate: 40%;
- no working-capital increase.

#### Foreign Free Cash Flows

| £ million | Year 0 | Year 1–4 per Year |
|---|---:|---:|
| Sales | — | 37.500 |
| Cost of goods sold | — | (15.625) |
| Operating expenses | (4.167) | (5.625) |
| Depreciation | — | (3.750) |
| EBIT | (4.167) | 12.500 |
| Tax at 40% | 1.667 | (5.000) |
| Unlevered net income | (2.500) | 7.500 |
| Add depreciation | — | 3.750 |
| Capital expenditure | (15.000) | — |
| **Pound free cash flow** | **(17.500)** | **11.250** |

Initial marketing expense produces a tax benefit, so its after-tax cash outflow is £2,5 juta. Ditambah capital expenditure £15 juta, total year-0 FCF menjadi negatif £17,5 juta.

### Forward Exchange Rates

Spot rate $S=USD\,1.60/£$, dollar risk-free rate $r_{USD}=4\%$, dan pound risk-free rate $r_{GBP}=7\%$. Multi-year covered interest parity memberikan:

$$
F_N=S\left(\frac{1+r_{USD}}{1+r_{GBP}}\right)^N
$$

Sehingga:

| Year | Forward Rate (USD/£) |
|---:|---:|
| 0 | 1.6000 |
| 1 | 1.5551 |
| 2 | 1.5115 |
| 3 | 1.4692 |
| 4 | 1.4280 |

Karena pound interest rate lebih tinggi, pound diperdagangkan pada forward discount relatif terhadap dollar: jumlah dollar per pound menurun seiring maturity.

### Convert the Cash Flows

Expected dollar FCF diperoleh dengan mengalikan pound FCF dan forward rate:

| USD million | Year 0 | Year 1 | Year 2 | Year 3 | Year 4 |
|---|---:|---:|---:|---:|---:|
| Pound FCF | (17.500) | 11.250 | 11.250 | 11.250 | 11.250 |
| USD/£ rate | 1.600 | 1.555 | 1.512 | 1.469 | 1.428 |
| **Dollar FCF** | **(28.000)** | **17.495** | **17.004** | **16.528** | **16.065** |

### Domestic WACC

Ityesi memiliki cash USD 20 juta, debt USD 320 juta, dan equity USD 300 juta. Net debt adalah:

$$
D=320-20=300
$$

Karena net debt sama dengan equity, weights debt dan equity masing-masing 50%. Dengan cost of equity 10%, cost of debt 6%, dan tax rate 40%:

$$
r_{WACC}
=\frac{E}{D+E}r_E
+\frac{D}{D+E}r_D(1-t_C)
$$

$$
r_{WACC}
=(0.5)(10\%)+(0.5)(6\%)(1-40\%)
=6.8\%
$$

Textbook mengasumsikan market risk U.K. project cukup serupa dengan Ityesi secara keseluruhan sehingga domestic WACC dapat digunakan. Bila foreign economic dan exchange risks material, assumption ini harus diperiksa.

### Domestic-Currency NPV

Present value future dollar FCF:

$$
PV
=\frac{17.495}{1.068}
+\frac{17.004}{1.068^2}
+\frac{16.528}{1.068^3}
+\frac{16.065}{1.068^4}
=57.20
$$

Karena initial cost USD 28 juta:

$$
NPV=57.20-28.00=USD\,29.20\text{ juta}
$$

Project should be undertaken.

### Law of One Price as a Robustness Check

NPV juga dapat dihitung dalam pounds. Agar hasilnya konsisten, foreign cost of capital harus memenuhi:

$$
1+r_{FC}^{*}
=\frac{S}{F}(1+r_H^{*})
\tag{31.5}
$$

Covered interest parity untuk risk-free rates adalah:

$$
\frac{S}{F}
=\frac{1+r_{FC}}{1+r_H}
\tag{31.6}
$$

Menggabungkan keduanya:

$$
r_{FC}^{*}
=\frac{1+r_{FC}}{1+r_H}(1+r_H^{*})-1
\tag{31.7}
$$

Approximation-nya:

$$
r_{FC}^{*}
\approx r_{FC}+(r_H^{*}-r_H)
$$

Artinya, **foreign risk premium approximately equals domestic risk premium**. Foreign cost of capital kira-kira sama dengan foreign risk-free rate ditambah domestic risk premium.

### Example — Internationalizing Ityesi’s Cost of Capital

Untuk Ityesi:

$$
r_{GBP}^{*}
=\frac{1.07}{1.04}(1.068)-1
=9.88\%
$$

Present value pound FCF:

$$
PV_{GBP}
=\frac{11.25}{1.0988}
+\frac{11.25}{1.0988^2}
+\frac{11.25}{1.0988^3}
+\frac{11.25}{1.0988^4}
=£35.75\text{ juta}
$$

$$
NPV_{GBP}=35.75-17.50=£18.25\text{ juta}
$$

Convert pada current spot rate:

$$
NPV_{USD}=£18.25\times USD\,1.60/£
=USD\,29.20\text{ juta}
$$

Hasilnya sama dengan domestic-currency method. Bila cost of capital yang diestimasi langsung dari comparable foreign firms sangat berbeda dari rate implied oleh Eq. 31.7, managers harus menyelidiki market frictions, estimation error, atau correlation antara exchange rates dan project cash flows.

> [!INFO] CF4 Connection
> Foreign project adalah penggunaan financial resources untuk membentuk real productive capacity. Valuation harus menghasilkan keputusan yang sama terlepas dari currency unit, selama markets integrated dan risk assumptions konsisten.

## 5. 31.3 Valuation and International Taxation

Foreign income dapat dikenai pajak oleh dua governments:

- **host government**, tempat income dihasilkan; dan
- **home government**, tempat parent company berada.

Jumlah dan timing pajak juga bergantung pada apakah foreign operation dibentuk sebagai separately incorporated subsidiary dan kapan profits **repatriated**, yaitu dibawa kembali ke home country.

### Single Foreign Project with Immediate Repatriation

Dalam regime yang dijelaskan textbook, host country mendapat kesempatan pertama memajaki income. Home country kemudian menentukan treatment atas foreign income dan credit untuk foreign taxes.

`[TEXTBOOK CONTEXT]` Berdasarkan U.S. tax policy pada konteks textbook:

- bila foreign tax rate lebih rendah daripada U.S. rate, corporation membayar host tax lalu tambahan U.S. tax sampai totalnya setara U.S. rate;
- foreign tax credit diberikan paling banyak sebesar U.S. tax liability atas income tersebut;
- bila foreign tax rate lebih tinggi, firm membayar foreign rate dan tidak memiliki tambahan U.S. tax, tetapi excess credit tidak dapat digunakan untuk mengurangi domestic taxes dalam single-project illustration.

Maka simplified effective rate untuk project dengan immediate repatriation adalah higher of foreign and domestic rates. Namun, aturan aktual dapat berubah dan harus diverifikasi sebelum digunakan untuk keputusan nyata.

### Pooling Multiple Foreign Projects

Multinational corporation dapat menggabungkan foreign incomes untuk tujuan foreign tax credits. Excess credits dari high-tax foreign countries dapat mengimbangi residual home-country liability atas earnings di low-tax countries.

Jika home tax rate melebihi combined effective rate atas seluruh foreign income, penggunaan home rate untuk semua earnings masih menjadi approximation yang valid. Jika combined foreign rate lebih tinggi, foreign income menghadapi tax burden yang lebih tinggi daripada domestic income.

### Deferring Repatriation

Untuk separately incorporated subsidiary, home tax pada foreign income dalam regime textbook tidak timbul sampai profits direpatriasi. Menahan earnings di luar negeri berarti reinvesting abroad dan menunda home-country tax.

Deferral bermanfaat terutama ketika foreign tax rate lebih rendah daripada home rate. Economic benefit menyerupai tax deferral atas capital gains: perusahaan memperoleh time value dari pajak yang belum dibayar.

Deferral juga memberi **real option** memilih waktu repatriation. Firm dapat menunggu:

- tahun ketika pooled foreign tax rate cukup tinggi sehingga tidak timbul tambahan home tax; atau
- temporary tax holiday yang menurunkan repatriation tax.

Jika foreign rate sudah lebih tinggi daripada home rate, tidak ada residual home tax sehingga deferral tidak memberi manfaat pajak tambahan. Textbook menggunakan akumulasi overseas cash oleh U.S. multinationals sebagai bukti bahwa repatriation incentives dapat memengaruhi lokasi cash secara material.

> [!WARNING] Important Distinction
> **Foreign earnings ≠ cash yang bebas dipindahkan ke parent tanpa konsekuensi.** Tax liability dapat bergantung pada legal form, country mix, dan timing repatriation.

## 6. 31.4 Internationally Segmented Capital Markets

Capital markets **segmented** bila investors atau firms tidak memiliki akses setara terhadap securities dan funding lintas negara. Dalam kondisi ini, currency-invariant valuation benchmark dapat gagal dan comparable risks dapat dihargai berbeda setelah dinyatakan dalam currency yang sama.

### Differential Access to Markets

Risk-free markets dapat relatif integrated sementara securities firm tertentu tidak. Information asymmetry menjadi penyebab penting. Ityesi mungkin dikenal oleh U.S. analysts dan memiliki track record di dollar debt serta equity markets, tetapi tidak dikenal di U.K. Pound investors dapat meminta return lebih tinggi karena kurangnya informasi.

Akibatnya, pound WACC yang benar-benar tersedia bagi Ityesi dapat lebih tinggi daripada pound WACC implied oleh Eq. 31.7. Bila demikian, raising capital di U.K. membuat project tampak kurang bernilai. Untuk memaksimalkan shareholder value, Ityesi sebaiknya raise funds di market tempat ia memiliki access terbaik, lalu menilai project menggunakan relevant financing opportunity.

### Currency Swaps

Differential market access menjelaskan usefulness **currency swaps**. Firm dapat:

1. borrow dalam currency/market tempat cost of capital paling rendah;
2. menukar coupon payments ke currency yang sesuai dengan operating cash flows; dan
3. menukar principal payments pada maturity.

Dengan demikian, firm tetap memperoleh cheap funding sekaligus mengurangi mismatch currency antara assets dan liabilities.

### Macro-Level Distortions

Segmentation juga dapat timbul pada level negara melalui:

- capital controls yang membatasi capital inflows atau outflows;
- foreign-exchange controls yang membatasi currency convertibility;
- restrictions atas siapa yang boleh memiliki financial securities;
- weak property-right enforcement;
- political, legal, social, atau cultural risks; dan
- sovereign default risk.

Dalam negara dengan sovereign risk, government bond yield bukan pure risk-free rate. Yield mengandung country/default premium, sehingga covered interest parity tidak dapat diterapkan secara mekanis dengan menganggap seluruh selisih rates berasal dari currency.

### Example — Risky Russian Government Bonds

**Situation**

Spot rate adalah RUB 30,9845/USD, one-year forward rate RUB 33,7382/USD, Russian government yield 11%, dan U.S. Treasury yield 0,5%.

Jika 11% dianggap risk-free, covered interest parity memprediksi:

$$
F
=30.9845\left(\frac{1.11}{1.005}\right)
=RUB\,34.2217/USD
$$

Namun actual forward rate hanya RUB 33,7382/USD. True ruble risk-free return dapat dibentuk dengan mengonversi RUB 100.000 ke dollar, berinvestasi di Treasuries, dan mengunci reconversion dengan forward:

$$
\frac{RUB\,100{,}000}{RUB\,30.9845/USD}
\times1.005
\times RUB\,33.7382/USD
=RUB\,109{,}432
$$

Effective risk-free ruble return:

$$
9.432\%
$$

Maka spread Russian government bond adalah:

$$
11\%-9.432\%=1.568\%
$$

**Meaning**

Selisih tersebut adalah compensation atas default risk, bukan currency-based risk-free interest differential.

### Implications of Segmentation

Bila return difference dalam common currency berasal dari market friction, corporation yang dapat mengakses kedua pasar berpotensi:

- raise capital di low-return/low-cost market; dan
- invest dalam projects di high-return market.

Namun peluang ini terbatas. Jika semua firms mudah melakukannya, competition dan capital flows akan menghilangkan spread. Genuine advantage memerlukan special market access, regulatory treatment, local knowledge, atau product-market capability yang tidak dimiliki rivals.

### Example — Camacho’s Mexican Acquisition

**Situation**

Camacho, U.S. firm, mempertimbangkan acquisition Xtapa di Mexico. Initial price MXN 525 juta atau USD 52,5 juta pada spot MXN 10/USD. Year-1 FCF adalah MXN 21 juta dan tumbuh 8% perpetually. Peso WACC 12%; Camacho’s dollar WACC 7,5%. Risk-free rates: U.S. 6%, Mexico 9%.

**Mexican-Market Valuation**

$$
NPV_{MXN}
=\frac{21}{0.12-0.08}-525
=0
$$

Harga telah dibid hingga zero NPV bagi firms yang menggunakan 12% peso WACC.

**Dollar Valuation**

Forward rate:

$$
F_N
=10\left(\frac{1.09}{1.06}\right)^N
=10(1.0283)^N
$$

Dollar cash flow pada year $N$:

$$
\frac{21(1.08)^{N-1}}
{10.283(1.0283)^{N-1}}
=2.0422(1.0503)^{N-1}
$$

Jadi expected dollar cash flows tumbuh sekitar 5,03%:

$$
NPV_{USD}
=\frac{2.0422}{0.075-0.0503}-52.5
=USD\,30.18\text{ juta}
$$

**Interpretation**

Perbedaan NPV dapat berasal dari tiga hal:

1. exchange rate dan project cash flows sebenarnya correlated;
2. WACC estimates mengandung error; atau
3. U.S. dan Mexican capital markets memang segmented.

Jika assumptions dan WACC estimates dapat dipercaya, Camacho memiliki capital-market advantage karena dapat raise capital lebih murah di AS. Agar acquisition tetap tersedia dengan positive NPV, Camacho juga harus memiliki product-market knowledge yang membedakannya dari U.S. rivals; jika tidak, competitor dengan funding access sama akan ikut menawar dan menghilangkan gain.

> [!INFO] CF4 Connection
> Market segmentation menghubungkan financial structure dengan real resource allocation. Projects tidak hanya mengalir ke lokasi dengan productive return tinggi; mereka juga dipengaruhi oleh siapa yang boleh menyediakan capital, pada harga berapa, dan di bawah aturan negara mana.

## 7. 31.5 Capital Budgeting with Exchange Risk

### When Cash Flows Depend on Exchange Rates

Sampai bagian ini, chapter mengasumsikan project cash flows tidak correlated dengan spot exchange rates. Assumption masuk akal untuk local project yang membeli inputs dan menjual outputs dalam market serta currency yang sama, selama local prices tidak bergerak bersama exchange rate.

Namun, project sering:

- menggunakan imported inputs;
- mengekspor output;
- memiliki contracts dalam currency lain; atau
- menghadapi prices yang menyesuaikan terhadap exchange-rate movements.

Dalam kasus tersebut, exchange rate tidak sekadar mengonversi cash flow. Exchange rate juga mengubah **besar cash flow dalam foreign currency**.

Misalnya U.K. project membeli U.S. materials dengan dollar price stabil. Bila dollar menguat terhadap pound, pound cost dari materials naik dan pound FCF turun. Bila dollar melemah, pound cost turun dan pound FCF naik. Karena pound FCF dan exchange rate correlated, mengalikan expected pound FCF dengan forward rate tidak lagi menghasilkan expected dollar FCF yang benar.

### Separate Cash Flows by Currency Exposure

Pendekatan paling praktis adalah memisahkan cash flows menurut currency yang menentukan nilainya:

```text
Project cash flows
├── Pound-driven revenues and costs
│   └── Convert with pound forward rates
└── Dollar-driven costs and tax effects
    └── Keep and value directly in dollars
```

Cash flow tidak diklasifikasikan hanya berdasarkan tempat pembayaran. Tax payment dalam pounds, misalnya, dapat economically dollar-denominated bila tax deduction berubah langsung bersama dollar input cost.

### Modified Ityesi Project

Suppose dari original £15,625 juta annual manufacturing costs:

- £5,625 juta benar-benar pound-based; dan
- USD 16 juta merupakan imported inputs—setara £10 juta pada current spot rate.

Pound FCF sebelum dollar-based input costs menjadi:

| £ million | Year 0 | Year 1–4 per Year |
|---|---:|---:|
| Sales | — | 37.500 |
| Pound cost of goods sold | — | (5.625) |
| Operating expenses | (4.167) | (5.625) |
| Depreciation | — | (3.750) |
| EBIT | (4.167) | 22.500 |
| Tax at 40% | 1.667 | (9.000) |
| Unlevered net income | (2.500) | 13.500 |
| Add depreciation | — | 3.750 |
| Capital expenditure | (15.000) | — |
| **Pound FCF before dollar costs** | **(17.500)** | **17.250** |

Pound component dikonversi dengan forward rates. Kemudian annual dollar input cost USD 16 juta dikurangkan dan tax shield 40% atau USD 6,4 juta ditambahkan:

| USD million | Year 0 | Year 1 | Year 2 | Year 3 | Year 4 |
|---|---:|---:|---:|---:|---:|
| Dollar value of pound FCF | (28.000) | 26.825 | 26.073 | 25.344 | 24.633 |
| Dollar input costs | — | (16.000) | (16.000) | (16.000) | (16.000) |
| Tax shield on dollar costs | — | 6.400 | 6.400 | 6.400 | 6.400 |
| **Aggregate dollar FCF** | **(28.000)** | **17.225** | **16.473** | **15.744** | **15.033** |

Discounting pada Ityesi’s dollar WACC:

$$
NPV
=\frac{17.225}{1.068}
+\frac{16.473}{1.068^2}
+\frac{15.744}{1.068^3}
+\frac{15.033}{1.068^4}
-28.000
=USD\,27.05\text{ juta}
$$

Modified NPV lebih rendah daripada original USD 29,20 juta karena dollar-denominated costs tidak turun bersama forward value of pound revenues.

Dollar costs sebenarnya dapat dikonversi ke pounds pada forward rates dan dimasukkan dalam pound table. Hasil valuation akan sama, tetapi resulting pound figures bukan expected cash flows, karena forward rate bukan unbiased forecast of future spot rate. Karena itu, memisahkan currency components menjaga economic interpretation lebih jelas.

Dalam real project, exposure jarang terbagi sempurna. Historical data dan regression dapat digunakan untuk mengestimasi sensitivity cash flows terhadap exchange rates, serupa dengan penggunaan regression untuk mengestimasi market risk securities.

> [!WARNING] Important Distinction
> **Currency denomination ≠ currency exposure.** Cash flow dapat dibayar dalam pounds tetapi economically linked ke dollar bila underlying input price ditentukan dalam dollar.

## Chapter Synthesis

International capital budgeting tetap berakar pada satu prinsip: value adalah present value dari incremental cash flows pada discount rate yang sesuai. Kesulitannya adalah memilih currency representation dan market assumptions secara konsisten.

Dalam integrated markets, currency hanyalah unit pengukuran. Analyst boleh menilai foreign cash flows dalam foreign currency lalu mengonversi NPV pada spot rate, atau terlebih dahulu mengonversi future cash flows pada forward rates dan menilainya dalam home currency. Law of One Price menghubungkan forward rates dan currency-specific costs of capital sehingga kedua metode bertemu pada economic value yang sama.

Benchmark tersebut dapat rusak melalui dua jalur. Pertama, markets mungkin segmented: information, regulation, capital controls, property rights, atau country risk membuat firms menghadapi funding costs berbeda. Segmentation dapat menciptakan advantage bagi multinational yang memiliki unique access, tetapi opportunity akan hilang bila competitors memiliki akses yang sama. Kedua, operating cash flows dapat bergerak bersama exchange rates karena imported inputs atau exported outputs. Dalam kondisi ini, currency risk melekat pada business economics, bukan hanya tahap konversi.

Taxation menambah lapisan lain karena host dan home governments dapat mengklaim bagian dari income, sementara pooling dan repatriation timing mengubah effective tax burden. Dengan demikian, foreign project value merupakan hasil interaksi:

```text
Real operating cash flows
        ↓
Currency exposure and forward rates
        ↓
Market access and cost of capital
        ↓
Host/home taxation and repatriation
        ↓
Home-currency NPV and investment decision
```

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Internationally integrated markets | Investment value tidak bergantung pada currency analisis | Benchmark untuk consistent cross-border valuation | [[4.1 Financial Markets Structure]] |
| Foreign currency cash flow | Project cash flow dalam currency host country | Harus diterjemahkan menjadi home-currency value | [[4.2 Finance and Real Resources]] |
| Spot exchange rate | Current exchange rate | Mengonversi time-0 foreign value atau NPV | [[4.1 Financial Markets Structure]] |
| Forward exchange rate | Rate yang dikunci untuk future exchange | Mengonversi future foreign cash flows secara konsisten | [[4.1 Financial Markets Structure]] |
| Currency-specific cost of capital | Required return dalam currency tertentu | Harus konsisten dengan exchange-rate relation | [[4.2 Finance and Real Resources]] |
| Law of One Price | Equivalent payoffs memiliki value sama | Menjamin dua valuation methods menghasilkan NPV sama | [[4.1 Financial Markets Structure]] |
| Foreign risk premium | Foreign cost of capital dikurangi foreign risk-free rate | Approximately equals domestic risk premium dalam integrated markets | [[4.1 Financial Markets Structure]] |
| Repatriation | Membawa foreign profits ke home country | Timing dapat memicu atau menunda tax liability | [[4.2 Finance and Real Resources]] |
| Foreign tax credit | Credit home-country tax atas foreign taxes | Mengurangi double taxation dalam regime textbook | [[4.2 Finance and Real Resources]] |
| Pooling | Menggabungkan foreign earnings/credits lintas countries | Dapat menurunkan residual home tax | [[4.2 Finance and Real Resources]] |
| Segmented capital markets | Cross-border access atau pricing tidak setara | Memungkinkan persistent cost-of-capital differences | [[4.1 Financial Markets Structure]] |
| Differential market access | Firm lebih dikenal atau lebih mudah funding di market tertentu | Menentukan optimal funding location | [[4.1 Financial Markets Structure]] |
| Currency swap | Exchange coupon/principal obligations lintas currencies | Memisahkan funding advantage dari desired currency exposure | [[4.1 Financial Markets Structure]] |
| Capital controls | Restrictions atas cross-border capital movements | Menyebabkan market segmentation | [[4.1 Financial Markets Structure]] |
| Country risk premium | Compensation atas political/legal/default risk | Government yield tidak selalu risk-free | [[4.1 Financial Markets Structure]] |
| Exchange-rate exposure | Sensitivity cash flows terhadap currency movements | Menentukan apakah simple forward conversion valid | [[4.2 Finance and Real Resources]] |

## Compression Notes

### Retained in Detail

- Integrated-market derivation dan Equations 31.1–31.7.
- Dua foreign-project valuation methods dan syarat equivalence.
- Ityesi project cash-flow construction, forward conversion, WACC, dan NPV.
- International tax logic: host/home taxation, pooling, dan repatriation deferral.
- Market segmentation melalui differential access dan macro distortions.
- Examples 31.1–31.4 dan modified Ityesi exchange-risk analysis.
- Distinction antara currency denomination dan economic currency exposure.

### Condensed

- Starbucks Japan opening case digunakan sebagai framing tanpa seluruh kronologi ekspansi.
- Tax provisions dipadatkan menjadi economic mechanics dan diberi `[TEXTBOOK CONTEXT]`.
- Interview praktisi diringkas menjadi insight tentang hedging, tax location, dan entry modes.
- Tables Ityesi direkonstruksi hanya dengan rows yang diperlukan untuk memahami free cash flow.
- Footnote assumptions dan empirical detail digabungkan ke caveats relevan.

### Omitted / Beyond CF4

- Further readings dan bibliographic citations.
- End-of-chapter problems dan concept-check questions.
- Detail nama advisers, dates, dan corporate anecdotes yang tidak mengubah framework.
- Advanced international tax structuring di luar apa yang dijelaskan chapter.

## CF4 Connection Map

```text
Integrated vs segmented international capital markets
                         ↓
          [[4.1 Financial Markets Structure]]
                         ↓
Funding access, forward rates, and cost of capital
                         ↓
Foreign real investment and home-currency NPV
                         ↓
           [[4.2 Finance and Real Resources]]
```

## Quick Reading Review

- Foreign projects menambah currency, cost-of-capital, dan tax complications.
- Integrated markets berarti economic value tidak bergantung pada currency analisis.
- Law of One Price menghubungkan spot rate, forward rate, dan currency-specific costs of capital.
- Expected foreign cash flow boleh dikalikan forward rate hanya bila cash-flow uncertainty tidak correlated dengan exchange-rate uncertainty.
- Method 1 menghitung foreign NPV lalu mengonversinya pada spot rate.
- Method 2 mengonversi future cash flows pada forward rates lalu mendiskontokannya dengan domestic cost of capital.
- Foreign risk premium approximately equals domestic risk premium dalam integrated markets.
- Ityesi’s original U.K. project memiliki NPV USD 29,20 juta melalui kedua valuation methods.
- International tax rate bergantung pada host tax, home-country treatment, credits, project pooling, dan timing repatriation.
- Deferral memberi time-value benefit dan real option memilih waktu repatriation yang murah.
- Information asymmetry, capital controls, currency restrictions, dan country risk dapat membuat markets segmented.
- Government bond yield tidak selalu risk-free; sebagian yield dapat merupakan default/country spread.
- Currency swaps memungkinkan firm borrow di market termurah sambil menyesuaikan payment currency.
- Segmentation hanya menciptakan sustainable corporate advantage bila firm memiliki access atau knowledge yang tidak dimiliki competitors.
- Imported inputs atau exported outputs membuat operating cash flows sensitif terhadap exchange rates.
- Cash flows sebaiknya dipisahkan berdasarkan economic currency exposure, bukan semata currency pembayaran.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Integrated-market benchmark, Law of One Price, dan currency-invariant value | Chapter 31, Section 31.1; Example 31.1 |
| Two valuation methods, Ityesi FCF, forward rates, WACC, dan robustness check | Chapter 31, Section 31.2; Tables 31.1–31.3; Example 31.2 |
| Host/home taxation, pooling, dan deferred repatriation | Chapter 31, Section 31.3 |
| Differential access, currency swaps, macro distortions, dan segmented-market valuation | Chapter 31, Section 31.4; Examples 31.3–31.4 |
| Exchange-risk adjustment dan separation of cash flows by currency | Chapter 31, Section 31.5; Tables 31.4–31.5 |
