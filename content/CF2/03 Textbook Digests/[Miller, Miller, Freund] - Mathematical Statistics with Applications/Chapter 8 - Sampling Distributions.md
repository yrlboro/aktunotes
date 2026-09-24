---
title: "Miller Chapter 8 — Sampling Distributions: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 8
exam: CF2
scope: "Topik 4 — Inferensi Statistik"
tags: [CF2, Miller, SamplingDistributions, RandomSample, CLT, LLN, ChiSquare, StudentT, FDistribution, OrderStatistics]
status: condensed-textbook-note
language: id
---

# Miller Chapter 8 — Sampling Distributions

> [!ABSTRACT] Tujuan chapter
> Chapter 8 adalah jembatan dari probability theory menuju statistical inference. Miller memulai dari gagasan bahwa inferensi tidak didasarkan langsung pada raw observations, tetapi pada **statistics**—fungsi dari random sample yang nilainya berubah dari satu sample ke sample lain. Pertanyaan utamanya adalah:
>
> $$
> \text{apa probability distribution dari suatu statistic?}
> $$
>
> Perkembangannya:
>
> $$
> \text{population \& random sample}
> \rightarrow
> \bar X,S^2
> \rightarrow
> \text{sampling distribution of }\bar X
> \rightarrow
> \text{finite-population correction}
> \rightarrow
> \chi^2
> \rightarrow
> t
> \rightarrow
> F
> \rightarrow
> \text{order statistics}.
> $$
>
> Chapter ini menyediakan distribution machinery yang nantinya digunakan untuk estimation, confidence intervals, dan hypothesis tests.

---

# 1. Introduction

`[CORE CF2]`

Statistical inference menggunakan sample observations untuk menarik kesimpulan mengenai population tempat sample tersebut berasal.

Miller mendefinisikan **population** sebagai sekumpulan angka tempat sample diambil; distribution dari angka-angka tersebut disebut **population distribution**.

Langkah pemodelan pentingnya: sample diperlakukan secara matematis sebagai random variables.

## 1.1 Random sample from an infinite population

Kumpulan

$$
X_1,X_2,\ldots,X_n
$$

merupakan random sample dari infinite population jika variables tersebut:

1. independent;
2. identically distributed.

Jika common PMF/PDF-nya adalah $f$, maka:

$$
\boxed{
f(x_1,\ldots,x_n)
=
\prod_{i=1}^{n}f(x_i).
}
$$

> [!IMPORTANT] Random sample means iid
> “Same distribution” saja tidak cukup. Independence adalah bagian dari definisi random sample menurut Miller.

---

## 1.2 Statistic, sample mean, and sample variance

Sebuah **statistic** adalah random variable yang merupakan fungsi dari sample.

Dua statistic utama:

$$
\boxed{
\bar X
=
\frac{1}{n}\sum_{i=1}^{n}X_i
}
$$

dan

$$
\boxed{
S^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}(X_i-\bar X)^2.
}
$$

Observed realizations ditulis:

$$
\bar x
=
\frac{1}{n}\sum_{i=1}^{n}x_i,
$$

$$
s^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}(x_i-\bar x)^2.
$$

> [!IMPORTANT] Random statistic vs observed number
> Sebelum data diamati:
>
> $$
> \bar X,\ S^2
> $$
>
> adalah random variables.
>
> Setelah sample diamati:
>
> $$
> \bar x,\ s^2
> $$
>
> adalah fixed numerical values.

**Sampling distribution** adalah probability distribution dari suatu statistic di seluruh repeated random samples dengan ukuran sama dari population yang sama.

---

# 2. The Sampling Distribution of the Mean

`[CORE CF2]`

Misalkan

$$
X_1,\ldots,X_n
$$

adalah random sample dari infinite population dengan:

$$
E(X_i)=\mu,
\qquad
\operatorname{Var}(X_i)=\sigma^2.
$$

Miller menurunkan sampling result fundamental pertama.

## 2.1 Mean and variance of $\bar X$

Karena expectation linear:

$$
\begin{aligned}
E(\bar X)
&=
E\left(
\frac{1}{n}\sum_{i=1}^{n}X_i
\right)\\
&=
\frac{1}{n}\sum_{i=1}^{n}E(X_i)\\
&=
\frac{1}{n}\sum_{i=1}^{n}\mu\\
&=
\mu.
\end{aligned}
$$

Karena $X_i$ independent:

$$
\begin{aligned}
\operatorname{Var}(\bar X)
&=
\operatorname{Var}\left(
\frac{1}{n}\sum_{i=1}^{n}X_i
\right)\\
&=
\frac{1}{n^2}
\sum_{i=1}^{n}\operatorname{Var}(X_i)\\
&=
\frac{1}{n^2}
\sum_{i=1}^{n}\sigma^2\\
&=
\frac{\sigma^2}{n}.
\end{aligned}
$$

Jadi:

$$
\boxed{
E(\bar X)=\mu,
\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
}
$$

Standard deviation dari sampling distribution:

$$
\boxed{
\sigma_{\bar X}
=
\frac{\sigma}{\sqrt n},
}
$$

disebut **standard error of the mean**.

Semakin besar $n$, distribution dari $\bar X$ semakin terkonsentrasi dekat $\mu$.

---

## 2.2 Law of Large Numbers

Miller memperoleh probability bound dari Chebyshev's theorem.

Untuk setiap $c>0$:

$$
P(|\bar X-\mu|<c)
\ge
1-\frac{\sigma^2}{nc^2}.
$$

Secara ekuivalen:

$$
P(|\bar X-\mu|\ge c)
\le
\frac{\sigma^2}{nc^2}.
$$

Ketika

$$
n\to\infty,
$$

right-hand side menuju nol. Maka:

$$
\boxed{
P(|\bar X-\mu|<c)\to1.
}
$$

Ini adalah hasil **Law of Large Numbers (LLN)** Miller.

> [!IMPORTANT] Interpretation
> LLN membahas konsentrasi $\bar X$ di sekitar $\mu$.  
> LLN **tidak** mengatakan bahwa population distribution menjadi Normal.

---

## 2.3 Central Limit Theorem

Miller membuktikan CLT menggunakan MGF dengan syarat population MGF ada pada neighborhood yang diperlukan.

Jika:

- $X_1,\ldots,X_n$ membentuk random sample;
- $E(X_i)=\mu$;
- $\operatorname{Var}(X_i)=\sigma^2$;
- population MGF ada pada neighborhood yang diperlukan;

maka limiting distribution dari

$$
\boxed{
Z
=
\frac{\bar X-\mu}{\sigma/\sqrt n}
}
$$

adalah Standard Normal.

Dengan kata lain:

$$
\boxed{
\frac{\bar X-\mu}{\sigma/\sqrt n}
\overset{d}{\longrightarrow}
N(0,1).
}
$$

### 2.3.1 Structure of Miller's MGF proof

Miller memulai dengan:

$$
M_Z(t)
=
M_{\frac{\bar X-\mu}{\sigma/\sqrt n}}(t).
$$

Dengan affine-transformation rules untuk MGF dan identity:

$$
n\bar X=X_1+\cdots+X_n,
$$

independence menghasilkan power dari common population MGF.

Power-series expansion kemudian menunjukkan:

$$
\ln M_Z(t)
\to
\frac12t^2.
$$

Sehingga:

$$
M_Z(t)
\to
e^{t^2/2},
$$

yaitu MGF dari $N(0,1)$.

Reusable reasoning:

```text
standardize statistic
      ↓
write its MGF
      ↓
independence → product/power
      ↓
expand around 0
      ↓
higher-order terms vanish
      ↓
standard Normal MGF remains
```

### 2.3.2 Important interpretation warning

Miller secara eksplisit memperingatkan agar tidak mengatakan:

> “distribution dari $\bar X$ menjadi Standard Normal.”

Yang menjadi approximately Standard Normal adalah **standardized statistic**.

Untuk $n$ besar:

$$
\boxed{
\bar X
\approx
N\left(
\mu,\frac{\sigma^2}{n}
\right).
}
$$

Ketika $n\to\infty$:

$$
\operatorname{Var}(\bar X)\to0,
$$

sehingga unstandardized distribution semakin terkonsentrasi pada $\mu$.

---

## 2.4 Textbook example — vending machine

Sebuah vending machine mengeluarkan quantity dengan:

$$
\mu=200,
\qquad
\sigma=15.
$$

Untuk $n=36$:

$$
\sigma_{\bar X}
=
\frac{15}{\sqrt{36}}
=
2.5.
$$

Untuk mencari:

$$
P(\bar X\ge204),
$$

standardize:

$$
z
=
\frac{204-200}{2.5}
=
1.6.
$$

Dengan Normal approximation, Miller memperoleh:

$$
\boxed{
P(\bar X\ge204)\approx0.0548.
}
$$

---

## 2.5 Exact Normal sampling distribution

Jika population itu sendiri Normal:

$$
X_i\sim N(\mu,\sigma^2),
$$

maka large-sample approximation tidak diperlukan.

Untuk setiap $n$:

$$
\boxed{
\bar X
\sim
N\left(
\mu,\frac{\sigma^2}{n}
\right).
}
$$

Miller membuktikannya melalui MGF dari Normal random variable.

> [!IMPORTANT] Exact vs approximate
> - Normal population: exact untuk setiap $n$.
> - Non-Normal population: CLT approximation untuk $n$ yang cukup besar.

Miller menggunakan $n\ge30$ sebagai practical textbook rule untuk approximation tanpa terlalu mempersoalkan shape population.

`[TEXTBOOK CONTEXT]` Rule 30 observations adalah practical guideline, bukan theorem boundary.

---

# 3. Sampling Distribution of the Mean: Finite Populations

`[CORE CF2]`

Miller selanjutnya membahas random sampling **without replacement** dari finite population:

$$
\{c_1,c_2,\ldots,c_N\}.
$$

Berbeda dari iid sampling dari infinite population, draws di sini dependent.

---

## 3.1 Random sample without replacement

Untuk ordered sample:

$$
(X_1,\ldots,X_n),
$$

setiap possible ordered $n$-tuple yang terdiri atas distinct population elements mempunyai probability:

$$
\boxed{
\frac{1}{
N(N-1)\cdots(N-n+1)
}.
}
$$

Secara ekuivalen, setiap unordered subset berukuran $n$ mempunyai probability:

$$
\boxed{
\frac{1}{\binom{N}{n}}.
}
$$

Setiap individual draw $X_r$ mempunyai discrete Uniform marginal distribution pada $N$ population values.

---

## 3.2 Finite-population mean and variance

Miller mendefinisikan:

$$
\mu
=
\frac{1}{N}\sum_{i=1}^{N}c_i,
$$

$$
\sigma^2
=
\frac{1}{N}
\sum_{i=1}^{N}(c_i-\mu)^2.
$$

Keduanya adalah population quantities, bukan sample statistics.

---

## 3.3 Dependence from sampling without replacement

Untuk dua sample positions yang berbeda, $r\ne s$, Miller menurunkan:

$$
\boxed{
\operatorname{Cov}(X_r,X_s)
=
-\frac{\sigma^2}{N-1}.
}
$$

Negative covariance mencerminkan without-replacement mechanism: memilih satu population value mengubah kumpulan value yang masih tersedia untuk draws berikutnya.

---

## 3.4 Mean and variance of finite-population sample mean

Walaupun observations dependent:

$$
\boxed{
E(\bar X)=\mu.
}
$$

Dengan memasukkan covariance terms:

$$
\boxed{
\operatorname{Var}(\bar X)
=
\frac{\sigma^2}{n}
\frac{N-n}{N-1}.
}
$$

Faktor:

$$
\boxed{
\frac{N-n}{N-1}
}
$$

adalah finite-population correction untuk **variance**.

Untuk standard error:

$$
\boxed{
\sigma_{\bar X}
=
\frac{\sigma}{\sqrt n}
\sqrt{
\frac{N-n}{N-1}
}.
}
$$

Miller mencatat bahwa jika sample tidak lebih dari sekitar $5\%$ dari finite population, infinite-population approximation sering digunakan.

`[TEXTBOOK CONTEXT]` Ini juga merupakan practical rule of thumb.

---

# 4. The Chi-Square Distribution

`[CORE CF2]`

Miller membangun sampling distribution yang dibutuhkan untuk inference terhadap variance dari Normal population.

## 4.1 Definition and basic properties

Chi-square random variable dengan $\nu$ degrees of freedom mempunyai density:

$$
\boxed{
f(x)
=
\frac{
1
}{
2^{\nu/2}\Gamma(\nu/2)
}
x^{\nu/2-1}e^{-x/2},
\qquad x>0.
}
$$

Ini adalah special case Gamma dengan:

$$
\alpha=\frac{\nu}{2},
\qquad
\beta=2.
$$

Maka:

$$
\boxed{
E(X)=\nu,
}
$$

$$
\boxed{
\operatorname{Var}(X)=2\nu,
}
$$

dan MGF:

$$
\boxed{
M_X(t)
=
(1-2t)^{-\nu/2}.
}
$$

---

## 4.2 Squared Standard Normal

Jika

$$
Z\sim N(0,1),
$$

maka:

$$
\boxed{
Z^2\sim\chi_1^2.
}
$$

Lebih umum, jika

$$
Z_1,\ldots,Z_n
$$

adalah independent Standard Normal variables,

$$
\boxed{
\sum_{i=1}^{n}Z_i^2
\sim
\chi_n^2.
}
$$

Miller membuktikannya dengan multiplication of MGFs.

---

## 4.3 Additivity of independent chi-square variables

Jika independent:

$$
X_i\sim\chi_{\nu_i}^2,
$$

maka:

$$
\boxed{
\sum_iX_i
\sim
\chi_{\nu_1+\cdots+\nu_n}^2.
}
$$

Degrees of freedom dijumlahkan.

---

## 4.4 Sampling distribution of $S^2$ from a Normal population

Ini adalah salah satu theorem terpenting dalam chapter.

Jika:

$$
X_1,\ldots,X_n
$$

merupakan random sample dari:

$$
N(\mu,\sigma^2),
$$

maka:

1. $\bar X$ dan $S^2$ independent;
2.
   $$
   \boxed{
   \frac{(n-1)S^2}{\sigma^2}
   \sim
   \chi_{n-1}^2.
   }
   $$

Miller menggunakan identity:

$$
\sum_{i=1}^{n}(X_i-\mu)^2
=
\sum_{i=1}^{n}(X_i-\bar X)^2
+
n(\bar X-\mu)^2.
$$

Bagi dengan $\sigma^2$:

$$
\sum_{i=1}^{n}
\left(
\frac{X_i-\mu}{\sigma}
\right)^2
=
\frac{(n-1)S^2}{\sigma^2}
+
\left(
\frac{\bar X-\mu}{\sigma/\sqrt n}
\right)^2.
$$

Left-hand side:

$$
\chi_n^2.
$$

Final term:

$$
\chi_1^2.
$$

Dengan independence, remaining term harus:

$$
\chi_{n-1}^2.
$$

> [!IMPORTANT] Degrees of freedom intuition
> Estimating $\bar X$ menimbulkan satu linear constraint:
>
> $$
> \sum_{i=1}^{n}(X_i-\bar X)=0.
> $$
>
> Karena itu squared deviations hanya mengandung $n-1$ independent pieces of information.

---

## 4.5 Consequences for $S^2$

Dari mean Chi-square:

$$
E\left(
\frac{(n-1)S^2}{\sigma^2}
\right)
=
n-1,
$$

sehingga:

$$
\boxed{
E(S^2)=\sigma^2.
}
$$

Jadi $S^2$ unbiased untuk $\sigma^2$.

Dari variance Chi-square:

$$
\operatorname{Var}\left(
\frac{(n-1)S^2}{\sigma^2}
\right)
=
2(n-1),
$$

diperoleh:

$$
\boxed{
\operatorname{Var}(S^2)
=
\frac{2\sigma^4}{n-1}
}
$$

untuk Normal sampling.

---

# 5. The $t$ Distribution

`[CORE CF2]`

Ketika $\sigma$ unknown, menggantinya dengan random statistic $S$ mengubah exact distribution dari standardized mean.

Miller mendefinisikan Student's $t$ melalui independent variables:

$$
Z\sim N(0,1)
$$

dan

$$
V\sim\chi_\nu^2.
$$

Kemudian:

$$
\boxed{
T
=
\frac{Z}{
\sqrt{V/\nu}
}
\sim
t_\nu.
}
$$

---

## 5.1 Sampling result for a Normal population

Dari hasil sebelumnya:

$$
Z
=
\frac{\bar X-\mu}{\sigma/\sqrt n}
\sim N(0,1),
$$

dan:

$$
V
=
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi_{n-1}^2.
$$

Selain itu, $Z$ dan $V$ independent.

Maka:

$$
\boxed{
T
=
\frac{\bar X-\mu}{S/\sqrt n}
\sim
t_{n-1}.
}
$$

Ini exact jika population Normal.

---

## 5.2 Shape

$t$ density:

- symmetric around $0$;
- mempunyai heavier tails dibanding $N(0,1)$;
- mendekati Standard Normal ketika $\nu$ meningkat.

Heavier tails mencerminkan extra uncertainty karena $\sigma$ diestimasi menggunakan $S$.

> [!IMPORTANT] Distribution choice
> Untuk exact small-sample inference dari Normal population:
>
> - known $\sigma$:
>   $$
>   Z=\frac{\bar X-\mu}{\sigma/\sqrt n};
>   $$
> - unknown $\sigma$:
>   $$
>   T=\frac{\bar X-\mu}{S/\sqrt n}.
>   $$

---

# 6. The $F$ Distribution

`[CORE CF2]`

$F$ distribution dibangun dari ratio dua independent Chi-square variables setelah masing-masing diskalakan oleh degrees of freedom.

Jika:

$$
U\sim\chi_{\nu_1}^2,
\qquad
V\sim\chi_{\nu_2}^2
$$

independently, maka:

$$
\boxed{
F
=
\frac{U/\nu_1}{V/\nu_2}
\sim
F_{\nu_1,\nu_2}.
}
$$

Distribution bersifat positif dan umumnya right-skewed.

---

## 6.1 Reciprocal property

Jika:

$$
F\sim F_{\nu_1,\nu_2},
$$

maka:

$$
\boxed{
\frac{1}{F}
\sim
F_{\nu_2,\nu_1}.
}
$$

Relationship ini berguna untuk mengganti orientation numerator/denominator.

---

## 6.2 Ratio of two sample variances

Misalkan dua independent random samples berasal dari Normal populations:

$$
N(\mu_1,\sigma_1^2),
\qquad
N(\mu_2,\sigma_2^2),
$$

dengan sizes $n_1,n_2$.

Maka:

$$
\frac{(n_1-1)S_1^2}{\sigma_1^2}
\sim
\chi_{n_1-1}^2,
$$

$$
\frac{(n_2-1)S_2^2}{\sigma_2^2}
\sim
\chi_{n_2-1}^2.
$$

Karena itu:

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

> [!WARNING] Common setup error
> Secara umum:
>
> $$
> \frac{S_1^2}{S_2^2}
> $$
>
> sendiri bukan standard $F$ variable kecuali relevant population variance ratio telah diperhitungkan.

---

# 7. Order Statistics

`[CORE CF2 / SUPPORTING]`

Miller menutup theoretical development dengan statistics yang diperoleh dari mengurutkan random sample.

Misalkan:

$$
X_1,\ldots,X_n
$$

iid dari continuous distribution dengan CDF $F$ dan PDF $f$.

Urutkan:

$$
X_{(1)}
<
X_{(2)}
<
\cdots
<
X_{(n)}.
$$

Ini disebut **order statistics**.

- $X_{(1)}$: sample minimum;
- $X_{(n)}$: sample maximum;
- $X_{(r)}$: $r$-th smallest observation.

---

## 7.1 Density of the minimum

Untuk:

$$
Y=X_{(1)},
$$

$$
P(Y>y)
=
P(X_1>y,\ldots,X_n>y).
$$

Dengan independence:

$$
P(Y>y)
=
[1-F(y)]^n.
$$

Maka:

$$
F_Y(y)
=
1-[1-F(y)]^n.
$$

Diferensiasi memberikan:

$$
\boxed{
f_{X_{(1)}}(y)
=
n[1-F(y)]^{n-1}f(y).
}
$$

---

## 7.2 Density of the maximum

Untuk:

$$
Y=X_{(n)},
$$

$$
P(Y\le y)
=
P(X_1\le y,\ldots,X_n\le y)
=
[F(y)]^n.
$$

Dengan demikian:

$$
\boxed{
f_{X_{(n)}}(y)
=
n[F(y)]^{n-1}f(y).
}
$$

---

## 7.3 General $r$-th order statistic

Untuk $X_{(r)}=x$, secara konseptual:

- tepat $r-1$ observations berada di bawah $x$;
- satu observation berada di sekitar $x$;
- $n-r$ observations berada di atas $x$.

Miller memperoleh:

$$
\boxed{
f_{X_{(r)}}(x)
=
\frac{
n!
}{
(r-1)!(n-r)!
}
[F(x)]^{r-1}
[1-F(x)]^{n-r}
f(x).
}
$$

Combinatorial coefficient menghitung penempatan sample observations ke tiga role tersebut.

---

# 8. The Theory in Practice

`[CF2 SUPPORTING CONTEXT]`

Section akhir menghubungkan sampling distributions dengan statistical work dalam praktik.

Pesan umumnya:

```text
population model
      ↓
sampling mechanism
      ↓
statistic
      ↓
sampling distribution
      ↓
probability statement
      ↓
statistical inference
```

Pergeseran konseptual utamanya adalah bahwa observed statistic tidak boleh dinilai hanya dari angka aktualnya. Maknanya bergantung pada **seberapa variable statistic tersebut di bawah repeated sampling**.

---

# Chapter Synthesis

Chapter 8 menyediakan exact dan asymptotic probability machinery untuk inference berikutnya.

## Sample mean

Infinite/iid population:

$$
\boxed{
E(\bar X)=\mu,
\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
}
$$

Finite population without replacement:

$$
\boxed{
\operatorname{Var}(\bar X)
=
\frac{\sigma^2}{n}
\frac{N-n}{N-1}.
}
$$

## LLN

$$
\boxed{
P(|\bar X-\mu|<c)\to1.
}
$$

## CLT

$$
\boxed{
\frac{\bar X-\mu}{\sigma/\sqrt n}
\overset{d}{\longrightarrow}
N(0,1).
}
$$

## Exact Normal sample mean

$$
\boxed{
\bar X
\sim
N\left(
\mu,\frac{\sigma^2}{n}
\right)
}
$$

jika population Normal.

## Sample variance

Untuk Normal sample:

$$
\boxed{
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi_{n-1}^2.
}
$$

## Unknown-$\sigma$ standardized mean

$$
\boxed{
\frac{\bar X-\mu}{S/\sqrt n}
\sim
t_{n-1}.
}
$$

## Ratio of variances

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

---

# Key Relationships

## Sampling variability shrinks with $n$

$$
\sigma_{\bar X}
=
\frac{\sigma}{\sqrt n}.
$$

Menggandakan sample size tidak membagi dua standard error; standard error berskala:

$$
n^{-1/2}.
$$

## Normality assumption controls exactness

- $\bar X$ dari Normal population: exact Normal.
- Result Chi-square untuk $S^2$: membutuhkan Normal population.
- Student's $t$: exact Normal-sample result.
- $F$ variance-ratio result: exact untuk independent Normal samples.

## Degrees of freedom

$$
S^2:\quad n-1,
$$

$$
t:\quad n-1,
$$

$$
F:\quad (n_1-1,n_2-1).
$$

---

# Distribution / Model Snapshot

| Statistical object | Distribution / result | Conditions |
|---|---|---|
| $\bar X$ | mean $\mu$, variance $\sigma^2/n$ | iid, finite variance |
| standardized $\bar X$ | asymptotic $N(0,1)$ | CLT conditions |
| $\bar X$ | exact Normal | Normal population |
| $(n-1)S^2/\sigma^2$ | $\chi^2_{n-1}$ | Normal sample |
| $(\bar X-\mu)/(S/\sqrt n)$ | $t_{n-1}$ | Normal sample |
| standardized variance ratio | $F_{n_1-1,n_2-1}$ | independent Normal samples |
| $X_{(r)}$ | order-statistic density | iid continuous sample |

---

# CF2 Connection Map

| Miller Chapter 8 section | CF2 topic |
|---|---|
| §8.1 Introduction | [[4.1 Penarikan Sampel Acak]] |
| §8.2 Sampling Distribution of the Mean | [[4.2 Distribusi Sampel]], [[4.3 Teorema Limit Pusat (CLT)]], [[4.4 Hukum Bilangan Besar (LLN)]] |
| §8.3 Finite Populations | [[4.1 Penarikan Sampel Acak]], [[4.2 Distribusi Sampel]] |
| §8.4 Chi-Square | [[4.2 Distribusi Sampel]], prerequisite for [[4.7 Selang Kepercayaan]] and [[4.8 Uji Hipotesis]] |
| §8.5 Student's $t$ | [[4.2 Distribusi Sampel]], prerequisite for inference on means |
| §8.6 $F$ | [[4.2 Distribusi Sampel]], prerequisite for variance-ratio inference |
| §8.7 Order Statistics | supporting distribution-of-statistics theory |
| §8.8 Theory in Practice | inferential context |

---

# Quick Reading Review

1. Mengapa random sample dari infinite population harus iid?
2. Bedakan $\bar X$ dengan $\bar x$.
3. Turunkan $E(\bar X)=\mu$.
4. Mengapa independence penting untuk $\operatorname{Var}(\bar X)=\sigma^2/n$?
5. Apa yang dikatakan LLN tetapi tidak dikatakan CLT?
6. Apa standardized quantity yang tepat dalam CLT Miller?
7. Mengapa tidak tepat mengatakan “$\bar X$ menjadi Standard Normal”?
8. Kapan distribution dari $\bar X$ exact Normal?
9. Mengapa draws without replacement mempunyai negative correlation?
10. Jelaskan finite-population correction secara konseptual.
11. Mengapa $(n-1)S^2/\sigma^2$ mempunyai $n-1$, bukan $n$, degrees of freedom?
12. Theorem Normal-sample apa yang memungkinkan Student's $t$?
13. Mengapa mengganti $\sigma$ dengan $S$ menghasilkan $t$, bukan $Z$?
14. Nyatakan construction dari $F$ variable.
15. Syarat exact apa yang diperlukan agar sample-variance ratio mengikuti $F$ distribution?
16. Turunkan CDF dari maximum order statistic.
17. Mengapa general order-statistic density mempunyai multinomial-style combinatorial coefficient?

---

# Compression Notes

Dipertahankan secara detail:

- definitions population/random sample/statistic;
- mean dan variance dari $\bar X$;
- LLN probability bound;
- CLT statement dan struktur MGF proof;
- exact Normal sampling distribution;
- finite-population covariance dan correction;
- Chi-square construction dan additivity;
- Normal-sample decomposition untuk $S^2$;
- $t$ dan $F$ constructions;
- representative order-statistic derivations;
- assumptions untuk exact results.

Dikompres:

- long table-lookup instructions;
- routine numerical exercises;
- repeated calculations dengan standardization mechanics yang sama;
- software simulation exercises;
- bibliographic/historical detail;
- long proof details setelah reusable mechanism sudah jelas.

---

# Source Traceability

Primary source: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 8 dalam `Topik 4 - [Miller].pdf`.

Key source locations retained:

- §1 — population, random sample, statistic, $\bar X$, $S^2$
- §2 Theorems 1–4 — sampling mean moments, LLN, CLT, exact Normal result
- §3 Theorems 5–6 — finite-population covariance and correction
- §4 Theorems 7–11 — Chi-square properties dan Normal-sample variance result
- §5 — Student's $t$
- §6 — $F$ distribution dan variance-ratio construction
- §7 — order statistics
- §8 — practical interpretation

Scope authority: Silabus CF2 lists Miller Chapters 8–13 (dengan batas section pada chapter berikutnya) sebagai official Topik 4 references.

Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 8 mengubah random sample menjadi inferential machinery dengan menurunkan distributions dari $\bar X$, $S^2$, standardized means, variance ratios, dan order statistics—serta menunjukkan secara tepat kapan Normal, $\chi^2$, $t$, dan $F$ mengatur sample statistics.**
