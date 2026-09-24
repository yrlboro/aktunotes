---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham; Michael C. Ehrhardt"
chapter: "2"
chapter_title: "Financial Statements, Cash Flow, and Taxes"
cf4_topics: ["1.1", "1.2", "1.4", "1.5"]
cf4_relevance: "Very High"
source_scope: "Brigham & Ehrhardt, Chapter 2 — Sections 2.1–2.9 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Brigham, FinancialStatements, CashFlow, Taxes]
date_created: "2026-08-24"
status: "study-note"
---

# Brigham — Chapter 2: Financial Statements, Cash Flow, and Taxes

> [!ABSTRACT] Chapter in One View
> Chapter ini menjembatani **accounting numbers** dengan **corporate-finance meaning**. Brigham tidak hanya menjelaskan apa yang ada di balance sheet, income statement, statement of stockholders’ equity, dan statement of cash flows, tetapi juga menunjukkan bagaimana finance manager memodifikasi accounting data untuk menilai **operating performance, capital invested, free cash flow, dan value creation**.
>
> Empat basic financial statements dalam annual report adalah **balance sheet, income statement, statement of stockholders’ equity, dan statement of cash flows**. Balance sheet adalah snapshot financial position pada satu tanggal; income statement menunjukkan operating results selama suatu periode; statement of stockholders’ equity menjelaskan perubahan equity; cash flow statement menjelaskan actual cash sources and uses.
>
> Chapter terus mengingatkan bahwa **accounting profit ≠ cash flow**. Depreciation dan amortization mengurangi accounting profit tetapi bukan current cash outflow, sehingga net cash flow dapat berbeda dari net income.
>
> Untuk corporate-finance analysis, Brigham kemudian memisahkan **operating assets/liabilities** dari financial claims. Dari sini dibangun konsep **net operating working capital (NOWC)**, **total net operating capital**, **NOPAT**, dan akhirnya **free cash flow (FCF)**.
>
> Core relationship-nya:
>
> $$
> NOPAT = EBIT(1-T)
> $$
>
> $$
> FCF = NOPAT - \text{Net Investment in Operating Capital}
> $$
>
> FCF adalah cash flow yang tersedia untuk seluruh investors setelah perusahaan melakukan investment yang diperlukan untuk mempertahankan operasi.
>
> Chapter juga memperkenalkan **Market Value Added (MVA)** sebagai cumulative value created relative to investor-supplied capital dan **Economic Value Added (EVA)** sebagai annual economic profit setelah membebankan cost of all capital, termasuk equity.
>
> Bagian terakhir menjelaskan U.S. federal income tax system dalam konteks textbook: progressive corporate/personal taxation, marginal vs average rates, taxation of interest/dividends/capital gains, tax treatment debt vs equity, tax-loss carrybacks/carryforwards, dan S corporations. Karena aturan pajak bersifat jurisdiction- dan time-specific, detail rate/treatment historis harus dibaca sebagai `[TEXTBOOK CONTEXT]`.
>
> Untuk CF4, Chapter 2 sangat penting terutama bagi [[1.1 Taxation Principles]], [[1.2 Financial Reporting Requirements]], [[1.4 Company Account Structure]], dan [[1.5 Financial Statements Construction]].

---

## 1. Why This Chapter Exists

Chapter 1 menjelaskan bahwa company value bergantung pada kemampuan menghasilkan cash flows. Chapter 2 kemudian menjawab:

> **Dari mana kita memperoleh informasi tentang financial position, operating performance, cash generation, dan taxes perusahaan?**

Jawabannya dimulai dari annual report dan financial statements. Tetapi Brigham bergerak satu langkah lebih jauh daripada introductory accounting.

Financial statements adalah **raw accounting information**. Corporate finance perlu mengubah raw information tersebut menjadi economic measures yang lebih directly related to value.

Mental model chapter:

```text
Annual Report
↓
Financial Statements
↓
Accounting Profit + Financial Position
↓
Separate Operating vs Financing Items
↓
NOPAT + Operating Capital
↓
Free Cash Flow
↓
MVA / EVA
↓
Value Creation
```

Taxes masuk di seluruh process karena after-tax cash flows—bukan pretax accounting numbers—yang ultimately tersedia kepada investors.

---

## 2. Chapter Map

```text
Chapter 2 — Financial Statements, Cash Flow, and Taxes
├── 2.1 The Annual Report
├── 2.2 The Balance Sheet
│   ├── Assets
│   ├── Liabilities and Equity
│   ├── Book Values vs Market Values
│   └── Accounting choices and interpretation
├── 2.3 The Income Statement
│   ├── Revenues and operating costs
│   ├── Depreciation and amortization
│   ├── EBIT, EBT, taxes, net income
│   ├── EPS
│   └── EBITDA / accounting interpretation
├── 2.4 Statement of Stockholders’ Equity
│   └── Retained earnings bridge
├── 2.5 Net Cash Flow
│   ├── Noncash charges
│   └── Net income vs cash flow
├── 2.6 Statement of Cash Flows
│   ├── Operating activities
│   ├── Investing activities
│   └── Financing activities
├── 2.7 Modifying Accounting Data for Managerial Decisions
│   ├── Operating current assets
│   ├── Operating current liabilities
│   ├── Net operating working capital
│   ├── Total net operating capital
│   ├── NOPAT
│   ├── Net investment in operating capital
│   ├── Free cash flow
│   └── Uses of FCF
├── 2.8 MVA and EVA
│   ├── Market Value Added
│   └── Economic Value Added
└── 2.9 The Federal Income Tax System
    ├── Corporate taxes
    ├── Interest and dividends
    ├── Loss carrybacks/carryforwards
    ├── S corporations
    └── Personal taxes / capital gains
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 2.1 Annual Report | High | [[1.2 Financial Reporting Requirements]] |
| 2.2 Balance Sheet | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 2.3 Income Statement | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 2.4 Stockholders’ Equity | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 2.5 Net Cash Flow | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 2.6 Statement of Cash Flows | Very High | [[1.4 Company Account Structure]] |
| 2.7 Managerial Modifications | High supporting | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 2.8 MVA & EVA | Supporting / corporate-finance bridge | [[1.4 Company Account Structure]] |
| 2.9 Federal Income Tax System | Very High | [[1.1 Taxation Principles]] |

---

## 3. 2.1 The Annual Report

### Intuisi

Outside investors tidak memiliki access ke daily internal records perusahaan. Annual report menjadi salah satu alat utama untuk memahami:

- apa yang terjadi selama tahun tersebut;
- current financial condition;
- important developments;
- management’s view mengenai future operations;
- accounting information perusahaan.

Brigham menjelaskan annual report sebagai report yang diberikan corporation kepada stockholders. Report biasanya mencakup narrative dari management serta financial statements.

### Four Basic Financial Statements

Chapter berfokus pada empat statements:

1. **Balance sheet**
2. **Income statement**
3. **Statement of stockholders’ equity**
4. **Statement of cash flows**

Masing-masing menjawab question yang berbeda:

| Statement | Core Question |
|---|---|
| Balance sheet | Apa resources dan claims perusahaan pada tanggal tertentu? |
| Income statement | Berapa accounting profit yang dihasilkan selama period? |
| Stockholders’ equity | Mengapa owners’ claim berubah? |
| Cash flows | Dari mana cash datang dan ke mana digunakan? |

### Why Annual Reports Matter to Finance

Finance manager dan investor tidak cukup membaca one number such as net income. Mereka perlu menilai:

- profitability;
- capital structure;
- liquidity;
- investment in assets;
- cash generation;
- taxes;
- future value creation.

> [!INFO] CF4 Connection
> `[CORE CF4]` Annual report discussion mendukung [[1.2 Financial Reporting Requirements]]. Brigham memberi investor-oriented framing: financial statements menyediakan information untuk mengevaluasi historical performance dan prospects.

---

## 4. 2.2 The Balance Sheet

### 4.1 Basic Structure

Balance sheet menunjukkan company’s financial position pada **specific point in time**.

Core relationship:

$$
Assets = Liabilities + Equity
$$

Assets adalah resources perusahaan. Liabilities dan equity adalah claims terhadap resources tersebut.

Brigham menggunakan MicroDrive sebagai continuing example. Pada 2010:

- total assets = \$2,000 million;
- total liabilities = \$1,064 million;
- preferred stock = \$40 million;
- common equity = \$896 million.

Balance:

$$
2{,}000 = 1{,}064 + 40 + 896
$$

### 4.2 Current Assets

MicroDrive menunjukkan:

- cash and equivalents;
- short-term investments;
- accounts receivable;
- inventories.

**Cash and equivalents** adalah cash serta highly liquid near-cash instruments.

**Short-term investments** adalah marketable securities yang bukan core operating cash.

**Accounts receivable** muncul ketika sales dilakukan tetapi cash belum diterima.

**Inventories** mewakili investment dalam raw materials, work-in-process, dan finished goods.

> [!WARNING] Important Distinction
> **Asset ≠ cash.**
>
> Accounts receivable dan inventory adalah assets, tetapi tidak dapat digunakan untuk membayar obligations seketika seperti cash.

### 4.3 Inventory Accounting Choice

Brigham menggunakan FIFO vs LIFO untuk menunjukkan bahwa accounting method dapat materially affect reported financial statements.

Dalam rising-price environment, textbook menjelaskan bahwa FIFO pada MicroDrive menghasilkan:

- higher ending inventory;
- lower cost of goods sold;
- higher reported profits;

dibanding LIFO.

Lesson utama bukan sekadar FIFO/LIFO mechanics, melainkan:

> **Two economically similar firms can report different accounting numbers because accounting choices differ.**

Hal ini penting ketika membandingkan companies.

> [!NOTE] [TEXTBOOK CONTEXT]
> Treatment LIFO/FIFO di sini mengikuti U.S. textbook context. Fokus condensed note adalah effect accounting method terhadap statement interpretation, bukan current cross-jurisdiction eligibility of LIFO.

### 4.4 Plant and Equipment

Long-term asset purchase tidak langsung dibebankan seluruhnya sebagai current expense. Cost dialokasikan over useful life melalui **depreciation**.

Jika company menyajikan gross PP&E dan accumulated depreciation:

$$
Net\ PP\&E
=
Gross\ PP\&E
-
Accumulated\ Depreciation
$$

Depreciation adalah accounting allocation of asset cost—not current cash payment.

### 4.5 Current Liabilities

Examples:

- accounts payable;
- notes payable;
- accruals.

**Accounts payable** biasanya timbul dari purchases on credit.

**Notes payable** adalah interest-bearing short-term borrowing.

**Accruals** mencerminkan obligations yang telah incurred tetapi belum dibayar, misalnya wages atau taxes.

### 4.6 Long-Term Debt and Equity

Long-term bonds adalah contractual claims dengan priority sebelum equity.

Stockholders memiliki residual claim. Mereka dibayar setelah creditors dan preferred claims dipenuhi.

### 4.7 Book Value vs Market Value

Balance sheet values adalah **book values** berdasarkan accounting records.

Market values adalah current values determined in market.

> [!WARNING] Important Distinction
> **Book value ≠ market value.**
>
> Historical-cost accounting dan changes in economic prospects dapat membuat market value jauh berbeda dari reported book value.

Ini sangat penting untuk corporate finance karena value maximization berkaitan dengan economic/market value, bukan sekadar book accounting amount.

---

## 5. 2.3 The Income Statement

### 5.1 What the Income Statement Measures

Income statement menunjukkan **results of operations over a period**.

Simplified sequence:

```text
Sales
− Operating costs
− Depreciation & amortization
= EBIT
− Interest
= Earnings before taxes
− Taxes
= Net income
```

### 5.2 EBIT

**Earnings before interest and taxes (EBIT)** merefleksikan operating earnings sebelum financing cost dan taxes.

Ini akan menjadi important input untuk NOPAT.

### 5.3 Depreciation and Amortization

**Depreciation** adalah noncash charge untuk tangible long-term assets.

**Amortization** adalah analogous noncash charge untuk certain intangible assets.

Keduanya reduce reported income tetapi tidak require cash payment pada saat expense recognized.

### 5.4 EBITDA

Chapter discusses **EBITDA**:

$$
EBITDA
=
EBIT
+
Depreciation
+
Amortization
$$

EBITDA measures earnings before interest, taxes, depreciation, and amortization.

Karena D&A are noncash charges, EBITDA sering digunakan sebagai rough operating cash-generation indicator.

Namun:

> [!WARNING] Important Distinction
> **EBITDA ≠ cash flow.**
>
> EBITDA ignores:
> - taxes;
> - working-capital investment;
> - capital expenditures;
> - financing cash flows.
>
> Karena itu high EBITDA tidak berarti company menghasilkan large free cash flow.

### 5.5 Interest and Net Income

Interest expense depends on financing decisions. Two firms dengan identical operations tetapi different debt levels dapat menghasilkan different net incomes.

Ini menjadi alasan Brigham nanti memperkenalkan NOPAT untuk menilai operating performance independent of financing choices.

### 5.6 EPS

Income statement dapat menunjukkan earnings per share:

$$
EPS
=
\frac{\text{Net income available to common shareholders}}
{\text{Common shares outstanding}}
$$

EPS penting bagi shareholder analysis, tetapi sama seperti net income, EPS is accounting-based dan dipengaruhi financing choices.

### Core Lesson

```text
Operations
↓
EBIT
↓
Financing choice creates interest
↓
Taxes
↓
Net income
```

Jadi net income adalah combined result dari:

- operating performance;
- financing structure;
- tax effects.

---

## 6. 2.4 Statement of Stockholders’ Equity

### 6.1 Purpose

Statement ini menunjukkan how equity accounts berubah dari beginning ke ending period.

Dalam simplified MicroDrive example:

$$
RE_{end}
=
RE_{begin}
+
Net\ Income
-
Dividends
$$

Using textbook numbers:

$$
766
=
710
+
113.5
-
57.5
$$

(all figures in millions).

### 6.2 Retained Earnings

**Retained earnings** adalah cumulative accounting earnings yang tidak dibagikan sebagai dividends.

Tetapi Brigham memberikan warning yang sangat penting:

> [!DANGER] Retained Earnings ≠ Cash
> Retained earnings adalah **claim against assets**, bukan asset dan bukan cash reserve.
>
> Earnings retained over many years mungkin telah digunakan untuk:
> - inventory;
> - receivables;
> - plant;
> - equipment;
> - other assets.
>
> Karena itu perusahaan dapat memiliki large retained earnings tetapi little cash.

### Why Retained Earnings Increase

Retained earnings naik jika:

$$
Net\ Income > Dividends
$$

dan turun jika dividends melebihi current earnings atau company mengalami losses.

### Other Equity Changes

Full statement dapat juga reflect:

- stock issuance;
- treasury stock transactions;
- other equity adjustments.

Namun chapter uses retained-earnings bridge sebagai core learning point.

---

## 7. 2.5 Net Cash Flow

### 7.1 Why Net Income Is Not Cash Flow

Accounting profit uses accrual accounting. Some revenues may be recognized before cash is collected, and some expenses may be recognized without current cash payment.

Brigham defines:

$$
Net\ Cash\ Flow
=
Net\ Income
-
Noncash\ Revenues
+
Noncash\ Charges
$$

The most common noncash charges are:

- depreciation;
- amortization;
- deferred taxes in relevant situations.

If there are no material noncash revenues and depreciation/amortization dominate:

$$
Net\ Cash\ Flow
\approx
Net\ Income + Depreciation + Amortization
$$

### Example Logic

Suppose:

- net income = 100;
- depreciation = 40;
- no other noncash items.

Then:

$$
Net\ Cash\ Flow = 100 + 40 = 140
$$

This does **not** mean depreciation creates cash. It means depreciation reduced accounting income without consuming current cash.

> [!WARNING] Important Distinction
> **Adding back depreciation is not “receiving depreciation cash.”**
>
> It reverses a noncash accounting deduction when reconciling profit to cash.

### Depreciation and Taxes

Depreciation can affect cash indirectly through taxes:

```text
Depreciation expense ↑
→ Taxable income ↓
→ Taxes paid ↓
→ After-tax cash flow ↑
```

This is why tax depreciation matters in corporate finance even though depreciation itself is noncash.

---

## 8. 2.6 Statement of Cash Flows

### 8.1 Purpose

Statement of cash flows explains how cash changed over the accounting period.

It classifies cash flows into:

1. **Operating activities**
2. **Investing activities**
3. **Financing activities**

### 8.2 Operating Activities

Operating cash flows relate primarily to normal business operations.

They capture cash consequences of:

- selling goods/services;
- paying suppliers/employees;
- operating working-capital changes;
- taxes and other operating effects in textbook presentation.

### 8.3 Investing Activities

Investing activities include purchases/sales of long-term assets and investments.

Examples:

- buying plant and equipment;
- selling fixed assets;
- buying/selling certain investments.

### 8.4 Financing Activities

Financing cash flows arise from transactions with providers of debt and equity.

Examples:

- borrowing;
- debt repayment;
- stock issuance;
- dividends.

### 8.5 Why the Cash Flow Statement Complements Income Statement

Income statement asks:

> **Did company earn accounting profit?**

Cash flow statement asks:

> **Did company generate cash, and where did it go?**

Company can have:

- positive net income;
- negative net change in cash;

if it invests aggressively in working capital, fixed assets, or repays financing.

Conversely, company can report weak net income but increase cash through borrowing.

### Coherent Statement Linkage

```text
Income Statement
        ↓ net income
Statement of Stockholders' Equity
        ↓ ending equity
Balance Sheet

Statement of Cash Flows
        ↓ ending cash
Balance Sheet
```

> [!INFO] CF4 Connection
> This linkage is highly relevant to [[1.4 Company Account Structure]].

---

## 9. 2.7 Modifying Accounting Data for Managerial Decisions

Ini adalah section yang membuat Brigham berbeda dari pure accounting textbook.

Financial managers ingin mengukur:

1. capital tied up in **operations**;
2. after-tax profit generated by those operations;
3. cash left after required reinvestment.

Untuk itu, accounting balance sheet direclassify menjadi **operating vs nonoperating/financing** components.

---

### 9.1 Operating Current Assets

Operating current assets are current assets required to support operations.

Examples:

- cash needed in operations;
- accounts receivable;
- inventory.

They **exclude short-term investments**, because short-term investments are financial assets rather than operating assets.

Define:

$$
Operating\ Current\ Assets
=
Cash
+
Accounts\ Receivable
+
Inventory
+\cdots
$$

excluding nonoperating financial assets.

---

### 9.2 Operating Current Liabilities

Operating current liabilities arise naturally from operations.

Examples:

- accounts payable;
- accruals.

They exclude interest-bearing financing such as notes payable.

So:

$$
Operating\ Current\ Liabilities
=
Accounts\ Payable
+
Accruals
+\cdots
$$

---

### 9.3 Net Operating Working Capital

**Net operating working capital (NOWC)**:

$$
NOWC
=
Operating\ Current\ Assets
-
Operating\ Current\ Liabilities
$$

Economic meaning:

> Capital that investors must supply to finance the net current assets required by operations.

If company carries more inventory or receivables without corresponding spontaneous financing from payables/accruals, NOWC increases.

### Example

If:

- operating current assets = 1,000;
- operating current liabilities = 200;

then:

$$
NOWC = 1{,}000 - 200 = 800
$$

If next year NOWC becomes 900, company has invested additional 100 in operating working capital.

---

### 9.4 Operating Long-Term Assets

Operating long-term assets are long-term assets used in operations, such as net plant and equipment.

They exclude nonoperating investments that generate financial income.

---

### 9.5 Total Net Operating Capital

Also called:

- operating capital;
- net operating assets.

Formula:

$$
Total\ Net\ Operating\ Capital
=
NOWC
+
Operating\ Long\text{-}Term\ Assets
$$

This is the total capital required to run business operations.

It can also be viewed from financing side as investor-supplied capital after removing nonoperating financial assets and spontaneous operating liabilities.

---

### 9.6 Net Operating Profit After Taxes (NOPAT)

Net income includes effects of financing, particularly interest.

To compare operating performance independent of capital structure, Brigham defines:

$$
NOPAT
=
EBIT(1-T)
$$

where:

- \(EBIT\) = earnings before interest and taxes;
- \(T\) = tax rate.

For MicroDrive:

$$
NOPAT
=
283.8(1-0.40)
=
170.3
$$

million.

Interpretation:

> NOPAT adalah after-tax operating profit company would generate if it had **no debt** and no nonoperating financial investments.

### Why NOPAT Can Tell a Different Story from Net Income

MicroDrive’s NOPAT increased versus previous year, but EPS declined because interest expense increased.

Thus:

> Operations can improve while shareholder accounting earnings decline due to financing effects.

> [!WARNING] Important Distinction
> **NOPAT ≠ Net income.**
>
> NOPAT removes financing effects so that operating performance can be examined on a more comparable basis.

---

### 9.7 Net Investment in Operating Capital

To sustain growth, firms typically must invest additional capital in:

- receivables;
- inventory;
- plant and equipment;
- other operating assets.

Net investment:

$$
Net\ Investment\ in\ Operating\ Capital
=
Operating\ Capital_t
-
Operating\ Capital_{t-1}
$$

This investment consumes cash.

---

### 9.8 Free Cash Flow

Brigham defines free cash flow as:

$$
FCF
=
NOPAT
-
Net\ Investment\ in\ Operating\ Capital
$$

Alternative conceptual expression:

```text
After-tax operating profit
− Additional capital required for operations
= Cash available to investors
```

### Why FCF Matters

FCF is cash flow available for distribution to **all investors** after necessary operating reinvestment.

Potential uses:

- pay after-tax interest;
- repay debt;
- pay dividends;
- repurchase stock;
- purchase short-term investments.

### Negative FCF

Negative FCF does not automatically mean bad company.

A growing company may have:

- good operating profit;
- large investment needs;
- negative current FCF.

The key question is whether investment is expected to produce sufficient future returns.

> [!WARNING] Important Distinction
> **Negative FCF ≠ automatically financial failure.**
>
> Negative FCF caused by value-creating growth investment is economically different from negative FCF caused by poor operations.

### Core Corporate-Finance Bridge

```text
Income Statement → EBIT
                  ↓
               NOPAT

Balance Sheet → Operating Capital
                  ↓
         Change in Operating Capital
                  ↓
FCF = NOPAT − Net Investment
```

This is one of the chapter’s most important conceptual bridges.

---

## 10. 2.8 Market Value Added and Economic Value Added

### 10.1 Market Value Added (MVA)

MVA measures how much market value management has created relative to capital supplied by investors.

Simplified equity-only form:

$$
MVA
=
Market\ Value\ of\ Equity
-
Book\ Value\ of\ Equity
$$

More complete firm-wide concept:

$$
MVA
=
Total\ Market\ Value\ of\ Firm
-
Total\ Investor\text{-}Supplied\ Capital
$$

If market value of debt ≈ book value of debt, both formulations lead to same MVA.

### Interpretation

- \(MVA>0\): market values firm above capital invested by investors.
- \(MVA<0\): market believes cumulative value creation is below investor capital supplied.

MVA reflects management’s impact **over the company’s life**, but market value also embeds expected future performance.

Thus historical poor performance does not guarantee negative MVA if investors expect strong turnaround.

---

### 10.2 Economic Value Added (EVA)

EVA asks a different question:

> Did operations generate enough after-tax profit **this year** to cover the cost of all capital employed?

Formula:

$$
EVA
=
NOPAT
-
(\text{Operating Capital})(WACC)
$$

Equivalently:

$$
EVA
=
(\text{Operating Capital})(ROIC-WACC)
$$

where:

$$
ROIC
=
\frac{NOPAT}{Operating\ Capital}
$$

### Value-Creation Rule

$$
ROIC > WACC
\Rightarrow EVA>0
$$

$$
ROIC < WACC
\Rightarrow EVA<0
$$

Economic meaning:

> A project/company only creates economic value when return earned on invested capital exceeds investors’ required return.

### EVA vs Accounting Profit

Accounting profit includes interest cost but does **not** charge company for cost of equity capital.

EVA charges for both:

- debt capital;
- equity capital.

Therefore:

> **Positive net income does not necessarily mean positive economic profit.**

Company can report accounting profit while earning less than required return on capital.

### EVA vs MVA

| EVA | MVA |
|---|---|
| Measures annual value creation | Measures cumulative market value creation |
| Can be calculated for divisions | Generally firm-wide |
| Based on operating profit and cost of capital | Depends heavily on market valuation |
| Historical/current-year performance | Market also embeds future expectations |

Brigham notes EVA is often more useful in managerial incentive systems because it can isolate value created during a specific period.

> [!INFO] CF4 Connection
> EVA/MVA are useful supporting context for interpreting company accounts economically. They demonstrate why accounting profit alone is not sufficient to evaluate value creation.

---

## 11. Sarbanes–Oxley and Financial Fraud

Chapter warns that financial statements require judgment and can sometimes be manipulated.

Even under GAAP, managers may have discretion over accounting estimates and timing. Legitimate choices can make comparison difficult; fraudulent reporting can make statements actively misleading.

Textbook uses WorldCom as a key example: ordinary operating costs were improperly recorded as capital expenditures, overstating income.

Economic effect of the manipulation:

```text
Operating cost should be expensed
↓
Instead capitalized as asset
↓
Current expense understated
↓
Current profit overstated
↓
Assets overstated
```

The Sarbanes–Oxley Act is presented as regulatory response requiring stronger accountability, including CEO/CFO certification of financial statements.

> [!NOTE] [TEXTBOOK CONTEXT]
> Regulatory detail here reflects U.S. institutional context. The enduring lesson is the importance of **financial reporting integrity, internal control, audit, and management accountability**.

---

## 12. 2.9 The Federal Income Tax System

> [!IMPORTANT] `[TEXTBOOK CONTEXT]`
> Section ini describes U.S. federal tax rules relevant when the edition was written. CF4 uses Brigham Chapter 2 as reference for taxation principles, so conceptual relationships are retained in detail, tetapi specific rates, thresholds, exemptions, carryback/carryforward periods, dan dividend rules should not be assumed to represent current Indonesian or current U.S. law.

---

### 12.1 Progressive Taxation

Tax system described is **progressive**: tax rate increases as taxable income increases.

Two rates matter.

#### Marginal Tax Rate

Tax rate applied to the **last dollar** of income.

Used when evaluating effect of incremental income or expense.

#### Average Tax Rate

$$
Average\ Tax\ Rate
=
\frac{Total\ Taxes}{Taxable\ Income}
$$

> [!WARNING] Important Distinction
> **Marginal tax rate ≠ average tax rate.**
>
> Corporate-finance decisions involving incremental cash flows generally care more about marginal tax effect.

---

### 12.2 Interest Income Received by a Corporation

Textbook states interest income received by corporation is taxed as ordinary income.

If pretax interest income is \(I\):

$$
After\text{-}tax\ Interest
=
I(1-T)
$$

---

### 12.3 Dividends Received by a Corporation

The textbook-period rule allows corporations to exclude a substantial proportion of dividends received from another corporation from taxable income.

This makes corporate dividend income relatively tax-favored versus interest income in the textbook system.

Economic takeaway:

> Type of investment income matters for after-tax institutional return.

---

### 12.4 Interest Paid vs Dividends Paid

A fundamental corporate-finance distinction:

- **interest paid on debt** is tax-deductible in textbook framework;
- **dividends paid to shareholders** are not deductible.

Therefore debt creates an interest tax shield.

If pretax interest expense is \(I\):

$$
After\text{-}tax\ Cost\ of\ Interest
=
I(1-T)
$$

Example: interest = 100, tax rate = 40%:

$$
After\text{-}tax\ Cost
=
100(1-0.40)
=
60
$$

The 40 tax saving reduces economic cost.

> [!WARNING] Important Distinction
> **Debt is not “free” because interest is deductible.**
>
> Tax deductibility lowers after-tax cost but debt still creates fixed obligations and financial risk.

---

### 12.5 Tax Loss Carryback and Carryforward

Textbook allows operating losses to offset taxable income from other years under specified historical rules.

Conceptual objective:

> Taxes should reflect income across time rather than punish a company solely because profits/losses occur unevenly.

Mechanically:

```text
Current tax loss
↓
Offset eligible past/future taxable income
↓
Reduce taxes across periods
```

Specific historical periods are textbook-context items.

---

### 12.6 S Corporations

S corporations provide:

- corporate-form limited liability;
- pass-through tax treatment similar to partnership/proprietorship.

Income is taxed at owners rather than conventional corporate level, subject to qualification rules.

This reduces double-taxation issue for eligible businesses.

---

### 12.7 Personal Taxes

Brigham provides introductory context on individual taxation because:

- proprietorships/partnerships/pass-through entities are numerous;
- shareholders ultimately care about personal after-tax return;
- financing and investment choices can depend on investor tax treatment.

### Capital Gains and Losses

A **capital gain** occurs when capital asset is sold above cost.

A **capital loss** occurs when sold below cost.

Assets held more than specified period receive long-term classification under textbook rules.

### Dividends

Textbook-period tax law treats qualified dividends similarly to capital gains for individuals.

Again, exact treatment is time-specific.

---

## 13. Integrated Example — From Accounting Profit to Free Cash Flow

Suppose a simplified company reports:

- EBIT = 500
- tax rate = 30%
- operating capital last year = 2,000
- operating capital this year = 2,250

### Step 1 — NOPAT

$$
NOPAT
=
500(1-0.30)
=
350
$$

### Step 2 — Net Investment in Operating Capital

$$
Net\ Investment
=
2{,}250-2{,}000
=
250
$$

### Step 3 — FCF

$$
FCF
=
350-250
=
100
$$

### Meaning

Company generated 350 after-tax operating profit, but 250 had to be reinvested in operating capital.

Only 100 remained available to investors.

This demonstrates:

> **Profit generated by operations is not identical to cash distributable to capital providers.**

---

## 14. Integrated Example — EVA

Continue the example above. Suppose:

- operating capital = 2,250
- NOPAT = 350
- WACC = 12%

Dollar cost of capital:

$$
2{,}250(0.12)
=
270
$$

EVA:

$$
EVA
=
350-270
=
80
$$

Equivalently:

$$
ROIC
=
\frac{350}{2{,}250}
=
15.56\%
$$

$$
EVA
=
2{,}250(15.56\%-12\%)
\approx 80
$$

The company creates economic value because:

$$
ROIC > WACC
$$

Even if accounting net income were positive, EVA would be negative if ROIC fell below WACC.

---

## 15. Chapter Synthesis

Jika Chapter 2 harus dipahami sebagai satu cerita, ceritanya adalah:

> **Financial statements describe what happened according to accounting rules; corporate finance asks what those numbers imply about cash generation, capital employed, taxes, and value creation.**

Balance sheet shows what the firm owns and who has claims against it. Income statement shows accounting profitability. Statement of stockholders’ equity explains changes in owner claims. Statement of cash flows explains actual cash movements.

But management decisions cannot stop at those reports.

To understand operations, Brigham separates operating assets and operating liabilities from financial items. This produces **operating capital**. EBIT is converted to after-tax operating profit, **NOPAT**, stripping out financing effects. The change in operating capital shows how much cash must be reinvested. Subtracting that investment from NOPAT produces **FCF**—the cash economically available to investors.

Then chapter asks the ultimate finance question:

> Has management created value after compensating capital providers?

MVA addresses cumulative market value creation. EVA addresses annual economic profit after charging the full cost of capital.

Taxes modify every layer. Interest deductibility changes after-tax financing cost; investment income types can receive different tax treatment; losses can affect taxes across periods; and personal taxes matter to owners.

The central progression is therefore:

```text
Accounting Statements
↓
Operating Performance
↓
Operating Capital
↓
After-Tax Cash Generation
↓
Free Cash Flow
↓
Cost of Capital
↓
Economic Value Creation
```

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Annual report | Package of company information to investors | Main external information source | [[1.2 Financial Reporting Requirements]] |
| Balance sheet | Snapshot of assets and claims | Shows financial position | [[1.4 Company Account Structure]] |
| Book value | Accounting recorded value | May differ from market value | [[1.4 Company Account Structure]] |
| Income statement | Performance over period | Measures accounting profit | [[1.4 Company Account Structure]] |
| Depreciation | Noncash allocation of long-term asset cost | Affects profit and taxes | [[1.5 Financial Statements Construction]] |
| EBITDA | Earnings before I,T,D&A | Operating earnings proxy, not cash flow | [[1.4 Company Account Structure]] |
| Retained earnings | Cumulative earnings retained | Equity account, not cash | [[1.4 Company Account Structure]] |
| Net cash flow | Profit adjusted for noncash items | Separates profit from cash | [[1.5 Financial Statements Construction]] |
| Statement of cash flows | Operating/investing/financing cash movement | Explains change in cash | [[1.4 Company Account Structure]] |
| Operating current assets | Current assets needed for operations | Input to NOWC | [[1.4 Company Account Structure]] |
| Operating current liabilities | Spontaneous operating claims | Reduce investor-funded working capital | [[1.4 Company Account Structure]] |
| NOWC | Operating CA − operating CL | Capital tied up in current operations | [[1.4 Company Account Structure]] |
| Operating capital | NOWC + operating long-term assets | Capital required to run operations | [[1.4 Company Account Structure]] |
| NOPAT | EBIT after taxes | Operating performance independent of debt | [[1.5 Financial Statements Construction]] |
| FCF | NOPAT − net investment in operating capital | Cash available to investors | [[1.5 Financial Statements Construction]] |
| MVA | Market value − investor-supplied capital | Cumulative value creation | Supporting |
| EVA | NOPAT − capital charge | Annual economic profit | Supporting |
| Marginal tax rate | Tax rate on incremental income | Relevant to incremental decisions | [[1.1 Taxation Principles]] |
| Average tax rate | Total tax / taxable income | Historical effective burden measure | [[1.1 Taxation Principles]] |
| Interest tax shield | Deductibility reduces after-tax debt cost | Financing decision relevance | [[1.1 Taxation Principles]] |

---

## Important Distinctions

> [!WARNING] Important Distinction
> **Retained earnings ≠ cash**
>
> RE is an equity account; retained profit may already be invested in other assets.

> [!WARNING] Important Distinction
> **Net income ≠ net cash flow**
>
> Accruals and noncash charges create timing/measurement differences.

> [!WARNING] Important Distinction
> **EBITDA ≠ free cash flow**
>
> EBITDA ignores taxes, working capital, and capital expenditures.

> [!WARNING] Important Distinction
> **Net income ≠ NOPAT**
>
> Net income includes financing effects; NOPAT measures after-tax operating profit.

> [!WARNING] Important Distinction
> **Accounting profit ≠ economic profit**
>
> Accounting profit does not explicitly charge equity capital; EVA does.

> [!WARNING] Important Distinction
> **Book value ≠ market value**
>
> Corporate finance is ultimately concerned with economic value.

> [!WARNING] Important Distinction
> **Marginal tax rate ≠ average tax rate**
>
> Incremental decisions usually depend on marginal tax effects.

---

## Compression Notes

### Retained in Detail

- role of annual report;
- four basic financial statements;
- balance-sheet architecture;
- current assets, liabilities, equity, and claims;
- book vs market value;
- FIFO/LIFO example as accounting-choice illustration;
- depreciation and amortization;
- income-statement flow;
- EBIT, EBITDA, net income, EPS;
- statement of stockholders’ equity;
- retained earnings ≠ cash;
- net cash flow formula;
- three cash-flow categories;
- operating vs nonoperating reclassification;
- operating current assets/liabilities;
- NOWC;
- total net operating capital;
- NOPAT;
- net investment in operating capital;
- FCF;
- MVA;
- EVA;
- EVA vs accounting profit;
- Sarbanes–Oxley / financial-fraud lesson;
- progressive taxation;
- marginal vs average rates;
- corporate interest/dividend tax treatment;
- tax loss carryback/carryforward concept;
- S corporations;
- personal tax / capital-gain overview.

### Condensed

- opening corporate anecdotes;
- detailed MicroDrive line-by-line tables;
- repeated self-test questions;
- detailed accounting disclosure examples;
- historical U.S. tax-rate brackets;
- long descriptions of individual tax calculations;
- web-resource instructions;
- repeated numerical problems that reinforce the same mechanics;
- detailed WorldCom narrative.

### Omitted / Beyond CF4

- website/tool-kit references;
- full historical tax tables;
- detailed U.S. tax filing mechanics;
- full problem sets and spreadsheet exercises;
- specialized deferred-tax adjustments beyond chapter-level intuition;
- lengthy firm-specific financial-statement reproductions where the learning point is already retained.

---

## CF4 Connection Map

```text
Annual Report
      ↓
[[1.2 Financial Reporting Requirements]]
      ↓
Balance Sheet + Income Statement + Equity + Cash Flow
      ↓
[[1.4 Company Account Structure]]
      ↓
Profit ≠ Cash
      ↓
[[1.5 Financial Statements Construction]]
      ↓
NOPAT + Operating Capital
      ↓
Free Cash Flow
      ↓
Economic Value Creation

Taxable Income / Interest / Dividends / Capital Gains
      ↓
[[1.1 Taxation Principles]]
```

---

## Quick Reading Review

- Annual report contains management information plus core financial statements.
- Four basic Brigham statements: balance sheet, income statement, statement of stockholders’ equity, statement of cash flows.
- Balance sheet is a **snapshot** at a date.
- Fundamental equation:
  $$
  Assets=Liabilities+Equity
  $$
- Current assets include cash, receivables, inventory, and certain investments.
- Book values can differ substantially from market values.
- Inventory accounting method can affect inventory, COGS, profit, and comparability.
- Long-term asset cost is allocated through depreciation rather than expensed immediately.
- Income statement measures performance over a period.
- EBIT is operating earnings before financing cost and taxes.
- EBITDA adds back depreciation and amortization but is **not cash flow**.
- Retained earnings increases with net income and decreases with dividends.
- **Retained earnings is not cash.**
- Net cash flow differs from net income because of noncash revenues/charges.
- Basic reconciliation:
  $$
  Net\ Cash\ Flow
  =
  Net\ Income
  -
  Noncash\ Revenues
  +
  Noncash\ Charges
  $$
- Statement of cash flows separates operating, investing, and financing activities.
- Operating current assets exclude short-term investments.
- Operating current liabilities exclude interest-bearing debt such as notes payable.
- NOWC:
  $$
  NOWC=Operating\ Current\ Assets-Operating\ Current\ Liabilities
  $$
- Total net operating capital:
  $$
  NOWC+Operating\ Long\text{-}Term\ Assets
  $$
- NOPAT:
  $$
  NOPAT=EBIT(1-T)
  $$
- FCF:
  $$
  FCF=NOPAT-\Delta Operating\ Capital
  $$
- FCF is cash available to investors after required operating reinvestment.
- Negative FCF can be consistent with value-creating growth.
- MVA compares market value with investor-supplied capital.
- EVA:
  $$
  EVA=NOPAT-(Operating\ Capital)(WACC)
  $$
- Equivalent:
  $$
  EVA=(Operating\ Capital)(ROIC-WACC)
  $$
- Positive EVA requires:
  $$
  ROIC>WACC
  $$
- EVA differs from accounting profit because it charges for equity capital.
- Tax system in textbook is progressive.
- Marginal rate applies to incremental/last-dollar income; average rate = total tax / taxable income.
- Interest deductibility gives debt an after-tax tax advantage relative to dividends in textbook framework.
- Corporate dividend income and personal investment income may have different tax treatment.
- Tax rules in Chapter 2 are **textbook-period U.S. rules**, so preserve conceptual relationships but do not treat historical rates as current law.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why chapter exists / annual report | Brigham & Ehrhardt, Chapter 2 opening and §2.1 |
| Four basic financial statements | Chapter 2, §2.1 and chapter summary |
| Balance sheet, assets, liabilities, equity | Chapter 2, §2.2 |
| FIFO/LIFO illustration | Chapter 2, §2.2 |
| Depreciation / net plant & equipment | Chapter 2, §2.2–2.3 |
| Income statement / EBIT / EPS | Chapter 2, §2.3 |
| EBITDA / D&A discussion | Chapter 2, §2.3 |
| Statement of stockholders’ equity | Chapter 2, §2.4 |
| Retained earnings ≠ cash | Chapter 2, §2.4 |
| Net cash flow | Chapter 2, §2.5 |
| Statement of cash flows | Chapter 2, §2.6 |
| Operating current assets/liabilities | Chapter 2, §2.7 |
| NOWC and operating capital | Chapter 2, §2.7 |
| NOPAT | Chapter 2, §2.7 |
| Free cash flow | Chapter 2, §2.7 |
| MVA and EVA | Chapter 2, §2.8 |
| EVA vs accounting profit | Chapter 2, §2.8 |
| Financial fraud / Sarbanes–Oxley | Chapter 2, discussion following §2.8 |
| U.S. federal income tax system | Chapter 2, §2.9 |
| Progressive tax / marginal vs average rates | Chapter 2, §2.9 |
| Interest/dividend tax treatment | Chapter 2, §2.9 |
| Tax losses / S corporations / personal taxes | Chapter 2, §2.9 |
| Chapter synthesis | Chapter 2 summary |

> [!NOTE] Source Boundary
> Isi note ini diringkas hanya dari **Brigham & Ehrhardt Chapter 2**. Silabus CF4 digunakan untuk menentukan relevance dan depth, bukan untuk mengganti narrative textbook. U.S.-specific tax rates, thresholds, exemptions, and regulatory rules are retained only as conceptual `[TEXTBOOK CONTEXT]` when useful; no outside updating has been inserted.
