---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham; Michael C. Ehrhardt"
chapter: "10"
chapter_title: "The Basics of Capital Budgeting: Evaluating Cash Flows"
cf4_topics: ["3.3 Capital Budgeting and Cost of Capital", "3.4 Investment Return Methods"]
cf4_relevance: "Very High"
source_scope: "Brigham & Ehrhardt, Chapter 10 — full chapter; CF4 core emphasis on §§10.1–10.8"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Brigham, CapitalBudgeting, NPV, IRR, MIRR, ProfitabilityIndex, Payback]
date_created: "2026-08-25"
status: "study-note"
---

# Brigham — Chapter 10: The Basics of Capital Budgeting: Evaluating Cash Flows

> [!ABSTRACT] Chapter in One View
> Chapter 10 menjawab pertanyaan inti **capital budgeting**: setelah sebuah project menghasilkan serangkaian expected cash flows dan memiliki project-specific required return, **bagaimana management menentukan apakah project tersebut menciptakan value dan bagaimana membandingkannya dengan alternatif lain?**
>
> Brigham menempatkan **Net Present Value (NPV)** sebagai benchmark utama. NPV adalah present value dari expected future cash flows dikurangi investment cost. Karena NPV mengukur langsung tambahan value bagi firm, project dengan positive NPV menambah shareholder wealth; untuk mutually exclusive projects, project dengan **highest positive NPV** adalah pilihan utama.
>
> Chapter kemudian memperkenalkan **Internal Rate of Return (IRR)**, yaitu discount rate yang membuat NPV sama dengan nol. Untuk normal independent projects, IRR dan NPV memberikan accept/reject decision yang sama. Namun IRR dapat gagal ketika cash-flow pattern nonnormal menghasilkan multiple IRRs, dan dapat memberikan ranking yang berbeda dari NPV pada mutually exclusive projects akibat **timing** atau **scale differences**.
>
> Brigham menjelaskan akar theoretical conflict tersebut melalui **reinvestment-rate assumption**. NPV mengasumsikan intermediate cash flows dapat direinvestasikan pada project cost of capital, sedangkan regular IRR secara implisit mengasumsikan reinvestment pada IRR itu sendiri. Textbook menganggap WACC/project cost of capital biasanya merupakan assumption yang lebih reasonable.
>
> Untuk memperbaiki kelemahan IRR, chapter memperkenalkan **Modified Internal Rate of Return (MIRR)**. MIRR menggabungkan present value dari project costs dengan terminal value dari positive cash flows yang di-compound pada cost of capital, sehingga menggunakan explicit realistic reinvestment rate dan menghilangkan multiple-IRR problem.
>
> **NPV profile** kemudian memperlihatkan bagaimana NPV berubah saat discount rate berubah. IRR adalah titik ketika profile memotong sumbu horizontal; **crossover rate** adalah discount rate ketika NPV dua mutually exclusive projects sama. Profile membantu menjelaskan conflict antara NPV dan IRR.
>
> Chapter juga membahas **Profitability Index (PI)** sebagai present value future cash flows per dollar initial investment. Untuk normal independent projects, $NPV>0$, $IRR>r$, $MIRR>r$, dan $PI>1$ memberikan keputusan yang konsisten. Namun untuk mutually exclusive projects, NPV tetap diprioritaskan bila rankings bertentangan.
>
> Sections setelah §10.8 membahas payback, practical usage, unequal project lives, economic life, dan capital-budget issues. Materi tersebut tetap diringkas sebagai supporting context, tetapi **scope resmi CF4 untuk Brigham Chapter 10 adalah §§10.1–10.8**.

---

## 1. Why This Chapter Exists

Capital budgeting bukan sekadar exercise menghitung PV.

Perusahaan sendiri yang **menciptakan project**, memilih bagaimana project dijalankan, dan sangat memengaruhi actual cash flows melalui execution. Karena itu capital budgeting merupakan salah satu keputusan corporate finance yang paling penting.

Opening case chapter menggunakan Florida Power & Light (FPL) pada kondisi economic downturn. Perusahaan menghadapi konflik nyata:

- construction yang sudah berjalan mahal untuk dihentikan;
- renewable/green projects memiliki strategic value;
- demand listrik menjadi sulit diprediksi;
- capital markets menjadi lebih ketat;
- membangun capacity yang tidak dibutuhkan dapat membebani company dengan interest, depreciation, dan maintenance costs.

Management akhirnya mengurangi capital budget dan menunda projects yang paling mudah ditunda.

Lesson-nya:

> **Capital budgeting adalah allocation of scarce capital under uncertainty.**

Salah memilih project tidak hanya menghasilkan satu accounting loss. Karena capital investments biasanya besar, long-lived, dan sulit dibalik, keputusan yang salah dapat memengaruhi competitiveness dan bahkan survival.

Brigham menghubungkan capital budgeting langsung dengan valuation:

$$
NPV
=
-\text{Initial Cost}
+
\sum_{t=1}^{N}
\frac{CF_t}{(1+r)^t}
$$

dengan $r$ sebagai **project's own risk-adjusted cost of capital**.

Project yang diterima menambahkan cash flows ke firm free cash flow. Karena firm value adalah present value dari future FCF, positive-NPV projects meningkatkan firm value.

> [!INFO] CF4 Connection
> `[CORE CF4]` Chapter ini merupakan sumber utama bagi [[3.4 Investment Return Methods]] dan mendukung [[3.3 Capital Budgeting and Cost of Capital]]. Silabus secara eksplisit memasukkan **Brigham Chapter 10 §§10.1–10.8**.

---

## 2. Chapter Map

```text
Chapter 10 — The Basics of Capital Budgeting: Evaluating Cash Flows
├── 10.1 An Overview of Capital Budgeting
│   ├── Capital budget vs capital budgeting
│   ├── Project generation and classification
│   └── Six screening procedures
├── 10.2 Net Present Value (NPV)
│   ├── Project S and Project L
│   ├── Independent projects
│   └── Mutually exclusive projects
├── 10.3 Internal Rate of Return (IRR)
│   ├── IRR definition
│   ├── IRR decision rule
│   └── Why NPV can be better than IRR
├── 10.4 Multiple Internal Rates of Return
│   ├── Normal vs nonnormal cash flows
│   └── Multiple-IRR problem
├── 10.5 Reinvestment Rate Assumptions
│   ├── NPV reinvestment assumption
│   └── IRR reinvestment assumption
├── 10.6 Modified Internal Rate of Return (MIRR)
│   ├── PV of costs
│   ├── Terminal value of inflows
│   └── MIRR decision rule
├── 10.7 NPV Profiles
│   ├── IRR as x-intercept
│   ├── Crossover rate
│   ├── Timing differences
│   └── Scale differences
├── 10.8 Profitability Index (PI)
├── 10.9 Payback Period
│   ├── Regular payback
│   └── Discounted payback
├── 10.10 Conclusions on Capital Budgeting Methods
├── 10.11 Decision Criteria Used in Practice
└── 10.12 Other Issues in Capital Budgeting
    ├── Unequal lives
    ├── Replacement chain / EAA
    ├── Economic life
    └── Capital-budget constraints
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| §10.1 Overview | **Very High — Core** | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| §10.2 NPV | **Very High — Core** | [[3.4 Investment Return Methods]] |
| §10.3 IRR | **Very High — Core** | [[3.4 Investment Return Methods]] |
| §10.4 Multiple IRRs | **Very High — Core** | [[3.4 Investment Return Methods]] |
| §10.5 Reinvestment Assumptions | **High — Core** | [[3.4 Investment Return Methods]] |
| §10.6 MIRR | **Very High — Core** | [[3.4 Investment Return Methods]] |
| §10.7 NPV Profiles | **Very High — Core** | [[3.4 Investment Return Methods]] |
| §10.8 Profitability Index | **Very High — Core** | [[3.4 Investment Return Methods]] |
| §10.9 Payback | Supporting / outside explicit Brigham CF4 section scope | [[3.4 Investment Return Methods]] |
| §§10.10–10.11 Conclusions & Practice | Supporting | [[3.4 Investment Return Methods]] |
| §10.12 Other Issues | Supporting / beyond explicit scope | [[3.4 Investment Return Methods]] |

> [!NOTE] Scope Boundary
> Silabus CF4 mencantumkan **Brigham Chapter 10 §§10.1–10.8**. Karena ini adalah *Condensed Textbook Note*, chapter tetap diikuti sampai akhir, tetapi §§10.9–10.12 dikompresi lebih agresif dan tidak dijadikan core material dari Brigham untuk CF4.

---

## 3. 10.1 An Overview of Capital Budgeting

### Capital Budget vs Capital Budgeting

Brigham membedakan:

**Capital budget**

> summary of planned investments in assets expected to last more than one year.

**Capital budgeting**

> seluruh process untuk menganalisis projects, menentukan mana yang layak, dan memilih mana yang masuk capital budget.

Jadi:

```text
Ideas / opportunities
↓
Forecast cash flows
↓
Assess risk and cost of capital
↓
Evaluate project
↓
Accept / reject / rank
↓
Capital budget
```

### Capital Budgeting vs Security Valuation

Keduanya menggunakan framework yang sama:

1. forecast cash flows;
2. determine relevant discount rate;
3. calculate present value;
4. invest jika value lebih besar daripada cost.

Tetapi Brigham menekankan dua perbedaan.

#### Difference 1 — Project Creation

Investor memilih securities yang sudah tersedia di market.

Firm dapat:

- menciptakan product;
- membangun factory;
- redesign process;
- enter new market;
- develop technology.

Jadi project set bukan fixed.

#### Difference 2 — Firm Influences the Outcome

Investor biasa tidak dapat banyak memengaruhi cash flows dari bond atau stock yang dibeli.

Firm management sangat memengaruhi project cash flows melalui:

- execution;
- operations;
- marketing;
- cost control;
- timing;
- strategic decisions.

Capital budgeting karena itu mencakup **decision quality + implementation quality**.

---

### Project Generation

Well-managed firms actively generate ideas melalui:

- R&D;
- strategic planning;
- divisional targets;
- operating managers;
- employee suggestions;
- incentive compensation;
- stock ownership/option incentives.

Brigham menunjukkan bahwa good capital budgeting dimulai **sebelum spreadsheet valuation**: perusahaan membutuhkan process yang menghasilkan good investment opportunities.

---

### Project Classification

Textbook memberi delapan categories.

#### 1. Replacement to Continue Profitable Operations

Contoh: mengganti essential equipment yang rusak pada profitable operation.

Biasanya relatively routine dan tidak memerlukan elaborate review.

#### 2. Replacement to Reduce Costs

Equipment lama masih bekerja tetapi replacement menurunkan operating costs.

Butuh comparative analysis lebih detail.

#### 3. Expansion of Existing Products or Markets

Membutuhkan forecast demand.

Uncertainty lebih tinggi daripada routine replacement.

#### 4. Expansion into New Products or Markets

Strategic decision yang dapat mengubah business risk dan nature of company.

Memerlukan top-management / board-level analysis.

#### 5. Contraction Decisions

Downsizing atau closing operations ketika capacity terlalu tinggi.

Cash-flow analysis harus mempertimbangkan shutdown costs dan continuing losses yang dapat dihindari.

#### 6. Safety and/or Environmental Projects

Sebagian bersifat mandatory karena regulation, contracts, atau insurance requirements.

Decision mungkin bukan “accept or reject,” tetapi “bagaimana memenuhi requirement dengan least economic cost.”

#### 7. Other

Office buildings, parking facilities, executive aircraft, dan miscellaneous investments.

#### 8. Mergers

Acquisition of a whole company/division berbeda secara scale dan complexity, tetapi tetap menggunakan capital-budgeting principles.

### Review Depth Depends on Size and Strategic Importance

Semakin:

- besar expenditure;
- tinggi uncertainty;
- irreversible;
- strategic;

semakin detail analysis dan semakin tinggi approval level.

---

### Six Screening Procedures

Brigham lists:

1. Net Present Value (NPV)
2. Internal Rate of Return (IRR)
3. Modified Internal Rate of Return (MIRR)
4. Profitability Index (PI)
5. Regular Payback
6. Discounted Payback

Textbook's central conclusion sejak awal:

> **NPV is the best single criterion.**

Reason:

> NPV directly measures contribution to intrinsic firm value.

Namun methods lain tetap memberikan useful information.

---

## 4. 10.2 Net Present Value (NPV)

`[CORE CF4]`

### Definition

$$
\boxed{
NPV
=
PV(\text{cash inflows})
-
PV(\text{cash outflows})
}
$$

Jika $CF_0$ adalah initial cash flow:

$$
\boxed{
NPV
=
\sum_{t=0}^{N}
\frac{CF_t}{(1+r)^t}
}
$$

Untuk standard project dengan initial cost $I_0$:

$$
NPV
=
-I_0
+
\sum_{t=1}^{N}
\frac{CF_t}{(1+r)^t}
$$

### What NPV Measures

NPV menjawab:

> **Berapa dollar value yang project tambahkan kepada firm hari ini setelah seluruh future cash flows didiskontokan pada return yang sesuai dengan risk-nya?**

Karena itu NPV memiliki direct link ke shareholder wealth.

---

### Textbook Example — Projects S and L

Both projects cost:

$$
\$10{,}000
$$

and have:

$$
r=10\%
$$

#### Project S

| Year | Cash Flow |
|---:|---:|
| 0 | $-10{,}000$ |
| 1 | $5{,}000$ |
| 2 | $4{,}000$ |
| 3 | $3{,}000$ |
| 4 | $1{,}000$ |

#### Project L

| Year | Cash Flow |
|---:|---:|
| 0 | $-10{,}000$ |
| 1 | $1{,}000$ |
| 2 | $3{,}000$ |
| 3 | $4{,}000$ |
| 4 | $6{,}750$ |

Project S receives more of its cash early.

Project L receives more total cash, but later.

Results:

$$
NPV_S
=
\$788.20
$$

$$
NPV_L
=
\$1{,}004.03
$$

### Independent Projects

Independent projects adalah projects whose cash flows are not affected by acceptance of another project.

Decision rule:

$$
\boxed{
NPV>0 \Rightarrow Accept
}
$$

If both S and L are independent:

$$
NPV_S>0,\qquad NPV_L>0
$$

so:

> **accept both.**

### Mutually Exclusive Projects

Mutually exclusive projects adalah alternative ways to achieve the same objective; accepting one means rejecting another.

Decision rule:

$$
\boxed{
\text{Choose the project with highest positive NPV}
}
$$

For S vs L:

$$
NPV_L>NPV_S
$$

therefore choose **L**.

> [!WARNING] Important Distinction
> **Accept/reject decision ≠ ranking decision.**
>
> Independent projects dapat semuanya diterima. Mutually exclusive projects memerlukan ranking.

### Why NPV Is the Primary Criterion

If:

$$
NPV>0
$$

then the project provides cash-flow value above the return required for its risk.

Thus accepting positive-NPV projects increases intrinsic value.

NPV also handles:

- scale;
- timing;
- discount rate;
- all project cash flows.

This becomes essential when other methods disagree.

---

## 5. 10.3 Internal Rate of Return (IRR)

`[CORE CF4]`

### Definition

IRR adalah discount rate yang membuat:

$$
NPV=0
$$

Formally:

$$
\boxed{
0
=
\sum_{t=0}^{N}
\frac{CF_t}{(1+IRR)^t}
}
$$

For a standard initial-outlay project:

$$
I_0
=
\sum_{t=1}^{N}
\frac{CF_t}{(1+IRR)^t}
$$

Brigham compares IRR with bond YTM.

Both are rates that equate:

> present value of promised/expected future cash flows with current investment price/cost.

### Textbook Results

For Projects S and L:

$$
IRR_S
=
14.489\%
$$

$$
IRR_L
=
13.549\%
$$

At project cost of capital:

$$
r=10\%
$$

both satisfy:

$$
IRR>r
$$

so if independent, both are accepted.

### IRR Decision Rule

For normal independent projects:

$$
IRR>r
\Rightarrow
Accept
$$

$$
IRR<r
\Rightarrow
Reject
$$

At:

$$
IRR=r
$$

NPV equals zero.

### Why Managers Like IRR

IRR is intuitively appealing because it is expressed as a percentage.

Managers can say:

> “This project is expected to earn about 14.5%, while its required return is 10%.”

That feels familiar because businesses commonly evaluate performance in rates of return.

But percentage intuition creates a danger when ranking projects of different scale.

---

### Figure/Example — Why NPV Can Be Better Than IRR

Brigham gives an intentionally extreme example.

Firm WACC:

$$
10\%
$$

Two mutually exclusive projects:

**Large**

- investment: $100,000
- cash inflow: $50,000 per year for 10 years

**Small**

- investment: $1
- cash inflow: $0.60 per year for 10 years

Results:

| Project | NPV | IRR |
|---|---:|---:|
| Large | $207,228.36 | 49.1% |
| Small | $2.69 | 59.4% |

IRR ranks **Small** higher.

NPV ranks **Large** higher.

Economic reasoning:

> 49.1% return on $100,000 creates vastly more shareholder wealth than 59.4% return on $1.

This exposes a fundamental limitation:

> **IRR measures a rate; NPV measures value added.**

When mutually exclusive project rankings conflict, maximizing percentage return is not identical to maximizing wealth.

---

## 6. 10.4 Multiple Internal Rates of Return

`[CORE CF4]`

### Normal Cash Flows

A **normal project** generally has one initial outflow followed by inflows:

```text
− + + + + ...
```

Only one sign change.

Such project normally has one economically meaningful IRR.

### Nonnormal Cash Flows

A project has **nonnormal cash flows** if signs change more than once:

```text
− + −
```

or:

```text
− + + −
```

This often occurs when project requires a later cleanup, shutdown, environmental restoration, decommissioning, or similar cost.

### Why Multiple IRRs Appear

IRR solves a polynomial equation.

Multiple sign changes can create multiple roots.

Brigham's Project M:

| Year | Cash Flow |
|---:|---:|
| 0 | $-1.6$ million |
| 1 | $+10$ million |
| 2 | $-10$ million |

NPV:

$$
NPV
=
-1.6
+
\frac{10}{1+r}
-
\frac{10}{(1+r)^2}
$$

This project has two IRRs:

$$
IRR_1=25\%
$$

$$
IRR_2=400\%
$$

Both satisfy:

$$
NPV=0
$$

So the question:

> “Is IRR above the 10% cost of capital?”

becomes meaningless because there is no unique IRR.

### Correct Response

Use:

- NPV at the appropriate project cost of capital;
- NPV profile;
- MIRR if a rate-of-return measure is desired.

> [!WARNING] Important Distinction
> **IRR is not always unique.**
>
> Multiple cash-flow sign changes → immediately suspect multiple/no meaningful IRR.

### Textbook Example — Project MM

Cash flows:

$$
[-1000,\;2000,\;2000,\;-3350]
$$

IRRs:

$$
12.23\%
$$

and:

$$
122.15\%
$$

At cost of capital 10%, textbook NPV is negative, so project is rejected despite having two IRRs above 10%.

This is exactly why NPV remains the reliable decision rule.

---

## 7. 10.5 Reinvestment Rate Assumptions

`[CORE CF4]`

This section explains a conceptual reason NPV and IRR can conflict.

### NPV Assumption

When future cash flows are discounted at $r$, the present-value framework implicitly treats $r$ as the opportunity/reinvestment rate.

Therefore:

> **NPV assumes intermediate project cash flows can be reinvested at the project cost of capital.**

### IRR Assumption

Because IRR is the discount rate used to equate PV cash flows with project cost:

> **regular IRR implicitly assumes intermediate cash flows are reinvested at the IRR itself.**

### Why Brigham Prefers the NPV Assumption

Suppose:

$$
IRR=50\%
$$

but:

$$
WACC=10\%
$$

For a company with good access to capital markets, Brigham argues it is generally unrealistic to assume each intermediate cash inflow can repeatedly find new investments earning 50%.

If such extraordinarily profitable investments were widely available:

- firm could raise capital at around 10%;
- competitors would enter;
- competitive pressure would tend to reduce exceptional returns.

The opportunity cost of internal cash is also approximately the external capital cost the firm avoids.

Hence 10% is more plausible than 50% as reinvestment rate.

### Economic Insight

The IRR itself can overstate the actual compound return on capital if intermediate cash flows cannot be reinvested at the IRR.

Therefore:

> **IRR is a break-even discount rate, not automatically the realized compound return on investor wealth.**

This motivates MIRR.

> [!WARNING] Important Distinction
> **IRR calculation and actual reinvestment experience are not the same thing.**
>
> A project with IRR 40% does not mean every cash distribution from the project can also earn 40%.

---

## 8. 10.6 Modified Internal Rate of Return (MIRR)

`[CORE CF4]`

### Why MIRR Exists

Regular IRR has two major weaknesses:

1. unrealistic reinvestment assumption;
2. multiple-IRR problem for nonnormal cash flows.

MIRR modifies the process.

### Core Mechanics

Brigham's procedure can be understood in three steps.

#### Step 1 — Discount Project Costs to Present

All negative cash flows are discounted back to time 0 using the financing/project cost rate.

Call this:

$$
PV(\text{costs})
$$

#### Step 2 — Compound Positive Cash Flows to Terminal Year

All positive cash flows are compounded forward at the relevant reinvestment rate, typically cost of capital.

Call this:

$$
TV(\text{inflows})
$$

#### Step 3 — Find the Rate Connecting PV Costs and Terminal Value

$$
\boxed{
PV(\text{costs})(1+MIRR)^N
=
TV(\text{inflows})
}
$$

Thus:

$$
\boxed{
MIRR
=
\left(
\frac{TV(\text{inflows})}
{PV(\text{costs})}
\right)^{1/N}
-1
}
$$

### Textbook Example — Project S

Project S positive cash flows are compounded to Year 4 at 10%.

Terminal value:

$$
TV
=
\$15{,}795
$$

Initial cost:

$$
PV(\text{cost})
=
\$10{,}000
$$

Solve:

$$
10{,}000(1+MIRR)^4
=
15{,}795
$$

Result:

$$
\boxed{
MIRR_S=12.11\%
}
$$

For Project L:

$$
\boxed{
MIRR_L=12.66\%
}
$$

Because both exceed:

$$
r=10\%
$$

both independent projects are acceptable.

If mutually exclusive, MIRR ranks L above S, consistent with NPV in this example.

### Advantages over Regular IRR

#### 1. More Realistic Reinvestment Rate

MIRR uses explicit reinvestment at cost of capital rather than project IRR.

#### 2. Unique Rate

There can be only one MIRR under the textbook procedure.

Thus MIRR removes the multiple-IRR ambiguity.

### MIRR vs NPV

Brigham concludes:

- MIRR is generally a better rate-of-return indicator than regular IRR;
- for independent projects, NPV/IRR/MIRR generally lead to the same accept/reject decision;
- for mutually exclusive projects, NPV remains the authoritative criterion when rankings conflict.

Why?

Because NPV measures **absolute value added**, while MIRR still expresses a rate.

> [!INFO] Textbook Position
> If management wants a percentage measure, Brigham prefers **MIRR over regular IRR**. If management must choose between competing projects to maximize value, **NPV remains primary**.

---

## 9. 10.7 NPV Profiles

`[CORE CF4]`

### Definition

An **NPV profile** plots:

- horizontal axis → discount rate / cost of capital;
- vertical axis → project NPV.

To construct it:

1. calculate NPV at several discount rates;
2. plot the points;
3. connect them into a curve.

### Vertical Intercept

At:

$$
r=0
$$

no discounting occurs.

Therefore:

$$
NPV(0)
=
\sum CF_t
$$

For Project S:

$$
NPV_S(0)
=
13{,}000-10{,}000
=
\$3{,}000
$$

This is the vertical-axis intercept.

### Horizontal Intercept

Where:

$$
NPV=0
$$

the discount rate equals the project's IRR.

For Project S:

$$
IRR_S=14.489\%
$$

So its NPV profile crosses the horizontal axis at 14.489%.

### Shape

For normal projects, NPV generally falls as discount rate rises.

Reason:

$$
r\uparrow
\Rightarrow
PV(\text{future inflows})\downarrow
\Rightarrow
NPV\downarrow
$$

Long-dated cash flows are especially sensitive to discount-rate changes.

---

### Why Long Projects' NPV Profiles Are Steeper

Suppose $100$ is received:

- in Year 1;
- or Year 20.

The Year-20 cash flow is much more sensitive to a change in discount rate because discounting compounds over many periods.

Therefore a project such as L, whose larger cash flows arrive later, has a steeper NPV profile than S.

This is the key to understanding timing conflicts.

---

### Crossover Rate

For two mutually exclusive projects, the **crossover rate** is the discount rate at which:

$$
NPV_S=NPV_L
$$

Equivalent method:

1. construct incremental cash flows, e.g. $L-S$;
2. find the IRR of those incremental cash flows.

That incremental IRR is the crossover rate.

For Brigham's S and L:

$$
\boxed{
Crossover\ Rate=11.975\%
}
$$

### Interpretation

If:

$$
r<11.975\%
$$

NPV ranks L above S, while standalone IRR ranks S above L.

At:

$$
r>11.975\%
$$

both rank S above L, until projects eventually become unacceptable.

### Two Main Causes of Ranking Conflict

Brigham identifies:

#### 1. Timing Differences

One project returns cash earlier while another returns more cash later.

Discount rate changes affect the late-cash-flow project more strongly.

#### 2. Scale Differences

One project requires a much larger initial investment.

A smaller project may earn a higher percentage return yet create less total value.

### What to Do When Conflict Exists

Brigham's answer is explicit:

> **Use NPV.**

Reason:

- NPV's reinvestment assumption is generally more reasonable;
- NPV measures value added directly;
- maximizing intrinsic value is the firm's primary goal.

> [!WARNING] Important Distinction
> **Higher IRR does not automatically mean better mutually exclusive project.**
>
> First check NPV, scale, timing, and crossover rate.

---

## 10. 10.8 Profitability Index (PI)

`[CORE CF4]`

### Definition

Brigham defines:

$$
\boxed{
PI
=
\frac{PV(\text{future cash flows})}
{\text{Initial Cost}}
}
$$

or:

$$
PI
=
\frac{
\displaystyle\sum_{t=1}^{N}\frac{CF_t}{(1+r)^t}
}
{CF_0}
$$

where the denominator is interpreted as positive initial cost magnitude.

### Economic Meaning

PI measures:

> **present value generated per dollar of initial investment.**

For Project S:

$$
PI_S
=
\frac{10{,}788.20}{10{,}000}
=
1.0788
$$

For Project L:

$$
PI_L
=
\frac{11{,}004.03}{10{,}000}
=
1.1004
$$

Interpretation:

- S generates $1.0788 of PV per $1 initial investment;
- L generates $1.1004 per $1.

### Decision Rule

$$
\boxed{
PI>1
\Rightarrow
Accept
}
$$

$$
PI<1
\Rightarrow
Reject
$$

For simple initial-cost projects:

$$
PI
=
1+\frac{NPV}{Initial\ Cost}
$$

Therefore:

$$
NPV>0
\iff
PI>1
$$

### Independent Projects

For normal independent projects, PI provides same accept/reject conclusion as NPV.

### Mutually Exclusive Projects

If projects have equal initial cost, PI and NPV rankings are consistent.

If project sizes differ, PI may conflict with NPV because PI is a **relative** measure while NPV is an **absolute value** measure.

When conflict occurs:

> **follow NPV.**

> [!WARNING] Important Distinction
> **PI maximizes value per dollar; NPV maximizes total value.**
>
> These objectives are not always identical when choosing one mutually exclusive project.

---

# Sections Beyond Explicit CF4 Brigham Scope

The remainder of Chapter 10 is retained in condensed form for textbook continuity.

---

## 11. 10.9 Payback Period

`[CF4 SUPPORTING CONTEXT]`

### Regular Payback

Payback period is the number of years needed for cumulative project cash inflows to recover initial investment.

For uneven cash flows, when recovery occurs during a year:

$$
Payback
=
\text{Full Years Before Recovery}
+
\frac{\text{Amount Still Unrecovered}}
{\text{Cash Flow During Recovery Year}}
$$

Textbook results:

$$
Payback_S=2.33\text{ years}
$$

$$
Payback_L=3.30\text{ years}
$$

### What Regular Payback Ignores

It does not properly account for:

1. time value of money;
2. cash flows after payback cutoff;
3. a theoretically grounded cutoff period.

Thus it does not directly measure value creation.

### Discounted Payback

Discounted payback first discounts each cash flow at cost of capital, then determines when cumulative discounted cash flows recover the initial cost.

Textbook results at 10%:

$$
Discounted\ Payback_S=2.95\text{ years}
$$

$$
Discounted\ Payback_L=3.78\text{ years}
$$

### What Discounted Payback Fixes—and Does Not Fix

It fixes the TVM problem.

But it still ignores cash flows after payback.

### Why Firms Still Use Payback

Brigham notes payback provides information about:

**Liquidity**

Earlier recovery means capital is tied up for less time.

**Risk**

Distant expected cash flows are generally more uncertain than near-term cash flows. Short payback can therefore act as a rough risk indicator.

> [!WARNING] Important Distinction
> **Payback is useful supplementary information, not a substitute for NPV.**

---

## 12. 10.10 Conclusions on Capital Budgeting Methods

Brigham's conclusions can be condensed as follows.

### For Normal Independent Projects

If:

$$
NPV>0
$$

then generally:

$$
IRR>r
$$

$$
MIRR>r
$$

$$
PI>1
$$

All methods agree on accept/reject.

### For Mutually Exclusive Projects

Rankings can conflict due to:

- project size;
- timing;
- differences in lives.

If conflict occurs:

$$
\boxed{
NPV\text{ ranking dominates}
}
$$

### Why Keep Multiple Methods?

Even though NPV is best single criterion:

- IRR/MIRR provide percentage-return intuition;
- PI indicates value per initial dollar;
- payback provides liquidity/risk information.

Thus a strong analysis can calculate several measures but must know **what each measure means**.

---

## 13. 10.11 Decision Criteria Used in Practice

`[TEXTBOOK CONTEXT]`

Brigham summarizes historical survey evidence showing a long-run shift in corporate practice toward discounted-cash-flow methods.

Key qualitative pattern:

- NPV usage rose dramatically;
- IRR remained widely used;
- payback continued as a supplementary method;
- older accounting/other methods became less dominant.

Textbook concludes that NPV is the best single criterion, but managers use several measures together with judgment.

Exact survey percentages reflect the time period of the textbook and should not be treated as current market statistics.

---

## 14. 10.12 Other Issues in Capital Budgeting

`[BEYOND EXPLICIT BRIGHAM CF4 §10.1–10.8 SCOPE]`

Brigham briefly extends basic appraisal to three practical issues.

### 14.1 Mutually Exclusive Projects with Unequal Lives

Suppose:

- Project S lasts 2 years;
- Project L lasts 4 years;
- whichever technology is selected must be replaced continuously.

One-cycle NPV may be misleading because the shorter project can be repeated.

Two approaches:

#### Replacement Chain / Common Life

Repeat each project until a common horizon is reached.

Then compare NPVs over the same total life.

#### Equivalent Annual Annuity (EAA)

Convert project NPV into equivalent annual value:

$$
NPV
=
EAA
\left[
\frac{1-(1+r)^{-n}}{r}
\right]
$$

Therefore:

$$
\boxed{
EAA
=
\frac{NPV}
{PVIFA(r,n)}
}
$$

For repeatable mutually exclusive projects, select the higher EAA, subject to valid replication assumptions.

### Replication Assumption Matters

Replacement-chain/EAA logic assumes replacement opportunities remain broadly comparable.

If future replacement costs or cash flows change materially—for example due to inflation or technological change—the future cycle must be forecast explicitly rather than mechanically copying the current project.

---

### 14.2 Economic Life vs Physical Life

**Physical life**

> maximum period asset can physically operate.

**Economic life**

> period of operation that maximizes asset/project NPV.

A machine may physically last 10 years but economically should be replaced in Year 6 if:

- maintenance costs rise;
- operating efficiency falls;
- salvage value declines;
- newer technology becomes superior.

Decision approach:

> calculate project NPV assuming disposal/replacement at alternative dates and choose the highest NPV.

So:

$$
Economic\ Life
\leq
Physical\ Life
$$

in many cases.

---

### 14.3 Optimal Capital Budget / Rising Marginal Cost of Capital

If the cost of raising additional capital rises as the company expands its capital budget, project selection becomes interaction between:

- project expected returns / NPVs;
- marginal cost of capital.

The economic principle remains:

> accept investments as long as they create value at the relevant marginal financing cost.

Detailed financing/capital-structure mechanics are developed elsewhere in the textbook.

---

## 15. The Project S vs L Story as One Integrated Example

Brigham deliberately uses the same two projects to make each method comparable.

### Cash Flows

| Year | Project S | Project L |
|---:|---:|---:|
| 0 | $-10{,}000$ | $-10{,}000$ |
| 1 | $5{,}000$ | $1{,}000$ |
| 2 | $4{,}000$ | $3{,}000$ |
| 3 | $3{,}000$ | $4{,}000$ |
| 4 | $1{,}000$ | $6{,}750$ |

Cost of capital:

$$
r=10\%
$$

### Metrics

| Metric | Project S | Project L |
|---|---:|---:|
| NPV | $788.20 | $1,004.03 |
| IRR | 14.489% | 13.549% |
| MIRR | 12.11% | 12.66% |
| PI | 1.0788 | 1.1004 |
| Payback | 2.33 years | 3.30 years |
| Discounted Payback | 2.95 years | 3.78 years |

### If Independent

Both are accepted by:

- NPV;
- IRR;
- MIRR;
- PI.

### If Mutually Exclusive

At 10%:

- NPV prefers **L**;
- IRR prefers **S**;
- MIRR prefers **L**;
- PI prefers **L**;
- payback prefers **S**.

Which should management choose?

$$
\boxed{
Project\ L
}
$$

because:

$$
NPV_L>NPV_S
$$

and NPV maximizes value.

### Why IRR Prefers S

S receives more cash earlier.

This generates a higher percentage return.

### Why NPV Prefers L at 10%

L generates larger late cash flows whose PV remains sufficiently high at 10%.

Because the projects are mutually exclusive, value added—not percentage return—is the ultimate criterion.

### Crossover

Their NPV profiles cross at approximately:

$$
11.975\%
$$

Below that rate, L has higher NPV.

Above it, S has higher NPV.

This single example integrates nearly the entire chapter.

---

## 16. Important Distinctions

> [!WARNING] Important Distinction
> **Capital budget ≠ capital budgeting**
>
> Capital budget = list/plan of investments.  
> Capital budgeting = process of generating, analyzing, and selecting them.

> [!WARNING] Important Distinction
> **Project value ≠ project NPV**
>
> Project value is PV of future project cash flows.  
> NPV subtracts project investment cost.

> [!WARNING] Important Distinction
> **Independent ≠ mutually exclusive**
>
> Independent projects can be accepted together.  
> Mutually exclusive projects compete for the same objective.

> [!WARNING] Important Distinction
> **NPV ≠ IRR**
>
> NPV measures absolute value created.  
> IRR measures break-even percentage return.

> [!WARNING] Important Distinction
> **IRR > WACC is reliable only under appropriate project structure.**
>
> Multiple sign changes can make IRR nonunique or misleading.

> [!WARNING] Important Distinction
> **Higher IRR ≠ necessarily higher shareholder value**
>
> Scale and timing can reverse the ranking.

> [!WARNING] Important Distinction
> **NPV reinvestment assumption ≠ IRR reinvestment assumption**
>
> NPV → reinvest at cost of capital.  
> IRR → reinvest at IRR.

> [!WARNING] Important Distinction
> **MIRR ≠ regular IRR**
>
> MIRR uses explicit financing/reinvestment assumptions and avoids multiple IRRs.

> [!WARNING] Important Distinction
> **IRR ≠ crossover rate**
>
> Project IRR makes that project's NPV zero.  
> Crossover rate makes two projects' NPVs equal.

> [!WARNING] Important Distinction
> **PI > 1 ≠ NPV > 1**
>
> $PI>1$ corresponds to $NPV>0$ for simple projects.

> [!WARNING] Important Distinction
> **Regular payback ≠ discounted payback**
>
> Discounted payback respects TVM; regular payback does not.

> [!WARNING] Important Distinction
> **Physical life ≠ economic life**
>
> Economic life is the value-maximizing holding period.

---

## 17. Mechanics — Choosing the Right Decision Rule

```text
Start with project cash flows
        ↓
Is project independent?
├── Yes
│   ├── NPV > 0 → Accept
│   ├── Normal CF? IRR > r gives same decision
│   ├── MIRR > r gives supporting rate information
│   └── PI > 1 gives supporting relative-value information
│
└── No, mutually exclusive
    ↓
    Compare NPV
    ↓
    Choose highest positive NPV
    ↓
    If IRR ranking differs:
        inspect scale/timing
        build NPV profiles
        find crossover rate
        use NPV
```

If cash flows are nonnormal:

```text
Multiple sign changes?
        ↓
Yes
        ↓
Do not rely on a single regular IRR
        ↓
Use NPV
+
MIRR / NPV profile as supporting tools
```

---

## 18. Formula Sheet from the Chapter

### NPV

$$
\boxed{
NPV
=
\sum_{t=0}^{N}
\frac{CF_t}{(1+r)^t}
}
$$

### IRR

$$
\boxed{
0
=
\sum_{t=0}^{N}
\frac{CF_t}{(1+IRR)^t}
}
$$

### MIRR

$$
\boxed{
PV(\text{costs})(1+MIRR)^N
=
TV(\text{positive cash flows})
}
$$

or:

$$
\boxed{
MIRR
=
\left(
\frac{TV(\text{inflows})}
{PV(\text{costs})}
\right)^{1/N}
-1
}
$$

### Profitability Index

$$
\boxed{
PI
=
\frac{PV(\text{future cash inflows})}
{\text{Initial Cost}}
}
$$

For a simple initial-outlay project:

$$
\boxed{
PI
=
1+\frac{NPV}{Initial\ Cost}
}
$$

### Payback — Fractional Year

$$
\boxed{
Payback
=
\text{Years Before Full Recovery}
+
\frac{\text{Unrecovered Cost}}
{\text{Cash Flow in Recovery Year}}
}
$$

### Equivalent Annual Annuity

$$
\boxed{
EAA
=
\frac{NPV}{PVIFA(r,n)}
}
$$

---

## 19. Chapter Synthesis

Jika Chapter 10 hanya boleh dipahami sebagai satu coherent story, ceritanya adalah:

> **A capital project is worth undertaking only if the present value of the economic benefits it creates exceeds the value of the capital sacrificed to obtain them.**

Capital budgeting mulai dengan project opportunity. Management memperkirakan future project cash flows dan memilih project-specific required return yang sesuai dengan risk.

NPV kemudian menjadi central metric:

$$
NPV
=
PV(\text{benefits})
-
PV(\text{costs})
$$

Positive NPV berarti project menciptakan value.

IRR mencoba menyampaikan project economics dalam bentuk percentage return. Untuk normal independent projects, ini bekerja dengan baik dan menghasilkan keputusan sama dengan NPV. Tetapi percentage return tidak menangkap scale secara langsung, dan nonnormal cash flows dapat menghasilkan multiple IRRs.

Reinvestment assumption memperjelas perbedaan tersebut. NPV mengasumsikan cash flows direinvestasikan pada opportunity cost of capital; regular IRR mengasumsikan pada IRR. Karena assumption pertama biasanya lebih defensible, NPV mempunyai theoretical advantage.

MIRR memperbaiki IRR dengan explicit reinvestment at cost of capital dan menghasilkan unique rate. NPV profiles memperlihatkan hubungan antara discount rate dan project value, serta menjelaskan crossover/ranking conflict.

PI mengukur PV per dollar investment, sedangkan payback mengukur speed of recovery. Keduanya berguna, tetapi tidak menggantikan NPV sebagai measure of total value creation.

Keseluruhan chapter dapat diringkas sebagai:

```text
Expected Project Cash Flows
        +
Risk-Adjusted Cost of Capital
        ↓
NPV
        ↓
Value Creation?
        ↓
Independent:
    accept all positive NPV projects

Mutually exclusive:
    choose highest positive NPV
        ↓
IRR / MIRR / PI / Payback
provide additional perspectives,
not a superior value objective
```

---

## 20. Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Capital budget | Planned long-term investments | Final investment plan | [[3.3 Capital Budgeting and Cost of Capital]] |
| Capital budgeting | Analysis and selection process | Converts opportunities into value decisions | [[3.3 Capital Budgeting and Cost of Capital]] |
| Independent project | Can coexist with other projects | Multiple positive-NPV projects may all be accepted | [[3.4 Investment Return Methods]] |
| Mutually exclusive project | Choosing one excludes another | Requires ranking, not only accept/reject | [[3.4 Investment Return Methods]] |
| NPV | PV benefits minus PV costs | Direct measure of value creation | [[3.4 Investment Return Methods]] |
| IRR | Discount rate at NPV = 0 | Percentage-return measure | [[3.4 Investment Return Methods]] |
| Normal cash flow | One sign change | Usually gives unique IRR | [[3.4 Investment Return Methods]] |
| Nonnormal cash flow | Multiple sign changes | Can create multiple IRRs | [[3.4 Investment Return Methods]] |
| Reinvestment assumption | Rate on intermediate cash flows | Explains NPV–IRR conflict | [[3.4 Investment Return Methods]] |
| MIRR | Modified rate with explicit reinvestment | Better rate measure than regular IRR | [[3.4 Investment Return Methods]] |
| NPV profile | NPV as function of discount rate | Visualizes IRR and ranking conflicts | [[3.4 Investment Return Methods]] |
| Crossover rate | Rate where two NPVs are equal | Explains ranking switches | [[3.4 Investment Return Methods]] |
| Profitability index | PV per dollar invested | Relative profitability measure | [[3.4 Investment Return Methods]] |
| Payback | Time to recover initial investment | Liquidity/risk information | [[3.4 Investment Return Methods]] |
| Discounted payback | Recovery time using discounted CF | Adds TVM but still ignores later CF | [[3.4 Investment Return Methods]] |
| Economic life | NPV-maximizing asset life | Replacement/termination decision | [[3.4 Investment Return Methods]] |

---

## 21. Compression Notes

### Retained in Detail

- FPL capital-budgeting opening lesson;
- corporate valuation linkage;
- capital budget vs capital budgeting;
- security valuation vs project valuation;
- project idea generation;
- project classification;
- six screening criteria;
- NPV definition and value logic;
- Projects S/L;
- independent vs mutually exclusive decisions;
- IRR definition, mechanics, and decision rule;
- NPV vs IRR scale conflict;
- normal vs nonnormal cash flows;
- multiple IRR problem;
- reinvestment-rate assumptions;
- MIRR mechanics and interpretation;
- NPV profiles;
- crossover rate;
- timing and scale differences;
- PI definition and interpretation.

### Condensed

- repeated calculator/Excel instructions;
- repetitive self-test questions;
- long numerical interpolation demonstrations for IRR;
- lengthy practitioner anecdotes;
- repeated NPV calculations once mechanics are established;
- detailed graph coordinates beyond economically relevant intercepts;
- historical survey discussion;
- extended numerical payback tables;
- repeated project examples that teach the same ranking principle.

### Omitted / Beyond CF4

- textbook website/tool-kit references;
- spreadsheet keystroke instructions;
- end-of-chapter problems;
- full accounting-rate-of-return web extension;
- detailed survey citations;
- extensive bibliographic notes;
- §§10.9–10.12 retained only as compact supporting context because explicit CF4 Brigham scope ends at §10.8.

---

## 22. CF4 Connection Map

```text
[[3.3 Capital Budgeting and Cost of Capital]]
        ↓
Project cash flows + project risk-adjusted cost of capital
        ↓
Brigham Chapter 10
        ↓
┌─────────────────────────────────────┐
│ NPV — absolute value creation       │
│ IRR — break-even return             │
│ MIRR — modified return              │
│ PI — value per initial dollar       │
│ Payback — recovery speed            │
└─────────────────────────────────────┘
        ↓
[[3.4 Investment Return Methods]]
        ↓
Independent project?
    → accept positive NPV
        ↓
Mutually exclusive?
    → choose highest positive NPV
        ↓
If rankings conflict
    → timing / scale / crossover
    → NPV dominates
```

---

## 23. Quick Reading Review

- Capital budgeting adalah process untuk menganalisis dan memilih long-term investment projects.
- Capital budgeting mirip security valuation: forecast CF → discount → compare value with cost.
- Perbedaannya, firm **menciptakan** project dan memengaruhi execution.
- Brigham lists six core screens: NPV, IRR, MIRR, PI, regular payback, discounted payback.
- NPV adalah **best single criterion** menurut chapter.
- $NPV>0$ berarti project menambah value.
- Independent projects: terima semua positive-NPV projects.
- Mutually exclusive projects: pilih **highest positive NPV**.
- IRR adalah discount rate yang membuat $NPV=0$.
- Untuk normal independent projects, $IRR>r$ dan $NPV>0$ memberi keputusan sama.
- Higher IRR tidak otomatis lebih baik untuk mutually exclusive projects.
- Scale differences dapat membuat project dengan lower IRR menghasilkan much higher NPV.
- Nonnormal cash flows dapat menghasilkan multiple IRRs.
- Multiple sign changes → jangan rely mechanically pada IRR.
- NPV assumes reinvestment at cost of capital.
- Regular IRR assumes reinvestment at IRR.
- Brigham menganggap cost-of-capital reinvestment assumption umumnya lebih realistic.
- MIRR compounds positive cash flows at an explicit reinvestment rate dan discounts negative flows appropriately.
- MIRR avoids multiple-IRR problem.
- Project S/L: $NPV_S=788.20$, $NPV_L=1,004.03$; $IRR_S=14.489\%$, $IRR_L=13.549\%$.
- MIRR S/L: 12.11% dan 12.66%.
- PI S/L: 1.0788 dan 1.1004.
- NPV profile shows NPV at different discount rates.
- A project's IRR is the NPV profile's x-intercept.
- Crossover rate is where two mutually exclusive projects have equal NPV.
- For S vs L, crossover rate is approximately 11.975%.
- Timing and scale are the two major sources of NPV–IRR ranking conflict in this chapter.
- PI measures PV per dollar initial investment.
- $PI>1$ corresponds to positive NPV for a simple initial-outlay project.
- When PI and NPV rankings conflict, use NPV.
- Regular payback ignores TVM and post-payback cash flows.
- Discounted payback fixes TVM but still ignores post-payback cash flows.
- Payback remains useful for liquidity and rough risk information.
- Economic life is the operating life that maximizes NPV, not necessarily the physical life of the asset.

---

## 24. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose and FPL case | Chapter 10 opening |
| Corporate valuation linkage | Chapter 10 — Corporate Valuation and Capital Budgeting |
| Overview, project creation/classification, six methods | §10.1 |
| NPV definition, Projects S/L, independent vs mutually exclusive | §10.2 |
| IRR definition, S/L IRRs, NPV-vs-IRR scale example | §10.3 |
| Normal/nonnormal cash flows, Project M multiple IRRs | §10.4 |
| NPV vs IRR reinvestment assumptions | §10.5 |
| MIRR mechanics, S/L MIRRs, MIRR advantages | §10.6 |
| NPV profile, slope, crossover rate, timing/scale conflicts | §10.7 |
| PI definition, S/L PI, PI/NPV relationship | §10.8 |
| Regular and discounted payback | §10.9 |
| Comparative conclusion across methods | §10.10 |
| Historical use of capital-budgeting criteria | §10.11 |
| Unequal lives, economic life, capital-budget extensions | §10.12 |
| CF4 scope | CF4 syllabus — Topik 3, Brigham Chapter 10 §§10.1–10.8 |

---

*📖 Source: Brigham & Ehrhardt, Financial Management: Theory and Practice, 12th ed., Chapter 10 — The Basics of Capital Budgeting: Evaluating Cash Flows | CF4 core scope: §§10.1–10.8*
