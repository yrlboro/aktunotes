---
title: "Miller Chapter 10 — Point Estimation: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 10
exam: CF2
scope: "Topik 4 — Inferensi Statistik"
tags: [CF2, Miller, PointEstimation, Unbiasedness, Efficiency, Consistency, Sufficiency, Robustness, MethodOfMoments, MLE, BayesianEstimation]
status: condensed-textbook-note
language: id
---

# Miller Chapter 10 — Point Estimation

> [!ABSTRACT] Tujuan chapter
> Chapter 10 mengembangkan theory dan construction dari **point estimators**. Miller terlebih dahulu membahas bagaimana estimator dinilai—melalui unbiasedness, variance/efficiency, consistency, sufficiency, dan robustness—lalu membahas tiga general construction methods:
>
> $$
> \text{Method of Moments}
> \rightarrow
> \text{Maximum Likelihood}
> \rightarrow
> \text{Bayesian Estimation}.
> $$
>
> Core progression:
>
> $$
> \text{parameter}
> \rightarrow
> \text{statistic as estimator}
> \rightarrow
> \text{sampling properties}
> \rightarrow
> \text{comparison criteria}
> \rightarrow
> \text{general estimation methods}.
> $$

---

# 1. Introduction

`[CORE CF2]`

Miller membedakan dua bentuk traditional statistical inference:

1. **estimation** — menentukan value dari unknown parameter yang berada pada continuum of possibilities;
2. **hypothesis testing** — memutuskan apakah menerima atau menolak specified value atau set of values.

Decision-theory perspective pada Chapter 9 menyatukan keduanya, tetapi Chapter 10 berfokus pada estimation.

## 1.1 Point estimation

Miller mendefinisikan **point estimation** sebagai penggunaan value dari sample statistic untuk mengestimasi population parameter.

Contoh:

- gunakan $\bar X$ untuk mengestimasi $\mu$;
- gunakan sample proportion untuk mengestimasi Binomial parameter $\theta$;
- gunakan $S^2$ untuk mengestimasi $\sigma^2$.

Statistic disebut **point estimator**; observed numerical realization-nya disebut **point estimate**.

> [!IMPORTANT] Estimator vs estimate
> $$
> \hat\theta=\text{random statistic},
> \qquad
> \hat\theta_{\text{obs}}=\text{observed number}.
> $$
>
> Perbedaan ini penting karena kualitas estimator dinilai melalui **sampling distribution** dari estimator tersebut.

---

# 2. Unbiased Estimators

`[CORE CF2]`

Estimator sempurna yang selalu sama dengan true parameter umumnya tidak ada. Desirable property pertama Miller adalah bahwa estimator benar **secara rata-rata**.

## 2.1 Definition

Statistic $\hat\theta$ merupakan unbiased estimator dari $\theta$ jika:

$$
\boxed{
E(\hat\theta)=\theta
}
$$

untuk **setiap possible value** dari $\theta$.

Jika tidak, estimator biased.

---

## 2.2 Sample proportion

Jika:

$$
X\sim\operatorname{Binomial}(n,\theta),
$$

maka:

$$
E(X)=n\theta.
$$

Karena itu:

$$
E\left(\frac{X}{n}\right)
=
\frac{1}{n}E(X)
=
\theta.
$$

Jadi:

$$
\boxed{
\hat\theta=\frac{X}{n}
}
$$

unbiased untuk Binomial parameter.

---

## 2.3 Bias

Miller mendefinisikan bias estimator dengan sample size $n$:

$$
\boxed{
b_n(\theta)
=
E(\hat\theta)-\theta.
}
$$

Estimator dapat biased tetapi bias-nya menurun ketika $n$ meningkat.

### Asymptotic unbiasedness

$$
\boxed{
\lim_{n\to\infty}b_n(\theta)=0
}
$$

mendefinisikan **asymptotically unbiased estimator**.

Ini lebih lemah daripada exact unbiasedness.

---

## 2.4 Bias correction

Jika:

$$
E(\bar X)=1+\delta,
$$

maka $\bar X$ biased untuk $\delta$, tetapi:

$$
\boxed{
\bar X-1
}
$$

unbiased karena:

$$
E(\bar X-1)=\delta.
$$

Reusable lesson:

> jika expected value estimator diketahui secara eksplisit, deterministic correction dapat menghilangkan bias.

---

## 2.5 Sample variance

Miller menggunakan result:

$$
\boxed{
E(S^2)=\sigma^2.
}
$$

Karena itu denominator $n-1$ pada:

$$
S^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}(X_i-\bar X)^2
$$

membuat $S^2$ unbiased untuk $\sigma^2$.

---

# 3. Efficiency

`[CORE CF2]`

Di antara unbiased estimators untuk parameter yang sama, Miller lebih memilih estimator dengan sampling variance yang lebih kecil.

## 3.1 Minimum-variance unbiased estimator

**Minimum variance unbiased estimator (MVUE)** adalah unbiased estimator dengan variance terkecil di antara seluruh unbiased estimators dari $\theta$:

$$
\boxed{
\hat\theta_{\text{MVUE}}
=
\arg\min_{\hat\theta:\,E(\hat\theta)=\theta}
\operatorname{Var}(\hat\theta).
}
$$

Miller juga menyebutnya **best unbiased estimator**.

---

## 3.2 Cramér–Rao inequality

Untuk unbiased estimator $\hat\theta$, Miller memberikan lower bound:

$$
\boxed{
\operatorname{Var}(\hat\theta)
\ge
\frac{
1
}{
nE\left[
\left(
\frac{\partial}{\partial\theta}
\ln f(X;\theta)
\right)^2
\right]
}.
}
$$

Denominator diinterpretasikan sebagai **information** mengenai $\theta$ yang diberikan sample.

Jika unbiased estimator mencapai bound tersebut, Miller's Theorem 2 menyatakan bahwa estimator itu MVUE.

> [!ASSUMPTION]
> Cramér–Rao result memerlukan regularity conditions. Miller tidak menurunkan seluruh general conditions secara detail pada chapter ini.

---

## 3.3 Example: Normal mean

Untuk:

$$
X_i\sim N(\mu,\sigma^2),
$$

dengan known $\sigma^2$:

$$
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
$$

Miller menghitung Cramér–Rao lower bound dan mendapatkan nilai sama:

$$
\frac{\sigma^2}{n}.
$$

Karena $\bar X$ unbiased dan mencapai bound:

$$
\boxed{
\bar X
\text{ adalah MVUE dari }\mu
}
$$

untuk Normal population dengan known variance.

Miller menegaskan bahwa hasil ini **tidak** berarti $\bar X$ selalu MVUE untuk mean dari semua population.

---

## 3.4 Relative efficiency

Jika $\hat\theta_1$ dan $\hat\theta_2$ unbiased, efficiency dari $\hat\theta_2$ relative to $\hat\theta_1$ diukur dengan:

$$
\boxed{
\frac{
\operatorname{Var}(\hat\theta_1)
}{
\operatorname{Var}(\hat\theta_2)
}.
}
$$

Smaller variance berarti greater reliability.

### Mean vs median under Normal sampling

Untuk large odd sample dari Normal population, Miller membandingkan sample median dengan sample mean dan memperoleh asymptotic relative efficiency:

$$
\boxed{
\frac{2}{\pi}
\approx0.64.
}
$$

Interpretasi: untuk Normal population, median secara asymptotic memerlukan lebih banyak observations daripada mean untuk mencapai variance yang sama.

---

## 3.5 Biased estimators and MSE

Variance saja tidak cukup adil ketika biased estimators diperbolehkan, karena constant estimator dapat memiliki zero variance.

Karena itu Miller menggunakan **mean squared error**:

$$
\boxed{
\operatorname{MSE}(\hat\theta)
=
E[(\hat\theta-\theta)^2].
}
$$

Dengan bias–variance decomposition:

$$
\boxed{
\operatorname{MSE}(\hat\theta)
=
\operatorname{Var}(\hat\theta)
+
[\operatorname{Bias}(\hat\theta)]^2.
}
$$

Ini melanjutkan decision-theory perspective dari Chapter 9.

---

# 4. Consistency

`[CORE CF2]`

Variance atau MSE tidak selalu menangkap konsep “closeness” secara penuh. Miller memperkenalkan asymptotic probabilistic property langsung.

## 4.1 Definition

Statistic $\hat\theta$ disebut consistent estimator dari $\theta$ jika, untuk setiap $c>0$:

$$
\boxed{
\lim_{n\to\infty}
P(
|\hat\theta-\theta|<c
)
=
1.
}
$$

Secara ekuivalen:

$$
\boxed{
\hat\theta
\overset{P}{\longrightarrow}
\theta.
}
$$

Consistency berarti bahwa untuk sufficiently large sample size, estimator menjadi arbitrarily likely berada dekat true parameter.

---

## 4.2 Standard examples

Miller menghubungkan consistency dengan previous probability results.

Untuk Binomial parameter:

$$
\hat\theta=\frac{X}{n},
$$

Chebyshev theorem memberikan:

$$
\frac{X}{n}
\overset{P}{\longrightarrow}
\theta.
$$

Demikian pula:

$$
\bar X
\overset{P}{\longrightarrow}
\mu
$$

untuk sampling dari population dengan finite variance.

Dengan demikian LLN menyediakan mekanisme langsung untuk establishing consistency.

---

## 4.3 Sufficient conditions via mean and variance

Common route:

$$
E(\hat\theta)\to\theta
$$

dan:

$$
\operatorname{Var}(\hat\theta)\to0.
$$

Chebyshev kemudian menghasilkan consistency.

Logikanya:

```text
center approaches θ
        +
sampling spread collapses
        ↓
probability mass concentrates at θ
```

Consistency adalah **asymptotic** property; ia tidak menjamin estimator bagus untuk small $n$.

---

# 5. Sufficiency

`[CORE CF2]`

Sufficiency menanyakan apakah suatu statistic menangkap **seluruh sample information yang relevan terhadap parameter**.

## 5.1 Definition

Miller mendefinisikan $\hat\theta$ sufficient untuk $\theta$ jika, untuk setiap fixed value dari statistic tersebut, conditional distribution dari seluruh sample given statistic itu tidak bergantung pada $\theta$.

Secara simbolik:

$$
\boxed{
\mathcal L(
X_1,\ldots,X_n
\mid
\hat\theta
)
\text{ tidak bergantung pada }\theta.
}
$$

Interpretasi:

> setelah sufficient statistic diketahui, detail sample lainnya tidak memberikan additional information mengenai $\theta$.

---

## 5.2 Bernoulli sample

Jika:

$$
X_i\sim\operatorname{Bernoulli}(\theta),
$$

Miller menunjukkan:

$$
\boxed{
\bar X
=
\frac{X_1+\cdots+X_n}{n}
}
$$

sufficient untuk $\theta$.

Karena $n$ fixed, secara ekuivalen:

$$
\boxed{
T=\sum_{i=1}^{n}X_i
}
$$

juga sufficient.

Intuisinya: untuk Bernoulli observations, total number of successes adalah informasi parameter-relevant; urutan successes/failures tidak menambah informasi mengenai $\theta$.

---

## 5.3 Factorization theorem

Direct checking dari conditional distribution sering tedious. Miller menggunakan factorization theorem.

Statistic $\hat\theta$ sufficient jika dan hanya jika joint sample PMF/PDF dapat ditulis:

$$
\boxed{
f(x_1,\ldots,x_n;\theta)
=
g(\hat\theta,\theta)
\,h(x_1,\ldots,x_n),
}
$$

dengan:

- $g$ bergantung pada sample hanya melalui $\hat\theta$ dan boleh bergantung pada $\theta$;
- $h$ **tidak** bergantung pada $\theta$.

Ini adalah practical sufficiency test.

---

## 5.4 Normal mean with known variance

Untuk:

$$
X_i\sim N(\mu,\sigma^2),
$$

dengan known $\sigma^2$, Miller menggunakan identity:

$$
\sum_{i=1}^{n}(x_i-\mu)^2
=
\sum_{i=1}^{n}(x_i-\bar x)^2
+
n(\bar x-\mu)^2.
$$

Joint density kemudian factorize menjadi:

- term yang melibatkan hanya $\bar x$ dan $\mu$;
- term yang tidak bergantung pada $\mu$.

Jadi:

$$
\boxed{
\bar X
\text{ sufficient untuk }\mu.
}
$$

---

## 5.5 Functions of sufficient estimators

Miller mencatat bahwa jika $\hat\theta$ sufficient dan one-to-one transformation:

$$
Y=u(\hat\theta)
$$

tidak melibatkan $\theta$, maka $Y$ mempertahankan sufficiency untuk correspondingly transformed parameter.

---

> [!NOTE] Completeness
> Silabus CF2 menyebut **completeness** di antara estimator properties, tetapi Miller Chapter 10 yang menjadi source note ini membahas unbiasedness, efficiency, consistency, sufficiency, dan robustness tanpa standalone completeness section. Karena itu completeness sebaiknya dipelajari dari official CF2 reference lain, bukan ditambahkan diam-diam ke Miller note ini.

---

# 6. Robustness

`[CF2 SUPPORTING CONTEXT]`

Miller mendefinisikan robustness secara kualitatif sebagai resistance dari estimation procedure terhadap violations of assumptions.

Estimator robust jika sampling behavior-nya tidak terlalu terpengaruh oleh departures seperti:

- outliers;
- recording/measurement errors;
- wrong population-family assumptions;
- skewness ketika Normality diasumsikan;
- unequal population variances ketika equality diasumsikan.

Miller menekankan bahwa robustness sulit direduksi ke satu universal mathematical criterion.

Pertanyaannya misalnya:

- apa arti “not seriously affected”?
- assumption violation mana yang paling penting?
- departures apa yang perlu disimulasikan?

Textbook mencatat bahwa robustness sering dipelajari menggunakan **computer simulation**.

---

# 7. The Method of Moments

`[CORE CF2]`

Miller memperkenalkan Method of Moments sebagai general parameter-estimation procedure.

## 7.1 Sample moments

$k$-th sample moment:

$$
\boxed{
\tilde m_k
=
\frac{1}{n}
\sum_{i=1}^{n}x_i^k.
}
$$

Jika population mempunyai $r$ unknown parameters, Method of Moments menyamakan:

$$
\boxed{
\tilde m_k
=
\mu_k',
\qquad
k=1,\ldots,r,
}
$$

lalu menyelesaikan $r$ equations tersebut.

---

## 7.2 One-parameter example: Uniform

Untuk Uniform population dengan upper endpoint fixed pada $1$ dan lower endpoint $\alpha$:

$$
\mu_1'
=
\frac{\alpha+1}{2}.
$$

Set:

$$
\bar x
=
\frac{\alpha+1}{2}.
$$

Maka:

$$
\boxed{
\hat\alpha_{\text{MOM}}
=
2\bar x-1.
}
$$

---

## 7.3 Two-parameter example: Gamma

Untuk Miller's Gamma shape-scale parameterization:

$$
E(X)=\alpha\beta,
$$

$$
E(X^2)=\alpha(\alpha+1)\beta^2.
$$

Set:

$$
\tilde m_1=\alpha\beta,
$$

$$
\tilde m_2=\alpha(\alpha+1)\beta^2.
$$

Solving:

$$
\boxed{
\hat\alpha
=
\frac{
\tilde m_1^2
}{
\tilde m_2-\tilde m_1^2
}.
}
$$

dan:

$$
\boxed{
\hat\beta
=
\frac{
\tilde m_2-\tilde m_1^2
}{
\tilde m_1
}.
}
$$

---

## 7.4 Conceptual strength

Jika parameters sendiri berupa moments, metode ini dapat digunakan tanpa mengetahui full functional form dari population.

Workflow:

```text
write theoretical moments
      ↓
write matching sample moments
      ↓
equate
      ↓
solve for parameters
```

Namun Method of Moments tidak otomatis menghasilkan estimator dengan semua desirable properties.

---

# 8. The Method of Maximum Likelihood

`[CORE CF2]`

Maximum Likelihood memilih parameter values yang membuat **observed sample paling plausible**.

## 8.1 Likelihood

Untuk observed sample:

$$
x_1,\ldots,x_n,
$$

Miller mendefinisikan:

$$
\boxed{
L(\theta)
=
f(x_1,\ldots,x_n;\theta).
}
$$

Sample values sekarang fixed, dan $L$ dipandang sebagai function of parameter.

Untuk iid sampling:

$$
\boxed{
L(\theta)
=
\prod_{i=1}^{n}f(x_i;\theta).
}
$$

Maximum-likelihood estimate adalah value dari $\theta$ yang memaksimumkan $L(\theta)$.

> [!IMPORTANT] Likelihood bukan probability distribution dari $\theta$
> Dalam frequentist MLE framework, $\theta$ fixed tetapi unknown.  
> $L(\theta)$ mengukur compatibility dari parameter values dengan observed data.

---

## 8.2 Log-likelihood

Karena logarithm monotone:

$$
\arg\max_\theta L(\theta)
=
\arg\max_\theta \ln L(\theta).
$$

Product berubah menjadi sum sehingga differentiation biasanya lebih mudah.

---

## 8.3 Binomial MLE

Untuk observed $x$ successes dalam $n$ trials:

$$
L(\theta)
=
\binom{n}{x}
\theta^x(1-\theta)^{n-x}.
$$

Log-likelihood:

$$
\ln L(\theta)
=
\ln\binom{n}{x}
+
x\ln\theta
+
(n-x)\ln(1-\theta).
$$

Set derivative sama dengan zero:

$$
\frac{x}{\theta}
-
\frac{n-x}{1-\theta}
=
0.
$$

Maka:

$$
\boxed{
\hat\theta_{\text{MLE}}
=
\frac{x}{n}.
}
$$

Corresponding estimator:

$$
\boxed{
\hat\Theta_{\text{MLE}}
=
\frac{X}{n}.
}
$$

---

## 8.4 Exponential MLE

Untuk Miller's Exponential parameterization:

$$
f(x;\theta)
=
\frac{1}{\theta}e^{-x/\theta},
\qquad x>0,
$$

likelihood:

$$
L(\theta)
=
\theta^{-n}
\exp\left(
-\frac{1}{\theta}
\sum_{i=1}^{n}x_i
\right).
$$

Differentiating log-likelihood memberikan:

$$
\boxed{
\hat\theta_{\text{MLE}}
=
\bar x.
}
$$

---

## 8.5 Boundary MLE — Uniform upper endpoint

Untuk:

$$
X_i\sim U(0,\beta),
$$

likelihood:

$$
L(\beta)
=
\beta^{-n}
$$

jika:

$$
\beta\ge x_{(n)},
$$

dan zero otherwise.

Karena $\beta^{-n}$ decreasing terhadap $\beta$, maximum terjadi pada smallest feasible parameter:

$$
\boxed{
\hat\beta_{\text{MLE}}
=
X_{(n)}.
}
$$

> [!IMPORTANT] MLE boundary check
> Differentiation tidak selalu tepat. Selalu periksa:
>
> - parameter domain;
> - support dependence on parameter;
> - boundary candidates.

---

## 8.6 Joint MLE for Normal parameters

Untuk Normal sample dengan unknown $\mu$ dan $\sigma^2$, Miller jointly memaksimumkan:

$$
L(\mu,\sigma^2).
$$

First-order conditions memberikan:

$$
\boxed{
\hat\mu_{\text{MLE}}
=
\bar X
}
$$

dan:

$$
\boxed{
\hat\sigma^2_{\text{MLE}}
=
\frac{1}{n}
\sum_{i=1}^{n}
(X_i-\bar X)^2.
}
$$

Important distinction:

$$
\hat\sigma^2_{\text{MLE}}
\neq
S^2
$$

karena:

$$
S^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}(X_i-\bar X)^2.
$$

Jadi MLE dari $\sigma^2$ generally biased walaupun $S^2$ unbiased.

---

## 8.7 Properties emphasized by Miller

Miller menyatakan bahwa Maximum Likelihood procedures memiliki important asymptotic advantages dan berhubungan erat dengan sufficient estimators dalam theory yang dirujuk textbook.

Practical message-nya: MLE merupakan general construction method, tetapi setiap problem tetap harus memeriksa:

- support;
- parameter domain;
- stationary points;
- boundaries;
- apakah candidate benar-benar maximum.

---

# 9. Bayesian Estimation

`[CORE CF2]`

Miller sekarang mengubah status parameter.

Pada sections sebelumnya:

$$
\theta
$$

adalah unknown constant.

Pada Bayesian estimation, parameter diperlakukan sebagai random variable dengan **prior distribution** yang merepresentasikan prior beliefs.

## 9.1 Posterior distribution

Misalkan prior density:

$$
h(\theta).
$$

Misalkan $W$ adalah statistic dengan conditional sampling density:

$$
f(w\mid\theta).
$$

Miller menulis posterior:

$$
\boxed{
\phi(\theta\mid w)
=
\frac{
h(\theta)f(w\mid\theta)
}{
g(w)
}.
}
$$

di mana $g(w)$ adalah marginal density dari $W$.

Equivalent proportional form:

$$
\boxed{
\phi(\theta\mid w)
\propto
h(\theta)f(w\mid\theta).
}
$$

Ini adalah continuous Bayes theorem.

---

## 9.2 Beta–Binomial conjugacy

Jika:

$$
X\mid\Theta=\theta
\sim
\operatorname{Binomial}(n,\theta)
$$

dan prior:

$$
\Theta\sim\operatorname{Beta}(\alpha,\beta),
$$

Miller memperoleh:

$$
\boxed{
\Theta\mid X=x
\sim
\operatorname{Beta}
(
x+\alpha,\,
n-x+\beta
).
}
$$

Sample memperbarui prior shape parameters dengan:

- menambahkan successes ke $\alpha$;
- menambahkan failures ke $\beta$.

Posterior mean:

$$
\boxed{
E(\Theta\mid X=x)
=
\frac{
x+\alpha
}{
n+\alpha+\beta
}.
}
$$

---

## 9.3 Normal–Normal update

Misalkan:

$$
X_i\mid M=\mu
\sim
N(\mu,\sigma^2),
$$

dengan known $\sigma^2$, dan prior:

$$
M\sim N(\mu_0,\sigma_0^2).
$$

Diberikan sample mean $\bar X=x$, posterior juga Normal:

$$
\boxed{
M\mid\bar X=x
\sim
N(\mu_1,\sigma_1^2).
}
$$

Dengan:

$$
\boxed{
\mu_1
=
\frac{
nx\sigma_0^2+\mu_0\sigma^2
}{
n\sigma_0^2+\sigma^2
}.
}
$$

dan:

$$
\boxed{
\frac{1}{\sigma_1^2}
=
\frac{n}{\sigma^2}
+
\frac{1}{\sigma_0^2}.
}
$$

Posterior mean dapat ditulis sebagai weighted average:

$$
\boxed{
\mu_1
=
wx+(1-w)\mu_0.
}
$$

Bayesian updating menyeimbangkan:

- sample evidence;
- prior information.

Semakin besar sample information, semakin besar weight pada observed mean.

---

## 9.4 Textbook vending-machine example

Miller menggunakan prior:

$$
\mu_0=738,
\qquad
\sigma_0=13.4,
$$

known within-market standard deviation:

$$
\sigma=42.5,
$$

sample size:

$$
n=10,
$$

dan observed mean:

$$
\bar x=692.
$$

Posterior approximately:

$$
\mu_1=715,
\qquad
\sigma_1=9.5.
$$

Miller kemudian menghitung:

$$
P(700<M<720\mid\bar X=692)
\approx0.645.
$$

Conceptual difference dengan frequentist confidence: posterior memungkinkan direct probability statement mengenai parameter karena parameter dimodelkan random.

---

# 10. The Theory in Practice

`[CF2 SUPPORTING CONTEXT]`

Miller kembali ke practical role $\bar X$ sebagai estimator dari population mean.

Sample mean banyak digunakan karena mempunyai desirable properties pada important models, termasuk:

- unbiasedness;
- minimum variance dalam Normal-mean setting;
- sufficiency untuk Normal mean ketika variance known;
- asymptotic reliability dalam banyak kondisi.

Namun point estimate saja tidak mengukur possible estimation error. Hal ini menjadi jembatan langsung ke Chapter 11 tentang interval estimation.

---

# Chapter Synthesis

## Point-estimator quality

### Unbiasedness

$$
\boxed{
E(\hat\theta)=\theta.
}
$$

### Bias

$$
\boxed{
b_n(\theta)=E(\hat\theta)-\theta.
}
$$

### MSE

$$
\boxed{
\operatorname{MSE}
=
\operatorname{Var}(\hat\theta)
+
b_n(\theta)^2.
}
$$

### Consistency

$$
\boxed{
P(|\hat\theta-\theta|<c)\to1.
}
$$

### Sufficiency

$$
\boxed{
f(\mathbf{x};\theta)
=
g(T(\mathbf{x}),\theta)h(\mathbf{x}).
}
$$

---

## Construction methods

### Method of Moments

$$
\boxed{
\tilde m_k=\mu_k'.
}
$$

### Maximum Likelihood

$$
\boxed{
\hat\theta
=
\arg\max_\theta L(\theta).
}
$$

### Bayesian update

$$
\boxed{
\pi(\theta\mid x)
\propto
L(\theta;x)\pi(\theta).
}
$$

---

# Estimation-Method Snapshot

| Method / property | Core object | Main idea |
|---|---|---|
| Unbiasedness | $E(\hat\theta)$ | correct on average |
| Efficiency | $\operatorname{Var}(\hat\theta)$ | smaller variance among unbiased estimators |
| Consistency | $P(|\hat\theta-\theta|<c)$ | converges in probability |
| Sufficiency | factorized joint law | retains all parameter-relevant sample information |
| Robustness | sampling behavior under misspecification | resistant to assumption violations |
| Method of Moments | sample vs population moments | solve moment equations |
| MLE | likelihood | make observed sample most plausible |
| Bayesian | posterior | combine prior and sample evidence |

---

# CF2 Connection Map

| Miller Chapter 10 section | CF2 topic |
|---|---|
| §10.1 Introduction | [[4.5 Estimasi Parameter]] |
| §10.2 Unbiased Estimators | [[4.6 Sifat-Sifat Estimator]] |
| §10.3 Efficiency | [[4.6 Sifat-Sifat Estimator]] |
| §10.4 Consistency | [[4.6 Sifat-Sifat Estimator]] |
| §10.5 Sufficiency | [[4.6 Sifat-Sifat Estimator]] |
| §10.6 Robustness | supporting estimator-quality context |
| §10.7 Method of Moments | [[4.5 Estimasi Parameter]] |
| §10.8 Maximum Likelihood | [[4.5 Estimasi Parameter]] |
| §10.9 Bayesian Estimation | [[4.5 Estimasi Parameter]] |
| §10.10 Theory in Practice | bridge to [[4.7 Selang Kepercayaan]] |

---

# Quick Reading Review

1. Bedakan point estimator dan point estimate.
2. Definisikan unbiasedness dan bias.
3. Apa arti asymptotically unbiased?
4. Mengapa $X/n$ unbiased untuk Binomial parameter?
5. Definisikan MVUE.
6. Apa fungsi Cramér–Rao lower bound?
7. Mengapa relative efficiency berbasis variance untuk unbiased estimators?
8. Mengapa MSE lebih appropriate ketika biased estimators diperbolehkan?
9. Definisikan consistency.
10. Mengapa LLN mengimplikasikan consistency dari $\bar X$?
11. Apa intuitive meaning dari sufficiency?
12. Nyatakan factorization theorem Miller.
13. Mengapa $\sum X_i$ sufficient untuk Bernoulli $\theta$?
14. Mengapa $\bar X$ sufficient untuk Normal mean ketika $\sigma^2$ known?
15. Apa yang dilindungi robustness?
16. Tuliskan Method-of-Moments equations untuk $r$ unknown parameters.
17. Definisikan likelihood function.
18. Mengapa $\ln L$ boleh dimaksimumkan menggantikan $L$?
19. Mengapa boundary points harus diperiksa pada MLE?
20. Mengapa MLE dari Normal variance dibagi $n$, bukan $n-1$?
21. Bedakan prior dan posterior distribution.
22. Nyatakan Beta–Binomial posterior update.
23. Jelaskan weighted-average interpretation dari Normal–Normal posterior mean.
24. Estimator property mana yang disebut dalam CF2 syllabus tetapi tidak dikembangkan sebagai standalone topic di Miller Chapter 10?

---

# Compression Notes

Dipertahankan secara detail:

- estimator/estimate distinction;
- unbiasedness, bias, asymptotic unbiasedness;
- MVUE, relative efficiency, Cramér–Rao mechanism;
- MSE untuk biased estimators;
- consistency;
- sufficiency dan factorization theorem;
- robustness;
- Method of Moments;
- likelihood dan boundary issues;
- Binomial, Exponential, Uniform, dan Normal MLE patterns;
- Beta–Binomial dan Normal–Normal Bayesian updating.

Dikompres:

- repetitive exercises;
- lengthy algebra setelah estimation mechanism sudah jelas;
- historical detail;
- computer-oriented practice discussion;
- advanced regularity conditions yang dirujuk Miller ke sources lain.

---

# Source Traceability

Primary source: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 10 dalam `Topik 4 - [Miller].pdf`.

Source-supported chapter structure:

1. Introduction
2. Unbiased Estimators
3. Efficiency
4. Consistency
5. Sufficiency
6. Robustness
7. The Method of Moments
8. The Method of Maximum Likelihood
9. Bayesian Estimation
10. The Theory in Practice

Important retained source elements:

- Definition 1 — point estimation
- Definitions 2–3 — unbiased dan asymptotically unbiased estimators
- Definition 4 dan Cramér–Rao theorem — MVUE/efficiency
- Definition 5 — consistency
- Definition 6 dan Theorem 4 — sufficiency/factorization
- §6 — robustness
- Definition 7 — sample moments dan moment equations
- Definition 8 — maximum likelihood
- Examples 15–18 — Binomial, Exponential, Uniform-boundary, Normal joint MLE
- Theorems 5–6 — Beta–Binomial dan Normal–Normal Bayesian updates

Scope authority: Silabus CF2 memasukkan Miller Chapter 10 sebagai official Topik 4 reference.

Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 10 menjelaskan dua hal sekaligus: bagaimana menilai estimator dan bagaimana membangunnya—unbiasedness, efficiency, consistency, dan sufficiency menggambarkan sampling quality, sedangkan moments, maximum likelihood, dan Bayesian updating memberikan systematic estimation methods.**
