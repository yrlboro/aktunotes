---
title: "Miller Chapter 11 — Interval Estimation: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 11
exam: CF2
scope: "Topik 4 — Inferensi Statistik"
tags: [CF2, Miller, IntervalEstimation, ConfidenceInterval, PivotalMethod, MeanCI, ProportionCI, VarianceCI, FDistribution]
status: condensed-textbook-note
language: id
---

# Miller Chapter 11 — Interval Estimation

> [!ABSTRACT] Tujuan chapter
> Chapter 11 bergerak dari point estimate berupa satu angka menuju pengukuran uncertainty melalui **confidence interval**. Konstruksi yang berulang dalam Miller adalah **pivotal method**:
>
> $$
> \text{sampling distribution}
> \rightarrow
> \text{parameter-free pivot}
> \rightarrow
> \text{central probability statement}
> \rightarrow
> \text{solve inequalities for parameter}
> \rightarrow
> \text{confidence interval}.
> $$
>
> Chapter ini mengembangkan interval untuk:
>
> - satu mean;
> - difference of two means;
> - satu proportion;
> - difference of two proportions;
> - satu variance;
> - ratio of two variances.

---

# 1. Introduction

`[CORE CF2]`

Point estimation memberikan satu numerical value, tetapi tidak dengan sendirinya menunjukkan:

- seberapa banyak informasi yang mendukung estimate;
- seberapa besar variability estimator;
- seberapa besar estimation error yang mungkin terjadi.

Interval estimation melengkapi point estimate dengan suatu range uncertainty.

## 1.1 Confidence interval

Miller mendefinisikan random endpoints $\hat\theta_1,\hat\theta_2$ yang memenuhi:

$$
\boxed{
P(
\hat\theta_1<\theta<\hat\theta_2
)
=
1-\alpha.
}
$$

Setelah data diamati, realized interval:

$$
\boxed{
\hat\theta_1<\theta<\hat\theta_2
}
$$

disebut:

$$
\boxed{
(1-\alpha)100\%
\text{ confidence interval}.
}
$$

- $1-\alpha$: **degree of confidence**;
- endpoints: lower dan upper confidence limits.

---

## 1.2 Confidence adalah property dari procedure

Miller menekankan interpretation yang subtle tetapi sangat penting.

Sebelum sample diamati:

$$
P(
\hat\theta_1<\theta<\hat\theta_2
)
=
1-\alpha
$$

adalah probability statement karena endpoints masih random.

Setelah sample diamati, endpoints menjadi fixed. Dalam frequentist framework, parameter juga fixed.

Jadi interpretation yang tepat adalah:

> procedure untuk membangun interval mempunyai coverage probability sebesar $1-\alpha$.

Secara conventional kita mengatakan:

> “kita $95\%$ confident bahwa interval tersebut mengandung true parameter.”

> [!IMPORTANT] Confidence bukan posterior probability
> Setelah interval aktual diperoleh, frequentist $95\%$ CI **tidak** berarti fixed parameter mempunyai probability $0.95$ berada di dalam fixed interval tersebut.

---

## 1.3 Intervals tidak unique

Beberapa interval berbeda dapat memiliki confidence level yang sama.

Perbedaannya dapat berupa:

- symmetric vs asymmetric tails;
- two-sided vs one-sided intervals;
- different pivots/statistics.

Secara umum interval yang lebih pendek lebih desirable, selama tetap mempertahankan required confidence level.

---

# 2. Estimation of Means

`[CORE CF2]`

## 2.1 Normal mean, known variance

Misalkan:

$$
X_1,\ldots,X_n
$$

merupakan random sample dari:

$$
N(\mu,\sigma^2),
$$

dengan $\sigma^2$ known.

Maka:

$$
\bar X
\sim
N\left(
\mu,\frac{\sigma^2}{n}
\right),
$$

sehingga:

$$
\boxed{
Z
=
\frac{
\bar X-\mu
}{
\sigma/\sqrt n
}
\sim
N(0,1).
}
$$

Pilih $z_{\alpha/2}$ sehingga:

$$
P(
-z_{\alpha/2}<Z<z_{\alpha/2}
)
=
1-\alpha.
$$

Solve inequality untuk $\mu$:

$$
\boxed{
\bar X
-
z_{\alpha/2}
\frac{\sigma}{\sqrt n}
<
\mu
<
\bar X
+
z_{\alpha/2}
\frac{\sigma}{\sqrt n}.
}
$$

Setelah $\bar x$ observed:

$$
\boxed{
\bar x
\pm
z_{\alpha/2}
\frac{\sigma}{\sqrt n}.
}
$$

---

## 2.2 Margin of error

Miller's Theorem 1 menyatakan bahwa error ketika menggunakan $\bar X$ untuk mengestimasi $\mu$ kurang dari:

$$
\boxed{
E
=
z_{\alpha/2}
\frac{\sigma}{\sqrt n}
}
$$

dengan probability $1-\alpha$.

Quantity ini adalah **maximum error / margin of error**.

### Textbook example

Diberikan:

$$
n=150,
\qquad
\sigma=6.2,
\qquad
99\%\text{ confidence}.
$$

Miller menggunakan:

$$
z_{0.005}=2.575.
$$

Maka:

$$
E
=
2.575
\frac{6.2}{\sqrt{150}}
\approx1.30.
$$

---

## 2.3 Known-$\sigma$ example

Diberikan:

$$
n=20,
\qquad
\bar x=64.3,
\qquad
\sigma=15.
$$

$95\%$ CI:

$$
64.3
\pm
1.96
\frac{15}{\sqrt{20}}.
$$

Hasilnya:

$$
\boxed{
57.7<\mu<70.9.
}
$$

---

## 2.4 Large-sample use

Miller mencatat bahwa berdasarkan CLT, known-$\sigma$ Normal interval dapat dipakai approximately untuk non-Normal population jika $n$ besar.

Jika $\sigma$ unknown dan $n$ besar, Miller mengizinkan mengganti $\sigma$ dengan $s$.

`[TEXTBOOK CONTEXT]` Miller menggunakan:

$$
n\ge30
$$

sebagai practical large-sample guideline.

---

## 2.5 Normal mean, unknown variance

Untuk Normal population dengan $\sigma$ unknown:

$$
\boxed{
T
=
\frac{
\bar X-\mu
}{
S/\sqrt n
}
\sim
t_{n-1}.
}
$$

Maka:

$$
\boxed{
\bar x
-
t_{\alpha/2,n-1}
\frac{s}{\sqrt n}
<
\mu
<
\bar x
+
t_{\alpha/2,n-1}
\frac{s}{\sqrt n}.
}
$$

Ini adalah Miller's small-sample CI untuk $\mu$.

### Textbook paint example

Diberikan:

$$
n=12,
\qquad
\bar x=66.3,
\qquad
s=8.4,
$$

dan:

$$
t_{0.025,11}=2.201.
$$

Interval:

$$
\boxed{
61.0<\mu<71.6.
}
$$

---

## 2.6 The pivotal method

Miller secara eksplisit mengidentifikasi method di balik construction confidence interval.

**Pivot** adalah random variable yang melibatkan:

- sample data;
- unknown parameter(s);

tetapi probability distribution-nya **tidak bergantung** pada parameter yang sedang diestimasi.

Contoh:

$$
\boxed{
Z
=
\frac{
\bar X-\mu
}{
\sigma/\sqrt n
}.
}
$$

Workflow:

```text
find pivot
   ↓
choose central probability 1-α
   ↓
write inequality
   ↓
algebraically isolate parameter
   ↓
replace random statistics by observed values
```

Logika ini mendasari hampir seluruh CI formula pada chapter ini.

---

# 3. Estimation of Differences Between Means

`[CORE CF2]`

Misalkan dua random samples independent.

## 3.1 Known population variances

Untuk independent Normal populations:

$$
\bar X_1-\bar X_2
$$

mempunyai mean:

$$
\mu_1-\mu_2
$$

dan variance:

$$
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}.
$$

Maka:

$$
\boxed{
Z
=
\frac{
(\bar X_1-\bar X_2)
-
(\mu_1-\mu_2)
}{
\sqrt{
\sigma_1^2/n_1
+
\sigma_2^2/n_2
}
}
\sim N(0,1).
}
$$

Confidence interval:

$$
\boxed{
(\bar x_1-\bar x_2)
\pm
z_{\alpha/2}
\sqrt{
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}
}.
}
$$

Miller mencatat formula yang sama dapat dipakai approximately untuk large independent samples dari non-Normal populations.

---

## 3.2 Large samples, variances unknown

Jika $n_1,n_2$ besar, replace:

$$
\sigma_1,\sigma_2
$$

dengan:

$$
s_1,s_2.
$$

Approximate CI:

$$
\boxed{
(\bar x_1-\bar x_2)
\pm
z_{\alpha/2}
\sqrt{
\frac{s_1^2}{n_1}
+
\frac{s_2^2}{n_2}
}.
}
$$

---

## 3.3 Small independent Normal samples with equal unknown variances

Jika:

$$
\sigma_1^2=\sigma_2^2=\sigma^2,
$$

Miller menggunakan pooled variance:

$$
\boxed{
S_p^2
=
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{
n_1+n_2-2
}.
}
$$

Kemudian:

$$
\boxed{
T
=
\frac{
(\bar X_1-\bar X_2)
-
(\mu_1-\mu_2)
}{
S_p
\sqrt{
1/n_1+1/n_2
}
}
\sim
t_{n_1+n_2-2}.
}
$$

Sehingga:

$$
\boxed{
(\bar x_1-\bar x_2)
\pm
t_{\alpha/2,n_1+n_2-2}
s_p
\sqrt{
\frac{1}{n_1}
+
\frac{1}{n_2}
}.
}
$$

> [!ASSUMPTION]
> Exact pooled-$t$ interval membutuhkan:
>
> - independent samples;
> - Normal populations;
> - equal population variances.

### Textbook nicotine example

Diberikan:

$$
n_1=10,\quad
\bar x_1=3.1,\quad
s_1=0.5,
$$

$$
n_2=8,\quad
\bar x_2=2.7,\quad
s_2=0.7.
$$

Miller menghitung:

$$
s_p\approx0.596
$$

dan:

$$
t_{0.025,16}=2.120.
$$

Maka:

$$
\boxed{
-0.20<\mu_1-\mu_2<1.00.
}
$$

Karena interval memuat $0$, zero difference tetap compatible dengan data pada confidence level tersebut.

---

# 4. Estimation of Proportions

`[CORE CF2]`

Misalkan:

$$
X\sim\operatorname{Binomial}(n,\theta),
$$

dengan sample proportion:

$$
\hat\theta=\frac{X}{n}.
$$

Maka:

$$
E(\hat\theta)=\theta,
$$

dan:

$$
\operatorname{Var}(\hat\theta)
=
\frac{
\theta(1-\theta)
}{
n
}.
$$

Untuk large $n$:

$$
\frac{
\hat\theta-\theta
}{
\sqrt{
\theta(1-\theta)/n
}
}
\approx N(0,1).
$$

Miller mengganti unknown standard error dengan sample-based version.

Approximate confidence interval:

$$
\boxed{
\hat\theta
\pm
z_{\alpha/2}
\sqrt{
\frac{
\hat\theta(1-\hat\theta)
}{
n
}
}.
}
$$

---

## 4.1 Textbook vaccine example

Jika:

$$
136
$$

dari:

$$
400
$$

persons mengalami discomfort:

$$
\hat\theta
=
\frac{136}{400}
=
0.34.
$$

$95\%$ CI:

$$
0.34
\pm
1.96
\sqrt{
\frac{
0.34(0.66)
}{
400
}
}.
$$

Hasil approximately:

$$
\boxed{
0.294<\theta<0.386.
}
$$

---

## 4.2 Maximum error for a proportion

Miller's Theorem 7 memberikan approximate margin of error:

$$
\boxed{
E
=
z_{\alpha/2}
\sqrt{
\frac{
\hat\theta(1-\hat\theta)
}{
n
}
}.
}
$$

Formula ini berguna untuk reporting precision maupun sample-size planning.

---

# 5. Estimation of Differences Between Proportions

`[CORE CF2]`

Untuk dua independent Binomial samples:

$$
\hat\theta_1
=
\frac{X_1}{n_1},
\qquad
\hat\theta_2
=
\frac{X_2}{n_2}.
$$

Maka:

$$
E(
\hat\theta_1-\hat\theta_2
)
=
\theta_1-\theta_2,
$$

dan:

$$
\operatorname{Var}
(
\hat\theta_1-\hat\theta_2
)
=
\frac{
\theta_1(1-\theta_1)
}{
n_1
}
+
\frac{
\theta_2(1-\theta_2)
}{
n_2
}.
$$

Untuk large samples, Miller memberikan:

$$
\boxed{
(\hat\theta_1-\hat\theta_2)
\pm
z_{\alpha/2}
\sqrt{
\frac{
\hat\theta_1(1-\hat\theta_1)
}{
n_1
}
+
\frac{
\hat\theta_2(1-\hat\theta_2)
}{
n_2
}
}.
}
$$

Ini approximate CI untuk:

$$
\theta_1-\theta_2.
$$

### Textbook voter example

Male voters:

$$
\hat\theta_1
=
\frac{132}{200}
=
0.66.
$$

Female voters:

$$
\hat\theta_2
=
\frac{90}{150}
=
0.60.
$$

Untuk $99\%$ confidence:

$$
z_{0.005}=2.575.
$$

Miller memperoleh:

$$
\boxed{
-0.074
<
\theta_1-\theta_2
<
0.194.
}
$$

Karena interval memuat $0$, zero population difference tetap plausible.

---

# 6. Estimation of Variances

`[CORE CF2]`

Untuk random sample dari Normal population:

$$
\boxed{
\frac{
(n-1)S^2
}{
\sigma^2
}
\sim
\chi^2_{n-1}.
}
$$

Berbeda dari $Z$ dan $t$, Chi-square distribution asymmetric. Karena itu lower dan upper critical values bukan negative mirror dari satu sama lain.

Mulai dari:

$$
P\left(
\chi^2_{1-\alpha/2,n-1}
<
\frac{
(n-1)S^2
}{
\sigma^2
}
<
\chi^2_{\alpha/2,n-1}
\right)
=
1-\alpha.
$$

Solve untuk $\sigma^2$:

$$
\boxed{
\frac{
(n-1)s^2
}{
\chi^2_{\alpha/2,n-1}
}
<
\sigma^2
<
\frac{
(n-1)s^2
}{
\chi^2_{1-\alpha/2,n-1}
}.
}
$$

`[NOTATION]` Miller menggunakan upper-tail Chi-square critical-value notation, sehingga subscripts dapat terlihat reversed dibanding software yang menggunakan lower-tail quantiles.

### Textbook engine example

Diberikan:

$$
n=16,
\qquad
s=2.2.
$$

Untuk $99\%$ CI:

$$
\chi^2_{0.005,15}=32.801,
$$

$$
\chi^2_{0.995,15}=4.601.
$$

Miller memperoleh:

$$
\boxed{
2.21<\sigma^2<15.78.
}
$$

Taking square roots:

$$
\boxed{
1.49<\sigma<3.97.
}
$$

> [!ASSUMPTION]
> Exact Chi-square interval untuk variance membutuhkan **Normal population**.

---

# 7. Estimation of the Ratio of Two Variances

`[CORE CF2]`

Misalkan dua independent random samples berasal dari Normal populations.

Dari Chapter 8:

$$
\boxed{
\frac{
S_1^2/\sigma_1^2
}{
S_2^2/\sigma_2^2
}
\sim
F_{n_1-1,n_2-1}.
}
$$

Solve probability inequality untuk:

$$
\frac{
\sigma_1^2
}{
\sigma_2^2
}.
$$

Miller's CI:

$$
\boxed{
\frac{s_1^2}{s_2^2}
\frac{1}{
f_{\alpha/2,n_1-1,n_2-1}
}
<
\frac{\sigma_1^2}{\sigma_2^2}
<
\frac{s_1^2}{s_2^2}
f_{\alpha/2,n_2-1,n_1-1}.
}
$$

CI untuk:

$$
\frac{\sigma_1}{\sigma_2}
$$

diperoleh dengan square root terhadap endpoints.

> [!ASSUMPTION]
> Exact validity membutuhkan:
>
> - independent samples;
> - Normal populations.

### Textbook ratio example

Dengan:

$$
s_1=0.5,
\qquad
s_2=0.7,
$$

$$
n_1=10,
\qquad
n_2=8,
$$

Miller memperoleh $98\%$ CI:

$$
\boxed{
0.076
<
\frac{\sigma_1^2}{\sigma_2^2}
<
2.862.
}
$$

Karena $1$ terdapat di dalam interval, equal variances tetap plausible.

---

# 8. The Theory in Practice

`[CF2 SUPPORTING CONTEXT]`

Miller mencatat bahwa statistical software dapat mengotomatisasi calculation confidence interval langsung dari raw data.

Namun formula tetap essential karena formula menentukan:

- assumptions yang digunakan software;
- sampling distribution yang appropriate;
- bagaimana standard error dibentuk;
- bagaimana assumption violations memengaruhi validity.

Miller juga menekankan simulation sebagai cara mempelajari model ketika formal analytic calculations sulit.

---

# Chapter Synthesis

Decision tree chapter ini:

```text
What parameter?
    ↓
What sampling distribution/pivot?
    ↓
Are assumptions exact or approximate?
    ↓
Which critical distribution?
    ↓
Build interval
```

## Mean

Known $\sigma$:

$$
\boxed{
\bar x
\pm
z_{\alpha/2}
\frac{\sigma}{\sqrt n}.
}
$$

Unknown $\sigma$, Normal population:

$$
\boxed{
\bar x
\pm
t_{\alpha/2,n-1}
\frac{s}{\sqrt n}.
}
$$

## Difference of means

Known variances / large-sample approximation:

$$
\boxed{
(\bar x_1-\bar x_2)
\pm
z_{\alpha/2}
\sqrt{
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}
}.
}
$$

Small independent Normal samples dengan equal unknown variances:

$$
\boxed{
(\bar x_1-\bar x_2)
\pm
t_{\alpha/2,n_1+n_2-2}
s_p
\sqrt{
\frac{1}{n_1}
+
\frac{1}{n_2}
}.
}
$$

## Proportion

$$
\boxed{
\hat\theta
\pm
z_{\alpha/2}
\sqrt{
\frac{
\hat\theta(1-\hat\theta)
}{
n
}
}.
}
$$

## Difference of proportions

$$
\boxed{
(\hat\theta_1-\hat\theta_2)
\pm
z_{\alpha/2}
\sqrt{
\frac{
\hat\theta_1(1-\hat\theta_1)
}{
n_1
}
+
\frac{
\hat\theta_2(1-\hat\theta_2)
}{
n_2
}
}.
}
$$

## Variance

$$
\boxed{
\frac{
(n-1)s^2
}{
\chi^2_{\alpha/2,n-1}
}
<
\sigma^2
<
\frac{
(n-1)s^2
}{
\chi^2_{1-\alpha/2,n-1}
}.
}
$$

## Ratio of variances

$$
\boxed{
\frac{s_1^2}{s_2^2}
\frac{1}{
f_{\alpha/2,n_1-1,n_2-1}
}
<
\frac{\sigma_1^2}{\sigma_2^2}
<
\frac{s_1^2}{s_2^2}
f_{\alpha/2,n_2-1,n_1-1}.
}
$$

---

# Confidence-Interval Recognition Table

| Target | Situation | Distribution |
|---|---|---|
| $\mu$ | $\sigma$ known | $Z$ |
| $\mu$ | $\sigma$ unknown, Normal | $t_{n-1}$ |
| $\mu_1-\mu_2$ | known variances / large samples | $Z$ |
| $\mu_1-\mu_2$ | small Normal samples, equal variances | pooled $t$ |
| $\theta$ | large Binomial sample | Normal approximation |
| $\theta_1-\theta_2$ | large independent Binomial samples | Normal approximation |
| $\sigma^2$ | Normal sample | $\chi^2$ |
| $\sigma_1^2/\sigma_2^2$ | independent Normal samples | $F$ |

---

# CF2 Connection Map

| Miller Chapter 11 section | CF2 topic |
|---|---|
| §11.1 Introduction | [[4.7 Selang Kepercayaan]] |
| §11.2 Estimation of Means | [[4.7 Selang Kepercayaan]] |
| §11.3 Difference Between Means | [[4.7 Selang Kepercayaan]] |
| §11.4 Proportions | [[4.7 Selang Kepercayaan]] |
| §11.5 Difference Between Proportions | [[4.7 Selang Kepercayaan]] |
| §11.6 Variances | [[4.7 Selang Kepercayaan]] |
| §11.7 Ratio of Two Variances | [[4.7 Selang Kepercayaan]] |
| §11.8 Theory in Practice | supporting statistical-computation context |

---

# Quick Reading Review

1. Mengapa point estimate tidak mengukur uncertainty?
2. Nyatakan definisi confidence interval menurut Miller.
3. Mengapa $1-\alpha$ berlaku untuk procedure, bukan fixed observed interval?
4. Mengapa confidence intervals tidak unique?
5. Turunkan known-$\sigma$ CI untuk $\mu$ dari Standard Normal pivot.
6. Apa margin of error untuk known-$\sigma$ mean?
7. Kapan Miller mengganti $Z$ dengan $t$?
8. Apa exact assumptions dari one-sample $t$ interval?
9. Apa itu pivotal quantity?
10. Mengapa variance dari difference dua independent means merupakan penjumlahan variances?
11. Kapan pooled variance appropriate?
12. Tuliskan $S_p^2$.
13. Apa assumptions pooled two-sample $t$ interval?
14. Turunkan approximate standard error dari sample proportion.
15. Mengapa proportion intervals bersifat approximate?
16. Tuliskan CI untuk difference of two proportions.
17. Mengapa variance CI menggunakan Chi-square?
18. Mengapa dua Chi-square critical values asymmetric?
19. Apa Normality assumption yang diperlukan untuk exact variance inference?
20. Distribution apa yang menghasilkan CI untuk $\sigma_1^2/\sigma_2^2$?
21. Mengapa CI difference yang memuat $0$ penting?
22. Mengapa variance-ratio CI yang memuat $1$ penting?
23. Bagaimana higher confidence memengaruhi interval length?
24. Bagaimana increasing sample size memengaruhi interval length?

---

# Compression Notes

Dipertahankan secara detail:

- confidence-interval definition dan interpretation;
- confidence vs probability distinction;
- pivotal method;
- one-mean $Z$ dan $t$ intervals;
- difference-of-means intervals;
- pooled-variance structure;
- proportion dan difference-of-proportion intervals;
- Chi-square variance interval;
- $F$-ratio interval;
- representative textbook examples;
- exact vs approximate assumptions.

Dikompres:

- repeated table lookups;
- one-sided/asymmetric variants setelah principle jelas;
- routine arithmetic;
- most exercises;
- software menu/output detail.

---

# Source Traceability

Primary source: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 11 dalam `Topik 4 - [Miller].pdf`.

Source-supported chapter structure:

1. Introduction
2. The Estimation of Means
3. The Estimation of Differences Between Means
4. The Estimation of Proportions
5. The Estimation of Differences Between Proportions
6. The Estimation of Variances
7. The Estimation of the Ratio of Two Variances
8. The Theory in Practice

Important retained source elements:

- Definition 1 — confidence interval
- Theorems 1–3 — mean error bound dan $Z/t$ intervals
- pivotal-method discussion
- Theorems 4–5 — difference of two means
- Theorems 6–8 — proportions
- Theorem 9 — variance interval
- Theorem 10 — ratio of variances
- Examples 1–12 — representative interpretation dan computation patterns

Scope authority: Silabus CF2 memasukkan Miller Chapter 11 sebagai official Topik 4 reference.

Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 11 mengubah sampling distributions menjadi uncertainty statements: identifikasi parameter-free pivot, tempatkan pivot dalam probability interval, solve untuk unknown parameter, lalu interpretasikan resulting random-interval procedure melalui confidence level-nya.**
