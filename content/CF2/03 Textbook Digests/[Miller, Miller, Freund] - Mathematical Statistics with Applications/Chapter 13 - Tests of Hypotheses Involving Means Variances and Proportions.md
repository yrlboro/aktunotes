---
title: "Miller Chapter 13 — Tests of Hypotheses Involving Means, Variances, and Proportions: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 13
exam: CF2
scope: "Topik 4 — Inferensi Statistik; Miller §§13.1–13.6"
tags: [CF2, Miller, HypothesisTesting, ZTest, TTest, ChiSquareTest, FTest, ProportionTest, PValue]
status: condensed-textbook-note
language: id
---

# Miller Chapter 13 — Tests of Hypotheses Involving Means, Variances, and Proportions

> [!ABSTRACT] Tujuan chapter
> Chapter 13 mengubah general testing framework dari Chapter 12 menjadi standard testing procedures untuk applications. Core structure:
>
> $$
> \text{parameter claim}
> \rightarrow
> H_0/H_1
> \rightarrow
> \text{test statistic}
> \rightarrow
> \text{null distribution}
> \rightarrow
> \text{critical region atau P-value}
> \rightarrow
> \text{decision}.
> $$
>
> Berdasarkan official CF2 Miller mapping, **Sections 13.1–13.6 adalah core**:
>
> - significance tests dan P-values;
> - tests concerning one mean;
> - differences between means;
> - variances;
> - one proportion;
> - differences among $k$ proportions.
>
> Sections 13.7–13.9 berada di luar specified Miller scope dan hanya disignpost.

---

# 1. Introduction

`[CORE CF2]`

Miller mendefinisikan **test of significance** sebagai statistical test yang specifies:

1. simple null hypothesis;
2. size dari critical region:
   $$
   \alpha;
   $$
3. composite alternative hypothesis.

Dalam context ini, $\alpha$ adalah **level of significance**.

---

## 1.1 Two-tailed and one-tailed tests

Misalkan:

$$
H_0:\theta=\theta_0.
$$

Jika:

$$
H_1:\theta\ne\theta_0,
$$

evidence against $H_0$ dapat berasal dari values yang terlalu rendah maupun terlalu tinggi.

Maka test adalah **two-tailed**.

Jika:

$$
H_1:\theta>\theta_0,
$$

critical region berada di right tail.

Jika:

$$
H_1:\theta<\theta_0,
$$

critical region berada di left tail.

> [!IMPORTANT] Direction berasal dari $H_1$
> Alternative hypothesis menentukan apakah test:
>
> - left-tailed;
> - right-tailed;
> - two-tailed.

---

## 1.2 Mean example with known variance

Untuk Normal population dengan known $\sigma$, testing:

$$
H_0:\mu=\mu_0
$$

menggunakan:

$$
\boxed{
Z
=
\frac{
\bar X-\mu_0
}{
\sigma/\sqrt n
}.
}
$$

### Two-sided

$$
H_1:\mu\ne\mu_0.
$$

Reject jika:

$$
\boxed{
|Z|\ge z_{\alpha/2}.
}
$$

### Right-sided

$$
H_1:\mu>\mu_0.
$$

Reject jika:

$$
\boxed{
Z\ge z_\alpha.
}
$$

### Left-sided

$$
H_1:\mu<\mu_0.
$$

Reject jika:

$$
\boxed{
Z\le-z_\alpha.
}
$$

---

## 1.3 Significance and decision language

Miller menyebut result **statistically significant** ketika test statistic jatuh dalam critical region pada preassigned significance level.

Conclusion:

- **reject $H_0$**; atau
- **do not reject $H_0$**.

Textbook kadang memakai istilah “accept $H_0$” sebagai terminology tradisional, tetapi juga memperingatkan agar failure to reject tidak dianggap sebagai proof bahwa $H_0$ benar.

---

## 1.4 P-values

Miller menyajikan P-value sebagai alternative terhadap direct comparison dengan critical values.

P-value mengukur seberapa extreme observed test statistic di bawah $H_0$, dalam direction(s) yang ditentukan oleh $H_1$.

Decision rule:

$$
\boxed{
\text{reject }H_0
\quad\text{jika}\quad
\text{P-value}\le\alpha.
}
$$

Jika tidak:

$$
\boxed{
\text{do not reject }H_0.
}
$$

Untuk symmetric two-sided Normal test dengan observed $|z|$:

$$
\boxed{
\text{P-value}
=
2P(Z\ge|z_{\text{obs}}|).
}
$$

Miller juga memandang P-value sebagai measure of **strength of evidence**: smaller P-values berarti data semakin incompatible dengan null model.

> [!WARNING] Pilih $\alpha$ terlebih dahulu
> Miller memperingatkan agar tidak memilih $\alpha$ setelah melihat data hanya untuk menghasilkan desired conclusion.

---

# 2. Tests Concerning Means

`[CORE CF2]`

## 2.1 One-sample $Z$ test — known $\sigma$

Untuk:

$$
X_i\sim N(\mu,\sigma^2),
$$

dengan known $\sigma$, test:

$$
H_0:\mu=\mu_0.
$$

Gunakan:

$$
\boxed{
Z
=
\frac{
\bar X-\mu_0
}{
\sigma/\sqrt n
}.
}
$$

Critical regions:

$$
H_1:\mu\ne\mu_0
\quad\Rightarrow\quad
|Z|\ge z_{\alpha/2},
$$

$$
H_1:\mu>\mu_0
\quad\Rightarrow\quad
Z\ge z_\alpha,
$$

$$
H_1:\mu<\mu_0
\quad\Rightarrow\quad
Z\le-z_\alpha.
$$

---

## 2.2 Textbook cookie example

Known process standard deviation:

$$
\sigma=0.16.
$$

Sample:

$$
n=25,
\qquad
\bar x=8.091.
$$

Test:

$$
H_0:\mu=8
$$

against:

$$
H_1:\mu\ne8
$$

pada:

$$
\alpha=0.01.
$$

Test statistic:

$$
z
=
\frac{
8.091-8
}{
0.16/\sqrt{25}
}
=
2.84.
$$

Critical value:

$$
z_{0.005}=2.575.
$$

Karena:

$$
2.84>2.575,
$$

reject $H_0$.

Miller juga memberikan:

$$
\text{P-value}=0.0046.
$$

Decision sama karena:

$$
0.0046<0.01.
$$

---

## 2.3 Large-sample mean test when $\sigma$ is unknown

Untuk sufficiently large sample, Miller menggunakan CLT.

Approximate statistic:

$$
\boxed{
Z
=
\frac{
\bar X-\mu_0
}{
S/\sqrt n
}.
}
$$

`[TEXTBOOK CONTEXT]` Miller menggunakan:

$$
n\ge30
$$

sebagai practical large-sample rule.

### Tire example

$$
n=100,
\qquad
\bar x=21{,}819,
\qquad
s=1{,}295.
$$

Test:

$$
H_0:\mu=22{,}000
$$

against:

$$
H_1:\mu<22{,}000.
$$

Maka:

$$
z
=
\frac{
21{,}819-22{,}000
}{
1{,}295/\sqrt{100}
}
=
-1.40.
$$

Pada:

$$
\alpha=0.05,
$$

critical value:

$$
-1.645.
$$

Karena:

$$
-1.40>-1.645,
$$

do not reject $H_0$.

Miller memberi:

$$
\text{P-value}=0.0808.
$$

---

## 2.4 One-sample $t$ test

Jika:

- $n<30$;
- $\sigma$ unknown;
- population Normal;

Miller menggunakan:

$$
\boxed{
T
=
\frac{
\bar X-\mu_0
}{
S/\sqrt n
}
\sim
t_{n-1}
\quad\text{under }H_0.
}
$$

Critical regions:

$$
H_1:\mu\ne\mu_0
\Rightarrow
|T|\ge t_{\alpha/2,n-1},
$$

$$
H_1:\mu>\mu_0
\Rightarrow
T\ge t_{\alpha,n-1},
$$

$$
H_1:\mu<\mu_0
\Rightarrow
T\le-t_{\alpha,n-1}.
$$

### Ribbon example

$$
n=5,
\qquad
\bar x=183.1,
\qquad
s=8.2.
$$

Test:

$$
H_0:\mu=185
$$

against:

$$
H_1:\mu<185
$$

dengan:

$$
\alpha=0.05.
$$

$$
t
=
\frac{
183.1-185
}{
8.2/\sqrt5
}
\approx-0.51.
$$

Critical value:

$$
-t_{0.05,4}=-2.132.
$$

Statistic tidak berada pada critical region, jadi $H_0$ tidak ditolak.

---

# 3. Tests Concerning Differences Between Means

`[CORE CF2]`

Misalkan independent samples berasal dari dua populations.

General null:

$$
\boxed{
H_0:
\mu_1-\mu_2=\delta.
}
$$

---

## 3.1 Known variances

Untuk independent Normal populations dengan known:

$$
\sigma_1^2,\sigma_2^2,
$$

gunakan:

$$
\boxed{
Z
=
\frac{
\bar X_1-\bar X_2-\delta
}{
\sqrt{
\sigma_1^2/n_1
+
\sigma_2^2/n_2
}
}.
}
$$

Gunakan Standard Normal tail rule sesuai direction $H_1$.

---

## 3.2 Large independent samples

Jika variances unknown tetapi kedua samples besar, replace:

$$
\sigma_1,\sigma_2
$$

dengan:

$$
s_1,s_2.
$$

Approximate statistic:

$$
\boxed{
Z
=
\frac{
\bar X_1-\bar X_2-\delta
}{
\sqrt{
s_1^2/n_1
+
s_2^2/n_2
}
}.
}
$$

### Nicotine example

$$
n_1=50,\quad
\bar x_1=2.61,\quad
s_1=0.12,
$$

$$
n_2=40,\quad
\bar x_2=2.38,\quad
s_2=0.14.
$$

Test:

$$
H_0:\mu_1-\mu_2=0.20
$$

against:

$$
H_1:\mu_1-\mu_2\ne0.20.
$$

Miller memperoleh:

$$
z=1.08.
$$

P-value:

$$
\text{P-value}=0.2802.
$$

Karena:

$$
0.2802>0.05,
$$

do not reject $H_0$.

---

## 3.3 Two-sample pooled $t$ test

Untuk small independent samples dari dua Normal populations dengan **common unknown variance**:

$$
\sigma_1^2=\sigma_2^2=\sigma^2.
$$

Gunakan pooled variance:

$$
\boxed{
S_p^2
=
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{
n_1+n_2-2
}.
}
$$

Kemudian:

$$
\boxed{
T
=
\frac{
\bar X_1-\bar X_2-\delta
}{
S_p
\sqrt{
1/n_1+1/n_2
}
}
\sim
t_{n_1+n_2-2}.
}
$$

> [!ASSUMPTION]
> Exact pooled-$t$ validity membutuhkan:
>
> - independent samples;
> - Normal populations;
> - equal population variances.

### Paint example

$$
n_1=n_2=4,
$$

$$
\bar x_1=546,
\qquad
s_1=31,
$$

$$
\bar x_2=492,
\qquad
s_2=26.
$$

Test:

$$
H_0:\mu_1-\mu_2=0
$$

against:

$$
H_1:\mu_1-\mu_2>0.
$$

Miller memperoleh:

$$
s_p=28.609,
$$

$$
t=2.67.
$$

Critical value:

$$
t_{0.05,6}=1.943.
$$

Karena:

$$
2.67>1.943,
$$

reject $H_0$.

P-value:

$$
\text{P-value}=0.0185.
$$

---

## 3.4 Paired samples

Miller menegaskan bahwa “before vs after” atau naturally matched measurements **bukan independent samples**.

Definisikan pairwise differences:

$$
D_i=X_i-Y_i.
$$

Lalu lakukan one-sample mean test terhadap:

$$
\mu_D.
$$

Jika:

$$
H_0:\mu_1-\mu_2=\delta,
$$

maka corresponding null untuk differences:

$$
\boxed{
H_0:\mu_D=\delta.
}
$$

Kemudian gunakan one-sample $t$ machinery bila appropriate.

> [!IMPORTANT] Independence trap
> Jangan gunakan two-sample formulas pada paired observations.  
> Ubah paired data menjadi one sample of differences.

---

# 4. Tests Concerning Variances

`[CORE CF2]`

Variance testing penting secara langsung maupun karena equal-variance assumption dibutuhkan dalam procedures tertentu.

## 4.1 One Normal population variance

Untuk random sample dari Normal population, test:

$$
H_0:\sigma^2=\sigma_0^2.
$$

Di bawah $H_0$:

$$
\boxed{
\chi^2
=
\frac{
(n-1)S^2
}{
\sigma_0^2
}
\sim
\chi^2_{n-1}.
}
$$

### Right-tailed

$$
H_1:\sigma^2>\sigma_0^2.
$$

Reject jika:

$$
\boxed{
\chi^2
\ge
\chi^2_{\alpha,n-1}.
}
$$

### Left-tailed

$$
H_1:\sigma^2<\sigma_0^2.
$$

Reject di corresponding lower tail.

### Two-sided

$$
H_1:\sigma^2\ne\sigma_0^2.
$$

Reject jika statistic berada di salah satu tail, dengan:

$$
\frac{\alpha}{2}
$$

di setiap tail.

---

## 4.2 Semiconductor example

$$
n=18,
\qquad
s^2=0.68.
$$

Test:

$$
H_0:\sigma^2=0.36
$$

against:

$$
H_1:\sigma^2>0.36
$$

pada:

$$
\alpha=0.05.
$$

$$
\chi^2
=
\frac{
17(0.68)
}{
0.36
}
=
32.11.
$$

Critical value:

$$
\chi^2_{0.05,17}=27.587.
$$

Karena:

$$
32.11>27.587,
$$

reject $H_0$.

Miller menggunakan example ini untuk menegaskan bahwa $\alpha$ harus ditentukan sebelum melihat outcome. Pada $\alpha=0.01$, statistic yang sama tidak akan reject.

---

## 4.3 Equality of two Normal variances

Untuk independent samples dari Normal populations, di bawah:

$$
H_0:\sigma_1^2=\sigma_2^2,
$$

variance ratio mengikuti $F$ distribution.

Jika:

$$
H_1:\sigma_1^2>\sigma_2^2,
$$

gunakan:

$$
\boxed{
F
=
\frac{
S_1^2
}{
S_2^2
}
\sim
F_{n_1-1,n_2-1}
\quad\text{under }H_0.
}
$$

Reject untuk sufficiently large $F$.

Untuk two-sided test, Miller menempatkan **larger observed sample variance di numerator** lalu menggunakan appropriate right-tail $F$ critical value.

Reciprocal property:

$$
F\sim F_{\nu_1,\nu_2}
\quad\Rightarrow\quad
\frac{1}{F}\sim F_{\nu_2,\nu_1}
$$

memungkinkan two-sided test dilakukan dengan right-tail tables.

---

## 4.4 Steel example

$$
n_1=13,\quad
s_1^2=19.2,
$$

$$
n_2=16,\quad
s_2^2=3.5.
$$

Test:

$$
H_0:\sigma_1^2=\sigma_2^2
$$

against:

$$
H_1:\sigma_1^2\ne\sigma_2^2
$$

pada:

$$
\alpha=0.02.
$$

Karena:

$$
s_1^2>s_2^2,
$$

gunakan:

$$
F
=
\frac{19.2}{3.5}
=
5.49.
$$

Critical value:

$$
f_{0.01,12,15}=3.67.
$$

Karena:

$$
5.49>3.67,
$$

reject equal variances.

---

# 5. Tests Concerning Proportions

`[CORE CF2]`

Miller menggunakan Binomial model:

$$
X\sim\operatorname{Binomial}(n,\theta).
$$

Test:

$$
H_0:\theta=\theta_0.
$$

---

## 5.1 Exact Binomial test

Untuk:

$$
H_1:\theta>\theta_0,
$$

reject untuk sufficiently large $X$:

$$
X\ge k_\alpha.
$$

Miller memilih $k_\alpha$ sebagai smallest integer sehingga upper-tail probability di bawah $H_0$ tidak melebihi $\alpha$.

Untuk:

$$
H_1:\theta<\theta_0,
$$

reject untuk sufficiently small $X$.

Untuk:

$$
H_1:\theta\ne\theta_0,
$$

gunakan kedua tails.

Karena $X$ discrete, exact critical region dapat memiliki size **lebih kecil** dari nominal $\alpha$; size tidak selalu dapat dibuat exactly sama dengan $\alpha$.

---

## 5.2 Exact P-value example

Observed:

$$
x=4
$$

dari:

$$
n=20.
$$

Test:

$$
H_0:\theta=0.50
$$

against:

$$
H_1:\theta\ne0.50.
$$

Miller menghitung:

$$
P(X\le4)=0.0059.
$$

Karena symmetry pada two-sided setting:

$$
\text{P-value}
=
2(0.0059)
=
0.0118.
$$

Pada:

$$
\alpha=0.05,
$$

reject $H_0$.

---

## 5.3 Large-sample Normal approximation

Untuk large $n$, di bawah:

$$
H_0:\theta=\theta_0,
$$

standardized Binomial count approximately:

$$
\boxed{
Z
=
\frac{
X-n\theta_0
}{
\sqrt{
n\theta_0(1-\theta_0)
}
}
\approx
N(0,1).
}
$$

Equivalent proportion form:

$$
\boxed{
Z
=
\frac{
\hat\theta-\theta_0
}{
\sqrt{
\theta_0(1-\theta_0)/n
}
}.
}
$$

Critical regions mengikuti usual $Z$ tail rules.

Miller juga mencatat continuity-corrected form dengan shifting $X$ sebesar:

$$
\pm\frac12
$$

ke arah null mean sebelum standardization.

---

## 5.4 Oil-company example

$$
n=200,
\qquad
x=22.
$$

Test:

$$
H_0:\theta=0.20
$$

against:

$$
H_1:\theta<0.20
$$

pada:

$$
\alpha=0.01.
$$

Tanpa continuity correction:

$$
z
=
\frac{
22-200(0.20)
}{
\sqrt{
200(0.20)(0.80)
}
}
=
-3.18.
$$

Critical value:

$$
-z_{0.01}=-2.33.
$$

Karena:

$$
-3.18<-2.33,
$$

reject $H_0$.

Dengan continuity correction, Miller memperoleh:

$$
z=-3.09,
$$

dengan decision yang sama.

---

# 6. Tests Concerning Differences Among $k$ Proportions

`[CORE CF2]`

Misalkan $k$ independent Binomial samples:

$$
X_i\sim\operatorname{Binomial}(n_i,\theta_i).
$$

Tujuan: test apakah population proportions sama.

---

## 6.1 Known common null value

Misalkan:

$$
H_0:
\theta_1=\theta_2=\cdots=\theta_k=\theta_0.
$$

Untuk large samples:

$$
\boxed{
\chi^2
=
\sum_{i=1}^{k}
\frac{
(X_i-n_i\theta_0)^2
}{
n_i\theta_0(1-\theta_0)
}.
}
$$

Di bawah $H_0$:

$$
\boxed{
\chi^2
\approx
\chi^2_k.
}
$$

Reject untuk sufficiently large Chi-square value.

---

## 6.2 Unknown common proportion

Jika null hanya menyatakan:

$$
H_0:
\theta_1=\theta_2=\cdots=\theta_k
$$

tanpa common value specified, estimate dengan pooled proportion:

$$
\boxed{
\hat\theta
=
\frac{
x_1+x_2+\cdots+x_k
}{
n_1+n_2+\cdots+n_k
}.
}
$$

Lalu:

$$
\boxed{
\chi^2
=
\sum_{i=1}^{k}
\frac{
(x_i-n_i\hat\theta)^2
}{
n_i\hat\theta(1-\hat\theta)
}.
}
$$

Reference distribution:

$$
\boxed{
\chi^2_{k-1}.
}
$$

> [!IMPORTANT] Mengapa satu degree of freedom hilang?
> Satu parameter—common $\theta$—diestimasi dari data.

---

## 6.3 Observed-vs-expected frequency form

Miller menulis ulang $k$-proportion test sebagai $k\times2$ frequency table.

Observed frequencies:

$$
f_{ij}.
$$

Expected frequencies di bawah pooled null:

$$
e_{i1}
=
n_i\hat\theta,
$$

$$
e_{i2}
=
n_i(1-\hat\theta).
$$

Statistic:

$$
\boxed{
\chi^2
=
\sum_{i=1}^{k}
\sum_{j=1}^{2}
\frac{
(f_{ij}-e_{ij})^2
}{
e_{ij}
}.
}
$$

Ini algebraically equivalent dengan proportion-based form.

---

## 6.4 Detergent example

| City | Favor A | Favor B | Total |
|---|---:|---:|---:|
| Los Angeles | 232 | 168 | 400 |
| San Diego | 260 | 240 | 500 |
| Fresno | 197 | 203 | 400 |

Test:

$$
H_0:
\theta_1=\theta_2=\theta_3
$$

against “not all equal” pada:

$$
\alpha=0.05.
$$

Pooled estimate:

$$
\hat\theta
=
\frac{
232+260+197
}{
400+500+400
}
=
\frac{689}{1300}
\approx0.53.
$$

Expected frequencies menggunakan:

$$
0.53
$$

untuk favor A, dan:

$$
0.47
$$

untuk favor B.

Miller memperoleh:

$$
\chi^2=6.48.
$$

Degrees of freedom:

$$
k-1=2.
$$

Critical value:

$$
\chi^2_{0.05,2}=5.991.
$$

Karena:

$$
6.48>5.991,
$$

reject $H_0$.

Conclusion: true proportions tidak semuanya sama di ketiga cities.

---

# 7. Analysis of an $r\times c$ Table

`[BEYOND CF2]`

Section 13.7 menggeneralisasi Chi-square observed-vs-expected method ke $r\times c$ contingency tables.

Materi mencakup applications seperti tests of homogeneity/independence, tetapi berada di luar official Miller §§13.1–13.6 CF2 mapping sehingga tidak diperluas.

---

# 8. Goodness of Fit

`[BEYOND CF2]`

Section 13.8 membahas Chi-square goodness-of-fit testing untuk membandingkan observed categorical frequencies dengan expected frequencies dari specified atau fitted distribution.

Karena section ini berada di luar official Miller CF2 scope, detailed formulas dan examples tidak diperluas.

---

# 9. The Theory in Practice

`[BEYOND CF2]`

Section 13.9 membahas practical application dan software implementation. Section ini berada di luar specified Miller CF2 scope.

---

# Unified Testing Workflow

Untuk hampir semua core tests Miller Chapter 13:

1. **State hypotheses**
   $$
   H_0,\ H_1.
   $$

2. **Fix**
   $$
   \alpha.
   $$

3. **Choose test statistic** berdasarkan:
   - target parameter;
   - sample structure;
   - population assumptions;
   - apakah nuisance parameters known.

4. **Determine null distribution**.

5. Gunakan salah satu:
   - critical region; atau
   - P-value.

6. **Compute observed statistic**.

7. Decide:
   $$
   \text{reject }H_0
   \quad\text{atau}\quad
   \text{do not reject }H_0.
   $$

8. Interpret dalam context original parameter claim.

---

# Test Recognition Table

| Target | Conditions | Test statistic |
|---|---|---|
| One mean $\mu$ | Normal, $\sigma$ known | $Z=\dfrac{\bar X-\mu_0}{\sigma/\sqrt n}$ |
| One mean $\mu$ | large $n$, $\sigma$ unknown | approximate $Z=\dfrac{\bar X-\mu_0}{S/\sqrt n}$ |
| One mean $\mu$ | Normal, $\sigma$ unknown, small $n$ | $T=\dfrac{\bar X-\mu_0}{S/\sqrt n}$ |
| $\mu_1-\mu_2$ | known variances / large samples | $Z$ |
| $\mu_1-\mu_2$ | small Normal, equal unknown variances | pooled $t$ |
| Paired mean difference | paired Normal differences | one-sample $t$ on $D_i$ |
| One variance $\sigma^2$ | Normal sample | $\chi^2$ |
| Two variances | independent Normal samples | $F$ |
| One proportion $\theta$ | exact Binomial | $X$ |
| One proportion $\theta$ | large $n$ | approximate $Z$ |
| $k$ proportions | large independent Binomial samples | $\chi^2$ |

---

# Formula Map

## One mean

Known $\sigma$:

$$
\boxed{
Z
=
\frac{
\bar X-\mu_0
}{
\sigma/\sqrt n
}.
}
$$

Unknown $\sigma$, Normal:

$$
\boxed{
T
=
\frac{
\bar X-\mu_0
}{
S/\sqrt n
}.
}
$$

## Difference of means

$$
\boxed{
Z
=
\frac{
\bar X_1-\bar X_2-\delta
}{
\sqrt{
\sigma_1^2/n_1+\sigma_2^2/n_2
}
}.
}
$$

Pooled:

$$
\boxed{
T
=
\frac{
\bar X_1-\bar X_2-\delta
}{
S_p
\sqrt{
1/n_1+1/n_2
}
}.
}
$$

$$
\boxed{
S_p^2
=
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{
n_1+n_2-2
}.
}
$$

## Variance

$$
\boxed{
\chi^2
=
\frac{
(n-1)S^2
}{
\sigma_0^2
}.
}
$$

## Ratio of variances

$$
\boxed{
F
=
\frac{
S_1^2
}{
S_2^2
}.
}
$$

di bawah equality of population variances, dengan numerator/denominator orientation disesuaikan dengan test.

## One proportion

$$
\boxed{
Z
=
\frac{
X-n\theta_0
}{
\sqrt{
n\theta_0(1-\theta_0)
}
}.
}
$$

atau:

$$
\boxed{
Z
=
\frac{
\hat\theta-\theta_0
}{
\sqrt{
\theta_0(1-\theta_0)/n
}
}.
}
$$

## $k$ equal proportions

$$
\boxed{
\hat\theta
=
\frac{
\sum_i x_i
}{
\sum_i n_i
}.
}
$$

$$
\boxed{
\chi^2
=
\sum_{i=1}^{k}
\frac{
(x_i-n_i\hat\theta)^2
}{
n_i\hat\theta(1-\hat\theta)
}
\sim
\chi^2_{k-1}.
}
$$

---

# CF2 Connection Map

| Miller Chapter 13 section | CF2 relevance |
|---|---|
| §13.1 Introduction | [[4.8 Uji Hipotesis]] |
| §13.2 Tests Concerning Means | [[4.8 Uji Hipotesis]] |
| §13.3 Differences Between Means | [[4.8 Uji Hipotesis]] |
| §13.4 Variances | [[4.8 Uji Hipotesis]] |
| §13.5 Proportions | [[4.8 Uji Hipotesis]] |
| §13.6 Differences Among $k$ Proportions | [[4.8 Uji Hipotesis]] |
| §13.7 $r\times c$ table | `[BEYOND CF2]` under Miller mapping |
| §13.8 Goodness of Fit | `[BEYOND CF2]` under Miller mapping |
| §13.9 Theory in Practice | `[BEYOND CF2]` under Miller mapping |

---

# Quick Reading Review

1. Definisikan test of significance.
2. Bagaimana $H_1$ menentukan tail direction?
3. Apa two-sided $Z$ critical region?
4. Apa itu P-value?
5. Apa P-value decision rule?
6. Mengapa $\alpha$ harus ditetapkan sebelum melihat data?
7. Kapan one-sample $Z$ test exact?
8. Kapan Miller menggunakan $S$ pada approximate large-sample $Z$ test?
9. Apa assumptions one-sample $t$ test?
10. Tuliskan two-sample known-variance $Z$ statistic.
11. Apa assumptions pooled two-sample $t$ test?
12. Mengapa paired observations dianalisis melalui differences?
13. Statistic apa yang menguji one Normal population variance?
14. Mengapa Normality penting untuk Chi-square variance test?
15. Statistic apa yang menguji equality of two Normal variances?
16. Bagaimana Miller menangani two-sided $F$ test menggunakan right-tail tables?
17. Bagaimana exact Binomial test dibangun?
18. Mengapa actual size dapat di bawah nominal $\alpha$?
19. Tuliskan large-sample proportion $Z$ statistic.
20. Apa fungsi continuity correction?
21. Bagaimana pooled common proportion diestimasi dalam $k$-sample test?
22. Mengapa degrees of freedom menjadi $k-1$ ketika common proportion diestimasi?
23. Bagaimana $k$-proportion Chi-square test ditulis sebagai observed-vs-expected frequencies?
24. Sections Chapter 13 mana yang berada di luar official Miller CF2 scope?

---

# Compression Notes

Dipertahankan secara detail:

- one-/two-tailed significance tests;
- P-value interpretation;
- one-sample $Z$ dan $t$ tests;
- large-sample mean approximation;
- two-sample $Z$;
- pooled two-sample $t$;
- paired-sample reduction;
- Chi-square variance test;
- $F$ equality-of-variances test;
- exact dan approximate Binomial proportion tests;
- continuity correction;
- $k$-proportion Chi-square test;
- pooled proportion dan degrees-of-freedom logic;
- representative textbook examples.

Dikompres atau dihilangkan:

- repeated arithmetic/table lookup;
- exercises;
- full treatment §§13.7–13.9 karena berada di luar official Miller CF2 mapping;
- software procedure details.

---

# Source Traceability

Primary source: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 13 dalam `Topik 4 - [Miller].pdf`.

Core source locations:

- §13.1 — test of significance, tail structure, P-values
- §13.2 — one-mean $Z$, large-sample $Z$, one-sample $t$
- §13.3 — independent means, pooled $t$, paired samples
- §13.4 — Chi-square variance dan $F$-ratio tests
- §13.5 — exact Binomial dan Normal-approximation proportion tests
- §13.6 — Chi-square comparison dari $k$ proportions

Scope authority: CF2 syllabus specifies **Miller §§13.1–13.6** untuk Topik 4.

Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 13 mengoperasionalkan hypothesis testing: identifikasi parameter dan assumptions, pilih statistic $Z$, $t$, $\chi^2$, $F$, atau Binomial yang sesuai, sesuaikan tail dengan $H_1$, lalu buat decision melalui critical region atau P-value.**
