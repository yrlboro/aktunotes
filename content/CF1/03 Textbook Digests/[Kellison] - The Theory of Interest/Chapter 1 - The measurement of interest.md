---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "1"
chapter_title: "The measurement of interest"
cf1_topics: ["1.1", "1.2", "1.4"]
cf1_relevance: "High"
source_scope: "Kellison Chapter 1, Sections 1.1-1.10"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 1: The measurement of interest

> [!ABSTRACT] Chapter in One View
> Chapter ini membangun bahasa dasar *theory of interest*: bagaimana nilai uang berubah terhadap waktu dan bagaimana perubahan tersebut diukur. Kellison memulai dari **accumulation function** dan **amount function**, lalu mendefinisikan effective interest rate dari pertumbuhan aktual selama satu periode. Dua model pertumbuhan utama kemudian dibandingkan: **simple interest**, yang menghasilkan pertumbuhan absolut konstan, dan **compound interest**, yang menghasilkan pertumbuhan relatif konstan. Dari arah waktu yang berlawanan muncul **present value**, **discount factor**, dan **effective discount rate**. Chapter selanjutnya memperkenalkan nominal interest/discount rates ketika konversi terjadi lebih dari sekali setahun, lalu menyatukan konsep pertumbuhan kontinu melalui **force of interest**. Bagian akhir menunjukkan bahwa semua model tersebut dapat diperluas ke **varying interest**, baik rate per periode maupun force yang berubah terhadap waktu. Untuk CF1, chapter ini adalah fondasi langsung bagi [[1.1 Interest Rates and Discount Rates]], [[1.2 Effective, Nominal, and Force of Interest]], dan [[1.4 Accumulation and Present Value]].

## 1. Why This Chapter Exists

Interest dipandang Kellison sebagai kompensasi yang dibayar borrower kepada lender atas penggunaan modal. Agar masalah finansial yang berbeda dapat dianalisis dengan kerangka yang sama, diperlukan cara formal untuk menyatakan **berapa nilai investasi pada waktu tertentu** dan **berapa laju pertumbuhannya**.

Chapter ini karena itu bergerak dari objek paling dasar—nilai investasi sebagai fungsi waktu—menuju beberapa cara mengutip rate. Setiap rate sebenarnya hanyalah cara berbeda untuk menyatakan pola growth/discount yang sama. Pemahaman hubungan tersebut jauh lebih penting daripada menghafal formula secara terpisah.

## 2. Chapter Map

- **1.1 Introduction** — interest sebagai compensation for use of capital.
- **1.2 The Accumulation and Amount Functions** — $a(t)$, $A(t)$, dan interest earned.
- **1.3 The Effective Rate of Interest** — effective interest per measurement period.
- **1.4 Simple Interest** — linear accumulation.
- **1.5 Compound Interest** — exponential accumulation dan reinvestment of interest.
- **1.6 Present Value** — discounting sebagai kebalikan accumulation.
- **1.7 The Effective Rate of Discount** — interest paid in advance dan hubungan $i,d,v$.
- **1.8 Nominal Rates of Interest and Discount** — conversion frequency.
- **1.9 Forces of Interest and Discount** — instantaneous/continuous measure of growth.
- **1.10 Varying Interest** — rate atau force berubah sepanjang waktu.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 1.1–1.3 | Core | [[1.1 Interest Rates and Discount Rates]] |
| 1.4–1.6 | Core | [[1.4 Accumulation and Present Value]] |
| 1.7 | Core | [[1.1 Interest Rates and Discount Rates]] |
| 1.8–1.9 | Core | [[1.2 Effective, Nominal, and Force of Interest]] |
| 1.10 | Core | [[1.4 Accumulation and Present Value]] |

## 3. 1.1 Introduction

Kellison menekankan bahwa principal dan interest hampir selalu dinyatakan dalam unit uang yang sama. Interest bukan sesuatu yang terpisah dari capital; ia adalah perubahan nilai capital selama waktu tertentu. Seluruh chapter kemudian berfokus pada ukuran kuantitatif untuk pertumbuhan tersebut.

## 4. 1.2 The Accumulation and Amount Functions

### Intuisi

Jika satu unit uang diinvestasikan pada $t=0$, kita ingin sebuah fungsi yang memberi tahu berapa nilainya pada setiap waktu $t$. Fungsi inilah **accumulation function**.

### Definitions

Untuk investasi awal sebesar 1:

$$
a(t)=\text{accumulated value at time }t,
$$

dengan sifat dasar:

$$
a(0)=1.
$$

Jika initial principal adalah $k$, **amount function** adalah

$$
A(t)=k\,a(t).
$$

Kellison mengasumsikan hubungan proporsional ini kecuali financial arrangement secara eksplisit membuat growth bergantung pada ukuran investasi.

Interest yang diperoleh selama periode ke-$n$ adalah

$$
I_n=A(n)-A(n-1).
$$

> [!IMPORTANT] Important Distinction
> **Accumulation function $a(t)$** mengukur growth per unit principal, sedangkan **amount function $A(t)$** adalah nilai aktual investasi dengan principal tertentu.

### Interpretation of the shape of $a(t)$

Kellison menunjukkan beberapa pola yang mungkin terjadi: linear, nonlinear/exponential, constant, atau stepwise. Jadi definisi $a(t)$ sendiri tidak memaksakan compound interest. Bentuk accumulation function justru menjelaskan *jenis* growth yang sedang digunakan.

### Textbook Example — proportional valuation

Dalam Example 1.1, nilai investasi $10{,}000$ diberikan pada beberapa waktu. Ketika $5{,}000$ masuk ke fund yang sama pada waktu 2, nilai pada waktu 4 diperoleh dengan memakai ratio growth fund antara waktu 2 dan 4:

$$
5{,}000\frac{A(4)}{A(2)}.
$$

Lesson utamanya: untuk sebuah environment pertumbuhan yang sama, nilai pada dua waktu dapat dibandingkan melalui **ratio amount/accumulation functions**.

> [!INFO] CF1 Connection
> Ini adalah fondasi untuk semua present-value/future-value calculation pada [[1.4 Accumulation and Present Value]].

## 5. 1.3 The Effective Rate of Interest

### Definition

**Effective rate of interest** selama satu measurement period adalah jumlah interest yang diperoleh selama periode tersebut per unit principal pada awal periode.

Dengan satu unit diinvestasikan pada awal periode:

$$
a(1)=1+i.
$$

Untuk amount function:

$$
i=\frac{A(1)-A(0)}{A(0)}.
$$

Jika rate dapat berubah antarperiode, effective rate pada periode ke-$n$ adalah

$$
i_n=\frac{A(n)-A(n-1)}{A(n-1)}
=\frac{a(n)-a(n-1)}{a(n-1)}.
$$

Sehingga recursion growth-nya:

$$
a(n)=a(n-1)(1+i_n).
$$

### Why “effective” matters

Kata *effective* menunjukkan bahwa rate benar-benar mengukur pertumbuhan selama measurement period tertentu. Karena denominator adalah balance **pada awal periode**, rate ini konsisten dengan gagasan interest earned on beginning principal.

### Textbook Example 1.2 — varying effective rates

Dari balance tahunan pada Example 1.1, Kellison menghitung masing-masing annual effective rate sebagai

$$
i_n=\frac{A(n)-A(n-1)}{A(n-1)}.
$$

Contohnya balance yang naik dari $10{,}000$ menjadi $10{,}600$ memberi $i_1=6\%$, sedangkan balance $10{,}600$ menjadi $11{,}130$ memberi $i_2=5\%$. Satu fund tidak harus memiliki rate yang sama pada setiap tahun.

## 6. 1.4 Simple Interest

### Structure

Under simple interest, **amount of interest earned per period is constant**. Jika simple-interest rate adalah $i$ per period:

$$
a(t)=1+it.
$$

Untuk principal $P$ selama $t$ periods:

$$
A(t)=P(1+it),
$$

sehingga total interest adalah

$$
I=Pit.
$$

### Effective rate generated by simple interest

Walaupun simple-interest rate $i$ konstan, effective rate pada setiap successive period tidak konstan:

$$
i_n
=\frac{i}{1+i(n-1)}.
$$

Karena denominator terus membesar, $i_n$ menurun seiring waktu.

> [!WARNING] Important Distinction
> **Constant simple-interest rate ≠ constant effective interest rate.** Simple interest menjaga *absolute dollar growth* konstan; compound interest menjaga *relative percentage growth* konstan.

### Fractional periods

Kellison memperluas model linear ke noninteger $t$ dengan

$$
a(t)=1+it.
$$

Ini konsisten dengan ide bahwa interest untuk fractional period berbanding lurus terhadap panjang waktunya.

### Textbook Example 1.3

$2{,}000$ selama 4 tahun pada simple interest 8%:

$$
A(4)=2{,}000[1+0.08(4)]=2{,}640.
$$

Interest total:

$$
2{,}640-2{,}000=640.
$$

## 7. 1.5 Compound Interest

### Why compound interest is different

Compound interest mengasumsikan interest yang telah diperoleh **reinvested** dan ikut menghasilkan interest berikutnya. Karena itu balance pada akhir setiap period menjadi principal untuk period berikutnya.

Untuk effective rate konstan $i$:

$$
a(t)=(1+i)^t.
$$

Untuk principal $P$:

$$
A(t)=P(1+i)^t.
$$

Untuk integer $n$:

$$
A(n)=P(1+i)^n.
$$

### Constant effective rate

Dengan compound accumulation:

$$
i_n
=\frac{(1+i)^n-(1+i)^{n-1}}{(1+i)^{n-1}}
=i.
$$

Jadi compound interest menghasilkan effective interest rate yang sama untuk setiap equal measurement period.

### Fractional periods

Kellison menggunakan exponential extension:

$$
a(t)=(1+i)^t
$$

untuk noninteger $t$ juga. Ia juga mendiskusikan convention alternatif: compound interest untuk completed periods dan simple interest untuk final fractional period. Convention tersebut menghasilkan hasil sedikit berbeda dan harus dibedakan dari true exponential compound accumulation.

### Textbook Example 1.4

Mengerjakan kembali investasi $2{,}000$ selama empat tahun pada 8%, tetapi kali ini compound interest:

$$
2{,}000(1.08)^4=2{,}720.98.
$$

Lebih besar daripada hasil simple interest $2{,}640$ karena adanya **interest on interest**.

### Textbook Example 1.5 — power of compounding

Investasi $10{,}000$ pada 7% dari umur 35 sampai 65 menunjukkan bahwa interest yang diperoleh pada dekade terakhir jauh lebih besar daripada dekade pertama. Ini bukan karena rate berubah, tetapi karena base yang menerima interest semakin besar.

## 8. 1.6 Present Value

### Discounting as the reverse of accumulation

Jika 1 hari ini menjadi $1+i$ setelah satu period, maka present value dari 1 yang dibayar satu period mendatang adalah

$$
v=\frac{1}{1+i}.
$$

Kellison menyebut $v$ sebagai **discount factor**.

Untuk general accumulation function, discount function adalah reciprocal:

$$
a^{-1}(t)=\frac{1}{a(t)}.
$$

Dengan simple interest:

$$
PV(F_t)=\frac{F_t}{1+it}.
$$

Dengan compound interest:

$$
PV(F_t)=F_t(1+i)^{-t}=F_t v^t.
$$

> [!IMPORTANT] Direction of Time
> Accumulating maju ke future berarti mengalikan accumulation factor. Discounting mundur ke present berarti membagi accumulation factor, atau mengalikan reciprocal-nya.

### Textbook Example 1.7

Amount yang harus diinvestasikan sekarang agar menjadi $1{,}000$ dalam 3 tahun pada 9% compound interest:

$$
PV=1{,}000(1.09)^{-3}=772.18.
$$

Kellison membandingkannya dengan simple-interest present value untuk menunjukkan bahwa model growth yang berbeda menghasilkan present value berbeda.

## 9. 1.7 The Effective Rate of Discount

### Interest paid in advance

Effective discount rate $d$ mengukur interest/discount berdasarkan amount yang jatuh tempo **pada akhir periode**, bukan principal yang benar-benar tersedia pada awal periode.

Jika borrower akan membayar 1 pada akhir periode dan discount sebesar $d$ dipotong di muka, borrower menerima hanya

$$
1-d.
$$

Karena amount 1 pada akhir period setara dengan present value $v$, maka

$$
v=1-d.
$$

Dengan

$$
v=\frac{1}{1+i},
$$

kita memperoleh hubungan fundamental:

$$
d=\frac{i}{1+i}=iv,
$$

$$
i=\frac{d}{1-d},
$$

$$
d=i(1-d),
$$

serta

$$
i-d=id.
$$

### Why $d<i$ for positive rates

Interest rate memakai beginning balance sebagai denominator, sedangkan discount rate memakai ending amount sebagai denominator. Untuk jumlah interest yang sama, ending amount lebih besar daripada beginning balance, sehingga rate discount lebih kecil.

> [!WARNING] Important Distinction
> $i$ dan $d$ bukan dua rate yang boleh ditukar begitu saja. Mereka disebut **equivalent** jika menghasilkan accumulation yang sama selama period yang sama.

### Simple discount

Kellison juga membahas simple discount untuk fractional periods:

$$
a^{-1}(t)=1-dt,
$$

atau accumulation function-nya

$$
a(t)=\frac{1}{1-dt}.
$$

Seperti simple interest, simple discount tidak menghasilkan constant effective rate antarperiod dan paling aman dipakai hanya sesuai convention yang diberikan.

## 10. 1.8 Nominal Rates of Interest and Discount

### Why nominal rates are introduced

Banyak financial contracts mengutip annual rate tetapi interest dikonversi beberapa kali per tahun. Jika nominal rate of interest convertible $m$thly adalah $i^{(m)}$, maka rate efektif per conversion period adalah

$$
\frac{i^{(m)}}{m}.
$$

Jika satu tahun memuat $m$ conversion periods, equivalent annual effective rate memenuhi

$$
1+i
=\left(1+\frac{i^{(m)}}{m}\right)^m.
$$

Sehingga

$$
i^{(m)}
=m\left[(1+i)^{1/m}-1\right].
$$

### Nominal discount rate

Untuk nominal discount rate $d^{(m)}$ convertible $m$thly, effective discount per conversion period adalah

$$
\frac{d^{(m)}}{m},
$$

dan equivalent annual discount factor adalah

$$
1-d
=\left(1-\frac{d^{(m)}}{m}\right)^m.
$$

Karena $1-d=v=(1+i)^{-1}$, nominal interest dan nominal discount dapat dikonversi dengan terlebih dahulu menyamakan **annual accumulation/discount factor**.

> [!NOTE] Rate-Basis Rule
> Quoted nominal rate bukan annual effective rate. Untuk valuation, pertama ubah menjadi effective rate pada conversion/payment period yang relevan.

### Textbook Example 1.13

Kellison mencari nominal rate convertible quarterly yang equivalent dengan annual effective rate tertentu dengan memecahkan

$$
\left(1+\frac{i^{(4)}}{4}\right)^4=1+i.
$$

Ini menunjukkan prinsip umum: **equivalent rates harus menghasilkan factor yang sama selama interval waktu yang sama**.

## 11. 1.9 Forces of Interest and Discount

### Continuous growth

Force of interest adalah ukuran instantaneous growth. Untuk general accumulation function:

$$
\delta_t=\frac{a'(t)}{a(t)}.
$$

Equivalently,

$$
\delta_t=\frac{d}{dt}\ln a(t).
$$

Integrating:

$$
\ln a(t)=\int_0^t \delta_s\,ds,
$$

sehingga

$$
a(t)=\exp\left(\int_0^t\delta_s\,ds\right).
$$

Jika force konstan, $\delta_t=\delta$:

$$
a(t)=e^{\delta t}.
$$

Equivalent annual effective rate:

$$
1+i=e^\delta,
$$

jadi

$$
\delta=\ln(1+i).
$$

### Force as the limit of nominal rates

Kellison menunjukkan bahwa ketika conversion frequency meningkat tanpa batas,

$$
\lim_{m\to\infty}i^{(m)}=\delta,
$$

serta analogously,

$$
\lim_{m\to\infty}d^{(m)}=\delta.
$$

Karena interest dan discount conversion interval menjadi infinitesimal, force of interest dan force of discount berimpit.

### Textbook Example 1.14

$1{,}000$ selama 10 tahun pada constant force 5%:

$$
1{,}000e^{0.05(10)}=1{,}648.72.
$$

### Textbook Example 1.16 — varying force

Untuk varying force $\delta_t$, value dari payment pada $T$ yang dinilai di $0$ adalah

$$
PV=X\exp\left(-\int_0^T\delta_t\,dt\right).
$$

Kellison menggunakan integral force untuk menilai dua future payments pada waktu berbeda. Struktur ini memperlihatkan bahwa continuous compounding bukan sekadar formula $e^{\delta t}$; general case adalah **integral dari instantaneous force**.

## 12. 1.10 Varying Interest

Kellison menutup chapter dengan dua pola varying interest yang penting.

### 12.1 Varying effective rates by period

Jika $i_k$ adalah effective rate selama periode ke-$k$, maka untuk integer $t$:

$$
a(t)=\prod_{k=1}^{t}(1+i_k).
$$

Present-value factor-nya:

$$
a^{-1}(t)=\prod_{k=1}^{t}(1+i_k)^{-1}.
$$

### Textbook Example 1.17

$1{,}000$ selama 15 tahun dengan 5% untuk lima tahun pertama, 4.5% untuk lima tahun kedua, dan 4% untuk lima tahun terakhir:

$$
1{,}000(1.05)^5(1.045)^5(1.04)^5=1{,}935.08.
$$

Key lesson: rate berbeda antarblock berarti **multiplying growth factors**, bukan merata-ratakan rates secara aritmetika.

### 12.2 Equivalent level effective return

Jika annual returns berturut-turut adalah $i_1,\ldots,i_n$, equivalent level effective return $j$ memenuhi

$$
(1+j)^n=\prod_{k=1}^{n}(1+i_k),
$$

atau

$$
j=\left[\prod_{k=1}^{n}(1+i_k)\right]^{1/n}-1.
$$

Example 1.18 memakai returns $15\%$, $-5\%$, dan $8\%$:

$$
j=[(1.15)(0.95)(1.08)]^{1/3}-1\approx 5.67\%.
$$

Negative return tetap masuk melalui accumulation factor $1+i_k$.

### 12.3 Varying force of interest

Untuk force yang berubah sepanjang waktu:

$$
a(t)=\exp\left(\int_0^t\delta_s\,ds\right).
$$

Equivalent constant force selama $n$ years adalah average force:

$$
\bar\delta
=\frac{1}{n}\int_0^n\delta_t\,dt.
$$

Jika force piecewise constant per year, equivalent level force adalah arithmetic mean dari annual forces. Ini berbeda dari effective returns, yang harus dirata-ratakan melalui **geometric mean of accumulation factors**.

### Textbook Example 1.19

Dengan continuous returns 15%, -5%, dan 8% selama tiga consecutive years:

$$
e^{3\delta}=e^{0.15}e^{-0.05}e^{0.08}=e^{0.18},
$$

sehingga

$$
\delta=0.06=6\%.
$$

> [!WARNING] Important Distinction
> Equivalent level **effective** return menggunakan geometric mean dari $1+i_k$. Equivalent level **continuous** return menggunakan arithmetic mean dari forces ketika tiap force berlaku selama interval yang sama.

## Chapter Synthesis

Chapter 1 dapat dipandang sebagai satu model besar tentang **growth factor**. Mulai dari satu unit capital, accumulation function $a(t)$ menyatakan apa yang terjadi terhadap nilainya. Effective interest mengukur relative growth terhadap balance awal; simple interest memilih growth linear, sedangkan compound interest memilih multiplicative/exponential growth. Present value membalik arah waktu dengan reciprocal accumulation factor. Effective discount rate mengukur dollar interest yang sama tetapi dengan denominator ending value. Nominal rates hanyalah quoting convention yang membagi tahun menjadi conversion periods, sedangkan force of interest mengambil limit ketika period tersebut menjadi infinitesimal. Ketika rate berubah, semua reasoning tetap sama: value pada akhir horizon adalah initial amount dikali **product of discrete accumulation factors** atau **exponential of integrated force**. Jadi inti chapter bukan kumpulan formula terpisah, melainkan satu ide: tentukan law of accumulation yang benar, lalu pindahkan nilai antarwaktu secara konsisten.

## Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| $A(t)=A(0)a(t)$ | Amount dari principal tertentu | Same growth environment | [[1.4 Accumulation and Present Value]] |
| $i_n=[A(n)-A(n-1)]/A(n-1)$ | Effective rate period $n$ | Denominator = beginning balance | [[1.1 Interest Rates and Discount Rates]] |
| $a(t)=1+it$ | Simple-interest accumulation | Simple interest | [[1.4 Accumulation and Present Value]] |
| $a(t)=(1+i)^t$ | Compound-interest accumulation | Constant effective $i$ | [[1.4 Accumulation and Present Value]] |
| $v=(1+i)^{-1}$ | One-period discount factor | Compound interest | [[1.1 Interest Rates and Discount Rates]] |
| $d=1-v=i/(1+i)$ | Effective discount rate | Same one-period equivalence | [[1.1 Interest Rates and Discount Rates]] |
| $i=d/(1-d)$ | Convert discount to interest | Same period | [[1.1 Interest Rates and Discount Rates]] |
| $1+i=(1+i^{(m)}/m)^m$ | Nominal interest to annual effective | $m$ conversions/year | [[1.2 Effective, Nominal, and Force of Interest]] |
| $1-d=(1-d^{(m)}/m)^m$ | Nominal discount to annual effective discount | $m$ conversions/year | [[1.2 Effective, Nominal, and Force of Interest]] |
| $\delta_t=a'(t)/a(t)$ | Instantaneous force | Differentiable $a(t)$ | [[1.2 Effective, Nominal, and Force of Interest]] |
| $a(t)=\exp(\int_0^t\delta_s ds)$ | Accumulation from varying force | Continuous model | [[1.2 Effective, Nominal, and Force of Interest]] |
| $1+i=e^\delta$ | Effective rate vs constant force | One-year equivalent | [[1.2 Effective, Nominal, and Force of Interest]] |
| $a(n)=\prod_{k=1}^n(1+i_k)$ | Varying discrete rates | $i_k$ per period | [[1.4 Accumulation and Present Value]] |

## Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $a(t)$ | Accumulation function per unit principal | time $t$ | $a(0)=1$ |
| $A(t)$ | Amount function | currency | Often $A(t)=A(0)a(t)$ |
| $I_n$ | Interest earned in period $n$ | currency | $A(n)-A(n-1)$ |
| $i$ | Effective interest rate | per measurement period | Beginning-balance denominator |
| $i_n$ | Effective rate in period $n$ | period $n$ | May vary |
| $d$ | Effective discount rate | per period | Ending-amount denominator |
| $v$ | Discount factor | one period | $v=(1+i)^{-1}=1-d$ |
| $i^{(m)}$ | Nominal interest rate | annual, convertible $m$thly | Periodic rate $i^{(m)}/m$ |
| $d^{(m)}$ | Nominal discount rate | annual, convertible $m$thly | Periodic discount $d^{(m)}/m$ |
| $\delta_t$ | Force of interest at time $t$ | instantaneous | $a'(t)/a(t)$ |
| $\delta$ | Constant force | continuous | $\ln(1+i)$ |

## Compression Notes

### Retained in Detail

- accumulation/amount function framework;
- effective interest and discount definitions;
- simple vs compound interest distinction;
- present value and discounting;
- nominal rate conversion;
- force of interest and integral form;
- varying discrete rates and varying forces;
- representative textbook examples that establish reusable reasoning.

### Condensed

- repeated numerical examples with the same computational pattern;
- detailed calculator-oriented arithmetic;
- most algebraic proofs once the underlying relationship is already established;
- the end-of-chapter summary table was synthesized into **Key Relationships**.

### Omitted / Beyond CF1

- appendix proofs for functional equations of simple/compound accumulation were not reproduced line-by-line;
- routine end-of-chapter exercises were omitted;
- historical or practice-context discussion not required for understanding the mathematics was compressed.

## CF1 Connection Map

```text
Accumulation / amount functions
        ↓
Effective interest rate
        ↓
Simple vs compound accumulation
        ↓
Present value ↔ discount factor ↔ effective discount rate
        ↓
Nominal rates ↔ equivalent periodic rates
        ↓
Force of interest / continuous compounding
        ↓
Varying discrete or continuous rates
        ↓
[[1.1 Interest Rates and Discount Rates]]
[[1.2 Effective, Nominal, and Force of Interest]]
[[1.4 Accumulation and Present Value]]
```

## Quick Reading Review

- $a(t)$ is the fundamental object: all rate quotations describe how it grows.
- Effective interest uses the **beginning balance** as denominator.
- Simple interest is linear: $a(t)=1+it$; its successive effective rates decline.
- Compound interest is multiplicative: $a(t)=(1+i)^t$; its effective rate is constant.
- Present value is obtained through the reciprocal accumulation factor.
- $v=1/(1+i)=1-d$ links interest and discount language.
- $d=i/(1+i)$, so for positive rates $d<i$.
- Nominal rate convertible $m$thly must first be turned into a periodic effective rate.
- Equivalent rates are defined by equal accumulation over the same interval.
- Force of interest is $\delta_t=a'(t)/a(t)$.
- Constant force gives $a(t)=e^{\delta t}$ and $\delta=\ln(1+i)$.
- Varying effective rates combine by multiplying $(1+i_k)$ factors.
- Varying forces combine through integration.
- Equivalent effective returns average multiplicatively; equivalent continuous returns average additively in the exponent.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter framing | Kellison Chapter 1 §1.1 |
| Accumulation and amount functions | §1.2 |
| Effective rate of interest | §1.3 |
| Simple interest | §1.4 |
| Compound interest | §1.5 |
| Present value | §1.6 |
| Effective rate of discount | §1.7 |
| Nominal rates of interest and discount | §1.8 |
| Forces of interest and discount | §1.9 |
| Varying interest | §1.10 |
