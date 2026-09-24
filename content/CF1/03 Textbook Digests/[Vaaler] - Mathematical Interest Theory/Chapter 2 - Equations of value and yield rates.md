---
type: "condensed-book"
exam: "CF1"
book: "Mathematical Interest Theory, 2nd ed."
author: "L. Vaaler, L. J. F. Vaaler, & J. W. Daniel"
chapter: "2"
chapter_title: "Equations of value and yield rates"
cf1_topics: ["1.3", "1.5"]
cf1_relevance: "High"
source_scope: "Vaaler Chapter 2, Sections 2.1–2.7; problem set 2.8 omitted"
compression_level: "Condensed"
tags: [CF1, CondensedBook, Vaaler]
date_created: "2026-08-25"
status: "study-note"
---

# Vaaler — Chapter 2: Equations of value and yield rates

> [!ABSTRACT] Chapter in One View
> Chapter 2 mengubah time-value machinery Chapter 1 menjadi alat untuk menilai **multiple cash flows**. Konsep pusatnya adalah **equation of value**: semua contributions, withdrawals, dan terminal balances dinilai pada satu common focal date sehingga nilai kedua sisi financial transaction konsisten. Untuk compound interest dengan rate yang tidak diketahui, rate yang membuat equation of value benar menjadi **dollar-weighted yield rate / internal rate of return**. Vaaler menunjukkan bahwa yield rate tidak selalu unik dan bahkan dapat tidak ada, sehingga cash-flow sign pattern matters. Chapter kemudian membahas **reinvestment**, karena quoted yield suatu security tidak otomatis menjadi realized yield bila intermediate proceeds direinvestasikan pada rate berbeda. Untuk investment funds dengan irregular external cash flows, textbook menurunkan approximation untuk dollar-weighted yield. Bagian terakhir memperkenalkan **time-weighted yield**, yang menghilangkan pengaruh timing dan besar external contributions sehingga lebih cocok untuk menilai fund performance. Chapter ini merupakan source utama untuk [[1.3 Cash Flow Equations and Inflation]] dan [[1.5 NPV, IRR, DWRR, TWRR]].

## 1. Why This Chapter Exists

Financial transactions jarang hanya terdiri dari satu deposit pada waktu 0 dan satu balance pada waktu $T$. Investor dapat melakukan beberapa deposits dan withdrawals, borrower dapat membuat beberapa repayments, dan fund dapat menerima external flows selama periode pengukuran. Cash flows pada tanggal berbeda tidak comparable secara langsung.

Chapter ini memperkenalkan satu organizing principle: **pilih valuation date, bawa semua cash flows ke tanggal tersebut dengan accumulation/discount rule yang konsisten, lalu equate values**. Setelah prinsip ini dikuasai, unknown dapat berupa payment, time, atau rate. Ketika unknown-nya rate, kita masuk ke yield-rate analysis dan persoalan existence/uniqueness. Di akhir chapter, fokus bergeser dari “berapa return investor tertentu?” ke “seberapa baik fund manager mengelola uang yang berada di dalam fund?”—distinction yang menghasilkan dollar-weighted versus time-weighted return.

## 2. Chapter Map

- **2.1 Introduction** — mengapa multiple contributions memerlukan equation of value.
- **2.2 Equations of Value for Investments Involving a Single Deposit** — empat unknown dasar: principal, time, rate, terminal amount.
- **2.3 Equations of Value for Investments with Multiple Contributions** — general focal-date equation dan timeline reasoning.
- **2.4 Investment Return** — yield rate / IRR, existence dan possible multiple roots.
- **2.5 Reinvestment Considerations** — realized yield ketika intermediate proceeds direinvestasikan.
- **2.6 Approximate Dollar-Weighted Yield Rates** — approximation untuk investment funds dengan irregular flows.
- **2.7 Fund Performance** — time-weighted yield.
- **2.8 Problems** — latihan, tidak diringkas.

| Textbook Section | CF1 Relevance | Connected Syllabus Note |
|---|---|---|
| 2.2–2.3 | Core | [[1.3 Cash Flow Equations and Inflation]] |
| 2.4 | Core | [[1.5 NPV, IRR, DWRR, TWRR]] |
| 2.5 | Supporting/Core | [[1.5 NPV, IRR, DWRR, TWRR]] |
| 2.6 | Core | [[1.5 NPV, IRR, DWRR, TWRR]] |
| 2.7 | Core | [[1.5 NPV, IRR, DWRR, TWRR]] |

## 3. 2.1 Introduction

Vaaler menggunakan contoh account dengan deposits dan occasional withdrawals untuk menunjukkan mengapa single-deposit formulas tidak cukup. Contribution dapat positif, negatif, atau nol. Dua jenis pertanyaan umum muncul:

1. berapa balance pada target date;
2. kapan balance akan mencapai target tertentu.

Equation of value menjadi mathematical foundation untuk keduanya dan kemudian untuk loan, annuity, bond, serta yield analysis di chapter selanjutnya.

## 4. 2.2 Equations of Value for a Single Deposit

Dengan single deposit $C$, compound interest rate $i$, horizon $T$, dan terminal amount $A_C(T)$,

$$
\boxed{A_C(T)=C(1+i)^T}.
$$

Ini adalah **time-$T$ equation of value**. Jika tiga dari empat quantities $C$, $T$, $i$, dan $A_C(T)$ diketahui, yang keempat dapat dicari.

### Unknown principal

Jika future amount $S$ diketahui,

$$
C=S(1+i)^{-T}.
$$

Textbook example: account tumbuh menjadi $3{,}673.32$ setelah lima tahun pada $8\%$ effective annual. Maka

$$
C=3673.32(1.08)^{-5}\approx2500.
$$

### Unknown accumulation time

Dari

$$
S=C(1+i)^T,
$$

kita peroleh

$$
\boxed{T=\frac{\ln(S/C)}{\ln(1+i)}}.
$$

### Unknown interest rate

$$
\boxed{i=\left(\frac{S}{C}\right)^{1/T}-1}.
$$

Vaaler menggunakan single-deposit setting untuk menunjukkan bahwa equation of value adalah equality of values **at a chosen time**, bukan sekadar formula memorized.

## 5. 2.3 Equations of Value with Multiple Contributions

Misalkan terdapat contributions $C_{t_k}$ pada times $t_k$. Vaaler memakai convention:

- $C_{t_k}>0$ = contribution/deposit;
- $C_{t_k}<0$ = withdrawal.

Investment dilikuidasi pada waktu $T$ dengan balance $B$. Pilih arbitrary focal date $\tau$. Jika growth governed by accumulation function $a(t)$, value pada $\tau$ dari contribution di $t_k$ adalah

$$
C_{t_k}\frac{a(\tau)}{a(t_k)}.
$$

Value pada $\tau$ dari terminal balance $B$ pada $T$ adalah

$$
B\frac{a(\tau)}{a(T)}.
$$

Sehingga general equation of value adalah

$$
\boxed{
\sum_k C_{t_k}\frac{a(\tau)}{a(t_k)}
=B\frac{a(\tau)}{a(T)}
}.
$$

### Time-0 equation of value

Karena $v(t)=1/a(t)$,

$$
\boxed{
\sum_k C_{t_k}v(t_k)=Bv(T)
}.
$$

### Time-$T$ equation of value

$$
\boxed{
\sum_k C_{t_k}\frac{a(T)}{a(t_k)}=B
}.
$$

Semua focal dates menghasilkan equation yang equivalent karena berpindah focal date hanya mengalikan entire equation dengan common accumulation factor.

> [!WARNING] Important Distinction
> **Focal date boleh dipilih bebas; rate basis dan timing cash flow tidak boleh diubah.**
>
> Pilih focal date yang membuat algebra paling sederhana. Jawaban unknown harus invariant terhadap choice tersebut.

### Example — unknown final payment

John borrows $1{,}000$ at $10\%$ annual effective, repays $600$ at $t=1$, lalu $P$ pada $t=2$.

| Time | 0 | 1 | 2 |
|---:|---:|---:|---:|
| Borrower cash flow | $+1000$ | $-600$ | $-P$ |

Dengan time-2 equation:

$$
1000(1.1)^2=600(1.1)+P,
$$

sehingga

$$
P=550.
$$

Equivalent balance logic: debt $1000\to1100$; setelah payment $600$ tersisa $500$; satu tahun kemudian menjadi $550$.

### Example — unknown rate with multiple deposits

Deposits $5{,}000$ pada $t=0$, $3{,}000$ pada $t=1$, dan $2{,}000$ pada $t=2$ menghasilkan balance $11{,}000$ immediately after final deposit. Equation:

$$
5000(1+i)^2+3000(1+i)+2000=11000.
$$

Set $x=1+i$:

$$
5x^2+3x-9=0,
$$

memberikan positive solution

$$
i\approx7.4773\%.
$$

Ini adalah transition alami menuju yield rate: rate bukan lagi input, tetapi unknown yang membuat cash-flow equation balance.

## 6. 2.4 Investment Return

Vaaler mendefinisikan **yield rate** dari suatu investment sebagai rate of compound interest yang membuat equation of value antara contributions dan proceeds valid. Dalam terminology yang lazim pada CF1, ini adalah **dollar-weighted yield rate / internal rate of return (IRR)** untuk cash-flow stream tersebut.

Untuk cash flows $C_{t_k}$ dan terminal value $B$, rate $i$ harus satisfy equation seperti

$$
\sum_k C_{t_k}(1+i)^{T-t_k}=B,
$$

atau equivalent time-0 form

$$
\sum_k C_{t_k}(1+i)^{-t_k}=B(1+i)^{-T}.
$$

### Yield as a root-finding problem

Tidak semua equations dapat diselesaikan closed form. Vaaler membahas:

- guess-and-check;
- numerical methods such as Newton's method;
- financial-calculator IRR routines.

Konsep pentingnya adalah equation-nya harus ditulis terlebih dahulu; numerical tool hanya mencari root.

### Existence and uniqueness

Cash-flow pattern dapat menghasilkan:

- satu positive yield rate;
- lebih dari satu yield rate;
- tidak ada admissible yield rate.

Multiple sign changes dalam cash-flow sequence dapat menghasilkan multiple roots. Karena itu “the IRR” tidak boleh diasumsikan selalu unique.

> [!WARNING] Important Distinction
> **Yield rate adalah solution dari cash-flow equation, bukan weighted average dari market rates.**
>
> Jika equation memiliki beberapa admissible roots, financial interpretation harus mempertimbangkan transaction structure.

### NPV perspective

Walaupun chapter berfokus pada equation of value dan yield, struktur yang sama dapat ditulis sebagai present-value difference. Untuk candidate rate $i$,

$$
NPV(i)=\sum_j CF_j(1+i)^{-t_j}.
$$

Dengan sign convention yang memasukkan seluruh inflows/outflows, IRR adalah root yang memenuhi

$$
NPV(i)=0.
$$

[CORE CF1] Ini menghubungkan langsung equation of value ke [[1.5 NPV, IRR, DWRR, TWRR]].

## 7. 2.5 Reinvestment Considerations

Quoted yield pada suatu investment tidak selalu sama dengan realized yield atas entire strategy bila intermediate cash flows harus direinvestasikan.

Misalnya sebuah instrument menghasilkan payments sebelum terminal date. Jika payments tersebut direinvestasikan pada rate berbeda dari original yield, accumulated value akhir dari strategy berubah. Oleh karena itu, realized return harus dihitung dari **actual combined cash-flow process**:

1. tentukan payments yang diterima dari original investment;
2. accumulate masing-masing payment menggunakan reinvestment rate applicable hingga horizon akhir;
3. jumlahkan terminal wealth;
4. cari single compound rate yang equates initial investment dengan terminal wealth.

Pesan textbook: yield rate adalah property dari specified cash flows dan assumptions. Mengubah reinvestment assumption berarti mengubah effective transaction yang sedang dinilai.

> [!NOTE] Assumption
> Bila intermediate proceeds diasumsikan dapat direinvestasikan pada rate yang sama dengan yield awal, compounding interpretation menjadi konsisten. Bila tidak, realized yield berbeda.

## 8. 2.6 Approximate Dollar-Weighted Yield Rates

Section ini menangani investment fund dengan beginning balance, ending balance, serta external contributions/withdrawals pada times berbeda. Exact yield membutuhkan fractional-power equation yang mungkin sulit diselesaikan. Vaaler menurunkan approximation dengan linearizing accumulation untuk relatively small yield.

### Setup

Scale investment period menjadi interval $[0,1]$.

- $A$ = beginning balance.
- $B$ = ending balance.
- $C_t$ = contribution at time $t$, positive untuk deposit, negative untuk withdrawal.
- total net contribution:

$$
C=\sum_t C_t.
$$

- total investment gain (interest earned):

$$
\boxed{I=B-A-C}.
$$

Karena contribution pada time $t$ invested selama approximately fraction $1-t$ dari period, exposure-weighted capital adalah

$$
A+\sum_t C_t(1-t).
$$

First approximation untuk dollar-weighted yield $j$ adalah

$$
\boxed{
j\approx
\frac{I}{A+\sum_t C_t(1-t)}
}.
$$

Interpretasinya sangat intuitive: **return ≈ dollar gain divided by time-weighted dollars invested**.

### Simplified approximation

Textbook juga memberikan approximation yang tidak membutuhkan exact contribution dates:

$$
\boxed{
j\approx\frac{2I}{A+B-I}
}.
$$

Formula ini praktis ketika detail timing flows tidak tersedia atau ketika quick approximation memadai.

### Example — one-year period

Beginning balance $A=10{,}210$, ending $B=12{,}982$, net contributions $C=2{,}000$, sehingga

$$
I=12{,}982-10{,}210-2{,}000=772.
$$

Dengan exact timing weights, source memperoleh approximately

$$
j\approx6.5\%.
$$

Simplified formula memberi sekitar

$$
j\approx6.9\%.
$$

Exact dollar-weighted yield dari full equation sangat dekat dengan $6.4985\%$, sehingga first approximation bekerja sangat baik pada example tersebut.

### Investment period not equal to one year

Jika period length bukan satu tahun, $j$ dari formula adalah **yield over the measurement period**, bukan annual rate. Annualize dengan equivalent compound conversion. Jika period panjangnya $T$ years,

$$
\boxed{i_{annual}=(1+j)^{1/T}-1}.
$$

> [!WARNING] Important Distinction
> Jangan menyebut period return sebagai annual return sebelum melakukan conversion berdasarkan actual measurement horizon.

## 9. 2.7 Fund Performance — Time-Weighted Yield

Dollar-weighted return dipengaruhi oleh **besar dan timing external cash flows**. Itu tepat bila kita ingin mengukur return yang benar-benar dialami seorang investor. Tetapi bila tujuan kita adalah menilai **performance fund manager**, external deposits/withdrawals yang dikendalikan investor seharusnya tidak mendistorsi measure.

Time-weighted yield mengatasi masalah ini dengan memecah period pada setiap external cash-flow date.

Misalkan balance tepat sebelum contribution pada time $t$ adalah $B_t$, dan contribution adalah $C_t$. Untuk successive subperiods, define subperiod yield $j_k$ dari ratio balance growth **excluding external flow**.

Jika contribution dates adalah

$$
0<t_1<t_2<\cdots<t_r\le1,
$$

maka subperiod growth factors berbentuk:

$$
1+j_1=\frac{B_{t_1}}{B_0},
$$

sementara untuk subsequent subperiods,

$$
1+j_k=\frac{B_{t_k}}{B_{t_{k-1}}+C_{t_{k-1}}}.
$$

Time-weighted yield untuk entire measurement period adalah geometric linking:

$$
\boxed{
1+j_{tw}=\prod_{k=1}^{r+1}(1+j_k)
}
$$

atau

$$
\boxed{
j_{tw}=\prod_{k=1}^{r+1}(1+j_k)-1}.
$$

Jika measurement interval berlangsung $T$ years, annualized time-weighted yield adalah

$$
\boxed{
i_{tw}=(1+j_{tw})^{1/T}-1}.
$$

### Why it removes cash-flow timing effects

Setiap external contribution hanya menjadi new starting capital untuk subperiod berikutnya. Return tiap subperiod dihitung dari money yang benar-benar berada di fund selama subperiod tersebut, lalu growth factors dikalikan. Dengan demikian, investor tidak “menghadiahi” atau “menghukum” manager hanya karena investor memasukkan banyak uang tepat sebelum good/bad performance.

### Textbook example — two-year fund

Balance $20{,}000\to21{,}200$ selama tahun pertama, lalu contribution $5{,}000$ membuat new invested balance $26{,}200$, dan akhir tahun kedua balance $27{,}300$.

Time-weighted annual yield:

$$
i_{tw}
=\left[
\left(\frac{21{,}200}{20{,}000}\right)
\left(\frac{27{,}300}{26{,}200}\right)
\right]^{1/2}-1
\approx5.095\%.
$$

Dollar-weighted yield dari

$$
20{,}000(1+i)^2+5{,}000(1+i)=27{,}300
$$

adalah $5\%$. Kedua measure dekat karena timing cash flow tidak banyak menguntungkan/merugikan investor.

### Textbook example — good market timing by investor

Dalam example Tomorrow Fund, investor menarik dan menambah dana pada timing yang menguntungkan. Time-weighted fund return sekitar $11.52\%$, sedangkan investor's dollar-weighted return sekitar $12.03\%$. Difference tersebut bukan contradiction: investor mendapat benefit dari timing external cash flows, sementara time-weighted measure berusaha mengisolasi performance underlying fund.

> [!WARNING] Important Distinction
> **DWRR dan TWRR menjawab pertanyaan yang berbeda.**
>
> - DWRR: “Berapa return yang dialami dollar investor, mengingat kapan uang masuk/keluar?”
> - TWRR: “Bagaimana fund tumbuh, net of distortion dari external cash-flow timing?”

## Chapter Synthesis

Seluruh Chapter 2 dapat direduksi menjadi satu principle: **cash flows harus dibandingkan pada common valuation basis**. Untuk known rate, principle ini menghasilkan equation of value yang dapat menyelesaikan unknown payment, time, atau balance. Bila rate sendiri unknown, equation of value berubah menjadi root-finding problem; root tersebut adalah dollar-weighted yield atau IRR. Karena cash-flow polynomial/nonlinear equation dapat memiliki zero, one, atau multiple admissible roots, yield interpretation selalu bergantung pada transaction structure. Jika intermediate proceeds direinvestasikan, realized wealth dan realized yield bergantung pada reinvestment rates. Untuk ongoing investment fund, exact DWRR dapat sulit dihitung sehingga approximate exposure-weighted formulas berguna. Tetapi DWRR tetap investor-sensitive karena external flows memengaruhi weight. Time-weighted return memecah fund history menjadi subperiods di antara external flows dan geometrically links subperiod returns, sehingga lebih tepat untuk performance measurement.

## Key Relationships

| Relationship / Concept | Meaning | Conditions / Timing | CF1 Link |
|---|---|---|---|
| $S=C(1+i)^T$ | single-deposit equation of value | compound interest | [[1.3 Cash Flow Equations and Inflation]] |
| $T=\ln(S/C)/\ln(1+i)$ | solve time | $i>-1$, positive values | [[1.3 Cash Flow Equations and Inflation]] |
| $i=(S/C)^{1/T}-1$ | solve rate | single deposit | [[1.5 NPV, IRR, DWRR, TWRR]] |
| $\sum C_{t_k}\frac{a(\tau)}{a(t_k)}=B\frac{a(\tau)}{a(T)}$ | general focal-date EOV | common accumulation rule | [[1.3 Cash Flow Equations and Inflation]] |
| $\sum C_{t_k}v(t_k)=Bv(T)$ | time-0 EOV | discount-function form | [[1.3 Cash Flow Equations and Inflation]] |
| $NPV(i)=0$ | IRR/yield root condition | chosen sign convention | [[1.5 NPV, IRR, DWRR, TWRR]] |
| $I=B-A-C$ | fund investment gain | $C$ = net external contribution | [[1.5 NPV, IRR, DWRR, TWRR]] |
| $j\approx I/[A+\sum C_t(1-t)]$ | approximate DWRR | period scaled to $[0,1]$ | [[1.5 NPV, IRR, DWRR, TWRR]] |
| $j\approx2I/(A+B-I)$ | simplified DWRR approximation | less timing detail | [[1.5 NPV, IRR, DWRR, TWRR]] |
| $1+j_{tw}=\prod(1+j_k)$ | time-weighted linking | split at external flows | [[1.5 NPV, IRR, DWRR, TWRR]] |
| $i_{annual}=(1+j)^{1/T}-1$ | annualization | $j$ over $T$ years | [[1.5 NPV, IRR, DWRR, TWRR]] |

## Notation Used in This Chapter

| Symbol | Meaning | Unit / Period | Notes |
|---|---|---|---|
| $C$ | single contribution / principal | money | Section 2.2 context |
| $C_{t_k}$ | contribution at time $t_k$ | money | negative for withdrawal |
| $T$ | liquidation / terminal time | time | also measurement horizon |
| $\tau$ | chosen focal date | time | arbitrary valuation date |
| $B$ | terminal or ending balance | money | context-dependent |
| $a(t)$ | accumulation function | factor | inherited from Chapter 1 |
| $v(t)$ | discount function | factor | $1/a(t)$ |
| $i$ | compound yield/effective rate | per stated period | may be unknown root |
| $A$ | beginning fund balance | money | Section 2.6 |
| $C$ | net contributions in Section 2.6 | money | sum of $C_t$ |
| $I$ | investment gain | money | $B-A-C$ |
| $j$ | yield over measurement period | rate | approximate DWRR section |
| $j_k$ | subperiod return | rate | between external flows |
| $j_{tw}$ | time-weighted period yield | rate | geometrically linked |
| $i_{tw}$ | annualized time-weighted yield | annual rate | when period is $T$ years |

> [!NOTE] Notation Mapping
> Huruf $C$ berubah konteks: pada Section 2.2 dapat berarti single contribution; pada fund-return setup dapat berarti total net contributions. Definisikan ulang sebelum menggunakan formula.

## Compression Notes

### Retained in Detail

- focal-date equation of value;
- equivalence of valuation dates;
- representative unknown-payment dan unknown-rate examples;
- yield/IRR sebagai root of equation of value;
- existence/uniqueness warning;
- reinvestment logic;
- approximate DWRR formulas dan annualization;
- TWRR geometric linking dan interpretation;
- textbook examples yang membedakan DWRR versus TWRR.

### Condensed

- repeated numerical root-finding examples;
- detailed BA II Plus keystrokes;
- Newton-method algebra beyond what is needed to understand yield solving;
- repeated timelines dengan pola sama;
- extended calculator limitations.

### Omitted / Beyond CF1

- Section 2.8 problem set;
- calculator operation details;
- incidental anecdotes dan administrative text.

## CF1 Connection Map

```text
Single cash flow valuation
        ↓
Multiple cash flows at one focal date
        ↓
Equation of value
        ↓
[[1.3 Cash Flow Equations and Inflation]]
        ↓
Unknown rate = yield / IRR root
        ↓
Reinvestment-sensitive realized return
        ↓
Dollar-weighted return
        ↓
Time-weighted fund return
        ↓
[[1.5 NPV, IRR, DWRR, TWRR]]
```

## Quick Reading Review

- Equation of value means **equal value at the same date**, not equal nominal dollars across dates.
- Any focal date may be used if every cash flow is moved consistently.
- Multiple-contribution EOV is simply the sum of separately accumulated/discounted contributions.
- Unknown rate converts valuation into a nonlinear root-finding problem.
- IRR/yield need not be unique; cash-flow sign pattern matters.
- Numerical solver should solve an explicitly written financial equation, not replace it.
- Reinvestment rate can change realized yield when intermediate cash flows occur.
- For fund returns, $I=B-A-C$ separates investment performance from net external cash flow.
- Approximate DWRR divides gain by time-weighted capital exposure.
- Period return must be annualized through compound equivalence when horizon is not one year.
- TWRR splits the history at every external cash flow and multiplies subperiod growth factors.
- DWRR measures investor experience; TWRR is designed to measure fund performance with less distortion from investor cash-flow timing.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why this chapter exists | Chapter 2, Section 2.1 |
| Single-deposit EOV | Section 2.2 |
| Multiple-contribution EOV | Section 2.3 |
| Investment Return / Yield Rates | Section 2.4 |
| Reinvestment | Section 2.5 |
| Approximate DWRR | Section 2.6 |
| Fund Performance / TWRR | Section 2.7 |
| Exercises | Section 2.8, intentionally omitted |
