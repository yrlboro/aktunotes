---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "1"
chapter_title: "The growth of money"
cf1_topics: ["1.1", "1.2", "1.3", "1.4"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 1, Sections 1.1–1.14; problem set 1.15 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 1: The growth of money

> [!ABSTRACT] Chapter in One View
> Chapter ini membangun bahasa dasar *interest theory*: bagaimana uang berubah nilainya sepanjang waktu, bagaimana pertumbuhan itu direpresentasikan oleh **amount function** dan **accumulation function**, serta bagaimana kita mengukur pertumbuhan dengan *effective interest rate* dan *effective discount rate*. Vaaler mulai dari *simple interest*, lalu menunjukkan mengapa *compound interest* menjadi model utama ketika tingkat efektif per periode harus konsisten. Dari sini muncul *discount function* dan gagasan **time value of money**, kemudian hubungan fundamental antara $i$, $d$, dan $v$. Chapter juga memperluas rate menjadi *nominal rates* yang convertible beberapa kali per tahun, lalu mengambil limit menuju **force of interest** $\delta$. Untuk accumulation function umum, force of interest menjadi ukuran pertumbuhan sesaat dan menentukan $a(t)$ melalui integral. Bagian terakhir memasukkan **inflation** dan membedakan pertumbuhan nominal dari pertumbuhan daya beli riil. Ini adalah fondasi langsung untuk [[1.1 Interest Rates and Discount Rates]], [[1.2 Effective, Nominal, and Force of Interest]], [[1.3 Cash Flow Equations and Inflation]], dan [[1.4 Accumulation and Present Value]].

## 1. Why This Chapter Exists

Interest theory membutuhkan cara yang konsisten untuk membandingkan uang pada waktu yang berbeda. Sebelum dapat menilai anuitas, pinjaman, obligasi, atau serangkaian cash flow, kita harus menjawab pertanyaan yang lebih dasar: jika sejumlah uang ditempatkan sekarang, berapa nilainya pada waktu $t$; sebaliknya, berapa nilai sekarang dari pembayaran masa depan; dan bagaimana *rate quotation* berbeda—interest, discount, nominal, atau force—mewakili pertumbuhan ekonomi yang sama.

Vaaler membangun chapter secara bertahap. Pertama, ia mendefinisikan objek matematika yang menggambarkan pertumbuhan uang. Kedua, ia membandingkan simple dan compound interest. Ketiga, ia memperkenalkan interest paid in advance melalui discount rates dan kemudian present value melalui discount function. Setelah model effective rate dipahami, ia membahas nominal rates dan force of interest. Terakhir, nominal growth dibandingkan dengan perubahan purchasing power akibat inflation.

## 2. Chapter Map

- **1.1 Introduction** — orientasi chapter.
- **1.2 What is Interest?** — alasan ekonomi interest dan definisi interest sebagai pertambahan nilai.
- **1.3 Accumulation and Amount Functions** — $A_K(t)$, $a(t)$, dan effective interest rate per interval.
- **1.4 Simple Interest / Linear Accumulation Functions** — $a(t)=1+st$.
- **1.5 Compound Interest (The Usual Case!)** — $a(t)=(1+i)^t$ dan time consistency.
- **1.6 Interest in Advance / The Effective Discount Rate** — $d$ dan equivalence dengan $i$.
- **1.7 Discount Functions / The Time Value of Money** — $v(t)=1/a(t)$ dan present/current value.
- **1.8 Simple Discount** — linear discount function.
- **1.9 Compound Discount** — equivalence compound discount dan compound interest.
- **1.10 Nominal Rates of Interest and Discount** — convertible $m$ times per year.
- **1.11 A Friendly Competition (Constant Force of Interest)** — limit nominal rates menuju $\delta$.
- **1.12 Force of Interest** — force untuk accumulation function umum.
- **1.13 Note for Those Who Skipped Sections 1.11 and 1.12** — conceptual bridge tanpa kalkulus.
- **1.14 Inflation** — nominal versus real growth.
- **1.15 Problems** — latihan; tidak diringkas sebagai materi naratif.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 1.2–1.6 | Core | [[1.1 Interest Rates and Discount Rates]] |
| 1.7–1.9 | Core | [[1.4 Accumulation and Present Value]], [[1.1 Interest Rates and Discount Rates]] |
| 1.10–1.13 | Core | [[1.2 Effective, Nominal, and Force of Interest]] |
| 1.14 | Core | [[1.3 Cash Flow Equations and Inflation]] |
| historical/economic anecdotes | Supporting | [[1.1 Interest Rates and Discount Rates]] |

## 3. 1.1 Introduction

Chapter 1 berfokus pada **growth of money due to investment**. Section awal mengatur vocabulary dan unit; section tengah membedakan cara accrual interest dan discount; section akhir memperluas ke nominal/continuous rates serta inflation. Ide yang terus berulang adalah bahwa suatu financial rule dapat direpresentasikan oleh fungsi yang memetakan waktu ke nilai uang.

## 4. 1.2 What is Interest?

Jika investasi sebesar $K$ tumbuh menjadi $S$, maka

$$
\text{interest}=S-K.
$$

Vaaler menekankan bahwa interest dapat dipandang sebagai “rent” atas penggunaan modal. Alasan ekonomi yang dibahas mencakup productivity of capital, time preference, dan kompensasi atas kemungkinan default. Chapter ini sendiri hampir selalu bekerja dalam deterministic framework dan tidak menjadikan investment risk sebagai fokus sampai chapter yang lebih lanjut.

[CF1 SUPPORTING CONTEXT] Penjelasan ekonomi ini membantu interpretasi, tetapi inti CF1 adalah mechanics pengukuran nilai dan rate.

## 5. 1.3 Accumulation and Amount Functions

Misalkan $K$ diinvestasikan pada waktu $0$.

- $A_K(t)$ = **amount function** untuk principal $K$: balance pada waktu $t$.
- $a(t)=A_1(t)$ = **accumulation function**: nilai pada waktu $t$ dari investasi satu unit pada waktu $0$.

Secara umum,

$$
A_K(0)=K,\qquad a(0)=1.
$$

Dalam model proportional yang menjadi default textbook,

$$
A_K(t)=K\,a(t).
$$

Namun Vaaler secara eksplisit mengingatkan bahwa proportionality dapat gagal untuk produk dengan tiered growth structure. Karena itu $a(t)$ adalah primitive model, sedangkan $A_K(t)=Ka(t)$ merupakan asumsi yang biasanya—tetapi tidak selalu—berlaku.

### Effective interest rate pada suatu interval

Untuk $t_2>t_1\ge 0$,

$$
i_{[t_1,t_2]}
=\frac{a(t_2)-a(t_1)}{a(t_1)}.
$$

Jika $A_K(t)=Ka(t)$,

$$
i_{[t_1,t_2]}
=\frac{A_K(t_2)-A_K(t_1)}{A_K(t_1)}.
$$

Artinya: numerator adalah **interest earned over the interval**, denominator adalah amount yang bekerja pada **beginning of the interval**.

Untuk periode integer ke-$n$, Vaaler menulis

$$
i_n=\frac{a(n)-a(n-1)}{a(n-1)},
$$

dan karenanya

$$
a(n)=a(n-1)(1+i_n).
$$

Khusus periode pertama,

$$
i_1=a(1)-1.
$$

> [!WARNING] Important Distinction
> **Accumulation function ≠ effective rate.**
>
> $a(t)$ adalah entire growth rule terhadap waktu. $i_{[t_1,t_2]}$ adalah rate yang diinduksi oleh fungsi tersebut pada interval tertentu.

## 6. 1.4 Simple Interest / Linear Accumulation Functions

Dengan simple interest pada rate $s$ per unit waktu,

$$
a(t)=1+st,
$$

sehingga

$$
A_K(t)=K(1+st).
$$

Jumlah interest yang dihasilkan selama durasi $t$ adalah

$$
Kst.
$$

Model ini linear: **absolute amount of interest per unit time** konstan. Karena balance bertambah tetapi dollar interest tiap periode tetap, effective rate periodik justru menurun.

Untuk periode ke-$n$,

$$
i_n
=\frac{s}{1+s(n-1)}.
$$

Jadi $i_n$ adalah decreasing sequence ketika $s>0$.

### Textbook example — simple interest

Pinjaman $1{,}600$ tumbuh menjadi $2{,}000$ dalam empat tahun dengan simple interest. Equation-nya

$$
2000=1600(1+4s),
$$

sehingga

$$
s=6.25\%.
$$

Lesson-nya bukan sekadar arithmetic; rate $s$ adalah slope accumulation function, bukan constant annual effective rate pada tahun ke-1, 2, 3, dan seterusnya.

> [!WARNING] Important Distinction
> **Constant simple-interest rate $s$ tidak berarti constant effective annual rate.**
>
> Under simple interest, dollar interest per year tetap; denominator effective rate semakin besar.

## 7. 1.5 Compound Interest (The Usual Case!)

Vaaler memotivasi compound interest melalui **time consistency**. Bila menutup dan langsung membuka kembali account tidak boleh memberikan keuntungan atau kerugian, growth over successive intervals harus multiplicative:

$$
a(s+t)=a(s)a(t).
$$

Jika semua effective periodic rates sama dengan $i$, maka untuk integer $k$,

$$
a(k)=(1+i)^k.
$$

Textbook memberi induction proof: $a(0)=1$; bila $a(k)=(1+i)^k$ dan $i_{k+1}=i$, maka

$$
a(k+1)=a(k)(1+i)=(1+i)^{k+1}.
$$

Default convention selanjutnya adalah memperluas formula ke seluruh $t\ge0$:

$$
\boxed{a(t)=(1+i)^t}.
$$

Dengan principal $K$,

$$
A_K(t)=K(1+i)^t.
$$

Di sini interest yang dibayarkan ikut direinvestasikan dan juga menghasilkan interest. Inilah perbedaan konseptual utama dari simple interest.

### Simple versus compound interest

Untuk rate tahunan yang sama:

- pada $t=1$, kedua model memberi nilai yang sama;
- untuk $0<t<1$, simple interest dapat memberi accumulation sedikit lebih tinggi daripada $(1+i)^t$;
- untuk $t>1$, compound interest akhirnya mendominasi dan gap berkembang semakin cepat.

Vaaler juga membahas convention praktis: beberapa institusi dapat memakai compound interest untuk completed periods lalu simple interest untuk final fractional period. Jadi rule untuk fractional period harus dibaca dari soal atau kontrak, jangan diasumsikan otomatis.

### Example — compound accumulation

Dengan deposit $12{,}000$, $i=5\%$, dan $t=6.5$ tahun,

$$
12{,}000(1.05)^{6.5}=16{,}478.27.
$$

Source membandingkannya dengan convention compound untuk enam tahun lalu simple interest selama setengah tahun; hasilnya sedikit berbeda.

> [!INFO] CF1 Connection
> Ini adalah fondasi [[1.4 Accumulation and Present Value]] dan seluruh equation-of-value work di chapter berikutnya.

## 8. 1.6 Interest in Advance / The Effective Discount Rate

Interest biasanya dibayangkan dibayar di akhir periode. Vaaler lalu memperkenalkan situasi di mana “interest” dipotong **di muka**. Jika stated loan amount $K$ dan discount rate $D$, borrower membayar $KD$ di awal sehingga uang yang benar-benar dapat digunakan hanya

$$
K(1-D).
$$

Untuk interval $[t_1,t_2]$, **effective discount rate** didefinisikan sebagai

$$
d_{[t_1,t_2]}
=\frac{a(t_2)-a(t_1)}{a(t_2)}.
$$

Bandingkan dengan

$$
i_{[t_1,t_2]}
=\frac{a(t_2)-a(t_1)}{a(t_1)}.
$$

Numerator keduanya sama; denominator-lah yang berbeda:

- interest rate membagi dengan **beginning amount**;
- discount rate membagi dengan **ending amount**.

Untuk periode ke-$n$,

$$
d_n=\frac{a(n)-a(n-1)}{a(n)},
$$

dan

$$
a(n-1)=a(n)(1-d_n).
$$

### Equivalent interest and discount rates

Dua rate disebut equivalent bila menghasilkan accumulation yang sama sepanjang interval yang sama. Dari satu unit beginning value menjadi ending value yang sama,

$$
(1+i)(1-d)=1.
$$

Karena itu,

$$
1+i=\frac{1}{1-d},
$$

$$
\boxed{i=\frac{d}{1-d}},
$$

$$
\boxed{d=\frac{i}{1+i}}.
$$

> [!WARNING] Important Distinction
> **$i=d$ hampir tidak pernah benar untuk positive rates.**
>
> Mereka mengukur dollar growth yang sama terhadap denominator berbeda. Untuk $i>0$, equivalent discount rate memenuhi $d<i$.

## 9. 1.7 Discount Functions / The Time Value of Money

Jika $a(t)$ menyatakan growth dari waktu $0$ ke $t$, reciprocal-nya menyatakan berapa banyak uang di waktu $0$ yang diperlukan untuk menghasilkan satu unit di waktu $t$:

$$
\boxed{v(t)=\frac{1}{a(t)}}.
$$

$v(t)$ disebut **discount function**. Maka present value dari $L$ yang dibayar pada waktu $t_0$ adalah

$$
PV_0(L\text{ at }t_0)=L\,v(t_0).
$$

Lebih umum, untuk memindahkan nilai dari waktu $s$ ke waktu $t$ di bawah accumulation function yang sama, gunakan ratio accumulation factors:

$$
\text{value at }t
=\text{value at }s\times \frac{a(t)}{a(s)}.
$$

Inilah mathematical core dari **time value of money**: cash flows pada tanggal berbeda tidak boleh dijumlahkan sebelum dibawa ke common valuation date.

Untuk compound interest,

$$
v(t)=(1+i)^{-t}.
$$

Satu-period discount factor biasa ditulis

$$
\boxed{v=\frac{1}{1+i}}.
$$

### Focal-date logic

Jika $L$ dibayar pada $t_0$ dan ingin dinilai pada $t<t_0$,

$$
\text{value at }t=L\frac{a(t)}{a(t_0)}.
$$

Jika compound interest,

$$
\text{value at }t=L(1+i)^{t-t_0}.
$$

Exponent negatif ketika moving backward in time dan positif ketika moving forward.

> [!INFO] CF1 Connection
> Konsep ini berkembang langsung menjadi equation of value pada Chapter 2 dan [[1.3 Cash Flow Equations and Inflation]].

## 10. 1.8 Simple Discount

Vaaler membangun analog dari simple interest dengan **linear discount function**. Untuk simple discount rate $d$,

$$
v(t)=1-dt,
$$

selama domain dipilih sehingga $v(t)>0$.

Present value dari satu unit yang dibayar pada waktu $t$ adalah $1-dt$. Model ini terutama berguna untuk short-term transactions atau sebagai approximation; untuk horizon cukup panjang, linear discount dapat mencapai nol atau negatif dan kehilangan interpretasi finansial.

[CF1 SUPPORTING CONTEXT] Bagian ini membantu memahami symmetry antara interest dan discount tetapi bukan model utama untuk long-horizon valuation.

## 11. 1.9 Compound Discount

Compound discount menggunakan constant effective discount rate $d$ per period. Karena setiap periode current value diperoleh dengan mengalikan ending value dengan $(1-d)$,

$$
v(t)=(1-d)^t.
$$

Karena $v(t)=1/a(t)$,

$$
a(t)=(1-d)^{-t}.
$$

Tetapi dari equivalent interest rate,

$$
1+i=(1-d)^{-1}.
$$

Maka

$$
\boxed{a(t)=(1+i)^t=(1-d)^{-t}}.
$$

Jadi “compound discount” bukan growth model baru yang berbeda dari compound interest; keduanya adalah dua quotations dari accumulation function yang sama.

Hubungan-hubungan penting:

$$
\boxed{v=\frac{1}{1+i}=1-d}
$$

$$
\boxed{d=iv}
$$

$$
\boxed{i-d=id}.
$$

Hubungan terakhir berasal dari $d=i/(1+i)$.

## 12. 1.10 Nominal Rates of Interest and Discount

Effective annual rate menjelaskan actual one-year growth. **Nominal rate convertible $m$ times per year** adalah quotation yang menentukan periodic rate sebesar nominal rate dibagi $m$.

Jika $i^{(m)}$ adalah nominal interest rate convertible $m$ times per year, periodic effective rate adalah

$$
\frac{i^{(m)}}{m}.
$$

Dalam satu tahun terdapat $m$ compounding periods, sehingga equivalent annual effective rate $i$ memenuhi

$$
\boxed{1+i=\left(1+\frac{i^{(m)}}{m}\right)^m}.
$$

Maka

$$
\boxed{i^{(m)}=m\left[(1+i)^{1/m}-1\right]}.
$$

Sebaliknya,

$$
\boxed{i=\left(1+\frac{i^{(m)}}{m}\right)^m-1}.
$$

### Nominal discount rate

Jika $d^{(m)}$ adalah nominal discount rate convertible $m$ times per year, periodic effective discount rate adalah $d^{(m)}/m$. Equivalent annual effective discount rate $d$ memenuhi

$$
\boxed{1-d=\left(1-\frac{d^{(m)}}{m}\right)^m}.
$$

Maka

$$
\boxed{d^{(m)}=m\left[1-(1-d)^{1/m}\right]}.
$$

Karena interest dan discount quotations dapat menggambarkan accumulation yang sama,

$$
\left(1+\frac{i^{(m)}}{m}\right)^m
=(1+i)
=(1-d)^{-1}
=\left(1-\frac{d^{(m)}}{m}\right)^{-m}.
$$

> [!WARNING] Important Distinction
> **Annual effective rate tidak dibagi langsung dengan $m$.**
>
> Yang dibagi dengan $m$ adalah *nominal rate convertible $m$ times*. Untuk mengubah annual effective ke periodic effective, gunakan root:
>
> $$
> i_{1/m}=(1+i)^{1/m}-1.
> $$

### Frequency and equivalence

Inti seluruh conversion adalah: **samakan accumulation over the same time interval**. Jangan mulai dari label rate; mulai dari growth factor.

## 13. 1.11 A Friendly Competition — Constant Force of Interest

Saat compounding frequency meningkat, nominal interest rate yang equivalent dengan annual effective rate $i$ mendekati limit tertentu. Vaaler mendefinisikan **force of interest**

$$
\boxed{\delta=\lim_{m\to\infty} i^{(m)}=\ln(1+i)}.
$$

Karena itu,

$$
\boxed{i=e^{\delta}-1}
$$

dan

$$
\boxed{1+i=e^{\delta}}.
$$

Compound-interest accumulation dapat ditulis

$$
\boxed{a(t)=e^{\delta t}}.
$$

Nominal discount rates $d^{(m)}$ menuju limit yang sama ketika conversion frequency menuju infinity. Jadi pada continuous limit, distinction nominal interest-versus-discount quotation menghilang dan keduanya bertemu pada force of interest.

## 14. 1.12 Force of Interest

Section 1.11 menangani compound interest dengan constant force. Section 1.12 memperluasnya ke accumulation function umum yang differentiable.

Instantaneous force of interest pada waktu $t$ adalah

$$
\boxed{\delta_t=\frac{a'(t)}{a(t)}}.
$$

Equivalent logarithmic form:

$$
\boxed{\delta_t=\frac{d}{dt}\ln a(t)}.
$$

Integrating dari $0$ ke $t$ dan memakai $a(0)=1$ menghasilkan

$$
\ln a(t)=\int_0^t \delta_r\,dr,
$$

sehingga

$$
\boxed{a(t)=\exp\left(\int_0^t\delta_r\,dr\right)}.
$$

Jika $\delta_t=\delta$ konstan,

$$
a(t)=e^{\delta t},
$$

kembali ke compound interest.

### Representative comparisons

- **simple interest** $a(t)=1+st$:

$$
\delta_t=\frac{s}{1+st},
$$

yang menurun terhadap waktu.

- **compound interest** $a(t)=(1+i)^t$:

$$
\delta_t=\ln(1+i)=\delta,
$$

konstan.

Force of interest memberi local/instantaneous description; accumulation function memberi total growth. Keduanya mengandung informasi yang sama bila regularity conditions terpenuhi.

## 15. 1.13 Note for Those Who Skipped Sections 1.11 and 1.12

Section ini berfungsi sebagai bridge konseptual bagi pembaca yang tidak menggunakan kalkulus. Pesan esensialnya: continuous compounding dapat diperlakukan melalui constant force $\delta$, dengan

$$
1+i=e^{\delta}
$$

dan

$$
a(t)=e^{\delta t}.
$$

Untuk CF1, formula conversion dan interpretasinya tetap perlu dipahami walaupun derivasi calculus dapat dibaca sebagai supporting detail.

## 16. 1.14 Inflation

Vaaler memperkenalkan price function $p(t)$ dan mendefinisikan inflation rate pada interval $[t_1,t_2]$ secara analog dengan effective interest rate:

$$
r_{[t_1,t_2]}
=\frac{p(t_2)-p(t_1)}{p(t_1)}.
$$

Inflation mengubah daya beli. Jika investment memperoleh effective interest rate $i$ sementara inflation rate selama interval yang sama adalah $r$, maka purchasing-power growth factor adalah

$$
\frac{1+i}{1+r}.
$$

Jika $j$ adalah **inflation-adjusted / real interest rate**, maka

$$
\boxed{1+j=\frac{1+i}{1+r}}
$$

atau

$$
\boxed{j=\frac{i-r}{1+r}}.
$$

Equivalent rearrangement:

$$
\boxed{i=j+r+jr}.
$$

Ini menunjukkan mengapa approximation $j\approx i-r$ cukup baik hanya ketika rates kecil; exact relation memiliki denominator $1+r$.

### Textbook example — anticipated inflation

Jika investor menginginkan real growth $j_0=4\%$ dan memprediksi inflation $r_0=3\%$, minimum nominal rate adalah

$$
i=j_0+r_0+j_0r_0
=0.04+0.03+(0.04)(0.03)
=7.12\%.
$$

Jika nominal return aktual $8\%$ dan inflation aktual $3.5\%$,

$$
j=\frac{0.08-0.035}{1.035}\approx4.35\%.
$$

Textbook menekankan bahwa pada high-inflation environments, mengabaikan denominator dapat menghasilkan interpretasi yang sangat menyesatkan.

> [!WARNING] Important Distinction
> Di Section 1.14, istilah **nominal interest rate** dapat berarti rate yang belum disesuaikan inflation. Ini berbeda dari “nominal rate convertible $m$ times” pada Section 1.10. Context harus dibaca dengan jelas.

## Chapter Synthesis

Chapter 1 dapat dipandang sebagai satu chain transformasi. Mulai dari sebuah rule pertumbuhan $a(t)$, kita memperoleh amount $A_K(t)=Ka(t)$ dan effective rate pada setiap interval. Bila pertumbuhan linear, kita mendapat simple interest, tetapi effective rate per period menurun. Menuntut time-consistent multiplicative growth membawa kita ke compound interest $a(t)=(1+i)^t$. Reciprocal accumulation menghasilkan discount function dan present value. Mengukur pertumbuhan terhadap ending value menghasilkan effective discount rate $d$, yang equivalent dengan $i$ melalui $(1+i)(1-d)=1$. Rate yang sama dapat di-quote sebagai nominal convertible rate pada frequency tertentu atau sebagai continuous force $\delta$, asalkan accumulation over the same horizon tetap sama. Untuk accumulation function umum, $\delta_t=a'(t)/a(t)$ menggambarkan instantaneous growth dan mengintegrasikan kembali menjadi $a(t)$. Terakhir, nominal money growth harus dibandingkan dengan price-level growth untuk memperoleh real purchasing-power return.

## Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| $A_K(t)=Ka(t)$ | amount dari principal $K$ | proportional growth | [[1.4 Accumulation and Present Value]] |
| $i_{[t_1,t_2]}=\frac{a(t_2)-a(t_1)}{a(t_1)}$ | effective interest rate | denominator = beginning amount | [[1.1 Interest Rates and Discount Rates]] |
| $a(t)=1+st$ | simple interest | linear accumulation | [[1.4 Accumulation and Present Value]] |
| $a(t)=(1+i)^t$ | compound interest | default Vaaler convention | [[1.4 Accumulation and Present Value]] |
| $d_{[t_1,t_2]}=\frac{a(t_2)-a(t_1)}{a(t_2)}$ | effective discount rate | denominator = ending amount | [[1.1 Interest Rates and Discount Rates]] |
| $(1+i)(1-d)=1$ | equivalence $i$ dan $d$ | same interval | [[1.1 Interest Rates and Discount Rates]] |
| $d=\frac{i}{1+i}=iv$ | discount from interest | one-period equivalent rates | [[1.1 Interest Rates and Discount Rates]] |
| $v(t)=1/a(t)$ | discount function | inverse accumulation | [[1.4 Accumulation and Present Value]] |
| $v=(1+i)^{-1}=1-d$ | one-period discount factor | compound model | [[1.1 Interest Rates and Discount Rates]] |
| $1+i=(1+i^{(m)}/m)^m$ | nominal-interest conversion | $m$ conversions/year | [[1.2 Effective, Nominal, and Force of Interest]] |
| $1-d=(1-d^{(m)}/m)^m$ | nominal-discount conversion | $m$ conversions/year | [[1.2 Effective, Nominal, and Force of Interest]] |
| $\delta=\ln(1+i)$ | constant force | equivalent compound rate | [[1.2 Effective, Nominal, and Force of Interest]] |
| $a(t)=e^{\delta t}$ | accumulation under constant force | continuous compounding | [[1.2 Effective, Nominal, and Force of Interest]] |
| $\delta_t=a'(t)/a(t)$ | instantaneous force | differentiable $a(t)$ | [[1.2 Effective, Nominal, and Force of Interest]] |
| $a(t)=\exp(\int_0^t\delta_rdr)$ | recover accumulation from force | integrable force | [[1.2 Effective, Nominal, and Force of Interest]] |
| $1+j=(1+i)/(1+r)$ | real return relation | same interval for $i,r$ | [[1.3 Cash Flow Equations and Inflation]] |

## Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $K$ | principal invested | money | initial amount |
| $A_K(t)$ | amount function for $K$ | money at time $t$ | usually $Ka(t)$ |
| $a(t)$ | accumulation function for 1 unit | factor | $a(0)=1$ |
| $i_{[t_1,t_2]}$ | effective interest rate | interval $[t_1,t_2]$ | beginning-value denominator |
| $i_n$ | effective rate in period $n$ | period | interval $[n-1,n]$ |
| $s$ | simple-interest rate | per basic time unit | Vaaler notation |
| $d_{[t_1,t_2]}$ | effective discount rate | interval | ending-value denominator |
| $i$ | effective interest rate | usually one year/basic period | compound model |
| $d$ | effective discount rate | same period as $i$ | equivalent with $i$ |
| $v(t)$ | discount function | factor | $1/a(t)$ |
| $v$ | one-period discount factor | factor | $(1+i)^{-1}=1-d$ |
| $i^{(m)}$ | nominal interest rate convertible $m$ times | annual quotation | periodic rate $i^{(m)}/m$ |
| $d^{(m)}$ | nominal discount rate convertible $m$ times | annual quotation | periodic discount $d^{(m)}/m$ |
| $\delta$ | constant force of interest | continuous rate | $\ln(1+i)$ |
| $\delta_t$ | force at time $t$ | instantaneous | $a'(t)/a(t)$ |
| $r$ | inflation rate | interval | Section 1.14 |
| $j$ | real/inflation-adjusted interest rate | same interval | Section 1.14 |

## Compression Notes

### Retained in Detail

- accumulation/amount functions dan interval effective rate;
- simple versus compound interest;
- effective discount rate dan equivalence $i,d,v$;
- discount function dan present value;
- nominal interest/discount conversion;
- constant dan varying force of interest;
- exact inflation-adjusted return relation;
- representative textbook calculations dan conceptual distinctions.

### Condensed

- historical discussion tentang morality/economic rationale of interest;
- induction proof disederhanakan tetapi logical step dipertahankan;
- repeated numerical examples dengan pola identik;
- calculator keystrokes dan software-specific workflows;
- graphical illustrations dijelaskan secara verbal.

### Omitted / Beyond CF1

- Section 1.15 problem set;
- website/footnote trivia;
- detailed calculator instructions;
- extended examples yang hanya mengulang computation pattern.

## CF1 Connection Map

```text
Amount / accumulation functions
        ↓
Effective interest on an interval
        ↓
Simple vs compound growth
        ↓
Interest ↔ discount ↔ discount factor
        ↓
[[1.1 Interest Rates and Discount Rates]]
        ↓
Nominal convertible rates ↔ force of interest
        ↓
[[1.2 Effective, Nominal, and Force of Interest]]

Accumulation ↔ discount function ↔ present value
        ↓
[[1.4 Accumulation and Present Value]]

Nominal money growth + inflation
        ↓
Real purchasing-power growth
        ↓
[[1.3 Cash Flow Equations and Inflation]]
```

## Quick Reading Review

- $a(t)$ adalah growth factor dari satu unit invested at time 0; $A_K(t)$ adalah corresponding dollar amount.
- Effective interest rate membagi growth dengan beginning balance; effective discount rate membagi growth yang sama dengan ending balance.
- Simple interest menjaga **dollar interest** konstan; compound interest menjaga **effective periodic rate** konstan.
- Default compound accumulation adalah $a(t)=(1+i)^t$.
- Present value berasal dari reciprocal growth: $v(t)=1/a(t)$.
- Equivalent rates harus menghasilkan accumulation yang sama pada horizon yang sama.
- Core identity: $(1+i)(1-d)=1$, sehingga $v=(1+i)^{-1}=1-d$.
- Nominal convertible rates tidak sama dengan annual effective rate; conversion harus melalui growth factor.
- Continuous limit menghasilkan $\delta=\ln(1+i)$ dan $a(t)=e^{\delta t}$.
- Untuk varying force, $a(t)=\exp(\int_0^t\delta_rdr)$.
- Exact real return adalah $(1+i)/(1+r)-1$, bukan sekadar $i-r$.
- “Nominal” pada inflation context berbeda makna dari nominal convertible rate.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why this chapter exists | Chapter 1, Section 1.1 |
| What is Interest? | Section 1.2 |
| Accumulation and Amount Functions | Section 1.3 |
| Simple Interest | Section 1.4 |
| Compound Interest | Section 1.5 |
| Effective Discount Rate | Section 1.6 |
| Discount Functions / TVM | Section 1.7 |
| Simple Discount | Section 1.8 |
| Compound Discount | Section 1.9 |
| Nominal Rates | Section 1.10 |
| Constant Force | Section 1.11 |
| General Force of Interest | Sections 1.12–1.13 |
| Inflation | Section 1.14 |
| Exercises | Section 1.15, intentionally omitted |
