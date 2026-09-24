---
type: "condensed-book"
exam: "CF2"
book: "Probability and Statistical Inference, 9th Edition"
author: "Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman"
chapter: "3"
chapter_title: "Continuous Distributions"
cf2_topics: ["2.2", "2.3", "2.6"]
cf2_relevance: "High"
source_scope: "Chapter 3; Sections 3.1-3.3"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggTanis]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, Tanis & Zimmerman — Chapter 3: Continuous Distributions

> [!ABSTRACT] Chapter in One View
> Chapter ini memindahkan machinery Chapter 2 dari probability mass pada countable points ke **probability density pada intervals**. Penulis memulai dengan Uniform distribution untuk memperkenalkan PDF, CDF, integration-based probability, expectation, variance, MGF, dan percentiles pada random variable kontinu. Section berikutnya mengembangkan **Exponential** sebagai waiting time to first occurrence dalam Poisson process, lalu **Gamma** sebagai waiting time sampai occurrence ke-$\alpha$ dalam bentuk yang digeneralisasi melalui gamma function; **Chi-square** muncul sebagai special Gamma distribution yang sangat penting bagi inference. Chapter kemudian memperkenalkan **Normal distribution**, membuktikan normalization melalui Gaussian integral, memperoleh MGF dan moments, lalu membangun standard Normal, standardization, table/quantile interpretation, dan hubungan $Z^2\sim\chi^2(1)$. Chapter ini mempertahankan satu prinsip utama: probability untuk continuous variable adalah **area**, bukan height pada satu point. Seluruh Chapter 3 merupakan referensi resmi Hogg–Tanis untuk Topik 2 CF2.

## 1. Why This Chapter Exists

Discrete models menaruh probability pada individual support points. Banyak measurements—time, length, weight, lifetime, error—lebih natural dimodelkan pada continuum. Untuk random variable seperti ini, probability pada satu exact value bukan object utama; yang bermakna adalah probability pada interval atau region.

Chapter 3 karena itu mengganti summation dengan integration, tetapi menjaga architecture yang sudah dibangun Chapter 2:

- PMF menjadi PDF;
- cumulative sum menjadi integral CDF;
- expectation menjadi integral weighted by density;
- moments dan MGF tetap berfungsi;
- named distributions kembali muncul dari stochastic mechanism tertentu.

Section 3.2 menghubungkan discrete Poisson counts dari Chapter 2 dengan continuous waiting times. Section 3.3 kemudian membangun Normal sebagai central continuous model yang kelak menjadi fondasi sampling distributions dan inferential procedures.

## 2. Chapter Map

- **3.1 Random Variables of the Continuous Type**
  - Uniform distribution
  - PDF dan CDF
  - probability sebagai area/integral
  - expectation, variance, MGF
  - percentiles, median, quartiles
- **3.2 The Exponential, Gamma, and Chi-Square Distributions**
  - Exponential waiting time from Poisson process
  - scale parameter $\theta$
  - memoryless/forgetfulness property
  - Gamma waiting time and gamma function
  - Chi-square as Gamma special case
- **3.3 The Normal Distribution**
  - Normal PDF and normalization
  - Normal MGF, mean, variance
  - Standard Normal and CDF
  - percentiles / upper-tail points
  - standardization theorem
  - relationship to Chi-square

| Textbook Section | CF2 Relevance | Connected Syllabus Note |
|---|---|---|
| 3.1 Random Variables of the Continuous Type | Core | [[2.2 Variabel Acak Kontinu]], [[2.3 Fungsi Pembangkit]], [[2.6 Distribusi Kontinu Umum]] |
| 3.2 Exponential, Gamma, and Chi-Square | Core; Chi-square also supports later inference | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
| 3.3 Normal Distribution | Core | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]], [[4.3 Teorema Limit Pusat (CLT)]] |

---

## 3. 3.1 Random Variables of the Continuous Type

### Uniform distribution as the entry point

Penulis memulai dari pemilihan point secara fair dari interval $[a,b]$. Jika probability proportional terhadap interval length, maka untuk $a\le x<b$,

$$
F(x)=P(X\le x)=\frac{x-a}{b-a}.
$$

Secara lengkap,

$$
F(x)=
\begin{cases}
0, & x<a,\\
\dfrac{x-a}{b-a}, & a\le x<b,\\
1, & x\ge b.
\end{cases}
$$

Derivative pada interior support memberi density

$$
\boxed{
f(x)=\frac{1}{b-a},\qquad a\le x\le b
}.
$$

Textbook menulis

$$
X\sim U(a,b).
$$

Graph pada Figure 3.1-1 menunjukkan rectangle PDF dan linear CDF.

### Definition of a PDF

Jika support $S$ berupa interval atau union of intervals, $f$ dapat menjadi PDF jika:

1. nonnegative pada support,
   $$
   f(x)\ge0;
   $$
2. total area adalah $1$,
   $$
   \int_S f(x)\,dx=1;
   $$
3. probability interval diperoleh dari area,
   $$
   P(a<X<b)=\int_a^b f(x)\,dx.
   $$

CDF adalah

$$
\boxed{
F(x)=P(X\le x)=\int_{-\infty}^{x}f(t)\,dt
}.
$$

Di titik tempat derivative exists,

$$
F'(x)=f(x).
$$

> [!WARNING] Important Distinction
> **Density $f(x)$ ≠ probability $P(X=x)$.**
>
> Untuk continuous random variable,
>
> $$
> P(X=x)=0
> $$
>
> pada setiap individual point. Karena itu $f(x)$ bahkan boleh lebih besar dari $1$ pada sebagian support, selama nonnegative dan total area tetap $1$.

Akibat point probabilities nol,

$$
P(a<X<b)=P(a\le X\le b)=P(a<X\le b),
$$

selama model kontinu yang dibahas.

### A nonuniform continuous example

[TEXTBOOK EXAMPLE] Jika

$$
g(y)=2y,\qquad 0<y<1,
$$

maka

$$
G(y)=
\begin{cases}
0,&y<0,\\
y^2,&0\le y<1,\\
1,&y\ge1.
\end{cases}
$$

Probability interval dapat dihitung dengan CDF difference. Contohnya,

$$
P\left(\frac12<Y\le\frac34\right)
=G\left(\frac34\right)-G\left(\frac12\right)
=\frac5{16}.
$$

Figure 3.1-2 menampilkan PDF yang meningkat linear dan CDF quadratic, menegaskan hubungan derivative/integral keduanya.

### Expectation and variance for continuous variables

Definitions dari Chapter 2 dipertahankan, tetapi sums diganti integrals:

$$
E[u(X)]
=
\int_S u(x)f(x)\,dx,
$$

jika integral exists.

Mean:

$$
\mu=E(X)=\int_S x f(x)\,dx.
$$

Second raw moment:

$$
E(X^2)=\int_S x^2f(x)\,dx.
$$

Variance:

$$
\operatorname{Var}(X)
=E[(X-\mu)^2]
=E(X^2)-\mu^2.
$$

MGF:

$$
M_X(t)=E(e^{tX})
=
\int_S e^{tx}f(x)\,dx,
$$

untuk values $t$ di mana integral finite.

### Uniform moments

Untuk $X\sim U(a,b)$, textbook memberi hasil

$$
\boxed{E(X)=\frac{a+b}{2}},
$$

$$
\boxed{\operatorname{Var}(X)=\frac{(b-a)^2}{12}}.
$$

MGF untuk $t\neq0$:

$$
M_X(t)=\frac{e^{tb}-e^{ta}}{t(b-a)},
$$

dengan $M_X(0)=1$ melalui continuity.

### MGF example with unbounded support

[TEXTBOOK EXAMPLE] Untuk

$$
f(x)=xe^{-x},\qquad x\ge0,
$$

textbook menghitung

$$
M_X(t)=\int_0^\infty e^{tx}xe^{-x}\,dx
=\frac{1}{(1-t)^2},\qquad t<1.
$$

Kemudian

$$
M_X'(0)=2,
$$

$$
M_X''(0)=6,
$$

sehingga

$$
E(X)=2,
$$

$$
\operatorname{Var}(X)=6-2^2=2.
$$

Contoh ini menegaskan bahwa **domain MGF** harus ditentukan, terutama pada unbounded support.

### Percentiles, median, quartiles

Percentile $\pi_p$ didefinisikan oleh

$$
P(X\le\pi_p)=p,
$$

atau

$$
F(\pi_p)=p.
$$

Special cases:

- median: $m=\pi_{0.50}$;
- first quartile: $q_1=\pi_{0.25}$;
- second quartile: $q_2=\pi_{0.50}$;
- third quartile: $q_3=\pi_{0.75}$.

[TEXTBOOK EXAMPLE] Untuk CDF

$$
F(x)=1-e^{-(x/4)^3},\qquad x\ge0,
$$

percentile ditemukan dengan menyelesaikan equation $F(\pi_p)=p$, yaitu

$$
\pi_p=4[-\ln(1-p)]^{1/3}.
$$

Jadi percentile computation pada continuous distribution pada dasarnya adalah **inverse CDF problem**.

---

## 4. 3.2 The Exponential, Gamma, and Chi-Square Distributions

### Exponential waiting time from a Poisson process

Chapter 2 memodelkan number of occurrences dalam interval. Sekarang $W$ adalah waiting time sampai **first occurrence**.

Jika Poisson process memiliki mean rate $\lambda$ per unit, maka untuk $w\ge0$,

$$
P(W>w)=P(\text{no occurrence in }[0,w]).
$$

Count pada interval length $w$ adalah Poisson dengan mean $\lambda w$, sehingga

$$
P(W>w)=e^{-\lambda w}.
$$

Maka

$$
F_W(w)=1-e^{-\lambda w},\qquad w\ge0,
$$

serta

$$
f_W(w)=\lambda e^{-\lambda w},\qquad w\ge0.
$$

Textbook kemudian menulis

$$
\lambda=\frac1\theta
$$

dan menggunakan **scale/mean parameterization**:

$$
\boxed{
f(x)=\frac1\theta e^{-x/\theta},\qquad x\ge0
}.
$$

> [!NOTE] Parameterization
> Dalam Hogg–Tanis Chapter 3, Exponential menggunakan $\theta>0$ sebagai **mean/scale**, sehingga rate adalah $\lambda=1/\theta$.

CDF:

$$
F(x)=
\begin{cases}
0,&x<0,\\
1-e^{-x/\theta},&x\ge0.
\end{cases}
$$

Survival:

$$
P(X>x)=e^{-x/\theta}.
$$

### MGF, mean, variance

MGF:

$$
M_X(t)=\frac{1}{1-\theta t},\qquad t<\frac1\theta.
$$

Sehingga

$$
\boxed{E(X)=\theta},
$$

$$
\boxed{\operatorname{Var}(X)=\theta^2}.
$$

Median diperoleh dari

$$
1-e^{-m/\theta}=\frac12,
$$

sehingga

$$
m=\theta\ln2.
$$

### Memorylessness / forgetfulness

Textbook menunjukkan property bahwa untuk $s,t\ge0$,

$$
P(X>s+t\mid X>s)=P(X>t).
$$

Menggunakan survival function:

$$
\frac{P(X>s+t)}{P(X>s)}
=
\frac{e^{-(s+t)/\theta}}{e^{-s/\theta}}
=e^{-t/\theta}.
$$

Artinya, setelah system telah bertahan selama $s$, additional waiting-time distribution tidak bergantung pada elapsed time $s$. Textbook menggambarkannya sebagai “forgetfulness.”

[TEXTBOOK CONTEXT] Textbook juga memberi caveat aplikasi: jika failure mechanism physically ages over time, Exponential mungkin bukan model lifetime yang tepat karena constant-memoryless structure-nya terlalu kuat.

### Gamma distribution as waiting time to later occurrences

Jika Poisson process rate $\lambda$ dan $W$ adalah waiting time sampai occurrence ke-$\alpha$ untuk integer positive $\alpha$, derivation dari Poisson count menghasilkan density Gamma. Textbook kemudian memperluas $\alpha$ ke positive real menggunakan gamma function.

Gamma function:

$$
\Gamma(\alpha)=\int_0^\infty y^{\alpha-1}e^{-y}\,dy,
\qquad \alpha>0.
$$

Recursion:

$$
\Gamma(\alpha+1)=\alpha\Gamma(\alpha).
$$

Untuk positive integer $n$,

$$
\Gamma(n)=(n-1)!.
$$

### Gamma PDF

> [!NOTE] Parameterization
> Hogg–Tanis menggunakan **shape–scale** parameters $\alpha>0$ dan $\theta>0$.

PDF:

$$
\boxed{
f(x)=
\frac{1}{\Gamma(\alpha)\theta^\alpha}
 x^{\alpha-1}e^{-x/\theta},
\qquad x>0
}.
$$

Jika model berasal dari Poisson waiting time dengan rate $\lambda$, maka

$$
\theta=\frac1\lambda.
$$

MGF:

$$
\boxed{
M_X(t)=(1-\theta t)^{-\alpha},
\qquad t<\frac1\theta
}.
$$

Mean dan variance:

$$
\boxed{E(X)=\alpha\theta},
$$

$$
\boxed{\operatorname{Var}(X)=\alpha\theta^2}.
$$

Exponential merupakan special case

$$
\alpha=1.
$$

[TEXTBOOK EXAMPLE] Jika arrivals mengikuti Poisson process rate $\lambda=1/2$ per minute dan $X$ adalah waiting time sampai second arrival, maka

$$
\alpha=2,\qquad \theta=\frac1\lambda=2.
$$

Maka

$$
E(X)=\alpha\theta=4\text{ minutes}.
$$

### Chi-square as a special Gamma distribution

Textbook kemudian menetapkan

$$
\theta=2,
$$

$$
\alpha=\frac r2,
$$

dan mendefinisikan Chi-square distribution dengan $r$ degrees of freedom:

$$
X\sim\chi^2(r).
$$

PDF mengikuti Gamma:

$$
f(x)
=
\frac{1}{2^{r/2}\Gamma(r/2)}
 x^{r/2-1}e^{-x/2},
\qquad x>0.
$$

Mean dan variance:

$$
\boxed{E(X)=r},
$$

$$
\boxed{\operatorname{Var}(X)=2r}.
$$

MGF:

$$
\boxed{
M_X(t)=(1-2t)^{-r/2},
\qquad t<\frac12
}.
$$

Textbook memperkenalkan CDF tables dan percentiles untuk Chi-square karena distribution ini digunakan intensif pada statistical inference.

> [!INFO] CF2 Connection
> Exponential dan Gamma adalah core [[2.6 Distribusi Kontinu Umum]]. Chi-square muncul di chapter ini sebagai special Gamma dan kemudian menjadi machinery penting untuk [[4.2 Distribusi Sampel]] dan inferensi variance.

---

## 5. 3.3 The Normal Distribution

### Why the Normal family is introduced

Penulis memulai dari empirical observation bahwa banyak distributions dari measurements atau repeated errors mempunyai approximate bell shape: symmetric, concentrated near the middle, dan thinner toward extremes. Normal family memberi model matematis untuk pattern tersebut.

Random variable $X$ memiliki Normal distribution jika

$$
\boxed{
f(x)
=
\frac{1}{\sigma\sqrt{2\pi}}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right],
\qquad -\infty<x<\infty
}
$$

dengan

$$
-\infty<\mu<\infty,
\qquad \sigma>0.
$$

Notation:

$$
X\sim N(\mu,\sigma^2).
$$

### Why the PDF integrates to one

Textbook tidak hanya menyatakan normalization. Ia membuktikannya melalui Gaussian integral.

Setelah substitution

$$
z=\frac{x-\mu}{\sigma},
$$

cukup menunjukkan

$$
I=
\int_{-\infty}^{\infty}
\frac{1}{\sqrt{2\pi}}e^{-z^2/2}\,dz=1.
$$

Karena $I>0$, evaluate $I^2$ sebagai double integral:

$$
I^2
=
\frac1{2\pi}
\int_{-\infty}^{\infty}
\int_{-\infty}^{\infty}
\exp\left[-\frac{x^2+y^2}{2}\right]
\,dx\,dy.
$$

Ubah ke polar coordinates:

$$
x=r\cos\theta,\qquad y=r\sin\theta,
$$

Jacobian element menjadi $r\,dr\,d\theta$:

$$
I^2
=
\frac1{2\pi}
\int_0^{2\pi}
\int_0^{\infty}e^{-r^2/2}r\,dr\,d\theta
=1.
$$

Maka $I=1$.

[CF2 SUPPORTING CONTEXT] Derivation ini penting karena menunjukkan mengapa constant $1/(\sigma\sqrt{2\pi})$ muncul dan sekaligus memberi preview change-of-variables reasoning.

### Normal MGF

Textbook menghitung MGF dengan completing the square dalam exponent. Hasilnya:

$$
\boxed{
M_X(t)
=
\exp\left(\mu t+\frac12\sigma^2t^2\right)
}.
$$

Derivatives di $0$ memberikan

$$
E(X)=\mu,
$$

$$
\operatorname{Var}(X)=\sigma^2.
$$

Jadi symbols $\mu$ dan $\sigma^2$ dalam PDF memang mean dan variance distribution.

### Standard Normal

Jika

$$
Z\sim N(0,1),
$$

$Z$ disebut standard Normal random variable. Textbook menulis CDF-nya sebagai standard Normal distribution function dan menggunakan table untuk probabilities/quantiles.

Karena density symmetric sekitar zero,

$$
P(Z\le -z)=P(Z\ge z).
$$

Dalam CDF notation,

$$
\Phi(-z)=1-\Phi(z).
$$

### Standardization theorem

Jika

$$
X\sim N(\mu,\sigma^2),
$$

maka

$$
\boxed{
Z=\frac{X-\mu}{\sigma}\sim N(0,1)
}.
$$

Textbook membuktikan relationship melalui CDF transformation. Untuk any $z$,

$$
P\left(\frac{X-\mu}{\sigma}\le z\right)
=
P(X\le\mu+\sigma z),
$$

kemudian substitution pada Normal integral menghasilkan standard Normal CDF.

Ini memungkinkan probability general Normal dihitung dari satu standard distribution:

$$
P(a<X<b)
=
P\left(
\frac{a-\mu}{\sigma}<Z<\frac{b-\mu}{\sigma}
\right).
$$

> [!WARNING] Important Distinction
> Standardization mengubah **scale dan location**, bukan mengubah probability statement secara arbitrer. Batas event juga harus ditransformasi dengan transformation yang sama.

### Normal percentiles

Textbook menggunakan upper-tail notation $z_\alpha$ untuk point yang memenuhi

$$
P(Z>z_\alpha)=\alpha.
$$

Equivalently,

$$
P(Z\le z_\alpha)=1-\alpha.
$$

Jadi $z_\alpha$ adalah $(100(1-\alpha))$th percentile dari standard Normal.

### Relationship between Normal and Chi-square

Jika

$$
Z\sim N(0,1),
$$

maka textbook menunjukkan

$$
\boxed{Z^2\sim\chi^2(1)}.
$$

Lebih umum jika $X\sim N(\mu,\sigma^2)$,

$$
\left(\frac{X-\mu}{\sigma}\right)^2
\sim\chi^2(1).
$$

Relationship ini adalah conceptual bridge penting dari Normal measurements ke Chi-square sampling theory pada chapter berikutnya.

> [!INFO] CF2 Connection
> Normal model adalah bagian inti [[2.6 Distribusi Kontinu Umum]]. Standardization digunakan langsung pada [[4.2 Distribusi Sampel]] dan menjadi bahasa utama untuk [[4.3 Teorema Limit Pusat (CLT)]].

---

## Chapter Synthesis

Chapter 3 menjaga struktur matematika Chapter 2 tetapi mengganti point masses dengan density over intervals. Untuk random variable kontinu, support menentukan tempat density hidup, PDF menentukan bagaimana unit probability tersebar, dan CDF mengakumulasi density melalui integration. Point probability hilang; interval probability menjadi area.

Setelah general continuous framework dibangun, chapter mengembangkan named distributions dari dua sumber besar. Pertama, **Poisson-process waiting times** menghasilkan Exponential dan Gamma: Exponential untuk first occurrence, Gamma untuk later occurrences/generalized shape, dengan scale $\theta=1/\lambda$. Chi-square kemudian muncul sebagai Gamma special case dan membuka jalan menuju sampling distributions. Kedua, Normal diperkenalkan sebagai symmetric bell-shaped family dengan tractable standardization; proof normalization dan MGF mengikat PDF parameter $\mu,\sigma^2$ langsung ke mean dan variance.

Satu alur yang menyatukan chapter adalah:

> **support → density → cumulative area → expectation/moments → parameter interpretation → named stochastic model → transformation/standardization.**

Ini adalah fondasi continuous probability yang akan terus digunakan di CF2 ketika membahas transformations, sampling distributions, CLT, confidence intervals, dan hypothesis testing.

## Key Relationships

| Relationship | Meaning | Conditions / Support | CF2 Link |
|---|---|---|---|
| $F(x)=\int_{-\infty}^x f(t)dt$ | CDF from PDF | continuous model | [[2.2 Variabel Acak Kontinu]] |
| $F'(x)=f(x)$ | PDF from CDF where differentiable | derivative exists | [[2.2 Variabel Acak Kontinu]] |
| $E[u(X)]=\int u(x)f(x)dx$ | Expectation of function | integral exists | [[2.2 Variabel Acak Kontinu]] |
| $M_X(t)=\int e^{tx}f(x)dx$ | Continuous MGF | finite around $0$ | [[2.3 Fungsi Pembangkit]] |
| $U(a,b): E(X)=(a+b)/2$ | Uniform center | $a<b$ | [[2.6 Distribusi Kontinu Umum]] |
| Exponential survival $e^{-x/\theta}$ | Waiting time to first occurrence | $x\ge0$ | [[2.6 Distribusi Kontinu Umum]] |
| Gamma MGF $(1-\theta t)^{-\alpha}$ | Shape-scale Gamma | $t<1/\theta$ | [[2.6 Distribusi Kontinu Umum]] |
| $\chi^2(r)=\Gamma(r/2,2)$ | Chi-square as Gamma | $r>0$ in distribution form | [[4.2 Distribusi Sampel]] |
| Normal MGF $e^{\mu t+\sigma^2t^2/2}$ | Encodes Normal moments | all real $t$ | [[2.6 Distribusi Kontinu Umum]] |
| $(X-\mu)/\sigma\sim N(0,1)$ | Standardization | $X\sim N(\mu,\sigma^2)$ | [[2.6 Distribusi Kontinu Umum]] |
| $Z^2\sim\chi^2(1)$ | Normal–Chi-square bridge | $Z\sim N(0,1)$ | [[4.2 Distribusi Sampel]] |

## Distribution / Model Snapshot

| Model | Parameterization in Hogg–Tanis | Support | Mean | Variance | MGF |
|---|---|---|---|---|---|
| Uniform$(a,b)$ | endpoints $a<b$ | $a\le x\le b$ | $(a+b)/2$ | $(b-a)^2/12$ | $(e^{tb}-e^{ta})/[t(b-a)]$ for $t\ne0$ |
| Exponential$(\theta)$ | scale/mean $\theta$ | $x\ge0$ | $\theta$ | $\theta^2$ | $(1-\theta t)^{-1}$ |
| Gamma$(\alpha,\theta)$ | shape $\alpha$, scale $\theta$ | $x>0$ | $\alpha\theta$ | $\alpha\theta^2$ | $(1-\theta t)^{-\alpha}$ |
| Chi-square$(r)$ | Gamma$(r/2,2)$ | $x>0$ | $r$ | $2r$ | $(1-2t)^{-r/2}$ |
| Normal$(\mu,\sigma^2)$ | mean $\mu$, variance $\sigma^2$ | all real $x$ | $\mu$ | $\sigma^2$ | $e^{\mu t+\sigma^2t^2/2}$ |

> [!NOTE] Parameterization
> Gamma/Exponential formulas di note ini mengikuti textbook: $\theta$ adalah **scale**, bukan rate. Jika menggunakan rate $\lambda$, mapping-nya $\lambda=1/\theta$.

## Notation Used in This Chapter

| Symbol | Meaning | Support / Domain | Notes |
|---|---|---|---|
| $f(x)$ | PDF | nonnegative, integrates to $1$ | height is not point probability |
| $F(x)$ | CDF | all real $x$ | continuous for continuous-type RVs |
| $\mu$ | mean | real if finite | $E(X)$ |
| $\sigma^2$ | variance | positive/nonnegative | Normal uses as parameter |
| $M_X(t)$ | MGF | where integral finite | generates moments |
| $\pi_p$ | $100p$th percentile | $0<p<1$ | solves $F(\pi_p)=p$ |
| $\theta$ | Exponential/Gamma scale | $\theta>0$ | $\theta=1/\lambda$ in Poisson waiting-time interpretation |
| $\alpha$ | Gamma shape | $\alpha>0$ | integer value connects to occurrence count |
| $r$ | Chi-square degrees of freedom | positive parameter | $\alpha=r/2$ |
| $\Phi(z)$ | standard Normal CDF | all real $z$ | notation used here for clarity |
| $z_\alpha$ | standard Normal upper-tail point | $P(Z>z_\alpha)=\alpha$ | percentile $1-\alpha$ |

## Compression Notes

### Retained in Detail

- Uniform derivation of PDF/CDF and continuous probability framework;
- density-vs-probability distinction;
- expectation, variance, MGF, and percentile mechanics;
- Exponential derivation from Poisson waiting time;
- scale parameterization and memoryless property;
- Gamma function, Gamma PDF/MGF/moments, and Poisson waiting-time connection;
- Chi-square as Gamma special case and its moments/MGF;
- Normal PDF, Gaussian-integral normalization argument, MGF, standardization, and Chi-square relationship.

### Condensed

- repeated CDF/table lookup examples;
- long integration-by-parts details after the main technique is clear;
- repeated probability arithmetic;
- extended graphical descriptions of changing parameter values;
- exercise sets and routine variants of the same percentile calculation.

### Omitted / Beyond CF2

- software/table-operation instructions were omitted;
- most application-only examples were shortened when they did not introduce a new mathematical mechanism;
- end-of-chapter exercises were not reproduced.

## CF2 Connection Map

```text
Continuous random variable
        ↓
Support + PDF f(x)
        ↓
Area probabilities
        ↓
CDF F(x)
        ↓
Expectation / variance / MGF
        ↓
[[2.2 Variabel Acak Kontinu]]
        ↓
Named continuous models
        ├── Uniform
        ├── Exponential ← first Poisson waiting time
        ├── Gamma ← later Poisson waiting time
        │       ↓
        │   Chi-square special case
        └── Normal
                ↓
          Standardization
                ↓
[[2.6 Distribusi Kontinu Umum]]
                ↓
Chi-square + Normal machinery
        ↓
[[4.2 Distribusi Sampel]]
        ↓
[[4.3 Teorema Limit Pusat (CLT)]]
```

## Quick Reading Review

- Continuous probability adalah area under density; exact point probability adalah zero.
- PDF harus nonnegative dan total integral-nya $1$, tetapi height PDF tidak harus $\le1$.
- CDF selalu mengakumulasi density: $F(x)=\int_{-\infty}^x f(t)dt$.
- Di titik differentiable, $F'(x)=f(x)$.
- Continuous expectation memakai integral $\int u(x)f(x)dx$.
- Uniform$(a,b)$ mempunyai constant density $1/(b-a)$.
- Percentile adalah inverse-CDF problem: $F(\pi_p)=p$.
- Exponential muncul sebagai waiting time to first Poisson occurrence.
- Hogg–Tanis memakai Exponential scale $\theta$ sehingga mean $\theta$ dan rate $1/\theta$.
- Exponential memoryless: elapsed waiting time tidak mengubah distribution additional waiting time.
- Gamma menggunakan shape $\alpha$ dan scale $\theta$; mean $\alpha\theta$, variance $\alpha\theta^2$.
- Chi-square$(r)$ adalah Gamma$(r/2,2)$ dengan mean $r$ dan variance $2r$.
- Normal PDF ditentukan oleh $\mu$ dan $\sigma^2$, yang melalui MGF terbukti merupakan mean dan variance.
- Standardization $Z=(X-\mu)/\sigma$ mengubah Normal umum menjadi $N(0,1)$.
- Standard Normal symmetry menghubungkan left dan right tails.
- $Z^2\sim\chi^2(1)$ menghubungkan Normal dan Chi-square dan menjadi bridge ke sampling distributions.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Uniform model, continuous PDF/CDF definitions | Hogg, Tanis & Zimmerman, Chapter 3.1 |
| Example $g(y)=2y$, PDF/CDF graphs and probability calculations | Chapter 3.1, Example 3.1-1 / Figure 3.1-2 |
| Continuous expectation, variance, MGF | Chapter 3.1 |
| Percentiles, median, quartiles | Chapter 3.1 |
| Exponential distribution from Poisson waiting time | Chapter 3.2 |
| Exponential MGF, mean, variance, median, forgetfulness | Chapter 3.2 |
| Gamma function and Gamma distribution | Chapter 3.2 |
| Gamma waiting-time interpretation, MGF, mean, variance | Chapter 3.2 |
| Chi-square as Gamma special case and table/percentile setup | Chapter 3.2 |
| Normal PDF and Gaussian-integral normalization | Chapter 3.3 |
| Normal MGF, mean, variance | Chapter 3.3 |
| Standard Normal, symmetry, percentile notation | Chapter 3.3 |
| Standardization theorem | Chapter 3.3, Theorem 3.3-1 |
| Normal-to-Chi-square relationship | Chapter 3.3 |
| CF2 relevance and chapter mapping | Silabus CF2 — Topik 2 |
