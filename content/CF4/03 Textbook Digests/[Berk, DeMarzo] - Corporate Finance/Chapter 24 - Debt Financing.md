---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "24"
chapter_title: "Debt Financing"
cf4_topics: ["2.2 Long-Term Debt Instruments", "2.3 Short and Medium-Term Finance", "2.4 Derivative Securities in Corporate Finance", "2.5 Capital Raising Methods"]
cf4_relevance: "Very High"
source_scope: "Berk & DeMarzo, Chapter 24 — Sections 24.1–24.4 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, DebtFinancing, CorporateDebt, Bonds, CallableBond, ConvertibleBond]
date_created: "2026-08-24"
status: "study-note"
---

# Berk & DeMarzo — Chapter 24: Debt Financing

> [!ABSTRACT] Chapter in One View
> Chapter 24 membahas **bagaimana corporations raise capital melalui debt** dan mengapa debt instruments yang tampak mirip dapat memiliki risk, price, dan yield yang sangat berbeda.
>
> Berk & DeMarzo menggunakan Hertz leveraged buyout sebagai running example. Untuk membiayai transaksi tersebut, Hertz menggunakan beberapa sumber debt sekaligus—high-yield bonds, term loans, revolving credit, dan asset-backed financing—yang menunjukkan bahwa “debt” bukan satu homogeneous security.
>
> Untuk public corporate debt, terms issue dituangkan dalam **indenture**, formal contract antara issuer dan trustee yang mewakili bondholders. Empat jenis corporate debt yang ditekankan adalah **notes, debentures, mortgage bonds, dan asset-backed bonds**. Notes dan debentures adalah unsecured; mortgage dan asset-backed bonds secured.
>
> Selain collateral, **seniority** menentukan priority of payment saat default. Senior debt dibayar sebelum subordinated debt; karena subordinated creditors menanggung higher loss exposure, mereka dapat menuntut higher yield.
>
> Chapter juga membedakan **public debt** dan **private debt**. Private debt mencakup **term loans, syndicated loans, revolving lines of credit, dan private placements**. Private financing dapat lebih customized dan menghindari sebagian public-issuance costs, tetapi umumnya kurang liquid.
>
> International bonds dibagi menjadi **domestic bonds, foreign bonds, Eurobonds, dan global bonds**. Definition trap terpenting: **Eurobond tidak berarti otomatis bond denominated in euro**.
>
> Section 24.2 memperluas pembahasan ke sovereign debt, Treasury securities, municipal bonds, dan securitized debt. Untuk CF4, bagian paling berguna adalah **asset-backed securities (ABS), mortgage-backed securities (MBS), prepayment risk, dan CDO** sebagai context untuk structured debt.
>
> **Bond covenants** adalah restrictions yang melindungi creditors dari actions issuer yang dapat meningkatkan default risk atau mengurangi bond value.
>
> Section 24.4 membahas repayment provisions. **Callable bond** memberi issuer hak retire bond sebelum maturity. Karena issuer biasanya call ketika rates turun, bondholder menghadapi reinvestment risk pada waktu yang tidak menguntungkan; callable bond therefore ceteris paribus memiliki lower price / higher yield daripada non-callable bond.
>
> **Sinking fund** secara bertahap mengurangi outstanding principal. Jika principal besar masih tersisa di maturity, pembayaran tersebut disebut **balloon payment**.
>
> **Convertible bond** memberi holder option untuk menukar bond menjadi fixed number of common shares:
>
> $$
> \text{Conversion Price}
> =
> \frac{\text{Face Value}}{\text{Conversion Ratio}}
> $$
>
> Convertible dapat dipandang sebagai **straight bond + warrant**. Karena conversion option valuable bagi investor, convertible bond dapat menawarkan lower coupon daripada otherwise identical straight bond. Namun lower coupon **tidak berarti convertible financing economically cheaper**.
>
> Untuk CF4, Chapter 24 adalah source utama bagi [[2.2 Long-Term Debt Instruments]], serta sangat relevan dengan [[2.4 Derivative Securities in Corporate Finance]] dan [[2.5 Capital Raising Methods]].

---

## 1. Why This Chapter Exists

Chapter 23 membahas bagaimana perusahaan raise **equity**. Chapter 24 berpindah ke financing claim lain:

> **Debt = contractual claim yang menjanjikan pembayaran kepada creditors sesuai terms tertentu.**

Tetapi setelah firm memutuskan menggunakan debt, pertanyaannya belum selesai.

Management masih harus menentukan:

- public bond atau private loan?
- secured atau unsecured?
- senior atau subordinated?
- domestic atau international market?
- maturity berapa lama?
- fixed repayment atau sinking fund?
- callable atau non-callable?
- straight bond atau convertible?

Karena itu chapter ini bukan sekadar “apa itu bond”, melainkan:

> **bagaimana debt contract didesain, siapa yang dilindungi oleh setiap feature, dan bagaimana feature tersebut memengaruhi risk serta yield.**

Core mental model:

```text
Company needs debt capital
        ↓
Choose funding source
        ↓
Define promised cash flows
        ↓
Collateral?
        ↓
Seniority?
        ↓
Covenants?
        ↓
Maturity / repayment?
        ↓
Embedded options?
        ↓
Investor risk
        ↓
Price / required yield
```

---

## 2. Chapter Map

```text
Chapter 24 — Debt Financing
├── 24.1 Corporate Debt
│   ├── Public Debt
│   │   ├── Prospectus / offering memorandum
│   │   ├── Indenture / trustee
│   │   ├── Face value / OID
│   │   ├── Bearer vs registered bonds
│   │   ├── Notes
│   │   ├── Debentures
│   │   ├── Mortgage bonds
│   │   ├── Asset-backed bonds
│   │   └── Seniority / subordinated debt
│   ├── Bond Markets
│   │   ├── Domestic bonds
│   │   ├── Foreign bonds
│   │   ├── Eurobonds
│   │   └── Global bonds
│   └── Private Debt
│       ├── Term loans
│       ├── Syndicated loans
│       ├── Revolving lines of credit
│       └── Private placements
│
├── 24.2 Other Types of Debt
│   ├── Sovereign debt
│   ├── Treasury securities
│   ├── Municipal bonds
│   ├── Asset-backed securities
│   ├── Mortgage-backed securities
│   ├── Prepayment risk
│   └── Collateralized debt obligations
│
├── 24.3 Bond Covenants
│   └── Restrictions protecting bondholders
│
└── 24.4 Repayment Provisions
    ├── Call provisions
    ├── Yield to call
    ├── Sinking funds
    ├── Balloon payments
    ├── Convertible bonds
    ├── Conversion ratio / conversion price
    └── Callable convertibles
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 24.1 Corporate Debt | Very High | [[2.2 Long-Term Debt Instruments]], [[2.5 Capital Raising Methods]] |
| 24.2 Other Types of Debt | Mixed | [[2.2 Long-Term Debt Instruments]], [[5.1 Investment Asset Characteristics]] |
| 24.3 Bond Covenants | Very High | [[2.2 Long-Term Debt Instruments]], [[4.3 Agency Theory and Governance]] |
| 24.4 Repayment Provisions | Very High | [[2.2 Long-Term Debt Instruments]], [[2.4 Derivative Securities in Corporate Finance]] |

> [!NOTE] Scope Note
> Chapter 24 lebih luas daripada core corporate-debt scope CF4 karena juga membahas government and structured debt. Corporate debt, covenants, calls, sinking funds, dan convertibles dipertahankan lebih detail; institutional government-debt detail dikompresi.

---

# 24.1 Corporate Debt

## 3. Public Debt

**Corporate bonds** adalah debt securities issued by corporations.

Untuk public issue, company menyiapkan disclosure document seperti **prospectus** atau offering memorandum yang menjelaskan terms issue.

### Indenture

Untuk public bond offering, key contract adalah **indenture**.

**Indenture** = formal agreement antara:

- bond issuer; dan
- trust company / trustee yang mewakili bondholders.

Trustee:

- monitors compliance dengan terms bond;
- mewakili bondholders jika default;
- membantu enforcement contractual rights.

Secara intuitive:

> **Indenture adalah rulebook sebuah bond issue.**

Ia menjelaskan antara lain:

- principal;
- coupon/payment terms;
- maturity;
- collateral;
- seniority;
- covenants;
- call provisions;
- sinking-fund provisions;
- conversion rights jika ada.

---

## 4. Face Value, Issue Price, and OID

Bond memiliki **face value / principal amount**.

Namun:

\[
\boxed{\text{Face Value} \neq \text{Cash Proceeds Raised}}
\]

karena:

- bond dapat issue below/above par;
- underwriting and issuance fees exist.

Jika coupon bond pertama kali dijual below face value, textbook menyebutnya **original issue discount (OID) bond**.

---

## 5. Coupon and Zero-Coupon Debt

Most corporate bonds dalam textbook membayar periodic coupon.

Sebagian dapat berupa **zero-coupon bond**:

```text
No periodic coupon
      ↓
Issued below maturity value
      ↓
Return comes from accretion toward face value
```

Historical maturity examples dalam chapter hanya menunjukkan bahwa corporate debt maturity dapat sangat bervariasi.

---

## 6. Bearer vs Registered Bonds

Historically, **bearer bonds** dimiliki oleh whoever physically possessed certificate.

Coupon historically diklaim dengan clipping physical coupon.

Problem:

- security risk;
- certificate hilang → ownership practically hilang.

**Registered bonds** menggunakan ownership records maintained by issuer/brokers.

Coupon is paid to recorded holder.

> [!TEXTBOOK CONTEXT]
> Physical bearer-bond mechanics mainly historical. Core concept adalah **anonymous possession-based ownership vs registered ownership records**.

---

# Types of Corporate Debt

## 7. Four Core Corporate Debt Types

Berk & DeMarzo membagi corporate debt menjadi:

| Type | Secured? | Core Feature |
|---|---|---|
| Note | No | Unsecured; typically shorter maturity than debenture |
| Debenture | No | Unsecured corporate debt |
| Mortgage bond | Yes | Secured by real property |
| Asset-backed bond | Yes | Secured by specified assets |

---

## 8. Notes

Dalam chapter:

> **Notes are unsecured corporate debt.**

Textbook notes typically have shorter maturity than debentures—often original maturity below 10 years.

Karena unsecured:

- tidak ada specific asset pledged;
- investor relies on general issuer credit quality;
- recovery depends on unpledged assets, seniority, and contract protections.

---

## 9. Debentures

A **debenture** juga unsecured debt.

Thus:

```text
No specific collateral
      ↓
General creditor claim
      ↓
Recovery depends on issuer assets + priority
```

> [!WARNING] Definition Trap
> Dalam Berk & DeMarzo Chapter 24:
>
> **Notes + Debentures = Unsecured**
>
> **Mortgage Bonds + Asset-Backed Bonds = Secured**

---

## 10. Mortgage Bonds

A **mortgage bond** is secured by real property.

If issuer defaults:

- pledged property provides collateral support;
- creditor has a direct claim subject to contract/legal process.

Collateral reduces expected loss **but does not make bond risk-free**.

---

## 11. Asset-Backed Bonds

**Asset-backed bonds** are secured by specified assets.

Hertz example uses rental-car fleet as collateral for large-scale financing.

Economic logic:

```text
Specific asset pledged
      ↓
Creditor recovery tied to that asset
      ↓
Additional protection
      ↓
Potentially lower required yield
```

---

# Seniority

## 12. Senior vs Subordinated Debt

**Seniority** means priority of claim when issuer defaults.

```text
Senior debt
      ↓ paid first
Subordinated debt
      ↓
Equity
```

A **subordinated debenture** is lower-priority debt relative to specified outstanding senior claims.

### Hertz Example

Hertz's high-yield issue contained senior and subordinated tranches.

Textbook gives:

- senior dollar-denominated note: yield/coupon ≈ 8.875%;
- subordinated dollar-denominated note: ≈ 10.5%.

The subordinated tranche has lower expected recovery in default.

Therefore:

\[
\boxed{
\text{Lower Priority}
\Rightarrow
\text{Higher Expected Loss}
\Rightarrow
\text{Higher Required Yield}
}
\]

> [!WARNING] Important Distinction
> **Secured ≠ senior.**
>
> - **Secured/unsecured** asks whether specific collateral exists.
> - **Senior/subordinated** asks payment priority.

A claim can be unsecured yet senior relative to other unsecured claims.

---

## 13. Hertz LBO as a Debt-Financing Map

Hertz's LBO financing shows that a corporation can combine several debt markets.

```text
Hertz financing
├── High-yield notes
│   ├── Senior USD
│   ├── Senior EUR
│   └── Subordinated USD
├── Bank term loan
├── Revolving credit
└── Asset-backed fleet debt
```

Why not use one debt instrument?

Different capital providers accept different combinations of:

- collateral;
- priority;
- maturity;
- currency;
- liquidity;
- yield.

Large transactions may need several financing channels simultaneously.

---

# International Bond Markets

## 14. Domestic Bonds

A **domestic bond** in textbook classification is issued by a local entity in a local market and denominated in local currency, though foreign investors can purchase it.

---

## 15. Foreign Bonds

A **foreign bond** is issued by a foreign company in a local market for local investors and denominated in local currency.

Textbook naming examples:

- U.S. → Yankee bonds;
- Japan → Samurai bonds;
- U.K. → Bulldog bonds.

Names are less important than the classification logic.

---

## 16. Eurobonds

A **Eurobond** is an international bond **not denominated in the local currency of the country in which it is issued**.

> [!DANGER] Definition Trap
> **Eurobond ≠ bond denominated in euro.**

For example, a U.S.-dollar bond issued outside a dollar-local market can be a Eurobond.

---

## 17. Global Bonds

A **global bond** is offered in several markets simultaneously.

Hertz's bonds were offered in U.S. and European markets, providing textbook context for a global issue.

---

## 18. Currency Risk

A bond paying in foreign currency creates exchange-rate exposure.

Even if two bonds have:

- same issuer;
- same seniority;
- same maturity;

their yields can differ if currency exposures differ.

For a domestic investor:

\[
\text{Home-Currency Return}
\]

depends on both:

1. bond cash flows; and
2. exchange-rate movement.

---

# Private Debt

## 19. Public vs Private Debt

**Public debt** trades broadly in public capital markets.

**Private debt** is negotiated directly with banks or a limited investor group.

| Feature | Public Debt | Private Debt |
|---|---|---|
| Investor base | Broad | Limited |
| Registration/disclosure | Greater | Lower public burden |
| Terms | More standardized | More customizable |
| Liquidity | Generally higher | Generally lower |
| Monitoring | More dispersed | More concentrated |

Core trade-off from textbook:

> Private debt avoids some public registration costs but sacrifices liquidity.

---

## 20. Term Loans

A **term loan** is a bank loan lasting for a specified term.

Hertz had a seven-year term loan.

Large term loans may be **syndicated**.

### Syndicated Loan

```text
Borrower needs large loan
      ↓
Lead bank negotiates terms
      ↓
Several banks fund portions
      ↓
Exposure distributed across banks
```

Textbook notes that leveraged buyout term loans may be speculative grade.

---

## 21. Revolving Line of Credit

A **revolving line of credit** is a borrowing commitment:

- available for specified period;
- up to stated maximum;
- borrower can draw as needed.

Conceptually:

```text
Credit limit
      ↓
Draw when needed
      ↓
Repay
      ↓
May redraw subject to terms
```

Hertz's revolving line was backed by assets, making it more secure than unsecured financing in the example.

> [!INFO] CF4 Connection
> Revolving credit bridges Chapter 24 to [[2.3 Short and Medium-Term Finance]] because it provides flexible liquidity rather than a single fixed draw.

---

## 22. Private Placements

A **private placement** is a bond issue sold to a small group of investors instead of public market.

Advantages:

- avoids public registration;
- lower issuance burden;
- highly customizable.

Disadvantage:

- less liquid.

Textbook notes that private placements may use simpler documentation than public bond issues.

---

## 23. Rule 144A — Textbook Context

Chapter discusses Rule 144A as U.S. institutional context allowing certain private debt to trade among large institutional investors.

> [!TEXTBOOK CONTEXT]
> Exact regulatory mechanics are not core CF4 memorization.
>
> Durable lesson:
>
> **Private debt does not always mean completely non-tradable; liquidity exists on a spectrum.**

---

# 24.2 Other Types of Debt

## 24. Sovereign Debt

**Sovereign debt** is debt issued by national governments.

Textbook discusses U.S. Treasury securities:

| Security | Broad Characteristic |
|---|---|
| Treasury bill | Short-term pure discount security |
| Treasury note | Intermediate coupon debt |
| Treasury bond | Long-term coupon debt |
| TIPS | Inflation-indexed principal |

`[BEYOND CF4]` Exact historical maturity schedules and U.S. issuance conventions are not central to corporate-finance exam scope.

---

## 25. TIPS — Inflation-Linked Logic

For inflation-indexed bonds:

```text
Inflation ↑
      ↓
Indexed principal ↑
      ↓
Dollar coupon adjusts
      ↓
Maturity principal reflects indexation
```

The enduring concept is inflation protection through principal indexation.

---

## 26. Municipal Bonds

Municipal bonds are issued by state/local governments in U.S. textbook context.

Their distinctive textbook feature is tax treatment of interest.

> [!TEXTBOOK CONTEXT]
> Tax treatment is jurisdiction-specific and historical. It is supporting material rather than core CF4 corporate-debt content.

---

# Structured Debt

## 27. Asset-Backed Securities

An **asset-backed security (ABS)** receives cash flows from underlying financial assets.

General architecture:

```text
Loans / receivables
      ↓
Pool
      ↓
Securities backed by pool
      ↓
Payments from borrowers
      ↓
Investor cash flows
```

Investor risk depends on:

- underlying asset quality;
- default behavior;
- payment timing;
- security structure.

---

## 28. Mortgage-Backed Securities

A **mortgage-backed security (MBS)** is an ABS backed by mortgages.

Mortgage borrowers:

- make scheduled payments;
- can sometimes prepay principal.

Thus investor cash-flow timing is uncertain.

---

## 29. Prepayment Risk

**Prepayment risk** = risk principal is returned earlier than expected.

It often becomes painful when interest rates fall:

```text
Rates ↓
      ↓
Borrowers refinance
      ↓
Mortgages prepaid
      ↓
MBS investor receives principal early
      ↓
Must reinvest at lower rates
```

This resembles callable-bond reinvestment risk.

Privately issued mortgage-backed debt can additionally carry borrower default risk.

---

## 30. Collateralized Debt Obligations

Textbook defines **CDO** as an asset-backed security backed by other asset-backed securities.

High-level architecture:

```text
ABS / debt claims
      ↓
Pooled
      ↓
Structured vehicle
      ↓
New investor securities
```

`[BEYOND CF4]` Detailed tranche engineering is not necessary for Chapter 24 core exam preparation.

---

# 24.3 Bond Covenants

## 31. Why Covenants Exist

Once debt is issued, shareholders and managers still control corporate decisions.

Some actions may hurt bondholders:

- taking additional debt;
- pledging assets to new creditors;
- paying large dividends;
- repurchasing stock;
- transferring assets;
- shifting toward riskier projects.

Therefore bond contracts include **covenants**.

> [!NOTE] Definition
> **Bond covenants** are restrictive clauses that limit issuer actions to reduce default risk and protect bond value.

Economic logic:

```text
Bondholders lend
      ↓
Management controls decisions
      ↓
Possible risk shifting / value transfer
      ↓
Bondholders demand contractual protection
      ↓
Covenants
```

---

## 32. Typical Covenant Restrictions

Textbook/source examples include restrictions on:

- additional indebtedness;
- dividends;
- share repurchases;
- certain investments;
- creation of liens;
- asset transfers;
- minimum working capital / financial condition.

The exact covenant package differs by issue.

---

## 33. Why Issuers Agree to Covenants

At first glance, covenants reduce issuer flexibility.

But safer debt may command:

- higher price;
- lower required yield;
- better access to financing.

Thus a covenant can be beneficial to issuer if the financing-cost reduction outweighs lost flexibility.

> [!WARNING] Important Distinction
> **Covenants do not guarantee repayment.**
>
> They constrain specific behaviors; operating and business risk remain.

---

# 24.4 Repayment Provisions

## 34. Debt Can End in Different Ways

Standard debt:

```text
Coupons
      ↓
Final maturity
      ↓
Principal repaid
```

But contracts can alter this through:

1. **call provision**;
2. **sinking fund**;
3. **conversion provision**.

These provisions allocate optionality between issuer and investor.

---

# Call Provisions

## 35. Callable Bonds

A **call provision** gives issuer the:

> **right, but not obligation, to retire bond before maturity after a specified date.**

Terms usually include:

- call date;
- call price.

> [!TIP] Option Owner
> **Call option belongs to issuer.**

---

## 36. When Does Issuer Call?

Suppose coupon on existing bond is high and market rates later fall.

Then:

```text
Old bond coupon > current market rate
      ↓
Old debt is expensive for issuer
      ↓
Non-callable bond trades at premium
      ↓
Issuer exercises call if cheaper
      ↓
Refinances at lower rate
```

If market rates rise:

- bond may trade below par;
- issuer has no reason to call at par;
- market repurchase may be cheaper.

Thus call is exercised asymmetrically—when favorable to issuer.

---

## 37. Investor Cost of the Call Feature

From investor perspective:

- high coupon disappears exactly when rates have fallen;
- principal is returned;
- proceeds must be reinvested at lower rates.

This is **reinvestment / call risk**.

Therefore:

\[
\boxed{
P_{\text{Callable}}
<
P_{\text{Comparable Non-Callable}}
}
\]

and equivalently:

\[
\boxed{
Y_{\text{Callable}}
>
Y_{\text{Comparable Non-Callable}}
}
\]

ceteris paribus.

> [!WARNING] Exam Trap
> “Issuer has more flexibility” means **issuer owns valuable option**.
>
> That feature is **bad for investor**, so investor needs compensation.

---

# Yield to Call

## 38. YTC Definition

**Yield to maturity (YTM)** assumes bond stays outstanding until maturity.

**Yield to call (YTC)** assumes the bond is called at specified call date and price.

General formula:

\[
P_0
=
\sum_{t=1}^{N_c}
\frac{C}{(1+YTC)^t}
+
\frac{\text{Call Price}}
{(1+YTC)^{N_c}}
\]

where:

- \(P_0\) = current price;
- \(C\) = coupon per period;
- \(N_c\) = periods to call;
- Call Price = payment received if called.

---

## 39. Textbook YTC Example

For a bond with current price approximately:

\[
P_0=103
\]

and coupon:

\[
C=8
\]

when call occurs after five periods at par:

\[
103
=
\sum_{t=1}^{5}
\frac{8}{(1+y)^t}
+
\frac{100}{(1+y)^5}
\]

Textbook spreadsheet solution:

\[
YTC\approx7.26\%
\]

For a one-period call payoff of 108:

\[
103
=
\frac{108}{1+YTC}
\]

so:

\[
YTC
=
\frac{108}{103}-1
\approx4.85\%
\]

> [!IMPORTANT] Core Lesson
> **YTC is conditional return based on a call assumption.**
>
> It is not a guarantee that the bond will actually be called on that date.

---

# Sinking Funds

## 40. Definition

A **sinking fund** requires regular amounts to be used to retire portions of debt before final maturity.

Instead of:

```text
100% principal outstanding
until maturity
```

we get:

```text
Periodic retirement
      ↓
Outstanding principal ↓
      ↓
Smaller final balance
```

---

## 41. How Bonds Are Selected for Retirement

Textbook describes:

### If bonds trade below par

Issuer can buy them in market.

### If bonds trade above par

If sinking-fund retirement occurs at par, specific bonds may be selected by lottery.

Why this can hurt an investor:

- investor may own bond worth > par;
- bond is selected;
- receives only contractual par redemption.

---

## 42. Accelerated Sinking Fund

Some issues specify:

- required minimum retirement;
- optional faster retirement by issuer.

Because issuer can retire additional debt at favorable contractual terms, acceleration can have **call-like optionality**.

---

## 43. Balloon Payment

A sinking fund may not fully amortize entire issue.

If large balance remains:

> **Balloon payment** = large remaining principal payment at maturity.

```text
Initial debt
      ↓
Periodic sinking-fund payments
      ↓
Some principal remains
      ↓
Large maturity payment
      ↓
Balloon
```

> [!WARNING] Definition Trap
> **Sinking fund ≠ call provision.**
>
> - Sinking fund = scheduled debt-retirement mechanism.
> - Call = issuer discretionary redemption right.
>
> But accelerated sinking funds can contain call-like features.

---

# Convertible Provisions

## 44. Convertible Bond

A **convertible bond** gives holder the option to convert bond into a fixed number of common shares.

That number is the **conversion ratio (CR)**.

If:

\[
CR=15
\]

one bond can be exchanged for 15 shares.

---

## 45. Conversion Price

The implied stock price paid through conversion is:

\[
\boxed{
\text{Conversion Price}
=
\frac{\text{Face Value}}{\text{Conversion Ratio}}
}
\]

Textbook example:

\[
F=1000
\]

\[
CR=15
\]

\[
CP
=
\frac{1000}{15}
=
\$66.67
\]

At maturity:

- stock below $66.67 → take bond cash payoff;
- stock above $66.67 → conversion produces more value.

---

## 46. Convertible Payoff at Maturity

At maturity:

\[
\boxed{
V_T
=
\max(F,\;CR\times S_T)
}
\]

where:

- \(F\) = bond face/cash payoff;
- \(CR\) = conversion ratio;
- \(S_T\) = stock price.

Thus convertible combines:

```text
Debt floor
+
Equity upside
```

---

## 47. Convertible = Straight Bond + Warrant

Textbook interprets conversion right as a **warrant**.

A warrant is a call option issued by the company on newly issued stock.

Therefore:

\[
\boxed{
\text{Convertible Bond}
=
\text{Straight Bond}
+
\text{Warrant}
}
\]

The holder receives:

- normal bond claim;
- additional option to participate in equity upside.

---

## 48. Why Convertible Coupon Is Lower

The embedded warrant has positive value.

Therefore if convertible and otherwise identical straight bond are issued at the same price:

> investor is willing to accept lower coupon on convertible because investor receives the conversion option.

Direction:

\[
\text{Conversion Option Value}\uparrow
\Rightarrow
\text{Required Coupon}\downarrow
\]

But:

> **Lower coupon does not prove convertible debt is cheaper financing.**

Why?

If stock rises significantly:

- bondholder converts;
- existing shareholders give up equity at terms set earlier;
- this equity option was part of investor compensation.

Berk & DeMarzo explicitly connects this to Chapter 14:

> Security design redistributes cash flows; lower stated interest rate alone does not establish lower economic cost.

---

# Callable Convertibles

## 49. Interaction of Call and Conversion

Many convertible bonds are also callable.

If issuer calls:

```text
Issuer announces call
      ↓
Holder must choose
      ↓
Take call payment
or
Convert into shares
```

Issuer can therefore force holder to make conversion decision earlier than holder otherwise would.

---

## 50. Time-Value Transfer

Before maturity, conversion option may still have time value.

If issuer calls early:

```text
Remaining conversion-option time value
      ↓
Holder forced to act
      ↓
Some option value lost
      ↓
Value transferred toward shareholders
```

This is why callable convertible must be understood as an interaction of **two options**:

- call → issuer;
- conversion → investor.

> [!TIP] Fast Rule
> **Always ask: Who owns the option?**
>
> - Call → issuer benefits.
> - Conversion → bondholder benefits.

---

# Issuer vs Investor Perspective

## 51. Comparative Table

| Feature | Issuer Perspective | Investor Perspective |
|---|---|---|
| Secured debt | Can reduce borrowing cost but pledges assets | Better recovery protection |
| Unsecured debt | Preserves unpledged asset flexibility | Relies more on overall credit |
| Senior debt | May price more cheaply | Higher claim priority |
| Subordinated debt | Adds financing behind senior creditors | Higher expected loss |
| Long maturity | Funding certainty | Greater interest-rate exposure |
| Private debt | Customized, lower public-registration burden | Lower liquidity |
| Covenant | Reduces flexibility | Protects against risk shifting |
| Call feature | Refinancing flexibility | Call / reinvestment risk |
| Sinking fund | Requires periodic retirement | Exposure declines but premium bonds may be redeemed |
| Conversion | Can lower stated coupon | Equity upside |
| Foreign currency | Access additional markets | FX risk |
| ABS | Monetizes asset pool | Cash flow tied to collateral quality |

---

# Chapter Synthesis

Chapter 24 is best understood as a method for **reading any debt contract**.

Start with the basic promise:

```text
Investor gives cash today
      ↓
Issuer promises future payments
```

Then ask:

### 1. Where is debt raised?

```text
Public market
or
Private lender?
```

Public borrowing trades liquidity and broad investor access against greater issuance/disclosure burden. Private debt sacrifices liquidity but can be more customized.

### 2. What protects the creditor?

```text
Collateral?
      ↓
Secured vs unsecured

Priority?
      ↓
Senior vs subordinated
```

These are different concepts.

### 3. What prevents issuer from changing risk after borrowing?

> **Covenants.**

They limit actions that might shift value from creditors to shareholders.

### 4. How can the debt end?

```text
Normal maturity
Call
Sinking fund
Conversion
```

Each method reallocates timing and optionality.

### 5. Who owns the option?

This is perhaps the most useful Chapter 24 shortcut.

```text
Issuer can call
      ↓
Issuer owns option
      ↓
Investor disadvantaged
      ↓
Higher required yield / lower price

Investor can convert
      ↓
Investor owns option
      ↓
Investor gains upside
      ↓
Lower required coupon possible
```

### 6. What is the final risk?

Debt yield ultimately reflects the package:

```text
Default risk
+ Recovery / collateral
+ Seniority
+ Liquidity
+ Maturity
+ Currency
+ Embedded options
```

Hence two bonds with identical coupons can be economically very different.

The complete mental model:

```text
PROMISE
   ↓
COLLATERAL
   ↓
SENIORITY
   ↓
COVENANTS
   ↓
MATURITY
   ↓
REPAYMENT
   ↓
EMBEDDED OPTION
   ↓
RISK
   ↓
PRICE / YIELD
```

---

# Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Corporate bond | Corporate debt security | Core debt financing claim | [[2.2 Long-Term Debt Instruments]] |
| Indenture | Formal public bond contract | Defines rights and obligations | [[2.2 Long-Term Debt Instruments]] |
| Trustee | Representative of bondholders | Enforces indenture | [[2.2 Long-Term Debt Instruments]] |
| OID bond | Bond initially issued below face | Proceeds can differ from face | [[2.2 Long-Term Debt Instruments]] |
| Note | Unsecured corporate debt, usually shorter maturity | Debt classification | [[2.2 Long-Term Debt Instruments]] |
| Debenture | Unsecured corporate debt | General claim | [[2.2 Long-Term Debt Instruments]] |
| Mortgage bond | Secured by real property | Collateral protection | [[2.2 Long-Term Debt Instruments]] |
| Asset-backed bond | Secured by specific assets | Recovery tied to collateral | [[2.2 Long-Term Debt Instruments]] |
| Seniority | Priority in default | Drives expected recovery | [[2.2 Long-Term Debt Instruments]] |
| Subordinated debt | Junior claim | Higher loss exposure | [[2.2 Long-Term Debt Instruments]] |
| Domestic bond | Local-market/local-currency category | International debt classification | [[2.2 Long-Term Debt Instruments]] |
| Foreign bond | Foreign issuer in local market/local currency | International financing | [[2.2 Long-Term Debt Instruments]] |
| Eurobond | Currency differs from local currency of issue country | Major definition trap | [[2.2 Long-Term Debt Instruments]] |
| Global bond | Sold in multiple markets | Broad international issue | [[2.2 Long-Term Debt Instruments]] |
| Term loan | Private bank debt with specific term | Customized borrowing | [[2.2 Long-Term Debt Instruments]] |
| Syndicated loan | Loan funded by several banks | Distributes large exposure | [[2.2 Long-Term Debt Instruments]] |
| Revolving credit | Flexible commitment up to limit | Liquidity management | [[2.3 Short and Medium-Term Finance]] |
| Private placement | Debt sold to limited group | Private capital raising | [[2.5 Capital Raising Methods]] |
| ABS | Debt backed by financial assets | Structured financing | [[2.2 Long-Term Debt Instruments]] |
| MBS | ABS backed by mortgages | Prepayment/default risk | [[2.2 Long-Term Debt Instruments]] |
| Prepayment risk | Principal returned early | Reinvestment risk | [[2.2 Long-Term Debt Instruments]] |
| Covenant | Restriction protecting creditors | Reduces agency conflict | [[2.2 Long-Term Debt Instruments]], [[4.3 Agency Theory and Governance]] |
| Callable bond | Issuer can redeem early | Issuer owns option | [[2.2 Long-Term Debt Instruments]] |
| Yield to call | Yield conditional on call | Relevant callable-bond return measure | [[2.2 Long-Term Debt Instruments]] |
| Sinking fund | Periodic debt retirement | Gradual principal reduction | [[2.2 Long-Term Debt Instruments]] |
| Balloon payment | Large residual maturity payment | Concentrated repayment risk | [[2.2 Long-Term Debt Instruments]] |
| Convertible bond | Bond convertible into shares | Debt + equity option | [[2.2 Long-Term Debt Instruments]], [[2.4 Derivative Securities in Corporate Finance]] |
| Conversion ratio | Shares received per bond | Determines conversion payoff | [[2.2 Long-Term Debt Instruments]] |
| Conversion price | Face / conversion ratio | Effective conversion stock price | [[2.2 Long-Term Debt Instruments]] |
| Warrant | Company-issued call on new shares | Explains convertible option value | [[2.4 Derivative Securities in Corporate Finance]] |

---

# Compression Notes

## Retained in Detail

- Hertz LBO financing structure;
- public vs private corporate debt;
- prospectus/offering memorandum;
- indenture and trustee;
- face value vs proceeds;
- OID concept;
- bearer vs registered;
- notes/debentures/mortgage/asset-backed bonds;
- secured vs unsecured;
- seniority and subordinated debt;
- Hertz senior/subordinated yield example;
- domestic/foreign/Eurobond/global classification;
- currency risk;
- term loans and syndicated loans;
- revolving credit;
- private placements;
- Rule 144A conceptual context;
- ABS/MBS;
- prepayment risk;
- covenants;
- call provisions;
- callable vs non-callable price/yield logic;
- YTC;
- sinking fund;
- balloon payment;
- convertibles;
- conversion price;
- straight bond + warrant;
- callable convertible;
- warning that lower convertible coupon is not automatically cheaper financing.

## Condensed

- historical size of U.S. bond markets;
- Disney 100-year bond anecdote;
- complete Hertz debt tables;
- exact government-security maturity schedules;
- municipal tax detail;
- agency-specific MBS details;
- detailed Rule 144A regulation;
- CDO institutional detail.

## Omitted / Beyond CF4

- end-of-chapter problem set;
- Home Depot data case;
- current U.S. regulatory verification;
- detailed structured-finance tranche engineering;
- historical market-size statistics;
- jurisdiction-specific tax treatment beyond conceptual context.

---

# CF4 Connection Map

```text
Company needs long-term capital
      ↓
DEBT
      ↓
[[2.2 Long-Term Debt Instruments]]
      ↓
Public ────────────── Private
  ↓                      ↓
Indenture              Term Loan
Bond Types             Private Placement
  ↓
Collateral
  ↓
Secured / Unsecured
  ↓
Seniority
  ↓
Covenants
  ↓
Repayment Features
┌──────────┬──────────────┬──────────────┐
│ Call     │ Sinking Fund │ Conversion   │
│ issuer   │ repayment    │ investor     │
│ option   │ mechanism    │ option       │
└──────────┴──────────────┴──────────────┘
      ↓
[[2.4 Derivative Securities in Corporate Finance]]
```

International classification shortcut:

```text
Local issuer + local market/currency
→ Domestic bond

Foreign issuer + local market/currency
→ Foreign bond

Currency not local to issue country
→ Eurobond

Several markets simultaneously
→ Global bond
```

---

# Quick Reading Review

- Debt financing creates a **contractual claim**.
- Public corporate debt uses an **indenture**.
- Trustee represents bondholders.
- Face value is not necessarily equal to cash proceeds.
- OID = bond initially issued below face value.
- Registered bond ownership is recorded; bearer bond historically depended on physical possession.
- **Note = unsecured**, generally shorter maturity.
- **Debenture = unsecured**.
- **Mortgage bond = secured by real property**.
- **Asset-backed bond = secured by specified assets**.
- **Secured/unsecured ≠ senior/subordinated**.
- Senior debt is paid before subordinated debt.
- Lower seniority → higher expected loss → higher required yield.
- Eurobond does not mean euro-denominated bond.
- Foreign-currency debt introduces exchange-rate risk.
- Private debt is more customizable but generally less liquid.
- Term loan = bank debt for specified term.
- Syndicated loan = multiple banks fund one loan.
- Revolving credit provides flexible draws up to a limit.
- Private placement sells debt to a small investor group.
- ABS cash flows are backed by financial assets.
- MBS = ABS backed by mortgages.
- Prepayment risk means principal can arrive earlier than expected.
- Covenants restrict issuer behavior to protect creditors.
- Callable bond → issuer owns option.
- Rates fall → issuer has stronger incentive to call.
- Callable bond → lower price / higher yield ceteris paribus.
- YTC is conditional on a specific call assumption.
- Sinking fund gradually retires debt.
- Balloon payment = large residual principal at maturity.
- Convertible bond gives holder equity upside.
- Conversion price:
  \[
  CP=\frac{F}{CR}
  \]
- At maturity:
  \[
  V_T=\max(F,CRS_T)
  \]
- Convertible = straight bond + warrant.
- Valuable conversion option allows lower coupon.
- Lower coupon does not mean financing is economically free.
- Callable convertible lets issuer force conversion decision earlier.
- Fastest Chapter 24 exam framework:
  **Promise → Collateral → Seniority → Covenants → Repayment → Option Owner → Risk → Yield.**

---

# Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose / Hertz LBO | Berk & DeMarzo, Chapter 24 introduction |
| Public corporate debt | Chapter 24, §24.1 |
| Prospectus / offering memorandum / indenture | Chapter 24, §24.1 — Public Debt |
| Face value / OID | Chapter 24, §24.1 |
| Bearer vs registered bonds | Chapter 24, §24.1 |
| Notes / debentures / mortgage / asset-backed bonds | Chapter 24, §24.1 / Table 24.2 |
| Hertz debt structure | Chapter 24, §24.1 / Tables 24.1 and 24.3 |
| Seniority / subordinated debt | Chapter 24, §24.1 |
| Domestic / foreign / Eurobond / global | Chapter 24, §24.1 — Bond Markets |
| Currency risk | Chapter 24, §24.1 |
| Private debt | Chapter 24, §24.1 — Private Debt |
| Term / syndicated loans | Chapter 24, §24.1 |
| Revolving line | Chapter 24, §24.1 |
| Private placements | Chapter 24, §24.1 |
| Rule 144A context | Chapter 24, §24.1 |
| Sovereign / Treasury debt | Chapter 24, §24.2 |
| Municipal bonds | Chapter 24, §24.2 |
| ABS / MBS | Chapter 24, §24.2 |
| Prepayment risk | Chapter 24, §24.2 |
| CDO | Chapter 24, §24.2 |
| Bond covenants | Chapter 24, §24.3 |
| Call provisions | Chapter 24, §24.4 |
| Callable-bond price/yield logic | Chapter 24, §24.4 |
| Yield to call | Chapter 24, §24.4 |
| Sinking funds | Chapter 24, §24.4 |
| Balloon payments | Chapter 24, §24.4 |
| Convertible provisions | Chapter 24, §24.4 |
| Conversion ratio / conversion price | Chapter 24, §24.4 |
| Warrant interpretation | Chapter 24, §24.4 |
| Callable convertibles | Chapter 24, §24.4 |
| Convertible coupon interpretation | Chapter 24, §24.4 |
