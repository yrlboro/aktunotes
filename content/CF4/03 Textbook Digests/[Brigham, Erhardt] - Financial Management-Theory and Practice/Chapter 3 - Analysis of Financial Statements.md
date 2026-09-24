---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham; Michael C. Ehrhardt"
chapter: "3"
chapter_title: "Analysis of Financial Statements"
cf4_topics: ["1.4", "1.6"]
cf4_relevance: "Very High"
source_scope: "Brigham & Ehrhardt, Chapter 3 — Analysis of Financial Statements"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Brigham, FinancialStatementAnalysis, FinancialRatios, DuPont]
date_created: "2026-08-24"
status: "study-note"
---

# Brigham — Chapter 3: Analysis of Financial Statements

> [!ABSTRACT] Chapter in One View
> Chapter 3 mengubah financial statements dari **raw accounting numbers** menjadi alat diagnosis perusahaan. Pertanyaan utamanya bukan “berapa besar assets, debt, atau profit?”, melainkan **“besar dibanding apa, dan apa yang angka itu katakan tentang kondisi perusahaan?”**
>
> Brigham memulai analysis dengan statement of cash flows dan **return on invested capital (ROIC)**, lalu menggunakan ratio analysis untuk membedah area tertentu. Ratios dikelompokkan menjadi **liquidity, asset management, debt management, profitability, dan market value ratios**.
>
> Liquidity ratios menilai kemampuan memenuhi short-term obligations. Asset management ratios melihat seberapa efektif assets seperti inventory, receivables, fixed assets, dan total assets digunakan untuk menghasilkan sales. Debt management ratios melihat seberapa besar financing berasal dari creditors dan seberapa kuat earnings/cash-flow cushion untuk memenuhi fixed financial charges.
>
> Profitability ratios menunjukkan combined effects dari liquidity, asset management, dan debt policies terhadap operating results. Market value ratios kemudian menghubungkan accounting performance dengan bagaimana investors menilai company di market.
>
> Ratio tunggal hampir tidak pernah cukup. Brigham membandingkan MicroDrive dengan **industry averages**, melihat **trend over time**, menggunakan **common-size statements** dan **percentage-change analysis**, serta menguraikan ROE melalui **Du Pont system**.
>
> Du Pont adalah salah satu conceptual center chapter:
>
> $$
> ROE
> =
> Profit\ Margin
> \times
> Total\ Asset\ Turnover
> \times
> Equity\ Multiplier
> $$
>
> Artinya shareholder return dapat berasal dari operating margin, efficient asset utilization, financial leverage, atau kombinasi ketiganya.
>
> Chapter berakhir dengan warning bahwa ratio analysis memiliki limitations: accounting methods berbeda, firms dapat diversified, inflation dapat distort numbers, seasonal factors dapat memengaruhi balance-sheet amounts, dan “good/bad” ratio tidak selalu memiliki universal cutoff. Karena itu sound analysis harus melihat **numbers + comparison + causes + qualitative context**.
>
> Untuk CF4, Chapter 3 adalah `[CORE CF4]` terutama bagi [[1.6 Financial Ratios and Interpretation]], dengan supporting connection ke [[1.4 Company Account Structure]].

---

## 1. Why This Chapter Exists

Chapter 2 menunjukkan bagaimana financial statements dibangun dan bagaimana accounting information dapat diubah menjadi measures seperti operating capital, NOPAT, FCF, dan ROIC.

Chapter 3 menjawab next question:

> **Bagaimana analyst menggunakan financial statements untuk menilai strengths, weaknesses, risks, dan operating performance perusahaan?**

Nominal amounts sendirian sering misleading.

Misalnya:

- Firm A mempunyai debt \$5 million.
- Firm B mempunyai debt \$50 million.

Apakah Firm A lebih aman?

Belum tentu. Jika Firm A hanya mempunyai \$6 million assets sedangkan Firm B mempunyai \$500 million assets dan far stronger earnings, conclusion dapat terbalik.

Ratio analysis melakukan **standardization**:

```text
Raw financial amount
↓
Relate it to another meaningful amount
↓
Compare with benchmark / history
↓
Interpret economic meaning
↓
Investigate underlying cause
```

Brigham tidak memperlakukan ratio sebagai answer final. Ratio adalah **signal** yang menunjukkan area yang perlu diperiksa.

---

## 2. Chapter Map

```text
Chapter 3 — Analysis of Financial Statements
├── Initial Analytical Approach
│   ├── Examine Statement of Cash Flows
│   ├── Calculate ROIC
│   └── Begin Ratio Analysis
├── 3.2 Liquidity Ratios
│   ├── Current Ratio
│   └── Quick / Acid-Test Ratio
├── Asset Management Ratios
│   ├── Inventory Turnover
│   ├── Days Sales Outstanding
│   ├── Fixed Assets Turnover
│   └── Total Assets Turnover
├── Debt Management Ratios
│   ├── Debt Ratio
│   ├── Debt-to-Equity
│   ├── Times-Interest-Earned
│   └── EBITDA Coverage
├── Profitability Ratios
│   ├── Profit Margin
│   ├── Basic Earning Power
│   ├── Return on Assets
│   └── Return on Common Equity
├── Market Value Ratios
│   ├── Price/Earnings
│   ├── Price/Cash Flow
│   └── Market/Book
├── Trend / Comparative Analysis
│   ├── Trend Analysis
│   ├── Common-Size Analysis
│   └── Percentage-Change Analysis
├── Du Pont Equation
├── Comparative Ratios and Benchmarking
├── Uses and Limitations of Ratio Analysis
└── Looking Beyond the Numbers
```

| Textbook Section / Theme | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| Cash-flow and ROIC first look | Supporting | [[1.4 Company Account Structure]], [[1.6 Financial Ratios and Interpretation]] |
| Liquidity ratios | Very High | [[1.6 Financial Ratios and Interpretation]] |
| Asset management ratios | Very High | [[1.6 Financial Ratios and Interpretation]] |
| Debt management ratios | Very High | [[1.6 Financial Ratios and Interpretation]] |
| Profitability ratios | Very High | [[1.6 Financial Ratios and Interpretation]] |
| Market value ratios | High | [[1.6 Financial Ratios and Interpretation]] |
| Trend analysis | Very High | [[1.6 Financial Ratios and Interpretation]] |
| Common-size analysis | High | [[1.6 Financial Ratios and Interpretation]] |
| Percentage-change analysis | High | [[1.6 Financial Ratios and Interpretation]] |
| Du Pont system | Very High | [[1.6 Financial Ratios and Interpretation]] |
| Benchmarking | High | [[1.6 Financial Ratios and Interpretation]] |
| Limitations / qualitative factors | Very High | [[1.6 Financial Ratios and Interpretation]] |

---

## 3. Initial Analytical Approach

### 3.1 Examine the Statement of Cash Flows

Brigham recommends looking at the **statement of cash flows early**, especially net cash provided by operating activities.

A downward trend or negative operating cash flow can be a warning signal.

The three sections also quickly reveal different economic events:

```text
Operating activities
→ Is core business generating cash?

Investing activities
→ Is company making large investments/acquisitions?

Financing activities
→ Is company raising capital or returning capital?
```

For example, large negative investing cash flow may reflect major acquisition or capital expenditure rather than operating distress. Financing activities can show whether firm is issuing debt, issuing equity, repaying debt, or repurchasing shares.

> [!WARNING] Important Distinction
> **Negative total cash change ≠ automatically poor operating performance.**
>
> Analyst needs to identify *why* cash changed.

### 3.2 Calculate ROIC

Brigham next looks at **return on invested capital (ROIC)**, introduced in Chapter 2.

Conceptually:

$$
ROIC
=
\frac{NOPAT}{Operating\ Capital}
$$

A key value-creation comparison is:

$$
ROIC > WACC
$$

which generally indicates value creation, whereas:

$$
ROIC < WACC
$$

signals that the return generated on invested capital is below investors' required return.

ROIC gives a broad company-level view, but it does not tell analyst **why** performance is strong or weak.

That is the role of ratios.

### 3.3 Begin Ratio Analysis

Ratios extract relationships that are difficult to see from absolute figures.

Brigham's MicroDrive example repeatedly follows this logic:

```text
Calculate
↓
Compare with industry
↓
Classify as relatively strong/weak
↓
Look for underlying account causing difference
↓
Connect one ratio with another
```

> [!INFO] CF4 Connection
> `[CORE CF4]` CF4 requires not only calculating ratios but **interpreting** them. Brigham's workflow is therefore especially relevant: calculation without benchmark and explanation is incomplete.

---

## 4. Liquidity Ratios

Liquidity asks:

> **Can the firm satisfy obligations that mature in the near term?**

Current liabilities must soon be paid with cash or assets that can be converted to cash.

### 4.1 Current Ratio

$$
Current\ Ratio
=
\frac{Current\ Assets}{Current\ Liabilities}
$$

MicroDrive:

$$
Current\ Ratio
=
\frac{1{,}000}{310}
=
3.2
$$

Industry average:

$$
4.2
$$

MicroDrive therefore has a lower current-asset cushion relative to current liabilities than its industry benchmark.

### What It Measures

If current ratio = 3.2:

> company reports \$3.20 of current assets for every \$1 of current liabilities.

But this does **not** mean \$3.20 of immediately available cash.

Current assets include:

- cash;
- marketable securities;
- receivables;
- inventories.

Some are much less liquid than others.

### 4.2 Quick / Acid-Test Ratio

Because inventories are often the least liquid major current asset, Brigham removes them:

$$
Quick\ Ratio
=
\frac{Current\ Assets-Inventories}
{Current\ Liabilities}
$$

MicroDrive:

$$
Quick\ Ratio
=
\frac{1{,}000-615}{310}
=
\frac{385}{310}
\approx1.2
$$

Industry average:

$$
2.1
$$

The quick ratio therefore reinforces the liquidity concern.

### Interpretation

A low current/quick ratio can indicate short-term financial pressure.

But a high ratio is not automatically ideal. Excess cash, excessive receivables, or slow-moving inventory can raise current assets while reflecting inefficient asset management.

> [!WARNING] Important Distinction
> **Liquidity ratio measures balance-sheet coverage, not actual future cash flow certainty.**

---

## 5. Asset Management Ratios

Asset management ratios ask:

> **Has the firm invested the right amount in assets relative to sales, and is it using those assets efficiently?**

Too many assets can depress returns because capital is tied up unnecessarily.

Too few assets can cause:

- stockouts;
- lost sales;
- production bottlenecks;
- customer dissatisfaction.

The goal is therefore not “minimum assets,” but **efficient asset utilization**.

---

### 5.1 Inventory Turnover

Brigham Chapter 3 uses:

$$
Inventory\ Turnover
=
\frac{Sales}{Inventories}
$$

MicroDrive:

$$
\frac{3{,}000}{615}
=
4.9\times
$$

Industry average:

$$
9.0\times
$$

Interpretation:

MicroDrive's inventory turns over much more slowly than industry average, suggesting excessive inventory relative to sales.

Possible consequences:

- capital tied up;
- storage/insurance costs;
- risk of obsolescence;
- lower profitability.

> [!WARNING] Source-Specific Formula
> Brigham's Chapter 3 example uses **Sales / Inventory**. Other accounting texts may use **COGS / Average Inventory**.
>
> These are not numerically interchangeable. When working from Brigham, preserve Brigham's definition unless the problem explicitly specifies another formula.

---

### 5.2 Days Sales Outstanding (DSO)

DSO measures average collection period for receivables:

$$
DSO
=
\frac{Receivables}{Annual\ Sales/365}
$$

MicroDrive:

$$
DSO
=
\frac{375}{3{,}000/365}
=
45.6\ days
$$

Industry average:

$$
36\ days
$$

If customers normally should pay sooner than 45.6 days, high DSO can indicate:

- weak collection;
- customers paying late;
- overly loose credit policy;
- potentially poor receivable quality.

The firm is effectively financing customers for longer.

> [!NOTE]
> The textbook notes that using **average receivables** would generally be preferable, but year-end values are used in the MicroDrive comparison to remain consistent with the industry benchmark.

---

### 5.3 Fixed Assets Turnover

$$
Fixed\ Assets\ Turnover
=
\frac{Sales}{Net\ Fixed\ Assets}
$$

MicroDrive:

$$
\frac{3{,}000}{1{,}000}
=
3.0\times
$$

Industry average:

$$
3.0\times
$$

This suggests fixed-asset utilization is approximately in line with industry.

However, comparisons can be distorted by:

- asset age;
- depreciation methods;
- inflation;
- recent investment.

Older assets can have lower book values, mechanically raising turnover.

---

### 5.4 Total Assets Turnover

$$
Total\ Assets\ Turnover
=
\frac{Sales}{Total\ Assets}
$$

MicroDrive:

$$
\frac{3{,}000}{2{,}000}
=
1.5\times
$$

Industry average:

$$
1.8\times
$$

The firm generates less sales per dollar of total assets than industry.

When combined with earlier results:

- fixed asset turnover = normal;
- inventory turnover = poor;
- DSO = poor;
- total asset turnover = poor.

This pattern points toward **current asset management**, especially inventory and receivables, rather than fixed assets as the main problem.

### Why Ratios Must Be Read Together

This is one of Brigham's key analytical habits:

```text
Total Asset Turnover poor
↓
Check components
├── Fixed assets turnover → OK
├── Inventory turnover → Poor
└── DSO → Poor
↓
Likely excess inventory + receivables
```

Ratio analysis is diagnostic because multiple ratios can narrow the source of a problem.

---

## 6. Debt Management Ratios

Debt management has two related questions:

1. **How much debt financing does the firm use?**
2. **Can the firm safely service its debt obligations?**

Debt creates leverage.

If return earned on borrowed funds exceeds financing cost, leverage can magnify shareholder return.

But leverage also magnifies risk because creditors have contractual claims.

---

### 6.1 Debt Ratio

Brigham defines:

$$
Debt\ Ratio
=
\frac{Total\ Liabilities}{Total\ Assets}
$$

MicroDrive:

$$
Debt\ Ratio
=
\frac{1{,}064}{2{,}000}
=
53.2\%
$$

Industry average:

$$
40.0\%
$$

Interpretation:

About 53.2% of MicroDrive's asset financing is supplied by liabilities.

Creditors generally prefer lower debt ratios because more equity provides a larger cushion against losses.

Shareholders may favor leverage when it magnifies returns, but they also bear increased financial risk.

---

### 6.2 Debt-to-Equity Ratio

Brigham also gives:

$$
Debt\text{-}to\text{-}Equity
=
\frac{Total\ Liabilities}{Total\ Equity}
$$

For MicroDrive:

$$
\frac{1{,}064}{936}
\approx1.14
$$

Meaning:

> approximately \$1.14 of liabilities for every \$1 of equity.

Debt ratio and debt-to-equity contain the same underlying financing information in different form.

If \(D\) is debt ratio:

$$
Debt/Equity
=
\frac{D}{1-D}
$$

and:

$$
D
=
\frac{Debt/Equity}{1+Debt/Equity}
$$

> [!WARNING] Important Distinction
> A high leverage ratio does not automatically mean poor shareholder return. It means **more financial risk** and potentially greater amplification of both good and bad operating outcomes.

---

### 6.3 Times-Interest-Earned (TIE)

$$
TIE
=
\frac{EBIT}{Interest\ Charges}
$$

MicroDrive:

$$
TIE
=
\frac{283.8}{88}
=
3.2\times
$$

Industry average:

$$
6.0\times
$$

Interpretation:

EBIT covers annual interest about 3.2 times, compared with six times for industry.

Lower coverage means smaller earnings cushion if operating profit declines.

### Limitation

TIE uses EBIT, an accounting earnings measure.

Interest is paid in cash, while EBIT includes noncash charges such as depreciation.

Therefore Brigham also introduces broader cash-flow-oriented coverage.

---

### 6.4 EBITDA Coverage Ratio

Textbook formula:

$$
EBITDA\ Coverage
=
\frac{EBITDA+Lease\ Payments}
{Interest+Principal\ Payments+Lease\ Payments}
$$

For MicroDrive:

$$
\frac{411.8}{136}
\approx3.0\times
$$

Industry average:

$$
4.3\times
$$

The ratio attempts to capture ability to meet fixed financial charges including:

- interest;
- principal repayment;
- lease obligations.

MicroDrive's lower ratio again indicates higher financial risk relative to industry.

> [!WARNING] Important Distinction
> **Debt level** and **debt servicing capacity** are related but different.
>
> - Debt ratio asks how much financing comes from liabilities.
> - TIE / coverage asks whether operating results can support required payments.

---

## 7. Profitability Ratios

Profitability ratios show the **combined effects** of:

- liquidity management;
- asset management;
- debt management;
- operating policies.

A company can have strong sales but weak profitability if margins are thin, assets excessive, or financing costs high.

---

### 7.1 Profit Margin on Sales

$$
Profit\ Margin
=
\frac{Net\ Income\ Available\ to\ Common}
{Sales}
$$

MicroDrive:

$$
\frac{113.5}{3{,}000}
=
3.8\%
$$

Industry average:

$$
5.0\%
$$

Meaning:

MicroDrive earns about 3.8 cents of common-shareholder net income per dollar of sales.

A low margin can arise from:

- high operating costs;
- high interest expense;
- both.

This is why analyst must trace the income statement rather than stop at the ratio.

---

### 7.2 Basic Earning Power (BEP)

$$
BEP
=
\frac{EBIT}{Total\ Assets}
$$

MicroDrive:

$$
\frac{283.8}{2{,}000}
=
14.2\%
$$

Industry average:

$$
17.2\%
$$

BEP measures raw earning power of assets **before interest and taxes**.

Because financing cost and taxes are excluded, BEP is useful for comparing operating earning ability even when firms use different debt levels or face different tax situations.

> [!WARNING] Important Distinction
> **BEP ≠ ROA.**
>
> BEP uses EBIT; Brigham's ROA uses net income available to common shareholders.

---

### 7.3 Return on Total Assets (ROA)

$$
ROA
=
\frac{Net\ Income\ Available\ to\ Common}
{Total\ Assets}
$$

MicroDrive:

$$
\frac{113.5}{2{,}000}
=
5.7\%
$$

Industry average:

$$
9.0\%
$$

ROA is depressed by:

- low profit margin;
- inefficient total asset utilization;
- financing effects embedded in net income.

---

### 7.4 Return on Common Equity (ROE)

$$
ROE
=
\frac{Net\ Income\ Available\ to\ Common}
{Common\ Equity}
$$

MicroDrive:

$$
\frac{113.5}{896}
=
12.7\%
$$

Industry average:

$$
15.0\%
$$

ROE asks:

> How much accounting return is earned on common shareholders' book equity?

ROE is central because shareholder wealth is a primary corporate objective in Brigham's framework, but ROE itself must be interpreted carefully because leverage can raise it.

---

## 8. Market Value Ratios

Market value ratios combine:

- financial statement information;
- stock-market price.

They provide a signal of how investors evaluate company performance and prospects.

---

### 8.1 Price/Earnings Ratio

$$
P/E
=
\frac{Market\ Price\ per\ Share}
{Earnings\ per\ Share}
$$

MicroDrive:

$$
\frac{23.00}{2.27}
=
10.1\times
$$

Industry average:

$$
12.5\times
$$

A higher P/E generally indicates investors are willing to pay more for each dollar of current earnings, often because of expectations about growth and/or perceived risk.

MicroDrive's lower P/E suggests less favorable market expectations relative to industry.

---

### 8.2 Price/Cash Flow Ratio

$$
Price/Cash\ Flow
=
\frac{Price\ per\ Share}
{Cash\ Flow\ per\ Share}
$$

MicroDrive:

$$
\frac{23.00}{4.27}
=
5.4\times
$$

Industry average:

$$
6.8\times
$$

Cash-flow-based valuation can be useful because accounting earnings may be affected by noncash charges.

But this ratio still does not replace full cash-flow analysis.

---

### 8.3 Market/Book Ratio

$$
Market/Book
=
\frac{Market\ Price\ per\ Share}
{Book\ Value\ per\ Share}
$$

MicroDrive:

$$
\frac{23.00}{17.92}
\approx1.3\times
$$

Industry average:

$$
1.7\times
$$

Book value per share represents accounting common equity per share.

Market value reflects investors' expectations about future profitability, growth, and risk.

A company that earns high returns on equity relative to required return tends to command a higher market/book ratio.

> [!WARNING] Important Distinction
> **Book value measures accounting capital; market value reflects market expectations.**

---

## 9. Summary of MicroDrive's Ratio Diagnosis

Brigham summarizes the major ratios approximately as follows:

| Category | Ratio | MicroDrive | Industry | Textbook Assessment |
|---|---|---:|---:|---|
| Liquidity | Current ratio | 3.2 | 4.2 | Poor |
| Liquidity | Quick ratio | 1.2 | 2.1 | Poor |
| Asset management | Inventory turnover | 4.9× | 9.0× | Poor |
| Asset management | DSO | 45.6 days | 36.0 days | Poor |
| Asset management | Fixed assets turnover | 3.0× | 3.0× | OK |
| Asset management | Total assets turnover | 1.5× | 1.8× | Poor |
| Debt management | Debt ratio | 53.2% | 40.0% | High / risky |
| Debt management | TIE | 3.2× | 6.0× | Low / risky |
| Debt management | EBITDA coverage | 3.0× | 4.3× | Low / risky |
| Profitability | Profit margin | 3.8% | 5.0% | Poor |
| Profitability | BEP | 14.2% | 17.2% | Poor |
| Profitability | ROA | 5.7% | 9.0% | Poor |
| Profitability | ROE | 12.7% | 15.0% | Poor |
| Market value | P/E | 10.1× | 12.5× | Low |
| Market value | Price/Cash Flow | 5.4× | 6.8× | Low |
| Market value | Market/Book | 1.3× | 1.7× | Low |

### What the Pattern Says

The ratios tell a coherent story.

MicroDrive has:

- relatively weak liquidity;
- excessive inventory;
- slow receivable collection;
- normal fixed-asset utilization;
- weak total asset turnover;
- above-average leverage;
- weak interest/fixed-charge coverage;
- below-average profitability;
- below-average market valuation multiples.

This is much more informative than saying merely:

> “ROE is 12.7%.”

The purpose of ratio analysis is to build a **connected diagnosis**.

---

## 10. Trend Analysis

A ratio's current level matters, but direction also matters.

**Trend analysis** examines ratios over time.

Brigham's Figure 3-1 shows MicroDrive's ROE declining since 2007 while the industry average remains relatively stable.

This changes interpretation.

If a company has ROE slightly below industry but rapidly improving, that is a different situation from a company with the same current ROE but persistent decline.

Mental model:

```text
Current ratio level
+
Historical direction
+
Industry direction
=
Much stronger interpretation
```

> [!WARNING] Important Distinction
> **Cross-sectional comparison** asks “How are we versus others now?”
>
> **Trend analysis** asks “Are we getting better or worse over time?”

---

## 11. Common-Size Analysis

In **common-size analysis**:

- every income-statement item is divided by sales;
- every balance-sheet item is divided by total assets.

### Common-Size Income Statement

$$
Common\text{-}Size\ IS\ Item
=
\frac{Item}{Sales}
$$

Sales becomes 100%.

This allows analysts to see cost structure and margins independent of company size.

Brigham's MicroDrive comparison shows:

- EBIT slightly below industry as percentage of sales;
- interest expense slightly above industry;
- combined effect produces lower profit margin.

### Common-Size Balance Sheet

$$
Common\text{-}Size\ BS\ Item
=
\frac{Item}{Total\ Assets}
$$

Total assets becomes 100%.

MicroDrive's common-size balance sheet reveals:

- accounts receivable significantly above industry;
- inventory significantly above industry;
- greater use of debt.

These observations reinforce the ratio diagnosis.

### Why Common Size Is Useful

Suppose Firm A has \$1 billion inventory and Firm B has \$100 million.

Absolute comparison says A has more inventory.

Common-size analysis asks:

> Inventory is what percentage of each firm's asset base?

That is much more useful when companies differ in size.

---

## 12. Percentage-Change Analysis

**Percentage-change analysis** calculates growth rates for statement items relative to a base year.

General form:

$$
Percentage\ Change
=
\frac{Current-Base}{Base}
\times100\%
$$

Brigham's MicroDrive example shows:

- sales increased about 5.3%;
- EBITDA increased about 8.7%;
- interest expense increased about 46.7%;
- net income growth became negative.

### Meaning

At first glance, stronger EBITDA sounds positive.

But percentage-change analysis identifies the key offsetting problem:

> **interest expense increased far faster than operations improved.**

Thus decline in net income was driven largely by financing cost.

This demonstrates why analyst should trace movement through the entire statement.

---

## 13. Du Pont Equation

The Du Pont system explains **why ROE is what it is**.

### 13.1 Basic Identity

Start with:

$$
ROE
=
\frac{Net\ Income}{Common\ Equity}
$$

Multiply by identities equal to 1:

$$
ROE
=
\frac{Net\ Income}{Sales}
\times
\frac{Sales}{Total\ Assets}
\times
\frac{Total\ Assets}{Common\ Equity}
$$

Therefore:

$$
\boxed{
ROE
=
Profit\ Margin
\times
Total\ Asset\ Turnover
\times
Equity\ Multiplier
}
$$

### 13.2 Three Economic Drivers

#### 1. Profit Margin

$$
\frac{Net\ Income}{Sales}
$$

asks:

> How much profit is produced from each dollar of sales?

Driver: operating cost control, pricing, financing cost, taxes.

#### 2. Total Asset Turnover

$$
\frac{Sales}{Assets}
$$

asks:

> How efficiently are assets used to generate revenue?

Driver: inventory, receivables, fixed assets, asset intensity.

#### 3. Equity Multiplier

$$
\frac{Assets}{Common\ Equity}
$$

asks:

> How much asset base is supported per dollar of common equity?

Higher multiplier generally means greater leverage.

### Mental Model

```text
ROE
├── Profitability of sales
│   └── Profit Margin
├── Efficiency of assets
│   └── Total Asset Turnover
└── Financial leverage
    └── Equity Multiplier
```

### 13.3 Why Du Pont Matters

Two firms can have the same ROE for very different reasons.

Example:

**Firm A**

- high margin;
- efficient assets;
- low leverage.

**Firm B**

- low margin;
- weak asset efficiency;
- high leverage.

Both may report 15% ROE, but Firm B's performance is more dependent on debt.

> [!WARNING] Important Distinction
> **High ROE ≠ automatically strong operations.**
>
> ROE can be boosted by leverage.

### 13.4 Management Use

Du Pont converts an outcome metric into managerial levers:

```text
Want higher ROE?
↓
Improve margin
OR
Improve asset turnover
OR
Increase leverage
```

But the third route increases financial risk, so it cannot be treated as equivalent to operational improvement.

---

## 14. Comparative Ratios and Benchmarking

Ratio has little meaning without comparison.

Brigham uses several benchmarks:

1. company's own history;
2. industry average;
3. selected competitors;
4. high-performing peer group.

**Benchmarking** means comparing a firm with a group of similar successful companies.

The aim is not merely to know whether company is “above average,” but to identify operational practices or financial structures that explain the difference.

### Selecting the Benchmark

A useful benchmark should be economically comparable.

Potential issues:

- different industries;
- different product mix;
- different business models;
- different accounting methods;
- different geographic exposure;
- different life-cycle stage.

A conglomerate may not have one meaningful industry average because different divisions operate in different sectors.

---

## 15. Uses and Limitations of Ratio Analysis

Ratio analysis is powerful precisely because it compresses information.

But compression loses detail.

Brigham therefore emphasizes limitations.

### 15.1 Many Large Firms Operate in Multiple Industries

A diversified company may not fit a single industry benchmark.

An “industry average” can therefore be misleading.

### 15.2 Average Is Not Necessarily Optimal

Being above or below average does not automatically mean good or bad.

For example:

- unusually high current ratio may reflect excessive idle assets;
- unusually high inventory turnover may indicate insufficient inventory and lost sales.

Benchmark must be interpreted economically.

### 15.3 Inflation Can Distort Accounting Numbers

Balance-sheet values, especially historical-cost fixed assets, may reflect prices from different periods.

This can distort comparisons across firms and over time.

### 15.4 Seasonal Factors

Year-end balance-sheet amounts may not represent normal throughout-year levels.

Retailers, for example, can have very different inventory and receivable levels depending on season.

### 15.5 Window Dressing

Managers can sometimes temporarily alter financial statement positions near reporting date to make ratios appear stronger.

Thus point-in-time ratios should not automatically be treated as persistent economic reality.

### 15.6 Different Accounting Practices

Accounting choices can affect:

- inventory;
- depreciation;
- asset values;
- income;
- equity.

Two economically similar firms may therefore have different ratios.

### 15.7 Ratio Definitions Differ

Different sources may calculate “the same” ratio differently.

Examples include:

- debt defined as interest-bearing debt vs total liabilities;
- inventory turnover using sales vs COGS;
- ending balances vs average balances.

> [!IMPORTANT]
> Before comparing ratios from different sources, verify that **definitions are consistent**.

### 15.8 Difficult to Define Universal Good/Bad Cutoffs

Some ratios have obvious directional concerns, but many require context.

A high debt ratio may be normal for one business model and dangerous for another.

### 15.9 Strong and Weak Ratios Can Offset Each Other

A company may have:

- excellent liquidity;
- poor profitability;
- strong asset turnover;
- dangerous leverage.

Therefore one ratio cannot summarize overall health.

### 15.10 Ratios Are Based on Historical Accounting Data

Ratios mostly describe past/current reported conditions.

Investors care about future cash flows.

Analysis therefore must incorporate qualitative and forward-looking information.

---

## 16. Looking Beyond the Numbers

Brigham explicitly ends the analytical discussion by saying sound financial analysis requires more than ratio calculation.

Qualitative questions include:

### Customer / Product Concentration

- Is a large portion of revenue tied to one customer?
- Is company dependent on one key product?

Concentration increases risk.

### Supplier Dependence

Does company rely heavily on a single supplier?

Supply disruption can threaten operations even when current ratios look healthy.

### International Exposure

What percentage of business is overseas?

Potential exposures include:

- exchange-rate volatility;
- political instability.

### Competition

What are competitors likely to do?

How likely are new competitors to enter?

Historical margins may not survive structural competition.

### Product Pipeline

Does future success depend on products that are not yet proven?

### Legal and Regulatory Environment

Regulation can materially change:

- costs;
- permitted activities;
- product economics;
- future cash flows.

### The Analytical Lesson

```text
Financial Ratios
+
Trend
+
Benchmark
+
Accounting Quality
+
Business Model
+
Competition
+
Customer/Supplier Risk
+
Regulation
=
Financial Analysis
```

Ratio analysis is therefore a starting framework for questions—not a mechanical scoring system.

---

## 17. Integrated MicroDrive Diagnosis

Brigham's MicroDrive example can be condensed into one causal story.

### Step 1 — Liquidity Is Weak Relative to Industry

Current and quick ratios are below benchmark.

But rather than concluding immediately that MicroDrive simply needs more current assets, inspect composition.

### Step 2 — Inventory and Receivables Are Too Large

Inventory turnover is low and DSO high.

Thus a significant portion of current assets is tied up in assets that are not converting efficiently into cash.

### Step 3 — Fixed Assets Are Not the Main Problem

Fixed assets turnover matches industry.

Therefore excess asset investment is concentrated more heavily in working-capital accounts.

### Step 4 — Total Asset Efficiency Suffers

Because inventory and receivables are high:

$$
Total\ Asset\ Turnover
\downarrow
$$

This contributes to weak ROA and ROE.

### Step 5 — Leverage Is High

Debt ratio is above industry.

This creates:

- greater creditor risk;
- higher interest expense;
- lower coverage.

### Step 6 — Profitability Is Weak

Profit margin, BEP, ROA, and ROE are below industry.

Common-size and percentage-change analysis show that sharply rising interest expense is a major reason net income deteriorated even though EBITDA improved.

### Step 7 — Market Recognizes the Weakness

P/E, price/cash flow, and market/book are all below industry averages.

Investors therefore place lower valuation multiples on MicroDrive.

### Full Chain

```text
Excess inventory + slow receivables
↓
Poor asset utilization
↓
Capital tied up
↓
More financing need
↓
High debt / interest expense
↓
Weak coverage + lower net margin
↓
Weak ROA / ROE
↓
Lower market valuation ratios
```

This is the core value of the chapter: **ratios become powerful when connected into a business story.**

---

## Chapter Synthesis

Chapter 3 is not fundamentally a chapter about memorizing fractions. It is a chapter about **diagnosis**.

Financial statements contain large amounts of data, but absolute numbers have limited meaning without scale and context. Ratios standardize relationships so analyst can ask specific questions about liquidity, asset utilization, leverage, profitability, and market expectations.

Yet each ratio only observes one angle.

Liquidity can look adequate while inventory quality is poor. High ROE can result from excessive leverage rather than strong operations. Strong EBITDA growth can coexist with declining net income if interest expense explodes. A market multiple can be low because investors expect weak growth, perceive high risk, or both.

Brigham therefore builds analysis progressively:

```text
Cash Flow
↓
ROIC
↓
Individual Ratios
↓
Industry Comparison
↓
Trend Analysis
↓
Common-Size / Percentage Change
↓
Du Pont Decomposition
↓
Benchmarking
↓
Qualitative Judgment
```

The central lesson is:

> **Never stop at the calculated ratio. Ask what caused it, whether it is improving, how it compares, whether the accounting data are comparable, and what business risk lies behind the number.**

That is the difference between calculating financial ratios and actually analyzing financial statements.

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Ratio analysis | Standardizes relationships among financial numbers | Turns raw statements into analytical signals | [[1.6 Financial Ratios and Interpretation]] |
| Liquidity | Ability to meet near-term obligations | Short-term financial health | [[1.6 Financial Ratios and Interpretation]] |
| Current ratio | Current assets / current liabilities | Broad short-term coverage | [[1.6 Financial Ratios and Interpretation]] |
| Quick ratio | Current assets less inventory / current liabilities | More stringent liquidity measure | [[1.6 Financial Ratios and Interpretation]] |
| Inventory turnover | Sales / inventory in Brigham Ch. 3 | Inventory utilization | [[1.6 Financial Ratios and Interpretation]] |
| DSO | Receivables / average daily sales | Collection speed | [[1.6 Financial Ratios and Interpretation]] |
| Asset turnover | Sales relative to assets | Asset-use efficiency | [[1.6 Financial Ratios and Interpretation]] |
| Debt ratio | Total liabilities / total assets | Degree of creditor financing | [[1.6 Financial Ratios and Interpretation]] |
| TIE | EBIT / interest | Earnings cushion for interest | [[1.6 Financial Ratios and Interpretation]] |
| EBITDA coverage | Cash-flow-oriented fixed-charge coverage | Broader debt-service capacity | [[1.6 Financial Ratios and Interpretation]] |
| Profit margin | NI to common / sales | Profitability per sales dollar | [[1.6 Financial Ratios and Interpretation]] |
| BEP | EBIT / total assets | Operating earning power before financing/tax | [[1.6 Financial Ratios and Interpretation]] |
| ROA | NI to common / total assets | Return generated relative to asset base | [[1.6 Financial Ratios and Interpretation]] |
| ROE | NI to common / common equity | Accounting return to common shareholders | [[1.6 Financial Ratios and Interpretation]] |
| Market value ratios | Price relative to earnings/cash flow/book | Market assessment of prospects/risk | [[1.6 Financial Ratios and Interpretation]] |
| Trend analysis | Compare ratio through time | Detect improvement/deterioration | [[1.6 Financial Ratios and Interpretation]] |
| Common-size analysis | Normalize IS by sales and BS by assets | Cross-size and structural comparison | [[1.6 Financial Ratios and Interpretation]] |
| Percentage-change analysis | Growth from base period | Identifies drivers of change | [[1.6 Financial Ratios and Interpretation]] |
| Du Pont system | Decomposes ROE into margin × turnover × leverage | Explains sources of shareholder return | [[1.6 Financial Ratios and Interpretation]] |
| Benchmarking | Compare with similar successful firms | Provides meaningful performance standard | [[1.6 Financial Ratios and Interpretation]] |

---

## Compression Notes

### Retained in Detail

- statement-of-cash-flows-first analytical approach;
- ROIC as broad performance measure;
- purpose of ratio analysis;
- all major Brigham ratio categories;
- current and quick ratios;
- inventory turnover and DSO;
- fixed and total asset turnover;
- debt ratio and debt-to-equity relationship;
- TIE and EBITDA coverage;
- profit margin, BEP, ROA, ROE;
- P/E, price/cash flow, market/book;
- MicroDrive calculations and industry comparisons;
- connected diagnosis of MicroDrive;
- trend analysis;
- common-size analysis;
- percentage-change analysis;
- Du Pont identity and interpretation;
- benchmarking;
- major limitations of ratio analysis;
- qualitative factors beyond the numbers.

### Condensed

- repeated MicroDrive line-item financial statements;
- detailed descriptions of spreadsheet implementation;
- repeated Self-Test questions;
- extended web/database instructions;
- multiple homework problems using the same ratio mechanics;
- individual market-data provider instructions;
- repeated discussions of industry averages after the main lesson is established;
- lengthy examples where the analytical lesson duplicates MicroDrive.

### Omitted / Beyond CF4

- textbook website instructions;
- Thomson ONE navigation;
- spreadsheet-file directions;
- full end-of-chapter problem sets;
- full Jimenez/Joshua & White exercise data;
- detailed Mini Case questions;
- online database exercises;
- company-specific data that do not add a new conceptual lesson.

---

## CF4 Connection Map

```text
Financial Statements
        ↓
[[1.4 Company Account Structure]]
        ↓
Raw Accounting Numbers
        ↓
Ratios
├── Liquidity
├── Asset Management
├── Debt Management
├── Profitability
└── Market Value
        ↓
[[1.6 Financial Ratios and Interpretation]]
        ↓
Trend + Common Size + Percentage Change
        ↓
Du Pont
        ↓
Benchmarking
        ↓
Qualitative Context
        ↓
Financial Diagnosis
```

---

## Quick Reading Review

- Ratio analysis asks **“relative to what?”**, not merely “how large?”
- Brigham recommends first examining operating cash flow and ROIC before drilling into ratios.
- Liquidity ratios measure near-term obligation coverage.
- Current ratio:
  $$
  \frac{Current\ Assets}{Current\ Liabilities}
  $$
- Quick ratio removes inventory from current assets.
- Asset management ratios ask whether assets are used efficiently relative to sales.
- Brigham Chapter 3 uses:
  $$
  Inventory\ Turnover=\frac{Sales}{Inventory}
  $$
  so do not silently replace it with another textbook definition.
- DSO converts receivables into approximate collection days.
- Fixed asset turnover normal but total asset turnover poor can point toward working-capital inefficiency.
- Debt ratio measures creditor financing; TIE and EBITDA coverage measure ability to service financial obligations.
- Profitability ratios reflect combined effects of operating, asset, and financing policies.
- BEP uses EBIT, while ROA and ROE use net income available to common in Brigham's presentation.
- Market value ratios connect accounting performance with investor expectations.
- Trend analysis adds direction; industry comparison adds relative position.
- Common-size income statement uses sales = 100%; common-size balance sheet uses total assets = 100%.
- Percentage-change analysis identifies which accounts are growing or shrinking fastest.
- Du Pont:
  $$
  ROE=Profit\ Margin\times Total\ Asset\ Turnover\times Equity\ Multiplier
  $$
- High ROE can result from high leverage; it does not automatically prove excellent operations.
- Benchmarking compares company performance with similar successful firms.
- Ratio definitions can differ across sources, so verify numerator, denominator, and use of average vs ending balances.
- Ratios are signals, not diagnoses; sound analysis also considers accounting choices, seasonality, business model, customers, suppliers, competition, international exposure, and regulation.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Initial analytical approach: cash flows, ROIC, ratios | Brigham & Ehrhardt, Chapter 3 opening analysis |
| Current and quick ratios | Chapter 3, Liquidity Ratios |
| Inventory turnover, DSO, fixed/total asset turnover | Chapter 3, Asset Management Ratios |
| Debt ratio, debt-to-equity, TIE, EBITDA coverage | Chapter 3, Debt Management Ratios |
| Profit margin, BEP, ROA, ROE | Chapter 3, Profitability Ratios |
| P/E, price/cash flow, market/book | Chapter 3, Market Value Ratios |
| MicroDrive summary ratios | Chapter 3, summary table of financial ratios |
| Trend analysis | Chapter 3, Trend Analysis discussion / Figure 3-1 |
| Common-size statements | Chapter 3, Common-Size Analysis discussion |
| Percentage-change analysis | Chapter 3, Percentage-Change Analysis discussion |
| Du Pont system | Chapter 3, Du Pont Equation/System |
| Benchmarking | Chapter 3, Comparative Ratios and Benchmarking |
| Ratio-analysis limitations | Chapter 3, Uses and Limitations of Ratio Analysis |
| Qualitative factors | Chapter 3, Looking Beyond the Numbers |
| Chapter synthesis | Chapter 3 summary |

> [!NOTE] Source Boundary
> Isi note ini diringkas dari **Brigham & Ehrhardt Chapter 3 — Analysis of Financial Statements**. Silabus CF4 digunakan hanya untuk menentukan relevance dan depth. Formula presentation mengikuti chapter ini, termasuk penggunaan **Sales / Inventory** pada inventory turnover MicroDrive dan year-end balance-sheet values pada beberapa textbook comparisons. Formula dari textbook lain tidak disubstitusikan secara diam-diam.
