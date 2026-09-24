---
type: "condensed-book"
exam: "CF2"
book: "Introduction to Mathematical Statistics, 8th Edition"
author: "Robert V. Hogg, Joseph W. McKean, Allen T. Craig"
chapter: "3"
chapter_title: "Some Special Distributions"
cf2_topics: ["2.5", "2.6", "3.7"]
cf2_relevance: "Very High"
source_scope: "Chapter 3, Sections 3.1–3.7; Sections 3.1–3.6 are official CF2 Topik 2 references and §3.7 is an official Topik 3 reference"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggMcKeanCraig, SpecialDistributions, Binomial, Poisson, Gamma, Normal, tDistribution, FDistribution, MixtureDistribution]
date_created: "2026-08-29"
status: "study-note"
---
# Hogg, McKean & Craig — Chapter 3: Some Special Distributions

> [!ABSTRACT] Chapter in One View
> Chapter 3 mengumpulkan probability models yang menjadi building blocks untuk calculation dan inference: **Bernoulli/Binomial, Negative Binomial, Geometric, Multinomial, Hypergeometric, Poisson, Gamma, Exponential, Chi-square, Beta, Normal, Multivariate Normal, Student's $t$, $F$, serta mixture/compound distributions**. Penulis tidak hanya memberikan formula; setiap family dibangun dari stochastic mechanism, support, PMF/PDF, MGF atau transformation, moments, dan hubungan dengan distribusi lain. Untuk CF2, chapter ini merupakan pusat **distribution recognition + parameterization discipline**. Kesalahan paling berbahaya adalah memilih distribution yang mekanismenya tidak sesuai atau menggunakan convention parameter yang berbeda—khususnya Negative Binomial/Geometric dan Gamma. Chapter ditutup dengan mixture distributions yang menunjukkan bagaimana random parameter menghasilkan unconditional distribution melalui marginalization.

---

# 1. Chapter Map & CF2 Scope

| Section | Main Content | CF2 Relevance |
|---|---|---|
| 3.1 | Binomial, Negative Binomial, Geometric, Multinomial, Hypergeometric | `[CORE CF2]` |
| 3.2 | Poisson distribution dan motivasi Poisson process | `[CORE CF2]` |
| 3.3 | Gamma, Exponential, Chi-square, Beta | `[CORE CF2]` |
| 3.4 | Normal distribution | `[CORE CF2]` |
| 3.5 | Bivariate and multivariate normal | `[CORE/SUPPORTING CF2]` |
| 3.6 | Student's $t$, $F$, Student's theorem | `[CORE CF2]` |
| 3.7 | Mixture / compound distributions | `[CORE CF2 — Topik 3.7]` |

Catatan silabus terkait:

- [[2.5 Distribusi Diskrit Umum]]
- [[2.6 Distribusi Kontinu Umum]]
- [[2.3 Fungsi Pembangkit]]
- [[2.4 Transformasi Variabel Acak Univariat]]
- [[3.5 Independensi dan Korelasi]]
- [[3.7 Distribusi Majemuk (Compound Distribution)]]

---

# 2. Section 3.1 — Binomial and Related Distributions

## 2.1 Bernoulli distribution

Eksperimen Bernoulli memiliki dua outcome yang saling eksklusif dan mencakup seluruh kemungkinan, biasanya disebut **success** dan **failure**, dengan probability success konstan $p$.

Definisikan

$$
X=
\begin{cases}
1, & \text{success},\\
0, & \text{failure}.
\end{cases}
$$

Maka

$$
p_X(x)=p^x(1-p)^{1-x},
\qquad x=0,1.
$$

Moments:

$$
E[X]=p,
\qquad
\operatorname{Var}(X)=p(1-p).
$$

Bernoulli menjadi unit dasar untuk membangun Binomial distribution.

---

## 2.2 Binomial distribution

Sebuah **sequence of Bernoulli trials** memerlukan:

1. jumlah trial tetap sebanyak $n$;
2. dua outcome pada setiap trial;
3. setiap trial independent;
4. success probability yang sama, $p$, pada setiap trial.

Jika $X$ menghitung jumlah success dalam $n$ trials,

$$
X\sim \operatorname{Binomial}(n,p),
$$

dengan support

$$
x=0,1,\ldots,n
$$

dan PMF

$$
P(X=x)
=
\binom{n}{x}p^x(1-p)^{n-x}.
$$

### Why the coefficient appears

Untuk tepat $x$ success:

- setiap susunan tertentu mempunyai probability

$$
p^x(1-p)^{n-x};
$$

- terdapat

$$
\binom{n}{x}
$$

cara menempatkan $x$ success.

Karena itu,

$$
P(X=x)
=
\binom{n}{x}p^x(1-p)^{n-x}.
$$

MGF:

$$
M_X(t)
=
[(1-p)+pe^t]^n.
$$

Sehingga

$$
E[X]=np,
\qquad
\operatorname{Var}(X)=np(1-p).
$$

### [TEXTBOOK EXAMPLE] At least one success

Untuk $X\sim\operatorname{Binomial}(n,p)$,

$$
P(X\ge1)
=
1-P(X=0)
=
1-(1-p)^n.
$$

Contoh ini menunjukkan mengapa complement sering lebih efisien daripada menjumlahkan banyak probability.

---

## 2.3 Weak-law connection

Untuk $Y\sim\operatorname{Binomial}(n,p)$, relative frequency $Y/n$ memenuhi

$$
E\left[\frac{Y}{n}\right]=p,
\qquad
\operatorname{Var}\left(\frac{Y}{n}\right)
=
\frac{p(1-p)}{n}.
$$

Dengan Chebyshev's inequality,

$$
P\left(
\left|\frac{Y}{n}-p\right|
\ge\varepsilon
\right)
\le
\frac{p(1-p)}{n\varepsilon^2}
\to0.
$$

Jadi

$$
\frac{Y}{n}\xrightarrow{P}p.
$$

`[CF2 SUPPORTING CONTEXT]` Ini merupakan bentuk konkret Weak Law of Large Numbers.

---

# 3. Negative Binomial and Geometric

## 3.1 Negative Binomial parameterization

`[PARAMETERIZATION]`

Source mendefinisikan $Y$ sebagai:

> **jumlah failure sebelum success ke-$r$**

dengan $r$ tetap dan setiap Bernoulli trial mempunyai success probability $p$.

Support:

$$
y=0,1,2,\ldots
$$

PMF:

$$
P(Y=y)
=
\binom{y+r-1}{r-1}
p^r(1-p)^y.
$$

Reasoning:

- pada $y+r-1$ trials pertama harus terdapat tepat $r-1$ success;
- trial ke-$(y+r)$ harus merupakan success.

MGF:

$$
M_Y(t)
=
p^r[1-(1-p)e^t]^{-r},
$$

untuk

$$
t<-\log(1-p).
$$

> [!DANGER] Parameterization Trap
> Sebagian buku mendefinisikan Negative Binomial sebagai **jumlah trial hingga success ke-$r$**. Hogg–McKean–Craig di sini menggunakan **jumlah failure sebelum success ke-$r$**. Karena itu support dimulai dari $0$, bukan dari $r$.

---

## 3.2 Geometric distribution

Ambil $r=1$. Maka $Y$ adalah jumlah failure sebelum success pertama:

$$
P(Y=y)
=
p(1-p)^y,
\qquad
y=0,1,2,\ldots
$$

dan

$$
M_Y(t)
=
p[1-(1-p)e^t]^{-1}.
$$

`[PARAMETERIZATION]` Support dimulai dari $0$. Jika source lain menghitung **nomor trial saat success pertama terjadi**, support dimulai dari $1$.

---

# 4. Multinomial Distribution

Binomial dapat digeneralisasi dari 2 kategori menjadi $k$ kategori.

Misalkan setiap dari $n$ independent trials menghasilkan salah satu dari

$$
C_1,\ldots,C_k,
$$

dengan probabilities

$$
p_1,\ldots,p_k,
\qquad
\sum_{i=1}^k p_i=1.
$$

Misalkan $X_i$ menghitung banyaknya hasil pada kategori $C_i$. Karena

$$
X_1+\cdots+X_k=n,
$$

hanya $k-1$ count yang bebas.

Joint PMF:

$$
P(X_1=x_1,\ldots,X_k=x_k)
=
\frac{n!}{x_1!\cdots x_k!}
p_1^{x_1}\cdots p_k^{x_k},
$$

dengan

$$
x_i\ge0,
\qquad
\sum_i x_i=n.
$$

Joint MGF:

$$
M(t_1,\ldots,t_{k-1})
=
\left(
p_1e^{t_1}
+\cdots+
p_{k-1}e^{t_{k-1}}
+p_k
\right)^n.
$$

Setiap marginal count berdistribusi Binomial:

$$
X_i\sim\operatorname{Binomial}(n,p_i).
$$

Untuk dua category counts,

$$
\operatorname{Cov}(X_i,X_j)
=
-np_ip_j,
\qquad i\neq j.
$$

Negative covariance wajar secara struktural karena total count $n$ tetap: semakin banyak observation masuk ke satu kategori, semakin sedikit yang tersisa untuk kategori lain.

### Conditional multinomial structure

Jika dikondisikan pada $X_1=x_1$, maka $n-x_1$ trials yang tersisa didistribusikan kembali ke kategori lain. Misalnya,

$$
X_2\mid X_1=x_1
\sim
\operatorname{Binomial}\left(
n-x_1,
\frac{p_2}{1-p_1}
\right).
$$

Probability perlu **dinormalisasi ulang** setelah category 1 dikeluarkan.

---

# 5. Hypergeometric Distribution

Hypergeometric muncul pada sampling dari finite population **tanpa replacement**.

Population:

- total $N$ objek;
- $D$ objek termasuk target type;
- sample size $n$;
- $X=$ jumlah target objects di dalam sample.

PMF:

$$
P(X=x)
=
\frac{
\binom{D}{x}
\binom{N-D}{n-x}
}{
\binom{N}{n}
}.
$$

Support tidak selalu sekadar $0,\ldots,n$; harus memenuhi feasibility:

$$
\max(0,n-(N-D))
\le x
\le
\min(n,D).
$$

Mean:

$$
E[X]
=
n\frac{D}{N}.
$$

Variance:

$$
\operatorname{Var}(X)
=
n\frac{D}{N}
\left(
1-\frac{D}{N}
\right)
\frac{N-n}{N-1}.
$$

Faktor

$$
\frac{N-n}{N-1}
$$

disebut finite-population correction.

> [!WARNING] Binomial vs Hypergeometric
> - with replacement / independent trials $\rightarrow$ Binomial;
> - without replacement dari finite population $\rightarrow$ Hypergeometric.

---

# 6. Section 3.2 — Poisson Distribution

## 6.1 Definition

Untuk $\lambda>0$,

$$
X\sim\operatorname{Poisson}(\lambda)
$$

mempunyai support

$$
x=0,1,2,\ldots
$$

dan PMF

$$
P(X=x)
=
e^{-\lambda}
\frac{\lambda^x}{x!}.
$$

MGF:

$$
M_X(t)
=
\exp\{\lambda(e^t-1)\}.
$$

Sehingga

$$
E[X]=\lambda,
\qquad
\operatorname{Var}(X)=\lambda.
$$

Kesamaan mean dan variance merupakan salah satu fingerprint numerik penting dari Poisson distribution.

---

## 6.2 Poisson-process motivation

Textbook menurunkan Poisson count dari tiga asumsi small interval untuk counting process $X_t$:

1. probability tepat satu event pada interval kecil $h$ adalah

$$
\lambda h+o(h);
$$

2. probability dua atau lebih event adalah

$$
o(h);
$$

3. count pada nonoverlapping intervals bersifat independent.

Hasilnya,

$$
X_t\sim\operatorname{Poisson}(\lambda t).
$$

Jadi $\lambda$ adalah **event rate per unit exposure**, sedangkan exposure $t$ mengalikan parameter Poisson.

> [!IMPORTANT] Parameter Mapping
> Jika rate adalah $\lambda$ per unit time, maka selama exposure $t$:
>
> **Poisson parameter = $\lambda t$.**

---

## 6.3 Additivity

Jika

$$
X_i\sim\operatorname{Poisson}(\lambda_i)
$$

saling independent, maka

$$
\sum_{i=1}^nX_i
\sim
\operatorname{Poisson}
\left(
\sum_{i=1}^n\lambda_i
\right).
$$

Pembuktian paling bersih menggunakan product dari MGFs.

---

# 7. Section 3.3 — Gamma, Chi-square, Beta

## 7.1 Gamma function

Untuk $\alpha>0$,

$$
\Gamma(\alpha)
=
\int_0^\infty
y^{\alpha-1}e^{-y}\,dy.
$$

Recursion:

$$
\Gamma(\alpha)
=
(\alpha-1)\Gamma(\alpha-1).
$$

Untuk positive integer,

$$
\Gamma(\alpha)
=
(\alpha-1)!.
$$

---

## 7.2 Gamma distribution

`[PARAMETERIZATION]`

Hogg–McKean–Craig menggunakan parameterisasi **shape-scale**:

$$
X\sim\Gamma(\alpha,\beta),
$$

dengan

$$
\alpha>0
$$

sebagai shape dan

$$
\beta>0
$$

sebagai scale.

PDF:

$$
f_X(x)
=
\frac{1}{\Gamma(\alpha)\beta^\alpha}
x^{\alpha-1}e^{-x/\beta},
\qquad x>0.
$$

MGF:

$$
M_X(t)
=
(1-\beta t)^{-\alpha},
\qquad
t<\frac{1}{\beta}.
$$

Mean dan variance:

$$
E[X]=\alpha\beta,
$$

$$
\operatorname{Var}(X)=\alpha\beta^2.
$$

> [!DANGER] Gamma Parameterization
> Jangan mengganti $e^{-x/\beta}$ menjadi $e^{-\beta x}$ tanpa mengubah arti parameter $\beta$. Di sini $\beta$ adalah **scale**, bukan rate.

---

## 7.3 Hazard function

Untuk failure-time variable $X$ dengan PDF $f$ dan CDF $F$,

$$
r(x)
=
\frac{f(x)}
{1-F(x)}.
$$

Secara ekuivalen,

$$
r(x)
=
-\frac{d}{dx}
\log[1-F(x)].
$$

Karena itu survival function dapat dibangun kembali dari hazard:

$$
1-F(x)
=
\exp\left(
-\int r(x)\,dx+c
\right),
$$

dengan boundary condition menentukan $c$.

---

## 7.4 Exponential distribution

Constant hazard

$$
r(x)=\frac{1}{\beta}
$$

menghasilkan

$$
f(x)
=
\frac{1}{\beta}e^{-x/\beta},
\qquad x>0.
$$

Jadi

$$
X\sim\Gamma(1,\beta).
$$

Mean dan variance:

$$
E[X]=\beta,
\qquad
\operatorname{Var}(X)=\beta^2.
$$

Ini adalah convention Exponential dengan **scale $\beta$**.

---

## 7.5 Gamma additivity

Jika independent random variables mempunyai common scale,

$$
X_i\sim\Gamma(\alpha_i,\beta),
$$

maka

$$
\sum_iX_i
\sim
\Gamma\left(
\sum_i\alpha_i,
\beta
\right).
$$

Hasil ini langsung mengikuti perkalian MGF.

---

# 8. Chi-square Distribution

Chi-square adalah special case dari Gamma:

$$
X\sim\chi^2(r)
\iff
X\sim
\Gamma\left(
\frac{r}{2},2
\right).
$$

Sehingga

$$
E[X]=r,
\qquad
\operatorname{Var}(X)=2r.
$$

Jika

$$
Z_1,\ldots,Z_r
$$

merupakan independent standard Normal variables, maka

$$
\sum_{i=1}^rZ_i^2
\sim
\chi^2(r).
$$

Additivity:

$$
U\sim\chi^2(r_1),
\qquad
V\sim\chi^2(r_2),
\qquad
U\perp V
$$

mengimplikasikan

$$
U+V
\sim
\chi^2(r_1+r_2).
$$

Distribusi ini menjadi pusat pada sampling distributions dan inference terhadap variance.

---

# 9. Beta Distribution

Untuk

$$
\alpha>0,
\qquad
\beta>0,
$$

Beta distribution memiliki support

$$
0<x<1.
$$

PDF:

$$
f(x)
=
\frac{\Gamma(\alpha+\beta)}
{\Gamma(\alpha)\Gamma(\beta)}
x^{\alpha-1}
(1-x)^{\beta-1}.
$$

Mean:

$$
E[X]
=
\frac{\alpha}{\alpha+\beta}.
$$

Variance:

$$
\operatorname{Var}(X)
=
\frac{\alpha\beta}
{(\alpha+\beta)^2(\alpha+\beta+1)}.
$$

Karena support-nya $(0,1)$, Beta sangat natural untuk random proportions dan probabilities.

---

# 10. Section 3.4 — Normal Distribution

## 10.1 Standard Normal

Standard Normal density:

$$
\phi(z)
=
\frac{1}{\sqrt{2\pi}}
e^{-z^2/2},
\qquad
-\infty<z<\infty.
$$

MGF:

$$
M_Z(t)
=
e^{t^2/2}.
$$

Karena itu,

$$
E[Z]=0,
\qquad
\operatorname{Var}(Z)=1.
$$

---

## 10.2 General Normal

Definisikan

$$
X=\sigma Z+\mu,
\qquad
\sigma>0.
$$

Maka

$$
X\sim N(\mu,\sigma^2),
$$

dengan PDF

$$
f_X(x)
=
\frac{1}{\sqrt{2\pi}\sigma}
\exp\left[
-\frac{1}{2}
\left(
\frac{x-\mu}{\sigma}
\right)^2
\right].
$$

MGF:

$$
M_X(t)
=
\exp\left(
\mu t+\frac{1}{2}\sigma^2t^2
\right).
$$

Standardization:

$$
Z
=
\frac{X-\mu}{\sigma}
\sim
N(0,1).
$$

Maka

$$
P(X\le x)
=
\Phi\left(
\frac{x-\mu}{\sigma}
\right).
$$

---

## 10.3 Structural properties

Normal density:

- symmetric terhadap $\mu$;
- maksimum pada $x=\mu$;
- memiliki inflection points pada

$$
\mu\pm\sigma;
$$

- mean = median = mode.

Symmetry menghasilkan

$$
\Phi(-z)
=
1-\Phi(z).
$$

---

## 10.4 Linear combinations of independent Normals

Jika

$$
X_i\sim N(\mu_i,\sigma_i^2)
$$

saling independent, maka linear combination

$$
Y=\sum_i a_iX_i
$$

tetap Normal, dengan

$$
E[Y]
=
\sum_i a_i\mu_i,
$$

dan

$$
\operatorname{Var}(Y)
=
\sum_i a_i^2\sigma_i^2.
$$

Ini adalah **exact Normal result**, bukan CLT approximation.

---

# 11. Section 3.5 — Multivariate Normal

`[CORE/SUPPORTING CF2]`

## 11.1 Bivariate Normal

Bivariate Normal density diparameterisasi oleh

$$
\mu_1,\mu_2,\sigma_1,\sigma_2,\rho.
$$

Dependence masuk melalui quadratic form

$$
q
=
\frac{1}{1-\rho^2}
\left[
\left(
\frac{x-\mu_1}{\sigma_1}
\right)^2
-
2\rho
\left(
\frac{x-\mu_1}{\sigma_1}
\right)
\left(
\frac{y-\mu_2}{\sigma_2}
\right)
+
\left(
\frac{y-\mu_2}{\sigma_2}
\right)^2
\right].
$$

Density:

$$
f(x,y)
=
\frac{1}
{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}
e^{-q/2}.
$$

Marginal distributions adalah Normal:

$$
X\sim N(\mu_1,\sigma_1^2),
\qquad
Y\sim N(\mu_2,\sigma_2^2).
$$

Untuk jointly Normal pair,

$$
\rho=0
$$

mengimplikasikan independence.

> [!IMPORTANT] Normal-Specific Result
> Zero covariance secara umum **tidak** mengimplikasikan independence. Namun pada jointly multivariate Normal vector, zero covariance memang mengimplikasikan independence.

---

## 11.2 Multivariate Normal

Untuk random vector

$$
\mathbf{X}\in\mathbb{R}^p
$$

dengan mean vector $\boldsymbol{\mu}$ dan positive-definite covariance matrix $\Sigma$,

$$
\mathbf{X}
\sim
N_p(\boldsymbol{\mu},\Sigma)
$$

mempunyai density yang proportional terhadap

$$
|\Sigma|^{-1/2}
\exp\left[
-\frac{1}{2}
(\mathbf{x}-\boldsymbol{\mu})^\top
\Sigma^{-1}
(\mathbf{x}-\boldsymbol{\mu})
\right].
$$

Setiap linear transformation

$$
A\mathbf{X}+\mathbf{b}
$$

juga multivariate Normal, dengan

$$
E[A\mathbf{X}+\mathbf{b}]
=
A\boldsymbol{\mu}+\mathbf{b},
$$

dan

$$
\operatorname{Cov}
(A\mathbf{X}+\mathbf{b})
=
A\Sigma A^\top.
$$

Closure terhadap linear transformations digunakan langsung dalam Student's theorem.

---

# 12. Section 3.6 — Student's $t$ and $F$

## 12.1 Student's $t$

Misalkan

$$
W\sim N(0,1),
$$

$$
V\sim\chi^2(r),
$$

dan $W$ independent dengan $V$. Definisikan

$$
T
=
\frac{W}{\sqrt{V/r}}.
$$

Maka $T$ memiliki Student's $t$-distribution dengan $r$ degrees of freedom.

PDF:

$$
f_T(t)
=
\frac{
\Gamma\left(\frac{r+1}{2}\right)
}{
\sqrt{\pi r}
\Gamma\left(\frac{r}{2}\right)
}
\left(
1+\frac{t^2}{r}
\right)^{-(r+1)/2},
\qquad
-\infty<t<\infty.
$$

Properties:

- symmetric terhadap 0;
- memiliki tails lebih berat daripada Normal;
- mendekati $N(0,1)$ saat $r\to\infty$.

Untuk $r>1$,

$$
E[T]=0.
$$

Untuk $r>2$,

$$
\operatorname{Var}(T)
=
\frac{r}{r-2}.
$$

---

## 12.2 $F$-distribution

Misalkan

$$
U\sim\chi^2(r_1),
\qquad
V\sim\chi^2(r_2),
$$

saling independent. Definisikan

$$
F
=
\frac{U/r_1}{V/r_2}.
$$

Maka $F$ memiliki $F(r_1,r_2)$ distribution.

Support:

$$
f>0.
$$

Distribusi ini umumnya right-skewed.

Mean ada jika

$$
r_2>2,
$$

dengan

$$
E[F]
=
\frac{r_2}{r_2-2}.
$$

Secara lebih umum, moment $E[F^k]$ memerlukan

$$
r_2>2k.
$$

---

# 13. Student's Theorem

Misalkan

$$
X_1,\ldots,X_n
\overset{\mathrm{iid}}{\sim}
N(\mu,\sigma^2),
$$

dan definisikan

$$
\bar X
=
\frac{1}{n}
\sum_{i=1}^nX_i,
$$

$$
S^2
=
\frac{1}{n-1}
\sum_{i=1}^n
(X_i-\bar X)^2.
$$

Maka:

### (a) Sampling distribution of mean

$$
\bar X
\sim
N\left(
\mu,
\frac{\sigma^2}{n}
\right).
$$

### (b) Independence

$$
\bar X\perp S^2.
$$

### (c) Sample variance

$$
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi^2(n-1).
$$

### (d) Student statistic

$$
T
=
\frac{\bar X-\mu}
{S/\sqrt{n}}
\sim
t(n-1).
$$

> [!IMPORTANT] Assumption
> Hasil exact ini memerlukan **Normal population**.

Theorem ini menjelaskan mengapa $t$, $\chi^2$, dan $F$ menjadi pusat classical Normal-model inference.

---

# 14. Section 3.7 — Mixture / Compound Distributions

`[CORE CF2 — Topik 3.7]`

## 14.1 Finite mixture

Misalkan component distributions mempunyai PDFs/PMFs $f_i(x)$ dengan mixing weights

$$
p_i\ge0,
\qquad
\sum_i p_i=1.
$$

Mixture:

$$
f(x)
=
\sum_i p_if_i(x).
$$

CDF:

$$
F(x)
=
\sum_i p_iF_i(x).
$$

Mean:

$$
\mu
=
\sum_i p_i\mu_i.
$$

Variance dapat didekomposisi:

$$
\operatorname{Var}(X)
=
\sum_i p_i\sigma_i^2
+
\sum_i p_i(\mu_i-\mu)^2.
$$

Interpretasi ekuivalen:

$$
\text{total variance}
=
\text{within-component variance}
+
\text{between-component variance}.
$$

> [!WARNING] Mixture $\neq$ Linear Combination
> Pada mixture, kita terlebih dahulu **memilih component distribution**, kemudian menghasilkan $X$ dari component tersebut. Ini berbeda dari $aX_1+bX_2$.

---

## 14.2 Continuous compounding

Misalkan conditional distribution dari $X$ given parameter $\theta$ adalah

$$
f(x\mid\theta),
$$

dan $\theta$ sendiri mempunyai density

$$
g(\theta).
$$

Joint density:

$$
f(x\mid\theta)g(\theta),
$$

sedangkan unconditional / compound density:

$$
h(x)
=
\int
g(\theta)
f(x\mid\theta)
\,d\theta.
$$

Ini adalah **marginalization terhadap random parameter**.

---

## 14.3 [TEXTBOOK EXAMPLE] Poisson–Gamma mixture

Conditional model:

$$
X\mid\theta
\sim
\operatorname{Poisson}(\theta).
$$

Mixing model:

$$
\theta
\sim
\Gamma(\alpha,\beta).
$$

Maka

$$
P(X=x)
=
\frac{
\Gamma(\alpha+x)\beta^x
}{
\Gamma(\alpha)x!(1+\beta)^{\alpha+x}
}.
$$

Untuk

$$
\alpha=r,
\qquad
\beta=\frac{1-p}{p},
$$

hasil tersebut menjadi Negative Binomial PMF:

$$
P(X=x)
=
\binom{r+x-1}{x}
p^r(1-p)^x.
$$

Jadi Negative Binomial juga dapat diinterpretasikan sebagai **Poisson count dengan Gamma-random intensity**.

---

## 14.4 Normal with Gamma-random precision

Jika

$$
X\mid\theta
\sim
N(0,1/\theta)
$$

dan

$$
\theta
\sim
\Gamma(\alpha,\beta),
$$

marginalization menghasilkan heavy-tailed distribution. Untuk pilihan khusus

$$
\alpha=\frac{r}{2},
\qquad
\beta=\frac{2}{r},
$$

unconditional distribution menjadi Student's $t_r$.

Pelajaran konseptual:

> ketidakpastian pada precision menghasilkan unconditional tails yang lebih berat.

---

## 14.5 Beta-Binomial mixture

Conditional:

$$
X\mid p
\sim
\operatorname{Binomial}(n,p).
$$

Mixing distribution:

$$
p
\sim
\operatorname{Beta}(\alpha,\beta).
$$

Marginal PMF:

$$
P(X=x)
=
\frac{
n!\Gamma(\alpha+\beta)
\Gamma(x+\alpha)
\Gamma(n-x+\beta)
}{
x!(n-x)!
\Gamma(\alpha)
\Gamma(\beta)
\Gamma(n+\alpha+\beta)
}.
$$

Mean mengikuti conditional expectation:

$$
E[X]
=
E[E(X\mid p)]
=
nE[p]
=
n\frac{\alpha}{\alpha+\beta}.
$$

---

## 14.6 Gamma–Gamma mixture and Pareto-type tails

Textbook juga meng-compound

$$
X\mid\theta
\sim
\Gamma(k,\theta^{-1})
$$

dengan Gamma mixing terhadap $\theta$, sehingga menghasilkan generalized Pareto form.

Jika $k=1$, conditional distribution menjadi Exponential dan compound model menjadi Pareto:

$$
h(x)
=
\alpha\beta
(1+\beta x)^{-(\alpha+1)},
\qquad
x>0.
$$

Sekali lagi terlihat bahwa merandomkan rate/precision parameter dapat menghasilkan tails jauh lebih tebal daripada conditional model.

---

# 15. Distribution Recognition Map

| Narrative / Mechanism | Distribution |
|---|---|
| Satu success/failure trial | Bernoulli |
| Jumlah success dalam $n$ iid Bernoulli trials | Binomial |
| Jumlah failure sebelum success ke-$r$ | Negative Binomial |
| Jumlah failure sebelum success pertama | Geometric |
| Counts dalam $k$ kategori dari fixed $n$ trials | Multinomial |
| Target items dari sampling tanpa replacement | Hypergeometric |
| Event count selama exposure dengan constant rate | Poisson |
| Positive waiting/lifetime, shape-scale family | Gamma |
| Constant hazard waiting time | Exponential |
| Sum of squared iid standard Normals | Chi-square |
| Random proportion pada $(0,1)$ | Beta |
| Symmetric location-scale continuous model | Normal |
| $Z/\sqrt{\chi^2/r}$ | Student $t$ |
| Ratio dari dua scaled independent chi-squares | $F$ |
| Random component / random parameter | Mixture / compound |

---

# 16. Parameterization Summary

| Distribution | Textbook Convention |
|---|---|
| Negative Binomial | failures sebelum success ke-$r$ |
| Geometric | failures sebelum success pertama |
| Gamma | $\Gamma(\alpha,\beta)$, $\alpha=$ shape, $\beta=$ scale |
| Exponential | $\Gamma(1,\beta)$; mean/scale $=\beta$, rate $=1/\beta$ |
| Normal | $N(\mu,\sigma^2)$ |
| Chi-square | $\chi^2(r)=\Gamma(r/2,2)$ |
| $t$ | degrees of freedom $r$ |
| $F$ | numerator df $r_1$, denominator df $r_2$ |

---

# 17. Chapter Synthesis

Alur konseptual chapter:

```text
stochastic mechanism
      ↓
support
      ↓
PMF / PDF
      ↓
normalization
      ↓
MGF / transformations
      ↓
mean & variance
      ↓
relationship dengan distribution lain
      ↓
applications dalam sampling/inference
```

Tiga prinsip reusable yang dominan:

1. **Kenali mechanism sebelum memilih formula.**
2. **Nyatakan support dan parameterization sebelum calculation.**
3. **Gunakan structural relationships**—MGF additivity, Gamma special cases, Normal transformations, chi-square ratios, serta conditioning/mixing—agar tidak perlu menurunkan distribution dari awal.

---

# 18. Compression Notes

Dikompresi secara agresif:

- software/R instructions;
- repeated numerical examples;
- historical remarks;
- plots yang pelajarannya sudah dapat dijelaskan secara verbal;
- exercises;
- advanced applications yang tidak diperlukan untuk memahami probability family.

Dipertahankan:

- stochastic mechanisms;
- support;
- PMF/PDF;
- parameterizations;
- key derivations;
- MGF;
- mean/variance;
- additive dan transformation relationships;
- Student's theorem;
- mixture/compound structure.

---

# 19. Source Traceability

| Material | Source |
|---|---|
| Bernoulli/Binomial definitions, PMF, MGF, moments | Hogg, McKean & Craig §3.1 |
| Negative Binomial/Geometric convention | §3.1.1 |
| Multinomial joint PMF/MGF/conditional Binomial | §3.1.2 |
| Hypergeometric finite-population mechanism | §3.1.3 |
| Poisson PMF, process derivation, MGF | §3.2 |
| Gamma shape-scale parameterization, MGF, moments | §3.3 |
| Hazard dan Exponential sebagai $\Gamma(1,\beta)$ | §3.3 |
| Chi-square dan Beta families | §§3.3.1–3.3.2 |
| Normal construction, standardization dan MGF | §3.4 |
| Bivariate/multivariate Normal | §3.5 |
| $t$ dan $F$ via transformations | §§3.6.1–3.6.2 |
| Student's theorem | §3.6.3 |
| Finite mixture dan compounding | §3.7 |
| Poisson–Gamma, Normal–Gamma, Beta–Binomial, Pareto mixtures | §3.7 |
| CF2 scope | Silabus CF2: §§3.1–3.6 untuk Topik 2; §3.7 untuk Topik 3 |

*Ref: Hogg, McKean & Craig, Introduction to Mathematical Statistics, 8th ed., Chapter 3.*
