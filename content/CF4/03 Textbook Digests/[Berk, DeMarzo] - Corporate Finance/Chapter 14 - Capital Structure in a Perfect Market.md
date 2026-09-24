---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk & Peter DeMarzo"
chapter: "14"
chapter_title: "Capital Structure in a Perfect Market"
cf4_topics: ["2.1 Equity Instruments", "2.2 Long-Term Debt Instruments", "2.5 Capital Raising Methods"]
cf4_relevance: "High"
source_scope: "Chapter 14, Sections 14.1–14.5"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, CapitalStructure, ModiglianiMiller]
date_created: "2026-08-24"
status: "study-note"
---

# Berk & DeMarzo — Chapter 14: Capital Structure in a Perfect Market

> [!ABSTRACT] Chapter in One View
> Chapter ini menanyakan pertanyaan dasar corporate finance: **apakah perusahaan dapat menciptakan nilai hanya dengan mengubah cara membiayai asetnya—misalnya mengganti equity dengan debt?**
>
> Berk & DeMarzo menjawabnya terlebih dahulu dalam benchmark **perfect capital markets**. Dalam dunia ini, debt memang memiliki cost of capital yang lebih rendah daripada equity, tetapi penggunaan debt membuat equity yang tersisa menjadi lebih berisiko. Akibatnya, **equity cost of capital naik tepat cukup untuk mengimbangi penggunaan debt yang lebih murah**.
>
> Hasil utamanya adalah **Modigliani–Miller Proposition I**: dengan perfect capital markets, capital structure tidak mengubah total firm value; dan **MM Proposition II**: semakin tinggi leverage, semakin tinggi required return pada levered equity. WACC tetap sama selama cash flow aset tidak berubah.
>
> Chapter ini juga menunjukkan bagaimana investor dapat membuat **homemade leverage**, bagaimana menggunakan **market value balance sheet**, bagaimana leverage memengaruhi beta, EPS, ROE, dan P/E, serta mengapa “debt murah”, “EPS naik”, atau “equity issuance menyebabkan dilution” bukan alasan yang cukup untuk menyatakan suatu financing choice menciptakan nilai.
>
> Pesan besarnya: **financial transactions dalam perfect market hanya membagi ulang risk dan cash flow; mereka tidak dengan sendirinya menciptakan atau menghancurkan value.** Karena itu, jika capital structure benar-benar memengaruhi value di dunia nyata, sumbernya harus berasal dari **market imperfections**.

---

## 1. Why This Chapter Exists

Perusahaan yang membutuhkan dana dapat menerbitkan **equity**, **debt**, atau kombinasi keduanya. Secara intuitif, debt tampak menarik karena interest rate biasanya lebih rendah daripada required return pemegang saham. Dari sini mudah muncul kesimpulan:

> “Kalau debt lebih murah daripada equity, bukankah perusahaan sebaiknya memakai sebanyak mungkin debt agar cost of capital turun dan firm value naik?”

Chapter 14 dibangun untuk menunjukkan mengapa logika tersebut belum lengkap.

Masalahnya adalah cost dari setiap security tidak dapat dilihat secara terpisah. Debt memiliki prioritas pembayaran. Ketika perusahaan menambah debt, pemegang equity menjadi residual claimant atas cash flow yang lebih volatil. Jadi debt yang lebih murah datang bersama **kenaikan risk pada equity**, dan investor equity meminta return yang lebih tinggi.

Berk & DeMarzo menggunakan lingkungan perfect capital markets sebagai **benchmark**. Benchmark ini sengaja menghilangkan taxes, transaction costs, issuance costs, asymmetric information, dan perubahan cash flow operasional akibat financing. Dengan begitu kita dapat melihat satu pertanyaan secara bersih:

> Jika seluruh economic cash flow perusahaan tetap sama, apakah sekadar membagi cash flow tersebut menjadi debt dan equity dapat mengubah total value?

Jawaban chapter ini adalah **tidak**.

> [!INFO] CF4 Connection
> Chapter 14 secara resmi berada dalam referensi **Topik 2 — Sekuritas dan Bentuk Lain Keuangan Korporasi**. Ia memberi fondasi untuk memahami perbedaan debt dan equity, capital raising, serta konsekuensi financing choice dari sisi issuer dan investor. Secara konseptual ia juga menjadi jembatan ke [[3.2 Sources of Finance and Capital Structure]], tetapi Chapter 14 sendiri tercantum sebagai referensi Topik 2.

---

## 2. Chapter Map

```text
Chapter 14 — Capital Structure in a Perfect Market
├── 14.1 Equity Versus Debt Financing
│   ├── Financing a Firm with Equity
│   ├── Financing a Firm with Debt and Equity
│   └── Effect of Leverage on Risk and Return
├── 14.2 Modigliani–Miller I
│   ├── Perfect Capital Markets
│   ├── MM Proposition I
│   ├── Law of One Price
│   ├── Homemade Leverage
│   ├── Arbitrage
│   ├── Market Value Balance Sheet
│   └── Leveraged Recapitalization
├── 14.3 Modigliani–Miller II
│   ├── Leverage and Equity Cost of Capital
│   ├── Unlevered Cost of Capital / Pretax WACC
│   ├── WACC with Multiple Securities
│   ├── Levered and Unlevered Betas
│   └── Cash as Negative Debt
├── 14.4 Capital Structure Fallacies
│   ├── Leverage and EPS
│   ├── Leverage and ROE / P-E
│   └── Equity Issuance and Dilution
└── 14.5 MM: Beyond the Propositions
    └── Conservation of Value Principle
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 14.1 Equity Versus Debt Financing | High — debt/equity cash-flow rights dan issuer financing choice | [[2.1 Equity Instruments]], [[2.2 Long-Term Debt Instruments]] |
| 14.2 MM Proposition I | High — capital raising, capital structure, firm value | [[2.5 Capital Raising Methods]] |
| 14.3 MM Proposition II | High — risk/return impact dari financing | [[2.1 Equity Instruments]], [[2.2 Long-Term Debt Instruments]] |
| 14.4 Capital Structure Fallacies | High supporting context — interpretasi EPS, ROE, P/E, dilution | [[2.5 Capital Raising Methods]] |
| 14.5 Beyond the Propositions | Supporting context — benchmark menuju real-world frictions | [[3.2 Sources of Finance and Capital Structure]] |

---

## 3. 14.1 Equity Versus Debt Financing

### Intuisi

**Capital structure** adalah kombinasi relatif securities yang digunakan perusahaan untuk membiayai asetnya, terutama debt dan equity.

Bayangkan satu proyek yang sama. Proyek tersebut menghasilkan cash flow yang sama apa pun financing-nya. Perusahaan dapat:

1. menjual seluruh claim kepada shareholders → **all-equity financing**, atau
2. menjanjikan sebagian cash flow kepada creditors terlebih dahulu → **debt + equity financing**.

Pertanyaan pentingnya bukan apakah cash flow equity berubah—jelas berubah. Pertanyaannya:

> Apakah **total value** debt + equity berubah hanya karena cash flow proyek dibagi dengan cara berbeda?

### Financing a Firm with Equity

Textbook menggunakan proyek dengan:

- investasi awal: $800;
- cash flow tahun depan:
  - strong economy: $1,400;
  - weak economy: $900;
- kedua state sama-sama mungkin;
- risk-free rate: 5%;
- appropriate risk premium: 10%.

Maka cost of capital proyek adalah:

\[
r_U = 5\% + 10\% = 15\%
\]

Expected cash flow:

\[
E[CF_1]
=
\frac{1}{2}(1400)+\frac{1}{2}(900)
=
1150
\]

NPV:

\[
NPV
=
-800+\frac{1150}{1.15}
=
-800+1000
=
200
\]

Jadi aset/proyek memiliki market value $1,000 meskipun hanya membutuhkan investasi $800. Selisih $200 adalah value yang diciptakan proyek untuk initial owner.

Jika perusahaan dibiayai seluruhnya dengan equity, shareholders memperoleh seluruh project cash flow. Karena itu:

\[
U = \frac{1150}{1.15}=1000
\]

di mana \(U\) adalah market value **unlevered equity**.

Return unlevered equity:

| Economy | Cash Flow | Initial Value | Return |
|---|---:|---:|---:|
| Strong | $1,400 | $1,000 | 40% |
| Weak | $900 | $1,000 | -10% |

Expected return:

\[
E[R_U]
=
\frac{1}{2}(40\%)
+
\frac{1}{2}(-10\%)
=
15\%
\]

Ini konsisten dengan required return proyek.

### Financing with Debt and Equity

Sekarang entrepreneur meminjam $500 pada risk-free rate 5%. Debt harus dibayar:

\[
500(1.05)=525
\]

Karena debt dibayar lebih dahulu, equity hanya menerima residual:

- strong economy:

\[
1400-525=875
\]

- weak economy:

\[
900-525=375
\]

Cash flow total tetap:

| Security | Strong | Weak |
|---|---:|---:|
| Debt | $525 | $525 |
| Levered equity | $875 | $375 |
| **Total firm** | **$1,400** | **$900** |

Debt tidak menciptakan cash flow baru. Ia hanya **mengubah siapa menerima bagian mana dari cash flow yang sama**.

Karena total project value tetap $1,000 dan debt bernilai $500:

\[
E = 1000-500=500
\]

Jadi entrepreneur tetap memperoleh total financing:

\[
D+E=500+500=1000
\]

sama seperti all-equity financing.

> [!WARNING] Important Distinction
> **Equity value turun ≠ firm value turun.**
>
> Setelah debt diterbitkan, equity hanya memiliki residual claim sehingga nilai equity individual memang lebih rendah. Tetapi creditors sekarang memiliki claim bernilai positif. Yang relevan untuk firm value adalah:
>
> \[
> V = D+E
> \]

### The Effect of Leverage on Risk and Return

Kesalahan yang mudah terjadi adalah tetap mendiskontokan levered equity dengan 15%, seolah-olah risk-nya sama dengan unlevered equity.

Padahal leverage memperbesar variability return shareholders.

Dengan levered equity bernilai $500:

- strong:

\[
R_E=\frac{875-500}{500}=75\%
\]

- weak:

\[
R_E=\frac{375-500}{500}=-25\%
\]

Expected return:

\[
E[R_E]
=
\frac{1}{2}(75\%)
+
\frac{1}{2}(-25\%)
=
25\%
\]

Bandingkan:

| Security | Strong Return | Weak Return | Expected Return |
|---|---:|---:|---:|
| Debt | 5% | 5% | 5% |
| Unlevered equity | 40% | -10% | 15% |
| Levered equity | 75% | -25% | 25% |

Leverage memperbesar exposure shareholders terhadap economic outcomes. Debt holders memperoleh fixed claim terlebih dahulu; equity holders menyerap lebih banyak upside **dan** downside.

> [!IMPORTANT] Core Lesson
> **Debt lebih murah karena debt lebih aman.**
>
> Ketika debt ditambahkan, risiko tidak hilang dari perusahaan; sebagian risk yang tadinya tersebar pada seluruh equity menjadi lebih terkonsentrasi pada equity yang tersisa.

---

## 4. 14.2 Modigliani–Miller I: Leverage, Arbitrage, and Firm Value

### Perfect Capital Markets

MM Proposition I berlaku dalam kondisi **perfect capital markets**, yaitu:

1. investors dan firms dapat memperdagangkan securities yang sama pada competitive market prices yang sama dengan present value cash flow-nya;
2. tidak ada taxes, transaction costs, atau security issuance costs;
3. financing decisions tidak mengubah cash flows dari investments dan tidak mengungkapkan informasi baru mengenai cash flow tersebut.

Ini bukan klaim bahwa dunia nyata sempurna. Ini adalah **benchmark** untuk mengisolasi efek financing murni.

### MM Proposition I

> [!NOTE] Modigliani–Miller Proposition I
> Dalam perfect capital market, **total value perusahaan sama dengan market value total cash flow yang dihasilkan asetnya dan tidak dipengaruhi oleh capital structure**.

Secara intuitif:

\[
\text{Firm cash flows}
=
\text{cash flows paid to all security holders}
\]

Jika financing tidak mengubah cash flow aset, maka berdasarkan **Law of One Price**, dua ways of packaging cash flow yang identik harus memiliki total value yang sama.

Dengan notation:

\[
V = D + E = U = A
\]

di mana:

- \(D\) = market value of debt,
- \(E\) = market value of levered equity,
- \(U\) = market value of unlevered equity,
- \(A\) = market value of firm assets.

### MM and the Law of One Price

Security issuance adalah zero-NPV transaction ketika securities dijual pada fair market value.

Jika perusahaan meminjam $500, ia menerima $500 hari ini dan memberikan claim dengan PV $500. Tidak ada value yang tercipta hanya dari pertukaran tersebut.

Dengan kata lain:

```text
Assets generate cash flow
        ↓
Firm chooses securities
        ↓
Cash flow is sliced among investors
        ↓
Total cash flow unchanged
        ↓
Total market value unchanged
```

### Homemade Leverage

MM juga menunjukkan bahwa investor tidak perlu bergantung pada perusahaan untuk menentukan leverage exposure mereka.

Jika firm memilih capital structure yang berbeda dari preferensi investor, investor dapat menyesuaikan sendiri dengan **homemade leverage**:

- ingin leverage lebih tinggi → investor dapat meminjam sendiri dan membeli lebih banyak equity;
- ingin leverage lebih rendah → investor dapat mengombinasikan levered equity dengan debt.

Dalam contoh awal, investor dapat membeli $1,000 unlevered equity dan meminjam $500 sendiri:

| Position | Date 0 | Strong | Weak |
|---|---:|---:|---:|
| Unlevered equity | -$1,000 | $1,400 | $900 |
| Margin loan | +$500 | -$525 | -$525 |
| **Net position** | **-$500** | **$875** | **$375** |

Net payoff tersebut identik dengan levered equity perusahaan.

Karena payoff identik harus memiliki price identik, levered equity harus bernilai $500.

> [!INFO] Why It Matters
> Capital structure perusahaan tidak memberikan investor risk-return combination yang “unik” apabila investor sendiri dapat replicate exposure tersebut.

### Arbitrage Proof

Jika levered dan unlevered firms dengan aset identik diperdagangkan pada total value berbeda, arbitrageurs dapat:

- membeli struktur yang undervalued;
- menjual struktur yang overvalued;
- replicate cash flows;
- memperoleh risk-free profit.

Trading tersebut mendorong prices sampai:

\[
V_L=V_U
\]

Karena itu, MM Proposition I bukan sekadar assertion, tetapi konsekuensi **no-arbitrage / Law of One Price**.

### The Market Value Balance Sheet

**Market value balance sheet** berbeda dari accounting balance sheet dalam dua cara utama:

1. memasukkan seluruh economic assets dan liabilities, termasuk intangible assets seperti reputation, brand, intellectual property, dan human capital;
2. menggunakan **current market values**, bukan historical accounting costs.

Struktur konseptualnya:

| Assets | Securities / Claims |
|---|---|
| Cash | Short-term debt |
| PP&E | Long-term debt |
| Working capital | Convertible debt |
| Intellectual property | Common equity |
| Reputation / brand | Preferred stock |
| Human capital | Warrants / options |
| **Total market value of assets** | **Total market value of securities** |

Karena sisi kiri dan kanan merepresentasikan claim terhadap economic pie yang sama:

\[
\boxed{
\text{Market Value of Equity}
=
\text{Market Value of Assets}
-
\text{Market Value of Debt and Other Liabilities}
}
\tag{14.1}
\]

### Example — Multiple Securities

Jika assets bernilai $1,000 dan firm memiliki:

- debt = $500;
- warrant = $60;

maka:

\[
E = 1000-500-60=440
\]

MM Proposition I berlaku tidak hanya untuk kombinasi debt-equity sederhana, tetapi juga capital structure dengan berbagai securities.

### Application: Leveraged Recapitalization

**Leveraged recapitalization** terjadi ketika firm menambah debt dan menggunakan proceeds untuk repurchase shares.

Harrison Industries:

- 50 juta shares;
- price = $4;
- initial equity value = $200 juta;
- borrow = $80 juta;
- proceeds digunakan untuk repurchase 20 juta shares.

#### Stage 1 — Borrowing

Borrow $80 juta:

- cash +$80 juta;
- debt +$80 juta;
- equity value tetap $200 juta.

#### Stage 2 — Share Repurchase

Firm menggunakan cash $80 juta membeli:

\[
\frac{80}{4}=20
\]

juta shares.

Setelah repurchase:

- assets kembali $200 juta;
- debt = $80 juta;
- equity = $120 juta;
- shares remaining = 30 juta.

Share price:

\[
P
=
\frac{120}{30}
=
4
\]

Jadi share price tidak berubah.

> [!WARNING] Important Distinction
> **Repurchase financed by debt dapat menurunkan total market capitalization tanpa menurunkan share price.**
>
> Market cap turun karena sebagian equity claim digantikan oleh debt claim. Itu bukan destruction of firm value.

---

## 5. 14.3 Modigliani–Miller II: Leverage, Risk, and the Cost of Capital

### Why Cheap Debt Does Not Make the Firm Cheaper

Debt biasanya memiliki lower required return daripada equity karena memiliki higher priority dan lebih sedikit risk.

Namun perusahaan tidak dapat sekadar mengganti expensive equity dengan cheap debt tanpa konsekuensi. Debt meningkatkan financial leverage dan menjadikan equity lebih berisiko.

MM Proposition II mengkuantifikasi hubungan tersebut.

### From MM I to Returns

MM I:

\[
E+D=U=A
\tag{14.2}
\]

Portfolio yang terdiri dari debt dan levered equity mereplikasi unlevered firm. Karena return portfolio adalah weighted average return:

\[
\frac{E}{E+D}R_E
+
\frac{D}{E+D}R_D
=
R_U
\tag{14.3}
\]

Rearrange:

\[
R_E
=
R_U
+
\frac{D}{E}(R_U-R_D)
\tag{14.4}
\]

Ini menunjukkan bahwa levered equity memiliki:

1. underlying business risk, \(R_U\); dan
2. tambahan amplification akibat leverage.

### MM Proposition II

Untuk expected returns:

> [!NOTE] Modigliani–Miller Proposition II
>
> \[
> \boxed{
> r_E
> =
> r_U
> +
> \frac{D}{E}(r_U-r_D)
> }
> \tag{14.5}
> \]

di mana:

- \(r_E\) = cost of levered equity;
- \(r_U\) = unlevered cost of capital / return required on firm assets;
- \(r_D\) = debt cost of capital;
- \(D/E\) = market-value debt-to-equity ratio.

Interpretasinya:

\[
\text{Equity Cost}
=
\text{Business Risk}
+
\text{Leverage Risk Premium}
\]

Semakin besar \(D/E\), semakin besar risk yang ditanggung equity holders, sehingga semakin tinggi \(r_E\).

### Example — Equity Cost of Capital

Jika:

- \(r_U=15\%\);
- \(r_D=5\%\);
- debt = $200;
- firm value = $1,000;
- equity = $800;

maka:

\[
r_E
=
15\%
+
\frac{200}{800}(15\%-5\%)
\]

\[
r_E
=
15\%+2.5\%
=
17.5\%
\]

Walaupun debt murah, equity menjadi lebih mahal.

### Capital Budgeting and the Weighted Average Cost of Capital

Risk aset perusahaan sama dengan risk portfolio securities yang membiayainya. Karena itu unlevered cost of capital adalah weighted average cost of debt dan equity:

\[
\boxed{
r_U
=
\frac{E}{E+D}r_E
+
\frac{D}{E+D}r_D
}
\tag{14.6}
\]

Dalam chapter ini tidak ada taxes, sehingga after-tax adjustment atas debt tidak muncul. Karena itu:

\[
\boxed{
r_{WACC}=r_U
}
\tag{14.7}
\]

Dengan perfect capital markets:

> **Changing leverage changes the distribution of required returns across securities, but not the weighted-average required return of the firm’s assets.**

### Why WACC Stays Constant

As debt rises:

1. weight pada lower-cost debt naik;
2. tetapi leverage membuat equity lebih risky;
3. \(r_E\) naik;
4. pada leverage tinggi, debt sendiri juga dapat menjadi risky sehingga \(r_D\) naik;
5. weighted combination tetap merepresentasikan risk underlying assets.

Jadi:

\[
\text{lower-cost debt benefit}
\quad\Longleftrightarrow\quad
\text{higher cost of levered equity}
\]

dan efek tersebut saling offset.

> [!WARNING] Important Distinction
> **Debt cost lebih rendah daripada equity cost tidak berarti debt menurunkan WACC.**
>
> Cost security ditentukan oleh risk security tersebut. Mengubah capital structure mengalokasikan kembali risk, bukan menghilangkannya.

### Example — Reducing Leverage

NRG memiliki:

\[
D/E=2,\quad r_D=6\%,\quad r_E=12\%
\]

Initial WACC:

\[
r_U
=
\frac{1}{3}(12\%)
+
\frac{2}{3}(6\%)
=
8\%
\]

Jika leverage dikurangi menjadi:

\[
D/E=1
\]

dan cost of debt turun menjadi 5.5%, maka:

\[
r_E
=
8\%
+
1(8\%-5.5\%)
=
10.5\%
\]

New WACC:

\[
r_{WACC}
=
\frac{1}{2}(10.5\%)
+
\frac{1}{2}(5.5\%)
=
8\%
\]

Jika debt dihapus seluruhnya, equity becomes unlevered dan:

\[
r_E=r_U=8\%
\]

Tidak ada financing configuration yang mengubah enterprise value selama assumptions perfect-market tetap berlaku.

### WACC with Multiple Securities

Jika firm memiliki lebih dari debt dan common equity, prinsipnya tetap sama:

\[
r_U
=
\sum_i w_i r_i
\]

dengan weight berdasarkan **market value** setiap security.

Dalam textbook example, firm memiliki:

- equity = $440;
- debt = $500;
- warrant = $60.

Expected returns:

- \(r_E=18.18\%\);
- \(r_D=5\%\);
- \(r_W=75\%\).

Maka:

\[
r_U
=
\frac{440}{1000}(18.18\%)
+
\frac{500}{1000}(5\%)
+
\frac{60}{1000}(75\%)
=
15\%
\]

Walaupun securities memiliki risk-return yang sangat berbeda, weighted-average cost tetap merefleksikan risk underlying project.

### Levered and Unlevered Betas

Prinsip yang sama berlaku pada systematic risk.

Unlevered / asset beta:

\[
\boxed{
\beta_U
=
\frac{E}{E+D}\beta_E
+
\frac{D}{E+D}\beta_D
}
\tag{14.8}
\]

Rearrange untuk equity beta:

\[
\boxed{
\beta_E
=
\beta_U
+
\frac{D}{E}(\beta_U-\beta_D)
}
\tag{14.9}
\]

Jadi ketika investment risk tidak berubah:

- \(\beta_U\) tetap;
- leverage meningkat → \(\beta_E\) meningkat.

Ini adalah beta-version dari MM Proposition II.

### Example — Betas and Leverage

CVS:

- equity beta \(=0.80\);
- \(D/E=0.10\);
- debt beta \(=0\).

Unlevered beta:

\[
\beta_U
=
\frac{1}{1+0.1}(0.80)
=
0.73
\]

Jika leverage naik menjadi \(D/E=0.50\):

\[
\beta_E
=
0.73
+
0.50(0.73-0)
=
1.09
\]

Underlying business tidak menjadi lebih risky karena refinancing, tetapi shareholders sekarang memegang claim yang lebih levered.

### Cash as Negative Debt

Cash dan risk-free securities memiliki low/no market risk. Karena itu excess cash memiliki effect yang berlawanan dengan debt.

Textbook menyatakan bahwa untuk analisis leverage, kita dapat memandang cash sebagai **negative debt**:

\[
\text{Net Debt}
=
\text{Debt}
-
\text{Excess Cash}
\]

Enterprise value:

\[
\text{Enterprise Value}
=
E+\text{Net Debt}
\]

atau:

\[
EV
=
E+D-\text{Cash}
\]

### Example — Cisco

Textbook example:

- market capitalization = $102.4 bn;
- debt = $16.2 bn;
- cash & short-term investments = $48.6 bn.

Net debt:

\[
16.2-48.6=-32.4
\]

Enterprise value:

\[
EV
=
102.4-32.4
=
70.0
\]

Dengan equity beta 1.23 dan debt/net-debt beta diasumsikan zero:

\[
\beta_U
=
\frac{102.4}{70}(1.23)
+
\frac{-32.4}{70}(0)
=
1.80
\]

Dengan:

\[
r_f=2\%,\qquad
\text{market risk premium}=5\%
\]

maka:

\[
r_U
=
2\%+1.80(5\%)
=
11\%
\]

Textbook lesson: karena firm memegang banyak risk-free cash, **equity dapat terlihat lebih aman daripada operating business-nya sendiri**.

---

## 6. 14.4 Capital Structure Fallacies

Chapter kemudian menggunakan MM untuk membongkar dua argumen populer tetapi keliru.

---

### Fallacy 1 — “Leverage Raises EPS, Therefore It Raises Share Price”

Leverage dapat menaikkan expected EPS karena debt-funded repurchase mengurangi number of shares outstanding.

Tetapi peningkatan EPS tidak otomatis menciptakan shareholder value.

### Example — Levitron Industries

LVI:

- EBIT expected = $10 juta;
- shares = 10 juta;
- price = $7.50;
- initial debt = 0.

Tanpa debt:

\[
EPS
=
\frac{10}{10}
=
1.00
\]

LVI kemudian meminjam $15 juta dengan interest 8% dan repurchase 2 juta shares.

Interest:

\[
15(8\%)=1.2
\]

Earnings after interest:

\[
10-1.2=8.8
\]

Remaining shares:

\[
10-2=8
\]

Expected EPS:

\[
EPS
=
\frac{8.8}{8}
=
1.10
\]

Expected EPS naik dari $1.00 menjadi $1.10.

Tetapi ketika EBIT rendah, leverage bekerja ke arah berlawanan. Jika EBIT hanya $4 juta:

Without leverage:

\[
EPS
=
\frac{4}{10}
=
0.40
\]

With leverage:

\[
EPS
=
\frac{4-1.2}{8}
=
0.35
\]

Jadi leverage membuat EPS **lebih sensitive terhadap EBIT**.

```text
EBIT high
   ↓
Fixed interest is relatively small
   ↓
Fewer shares
   ↓
Levered EPS rises faster

EBIT low
   ↓
Fixed interest consumes larger fraction
   ↓
Residual earnings shrink sharply
   ↓
Levered EPS falls faster
```

Textbook Figure 14.2 menampilkan dua garis EPS terhadap EBIT. Garis levered lebih curam: leverage memperbesar variation EPS.

### Why Higher EPS Does Not Raise Price

Dengan no growth dan seluruh earnings dibayar sebagai dividends, initial:

\[
P=\frac{EPS}{r_U}
\]

Karena:

\[
7.50
=
\frac{1.00}{r_U}
\]

maka:

\[
r_U=13.33\%
\]

Setelah leverage:

- debt = $15 juta;
- equity = $60 juta;
- \(D/E=1/4\);
- \(r_D=8\%\).

MM II:

\[
r_E
=
13.33\%
+
\frac{1}{4}(13.33\%-8\%)
=
14.66\%
\]

New price:

\[
P
=
\frac{1.10}{14.66\%}
=
7.50
\]

EPS lebih tinggi, tetapi required return juga lebih tinggi karena risk naik. Share price tetap.

> [!WARNING] Important Distinction
> **Higher EPS ≠ higher value.**
>
> EPS tidak menyatakan berapa risk yang diperlukan untuk menghasilkan earnings tersebut.

### Leverage, ROE, and P/E

Leverage juga dapat menaikkan average **ROE**, tetapi equity menjadi lebih risky.

Karena leverage memengaruhi accounting metrics, membandingkan:

- EPS;
- ROE;
- P/E;

antar firms dengan capital structures berbeda dapat menyesatkan.

Textbook menyatakan analysts sering lebih memilih performance measure / valuation multiple sebelum interest expense, misalnya:

\[
\frac{Enterprise\ Value}{EBIT}
\]

atau:

\[
\frac{Enterprise\ Value}{EBITDA}
\]

ketika firms memiliki capital structures yang sangat berbeda.

> [!TEXTBOOK CONTEXT]
> Chapter menggunakan bank capital regulation pasca-financial crisis sebagai illustration bahwa lower leverage dapat menurunkan reported ROE, tetapi juga menurunkan equity risk. Dalam perfect-market logic, lower ROE yang semata-mata berasal dari lower leverage tidak dengan sendirinya membuat equity investment kurang menarik.

---

### Fallacy 2 — “Issuing Equity Dilutes Shareholders, Therefore Debt Is Better”

Issuing new shares memang meningkatkan number of shares outstanding. Tetapi argumen “dilution destroys value” mengabaikan sisi lain transaksi:

> Firm menerima **cash/assets** sebagai imbalan atas shares baru.

Jika shares diterbitkan pada fair price, new investors membayar full market value atas ownership yang mereka terima.

### Example — Jet Sky Airlines

JSA:

- no debt;
- 500 juta shares;
- price = $16;
- equity/assets value = $8 bn;
- membutuhkan $1 bn untuk membeli new planes.

Shares baru pada $16:

\[
\frac{1\,\text{bn}}{16}
=
62.5\text{ juta shares}
\]

Setelah issue:

- assets = $9 bn;
- shares = 562.5 juta.

Value per share:

\[
\frac{9\,\text{bn}}{562.5\,\text{m}}
=
16
\]

Share price tetap $16.

> [!IMPORTANT] Core Lesson
> Jika new equity dijual pada **fair market price**, equity issuance itu sendiri adalah zero-NPV transaction.
>
> Shareholder gain/loss berasal dari **NPV penggunaan dana**, bukan semata-mata dari kenaikan jumlah shares.

Dilution secara ekonomis menjadi masalah jika value transferred kepada new shareholders tidak sepenuhnya dikompensasi—misalnya shares diberikan atau dijual tidak pada fair economic value. Tetapi itu berbeda dari fair-priced capital raising yang dianalisis dalam perfect market.

---

## 7. 14.5 MM: Beyond the Propositions

Nilai terbesar dari Modigliani–Miller bukan hanya dua equations, tetapi **cara berpikir** yang mereka perkenalkan.

MM memaksa kita bertanya:

> Jika financial transaction tampaknya menciptakan value, **apa market imperfection yang menjadi sumber value tersebut?**

Dalam perfect market, buying, selling, splitting, atau repackaging claims tidak mengubah underlying cash flows.

Berk & DeMarzo merangkum insight ini sebagai **conservation of value principle**.

> [!NOTE] Conservation of Value Principle
> Dengan perfect capital markets, financial transactions **tidak menambah atau menghancurkan value**; mereka hanya **merepackage risk dan return**.

Analogi textbook: memotong satu pizza menjadi empat atau delapan bagian tidak mengubah ukuran pizzanya. Sama halnya, membagi firm cash flows menjadi stock, debt, warrants, atau securities lain tidak mengubah total economic pie selama financial structure tidak mengubah underlying cash flows.

Prinsip ini memperluas MM jauh melampaui debt-versus-equity.

Jika suatu financing arrangement tampaknya memberikan “free value”, ada dua kemungkinan:

1. value tersebut illusory karena hanya repackaging; atau
2. terdapat **market imperfection** yang benar-benar menciptakan benefit/cost.

Chapter berikutnya dalam textbook kemudian meninggalkan perfect-market benchmark dan mempelajari frictions tersebut.

---

## Chapter Synthesis

Chapter 14 dapat dipahami sebagai satu cerita tentang **risk yang tidak bisa dihilangkan hanya dengan membagi cash flow secara berbeda**.

Perusahaan memiliki underlying assets yang menghasilkan uncertain future cash flows. Nilai economic assets tersebut ditentukan oleh magnitude, timing, dan risk cash flows. Financing kemudian menentukan bagaimana cash flows yang sama dibagikan kepada investors.

Jika perusahaan seluruhnya equity financed, shareholders menanggung seluruh business risk. Ketika debt ditambahkan, creditors mengambil claim yang lebih senior dan relatif aman. Equity holders kini memperoleh hanya residual setelah debt dibayar. Karena residual tersebut lebih sensitive terhadap business outcome, levered equity menjadi lebih risky dan investor meminta expected return yang lebih tinggi.

Inilah alasan debt yang “murah” tidak otomatis menurunkan total cost of capital. Lower debt cost diimbangi higher equity cost. Dalam perfect capital markets:

\[
V_L=V_U
\]

dan:

\[
r_{WACC}=r_U
\]

Capital structure mengubah **distribution of risk and return**, bukan total value.

MM Proposition I menjelaskan **value neutrality**. MM Proposition II menjelaskan **risk-return mechanism** yang membuat neutrality tersebut mungkin. Homemade leverage dan arbitrage menjelaskan mengapa market prices tidak dapat secara konsisten menyimpang dari hasil tersebut.

Market value balance sheet kemudian memberi cara praktis melihat transaksi financing: jika debt naik tetapi assets naik sebesar jumlah yang sama, equity value belum berubah. Jika cash kemudian digunakan repurchase shares, aggregate equity turun karena sebagian claim telah diganti debt, tetapi price per remaining share tidak berubah dalam perfect market.

Dari sini kita dapat melihat mengapa beberapa shortcuts populer gagal:

- debt murah → belum tentu WACC turun;
- EPS naik → belum tentu firm value naik;
- ROE naik → belum tentu shareholders lebih baik;
- new shares bertambah → belum tentu existing shareholders kehilangan value.

Semua metrics tersebut dapat berubah karena **repackaging financial risk** tanpa perubahan underlying economic value.

Karena itu, MM memberikan benchmark diagnostik yang kuat:

> **Jangan bertanya hanya “financing mana terlihat lebih murah?” Tanyakan “apa yang berubah pada underlying cash flows, risk, taxes, costs, information, atau incentives sehingga total value benar-benar berubah?”**

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Capital structure | Relative mix of debt, equity, dan securities lain | Menentukan distribution of claims dan risk | [[2.1 Equity Instruments]], [[2.2 Long-Term Debt Instruments]] |
| Unlevered equity | Equity pada firm tanpa debt | Menanggung seluruh business risk | [[2.1 Equity Instruments]] |
| Levered equity | Residual equity pada firm yang memiliki debt | Risk dan required return lebih tinggi | [[2.1 Equity Instruments]] |
| Perfect capital markets | No taxes/costs, fair competitive prices, financing tidak mengubah asset cash flow/information | Benchmark untuk isolasi financing effect | [[2.5 Capital Raising Methods]] |
| MM Proposition I | Firm value independent of capital structure dalam perfect markets | Memisahkan investment value dari financing packaging | [[2.5 Capital Raising Methods]] |
| Homemade leverage | Investor mengubah leverage sendiri melalui borrowing/lending | Menjelaskan mengapa firm leverage bukan unique value source | [[2.5 Capital Raising Methods]] |
| Market value balance sheet | Economic assets dan securities pada current market value | Mempermudah analisis recapitalization | [[2.5 Capital Raising Methods]] |
| MM Proposition II | \(r_E\) meningkat dengan \(D/E\) | Menjelaskan trade-off risk-return akibat leverage | [[2.1 Equity Instruments]], [[2.2 Long-Term Debt Instruments]] |
| Unlevered cost of capital | Required return underlying assets | Benchmark total business risk | [[3.2 Sources of Finance and Capital Structure]] |
| Levered/unlevered beta | Systematic risk equity vs underlying assets | Leverage mengubah equity beta, bukan asset beta | [[2.1 Equity Instruments]] |
| Net debt | Debt minus excess cash | Cash memiliki effect berlawanan dari leverage | [[2.2 Long-Term Debt Instruments]] |
| EPS leverage effect | Leverage dapat menaikkan expected EPS sekaligus risk-nya | Higher EPS bukan proof of value creation | [[2.5 Capital Raising Methods]] |
| Equity dilution fallacy | More shares tidak otomatis menurunkan value/share jika issue pada fair price | Penting dalam capital raising | [[2.5 Capital Raising Methods]] |
| Conservation of value | Financial transactions hanya repackage risk dalam perfect market | Framework mencari market imperfection yang benar-benar menciptakan value | [[3.2 Sources of Finance and Capital Structure]] |

---

## Compression Notes

### Retained in Detail

- project example yang membandingkan all-equity dengan debt + equity;
- hubungan leverage dengan risk dan expected return;
- asumsi perfect capital markets;
- MM Proposition I dan Law of One Price;
- homemade leverage;
- market value balance sheet;
- leveraged recapitalization;
- MM Proposition II;
- unlevered cost of capital / WACC;
- multiple-security WACC;
- levered dan unlevered betas;
- excess cash sebagai negative debt;
- EPS/ROE/P-E fallacy;
- equity issuance dan dilution;
- conservation of value principle.

### Condensed

- historical discussion mengenai perkembangan teori Modigliani–Miller;
- Nobel Prize biographical material;
- extended commentary mengenai 2008 financial crisis dan bank regulation;
- repeated numerical variations yang mengajarkan principle yang sama;
- Concept Check dan end-of-chapter problem sets.

### Omitted / Beyond CF4

- website links dan data-case instructions untuk mengambil data Home Depot;
- bibliography dan footnote details yang tidak dibutuhkan untuk memahami chapter;
- lengthy historical anecdotes;
- end-of-chapter exercises yang berfungsi sebagai practice rather than textbook explanation.

---

## CF4 Connection Map

```text
Debt and equity claims
        ↓
[[2.1 Equity Instruments]]
        +
[[2.2 Long-Term Debt Instruments]]
        ↓
Firm chooses a financing mix
        ↓
[[2.5 Capital Raising Methods]]
        ↓
Leverage reallocates risk
        ↓
MM Proposition I & II
        ↓
Capital structure as a financing decision
        ↓
[[3.2 Sources of Finance and Capital Structure]]
```

Chapter 14 terutama relevan untuk memahami bahwa issuer tidak boleh membandingkan debt dan equity hanya berdasarkan quoted interest rate atau expected return secara terpisah. Capital structure harus dilihat sebagai **system of claims atas underlying assets**.

---

## Quick Reading Review

- **Capital structure** adalah mix debt, equity, dan securities lainnya.
- **Unlevered equity** menanggung seluruh risk underlying assets.
- Debt memiliki prioritas; **levered equity** menerima residual cash flow dan menjadi lebih risky.
- Dalam perfect capital markets, financing tidak mengubah underlying asset cash flows.
- **MM Proposition I:** \(V_L=V_U=A\); capital structure tidak mengubah total firm value.
- **Homemade leverage** memungkinkan investors replicate leverage sendiri.
- **Market value balance sheet** memakai economic assets/liabilities pada current market value.
- Leveraged recapitalization dapat mengubah market capitalization tanpa mengubah share price.
- **MM Proposition II:**  
  \[
  r_E=r_U+\frac{D}{E}(r_U-r_D)
  \]
- Dengan no taxes:
  \[
  r_{WACC}=r_U
  \]
- Cheap debt tidak otomatis menghasilkan cheap firm karena leverage menaikkan equity risk.
- Asset beta adalah weighted average equity dan debt beta:
  \[
  \beta_U=\frac{E}{E+D}\beta_E+\frac{D}{E+D}\beta_D
  \]
- Lebih banyak leverage → higher equity beta, jika asset risk tetap.
- Excess cash dapat dipandang sebagai **negative debt**.
- Leverage dapat meningkatkan expected EPS dan ROE, tetapi juga meningkatkan risk; karena itu metrics tersebut tidak membuktikan value creation.
- Fair-priced equity issuance menambah assets sekaligus shares; **jumlah shares yang lebih banyak tidak otomatis menurunkan share price**.
- Nilai financing transaction berasal dari underlying investment atau market imperfection, bukan sekadar repackaging claims.
- **Conservation of value:** dalam perfect markets, financial transactions neither create nor destroy value.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists | Berk & DeMarzo, Chapter 14 opening |
| Equity vs Debt Financing | Chapter 14, Section 14.1 |
| Unlevered vs Levered Equity | Chapter 14, Section 14.1 |
| Leverage, Risk, and Return | Chapter 14, Section 14.1 |
| Perfect Capital Markets | Chapter 14, Section 14.2 |
| MM Proposition I | Chapter 14, Section 14.2 |
| Homemade Leverage & Arbitrage | Chapter 14, Section 14.2 |
| Market Value Balance Sheet | Chapter 14, Section 14.2 |
| Leveraged Recapitalization | Chapter 14, Section 14.2 |
| MM Proposition II | Chapter 14, Section 14.3 |
| Unlevered Cost of Capital / WACC | Chapter 14, Section 14.3 |
| WACC with Multiple Securities | Chapter 14, Section 14.3 |
| Levered & Unlevered Betas | Chapter 14, Section 14.3 |
| Cash / Net Debt | Chapter 14, Section 14.3 |
| EPS, ROE, and P/E Fallacies | Chapter 14, Section 14.4 |
| Equity Issuance and Dilution | Chapter 14, Section 14.4 |
| Conservation of Value Principle | Chapter 14, Section 14.5 |
