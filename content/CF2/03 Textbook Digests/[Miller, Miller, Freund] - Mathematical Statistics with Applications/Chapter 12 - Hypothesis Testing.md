---
title: "Miller Chapter 12 — Hypothesis Testing: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 12
exam: CF2
scope: "Topik 4 — Inferensi Statistik; Miller §§12.1–12.3"
tags: [CF2, Miller, HypothesisTesting, TypeIError, TypeIIError, CriticalRegion, SignificanceLevel, Risk]
status: condensed-textbook-note
language: id
---

# Miller Chapter 12 — Hypothesis Testing

> [!ABSTRACT] Tujuan chapter
> Chapter 12 memperkenalkan general mathematical framework dari statistical hypothesis testing. Miller memulai dari definisi statistical hypothesis lalu mengembangkan:
>
> $$
> \text{null/alternative hypotheses}
> \rightarrow
> \text{test statistic}
> \rightarrow
> \text{acceptance/critical region}
> \rightarrow
> \text{Type I and Type II errors}
> \rightarrow
> \alpha,\beta
> \rightarrow
> \text{loss and risk}.
> $$
>
> Berdasarkan official CF2 mapping, **Sections 12.1–12.3 adalah core**. Sections berikutnya mengenai Neyman–Pearson lemma, power functions, likelihood-ratio tests, dan theory in practice berada di luar specified Miller scope CF2 dan hanya disignpost.

---

# 1. Introduction

`[CORE CF2]`

Hypothesis testing muncul ketika sample data digunakan untuk menilai apakah suatu statement mengenai population distribution plausible.

Opening examples Miller mencakup pertanyaan seperti:

- apakah suatu Exponential lifetime parameter minimal sama dengan specified value;
- apakah mean satu Normal population lebih besar daripada yang lain;
- apakah Binomial recovery probability sama dengan specified proportion.

Modeling requirement pertama adalah bahwa chosen probability distribution harus reasonable untuk experimental situation.

---

## 1.1 Statistical hypothesis

Miller mendefinisikan **statistical hypothesis** sebagai:

> assertion atau conjecture mengenai distribution dari satu atau lebih random variables.

Hypothesis dapat mengenai:

- satu atau lebih parameter values;
- functional form/type dari population distribution.

---

## 1.2 Simple vs composite hypothesis

**Simple hypothesis** sepenuhnya menentukan distribution.

Contoh:

$$
H:\theta=0.90
$$

untuk Binomial population dengan known $n$.

**Composite hypothesis** tidak sepenuhnya menentukan distribution.

Contoh:

$$
H:\theta\ge42{,}000.
$$

Jadi:

$$
\boxed{
\text{simple}
\Rightarrow
\text{seluruh relevant parameter values specified}
}
$$

sedangkan:

$$
\boxed{
\text{composite}
\Rightarrow
\text{lebih dari satu parameter value masih mungkin}.
}
$$

Distinction yang sama berlaku pada alternative hypothesis.

---

## 1.3 Null and alternative hypotheses

Miller menggunakan:

$$
H_0
$$

untuk **null hypothesis**, dan:

$$
H_1
\quad\text{atau}\quad
H_A
$$

untuk alternative.

Null sering diformulasikan sebagai equality atau “no difference” statement karena ini memberikan precise distribution untuk test statistic di bawah $H_0$.

Contoh:

$$
H_0:\mu_1=\mu_2
$$

ketika ingin menunjukkan salah satu population mean lebih besar, atau:

$$
H_0:\sigma_1=\sigma_2
$$

ketika menilai apakah satu population lebih variable.

> [!IMPORTANT] Null tidak selalu berarti “yang kita percaya”
> $H_0$ adalah hypothesis yang secara formal diuji dan digunakan untuk menurunkan reference distribution dari test statistic.

---

# 2. Testing a Statistical Hypothesis

`[CORE CF2]`

Statistical test adalah explicit rule yang menggunakan random sample untuk memutuskan apakah menerima $H_0$ atau menolaknya demi $H_1$.

Misalkan:

$$
H_0:\theta=\theta_0
$$

versus:

$$
H_1:\theta=\theta_1.
$$

Sebuah statistic dihitung dari sample. Possible values dari test statistic dibagi menjadi:

1. **acceptance region** untuk $H_0$;
2. **rejection region** untuk $H_0$.

Miller menyebut rejection region sebagai **critical region**.

---

## 2.1 Type I and Type II errors

Karena keputusan dibuat berdasarkan random sample, terdapat dua jenis error.

### Type I error

Reject $H_0$ ketika $H_0$ sebenarnya true.

$$
\boxed{
\alpha
=
P(
\text{reject }H_0
\mid
H_0\text{ true}
).
}
$$

### Type II error

Accept $H_0$ ketika $H_0$ false.

$$
\boxed{
\beta
=
P(
\text{accept }H_0
\mid
H_1\text{ true}
).
}
$$

Untuk simple-vs-simple setting:

| Decision | $H_0$ true | $H_0$ false |
|---|---|---|
| Accept $H_0$ | correct | Type II error, probability $\beta$ |
| Reject $H_0$ | Type I error, probability $\alpha$ | correct |

---

## 2.2 Critical region, size, and significance level

Miller mendefinisikan **critical region** sebagai rejection region.

**Size of the critical region**:

$$
P(
\text{test statistic falls in critical region}
\mid
H_0
).
$$

Jadi:

$$
\boxed{
\text{size}=\alpha.
}
$$

Miller juga menyebut $\alpha$ sebagai **level of significance**.

---

## 2.3 Textbook example — Binomial medication test

`[TEXTBOOK EXAMPLE]`

Misalkan:

$$
H_0:\theta=0.90
$$

versus:

$$
H_1:\theta=0.60.
$$

Definisikan:

$$
X=\text{number of recoveries dalam }20\text{ trials}.
$$

Miller menggunakan rule:

$$
\text{accept }H_0\text{ if }X>14,
$$

sehingga critical region:

$$
X\le14.
$$

Type I error:

$$
\alpha
=
P(X\le14\mid\theta=0.90)
=
0.0114.
$$

Type II error:

$$
\beta
=
P(X>14\mid\theta=0.60)
=
0.1255.
$$

Jadi:

$$
\boxed{
\alpha=0.0114,
\qquad
\beta=0.1255.
}
$$

---

## 2.4 Trade-off between $\alpha$ and $\beta$

Miller mengubah acceptance region menjadi:

$$
X>15.
$$

Critical region:

$$
X\le15.
$$

Resulting errors:

$$
\alpha=0.0433,
$$

$$
\beta=0.0509.
$$

Jadi $\beta$ turun, tetapi $\alpha$ naik.

Ini menggambarkan fixed-sample trade-off:

$$
\boxed{
\text{untuk fixed }n,\text{ menurunkan satu error probability biasanya menaikkan yang lain}.
}
$$

Miller menyatakan cara langsung untuk membuat keduanya lebih kecil adalah meningkatkan sample size.

---

## 2.5 Constructing a critical boundary from $\alpha$

`[TEXTBOOK EXAMPLE]`

Misalkan random sample size $n$ berasal dari:

$$
N(\mu,1).
$$

Test:

$$
H_0:\mu=\mu_0
$$

against:

$$
H_1:\mu=\mu_1,
\qquad
\mu_1>\mu_0.
$$

Gunakan right-tail critical region:

$$
\bar X>K.
$$

Di bawah $H_0$:

$$
\bar X
\sim
N\left(
\mu_0,\frac{1}{n}
\right).
$$

Untuk:

$$
\alpha=0.05,
$$

Standard Normal cutoff:

$$
z_{0.05}=1.645.
$$

Maka:

$$
\frac{
K-\mu_0
}{
1/\sqrt n
}
=
1.645.
$$

Jadi:

$$
\boxed{
K
=
\mu_0
+
\frac{1.645}{\sqrt n}.
}
$$

General construction:

```text
fix α
  ↓
use null sampling distribution
  ↓
find critical quantile
  ↓
translate quantile back to original statistic scale
```

---

## 2.6 Sample size from Type I and Type II constraints

`[TEXTBOOK EXAMPLE]`

Lanjutkan example dengan:

$$
\mu_0=10,
\qquad
\mu_1=11,
\qquad
\alpha=0.05,
$$

dan requirement:

$$
\beta\le0.06.
$$

Critical boundary:

$$
K
=
10+\frac{1.645}{\sqrt n}.
$$

Di bawah alternative $\mu=11$:

$$
\beta
=
P(\bar X<K\mid\mu=11).
$$

Standardize:

$$
\beta
=
P\left(
Z<
-\sqrt n+1.645
\right).
$$

Untuk $\beta=0.06$, Miller menggunakan Normal quantile:

$$
-1.555.
$$

Maka:

$$
-\sqrt n+1.645=-1.555,
$$

sehingga:

$$
\sqrt n=3.200,
$$

$$
n=10.24.
$$

Round upward:

$$
\boxed{
n=11.
}
$$

> [!IMPORTANT] Sample-size principle
> Required sample size harus dibulatkan **ke atas**, karena integer yang lebih kecil tidak memenuhi target error constraint.

---

## 2.7 Testing workflow

Miller's Section 2 dapat diringkas:

1. specify $H_0$ dan $H_1$;
2. choose test statistic;
3. derive sampling distribution di bawah $H_0$;
4. choose critical region;
5. control:
   $$
   \alpha
   =
   P(
   \text{critical region}
   \mid
   H_0
   );
   $$
6. evaluate:
   $$
   \beta
   =
   P(
   \text{acceptance region}
   \mid
   H_1
   );
   $$
7. bila perlu, ubah critical region atau sample size.

---

# 3. Losses and Risks

`[CORE CF2 / SUPPORTING DECISION THEORY]`

Miller menghubungkan hypothesis testing dengan decision-theory framework dari Chapter 9.

Misalkan:

$$
H_0:\theta=\theta_0
$$

versus:

$$
H_1:\theta=\theta_1.
$$

Ada dua actions:

- $a_0$: accept $H_0$;
- $a_1$: accept $H_1$.

Loss bergantung pada true state dan chosen action:

| State of Nature | $a_0$ | $a_1$ |
|---|---:|---:|
| $\theta_0$ | $L(a_0,\theta_0)$ | $L(a_1,\theta_0)$ |
| $\theta_1$ | $L(a_0,\theta_1)$ | $L(a_1,\theta_1)$ |

Miller mengasumsikan correct decisions lebih desirable:

$$
L(a_0,\theta_0)
<
L(a_1,\theta_0),
$$

$$
L(a_1,\theta_1)
<
L(a_0,\theta_1).
$$

---

## 3.1 Risk under $H_0$

Misalkan $d$ adalah decision function dan:

$$
\alpha(d)
=
P(\text{Type I error}).
$$

Maka:

$$
R(d,\theta_0)
=
[1-\alpha(d)]L(a_0,\theta_0)
+
\alpha(d)L(a_1,\theta_0).
$$

Rearrange:

$$
\boxed{
R(d,\theta_0)
=
L(a_0,\theta_0)
+
\alpha(d)
\left[
L(a_1,\theta_0)-L(a_0,\theta_0)
\right].
}
$$

Karena bracketed difference positif, risk di bawah $\theta_0$ meningkat bersama $\alpha(d)$.

---

## 3.2 Risk under $H_1$

Misalkan:

$$
\beta(d)
=
P(\text{Type II error}).
$$

Maka:

$$
R(d,\theta_1)
=
\beta(d)L(a_0,\theta_1)
+
[1-\beta(d)]L(a_1,\theta_1).
$$

Sehingga:

$$
\boxed{
R(d,\theta_1)
=
L(a_1,\theta_1)
+
\beta(d)
\left[
L(a_0,\theta_1)-L(a_1,\theta_1)
\right].
}
$$

Bracketed quantity positif, jadi risk di bawah $\theta_1$ meningkat bersama $\beta(d)$.

---

## 3.3 Decision-theory interpretation

Formula Miller menjelaskan mengapa testing procedure yang baik berusaha menjaga **kedua** error probabilities tetap kecil.

Jika prior probabilities untuk $\theta_0,\theta_1$ dan seluruh losses tersedia, Bayes risk dapat diminimumkan.

Sebaliknya, minimax reasoning dapat meminimumkan maximum risk.

Miller mencatat bahwa minimax interpretation sering kurang realistis untuk practical hypothesis testing.

---

# 4. Neyman–Pearson Lemma

`[BEYOND CF2]`

Section 12.4 mengembangkan classical Neyman–Pearson approach untuk memilih most powerful test dari simple null terhadap simple alternative.

Core idea:

- control Type I error $\alpha$;
- di antara tests dengan size tersebut, pilih yang meminimumkan $\beta$;
- equivalently, maximize rejection probability ketika alternative true.

Section ini berada di luar official Miller §§12.1–12.3 CF2 mapping, sehingga detailed likelihood-ratio construction dan proof tidak direproduksi.

---

# 5. Power Function of a Test

`[BEYOND CF2]`

Section 12.5 mendefinisikan power sebagai probability of rejecting $H_0$ pada specified parameter value di bawah alternative.

Untuk simple alternative:

$$
\boxed{
\text{power}=1-\beta.
}
$$

Untuk composite alternatives, power menjadi function of $\theta$.

Detailed power-curve derivations tidak diperluas karena berada di luar specified CF2 section mapping.

---

# 6. Likelihood Ratio Tests

`[BEYOND CF2]`

Section 12.6 mengembangkan likelihood-ratio tests sebagai general procedure untuk membandingkan seberapa baik null parameter space dan unrestricted parameter space menjelaskan observed sample.

Materi ini berada di luar Miller §§12.1–12.3 yang dipetakan oleh CF2.

---

# 7. The Theory in Practice

`[BEYOND CF2]`

Section 12.7 membahas practical aspects dan applied interpretation dari testing. Section ini berada di luar specified Miller scope CF2.

---

# Chapter Synthesis

## Hypothesis structure

$$
\boxed{
H_0
\quad\text{vs}\quad
H_1
}
$$

dengan hypothesis diklasifikasikan sebagai:

$$
\text{simple}
\quad\text{atau}\quad
\text{composite}.
$$

## Error probabilities

$$
\boxed{
\alpha
=
P(
\text{reject }H_0
\mid
H_0\text{ true}
).
}
$$

$$
\boxed{
\beta
=
P(
\text{accept }H_0
\mid
H_1\text{ true}
).
}
$$

## Critical region

$$
\boxed{
\text{critical region}
=
\text{rejection region untuk }H_0.
}
$$

Probability-nya di bawah $H_0$ adalah test size:

$$
\boxed{
\text{size}=\alpha.
}
$$

## Risk structure

$$
\boxed{
R(d,\theta_0)
=
L(a_0,\theta_0)
+
\alpha(d)\Delta L_0.
}
$$

$$
\boxed{
R(d,\theta_1)
=
L(a_1,\theta_1)
+
\beta(d)\Delta L_1.
}
$$

dengan positive loss differences $\Delta L_0,\Delta L_1$.

Jadi $\alpha$ dan $\beta$ sama-sama berkontribusi pada expected loss.

---

# CF2 Connection Map

| Miller Chapter 12 section | CF2 relevance |
|---|---|
| §12.1 Introduction | [[4.8 Uji Hipotesis]] |
| §12.2 Testing a Statistical Hypothesis | [[4.8 Uji Hipotesis]] |
| §12.3 Losses and Risks | [[4.8 Uji Hipotesis]] + decision-theory support |
| §12.4 Neyman–Pearson Lemma | `[BEYOND CF2]` under Miller mapping |
| §12.5 Power Function | `[BEYOND CF2]` under Miller mapping |
| §12.6 Likelihood Ratio Tests | `[BEYOND CF2]` under Miller mapping |
| §12.7 Theory in Practice | `[BEYOND CF2]` under Miller mapping |

---

# Quick Reading Review

1. Definisikan statistical hypothesis.
2. Bedakan simple dan composite hypothesis.
3. Apa role $H_0$?
4. Apa itu test statistic?
5. Bedakan acceptance dan critical regions.
6. Definisikan Type I error.
7. Definisikan Type II error.
8. Apa yang diukur $\alpha$?
9. Apa yang diukur $\beta$?
10. Mengapa size dari critical region sama dengan $\alpha$?
11. Bagaimana $\alpha$ dan $\beta$ dihitung pada medication example?
12. Mengapa memindahkan critical boundary menimbulkan trade-off $\alpha$ dan $\beta$?
13. Bagaimana increasing $n$ dapat membantu menurunkan kedua error probabilities?
14. Bagaimana right-tail critical cutoff dikonstruksi dari specified $\alpha$?
15. Bagaimana desired $\beta$ dapat menentukan minimum sample size?
16. Bagaimana loss dan risk menerjemahkan Type I/II errors ke decision consequences?
17. Mengapa risk under $\theta_0$ naik bersama $\alpha$?
18. Mengapa risk under $\theta_1$ naik bersama $\beta$?
19. Sections Chapter 12 mana yang berada di luar official Miller CF2 mapping?

---

# Compression Notes

Dipertahankan secara detail:

- statistical-hypothesis definition;
- simple/composite distinction;
- null/alternative structure;
- acceptance vs critical region;
- Type I/II errors;
- test size/significance level;
- Binomial calculation dari $\alpha,\beta$;
- fixed-$n$ error trade-off;
- Normal critical-boundary construction;
- sample-size calculation menggunakan $\alpha,\beta$;
- loss/risk formulas.

Dikompres atau dihilangkan:

- long introductory application narratives;
- repeated examples dengan identical error mechanics;
- detailed derivations dari §§12.4–12.7 karena berada di luar official Miller CF2 mapping.

---

# Source Traceability

Primary source: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 12 dalam `Topik 4 - [Miller].pdf`.

Core source locations:

- §12.1 — statistical hypotheses, simple/composite, $H_0/H_1$
- §12.2 Definitions 2–3 — Type I/II errors, critical region, significance
- §12.2 Examples 1–3 — $\alpha,\beta$, cutoff construction, sample size
- §12.3 — loss/risk formulation untuk hypothesis testing

Scope authority: CF2 syllabus specifies **Miller §§12.1–12.3** untuk Topik 4.

Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 12 membingkai hypothesis testing sebagai sampling-based decision problem: pilih critical region yang mengontrol Type I error, pahami resulting Type II trade-off, dan sadari bahwa kedua error masuk ke decision-theoretic risk dari testing rule.**
