---
title: "Miller Chapter 9 — Decision Theory: Condensed Textbook Notes"
book: "Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed."
chapter: 9
exam: CF2
scope: "Topik 4 — Inferensi Statistik"
tags: [CF2, Miller, DecisionTheory, StatisticalGames, LossFunction, RiskFunction, Minimax, BayesRisk, BayesCriterion]
status: condensed-textbook-note
language: id
---

# Miller Chapter 9 — Decision Theory

> [!ABSTRACT] Tujuan chapter
> Chapter 9 menempatkan statistical inference di dalam **decision-theoretic framework** yang lebih umum. Alih-alih hanya bertanya “berapa nilai parameter?” atau “apakah sebuah hypothesis harus ditolak?”, Miller mengajukan pertanyaan yang lebih mendasar:
>
> > Jika state of Nature tidak diketahui, data telah diamati, dan setiap possible action memiliki consequences tertentu, bagaimana memilih statistical decision yang rasional?
>
> Alur konseptualnya:
>
> $$
> \text{action vs state of Nature}
> \rightarrow
> \text{game}
> \rightarrow
> \text{statistical game with data}
> \rightarrow
> \text{loss function}
> \rightarrow
> \text{risk function}
> \rightarrow
> \text{decision criterion}
> \rightarrow
> \text{minimax}
> \rightarrow
> \text{Bayes criterion}.
> $$
>
> Miller mencatat bahwa materi ini sering dilewati dalam introductory mathematical statistics course, tetapi penting untuk memahami fondasi statistika. Dalam CF2, chapter ini terutama membantu memahami **Bayesian estimation, loss/risk, dan mengapa rule yang berbeda dapat optimal di bawah criterion yang berbeda**.

---

# 1. Introduction

`[CORE CF2 / FOUNDATIONAL CONTEXT]`

Miller memulai dari gagasan bahwa mathematical expectation dapat digunakan untuk membantu mengambil keputusan, misalnya:

- memaksimumkan expected profit;
- meminimumkan expected loss;
- memaksimumkan expected sales;
- meminimumkan expected cost.

Kesulitannya adalah bahwa real decision problems sering memerlukan:

1. numerical values untuk consequences;
2. probabilities untuk uncertain states.

Keduanya dapat bersifat uncertain atau subjective.

---

## 1.1 Manufacturer example

`[TEXTBOOK EXAMPLE]`

Seorang manufacturer harus memilih:

- segera memperbesar kapasitas pabrik;
- menunda expansion.

Nature dapat menghasilkan dua kondisi:

- good economic conditions;
- recession.

Miller mencatat **loss**, sehingga profit direpresentasikan sebagai negative loss.

| State of Nature | Expand now | Delay |
|---|---:|---:|
| Good conditions | $-164{,}000$ | $-80{,}000$ |
| Recession | $40{,}000$ | $-8{,}000$ |

Manufacturer meyakini odds recession adalah $2:1$, sehingga:

$$
P(\text{good})=\frac13,
\qquad
P(\text{recession})=\frac23.
$$

Expected loss jika melakukan expansion:

$$
-164000\left(\frac13\right)
+
40000\left(\frac23\right)
=
-28000.
$$

Expected loss jika menunda:

$$
-80000\left(\frac13\right)
-
8000\left(\frac23\right)
=
-32000.
$$

Karena:

$$
-32000<-28000,
$$

menunda memberikan expected loss yang lebih kecil.

Ini merupakan contoh **Bayes criterion**: probabilities diberikan untuk states of Nature, lalu dipilih action yang meminimumkan expected loss.

---

## 1.2 Minimax intuition

Miller kemudian menghilangkan probabilities untuk states tersebut.

Jika decision maker bersifat sangat pessimistic, ia melihat worst outcome dari setiap action:

- expand: worst loss $=40{,}000$;
- delay: worst outcome justru profit $8{,}000$, atau loss $=-8{,}000$.

Dipilih action dengan worst loss yang lebih kecil.

Inilah intuition dari **minimax criterion**:

$$
\boxed{
\text{pilih rule yang meminimumkan maximum possible risk/loss}.
}
$$

---

# 2. The Theory of Games

`[CF2 SUPPORTING CONTEXT]`

Miller merepresentasikan decision problem sebagai game antara dua “players”:

1. **statistician/decision maker**, yang memilih action;
2. **Nature**, yang menentukan state of the world.

Misalkan available actions:

$$
a_1,a_2,\ldots
$$

dan states of Nature:

$$
\theta_1,\theta_2,\ldots.
$$

Consequence dari action $a_i$ ketika state sebenarnya $\theta_j$ diringkas melalui loss:

$$
L(a_i,\theta_j).
$$

Untuk discrete problem, ini dapat direpresentasikan dalam loss matrix.

> [!IMPORTANT] Nature bukan strategic player secara literal
> Istilah “game” hanyalah mathematical device. Nature merepresentasikan unknown state/parameter.

---

## 2.1 Pure strategies

**Pure strategy** berarti memilih satu action secara deterministic.

Jika loss matrix diketahui dan tidak ada data yang diamati, decision problem dapat langsung dianalisis dari loss matrix.

Pada beberapa problem ada satu action yang lebih baik di seluruh states. Namun lebih sering tidak ada action yang mendominasi untuk seluruh states.

---

## 2.2 Mixed strategies

Miller juga membahas situasi ketika decision maker merandomisasi action.

Mixed strategy memberikan probabilities terhadap available pure actions.

Konsep ini memperluas decision rule dari:

> “selalu pilih $a_i$”

menjadi:

> “pilih di antara beberapa action dengan probabilities tertentu.”

`[CF2 SUPPORTING CONTEXT]` Mixed-strategy game theory tidak se-calc-heavy bagian statistical decision function, tetapi memberikan motivasi untuk randomized statistical procedures.

---

# 3. Statistical Games

`[CORE CF2 / FOUNDATIONAL]`

Statistical game berbeda dari ordinary game karena statistician dapat mengamati **sample information** sebelum memilih action.

Strukturnya:

```text
unknown state θ
      ↓
sample X generated from f(x;θ)
      ↓
observe x
      ↓
decision function d(x)
      ↓
action
      ↓
loss L(d(x),θ)
```

Ini adalah core architecture dari statistical decision theory.

---

## 3.1 Decision function

**Decision function** memetakan sample outcome menjadi action:

$$
\boxed{
d(x)=\text{action yang dipilih setelah mengamati }X=x.
}
$$

Untuk multivariate data:

$$
d(x_1,\ldots,x_n).
$$

Point estimator dapat dipandang sebagai special decision function ketika action adalah numerical guess untuk $\theta$.

---

## 3.2 Loss function

Miller menuliskan:

$$
\boxed{
L[d(x),\theta]
}
$$

sebagai loss ketika:

- observed data menghasilkan decision $d(x)$;
- true state adalah $\theta$.

Loss function mengubah consequences menjadi numerical quantity yang dapat dirata-ratakan.

Conceptual choices yang umum:

- zero-one loss;
- absolute-error loss;
- squared-error loss.

Jenis loss penting, karena istilah “best estimator” tidak meaningful tanpa criterion.

---

## 3.3 Risk function

Karena $X$ random di bawah state $\theta$, loss juga random sebelum sample diamati.

Miller mendefinisikan **risk function** sebagai expected loss:

$$
\boxed{
R(d,\theta)
=
E_\theta
\left[
L(d(X),\theta)
\right].
}
$$

Untuk discrete sample space:

$$
R(d,\theta)
=
\sum_x
L(d(x),\theta)
f(x;\theta).
$$

Untuk continuous model:

$$
R(d,\theta)
=
\int
L(d(x),\theta)
f(x;\theta)\,dx.
$$

> [!IMPORTANT] Loss vs risk
> - loss:
>   $$
>   L(d(x),\theta)
>   $$
>   adalah consequence untuk specific observed sample $x$;
> - risk:
>   $$
>   R(d,\theta)
>   $$
>   merata-ratakan loss terhadap seluruh sample yang mungkin dihasilkan ketika true parameter adalah $\theta$.

---

## 3.4 Estimation as a statistical game

Misalkan action merupakan estimate $d(x)$ untuk $\theta$.

Dengan squared-error loss:

$$
\boxed{
L(d(x),\theta)
=
[d(x)-\theta]^2
}
$$

atau positive constant dikalikan square tersebut.

Maka:

$$
R(d,\theta)
=
E_\theta
\left[
(d(X)-\theta)^2
\right].
$$

Ini tepat sama dengan **mean squared error (MSE)** dari estimator.

Jadi decision theory menyatukan comparison of estimators dengan familiar MSE concept.

---

## 3.5 Miller example with $d(x)=kx$

Miller mempertimbangkan statistical estimation problem dengan decision functions terbatas pada bentuk:

$$
d(x)=kx.
$$

Risk bergantung pada:

- $k$;
- unknown parameter $\theta$.

Dalam example, Miller menyederhanakan risk menjadi factor yang melibatkan:

$$
k^2-1+\frac{1}{k}.
$$

Remaining multiplicative factor bergantung pada $\theta$, tetapi tidak dapat dikontrol oleh decision maker.

Dengan differentiation terhadap bagian yang bergantung pada $k$, diperoleh optimum:

$$
\boxed{
k=\sqrt2.
}
$$

Jika observed value:

$$
x=5,
$$

maka recommended estimate:

$$
\boxed{
d(5)=5\sqrt2\approx7.07.
}
$$

Pelajarannya bukan angka spesifiknya, tetapi strukturnya:

> setelah class of decision functions ditentukan, pilih rule yang meminimumkan risk menurut criterion yang digunakan.

---

# 4. Decision Criteria

`[CORE CF2]`

Miller menekankan bahwa umumnya tidak ada satu decision function yang meminimumkan risk untuk **setiap** possible parameter value.

Sebagai contoh, rule yang selalu memilih:

$$
d(x)=\theta_1
$$

akan sempurna jika true value memang $\theta_1$, tetapi buruk untuk values lain.

Karena itu, “optimal” selalu harus dikaitkan dengan criterion tertentu.

Miller berfokus pada:

1. minimax criterion;
2. Bayes criterion.

---

## 4.1 Minimax criterion

Untuk setiap decision function $d$, pertimbangkan maximum risk di seluruh possible states:

$$
\sup_\theta R(d,\theta).
$$

Pilih rule yang meminimumkan worst-case risk:

$$
\boxed{
d_{\text{MM}}
=
\arg\min_d
\sup_\theta
R(d,\theta).
}
$$

Interpretasi:

> lindungi diri terhadap worst possible state of Nature.

Tidak diperlukan prior probabilities.

---

## 4.2 Bayes risk

Miller selanjutnya memperlakukan $\theta$ sebagai random variable dengan specified prior distribution.

**Bayes risk** adalah:

$$
\boxed{
E_\theta[R(d,\theta)].
}
$$

Untuk discrete prior probabilities $p(\theta_j)$:

$$
\boxed{
r(d)
=
\sum_j
R(d,\theta_j)
p(\theta_j).
}
$$

Untuk continuous prior density $\pi(\theta)$:

$$
\boxed{
r(d)
=
\int
R(d,\theta)\pi(\theta)\,d\theta.
}
$$

**Bayes criterion** memilih decision function yang meminimumkan Bayes risk:

$$
\boxed{
d_B
=
\arg\min_d r(d).
}
$$

> [!IMPORTANT] Minimax vs Bayes
> - Minimax: tidak memberi weights pada states; fokus pada worst state.
> - Bayes: memberi weights sesuai prior probabilities dan meminimumkan average risk.

---

# 5. The Minimax Criterion

`[CORE CF2 / SUPPORTING ESTIMATION THEORY]`

Miller menerapkan minimax reasoning pada statistical estimation.

## 5.1 Finite decision-table example

Untuk statistical game sederhana dengan finite set of states dan decision functions, lakukan:

1. hitung risk di setiap $\theta$;
2. cari maximum risk untuk setiap rule;
3. pilih rule dengan maximum risk paling kecil.

Secara mekanis:

$$
d_1:\quad
\max_\theta R(d_1,\theta),
$$

$$
d_2:\quad
\max_\theta R(d_2,\theta),
$$

dan seterusnya.

Kemudian pilih minimum di antara nilai-nilai tersebut.

---

## 5.2 Minimax estimator for a Binomial parameter

`[TEXTBOOK EXAMPLE]`

Miller mempertimbangkan:

$$
X\sim\operatorname{Binomial}(n,\theta)
$$

dan estimators berbentuk:

$$
\boxed{
d(X)=\frac{X+a}{n+b}.
}
$$

Loss yang dipakai:

$$
L(d,\theta)
=
c(d-\theta)^2.
$$

Tujuannya memilih constants $a,b$ agar maximum risk pada:

$$
0\le\theta\le1
$$

sekecil mungkin.

Perhitungan menggunakan:

$$
E(X)=n\theta,
$$

$$
\operatorname{Var}(X)=n\theta(1-\theta),
$$

dan:

$$
E[(d(X)-\theta)^2]
=
\operatorname{Var}(d(X))
+
\operatorname{Bias}(d)^2.
$$

Miller memperoleh minimax estimator:

$$
\boxed{
\hat\theta_{\text{MM}}
=
\frac{
X+\frac12\sqrt n
}{
n+\sqrt n
}.
}
$$

Estimator ini generally biased.

> [!IMPORTANT] Decision-theoretic interpretation
> Estimator sengaja memperkenalkan bias karena bias tersebut dapat mengurangi worst-case MSE.
>
> Jadi:
>
> $$
> \text{unbiasedness}
> \neq
> \text{automatic optimality}.
> $$

Ini adalah insight penting untuk estimator theory.

---

# 6. The Bayes Criterion

`[CORE CF2]`

Bayes approach memberikan prior probability distribution pada unknown state/parameter.

Misalkan prior density:

$$
\pi(\theta).
$$

Sebelum data diamati, uncertainty mengenai $\theta$ direpresentasikan oleh prior.

Setelah $X=x$ diamati, Bayes' theorem memberikan posterior:

$$
\boxed{
\pi(\theta\mid x)
\propto
f(x\mid\theta)\pi(\theta).
}
$$

Decision-theory treatment Miller menghubungkan posterior tersebut langsung dengan minimization of posterior expected loss.

---

## 6.1 Posterior expected loss

Untuk observed $x$, bandingkan action $a$ melalui:

$$
\boxed{
E[
L(a,\theta)
\mid X=x
].
}
$$

**Bayes action** pada $x$ meminimumkan conditional expected loss:

$$
\boxed{
d_B(x)
=
\arg\min_a
E[L(a,\theta)\mid X=x].
}
$$

Pointwise posterior rule ini juga meminimumkan overall Bayes risk.

Strukturnya:

```text
prior π(θ)
    ×
likelihood f(x|θ)
      ↓
posterior π(θ|x)
      ↓
expected posterior loss
      ↓
choose minimizing action
```

---

## 6.2 Squared-error loss

Dengan:

$$
L(a,\theta)
=
(a-\theta)^2,
$$

posterior expected loss:

$$
E[(a-\theta)^2\mid x].
$$

Gunakan decomposition:

$$
E[(a-\theta)^2\mid x]
=
\left(a-E[\theta\mid x]\right)^2
+
\operatorname{Var}(\theta\mid x).
$$

Term kedua tidak bergantung pada $a$.

Jadi minimizing action adalah:

$$
\boxed{
d_B(x)
=
E(\theta\mid X=x).
}
$$

Dengan kata lain:

> di bawah quadratic loss, Bayes estimator adalah **posterior mean**.

Ini menjadi jembatan langsung ke Bayesian estimation pada Chapter 10.

---

## 6.3 Other loss functions

Framework Miller menegaskan bahwa different loss functions dapat menghasilkan different Bayes rules.

Karena itu loss function harus ditentukan sebelum suatu estimator disebut “optimal”.

`[CF2 SUPPORTING CONTEXT]` Poin exam-relevant utamanya adalah bahwa decision rule bergantung pada loss/risk criterion; exhaustive catalog seluruh loss family tidak diperlukan di note ini.

---

## 6.4 Connection between minimax and Bayes rules

Bayes rule kadang juga minimax.

Gagasan utamanya:

- jika sebuah Bayes rule mempunyai risk function yang maximum-nya sama dengan Bayes risk di bawah suatu prior;
- dan tidak ada decision function lain yang mempunyai smaller maximum risk;

maka Bayes rule tersebut juga minimax.

Jadi:

$$
\boxed{
\text{Bayes optimality under a prior}
\quad\text{dapat membantu membuktikan}\quad
\text{minimax optimality}.
}
$$

---

# 7. The Theory in Practice

`[CF2 SUPPORTING CONTEXT]`

Miller menutup chapter dengan menghubungkan loss/risk criteria ke real decisions.

Practical decision analysis memerlukan:

1. clear set of possible actions;
2. model untuk uncertain states;
3. numerical consequences/losses yang masuk akal;
4. probabilities jika Bayes criterion digunakan;
5. sample information jika tersedia.

Mathematical optimization tidak dapat memperbaiki modeling assumptions yang buruk. Jika losses atau prior probabilities dinilai secara buruk, mathematically optimal rule dapat tetap buruk secara praktis.

---

# Chapter Synthesis

Unified statistical-decision structure:

$$
\boxed{
\theta
\rightarrow
X\sim f(x;\theta)
\rightarrow
d(X)
\rightarrow
L[d(X),\theta]
\rightarrow
R(d,\theta).
}
$$

Optimality kemudian tergantung pada criterion.

## Minimax

$$
\boxed{
d_{\text{MM}}
=
\arg\min_d
\sup_\theta R(d,\theta).
}
$$

## Bayes risk

$$
\boxed{
r(d)
=
E_\theta[R(d,\theta)].
}
$$

## Bayes rule

$$
\boxed{
d_B
=
\arg\min_d r(d).
}
$$

Equivalent posterior form:

$$
\boxed{
d_B(x)
=
\arg\min_a
E[L(a,\theta)\mid X=x].
}
$$

## Under squared-error loss

$$
\boxed{
d_B(x)
=
E(\theta\mid X=x).
}
$$

---

# Key Relationships

## Loss and risk

$$
\boxed{
R(d,\theta)
=
E_\theta[L(d(X),\theta)].
}
$$

Risk adalah sampling-average consequence dari decision rule pada fixed true state.

## MSE as risk

Di bawah squared-error loss:

$$
\boxed{
R(d,\theta)
=
\operatorname{MSE}_\theta(d).
}
$$

dan:

$$
\boxed{
\operatorname{MSE}
=
\operatorname{Var}(\hat\theta)
+
\operatorname{Bias}(\hat\theta)^2.
}
$$

Ini menjelaskan mengapa biased estimator dapat mengungguli unbiased estimator di bawah MSE/minimax criteria.

## Frequentist vs Bayesian weighting

Frequentist risk:

$$
R(d,\theta)
$$

dievaluasi untuk setiap fixed $\theta$.

Bayesian risk menambahkan prior averaging:

$$
r(d)
=
E_\theta[R(d,\theta)].
$$

---

# Decision-Theory Snapshot

| Object | Meaning |
|---|---|
| $\theta$ | state of Nature / unknown parameter |
| $a$ | action |
| $X$ | observed random data |
| $d(X)$ | decision function |
| $L(a,\theta)$ | loss dari action $a$ ketika truth adalah $\theta$ |
| $R(d,\theta)$ | expected loss atas sampling pada fixed $\theta$ |
| $\pi(\theta)$ | prior distribution |
| $r(d)$ | Bayes risk |
| minimax rule | meminimumkan worst-case risk |
| Bayes rule | meminimumkan prior-weighted risk |

---

# CF2 Connection Map

| Miller Chapter 9 section | CF2 connection |
|---|---|
| §9.1 Introduction | inferential decision framework; expected loss |
| §9.2 Theory of Games | supporting decision-theory language |
| §9.3 Statistical Games | estimator/test sebagai decision functions |
| §9.4 Decision Criteria | foundation untuk estimator/test optimality |
| §9.5 Minimax Criterion | [[4.6 Sifat-Sifat Estimator]] supporting theory |
| §9.6 Bayes Criterion | [[4.5 Estimasi Parameter]] — Bayesian reasoning |
| §9.7 Theory in Practice | applied inference/decision context |

> [!NOTE] Scope relation
> Silabus CF2 memasukkan Miller Chapter 9 penuh sebagai official Topik 4 reference. Chapter ini terutama menjadi conceptual foundation untuk:
>
> - Bayesian estimation;
> - comparison of estimators melalui loss/risk, bukan unbiasedness saja;
> - memahami estimation dan hypothesis testing sebagai decision procedures.

---

# Quick Reading Review

1. Apa perbedaan action dan state of Nature?
2. Mengapa Miller merepresentasikan profit sebagai negative loss?
3. Bagaimana manufacturer example mengilustrasikan Bayes criterion?
4. Apa yang dioptimalkan minimax criterion?
5. Apa yang berubah ketika ordinary game menjadi **statistical game**?
6. Definisikan decision function $d(x)$.
7. Definisikan loss function.
8. Definisikan risk function.
9. Mengapa risk merupakan fungsi dari true parameter?
10. Bagaimana squared-error risk menjadi MSE?
11. Mengapa tidak ada satu rule yang umumnya meminimumkan risk untuk seluruh $\theta$?
12. Nyatakan formal minimax optimization.
13. Definisikan Bayes risk.
14. Apa perbedaan Bayes risk dan frequentist risk?
15. Apa posterior expected-loss form dari Bayes rule?
16. Mengapa posterior mean meminimumkan squared-error posterior loss?
17. Mengapa biased estimator dapat minimax?
18. Apa peran minimax Binomial estimator dalam memahami bias-vs-risk tradeoff?
19. Bagaimana Bayes rule dapat sekaligus minimax?
20. Mengapa specification dari loss dan prior merupakan substantive modeling choices?

---

# Compression Notes

Dipertahankan secara detail:

- manufacturer expected-loss example;
- minimax intuition;
- game-theoretic framing;
- statistical games dan decision functions;
- loss/risk definitions;
- estimation dengan squared-error loss;
- minimax dan Bayes criteria;
- Binomial minimax estimator;
- Bayes risk dan posterior expected loss;
- posterior mean under quadratic loss;
- hubungan Bayes dan minimax.

Dikompres:

- extended ordinary-game terminology yang tidak penting untuk inference;
- repetitive finite game tables;
- most exercises dan alternative decision criteria;
- long numerical calculations dengan structure yang sama;
- historical remarks.

---

# Source Traceability

Primary source: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 9 dalam `Topik 4 - [Miller].pdf`.

Source-supported chapter structure:

1. Introduction
2. The Theory of Games
3. Statistical Games
4. Decision Criteria
5. The Minimax Criterion
6. The Bayes Criterion
7. The Theory in Practice

Key source elements preserved:

- manufacturer expected-loss example dan minimax intuition — §1;
- actions/states/game framing — §2;
- decision function, loss, risk — §3;
- minimax dan Bayes criteria — §4;
- Binomial minimax estimator — §5;
- prior-weighted/Bayes-risk reasoning — §6;
- practical modeling interpretation — §7.

Scope authority: Silabus CF2 explicitly includes Miller Chapter 9 dalam Topik 4.

Editorial framework: `Prompt_CF2_Condensed_Textbook_Notes.md`.

---

> [!SUMMARY] One-line takeaway
> **Miller Chapter 9 menunjukkan bahwa statistical inference pada dasarnya adalah decision problem: data masuk ke decision rule, consequences direpresentasikan oleh loss, average performance oleh risk, dan “optimal” selalu berarti optimal relatif terhadap criterion seperti minimax atau Bayes risk.**
