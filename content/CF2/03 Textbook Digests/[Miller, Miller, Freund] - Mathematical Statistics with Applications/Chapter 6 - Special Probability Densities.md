# Miller Chapter 6 — Special Probability Densities

> **Source:** Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 6  
> **Peran dalam CF2:** Condensed Textbook Note — mengikuti struktur chapter dan parameterization Miller.  
> **Silabus terkait:** [[2.6 Distribusi Kontinu Umum]], [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.3 Distribusi Bersyarat (Conditional Distribution)]], [[3.5 Independensi dan Korelasi]]

---

## Chapter Map

Chapter 6 adalah continuous counterpart dari Chapter 5.

Perkembangan utama:

$$
\text{Uniform}
\rightarrow
\text{Gamma family}
\rightarrow
\text{Exponential}
\rightarrow
\chi^2
\rightarrow
\text{Beta}
\rightarrow
\text{Normal}
\rightarrow
\text{Bivariate Normal}.
$$

Miller memberi perhatian besar pada:

- support;
- normalization;
- Gamma function;
- parameterization;
- mean dan variance;
- MGF;
- standardization;
- conditional Normal distributions;
- special role of correlation under bivariate normality.

---

# 1. Introduction

[CORE CF2]

Chapter ini mempelajari continuous probability densities yang paling penting dalam statistical theory dan applications.

Seperti pada Chapter 5, Miller tidak hanya memberikan formula, tetapi juga menurunkan:

- parameters;
- moments;
- MGFs;
- relationships antar-distributions.

---

# 2. The Uniform Distribution

[CORE CF2]

Continuous Uniform distribution menggambarkan probability yang tersebar dengan constant density pada interval $(\alpha,\beta)$.

[PARAMETERIZATION]

Miller menggunakan lower endpoint $\alpha$ dan upper endpoint $\beta$, dengan

$$
\alpha<\beta.
$$

PDF:

$$
\boxed{
u(x;\alpha,\beta)
=
\begin{cases}
\dfrac{1}{\beta-\alpha},
& \alpha<x<\beta,\\[6pt]
0,
& \text{elsewhere}.
\end{cases}
}
$$

Density constant karena total area harus:

$$
(\beta-\alpha)
\left(
\frac{1}{\beta-\alpha}
\right)
=1.
$$

---

## 2.1 Mean and variance

Miller menyatakan:

$$
\boxed{
E(X)=\frac{\alpha+\beta}{2}.
}
$$

$$
\boxed{
\operatorname{Var}(X)
=
\frac{(\beta-\alpha)^2}{12}.
}
$$

Interpretasi:

- mean adalah midpoint interval;
- variance hanya bergantung pada interval width.

Menggeser kedua endpoint dengan jumlah yang sama mengubah mean tetapi tidak variance.

---

# 3. The Gamma, Exponential, and Chi-Square Distributions

[CORE CF2]

Miller membangun Gamma family dari density kernel:

$$
x^{\alpha-1}e^{-x/\beta},
\qquad x>0.
$$

Diperlukan normalization constant agar total area menjadi $1$.

---

## 3.1 Gamma function

Miller mendefinisikan:

$$
\boxed{
\Gamma(\alpha)
=
\int_0^\infty
y^{\alpha-1}e^{-y}\,dy,
\qquad
\alpha>0.
}
$$

Integration by parts menghasilkan recursion:

$$
\boxed{
\Gamma(\alpha)
=
(\alpha-1)\Gamma(\alpha-1),
\qquad
\alpha>1.
}
$$

Karena:

$$
\Gamma(1)=1,
$$

untuk positive integer $\alpha$:

$$
\Gamma(\alpha)
=
(\alpha-1)!.
$$

Special value yang penting:

$$
\Gamma\left(\frac12\right)=\sqrt{\pi}.
$$

Hasil-hasil ini memungkinkan normalization pada Gamma density.

---

# 3.2 Gamma Distribution

[PARAMETERIZATION]

Miller menggunakan **shape-scale convention**:

- shape $=\alpha>0$;
- scale $=\beta>0$.

PDF:

$$
\boxed{
g(x;\alpha,\beta)
=
\begin{cases}
\dfrac{1}{\beta^\alpha\Gamma(\alpha)}
x^{\alpha-1}e^{-x/\beta},
& x>0,\\[8pt]
0,
& \text{elsewhere}.
\end{cases}
}
$$

[IMPORTANT DISTINCTION]

Ini adalah **scale parameterization**.

Jika sumber lain menggunakan rate $\lambda$, maka mapping-nya:

$$
\lambda=\frac{1}{\beta}.
$$

Menggunakan formula rate sambil menginterpretasikan $\beta$ Miller sebagai rate akan menghasilkan jawaban numerik yang salah.

---

## 3.3 Gamma moments

Miller menurunkan $r$-th moment about the origin:

$$
\boxed{
\mu_r'
=
E(X^r)
=
\frac{
\beta^r\Gamma(\alpha+r)
}{
\Gamma(\alpha)
}.
}
$$

Untuk $r=1$:

$$
E(X)
=
\beta
\frac{\Gamma(\alpha+1)}{\Gamma(\alpha)}
=
\alpha\beta.
$$

Untuk $r=2$:

$$
E(X^2)
=
\alpha(\alpha+1)\beta^2.
$$

Maka:

$$
\boxed{
E(X)=\alpha\beta,
}
$$

$$
\boxed{
\operatorname{Var}(X)=\alpha\beta^2.
}
$$

---

## 3.4 Gamma MGF

Miller memberikan:

$$
\boxed{
M_X(t)
=
(1-\beta t)^{-\alpha}.
}
$$

[ASSUMPTION]

MGF ada jika:

$$
t<\frac{1}{\beta}.
$$

---

# 3.5 Exponential Distribution

Exponential adalah special case Gamma:

$$
\alpha=1,
\qquad
\beta=\theta.
$$

[PARAMETERIZATION]

Miller menggunakan **scale/mean parameter** $\theta>0$.

PDF:

$$
\boxed{
g(x;\theta)
=
\begin{cases}
\dfrac{1}{\theta}e^{-x/\theta},
& x>0,\\[6pt]
0,
& \text{elsewhere}.
\end{cases}
}
$$

Karena itu:

$$
\boxed{
E(X)=\theta,
}
$$

$$
\boxed{
\operatorname{Var}(X)=\theta^2.
}
$$

Jika rate notation $\lambda$ digunakan di sumber lain:

$$
\lambda=\frac{1}{\theta}.
$$

---

## 3.6 Connection to Poisson process

Miller menurunkan exponential waiting time dari Poisson counts.

Misalkan event occurrence rate adalah $\alpha$ per unit time.

Untuk waiting time $Y$ sampai first event:

$$
P(Y\le y)
=
1-P(Y>y).
$$

Tidak ada event hingga waktu $y$ berarti zero Poisson occurrences:

$$
P(Y>y)
=
P(N(y)=0)
=
e^{-\alpha y}.
$$

Maka:

$$
F_Y(y)
=
1-e^{-\alpha y},
\qquad y>0,
$$

dan dengan diferensiasi:

$$
f_Y(y)
=
\alpha e^{-\alpha y}.
$$

Ini adalah Exponential dengan:

$$
\theta=\frac{1}{\alpha}.
$$

Hubungan struktural:

$$
\boxed{
\text{Poisson counts}
\longleftrightarrow
\text{Exponential waiting times}.
}
$$

---

## 3.7 Textbook example

Jika Poisson count dalam setengah jam mempunyai:

$$
\lambda=8.4,
$$

maka rate per half-hour adalah $8.4$.

Waiting time $T$ mempunyai Exponential density:

$$
f(t)=8.4e^{-8.4t},
$$

jika satuan waktu adalah setengah jam.

Untuk 5 menit:

$$
5\text{ min}
=
\frac{1}{6}\text{ half-hour}.
$$

Maka:

$$
P\left(T<\frac16\right)
=
\int_0^{1/6}
8.4e^{-8.4t}\,dt
=
1-e^{-1.4}.
$$

---

## 3.8 Memoryless property

Latihan Miller secara eksplisit menghubungkan Exponential distribution dengan:

$$
\boxed{
P(X\ge t+T\mid X\ge T)
=
P(X\ge t).
}
$$

Interpretasi:

> conditional remaining lifetime tidak bergantung pada elapsed lifetime.

Ini adalah distinctive property dari Exponential waiting-time model.

---

# 3.9 Chi-Square Distribution

Chi-square adalah special case Gamma:

$$
\alpha=\frac{\nu}{2},
\qquad
\beta=2.
$$

Parameter $\nu$ disebut **degrees of freedom**.

PDF:

$$
\boxed{
f(x;\nu)
=
\begin{cases}
\dfrac{1}{
2^{\nu/2}\Gamma(\nu/2)
}
x^{\nu/2-1}e^{-x/2},
& x>0,\\[8pt]
0,
& \text{elsewhere}.
\end{cases}
}
$$

Karena ini adalah Gamma$(\nu/2,2)$:

$$
\boxed{
E(X)=\nu,
}
$$

$$
\boxed{
\operatorname{Var}(X)=2\nu.
}
$$

[CF2 CONNECTION]

Miller menunjukkan bahwa Chi-square nantinya berperan penting dalam sampling theory.

---

# 4. The Beta Distribution

[CORE CF2]

Beta density memiliki support:

$$
0<x<1.
$$

Karena bentuknya fleksibel, Miller mencatat kegunaannya dalam Bayesian inference untuk parameter seperti Binomial probability $\theta$.

[PARAMETERIZATION]

Parameters:

$$
\alpha>0,
\qquad
\beta>0.
$$

PDF:

$$
\boxed{
f(x;\alpha,\beta)
=
\begin{cases}
\dfrac{
\Gamma(\alpha+\beta)
}{
\Gamma(\alpha)\Gamma(\beta)
}
x^{\alpha-1}(1-x)^{\beta-1},
& 0<x<1,\\[10pt]
0,
& \text{elsewhere}.
\end{cases}
}
$$

Equivalent normalization menggunakan Beta function:

$$
B(\alpha,\beta)
=
\frac{
\Gamma(\alpha)\Gamma(\beta)
}{
\Gamma(\alpha+\beta)
}.
$$

---

## 4.1 Mean and variance

Miller menurunkan:

$$
\boxed{
E(X)
=
\frac{\alpha}{\alpha+\beta}.
}
$$

$$
\boxed{
\operatorname{Var}(X)
=
\frac{
\alpha\beta
}{
(\alpha+\beta)^2(\alpha+\beta+1)
}.
}
$$

Support $(0,1)$ menjelaskan mengapa Beta natural untuk random quantities yang diinterpretasikan sebagai proportions atau probabilities.

---

## 4.2 Uniform as special Beta

Jika:

$$
\alpha=\beta=1,
$$

maka:

$$
f(x)=1,
\qquad 0<x<1.
$$

Jadi:

$$
\operatorname{Beta}(1,1)
=
\operatorname{Uniform}(0,1).
$$

---

# 5. The Normal Distribution

[CORE CF2]

Miller menggambarkan Normal distribution sebagai cornerstone dari modern statistical theory.

[PARAMETERIZATION]

Parameters:

- $\mu\in\mathbb{R}$;
- $\sigma>0$.

PDF:

$$
\boxed{
n(x;\mu,\sigma)
=
\frac{1}{
\sigma\sqrt{2\pi}
}
\exp\left[
-\frac12
\left(
\frac{x-\mu}{\sigma}
\right)^2
\right],
\qquad
-\infty<x<\infty.
}
$$

---

## 5.1 Shape and parameters

Density-nya:

- bell-shaped;
- symmetric around $\mu$;
- maksimum pada $x=\mu$;
- spread dikendalikan oleh $\sigma$.

Miller memverifikasi normalization dengan substitution:

$$
z=\frac{x-\mu}{\sigma}
$$

dan Gaussian integral.

---

## 5.2 MGF

Miller membuktikan:

$$
\boxed{
M_X(t)
=
\exp\left(
\mu t+\frac12\sigma^2t^2
\right).
}
$$

Dari derivatives:

$$
E(X)=\mu,
$$

$$
\operatorname{Var}(X)=\sigma^2.
$$

Dengan demikian, simbol-simbol yang muncul dalam Normal PDF memang merepresentasikan population mean dan standard deviation.

---

# 5.3 Standard Normal Distribution

Normal dengan:

$$
\mu=0,
\qquad
\sigma=1
$$

disebut Standard Normal.

Ditulis:

$$
Z\sim N(0,1).
$$

Density:

$$
\phi(z)
=
\frac{1}{\sqrt{2\pi}}
e^{-z^2/2}.
$$

---

## 5.4 Standardization

Jika

$$
X\sim N(\mu,\sigma^2),
$$

maka:

$$
\boxed{
Z=\frac{X-\mu}{\sigma}
\sim N(0,1).
}
$$

Sehingga:

$$
P(x_1<X<x_2)
=
P\left(
\frac{x_1-\mu}{\sigma}
<
Z
<
\frac{x_2-\mu}{\sigma}
\right).
$$

Miller's Theorem 7 memformalkan scale transformation ini.

[IMPORTANT DISTINCTION]

Standardization mengubah variable, bukan probability event yang mendasarinya.

---

## 5.5 Textbook example

Cosmic radiation exposure:

$$
X\sim N(4.35,0.59^2).
$$

Untuk:

$$
P(X>5.20),
$$

standardize:

$$
z
=
\frac{5.20-4.35}{0.59}
\approx1.44.
$$

Probability kemudian dibaca dari Standard Normal distribution.

Struktur reusable:

$$
\text{raw value}
\rightarrow
z\text{-score}
\rightarrow
\text{standard normal probability}.
$$

---

# 6. The Normal Approximation to the Binomial Distribution

[BEYOND CF2]

Silabus CF2 yang digunakan untuk condensed notes ini memetakan Miller Chapter 6.1–6.5 ke Topik 2 dan 6.7–6.8 ke Topik 3; Section 6.6 tidak tercantum sebagai required Miller section.

Miller menunjukkan secara matematis bahwa untuk:

$$
X\sim\operatorname{Binomial}(n,\theta),
$$

standardized variable:

$$
Z
=
\frac{
X-n\theta
}{
\sqrt{n\theta(1-\theta)}
}
$$

mempunyai MGF yang mendekati MGF $N(0,1)$ ketika $n\to\infty$.

Dengan demikian, Normal distribution dapat mengaproksimasi Binomial untuk $n$ besar, dengan:

$$
\mu=n\theta,
\qquad
\sigma^2=n\theta(1-\theta).
$$

Textbook kemudian membahas continuity correction karena Binomial bersifat discrete sedangkan Normal continuous.

Karena section ini tidak termasuk mapped Miller scope CF2, detail derivation dan examples tidak diperluas dalam note ini.

---

# 7. The Bivariate Normal Distribution

[CORE CF2]

Miller memperluas Normality dari satu random variable menjadi pasangan $(X,Y)$.

Parameters:

$$
\mu_1,\mu_2,
\qquad
\sigma_1>0,\ \sigma_2>0,
\qquad
-1<\rho<1.
$$

Joint PDF:

$$
\boxed{
f(x,y)
=
\frac{
1
}{
2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}
}
\exp\left\{
-\frac{
\left(\frac{x-\mu_1}{\sigma_1}\right)^2
-
2\rho
\left(\frac{x-\mu_1}{\sigma_1}\right)
\left(\frac{y-\mu_2}{\sigma_2}\right)
+
\left(\frac{y-\mu_2}{\sigma_2}\right)^2
}{
2(1-\rho^2)
}
\right\}.
}
$$

Support:

$$
-\infty<x<\infty,
\qquad
-\infty<y<\infty.
$$

---

## 7.1 Marginals

Miller menunjukkan bahwa mengintegrasikan joint density terhadap $y$ menghasilkan:

$$
X\sim N(\mu_1,\sigma_1^2).
$$

Demikian pula:

$$
Y\sim N(\mu_2,\sigma_2^2).
$$

Jadi joint normality mengimplikasikan Normal marginals.

[IMPORTANT DISTINCTION]

Converse tidak selalu benar:

> dua Normal marginals tidak dengan sendirinya mengimplikasikan bahwa joint distribution adalah Bivariate Normal.

Miller secara eksplisit membangun counterexample.

---

## 7.2 Correlation parameter

Untuk Bivariate Normal:

$$
\boxed{
\operatorname{Cov}(X,Y)
=
\rho\sigma_1\sigma_2.
}
$$

Karena itu:

$$
\boxed{
\operatorname{Corr}(X,Y)=\rho.
}
$$

Miller menginterpretasikan $\rho$ sebagai parameter yang mengukur bagaimana $X$ dan $Y$ berubah bersama.

---

# 7.3 Conditional Normal Distribution

Ini adalah salah satu hasil terpenting pada section ini.

Jika $X,Y$ jointly Bivariate Normal, maka:

$$
Y\mid X=x
$$

berdistribusi Normal dengan conditional mean:

$$
\boxed{
E(Y\mid X=x)
=
\mu_2
+
\rho\frac{\sigma_2}{\sigma_1}
(x-\mu_1)
}
$$

dan conditional variance:

$$
\boxed{
\operatorname{Var}(Y\mid X=x)
=
\sigma_2^2(1-\rho^2).
}
$$

Demikian pula:

$$
\boxed{
E(X\mid Y=y)
=
\mu_1
+
\rho\frac{\sigma_1}{\sigma_2}
(y-\mu_2)
}
$$

dan:

$$
\boxed{
\operatorname{Var}(X\mid Y=y)
=
\sigma_1^2(1-\rho^2).
}
$$

---

## 7.4 Interpretation

Conditional mean linear terhadap conditioning value.

Untuk $Y\mid X=x$:

$$
E(Y\mid X=x)
=
\mu_2
+
\underbrace{
\rho\frac{\sigma_2}{\sigma_1}
}_{\text{slope}}
(x-\mu_1).
$$

Sehingga:

- jika $\rho>0$, nilai $x$ yang lebih besar menggeser conditional mean $Y$ ke atas;
- jika $\rho<0$, nilai $x$ yang lebih besar menggesernya ke bawah;
- jika $\rho=0$, conditional mean tetap $\mu_2$.

Conditional variance:

$$
\sigma_2^2(1-\rho^2)
$$

tidak pernah lebih besar dari marginal variance $\sigma_2^2$.

Mengetahui $X=x$ mengurangi uncertainty tentang $Y$ ketika $|\rho|>0$.

---

# 7.5 Independence and zero correlation

Untuk arbitrary random variables:

$$
\operatorname{Cov}(X,Y)=0
$$

tidak mengimplikasikan independence.

Namun Bivariate Normal family adalah kasus khusus.

Miller's Theorem 10:

$$
\boxed{
X,Y\text{ bivariate normal}
\quad\Longrightarrow\quad
X\perp Y
\iff
\rho=0.
}
$$

[IMPORTANT DISTINCTION]

Ekuivalensi ini valid karena **joint normality**.

Jangan menggeneralisasikannya ke arbitrary distributions.

---

## 7.6 Geometry of Bivariate Normal density

Miller membahas surface dari Bivariate Normal:

$$
z=f(x,y).
$$

Sifat geometri penting:

- maximum terjadi pada
  $$
  (\mu_1,\mu_2);
  $$
- vertical cross-sections berbentuk Normal;
- horizontal slices membentuk elliptical contours dengan density konstan;
- jika
  $$
  \rho=0
  \qquad\text{dan}\qquad
  \sigma_1=\sigma_2,
  $$
  contour menjadi lingkaran.

Ini memberikan mental model yang berguna untuk covariance/correlation.

---

# 8. The Theory in Practice

[CF2 SUPPORTING CONTEXT]

Miller mencatat bahwa banyak applications mengasumsikan data approximately Normal, sehingga asumsi tersebut perlu dinilai apakah plausible.

Textbook membahas practical graphical checking of normality, termasuk membandingkan pola observed data dengan bentuk yang diharapkan di bawah Normal distribution.

Pelajaran umumnya:

> normality harus diperlakukan sebagai model assumption yang perlu dinilai, bukan sekadar digunakan karena formula Normal convenient.

Section ini mendukung statistical inference berikutnya, di mana banyak exact procedures bergantung pada Normal-population assumptions.

---

# Distribution Relationship Map

## Uniform

Constant density pada finite interval:

$$
(\alpha,\beta).
$$

## Gamma

Positive continuous family:

$$
X\sim\Gamma(\alpha,\beta)
$$

dengan Miller's **shape-scale convention**.

## Exponential

Special case Gamma:

$$
\alpha=1,
\qquad
\beta=\theta.
$$

## Chi-square

Special case Gamma:

$$
\alpha=\frac{\nu}{2},
\qquad
\beta=2.
$$

## Beta

Flexible density pada:

$$
(0,1).
$$

## Normal

Bell-shaped distribution pada seluruh real line.

## Standard Normal

$$
Z=\frac{X-\mu}{\sigma}.
$$

## Bivariate Normal

Joint continuous Normal model dengan parameter $\rho$ yang mengendalikan covariance structure.

---

# Core Formula Table

| Distribution | Support | Mean | Variance |
|---|---|---:|---:|
| Uniform $(\alpha,\beta)$ | $\alpha<x<\beta$ | $(\alpha+\beta)/2$ | $(\beta-\alpha)^2/12$ |
| Gamma $(\alpha,\beta)$, shape-scale | $x>0$ | $\alpha\beta$ | $\alpha\beta^2$ |
| Exponential $(\theta)$, scale | $x>0$ | $\theta$ | $\theta^2$ |
| Chi-square $(\nu)$ | $x>0$ | $\nu$ | $2\nu$ |
| Beta $(\alpha,\beta)$ | $0<x<1$ | $\alpha/(\alpha+\beta)$ | $\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ |
| Normal $(\mu,\sigma^2)$ | $\mathbb{R}$ | $\mu$ | $\sigma^2$ |

---

# Parameterization Warnings

## Gamma

Miller:

$$
f(x)
=
\frac{
x^{\alpha-1}e^{-x/\beta}
}{
\beta^\alpha\Gamma(\alpha)
}.
$$

Jadi:

$$
\beta=\text{scale}.
$$

Rate form di sumber lain:

$$
\lambda=\frac{1}{\beta}.
$$

## Exponential

Miller:

$$
f(x)
=
\frac{1}{\theta}e^{-x/\theta}.
$$

Jadi:

$$
\theta=\text{mean/scale}.
$$

Rate form di sumber lain:

$$
\lambda=\frac{1}{\theta}.
$$

## Normal

Notasi Miller pada density adalah:

$$
n(x;\mu,\sigma),
$$

di mana parameter kedua adalah **standard deviation**, meskipun shorthand modern sering menulis:

$$
N(\mu,\sigma^2).
$$

Selalu periksa definition sebelum substitusi.

---

# Reusable Mathematical Reading Pattern

Untuk continuous-distribution problem dari Chapter 6:

1. **Tuliskan support terlebih dahulu.**
2. Nyatakan parameterization.
3. Identifikasi target:
   - density;
   - CDF/probability;
   - moment;
   - conditional distribution.
4. Probability membutuhkan area:
   $$
   \int f(x)\,dx.
   $$
5. Untuk Gamma-related families, identifikasi special-case mapping sebelum menghitung ulang.
6. Untuk Exponential waiting time, hubungkan rate dan scale secara hati-hati:
   $$
   \theta=\frac{1}{\lambda}.
   $$
7. Untuk Normal:
   $$
   z=\frac{x-\mu}{\sigma}.
   $$
8. Untuk Bivariate Normal:
   - identifikasi $\mu_1,\mu_2,\sigma_1,\sigma_2,\rho$;
   - gunakan conditional Normal formulas ketika conditioning;
   - hanya simpulkan independence dari $\rho=0$ jika joint normality telah ditetapkan.
9. Sanity check:
   - variance positif;
   - probabilities dalam $[0,1]$;
   - conditional variance tidak lebih besar daripada marginal variance dalam Bivariate Normal;
   - support dipatuhi.

---

# Connections to CF2 Syllabus

- Sections 2–5 $\rightarrow$ [[2.6 Distribusi Kontinu Umum]]
- Section 6 $\rightarrow$ `[BEYOND CF2]` berdasarkan Miller chapter mapping pada syllabus
- Section 7 $\rightarrow$ [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.3 Distribusi Bersyarat (Conditional Distribution)]], [[3.5 Independensi dan Korelasi]]
- Section 8 $\rightarrow$ supporting Normal-model interpretation for later inference

---

## One-line takeaway

> **Chapter 6 membangun continuous distribution families dan hubungan di antaranya: Gamma menjadi parent family untuk Exponential dan Chi-square, Normal distandardisasi ke $Z$, dan Bivariate Normal menghasilkan conditional distributions yang tetap Normal serta membuat zero correlation ekuivalen dengan independence.**
