---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "8"
chapter_title: "Fundamentals of Capital Budgeting"
cf4_topics: ["3.3 Capital Budgeting and Cost of Capital", "3.4 Investment Return Methods"]
cf4_relevance: "Very High"
source_scope: "Berk & DeMarzo, Chapter 8 — Sections 8.1–8.5"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, CapitalBudgeting, FreeCashFlow, NPV, SensitivityAnalysis]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 8: Fundamentals of Capital Budgeting

> [!ABSTRACT] Chapter in One View
> Chapter 8 bergerak dari **decision rule** ke **construction of the cash flows that feed the decision rule**. Chapter 7 sudah menjawab “gunakan NPV”; Chapter 8 menjawab pertanyaan yang lebih sulit: **cash flow apa yang benar-benar masuk ke NPV?**
>
> Prinsip utamanya adalah **incrementalism**. Project dinilai berdasarkan perubahan cash flows perusahaan **with project versus without project**, bukan berdasarkan accounting profit atau seluruh revenue/cost yang kebetulan berhubungan dengan business unit tersebut. Karena itu opportunity costs, project externalities, dan cannibalization harus dimasukkan; sunk costs dan overhead yang tidak berubah harus dikeluarkan.
>
> Forecast biasanya dimulai dari **incremental earnings**. Tetapi earnings bukan cash flow. Capital expenditures tidak langsung muncul seluruhnya sebagai expense pada income statement, depreciation adalah non-cash expense, dan working capital dapat menyerap cash. Maka incremental earnings harus dikonversi menjadi **free cash flow (FCF)**.
>
> Project dievaluasi secara **unlevered**: interest expense tidak dikurangkan ketika menghitung project cash flow, karena financing decision dipisahkan dari investment decision. Pajak dihitung memakai **marginal corporate tax rate**.
>
> Chapter kemudian menyempurnakan FCF dengan depreciation tax shield, after-tax salvage value, terminal value, dan efek tax losses. Setelah FCF diperoleh, setiap cash flow didiskontokan menggunakan **project cost of capital**, yaitu expected return dari securities dengan comparable risk and horizon.
>
> Terakhir, karena forecast tidak pernah pasti, capital budgeting tidak berhenti pada satu angka NPV. **Break-even analysis** mencari parameter yang membuat NPV nol; **sensitivity analysis** mengubah satu assumption pada satu waktu; **scenario analysis** mengubah beberapa assumptions secara bersamaan.
>
> Untuk CF4, Chapter 8 adalah source yang sangat langsung untuk [[3.3 Capital Budgeting and Cost of Capital]] dan mendukung penggunaan NPV pada [[3.4 Investment Return Methods]].

---

## 1. Why This Chapter Exists

Chapter 7 menetapkan:

\[
NPV=\sum_{t=0}^{N}\frac{FCF_t}{(1+r)^t}
\]

Tetapi formula itu hanya berguna jika kita tahu:

1. cash flows mana yang relevan;
2. bagaimana accounting forecasts diubah menjadi cash flows;
3. bagaimana tax, depreciation, working capital, dan capital expenditure diperlakukan;
4. bagaimana uncertainty di sekitar forecast dianalisis.

Capital budgeting adalah proses:

> **menganalisis investment opportunities dan menentukan mana yang seharusnya diterima.**

Textbook membuka chapter dengan contoh keputusan McDonald's untuk memperluas menu coffee. Lesson-nya bukan tentang coffee, tetapi tentang difficulty berikut:

```text
Business idea
↓
Forecast revenues and costs
↓
Identify incremental consequences
↓
Convert earnings → free cash flow
↓
Discount at project cost of capital
↓
NPV
↓
Analyze uncertainty
```

Dengan kata lain:

> **NPV rule is only as good as the cash-flow forecast placed inside it.**

---

## 2. Chapter Map

```text
Chapter 8 — Fundamentals of Capital Budgeting
│
├── 8.1 Forecasting Earnings
│   ├── Capital budget
│   ├── Incremental earnings
│   ├── Revenue and cost forecasts
│   ├── Depreciation
│   ├── Unlevered net income
│   ├── Marginal tax rate
│   ├── Opportunity costs
│   ├── Project externalities / cannibalization
│   ├── Sunk costs
│   └── Overhead expenses
│
├── 8.2 Determining Free Cash Flow and NPV
│   ├── From earnings to FCF
│   ├── Depreciation add-back
│   ├── Capital expenditures
│   ├── Net working capital
│   ├── Depreciation tax shield
│   ├── Project cost of capital
│   └── HomeNet NPV
│
├── 8.3 Choosing Among Alternatives
│   └── Relevant differential cash flows
│
├── 8.4 Further Adjustments to Free Cash Flow
│   ├── Tax depreciation
│   ├── Accelerated depreciation / MACRS
│   ├── Liquidation or salvage value
│   ├── Taxes on asset disposal
│   ├── Terminal / continuation value
│   └── Tax loss carryforwards / carrybacks
│
└── 8.5 Analyzing the Project
    ├── Break-even analysis
    ├── EBIT break-even
    ├── Sensitivity analysis
    └── Scenario analysis
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 8.1 Forecasting Earnings | Very High | [[3.3 Capital Budgeting and Cost of Capital]] |
| 8.2 Determining FCF and NPV | Very High | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| 8.3 Choosing Among Alternatives | High | [[3.4 Investment Return Methods]] |
| 8.4 Further Adjustments to FCF | High | [[3.3 Capital Budgeting and Cost of Capital]] |
| 8.5 Analyzing the Project | High | [[3.3 Capital Budgeting and Cost of Capital]] |

---

# 3. 8.1 Forecasting Earnings

## 3.1 Capital Budget and Incremental Earnings

A firm's **capital budget** lists the projects and investments the firm plans to undertake.

To evaluate one project, we need **incremental earnings**:

> the amount by which the firm's earnings are expected to change as a result of the investment decision.

This is the fundamental comparison:

\[
\boxed{
Incremental
=
\text{With Project}
-
\text{Without Project}
}
\]

This principle prevents a common mistake: assigning every revenue or expense associated with a division to the project even when some of those amounts would occur anyway.

---

## 3.2 HomeNet as the Running Example

Berk & DeMarzo use Cisco's hypothetical **HomeNet** project throughout the chapter.

The project requires forecasting:

- sales volume;
- price per unit;
- product costs;
- selling/general/administrative effects;
- R&D or launch expenditures;
- depreciation;
- taxes;
- capital expenditures;
- working capital;
- terminal effects.

The precise purpose of the example is to show how an apparently simple product launch becomes a full capital-budgeting model.

The first step is not NPV.

The first step is:

> **forecast the project's contribution to earnings.**

---

## 3.3 Revenue Forecast

Incremental revenue is not necessarily equal to the project's gross sales.

If new product sales simply replace sales that would otherwise have occurred from another product of the same firm, only the **net change** belongs to the project.

General logic:

\[
Incremental\ Revenue
=
New\ Project\ Revenue
-
Lost\ Existing\ Revenue
+
Other\ Revenue\ Gains
\]

The forecast must reflect what changes because the decision is made.

---

## 3.4 Costs

Relevant project costs are costs that change because the firm undertakes the project.

Examples include:

- manufacturing costs;
- labor directly induced by the project;
- marketing expenditures;
- incremental support costs.

Again, the test is causal:

> Would this cash consequence occur if the project were not undertaken?

If yes regardless of the decision, it is not incremental.

---

## 3.5 Depreciation and Earnings

Capital expenditure is not usually recognized as an immediate accounting expense.

Instead, the cost of a long-lived asset is allocated through depreciation.

Thus:

```text
Purchase equipment
↓
Cash leaves immediately
↓
Accounting expense recognized gradually as depreciation
```

This difference between **cash timing** and **accounting recognition** is one of the central reasons earnings are not the same as project cash flow.

At the earnings stage:

\[
EBIT
=
Revenue
-
Costs
-
Depreciation
\]

---

## 3.6 Ignore Interest Expense

When evaluating a capital-budgeting decision, textbook separates:

```text
Investment decision
from
Financing decision
```

Therefore, project earnings are forecast **without interest expense**.

Why?

Because interest is determined by how the firm chooses to finance the project. The project itself should first be valued independently of whether the firm finances it with:

- debt;
- equity;
- internal funds.

This is consistent with the Separation Principle introduced earlier in the textbook.

The relevant accounting measure is therefore **unlevered net income**.

\[
\boxed{
Unlevered\ Net\ Income
=
EBIT(1-t_c)
}
\]

or:

\[
\boxed{
Unlevered\ Net\ Income
=
(Revenue-Costs-Depreciation)(1-t_c)
}
\]

where:

\[
t_c
=
\text{marginal corporate tax rate}
\]

> [!WARNING] Important Distinction
> **Project FCF calculation does not subtract interest expense.**
>
> Including interest and then discounting at a cost of capital that already reflects financing would mix investment and financing effects.

---

## 3.7 Marginal Corporate Tax Rate

The tax rate relevant to capital budgeting is the **marginal corporate tax rate**:

> tax rate paid on an additional dollar of pre-tax income.

For project analysis:

\[
Income\ Tax
=
EBIT\times t_c
\]

If project EBIT is positive, the project increases taxes.

If project EBIT is negative and the firm has other taxable income against which the loss can be offset, the project can create a **tax saving**.

### Example — Taxing Project Losses

The textbook considers a profitable firm introducing a product that produces an operating loss.

If the project reduces taxable income by:

\[
\$15\text{ million}
\]

and:

\[
t_c=40\%
\]

then tax savings are:

\[
15(0.40)=\$6\text{ million}
\]

Economic meaning:

> a loss-producing project may still have a positive current tax effect because the loss shelters income earned elsewhere in the firm.

The project must receive credit for that incremental tax saving when it is actually usable.

---

# 4. Incremental Earnings: What to Include and Exclude

This is one of the most important parts of the chapter.

The correct question is never simply:

> “Is this cost related to the project?”

The correct question is:

> **“Does this cost or benefit change because we undertake the project?”**

---

## 4.1 Opportunity Cost

An **opportunity cost** is the value lost by using an existing resource for the project instead of its best alternative use.

Suppose the firm already owns land.

Project accounting may show:

\[
Purchase\ Cost=0
\]

today.

But if land could be sold for:

\[
\$10\text{ million}
\]

using it for the project sacrifices that value.

Relevant project cost:

\[
\boxed{\$10\text{ million}}
\]

not zero.

> [!IMPORTANT] Core Logic
> **Historical purchase price is irrelevant. Current alternative value is relevant.**

The project must compensate the firm for every resource it consumes, including resources already owned.

---

## 4.2 Project Externalities

A **project externality** is an effect of the project on other cash flows of the firm.

Externalities can be:

- negative;
- positive.

### Cannibalization

**Cannibalization** occurs when a new product reduces sales of the firm's existing products.

Example logic:

\[
New\ Product\ Sales
=
20
\]

but if:

\[
40\%
\]

of those sales come from customers who otherwise would have bought the old product, then not all 20 is incremental.

If customer spending is otherwise the same:

\[
Incremental\ Sales
=
20(1-0.40)
=
12
\]

The lost old-product contribution belongs in the project analysis because it occurs **because of the new project**.

### Positive Externality

A project may also increase sales elsewhere:

- new software may increase hardware sales;
- a new store may improve brand visibility;
- one product may create demand for complementary products.

Such benefits are incremental and should be included.

---

## 4.3 Sunk Cost

A **sunk cost** is a cost that has already been incurred and cannot be changed by the current decision.

Examples:

- R&D already spent;
- consulting study already paid for;
- prior market research.

If:

```text
Take project
or
Reject project
```

leads to the same past cost, then:

\[
\Delta Cost=0
\]

and the cost is irrelevant to today's NPV.

> [!WARNING] Important Distinction
> **Sunk cost ≠ opportunity cost**
>
> - Sunk cost: past and unavoidable → exclude.
> - Opportunity cost: future benefit sacrificed because of the project → include.

---

## 4.4 Overhead Expenses

Firms often allocate overhead to projects.

But allocated accounting overhead is not automatically incremental.

Suppose corporate headquarters allocates:

\[
\$1\text{ million}
\]

of existing administrative cost to HomeNet.

If total headquarters cash spending does not rise because HomeNet exists:

\[
Incremental\ Overhead=0
\]

and that allocation should not reduce project NPV.

However, if HomeNet actually causes:

- additional staff;
- new office space;
- additional systems cost;

then those incremental amounts must be included.

Rule:

\[
\boxed{
Include\ only\ incremental\ overhead
}
\]

not allocated overhead merely because accounting assigns it to the project.

---

# 5. From Earnings to Free Cash Flow

## 5.1 Why Earnings Are Not Enough

A project can report positive earnings but consume cash, or report low earnings while generating substantial cash.

Three key adjustments connect earnings to FCF:

1. **add back non-cash charges**;
2. **subtract capital expenditures**;
3. **subtract increases in net working capital**.

Thus:

\[
\boxed{
FCF
=
Unlevered\ Net\ Income
+
Depreciation
-
CapEx
-
\Delta NWC
}
\]

Substituting unlevered net income:

\[
\boxed{
FCF
=
(Revenue-Costs-Depreciation)(1-t_c)
+
Depreciation
-
CapEx
-
\Delta NWC
}
\]

---

## 5.2 Depreciation Is Added Back

Depreciation reduces accounting earnings:

\[
EBIT\downarrow
\]

but it is not a current cash outflow.

Therefore, after computing after-tax earnings, depreciation is added back.

This does **not** mean depreciation is irrelevant.

Its relevance comes through taxes.

---

## 5.3 Capital Expenditures

**Capital expenditures (CapEx)** are actual cash expenditures for long-lived assets.

At acquisition:

\[
CapEx>0
\Rightarrow
FCF\downarrow
\]

The important distinction:

```text
CapEx
= actual investment cash flow

Depreciation
= accounting/tax allocation of that investment
```

A project may purchase a \$20 million asset today even though only a fraction of that amount appears as depreciation expense each year.

For NPV:

> cash expenditure occurs when the money is actually spent.

---

# 6. Net Working Capital

## 6.1 Definition

The chapter defines project net working capital as:

\[
\boxed{
NWC
=
Cash
+
Inventory
+
Receivables
-
Payables
}
\]

This reflects operating cash tied up in the project.

---

## 6.2 Why an Increase in NWC Reduces FCF

Suppose sales rise.

Firm may need:

- inventory before it can sell products;
- receivables because customers pay later;
- operating cash balances.

These assets consume cash.

Payables provide spontaneous financing and reduce the amount of cash tied up.

Therefore:

\[
\Delta NWC>0
\Rightarrow
FCF\downarrow
\]

and:

\[
\Delta NWC<0
\Rightarrow
FCF\uparrow
\]

Formula:

\[
\boxed{
FCF
=
\cdots-\Delta NWC
}
\]

---

## 6.3 Recovery of Working Capital

Working capital investment is often recovered as project activity declines or ends.

Example pattern from the HomeNet analysis:

```text
Early years
Sales grow
→ receivables / inventory rise
→ NWC investment
→ FCF reduced

Later years
Sales decline / project winds down
→ NWC released
→ negative ΔNWC
→ FCF increased
```

This explains why working capital is not necessarily a permanent cost.

It is often a **temporary use of cash**.

---

## 6.4 Example — Changing Sales and NWC

The textbook's changing-sales example forecasts receivables as a percentage of sales and payables as a percentage of cost of goods sold.

Illustrative pattern:

| Year | NWC ($000s) | Increase in NWC ($000s) |
|---|---:|---:|
| 1 | 2,100 | 2,100 |
| 2 | 2,363 | 263 |
| 3 | 2,126 | (237) |
| 4 | 765 | (1,361) |
| 5 | 0 | (765) |

Interpretation:

- years 1–2 require additional working capital;
- years 3–5 release working capital;
- the final release becomes a positive project cash flow.

> [!WARNING] Important Distinction
> **NWC level ≠ cash-flow adjustment.**
>
> FCF uses:
>
> \[
> \Delta NWC
> \]
>
> not the entire NWC balance every year.

---

# 7. Depreciation Tax Shield

Starting from:

\[
FCF
=
(Revenue-Costs-Depreciation)(1-t_c)
+
Depreciation
-
CapEx
-
\Delta NWC
\]

expand:

\[
FCF
=
(Revenue-Costs)(1-t_c)
-
Depreciation(1-t_c)
+
Depreciation
-
CapEx
-
\Delta NWC
\]

so:

\[
\boxed{
FCF
=
(Revenue-Costs)(1-t_c)
-
CapEx
-
\Delta NWC
+
t_c\times Depreciation
}
\]

The final term:

\[
\boxed{
t_c\times Depreciation
}
\]

is the **depreciation tax shield**.

It is the tax saving created because depreciation is deductible.

Thus depreciation affects cash flow only through:

\[
Taxes\ saved
=
Depreciation\times t_c
\]

> [!IMPORTANT] Core Insight
> Depreciation itself is non-cash, but **depreciation reduces tax**, and tax is cash.

---

# 8. HomeNet Free Cash Flow and NPV

The textbook's HomeNet base-case FCFs (in \$000s) are:

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| FCF | (16,500) | 5,100 | 7,200 | 7,200 | 7,200 | 2,700 |

Project cost of capital:

\[
r=12\%
\]

Discount factors are approximately:

| Year | Discount Factor |
|---|---:|
| 0 | 1.000 |
| 1 | 0.893 |
| 2 | 0.797 |
| 3 | 0.712 |
| 4 | 0.636 |
| 5 | 0.567 |

Present values of FCFs:

\[
-16{,}500,\ 4{,}554,\ 5{,}740,\ 5{,}125,\ 4{,}576,\ 1{,}532
\]

Therefore:

\[
NPV
=
-16{,}500
+4{,}554
+5{,}740
+5{,}125
+4{,}576
+1{,}532
\]

\[
\boxed{
NPV
=
\$5.027\text{ million}
}
\]

Decision:

\[
NPV>0
\Rightarrow
\text{undertake HomeNet}
\]

Economic interpretation:

> given the cash-flow assumptions and a 12% project cost of capital, HomeNet creates about \$5.0 million of value.

---

# 9. Project Cost of Capital

To value project FCF:

\[
PV(FCF_t)
=
\frac{FCF_t}{(1+r)^t}
\]

The discount rate \(r\) is the project's **cost of capital**:

> expected return investors could earn on alternative securities with comparable risk and horizon.

This means the relevant discount rate depends on **project risk**, not merely on the identity of the company.

For HomeNet, managers assume the project has risk comparable to other projects in the relevant division and use:

\[
r=12\%
\]

> [!INFO] CF4 Connection
> Chapter 8 uses project cost of capital as an input; detailed estimation of cost of capital is developed elsewhere. For CF4, connect this directly with [[3.3 Capital Budgeting and Cost of Capital]].

---

# 10. 8.3 Choosing Among Alternatives

When investment opportunities are mutually exclusive:

\[
\boxed{
Choose\ the\ alternative\ with\ the\ highest\ NPV
}
\]

But Chapter 8 adds a useful implementation insight.

If two alternatives share many identical cash flows, we do not need to model every common component repeatedly.

Instead:

> include only the free-cash-flow components that differ among alternatives.

Conceptually:

\[
\Delta FCF_t
=
FCF_{A,t}
-
FCF_{B,t}
\]

Then compare the value of the difference.

This is the capital-budgeting version of **incremental analysis**.

If a cost is identical under both alternatives:

\[
\Delta Cost=0
\]

and it cannot affect the choice.

---

# 11. 8.4 Further Adjustments to Free Cash Flow

## 11.1 Tax Depreciation Matters, Not Book Depreciation

Companies may report one depreciation schedule for accounting purposes and another for tax purposes.

For cash-flow valuation, what matters is:

> **tax depreciation**, because only the tax deduction changes cash taxes.

Therefore the depreciation tax shield is based on the depreciation actually deductible for tax purposes.

---

## 11.2 Accelerated Depreciation

If total depreciation deductions are the same but one tax schedule permits deductions earlier, those earlier tax shields have greater present value.

Because:

\[
PV(\text{earlier tax shield})
>
PV(\text{same tax shield later})
\]

the textbook states that firms should generally use the most accelerated depreciation schedule allowable for tax purposes.

This does not create additional total nominal depreciation.

It changes the **timing** of the tax benefit.

---

## 11.3 Straight-Line Depreciation

Under straight-line depreciation:

\[
\boxed{
Annual\ Depreciation
=
\frac{Depreciable\ Basis}{Useful\ Life}
}
\]

when residual-value assumptions are handled according to the relevant tax/accounting convention.

The important capital-budgeting lesson is not the bookkeeping method itself, but its impact on:

\[
Depreciation
\rightarrow
Taxable\ income
\rightarrow
Taxes
\rightarrow
FCF
\]

---

## 11.4 MACRS

The chapter discusses the U.S. **Modified Accelerated Cost Recovery System (MACRS)** as an example of tax depreciation.

[TEXTBOOK CONTEXT]

Specific MACRS classes and percentages are U.S. tax-system details. The transferable lesson for CF4 is:

> accelerated tax depreciation brings tax deductions forward and therefore can increase project NPV through earlier depreciation tax shields.

---

# 12. Asset Disposal and After-Tax Salvage Value

When a project ends, equipment may be sold.

The cash flow included in project valuation is not necessarily the gross sale price because disposal may create tax.

If:

- sale price = \(S\);
- book value at sale = \(BV\);
- tax rate = \(t_c\);

taxable gain is:

\[
S-BV
\]

and tax is:

\[
t_c(S-BV)
\]

Thus after-tax sale proceeds are:

\[
\boxed{
AfterTax\ Salvage
=
S-t_c(S-BV)
}
\]

This formula also handles sale below book value.

If:

\[
S<BV
\]

then:

\[
S-BV<0
\]

creating a tax loss and therefore a tax saving, assuming the loss can be used.

> [!WARNING] Important Distinction
> **Market/sale value ≠ book value.**
>
> Book value matters because it determines the taxable gain or loss on disposal; the actual cash received is the sale price.

---

# 13. Terminal / Continuation Value

A detailed forecast cannot always be extended forever.

If the project continues beyond the explicit forecast horizon, the model may include a **terminal value** or **continuation value**.

Definition:

> the value at the forecast horizon of all project cash flows that occur after that horizon.

Conceptually at date \(T\):

\[
Terminal\ Value_T
=
PV_T(FCF_{T+1},FCF_{T+2},\ldots)
\]

Then today's value is:

\[
PV_0(Terminal\ Value)
=
\frac{Terminal\ Value_T}{(1+r)^T}
\]

The terminal value is not an arbitrary accounting plug.

It must represent:

> **the present value of future economic cash flows beyond the explicit forecast period.**

---

# 14. Tax Loss Carryforwards and Carrybacks

The earlier simple tax treatment assumes project losses can immediately offset other taxable income.

But if the firm cannot use a tax loss immediately, the tax benefit may be delayed.

Textbook discusses tax loss carryforward/carryback rules in this context.

Economic lesson:

```text
Tax loss today
↓
Can firm use it today?
├── Yes → immediate tax saving
└── No  → benefit deferred
          ↓
          lower PV
```

Thus the timing of tax deductibility matters.

[TEXTBOOK CONTEXT]

Specific legal carryforward/carryback rules depend on the tax regime and time period described in the textbook; the core capital-budgeting principle is to forecast the **actual timing of usable tax effects** rather than assume an immediate tax benefit automatically.

---

# 15. 8.5 Analyzing the Project

A positive base-case NPV is not the end of the analysis.

Forecasts rely on assumptions about:

- price;
- quantity;
- growth;
- unit cost;
- fixed cost;
- initial investment;
- working capital;
- other operating inputs.

Managers therefore need to know:

> How fragile is the NPV?

Chapter 8 introduces three related tools:

```text
Break-even analysis
→ what value makes NPV = 0?

Sensitivity analysis
→ change one input at a time

Scenario analysis
→ change several linked inputs together
```

---

# 16. Break-Even Analysis

## 16.1 Definition

**Break-even analysis** computes the level of a parameter at which:

\[
\boxed{
NPV=0
}
\]

Examples:

- break-even selling price;
- break-even unit sales;
- break-even production cost;
- break-even development cost.

Suppose base-case NPV is positive.

The break-even value tells management:

> how far the underlying assumption can deteriorate before the project stops creating value.

---

## 16.2 NPV Break-Even vs Accounting Break-Even

The chapter also distinguishes an accounting-style **EBIT break-even** from value break-even.

EBIT break-even asks for a parameter that makes:

\[
EBIT=0
\]

But project acceptability depends on:

\[
NPV
\]

not simply EBIT.

A project can have:

\[
EBIT>0
\]

yet:

\[
NPV<0
\]

because positive accounting operating income does not guarantee that the project earns its required return on invested capital.

> [!WARNING] Important Distinction
> **Accounting break-even ≠ economic break-even.**
>
> CF4 capital-budgeting decisions should ultimately be interpreted using value / cash-flow logic.

---

# 17. Sensitivity Analysis

## 17.1 Definition

**Sensitivity analysis** shows how NPV changes when one underlying assumption is changed while other assumptions remain fixed.

Process:

```text
Base-case model
↓
Select one variable
↓
Change variable
↓
Recompute NPV
↓
Repeat
```

Typical variables:

- sales price;
- units sold;
- manufacturing cost;
- development expense;
- working-capital assumption.

---

## 17.2 Why It Matters

Sensitivity analysis tells the manager which assumptions are **value drivers**.

Suppose:

- a 10% change in price changes NPV dramatically;
- a 10% change in overhead barely changes NPV.

Then forecast accuracy for price is much more important.

This can guide:

- further research;
- due diligence;
- risk management;
- managerial attention.

---

## 17.3 Interpretation

Sensitivity analysis is not a probability model.

It does **not** tell us how likely a particular value is.

It tells us:

> if this assumption changes, how much does NPV respond?

So it is a **conditional response analysis**.

---

# 18. Scenario Analysis

## 18.1 Definition

**Scenario analysis** changes multiple project parameters simultaneously.

This is useful because real business variables are often related.

For example:

```text
Lower price
→ may increase units sold

Higher marketing spending
→ may increase volume

Economic downturn
→ may lower price and quantity simultaneously
```

One-at-a-time sensitivity cannot represent these joint movements well.

---

## 18.2 HomeNet Pricing Scenarios

Textbook compares several price-volume strategies.

| Strategy | Sale Price ($/unit) | Expected Units Sold (000s) | NPV ($000s) |
|---|---:|---:|---:|
| Current strategy | 260 | 100 | 5,027 |
| Price reduction | 245 | 110 | 4,582 |
| Price increase | 275 | 90 | 4,937 |

The current strategy has the highest NPV among these alternatives.

The accompanying figure shows combinations of:

- annual units sold;
- price per unit;

that produce approximately the same:

\[
NPV=\$5.0\text{ million}
\]

Combinations above the equal-NPV curve produce higher value.

Lesson:

> price and volume should not necessarily be analyzed independently because changes in one may alter the other.

---

# 19. Break-Even, Sensitivity, and Scenario: One Comparison

| Tool | Main Question | Inputs Changed | Output |
|---|---|---|---|
| Break-even analysis | “How bad can this parameter become before NPV = 0?” | Usually one parameter solved endogenously | Threshold |
| Sensitivity analysis | “How much does NPV change if this assumption changes?” | One at a time | NPV responsiveness |
| Scenario analysis | “What happens under a coherent alternative business environment?” | Multiple simultaneously | Scenario-specific NPV |

> [!IMPORTANT] Core Relationship
> These methods do not replace NPV.
>
> They analyze the **uncertainty around NPV**.

---

# 20. The Complete Capital-Budgeting Workflow

Chapter 8 can be condensed into this sequence:

```text
1. Define the project
        ↓
2. Forecast incremental revenues and costs
        ↓
3. Include opportunity costs and externalities
        ↓
4. Exclude sunk costs and non-incremental overhead
        ↓
5. Compute EBIT
        ↓
6. Apply marginal corporate taxes
        ↓
7. Obtain unlevered net income
        ↓
8. Add back depreciation
        ↓
9. Subtract CapEx
        ↓
10. Subtract ΔNWC
        ↓
11. Add terminal / after-tax salvage effects
        ↓
12. Obtain project FCF
        ↓
13. Discount at project cost of capital
        ↓
14. Compute NPV
        ↓
15. Analyze break-even / sensitivity / scenarios
        ↓
16. Accept if value-creating
```

This is the central workflow to retain from the chapter.

---

# 21. Core Formula Set

## 21.1 EBIT

\[
\boxed{
EBIT
=
Revenue
-
Costs
-
Depreciation
}
\]

---

## 21.2 Incremental Income Tax

\[
\boxed{
Income\ Tax
=
EBIT\times t_c
}
\]

---

## 21.3 Unlevered Net Income

\[
\boxed{
Unlevered\ Net\ Income
=
EBIT(1-t_c)
}
\]

or:

\[
\boxed{
Unlevered\ Net\ Income
=
(Revenue-Costs-Depreciation)(1-t_c)
}
\]

---

## 21.4 Net Working Capital

\[
\boxed{
NWC
=
Cash
+
Inventory
+
Receivables
-
Payables
}
\]

---

## 21.5 Free Cash Flow

\[
\boxed{
FCF
=
Unlevered\ Net\ Income
+
Depreciation
-
CapEx
-
\Delta NWC
}
\]

Equivalent:

\[
\boxed{
FCF
=
(Revenue-Costs-Depreciation)(1-t_c)
+
Depreciation
-
CapEx
-
\Delta NWC
}
\]

---

## 21.6 FCF Showing the Depreciation Tax Shield

\[
\boxed{
FCF
=
(Revenue-Costs)(1-t_c)
-
CapEx
-
\Delta NWC
+
t_c(Depreciation)
}
\]

---

## 21.7 Present Value of Project FCF

\[
\boxed{
PV(FCF_t)
=
\frac{FCF_t}{(1+r)^t}
}
\]

---

## 21.8 NPV

\[
\boxed{
NPV
=
\sum_{t=0}^{N}
\frac{FCF_t}{(1+r)^t}
}
\]

---

## 21.9 After-Tax Salvage Value

\[
\boxed{
AfterTax\ Salvage
=
Sale\ Price
-
t_c(Sale\ Price-Book\ Value)
}
\]

---

# 22. Important Distinctions

> [!WARNING] Important Distinction
> **Incremental revenue ≠ total project sales**
>
> Cannibalized existing sales may need to be deducted.

> [!WARNING] Important Distinction
> **Sunk cost ≠ relevant project cost**
>
> Past unavoidable spending does not change with today's decision.

> [!WARNING] Important Distinction
> **Owned asset ≠ free resource**
>
> Existing property has an opportunity cost if it could be sold or used elsewhere.

> [!WARNING] Important Distinction
> **Allocated overhead ≠ incremental overhead**
>
> Only cash costs caused by the project belong in project FCF.

> [!WARNING] Important Distinction
> **Net income ≠ free cash flow**
>
> FCF requires adjustments for depreciation, CapEx, and working capital.

> [!WARNING] Important Distinction
> **Depreciation ≠ cash outflow**
>
> Its cash impact is the depreciation tax shield.

> [!WARNING] Important Distinction
> **CapEx ≠ depreciation**
>
> CapEx follows actual cash spending; depreciation follows accounting/tax allocation.

> [!WARNING] Important Distinction
> **NWC ≠ \(\Delta NWC\)**
>
> Project FCF subtracts the change in working capital, not the balance itself every period.

> [!WARNING] Important Distinction
> **Interest expense ≠ operating project cash flow**
>
> Chapter 8 values the project unlevered and separates financing.

> [!WARNING] Important Distinction
> **Book value ≠ sale value**
>
> The difference matters for tax on disposal.

> [!WARNING] Important Distinction
> **EBIT break-even ≠ NPV break-even**
>
> Accounting profit of zero and economic value of zero are different thresholds.

> [!WARNING] Important Distinction
> **Sensitivity analysis ≠ scenario analysis**
>
> Sensitivity changes one assumption; scenario analysis changes multiple related assumptions.

---

# 23. Chapter Synthesis

Chapter 8 is best understood as a lesson in **economic causality**.

A project should not be evaluated by asking what accounting numbers can be assigned to it. It should be evaluated by asking:

> **What cash flows change for the firm because this decision is taken?**

That single question explains nearly the entire chapter.

Opportunity costs enter because using a resource destroys another available benefit. Cannibalization enters because new business may displace existing business. Sunk costs disappear because current action cannot change the past. Allocated overhead disappears unless total corporate cash spending actually changes.

Accounting earnings are then useful as a structured forecast—but only as an intermediate step. Depreciation demonstrates the gap between accounting and cash: it lowers taxable income without being a cash payment. Capital expenditure shows the opposite timing issue: cash leaves when the asset is purchased even though its accounting expense is spread over future years. Working capital captures another hidden use of cash as operations require inventory and receivables before cash is recovered from customers.

The result is project free cash flow:

\[
FCF
=
Unlevered\ Net\ Income
+
Depreciation
-
CapEx
-
\Delta NWC
\]

The word **unlevered** matters because investment and financing are initially separated. Project value comes from its operating cash flows discounted at the return required for equivalent-risk investments.

Further adjustments—accelerated tax depreciation, after-tax salvage, terminal value, and timing of tax losses—do not change the underlying framework. They simply ensure that every economically relevant cash consequence appears at the correct date.

Finally, the chapter acknowledges that every project model is uncertain. A single positive base-case NPV can hide fragile assumptions. Break-even analysis identifies the boundary of value creation, sensitivity analysis identifies which assumptions matter most, and scenario analysis recognizes that business variables often move together.

The chapter's full mental model is therefore:

```text
Accounting forecast
      ↓
Strip away non-incremental items
      ↓
Translate earnings into actual cash
      ↓
Place every cash flow at the correct date
      ↓
Discount for risk and time
      ↓
NPV
      ↓
Stress the assumptions
      ↓
Capital-budgeting decision
```

---

# 24. Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Capital budgeting | Process of evaluating investment opportunities | Converts strategy into investment decisions | [[3.3 Capital Budgeting and Cost of Capital]] |
| Incremental earnings | Change in earnings caused by project | Prevents inclusion of irrelevant amounts | [[3.3 Capital Budgeting and Cost of Capital]] |
| Incremental cash flow | With-project minus without-project cash flow | Core basis of project valuation | [[3.3 Capital Budgeting and Cost of Capital]] |
| Opportunity cost | Value of best alternative use forgone | Existing assets are not economically free | [[3.3 Capital Budgeting and Cost of Capital]] |
| Project externality | Effect of project on other firm cash flows | Captures indirect project consequences | [[3.3 Capital Budgeting and Cost of Capital]] |
| Cannibalization | New project reduces existing-product cash flow | Must be deducted if incremental | [[3.3 Capital Budgeting and Cost of Capital]] |
| Sunk cost | Past cost unaffected by current decision | Exclude from NPV | [[3.3 Capital Budgeting and Cost of Capital]] |
| Unlevered net income | EBIT after tax, excluding interest | Separates investment from financing | [[3.3 Capital Budgeting and Cost of Capital]] |
| NWC | Operating cash + inventory + receivables − payables | Measures operating cash tied up | [[3.3 Capital Budgeting and Cost of Capital]] |
| Free cash flow | Cash generated by project after investment needs | Input to NPV | [[3.3 Capital Budgeting and Cost of Capital]] |
| Depreciation tax shield | Tax saving from depreciation deduction | Depreciation's true cash-flow effect | [[3.3 Capital Budgeting and Cost of Capital]] |
| Project cost of capital | Return on comparable-risk alternatives | Correct discount rate for project FCF | [[3.3 Capital Budgeting and Cost of Capital]] |
| After-tax salvage | Disposal proceeds net of tax effect | Correct terminal asset cash flow | [[3.3 Capital Budgeting and Cost of Capital]] |
| Terminal value | PV at horizon of later project cash flows | Captures value beyond explicit forecast | [[3.3 Capital Budgeting and Cost of Capital]] |
| Break-even analysis | Parameter value giving NPV = 0 | Shows margin before value destruction | [[3.3 Capital Budgeting and Cost of Capital]] |
| Sensitivity analysis | Change one assumption at a time | Identifies key value drivers | [[3.3 Capital Budgeting and Cost of Capital]] |
| Scenario analysis | Change multiple assumptions jointly | Captures coherent alternative outcomes | [[3.3 Capital Budgeting and Cost of Capital]] |

---

# 25. Compression Notes

## Retained in Detail

- capital-budgeting purpose;
- incremental earnings principle;
- HomeNet framework;
- revenue and cost forecasting;
- separation of investment and financing;
- unlevered net income;
- marginal tax rate;
- tax savings from project losses;
- opportunity costs;
- project externalities and cannibalization;
- sunk costs;
- overhead treatment;
- conversion from earnings to FCF;
- CapEx vs depreciation;
- NWC and \(\Delta NWC\);
- changing-sales NWC example;
- depreciation tax shield;
- HomeNet FCF and NPV;
- project cost of capital;
- mutually exclusive alternative logic;
- tax depreciation and accelerated depreciation;
- after-tax salvage;
- terminal value;
- tax-loss timing;
- break-even, sensitivity, and scenario analysis;
- HomeNet price-volume scenario example.

## Condensed

- McDonald's opening story;
- full HomeNet line-by-line income statement;
- repetitive spreadsheet mechanics;
- repeated numerical examples teaching the same incremental-cash-flow rule;
- detailed MACRS tables;
- extensive Excel instructions;
- practitioner interview wording;
- repeated concept-check questions.

## Omitted / Beyond CF4

- MyFinanceLab instructions;
- Excel Goal Seek/Data Table mechanics;
- end-of-chapter problem sets;
- Further Reading bibliography;
- highly U.S.-specific tax-table detail beyond the capital-budgeting principle it illustrates.

---

# 26. CF4 Connection Map

```text
Chapter 3
Valuation Principle + NPV
        ↓
Chapter 7
Which investment rule?
        ↓
Chapter 8
What cash flows belong in the NPV?
        ↓
[[3.3 Capital Budgeting and Cost of Capital]]
        ↓
Incremental project FCF
+
appropriate project discount rate
        ↓
[[3.4 Investment Return Methods]]
        ↓
NPV-based accept / reject / compare
```

Cash-flow construction:

```text
Revenue
- Incremental Costs
- Depreciation
= EBIT
        ↓
× (1 - marginal tax rate)
        ↓
Unlevered Net Income
+ Depreciation
- CapEx
- ΔNWC
        ↓
Free Cash Flow
        ↓
Discount at project cost of capital
        ↓
NPV
```

Relevance filter:

```text
Potential item
      ↓
Does it change because of project?
      ↓
Yes → include
No  → exclude
```

---

# 27. Quick Reading Review

- Capital budgeting adalah proses memilih investment opportunities.
- Project cash flow harus **incremental**: with project minus without project.
- Gross project sales belum tentu incremental revenue.
- Opportunity cost harus dimasukkan walaupun tidak ada explicit cash purchase today.
- Cannibalization adalah negative project externality dan harus diperhitungkan.
- Positive externalities juga harus dimasukkan.
- Sunk costs dikeluarkan.
- Allocated overhead hanya relevan jika total cash overhead benar-benar berubah.
- Project valuation initially ignores interest expense.
- Gunakan **unlevered net income**:
  \[
  EBIT(1-t_c)
  \]
- Gunakan marginal, bukan average, tax rate untuk incremental tax effects.
- Net income bukan free cash flow.
- Depreciation adalah non-cash expense dan ditambahkan kembali.
- CapEx adalah actual investment cash outflow.
- Increase in NWC menyerap cash.
- Decrease in NWC releases cash.
- NWC menurut chapter:
  \[
  Cash+Inventory+Receivables-Payables
  \]
- Basic project FCF:
  \[
  FCF=UNI+Dep-CapEx-\Delta NWC
  \]
- Depreciation's economic benefit is:
  \[
  t_c\times Depreciation
  \]
- Faster tax depreciation generally raises PV of tax shields.
- After-tax salvage depends on sale price versus tax book value.
- Terminal value represents PV of cash flows beyond the forecast horizon.
- Project FCF is discounted at the project's cost of capital.
- HomeNet base-case NPV in the textbook is approximately \$5.027 million at 12%.
- For mutually exclusive alternatives, choose the highest NPV.
- When alternatives share cash flows, focus on the differences.
- Break-even analysis solves for an input where:
  \[
  NPV=0
  \]
- Sensitivity analysis changes one parameter at a time.
- Scenario analysis changes several related parameters simultaneously.
- Accounting break-even and NPV break-even are not the same.
- Core chapter question: **What cash flow changes because we undertake the project?**

---

# 28. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Capital budgeting purpose | Chapter 8 introduction |
| Incremental earnings | §8.1 Forecasting Earnings |
| HomeNet forecast framework | §8.1 |
| Revenue/cost forecast | §8.1 |
| Depreciation in earnings | §8.1 |
| Ignore interest / unlevered income | §8.1 |
| Marginal corporate tax rate | §8.1 |
| Tax effect of project losses | §8.1, Example 8.1 |
| Opportunity cost | §8.1 |
| Project externalities / cannibalization | §8.1 |
| Sunk cost | §8.1 |
| Overhead expenses | §8.1 |
| Earnings → FCF | §8.2 |
| Net working capital | §8.2 |
| NWC changing-sales example | §8.2, Example 8.4 |
| Free cash flow equations | §8.2, Eqs. 8.5–8.6 |
| Depreciation tax shield | §8.2 |
| HomeNet NPV | §8.2, Table 8.5 |
| Project cost of capital | §8.2 |
| Choosing alternatives | §8.3 |
| Tax depreciation / accelerated depreciation | §8.4 |
| MACRS context | §8.4 |
| Salvage value / disposal tax | §8.4 |
| Terminal / continuation value | §8.4 |
| Tax loss timing | §8.4 |
| Break-even analysis | §8.5 |
| Sensitivity analysis | §8.5 |
| Scenario analysis | §8.5 |
| HomeNet price-volume scenarios | §8.5, Table 8.10 / Figure 8.2 |

> [!NOTE] Source Boundary
> Note ini mengikuti **Berk & DeMarzo Chapter 8, Sections 8.1–8.5**, sesuai scope resmi Topik 3 CF4. Detail tax-system seperti MACRS dan carryback/carryforward dipertahankan sebagai `[TEXTBOOK CONTEXT]` hanya sejauh menjelaskan timing cash-flow effects. Materi dari Brigham atau textbook lain tidak ditambahkan ke condensed chapter ini.
