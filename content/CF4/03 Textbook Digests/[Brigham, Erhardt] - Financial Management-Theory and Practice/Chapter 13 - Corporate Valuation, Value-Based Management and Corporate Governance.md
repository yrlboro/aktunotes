---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham; Michael C. Ehrhardt"
chapter: "13"
chapter_title: "Corporate Valuation, Value-Based Management and Corporate Governance"
cf4_topics: ["4.1 Financial Markets Structure", "4.2 Finance and Real Resources", "4.3 Agency Theory and Governance"]
cf4_relevance: "Very High"
source_scope: "Brigham & Ehrhardt, Chapter 13 — Sections 13.1–13.5 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Brigham, CorporateValuation, ValueBasedManagement, CorporateGovernance, FCF, EROIC, MVA]
date_created: "2026-08-25"
status: "study-note"
---

# Brigham — Chapter 13: Corporate Valuation, Value-Based Management and Corporate Governance

> [!ABSTRACT] Chapter in One View
> Chapter 13 menyatukan hampir seluruh building blocks corporate finance menjadi satu pertanyaan: **apa yang menentukan intrinsic value perusahaan, dan bagaimana management dapat meningkatkan value tersebut?**
>
> Brigham menggunakan **corporate valuation model**, yaitu present value dari expected future **free cash flows (FCF)** yang didiskontokan pada **weighted average cost of capital (WACC)**:
>
> $$
> V_{\text{operations}}
> =
> \sum_{t=1}^{\infty}
> \frac{FCF_t}{(1+WACC)^t}
> $$
>
> Model ini lebih luas daripada dividend discount model karena tidak membutuhkan dividend. Karena itu model dapat digunakan untuk perusahaan yang belum membayar dividend, perusahaan high-growth, bahkan individual divisions.
>
> Corporate assets dibedakan menjadi **operating assets** dan **nonoperating assets**. Operating assets terdiri dari **assets-in-place** serta **growth options**. Operating assets menghasilkan operating cash flows, sedangkan nonoperating assets—misalnya excess marketable securities—ditambahkan secara terpisah ketika memperoleh total corporate value.
>
> Untuk forecast period dengan nonconstant growth, perusahaan memproyeksikan FCF satu per satu. Ketika growth menjadi stabil, digunakan **horizon/terminal value**:
>
> $$
> V_{\text{op},N}
> =
> \frac{FCF_{N+1}}{WACC-g}
> =
> \frac{FCF_N(1+g)}{WACC-g}
> $$
>
> Chapter kemudian mengubah valuation model menjadi managerial tool melalui **value-based management (VBM)**. Value perusahaan terutama ditentukan oleh empat fundamental value drivers:
>
> 1. sales growth, $g$;
> 2. operating profitability, $OP=NOPAT/Sales$;
> 3. capital requirements, $CR=Operating\ Capital/Sales$;
> 4. WACC.
>
> Growth tidak otomatis baik. Brigham menggunakan **expected return on invested capital (EROIC)**:
>
> $$
> EROIC_N
> =
> \frac{NOPAT_{N+1}}{Capital_N}
> $$
>
> Jika $EROIC>WACC$, additional growth creates value. Jika $EROIC=WACC$, firm secara economic break even. Jika $EROIC<WACC$, growth justru destroys value.
>
> Bell Electronics menunjukkan mengapa management tidak boleh mengejar profitability atau growth secara terpisah. Memory division awalnya lebih profitable tetapi sangat capital-intensive dan memiliki negative MVA. Setelah inventory dan plant requirements diturunkan, value meningkat tajam. Instruments division justru menerima plan yang sedikit menurunkan EROIC karena return baru tetap jauh di atas WACC dan diterapkan pada larger capital base.
>
> Bagian akhir menghubungkan valuation dengan **agency problem**. Managers dapat kurang berusaha, menikmati perks, menghindari difficult decisions, mengambil terlalu banyak/terlalu sedikit risk, menahan excess FCF, atau menahan/manipulasi information. Karena itu perusahaan membutuhkan **corporate governance**—laws, rules, procedures, incentives, monitoring, dan discipline yang membuat managerial decisions lebih dekat dengan intrinsic-value maximization.
>
> Untuk CF4, chapter ini adalah salah satu source utama bagi [[4.2 Finance and Real Resources]] dan [[4.3 Agency Theory and Governance]], serta memberi valuation link untuk [[4.1 Financial Markets Structure]].

---

## 1. Why This Chapter Exists

Brigham berulang kali menekankan bahwa management seharusnya berusaha **maximize intrinsic value**.

Tetapi objective tersebut tidak cukup hanya dinyatakan. Management membutuhkan cara untuk menjawab:

> **Jika strategy A, B, dan C menghasilkan sales, costs, investments, risk, dan financing needs yang berbeda, strategy mana yang benar-benar menciptakan value paling besar?**

Chapter 13 menyediakan framework tersebut.

Corporate valuation model menggabungkan:

```text
Financial Statements
        ↓
Financial Forecasts
        ↓
NOPAT
        ↓
Required Investment in Operating Capital
        ↓
Free Cash Flow
        ↓
Risk + Capital Structure
        ↓
WACC
        ↓
Present Value
        ↓
Intrinsic Corporate Value
```

Karena itu chapter ini merupakan **integration chapter**.

Opening chapter menggunakan severe stock-market decline tahun 2008 untuk menunjukkan bahwa market value dapat berubah karena satu atau kombinasi dari tiga hal:

1. market price tidak sama dengan intrinsic value;
2. expected future FCF turun;
3. required return/cost of capital naik.

Ini langsung mengarah ke valuation logic:

```text
Expected FCF ↓ → Value ↓
WACC ↑ → Value ↓
```

Bagian kedua chapter kemudian bertanya:

> Bahkan jika kita tahu strategy yang memaksimalkan value, **apa yang memastikan managers mau memilih strategy tersebut?**

Di sinilah **value-based management** bertemu dengan **corporate governance**.

---

## 2. Chapter Map

```text
Chapter 13
Corporate Valuation, Value-Based Management
and Corporate Governance
│
├── 13.1 Overview of Corporate Valuation
│   ├── Why DDM is often insufficient
│   ├── Corporate valuation model
│   ├── Divisions and non-dividend firms
│   └── Value-based management + governance link
├── 13.2 The Corporate Valuation Model
│   ├── Operating vs nonoperating assets
│   ├── Assets-in-place
│   ├── Growth options
│   ├── Operating capital
│   ├── NOPAT and FCF
│   ├── Explicit forecast period
│   ├── Horizon / terminal value
│   ├── Value of operations
│   └── From operations to equity value
├── 13.3 Value-Based Management
│   ├── Bell Electronics
│   ├── Market Value Added
│   ├── Four value drivers
│   ├── EROIC
│   ├── EROIC − WACC spread
│   └── Strategy evaluation
├── 13.4 Managerial Behavior and Shareholder Wealth
└── 13.5 Corporate Governance
```

| Textbook Area | CF4 Relevance | Main Connection |
|---|---|---|
| Corporate valuation model | Very High | [[4.2 Finance and Real Resources]] |
| Operating vs nonoperating assets | Very High | [[4.2 Finance and Real Resources]] |
| FCF / terminal value | Very High | [[4.2 Finance and Real Resources]] |
| Four value drivers | Very High | [[4.2 Finance and Real Resources]] |
| EROIC vs WACC | Very High | [[4.2 Finance and Real Resources]] |
| Managerial behavior | Very High | [[4.3 Agency Theory and Governance]] |
| Corporate governance | Very High | [[4.3 Agency Theory and Governance]] |
| Market value vs intrinsic value | High | [[4.1 Financial Markets Structure]] |

---

# 3. 13.1 Overview of Corporate Valuation

## 3.1 Why Not Just Use the Dividend Growth Model?

Dividend growth model berguna untuk valuing common equity dari expected dividends, tetapi Brigham menunjukkan keterbatasannya untuk managerial analysis.

### Start-Up Company

Start-up dapat tidak membayar dividend karena seluruh resources digunakan untuk product development dan growth. Karena itu:

> **No dividend does not mean no value.**

### Established Firm That Retains Earnings

Established firm pun dapat menunda dividend selama reinvestment opportunities masih attractive.

### Divisions Do Not Pay Dividends

Division mempunyai sales, costs, operating assets, dan cash flows, tetapi tidak membayar legal dividend kepada shareholders. Management tetap perlu menilai apakah division menciptakan value.

> [!IMPORTANT] Core Advantage
> Corporate valuation model dapat digunakan untuk:
>
> - entire corporation;
> - non-dividend company;
> - start-up;
> - division;
> - business unit;
> - alternative strategy.

---

## 3.2 From Strategy to Value

```text
Alternative strategy
↓
Forecast financial statements
↓
Forecast operating capital
↓
Forecast NOPAT
↓
Forecast FCF
↓
Assess risk / WACC
↓
Discount FCF
↓
Estimate intrinsic value
↓
Choose highest-value alternative
```

Inilah foundation **value-based management**.

---

# 4. 13.2 The Corporate Valuation Model

## 4.1 Operating vs Nonoperating Assets

Brigham membagi corporate assets menjadi:

```text
Corporate Assets
├── Operating Assets
│   ├── Assets-in-Place
│   └── Growth Options
└── Nonoperating Assets
    ├── Excess marketable securities
    └── Investments in other businesses
```

### Assets-in-Place

Termasuk tangible resources seperti:

- land;
- buildings;
- machines;
- inventory;

dan intangible resources seperti:

- patents;
- customer lists;
- reputation;
- know-how.

### Growth Options

Growth options adalah opportunities untuk future investment yang muncul dari existing knowledge, experience, brand, capabilities, dan resources.

> [!INFO] CF4 Connection
> Untuk [[4.2 Finance and Real Resources]], real/operating resources tidak terbatas pada physical assets. Knowledge, reputation, patents, dan growth opportunities juga dapat mempunyai economic value.

### Nonoperating Assets

Contoh:

- excess marketable securities;
- investments in other companies.

Valuation structure:

$$
\boxed{
Total\ Corporate\ Value
=
Value\ of\ Operations
+
Nonoperating\ Assets
}
$$

> [!WARNING] Important Distinction
> Required operating cash adalah bagian dari operations. **Excess** financial assets dinilai secara terpisah.

---

# 5. Free Cash Flow as the Valuation Engine

Core formula:

$$
\boxed{
FCF
=
NOPAT
-
Investment\ in\ Operating\ Capital
}
$$

dengan:

$$
NOPAT=EBIT(1-T)
$$

dan:

$$
Investment\ in\ Operating\ Capital
=
Capital_t-Capital_{t-1}
$$

### MagnaVision Example

Operating capital naik dari:

$$
491\rightarrow560
$$

maka investment:

$$
560-491=69
$$

EBIT 2011:

$$
85
$$

tax rate:

$$
40\%
$$

NOPAT:

$$
85(1-0.40)=51
$$

FCF:

$$
FCF_{2011}=51-69=-18
$$

Negative FCF di awal tidak otomatis buruk. High-growth company dapat profitable tetapi perlu reinvestment yang sangat besar.

> [!WARNING] Important Distinction
> **Negative FCF karena weak operations** berbeda dari **negative FCF karena profitable growth investment**.

---

# 6. Value of Operations

$$
\boxed{
V_{op}
=
\sum_{t=1}^{\infty}
\frac{FCF_t}{(1+WACC)^t}
}
$$

Value ditentukan oleh:

1. amount of expected FCF;
2. timing of FCF;
3. risk/WACC.

```text
FCF ↑ → Vop ↑
FCF arrives sooner → Vop ↑
WACC ↑ → Vop ↓
```

---

# 7. Nonconstant Growth and Horizon Value

Brigham menggunakan two-stage logic:

1. forecast FCF tahun demi tahun selama nonconstant-growth period;
2. setelah steady growth tercapai, gunakan horizon value.

$$
\boxed{
V_{op,N}
=
\frac{FCF_{N+1}}{WACC-g}
=
\frac{FCF_N(1+g)}{WACC-g}
}
$$

Disebut:

- horizon value;
- terminal value;
- continuing value.

### MagnaVision Horizon Value

Dengan:

- $FCF_{2014}=49$ million;
- $g=5\%$;
- $WACC=10.84\%$,

maka:

$$
FCF_{2015}=49(1.05)=51.45
$$

dan:

$$
V_{op,2014}
=
\frac{51.45}{0.1084-0.05}
\approx880.99
$$

million.

> [!IMPORTANT]
> Horizon value berada di **Year N**, bukan today. Ia masih harus didiskontokan kembali bersama explicit FCFs.

---

# 8. From Operations to Common Equity

Conceptual bridge:

```text
Value of Operations
+
Nonoperating Assets
=
Total Corporate Value
↓
less Debt and Preferred Claims
↓
Common Equity Value
↓
divide by Shares Outstanding
↓
Intrinsic Value per Share
```

Simplified relationship:

$$
\boxed{
Equity\ Value
=
V_{op}
+
Nonoperating\ Assets
-
Debt
-
Preferred\ Stock
}
$$

$$
\boxed{
Intrinsic\ Price\ per\ Share
=
\frac{Equity\ Value}
{Shares\ Outstanding}
}
$$

> [!WARNING] Important Distinction
> Operating liabilities seperti accounts payable sudah masuk dalam net operating capital/FCF framework, sehingga tidak otomatis dikurangkan lagi dari $V_{op}$.

---

# 9. 13.3 Value-Based Management

**Value-based management (VBM)** berarti menggunakan corporate valuation framework secara sistematis untuk memilih strategy dan operating decisions.

Pertanyaannya bukan hanya:

- apakah sales naik?
- apakah margin naik?
- apakah ROIC naik?

Tetapi:

> **Apakah intrinsic value naik?**

---

# 10. Market Value Added (MVA)

Bell Electronics:

- market value ≈ \$1.215b;
- operating capital = \$1.070b.

$$
MVA
=
1.215-1.070
=
0.145
$$

billion:

$$
\boxed{MVA=145\ million}
$$

Untuk division:

$$
\boxed{
MVA
=
Value\ of\ Operations
-
Operating\ Capital
}
$$

Positive MVA berarti management telah menciptakan value di atas capital yang diberikan investors.

---

# 11. Bell Electronics — Profitability Is Not Enough

| Metric | Memory | Instruments |
|---|---:|---:|
| Sales | \$1,000.0m | \$500.0m |
| Operating capital | \$870.0m | \$200.0m |
| EBIT | \$131.0m | \$60.0m |
| NOPAT | \$78.6m | \$36.0m |
| Operating profitability | 7.9% | 7.2% |

Memory terlihat lebih profitable. Tetapi forecast valuation menunjukkan:

| Metric | Memory | Instruments |
|---|---:|---:|
| Growth | 5.0% | 5.0% |
| WACC | 10.5% | 10.5% |
| 2015 operating capital | \$1,110.4m | \$255.3m |
| 2015 NOPAT | \$100.3m | \$45.9m |
| 2015 FCF | \$47.4m | \$33.8m |
| Horizon value | \$905.7m | \$645.1m |
| Current value of operations | \$709.6m | \$505.5m |
| MVA | **-\$160.4m** | **+\$305.5m** |

Memory lebih profitable tetapi sangat capital-intensive.

---

# 12. The Four Fundamental Value Drivers

## 12.1 Growth

$$
g=\text{sales growth}
$$

Growth biasanya membantu, **hanya jika return atas required additional capital memadai**.

## 12.2 Operating Profitability

$$
\boxed{
OP
=
\frac{NOPAT}{Sales}
}
$$

All else equal:

$$
OP\uparrow\Rightarrow Value\uparrow
$$

## 12.3 Capital Requirements

$$
\boxed{
CR
=
\frac{Operating\ Capital}{Sales}
}
$$

All else equal:

$$
CR\downarrow\Rightarrow Value\uparrow
$$

Lower CR berarti setiap dollar sales memerlukan lebih sedikit inventory, receivables, plant, equipment, dan operating capital lain.

## 12.4 WACC

All else equal:

$$
WACC\downarrow\Rightarrow Value\uparrow
$$

### Mental Model

```text
Corporate Value
├── Growth (conditional)
├── OP: higher better
├── CR: lower better
└── WACC: lower better
```

> [!IMPORTANT] Core Lesson
> **Growth tidak boleh dianalisis tanpa profitability, capital requirements, dan WACC.**

---

# 13. Expected Return on Invested Capital (EROIC)

$$
\boxed{
EROIC_N
=
\frac{NOPAT_{N+1}}{Capital_N}
}
$$

Brigham juga menunjukkan:

$$
\boxed{
EROIC_N
=
\frac{OP_{N+1}}{CR_N}
}
$$

### Bell Memory

$$
EROIC_{2015}
=
\frac{100.3(1.05)}
{1{,}110.4}
\approx9.5\%
$$

sedangkan:

$$
WACC=10.5\%
$$

Maka:

$$
EROIC<WACC
$$

Memory destroys value.

---

# 14. EROIC–WACC Spread

### Case 1

$$
EROIC>WACC
$$

→ positive economic spread → MVA positive → growth tends to create value.

### Case 2

$$
EROIC=WACC
$$

→ economic break-even → value equals capital supplied.

### Case 3

$$
EROIC<WACC
$$

→ negative spread → MVA negative → growth can destroy more value.

> [!TIP] One-Line Memory
> **Growth creates value only when return on required capital exceeds its cost.**

---

# 15. Constant-Growth Value and MVA

For a stable constant-growth firm:

$$
\boxed{
V_{op,N}
=
Capital_N
+
\frac{
Capital_N(EROIC_N-WACC)
}{
WACC-g
}
}
$$

Therefore:

$$
\boxed{
MVA_N
=
\frac{
Capital_N(EROIC_N-WACC)
}{
WACC-g
}
}
$$

So:

```text
EROIC > WACC → MVA > 0
EROIC = WACC → MVA = 0
EROIC < WACC → MVA < 0
```

The chapter also expresses value with the four value drivers:

$$
V_{op,N}
=
Capital_N
+
\frac{Sales_N(1+g)}{WACC-g}
\left[
OP-
\frac{WACC\cdot CR}{1+g}
\right]
$$

These compact equations are directly applicable once the firm reaches sufficiently stable constant growth.

---

# 16. Bell Memory — Creating Value by Using Fewer Real Resources

Initial Memory:

- inventory/sales = 30%;
- net plant/sales = 59%;
- EROIC = 9.5%;
- WACC = 10.5%;
- value of operations = \$709.6m;
- MVA = -\$160.4m.

New plan:

- inventory/sales: 30% → 20%;
- net plant/sales: 59% → 50%;
- implementation cost = \$50m.

Result:

| Metric | Preliminary | Final |
|---|---:|---:|
| Growth | 5% | 5% |
| EROIC | 9.5% | 13.0% |
| Capital | \$1,110.4m | \$867.9m |
| Value of operations | \$709.6m | \$1,157.4m |
| MVA | -\$160.4m | \$287.4m |

Value increase:

$$
1{,}157.4-709.6=447.8
$$

million.

This exceeds the \$50m implementation cost.

Causal chain:

```text
Capital requirements ↓
↓
Required reinvestment ↓
↓
FCF ↑
↓
EROIC ↑
↓
EROIC > WACC
↓
MVA ↑
```

---

# 17. Bell Instruments — Lower EROIC, Higher Value

New Instruments plan:

- growth 5% → 6%;
- inventory/sales 15% → 16%;
- direct implementation cost = \$20m.

Result:

| Metric | Preliminary | Final |
|---|---:|---:|
| Growth | 5% | 6% |
| EROIC | 18.9% | 18.6% |
| Capital | \$255.3m | \$274.3m |
| Value of operations | \$505.5m | \$570.1m |
| MVA | \$305.5m | \$370.1m |

EROIC turun sedikit, tetapi:

$$
18.6\%>10.5\%
$$

Jadi additional capital tetap menghasilkan positive spread dan total value meningkat.

> [!WARNING] Important Distinction
> **Maximizing percentage return ≠ maximizing shareholder wealth.**

---

# 18. VBM Decision Logic

```text
Forecast Sales
↓
Forecast OP
↓
Estimate Capital Requirements
↓
Calculate NOPAT
↓
Calculate Reinvestment
↓
Calculate FCF
↓
Determine WACC
↓
Discount FCF
↓
Compare Value Before vs After Strategy
↓
Choose Value-Increasing Plan
```

---

# 19. Mini Constant-Growth Illustration

Given:

- sales = \$10m;
- $OP=5\%$;
- $CR=40\%$;
- $g=6\%$;
- $WACC=10\%$.

Capital:

$$
0.40(10)=4
$$

million.

NOPAT:

$$
0.05(10)=0.5
$$

million.

Next-period NOPAT:

$$
0.5(1.06)=0.53
$$

EROIC:

$$
\frac{0.53}{4}=13.25\%
$$

Because:

$$
13.25\%>10\%
$$

the business creates value. Brigham's constant-growth framework gives value of operations of approximately \$7.25m.

---

# 20. 13.4 Managerial Behavior and Shareholder Wealth

Managers have personal goals as well as corporate responsibilities. Brigham identifies six behaviors that can reduce intrinsic value.

## 20.1 Insufficient Effort

Managers may not devote sufficient time/effort to value-adding corporate work.

## 20.2 Perquisites / Nonpecuniary Benefits

Corporate resources may be used for:

- lavish offices;
- memberships;
- art;
- personal staffs;
- corporate jets.

These benefits accrue to managers while costs are borne by shareholders.

## 20.3 Avoiding Difficult Decisions

Managers may avoid closing an inefficient plant or terminating a bad project because friends or colleagues would be hurt.

## 20.4 Too Much or Too Little Risk

Managers may reject positive-NPV risky projects because failure threatens career/reputation.

They may also take excessive risk or “throw good money after bad” to conceal earlier failure.

> [!WARNING]
> Agency conflict can produce **either excessive conservatism or excessive risk-taking**.

## 20.5 Stockpiling Free Cash Flow

Managers may hold excess FCF as marketable securities rather than distribute it.

Motives described by Brigham include:

- reducing firm risk;
- avoiding admission that growth opportunities are limited;
- prestige from large acquisitions;
- larger-firm compensation incentives.

Excess cash can tempt managers to overpay for acquisitions.

## 20.6 Withholding / Managing Information

Managers may:

- delay bad news;
- massage data;
- manage earnings;
- withhold information.

If investors distrust the information:

```text
Perceived risk ↑
→ required return ↑
→ WACC ↑
→ intrinsic value ↓
```

---

# 21. Entrenchment

Managers are **entrenched** when they perceive little chance of removal.

```text
Threat of removal ↓
→ accountability ↓
→ self-serving behavior easier
→ agency cost ↑
```

This leads directly to corporate governance.

---

# 22. 13.5 Corporate Governance

Corporate governance is the set of:

- laws;
- rules;
- procedures;

that influence company operations and managerial decisions.

The economic objective is to make managerial behavior more consistent with intrinsic-value maximization.

---

# 23. Sticks and Carrots

## Stick — Discipline / Removal

Potential discipline comes from:

- board removal;
- dissatisfied shareholders;
- hostile takeover.

## Carrot — Compensation

Manager compensation can be linked to performance so that:

```text
Firm value ↑
→ Manager reward ↑
```

Almost all governance provisions influence either **threat of removal** or **compensation**.

---

# 24. Five Internal Governance Areas

Brigham groups internal provisions into five areas.

## 24.1 Board Monitoring and Discipline

Shareholders elect directors to monitor senior management.

Problems can arise when CEO influence over nomination and board relationships reduces independence.

### Cumulative Voting

Allows shareholders to concentrate votes on selected candidates, making minority representation easier.

### Noncumulative Voting

Makes it easier for a controlling majority to elect all directors.

### Staggered / Classified Board

Only part of the board is elected each year.

This can provide continuity but makes rapid replacement/takeover more difficult.

### Inside vs Outside Directors

Inside directors know the company well but may be less independent. Outside directors can strengthen oversight, although outside status alone does not guarantee independence.

---

## 24.2 Charter Provisions and Bylaws

Corporate rules can alter:

- voting power;
- director replacement;
- takeover likelihood.

Thus legal architecture changes governance incentives.

---

## 24.3 Compensation Plans

Compensation mechanisms include salary, bonuses, stock, and stock options.

### Why Options Are Attractive

Manager wealth rises when stock price rises.

### Why Options Can Fail

1. Market-wide bull markets can reward managers even if their company underperforms.
2. Strong option incentives can encourage manipulation of accounting information or short-term stock price.

Brigham discusses alternatives such as:

- EVA-type measures;
- restricted stock;
- different vesting structures;
- indexed options;
- relative-performance evaluation.

Evidence about compensation design and performance is mixed.

> [!IMPORTANT]
> **Performance-linked pay is not automatically good governance.** Incentive design matters.

---

## 24.4 Capital Structure as Governance

Debt can reduce managerial discretion because fixed payments consume cash that might otherwise be wasted.

Higher debt also raises bankruptcy risk, strengthening discipline.

But excessive debt raises financial risk, so debt discipline is only one benefit within a wider trade-off.

---

## 24.5 Accounting Control Systems

Reliable accounting systems and internal controls increase:

- transparency;
- accountability;
- detection of misuse/manipulation.

Information quality is directly linked to valuation because uncertainty can increase required return.

---

# 25. External Governance Environment

Brigham lists factors outside direct firm control:

- regulatory environment;
- block ownership patterns;
- product-market competition;
- media;
- litigation.

### Blockholders

Large owners have greater incentive and voting power to monitor management.

### Product-Market Competition

Poor management can lose customers, margin, and market share, creating external discipline.

### Media

Media can expose managerial excess or fraud, but excessive CEO celebrity can create its own governance problems.

### Regulation and Litigation

Penalties, disclosure rules, and civil lawsuits increase expected cost of misconduct and can induce governance improvements.

---

# 26. International Governance Context

Governance systems differ across countries in:

- takeover threat;
- board composition;
- employee/bank representation;
- block ownership;
- compensation practices.

> [!NOTE] Textbook Context
> Country-specific institutional examples are historical/contextual. The durable lesson is that **ownership, board structure, regulation, takeover mechanisms, and compensation systems alter managerial incentives**.

---

# 27. Full Chapter Logic

```text
OPERATING / REAL RESOURCES
├── assets-in-place
└── growth options
        ↓
Sales
        ↓
Operating Profitability
        ↓
NOPAT
        ↓
Required Reinvestment
        ↓
FCF
        ↓
Discount at WACC
        ↓
VALUE OF OPERATIONS
        +
NONOPERATING ASSETS
        ↓
TOTAL CORPORATE VALUE
```

Then:

```text
Managers control resource allocation
        ↓
Agency conflicts can distort decisions
        ↓
Corporate governance
        ↓
alignment + monitoring + discipline
        ↓
better resource allocation
        ↓
higher intrinsic value
```

---

# 28. Important Distinctions

> [!WARNING] **Dividend ≠ source of operating value.** Dividend is a distribution mechanism; corporate valuation focuses on operating FCF.

> [!WARNING] **Operating asset ≠ nonoperating asset.** Excess financial assets are added separately.

> [!WARNING] **Positive NOPAT ≠ positive FCF.** Growth can require large reinvestment.

> [!WARNING] **Negative FCF ≠ automatically bad.** It may reflect attractive high-growth investment.

> [!WARNING] **Growth ≠ value creation.** Growth destroys value when incremental return is below WACC.

> [!WARNING] **High profitability ≠ high value.** Capital intensity matters.

> [!WARNING] **Highest EROIC ≠ highest total value.** Wealth maximization focuses on dollar value, not merely percentage return.

> [!WARNING] **Accounting profit ≠ economic value creation.** Return must compensate capital providers.

> [!WARNING] **Governance ≠ only regulation.** Internal board, compensation, capital structure, controls, and external discipline all matter.

> [!WARNING] **Performance pay ≠ automatic alignment.** Poorly designed incentives can create manipulation or risk distortions.

---

# 29. Chapter Synthesis

Chapter 13 menjawab dua linked questions:

1. **What determines corporate value?**
2. **How do we get managers to pursue that value?**

The first answer is corporate valuation:

$$
\boxed{
Value
=
PV(\text{future FCF discounted at WACC})
}
$$

The second answer is VBM + corporate governance.

Value-based management translates valuation into decisions. Corporate governance influences whether managers actually make those decisions in shareholders' interests.

The central economic rule is:

$$
\boxed{
EROIC>WACC
\Rightarrow
\text{value creation}
}
$$

and:

$$
\boxed{
EROIC<WACC
\Rightarrow
\text{value destruction}
}
$$

This is why growth, profitability, and asset size cannot be judged independently. Capital itself has an opportunity cost.

The full chapter can therefore be remembered as:

```text
Valuation tells us WHAT creates value.
VBM puts valuation into managerial decisions.
Governance helps ensure managers pursue it.
```

For CF4:

> **Financial resources create economic value only when they are converted into operating/real resources that generate risk-adjusted returns above their cost of capital, and governance determines whether those resources are allocated in the interests of capital providers.**

---

# 30. Key Concepts

| Concept | Meaning | Core Relationship |
|---|---|---|
| Corporate valuation model | PV of expected operating FCF | $V_{op}=\sum FCF_t/(1+WACC)^t$ |
| Operating assets | Resources used in business | Generate operating FCF |
| Assets-in-place | Existing productive assets | Current/future operating cash flow |
| Growth options | Future investment opportunities | Potential future FCF |
| Nonoperating assets | Assets not required for core operations | Added separately |
| NOPAT | After-tax operating profit | $EBIT(1-T)$ |
| FCF | Cash after operating reinvestment | $NOPAT-\Delta Capital$ |
| Horizon value | Value of post-forecast FCF at Year N | $FCF_{N+1}/(WACC-g)$ |
| MVA | Value above operating capital | $V_{op}-Capital$ |
| OP | NOPAT per sales dollar | $NOPAT/Sales$ |
| CR | Operating capital per sales dollar | $Capital/Sales$ |
| EROIC | Expected next-period return on beginning capital | $NOPAT_{N+1}/Capital_N$ |
| Economic spread | Return vs required return | $EROIC-WACC$ |
| VBM | Uses valuation to guide strategy | Maximize intrinsic value |
| Agency conflict | Manager interests differ from owners | Can reduce value |
| Entrenchment | Low probability manager will be removed | Weak discipline |
| Governance | Rules/incentives/monitoring affecting managers | Alignment + accountability |

---

# 31. Compression Notes

### Retained in Detail

- corporate valuation purpose;
- DDM limitations for managerial use;
- operating vs nonoperating assets;
- assets-in-place and growth options;
- NOPAT, operating capital, FCF;
- MagnaVision negative-FCF example;
- horizon value;
- value of operations to equity-value bridge;
- Bell Electronics;
- MVA;
- four value drivers;
- EROIC;
- EROIC vs WACC;
- constant-growth MVA relationship;
- Memory and Instruments strategic plans;
- six harmful managerial behaviors;
- entrenchment;
- corporate governance;
- sticks/carrots;
- five internal governance mechanisms;
- board/voting structure;
- compensation issues;
- capital structure and accounting controls;
- external governance environment.

### Condensed

- full year-by-year MagnaVision tables;
- full Bell forecast statements;
- repeated annual calculations;
- historical 2008–2009 governance statistics;
- detailed proxy-statement examples;
- academic-study citations;
- detailed country-comparison statistics;
- repeated self-tests.

### Omitted

- textbook website/tool-kit instructions;
- complete homework set;
- spreadsheet-building directions;
- further-reading bibliography;
- historical anecdotes that add no new mechanism.

> [!IMPORTANT] Reading Priority
> Jika waktu terbatas: **FCF valuation → horizon value → four value drivers → EROIC vs WACC → Bell example → six managerial behaviors → five governance mechanisms.**

---

# 32. CF4 Connection Map

```text
[[4.1 Financial Markets Structure]]
Market price / required return / WACC
                ↓
        Intrinsic Valuation
                ↓
[[4.2 Finance and Real Resources]]
Financial capital
        ↓
Operating / real resources
        ↓
NOPAT
        ↓
Required reinvestment
        ↓
FCF
        ↓
EROIC vs WACC
        ↓
Value creation / destruction
                ↓
[[4.3 Agency Theory and Governance]]
Who controls these decisions?
        ↓
Manager incentives may differ
        ↓
Governance mechanisms
        ↓
Resource allocation quality
        ↓
Intrinsic value
```

---

# 33. Quick Reading Review

- Corporate valuation model values **future FCF**, not dividends.
- It can value non-dividend firms and divisions.
- Operating assets include **assets-in-place + growth options**.
- Excess nonoperating financial assets are added separately.
- $FCF=NOPAT-Investment\ in\ Operating\ Capital$.
- Positive NOPAT can coexist with negative FCF.
- $V_{op}=\sum FCF_t/(1+WACC)^t$.
- Horizon value:
  $$
  V_{op,N}=\frac{FCF_{N+1}}{WACC-g}
  $$
- Horizon value must be discounted from Year N to today.
- VBM uses valuation to guide strategy.
- Four value drivers: **g, OP, CR, WACC**.
- Higher OP helps value.
- Lower CR helps value.
- Lower WACC helps value.
- Growth's effect is conditional.
- $EROIC_N=NOPAT_{N+1}/Capital_N$.
- $EROIC>WACC$ → value creation.
- $EROIC=WACC$ → economic break-even.
- $EROIC<WACC$ → value destruction.
- Memory shows high profitability can coexist with negative MVA.
- Instruments shows lower percentage EROIC can still produce higher total value.
- Six harmful behaviors: insufficient effort, perks, avoiding difficult decisions, inappropriate risk, FCF hoarding, poor disclosure.
- Corporate governance works through **sticks + carrots**.
- Five internal mechanisms: board, charter/bylaws, compensation, capital structure, accounting controls.
- External governance: regulation, blockholders, competition, media, litigation.
- Final mental rule:
  $$
  \boxed{
  Return\ on\ real\ resources
  >
  Cost\ of\ financial\ resources
  }
  $$

---

# 34. Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose | Chapter 13 opening |
| Corporate valuation overview | §13.1 |
| Operating/nonoperating assets | §13.2 |
| Assets-in-place / growth options | §13.2 |
| NOPAT, operating capital, FCF | §13.2 |
| MagnaVision example | §13.2 / Tables 13-1–13-2 / Figure 13-1 |
| Value of operations | Eq. 13-1 |
| Horizon value | Eq. 13-2 |
| VBM / Bell Electronics | §13.3 |
| Four value drivers | §13.3 |
| EROIC | Eq. 13-3 |
| Value-driver model | Eq. 13-4 |
| EROIC/MVA model | Eq. 13-5 |
| Memory/Instruments revised plans | §13.3 / Table 13-8 |
| Six managerial behaviors | §13.4 |
| Entrenchment | §13.4 |
| Corporate governance | §13.5 |
| Sticks and carrots | §13.5 |
| Five internal governance areas | §13.5 |
| Board/voting mechanisms | §13.5 |
| Compensation | §13.5 |
| Capital structure / controls | §13.5 |
| External governance factors | §13.5 |
| International governance context | §13.5 |

> [!NOTE] Source Boundary
> Note ini diringkas dari **Brigham & Ehrhardt, Chapter 13 — Corporate Valuation, Value-Based Management and Corporate Governance**. Silabus CF4 hanya digunakan untuk menandai relevance dan Obsidian connections. Institutional examples, legal rules, compensation practices, dan governance arrangements yang bersifat jurisdiction/time-specific diperlakukan sebagai **textbook context**, bukan current legal facts.
