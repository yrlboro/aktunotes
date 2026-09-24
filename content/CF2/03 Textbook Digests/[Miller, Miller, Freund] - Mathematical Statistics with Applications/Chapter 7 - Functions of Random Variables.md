---
title: "Miller Chapter 7 — Functions of Random Variables: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 7
exam: CF2
scope: "Topik 2 — Variabel Acak Univariat; Topik 3 — Variabel Acak Multivariat"
tags: [CF2, Miller, FunctionsOfRandomVariables, Transformation, CDFTechnique, Jacobian, MGF, RandomVariables]
status: condensed-textbook-note
language: id
---

# Miller Chapter 7 — Functions of Random Variables

> [!ABSTRACT] Tujuan chapter
> Chapter 7 membahas salah satu persoalan inti dalam probabilitas: jika random variables $X_1,\ldots,X_n$ mempunyai joint distribution yang diketahui, bagaimana menentukan distribution dari random variable baru
>
> $$
> Y=u(X_1,\ldots,X_n)?
> $$
>
> Miller mengembangkan tiga jalur utama:
>
> $$
> \text{CDF technique}
> \longrightarrow
> \text{direct transformation}
> \longrightarrow
> \text{MGF technique}.
> $$
>
> Untuk beberapa variable, transformation method berkembang menjadi persoalan **Jacobian change of variables**. Pesan utama chapter ini adalah bahwa teknik terbaik bergantung pada bentuk transformation dan geometri support-nya.

---

# 1. Introduction

`[CORE CF2]`

Misalkan random variables

$$
X_1,X_2,\ldots,X_n
$$

mempunyai joint probability distribution atau density yang diketahui. Definisikan random variable baru:

$$
Y=u(X_1,X_2,\ldots,X_n),
$$

sehingga observed values memenuhi

$$
y=u(x_1,x_2,\ldots,x_n).
$$

Tujuannya adalah menentukan PMF/PDF dari $Y$.

Miller mengembangkan:

1. **distribution function technique**;
2. **transformation technique**;
3. **moment-generating function technique**.

Tidak setiap metode sama praktisnya untuk semua problem. Khususnya, linear combinations dari independent random variables sering paling mudah ditangani dengan MGFs.

> [!IMPORTANT] Core transformation mindset
> Transformation problem bukan sekadar mengganti $x$ dengan $y$ secara aljabar. Kita juga harus memperhatikan:
>
> - apakah mapping one-to-one;
> - transformed support;
> - derivative/Jacobian yang benar;
> - multiple inverse branches, jika ada;
> - independence assumptions ketika menggunakan MGF.

---

# 2. Distribution Function Technique

`[CORE CF2]`

Cara umum untuk mencari density dari

$$
Y=u(X_1,\ldots,X_n)
$$

adalah menentukan CDF terlebih dahulu:

$$
G(y)
=
P(Y\le y)
=
P\!\left(u(X_1,\ldots,X_n)\le y\right),
$$

kemudian melakukan diferensiasi:

$$
\boxed{
g(y)=\frac{d}{dy}G(y)
}
$$

pada titik di mana derivative ada.

Metode ini sangat berguna jika event

$$
u(X_1,\ldots,X_n)\le y
$$

mudah dideskripsikan secara geometris atau mudah diubah menjadi batas pada original variable(s).

---

## 2.1 One-variable monotone example: $Y=X^3$

`[TEXTBOOK EXAMPLE]`

Misalkan

$$
f_X(x)=6x(1-x),
\qquad 0<x<1.
$$

Definisikan

$$
Y=X^3.
$$

Karena mapping $x\mapsto x^3$ increasing,

$$
G(y)
=
P(X^3\le y)
=
P(X\le y^{1/3}).
$$

Untuk $0<y<1$,

$$
G(y)
=
\int_0^{y^{1/3}}6x(1-x)\,dx
=
3y^{2/3}-2y.
$$

Diferensiasi memberikan:

$$
\boxed{
g(y)=2\left(y^{-1/3}-1\right),
\qquad 0<y<1.
}
$$

Di luar $(0,1)$,

$$
g(y)=0.
$$

### Pelajaran dari contoh ini

Metode CDF secara natural memaksa transformed support yang benar:

$$
0<X<1
\quad\Longrightarrow\quad
0<Y<1.
$$

---

## 2.2 Many-to-one example: $Y=|X|$

`[CORE CF2]`

Misalkan $X$ mempunyai density $f$, dan definisikan

$$
Y=|X|.
$$

Untuk $y>0$,

$$
G(y)
=
P(|X|\le y)
=
P(-y\le X\le y).
$$

Maka

$$
G(y)=F_X(y)-F_X(-y),
$$

dan dengan diferensiasi:

$$
\boxed{
g(y)=f(y)+f(-y),
\qquad y>0.
}
$$

Pola pentingnya:

> jika beberapa nilai original $x$ dipetakan ke transformed value $y$ yang sama, contribution probability dari seluruh preimage harus **dijumlahkan**.

### Standard Normal special case

Jika

$$
X\sim N(0,1),
$$

simetri memberikan

$$
f(-y)=f(y),
$$

sehingga

$$
\boxed{
g(y)=2\phi(y),
\qquad y>0.
}
$$

---

## 2.3 Sum of continuous random variables by a CDF region

`[TEXTBOOK EXAMPLE]`

Misalkan joint density dari $X_1,X_2$ adalah

$$
f(x_1,x_2)
=
6e^{-3x_1-2x_2},
\qquad
x_1>0,\ x_2>0.
$$

Definisikan

$$
Y=X_1+X_2.
$$

Untuk $y>0$,

$$
G(y)
=
P(X_1+X_2\le y).
$$

Valid region berbentuk segitiga:

$$
0<x_2<y,
$$

$$
0<x_1<y-x_2.
$$

Maka

$$
G(y)
=
\int_0^y
\int_0^{y-x_2}
6e^{-3x_1-2x_2}\,dx_1\,dx_2.
$$

Miller memperoleh:

$$
G(y)=1+2e^{-3y}-3e^{-2y},
$$

sehingga

$$
\boxed{
g(y)
=
6\left(e^{-2y}-e^{-3y}\right),
\qquad y>0.
}
$$

> [!IMPORTANT] Support/region lesson
> Untuk sum,
>
> $$
> X_1+X_2\le y
> $$
>
> menjadi sebuah geometric region. Integration bounds yang benar adalah bagian dari probability model, bukan sekadar urusan kalkulus.

---

# 3. Transformation Technique: One Variable

`[CORE CF2]`

Transformation method berusaha memperoleh PMF/PDF baru secara langsung tanpa terlebih dahulu menurunkan CDF.

---

## 3.1 Discrete transformations

Jika $Y=u(X)$ dan mapping one-to-one, probability mass cukup dipindahkan ke label support baru:

$$
P(Y=y)=P(X=x)
$$

untuk pasangan inverse yang sesuai.

### Textbook example

Jika $X$ adalah number of heads dalam empat fair coin tosses,

$$
P(X=x)
=
\binom{4}{x}
\left(\frac12\right)^4,
\qquad x=0,1,2,3,4.
$$

Definisikan

$$
Y=\frac{1}{1+X}.
$$

Mapping-nya:

$$
\begin{array}{c|ccccc}
x & 0 & 1 & 2 & 3 & 4\\
\hline
y & 1 & \frac12 & \frac13 & \frac14 & \frac15
\end{array}
$$

dan probabilities tetap:

$$
\frac{1}{16},
\frac{4}{16},
\frac{6}{16},
\frac{4}{16},
\frac{1}{16}.
$$

Probability mass tidak berubah; hanya label support points yang berubah.

---

## 3.2 Discrete many-to-one mappings

Jika transformation bukan one-to-one, kumpulkan seluruh original probabilities yang map ke transformed value yang sama.

`[TEXTBOOK EXAMPLE]`

Dengan $X$ yang sama, definisikan

$$
Z=(X-2)^2.
$$

Maka:

$$
P(Z=0)=P(X=2)=\frac{6}{16},
$$

$$
P(Z=1)
=
P(X=1)+P(X=3)
=
\frac{8}{16},
$$

$$
P(Z=4)
=
P(X=0)+P(X=4)
=
\frac{2}{16}.
$$

Jadi:

$$
\boxed{
P(Z=0)=\frac38,\qquad
P(Z=1)=\frac12,\qquad
P(Z=4)=\frac18.
}
$$

> [!IMPORTANT] Many-to-one rule
> Jika beberapa $x$ menghasilkan $y$ yang sama,
>
> $$
> P(Y=y)
> =
> \sum_{x:\,u(x)=y}P(X=x).
> $$

---

# 3.3 Continuous one-to-one transformation theorem

Asumsikan:

- $Y=u(X)$;
- $u$ differentiable;
- $u$ strictly increasing atau strictly decreasing pada support dengan $f_X(x)>0$;
- inverse
  $$
  x=w(y)
  $$
  ada dan differentiable.

Maka Miller's Theorem 1 memberikan:

$$
\boxed{
g(y)
=
f_X\!\bigl(w(y)\bigr)
\left|w'(y)\right|
}
$$

pada transformed support.

Secara ekuivalen:

$$
\boxed{
f_Y(y)
=
f_X(x)
\left|
\frac{dx}{dy}
\right|.
}
$$

Absolute value sangat penting.

---

## 3.4 Mengapa derivative muncul?

Probability pada corresponding intervals harus tetap dipertahankan.

Untuk increasing transformation:

$$
P(a<Y<b)
=
P(w(a)<X<w(b)).
$$

Dengan change of variable,

$$
\int_a^b g(y)\,dy
=
\int_a^b
f_X\!\bigl(w(y)\bigr)w'(y)\,dy.
$$

Untuk decreasing transformation, derivative negatif, sehingga absolute value diperlukan agar density tetap nonnegative.

Ini adalah continuous analogue dari prinsip bahwa “probability mass tetap melekat pada corresponding outcomes.”

---

## 3.5 Example: $Y=\sqrt{X}$

Misalkan

$$
f_X(x)=e^{-x},
\qquad x>0.
$$

Definisikan

$$
Y=\sqrt{X}.
$$

Inverse:

$$
x=y^2,
$$

dan

$$
\frac{dx}{dy}=2y.
$$

Karena $y>0$,

$$
\boxed{
g(y)
=
2ye^{-y^2},
\qquad y>0.
}
$$

---

## 3.6 Probability integral transformation

`[CORE CF2 / SUPPORTING CONTEXT]`

Misalkan $F_X$ adalah CDF dari continuous $X$, dan definisikan

$$
Y=F_X(X).
$$

Karena

$$
\frac{dy}{dx}
=
F_X'(x)
=
f_X(x),
$$

maka

$$
\frac{dx}{dy}
=
\frac{1}{f_X(x)}
$$

ketika $f_X(x)\ne0$.

Dengan demikian,

$$
g(y)
=
f_X(x)\frac{1}{f_X(x)}
=
1,
\qquad 0<y<1.
$$

Jadi:

$$
\boxed{
F_X(X)\sim U(0,1).
}
$$

Miller menyebutnya **probability integral transformation** dan menekankan kegunaan teoritis serta simulation-nya.

---

## 3.7 When monotonicity fails

One-variable theorem tidak dapat diterapkan langsung jika transformation tidak one-to-one pada seluruh support.

`[TEXTBOOK EXAMPLE]`

Jika

$$
X\sim N(0,1)
$$

dan

$$
Z=X^2,
$$

mapping $x\mapsto x^2$ decreasing pada $x<0$ dan increasing pada $x>0$.

Miller menyelesaikannya dalam dua tahap:

$$
X
\longrightarrow
Y=|X|
\longrightarrow
Z=Y^2.
$$

Dari hasil sebelumnya:

$$
f_Y(y)
=
2\phi(y),
\qquad y>0.
$$

Karena

$$
z=y^2,
\qquad
y=\sqrt{z},
$$

maka

$$
\frac{dy}{dz}
=
\frac{1}{2\sqrt{z}}.
$$

Sehingga

$$
f_Z(z)
=
2\phi(\sqrt{z})
\frac{1}{2\sqrt{z}}.
$$

Dengan demikian:

$$
\boxed{
f_Z(z)
=
\frac{1}{\sqrt{2\pi}}
z^{-1/2}e^{-z/2},
\qquad z>0.
}
$$

Miller mengidentifikasinya sebagai:

$$
\boxed{
X^2\sim\chi_1^2
\quad\text{jika }X\sim N(0,1).
}
$$

---

# 4. Transformation Technique: Several Variables

`[CORE CF2]`

Section ini memperluas transformation idea ke fungsi beberapa random variables.

Misalkan:

$$
Y=u(X_1,X_2).
$$

Ada dua level pendekatan.

---

## 4.1 Replace one variable, keep another

Kita dapat memperkenalkan $Y$ sambil mempertahankan, misalnya, $X_2$.

Untuk continuous variables, jika $x_1$ dapat ditulis sebagai fungsi dari $y,x_2$, maka:

$$
\boxed{
g(y,x_2)
=
f(x_1,x_2)
\left|
\frac{\partial x_1}{\partial y}
\right|.
}
$$

Kemudian marginalize $x_2$:

$$
f_Y(y)
=
\int g(y,x_2)\,dx_2.
$$

Pendekatan analog dapat dilakukan dengan mempertahankan $X_1$ dan mengganti $X_2$.

---

## 4.2 Example: sum of two independent Poisson variables

Misalkan

$$
X_1\sim\operatorname{Poisson}(\lambda_1),
\qquad
X_2\sim\operatorname{Poisson}(\lambda_2),
$$

independently.

Definisikan:

$$
Y=X_1+X_2.
$$

Joint PMF:

$$
f(x_1,x_2)
=
e^{-(\lambda_1+\lambda_2)}
\frac{
\lambda_1^{x_1}\lambda_2^{x_2}
}{
x_1!x_2!
}.
$$

Gunakan:

$$
x_1=y-x_2.
$$

Lalu jumlahkan untuk:

$$
x_2=0,1,\ldots,y.
$$

Miller memperoleh:

$$
\boxed{
P(Y=y)
=
e^{-(\lambda_1+\lambda_2)}
\frac{
(\lambda_1+\lambda_2)^y
}{
y!
}.
}
$$

Jadi:

$$
\boxed{
X_1+X_2
\sim
\operatorname{Poisson}(\lambda_1+\lambda_2).
}
$$

Hasil ini nantinya diturunkan kembali dengan jauh lebih elegan menggunakan MGF.

---

## 4.3 Example: ratio $Y=X_1/(X_1+X_2)$

Misalkan:

$$
f(x_1,x_2)
=
e^{-(x_1+x_2)},
\qquad x_1>0,\ x_2>0.
$$

Definisikan:

$$
Y=\frac{X_1}{X_1+X_2}.
$$

Pertahankan $X_1$ dan selesaikan terhadap $X_2$:

$$
x_2
=
x_1\frac{1-y}{y}.
$$

Kemudian:

$$
\frac{\partial x_2}{\partial y}
=
-\frac{x_1}{y^2}.
$$

Transformed joint density menjadi:

$$
g(x_1,y)
=
\frac{x_1}{y^2}
e^{-x_1/y},
\qquad
x_1>0,\quad 0<y<1.
$$

Integrasikan terhadap $x_1$:

$$
h(y)
=
\int_0^\infty
\frac{x_1}{y^2}e^{-x_1/y}\,dx_1
=
1.
$$

Jadi:

$$
\boxed{
Y\sim U(0,1).
}
$$

---

## 4.4 General two-variable Jacobian theorem

Definisikan:

$$
Y_1=u_1(X_1,X_2),
\qquad
Y_2=u_2(X_1,X_2).
$$

Asumsikan:

- kedua transformation functions mempunyai relevant partial derivatives;
- transformation one-to-one pada original support;
- inverse ada:
  $$
  x_1=w_1(y_1,y_2),
  \qquad
  x_2=w_2(y_1,y_2).
  $$

Maka Miller's Theorem 2:

$$
\boxed{
g(y_1,y_2)
=
f\!\left(
w_1(y_1,y_2),
w_2(y_1,y_2)
\right)
|J|
}
$$

dengan

$$
\boxed{
J
=
\begin{vmatrix}
\dfrac{\partial x_1}{\partial y_1}
&
\dfrac{\partial x_1}{\partial y_2}
\\[8pt]
\dfrac{\partial x_2}{\partial y_1}
&
\dfrac{\partial x_2}{\partial y_2}
\end{vmatrix}.
}
$$

> [!WARNING] Jacobian direction
> Miller menggunakan **inverse Jacobian**
>
> $$
> \frac{\partial(x_1,x_2)}
> {\partial(y_1,y_2)},
> $$
>
> bukan secara otomatis
>
> $$
> \frac{\partial(y_1,y_2)}
> {\partial(x_1,x_2)}.
> $$
>
> Jika forward Jacobian yang dihitung, lakukan reciprocal/inversion dengan benar.

---

## 4.5 Full Jacobian example

Dengan density positif $(X_1,X_2)$ yang sama, definisikan:

$$
Y_1=X_1+X_2,
\qquad
Y_2=\frac{X_1}{X_1+X_2}.
$$

Inverse:

$$
x_1=y_1y_2,
$$

$$
x_2=y_1(1-y_2).
$$

Transformed support:

$$
y_1>0,
\qquad
0<y_2<1.
$$

Jacobian:

$$
J
=
\begin{vmatrix}
y_2 & y_1\\
1-y_2 & -y_1
\end{vmatrix}
=
-y_1.
$$

Jadi:

$$
|J|=y_1.
$$

Karena

$$
x_1+x_2=y_1,
$$

joint density menjadi:

$$
\boxed{
g(y_1,y_2)
=
y_1e^{-y_1},
\qquad
y_1>0,\quad 0<y_2<1.
}
$$

Integrasi terhadap $y_1$ menghasilkan:

$$
f_{Y_2}(y_2)=1,
\qquad 0<y_2<1.
$$

Dengan demikian uniform result yang sama diperoleh kembali.

---

## 4.6 Support transformation is part of the theorem

Perhitungan Jacobian belum lengkap jika original support belum dipetakan ke $(y_1,y_2)$-plane.

Pada contoh di atas:

$$
x_1>0,\qquad x_2>0
$$

memberikan:

$$
y_1=x_1+x_2>0,
$$

dan karena numerator serta denominator positif:

$$
0<
\frac{x_1}{x_1+x_2}
<1.
$$

Maka:

$$
0<y_2<1.
$$

> [!IMPORTANT] CF2 transformation workflow
> Selalu lakukan:
>
> $$
> \text{transformation}
> \to
> \text{inverse}
> \to
> \text{Jacobian}
> \to
> \text{new support}
> \to
> \text{joint transformed density}
> \to
> \text{marginalize jika diperlukan}.
> $$

---

# 5. Moment-Generating Function Technique

`[CORE CF2]`

MGFs sangat powerful untuk sums dan linear combinations dari **independent** random variables.

Miller's Theorem 3:

Jika

$$
Y=X_1+\cdots+X_n
$$

dan $X_1,\ldots,X_n$ independent, maka:

$$
\boxed{
M_Y(t)
=
\prod_{i=1}^{n}M_{X_i}(t).
}
$$

---

## 5.1 Mengapa independence penting?

Mulai dari:

$$
M_Y(t)
=
E\left(e^{t(X_1+\cdots+X_n)}\right).
$$

Karena

$$
e^{t(X_1+\cdots+X_n)}
=
\prod_{i=1}^{n}e^{tX_i},
$$

untuk memisahkan expectation menjadi product:

$$
E\left(
\prod_i e^{tX_i}
\right)
=
\prod_iE(e^{tX_i}),
$$

Miller menggunakan factorization dari joint law yang muncul karena independence.

Tanpa independence, factorization tersebut tidak justified.

---

## 5.2 Identification requirement

MGF route menentukan distribution hanya jika resulting MGF dapat dikenali sebagai MGF dari distribution yang diketahui.

Workflow-nya:

$$
\text{individual MGFs}
\to
\text{multiply}
\to
\text{simplify}
\to
\text{recognize known MGF}.
$$

---

## 5.3 Sum of independent Poisson variables

Untuk:

$$
X_i\sim\operatorname{Poisson}(\lambda_i),
$$

$$
M_{X_i}(t)
=
\exp\left[\lambda_i(e^t-1)\right].
$$

Maka:

$$
M_Y(t)
=
\prod_{i=1}^{n}
e^{\lambda_i(e^t-1)}
$$

$$
=
\exp\left[
(\lambda_1+\cdots+\lambda_n)(e^t-1)
\right].
$$

Ini adalah Poisson MGF:

$$
\boxed{
Y
\sim
\operatorname{Poisson}
\left(
\sum_{i=1}^{n}\lambda_i
\right).
}
$$

Ini merupakan generalization dari hasil two-variable transformation sebelumnya.

---

## 5.4 Sum of independent exponential variables

Misalkan

$$
X_1,\ldots,X_n
$$

adalah independent Exponential random variables dengan **Miller scale parameter** yang sama, yaitu $\theta$.

Masing-masing adalah Gamma dengan:

$$
\alpha=1,
\qquad
\beta=\theta.
$$

Maka:

$$
M_{X_i}(t)
=
(1-\theta t)^{-1}.
$$

Sehingga:

$$
M_Y(t)
=
(1-\theta t)^{-n}.
$$

Ini adalah MGF dari:

$$
\boxed{
Y
\sim
\operatorname{Gamma}(n,\theta)
}
$$

dalam Miller's shape-scale convention.

Jadi:

$$
\boxed{
\text{sum dari }n\text{ iid Exponential(scale }\theta)
=
\text{Gamma(shape }n,\text{ scale }\theta).
}
$$

---

## 5.5 Bernoulli sums and the Binomial distribution

Misalkan:

$$
X_i\sim\operatorname{Bernoulli}(\theta),
$$

independently.

Untuk satu Bernoulli variable:

$$
M_{X_i}(t)
=
(1-\theta)+\theta e^t
=
1+\theta(e^t-1).
$$

Untuk:

$$
Y=X_1+\cdots+X_n,
$$

$$
M_Y(t)
=
[1+\theta(e^t-1)]^n.
$$

Ini adalah Binomial MGF.

Dengan demikian:

$$
\boxed{
Y\sim\operatorname{Binomial}(n,\theta).
}
$$

Miller menggunakan hasil ini untuk menafsirkan ulang Binomial count sebagai sum of Bernoulli indicators.

---

## 5.6 General linear combination

Miller meninggalkan generalization ini sebagai exercise:

Jika

$$
Y=a_1X_1+\cdots+a_nX_n
$$

untuk independent $X_i$, maka:

$$
\boxed{
M_Y(t)
=
\prod_{i=1}^{n}
M_{X_i}(a_it).
}
$$

Ini mengikuti scaling rule:

$$
M_{a_iX_i}(t)
=
M_{X_i}(a_it).
$$

Konsekuensi pentingnya: linear combinations dari independent Normal variables tetap Normal.

---

# 6. The Theory in Application

`[CORE CF2 / SUPPORTING APPLICATION]`

Miller menutup chapter dengan applications yang menunjukkan bahwa transformation theory bukan sekadar formal calculus.

## 6.1 Electrical engineering transformation

Jika electrical resistance $R$ random dan current memenuhi Ohm's law:

$$
E=IR,
$$

maka:

$$
I=\frac{E}{R}.
$$

Jika $R$ uniformly distributed pada designed interval, distribution dari $I$ diperoleh dengan one-variable transformation rule.

Pelajaran konseptual:

> deterministic physical law dapat mentransformasikan randomness pada input quantity menjadi nontrivial distribution pada output quantity.

## 6.2 Transforming data toward normality

Miller membahas reverse-type question:

> density awal seperti apa yang akan menghasilkan data approximately Normal setelah square-root transformation?

Ini menunjukkan bahwa transformation tidak hanya dipakai untuk menurunkan probability law, tetapi juga untuk **mengubah distributional shape dari observed data**.

Poin praktis:

$$
\text{original data}
\longrightarrow
\text{transformation}
\longrightarrow
\text{new distributional shape}.
$$

## 6.3 Waiting-time application

Miller mengasumsikan inter-emission waiting times pada radioactive decay adalah independent Exponential variables.

Jika:

$$
X_i\sim\operatorname{Exponential}(\text{rate }\lambda),
$$

maka dalam Miller's Gamma scale notation:

$$
\beta=\frac{1}{\lambda}.
$$

Total waiting time untuk $n$ emissions:

$$
T=X_1+\cdots+X_n
$$

memenuhi:

$$
\boxed{
T\sim
\operatorname{Gamma}
\left(
\alpha=n,\,
\beta=\frac{1}{\lambda}
\right).
}
$$

Ini menghubungkan:

- Exponential waiting times;
- independence;
- MGF multiplication;
- Gamma sums.

---

# Chapter Synthesis

## Tiga jalur transformation

### Route 1 — CDF

Gunakan ketika:

$$
P(u(X)\le y)
$$

atau

$$
P(u(X_1,\ldots,X_n)\le y)
$$

mudah dideskripsikan.

Core form:

$$
G(y)=P(Y\le y),
\qquad
g(y)=G'(y).
$$

### Route 2 — Direct transformation

Untuk one-to-one continuous $Y=u(X)$:

$$
\boxed{
f_Y(y)
=
f_X\!\bigl(w(y)\bigr)
\left|
\frac{dw(y)}{dy}
\right|.
}
$$

Untuk two-variable transformations:

$$
\boxed{
f_{Y_1,Y_2}(y_1,y_2)
=
f_{X_1,X_2}(x_1,x_2)
\left|
\frac{\partial(x_1,x_2)}
{\partial(y_1,y_2)}
\right|.
}
$$

### Route 3 — MGF

Untuk independent sums:

$$
\boxed{
M_{\sum X_i}(t)
=
\prod_i M_{X_i}(t).
}
$$

Untuk independent linear combinations:

$$
\boxed{
M_{\sum a_iX_i}(t)
=
\prod_i M_{X_i}(a_it).
}
$$

---

# Key Relationships

## Many-to-one discrete transformation

$$
\boxed{
P(Y=y)
=
\sum_{x:\,u(x)=y}P(X=x).
}
$$

## Many-to-one continuous transformation

One-branch derivative formula tidak boleh digunakan secara blindly. Contribution dari seluruh valid inverse branches harus diperhitungkan, misalnya melalui:

- CDF method;
- pemisahan menjadi monotone pieces;
- generalized transformation argument yang valid.

## Probability integral transformation

$$
\boxed{
F_X(X)\sim U(0,1)
}
$$

untuk continuous $X$ di bawah regularity assumptions yang digunakan Miller.

## Squared Standard Normal

$$
\boxed{
Z^2\sim\chi_1^2
\quad
\text{jika }Z\sim N(0,1).
}
$$

## Poisson closure under independent sums

$$
\boxed{
X_i\sim\operatorname{Poisson}(\lambda_i)
\Rightarrow
\sum_iX_i
\sim
\operatorname{Poisson}\left(\sum_i\lambda_i\right).
}
$$

## Exponential sum

$$
\boxed{
X_i\overset{\text{iid}}{\sim}\operatorname{Exponential}(\theta)
\Rightarrow
\sum_iX_i
\sim
\operatorname{Gamma}(n,\theta)
}
$$

dengan Miller's shape-scale convention.

---

# Distribution / Model Snapshot

| Situation | Preferred Miller technique | Main issue |
|---|---|---|
| Monotone $Y=u(X)$ | direct transformation atau CDF | inverse + support |
| $Y=|X|$, $X^2$ | CDF / split branches | many-to-one |
| $Y=X_1+X_2$ dengan awkward densities | CDF region atau transform | bounds |
| Two-output continuous transform | Jacobian | inverse + determinant + support |
| Sum of independent known families | MGF | independence + MGF recognition |
| Discrete many-to-one mapping | collect masses | combine preimages |
| Ratio seperti $X_1/(X_1+X_2)$ | joint transformation | transformed support |
| Waiting-time sum | MGF | Exponential $\to$ Gamma |

---

# Notation & Parameterization

| Symbol | Meaning |
|---|---|
| $f_X(x)$ | original PMF/PDF |
| $g(y)$ | transformed PMF/PDF |
| $G(y)$ | CDF dari transformed random variable |
| $u(\cdot)$ | forward transformation |
| $w(\cdot)$ | inverse transformation |
| $J$ | inverse Jacobian determinant |
| $M_X(t)$ | MGF dari $X$ |

> [!WARNING] Gamma / Exponential convention
> Miller menggunakan Gamma shape-scale:
>
> $$
> \Gamma(\alpha,\beta)
> $$
>
> dengan scale $\beta$, dan Exponential scale $\theta$. Jika sumber lain menggunakan rate $\lambda$,
>
> $$
> \lambda=\frac{1}{\theta}.
> $$

---

# CF2 Connection Map

| Miller Chapter 7 section | CF2 connection |
|---|---|
| §7.1 Introduction | [[2.4 Transformasi Variabel Acak Univariat]], [[3.8 Transformasi Variabel Acak Gabungan]] |
| §7.2 Distribution Function Technique | [[2.4 Transformasi Variabel Acak Univariat]] |
| §7.3 Transformation Technique: One Variable | [[2.4 Transformasi Variabel Acak Univariat]] |
| §7.4 Transformation Technique: Several Variables | [[3.8 Transformasi Variabel Acak Gabungan]] |
| §7.5 Moment-Generating Function Technique | [[2.3 Fungsi Pembangkit]], [[2.4 Transformasi Variabel Acak Univariat]] |
| §7.6 Theory in Application | supporting applications for Topik 2–3 |

---

# Quick Reading Review

Setelah membaca condensed chapter ini, Anda seharusnya dapat menjawab:

1. Mengapa one-variable density transformation memerlukan absolute derivative?
2. Mengapa transformed support tetap harus ditentukan walaupun inverse mudah?
3. Apa yang berubah ketika $u(x)$ many-to-one?
4. Bagaimana memperoleh marginal density setelah membentuk transformed joint pair?
5. Jacobian arah mana yang digunakan Miller?
6. Mengapa independence penting dalam MGF multiplication?
7. Mengapa sum dari independent Poisson variables tetap Poisson?
8. Mengapa sum dari iid Exponential variables menjadi Gamma?
9. Mengapa $X^2$ tidak dapat langsung ditangani dengan Miller's one-to-one theorem ketika support $X$ adalah seluruh real line?
10. Kapan CDF method lebih preferable daripada Jacobian route?

---

# Compression Notes

Dipertahankan secara detail:

- tiga transformation techniques dalam chapter;
- one-to-one vs many-to-one distinction;
- discrete dan continuous transformation mechanics;
- logika derivative/absolute value;
- probability integral transformation;
- $X^2$ dari Standard Normal menjadi $\chi_1^2$;
- several-variable transformation;
- inverse Jacobian theorem;
- transformed-region logic;
- Poisson-sum dan Exponential-sum results;
- MGF product theorem dan independence requirement;
- applied waiting-time connection.

Dikompres:

- exercises berulang dengan transformation template yang sama;
- algebra panjang setelah inverse/Jacobian mechanism sudah jelas;
- auxiliary applications dengan mathematical method yang sama;
- historical/software remarks.

Tidak ada materi di luar Miller Chapter 7 yang digunakan untuk mengganti mathematical development chapter ini.

---

# Source Traceability

| Material | Miller Chapter 7 source |
|---|---|
| Chapter purpose and three techniques | §7.1 Introduction |
| CDF method $G(y)=P(Y\le y)$, $g=G'$ | §7.2 |
| $Y=X^3$ example | Example 1 |
| $Y=|X|$, Standard Normal folded density | Example 2 |
| Sum $X_1+X_2$ via triangular CDF region | Example 3 |
| Discrete one-to-one transformation | Example 4 |
| Discrete many-to-one $Z=(X-2)^2$ | Example 5 |
| One-variable transformation theorem | Theorem 1 |
| $Y=\sqrt{X}$ | Example 6 |
| Probability integral transformation | Example 8 |
| $X^2\sim\chi_1^2$ for Standard Normal $X$ | Example 9 |
| Several-variable partial transformation | §7.4 |
| Sum of two independent Poisson variables | Example 10 |
| Ratio $X_1/(X_1+X_2)$ | Example 11 |
| General 2D Jacobian theorem | Theorem 2 |
| Sum-ratio full Jacobian transformation | Example 12 |
| MGF product theorem | Theorem 3 |
| Sum of independent Poisson variables | Example 15 |
| Sum of iid Exponential variables is Gamma | Example 16 |
| Bernoulli-sum interpretation of Binomial | discussion after Example 16 |
| Engineering, transformation-to-normality, waiting-time applications | §7.6, Examples 17–19 |

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 7 mengajarkan bahwa mencari law dari transformed random variable pada dasarnya adalah problem mempertahankan probability di bawah suatu mapping: CDF menangani event geometry, Jacobian menangani change of variables, dan MGF memanfaatkan independence untuk mengidentifikasi distribution dari sums.**
