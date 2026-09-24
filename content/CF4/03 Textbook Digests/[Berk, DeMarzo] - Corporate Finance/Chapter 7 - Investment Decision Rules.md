---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "7"
chapter_title: "Investment Decision Rules"
cf4_topics: ["3.3 Capital Budgeting and Cost of Capital", "3.4 Investment Return Methods"]
cf4_relevance: "Very High"
source_scope: "Berk & DeMarzo, Chapter 7 — Sections 7.1–7.5 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, CapitalBudgeting, NPV, IRR, Payback, ProfitabilityIndex]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 7: Investment Decision Rules

> [!ABSTRACT] Chapter in One View
> Chapter 7 menjawab satu pertanyaan praktis: **setelah project cash flows dan cost of capital tersedia, rule apa yang seharusnya digunakan untuk menerima, menolak, atau memilih project?**
>
> Berk & DeMarzo menempatkan **Net Present Value (NPV)** sebagai benchmark utama. Untuk stand-alone project, accept jika \(NPV>0\); untuk mutually exclusive projects, pilih alternative dengan **highest NPV**. Alasannya fundamental: NPV mengukur **value created in cash today**, sehingga directly aligned dengan wealth maximization.
>
> **Internal Rate of Return (IRR)** memberi cara yang intuitif untuk mengekspresikan attractiveness sebagai return. Untuk conventional stand-alone project—negative cash flows terlebih dahulu lalu positive cash flows—IRR rule biasanya memberi keputusan sama dengan NPV: accept jika \(IRR\) melebihi opportunity cost of capital. Tetapi IRR bukan universal rule. Delayed-investment patterns dapat membalik interpretation; non-conventional cash flows dapat menghasilkan multiple IRRs atau bahkan no IRR.
>
> **Payback rule** bertanya berapa lama initial investment kembali. Rule ini sederhana dan berguna sebagai quick screen atau ukuran berapa lama capital terikat, tetapi dapat menghasilkan keputusan salah karena mengabaikan time value of money, cash flows setelah cutoff, dan menggunakan cutoff yang arbitrary.
>
> Untuk **mutually exclusive projects**, percentage returns tidak boleh dibandingkan sembarangan. IRR comparison hanya meaningful jika alternatives memiliki **same scale, same timing, and same risk**. Jika tidak, higher IRR tidak berarti higher value. Berk & DeMarzo memperkenalkan **incremental IRR** untuk menganalisis switching antar-projects, tetapi tetap menegaskan bahwa NPV adalah criterion yang paling reliable.
>
> Ketika positive-NPV projects lebih banyak daripada resource yang tersedia, masalah berubah menjadi **resource allocation**. Firm harus memilih portfolio projects yang memaksimalkan total NPV subject to the constraint. **Profitability index**, yang dalam chapter ini didefinisikan sebagai \(NPV\) per unit scarce resource, membantu ranking projects berdasarkan “value created per unit resource.”
>
> Untuk CF4, Chapter 7 adalah salah satu chapter paling langsung untuk [[3.4 Investment Return Methods]] dan juga mendukung [[3.3 Capital Budgeting and Cost of Capital]].

## 1. Why This Chapter Exists

Chapter sebelumnya telah membangun valuation melalui present value dan cost of capital. Tetapi manager tidak hanya perlu menghitung value; manager perlu **mengambil keputusan**.

Corporate investment decisions muncul dalam beberapa bentuk:

```text
One project
→ accept or reject?

Several independent projects
→ which positive-NPV projects should be taken?

Mutually exclusive alternatives
→ which one creates the most value?

Many attractive projects but limited resources
→ which combination should be funded?
```

Masalahnya adalah berbagai decision rules dapat memberi jawaban berbeda.

Manager mungkin melihat:

- dollar value created;
- percentage return;
- speed of capital recovery;
- value created per unit of scarce resource.

Semua metric tersebut mengukur hal yang berbeda.

Chapter 7 karena itu tidak sekadar memperkenalkan formula, tetapi menunjukkan **kapan suatu rule valid, kapan rule dapat gagal, dan mengapa NPV tetap menjadi benchmark**.

Mental model chapter:

```text
Project cash flows
      ↓
Cost of capital
      ↓
Investment decision metric
      ↓
NPV / IRR / Payback / Profitability Index
      ↓
Check project structure
      ↓
Stand-alone?
Mutually exclusive?
Resource constrained?
      ↓
Choose rule that preserves value maximization
```

> [!IMPORTANT] Core Principle
> **Decision rule yang baik harus menghasilkan choice yang memaksimalkan value.**
>
> Jika rule lain bertentangan dengan NPV, chapter ini pada akhirnya memilih NPV.

---

## 2. Chapter Map

```text
Chapter 7 — Investment Decision Rules
│
├── 7.1 NPV and Stand-Alone Projects
│   ├── NPV investment rule
│   ├── Fredrick's fertilizer project
│   ├── NPV profile
│   └── IRR as sensitivity / margin for error
│
├── 7.2 The Internal Rate of Return Rule
│   ├── IRR investment rule
│   ├── When IRR works
│   ├── Delayed investments
│   ├── Multiple IRRs
│   ├── No IRR
│   └── NPV profile as diagnostic
│
├── 7.3 The Payback Rule
│   ├── Payback period
│   ├── Payback investment rule
│   ├── Fredrick's example
│   └── Practical strengths and weaknesses
│
├── 7.4 Choosing Between Projects
│   ├── Mutually exclusive investments
│   ├── Highest-NPV rule
│   ├── Why IRR rankings can fail
│   ├── Scale, timing, and risk
│   ├── Incremental IRR
│   └── Crossover point / NPV profiles
│
└── 7.5 Project Selection with Resource Constraints
    ├── Capital/resource constraints
    ├── Profitability index
    ├── Budget constraint example
    ├── Human-resource constraint example
    └── Limitations of PI ranking
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 7.1 NPV and Stand-Alone Projects | Very High | [[3.4 Investment Return Methods]] |
| 7.2 Internal Rate of Return Rule | Very High | [[3.4 Investment Return Methods]] |
| 7.3 Payback Rule | High | [[3.4 Investment Return Methods]] |
| 7.4 Choosing Between Projects | Very High | [[3.4 Investment Return Methods]] |
| 7.5 Resource Constraints / PI | High | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |

---

## 3. 7.1 NPV and Stand-Alone Projects

### 3.1 Stand-Alone Project

A **stand-alone project** adalah opportunity yang dapat diambil tanpa menghalangi firm mengambil project lain.

Decision-nya adalah:

```text
Accept project
vs
Do nothing
```

Karena doing nothing memiliki:

\[
NPV=0
\]

maka NPV investment rule untuk stand-alone project menjadi:

\[
\boxed{NPV>0 \Rightarrow \text{Accept}}
\]

\[
\boxed{NPV<0 \Rightarrow \text{Reject}}
\]

Textbook menyatakan rule secara lebih general:

> pilih alternative dengan **highest NPV**.

Karena NPV dinyatakan dalam cash today, memilih highest NPV sama dengan memilih alternative yang memberi peningkatan wealth terbesar hari ini.

---

### 3.2 Why NPV Is the Benchmark

Untuk project dengan cash flows \(CF_t\) dan cost of capital \(r\):

\[
\boxed{
NPV
=
\sum_{t=0}^{N}
\frac{CF_t}{(1+r)^t}
}
\]

Biasanya \(CF_0<0\) karena initial investment.

NPV bukan sekadar accounting profit dan bukan percentage return.

Ia mengukur:

> **berapa dollar value yang diciptakan project setelah seluruh cash flows dihargai pada opportunity cost of capital yang sesuai.**

Jika:

\[
NPV=100
\]

economic meaning-nya adalah:

> undertaking the project setara dengan menambah wealth sebesar 100 dalam cash today.

---

### 3.3 Example — Fredrick's Feed and Farm

**Situation**

Fredrick's dapat membangun plant baru untuk environmentally friendly fertilizer.

Initial investment:

\[
\$250\text{ million}
\]

Project menghasilkan perpetuity:

\[
\$35\text{ million per year}
\]

mulai akhir tahun pertama.

Cost of capital:

\[
r=10\%
\]

**Calculation**

Karena cash flow merupakan perpetuity:

\[
PV(\text{benefits})
=
\frac{35}{r}
\]

Sehingga:

\[
NPV
=
-250+\frac{35}{0.10}
\]

\[
=
-250+350
=
\$100\text{ million}
\]

**Meaning**

Karena:

\[
NPV>0
\]

Fredrick's seharusnya menjalankan project.

Project tidak hanya “membayar kembali” investment-nya; setelah mempertimbangkan required return sebesar 10%, project masih menambah value sebesar:

\[
\$100\text{ million}
\]

---

### 3.4 NPV Profile

NPV tergantung pada discount rate.

Sebuah **NPV profile** adalah graph:

```text
x-axis → discount rate
y-axis → NPV
```

Untuk Fredrick's:

\[
NPV(r)
=
-250+\frac{35}{r}
\]

Saat \(r\) naik:

- PV future cash flows turun;
- NPV turun.

Textbook menunjukkan NPV menjadi nol pada sekitar:

\[
14\%
\]

Rate tersebut adalah **internal rate of return (IRR)**.

---

### 3.5 IRR as a Sensitivity Measure

Definisi formal:

\[
\boxed{
NPV(IRR)=0
}
\]

Untuk Fredrick's:

\[
IRR=14\%
\]

sementara estimated cost of capital:

\[
10\%
\]

Difference:

\[
14\%-10\%=4\%
\]

Berk & DeMarzo memberi interpretation penting:

> selisih antara IRR dan estimated cost of capital menunjukkan maximum estimation error pada cost of capital yang masih dapat terjadi tanpa mengubah original accept/reject decision.

Pada Fredrick's, estimate 10% masih dapat naik sampai hampir 14% sebelum project berubah dari positive menjadi negative NPV.

> [!INFO] CF4 Connection
> Ini menghubungkan [[3.3 Capital Budgeting and Cost of Capital]] dan [[3.4 Investment Return Methods]]: **cost of capital adalah hurdle ekonomi; NPV mengukur value pada hurdle tersebut; IRR menunjukkan break-even discount rate.**

---

## 4. 7.2 The Internal Rate of Return Rule

### 4.1 Intuition

IRR sering lebih intuitif bagi manager karena dinyatakan sebagai **percentage return**.

Textbook memberi interpretation:

> IRR dapat dipandang sebagai average return yang diperoleh dari taking the investment opportunity.

Jika project menghasilkan return lebih tinggi daripada alternative investment dengan equivalent risk and maturity, project tampak attractive.

Maka IRR investment rule:

\[
\boxed{
IRR>r
\Rightarrow
\text{Accept}
}
\]

\[
\boxed{
IRR<r
\Rightarrow
\text{Reject}
}
\]

dengan \(r\) = opportunity cost of capital.

---

### 4.2 When the IRR Rule Works

Untuk conventional stand-alone project:

```text
negative cash flows first
↓
positive cash flows later
```

IRR rule biasanya equivalent dengan NPV rule.

Contoh Fredrick's:

\[
IRR=14\%
\]

dan:

\[
r=10\%
\]

maka:

\[
IRR>r
\]

serta:

\[
NPV>0
\]

Kedua rules memberi keputusan sama.

Textbook memberi kondisi yang lebih kuat:

> IRR rule guaranteed bekerja untuk stand-alone project jika **seluruh negative cash flows mendahului seluruh positive cash flows**.

Jika sign pattern berbeda, interpretation dapat rusak.

---

## 5. IRR Pitfall — Delayed Investment

### 5.1 John Star Book Deal

**Situation**

Publisher menawarkan John Star:

\[
+\$1{,}000{,}000
\]

hari ini.

Untuk menulis buku selama tiga tahun, Star kehilangan alternative income:

\[
-\$500{,}000
\]

pada akhir masing-masing tahun 1, 2, dan 3.

Cash-flow pattern:

```text
t=0       t=1        t=2        t=3
+1,000    -500       -500       -500
```

Cost of capital:

\[
10\%
\]

Perhatikan struktur yang tidak biasa:

> cash masuk **dulu**, costs muncul **kemudian**.

Ini lebih mirip **borrowing** daripada normal investment.

---

### 5.2 IRR Result

IRR memenuhi:

\[
0
=
1{,}000{,}000
-
\frac{500{,}000}{1+IRR}
-
\frac{500{,}000}{(1+IRR)^2}
-
\frac{500{,}000}{(1+IRR)^3}
\]

Textbook memperoleh:

\[
IRR\approx23.38\%
\]

Jika IRR rule diterapkan mechanically:

\[
23.38\%>10\%
\]

sehingga rule mengatakan accept.

Tetapi ini salah.

---

### 5.3 NPV Result

\[
NPV
=
1{,}000{,}000
-\frac{500{,}000}{1.10}
-\frac{500{,}000}{1.10^2}
-\frac{500{,}000}{1.10^3}
\]

\[
NPV\approx-\$243{,}426
\]

Maka:

\[
\boxed{\text{Reject}}
\]

Mengambil deal mengurangi wealth.

---

### 5.4 Why the IRR Interpretation Reverses

Dalam normal project:

```text
pay money today
→ receive money later
```

IRR adalah rate yang **earned**.

Dalam Star deal:

```text
receive money today
→ make payments later
```

IRR lebih mirip rate yang **paid**.

Untuk borrowing:

> lower rate is better.

Karena itu Star seharusnya mengambil deal hanya jika implied financing rate cukup rendah relatif terhadap opportunity cost.

Textbook menunjukkan NPV menjadi positive justru ketika discount rate berada **di atas** IRR, opposite dari normal IRR rule.

> [!WARNING] Important Distinction
> **IRR sendiri tidak “salah”.**
>
> Yang dapat salah adalah **decision rule \(IRR>r\)** ketika cash-flow pattern bukan conventional investment.

---

## 6. IRR Pitfall — Multiple IRRs and No IRR

### 6.1 Why Multiple IRRs Can Occur

Jika cash-flow signs berubah lebih dari sekali:

```text
-  +  +  -  +
```

NPV equation dapat memiliki lebih dari satu rate yang membuat:

\[
NPV=0
\]

Maka project dapat memiliki **multiple IRRs**.

Textbook menunjukkan modified John Star deal dengan upfront payment, future costs, dan later royalty. Pattern ini dapat menghasilkan more than one NPV crossing.

Implikasinya:

> jika ada dua IRRs, statement “accept if IRR > cost of capital” menjadi ambiguous—IRR yang mana?

---

### 6.2 No IRR

Cash-flow pattern tertentu dapat menghasilkan NPV yang tidak pernah sama dengan zero untuk economically meaningful discount rates.

Maka:

\[
\text{IRR may not exist}
\]

Ini memperlihatkan limitation fundamental:

> IRR bukan metric yang guaranteed tersedia untuk every project.

NPV tidak menghadapi masalah ini karena untuk setiap specified cost of capital kita tetap dapat menghitung:

\[
NPV(r)
\]

---

### 6.3 NPV Profile as Diagnostic

Jika cash flows tidak conventional, textbook menyarankan melihat **NPV profile**.

Profile menunjukkan:

- berapa kali NPV crosses zero;
- interval discount rate di mana NPV positive;
- apakah usual IRR interpretation valid.

Textbook's Figure 7.5 membandingkan beberapa cash-flow patterns:

- beberapa project memiliki IRR sekitar 20%;
- satu project memiliki second IRR sekitar 5%;
- satu project tidak memiliki IRR;
- hanya project dengan all negative cash flows before positive cash flows memiliki standard IRR interpretation.

> [!IMPORTANT] Core Lesson
> Untuk unusual cash-flow signs, jangan berhenti setelah calculator memberi angka IRR.  
> **Check cash-flow pattern dan, bila perlu, NPV profile.**

---

## 7. 7.3 The Payback Rule

### 7.1 Definition

**Payback period** adalah waktu yang dibutuhkan cumulative project cash flows untuk recover initial investment.

Payback investment rule:

> accept project jika payback period lebih pendek daripada pre-specified cutoff; otherwise reject.

Contoh policy:

```text
Accept only if payback ≤ 5 years
```

---

### 7.2 Example — Fredrick's Payback

Fredrick's membutuhkan:

\[
\$250\text{ million}
\]

dan menerima:

\[
\$35\text{ million per year}
\]

Dalam lima tahun:

\[
5(35)=175
\]

yang belum menutup initial investment.

Dalam delapan tahun:

\[
8(35)=280
\]

sehingga payback sekitar tahun ke-8.

Jika company cutoff adalah 5 years:

\[
8>5
\]

maka payback rule mengatakan reject.

Padahal NPV project pada 10% adalah:

\[
+\$100\text{ million}
\]

Jadi firm akan menolak value-creating project.

---

### 7.3 Three Main Problems

Berk & DeMarzo menekankan tiga kelemahan payback.

#### 1. Ignores Cost of Capital and Time Value of Money

Regular payback memperlakukan:

\[
\$1\text{ today}
\]

dan:

\[
\$1\text{ several years later}
\]

seolah equal.

Padahal PV-nya berbeda.

#### 2. Ignores Cash Flows After the Payback Period

Begitu initial investment recovered, semua later cash flows diabaikan.

Dua projects dapat memiliki same payback tetapi extremely different total value.

#### 3. Cutoff Is Ad Hoc

Mengapa cutoff:

- 2 years?
- 3 years?
- 5 years?

Tidak ada universal value-maximizing cutoff.

---

### 7.4 Why Firms Still Use Payback

Textbook tidak menggambarkan payback sebagai completely useless.

Reasons firms may use it:

- sangat simple;
- cepat untuk small decisions;
- cost of detailed NPV analysis mungkin lebih besar daripada potential decision error;
- memberi information tentang berapa lama capital committed;
- short cutoff dapat menjadi first-stage screening tool.

Contoh practical use:

```text
Small equipment decision
↓
Quick payback screen
↓
If borderline / large project
→ full NPV analysis
```

Textbook juga mencatat beberapa companies memperbaiki first weakness dengan **discounted payback**, yaitu menghitung recovery menggunakan discounted cash flows.

Tetapi discounted payback tetap tidak memperbaiki semua kelemahan karena cash flows setelah cutoff masih diabaikan.

> [!WARNING] Important Distinction
> Payback = **liquidity / recovery-speed measure**, bukan direct measure of value creation.

---

## 8. 7.4 Choosing Between Projects

### 8.1 Mutually Exclusive Investments

Projects bersifat **mutually exclusive** jika memilih satu berarti alternatives lain tidak dapat diambil.

Contoh:

- dua design untuk facility yang sama;
- dua machines untuk fungsi yang sama;
- beberapa business concepts untuk satu location.

Decision bukan:

```text
Accept all positive projects
```

melainkan:

```text
Choose one best alternative
```

---

### 8.2 NPV Rule for Mutually Exclusive Projects

Rule:

\[
\boxed{
\text{Choose the project with the highest NPV}
}
\]

Reason:

NPV is cash value today.

Jika:

\[
NPV_A>NPV_B
\]

maka A creates more wealth than B.

Percentage return tidak dapat override this value comparison.

---

### 8.3 Example — Business at a Commercial Property

Textbook membandingkan alternative uses dari sebuah property dekat university, termasuk:

- bookstore;
- coffee shop;
- music store;
- electronics store.

Alternatives memiliki different:

- initial investments;
- initial cash flows;
- growth rates;
- cost of capital.

Lesson contoh tersebut bukan sekadar menghitung growing perpetuity.

Lesson utama:

> ketika alternatives mutually exclusive, evaluate each project at the appropriate cost of capital dan pilih **highest NPV**.

---

## 9. Why Highest IRR Is Not Necessarily Best

### 9.1 Return Comparison Requires Comparable Investments

Berk & DeMarzo memberi rule penting:

Returns dapat dibandingkan secara meaningful hanya jika investments mempunyai:

1. **same scale**;
2. **same timing**;
3. **same risk**.

Jika salah satu berbeda, comparing IRRs dapat menyesatkan.

Ini menjelaskan mengapa comparing deposit rates dari dua bank sering masuk akal:

- investment amount dapat disamakan;
- horizon dapat disamakan;
- risk dapat dibuat comparable.

Tetapi capital projects sering tidak memenuhi conditions tersebut.

---

### 9.2 Scale Problem

Project kecil dapat memiliki very high percentage return tetapi menciptakan sedikit dollar value.

Project besar dapat memiliki lower IRR tetapi much higher NPV.

Corporate objective:

\[
\text{maximize wealth}
\]

bukan:

\[
\text{maximize percentage return}
\]

> [!TIP] Mental Model
> **IRR = return intensity.**  
> **NPV = value creation.**
>
> Untuk mutually exclusive projects, value creation is the target.

---

### 9.3 Timing Problem

Dua projects dengan same initial cost dapat berbeda karena:

- Project A menghasilkan cash earlier;
- Project B menghasilkan larger cash later.

Changing discount rate changes how valuable those later cash flows are.

Karena itu project ranking dapat switch pada suatu discount rate tertentu.

---

### 9.4 Risk Problem

Jika projects memiliki different risk:

\[
r_A\ne r_B
\]

membandingkan raw IRRs saja mengabaikan fact bahwa each project harus dibandingkan dengan its own opportunity cost of capital.

NPV can handle this directly:

\[
NPV_A
=
\sum \frac{CF_{A,t}}{(1+r_A)^t}
\]

\[
NPV_B
=
\sum \frac{CF_{B,t}}{(1+r_B)^t}
\]

Textbook menekankan bahwa dalam situation seperti ini NPV adalah rule yang reliable.

---

## 10. Incremental IRR

### 10.1 Concept

Untuk mutually exclusive projects, kita dapat bertanya:

> Apakah additional investment required to move from smaller project to larger project worth it?

Bentuk incremental cash flow:

\[
\Delta CF_t
=
CF_{B,t}-CF_{A,t}
\]

Kemudian cari IRR dari:

\[
\Delta CF
\]

Rate ini adalah **incremental IRR**.

---

### 10.2 Example — Minor vs Major Overhaul

Cash flows textbook:

| Proposal | Year 0 | Year 1 | Year 2 | Year 3 |
|---|---:|---:|---:|---:|
| Minor overhaul | \(-10\) | 6 | 6 | 6 |
| Major overhaul | \(-50\) | 25 | 25 | 25 |

IRRs:

\[
IRR_{\text{minor}}\approx36.3\%
\]

\[
IRR_{\text{major}}\approx23.4\%
\]

Jika hanya memilih highest IRR:

> minor overhaul tampak lebih baik.

Tetapi scale berbeda.

Incremental cash flows from minor to major:

| | Year 0 | Year 1 | Year 2 | Year 3 |
|---|---:|---:|---:|---:|
| Major minus Minor | \(-40\) | 19 | 19 | 19 |

Incremental IRR:

\[
IRR_{\Delta}\approx20.0\%
\]

Jika cost of capital:

\[
12\%
\]

maka:

\[
20\%>12\%
\]

additional scale dari major overhaul creates value.

Maka major overhaul lebih attractive pada 12%, meskipun standalone IRR-nya lebih rendah.

---

### 10.3 Crossover Point

Incremental IRR juga merupakan **crossover rate**:

\[
\boxed{
NPV_A=NPV_B
}
\]

pada rate tersebut.

Textbook Figure 7.6 menunjukkan:

- major overhaul memiliki higher NPV pada 12%;
- minor overhaul memiliki higher standalone IRR;
- NPV profiles cross pada sekitar 20%;
- 20% = incremental IRR.

Thus:

```text
Below crossover rate
→ one project may dominate

Above crossover rate
→ ranking can reverse
```

---

### 10.4 Limitations of Incremental IRR

Incremental IRR is useful, tetapi bukan magic fix.

Textbook memberi tiga caveats.

#### 1. Incremental Cash Flows May Be Non-Conventional

Walaupun individual projects conventional, difference between them belum tentu conventional.

Maka incremental IRR dapat:

- be difficult to interpret;
- not exist;
- not be unique.

#### 2. Incremental IRR Does Not Establish Stand-Alone Acceptability

Incremental IRR hanya menjawab:

> is switching from A to B worthwhile?

It does **not** prove that A or B individually has:

\[
NPV>0
\]

Kita tetap harus check standalone value.

#### 3. Different Project Costs of Capital

Jika:

\[
r_A\ne r_B
\]

tidak jelas cost of capital mana yang harus digunakan sebagai benchmark bagi incremental IRR.

Dalam case ini:

> **NPV rule is the reliable criterion.**

---

## 11. Why Rules Other Than NPV Persist

Textbook membahas practical puzzle:

Jika NPV adalah theoretically correct, mengapa firms masih menggunakan IRR dan payback?

Possible reasons:

- managers familiar dengan percentage returns;
- IRR mudah dikomunikasikan;
- payback useful untuk budgeting/liquidity information;
- payback dapat menjadi cheap screening device;
- surveys may classify a rule as “used” walaupun NPV tetap menjadi final decision tool;
- real organizations memakai multiple metrics untuk different managerial purposes.

Core interpretation:

> existence of alternative rules in practice tidak berarti all rules have equal theoretical validity.

NPV tetap decision benchmark ketika rules conflict.

---

## 12. 7.5 Project Selection with Resource Constraints

### 12.1 Unconstrained Case

Dalam ideal unconstrained setting:

\[
NPV_i>0
\]

untuk semua projects berarti:

> undertake all positive-NPV projects.

Tidak perlu memilih antara mereka selama projects independent.

---

### 12.2 Resource Constraint Changes the Problem

Real manager dapat menghadapi finite:

- capital budget;
- engineering staff;
- production capacity;
- management attention;
- specialist labor;
- other scarce resources.

Jika resource terbatas, firm tidak dapat mengambil seluruh positive-NPV projects.

Objective becomes:

\[
\boxed{
\max \sum NPV_i
}
\]

subject to resource constraint.

---

## 13. Profitability Index

### 13.1 Berk & DeMarzo Definition

Chapter 7 mendefinisikan:

\[
\boxed{
Profitability\ Index
=
\frac{Value\ Created}{Resource\ Consumed}
=
\frac{NPV}{Resource\ Consumed}
}
\]

Interpretation:

> berapa NPV yang diciptakan per unit scarce resource.

Textbook menyebutnya:

> **“bang for your buck.”**

---

### 13.2 Capital Budget Example

Suppose budget maksimal:

\[
\$100\text{ million}
\]

Projects:

| Project | NPV ($m) | Initial Investment ($m) | PI = NPV / Investment |
|---|---:|---:|---:|
| I | 110 | 100 | 1.10 |
| II | 70 | 50 | 1.40 |
| III | 60 | 50 | 1.20 |

Tanpa constraint:

> take all three.

Dengan \$100m budget:

- Project I alone gives \(NPV=110\);
- Projects II + III consume same \$100m and give:

\[
70+60=130
\]

maka optimal choice:

\[
\boxed{II+III}
\]

Ranking by PI:

\[
II>III>I
\]

menghasilkan portfolio yang benar dalam example ini.

---

### 13.3 Important Convention

Dalam Berk & DeMarzo:

\[
PI=\frac{NPV}{Resource}
\]

Jadi jika only resource adalah initial investment dan denominator positive:

\[
PI>0
\]

equivalent dengan positive NPV.

Beberapa practitioners menambahkan 1 agar ratio menunjukkan total value per dollar invested.

Tetapi textbook sengaja memakai **net value created** sehingga formula dapat diterapkan pada resource lain selain cash.

> [!WARNING] Important Distinction
> Jangan otomatis menggunakan convention:
>
> \[
> PI=\frac{PV(\text{inflows})}{Initial\ Investment}
> \]
>
> ketika sedang membaca Berk & DeMarzo Chapter 7.
>
> Chapter ini menggunakan:
>
> \[
> \boxed{PI=\frac{NPV}{Resource\ Consumed}}
> \]
>
> Perbedaan convention penting untuk interpretasi threshold.

---

## 14. Profitability Index with Human Resource Constraint

### 14.1 NetIt Example

NetIt memiliki banyak positive-NPV projects tetapi limited engineering headcount.

Textbook data:

| Project | NPV ($m) | Engineering Headcount | PI = NPV / Engineer |
|---|---:|---:|---:|
| Project A | 22.7 | 47 | 0.483 |
| Project F | 12.9 | 32 | 0.403 |
| Project E | 20.6 | 58 | 0.355 |
| Router | 17.7 | 50 | 0.354 |
| Project C | 14.0 | 40 | 0.350 |
| Project D | 11.5 | 61 | 0.189 |
| Project B | 8.1 | 44 | 0.184 |

Available engineers:

\[
190
\]

Ranking dari highest PI menghasilkan:

1. A;
2. F;
3. E;
4. Router.

Cumulative headcount:

\[
47+32+58+50=187
\]

Sehingga selected projects menggunakan 187 dari 190 engineers.

Firm terpaksa melewatkan positive-NPV projects C, D, dan B.

---

### 14.2 Economic Meaning of the Marginal PI

Highest profitability index dari project yang belum dapat dikerjakan memberi information mengenai **shadow value** dari scarce resource.

Dalam example:

Project C memiliki:

\[
PI=0.350
\]

million NPV per engineer.

Artinya additional engineer dapat bernilai sampai sekitar:

\[
\$350{,}000
\]

jika memungkinkan firm undertake Project C.

Textbook's managerial logic:

- jika recruit/train additional engineer cost < value created per engineer, hiring may make sense;
- jika engineer digunakan elsewhere pada projects dengan lower PI, reallocation may create value.

Jadi PI bukan sekadar ranking statistic.

Ia membantu melihat:

> **economic value of relaxing a binding constraint.**

---

## 15. Shortcomings of the Profitability Index

Berk & DeMarzo menyatakan PI ranking completely reliable hanya di bawah restrictive conditions.

### Condition 1 — Ranking Exhausts the Available Resource

Suppose ranking menyisakan unused resource.

Project dengan low PI tetapi exactly fits leftover capacity dapat still increase total NPV.

Textbook memberi example tambahan:

- small project;
- \(NPV=\$120{,}000\);
- membutuhkan 3 engineers.

PI kecil:

\[
\frac{0.12}{3}=0.04
\]

Tetapi NetIt memiliki tepat 3 engineers unused.

Taking it adds value.

Jadi pure ranking dapat miss combination effects.

---

### Condition 2 — Only One Relevant Resource Constraint

Jika firm simultaneously constrained by:

- capital budget;
- engineering headcount;

maka satu-dimensional PI tidak cukup.

Project A mungkin efficient per dollar tetapi inefficient per engineer.

Project B mungkin sebaliknya.

Dalam multiple constraints, firm perlu optimization method yang mempertimbangkan seluruh constraints sekaligus.

Textbook menyebut linear dan integer programming sebagai tools untuk problem tersebut.

> [!IMPORTANT] Core Lesson
> Profitability index adalah **ranking heuristic under scarcity**, bukan replacement universal untuk NPV.
>
> Final objective tetap:
>
> \[
> \boxed{\text{maximize total NPV subject to constraints}}
> \]

---

## 16. Key Conceptual Relationships

### 16.1 NPV and Cost of Capital

\[
r\uparrow
\Rightarrow
PV(\text{future CF})\downarrow
\Rightarrow
NPV\downarrow
\]

untuk conventional investment.

---

### 16.2 IRR and NPV

\[
NPV(IRR)=0
\]

Untuk conventional project:

\[
IRR>r
\Longleftrightarrow
NPV>0
\]

Tetapi equivalence ini tidak universal untuk non-conventional cash flows.

---

### 16.3 Payback and NPV

Short payback does not imply:

\[
NPV>0
\]

Long payback does not imply:

\[
NPV<0
\]

Payback and NPV answer different questions.

---

### 16.4 Stand-Alone vs Mutually Exclusive

```text
Stand-alone / independent
→ accept every positive-NPV project

Mutually exclusive
→ choose highest positive NPV
```

---

### 16.5 Unconstrained vs Constrained

```text
No binding resource constraint
→ take all positive-NPV projects

Binding resource constraint
→ choose portfolio maximizing total NPV
→ PI may help rank value per scarce resource
```

---

## 17. Important Distinctions

> [!WARNING] Important Distinction
> **NPV ≠ IRR**
>
> NPV measures **dollar value creation**.  
> IRR measures a **break-even / internal return rate**.

> [!WARNING] Important Distinction
> **Highest IRR ≠ automatically best mutually exclusive project.**
>
> Scale, timing, atau risk differences dapat membuat ranking by IRR inconsistent dengan value maximization.

> [!WARNING] Important Distinction
> **IRR existence ≠ IRR rule validity.**
>
> Sebuah project dapat mempunyai numeric IRR tetapi \(IRR>r\) tetap menjadi decision rule yang salah jika cash-flow pattern terbalik.

> [!WARNING] Important Distinction
> **Payback ≠ discounted cash-flow valuation.**
>
> Regular payback ignores time value and post-payback flows.

> [!WARNING] Important Distinction
> **Profitability index ≠ objective function.**
>
> PI membantu ranking; objective tetap maximize total NPV.

---

## 18. Chapter Synthesis

Chapter 7 dapat dipahami sebagai cerita tentang **mengubah valuation menjadi decision discipline**.

NPV adalah starting point karena ia menjawab pertanyaan paling fundamental: jika semua project cash flows dinilai menggunakan opportunity cost of capital yang sesuai, berapa value yang diciptakan hari ini?

IRR kemudian mengubah project menjadi percentage-return language. Untuk ordinary investments, language ini sangat useful dan sering menghasilkan keputusan sama. Tetapi chapter sengaja menunjukkan bahwa percentage returns membawa hidden assumptions. Jika cash datang lebih dulu dan costs kemudian, IRR lebih mirip borrowing rate. Jika signs berubah berulang, project dapat mempunyai multiple rates atau no rate at all. Dengan kata lain, **IRR membutuhkan structure agar interpretation-nya valid**.

Payback bergerak ke extreme lain: bukan value atau return, tetapi speed. Rule ini mudah, intuitif, dan operationally useful, namun deliberately incomplete. Ia dapat menghemat managerial effort untuk small decisions, tetapi tidak boleh menggantikan NPV ketika value stakes besar.

Ketika projects saling meniadakan, chapter memperlihatkan masalah paling penting dalam ranking: **percentage return dan total value tidak sama**. Project dengan lower IRR bisa menciptakan lebih banyak wealth karena scale atau timing. Incremental IRR membantu memahami crossover, tetapi NPV tetap menjadi anchor.

Akhirnya, ketika resources scarce, bahkan positive-NPV rule belum cukup karena firm tidak bisa melakukan semuanya. Goal berubah menjadi portfolio optimization. Profitability index membantu mengarahkan scarce resources ke opportunities yang menghasilkan NPV paling tinggi per unit resource, sambil tetap tunduk pada objective utama: **maximize total value under constraints**.

Satu cerita chapter:

```text
Valuation
   ↓
NPV
   ↓
Correct accept/reject rule
   ↓
Alternative metrics may help
   ↓
But each has conditions and limitations
   ↓
When metrics conflict
   ↓
Return to value maximization
   ↓
NPV remains the anchor
```

---

## 19. Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| NPV | PV benefits minus PV costs | Direct measure of value creation | [[3.4 Investment Return Methods]] |
| Stand-alone project | Project whose acceptance does not exclude others | Accept if NPV > 0 | [[3.4 Investment Return Methods]] |
| NPV profile | NPV plotted against discount rate | Shows sensitivity and IRR crossings | [[3.4 Investment Return Methods]] |
| IRR | Discount rate that sets NPV to zero | Return-based decision metric | [[3.4 Investment Return Methods]] |
| IRR rule | Accept if IRR exceeds cost of capital | Valid mainly for conventional stand-alone projects | [[3.4 Investment Return Methods]] |
| Delayed investment | Positive CF precede negative CF | Standard IRR rule can reverse | [[3.4 Investment Return Methods]] |
| Multiple IRRs | More than one NPV-zero rate | IRR can be ambiguous | [[3.4 Investment Return Methods]] |
| Payback period | Time needed to recover initial investment | Simple liquidity/recovery metric | [[3.4 Investment Return Methods]] |
| Mutually exclusive | Selecting one excludes others | Choose highest NPV | [[3.4 Investment Return Methods]] |
| Incremental IRR | IRR of differences between alternatives | Explains crossover / switching decision | [[3.4 Investment Return Methods]] |
| Crossover rate | Discount rate where NPVs are equal | Ranking of alternatives can change here | [[3.4 Investment Return Methods]] |
| Resource constraint | Scarce capital/labor/etc. prevents all projects | Requires portfolio selection | [[3.3 Capital Budgeting and Cost of Capital]] |
| Profitability index | NPV per unit scarce resource | Ranks value efficiency under constraint | [[3.4 Investment Return Methods]] |
| Shadow value of resource | Value from one additional scarce unit | Guides hiring/reallocation decisions | [[3.3 Capital Budgeting and Cost of Capital]] |

---

## 20. Compression Notes

### Retained in Detail

- NPV rule and its economic interpretation.
- Fredrick's Feed and Farm example.
- NPV profile and IRR break-even interpretation.
- IRR rule and validity condition.
- John Star delayed-investment example.
- Multiple/no-IRR logic.
- Payback rule and Fredrick's example.
- Mutually exclusive project logic.
- Same scale / timing / risk requirement for comparing returns.
- Minor vs major overhaul incremental-IRR example.
- Resource constraints and profitability-index framework.
- Capital-budget and engineering-headcount PI examples.
- Main shortcomings of PI ranking.

### Condensed

- Chapter opening managerial interview/anecdotes.
- Survey percentages and detailed empirical discussion of how often CFOs use each rule.
- Repetitive spreadsheet/calculator instructions.
- Repeated concept-check questions.
- Full numerical detail for every IRR pathology example.
- Full calculation of every mutually exclusive business alternative.

### Omitted / Beyond CF4

- Spreadsheet implementation appendix.
- Software-specific Excel navigation.
- Further-reading bibliography.
- Repetitive end-of-chapter exercises.

---

## 21. CF4 Connection Map

```text
Berk & DeMarzo Chapter 7
          ↓
Project valuation rules
          ↓
[[3.4 Investment Return Methods]]
          ↓
NPV / IRR / Payback / PI
          ↓
Project ranking and selection
          ↓
[[3.3 Capital Budgeting and Cost of Capital]]
          ↓
Cost of capital + resource allocation
```

Cross-chapter logic:

```text
Chapter 3
Valuation / NPV foundation
        ↓
Chapter 7
Decision rules
        ↓
Chapter 8
Build actual project free cash flows
```

---

## 22. Quick Reading Review

- NPV adalah **cash value created today**.
- Untuk stand-alone project: \(NPV>0\) → accept.
- Untuk mutually exclusive projects: pilih **highest NPV**.
- IRR adalah discount rate yang membuat \(NPV=0\).
- Untuk conventional stand-alone project: \(IRR>r\) biasanya equivalent dengan \(NPV>0\).
- Difference \(IRR-r\) memberi sense of sensitivity terhadap error dalam cost-of-capital estimate.
- IRR rule dapat fail jika positive cash flows precede negative cash flows.
- Non-conventional cash flows dapat menghasilkan multiple IRRs atau no IRR.
- NPV profile membantu diagnose IRR problems.
- Payback mengukur recovery speed, bukan value.
- Payback ignores TVM, post-payback cash flows, dan memakai arbitrary cutoff.
- Return comparisons membutuhkan same **scale, timing, and risk**.
- Higher IRR tidak otomatis berarti higher wealth.
- Incremental IRR adalah IRR dari difference antara mutually exclusive alternatives.
- Incremental IRR juga identifies crossover rate.
- Jika projects memiliki different costs of capital, NPV adalah rule yang reliable.
- Jika resources tidak constrained, take all positive-NPV independent projects.
- Dengan resource constraint, maximize **total NPV subject to constraint**.
- Berk & DeMarzo PI:
  \[
  PI=\frac{NPV}{Resource\ Consumed}
  \]
- PI menunjukkan value created per unit scarce resource.
- PI ranking dapat fail jika resource tidak fully exhausted atau terdapat multiple constraints.
- Across the entire chapter, **NPV remains the anchor decision criterion**.

---

## 23. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose / decision-rule framing | Berk & DeMarzo, Chapter 7 introduction |
| NPV rule | Chapter 7 §7.1 |
| Fredrick's fertilizer example | Chapter 7 §7.1 |
| NPV profile | Chapter 7 §7.1, Figure 7.1 |
| IRR sensitivity interpretation | Chapter 7 §7.1 |
| IRR investment rule | Chapter 7 §7.2 |
| Conditions under which IRR works | Chapter 7 §7.2 |
| John Star delayed-investment example | Chapter 7 §7.2 |
| Multiple IRRs / no IRR | Chapter 7 §7.2 |
| NPV profiles for unusual cash flows | Chapter 7 §7.2, Figure 7.5 |
| Payback rule | Chapter 7 §7.3 |
| Fredrick's payback example | Chapter 7 Example 7.2 |
| Payback shortcomings and practical use | Chapter 7 §7.3 |
| Mutually exclusive investments | Chapter 7 §7.4 |
| NPV rule for mutually exclusive projects | Chapter 7 §7.4 |
| Alternative commercial-property example | Chapter 7 Example 7.3 |
| Same scale / timing / risk condition | Chapter 7 §7.4 — When Can Returns Be Compared? |
| Minor vs major overhaul | Chapter 7 Example 7.4 |
| Incremental IRR / crossover | Chapter 7 §7.4, Figure 7.6 |
| Incremental IRR limitations | Chapter 7 §7.4 |
| Resource constraints | Chapter 7 §7.5 |
| Budget constraint / Table 7.1 | Chapter 7 §7.5 |
| Profitability index definition | Chapter 7 §7.5, Eq. 7.2 |
| NetIt engineering constraint | Chapter 7 Example 7.5 |
| PI limitations | Chapter 7 §7.5 |
| Chapter-level synthesis | Chapter 7 summary |

> [!NOTE] Source Boundary
> Note ini diringkas dari **Berk & DeMarzo Chapter 7, Sections 7.1–7.5**, sesuai reference scope Topik 3 CF4. Terminologi dan profitability-index convention dipertahankan sesuai textbook. Materi dari Brigham seperti MIRR atau alternative PI convention tidak ditambahkan ke condensed chapter ini karena bukan bagian dari Berk & DeMarzo Chapter 7.
