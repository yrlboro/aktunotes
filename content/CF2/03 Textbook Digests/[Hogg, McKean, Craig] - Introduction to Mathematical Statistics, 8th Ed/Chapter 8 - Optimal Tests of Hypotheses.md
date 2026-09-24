---
type: "condensed-book"
exam: "CF2"
book: "Introduction to Mathematical Statistics, 8th Edition"
author: "Robert V. Hogg, Joseph W. McKean, Allen T. Craig"
chapter: "8"
chapter_title: "Optimal Tests of Hypotheses"
cf2_topics: ["4.8"]
cf2_relevance: "Selective — official CF2 mapping uses §8.2"
source_scope: "Entire Chapter 8 reviewed for context; Section 8.2 is the official CF2-assigned section and is therefore condensed in high detail."
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggMcKeanCraig, HypothesisTesting, UMP, MLR, PowerFunction]
date_created: "2026-08-29"
status: "study-note"
---
# Hogg, McKean & Craig — Chapter 8: Optimal Tests of Hypotheses

> [!ABSTRACT] Chapter in One View
> Chapter 8 mengembangkan gagasan tentang **uji hipotesis terbaik**. Bab ini dimulai dari kerangka Neyman–Pearson untuk hipotesis sederhana melawan hipotesis sederhana, kemudian pada §8.2 diperluas menjadi **uniformly most powerful (UMP) tests** untuk alternatif satu sisi, lalu dilanjutkan ke likelihood-ratio tests dan pengembangan pengujian optimal lainnya. Untuk CF2, pemetaan resmi hanya menggunakan **§8.2**. Gagasan utamanya adalah: jika likelihood memiliki **monotone likelihood ratio (MLR)** terhadap suatu statistik $Y=u(X_1,\ldots,X_n)$, maka hipotesis satu sisi sering dapat diuji dengan aturan ekor sederhana seperti $Y\ge c$ atau $Y\le c$. Konstanta kritis dipilih dari distribusi di bawah hipotesis nol agar tingkat signifikansi yang diinginkan tercapai, sedangkan fungsi power mengukur seberapa besar peluang uji menolak $H_0$ ketika parameter sebenarnya bergerak ke wilayah alternatif.

---

# 1. Scope Map

| Section | Topic | CF2 Treatment |
|---|---|---|
| 8.1 | Most Powerful Tests, Neyman–Pearson | `[CF2 SUPPORTING CONTEXT]` prasyarat untuk §8.2 |
| 8.2 | Uniformly Most Powerful Tests | `[CORE CF2]` |
| 8.3+ | Likelihood Ratio Tests dan materi pengujian optimal lanjutan | `[BEYOND EXPLICIT CF2 MAPPING]` hanya konteks singkat |

Catatan silabus terkait:

- [[4.8 Uji Hipotesis]]

Konsep CF2 penting yang didukung bab ini:

- hipotesis nol dan alternatif;
- daerah kritis;
- tingkat signifikansi / galat Tipe I;
- galat Tipe II;
- fungsi power;
- uji terbaik / most powerful;
- uniformly most powerful;
- monotone likelihood ratio;
- alternatif satu sisi;
- arah statistik uji;
- hubungan dengan sufficient statistic.

---

# 2. Supporting Context from §8.1 — Most Powerful Tests

`[CF2 SUPPORTING CONTEXT]`

Sebelum UMP dapat dipahami, textbook meninjau kembali kerangka dasar uji hipotesis.

Misalkan

$$
X_1,\ldots,X_n
$$

merupakan random sample dari distribusi dengan PMF/PDF

$$
f(x;\theta),
\qquad \theta\in\Omega.
$$

Parameter space dibagi menjadi dua bagian yang saling lepas:

$$
H_0:\theta\in\omega_0,
\qquad
H_1:\theta\in\omega_1.
$$

Suatu uji ditentukan oleh **critical region** $C$:

$$
\text{tolak }H_0
\quad\text{jika}\quad
\mathbf{X}\in C.
$$

Komplemen $C^c$ berarti $H_0$ tidak ditolak.

---

## 2.1 Type I error and size

Galat Tipe I terjadi ketika $H_0$ ditolak padahal $H_0$ benar.

Untuk null hypothesis komposit, tingkat signifikansi / size adalah

$$
\alpha
=
\max_{\theta\in\omega_0}
P_\theta(\mathbf{X}\in C).
$$

Untuk null hypothesis sederhana

$$
H_0:\theta=\theta_0,
$$

rumusnya menjadi

$$
\alpha
=
P_{\theta_0}(\mathbf{X}\in C).
$$

---

## 2.2 Power function

Fungsi power didefinisikan sebagai

$$
\gamma_C(\theta)
=
P_\theta(\mathbf{X}\in C).
$$

Interpretasi:

- di bawah $H_0$, ini adalah probabilitas penolakan / probabilitas galat Tipe I;
- di bawah $H_1$, ini adalah probabilitas uji dengan benar menolak $H_0$.

Dengan demikian, uji yang baik berusaha menjaga

$$
\text{probabilitas penolakan kecil ketika }H_0\text{ benar}
$$

sambil mempertahankan

$$
\text{probabilitas penolakan besar ketika }H_1\text{ benar}.
$$

---

# 3. Neyman–Pearson Logic

Untuk hipotesis sederhana

$$
H_0:\theta=\theta_0
\qquad \text{vs.} \qquad
H_1:\theta=\theta_1,
$$

likelihood adalah

$$
L(\theta;\mathbf{x})
=
\prod_{i=1}^n f(x_i;\theta).
$$

Teorema Neyman–Pearson menyatakan bahwa critical region terbaik dengan size $\alpha$ diperoleh dengan menolak $H_0$ pada outcome yang membuat likelihood di bawah null relatif kecil dibandingkan likelihood di bawah alternatif:

$$
\frac{L(\theta_0;\mathbf{x})}
{L(\theta_1;\mathbf{x})}
\le k.
$$

Secara ekuivalen, reciprocal likelihood ratio dapat digunakan dengan arah pertidaksamaan dibalik.

Konstanta $k$ dipilih sehingga

$$
P_{\theta_0}(\mathbf{X}\in C)=\alpha.
$$

> [!IMPORTANT] Core Intuition
> Tolak $H_0$ untuk outcome sampel yang **jauh lebih kompatibel dengan $H_1$** daripada dengan $H_0$.

---

## 3.1 [TEXTBOOK EXAMPLE] Normal mean

Misalkan

$$
X_i\sim N(\theta,1)
$$

dan diuji

$$
H_0:\theta=0
\qquad \text{vs.} \qquad
H_1:\theta=1.
$$

Likelihood ratio menyederhana menjadi

$$
\frac{L(0;\mathbf{x})}{L(1;\mathbf{x})}
=
\exp\left(
-\sum_{i=1}^n x_i+\frac{n}{2}
\right).
$$

Karena ekspresi tersebut menurun ketika

$$
\sum_{i=1}^n x_i
$$

meningkat, uji terbaik menolak untuk nilai statistik yang besar:

$$
\sum_{i=1}^n X_i\ge c.
$$

Secara ekuivalen,

$$
\bar X\ge c_1.
$$

Di bawah $H_0$,

$$
\bar X\sim N\left(0,\frac{1}{n}\right),
$$

maka $c_1$ dipilih dari upper tail:

$$
P_0(\bar X\ge c_1)=\alpha.
$$

Contoh sederhana ini menjadi preview seluruh konstruksi MLR/UMP di §8.2.

---

# 4. Section 8.2 — Uniformly Most Powerful Tests

`[CORE CF2]`

## 4.1 Why UMP is needed

Neyman–Pearson secara langsung menyelesaikan

$$
\text{simple }H_0
\qquad \text{vs.} \qquad
\text{simple }H_1.
$$

Namun banyak problem memiliki alternatif komposit seperti

$$
H_1:\theta>\theta_0.
$$

Artinya terdapat tak terhingga banyak nilai alternatif yang mungkin:

$$
\theta=\theta_1,\theta_2,\theta_3,\ldots
$$

Suatu uji yang terbaik terhadap satu nilai alternatif belum tentu otomatis terbaik terhadap nilai alternatif lainnya.

Idealnya, kita memiliki satu uji yang paling powerful **secara simultan untuk setiap nilai parameter dalam wilayah alternatif**.

---

# 5. Definition of UMP Test

Suatu critical region $C$ dengan size $\alpha$ disebut **uniformly most powerful** untuk menguji simple null hypothesis terhadap composite alternative apabila $C$ merupakan most powerful critical region berukuran $\alpha$ terhadap **setiap simple alternative yang termasuk dalam composite alternative tersebut**.

Secara simbolik, untuk

$$
H_0:\theta=\theta_0
$$

melawan

$$
H_1:\theta\in\omega_1,
$$

$C$ adalah UMP jika untuk setiap $\theta\in\omega_1$,

$$
\gamma_C(\theta)
$$

sekurang-kurangnya sebesar power dari uji lain mana pun yang memiliki level sama.

> [!IMPORTANT] Meaning of “Uniformly”
> Aturan penolakan yang sama tetap terbaik di seluruh wilayah parameter alternatif, bukan hanya pada satu nilai alternatif tertentu.

---

# 6. [TEXTBOOK EXAMPLE] Exponential-Scale Family

Textbook mempertimbangkan

$$
f(x;\theta)
=
\frac{1}{\theta} e^{-x/\theta},
\qquad x>0.
$$

Untuk random sample berukuran $2$, diuji

$$
H_0:\theta=2
$$

melawan

$$
H_1:\theta>2.
$$

Critical region berbentuk

$$
X_1+X_2\ge 9.5
$$

memiliki level kira-kira $0.05$.

Fungsi power yang diberikan adalah

$$
\gamma(\theta)
=
\left(
\frac{\theta+9.5}{\theta}
\right)e^{-9.5/\theta},
\qquad
\theta\ge2.
$$

Contoh nilainya:

$$
\gamma(2)\approx0.05,
$$

$$
\gamma(4)\approx0.31,
$$

$$
\gamma(9.5)=\frac{2}{e}\approx0.74.
$$

Fakta struktural terpenting adalah bahwa critical region yang sama tetap terbaik terhadap setiap simple alternative

$$
\theta>2.
$$

Inilah arti konsep UMP.

---

# 7. Sufficient Statistic Connection

Misalkan

$$
Y=u(X_1,\ldots,X_n)
$$

adalah sufficient statistic untuk $\theta$.

Dari factorization theorem,

$$
L(\theta;\mathbf{x})
=
k_1(u(\mathbf{x});\theta)
k_2(\mathbf{x}),
$$

dengan $k_2$ tidak bergantung pada $\theta$.

Karena itu, untuk $\theta_1,\theta_2$,

$$
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
=
\frac{k_1(u(\mathbf{x});\theta_1)}
{k_1(u(\mathbf{x});\theta_2)}.
$$

Jadi likelihood ratio hanya bergantung pada data melalui sufficient statistic $Y$.

> [!IMPORTANT] Consequence
> Jika sufficient statistic tersedia, pencarian uji best/UMP sering dapat direduksi dari seluruh sample vector $(X_1,\ldots,X_n)$ menjadi satu statistik $Y$.

Ini menunjukkan mengapa sufficiency penting dari sudut pandang pengujian.

---

# 8. Monotone Likelihood Ratio

## 8.1 Definition

Likelihood memiliki **monotone likelihood ratio (MLR)** pada statistik

$$
Y=u(\mathbf{X})
$$

jika untuk

$$
\theta_1<\theta_2,
$$

rasio

$$
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
$$

merupakan fungsi monoton dari

$$
y=u(\mathbf{x}).
$$

Textbook terutama mengembangkan kasus ketika rasio tersebut **menurun** terhadap $y$; kasus meningkat diperoleh dengan membalik arah pertidaksamaan.

---

## 8.2 Why MLR matters

Misalkan

$$
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
=
g(Y)
$$

dengan $g$ menurun.

Kondisi Neyman–Pearson

$$
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
\le k
$$

maka ekuivalen dengan

$$
Y\ge c.
$$

Jadi region likelihood-ratio berubah menjadi aturan statistik uji **upper-tail** yang sederhana.

Arah yang sama terus berlaku untuk semua

$$
\theta_2>\theta_1.
$$

Inilah mekanisme utama yang menghasilkan UMP one-sided test.

---

# 9. Main UMP Result for One-Sided Alternatives

Pertimbangkan

$$
H_0:\theta\le\theta_0
$$

melawan

$$
H_1:\theta>\theta_0.
$$

Misalkan likelihood mempunyai **decreasing MLR** terhadap statistik $Y$.

Maka UMP level-$\alpha$ test berbentuk

$$
\boxed{
\text{Tolak }H_0
\text{ jika }
Y\ge c.
}
$$

Konstanta kritis ditentukan dari nilai boundary pada null:

$$
\boxed{
\alpha
=
P_{\theta_0}(Y\ge c).
}
$$

Mengapa $\theta_0$ yang digunakan? Karena power function nondecreasing terhadap $\theta$, sehingga probabilitas penolakan terbesar di dalam wilayah

$$
\theta\le\theta_0
$$

terjadi pada batas $\theta_0$.

---

## 9.1 Reverse one-sided case

Untuk

$$
H_0:\theta\ge\theta_0
$$

melawan

$$
H_1:\theta<\theta_0,
$$

dengan arah MLR yang sesuai, aturan UMP menjadi

$$
\boxed{
\text{Tolak }H_0
\text{ jika }
Y\le c.
}
$$

dengan

$$
\alpha
=
P_{\theta_0}(Y\le c).
$$

> [!DANGER] Hypothesis-Direction Trap
> Arah pertidaksamaan pada rejection rule ditentukan oleh arah alternatif **dan** arah MLR. Jangan otomatis menganggap “statistik besar = tolak”.

---

# 10. Power Function Monotonicity

Untuk upper-tail UMP rule

$$
C=\{Y\ge c\},
$$

fungsi power adalah

$$
\gamma(\theta)
=
P_\theta(Y\ge c).
$$

Di bawah kondisi MLR dalam textbook, power function ini nondecreasing terhadap $\theta$.

Karena itu,

$$
\theta_1<\theta_2
\implies
\gamma(\theta_1)\le\gamma(\theta_2).
$$

Konsekuensinya:

1. probabilitas penolakan terbesar di bawah $H_0:\theta\le\theta_0$ terjadi pada $\theta_0$;
2. test memiliki level $\alpha$ jika

$$
\gamma(\theta_0)=\alpha;
$$

3. ketika parameter bergerak ke wilayah upper alternative, power meningkat.

Textbook juga menyatakan bahwa MLR tests ini bersifat unbiased pada setting tersebut.

---

# 11. [TEXTBOOK EXAMPLE] Bernoulli Family

Misalkan

$$
X_1,\ldots,X_n
$$

iid Bernoulli$(\theta)$, dengan

$$
0<\theta<1.
$$

Likelihood:

$$
L(\theta;\mathbf{x})
=
\theta^{\sum x_i}
(1-\theta)^{n-\sum x_i}.
$$

Untuk

$$
\theta_1<\theta_2,
$$

diperoleh

$$
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
=
\left[
\frac{\theta_1(1-\theta_2)}
{\theta_2(1-\theta_1)}
\right]^{\sum x_i}
\left(
\frac{1-\theta_1}
{1-\theta_2}
\right)^n.
$$

Karena

$$
\frac{\theta_1(1-\theta_2)}
{\theta_2(1-\theta_1)}
<1,
$$

likelihood ratio menurun ketika

$$
Y=\sum_{i=1}^nX_i
$$

meningkat.

Jadi likelihood memiliki MLR dalam

$$
Y=\sum X_i.
$$

Untuk

$$
H_0:\theta\le\theta_0
\qquad \text{vs.} \qquad
H_1:\theta>\theta_0,
$$

UMP rule adalah

$$
\boxed{
\text{Tolak }H_0
\text{ jika }
\sum X_i\ge c.
}
$$

Karena

$$
Y\sim\operatorname{Binomial}(n,\theta),
$$

$c$ dipilih dari

$$
P_{\theta_0}(Y\ge c)=\alpha
$$

jika level tersebut dapat dicapai secara tepat.

Interpretasi: jika alternatif menyatakan success probability lebih tinggi, maka jumlah success yang luar biasa besar menjadi bukti melawan $H_0$.

---

# 12. Exponential-Family Generalization

Textbook kemudian menunjukkan mengapa MLR muncul secara alami dalam regular one-parameter exponential family.

Misalkan

$$
f(x;\theta)
=
\exp\left[
p(\theta)K(x)+H(x)+q(\theta)
\right],
\qquad x\in S,
$$

dengan:

- support $S$ tidak bergantung pada $\theta$;
- $p(\theta)$ meningkat terhadap $\theta$.

Untuk iid sample,

$$
L(\theta;\mathbf{x})
=
\exp\left[
p(\theta)\sum_{i=1}^nK(x_i)
+
\sum_{i=1}^nH(x_i)
+
nq(\theta)
\right].
$$

Untuk $\theta_1<\theta_2$,

$$
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
=
\exp\left\{
[p(\theta_1)-p(\theta_2)]
\sum_{i=1}^nK(x_i)
+
n[q(\theta_1)-q(\theta_2)]
\right\}.
$$

Karena

$$
p(\theta_1)-p(\theta_2)<0,
$$

rasio ini menurun terhadap

$$
Y=\sum_{i=1}^nK(X_i).
$$

Maka family tersebut mempunyai MLR dalam $Y$.

Dengan demikian, untuk

$$
H_0:\theta\le\theta_0
\qquad \text{vs.} \qquad
H_1:\theta>\theta_0,
$$

UMP test adalah

$$
\boxed{
\text{Tolak }H_0
\text{ jika }
\sum_{i=1}^nK(X_i)\ge c.
}
$$

Untuk arah sebaliknya,

$$
H_0:\theta\ge\theta_0
\qquad \text{vs.} \qquad
H_1:\theta<\theta_0,
$$

tolak jika

$$
\sum_{i=1}^nK(X_i)\le c.
$$

---

# 13. Critical-Value Mechanics

Setelah statistik UMP dan arah rejection diketahui, sisanya merupakan problem sampling distribution.

Prosedur generik:

```text
1. Tulis H0 dan H1.
2. Bentuk likelihood L(θ).
3. Bandingkan L(θ1)/L(θ2), dengan θ1 < θ2.
4. Identifikasi statistik Y tempat rasio tersebut monoton.
5. Tentukan apakah rejection berada di upper tail atau lower tail.
6. Tentukan null distribution dari Y.
7. Gunakan boundary null parameter θ0 untuk menetapkan α.
8. Selesaikan critical value c.
9. Hitung power γ(θ) di bawah alternatif jika diminta.
```

Upper-tail:

$$
P_{\theta_0}(Y\ge c)=\alpha.
$$

Lower-tail:

$$
P_{\theta_0}(Y\le c)=\alpha.
$$

---

# 14. Power Calculation

Setelah critical region tetap, power function dihitung dari event yang sama di bawah parameter umum.

Upper-tail test:

$$
\gamma(\theta)
=
P_\theta(Y\ge c).
$$

Lower-tail test:

$$
\gamma(\theta)
=
P_\theta(Y\le c).
$$

Ini bukan uji baru. Critical constant $c$ tetap; hanya distribusi $Y$ yang berubah terhadap $\theta$.

> [!WARNING] Power Trap
> Jangan menghitung ulang $c$ untuk setiap parameter alternatif. $c$ dikalibrasi sekali dari null level, lalu power dievaluasi menggunakan $c$ yang sama.

---

# 15. Discrete Tests and Attainable Significance Levels

Untuk statistik diskrit seperti

$$
Y\sim\operatorname{Binomial}(n,\theta_0),
$$

level yang diinginkan seperti $0.05$ mungkin tidak dapat dicapai secara tepat karena tail probability meloncat secara diskrit.

Teori textbook sering menuliskan

$$
P_{\theta_0}(Y\ge c)=\alpha
$$

untuk $\alpha$ yang attainable.

Pada kasus diskrit nyata, non-randomized test dapat menghasilkan level konservatif terdekat jika randomized test tidak digunakan.

`[TEXTBOOK CONTEXT]` Chapter ini menekankan struktur UMP, bukan pengembangan lengkap teori randomized tests.

---

# 16. UMP Does Not Automatically Exist

Textbook menekankan bahwa UMP test bersifat khusus. UMP sering muncul pada one-sided alternative di bawah kondisi MLR.

Untuk two-sided alternative seperti

$$
H_1:\theta\neq\theta_0,
$$

test yang paling powerful terhadap $\theta>\theta_0$ biasanya menggunakan satu tail, sedangkan test paling powerful terhadap $\theta<\theta_0$ menggunakan tail yang berlawanan.

Karena itu, satu uji umumnya tidak dapat simultaneously most powerful ke kedua arah.

Ini menjelaskan mengapa

$$
H_0:\theta=\theta_0
\qquad \text{vs.} \qquad
H_1:\theta\neq\theta_0
$$

sering **tidak memiliki UMP test**.

> [!IMPORTANT] One-Sided vs Two-Sided
> MLR sangat berguna ketika alternatif memiliki arah terurut. Two-sided alternative biasanya menghilangkan uniform ordering tersebut.

---

# 17. Exam-Oriented Recognition Table

| Problem Cue | Mathematical Structure | Likely Test Form |
|---|---|---|
| $H_1:\theta>\theta_0$, likelihood ratio menurun dalam $Y$ | MLR upper alternative | tolak untuk $Y\ge c$ |
| $H_1:\theta<\theta_0$, arah MLR terkait | lower alternative | tolak untuk $Y\le c$ |
| Parameter Bernoulli meningkat | $Y=\sum X_i$ meningkat bersama evidence | upper-tail Binomial |
| Mean Normal, variance diketahui, alternatif mean lebih besar | $\bar X$ atau $\sum X_i$ | upper-tail Normal |
| Variance Normal lebih besar | statistik berbasis $\sum X_i^2$ | upper-tail quadratic statistic |
| Scale Exponential $\theta$ lebih besar | $\sum X_i$ | upper-tail Gamma |
| Two-sided alternative | arah optimal saling berlawanan | UMP mungkin tidak ada |
| Sufficient statistic diberikan | likelihood ratio hanya bergantung padanya | dasar test pada sufficient statistic |

---

# 18. Key Distinctions

## 18.1 Most powerful vs UMP

**Most powerful:** terbaik untuk satu simple alternative tertentu.

**UMP:** terbaik secara simultan untuk setiap simple alternative di dalam composite alternative.

---

## 18.2 Size vs power

Size:

$$
\alpha
=
\max_{\theta\in H_0}
P_\theta(\text{tolak }H_0).
$$

Power:

$$
\gamma(\theta)
=
P_\theta(\text{tolak }H_0).
$$

Event penolakannya sama, tetapi wilayah parameter dan interpretasinya berbeda.

---

## 18.3 Test statistic vs critical value

Statistik:

$$
Y=u(X_1,\ldots,X_n).
$$

Critical value:

$$
c.
$$

Decision rule:

$$
Y\ge c
\quad\text{atau}\quad
Y\le c.
$$

Jangan mencampuradukkan test statistic dengan threshold.

---

## 18.4 MLR vs likelihood ratio test

MLR adalah **property dari family likelihood ketika parameter berubah**.

Likelihood-ratio test adalah konstruksi pengujian tertentu. Property MLR memungkinkan hasil Neyman–Pearson untuk banyak simple alternative tersusun menjadi satu UMP one-sided rule.

---

# 19. Section 8.3 and Beyond — Brief Context Only

`[BEYOND EXPLICIT CF2 MAPPING]`

Setelah UMP tests, Chapter 8 membahas likelihood-ratio tests untuk hipotesis yang lebih umum. Textbook menekankan bahwa UMP dapat gagal eksis pada general composite hypotheses, khususnya two-sided problems. Selanjutnya dibahas metode likelihood ratio untuk perbandingan mean/variance Normal serta perilaku exact, asymptotic, dan robustness.

Untuk condensed note CF2 ini, bagian tersebut tidak diperluas karena pemetaan resmi Hogg–McKean–Craig secara spesifik menunjuk §8.2.

---

# 20. Formula Map

## Power function

$$
\boxed{
\gamma(\theta)
=
P_\theta(\mathbf{X}\in C)
}
$$

## Level for composite null

$$
\boxed{
\alpha
=
\max_{\theta\in\omega_0}
\gamma(\theta)
}
$$

## Neyman–Pearson ratio

$$
\boxed{
\frac{L(\theta_0;\mathbf{x})}
{L(\theta_1;\mathbf{x})}
\le k
}
$$

## MLR definition

Untuk $\theta_1<\theta_2$,

$$
\boxed{
\frac{L(\theta_1;\mathbf{x})}
{L(\theta_2;\mathbf{x})}
=
g(u(\mathbf{x}))
}
$$

dengan $g$ monoton.

## One-sided UMP, decreasing MLR

$$
\boxed{
H_0:\theta\le\theta_0
\qquad \text{vs.} \qquad
H_1:\theta>\theta_0
}
$$

$$
\boxed{
\text{tolak jika }Y\ge c,
\qquad
P_{\theta_0}(Y\ge c)=\alpha
}
$$

## Reverse alternative

$$
\boxed{
H_0:\theta\ge\theta_0
\qquad \text{vs.} \qquad
H_1:\theta<\theta_0
}
$$

$$
\boxed{
\text{tolak jika }Y\le c,
\qquad
P_{\theta_0}(Y\le c)=\alpha
}
$$

---

# 21. Chapter Synthesis

Untuk CF2, alur reasoning inti Chapter 8 adalah:

```text
Hipotesis
      ↓
Likelihood
      ↓
Likelihood ratio untuk θ1 < θ2
      ↓
Identifikasi statistik monoton Y
      ↓
Arah MLR
      ↓
One-sided tail rejection rule
      ↓
Null distribution dari Y
      ↓
Pilih c untuk memperoleh α
      ↓
Evaluasi γ(θ) di bawah alternatif
      ↓
Interpretasi UMP
```

Pelajaran utama bukan menghafal formula UMP secara terpisah, tetapi mengenali bahwa one-sided optimal test muncul karena **likelihood evidence bergerak secara monoton terhadap suatu statistik**.

---

# 22. Compression Notes

### Preserved in high detail

- notasi pengujian;
- critical region;
- size dan power;
- intuisi Neyman–Pearson sebagai prasyarat;
- definisi UMP;
- definisi MLR;
- logika yang menghubungkan MLR dengan tail critical region;
- monotonicity dari power;
- hubungan sufficient statistic;
- contoh Bernoulli;
- generalisasi regular exponential family;
- one-sided direction rules;
- alasan UMP dapat gagal pada two-sided alternatives.

### Compressed / omitted

- pembuktian formal Neyman–Pearson yang panjang;
- latihan berulang;
- software commands;
- contoh likelihood-ratio detail di §8.3+;
- simulasi robustness dan pengembangan optimal-testing lain di luar explicit CF2 mapping.

---

# 23. Source Traceability

| Material | Source |
|---|---|
| Definisi hypothesis, critical region, size, power | Hogg, McKean & Craig §8.1 |
| Most-powerful / Neyman–Pearson setup | §8.1 |
| Contoh likelihood-ratio mean Normal | Example 8.1.2 |
| Definisi UMP | Definition 8.2.1 |
| Contoh UMP exponential-scale dan power function | Example 8.2.1 |
| Implikasi sufficient statistic untuk optimal test | §8.2 |
| Definisi monotone likelihood ratio | Definition 8.2.2 |
| MLR $\Rightarrow$ UMP tail rule | §8.2, Eqs. (8.2.1)–(8.2.3) |
| Power monotonicity under MLR | §8.2 |
| Contoh Bernoulli MLR | Example 8.2.5 |
| Derivasi MLR regular exponential family | §8.2 |
| Upper/lower one-sided UMP rules | Eqs. (8.2.5)–(8.2.6) |
| Isu nonexistence UMP two-sided | §8.2 exercises / transition to §8.3 |
| Otoritas scope CF2 | Silabus CF2: Hogg, McKean & Craig §8.2 |

*Ref: Hogg, McKean & Craig, Introduction to Mathematical Statistics, 8th ed., Chapter 8 — official CF2 scope centered on §8.2.*
