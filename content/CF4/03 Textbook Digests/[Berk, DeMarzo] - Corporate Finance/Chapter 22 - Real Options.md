---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "22"
chapter_title: "Real Options"
cf4_topics: ["2.4 Derivative Securities in Corporate Finance", "4.3 Agency Theory and Governance"]
cf4_relevance: "High"
source_scope: "Berk & DeMarzo, Chapter 22 — Sections 22.1–22.7 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, RealOptions, CapitalBudgeting, Derivatives]
date_created: "2026-08-24"
status: "study-note"
---

# Berk & DeMarzo — Chapter 22: Real Options

> [!ABSTRACT] Chapter in One View
> Chapter 22 membawa konsep option dari **financial securities** ke **business decisions**. Sebuah **real option** adalah hak—bukan kewajiban—untuk mengambil keputusan bisnis di masa depan, misalnya menunda investasi, memperluas proyek, atau menghentikan proyek yang gagal.
>
> Perbedaan utama dengan financial option adalah bahwa underlying asset dari real option biasanya **tidak diperdagangkan di competitive market**. Namun intuition option tetap sama: flexibility memiliki value karena decision maker dapat menunggu informasi baru dan kemudian memilih tindakan terbaik.
>
> Berk & DeMarzo memperkenalkan **decision tree analysis** untuk memetakan dua hal sekaligus: uncertainty yang berada di luar control perusahaan dan decisions yang dapat diambil setelah uncertainty tersebut terungkap. Decision tree mempunyai **information nodes** dan **decision nodes**.
>
> Tiga real options paling penting yang dibahas adalah:
>
> 1. **option to delay** — menunggu sebelum committing capital;
> 2. **growth option** — memperbesar proyek bila kondisi favorable;
> 3. **abandonment option** — keluar dari proyek bila hasil buruk.
>
> Option to delay menunjukkan bahwa investment opportunity dengan current NPV negatif masih dapat memiliki positive value, dan positive-NPV project belum tentu harus langsung dijalankan. Investasi harus dilakukan ketika value dari investing now melebihi value dari waiting.
>
> Growth options menjelaskan mengapa proyek awal yang tampak negative NPV bisa layak jika proyek tersebut membuka valuable future expansion opportunities. Abandonment option bekerja sebaliknya: kemampuan menghentikan loss-making project membatasi downside dan menaikkan project value.
>
> Chapter juga menunjukkan bagaimana real-option logic membantu memilih antara projects dengan **different lives**, serta menentukan optimal sequence dari **staged, mutually dependent investments**. General rule-nya: invest lebih dahulu pada stages yang memberikan paling banyak information dengan cost paling kecil.
>
> Karena exact real-option valuation sering sulit, firms menggunakan **rules of thumb** seperti **profitability index threshold** dan **hurdle rate rule**. Textbook menekankan bahwa hurdle rate dapat membantu menentukan *timing*, tetapi tidak menggantikan true NPV valuation menggunakan cost of capital.
>
> Untuk CF4, Chapter 22 paling relevan sebagai application dari [[2.4 Derivative Securities in Corporate Finance]] dan sebagai supporting context untuk investment decision-making, uncertainty, staging, dan managerial flexibility.

---

## 1. Why This Chapter Exists

Traditional NPV analysis sering terlihat seolah firm membuat one-time decision:

```text
Invest now?
   ↓
Yes / No
```

Tetapi banyak real corporate projects sebenarnya lebih fleksibel:

```text
Invest a little
      ↓
Learn something
      ↓
Continue?
Expand?
Wait?
Abandon?
```

Contoh opening textbook adalah biotechnology R&D. Firm tidak harus commit seluruh development budget sejak awal. Ia dapat:

1. fund early-stage research;
2. observe results;
3. invest further only if prospects improve;
4. stop funding if results are poor.

Economic structure tersebut mirip call option:

```text
Initial R&D spending
      ↓
Buys the right to continue
      ↓
Later investment = exercise price
      ↓
Successful project = underlying asset
```

Thus the value of a project can be greater than its static NPV because flexibility itself has value.

> [!INFO] CF4 Connection
> `[CORE CF4]` Berk & DeMarzo Chapter 22 tercantum dalam referensi resmi Topik 2. Chapter ini memperluas derivative thinking dari traded options menuju **managerial flexibility in corporate investment decisions**.

---

## 2. Chapter Map

```text
Chapter 22 — Real Options
├── 22.1 Real Versus Financial Options
│   ├── Definition of a real option
│   ├── Real asset vs traded financial asset
│   └── Why flexibility adds value
│
├── 22.2 Decision Tree Analysis
│   ├── Decision nodes
│   ├── Information nodes
│   └── Value of waiting for information
│
├── 22.3 The Option to Delay an Investment Opportunity
│   ├── Investment as a call option
│   ├── Value of waiting
│   ├── Cost of delaying
│   ├── Investment threshold
│   ├── Negative-NPV opportunities with positive option value
│   └── Risk / beta of growth options
│
├── 22.4 Growth and Abandonment Options
│   ├── Growth options
│   ├── Expansion options
│   ├── Staged investment
│   └── Abandonment options
│
├── 22.5 Applications to Multiple Projects
│   ├── Mutually exclusive projects with different lives
│   ├── Replacement option
│   ├── Mutually dependent investments
│   └── Optimal staging order
│
├── 22.6 Rules of Thumb
│   ├── Profitability index rule
│   └── Hurdle rate rule
│
└── 22.7 Key Insights from Real Options
    ├── Out-of-the-money options can have value
    ├── In-the-money options need not be exercised now
    ├── Waiting is valuable
    ├── Delay investment expenses
    └── Exploit real options dynamically
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 22.1 Real vs Financial Options | High | [[2.4 Derivative Securities in Corporate Finance]] |
| 22.2 Decision Trees | High supporting | [[2.4 Derivative Securities in Corporate Finance]] |
| 22.3 Option to Delay | High | [[2.4 Derivative Securities in Corporate Finance]] |
| 22.4 Growth / Abandonment | High | [[2.4 Derivative Securities in Corporate Finance]] |
| 22.5 Multiple Projects | Medium–High supporting | [[2.4 Derivative Securities in Corporate Finance]] |
| 22.6 Rules of Thumb | Medium | [[2.4 Derivative Securities in Corporate Finance]] |
| 22.7 Key Insights | High synthesis | [[2.4 Derivative Securities in Corporate Finance]] |

---

## 3. 22.1 Real Versus Financial Options

### 3.1 Definition

A **real option** is the right to make a particular **business decision**, such as making a capital investment.

This differs from a financial option, whose underlying asset is typically a traded financial security.

| Feature | Financial Option | Real Option |
|---|---|---|
| Underlying | Stock, bond, index, etc. | Business project / real asset |
| Market | Often actively traded | Often not traded |
| Exercise | Buy/sell financial asset | Invest, expand, delay, abandon |
| Value source | Asymmetric payoff + flexibility | Ability to react after information arrives |

The key issue is not whether the option is called “financial” or “real.” The common logic is:

> **The holder does not need to commit until uncertainty has been resolved.**

That flexibility allows the firm to choose favorable actions and avoid unfavorable ones.

---

### 3.2 Why Real Options Add Value

Suppose a project could produce either:

- a very good outcome;
- a very bad outcome.

If firm must commit fully today, it bears both.

If firm can wait until some uncertainty is resolved, it can:

```text
Good news  → invest
Bad news   → walk away
```

Because bad-state losses can be avoided while good-state upside remains available:

\[
\text{Value with flexibility}
\ge
\text{Value without flexibility}
\]

The value can be particularly large when uncertainty is high.

> [!WARNING] Important Distinction
> Traditional expected cash-flow NPV may already *implicitly* include future managerial decisions.
>
> Real-option analysis becomes useful when we want to model those future decisions explicitly rather than assume a fixed passive strategy.

---

## 4. 22.2 Decision Tree Analysis

### 4.1 What Is a Decision Tree?

A **decision tree** is a graphical representation of:

- future decisions;
- future uncertainty resolution;
- associated cash flows.

Textbook distinguishes two node types.

### Decision Node

Shown as a square.

It represents a choice under management control.

Example:

```text
Go to market?
├── Go
└── Stay home
```

### Information Node

Shown as a circle.

It represents uncertainty outside decision-maker control.

Example:

```text
Weather
├── Sunny
└── Rain
```

---

### 4.2 Megan’s Swap-Meet Example

Megan pays a booth fee of:

\[
\$500
\]

Average gross profit if she attends:

\[
\$1,100
\]

so without considering weather detail:

\[
NPV = 1100-500 = \$600
\]

Now suppose:

- sunny with probability 75%;
- profit in good weather = $1,500;
- rainy with probability 25%;
- attending in rain creates an additional loss of $100.

If Megan commits to attend regardless:

\[
E[\text{profit}]
=
0.75(1500)+0.25(-100)
=
1100
\]

But if she can observe weather before deciding whether to attend, she stays home if it rains.

Then:

\[
E[\text{profit with flexibility}]
=
0.75(1500)+0.25(0)
=
1125
\]

Value of real option:

\[
1125-1100
=
\$25
\]

After paying the booth fee:

\[
NPV
=
1125-500
=
\$625
\]

### Meaning

The $25 does not come from higher average market demand. It comes from the **ability to avoid the bad decision after information becomes available**.

This is the central logic of real-option value.

---

## 5. 22.3 The Option to Delay an Investment Opportunity

### 5.1 Waiting Has Both Benefit and Cost

Waiting can create value because information improves.

But waiting can also be costly because firm may:

- forgo interim profits;
- lose first-mover advantage;
- allow a competitor to enter;
- face increased future investment cost.

Thus:

```text
Benefit of waiting
= better information + preserved flexibility

Cost of waiting
= lost cash flow + strategic delay cost
```

The correct choice compares these two.

---

### 5.2 Investment as a Call Option

Textbook uses an electric-car dealership.

Assume:

- opening cost = $5 million;
- expected first-year FCF = $600,000;
- growth \(g=2\%\);
- cost of capital \(r=12\%\).

Value if open today:

\[
V
=
\frac{600,000}{0.12-0.02}
=
\$6\text{ million}
\]

Immediate NPV:

\[
NPV_{\text{now}}
=
6-5
=
\$1\text{ million}
\]

So static NPV says invest now.

But the contract allows firm to:

- invest today;
- wait exactly one year and decide;
- walk away.

If waiting one year, payoff resembles a **European call option**:

\[
\max(V_1-K,0)
\]

where:

- \(V_1\) = dealership value in one year;
- \(K=5\) million = investment cost.

This is the real-option analogy:

| Financial Call | Real Investment Option |
|---|---|
| Stock value \(S\) | Project value |
| Strike \(K\) | Required investment |
| Expiration \(T\) | Final decision date |
| Stock volatility | Project-value volatility |
| Dividend | Cash flow lost by waiting |

---

### 5.3 Lost Cash Flow as Dividend

If firm waits, it gives up first-year FCF.

That lost FCF is economically similar to a dividend missed by a call-option holder.

Given:

\[
S=6
\]

million and lost FCF:

\[
Div=0.6
\]

million,

the current underlying value excluding missed cash flow is:

\[
S_x
=
S-PV(Div)
\]

\[
=
6-\frac{0.6}{1.12}
=
\$5.46\text{ million}
\]

Present value of strike:

\[
PV(K)
=
\frac{5}{1.05}
=
\$4.76\text{ million}
\]

With:

- \(r_f=5\%\);
- volatility \(=40\%\);
- \(T=1\),

the textbook applies Black–Scholes logic and obtains:

\[
C
=
\$1.20\text{ million}
\]

So:

\[
\text{Value of waiting}
=
1.20
>
1.00
=
\text{NPV of investing now}
\]

Therefore:

> **Wait rather than invest immediately.**

---

### 5.4 Why Positive NPV Does Not Automatically Mean “Invest Now”

Without flexibility:

\[
NPV>0
\Rightarrow
\text{Invest}
\]

With option to delay:

\[
\text{Invest now only if}
\quad
NPV_{\text{now}}
>
\text{Value of waiting}
\]

In dealership example, textbook finds investing immediately becomes optimal only when operating dealership value exceeds approximately:

\[
\$6.66\text{ million}
\]

Since investment cost is $5m, investment threshold is:

\[
NPV_{\text{trigger}}
=
6.66-5
=
\$1.66\text{ million}
\]

Thus the required NPV before investing is **substantially above zero**.

> [!IMPORTANT] Core Real-Option Insight
> A positive-NPV project can rationally be delayed if waiting is even more valuable.

---

### 5.5 Negative-NPV Opportunity Can Still Have Positive Value

Suppose current project value is only:

\[
\$4\text{ million}
\]

while investment cost is:

\[
\$5\text{ million}
\]

Static NPV:

\[
-1\text{ million}
\]

Yet textbook shows the opportunity to wait is still worth approximately:

\[
\$248,000
\]

Why?

Because the option is currently **out-of-the-money**, but future information could make it profitable.

This parallels a financial call:

> OTM option does not have zero value merely because immediate exercise would be unattractive.

---

### 5.6 Factors That Increase the Value of Waiting

The option to delay is generally more valuable when:

- project uncertainty is greater;
- investment decision can be postponed longer;
- investment cost is large relative to current project value;
- cost of waiting is small;
- lost interim cash flows are small.

The option is less valuable when:

- current NPV is strongly positive;
- delaying forfeits substantial cash flow;
- competitors may capture the opportunity;
- the right to invest may expire soon.

---

### 5.7 Growth-Option Risk

The option to invest is more sensitive to underlying project value than an already-operating asset.

As with financial calls:

> out-of-the-money growth options can be very risky.

This has an important valuation implication:

- mature assets-in-place can have relatively moderate risk;
- growth options may have much higher beta.

Thus using a high-growth firm's equity beta directly to value a mature project can overstate project risk.

---

## 6. 22.4 Growth and Abandonment Options

## 6.1 Growth Option

A **growth option** is an opportunity to make a future investment that exists because of the firm's current position or project.

Examples include:

- patent development;
- entering new market;
- expanding successful product;
- launching accessories around a successful product;
- increasing capacity after demand proves strong.

The value of the firm can therefore be viewed partly as:

```text
Value of assets in place
+
Value of future growth options
```

Because many growth opportunities are currently out-of-the-money, their risk can be high.

---

### 6.2 Interest-Rate Uncertainty Example

Textbook considers StartUp Inc., whose only asset is a patent.

If drug is produced:

- profit = $1m per year;
- patent life = 17 years;
- investment cost = $10m;
- current annuity rate = 8%.

Static NPV:

\[
NPV
=
\frac{1}{0.08}
\left(
1-\frac{1}{1.08^{17}}
\right)
-10
\]

\[
=
-\$878,362
\]

So investing now is unattractive.

But in one year:

- rates may rise to 10%;
- or fall to 5%.

If rates rise, never invest.

If rates fall, with 16 years remaining:

\[
NPV_{\text{low rates}}
=
\frac{1}{0.05}
\left(
1-\frac{1}{1.05^{16}}
\right)
-10
\]

\[
=
\$837,770
\]

Using risk-neutral probabilities derived from a comparable risk-free annuity, textbook obtains current patent option value:

\[
PV
=
\$221,693
\]

So a project with negative immediate NPV can still have substantial value because firm owns the **right to invest later under favorable conditions**.

---

### 6.3 The Option to Expand

Suppose:

- initial project cost = $10m;
- in one year project either succeeds or fails;
- success probability under risk-neutral measure = 50%;
- if successful, project generates $1m per year perpetually;
- firm can double project size later at same terms;
- risk-free rate = 6%.

Ignoring growth option:

\[
NPV
=
\frac{0.5(1,000,000)}{0.06}
-10,000,000
\]

\[
=
-\$1.667\text{ million}
\]

Static analysis says reject.

But if successful, doubling has NPV:

\[
NPV_{\text{expand}}
=
\frac{1,000,000}{0.06}
-10,000,000
\]

\[
=
\$6.667\text{ million}
\]

Expected one-year expansion-option value:

\[
0.5(6.667)
=
3.333
\]

million.

Present value:

\[
PV_{\text{growth option}}
=
\frac{3.333}{1.06}
=
\$3.145\text{ million}
\]

Total NPV:

\[
NPV_{\text{with growth}}
=
-1.667+3.145
=
\$1.478\text{ million}
\]

So project becomes worthwhile **only because it creates the option to expand**.

> [!WARNING] Important Distinction
> A small pilot can be worthwhile even if its standalone economics look weak, when the pilot creates valuable information and preserves a large upside option.

---

### 6.4 Staged Investment

Textbook links growth-option thinking to staged project management.

Rather than invest everything upfront:

```text
Small pilot investment
      ↓
Learn technical / market information
      ↓
Decision gate
      ↓
Continue / expand / stop
```

Staging reduces downside while retaining upside.

This is especially useful for:

- R&D;
- new technologies;
- uncertain markets;
- large-scale engineering projects.

---

## 7. The Option to Abandon

An **abandonment option** is the right to walk away from a project.

It adds value because firm can stop future losses if project performs poorly.

### 7.1 Gourmet Store Example

Setup cost:

\[
\$400,000
\]

Monthly operating cost:

\[
\$10,000
\]

Revenue:

- weak state = $8,000/month;
- strong/tourist state = $16,000/month;
- probabilities 50/50.

Cost of capital:

\[
7\%\text{ annually}
\]

Monthly rate:

\[
(1.07)^{1/12}-1
\approx0.565\%
\]

Without abandonment, expected monthly revenue:

\[
0.5(8,000)+0.5(16,000)
=
12,000
\]

Static NPV:

\[
NPV
=
\frac{12,000-10,000}{0.00565}
-400,000
\]

\[
=
-\$46,018
\]

Reject if forced to operate forever.

But lease allows firm to exit at no cost after two years.

If strong state:

\[
NPV_{\text{strong}}
=
\frac{16,000-10,000}{0.00565}
-400,000
\]

\[
=
\$661,947
\]

If weak state, firm operates for only two years then shuts down:

\[
NPV_{\text{weak}}
=
-\$444,770
\]

Expected NPV with abandonment:

\[
0.5(661,947)+0.5(-444,770)
=
\$108,589
\]

Value of abandonment option:

\[
108,589-(-46,018)
=
\$154,607
\]

Thus:

> abandonment converts a negative-NPV static project into a positive-NPV flexible project.

---

### 7.2 Sunk Cost Fallacy

Once past investment is sunk, it should not affect continuation decision.

If continuing has:

\[
NPV_{\text{continue}}<0
\]

then abandoning can create value even if prior spending was very large.

> [!WARNING] Important Distinction
> “We already spent too much to stop” is not valid financial logic.
>
> Past sunk cost is irrelevant. Compare **future benefits and future costs** only.

---

## 8. 22.5 Applications to Multiple Projects

### 8.1 Mutually Exclusive Projects with Different Lives

Textbook compares two machine designs.

#### Five-Year Machine

- cost = $10m;
- savings = $3m per year;
- life = 5 years.

At 10% cost of capital:

\[
NPV_{5}
=
\frac{3}{0.10}
\left(
1-\frac{1}{1.10^5}
\right)-10
\]

\[
=
\$1.37\text{ million}
\]

#### Ten-Year Machine

- cost = $16m;
- savings = $3m per year;
- life = 10 years.

\[
NPV_{10}
=
\frac{3}{0.10}
\left(
1-\frac{1}{1.10^{10}}
\right)-16
\]

\[
=
\$2.43\text{ million}
\]

Standalone NPV favors 10-year machine.

But that comparison ignores an important option:

> after five years, the short-lived machine can be replaced using whatever technology and cost conditions exist then.

The five-year design therefore includes a **replacement option**.

---

### 8.2 Replacement Option

Suppose in five years replacement cost is equally likely to:

- rise to $13m;
- remain $10m;
- fall to $7m.

If replacement cost is high, do not replace.

If unchanged or lower, replace.

Textbook calculates:

\[
NPV_{5,\text{with uncertain replacement}}
=
\$2.56\text{ million}
\]

This exceeds:

\[
NPV_{10}
=
\$2.43\text{ million}
\]

So once future flexibility is recognized, the shorter-lived machine is better.

> [!IMPORTANT] Core Lesson
> Different project lives cannot always be compared correctly using standalone NPV alone because the shorter project may preserve valuable future replacement flexibility.

---

### 8.3 Equivalent Annual Benefit Limitation

Managers sometimes use **equivalent annual benefit (EAB)** to compare projects of different lives.

The method implicitly assumes projects can be replaced in the future on the **same terms**.

That assumption can be inappropriate when future replacement:

- cost;
- technology;
- performance;
- market conditions

are uncertain.

Real-option analysis explicitly recognizes that future replacement decision can depend on new information.

---

## 9. Staging Mutually Dependent Investments

### 9.1 Eclectic Motors

To develop an electric car, Eclectic Motors must solve all three technological problems:

| Technology | Cost | Time | Probability of Success |
|---|---:|---:|---:|
| Materials | $100m | 1 year | 50% |
| Recharger | $400m | 1 year | 50% |
| Battery | $100m | 4 years | 25% |

All stages are **mutually dependent**:

> If any required stage fails, overall project produces no benefit.

Because firm can work on only one technology at a time, sequence matters.

---

### 9.2 Lower-Cost Stage First, Other Things Equal

Compare materials vs recharger.

Both:

- same time;
- same success probability.

But materials costs only $100m versus $400m.

If expensive recharger is done first and materials later fails, much larger resources have been wasted.

Thus, other things equal:

> **Do lower-cost stage first.**

---

### 9.3 Riskier / Longer Stage First, Other Things Equal

Compare materials vs battery:

- same cost;
- battery takes longer;
- battery has lower success probability.

Battery should go first.

Why?

1. Greater failure probability → more information gained early.
2. Longer duration → later investments are postponed longer, adding time-value benefit.

Thus, other things equal:

> **Do riskier and longer projects earlier.**

---

### 9.4 General Ordering Rule

Textbook gives:

\[
\boxed{
\frac{1-PV(\text{success})}
{PV(\text{investment})}
}
\tag{22.3}
\]

Rank stages from **highest to lowest**.

Interpretation:

- numerator rewards projects whose failure risk / information value is high;
- denominator penalizes expensive investment.

So we want:

> **maximum information gained per present-value dollar committed.**

For Eclectic:

\[
\text{Materials}
=
\frac{1-(0.50/1.06)}{100}
=
0.00528
\]

\[
\text{Recharger}
=
\frac{1-(0.50/1.06)}{400}
=
0.00132
\]

\[
\text{Battery}
=
\frac{1-(0.25/1.06^4)}{100}
=
0.00802
\]

Optimal order:

\[
\boxed{
\text{Battery}
\rightarrow
\text{Materials}
\rightarrow
\text{Recharger}
}
\]

Textbook then shows that, under this optimal staging, overall project NPV is:

\[
\$19.1\text{ million}
\]

and would be negative under other orders.

This is a powerful result:

> **Project sequencing can itself create or destroy value.**

---

## 10. 22.6 Rules of Thumb

Exact real-option analysis can be difficult because:

- uncertainty is project-specific;
- probabilities and volatilities are hard to estimate;
- future decision rules can be complex;
- required modeling may be expensive.

Firms therefore often use simplified heuristics.

Textbook discusses two.

---

### 10.1 Profitability Index Rule

For simple investment:

\[
\boxed{
PI
=
\frac{NPV}
{\text{Initial Investment}}
}
\]

Without delay option:

\[
PI>0
\]

is equivalent to positive NPV.

With option to wait, firms may require a higher threshold, such as:

\[
PI>1
\]

before investing.

The intuition:

> require the project to be substantially in-the-money before giving up the option to wait.

Textbook notes there is often an asymmetry:

- investing too early destroys flexibility;
- waiting somewhat too long may be less costly.

So conservative thresholds can be rational heuristics.

> [!WARNING] Important Distinction
> The profitability-index threshold is a **rule of thumb**, not a universal theoretical constant.

---

### 10.2 Hurdle Rate Rule

Instead of raising required NPV, firms may raise the discount rate.

The **hurdle rate rule**:

> compute NPV using a discount rate above the true cost of capital, and invest only if this adjusted NPV is positive.

For uncertainty driven by interest rates:

\[
\boxed{
\text{Hurdle Rate}
=
\text{Cost of Capital}
\times
\frac{\text{Callable Annuity Rate}}
{\text{Risk-Free Rate}}
}
\tag{22.4}
\]

Textbook intuition:

A callable loan allows borrower to refinance if rates fall.

This flexibility mirrors the investment option to wait for lower financing rates.

Thus a callable-annuity rate can proxy for the value of waiting.

---

### 10.3 Example — Hurdle Rate

Risk-free technology:

- investment = $1m;
- perpetual cash flow = $90,000;
- current perpetuity rate = 5.4%;
- callable annuity rate = 9%.

Using hurdle rate:

\[
NPV_{\text{hurdle}}
=
\frac{90,000}{0.09}
-1,000,000
=
0
\]

So rule says indifferent between investing now and waiting.

But using true cost of capital:

\[
NPV_{\text{true}}
=
\frac{90,000}{0.054}
-1,000,000
=
\$666,667
\]

Textbook independently calculates value of waiting under future interest-rate uncertainty and also obtains:

\[
\$666,667
\]

Thus in this special case the hurdle-rate timing rule is exact.

---

### 10.4 Hurdle Rate Is Not the Project's True Value

This distinction is critical.

The hurdle rate may help determine:

> **When should we invest?**

But project value is still calculated using:

> **true cost of capital**

not the inflated hurdle rate.

So:

\[
\text{Decision heuristic}
\ne
\text{Valuation discount rate}
\]

> [!WARNING] Important Distinction
> Do not value the project using the hurdle rate merely because management uses that rate to decide whether the real option should be exercised.

---

## 11. 22.7 Key Insights from Real Options

Berk & DeMarzo close the chapter with five principles.

### 11.1 Out-of-the-Money Real Options Have Value

Current:

\[
NPV<0
\]

does not imply:

\[
\text{Investment opportunity value}=0
\]

If there is a chance NPV becomes positive later, waiting option has value.

---

### 11.2 In-the-Money Real Options Need Not Be Exercised Immediately

Current:

\[
NPV>0
\]

does not imply:

\[
\text{Invest immediately}
\]

If:

\[
\text{Value of waiting}
>
NPV_{\text{now}}
\]

then wait.

---

### 11.3 Waiting Is Valuable

Waiting allows uncertainty to resolve.

With more information:

- good opportunities can be accepted;
- bad opportunities can be rejected.

If waiting has no cost, there is no reason to commit early.

If waiting has a cost, compare:

\[
\text{Information benefit}
\quad \text{vs} \quad
\text{Cost of delay}
\]

---

### 11.4 Delay Investment Expenses as Much as Possible

Capital committed too early:

- becomes sunk;
- reduces ability to respond;
- destroys flexibility.

Thus investment spending should generally occur only when needed.

This is one reason staging can create value.

---

### 11.5 Create Value by Exploiting Real Options

Project management should be dynamic.

At each stage, management should re-evaluate whether to:

```text
Abandon
Delay
Continue
Expand
```

Real-option value is realized only if managers actually **use** the flexibility.

Holding an abandonment option is useless if management refuses to abandon failing projects.

---

## Chapter Synthesis

Chapter 22 is the natural extension of Chapter 20's option logic into capital budgeting.

A financial option derives value because its owner can wait before deciding whether to exercise. A real option works the same way, except that the exercise decision is a business action.

The most important change in mindset is this:

> **A project is often not a fixed stream of cash flows. It is a sequence of decisions made as information arrives.**

This matters because standard static NPV can miss value from managerial flexibility.

The **option to delay** says that even when a project has positive NPV, investing now may destroy the valuable right to wait. The correct trigger is not simply \(NPV>0\), but whether the value of investing now exceeds the value of preserving flexibility.

The **growth option** says an initial project can be valuable because it creates access to profitable follow-on opportunities. This explains why a pilot project with negative standalone NPV can still be optimal.

The **abandonment option** limits downside. A project that looks unattractive if operated forever may be profitable if management can exit after learning that conditions are poor.

The same reasoning applies when several investments interact. Shorter-lived projects may preserve future replacement flexibility. Staged projects should be ordered so the firm learns the most while committing the least capital. In Eclectic Motors, this produces a concrete ordering rule based on information value relative to investment cost.

Because exact real-option modeling is difficult, managers often substitute hurdle rates or profitability-index thresholds. These are decision heuristics, not general valuation formulas.

The chapter can therefore be summarized as:

```text
Uncertainty
    ↓
Future information
    ↓
Managerial flexibility
    ↓
Better state-contingent decisions
    ↓
Real-option value
```

And the practical implication is:

> **Do not evaluate an investment only by asking “What is its NPV if we commit today?” Ask also “What future decisions will this investment create or eliminate?”**

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Real option | Right to make future business decision | Adds value through flexibility | [[2.4 Derivative Securities in Corporate Finance]] |
| Decision tree | Map of choices and uncertainty | Makes dynamic decisions explicit | [[2.4 Derivative Securities in Corporate Finance]] |
| Decision node | Choice controlled by management | Identifies future action point | [[2.4 Derivative Securities in Corporate Finance]] |
| Information node | Uncertainty outside management control | Identifies when new information arrives | [[2.4 Derivative Securities in Corporate Finance]] |
| Option to delay | Right to postpone investment | Preserves flexibility under uncertainty | [[2.4 Derivative Securities in Corporate Finance]] |
| Growth option | Right to expand / invest later | Can make initial project worthwhile | [[2.4 Derivative Securities in Corporate Finance]] |
| Abandonment option | Right to terminate project | Limits downside loss | [[2.4 Derivative Securities in Corporate Finance]] |
| Staged investment | Investment committed in phases | Buys information before larger commitment | [[2.4 Derivative Securities in Corporate Finance]] |
| Replacement option | Flexibility to replace short-lived asset later | Important when comparing different project lives | [[2.4 Derivative Securities in Corporate Finance]] |
| Mutually dependent investments | Multiple stages all required for success | Sequence can change NPV | [[2.4 Derivative Securities in Corporate Finance]] |
| Profitability index rule | Require NPV/initial investment above threshold | Heuristic for option to wait | [[2.4 Derivative Securities in Corporate Finance]] |
| Hurdle rate | Decision discount rate above cost of capital | Heuristic for investment timing | [[2.4 Derivative Securities in Corporate Finance]] |
| Sunk cost fallacy | Continuing because of past spending | Can block optimal abandonment | [[4.3 Agency Theory and Governance]] |

---

## Compression Notes

### Retained in Detail

- definition of real options;
- real vs financial option distinction;
- decision-tree mechanics;
- Megan swap-meet example;
- option to delay;
- dealership-as-call analogy;
- lost project cash flow as option dividend;
- investment threshold above zero NPV;
- negative-NPV opportunity with positive option value;
- growth-option risk;
- patent / interest-rate growth-option example;
- option to expand;
- staged investment logic;
- abandonment option;
- gourmet-store example;
- sunk-cost implication;
- different-life project comparison;
- replacement option;
- limitation of equivalent annual benefit;
- mutually dependent staged investments;
- Eclectic Motors ordering logic;
- Equation 22.3 ordering rule;
- profitability-index rule;
- hurdle-rate rule;
- Equation 22.4;
- distinction between timing heuristic and true valuation;
- five closing real-option principles.

### Condensed

- opening Amgen anecdote;
- extended TARP / 2008 crisis discussion;
- urban vacant-land illustration;
- Boeing interview;
- mortgage refinancing box;
- derivation details for risk-neutral probabilities where the conceptual lesson was sufficient;
- repeated decision-tree figures once their branching logic was described.

### Omitted / Beyond CF4

- end-of-chapter exercises;
- bibliography / Further Reading;
- MyFinanceLab references;
- detailed empirical citations;
- full Black–Scholes derivation, which belongs to prior option-pricing material;
- highly application-specific implementation details not necessary for understanding Chapter 22.

> [!IMPORTANT] Reading Priority
> Untuk CF4, prioritaskan:
>
> 1. **real option vs financial option**;
> 2. **decision node vs information node**;
> 3. **option to delay**;
> 4. why \(NPV>0\) does not always imply invest now;
> 5. why \(NPV<0\) does not always imply opportunity value = 0;
> 6. **growth option / option to expand**;
> 7. **abandonment option**;
> 8. staged investment logic;
> 9. different-life projects and replacement option;
> 10. profitability-index and hurdle-rate rules as **heuristics**, not valuation substitutes.

---

## CF4 Connection Map

```text
Financial options
[[2.4 Derivative Securities in Corporate Finance]]
        ↓
Right, not obligation
        ↓
Real options
        ↓
┌───────────────┬───────────────┬────────────────┐
│ Delay         │ Grow          │ Abandon        │
│ investment    │ project       │ project        │
└───────────────┴───────────────┴────────────────┘
        ↓
Dynamic capital budgeting
        ↓
Decision trees + staged investment
        ↓
Higher firm value through flexibility
```

Option analogy:

```text
Financial Call
Stock price
Strike price
Expiration
Dividend
      ↓
Real Investment Option
Project value
Investment cost
Decision deadline
Cash flow lost by waiting
```

---

## Quick Reading Review

- A **real option** is the right to make a future business decision.
- Real options usually involve non-traded underlying assets.
- Flexibility creates value because management can wait for information.
- A decision tree contains **decision nodes** and **information nodes**.
- Megan's option to observe weather before attending is worth $25 in the textbook example.
- Option to delay is analogous to a call option on a project.
- Investment cost is analogous to strike price.
- Cash flow forgone by waiting is analogous to a dividend.
- With an option to delay, invest only when:
  \[
  NPV_{\text{now}}
  >
  \text{Value of waiting}
  \]
- Positive NPV does not necessarily mean invest immediately.
- Negative current NPV does not necessarily mean opportunity value is zero.
- Higher uncertainty generally makes the option to wait more valuable.
- Growth options are future expansion/investment opportunities.
- Initial negative-NPV project can be worthwhile if it creates valuable growth option.
- Staging lets firm learn before committing more capital.
- Abandonment option limits downside.
- Ignore sunk costs when deciding whether to continue.
- Different-life projects may contain different replacement flexibility.
- EAB can mislead if future replacement terms are uncertain.
- For mutually dependent stages, other things equal:
  - cheaper stages first;
  - riskier / longer stages first.
- General staging ranking:
  \[
  \frac{1-PV(\text{success})}
  {PV(\text{investment})}
  \]
  highest first.
- Profitability-index thresholds can approximate the value of waiting.
- Hurdle-rate rule raises the discount rate for the **timing decision**.
- Hurdle rate is not the true cost of capital for valuation.
- Real-option management requires continual re-evaluation:
  **abandon, delay, continue, or grow**.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose / Amgen R&D analogy | Berk & DeMarzo, Chapter 22 introduction |
| Real vs financial options | Chapter 22, §22.1 |
| Decision tree definition | Chapter 22, §22.2 |
| Decision vs information nodes | Chapter 22, §22.2 |
| Megan swap-meet example | Chapter 22, §22.2 / Figures 22.1–22.3 |
| Option to delay | Chapter 22, §22.3 |
| Electric-car dealership example | Chapter 22, §22.3 / Figures 22.4–22.5 |
| Real-option / Black–Scholes parameter mapping | Chapter 22, Table 22.1 |
| Investment trigger above zero NPV | Chapter 22, §22.3 |
| Negative-NPV opportunity with positive value | Chapter 22, §22.3 |
| Growth options | Chapter 22, §22.4 |
| StartUp patent / interest-rate example | Chapter 22, §22.4 / Figure 22.6 |
| Option to expand | Chapter 22, §22.4 / Figure 22.7 |
| Staged investment intuition | Chapter 22, §22.4 |
| Abandonment option | Chapter 22, §22.4 |
| Gourmet store example | Chapter 22, §22.4 / Figure 22.8 |
| Different-life projects | Chapter 22, §22.5 |
| Replacement option | Chapter 22, §22.5 / Example 22.2 |
| Mutually dependent investments | Chapter 22, §22.5 |
| Eclectic Motors stages | Chapter 22, §22.5 / Table 22.2 |
| Optimal staging rule | Chapter 22, Eq. 22.3 / Examples 22.3–22.4 |
| Profitability index rule | Chapter 22, §22.6 |
| Hurdle rate rule | Chapter 22, §22.6, Eq. 22.4 |
| Hurdle-rate example | Chapter 22, Example 22.5 |
| Key real-option principles | Chapter 22, §22.7 |
