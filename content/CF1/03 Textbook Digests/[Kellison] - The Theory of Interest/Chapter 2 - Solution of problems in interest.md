---
type: "condensed-book"
exam: "CF1"
book: "The Theory of Interest"
author: "Stephen G. Kellison"
chapter: "2"
chapter_title: "Solution of problems in interest"
cf1_topics: ["1.3", "1.4", "1.5"]
cf1_relevance: "High"
source_scope: "Kellison Chapter 2, Sections 2.1-2.7"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Kellison]
date_created: "2026-08-25"
status: "study-note"
---

# Kellison — Chapter 2: Solution of problems in interest

> [!ABSTRACT] Chapter in One View
> Chapter 2 mengubah definisi Chapter 1 menjadi **problem-solving framework**. Kellison menekankan bahwa sebagian besar masalah interest dapat direduksi menjadi empat quantities: principal, time, rate, dan accumulated value. Ketika cash flows terjadi pada waktu berbeda, semuanya harus dipindahkan ke **comparison date** yang sama melalui **equation of value**. Pada compound interest, choice of comparison date tidak mengubah answer; pada simple interest/simple discount hal ini tidak selalu berlaku. Chapter kemudian membahas tiga tipe unknown penting—**time**, **rate**, dan **number of periods/payments**—beserta kebutuhan logarithm, algebra, atau numerical iteration. Bagian akhir membawa prinsip ini ke transaksi praktis dan mengingatkan bahwa terminology dunia nyata sering tidak presisi; yang harus dianalisis adalah actual cash-flow structure. Untuk CF1, chapter ini menjadi jembatan langsung dari time value of money menuju [[1.3 Cash Flow Equations and Inflation]], [[1.4 Accumulation and Present Value]], dan perhitungan return/yield pada [[1.5 NPV, IRR, DWRR, TWRR]].

## 1. Why This Chapter Exists

Chapter 1 memberi berbagai measures of interest. Chapter 2 bertanya: **bagaimana measures tersebut dipakai secara sistematis untuk menyelesaikan transaksi yang lebih kompleks?**

Kellison sengaja menekankan basic principles sebelum formulas khusus. Banyak formulas di chapter selanjutnya hanyalah shortcuts yang berasal dari equation of value. Jika cash-flow timing dipahami dan value dapat dipindahkan ke satu comparison date, banyak masalah dapat diselesaikan tanpa mengandalkan formula yang dihafal.

## 2. Chapter Map

- **2.1 Introduction** — basic principles dan peran calculator/computation.
- **2.2 The Basic Problem** — empat basic quantities dan choice of time unit.
- **2.3 Equations of Value** — comparison date, time diagram, dan time value of money.
- **2.4 Unknown Time** — solving horizon dengan logarithms atau interpolation when conventions require it.
- **2.5 Unknown Rate of Interest** — direct algebra vs numerical root finding.
- **2.6 Determining Time Periods** — integer payment/crediting periods dan final fractional/irregular amount.
- **2.7 Practical Examples** — yield language dan real transaction structures.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 2.1–2.2 | Core foundation | [[1.4 Accumulation and Present Value]] |
| 2.3 | Core | [[1.3 Cash Flow Equations and Inflation]] |
| 2.4 | Core | [[1.4 Accumulation and Present Value]] |
| 2.5 | Core | [[1.5 NPV, IRR, DWRR, TWRR]] |
| 2.6 | Core/Supporting | [[1.4 Accumulation and Present Value]] |
| 2.7 | Supporting/Core | [[1.5 NPV, IRR, DWRR, TWRR]] |

## 3. 2.1 Introduction

Kellison menyatakan bahwa principles of interest relatif sedikit. Setelah Chapter 1, kemampuan utama bukan menambah banyak formula, tetapi belajar mengenali struktur transaksi. Formulas khusus di chapter selanjutnya boleh mempercepat pekerjaan, tetapi **blind reliance on formulas** tanpa memahami basic principle adalah sumber kesalahan.

Untuk Chapters 1–2, exponential dan logarithmic functions pada calculator sudah cukup. Computational tools membantu arithmetic, tetapi model dan equation harus dibentuk terlebih dahulu.

## 4. 2.2 The Basic Problem

### Four basic quantities

Interest problem yang paling sederhana melibatkan empat quantities:

1. **principal originally invested**;
2. **length of investment period**;
3. **rate/force of interest or discount**;
4. **accumulated value at end of investment period**.

Jika tiga diketahui, yang keempat dapat dicari.

Dengan compound interest:

$$
S=P(1+i)^n.
$$

Empat unknown klasiknya menjadi:

$$
P=\frac{S}{(1+i)^n},
$$

$$
S=P(1+i)^n,
$$

$$
n=\frac{\ln(S/P)}{\ln(1+i)},
$$

$$
i=\left(\frac{S}{P}\right)^{1/n}-1.
$$

Formulas tersebut bukan empat konsep berbeda; semuanya hanya rearrangement dari satu accumulation equation.

### Choice of time unit

Kellison memberi practical rule: gunakan unit waktu yang paling cocok dengan interest conversion period. Jika nominal rate convertible quarterly dipakai, quarter sering menjadi unit paling nyaman. Jika continuous force dipakai, tahun atau unit calendar lain dapat dipakai selama integral/time measure konsisten.

> [!WARNING] Important Distinction
> Nominal annual quotation tidak otomatis berarti exponent harus memakai tahun. Rate per conversion period dan number of conversion periods harus berada pada basis yang sama.

### Yield rate language

Pada tahap ini Kellison memberi working meaning: **yield rate** adalah rate yang membuat nilai cash flows pada waktu berbeda menjadi equivalent. Definisi yang lebih lengkap ditunda ke chapter lain, tetapi prinsip inti sudah jelas: yield adalah rate yang memecahkan equation of value.

### Perspective: borrower vs lender

Satu transaction dapat dijelaskan dari sisi borrower atau lender. Signs dan wording dapat berbeda, tetapi equation of value merepresentasikan transaction yang sama. Kellison mengingatkan bahwa istilah financial practice sering tidak sepenuhnya konsisten; karena itu fokuslah pada **actual payments and dates**, bukan label semata.

## 5. 2.3 Equations of Value

### Time value of money

Amounts pada tanggal berbeda tidak boleh langsung dibandingkan atau dijumlahkan. Semuanya harus dinilai pada satu common date, disebut **comparison date**.

Equation yang mengakumulasikan atau mendiskontokan setiap payment ke comparison date disebut **equation of value**.

### Time diagram

Kellison menganjurkan **time diagram** sebagai visual aid. Payments in one direction ditempatkan di satu sisi timeline dan payments in opposite direction di sisi lain. Comparison date ditandai secara eksplisit.

Contoh generic:

| Waktu | 0 | 3 | 8 | 10 |
|---:|---:|---:|---:|---:|
| Arus kas sisi A | $-100$ | $-200$ | $+600$ | $-X$ |

Tanda dapat dibalik seluruhnya tanpa mengubah solution asalkan convention konsisten.

### Comparison-date invariance under compound interest

Jika compound interest digunakan secara konsisten, pemilihan comparison date tidak mengubah final answer. Equation di waktu 0 dan equation di waktu 10 hanya berbeda karena salah satunya adalah multiple dari yang lain melalui common accumulation factor.

> [!NOTE] Assumption
> Independence from comparison date adalah property dari multiplicative compound accumulation. Kellison menegaskan bahwa simple interest atau simple discount dapat menghasilkan answer berbeda jika comparison date diubah.

### Textbook Example 2.1

Seseorang akan menerima $600$ pada akhir tahun 8. Sebagai gantinya ia membayar $100$ sekarang, $200$ pada akhir tahun 3, dan $X$ pada akhir tahun 10. Nominal rate adalah 8% convertible semiannually.

Rate per half-year:

$$
j=\frac{0.08}{2}=0.04.
$$

Gunakan half-year sebagai unit. Pada comparison date $t=0$:

$$
100+200(1.04)^{-6}+X(1.04)^{-20}
=600(1.04)^{-16}.
$$

Equivalently, pada comparison date tahun 10:

$$
100(1.04)^{20}+200(1.04)^{14}+X
=600(1.04)^4.
$$

Kedua equations menghasilkan $X$ yang sama. Lesson utama bukan angka akhirnya, melainkan bahwa **setiap cash flow harus dibawa ke focal/comparison date dengan exponent sesuai jarak waktunya**.

### General equation of value

Jika cash flow $C_k$ terjadi pada waktu $t_k$ dan dinilai pada comparison date $\tau$ di bawah compound interest rate $i$ per unit time, salah satu bentuk umum adalah

$$
\sum_k C_k(1+i)^{\tau-t_k}=0,
$$

jika signs sudah mencerminkan direction. Bentuk present-value equivalent adalah

$$
\sum_k C_k v^{t_k}=0
$$

ketika comparison date adalah 0.

## 6. 2.4 Unknown Time

### Core method

Jika unknown adalah time $n$ dan compound accumulation digunakan:

$$
S=P(1+i)^n.
$$

Isolate exponential term:

$$
(1+i)^n=\frac{S}{P},
$$

lalu ambil logarithm:

$$
n=\frac{\ln(S/P)}{\ln(1+i)}.
$$

### Textbook Example 2.2

Untuk mencari waktu agar $1{,}000$ menjadi target amount pada specified compound rate, Kellison menulis equation of value terlebih dahulu lalu menggunakan logs. Pesan metodologisnya: **jangan mengambil log sebelum exponential factor diisolasi**.

### Multiple cash flows with unknown time

Jika unknown time muncul pada satu atau lebih exponents dalam equation of value, substitution seperti

$$
x=(1+i)^t
$$

kadang mengubah equation menjadi polynomial atau bentuk yang lebih mudah. Tetapi jika tidak ada closed form sederhana, numerical solution dapat diperlukan.

### Fractional time and convention

Jika financial contract memakai special convention untuk fractional period—misalnya compound untuk full periods dan simple interest untuk remaining fraction—solution time harus mematuhi convention tersebut. Pure logarithmic solution berlaku langsung hanya untuk true exponential compound accumulation.

## 7. 2.5 Unknown Rate of Interest

### Rate as the root of an equation

Ketika cash-flow amounts dan dates diketahui tetapi rate unknown, equation of value menjadi function of $i$:

$$
f(i)=0.
$$

Untuk single initial and final amount:

$$
P(1+i)^n=S
$$

memberi direct formula. Tetapi multiple cash flows biasanya menghasilkan polynomial/nonlinear equation.

### Three solution approaches emphasized by Kellison

1. **Direct solution** jika equation sederhana.
2. **Algebraic transformation** jika substitution menghasilkan polynomial yang manageable.
3. **Iteration/numerical approximation** jika rate tidak dapat diisolasi secara praktis.

### Textbook Example 2.4

Kellison memberi transaksi di mana rate quoted convertible quarterly harus ditemukan dari known beginning and ending values. Pertama rate per quarter dijadikan unknown, lalu equation disusun pada consistent quarterly timeline. Setelah periodic rate ditemukan, rate dapat dikembalikan ke nominal quotation.

### Textbook Example 2.5 — multiple cash flows

Ketika present value dari beberapa payments harus sama dengan known amount, rate muncul dalam beberapa powers. Kellison menunjukkan bahwa equation of value-lah yang fundamental; calculator/iteration hanya alat untuk mencari root.

> [!IMPORTANT] Yield/IRR Perspective
> Rate yang menyamakan present value inflows dan outflows adalah yield rate transaksi. Ini adalah mathematical core yang kemudian muncul kembali pada IRR dan bond/loan yield calculations.

### Possibility of multiple roots

Kellison mencatat bahwa nonlinear equations dapat memiliki lebih dari satu mathematical solution. Tidak setiap root otomatis meaningful secara finansial; domain, signs, dan economics transaksi harus diperiksa.

## 8. 2.6 Determining Time Periods

Bagian ini berbeda dari sekadar “solve continuous $n$ with logs.” Banyak contracts hanya mengizinkan payments atau interest credits pada discrete dates. Hasil logarithmic dapat menunjukkan bahwa target tercapai **antara** dua scheduled dates, lalu actual transaction memerlukan integer number of full periods plus adjusted final amount.

### General reasoning

1. Solve approximate/continuous number of periods.
2. Identify the last full scheduled period that does not overshoot contractual requirement.
3. Determine final fractional or irregular amount from an equation of value.

### Textbook Example 2.6 — exact day count

Kellison menghitung interest dari deposit yang terjadi pada tanggal calendar tertentu. Fokusnya adalah bahwa time fraction harus ditentukan sesuai basis/convention yang digunakan, kemudian dimasukkan ke accumulation model yang tepat.

> [!NOTE] CF1 Scope
> Day-count mechanics dalam textbook merupakan supporting context. Untuk CF1, yang paling penting adalah menjaga consistency antara time fraction dan rate basis jika data semacam ini diberikan.

### Drop/irregular final payment logic

Walaupun loan amortization dibahas lebih lanjut di Chapter 5, Chapter 2 sudah membangun mental model: ketika exact term bukan integer, jangan membulatkan $n$ secara buta. Tentukan scheduled periods terlebih dahulu lalu solve final cash flow secara eksplisit.

## 9. 2.7 Practical Examples

Bagian ini memperlihatkan bagaimana principles sebelumnya bekerja ketika financial terminology lebih “real world.”

### Nominal rate vs yield

Kellison memberi contoh certificate/investment yang memiliki stated/credited rate tetapi actual yield dapat berbeda karena fee, timing, reinvestment, atau payment structure. Karena itu dua angka seperti “rate 20%” dan “yield 30%” tidak bertentangan: mereka bisa mengukur quantities berbeda.

### Textbook Example 2.7 — two-year certificate of deposit

Dalam contoh CD, cash flow aktual—not just quoted rate—menentukan investor’s yield. Setup harus mencatat deposit awal, intermediate/final credits atau charges, dan amount received. Yield kemudian adalah rate yang membuat equation of value balance.

### General practical rule

> Analyze cash flows first, terminology second.

Jika contract mengatakan “interest”, “discount”, “yield”, “credited”, atau “paid”, jangan langsung memilih formula dari katanya. Tentukan dulu:

- siapa membayar siapa;
- berapa amount setiap tanggal;
- apakah quoted rate effective, nominal, discount, atau force;
- conversion frequency;
- comparison date.

## Chapter Synthesis

Chapter 2 mengajarkan bahwa problem interest yang kompleks tetap dibangun dari operasi yang sederhana: **move money through time**. Untuk single cash flow, principal, time, rate, dan accumulated value terhubung oleh accumulation function. Untuk multiple cash flows, semua values dipindahkan ke one common comparison date dan disamakan dalam equation of value. Jika unknown adalah payment, equation biasanya linear; jika unknown adalah time, logarithms sering muncul; jika unknown adalah rate, equation dapat menjadi nonlinear dan membutuhkan root solving; jika number of periods harus discrete, exact contractual timing harus dipertahankan dan final irregular payment mungkin diperlukan. Dengan demikian, chapter ini adalah methodological backbone untuk annuities, loans, bonds, IRR, dan hampir seluruh mathematics of finance berikutnya.

## Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| $S=P(1+i)^n$ | Four-basic-quantity model | Constant compound $i$ | [[1.4 Accumulation and Present Value]] |
| $P=Sv^n$ | Present value | $v=(1+i)^{-1}$ | [[1.4 Accumulation and Present Value]] |
| $n=\ln(S/P)/\ln(1+i)$ | Unknown time | Exponential compound model | [[1.4 Accumulation and Present Value]] |
| $i=(S/P)^{1/n}-1$ | Unknown effective rate | Single initial/final cash flow | [[1.4 Accumulation and Present Value]] |
| Comparison date | Common valuation date | Required for multiple cash flows | [[1.3 Cash Flow Equations and Inflation]] |
| Equation of value | Equality of values at one date | Consistent rate basis | [[1.3 Cash Flow Equations and Inflation]] |
| $\sum C_k(1+i)^{\tau-t_k}=0$ | Signed general EOV | Constant compound $i$ | [[1.3 Cash Flow Equations and Inflation]] |
| $\sum C_kv^{t_k}=0$ | EOV at time 0 | Constant compound $i$ | [[1.3 Cash Flow Equations and Inflation]] |
| Comparison-date invariance | Same answer at any focal date | Compound interest | [[1.3 Cash Flow Equations and Inflation]] |
| $f(i)=0$ | Unknown-yield problem | Multiple cash flows | [[1.5 NPV, IRR, DWRR, TWRR]] |
| Numerical root solving | Find yield when no closed form | Nonlinear EOV | [[1.5 NPV, IRR, DWRR, TWRR]] |
| Discrete-period adjustment | Exact scheduled term + irregular final amount | Contractual payment dates | [[1.4 Accumulation and Present Value]] |

## Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $P$ | Principal/present amount | currency | Context-dependent |
| $S$ | Accumulated/future amount | currency | End of investment period |
| $i$ | Effective interest rate | per chosen time unit | Must match exponent basis |
| $v$ | Discount factor | per period | $v=(1+i)^{-1}$ |
| $n,t$ | Time / number of periods | periods | May be unknown |
| $C_k$ | Signed cash flow | currency | Sign convention must be consistent |
| $t_k$ | Time of cash flow $C_k$ | chosen time unit | Used in equation of value |
| $\tau$ | Comparison date | chosen time unit | Any convenient date under compound interest |
| $f(i)$ | Equation-of-value function | — | Root gives yield/rate |

## Compression Notes

### Retained in Detail

- four-basic-quantity problem framework;
- choice of time unit and rate basis;
- yield as equivalence rate;
- equation of value and comparison date;
- time diagram logic;
- unknown time and unknown rate methods;
- numerical-root perspective;
- discrete-period/final-payment reasoning;
- practical emphasis on cash flows over terminology.

### Condensed

- repeated algebraic manipulations of equations of value;
- calculator procedures and iterative arithmetic details;
- multiple examples that illustrate the same focal-date principle;
- calendar-day computation details beyond the conceptual rule.

### Omitted / Beyond CF1

- routine exercises;
- spreadsheet/calculator operational guidance;
- practice-specific terminology that does not change the mathematical cash-flow structure.

## CF1 Connection Map

```text
Four basic quantities
        ↓
Choose rate basis + time unit
        ↓
Multiple cash flows
        ↓
Comparison date + equation of value
        ↓
Unknown payment / time / rate
        ↓
Numerical root or discrete-period adjustment when needed
        ↓
[[1.3 Cash Flow Equations and Inflation]]
[[1.4 Accumulation and Present Value]]
[[1.5 NPV, IRR, DWRR, TWRR]]
        ↓
Foundation for annuities, loans, and bonds
```

## Quick Reading Review

- Most interest problems reduce to principal, time, rate, and accumulated value.
- Match time unit to the rate conversion period whenever practical.
- A yield rate is fundamentally an **equivalence rate** between cash flows at different dates.
- Multiple cash flows require a common comparison/focal date.
- Under compound interest, changing the comparison date does not change the solution.
- Under simple interest/simple discount, comparison-date invariance does not generally hold.
- A time diagram is an aid for timing and direction, not a separate mathematical method.
- Unknown time under pure compound growth is normally solved with logarithms.
- Unknown rate from multiple cash flows is a root-finding problem.
- Form the equation before using a calculator.
- Mathematical roots must be checked for financial meaning.
- If payments are restricted to discrete dates, do not blindly round a noninteger term.
- Real-world wording can be ambiguous; reconstruct the actual cash flows first.
- Chapter 2 is the reusable problem-solving template behind later annuity, loan, bond, and yield formulas.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter framing and method | Kellison Chapter 2 §2.1 |
| Four basic quantities, time units, yield terminology | §2.2 |
| Equation of value, comparison date, time diagram | §2.3 |
| Unknown time | §2.4 |
| Unknown interest/yield rate | §2.5 |
| Determining time periods | §2.6 |
| Practical examples and terminology | §2.7 |
