---
type: "condensed-book"
exam: "CF1"
book: "Fundamentals of Corporate Finance"
author: "Stephen A. Ross, Randolph W. Westerfield, Bradford D. Jordan"
chapter: "13"
chapter_title: "Return, Risk, and the Security Market Line"
cf1_topics: ["7.1", "7.2"]
cf1_relevance: "High"
source_scope: "Chapter 13"
compression_level: "Condensed"
tags: [CF1, CondensedBook, RossJordan, Portfolio, CAPM, Beta, SML]
date_created: "2026-08-25"
status: "study-note"
---

# Ross & Jordan — Chapter 13: Return, Risk, and the Security Market Line

> [!ABSTRACT] Chapter in One View
> Chapter 13 mengubah descriptive risk-return history dari Chapter 12 menjadi **forward-looking model**. Ross et al. mulai dengan expected return dan variance ketika future outcomes memiliki probabilities, lalu memperluasnya ke portfolios melalui portfolio weights. Chapter kemudian memisahkan realized return menjadi expected dan unexpected components, serta unexpected risk menjadi **systematic** dan **unsystematic** parts. Diversification mengurangi unsystematic risk, sehingga market tidak memberi compensation untuk risk yang dapat dihilangkan dengan mudah. Dari sini muncul **systematic risk principle**: expected risk premium ditentukan oleh systematic risk. Systematic exposure diukur dengan **beta**, portfolio beta adalah weighted average component betas, dan equal reward-to-risk logic menghasilkan **Security Market Line (SML)** serta **Capital Asset Pricing Model (CAPM)**. Untuk CF1, chapter ini adalah source utama untuk expected return, portfolio return, diversification, systematic vs diversifiable risk, beta, portfolio beta, SML, dan CAPM.

## 1. Why This Chapter Exists

Chapter 12 menunjukkan secara historis bahwa risky assets cenderung memberi higher average return tetapi juga higher volatility. Chapter 13 bertanya:

> **Risk mana yang seharusnya diberi reward, dan bagaimana expected return terkait dengan risk tersebut?**

Jawaban chapter berkembang bertahap. Pertama, risk masa depan dinyatakan melalui probability distribution. Kedua, investor jarang memegang satu aset saja sehingga portfolio effects harus diperhitungkan. Ketiga, diversification menghapus sebagian risk. Akhirnya, hanya nondiversifiable systematic risk yang relevan untuk pricing expected return.

## 2. Chapter Map

- **13.1 Expected Returns and Variances**
  - state probabilities
  - expected return
  - variance and standard deviation
  - expected risk premium
- **13.2 Portfolios**
  - portfolio weights
  - portfolio expected return
  - portfolio variance intuition
- **13.3 Announcements, Surprises, and Expected Returns**
  - expected vs unexpected return
  - surprise component
- **13.4 Risk: Systematic and Unsystematic**
  - marketwide vs asset-specific surprises
- **13.5 Diversification and Portfolio Risk**
  - principle of diversification
  - diversifiable vs nondiversifiable risk
- **13.6 Systematic Risk and Beta**
  - systematic risk principle
  - beta
  - portfolio beta
- **13.7 The Security Market Line**
  - reward-to-risk ratio
  - market risk premium
  - SML and CAPM
- **13.8 The SML and the Cost of Capital: A Preview**
- **13.9 Summary and Conclusions**

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 13.1 Expected Returns and Variances | Core | [[7.2 Mean-Variance Portfolio Theory]] |
| 13.2 Portfolios | Core | [[7.2 Mean-Variance Portfolio Theory]] |
| 13.3 Announcements and Surprises | Supporting | [[7.1 CAPM and Factor Models]] |
| 13.4 Systematic and Unsystematic Risk | Core | [[7.1 CAPM and Factor Models]] |
| 13.5 Diversification and Portfolio Risk | Core | [[7.2 Mean-Variance Portfolio Theory]] |
| 13.6 Systematic Risk and Beta | Core | [[7.1 CAPM and Factor Models]] |
| 13.7 Security Market Line | Core | [[7.1 CAPM and Factor Models]] |
| 13.8 SML and Cost of Capital Preview | Supporting | [[7.1 CAPM and Factor Models]] |
| 13.9 Summary | Supporting | [[7.1 CAPM and Factor Models]], [[7.2 Mean-Variance Portfolio Theory]] |

## 3. 13.1 Expected Returns and Variances

### 3.1 Expected Return from States of the Economy

Jika future return tidak diketahui tetapi possible outcomes dan probabilities-nya tersedia, expected return adalah probability-weighted average.

Untuk states $s=1,2,\ldots,m$:

$$
E(R)
=
\sum_{s=1}^{m} p_s R_s,
$$

dengan:

$$
\sum_{s=1}^{m}p_s=1.
$$

### Textbook Example — Stocks L and U

Textbook membangun dua-state economy: recession dan boom, masing-masing probability $0.5$.

Untuk Stock L:

- recession return $=-20\%$;
- boom return $=70\%$.

Maka:

$$
E(R_L)
=0.5(-20\%)+0.5(70\%)
=25\%.
$$

Untuk Stock U:

- recession return $=30\%$;
- boom return $=10\%$.

$$
E(R_U)
=0.5(30\%)+0.5(10\%)
=20\%.
$$

Expected return yang lebih tinggi tidak otomatis berarti Stock L superior, karena future return L juga lebih dispersed.

### 3.2 Expected Risk Premium

Jika risk-free rate adalah $R_f$, expected risk premium risky asset adalah:

$$
\text{Expected risk premium}
=
E(R_i)-R_f.
$$

Dengan $R_f=8\%$ pada textbook example:

$$
\text{Risk premium on U}=20\%-8\%=12\%,
$$

$$
\text{Risk premium on L}=25\%-8\%=17\%.
$$

### 3.3 Variance and Standard Deviation of a Future Return

Expected return memberi center dari probability distribution. Risk measure memerlukan dispersion around that center.

Population-style variance untuk discrete states:

$$
\operatorname{Var}(R)
=
\sum_{s=1}^{m}p_s\left(R_s-E(R)\right)^2.
$$

Standard deviation:

$$
\sigma_R
=
\sqrt{\operatorname{Var}(R)}.
$$

> [!WARNING] Important Distinction
> Formula historical sample variance pada Chapter 12 menggunakan denominator $T-1$. Di Chapter 13, state probabilities sudah mendeskripsikan distribution, sehingga variance dihitung langsung sebagai probability-weighted squared deviations.

### Example — Unequal Probabilities

Ross kemudian mengubah boom probability menjadi $0.20$ dan recession probability menjadi $0.80$. Lesson-nya bukan angka tertentu, melainkan bahwa expected return dan variance harus dibangun dari **probabilities yang konsisten**; tidak boleh tetap memakai equal weighting bila state probabilities berbeda.

## 4. 13.2 Portfolios

### 4.1 Portfolio Weights

Portfolio adalah group of assets. Portfolio weight $x_i$ adalah fraction dari total portfolio value yang diinvestasikan pada asset $i$.

Untuk fully invested portfolio:

$$
\sum_{i=1}^{n}x_i=1.
$$

Jika total wealth adalah $W$ dan investment in asset $i$ adalah $W_i$:

$$
x_i=\frac{W_i}{W}.
$$

### 4.2 Realized Portfolio Return

Untuk suatu realized state:

$$
R_P
=
\sum_{i=1}^{n}x_iR_i.
$$

Dengan equally weighted L dan U pada recession:

$$
R_P
=0.5(-20\%)+0.5(30\%)
=5\%.
$$

Pada boom:

$$
R_P
=0.5(70\%)+0.5(10\%)
=40\%.
$$

### 4.3 Expected Portfolio Return

Karena expectation linear:

$$
E(R_P)
=
x_1E(R_1)+x_2E(R_2)+\cdots+x_nE(R_n).
$$

atau:

$$
\boxed{E(R_P)=\sum_{i=1}^{n}x_iE(R_i)}.
$$

Untuk L dan U:

$$
E(R_P)
=0.5(25\%)+0.5(20\%)
=22.5\%.
$$

### Textbook Example — Three Stocks

Ross memberi three-stock setting dengan expected returns:

$$
E(R_A)=8.8\%,\qquad
E(R_B)=8.4\%,\qquad
E(R_C)=8.0\%.
$$

Equally weighted portfolio:

$$
E(R_P)
=\frac13(8.8\%)+\frac13(8.4\%)+\frac13(8.0\%)
=8.4\%.
$$

**Meaning.** Expected portfolio return adalah weighted average yang straightforward. Risk portfolio tidak sesederhana weighted average standard deviations, karena assets may offset each other across states.

### 4.4 Portfolio Variance: The Key Insight

Ross menghitung portfolio variance dari possible portfolio returns in each state. Dalam equally weighted L-U portfolio, realized portfolio returns adalah 5% dan 40%, dengan expected return 22.5%. Variance:

$$
\operatorname{Var}(R_P)
=0.5(0.05-0.225)^2
+0.5(0.40-0.225)^2
=0.030625.
$$

Standard deviation:

$$
\sigma_P
=\sqrt{0.030625}
=17.5\%.
$$

Hal pentingnya adalah bahwa portfolio risk dapat lebih rendah daripada risk of individual component assets karena state outcomes saling offset.

> [!INFO] CF1 Connection
> Ross chapter ini membangun diversification melalui state-return examples. Silabus CF1 juga meminta volatility dan correlation, tetapi formal two-asset covariance formula tidak dikembangkan dengan detail yang sama pada section ini. Condensed textbook note mempertahankan treatment Ross dan tidak menambahkan derivasi dari source lain.

## 5. 13.3 Announcements, Surprises, and Expected Returns

### 5.1 Return = Expected + Unexpected

Actual return pada suatu period dapat dipisahkan menjadi bagian yang expected dan surprise.

Secara konsep:

$$
R=E(R)+U,
$$

di mana $U$ adalah unexpected return component.

Jika event yang diumumkan persis seperti yang sudah diperkirakan market, announcement tersebut tidak membawa genuine surprise. Price reaction berasal terutama dari difference antara actual news dan what was expected.

Textbook juga menulis announcement sebagai:

$$
\text{Announcement}
=
\text{Expected part}
+
\text{Surprise}.
$$

### Why This Matters

Risk tidak berasal dari informasi yang sudah known with certainty. Jika return selalu sama persis dengan expected return, investment would be predictable and effectively risk-free. Risk muncul dari **unanticipated events**.

## 6. 13.4 Risk: Systematic and Unsystematic

Unexpected events tidak semuanya sama.

### 6.1 Systematic Risk

**Systematic risk** adalah risk dari broad economic or marketwide surprises yang mempengaruhi banyak assets sekaligus.

Textbook examples mencakup economywide factors seperti changes in GDP, interest rates, inflation, dan broad market conditions.

Synonyms yang dipakai:

- market risk;
- systematic risk;
- nondiversifiable risk.

### 6.2 Unsystematic Risk

**Unsystematic risk** adalah risk yang lebih specific pada satu company atau relatively small group of companies.

Synonyms:

- unique risk;
- asset-specific risk;
- diversifiable risk.

### 6.3 Decomposition

Textbook logic:

$$
R
=
E(R)
+
\text{Systematic portion}
+
\text{Unsystematic portion}.
$$

Ini bukan sekadar terminology. Decomposition inilah yang memungkinkan diversification argument berikutnya.

> [!WARNING] Important Distinction
> **Systematic risk ≠ total risk.** Total uncertainty suatu standalone security mengandung systematic dan unsystematic components.

## 7. 13.5 Diversification and Portfolio Risk

### 7.1 Principle of Diversification

Ketika investor menambah banyak different securities ke portfolio, firm-specific surprises cenderung saling mengimbangi. Bad news pada satu company dapat offset oleh good news pada company lain.

Akibatnya:

- portfolio standard deviation generally falls as number of reasonably independent securities rises;
- reduction becomes progressively smaller;
- risk does not fall to zero because economywide systematic events affect many securities together.

Textbook menyimpulkan:

$$
\text{Total risk}
=
\text{Systematic risk}
+
\text{Unsystematic risk}.
$$

Diversification mainly removes the second term.

### 7.2 Why Diversification Works

Unsystematic shocks tidak perfectly synchronized across firms. Dalam portfolio besar, individual positive dan negative surprises wash out. Systematic shocks, by contrast, move many assets together, sehingga menambah securities tidak menghilangkannya.

### 7.3 Economic Implication

Jika investor dapat eliminate unsystematic risk dengan diversification tanpa mengorbankan expected return secara fundamental, market tidak perlu memberi extra compensation untuk memegang risk tersebut.

Inilah direct bridge ke systematic risk principle.

## 8. 13.6 Systematic Risk and Beta

### 8.1 Systematic Risk Principle

Ross merumuskan principle penting:

> **Expected return on a risky asset depends only on its systematic risk.**

Alasannya: unsystematic risk can be diversified away, so rational diversified investors do not require compensation for bearing it.

### 8.2 Beta as Relative Systematic Risk Measure

Beta mengukur jumlah systematic risk asset relative to average asset/market.

Interpretation:

- $\beta=1$ → same systematic risk as market average;
- $\beta>1$ → above-average systematic risk;
- $0<\beta<1$ → below-average systematic risk;
- beta dapat secara conceptually negatif bila asset exposure berlawanan dengan marketwide movements.

Market portfolio has beta 1 by definition in this framework.

### 8.3 Portfolio Beta

Ross emphasizes a particularly simple relationship:

$$
\beta_P
=
\sum_{i=1}^{n}x_i\beta_i.
$$

Jadi portfolio beta adalah weighted average component betas, persis seperti expected return.

### Example — Portfolio Beta

Jika portfolio terdiri dari 50% asset dengan beta $1.4$ dan 50% asset dengan beta $0.8$:

$$
\beta_P
=0.5(1.4)+0.5(0.8)
=1.1.
$$

Portfolio memiliki systematic risk sekitar 10% di atas market benchmark in beta terms.

> [!WARNING] Important Distinction
> Portfolio expected return dan portfolio beta sama-sama weighted averages. **Portfolio standard deviation bukan weighted average individual standard deviations.** Ini adalah salah satu perbedaan paling penting dalam portfolio mathematics.

## 9. 13.7 The Security Market Line

### 9.1 Reward-to-Risk Ratio

Jika only systematic risk earns compensation, relevant reward per unit risk untuk asset $i$ adalah:

$$
\frac{E(R_i)-R_f}{\beta_i}.
$$

Ross menunjukkan bahwa dalam well-functioning market, unequal reward-to-beta ratios create opportunities for investors to shift wealth toward superior combinations. Price adjustments then restore equality.

Untuk market portfolio, karena $\beta_M=1$:

$$
\frac{E(R_M)-R_f}{\beta_M}
=E(R_M)-R_f.
$$

Maka equilibrium condition:

$$
\frac{E(R_i)-R_f}{\beta_i}
=
E(R_M)-R_f.
$$

### 9.2 Deriving the SML / CAPM

Multiply both sides by $\beta_i$:

$$
E(R_i)-R_f
=
\beta_i\left[E(R_M)-R_f\right].
$$

Add $R_f$:

$$
\boxed{
E(R_i)
=
R_f+
\beta_i\left[E(R_M)-R_f\right]
}.
$$

This is the **Capital Asset Pricing Model (CAPM)** and the equation of the **Security Market Line (SML)**.

### 9.3 SML Geometry

Figure 13.4 plots expected return on vertical axis and beta on horizontal axis.

- intercept:

$$
R_f;
$$

- slope:

$$
E(R_M)-R_f;
$$

- market point:

$$
(\beta_M,E(R_M))=(1,E(R_M)).
$$

Dengan positive market risk premium, SML slopes upward.

### 9.4 Economic Meaning of CAPM

Expected return memiliki tiga components:

1. **pure time value of money** — $R_f$;
2. **reward for average systematic risk** — market risk premium $E(R_M)-R_f$;
3. **quantity of systematic risk** — $\beta_i$.

Thus:

$$
\text{Asset risk premium}
=
\beta_i\times\text{Market risk premium}.
$$

### Textbook Example — Beta 1.3

Given:

$$
R_f=4\%,
$$

$$
E(R_M)-R_f=8.6\%,
$$

$$
\beta_i=1.3.
$$

Risk premium:

$$
1.3(8.6\%)=11.18\%.
$$

Expected return:

$$
E(R_i)=4\%+11.18\%=15.18\%.
$$

Jika beta doubles to $2.6$:

$$
E(R_i)=4\%+2.6(8.6\%)=26.36\%.
$$

**Check.** Doubling beta doubles the **risk premium**, not the entire expected return, because $R_f$ remains the intercept.

### 9.5 Assets Off the SML

Jika expected return yang ditawarkan suatu asset berbeda dari SML-required return untuk beta-nya, reward-to-risk ratio menjadi inconsistent dengan market equilibrium.

- return too high for beta → asset attractive relative to SML;
- return too low for beta → asset unattractive relative to SML.

Market price adjustment changes expected return until asset lies on SML in equilibrium.

## 10. 13.8 The SML and the Cost of Capital: A Preview

Ross menghubungkan SML dengan capital budgeting. Jika sebuah project memiliki risk comparable to an asset with beta $\beta$, appropriate required return should reflect that systematic risk.

[CF1 SUPPORTING CONTEXT] Chapter hanya memberi preview; full capital-budgeting application muncul kemudian. Untuk CF1, lesson relevannya adalah bahwa CAPM expected return dapat dibaca sebagai **required return / cost of capital for risk-matched investment**, provided CAPM assumptions and beta characterization are appropriate.

## 11. Chapter Synthesis

Chapter 13 dimulai dengan uncertainty before investment happens: possible returns memperoleh probabilities, menghasilkan expected return dan variance. Karena investors hold portfolios, returns aggregate linearly through portfolio weights, tetapi risk can fall because component outcomes offset one another. Ross kemudian memisahkan unexpected return menjadi systematic dan unsystematic pieces. Diversification removes much of unsystematic risk, sehingga hanya systematic risk remains relevant to a diversified investor.

Beta provides a relative measure of that systematic risk. Once risk is measured by beta, market equilibrium requires a consistent reward per unit beta. Market portfolio supplies benchmark reward $E(R_M)-R_f$ per beta unit because its beta equals 1. Equating each asset’s reward-to-risk ratio to market’s produces the SML and CAPM:

$$
E(R_i)
=
R_f+eta_i[E(R_M)-R_f].
$$

Thus chapter’s full narrative is:

```text
future uncertainty
    ↓
expected return + variance
    ↓
portfolio formation
    ↓
diversification
    ↓
only systematic risk remains priced
    ↓
beta measures systematic risk
    ↓
reward per beta must be consistent
    ↓
SML / CAPM
```

## 12. Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| Expected return | Probability-weighted possible returns | Future state distribution | [[7.2 Mean-Variance Portfolio Theory]] |
| Expected risk premium | $E(R_i)-R_f$ | Same period basis | [[7.1 CAPM and Factor Models]] |
| Future-return variance | Probability-weighted squared deviations | State probabilities sum to 1 | [[7.2 Mean-Variance Portfolio Theory]] |
| Portfolio weight | Asset value / total portfolio value | Fully invested weights sum to 1 | [[7.2 Mean-Variance Portfolio Theory]] |
| Portfolio realized return | Weighted average realized asset returns | Same state/period | [[7.2 Mean-Variance Portfolio Theory]] |
| Portfolio expected return | Weighted average expected returns | Linear expectation | [[7.2 Mean-Variance Portfolio Theory]] |
| Expected + unexpected return | Separates predictable and surprise components | One period | [[7.1 CAPM and Factor Models]] |
| Systematic risk | Marketwide, nondiversifiable surprise | Remains in large portfolio | [[7.1 CAPM and Factor Models]] |
| Unsystematic risk | Asset-specific, diversifiable surprise | Reduced by diversification | [[7.2 Mean-Variance Portfolio Theory]] |
| Total risk decomposition | Systematic + unsystematic | Conceptual decomposition | [[7.1 CAPM and Factor Models]] |
| Systematic risk principle | Only systematic risk earns expected compensation | Diversified-market logic | [[7.1 CAPM and Factor Models]] |
| Portfolio beta | Weighted average component betas | Same market benchmark | [[7.1 CAPM and Factor Models]] |
| Reward-to-risk ratio | Excess expected return per beta | Well-functioning market | [[7.1 CAPM and Factor Models]] |
| Market risk premium | $E(R_M)-R_f$ | Market beta = 1 | [[7.1 CAPM and Factor Models]] |
| SML/CAPM | Required expected return from beta | Equilibrium relation | [[7.1 CAPM and Factor Models]] |

Core expected-return formula:

$$
E(R)=\sum_s p_sR_s.
$$

Core portfolio expected-return formula:

$$
E(R_P)=\sum_i x_iE(R_i).
$$

Core CAPM formula:

$$
E(R_i)=R_f+\beta_i[E(R_M)-R_f].
$$

## 13. Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $R$ | Realized return | Percentage / period | May be decomposed into expected + unexpected |
| $E(R)$ | Expected return | Percentage / period | Probability-weighted mean |
| $p_s$ | Probability of state $s$ | Unitless | Sum across states equals 1 |
| $R_s$ | Return if state $s$ occurs | Percentage / period | State-contingent return |
| $R_f$ | Risk-free rate | Percentage / period | SML intercept |
| $R_P$ | Portfolio return | Percentage / period | Weighted asset returns |
| $x_i$ | Portfolio weight of asset $i$ | Unitless | Sum to 1 for fully invested portfolio |
| $\sigma$ | Standard deviation | Percentage / period | Total return variability |
| $\beta_i$ | Beta of asset $i$ | Unitless | Relative systematic risk |
| $R_M$ | Market return | Percentage / period | Market beta equals 1 |

> [!NOTE] Notation Mapping
> Ross frequently writes $E(R_i)$ and $R_f$. Ini konsisten dengan CF1 portfolio notation. Beta adalah systematic-risk measure dan **bukan** standard deviation.

## 14. Compression Notes

### Retained in Detail

- probability-weighted expected return;
- expected risk premium;
- future variance and standard deviation intuition;
- portfolio weights and expected portfolio return;
- portfolio-risk reduction via diversification;
- expected vs unexpected return;
- systematic vs unsystematic risk;
- systematic risk principle;
- beta and portfolio beta;
- reward-to-risk ratio;
- derivation and interpretation of SML/CAPM;
- representative CAPM numerical example.

### Condensed

- repeated state-probability examples;
- extended company-news illustrations of systematic vs unsystematic risk;
- empirical diversification graphs and long narrative around number of stocks;
- repeated SML relative-pricing examples;
- long conceptual question sets and web exercises.

### Omitted / Beyond CF1

- online data exercises and website references;
- lengthy cost-of-capital preview beyond its CAPM connection;
- end-of-chapter exercise bank;
- advanced theory beyond the textbook’s stated CAPM treatment.

> [!NOTE] Source Boundary
> Silabus CF1 menyebut **factor models** dan formal mean-variance optimization topics. Chapter 13 yang tersedia sangat kuat untuk diversification, systematic risk, beta, SML, dan CAPM, tetapi tidak menyediakan complete explicit treatment untuk seluruh factor-model / efficient-frontier machinery. Condensed note ini tidak menambahkan formula dari textbook lain atau general knowledge.

## 15. CF1 Connection Map

```text
Expected return by states
        ↓
Variance / standard deviation
        ↓
Portfolio weights and portfolio return
        ↓
Diversification
        ↓
Systematic vs unsystematic risk
        ↓
Systematic risk principle
        ↓
Beta and portfolio beta
        ↓
Reward-to-risk ratio
        ↓
Security Market Line
        ↓
CAPM
        ↓
[[7.1 CAPM and Factor Models]]

Portfolio construction + diversification
        ↓
[[7.2 Mean-Variance Portfolio Theory]]
```

## 16. Quick Reading Review

- Expected return adalah probability-weighted average possible returns.
- Expected risk premium adalah $E(R_i)-R_f$.
- Variance menggunakan probability-weighted squared deviations dari expected return.
- Portfolio weights menjumlah ke 1 untuk fully invested portfolio.
- Portfolio expected return adalah weighted average expected asset returns.
- Portfolio risk tidak sama dengan weighted average individual standard deviations.
- Actual return dapat dipisahkan menjadi expected dan unexpected components.
- Systematic risk berasal dari marketwide surprises dan tidak dapat didiversifikasi away.
- Unsystematic risk adalah asset-specific dan dapat sangat dikurangi melalui diversification.
- Diversification membuat systematic risk menjadi relevant priced risk.
- Beta mengukur relative systematic risk.
- Portfolio beta adalah weighted average component betas.
- Market beta adalah 1.
- Reward-to-risk ratio relevant for SML adalah excess expected return per beta.
- SML intercept adalah $R_f$; slope adalah market risk premium.
- CAPM: $E(R_i)=R_f+\beta_i[E(R_M)-R_f]$.
- Doubling beta doubles the risk premium, not the total expected return.
- Asset off the SML memiliki reward-to-beta ratio inconsistent with equilibrium.

## 17. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Expected return, risk premium, variance | Chapter 13 §13.1 Expected Returns and Variances |
| Portfolio weights and expected return | Chapter 13 §13.2 Portfolios |
| Portfolio variance state example | Chapter 13 §13.2 Portfolios |
| Expected vs unexpected returns | Chapter 13 §13.3 Announcements, Surprises, and Expected Returns |
| Systematic vs unsystematic risk | Chapter 13 §13.4 Risk: Systematic and Unsystematic |
| Diversification principle | Chapter 13 §13.5 Diversification and Portfolio Risk |
| Systematic risk principle and beta | Chapter 13 §13.6 Systematic Risk and Beta |
| Portfolio beta | Chapter 13 §13.6 |
| Reward-to-risk ratio, SML, CAPM | Chapter 13 §13.7 The Security Market Line |
| Cost-of-capital connection | Chapter 13 §13.8 The SML and the Cost of Capital: A Preview |
| Overall chapter framework | Chapter 13 §13.9 Summary and Conclusions |
