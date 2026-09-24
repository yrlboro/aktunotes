---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "3"
chapter_title: "Basic annuities"
cf1_topics: ["2.1", "2.2", "2.5", "2.6"]
cf1_relevance: "Very High"
source_scope: "Kellison Chapter 3, Sections 3.1-3.9"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison, Annuities]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 3: Basic annuities

> [!ABSTRACT] Chapter in One View
> Chapter 3 mengembangkan valuation untuk **annuities-certain** dari prinsip equation of value yang dibangun di Chapter 2. Fokus pertama adalah level annuity dengan payment period sama dengan interest conversion period: **annuity-immediate** dan **annuity-due**, beserta present value dan accumulated value factors. Setelah itu Kellison menunjukkan bahwa nilai anuitas dapat dipindahkan ke tanggal lain melalui accumulation/discounting, sehingga konsep **deferred annuity** muncul secara natural. Chapter kemudian memperluas struktur ke **perpetuities**, problem dengan unknown term atau unknown rate, annuity valuation ketika interest rates berubah, dan beberapa model yang tidak menggunakan compound interest. Untuk CF1, bagian inti chapter ini terutama mendukung [[2.1 Annuity-Immediate and Annuity-Due]], [[2.2 Perpetuity]], [[2.5 Deferred Annuities]], dan [[2.6 Varying Interest Rates]].

## 1. Why This Chapter Exists

Chapter 1 menjelaskan bagaimana satu jumlah uang tumbuh atau didiskontokan. Chapter 2 menunjukkan bagaimana beberapa cash flow dibandingkan pada satu **comparison date**. Chapter 3 mengambil pola cash flow yang sangat sering muncul—serangkaian pembayaran berkala—dan membangun notation serta formulas yang membuat equation of value menjadi jauh lebih efisien.

Ide utamanya tetap sama:

> **An annuity formula is a compressed equation of value.**

Kellison tidak memperkenalkan annuity factors sebagai formula terpisah yang harus dihafal tanpa konteks. Setiap factor berasal dari jumlah discounted atau accumulated cash flows yang memiliki timing teratur.

---

## 2. Chapter Map

- **3.1 Introduction** — definisi annuity dan terminology dasar.
- **3.2 Annuity-Immediate** — present value dan accumulated value untuk level payments pada akhir periode.
- **3.3 Annuity-Due** — payments pada awal periode dan hubungan dengan annuity-immediate.
- **3.4 Annuity Values on Any Date** — valuation pada tanggal selain standard focal date; deferred annuities.
- **3.5 Perpetuities** — infinite payment streams dan limiting values.
- **3.6 Unknown Time** — menentukan jumlah payment/term.
- **3.7 Unknown Rate of Interest** — rate/yield sebagai root dari annuity equation.
- **3.8 Varying Interest** — annuity valuation ketika periodic interest rates tidak konstan.
- **3.9 Annuities Not Involving Compound Interest** — beberapa model alternatif dan boundary of standard annuity formulas.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 3.1–3.3 | Core | [[2.1 Annuity-Immediate and Annuity-Due]] |
| 3.4 | Core | [[2.5 Deferred Annuities]] |
| 3.5 | Core | [[2.2 Perpetuity]] |
| 3.6–3.7 | Core supporting | [[2.1 Annuity-Immediate and Annuity-Due]], [[1.5 NPV, IRR, DWRR, TWRR]] |
| 3.8 | Core | [[2.6 Varying Interest Rates]] |
| 3.9 | Supporting | [[2.1 Annuity-Immediate and Annuity-Due]] |

---

## 3. 3.1 Introduction

### Annuity-certain

Kellison menggunakan **annuity** untuk menyebut series of payments made at equal intervals. Jika jumlah pembayaran dan payment dates ditentukan sebelumnya dan tidak bergantung pada survival atau event acak lain, stream tersebut adalah **annuity-certain**.

Chapter ini terutama memulai dari kasus paling sederhana:

- payments level;
- payment interval tetap;
- interest conversion period sama dengan payment period;
- compound interest rate konstan.

Asumsi tersebut penting karena standard annuity formulas merupakan hasil dari geometric series dengan common discount factor yang sama.

### Terminology

Beberapa istilah dasar:

- **payment period** — interval antara dua pembayaran berturut-turut;
- **term of the annuity** — interval dari awal annuity sampai akhir payment stream;
- **annuity-immediate** — pembayaran dilakukan pada **akhir** setiap payment period;
- **annuity-due** — pembayaran dilakukan pada **awal** setiap payment period.

Kellison menggunakan unit payment sebesar 1 untuk mendefinisikan annuity factors. Jika actual payment sebesar $R$, nilai stream adalah $R$ kali factor tersebut.

> [!IMPORTANT] Important Distinction
> Nama *immediate* dan *due* tidak mengubah jumlah payments. Yang berubah adalah **timing seluruh stream satu periode**.

---

## 4. 3.2 Annuity-Immediate

### 4.1 Cash-flow structure

Untuk annuity-immediate selama $n$ periods dengan payment 1, payments terjadi pada

$$
t=1,2,\ldots,n.
$$

Timeline:

| Waktu | 0 | 1 | 2 | $\cdots$ | $n$ |
|---:|---:|---:|---:|---:|---:|
| Payment | — | 1 | 1 | $\cdots$ | 1 |

Dengan effective interest rate per payment period sebesar $i$ dan

$$
v=\frac{1}{1+i},
$$

present value di $t=0$ adalah

$$
a_{\overline{n}|}
=
v+v^2+\cdots+v^n.
$$

Ini adalah finite geometric series.

### 4.2 Present value formula

Menjumlahkan geometric series:

$$
a_{\overline{n}|}
=
\frac{v(1-v^n)}{1-v}.
$$

Karena

$$
1-v=\frac{i}{1+i}=iv,
$$

maka

$$
\boxed{
a_{\overline{n}|}
=
\frac{1-v^n}{i}
}
$$

atau equivalently,

$$
\boxed{
ia_{\overline{n}|}=1-v^n.
}
$$

Interpretasi: deposit sebesar $a_{\overline{n}|}$ pada waktu 0 cukup untuk mendanai pembayaran 1 pada akhir setiap periode selama $n$ periods.

### 4.3 Accumulated value formula

Nilai pada waktu $n$, tepat setelah pembayaran terakhir, adalah

$$
s_{\overline{n}|}
=
1+(1+i)+(1+i)^2+\cdots+(1+i)^{n-1}.
$$

Maka

$$
\boxed{
s_{\overline{n}|}
=
\frac{(1+i)^n-1}{i}
}
$$

dan

$$
\boxed{
is_{\overline{n}|}
=
(1+i)^n-1.
}
$$

PV dan AV dari cash flow yang sama harus terhubung oleh accumulation selama $n$ periods:

$$
\boxed{
s_{\overline{n}|}
=
(1+i)^n a_{\overline{n}|}.
}
$$

Equivalently,

$$
a_{\overline{n}|}=v^n s_{\overline{n}|}.
$$

### 4.4 Economic interpretation

Formula $a_{\overline{n}|}$ dapat dibaca sebagai cost hari ini untuk membeli stream $1,1,\ldots,1$. Formula $s_{\overline{n}|}$ adalah amount pada akhir term jika setiap payment diinvestasikan sampai tanggal akhir.

> [!NOTE] Feynman View
> $a_{\overline{n}|}$ melihat setiap payment **mundur** ke waktu 0.  
> $s_{\overline{n}|}$ melihat setiap payment **maju** ke waktu $n$.

### 4.5 General payment amount

Jika setiap payment sebesar $R$:

$$
PV_0=R\,a_{\overline{n}|},
$$

$$
AV_n=R\,s_{\overline{n}|}.
$$

Jika target value diketahui, level payment langsung diperoleh dengan membagi target oleh annuity factor yang sesuai.

---

## 5. 3.3 Annuity-Due

### 5.1 Cash-flow structure

Untuk annuity-due dengan $n$ payments, payments terjadi pada

$$
t=0,1,\ldots,n-1.
$$

Timeline:

| Waktu | 0 | 1 | 2 | $\cdots$ | $n-1$ | $n$ |
|---:|---:|---:|---:|---:|---:|---:|
| Payment | 1 | 1 | 1 | $\cdots$ | 1 | — |

Present value factor disebut

$$
\ddot{a}_{\overline{n}|},
$$

dan accumulated value factor disebut

$$
\ddot{s}_{\overline{n}|}.
$$

### 5.2 Relation to annuity-immediate

Setiap annuity-due payment terjadi satu period lebih awal daripada corresponding annuity-immediate payment. Oleh karena itu setiap cash flow mempunyai nilai satu factor $(1+i)$ lebih besar pada focal date yang sama:

$$
\boxed{
\ddot{a}_{\overline{n}|}
=
(1+i)a_{\overline{n}|}
}
$$

dan

$$
\boxed{
\ddot{s}_{\overline{n}|}
=
(1+i)s_{\overline{n}|}.
}
$$

Karena

$$
(1+i)a_{\overline{n}|}
=
\frac{1-v^n}{d},
$$

dengan

$$
d=\frac{i}{1+i},
$$

maka

$$
\boxed{
\ddot{a}_{\overline{n}|}
=
\frac{1-v^n}{d}.
}
$$

Demikian pula,

$$
\boxed{
d\ddot{a}_{\overline{n}|}=1-v^n.
}
$$

### 5.3 Alternative identities

Dari cash-flow comparison:

$$
\ddot{a}_{\overline{n}|}
=
1+a_{\overline{n-1}|}.
$$

Juga,

$$
\ddot{a}_{\overline{n}|}
=
a_{\overline{n}|}+1-v^n.
$$

Untuk accumulated values:

$$
\ddot{s}_{\overline{n}|}
=
s_{\overline{n}|}+i\,s_{\overline{n}|}
=
(1+i)s_{\overline{n}|}.
$$

### 5.4 Sanity check

Untuk $i>0$:

$$
\ddot{a}_{\overline{n}|}>a_{\overline{n}|}.
$$

Alasannya bukan karena jumlah payments berbeda, tetapi karena semua payments pada annuity-due datang lebih awal.

> [!WARNING] Timing Trap
> Jika pembayaran pertama dilakukan **hari ini**, jangan memakai $a_{\overline{n}|}$ tanpa adjustment.  
> Jika pembayaran pertama dilakukan **satu period dari sekarang**, itu annuity-immediate.

---

## 6. 3.4 Annuity Values on Any Date

Section ini memperluas penggunaan annuity factors dari dua tanggal standard:

- $a_{\overline{n}|}$ di satu periode sebelum first payment;
- $s_{\overline{n}|}$ di date of last payment.

Dalam financial problems, valuation date dapat berada di mana saja.

### 6.1 Move a known annuity value

Jika nilai annuity sudah diketahui pada suatu tanggal, gunakan ordinary compound accumulation/discounting untuk memindahkannya.

Contoh generic: $n$ payments sebesar 1 terjadi pada $t=m+1,\ldots,m+n$.

Nilai pada $t=m$ adalah

$$
a_{\overline{n}|}.
$$

Nilai pada $t=0$:

$$
\boxed{
{}_{m|}a_{\overline{n}|}
=
v^m a_{\overline{n}|}.
}
$$

Kellison juga menunjukkan bentuk difference:

$$
\boxed{
{}_{m|}a_{\overline{n}|}
=
a_{\overline{m+n}|}-a_{\overline{m}|}.
}
$$

Kedua formulas merepresentasikan cash flow yang sama:

- **shift method** — value local annuity, lalu discount;
- **difference method** — full annuity dikurangi payments yang tidak termasuk.

### 6.2 Off-by-one principle

Jika first payment terjadi pada waktu $T$, ordinary annuity-immediate factor secara natural dinilai pada

$$
T-1.
$$

Karena itu jika first payment adalah akhir tahun ke-5, local annuity value berada di akhir tahun ke-4.

> [!IMPORTANT] Deferred Annuity Rule
> **First payment at $m+1$ $\Rightarrow$ value $a_{\overline{n}|}$ at time $m$.**

### 6.3 Accumulated value away from the last payment date

Jika value diminta setelah last payment, accumulate $s_{\overline{n}|}$ dari last-payment date ke requested date.

Jika value diminta sebelum first payment, discount $a_{\overline{n}|}$ backward.

Jika valuation date berada **di dalam** stream, pecah cash flow menjadi:

1. past payments, accumulated forward;
2. future payments, discounted backward.

Ini adalah aplikasi langsung equation of value.

---

## 7. 3.5 Perpetuities

### 7.1 Perpetuity-immediate

Perpetuity-immediate adalah unit payments pada

$$
t=1,2,3,\ldots
$$

PV:

$$
a_{\overline{\infty}|}
=
v+v^2+v^3+\cdots.
$$

Untuk $i>0$, geometric series converges:

$$
\boxed{
a_{\overline{\infty}|}
=
\frac{1}{i}.
}
$$

Ini juga merupakan limit:

$$
\lim_{n\to\infty}a_{\overline{n}|}
=
\frac{1}{i}.
$$

### 7.2 Perpetuity-due

Payments terjadi pada

$$
t=0,1,2,\ldots
$$

Sehingga

$$
\ddot{a}_{\overline{\infty}|}
=
1+\frac{1}{i}
=
\frac{1+i}{i}
=
\boxed{\frac{1}{d}}.
$$

### 7.3 Deferred perpetuity

Jika perpetuity-immediate first payment terjadi pada $t=m+1$:

$$
PV_0
=
v^m\frac{1}{i}.
$$

Perhatikan kembali bahwa exponent deferral adalah $m$, bukan $m+1$, karena $1/i$ adalah value **one period before first payment**.

### 7.4 Interpretation

Perpetuity formula $1/i$ dapat dipahami tanpa geometric series: jika principal $1/i$ menghasilkan interest sebesar 1 setiap period dan principal tidak pernah dikonsumsi, payment 1 dapat berlangsung selamanya.

---

## 8. 3.6 Unknown Time

Annuity problem kadang memberi:

- payment $R$;
- rate $i$;
- present atau accumulated target;
- tetapi tidak memberi number of payments $n$.

### 8.1 Solve from annuity formula

Contoh dari present value:

$$
P=R a_{\overline{n}|}
=
R\frac{1-v^n}{i}.
$$

Maka

$$
v^n
=
1-\frac{iP}{R}.
$$

Sehingga

$$
\boxed{
n=
\frac{\ln\left(1-\frac{iP}{R}\right)}{\ln v}
}
$$

jika right-hand side berada dalam valid domain.

Dari accumulated value:

$$
S=R s_{\overline{n}|}
=
R\frac{(1+i)^n-1}{i},
$$

maka

$$
(1+i)^n
=
1+\frac{iS}{R},
$$

dan

$$
\boxed{
n=
\frac{\ln\left(1+\frac{iS}{R}\right)}{\ln(1+i)}.
}
$$

### 8.2 Discrete payment reality

Mathematical $n$ mungkin tidak integer. Dalam contract dengan scheduled payments, kita tidak boleh sekadar mengatakan “$n=12.4$ payments.”

Kellison menekankan practical treatment:

1. tentukan jumlah full regular payments;
2. tentukan timing final payment;
3. solve amount final irregular payment melalui equation of value.

Ini menjadi fondasi untuk **drop payment** dan **balloon payment** pada loan chapter.

### 8.3 Interpretation of the root

Jika target PV lebih besar daripada perpetuity value $R/i$, tidak ada finite $n$ yang dapat memenuhi equation dengan positive $i$.

Sanity check:

$$
R a_{\overline{n}|}<\frac{R}{i}.
$$

---

## 9. 3.7 Unknown Rate of Interest

Ketika $P$, $R$, dan $n$ diketahui, equation

$$
P=R a_{\overline{n}|i}
$$

harus diselesaikan untuk $i$.

Karena $i$ muncul di denominator dan di $v^n=(1+i)^{-n}$, closed form biasanya tidak tersedia.

### 9.1 Fundamental equation

Write first:

$$
\frac{P}{R}
=
\frac{1-(1+i)^{-n}}{i}.
$$

Lalu solve numerically.

Kellison membahas approximation/interpolation sebagai practical methods ketika table atau calculator digunakan. Mathematical point-nya tetap:

> **Unknown annuity rate is a root-finding problem.**

### 9.2 Monotonicity

Untuk fixed positive payments dan fixed $n$, present value menurun ketika $i$ meningkat. Karena itu normal level-annuity problems biasanya memiliki intuitive direction:

- PV terlalu tinggi pada trial rate $\Rightarrow$ trial rate terlalu rendah;
- PV terlalu rendah pada trial rate $\Rightarrow$ trial rate terlalu tinggi.

### 9.3 Approximate rate

Kellison memberi approximate formulas sebagai initial estimate. Nilai approximate berguna untuk:

- memilih interpolation interval;
- menyediakan starting point untuk iteration;
- memeriksa kewajaran numerical solution.

Namun exact equation of value tetap authority.

> [!NOTE] Numerical Method
> Jika calculator/software digunakan, note yang baik tetap menulis equation terlebih dahulu. Hasil calculator bukan pengganti model.

---

## 10. 3.8 Varying Interest

Standard annuity formulas mengasumsikan satu periodic rate $i$. Jika rate berbeda tiap period, geometric-series shortcut tidak lagi valid secara langsung.

Misalkan $i_k$ adalah effective rate pada interval $(k-1,k)$ dan

$$
v_k=\frac{1}{1+i_k}.
$$

Untuk payments $R_t$ pada waktu $t$, present value di waktu 0 adalah

$$
\boxed{
PV_0
=
\sum_{t=1}^{n}
R_t
\prod_{k=1}^{t}v_k.
}
$$

Untuk level payments $R_t=R$:

$$
PV_0
=
R\left[
v_1
+
v_1v_2
+
\cdots
+
v_1v_2\cdots v_n
\right].
$$

Tidak ada satu $v$ yang dapat ditarik menjadi $a_{\overline{n}|}$ kecuali rates memang equivalent pada **setiap relevant cash-flow horizon**, bukan hanya pada total horizon.

### 10.1 Accumulated value

Nilai pada $n$:

$$
\boxed{
AV_n
=
\sum_{t=1}^{n}
R_t
\prod_{k=t+1}^{n}(1+i_k).
}
$$

Payment pada $t=n$ tidak memperoleh interest setelah pembayaran; empty product bernilai 1.

### 10.2 Fund recursion

Cara alternatif yang sangat natural:

$$
B_t=B_{t-1}(1+i_t)+R_t.
$$

Dengan recursion, kita tidak perlu menulis seluruh product sekaligus.

### 10.3 Equivalent level rate caution

Jika satu unit tumbuh selama $n$ periods dengan varying rates, equivalent level rate $j$ memenuhi

$$
(1+j)^n
=
\prod_{k=1}^{n}(1+i_k).
$$

Namun rate $j$ tersebut menjamin equivalence untuk **single amount over full horizon**, bukan otomatis untuk annuity payments yang masuk pada waktu berbeda. Setiap payment mengalami subset rates yang berbeda.

---

## 11. 3.9 Annuities Not Involving Compound Interest

Kellison menutup chapter dengan menunjukkan bahwa annuity reasoning tidak secara intrinsik terbatas pada compound interest. Jika accumulation law berbeda, setiap payment tetap dapat dinilai menggunakan general accumulation/discount function yang sesuai.

### 11.1 General principle

Untuk payment $R_t$ pada waktu $t$ dan valuation date 0:

$$
PV_0
=
\sum_t R_t\,a^{-1}(t),
$$

jika $a(t)$ adalah accumulation function yang digunakan transaction.

Standard formula

$$
a_{\overline{n}|}
=
\frac{1-v^n}{i}
$$

muncul karena compound interest menghasilkan geometric discount sequence. Jika accumulation law bukan compound, annuity factor harus dibangun dari definition.

### 11.2 Simple-interest context

Di bawah simple interest, discount factors bukan powers dari constant $v$. Maka present values dari successive payments tidak membentuk geometric series yang sama dengan compound interest.

[CF1 SUPPORTING CONTEXT] Silabus CF1 meminta perhitungan dengan simple dan compound interest untuk single investments dan cash-flow valuation, tetapi standard annuity notation terutama diasosiasikan dengan compound interest. Section ini penting sebagai reminder bahwa formula annuity tidak boleh dipakai di luar assumptions-nya.

---

## 12. Core Formula Map

| Quantity | Formula | Timing |
|---|---|---|
| PV annuity-immediate | $a_{\overline{n}|}=\frac{1-v^n}{i}$ | payments $1,\ldots,n$; value at 0 |
| AV annuity-immediate | $s_{\overline{n}|}=\frac{(1+i)^n-1}{i}$ | value at $n$ |
| PV annuity-due | $\ddot{a}_{\overline{n}|}=(1+i)a_{\overline{n}|}$ | payments $0,\ldots,n-1$ |
| AV annuity-due | $\ddot{s}_{\overline{n}|}=(1+i)s_{\overline{n}|}$ | one-period shifted stream |
| Deferred annuity | ${}_{m|}a_{\overline{n}|}=v^m a_{\overline{n}|}$ | first payment $m+1$ |
| Difference form | ${}_{m|}a_{\overline{n}|}=a_{\overline{m+n}|}-a_{\overline{m}|}$ | tail of longer annuity |
| Perpetuity-immediate | $a_{\overline{\infty}|}=1/i$ | first payment at 1 |
| Perpetuity-due | $\ddot{a}_{\overline{\infty}|}=1/d$ | first payment at 0 |

---

## 13. Relationships Worth Understanding, Not Memorizing

### Immediate vs due

$$
\ddot{a}_{\overline{n}|}
=
(1+i)a_{\overline{n}|}
$$

karena seluruh stream dipindahkan satu period lebih awal.

### PV vs AV

$$
s_{\overline{n}|}
=
(1+i)^n a_{\overline{n}|}
$$

karena kedua quantities adalah value cash flow yang sama pada dua dates berbeda.

### Deferred as shift

$$
{}_{m|}a_{\overline{n}|}
=
v^m a_{\overline{n}|}.
$$

Tidak ada konsep baru; hanya local annuity value yang dipindahkan ke earlier date.

### Perpetuity as limit

$$
\lim_{n\to\infty}a_{\overline{n}|}
=
\frac{1}{i}.
$$

---

## 14. Worked Reasoning Patterns

### Pattern A — Unknown level payment

**Situation**

Known target present value $P$, $n$ end-of-period payments, periodic rate $i$.

**Reasoning**

Payments are annuity-immediate:

$$
P=R a_{\overline{n}|}.
$$

**Solve**

$$
\boxed{
R=\frac{P}{a_{\overline{n}|}}.
}
$$

**Check**

For positive $i$, $a_{\overline{n}|}<n$, so $R>P/n$ when financing a present amount over future payments.

---

### Pattern B — First payment delayed

Payments $R$ occur at

$$
m+1,m+2,\ldots,m+n.
$$

Value at $m$:

$$
R a_{\overline{n}|}.
$$

Value at 0:

$$
\boxed{
PV_0=R v^m a_{\overline{n}|}.
}
$$

**Check**

Longer deferral with positive interest must reduce present value.

---

### Pattern C — Stream partly before and partly after valuation date

At time $k$ inside an annuity:

- past payments are accumulated to $k$;
- future payments are discounted to $k$.

This is often easier than trying to force one special annuity factor.

---

### Pattern D — Unknown rate

Write

$$
f(i)=R a_{\overline{n}|i}-P=0.
$$

Then bracket and solve $i$ numerically. Verify by substituting the final rate back into the original equation of value.

---

## 15. Important Distinctions

> [!IMPORTANT] Annuity-Immediate vs Annuity-Due
> Immediate: first payment at $t=1$.  
> Due: first payment at $t=0$.

> [!IMPORTANT] Present Value vs Accumulated Value
> $a_{\overline{n}|}$ and $s_{\overline{n}|}$ value **the same stream** at different dates.

> [!IMPORTANT] Deferred Period vs First Payment Time
> If first payment is at $m+1$, deferral exponent is $m$.

> [!IMPORTANT] Equivalent Full-Horizon Rate vs Annuity Valuation
> A rate equivalent over $0\to n$ does not automatically value intermediate annuity payments correctly when actual rates vary by period.

> [!IMPORTANT] Formula vs Assumption
> Standard annuity factors require compound-interest-style geometric discounting at a rate consistent with the payment period.

---

## 16. CF1 Connection Map

```text
Chapter 1
Accumulation / discount / rate conversion
        ↓
Chapter 2
Equation of value + focal date
        ↓
Chapter 3
Basic annuities
        ├─ annuity-immediate → [[2.1 Annuity-Immediate and Annuity-Due]]
        ├─ annuity-due       → [[2.1 Annuity-Immediate and Annuity-Due]]
        ├─ deferred value    → [[2.5 Deferred Annuities]]
        ├─ perpetuity        → [[2.2 Perpetuity]]
        ├─ unknown term/rate → general equation-of-value skill
        └─ varying rates     → [[2.6 Varying Interest Rates]]
        ↓
Chapter 4
More general payment frequencies and varying payments
```

---

## 17. Quick Reading Review

- An annuity formula is a compressed equation of value.
- $a_{\overline{n}|}$ values payments at times $1,\ldots,n$ at time 0.
- $s_{\overline{n}|}$ values the same payments at time $n$.
- Annuity-due is annuity-immediate shifted one period earlier.
- Therefore $\ddot{a}_{\overline{n}|}=(1+i)a_{\overline{n}|}$.
- Deferred annuity is ordinary annuity valued locally and then discounted.
- If first payment is at $m+1$, use $v^m a_{\overline{n}|}$.
- Perpetuity-immediate has PV $1/i$ for positive $i$.
- Unknown term often reduces to logarithms, but contractual payment counts may require an irregular final payment.
- Unknown annuity rate is usually a numerical root.
- With varying interest, discount each payment through the actual sequence of rates it experiences.
- Equivalent rate for one full horizon does not generally replace varying rates for intermediate cash flows.
- Outside compound interest, rebuild annuity value from the underlying accumulation function rather than forcing standard formulas.

---

## 18. Compression Notes

### Retained in Detail

- annuity terminology and cash-flow timing;
- derivation and interpretation of $a_{\overline{n}|}$ and $s_{\overline{n}|}$;
- annuity-due relationships;
- valuation on arbitrary dates;
- deferred annuities;
- perpetuities;
- unknown term and rate logic;
- varying-interest valuation;
- boundary of standard compound-interest annuity formulas.

### Compressed

- repeated numerical examples using the same annuity-factor mechanics;
- calculator-specific keystrokes;
- long interpolation arithmetic;
- exercise sets.

### Omitted / Supporting Only

- detailed table lookup procedures;
- routine practice examples that add no new mathematical structure.

---

## Source Traceability

- **Primary textbook:** Stephen G. Kellison, *The Theory of Interest*, 3rd ed., Chapter 3, “Basic annuities.”
- **Chapter structure verified from the supplied Kellison scan:** Sections 3.1–3.9.
- **CF1 scope:** Topik 2 — Anuitas dan Nilai Arus Kas; Kellison Chapters 3–4 are official references.
- **No outside source was used to expand the mathematical content.**
