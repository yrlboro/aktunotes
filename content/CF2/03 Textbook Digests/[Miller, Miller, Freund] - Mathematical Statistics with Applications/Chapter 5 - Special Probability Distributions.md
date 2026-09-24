# Miller Chapter 5 — Special Probability Distributions

> **Source:** Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 5  
> **Peran dalam CF2:** Condensed Textbook Note — mengikuti struktur chapter dan reasoning penulis.  
> **Silabus terkait:** [[2.5 Distribusi Diskrit Umum]], [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]], [[3.5 Independensi dan Korelasi]]

---

## Chapter Map

Chapter 5 beralih dari general probability machinery menuju **distribusi diskrit khusus** yang muncul berulang kali dalam probabilitas dan statistika.

Perkembangan utamanya:

$$
\text{Discrete Uniform}
\rightarrow
\text{Bernoulli}
\rightarrow
\text{Binomial}
\rightarrow
\text{Negative Binomial / Geometric}
\rightarrow
\text{Hypergeometric}
\rightarrow
\text{Poisson}
\rightarrow
\text{Multinomial}
\rightarrow
\text{Multivariate Hypergeometric}.
$$

Miller tidak hanya memberikan formula PMF. Untuk setiap family distribution, chapter ini menghubungkan:

- stochastic mechanism;
- support;
- parameter;
- derivation;
- mean dan variance;
- MGF ketika relevan;
- relationship dengan distribution lain.

---

# 1. Introduction

[CORE CF2]

Chapter ini mempelajari beberapa probability distributions yang paling penting dalam statistical theory dan applications.

Miller menekankan bahwa distributions biasanya muncul sebagai **families** dengan satu atau lebih parameter. Parameter merupakan quantity yang fixed untuk satu member distribution, tetapi dapat berubah antar-member dalam family yang sama.

Lower moments, khususnya

$$
\mu=E(X)
$$

dan

$$
\sigma^2=\operatorname{Var}(X),
$$

dapat diperoleh melalui:

1. direct summation; atau
2. moment-generating function.

Textbook kadang menggunakan keduanya untuk memperlihatkan mathematical technique dan relationship antar-distributions.

---

# 2. The Discrete Uniform Distribution

[CORE CF2]

Jika random variable dapat mengambil $k$ nilai berbeda dengan probability yang sama, maka $X$ memiliki discrete uniform distribution.

## 2.1 Definition

$$
\boxed{
f(x)=\frac{1}{k},
\qquad
x=x_1,x_2,\ldots,x_k
}
$$

dengan seluruh $x_i$ distinct.

Special case:

$$
x_i=i,\qquad i=1,\ldots,k,
$$

sehingga

$$
f(x)=\frac{1}{k},
\qquad x=1,\ldots,k.
$$

Contoh sederhana adalah outcome balanced die.

Gagasan struktural:

> discrete uniform berarti probability mass tersebar sama rata pada finite support.

---

# 3. The Bernoulli Distribution

[CORE CF2]

Bernoulli distribution memodelkan **satu trial dengan dua possible outcomes**:

- success dengan probability $\theta$;
- failure dengan probability $1-\theta$.

## 3.1 Parameterization

[PARAMETERIZATION]

Miller menggunakan:

$$
X=
\begin{cases}
1, & \text{success},\\
0, & \text{failure}.
\end{cases}
$$

dengan parameter

$$
0\le\theta\le1.
$$

PMF:

$$
\boxed{
f(x;\theta)
=
\theta^x(1-\theta)^{1-x},
\qquad x=0,1.
}
$$

Dengan demikian,

$$
P(X=1)=\theta,
\qquad
P(X=0)=1-\theta.
$$

Miller menyebut eksperimen semacam ini **Bernoulli trial**.

[IMPORTANT DISTINCTION]

Istilah “success” hanyalah label matematis. Success tidak harus berarti outcome yang favorable.

---

# 4. The Binomial Distribution

[CORE CF2]

Binomial muncul dari repeated Bernoulli trials ketika:

1. jumlah trial $n$ fixed;
2. setiap trial mempunyai success probability yang sama, yaitu $\theta$;
3. trials independent;
4. $X$ menghitung total number of successes.

## 4.1 Derivation

Sebuah particular sequence yang memiliki $x$ successes dan $n-x$ failures mempunyai probability

$$
\theta^x(1-\theta)^{n-x}
$$

karena independence.

Jumlah sequence yang menempatkan $x$ successes di antara $n$ trials adalah

$$
\binom{n}{x}.
$$

Maka:

$$
\boxed{
b(x;n,\theta)
=
\binom{n}{x}
\theta^x(1-\theta)^{n-x},
\qquad
x=0,1,\ldots,n.
}
$$

[PARAMETERIZATION]

Miller menggunakan:

- $n$ = number of trials;
- $\theta$ = success probability per trial.

## 4.2 Why probabilities sum to one

Seluruh nilai PMF adalah terms dari binomial expansion:

$$
[(1-\theta)+\theta]^n=1.
$$

Karena itu:

$$
\sum_{x=0}^{n}b(x;n,\theta)=1.
$$

## 4.3 Textbook example

Untuk 12 balanced coin flips dan $X=$ number of heads,

$$
P(X=5)
=
\binom{12}{5}
\left(\frac12\right)^5
\left(\frac12\right)^7.
$$

Kemampuan mengenali mechanism lebih penting daripada angka akhirnya.

---

## 4.4 Cumulative binomial probability

Miller menuliskan:

$$
\boxed{
B(x;n,\theta)
=
\sum_{k=0}^{x}b(k;n,\theta).
}
$$

Ini adalah binomial CDF pada integer $x$.

Untuk event seperti:

- at most $x$: langsung gunakan $B(x;n,\theta)$;
- more than $x$: gunakan complement;
- between $a$ dan $b$: gunakan selisih cumulative probabilities.

---

## 4.5 Symmetry identity

Miller memberikan:

$$
\boxed{
b(x;n,\theta)
=
b(n-x;n,1-\theta).
}
$$

Interpretasi:

> menghitung $x$ successes dengan success probability $\theta$ ekuivalen dengan menghitung $n-x$ failures yang masing-masing memiliki probability $1-\theta$.

---

## 4.6 Mean and variance

Miller menurunkan mean dengan direct summation dan binomial re-indexing.

Hasilnya:

$$
\boxed{
E(X)=n\theta.
}
$$

Untuk variance, textbook menggunakan identity:

$$
E(X^2)=E[X(X-1)]+E(X).
$$

Diperoleh:

$$
E[X(X-1)]=n(n-1)\theta^2.
$$

Sehingga:

$$
\operatorname{Var}(X)
=
E(X^2)-[E(X)]^2
=
n\theta(1-\theta).
$$

Jadi:

$$
\boxed{
\mu=n\theta,
\qquad
\sigma^2=n\theta(1-\theta).
}
$$

---

## 4.7 Binomial as sum of Bernoulli variables

Jika

$$
X_i=
\begin{cases}
1, & \text{success pada trial }i,\\
0, & \text{otherwise},
\end{cases}
$$

maka

$$
X=X_1+\cdots+X_n.
$$

Karena $X_i$ merupakan independent Bernoulli variables,

$$
E(X_i)=\theta,
\qquad
\operatorname{Var}(X_i)=\theta(1-\theta).
$$

Maka langsung diperoleh:

$$
E(X)=n\theta,
$$

dan

$$
\operatorname{Var}(X)=n\theta(1-\theta).
$$

Ini memberikan probabilistic explanation yang sangat reusable.

---

## 4.8 MGF

Untuk satu Bernoulli variable,

$$
M_{X_i}(t)
=
(1-\theta)+\theta e^t.
$$

Karena jumlah independent variables mempunyai MGF yang merupakan product dari masing-masing MGF:

$$
\boxed{
M_X(t)
=
[1+\theta(e^t-1)]^n.
}
$$

Ini adalah MGF Binomial.

---

# 5. The Negative Binomial and Geometric Distributions

[CORE CF2]

Binomial bertanya:

> Berapa banyak successes dalam fixed $n$ trials?

Negative binomial membalik struktur pertanyaan:

> Pada trial ke berapa success ke-$k$ terjadi?

[PARAMETERIZATION]

Miller memakai $X=$ **trial number of the $k$-th success**.

Karena convention negative binomial berbeda antar-textbook, support harus selalu ditulis eksplisit.

---

## 5.1 Derivation

Agar success ke-$k$ terjadi pada trial ke-$x$:

- $x-1$ trials pertama harus memuat tepat $k-1$ successes;
- trial ke-$x$ sendiri harus success.

Probability-nya:

$$
\binom{x-1}{k-1}
\theta^{k-1}(1-\theta)^{x-k}
\cdot\theta.
$$

Maka:

$$
\boxed{
b^*(x;k,\theta)
=
\binom{x-1}{k-1}
\theta^k(1-\theta)^{x-k},
\qquad
x=k,k+1,\ldots.
}
$$

Support dimulai dari $x=k$, karena success ke-$k$ tidak mungkin terjadi sebelum trial ke-$k$.

---

## 5.2 Textbook example

Jika success probability setiap child exposure adalah $0.40$, probability bahwa child ke-10 menjadi third success adalah

$$
P(X=10)
=
\binom{9}{2}
(0.40)^3
(0.60)^7.
$$

Perhatikan mengapa combinatorial coefficient-nya adalah

$$
\binom{9}{2},
$$

bukan

$$
\binom{10}{3}.
$$

Trial ke-10 sudah fixed sebagai success terakhir.

---

## 5.3 Relationship dengan Binomial

Miller memberikan identity:

$$
\boxed{
b^*(x;k,\theta)
=
\frac{k}{x}\,
b(k;x,\theta).
}
$$

Ini menghubungkan waiting-time formulation dengan fixed-trial count formulation.

---

## 5.4 Mean and variance

$$
\boxed{
E(X)=\frac{k}{\theta}.
}
$$

$$
\boxed{
\operatorname{Var}(X)
=
\frac{k(1-\theta)}{\theta^2}.
}
$$

Miller juga menulis variance dalam bentuk ekuivalen:

$$
\frac{k}{\theta}
\left(
\frac{1}{\theta}-1
\right).
$$

---

# 5.5 Geometric Distribution

Geometric adalah special case Negative Binomial dengan

$$
k=1.
$$

Maka $X$ adalah trial number of the **first success**.

[PARAMETERIZATION]

Miller menggunakan support:

$$
x=1,2,3,\ldots,
$$

bukan “number of failures before first success”.

PMF:

$$
\boxed{
g(x;\theta)
=
\theta(1-\theta)^{x-1},
\qquad x=1,2,\ldots.
}
$$

Karena $k=1$:

$$
E(X)=\frac{1}{\theta},
$$

$$
\operatorname{Var}(X)
=
\frac{1-\theta}{\theta^2}.
$$

[IMPORTANT DISTINCTION]

Jika textbook lain mendefinisikan Geometric sebagai number of failures sebelum first success, support-nya dimulai dari $0$ dan mean-nya berbeda. Dalam notes Miller ini gunakan convention trial-number.

---

# 6. The Hypergeometric Distribution

[CORE CF2]

Hypergeometric adalah analogue dari Binomial untuk **sampling without replacement** dari finite population.

Setup:

- population size $N$;
- $M$ elements classified as successes;
- $N-M$ sebagai failures;
- sample size $n$;
- sample dipilih secara acak **without replacement**;
- $X=$ number of successes selected.

[IMPORTANT DISTINCTION]

Binomial:

- independent trials;
- constant success probability.

Hypergeometric:

- without replacement;
- trials dependent;
- success probability berubah setelah setiap draw.

---

## 6.1 Derivation

Jumlah cara memilih:

- $x$ successes dari $M$:
  $$
  \binom{M}{x};
  $$
- $n-x$ failures dari $N-M$:
  $$
  \binom{N-M}{n-x}.
  $$

Total random samples berukuran $n$:

$$
\binom{N}{n}.
$$

Maka:

$$
\boxed{
h(x;n,N,M)
=
\frac{
\binom{M}{x}
\binom{N-M}{n-x}
}{
\binom{N}{n}
}.
}
$$

Support harus memenuhi:

$$
0\le x\le n,
$$

$$
x\le M,
$$

$$
n-x\le N-M.
$$

Equivalent compact support:

$$
\max\{0,n-(N-M)\}
\le x\le
\min\{n,M\}.
$$

---

## 6.2 Mean and variance

Miller memperoleh:

$$
\boxed{
E(X)=\frac{nM}{N}.
}
$$

Variance:

$$
\boxed{
\operatorname{Var}(X)
=
\frac{
nM(N-M)(N-n)
}{
N^2(N-1)
}.
}
$$

Jika ditulis dengan

$$
p=\frac{M}{N},
$$

maka:

$$
\operatorname{Var}(X)
=
np(1-p)
\frac{N-n}{N-1}.
$$

Faktor

$$
\frac{N-n}{N-1}
$$

adalah finite-population correction relatif terhadap Binomial variance.

---

## 6.3 Binomial approximation to Hypergeometric

Miller mencatat bahwa jika $N$ besar dan $n$ kecil relatif terhadap $N$, sampling without replacement hampir menyerupai independent sampling.

Textbook rule-of-thumb:

$$
n\le0.05N.
$$

Hypergeometric kemudian dapat diaproksimasi oleh

$$
\operatorname{Binomial}
\left(
n,\frac{M}{N}
\right).
$$

[TEXTBOOK CONTEXT]

Rule $5\%$ adalah approximation guideline dari textbook, bukan exact mathematical boundary.

---

# 7. The Poisson Distribution

[CORE CF2]

Miller mula-mula membangun Poisson sebagai limiting form dari Binomial.

Ambil Binomial dengan:

$$
n\to\infty,
\qquad
\theta\to0,
\qquad
n\theta=\lambda
$$

tetap constant.

Maka limiting PMF adalah:

$$
\boxed{
p(x;\lambda)
=
\frac{\lambda^x e^{-\lambda}}{x!},
\qquad
x=0,1,2,\ldots.
}
$$

[PARAMETERIZATION]

Miller menggunakan $\lambda>0$ sebagai Poisson parameter, dan kemudian menunjukkan:

$$
E(X)=\lambda,
\qquad
\operatorname{Var}(X)=\lambda.
$$

---

## 7.1 Poisson approximation to Binomial

Karena limiting derivation tersebut, Poisson dapat digunakan untuk mengaproksimasi Binomial ketika:

- $n$ besar;
- $\theta$ kecil;
- $\lambda=n\theta$.

Textbook rules:

- generally good when
  $$
  n\ge20,\qquad \theta\le0.05;
  $$
- generally excellent when
  $$
  n\ge100,\qquad n\theta<10.
  $$

[TEXTBOOK CONTEXT]

Ini adalah rules-of-thumb Miller, bukan exact conditions.

---

## 7.2 Poisson process interpretation

Miller juga menjelaskan independent-occurrence interpretation.

Dalam interval kecil $\Delta t$:

1. probability satu occurrence kira-kira proporsional terhadap interval length:
   $$
   \alpha\Delta t;
   $$
2. probability lebih dari satu occurrence dapat diabaikan;
3. occurrence pada interval kecil tidak bergantung pada past history.

Untuk interval length $t$:

$$
\lambda=\alpha t.
$$

Maka number of occurrences mempunyai Poisson distribution.

Ini menghubungkan discrete Poisson counts dengan exponential waiting times pada Chapter 6.

---

## 7.3 Mean and variance

$$
\boxed{
\mu=\lambda,
\qquad
\sigma^2=\lambda.
}
$$

Ciri khasnya:

> untuk Poisson, mean dan variance sama.

---

## 7.4 MGF

$$
\boxed{
M_X(t)
=
e^{\lambda(e^t-1)}.
}
$$

MGF ini sangat berguna untuk sums of independent Poisson variables.

---

# 8. The Multinomial Distribution

[CORE CF2]

Binomial membagi setiap trial menjadi dua categories.

Multinomial menggeneralisasinya menjadi $k$ mutually exclusive categories.

Pada setiap trial:

$$
P(\text{category }i)=\theta_i,
$$

dengan

$$
\sum_{i=1}^{k}\theta_i=1.
$$

Setelah $n$ independent trials, definisikan:

$$
X_i=\text{number of outcomes in category }i.
$$

Constraint:

$$
\sum_{i=1}^{k}X_i=n.
$$

---

## 8.1 Joint PMF

Jumlah sequence dengan counts

$$
x_1,\ldots,x_k
$$

adalah multinomial coefficient:

$$
\frac{n!}{x_1!\cdots x_k!}.
$$

Probability particular sequence:

$$
\theta_1^{x_1}\cdots\theta_k^{x_k}.
$$

Maka:

$$
\boxed{
f(x_1,\ldots,x_k;
n,\theta_1,\ldots,\theta_k)
=
\frac{n!}{x_1!\cdots x_k!}
\prod_{i=1}^{k}\theta_i^{x_i}
}
$$

dengan

$$
x_i=0,1,\ldots,n,
\qquad
\sum_{i=1}^{k}x_i=n.
$$

---

## 8.2 Textbook example

Untuk 8 randomly chosen newspaper readers dengan category probabilities:

$$
\theta_A=0.50,
\qquad
\theta_B=0.30,
\qquad
\theta_C=0.20,
$$

probability of counts

$$
(5,2,1)
$$

adalah

$$
\frac{8!}{5!2!1!}
(0.50)^5(0.30)^2(0.20).
$$

---

## 8.3 Marginal distributions dan covariance

Walaupun joint vector-nya Multinomial, setiap single count $X_i$ marginally mengikuti:

$$
X_i\sim\operatorname{Binomial}(n,\theta_i).
$$

Sehingga:

$$
E(X_i)=n\theta_i,
$$

$$
\operatorname{Var}(X_i)
=
n\theta_i(1-\theta_i).
$$

Untuk $i\neq j$, textbook exercises menghasilkan:

$$
\boxed{
\operatorname{Cov}(X_i,X_j)
=
-n\theta_i\theta_j.
}
$$

Mengapa negatif?

Karena total sample size fixed:

$$
\sum_iX_i=n.
$$

Lebih banyak count pada satu category menyisakan lebih sedikit observations bagi categories lain.

---

# 9. The Multivariate Hypergeometric Distribution

[CORE CF2]

Ini adalah multivariate analogue dari Hypergeometric dan without-replacement counterpart dari Multinomial.

Population:

- $M_1$ items type 1;
- $M_2$ type 2;
- $\ldots$;
- $M_k$ type $k$;

dengan

$$
\sum_{i=1}^{k}M_i=N.
$$

Random sample size:

$$
n
$$

dipilih without replacement.

Definisikan:

$$
X_i=\text{number of sampled items of type }i.
$$

Constraint:

$$
\sum_{i=1}^{k}X_i=n.
$$

---

## 9.1 Joint PMF

Cara memilih komposisi yang diperlukan:

$$
\prod_{i=1}^{k}\binom{M_i}{x_i}.
$$

Total samples:

$$
\binom{N}{n}.
$$

Maka:

$$
\boxed{
f(x_1,\ldots,x_k;
n,M_1,\ldots,M_k)
=
\frac{
\displaystyle\prod_{i=1}^{k}\binom{M_i}{x_i}
}{
\binom{N}{n}
}.
}
$$

Validity conditions:

$$
0\le x_i\le M_i,
$$

dan

$$
\sum_{i=1}^{k}x_i=n.
$$

[IMPORTANT DISTINCTION]

Multinomial:

- repeated independent categorizations;
- category probabilities fixed.

Multivariate Hypergeometric:

- finite population;
- sampling without replacement;
- counts dibatasi oleh available category sizes $M_i$.

---

# 10. The Theory in Practice — Sampling Inspection

[CF2 SUPPORTING CONTEXT]

Miller menerapkan model Binomial pada acceptance sampling.

Sebuah sampling plan menetapkan:

- sample size $n$;
- acceptance number $c$.

Sebuah lot diterima jika jumlah defectives yang diamati, $X$, memenuhi:

$$
X\le c.
$$

Jika defect probability dimodelkan sebagai $p$ dan asumsi Binomial sesuai:

$$
X\sim\operatorname{Binomial}(n,p).
$$

Maka **probability of acceptance** adalah:

$$
\boxed{
P_a(p)
=
P(X\le c)
=
\sum_{x=0}^{c}
\binom{n}{x}
p^x(1-p)^{n-x}.
}
$$

Plot $P_a(p)$ terhadap $p$ menghasilkan operating characteristic curve.

Peran konseptualnya:

> probability distribution menjadi decision tool: quality level $p$ dipetakan ke probability bahwa inspection rule menerima lot.

---

# Distribution Recognition Map

## Bernoulli

Satu binary trial:

$$
X\in\{0,1\}.
$$

## Binomial

Fixed number $n$ of independent Bernoulli trials; count successes.

$$
X=0,\ldots,n.
$$

## Negative Binomial — Miller convention

Menunggu hingga success ke-$k$; $X$ = trial number.

$$
X=k,k+1,\ldots.
$$

## Geometric — Miller convention

Menunggu hingga first success; $X$ = trial number.

$$
X=1,2,\ldots.
$$

## Hypergeometric

Menghitung successes dalam sample yang diambil **without replacement** dari finite population.

## Poisson

Menghitung occurrences dalam interval/region di bawah mekanisme rare independent-occurrence, atau sebagai limiting form dari Binomial.

## Multinomial

Counts across $k$ categories dalam $n$ independent categorical trials.

## Multivariate Hypergeometric

Counts across $k$ finite-population categories di bawah sampling without replacement.

---

# Core Formula Table

| Distribution | Support | Mean | Variance |
|---|---|---:|---:|
| Bernoulli $(\theta)$ | $0,1$ | $\theta$ | $\theta(1-\theta)$ |
| Binomial $(n,\theta)$ | $0,\ldots,n$ | $n\theta$ | $n\theta(1-\theta)$ |
| Negative Binomial $(k,\theta)$, Miller | $k,k+1,\ldots$ | $k/\theta$ | $k(1-\theta)/\theta^2$ |
| Geometric $(\theta)$, Miller | $1,2,\ldots$ | $1/\theta$ | $(1-\theta)/\theta^2$ |
| Hypergeometric $(n,N,M)$ | support constrained | $nM/N$ | $\frac{nM(N-M)(N-n)}{N^2(N-1)}$ |
| Poisson $(\lambda)$ | $0,1,\ldots$ | $\lambda$ | $\lambda$ |

---

# Reusable Mathematical Reading Pattern

Saat menghadapi discrete-distribution problem dari Chapter 5:

1. **Tentukan stochastic mechanism.**
2. **Tentukan support sebelum memilih formula.**
3. Tanyakan:
   - fixed number of trials atau waiting time?
   - replacement atau no replacement?
   - two categories atau many categories?
   - finite population atau process over time/space?
4. Nyatakan parameterization.
5. Tulis PMF.
6. Gunakan complement/CDF jika event berupa “at least”, “more than”, atau “at most”.
7. Untuk approximation, tulis original exact model terlebih dahulu.
8. Periksa:
   $$
   0\le P\le1.
   $$
9. Untuk Multinomial/Hypergeometric vector:
   $$
   \sum_i x_i=n
   $$
   harus terpenuhi.

---

# Connections to CF2 Syllabus

- Sections 2–7 $\rightarrow$ [[2.5 Distribusi Diskrit Umum]]
- Section 8 $\rightarrow$ [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]], [[3.5 Independensi dan Korelasi]]
- Section 9 $\rightarrow$ [[3.1 Distribusi Gabungan (Joint Distribution)]]
- Section 10 $\rightarrow$ supporting application of discrete probability models

---

## One-line takeaway

> **Chapter 5 mengajarkan bahwa distribution harus dikenali dari stochastic mechanism: fixed trials, waiting time, without-replacement sampling, rare-event counts, atau multicategory counts masing-masing menghasilkan family probabilitas yang berbeda.**
