---
type: "condensed-book"
exam: "CF4"
book: "Financial Management: Theory and Practice"
author: "Eugene F. Brigham and Michael C. Ehrhardt"
chapter: "23"
chapter_title: "Derivatives and Risk Management"
cf4_topics: ["5.2", "5.3", "5.4"]
cf4_relevance: "High"
source_scope: "Chapter 23, Sections 23.1-23.6"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BrighamEhrhardt, Derivatives, RiskManagement]
date_created: "2026-08-25"
status: "study-note"
---

# Brigham & Ehrhardt — Chapter 23: Derivatives and Risk Management

> [!ABSTRACT] Chapter in One View
> Chapter ini menjelaskan mengapa perusahaan mengelola risiko, jenis risiko yang dihadapi, dan bagaimana derivatives digunakan untuk membentuk exposure yang lebih sesuai dengan aktivitas bisnis. Secara teori, diversified shareholders dapat membuat homemade hedges, sehingga corporate hedging tidak otomatis menambah nilai. Dalam praktik, hedging dapat meningkatkan debt capacity, menjaga capital budget, menekan expected financial-distress costs, memanfaatkan comparative advantage perusahaan, mengurangi borrowing cost dan tax volatility, serta memenuhi managerial incentives. Forward dan futures sama-sama mengunci transaksi masa depan, tetapi futures terstandardisasi, exchange-traded, dan marked-to-market; swaps menukar payment streams; structured notes memecah cash flows dan risiko; inverse floaters memperbesar interest-rate sensitivity. Risk management yang baik dimulai dari identifikasi, pengukuran, dan pemilihan respons—not from choosing a derivative first. Long hedges melindungi dari price increases, sedangkan short hedges melindungi dari price declines. Derivatives dapat mengurangi risiko secara efektif, tetapi leverage, basis risk, counterparty risk, opacity, dan weak controls dapat mengubah hedge menjadi sumber kerugian besar.

## 1. Why This Chapter Exists

Perusahaan menghadapi volatility pada product prices, demand, input costs, interest rates, exchange rates, dan kebutuhan operating capital. Seluruh faktor tersebut memengaruhi free cash flow atau WACC:

```text
Product prices and demand ─┐
Input costs ───────────────┼─> NOPAT and operating investment ─> FCF
Foreign exchange rates ───┘                              │
                                                        ↓
Firm risk + market rates + capital structure ─> WACC ─> Value
```

Dalam konteks bisnis, **risk management** berarti mengidentifikasi events yang dapat menimbulkan adverse financial consequences dan mengambil tindakan untuk mencegah atau memperkecil kerusakan. Scope-nya lebih luas daripada membeli insurance: perusahaan dapat merancang operations, contracts, financing, derivatives, controls, dan enterprise-wide coordination untuk mengelola exposure.

Chapter ini juga menekankan governance. Instrumen yang dimaksudkan untuk hedge dapat justru menambah risiko jika posisi tidak dipahami, tidak sesuai underlying exposure, terlalu leveraged, atau tidak diawasi. Tujuan akhirnya bukan membuat seluruh earnings volatility hilang, tetapi melindungi intrinsic value dengan biaya yang masuk akal.

## 2. Chapter Map

```text
Chapter 23 — Derivatives and Risk Management
├── 23.1 Reasons to Manage Risk
├── 23.2 Background on Derivatives
│   ├── Natural hedges
│   └── Hedgers and speculators
├── 23.3 Derivatives in the News
│   ├── Enron and energy trading
│   ├── Mortgage-backed securities and CDS
│   └── Governance lessons
├── 23.4 Other Types of Derivatives
│   ├── Forward versus futures
│   ├── Interest-rate and currency swaps
│   ├── Structured notes and CMOs
│   └── Inverse floaters
├── 23.5 Corporate Risk Management
│   ├── Types of risk
│   ├── Risk-management process
│   └── ERM and Value at Risk
└── 23.6 Using Derivatives to Reduce Risks
    ├── Futures mechanics and leverage
    ├── Long and short hedges
    ├── Interest-rate hedge
    ├── Swaps and CDS
    ├── Commodity hedge
    └── Use versus misuse
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 23.1-23.2 Why firms hedge and derivative background | Economic purpose and market roles of derivatives | [[5.2 Derivative Investments]] |
| 23.3 Misuse, leverage, and counterparty failure | Market transmission, creditworthiness, and systemic effects | [[5.3 Economic Influences on Markets]] |
| 23.4 Forward, futures, swaps, and structured products | Core derivative characteristics and markets | [[5.2 Derivative Investments]] |
| 23.5 Corporate risk management and VaR | Framework for identifying and controlling exposures | [[5.2 Derivative Investments]] |
| 23.6 Long/short hedges and futures price relationships | Connection between rates, asset prices, and hedging returns | [[5.2 Derivative Investments]]; [[5.4 Return Relationships and Economic Variables]] |

## 3. Reasons to Manage Risk

### 3.1 The Theoretical Challenge

Investors dislike risk, but diversified investors primarily require compensation for systematic risk. This creates a challenge: if a corporate hedge only removes firm-specific volatility, why should shareholders value it? They could diversify or create a **homemade hedge** themselves.

Consider Plastics Inc., which promises to supply fixed-price plastic components for three years. Petroleum is a major input. Higher oil price lowers margins; lower oil price increases them. Suppose investors already expect oil to remain at USD 100 per barrel and the firm can lock that price at zero cost.

Corporate value changes only if the hedge:

1. increases expected free cash flows; or
2. reduces WACC.

If locking oil at the already expected price merely narrows the cash-flow distribution without changing expected cash flow, value does not rise through the numerator. If oil-price exposure is diversifiable and does not materially affect bankruptcy risk, target capital structure, cost of debt, or systematic equity risk, WACC may not fall either.

Shareholders can also combine Plastics stock with oil futures whose value moves in the opposite direction. If they can hedge at similar cost, they should not automatically pay more because the company hedges.

> [!WARNING] Important Distinction
> **Lower total volatility ≠ automatically higher firm value.**
>
> A hedge adds value when it improves expected cash flows, financing capacity, taxes, investment continuity, or required returns—not merely because reported earnings look smoother.

### 3.2 Why Corporate Hedging Can Add Value

Despite the theoretical challenge, firms actively manage risk for several reasons.

#### 1. Debt Capacity

Smoother cash flows reduce bankruptcy probability. A firm with lower operating risk may safely use more debt and obtain additional interest tax benefits, raising value.

#### 2. Maintaining the Optimal Capital Budget

Firms are reluctant to issue external equity because of flotation costs and market pressure. Investment is often financed by internally generated funds plus debt. A severe negative cash-flow year may force a firm to abandon positive-NPV projects or issue costly equity. Hedging stabilizes internal funds and helps preserve the optimal capital budget, especially for firms with large growth opportunities.

#### 3. Reducing Financial-Distress Costs

Financial distress begins before formal bankruptcy. It can produce higher borrowing rates, customer and supplier concerns, lost sales, covenant violations, and operational disruption. By reducing the probability of very low cash flows, risk management reduces expected distress costs.

#### 4. Comparative Advantage in Hedging

Companies may hedge more efficiently than outside investors because they:

- trade larger volumes and face lower transaction costs;
- understand their operating exposure better due to internal information; and
- employ specialized personnel and systems.

#### 5. Lower Borrowing Costs

Swaps can sometimes provide the preferred fixed/floating exposure at an effective rate below direct borrowing, increasing cash flows and value.

#### 6. Tax Effects

With nonlinear tax rules, volatile earnings can create a higher present value of taxes than stable earnings. Loss carryforwards may be delayed or lost in bankruptcy. Stabilizing taxable income can reduce expected tax burden.

#### 7. Compensation Systems

Bonus floors, ceilings, and target-based rewards can make managers personally prefer stable earnings even when cumulative corporate income is unchanged. This creates a managerial motive for hedging that may not perfectly coincide with shareholder value.

> [!INFO] Corporate Finance Perspective
> The strongest shareholder-value arguments for hedging arise from **market imperfections**: taxes, distress costs, financing frictions, information asymmetry, transaction costs, and investment disruption.

## 4. Background on Derivatives

A **derivative** is a security or contract whose value depends on the price, rate, or outcome of another asset or variable. Options depend on underlying asset prices; interest-rate futures and swaps depend on rates; currency derivatives depend on exchange rates; commodity derivatives depend on commodity prices.

### 4.1 Economic Origin of Hedging

Early wheat forward markets connected farmers worried about the future selling price with millers worried about the future purchase price. Agreeing today on a future price let both parties focus on operations rather than price volatility. Organized exchanges later lowered search and transaction costs.

This is a **natural hedge**: two counterparties have mirror-image risks, so one contract reduces aggregate risk. Examples include:

- farmer versus food processor;
- copper mine versus copper user;
- oil producer versus oil-consuming company;
- exporter versus importer with opposite currency needs; and
- fixed-rate versus floating-rate borrowers with different cash-flow patterns.

When risks are not mirror images, a contract may transfer rather than eliminate risk. Insurance is the clearest example: the insured transfers a specified exposure to an insurer, which manages the pool through pricing and diversification.

### 4.2 Role of Speculators

Derivatives are highly leveraged, attracting speculators. Speculators bear substantial personal risk but also add capital, liquidity, and counterparties. Their participation can make it easier and cheaper for hedgers to transfer exposure. Therefore, speculation does not automatically increase aggregate risk, although poorly controlled speculation by unsuitable entities can be dangerous.

The chapter attributes derivatives-market growth to:

1. analytical models that improve pricing transparency;
2. computers and electronic communications that lower dealing costs; and
3. globalization, which increases currency and cross-border exposures.

## 5. Derivatives in the News

### 5.1 Why Derivatives Fail in Practice

Derivatives are valuable hedging tools but combine three dangerous features:

- **leverage**, so small errors create large gains or losses;
- **complexity**, so exposures may be misunderstood; and
- **opacity and counterparty dependence**, so obligations may not be visible or collectible.

The chapter cites losses and failures associated with inappropriate derivative use, including Barings Bank, LTCM, Enron, AIG, Lehman Brothers, and others. These cases do not show that every derivative is harmful. They show that model risk, weak controls, incentives, and counterparty risk can overwhelm the intended hedge.

### 5.2 Enron and Energy Trading

Electricity markets created a legitimate need for long-term fixed-price contracts because electricity cannot be economically stored and spot prices can swing sharply. Users sought price certainty; producers sought assured demand. Energy contracts therefore had a valid hedging function.

Enron used long-term contracts and mark-to-model estimates. If expected selling prices rose or production costs fell, the contract's NPV legitimately increased. The governance failure arose when executives used implausibly high prices, low costs, underestimated risk, and low discount rates to inflate present values and current profit. Auditor failure allowed unreliable model inputs to become reported earnings.

When new capacity exceeded demand and power prices fell, contract and plant values collapsed. Write-downs reduced equity, worsened debt and coverage ratios, triggered collateral requirements, and undermined counterparties' willingness to trade. The case illustrates a chain:

```text
Biased assumptions
      ↓
Inflated derivative/project values and earnings
      ↓
Debt-funded expansion and weak financial ratios
      ↓
Collateral calls + counterparty concerns
      ↓
Liquidity crisis and bankruptcy
```

### 5.3 Mortgage-Backed Securities and Credit Default Swaps

Mortgage-backed securities (MBS) fell sharply when housing prices declined and mortgage defaults rose. Banks holding them suffered equity losses and reduced lending, contributing to broader economic contraction.

Many investors had purchased **credit default swaps (CDS)** that promised payment if the debt defaulted. Protection was only as reliable as the counterparty. Some sellers had not adequately hedged or capitalized their obligations, so defaults on underlying securities were accompanied by failure of the supposed protection.

> [!WARNING] Important Distinction
> **Hedged exposure ≠ eliminated exposure if the hedge counterparty can default.** A derivative can replace market risk with counterparty credit and liquidity risk.

### 5.4 Governance Lessons

The chapter argues for:

1. effective top-management oversight of derivative personnel;
2. transparent reporting of contract details and obligations;
3. stronger information on counterparty creditworthiness; and
4. adequate capital against risky positions.

The lesson is better governance and risk-bearing capacity, not elimination of derivatives whose beneficial hedges rarely become headlines.

## 6. Other Types of Derivatives

### 6.1 Forward Contracts versus Futures Contracts

A **forward contract** is a bilateral agreement to buy and sell an asset at a specified future date and price. A **futures contract** creates a similar economic commitment but is standardized and traded on an exchange.

| Feature | Forward | Futures |
|---|---|---|
| Contract design | Tailor-made | Standardized |
| Trading venue | Privately negotiated / OTC | Organized exchange |
| Settlement | Delivery commonly contemplated | Usually closed or cash-settled before delivery |
| Gain/loss recognition | Generally at settlement | Marked-to-market daily |
| Credit risk | Direct bilateral counterparty risk | Reduced by exchange/clearing and margin |
| Liquidity after signing | Usually limited | Generally higher |

Daily **marking to market** credits gains and requires cash for losses. **Initial margin** or performance bond is collateral posted when entering the contract; **maintenance margin** is the minimum balance that must be maintained. These mechanisms reduce default risk but create liquidity demands when positions move adversely.

> [!WARNING] Important Distinction
> **Forward/futures contracts create obligations; options create rights for the holder.** With a futures contract, both parties must settle regardless of whether price movement is favorable.

### Example — Currency Forward for an Importer

**Situation**

A U.S. company must pay EUR 10 million to a European supplier in 180 days. If the euro appreciates, the dollar cost rises.

**Mechanics**

The company buys euros forward for delivery in 180 days at a fixed dollar/euro rate. This locks the dollar cost while preserving supplier trade credit.

**Meaning**

The importer exchanges uncertain future dollar cost for a known cost. If the euro weakens, it forgoes the benefit; the purpose is certainty, not beating the market.

### Example — Interest-Rate Futures Before Bond Issuance

A company planning to issue long-term bonds in six months is harmed if market rates rise. Because bond prices fall when rates rise, it can **sell T-bond futures** today. If rates rise, the firm pays more on its own debt but profits as the futures price falls and it closes the short position at a lower price. If rates fall, the futures position loses, but the new bonds carry a lower cost.

### 6.2 Swaps

A **swap** is an exchange of specified payment obligations. Interest-rate swaps commonly exchange fixed and floating payments; currency swaps exchange payment streams in different currencies. The reference amount used to calculate payments is the **notional principal**.

Swaps can reduce risk by matching debt payments to operating cash flows. A firm with stable cash inflows may prefer fixed debt payments. A firm whose cash inflows rise and fall with the economy may prefer floating payments that tend to move with its ability to pay.

### Example — Antron/Bosworth Interest-Rate Swap

**Situation**

Antron has stronger credit and can borrow at either:

- floating: $LIBOR+1.00\%$; or
- fixed: $10.00\%$.

Bosworth can borrow at:

- floating: $LIBOR+1.50\%$; or
- fixed: $10.40\%$.

Antron wants fixed-rate exposure; Bosworth wants floating. They issue the type of debt for which their relative borrowing position is advantageous, then swap payments. Antron issues floating debt, Bosworth issues fixed debt. Under the swap, Bosworth pays LIBOR to Antron, and Antron pays 8,95% fixed to Bosworth.

**Calculation — Antron**

$$
\begin{aligned}
\text{Payment to lender} &=-(LIBOR+1.00\%)\\
\text{Receipt from Bosworth} &=+LIBOR\\
\text{Payment to Bosworth} &=-8.95\%\\[2pt]
\text{Net cost} &=-9.95\%\text{ fixed}
\end{aligned}
$$

Antron pays 9,95% fixed rather than 10,00% through direct fixed borrowing.

**Calculation — Bosworth**

$$
\begin{aligned}
\text{Payment to lender} &=-10.40\%\\
\text{Receipt from Antron} &=+8.95\%\\
\text{Payment to Antron} &=-LIBOR\\[2pt]
\text{Net cost} &=-(LIBOR+1.45\%)
\end{aligned}
$$

Bosworth pays $LIBOR+1.45\%$ rather than $LIBOR+1.50\%$ through direct floating borrowing.

**Meaning**

Both obtain the desired exposure and save 5 basis points. A bank usually intermediates, prices counterparty credit risk, guarantees or administers payments, and charges a fee.

> [!NOTE] Textbook Context
> The chapter uses LIBOR as the floating benchmark because it reflects the textbook's period. The conceptual mechanics are benchmark plus spread versus a fixed swap rate; the specific benchmark is historical context.

In a **currency swap**, firms with income and debt obligations in opposite currencies exchange payments. A U.S. firm earning euros but owing dollars can swap with a German firm earning dollars but owing euros, matching debt service to operating cash flows and reducing exchange-rate risk.

### 6.3 Structured Notes and Collateralized Mortgage Obligations

A **structured note** is a debt obligation whose cash flows derive from another obligation or embedded structure. Mortgage pools can be placed with a trustee and used to back **collateralized mortgage obligations (CMOs)** or other MBS sold to institutional investors.

These securities are harder to value than plain bonds because homeowners may prepay mortgages. When rates fall, ordinary bond prices rise, but mortgage refinancing accelerates, returning principal when investors must reinvest at lower rates. Thus, MBS holders face **prepayment risk** in addition to default and interest-rate risks.

Mortgage cash flows can be divided into:

- **IO (Interest Only):** receives interest components; and
- **PO (Principal Only):** receives principal repayments.

An IO may lose value when rates fall because refinancing terminates interest payments sooner, even though the discount rate also declines. When rates rise, slower prepayment can extend interest cash flows. Structured finance can allocate different risks to investors with different preferences, but complexity may make exposures difficult to measure.

### 6.4 Inverse Floaters

A conventional floating-rate note pays a rate that moves with a market benchmark. Its cash flows and discount rate move in the same direction, tending to stabilize price.

An **inverse floater** moves oppositely: when market rates rise, its coupon falls while the discount rate rises. Both effects reduce value, making it exceptionally sensitive to rate increases. If rates fall, coupon and valuation effects can produce a sharp price rise.

Its magnified sensitivity can make an inverse floater an efficient hedge in small quantity, but calibration errors can make the combined position riskier than the original exposure.

## 7. Corporate Risk Management

### 7.1 Types of Risk

| Risk Type | Meaning | Textbook Illustration |
|---|---|---|
| Pure risk | Only prospect of loss | Fire or product-liability judgment |
| Speculative risk | Possibility of gain or loss | New project or marketable security investment |
| Demand risk | Uncertainty in product/service demand | Lower-than-expected sales |
| Input risk | Uncertainty in labor or material cost | Copper price rises without pass-through |
| Financial risk | Exposure created by financial transactions | Interest-rate or exchange-rate change |
| Property risk | Destruction of productive assets | Fire, flood, or riot |
| Personnel risk | Loss resulting from employee actions | Fraud, embezzlement, or discrimination suit |
| Environmental risk | Pollution and cleanup exposure | Environmental liability |
| Liability risk | Claims arising from products, services, or employee actions | Product or vehicle liability |
| Insurable risk | Risk that can be transferred through insurance | Many property, personnel, environmental, and liability risks |

**Self-insurance** means retaining and funding a risk internally rather than paying another party to bear it. A risk being insurable does not mean buying insurance is automatically optimal.

### 7.2 The Risk-Management Process

The textbook proposes three core steps.

#### Step 1 — Identify Exposures

Map the events, variables, counterparties, processes, and concentrations that could harm cash flows or value.

#### Step 2 — Measure Potential Effects

Estimate likelihood, severity, timing, correlation with other risks, and capacity to absorb loss. Focus management attention on material exposures rather than treating every uncertainty equally.

#### Step 3 — Choose a Response

Available techniques include:

1. **Transfer to an insurer.** Pay a premium to shift specified losses.
2. **Transfer the risky function.** Outsource an activity, such as logistics, to a specialist.
3. **Purchase derivatives.** Hedge commodity, rate, currency, or market-price exposure.
4. **Reduce probability.** Improve prevention, maintenance, controls, or training.
5. **Reduce loss severity.** Install suppression systems, compartmentalize facilities, or create contingencies.
6. **Avoid the activity.** Exit when risk exceeds economic benefit.

Each feasible alternative requires cost-benefit analysis. Compare the present value of prevention, transfer, retained losses, and secondary effects—not merely the insurance premium or derivative price.

### 7.3 Enterprise Risk Management

Managing each business unit in isolation can miss diversification, concentration, and cross-unit effects. **Enterprise Risk Management (ERM)** coordinates exposures across the organization so local decisions support total intrinsic value. It also encourages consistent economic assumptions and identification of counterparty or operational dependencies.

### 7.4 Value at Risk

**Value at Risk (VaR)** summarizes a downside threshold for a specified output, horizon, and probability. The process is:

1. identify sources of risk and their probability distributions;
2. estimate how they affect cash flow, earnings, or intrinsic value;
3. construct the output distribution through scenario analysis or Monte Carlo simulation;
4. choose a probability threshold, such as 5% or 1%; and
5. read the corresponding downside outcome.

If one-quarter cash-flow VaR at the 1% threshold is negative USD 100 million, the textbook interprets this as a 1% probability that quarterly cash flow will be below negative USD 100 million. Management then decides whether that exposure is acceptable or requires additional capital or mitigation.

> [!WARNING] Important Distinction
> **VaR is incomplete without a horizon, output measure, and probability threshold.** It identifies a quantile, not the maximum possible loss beyond that quantile.

## 8. Using Derivatives to Reduce Risks

### 8.1 Futures Mechanics and Price Quotation

The **spot market** exchanges assets immediately or within a few days. A futures contract fixes today the price for purchase or sale at a future date.

Treasury bond futures in the chapter use a USD 100.000 hypothetical bond. A quote of $116'17$ means:

$$
116+\frac{17}{32}=116.53125\%\text{ of par}
$$

$$
\text{Contract value}=1.1653125(\$100{,}000)=\$116{,}531.25
$$

A daily change of $19/32$ point on USD 100.000 produces:

$$
\frac{19}{32}(1\%)(\$100{,}000)=\$593.75
$$

Because a futures position requires only margin rather than the full contract value, these changes produce large percentage gains or losses on posted capital. Daily marking-to-market can generate margin calls before the hedge's underlying business cash flow is realized.

Futures prices on bonds move inversely with implied interest rates. A higher bond-futures price implies a lower yield; a lower price implies a higher yield.

### 8.2 Long and Short Hedges

- A **long hedge** buys futures to protect against a price increase. It is appropriate when the firm will purchase an asset or input later.
- A **short hedge** sells futures to protect against a price decline. For bonds, a firm also shorts bond futures to protect against rising interest rates because rising rates cause bond prices to fall.

The correct hedge direction follows the unhedged exposure:

```text
Future purchase + harmed by price increase ─> Long futures
Future sale + harmed by price decline ──────> Short futures
Future bond issue + harmed by rate increase ─> Short bond futures
```

### Example — Carson Foods Short Interest-Rate Hedge

**Situation**

Carson plans to issue USD 10 million of 20-year bonds in March. At current rates it could issue at 9%, but a rate increase would reduce the value of a 9%-coupon issue. March T-bond futures are worth USD 116.531,25 per contract.

**Hedge Size**

$$
\text{Contracts}
=\frac{\$10{,}000{,}000}{\$116{,}531.25}
=85.81\approx86
$$

Carson sells 86 contracts. If required yield on Carson debt rises to 10%, its 9%-coupon bonds would produce only USD 9.142.046, a financing shortfall of:

$$
\$10{,}000{,}000-\$9{,}142{,}046=\$857{,}954
$$

Assume the futures-implied rate also rises and contract value falls to USD 103.383,17. Carson closes the short by repurchasing 86 contracts:

$$
\text{Futures profit}
=86(\$116{,}531.25-\$103{,}383.17)
=\$1{,}130{,}735
$$

The futures gain more than offsets the modeled bond shortfall in this example, before commissions and opportunity cost of margin.

**Meaning**

The hedge converts uncertain future borrowing cost into a more stable combined outcome. But it is not perfect because Carson debt and the Treasury futures contract are not identical and their yields need not move one-for-one.

### 8.3 Basis Risk and Perfect Hedges

A **perfect hedge** produces gains on the derivative that exactly offset losses on the underlying exposure. Real hedges are rarely perfect because:

- the hedged asset differs from the deliverable or index;
- spot and futures prices do not move identically;
- maturities or durations differ;
- quantity and timing cannot be matched exactly; and
- transaction costs and margin cash flows remain.

The residual mismatch is **basis risk**. For an interest-rate hedge, matching duration is generally more accurate than matching maturity alone.

### 8.4 Swaps as Risk Transformation

A firm with floating-rate debt can pay fixed in a swap and receive floating, converting its net obligation to fixed. Conversely, a firm can pay floating and receive fixed. Currency swaps align debt service with operating receipts in the relevant currency.

Standardized swap contracts lower arrangement costs and support liquidity. Banks often act as counterparties rather than merely finding a mirror-image firm, then hedge their own position elsewhere. This improves execution but concentrates attention on bank creditworthiness and interconnectedness.

A **credit default swap** resembles insurance more than an exchange of ordinary interest streams. The protection buyer makes periodic payments; the seller compensates the buyer if specified debt defaults. The buyer need not necessarily own the bond in the textbook's description. CDS creates counterparty and systemic risk when sellers lack capital to honor correlated claims.

### 8.5 Commodity Price Exposure

### Example — Porter Electronics Copper Hedge

**Situation**

Porter will need 100.000 pounds of copper in March to fulfill a fixed-price sales contract. It fears a copper price increase but does not want to buy inventory early and incur carrying costs. Each futures contract covers 25.000 pounds.

**Calculation**

$$
\text{Contracts required}
=\frac{100{,}000}{25{,}000}
=4
$$

Porter buys four March copper futures contracts—a long hedge.

**Meaning**

If copper price rises, higher spot input cost is offset by gain on long futures. If copper falls, futures lose but physical copper is cheaper. The hedge protects the planned margin rather than maximizing profit under a favorable price movement.

### 8.6 Use and Misuse

Derivatives should generally be used by nonfinancial corporations to hedge risks arising from core business, not to create unrelated speculative exposure. Safe practice requires:

- a clearly documented underlying exposure;
- instrument, amount, maturity, and direction matched to that exposure;
- counterparty limits and collateral/liquidity planning;
- independent valuation, accounting, and audit controls;
- board and senior-management policies; and
- transparent reporting to shareholders.

A hedge can fail if it is poorly matched. It can become speculation when position size exceeds the exposure, direction is based on a market view rather than protection, or an expired contract is rolled forward to conceal losses. Leverage makes such governance failures potentially catastrophic.

> [!WARNING] Important Distinction
> **Hedging manages business exposure; speculation creates a market exposure.** The same derivative can perform either function depending on the position's purpose, size, and relationship to the underlying risk.

## Chapter Synthesis

Chapter 23 begins with a paradox. If shareholders are diversified and can hedge personally, merely smoothing company-specific cash flow should not create value. Corporate risk management becomes economically meaningful because actual markets contain frictions: distress costs, taxes, expensive external financing, investment disruption, transaction-cost advantages, information asymmetry, and counterparty constraints. A hedge matters when it changes expected cash flows, financing capacity, required returns, or the probability of costly states.

Derivatives work by reallocating state-contingent cash flows. A forward or futures contract fixes a future transaction price; a swap exchanges one payment pattern for another; structured notes carve uncertain asset cash flows into different claims; inverse floaters deliberately magnify interest-rate exposure. These instruments do not make uncertainty disappear by themselves. A natural hedge can reduce aggregate risk because counterparties have opposing exposures. Other transactions transfer risk to a party willing and able to bear it.

Effective risk management therefore begins above the instrument level. The firm identifies material exposures, measures probability and severity, considers correlations across the enterprise, and compares insurance, outsourcing, prevention, loss reduction, derivatives, retention, and avoidance. Only then does it choose a derivative and set direction, notional amount, maturity, and counterparty.

The chapter's final warning is governance. Leverage and complexity make derivatives efficient but unforgiving. Mismatched hedges create basis risk; margin creates liquidity risk; protection sellers create counterparty risk; opaque models create valuation risk; incentives can convert hedging desks into speculative operations. The same contracts that stabilize cash flows can destabilize a firm when controls fail. Risk management adds value only when the total package—instrument, operations, financing, liquidity, accounting, counterparty, and oversight—is managed coherently.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Risk management | Identify adverse events and minimize financial damage | Protects FCF, financing capacity, and value | [[5.2 Derivative Investments]] |
| Derivative | Value depends on another asset, price, or rate | Core instrument for transferring exposure | [[5.2 Derivative Investments]] |
| Natural hedge | Counterparties have mirror-image risks | Can reduce aggregate economic risk | [[5.2 Derivative Investments]] |
| Forward contract | Customized bilateral future transaction | Flexible hedge but retains bilateral credit risk | [[5.2 Derivative Investments]] |
| Futures contract | Standardized, exchange-traded, daily-settled obligation | Adds liquidity and reduces default exposure | [[5.2 Derivative Investments]] |
| Marking to market | Daily recognition and cash settlement of gains/losses | Controls credit risk but creates liquidity needs | [[5.2 Derivative Investments]] |
| Margin | Collateral supporting futures performance | Produces leverage and margin-call risk | [[5.2 Derivative Investments]] |
| Swap | Exchange of payment obligations | Transforms fixed/floating or currency exposure | [[5.2 Derivative Investments]] |
| Notional principal | Reference amount used to calculate swap payments | Determines payment size without ordinary principal exchange | [[5.2 Derivative Investments]] |
| Structured note / CMO | Debt cash flows derived from pooled or restructured claims | Allocates prepayment, rate, and credit risks | [[5.1 Investment Asset Characteristics]] |
| Inverse floater | Coupon moves opposite market rates | Magnifies sensitivity to interest-rate movements | [[5.4 Return Relationships and Economic Variables]] |
| ERM | Enterprise-wide coordination of exposures | Prevents siloed risk decisions | [[5.2 Derivative Investments]] |
| VaR | Downside quantile for a stated horizon and confidence threshold | Summarizes selected tail exposure | [[5.3 Economic Influences on Markets]] |
| Long hedge | Buy futures against future price increase | Protects planned purchases/input costs | [[5.2 Derivative Investments]] |
| Short hedge | Sell futures against future price decline | Also protects bond issuer from rate increases | [[5.2 Derivative Investments]] |
| Basis risk | Imperfect movement between exposure and hedge | Explains why real hedges are rarely exact | [[5.4 Return Relationships and Economic Variables]] |
| Counterparty risk | Other party may fail to perform | Can undermine apparent protection | [[5.3 Economic Influences on Markets]] |

## Compression Notes

### Retained in Detail

- theoretical challenge to corporate hedging and value-creation channels;
- seven reasons firms manage risk;
- natural hedges, hedgers, and speculators;
- forward–futures differences and market mechanics;
- interest-rate and currency swaps, including Antron/Bosworth calculation;
- structured notes, CMOs, IO/PO claims, and inverse floaters;
- types of corporate risk and three-step risk-management process;
- ERM and VaR interpretation;
- long versus short futures hedges;
- Carson interest-rate hedge and Porter commodity hedge;
- basis, leverage, liquidity, and counterparty risks;
- governance lessons from derivative misuse.

### Condensed

- historical company narratives and market-development anecdotes;
- detailed Enron chronology and individual utility-company outcomes;
- mortgage-credit-crisis narrative;
- T-bond futures quotation table and repeated yield calculations;
- descriptions of exchanges, contract eligibility, and market conventions;
- repeated examples of insurance and operational risk mitigation.

### Omitted / Beyond CF4

- website, spreadsheet, and calculator instructions;
- detailed U.S. terrorism-insurance legislation;
- cyber-insurance product examples;
- bibliography and research-survey detail;
- end-of-chapter questions and problems;
- duration-based cross-hedge construction beyond the chapter's core explanation.

## CF4 Connection Map

```text
Forward + Futures + Options + Swaps
                  ↓
      [[5.2 Derivative Investments]]
                  ↓
Rates, FX, commodity prices, and creditworthiness
                  ↓
     [[5.3 Economic Influences on Markets]]
                  ↓
Spot–futures movements, leverage, and hedge returns
                  ↓
[[5.4 Return Relationships and Economic Variables]]
```

## Quick Reading Review

- Risk management identifies events with adverse financial consequences and chooses cost-effective mitigation.
- Lower company-specific volatility does not automatically increase value for diversified shareholders.
- Hedging can add value through debt capacity, investment continuity, lower distress costs, hedging efficiency, borrowing cost, and tax effects.
- Compensation systems can motivate earnings smoothing even when shareholder value effects are weak.
- A natural hedge joins counterparties with mirror-image exposures and can reduce aggregate risk.
- Speculators add liquidity and risk-bearing capacity but face amplified gains and losses.
- Forward contracts are customized bilateral obligations; futures are standardized, exchange-traded, and marked-to-market daily.
- Margin reduces exchange credit risk but creates leverage and liquidity risk.
- Options grant the holder a choice; forward and futures contracts obligate both parties.
- A swap exchanges payment streams and can transform fixed/floating or currency exposure.
- The Antron/Bosworth swap lets both firms obtain the desired exposure 5 basis points below direct borrowing in the textbook example.
- Structured mortgage claims face prepayment, reinvestment, interest-rate, and default risks.
- Inverse floaters magnify rate exposure because coupon and discount-rate effects reinforce each other.
- The three risk-management steps are identify, measure, and choose a response.
- Insurable risk does not always need external insurance; self-insurance may be optimal.
- ERM evaluates correlated exposures across units rather than managing each silo independently.
- VaR states a downside quantile for a defined output, horizon, and threshold; it is not maximum loss.
- Long futures hedge a future purchase against price increases.
- Short bond futures hedge a future bond issue against rising interest rates.
- A perfect hedge requires derivative gains to exactly offset underlying losses; basis risk usually prevents perfection.
- Commodity users buy futures to stabilize input cost rather than profit from price forecasts.
- A hedge can replace one risk with basis, liquidity, model, or counterparty risk.
- Derivative governance requires documented exposure, matched sizing, independent controls, and transparent reporting.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Section 3 | Chapter 23, Section 23.1 |
| Section 4 | Chapter 23, Section 23.2 |
| Section 5 | Chapter 23, Section 23.3 |
| Section 6 | Chapter 23, Section 23.4 and Figures 23-1 to 23-2, Table 23-1 |
| Section 7 | Chapter 23, Section 23.5 and ERM/VaR feature |
| Section 8 | Chapter 23, Section 23.6 and Table 23-2 |
| Chapter Synthesis onward | Chapter 23 synthesis and summary |
