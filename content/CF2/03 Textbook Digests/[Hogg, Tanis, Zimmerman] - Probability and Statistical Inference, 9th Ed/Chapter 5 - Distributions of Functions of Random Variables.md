---
type: "condensed-book"
exam: "CF2"
book: "Probability and Statistical Inference, 9th Edition"
author: "Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman"
chapter: "5"
chapter_title: "Distributions of Functions of Random Variables"
cf2_topics: ["2.4", "3.8", "4.1", "4.2", "4.3", "4.4"]
cf2_relevance: "Mixed — Core in §§5.1, 5.5, 5.6, 5.8; supporting elsewhere"
source_scope: "Chapter 5, Sections 5.1–5.9"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggTanis, Transformations, SamplingDistributions, CLT, LLN]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, Tanis & Zimmerman — Chapter 5: Distributions of Functions of Random Variables

> [!ABSTRACT] Chapter in One View
> Chapter 5 menjawab pertanyaan yang muncul setelah distribution dari random variable dasar sudah diketahui: **bagaimana distribution berubah ketika kita membentuk fungsi dari satu atau beberapa random variables?** Penulis bergerak dari transformasi satu variabel melalui CDF dan change-of-variable, menuju transformasi dua variabel melalui Jacobian, lalu mempelajari sums dan linear combinations. MGF kemudian dipakai sebagai teknik alternatif untuk mengenali distribution dari sums. Bagian berikutnya menghubungkan machinery tersebut ke statistical inference: random sample, sample mean, sample variance, exact Normal/Chi-square/$t$ relationships, Central Limit Theorem, Normal approximation to the Binomial, Chebyshev inequality, dan convergence in probability.
>
> Untuk CF2, **§5.1** adalah referensi resmi Topik 2 (transformasi univariat), sedangkan **§§5.5, 5.6, 5.8** adalah referensi resmi Topik 4 (sampling distributions, CLT, LLN). Sections 5.2–5.4 sangat berguna sebagai supporting machinery untuk transformasi multivariat dan MGF; §§5.7 dan 5.9 mempertahankan conceptual progression textbook tetapi berada di luar mapping eksplisit silabus Hogg–Tanis.

---

## 1. Why This Chapter Exists

Pada Chapters 2–4, distribution dari random variables dianggap sudah diketahui. Namun dalam probability dan statistics, quantity yang benar-benar dibutuhkan hampir selalu merupakan **fungsi** dari random variables tersebut:

\[
Y=u(X),
\]

atau

\[
Y=u(X_1,\ldots,X_n).
\]

Contohnya:

- square atau logarithm dari measurement;
- sum dari claims atau waiting times;
- sample mean;
- sample variance;
- standardized statistic;
- ratio atau linear combination.

Masalah utamanya bukan sekadar menghitung \(E(Y)\), tetapi menemukan **seluruh distribution** dari \(Y\).

Chapter ini memperlihatkan bahwa tidak ada satu metode universal. Pilihan metode bergantung pada bentuk fungsi dan structure distribution:

1. **CDF technique** — sangat general dan sering paling aman.
2. **Change-of-variable / Jacobian** — efisien untuk transformasi one-to-one.
3. **Direct summation / convolution-like reasoning** — natural untuk sums diskrit atau kontinu.
4. **MGF technique** — sangat kuat untuk sums/linear combinations independent random variables.
5. **Asymptotic methods** — ketika exact distribution sulit tetapi \(n\) besar.

Mental structure chapter:

```text
Known distribution(s)
        ↓
Define function/statistic
        ↓
Map support
        ↓
Choose technique
        ↓
Find transformed distribution
        ↓
Recognize exact family or limiting family
        ↓
Use for inference / approximation
```

---

# 2. Chapter Map

- **5.1 Functions of One Random Variable**
  - CDF technique
  - monotone transformation
  - change-of-variable formula
  - many-to-one transformations
  - probability integral transformation
- **5.2 Functions of Two Random Variables**
  - bivariate transformations
  - inverse mapping
  - Jacobian
  - transformed support
- **5.3 Several Independent Random Variables**
  - sums and linear combinations
  - expectation and variance
  - distribution of sums
- **5.4 The Moment-Generating Function Technique**
  - MGF of linear combinations
  - products of MGFs under independence
  - distribution identification
- **5.5 Random Functions Associated with Normal Distributions**
  - random samples from Normal populations
  - sample mean
  - sample variance
  - Chi-square
  - Student's \(t\)
- **5.6 The Central Limit Theorem**
  - standardized sample mean
  - limiting Standard Normal distribution
- **5.7 Normal Approximation to the Binomial Distribution**
  - continuity correction
  - approximation quality
- **5.8 Chebyshev's Inequality and Convergence in Probability**
  - distribution-free probability bounds
  - LLN / convergence of sample mean
- **5.9 Proof of the Central Limit Theorem**
  - MGF-based proof machinery

| Section | CF2 Status | Main Connection |
|---|---|---|
| 5.1 | **[CORE CF2]** | [[2.4 Transformasi Variabel Acak Univariat]] |
| 5.2 | [CF2 SUPPORTING CONTEXT] | [[3.8 Transformasi Variabel Acak Gabungan]] |
| 5.3 | [CF2 SUPPORTING CONTEXT] | sums, moments, independence |
| 5.4 | [CF2 SUPPORTING CONTEXT] | [[2.3 Fungsi Pembangkit]], sums |
| 5.5 | **[CORE CF2]** | [[4.1 Penarikan Sampel Acak]], [[4.2 Distribusi Sampel]] |
| 5.6 | **[CORE CF2]** | [[4.3 Teorema Limit Pusat (CLT)]] |
| 5.7 | [BEYOND EXPLICIT HOGG–TANIS CF2 MAPPING] | Normal approximation |
| 5.8 | **[CORE CF2]** | [[4.4 Hukum Bilangan Besar (LLN)]] |
| 5.9 | [CF2 SUPPORTING CONTEXT] | proof of CLT |

---

# 3. Section 5.1 — Functions of One Random Variable

`[CORE CF2]`

Section ini membangun tiga ide yang harus selalu dipisahkan:

1. function \(Y=u(X)\);
2. support \(S_Y\) yang merupakan image dari \(S_X\);
3. distribution dari \(Y\).

Jangan pernah memulai derivative sebelum support baru jelas.

---

## 3.1 CDF Technique

Untuk

\[
Y=u(X),
\]

definisikan

\[
G(y)=P(Y\le y).
\]

Karena \(Y=u(X)\),

\[
G(y)=P(u(X)\le y).
\]

Langkah penting adalah mengubah event pada \(Y\) menjadi event pada \(X\), karena distribution \(X\) sudah diketahui.

Setelah memperoleh \(G(y)\), jika \(Y\) kontinu,

\[
g(y)=G'(y).
\]

Keunggulan CDF method:

- berlaku untuk monotone maupun non-monotone function;
- sangat aman untuk many-to-one mapping;
- otomatis menangani probability dari beberapa branches bila event ditulis dengan benar.

Kelemahannya:

- algebra event bisa panjang;
- harus hati-hati terhadap piecewise support.

---

## 3.2 Monotone Increasing Transformation

Misalkan \(X\) memiliki PDF \(f(x)\) pada

\[
c_1<x<c_2,
\]

dan

\[
Y=u(X)
\]

adalah continuous strictly increasing.

Inverse:

\[
X=v(Y)=u^{-1}(Y).
\]

Support berubah menjadi

\[
u(c_1)<y<u(c_2).
\]

Karena \(u\) increasing,

\[
Y\le y
\iff
X\le v(y).
\]

Maka

\[
G(y)
=
\int_{c_1}^{v(y)}f(x)\,dx.
\]

Differentiation memberi

\[
g(y)
=
f(v(y))v'(y).
\]

Karena \(v'(y)>0\),

\[
\boxed{
g(y)=f(v(y))|v'(y)|
}.
\]

---

## 3.3 Monotone Decreasing Transformation

Jika \(u\) strictly decreasing,

\[
Y\le y
\iff
X\ge v(y).
\]

Maka

\[
G(y)
=
\int_{v(y)}^{c_2}f(x)\,dx,
\]

sehingga

\[
g(y)
=
-f(v(y))v'(y).
\]

Karena \(v'(y)<0\),

\[
\boxed{
g(y)=f(v(y))|v'(y)|
}.
\]

Jadi formula absolute derivative bekerja untuk increasing maupun decreasing transformation:

\[
\boxed{
g(y)=f_X(v(y))
\left|
\frac{dv}{dy}
\right|
,\qquad y\in S_Y.
}
\]

> [!IMPORTANT] Transformation Rule
> Formula bukan sekadar “substitute inverse”. Ada tiga komponen:
>
> \[
> \text{old density at inverse point}
> \times
> \text{absolute derivative}
> \times
> \text{correct transformed support}.
> \]

---

## 3.4 Textbook Example — Decreasing Transformation

Textbook mengambil

\[
f_X(x)=3(1-x)^2,\qquad 0<x<1,
\]

dan

\[
Y=(1-X)^3.
\]

Inverse:

\[
X=1-Y^{1/3}.
\]

Support:

\[
0<y<1.
\]

Derivative:

\[
\frac{dx}{dy}
=
-\frac{1}{3y^{2/3}}.
\]

Maka

\[
g(y)
=
3\left[1-(1-y^{1/3})\right]^2
\left|
-\frac1{3y^{2/3}}
\right|.
\]

Karena

\[
1-(1-y^{1/3})=y^{1/3},
\]

\[
g(y)=3y^{2/3}\frac1{3y^{2/3}}=1.
\]

Jadi

\[
\boxed{Y\sim U(0,1)}.
\]

Pelajaran utama bukan hasil Uniform-nya, tetapi workflow:

\[
\text{mapping support}
\to
\text{inverse}
\to
\text{absolute derivative}
\to
\text{substitution}.
\]

---

## 3.5 Many-to-One Transformations

Jika beberapa nilai \(x\) menghasilkan \(y\) yang sama, satu inverse tidak cukup.

Misalnya

\[
Y=X^2.
\]

Untuk \(y>0\), inverse branches:

\[
x_1=\sqrt y,
\qquad
x_2=-\sqrt y.
\]

Contribution dari seluruh valid branches harus dijumlahkan:

\[
\boxed{
g(y)
=
\sum_j
f_X(v_j(y))
\left|v_j'(y)\right|.
}
\]

Namun branch hanya disertakan bila \(v_j(y)\) benar-benar berada dalam support asli \(S_X\).

Ini menjelaskan mengapa transformed density kadang menjadi piecewise: jumlah active inverse branches berubah ketika \(y\) melewati boundary tertentu.

> [!DANGER] Branch Trap
> Jika \(Y=X^2\), jangan otomatis menulis hanya \(x=\sqrt y\).  
> Periksa apakah \(-\sqrt y\) juga berada pada support \(X\).

---

## 3.6 Probability Integral Transformation

Section 5.1 menggunakan CDF machinery untuk menunjukkan hubungan fundamental dengan Uniform distribution.

Jika \(X\) mempunyai continuous CDF \(F\), maka

\[
Y=F(X)
\]

memiliki Uniform distribution pada \((0,1)\):

\[
\boxed{F(X)\sim U(0,1)}.
\]

Secara intuitif, CDF mengubah measurement scale menjadi cumulative probability scale.

Sebaliknya, bila

\[
U\sim U(0,1)
\]

dan \(F\) continuous/invertible sesuai conditions textbook, maka

\[
X=F^{-1}(U)
\]

menghasilkan distribution \(F\).

Ini memberi dasar teoretis untuk simulation melalui inverse CDF.

---

## 3.7 Section 5.1 Mental Checklist

Untuk \(Y=u(X)\):

1. tulis support \(S_X\);
2. tentukan image \(S_Y\);
3. cek monotone atau many-to-one;
4. jika monotone, cari inverse \(x=v(y)\);
5. hitung \(|dx/dy|\);
6. substitute ke \(f_X\);
7. jika multiple branches, jumlahkan;
8. tulis zero elsewhere;
9. verify:
   \[
   g(y)\ge0,\qquad \int g(y)\,dy=1.
   \]

---

# 4. Section 5.2 — Functions of Two Random Variables

`[CF2 SUPPORTING CONTEXT]`

Section ini memperluas transformation rule ke dua dimensi.

Misalkan

\[
Y_1=u_1(X_1,X_2),
\qquad
Y_2=u_2(X_1,X_2),
\]

dengan inverse

\[
X_1=v_1(Y_1,Y_2),
\qquad
X_2=v_2(Y_1,Y_2).
\]

Untuk one-to-one differentiable transformation, joint density baru adalah

\[
\boxed{
g(y_1,y_2)
=
f\!\left(v_1(y_1,y_2),v_2(y_1,y_2)\right)
|J|
}
\]

dengan

\[
J=
\frac{\partial(x_1,x_2)}
{\partial(y_1,y_2)}
=
\begin{vmatrix}
\frac{\partial x_1}{\partial y_1}
&
\frac{\partial x_1}{\partial y_2}
\\[4pt]
\frac{\partial x_2}{\partial y_1}
&
\frac{\partial x_2}{\partial y_2}
\end{vmatrix}.
\]

Absolute value wajib:

\[
|J|.
\]

Tetapi Jacobian hanya separuh problem. Separuh lainnya adalah **transformed support**.

---

## 4.1 Why Support Geometry Matters

Bila support awal

\[
S_X
\]

dipetakan melalui \(u_1,u_2\), kita harus menentukan region

\[
S_Y.
\]

Cara textbook:

- petakan boundary dari \(S_X\);
- tulis persamaan boundary baru;
- tentukan sisi mana yang merupakan interior;
- baru tulis joint PDF.

Kesalahan paling umum adalah mendapatkan Jacobian benar tetapi region salah.

---

## 4.2 Textbook Example — Ratio and Scale

Salah satu contoh memakai transformation berbentuk

\[
Y_1=\frac{X_1}{X_2},
\qquad
Y_2=X_2.
\]

Inverse:

\[
X_1=Y_1Y_2,
\qquad
X_2=Y_2.
\]

Jacobian:

\[
J=
\begin{vmatrix}
y_2 & y_1\\
0&1
\end{vmatrix}
=y_2.
\]

Maka

\[
g(y_1,y_2)
=
f(y_1y_2,y_2)|y_2|.
\]

Dalam contoh textbook, support berubah menjadi

\[
0<y_1<1,
\qquad
0<y_2<1,
\]

dan resulting density factorizes:

\[
g(y_1,y_2)=2y_2.
\]

Marginals:

\[
g_1(y_1)=1,
\]

\[
g_2(y_2)=2y_2.
\]

Karena

\[
g(y_1,y_2)=g_1(y_1)g_2(y_2),
\]

\(Y_1\) dan \(Y_2\) independent.

Pelajaran menarik:

> Dua variables dapat secara algebraic terhubung dalam definition transformation, tetapi tetap independent dalam probabilistic sense setelah distribution diperoleh.

---

## 4.3 Textbook Example — Difference and Sum

Untuk independent exponential random variables,

\[
f(x_1,x_2)=e^{-x_1-x_2},
\qquad
x_1,x_2>0,
\]

define

\[
Y_1=X_1-X_2,
\qquad
Y_2=X_1+X_2.
\]

Inverse:

\[
x_1=\frac{y_1+y_2}{2},
\qquad
x_2=\frac{y_2-y_1}{2}.
\]

Jacobian:

\[
|J|=\frac12.
\]

Support conditions

\[
x_1>0,\qquad x_2>0
\]

menjadi

\[
-y_2<y_1<y_2,
\qquad
y_2>0.
\]

Density:

\[
\boxed{
g(y_1,y_2)=\frac12e^{-y_2},
\quad -y_2<y_1<y_2,\ y_2>0.
}
\]

Region tidak rectangular. Jadi walaupun formula density tampak sederhana, structure dependence terlihat dari support.

> [!IMPORTANT] Rectangular-Support Heuristic
> Non-rectangular support langsung memberi tanda kuat bahwa transformed variables tidak independent.

---

# 5. Section 5.3 — Several Independent Random Variables

`[CF2 SUPPORTING CONTEXT]`

Section ini mengembangkan functions dari beberapa random variables, terutama sums.

Jika

\[
Y=X_1+\cdots+X_n,
\]

linearity of expectation memberi

\[
\boxed{
E(Y)=\sum_{i=1}^nE(X_i)
}
\]

tanpa memerlukan independence.

Untuk variance,

\[
\operatorname{Var}\left(\sum_i X_i\right)
=
\sum_i\operatorname{Var}(X_i)
+
2\sum_{i<j}\operatorname{Cov}(X_i,X_j).
\]

Jika independent,

\[
\boxed{
\operatorname{Var}(Y)
=
\sum_{i=1}^n\operatorname{Var}(X_i).
}
\]

---

## 5.1 Dice-Sum Example

Untuk two independent fair dice variables \(X_1,X_2\),

\[
E(X_1)=E(X_2)=3.5,
\]

\[
\operatorname{Var}(X_1)=\operatorname{Var}(X_2)=\frac{35}{12}.
\]

Dengan

\[
Y=X_1+X_2,
\]

\[
E(Y)=7,
\]

dan independence membuat covariance term zero:

\[
\operatorname{Var}(Y)
=
2\cdot\frac{35}{12}
=
\frac{35}{6}.
\]

Distribution lengkap diperoleh dengan menjumlahkan joint probabilities yang memenuhi

\[
x_1+x_2=y.
\]

Resulting PMF:

| \(y\) | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| \(P(Y=y)\) | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 |

Textbook menekankan dua level:

- moments dapat dihitung tanpa memperoleh PMF lengkap;
- tetapi distribution lengkap memberi probability questions yang moments saja tidak bisa jawab.

---

# 6. Section 5.4 — The Moment-Generating Function Technique

`[CF2 SUPPORTING CONTEXT]`

Sections 5.1–5.3 menggunakan mapping dan direct probability reasoning. Section 5.4 memperkenalkan shortcut structural:

> Jika MGF dari transformed variable dapat dikenali sebagai MGF distribution yang sudah diketahui, distribution dapat diidentifikasi tanpa derivasi PDF/PMF langsung.

---

## 6.1 MGF of a Sum

Jika

\[
Y=X_1+X_2,
\]

maka

\[
M_Y(t)
=
E(e^{tY})
=
E(e^{tX_1}e^{tX_2}).
\]

Jika \(X_1,X_2\) independent,

\[
E(e^{tX_1}e^{tX_2})
=
E(e^{tX_1})E(e^{tX_2}).
\]

Sehingga

\[
\boxed{
M_Y(t)=M_{X_1}(t)M_{X_2}(t).
}
\]

Generalization:

Jika \(X_1,\ldots,X_n\) independent dan

\[
Y=\sum_{i=1}^na_iX_i,
\]

maka

\[
\boxed{
M_Y(t)
=
\prod_{i=1}^nM_{X_i}(a_it).
}
\]

> [!ASSUMPTION]
> Product rule ini bergantung pada **independence** dan pada existence of the relevant MGFs pada neighborhood yang diperlukan.

---

## 6.2 Random Sample Corollary

Jika \(X_1,\ldots,X_n\) merupakan iid random sample dengan common MGF \(M(t)\), maka untuk sum

\[
Y=\sum_{i=1}^nX_i,
\]

\[
\boxed{
M_Y(t)=[M(t)]^n.
}
\]

Untuk sample mean

\[
\bar X=\frac1n\sum_{i=1}^nX_i,
\]

\[
\boxed{
M_{\bar X}(t)
=
\left[
M\left(\frac tn\right)
\right]^n.
}
\]

Formula ini menjadi bridge langsung ke exact sampling distributions dan CLT proof.

---

## 6.3 Bernoulli Sum → Binomial

Untuk Bernoulli variable,

\[
M_X(t)=q+pe^t.
\]

Jika

\[
Y=\sum_{i=1}^nX_i
\]

dengan iid Bernoulli trials,

\[
M_Y(t)
=
(q+pe^t)^n.
\]

Ini adalah MGF Binomial\((n,p)\), sehingga

\[
\boxed{Y\sim b(n,p)}.
\]

MGF menunjukkan Binomial bukan distribution yang “muncul tiba-tiba”: ia merupakan closure dari sum iid Bernoulli variables.

---

## 6.4 Exponential Sum → Gamma

Jika

\[
X_i\sim\text{Exponential(mean }\theta),
\]

MGF:

\[
M_X(t)=\frac1{1-\theta t},
\qquad t<1/\theta.
\]

Untuk \(n=3\),

\[
Y=X_1+X_2+X_3,
\]

\[
M_Y(t)
=
(1-\theta t)^{-3}.
\]

Ini adalah MGF Gamma dengan

\[
\alpha=3,\qquad \theta=\text{same scale}.
\]

Jadi

\[
\boxed{
Y\sim\operatorname{Gamma}(3,\theta)
}.
\]

Untuk sample mean

\[
\bar X=\frac{Y}{3},
\]

\[
M_{\bar X}(t)
=
\left(1-\frac{\theta t}{3}\right)^{-3}.
\]

Maka

\[
\boxed{
\bar X\sim\operatorname{Gamma}(3,\theta/3)
}.
\]

> [!PARAMETERIZATION]
> Hogg–Tanis menggunakan Gamma **shape–scale** pada development ini: \(\alpha\) adalah shape dan \(\theta\) adalah scale/mean parameter untuk exponential special case.

---

## 6.5 Sum of Independent Chi-Squares

Jika

\[
X_i\sim\chi^2(r_i)
\]

independent, maka MGF multiplication memberi

\[
\boxed{
\sum_{i=1}^nX_i
\sim
\chi^2\left(\sum_{i=1}^nr_i\right).
}
\]

Degrees of freedom add karena exponent pada MGF juga add.

Ini adalah result penting untuk sampling variance pada Section 5.5.

---

# 7. Section 5.5 — Random Functions Associated with Normal Distributions

`[CORE CF2]`

Ini adalah transition point dari probability theory ke inference.

Misalkan

\[
X_1,\ldots,X_n
\]

merupakan random sample dari

\[
N(\mu,\sigma^2).
\]

Karena Normal family closed under independent linear combinations, sample mean

\[
\bar X
=
\frac1n\sum_{i=1}^nX_i
\]

memiliki exact Normal distribution.

---

## 7.1 Sampling Distribution of the Mean

Karena

\[
E(\bar X)=\mu
\]

dan

\[
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},
\]

maka

\[
\boxed{
\bar X
\sim
N\left(\mu,\frac{\sigma^2}{n}\right)
}
\]

untuk **setiap positive integer \(n\)** jika population Normal.

Ini exact, bukan CLT approximation.

Standardized form:

\[
\boxed{
Z=
\frac{\bar X-\mu}{\sigma/\sqrt n}
\sim N(0,1).
}
\]

---

## 7.2 What Increasing \(n\) Does

Mean sampling distribution tetap

\[
\mu,
\]

tetapi variance turun:

\[
\frac{\sigma^2}{n}.
\]

Standard deviation / standard error:

\[
\frac{\sigma}{\sqrt n}.
\]

Jadi density \(\bar X\) menjadi makin tinggi dan sempit di sekitar \(\mu\).

Textbook figure untuk \(N(50,16)\) membandingkan \(n=1,4,16,64\). Visual lesson:

- semua curves centered pada \(50\);
- spread turun seperti \(1/\sqrt n\);
- probability pada fixed interval sekitar \(\mu\) meningkat dengan \(n\).

Contohnya, untuk \(n=64\),

\[
P(49<\bar X<51)=0.9544,
\]

sementara untuk satu observation,

\[
P(49<X_1<51)=0.1974.
\]

---

## 7.3 Sample Variance

Textbook mendefinisikan

\[
\boxed{
S^2
=
\frac1{n-1}
\sum_{i=1}^n(X_i-\bar X)^2.
}
\]

Untuk random sample dari Normal population:

\[
\boxed{
\bar X\ \text{dan}\ S^2\ \text{independent}.
}
\]

Dan

\[
\boxed{
\frac{(n-1)S^2}{\sigma^2}
=
\frac{\sum_{i=1}^n(X_i-\bar X)^2}{\sigma^2}
\sim\chi^2(n-1).
}
\]

Degrees of freedom berkurang dari \(n\) menjadi \(n-1\) karena deviations dari sample mean memenuhi constraint

\[
\sum_{i=1}^n(X_i-\bar X)=0.
\]

---

## 7.4 Decomposition Behind the Chi-Square Result

Mulai dari standardized deviations terhadap population mean:

\[
W
=
\sum_{i=1}^n
\left(\frac{X_i-\mu}{\sigma}\right)^2.
\]

Karena each standardized variable iid \(N(0,1)\),

\[
W\sim\chi^2(n).
\]

Decompose

\[
X_i-\mu
=
(X_i-\bar X)+(\bar X-\mu).
\]

Then

\[
\sum_{i=1}^n(X_i-\mu)^2
=
\sum_{i=1}^n(X_i-\bar X)^2
+
n(\bar X-\mu)^2,
\]

karena cross term hilang:

\[
\sum_{i=1}^n(X_i-\bar X)=0.
\]

Divide by \(\sigma^2\):

\[
\sum_{i=1}^n
\left(\frac{X_i-\mu}{\sigma}\right)^2
=
\frac{(n-1)S^2}{\sigma^2}
+
\left(
\frac{\bar X-\mu}{\sigma/\sqrt n}
\right)^2.
\]

Left side \(\chi^2(n)\); second term adalah square dari standard Normal, yaitu \(\chi^2(1)\). Independence structure menghasilkan remainder dengan \(n-1\) degrees of freedom.

---

## 7.5 Student's \(t\)

Ketika \(\sigma\) unknown, standardization menggunakan \(S\):

\[
T
=
\frac{\bar X-\mu}{S/\sqrt n}.
\]

Dengan Normal random sample,

\[
\boxed{
T\sim t(n-1).
}
\]

Mengapa?

Write

\[
Z=
\frac{\bar X-\mu}{\sigma/\sqrt n}
\sim N(0,1),
\]

dan

\[
U=
\frac{(n-1)S^2}{\sigma^2}
\sim\chi^2(n-1).
\]

Karena \(\bar X\) dan \(S^2\) independent, \(Z\) dan \(U\) independent.

Then

\[
T
=
\frac{Z}{\sqrt{U/(n-1)}}.
\]

Inilah defining construction dari Student's \(t\).

> [!IMPORTANT] Exactness Condition
> Exact \(t\) result di Section 5.5 bergantung pada **Normal population**, bukan hanya large \(n\).

---

# 8. Section 5.6 — The Central Limit Theorem

`[CORE CF2]`

Section 5.5 memberi exact distribution \(\bar X\) bila underlying population Normal. Tetapi bagaimana jika population bukan Normal?

Textbook mulai dari fakta universal untuk iid sample dengan finite mean dan variance:

\[
E(\bar X)=\mu,
\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
\]

Ketika \(n\) meningkat,

\[
\operatorname{Var}(\bar X)\to0.
\]

Jadi \(\bar X\) sendiri berkonsentrasi pada \(\mu\). Untuk melihat limiting **shape**, standardized variable diperlukan.

Define

\[
\boxed{
W_n
=
\frac{\bar X-\mu}{\sigma/\sqrt n}
=
\frac{\sqrt n}{\sigma}(\bar X-\mu).
}
\]

Untuk setiap \(n\),

\[
E(W_n)=0,
\qquad
\operatorname{Var}(W_n)=1.
\]

Scaling \(\sqrt n/\sigma\) mencegah distribution collapse menjadi point mass.

---

## 8.1 Central Limit Theorem

Textbook result:

Jika

\[
X_1,\ldots,X_n
\]

merupakan random sample dari distribution dengan finite mean \(\mu\) dan positive finite variance \(\sigma^2\), maka standardized sample mean memiliki limiting Standard Normal distribution:

\[
\boxed{
\frac{\bar X-\mu}{\sigma/\sqrt n}
\xrightarrow{d}
N(0,1).
}
\]

Equivalent practical statement:

Untuk large \(n\),

\[
\boxed{
\bar X
\approx
N\left(\mu,\frac{\sigma^2}{n}\right).
}
\]

Tetapi approximation ini tidak berarti underlying observations menjadi Normal.

> [!IMPORTANT] CLT Meaning
> CLT adalah theorem tentang **sampling distribution dari standardized sum/mean**, bukan theorem bahwa population berubah menjadi Normal.

---

## 8.2 Exact Normal vs CLT Approximation

### Population Normal

\[
\bar X
\sim
N\left(\mu,\frac{\sigma^2}{n}\right)
\]

untuk setiap \(n\).

### Population non-Normal

\[
\bar X
\approx
N\left(\mu,\frac{\sigma^2}{n}\right)
\]

untuk sufficiently large \(n\).

Label hasil dengan benar:

- **exact** — Normal population;
- **approximate/asymptotic** — general population + large sample.

---

## 8.3 CLT Calculation Structure

Untuk target

\[
P(a<\bar X<b),
\]

approximate using

\[
Z
=
\frac{\bar X-\mu}{\sigma/\sqrt n}.
\]

Then

\[
P(a<\bar X<b)
\approx
P\left(
\frac{a-\mu}{\sigma/\sqrt n}
<
Z
<
\frac{b-\mu}{\sigma/\sqrt n}
\right).
\]

For sum

\[
Y=\sum_{i=1}^nX_i,
\]

\[
E(Y)=n\mu,
\qquad
\operatorname{Var}(Y)=n\sigma^2,
\]

so

\[
\boxed{
\frac{Y-n\mu}{\sqrt n\,\sigma}
\approx N(0,1).
}
\]

---

# 9. Section 5.7 — Normal Approximation to the Binomial

`[BEYOND EXPLICIT HOGG–TANIS CF2 MAPPING]`

Textbook applies CLT to

\[
Y\sim b(n,p).
\]

Because \(Y\) is a sum of iid Bernoulli variables,

\[
E(Y)=np,
\]

\[
\operatorname{Var}(Y)=np(1-p).
\]

For sufficiently large \(n\),

\[
Y
\approx
N\left(np,np(1-p)\right).
\]

The textbook states the common rule:

\[
np\ge5,
\qquad
n(1-p)\ge5.
\]

This is a textbook rule-of-thumb, not a mathematical threshold theorem.

---

## 9.1 Continuity Correction

Binomial is discrete, Normal continuous.

Probability mass

\[
P(Y=k)
\]

is represented in the probability histogram by a unit-width rectangle centered at \(k\), with boundaries

\[
k-\frac12,
\qquad
k+\frac12.
\]

Thus the approximation uses

\[
\boxed{
P(Y=k)
\approx
P\left(
k-\frac12<V<k+\frac12
\right)
}
\]

for Normal \(V\) with matching mean/variance.

Examples:

\[
P(Y\le k)
\approx
P(V<k+0.5),
\]

\[
P(Y\ge k)
\approx
P(V>k-0.5).
\]

For

\[
P(3\le Y<6),
\]

the included integers are \(3,4,5\), so

\[
\boxed{
P(3\le Y<6)
\approx
P(2.5\le V\le5.5).
}
\]

Textbook example \(Y\sim b(10,1/2)\):

\[
\mu=5,
\qquad
\sigma^2=\frac{10}{4}.
\]

The corrected Normal approximation gives approximately \(0.5670\), close to exact Binomial probability \(0.5683\).

---

# 10. Section 5.8 — Chebyshev's Inequality and Convergence in Probability

`[CORE CF2]`

Section ini membangun LLN dari probability bounds, tanpa membutuhkan Normality.

---

## 10.1 Chebyshev's Inequality

Untuk random variable \(X\) dengan mean \(\mu\) dan finite positive variance \(\sigma^2\),

\[
\boxed{
P(|X-\mu|\ge k\sigma)
\le
\frac1{k^2}.
}
\]

Dengan

\[
\varepsilon=k\sigma,
\]

equivalent form:

\[
\boxed{
P(|X-\mu|\ge\varepsilon)
\le
\frac{\sigma^2}{\varepsilon^2}.
}
\]

Complement:

\[
\boxed{
P(|X-\mu|<\varepsilon)
\ge
1-\frac{\sigma^2}{\varepsilon^2}.
}
\]

Important interpretation:

- tail result adalah **upper bound**;
- central result adalah **lower bound**;
- bukan exact probability.

---

## 10.2 Why the Inequality Works

Variance:

\[
\sigma^2
=
E[(X-\mu)^2].
\]

Split contribution into points with

\[
|X-\mu|\ge k\sigma
\]

and the remainder.

On the tail event,

\[
(X-\mu)^2
\ge
k^2\sigma^2.
\]

Therefore tail contribution to variance is at least

\[
k^2\sigma^2
P(|X-\mu|\ge k\sigma).
\]

Since total variance must be at least this contribution,

\[
\sigma^2
\ge
k^2\sigma^2
P(|X-\mu|\ge k\sigma).
\]

Cancel \(\sigma^2\):

\[
P(|X-\mu|\ge k\sigma)
\le
\frac1{k^2}.
\]

The reasoning is powerful because it uses only a second moment.

---

## 10.3 Textbook Example

If

\[
\mu=25,
\qquad
\sigma^2=16,
\]

then

\[
\sigma=4.
\]

For

\[
P(17<X<33),
\]

the interval is \(25\pm8=25\pm2\sigma\).

Chebyshev gives

\[
P(|X-25|<2\sigma)
\ge
1-\frac1{2^2}
=
\frac34.
\]

Thus

\[
\boxed{
P(17<X<33)\ge0.75.
}
\]

For

\[
P(|X-25|\ge12),
\]

\(12=3\sigma\), so

\[
\boxed{
P(|X-25|\ge12)\le\frac19.
}
\]

---

## 10.4 Bernoulli Relative Frequency

Let

\[
Y\sim b(n,p).
\]

Relative frequency:

\[
\frac Yn.
\]

Mean:

\[
E\left(\frac Yn\right)=p.
\]

Variance:

\[
\operatorname{Var}\left(\frac Yn\right)
=
\frac{p(1-p)}{n}.
\]

Chebyshev:

\[
P\left(
\left|
\frac Yn-p
\right|
\ge\varepsilon
\right)
\le
\frac{p(1-p)}
{n\varepsilon^2}.
\]

Thus

\[
P\left(
\left|
\frac Yn-p
\right|
<\varepsilon
\right)
\ge
1-
\frac{p(1-p)}
{n\varepsilon^2}.
\]

As

\[
n\to\infty,
\]

right-hand error term approaches zero.

Hence relative frequency converges in probability to \(p\).

---

## 10.5 Convergence in Probability

A sequence \(Y_n\) converges in probability to constant \(c\) if, for every \(\varepsilon>0\),

\[
\boxed{
P(|Y_n-c|\ge\varepsilon)\to0.
}
\]

Equivalent:

\[
\boxed{
P(|Y_n-c|<\varepsilon)\to1.
}
\]

Notation:

\[
Y_n\xrightarrow{P}c.
\]

---

## 10.6 Law of Large Numbers

For iid sample with

\[
E(X_i)=\mu,
\qquad
\operatorname{Var}(X_i)=\sigma^2<\infty,
\]

sample mean

\[
\bar X_n
=
\frac1n\sum_{i=1}^nX_i
\]

has

\[
E(\bar X_n)=\mu,
\]

\[
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n}.
\]

Apply Chebyshev:

\[
P(|\bar X_n-\mu|\ge\varepsilon)
\le
\frac{\sigma^2}
{n\varepsilon^2}.
\]

As \(n\to\infty\),

\[
\frac{\sigma^2}
{n\varepsilon^2}
\to0.
\]

Therefore

\[
\boxed{
\bar X_n\xrightarrow{P}\mu.
}
\]

This is the weak-law style result developed by the source.

> [!IMPORTANT] Source Boundary
> Silabus CF2 menyebut weak dan strong law, tetapi Section 5.8 yang tersedia secara eksplisit membangun **convergence in probability** melalui Chebyshev. Formal Strong Law conditions tidak ditambahkan di note ini karena source chapter tidak mengembangkannya.

---

## 10.7 LLN vs CLT

Keduanya berbicara tentang large samples tetapi menjawab pertanyaan berbeda.

### LLN

\[
\bar X_n\xrightarrow{P}\mu.
\]

Question:

> **Ke mana sample mean berkonsentrasi?**

Answer:

\[
\mu.
\]

### CLT

\[
\frac{\bar X_n-\mu}{\sigma/\sqrt n}
\xrightarrow{d}
N(0,1).
\]

Question:

> **Bagaimana shape dari standardized sampling error pada large \(n\)?**

Answer:

Standard Normal.

Shortcut:

> **LLN = value/concentration.  
> CLT = standardized shape.**

---

# 11. Section 5.9 — Proof of the Central Limit Theorem

`[CF2 SUPPORTING CONTEXT]`

Section ini memberi proof machinery menggunakan MGFs.

Tujuan bukan mengulang aplikasi CLT, tetapi menjelaskan mengapa Standard Normal muncul secara universal.

Misalkan standardized observation

\[
Z_i
=
\frac{X_i-\mu}{\sigma}.
\]

Then

\[
E(Z_i)=0,
\qquad
E(Z_i^2)=1.
\]

Standardized sample sum:

\[
W_n
=
\frac1{\sqrt n}
\sum_{i=1}^nZ_i.
\]

MGF:

\[
M_{W_n}(t)
=
\left[
M_Z\left(\frac t{\sqrt n}\right)
\right]^n.
\]

Expansion around zero:

\[
M_Z(s)
=
1+\frac{s^2}{2}+o(s^2),
\]

karena first moment zero dan second moment one.

Set

\[
s=\frac t{\sqrt n}.
\]

Then

\[
M_Z\left(\frac t{\sqrt n}\right)
=
1+
\frac{t^2}{2n}
+
o\left(\frac1n\right).
\]

Raise to \(n\):

\[
M_{W_n}(t)
\to
e^{t^2/2}.
\]

But

\[
e^{t^2/2}
\]

adalah MGF Standard Normal. Therefore limiting distribution is \(N(0,1)\).

Main lesson:

> independence turns MGF of a sum into a product, standardization makes first-order terms vanish, dan second-order variance term survives to produce \(e^{t^2/2}\).

---

# 12. Key Theorem & Formula Map

| Result | Formula | Conditions | CF2 Link |
|---|---|---|---|
| One-to-one transformation | \(g(y)=f(v(y))|v'(y)|\) | differentiable monotone mapping | [[2.4 Transformasi Variabel Acak Univariat]] |
| Many-to-one transformation | \(g(y)=\sum_jf(v_j(y))|v_j'(y)|\) | sum valid inverse branches | [[2.4 Transformasi Variabel Acak Univariat]] |
| Probability integral transform | \(F(X)\sim U(0,1)\) | continuous CDF conditions | [[2.4 Transformasi Variabel Acak Univariat]] |
| Bivariate transformation | \(g(\mathbf y)=f(\mathbf v(\mathbf y))|J|\) | one-to-one differentiable mapping | [[3.8 Transformasi Variabel Acak Gabungan]] |
| MGF linear combination | \(M_{\sum a_iX_i}(t)=\prod M_{X_i}(a_it)\) | independence, MGF existence | [[2.3 Fungsi Pembangkit]] |
| MGF iid sum | \(M_{\sum X_i}(t)=[M(t)]^n\) | iid | supporting |
| Mean of sample mean | \(E(\bar X)=\mu\) | iid finite mean | [[4.2 Distribusi Sampel]] |
| Variance of sample mean | \(\operatorname{Var}(\bar X)=\sigma^2/n\) | iid finite variance | [[4.2 Distribusi Sampel]] |
| Exact Normal mean | \(\bar X\sim N(\mu,\sigma^2/n)\) | Normal population | [[4.2 Distribusi Sampel]] |
| Sample variance Chi-square | \((n-1)S^2/\sigma^2\sim\chi^2_{n-1}\) | Normal population | [[4.2 Distribusi Sampel]] |
| Independence | \(\bar X\perp S^2\) | Normal population | [[4.2 Distribusi Sampel]] |
| Student \(t\) | \((\bar X-\mu)/(S/\sqrt n)\sim t_{n-1}\) | Normal population | [[4.2 Distribusi Sampel]] |
| CLT | \((\bar X-\mu)/(\sigma/\sqrt n)\to_dN(0,1)\) | iid, finite variance in source framing | [[4.3 Teorema Limit Pusat (CLT)]] |
| Chebyshev | \(P(|X-\mu|\ge\varepsilon)\le\sigma^2/\varepsilon^2\) | finite variance | [[4.4 Hukum Bilangan Besar (LLN)]] |
| WLLN | \(\bar X_n\to_P\mu\) | iid finite variance in source proof | [[4.4 Hukum Bilangan Besar (LLN)]] |

---

# 13. Distribution Relationships Built in Chapter 5

```text
Bernoulli iid
    ↓ sum
Binomial

Exponential iid (same scale θ)
    ↓ sum
Gamma(n, θ)

Independent Chi-square
    ↓ sum
Chi-square(sum of df)

Normal iid
    ↓ sample mean
Normal(μ, σ²/n)

Normal sample
    ↓ centered sum of squares
(n−1)S²/σ² ~ χ²(n−1)

Normal sample
    ↓ replace σ by S in standardized mean
t(n−1)

General iid finite variance
    ↓ standardize sample mean, n→∞
N(0,1) limiting distribution
```

---

# 14. Important Distinctions

## 14.1 Transformation vs Expectation

Finding

\[
E[g(X)]
\]

does not require finding the distribution of \(g(X)\).

But finding probabilities involving \(g(X)\) generally needs:

- transformed distribution; or
- direct event calculation from \(X\).

---

## 14.2 One-to-One vs Many-to-One

One-to-one:

\[
y=u(x)
\]

has a single inverse branch.

Many-to-one:

multiple \(x\) values produce same \(y\), so all valid branches contribute.

---

## 14.3 Algebraic Dependence vs Probabilistic Independence

Two transformed variables may share original variables algebraically yet still be probabilistically independent if joint density factorizes on a product support.

---

## 14.4 Exact Distribution vs Approximation

- Normal sample mean from Normal population: **exact**.
- CLT Normal approximation for non-Normal population: **approximate/asymptotic**.
- Normal approximation to Binomial: **approximate** and continuity correction matters.

---

## 14.5 Standard Deviation vs Standard Error

Observation SD:

\[
\sigma.
\]

Sample mean SD:

\[
\frac{\sigma}{\sqrt n}.
\]

The latter shrinks with \(n\).

---

## 14.6 CLT vs LLN

CLT:

\[
\text{standardized error}
\to
N(0,1).
\]

LLN:

\[
\bar X_n
\to_P
\mu.
\]

---

# 15. Textbook Figures Worth Retaining Mentally

## Figure — Transformation Regions

Section 5.2 repeatedly maps regions from \((x_1,x_2)\)-space into \((y_1,y_2)\)-space.

The visual lesson:

- boundaries transform first;
- region determines integration limits and dependence structure;
- Jacobian without correct region is incomplete.

## Figure 5.5-1 — PDFs of Sample Means from \(N(50,16)\)

Curves for \(n=1,4,16,64\):

- same center \(50\);
- variance \(16/n\);
- increasingly concentrated around \(50\).

This visual is the bridge from exact Normal sampling distribution to LLN/CLT intuition.

## Figure 5.7-2 — Binomial Histogram vs Normal Curve

The figure contrasts cases where approximation is good and weak.

Key lesson:

- symmetric, well-populated Binomial support resembles Normal better;
- skewness remains visible when \(np\) is too small;
- half-unit continuity correction aligns Normal areas with histogram bars.

---

# 16. Compression Notes

### Retained in detail

- transformation logic and transformed support;
- one-to-one derivative formula;
- many-to-one branch logic;
- probability integral transformation;
- bivariate Jacobian concept and representative mappings;
- expectation/variance of sums;
- MGF product theorem under independence;
- Bernoulli \(\to\) Binomial and Exponential \(\to\) Gamma examples;
- exact sampling distribution of \(\bar X\) for Normal samples;
- sample variance \(\chi^2\) result;
- independence of \(\bar X\) and \(S^2\);
- Student's \(t\) construction;
- CLT statement and standardization;
- Normal approximation continuity correction;
- Chebyshev inequality;
- convergence in probability / WLLN;
- MGF proof idea for CLT.

### Condensed aggressively

- repetitive transformed-density examples with identical mechanics;
- long arithmetic in routine Jacobian examples;
- repeated MGF algebra once product principle is established;
- full probability/critical-value table lookups;
- repeated Binomial approximation numerical examples;
- exercises and software instructions.

### Scope boundary

Official CF2 mapping explicitly uses Hogg–Tanis:

- §5.1 for Topik 2;
- §§5.5, 5.6, 5.8 for Topik 4.

Sections 5.2–5.4, 5.7, and 5.9 are preserved to maintain textbook narrative and mathematical continuity, but they should not automatically be interpreted as separately mandated Hogg–Tanis syllabus sections.

---

# 17. CF2 Connection Map

```text
Known RV X
   ↓
Y = u(X)
   ↓
support + inverse + |derivative|
   ↓
[[2.4 Transformasi Variabel Acak Univariat]]

Known joint (X1,X2)
   ↓
(Y1,Y2)=u(X1,X2)
   ↓
inverse + Jacobian + transformed region
   ↓
[[3.8 Transformasi Variabel Acak Gabungan]]

Independent variables
   ↓
linear combinations / sums
   ↓
MGF products
   ↓
exact distribution recognition

Random sample
   ↓
sample mean / sample variance
   ↓
Normal, Chi-square, t relationships
   ↓
[[4.2 Distribusi Sampel]]

Large n
   ├── standardized shape → [[4.3 Teorema Limit Pusat (CLT)]]
   └── concentration at μ → [[4.4 Hukum Bilangan Besar (LLN)]]
```

---

# 18. Quick Reading Review

1. Mengapa support \(Y\) harus ditentukan sebelum transformed PDF?
2. Apa perbedaan CDF technique dengan change-of-variable technique?
3. Tulis formula one-to-one transformation.
4. Mengapa absolute derivative diperlukan?
5. Apa yang berubah pada many-to-one transformation?
6. Untuk \(Y=X^2\), kapan branch \(+\sqrt y\) dan \(-\sqrt y\) sama-sama digunakan?
7. Apa statement probability integral transformation?
8. Apa dua komponen utama bivariate transformation selain substitution density?
9. Tulis Jacobian inverse transformation.
10. Mengapa non-rectangular support biasanya menunjukkan dependence?
11. Apakah \(E(X_1+\cdots+X_n)\) membutuhkan independence?
12. Kapan variance dari sum sama dengan sum variances?
13. Tulis MGF linear combination independent variables.
14. Mengapa independence penting pada product-of-MGFs theorem?
15. Bagaimana iid Bernoulli sums menghasilkan Binomial?
16. Bagaimana iid Exponential sums menghasilkan Gamma?
17. Bagaimana degrees of freedom berperilaku ketika independent Chi-square variables dijumlahkan?
18. Jika \(X_i\sim N(\mu,\sigma^2)\), apa exact distribution \(\bar X\)?
19. Apa standard error \(\bar X\)?
20. Apa effect quadrupling \(n\) terhadap standard error?
21. Tulis definition \(S^2\) textbook.
22. Apa distribution \((n-1)S^2/\sigma^2\) untuk Normal sample?
23. Apa hubungan \(\bar X\) dan \(S^2\) di Normal sample?
24. Derive structure dari Student's \(t\).
25. Apa exactness assumption untuk \(T\sim t_{n-1}\)?
26. Apa standardized variable dalam CLT?
27. Apakah CLT mengatakan population menjadi Normal?
28. Apa perbedaan exact Normal sampling result dan CLT approximation?
29. Mengapa Binomial-to-Normal membutuhkan continuity correction?
30. Apa half-unit correction untuk \(P(Y=k)\)?
31. Tulis Chebyshev inequality.
32. Apakah Chebyshev menghasilkan exact probability?
33. Bagaimana Chebyshev memberi WLLN?
34. Apa arti \(\bar X_n\xrightarrow{P}\mu\)?
35. Bedakan CLT dengan LLN dalam satu kalimat.
36. Mengapa MGF proof dari CLT menghasilkan \(e^{t^2/2}\)?

---

# 19. Source Traceability

| Condensed Material | Textbook Source |
|---|---|
| Functions of one random variable, CDF method, monotone transformations | Hogg, Tanis & Zimmerman §5.1 |
| Formula \(g(y)=f(v(y))|v'(y)|\) | §5.1 |
| Decreasing transformation \(Y=(1-X)^3\) yielding Uniform | §5.1, Example 5.1-3 |
| Many-to-one transformation logic | §5.1 |
| Probability integral transformation | §5.1 |
| Functions of two variables, inverse mapping and Jacobian | §5.2 |
| Ratio/scale transformation and independent transformed variables | §5.2, Example 5.2-1 |
| Difference/sum of independent exponentials | §5.2, Example 5.2-2 |
| Sum of independent variables, dice example | §5.3 |
| MGF technique and product theorem | §5.4, Theorem 5.4-1 |
| iid sum / sample mean MGF corollary | §5.4, Corollary 5.4-1 |
| Bernoulli sum → Binomial | §5.4, Example 5.4-2 |
| Exponential sum → Gamma | §5.4, Example 5.4-3 |
| Sum independent Chi-square variables | §5.4, Theorem 5.4-2 |
| Exact Normal sampling distribution of \(\bar X\) | §5.5 |
| Sample variance Chi-square result and \(\bar X\)-\(S^2\) independence | §5.5, Theorem 5.5-2 |
| Student \(t\) construction | §5.5 |
| Central Limit Theorem | §5.6 |
| Normal approximation to Binomial and half-unit continuity correction | §5.7 |
| Chebyshev inequality | §5.8 |
| Convergence in probability and LLN development | §5.8 |
| MGF proof framework for CLT | §5.9 |
| CF2 section mapping | Silabus CF2 / Prompt CF2 Condensed Textbook Notes |

---

> [!INFO] CF2 Reading Position
> **Prerequisite:** Hogg–Tanis Chapter 2–4  
> **Core CF2 sections in this chapter:** §5.1, §5.5, §5.6, §5.8  
> **Main linked notes:** [[2.4 Transformasi Variabel Acak Univariat]] · [[3.8 Transformasi Variabel Acak Gabungan]] · [[4.2 Distribusi Sampel]] · [[4.3 Teorema Limit Pusat (CLT)]] · [[4.4 Hukum Bilangan Besar (LLN)]]

*Ref: Hogg, Tanis & Zimmerman, Probability and Statistical Inference, 9th ed., Chapter 5 — Distributions of Functions of Random Variables | CF2 PAI*
