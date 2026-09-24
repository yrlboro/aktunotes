---
type: "condensed-book"
exam: "CF2"
book: "Probability and Statistics for Engineers and Scientists, 9th Edition"
author: "Ronald E. Walpole, Raymond H. Myers, Sharon L. Myers, Keying Ye"
chapter: "8"
chapter_title: "Fundamental Sampling Distributions and Data Descriptions"
cf2_topics: ["4.1", "4.2", "4.3"]
cf2_relevance: "Mixed — Core in §§8.1, 8.4, 8.5; supporting in §§8.2–8.3; beyond CF2 in §§8.6–8.9"
source_scope: "Chapter 8, Sections 8.1–8.9"
compression_level: "Condensed"
tags: [CF2, CondensedBook, Walpole, RandomSampling, SamplingDistribution, CLT, ChiSquare]
date_created: "2026-08-29"
status: "study-note"
---

# Walpole et al. — Chapter 8: Fundamental Sampling Distributions and Data Descriptions

> [!ABSTRACT] Chapter in One View
> Chapter 8 membangun jembatan dari **population distribution** menuju **statistical inference**. Penulis mulai dengan population, sample, dan random sample; memperkenalkan statistic sebagai fungsi random sample; lalu menjelaskan bahwa statistic seperti $\bar X$ dan $S^2$ juga merupakan random variables yang mempunyai **sampling distributions**. Dari sini chapter mengembangkan dua hasil yang langsung masuk scope CF2: **sampling distribution of the mean / difference of means + Central Limit Theorem** dan **sampling distribution of the sample variance melalui $\chi^2$**. Section berikutnya memperkenalkan $t$, graphical diagnostics, dan cautionary discussion, tetapi bagian tersebut tidak termasuk mapped Walpole scope resmi CF2.

## CF2 Scope Map

| Walpole Section | Relevance | Hubungan CF2 |
|---|---|---|
| §8.1 Random Sampling | `[CORE CF2]` | [[4.1 Penarikan Sampel Acak]] |
| §8.2 Some Important Statistics | `[CF2 SUPPORTING CONTEXT]` | statistic, $\bar X$, $S^2$ sebagai prerequisite |
| §8.3 Sampling Distributions | `[CF2 SUPPORTING CONTEXT]` | conceptual bridge ke [[4.2 Distribusi Sampel]] |
| §8.4 Sampling Distribution of Means and the Central Limit Theorem | `[CORE CF2]` | [[4.2 Distribusi Sampel]], [[4.3 Teorema Limit Pusat (CLT)]] |
| §8.5 Sampling Distribution of $S^2$ | `[CORE CF2]` | [[4.2 Distribusi Sampel]] |
| §8.6 $t$-Distribution | `[BEYOND CF2 — WALPOLE MAPPING]` | Berguna sebagai background, tetapi §8.6 tidak tercantum dalam official Walpole mapping |
| §8.7 $F$-Distribution | `[BEYOND CF2 — WALPOLE MAPPING]` | Tidak tercantum dalam official Walpole mapping |
| §8.8 Quantile and Probability Plots | `[BEYOND CF2]` | Graphical data diagnostics, bukan learning outcome utama CF2 |
| §8.9 Potential Misconceptions and Hazards | `[BEYOND CF2 — useful caution]` | Conceptual cautions terhadap $Z,t,\chi^2,F$ |

---

# 8.1 Random Sampling

`[CORE CF2]`

## Population dan sample

Walpole mendefinisikan **population** sebagai totalitas observations yang menjadi perhatian. Population dapat finite atau infinite; bahkan finite population yang sangat besar kadang diperlakukan secara teoritis sebagai infinite population.

Setiap observation pada population dipandang sebagai value dari random variable $X$ dengan probability distribution $f(x)$. Karena itu istilah seperti “normal population” atau “binomial population” berarti bahwa observations pada population merupakan realizations dari random variable dengan distribution tersebut.

> [!NOTE] Definition 8.1 — Population
> A population consists of the totality of the observations with which we are concerned.

Dalam statistical inference, seluruh population sering tidak mungkin atau tidak praktis diamati. Maka digunakan **sample**, yakni subset dari population.

> [!NOTE] Definition 8.2 — Sample
> A sample is a subset of a population.

Tetapi inferensi hanya masuk akal jika sample mewakili population secara memadai. Convenience sampling dapat menghasilkan systematic overestimate atau underestimate; Walpole menyebut procedure seperti ini **biased**.

## Random sample

Untuk random sample size $n$, definisikan random variables

$$
X_1,X_2,\ldots,X_n,
$$

di mana $X_i$ adalah measurement ke-$i$.

Jika experiment diulang $n$ kali secara independent di bawah essentially the same conditions, maka Walpole memodelkan sample sebagai:

1. $X_1,\ldots,X_n$ independent;
2. setiap $X_i$ mempunyai probability distribution yang sama $f(x)$.

Dengan demikian joint distribution factorizes:

$$
\boxed{
f(x_1,x_2,\ldots,x_n)
=
\prod_{i=1}^n f(x_i)
}
$$

pada joint support yang sesuai.

> [!NOTE] Definition 8.3 — Random Sample
> $X_1,\ldots,X_n$ adalah random sample size $n$ dari population $f(x)$ jika semuanya independent dan mempunyai distribution yang sama $f(x)$.

### Mathematical structure

```text
population f(x)
      ↓
independent repeated measurements
      ↓
X1,...,Xn identically distributed as f(x)
      ↓
joint law = product of marginal laws
```

[IMPORTANT DISTINCTION]

- **Population parameter** seperti $\mu$, $\sigma^2$, atau $p$ adalah characteristic dari population distribution.
- **Random sample** $X_1,\ldots,X_n$ masih berupa random variables.
- **Observed sample** $x_1,\ldots,x_n$ adalah realizations setelah data dikumpulkan.

Textbook memberi battery-life example untuk menekankan bahwa setiap measured lifetime $x_i$ merupakan realized value dari $X_i$, sedangkan seluruh $X_i$ mengikuti population distribution yang sama.

---

# 8.2 Some Important Statistics

`[CF2 SUPPORTING CONTEXT]`

Section ini memperkenalkan objects yang nanti mempunyai sampling distributions.

> [!NOTE] Definition 8.4 — Statistic
> Any function of the random variables constituting a random sample is called a statistic.

Statistic adalah random variable karena merupakan function dari random sample. Setelah sample diamati, statistic menghasilkan numerical value tertentu.

## Sample mean

$$
\boxed{
\bar X
=
\frac1n\sum_{i=1}^n X_i
}
$$

Observed value:

$$
\bar x
=
\frac1n\sum_{i=1}^n x_i.
$$

[IMPORTANT DISTINCTION]

$$
\mu \neq \bar X \neq \bar x.
$$

- $\mu$: fixed population mean;
- $\bar X$: random statistic;
- $\bar x$: observed number.

## Sample median dan mode

Walpole juga mengulang sample median dan sample mode sebagai location measures. Keduanya membantu descriptive summary, tetapi chapter kemudian berfokus terutama pada $\bar X$ dan $S^2$ karena keduanya menjadi dasar sampling-distribution theory.

## Sample variance

$$
\boxed{
S^2
=
\frac1{n-1}
\sum_{i=1}^n (X_i-\bar X)^2
}
$$

Observed value:

$$
s^2
=
\frac1{n-1}
\sum_{i=1}^n (x_i-\bar x)^2.
$$

Textbook menyatakan bahwa alasan denominator $n-1$ akan menjadi lebih jelas dalam chapter berikutnya; di Chapter 8, denominator ini juga terhubung dengan **degrees of freedom** pada sampling distribution of $S^2$.

### Computational identity — Theorem 8.1

Walpole memberikan equivalent formula:

$$
\boxed{
S^2
=
\frac{1}{n(n-1)}
\left[
 n\sum_{i=1}^n X_i^2
-
\left(\sum_{i=1}^n X_i\right)^2
\right].
}
$$

Derivasi dimulai dari expansion

$$
\sum (X_i-\bar X)^2
=
\sum X_i^2-2\bar X\sum X_i+n\bar X^2
$$

lalu menggunakan

$$
\sum X_i=n\bar X.
$$

Ini memberi computational shortcut tanpa mengubah mathematical meaning dari variance sebagai average squared deviation around the sample mean.

## Sample standard deviation dan range

$$
S=\sqrt{S^2},
$$

$$
R=X_{\max}-X_{\min}.
$$

Bagian latihan numerik descriptive statistics dipadatkan karena tidak membangun sampling-distribution mechanics baru.

---

# 8.3 Sampling Distributions

`[CF2 SUPPORTING CONTEXT]`

Section ini adalah conceptual hinge dari chapter.

Walpole menekankan bahwa inference selalu berangkat dari **sample statistic** untuk mengatakan sesuatu tentang population parameter. Satu observed statistic tidak cukup dipahami sendirian; kita perlu mengetahui bagaimana statistic tersebut akan berfluktuasi jika sampling procedure diulang berulang kali.

> [!NOTE] Definition 8.5 — Sampling Distribution
> The probability distribution of a statistic is called a sampling distribution.

Sampling distribution bergantung pada:

- population distribution;
- sample size;
- sampling method.

Untuk $\bar X$, sampling distribution adalah distribution dari seluruh possible $\bar x$ values yang akan muncul bila experiment dengan sample size yang sama diulang berkali-kali.

### Mental model

```text
Population
    ↓
random sample of fixed size n
    ↓
compute statistic T
    ↓
repeat sampling many times
    ↓
distribution of T = sampling distribution
```

Walpole menggunakan soft-drink-machine example untuk membangun intuition: bila true population mean $\mu=240$ ml, sebuah observed $\bar x=236$ tidak otomatis berarti machine salah calibration. Yang penting adalah apakah discrepancy seperti itu **typical atau unusually large** menurut sampling distribution of $\bar X$.

Hal yang sama berlaku untuk $S^2$: sampling distribution of $S^2$ menjelaskan variability sample variances around population variance $\sigma^2$.

---

# 8.4 Sampling Distribution of Means and the Central Limit Theorem

`[CORE CF2]`

Section ini membangun sampling distribution dari $\bar X$, pertama secara exact untuk Normal population, lalu melalui CLT untuk population yang tidak harus Normal.

## Exact Normal sampling distribution of the mean

[ASSUMPTION]

Jika

$$
X_1,\ldots,X_n
$$

adalah random sample dari Normal population dengan mean $\mu$ dan variance $\sigma^2$, maka masing-masing $X_i$ adalah Normal. Karena linear combination dari independent Normal variables kembali Normal,

$$
\bar X
=
\frac1n(X_1+\cdots+X_n)
$$

juga Normal.

Mean:

$$
E(\bar X)
=
\frac1n(n\mu)
=
\mu.
$$

Variance:

$$
\operatorname{Var}(\bar X)
=
\frac1{n^2}(n\sigma^2)
=
\frac{\sigma^2}{n}.
$$

Jadi:

$$
\boxed{
\bar X
\sim
N\left(\mu,\frac{\sigma^2}{n}\right)
}
$$

**exactly**, untuk setiap $n$ jika population Normal.

Standard error:

$$
\boxed{
\sigma_{\bar X}
=
\frac{\sigma}{\sqrt n}.
}
$$

Interpretasi utama: center sampling distribution tetap di $\mu$, tetapi spread mengecil dengan rate $1/\sqrt n$.

## Central Limit Theorem — Theorem 8.2

[ASSUMPTION]

Jika $\bar X$ adalah mean dari random sample size $n$ dari population dengan mean $\mu$ dan finite variance $\sigma^2$, maka limiting distribution dari

$$
\boxed{
Z
=
\frac{\bar X-\mu}{\sigma/\sqrt n}
}
$$

ketika

$$
n\to\infty
$$

adalah standard Normal.

Equivalent practical statement:

$$
\bar X
\approx
N\left(\mu,\frac{\sigma^2}{n}\right)
$$

untuk sufficiently large $n$.

[IMPORTANT DISTINCTION]

- **Normal population:** result untuk $\bar X$ exact, tidak perlu large $n$.
- **Non-Normal/unknown-shape population:** Normal distribution of $\bar X$ adalah approximation dari CLT.

[TEXTBOOK CONTEXT]

Walpole memberi guideline bahwa approximation umumnya baik untuk

$$
n\ge 30
$$

selama population tidak “terribly skewed”. Jika $n<30$, approximation lebih dapat dipercaya bila population shape tidak terlalu jauh dari Normal. Textbook menegaskan bahwa $30$ adalah guideline, bukan hard theorem boundary.

### Figure 8.1 — CLT visual progression

Figure 8.1 memperlihatkan tiga shapes:

- $n=1$: shape sama seperti population dan dapat nonsymmetric;
- small/moderate $n$: distribution of $\bar X$ mulai lebih smooth;
- large $n$: distribution mendekati Normal.

Dua features tetap terlihat sepanjang progression:

$$
E(\bar X)=\mu
$$

dan

$$
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},
$$

sehingga curve menjadi makin concentrated di sekitar $\mu$.

## [TEXTBOOK EXAMPLE] Example 8.4 — light-bulb lifetime

Population lifetime approximately Normal dengan

$$
\mu=800,
\qquad
\sigma=40,
\qquad
n=16.
$$

Target:

$$
P(\bar X<775).
$$

Sampling standard deviation:

$$
\sigma_{\bar X}
=
\frac{40}{\sqrt{16}}
=10.
$$

Standardize:

$$
z
=
\frac{775-800}{10}
=-2.5.
$$

Hence:

$$
\boxed{
P(\bar X<775)=P(Z<-2.5)=0.0062.
}
$$

Lesson dari Figure 8.2: probability adalah area di bawah **sampling distribution of $\bar X$**, bukan area di bawah distribution individual lifetime $X$.

## Inference intuition from sampling distribution

Walpole memakai sampling distribution untuk memberi preview hypothesis-testing logic. Jika suatu observed $\bar x$ sangat jauh dari conjectured $\mu$, hitung probability memperoleh discrepancy setidaknya sebesar itu under the conjecture. Probability yang sangat kecil menjadi evidence bahwa conjectured mean tidak konsisten dengan observed sample.

### [TEXTBOOK EXAMPLE] Case Study 8.1 — automobile parts

Known:

$$
\mu_0=5.0,
\qquad
\sigma=0.1,
\qquad
n=100,
\qquad
\bar x=5.027.
$$

Textbook mengevaluasi two-sided discrepancy:

$$
P(|\bar X-5|\ge0.027).
$$

Standardized distance:

$$
\frac{0.027}{0.1/\sqrt{100}}
=2.7.
$$

Thus:

$$
P(|\bar X-5|\ge0.027)
=
2P(Z\ge2.7)
=
0.007.
$$

Interpretation textbook: discrepancy sebesar ini jarang terjadi jika $\mu=5.0$, sehingga data strongly refute conjecture tersebut. Chapter belum membangun full formal hypothesis-testing machinery; contoh ini hanya menunjukkan reasoning via sampling distribution.

## Difference between two sample means

Walpole kemudian memperluas ide dari satu population mean ke perbandingan dua populations.

Misalkan:

- population 1 mempunyai $(\mu_1,\sigma_1^2)$;
- population 2 mempunyai $(\mu_2,\sigma_2^2)$;
- sample sizes $n_1,n_2$;
- samples dipilih independently.

Maka

$$
E(\bar X_1-\bar X_2)
=
\mu_1-\mu_2.
$$

Karena independent:

$$
\operatorname{Var}(\bar X_1-\bar X_2)
=
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}.
$$

Perhatikan bahwa **variances add**, walaupun means subtract.

Untuk Normal populations, difference of means Normal exactly; untuk sufficiently large samples dari general populations, CLT memberi approximation:

$$
\boxed{
\bar X_1-\bar X_2
\approx
N\left(
\mu_1-\mu_2,
\frac{\sigma_1^2}{n_1}+
\frac{\sigma_2^2}{n_2}
\right).
}
$$

Standardization:

$$
\boxed{
Z
=
\frac{
(\bar X_1-\bar X_2)-(\mu_1-\mu_2)
}{
\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}
}.
}
$$

[ASSUMPTION]

Independence antar dua samples penting karena variance difference di atas menghilangkan covariance term.

---

# 8.5 Sampling Distribution of $S^2$

`[CORE CF2]`

Section ini mengalihkan perhatian dari population mean $\mu$ ke population variance $\sigma^2$.

Jika $S^2$ digunakan untuk mengatakan sesuatu tentang $\sigma^2$, kita memerlukan probability distribution dari $S^2$ under repeated sampling.

## Chi-square relationship

[ASSUMPTION]

Random sample berasal dari **Normal population** dengan variance $\sigma^2$.

Walpole menggunakan chi-square distribution untuk standardized sample variance.

> [!IMPORTANT] Theorem 8.4
> Untuk random sample size $n$ dari Normal population,
>
> $$
> \boxed{
> \frac{(n-1)S^2}{\sigma^2}
> =
> \frac{\sum_{i=1}^n(X_i-\bar X)^2}{\sigma^2}
> \sim
> \chi^2_{n-1}.
> }
> $$

Support:

$$
\chi^2>0.
$$

Degrees of freedom:

$$
\nu=n-1.
$$

## Why $n-1$ degrees of freedom?

Walpole membandingkan dua quantities.

Jika true $\mu$ diketahui:

$$
\sum_{i=1}^n
\frac{(X_i-\mu)^2}{\sigma^2}
\sim
\chi^2_n.
$$

Tetapi jika $\mu$ tidak digunakan dan deviations dibentuk around sample mean:

$$
\sum_{i=1}^n
\frac{(X_i-\bar X)^2}{\sigma^2}
=
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi^2_{n-1}.
$$

Satu degree of freedom hilang karena $\mu$ digantikan oleh estimated center $\bar X$.

Ada constraint:

$$
\sum_{i=1}^n(X_i-\bar X)=0,
$$

sehingga setelah $n-1$ deviations diketahui, deviation terakhir tidak bebas lagi.

Textbook memaknai degrees of freedom sebagai jumlah independent pieces of information yang masih tersedia.

## Chi-square quantile notation

Walpole menggunakan $\chi^2_\alpha$ untuk chi-square value yang meninggalkan area $\alpha$ di right tail. Karena chi-square tidak symmetric:

$$
\chi^2_{1-\alpha}
\neq
-\chi^2_\alpha.
$$

Karena itu lower- dan upper-tail critical values harus dibaca secara terpisah dari table.

Contoh yang diberikan untuk $\nu=7$:

$$
\chi^2_{0.05}=14.067,
\qquad
\chi^2_{0.95}=2.167.
$$

Exactly 95% area berada di antara

$$
\chi^2_{0.975}
\quad\text{dan}\quad
\chi^2_{0.025}.
$$

Textbook menghubungkan extreme $\chi^2$ values dengan ketidakcocokan assumed $\sigma^2$:

- unusually large $\chi^2$ dapat menunjukkan assumed $\sigma^2$ terlalu kecil;
- unusually small $\chi^2$ dapat menunjukkan assumed $\sigma^2$ terlalu besar.

Ini adalah inferential intuition, bukan full hypothesis-test procedure.

## [TEXTBOOK EXAMPLE] Example 8.7 — battery lifetime variance

Data lifetime lima batteries:

$$
1.9,\ 2.4,\ 3.0,\ 3.5,\ 4.2.
$$

Textbook memperoleh

$$
s^2=0.815.
$$

Jika manufacturer assumes

$$
\sigma=1,
\qquad
\sigma^2=1,
$$

maka

$$
\chi^2
=
\frac{(5-1)(0.815)}{1}
=3.26.
$$

Degrees of freedom:

$$
\nu=4.
$$

Karena central 95% chi-square range untuk $\nu=4$ yang digunakan textbook adalah approximately

$$
0.484<\chi^2<11.143,
$$

observed value $3.26$ tidak unusual. Textbook menyimpulkan manufacturer tidak mempunyai alasan dari sample tersebut untuk meragukan $\sigma=1$ year.

### Reusable calculation structure

```text
Normal population
      ↓
compute/identify S²
      ↓
form (n−1)S²/σ²
      ↓
df = n−1
      ↓
χ² probability / quantile
      ↓
interpret relative to σ²
```

[IMPORTANT DISTINCTION]

Hasil chi-square untuk $S^2$ pada section ini membutuhkan **Normal population assumption**. Jangan menganggap sample variance dari arbitrary population otomatis menghasilkan exact chi-square distribution.

---

# 8.6 $t$-Distribution

`[BEYOND CF2 — WALPOLE MAPPING]`

Official CF2 mapping untuk Walpole hanya mencantumkan §§8.1, 8.4, dan 8.5, sehingga §8.6 tidak dijadikan materi inti note ini. Walpole membangun Student's $t$ dari independent $Z\sim N(0,1)$ dan $V\sim\chi^2_\nu$ melalui

$$
T=\frac{Z}{\sqrt{V/\nu}},
$$

lalu menunjukkan bahwa untuk Normal random sample,

$$
T=\frac{\bar X-\mu}{S/\sqrt n}
\sim t_{n-1}.
$$

Figure 8.8 memperlihatkan $t$ symmetric dan heavier-tailed dibanding Standard Normal, serta mendekati Normal ketika degrees of freedom membesar.

---

# 8.7 $F$-Distribution

`[BEYOND CF2 — WALPOLE MAPPING]`

Section ini memperkenalkan $F$ distribution sebagai distribution yang dibangun dari ratio dua independent chi-square variables yang masing-masing dibagi degrees of freedom-nya. Materi ini tidak diperluas karena §8.7 tidak termasuk Walpole sections yang tercantum dalam silabus CF2, walaupun $F$ sendiri muncul dalam broader CF2 sampling-distribution scope melalui textbook resmi lain.

---

# 8.8 Quantile and Probability Plots

`[BEYOND CF2]`

Walpole membahas graphical methods untuk menilai apakah data compatible dengan distribution tertentu. Untuk Normal Q-Q plot, ordered observations dipetakan terhadap theoretical standard-normal quantiles; approximate straight line menyarankan Normal model reasonable. Figure 8.16 menunjukkan bagaimana deviation dari straightness dapat mengungkap asymmetry/non-normality.

---

# 8.9 Potential Misconceptions and Hazards

`[BEYOND CF2 — useful caution]`

Section penutup mengingatkan bahwa sampling distribution adalah structure dari statistic across repeated samples, bukan distribution raw observations. Walpole juga menekankan bahwa $t$, $\chi^2$, dan $F$ sampling structures yang diperkenalkan di chapter berasal dari Normal-sample framework, serta degrees of freedom merepresentasikan amount of independent information yang tersisa setelah constraints/estimation.

> [!WARNING] Textbook wording caveat
> Dalam §8.9, textbook menyatakan bahwa CLT tidak dapat digunakan tanpa $\sigma$ diketahui dan bahwa ketika $\sigma$ unknown, $s$ digunakan. Untuk CF2, note ini mempertahankan wording textbook sebagai `[TEXTBOOK CONTEXT]`; formal distinction antara exact $Z$, Student's $t$, dan large-sample substitutions dibahas lebih rigorously di source CF2 lain.

---

# Chapter Synthesis

Walpole Chapter 8 bergerak melalui satu conceptual chain:

```text
Population
   ↓
Random sample X1,...,Xn
   ↓
Statistic such as X̄ or S²
   ↓
Sampling distribution
   ↓
Probability statements about statistic
   ↓
Evidence / inference about population parameter
```

Tiga hasil utama yang langsung relevan bagi mapped CF2 scope adalah:

1. random sample dipandang sebagai iid variables dari common population distribution;
2. $\bar X$ memiliki mean $\mu$ dan variance $\sigma^2/n$, exact Normal jika population Normal dan approximately Normal by CLT untuk sufficiently large $n$;
3. untuk Normal population,

$$
\frac{(n-1)S^2}{\sigma^2}
\sim\chi^2_{n-1}.
$$

Chapter ini sekaligus memperlihatkan mengapa inference tidak boleh dibuat dari raw observed statistic saja. Pertanyaan yang benar adalah:

> “Seberapa plausible observed statistic ini di bawah assumed population model?”

Jawabannya berasal dari sampling distribution.

---

# Key Relationships

## Random sample joint law

$$
f(x_1,\ldots,x_n)
=
\prod_{i=1}^n f(x_i).
$$

Condition: iid sample from population $f$.

## Sample mean

$$
\bar X=\frac1n\sum X_i.
$$

$$
E(\bar X)=\mu,
\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
$$

## Exact Normal mean result

$$
\bar X\sim N\left(\mu,\frac{\sigma^2}{n}\right)
$$

if population Normal.

## CLT standardization

$$
\frac{\bar X-\mu}{\sigma/\sqrt n}
\xrightarrow{d}
N(0,1).
$$

## Difference of means

$$
E(\bar X_1-\bar X_2)=\mu_1-\mu_2,
$$

$$
\operatorname{Var}(\bar X_1-\bar X_2)
=
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}
$$

for independent samples.

## Sample variance

$$
S^2
=
\frac1{n-1}\sum(X_i-\bar X)^2.
$$

## Chi-square sampling distribution of variance

$$
\frac{(n-1)S^2}{\sigma^2}
\sim\chi^2_{n-1}
$$

for Normal population.

---

# Notation Used in This Chapter

| Symbol | Meaning | Notes |
|---|---|---|
| $X$ | Population random variable | Distribution $f(x)$ |
| $X_1,\ldots,X_n$ | Random sample | iid under Definition 8.3 |
| $x_1,\ldots,x_n$ | Observed sample values | Realizations of $X_i$ |
| $\mu$ | Population mean | Parameter |
| $\sigma^2$ | Population variance | Parameter |
| $\bar X$ | Sample mean statistic | Random before observation |
| $\bar x$ | Observed sample mean | Realized value |
| $S^2$ | Sample variance statistic | Denominator $n-1$ |
| $s^2$ | Observed sample variance | Realized value |
| $Z$ | Standardized mean statistic | Standard Normal exact/limiting depending assumptions |
| $\chi^2_\nu$ | Chi-square distribution | Support positive; $\nu$ df |
| $\nu$ | Degrees of freedom | $n-1$ for sample variance result |

---

# CF2 Connection Map

- §8.1 → [[4.1 Penarikan Sampel Acak]]
- §§8.3–8.4 → [[4.2 Distribusi Sampel]]
- §8.4 → [[4.3 Teorema Limit Pusat (CLT)]]
- §8.5 → [[4.2 Distribusi Sampel]]
- Sampling-distribution reasoning → prerequisite conceptual bridge menuju [[4.5 Estimasi Parameter]], [[4.7 Selang Kepercayaan]], dan [[4.8 Uji Hipotesis]]

---

# Quick Reading Review

1. Apa perbedaan population, sample, random sample, dan observed sample?
2. Mengapa Definition 8.3 menyebabkan joint law factorize menjadi product?
3. Apa perbedaan $\mu$, $\bar X$, dan $\bar x$?
4. Mengapa statistic memiliki probability distribution?
5. Apa yang dimaksud sampling distribution secara repeated-sampling interpretation?
6. Untuk Normal population, mengapa $\bar X$ juga Normal?
7. Tunjukkan bahwa $E(\bar X)=\mu$.
8. Tunjukkan bahwa $\operatorname{Var}(\bar X)=\sigma^2/n$.
9. Apa arti $\sigma/\sqrt n$ secara sampling variability?
10. State Walpole's CLT in standardized form.
11. Bedakan exact Normal result dengan CLT approximation.
12. Mengapa guideline $n\ge30$ bukan theorem boundary?
13. Apa lesson utama Figure 8.1?
14. Untuk two independent samples, mengapa variance dari $\bar X_1-\bar X_2$ menjumlahkan dua variances?
15. Tulis standardized statistic untuk difference of means dengan known variances.
16. Tulis definition sample variance yang dipakai Walpole.
17. Under assumption apa $(n-1)S^2/\sigma^2$ exact chi-square?
18. Mengapa degrees of freedom menjadi $n-1$?
19. Mengapa chi-square lower dan upper critical values tidak dapat diperoleh hanya dengan symmetry?
20. Dalam Example 8.7, apa interpretasi dari observed $\chi^2=3.26$ relative terhadap assumed $\sigma=1$?

---

# Compression Notes

## Retained in Detail

- population, sample, random sample, iid structure, dan joint factorization dari §8.1;
- statistic, sample mean, sample variance, dan computational identity yang mendukung chapter progression;
- repeated-sampling interpretation dari sampling distribution;
- exact Normal sampling distribution of $\bar X$;
- Central Limit Theorem, assumptions, Walpole's $n=30$ guideline, dan Figure 8.1 interpretation;
- representative light-bulb example dan automobile-parts inference example;
- difference-of-two-means sampling distribution;
- chi-square sampling distribution of $S^2$;
- degrees-of-freedom explanation dan representative battery-variance example.

## Condensed Aggressively

- descriptive-statistics exercise sets;
- repeated arithmetic examples yang tidak menambah sampling-distribution mechanism;
- historical anecdotes;
- full critical-value tables;
- long graphical-data-analysis discussion;
- repeated inferential narrative yang baru diformalisasi pada later chapters.

## Beyond CF2 in Walpole Mapping

Sections 8.6–8.9 diringkas singkat karena official CF2 syllabus mapping untuk Walpole hanya mencantumkan §§8.1, 8.4, dan 8.5. Materi tersebut tidak dihapus sepenuhnya agar chapter narrative tetap terlihat, tetapi tidak diperlakukan sebagai core Walpole reading untuk CF2.

---

# Source Traceability

- Primary source: Walpole, Myers, Myers & Ye, *Probability and Statistics for Engineers and Scientists*, 9th ed., Chapter 8 — `Topik 4 - [Walpole].pdf`.
- CF2 scope authority: Silabus CF2 — Walpole Chapter 8.1, 8.4, dan 8.5 tercantum sebagai official references untuk Topik 4.
- Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.
- No external sources or general-knowledge corrections were used to expand the chapter.

