---
type: "condensed-book"
exam: "CF2"
book: "Probability and Statistical Inference, 9th Edition"
author: "Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman"
chapter: "4"
chapter_title: "Bivariate Distributions"
cf2_topics: ["3.1", "3.2", "3.3", "3.5"]
cf2_relevance: "Mixed — §§4.1 and 4.4 explicitly mapped in CF2 syllabus; §§4.2–4.3 supporting; §4.5 beyond explicit Hogg–Tanis syllabus mapping"
source_scope: "Chapter 4, Sections 4.1–4.5"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggTanis, Bivariate, JointDistribution, Marginal, Conditional, Covariance, Correlation]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, Tanis & Zimmerman — Chapter 4: Bivariate Distributions

> [!ABSTRACT] Chapter in One View
> Chapter 4 memperluas random-variable framework dari satu measurement menjadi **dua random variables yang diamati bersama**. Penulis memulai dengan joint PMF diskrit, lalu memperoleh marginal distributions, independence, dan expectation dari fungsi dua variabel. Setelah itu covariance dan correlation diperkenalkan untuk mengukur linear association, disusul conditional distributions sebagai mekanisme untuk memperbarui distribution satu variable ketika variable lain diketahui. Seluruh machinery kemudian dipindahkan dari discrete mass ke continuous density melalui double integrals, support regions, marginalization, dan factorization. Chapter ditutup dengan bivariate Normal distribution, di mana marginals dan conditionals tetap Normal dan correlation menentukan conditional mean serta geometry elliptical dari joint density.
>
> Dalam silabus CF2, **§4.1 dan §4.4** adalah bagian Hogg–Tanis yang secara eksplisit menjadi referensi Topik 3. Sections **4.2–4.3** tetap sangat relevan sebagai conceptual bridge ke covariance/correlation dan conditional distributions, tetapi sumber utama silabus untuk bagian tersebut juga mencakup Hogg–McKean–Craig dan Miller. **§4.5 Bivariate Normal** dipertahankan karena merupakan bagian dari chapter dan mengikat konsep joint, marginal, conditional, dan correlation, tetapi bukan section Hogg–Tanis yang secara eksplisit dipetakan pada silabus CF2.

---

# 1. Why This Chapter Exists

Sampai Chapter 3, satu experimental unit biasanya menghasilkan satu random variable. Banyak masalah nyata membutuhkan **dua measurements sekaligus**:

- height dan weight;
- high-school performance dan college performance;
- dua quality characteristics;
- dua counts dari kategori berbeda;
- paired measurements atau coordinates.

Sekarang probability tidak lagi hidup hanya pada satu number line, tetapi pada **two-dimensional support**:

\[
S\subseteq\mathbb R^2.
\]

Objek utama berubah dari

\[
f_X(x)
\]

menjadi

\[
f_{X,Y}(x,y).
\]

Dari joint distribution inilah kita dapat:

1. memperoleh distribution masing-masing variable;
2. menghitung event yang melibatkan keduanya;
3. menilai independence;
4. menghitung \(E[u(X,Y)]\);
5. mengukur covariance/correlation;
6. memperoleh conditional distributions;
7. memahami bagaimana information tentang satu variable mengubah distribution variable lainnya.

Mental flow chapter:

```text
joint model f(x,y)
      ↓
joint support S
      ↓
marginalize
      ↓
f_X(x), f_Y(y)
      ↓
factorization → independence?
      ↓
joint moments → covariance / correlation
      ↓
condition on X or Y
      ↓
conditional distributions
      ↓
continuous analogue
      ↓
bivariate Normal special structure
```

---

# 2. Chapter Map

- **4.1 Bivariate Distributions of the Discrete Type**
  - joint PMF
  - joint support
  - marginal PMFs
  - independence
  - expectation of functions of two random variables
  - multivariate Hypergeometric and Trinomial examples
- **4.2 The Correlation Coefficient**
  - covariance
  - correlation coefficient
  - \(E(XY)\) identity
  - linear association
  - independence versus zero correlation
  - least-squares line connection
- **4.3 Conditional Distributions**
  - conditional PMFs
  - normalization from joint and marginal PMFs
  - conditional means / regression-function viewpoint
  - examples from finite discrete distributions
- **4.4 Bivariate Distributions of the Continuous Type**
  - joint PDF
  - probability as double integral / volume
  - marginal PDFs
  - expectation
  - independence
  - support geometry and nonrectangular regions
- **4.5 The Bivariate Normal Distribution**
  - Normal marginal and conditional structure
  - bivariate Normal PDF
  - role of \(\rho\)
  - conditional mean and variance
  - elliptical level curves

| Section | CF2 Status | Main Connection |
|---|---|---|
| 4.1 | **[CORE CF2]** | [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]], [[3.5 Independensi dan Korelasi]] |
| 4.2 | [CF2 SUPPORTING CONTEXT] | [[3.5 Independensi dan Korelasi]] |
| 4.3 | [CF2 SUPPORTING CONTEXT] | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
| 4.4 | **[CORE CF2]** | [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]], [[3.5 Independensi dan Korelasi]] |
| 4.5 | [BEYOND EXPLICIT HOGG–TANIS CF2 MAPPING] | bivariate Normal integration of chapter concepts |

---

# 3. Section 4.1 — Bivariate Distributions of the Discrete Type

`[CORE CF2]`

## 3.1 Joint PMF

Untuk dua discrete random variables \(X\) dan \(Y\), joint PMF didefinisikan oleh

\[
\boxed{
f(x,y)=P(X=x,Y=y).
}
\]

Jika \(S\) adalah joint support, maka valid joint PMF memenuhi:

\[
0\le f(x,y)\le1,
\]

\[
\boxed{
\sum\sum_{(x,y)\in S} f(x,y)=1,
}
\]

dan untuk event \(A\subseteq S\),

\[
\boxed{
P[(X,Y)\in A]
=
\sum\sum_{(x,y)\in A}f(x,y).
}
\]

Perbedaan terpenting dari univariate case:

> Support sekarang adalah **set pasangan \((x,y)\)**.  
> Tidak cukup mengetahui range \(X\) dan range \(Y\) secara terpisah.

---

## 3.2 Textbook Example — Minimum and Maximum of Two Dice

Dua fair dice dilempar. Define:

\[
X=\min(D_1,D_2),
\qquad
Y=\max(D_1,D_2).
\]

Joint support memenuhi

\[
1\le x\le y\le6.
\]

Jika \(x=y\), hanya ada satu ordered dice outcome:

\[
(x,x),
\]

sehingga

\[
P(X=x,Y=x)=\frac1{36}.
\]

Jika \(x<y\), ada dua ordered outcomes:

\[
(x,y),\qquad(y,x),
\]

maka

\[
P(X=x,Y=y)=\frac2{36}.
\]

Jadi

\[
f(x,y)=
\begin{cases}
\dfrac1{36}, & 1\le x=y\le6,\\[4pt]
\dfrac2{36}, & 1\le x<y\le6,\\[4pt]
0, & \text{otherwise}.
\end{cases}
\]

Figure 4.1-1 pada textbook memperlihatkan joint masses pada triangular support dan marginal probabilities di margins.

### Main lesson

Meskipun kedua variables berasal dari dua dice yang independent, random variables

\[
X=\min(D_1,D_2),\qquad Y=\max(D_1,D_2)
\]

**tidak independent**, karena definition mereka mengikat values melalui

\[
X\le Y.
\]

Ini early warning:

> independence dari underlying experiment tidak otomatis diteruskan ke arbitrary functions yang dibangun dari experiment tersebut.

---

## 3.3 Marginal PMFs

Dari joint PMF, distribution \(X\) diperoleh dengan menjumlahkan semua possible values \(Y\) yang kompatibel dengan \(x\):

\[
\boxed{
f_X(x)
=
\sum_y f(x,y).
}
\]

Demikian pula,

\[
\boxed{
f_Y(y)
=
\sum_x f(x,y).
}
\]

Textbook menyebutnya **marginal** karena pada table joint PMF, nilai tersebut secara natural muncul sebagai row atau column totals di margins.

> [!IMPORTANT] Marginalization Rule
> “Keep one variable, eliminate the other.”
>
> Tetapi summation harus mengikuti **valid joint support**. Jika support triangular, bounds berubah bersama variable yang dipertahankan.

---

## 3.4 Textbook Example — \(f(x,y)=(x+y)/21\)

Untuk

\[
f(x,y)=\frac{x+y}{21},
\qquad
x=1,2,3,\quad y=1,2,
\]

marginal \(X\):

\[
f_X(x)
=
\sum_{y=1}^{2}\frac{x+y}{21}
=
\frac{2x+3}{21}.
\]

Marginal \(Y\):

\[
f_Y(y)
=
\sum_{x=1}^{3}\frac{x+y}{21}
=
\frac{y+2}{7}.
\]

Karena joint PMF tidak factorize menjadi product marginals,

\[
f(x,y)\ne f_X(x)f_Y(y),
\]

maka \(X\) dan \(Y\) dependent.

---

## 3.5 Independence Criterion

Discrete random variables \(X\) dan \(Y\) independent iff

\[
\boxed{
f(x,y)=f_X(x)f_Y(y)
}
\]

untuk seluruh valid \(x,y\).

### Rectangular-support insight

Jika joint support tidak berbentuk product set

\[
S_X\times S_Y,
\]

maka independence must fail.

Contoh textbook:

\[
S=\{(1,1),(1,2),(2,2)\}.
\]

Point

\[
(2,1)
\]

tidak berada dalam joint support walaupun

\[
2\in S_X,\qquad1\in S_Y.
\]

Jika independent, product marginals pada \((2,1)\) akan positive, tetapi joint mass adalah zero. Contradiction.

Jadi:

\[
\boxed{
\text{non-product support}\Rightarrow\text{dependence}.
}
\]

Namun converse tidak berlaku:

> rectangular support **tidak cukup** untuk independence; joint PMF masih harus factorize.

---

## 3.6 Textbook Example — Independent Joint PMF

\[
f(x,y)=\frac{xy^2}{30},
\qquad
x=1,2,3,\quad y=1,2.
\]

Marginals:

\[
f_X(x)=\frac{x}{6},
\]

\[
f_Y(y)=\frac{y^2}{5}.
\]

Then

\[
f_X(x)f_Y(y)
=
\frac{x}{6}\frac{y^2}{5}
=
\frac{xy^2}{30}
=
f(x,y).
\]

Hence

\[
\boxed{X\perp Y}.
\]

---

# 4. Expectation of Functions of Two Variables

Untuk function \(u(X_1,X_2)\),

\[
\boxed{
E[u(X_1,X_2)]
=
\sum\sum_{(x_1,x_2)\in S}
u(x_1,x_2)f(x_1,x_2),
}
\]

provided the corresponding absolute expectation is finite.

Ini adalah multivariate version dari univariate expectation.

---

## 4.1 Textbook Example — Chip Payoff

Eight chips mempunyai coordinates:

- three \((0,0)\);
- two \((1,0)\);
- two \((0,1)\);
- one \((1,1)\).

Joint PMF:

\[
f(x_1,x_2)
=
\frac{3-x_1-x_2}{8},
\qquad
x_1,x_2\in\{0,1\}.
\]

Payoff:

\[
u(X_1,X_2)=X_1+X_2.
\]

Then

\[
E(X_1+X_2)
=
0\left(\frac38\right)
+
1\left(\frac28\right)
+
1\left(\frac28\right)
+
2\left(\frac18\right)
=
\frac34.
\]

Pelajaran utama:

> Distribution dari payoff tidak harus ditemukan terlebih dahulu jika hanya expectation yang diminta.

---

## 4.2 Means and Variances from Joint or Marginal

Mean \(X_i\):

\[
\mu_i=E(X_i).
\]

Variance:

\[
\sigma_i^2
=
E[(X_i-\mu_i)^2].
\]

Karena summing joint distribution over other variable menghasilkan marginal, mean dan variance satu variable dapat dihitung dari:

- joint PMF; atau
- marginal PMF.

Contoh:

\[
E(X)
=
\sum_x\sum_y x f(x,y)
=
\sum_x x
\left[
\sum_yf(x,y)
\right]
=
\sum_xxf_X(x).
\]

Ini menjadi conceptual basis marginalization:

> Untuk characteristic yang hanya bergantung pada \(X\), distribution \(Y\) dapat diintegrasikan/dijumlahkan keluar.

---

# 5. Multivariate Extensions of Familiar Discrete Models

## 5.1 Multivariate Hypergeometric

Textbook mempertimbangkan population 200 students:

- 40 A;
- 60 B;
- 100 other grades.

Sample 25 tanpa replacement.

Define:

\[
X=\#A,
\qquad
Y=\#B.
\]

Then remaining count:

\[
25-X-Y.
\]

Joint PMF:

\[
\boxed{
f(x,y)
=
\frac{
\binom{40}{x}
\binom{60}{y}
\binom{100}{25-x-y}
}{
\binom{200}{25}
}.
}
\]

Support terdiri dari nonnegative integers satisfying feasibility constraints, terutama

\[
x+y\le25.
\]

Marginal \(X\) adalah ordinary Hypergeometric:

\[
f_X(x)
=
\frac{
\binom{40}{x}
\binom{160}{25-x}
}{
\binom{200}{25}
}.
\]

\(X\) dan \(Y\) dependent karena sampling tanpa replacement serta fixed sample size mengikat category counts.

---

## 5.2 Trinomial Distribution

Ada tiga mutually exclusive dan exhaustive outcomes pada setiap independent trial:

- category \(X\) dengan probability \(p_X\);
- category \(Y\) dengan probability \(p_Y\);
- category \(Z\) dengan probability
  \[
  1-p_X-p_Y.
  \]

Setelah \(n\) independent trials,

\[
X=\#\text{category }X,
\]

\[
Y=\#\text{category }Y,
\]

\[
Z=n-X-Y.
\]

Untuk \(x,y\ge0\) dan \(x+y\le n\),

\[
\boxed{
P(X=x,Y=y)
=
\frac{n!}{x!y!(n-x-y)!}
p_X^x p_Y^y
(1-p_X-p_Y)^{n-x-y}.
}
\]

Masing-masing marginal individually Binomial:

\[
X\sim b(n,p_X),
\]

\[
Y\sim b(n,p_Y),
\]

tetapi \(X,Y\) dependent karena counts berbagi fixed total \(n\).

### Complement example

Textbook quality-control example meminta probability:

> at least two seconds **or** at least two defectives.

Event:

\[
A=\{X\ge2\text{ or }Y\ge2\}.
\]

Lebih cepat:

\[
P(A)
=
1-P(X\le1,Y\le1),
\]

lalu jumlahkan hanya empat combinations

\[
(0,0),(1,0),(0,1),(1,1).
\]

Hasil textbook:

\[
P(A)=0.204.
\]

Ini menunjukkan complement strategy juga penting pada bivariate models.

---

# 6. Section 4.2 — The Correlation Coefficient

`[CF2 SUPPORTING CONTEXT]`

Section ini memperkenalkan ukuran joint variation.

## 6.1 Covariance

\[
\boxed{
\operatorname{Cov}(X,Y)
=
E[(X-\mu_X)(Y-\mu_Y)].
}
\]

Equivalent identity:

\[
\boxed{
\operatorname{Cov}(X,Y)
=
E(XY)-\mu_X\mu_Y.
}
\]

Derivation:

\[
E[(X-\mu_X)(Y-\mu_Y)]
\]

\[
=
E(XY)
-\mu_XE(Y)
-\mu_YE(X)
+\mu_X\mu_Y,
\]

dan karena

\[
E(X)=\mu_X,\qquad E(Y)=\mu_Y,
\]

diperoleh

\[
E(XY)-\mu_X\mu_Y.
\]

---

## 6.2 Correlation Coefficient

Jika

\[
\sigma_X>0,\qquad\sigma_Y>0,
\]

then

\[
\boxed{
\rho
=
\frac{\operatorname{Cov}(X,Y)}
{\sigma_X\sigma_Y}.
}
\]

Thus

\[
\boxed{
E(XY)
=
\mu_X\mu_Y+\rho\sigma_X\sigma_Y.
}
\]

Correlation menormalisasi covariance sehingga tidak lagi tergantung unit measurement.

---

## 6.3 Why Joint Distribution Is Needed

Untuk mean atau variance \(X\), marginal distribution cukup.

Tetapi untuk

\[
E(XY),
\]

kita membutuhkan joint distribution:

\[
E(XY)
=
\sum_x\sum_yxyf(x,y)
\]

atau continuous analogue.

Ini karena product \(XY\) melibatkan kedua coordinates secara simultan.

---

## 6.4 Textbook Correlation Example

Untuk

\[
f(x,y)=\frac{x+2y}{18},
\qquad
x=1,2,\quad y=1,2,
\]

textbook menghitung marginals, means, variances, dan

\[
E(XY).
\]

Resulting covariance adalah

\[
\boxed{
\operatorname{Cov}(X,Y)
=
-\frac1{162}
}
\]

dan correlation sangat kecil, sekitar

\[
\boxed{
\rho\approx-0.025.
}
\]

Interpretation:

> dependence dapat ada walaupun linear association sangat lemah.

---

## 6.5 Independence Implies Zero Covariance

Jika \(X\) dan \(Y\) independent, then

\[
E(XY)
=
E(X)E(Y).
\]

Hence

\[
\operatorname{Cov}(X,Y)=0.
\]

Jika standard deviations positive,

\[
\rho=0.
\]

Tetapi converse tidak berlaku.

---

## 6.6 Zero Correlation Does Not Imply Independence

Textbook memberikan discrete counterexample dengan support

\[
S=
\{(0,0),(1,1),(1,-1),(2,0)\},
\]

each with probability \(1/4\).

Symmetry membuat covariance zero, sehingga

\[
\rho=0,
\]

tetapi joint support / joint PMF tidak factorize ke marginals.

Jadi:

\[
\boxed{
X\perp Y
\Longrightarrow
\operatorname{Cov}(X,Y)=0,
}
\]

tetapi secara umum

\[
\boxed{
\operatorname{Cov}(X,Y)=0
\not\Longrightarrow
X\perp Y.
}
\]

> [!IMPORTANT] Vocabulary
> \(\operatorname{Cov}(X,Y)=0\) disebut **uncorrelated**, bukan otomatis independent.

---

# 7. Correlation and the Least-Squares Line

Section 4.2 juga menghubungkan correlation dengan best linear prediction.

Cari line

\[
y=a+bx
\]

yang meminimalkan

\[
K(a,b)
=
E[(Y-a-bX)^2].
\]

Set partial derivatives equal to zero memberi:

\[
b
=
\frac{\operatorname{Cov}(X,Y)}
{\operatorname{Var}(X)}
=
\rho\frac{\sigma_Y}{\sigma_X},
\]

dan

\[
a=\mu_Y-b\mu_X.
\]

Thus least-squares line:

\[
\boxed{
y-\mu_Y
=
\rho
\frac{\sigma_Y}{\sigma_X}
(x-\mu_X).
}
\]

This formula anticipates conditional-mean line in the bivariate Normal section.

Interpretation:

- \(\rho=0\) → slope zero;
- sign of \(\rho\) determines direction;
- magnitude of slope also depends on measurement scales through \(\sigma_Y/\sigma_X\).

---

# 8. Section 4.3 — Conditional Distributions

`[CF2 SUPPORTING CONTEXT]`

Conditional probability pada events sekarang diterapkan ke random variables.

For joint PMF \(f(x,y)\), conditional PMF of \(X\) given \(Y=y\):

\[
\boxed{
g(x\mid y)
=
P(X=x\mid Y=y)
=
\frac{f(x,y)}{f_Y(y)},
}
\]

provided

\[
f_Y(y)>0.
\]

Similarly,

\[
\boxed{
h(y\mid x)
=
\frac{f(x,y)}{f_X(x)},
}
\]

provided

\[
f_X(x)>0.
\]

Conditional distribution adalah **slice dari joint PMF yang dinormalisasi kembali**.

---

## 8.1 Why Normalization Is Necessary

Fix \(Y=y\).

Joint masses

\[
f(x,y)
\]

untuk varying \(x\) secara total berjumlah

\[
f_Y(y),
\]

bukan \(1\).

Dividing by \(f_Y(y)\) membuat total conditional mass menjadi:

\[
\sum_xg(x\mid y)
=
\frac{\sum_xf(x,y)}{f_Y(y)}
=
1.
\]

Mental model:

```text
joint row/column at fixed conditioning value
          ↓
take only that slice
          ↓
divide by its total mass
          ↓
conditional PMF
```

---

## 8.2 Textbook Example — \(f(x,y)=(x+y)/21\)

Recall:

\[
f(x,y)=\frac{x+y}{21},
\qquad
x=1,2,3,\quad y=1,2,
\]

with

\[
f_X(x)=\frac{2x+3}{21},
\]

\[
f_Y(y)=\frac{y+2}{7}.
\]

Conditional \(X\mid Y=y\):

\[
g(x\mid y)
=
\frac{(x+y)/21}{(y+2)/7}
=
\boxed{
\frac{x+y}{3y+6}
}.
\]

For example,

\[
P(X=2\mid Y=2)
=
g(2\mid2)
=
\frac4{12}
=
\boxed{\frac13}.
\]

Conditional \(Y\mid X=x\):

\[
h(y\mid x)
=
\frac{(x+y)/21}{(2x+3)/21}
=
\boxed{
\frac{x+y}{2x+3}.
}
\]

Figure 4.3-1 compares:

- joint PMF;
- marginal PMFs;
- \(g(x\mid1)\), \(g(x\mid2)\);
- \(h(y\mid1)\), \(h(y\mid2)\), \(h(y\mid3)\).

Visual lesson:

> conditioning changes the relative weights inside one slice; it does not simply “select the same marginal distribution”.

---

# 9. Conditional Means as Functions of the Conditioning Value

From a conditional PMF, one can compute a conditional mean:

\[
E(X\mid Y=y)
=
\sum_xx\,g(x\mid y).
\]

Because this result depends on \(y\), it forms a function of the conditioning value.

Likewise,

\[
E(Y\mid X=x)
=
\sum_yy\,h(y\mid x).
\]

This is the bridge toward the regression-function viewpoint later emphasized by the bivariate Normal model.

> [!IMPORTANT]
> \(E(Y\mid X=x)\) is a number/function evaluated at a particular \(x\).  
> \(E(Y\mid X)\) is the corresponding random-variable-valued function when the conditioning variable remains random.

The uploaded Hogg–Tanis Chapter 4 develops the conditional-distribution machinery directly; more extensive conditional-expectation identities used in CF2 are developed more explicitly in other official Topik 3 sources.

---

# 10. Section 4.4 — Bivariate Distributions of the Continuous Type

`[CORE CF2]`

The discrete machinery now becomes continuous:

| Discrete | Continuous |
|---|---|
| joint PMF \(f(x,y)\) | joint PDF \(f(x,y)\) |
| summation | double integration |
| probability mass | probability volume |
| marginal sum | marginal integral |

---

## 10.1 Joint PDF

A nonnegative function \(f(x,y)\) serves as joint PDF if

\[
\boxed{
\iint_Sf(x,y)\,dx\,dy=1.
}
\]

For event \(A\subseteq S\),

\[
\boxed{
P[(X,Y)\in A]
=
\iint_Af(x,y)\,dx\,dy.
}
\]

Geometric interpretation:

> Probability is the **volume** under surface \(z=f(x,y)\) above the region \(A\) in the \(xy\)-plane.

This is the bivariate analogue of “probability = area under PDF”.

---

## 10.2 Marginal PDFs

Marginal of \(X\):

\[
\boxed{
f_X(x)
=
\int_{-\infty}^{\infty}
f(x,y)\,dy.
}
\]

Marginal of \(Y\):

\[
\boxed{
f_Y(y)
=
\int_{-\infty}^{\infty}
f(x,y)\,dx.
}
\]

In practice, use only the valid conditional range determined by the joint support.

---

## 10.3 Textbook Example — Rectangular Support

\[
f(x,y)
=
\frac43(1-xy),
\qquad
0\le x\le1,\quad0\le y\le1.
\]

Marginal \(X\):

\[
f_X(x)
=
\int_0^1
\frac43(1-xy)\,dy
=
\boxed{
\frac43\left(1-\frac x2\right)
},
\qquad0\le x\le1.
\]

Similarly,

\[
f_Y(y)
=
\boxed{
\frac43\left(1-\frac y2\right)
}.
\]

---

## 10.4 Region Probability Example

For

\[
P(Y\le X/2),
\]

support is unit square.

The event region is

\[
0\le y\le x/2,
\qquad
0\le x\le1.
\]

Thus

\[
P(Y\le X/2)
=
\int_0^1
\int_0^{x/2}
\frac43(1-xy)
\,dy\,dx.
\]

Textbook obtains

\[
\boxed{
P(Y\le X/2)=\frac7{24}.
}
\]

The central skill is not the integration itself but selecting the **correct two-dimensional region**.

> [!DANGER] Bounds Trap
> Never integrate a joint PDF before translating the event and support into a valid region.

---

## 10.5 Means and Variances

From joint PDF,

\[
E(X)
=
\iint_Sx f(x,y)\,dx\,dy.
\]

But marginalization gives equivalent calculation:

\[
E(X)
=
\int x f_X(x)\,dx.
\]

In the rectangular example:

\[
\mu_X=\mu_Y=\frac49,
\]

and

\[
\operatorname{Var}(X)
=
\operatorname{Var}(Y)
=
\frac{13}{162}.
\]

This confirms:

> quantities involving only one variable can be calculated from its marginal density.

---

# 11. Nonrectangular Support

## 11.1 Textbook Example — Triangular Uniform Density

\[
f(x,y)=2,
\qquad
0\le x\le y\le1.
\]

Joint support:

\[
S=\{(x,y):0\le x\le y\le1\}.
\]

Textbook explicitly recommends drawing the region.

For

\[
P\left(
0\le X\le\frac12,
0\le Y\le\frac12
\right),
\]

valid region is not the whole square \([0,1/2]^2\), because support also requires

\[
x\le y.
\]

Hence

\[
P
=
\int_0^{1/2}
\int_0^y
2\,dx\,dy
=
\boxed{\frac14}.
\]

---

## 11.2 Marginals from Triangular Support

For fixed \(x\),

\[
y\in[x,1],
\]

so

\[
f_X(x)
=
\int_x^1 2\,dy
=
\boxed{2(1-x)},
\qquad0\le x\le1.
\]

For fixed \(y\),

\[
x\in[0,y],
\]

so

\[
f_Y(y)
=
\int_0^y2\,dx
=
\boxed{2y},
\qquad0\le y\le1.
\]

Textbook also obtains:

\[
E(X)=\frac13,
\]

\[
E(Y)=\frac23,
\]

\[
E(Y^2)=\frac12.
\]

The formulas come directly from support geometry.

---

## 11.3 Continuous Independence

Continuous \(X,Y\) independent iff

\[
\boxed{
f(x,y)=f_X(x)f_Y(y)
}
\]

throughout their support.

Again:

\[
\text{non-product support}
\Rightarrow
\text{dependence}.
\]

For the triangular density \(0\le x\le y\le1\), independence is impossible.

---

# 12. Textbook Example — Support-Dependent Marginals

\[
f(x,y)=cx^2y,
\qquad
-y\le x\le1,
\quad
0\le y\le1.
\]

First normalize:

\[
\int_0^1
\int_{-y}^{1}
cx^2y\,dx\,dy
=
\frac{7c}{30}.
\]

Thus

\[
\boxed{
c=\frac{30}{7}.
}
\]

This example is important because marginalization becomes piecewise when the feasible range of one variable changes with the other.

Mental workflow:

1. draw support;
2. find projection onto \(x\)-axis and \(y\)-axis;
3. for each fixed target value, determine valid range of the eliminated variable;
4. if boundary formula changes, split the marginal integral.

This is exactly the type of support logic that makes multivariate probability calculation-heavy.

---

# 13. Continuous Covariance and Correlation

Definitions carry over unchanged:

\[
E(XY)
=
\iint_Sxyf(x,y)\,dx\,dy,
\]

\[
\boxed{
\operatorname{Cov}(X,Y)
=
E(XY)-E(X)E(Y),
}
\]

\[
\boxed{
\rho
=
\frac{\operatorname{Cov}(X,Y)}
{\sigma_X\sigma_Y}.
}
\]

Only summation is replaced by integration.

Thus one conceptual framework covers both discrete and continuous cases.

---

# 14. Section 4.5 — The Bivariate Normal Distribution

`[BEYOND EXPLICIT HOGG–TANIS CF2 MAPPING]`

This section combines:

- Normal marginals;
- Normal conditional distributions;
- correlation;
- regression line;
- joint density geometry.

It is useful as a synthesis of Chapter 4, but it should not be treated as a separately mandated Hogg–Tanis CF2 section merely because it appears in the chapter.

---

## 14.1 Construction Through Marginal and Conditional Normality

Textbook begins by taking

\[
X\sim N(\mu_X,\sigma_X^2)
\]

and specifying conditional distribution

\[
Y\mid X=x
\sim
N\left(
\mu_Y+
\rho\frac{\sigma_Y}{\sigma_X}(x-\mu_X),
\;
\sigma_Y^2(1-\rho^2)
\right).
\]

Conditional mean:

\[
\boxed{
E(Y\mid X=x)
=
\mu_Y+
\rho\frac{\sigma_Y}{\sigma_X}(x-\mu_X).
}
\]

Conditional variance:

\[
\boxed{
\operatorname{Var}(Y\mid X=x)
=
\sigma_Y^2(1-\rho^2).
}
\]

Important:

- conditional mean changes linearly with \(x\);
- conditional variance does **not** depend on \(x\);
- stronger \(|\rho|\) means smaller conditional variance.

---

## 14.2 Bivariate Normal PDF

Joint PDF is obtained from

\[
f(x,y)
=
h(y\mid x)f_X(x).
\]

Textbook writes

\[
\boxed{
f(x,y)
=
\frac{
1
}{
2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}
}
\exp\left[
-\frac12q(x,y)
\right]
}
\]

where

\[
q(x,y)
=
\frac1{1-\rho^2}
\left[
\left(\frac{x-\mu_X}{\sigma_X}\right)^2
-
2\rho
\left(\frac{x-\mu_X}{\sigma_X}\right)
\left(\frac{y-\mu_Y}{\sigma_Y}\right)
+
\left(\frac{y-\mu_Y}{\sigma_Y}\right)^2
\right].
\]

This form is called a **bivariate Normal PDF**.

---

## 14.3 Textbook Example — Grade Point Averages

Parameters:

\[
\mu_X=2.9,
\qquad
\mu_Y=2.4,
\]

\[
\sigma_X=0.4,
\qquad
\sigma_Y=0.5,
\]

\[
\rho=0.8.
\]

Marginally,

\[
Y\sim N(2.4,0.5^2).
\]

Textbook calculates:

\[
P(2.1<Y<3.3)=0.6898.
\]

Now condition on

\[
X=3.2.
\]

Conditional mean:

\[
2.4
+
0.8\left(\frac{0.5}{0.4}\right)(3.2-2.9)
=
\boxed{2.7}.
\]

Conditional SD:

\[
0.5\sqrt{1-0.8^2}
=
\boxed{0.3}.
\]

Thus

\[
Y\mid X=3.2
\sim
N(2.7,0.3^2).
\]

Textbook obtains:

\[
\boxed{
P(2.1<Y<3.3\mid X=3.2)=0.9544.
}
\]

Interpretation:

Knowledge of \(X\) changes both center and uncertainty of \(Y\).

---

## 14.4 Symmetry of the Conditional Structure

Roles of \(X\) and \(Y\) may be interchanged:

\[
X\mid Y=y
\sim
N\left(
\mu_X+
\rho\frac{\sigma_X}{\sigma_Y}(y-\mu_Y),
\;
\sigma_X^2(1-\rho^2)
\right).
\]

This mirrors the structure for \(Y\mid X=x\).

---

# 15. Geometry of the Bivariate Normal

Cross-sections with \(x=x_0\) are proportional to Normal curves in \(y\), because

\[
f(x_0,y)
=
f_X(x_0)h(y\mid x_0).
\]

Similarly, fixing \(y=y_0\) yields bell-shaped cross-sections in \(x\).

Horizontal level sets

\[
f(x,y)=z_0
\]

lead to equations of the form

\[
\left(\frac{x-\mu_X}{\sigma_X}\right)^2
-
2\rho
\left(\frac{x-\mu_X}{\sigma_X}\right)
\left(\frac{y-\mu_Y}{\sigma_Y}\right)
+
\left(\frac{y-\mu_Y}{\sigma_Y}\right)^2
=
\text{constant},
\]

which are ellipses.

So correlation changes orientation/shape of the elliptical contours.

---

## 15.1 Conditional Mean Line

Textbook Example 4.5-3 uses:

\[
\mu_X=10,\quad \sigma_X^2=9,
\]

\[
\mu_Y=12,\quad \sigma_Y^2=16,
\]

\[
\rho=0.6.
\]

Thus

\[
E(Y\mid x)
=
12+
0.6\left(\frac43\right)(x-10)
\]

\[
=
\boxed{0.8x+4}.
\]

This conditional-mean line is drawn against the elliptical contours in Figure 4.5-2.

The same slope formula appeared earlier in the least-squares line:

\[
\rho\frac{\sigma_Y}{\sigma_X}.
\]

This is not accidental; in the bivariate Normal model, the conditional mean is exactly linear.

---

# 16. Key Relationships Map

| Concept | Formula | Main Condition |
|---|---|---|
| Discrete joint PMF | \(f(x,y)=P(X=x,Y=y)\) | countable support |
| Discrete normalization | \(\sum\sum_Sf(x,y)=1\) | valid support |
| Marginal \(X\) | \(f_X(x)=\sum_yf(x,y)\) | sum valid \(y\) |
| Marginal \(Y\) | \(f_Y(y)=\sum_xf(x,y)\) | sum valid \(x\) |
| Discrete independence | \(f(x,y)=f_X(x)f_Y(y)\) | all valid pairs |
| Joint expectation | \(E[u(X,Y)]=\sum\sum u(x,y)f(x,y)\) | finite expectation |
| Covariance | \(\operatorname{Cov}(X,Y)=E(XY)-\mu_X\mu_Y\) | finite second moments |
| Correlation | \(\rho=\operatorname{Cov}(X,Y)/(\sigma_X\sigma_Y)\) | positive SDs |
| Least-squares slope | \(b=\rho\sigma_Y/\sigma_X\) | finite moments |
| Conditional PMF | \(f_{X|Y}(x|y)=f(x,y)/f_Y(y)\) | \(f_Y(y)>0\) |
| Continuous joint probability | \(P((X,Y)\in A)=\iint_Af\) | valid joint PDF |
| Marginal PDF | \(f_X(x)=\int f(x,y)dy\) | integrate valid support |
| Continuous independence | \(f=f_Xf_Y\) | all support |
| Bivariate Normal conditional mean | \(\mu_Y+\rho(\sigma_Y/\sigma_X)(x-\mu_X)\) | bivariate Normal |
| Bivariate Normal conditional variance | \(\sigma_Y^2(1-\rho^2)\) | bivariate Normal |

---

# 17. Important Distinctions

## 17.1 Joint Support vs Cartesian Product of Marginal Supports

Possible values \(x\) and \(y\) individually do not imply every pair is possible.

Example:

\[
0\le x\le y\le1.
\]

Both marginal supports are \([0,1]\), but pair

\[
(0.9,0.1)
\]

is impossible.

---

## 17.2 Marginal vs Conditional

Marginal:

\[
f_X(x)
=
\sum_y f(x,y)
\]

or

\[
\int f(x,y)dy.
\]

It ignores \(Y\).

Conditional:

\[
f_{X|Y}(x|y)
=
\frac{f(x,y)}{f_Y(y)}.
\]

It fixes a value of \(Y\) and renormalizes the relevant slice.

---

## 17.3 Independence vs Zero Correlation

Independence:

\[
f(x,y)=f_X(x)f_Y(y).
\]

Uncorrelated:

\[
\operatorname{Cov}(X,Y)=0.
\]

Independence implies zero covariance under finite moments, but not conversely.

---

## 17.4 Covariance vs Correlation

Covariance depends on units:

\[
\operatorname{Cov}(aX,bY)
=
ab\operatorname{Cov}(X,Y).
\]

Correlation removes unit scaling and measures standardized linear association.

---

## 17.5 Continuous Density Value vs Probability

\[
f(x,y)
\]

is density height, not point probability.

For jointly continuous variables,

\[
P(X=x,Y=y)=0.
\]

Probability comes from integration over area.

---

# 18. Support Logic Checklist

Before summation/integration:

1. write joint support;
2. identify event region;
3. intersect event with support;
4. choose order of summation/integration;
5. derive inner bounds as functions of outer variable;
6. split into pieces if boundary changes;
7. only then calculate.

### For marginalization

Keep \(X\):

\[
f_X(x)
=
\int_{\text{valid }y\text{ for fixed }x}f(x,y)\,dy.
\]

Keep \(Y\):

\[
f_Y(y)
=
\int_{\text{valid }x\text{ for fixed }y}f(x,y)\,dx.
\]

This simple “fixed-value slice” interpretation prevents most bound errors.

---

# 19. Textbook Figures Worth Retaining Mentally

## Figure 4.1-1 — Dice Minimum/Maximum Joint PMF

Shows:

- triangular joint support;
- \(1/36\) masses on diagonal;
- \(2/36\) masses above diagonal;
- marginal totals in margins.

Best mental image for discrete joint support + marginalization + dependence.

## Figure 4.1-3 / 4.1-4 — 3D Probability Histograms

Joint PMF can be visualized as rectangular columns with volume equal to point probability.

This prepares intuition for continuous joint density, where probability becomes volume under a surface.

## Figure 4.3-1 — Joint, Marginal, and Conditional PMFs

One figure compares all three objects:

\[
f(x,y),
\quad
f_X(x), f_Y(y),
\quad
g(x|y), h(y|x).
\]

It makes conditional distribution visibly a normalized slice of joint probability.

## Section 4.4 Triangular Support Diagram

For

\[
0\le x\le y\le1,
\]

drawing the triangle is essential for deriving:

\[
f_X(x)=\int_x^1 2\,dy,
\]

\[
f_Y(y)=\int_0^y2\,dx.
\]

## Figure 4.5-2 — Bivariate Normal Surface and Elliptical Contours

Shows:

- 3D bell-like joint density;
- elliptical level curves;
- conditional mean line through the ellipses.

---

# 20. Compression Notes

### Retained in detail

- joint PMF definition and normalization;
- two-dice min/max example;
- marginal PMFs;
- product criterion for independence;
- rectangular vs nonrectangular-support logic;
- expectation of functions of two variables;
- multivariate Hypergeometric and Trinomial structure;
- covariance and correlation definitions;
- \(E(XY)-E(X)E(Y)\) identity;
- independence vs uncorrelatedness;
- least-squares line relationship;
- conditional PMF normalization;
- key discrete conditional example;
- continuous joint PDF and probability-as-volume interpretation;
- marginal PDFs;
- rectangular and triangular support examples;
- continuous independence;
- bivariate Normal conditional and joint structure;
- elliptical contours.

### Condensed aggressively

- repetitive arithmetic in routine joint-PMF examples;
- repeated exercises after a principle was established;
- long graphical descriptions;
- repeated integrations with identical mechanics;
- optional application stories not introducing a new probability structure;
- lengthy regression derivations beyond the essential normal equations/result.

### Source-boundary notes

- Silabus CF2 explicitly maps Hogg–Tanis **§4.1 and §4.4** to Topik 3.
- §§4.2–4.3 are retained as textbook-supporting material because they directly connect joint distributions to correlation and conditioning.
- §4.5 is retained to preserve full Chapter 4 narrative, but is labeled beyond the explicit Hogg–Tanis section mapping.
- Material on variance-covariance matrices, general multivariate random vectors, compound distributions, and general Jacobian transformations belongs primarily to other official CF2 sources/sections and is not silently inserted here.

---

# 21. CF2 Connection Map

```text
Joint PMF/PDF f(x,y)
        ↓
understand support
        ↓
[[3.1 Distribusi Gabungan (Joint Distribution)]]
        ↓
sum/integrate unwanted variable
        ↓
[[3.2 Distribusi Marginal]]
        ↓
compare f(x,y) vs f_X(x)f_Y(y)
        ↓
independence
        ↓
E(XY) → covariance → correlation
        ↓
[[3.5 Independensi dan Korelasi]]

Joint distribution
        ↓
fix Y=y or X=x
        ↓
normalize joint slice by marginal
        ↓
conditional distribution
        ↓
[[3.3 Distribusi Bersyarat (Conditional Distribution)]]

Continuous joint model
        ↓
region + double integral
        ↓
marginals + independence + moments
        ↓
support geometry becomes central

Bivariate Normal
        ↓
Normal marginals
        ↓
Normal conditionals
        ↓
linear conditional mean + elliptical contours
```

---

# 22. Quick Reading Review

1. Apa tiga syarat joint PMF?
2. Mengapa joint support lebih penting daripada hanya mengetahui \(S_X\) dan \(S_Y\)?
3. Untuk dice minimum/maximum, mengapa diagonal mass \(1/36\) tetapi off-diagonal mass \(2/36\)?
4. Bagaimana memperoleh marginal \(f_X(x)\)?
5. Bagaimana memperoleh marginal \(f_Y(y)\)?
6. Apa criterion independence untuk discrete joint PMF?
7. Mengapa non-product support langsung menunjukkan dependence?
8. Apakah rectangular support cukup untuk independence?
9. Tulis formula \(E[u(X,Y)]\).
10. Mengapa mean \(X\) dapat dihitung dari joint ataupun marginal PMF?
11. Apa joint PMF multivariate Hypergeometric pada textbook student-grade example?
12. Mengapa category counts dalam multinomial/trinomial model dependent?
13. Apa PMF Trinomial?
14. Bagaimana complement mempercepat “at least two in either category”?
15. Tulis definition covariance.
16. Tulis shortcut covariance melalui \(E(XY)\).
17. Tulis definition correlation.
18. Mengapa covariance membutuhkan joint distribution?
19. Apa implication independence terhadap covariance?
20. Mengapa zero covariance tidak cukup membuktikan independence?
21. Apa slope least-squares line dalam terms of \(\rho,\sigma_X,\sigma_Y\)?
22. Tulis conditional PMF \(X|Y=y\).
23. Mengapa harus dibagi marginal \(f_Y(y)\)?
24. Bagaimana mengecek conditional PMF telah normalized?
25. Apa bedanya marginal dengan conditional distribution?
26. Apa continuous analogue dari joint PMF?
27. Apa geometric meaning dari \(\iint_Af(x,y)dxdy\)?
28. Bagaimana marginal PDF dihitung?
29. Untuk support \(0\le x\le y\le1\), apa range \(y\) jika \(x\) fixed?
30. Untuk support yang sama, apa range \(x\) jika \(y\) fixed?
31. Mengapa triangular support menunjukkan dependence?
32. Apa formula covariance continuous?
33. Dalam bivariate Normal, apa \(E(Y|X=x)\)?
34. Apa \(\operatorname{Var}(Y|X=x)\)?
35. Apa effect \(|\rho|\) terhadap conditional variance?
36. Bagaimana bentuk level curves bivariate Normal?
37. Apa hubungan conditional mean line dengan least-squares slope?
38. Section Hogg–Tanis Chapter 4 mana yang secara eksplisit dipetakan dalam silabus CF2?

---

# 23. Source Traceability

| Condensed Material | Textbook Source |
|---|---|
| Joint discrete PMF definition and properties | Hogg, Tanis & Zimmerman §4.1 |
| Dice minimum/maximum example | §4.1, Example 4.1-1 / Figure 4.1-1 |
| Marginal PMFs | §4.1, Definition 4.1-2 |
| Independence via joint–marginal factorization | §4.1 |
| Examples \(f=(x+y)/21\), \(f=xy^2/30\), triangular discrete support | §4.1, Examples 4.1-2–4.1-4 |
| Joint expectation \(E[u(X_1,X_2)]\) | §4.1 |
| Chip payoff example | §4.1, Example 4.1-6 |
| Multivariate Hypergeometric | §4.1, Example 4.1-7 |
| Trinomial distribution and QC complement example | §4.1, Examples 4.1-8–4.1-9 |
| Covariance and correlation definitions | §4.2 |
| Identity \(\operatorname{Cov}=E(XY)-\mu_X\mu_Y\) | §4.2 |
| Example \(f=(x+2y)/18\), weak negative correlation | §4.2, Example 4.2-1 |
| Zero correlation but dependence counterexample | §4.2 |
| Least-squares line connection | §4.2 development/exercises |
| Conditional PMF definitions | §4.3 |
| Conditional example \(f=(x+y)/21\) | §4.3, Example 4.3-1 / Figure 4.3-1 |
| Continuous joint PDF, marginal PDFs, expectation | §4.4 |
| Rectangular example \(f=\frac43(1-xy)\) | §4.4, Example 4.4-1 |
| Triangular support \(f=2,\ 0\le x\le y\le1\) | §4.4, Example 4.4-3 |
| Support-dependent density \(cx^2y\) | §4.4, Example 4.4-4 |
| Bivariate Normal joint PDF and conditional Normal structure | §4.5 |
| GPA conditional-probability example | §4.5, Example 4.5-2 |
| Elliptical contours and conditional mean line | §4.5, Example 4.5-3 |
| CF2 section mapping | Silabus CF2 — Topik 3 |

---

> [!INFO] CF2 Reading Position
> **Prerequisites:** Hogg–Tanis Chapters 2–3  
> **Explicit Hogg–Tanis CF2 core in this chapter:** §§4.1 and 4.4  
> **Main connected notes:** [[3.1 Distribusi Gabungan (Joint Distribution)]] · [[3.2 Distribusi Marginal]] · [[3.3 Distribusi Bersyarat (Conditional Distribution)]] · [[3.5 Independensi dan Korelasi]]

*Ref: Hogg, Tanis & Zimmerman, Probability and Statistical Inference, 9th ed., Chapter 4 — Bivariate Distributions | CF2 PAI*
