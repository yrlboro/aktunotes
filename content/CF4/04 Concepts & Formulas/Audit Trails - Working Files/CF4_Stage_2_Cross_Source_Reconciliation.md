---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 2
stage_name: "Cross-Source Reconciliation"
status: "relationship-classified-not-frozen"
date_created: "2026-08-30"
baseline: "CF4_Stage_1_Raw_Knowledge_Inventory_FIXED_v3.md"
canonical_notation_frozen: false
canonical_terminology_frozen: false
canonical_formula_frozen: false
---

# CF4 — Stage 2: Cross-Source Reconciliation

> [!ABSTRACT] Tujuan Stage 2
> Stage ini menggunakan **CF4 Stage 1 FIXED v3** sebagai baseline dan mulai menjawab:
>
> **“Ketika konsep yang tampak sama muncul di beberapa topic notes / textbook, sebenarnya hubungan antar-versinya apa?”**
>
> Stage ini **belum melakukan freeze canonical terminology atau formula**. Outputnya adalah relationship classification, source-conflict resolution, dan daftar area yang harus dinormalisasi pada Stage 3+.

## 1. Source Hierarchy Applied

1. **Silabus CF4 PAI** — scope authority.
2. **Official textbooks dalam chapter/section yang ditetapkan silabus** — authority untuk definition, treatment, mechanics, formula, dan interpretation.
3. **22 syllabus/topic notes CF4** — current synthesis layer yang direkonsiliasi.
4. **Past exam** — belum digunakan sebagai authority pada Stage 2; nanti untuk usability/validation.
5. **Legacy/general knowledge** — tidak digunakan untuk silently mengisi gap.

> [!IMPORTANT]
> Jika dua official sources memakai istilah atau convention berbeda, Stage 2 tidak memaksa keduanya menjadi satu apabila economic quantity atau decision use-nya memang berbeda.

## 2. Relationship Classification Used

| Code | Relationship Type | Meaning |
|---|---|---|
| A | Exact Conceptual Duplicate | Konsep dan meaning sama |
| B | Same Concept, Different Terminology | Meaning sama, label berbeda |
| C | Same Concept, Different Perspective | Konsep sama dilihat issuer/investor/creditor/analyst/management |
| D | Same Economic Substance, Different Accounting Presentation | Economics sama, reporting berbeda |
| E | General Principle vs Special Case | Satu lebih umum, satu kasus khusus |
| F | Definition vs Consequence | Definisi dan efek tidak boleh dicampur |
| G | Accounting Treatment vs Economic Meaning | Pencatatan/presentation berbeda dari economic interpretation |
| H | Formula Equivalence | Quantity sama, bentuk algebra berbeda |
| I | Same Quantity, Different Convention | Definisi numerator/denominator/timing berbeda |
| J | Exact vs Approximation | Formula terkait tetapi tidak identik |
| K | Shortcut / Rule of Thumb | Convenience rule, tidak universal |
| L | Genuinely Distinct | Konsep/quantity memang berbeda |
| M | Potentially Misleading | Benar hanya jika context/assumption jelas |
| N | Textbook / Historical Context | Detail dijaga sebagai source context |

## 3. System-Wide Reconciliation Matrix

| ID | Collision Family | Topics | Relationship Classification | Stage-2 Resolution |
|---|---|---|---|---|
| R01 | Profit / Net Income vs Cash Flow | 1.2, 1.4, 1.5, 3.3 | Genuinely Distinct + Accounting Treatment vs Economic Meaning | Keep three distinct layers: accounting profit/net income; statement cash flow; incremental/project FCF. Never use them as synonyms. |
| R02 | Revenue vs Cash Receipt / Expense vs Cash Payment | 1.3, 1.5 | Genuinely Distinct + Definition vs Consequence | Preserve strict distinction. Transaction reasoning should begin with economic event and recognition, then cash consequence. |
| R03 | Recognition vs Measurement vs Presentation vs Disclosure | 1.2, 1.3, 1.4 | Genuinely Distinct Concepts | Do not collapse into a generic 'reporting treatment'. Retain four-question sequence. |
| R04 | Statement of Financial Position vs Balance Sheet; Net Income / Net Profit / Net Earnings | 1.2, 1.4, 1.5 | Same Concept, Different Terminology | Treat as terminology mapping, not conceptual conflict. Stage 3 will select one canonical label and preserve aliases. |
| R05 | Equity vs Retained Earnings vs Cash | 1.4, 1.5, 2.1 | General Category vs Component + Potentially Misleading | Keep hierarchy: equity → components, including retained earnings. Add explicit 'retained earnings ≠ cash' safeguard. |
| R06 | Liquidity vs Solvency vs Funding Risk | 1.2, 1.6, 2.3 | Genuinely Distinct but Related | Do not use these terms interchangeably. Link them through time horizon and source of payment capacity. |
| R07 | Financial Reporting vs Financial Statement Analysis | 1.2, 1.6 | Genuinely Distinct Roles | Retain as separate process layers. |
| R08 | Financial Ratio Definitions: Average vs Ending Balance; Debt Definition | 1.6 | Same Quantity Family, Different Convention | No single silent merge. Rule for Stage 8+: use the problem's stated definition first; otherwise preserve named source convention. Formula labels must carry denominator/numerator convention. |
| R09 | Book Value vs Market Value | 1.6, 2.1, 3.3, 4.1, 5.1 | Genuinely Distinct Measurement Bases | Keep separate. Never transfer a book-value number into a market-value formula without source/question support. |
| R10 | Market Value vs Intrinsic Value | 2.1, 4.1, 5.1, 5.3 | Genuinely Distinct but Related | Preserve distinction; do not treat 'fair/current price' and intrinsic value as automatic synonyms. |
| R11 | Debt vs Liability | 1.4, 1.5, 2.2, 3.2 | General Category vs Financing Subset | Do not substitute 'liability' for 'debt' unless the specific ratio/source defines it that way. |
| R12 | Debt vs Equity Claims | 2.1, 2.2, 3.2, 5.1 | Genuinely Distinct with Repeated Perspectives | Keep one conceptual distinction, but preserve perspective-specific consequences. |
| R13 | Preferred Stock: Equity, Hybrid Features, and Cost Component | 2.1, 3.3, 5.1 | Same Instrument, Different Perspective | Do not relabel preferred as ordinary debt just because its cash flow can look fixed. |
| R14 | Primary vs Secondary: Offering Shares vs Market Trading | 2.1, 2.5, 5.1 | Same Terminology Family, Context-Sensitive | Preserve both meanings but attach object/context explicitly: primary shares/secondary shares vs primary market/secondary market. |
| R15 | Convertible / Callable Features | 2.1, 2.2, 2.4 | Same Security, Different Perspective + Embedded Option | Unify through 'who owns the option?' while preserving host security classification. |
| R16 | Derivatives: 2.4 Corporate Finance vs 5.2 Investment/Market Contracts | 2.4, 5.2 | Same Core Mechanics, Different Perspective / Scope | Do not delete either topic. Build one derivative core, then branch into corporate-security/business-decision vs investment/market-contract use. |
| R17 | Forward vs Futures | 5.2 | Genuinely Distinct Contracts with Similar Economic Exposure | Never classify as algebraic duplicates merely because maturity payoff may be similar. |
| R18 | Hedging vs Speculation | 5.2, 5.3 | Same Instrument Use, Different Objective | Canonical distinction should be purpose/exposure-based, not instrument-based. |
| R19 | Interest Rate / Yield / Coupon / Required Return / Discount Rate | 2.2, 3.3, 5.1, 5.3, 5.4 | Related but Genuinely Distinct Quantities | Keep separate labels and map when equality is assumed by a valuation model. |
| R20 | Required vs Expected vs Realized Return | 3.3, 5.3, 5.4 | Genuinely Distinct Time/Perspective Concepts | Do not collapse. Add explicit ex-ante/ex-post and investor/issuer tags. |
| R21 | Total Risk / Volatility vs Systematic Risk / Beta | 3.3, 5.3, 5.4 | Genuinely Distinct Risk Measures | Never use volatility and beta as synonyms. Any risk-adjusted return formula must state the relevant risk concept. |
| R22 | WACC / Cost of Capital / Investor Required Return | 3.2, 3.3, 4.2, 5.3, 5.4 | Same Economic Bridge, Different Perspective / Aggregation | Unify conceptually but preserve component vs aggregate vs project-specific rate distinctions. |
| R23 | Tax Shield / After-Tax Cost of Debt | 1.1, 3.2, 3.3 | Definition → Financing Consequence → Formula | Keep one causal chain rather than three isolated facts. |
| R24 | NPV Across 3.3, 3.4, and 4.2 | 3.3, 3.4, 4.2 | Exact Core Concept, Different Application | One conceptual NPV identity; keep application context separate. |
| R25 | IRR / MIRR / Payback / ARR / PI | 3.4 | Genuinely Distinct Appraisal Metrics + Convention Collision | Do not force one PI definition in Stage 2. Preserve source-labeled conventions until Stage 9 determines operational default(s). NPV remains the value-maximizing benchmark when ranking conflicts arise in the referenced materials. |
| R26 | Agency Problem / Agency Costs / Governance | 3.1, 3.2, 4.3 | General Principle → Specific Conflict → Mitigation System | Keep hierarchy: agency relationship/conflict → agency cost → governance mechanism. |
| R27 | Growth vs Value Creation | 3.4, 4.2, 4.3 | Potentially Misleading Rule Corrected by General Principle | Reject 'growth = good' as default. Preserve value-creation criterion. |
| R28 | Financial Assets / Securities vs Real Resources / Operating Assets | 4.2, 5.1 | Genuinely Distinct Economic Objects | Keep strict distinction and direction of causality. |
| R29 | Economic Conditions → Cash Flow Channel vs Discount-Rate/Risk-Premium Channel | 4.1, 5.3, 5.4 | Same Event, Multiple Causal Channels | Canonical reasoning must identify channel first; avoid one-step rules such as 'good economy = stocks up'. |
| R30 | Nominal vs Real Return; Exact vs Approximate Inflation Relation | 5.3, 5.4 | Genuinely Distinct Quantity + Exact vs Approximation | Preserve exact relation as mathematically exact; label subtraction as approximation. |

## 4. Detailed Reconciliation Findings

### R01 — Profit / Net Income vs Cash Flow

**Topics:** 1.2, 1.4, 1.5, 3.3  

**Official-source basis:** Robinson Ch.1; Weygandt Ch.1–2; Brigham Ch.2; Berk & DeMarzo Ch.8  

**Relationship:** Genuinely Distinct + Accounting Treatment vs Economic Meaning


**Finding:** Accounting profit is period performance under accrual accounting; cash flow records cash movement; project free cash flow is an incremental corporate-finance quantity. The sources are complementary, not contradictory.


**Stage-2 resolution:** Keep three distinct layers: accounting profit/net income; statement cash flow; incremental/project FCF. Never use them as synonyms.


**Carry forward:** Terminology audit: profit, net income, operating cash flow, free cash flow, project FCF.

### R02 — Revenue vs Cash Receipt / Expense vs Cash Payment

**Topics:** 1.3, 1.5  

**Official-source basis:** Weygandt Ch.1–2; Robinson financial-reporting framework  

**Relationship:** Genuinely Distinct + Definition vs Consequence


**Finding:** Accrual recognition means revenue/expense can occur without simultaneous cash receipt/payment. Topic-note examples are consistent with the accounting sources.


**Stage-2 resolution:** Preserve strict distinction. Transaction reasoning should begin with economic event and recognition, then cash consequence.


**Carry forward:** Map revenue/income, expense/cost, receivable/payable, prepaid/unearned.

### R03 — Recognition vs Measurement vs Presentation vs Disclosure

**Topics:** 1.2, 1.3, 1.4  

**Official-source basis:** Robinson Ch.3 conceptual framework; Weygandt Ch.1  

**Relationship:** Genuinely Distinct Concepts


**Finding:** These are separate stages/questions in financial reporting: whether an item enters statements, at what amount, where/how it is shown, and what supplementary information is provided.


**Stage-2 resolution:** Do not collapse into a generic 'reporting treatment'. Retain four-question sequence.


**Carry forward:** Create canonical term definitions and 'do not confuse with' map.

### R04 — Statement of Financial Position vs Balance Sheet; Net Income / Net Profit / Net Earnings

**Topics:** 1.2, 1.4, 1.5  

**Official-source basis:** Robinson Ch.1; Brigham Ch.2; Weygandt Ch.1–2  

**Relationship:** Same Concept, Different Terminology


**Finding:** The sources use alternative labels for the same statement or bottom-line performance concept depending on reporting tradition/textbook wording.


**Stage-2 resolution:** Treat as terminology mapping, not conceptual conflict. Stage 3 will select one canonical label and preserve aliases.


**Carry forward:** Canonical terminology dictionary.

### R05 — Equity vs Retained Earnings vs Cash

**Topics:** 1.4, 1.5, 2.1  

**Official-source basis:** Robinson Ch.1; Weygandt Ch.1–2; Brigham Ch.2  

**Relationship:** General Category vs Component + Potentially Misleading


**Finding:** Equity is residual ownership interest; retained earnings is an accumulated equity component; neither is a cash account. Brigham explicitly stresses retained earnings is not cash.


**Stage-2 resolution:** Keep hierarchy: equity → components, including retained earnings. Add explicit 'retained earnings ≠ cash' safeguard.


**Carry forward:** Terminology and statement-location map.

### R06 — Liquidity vs Solvency vs Funding Risk

**Topics:** 1.2, 1.6, 2.3  

**Official-source basis:** Robinson Ch.1; Weygandt Ch.18; Brigham Ch.3; Berk & DeMarzo Ch.27  

**Relationship:** Genuinely Distinct but Related


**Finding:** Liquidity concerns near-term obligations/resources; solvency concerns longer-term ability to meet obligations/capital structure; funding risk concerns inability or high cost of refinancing/raising funds.


**Stage-2 resolution:** Do not use these terms interchangeably. Link them through time horizon and source of payment capacity.


**Carry forward:** Collision dictionary with time-horizon cue.

### R07 — Financial Reporting vs Financial Statement Analysis

**Topics:** 1.2, 1.6  

**Official-source basis:** Robinson Ch.1; Weygandt Ch.1 & Ch.18  

**Relationship:** Genuinely Distinct Roles


**Finding:** Reporting is preparation/communication by the entity; analysis is use/evaluation by users. The notes already preserve this distinction.


**Stage-2 resolution:** Retain as separate process layers.


**Carry forward:** Canonical definitions.

### R08 — Financial Ratio Definitions: Average vs Ending Balance; Debt Definition

**Topics:** 1.6  

**Official-source basis:** Weygandt Ch.18; Brigham Ch.3; Robinson ratio analysis  

**Relationship:** Same Quantity Family, Different Convention


**Finding:** Sources may use average balances for flow/stock ratios, while other presentations use ending balances; 'debt' can mean interest-bearing debt or broader liabilities depending on ratio definition/data provider.


**Stage-2 resolution:** No single silent merge. Rule for Stage 8+: use the problem's stated definition first; otherwise preserve named source convention. Formula labels must carry denominator/numerator convention.


**Carry forward:** Notation/terminology map; Stage 9 formula convention map.

### R09 — Book Value vs Market Value

**Topics:** 1.6, 2.1, 3.3, 4.1, 5.1  

**Official-source basis:** Robinson/Weygandt accounting; Brigham Ch.3, Ch.9, Ch.13; Berk & DeMarzo corporate-finance framework  

**Relationship:** Genuinely Distinct Measurement Bases


**Finding:** Book values arise from accounting measurement; market values arise from security prices/market valuation. Brigham's WACC guidance emphasizes market/target capital weights rather than historical book weights.


**Stage-2 resolution:** Keep separate. Never transfer a book-value number into a market-value formula without source/question support.


**Carry forward:** Canonical labels; Stage 9 formula-input rules.

### R10 — Market Value vs Intrinsic Value

**Topics:** 2.1, 4.1, 5.1, 5.3  

**Official-source basis:** Brigham Ch.1 & Ch.13; Berk & DeMarzo market-pricing framework  

**Relationship:** Genuinely Distinct but Related


**Finding:** Market value is observed/market-implied price; intrinsic value is valuation based on expected future cash flows and required return in Brigham's framing. They need not coincide at every moment.


**Stage-2 resolution:** Preserve distinction; do not treat 'fair/current price' and intrinsic value as automatic synonyms.


**Carry forward:** Terminology map and perspective labels.

### R11 — Debt vs Liability

**Topics:** 1.4, 1.5, 2.2, 3.2  

**Official-source basis:** Weygandt/Robinson accounting definitions; Berk & DeMarzo Ch.24; Brigham financing chapters  

**Relationship:** General Category vs Financing Subset


**Finding:** Liability is the broader accounting category of obligations. Debt in corporate-finance contexts typically refers to financing claims with contractual repayment/interest features. Some ratios use broader liability definitions.


**Stage-2 resolution:** Do not substitute 'liability' for 'debt' unless the specific ratio/source defines it that way.


**Carry forward:** Dictionary + ratio-convention warning.

### R12 — Debt vs Equity Claims

**Topics:** 2.1, 2.2, 3.2, 5.1  

**Official-source basis:** Berk & DeMarzo Ch.1, Ch.14, Ch.24; Brigham financing chapters  

**Relationship:** Genuinely Distinct with Repeated Perspectives


**Finding:** Debt is contractual/senior and typically has maturity/payment obligations; common equity is residual ownership with discretionary dividends and no fixed maturity. Repetition across topics comes from issuer, investor, financing, and investment-asset perspectives.


**Stage-2 resolution:** Keep one conceptual distinction, but preserve perspective-specific consequences.


**Carry forward:** Perspective-aware canonical terminology.

### R13 — Preferred Stock: Equity, Hybrid Features, and Cost Component

**Topics:** 2.1, 3.3, 5.1  

**Official-source basis:** Berk & DeMarzo Ch.14/23; Brigham cost-of-capital framework  

**Relationship:** Same Instrument, Different Perspective


**Finding:** Preferred stock remains an equity/hybrid security with priority over common; in WACC it is a separate capital component. Different topic treatments describe the same instrument from security and financing perspectives.


**Stage-2 resolution:** Do not relabel preferred as ordinary debt just because its cash flow can look fixed.


**Carry forward:** Instrument hierarchy and perspective matrix.

### R14 — Primary vs Secondary: Offering Shares vs Market Trading

**Topics:** 2.1, 2.5, 5.1  

**Official-source basis:** Berk & DeMarzo Ch.23; Brigham financial-market context  

**Relationship:** Same Terminology Family, Context-Sensitive


**Finding:** In capital raising, primary shares are newly issued and company receives proceeds; secondary shares are existing-owner sales. In broader market taxonomy, primary/secondary market refers issuance vs subsequent trading.


**Stage-2 resolution:** Preserve both meanings but attach object/context explicitly: primary shares/secondary shares vs primary market/secondary market.


**Carry forward:** Terminology collision map.

### R15 — Convertible / Callable Features

**Topics:** 2.1, 2.2, 2.4  

**Official-source basis:** Berk & DeMarzo Ch.20, Ch.24; relevant equity/debt chapters  

**Relationship:** Same Security, Different Perspective + Embedded Option


**Finding:** Convertible features give conversion rights to holders; call features give redemption rights to issuers under contract terms. Topic 2.4 supplies option logic; 2.1/2.2 supplies security classification and claim consequences.


**Stage-2 resolution:** Unify through 'who owns the option?' while preserving host security classification.


**Carry forward:** Embedded-option terminology map.

### R16 — Derivatives: 2.4 Corporate Finance vs 5.2 Investment/Market Contracts

**Topics:** 2.4, 5.2  

**Official-source basis:** Berk & DeMarzo Ch.20, Ch.22, Ch.24; Brigham Ch.8 & Ch.23  

**Relationship:** Same Core Mechanics, Different Perspective / Scope


**Finding:** Call/put payoff logic overlaps. Topic 2.4 emphasizes corporate optionality, real options, and embedded security options; 5.2 emphasizes forwards, futures, options, swaps, hedging/speculation, and market mechanics.


**Stage-2 resolution:** Do not delete either topic. Build one derivative core, then branch into corporate-security/business-decision vs investment/market-contract use.


**Carry forward:** Canonical derivative terminology; Stage 11 perspective matrix.

### R17 — Forward vs Futures

**Topics:** 5.2  

**Official-source basis:** Brigham Ch.23; topic-note source mapping  

**Relationship:** Genuinely Distinct Contracts with Similar Economic Exposure


**Finding:** Both can lock future price exposure, but futures are standardized/exchange-traded/marked-to-market while forwards are customized OTC and typically carry more counterparty exposure.


**Stage-2 resolution:** Never classify as algebraic duplicates merely because maturity payoff may be similar.


**Carry forward:** Instrument comparison dictionary.

### R18 — Hedging vs Speculation

**Topics:** 5.2, 5.3  

**Official-source basis:** Brigham Ch.23; economic-exposure material  

**Relationship:** Same Instrument Use, Different Objective


**Finding:** The derivative contract can be identical; classification depends on whether the position offsets an existing exposure or creates/adds directional exposure.


**Stage-2 resolution:** Canonical distinction should be purpose/exposure-based, not instrument-based.


**Carry forward:** Definition + perspective rule.

### R19 — Interest Rate / Yield / Coupon / Required Return / Discount Rate

**Topics:** 2.2, 3.3, 5.1, 5.3, 5.4  

**Official-source basis:** Brigham Ch.1, Ch.7, Ch.9; Berk & DeMarzo risk-return framework  

**Relationship:** Related but Genuinely Distinct Quantities


**Finding:** Coupon is contractual; yield is market return/discount-rate concept for debt; required return is investor compensation and issuer cost-of-capital mirror; discount rate is the rate used to present-value cash flows. Context can make yield and required return numerically aligned, but terminology is not universally interchangeable.


**Stage-2 resolution:** Keep separate labels and map when equality is assumed by a valuation model.


**Carry forward:** Canonical quantity dictionary.

### R20 — Required vs Expected vs Realized Return

**Topics:** 3.3, 5.3, 5.4  

**Official-source basis:** Berk & DeMarzo Ch.10/13; Brigham Ch.7/9  

**Relationship:** Genuinely Distinct Time/Perspective Concepts


**Finding:** Required and expected are ex ante; realized is ex post. In equilibrium expected return may align with required return, but realized return can differ materially. For the issuer, investor required return is a cost of capital.


**Stage-2 resolution:** Do not collapse. Add explicit ex-ante/ex-post and investor/issuer tags.


**Carry forward:** Return terminology dictionary and perspective mapping.

### R21 — Total Risk / Volatility vs Systematic Risk / Beta

**Topics:** 3.3, 5.3, 5.4  

**Official-source basis:** Berk & DeMarzo Ch.10; Brigham cost-of-equity/risk framework  

**Relationship:** Genuinely Distinct Risk Measures


**Finding:** Standard deviation/volatility measures total dispersion. Beta measures systematic market sensitivity. CAPM prices systematic risk rather than all stand-alone volatility.


**Stage-2 resolution:** Never use volatility and beta as synonyms. Any risk-adjusted return formula must state the relevant risk concept.


**Carry forward:** Risk dictionary; Stage 9 formula assumptions.

### R22 — WACC / Cost of Capital / Investor Required Return

**Topics:** 3.2, 3.3, 4.2, 5.3, 5.4  

**Official-source basis:** Brigham Ch.9; Berk & DeMarzo Ch.10; Brigham valuation chapters  

**Relationship:** Same Economic Bridge, Different Perspective / Aggregation


**Finding:** Component cost of capital is the return required by a capital provider; WACC is the weighted aggregate for the firm's financing mix; project discount rate must reflect project risk rather than blindly applying company WACC.


**Stage-2 resolution:** Unify conceptually but preserve component vs aggregate vs project-specific rate distinctions.


**Carry forward:** Canonical definitions; Stage 9 formula layer.

### R23 — Tax Shield / After-Tax Cost of Debt

**Topics:** 1.1, 3.2, 3.3  

**Official-source basis:** Brigham Ch.2, Ch.9, Ch.15  

**Relationship:** Definition → Financing Consequence → Formula


**Finding:** Taxation principles explain interest deductibility context; capital-structure material treats the tax shield as a debt benefit; WACC expresses the after-tax debt cost as $r_D(1-T)$ under the model.


**Stage-2 resolution:** Keep one causal chain rather than three isolated facts.


**Carry forward:** Terminology; Stage 9 formula assumptions and tax-context labels.

### R24 — NPV Across 3.3, 3.4, and 4.2

**Topics:** 3.3, 3.4, 4.2  

**Official-source basis:** Brigham Ch.10; Berk & DeMarzo Ch.3/7; Weygandt Ch.26; Brigham Ch.13  

**Relationship:** Exact Core Concept, Different Application


**Finding:** NPV consistently measures present-value value creation. 3.3 treats it in capital-budgeting process, 3.4 as an appraisal method, and 4.2 as a resource-allocation/value-creation criterion.


**Stage-2 resolution:** One conceptual NPV identity; keep application context separate.


**Carry forward:** Canonical concept; Stage 9 one default formula.

### R25 — IRR / MIRR / Payback / ARR / PI

**Topics:** 3.4  

**Official-source basis:** Brigham Ch.10; Berk & DeMarzo Ch.7; Weygandt Ch.26  

**Relationship:** Genuinely Distinct Appraisal Metrics + Convention Collision


**Finding:** These metrics answer different questions. A major source conflict is 'profitability index': Brigham uses PV inflows / initial cost, while Berk & DeMarzo use NPV per scarce resource in the cited material. These are not the same formula.


**Stage-2 resolution:** Do not force one PI definition in Stage 2. Preserve source-labeled conventions until Stage 9 determines operational default(s). NPV remains the value-maximizing benchmark when ranking conflicts arise in the referenced materials.


**Carry forward:** Terminology: PI-A vs PI-B provisional labels; Stage 9 formula reconciliation.

### R26 — Agency Problem / Agency Costs / Governance

**Topics:** 3.1, 3.2, 4.3  

**Official-source basis:** Berk & DeMarzo Ch.16/29; Brigham Ch.13/15  

**Relationship:** General Principle → Specific Conflict → Mitigation System


**Finding:** Separation of ownership/control creates manager-shareholder agency problems; debt can create shareholder-creditor conflicts; governance is the system of monitoring/incentives/control used to mitigate conflicts. These are linked but not synonyms.


**Stage-2 resolution:** Keep hierarchy: agency relationship/conflict → agency cost → governance mechanism.


**Carry forward:** Canonical governance terminology and principal-agent mapping.

### R27 — Growth vs Value Creation

**Topics:** 3.4, 4.2, 4.3  

**Official-source basis:** Brigham Ch.13; Berk & DeMarzo investment/agency material  

**Relationship:** Potentially Misleading Rule Corrected by General Principle


**Finding:** Growth is not automatically value-creating. Value depends on incremental returns/cash flows relative to the cost of capital; empire building can increase size while destroying value.


**Stage-2 resolution:** Reject 'growth = good' as default. Preserve value-creation criterion.


**Carry forward:** Canonical interpretation rule.

### R28 — Financial Assets / Securities vs Real Resources / Operating Assets

**Topics:** 4.2, 5.1  

**Official-source basis:** Brigham Ch.13; investment-asset sources  

**Relationship:** Genuinely Distinct Economic Objects


**Finding:** Financial assets are claims/funding instruments; real/operating resources generate goods/services and operating cash flows. A firm's financial securities are claims on value generated by underlying business resources.


**Stage-2 resolution:** Keep strict distinction and direction of causality.


**Carry forward:** Canonical definitions.

### R29 — Economic Conditions → Cash Flow Channel vs Discount-Rate/Risk-Premium Channel

**Topics:** 4.1, 5.3, 5.4  

**Official-source basis:** Brigham Ch.1/7/13; Berk & DeMarzo Ch.10/13  

**Relationship:** Same Event, Multiple Causal Channels


**Finding:** The same macro event can raise expected cash flows while also raising required returns, or vice versa. Direction of asset-price change is not universal when channels offset.


**Stage-2 resolution:** Canonical reasoning must identify channel first; avoid one-step rules such as 'good economy = stocks up'.


**Carry forward:** Terminology + Stage 12 decision protocol.

### R30 — Nominal vs Real Return; Exact vs Approximate Inflation Relation

**Topics:** 5.3, 5.4  

**Official-source basis:** Brigham economic-rate framework; topic 5 source synthesis  

**Relationship:** Genuinely Distinct Quantity + Exact vs Approximation


**Finding:** Nominal return measures money growth; real return adjusts purchasing power. Exact Fisher-style relation and subtraction approximation must not be treated as identical.


**Stage-2 resolution:** Preserve exact relation as mathematically exact; label subtraction as approximation.


**Carry forward:** Terminology; Stage 9 exact-vs-approx formula status.

## 5. Conflicts That Must NOT Be Collapsed

Stage 2 menemukan beberapa area yang secara eksplisit harus tetap memiliki **lebih dari satu valid representation**.

### 5.1 Financial Ratios

Official sources dapat berbeda dalam:

- average balance vs ending balance;
- broad liabilities vs interest-bearing debt;
- exact numerator selection;
- source/data-provider convention.

Karena itu Stage 2 menetapkan:

> **ratio name saja tidak selalu cukup untuk menentukan formula.**

Formula layer nanti harus menyimpan **definition + source convention + input basis**.

---

### 5.2 Profitability Index

Dua official-source conventions yang muncul dalam current CF4 notes:

**Brigham-style project PI**

$$
PI
=
\frac{PV(\text{future inflows})}{\text{initial investment}}
$$

untuk simple initial-outlay project, dengan threshold umum:

$$
PI>1
$$

**Berk & DeMarzo scarce-resource framing**

$$
PI
=
\frac{NPV}{\text{resource consumed}}
$$

Keduanya **bukan algebraic equivalents** dan tidak boleh silently digabung.

Stage 2 hanya memberi provisional labels:

- `PI — Brigham project ratio`
- `PI — Berk scarce-resource ratio`

Final operational handling ditentukan pada Formula Reconciliation stage.

---

### 5.3 Required Return / Yield / Cost of Capital / Discount Rate

Terms ini sering numerically connected tetapi tidak universally synonymous.

Stage 2 map:

```text
Investor required return
        ↓ mirror perspective
Issuer component cost of capital

Weighted financing components
        ↓
WACC

Project risk
        ↓
appropriate project discount rate

Debt market pricing
        ↓
market-required yield
```

Kesamaan angka harus berasal dari **model/assumption**, bukan dari penyamaan istilah.

---

### 5.4 Derivatives

Stage 2 menolak penghapusan overlap antara 2.4 dan 5.2.

```text
DERIVATIVE CORE
    ↓
option / forward / futures / swap mechanics
    ↓
┌─────────────────────────────┬──────────────────────────────┐
│ Corporate-finance branch    │ Investment/market branch     │
│ embedded options            │ market contracts             │
│ real options                │ hedging/speculation          │
│ financing consequences      │ market mechanics/exposure    │
└─────────────────────────────┴──────────────────────────────┘
```

Overlap adalah **intentional perspective overlap**, bukan redundancy error.

---

## 6. Repeated Concepts That CAN Be Collapsed Later

Beberapa repeated items secara substantive dapat menjadi satu canonical concept pada stage berikutnya:

- statement of financial position = balance sheet;
- net income / net profit / net earnings, subject to source wording;
- NPV core definition;
- debt-vs-equity core claim distinction;
- accounting equation;
- total stock return = income component + capital gain/loss component;
- systematic risk vs beta relationship within CAPM framing;
- tax shield causal chain;
- agency relationship → agency conflict → agency cost;
- financial asset vs real/operating resource.

> [!WARNING]
> “Can be collapsed later” tidak berarti semua context harus dihapus. Canonical definition dapat satu, sedangkan perspective/application tetap banyak.

## 7. Perspective Reconciliation

Stage 2 menunjukkan bahwa banyak apparent duplicates sebenarnya adalah **perspective duplicates**.

| Concept | Accounting / Analyst | Issuer / Company | Investor / Shareholder | Creditor / Lender |
|---|---|---|---|---|
| Debt | Liability/financing classification | Source of financing + fixed obligation | Fixed-income investment claim | Contractual claim / priority |
| Equity | Residual equity account/claim | Permanent ownership financing | Ownership, upside, dividend | Junior cushion behind debt |
| WACC / required return | Valuation input | Cost of financing/assets | Required compensation | Component return for debt claim |
| Dividend | Equity distribution | Payout decision | Cash return | Reduces residual cash/equity cushion |
| Derivative | Fair-value/reporting context if relevant | Hedge/financing/embedded option | Investment/hedge/speculation | Counterparty exposure depending contract |
| Market price | Observed external value | Financing/control signal | Buy/sell valuation | Credit/market signal |

This perspective layer must be preserved into the later **Perspective Matrix** rather than flattened.

## 8. Accounting Reconciliation Rules Carried Forward

Based on Topik 1 source structure, Stage 2 adopts these **relationship rules** (not yet a frozen dictionary):

```text
Economic event
    ↓
Recognition question
    ↓
Measurement question
    ↓
Presentation/classification question
    ↓
Disclosure question
    ↓
Statement effects
    ↓
Analytical interpretation
```

And for basic transaction reasoning:

```text
Economic event
    ↓
Account affected
    ↓
Asset / Liability / Equity / Revenue / Expense
    ↓
Increase / decrease
    ↓
Profit effect?
    ↓
Cash effect?
    ↓
Balance-sheet effect
```

These sequences reconcile the accounting sources without forcing debit/credit to be the first reasoning step.

## 9. Corporate-Finance Reconciliation Rules Carried Forward

Across Topik 2–5, repeated corporate-finance material can be organized through:

```text
Economic decision / security
    ↓
Cash-flow rights or incremental cash flows
    ↓
Risk allocation
    ↓
Required return / cost of capital
    ↓
Value
    ↓
Issuer / investor consequence
```

This is a reconciliation architecture, **not yet the Stage-6 hierarchy**.

## 10. Source-Context Items

Items that should remain explicitly contextual rather than be silently modernized:

- historical U.S. tax brackets / dividend-exclusion percentages in Brigham examples;
- U.S.-specific entity/tax/legal details;
- SEC / registration mechanics presented as textbook context;
- historical return samples such as Berk & DeMarzo 1926–2011;
- legacy terminology such as minority interest where newer notes use NCI.

These are retained when relevant to textbook logic but marked as source/historical context.

## 11. Unresolved Items for Later Stages

Stage 2 intentionally leaves several questions unresolved because they belong to later work:

1. **Which English/Indonesian term becomes canonical?** → Stage 3–4.
2. **Which ratio formula becomes operational default?** → Stage 9.
3. **How should Brigham PI vs Berk PI appear in master reference?** → Stage 9.
4. **Which formula is MEMORIZE / RECONSTRUCT / REFERENCE ONLY / AVOID AS DEFAULT?** → Stage 7/9.
5. **Which repeated explanations should be physically removed from final master reference?** → Stage 15.
6. **Which perspective table should be used in exam routing?** → Stage 11–12.
7. **Which traps are supported by actual past-exam evidence?** → Stage 17 validation.

## 12. Stage-2 Validation Checklist

- [x] Stage 1 FIXED v3 used as baseline.
- [x] High-priority cross-topic collisions reviewed.
- [x] Accounting terminology/treatment collisions separated from economic meaning.
- [x] Perspective duplicates identified.
- [x] Formula/convention collisions flagged without premature canonicalization.
- [x] Derivative overlap 2.4 vs 5.2 resolved as perspective/scope overlap.
- [x] Ratio convention differences retained.
- [x] Profitability-index convention conflict retained explicitly.
- [x] Required/expected/realized return separated.
- [x] Total/systematic risk separated.
- [x] Book/market/intrinsic value distinctions preserved.
- [x] Textbook/historical context isolated.
- [x] No canonical freeze performed.

## 13. Exit Decision

**Stage 2 is complete at the relationship-classification level.**

The next logical stage is:

> **Stage 3 — Terminology Collision Audit**

Stage 3 should work specifically from the collision families identified here and produce a controlled term-by-term matrix:

| Term A | Term B | Same / Different? | Exact Difference | Source Mapping | Ambiguity Risk | Proposed Canonical Handling |
|---|---|---|---|---|---|---|

Stage 3 still should **not freeze** the final dictionary. Freeze occurs only after the terminology dictionary and subsequent validation are complete.

## 14. Source Traceability

| Reconciliation Area | Primary Official Source Basis |
|---|---|
| Financial-reporting concepts, recognition/measurement/presentation/disclosure | Robinson Ch.1 & Ch.3; Weygandt Ch.1–2 |
| Statement structure, retained earnings, profit vs cash | Robinson Ch.1; Weygandt Ch.1–2; Brigham Ch.2 |
| Financial ratios and definition variability | Weygandt Ch.18; Brigham Ch.3; Robinson ratio-analysis material |
| Equity/debt/security claims | Berk & DeMarzo Ch.1, Ch.14, Ch.23–24; Brigham financing context |
| Capital raising | Berk & DeMarzo Ch.23–24; Brigham Ch.20 |
| Cost of capital / WACC | Brigham Ch.9; Berk & DeMarzo risk-return framework |
| Capital budgeting / NPV / IRR / PI | Brigham Ch.10; Berk & DeMarzo Ch.3 & Ch.7; Weygandt Ch.26 |
| Capital structure / tax shield / agency effects | Brigham Ch.14–15; Berk & DeMarzo Ch.16 |
| Corporate valuation / intrinsic value / real resources | Brigham Ch.13 |
| Governance / agency | Brigham Ch.13; Berk & DeMarzo Ch.16 & Ch.29 |
| Derivatives / options | Berk & DeMarzo Ch.20, Ch.22, Ch.24; Brigham Ch.8 & Ch.23 |
| Historical/systematic risk, beta, CAPM | Berk & DeMarzo Ch.10 & Ch.13; Brigham supporting risk-return chapters |
| Economic influences on markets | Brigham Ch.1 & Ch.7; Berk & DeMarzo Ch.10 & Ch.13 |

> [!NOTE]
> This file is a **reconciliation layer**, not a replacement for Stage 1 inventory and not yet the final master reference.
