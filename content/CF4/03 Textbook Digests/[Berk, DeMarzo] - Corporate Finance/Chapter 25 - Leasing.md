---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "25"
chapter_title: "Leasing"
cf4_topics: ["2.2 Long-Term Debt Instruments", "2.3 Short and Medium-Term Finance", "2.5 Capital Raising Methods"]
cf4_relevance: "High"
source_scope: "Berk & DeMarzo, Chapter 25 — Sections 25.1–25.4 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, Leasing, LeaseVsBuy, CorporateFinance]
date_created: "2026-08-24"
status: "study-note"
---

# Berk & DeMarzo — Chapter 25: Leasing

> [!ABSTRACT] Chapter in One View
> Chapter 25 membahas **leasing sebagai alternatif sekaligus bentuk financing untuk memperoleh penggunaan property, plant, dan equipment**. Dalam lease, **lessor** tetap menjadi owner asset, sedangkan **lessee** membayar periodic lease payments untuk memperoleh right to use.
>
> Chapter dimulai dari mechanics lease dan menunjukkan bahwa di **perfect capital market**, leasing pada dasarnya adalah zero-NPV financing. Competitive lease payment ditentukan oleh:
>
> $$
> PV(\text{Lease Payments})
> =
> \text{Purchase Price}
> -
> PV(\text{Residual Value})
> $$
>
> Artinya lessee membayar economic depreciation asset selama lease term, bukan seluruh asset value. Karena itu lease payment biasanya lebih rendah daripada payment atas fully amortizing loan. Tetapi lower payment **tidak berarti leasing lebih murah**, sebab pembeli dengan loan masih memiliki residual asset value pada akhir period.
>
> Berk & DeMarzo membahas beberapa lease structures: **sales-type lease, direct lease, sale and leaseback, leveraged lease, synthetic lease**, serta end-of-term structures seperti **fair market value (FMV) lease, $1.00 out lease, fixed-price lease, dan FMV cap lease**. Terms yang memberi valuable option kepada lessee akan tercermin dalam higher lease payment.
>
> Real-world lease choice menjadi menarik karena **accounting, tax, dan legal treatment** dapat berbeda dari ordinary purchase/loan. Dalam textbook's historical FASB treatment, lease dapat diklasifikasikan sebagai **operating lease** atau **capital/finance lease**. Untuk tax, textbook membedakan **true tax lease** dan **non-tax lease**. Dalam bankruptcy, true lease dapat memberi lessor stronger repossession rights daripada ordinary secured lender.
>
> Section 25.3 menunjukkan bahwa comparison yang benar bukan sekadar **lease versus buy**, tetapi **lease versus borrow-and-buy with equivalent leverage**. Untuk true tax lease, procedure utama:
>
> 1. hitung incremental cash flows of leasing versus buying;
> 2. discount incremental cash flows pada **after-tax borrowing rate**:
>
> $$
> r_D(1-t_c)
> $$
>
> Jika:
>
> $$
> NPV(\text{Lease vs Borrow})>0
> $$
>
> leasing advantageous.
>
> Chapter memperkenalkan **lease-equivalent loan**: amount of debt yang menghasilkan fixed obligations sama dengan lease. Ini menegaskan bahwa lease adalah economic leverage bahkan bila accounting presentation tampak berbeda.
>
> Untuk **non-tax lease**, cash flows setara dengan ordinary loan, sehingga lease attractive hanya bila effective lease rate lebih baik daripada borrowing rate.
>
> Section terakhir memisahkan **good reasons** dan **suspect reasons** untuk leasing. Good reasons meliputi tax differences, lower resale/transaction costs, specialization, reduced distress costs, increased debt capacity, mitigation of debt overhang, risk transfer, dan improved incentives. Suspect reasons termasuk avoiding capital-expenditure controls, “preserving capital,” dan off-balance-sheet arguments yang mengabaikan economic leverage.
>
> Untuk CF4, Chapter 25 paling relevan dengan [[2.2 Long-Term Debt Instruments]], [[2.3 Short and Medium-Term Finance]], serta [[2.5 Capital Raising Methods]] karena lease merupakan contractual financing alternative terhadap secured borrowing.

---

## 1. Why This Chapter Exists

Ketika firm ingin menjalankan investment project, firm membutuhkan assets.

Dua basic ways:

```text
Acquire asset
   ↓
Buy
or
Lease
```

Jika purchase:

- company pays purchase price;
- ownership berada pada company;
- company receives residual value later.

Jika lease:

- lessor owns asset;
- lessee receives right to use;
- lessee makes periodic payments.

Economic question:

> **Apakah leasing lebih murah daripada buying?**

Jawaban textbook:

> Dalam perfect capital market, **tidak ada free lunch**. Lease pricing akan menyesuaikan sehingga lease dan economically equivalent purchase financing memiliki same value.

Maka reasons why leasing may matter harus berasal dari **market imperfections**:

- taxes;
- accounting treatment;
- bankruptcy/recovery rules;
- transaction/resale costs;
- information and agency problems;
- specialization.

---

## 2. Chapter Map

```text
Chapter 25 — Leasing
├── 25.1 The Basics of Leasing
│   ├── Lessee and lessor
│   ├── Sales-type lease
│   ├── Direct lease
│   ├── Sale and leaseback
│   ├── Leveraged lease
│   ├── Synthetic lease
│   ├── Lease payments and residual value
│   ├── Lease versus loan
│   ├── FMV lease
│   ├── $1.00 out lease
│   ├── Fixed-price lease
│   └── FMV cap lease
│
├── 25.2 Accounting, Tax, and Legal Consequences
│   ├── Operating lease
│   ├── Capital / finance lease
│   ├── True tax lease
│   ├── Non-tax lease
│   ├── Bankruptcy treatment
│   └── Synthetic leases
│
├── 25.3 The Leasing Decision
│   ├── True-tax lease cash flows
│   ├── Lease vs buy
│   ├── Lease vs borrow
│   ├── Lease-equivalent loan
│   ├── After-tax borrowing rate
│   ├── Effective lease borrowing rate
│   └── Non-tax lease
│
└── 25.4 Reasons for Leasing
    ├── Tax differences
    ├── Reduced resale costs
    ├── Specialization
    ├── Distress costs / debt capacity
    ├── Debt overhang
    ├── Risk transfer
    ├── Incentives
    └── Suspect arguments
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 25.1 Basics of Leasing | High | [[2.2 Long-Term Debt Instruments]], [[2.5 Capital Raising Methods]] |
| 25.2 Accounting/Tax/Legal | High supporting | [[1.1 Taxation Principles]], [[2.2 Long-Term Debt Instruments]] |
| 25.3 Leasing Decision | Very High | [[2.2 Long-Term Debt Instruments]], [[2.5 Capital Raising Methods]] |
| 25.4 Reasons for Leasing | High | [[2.2 Long-Term Debt Instruments]], [[3.2 Sources of Finance and Capital Structure]] |

---

# 25.1 The Basics of Leasing

## 3. Lessee and Lessor

A **lease** is a contract between:

- **lessee** — user of the asset, obligated to make lease payments;
- **lessor** — owner of the asset, entitled to receive lease payments.

Most leases:

- require little or no upfront payment;
- have regular periodic payments;
- specify end-of-term ownership;
- may specify cancellation, renewal, purchase, maintenance, and servicing provisions.

---

## 4. Main Lease Transaction Types

### 4.1 Sales-Type Lease

In a **sales-type lease**, lessor is:

- manufacturer; or
- primary dealer.

Examples in textbook include IBM and Xerox.

Because manufacturer also controls product sale/pricing, lease terms may be bundled with:

- maintenance;
- software;
- upgrades;
- related goods/services.

---

### 4.2 Direct Lease

In a **direct lease**, lessor is not manufacturer.

Typical arrangement:

```text
Lessee identifies asset needed
      ↓
Independent leasing company buys asset
      ↓
Company leases asset to lessee
```

Textbook uses Ryder as example.

---

### 4.3 Sale and Leaseback

In a **sale and leaseback**:

1. firm already owns asset;
2. firm sells asset;
3. firm leases it back;
4. firm continues using asset.

Economic effect:

```text
Asset sold
      ↓
Cash received
      ↓
Use of asset retained
      ↓
Future lease obligations created
```

This can provide liquidity without interrupting operations.

---

### 4.4 Leveraged Lease

Normally lessor provides capital to buy asset.

In a **leveraged lease**, lessor itself borrows part of purchase price.

```text
Lender
  ↓
Lessor buys asset
  ↓
Lessee uses asset
  ↓
Lease payments help service lessor debt
```

---

### 4.5 Synthetic Lease

Textbook describes **synthetic leases** as structures often involving a **special-purpose entity (SPE)** created to obtain targeted accounting and tax treatment.

`[TEXTBOOK CONTEXT]` Accounting rules for synthetic leases are historical and period-specific. The durable concept is that special contractual structures can be designed so accounting and tax characterization differ.

---

# Lease Payments and Residual Value

## 5. Residual Value

**Residual value** = market value of leased asset at end of lease.

Suppose:

- purchase price = \(P\);
- residual value = \(RV\);
- lease payments = \(L\).

In competitive perfect markets:

\[
\boxed{
PV(\text{Lease Payments})
=
P-PV(RV)
}
\tag{25.1}
\]

Interpretation:

> lessee finances the **economic depreciation** during period of use.

Lessor receives:

1. lease payments;
2. residual asset value.

Total present value must equal purchase price.

---

## 6. Example 25.1 — Forklift Lease

Textbook assumptions:

- forklift purchase price = $20,000;
- four-year lease;
- residual value after four years = $6,000;
- payments monthly, beginning of period;
- risk-free APR = 6% monthly compounding;
- monthly rate = 0.5%.

First compute PV lease payments:

\[
PV(L)
=
20,000-\frac{6,000}{1.005^{48}}
\]

\[
=
15,277.41
\]

Because payment starts today, lease is an annuity due:

\[
15,277.41
=
L
+
L
\left[
\frac{1-\frac{1}{1.005^{47}}}{0.005}
\right]
\]

Textbook result:

\[
\boxed{
L=\$357.01\text{ per month}
}
\]

---

# Lease vs Loan

## 7. Fully Amortizing Loan

If firm instead borrows full purchase price:

\[
\boxed{
PV(\text{Loan Payments})
=
\text{Purchase Price}
}
\tag{25.2}
\]

For same $20,000 forklift and four-year 6% loan:

\[
\boxed{
M=\$469.70\text{ per month}
}
\]

Lease payment is lower than loan payment.

But this **does not imply lease is cheaper**.

Why?

With loan:

- company owns asset at end;
- asset retains $6,000 residual value.

With lease:

- asset is returned unless purchased.

---

## 8. Law of One Price

Combining Equations 25.1 and 25.2:

\[
\boxed{
PV(\text{Lease Payments})
+
PV(\text{Residual Value})
=
PV(\text{Loan Payments})
}
\tag{25.3}
\]

Thus:

> **In a perfect market, leasing then purchasing residual asset is economically equivalent to borrowing to buy it upfront.**

> [!WARNING] Important Distinction
> **Lower periodic lease payment ≠ lower economic cost.**
>
> Lease payments are lower because lessee is not necessarily buying the residual asset value.

---

# End-of-Term Options

## 9. Fair Market Value Lease

In an **FMV lease**, lessee may buy asset at its fair market value when lease ends.

In perfect markets:

- acquiring asset at fair market value is zero-NPV;
- therefore this purchase option itself adds no value.

---

## 10. $1.00 Out Lease

In a **$1.00 out lease**:

- asset ownership transfers to lessee at end;
- purchase price is nominal $1.

Economically:

> lessee has effectively purchased entire asset through lease payments.

Therefore this structure resembles financing asset purchase with standard loan.

Textbook also calls it a **finance lease** in this context.

---

## 11. Fixed-Price Lease

In a **fixed-price lease**, lessee may buy asset at predetermined price \(K\).

This creates an option:

```text
If Market Value > K
→ buy asset below market

If Market Value ≤ K
→ walk away
```

Thus:

> valuable fixed-price purchase option raises lease payment.

---

## 12. FMV Cap Lease

In **fair market value cap lease**, lessee can purchase at:

\[
\min(\text{Fair Market Value},\text{Fixed Cap})
\]

This gives lessee the same directional benefit as fixed-price purchase option while simplifying exercise.

---

## 13. Example 25.3 — End-of-Lease Options

Using forklift example:

### FMV lease

Residual value remains $6,000 to lessor one way or another.

Therefore:

\[
L=\$357\text{/month}
\]

approximately.

### $1.00 out lease

Lessor receives essentially no residual value.

Therefore lease payments must recover nearly full $20,000 cost.

Textbook:

\[
\boxed{
L=\$467.36\text{/month}
}
\]

Slightly below loan payment because lease payments begin at start of month.

### Fixed-price lease at $4,000

Asset certain to be worth $6,000.

Lessee will exercise $4,000 purchase option.

Thus lessor's residual proceeds are only $4,000.

Textbook result:

\[
\boxed{
L=\$393.79\text{/month}
}
\]

Higher than FMV lease because lessee receives valuable purchase option.

---

## 14. Other Lease Provisions

Leases can include:

- early cancellation;
- buyout options;
- renewal options;
- equipment upgrade rights;
- maintenance obligations.

Pricing principle:

> **More valuable options for lessee → higher lease payment.**

Conversely:

> restrictions on lessee flexibility → lower payment.

In perfect markets, leases remain zero-NPV financing arrangements.

---

# 25.2 Accounting, Tax, and Legal Consequences

## 15. Why Real-World Leasing Can Matter

In perfect market:

\[
\text{Lease NPV}=0
\]

relative to equivalent financing.

So real-world advantage must arise from frictions.

Textbook focuses on:

1. accounting;
2. taxes;
3. bankruptcy/legal treatment.

`[TEXTBOOK CONTEXT]` Specific FASB and U.S. tax rules below reflect the textbook period. Keep the **economic classification logic**, not these rules as current regulatory guidance.

---

# Lease Accounting

## 16. Operating Lease

Under textbook's historical accounting framework:

**Operating lease** is treated as rental.

Lessee:

- reports lease payment as operating expense;
- does not report leased asset on balance sheet;
- does not report lease liability on balance sheet;
- does not record depreciation.

Lease obligations are disclosed in notes.

---

## 17. Capital / Finance Lease

A **capital lease** is treated as acquisition.

Lessee:

- recognizes asset;
- recognizes PV of future lease payments as liability;
- records depreciation;
- records interest portion as interest expense.

Economically it resembles debt-financed purchase.

---

## 18. Example 25.4 — Balance Sheet Effect

Harbord Cruise Lines initially:

| Assets | $m | Liabilities + Equity | $m |
|---|---:|---|---:|
| Cash | 100 | Debt | 900 |
| PP&E | 1,500 | Equity | 700 |
| **Total** | **1,600** | **Total** | **1,600** |

Debt-equity ratio:

\[
\frac{900}{700}=1.29
\]

New fleet cost:

\[
\$400m
\]

### Borrow to Purchase

Assets rise by $400m and debt by $400m:

\[
D/E
=
\frac{1300}{700}
=
1.86
\]

### Capital Lease

Same balance-sheet effect in textbook.

### Operating Lease

No balance-sheet recognition under historical treatment, so apparent leverage unchanged.

> [!IMPORTANT] Economic Lesson
> Accounting presentation does **not** eliminate economic obligation.
>
> Lease payments remain fixed contractual commitments.

---

## 19. Historical Capital-Lease Tests

Textbook's FAS13 treatment classified lease as capital lease if any condition held:

1. title transfers at end;
2. bargain purchase option exists;
3. lease term ≥ 75% of asset economic life;
4. PV minimum lease payments ≥ 90% of asset fair value.

> [!TEXTBOOK CONTEXT]
> These percentages are historical accounting criteria in the source. They should not be treated as current IFRS/U.S. GAAP rules.

---

# Tax Treatment

## 20. True Tax Lease

In a **true tax lease**:

- lessor receives depreciation deductions;
- lessee deducts full lease payment as operating expense;
- lease payment is taxable revenue to lessor.

Thus tax ownership follows lessor.

---

## 21. Non-Tax Lease

In a **non-tax lease**:

- lessee receives depreciation deductions;
- lessee deducts only interest portion of lease payments;
- interest portion is income to lessor.

Economically and tax-wise, this resembles a loan-financed asset purchase.

---

## 22. Tax Classification Logic

Textbook lists U.S. IRS tests designed to prevent financing arrangements from being labeled leases solely to accelerate deductions.

Examples of conditions indicating non-tax lease include:

- lessee gains equity in asset;
- title transfers after payments;
- payments are disproportionately large for short use;
- lease payments far exceed fair rental;
- bargain purchase option exists;
- payment explicitly includes interest.

The general principle matters more than individual historical rules:

> **If economic substance resembles purchase financing, tax authorities may treat it as financing rather than true rental.**

---

# Leasing and Bankruptcy

## 23. Security Interest vs True Lease

Bankruptcy treatment depends on whether court views transaction as:

- **security interest**; or
- **true lease**.

### Security Interest

Asset is treated as effectively owned by lessee.

Lessor becomes like secured creditor.

Asset may be protected from immediate seizure during reorganization.

### True Lease

Lessor retains ownership rights.

Bankrupt lessee must decide whether to:

- assume lease and continue payments; or
- reject lease and return asset.

Thus lessor can have **stronger recovery rights than ordinary secured lender**.

---

## 24. Why This Can Increase Financing Capacity

If lessor can reclaim asset more easily in distress:

\[
\text{Expected Recovery}\uparrow
\]

then:

\[
\text{Financing Risk}\downarrow
\]

which can allow:

- lower lease rate;
- more financing capacity.

This matters especially when asset has high value in lessor's hands.

---

## 25. Synthetic Leases

Textbook describes synthetic leases structured to obtain:

- operating-lease accounting treatment;
- non-tax lease treatment.

Thus firm could historically:

- deduct depreciation and interest for tax;
- while avoiding asset/liability recognition for accounting.

SPEs were often used.

> [!TEXTBOOK CONTEXT]
> The source discusses Enron and subsequent tightening of SPE requirements. The durable lesson is:
>
> **Accounting presentation can differ from economic leverage, but sophisticated investors should look through form to contractual obligations.**

---

# 25.3 The Leasing Decision

## 26. Core Question

How should firm compare lease versus purchase?

Textbook answer:

> Since lease itself is financing, correct comparison is **lease versus borrow-and-buy**, not lease versus all-equity purchase.

This is one of the chapter's most important insights.

---

# True Tax Lease Cash Flows

## 27. Emory Printing Press Example

Assumptions:

- purchase price = $50,000;
- lease payment = $12,500 per year;
- lease payments for five years, beginning immediately;
- corporate tax rate = 35%;
- straight-line depreciation = $10,000 per year;
- borrowing rate = 8%.

If **buy**:

\[
FCF_0=-50,000
\]

Annual depreciation tax shield:

\[
10,000(35\%)=3,500
\]

So years 1–5:

\[
FCF=+3,500
\]

If **lease**:

After-tax lease payment:

\[
-12,500(1-0.35)
=
-8,125
\]

Thus lease FCF is \(-8,125\) for lease-payment periods.

---

## 28. Lease vs Buy — The Unfair Comparison

If both cash-flow streams are discounted at 8%:

Textbook finds:

\[
PV(\text{Buy})=-\$36,026
\]

\[
PV(\text{Lease})=-\$35,036
\]

Lease appears cheaper by:

\[
\$990
\]

But this comparison is wrong.

Why?

Lease creates a fixed future obligation similar to secured debt.

Thus leasing **adds leverage**.

If buy option is financed without equivalent debt, leverage differs between alternatives.

> [!WARNING] Important Distinction
> **Lease vs Buy** can be apples-to-oranges if leverage is different.
>
> Correct comparison:
>
> **Lease vs Buy + Equivalent Debt**

---

# Lease-Equivalent Loan

## 29. Definition

A **lease-equivalent loan** is the amount of borrowing that creates the same future fixed obligations as the lease.

Textbook computes incremental FCF:

\[
\text{Lease}-\text{Buy}
\]

For Emory:

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| Incremental Lease vs Buy | 41,875 | -11,625 | -11,625 | -11,625 | -11,625 | -3,500 |

The positive initial cash flow is the upfront cash saved by leasing.

Future negatives are financing-like obligations.

---

## 30. After-Tax Debt Rate

Because interest produces a tax shield:

\[
\boxed{
r_D^{AT}
=
r_D(1-t_c)
}
\]

For Emory:

\[
r_D=8\%
\]

\[
t_c=35\%
\]

\[
r_D^{AT}
=
8\%(1-0.35)
=
5.2\%
\]

---

## 31. Lease-Equivalent Loan Formula

Textbook:

\[
\boxed{
\text{Loan Balance}
=
PV[
\text{Future FCF of Lease vs Buy at }r_D(1-t_c)
]
}
\tag{25.4}
\]

For Emory:

\[
\text{Loan Balance}
=
\$43,747
\]

But lease provides only $41,875 initial financing benefit.

Difference:

\[
43,747-41,875
=
\$1,872
\]

Therefore:

> borrow-and-buy is cheaper by $1,872.

---

# Direct NPV Method

## 32. Discount Incremental Cash Flows Directly

Instead of explicitly building lease-equivalent loan, textbook gives direct method:

\[
\boxed{
NPV(\text{Lease vs Borrow})
=
PV(\text{Incremental Lease vs Buy FCF at }r_D(1-t_c))
}
\]

For Emory:

\[
NPV
=
41,875
-
\frac{11,625}{1.052}
-
\frac{11,625}{1.052^2}
-
\frac{11,625}{1.052^3}
-
\frac{11,625}{1.052^4}
-
\frac{3,500}{1.052^5}
\]

\[
\boxed{
NPV=-\$1,872
}
\]

Thus reject lease.

---

## 33. Why After-Tax Borrowing Rate?

Incremental cash flows from lease versus leveraged purchase are financing-like and relatively safe.

Chapter links this to prior WACC logic:

\[
r_{WACC}
=
r_U-t_c r_D
\]

When incremental cash flows are debt-like:

\[
r_U=r_D
\]

therefore:

\[
r_{WACC}
=
r_D(1-t_c)
\]

Hence use after-tax debt rate.

---

## 34. Effective After-Tax Lease Borrowing Rate

We can also calculate IRR of incremental lease cash flows.

Textbook finds:

\[
\boxed{
IRR_{\text{lease}}=7\%
}
\]

Compare with ordinary after-tax borrowing cost:

\[
5.2\%
\]

Because financing cash flows are:

```text
Positive now
Negative later
```

lower effective borrowing IRR is better.

Thus 7% lease borrowing cost is worse than 5.2% debt cost.

> [!WARNING] IRR Caveat
> Textbook warns that if cash-flow signs alternate more than once, IRR can be unreliable.

---

# True Tax Lease Decision Rule

## 35. Two-Step Procedure

For a **true tax lease**:

### Step 1 — Compute incremental cash flows

Include:

- purchase price;
- lease payments;
- lease-payment tax deductions;
- depreciation tax shield;
- residual cash flow if relevant.

### Step 2 — Discount at after-tax borrowing rate

\[
\boxed{
r_D(1-t_c)
}
\]

Decision:

\[
\boxed{
NPV(\text{Lease vs Borrow})>0
\Rightarrow
\text{Lease is attractive}
}
\]

\[
\boxed{
NPV(\text{Lease vs Borrow})<0
\Rightarrow
\text{Borrow and buy is preferable}
}
\]

---

## 36. Example 25.6 — Lower Lease Payment

Lessor reduces payment to:

\[
\$11,800
\]

After-tax payment:

\[
11,800(1-0.35)
=
7,670
\]

New incremental FCF produces:

\[
\boxed{
NPV(\text{Lease vs Borrow})
=
+\$189
}
\]

Therefore revised lease is attractive.

Lesson:

> Lease decision can reverse with relatively small change in terms because financing value depends on present value of incremental after-tax cash flows.

---

# Non-Tax Lease

## 37. Why Analysis Is Easier

With a **non-tax lease**:

- lessee gets depreciation deductions;
- only interest portion of lease payment is tax deductible.

Thus lease cash flows are directly comparable to ordinary loan.

Therefore:

> non-tax lease is attractive only if it provides a better effective interest rate than available borrowing.

Simpler method:

1. discount lease payments at firm's **pretax borrowing rate**;
2. compare PV to purchase price.

If PV of required lease financing payments is lower, lease can be attractive.

---

# 25.4 Reasons for Leasing

## 38. Perfect-Market Benchmark

In perfect markets:

> leasing and borrowing are equivalent zero-NPV financing alternatives.

Therefore a valid economic reason for leasing must come from:

- taxes;
- transaction costs;
- bankruptcy/recovery rules;
- information;
- agency;
- specialization;
- risk allocation.

Textbook divides reasons into:

1. **good reasons**;
2. **suspect arguments**.

---

# Good Reasons for Leasing

## 39. Tax Differences

If lessee and lessor face different effective tax rates or depreciation benefits, ownership can be allocated to the party that values tax shields more.

Example logic:

```text
Lessor values depreciation more
      ↓
Lessor owns asset
      ↓
Tax benefit embedded in lease pricing
      ↓
Lessee may share gain
```

Thus lease can create total value through **tax arbitrage between parties**.

---

## 40. Reduced Resale Costs / Adverse Selection

A firm needing asset for only a short fraction of its useful life may face uncertainty about resale price.

Used-asset market can suffer adverse selection:

- owners know more about quality than buyers;
- buyers discount used goods;
- high-quality owners may be penalized.

Leasing commits user to return asset regardless of quality, mitigating “lemons” problem.

This can make lessor better at managing resale.

---

## 41. Efficiency Gains from Specialization

Lessors may specialize in:

- maintenance;
- servicing;
- asset remarketing;
- replacement;
- spare parts;
- operation.

Scale and expertise can reduce total cost.

Example: copier lessor can employ specialist technicians and maintain parts inventory efficiently.

Lease can bundle:

```text
Asset
+
Maintenance
+
Service
```

producing efficiency gains.

---

## 42. Reduced Distress Costs and Increased Debt Capacity

A true lessor may have stronger repossession rights than secured lender.

If:

\[
\text{Recovery Value Higher}
\]

then:

\[
\text{Financing Risk Lower}
\]

Thus lessor may provide financing on more attractive terms or to firms that ordinary lenders would not finance.

This can increase **debt capacity**, especially for capital-constrained firms.

---

## 43. Mitigating Debt Overhang

Recall **debt overhang**:

> shareholders may reject positive-NPV investment because part of value accrues to existing creditors.

Leasing can help because new leased asset may remain legally separate from existing creditor claims.

### Andreano Example

Machine:

\[
\$1.1m
\]

Project total one-year payoff:

\[
\$1.65m
\]

Risk-free rate:

\[
10\%
\]

Project NPV:

\[
\frac{1.65}{1.10}-1.1
=
\$0.4m
\]

But suppose 40% probability equity wiped out in bankruptcy.

PV to equity from purchasing:

\[
0.60
\left(
\frac{1.65}{1.10}
\right)
=
\$0.9m
\]

less than $1.1m investment, so equity will not invest.

Competitive one-year lease rate:

\[
1.1
-
\frac{1.1}{1.10}
=
\$0.1m
\]

Equity payoff from incremental operating benefit:

\[
0.60
\left(
\frac{0.55}{1.10}
\right)
=
\$0.3m
\]

which exceeds $0.1m lease cost.

Thus leasing enables positive-NPV expansion that debt overhang would otherwise block.

> [!IMPORTANT] Core Insight
> Leasing can **segregate claim on new asset** and prevent old debt holders from capturing too much of new investment value.

---

## 44. Transferring Residual-Value Risk

Whoever owns asset bears uncertainty in residual value.

Leasing transfers this risk to lessor.

This is useful when:

- lessor can diversify across many assets;
- lessor has superior resale expertise;
- lessee has low tolerance for asset-price risk.

---

## 45. Improved Incentives

If manufacturer is lessor and retains residual-value exposure:

- manufacturer benefits from durability;
- manufacturer has incentive to make high-quality asset;
- manufacturer may avoid excessive output that depresses used-asset value.

So leasing can improve manufacturer incentives.

But leasing can also create **lessee moral hazard**:

> lessee may care less for asset it does not own.

Therefore contracts may impose:

- maintenance requirements;
- usage restrictions;
- damage charges.

---

# Suspect Reasons for Leasing

## 46. Avoiding Capital Expenditure Controls

Managers may lease to avoid internal approval required for large capital expenditures.

This may help manager bypass bureaucracy—but it is not automatically value creating.

If lease is more expensive than purchase:

> avoiding approval can destroy shareholder/taxpayer value.

Thus this is primarily an **organizational workaround**, not a financing advantage.

---

## 47. “Preserving Capital”

Common claim:

> leasing provides “100% financing” and preserves cash.

Textbook challenges this reasoning.

In perfect markets, firm can borrow instead.

A true advantage exists only if leasing is treated differently due to frictions such as:

- taxes;
- distress;
- debt overhang;
- better recovery.

So:

> **100% financing itself is not the source of value.**

---

## 48. Off-Balance-Sheet Financing

Under historical accounting, operating lease could keep liability off balance sheet.

This makes reported:

- debt/equity ratio look lower;
- leverage appear smaller.

But economic reality:

> lease payments remain fixed obligations.

Therefore leasing can increase **actual economic leverage** even if accounting debt ratio does not change.

Sophisticated analysts capitalize operating leases or otherwise treat them as debt-like obligations.

> [!WARNING] Important Distinction
> **Accounting leverage ≠ economic leverage.**
>
> If lease commitment is fixed and failure to pay can cause default, it behaves like debt.

---

# Chapter Synthesis

Chapter 25 turns a seemingly operational decision—“rent or buy?”—into a corporate-finance decision.

The first benchmark is crucial.

In a perfect capital market:

\[
PV(\text{Lease Payments})
=
P-PV(RV)
\]

and:

\[
PV(\text{Lease Payments})
+
PV(RV)
=
PV(\text{Loan Payments})
\]

So lower periodic lease payments do not create free value. They simply reflect that lessee may be financing only the asset's use over a limited period instead of purchasing the residual ownership.

Lease contracts can nevertheless look very different because parties can allocate:

- residual value;
- maintenance;
- purchase options;
- cancellation options;
- financing;
- tax ownership;
- legal ownership.

These options are priced.

Real-world lease advantage therefore comes from **market imperfections**, not payment format.

Accounting and tax classifications matter because the same economic transaction may receive different recognition or deductions. Bankruptcy rules matter because true lessor may have stronger right to repossess asset than secured lender.

The chapter's most important valuation insight is:

> **Do not compare lease against unlevered purchase.**

Lease itself creates leverage.

Correct benchmark is:

```text
LEASE
vs
BUY + LEASE-EQUIVALENT DEBT
```

For true tax lease:

\[
NPV(\text{Lease vs Borrow})
=
PV(\text{Incremental FCF at }r_D(1-t_c))
\]

Positive → lease attractive.

Negative → equivalent borrowing is cheaper.

Finally, the chapter sorts leasing arguments into good and suspect categories.

Good reasons involve genuine economic differences:

```text
Tax
Resale efficiency
Specialization
Bankruptcy recovery
Debt capacity
Debt overhang
Risk transfer
Incentives
```

Suspect reasons focus on appearance or internal procedures:

```text
Avoid capex approval
"Preserve capital"
Reduce reported leverage
```

The final mental model:

```text
LEASE DECISION
      ↓
What asset rights are transferred?
      ↓
What residual value remains?
      ↓
What options exist?
      ↓
What is tax treatment?
      ↓
What is legal / bankruptcy treatment?
      ↓
What leverage does lease create?
      ↓
Compare with equivalent borrowing
      ↓
Value real market imperfections only
```

---

# Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Lease | Contract for use of asset against payments | Financing alternative | [[2.2 Long-Term Debt Instruments]] |
| Lessee | User paying lease payments | Financing user | [[2.2 Long-Term Debt Instruments]] |
| Lessor | Asset owner receiving payments | Financing provider | [[2.2 Long-Term Debt Instruments]] |
| Sales-type lease | Manufacturer/dealer is lessor | Sales + financing structure | [[2.5 Capital Raising Methods]] |
| Direct lease | Independent lessor buys asset for lessee | Asset-financing structure | [[2.5 Capital Raising Methods]] |
| Sale and leaseback | Owner sells asset then leases it | Releases cash while retaining use | [[2.5 Capital Raising Methods]] |
| Leveraged lease | Lessor borrows to acquire asset | Layered financing | [[2.2 Long-Term Debt Instruments]] |
| Residual value | Asset value at lease end | Core determinant of lease payment | [[2.2 Long-Term Debt Instruments]] |
| FMV lease | Purchase option at fair market value | Zero-NPV purchase option in perfect markets | [[2.2 Long-Term Debt Instruments]] |
| $1 out lease | Nominal purchase price at end | Economically close to financed purchase | [[2.2 Long-Term Debt Instruments]] |
| Fixed-price lease | Purchase option at preset price | Embedded option | [[2.4 Derivative Securities in Corporate Finance]] |
| Operating lease | Historical accounting rental classification | Accounting presentation | [[1.2 Financial Statements]] |
| Capital/finance lease | Historical accounting purchase classification | Recognized asset/liability | [[1.2 Financial Statements]] |
| True tax lease | Lessor receives depreciation; lessee deducts rent | Tax allocation | [[1.1 Taxation Principles]] |
| Non-tax lease | Lessee gets depreciation; interest portion deductible | Loan-like tax treatment | [[1.1 Taxation Principles]] |
| Lease-equivalent loan | Debt creating same obligations as lease | Correct leverage benchmark | [[2.2 Long-Term Debt Instruments]] |
| After-tax borrowing rate | \(r_D(1-t_c)\) | Discount rate for lease-vs-borrow FCF | [[2.2 Long-Term Debt Instruments]] |
| Debt overhang | Existing debt blocks positive-NPV investment | Leasing can mitigate | [[3.2 Sources of Finance and Capital Structure]] |
| Off-balance-sheet financing | Liability not shown historically | Does not eliminate economic leverage | [[1.2 Financial Statements]] |

---

# Compression Notes

## Retained in Detail

- lessee / lessor;
- sales-type, direct, sale-and-leaseback, leveraged, synthetic lease;
- residual value;
- perfect-market lease-payment equation;
- forklift Example 25.1;
- lease vs loan comparison;
- Law of One Price;
- FMV, $1 out, fixed-price, FMV cap leases;
- Example 25.3;
- operating vs capital/finance lease;
- Harbord balance-sheet example;
- historical FASB classification logic;
- true tax vs non-tax lease;
- bankruptcy treatment;
- synthetic lease concept;
- Emory lease-vs-buy example;
- lease-equivalent loan;
- after-tax borrowing rate;
- direct NPV method;
- effective lease borrowing rate;
- Example 25.6;
- non-tax lease valuation;
- good reasons for leasing;
- debt-overhang example;
- suspect reasons for leasing;
- economic leverage vs accounting leverage.

## Condensed

- historical leasing-market statistics;
- individual company fleet counts;
- car-lease approximation formula;
- detailed Alaska Air leasing data;
- full historical FASB/IRS regulatory wording;
- full SPE structuring details;
- academic citations;
- detailed bankruptcy-code procedural timing except where economically relevant.

## Omitted / Beyond CF4

- end-of-chapter problem sets;
- bibliography / further reading;
- current GAAP/IFRS lease-accounting updates not present in source;
- jurisdiction-specific current tax/legal advice;
- peripheral historical anecdotes.

> [!IMPORTANT] Reading Priority
> Untuk CF4, prioritaskan:
>
> 1. **lease vs buy economic equivalence**;
> 2. **residual value**;
> 3. **FMV vs $1 out vs fixed-price lease**;
> 4. **operating vs finance lease** as textbook framework;
> 5. **true tax vs non-tax lease**;
> 6. **lease-equivalent loan**;
> 7. **after-tax debt rate \(r_D(1-t_c)\)**;
> 8. **lease vs borrow**, bukan lease vs buy;
> 9. **good reasons vs suspect reasons for leasing**;
> 10. economic leverage of lease obligations.

---

# CF4 Connection Map

```text
Need productive asset
      ↓
Buy ─────────────── Lease
 ↓                     ↓
Loan                 Lessor owns
 ↓                   Lessee uses
[[2.2 Long-Term Debt Instruments]]
        \             /
         \           /
          Financing choice
                ↓
[[2.5 Capital Raising Methods]]
                ↓
Accounting / Tax / Legal frictions
                ↓
Lease vs Borrow NPV
```

Correct decision framework:

```text
LEASE
  ↓
Fixed obligations
  ↓
Economic leverage
  ↓
Compare with
  ↓
BUY + LEASE-EQUIVALENT LOAN
  ↓
Discount incremental FCF at
r_D(1-t_c)
```

---

# Quick Reading Review

- Lease = contract between **lessee** and **lessor**.
- Lessee pays for right to use asset.
- Lessor owns asset and receives lease payments.
- Sales-type lease → lessor is manufacturer/dealer.
- Direct lease → independent leasing company.
- Sale and leaseback → firm sells asset then leases it back.
- Leveraged lease → lessor borrows to finance asset purchase.
- Residual value = asset market value at end of lease.
- Perfect-market lease pricing:
  \[
  PV(L)=P-PV(RV)
  \]
- Lower lease payment than loan payment does **not** mean lease is cheaper.
- Perfect-market equivalence:
  \[
  PV(L)+PV(RV)=PV(\text{Loan Payments})
  \]
- FMV lease gives purchase right at market value.
- $1 out lease is economically close to financed purchase.
- Fixed-price lease contains valuable purchase option.
- More valuable lessee options → higher lease payment.
- Operating vs capital/finance lease is an accounting classification in textbook framework.
- True tax lease → lessor gets depreciation; lessee deducts full lease payment.
- Non-tax lease → lessee gets depreciation and deducts interest portion.
- In bankruptcy, true lessor may have stronger repossession rights than ordinary secured lender.
- Lease creates economic leverage even if accounting balance sheet historically does not show liability.
- Correct comparison is:
  **lease vs borrow-and-buy with equivalent leverage**.
- Lease-equivalent loan matches fixed obligations of lease.
- Discount true-tax lease incremental cash flows at:
  \[
  r_D(1-t_c)
  \]
- Decision rule:
  \[
  NPV(\text{Lease vs Borrow})>0
  \Rightarrow \text{Lease}
  \]
- Effective lease IRR can be compared with after-tax borrowing rate, subject to IRR limitations.
- Non-tax lease is loan-like; compare effective lease borrowing rate with normal loan rate.
- Good leasing reasons: taxes, resale efficiency, specialization, distress/recovery, debt capacity, debt overhang, risk transfer, incentives.
- Suspect reasons: avoiding capex approval, preserving capital by itself, reducing reported leverage through off-balance-sheet presentation.
- Economic substance matters more than accounting appearance.

---

# Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose | Berk & DeMarzo, Chapter 25 introduction |
| Lease definition / lessee / lessor | Chapter 25, §25.1 |
| Sales-type lease | Chapter 25, §25.1 |
| Direct lease | Chapter 25, §25.1 |
| Sale and leaseback | Chapter 25, §25.1 |
| Leveraged lease / SPE / synthetic lease | Chapter 25, §25.1 |
| Residual value / competitive lease pricing | Chapter 25, §25.1, Eq. 25.1 |
| Forklift lease payment | Chapter 25, Example 25.1 |
| Loan comparison | Chapter 25, §25.1, Eq. 25.2 / Example 25.2 |
| Lease-loan equivalence | Chapter 25, Eq. 25.3 |
| FMV / $1 out / fixed-price / FMV-cap leases | Chapter 25, §25.1 |
| End-of-lease calculations | Chapter 25, Example 25.3 |
| Operating vs capital lease | Chapter 25, §25.2 |
| Harbord balance sheet | Chapter 25, Example 25.4 |
| Historical capital-lease criteria | Chapter 25, §25.2 |
| True tax / non-tax lease | Chapter 25, §25.2 |
| Bankruptcy treatment | Chapter 25, §25.2 |
| Synthetic leases | Chapter 25, §25.2 box |
| True-tax lease cash flows | Chapter 25, §25.3 / Table 25.1 |
| Lease vs buy comparison | Chapter 25, §25.3 |
| Lease-equivalent loan | Chapter 25, §25.3, Eq. 25.4–25.5 |
| Direct NPV method | Chapter 25, §25.3 |
| Effective lease borrowing rate | Chapter 25, §25.3 |
| True-tax lease decision rule | Chapter 25, §25.3 |
| Revised lease terms | Chapter 25, Example 25.6 |
| Non-tax lease evaluation | Chapter 25, §25.3 |
| Good reasons for leasing | Chapter 25, §25.4 |
| Resale / lemons logic | Chapter 25, §25.4 |
| Specialization | Chapter 25, §25.4 |
| Distress costs / debt capacity | Chapter 25, §25.4 |
| Debt-overhang example | Chapter 25, §25.4 |
| Risk transfer / incentives | Chapter 25, §25.4 |
| Suspect leasing arguments | Chapter 25, §25.4 |
| Chapter summary | Berk & DeMarzo, Chapter 25 summary |
