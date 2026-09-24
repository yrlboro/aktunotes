---
type: "condensed-book"
exam: "CF4"
book: "International Financial Statement Analysis"
author: "Elaine Henry; Thomas R. Robinson"
chapter: "5"
chapter_title: "Understanding Balance Sheets"
cf4_topics: ["1.4", "1.5", "1.6"]
cf4_relevance: "High"
source_scope: "Robinson et al. Chapter 5 — Sections 1–8 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Robinson, BalanceSheet, Liquidity, Solvency]
date_created: "2026-08-24"
status: "study-note"
---

# Robinson — Chapter 5: Understanding Balance Sheets

> [!ABSTRACT] Chapter in One View
> Chapter ini memperdalam **balance sheet / statement of financial position** sebagai snapshot resources perusahaan dan claims terhadap resources tersebut pada satu tanggal.
>
> Hubungan fundamental:
>
> $$
> Assets = Liabilities + Equity
> $$
>
> tetapi reported amounts di balance sheet tidak semuanya berasal dari measurement basis yang sama. Sebagian items menggunakan historical/amortised cost, sebagian fair value, sebagian estimated recoverable amount, dan beberapa economically valuable resources bahkan tidak recognized sama sekali.
>
> Robinson membahas balance sheet dalam urutan yang sangat natural: **elements & presentation → current assets/current liabilities → non-current assets → non-current liabilities → equity → analysis**.
>
> Current classification penting karena menjadi foundation untuk liquidity analysis. Cash dan cash equivalents berada paling dekat dengan immediate spending power; receivables perlu dinilai collectability-nya; inventories lebih jauh dari cash dan dipengaruhi costing/valuation; prepaid expenses adalah future benefits, bukan immediately spendable resources.
>
> Non-current assets mencakup PPE, investment property, intangible assets, goodwill, dan financial assets. Measurement method penting karena dua perusahaan dengan economics mirip dapat menunjukkan book values berbeda.
>
> Intangible assets dan goodwill memerlukan analytical caution: beberapa intangible recognized, beberapa internally generated resources tidak pernah muncul sebagai asset, dan indefinite-life intangibles/goodwill lebih bergantung pada impairment assessment daripada systematic amortisation.
>
> Liabilities dibedakan current dan non-current berdasarkan expected settlement. Long-term debt, deferred tax liabilities, provisions, pension-like obligations, dan commitments memengaruhi solvency meskipun tidak semuanya memiliki immediate cash effect.
>
> Equity adalah **residual interest**, bukan cash balance. Ia mencakup contributed capital, retained earnings, accumulated other comprehensive income, treasury shares/repurchases, dan dalam consolidated statements dapat mencakup non-controlling interests.
>
> Pada akhir chapter, Robinson menggunakan **common-size balance sheet** serta liquidity dan solvency ratios. Core lesson-nya: ratio adalah starting point, bukan conclusion. Composition, accounting methods, industry, seasonality, financing decisions, dan persistence harus dianalisis sebelum menyimpulkan financial health.
>
> Untuk CF4, Chapter 5 secara penuh termasuk referensi resmi Topik 1 dan sangat relevan bagi [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]], dan terutama [[1.6 Financial Ratios and Interpretation]].

## 1. Why This Chapter Exists

Chapter 4 menjawab:

> **Bagaimana perusahaan menghasilkan reported income selama suatu periode?**

Chapter 5 menjawab pertanyaan berbeda:

> **Pada akhir periode tersebut, resources apa yang dikendalikan perusahaan dan siapa yang memiliki claims terhadap resources itu?**

Balance sheet penting karena perusahaan dapat terlihat profitable tetapi tetap memiliki weak financial position.

Contoh sederhana:

- Company A dan B sama-sama menghasilkan net income 100.
- A memiliki debt 100.
- B memiliki debt 900.
- B juga memiliki current liabilities yang jauh lebih besar daripada readily available liquid assets.

Income statement saja tidak cukup untuk melihat difference tersebut.

Balance sheet memberi tiga kelompok informasi:

```text
Resources
→ Assets

Creditor claims
→ Liabilities

Residual owner claim
→ Equity
```

Relationship:

$$
Assets = Liabilities + Equity
$$

atau:

$$
Equity = Assets - Liabilities
$$

Namun analyst tidak boleh menyamakan **balance sheet value** dengan **economic/market value**. Reported balance sheet menggunakan accounting recognition dan measurement rules. Akibatnya:

- some assets are measured near current value;
- some remain closer to historical cost;
- some resources are not recognized;
- some liabilities depend heavily on estimates.

Inilah alasan chapter membahas **measurement** hampir sama pentingnya dengan classification.

> [!INFO] CF4 Connection
> `[CORE CF4]` Chapter 5 langsung mendukung kemampuan menjelaskan structure company accounts dan menghitung/interpret financial ratios. Balance-sheet understanding adalah prerequisite utama untuk liquidity dan solvency analysis.

## 2. Chapter Map

```text
Chapter 5 — Understanding Balance Sheets
├── 1. Introduction
├── 2. Balance Sheet Elements and Format
│   ├── Assets
│   ├── Liabilities
│   ├── Equity
│   ├── Classified balance sheet
│   └── Uses and limitations
├── 3. Current Assets and Current Liabilities
│   ├── Cash and cash equivalents
│   ├── Marketable securities
│   ├── Trade receivables
│   ├── Inventories
│   ├── Other current assets
│   └── Current liabilities
├── 4. Non-Current Assets
│   ├── Property, plant & equipment
│   ├── Investment property
│   ├── Intangible assets
│   ├── Identifiable intangibles
│   ├── Goodwill
│   ├── Financial assets
│   └── Deferred tax assets / other assets
├── 5. Non-Current Liabilities
│   ├── Long-term debt
│   ├── Deferred tax liabilities
│   ├── Provisions / other obligations
│   └── Measurement considerations
├── 6. Equity
│   ├── Contributed capital
│   ├── Retained earnings
│   ├── OCI / accumulated OCI
│   ├── Treasury shares
│   └── Non-controlling interest
├── 7. Analysis of the Balance Sheet
│   ├── Common-size analysis
│   ├── Liquidity ratios
│   ├── Solvency ratios
│   └── Limitations
└── 8. Summary
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 1. Introduction | High | [[1.4 Company Account Structure]] |
| 2. Elements & Format | Very High | [[1.4 Company Account Structure]] |
| 3. Current Assets / Liabilities | Very High | [[1.5 Financial Statements Construction]], [[1.6 Financial Ratios and Interpretation]] |
| 4. Non-Current Assets | High | [[1.4 Company Account Structure]], [[1.6 Financial Ratios and Interpretation]] |
| 5. Non-Current Liabilities | High | [[1.4 Company Account Structure]], [[1.6 Financial Ratios and Interpretation]] |
| 6. Equity | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 7. Balance Sheet Analysis | Very High | [[1.6 Financial Ratios and Interpretation]] |

## 3. The Balance Sheet — What It Shows

Balance sheet is a **point-in-time** statement.

At date \(t\):

$$
A_t = L_t + E_t
$$

This matters because income statement numbers are **flows over a period**, while balance sheet amounts are **stocks at a date**.

### 3.1 Assets

Assets are economic resources controlled by the company as a result of past events and expected to provide future economic benefits under the framework used by the textbook.

Examples:

- cash;
- receivables;
- inventories;
- PPE;
- investments;
- intangibles.

### 3.2 Liabilities

Liabilities are present obligations arising from past events whose settlement is expected to require resources.

Examples:

- accounts payable;
- short-term borrowings;
- accrued obligations;
- bonds payable;
- deferred tax liabilities;
- provisions.

### 3.3 Equity

Equity is residual:

$$
Equity = Assets - Liabilities
$$

It represents owners' remaining claim after creditor claims.

> [!WARNING] Important Distinction
> **Equity ≠ cash.**
>
> A company can have large equity and little cash because equity reflects residual interest in all net assets, not only liquid assets.

## 4. Uses and Limitations of the Balance Sheet

Balance sheet helps analyst assess:

- liquidity;
- solvency;
- financial flexibility;
- asset composition;
- financing structure;
- resources available for future operations.

But it has important limitations.

### 4.1 Mixed Measurement Bases

Not all line items are measured the same way.

A balance sheet may combine:

- historical cost;
- amortised cost;
- fair value;
- estimated recoverable amount;
- other standard-specific bases.

Thus total assets is not one homogeneous "market value" number.

### 4.2 Unrecognized Economic Resources

Some valuable resources may not be recognized.

Examples can include internally developed:

- reputation;
- management skill;
- internally generated brand strength;
- customer relationships in circumstances not meeting recognition criteria.

This can make book equity substantially different from economic value.

### 4.3 Estimates and Judgment

Examples:

- allowance for uncollectible receivables;
- useful life and residual value of PPE;
- impairment;
- fair-value estimates;
- provisions.

Balance sheet therefore contains both relatively objective amounts and highly judgmental estimates.

> [!WARNING] Important Distinction
> **Balance sheet ≠ market-value statement.**

## 5. Balance Sheet Presentation Formats

Companies can order balance sheet items differently.

A classified balance sheet separates:

- current assets;
- non-current assets;
- current liabilities;
- non-current liabilities.

Some companies/jurisdictions present items from **most liquid to least liquid**, while others use the opposite order.

Presentation order is less important than classification and economic meaning.

### 5.1 Current Assets

Assets generally classified current if they are:

- expected to be realized/sold/consumed in normal operating cycle;
- held primarily for trading;
- expected to be realized within 12 months; or
- cash/cash equivalent not restricted beyond the relevant period.

All other assets are normally non-current.

### 5.2 Current Liabilities

Liabilities generally current if expected to be settled:

- in normal operating cycle;
- primarily for trading;
- within 12 months; or
- when entity does not have an appropriate right to defer settlement beyond the relevant period under the textbook framework.

All others are generally non-current.

## 6. Current Assets — Liquidity Is About Composition

Not all current assets are equally liquid.

A useful intuitive ranking:

```text
Cash
↓
Cash equivalents / very short-term securities
↓
Marketable securities
↓
Receivables
↓
Inventory
↓
Prepaid expenses
```

This is why current ratio alone is incomplete.

## 7. Cash and Cash Equivalents

**Cash** includes cash on hand and bank balances available for use.

**Cash equivalents** are highly liquid short-term investments, typically with very short original maturities and insignificant value-change risk.

The textbook uses the familiar example of investments maturing in approximately **90 days or less**.

Why group them with cash?

Because economically they can be converted rapidly into known cash amounts.

> [!WARNING] Important Distinction
> **Cash equivalents ≠ all short-term investments.**
>
> Short-term securities with greater price risk or longer maturity may be classified separately.

### Analyst Perspective

High cash can indicate:

- liquidity strength;
- defensive balance sheet;
- resources for acquisition/investment.

But too much idle cash may also suggest:

- inefficient capital deployment;
- lack of attractive investment opportunities.

So:

> **Higher cash is not automatically always better.**

## 8. Marketable Securities / Short-Term Financial Assets

Short-term marketable securities are investments expected to be realized in the near term and may be measured using fair value or another basis depending on classification and standards.

For liquidity analysis, they are usually more liquid than inventory but may have:

- market risk;
- credit risk;
- price volatility.

Their classification and measurement also affect reported equity/income depending on the security category used in the source-period accounting framework.

## 9. Accounts Receivable

Receivables arise when company has recognized revenue or another claim but cash has not yet been collected.

Concept:

```text
Credit sale
↓
Revenue recognized
+
Receivable asset
↓
Later collection
↓
Cash ↑
Receivable ↓
```

Reported receivables often appear **net of allowance for doubtful/uncollectible accounts**.

Conceptually:

$$
Net\ Receivables
=
Gross\ Receivables
-
Allowance
$$

### Why Analysts Care

A large receivable balance is not equivalent to cash.

Questions:

- are receivables collectible?
- are they growing faster than sales?
- did credit policy loosen?
- is allowance reasonable?

If receivables grow rapidly while cash collections lag, reported revenue quality may deserve scrutiny.

> [!WARNING] Important Distinction
> **Receivable = claim to cash, not cash itself.**

## 10. Inventory

Inventory represents goods held for sale or used in production.

Depending on business, inventory may include:

- raw materials;
- work in process;
- finished goods.

Inventory valuation matters because balance sheet and income statement are linked:

```text
Ending inventory
↔
Cost of goods sold
↔
Gross profit
↔
Net income
```

If ending inventory is higher, all else equal:

$$
COGS \downarrow
$$

and:

$$
Profit \uparrow
$$

Therefore inventory accounting can affect both:

- assets;
- earnings.

Chapter 5 does not replace the dedicated inventory chapter, but it makes the key analytical point:

> inventory is less liquid than cash or receivables and its recorded amount depends on accounting policies and valuation assumptions.

## 11. Prepaid Expenses and Other Current Assets

Prepaid expenses arise when cash is paid before economic benefit is consumed.

Example:

```text
Pay insurance in advance
↓
Prepaid insurance (asset)
↓
Benefit consumed over time
↓
Insurance expense
```

Prepaids qualify as assets because they represent future economic benefit, but they usually cannot be converted back into spendable cash easily.

Thus:

> **Current asset classification does not mean all current assets have equal liquidity.**

## 12. Current Liabilities

Common current liabilities include:

- trade/accounts payable;
- short-term borrowings;
- current portion of long-term debt;
- accrued expenses;
- current tax liabilities;
- unearned/deferred revenue;
- other obligations due within operating cycle/12 months.

### 12.1 Accounts Payable

Accounts payable generally result from purchasing goods/services on credit.

They are an operating financing source.

Example:

```text
Buy inventory on account
↓
Inventory ↑
Accounts payable ↑
```

No immediate cash movement.

### 12.2 Accrued Liabilities

Accrued liabilities arise when expense has been incurred but not yet paid.

Examples:

- wages payable;
- interest payable;
- taxes payable.

> [!WARNING] Important Distinction
> **Liability recognition can occur before cash payment.**

### 12.3 Current Portion of Long-Term Debt

A long-term borrowing may have an amount due within the next year.

That portion moves into current liabilities because the near-term payment requirement affects liquidity.

This is a good example of why classification reflects **settlement timing**, not merely original maturity.

## 13. Working Capital

Although ratio analysis is developed later, balance sheet classification naturally gives:

$$
Working\ Capital
=
Current\ Assets
-
Current\ Liabilities
$$

Positive working capital means nominal current assets exceed current liabilities.

But:

> positive working capital does not automatically prove strong liquidity.

Why?

Because current assets can be dominated by slow-moving or impaired inventory and difficult-to-collect receivables.

## 14. Non-Current Assets — General Idea

Non-current assets are expected to provide benefits beyond the near-term operating horizon.

Common categories:

- property, plant & equipment;
- investment property;
- intangible assets;
- goodwill;
- long-term financial assets;
- deferred tax assets;
- long-term receivables;
- other assets.

Their measurement often has a large impact on:

- total assets;
- equity;
- depreciation/amortisation;
- impairment losses;
- profitability ratios;
- leverage ratios.

## 15. Property, Plant and Equipment (PPE)

PPE are tangible long-lived assets used in operations.

Examples:

- land;
- buildings;
- machinery;
- equipment;
- furniture;
- natural-resource assets.

### 15.1 Cost Model

Under cost model:

$$
Net\ PPE
=
Historical\ Cost
-
Accumulated\ Depreciation
-
Accumulated\ Impairment
$$

Historical cost generally includes costs necessary to bring asset to operating condition, such as:

- purchase price;
- delivery;
- installation;
- directly attributable setup costs.

### 15.2 Depreciation

Depreciation allocates depreciable cost across useful life.

It is not a cash payment each period.

```text
Initial PPE acquisition
→ asset

Over useful life
→ depreciation expense
→ accumulated depreciation
→ lower carrying amount
```

This connects balance sheet to income statement.

### 15.3 IFRS vs US GAAP Context

`[TEXTBOOK CONTEXT]`

The chapter notes:

- IFRS permits **cost model or revaluation model** for PPE, subject to consistent application within a class;
- US GAAP context in the source generally permits the cost model.

Thus two firms with similar physical assets may show different carrying amounts depending on framework and choices.

> [!WARNING] Important Distinction
> **Higher PPE book value does not necessarily mean company owns economically better assets.**

## 16. Revaluation Model

Under the revaluation approach in IFRS context, asset can be carried at revalued amount subject to relevant rules.

Analytical consequence:

- assets can increase without new capital expenditure;
- equity can increase through revaluation effects;
- depreciation after revaluation can change.

Therefore time-series or cross-company ratio comparisons may need adjustments.

## 17. Investment Property

Investment property is property held primarily to earn rental income and/or capital appreciation rather than for owner-occupied operational use.

This distinction matters because accounting treatment can differ from operational PPE.

Mental distinction:

```text
Building used by company
→ PPE

Building held for rental/appreciation
→ Investment property
```

Under IFRS source context, investment property may use cost or fair-value model according to relevant requirements.

If fair value changes are recognized, reported income/equity effects can differ substantially from cost-model reporting.

## 18. Intangible Assets

Intangible assets are identifiable non-monetary assets without physical substance.

Examples:

- patents;
- copyrights;
- licenses;
- trademarks;
- franchises;
- certain software/rights.

### 18.1 Finite-Life Intangibles

Finite useful-life intangibles are systematically amortised over useful life and tested for impairment as required.

Concept:

$$
Net\ Intangible
=
Cost
-
Accumulated\ Amortisation
-
Impairment
$$

### 18.2 Indefinite-Life Intangibles

If useful life is considered indefinite:

- no systematic amortisation;
- periodic review of indefinite-life assumption;
- impairment testing.

> [!WARNING] Important Distinction
> **Indefinite life ≠ infinite economic life.**
>
> It means no foreseeable limit can currently be determined under applicable accounting judgment.

### 18.3 Internally Generated Intangibles

Recognition of internally developed intangibles can be restricted.

As a result, economically valuable resources such as:

- internally built brand;
- reputation;
- management skill;

may not appear as recognized assets.

This creates a structural reason why:

$$
Book\ Equity \neq Market\ Value\ of\ Equity
$$

## 19. Goodwill

Goodwill arises in a business combination when purchase consideration exceeds identifiable net assets acquired, according to relevant purchase accounting.

Simplified concept:

$$
Goodwill
=
Purchase\ Price
-
Fair\ Value\ of\ Identifiable\ Net\ Assets\ Acquired
$$

Goodwill can reflect:

- expected synergies;
- assembled workforce;
- reputation;
- other benefits not separately recognized.

Goodwill is not the same as a self-created "good reputation" asset.

> [!WARNING] Important Distinction
> **Internally generated goodwill is generally not simply booked because management believes reputation has value.**
>
> Accounting goodwill arises through acquisition accounting.

### Analyst Perspective

Robinson notes analysts traditionally treat goodwill/intangibles with caution.

But blindly assigning zero value to every intangible can also be wrong.

Better process:

1. identify what intangible represents;
2. examine useful life and impairment;
3. assess whether economic value exists;
4. understand effect on equity and income.

## 20. Financial Assets

Financial assets can include:

- debt securities;
- equity securities;
- loans/receivables;
- other contractual financial claims.

Measurement depends on classification in the accounting framework.

Possible measurement concepts in source context include:

- amortised cost;
- fair value;
- equity-method-type treatment for certain investments.

Analyst should inspect notes because balance-sheet caption alone may not reveal:

- valuation basis;
- unrealized gains/losses;
- impairment;
- maturity;
- credit exposure.

## 21. Deferred Tax Assets

Deferred tax assets arise from differences between accounting and tax recognition that are expected to produce future tax benefit, subject to applicable recognition criteria.

At high level:

```text
Accounting timing
≠
Tax timing
↓
Temporary difference
↓
Potential future tax benefit
↓
Deferred tax asset
```

These assets require analysis because realizability can depend on future taxable income.

The chapter is not the detailed deferred-tax chapter, but it introduces deferred tax as a balance-sheet item whose measurement contains expectations.

## 22. Non-Current Liabilities

Common non-current liabilities include:

- long-term debt;
- bonds payable;
- lease obligations;
- pension/employee-benefit obligations;
- deferred tax liabilities;
- long-term provisions;
- other long-term contractual commitments.

They matter primarily for **solvency** and financial risk.

## 23. Long-Term Debt

Long-term debt represents borrowed capital requiring future principal and usually interest payments.

Reported carrying value may differ from:

- face value;
- market value;

depending on issuance terms and accounting measurement.

Important analyst questions:

- maturity profile?
- fixed or floating interest?
- secured or unsecured?
- covenant requirements?
- current portion due soon?
- refinancing risk?

A company can be liquid today but still have weak long-term solvency if large debt repayments approach.

## 24. Deferred Tax Liabilities

Deferred tax liabilities represent expected future tax consequences from temporary differences under relevant tax accounting rules.

They may not require immediate settlement, but they are part of claims against company resources.

Analyst needs to distinguish:

- current cash-tax burden;
- accounting tax expense;
- deferred tax balance.

Detailed mechanics belong to the tax chapter, but the balance-sheet lesson is:

> tax timing differences can create material assets or liabilities without immediate matching cash movement.

## 25. Provisions and Estimated Obligations

Some liabilities require estimates rather than fixed invoices.

Examples may involve:

- warranties;
- legal claims;
- restructuring;
- environmental obligations;
- other probable obligations.

Because amount/timing may be uncertain, provisions introduce judgment.

Analyst should examine:

- basis of estimate;
- changes in assumptions;
- utilization;
- reversals;
- relation to current earnings.

## 26. Equity — Residual Claim Structure

Equity is not one homogeneous account.

It can include:

- common/share capital;
- additional paid-in capital;
- preferred capital where classified as equity;
- retained earnings;
- accumulated OCI;
- treasury stock / own-share repurchases;
- non-controlling interest in consolidated reporting.

### 26.1 Contributed Capital

Represents capital contributed through share issuance.

It does not represent revenue.

### 26.2 Retained Earnings

Simplified bridge:

$$
RE_{end}
=
RE_{begin}
+
Net\ Income
-
Dividends
\pm
Adjustments
$$

> [!WARNING] Important Distinction
> **Retained earnings ≠ retained cash.**

Profits retained may already have been invested in:

- inventory;
- receivables;
- PPE;
- acquisitions;
- debt repayment.

### 26.3 Treasury Shares / Share Repurchases

When company repurchases its own shares, equity generally decreases under source-period accounting treatment.

Economic implications may include:

- capital returned to shareholders;
- fewer shares outstanding;
- changed leverage;
- changed EPS denominator.

### 26.4 Accumulated Other Comprehensive Income

Certain items bypass net income and enter OCI.

Their cumulative balance appears in equity.

Thus:

```text
Net income
→ retained earnings

OCI items
→ accumulated OCI
```

### 26.5 Non-Controlling Interest

When parent consolidates subsidiary but owns less than 100%, outside owners' claim appears as non-controlling interest according to applicable presentation.

It is part of consolidated group equity rather than a liability merely because it belongs to shareholders other than parent owners.

## 27. Statement of Changes in Equity

Balance sheet gives ending equity balances.

Statement of changes in equity explains movements.

Typical components:

- net income;
- OCI;
- new share issuance;
- share repurchases;
- dividends;
- stock-based compensation;
- changes involving NCI.

Robinson's Apple illustration shows exactly this bridge: common stock, retained earnings, and accumulated OCI move for different reasons.

Thus equity analysis should use both:

```text
Balance sheet
→ ending amount

Statement of changes in equity
→ why amount changed
```

## 28. Common-Size Balance Sheet

Vertical common-size balance sheet expresses each item as percentage of total assets.

Formula:

$$
Common\text{-}Size\ Item
=
\frac{Balance\ Sheet\ Item}{Total\ Assets}
\times100\%
$$

Examples:

$$
Cash\%=
\frac{Cash}{Total\ Assets}
$$

$$
Inventory\%=
\frac{Inventory}{Total\ Assets}
$$

$$
Debt\%=
\frac{Debt}{Total\ Assets}
$$

### Why It Matters

Companies with different size can be compared based on **structure rather than absolute scale**.

Robinson's hypothetical Companies A, B, and C show this clearly:

- A and B have similar total assets;
- A has much larger proportion in cash and marketable securities;
- B has much larger receivables/inventory and current liabilities;
- C has substantial cash but is financed overwhelmingly by liabilities.

This reveals an important insight:

> **Liquidity and solvency are separate dimensions.**

Company C can look liquid in the short term while still being highly leveraged and therefore less solvent.

## 29. Liquidity vs Solvency

### Liquidity

Ability to meet **short-term financial commitments**.

Focus:

- near-term cash;
- convertibility of assets to cash;
- operating funding needs.

### Solvency

Ability to meet **long-term financial obligations**.

Focus:

- capital structure;
- debt burden;
- long-term repayment ability.

> [!WARNING] Important Distinction
> **Liquid ≠ necessarily solvent.**
>
> **Solvent ≠ necessarily liquid.**

A company can have good long-term net worth but temporarily insufficient cash.

Another can hold cash today but carry excessive long-term debt.

## 30. Current Ratio

$$
Current\ Ratio
=
\frac{Current\ Assets}{Current\ Liabilities}
$$

Interpretation:

If:

$$
Current\ Ratio=2.0
$$

company has 2 units of current assets for each 1 unit current liability.

Higher often indicates stronger short-term cushion.

But current ratio is only a rough measure because current assets differ dramatically in liquidity.

### Limitations

- cash ≠ inventory in liquidity;
- point-in-time measure;
- seasonality;
- end-of-period transactions;
- credit quality of receivables;
- inventory obsolescence.

## 31. Quick Ratio

Robinson's general formula:

$$
Quick\ Ratio
=
\frac{
Cash
+
Short\text{-}Term\ Marketable\ Securities
+
Receivables
}{
Current\ Liabilities
}
$$

Inventory and less-liquid current assets are excluded.

This makes quick ratio more conservative than current ratio.

Normally:

$$
Quick\ Ratio \le Current\ Ratio
$$

If difference is large, much of company's current asset base may be inventory/prepaids.

## 32. Cash Ratio

$$
Cash\ Ratio
=
\frac{
Cash
+
Short\text{-}Term\ Marketable\ Securities
}{
Current\ Liabilities
}
$$

This measures near-term coverage using only assets closest to cash.

Normally:

$$
Cash\ Ratio
\le
Quick\ Ratio
\le
Current\ Ratio
$$

But a low cash ratio does not automatically mean crisis if company has:

- strong predictable cash inflows;
- available credit lines;
- rapidly collectible receivables.

## 33. Long-Term Debt-to-Equity Ratio

$$
Long\text{-}Term\ Debt\text{-}to\text{-}Equity
=
\frac{Long\text{-}Term\ Debt}{Total\ Equity}
$$

Measures long-term debt capital relative to equity capital.

All else equal, higher ratio implies greater financial leverage and potentially weaker solvency.

But context matters.

Robinson's illustration emphasizes that an increase can occur for prudent reasons—for example securing long-term funding during disrupted credit markets—while overall leverage may still improve.

## 34. Debt-to-Equity Ratio

$$
Debt\text{-}to\text{-}Equity
=
\frac{Total\ Debt}{Total\ Equity}
$$

Shows relative creditor financing versus owner financing.

Higher:

- more leverage;
- potentially higher financial risk;
- greater sensitivity of equity returns to operating results.

But leverage can also increase shareholder returns when business performance is strong.

Therefore:

> **Higher debt-to-equity is not automatically bad; it means more financial leverage and requires risk-return context.**

## 35. Financial Leverage Ratio

Robinson uses:

$$
Financial\ Leverage
=
\frac{Total\ Assets}{Total\ Equity}
$$

From:

$$
Assets = Liabilities + Equity
$$

if liabilities increase relative to equity:

$$
\frac{Assets}{Equity}
\uparrow
$$

This ratio shows how much asset base is supported by each unit of equity.

Example:

$$
Assets=500,\ Equity=100
$$

then:

$$
Financial\ Leverage=5.0
$$

Meaning: each 1 unit equity supports 5 units assets, with remaining financing coming from liabilities.

## 36. Why Ratio Interpretation Requires Judgment

Robinson strongly warns against mechanical ratio conclusions.

### 36.1 Accounting Differences

Different accounting methods can alter:

- assets;
- liabilities;
- equity;
- ratios.

### 36.2 Business Heterogeneity

Conglomerates/diversified firms may not have one meaningful industry benchmark.

Segment-specific analysis may be better.

### 36.3 Point-in-Time Distortion

Balance-sheet ratios use values at one date.

Management can change short-term financing or operating positions near year-end.

### 36.4 Temporary vs Persistent Conditions

A weak ratio may reflect:

- temporary seasonal effect;
- strategic inventory build;
- one-off acquisition;
- temporary debt financing.

Or it may reflect persistent deterioration.

Analyst must distinguish the two.

### 36.5 Composition Matters

Two companies can have same current ratio:

$$
2.0
$$

but:

Company A:
- mostly cash.

Company B:
- mostly slow inventory.

Economic liquidity is not equal.

## 37. A Coherent Example — Same Total Assets, Different Risk

Consider:

### Company Alpha

- Total assets = 1,000
- Cash = 300
- Receivables = 200
- Inventory = 100
- PPE = 400
- Current liabilities = 200
- Long-term debt = 100
- Equity = 700

Liquidity:

$$
Current\ Assets=600
$$

$$
Current\ Ratio
=
\frac{600}{200}=3.0
$$

Solvency:

$$
Debt\text{-}to\text{-}Equity
=
\frac{300}{700}
=
0.43
$$

### Company Beta

- Total assets = 1,000
- Cash = 50
- Receivables = 150
- Inventory = 400
- PPE = 400
- Current liabilities = 300
- Long-term debt = 500
- Equity = 200

Current assets also:

$$
50+150+400=600
$$

Current ratio:

$$
\frac{600}{300}=2.0
$$

Quick ratio:

$$
\frac{50+150}{300}
=
0.67
$$

Debt-to-equity:

$$
\frac{800}{200}=4.0
$$

### Meaning

Both companies have total assets 1,000 and current assets 600.

Yet:

- Alpha has much stronger liquidity;
- Alpha has much lower leverage;
- Beta's current assets are more inventory-heavy;
- Beta has far thinner equity cushion.

This is the central lesson of Chapter 5:

> **Balance sheet analysis is about composition and claims, not just totals.**

## Chapter Synthesis

Jika seluruh chapter hanya boleh dipahami sebagai satu cerita, ceritanya adalah ini:

**Balance sheet is a map of resources and claims at one moment—but the map is drawn using accounting measurement rules, not pure market values.**

The first layer is classification:

```text
Assets
→ current / non-current

Liabilities
→ current / non-current

Residual
→ equity
```

The second layer is quality:

```text
Current assets
→ how liquid?

Receivables
→ how collectible?

Inventory
→ how saleable / correctly valued?

PPE
→ what carrying basis and depreciation?

Intangibles
→ recognized? amortised? impaired?

Goodwill
→ acquisition residual with impairment risk?

Liabilities
→ when must cash be paid?

Equity
→ how much residual cushion remains?
```

The third layer is analysis:

```text
Balance Sheet
↓
Common-size structure
↓
Liquidity ratios
+
Solvency ratios
↓
Trend / peer / industry context
↓
Economic judgment
```

A balance sheet therefore cannot be understood by asking only:

> “How large are assets?”

The useful questions are:

- What type of assets?
- How liquid?
- How measured?
- How much judgment?
- Who financed them?
- How soon must liabilities be settled?
- How large is the equity cushion?
- Are accounting policies comparable?
- Is current position temporary or persistent?

That is the transition from **reading a balance sheet** to **analyzing financial position**.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Balance sheet | Financial position at one date | Resources + claims snapshot | [[1.4 Company Account Structure]] |
| Assets | Controlled economic resources | Source of future benefits | [[1.4 Company Account Structure]] |
| Liabilities | Obligations/creditor claims | Future resource outflows | [[1.4 Company Account Structure]] |
| Equity | Residual claim | Owner cushion after liabilities | [[1.4 Company Account Structure]] |
| Current asset | Near-term realized/consumed resource | Liquidity analysis | [[1.6 Financial Ratios and Interpretation]] |
| Current liability | Near-term settlement obligation | Liquidity analysis | [[1.6 Financial Ratios and Interpretation]] |
| Cash equivalent | Highly liquid very short-term investment | Near-cash resource | [[1.6 Financial Ratios and Interpretation]] |
| Receivable | Claim against customer/other party | Collection quality matters | [[1.6 Financial Ratios and Interpretation]] |
| Inventory | Goods/materials held for sale/use | Less liquid; affects COGS | [[1.5 Financial Statements Construction]] |
| PPE | Long-lived tangible operating asset | Depreciation / measurement affects statements | [[1.4 Company Account Structure]] |
| Investment property | Property held for rent/appreciation | Different economics from operational PPE | [[1.4 Company Account Structure]] |
| Intangible asset | Identifiable non-physical resource | Recognition and impairment judgment | [[1.4 Company Account Structure]] |
| Goodwill | Acquisition residual over identifiable net assets | Impairment / valuation caution | [[1.4 Company Account Structure]] |
| Retained earnings | Cumulative retained accounting profit | Not cash | [[1.4 Company Account Structure]] |
| Accumulated OCI | Cumulative OCI component in equity | Explains equity beyond retained earnings | [[1.4 Company Account Structure]] |
| Working capital | CA − CL | Nominal short-term cushion | [[1.6 Financial Ratios and Interpretation]] |
| Current ratio | CA / CL | Broad liquidity measure | [[1.6 Financial Ratios and Interpretation]] |
| Quick ratio | Cash + securities + receivables / CL | Stricter liquidity measure | [[1.6 Financial Ratios and Interpretation]] |
| Debt-to-equity | Debt / Equity | Solvency / leverage | [[1.6 Financial Ratios and Interpretation]] |
| Financial leverage | Assets / Equity | Degree of asset financing relative to equity | [[1.6 Financial Ratios and Interpretation]] |

## Compression Notes

### Retained in Detail

- balance sheet purpose and accounting equation;
- uses and limitations;
- current vs non-current classification;
- cash and cash equivalents;
- marketable securities;
- receivables;
- inventories;
- prepaid assets;
- current liabilities;
- PPE cost/revaluation context;
- investment property;
- intangible assets and finite/indefinite-life treatment;
- goodwill;
- financial assets;
- deferred tax assets/liabilities at conceptual level;
- non-current debt and provisions;
- equity components;
- statement of changes in equity linkage;
- common-size analysis;
- liquidity and solvency distinction;
- current, quick, cash, debt-to-equity, long-term debt-to-equity, and financial leverage ratios;
- ratio-analysis limitations.

### Condensed

- full SAP/Apple balance-sheet exhibits were reduced to analytical lessons;
- detailed accounting-standard paragraph references were omitted;
- long company-specific accounting-policy quotations were paraphrased;
- full measurement rules for financial assets were condensed because dedicated later chapters deepen these topics;
- detailed tax accounting mechanics were deferred to the tax chapter;
- long pension/employee-benefit discussions were compressed to balance-sheet obligation logic;
- multiple ratio exercises were combined into one coherent example.

### Omitted / Beyond CF4

- end-of-chapter multiple-choice exercises;
- web references and bibliography;
- exhaustive fair-value hierarchy mechanics;
- detailed impairment calculation techniques belonging to dedicated chapters;
- full deferred-tax calculations;
- detailed pension actuarial measurement;
- detailed security-classification accounting beyond what is needed to understand balance-sheet structure.

> [!IMPORTANT] Textbook Context
> Chapter 5 reflects IFRS and US GAAP rules at the textbook's publication date. This note preserves the textbook's measurement and presentation context rather than silently updating later accounting-standard changes.

## CF4 Connection Map

```text
Business resources & obligations
        ↓
[[1.4 Company Account Structure]]
        ↓
Current / non-current classification
        ↓
[[1.5 Financial Statements Construction]]
        ↓
Balance-sheet amounts
        ↓
Common-size + liquidity + solvency
        ↓
[[1.6 Financial Ratios and Interpretation]]
```

## Quick Reading Review

- Balance sheet is a **snapshot at one date**.
- Fundamental equation:
  $$
  A=L+E
  $$
- Equity is a residual claim, **not cash**.
- Balance sheet values are not necessarily market values.
- Different balance-sheet items can use different measurement bases.
- Current classification supports liquidity analysis.
- Cash equivalents are near-cash very short-term investments.
- Receivables must be evaluated for collectability.
- Inventory is less liquid and connects directly to COGS/profit.
- Prepaid expenses are assets but are generally not readily spendable cash.
- Current portion of long-term debt is a current liability because payment is near term.
- PPE can be affected by depreciation, impairment, and measurement model.
- IFRS textbook context allows PPE cost/revaluation models; US GAAP context uses cost model.
- Finite-life intangibles are amortised; indefinite-life intangibles rely on impairment rather than systematic amortisation.
- Goodwill arises from acquisition accounting, not merely internal reputation.
- Some economically valuable internally developed resources never appear as recognized assets.
- Retained earnings are cumulative accounting earnings retained, not a cash reserve.
- Common-size balance sheet expresses items as % total assets.
- Liquidity = short-term ability; solvency = long-term ability.
- Current ratio uses all current assets.
- Quick ratio removes inventory and other less-liquid current assets.
- Cash ratio is the strictest of the three basic liquidity ratios.
- Debt-to-equity and financial leverage describe financing risk.
- Higher/lower ratios require **context**, not automatic judgment.
- Accounting methods, industry differences, seasonality, and end-period decisions can distort comparisons.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists / Introduction | Robinson et al., Chapter 5, Section 1 |
| Balance sheet elements and equation | Chapter 5, Sections 1–2 |
| Uses and limitations | Chapter 5, Section 2 |
| Presentation / current-noncurrent classification | Chapter 5, Sections 2–3 |
| Cash and cash equivalents | Chapter 5, Section 3 |
| Marketable securities | Chapter 5, Section 3 |
| Receivables | Chapter 5, Section 3 |
| Inventories | Chapter 5, Section 3 |
| Other current assets / prepaids | Chapter 5, Section 3 |
| Current liabilities | Chapter 5, Section 3 |
| PPE | Chapter 5, Section 4.1 |
| Investment property | Chapter 5, Section 4.2 |
| Intangible assets | Chapter 5, Section 4.3 |
| Identifiable intangibles | Chapter 5, Section 4.3.1 |
| Goodwill | Chapter 5, Section 4.4 |
| Financial assets / other non-current assets | Chapter 5, Section 4 |
| Non-current liabilities | Chapter 5, Section 5 |
| Shareholders' equity | Chapter 5, Section 6 |
| Apple statement of changes in equity | Chapter 5, Section 6 / Exhibit 16 |
| Common-size balance sheet | Chapter 5, Section 7.1 / Exhibit 17 |
| Liquidity and solvency ratios | Chapter 5, Section 7 |
| Ratio limitations | Chapter 5, Section 7 |
| Chapter synthesis | Chapter 5, Section 8 Summary |
