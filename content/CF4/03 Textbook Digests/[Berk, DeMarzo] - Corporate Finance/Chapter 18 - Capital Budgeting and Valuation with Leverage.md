---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk and Peter DeMarzo"
chapter: "18"
chapter_title: "Capital Budgeting and Valuation with Leverage"
cf4_topics: ["4.3"]
cf4_relevance: "High"
source_scope: "Chapter 18; Sections 18.1-18.8, with Sections 18.1-18.5 retained in greatest detail in accordance with the CF4 syllabus"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, CorporateFinance, CapitalBudgeting, WACC, APV, FTE]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 18: Capital Budgeting and Valuation with Leverage

> [!ABSTRACT] Chapter in One View
> Capital budgeting dengan leverage harus memasukkan pengaruh financing terhadap discount rate dan/atau cash flow. Chapter ini mengembangkan tiga metode yang, bila diterapkan konsisten, menghasilkan nilai yang sama: **weighted average cost of capital (WACC)**, **adjusted present value (APV)**, dan **flow-to-equity (FTE)**. WACC memasukkan interest tax shield secara implisit melalui after-tax cost of debt; APV menilai unlevered project dan menambahkan PV tax shield secara eksplisit; FTE menilai cash flow yang benar-benar tersisa bagi shareholders setelah interest, borrowing, dan debt repayment. Dengan constant target debt-to-value ratio, WACC biasanya paling sederhana. Project risk dan debt capacity tidak selalu sama dengan firm average, sehingga companywide WACC hanya tepat untuk proyek dengan market risk dan leverage yang sebanding. Project-based cost of capital diperoleh dengan mengestimasi unlevered cost dari comparable businesses, lalu *re-levering* sesuai incremental financing proyek. Sections lanjutan menunjukkan bahwa APV lebih fleksibel ketika leverage policy tidak konstan atau financing menimbulkan friksi lain.

## 1. Why This Chapter Exists

Capital budgeting dasar menilai incremental free cash flow (FCF) dengan discount rate yang mencerminkan risk. Kerangka tersebut belum lengkap ketika firm memakai leverage karena debt financing dapat menciptakan interest tax shield, mengubah risk equity, serta menimbulkan financing costs atau benefits lain.

Chapter ini menjawab tiga pertanyaan:

1. Bagaimana tax benefit of debt dimasukkan ke project valuation tanpa double counting?
2. Metode mana—WACC, APV, atau FTE—yang paling tepat untuk financing policy tertentu?
3. Bagaimana menentukan cost of capital bila project risk dan debt capacity berbeda dari firm average?

Logika corporate finance-nya adalah:

```text
Project operating cash flows dan market risk
↓
Financing policy menentukan debt capacity dan tax shield
↓
Pilih cash flow yang dinilai dan discount rate yang konsisten
↓
WACC / APV / FTE
↓
Levered project value dan NPV yang sama
```

## 2. Chapter Map

```text
Chapter 18 — Capital Budgeting and Valuation with Leverage
├── 18.1 Overview of Key Concepts
├── 18.2 The Weighted Average Cost of Capital Method
│   ├── Using WACC to value a project
│   └── Implementing a constant debt-equity ratio
├── 18.3 The Adjusted Present Value Method
│   ├── Unlevered value
│   └── Value of the interest tax shield
├── 18.4 The Flow-to-Equity Method
│   ├── Free cash flow to equity
│   └── Valuing equity cash flows
├── 18.5 Project-Based Costs of Capital
│   ├── Estimating unlevered cost of capital
│   ├── Project leverage and equity cost
│   └── Incremental leverage
├── 18.6 APV with Other Leverage Policies
├── 18.7 Other Effects of Financing
└── 18.8 Advanced Topics in Capital Budgeting
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 18.1 Valuation framework | High — fondasi valuasi financing-aware | [[4.3 Agency Theory and Governance]] |
| 18.2 WACC method | High — tax shield melalui discount rate | [[4.3 Agency Theory and Governance]] |
| 18.3 APV method | High — financing effects dinilai terpisah | [[4.3 Agency Theory and Governance]] |
| 18.4 FTE method | High — shareholder cash-flow perspective | [[4.3 Agency Theory and Governance]] |
| 18.5 Project-based cost of capital | High — risk dan financing proyek | [[4.3 Agency Theory and Governance]] |
| 18.6-18.8 Alternative policies and advanced topics | Beyond prescribed Chapter 18 scope; supporting context | [[4.3 Agency Theory and Governance]] |

## 3. 18.1 Overview of Key Concepts

Tiga metode utama memasukkan tax shield dengan cara berbeda:

| Method | Cash flow yang dinilai | Discount rate / adjustment | Tax shield masuk melalui... |
|---|---|---|---|
| **WACC** | Unlevered FCF | After-tax WACC | Discount rate yang lebih rendah karena after-tax cost of debt |
| **APV** | Unlevered FCF, lalu tax shield terpisah | Unlevered cost untuk project; rate sesuai risk tax shield | PV tax shield ditambahkan secara eksplisit |
| **FTE** | FCFE setelah interest dan net borrowing | Equity cost of capital | Lower taxes langsung menaikkan shareholder cash flow |

Jika assumptions dan inputs konsisten, ketiganya memberi levered project value dan NPV yang sama. Pilihan metode adalah persoalan kemudahan implementasi, bukan teori nilai yang berbeda.

Untuk memperlihatkan equivalence, chapter mula-mula memakai tiga simplifying assumptions:

1. **Project has average risk.** Market risk proyek sama dengan average risk investasi firm, sehingga firm cost of capital dapat digunakan.
2. **Firm maintains a constant market-value debt-equity ratio.** Debt disesuaikan proporsional dengan project/firm value. Risk debt dan equity serta WACC karena itu konstan sepanjang waktu.
3. **Corporate taxes are the only market imperfection.** Personal taxes, issuance costs, financial distress, agency costs, dan friksi lain sementara diabaikan.

Assumptions ini cukup masuk akal bagi typical project dalam single-industry firm dengan target leverage dan moderate debt. Namun project pada multidivisional firm dapat mempunyai business risk atau debt capacity berbeda; Sections berikutnya melonggarkan assumptions tersebut.

> [!WARNING] Important Distinction
> **Valuation method tidak menentukan value.** Operating cash flow, project risk, leverage policy, tax rules, dan market imperfections menentukan value. WACC, APV, serta FTE hanyalah tiga representasi konsisten atas economics yang sama.

## 4. 18.2 The Weighted Average Cost of Capital Method

WACC method memasukkan interest tax shield secara implisit dengan memakai after-tax debt cost:

$$
\boxed{
r_{\text{wacc}}
=\frac{E}{E+D}r_E
+\frac{D}{E+D}r_D(1-\tau_c)
}
\tag{18.1}
$$

Keterangan:

- $E$: market value of equity;
- $D$: market value of debt **net of cash**;
- $r_E$: equity cost of capital;
- $r_D$: debt cost of capital;
- $\tau_c$: marginal corporate tax rate.

Karena interest mengurangi taxable income, economic cost debt bagi corporation adalah $r_D(1-\tau_c)$. Bila target debt-equity ratio serta project risk konstan, expected FCF dapat didiskontokan dengan satu WACC:

$$
V_0^L
=\sum_{t=1}^{T}\frac{FCF_t}{(1+r_{\text{wacc}})^t}
\tag{18.2}
$$

$V_0^L$ adalah levered value, yaitu project value termasuk financing tax benefit sesuai leverage policy firm.

### Example — Avco RFX Project: Building the Free Cash Flow

Avco mempertimbangkan RFX packaging line berumur empat tahun. Annual sales diperkirakan USD 60 juta; cost of goods sold USD 25 juta; operating expenses USD 9 juta; equipment USD 24 juta didepresiasi straight-line selama empat tahun; upfront R&D/marketing USD 6.67 juta; tax rate 40%; dan tidak ada NWC requirement.

| FCF component (USD juta) | Year 0 | Years 1-4, each year |
|---|---:|---:|
| Sales | — | 60.00 |
| COGS | — | (25.00) |
| Operating expenses | (6.67) | (9.00) |
| Depreciation | — | (6.00) |
| EBIT | (6.67) | 20.00 |
| Tax at 40% | 2.67 | (8.00) |
| Unlevered net income | (4.00) | 12.00 |
| Add depreciation | — | 6.00 |
| Capital expenditure | (24.00) | — |
| **Free cash flow** | **(28.00)** | **18.00** |

FCF disebut *unlevered* karena interest dan borrowing tidak dimasukkan. Financing effect masuk melalui WACC, bukan melalui cash flow.

### Example — Valuing RFX with WACC

Avco mempunyai debt USD 320 juta, cash USD 20 juta, dan equity USD 300 juta. Net debt adalah USD 300 juta, sehingga enterprise value $E+D$ adalah USD 600 juta dan debt-to-value ratio 50%. Dengan $r_E=10\%$, $r_D=6\%$, dan $\tau_c=40\%$:

$$
r_{\text{wacc}}
=0.50(10\%)+0.50(6\%)(1-0.40)
=6.8\%
$$

Project value:

$$
V_0^L
=\frac{18}{1.068}
+\frac{18}{1.068^2}
+\frac{18}{1.068^3}
+\frac{18}{1.068^4}
=61.25\text{ juta}
$$

Dengan initial outlay USD 28 juta:

$$
NPV=61.25-28=33.25\text{ juta}
$$

RFX menambah firm value USD 33.25 juta dan harus diterima.

### Summary of the WACC method

1. Forecast project **unlevered FCF**.
2. Hitung WACC dari market-value capital structure dan current costs of capital.
3. Discount FCF dengan WACC untuk mendapat $V^L$; kurangi initial investment bila belum tercakup untuk memperoleh NPV.

WACC adalah metode paling umum karena sangat sederhana bila project mempunyai risk sebanding dengan firm dan tidak mengubah target debt-equity ratio. Company treasurer dapat menghitung companywide WACC sekali dan divisions memakainya untuk average-risk projects.

### Example — Acquisition as a Growing Perpetuity

Acquisition menambah FCF USD 3.8 juta pada year 1 dan tumbuh 3% selamanya. Karena risk dan leverage sama dengan Avco:

$$
V^L=\frac{3.8}{6.8\%-3\%}=100\text{ juta}
$$

Purchase price USD 80 juta menghasilkan:

$$
NPV=100-80=20\text{ juta}
$$

### Implementing a constant debt-equity ratio

WACC valuation tidak memerlukan detailed debt schedule, tetapi target ratio mempunyai financing implications. Jika debt-to-value ratio proyek adalah $d$, **debt capacity** pada date $t$ adalah:

$$
\boxed{D_t=dV_t^L}
\tag{18.3}
$$

$V_t^L$ adalah levered continuation value setelah date $t$. Nilai tersebut dapat dihitung mundur:

$$
V_t^L
=\frac{FCF_{t+1}+V_{t+1}^L}{1+r_{\text{wacc}}}
\tag{18.4}
$$

Karena RFX bernilai USD 61.25 juta dan $d=50\%$, incremental net debt saat proyek diterima adalah USD 30.625 juta—bukan sekadar 50% dari cash outlay USD 28 juta. Debt capacity terkait **market value project**, yang juga mencakup NPV.

Avco dapat memakai cash USD 20 juta dan new borrowing USD 10.625 juta. Karena project hanya membutuhkan USD 28 juta, sisa financing USD 2.625 juta dibayar kepada shareholders. Equity value naik USD 30.625 juta dan shareholders menerima USD 2.625 juta; total gain USD 33.25 juta, sama dengan project NPV.

Debt capacity RFX menurun bersama continuation value:

| Year | 0 | 1 | 2 | 3 | 4 |
|---:|---:|---:|---:|---:|---:|
| Levered continuation value (USD juta) | 61.25 | 47.41 | 32.63 | 16.85 | — |
| Debt capacity at 50% (USD juta) | 30.62 | 23.71 | 16.32 | 8.43 | — |

Artinya, firm harus secara bertahap repay debt agar target ratio tetap 50% ketika project value berkurang menuju akhir umur proyek.

> [!WARNING] Important Distinction
> **Debt financing berdasarkan cash cost ≠ debt capacity berdasarkan market value.** Untuk mempertahankan target leverage, incremental debt dikaitkan dengan levered value proyek, termasuk NPV, bukan hanya initial expenditure.

## 5. 18.3 The Adjusted Present Value Method

APV memisahkan operating value dari financing effect:

$$
\boxed{
V^L=APV=V^U+PV(\text{Interest Tax Shield})
}
\tag{18.5}
$$

$V^U$ adalah project value seandainya all-equity financed. Tidak seperti WACC yang memasukkan tax shield melalui discount rate, APV menunjukkan tax shield sebagai komponen value yang eksplisit.

### The unlevered value of the project

Untuk project dengan risk sama seperti firm dan target leverage ratio, unlevered cost of capital adalah pretax WACC:

$$
\boxed{
r_U
=\frac{E}{E+D}r_E
+\frac{D}{E+D}r_D
}
\tag{18.6}
$$

Pretax WACC adalah required return investor untuk memegang seluruh firm—debt dan equity—sebelum corporate tax adjustment. Selama leverage tidak mengubah overall asset risk dan tax shield mempunyai risk sama dengan project, $r_U$ mencerminkan business risk tanpa financial risk.

Untuk Avco:

$$
r_U=0.50(10\%)+0.50(6\%)=8\%
$$

Urutan costs of capital menjadi intuitif:

$$
r_{\text{wacc}}=6.8\%<r_U=8\%<r_E=10\%
$$

- WACC paling rendah karena sudah memasukkan tax subsidy.
- $r_U$ mencerminkan asset/business risk tanpa leverage benefit.
- $r_E$ paling tinggi karena shareholders menanggung financial risk akibat leverage.

Unlevered value RFX:

$$
V^U
=\frac{18}{1.08}
+\frac{18}{1.08^2}
+\frac{18}{1.08^3}
+\frac{18}{1.08^4}
=59.62\text{ juta}
$$

### Valuing the interest tax shield

Interest pada year $t$ diperkirakan dari debt outstanding pada akhir year sebelumnya:

$$
\text{Interest}_t=r_DD_{t-1}
\tag{18.7}
$$

Tax shield adalah $\tau_c r_DD_{t-1}$. Berdasarkan debt capacity RFX, expected tax shields adalah:

| Year | 1 | 2 | 3 | 4 |
|---:|---:|---:|---:|---:|
| Beginning debt (USD juta) | 30.62 | 23.71 | 16.32 | 8.43 |
| Interest at 6% | 1.84 | 1.42 | 0.98 | 0.51 |
| Tax shield at 40% | 0.73 | 0.57 | 0.39 | 0.20 |

Karena Avco mempertahankan target debt-to-value ratio, debt capacity naik ketika project value tinggi dan turun ketika project value rendah. Tax shield ikut berfluktuasi dengan project cash flow dan memiliki risk serupa. Karena itu, discount rate tax shield adalah $r_U=8\%$:

$$
PV(\text{Tax Shield})
=\frac{0.73}{1.08}
+\frac{0.57}{1.08^2}
+\frac{0.39}{1.08^3}
+\frac{0.20}{1.08^4}
=1.63\text{ juta}
$$

Maka:

$$
V^L=59.62+1.63=61.25\text{ juta}
$$

$$
NPV=61.25-28=33.25\text{ juta}
$$

Hasilnya identik dengan WACC.

### Summary of the APV method

1. Discount unlevered FCF pada $r_U$ untuk memperoleh $V^U$.
2. Tentukan expected debt dan interest tax shield pada setiap date.
3. Discount tax shields pada rate yang sesuai dengan risikonya.
4. Tambahkan PV financing effects ke unlevered value.

APV lebih panjang dalam constant leverage-ratio setting karena debt capacity dan project value saling bergantung dan harus diselesaikan simultan. Namun APV mempunyai dua kelebihan:

- memperlihatkan berapa banyak value yang berasal dari operating project dan berapa dari financing;
- lebih mudah diperluas untuk alternative debt schedules, issuance costs, distress costs, subsidies, atau friksi lain.

### Example — Acquisition Using APV

Unlevered acquisition value:

$$
V^U=\frac{3.8}{8\%-3\%}=76\text{ juta}
$$

Initial debt USD 50 juta menghasilkan first-year interest USD 3 juta dan tax shield USD 1.2 juta. Karena debt dan tax shield tumbuh 3% mengikuti target ratio:

$$
PV(\text{Tax Shield})
=\frac{1.2}{8\%-3\%}=24\text{ juta}
$$

$$
V^L=76+24=100\text{ juta},\qquad NPV=100-80=20\text{ juta}
$$

Tanpa tax shield, acquisition NPV adalah USD -4 juta. APV mengungkap bahwa deal hanya value-creating karena financing benefit; informasi ini tidak terlihat sejelas pada WACC.

## 6. 18.4 The Flow-to-Equity Method

WACC dan APV menilai project dari enterprise perspective menggunakan FCF sebelum debt payments. FTE langsung menilai cash flow yang tersedia bagi shareholders setelah seluruh transaksi debt.

### Calculating free cash flow to equity

**Free cash flow to equity (FCFE)** adalah FCF setelah after-tax interest, new borrowing, dan principal repayment:

$$
\text{Net Borrowing}_t=D_t-D_{t-1}
\tag{18.8}
$$

$$
\boxed{
FCFE_t
=FCF_t
-(1-\tau_c)(\text{Interest}_t)
+(\text{Net Borrowing}_t)
}
\tag{18.9}
$$

Net borrowing positif ketika debt bertambah dan negatif ketika principal dibayar kembali atau cash ditahan. After-tax interest digunakan karena interest mengurangi corporate tax.

Untuk RFX, Avco menerbitkan USD 30.62 juta debt pada date 0. Karena debt capacity turun menjadi USD 23.71 juta pada date 1, firm harus repay sekitar USD 6.92 juta. FCFE menjadi:

| Year | 0 | 1 | 2 | 3 | 4 |
|---:|---:|---:|---:|---:|---:|
| FCF (USD juta) | (28.00) | 18.00 | 18.00 | 18.00 | 18.00 |
| After-tax interest | — | (1.10) | (0.85) | (0.59) | (0.30) |
| Net borrowing | 30.62 | (6.92) | (7.39) | (7.89) | (8.43) |
| **FCFE** | **2.62** | **9.98** | **9.76** | **9.52** | **9.27** |

Date-0 FCFE positif karena borrowing melebihi project outlay; USD 2.62 juta dapat dibayar sebagai dividend atau share repurchase. Pada years 1-4, FCFE lebih rendah daripada FCF karena interest dan debt repayment.

### Valuing equity cash flows

Karena FCFE dibayar kepada shareholders, discount rate yang tepat adalah project equity cost of capital. RFX mempunyai risk dan leverage sama dengan Avco, sehingga $r_E=10\%$:

$$
NPV(FCFE)
=2.62
+\frac{9.98}{1.10}
+\frac{9.76}{1.10^2}
+\frac{9.52}{1.10^3}
+\frac{9.27}{1.10^4}
=33.25\text{ juta}
$$

Mengapa NPV tidak turun setelah interest dan principal dikurangkan? Karena debt payments diimbangi cash received saat debt diterbitkan. Jika debt fairly priced, NPV seluruh cash flow kepada/dari creditors adalah nol. Financing menambah value hanya melalui tax saving, yang telah tercermin pada lower after-tax interest.

### Summary of the FTE method

1. Hitung FCFE memakai Eq. 18.9.
2. Tentukan project equity cost of capital $r_E$.
3. Discount FCFE pada $r_E$ untuk memperoleh contribution to equity value.

FTE juga membutuhkan debt capacity schedule. Bila debt-equity ratio berubah, equity risk dan $r_E$ berubah dari waktu ke waktu, sehingga implementasi menjadi sulit. WACC biasanya lebih sederhana dalam target-ratio setting. FTE dapat unggul ketika tujuan langsungnya menilai equity sebuah firm dengan complex capital structure dan market value sekuritas lain tidak diketahui.

### What counts as debt?

Debt dapat mencakup long-term debt saja, short-term debt, atau lease obligations. Tidak ada satu klasifikasi yang selalu wajib. Konsistensi adalah kuncinya:

- jika liability diperlakukan sebagai debt dalam WACC, cash flow harus dihitung **sebelum** payments kepada liability tersebut;
- jika liability tidak dimasukkan dalam WACC, after-tax payments terkait harus dimasukkan dalam cash flow yang dinilai.

Berbagai klasifikasi menghasilkan value sama bila cash flow dan discount rate konsisten. Pilih representation yang membuat constant debt-to-value approximation paling masuk akal.

> [!WARNING] Important Distinction
> **FCF didiskontokan pada WACC atau $r_U$; FCFE didiskontokan pada $r_E$.** Mengurangi interest dari cash flow lalu tetap memakai WACC akan menghitung financing effect secara tidak konsisten.

## 7. 18.5 Project-Based Costs of Capital

Companywide cost of capital hanya tepat untuk project yang business risk dan leverage-nya sama dengan firm average. Multidivisional firm dapat memiliki health-care, transportation, media, real estate, atau intellectual-property projects dengan risk serta debt capacity sangat berbeda. Memakai satu WACC untuk semuanya akan menerima terlalu banyak high-risk projects dan menolak terlalu banyak low-risk projects.

### Estimating the unlevered cost of capital

Untuk project berbeda risk, cari **single-division comparable firms** dengan business risk serupa, lalu hitung pretax WACC masing-masing untuk menghapus financial leverage effect:

$$
r_U=\frac{E}{E+D}r_E+\frac{D}{E+D}r_D
$$

Avco mempertimbangkan plastics division. Dua comparables memberi:

| Comparable | $r_E$ | $r_D$ | Debt-to-value | Estimated $r_U$ |
|---|---:|---:|---:|---:|
| 1 | 12.0% | 6.0% | 40% | $0.60(12\%)+0.40(6\%)=9.6\%$ |
| 2 | 10.7% | 5.5% | 25% | $0.75(10.7\%)+0.25(5.5\%)=9.4\%$ |

Estimated plastics unlevered cost adalah sekitar 9.5%. Ini mencerminkan business risk plastics tanpa contaminating effect dari capital structure comparables.

### Project leverage and equity cost of capital

Setelah $r_U$ diketahui, *re-lever* sesuai project debt-equity ratio:

$$
\boxed{
r_E=r_U+\frac{D}{E}(r_U-r_D)
}
\tag{18.10}
$$

Semakin besar leverage, semakin besar financial risk shareholders dan semakin tinggi $r_E$. Jika plastics division memakai 50% debt dan $r_D=6\%$:

$$
r_E=9.5\%+\frac{0.50}{0.50}(9.5\%-6\%)=13.0\%
$$

WACC dapat dihitung dari Eq. 18.1 atau secara langsung. Jika $d=D/(D+E)$:

$$
\boxed{
r_{\text{wacc}}=r_U-d\tau_cr_D
}
\tag{18.11}
$$

Untuk plastics division:

$$
r_{\text{wacc}}
=9.5\%-0.50(0.40)(6\%)
=8.3\%
$$

Packaging WACC 6.8% tidak boleh digunakan: plastics business risk lebih tinggi.

### Example — Divisional Costs of Capital

Hasco lumber division memiliki $r_E=12.7\%$, $r_D=6\%$, debt-to-value 40%, dan tax rate 35%:

$$
r_U=0.60(12.7\%)+0.40(6\%)=10.0\%
$$

$$
r_{\text{wacc}}=0.60(12.7\%)+0.40(6\%)(1-0.35)=9.2\%
$$

Technology division mempunyai comparable unlevered cost 15% dan hanya 10% debt:

$$
r_E=15\%+\frac{0.10}{0.90}(15\%-6\%)=16.0\%
$$

$$
r_{\text{wacc}}=15\%-0.10(0.35)(6\%)=14.8\%
$$

Perbedaan besar ini menunjukkan mengapa division-specific cost of capital diperlukan.

### Common mistake — Re-levering the WACC incorrectly

Ketika leverage berubah, jangan mempertahankan $r_E$ dan $r_D$ lama. Debt serta equity menjadi lebih berisiko sehingga kedua required returns dapat meningkat.

Dalam textbook example, firm awalnya mempunyai debt-to-value 25%, $r_E=12\%$, $r_D=6.67\%$, dan $\tau_c=40\%$, sehingga WACC 10%. Jika leverage naik menjadi 50%, perhitungan naif dengan costs lama memberi 8%. Itu salah.

Langkah benar:

1. Unlever current costs untuk memperoleh $r_U=10.67\%$.
2. Tentukan new debt cost 7.34%.
3. Re-lever equity cost menjadi 14%.
4. Hitung new WACC sebesar 9.2%, bukan 8%.

> [!WARNING] Important Distinction
> **Leverage weight berubah → security risk juga berubah.** Mengganti bobot WACC tanpa memperbarui $r_E$ dan $r_D$ akan melebihkan tax-driven reduction in WACC.

### Determining incremental leverage

Project financing adalah perubahan total firm net debt **dengan project versus tanpa project**, bukan semata-mata loan yang secara legal melekat pada asset.

Jika warehouse dibeli dengan mortgage 90% tetapi firm kemudian mengurangi debt di tempat lain agar overall target tetap 40%, project incremental debt ratio adalah 40%, bukan 90%.

Empat prinsip penting:

1. **Cash is negative debt.** Menggunakan cash menaikkan net leverage; project inflow yang menambah cash menurunkan net leverage.
2. **Fixed equity payout policy implies 100% debt financing.** Jika dividend dan repurchase sudah fixed, seluruh project cash requirement mengurangi cash/menambah borrowing, sedangkan inflow menambah cash/membayar debt. Incremental $d=1$, walaupun firm secara legal tidak menerbitkan project debt.
3. **Optimal leverage depends on project and firm characteristics.** Safe project cash flows mendukung lebih banyak debt, tetapi distress, agency, dan information costs juga bergantung pada firm yang menampung project.
4. **Risk-free cash flows can be 100% debt financed.** Cash flows aman dapat di-offset dengan debt tanpa mengubah overall firm risk; appropriate after-tax discount rate adalah $r_D(1-\tau_c)$.

### Example — Cash-Financed Project at Apple

Apple memiliki cash besar dan no debt. Project mempunyai $r_U=12\%$; payout policy fixed; cash earns 4%; tax rate 35%. Karena seluruh project inflows/outflows mengubah cash balance, project secara incremental 100% debt financed ($d=1$):

$$
r_{\text{wacc}}=r_U-\tau_cr_D
=12\%-0.35(4\%)
=10.6\%
$$

Walaupun tidak ada legal borrowing, memakai cash menghilangkan after-tax interest income. Secara ekonomi, cash financing setara dengan peningkatan net debt.

> [!INFO] CF4 Connection
> Capital budgeting dan financing tidak dapat dipisahkan secara mekanis bila tax shield atau market imperfections memengaruhi value. Namun analisis harus tetap membedakan project business risk, incremental financing, dan stakeholder cash flows agar manfaat debt tidak dihitung dua kali.

## 8. 18.6 APV with Other Leverage Policies

> [!NOTE] Beyond CF4 prescribed scope
> Silabus CF4 mencantumkan Berk & DeMarzo Chapter 18.1-18.5. Sections 18.6-18.8 dipertahankan ringkas untuk menunjukkan batas assumptions dan pemilihan metode.

Jika debt-equity ratio tidak konstan, $r_E$ dan WACC berubah sepanjang waktu sehingga WACC/FTE lebih sulit. APV biasanya paling langsung karena operating value dan financing side effects dihitung terpisah.

- **Constant interest coverage:** interest ditetapkan sebagai fraction $k$ dari FCF. Tax shield mempunyai risk yang sama dengan FCF, sehingga

$$
V^L=(1+\tau_ck)V^U
$$

- **Predetermined debt schedule:** future debt dan tax shield ditetapkan di muka sehingga tax shield memiliki risk serupa debt dan didiskontokan pada $r_D$. Jika debt permanen konstan $D$, levered value menjadi $V^L=V^U+\tau_cD$ dalam corporate-tax-only setting.

Practical rule: gunakan WACC untuk maintained target debt-equity ratio; gunakan APV ketika debt schedule atau leverage policy berbeda.

## 9. 18.7 Other Effects of Financing

APV dapat menambahkan financing effects lain sebagai separate value components. Issuance costs dan gain/loss dari security mispricing harus dimasukkan. Financial distress dapat menurunkan expected FCF serta menaikkan cost of capital; agency dan asymmetric-information effects juga dapat membatasi desirable leverage. Karena itu, tax shield bukan satu-satunya financing consequence yang relevan.

## 10. 18.8 Advanced Topics in Capital Budgeting

Jika leverage hanya direbalance secara periodik, sebagian tax shield menjadi predetermined dan risk-nya berada di antara debt dan project risk. Hubungan unlevered cost, equity cost, serta WACC harus disesuaikan dengan permanence of debt. Investor taxes juga mengubah effective tax advantage of debt dalam APV, walaupun standard WACC untuk project dengan risk dan leverage sama dengan firm dapat tetap digunakan tanpa mengestimasi individual investor tax rates.

## Chapter Synthesis

Seluruh chapter dapat dipahami sebagai prinsip **cash-flow/discount-rate consistency**. Pertama tentukan klaim siapa dan cash flow apa yang dinilai. Jika memakai unlevered FCF, tax shield dapat dimasukkan secara implisit melalui WACC atau eksplisit melalui APV. Jika memakai FCFE, interest, borrowing, dan repayment masuk ke cash flow dan discount rate-nya harus equity cost. Ketiga representation menyatakan economics yang sama.

Constant target leverage membuat WACC sederhana karena debt capacity bergerak bersama project value dan WACC tetap konstan. APV lebih transparan karena memisahkan operating value dari financing value, terutama bila profitability bergantung kuat pada tax shield atau financing policy rumit. FTE memberi shareholder perspective yang langsung, tetapi memerlukan debt schedule dan equity cost yang konsisten.

Kesalahan terbesar bukan memilih metode yang “salah,” melainkan mencampur components: memakai companywide WACC untuk high-risk division, mengurangi interest dalam cash flow lalu tetap memakai after-tax WACC, menganggap legal project loan sama dengan incremental financing, atau mengubah capital weights tanpa re-levering security costs.

Pada akhirnya, correct project value memerlukan dua penilaian terpisah yang kemudian disatukan: **business risk menentukan unlevered cost**, sedangkan **incremental leverage policy menentukan distribution of risk dan financing benefits**. Companywide WACC hanyalah shortcut yang valid ketika keduanya cocok dengan firm average.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| WACC method | Discount unlevered FCF dengan after-tax WACC | Tax shield masuk secara implisit | [[4.3 Agency Theory and Governance]] |
| APV method | $V^U$ ditambah PV financing effects | Memisahkan operating dan financing value | [[4.3 Agency Theory and Governance]] |
| FTE method | Discount FCFE dengan equity cost | Menilai direct shareholder benefit | [[4.3 Agency Theory and Governance]] |
| Unlevered FCF | Cash flow sebelum interest dan debt transactions | Basis WACC/APV valuation | [[4.3 Agency Theory and Governance]] |
| FCFE | FCF setelah after-tax interest dan net borrowing | Cash flow yang tersedia bagi equity | [[4.3 Agency Theory and Governance]] |
| Unlevered cost $r_U$ | Required return atas business/asset risk | Memisahkan business dari financial risk | [[4.3 Agency Theory and Governance]] |
| Levered value $V^L$ | Project value termasuk financing benefits/costs | Dasar levered NPV | [[4.3 Agency Theory and Governance]] |
| Debt capacity | Debt yang konsisten dengan target ratio dan project value | Menentukan tax shield dan net borrowing | [[4.3 Agency Theory and Governance]] |
| Continuation value | PV remaining future cash flows pada date tertentu | Menentukan time-varying debt capacity | [[4.3 Agency Theory and Governance]] |
| Target leverage ratio | Debt disesuaikan proporsional terhadap market value | Membuat WACC dan equity cost konstan | [[4.3 Agency Theory and Governance]] |
| Project-based WACC | WACC berdasarkan project risk dan incremental leverage | Mencegah cross-division misvaluation | [[4.3 Agency Theory and Governance]] |
| Incremental financing | Perubahan firm net debt akibat menerima project | Lebih relevan daripada earmarked loan | [[4.3 Agency Theory and Governance]] |
| Cash as negative debt | Cash mengurangi net leverage | Cash-funded project dapat setara debt financing | [[4.3 Agency Theory and Governance]] |
| Re-levering | Menyesuaikan equity/debt costs terhadap new leverage | Mencegah understated WACC | [[4.3 Agency Theory and Governance]] |

## Compression Notes

### Retained in Detail

- Assumptions serta equivalence WACC, APV, dan FTE.
- Avco RFX example dari FCF forecast sampai NPV pada ketiga metode.
- Formulas 18.1-18.11 yang termasuk prescribed Sections 18.1-18.5.
- Debt capacity, continuation value, net borrowing, serta constant target leverage mechanics.
- Acquisition example untuk menunjukkan tax-shield dependence.
- Comparable-firm approach, unlevering/re-levering, divisional costs of capital, dan common WACC mistake.
- Incremental leverage principles termasuk cash as negative debt.

### Condensed

- Company background dan opening narrative.
- Repeated calculations yang menghasilkan NPV identik diringkas tanpa menghilangkan reconciliation.
- Spreadsheet line items direkonstruksi hanya bila mengajarkan mechanics penting.
- Sections 18.6-18.8 diringkas agresif karena di luar prescribed CF4 Chapter 18.1-18.5.

### Omitted / Beyond CF4

- Detailed formulas untuk annually rebalanced leverage, predetermined tax shields, dan investor taxes.
- Appendix derivations serta simultaneous Excel valuation techniques.
- Bibliographic footnotes, concept checks, and end-of-chapter problems.

## CF4 Connection Map

```text
Project operating decision
↓
Unlevered FCF + business risk
↓
Incremental leverage policy
→ interest tax shield
→ equity/debt risk allocation
→ possible financing imperfections
↓
WACC / APV / FTE valuation
↓
[[4.3 Agency Theory and Governance]]
```

## Quick Reading Review

- WACC, APV, dan FTE harus memberi nilai sama bila cash flows, risk, dan financing assumptions konsisten.
- WACC memasukkan tax shield melalui after-tax debt cost; jangan kurangi interest dari FCF yang didiskontokan dengan WACC.
- APV = unlevered value + PV financing effects; metode ini paling transparan untuk menilai sumber value.
- FTE = FCF − after-tax interest + net borrowing dan didiskontokan pada equity cost.
- Dengan target leverage ratio, tax shield bergerak bersama project value dan didiskontokan pada $r_U$.
- Debt capacity sama dengan target debt-to-value ratio dikalikan levered continuation value.
- Project debt dapat melebihi fraction of cash outlay karena market value juga mencakup NPV.
- Companywide WACC hanya cocok bila project risk dan leverage sama dengan firm average.
- Estimate project $r_U$ dari unlevered costs comparable pure-play firms, lalu re-lever sesuai project financing.
- Jika leverage berubah, $r_E$ dan biasanya $r_D$ ikut berubah; weights tidak boleh diubah sendirian.
- Incremental financing adalah perubahan overall net debt, bukan loan yang secara hukum melekat pada project.
- Cash adalah negative debt; menggunakan cash dapat berarti project secara ekonomi debt financed.
- APV umumnya lebih mudah untuk predetermined debt atau nonconstant leverage policies.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists; Chapter Map | Chapter 18 opening and notation |
| Three valuation frameworks | Section 18.1 |
| WACC, RFX, acquisition, and debt capacity | Section 18.2; Tables 18.1-18.4; Examples 18.1-18.2 |
| APV and tax-shield valuation | Section 18.3; Table 18.5; Example 18.3 |
| FCFE and FTE valuation | Section 18.4; Tables 18.6-18.7; Example 18.4 |
| Project-based costs and incremental leverage | Section 18.5; Examples 18.5-18.6; Re-Levering the WACC feature |
| Alternative leverage policies | Section 18.6 |
| Other financing effects | Section 18.7 |
| Advanced context | Section 18.8 and Chapter Summary |
