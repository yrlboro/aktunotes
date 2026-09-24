---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham; Michael C. Ehrhardt"
chapter: "9"
chapter_title: "The Cost of Capital"
cf4_topics: ["3.3 Capital Budgeting and Cost of Capital"]
cf4_relevance: "High"
source_scope: "Brigham & Ehrhardt, Chapter 9 — Sections 9.1–9.15 and chapter summary; CF4 core emphasis on §§9.1–9.2, 9.7–9.8, 9.11–9.13"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Brigham, CostOfCapital, WACC, CAPM, CapitalBudgeting]
date_created: "2026-08-25"
status: "study-note"
---

# Brigham — Chapter 9: The Cost of Capital

> [!ABSTRACT] Chapter in One View
> Chapter 9 menjawab satu pertanyaan sentral dalam corporate finance: **berapa minimum return yang harus dihasilkan perusahaan atau project agar capital providers menerima compensation yang sesuai dengan risk mereka?**
>
> Brigham membangun jawaban melalui **cost of capital**. Karena perusahaan biasanya dibiayai oleh kombinasi debt, preferred stock, dan common equity, masing-masing source mempunyai **component cost** sendiri. Component costs tersebut kemudian digabung menggunakan **target capital structure weights** untuk memperoleh **weighted average cost of capital (WACC)**.
>
> WACC bukan sekadar historical average financing rate. Dalam capital budgeting, yang relevan adalah **marginal cost of new capital**—return yang saat ini diminta investor untuk menyediakan tambahan dana. Karena interest pada debt memberikan tax benefit dalam framework textbook, debt masuk ke WACC menggunakan **after-tax cost**, sedangkan preferred dan common equity tidak memperoleh adjustment yang sama.
>
> Cost of common equity tidak dapat diamati langsung seperti yield debt. Chapter karena itu membahas tiga pendekatan: **CAPM**, **dividend-yield-plus-growth/DCF**, dan **own-bond-yield-plus-judgmental-risk-premium**. Ketiganya merupakan estimation methods, bukan angka yang dapat diketahui dengan kepastian sempurna.
>
> Setelah component costs tersedia, WACC dihitung menggunakan target proportions of financing. NCC, example utama chapter, memiliki target 30% debt, 10% preferred, 60% common equity dan menghasilkan WACC sekitar **9.4%**.
>
> Namun chapter kemudian memperbaiki satu simplification penting: **company-wide WACC tidak boleh dipakai otomatis untuk semua project**. WACC mencerminkan average risk dari current firm. High-risk divisions/projects memerlukan higher required return, sedangkan low-risk projects memerlukan lower rate.
>
> Brigham membedakan **stand-alone risk, corporate/within-firm risk, dan market/beta risk**. Secara teori market risk paling relevant bagi diversified shareholders, tetapi project beta sulit diukur. Karena itu firms sering memakai divisional WACC, pure-play comparables, accounting beta, dan subjective risk categories.
>
> Untuk CF4, core chapter ini terutama berada pada **§§9.1–9.2, 9.7–9.8, 9.11–9.13**, yang langsung mendukung [[3.3 Capital Budgeting and Cost of Capital]]. Sections lain tetap diringkas karena membangun component-cost mechanics dan membantu memahami WACC secara utuh.

---

## 1. Why This Chapter Exists

Perusahaan membutuhkan capital untuk:

- mengembangkan produk baru;
- membangun factories dan distribution centers;
- memasang information technology;
- berekspansi ke pasar baru;
- mengakuisisi perusahaan lain;
- mendanai working assets dan long-lived investments.

Namun capital tidak gratis. Investor yang menyediakan debt atau equity mengorbankan penggunaan uangnya sekarang dan menanggung risk. Sebagai gantinya mereka meminta return.

Maka setiap investment decision pada dasarnya memiliki dua sisi:

```text
Project / asset
      ↓
Expected future cash flows
      ↓
Expected return

versus

Capital providers
      ↓
Required return for risk
      ↓
Cost of capital
```

Project menciptakan value hanya jika economics-nya cukup kuat relatif terhadap required return yang sesuai.

Brigham menempatkan cost of capital sebagai penghubung antara **financing**, **risk**, **capital budgeting**, dan **valuation**.

Pada level firm:

$$
Value
=
\sum_{t=1}^{\infty}
\frac{FCF_t}{(1+WACC)^t}
$$

Jadi WACC bekerja sebagai discount rate yang menerjemahkan future free cash flow menjadi present value.

Chapter opening menggunakan GE sebagai warning: penggunaan satu uniform hurdle rate untuk businesses dengan risk berbeda dapat mendorong perusahaan terlalu banyak berinvestasi di risky businesses dan terlalu sedikit di safer businesses. Lesson chapter bukan hanya “cara menghitung WACC,” tetapi **cara memilih cost of capital yang sesuai dengan risk**.

> [!INFO] CF4 Connection
> `[CORE CF4]` Chapter ini terutama mendukung [[3.3 Capital Budgeting and Cost of Capital]]: memahami component costs, WACC, target capital structure, marginal cost of capital, serta risk-adjusted discount rate.

---

## 2. Chapter Map

```text
Chapter 9 — The Cost of Capital
├── 9.1 The Weighted Average Cost of Capital
├── 9.2 Basic Definitions
├── 9.3 Cost of Debt
│   ├── Marginal vs embedded debt cost
│   ├── After-tax debt cost
│   ├── Flotation costs
│   └── Short-term debt
├── 9.4 Cost of Preferred Stock
├── 9.5 Cost of Common Stock
├── 9.6 CAPM Approach
│   ├── Risk-free rate
│   ├── Market risk premium
│   └── Beta
├── 9.7 Dividend-Yield-Plus-Growth / DCF Approach
├── 9.8 Own-Bond-Yield-Plus-Judgmental-Risk-Premium
├── 9.9 Comparing Equity-Cost Methods
├── 9.10 External Equity and Flotation Costs
├── 9.11 Composite / Weighted Average Cost of Capital
├── 9.12 Factors That Affect WACC
├── 9.13 Adjusting the Cost of Capital for Risk
│   ├── Divisional cost of capital
│   ├── Pure-play beta
│   ├── Accounting beta
│   └── Project risk classes
├── 9.14 Privately Owned Firms and Small Businesses
└── 9.15 Four Mistakes to Avoid
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| §9.1 Weighted Average Cost of Capital | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.2 Basic Definitions | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.3 Cost of Debt | Supporting mechanics | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.4 Preferred Stock Cost | Supporting mechanics | [[3.3 Capital Budgeting and Cost of Capital]] |
| §§9.5–9.6 Common Equity & CAPM | Supporting bridge | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.7 DCF Cost of Equity | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.8 Bond-Yield-Plus-Risk-Premium | **High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.9 Comparing Methods | Supporting | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.10 External Equity / Flotation | Supporting | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.11 Composite WACC | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.12 Factors Affecting WACC | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §9.13 Risk Adjustment | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]] |
| §§9.14–9.15 Private Firms / Mistakes | Beyond direct CF4 scope, useful context | [[3.3 Capital Budgeting and Cost of Capital]] |

> [!NOTE] Scope Boundary
> Silabus CF4 secara eksplisit mencantumkan Brigham Chapter 9 **§§9.1–9.2, 9.7–9.8, dan 9.11–9.13**. Sections lain tetap dipertahankan dalam note ini karena user meminta condensed **full chapter**, tetapi depth-nya lebih rendah dan ditandai sebagai supporting/beyond-direct-scope.

---

## 3. 9.1 The Weighted Average Cost of Capital

### Intuisi

Jika perusahaan hanya dibiayai oleh common stock, cost of capital perusahaan pada dasarnya sama dengan required return common shareholders.

Tetapi perusahaan nyata biasanya dibiayai oleh beberapa sources:

- debt;
- preferred stock;
- common equity.

Karena claims dan risks setiap instrument berbeda, required return masing-masing juga berbeda.

Debt holders memiliki prior contractual claim, sehingga biasanya meminta return lebih rendah daripada residual common shareholders. Preferred stock berada di tengah. Common equity menanggung residual risk terbesar.

Maka tidak ada satu “cost” yang identik untuk seluruh sources.

### Component Cost

Brigham menyebut required rate of return pada masing-masing financing component sebagai **component cost**.

Contoh:

- debt → $r_d$;
- preferred stock → $r_{ps}$;
- common equity → $r_s$ atau $r_e$, tergantung source equity.

Perusahaan kemudian membentuk weighted average berdasarkan financing mix yang direncanakan.

### Investor-Supplied Capital

Salah satu point penting pada Figure 9-1 adalah bahwa WACC tidak memakai semua liabilities dalam balance sheet.

Brigham membedakan:

**Investor-supplied capital**

- interest-bearing debt;
- preferred stock;
- common equity.

versus

**Spontaneous operating liabilities**

- accounts payable;
- accruals.

Accounts payable dan accruals timbul terutama dari operating activities. Efeknya masuk ke operating cash flow / free cash flow, bukan diperlakukan sebagai capital component dalam WACC.

> [!WARNING] Important Distinction
> **Liability ≠ otomatis capital component.**
>
> Dalam framework chapter ini, WACC memfokuskan funds yang benar-benar disediakan oleh investors.

### Target Capital Structure

NCC menggunakan target:

- debt = 30%;
- preferred stock = 10%;
- common equity = 60%.

Brigham menekankan bahwa target weights adalah proportions yang management ingin gunakan ketika raising capital di masa depan.

Ini berbeda dari:

- historical book weights;
- current market weights;
- incidental current financing mix.

Karena WACC digunakan untuk future investment decisions, target structure sangat penting.

### Book vs Market vs Target Weights

Secara teori, market values lebih relevant daripada accounting book values karena cost of capital mencerminkan **current opportunity cost** bagi investor.

Namun Brigham juga mencatat bahwa:

- book values mudah tersedia;
- rating agencies dan analysts sering memperhatikan book-based ratios;
- market values dapat sangat volatile;
- management biasanya mempunyai target capital structure yang tidak harus sama persis dengan current market weights.

Dalam chapter ini, jika target weights tersedia, target tersebut menjadi basis utama.

### Why WACC?

Secara umum:

$$
WACC
=
w_d r_d(1-T)
+
w_{ps}r_{ps}
+
w_s r_s
$$

WACC adalah rata-rata yang mempertimbangkan:

1. berapa banyak setiap source dipakai;
2. berapa cost masing-masing source.

> [!INFO] CF4 Connection
> §9.1 adalah `[CORE CF4]`. Fokuskan pada:
> - component cost;
> - investor-supplied capital;
> - target capital structure;
> - market vs book logic;
> - WACC sebagai weighted required return.

---

## 4. 9.2 Basic Definitions

Section ini menyediakan language yang dipakai sepanjang chapter.

### $r_d$ — Before-Tax Cost of Debt

$$
r_d
=
\text{interest rate required on new debt}
$$

Brigham menekankan **new debt**, bukan average coupon rate dari debt lama.

Cost debt dapat diperkirakan antara lain dari:

- yield to maturity current outstanding debt;
- yield to call jika callable bonds kemungkinan dipanggil;
- yield comparable firms;
- investment banker estimate untuk new issue.

### $r_d(1-T)$ — After-Tax Cost of Debt

Karena interest deductibility dalam textbook framework:

$$
r_d(1-T)
$$

menjadi relevant debt component dalam WACC.

Di sini $T$ adalah marginal corporate tax rate yang relevant.

### $r_{ps}$ — Cost of Preferred Stock

$$
r_{ps}
=
\text{required return on preferred stock}
$$

Preferred dividends tidak memperoleh tax deduction yang sama dengan interest, sehingga tidak dikalikan $(1-T)$.

### $r_s$ — Cost of Internal Common Equity

$r_s$ adalah required return common shareholders ketika common equity berasal dari **retained earnings**.

Ini penting:

> retained earnings tetap memiliki cost.

Walaupun tidak ada explicit cash payment kepada shareholders ketika profit ditahan, shareholders mengorbankan kesempatan menerima cash dan menginvestasikannya di tempat lain.

### $r_e$ — Cost of External Common Equity

$r_e$ adalah cost common equity jika perusahaan harus menerbitkan new shares.

Karena issuance menimbulkan flotation costs, biasanya:

$$
r_e > r_s
$$

### Capital Weights

- $w_d$ = target debt weight;
- $w_{ps}$ = target preferred weight;
- $w_s$ = target internal common equity weight;
- $w_e$ = external equity weight jika relevant.

Total weights harus mencerminkan financing mix yang digunakan.

### WACC

$$
WACC
=
w_d r_d(1-T)
+
w_{ps}r_{ps}
+
w_s r_s
$$

Jika external equity dipakai, common-equity term dapat menggunakan cost yang sesuai dengan external issue.

> [!WARNING] Important Distinction
> **Retained earnings ≠ zero-cost capital.**
>
> Economic cost ditentukan oleh opportunity cost shareholders, bukan oleh apakah company menulis cheque saat memperoleh capital tersebut.

---

## 5. 9.3 Cost of Debt, $r_d(1-T)$

`[CF4 SUPPORTING CONTEXT — section tidak tercantum eksplisit dalam scope Chapter 9 CF4, tetapi mechanics-nya membantu memahami §9.11 WACC.]`

### Marginal Debt Cost

Brigham menolak penggunaan historical embedded rate untuk capital budgeting.

Suppose old bonds pernah diterbitkan dengan coupon 6%, tetapi investor saat ini meminta 9% untuk debt sejenis.

Untuk new investment:

$$
r_d \approx 9\%
$$

bukan 6%.

Reasoning-nya sederhana:

```text
New project
↓
requires new / marginal capital
↓
capital providers demand current market return
↓
current marginal cost is relevant
```

### Example — NCC Debt

NCC dapat menerbitkan 30-year straight bonds yang menurut investment bankers memerlukan sekitar 9%.

Existing bonds yang diperdagangkan pada market juga menghasilkan YTM sekitar 9%.

Karena dua approaches memberikan angka sama, Brigham menggunakan:

$$
r_d=9\%
$$

### After-Tax Debt Cost

Dengan textbook tax rate 40%:

$$
r_d(1-T)
=
9\%(1-0.40)
=
5.4\%
$$

Economic logic:

- investor tetap menerima contractual interest;
- tetapi company memperoleh tax saving dari deductibility;
- maka net corporate cost lebih rendah.

> [!WARNING] Important Distinction
> **Investor required return on debt ≠ after-tax corporate cost of debt.**
>
> Investor melihat $r_d$; perusahaan memasukkan $r_d(1-T)$ dalam WACC.

### Flotation Costs on Debt

Brigham menunjukkan bahwa debt flotation costs sering cukup kecil sehingga analysts mengabaikannya.

Jika flotation cost material, net proceeds berkurang sehingga effective financing cost meningkat.

General relationship:

```text
Same promised debt cash flows
÷
lower net cash received
=
higher financing cost
```

### Short-Term Debt

Short-term debt biasanya tidak dimasukkan jika hanya digunakan secara seasonal dan tidak menjadi permanent financing source.

Namun jika firm secara sistematis menggunakan short-term debt sebagai permanent financing component, debt tersebut seharusnya masuk dalam WACC.

---

## 6. 9.4 Cost of Preferred Stock, $r_{ps}$

`[CF4 SUPPORTING CONTEXT]`

Preferred stock biasanya memberikan fixed dividend tetapi preferred dividend **tidak tax deductible** dalam chapter framework.

Untuk perpetual preferred:

$$
r_{ps}
=
\frac{D_{ps}}{P_{ps}(1-F)}
$$

dengan:

- $D_{ps}$ = annual preferred dividend;
- $P_{ps}$ = issue price;
- $F$ = flotation cost as proportion.

### Example — NCC Preferred

NCC preferred pays:

$$
D_{ps}=\$8
$$

Market price:

$$
P_{ps}=\$100
$$

Flotation cost:

$$
F=2.5\%
$$

Net proceeds:

$$
100(1-0.025)=97.50
$$

Cost:

$$
r_{ps}
=
\frac{8}{97.50}
\approx 8.2\%
$$

Without flotation adjustment, estimate would be 8%, understating actual cost.

> [!WARNING] Important Distinction
> **Preferred stock is not debt for WACC tax purposes.**
>
> Preferred dividend tidak memperoleh tax shield seperti interest dalam framework ini.

---

## 7. 9.5 Cost of Common Stock

`[CF4 SUPPORTING CONTEXT]`

Common equity dapat berasal dari:

1. **retained earnings** → cost $r_s$;
2. **new common stock** → cost $r_e$.

### Why Retained Earnings Have a Cost

Misalkan company memiliki $1 profit per share yang dapat:

- dibagikan sebagai dividend, sehingga shareholder menginvestasikannya sendiri; atau
- ditahan perusahaan dan diinvestasikan kembali.

Jika perusahaan menahan profit, investor hanya bersedia jika expected return pada retained money setidaknya sebanding dengan required return mereka.

Jadi $r_s$ adalah opportunity cost.

### Estimating $r_s$

Brigham membahas tiga practical methods:

1. CAPM;
2. DCF / dividend yield plus growth;
3. own-bond-yield plus judgmental risk premium.

Tidak satu pun merupakan perfect measurement.

---

## 8. 9.6 CAPM Approach

`[CF4 SUPPORTING BRIDGE]`

CAPM estimate:

$$
r_s
=
r_{RF}
+
\beta (RP_M)
$$

dengan:

$$
RP_M
=
r_M-r_{RF}
$$

### Intuisi

Shareholders diversified tidak meminta compensation untuk seluruh variability company-specific.

Yang penting adalah exposure terhadap market-wide risk.

Beta mengukur sensitivity terhadap market movements, lalu market risk premium mengubah beta menjadi required compensation.

### Risk-Free Rate

Brigham discusses whether to use short-term T-bill or longer-term Treasury rate.

Untuk long-lived corporate assets, longer-term government bond yield biasanya lebih consistent dengan investment horizon daripada short-term bill.

### Market Risk Premium

Brigham membahas dua broad approaches:

**Historical**

$$
RP_M
=
\text{historical stock return}
-
\text{historical bond return}
$$

**Forward-looking**

$$
RP_M
=
\text{expected future market return}
-
\text{current risk-free rate}
$$

Yang tidak boleh dilakukan adalah mencampur historical stock return dengan current bond yield tanpa conceptual consistency.

### Beta Estimation

Beta dapat diestimasi dari historical stock returns, tetapi estimate mengandung uncertainty karena:

- sample period;
- frequency data;
- structural changes in firm;
- financial leverage;
- changing business mix.

### Example — NCC CAPM

Assume:

$$
r_{RF}=5\%
$$

$$
RP_M=5.5\%
$$

$$
\beta=1.2
$$

Then:

$$
r_s
=
5\%+1.2(5.5\%)
$$

$$
r_s
=
11.6\%
$$

Brigham menekankan bahwa output terlihat precise, tetapi inputs themselves are estimates. CAPM tetap widely used karena memberikan disciplined risk-return framework.

---

## 9. 9.7 Dividend-Yield-Plus-Growth-Rate, or DCF, Approach

`[CORE CF4]`

### Starting Point

Untuk constant-growth dividend model:

$$
P_0
=
\frac{D_1}{r_s-g}
$$

Solve for $r_s$:

$$
r_s
=
\frac{D_1}{P_0}
+
g
$$

Interpretation:

$$
\text{Expected return}
=
\text{Dividend yield}
+
\text{Expected capital gain yield}
$$

### Why This Estimates Cost of Equity

Dalam equilibrium, marginal investor’s:

$$
\text{expected return}
=
\text{required return}
$$

Maka expected shareholder return juga merupakan company’s cost of retained common equity.

### Example — NCC DCF

NCC:

- current stock price $P_0=\$32$;
- expected next dividend $D_1=\$1.82$;
- expected growth $g=5.5\%$.

Then:

$$
r_s
=
\frac{1.82}{32}
+
5.5\%
$$

$$
r_s
=
5.7\%+5.5\%
=
11.2\%
$$

### Growth Estimation

The difficulty in DCF is not usually current price or next dividend. The major uncertainty is **expected growth $g$**.

Brigham discusses three methods:

1. historical growth;
2. retention growth model;
3. analysts’ forecasts.

#### Historical Growth

Assumption:

> future growth resembles past growth.

Weakness:

- business conditions change;
- payout changes;
- profitability changes;
- past growth may be unusual.

#### Retention Growth

Conceptually, sustainable growth is linked to:

- fraction earnings retained;
- return earned on retained capital.

The logic is useful, but it assumes key historical relationships continue.

#### Analysts’ Forecasts

Brigham judges analysts’ expected growth forecasts as the most logical primary source because cost of equity depends on **investor expectations**, not merely historical accounting outcomes.

### What DCF Is Really Saying

The model decomposes required return into:

```text
Cash yield received now/soon
+
expected growth in future cash distributions/value
```

> [!WARNING] Important Distinction
> Formula uses **$D_1$**, not automatically the last dividend $D_0$.
>
> If given $D_0$ and growth $g$:
>
> $$
> D_1=D_0(1+g)
> $$

### Limits

DCF is most natural when:

- dividends are meaningful;
- constant-growth assumption is reasonable;
- stock is near equilibrium;
- expected growth can be estimated.

A high-growth company with irregular/no dividends may be poorly suited to this method.

---

## 10. 9.8 Own-Bond-Yield-Plus-Judgmental-Risk-Premium Approach

`[CORE CF4]`

Brigham introduces a practical heuristic:

$$
r_s
=
\text{company's own long-term bond yield}
+
\text{judgmental risk premium}
$$

Typical textbook risk premium range:

$$
3\%\text{ to }5\%
$$

### Intuisi

Debt and equity of the same firm are exposed to some common business conditions.

If a firm is risky:

- bondholders demand higher yield;
- shareholders also demand higher return.

Because common equity is riskier than debt, analysts add an equity premium over the firm’s bond yield.

### Example — NCC

NCC bond yield:

$$
9\%
$$

Judgmental risk premium:

$$
3\%
$$

Then:

$$
r_s
=
9\%+3\%
=
12\%
$$

### Strength

- simple;
- based on observable firm-specific bond yield;
- useful cross-check.

### Weakness

The risk premium is subjective.

Hence:

> this method gives a plausible **ballpark**, not a theoretically exact answer.

Brigham’s broader point is important: CAPM and DCF also contain substantial judgment, even if their formulas look more formal.

---

## 11. 9.9 Comparing the CAPM, DCF, and Bond-Yield Methods

`[CF4 SUPPORTING CONTEXT]`

For NCC:

| Method | Estimated $r_s$ |
|---|---:|
| CAPM | 11.6% |
| DCF | 11.2% |
| Own-bond-yield + premium | 12.0% |

Average:

$$
\frac{11.6\%+11.2\%+12.0\%}{3}
=
11.6\%
$$

In NCC case, estimates cluster closely.

In real situations they may differ materially.

Brigham does **not** prescribe a mechanical rule that one should always average all methods. Instead:

- assess quality of inputs;
- consider model appropriateness;
- use judgment;
- seek a reasonable estimate.

Surveys cited by the textbook indicate CAPM is the most widely used approach.

> [!IMPORTANT] Important Distinction
> **Multiple precise-looking formulas do not eliminate estimation risk.**
>
> Cost of equity is fundamentally an estimate of investors’ required return.

---

## 12. 9.10 Adjusting the Cost of Equity for Flotation Costs

`[CF4 SUPPORTING CONTEXT]`

If company uses retained earnings:

$$
r_s
=
\frac{D_1}{P_0}+g
$$

If it must issue new common stock and pay flotation cost $F$:

$$
r_e
=
\frac{D_1}{P_0(1-F)}
+
g
$$

Because net proceeds are less than market price:

$$
P_0(1-F)<P_0
$$

so:

$$
r_e>r_s
$$

### Example — NCC External Equity

Use:

- $D_1=1.82$;
- $P_0=32$;
- $g=5.5\%$;
- $F=12.5\%$.

Net proceeds:

$$
32(1-0.125)=28
$$

Thus:

$$
r_e
=
\frac{1.82}{28}
+
5.5\%
$$

$$
r_e
=
6.5\%+5.5\%
=
12.0\%
$$

Without flotation cost DCF estimate was 11.2%.

The company must therefore earn more on each **net dollar received** so that investors can still receive their required return.

### Why Equity Flotation Cost Is Often Higher

Brigham notes two broad reasons:

1. debt cash flows are more contractual/predictable, making issues easier to sell;
2. corporate debt is often placed in large blocks with institutions, whereas common stock distribution may involve broader selling efforts.

---

## 13. 9.11 Composite, or Weighted Average, Cost of Capital

`[CORE CF4]`

### Central Formula

$$
WACC
=
w_d r_d(1-T)
+
w_{ps}r_{ps}
+
w_s r_s
$$

### Example — NCC

Target structure:

$$
w_d=0.30
$$

$$
w_{ps}=0.10
$$

$$
w_s=0.60
$$

Component costs:

$$
r_d=9.0\%
$$

$$
r_{ps}=8.2\%
$$

$$
r_s=11.6\%
$$

Tax rate:

$$
T=40\%
$$

Then:

$$
WACC
=
0.30(9.0\%)(1-0.40)
+
0.10(8.2\%)
+
0.60(11.6\%)
$$

Debt contribution:

$$
0.30(5.4\%)=1.62\%
$$

Preferred contribution:

$$
0.10(8.2\%)=0.82\%
$$

Equity contribution:

$$
0.60(11.6\%)=6.96\%
$$

Thus:

$$
\boxed{WACC=9.40\%}
$$

### Three Major Interpretations

#### 1. WACC Is a Marginal Cost

Brigham explicitly emphasizes:

> WACC adalah cost dari **new/marginal dollar of capital**, bukan average historical cost dari capital lama.

Capital budgeting concerns future assets, so current marginal financing costs are relevant.

#### 2. WACC Is a Weighted Average

Individual investors supply different claims.

WACC combines their required returns according to target financing proportions.

#### 3. WACC Is a Hurdle Rate Only for Comparable Risk

A 9.4% company WACC does **not** mean every project with expected return >9.4% should automatically be accepted.

That conclusion only holds when project risk is similar to the risk reflected in company WACC.

### Target vs Current Weights

Brigham discusses the practical tension:

**Book values**

- stable;
- accounting-based;
- potentially far from economic value.

**Market values**

- theoretically attractive;
- reflect current investor valuation;
- may fluctuate materially.

**Target weights**

- reflect management’s intended long-run financing policy;
- used in chapter as primary basis.

During unusual market conditions, current market weights may be distorted relative to intended sustainable financing mix. This is one reason firms establish target structures using judgment, peer comparison, stress testing, and long-run strategy.

### Economic Meaning of WACC

Suppose WACC = 9.4%.

This does **not** mean each source costs 9.4%.

Rather:

```text
Debt investors require one return
Preferred investors require another
Common shareholders require another
        ↓
weighted by target capital mix
        ↓
overall required return ≈ 9.4%
```

For average-risk firm assets, earning below this benchmark tends to reduce value, while earning above it can create value, subject to correct cash-flow and risk assumptions.

> [!INFO] CF4 Connection
> §9.11 is one of the most important sections for [[3.3 Capital Budgeting and Cost of Capital]]. Understand both formula and **economic interpretation**.

---

## 14. 9.12 Factors That Affect the WACC

`[CORE CF4]`

Brigham divides determinants into factors the firm **cannot control** and factors it **can control**.

---

### 14.1 Three Factors the Firm Cannot Control

#### A. Financial Market Conditions

Market interest rates and stock-market conditions affect required returns.

If general interest rates rise:

- new debt becomes more expensive;
- risk-free component in equity required return may rise;
- WACC tends to rise, all else equal.

If market valuations fall sharply, equity financing conditions can also deteriorate.

#### B. Market Risk Aversion / Market Risk Premium

If investors become more risk averse:

$$
RP_M \uparrow
$$

Under CAPM:

$$
r_s
=
r_{RF}+\beta RP_M
$$

therefore cost of equity rises.

Depending on credit markets, debt spreads may also rise.

#### C. Tax Rates

Tax rates affect after-tax cost of debt:

$$
r_d(1-T)
$$

Higher $T$, holding all else equal, makes interest tax shield larger and lowers after-tax debt cost.

Brigham also notes that relative taxation of interest, dividends, and capital gains can influence broader financing choices.

> [!CAUTION] Textbook Context
> Specific U.S. tax rates and laws in this edition are period-specific. For CF4, retain the **relationship**, not outdated statutory numbers as universal current rules.

---

### 14.2 Three Factors the Firm Can Control

#### A. Capital Structure Policy

Company chooses its target mix of debt and equity.

Increasing debt initially gives more weight to a lower after-tax-cost source.

However, greater leverage also:

- raises debt risk;
- raises required debt yield;
- raises equity risk;
- raises required equity return.

Therefore, capital structure affects WACC through both **weights** and **component costs**.

Brigham later develops the idea that the optimal capital structure minimizes WACC and maximizes intrinsic value.

#### B. Dividend Policy

If company distributes too much earnings and cannot fund equity needs internally, it may have to issue new stock.

Because:

$$
r_e>r_s
$$

when flotation costs are material, payout policy can affect marginal WACC.

In addition, Brigham notes that dividend policy can influence required return through investor preferences and information effects, explored later in the book.

#### C. Investment Policy

This is especially important.

The costs estimated from existing debt and stock reflect risk of the firm’s **existing assets**.

If new projects have similar risk, company WACC can be reasonable.

If company enters a dramatically different business:

```text
different operating risk
↓
different investor-required return
↓
different cost of capital
```

The chapter’s GE story illustrates this problem. Expansion into financial/mortgage activities materially changed risk; a uniform hurdle rate failed to reflect it adequately.

### Synthesis

```text
External environment
├── market interest rates
├── market risk aversion
└── tax rates
        ↓
component costs

Management policy
├── capital structure
├── dividend policy
└── investment policy
        ↓
weights + risks + component costs
        ↓
WACC
```

---

## 15. 9.13 Adjusting the Cost of Capital for Risk

`[CORE CF4]`

This is the conceptual climax of the chapter.

### The Problem with One Corporate WACC

Company WACC reflects:

- average business risk of existing assets;
- overall target capital structure.

Suppose corporate WACC = 12%.

Firm has:

- a bakery division with relatively low risk and proper cost = 8%;
- a café/tech-like division with higher risk and proper cost = 16%.

If management uses 12% for both:

```text
Low-risk project returning 10%
True required return = 8%
→ creates value
But corporate hurdle = 12%
→ rejected incorrectly

High-risk project returning 14%
True required return = 16%
→ destroys value
But corporate hurdle = 12%
→ accepted incorrectly
```

Using one rate can therefore systematically cause:

- **underinvestment in low-risk assets**;
- **overinvestment in high-risk assets**.

> [!WARNING] Important Distinction
> **Corporate WACC is not a universal discount rate.**
>
> The correct rate must match the risk of the cash flows being discounted.

---

### 15.1 Divisional Cost of Capital with CAPM

Brigham illustrates Huron Steel.

Initial steel business:

$$
\beta=1.1
$$

$$
r_{RF}=5\%
$$

$$
RP_M=6\%
$$

Thus:

$$
r_{Steel}
=
5\%+1.1(6\%)
=
11.6\%
$$

Suppose Huron creates a barge transportation division with:

$$
\beta=1.5
$$

Then:

$$
r_{Barge}
=
5\%+1.5(6\%)
=
14.0\%
$$

Suppose a distribution center has:

$$
\beta=0.5
$$

Then:

$$
r_{Center}
=
5\%+0.5(6\%)
=
8.0\%
$$

Each business should be evaluated against its own required return.

### Portfolio View of the Firm

A firm can be understood as a portfolio of operating assets/divisions.

If Huron’s value composition becomes:

- steel 70%;
- barges 20%;
- distribution center 10%,

then overall beta:

$$
\beta_{firm}
=
0.70(1.1)+0.20(1.5)+0.10(0.5)
$$

$$
\beta_{firm}=1.12
$$

Corporate required return:

$$
r_{firm}
=
5\%+1.12(6\%)
=
11.72\%
$$

But that 11.72% is only the **portfolio average**.

It does not erase the fact that:

- steel needs 11.6%;
- barge needs 14%;
- distribution center needs 8%.

---

### 15.2 Estimating Divisional Betas

Divisions do not usually have publicly traded shares, so their betas cannot be observed directly.

Brigham presents two approaches.

#### Pure Play Method

Find publicly traded firms whose operations are concentrated in the same business as the division.

Then:

1. collect their betas;
2. assess comparability;
3. average/use representative beta;
4. use beta to estimate divisional cost of capital.

For example, Huron can use specialized barge operators to estimate risk of its barge division.

> [!NOTE]
> If comparable companies have materially different leverage, beta comparison may require capital-structure adjustment. Detailed mechanics are developed elsewhere in the textbook.

#### Accounting Beta Method

If suitable pure plays do not exist, company may regress divisional **accounting returns** against broad market/company accounting returns.

The resulting accounting beta tries to infer economic co-movement from accounting data rather than stock returns.

This method is less direct and may be noisy, but provides an alternative when market-based divisional beta is unavailable.

---

### 15.3 Three Types of Project Risk

Brigham distinguishes:

#### 1. Stand-Alone Risk

Variability of project’s expected returns considered by itself.

Question:

> “How uncertain is this project if I ignore everything else the company owns?”

#### 2. Corporate / Within-Firm Risk

Contribution of project to variability of total company returns.

Diversification within the firm can offset some project-specific uncertainty.

Question:

> “How much does this project change the risk of the company as a portfolio of assets?”

#### 3. Market / Beta Risk

Contribution of project to risk faced by a well-diversified shareholder.

Question:

> “How strongly does the project’s outcome co-move with market-wide economic risk?”

### Which Is Theoretically Most Relevant?

Brigham states that **market/beta risk** is theoretically most relevant because diversified shareholders can eliminate much firm-specific risk and stock prices respond to systematic risk.

However, project beta is difficult to measure.

Therefore practice often considers all three forms of risk.

---

### 15.4 Subjective Risk Categories

Firms may first estimate divisional WACC, then place projects into categories:

- low risk;
- average risk;
- high risk.

Example:

Division WACC:

$$
10\%
$$

Management might use:

| Project Risk | Discount Rate |
|---|---:|
| Low | 8% |
| Average | 10% |
| High | 12% |

The exact adjustment is subjective.

Brigham’s point is not that “±2%” is universally correct.

The point is:

> **a rough risk adjustment is generally better than pretending all projects have identical risk.**

### Project Risk and Value

Higher risk:

$$
\Rightarrow
\text{higher required return}
$$

Higher discount rate:

$$
\Rightarrow
\text{lower PV of same expected cash flows}
$$

Thus incorrect risk adjustment can reverse capital-budgeting decisions.

> [!INFO] CF4 Connection
> §9.13 directly supports the CF4 requirement to calculate and apply cost of capital intelligently. The exam-relevant insight is not just formula recognition but **matching discount rate to project/divisional risk**.

---

## 16. 9.14 Privately Owned Firms and Small Businesses

`[BEYOND DIRECT CF4 SCOPE]`

Public companies provide observable:

- stock price;
- stock returns;
- equity beta;
- market capitalization.

Private firms do not.

Brigham suggests a practical approach:

1. identify comparable publicly traded firms;
2. estimate their betas;
3. use comparable beta as proxy;
4. estimate private-firm cost of equity via CAPM.

This resembles the pure-play method.

### Liquidity Premium

Private shares are less liquid.

Brigham notes that practitioners may add an ad hoc liquidity premium to cost of equity.

The exact amount is difficult to determine theoretically.

### Circularity of WACC and Private-Firm Value

Private firm market equity value is not directly observable.

But WACC weights depend on estimated market values.

So analysts may use iteration:

```text
Guess equity value
↓
estimate weights
↓
estimate WACC
↓
value firm
↓
derive equity value
↓
compare with initial guess
↓
repeat until convergence
```

Useful context, but not a core CF4 Chapter 9 section.

---

## 17. 9.15 Four Mistakes to Avoid

`[BEYOND DIRECT CF4 SCOPE, but highly useful review]`

Brigham closes with four recurring errors.

### Mistake 1 — Use Coupon Rate on Existing Debt

Wrong:

> “Old bond coupon is 6%, therefore cost of debt is 6%.”

Correct:

> Use current marginal rate the firm would pay on **new debt today**.

### Mistake 2 — Mix Historical Stock Return with Current Bond Yield

Historical risk premium should use consistent historical components.

Forward-looking risk premium should use forward-looking expected market return and current appropriate risk-free rate.

Do not create a hybrid estimate with incompatible periods.

### Mistake 3 — Automatically Use Book-Value Weights

Preferred hierarchy in chapter logic:

```text
Target capital structure
↓ if unavailable
Market-value weights
↓ with practical adjustments where needed
Book value only when economically reasonable
```

Equity book value can differ dramatically from market value.

### Mistake 4 — Treat Non-Investor Operating Liabilities as Capital

Accounts payable and accruals arise from operations.

They affect:

- working capital;
- project cash flows;
- free cash flow.

But they are not investor-provided WACC components in this framework.

> [!SUMMARY] Brigham's Four Mistakes in One Line
> **Use current marginal costs, consistent market-risk inputs, target/market weights, and only investor-supplied capital.**

---

## 18. Integrated Example — From Component Costs to WACC

Consider a simplified firm with target capital structure:

- debt 30%;
- preferred 10%;
- common equity 60%.

Suppose:

$$
r_d=9\%
$$

$$
T=40\%
$$

$$
r_{ps}=8.2\%
$$

$$
r_s=11.6\%
$$

### Step 1 — After-Tax Debt Cost

$$
r_d(1-T)
=
9\%(1-0.40)
=
5.4\%
$$

### Step 2 — Weighted Debt Cost

$$
0.30(5.4\%)=1.62\%
$$

### Step 3 — Weighted Preferred Cost

$$
0.10(8.2\%)=0.82\%
$$

### Step 4 — Weighted Equity Cost

$$
0.60(11.6\%)=6.96\%
$$

### Step 5 — WACC

$$
WACC
=
1.62\%+0.82\%+6.96\%
$$

$$
\boxed{WACC=9.40\%}
$$

### Meaning

For assets with risk comparable to the firm’s existing average risk:

- investors collectively require around 9.4%;
- projects expected to earn below this level tend to reduce value;
- projects above it may create value.

But this statement becomes wrong if project risk differs materially from average firm risk.

---

## 19. Integrated Example — Same Firm, Different Project Risks

Suppose company WACC is 10%.

The company considers three projects:

| Project | Risk | Proper Cost of Capital | Expected Return |
|---|---|---:|---:|
| A | Low | 8% | 9% |
| B | Average | 10% | 11% |
| C | High | 13% | 11.5% |

If manager mechanically uses 10%:

- A appears unattractive because 9% < 10%;
- B appears attractive because 11% > 10%;
- C appears attractive because 11.5% > 10%.

But risk-adjusted decision:

**A**

$$
9\%>8\%
$$

→ economically attractive.

**B**

$$
11\%>10\%
$$

→ economically attractive.

**C**

$$
11.5\%<13\%
$$

→ economically unattractive.

Thus one corporate hurdle incorrectly rejects A and accepts C.

This is exactly the structural bias Brigham warns about.

---

## 20. Important Distinctions

> [!WARNING] Important Distinction
> **Cost of debt ≠ coupon rate on old debt**
>
> Cost of debt for capital budgeting is current marginal required return.

> [!WARNING] Important Distinction
> **Before-tax debt cost ≠ WACC debt component**
>
> In this textbook framework:
>
> $$
> \text{WACC debt component}
> =
> r_d(1-T)
> $$

> [!WARNING] Important Distinction
> **Retained earnings ≠ free capital**
>
> Retained earnings have opportunity cost equal to common shareholders’ required return.

> [!WARNING] Important Distinction
> **$r_s$ ≠ $r_e$**
>
> $r_s$ = internal common equity cost.  
> $r_e$ = external common equity cost including issuance/friction effects.

> [!WARNING] Important Distinction
> **Book weight ≠ market weight ≠ target weight**
>
> They answer different questions. For forward-looking WACC, Brigham emphasizes target structure; market values are generally more economically meaningful than historical book values when target is unknown.

> [!WARNING] Important Distinction
> **Firm WACC ≠ project WACC**
>
> Same only when project risk and financing assumptions are sufficiently comparable to firm average.

> [!WARNING] Important Distinction
> **Stand-alone risk ≠ corporate risk ≠ market risk**
>
> Stand-alone asks project variability by itself.  
> Corporate asks contribution to firm variability.  
> Market asks contribution to diversified shareholder risk.

---

## 21. Figure/Table — Corporate Valuation and the Cost of Capital

The chapter’s opening valuation diagram connects several layers:

```text
Market interest rates
Market risk aversion
Firm business risk
Firm debt/equity mix
        ↓
Cost of debt + Cost of equity
        ↓
WACC
        ↓
Discount expected free cash flow
        ↓
Intrinsic value
```

At the same time:

```text
Operating profit after tax
-
required investment in operating capital
=
Free cash flow
```

Then:

$$
Value
=
PV(\text{future FCF at WACC})
$$

The figure’s main lesson is that value can change from either side:

1. **cash-flow side** — operating performance/investment changes FCF;
2. **discount-rate side** — markets, risk, and financing change WACC.

---

## 22. Chapter Synthesis

Jika Chapter 9 harus dipahami sebagai satu cerita, ceritanya adalah:

> **Capital has an opportunity cost, and a company creates value only when the return generated by its assets is sufficient relative to the risk-adjusted return required by the investors who finance those assets.**

Perusahaan memperoleh capital dari creditors, preferred shareholders, dan common shareholders. Masing-masing meminta return berbeda karena claims dan risks berbeda.

Debt memiliki contractual priority dan interest tax benefit dalam textbook framework, sehingga corporate after-tax debt cost lebih rendah daripada investor’s pre-tax required yield. Preferred stock mempunyai fixed-like distribution tetapi tidak mendapat debt-style corporate interest tax shield. Common shareholders adalah residual claimants dan karena itu biasanya meminta return tertinggi.

Cost common equity tidak terlihat langsung. CAPM menghubungkannya dengan systematic risk melalui beta. DCF menghubungkannya dengan dividend yield dan expected growth. Own-bond-yield approach menggunakan observable debt yield plus judgmental equity premium. Ketiganya mencoba mengestimasi hal yang sama: **required return of marginal common investor**.

Setelah component costs diperoleh, firm menggunakan target capital weights untuk membentuk WACC. WACC adalah weighted marginal financing cost dan sekaligus average required return pada assets yang memiliki risk sebanding dengan current firm.

Tetapi corporate WACC bukan universal hurdle rate.

Perusahaan adalah portfolio of divisions dan projects. Jika project risk berbeda, required return juga harus berbeda. Brigham membedakan stand-alone, corporate, dan market risk, lalu menyarankan divisional beta, pure-play comparables, accounting beta, dan risk classes sebagai practical tools.

Dengan demikian chapter bergerak melalui chain:

```text
Investors
↓
Required return by security
↓
Component cost
↓
Target capital structure
↓
WACC
↓
Match rate to asset/project risk
↓
Discount cash flows
↓
Investment decision
↓
Firm value
```

Kegagalan di salah satu step dapat menghasilkan keputusan salah meskipun arithmetic-nya benar.

---

## 23. Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Cost of capital | Return required by capital providers | Benchmark untuk investment/valuation | [[3.3 Capital Budgeting and Cost of Capital]] |
| Component cost | Required return per financing source | Building block WACC | [[3.3 Capital Budgeting and Cost of Capital]] |
| Marginal cost | Cost of raising new capital now | Relevant for future projects | [[3.3 Capital Budgeting and Cost of Capital]] |
| Target capital structure | Intended debt/preferred/equity mix | Determines WACC weights | [[3.3 Capital Budgeting and Cost of Capital]] |
| After-tax debt cost | $r_d(1-T)$ | Reflects interest tax shield | [[3.3 Capital Budgeting and Cost of Capital]] |
| Cost of preferred | Required return on preferred | WACC component without debt tax adjustment | [[3.3 Capital Budgeting and Cost of Capital]] |
| Cost of retained equity | $r_s$ | Retained earnings have opportunity cost | [[3.3 Capital Budgeting and Cost of Capital]] |
| Cost of external equity | $r_e$ | New share issuance can raise financing cost | [[3.3 Capital Budgeting and Cost of Capital]] |
| CAPM cost of equity | $r_{RF}+\beta RP_M$ | Risk-based equity return estimate | [[3.3 Capital Budgeting and Cost of Capital]] |
| DCF cost of equity | $D_1/P_0+g$ | Yield + expected growth | [[3.3 Capital Budgeting and Cost of Capital]] |
| Bond-yield-plus-premium | Bond yield + judgmental equity premium | Practical cross-check | [[3.3 Capital Budgeting and Cost of Capital]] |
| WACC | Weighted marginal component costs | Firm-average discount rate | [[3.3 Capital Budgeting and Cost of Capital]] |
| Stand-alone risk | Project return variability alone | First project-risk view | [[3.3 Capital Budgeting and Cost of Capital]] |
| Corporate risk | Project contribution to firm variability | Captures within-firm diversification | [[3.3 Capital Budgeting and Cost of Capital]] |
| Market risk | Project contribution to diversified shareholder risk | Theoretically most relevant | [[3.3 Capital Budgeting and Cost of Capital]] |
| Pure-play beta | Beta from comparable focused public firms | Estimates divisional/project risk | [[3.3 Capital Budgeting and Cost of Capital]] |
| Risk-adjusted cost of capital | Required return matched to specific risk | Prevents bad capital allocation | [[3.3 Capital Budgeting and Cost of Capital]] |

---

## 24. Formula Sheet from the Chapter

### Weighted Average Cost of Capital

$$
\boxed{
WACC
=
w_d r_d(1-T)
+
w_{ps}r_{ps}
+
w_s r_s
}
$$

### After-Tax Cost of Debt

$$
\boxed{
r_d(1-T)
}
$$

### Perpetual Preferred Cost

$$
\boxed{
r_{ps}
=
\frac{D_{ps}}{P_{ps}(1-F)}
}
$$

### CAPM Cost of Common Equity

$$
\boxed{
r_s
=
r_{RF}
+
\beta(RP_M)
}
$$

where:

$$
RP_M=r_M-r_{RF}
$$

### DCF / Dividend-Yield-Plus-Growth Cost

$$
\boxed{
r_s
=
\frac{D_1}{P_0}+g
}
$$

### Own-Bond-Yield-Plus-Judgmental-Risk-Premium

$$
\boxed{
r_s
=
\text{Bond Yield}
+
\text{Judgmental Equity Risk Premium}
}
$$

### External Common Equity with Flotation Cost

$$
\boxed{
r_e
=
\frac{D_1}{P_0(1-F)}
+
g
}
$$

---

## 25. Compression Notes

### Retained in Detail

- conceptual purpose of cost of capital;
- WACC as weighted component cost;
- investor-supplied capital vs operating liabilities;
- target capital structure;
- book vs market vs target weights;
- marginal vs historical cost;
- basic definitions;
- CAPM logic and NCC illustration;
- DCF cost-of-equity mechanics;
- growth-estimation issue;
- own-bond-yield-plus-premium method;
- NCC composite WACC calculation;
- controllable vs uncontrollable WACC factors;
- risk adjustment;
- divisional costs of capital;
- Huron Steel example;
- pure-play and accounting beta;
- stand-alone, corporate, and market risk;
- project risk classes;
- four cost-of-capital mistakes.

### Condensed

- long GE opening narrative;
- repeated self-test questions;
- extended discussions of estimating risk-free rate and market premium;
- detailed debt flotation calculations;
- preferred-stock institutional tax discussion;
- repeated empirical survey commentary;
- long flotation-cost tables;
- private-firm iterative valuation details;
- repeated end-of-section examples that teach the same mechanics.

### Omitted / Beyond CF4

- textbook website/tool-kit instructions;
- URLs and spreadsheet navigation;
- full end-of-chapter question/problem sets;
- historical flotation-cost table values except conceptual conclusion;
- extensive citation footnotes;
- U.S.-specific statutory tax percentages as current rules;
- detailed private-company liquidity-premium rules of thumb;
- sections beyond Chapter 9;
- duplicated calculations already represented by the central examples.

---

## 26. CF4 Connection Map

```text
Capital Providers
├── Debt
├── Preferred Stock
└── Common Equity
        ↓
Required Returns / Component Costs
        ↓
Target Capital Structure
        ↓
WACC
        ↓
[[3.3 Capital Budgeting and Cost of Capital]]
        ↓
Is project risk equal to firm average?
        ↓
   Yes        No
    ↓          ↓
Use firm    Estimate divisional /
WACC        project-specific rate
               ↓
        Stand-alone risk
        Corporate risk
        Market / beta risk
               ↓
        Risk-adjusted cost
               ↓
      Capital Budgeting Decision
```

---

## 27. Quick Reading Review

- Cost of capital adalah **required return investor** dilihat dari sisi perusahaan sebagai financing cost.
- Firm biasanya memiliki beberapa component costs karena memakai debt, preferred, dan common equity.
- WACC hanya memasukkan **investor-supplied capital**, bukan otomatis semua liabilities.
- Target capital structure adalah basis utama WACC dalam chapter.
- Current marginal financing cost lebih relevant daripada historical embedded cost.
- Debt masuk WACC menggunakan $r_d(1-T)$ dalam textbook tax framework.
- Retained earnings tetap mempunyai cost sebesar required return common shareholders.
- CAPM: $r_s=r_{RF}+\beta RP_M$.
- DCF: $r_s=D_1/P_0+g$.
- Own-bond-yield approach: bond yield + judgmental equity premium.
- Different equity-cost models adalah estimates; apparent numerical precision tidak berarti certainty.
- External equity biasanya lebih costly daripada retained equity karena flotation costs.
- NCC example menghasilkan WACC sekitar 9.4% dari 30% debt, 10% preferred, dan 60% common equity.
- WACC adalah marginal weighted cost, bukan average historical financing rate.
- Market conditions, risk aversion, dan tax rates berada di luar direct firm control.
- Capital structure, dividend policy, dan investment policy dapat dipengaruhi oleh management.
- Corporate WACC tepat hanya untuk assets/projects dengan risk kira-kira sama dengan firm average.
- Stand-alone risk melihat project sendiri; corporate risk melihat contribution ke firm; market risk melihat contribution ke diversified shareholder risk.
- Market/beta risk secara teori paling relevant, tetapi paling sulit diestimasi untuk project.
- Pure-play method memakai betas comparable focused firms untuk estimate divisional beta.
- Risky division/project harus memakai higher cost of capital; safer project lower cost.
- Uniform company hurdle rate dapat menyebabkan **reject good low-risk projects** dan **accept bad high-risk projects**.
- Empat error Brigham: old coupon rate, inconsistent market-risk-premium inputs, wrong book weights, dan memasukkan non-investor operating liabilities sebagai capital.

---

## 28. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose, GE hurdle-rate lesson, valuation connection | Chapter 9 opening |
| WACC concept, investor-supplied capital, target weights | §9.1 |
| Definitions $r_d$, $r_{ps}$, $r_s$, $r_e$, weights, WACC | §9.2 |
| Marginal/after-tax debt cost and debt flotation context | §9.3 |
| Preferred-stock component cost | §9.4 |
| Internal common equity and opportunity cost | §9.5 |
| CAPM cost-of-equity framework and NCC illustration | §9.6 |
| DCF/dividend-yield-plus-growth method and growth estimation | §9.7 |
| Own-bond-yield-plus-judgmental-risk-premium | §9.8 |
| Comparison of equity-cost methods | §9.9 |
| New common equity and flotation costs | §9.10 |
| Composite WACC and NCC 9.4% example | §9.11 |
| Uncontrollable/controllable factors affecting WACC | §9.12 |
| Divisional/project risk adjustment, Huron example, pure play, accounting beta, three risks | §9.13 |
| Private-firm cost-of-capital issues | §9.14 |
| Four mistakes to avoid | §9.15 |
| Scope mapping to CF4 | CF4 syllabus — Topik 3, [[3.3 Capital Budgeting and Cost of Capital]] |

---

*📖 Source: Brigham & Ehrhardt, Financial Management: Theory and Practice, 12th ed., Chapter 9 — The Cost of Capital | CF4 focus: §§9.1–9.2, 9.7–9.8, 9.11–9.13*
