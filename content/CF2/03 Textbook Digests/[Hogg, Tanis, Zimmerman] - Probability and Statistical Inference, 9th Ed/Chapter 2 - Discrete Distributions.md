---
type: "condensed-book"
exam: "CF2"
book: "Probability and Statistical Inference, 9th Edition"
author: "Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman"
chapter: "2"
chapter_title: "Discrete Distributions"
cf2_topics: ["2.1", "2.3", "2.5"]
cf2_relevance: "High"
source_scope: "Chapter 2; Sections 2.1-2.6"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggTanis]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, Tanis & Zimmerman — Chapter 2: Discrete Distributions

> [!ABSTRACT] Chapter in One View
> Chapter ini mengubah probability dari bahasa **events** menjadi bahasa **random variables dan probability models**. Penulis pertama-tama mendefinisikan random variable diskrit, support, PMF, dan CDF, lalu memperkenalkan mathematical expectation sebagai weighted average terhadap probability mass. Dari expectation muncul moments, variance, standard deviation, factorial moments, dan moment-generating function (MGF). Setelah alat umum ini dibangun, chapter mengembangkan tiga keluarga model diskrit utama: **Binomial** untuk jumlah success dalam fixed number of independent Bernoulli trials, **Negative Binomial/Geometric** untuk jumlah trial sampai success ke-$r$, dan **Poisson** untuk count occurrences pada suatu Poisson process. Hypergeometric diperkenalkan lebih awal sebagai model sampling tanpa replacement dan kemudian dibandingkan dengan Binomial. Sepanjang chapter, mekanisme probabilistik menentukan support dan PMF; mean, variance, serta MGF kemudian diturunkan dari model tersebut. Seluruh Chapter 2 termasuk referensi resmi Topik 2 CF2.

## 1. Why This Chapter Exists

Chapter 1 memberi probability pada events. Chapter 2 memerlukan objek yang lebih fleksibel: sering kali yang penting bukan outcome elementer eksperimen, melainkan **angka** yang diringkas dari outcome tersebut—jumlah defect, jumlah success, payoff, waktu trial ke-success tertentu, atau count kejadian.

Random variable menjadi jembatan dari outcome space ke real numbers. Setelah suatu random variable didefinisikan, probability distribution-nya dapat dipelajari tanpa harus terus kembali ke seluruh outcome space. Karena Chapter 2 berfokus pada random variables dengan support finite atau countably infinite, probability didistribusikan dalam bentuk **mass** pada titik-titik support.

Progression chapter sengaja bersifat bertingkat:

1. definisikan random variable dan distribusinya;
2. rangkum distribusi melalui expectation dan moments;
3. bangun MGF sebagai alat untuk menghasilkan moments dan mengenali distribution;
4. terapkan kerangka tersebut pada model diskrit yang muncul berulang kali dalam probability dan statistics.

Setelah chapter ini, pembaca seharusnya dapat membedakan experiment dari random variable, menuliskan support dan PMF/CDF, menghitung expectation/variance/moments, menggunakan MGF, serta memilih model diskrit sesuai mekanisme eksperimennya.

## 2. Chapter Map

- **2.1 Random Variables of the Discrete Type**
  - random variable sebagai real-valued function
  - discrete support, PMF, CDF
  - discrete uniform distribution
  - hypergeometric distribution
- **2.2 Mathematical Expectation**
  - expectation of $X$
  - expectation of a function $u(X)$
  - linearity of expectation
  - representative applications
- **2.3 Special Mathematical Expectations**
  - mean, moments, central moments
  - variance dan standard deviation
  - computational identity for variance
  - factorial moments
  - MGF dan derivatives
- **2.4 The Binomial Distribution**
  - Bernoulli trial dan Bernoulli distribution
  - Binomial mechanism dan PMF
  - mean, variance, MGF
  - relationship dengan Hypergeometric
- **2.5 The Negative Binomial Distribution**
  - waiting for the $r$th success
  - Geometric sebagai $r=1$
  - CDF/tail Geometric
  - mean, variance, MGF
- **2.6 The Poisson Distribution**
  - approximate Poisson process
  - Poisson PMF
  - mean, variance, MGF
  - rate scaling
  - Poisson approximation to Binomial

| Textbook Section | CF2 Relevance | Connected Syllabus Note |
|---|---|---|
| 2.1 Random Variables of the Discrete Type | Core | [[2.1 Variabel Acak Diskrit]], [[2.5 Distribusi Diskrit Umum]] |
| 2.2 Mathematical Expectation | Core | [[2.1 Variabel Acak Diskrit]] |
| 2.3 Special Mathematical Expectations | Core | [[2.1 Variabel Acak Diskrit]], [[2.3 Fungsi Pembangkit]] |
| 2.4 The Binomial Distribution | Core | [[2.5 Distribusi Diskrit Umum]] |
| 2.5 The Negative Binomial Distribution | Core | [[2.5 Distribusi Diskrit Umum]] |
| 2.6 The Poisson Distribution | Core | [[2.5 Distribusi Diskrit Umum]] |

---

## 3. 2.1 Random Variables of the Discrete Type

### From outcomes to measurements

Penulis memulai dengan gagasan bahwa outcome space dapat berisi objek yang bukan angka. Random variable memungkinkan outcome tersebut diberi representasi numerik.

Jika $S$ adalah outcome space dan $s\in S$, maka random variable $X$ adalah function yang mengassign tepat satu real number pada setiap outcome:

$$
X:S\to\mathbb R,
$$

$$
s\mapsto X(s)=x.
$$

Kumpulan nilai yang mungkin diambil $X$ disebut space dari $X$; dalam penggunaan modern note ini juga disebut **support** ketika yang dimaksud adalah nilai-nilai dengan positive probability.

[TEXTBOOK EXAMPLE] Jika outcome adalah sex seekor rat, $S=\{F,M\}$, penulis dapat mendefinisikan

$$
X(F)=0,\qquad X(M)=1.
$$

Hal pentingnya bukan coding $0/1$ itu sendiri, tetapi pemisahan antara **physical outcome** dan **numeric random variable**.

> [!WARNING] Important Distinction
> **Outcome space $S$ ≠ support random variable $X$.**
>
> Outcome space memuat hasil eksperimen asli. Support $X$ memuat nilai numerik yang dihasilkan oleh mapping $X(s)$. Beberapa outcomes berbeda dapat menghasilkan nilai $X$ yang sama.

### Discrete-type random variable

Jika set nilai yang dapat diambil $X$ finite atau countably infinite, $X$ disebut random variable of the discrete type.

Untuk discrete $X$, probability bahwa $X=x$ ditulis

$$
f(x)=P(X=x),
$$

dan $f$ disebut **probability mass function (PMF)**.

PMF harus memenuhi:

$$
f(x)\ge 0,
$$

$$
\sum_{x\in S} f(x)=1,
$$

serta untuk event $A$ yang berupa subset support,

$$
P(X\in A)=\sum_{x\in A}f(x).
$$

Textbook biasanya menganggap $f(x)=0$ di luar support walaupun frasa “zero elsewhere” tidak selalu ditulis.

### Cumulative distribution function

CDF didefinisikan untuk seluruh real $x$:

$$
F(x)=P(X\le x).
$$

Untuk discrete random variable,

$$
F(x)=\sum_{t\le x}f(t).
$$

Karena probability mass terkonsentrasi pada support points, CDF berbentuk **step function**: setiap jump pada $x$ sama dengan $P(X=x)$.

### Discrete uniform example

Untuk uniform pada $\{1,2,\ldots,m\}$,

$$
f(x)=\frac1m,\qquad x=1,2,\ldots,m.
$$

Jika $k=1,\ldots,m-1$, CDF adalah

$$
F(x)=
\begin{cases}
0, & x<1,\\
\dfrac{k}{m}, & k\le x<k+1,\\
1, & x\ge m.
\end{cases}
$$

Graph CDF memperlihatkan langsung hubungan antara mass dan jump size.

### Maximum of two four-sided dice

[TEXTBOOK EXAMPLE] Dua fair four-sided dice dilempar dan $X$ adalah maximum kedua outcomes. Support adalah

$$
S_X=\{1,2,3,4\}.
$$

Untuk $x=1,2,3,4$,

$$
P(X\le x)=\left(\frac{x}{4}\right)^2.
$$

Maka PMF dapat diperoleh dari difference CDF:

$$
P(X=x)=P(X\le x)-P(X\le x-1)
$$

$$
=\frac{x^2-(x-1)^2}{16}
=\frac{2x-1}{16}.
$$

Textbook menyajikan mass $1/16,3/16,5/16,7/16$, yang menekankan bahwa meskipun elementary outcomes equally likely, nilai random variable tidak harus equally likely.

### Hypergeometric distribution

Chapter memperkenalkan model sampling **without replacement**. Misalkan ada

- $N=N_1+N_2$ objects,
- $N_1$ objects class 1,
- $N_2$ objects class 2,
- dipilih $n$ objects secara random tanpa replacement,
- $X$ = number from class 1 yang terpilih.

Untuk feasible integer $x$,

$$
f(x)
=
\frac{\binom{N_1}{x}\binom{N_2}{n-x}}
{\binom{N}{n}}.
$$

Support bukan otomatis $0,1,\ldots,n$. Ia harus memenuhi sekaligus

$$
0\le x\le n,
$$

$$
x\le N_1,
$$

$$
n-x\le N_2.
$$

Equivalently,

$$
\max(0,n-N_2)\le x\le \min(n,N_1).
$$

[TEXTBOOK EXAMPLE] Dari 50 fish, 10 tagged dan 40 untagged. Jika 7 ditangkap tanpa replacement, probability tepat 2 tagged adalah

$$
P(X=2)
=
\frac{\binom{10}{2}\binom{40}{5}}
{\binom{50}{7}}
\approx 0.2964.
$$

> [!WARNING] Important Distinction
> **Hypergeometric ≠ Binomial.**
>
> Hypergeometric di section ini lahir dari finite population sampling **without replacement**. Trial-to-trial composition berubah. Binomial di Section 2.4 membutuhkan independent trials dengan constant success probability.

> [!INFO] CF2 Connection
> Section ini mendukung [[2.1 Variabel Acak Diskrit]] untuk PMF/CDF/support dan [[2.5 Distribusi Diskrit Umum]] untuk Hypergeometric.

---

## 4. 2.2 Mathematical Expectation

### Expected value as probability-weighted average

Jika discrete random variable $X$ memiliki PMF $f(x)$ pada support $S$, expectation didefinisikan sebagai

$$
E(X)=\sum_{x\in S}x f(x),
$$

jika sum tersebut exists dalam arti yang diperlukan textbook.

Penulis memotivasi expectation melalui repeated play dari game: jika payoff $x$ muncul dengan relative frequency mendekati $f(x)$, long-run average payoff mendekati weighted average $\sum xf(x)$.

[TEXTBOOK EXAMPLE] Payoff $X$ bernilai $1,2,3$ dengan probabilities $3/6,2/6,1/6$. Maka

$$
E(X)=1\left(\frac36\right)+2\left(\frac26\right)+3\left(\frac16\right)=\frac53.
$$

Expectation tidak harus merupakan salah satu possible values dari $X$.

### Expectation of a function

Jika

$$
Y=u(X),
$$

kita tidak harus terlebih dahulu mencari PMF $Y$. Textbook menunjukkan bahwa

$$
\boxed{E[u(X)]=\sum_{x\in S}u(x)f(x)}.
$$

Ini adalah salah satu hasil paling reusable di chapter.

Pada payoff example, jika $Y=X^2$,

$$
E(Y)=E(X^2)
=
\sum_x x^2f(x)
=
\frac{10}{3}.
$$

> [!WARNING] Important Distinction
> **$E[u(X)]$ umumnya bukan $u(E[X])$.**
>
> Textbook membangun expectation dari weighted values $u(x)$, bukan dengan memasukkan mean ke function.

### Linearity

Untuk constants $a,b$,

$$
E[aX+b]=aE(X)+b.
$$

Lebih umum, expectation bersifat linear terhadap finite sums selama expectations yang diperlukan exist. Konsep ini kemudian digunakan berulang kali untuk mean transformations dan sums.

### Hypergeometric mean through indicators

Pada hypergeometric sampling, textbook menggunakan indicator-style reasoning untuk menunjukkan bahwa expected number of class-1 objects dalam sample adalah

$$
\boxed{E(X)=n\frac{N_1}{N}}.
$$

Maknanya intuitif: expected proportion class 1 dalam sample sama dengan population proportion $N_1/N$.

### Geometric mean preview

Section ini juga mengembangkan contoh geometric waiting time dan memperoleh mean

$$
E(X)=\frac1p,
$$

yang kemudian disistematisasi dalam Section 2.5.

> [!INFO] CF2 Connection
> Mathematical expectation adalah fondasi mean, variance, moments, distribution properties, dan conditional/compound expectation pada chapter selanjutnya.

---

## 5. 2.3 Special Mathematical Expectations

Section ini mengkhususkan $E[u(X)]$ menjadi quantities yang merangkum location, spread, dan shape distribution.

### Mean as first raw moment

Mean adalah

$$
\mu=E(X)=\sum_x x f(x).
$$

Textbook mengaitkan istilah **moment** dengan weighted mechanical moments.

Raw moment ke-$k$ tentang origin:

$$
\mu_k'=E(X^k).
$$

Central moment ke-$k$ tentang mean:

$$
\mu_k=E[(X-\mu)^k].
$$

Central moment pertama selalu nol:

$$
E(X-\mu)=E(X)-\mu=0.
$$

### Variance and standard deviation

Variance adalah second central moment:

$$
\boxed{
\sigma^2=\operatorname{Var}(X)=E[(X-\mu)^2]
}.
$$

Standard deviation:

$$
\sigma=\sqrt{\operatorname{Var}(X)}.
$$

Dengan mengembangkan square,

$$
E[(X-\mu)^2]
=E(X^2)-2\mu E(X)+\mu^2,
$$

sehingga karena $E(X)=\mu$,

$$
\boxed{
\operatorname{Var}(X)=E(X^2)-[E(X)]^2
}.
$$

Ini adalah computational identity utama.

### Linear transformation

Jika

$$
Y=aX+b,
$$

maka

$$
E(Y)=aE(X)+b,
$$

sedangkan

$$
\operatorname{Var}(Y)=a^2\operatorname{Var}(X).
$$

Karena itu

$$
\sigma_Y=|a|\sigma_X.
$$

Menambahkan constant hanya menggeser location; tidak mengubah variance.

### Factorial moments

Textbook menggunakan factorial expectation

$$
E[X(X-1)]
$$

karena untuk beberapa discrete distributions algebra-nya lebih sederhana daripada langsung menghitung $E(X^2)$. Relationship-nya:

$$
X^2=X(X-1)+X,
$$

maka

$$
E(X^2)=E[X(X-1)]+E(X),
$$

sehingga

$$
\operatorname{Var}(X)
=
E[X(X-1)]+E(X)-[E(X)]^2.
$$

Untuk Hypergeometric, textbook menggunakan pendekatan factorial moment untuk memperoleh variance dalam bentuk

$$
\boxed{
\operatorname{Var}(X)
=
n\frac{N_1}{N}\left(1-\frac{N_1}{N}\right)
\frac{N-n}{N-1}
}.
$$

Faktor

$$
\frac{N-n}{N-1}
$$

mencerminkan finite-population effect dari sampling without replacement.

### Moment-generating function

MGF didefinisikan sebagai

$$
\boxed{
M_X(t)=E(e^{tX})
=\sum_{x\in S}e^{tx}f(x)
},
$$

untuk nilai $t$ di sekitar $0$ di mana expectation exists.

Jika MGF exists pada interval yang memuat $0$, derivatives menghasilkan raw moments:

$$
M_X'(0)=E(X),
$$

$$
M_X''(0)=E(X^2),
$$

lebih umum,

$$
M_X^{(k)}(0)=E(X^k).
$$

Dengan demikian,

$$
\operatorname{Var}(X)=M_X''(0)-[M_X'(0)]^2.
$$

Textbook juga menekankan uniqueness: jika dua distributions memiliki MGF yang sama pada neighborhood yang sesuai di sekitar $0$, distribution-nya sama.

### Geometric MGF preview

Untuk Geometric dengan support $x=1,2,\ldots$ dan PMF

$$
f(x)=p(1-p)^{x-1},
$$

MGF adalah

$$
M_X(t)
=
\frac{pe^t}{1-(1-p)e^t},
$$

untuk

$$
(1-p)e^t<1.
$$

Dari derivative di $0$ diperoleh

$$
E(X)=\frac1p,
$$

$$
\operatorname{Var}(X)=\frac{1-p}{p^2}.
$$

> [!NOTE] Assumption
> MGF bukan sekadar formal expression; existence/domain condition penting. Textbook menyatakan condition pada $t$ ketika geometric/negative-binomial MGF diturunkan.

---

## 6. 2.4 The Binomial Distribution

### Bernoulli experiment

Bernoulli experiment mempunyai dua outcomes yang mutually exclusive dan exhaustive, diberi label success/failure.

Jika

$$
P(\text{success})=p,
$$

maka

$$
P(\text{failure})=q=1-p.
$$

Untuk Bernoulli random variable,

$$
X=
\begin{cases}
1,&\text{success},\\
0,&\text{failure},
\end{cases}
$$

PMF dapat ditulis compact:

$$
f(x)=p^x(1-p)^{1-x},\qquad x=0,1.
$$

Mean dan variance:

$$
E(X)=p,
$$

$$
\operatorname{Var}(X)=p(1-p)=pq.
$$

### Sequence of Bernoulli trials

Binomial model membutuhkan:

1. Bernoulli experiment dilakukan fixed $n$ times;
2. trials independent;
3. success probability constant $p$ pada setiap trial;
4. $X$ menghitung total number of successes.

Untuk satu specific sequence dengan $x$ successes dan $n-x$ failures, independence memberi probability

$$
p^xq^{n-x}.
$$

Tetapi ada

$$
\binom nx
$$

distinct sequences dengan exactly $x$ successes. Karena mutually exclusive, probabilities dijumlahkan:

$$
\boxed{
P(X=x)
=
\binom nx p^xq^{n-x},
\qquad x=0,1,\ldots,n
}.
$$

Textbook menulis distribution sebagai

$$
X\sim b(n,p).
$$

### Why the combinatorial coefficient appears

Koefisien $\binom nx$ bukan bagian “misterius” formula. Ia menghitung **positions of successes**. Probability satu arrangement adalah $p^xq^{n-x}$; semua arrangements dengan $x$ successes mempunyai product yang sama karena $p$ constant dan trials independent.

### MGF, mean, variance

Menggunakan binomial expansion,

$$
M_X(t)
=
E(e^{tX})
=
\sum_{x=0}^n e^{tx}\binom nx p^xq^{n-x}
$$

$$
=
(q+pe^t)^n.
$$

Dengan derivatives:

$$
\boxed{E(X)=np},
$$

$$
\boxed{\operatorname{Var}(X)=npq}.
$$

Standard deviation:

$$
\sigma=\sqrt{npq}.
$$

### Hypergeometric comparison

Textbook kemudian menempatkan Binomial berdampingan dengan Hypergeometric. Jika sample without replacement berasal dari finite population dengan success fraction $N_1/N$, exact model adalah Hypergeometric. Binomial menjadi natural ketika trials dapat dipandang independent dengan constant $p$.

Hypergeometric variance memiliki finite population correction sedangkan Binomial tidak:

$$
\operatorname{Var}(X_{\text{hyper}})
=npq\frac{N-n}{N-1},
$$

versus

$$
\operatorname{Var}(X_{\text{bin}})=npq.
$$

Ketika sampled fraction kecil, correction factor mendekati $1$, sehingga shapes dapat sangat mirip—point yang divisualisasikan textbook melalui overlaid probability histograms.

---

## 7. 2.5 The Negative Binomial Distribution

### Stochastic mechanism

Sekarang fixed quantity bukan lagi number of trials. Kita melakukan independent Bernoulli trials dengan constant success probability $p$ **sampai success ke-$r$ terjadi**.

Definisikan

$$
X=\text{trial number on which the }r\text{th success occurs}.
$$

Agar $X=x$, trial ke-$x$ harus success, dan di first $x-1$ trials harus terdapat exactly $r-1$ successes. Oleh karena itu:

$$
\boxed{
P(X=x)
=
\binom{x-1}{r-1}p^r(1-p)^{x-r},
\qquad x=r,r+1,\ldots
}.
$$

> [!NOTE] Parameterization
> Hogg–Tanis Chapter 2 menggunakan **trial-count parameterization**: $X$ adalah total number of trials required to observe the $r$th success. Support dimulai pada $r$. Ini berbeda dari convention yang menghitung number of failures before the $r$th success.

### Geometric distribution

Untuk $r=1$,

$$
\boxed{
P(X=x)=p(1-p)^{x-1},\qquad x=1,2,\ldots
}.
$$

Ini adalah Geometric distribution dalam convention textbook: $X$ = trial number of first success.

Tail probability sangat sederhana:

$$
P(X>k)=q^k,
$$

karena $X>k$ berarti first $k$ trials semuanya failures.

Maka untuk positive integer $k$,

$$
F(k)=P(X\le k)=1-q^k.
$$

[TEXTBOOK EXAMPLE] Jika probability white-eyed fruit fly adalah $p=1/4$, maka probability perlu setidaknya 4 flies untuk melihat white-eyed pertama:

$$
P(X\ge4)=P(X>3)=\left(\frac34\right)^3.
$$

### Mean and variance

Untuk Negative Binomial trial-count convention:

$$
\boxed{E(X)=\frac rp},
$$

$$
\boxed{\operatorname{Var}(X)=\frac{r(1-p)}{p^2}}
$$

atau $rq/p^2$.

Geometric special case:

$$
E(X)=\frac1p,
$$

$$
\operatorname{Var}(X)=\frac{1-p}{p^2}.
$$

### MGF

Textbook menurunkan

$$
\boxed{
M_X(t)
=
\left[
\frac{pe^t}{1-(1-p)e^t}
\right]^r
},
$$

dengan condition

$$
(1-p)e^t<1.
$$

Derivative menghasilkan mean dan variance di atas.

[TEXTBOOK EXAMPLE] Jika seorang basketball player membuat free throw dengan probability $0.8$ dan $X$ adalah minimum attempts untuk mencapai 10 made shots, maka

$$
X\sim\text{Negative Binomial}(r=10,p=0.8)
$$

dalam parameterization textbook, sehingga

$$
E(X)=\frac{10}{0.8}=12.5,
$$

$$
\operatorname{Var}(X)=\frac{10(0.2)}{0.8^2}=3.125.
$$

---

## 8. 2.6 The Poisson Distribution

### From a counting process to the distribution

Textbook memotivasi Poisson distribution melalui **approximate Poisson process**. Secara intuitif, events occur singly and randomly through an interval, dengan rate rata-rata yang proportional terhadap interval length dan dengan small-interval behavior yang membuat multiple occurrences dalam interval sangat pendek negligible.

Jika mean number of occurrences per unit interval adalah $\lambda>0$, maka count $X$ dalam satu unit interval memiliki PMF

$$
\boxed{
P(X=x)=e^{-\lambda}\frac{\lambda^x}{x!},
\qquad x=0,1,2,\ldots
}.
$$

Textbook menurunkannya sebagai limiting/binomial-style approximation dari partition interval menjadi banyak subinterval kecil.

### Normalization

Karena expansion

$$
e^\lambda
=
\sum_{x=0}^{\infty}\frac{\lambda^x}{x!},
$$

maka

$$
\sum_{x=0}^{\infty}e^{-\lambda}\frac{\lambda^x}{x!}=1.
$$

### MGF and moments

MGF:

$$
M_X(t)
=
\sum_{x=0}^{\infty}e^{tx}e^{-\lambda}\frac{\lambda^x}{x!}
$$

$$
=
\exp\{\lambda(e^t-1)\}.
$$

Dari sini:

$$
\boxed{E(X)=\lambda},
$$

$$
\boxed{\operatorname{Var}(X)=\lambda}.
$$

Jadi Poisson memiliki characteristic relationship

$$
\mu=\sigma^2=\lambda.
$$

Textbook juga menunjukkan hasil tersebut secara langsung menggunakan factorial moments.

### Rate scaling

Jika process mempunyai mean rate $\lambda$ per unit dan interval length adalah $t$, maka expected count menjadi

$$
\lambda t.
$$

Maka count dalam interval panjang $t$ memiliki PMF

$$
P(X=x)
=
e^{-\lambda t}\frac{(\lambda t)^x}{x!},
\qquad x=0,1,2,\ldots
$$

selama Poisson-process assumptions yang digunakan textbook berlaku.

### Poisson approximation to Binomial

Textbook kemudian menunjukkan hubungan asymptotic dengan Binomial. Jika

$$
X\sim b(n,p),
$$

$n$ large dan $p$ small sehingga

$$
\lambda=np
$$

tetap pada level yang relevan, maka

$$
\binom nx p^x(1-p)^{n-x}
\approx
 e^{-\lambda}\frac{\lambda^x}{x!}.
$$

[TEXTBOOK EXAMPLE] Untuk $n=100$ dan $p=0.02$, digunakan

$$
\lambda=np=2
$$

untuk approximating Binomial probabilities dengan Poisson. Textbook membandingkan exact dan approximate values serta memperlihatkan probability histograms untuk beberapa combinations $(n,p)$.

> [!WARNING] Important Distinction
> Poisson model dapat muncul dalam dua cara berbeda di chapter:
>
> 1. sebagai direct count model dari Poisson process;
> 2. sebagai approximation terhadap Binomial ketika $n$ besar dan $p$ kecil.
>
> Approximation tidak mengubah Binomial experiment menjadi Poisson process; ia hanya mengganti distribution perhitungan secara aproksimatif.

---

## Chapter Synthesis

Chapter 2 dapat dipahami sebagai satu alur: **outcome diberi measurement → measurement mempunyai support dan PMF → PMF menghasilkan expectation/moments → moments dapat dikodekan dalam MGF → mekanisme eksperimen tertentu menghasilkan named distributions**.

Pada level paling umum, random variable diskrit $X$ memiliki mass $f(x)$ pada countable support dan probabilitas event diperoleh dengan menjumlahkan mass. Expectation kemudian mengambil weighted average dari fungsi random variable. Mean adalah first moment, variance adalah second central moment, dan MGF merangkum seluruh sequence raw moments ketika exists.

Setelah alat umum selesai, named distributions bukan kumpulan formula yang berdiri sendiri. Masing-masing berasal dari mekanisme yang berbeda:

- Hypergeometric: fixed sample, without replacement dari finite population;
- Binomial: fixed $n$ independent Bernoulli trials, count successes;
- Negative Binomial: independent Bernoulli trials berjalan sampai success ke-$r$;
- Geometric: special case hingga first success;
- Poisson: count occurrences dalam interval pada Poisson-process framework.

Karena mekanisme berbeda, support berbeda dan formula probability berbeda. Chapter ini dengan demikian membangun prinsip yang akan terus dipakai di CF2: **tentukan random object dan support dulu, baru pilih distribution dan lakukan calculation**.

## Key Relationships

| Relationship | Meaning | Conditions / Support | CF2 Link |
|---|---|---|---|
| $f(x)=P(X=x)$ | PMF discrete RV | $x$ pada countable support | [[2.1 Variabel Acak Diskrit]] |
| $F(x)=P(X\le x)=\sum_{t\le x}f(t)$ | Discrete CDF | all real $x$ | [[2.1 Variabel Acak Diskrit]] |
| $E[u(X)]=\sum u(x)f(x)$ | Expectation of function | sum exists | [[2.1 Variabel Acak Diskrit]] |
| $\operatorname{Var}(X)=E(X^2)-[E(X)]^2$ | Computational variance identity | finite second moment | [[2.1 Variabel Acak Diskrit]] |
| $M_X(t)=E(e^{tX})$ | MGF | exists around $t=0$ | [[2.3 Fungsi Pembangkit]] |
| $M_X^{(k)}(0)=E(X^k)$ | MGF generates raw moments | differentiability/existence | [[2.3 Fungsi Pembangkit]] |
| $\dfrac{\binom{N_1}{x}\binom{N_2}{n-x}}{\binom Nn}$ | Hypergeometric PMF | sampling without replacement | [[2.5 Distribusi Diskrit Umum]] |
| $\binom nxp^xq^{n-x}$ | Binomial PMF | $x=0,\ldots,n$; iid-like Bernoulli trials | [[2.5 Distribusi Diskrit Umum]] |
| $\binom{x-1}{r-1}p^rq^{x-r}$ | Negative Binomial PMF | $x=r,r+1,\ldots$ | [[2.5 Distribusi Diskrit Umum]] |
| $pq^{x-1}$ | Geometric PMF | $x=1,2,\ldots$ | [[2.5 Distribusi Diskrit Umum]] |
| $e^{-\lambda}\lambda^x/x!$ | Poisson PMF | $x=0,1,2,\ldots$ | [[2.5 Distribusi Diskrit Umum]] |

## Distribution / Model Snapshot

| Model | Mechanism | Support | Mean | Variance | MGF |
|---|---|---|---|---|---|
| Bernoulli$(p)$ | one success/failure trial | $0,1$ | $p$ | $pq$ | $q+pe^t$ |
| Binomial$(n,p)$ | # successes in $n$ independent trials | $0,\ldots,n$ | $np$ | $npq$ | $(q+pe^t)^n$ |
| Hypergeometric | # class-1 items in sample without replacement | feasible integers | $nN_1/N$ | $npq\frac{N-n}{N-1}$ | not emphasized as primary tool here |
| Negative Binomial$(r,p)$ | trial number of $r$th success | $r,r+1,\ldots$ | $r/p$ | $rq/p^2$ | $\left(\frac{pe^t}{1-qe^t}\right)^r$ |
| Geometric$(p)$ | trial number of first success | $1,2,\ldots$ | $1/p$ | $q/p^2$ | $\frac{pe^t}{1-qe^t}$ |
| Poisson$(\lambda)$ | # occurrences per specified interval | $0,1,2,\ldots$ | $\lambda$ | $\lambda$ | $e^{\lambda(e^t-1)}$ |

> [!NOTE] Parameterization
> Table mengikuti **Hogg–Tanis Chapter 2 conventions**, terutama Geometric/Negative Binomial yang menghitung **trial number**, bukan failures-before-success.

## Notation Used in This Chapter

| Symbol | Meaning | Support / Domain | Notes |
|---|---|---|---|
| $S$ | space/support of random variable | finite/countable set in Ch. 2 | textbook uses “space” and “support” |
| $X$ | discrete random variable | depends on model | capital letter = random quantity |
| $x$ | realized/possible value of $X$ | $x\in S$ | lowercase value |
| $f(x)$ | PMF | nonnegative; sum $1$ | $f(x)=0$ outside support |
| $F(x)$ | CDF | all real $x$ | step function for discrete $X$ |
| $\mu$ | mean | real if finite | $E(X)$ |
| $\sigma^2$ | variance | nonnegative | $E[(X-\mu)^2]$ |
| $M_X(t)$ | MGF | values of $t$ where finite | $E(e^{tX})$ |
| $p$ | success probability | $0\le p\le1$ | in Bernoulli-family models |
| $q$ | failure probability | $q=1-p$ | shorthand |
| $n$ | fixed number of trials/sample size | positive integer | Binomial/Hypergeometric context |
| $r$ | target number of successes | positive integer | Negative Binomial |
| $\lambda$ | Poisson mean/rate parameter for specified unit interval | $\lambda>0$ | mean = variance |

## Compression Notes

### Retained in Detail

- random variable as mapping from outcomes to numbers;
- support, PMF, CDF, and discrete-uniform illustration;
- Hypergeometric mechanism and support restrictions;
- expectation of functions and linearity;
- mean, variance, moments, factorial moments, and MGF;
- Bernoulli-to-Binomial derivation;
- Negative Binomial and Geometric parameterization;
- Poisson-process motivation, PMF, moments, rate scaling, and Binomial approximation;
- representative textbook examples that introduce distinct mechanisms.

### Condensed

- repeated numerical examples using the same PMF mechanics;
- extensive probability-table instructions;
- long derivative algebra after the MGF structure is established;
- graphical examples where the principal lesson is distribution shape;
- repeated exercise-style applications and computational arithmetic.

### Omitted / Beyond CF2

- end-of-section exercise sets were not reproduced;
- software-specific probability calculation instructions were omitted;
- application stories that did not introduce a new model or mathematical relationship were compressed.

## CF2 Connection Map

```text
Outcome s in experiment
        ↓
Random variable X(s)
        ↓
Discrete support S_X
        ↓
PMF f(x) and CDF F(x)
        ↓
[[2.1 Variabel Acak Diskrit]]
        ↓
Expectation E[u(X)]
        ↓
Mean / moments / variance
        ↓
MGF M_X(t)
        ↓
[[2.3 Fungsi Pembangkit]]
        ↓
Mechanism-specific probability models
        ├── without replacement → Hypergeometric
        ├── fixed n Bernoulli trials → Binomial
        ├── wait to rth success → Negative Binomial
        ├── wait to first success → Geometric
        └── count occurrences → Poisson
                         ↓
              [[2.5 Distribusi Diskrit Umum]]
```

## Quick Reading Review

- Random variable adalah real-valued function pada outcome space; ia bukan outcome itu sendiri.
- Discrete random variable mempunyai finite/countable support.
- PMF memberi point mass: $f(x)=P(X=x)$ dan total mass harus $1$.
- Discrete CDF adalah cumulative sum dari PMF dan berbentuk step function.
- Hypergeometric muncul dari sampling tanpa replacement; support harus memperhatikan seluruh population constraints.
- Expectation adalah probability-weighted average dan dapat diterapkan langsung ke $u(X)$ tanpa selalu mencari distribution $u(X)$.
- Mean adalah $E(X)$; variance adalah $E[(X-\mu)^2]$ dan juga $E(X^2)-\mu^2$.
- MGF $E(e^{tX})$ menghasilkan raw moments melalui derivatives di $t=0$ jika exists.
- Bernoulli adalah satu success/failure trial; Binomial menghitung successes dalam fixed $n$ independent Bernoulli trials.
- Binomial coefficient muncul karena ada $\binom nx$ possible positions untuk $x$ successes.
- Negative Binomial textbook menghitung total trials sampai success ke-$r$; support mulai dari $r$.
- Geometric adalah $r=1$ dan memiliki tail $P(X>k)=q^k$.
- Poisson menghitung occurrences; parameter $\lambda$ sekaligus mean dan variance untuk interval yang dimodelkan.
- Pada interval panjang $t$, Poisson mean menjadi $\lambda t$ jika rate $\lambda$ didefinisikan per unit.
- Binomial dengan large $n$, small $p$, dan $np=\lambda$ dapat didekati oleh Poisson sesuai development textbook.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Random variable, PMF, CDF, discrete uniform | Hogg, Tanis & Zimmerman, Chapter 2.1 |
| Maximum-of-dice and support illustration | Chapter 2.1, Example 2.1-3 |
| Hypergeometric distribution and fish/fuse examples | Chapter 2.1 |
| Mathematical expectation and expectation of functions | Chapter 2.2 |
| Moments, variance, factorial moments, MGF | Chapter 2.3 |
| Bernoulli and Binomial distributions | Chapter 2.4 |
| Binomial MGF, mean, variance; Hypergeometric comparison | Chapter 2.4 |
| Negative Binomial and Geometric distributions | Chapter 2.5 |
| Negative Binomial MGF, mean, variance | Chapter 2.5 |
| Poisson-process motivation and Poisson distribution | Chapter 2.6 |
| Poisson MGF, mean, variance, rate scaling | Chapter 2.6 |
| Poisson approximation to Binomial | Chapter 2.6 |
| CF2 relevance and chapter mapping | Silabus CF2 — Topik 2 |
