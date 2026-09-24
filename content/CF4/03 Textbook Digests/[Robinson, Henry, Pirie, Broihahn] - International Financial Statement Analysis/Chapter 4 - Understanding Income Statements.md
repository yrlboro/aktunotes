---
type: "condensed-book"
exam: "CF4"
book: "International Financial Statement Analysis"
author: "Elaine Henry; Thomas R. Robinson"
chapter: "4"
chapter_title: "Understanding Income Statements"
cf4_topics: ["1.4", "1.5", "1.6"]
cf4_relevance: "High"
source_scope: "Robinson et al. Chapter 4 — Sections 1–8 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Robinson, IncomeStatement, RevenueRecognition, EPS, ComprehensiveIncome]
date_created: "2026-08-24"
status: "study-note"
---

# Robinson — Chapter 4: Understanding Income Statements

> [!ABSTRACT] Chapter in One View
> Chapter ini menjelaskan bagaimana **income statement** menerjemahkan business activity selama suatu periode menjadi revenue, expenses, gains/losses, net income, dan earnings per share (EPS).  
> Basic relationship-nya sederhana:
>
> $$
> Revenue - Expenses = Net\ Income
> $$
>
> tetapi interpretation-nya tidak sederhana karena reported income sangat bergantung pada **timing recognition, classification, estimates, dan accounting choices**.  
> Robinson membahas struktur income statement, single-step versus multi-step presentation, operating versus non-operating components, serta classification of expenses by nature atau function.  
> Revenue recognition menjadi bagian terbesar: revenue diakui ketika earned, bukan semata ketika cash diterima; special applications meliputi long-term contracts, installment sales, cost recovery, barter transactions, serta gross-versus-net reporting.  
> Expense recognition menggunakan matching terhadap revenue, period recognition, atau allocation sepanjang expected benefit; depreciation, inventory costing, bad-debt estimates, warranties, useful lives, dan salvage values dapat mengubah reported income.  
> Analyst kemudian harus memisahkan **continuing earnings** dari items yang tidak berulang seperti discontinued operations, extraordinary items dalam historical US GAAP context, unusual/infrequent items, dan accounting changes.  
> EPS mengubah total earnings menjadi earnings attributable per common share. Simple capital structure menggunakan basic EPS; complex capital structure membutuhkan diluted EPS untuk menangkap potential dilution dari convertibles, options, atau warrants.  
> Common-size income statements dan margins membantu comparison across time dan firms, tetapi accounting policies dan business models harus dipahami sebelum menyimpulkan bahwa margin tinggi/rendah otomatis baik/buruk.  
> Chapter ditutup dengan comprehensive income:
>
> $$
> Comprehensive\ Income = Net\ Income + Other\ Comprehensive\ Income
> $$
>
> yang menunjukkan bahwa beberapa changes in equity from non-owner sources berada di luar net income.  
> Untuk CF4, seluruh Chapter 4 Sections 1–8 termasuk dalam scope resmi Robinson dan sangat relevan bagi [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]], dan [[1.6 Financial Ratios and Interpretation]].

## 1. Why This Chapter Exists

Income statement sering menjadi statement yang paling banyak mendapat perhatian dari:

- investors;
- analysts;
- management;
- financial press.

Alasannya mudah dipahami. Banyak pertanyaan valuation dimulai dengan earnings:

- apakah perusahaan profitable?
- apakah earnings tumbuh?
- apakah growth tersebut sustainable?
- berapa profit per share?
- apakah margins membaik?
- apakah reported earnings berasal dari core operations?

Tetapi satu angka net income tidak menjawab semua pertanyaan tersebut.

Misalnya dua perusahaan sama-sama melaporkan net income 100. Perusahaan A memperoleh sebagian besar income dari recurring operations. Perusahaan B memperoleh 70 dari penjualan asset yang tidak akan berulang.

Secara historical accounting:

$$
NI_A = NI_B = 100
$$

Tetapi untuk forecast future earnings, economic meaning-nya sangat berbeda.

Chapter ini ada karena analyst perlu memahami bukan hanya:

> **“Berapa net income?”**

tetapi juga:

> **“Bagaimana net income itu terbentuk?”**

Mental model chapter:

```text
Business activity
↓
Revenue recognition
+
Expense recognition
+
Gains / losses
+
Recurring / non-recurring classification
↓
Operating income / pretax income
↓
Tax
↓
Net income
↓
EPS
↓
Comprehensive income
↓
Analysis & forecasting
```

> [!INFO] CF4 Connection
> `[CORE CF4]` Silabus Topik 1 secara eksplisit memasukkan **Robinson Chapter 4.1–4.8**. Chapter ini adalah salah satu sumber utama untuk memahami struktur income statement, revenue/expense recognition, profitability interpretation, EPS, dan comprehensive income.

## 2. Chapter Map

```text
Chapter 4 — Understanding Income Statements
├── 1. Introduction
├── 2. Components and Format of the Income Statement
│   ├── Revenue
│   ├── Expenses
│   ├── Gains and losses
│   ├── Single-step vs multi-step
│   └── Classification by nature vs function
├── 3. Revenue Recognition
│   ├── General principles
│   ├── Long-term contracts
│   ├── Installment sales / cost recovery
│   ├── Barter transactions
│   └── Gross vs net reporting
├── 4. Expense Recognition
│   ├── Matching
│   ├── Period costs
│   ├── Allocation over useful life
│   └── Estimates and accounting choices
├── 5. Non-Recurring Items and Non-Operating Items
│   ├── Discontinued operations
│   ├── Extraordinary items
│   ├── Unusual / infrequent items
│   ├── Accounting changes
│   └── Operating vs non-operating
├── 6. Earnings per Share
│   ├── Simple vs complex capital structure
│   ├── Basic EPS
│   ├── Diluted EPS
│   ├── Convertible securities
│   ├── Options / warrants
│   └── Dilutive vs antidilutive
├── 7. Analysis of Income Statements
│   ├── Common-size analysis
│   ├── Net profit margin
│   └── Gross profit margin
└── 8. Comprehensive Income
    ├── Net income vs comprehensive income
    └── Other comprehensive income
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 1. Introduction | High | [[1.4 Company Account Structure]] |
| 2. Components & Format | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 3. Revenue Recognition | Very High | [[1.3 Accounting Concepts and Sustainability]], [[1.5 Financial Statements Construction]] |
| 4. Expense Recognition | Very High | [[1.3 Accounting Concepts and Sustainability]], [[1.5 Financial Statements Construction]] |
| 5. Non-Recurring / Non-Operating | High | [[1.6 Financial Ratios and Interpretation]] |
| 6. Earnings per Share | High | [[1.6 Financial Ratios and Interpretation]] |
| 7. Income Statement Analysis | Very High | [[1.6 Financial Ratios and Interpretation]] |
| 8. Comprehensive Income | High | [[1.4 Company Account Structure]] |

## 3. Introduction — What the Income Statement Measures

Income statement presents **financial results of business activities over a period of time**.

Basic equation:

$$
Revenue - Expenses = Net\ Income
$$

Jika gains dan losses dimasukkan secara eksplisit, conceptual relationship menjadi:

$$
Net\ Income
=
Revenue
+
Gains
-
Expenses
-
Losses
$$

Income statement juga dapat disebut:

- statement of operations;
- statement of earnings;
- profit and loss statement (P&L).

Under IFRS, income statement dapat disajikan:

1. sebagai separate income statement diikuti statement of comprehensive income; atau
2. sebagai bagian dari single statement of comprehensive income.

Income statement sangat penting bagi equity analyst karena:

- earnings menjadi input valuation;
- growth in earnings sering terkait market valuation;
- margins memberi insight ke operating performance;
- EPS menjadi basis price/earnings ratio.

Namun chapter terus mengingatkan bahwa:

> **reported earnings adalah hasil dari recognition dan measurement rules, bukan pure cash measure.**

## 4. Components and Format of the Income Statement

Typical components dapat mencakup:

- revenue / sales;
- cost of sales / cost of goods sold;
- gross profit;
- selling, general, and administrative expenses;
- other operating expenses;
- operating income;
- non-operating income / expenses;
- interest;
- gains / losses;
- income before tax;
- income tax;
- continuing operations;
- non-recurring items;
- net income;
- EPS.

### 4.1 Revenue

Revenue adalah income dari ordinary business activities.

Examples:

- sales of goods;
- service revenue;
- interest income untuk business tertentu;
- fee income.

Revenue sering menjadi starting point analysis karena menunjukkan scale of activity.

Tetapi sales growth sendiri belum berarti profit growth:

$$
Revenue \uparrow
\not\Rightarrow
Net\ Income \uparrow
$$

jika cost meningkat lebih cepat.

### 4.2 Expenses

Expenses adalah economic resources consumed untuk menghasilkan revenue atau menjalankan business.

Common categories:

- cost of goods sold;
- employee costs;
- depreciation;
- selling costs;
- administration;
- interest;
- tax.

### 4.3 Gains and Losses

Gains/losses berbeda dari ordinary revenue/expense karena biasanya berasal dari peripheral atau incidental transactions.

Example intuition:

- manufacturer menjual finished goods → revenue;
- manufacturer menjual old factory equipment above carrying amount → gain.

Economic effect sama-sama meningkatkan income, tetapi **source** berbeda dan recurrence berbeda.

> [!WARNING] Important Distinction
> **Revenue ≠ gain.**
>
> Revenue biasanya berasal dari ordinary activities. Gain dapat berasal dari disposal atau transaction non-core.

## 5. Single-Step vs Multi-Step Format

### 5.1 Single-Step

Single-step income statement broadly groups:

- all revenues/income;
- all expenses;

kemudian menghitung:

$$
Net\ Income
=
Total\ Revenues
-
Total\ Expenses
$$

Tidak ada explicit subtotal gross profit.

### 5.2 Multi-Step

Multi-step statement menunjukkan intermediate subtotals.

Typical structure:

$$
Gross\ Profit
=
Revenue
-
Cost\ of\ Goods\ Sold
$$

kemudian:

$$
Operating\ Income
=
Gross\ Profit
-
Operating\ Expenses
$$

dan akhirnya:

$$
Net\ Income
=
Income\ Before\ Tax
-
Income\ Tax
$$

Multi-step presentation berguna karena membantu analyst memisahkan:

- gross economics;
- operating performance;
- financing / non-operating effects;
- tax;
- bottom-line profit.

> [!WARNING] Important Distinction
> **Multi-step ≠ more profitable.**
>
> Itu hanya presentation format yang memberikan lebih banyak subtotals.

## 6. Classification of Expenses — Nature vs Function

Expenses dapat dikelompokkan berdasarkan:

### By Nature

Berdasarkan jenis expense:

- depreciation;
- salaries;
- raw materials;
- advertising;
- utilities.

### By Function

Berdasarkan purpose/function:

- cost of sales;
- selling expense;
- administrative expense.

Example:

salary dapat tersebar ke:

- production function;
- selling function;
- administration function.

> [!WARNING] Important Distinction
> **Nature menjawab “expense apa?”**  
> **Function menjawab “expense untuk aktivitas apa?”**

Classification memengaruhi presentation tetapi bukan total expense secara mekanis.

## 7. Revenue Recognition — Why Timing Matters

Revenue tidak selalu recognized ketika cash masuk.

Core accrual principle:

> **Revenue recognized in the period in which it is earned.**

Thus:

```text
Earn now + collect later
→ revenue now, receivable now, cash later

Collect now + earn later
→ cash now, liability now, revenue later
```

Ini mengulang insight Chapter 2 tetapi sekarang diterapkan secara lebih formal pada income statement.

### 7.1 General Recognition Logic

`[TEXTBOOK CONTEXT]` Chapter menggunakan revenue-recognition framework yang berlaku pada periode textbook.

Untuk sale of goods di bawah IFRS context yang dibahas, key ideas termasuk:

- significant risks and rewards transferred;
- seller no longer retains continuing managerial involvement/control;
- revenue measurable reliably;
- collection probable;
- related costs measurable reliably.

Untuk services, revenue dapat diakui by reference to stage of completion jika outcome reliably measurable.

US GAAP context dalam chapter menggambarkan revenue sebagai **realized/realizable and earned**, dengan criteria seperti:

- evidence of arrangement;
- delivery / service rendered;
- price determined or determinable;
- collectability reasonably assured.

> [!WARNING] Important Distinction
> **Delivery alone tidak selalu cukup untuk revenue recognition.**
>
> Consignment adalah example: goods dapat secara fisik berada di retailer tetapi seller belum necessarily earned revenue sampai relevant sale occurs.

## 8. Example — Accrual Revenue vs Cash Collected

Suppose:

- gross sales = 1,000;
- returns = 100;
- cash collected = 800.

Net revenue berdasarkan accrual basis:

$$
Net\ Revenue
=
1{,}000 - 100
=
900
$$

Bukan 800.

Cash collected memengaruhi cash / receivables, bukan amount of revenue earned.

> [!WARNING] Important Distinction
> **Revenue ≠ cash collected.**

## 9. Long-Term Contracts

Long-term projects menimbulkan problem:

> Jika contract berlangsung beberapa tahun, kapan revenue dan profit diakui?

Chapter membahas methods seperti:

- percentage-of-completion;
- completed-contract;
- cost-recovery depending circumstances/framework.

### 9.1 Percentage-of-Completion

Jika outcome contract dapat reliably estimated, revenue dan expense recognized sesuai progress.

Conceptual formula:

$$
Percentage\ Complete
=
\frac{Cost\ Incurred\ to\ Date}
{Estimated\ Total\ Cost}
$$

Jika total contract revenue adalah $10m dan completion 40%:

$$
Cumulative\ Revenue
=
0.40(10m)
=
4m
$$

Current-period revenue adalah cumulative amount minus revenue recognized prior periods.

### Why It Matters

Percentage-of-completion spreads profit over period of economic performance.

It provides earlier recognition but depends heavily on estimates:

- estimated total cost;
- progress;
- probability of completion.

Jika estimates terlalu optimistic, income dapat recognized terlalu early.

### 9.2 Completed Contract

Under the historical framework described, revenue/profit recognition dapat be deferred until contract completion in certain circumstances.

Compared with percentage-of-completion:

```text
Percentage of completion
→ earlier revenue/profit

Completed contract
→ delayed revenue/profit
```

Thus accounting method can materially change period-by-period earnings even when total contract economics ultimately similar.

### 9.3 Analytical Lesson

Analyst comparing two contractors must understand:

- which method;
- progress assumptions;
- cost estimate revisions;
- loss recognition;
- backlog quality.

## 10. Installment Sales and Cost Recovery

Jika collectability uncertain, recognizing full profit immediately may overstate economic certainty.

### 10.1 Installment Method

Profit recognized in proportion to cash collections.

Suppose:

- sales price = 1,000;
- cost = 600;
- gross profit = 400.

Gross profit percentage:

$$
\frac{400}{1{,}000}=40\%
$$

If cash collected is 300:

$$
Recognized\ Profit
=
300(40\%)
=
120
$$

### 10.2 Cost Recovery Method

Jika uncertainty lebih besar, cash receipts first recover cost.

Using same example:

- cost = 600.

Profit recognized only after cumulative cash receipts exceed 600.

This is more conservative regarding timing of profit.

> [!WARNING] Important Distinction
> These methods change **timing** of recognized income, not necessarily ultimate economic contract margin.

## 11. Barter Transactions

Barter transaction occurs when goods/services exchanged without conventional cash settlement.

Why problematic?

Because firms could potentially report large revenue despite little/no net economic change.

Example:

Company A sells advertising to B and simultaneously buys similar advertising from B.

Potential effects:

- reported revenue ↑;
- reported expense ↑;
- net income ≈ unchanged;
- cash flow ≈ unchanged.

If valuation multiples emphasize sales:

$$
Higher\ Reported\ Revenue
\Rightarrow
Potentially\ Higher\ Apparent\ Scale
$$

even without meaningful economic growth.

This is why valuation of barter revenue requires reliable evidence of fair value.

> [!WARNING] Important Distinction
> **Revenue growth can be cosmetically inflated without equivalent growth in profit or cash flow.**

## 12. Gross versus Net Revenue Reporting

Suppose online platform processes a customer purchase of $100 but pays supplier $90.

Two possible presentations:

### Gross

$$
Revenue=100
$$

$$
COGS=90
$$

$$
Gross\ Profit=10
$$

### Net

$$
Revenue=10
$$

No separate COGS for the underlying product in simplified presentation.

Net income may be identical, but reported revenue differs by 10×.

### Principal vs Agent Logic

Historical source discusses indicators supporting gross presentation where company:

- is primary obligor;
- bears inventory risk;
- bears credit risk;
- has supplier choice;
- has pricing latitude.

If company essentially acts as agent, net reporting is more appropriate.

### Why Analysts Care

Gross-versus-net changes:

- revenue scale;
- growth rates;
- gross margin;
- turnover ratios;
- valuation multiples based on sales.

Yet it may not change net income.

> [!WARNING] Important Distinction
> **Same economics can produce very different reported revenue depending on principal-agent status.**

## 13. Expense Recognition

Revenue timing is only half the income statement problem. Expenses must also be recognized in economically meaningful periods.

Robinson's chapter summarizes three main logics.

### 13.1 Match Expense to Revenue

Some costs directly relate to recognized revenue.

Example:

inventory sold:

$$
Revenue
\leftrightarrow
COGS
$$

When goods are sold, their cost becomes expense.

### 13.2 Recognize as Period Cost

Some expenses are associated with the period rather than a specific revenue unit.

Examples:

- administrative salaries;
- some advertising;
- office costs.

### 13.3 Allocate Across Expected Benefit

If expenditure benefits multiple periods, cost is allocated.

Examples:

- depreciation;
- amortization.

Concept:

$$
Asset\ Cost
\rightarrow
Expense\ Over\ Benefit\ Periods
$$

Not:

$$
Asset\ Purchase
=
Immediate\ Full\ Expense
$$

## 14. Accounting Choices and Estimates Affect Expenses

Expense recognition is not purely mechanical.

Reported income depends on choices/estimates such as:

- depreciation method;
- inventory cost method;
- uncollectible-account estimate;
- warranty estimate;
- useful life;
- salvage value.

If a company assumes a longer useful life:

\[
Annual\ Depreciation \downarrow
\]

thus, other things equal:

\[
Current\ Profit \uparrow
\]

This does not necessarily mean economic performance improved.

### Analyst's Task

For comparability:

1. identify method differences;
2. adjust statements when practical;
3. if adjustment impossible, assess whether policies are more or less conservative;
4. understand effect on ratios and profitability.

## 15. Non-Recurring Items and Forecasting Earnings

Historical net income contains items with different likelihood of recurrence.

For forecasting:

```text
Historical Net Income
↓
Separate recurring vs non-recurring
↓
Assess sustainable earnings
↓
Forecast
```

This is one of the most important analytical ideas in the chapter.

## 16. Discontinued Operations

When a company disposes of, or plans to dispose of, a separable component and will no longer continue involvement according to applicable criteria, effect is presented separately as **discontinued operations**.

Why separate?

Because future company will not contain that operation.

If cereal division produced income 50 this year but has been sold:

> blindly forecasting that 50 forward would overstate future earnings.

Thus analyst often removes discontinued-operation effects when estimating sustainable future performance.

## 17. Extraordinary Items

`[TEXTBOOK CONTEXT]`

The chapter reflects historical accounting rules at the time of publication.

- IFRS prohibited classification as “extraordinary”.
- Historical US GAAP discussed extraordinary items as both **unusual in nature** and **infrequent in occurrence**, presented separately and net of tax.

This category should be understood as **textbook-period context**, not silently updated.

Core analytical lesson survives:

> identify items unlikely to recur and do not mechanically extrapolate them.

## 18. Unusual / Infrequent Items

Not every unusual item qualifies for special formal category.

Examples may include:

- restructuring charges;
- unusual gains;
- asset sale gains/losses;
- impairment-like items;
- litigation-related effects depending facts.

Analyst must assess:

- truly one-off?
- recurring every few years?
- normal consequence of business model?
- management labels "non-recurring" despite repeated occurrence?

> [!WARNING] Important Distinction
> **Management calling an item “one-time” does not make it economically non-recurring.**

## 19. Accounting Changes

Changes in accounting policy/standard/estimate can alter reported trends without identical change in underlying economics.

Analyst should determine:

- whether historical periods restated;
- whether comparability preserved;
- whether effect is recurring;
- whether change alters forecast inputs.

## 20. Operating vs Non-Operating Income

Operating income is tied to core business operations.

Non-operating items can include:

- interest;
- investment income;
- gains/losses unrelated to core operations;
- other peripheral items.

For many non-financial companies:

$$
Operating\ Margin
=
\frac{Operating\ Income}{Revenue}
$$

gives cleaner picture of operating performance than bottom-line net income.

But classification depends on business model.

For bank, interest is core operating economics; for manufacturer, interest expense is commonly financing/non-operating.

> [!WARNING] Important Distinction
> **Operating vs non-operating depends partly on nature of the business.**

## 21. Earnings per Share

EPS answers:

> How much of reported earnings is attributable per common/ordinary share?

Under the standards context discussed, companies present EPS for relevant earnings measures.

### 21.1 Simple vs Complex Capital Structure

**Simple capital structure**:

- no potentially dilutive securities.

**Complex capital structure**:

includes instruments potentially convertible into common shares, such as:

- convertible bonds;
- convertible preferred stock;
- employee stock options;
- warrants.

Potential conversion can increase share count and reduce earnings per share.

## 22. Basic EPS

Basic formula:

$$
Basic\ EPS
=
\frac{Net\ Income - Preferred\ Dividends}
{Weighted\ Average\ Common\ Shares\ Outstanding}
$$

Numerator is **income available to common shareholders**.

### Why Preferred Dividends Are Deducted

Preferred shareholders have priority claim.

Common shareholders receive residual earnings after preferred dividend claim.

### Why Weighted Average Shares

Shares may be issued/repurchased during year.

Using ending shares would incorrectly treat new shares as if outstanding all year.

Example:

- 1 Jan: 100,000 shares;
- 1 Jul: issue 20,000 shares.

Weighted average:

$$
100{,}000(12/12)+20{,}000(6/12)
=
110{,}000
$$

If net income available to common = 220,000:

$$
Basic\ EPS
=
\frac{220{,}000}{110{,}000}
=
2.00
$$

## 23. Diluted EPS

Diluted EPS answers:

> What would EPS look like if potentially dilutive securities were converted/exercised?

Conceptually:

$$
Diluted\ EPS
=
\frac{Adjusted\ Earnings}
{Adjusted\ Weighted\ Average\ Shares}
$$

If capital structure is simple:

$$
Basic\ EPS = Diluted\ EPS
$$

If dilutive securities exist:

$$
Diluted\ EPS < Basic\ EPS
$$

in normal profitable cases.

## 24. Convertible Securities — If-Converted Method

For convertible bonds or preferred stock, assume conversion occurred.

Adjustment:

1. denominator increases by shares that would be issued;
2. numerator adjusts for income effects that would disappear upon conversion.

For convertible debt, interest would no longer be paid. Thus after-tax interest is typically added back to numerator under the textbook method.

Conceptually:

$$
Adjusted\ NI
=
NI
+
Interest(1-T)
$$

and:

$$
Adjusted\ Shares
=
Existing\ Shares
+
Conversion\ Shares
$$

Then:

$$
Diluted\ EPS
=
\frac{Adjusted\ NI}{Adjusted\ Shares}
$$

## 25. Options and Warrants — Treasury Stock Method

Options/warrants can create potential new shares.

Treasury stock method assumes:

1. options exercised;
2. company receives exercise proceeds;
3. proceeds used to repurchase shares at average market price.

Incremental shares:

$$
Incremental\ Shares
=
Shares\ Issued
-
Shares\ Repurchased
$$

Example:

- 10,000 options;
- exercise price = 20;
- average market price = 25.

Cash proceeds:

$$
10{,}000(20)=200{,}000
$$

Shares repurchased:

$$
\frac{200{,}000}{25}=8{,}000
$$

Incremental shares:

$$
10{,}000-8{,}000=2{,}000
$$

Only 2,000 net incremental shares enter diluted denominator.

## 26. Dilutive vs Antidilutive

A security is **dilutive** if including it reduces EPS.

A security is **antidilutive** if including it would increase EPS or reduce loss per share.

Antidilutive instruments are excluded from diluted EPS.

> [!WARNING] Important Distinction
> **Potentially convertible ≠ automatically included.**
>
> It must actually be dilutive.

## 27. Common-Size Income Statement

Vertical common-size income statement expresses each line item as percentage of revenue.

Example:

$$
COGS\%
=
\frac{COGS}{Revenue}
$$

$$
Operating\ Expense\%
=
\frac{Operating\ Expense}{Revenue}
$$

$$
Net\ Profit\ Margin
=
\frac{Net\ Income}{Revenue}
$$

If:

- revenue = 1,000;
- COGS = 600;
- operating expense = 250;
- net income = 100.

Then:

| Item | Amount | % Revenue |
|---|---:|---:|
| Revenue | 1,000 | 100% |
| COGS | 600 | 60% |
| Operating expenses | 250 | 25% |
| Net income | 100 | 10% |

### Why Useful

Common-size eliminates scale differences.

Company A sales 1bn and Company B sales 10bn can still be compared using percentages.

Useful for:

- time-series analysis;
- peer comparison;
- industry comparison;
- identifying cost structure changes.

## 28. Net Profit Margin

Formula:

$$
Net\ Profit\ Margin
=
\frac{Net\ Income}{Revenue}
$$

Interpretation:

> amount of net income generated for each unit of revenue.

If net income = 75 and revenue = 1,000:

$$
NPM = 7.5\%
$$

Higher margin generally indicates greater profitability, but not automatically “better” without context.

Reasons margin can rise:

- pricing power;
- lower COGS;
- lower operating expense;
- lower interest;
- lower tax;
- non-recurring gain.

Thus:

> **Margin improvement must be decomposed.**

## 29. Gross Profit Margin

Formula:

$$
Gross\ Profit
=
Revenue - COGS
$$

$$
Gross\ Profit\ Margin
=
\frac{Gross\ Profit}{Revenue}
$$

Gross margin focuses more closely on product/service economics before many operating and financing costs.

Changes may reflect:

- pricing;
- input costs;
- product mix;
- inventory accounting;
- competitive conditions.

Again:

> higher margin is not self-explanatory.

## 30. Industry Context Matters

Robinson's common-size industry exhibit shows material differences in:

- operating margin;
- pretax margin;
- profit margin;
- COGS/sales;
- SG&A/sales;

across sectors.

Thus comparing:

- telecom margin vs retailer margin,
- manufacturer COGS vs software-like company COGS,

without industry context can mislead.

Correct analysis:

```text
Company ratio
↓
Historical trend
+
Peer comparison
+
Industry economics
+
Accounting choices
↓
Interpretation
```

## 31. Comprehensive Income

Net income does not contain all non-owner changes in equity.

Basic relationship:

$$
Comprehensive\ Income
=
Net\ Income
+
Other\ Comprehensive\ Income
$$

OCI contains specified gains/losses excluded from net income under applicable standards.

Examples in the chapter/framework context include items related to:

- foreign currency translation;
- unrealized gains/losses on certain securities;
- derivative hedging adjustments;
- certain pension-related adjustments.

### 31.1 Why OCI Exists

Some value changes affect equity but are not included in current-period net income.

Thus:

```text
Net Income
+
OCI
=
Comprehensive Income
```

Comprehensive income provides broader view of changes in equity from non-owner sources.

### 31.2 Example — Apple Components of OCI

The chapter/source illustrates items such as:

- foreign currency translation change;
- unrealized changes on available-for-sale securities;
- unrealized changes on derivative instruments.

These flow into accumulated other comprehensive income rather than retained earnings from net income.

> [!WARNING] Important Distinction
> **Net income ≠ comprehensive income.**
>
> Net income feeds retained earnings. OCI commonly accumulates in a separate equity component such as accumulated OCI.

## 32. Linking the Entire Income Statement

A useful mental model:

```text
Revenue
− COGS
= Gross Profit
− Operating Expenses
= Operating Income
± Non-operating Income / Expense
= Income Before Tax
− Tax
= Income from Continuing Operations
± Separately Reported Items
= Net Income
↓
Basic / Diluted EPS

Net Income
+ OCI
= Comprehensive Income
```

This is not a mandatory identical presentation for every company, but a strong analytical map.

## Chapter Synthesis

Jika seluruh chapter hanya boleh dipahami sebagai satu cerita, ceritanya adalah:

**Income statement is not merely a subtraction table. It is a structured story about when and how economic performance is recognized.**

Revenue recognition determines **when the top line appears**.

Expense recognition determines **which costs are charged against which period**.

Classification determines whether an item looks:

- operating;
- non-operating;
- recurring;
- discontinued;
- unusual.

These choices then determine:

- gross profit;
- operating income;
- pretax income;
- net income;
- EPS;
- margins.

Analyst's job is therefore not merely calculate:

$$
NI = Revenue - Expense
$$

but to ask:

```text
Was revenue genuinely earned?
↓
What recognition method?
↓
Were expenses matched consistently?
↓
What estimates drive expenses?
↓
Which earnings are recurring?
↓
What is operating vs non-operating?
↓
Are share counts diluted?
↓
What sits outside net income in OCI?
↓
What earnings are sustainable?
```

The core analytical objective is moving from **reported earnings** to an understanding of **economic and sustainable earnings**.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Income statement | Performance over a period | Core profitability statement | [[1.4 Company Account Structure]] |
| Multi-step format | Shows intermediate subtotals | Helps decompose performance | [[1.4 Company Account Structure]] |
| Single-step format | Revenues minus expenses without gross-profit subtotal | Different presentation, same ultimate purpose | [[1.4 Company Account Structure]] |
| Expense by nature | Classified by type | Understand cost inputs | [[1.4 Company Account Structure]] |
| Expense by function | Classified by activity/purpose | Understand operating structure | [[1.4 Company Account Structure]] |
| Revenue recognition | Determines timing of revenue | Major driver of earnings quality | [[1.5 Financial Statements Construction]] |
| Percentage-of-completion | Recognize according to contract progress | Estimate-sensitive | [[1.5 Financial Statements Construction]] |
| Installment method | Profit linked to collections | Used where collection uncertainty matters | [[1.5 Financial Statements Construction]] |
| Cost recovery | Profit delayed until cost recovered | More conservative timing | [[1.5 Financial Statements Construction]] |
| Gross vs net revenue | Principal vs agent presentation | Can massively alter top-line scale | [[1.6 Financial Ratios and Interpretation]] |
| Expense recognition | Matching / period / allocation | Determines profit timing | [[1.5 Financial Statements Construction]] |
| Discontinued operations | Results of disposed component | Usually excluded from future forecast | [[1.6 Financial Ratios and Interpretation]] |
| Operating income | Core operating performance | Better core-business indicator than bottom line in many cases | [[1.6 Financial Ratios and Interpretation]] |
| Basic EPS | Earnings available per weighted average common share | Equity metric | [[1.6 Financial Ratios and Interpretation]] |
| Diluted EPS | EPS assuming dilutive conversion/exercise | Shows potential dilution | [[1.6 Financial Ratios and Interpretation]] |
| Common-size statement | Every item as % revenue | Enables peer/time comparison | [[1.6 Financial Ratios and Interpretation]] |
| Net profit margin | NI / revenue | Bottom-line profitability | [[1.6 Financial Ratios and Interpretation]] |
| Gross profit margin | Gross profit / revenue | Product/service margin | [[1.6 Financial Ratios and Interpretation]] |
| Comprehensive income | Net income + OCI | Broader non-owner equity change | [[1.4 Company Account Structure]] |
| OCI | Certain income/expense items excluded from NI | Explains equity changes beyond retained earnings | [[1.4 Company Account Structure]] |

## Compression Notes

### Retained in Detail

- income statement purpose and components;
- single-step vs multi-step structure;
- expense classification by nature vs function;
- accrual-based revenue recognition;
- goods/services recognition logic from textbook context;
- long-term-contract recognition;
- installment / cost-recovery logic;
- barter and round-trip transaction issue;
- gross vs net revenue presentation;
- expense recognition principles;
- impact of methods and estimates on income;
- discontinued/non-recurring items and forecasting;
- operating vs non-operating distinction;
- basic EPS;
- simple vs complex capital structure;
- diluted EPS;
- if-converted and treasury-stock methods;
- dilutive vs antidilutive logic;
- common-size income statement;
- net and gross profit margins;
- comprehensive income and OCI.

### Condensed

- full Kraft income statement exhibits were not recreated line-by-line;
- long contract examples were reduced to method mechanics;
- numerous revenue-recognition edge cases were consolidated;
- full accounting-policy quotations were paraphrased;
- discontinued-operation company examples were reduced to analytical lesson;
- detailed EPS examples were compressed into reusable formulas and smaller numerical illustrations;
- full S&P 500 sector common-size exhibit was summarized as evidence that industry cost structures differ;
- OCI company exhibits were summarized to key categories.

### Omitted / Beyond CF4

- end-of-chapter practice questions;
- long footnote/legal citations;
- historical web references;
- exhaustive accounting-standard paragraph references;
- detailed edge cases that do not materially improve core understanding.

> [!IMPORTANT] Textbook Context
> Chapter 4 reflects accounting standards and terminology at the textbook's publication date. In particular, its discussion of revenue-recognition frameworks and the historical US GAAP category **extraordinary items** should be read as source-period context. This condensed note deliberately preserves the textbook rather than silently replacing it with newer standards.

## CF4 Connection Map

```text
Income statement structure
        ↓
[[1.4 Company Account Structure]]
        ↓
Revenue + expense recognition
        ↓
[[1.5 Financial Statements Construction]]
        ↓
Net income / EPS / margins
        ↓
[[1.6 Financial Ratios and Interpretation]]
        ↓
Sustainable earnings assessment
```

## Quick Reading Review

- Income statement measures performance **over a period**, not at one date.
- Basic equation: $Revenue - Expenses = Net\ Income$.
- Multi-step statement shows subtotals such as **gross profit**.
- Expense classification can be by **nature** or **function**.
- Revenue recognition follows **earning**, not simply cash collection.
- Long-term contracts can shift revenue/profit timing materially.
- Percentage-of-completion depends on estimates and therefore requires analytical scrutiny.
- Installment/cost-recovery approaches delay profit when collection is uncertain.
- Barter/round-trip transactions can inflate revenue without improving net income or cash flow.
- Gross vs net reporting may dramatically alter sales with little/no effect on net income.
- Expense methods and estimates can materially alter earnings.
- Forecasting requires separating **recurring from non-recurring** income.
- Discontinued operations should not be mechanically extrapolated into future earnings.
- Operating and non-operating classification depends partly on business model.
- Basic EPS:
  $$
  \frac{NI-Preferred\ Dividends}{Weighted\ Average\ Common\ Shares}
  $$
- Simple capital structure: basic EPS = diluted EPS.
- Dilutive securities reduce EPS; antidilutive securities are excluded.
- Convertibles use **if-converted** logic; options/warrants use **treasury stock** logic in the source.
- Common-size income statement states each line as % revenue.
- Net profit margin = net income / revenue.
- Gross profit margin = gross profit / revenue.
- Margin comparisons require peer/industry context.
- Comprehensive income = net income + OCI.
- Net income and cash flow remain conceptually different.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists / Introduction | Robinson et al., Chapter 4, Section 1 |
| Income statement components and formats | Chapter 4, Section 2 |
| Single-step vs multi-step | Chapter 4, Section 2 |
| Expense classification by nature/function | Chapter 4, Section 2 |
| Revenue recognition principles | Chapter 4, Section 3 |
| Goods/service recognition criteria | Chapter 4, Section 3.1 |
| Long-term contracts | Chapter 4, revenue-recognition applications |
| Installment / cost recovery | Chapter 4, revenue-recognition applications |
| Barter transactions | Chapter 4, Section 3.2.3 |
| Gross vs net reporting | Chapter 4, Section 3.2.4 |
| Expense recognition | Chapter 4, Section 4 |
| Matching / period / allocation logic | Chapter 4, Section 4 |
| Non-recurring items | Chapter 4, Section 5 |
| Discontinued operations | Chapter 4, Section 5.1 |
| Extraordinary items | Chapter 4, Section 5.2, textbook-period context |
| Operating vs non-operating | Chapter 4, Section 5 |
| EPS overview | Chapter 4, Section 6 |
| Simple vs complex capital structure | Chapter 4, Section 6.1 |
| Basic EPS | Chapter 4, Section 6 |
| Diluted EPS / convertibles / options | Chapter 4, EPS subsections |
| Common-size income statements | Chapter 4, Section 7 |
| Net profit margin / gross profit margin | Chapter 4, Section 7.2 |
| Comprehensive income | Chapter 4, Section 8 |
| OCI examples | Chapter 4, Section 8 |
| Chapter synthesis and review | Chapter 4 summary |
