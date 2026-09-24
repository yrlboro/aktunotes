---
type: "condensed-book"
exam: "CF2"
book: "Introduction to Mathematical Statistics, 8th Edition"
author: "Robert V. Hogg, Joseph W. McKean, Allen T. Craig"
chapter: "4"
chapter_title: "Some Elementary Statistical Inferences"
cf2_topics: ["3.8"]
cf2_relevance: "Selective"
source_scope: "Entire Chapter 4 reviewed; official CF2 mapping uses §4.4. Other sections are retained only as brief textbook context and marked beyond CF2."
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggMcKeanCraig, OrderStatistics, Quantiles, Sampling, Inference]
date_created: "2026-08-29"
status: "study-note"
---
# Hogg, McKean & Craig — Chapter 4: Some Elementary Statistical Inferences

> [!ABSTRACT] Chapter in One View
> Chapter 4 merupakan transisi luas pertama textbook dari probability distributions menuju **statistical inference**. Bab ini memperkenalkan random sampling, statistics, point estimation, confidence intervals, order statistics dan quantiles, hypothesis testing, chi-square tests, Monte Carlo, bootstrap methods, serta tolerance limits. Namun, pemetaan resmi CF2 untuk Hogg–McKean–Craig hanya menggunakan **§4.4 (Order Statistics)**. Karena itu condensed note ini mempertahankan narrative context chapter, tetapi memberikan detail tinggi hanya pada **order statistics, marginal/joint order-statistic distributions, range, sample median, quantiles, q–q plots, dan distribution-free confidence intervals untuk quantiles**. Bagian lain diringkas dan ditandai eksplisit sebagai `[BEYOND CF2]` agar tidak tercampur dengan scope ujian.

---

# 1. Chapter Map & Scope Boundary

| Section | Topic | CF2 Treatment |
|---|---|---|
| 4.1 | Sampling and Statistics | `[BEYOND CF2 in this source mapping]` konteks singkat |
| 4.2 | Confidence Intervals | `[BEYOND CF2 in this source mapping]` konteks singkat |
| 4.3 | Confidence Intervals for Parameters of Discrete Distributions | `[BEYOND CF2]` |
| 4.4 | Order Statistics | `[CORE CF2]` |
| 4.5 | Introduction to Hypothesis Testing | `[BEYOND CF2]` |
| 4.6 | Additional Comments About Statistical Tests / p-values | `[BEYOND CF2]` |
| 4.7 | Chi-square Tests | `[BEYOND CF2]` |
| 4.8 | Monte Carlo | `[BEYOND CF2]` |
| 4.9 | Bootstrap Procedures | `[BEYOND CF2]` |
| 4.10 | Tolerance Limits | `[BEYOND CF2]` |

> [!IMPORTANT] Source Boundary
> Confidence intervals dan hypothesis testing **tetap termasuk CF2 secara keseluruhan**, tetapi official syllabus menunjuk chapter/source lain untuk learning outcomes tersebut. Karena itu note ini tidak memperlakukan Hogg–McKean–Craig Chapter 4 sebagai primary CF2 authority untuk topik tersebut. Assignment resmi dari Chapter 4 di sini adalah **§4.4 Order Statistics**, terutama terhubung dengan [[3.8 Transformasi Variabel Acak Gabungan]] dan reasoning mengenai distribution of functions.

---

# 2. Section 4.1 — Sampling and Statistics

`[BEYOND CF2 in this source mapping]`

Chapter dimulai dengan mendefinisikan random sample

$$
X_1,\ldots,X_n
$$

dari distribution $f(x;\theta)$, kemudian membedakan **parameters** dan **statistics**. Statistic adalah function dari sample yang tidak bergantung pada unknown parameters. Section ini memperkenalkan point estimators, contoh maximum likelihood, empirical/histogram estimates dari PMF/PDF, dan penggunaan sample secara deskriptif.

Materi ini tetap berguna sebagai konteks untuk §4.4 karena order statistics sendiri merupakan statistics yang dibentuk dari random sample.

---

# 3. Section 4.2 — Confidence Intervals

`[BEYOND CF2 in this source mapping]`

Textbook memperkenalkan confidence coefficients, pivots, exact Normal-based intervals, $t$-interval ketika variance unknown, serta intervals untuk differences in means/proportions. Section ini menggunakan sampling distributions yang sudah dibangun di Chapter 3.

Untuk persiapan CF2, confidence intervals sebaiknya dipelajari dari inferential sources yang secara resmi ditugaskan dalam silabus, bukan dari section ini sebagai primary source.

---

# 4. Section 4.3 — Confidence Intervals for Discrete-Distribution Parameters

`[BEYOND CF2]`

Section ini membangun interval estimation untuk parameter dari discrete models, termasuk exact dan asymptotic constructions. Secara narrative ia melanjutkan tema inference, tetapi bukan bagian dari official Chapter 4 assignment untuk CF2.

---

# 5. Section 4.4 — Order Statistics

`[CORE CF2]`

## 5.1 Definition

Misalkan

$$
X_1,\ldots,X_n
$$

merupakan random sample dari continuous distribution. Urutkan sample dari nilai terkecil ke terbesar:

$$
Y_1<Y_2<\cdots<Y_n.
$$

Random variables

$$
Y_1,\ldots,Y_n
$$

disebut **order statistics**.

Interpretasi:

$$
Y_1
=
\min(X_1,\ldots,X_n),
$$

$$
Y_n
=
\max(X_1,\ldots,X_n).
$$

Untuk continuous distributions, ties mempunyai probability zero, sehingga strict ordering bersifat natural.

---

# 6. Joint Distribution of All Order Statistics

Misalkan common population PDF adalah

$$
f(x),
$$

dengan support

$$
a<x<b.
$$

Sebelum diurutkan, iid sample mempunyai joint density

$$
\prod_{i=1}^n f(x_i).
$$

Untuk suatu ordered realization

$$
y_1<y_2<\cdots<y_n,
$$

terdapat

$$
n!
$$

permutations dari original sample values yang menghasilkan ordered vector yang sama.

Karena itu joint PDF dari seluruh order statistics adalah

$$
g(y_1,\ldots,y_n)
=
n!
\prod_{i=1}^n f(y_i),
$$

untuk

$$
a<y_1<y_2<\cdots<y_n<b,
$$

dan zero di luar region tersebut.

> [!IMPORTANT] Why $n!$?
> Ordering transformation menggabungkan $n!$ permutation regions menjadi satu ordered region. Karena iid joint density symmetric terhadap permutation, probability contribution dari setiap region sama.

---

# 7. Marginal Distribution of the $k$-th Order Statistic

Marginal PDF dari $Y_k$ adalah

$$
g_k(y)
=
\frac{n!}
{(k-1)!(n-k)!}
[F(y)]^{k-1}
[1-F(y)]^{n-k}
f(y),
$$

untuk

$$
a<y<b.
$$

## 7.1 Why this form makes sense

Agar $Y_k$ berada dekat $y$:

- tepat $k-1$ observations harus berada di bawah $y$;
- satu observation berada dalam small interval di sekitar $y$;
- tepat $n-k$ observations berada di atas $y$.

Kontribusi probability-nya kira-kira:

$$
[F(y)]^{k-1},
$$

$$
f(y)\,dy,
$$

dan

$$
[1-F(y)]^{n-k}.
$$

Combinatorial coefficient menghitung assignment observations ke tiga kelompok tersebut.

Derivasi ini sangat reusable karena memberi intuisi di balik formula $k$-th order statistic.

---

## 7.2 Minimum and maximum as special cases

### Minimum $Y_1$

$$
g_1(y)
=
n[1-F(y)]^{n-1}f(y).
$$

Equivalent CDF derivation:

$$
P(Y_1>y)
=
P(X_1>y,\ldots,X_n>y)
=
[1-F(y)]^n.
$$

Maka

$$
F_{Y_1}(y)
=
1-[1-F(y)]^n.
$$

### Maximum $Y_n$

$$
F_{Y_n}(y)
=
P(X_1\le y,\ldots,X_n\le y)
=
[F(y)]^n,
$$

sehingga

$$
g_n(y)
=
n[F(y)]^{n-1}f(y).
$$

> [!TIP] Extremes Shortcut
> Untuk minimum/maximum, pendekatan CDF/complement biasanya lebih cepat daripada langsung memakai general order-statistic density.

---

# 8. [TEXTBOOK EXAMPLE] Third Order Statistic

Jika $n=4$ dan parent density adalah

$$
f(x)=2x,
\qquad
0<x<1,
$$

maka

$$
F(x)=x^2.
$$

Untuk $Y_3$,

$$
g_3(y)
=
\frac{4!}{2!1!}
[F(y)]^2
[1-F(y)]
f(y).
$$

Dengan substitusi $F(y)=y^2$ dan $f(y)=2y$,

$$
g_3(y)
=
24y^5(1-y^2),
\qquad
0<y<1.
$$

Probability

$$
P\left(
Y_3>\frac{1}{2}
\right)
$$

diperoleh dengan mengintegrasikan density ini pada interval $(1/2,1)$.

Pelajaran utamanya bukan numerical answer, tetapi pola substitusi:

$$
F(y)
\rightarrow
[F(y)]^{k-1}
[1-F(y)]^{n-k}
f(y).
$$

---

# 9. Joint Distribution of Two Order Statistics

Untuk

$$
Y_i<Y_j,
\qquad
i<j,
$$

joint PDF adalah

$$
g_{ij}(y_i,y_j)
=
\frac{n!}
{(i-1)!(j-i-1)!(n-j)!}
[F(y_i)]^{i-1}
[F(y_j)-F(y_i)]^{j-i-1}
[1-F(y_j)]^{n-j}
f(y_i)f(y_j),
$$

untuk

$$
a<y_i<y_j<b.
$$

## 9.1 Multinomial interpretation

Partition sample menjadi lima bagian:

1. $i-1$ values di bawah $y_i$;
2. satu value dekat $y_i$;
3. $j-i-1$ values di antara $y_i$ dan $y_j$;
4. satu value dekat $y_j$;
5. $n-j$ values di atas $y_j$.

Probabilities-nya kira-kira:

$$
F(y_i),
$$

$$
f(y_i)\Delta_i,
$$

$$
F(y_j)-F(y_i),
$$

$$
f(y_j)\Delta_j,
$$

dan

$$
1-F(y_j).
$$

Multinomial coefficient menghasilkan normalization factor.

Heuristic ini sering lebih mudah diingat dibanding derivasi integral penuh.

---

# 10. Range and Midrange

Dua functions penting dari extreme order statistics adalah:

## Sample range

$$
R=Y_n-Y_1.
$$

## Sample midrange

$$
M
=
\frac{Y_1+Y_n}{2}.
$$

Keduanya merupakan transformations dari joint order statistics, sehingga mechanics transformation Chapter 2 berlaku secara langsung.

---

## 10.1 [TEXTBOOK EXAMPLE] Range from a Uniform sample

Untuk sample size $3$ dari

$$
U(0,1),
$$

joint density dari minimum dan maximum adalah

$$
g_{1,3}(y_1,y_3)
=
6(y_3-y_1),
\qquad
0<y_1<y_3<1.
$$

Definisikan

$$
Z_1=Y_3-Y_1,
\qquad
Z_2=Y_3.
$$

Inverse transformation:

$$
Y_1=Z_2-Z_1,
\qquad
Y_3=Z_2.
$$

Jacobian:

$$
\left|
\frac{\partial(y_1,y_3)}
{\partial(z_1,z_2)}
\right|
=1.
$$

Transformed support:

$$
0<z_1<z_2<1.
$$

Maka

$$
f_{Z_1,Z_2}(z_1,z_2)
=
6z_1.
$$

Marginalize terhadap $z_2$:

$$
f_R(r)
=
\int_r^1 6r\,dz_2
=
6r(1-r),
\qquad
0<r<1.
$$

> [!IMPORTANT] CF2 Connection
> Contoh ini menggabungkan **order statistics → joint PDF → transformation → Jacobian → marginalization**. Inilah jenis reasoning yang langsung berhubungan dengan [[3.8 Transformasi Variabel Acak Gabungan]].

---

# 11. Sample Median

Untuk ordered sample

$$
Y_1<\cdots<Y_n,
$$

sample median adalah

$$
Q_2
=
\begin{cases}
Y_{(n+1)/2}, & n \text{ ganjil},\\[4pt]
\dfrac{Y_{n/2}+Y_{n/2+1}}{2},
& n \text{ genap}.
\end{cases}
$$

Untuk odd $n$, sample median sendiri merupakan order statistic, sehingga PDF-nya langsung mengikuti formula $g_k$.

### [TEXTBOOK EXAMPLE] $n=3$

Jika population median $m$ memenuhi

$$
F(m)=\frac{1}{2},
$$

maka sample median adalah $Y_2$. Textbook menunjukkan bahwa

$$
P(Y_2\le m)
=
\frac{1}{2}.
$$

Jadi **median dari sampling distribution sample median** sama dengan population median pada kasus ini.

---

# 12. Section 4.4.1 — Quantiles

## 12.1 Population quantiles

Untuk continuous CDF $F$, $p$-th quantile didefinisikan sebagai

$$
\xi_p
=
F^{-1}(p),
\qquad
0<p<1.
$$

Artinya,

$$
F(\xi_p)=p.
$$

Contoh:

- $\xi_{0.5}$: median;
- $\xi_{0.25}$: first quartile;
- $\xi_{0.75}$: third quartile.

---

## 12.2 Sample quantile estimation

Estimator natural untuk $\xi_p$ adalah order statistic di sekitar rank

$$
(n+1)p.
$$

Dengan

$$
p_k=\frac{k}{n+1},
$$

$Y_k$ diperlakukan sebagai estimator untuk

$$
\xi_{p_k}.
$$

Ini menghubungkan empirical ordering langsung dengan population CDF probabilities.

---

# 13. Location–Scale Quantiles

Misalkan

$$
X=a+bZ,
\qquad
b>0,
$$

dan $Z$ mempunyai known CDF $F$.

Quantiles memenuhi

$$
\xi_{X,p}
=
a+b\xi_{Z,p}.
$$

Linear relationship inilah yang memotivasi q–q plots.

---

# 14. q–q Plots

Ambil ordered data

$$
y_1<\cdots<y_n.
$$

Untuk

$$
p_k=\frac{k}{n+1},
$$

hitung theoretical quantiles

$$
\xi_{Z,p_k}
=
F^{-1}(p_k).
$$

Kemudian plot

$$
y_k
\quad\text{versus}\quad
\xi_{Z,p_k}.
$$

Jika assumed population kira-kira berasal dari location-scale family yang dibentuk oleh $F$, plot akan approximately linear.

Textbook membandingkan Normal, Laplace, dan Exponential q–q plots dan menekankan bahwa **linearity**, bukan nilai slope/intercept tertentu, merupakan shape diagnostic yang utama.

`[CF2 SUPPORTING CONTEXT]` Graphical diagnostics bukan learning outcome utama CF2 di sini, tetapi q–q construction memperkuat hubungan antara order statistics dan quantiles.

---

# 15. Section 4.4.2 — Distribution-Free Confidence Intervals for Quantiles

Mathematical core bagian ini sangat reusable walaupun interval estimation bukan alasan utama §4.4 muncul dalam Topik 3.

Misalkan

$$
Y_1<\cdots<Y_n
$$

adalah order statistics dari continuous distribution, dan $\xi_p$ memenuhi

$$
F(\xi_p)=p.
$$

Pertimbangkan event

$$
Y_i<\xi_p<Y_j.
$$

Event tersebut terjadi tepat ketika jumlah observations yang lebih kecil dari $\xi_p$ berada di antara $i$ dan $j-1$.

Karena setiap observation secara independent memenuhi

$$
P(X<\xi_p)=p,
$$

maka jumlah observations di bawah $\xi_p$ mempunyai distribution

$$
B\sim\operatorname{Binomial}(n,p).
$$

Karena itu,

$$
P(Y_i<\xi_p<Y_j)
=
\sum_{w=i}^{j-1}
\binom{n}{w}
p^w(1-p)^{n-w}.
$$

Dengan demikian, statement order statistics dapat diubah menjadi Binomial probability.

> [!IMPORTANT] Reusable Bridge
> **order-statistic event $\longleftrightarrow$ count observations di bawah quantile $\longleftrightarrow$ Binomial distribution**

---

## 15.1 Median special case

Untuk

$$
p=\frac{1}{2},
$$

$\xi_{1/2}$ adalah population median.

Karena itu symmetric choices dari order statistics dapat membentuk distribution-free interval untuk median.

Textbook menggunakan tail probabilities dari

$$
\operatorname{Binomial}\left(n,\frac{1}{2}\right)
$$

untuk memilih lower dan upper ranks.

---

# 16. Order-Statistic Recognition Patterns

| Target | Fast Route |
|---|---|
| Minimum | complement: $P(Y_1>y)=[1-F(y)]^n$ |
| Maximum | $P(Y_n\le y)=[F(y)]^n$ |
| $k$-th order PDF | gunakan standard $g_k(y)$ formula |
| Joint $Y_i,Y_j$ | partition sample menjadi below / between / above |
| Range | joint min–max + transformation |
| Sample median, odd $n$ | $Y_{(n+1)/2}$ |
| Population quantile | $F(\xi_p)=p$ |
| CI/event sekitar quantile | ubah menjadi Binomial count |

---

# 17. Support and Bounds Logic

Untuk seluruh order statistics:

$$
a<y_1<y_2<\cdots<y_n<b.
$$

Untuk dua order statistics:

$$
a<y_i<y_j<b.
$$

Untuk minimum dan maximum:

$$
a<y_1<y_n<b.
$$

Untuk transformed range

$$
r=y_n-y_1,
$$

support harus diturunkan dari original inequalities.

Untuk $U(0,1)$,

$$
0<r<1.
$$

> [!DANGER] Support Trap
> Combinatorial coefficient dan formula dapat benar tetapi answer tetap salah jika ordering constraints diabaikan.

---

# 18. Sections 4.5–4.10 — Brief Context Only

## 18.1 Section 4.5 — Hypothesis Testing

`[BEYOND CF2 in this source mapping]`

Memperkenalkan null/alternative hypotheses, critical regions, Type I dan Type II errors, significance level, serta power. Chapter menerapkan konsep tersebut pada one-sample Normal dan discrete examples.

## 18.2 Section 4.6 — Additional Comments / p-value

`[BEYOND CF2 in this source mapping]`

Membahas observed significance level / p-value, one- dan two-sided testing, serta relationship dengan confidence intervals.

## 18.3 Section 4.7 — Chi-square Tests

`[BEYOND CF2]`

Mengembangkan chi-square goodness-of-fit dan related frequency-based tests.

## 18.4 Section 4.8 — Monte Carlo

`[BEYOND CF2]`

Menunjukkan simulation sebagai metode untuk mengaproksimasi probabilities/distributions dan menghasilkan random variates.

## 18.5 Section 4.9 — Bootstrap

`[BEYOND CF2]`

Memperkenalkan resampling dari empirical distribution untuk mengaproksimasi sampling distributions dan uncertainty.

## 18.6 Section 4.10 — Tolerance Limits

`[BEYOND CF2]`

Mengembangkan statistical intervals yang dirancang untuk mencakup proportion tertentu dari population dengan confidence yang dinyatakan.

---

# 19. Chapter Synthesis

Untuk CF2, Chapter 4 dapat diingat melalui satu chain utama:

```text
Random sample
      ↓
urutkan sample
      ↓
order statistics Y1 < ... < Yn
      ↓
joint ordered density = n! × iid density
      ↓
marginal kth-order density
      ↓
min / max / median / range
      ↓
quantiles
      ↓
order-statistic events ↔ Binomial counts
```

Chain kedua menghubungkan langsung ke Chapter 2:

```text
(Y1, Yn)
      ↓
definisikan function seperti R = Yn − Y1
      ↓
derive inverse transformation
      ↓
map support
      ↓
Jacobian
      ↓
marginalize
      ↓
distribution of range
```

Jadi §4.4 paling tepat dipandang bukan sebagai isolated inferential topic, tetapi sebagai aplikasi lanjutan dari **joint distributions + counting + transformations + support geometry**.

---

# 20. Formula Sheet from §4.4

## Joint density of all order statistics

$$
g(y_1,\ldots,y_n)
=
n!
\prod_{i=1}^n f(y_i),
$$

untuk

$$
y_1<\cdots<y_n.
$$

## $k$-th order statistic

$$
g_k(y)
=
\frac{n!}{(k-1)!(n-k)!}
[F(y)]^{k-1}
[1-F(y)]^{n-k}
f(y).
$$

## Minimum

$$
F_{Y_1}(y)
=
1-[1-F(y)]^n.
$$

## Maximum

$$
F_{Y_n}(y)
=
[F(y)]^n.
$$

## Joint $Y_i,Y_j$

$$
g_{ij}(u,v)
=
\frac{n!}
{(i-1)!(j-i-1)!(n-j)!}
[F(u)]^{i-1}
[F(v)-F(u)]^{j-i-1}
[1-F(v)]^{n-j}
f(u)f(v),
$$

untuk

$$
u<v.
$$

## Quantile

$$
F(\xi_p)=p.
$$

## Quantile interval event

$$
P(Y_i<\xi_p<Y_j)
=
\sum_{w=i}^{j-1}
\binom{n}{w}
p^w(1-p)^{n-w}.
$$

---

# 21. Compression Notes

### Preserved in detail

- definition dan joint distribution dari order statistics;
- derivation logic untuk $k$-th order statistic;
- min/max shortcuts;
- joint two-order-statistic density;
- range transformation;
- sample median;
- quantiles;
- q–q relationship;
- Binomial bridge untuk quantile intervals;
- support constraints.

### Compressed aggressively

- §§4.1–4.3 dan §§4.5–4.10 karena bukan official Chapter 4 CF2 assignment;
- software commands;
- data examples;
- repeated exercises;
- detailed inferential procedures yang official source-nya berada di tempat lain.

---

# 22. Source Traceability

| Material | Source |
|---|---|
| Random-sample/statistic context | Hogg, McKean & Craig §4.1 |
| Confidence-interval context | §§4.2–4.3 |
| Definition of order statistics | §4.4 |
| Joint ordered sample density | §4.4 |
| $k$-th order-statistic PDF | Eq. (4.4.2) |
| Joint PDF of $Y_i,Y_j$ | Eq. (4.4.3) |
| Multinomial heuristic untuk joint order-statistic density | Remark 4.4.1 |
| Sample range dan midrange | §4.4 |
| Uniform $n=3$ range transformation example | Example 4.4.3 |
| Sample median | Eq. (4.4.4) |
| Population quantiles dan q–q plots | §4.4.1 |
| Distribution-free interval logic untuk quantiles | §4.4.2, Eq. (4.4.8) |
| Median interval construction | §4.4.2, Eqs. (4.4.9)–(4.4.10) |
| Hypothesis-testing context | §§4.5–4.7 |
| Monte Carlo / bootstrap / tolerance-limit context | §§4.8–4.10 |
| CF2 scope authority | Silabus CF2: Hogg, McKean & Craig §4.4 untuk Topik 3 |

*Ref: Hogg, McKean & Craig, Introduction to Mathematical Statistics, 8th ed., Chapter 4.*
