---
type: "condensed-book"
exam: "CF4"
book: "International Financial Statement Analysis"
author: "Elbie Antonites; Michael A. Broihahn"
chapter: "13"
chapter_title: "Income Taxes"
cf4_topics: ["1.1", "1.4", "1.5", "1.6"]
cf4_relevance: "High"
source_scope: "Robinson et al. Chapter 13 — Sections 1–3 and 6–8 retained in detail; Sections 4–5 compressed as beyond direct CF4 scope"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Robinson, IncomeTaxes, DeferredTax, TaxBase, DTA, DTL]
date_created: "2026-08-24"
status: "study-note"
---

# Robinson — Chapter 13: Income Taxes

> [!ABSTRACT] Chapter in One View
> Chapter ini menjelaskan mengapa **income tax expense pada financial statements tidak selalu sama dengan taxes payable kepada tax authority**, dan bagaimana perbedaan tersebut menghasilkan **deferred tax assets (DTA)** serta **deferred tax liabilities (DTL)**.
>
> Titik awalnya adalah distinction:
>
> - **accounting profit / pretax income** → dihitung menurut financial reporting standards;
> - **taxable income** → dihitung menurut tax rules.
>
> Karena rules recognition dan measurement berbeda, maka:
>
> $$
> Accounting\ Profit \neq Taxable\ Income
> $$
>
> Akibatnya:
>
> $$
> Income\ Tax\ Expense \neq Income\ Taxes\ Payable \neq Cash\ Taxes\ Paid
> $$
>
> Chapter kemudian membangun konsep **tax base**: nilai asset/liability untuk tax purposes dibandingkan dengan **carrying amount** untuk financial reporting. Difference antara keduanya dapat menghasilkan **temporary differences**, yaitu differences yang expected to reverse di masa depan.
>
> Core relationship:
>
> $$
> Income\ Tax\ Expense
> =
> Current\ Tax\ Expense
> +
> Deferred\ Tax\ Expense
> $$
>
> Dalam perubahan balance:
>
> $$
> Income\ Tax\ Expense
> =
> Taxes\ Payable
> +
> \Delta DTL
> -
> \Delta DTA
> $$
>
> Deferred taxes diukur menggunakan tax rate yang **expected to apply when the asset is realized or liability settled**, dan tidak didiskontokan ke present value dalam textbook framework.
>
> DTA harus dinilai recoverability-nya. Jika tidak cukup likely untuk direalisasi, carrying amount dikurangi; dalam US GAAP source, reduction dilakukan melalui **valuation allowance**.
>
> Disclosure tax sangat penting untuk analyst. Effective tax rate reconciliation, DTA/DTL composition, valuation allowance, loss carryforwards, dan expected reversals dapat materially affect earnings, assets, liabilities, equity, dan ratios.
>
> Untuk CF4, silabus secara eksplisit menggunakan **Robinson Chapter 13.1–13.3 dan 13.6–13.8**. Karena itu, Sections 1–3 dan 6–8 dipertahankan detail. Sections 4–5 hanya diberi bridge singkat agar narrative chapter tetap coherent.

## 1. Why This Chapter Exists

Tax accounting memiliki dua sistem pengukuran yang berjalan berdampingan.

### Financial Reporting View

Perusahaan menghitung:

> **accounting profit**

berdasarkan IFRS/US GAAP atau applicable financial reporting framework.

### Tax View

Tax authority menghitung:

> **taxable income**

berdasarkan tax legislation.

Keduanya dapat berbeda karena:

- timing revenue recognition berbeda;
- timing expense deduction berbeda;
- suatu item recognized untuk accounting tetapi tidak untuk tax;
- suatu item taxable/deductible untuk tax tetapi tidak masuk accounting profit;
- carrying amount suatu asset/liability berbeda dari tax base;
- tax losses dapat dibawa ke future periods;
- tax rates dapat berubah.

Itulah sebabnya analyst tidak boleh melihat line **income tax expense** dan menganggap itu identik dengan amount cash yang dibayar ke tax authority.

Mental model:

```text
Economic transaction
├── Financial reporting rules
│   ↓
│ Accounting profit
│
└── Tax rules
    ↓
  Taxable income

Difference
↓
Current tax + deferred tax
↓
Income statement + balance sheet
```

> [!INFO] CF4 Connection
> Chapter ini menghubungkan [[1.1 Taxation Principles]] dengan [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]], dan [[1.6 Financial Ratios and Interpretation]].

## 2. Chapter Map

```text
Chapter 13 — Income Taxes
├── 1. Introduction                       [CORE CF4]
├── 2. Differences Between Accounting
│      Profit and Taxable Income          [CORE CF4]
│   ├── Current tax assets/liabilities
│   └── Deferred tax assets/liabilities
├── 3. Determining the Tax Base           [CORE CF4]
│   ├── Tax base of assets
│   └── Tax base of liabilities
├── 4. Temporary and Permanent
│      Differences                        [BEYOND DIRECT CF4 SCOPE]
├── 5. Unused Tax Losses and Credits      [BEYOND DIRECT CF4 SCOPE]
├── 6. Recognition and Measurement
│      of Current and Deferred Tax        [CORE CF4]
│   └── Valuation allowance
├── 7. Presentation and Disclosure        [CORE CF4]
│   ├── Tax disclosures
│   ├── Effective tax rate reconciliation
│   └── Analytical implications
└── 8. IFRS vs US GAAP                    [CORE CF4]
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 13.1 Introduction | High | [[1.1 Taxation Principles]] |
| 13.2 Accounting Profit vs Taxable Income | Very High | [[1.1 Taxation Principles]], [[1.5 Financial Statements Construction]] |
| 13.3 Tax Base | Very High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| 13.4 Temporary/Permanent Differences | Beyond direct scope; bridge only | [[1.1 Taxation Principles]] |
| 13.5 Tax Losses/Credits | Beyond direct scope; bridge only | [[1.1 Taxation Principles]] |
| 13.6 Recognition & Measurement | Very High | [[1.4 Company Account Structure]], [[1.6 Financial Ratios and Interpretation]] |
| 13.7 Presentation & Disclosure | Very High | [[1.2 Financial Reporting Requirements]], [[1.6 Financial Ratios and Interpretation]] |
| 13.8 IFRS vs US GAAP | High | [[1.3 Accounting Concepts and Sustainability]], [[1.6 Financial Ratios and Interpretation]] |

## 3. Introduction

Under the textbook framework:

- **IAS 12** governs income-tax accounting under IFRS;
- **US GAAP income-tax accounting** follows the relevant US standards discussed in the source.

Both systems recognize that financial reporting and tax authorities may recognize revenues and expenses in different periods.

If difference will reverse in future:

> it is a **temporary difference**.

Temporary differences create future tax consequences and therefore can create:

- deferred tax asset;
- deferred tax liability.

### 3.1 Deferred Tax Asset — Intuition

A DTA represents a **future tax benefit**.

Simplified intuition:

> company has effectively paid/recognized more tax now than financial-reporting economics would imply, or has tax benefits available for future periods.

### 3.2 Deferred Tax Liability — Intuition

A DTL represents a **future tax burden**.

Simplified intuition:

> financial reporting has recognized tax expense/economic income earlier than tax rules require cash tax payment, so part of tax is deferred to future periods.

> [!WARNING] Important Distinction
> **Deferred tax ≠ current tax payable.**
>
> Current tax reflects current taxable income. Deferred tax reflects future tax consequences of existing differences.

## 4. Accounting Profit vs Taxable Income

### 4.1 Accounting Profit

Accounting profit is profit before income tax expense according to financial reporting standards.

Also called:

- pretax income;
- income before taxes.

### 4.2 Taxable Income

Taxable income is income subject to tax according to the jurisdiction's tax rules.

The two can differ because **financial accounting and tax accounting answer different questions**.

Financial reporting asks:

> What economic performance should be reported to users?

Tax law asks:

> What amount is taxable under the jurisdiction's rules?

Therefore:

$$
Accounting\ Profit
\neq
Taxable\ Income
$$

is normal, not automatically an accounting error.

## 5. Three Tax Numbers You Must Keep Separate

This chapter becomes much easier once three amounts are separated.

### 5.1 Income Tax Expense

Appears on the income statement.

It reflects:

- current tax component;
- deferred tax component.

### 5.2 Income Taxes Payable

Balance-sheet liability based primarily on current taxable income and applicable tax rules.

### 5.3 Income Taxes Paid

Actual cash outflow to tax authorities.

Therefore:

```text
Income Tax Expense
→ accrual accounting measure

Taxes Payable
→ liability to tax authority

Taxes Paid
→ actual cash flow
```

> [!WARNING] Important Distinction
> **Tax expense ≠ taxes payable ≠ cash tax paid.**

## 6. Core Relationship — Tax Expense

A useful textbook relationship:

$$
Income\ Tax\ Expense
=
Taxes\ Payable
+
\Delta DTL
-
\Delta DTA
$$

Interpretation:

- DTL increase → current tax has been deferred → tax expense exceeds current payable;
- DTA increase → future tax benefit recognized → tax expense is lower relative to current payable.

Equivalent conceptual framing:

$$
Total\ Tax\ Expense
=
Current\ Tax
+
Deferred\ Tax
$$

### Example

Suppose:

- taxes payable = 40;
- DTL increases by 8;
- DTA increases by 3.

Then:

$$
Income\ Tax\ Expense
=
40+8-3
=
45
$$

So:

- income statement tax expense = 45;
- current tax payable = 40.

Difference of 5 is net deferred tax expense.

## 7. When Taxable Income Exceeds Accounting Profit

If taxable income is higher than accounting profit, current taxes payable may exceed the tax expense associated with accounting profit.

This can create a **deferred tax asset** when the difference is expected to reverse.

Intuition:

```text
Pay relatively more tax now
↓
Expected future tax relief
↓
Deferred tax asset
```

## 8. When Accounting Profit Exceeds Taxable Income

If accounting profit is higher than taxable income, current taxes payable may be less than financial-reporting tax expense.

This can create a **deferred tax liability**.

Intuition:

```text
Pay relatively less tax now
↓
Expected future tax payment
↓
Deferred tax liability
```

### Classic Example — Depreciation

Company may use:

- straight-line depreciation for financial reporting;
- accelerated depreciation for tax.

Early years:

```text
Tax depreciation > Accounting depreciation
↓
Taxable income < Accounting profit
↓
Current taxes payable lower
↓
DTL created
```

Later years, accelerated tax depreciation declines and difference reverses.

## 9. Current Tax Assets and Liabilities

### Current Tax Liability

Amount payable to tax authority based on current taxable income.

### Current Tax Asset

Amount expected to be recovered from tax authority, for example from overpayment/refund entitlement.

These current tax balances are distinct from deferred tax balances.

This gives four possible tax-related balance-sheet concepts:

| Balance | Meaning |
|---|---|
| Current tax liability | Current tax still owed |
| Current tax asset | Current tax recoverable/refundable |
| Deferred tax asset | Future tax benefit |
| Deferred tax liability | Future tax burden |

## 10. Why Accounting Profit and Taxable Income Differ

The source lists several causes.

They include:

- revenue recognized in different periods;
- expenses recognized/deducted in different periods;
- items recognized for accounting but not tax;
- items recognized for tax but not accounting;
- different carrying amount and tax base;
- different treatment of gains/losses;
- tax loss carryforwards;
- prior-period adjustments recognized differently.

The key analytical distinction is whether a difference is expected to reverse.

```text
Difference
├── reverses in future → temporary → potential DTA/DTL
└── never reverses     → permanent → no deferred tax from that difference
```

## 11. Tax Base

Tax base is the value assigned to an asset or liability **for tax purposes**.

Do not confuse with:

> **carrying amount / book value**, which is the amount recognized under financial reporting standards.

Thus two valuations exist:

```text
Financial Reporting
→ Carrying Amount

Tax Accounting
→ Tax Base
```

Difference between them can produce a temporary difference.

## 12. Tax Base of an Asset

Textbook definition in practical form:

> tax base of an asset is the amount that will be deductible for tax purposes against future taxable economic benefits when the asset is recovered.

If future economic benefits associated with the asset will **not be taxable**, the tax base equals carrying amount in the source framework.

### Example — Depreciable Asset

Suppose machinery:

- carrying amount = 80;
- remaining tax basis = 50.

Difference:

$$
80-50=30
$$

This means the financial statements still carry 80 of asset, but only 50 remains deductible for tax.

If future recovery generates taxable benefit, the 30 difference can produce a taxable temporary difference and a DTL.

At tax rate 30%:

$$
DTL
=
30(30\%)
=
9
$$

### Intuition

The company will recover 80 economically but has only 50 of future tax deductions.

Thus:

> future taxable amount is larger than accounting carrying recovery → future tax burden.

## 13. Tax Base of a Liability

The textbook gives the general rule:

$$
Tax\ Base\ of\ Liability
=
Carrying\ Amount
-
Future\ Tax\ Deductible\ Amount
$$

### Example — Accrued Expense

Suppose:

- accrued warranty liability = 20;
- deduction for tax occurs only when paid;
- therefore future deductible amount = 20.

Then:

$$
Tax\ Base
=
20-20
=
0
$$

Carrying amount is 20, tax base is 0.

The difference can produce a deductible temporary difference and therefore a DTA.

At tax rate 30%:

$$
DTA=20(30\%)=6
$$

### Revenue Received in Advance

For a deferred/unearned revenue liability, tax base is generally:

> carrying amount less any amount of revenue that will not be taxable in future.

The exact result depends on whether tax authority already taxed the cash receipt.

## 14. The Tax-Base Mental Model

For an asset:

> **How much of this asset's future recovery can still be deducted for tax?**

For a liability:

> **How much future tax deduction will arise when this liability is settled?**

This is more reliable than trying to memorize DTA/DTL labels without understanding the economics.

## 15. Temporary vs Permanent Differences — Bridge Only

`[BEYOND DIRECT CF4 SECTION SCOPE]`

Section 4 is not listed in the CF4 Robinson scope, so it is not reproduced in full. However, the distinction is necessary to understand Sections 2, 3, and 6.

### Temporary Difference

Difference expected to reverse in future.

May create:

- DTA;
- DTL.

### Permanent Difference

Difference between tax and accounting treatment that **will never reverse**.

Therefore:

> **Permanent differences do not create DTA or DTL.**

This distinction is enough for understanding the scoped sections.

## 16. Unused Tax Losses and Credits — Bridge Only

`[BEYOND DIRECT CF4 SECTION SCOPE]`

Section 5 gives detailed treatment of tax loss carryforwards and unused tax credits.

For continuity, remember only:

> Current tax losses or credits may generate a future tax benefit if tax rules allow them to offset future taxable amounts.

Recognition depends on expected recoverability and relevant accounting rules.

Detailed mechanics are not retained here because Section 5 is outside the explicit Robinson scope in the CF4 syllabus.

## 17. Recognition and Measurement of Current Tax

Current taxes payable/recoverable are measured using applicable tax rates at the balance-sheet date according to the source.

If tax for current/prior periods has not yet been paid:

> recognize a tax liability.

If amount paid exceeds tax obligation:

> recognize a current tax asset.

These are **current-tax balances**, separate from deferred tax.

## 18. Recognition and Measurement of Deferred Tax

Deferred taxes are measured using the tax rate **expected to apply when the asset is realized or liability settled**.

Core rule:

$$
Deferred\ Tax
=
Temporary\ Difference
\times
Expected\ Reversal\ Tax\ Rate
$$

### Example

Taxable temporary difference:

$$
100
$$

Current tax rate:

$$
30\%
$$

But enacted/expected reversal rate:

$$
25\%
$$

Deferred tax should reflect:

$$
100(25\%)=25
$$

not 30, assuming source recognition conditions are met.

## 19. Deferred Taxes Are Not Discounted

Even though reversal may happen several years later:

> deferred tax assets and liabilities are **not discounted to present value** in the textbook accounting framework.

Thus:

$$
DTL
=
Temporary\ Difference
\times
Applicable\ Future\ Tax\ Rate
$$

not:

$$
\frac{Future\ Tax}{(1+r)^n}
$$

for financial-reporting recognition.

> [!WARNING] Important Distinction
> Analyst may think economically in present-value terms, but reported deferred tax balance is not a discounted balance under the source rules.

## 20. Changes in Tax Rates

If expected tax rate changes, existing deferred tax balances must be remeasured.

### Example — DTL

Temporary difference:

$$
200
$$

Old tax rate:

$$
35\%
$$

Old DTL:

$$
200(35\%)=70
$$

New tax rate:

$$
30\%
$$

New DTL:

$$
200(30\%)=60
$$

DTL falls by:

$$
10
$$

This reduction can affect income tax expense and therefore net income, depending on where the underlying tax item is recognized.

### Direction Logic

For **net DTL**:

```text
Tax rate ↓
→ DTL ↓
→ tax expense may ↓
→ net income may ↑
```

For **net DTA**:

```text
Tax rate ↓
→ DTA value ↓
→ tax expense may ↑
→ net income may ↓
```

This asymmetry is important.

## 21. Where Deferred Tax Effects Are Recognized

The source says income taxes/deferred taxes normally affect the income statement unless related to items recognized directly in equity or certain business-combination effects.

Core principle:

> **Tax accounting generally follows the location of the underlying accounting item.**

If an underlying gain/loss bypasses net income and goes directly to equity/OCI under applicable treatment, related tax effect may follow it rather than entering current net income.

## 22. Recoverability of Deferred Tax Assets

A DTA is valuable only if company can actually use future tax benefits.

Therefore DTA must be assessed at each balance-sheet date.

Question:

> **Will the company generate sufficient future taxable income to realize the tax benefit?**

If answer becomes less likely:

- carrying amount should be reduced.

If circumstances improve:

- prior reduction may be reversed where permitted by the source framework.

## 23. Valuation Allowance

Under US GAAP in the textbook source, DTA reduction is made through a **valuation allowance**.

Conceptually:

$$
Net\ DTA
=
Gross\ DTA
-
Valuation\ Allowance
$$

### Meaning

Large valuation allowance suggests management believes a meaningful part of gross DTA may not be realized.

This can imply concern about:

- future profitability;
- ability to use tax-loss carryforwards;
- expiration of tax benefits.

### Earnings Effect

If valuation allowance is reduced because recoverability improves:

```text
Net DTA ↑
Tax expense ↓
Net income ↑
```

This can increase reported earnings **without equivalent improvement in current operating cash flow**.

Therefore valuation-allowance changes deserve analytical attention.

## 24. Micron Technology Example — Valuation Allowance

`[TEXTBOOK EXAMPLE]`

The chapter uses Micron Technology (MU) to show the analytical importance of tax disclosures.

The company had substantial tax-loss carryforwards and valuation allowance.

The source explains that continued profitability could make realization more likely, allowing valuation allowance to be reduced.

One disclosed change reduced tax provision by approximately:

$$
\$103\text{ million}
$$

in the example year.

### Meaning

That reduction:

- lowers reported tax expense;
- raises net income;
- does **not** represent an equivalent reduction in current cash taxes simply because the accounting valuation allowance changed.

Thus:

> **Tax accounting estimates can materially affect reported earnings.**

## 25. Deferred Tax Liability — Liability, Equity, or Neither?

This is one of the most useful analyst-specific discussions in Chapter 13.

Traditional balance sheet classification calls DTL a liability.

But analyst may adjust treatment depending on expected reversal.

### Case 1 — Expected to Reverse with Future Tax Payment

Treat as:

> **liability/debt-like claim**

because future cash outflow is expected.

### Case 2 — Not Expected to Reverse

If no future cash tax payment is expected, source suggests analyst may treat DTL as:

> **equity-like**

because it behaves more like a permanent source of financing.

### Case 3 — Amount and Timing Highly Uncertain

If both amount and timing of future payments are uncertain:

> exclude from both debt and equity in analytical adjustment.

This does **not** mean financial statements themselves reclassify the item this way.

It is an **analyst adjustment** for interpretation.

> [!WARNING] Important Distinction
> **Reported classification ≠ analytical classification.**

## 26. Presentation and Disclosure of Income Taxes

Tax notes contain information that cannot be understood from the income statement tax line alone.

Useful disclosures can include:

- major components of tax expense;
- current vs deferred tax;
- components of DTA and DTL;
- valuation allowance;
- unused losses/credits;
- expiration periods;
- tax-rate reconciliation;
- tax effects of significant items;
- jurisdictional information;
- uncertain tax matters under relevant rules.

For analyst, tax note is often necessary to understand:

- sustainability of tax expense;
- future tax payments;
- quality of earnings;
- balance-sheet adjustments;
- comparability across companies.

## 27. Effective Tax Rate

A common analytical measure:

$$
Effective\ Tax\ Rate
=
\frac{Income\ Tax\ Expense}{Pretax\ Income}
$$

### Example

Pretax income:

$$
500
$$

Tax expense:

$$
140
$$

Then:

$$
ETR
=
\frac{140}{500}
=
28\%
$$

But statutory tax rate may be 35%.

Difference requires explanation.

## 28. Statutory vs Effective Tax Rate

**Statutory rate** = tax rate specified by relevant tax law.

**Effective rate** = actual accounting tax expense relative to pretax accounting income.

They can differ because of:

- permanent differences;
- tax incentives;
- jurisdiction mix;
- tax-exempt income;
- non-deductible expenses;
- changes in valuation allowance;
- tax-rate changes;
- other tax adjustments.

Thus:

> **Effective tax rate below statutory rate is not automatically evidence of manipulation.**

Analyst must read the reconciliation.

## 29. Effective Tax Rate Reconciliation

A typical reconciliation begins with:

```text
Expected tax at statutory rate
± tax effects of reconciling items
= reported income tax expense
```

Or in percentage form:

```text
Statutory rate
± permanent / jurisdiction / credit / other effects
= effective tax rate
```

### Why It Matters

The reconciliation helps identify whether low/high tax rate is:

- sustainable;
- one-off;
- jurisdiction-driven;
- valuation-allowance driven;
- caused by permanent differences.

For forecasting:

> recurring tax drivers deserve more weight than one-time adjustments.

## 30. Tax Disclosure and Earnings Quality

Suppose net income rises 20%.

If operating profit is flat but valuation allowance is sharply reduced:

```text
Operating economics ≈ unchanged
Tax expense ↓
Net income ↑
```

Reported earnings growth may be real under accounting rules, but analyst should separate:

- core operating improvement;
- tax-accounting adjustment.

This is similar to other non-operating or non-recurring analysis.

## 31. Tax Rate Change and Financial Ratios

A change in tax rate can remeasure deferred taxes and alter:

- assets;
- liabilities;
- equity;
- net income;
- return on assets;
- return on equity;
- debt-to-equity;
- effective tax rate.

### Example — Net DTL Reduction

Suppose:

- DTL falls 20 due to tax-rate reduction;
- effect is recognized in income;
- no other changes.

Then:

- liabilities ↓ 20;
- net income ↑ 20 before related presentation nuances;
- retained earnings/equity ↑ 20.

Potential ratio effects:

$$
Debt/Equity \downarrow
$$

and:

$$
ROE
$$

may change through both numerator and denominator.

Thus accounting tax changes can alter ratios even without current operating cash change.

## 32. IFRS vs US GAAP — Big Picture

The source states that IFRS and US GAAP are similar on many income-tax concepts but contain notable differences in methodologies and detailed treatment.

Both frameworks generally recognize:

- current tax;
- deferred tax assets;
- deferred tax liabilities;
- temporary-difference effects.

But differences can exist in:

- recognition thresholds;
- valuation allowance approach;
- tax treatment associated with asset revaluation;
- classification/presentation;
- uncertain tax positions;
- tax-rate reconciliation requirements;
- certain business-combination items.

Because the chapter is textbook-period specific, this note preserves the source's conceptual comparison rather than updating modern standards.

## 33. IFRS vs US GAAP — Analyst Implication

The main analytical lesson is not memorizing every historical rule.

It is:

> **Same underlying tax economics can lead to different reported DTA/DTL or disclosure depending on reporting framework.**

Therefore before comparing companies:

1. identify framework;
2. inspect tax accounting policies;
3. normalize material differences where practical;
4. focus on future cash-tax consequences.

## 34. Tax Rate Reconciliation Requirement

The source notes different details in how reconciliation is required.

Broadly:

- IFRS requires reconciliation of actual and expected tax expense based on applicable tax rates;
- historical US GAAP source requires reconciliation for public companies using domestic federal statutory rate relative to pretax income from continuing operations.

`[TEXTBOOK CONTEXT]` Use this as source-period framework, not as a claim about every present-day filing rule.

## 35. A Unified Example

Suppose a company reports:

- accounting profit = 1,000;
- taxable income = 800;
- current tax rate = 30%;
- taxable temporary difference = 200 expected to reverse at 30%.

### Step 1 — Taxes Payable

$$
Taxes\ Payable
=
800(30\%)
=
240
$$

### Step 2 — Deferred Tax Liability

$$
DTL
=
200(30\%)
=
60
$$

Assume DTL was zero at beginning.

### Step 3 — Tax Expense

$$
Tax\ Expense
=
Taxes\ Payable
+
\Delta DTL
-
\Delta DTA
$$

$$
=
240+60-0
=
300
$$

This matches:

$$
1{,}000(30\%)=300
$$

### Step 4 — Net Income

$$
Net\ Income
=
1{,}000-300
=
700
$$

### Economic Story

```text
Accounting profit = 1,000
Taxable now = only 800
↓
Pay cash/current tax on 800 = 240
↓
Remaining 200 is only tax-deferred, not tax-free
↓
Future tax consequence = DTL 60
↓
Total accounting tax expense = 300
```

This example captures the central logic of the chapter.

## Chapter Synthesis

Jika seluruh chapter hanya boleh dipahami sebagai satu cerita, ceritanya adalah:

**Financial accounting and tax accounting measure income using different rules.**

Therefore:

```text
Accounting Profit
≠
Taxable Income
```

That creates differences between:

```text
Income Tax Expense
Taxes Payable
Cash Taxes Paid
```

To track future tax consequences, accounting compares:

```text
Carrying Amount
vs
Tax Base
```

If the difference will reverse:

```text
Temporary Difference
↓
Future Tax Benefit / Burden
↓
DTA / DTL
```

Then:

```text
Taxes Payable
+
Change in Deferred Tax
↓
Income Tax Expense
```

But accounting recognition is only the start of analysis.

Analyst must ask:

- Will DTA actually be realized?
- Does valuation allowance reveal weak expected profitability?
- Will DTL actually reverse and require cash?
- Is effective tax rate sustainable?
- Is earnings change driven by operations or tax accounting?
- What happens if tax rate changes?
- Are IFRS and US GAAP companies genuinely comparable?

The deepest lesson:

> **Tax accounting is about timing, measurement, future cash consequences, and recoverability—not merely multiplying pretax income by a tax rate.**

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Accounting profit | Pretax profit under accounting standards | Starting point for reported tax expense | [[1.5 Financial Statements Construction]] |
| Taxable income | Income subject to tax law | Basis for current tax payable | [[1.1 Taxation Principles]] |
| Income tax expense | Current + deferred tax accounting expense | Affects net income | [[1.5 Financial Statements Construction]] |
| Taxes payable | Current liability to tax authority | Current tax obligation | [[1.4 Company Account Structure]] |
| Taxes paid | Actual cash tax outflow | Cash-flow reality | [[1.4 Company Account Structure]] |
| Tax base | Value of asset/liability for tax purposes | Basis for temporary differences | [[1.5 Financial Statements Construction]] |
| Carrying amount | Book amount under financial reporting | Compared with tax base | [[1.4 Company Account Structure]] |
| Temporary difference | Difference expected to reverse | Creates deferred tax consequence | [[1.5 Financial Statements Construction]] |
| Permanent difference | Difference that never reverses | No DTA/DTL | [[1.1 Taxation Principles]] |
| Deferred tax asset | Future tax benefit | Value depends on recoverability | [[1.4 Company Account Structure]] |
| Deferred tax liability | Future tax burden | Analyst may assess expected reversal | [[1.4 Company Account Structure]] |
| Valuation allowance | Reduction against DTA in US GAAP source | Signals recoverability uncertainty | [[1.6 Financial Ratios and Interpretation]] |
| Effective tax rate | Tax expense / pretax income | Useful for tax analysis | [[1.6 Financial Ratios and Interpretation]] |
| Statutory tax rate | Legal/reference rate | Benchmark for reconciliation | [[1.1 Taxation Principles]] |
| Tax-rate reconciliation | Bridge statutory → effective tax | Identifies recurring/non-recurring tax drivers | [[1.6 Financial Ratios and Interpretation]] |
| Tax-rate remeasurement | Revalue DTA/DTL when future rate changes | Affects NI, A/L/E, ratios | [[1.6 Financial Ratios and Interpretation]] |

## Compression Notes

### Retained in Detail

- accounting profit vs taxable income;
- income tax expense vs taxes payable vs cash paid;
- current tax assets/liabilities;
- deferred tax assets/liabilities;
- tax base of assets and liabilities;
- relationship between carrying amount and tax base;
- current/deferred tax recognition and measurement;
- expected reversal tax rate;
- non-discounting of deferred tax;
- effect of tax-rate changes;
- DTA recoverability;
- valuation allowance;
- Micron Technology analytical example;
- analytical treatment of DTL;
- tax-note disclosures;
- effective tax rate and reconciliation;
- tax effects on ratios;
- high-level IFRS vs US GAAP comparison.

### Condensed

- Section 4 detailed catalogue of temporary/permanent differences was reduced to the distinction necessary for scoped sections;
- Section 5 detailed unused tax losses/credits mechanics was reduced to a bridge because it is not explicitly cited in CF4;
- long tax-base examples were replaced by shorter reusable numerical examples;
- jurisdiction-specific tax forms and rates were omitted;
- Micron disclosure tables were reduced to their analytical implications;
- IFRS/US GAAP Exhibit 5 was reduced to broad differences and analyst implications rather than every row.

### Omitted / Beyond CF4

- detailed Section 4 subcases not needed for Sections 1–3 and 6–8;
- detailed Section 5 loss/credit carryforward calculations;
- practice problems;
- bibliography and websites;
- post-publication tax/accounting changes.

> [!IMPORTANT] Scope Note
> The official CF4 Robinson reference is **Chapter 13.1–13.3 and 13.6–13.8**. Therefore Sections 4–5 are intentionally not treated as core textbook reading in this note. They appear only as concise conceptual bridges where needed to understand DTA/DTL and recognition.

> [!IMPORTANT] Textbook Context
> Income-tax standards, tax laws, statutory rates, carryforward rules, and IFRS/US GAAP details can change. This note preserves the textbook's framework and does not silently update it with later tax or accounting developments.

## CF4 Connection Map

```text
[[1.1 Taxation Principles]]
        ↓
Taxable Income
        ↕
Accounting Profit
        ↓
Tax Base vs Carrying Amount
        ↓
Deferred Tax Asset / Liability
        ↓
[[1.4 Company Account Structure]]
        ↓
Tax Expense + Net Income
        ↓
[[1.5 Financial Statements Construction]]
        ↓
Effective Tax Rate / Leverage / Profitability Impact
        ↓
[[1.6 Financial Ratios and Interpretation]]
```

## Quick Reading Review

- Chapter 13 is about **income-tax accounting**, not merely tax-rate calculation.
- Accounting profit and taxable income use different rules.
- Therefore:
  $$
  Accounting\ Profit\neq Taxable\ Income
  $$
- Keep separate:
  - income tax expense;
  - taxes payable;
  - cash taxes paid.
- Taxable income drives current tax payable.
- Tax expense includes current and deferred components.
- Useful formula:
  $$
  Tax\ Expense
  =
  Taxes\ Payable
  +
  \Delta DTL
  -
  \Delta DTA
  $$
- Tax base = value for tax purposes.
- Carrying amount = value for financial-reporting purposes.
- Difference that will reverse = temporary difference.
- Permanent difference does not create DTA/DTL.
- DTA = future tax benefit.
- DTL = future tax burden.
- Accelerated tax depreciation vs straight-line book depreciation commonly creates DTL in early years.
- Asset tax base: future deductible amount associated with asset recovery.
- Liability tax base:
  $$
  Carrying\ Amount-Future\ Deductible\ Amount
  $$
- Deferred taxes use expected reversal/settlement tax rate.
- Deferred taxes are not discounted in the source framework.
- Tax-rate change remeasures existing DTA/DTL.
- Lower tax rate reduces both DTA and DTL values.
- For net DTL, lower rate can increase current reported NI; for net DTA, it can reduce NI, depending on recognition location.
- DTA must be assessed for recoverability.
- US GAAP source uses valuation allowance to reduce DTA.
- Reducing valuation allowance can boost reported income without same-period cash-tax improvement.
- DTL expected to reverse is liability-like for analysis.
- DTL not expected to reverse may be treated as equity-like in analyst adjustment.
- Effective tax rate:
  $$
  ETR=\frac{Tax\ Expense}{Pretax\ Income}
  $$
- Effective rate ≠ statutory rate.
- Read the reconciliation to understand why.
- Tax disclosures can materially change interpretation of earnings quality and future cash taxes.
- IFRS/US GAAP comparison requires attention to framework-specific treatment.
- **Tax accounting is fundamentally a timing + future cash consequence problem.**

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose and deferred-tax overview | Robinson et al., Chapter 13, Section 1 |
| Accounting profit vs taxable income | Chapter 13, Section 2 |
| Current tax assets and liabilities | Chapter 13, Section 2.1 |
| Deferred tax assets and liabilities | Chapter 13, Section 2.2 |
| Tax expense / payable / paid distinction | Chapter 13, Section 2 |
| Tax base | Chapter 13, Section 3 |
| Tax base of assets | Chapter 13, Section 3 |
| Tax base of liabilities | Chapter 13, Section 3 |
| Temporary/permanent difference bridge | Chapter 13, Section 4, condensed because beyond direct CF4 scope |
| Loss/credit bridge | Chapter 13, Section 5, condensed because beyond direct CF4 scope |
| Recognition and measurement | Chapter 13, Section 6 |
| Expected tax rate on reversal | Chapter 13, Section 6 |
| Deferred tax non-discounting | Chapter 13, Section 6 |
| Valuation allowance | Chapter 13, Section 6.1 |
| Tax disclosures / analytical application | Chapter 13, Section 7 |
| Micron Technology example | Chapter 13, Section 7 |
| DTL analytical classification | Chapter 13, Section 7 example/solutions |
| Effective tax rate reconciliation | Chapter 13, Section 7 |
| IFRS vs US GAAP | Chapter 13, Section 8 / Exhibit 5 |
| Overall synthesis | Chapter 13 Summary |
