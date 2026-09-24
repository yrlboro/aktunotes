---
type: "condensed-book"
exam: "CF2"
book: "Introduction to Mathematical Statistics, 8th Edition"
author: "Robert V. Hogg, Joseph W. McKean, Allen T. Craig"
chapter: "1"
chapter_title: "Probability and Distributions"
cf2_topics: ["2.1", "2.2", "2.3", "2.4"]
cf2_relevance: "Mixed"
source_scope: "Chapter 1, with emphasis on CF2-assigned Sections 1.6-1.7 and 1.9; earlier sections retained only as supporting context"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggMcKeanCraig, Probability, RandomVariables]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, McKean & Craig — Chapter 1: Probability and Distributions

> [!ABSTRACT] Chapter in One View
> Chapter 1 membangun transisi dari **random experiment dan probability space** menuju **random variable, distribution, expectation, moments, dan moment-generating function**. Bagian awal memperkenalkan sample space, event, set algebra, dan probability sebagai set function; untuk CF2 bagian ini terutama berfungsi sebagai jembatan konseptual karena probability foundations utama dipetakan ke textbook lain. Fokus resmi Hogg–McKean–Craig untuk CF2 berada pada **Sections 1.6–1.7 dan 1.9**: random variable diskrit, random variable kontinu, transformasi univariat, mathematical expectation, moments, dan MGF. Progression utama chapter adalah: probability measure pada sample space → random variable sebagai fungsi → induced distribution pada garis real → PMF/PDF/CDF → transformasi → expectation dan moments → MGF sebagai representasi ringkas distribusi dan moments. Seluruh mekanik penting bergantung pada **support**, karena support menentukan sum, integral, inverse transformation, dan validitas formula. Chapter juga menekankan bahwa MGF tidak selalu ada, sehingga penggunaannya memerlukan existence condition.

## 1. Why This Chapter Exists

Statistical theory membutuhkan objek yang lebih terstruktur daripada sekadar daftar outcome. Dalam aplikasi, kita biasanya tidak tertarik pada seluruh outcome eksperimen, melainkan pada **besaran numerik** yang dihasilkan oleh outcome tersebut. Karena itu penulis membangun random variable sebagai pemetaan dari sample space menuju bilangan real.

Setelah random variable didefinisikan, probability measure pada sample space menginduksi distribution pada nilai random variable. Dari sini muncul objek yang terus digunakan sepanjang mathematical statistics:

- support;
- PMF/PDF;
- CDF;
- expectation;
- variance dan moments;
- transformasi random variable;
- MGF.

Untuk CF2, inti chapter ini adalah kemampuan berpindah secara benar dari **probability structure → random variable → distribution → calculation**.

---

## 2. Chapter Map

- **1.1 Introduction** — motivasi random experiment dan probability model.
- **1.2 Sets** — event algebra, unions/intersections, complements, De Morgan.
- **1.3 Probability Set Function** — formal probability structure.
- **1.4 Conditional Probability and Independence** — conditional structure dan independence.
- **1.5 Random Variables** — random variable sebagai measurable real-valued function.
- **1.6 Discrete Random Variables** — discrete support, PMF, CDF, transformasi diskrit.
- **1.7 Continuous Random Variables** — PDF/CDF, probability integral, transformasi kontinu.
- **1.8 Mixed Distributions / related development** — supporting transition; tidak menjadi fokus CF2 mapping.
- **1.9 Expectations** — expectation, moments, variance, MGF, existence.

| Textbook Section | CF2 Relevance | Connected Syllabus Note |
|---|---|---|
| 1.1–1.5 | Supporting | [[1.1 Eksperimen Acak dan Ruang Sampel]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| 1.6 | Core | [[2.1 Variabel Acak Diskrit]], [[2.4 Transformasi Variabel Acak Univariat]] |
| 1.7 | Core | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
| 1.8 | Supporting / limited | — |
| 1.9 | Core | [[2.3 Fungsi Pembangkit]], [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]] |

---

## 3. Supporting Foundation: From Experiment to Random Variable

### 3.1 Random experiment and sample space

Penulis memulai dari eksperimen yang dapat diulang di bawah kondisi yang pada dasarnya sama tetapi outcome-nya tidak diketahui dengan pasti sebelumnya. Kumpulan seluruh outcome disebut **sample space**, ditulis $C$.

Contoh paling sederhana:


$$
C=\{H,T\}
$$


untuk satu lemparan koin.

Event adalah subset dari $C$. Probability kemudian diberikan sebagai set function yang memenuhi axioms tertentu.

`[CF2 SUPPORTING CONTEXT]` Bagian ini penting karena random variable pada section berikutnya bukan probability model baru yang berdiri sendiri; ia adalah fungsi yang bekerja **di atas** probability space yang sudah ada.

### 3.2 Random variable

Random variable $X$ memetakan setiap outcome $c\in C$ ke satu bilangan real:


$$
X:C\to \mathbb{R}.
$$


Nilai random variable ditulis dengan lowercase $x$. Distribution dari $X$ menjawab bagaimana probability dari event di $C$ dipindahkan ke subset garis real.

> [!WARNING] Important Distinction
> **Outcome $\neq$ random variable $\neq$ observed value.**
>
> Outcome adalah elemen sample space.  
> $X$ adalah fungsi.  
> $x$ adalah nilai real yang dihasilkan oleh $X$.

---

# 4. Section 1.6 — Discrete Random Variables

`[CORE CF2]`

## 4.1 Definition and support

Random variable disebut **discrete** jika space/support-nya finite atau countable.

Misalkan $X$ adalah jumlah lemparan yang diperlukan sampai head pertama pada sequence fair coin flips. Maka


$$
S_X=\{1,2,3,\ldots\}.
$$


Untuk $x=1,2,\ldots$,


$$
P(X=x)
=
\left(\frac{1}{2}\right)^{x-1}\left(\frac{1}{2}\right)
=
\left(\frac{1}{2}\right)^x.
$$


Ini memperlihatkan pola fundamental:

```text
define stochastic mechanism
        ↓
derive support
        ↓
identify event {X=x}
        ↓
calculate its probability
        ↓
obtain PMF
```

## 4.2 Probability mass function

Untuk discrete $X$, **probability mass function** adalah


$$
p_X(x)=P(X=x).
$$


Syarat dasar:


$$
p_X(x)\ge 0,
\qquad
\sum_{x\in S_X}p_X(x)=1.
$$


Jika $A\subseteq S_X$,


$$
P(X\in A)=\sum_{x\in A}p_X(x).
$$


> [!IMPORTANT] Support First
> Formula PMF tanpa support belum lengkap. Semua summation harus dilakukan hanya pada nilai yang benar-benar dapat diambil $X$.

## 4.3 Cumulative distribution function

CDF didefinisikan untuk semua real $x$:


$$
F_X(x)=P(X\le x).
$$


Untuk discrete $X$,


$$
F_X(x)=\sum_{t\le x}p_X(t).
$$


CDF berbentuk step function. Setiap jump pada $x$ memiliki ukuran


$$
P(X=x)=F_X(x)-F_X(x^-).
$$


Interpretasinya: PMF menyimpan probability sebagai mass pada titik; CDF mengakumulasikan mass dari kiri.

## 4.4 Discrete transformations

Jika


$$
Y=u(X),
$$


maka support $Y$ diperoleh dengan memetakan support $X$:


$$
S_Y=\{u(x):x\in S_X\}.
$$


Untuk tiap $y$,


$$
P(Y=y)
=
\sum_{\{x:u(x)=y\}}P(X=x).
$$


Tidak ada derivative atau Jacobian pada discrete transformation. Hal penting justru adalah mengenali kemungkinan **many-to-one mapping**.

Contoh struktur:

Jika $Y=X^2$ dan $X$ memiliki support $\{-2,-1,0,1,2\}$, maka probability pada $Y=1$ harus menggabungkan dua branches:


$$
P(Y=1)=P(X=-1)+P(X=1).
$$


> [!WARNING] Transformation Trap
> Untuk discrete random variable, jangan menggunakan
> 
$$
> f_Y(y)=f_X(x)\left|\frac{dx}{dy}\right|.
>
$$

> Formula itu adalah change-of-variable untuk continuous density.

---

# 5. Section 1.7 — Continuous Random Variables

`[CORE CF2]`

## 5.1 Continuous distributions and PDF

Pada continuous random variable, probability tidak berada sebagai mass di titik. Distribution dinyatakan melalui density $f_X(x)$, dengan


$$
f_X(x)\ge 0,
\qquad
\int_{-\infty}^{\infty}f_X(x)\,dx=1.
$$


Probability interval diperoleh sebagai area:


$$
P(a<X\le b)=\int_a^b f_X(x)\,dx.
$$


Karena single point memiliki probability zero,


$$
P(X=x)=0,
$$


sehingga pilihan strict/non-strict endpoint tidak mengubah probability interval.

> [!WARNING] Important Distinction
> **Density value bukan probability.**
>
> $f_X(x)$ dapat lebih besar dari 1. Yang harus berada di $[0,1]$ adalah probability yang diperoleh setelah integrasi.

## 5.2 CDF–PDF relationship

CDF:


$$
F_X(x)=P(X\le x)
=
\int_{-\infty}^{x}f_X(t)\,dt.
$$


Ketika differentiable,


$$
f_X(x)=F_X'(x).
$$


Untuk interval,


$$
P(a<X\le b)=F_X(b)-F_X(a).
$$


Mental model:

```text
PDF = local density
CDF = accumulated area
derivative(CDF) = PDF
integral(PDF) = probability
```

## 5.3 Support determines bounds

Sebelum integrasi, event harus di-intersect dengan support.

Jika support $0<x<4$, maka


$$
P(-2<X<1.5)
=
\int_0^{1.5}f_X(x)\,dx.
$$


Bukan $\int_{-2}^{1.5}$, kecuali density secara eksplisit ditulis zero di luar support.

Ini adalah recurring principle yang akan kembali pada joint distributions di Chapter 2.

---

## 5.4 CDF technique for transformations

Untuk


$$
Y=u(X),
$$


salah satu metode paling robust adalah CDF:


$$
F_Y(y)
=
P(Y\le y)
=
P(u(X)\le y).
$$


Kemudian event tersebut diubah kembali menjadi condition pada $X$. Setelah $F_Y$ diperoleh,


$$
f_Y(y)=\frac{d}{dy}F_Y(y)
$$


pada region differentiable.

Metode CDF sangat berguna jika:

- transformation monotone tetapi lebih mudah dipahami sebagai inequality;
- transformation tidak one-to-one;
- support hasil transformasi piecewise.

### Example structure: $Y=X^2$

Jika $X$ memiliki support simetris dan $Y=X^2$, event


$$
Y\le y
$$


berarti


$$
-\sqrt y\le X\le \sqrt y.
$$


Karena dua branches berkontribusi, CDF technique menghindari kesalahan one-to-one assumption.

---

## 5.5 One-to-one continuous transformation theorem

Jika $Y=u(X)$ adalah one-to-one pada support $X$, dan inverse


$$
x=w(y)=u^{-1}(y)
$$


ada, maka density hasil transformasi adalah


$$
f_Y(y)
=
f_X(w(y))
\left|
\frac{dw(y)}{dy}
\right|,
$$


untuk $y$ pada transformed support.

Langkah textbook yang perlu dipertahankan:

1. Tentukan support $S_X$.
2. Tentukan mapping $y=u(x)$.
3. Derive transformed support $S_Y$.
4. Cari inverse $x=w(y)$.
5. Hitung absolute derivative.
6. Substitute ke density.
7. Set density zero di luar $S_Y$.
8. Verifikasi normalization bila perlu.

### [TEXTBOOK EXAMPLE] Log transformation

Source menggunakan contoh dengan


$$
f_X(x)=4x^3,\qquad 0<x<1,
$$


dan


$$
Y=-\log X.
$$


Inverse:


$$
x=e^{-y},
\qquad
\left|\frac{dx}{dy}\right|=e^{-y}.
$$


Karena $0<x<1$, maka $y>0$. Density:


$$
f_Y(y)
=
4(e^{-y})^3 e^{-y}
=
4e^{-4y},
\qquad y>0.
$$


Lesson utamanya bukan sekadar bentuk akhir, tetapi urutan:


$$
\text{support}
\to
\text{inverse}
\to
\text{absolute derivative}
\to
\text{new density}.
$$


---

# 6. Section 1.9 — Mathematical Expectation and Moments

`[CORE CF2]`

## 6.1 Expectation as probability-weighted averaging

Untuk discrete $X$,


$$
E[g(X)]
=
\sum_x g(x)p_X(x),
$$


jika sum absolut yang relevan converge.

Untuk continuous $X$,


$$
E[g(X)]
=
\int_{-\infty}^{\infty}g(x)f_X(x)\,dx,
$$


jika integral expectation ada.

Mean adalah special case $g(x)=x$:


$$
\mu=E[X].
$$


Poin penting: untuk menghitung $E[g(X)]$, tidak perlu terlebih dahulu mencari distribution $Y=g(X)$, kecuali distribution tersebut memang diminta.

> [!WARNING] Important Distinction
> Secara umum,
> 
$$
> E[g(X)]\neq g(E[X]).
>
$$


## 6.2 Moments

Raw moment ke-$k$:


$$
\mu_k'=E[X^k].
$$


Central moment ke-$k$:


$$
\mu_k=E[(X-\mu)^k].
$$


Variance adalah central moment kedua:


$$
\sigma^2
=
E[(X-\mu)^2].
$$


Equivalent identity:


$$
\operatorname{Var}(X)
=
E[X^2]-E[X]^2.
$$


Identity ini sangat penting secara computational karena sering menghindari expansion panjang.

## 6.3 Linear transformations

Dari linearity of expectation:


$$
E[aX+b]
=
aE[X]+b.
$$


Variance:


$$
\operatorname{Var}(aX+b)
=
a^2\operatorname{Var}(X).
$$


Constant shift tidak mengubah variance.

---

# 7. Moment-Generating Function

## 7.1 Definition

MGF didefinisikan oleh


$$
M_X(t)=E[e^{tX}],
$$


untuk nilai $t$ pada neighborhood dari $0$ tempat expectation tersebut finite.

Discrete:


$$
M_X(t)=\sum_x e^{tx}p_X(x).
$$


Continuous:


$$
M_X(t)=\int_{-\infty}^{\infty}e^{tx}f_X(x)\,dx.
$$


`[ASSUMPTION]` MGF tidak otomatis ada untuk semua distributions.

## 7.2 Moments from derivatives

Jika differentiation dan expectation dapat dipertukarkan di sekitar $t=0$,


$$
M_X^{(k)}(0)
=
E[X^k].
$$


Secara khusus,


$$
M_X'(0)=E[X],
\qquad
M_X''(0)=E[X^2].
$$


Maka


$$
\operatorname{Var}(X)
=
M_X''(0)-[M_X'(0)]^2.
$$


## 7.3 Maclaurin interpretation

MGF dapat ditulis secara formal sebagai


$$
M_X(t)
=
1
+
E[X]\frac{t}{1!}
+
E[X^2]\frac{t^2}{2!}
+\cdots.
$$


Karena itu coefficient dari $t^k/k!$ merepresentasikan raw moment ke-$k$.

### [TEXTBOOK EXAMPLE] Standard Normal MGF

Source memberikan


$$
M(t)=e^{t^2/2}.
$$


Maclaurin expansion menunjukkan hanya pangkat genap yang muncul, sehingga:


$$
E[X^{2k-1}]=0,
$$


dan


$$
E[X^{2k}]
=
(2k-1)(2k-3)\cdots 3\cdot1
=
\frac{(2k)!}{2^k k!}.
$$


Ini memperlihatkan cara MGF merangkum seluruh sequence moments.

## 7.4 MGF under linear transformation

Untuk


$$
Y=aX+b,
$$


$$
M_Y(t)
=
E[e^{t(aX+b)}]
=
e^{bt}M_X(at).
$$


Relationship ini menjadi reusable tool untuk transformation dan later distribution identification.

## 7.5 Existence limitation

Source menekankan bahwa beberapa distributions tidak memiliki MGF.

Contoh penting: Cauchy distribution. Integral


$$
E[e^{tX}]
$$


diverge untuk setiap nonzero $t$ di sekitar 0, sehingga MGF tidak ada.

> [!WARNING] Important Distinction
> **Semua moments finite** dan **MGF exists** bukan statement yang boleh diasumsikan tanpa syarat.
>
> MGF memerlukan finiteness pada open interval sekitar $t=0$.

Source menyebut characteristic function sebagai object yang selalu ada, tetapi itu berada di luar kebutuhan inti CF2 chapter ini.

---

# 8. Distribution / Model Snapshot

| Object | Definition / Mechanic | Support Role |
|---|---|---|
| Discrete PMF | $p_X(x)=P(X=x)$ | menentukan nilai yang disum |
| Continuous PDF | probability melalui integral density | menentukan bounds |
| CDF | $F_X(x)=P(X\le x)$ | valid untuk discrete maupun continuous |
| Expectation | $E[g(X)]$ | sum/integral over support |
| Variance | $E[X^2]-E[X]^2$ | requires finite second moment |
| MGF | $E[e^{tX}]$ | must exist near $t=0$ |
| Transformation | map support first | inverse/branches depend on support |

---

# 9. Key Relationships

## 9.1 PMF/PDF to CDF

Discrete:


$$
F_X(x)=\sum_{t\le x}p_X(t).
$$


Continuous:


$$
F_X(x)=\int_{-\infty}^{x}f_X(t)\,dt.
$$


## 9.2 CDF to probability


$$
P(a<X\le b)=F_X(b)-F_X(a).
$$


## 9.3 Expectation and variance


$$
E[X]=\mu,
\qquad
\operatorname{Var}(X)=E[X^2]-\mu^2.
$$


## 9.4 MGF and moments


$$
M_X^{(k)}(0)=E[X^k].
$$


## 9.5 Linear transformation


$$
E[aX+b]=a\mu+b,
$$


$$
\operatorname{Var}(aX+b)=a^2\sigma^2,
$$


$$
M_{aX+b}(t)=e^{bt}M_X(at).
$$


---

# 10. Chapter Synthesis

Chapter 1 membangun satu chain of reasoning yang harus tetap utuh:

```text
Random experiment
      ↓
Sample space + probability measure
      ↓
Random variable X
      ↓
Support of X
      ↓
Distribution of X
      ↓
PMF / PDF / CDF
      ↓
Probability calculations
      ↓
Transformation Y = g(X)
      ↓
Expectation and moments
      ↓
MGF as compact moment representation
```

Untuk CF2, tiga kebiasaan paling penting dari chapter ini adalah:

1. **Selalu tentukan support sebelum calculation.**
2. **Bedakan mass, density, dan cumulative probability.**
3. **Gunakan transformation method yang sesuai dengan mapping: discrete summation, CDF technique, atau continuous one-to-one change of variable.**

---

# 11. Compression Notes

Bagian yang diringkas agresif:

- historical/motivational narrative pada Sections 1.1–1.4;
- detailed set-theory formalism yang bukan fokus mapping CF2 Hogg–McKean–Craig;
- repeated exercises;
- advanced measure-theoretic remarks;
- characteristic-function extension;
- examples yang mengulang mekanik sama.

Bagian yang dipertahankan dengan detail tinggi:

- discrete/continuous random-variable structure;
- support;
- PMF/PDF/CDF;
- univariate transformations;
- expectation and moments;
- MGF and its existence caveat.

---

# 12. Source Traceability

| Materi | Source |
|---|---|
| Chapter title and overall structure | Hogg, McKean & Craig, Chapter 1 |
| Discrete random variable definition and geometric waiting-time example | §1.6 |
| PMF / discrete support / CDF mechanics | §1.6 |
| Continuous PDF/CDF and transformation mechanics | §1.7 |
| One-to-one transformation theorem | Theorem 1.7.1 |
| $f_X(x)=4x^3$, $Y=-\log X$ example | §1.7 |
| Expectation and moments | §1.9 |
| MGF definition and derivatives yielding moments | §1.9 |
| Standard Normal MGF Maclaurin moment derivation | Example 1.9.7 |
| Cauchy distribution MGF nonexistence | §1.9 |
| CF2 scope mapping | Silabus CF2: Hogg, McKean & Craig §§1.6–1.7, 1.9 |

*Ref: Hogg, McKean & Craig, Introduction to Mathematical Statistics, 8th ed., Chapter 1; official CF2 Topik 2 scope.*
