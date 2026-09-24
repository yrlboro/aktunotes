---
type: "condensed-book"
exam: "CF2"
book: "Introduction to Mathematical Statistics, 8th Edition"
author: "Robert V. Hogg, Joseph W. McKean, Allen T. Craig"
chapter: "2"
chapter_title: "Multivariate Distributions"
cf2_topics: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.8"]
cf2_relevance: "High"
source_scope: "Chapter 2, Sections 2.1-2.6, aligned with official CF2 Topik 3 mapping"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggMcKeanCraig, Multivariate, JointDistribution]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, McKean & Craig — Chapter 2: Multivariate Distributions

> [!ABSTRACT] Chapter in One View
> Chapter 2 memperluas seluruh machinery univariat menjadi **random vector**. Objek pusat berubah dari support satu dimensi menjadi **joint support**, dan dari PMF/PDF tunggal menjadi joint PMF/PDF/CDF. Dari joint law, penulis memperoleh marginal distributions, transformations dua variabel melalui CDF atau Jacobian, conditional distributions, independence criteria, covariance dan correlation, joint MGF, serta generalisasi ke random vectors berdimensi lebih tinggi. Chapter ini sangat dekat dengan CF2 Topik 3: joint/marginal/conditional distributions, conditional expectation, independence, covariance-correlation, variance-covariance matrix, dan multivariate transformations. Hampir semua calculation error pada chapter ini berasal dari dua sumber: **salah membaca region support** atau **mengabaikan dependence structure**. Karena itu conceptual progression penulis selalu kembali pada geometry dari joint support dan factorization dari joint law.

## 1. Why This Chapter Exists

Satu random variable hanya mengukur satu aspek outcome. Banyak problem nyata memerlukan beberapa measurement sekaligus. Begitu dua atau lebih random variables diamati bersama, kita tidak cukup mengetahui marginal distribution masing-masing; kita juga harus mengetahui bagaimana mereka **bervariasi bersama**.

Chapter ini menjawab pertanyaan berikut:

- bagaimana menulis distribution dari $(X,Y)$?
- bagaimana memperoleh distribution $X$ saja atau $Y$ saja?
- bagaimana distribution $X$ berubah ketika $Y=y$ diketahui?
- kapan $X$ dan $Y$ independent?
- bagaimana mengukur linear association?
- bagaimana mentransformasi $(X,Y)$ menjadi $(U,V)$?
- bagaimana generalisasi ke vector dan covariance matrix?

---

## 2. Chapter Map

- **2.1 Distributions of Two Random Variables**
  - joint CDF;
  - joint PMF/PDF;
  - marginal distributions;
  - joint expectation dan joint MGF.
- **2.2 Transformations**
  - CDF approach;
  - one-to-one bivariate change of variables;
  - Jacobian;
  - transformed support.
- **2.3 Conditional Distributions**
  - conditional PMF/PDF;
  - conditional moments;
  - conditional expectation.
- **2.4 Independent Random Variables**
  - joint factorization;
  - CDF criterion;
  - expectation factorization;
  - joint MGF factorization.
- **2.5 The Correlation Coefficient**
  - covariance;
  - correlation;
  - zero covariance vs independence;
  - joint MGF derivatives.
- **2.6 Multivariate Distributions**
  - $n$-dimensional random vectors;
  - expectation of vectors/matrices;
  - covariance matrix;
  - linear transformations.

| Textbook Section | CF2 Relevance | Connected Syllabus Note |
|---|---|---|
| 2.1 | Core | [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]] |
| 2.2 | Core | [[3.8 Transformasi Variabel Acak Gabungan]] |
| 2.3 | Core | [[3.3 Distribusi Bersyarat (Conditional Distribution)]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
| 2.4 | Core | [[3.5 Independensi dan Korelasi]] |
| 2.5 | Core | [[3.5 Independensi dan Korelasi]] |
| 2.6 | Core | [[3.6 Matriks Variansi-Kovariansi]], plus higher-dimensional extensions |

---

# 3. Section 2.1 — Distributions of Two Random Variables

`[CORE CF2]`

## 3.1 Random vector and joint CDF

Untuk dua random variables $X$ dan $Y$, joint CDF adalah


$$
F_{X,Y}(x,y)
=
P(X\le x,\;Y\le y).
$$


Ia mengakumulasikan probability pada region southwest dari titik $(x,y)$.

Marginal CDF dapat diperoleh melalui limit:


$$
F_X(x)=\lim_{y\to\infty}F_{X,Y}(x,y),
$$


$$
F_Y(y)=\lim_{x\to\infty}F_{X,Y}(x,y).
$$


Probability pada rectangle dapat dihitung dengan four-corner difference:


$$
P(a<X\le b,\;c<Y\le d)
=
F(b,d)-F(a,d)-F(b,c)+F(a,c).
$$


> [!TIP] Geometry Rule
> Joint CDF adalah accumulated mass/volume di kiri-bawah. Rectangle probability mengikuti inclusion–exclusion dua dimensi: $+\,-\,-\,+$.

---

## 3.2 Joint PMF — discrete case

Untuk discrete pair,


$$
p_{X,Y}(x,y)
=
P(X=x,Y=y).
$$


Syarat:


$$
p_{X,Y}(x,y)\ge0,
$$


dan


$$
\sum_x\sum_y p_{X,Y}(x,y)=1
$$


dengan summation hanya pada valid joint support.

Probability event $A\subseteq \mathbb{R}^2$:


$$
P((X,Y)\in A)
=
\sum\sum_{(x,y)\in A}p_{X,Y}(x,y).
$$


## 3.3 Joint PDF — continuous case

Untuk jointly continuous pair,


$$
P((X,Y)\in A)
=
\iint_A f_{X,Y}(x,y)\,dx\,dy.
$$


Normalization:


$$
\iint_{S}f_{X,Y}(x,y)\,dx\,dy=1.
$$


> [!WARNING] Bounds / Region Trap
> Double integral tidak boleh ditulis sebelum joint support dipahami.  
> Untuk triangular support seperti
> 
$$
> 0<x<y<1,
>
$$

> bounds $x$ bergantung pada $y$ atau sebaliknya.

---

## 3.4 Marginal distributions

Marginal PMF:


$$
p_X(x)=\sum_y p_{X,Y}(x,y),
\qquad
p_Y(y)=\sum_x p_{X,Y}(x,y).
$$


Marginal PDF:


$$
f_X(x)=\int f_{X,Y}(x,y)\,dy,
\qquad
f_Y(y)=\int f_{X,Y}(x,y)\,dx.
$$


Integration/summation range harus mengikuti joint support.

Mental model:

```text
joint distribution
      ↓
keep target variable
      ↓
sum/integrate out the other
      ↓
marginal distribution
```

---

## 3.5 Joint expectation

Untuk function $u(X,Y)$,

Discrete:


$$
E[u(X,Y)]
=
\sum_x\sum_y u(x,y)p_{X,Y}(x,y).
$$


Continuous:


$$
E[u(X,Y)]
=
\iint u(x,y)f_{X,Y}(x,y)\,dx\,dy.
$$


Special cases mencakup:


$$
E[X],\quad E[Y],\quad E[X^2],\quad E[Y^2],\quad E[XY].
$$


Joint moments kemudian menjadi basis covariance dan correlation.

---

## 3.6 Joint MGF

Joint MGF:


$$
M_{X,Y}(t_1,t_2)
=
E[e^{t_1X+t_2Y}].
$$


Mixed derivatives menghasilkan joint moments:


$$
\frac{\partial^{k+m}M}{\partial t_1^k\partial t_2^m}
\bigg|_{(0,0)}
=
E[X^kY^m].
$$


Marginal MGF diperoleh dengan men-set parameter lain ke zero:


$$
M_X(t)=M_{X,Y}(t,0),
$$


$$
M_Y(t)=M_{X,Y}(0,t).
$$


Ini menjadi jembatan langsung ke independence dan covariance.

---

# 4. Section 2.2 — Transformations of Two Random Variables

`[CORE CF2]`

## 4.1 Why transformation is harder in two dimensions

Untuk univariate case, transformed support adalah interval. Untuk bivariate transformation,


$$
(Y_1,Y_2)=T(X_1,X_2),
$$


kita harus memetakan **seluruh region support**.

Kesalahan utama biasanya bukan derivative, tetapi transformed region.

---

## 4.2 CDF technique for a derived variable

Source memberikan contoh dua independent $U(0,1)$-type variables dan


$$
Z=X_1+X_2.
$$


Joint density constant pada unit square:


$$
f_{X_1,X_2}(x_1,x_2)=1,
\qquad
0<x_1<1,\;0<x_2<1.
$$


CDF:


$$
F_Z(z)=P(X_1+X_2\le z).
$$


Untuk $0\le z<1$, region adalah triangle:


$$
F_Z(z)
=
\int_0^z\int_0^{z-x_1}dx_2\,dx_1
=
\frac{z^2}{2}.
$$


Untuk $1\le z<2$, lebih mudah menggunakan complement triangle:


$$
F_Z(z)
=
1-\frac{(2-z)^2}{2}.
$$


Maka density:


$$
f_Z(z)
=
\begin{cases}
z, & 0<z<1,\\
2-z, & 1\le z<2,\\
0, & \text{otherwise}.
\end{cases}
$$


Lesson utama: **distribution dari sum muncul dari geometry of the support**.

---

## 4.3 One-to-one transformation and Jacobian

Misalkan


$$
(Y_1,Y_2)
=
(u_1(X_1,X_2),u_2(X_1,X_2))
$$


adalah one-to-one transformation.

Cari inverse:


$$
x_1=w_1(y_1,y_2),
\qquad
x_2=w_2(y_1,y_2).
$$


Jacobian inverse:


$$
J
=
\frac{\partial(x_1,x_2)}{\partial(y_1,y_2)}
=
\begin{vmatrix}
\frac{\partial x_1}{\partial y_1} &
\frac{\partial x_1}{\partial y_2}\\
\frac{\partial x_2}{\partial y_1} &
\frac{\partial x_2}{\partial y_2}
\end{vmatrix}.
$$


Then


$$
f_{Y_1,Y_2}(y_1,y_2)
=
f_{X_1,X_2}(w_1,w_2)
\left|J\right|,
$$


pada transformed support.

### Core workflow

```text
original support S
      ↓
define transformation
      ↓
solve inverse
      ↓
map S into transformed support T(S)
      ↓
compute inverse Jacobian
      ↓
substitute density × |J|
      ↓
verify normalization
```

> [!DANGER] Jacobian Trap
> Yang dipakai pada formula di atas adalah
> 
$$
> \left|\frac{\partial(x_1,x_2)}{\partial(y_1,y_2)}\right|,
>
$$

> bukan determinant arah sebaliknya tanpa reciprocal adjustment.

---

# 5. Section 2.3 — Conditional Distributions

`[CORE CF2]`

## 5.1 Discrete conditional PMF

Jika $p_Y(y)>0$,


$$
p_{X\mid Y}(x\mid y)
=
\frac{p_{X,Y}(x,y)}{p_Y(y)}.
$$


Untuk fixed $y$, function ini harus normalize:


$$
\sum_x p_{X\mid Y}(x\mid y)=1.
$$


Interpretasi: ambil slice joint distribution pada $Y=y$, lalu normalize seluruh mass pada slice tersebut.

---

## 5.2 Continuous conditional PDF

Jika $f_Y(y)>0$,


$$
f_{X\mid Y}(x\mid y)
=
\frac{f_{X,Y}(x,y)}{f_Y(y)}.
$$


Untuk setiap valid $y$,


$$
\int f_{X\mid Y}(x\mid y)\,dx=1.
$$


> [!WARNING] Continuous Conditioning
> Walaupun $P(Y=y)=0$, conditional density given $Y=y$ tetap didefinisikan melalui ratio density/marginal density, bukan melalui naive point-event probability ratio.

---

## 5.3 [TEXTBOOK EXAMPLE] Triangular support

Source menggunakan


$$
f(x_1,x_2)=2,
\qquad
0<x_1<x_2<1.
$$


Marginal $X_2$:


$$
f_{X_2}(x_2)
=
\int_0^{x_2}2\,dx_1
=
2x_2,
\qquad 0<x_2<1.
$$


Conditional density:


$$
f_{X_1\mid X_2}(x_1\mid x_2)
=
\frac{2}{2x_2}
=
\frac{1}{x_2},
\qquad
0<x_1<x_2.
$$


Jadi given $X_2=x_2$, $X_1$ uniform pada interval $(0,x_2)$.

Kemudian:


$$
E[X_1\mid X_2=x_2]
=
\frac{x_2}{2},
$$


$$
\operatorname{Var}(X_1\mid X_2=x_2)
=
\frac{x_2^2}{12}.
$$


Lesson geometry: conditioning pada $X_2=x_2$ berarti mengambil horizontal/vertical slice yang valid menurut triangular support.

---

## 5.4 Conditional expectation

Untuk discrete:


$$
E[g(X)\mid Y=y]
=
\sum_x g(x)p_{X\mid Y}(x\mid y).
$$


Untuk continuous:


$$
E[g(X)\mid Y=y]
=
\int g(x)f_{X\mid Y}(x\mid y)\,dx.
$$


Jika $y$ belum diobservasi, expression


$$
E[X\mid Y]
$$


dipandang sebagai function dari random variable $Y$, sehingga ia sendiri random.

> [!WARNING] Important Distinction
> 
$$
> E[X\mid Y=y]
>
$$

> adalah value/function pada fixed $y$, sedangkan
> 
$$
> E[X\mid Y]
>
$$

> adalah random variable.

---

# 6. Section 2.4 — Independent Random Variables

`[CORE CF2]`

## 6.1 Distributional definition

$X$ dan $Y$ independent bila joint probabilities factorize menjadi product marginals.

Discrete:


$$
p_{X,Y}(x,y)=p_X(x)p_Y(y)
$$


untuk seluruh support.

Continuous:


$$
f_{X,Y}(x,y)=f_X(x)f_Y(y)
$$


pada support.

Equivalent CDF criterion:


$$
F_{X,Y}(x,y)=F_X(x)F_Y(y)
$$


untuk semua $x,y$.

---

## 6.2 Support clue

Jika joint support bukan product set,


$$
S\neq S_X\times S_Y,
$$


maka $X$ dan $Y$ tidak mungkin independent.

Triangular support seperti


$$
0<x<y<1
$$


langsung menunjukkan dependence.

Sebaliknya, rectangular support **tidak cukup** untuk menyimpulkan independence; density/PMF juga harus factorize.

---

## 6.3 Expectation factorization

Jika $X,Y$ independent dan expectations exist,


$$
E[u(X)v(Y)]
=
E[u(X)]E[v(Y)].
$$


Special case:


$$
E[XY]=E[X]E[Y].
$$


Ini adalah alasan independence mengimplikasikan covariance zero.

---

## 6.4 Joint MGF factorization

Jika joint MGF exists, independence menghasilkan


$$
M_{X,Y}(t_1,t_2)
=
M_X(t_1)M_Y(t_2).
$$


Dalam framework source, factorization joint MGF juga menjadi criterion powerful untuk independence ketika MGFs exist.

---

# 7. Section 2.5 — Covariance and Correlation

`[CORE CF2]`

## 7.1 Covariance

Misalkan


$$
\mu_X=E[X],
\qquad
\mu_Y=E[Y].
$$


Covariance:


$$
\operatorname{Cov}(X,Y)
=
E[(X-\mu_X)(Y-\mu_Y)].
$$


Equivalent computational form:


$$
\operatorname{Cov}(X,Y)
=
E[XY]-E[X]E[Y].
$$


Interpretasi sign:

- positive: deviations cenderung searah;
- negative: deviations cenderung berlawanan;
- zero: tidak ada linear covariance.

Tetapi zero covariance **tidak** menyatakan independence secara umum.

---

## 7.2 Correlation coefficient


$$
\rho_{X,Y}
=
\frac{\operatorname{Cov}(X,Y)}
{\sigma_X\sigma_Y},
$$


jika $\sigma_X,\sigma_Y>0$.

Bound:


$$
-1\le \rho_{X,Y}\le 1.
$$


Correlation adalah covariance yang dinormalisasi sehingga tidak memiliki unit.

---

## 7.3 Independence vs uncorrelatedness

Jika $X,Y$ independent dan second moments finite:


$$
E[XY]=E[X]E[Y],
$$


maka


$$
\operatorname{Cov}(X,Y)=0,
$$


dan bila variances positif,


$$
\rho=0.
$$


Tetapi source memberi counterexample bahwa converse tidak berlaku.

> [!DANGER] Important Distinction
> 
$$
> X\perp Y
> \Longrightarrow
> \operatorname{Cov}(X,Y)=0,
>
$$

> tetapi
> 
$$
> \operatorname{Cov}(X,Y)=0
> \not\Rightarrow
> X\perp Y.
>
$$


---

## 7.4 Joint MGF derivatives

Jika joint MGF tersedia,


$$
\mu_X
=
\frac{\partial M}{\partial t_1}(0,0),
$$


$$
\mu_Y
=
\frac{\partial M}{\partial t_2}(0,0),
$$


$$
E[X^2]
=
\frac{\partial^2M}{\partial t_1^2}(0,0),
$$


$$
E[Y^2]
=
\frac{\partial^2M}{\partial t_2^2}(0,0),
$$


$$
E[XY]
=
\frac{\partial^2M}{\partial t_1\partial t_2}(0,0).
$$


Then:


$$
\operatorname{Cov}(X,Y)
=
\frac{\partial^2M}{\partial t_1\partial t_2}(0,0)
-\mu_X\mu_Y.
$$


### [TEXTBOOK EXAMPLE]

Untuk


$$
f(x,y)=e^{-y},
\qquad
0<x<y<\infty,
$$


source memperoleh


$$
M(t_1,t_2)
=
\frac{1}{(1-t_1-t_2)(1-t_2)}.
$$


Dari derivatives:


$$
\mu_X=1,\qquad \mu_Y=2,
$$


$$
\operatorname{Var}(X)=1,\qquad \operatorname{Var}(Y)=2,
$$


$$
\operatorname{Cov}(X,Y)=1.
$$


Maka


$$
\rho
=
\frac{1}{\sqrt{2}}.
$$


---

# 8. Section 2.6 — Multivariate Distributions

`[CORE CF2]`

## 8.1 Random vector extension

Untuk


$$
\mathbf X
=
(X_1,\ldots,X_p)^\top,
$$


joint CDF:


$$
F_{\mathbf X}(x_1,\ldots,x_p)
=
P(X_1\le x_1,\ldots,X_p\le x_p).
$$


Discrete/continuous joint laws generalize dengan multiple sums/integrals.

Marginalization berarti mempertahankan subset components dan mengeliminasi yang lain melalui summation/integration.

---

## 8.2 Mean vector


$$
\boldsymbol\mu
=
E[\mathbf X]
=
\begin{pmatrix}
E[X_1]\\
\vdots\\
E[X_p]
\end{pmatrix}.
$$


Linearity berlaku componentwise.

Jika $A$ matrix constant dan $\mathbf b$ vector constant,


$$
E[A\mathbf X+\mathbf b]
=
A\boldsymbol\mu+\mathbf b.
$$


---

## 8.3 Covariance matrix

Definition:


$$
\boldsymbol\Sigma
=
\operatorname{Cov}(\mathbf X)
=
E[(\mathbf X-\boldsymbol\mu)
(\mathbf X-\boldsymbol\mu)^\top].
$$


Entries:


$$
\Sigma_{ii}
=
\operatorname{Var}(X_i),
$$


$$
\Sigma_{ij}
=
\operatorname{Cov}(X_i,X_j).
$$


Maka:


$$
\boldsymbol\Sigma
=
\begin{pmatrix}
\operatorname{Var}(X_1) & \operatorname{Cov}(X_1,X_2) & \cdots\\
\operatorname{Cov}(X_2,X_1) & \operatorname{Var}(X_2) & \cdots\\
\vdots & \vdots & \ddots
\end{pmatrix}.
$$


Matrix ini symmetric.

Equivalent identity:


$$
\operatorname{Cov}(\mathbf X)
=
E[\mathbf X\mathbf X^\top]
-
\boldsymbol\mu\boldsymbol\mu^\top.
$$


---

## 8.4 Linear transformations

Untuk


$$
\mathbf Y=A\mathbf X+\mathbf b,
$$


$$
E[\mathbf Y]
=
A\boldsymbol\mu+\mathbf b,
$$


dan


$$
\operatorname{Cov}(\mathbf Y)
=
A\boldsymbol\Sigma A^\top.
$$


Scalar linear combination $Y=\mathbf a^\top\mathbf X$:


$$
\operatorname{Var}(Y)
=
\mathbf a^\top\boldsymbol\Sigma\mathbf a.
$$


Expanded form:


$$
\operatorname{Var}
\left(
\sum_i a_iX_i
\right)
=
\sum_i a_i^2\operatorname{Var}(X_i)
+
2\sum_{i<j}a_i a_j\operatorname{Cov}(X_i,X_j).
$$


> [!WARNING] Covariance Terms
> Jangan menghapus cross-covariance terms kecuali independence atau zero covariance memang sudah justified.

---

## 8.5 Positive semi-definite property

Untuk vector constant $\mathbf a$,


$$
\mathbf a^\top\boldsymbol\Sigma\mathbf a
=
\operatorname{Var}(\mathbf a^\top\mathbf X)
\ge0.
$$


Karena itu covariance matrix adalah positive semidefinite.

Interpretasi: tidak ada linear combination random variables yang dapat mempunyai negative variance.

---

# 9. Core Geometry and Support Logic

Chapter 2 berulang kali menggunakan satu prinsip:

> **Joint support bukan sekadar annotation; joint support adalah bagian dari distribution.**

### Rectangular support


$$
a<x<b,\qquad c<y<d
$$


memungkinkan bounds independen.

### Triangular support


$$
0<x<y<1
$$


dapat ditulis sebagai


$$
0<y<1,\qquad 0<x<y
$$


atau


$$
0<x<1,\qquad x<y<1.
$$


Choice of integration order harus mengikuti bentuk yang paling sederhana untuk target.

### Transformation support

Setelah


$$
(y_1,y_2)=T(x_1,x_2),
$$


jangan hanya menghitung Jacobian; inequalities original support harus ditransformasikan menjadi inequalities pada $y_1,y_2$.

---

# 10. Key Relationships

## Joint → marginal


$$
f_X(x)=\int f_{X,Y}(x,y)\,dy.
$$


## Joint + marginal → conditional


$$
f_{X\mid Y}(x\mid y)
=
\frac{f_{X,Y}(x,y)}{f_Y(y)}.
$$


## Independence


$$
f_{X,Y}(x,y)
=
f_X(x)f_Y(y).
$$


## Independence → moment factorization


$$
E[u(X)v(Y)]
=
E[u(X)]E[v(Y)].
$$


## Covariance


$$
\operatorname{Cov}(X,Y)
=
E[XY]-E[X]E[Y].
$$


## Correlation


$$
\rho
=
\frac{\operatorname{Cov}(X,Y)}
{\sigma_X\sigma_Y}.
$$


## Conditional expectation


$$
E[X\mid Y=y]
=
\int x f_{X\mid Y}(x\mid y)\,dx.
$$


## Covariance matrix transformation


$$
\operatorname{Cov}(A\mathbf X)
=
A\boldsymbol\Sigma A^\top.
$$


---

# 11. Chapter Synthesis

Chapter 2 membangun dependency hierarchy:

```text
Joint distribution
      ↓
Joint support
      ↓
Marginal distributions
      ↓
Conditional distributions
      ↓
Independence check
      ↓
Joint moments
      ↓
Covariance / correlation
      ↓
Covariance matrix
```

Parallel branch:

```text
Joint distribution + support
      ↓
Transformation
      ↓
Inverse mapping
      ↓
Jacobian
      ↓
Transformed support
      ↓
New joint distribution
```

Untuk CF2, chapter ini mengajarkan bahwa multivariate probability bukan sekadar “univariate formula dengan dua variabel.” Perubahan terbesar adalah bahwa **region geometry** dan **dependence** menjadi bagian fundamental dari calculation.

---

# 12. Compression Notes

Dipertahankan dengan detail tinggi:

- joint CDF/PMF/PDF;
- marginalization;
- conditional distributions;
- conditional expectation;
- independence criteria;
- covariance/correlation;
- joint MGF derivatives;
- bivariate transformation and Jacobian;
- covariance matrix;
- linear covariance transformation.

Dikompresi:

- repeated exercises;
- proofs yang mengulang standard expectation algebra;
- optional matrix preliminaries yang tidak diperlukan untuk menggunakan hasil;
- extended examples dengan lesson identik;
- peripheral remarks yang tidak mengubah mathematical mechanics.

---

# 13. Source Traceability

| Materi | Source |
|---|---|
| Joint distribution and joint CDF | Hogg, McKean & Craig §2.1 |
| Marginal distributions | §2.1 |
| Joint expectation and joint MGF | §2.1 |
| Sum of two unit-uniform variables via CDF geometry | §2.2 |
| Bivariate one-to-one transformation and Jacobian | §2.2 |
| Conditional PMF/PDF | §2.3 |
| Triangular conditional example $f=2,\;0<x_1<x_2<1$ | §2.3 |
| Independence via distribution factorization | §2.4 |
| Joint CDF / expectation / MGF independence criteria | §2.4 |
| Covariance and correlation | §2.5 |
| Joint MGF mixed derivatives | §2.5 |
| Example $f(x,y)=e^{-y},0<x<y$ and $\rho=1/\sqrt2$ | §2.5 |
| Random vectors and covariance matrix | §2.6 |
| $\operatorname{Cov}(A\mathbf X)=A\Sigma A^\top$ | §2.6.1 |
| CF2 scope mapping | Silabus CF2 Topik 3: Hogg, McKean & Craig §§2.1–2.6 |

*Ref: Hogg, McKean & Craig, Introduction to Mathematical Statistics, 8th ed., Chapter 2; official CF2 Topik 3 scope.*
