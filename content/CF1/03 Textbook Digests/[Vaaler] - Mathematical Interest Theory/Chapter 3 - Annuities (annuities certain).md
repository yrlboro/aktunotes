---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "3"
chapter_title: "Annuities (annuities certain)"
cf1_topics: ["2.1", "2.2", "2.3", "2.5", "2.6"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 3, Sections 3.1–3.13; problem set 3.14 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler, Annuities]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 3: Annuities (annuities certain)

> [!ABSTRACT] Chapter in One View
> Chapter 3 mengubah equation-of-value machinery dari Chapter 2 menjadi bahasa yang efisien untuk **serangkaian pembayaran berkala**. Vaaler memulai dari level annuity-immediate dan annuity-due, lalu memperluas ke perpetuity, deferred annuity, nilai anuitas pada tanggal arbitrer, dan outstanding loan balance. Setelah struktur level dikuasai, chapter menunjukkan bagaimana nonlevel cash flows dapat dibangun dari kombinasi level annuities, lalu menangani dua pola utama: **geometric progression** dan **arithmetic progression**. Bagian selanjutnya menghubungkan annuity valuation dengan yield rate, memperluas notation ke nonintegral terms, dan kembali ke prinsip first principles ketika accumulation law tidak lagi berupa compound interest konstan. Bagian akhir memperkenalkan **investment year method**, yaitu salah satu cara menangani rates yang berbeda menurut tahun investasi dan kalender. Untuk CF1, chapter ini merupakan sumber inti bagi [[2.1 Annuity-Immediate and Annuity-Due]], [[2.2 Perpetuity]], [[2.3 Varying Annuities]], [[2.5 Deferred Annuities]], dan sebagian [[2.6 Varying Interest Rates]].

## 1. Why This Chapter Exists

Chapter 1 menjelaskan bagaimana **satu** jumlah uang tumbuh atau didiskontokan. Chapter 2 menunjukkan bagaimana **beberapa** cash flows dinilai pada satu focal date melalui equation of value. Chapter 3 mengambil pola cash flow yang sangat sering muncul dalam pinjaman, retirement saving, benefit payments, dan investasi berkala: pembayaran yang terjadi pada interval teratur.

Tanpa annuity notation, setiap valuation harus ditulis sebagai deret panjang:

$$
v+v^2+\cdots+v^n.
$$

Dengan annuity notation, struktur yang sama cukup ditulis sebagai:

$$
a_{\overline{n}|i}.
$$

Namun Vaaler tidak memperlakukan notation ini sebagai sekadar shortcut hafalan. Seluruh formula tetap berasal dari dua ide:

1. nilai total sama dengan jumlah nilai masing-masing pembayaran pada focal date yang sama; dan
2. di bawah compound interest dengan rate konstan, discounted atau accumulated payments membentuk geometric series.

Chapter ini juga penting karena menunjukkan kapan shortcut level annuity **tidak** cukup. Begitu payment amount berubah, rate berubah, atau valuation date tidak berada pada posisi standar, kita kembali pada timing, equation of value, dan decomposition.

## 2. Chapter Map

- **3.1 Introduction** — definisi annuity, payment period, annuity-certain, immediate, due, dan roadmap chapter.
- **3.2 Annuities-Immediate** — level payments pada akhir tiap period; PV dan accumulated value.
- **3.3 Annuities-Due** — level payments pada awal tiap period dan hubungan shifting dengan annuity-immediate.
- **3.4 Perpetuities** — infinite payment streams.
- **3.5 Deferred Annuities and Values on Any Date** — valuation di tanggal selain standard endpoints.
- **3.6 Outstanding Loan Balances** — nilai sisa kewajiban setelah sejumlah payments.
- **3.7 Nonlevel Annuities** — decomposition dari cash-flow patterns yang tidak level.
- **3.8 Annuities with Payments in Geometric Progression** — payments berubah dengan constant ratio.
- **3.9 Annuities with Payments in Arithmetic Progression** — payments berubah dengan constant difference.
- **3.10 Yield Rate Examples Involving Annuities** — unknown rate sebagai root equation of value.
- **3.11 Annuity Symbols for Nonintegral Terms** — extension notation ketika term bukan integer.
- **3.12 Annuities Governed by General Accumulation Functions** — valuation tanpa memaksakan compound-interest annuity formula.
- **3.13 The Investment Year Method** — varying/select/ultimate investment rates.
- **3.14 Problems** — latihan; tidak diringkas sebagai materi naratif.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 3.1–3.3 | Core | [[2.1 Annuity-Immediate and Annuity-Due]] |
| 3.4 | Core | [[2.2 Perpetuity]] |
| 3.5 | Core | [[2.5 Deferred Annuities]] |
| 3.6 | Supporting/Core bridge | [[4.1 Loan Terminology]], [[4.2 Amortization Method]] |
| 3.7–3.9 | Core | [[2.3 Varying Annuities]] |
| 3.10 | Supporting | [[1.5 NPV, IRR, DWRR, TWRR]] |
| 3.11 | Supporting | annuity timing / fractional-term problems |
| 3.12–3.13 | Core/Supporting | [[2.6 Varying Interest Rates]] |

## 3. 3.1 Introduction

Vaaler mendefinisikan **annuity** sebagai serangkaian payments yang dilakukan pada interval yang ditentukan. Dalam penggunaan modern, payment interval tidak harus satu tahun; dapat berupa bulan, kuartal, atau periode lain. Interval antar-payment disebut **payment period**.

Chapter ini memilih unit waktu sehingga **payment period dan interest period berimpit**, dengan equivalent interest rate jika diperlukan. Konvensi ini memungkinkan semua standard annuity formulas menggunakan satu effective rate per payment period.

### Annuity-immediate dan annuity-due

- **Annuity-immediate**: payment terjadi pada **akhir** setiap payment period.
- **Annuity-due**: payment terjadi pada **awal** setiap payment period.

### Annuity-certain

Jika jumlah payments dan payment dates ditentukan terlebih dahulu dan tidak bergantung pada kejadian acak, stream disebut **annuity-certain**.

Vaaler membedakannya dari contingent annuity—misalnya life annuity—tetapi buku ini pada bagian ini berfokus pada annuities-certain dan kemudian cukup menyebutnya “annuities.”

### Perpetuity

Annuity dengan term tak berhingga disebut **perpetuity**.

> [!IMPORTANT] Timing Is the Definition
> Perbedaan immediate dan due bukan pada jumlah pembayaran, melainkan posisi seluruh stream pada timeline. Karena itu shifting satu periode menjadi hubungan matematis utama antara keduanya.

## 4. 3.2 Annuities-Immediate

### 4.1 Cash-flow structure

Level annuity-immediate dengan unit payment selama $n$ periods membayar pada:

$$
t=1,2,\ldots,n.
$$

| Waktu | 0 | 1 | 2 | $\cdots$ | $n$ |
|---:|---:|---:|---:|---:|---:|
| Payment | — | 1 | 1 | $\cdots$ | 1 |

Misalkan effective interest rate per payment period adalah $i$ dan:

$$
v=\frac{1}{1+i}.
$$

### 4.2 Present value

Nilai pada waktu 0 adalah jumlah discounted payments:

$$
a_{\overline{n}|i}
=
v+v^2+\cdots+v^n.
$$

Karena ini finite geometric series:

$$
a_{\overline{n}|i}
=
v\frac{1-v^n}{1-v}.
$$

Dengan:

$$
1-v=\frac{i}{1+i}=iv,
$$

maka:

$$
\boxed{
a_{\overline{n}|i}
=
\frac{1-v^n}{i}
}
$$

atau equivalently:

$$
\boxed{
1-v^n=i\,a_{\overline{n}|i}.
}
$$

Interpretasinya sederhana: $a_{\overline{n}|i}$ adalah jumlah yang perlu tersedia **satu periode sebelum payment pertama** untuk membiayai $n$ unit payments pada akhir setiap period.

### 4.3 Accumulated value

Nilai stream yang sama pada waktu $n$ adalah:

$$
s_{\overline{n}|i}
=
(1+i)^{n-1}
+
(1+i)^{n-2}
+\cdots
+1.
$$

Menjumlahkan geometric series:

$$
\boxed{
s_{\overline{n}|i}
=
\frac{(1+i)^n-1}{i}
}
$$

dan:

$$
\boxed{
(1+i)^n-1=i\,s_{\overline{n}|i}.
}
$$

PV dan AV dari stream yang sama harus terkait melalui accumulation selama $n$ periods:

$$
\boxed{
s_{\overline{n}|i}
=
(1+i)^n a_{\overline{n}|i}.
}
$$

### 4.4 Payment sebesar $R$

Karena valuation linear, jika setiap payment sebesar $R$:

$$
PV_0
=
R\,a_{\overline{n}|i},
$$

dan:

$$
AV_n
=
R\,s_{\overline{n}|i}.
$$

> [!IMPORTANT] Focal-Date Meaning
> $a_{\overline{n}|i}$ hidup di $t=0$, satu period sebelum payment pertama.  
> $s_{\overline{n}|i}$ hidup di $t=n$, tepat pada tanggal payment terakhir setelah payment tersebut masuk.

### 4.5 Useful recurrence intuition

Menambah satu payment pada akhir menghasilkan:

$$
a_{\overline{n+1}|i}
=
a_{\overline{n}|i}
+
v^{n+1}.
$$

Untuk accumulated value:

$$
s_{\overline{n+1}|i}
=
(1+i)s_{\overline{n}|i}+1.
$$

Recurrence terakhir memiliki interpretasi fund yang natural: balance lama tumbuh satu period, lalu payment baru sebesar 1 ditambahkan.

## 5. 3.3 Annuities-Due

### 5.1 Cash-flow structure

Level annuity-due dengan unit payment selama $n$ periods membayar pada:

$$
t=0,1,\ldots,n-1.
$$

| Waktu | 0 | 1 | 2 | $\cdots$ | $n-1$ | $n$ |
|---:|---:|---:|---:|---:|---:|---:|
| Payment | 1 | 1 | 1 | $\cdots$ | 1 | — |

Setiap payment annuity-due terjadi **satu period lebih awal** daripada corresponding payment annuity-immediate.

### 5.2 Present value

Karena seluruh stream immediate digeser satu period lebih awal:

$$
\boxed{
\ddot{a}_{\overline{n}|i}
=
(1+i)a_{\overline{n}|i}.
}
$$

Dengan $d=i/(1+i)$:

$$
\boxed{
\ddot{a}_{\overline{n}|i}
=
\frac{1-v^n}{d}.
}
$$

Directly:

$$
\ddot{a}_{\overline{n}|i}
=
1+v+\cdots+v^{n-1}.
$$

### 5.3 Accumulated value

Pada waktu $n$:

$$
\boxed{
\ddot{s}_{\overline{n}|i}
=
(1+i)s_{\overline{n}|i}.
}
$$

Setiap due payment memperoleh satu interest period lebih banyak daripada corresponding immediate payment.

### 5.4 Sanity ordering

Untuk $i>0$:

$$
\boxed{
\ddot{a}_{\overline{n}|i}
>
a_{\overline{n}|i}.
}
$$

Hal yang sama berlaku untuk accumulated values:

$$
\ddot{s}_{\overline{n}|i}
>
s_{\overline{n}|i}.
$$

> [!WARNING] Common Timing Error
> Jangan memilih annuity-due karena kata “due” terdengar seperti kewajiban. Yang menentukan adalah **apakah payment terjadi di beginning atau end of period**.

## 6. 3.4 Perpetuities

Perpetuity adalah annuity dengan payment stream yang berlanjut tanpa batas.

### 6.1 Perpetuity-immediate

Unit payments terjadi pada:

$$
t=1,2,3,\ldots
$$

PV:

$$
a_{\overline{\infty}|i}
=
v+v^2+v^3+\cdots.
$$

Untuk $i>0$, geometric series converges:

$$
\boxed{
a_{\overline{\infty}|i}
=
\frac{1}{i}.
}
$$

Financial interpretation: principal sebesar $1/i$ menghasilkan interest sebesar:

$$
i\left(\frac{1}{i}\right)=1
$$

per period, sehingga unit payment dapat dibayar terus tanpa menghabiskan principal.

### 6.2 Perpetuity-due

Jika payments mulai segera di $t=0$:

$$
\ddot{a}_{\overline{\infty}|i}
=
1+\frac{1}{i}
=
\frac{1+i}{i}.
$$

Karena:

$$
d=\frac{i}{1+i},
$$

maka:

$$
\boxed{
\ddot{a}_{\overline{\infty}|i}
=
\frac{1}{d}.
}
$$

### 6.3 Deferred perpetuity

Jika perpetuity-immediate pertama kali membayar pada waktu $m+1$, value pada waktu $m$ adalah $1/i$. Maka value pada waktu 0:

$$
\boxed{
v^m\frac{1}{i}.
}
$$

> [!IMPORTANT] Off-by-One Principle
> Nilai $1/i$ berada **satu period sebelum first payment**. Jika first payment di $t=m+1$, discount exponent ke $t=0$ adalah $m$, bukan $m+1$.

## 7. 3.5 Deferred Annuities and Values on Any Date

Standard annuity notation memberi value pada convenient endpoints, tetapi financial questions dapat meminta nilai pada tanggal mana pun. Vaaler menekankan bahwa kita tidak memerlukan teori baru: value stream secara lokal, lalu pindahkan nilai tersebut ke target date.

### 7.1 Deferred annuity-immediate

Suppose $n$ unit payments occur at:

$$
t=m+1,m+2,\ldots,m+n.
$$

Pada waktu $m$, stream terlihat seperti ordinary annuity-immediate:

$$
V_m=a_{\overline{n}|i}.
$$

Maka pada waktu 0:

$$
\boxed{
{}_{m|}a_{\overline{n}|i}
=
v^m a_{\overline{n}|i}.
}
$$

Directly:

$$
v^{m+1}+v^{m+2}+\cdots+v^{m+n}
=
v^m a_{\overline{n}|i}.
$$

### 7.2 Difference method

Stream yang sama dapat dipandang sebagai tail dari annuity yang lebih panjang:

$$
\boxed{
{}_{m|}a_{\overline{n}|i}
=
a_{\overline{m+n}|i}
-
a_{\overline{m}|i}.
}
$$

Ini menggambarkan satu technique Vaaler yang penting: tambahkan “imaginary payments” agar cash-flow pattern menjadi standard, lalu kurangi kembali bagian yang sebenarnya tidak ada.

### 7.3 Value after the last payment

Jika kita menginginkan accumulated value di waktu $m+n$:

$$
V_{m+n}
=
s_{\overline{n}|i}.
$$

Perhatikan bahwa deferral tidak mengubah accumulated value **pada tanggal payment terakhir**. Deferral hanya menggeser entire stream di calendar time.

### 7.4 General valuation date

Jika suatu value $V_t$ diketahui pada waktu $t$, value pada waktu $u$ di bawah compound interest konstan adalah:

$$
V_u
=
V_t(1+i)^{u-t}.
$$

Karena itu, strategi yang paling aman adalah:

1. pilih tanggal lokal yang membuat stream standard;
2. gunakan annuity factor;
3. shift ke target date.

> [!TIP] Mental Model
> **Local value first, then shift.**

## 8. 3.6 Outstanding Loan Balances

[CF1 SUPPORTING CONTEXT]

Walaupun loan repayment dibahas lebih penuh di Chapter 5, Vaaler memperkenalkan outstanding balance di sini karena loan dengan level payments adalah aplikasi langsung annuity valuation.

Suppose loan pada waktu 0 dilunasi oleh level payment $R$ pada akhir setiap period selama $n$ periods, dengan effective rate $i$ per period.

Original loan:

$$
L=R\,a_{\overline{n}|i}.
$$

### 8.1 Prospective balance

Immediately after payment ke-$k$, masih tersisa $n-k$ payments.

Maka outstanding balance:

$$
\boxed{
B_k
=
R\,a_{\overline{n-k}|i}.
}
$$

Interpretasinya:

> outstanding balance sekarang = PV sekarang dari seluruh contractual payments yang masih tersisa.

### 8.2 Retrospective view

Alternative view:

- accumulate original loan to time $k$;
- subtract accumulated value dari payments yang sudah dibuat.

Sehingga:

$$
\boxed{
B_k
=
L(1+i)^k
-
R\,s_{\overline{k}|i}.
}
$$

Kedua formulas harus sama karena keduanya menilai financial position yang sama pada tanggal yang sama.

### 8.3 Before versus after payment

Timing must be explicit. Jika $B_k$ didefinisikan immediately **after** payment ke-$k$, maka balance immediately **before** payment berikutnya adalah:

$$
B_k(1+i).
$$

Setelah payment berikutnya $R$:

$$
B_{k+1}
=
B_k(1+i)-R.
$$

Ini menjadi recursion fundamental pada loan amortization.

> [!WARNING] Balance-Date Trap
> “Balance before payment” dan “balance after payment” berbeda sebesar payment yang terjadi pada tanggal tersebut.

## 9. 3.7 Nonlevel Annuities

Tidak semua payment streams level. Vaaler menekankan bahwa sebelum mencari formula baru, kita harus melihat apakah stream dapat **dipecah menjadi beberapa level annuities**.

### 9.1 Decomposition principle

Suppose payments memiliki structure:

$$
R_1,R_2,\ldots,R_n.
$$

Universal valuation tetap:

$$
PV_0
=
\sum_{k=1}^{n}R_kv^k.
$$

Jika $R_k$ dapat ditulis sebagai penjumlahan beberapa simple patterns, maka:

$$
PV(\text{whole})
=
PV(\text{component 1})
+
PV(\text{component 2})
+\cdots.
$$

### 9.2 Layering

Contoh conceptual:

payments:

$$
5,\;6,\;7,\;8.
$$

Dapat ditulis sebagai:

- level 5 selama empat periods; plus
- extra stream $0,1,2,3$.

Atau stream bertahap dapat dibangun dengan overlapping level annuities.

Keuntungan decomposition adalah mengurangi risiko indexing error dibanding menjumlahkan banyak terms satu per satu.

> [!IMPORTANT] Recognition Before Formula
> Untuk nonlevel annuity, pertanyaan pertama bukan “formula apa?”, tetapi “payment pattern ini bisa dipecah menjadi apa?”

## 10. 3.8 Annuities with Payments in Geometric Progression

Geometric annuity memiliki payment yang berubah dengan constant ratio.

Suppose first payment pada $t=1$ adalah $P$, dan setiap payment berikutnya adalah $(1+g)$ times payment sebelumnya:

$$
P,\;
P(1+g),\;
P(1+g)^2,\ldots,
P(1+g)^{n-1}.
$$

### 10.1 Present value structure

Discounted payments adalah:

$$
Pv,
$$

$$
P(1+g)v^2,
$$

$$
P(1+g)^2v^3,
$$

dan seterusnya.

Ratio antar discounted terms:

$$
q=(1+g)v
=
\frac{1+g}{1+i}.
$$

Karena itu PV sendiri adalah geometric series.

### 10.2 General formula

Untuk $i\ne g$:

$$
PV
=
Pv
\frac{1-q^n}{1-q}.
$$

Substituting:

$$
\boxed{
PV
=
P\,
\frac{
1-\left(\frac{1+g}{1+i}\right)^n
}{
i-g
}.
}
$$

Formula ini adalah value pada satu period sebelum first payment.

### 10.3 Special case $g=i$

Jika:

$$
g=i,
$$

maka setiap discounted payment sama:

$$
P(1+i)^{k-1}(1+i)^{-k}
=
\frac{P}{1+i}.
$$

Jadi:

$$
\boxed{
PV
=
\frac{nP}{1+i}.
}
$$

Generic formula tampak memiliki denominator nol, tetapi financial value tetap well-defined.

### 10.4 Textbook Example 3.8.1

Roy membeli 25-year annuity-immediate:

- first annual payment $800$;
- payments increase 3% each year;
- annual effective interest rate 7%.

Payment ke-$k$:

$$
800(1.03)^{k-1}.
$$

Present value:

$$
PV
=
\sum_{k=1}^{25}
800(1.03)^{k-1}(1.07)^{-k}.
$$

Factor first term:

$$
PV
=
\frac{800}{1.07}
\left[
1+
\frac{1.03}{1.07}
+\cdots+
\left(\frac{1.03}{1.07}\right)^{24}
\right].
$$

Thus:

$$
PV
=
800\,
\frac{
1-\left(\frac{1.03}{1.07}\right)^{25}
}{
0.07-0.03
}.
$$

Vaaler obtains approximately:

$$
\boxed{
PV\approx \$12{,}284.46.
}
$$

**Meaning:** payment growth 3% partly offsets discounting 7%, tetapi karena $g<i$, present values of successive payments decline.

## 11. 3.9 Annuities with Payments in Arithmetic Progression

Arithmetic annuity memiliki constant **difference** antar-payment.

Vaaler menggunakan general pattern:

$$
P,\;
P+Q,\;
P+2Q,\ldots,
P+(n-1)Q.
$$

Jika $Q>0$, stream meningkat; jika $Q<0$, stream menurun.

### 11.1 Decomposition

Payment ke-$k$ dapat ditulis:

$$
P+(k-1)Q.
$$

Karena itu immediate annuity dapat dipandang sebagai:

- level annuity sebesar $P$; plus
- arithmetic gradient sebesar $Q(k-1)$.

### 11.2 Immediate present value

Vaaler memperoleh:

$$
\boxed{
(IP,Qa)_{\overline{n}|i}
=
P\,a_{\overline{n}|i}
+
\frac{Q}{i}
\left(
a_{\overline{n}|i}
-
nv^n
\right).
}
$$

Corresponding accumulated value:

$$
\boxed{
(IP,Qs)_{\overline{n}|i}
=
P\,s_{\overline{n}|i}
+
\frac{Q}{i}
\left(
s_{\overline{n}|i}
-
n
\right).
}
$$

The algebra is a weighted geometric-series identity. The key practical lesson is the indexing:

$$
P,\;P+Q,\ldots,P+(n-1)Q.
$$

### 11.3 Due version

Shifting the stream one period earlier produces due formulas. Vaaler writes these using the equivalent discount rate $d$:

$$
\boxed{
(IP,Q\ddot{a})_{\overline{n}|i}
=
P\,\ddot{a}_{\overline{n}|i}
+
\frac{Q}{d}
\left(
a_{\overline{n}|i}
-
nv^n
\right).
}
$$

and:

$$
\boxed{
(IP,Q\ddot{s})_{\overline{n}|i}
=
P\,\ddot{s}_{\overline{n}|i}
+
\frac{Q}{d}
\left(
s_{\overline{n}|i}
-
n
\right).
}
$$

The exact symbol typography in Vaaler is specialized; the structural lesson is more important than memorizing every decorated variant.

### 11.4 Increasing and decreasing notation

Vaaler introduces special cases such as:

- $(Ia)_{\overline{n}|i}$ — increasing immediate annuity;
- $(Is)_{\overline{n}|i}$ — its accumulated value;
- $(Da)_{\overline{n}|i}$ — decreasing immediate annuity;
- $(Ds)_{\overline{n}|i}$ — its accumulated value;
- corresponding due variants.

A useful identity follows from pairing increasing and decreasing streams. Payment-by-payment:

$$
k+(n+1-k)=n+1.
$$

Therefore:

$$
\boxed{
(Ia)_{\overline{n}|i}
+
(Da)_{\overline{n}|i}
=
(n+1)a_{\overline{n}|i}.
}
$$

This identity is useful both as derivation tool and sanity check.

### 11.5 Why arithmetic formulas are easy to misindex

Compare:

$$
1,2,\ldots,n
$$

with:

$$
0,1,\ldots,n-1.
$$

They differ by a level annuity of 1. A formula for one pattern cannot be copied blindly to the other.

> [!WARNING] Indexing Trap
> Always write the first three and last payment before choosing $(Ia)$, $(Da)$, or a general $P+Q(k-1)$ formula.

## 12. 3.10 Yield Rate Examples Involving Annuities

Chapter 2 defined yield rate as the rate that makes an equation of value balance. Chapter 3 applies that idea to annuity cash flows.

### 12.1 Basic form

If price $P$, level payment $R$, and term $n$ are known:

$$
P
=
R\,a_{\overline{n}|i}.
$$

Unknown $i$ appears both explicitly and inside:

$$
v^n=(1+i)^{-n},
$$

so closed-form algebra is generally unavailable.

The correct mathematical statement is:

$$
f(i)
=
R\,a_{\overline{n}|i}-P
=
0.
$$

Then solve for the economically relevant root.

### 12.2 Direction check

For positive fixed payments, present value decreases as $i$ increases.

Therefore:

- trial PV too high $\Rightarrow$ trial rate too low;
- trial PV too low $\Rightarrow$ trial rate too high.

This monotonicity provides a strong numerical sanity check.

### 12.3 Cash flow first

A quoted “rate” in a transaction is not automatically the yield. Yield must come from actual cash flows and their timing.

[CF1 SUPPORTING CONTEXT] Detailed DWRR/IRR theory belongs primarily to Topik 1, but annuity yield problems reuse exactly the same equation-of-value logic.

## 13. 3.11 Annuity Symbols for Nonintegral Terms

Annuity symbols are naturally introduced for integer numbers of payment periods because a discrete annuity has an integer number of payments. Vaaler nevertheless extends the algebraic notation to nonintegral terms when useful.

The important distinction is between:

1. **mathematical extension of an annuity factor**, and
2. **literal contractual number of payments**.

Under compound interest, expressions such as:

$$
\frac{1-v^t}{i}
$$

make mathematical sense for noninteger $t$. But a real contract paying at discrete dates cannot make “$12.4$ level payments” without specifying what happens at the fractional endpoint.

> [!IMPORTANT] Interpretation Boundary
> A nonintegral annuity factor can be a useful mathematical interpolation or valuation device. It does not by itself specify the cash-flow mechanics of a fractional final period.

This distinction later matters in loan problems with drop or balloon payments.

## 14. 3.12 Annuities Governed by General Accumulation Functions

Standard formulas such as:

$$
a_{\overline{n}|i}
=
\frac{1-v^n}{i}
$$

depend on a constant compound-interest structure that makes discount factors geometric.

If accumulation is governed by a more general function $a(t)$, the first-principles rule remains valid.

For payment $R_k$ at time $t_k$, its value at time 0 is:

$$
\frac{R_k}{a(t_k)}.
$$

Hence:

$$
\boxed{
PV_0
=
\sum_k
\frac{R_k}{a(t_k)}.
}
$$

For unit payments at integer times:

$$
PV_0
=
\sum_{k=1}^{n}
\frac{1}{a(k)}.
$$

If accumulation varies by period with effective rates $i_1,i_2,\ldots$, then:

$$
a(k)
=
\prod_{j=1}^{k}(1+i_j),
$$

so:

$$
\boxed{
PV_0
=
\sum_{k=1}^{n}
R_k
\prod_{j=1}^{k}(1+i_j)^{-1}.
}
$$

This is the conceptual foundation of [[2.6 Varying Interest Rates]].

> [!WARNING] Equivalent-Rate Trap
> One level rate that reproduces total accumulation over the full horizon does not necessarily reproduce the value of an annuity, because each payment experiences a different subset of rates.

## 15. 3.13 The Investment Year Method

[CF1 SUPPORTING CONTEXT]

Vaaler closes the chapter with a model in which credited rates may depend on both:

- the **year in which money was invested**, and
- how long that money has already been invested.

This is the **investment year method**.

### 15.1 Select and ultimate rates

A newly invested dollar may receive **select rates** during its early investment years. After a specified duration, it transitions to an **ultimate rate**.

Therefore two deposits made in different calendar years can earn different rates during the same calendar year because they are at different stages of their investment-year schedule.

### 15.2 Portfolio yield method

The alternative **portfolio yield method** uses the same portfolio/ultimate rate for all funds during a calendar period, regardless of investment year.

This removes the select-by-vintage distinction.

### 15.3 Textbook Example 3.13.4

For Derartu’s $3,000 single deposit, Vaaler illustrates portfolio-yield accumulation using annual ultimate rates:

$$
5\%,\;5\%,\;5\%,\;5.5\%,\;5.75\%,\;6.25\%,\;6.15\%.
$$

The end balance is:

$$
3000(1.05)^3
(1.055)
(1.0575)
(1.0625)
(1.0615).
$$

Vaaler obtains approximately:

$$
\boxed{
\$4{,}369.89.
}
$$

The lesson is not a new annuity formula. It is that varying-rate valuation requires following the **actual sequence of rates applicable to each cash flow**.

## 16. Core Formula Network

### Level annuities

$$
\boxed{
a_{\overline{n}|i}
=
\frac{1-v^n}{i}
}
$$

$$
\boxed{
s_{\overline{n}|i}
=
\frac{(1+i)^n-1}{i}
}
$$

$$
\boxed{
\ddot{a}_{\overline{n}|i}
=
(1+i)a_{\overline{n}|i}
=
\frac{1-v^n}{d}
}
$$

$$
\boxed{
\ddot{s}_{\overline{n}|i}
=
(1+i)s_{\overline{n}|i}
}
$$

### Perpetuity

$$
\boxed{
a_{\overline{\infty}|i}
=
\frac{1}{i}
}
$$

$$
\boxed{
\ddot{a}_{\overline{\infty}|i}
=
\frac{1}{d}
}
$$

### Deferred annuity

$$
\boxed{
{}_{m|}a_{\overline{n}|i}
=
v^m a_{\overline{n}|i}
=
a_{\overline{m+n}|i}
-
a_{\overline{m}|i}
}
$$

### Geometric annuity

$$
\boxed{
PV
=
P
\frac{
1-\left(\frac{1+g}{1+i}\right)^n
}{
i-g
},
\qquad i\ne g.
}
$$

### Arithmetic annuity

For payments $P+Q(k-1)$ at $t=k$:

$$
\boxed{
PV
=
P\,a_{\overline{n}|i}
+
\frac{Q}{i}
\left(
a_{\overline{n}|i}
-
nv^n
\right).
}
$$

## 17. Important Distinctions

> [!IMPORTANT] Annuity-Immediate vs Annuity-Due
> Same number of payments, same amounts, but the due stream is shifted one period earlier.

> [!IMPORTANT] Present Value vs Accumulated Value
> They value the same cash flows at different focal dates. They must be related by the accumulation factor between those dates.

> [!IMPORTANT] Deferred Period vs First-Payment Time
> If an immediate annuity first pays at $t=m+1$, the standard annuity value sits at $t=m$.

> [!IMPORTANT] Arithmetic vs Geometric
> Arithmetic progression = constant **difference**.  
> Geometric progression = constant **ratio**.

> [!IMPORTANT] Loan Balance vs Original Loan
> Outstanding balance is a value at an intermediate date, not the original principal carried unchanged.

> [!IMPORTANT] Constant Rate vs General Accumulation
> Standard annuity factors rely on geometric discounting. With general accumulation, return to payment-by-payment valuation.

## 18. Sanity Checks

For $i>0$:

$$
a_{\overline{n}|i}
<
n
<
s_{\overline{n}|i}.
$$

Reason:

- PV discounts payments;
- accumulated value compounds earlier payments.

Also:

$$
\ddot{a}_{\overline{n}|i}
>
a_{\overline{n}|i}.
$$

For deferred annuity:

$$
v^{m+1}a_{\overline{n}|i}
<
v^m a_{\overline{n}|i}
$$

when $i>0$: moving the entire stream farther into the future lowers present value.

For geometric annuity:

- $g<i$: discounted terms tend to shrink;
- $g=i$: discounted terms are equal;
- $g>i$: discounted terms can increase.

For a fully amortizing level-payment loan:

$$
B_0=L,\qquad B_n=0.
$$

## 19. CF1 Connection Map

```text
Chapter 1–2
TVM + equation of value
        ↓
Chapter 3
annuity notation
        ├─ level immediate/due
        │      ↓
        │   [[2.1 Annuity-Immediate and Annuity-Due]]
        │
        ├─ perpetuity
        │      ↓
        │   [[2.2 Perpetuity]]
        │
        ├─ deferred valuation
        │      ↓
        │   [[2.5 Deferred Annuities]]
        │
        ├─ arithmetic/geometric patterns
        │      ↓
        │   [[2.3 Varying Annuities]]
        │
        ├─ general accumulation / investment-year rates
        │      ↓
        │   [[2.6 Varying Interest Rates]]
        │
        └─ outstanding balance
               ↓
           Topik 4 Loans
```

## 20. Quick Reading Review

- An annuity formula is a compressed equation of value.
- Annuity-immediate pays at the end of periods; annuity-due at the beginning.
- $a_{\overline{n}|}$ is the PV one period before the first immediate payment.
- $s_{\overline{n}|}$ is the AV at the date of the last immediate payment.
- Due values equal immediate values shifted one period earlier.
- A perpetuity-immediate has PV $1/i$ for $i>0$.
- Deferred annuity = value locally, then shift.
- ${}_{m|}a_{\overline{n}|}=v^m a_{\overline{n}|}$.
- Outstanding loan balance is the PV of remaining payments at the balance date.
- Nonlevel annuities should first be inspected for decomposition into simpler streams.
- Geometric varying payments remain a geometric series after discounting.
- Arithmetic varying payments reduce to level plus weighted-geometric components.
- Unknown annuity yield is generally a numerical root.
- Noninteger annuity factors require interpretation care when actual payments are discrete.
- Under general accumulation functions, value each payment using the discount factor appropriate to its date.
- Investment-year methods illustrate why different cash flows may experience different rate sequences.

## 21. Compression Notes

### Retained in Detail

- level immediate/due valuation and derivations;
- perpetuity logic;
- deferred annuity and arbitrary-date valuation;
- prospective/retrospective loan-balance idea;
- nonlevel decomposition;
- geometric and arithmetic progression mechanics;
- representative geometric textbook example;
- yield-root logic;
- general accumulation principle;
- investment-year/portfolio-yield distinction.

### Compressed

- repeated numeric examples with identical annuity-factor mechanics;
- calculator keystrokes;
- long routine algebra;
- detailed historical/industry examples;
- repeated exercises.

### Omitted

- Chapter 3 problem set;
- calculator-only instructions;
- repetitive examples that introduce no new structure.

## Source Traceability

- **Primary textbook:** Vaaler, Vaaler & Daniel, *Mathematical Interest Theory*, 2nd ed., Chapter 3, “Annuities (annuities certain).”
- **Source scope used:** Sections 3.1–3.13.
- **CF1 scope:** Topik 2 — Anuitas dan Nilai Arus Kas; Vaaler Chapters 3–4 are official references.
- **No outside textbook was used to expand the mathematical content.**
