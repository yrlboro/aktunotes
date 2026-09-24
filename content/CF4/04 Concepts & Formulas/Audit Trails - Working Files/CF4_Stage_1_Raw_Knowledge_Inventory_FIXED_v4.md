---
type: "cf4-reconciliation-stage"
exam: "CF4"
stage: 1
stage_name: "Raw Knowledge Inventory"
status: "pre-canonical"
date_created: "2026-08-30"
source_scope: "22 CF4 syllabus/topic notes (1.1–5.4)"
canonical_decisions_made: false
---

# CF4 — Stage 1: Raw Knowledge Inventory

> [!ABSTRACT] Tujuan Stage 1
> Stage ini memetakan **apa yang saat ini ada di seluruh 22 syllabus/topic notes CF4** sebelum melakukan reconciliation.
>
> **Belum ada keputusan canonical.** Tidak ada istilah, treatment, formula, atau interpretation yang dinyatakan sebagai “winner” pada stage ini.
>
> Inventory ini sengaja mempertahankan overlap, redundancy, dan potential collision karena hal-hal tersebut adalah input untuk Stage 2.

## 1. Source Scope

Stage 1 menggunakan seluruh 22 syllabus/topic notes:


- **1.1 — Taxation Principles** (`1.1 Taxation Principles.md`)
- **1.2 — Financial Reporting Requirements** (`1.2 Financial Reporting Requirements.md`)
- **1.3 — Accounting Concepts and Sustainability** (`1.3 Accounting Concepts and Sustainability.md`)
- **1.4 — Company Account Structure** (`1.4 Company Account Structure.md`)
- **1.5 — Financial Statements Construction** (`1.5 Financial Statements Construction.md`)
- **1.6 — Financial Ratios and Interpretation** (`1.6 Financial Ratios and Interpretation.md`)
- **2.1 — Equity Instruments** (`2.1 Equity Instruments(1).md`)
- **2.2 — Long-Term Debt Instruments** (`2.2 Long-Term Debt Instruments(1).md`)
- **2.3 — Short and Medium-Term Finance** (`2.3 Short and Medium-Term Finance(1).md`)
- **2.4 — Derivative Securities in Corporate Finance** (`2.4 Derivative Securities in Corporate Finance.md`)
- **2.5 — Capital Raising Methods** (`2.5 Capital Raising Methods.md`)
- **3.1 — Business Entity Structures** (`3.1 Business Entity Structures.md`)
- **3.2 — Sources of Finance and Capital Structure** (`3.2 Sources of Finance and Capital Structure.md`)
- **3.3 — Capital Budgeting and Cost of Capital** (`3.3 Capital Budgeting and Cost of Capital.md`)
- **3.4 — Investment Return Methods** (`3.4 Investment Return Methods.md`)
- **4.1 — Financial Markets Structure** (`4.1 Financial Markets Structure.md`)
- **4.2 — Finance and Real Resources** (`4.2 Finance and Real Resources.md`)
- **4.3 — Agency Theory and Governance** (`4.3 Agency Theory and Governance.md`)
- **5.1 — Investment Asset Characteristics** (`5.1 Investment Asset Characteristics.md`)
- **5.2 — Derivative Investments** (`5.2 Derivative Investments.md`)
- **5.3 — Economic Influences on Markets** (`5.3 Economic Influences on Markets.md`)
- **5.4 — Return Relationships and Economic Variables** (`5.4 Return Relationships and Economic Variables.md`)

Silabus CF4 tetap menjadi **scope authority**, sedangkan topic notes menjadi layer yang sedang diaudit. Official textbooks belum digunakan pada Stage 1 untuk memilih versi canonical; textbook akan menjadi authority penting pada Stage 2 saat cross-source reconciliation.

## 2. Inventory Rules

Setiap knowledge object ditandai secara raw sebagai salah satu layer berikut:

- **Terminology** — istilah/label yang perlu dinormalisasi.
- **Definition / Classification** — definisi, kategori, dan conceptual distinctions.
- **Accounting / Reporting Concept** — recognition, measurement, presentation, statement mechanics, transaction effect.
- **Security / Financing Concept** — debt, equity, instruments, financing arrangements, derivatives, capital raising.
- **Economic / Corporate Finance Concept** — markets, risk, value, governance, economic relationships.
- **Formula / Financial Relationship** — formula, identity, ratio, valuation relation, payoff, return relationship.

`Potential collision` hanya berarti **perlu diperiksa pada Stage 2**, bukan berarti ada kesalahan.

## 3. Coverage Summary

| Topic | Topic Note | Raw Objects | Formula Blocks | Explicit Warning/Trap Callouts |
|---|---|---:|---:|---:|
| 1.1 | Taxation Principles | 44 | 15 | 17 |
| 1.2 | Financial Reporting Requirements | 45 | 0 | 17 |
| 1.3 | Accounting Concepts and Sustainability | 72 | 3 | 17 |
| 1.4 | Company Account Structure | 51 | 10 | 20 |
| 1.5 | Financial Statements Construction | 54 | 33 | 19 |
| 1.6 | Financial Ratios and Interpretation | 62 | 108 | 22 |
| 2.1 | Equity Instruments | 61 | 39 | 11 |
| 2.2 | Long-Term Debt Instruments | 69 | 13 | 16 |
| 2.3 | Short and Medium-Term Finance | 91 | 39 | 13 |
| 2.4 | Derivative Securities in Corporate Finance | 91 | 57 | 11 |
| 2.5 | Capital Raising Methods | 75 | 30 | 17 |
| 3.1 | Business Entity Structures | 70 | 11 | 19 |
| 3.2 | Sources of Finance and Capital Structure | 60 | 7 | 12 |
| 3.3 | Capital Budgeting and Cost of Capital | 62 | 66 | 14 |
| 3.4 | Investment Return Methods | 49 | 141 | 15 |
| 4.1 | Financial Markets Structure | 51 | 0 | 17 |
| 4.2 | Finance and Real Resources | 18 | 0 | 19 |
| 4.3 | Agency Theory and Governance | 25 | 0 | 21 |
| 5.1 | Investment Asset Characteristics | 65 | 11 | 15 |
| 5.2 | Derivative Investments | 72 | 23 | 14 |
| 5.3 | Economic Influences on Markets | 46 | 38 | 17 |
| 5.4 | Return Relationships and Economic Variables | 16 | 122 | 23 |

### System-Wide Totals

- **Topic notes audited:** 22
- **Raw knowledge objects:** 1249
- **Distinct displayed formula blocks captured:** 766
- **Explicit warning/danger/bug/caution callouts captured:** 366
- **High-priority cross-topic collision families pre-flagged:** 26

> [!IMPORTANT]
> Angka di atas adalah **inventory counts**, bukan jumlah konsep yang akhirnya perlu dihafal. Banyak objek kemungkinan akan collapse menjadi satu canonical concept setelah Stage 2–8.

## 4. High-Priority Potential Collision Families

Ini adalah area yang sudah terlihat berulang lintas topic notes dan harus menjadi prioritas reconciliation berikutnya.

| Family | Appears In | Why Flagged |
|---|---|---|
| Debt vs Equity / Claims | 2.1, 2.2, 3.2, 5.1 | Ownership/residual claim vs contractual/senior claim; issuer vs investor framing. |
| Market Value vs Intrinsic Value | 2.1, 4.1, 5.1, 5.3 | Market pricing, valuation, and financial-reporting perspectives may use related but non-identical framing. |
| Profit vs Cash Flow | 1.2, 1.4, 1.5, 3.3 | Accounting performance vs cash movement vs project free cash flow. |
| Revenue vs Cash Receipt / Expense vs Cash Payment | 1.3, 1.5 | Accrual accounting mechanics. |
| Liquidity vs Solvency | 1.2, 1.6, 2.3 | Short-term payment capacity vs long-term obligations/funding risk. |
| Book Value vs Market Value | 1.6, 3.3, 4.1, 5.1 | Accounting measurement vs financing/valuation weights. |
| Required vs Expected vs Realized Return | 3.3, 5.3, 5.4 | Issuer cost of capital vs investor expectations vs ex-post outcome. |
| Risk: Total vs Systematic | 3.3, 5.3, 5.4 | Standard deviation/volatility vs beta/priced risk. |
| WACC / Cost of Capital / Required Return | 3.2, 3.3, 4.2, 5.3, 5.4 | Same valuation bridge viewed from issuer/project/investor perspectives. |
| NPV | 3.3, 3.4, 4.2 | Capital-budgeting value creation, method comparison, and real-resource allocation. |
| IRR / Return Method | 3.4 | Distinct appraisal metrics; risk of treating rates as interchangeable with NPV. |
| Primary vs Secondary | 2.1, 2.5, 5.1 | Security issuance/cash destination vs trading-market context. |
| Preferred Stock | 2.1, 3.3, 5.1 | Equity/hybrid characterization and cost-of-capital treatment. |
| Convertible / Callable Features | 2.1, 2.2, 2.4 | Hybrid securities and embedded option ownership. |
| Forward / Futures / Options / Swaps | 2.4, 5.2 | Corporate-finance optionality vs investment/market contract mechanics. |
| Hedging vs Speculation | 5.2, 5.3 | Purpose of derivative position vs economic exposure. |
| Interest Rate / Yield / Discount Rate | 2.2, 3.3, 5.1, 5.3, 5.4 | Contractual coupon, market yield, required return, discount rate. |
| Tax Shield / After-Tax Cost | 1.1, 3.2, 3.3 | Taxation principles feeding financing and WACC. |
| Dividend | 1.1, 2.1, 3.2, 5.4 | Tax, shareholder payout, policy, and return component. |
| Financial Reporting vs Financial Statement Analysis | 1.2, 1.6 | Preparation/communication vs analytical use. |
| Recognition vs Measurement vs Presentation vs Disclosure | 1.2, 1.3, 1.4 | Accounting-stage distinctions. |
| Parent/Subsidiary/Consolidation/NCI | 1.4 | Group accounts family; terminology older/newer may collide. |
| Agency Conflict | 3.1, 3.2, 4.3 | Ownership-control, debt-equity, and governance contexts. |
| Growth vs Value Creation | 3.4, 4.2, 4.3 | Growth can destroy value if returns do not exceed cost of capital. |
| Financial Assets vs Real Resources | 4.2, 5.1 | Claims/funding vs productive resources. |
| Economic Conditions → Cash Flow vs Discount Rate | 4.1, 5.3, 5.4 | Same macro event can act through multiple channels. |

## 5. Raw Knowledge Inventory

> [!WARNING] Jangan Dibaca sebagai Canonical Dictionary
> Baris di bawah hanya menunjukkan bahwa suatu concept/term muncul dalam study system. Repetition antar-topic **dipertahankan**.

| ID | Topic | Knowledge Object | Raw Type | Source Note | Potential Collision |
|---|---|---|---|---|---|
| CF4-1.1-001 | 1.1 | . Dengan 1.4 Company Account Structure | Accounting / Reporting Concept | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6 |
| CF4-1.1-002 | 1.1 | . Dengan 1.5 Financial Statements Construction | Accounting / Reporting Concept | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6, 3.3 |
| CF4-1.1-003 | 1.1 | . Dengan 3.2 Sources of Finance and Capital Structure | Accounting / Reporting Concept | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 2.1, 3.3 |
| CF4-1.1-004 | 1.1 | . Tax liability pada bracket tertentu | Accounting / Reporting Concept | 1.1 Taxation Principles.md |  |
| CF4-1.1-005 | 1.1 | Hubungan Konsep | Accounting / Reporting Concept | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-1.1-006 | 1.1 | Kapan Digunakan | Accounting / Reporting Concept | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-007 | 1.1 | . After-tax income | Definition / Classification | 1.1 Taxation Principles.md |  |
| CF4-1.1-008 | 1.1 | B. Corporate Tax Logic | Definition / Classification | 1.1 Taxation Principles.md |  |
| CF4-1.1-009 | 1.1 | C. Institutional Investment Tax Logic | Definition / Classification | 1.1 Taxation Principles.md |  |
| CF4-1.1-010 | 1.1 | Calculation Trap | Definition / Classification | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-011 | 1.1 | Kapan TIDAK Boleh Digunakan | Definition / Classification | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-012 | 1.1 | Red Flags | Definition / Classification | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-013 | 1.1 | . Average tax rate | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-014 | 1.1 | . Dengan 2.1 Equity Instruments dan 2.2 Long-Term Debt Instruments | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 3.3 |
| CF4-1.1-015 | 1.1 | . Institutional investor — dividend exclusion | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-016 | 1.1 | . Pre-tax income yang diperlukan untuk membayar dividend setelah corporate tax | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-017 | 1.1 | . Taxable-equivalent yield | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-018 | 1.1 | A. Personal Tax Logic | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-019 | 1.1 | Accounting / Financial Logic Trap | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-1.1-020 | 1.1 | Apa yang salah jika konsep ini disalahpahami? | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 2.1, 3.1 |
| CF4-1.1-021 | 1.1 | Case A — Fundamental: Marginal vs Average Tax Rate | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-022 | 1.1 | Case B — Exam-Typical: Institutional Investor, Bond vs Stock | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-023 | 1.1 | Case D — Integrated Corporate Financing: Interest vs Dividend | Formula / Financial Relationship | 1.1 Taxation Principles.md |  |
| CF4-1.1-024 | 1.1 | Comparison Table | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-1.1-025 | 1.1 | Definition Trap | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-026 | 1.1 | Interpretation Ladder | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-027 | 1.1 | Interpretation Trap | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-028 | 1.1 | Must Remember | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-1.1-029 | 1.1 | Quick Decision Tree | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-030 | 1.1 | Trigger Keywords | Formula / Financial Relationship | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.1-031 | 1.1 | Case C — Challenging / Integrated: Tax-Exempt vs Taxable Bond | Security / Financing Concept | 1.1 Taxation Principles.md |  |
| CF4-1.1-032 | 1.1 | Average tax rate | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-033 | 1.1 | C corporation | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-034 | 1.1 | Capital gain/loss | Terminology | 1.1 Taxation Principles.md | Cross-topic repeat: 1.1, 5.1 |
| CF4-1.1-035 | 1.1 | Dividend exclusion | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-036 | 1.1 | Dividend income | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-037 | 1.1 | Interest income | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-038 | 1.1 | Marginal tax rate | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-039 | 1.1 | Ordinary income | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-040 | 1.1 | Progressive tax | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-041 | 1.1 | S corporation | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-042 | 1.1 | Tax deductibility | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-043 | 1.1 | Tax-exempt interest | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.1-044 | 1.1 | Taxable income | Terminology | 1.1 Taxation Principles.md |  |
| CF4-1.2-001 | 1.2 | Accounting / Financial Logic Trap | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-1.2-002 | 1.2 | Apa yang dapat salah jika konsep ini disalahpahami? | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.2, 5.1 |
| CF4-1.2-003 | 1.2 | Case A — Fundamental | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.2-004 | 1.2 | Comparison Table | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-1.2-005 | 1.2 | Definition Trap | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-006 | 1.2 | Dengan 1.4 Company Account Structure | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6 |
| CF4-1.2-007 | 1.2 | E. Audit | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-008 | 1.2 | Financial Reporting vs Financial Statement Analysis | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-009 | 1.2 | Interpretation Trap | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-010 | 1.2 | Kapan TIDAK Boleh Digunakan | Accounting / Reporting Concept | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-011 | 1.2 | . Memenuhi kebutuhan informasi external users | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-012 | 1.2 | . Memenuhi legal dan regulatory requirements | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-013 | 1.2 | . Mengurangi information asymmetry | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-014 | 1.2 | . Meningkatkan accountability | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-015 | 1.2 | B. Mengapa Perusahaan Menerbitkan Accounts dan Annual Reports? | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-016 | 1.2 | Calculation Trap | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-017 | 1.2 | Case B — Exam-Typical | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.2-018 | 1.2 | Case C — Challenging / Integrated | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.2-019 | 1.2 | D. Annual Report vs Regulatory Filing | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-020 | 1.2 | Dengan 1.3 Accounting Concepts and Sustainability | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.2, 1.6 |
| CF4-1.2-021 | 1.2 | F. Management Commentary / MD&A | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-022 | 1.2 | Hubungan Konsep | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-1.2-023 | 1.2 | Interpretation Ladder | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-024 | 1.2 | Kapan Digunakan | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-025 | 1.2 | Mengapa Standardisasi Diperlukan? | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-026 | 1.2 | Must Remember | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-1.2-027 | 1.2 | Quick Decision Tree | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-028 | 1.2 | Red Flags | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-029 | 1.2 | Siapa Membuat dan Menegakkan Rules? | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-030 | 1.2 | Siapa yang membutuhkan laporan? | Definition / Classification | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-031 | 1.2 | Trigger Keywords | Definition / Classification | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.2-032 | 1.2 | . Meningkatkan comparability dan transparency | Economic / Corporate Finance Concept | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-033 | 1.2 | A. Dari Business Activity ke External Decision | Economic / Corporate Finance Concept | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-034 | 1.2 | . Mendukung capital allocation | Formula / Financial Relationship | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-035 | 1.2 | C. Isi Umum Annual Report | Formula / Financial Relationship | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-036 | 1.2 | Dengan 1.5 Financial Statements Construction | Formula / Financial Relationship | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6, 3.3 |
| CF4-1.2-037 | 1.2 | Dengan 1.6 Financial Ratios and Interpretation | Formula / Financial Relationship | 1.2 Financial Reporting Requirements.md | Cross-topic repeat: 1.2, 1.3 |
| CF4-1.2-038 | 1.2 | Accounting standards | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-039 | 1.2 | Annual report | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-040 | 1.2 | Audit report | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-041 | 1.2 | Financial reporting | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-042 | 1.2 | Financial statements | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-043 | 1.2 | Management commentary / MD&A | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-044 | 1.2 | Notes / footnotes | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.2-045 | 1.2 | Regulatory filing | Terminology | 1.2 Financial Reporting Requirements.md |  |
| CF4-1.3-001 | 1.3 | Accounting / Financial Logic Trap | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-1.3-002 | 1.3 | Accrual Basis | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-003 | 1.3 | Case A — Fundamental: Monetary Unit Assumption | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-004 | 1.3 | Case B — Exam-Typical: Relevance vs Faithful Representation | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-005 | 1.3 | Case C — Challenging / Integrated: Sustainability vs Current Profit | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-006 | 1.3 | Dengan 1.4 Company Account Structure | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6 |
| CF4-1.3-007 | 1.3 | Elements of Financial Statements | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-008 | 1.3 | Fair Value Principle | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-009 | 1.3 | Historical Cost Principle | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-010 | 1.3 | Kapan TIDAK Boleh Digunakan | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-011 | 1.3 | Materiality, Aggregation, No Offsetting, Consistency | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-012 | 1.3 | Measurement Principles | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-013 | 1.3 | Mengapa sustainability masuk ke topik accounting? | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-014 | 1.3 | No Offsetting | Accounting / Reporting Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-015 | 1.3 | A. Environmental Dimension | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-016 | 1.3 | A. Relevance | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-017 | 1.3 | Apa yang bisa salah jika konsep ini disalahpahami? | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-018 | 1.3 | B. Social Dimension | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-019 | 1.3 | Basic Accounting Assumptions | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-020 | 1.3 | C. Sustainability Context | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-021 | 1.3 | Calculation Trap | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-022 | 1.3 | Comparison Table | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-1.3-023 | 1.3 | Consistency | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-024 | 1.3 | Convergence | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-025 | 1.3 | Definition Trap | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-026 | 1.3 | Dengan 1.2 Financial Reporting Requirements | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-027 | 1.3 | Enhancing Qualitative Characteristics | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-028 | 1.3 | Fundamental Qualitative Characteristics | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-029 | 1.3 | Hubungan Konsep | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-1.3-030 | 1.3 | Interpretation Ladder | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-031 | 1.3 | Interpretation Trap | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-032 | 1.3 | Kapan Digunakan | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-033 | 1.3 | Materiality and Aggregation | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-034 | 1.3 | Mental Model Inti | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-035 | 1.3 | Monetary Unit Assumption | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-036 | 1.3 | Quick Decision Tree | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-037 | 1.3 | Red Flags | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-038 | 1.3 | Regulatory Authorities | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-039 | 1.3 | Standard-Setting Bodies | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-040 | 1.3 | Sumber Utama Accounting Regulation | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-041 | 1.3 | Trigger Keywords | Definition / Classification | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.3-042 | 1.3 | A. Dari Economic Event ke Financial Reporting | Economic / Corporate Finance Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-043 | 1.3 | B. Dari Accounting Judgment ke Standards | Economic / Corporate Finance Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-044 | 1.3 | B. Faithful Representation | Economic / Corporate Finance Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-045 | 1.3 | C. Economic Sustainability | Economic / Corporate Finance Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-046 | 1.3 | Must Remember | Economic / Corporate Finance Concept | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-1.3-047 | 1.3 | Sustainability: Environmental, Social, Economic Context | Economic / Corporate Finance Concept | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-048 | 1.3 | Dengan 1.5 Financial Statements Construction | Formula / Financial Relationship | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6, 3.3 |
| CF4-1.3-049 | 1.3 | Dengan 1.6 Financial Ratios and Interpretation | Formula / Financial Relationship | 1.3 Accounting Concepts and Sustainability.md | Cross-topic repeat: 1.2, 1.3 |
| CF4-1.3-050 | 1.3 | Economic Entity Assumption | Formula / Financial Relationship | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-051 | 1.3 | Going Concern | Formula / Financial Relationship | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-052 | 1.3 | Sustainability bukan lawan dari shareholder value | Formula / Financial Relationship | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-053 | 1.3 | Accrual basis | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-054 | 1.3 | Comparability | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-055 | 1.3 | Consistency | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-056 | 1.3 | Disclosure | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-057 | 1.3 | Economic entity assumption | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-058 | 1.3 | Economic event | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-059 | 1.3 | Fair value | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-060 | 1.3 | Faithful representation | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-061 | 1.3 | Going concern | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-062 | 1.3 | Historical cost | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-063 | 1.3 | Materiality | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-064 | 1.3 | Measurement | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-065 | 1.3 | Monetary unit assumption | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-066 | 1.3 | Presentation | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-067 | 1.3 | Recognition | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-068 | 1.3 | Relevance | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-069 | 1.3 | Sustainability | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-070 | 1.3 | Timeliness | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-071 | 1.3 | Understandability | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.3-072 | 1.3 | Verifiability | Terminology | 1.3 Accounting Concepts and Sustainability.md |  |
| CF4-1.4-001 | 1.4 | Accounting / Financial Logic Trap | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-1.4-002 | 1.4 | Cash Flow Statement | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-003 | 1.4 | Comparison Table | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-1.4-004 | 1.4 | Core mechanics consolidation | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-005 | 1.4 | Dari Transaction ke Financial Statements | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-006 | 1.4 | Definition Trap | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-007 | 1.4 | Group | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-008 | 1.4 | Hubungan dengan 1.1 Taxation Principles | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-009 | 1.4 | Hubungan inti | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-010 | 1.4 | Income Statement / Statement of Comprehensive Income | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-011 | 1.4 | Individual company | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-012 | 1.4 | Individual vs Consolidated Accounts | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-013 | 1.4 | Interpretation Ladder | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-014 | 1.4 | Kapan Digunakan | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-015 | 1.4 | Kapan TIDAK Boleh Digunakan | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-016 | 1.4 | Mengapa satu statement tidak cukup? | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-017 | 1.4 | Must Remember | Accounting / Reporting Concept | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-1.4-018 | 1.4 | Notes and Supplementary Information | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-019 | 1.4 | Statement Linkage | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-020 | 1.4 | Statement of Changes in Equity | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-021 | 1.4 | Statement of Financial Position / Balance Sheet | Accounting / Reporting Concept | 1.4 Company Account Structure.md |  |
| CF4-1.4-022 | 1.4 | Apa yang dijawab balance sheet? | Definition / Classification | 1.4 Company Account Structure.md |  |
| CF4-1.4-023 | 1.4 | Calculation Trap | Definition / Classification | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-024 | 1.4 | Case A — Fundamental | Definition / Classification | 1.4 Company Account Structure.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.4-025 | 1.4 | Case C — Challenging / Integrated | Definition / Classification | 1.4 Company Account Structure.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.4-026 | 1.4 | Group Accounts Logic | Definition / Classification | 1.4 Company Account Structure.md |  |
| CF4-1.4-027 | 1.4 | Hubungan dengan 1.2 Financial Reporting Requirements | Definition / Classification | 1.4 Company Account Structure.md |  |
| CF4-1.4-028 | 1.4 | Individual Company vs Group Accounts | Definition / Classification | 1.4 Company Account Structure.md |  |
| CF4-1.4-029 | 1.4 | Non-Controlling Interest (Minority Interest) | Definition / Classification | 1.4 Company Account Structure.md |  |
| CF4-1.4-030 | 1.4 | Quick Decision Tree | Definition / Classification | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-031 | 1.4 | Red Flags | Definition / Classification | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-032 | 1.4 | Trigger Keywords | Definition / Classification | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-033 | 1.4 | Case B — Exam-Typical | Formula / Financial Relationship | 1.4 Company Account Structure.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.4-034 | 1.4 | Hubungan dengan 1.5 Financial Statements Construction | Formula / Financial Relationship | 1.4 Company Account Structure.md |  |
| CF4-1.4-035 | 1.4 | Hubungan dengan 1.6 Financial Ratios and Interpretation | Formula / Financial Relationship | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-036 | 1.4 | Interpretation Trap | Formula / Financial Relationship | 1.4 Company Account Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.4-037 | 1.4 | Assets | Terminology | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-038 | 1.4 | Comprehensive income | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-039 | 1.4 | Consolidation | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-040 | 1.4 | Equity | Terminology | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5, 2.1, 3.1, 3.2 |
| CF4-1.4-041 | 1.4 | Expense | Terminology | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-042 | 1.4 | Liabilities | Terminology | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-043 | 1.4 | Net income | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-044 | 1.4 | Non-controlling interest (NCI) | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-045 | 1.4 | Notes | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-046 | 1.4 | Operating cash flow | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-047 | 1.4 | Parent | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-048 | 1.4 | Reporting entity | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.4-049 | 1.4 | Retained earnings | Terminology | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-050 | 1.4 | Revenue | Terminology | 1.4 Company Account Structure.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.4-051 | 1.4 | Subsidiary | Terminology | 1.4 Company Account Structure.md |  |
| CF4-1.5-001 | 1.5 | Accounting / Financial Logic Trap | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-1.5-002 | 1.5 | Apa yang TIDAK masuk income statement? | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-003 | 1.5 | Assets | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-004 | 1.5 | Comparison Table | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-1.5-005 | 1.5 | Construction Sequence yang Aman | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-006 | 1.5 | D. Revenue earned for cash | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-007 | 1.5 | Definition Trap | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-008 | 1.5 | E. Revenue earned on credit | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-009 | 1.5 | Equity | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5, 2.1, 3.1, 3.2 |
| CF4-1.5-010 | 1.5 | Expanded Accounting Equation | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-011 | 1.5 | F. Pay operating expense | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-012 | 1.5 | Framework Utama: Transaction → Statement | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-013 | 1.5 | G. Expense accrued but not yet paid | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-014 | 1.5 | Hubungan dengan 1.1 Taxation Principles | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-015 | 1.5 | Hubungan dengan 1.3 Accounting Concepts and Sustainability | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-016 | 1.5 | Hubungan dengan 1.4 Company Account Structure | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-017 | 1.5 | I. Prepaid expense | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-018 | 1.5 | Interpretation Ladder | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-019 | 1.5 | J. Depreciation | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-020 | 1.5 | Liabilities | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-021 | 1.5 | Penyusunan Income Statement | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-022 | 1.5 | Penyusunan Statement of Financial Position | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-023 | 1.5 | Trigger Keywords | Accounting / Reporting Concept | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-024 | 1.5 | A. Owner invests cash | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-025 | 1.5 | B. Purchase equipment for cash | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-026 | 1.5 | Basic Transaction Effects | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-027 | 1.5 | C. Purchase inventory on credit | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-028 | 1.5 | Calculation Trap | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-029 | 1.5 | Case A — Fundamental | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.5-030 | 1.5 | Case C — Challenging / Integrated | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.5-031 | 1.5 | Dari Net Income ke Retained Earnings | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-032 | 1.5 | Debit dan Credit sebagai Verification Tool | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-033 | 1.5 | H. Cash received in advance | Definition / Classification | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-034 | 1.5 | Interpretation Trap | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-035 | 1.5 | Kapan Digunakan | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-036 | 1.5 | Kapan TIDAK Boleh Digunakan | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-037 | 1.5 | Must Remember | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-1.5-038 | 1.5 | Quick Decision Tree | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-039 | 1.5 | Red Flags | Definition / Classification | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.5-040 | 1.5 | Case B — Exam-Typical | Formula / Financial Relationship | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-1.5-041 | 1.5 | Hubungan dengan 1.6 Financial Ratios and Interpretation | Formula / Financial Relationship | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-042 | 1.5 | Accounts payable | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-043 | 1.5 | Accounts receivable | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-044 | 1.5 | Accrued expense | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-045 | 1.5 | Asset | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-046 | 1.5 | Depreciation | Terminology | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.5, 3.3 |
| CF4-1.5-047 | 1.5 | Dividend/distribution | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-048 | 1.5 | Equity | Terminology | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5, 2.1, 3.1, 3.2 |
| CF4-1.5-049 | 1.5 | Expense | Terminology | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-050 | 1.5 | Liability | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-051 | 1.5 | Prepaid expense | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.5-052 | 1.5 | Retained earnings | Terminology | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-053 | 1.5 | Revenue | Terminology | 1.5 Financial Statements Construction.md | Cross-topic repeat: 1.4, 1.5 |
| CF4-1.5-054 | 1.5 | Unearned revenue | Terminology | 1.5 Financial Statements Construction.md |  |
| CF4-1.6-001 | 1.6 | Accounts Receivable Turnover | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-002 | 1.6 | Average Balance — Rule yang Sangat Penting | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-003 | 1.6 | Calculation Trap — ROA | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-004 | 1.6 | Case D — Direction-of-Effect | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-005 | 1.6 | Debt-to-Equity — Robinson | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-006 | 1.6 | Fixed Assets Turnover — Brigham | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-007 | 1.6 | Flow ÷ Stock → Pikirkan Average | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-008 | 1.6 | Higher / Lower Interpretation | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-009 | 1.6 | Long-Term Debt-to-Equity — Robinson | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-010 | 1.6 | Total Asset Turnover / Asset Turnover | Accounting / Reporting Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-011 | 1.6 | Average Collection Period | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-012 | 1.6 | Basic Earning Power — Brigham | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-013 | 1.6 | Calculation Trap — EPS | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-014 | 1.6 | Calculation Trap — Inventory Turnover | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-015 | 1.6 | Calculation Trap — TIE | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-016 | 1.6 | Case A — Fundamental: Liquidity & Turnover | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-017 | 1.6 | Case C — Challenging / Integrated: Du Pont Diagnosis | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-018 | 1.6 | Days in Inventory | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-019 | 1.6 | Definition Trap | Definition / Classification | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-020 | 1.6 | Dengan 1.3 Accounting Concepts and Sustainability | Definition / Classification | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.2, 1.6 |
| CF4-1.6-021 | 1.6 | Dengan 1.4 Company Account Structure | Definition / Classification | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6 |
| CF4-1.6-022 | 1.6 | Du Pont System — Mengurai ROE | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-023 | 1.6 | Exam Trap | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-024 | 1.6 | Higher / Lower Interpretation | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-025 | 1.6 | Inventory turnover | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-026 | 1.6 | Mengapa berguna? | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-027 | 1.6 | Mental Model | Definition / Classification | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.6, 5.4 |
| CF4-1.6-028 | 1.6 | Profit Margin / Net Profit Margin | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-029 | 1.6 | Quick Decision Tree | Definition / Classification | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-030 | 1.6 | Red Flags | Definition / Classification | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-031 | 1.6 | Times Interest Earned — TIE | Definition / Classification | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-032 | 1.6 | Acid-Test / Quick Ratio | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-033 | 1.6 | Case B — Exam-Typical: Profitability, Leverage, Coverage | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-034 | 1.6 | Cash Ratio — Robinson | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-035 | 1.6 | Comparative Ratio Analysis / Benchmarking | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-036 | 1.6 | Current ratio | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-037 | 1.6 | Debt to Assets Ratio | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-038 | 1.6 | Dengan 1.5 Financial Statements Construction | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6, 3.3 |
| CF4-1.6-039 | 1.6 | Dengan Corporate Finance | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-040 | 1.6 | Direction-of-Effect Framework | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-041 | 1.6 | EBITDA Coverage — Brigham | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-042 | 1.6 | Financial Leverage Ratio — Robinson | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-043 | 1.6 | Financial Logic Trap | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-1.6-044 | 1.6 | Interpretation Ladder | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-045 | 1.6 | Interpretation Trap | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-046 | 1.6 | Kapan Digunakan | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-047 | 1.6 | Kapan TIDAK Boleh Digunakan Sendirian | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-048 | 1.6 | Market-to-Book dan Price/Cash Flow — Brigham | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-049 | 1.6 | Master Ratio Table | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-050 | 1.6 | Must Remember | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-1.6-051 | 1.6 | Payout Ratio | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-052 | 1.6 | Price-Earnings Ratio — P/E | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-053 | 1.6 | Quick ratio | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-054 | 1.6 | Ratio adalah alat kompresi informasi | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-055 | 1.6 | Ratio ≠ Answer; Ratio = Signal | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-056 | 1.6 | Return on Assets — ROA | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-057 | 1.6 | Return on Common Stockholders' Equity — ROE | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-058 | 1.6 | Trend Analysis | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-059 | 1.6 | Trigger Keywords | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-1.6-060 | 1.6 | Universal Ratio Framework | Formula / Financial Relationship | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-061 | 1.6 | Earnings per Share — EPS | Security / Financing Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-1.6-062 | 1.6 | Exam Trap | Security / Financing Concept | 1.6 Financial Ratios and Interpretation.md |  |
| CF4-2.1-001 | 2.1 | Comparison Table — Common vs Preferred | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-002 | 2.1 | Dengan 2.5 Capital Raising Methods | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 3.2 |
| CF4-2.1-003 | 2.1 | Dengan 3.2 Sources of Finance and Capital Structure | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 2.1, 3.3 |
| CF4-2.1-004 | 2.1 | Dengan 4.3 Agency Theory and Governance | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 3.2 |
| CF4-2.1-005 | 2.1 | Dengan 5.1 Investment Asset Characteristics | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 5.4 |
| CF4-2.1-006 | 2.1 | Dividends | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-007 | 2.1 | Financial meaning | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 3.1, 5.1 |
| CF4-2.1-008 | 2.1 | Issuing New Common Equity | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-009 | 2.1 | Kapan Digunakan | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-010 | 2.1 | Preferred Stock | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-011 | 2.1 | Primary vs Secondary Equity Transactions | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-012 | 2.1 | Relationship 1 — Equity sebagai residual claim | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-013 | 2.1 | Residual Claim | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 5.1 |
| CF4-2.1-014 | 2.1 | Securities Framework | Accounting / Reporting Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-015 | 2.1 | Apa yang salah jika konsep ini disalahpahami? | Definition / Classification | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 2.1, 3.1 |
| CF4-2.1-016 | 2.1 | Case A — Fundamental | Definition / Classification | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-2.1-017 | 2.1 | Case B — Exam-Typical | Definition / Classification | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-2.1-018 | 2.1 | Convertible Preferred | Definition / Classification | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-019 | 2.1 | Financial Logic Trap | Definition / Classification | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-2.1-020 | 2.1 | Hubungan Konsep | Definition / Classification | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-2.1-021 | 2.1 | Red Flags | Definition / Classification | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-022 | 2.1 | Dividend vs Repurchase | Economic / Corporate Finance Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-023 | 2.1 | Relationship 2 — Market capitalization | Economic / Corporate Finance Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-024 | 2.1 | Calculation Trap | Formula / Financial Relationship | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-025 | 2.1 | Case C — Challenging / Integrated | Formula / Financial Relationship | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-2.1-026 | 2.1 | Common Stock / Ordinary Shares | Formula / Financial Relationship | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-027 | 2.1 | Interpretation Trap | Formula / Financial Relationship | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-028 | 2.1 | Kapan TIDAK Boleh Digunakan | Formula / Financial Relationship | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-029 | 2.1 | Salah — menghitung post-issuance price dengan market cap lama saja | Formula / Financial Relationship | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-030 | 2.1 | Salah — repurchase dianggap otomatis menaikkan price | Formula / Financial Relationship | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-031 | 2.1 | Stock Dividend, Stock Split, Reverse Split | Formula / Financial Relationship | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-032 | 2.1 | Voting and Control Rights | Formula / Financial Relationship | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-033 | 2.1 | Case D — Preferred in a Private Company | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-034 | 2.1 | Common Stock | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 5.1 |
| CF4-2.1-035 | 2.1 | Comparison Table — Dividend vs Repurchase | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-036 | 2.1 | Convertible Preferred Stock | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-037 | 2.1 | Definition Trap | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-038 | 2.1 | Interpretation Ladder | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-039 | 2.1 | Must Remember | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-2.1-040 | 2.1 | Preferred Stock | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-041 | 2.1 | Quick Decision Tree | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-042 | 2.1 | Relationship 3 — Ownership percentage | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-043 | 2.1 | Relationship 4 — Payout mechanics | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-044 | 2.1 | Share Repurchase | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 3.2 |
| CF4-2.1-045 | 2.1 | Trigger Keywords | Security / Financing Concept | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.1-046 | 2.1 | Why Preferred Stock Exists in Private Financing | Security / Financing Concept | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-047 | 2.1 | Common stock | Terminology | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 5.1 |
| CF4-2.1-048 | 2.1 | Convertible preferred | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-049 | 2.1 | Dilution | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-050 | 2.1 | Dividend | Terminology | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 3.2, 5.1 |
| CF4-2.1-051 | 2.1 | Equity | Terminology | 2.1 Equity Instruments(1).md | Cross-topic repeat: 1.4, 1.5, 2.1, 3.1, 3.2 |
| CF4-2.1-052 | 2.1 | Market capitalization | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-053 | 2.1 | Ordinary shares | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-054 | 2.1 | Preferred stock | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-055 | 2.1 | Primary market | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-056 | 2.1 | Residual claim | Terminology | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 5.1 |
| CF4-2.1-057 | 2.1 | Reverse split | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-058 | 2.1 | Secondary market | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-059 | 2.1 | Share repurchase | Terminology | 2.1 Equity Instruments(1).md | Cross-topic repeat: 2.1, 3.2 |
| CF4-2.1-060 | 2.1 | Shareholder | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.1-061 | 2.1 | Stock split | Terminology | 2.1 Equity Instruments(1).md |  |
| CF4-2.2-001 | 2.2 | Asset-Backed Bonds / Securities | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-002 | 2.2 | Case E — Maturity Choice | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-003 | 2.2 | Debt Maturity Structure | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-004 | 2.2 | Debt vs Equity — Foundation | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-005 | 2.2 | Hubungan Konsep | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-2.2-006 | 2.2 | Maturity Choice as Risk Management | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-007 | 2.2 | Mortgage Bonds | Accounting / Reporting Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-008 | 2.2 | Calculation Trap | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-009 | 2.2 | Case A — Fundamental: Seniority | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-010 | 2.2 | Definition Trap | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-011 | 2.2 | Issuer vs Investor Perspective | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-012 | 2.2 | Kapan TIDAK Boleh Digunakan | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-013 | 2.2 | Project Financing | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-014 | 2.2 | Red Flags | Definition / Classification | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-015 | 2.2 | Bond Refunding | Formula / Financial Relationship | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-016 | 2.2 | Case C — Convertible Bond | Formula / Financial Relationship | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-017 | 2.2 | Convertible Bonds | Formula / Financial Relationship | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-018 | 2.2 | Interpretation Trap | Formula / Financial Relationship | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-019 | 2.2 | Why Yield Differs | Formula / Financial Relationship | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-020 | 2.2 | Yield to Call | Formula / Financial Relationship | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-021 | 2.2 | Big mental model | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-022 | 2.2 | Bond Covenants | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-023 | 2.2 | Call Provision | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-024 | 2.2 | Callable Convertible Bonds | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-025 | 2.2 | Case B — Callable vs Non-Callable | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-026 | 2.2 | Case D — Sinking Fund | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-027 | 2.2 | Case F — Bond Refunding | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-028 | 2.2 | Comparison Table — Major Debt Types | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-029 | 2.2 | Covenants as Agency Protection | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-030 | 2.2 | Dari sisi investor | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-031 | 2.2 | Dari sisi issuer | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-032 | 2.2 | Financial Logic Trap | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-2.2-033 | 2.2 | Indenture | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-034 | 2.2 | International Bond Categories | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-035 | 2.2 | Interpretation Ladder | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-036 | 2.2 | Kapan Digunakan | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-037 | 2.2 | Long-term debt | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-038 | 2.2 | Notes dan Debentures | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-039 | 2.2 | Public Debt vs Private Debt | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-040 | 2.2 | Quick Decision Tree | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-041 | 2.2 | Secured vs Unsecured Debt | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-042 | 2.2 | Senior vs Subordinated Debt | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-043 | 2.2 | Shorter debt | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-044 | 2.2 | Sinking Fund | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-045 | 2.2 | Term Loans | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-046 | 2.2 | Trigger Keywords | Security / Financing Concept | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.2-047 | 2.2 | Asset-backed security | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-048 | 2.2 | Balloon payment | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-049 | 2.2 | Bond refunding | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-050 | 2.2 | Callable bond | Terminology | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 2.2, 2.4 |
| CF4-2.2-051 | 2.2 | Conversion price | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-052 | 2.2 | Conversion ratio | Terminology | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 2.2, 2.4 |
| CF4-2.2-053 | 2.2 | Convertible bond | Terminology | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 2.2, 2.4 |
| CF4-2.2-054 | 2.2 | Corporate bond | Terminology | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 2.2, 5.1 |
| CF4-2.2-055 | 2.2 | Covenant | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-056 | 2.2 | Debenture | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-057 | 2.2 | Indenture | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-058 | 2.2 | Maturity matching | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-059 | 2.2 | Mortgage bond | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-060 | 2.2 | Note | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-061 | 2.2 | Private placement | Terminology | 2.2 Long-Term Debt Instruments(1).md | Cross-topic repeat: 2.2, 2.5 |
| CF4-2.2-062 | 2.2 | Project financing | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-063 | 2.2 | Secured debt | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-064 | 2.2 | Senior debt | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-065 | 2.2 | Sinking fund | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-066 | 2.2 | Subordinated debt | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-067 | 2.2 | Term loan | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-068 | 2.2 | Unsecured debt | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.2-069 | 2.2 | Yield to call | Terminology | 2.2 Long-Term Debt Instruments(1).md |  |
| CF4-2.3-001 | 2.3 | Case F — Pledge vs Factor | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-002 | 2.3 | Case G — Financing Policy | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-003 | 2.3 | Conservative Policy | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-004 | 2.3 | Factoring | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-005 | 2.3 | Lease Logic | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-006 | 2.3 | Pledging Accounts Receivable | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-007 | 2.3 | Sale-and-Leaseback | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-008 | 2.3 | Secured Short-Term Financing | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-009 | 2.3 | Stretching Accounts Payable | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-010 | 2.3 | Working Capital dan Financing Need | Accounting / Reporting Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-011 | 2.3 | Bank Facility Logic | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-012 | 2.3 | Calculation Trap | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-013 | 2.3 | Case A — Fundamental: Trade Credit | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-014 | 2.3 | Case D — Commercial Paper | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-015 | 2.3 | Case E — Committed vs Uncommitted | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-016 | 2.3 | Commercial Paper Logic | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-017 | 2.3 | Commitment Fee | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-018 | 2.3 | Committed Line | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-019 | 2.3 | Dealer vs Direct Paper | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-020 | 2.3 | Definition Trap | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-021 | 2.3 | EAR Commercial Paper | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-022 | 2.3 | Example: 2/10, Net 30 | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-023 | 2.3 | Financial Logic Trap | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-2.3-024 | 2.3 | Financing Flow | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-025 | 2.3 | Floating / General / Blanket Lien | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-026 | 2.3 | Forecasting Short-Term Financing Needs | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-027 | 2.3 | Inventory Financing | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-028 | 2.3 | Kapan Digunakan | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-029 | 2.3 | Line of Credit | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-030 | 2.3 | Matching Principle | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-031 | 2.3 | Quick Decision Tree | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-032 | 2.3 | Red Flags | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-033 | 2.3 | Revolving Line dan Evergreen Credit | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-034 | 2.3 | Secured Financing Logic | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-035 | 2.3 | Temporary vs Permanent Working Capital | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-036 | 2.3 | Terms: 2/10, Net 30 | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-037 | 2.3 | Terms: Net 30 | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-038 | 2.3 | Trade Credit | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-039 | 2.3 | Trade Credit Logic | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-040 | 2.3 | Trigger Keywords | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-041 | 2.3 | Trust Receipts / Floor Planning | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-042 | 2.3 | Uncommitted Line | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-043 | 2.3 | Warehouse Arrangement | Definition / Classification | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-044 | 2.3 | Interpretation Trap | Economic / Corporate Finance Concept | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-045 | 2.3 | With Recourse | Economic / Corporate Finance Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-046 | 2.3 | Without Recourse | Economic / Corporate Finance Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-047 | 2.3 | Commercial Paper | Formula / Financial Relationship | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-048 | 2.3 | Cost of Trade Credit | Formula / Financial Relationship | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-049 | 2.3 | Interpretation Ladder | Formula / Financial Relationship | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-050 | 2.3 | Aggressive Policy | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-051 | 2.3 | Aggressive vs Conservative Financing Policy | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-052 | 2.3 | Bridge Loan | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-053 | 2.3 | Case B — Origination Fee | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-054 | 2.3 | Case C — Compensating Balance | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-055 | 2.3 | Case H — Lease | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-056 | 2.3 | Case I — Sale-and-Leaseback | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-057 | 2.3 | Comparison Table | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-2.3-058 | 2.3 | Compensating Balance | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-059 | 2.3 | Discount Loan | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-060 | 2.3 | Financial / Capital Lease | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-061 | 2.3 | Kapan TIDAK Boleh Digunakan | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.3-062 | 2.3 | Loan Origination Fee | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-063 | 2.3 | Operating Lease | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-064 | 2.3 | Short-Term Bank Loans | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-065 | 2.3 | Single End-of-Period Payment Loan | Security / Financing Concept | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-066 | 2.3 | AR pledge | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-067 | 2.3 | Bridge loan | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-068 | 2.3 | Commercial paper | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-069 | 2.3 | Commitment fee | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-070 | 2.3 | Committed line | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-071 | 2.3 | Compensating balance | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-072 | 2.3 | Discount loan | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-073 | 2.3 | Evergreen credit | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-074 | 2.3 | Factoring | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-075 | 2.3 | Financial lease | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-076 | 2.3 | Floating lien | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-077 | 2.3 | Funding risk | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-078 | 2.3 | Line of credit | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-079 | 2.3 | Matching principle | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-080 | 2.3 | Operating lease | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-081 | 2.3 | Origination fee | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-082 | 2.3 | Permanent working capital | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-083 | 2.3 | Promissory note | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-084 | 2.3 | Revolving line | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-085 | 2.3 | Sale-and-leaseback | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-086 | 2.3 | Stretching payables | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-087 | 2.3 | Temporary working capital | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-088 | 2.3 | Trade credit | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-089 | 2.3 | Trust receipt | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-090 | 2.3 | Uncommitted line | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.3-091 | 2.3 | Warehouse finance | Terminology | 2.3 Short and Medium-Term Finance(1).md |  |
| CF4-2.4-001 | 2.4 | Convertible | Accounting / Reporting Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-002 | 2.4 | Financial Option Framework | Accounting / Reporting Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-003 | 2.4 | Financial vs Real Options | Accounting / Reporting Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-004 | 2.4 | Calculation Trap | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-005 | 2.4 | Call | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-006 | 2.4 | Callable | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-007 | 2.4 | Comparison Table — Call vs Put | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-008 | 2.4 | Corporate-finance connection | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-009 | 2.4 | Decision Trees | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-010 | 2.4 | Definition Trap | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-011 | 2.4 | Kapan Digunakan | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-012 | 2.4 | Long Call | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-013 | 2.4 | Long Put | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-014 | 2.4 | Moneyness | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.4, 5.2 |
| CF4-2.4-015 | 2.4 | Put | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-016 | 2.4 | Red Flags | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-017 | 2.4 | Short Call | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-018 | 2.4 | Short Put | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-019 | 2.4 | Staged Investment | Definition / Classification | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-020 | 2.4 | American Option | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-021 | 2.4 | American Put | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-022 | 2.4 | Call Logic | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-023 | 2.4 | Call Option | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-024 | 2.4 | Call — Directional Effects | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-025 | 2.4 | Case A — Fundamental: Long Call | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-026 | 2.4 | Case F — Real Option to Delay | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-027 | 2.4 | Case G — Growth Option | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-028 | 2.4 | Case J — Convertible Bond | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-029 | 2.4 | Convertible Bond = Investor Conversion Option | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-030 | 2.4 | European Option | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-031 | 2.4 | Interpretation Trap | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-032 | 2.4 | Intrinsic Value dan Time Value | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-033 | 2.4 | Logic Trap | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.4, 2.5 |
| CF4-2.4-034 | 2.4 | Mengapa derivative bisa valuable? | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-035 | 2.4 | Option Strategies dalam Source | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-036 | 2.4 | Protective Put | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-037 | 2.4 | Put Logic | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-038 | 2.4 | Put Option | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-039 | 2.4 | Put — Directional Effects | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-040 | 2.4 | Put-Call Parity | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-041 | 2.4 | Strike Price dan Expiration | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-042 | 2.4 | Trigger Keywords | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-043 | 2.4 | What Determines Option Value? | Formula / Financial Relationship | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-044 | 2.4 | Abandonment Option | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-045 | 2.4 | American Call on Non-Dividend-Paying Stock | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-046 | 2.4 | Callable Bond = Issuer Option | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-047 | 2.4 | Callable Convertible Bond | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-048 | 2.4 | Case B — Long Put | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-049 | 2.4 | Case C — Moneyness vs Profit | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-050 | 2.4 | Case D — Protective Put | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-051 | 2.4 | Case E — Option Value Drivers | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-052 | 2.4 | Case H — Abandonment Option | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-053 | 2.4 | Case I — Callable Bond | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-054 | 2.4 | Comparison Table — Corporate Options | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-055 | 2.4 | Corporate Embedded-Option Framework | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-056 | 2.4 | Dividend-Paying Stock | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-057 | 2.4 | Early Exercise | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-058 | 2.4 | Growth Option | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-059 | 2.4 | Interpretation Ladder | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-060 | 2.4 | Kapan TIDAK Boleh Digunakan | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-061 | 2.4 | Long vs Short Position | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-062 | 2.4 | Option Premium | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-063 | 2.4 | Option to Delay | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-064 | 2.4 | Quick Decision Tree | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.4-065 | 2.4 | Real-Option Framework | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-066 | 2.4 | Why volatility raises option value | Security / Financing Concept | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-067 | 2.4 | Abandonment option | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-068 | 2.4 | American option | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-069 | 2.4 | ATM | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-070 | 2.4 | Call | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-071 | 2.4 | Callable bond | Terminology | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.2, 2.4 |
| CF4-2.4-072 | 2.4 | Conversion ratio | Terminology | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.2, 2.4 |
| CF4-2.4-073 | 2.4 | Convertible bond | Terminology | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.2, 2.4 |
| CF4-2.4-074 | 2.4 | Decision node | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-075 | 2.4 | Derivative | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-076 | 2.4 | European option | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-077 | 2.4 | Expiration | Terminology | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.4, 5.2 |
| CF4-2.4-078 | 2.4 | Growth option | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-079 | 2.4 | Information node | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-080 | 2.4 | ITM | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-081 | 2.4 | Long option | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-082 | 2.4 | Option to delay | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-083 | 2.4 | OTM | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-084 | 2.4 | Premium | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-085 | 2.4 | Protective put | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-086 | 2.4 | Put | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-087 | 2.4 | Put-call parity | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-088 | 2.4 | Real option | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-089 | 2.4 | Short option | Terminology | 2.4 Derivative Securities in Corporate Finance.md | Cross-topic repeat: 2.4, 5.2 |
| CF4-2.4-090 | 2.4 | Strike price | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.4-091 | 2.4 | Volatility | Terminology | 2.4 Derivative Securities in Corporate Finance.md |  |
| CF4-2.5-001 | 2.5 | Equity Carve-Out | Accounting / Reporting Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-002 | 2.5 | Interpretation Ladder | Accounting / Reporting Concept | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-003 | 2.5 | Kapan TIDAK Boleh Digunakan | Accounting / Reporting Concept | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-004 | 2.5 | Private Financing | Accounting / Reporting Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-005 | 2.5 | Seasoned Equity Offering | Accounting / Reporting Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-006 | 2.5 | Securitization | Accounting / Reporting Concept | 2.5 Capital Raising Methods.md | Cross-topic repeat: 2.5, 5.1 |
| CF4-2.5-007 | 2.5 | Angel Investors | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-008 | 2.5 | Best Efforts | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-009 | 2.5 | Best Efforts vs Firm Commitment | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-010 | 2.5 | Calculation Trap | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-011 | 2.5 | Capital Raising Framework | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-012 | 2.5 | Case F — Underwriting Method | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-013 | 2.5 | Case G — Private Placement | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-014 | 2.5 | Comparison Table | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-2.5-015 | 2.5 | Cost Framework | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-016 | 2.5 | Exit Strategies | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-017 | 2.5 | Firm Commitment | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-018 | 2.5 | Investment Bank / Underwriter | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-019 | 2.5 | IPO Cash Flow | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-020 | 2.5 | IPO Process | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-021 | 2.5 | Kapan Digunakan | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-022 | 2.5 | Logic Trap | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 2.4, 2.5 |
| CF4-2.5-023 | 2.5 | Quick Decision Tree | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-024 | 2.5 | Red Flags | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-025 | 2.5 | Trigger Keywords | Definition / Classification | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-026 | 2.5 | Venture Capital | Definition / Classification | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-027 | 2.5 | Case A — Pre/Post-Money Valuation | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-028 | 2.5 | Case D — IPO Underpricing | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-029 | 2.5 | Competitive Bid vs Negotiated Deal | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-030 | 2.5 | Debt Capital Raising Context | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-031 | 2.5 | Financing Rounds | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-032 | 2.5 | Interpretation Trap | Formula / Financial Relationship | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-033 | 2.5 | IPO Underpricing | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-034 | 2.5 | SEO Announcement Effect | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-035 | 2.5 | Shelf Registration | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-036 | 2.5 | Strategic Investor | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-037 | 2.5 | Winner's Curse | Formula / Financial Relationship | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-038 | 2.5 | Case B — Primary vs Secondary | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-039 | 2.5 | Case C — Underwriting Spread | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-040 | 2.5 | Case E — Rights Offering | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-041 | 2.5 | Case H — Securitization | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-042 | 2.5 | Definition Trap | Security / Financing Concept | 2.5 Capital Raising Methods.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-2.5-043 | 2.5 | Greenshoe and Lockup | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-044 | 2.5 | Initial Public Offering | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-045 | 2.5 | Net Proceeds | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-046 | 2.5 | Primary Shares | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-047 | 2.5 | Primary vs Secondary Shares | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-048 | 2.5 | Private Placement | Security / Financing Concept | 2.5 Capital Raising Methods.md | Cross-topic repeat: 2.2, 2.5 |
| CF4-2.5-049 | 2.5 | Rights Offering | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-050 | 2.5 | Secondary Shares | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-051 | 2.5 | Underwriting Spread | Security / Financing Concept | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-052 | 2.5 | Angel investor | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-053 | 2.5 | Best efforts | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-054 | 2.5 | Book-building | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-055 | 2.5 | Equity carve-out | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-056 | 2.5 | Firm commitment | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-057 | 2.5 | Greenshoe | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-058 | 2.5 | IPO | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-059 | 2.5 | Lockup | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-060 | 2.5 | Post-money | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-061 | 2.5 | Pre-money | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-062 | 2.5 | Primary shares | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-063 | 2.5 | Private placement | Terminology | 2.5 Capital Raising Methods.md | Cross-topic repeat: 2.2, 2.5 |
| CF4-2.5-064 | 2.5 | Rights offer | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-065 | 2.5 | Road show | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-066 | 2.5 | Secondary shares | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-067 | 2.5 | Securitization | Terminology | 2.5 Capital Raising Methods.md | Cross-topic repeat: 2.5, 5.1 |
| CF4-2.5-068 | 2.5 | SEO | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-069 | 2.5 | Shelf registration | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-070 | 2.5 | Syndicate | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-071 | 2.5 | Underpricing | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-072 | 2.5 | Underwriter | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-073 | 2.5 | Underwriting spread | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-074 | 2.5 | Venture capital | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-2.5-075 | 2.5 | Winner's curse | Terminology | 2.5 Capital Raising Methods.md |  |
| CF4-3.1-001 | 3.1 | Case A — Fundamental | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-3.1-002 | 3.1 | Case B — Exam-Typical | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-3.1-003 | 3.1 | Comparison Table | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-3.1-004 | 3.1 | Definition Trap | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-005 | 3.1 | Financial Logic Trap | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-3.1-006 | 3.1 | Financial meaning | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 2.1, 3.1, 5.1 |
| CF4-3.1-007 | 3.1 | Langkah 1 — Cari liability clue | Accounting / Reporting Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-008 | 3.1 | Langkah 2 — Cari control clue | Accounting / Reporting Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-009 | 3.1 | Limited Liability Company (LLC) | Accounting / Reporting Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-010 | 3.1 | Limited partners | Accounting / Reporting Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-011 | 3.1 | Major advantages | Accounting / Reporting Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-012 | 3.1 | Must Remember | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-3.1-013 | 3.1 | Quick Decision Tree | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-014 | 3.1 | Trade-off | Accounting / Reporting Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-015 | 3.1 | Trigger Keywords | Accounting / Reporting Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-016 | 3.1 | Board of directors | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-017 | 3.1 | CFO | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-018 | 3.1 | Corporate Finance Reasoning Framework | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-019 | 3.1 | Interpretation Ladder | Definition / Classification | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-020 | 3.1 | Kapan cocok? | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-021 | 3.1 | Kapan Digunakan | Definition / Classification | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-022 | 3.1 | Kapan mulai menjadi kurang cocok? | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-023 | 3.1 | Kapan TIDAK Boleh Digunakan | Definition / Classification | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-024 | 3.1 | Langkah 3 — Cari ownership clue | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-025 | 3.1 | Limited Partnership | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-026 | 3.1 | Partnership | Definition / Classification | 3.1 Business Entity Structures.md |  |
| CF4-3.1-027 | 3.1 | Red Flags | Definition / Classification | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-028 | 3.1 | Apa yang salah jika konsep ini disalahpahami? | Economic / Corporate Finance Concept | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 2.1, 3.1 |
| CF4-3.1-029 | 3.1 | Economic logic | Economic / Corporate Finance Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-030 | 3.1 | Hubungan dengan 3.2 Sources of Finance and Capital Structure | Economic / Corporate Finance Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-031 | 3.1 | Hubungan dengan 4.3 Agency Theory and Governance | Economic / Corporate Finance Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-032 | 3.1 | Agency Problem | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-033 | 3.1 | Calculation Trap | Formula / Financial Relationship | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-034 | 3.1 | Case C — Challenging / Integrated | Formula / Financial Relationship | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-3.1-035 | 3.1 | CEO | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-036 | 3.1 | Corporation | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-037 | 3.1 | Financial meaning | Formula / Financial Relationship | 3.1 Business Entity Structures.md | Cross-topic repeat: 2.1, 3.1, 5.1 |
| CF4-3.1-038 | 3.1 | Hubungan dengan 2.1 Equity Instruments | Formula / Financial Relationship | 3.1 Business Entity Structures.md | Cross-topic repeat: 3.1, 5.1 |
| CF4-3.1-039 | 3.1 | Hubungan dengan 2.5 Capital Raising Methods | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-040 | 3.1 | Hubungan dengan 3.3 Capital Budgeting and Cost of Capital | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-041 | 3.1 | Interpretation Trap | Formula / Financial Relationship | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.1-042 | 3.1 | Langkah 4 — Cari continuity clue | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-043 | 3.1 | Langkah 5 — Cari financing clue | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-044 | 3.1 | Major disadvantages | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-045 | 3.1 | Mental Matrix Utama | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-046 | 3.1 | Ownership divided into stock | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-047 | 3.1 | Ownership Versus Control | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-048 | 3.1 | Separate legal entity | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-049 | 3.1 | Shareholders | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-050 | 3.1 | Tax Implications of Corporate Form | Formula / Financial Relationship | 3.1 Business Entity Structures.md |  |
| CF4-3.1-051 | 3.1 | Definisi dan mechanics | Security / Financing Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-052 | 3.1 | General partners | Security / Financing Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-053 | 3.1 | General partnership | Security / Financing Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-054 | 3.1 | Mengapa shares sangat penting? | Security / Financing Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-055 | 3.1 | Sole Proprietorship | Security / Financing Concept | 3.1 Business Entity Structures.md |  |
| CF4-3.1-056 | 3.1 | Agency problem | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-057 | 3.1 | Board of directors | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-058 | 3.1 | CEO | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-059 | 3.1 | CFO | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-060 | 3.1 | Corporation | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-061 | 3.1 | Equity | Terminology | 3.1 Business Entity Structures.md | Cross-topic repeat: 1.4, 1.5, 2.1, 3.1, 3.2 |
| CF4-3.1-062 | 3.1 | General partner | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-063 | 3.1 | Limited liability | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-064 | 3.1 | Limited partner | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-065 | 3.1 | LLC | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-066 | 3.1 | Partnership | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-067 | 3.1 | Shareholder / stockholder / equity holder | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-068 | 3.1 | Sole proprietorship | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-069 | 3.1 | Stock | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.1-070 | 3.1 | Unlimited personal liability | Terminology | 3.1 Business Entity Structures.md |  |
| CF4-3.2-001 | 3.2 | . Debt vs equity claims | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-002 | 3.2 | Accounting / Financial Logic Trap | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-3.2-003 | 3.2 | C. Equity financing | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-004 | 3.2 | Case A — Fundamental: Debt atau Equity? | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-005 | 3.2 | Comparison Table — Debt vs Equity | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-006 | 3.2 | Dengan 2.1 Equity Instruments | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 3.2, 5.4 |
| CF4-3.2-007 | 3.2 | Hubungan Konsep | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-3.2-008 | 3.2 | Kapan Digunakan | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-009 | 3.2 | Mengapa capital structure menjadi penting? | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-010 | 3.2 | Mengapa dividend policy berada dalam subtopik yang sama? | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-011 | 3.2 | Must Remember | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-3.2-012 | 3.2 | Trigger Keywords | Accounting / Reporting Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-013 | 3.2 | . Distribution decision | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-014 | 3.2 | . Sources of finance | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-015 | 3.2 | . Tax shield dalam MM with corporate taxes | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-016 | 3.2 | F. Dividend policy dan payout policy | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-017 | 3.2 | Quick Decision Tree | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-018 | 3.2 | Red Flags | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-019 | 3.2 | Tax effect | Definition / Classification | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-020 | 3.2 | Definition Trap | Economic / Corporate Finance Concept | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-021 | 3.2 | . Capital structure → WACC → firm value | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-022 | 3.2 | Calculation Trap | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-023 | 3.2 | Case B — Exam-Typical: WACC Direction | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-024 | 3.2 | Case C — Challenging / Integrated: Dividend atau Repurchase? | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-025 | 3.2 | Corporate Finance Framework | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-026 | 3.2 | D. Mengapa leverage dapat menurunkan lalu menaikkan WACC? | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-027 | 3.2 | Dengan 2.5 Capital Raising Methods | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 2.1, 3.2 |
| CF4-3.2-028 | 3.2 | Dengan 3.3 Capital Budgeting and Cost of Capital | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 3.2, 5.4 |
| CF4-3.2-029 | 3.2 | Dengan 4.3 Agency Theory and Governance | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 2.1, 3.2 |
| CF4-3.2-030 | 3.2 | Dividend irrelevance theory | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-031 | 3.2 | E. Business risk vs financial risk | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-032 | 3.2 | G. Dividend theories yang harus dibedakan | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-033 | 3.2 | H. Signaling dan dividend stability | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-034 | 3.2 | Interpretation Ladder | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-035 | 3.2 | Interpretation Trap | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-036 | 3.2 | Kapan TIDAK Boleh Digunakan | Formula / Financial Relationship | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.2-037 | 3.2 | . Trade-off theory | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-038 | 3.2 | A. Internal financing | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-039 | 3.2 | B. Debt financing | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-040 | 3.2 | Comparison Table — Dividend vs Share Repurchase | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-041 | 3.2 | Dengan 2.2 Long-Term Debt Instruments dan 2.3 Short and Medium-Term Finance | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-042 | 3.2 | Dividend preference / bird-in-the-hand | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-043 | 3.2 | I. Dividend vs share repurchase | Security / Financing Concept | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-044 | 3.2 | Business risk | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-045 | 3.2 | Capital structure | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-046 | 3.2 | Debt | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-047 | 3.2 | Distribution policy | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-048 | 3.2 | Dividend | Terminology | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 2.1, 3.2, 5.1 |
| CF4-3.2-049 | 3.2 | Dividend payout ratio | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-050 | 3.2 | Equity | Terminology | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 1.4, 1.5, 2.1, 3.1, 3.2 |
| CF4-3.2-051 | 3.2 | External financing | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-052 | 3.2 | Financial distress | Terminology | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 3.2, 4.1 |
| CF4-3.2-053 | 3.2 | Financial leverage | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-054 | 3.2 | Financial risk | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-055 | 3.2 | Internal financing | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-056 | 3.2 | Reserve borrowing capacity | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-057 | 3.2 | Share repurchase | Terminology | 3.2 Sources of Finance and Capital Structure.md | Cross-topic repeat: 2.1, 3.2 |
| CF4-3.2-058 | 3.2 | Signaling | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-059 | 3.2 | Tax shield | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.2-060 | 3.2 | Trade-off theory | Terminology | 3.2 Sources of Finance and Capital Structure.md |  |
| CF4-3.3-001 | 3.3 | Comparison Table — Accounting Earnings vs Project FCF | Accounting / Reporting Concept | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-002 | 3.3 | Dengan 1.5 Financial Statements Construction | Accounting / Reporting Concept | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.6, 3.3 |
| CF4-3.3-003 | 3.3 | Include | Accounting / Reporting Concept | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-004 | 3.3 | Mengapa depreciation dikurangkan lalu ditambahkan kembali? | Accounting / Reporting Concept | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-005 | 3.3 | . Perubahan Net Working Capital | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-006 | 3.3 | . Project Free Cash Flow | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-007 | 3.3 | A. Capital Budgeting Flow | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-008 | 3.3 | Accounting / Financial Logic Trap | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-3.3-009 | 3.3 | B. Relevant Cash Flow Principle | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-010 | 3.3 | Case B — Exam-Typical: Project Free Cash Flow | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-011 | 3.3 | E. Source of Weights | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-012 | 3.3 | Exclude | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-013 | 3.3 | Hubungan Konsep | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 2.1, 2.2, 3.2, 3.3 |
| CF4-3.3-014 | 3.3 | Mengapa accounting profit saja tidak cukup? | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-015 | 3.3 | Must Remember | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-3.3-016 | 3.3 | Quick Decision Tree | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-017 | 3.3 | Red Flags | Definition / Classification | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-018 | 3.3 | . After-Tax Cost of Debt | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-019 | 3.3 | . Cost of Common Equity — CAPM | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-020 | 3.3 | . Cost of Common Equity — DCF / Dividend Growth | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-021 | 3.3 | . Cost of New External Common Equity dengan Flotation Cost | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-022 | 3.3 | . Cost of Preferred Stock | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-023 | 3.3 | . NPV sebagai Link antara Cash Flow dan Cost of Capital | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-024 | 3.3 | . WACC dengan Debt dan Common Equity | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-025 | 3.3 | . WACC dengan Preferred Stock | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-026 | 3.3 | C. Mengapa Interest Expense Tidak Masuk Project FCF? | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-027 | 3.3 | Case A — Fundamental: Menghitung WACC | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-028 | 3.3 | Case C — Challenging / Integrated: Apakah Company WACC Tepat? | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-029 | 3.3 | Case D — Integrated: Flotation Cost dan New Equity | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-030 | 3.3 | D. Dari Component Costs ke WACC | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-031 | 3.3 | Definition Trap | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-032 | 3.3 | Dengan 1.1 Taxation Principles | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-033 | 3.3 | Dengan 2.1 Equity Instruments dan 2.2 Long-Term Debt Instruments | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 3.3 |
| CF4-3.3-034 | 3.3 | Dengan 3.2 Sources of Finance and Capital Structure | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 2.1, 3.3 |
| CF4-3.3-035 | 3.3 | Dengan 3.4 Investment Return Methods | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-036 | 3.3 | F. Marginal Cost, Bukan Historical Cost | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-037 | 3.3 | G. Kapan Company WACC Layak Dipakai? | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-038 | 3.3 | Interpretation Ladder | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-039 | 3.3 | Interpretation Trap | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-040 | 3.3 | Kapan Digunakan | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-041 | 3.3 | Kapan TIDAK Boleh Digunakan | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-042 | 3.3 | Mengapa satu discount rate tidak selalu cocok untuk semua project? | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-043 | 3.3 | Trigger Keywords | Formula / Financial Relationship | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-044 | 3.3 | Apa arti 9.40%? | Security / Financing Concept | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-045 | 3.3 | Calculation Trap | Security / Financing Concept | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-3.3-046 | 3.3 | Formula Table | Security / Financing Concept | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-047 | 3.3 | After-tax cost of debt | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-048 | 3.3 | Cannibalization | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-049 | 3.3 | CapEx | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-050 | 3.3 | Capital budgeting | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-051 | 3.3 | Component cost | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-052 | 3.3 | Cost of common equity | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-053 | 3.3 | Cost of preferred stock | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-054 | 3.3 | Depreciation | Terminology | 3.3 Capital Budgeting and Cost of Capital.md | Cross-topic repeat: 1.5, 3.3 |
| CF4-3.3-055 | 3.3 | Flotation cost | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-056 | 3.3 | Incremental cash flow | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-057 | 3.3 | Net Working Capital | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-058 | 3.3 | Opportunity cost | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-059 | 3.3 | Project externality | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-060 | 3.3 | Risk-adjusted cost of capital | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-061 | 3.3 | Sunk cost | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.3-062 | 3.3 | Target capital structure | Terminology | 3.3 Capital Budgeting and Cost of Capital.md |  |
| CF4-3.4-001 | 3.4 | Economic Life vs Physical Life | Accounting / Reporting Concept | 3.4 Investment Return Methods.md |  |
| CF4-3.4-002 | 3.4 | Advantages | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-003 | 3.4 | Berk & DeMarzo Definition | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-004 | 3.4 | Brigham Definition | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-005 | 3.4 | Case D — PI Convention Trap | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-006 | 3.4 | Case F — Nonnormal Cash Flow | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-007 | 3.4 | Crossover Rate | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-008 | 3.4 | Decision Rule | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-009 | 3.4 | Definition | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-010 | 3.4 | Improvement over Regular Payback | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-011 | 3.4 | Independent vs Mutually Exclusive Projects | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-012 | 3.4 | Limitations under Resource Constraints | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-013 | 3.4 | Major Weaknesses | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-014 | 3.4 | Normal vs Nonnormal Cash Flows | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-015 | 3.4 | Reinvestment Assumption | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-016 | 3.4 | Replacement Chain / Common Life | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-017 | 3.4 | Strengths and Weaknesses | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-018 | 3.4 | Trap 2 — Payback Includes All Cash Flows | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-019 | 3.4 | Trap 3 — Discounted Payback Fixes Everything | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-020 | 3.4 | Trap 5 — PI Threshold Always 1 | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-021 | 3.4 | Unequal Cash Flows | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-022 | 3.4 | Why Unequal Lives Cause Problems | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-023 | 3.4 | Worked Example — Weygandt Logic | Definition / Classification | 3.4 Investment Return Methods.md |  |
| CF4-3.4-024 | 3.4 | Case A — NPV vs IRR for Independent Projects | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-025 | 3.4 | Case B — Mutually Exclusive Conflict | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-026 | 3.4 | Case C — Payback vs NPV | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-027 | 3.4 | Case E — ARR vs IRR Trap | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-028 | 3.4 | Definition | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-029 | 3.4 | Equivalent Annual Annuity (EAA) | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-030 | 3.4 | Incremental IRR | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-031 | 3.4 | Independent Projects | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-032 | 3.4 | IRR Problem 1 — Multiple IRRs | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-033 | 3.4 | IRR Problem 2 — No IRR | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-034 | 3.4 | IRR Problem 3 — Positive Cash Flows Before Negative Cash Flows | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-035 | 3.4 | IRR sebagai Margin for Error | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-036 | 3.4 | Mutually Exclusive Projects | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-037 | 3.4 | NPV dan Timing | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-038 | 3.4 | NPV Profile | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-039 | 3.4 | Scale Problem | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-040 | 3.4 | Timing Problem | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-041 | 3.4 | Trap 1 — Highest IRR Means Best Project | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-042 | 3.4 | Trap 4 — ARR = IRR | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-043 | 3.4 | Trap 6 — One IRR Always Exists | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-044 | 3.4 | Trap 7 — Higher Total Cash Inflow Automatically Means Higher NPV | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-045 | 3.4 | Trap 8 — NPV and IRR Always Conflict | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-046 | 3.4 | Why MIRR Exists | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-047 | 3.4 | Why PI Is Useful | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-048 | 3.4 | Worked Example — MIRR | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-3.4-049 | 3.4 | Worked Example — NPV | Formula / Financial Relationship | 3.4 Investment Return Methods.md |  |
| CF4-4.1-001 | 4.1 | Financial Distress dan Market Access | Accounting / Reporting Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-002 | 4.1 | Financial Markets ↔ Capital Structure | Accounting / Reporting Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-003 | 4.1 | Market for Corporate Control | Accounting / Reporting Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-004 | 4.1 | Acquisition Premium | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-005 | 4.1 | Big Picture Topik 4.1 | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-006 | 4.1 | Calculation Trap | Definition / Classification | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-007 | 4.1 | Currency Consistency | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-008 | 4.1 | Discounting | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-009 | 4.1 | Kapan TIDAK Boleh Digunakan | Definition / Classification | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-010 | 4.1 | Level 3 — Apa friction-nya? | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-011 | 4.1 | Level 4 — Apa dampaknya pada value? | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-012 | 4.1 | Level 5 — Apakah hanya transfer atau value creation/destruction? | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-013 | 4.1 | Route A — Foreign Currency First | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-014 | 4.1 | Route B — Convert Cash Flows First | Definition / Classification | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-015 | 4.1 | Comparison Table | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-4.1-016 | 4.1 | Definition Trap | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-017 | 4.1 | Domestic Market Perspective | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-018 | 4.1 | Financial Logic Trap | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-4.1-019 | 4.1 | Financial Markets sebagai Financing Mechanism | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-020 | 4.1 | Financial Markets ↔ Governance | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-021 | 4.1 | Financial Markets ↔ International Corporate Finance | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-022 | 4.1 | Financial Markets ↔ Real Resources | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-023 | 4.1 | Internationally Integrated Capital Markets | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-024 | 4.1 | Internationally Segmented Capital Markets | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-025 | 4.1 | Interpretation Ladder | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-026 | 4.1 | Kapan Digunakan | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-027 | 4.1 | Level 1 — Apa market-nya? | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-028 | 4.1 | Level 2 — Apa fungsi economic-nya? | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-029 | 4.1 | Market Imperfections — Mengapa Struktur Market Penting | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-030 | 4.1 | Perfect Capital Market — Benchmark, Bukan Realitas | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-031 | 4.1 | Quick Decision Tree | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-032 | 4.1 | Red Flags | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-033 | 4.1 | Trigger Keywords | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-034 | 4.1 | Why Firms May Use Foreign Capital Markets | Economic / Corporate Finance Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-035 | 4.1 | Financial Markets sebagai Valuation Mechanism | Formula / Financial Relationship | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-036 | 4.1 | Interpretation Trap | Formula / Financial Relationship | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-4.1-037 | 4.1 | Must Remember | Formula / Financial Relationship | 4.1 Financial Markets Structure.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-4.1-038 | 4.1 | Sanity Checks | Formula / Financial Relationship | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-039 | 4.1 | Two Valuation Routes in Integrated Markets | Formula / Financial Relationship | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-040 | 4.1 | Access to Capital Markets | Security / Financing Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-041 | 4.1 | Market Value, Intrinsic Value, dan Corporate Decisions | Security / Financing Concept | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-042 | 4.1 | Capital market | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-043 | 4.1 | Financial distress | Terminology | 4.1 Financial Markets Structure.md | Cross-topic repeat: 3.2, 4.1 |
| CF4-4.1-044 | 4.1 | Information asymmetry | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-045 | 4.1 | Integrated capital markets | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-046 | 4.1 | Intrinsic value | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-047 | 4.1 | Market for corporate control | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-048 | 4.1 | Market imperfection | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-049 | 4.1 | Market value | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-050 | 4.1 | Perfect capital market | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.1-051 | 4.1 | Segmented capital markets | Terminology | 4.1 Financial Markets Structure.md |  |
| CF4-4.2-001 | 4.2 | Assets-in-Place | Accounting / Reporting Concept | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-002 | 4.2 | Must Remember | Accounting / Reporting Concept | 4.2 Finance and Real Resources.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-4.2-003 | 4.2 | Causal Chain | Definition / Classification | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-004 | 4.2 | Dunia 1 — Financial Resources | Definition / Classification | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-005 | 4.2 | Dunia 2 — Real Resources | Definition / Classification | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-006 | 4.2 | Pilihan A | Definition / Classification | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-007 | 4.2 | Pilihan B | Definition / Classification | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-008 | 4.2 | Route B | Definition / Classification | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-009 | 4.2 | Economic Chain | Economic / Corporate Finance Concept | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-010 | 4.2 | Case 1 | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-011 | 4.2 | Case 2 | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-012 | 4.2 | Case 3 | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-013 | 4.2 | Negative NPV | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-014 | 4.2 | Positive NPV | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-015 | 4.2 | Route A | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-016 | 4.2 | Zero NPV | Formula / Financial Relationship | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-017 | 4.2 | Growth Options | Security / Financing Concept | 4.2 Finance and Real Resources.md |  |
| CF4-4.2-018 | 4.2 | Why It Matters | Security / Financing Concept | 4.2 Finance and Real Resources.md |  |
| CF4-4.3-001 | 4.3 | A. Risk Shifting / Asset Substitution | Accounting / Reporting Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-002 | 4.3 | C. Cashing Out / Excess Payout | Accounting / Reporting Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-003 | 4.3 | Diagnosis | Accounting / Reporting Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-004 | 4.3 | . Empire Building | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-005 | 4.3 | . Excessive Perquisites | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-006 | 4.3 | . Managerial Entrenchment | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-007 | 4.3 | . Short-Termism / Earnings Management | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-008 | 4.3 | Carrot — Incentives | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-009 | 4.3 | Diagnosis | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-010 | 4.3 | Friendly Takeover | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-011 | 4.3 | Inside Director | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-012 | 4.3 | Noncumulative Voting | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-013 | 4.3 | Outside / Independent Director | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-014 | 4.3 | Staggered Board | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-015 | 4.3 | Stick — Threat of Discipline | Definition / Classification | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-016 | 4.3 | . Insufficient Effort / Shirking | Economic / Corporate Finance Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-017 | 4.3 | Core Problem | Economic / Corporate Finance Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-018 | 4.3 | Feynman Version | Economic / Corporate Finance Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-019 | 4.3 | B. Debt Overhang / Underinvestment | Formula / Financial Relationship | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-020 | 4.3 | Must Remember | Formula / Financial Relationship | 4.3 Agency Theory and Governance.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-4.3-021 | 4.3 | . Excessive Risk Avoidance | Security / Financing Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-022 | 4.3 | Cumulative Voting | Security / Financing Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-023 | 4.3 | Diagnosis | Security / Financing Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-024 | 4.3 | Hostile Takeover | Security / Financing Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-4.3-025 | 4.3 | Poison Pill | Security / Financing Concept | 4.3 Agency Theory and Governance.md |  |
| CF4-5.1-001 | 5.1 | Common Stock — Residual Ownership | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-002 | 5.1 | Comparison Table | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-5.1-003 | 5.1 | Definition Trap | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-004 | 5.1 | Derivatives — Boundary to 5.2 | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-005 | 5.1 | Diversifiable vs Systematic Risk — Asset Characteristic View | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-006 | 5.1 | Hubungan dengan 2.1 Equity Instruments | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 3.1, 5.1 |
| CF4-5.1-007 | 5.1 | Hubungan dengan 2.2 Long-Term Debt Instruments | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 5.1, 5.3 |
| CF4-5.1-008 | 5.1 | Hubungan dengan 4.1 Financial Markets Structure | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 5.1, 5.2 |
| CF4-5.1-009 | 5.1 | Hubungan dengan 5.3 Economic Influences on Markets | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 5.1, 5.2 |
| CF4-5.1-010 | 5.1 | Kapan Digunakan | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-011 | 5.1 | Mutual Funds and ETFs | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-012 | 5.1 | Preferred Stock — Hybrid Characteristics | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-013 | 5.1 | Primary vs Secondary Market — Asset-Market Link | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-014 | 5.1 | Real Assets vs Financial Assets | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-015 | 5.1 | Securitized Asset | Accounting / Reporting Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-016 | 5.1 | Case B — Exam-Typical | Definition / Classification | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-5.1-017 | 5.1 | Case D — Securitization | Definition / Classification | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-018 | 5.1 | Hubungan dengan 5.2 Derivative Investments | Definition / Classification | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 5.1, 5.3 |
| CF4-5.1-019 | 5.1 | Red Flags | Definition / Classification | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-020 | 5.1 | Money Market vs Capital Market | Economic / Corporate Finance Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-021 | 5.1 | Accounting / Financial Logic Trap | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 3.2, 3.3, 5.1 |
| CF4-5.1-022 | 5.1 | Calculation Trap | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-023 | 5.1 | Case C — Challenging / Integrated | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-5.1-024 | 5.1 | Corporate Bond | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 2.2, 5.1 |
| CF4-5.1-025 | 5.1 | Corporate Bonds | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-026 | 5.1 | Financial meaning | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 2.1, 3.1, 5.1 |
| CF4-5.1-027 | 5.1 | Government Debt | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-028 | 5.1 | Historical Risk-Return Across Asset Classes | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-029 | 5.1 | Hubungan dengan 5.4 Return Relationships and Economic Variables | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 5.1, 5.2, 5.3 |
| CF4-5.1-030 | 5.1 | Interpretation Ladder | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-031 | 5.1 | Interpretation Trap | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-032 | 5.1 | Kapan TIDAK Boleh Digunakan | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-033 | 5.1 | Risk-Return Logic | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-034 | 5.1 | Sanity Table by Asset Type | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-035 | 5.1 | Stock Market Price vs Intrinsic Value | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-036 | 5.1 | Volatility and Standard Deviation | Formula / Financial Relationship | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-037 | 5.1 | Apa yang dapat salah jika konsep ini disalahpahami? | Security / Financing Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.2, 5.1 |
| CF4-5.1-038 | 5.1 | Case A — Fundamental | Security / Financing Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.2, 1.4, 1.5, 2.1, 3.1, 5.1 |
| CF4-5.1-039 | 5.1 | Common Stock | Security / Financing Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 2.1, 5.1 |
| CF4-5.1-040 | 5.1 | Debt Instruments — Contractual Claims | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-041 | 5.1 | Framework Securities | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-042 | 5.1 | Intercorporate Investments — Robinson Perspective | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-043 | 5.1 | Long-Term Debt / Capital Market | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-044 | 5.1 | Money Market Instrument | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-045 | 5.1 | Mortgages and Mortgage-Backed Securities | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-046 | 5.1 | Quick Decision Tree | Security / Financing Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-047 | 5.1 | Short-Term Debt / Money Market | Security / Financing Concept | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-048 | 5.1 | Trigger Keywords | Security / Financing Concept | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.1-049 | 5.1 | Capital gain/loss | Terminology | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 1.1, 5.1 |
| CF4-5.1-050 | 5.1 | Capital market security | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-051 | 5.1 | Coupon / interest | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-052 | 5.1 | Debt security | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-053 | 5.1 | Default risk | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-054 | 5.1 | Dividend | Terminology | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 2.1, 3.2, 5.1 |
| CF4-5.1-055 | 5.1 | Equity security | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-056 | 5.1 | ETF | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-057 | 5.1 | Financial asset | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-058 | 5.1 | Interest-rate risk | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-059 | 5.1 | Liquidity | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-060 | 5.1 | Money market security | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-061 | 5.1 | Mutual fund | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-062 | 5.1 | Passive financial investment | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-063 | 5.1 | Principal / par value | Terminology | 5.1 Investment Asset Characteristics.md |  |
| CF4-5.1-064 | 5.1 | Residual claim | Terminology | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 2.1, 5.1 |
| CF4-5.1-065 | 5.1 | Securitization | Terminology | 5.1 Investment Asset Characteristics.md | Cross-topic repeat: 2.5, 5.1 |
| CF4-5.2-001 | 5.2 | Hedging a Future Sale | Accounting / Reporting Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-002 | 5.2 | Hubungan dengan 5.1 Investment Asset Characteristics | Accounting / Reporting Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 5.2, 5.3 |
| CF4-5.2-003 | 5.2 | Perfect Hedge vs Basis Risk | Accounting / Reporting Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-004 | 5.2 | Swap as Exposure Transformation | Accounting / Reporting Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-005 | 5.2 | . Hedging | Definition / Classification | 5.2 Derivative Investments.md |  |
| CF4-5.2-006 | 5.2 | Basic net-rate logic | Definition / Classification | 5.2 Derivative Investments.md |  |
| CF4-5.2-007 | 5.2 | Dua penggunaan utama | Definition / Classification | 5.2 Derivative Investments.md |  |
| CF4-5.2-008 | 5.2 | Exercise value / intrinsic value | Definition / Classification | 5.2 Derivative Investments.md |  |
| CF4-5.2-009 | 5.2 | Hedging vs Speculating | Definition / Classification | 5.2 Derivative Investments.md |  |
| CF4-5.2-010 | 5.2 | Hubungan dengan 2.4 Derivative Securities in Corporate Finance | Definition / Classification | 5.2 Derivative Investments.md |  |
| CF4-5.2-011 | 5.2 | Moneyness | Definition / Classification | 5.2 Derivative Investments.md | Cross-topic repeat: 2.4, 5.2 |
| CF4-5.2-012 | 5.2 | Red Flags | Definition / Classification | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-013 | 5.2 | Mengapa derivatives market membutuhkan speculators? | Economic / Corporate Finance Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-014 | 5.2 | Natural hedge | Economic / Corporate Finance Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-015 | 5.2 | . Speculation | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-016 | 5.2 | American vs European | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-017 | 5.2 | Call hedge | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-018 | 5.2 | Call mental model | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-019 | 5.2 | Call payoff | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-020 | 5.2 | Case A — Fundamental: Forward Payoff | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-021 | 5.2 | Case C — Challenging / Integrated: Option vs Forward Hedge | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-022 | 5.2 | Financial Logic Trap | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 1.6, 2.1, 2.2, 2.3, 3.1, 4.1, 5.2 |
| CF4-5.2-023 | 5.2 | Forward/futures hedge | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-024 | 5.2 | Futures Contract | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-025 | 5.2 | Hubungan dengan 5.3 Economic Influences on Markets | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 5.1, 5.2 |
| CF4-5.2-026 | 5.2 | Hubungan dengan 5.4 Return Relationships and Economic Variables | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 5.1, 5.2, 5.3 |
| CF4-5.2-027 | 5.2 | Interpretation Ladder | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-028 | 5.2 | Interpretation Trap | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-029 | 5.2 | Kapan TIDAK Boleh Digunakan | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-030 | 5.2 | Long Hedge vs Short Hedge | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-031 | 5.2 | Marking to market | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-032 | 5.2 | Must Remember | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.2 |
| CF4-5.2-033 | 5.2 | Options | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-034 | 5.2 | Options as Asymmetric Risk Transfer | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-035 | 5.2 | Put mental model | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-036 | 5.2 | Put payoff | Formula / Financial Relationship | 5.2 Derivative Investments.md |  |
| CF4-5.2-037 | 5.2 | Trigger Keywords | Formula / Financial Relationship | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-038 | 5.2 | Calculation Trap | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-039 | 5.2 | Case B — Exam-Typical: Futures Hedge Direction | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-040 | 5.2 | Case D — Interest-Rate Swap Mechanics | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-041 | 5.2 | Commodity vs financial futures | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-042 | 5.2 | Comparison Table | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.5, 3.1, 4.1, 5.1, 5.2 |
| CF4-5.2-043 | 5.2 | Counterparty risk | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-044 | 5.2 | Covered vs naked option | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-045 | 5.2 | Currency swap | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-046 | 5.2 | Definition Trap | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-047 | 5.2 | Forward Contract | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-048 | 5.2 | Futures Market Mechanics | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-049 | 5.2 | Hedging a Future Purchase | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-050 | 5.2 | Hubungan dengan 4.1 Financial Markets Structure | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 5.1, 5.2 |
| CF4-5.2-051 | 5.2 | Interest-rate swap | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-052 | 5.2 | Intuisi long forward | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-053 | 5.2 | Kapan Digunakan | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-054 | 5.2 | Market characteristic | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-055 | 5.2 | Quick Decision Tree | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2 |
| CF4-5.2-056 | 5.2 | Short option | Security / Financing Concept | 5.2 Derivative Investments.md | Cross-topic repeat: 2.4, 5.2 |
| CF4-5.2-057 | 5.2 | Swaps | Security / Financing Concept | 5.2 Derivative Investments.md |  |
| CF4-5.2-058 | 5.2 | Counterparty | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-059 | 5.2 | Exercise | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-060 | 5.2 | Expiration | Terminology | 5.2 Derivative Investments.md | Cross-topic repeat: 2.4, 5.2 |
| CF4-5.2-061 | 5.2 | Forward price / delivery price, $K$ | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-062 | 5.2 | Hedging | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-063 | 5.2 | Leverage | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-064 | 5.2 | Long | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-065 | 5.2 | Margin | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-066 | 5.2 | Marking to market | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-067 | 5.2 | Notional principal | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-068 | 5.2 | Short | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-069 | 5.2 | Speculation | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-070 | 5.2 | Spot price, $S_t$ | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-071 | 5.2 | Strike price, $K$ | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.2-072 | 5.2 | Underlying | Terminology | 5.2 Derivative Investments.md |  |
| CF4-5.3-001 | 5.3 | Cash-Flow Channel | Accounting / Reporting Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-002 | 5.3 | Expected-Cash-Flow / Growth Channel | Accounting / Reporting Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-003 | 5.3 | Mengapa Long-Term Fixed-Rate Assets Lebih Sensitif? | Accounting / Reporting Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-004 | 5.3 | Recession | Accounting / Reporting Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-005 | 5.3 | Step 3 — Identify the Asset | Accounting / Reporting Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-006 | 5.3 | Easing-Type Effect | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-007 | 5.3 | Expansion | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-008 | 5.3 | Present-Value Framework | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-009 | 5.3 | Production Opportunities | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-010 | 5.3 | Step 4 — Apply Ceteris Paribus Carefully | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-011 | 5.3 | Tightening-Type Effect | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-012 | 5.3 | Time Preference for Consumption | Definition / Classification | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-013 | 5.3 | Capital-Flow Channel | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-014 | 5.3 | Discount-Rate Channel | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-015 | 5.3 | Diversifiable vs Systematic Risk | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-016 | 5.3 | Economic Distress dan Liquidity | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-017 | 5.3 | Example 3 — Risk Aversion Shock | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-018 | 5.3 | Hubungan dengan 5.2 Derivative Investments | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md | Cross-topic repeat: 5.1, 5.3 |
| CF4-5.3-019 | 5.3 | Nominal–Real–Inflation Relation | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-020 | 5.3 | Risk | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-021 | 5.3 | Step 1 — Identify the Driver | Economic / Corporate Finance Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-022 | 5.3 | Bond Price | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-023 | 5.3 | Calculation Traps | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-024 | 5.3 | Currency Expectations | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-025 | 5.3 | Definition Traps | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-026 | 5.3 | Direction-of-Effect Traps | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-027 | 5.3 | Exact Real Return | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-028 | 5.3 | Example 1 — Inflation Shock and Bond Price | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-029 | 5.3 | Expected Return under Market-Risk Framework | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-030 | 5.3 | Holding-Period Stock Return | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-031 | 5.3 | Hubungan dengan 2.2 Long-Term Debt Instruments | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md | Cross-topic repeat: 5.1, 5.3 |
| CF4-5.3-032 | 5.3 | Hubungan dengan 5.1 Investment Asset Characteristics | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md | Cross-topic repeat: 5.2, 5.3 |
| CF4-5.3-033 | 5.3 | Hubungan dengan 5.4 Return Relationships and Economic Variables | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md | Cross-topic repeat: 5.1, 5.2, 5.3 |
| CF4-5.3-034 | 5.3 | Inflation | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-035 | 5.3 | Inflation Effect | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-036 | 5.3 | Interest-Rate Effect | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-037 | 5.3 | Real Purchasing-Power Channel | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-038 | 5.3 | Required-Return Channel | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-039 | 5.3 | Step 2 — Identify the Valuation Channel | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-040 | 5.3 | Step 5 — Separate Price from Total Return | Formula / Financial Relationship | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-041 | 5.3 | Constant-Growth Stock Value | Security / Financing Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-042 | 5.3 | Credit / Business-Cycle Effect | Security / Financing Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-043 | 5.3 | Example 2 — Strong Economy but Stock Does Not Rise | Security / Financing Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-044 | 5.3 | Fixed-Income Securities | Security / Financing Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-045 | 5.3 | Short-Term Instruments | Security / Financing Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.3-046 | 5.3 | Why Stock Reactions Can Be Ambiguous | Security / Financing Concept | 5.3 Economic Influences on Markets.md |  |
| CF4-5.4-001 | 5.4 | Dengan 5.1 Investment Asset Characteristics | Accounting / Reporting Concept | 5.4 Return Relationships and Economic Variables.md | Cross-topic repeat: 2.1, 5.4 |
| CF4-5.4-002 | 5.4 | Arithmetic Average | Definition / Classification | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-003 | 5.4 | CAGR | Definition / Classification | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-004 | 5.4 | Mental Model | Definition / Classification | 5.4 Return Relationships and Economic Variables.md | Cross-topic repeat: 1.6, 5.4 |
| CF4-5.4-005 | 5.4 | Time value of money | Definition / Classification | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-006 | 5.4 | Wealth Outcome | Definition / Classification | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-007 | 5.4 | Core Relationship | Economic / Corporate Finance Concept | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-008 | 5.4 | Dengan 5.3 Economic Influences on Markets | Economic / Corporate Finance Concept | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-009 | 5.4 | Lapisan B — Economic Drivers | Economic / Corporate Finance Concept | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-010 | 5.4 | Pricing Implication | Economic / Corporate Finance Concept | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-011 | 5.4 | Compensation for systematic risk | Formula / Financial Relationship | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-012 | 5.4 | Dengan 2.1 Equity Instruments | Formula / Financial Relationship | 5.4 Return Relationships and Economic Variables.md | Cross-topic repeat: 3.2, 5.4 |
| CF4-5.4-013 | 5.4 | Dengan 2.2 Long-Term Debt Instruments | Formula / Financial Relationship | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-014 | 5.4 | Dengan 3.3 Capital Budgeting and Cost of Capital | Formula / Financial Relationship | 5.4 Return Relationships and Economic Variables.md | Cross-topic repeat: 3.2, 5.4 |
| CF4-5.4-015 | 5.4 | Lapisan A — Asset Return | Formula / Financial Relationship | 5.4 Return Relationships and Economic Variables.md |  |
| CF4-5.4-016 | 5.4 | One-Line Memory | Formula / Financial Relationship | 5.4 Return Relationships and Economic Variables.md |  |

## 6. Raw Formula Inventory

Formula di bawah masih menggunakan bentuk sebagaimana muncul pada topic notes. **Equivalent forms belum direkonsiliasi.**

> [!IMPORTANT] MathJax Rendering Fix
> Formula sekarang diekstrak ulang hanya dari pasangan `$$ ... $$` yang valid. Formula ditulis sebagai **inline MathJax** di dalam tabel (bukan code span), sehingga dapat dirender oleh Obsidian. Prose/heading yang sebelumnya salah terbaca sebagai formula sudah dikeluarkan.

| Topic | Nearest Section | Raw Formula | Source |
|---|---|---|---|
| 1.1 | 1. Tax liability pada bracket tertentu | $\text{Tax} = \text{Base Tax} + \text{Marginal Rate} \times (\text{Taxable Income}-\text{Bracket Base})$ | 1.1 Taxation Principles.md |
| 1.1 | 2. Average tax rate | $\text{Average Tax Rate} = \frac{\text{Total Tax}}{\text{Taxable Income}}$ | 1.1 Taxation Principles.md |
| 1.1 | 3. After-tax income | $\text{After-tax Income} = \text{Before-tax Income}(1-T)$ | 1.1 Taxation Principles.md |
| 1.1 | 4. Institutional investor — dividend exclusion | $T_{\text{effective dividend}} = pT_c$ | 1.1 Taxation Principles.md |
| 1.1 | 4. Institutional investor — dividend exclusion | $\text{After-tax Dividend Income} = D(1-pT_c)$ | 1.1 Taxation Principles.md |
| 1.1 | 5. Taxable-equivalent yield | $r_{TE}=r_{taxable}(1-T)$ | 1.1 Taxation Principles.md |
| 1.1 | 5. Taxable-equivalent yield | $r_{taxable} = \frac{r_{TE}}{1-T}$ | 1.1 Taxation Principles.md |
| 1.1 | 6. Pre-tax income yang diperlukan untuk membayar dividend setelah corporate tax | $\text{Pre-tax Income Needed} = \frac{\text{Dividend}}{1-T_c}$ | 1.1 Taxation Principles.md |
| 1.3 | 2.5 Elements of Financial Statements | $Assets = Liabilities + Equity$ | 1.3 Accounting Concepts and Sustainability.md |
| 1.3 | 2.5 Elements of Financial Statements | $Equity = Assets - Liabilities$ | 1.3 Accounting Concepts and Sustainability.md |
| 1.4 | 2.1 Statement of Financial Position / Balance Sheet | $\text{Assets} = \text{Liabilities} + \text{Equity}$ | 1.4 Company Account Structure.md |
| 1.4 | 2.1 Statement of Financial Position / Balance Sheet | $\text{Equity} = \text{Assets} - \text{Liabilities}$ | 1.4 Company Account Structure.md |
| 1.4 | 2.2 Income Statement / Statement of Comprehensive Income | $\text{Revenue} + \text{Other Income} - \text{Expenses} = \text{Net Income}$ | 1.4 Company Account Structure.md |
| 1.4 | 2.3 Statement of Changes in Equity | $RE_{end}=RE_{begin}+\text{Net Income}-\text{Dividends}$ | 1.4 Company Account Structure.md |
| 1.4 | 2.3 Statement of Changes in Equity | $RE_{end}=RE_{begin}-\text{Net Loss}-\text{Dividends}$ | 1.4 Company Account Structure.md |
| 1.4 | Calculation Trap | $100+30-10=120$ | 1.4 Company Account Structure.md |
| 1.4 | Calculation Trap | $100+30=130$ | 1.4 Company Account Structure.md |
| 1.5 | Section 1 — Intuisi & Big Picture | $Assets \uparrow = Equity \uparrow$ | 1.5 Financial Statements Construction.md |
| 1.5 | Definisi Formal | $\text{Equity}=\text{Assets}-\text{Liabilities}$ | 1.5 Financial Statements Construction.md |
| 1.5 | Definisi Formal | $\text{Net Income}=\text{Revenue}-\text{Expenses}$ | 1.5 Financial Statements Construction.md |
| 1.5 | Definisi Formal | $\text{Net Income} = \text{Total Income and Gains} - \text{Total Expenses and Losses}$ | 1.5 Financial Statements Construction.md |
| 1.5 | Expanded Accounting Equation | $Assets = Liabilities + Contributed\ Capital + Retained\ Earnings$ | 1.5 Financial Statements Construction.md |
| 1.5 | Expanded Accounting Equation | $Retained\ Earnings_{end} = Retained\ Earnings_{begin} + Net\ Income - Dividends$ | 1.5 Financial Statements Construction.md |
| 1.5 | Expanded Accounting Equation | $Assets = Liabilities + Contributed\ Capital + Retained\ Earnings_{begin} + Revenue - Expenses - Dividends$ | 1.5 Financial Statements Construction.md |
| 1.5 | A. Owner invests cash | $Assets+100=Equity+100$ | 1.5 Financial Statements Construction.md |
| 1.5 | C. Purchase inventory on credit | $Assets+20=Liabilities+20$ | 1.5 Financial Statements Construction.md |
| 1.5 | I. Prepaid expense | $Rent\ Expense=\frac{12}{12}=1$ | 1.5 Financial Statements Construction.md |
| 1.5 | J. Depreciation | $Annual\ Depreciation=\frac{24}{4}=6$ | 1.5 Financial Statements Construction.md |
| 1.5 | 3.4 Penyusunan Income Statement | $Net\ Income=100-44=56$ | 1.5 Financial Statements Construction.md |
| 1.5 | 3.5 Dari Net Income ke Retained Earnings | $RE_{end}=40+56-16=80$ | 1.5 Financial Statements Construction.md |
| 1.5 | Equity | $Assets=Liabilities+Equity$ | 1.5 Financial Statements Construction.md |
| 1.5 | Equity | $206=86+120$ | 1.5 Financial Statements Construction.md |
| 1.5 | Equity | $206=206$ | 1.5 Financial Statements Construction.md |
| 1.5 | 3.7 Construction Sequence yang Aman | $A=L+E$ | 1.5 Financial Statements Construction.md |
| 1.5 | Hubungan dengan 1.6 Financial Ratios and Interpretation | $Current\ Ratio=\frac{Current\ Assets}{Current\ Liabilities}$ | 1.5 Financial Statements Construction.md |
| 1.5 | Calculation Trap | $RE_{end}=RE_{begin}+NI+Dividends$ | 1.5 Financial Statements Construction.md |
| 1.5 | Calculation Trap | $RE_{end}=RE_{begin}+NI-Dividends$ | 1.5 Financial Statements Construction.md |
| 1.5 | Calculation Trap | $Net\ PP\&E=Equipment+Accumulated\ Depreciation$ | 1.5 Financial Statements Construction.md |
| 1.5 | Calculation Trap | $Net\ PP\&E = Gross\ PP\&E - Accumulated\ Depreciation$ | 1.5 Financial Statements Construction.md |
| 1.5 | Kapan TIDAK Boleh Digunakan | $Ending\ Cash=Ending\ Retained\ Earnings$ | 1.5 Financial Statements Construction.md |
| 1.6 | Section 1 — Intuisi & Big Picture | $ROA=\frac{Net\ Income}{Average\ Total\ Assets}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Section 1 — Intuisi & Big Picture | $ROA_A=\frac{100}{500}=20\%$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Section 1 — Intuisi & Big Picture | $ROA_B=\frac{100}{2{,}000}=5\%$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.1 Average Balance — Rule yang Sangat Penting | $Average\ Balance = \frac{Beginning\ Balance+Ending\ Balance}{2}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.1 Average Balance — Rule yang Sangat Penting | $Average\ Inventory = \frac{Inventory_{begin}+Inventory_{end}}{2}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Formula | $Current\ Ratio = \frac{Current\ Assets}{Current\ Liabilities}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Economic Meaning | $Current\ Ratio=2.0$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.3 Acid-Test / Quick Ratio | $Quick\ Ratio = \frac{ Cash + Short\text{-}term\ Investments + Net\ Accounts\ Receivable }{ Current\ Liabilities }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.3 Acid-Test / Quick Ratio | $Quick\ Ratio = \frac{ Cash + Marketable\ Securities + Receivables }{ Current\ Liabilities }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.4 Cash Ratio — Robinson | $Cash\ Ratio = \frac{ Cash+Marketable\ Securities }{ Current\ Liabilities }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.5 Accounts Receivable Turnover | $Accounts\ Receivable\ Turnover = \frac{ Net\ Credit\ Sales }{ Average\ Net\ Accounts\ Receivable }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Denominator | $Average\ Net\ AR = \frac{Beginning\ Net\ AR+Ending\ Net\ AR}{2}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.6 Average Collection Period | $Average\ Collection\ Period = \frac{365}{Accounts\ Receivable\ Turnover}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.6 Average Collection Period | $DSO = \frac{Accounts\ Receivable}{Sales/365}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.7 Inventory Turnover | $Inventory\ Turnover = \frac{ Cost\ of\ Goods\ Sold }{ Average\ Inventory }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Denominator | $Average\ Inventory = \frac{Beginning\ Inventory+Ending\ Inventory}{2}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.8 Days in Inventory | $Days\ in\ Inventory = \frac{365}{Inventory\ Turnover}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Economic Meaning | $Inventory\ Turnover\uparrow \Rightarrow Days\ in\ Inventory\downarrow$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.9 Fixed Assets Turnover — Brigham | $Fixed\ Assets\ Turnover = \frac{Sales}{Net\ Fixed\ Assets}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.10 Total Asset Turnover / Asset Turnover | $Asset\ Turnover = \frac{ Net\ Sales }{ Average\ Total\ Assets }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.10 Total Asset Turnover / Asset Turnover | $Total\ Assets\ Turnover = \frac{Sales}{Total\ Assets}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Economic Meaning | $Asset\ Turnover=1.8$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.11 Profit Margin / Net Profit Margin | $Profit\ Margin = \frac{Net\ Income}{Net\ Sales}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.11 Profit Margin / Net Profit Margin | $Profit\ Margin\ on\ Sales = \frac{Net\ Income}{Sales}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Economic Meaning | $Margin=8\%$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.12 Basic Earning Power — Brigham | $BEP = \frac{EBIT}{Total\ Assets}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.13 Return on Assets — ROA | $ROA = \frac{ Net\ Income }{ Average\ Total\ Assets }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.13 Return on Assets — ROA | $ROA = \frac{Net\ Income}{Total\ Assets}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.14 Return on Common Stockholders' Equity — ROE | $ROE = \frac{ Net\ Income-Preferred\ Dividends }{ Average\ Common\ Stockholders'\ Equity }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.14 Return on Common Stockholders' Equity — ROE | $ROE = \frac{ Net\ Income }{ Average\ Common\ Equity }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.14 Return on Common Stockholders' Equity — ROE | $ROE = \frac{ Net\ Income }{ Common\ Equity }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.15 Debt to Assets Ratio | $Debt\ to\ Assets = \frac{ Total\ Liabilities }{ Total\ Assets }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Economic Meaning | $Debt\ to\ Assets=60\%$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.16 Debt-to-Equity — Robinson | $Debt\text{-}to\text{-}Equity = \frac{ Total\ Debt }{ Total\ Equity }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.17 Long-Term Debt-to-Equity — Robinson | $Long\text{-}Term\ Debt\text{-}to\text{-}Equity = \frac{ Total\ Long\text{-}Term\ Debt }{ Total\ Equity }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.18 Financial Leverage Ratio — Robinson | $Financial\ Leverage = \frac{ Total\ Assets }{ Total\ Equity }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.19 Times Interest Earned — TIE | $TIE = \frac{ Net\ Income + Interest\ Expense + Income\ Tax\ Expense }{ Interest\ Expense }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.19 Times Interest Earned — TIE | $TIE = \frac{EBIT}{Interest\ Expense}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Economic Meaning | $TIE=6$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.21 Earnings per Share — EPS | $EPS = \frac{ Net\ Income-Preferred\ Dividends }{ Weighted\text{-}Average\ Common\ Shares\ Outstanding }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.22 Price-Earnings Ratio — P/E | $P/E = \frac{ Market\ Price\ per\ Share }{ Earnings\ per\ Share }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.23 Payout Ratio | $Payout\ Ratio = \frac{ Cash\ Dividends\ Declared\ on\ Common\ Stock }{ Net\ Income }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 2.24 Market-to-Book dan Price/Cash Flow — Brigham | $Market/Book = \frac{ Market\ Price\ per\ Share }{ Book\ Value\ per\ Share }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Current ratio | $Current\ Ratio\uparrow$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Inventory turnover | $Inventory\ Turnover\downarrow$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 3.4 Du Pont System — Mengurai ROE | $ROE = \frac{Net\ Income}{Sales} \times \frac{Sales}{Total\ Assets} \times \frac{Total\ Assets}{Common\ Equity}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 3.4 Du Pont System — Mengurai ROE | $ROE = Profit\ Margin \times Total\ Asset\ Turnover \times Equity\ Multiplier$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | 3.4 Du Pont System — Mengurai ROE | $\frac{NI}{Sales} \times \frac{Sales}{Assets} \times \frac{Assets}{Equity} = \frac{NI}{Equity}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — Inventory Turnover | $Inventory\ Turnover = \frac{Sales}{Inventory}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — Inventory Turnover | $Inventory\ Turnover = \frac{COGS}{Average\ Inventory}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — ROA | $ROA = \frac{NI}{Ending\ Assets}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — ROA | $ROA = \frac{NI}{ (Beginning\ Assets+Ending\ Assets)/2 }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — TIE | $TIE=\frac{Net\ Income}{Interest}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — TIE | $TIE=\frac{EBIT}{Interest}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — TIE | $TIE = \frac{ NI+Interest+Tax }{ Interest }$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — EPS | $EPS=\frac{Net\ Income}{Ending\ Shares}$ | 1.6 Financial Ratios and Interpretation.md |
| 1.6 | Calculation Trap — EPS | $EPS = \frac{ NI-Preferred\ Dividends }{ Weighted\text{-}Average\ Common\ Shares }$ | 1.6 Financial Ratios and Interpretation.md |
| 2.1 | 2.2 Residual Claim | $\text{Equity Value} = \text{Value of Firm Assets} - \text{Value of Debt and Other Senior Claims}$ | 2.1 Equity Instruments(1).md |
| 2.1 | 2.4 Dividends | $\text{Total Shareholder Return} = \text{Dividend Yield} + \text{Capital Gain/Loss Yield}$ | 2.1 Equity Instruments(1).md |
| 2.1 | 2.7 Share Repurchase | $\text{Value per Share} = \frac{\text{Equity Value}}{\text{Shares Outstanding}}$ | 2.1 Equity Instruments(1).md |
| 2.1 | 2.8 Stock Dividend, Stock Split, Reverse Split | $100(40)=200(20)=4{,}000$ | 2.1 Equity Instruments(1).md |
| 2.1 | Relationship 1 — Equity sebagai residual claim | $E = V_A - D - \text{Other Senior Claims}$ | 2.1 Equity Instruments(1).md |
| 2.1 | Relationship 2 — Market capitalization | $\text{Market Capitalization} = P_0 \times N$ | 2.1 Equity Instruments(1).md |
| 2.1 | Relationship 3 — Ownership percentage | $\text{Ownership \%} = \frac{\text{Shares Owned}} {\text{Total Shares Outstanding}}$ | 2.1 Equity Instruments(1).md |
| 2.1 | Relationship 3 — Ownership percentage | $\text{Ownership}=10\%$ | 2.1 Equity Instruments(1).md |
| 2.1 | Relationship 3 — Ownership percentage | $\text{New Ownership} = \frac{100{,}000}{1{,}250{,}000} = 8\%$ | 2.1 Equity Instruments(1).md |
| 2.1 | Relationship 4 — Payout mechanics | $P_{\text{ex}} \approx P_{\text{cum}}-d$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.2 Issuing New Common Equity | $E=100$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.2 Issuing New Common Equity | $2(10)=20$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.2 Issuing New Common Equity | $100+20=120$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.2 Issuing New Common Equity | $10+2=12$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.2 Issuing New Common Equity | $P = \frac{120}{12} = 10$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.3 Share Repurchase | $\frac{80}{4}=20$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.3 Share Repurchase | $50-20=30$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.3 Share Repurchase | $200-80=120$ | 2.1 Equity Instruments(1).md |
| 2.1 | 3.3 Share Repurchase | $\frac{120}{30}=4$ | 2.1 Equity Instruments(1).md |
| 2.1 | Salah — menghitung post-issuance price dengan market cap lama saja | $P_{\text{new}} = \frac{100}{12} = 8.33$ | 2.1 Equity Instruments(1).md |
| 2.1 | Salah — menghitung post-issuance price dengan market cap lama saja | $P_{\text{new}} = \frac{100+20}{12} = 10$ | 2.1 Equity Instruments(1).md |
| 2.1 | Salah — repurchase dianggap otomatis menaikkan price | $P_{\text{after}} = \frac{\text{Old Equity Value}}{\text{Fewer Shares}}$ | 2.1 Equity Instruments(1).md |
| 2.1 | Salah — repurchase dianggap otomatis menaikkan price | $P_{\text{after}} = \frac{\text{Old Equity Value}-\text{Cash Paid}} {\text{Old Shares}-\text{Shares Repurchased}}$ | 2.1 Equity Instruments(1).md |
| 2.2 | 2.8 Senior vs Subordinated Debt | $\text{Lower Priority} \Rightarrow \text{Higher Loss Given Default} \Rightarrow \text{Higher Required Yield}$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.13 Yield to Call | $P_0 = \sum_{t=1}^{N_c} \frac{C}{(1+y_c)^t} + \frac{\text{Call Price}}{(1+y_c)^{N_c}}$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.15 Convertible Bonds | $\text{Conversion Price} = \frac{\text{Face Value of Bond}} {\text{Conversion Ratio}}$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.15 Convertible Bonds | $\frac{1000}{15}=66.67$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.15 Convertible Bonds | $V_T = \max \left( F,\, CR \times S_T \right)$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.15 Convertible Bonds | $\text{Straight Bond} + \text{Embedded Equity Option}$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.18 Bond Refunding | $NPV_{\text{refunding}} = PV(\text{Future After-Tax Savings}) - \text{Current Refunding Costs}$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | 2.18 Bond Refunding | $NPV_{\text{refunding}}>0$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.2 | Why Yield Differs | $\text{Required Yield} \approx \text{Base Rate} + \text{Credit Risk Compensation} + \text{Liquidity Compensation} + \text{Option/Structural Compensation}$ | 2.2 Long-Term Debt Instruments(1).md |
| 2.3 | 2.1 Working Capital dan Financing Need | $\text{Net Working Capital} = \text{Current Assets} - \text{Current Liabilities}$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.7 Cost of Trade Credit | $r_p = \frac{d}{1-d}$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.7 Cost of Trade Credit | $N=t_n-t_d$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.7 Cost of Trade Credit | $EAR = \left(1+\frac{d}{1-d}\right)^{365/N}-1$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | Example: 2/10, Net 30 | $r_{20} = \frac{2}{98} = 2.0408\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | Example: 2/10, Net 30 | $EAR = (1.020408)^{365/20}-1 \approx44.6\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.14 Discount Loan | $\text{Usable Proceeds} = F-I$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.15 Commitment Fee | $\text{Commitment Fee} = f_c \times \text{Unused Commitment}$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.15 Commitment Fee | $Interest=80{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.15 Commitment Fee | $Fee=0.005(200{,}000)=1{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.15 Commitment Fee | $Total\ Cost=81{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.16 Loan Origination Fee | $Fee=5{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.16 Loan Origination Fee | $Usable=495{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.16 Loan Origination Fee | $Interest=500{,}000\left(\frac{0.12}{4}\right)=15{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.16 Loan Origination Fee | $Repayment=515{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.16 Loan Origination Fee | $\frac{515{,}000}{495{,}000}-1 = 4.04\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.16 Loan Origination Fee | $EAR=(1.0404)^4-1\approx17.17\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.17 Compensating Balance | $\text{Usable Funds} = \text{Principal} - \text{Required Balance}$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.17 Compensating Balance | $Usable=450{,}000$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.20 EAR Commercial Paper | $r_p=\frac{F}{P}-1$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.20 EAR Commercial Paper | $EAR=(1+r_p)^4-1$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.20 EAR Commercial Paper | $r_{3m} = \frac{100{,}000}{98{,}000}-1 = 2.0408\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | 2.20 EAR Commercial Paper | $EAR = (1.020408)^4-1 \approx8.42\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | Calculation Trap | $Cost=2\%$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | Calculation Trap | $r=\frac{0.02}{0.98}$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | Calculation Trap | $r=\frac{Interest}{Face}$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.3 | Calculation Trap | $r=\frac{Repayment}{Usable\ Proceeds}-1$ | 2.3 Short and Medium-Term Finance(1).md |
| 2.4 | 2.1 Call Option | $C_T = \max(S_T-K,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $K=50$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $S_T=70$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $C_T = 70-50 = 20$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $S_T=40$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $C_T=0$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.2 Put Option | $P_T = \max(K-S_T,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $K=50,\qquad S_T=35$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Example | $P_T = 50-35 = 15$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.3 Long vs Short Position | $\text{Short Option Payoff} = -\text{Long Option Payoff}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Long Call | $\max(S_T-K,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Short Call | $-\max(S_T-K,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Long Put | $\max(K-S_T,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Short Put | $-\max(K-S_T,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Short Put | $\Pi_{\text{Long Call}} = \max(S_T-K,0)-c_0$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Short Put | $\Pi_{\text{Long Put}} = \max(K-S_T,0)-p_0$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Call | $S>K \Rightarrow \text{ITM}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Call | $S=K \Rightarrow \text{ATM}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Call | $S<K \Rightarrow \text{OTM}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Put | $S<K \Rightarrow \text{ITM}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Put | $S=K \Rightarrow \text{ATM}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | Put | $S>K \Rightarrow \text{OTM}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.7 Intrinsic Value dan Time Value | $\text{Option Value} = \text{Intrinsic Value} + \text{Time Value}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.7 Intrinsic Value dan Time Value | $\max(S-K,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.7 Intrinsic Value dan Time Value | $\max(K-S,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.8 Put-Call Parity | $C = P+S-PV(K)-PV(\text{Div})$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.8 Put-Call Parity | $S+P = C+PV(K)+PV(\text{Div})$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.9 Protective Put | $S_T+\max(K-S_T,0)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.9 Protective Put | $\max(S_T,K)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.16 Abandonment Option | $\text{Project Value with Flexibility} \ge \text{Project Value without Flexibility}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.20 Callable Bond = Issuer Option | $\text{Callable Bond Value} < \text{Otherwise Identical Non-Callable Bond Value}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.21 Convertible Bond = Investor Conversion Option | $\text{Conversion Price} = \frac{\text{Face Value}} {\text{Conversion Ratio}}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.21 Convertible Bond = Investor Conversion Option | $V_T = \max\left(F,CR\times S_T\right)$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.4 | 2.21 Convertible Bond = Investor Conversion Option | $\text{Convertible Bond} = \text{Straight Bond} + \text{Embedded Conversion Option}$ | 2.4 Derivative Securities in Corporate Finance.md |
| 2.5 | 2.2 Financing Rounds | $V_{\text{pre}} = N_{\text{old}}P$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.2 Financing Rounds | $V_{\text{post}} = V_{\text{pre}} + \text{New Capital}$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.2 Financing Rounds | $V_{\text{post}} = (N_{\text{old}}+N_{\text{new}})P$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.2 Financing Rounds | $\text{Ownership}_{\text{new}} = \frac{N_{\text{new}}} {N_{\text{old}}+N_{\text{new}}}$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.2 Financing Rounds | $\text{Ownership}_{\text{new}} = \frac{\text{Amount Invested}} {V_{\text{post}}}$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.9 Underwriting Spread | $\text{Spread per Share} = P_{\text{offer}} - P_{\text{issuer}}$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.9 Underwriting Spread | $s = \frac{ P_{\text{offer}}-P_{\text{issuer}} }{ P_{\text{offer}} }$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.9 Underwriting Spread | $\text{Underwriting Fee} = N P_{\text{offer}}s$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.10 Net Proceeds | $\text{Gross Proceeds} = N P_{\text{offer}}$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.10 Net Proceeds | $\text{Net Proceeds} = N P_{\text{offer}}(1-s)$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.10 Net Proceeds | $\text{Net Proceeds} = N P_{\text{offer}}(1-s)-F$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.12 IPO Underpricing | $R_{\text{initial}} = \frac{ P_1-P_0 }{ P_0 }$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.12 IPO Underpricing | $\text{Money Left on Table} = N(P_1-P_0)$ | 2.5 Capital Raising Methods.md |
| 2.5 | 2.15 Rights Offering | $P_{\text{ex}} = \frac{ N_0P_0+N_1P_s }{ N_0+N_1 }$ | 2.5 Capital Raising Methods.md |
| 2.5 | Calculation Trap | $V_{\text{post}} = V_{\text{pre}} - \text{New Capital}$ | 2.5 Capital Raising Methods.md |
| 2.5 | Calculation Trap | $V_{\text{post}} = V_{\text{pre}} + \text{New Capital}$ | 2.5 Capital Raising Methods.md |
| 2.5 | Calculation Trap | $R = \frac{P_1-P_0}{P_1}$ | 2.5 Capital Raising Methods.md |
| 2.5 | Calculation Trap | $R = \frac{P_1-P_0}{P_0}$ | 2.5 Capital Raising Methods.md |
| 2.5 | Calculation Trap | $P_{\text{ex}} = \frac{ N_0P_0+N_1P_s }{ N_0+N_1 }$ | 2.5 Capital Raising Methods.md |
| 3.1 | Calculation Trap | $40\%+15\%=55\%$ | 3.1 Business Entity Structures.md |
| 3.1 | Calculation Trap | $5(0.40)=2$ | 3.1 Business Entity Structures.md |
| 3.1 | Calculation Trap | $5-2=3$ | 3.1 Business Entity Structures.md |
| 3.1 | Calculation Trap | $3(0.15)=0.45$ | 3.1 Business Entity Structures.md |
| 3.1 | Calculation Trap | $2+0.45=2.45$ | 3.1 Business Entity Structures.md |
| 3.1 | Calculation Trap | $\frac{2.45}{5}=49\%$ | 3.1 Business Entity Structures.md |
| 3.2 | 3. Capital structure → WACC → firm value | $V_{op} = \sum_{t=1}^{\infty} \frac{FCF_t}{(1+WACC)^t}$ | 3.2 Sources of Finance and Capital Structure.md |
| 3.2 | 3. Capital structure → WACC → firm value | $WACC = w_d(1-T)r_d + w_s r_s$ | 3.2 Sources of Finance and Capital Structure.md |
| 3.2 | 4. Tax shield dalam MM with corporate taxes | $V_L = V_U + PV(\text{tax shield})$ | 3.2 Sources of Finance and Capital Structure.md |
| 3.2 | 4. Tax shield dalam MM with corporate taxes | $V_L = V_U + TD$ | 3.2 Sources of Finance and Capital Structure.md |
| 3.2 | I. Dividend vs share repurchase | $\text{Shares repurchased} = \frac{\text{Cash used for repurchase}}{\text{Share price}}$ | 3.2 Sources of Finance and Capital Structure.md |
| 3.3 | 1. WACC dengan Debt dan Common Equity | $WACC = w_Er_E+w_Dr_D(1-T)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 2. WACC dengan Preferred Stock | $WACC = w_Dr_D(1-T) + w_Pr_P + w_Er_E$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 2. WACC dengan Preferred Stock | $w_D+w_P+w_E=1$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 3. After-Tax Cost of Debt | $r_D^{after-tax} = r_D(1-T)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 3. After-Tax Cost of Debt | $r_D=8\%, \qquad T=30\%$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 3. After-Tax Cost of Debt | $r_D^{after-tax} = 8\%(1-0.30) = 5.6\%$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 4. Cost of Common Equity — CAPM | $r_E = r_{RF} + \beta_E(RP_M)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 4. Cost of Common Equity — CAPM | $r_E = r_{RF} + \beta_E\left(r_M-r_{RF}\right)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 5. Cost of Common Equity — DCF / Dividend Growth | $r_E = \frac{D_1}{P_0} + g$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 6. Cost of New External Common Equity dengan Flotation Cost | $r_{E,new} = \frac{D_1}{P_0(1-F)} + g$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 6. Cost of New External Common Equity dengan Flotation Cost | $P_0(1-F)<P_0$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 6. Cost of New External Common Equity dengan Flotation Cost | $r_{E,new}>r_E$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 7. Cost of Preferred Stock | $r_P = \frac{D_P}{P_{net}}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 7. Cost of Preferred Stock | $P_{net} = P_0(1-F)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 7. Cost of Preferred Stock | $r_P = \frac{D_P}{P_0(1-F)}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 8. Project Free Cash Flow | $FCF = (Revenues-Costs-Depreciation)(1-T) + Depreciation - CapEx - \Delta NWC$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 8. Project Free Cash Flow | $FCF = Unlevered\ Net\ Income + Depreciation - CapEx - \Delta NWC$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 8. Project Free Cash Flow | $Unlevered\ Net\ Income = EBIT(1-T)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Mengapa depreciation dikurangkan lalu ditambahkan kembali? | $Depreciation\ Tax\ Shield = T\times Depreciation$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 9. Perubahan Net Working Capital | $\Delta NWC_t = NWC_t-NWC_{t-1}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 9. Perubahan Net Working Capital | $\Delta NWC_t>0$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 9. Perubahan Net Working Capital | $FCF \downarrow$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 9. Perubahan Net Working Capital | $\Delta NWC_t<0$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 9. Perubahan Net Working Capital | $FCF \uparrow$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 10. NPV sebagai Link antara Cash Flow dan Cost of Capital | $NPV = \sum_{t=0}^{n} \frac{CF_t}{(1+r)^t}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | 10. NPV sebagai Link antara Cash Flow dan Cost of Capital | $NPV>0 \Rightarrow \text{Accept}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | D. Dari Component Costs ke WACC | $WACC = 0.30(9\%)(1-0.40) + 0.10(8.2\%) + 0.60(11.6\%)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | D. Dari Component Costs ke WACC | $WACC = 1.62\% + 0.82\% + 6.96\%$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | D. Dari Component Costs ke WACC | $\boxed{WACC=9.40\%}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | G. Kapan Company WACC Layak Dipakai? | $r_{project}>WACC_{company}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | G. Kapan Company WACC Layak Dipakai? | $r_{project}<WACC_{company}$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Calculation Trap | $WACC = w_Dr_D+w_Er_E$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Calculation Trap | $WACC = w_Dr_D(1-T)+w_Er_E$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Calculation Trap | $FCF = EBIT(1-T)$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Calculation Trap | $FCF = EBIT(1-T) + Depreciation - CapEx - \Delta NWC$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Calculation Trap | $FCF = \cdots+\Delta NWC$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.3 | Calculation Trap | $FCF = \cdots-\Delta NWC$ | 3.3 Capital Budgeting and Cost of Capital.md |
| 3.4 | 3.1 Definition | $NPV = PV(Benefits)-PV(Costs)$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.1 Definition | $\boxed{ NPV = \sum_{t=0}^{n} \frac{CF_t}{(1+r)^t} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.2 Decision Rule | $NPV>0 \Rightarrow \text{Accept}$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.2 Decision Rule | $NPV<0 \Rightarrow \text{Reject}$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.2 Decision Rule | $NPV=0$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.3 Financial Meaning | $NPV=500$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $CF_0=-100{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $CF_1=40{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $CF_2=45{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $CF_3=50{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $r=10\%$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $NPV = -100{,}000 + \frac{40{,}000}{1.10} + \frac{45{,}000}{1.10^2} + \frac{50{,}000}{1.10^3}$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.4 Worked Example — NPV | $NPV>0$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.5 NPV dan Timing | $PV_t = \frac{CF_t}{(1+r)^t}$ | 3.4 Investment Return Methods.md |
| 3.4 | 3.6 NPV Profile | $NPV=f(r)$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.1 Definition | $NPV=0$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.1 Definition | $\boxed{ 0 = \sum_{t=0}^{n} \frac{CF_t}{(1+IRR)^t} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.2 Decision Rule | $IRR>r \Rightarrow \text{Accept}$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.2 Decision Rule | $IRR<r \Rightarrow \text{Reject}$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.3 IRR sebagai Margin for Error | $IRR=18\%$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.3 IRR sebagai Margin for Error | $r=12\%$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.3 IRR sebagai Margin for Error | $18\%-12\%=6\%$ | 3.4 Investment Return Methods.md |
| 3.4 | 4.4 IRR Problem 1 — Multiple IRRs | $0 = -100 + \frac{230}{1+IRR} - \frac{132}{(1+IRR)^2}$ | 3.4 Investment Return Methods.md |
| 3.4 | 5.5 Crossover Rate | $NPV_A=NPV_B$ | 3.4 Investment Return Methods.md |
| 3.4 | 5.5 Crossover Rate | $\Delta CF_t=CF_{A,t}-CF_{B,t}$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.2 Formula | $PV(\text{outflows})(1+MIRR)^n = TV(\text{inflows})$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.2 Formula | $\boxed{ MIRR = \left( \frac{TV(\text{inflows})} {PV(\text{outflows})} \right)^{1/n} -1 }$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $CF_0=-100$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $CF_1=40,\quad CF_2=50,\quad CF_3=60$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $r=10\%$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $TV = 40(1.10)^2 + 50(1.10) + 60$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $TV = 48.4+55+60 = 163.4$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $PV_{out}=100$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $100(1+MIRR)^3=163.4$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $MIRR = (1.634)^{1/3}-1$ | 3.4 Investment Return Methods.md |
| 3.4 | 6.4 Worked Example — MIRR | $\boxed{MIRR\approx17.8\%}$ | 3.4 Investment Return Methods.md |
| 3.4 | 7.1 Definition | $\boxed{ Payback = \frac{Initial\ Investment} {Annual\ Net\ Cash\ Flow} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 7.2 Unequal Cash Flows | $Payback = 2+\frac{20{,}000}{35{,}000}$ | 3.4 Investment Return Methods.md |
| 3.4 | 7.2 Unequal Cash Flows | $\boxed{Payback=2.57\text{ years}}$ | 3.4 Investment Return Methods.md |
| 3.4 | 8.1 Definition | $PV(CF_t)=\frac{CF_t}{(1+r)^t}$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.1 Brigham Definition | $\boxed{ PI = \frac{PV\ of\ Future\ Cash\ Inflows} {Initial\ Cost} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.1 Brigham Definition | $PI>1 \Rightarrow NPV>0$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.1 Brigham Definition | $PV(inflows)>Initial\ Cost$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.2 Berk & DeMarzo Definition | $\boxed{ PI = \frac{Value\ Created} {Resource\ Consumed} = \frac{NPV} {Resource\ Consumed} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.2 Berk & DeMarzo Definition | $PI = \frac{NPV}{Initial\ Investment}$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.2 Berk & DeMarzo Definition | $PI>0 \Rightarrow NPV>0$ | 3.4 Investment Return Methods.md |
| 3.4 | 9.3 Why PI Is Useful | $PI = \frac{NPV} {Resource\ Consumed}$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.1 Definition | $\boxed{ Annual\ Rate\ of\ Return = \frac{Expected\ Annual\ Net\ Income} {Average\ Investment} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.1 Definition | $\boxed{ Average\ Investment = \frac{Original\ Investment+Ending\ Value} {2} }$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.1 Definition | $Average\ Investment = \frac{Initial\ Cost+Salvage\ Value}{2}$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.2 Worked Example — Weygandt Logic | $6\text{ years}$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.2 Worked Example — Weygandt Logic | $\frac{900{,}000}{6} = 150{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.2 Worked Example — Weygandt Logic | $400{,}000-190{,}000-150{,}000 = 60{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.2 Worked Example — Weygandt Logic | $\frac{900{,}000+0}{2} = 450{,}000$ | 3.4 Investment Return Methods.md |
| 3.4 | 10.2 Worked Example — Weygandt Logic | $ARR = \frac{60{,}000}{450{,}000} = \boxed{13.33\%}$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $NPV_A=20$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $IRR_A=18\%$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $NPV_B=15$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $IRR_B=22\%$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $r=10\%$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $NPV_A>0,\quad NPV_B>0$ | 3.4 Investment Return Methods.md |
| 3.4 | Case A — NPV vs IRR for Independent Projects | $IRR_A>10\%,\quad IRR_B>10\%$ | 3.4 Investment Return Methods.md |
| 3.4 | Case B — Mutually Exclusive Conflict | $NPV_A>NPV_B$ | 3.4 Investment Return Methods.md |
| 3.4 | Case B — Mutually Exclusive Conflict | $\boxed{\text{Choose A}}$ | 3.4 Investment Return Methods.md |
| 3.4 | Case B — Mutually Exclusive Conflict | $IRR_B>IRR_A$ | 3.4 Investment Return Methods.md |
| 3.4 | Case C — Payback vs NPV | $PB_X=1$ | 3.4 Investment Return Methods.md |
| 3.4 | Case C — Payback vs NPV | $PB_Y=2+\frac{20}{100}=2.2$ | 3.4 Investment Return Methods.md |
| 3.4 | Case D — PI Convention Trap | $PI_B = \frac{120}{100} = \boxed{1.20}$ | 3.4 Investment Return Methods.md |
| 3.4 | Case D — PI Convention Trap | $NPV=120-100=20$ | 3.4 Investment Return Methods.md |
| 3.4 | Case D — PI Convention Trap | $PI_{BD} = \frac{20}{100} = \boxed{0.20}$ | 3.4 Investment Return Methods.md |
| 3.4 | Case E — ARR vs IRR Trap | $ARR=\frac{30}{150}=20\%$ | 3.4 Investment Return Methods.md |
| 3.4 | 13.3 Equivalent Annual Annuity (EAA) | $NPV = EAA \times PVIFA(r,n)$ | 3.4 Investment Return Methods.md |
| 3.4 | 13.3 Equivalent Annual Annuity (EAA) | $\boxed{ EAA = \frac{NPV}{PVIFA(r,n)} }$ | 3.4 Investment Return Methods.md |
| 3.4 | Section 14 — Capital Rationing | $\boxed{ \text{Maximize total NPV subject to constraints} }$ | 3.4 Investment Return Methods.md |
| 5.1 | 2.6 Common Stock — Residual Ownership | $\text{Expected Total Return} = \text{Expected Dividend Yield} + \text{Expected Capital Gains Yield}$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 2.6 Common Stock — Residual Ownership | $\hat r_s = \frac{D_1}{P_0}+g$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 2.7 Stock Market Price vs Intrinsic Value | $\hat P_0=P_0$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 2.8 Preferred Stock — Hybrid Characteristics | $V_{ps}=\frac{D_{ps}}{r_{ps}}$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 2.10 Volatility and Standard Deviation | $E[R] = \sum_i p_i R_i$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 2.10 Volatility and Standard Deviation | $Var(R) = \sum_i p_i\left(R_i-E[R]\right)^2$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 2.10 Volatility and Standard Deviation | $SD(R)=\sqrt{Var(R)}$ | 5.1 Investment Asset Characteristics.md |
| 5.1 | 3.3 Corporate Bond | $P_{bond} = \sum_{t=1}^{N}\frac{C}{(1+r)^t} + \frac{M}{(1+r)^N}$ | 5.1 Investment Asset Characteristics.md |
| 5.2 | 2.1 Forward Contract | $\text{Payoff}_{\text{long forward}} = S_T-K$ | 5.2 Derivative Investments.md |
| 5.2 | 2.1 Forward Contract | $\text{Payoff}_{\text{short forward}} = K-S_T$ | 5.2 Derivative Investments.md |
| 5.2 | 2.1 Forward Contract | $(S_T-K)+(K-S_T)=0$ | 5.2 Derivative Investments.md |
| 5.2 | Call payoff | $C_T=\max(S_T-K,0)$ | 5.2 Derivative Investments.md |
| 5.2 | Put payoff | $P_T=\max(K-S_T,0)$ | 5.2 Derivative Investments.md |
| 5.2 | Short option | $\text{Payoff}_{\text{short call}}=-\max(S_T-K,0)$ | 5.2 Derivative Investments.md |
| 5.2 | Short option | $\text{Payoff}_{\text{short put}}=-\max(K-S_T,0)$ | 5.2 Derivative Investments.md |
| 5.2 | Short option | $\Pi_{\text{long call}}=\max(S_T-K,0)-C_0$ | 5.2 Derivative Investments.md |
| 5.2 | Exercise value / intrinsic value | $\text{Intrinsic Value}_{call}=\max(S-K,0)$ | 5.2 Derivative Investments.md |
| 5.2 | Exercise value / intrinsic value | $\text{Intrinsic Value}_{put}=\max(K-S,0)$ | 5.2 Derivative Investments.md |
| 5.2 | Exercise value / intrinsic value | $\text{Option Value}=\text{Intrinsic Value}+\text{Time Value}$ | 5.2 Derivative Investments.md |
| 5.2 | Basic net-rate logic | $-(\text{LIBOR}+a)+\text{LIBOR}-f =-(a+f)$ | 5.2 Derivative Investments.md |
| 5.2 | 3.1 Hedging a Future Purchase | $\text{Price naik} \Rightarrow \text{cost naik}$ | 5.2 Derivative Investments.md |
| 5.2 | 3.2 Hedging a Future Sale | $\text{Price turun} \Rightarrow \text{revenue turun}$ | 5.2 Derivative Investments.md |
| 5.2 | Case D — Interest-Rate Swap Mechanics | $\text{LIBOR}+1\%$ | 5.2 Derivative Investments.md |
| 5.3 | Section 1 — Intuisi & Big Picture | $P_0 = \sum_{t=1}^{n} \frac{E(CF_t)}{(1+r)^t}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 2.3 Risk | $\text{Required return} = \text{base return} + \text{risk compensation}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 2.4 Inflation | $(1+r_n) = (1+r_r)(1+\pi)$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 2.4 Inflation | $r_n \approx r_r + \pi$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 3.1 Fixed-Income Securities | $P_0 = \sum_{t=1}^{n} \frac{C}{(1+y)^t} + \frac{F}{(1+y)^n}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 3.1 Fixed-Income Securities | $y \uparrow \Rightarrow P_0 \downarrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 3.1 Fixed-Income Securities | $y \downarrow \Rightarrow P_0 \uparrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 4.3 Real Purchasing-Power Channel | $r_{\text{real}} \approx r_{\text{nominal}}-\pi$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 4.3 Real Purchasing-Power Channel | $r_{\text{real}} \approx 8\%-5\% = 3\%$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 4.3 Real Purchasing-Power Channel | $r_{\text{real}} = \frac{1+r_{\text{nominal}}}{1+\pi}-1$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 8.1 Diversifiable vs Systematic Risk | $E[R_i] = r_f+\beta_i\left(E[R_M]-r_f\right)$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Section 10 — Economic Factors dan Common Stock Prices | $P_0 = \frac{D_1}{r_s-g}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 10.1 Expected-Cash-Flow / Growth Channel | $D_1 \uparrow \Rightarrow P_0 \uparrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 10.1 Expected-Cash-Flow / Growth Channel | $g \uparrow \Rightarrow P_0 \uparrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 10.2 Required-Return Channel | $r_s \uparrow \Rightarrow P_0 \downarrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | 11.1 Interest-Rate Effect | $\text{Market yield} \uparrow \Rightarrow \text{Bond price} \downarrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Section 13 — From Market Price to Total Return | $R = \frac{D_1+P_1-P_0}{P_0}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Section 13 — From Market Price to Total Return | $R = \frac{D_1}{P_0} + \frac{P_1-P_0}{P_0}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Section 13 — From Market Price to Total Return | $\text{Total Return} = \text{Dividend Yield} + \text{Capital Gain/Loss Yield}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Present-Value Framework | $P_0 = \sum_{t=1}^{n} \frac{E(CF_t)}{(1+r)^t}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Nominal–Real–Inflation Relation | $(1+r_n) = (1+r_r)(1+\pi)$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Nominal–Real–Inflation Relation | $r_n \approx r_r+\pi$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Exact Real Return | $r_r = \frac{1+r_n}{1+\pi}-1$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Bond Price | $P_0 = \sum_{t=1}^{n} \frac{C}{(1+y)^t} + \frac{F}{(1+y)^n}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Bond Price | $y \uparrow \Rightarrow P_0 \downarrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Constant-Growth Stock Value | $P_0 = \frac{D_1}{r_s-g}$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Constant-Growth Stock Value | $D_1 \uparrow \Rightarrow P_0 \uparrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Constant-Growth Stock Value | $g \uparrow \Rightarrow P_0 \uparrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Constant-Growth Stock Value | $r_s \uparrow \Rightarrow P_0 \downarrow$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Expected Return under Market-Risk Framework | $E[R_i] = r_f+\beta_i\left(E[R_M]-r_f\right)$ | 5.3 Economic Influences on Markets.md |
| 5.3 | Holding-Period Stock Return | $R = \frac{D_1+P_1-P_0}{P_0}$ | 5.3 Economic Influences on Markets.md |
| 5.4 | Lapisan A — Asset Return | $R_t = \frac{Div_t+P_t-P_{t-1}}{P_{t-1}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Lapisan A — Asset Return | $\text{Total Return} = \text{Coupon/Interest Income} + \text{Capital Gain/Loss}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.1 Stock Total Return | $R_t = \frac{Div_t+P_t-P_{t-1}}{P_{t-1}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.1 Stock Total Return | $R_t = \frac{Div_t}{P_{t-1}} + \frac{P_t-P_{t-1}}{P_{t-1}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.1 Stock Total Return | $\boxed{ \text{Total Return} = \text{Dividend Yield} + \text{Capital Gain Yield} }$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.1 Stock Total Return | $R = \frac{4+110-100}{100} = 14\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.1 Stock Total Return | $Dividend\ Yield=4\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.1 Stock Total Return | $Capital\ Gain\ Yield=10\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.2 Expected Stock Return dalam Constant-Growth Framework | $\hat r_s = \frac{D_1}{P_0}+g$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.2 Expected Stock Return dalam Constant-Growth Framework | $\boxed{ \text{Expected Stock Return} = \text{Expected Dividend Yield} + \text{Expected Capital-Gains Yield} }$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 2.2 Expected Stock Return dalam Constant-Growth Framework | $\text{Expected Return} \approx \text{Required Return}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 4.2 Volatility dan Excess Return | $\text{Excess Return} = \text{Asset Return} - \text{Risk-Free Return}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 6.1 Arithmetic Average Return | $\bar R = \frac{1}{T} \sum_{t=1}^{T}R_t$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 6.2 Compound Annual Return / CAGR | $R_{compound} = \left[ (1+R_1)(1+R_2)\cdots(1+R_T) \right]^{1/T}-1$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 6.2 Compound Annual Return / CAGR | $R_{compound} = \left( \frac{Final\ Value}{Initial\ Value} \right)^{1/T}-1$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 6.3 Volatility Drag | $\bar R = \frac{20\%-20\%}{2} = 0\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 6.3 Volatility Drag | $1(1.20)(0.80) = 0.96$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 6.3 Volatility Drag | $R_{compound} = 0.96^{1/2}-1 \approx -2.02\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | One-Line Memory | $SE(\bar R) = \frac{SD(R)}{\sqrt{T}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | One-Line Memory | $SE = \frac{20.3\%}{\sqrt{86}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | One-Line Memory | $11.7\% \pm 4.4\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | One-Line Memory | $7.3\% \text{ to } 16.1\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Pricing Implication | $\boxed{ \text{Priced Risk} = \text{Systematic Risk} }$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 9.3 Inflation | $r_{real} \approx r_{nominal}-\pi$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 9.3 Inflation | $1+r_{nominal} = (1+r_{real})(1+\pi)$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 10.2 Beta | $\beta_i = \frac{Cov(R_i,R_M)} {Var(R_M)}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 10.2 Beta | $\boxed{ r_i = r_f + \beta_i \left( E[R_M]-r_f \right) }$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 10.2 Beta | $\boxed{ \text{Required Return} = \text{Risk-Free Rate} + \text{Beta} \times \text{Market Risk Premium} }$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Compensation for systematic risk | $\beta_i(E[R_M]-r_f)$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $r_f=5\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $E[R_M]-r_f=6\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $\beta=1.48$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $r = 5\%+1.48(6\%) = 13.88\% \approx 13.9\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $r = 5\%+0.20(6\%) = 6.2\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $\beta_i<0$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $r_i<r_f$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $RPM = E[R_M]-r_f$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 11.2 Example | $Historical\ Premium = \bar R_M-\bar R_f$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example | $r_i = r_f+\beta_i(E[R_M]-r_f)$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example | $\alpha_i = E[R_i]-r_i$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example | $\alpha_i>0$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 17.2 Corporate Bonds | $Yield\uparrow \Rightarrow Price\downarrow$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 17.4 Small Stocks | $1+r_n = (1+r_r)(1+\pi)$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 17.4 Small Stocks | $r_r = \frac{1+r_n}{1+\pi}-1$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 17.4 Small Stocks | $r_r \approx r_n-\pi$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 17.4 Small Stocks | $r_r \approx 4\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | 17.4 Small Stocks | $r_r = \frac{1.10}{1.06}-1 \approx 3.77\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Arithmetic Average | $\bar R = \frac{30\%-20\%}{2} = 5\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Wealth Outcome | $1(1.30)(0.80) = 1.04$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | CAGR | $R_{compound} = 1.04^{1/2}-1 \approx 1.98\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 2 — Excess Return | $Excess\ Return = 12\%-4\% = 8\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 3 — CAPM | $r_f=4\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 3 — CAPM | $E[R_M]=10\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 3 — CAPM | $\beta_i=1.25$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 3 — CAPM | $10\%-4\% = 6\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 3 — CAPM | $r_i = 4\%+1.25(6\%) = 11.5\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 4 — Negative Beta | $r_f=4\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 4 — Negative Beta | $E[R_M]-r_f=6\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 4 — Negative Beta | $\beta=-0.5$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Example 4 — Negative Beta | $r = 4\%-0.5(6\%) = 1\%$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Total Stock Return | $R_t = \frac{Div_t+P_t-P_{t-1}}{P_{t-1}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Dividend Yield | $Dividend\ Yield = \frac{Div_t}{P_{t-1}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Capital Gain Yield | $Capital\ Gain\ Yield = \frac{P_t-P_{t-1}}{P_{t-1}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Expected Return | $E[R] = \sum_i p_iR_i$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Arithmetic Historical Average | $\bar R = \frac{1}{T}\sum_{t=1}^{T}R_t$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Compound Annual Return | $R_{compound} = \left[ \prod_{t=1}^{T}(1+R_t) \right]^{1/T}-1$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Historical Variance Estimate | $Var(R) = \frac{1}{T-1} \sum_{t=1}^{T}(R_t-\bar R)^2$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Historical Volatility | $SD(R) = \sqrt{Var(R)}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Standard Error of Historical Mean | $SE(\bar R) = \frac{SD(R)}{\sqrt{T}}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Excess Return | $R_{excess} = R_i-R_f$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Beta | $\beta_i = \frac{Cov(R_i,R_M)} {Var(R_M)}$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | CAPM | $r_i = r_f+\beta_i(E[R_M]-r_f)$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Market Risk Premium | $RPM = E[R_M]-r_f$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Alpha | $\alpha_i = E[R_i] - \left[ r_f+\beta_i(E[R_M]-r_f) \right]$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Nominal–Real Return Relationship | $1+r_n = (1+r_r)(1+\pi)$ | 5.4 Return Relationships and Economic Variables.md |
| 5.4 | Approximate Real Return | $r_r \approx r_n-\pi$ | 5.4 Return Relationships and Economic Variables.md |

> [!NOTE] Extraction QA
> - Valid formula blocks retained: **461**  
> - Malformed/prose-contaminated blocks removed: **20**  
> - Formula cells wrapped in code spans: **0**

## 7. Explicit Trap / Warning Inventory

Callout ini berguna karena menunjukkan titik yang topic notes sendiri sudah tandai sebagai rawan salah paham. Stage 2 harus memeriksa apakah trap tersebut:
1. benar-benar distinction antar-source;
2. hanya pedagogy;
3. membutuhkan canonical wording;
4. atau perlu diturunkan prioritasnya.

| Topic | Current Label | Current Note |
|---|---|---|
| 1.1 | Scope Boundary | [CORE CF4] Fokus subtopik ini adalah prinsip perpajakan: personal tax, corporate tax, dan taxation of institutional investments. Materi inti mencakup progressive taxation, marginal vs average tax rate, taxation of interest/dividend/capital gains, tax treatment interest vs dividend bagi perusahaan, dan efek pajak pada after-tax return. Angka tarif, bracket, holding-period rule, carryback/carryforward, dan persentase d |
| 1.1 | Prinsip Besar | Untuk hampir semua soal pajak CF4, biasakan bertanya: “berapa cash/income yang tersisa setelah tax?” |
| 1.1 | Warning | Jangan menggunakan formula sederhana ini bila hanya sebagian income yang taxable. Jika hanya proporsi $p$ yang dikenai tax rate $T$, maka effective tax rate terhadap gross income adalah $pT$. |
| 1.1 | Jangan Salah Pikir | 1. Marginal rate ≠ average rate. Marginal adalah tax atas next dollar; average adalah total tax dibagi total taxable income. 2. Highest bracket ≠ seluruh income dikenai highest rate. Dalam progressive schedule, bracket sebelumnya tetap dikenai rate masing-masing. 3. Interest paid ≠ dividend paid untuk tax purpose. Dalam source Brigham, interest deductible, dividend tidak. |
| 1.1 | Important | Angka tarif dan bracket dalam contoh berikut mengikuti mechanics textbook Brigham & Ehrhardt dan bersifat historis. Fokus ujian adalah reasoning dan perhitungan berdasarkan data yang diberikan dalam soal. |
| 1.1 | Exam Trap — Case A | - Trap: $65{,}000\times25\%=16{,}250$. - Mengapa distractor terlihat benar: kandidat mengira marginal rate berlaku atas seluruh income. - Cara menghindari: pisahkan base tax dan excess over bracket base. |
| 1.1 | Exam Trap — Case B | - Trap: memilih bond karena 8% > 7%. - Mengapa distractor terlihat benar: kandidat berhenti di pre-tax yield. - Cara menghindari: selalu ubah setiap alternative menjadi after-tax basis. |
| 1.1 | Exam Trap — Case C | - Trap: $5.5\%(1-35\%)$. - Mengapa distractor terlihat benar: formula after-tax diterapkan pada security yang justru tax-exempt. - Cara menghindari: tentukan dulu security mana yang taxable. |
| 1.1 | Exam Trap — Case D | Jangan menyimpulkan “debt selalu lebih baik”. Tax advantage hanyalah satu faktor; debt juga menciptakan fixed obligation dan financial risk. |
| 1.1 | Profit ≠ Cash Flow | Taxation memperkuat perbedaan ini: accounting tax expense dan actual cash tax payment dapat memiliki timing yang berbeda. Detail deferred tax adalah topik accounting yang lebih khusus dan tidak menjadi fokus utama 1.1. |
| 1.1 | Definition Trap | Marginal tax rate vs Average tax rate Marginal = rate atas income tambahan terakhir. Average = total tax / total taxable income. |
| 1.1 | Logic Trap | - Higher pre-tax yield ≠ higher after-tax yield. - Interest paid dan dividend paid bukan economic/tax equivalent. Dalam Brigham, interest deductible; dividend tidak. - Tax-exempt yield tidak boleh dikurangi tax lagi. |
| 1.1 | Calculation Trap | Salah — menerapkan marginal rate pada seluruh income $\text{Tax}=65{,}000(25\%)=16{,}250$ |
| 1.1 | Calculation Trap | Salah — tax dividend institusi atas seluruh dividend ketika ada exclusion $\text{Tax}=D\times T_c$ |
| 1.1 | Interpretation Trap | Misalkan setelah tax, preferred stock menghasilkan 6.265% dan bond 5.2%. Kesimpulan yang valid hanya: preferred stock lebih unggul dari sisi after-tax yield berdasarkan assumptions soal. Kesimpulan yang tidak valid: “preferred stock pasti investasi lebih baik.” Risiko kredit, market risk, liquidity, call features, dan lainnya belum dipertimbangkan. |
| 1.1 | Red Flags |  |
| 1.1 | Source Note | Substansi taxation mechanics pada note 1.1 terutama berasal dari Brigham & Ehrhardt Bab 2 §2.9, karena bagian inilah dari referensi Topik 1 yang secara langsung membahas corporate taxation, personal taxation, serta taxation of corporate/institutional investments. Weygandt dan Robinson digunakan hanya sebagai konteks accounting/financial reporting yang relevan; note ini tidak menambahkan tax rules dari luar source yan |
| 1.2 | Scope Boundary | Fokus subtopik ini adalah mengapa perusahaan menyediakan financial accounts dan annual reports, kepada siapa informasi tersebut ditujukan, mengapa pelaporan harus distandardisasi dan diregulasi, serta apa peran financial statements, notes, management commentary, audit, dan regulatory filings dalam ekosistem pelaporan. Detail mechanics penyusunan setiap statement dibahas lebih dalam di 1.5 Financial Statements Constru |
| 1.2 | Definition Trap | Financial reporting ≠ financial statement analysis. Reporting menghasilkan dan menyampaikan informasi; analysis menggunakan informasi tersebut untuk membuat keputusan. |
| 1.2 | Exam Note | Jangan menghafal “annual report = empat statements saja”. Annual report adalah paket informasi yang lebih luas. Financial statements adalah core-nya, tetapi terdapat notes dan supplementary information. |
| 1.2 | Jangan Salah Pikir | 1. Audit ≠ guarantee bahwa perusahaan sehat atau tidak akan bangkrut. 2. Audit opinion ≠ opini bahwa saham layak dibeli. 3. Audited financial statements ≠ seluruh annual report otomatis audited. Management commentary biasanya perlu dinilai terpisah. |
| 1.2 | Exam Trap — Case A | - Trap: Menganggap annual report dan audited financial statements identik. - Mengapa distractor terlihat benar: Auditor’s report memang berada dalam annual report. - Cara menghindari: Pisahkan document package dari specific statements covered by audit opinion. |
| 1.2 | Exam Trap — Case B | - Trap: Mengira standards menghilangkan seluruh judgment. - Mengapa distractor terlihat benar: Standardization terdengar seperti “semua harus sama”. - Cara menghindari: Standards membatasi dan mengarahkan judgment; tidak menghapus seluruh judgment. |
| 1.2 | Exam Trap — Case C | - Trap: “Audited = useful, unaudited = useless.” - Mengapa distractor terlihat benar: Audit meningkatkan credibility. - Cara menghindari: Financial analysis menggunakan multiple information sources dengan tingkat assurance berbeda. |
| 1.2 | Profit ≠ Cash Flow | Financial reporting menyediakan beberapa statements karena satu angka tidak cukup menggambarkan perusahaan. Net income dan cash flow dapat berbeda akibat timing recognition, accruals, credit transactions, depreciation, dan perubahan working capital. |
| 1.2 | Definition Trap | Financial reporting vs financial statements Financial reporting lebih luas; financial statements merupakan bagian inti dari financial reporting. |
| 1.2 | Definition Trap | Annual report vs regulatory filing Keduanya dapat overlap tetapi tidak harus identik. Dalam contoh AS pada Robinson, annual report to shareholders berbeda konsep dari mandatory annual SEC filing seperti Form 10-K. |
| 1.2 | Definition Trap | Standard setter vs regulator Standard setter terutama mengembangkan accounting standards; regulator terutama menetapkan/enforce legal reporting dan filing requirements di yurisdiksinya. |
| 1.2 | Logic Trap | “Karena management mengetahui bisnis paling baik, management commentary sudah cukup.” Salah. Management commentary berguna tetapi berasal dari management perspective dan biasanya bukan substitute bagi audited financial statements dan independent analysis. |
| 1.2 | Logic Trap | “Kalau financial statements sudah audited, tidak perlu notes.” Salah. Notes merupakan bagian integral complete financial statements dan penting untuk memahami policies, estimates, commitments, dan detail angka. |
| 1.2 | Logic Trap | “Tujuan reporting adalah memberi tahu investor berapa harga saham yang benar.” Salah. Reporting menyediakan decision-useful information; valuation dan investment decision tetap dilakukan oleh users/analysts. |
| 1.2 | Interpretation Trap | Financial statements dapat disusun sesuai standards dan tetap membutuhkan judgment. Compliance dengan standards tidak berarti angka bebas dari estimates, assumptions, atau uncertainty. |
| 1.2 | Red Flags |  |
| 1.2 | Source Note | Untuk subtopik 1.2, Robinson merupakan sumber paling substantif karena secara langsung membahas tujuan financial reporting, financial statements dan supplementary information, management commentary, audit, reporting standards, regulators, dan filing requirements. Weygandt memperkuat framing accounting sebagai proses komunikasi serta peran internal/external users dan standard-setting. Brigham & Ehrhardt memberikan per |
| 1.3 | Scope Boundary | [CORE CF4] Subtopik ini mencakup basic accounting concepts and terminology, qualitative characteristics of useful financial information, basic assumptions dan measurement principles, sumber utama accounting regulation, serta cara memandang sustainability dalam konteks lingkungan, sosial, dan ekonomi. Detail penyusunan jurnal dan debit/credit dibahas lebih tepat di 1.5 Financial Statements Construction, sedangkan rati |
| 1.3 | Definition Trap | Relevance ≠ faithful representation. Informasi bisa sangat relevan tetapi jika measurement-nya tidak credible, decision usefulness turun. Sebaliknya, informasi bisa sangat akurat secara mekanis tetapi kurang relevan untuk decision tertentu. |
| 1.3 | Profit ≠ Cash Flow | Revenue bukan selalu cash received. Expense bukan selalu cash paid. Karena itu net income tidak otomatis sama dengan net cash flow. |
| 1.3 | Trap | Going concern bukan prediksi bahwa perusahaan pasti bertahan selamanya. Ini adalah basis preparation, bukan guarantee. |
| 1.3 | Important | Detail transaction mechanics dan penyusunan statements akan dibahas lebih dalam di 1.4 Company Account Structure dan 1.5 Financial Statements Construction. Pada 1.3, fokusnya adalah conceptual meaning. |
| 1.3 | Important | Tidak semua environmental effect otomatis muncul sebagai asset/liability/expense dalam financial statements. Recognition tetap bergantung pada accounting rules dan measurability. |
| 1.3 | Exam Trap | Sustainability ≠ philanthropy saja. Sustainability harus dipahami sebagai konteks long-term viability dan dampak ekonomi-sosial-lingkungan, bukan sekadar corporate donation atau “green marketing”. |
| 1.3 | Jangan Salah Pikir | 1. Measurable ≠ important. Sesuatu bisa penting tetapi sulit dicatat dalam monetary terms. 2. Accounting standards ≠ economic reality itu sendiri. Standards adalah framework untuk merepresentasikan reality. 3. Consistency ≠ never change. Change dapat legitimate bila required/justified dan properly disclosed. |
| 1.3 | Exam Trap — Case A | - Trap: “Kalau valuable berarti asset.” - Mengapa distractor terlihat benar: asset memang berkaitan dengan economic resources. - Cara menghindari: pisahkan economic importance dari accounting recognition. |
| 1.3 | Exam Trap — Case B | - Trap: Mengira “lebih mudah diverifikasi = selalu lebih baik”. - Mengapa distractor terlihat benar: reliability sangat intuitif. - Cara menghindari: ingat hierarchy: Relevance + Faithful Representation adalah fundamental. |
| 1.3 | Exam Trap — Case C | - Trap: Profit naik → perusahaan pasti membaik. - Mengapa distractor terlihat benar: profit adalah ukuran performance utama. - Cara menghindari: bedakan current accounting outcome dengan long-term economic value. |
| 1.3 | Definition Trap | Relevance vs Faithful Representation Relevance = mampu memengaruhi decision. Faithful representation = representasi economic phenomenon secara faithful. |
| 1.3 | Logic Trap | - Important ≠ recognized. Economic importance tidak otomatis menghasilkan accounting asset/liability. - Profit ≠ cash flow. Accrual accounting memisahkan timing recognition dari cash. - Historical cost ≠ market value. Cost dapat tetap berbeda dari current value. |
| 1.3 | Calculation Trap | Misalkan assets = Rp500 dan liabilities = Rp320. Salah |
| 1.3 | Interpretation Trap | Sebuah perusahaan memiliki sustainability narrative yang sangat positif. Itu tidak otomatis membuktikan financial health. Sebaliknya, profit tinggi juga tidak otomatis membuktikan environmental/social sustainability. Keduanya harus dianalisis dalam konteks yang tepat dan dengan memahami mana informasi yang recognized, measured, disclosed, atau hanya qualitative commentary. |
| 1.3 | Red Flags |  |
| 1.3 | Source Note | Untuk subtopik 1.3, Robinson menjadi sumber utama conceptual framework, qualitative characteristics, assumptions, presentation features, dan accounting regulatory architecture. Weygandt menjadi sumber utama basic accounting terminology, measurement principles, assumptions, accounting equation, ethics, serta contoh konkret sustainability melalui People/Community/Planet framing. Brigham & Ehrhardt memberi economic inte |
| 1.4 | Scope Boundary | [CORE CF4] Fokus subtopik ini adalah arsitektur financial accounts: apa saja komponen utama laporan perusahaan, apa tujuan masing-masing statement, bagaimana statement saling terhubung, serta bagaimana laporan berubah ketika reporting entity adalah group yang terdiri dari parent dan subsidiary. Detail debit/credit dan penyusunan statement dari daftar transaksi dibahas lebih dalam di 1.5 Financial Statements Construct |
| 1.4 | Jangan Salah Pikir | Perbedaan urutan penyajian tidak mengubah fundamental relationship: $A=L+E$ |
| 1.4 | Retained Earnings ≠ Cash | Retained earnings adalah equity account / claim against assets, bukan rekening kas. Perusahaan dapat memiliki retained earnings tinggi tetapi cash rendah karena earnings telah diinvestasikan dalam inventory, receivables, plant, equipment, atau assets lain. |
| 1.4 | Profit ≠ Cash Flow | Revenue dapat diakui sebelum cash diterima, dan expense dapat diakui sebelum atau sesudah cash dibayar. Karena itu, net income dan operating cash flow tidak harus sama pada satu periode. |
| 1.4 | Exam Trap | Jangan menganggap notes sebagai “tambahan opsional”. Dalam complete financial statements menurut framing Robinson, notes merupakan integral part dari laporan. |
| 1.4 | Definition Trap | Control ≠ 100% ownership. Parent dapat mengendalikan subsidiary meskipun masih ada outside shareholders. |
| 1.4 | Jangan Salah Pikir | 1. Consolidated accounts bukan sekadar menjumlahkan parent + subsidiary. 2. 80% ownership tidak berarti hanya 80% revenue subsidiary dimasukkan line-by-line ke consolidated income statement. 3. Retained earnings bukan cash. |
| 1.4 | Exam Trap — Case A | - Trap: Menganggap equity = cash yang tersedia bagi shareholders. - Mengapa distractor terlihat benar: Equity adalah hak residual pemilik, sehingga mudah dibayangkan sebagai “uang pemilik”. - Cara menghindari: Ingat equity adalah claim on net assets, bukan cash account. |
| 1.4 | Exam Trap — Case B | - Trap: Menggunakan ownership percentage untuk “proportionally consolidate” setiap line item. - Mengapa distractor terlihat benar: 80% ownership terdengar seperti seharusnya hanya 80% revenue/expense yang dimiliki. - Cara menghindari: Control first, NCI second. |
| 1.4 | Exam Trap — Case C | - Trap: RE increase = cash increase. - Mengapa distractor terlihat benar: Dividends memang mengurangi retained earnings dan biasanya melibatkan cash, sehingga hubungan tampak satu-ke-satu. - Cara menghindari: Ingat equity account ≠ asset account. |
| 1.4 | Definition Trap | Balance sheet vs income statement Balance sheet = pada satu tanggal. Income statement = selama suatu periode. |
| 1.4 | Definition Trap | Minority interest vs subsidiary NCI bukan nama subsidiary. NCI adalah ownership interest pada subsidiary yang tidak dimiliki parent. |
| 1.4 | Definition Trap | Retained earnings vs cash Retained earnings adalah equity account, cash adalah asset. |
| 1.4 | Logic Trap | Profit ≠ cash flow. Accrual accounting menyebabkan timing recognition income/expense berbeda dari cash movement. |
| 1.4 | Logic Trap | Consolidation ≠ addition only. Intercompany transactions dan balances tidak boleh membuat group terlihat memiliki external activity yang sebenarnya internal. |
| 1.4 | Logic Trap | Control ≠ 100% ownership. Subsidiary dapat dikonsolidasikan meskipun ada NCI. |
| 1.4 | Calculation Trap | Salah — menganggap ending retained earnings hanya beginning RE + net income: $RE_{end}=RE_{begin}+NI$ |
| 1.4 | Interpretation Trap | Perusahaan dapat memiliki high net income tetapi weak cash generation pada periode yang sama. Menilai liquidity hanya dari income statement dapat menghasilkan kesimpulan yang salah. |
| 1.4 | Interpretation Trap | Total consolidated net income tidak selalu seluruhnya attributable kepada shareholders parent jika terdapat NCI. |
| 1.4 | Red Flags |  |
| 1.5 | Scope Boundary | [CORE CF4] Fokus 1.5 adalah basic construction mechanics: dari transaksi atau account balances → klasifikasi → income statement → retained earnings/equity → statement of financial position. Silabus secara eksplisit meminta penyusunan statement of financial position dan income statement sederhana. Karena itu, detail accounting cycle seperti posting jurnal penuh, worksheet kompleks, adjusting/closing entries tingkat la |
| 1.5 | Profit ≠ Cash Flow | Financial statements construction menggunakan accrual accounting, bukan sekadar mencatat kas masuk dan kas keluar. Revenue ≠ cash received Expense ≠ cash paid |
| 1.5 | Jangan Salah Pikir | Membeli long-lived asset bukan berarti seluruh harga beli langsung menjadi expense. Asset kemudian dialokasikan melalui depreciation sesuai accounting treatment. |
| 1.5 | Dividends ≠ Expense | Dividend adalah distribution kepada owner dan langsung mengurangi retained earnings/equity. Dividend tidak digunakan untuk menghitung net income. |
| 1.5 | Exam Trap — Case A | - Trap: Memasukkan Rp100 juta owner contribution sebagai revenue. - Mengapa distractor terlihat benar: Cash masuk sebesar Rp100 juta. - Cara menghindari: Tanyakan sumber cash: customer atau owner? |
| 1.5 | Exam Trap — Case B | - Trap: Revenue = seluruh cash received. - Mengapa distractor terlihat benar: Rp15 juta + Rp10 juta memang cash masuk. - Cara menghindari: Earned? → revenue. Received? → cash. |
| 1.5 | Exam Trap — Case C | - Trap 1: Collection of receivable dianggap revenue. - Trap 2: Payment of accounts payable dianggap expense. - Trap 3: Dividend dianggap expense. |
| 1.5 | Definition Trap — Revenue vs Cash Receipt | Revenue berkaitan dengan earning activity. Cash receipt hanya menunjukkan uang diterima. Cash dapat diterima: - bersamaan dengan revenue; |
| 1.5 | Definition Trap — Expense vs Cash Payment | Expense berkaitan dengan resource consumed/incurred dalam periode. Cash payment dapat terjadi sebelum, saat, atau setelah expense recognition. |
| 1.5 | Definition Trap — Equity vs Cash | Equity adalah residual claim. Equity tidak berarti jumlah cash yang tersedia. |
| 1.5 | Logic Trap | Owner contribution ≠ revenue Walaupun cash masuk, transaksi berasal dari owner dan menambah contributed capital. |
| 1.5 | Logic Trap | Dividend ≠ expense Dividend adalah owner distribution dan mengurangi retained earnings. |
| 1.5 | Logic Trap | Borrowing ≠ revenue Cash naik, tetapi liability juga naik. |
| 1.5 | Logic Trap | Loan repayment principal ≠ expense Cash turun dan liability turun. Interest portion, bila ada, dapat menjadi expense. |
| 1.5 | Logic Trap | Asset purchase ≠ immediate expense Jika benefit melewati periode, item dapat dikapitalisasi dan kemudian dialokasikan sesuai accounting treatment. |
| 1.5 | Calculation Trap — Ending Retained Earnings |  |
| 1.5 | Calculation Trap — Net PP&E |  |
| 1.5 | Interpretation Trap | Sebuah perusahaan mencatat net income Rp100 juta. Kesimpulan “cash pasti naik Rp100 juta” adalah salah. Profit dapat terkandung dalam: - accounts receivable; |
| 1.5 | Red Flags |  |
| 1.6 | Scope Boundary | [CORE CF4] Silabus meminta kemampuan menghitung dan menginterpretasikan ratio. Karena itu, menghafal formula saja tidak cukup. Materi inti note ini mencakup: - liquidity; |
| 1.6 | Exam Trap | Jika soal memberi beginning dan ending balance, jangan langsung memakai ending balance hanya karena lebih mudah. Tetapi jika source/soal secara eksplisit menggunakan year-end balance, ikuti definisinya. Brigham juga menunjukkan bahwa data provider berbeda dapat memakai definisi berbeda. |
| 1.6 | Formula Definition Trap | Average assets vs ending assets adalah salah satu distractor paling mudah. Jika soal mengikuti Weygandt dan memberikan beginning/ending balances: |
| 1.6 | Profit ≠ Cash Flow | Perusahaan dapat memiliki TIE memadai tetapi cash flow lemah jika earnings belum dikonversi menjadi cash. |
| 1.6 | Important | Gunakan tepat formula yang diberikan source/soal. Jangan menganggap seluruh “coverage ratios” identik dengan TIE. |
| 1.6 | Important | Market ratios memerlukan market data, bukan hanya accounting statements. |
| 1.6 | Jangan Salah Pikir | “ROE tinggi = operational performance pasti hebat” adalah salah. Bisa saja margin dan turnover biasa saja tetapi leverage sangat tinggi. |
| 1.6 | Exam Trap — Case A | - Trap: Inventory dimasukkan ke quick ratio. - Trap: Menggunakan ending AR/inventory daripada average. - Trap: Sales digunakan sebagai numerator inventory turnover. |
| 1.6 | Exam Trap — Case B | - Trap: ROA menggunakan ending assets padahal beginning balance diberikan. - Trap: Interest expense dikurangkan lagi dari EBIT sebelum menghitung TIE. - Trap: Menganggap ROE > ROA selalu “good news”. |
| 1.6 | Exam Trap — Case C | - Trap: Memilih perusahaan hanya berdasarkan ROE. - Trap: Menganggap ROE sama → performance/risk sama. - Shortcut: Margin × Turnover × Leverage. |
| 1.6 | Exam Trap — Case D | “Current assets naik” tidak cukup untuk menyimpulkan current ratio naik. Denominator juga berubah. |
| 1.6 | Definition Trap — Liquidity vs Solvency | Liquidity → ability memenuhi short-term obligations. Solvency → ability memenuhi long-term/overall obligations dan survive financially. |
| 1.6 | Definition Trap — Profit Margin vs ROA | Margin menggunakan sales sebagai basis. ROA menggunakan assets sebagai basis. |
| 1.6 | Definition Trap — ROA vs ROE | ROA → return relatif terhadap asset base. ROE → return relatif terhadap owners' equity. |
| 1.6 | Definition Trap — Turnover vs Days | Higher turnover berarti lebih banyak cycles per year. Higher days berarti lebih lama tertahan. Maka keduanya biasanya bergerak berlawanan arah. |
| 1.6 | Logic Trap | Higher current ratio ≠ always better. Bisa berasal dari inventory menumpuk. |
| 1.6 | Logic Trap | Higher inventory turnover ≠ unlimited good news. Terlalu tinggi dapat mengindikasikan insufficient inventory dan lost sales. |
| 1.6 | Logic Trap | Higher ROE ≠ lower risk. Leverage dapat menaikkan ROE sekaligus risk. |
| 1.6 | Logic Trap | High profit ≠ high cash flow. Ratio berbasis earnings tidak otomatis menunjukkan cash generation. |
| 1.6 | Logic Trap | Industry average ≠ perfect target. Companies dalam industry yang sama dapat memiliki business models berbeda. |
| 1.6 | Interpretation Trap | Company A memiliki current ratio 3.0 dan Company B 2.0. Tidak cukup untuk mengatakan A lebih liquid. Periksa: |
| 1.6 | Red Flags |  |
| 2.1 | Scope Boundary | [CORE CF4] Fokus subtopik ini adalah karakteristik instrumen equity dari dua sisi sekaligus: issuer dan investor. Materi inti mencakup common stock/ordinary shares, ownership dan voting, residual claim, dividends, preferred stock dalam konteks raising equity, convertible preferred pada private firms, share repurchases, stock splits/reverse splits, serta hubungan equity dengan market value dan dilution. Detail prosedu |
| 2.1 | Jangan Salah Pikir | 1. “Equity = no risk.” Salah. Equity adalah residual claim dan biasanya paling exposed ke business risk. 2. “Dividend selalu wajib dibayar.” Salah. Common dividend bergantung pada board/payout policy dan bukan fixed debt obligation. 3. “New shares pasti menghancurkan value.” Salah. Share count bertambah, tetapi issuer menerima financing/assets. Economic dilution perlu dianalisis, bukan diasumsikan. |
| 2.1 | Exam Trap — Case A | - Trap: Menjawab “investor rugi 20%” hanya karena ownership turun dari 5% ke 4%. - Mengapa distractor terlihat benar: Persentase ownership memang turun 20% secara relatif. - Cara menghindari: Pisahkan ownership dilution dari economic-value dilution. |
| 2.1 | Exam Trap — Case B | - Trap: Menganggap “preferred” berarti selalu punya control rights lebih tinggi. - Mengapa distractor terlihat benar: Kata “preferred” terdengar seperti “lebih kuat dalam segala aspek”. - Cara menghindari: Preference biasanya berkaitan dengan economic claims, bukan otomatis voting dominance. |
| 2.1 | Exam Trap — Case C | - Trap: Menggunakan hanya perubahan denominator. - Mengapa distractor terlihat benar: Lebih banyak shares tampak seperti “pie dibagi lebih banyak”. - Cara menghindari: Ingat bahwa issuance memperbesar pie melalui cash raised. |
| 2.1 | Exam Trap — Case D | - Trap: Menganggap preferred selalu dipilih karena regular dividend. - Mengapa distractor terlihat benar: Mature preferred stock sering diasosiasikan dengan preferential dividend. - Cara menghindari: Pada young firms dalam Berk & DeMarzo, convertible preferred sering tidak membayar regular cash dividend; value utamanya dapat berasal dari seniority + conversion right. |
| 2.1 | Definition Trap | Common stock ≠ preferred stock Common = residual ownership claim. Preferred = equity claim dengan contractual preferences tertentu terhadap common. |
| 2.1 | Logic Trap | Ownership dilution ≠ automatic value destruction New shares mengurangi percentage ownership existing holders bila mereka tidak ikut membeli, tetapi firm juga menerima assets/proceeds. Dividend ≠ interest |
| 2.1 | Calculation Trap |  |
| 2.1 | Interpretation Trap | “Preferred lebih aman, berarti return-nya pasti lebih tinggi.” Salah secara logic. Security yang lebih senior umumnya menanggung downside lebih rendah daripada common, sehingga required return dapat lebih rendah, all else equal. “Stock split menaikkan price karena perusahaan menunjukkan confidence.” |
| 2.1 | Red Flags |  |
| 2.2 | Scope Boundary | [CORE CF4] Fokus subtopik ini adalah karakteristik instrumen debt jangka panjang, terutama corporate bonds dan private long-term debt, dilihat dari: cash-flow obligation → collateral → seniority → covenant → maturity → repayment provision → investor risk → issuer flexibility. Berk & DeMarzo Chapter 24 adalah sumber paling langsung untuk klasifikasi corporate debt, indenture, notes/debentures, mortgage/asset-backed bo |
| 2.2 | Definition Trap | Private debt ≠ short-term debt. “Private” menjelaskan market/placement mechanism, bukan maturity. |
| 2.2 | Important Distinction | Secured ≠ senior. - Secured/unsecured → apakah ada collateral. - Senior/subordinated → priority claim. |
| 2.2 | Definition Trap | Eurobond tidak berarti otomatis “bond dalam euro”. “Eurobond” adalah market/denomination classification, bukan nama currency. |
| 2.2 | Definition Trap | Sinking fund ≠ call provision. Call = issuer option/right. Sinking fund = scheduled/contractual repayment mechanism. |
| 2.2 | Jangan Salah Pikir | 1. Secured = senior. Salah. 2. Callable bond menguntungkan investor. Salah. 3. Convertible lower coupon = cheap/free financing. Salah. |
| 2.2 | Exam Trap — Case A | - Trap: membagi loss pro-rata. - Shortcut: rank claims first. - Target waktu: 45–60 detik. |
| 2.2 | Exam Trap — Case B | - Trap: “more flexibility = more value” tanpa perspective. - Shortcut: ask who owns the option. - Target waktu: 30–45 detik. |
| 2.2 | Exam Trap — Case C | - Trap: mengalikan face value × conversion ratio. - Shortcut: conversion price = face value ÷ shares. - Target waktu: 60–90 detik. |
| 2.2 | Exam Trap — Case D | Sinking fund tidak selalu fully amortize issue. |
| 2.2 | Exam Trap — Case F | Jangan hanya membandingkan old coupon vs new coupon. |
| 2.2 | Definition Trap | Secured vs Senior Secured = collateral. Senior = priority. Call vs Conversion |
| 2.2 | Logic Trap | - Lower coupon ≠ cheaper security. - Collateral ≠ no default risk. - Covenants ≠ guarantee. |
| 2.2 | Calculation Trap | Salah $CP=F\times CR$ |
| 2.2 | Interpretation Trap | Higher yield ≠ automatically better investment. Higher yield dapat compensation untuk higher default risk, lower priority, call risk, atau illiquidity. Positive refunding NPV ≠ automatically call now. |
| 2.2 | Red Flags |  |
| 2.3 | Scope Boundary | [CORE CF4] Fokus note ini adalah instrumen dan arrangements untuk membiayai kebutuhan cash/working capital pada horizon pendek sampai menengah. Berk & DeMarzo Chapter 27 adalah source utama untuk forecasting financing needs, temporary vs permanent working capital, matching principle, financing policy, bank loans, credit lines, bridge loans, commercial paper, dan secured financing. Chapter 26 menambahkan trade credit/ |
| 2.3 | Financial Meaning | Discount kecil dapat berarti annualized financing cost sangat besar jika dilewatkan. |
| 2.3 | Definition Trap | Bridge loan membiayai timing gap, bukan berarti underlying asset harus short-lived. |
| 2.3 | Definition Trap | Pledging ≠ factoring. Pledge = collateral. Factoring = sale. |
| 2.3 | Jangan Salah Pikir | 1. Profitability ≠ cash sufficiency. 2. Accounts payable ≠ free financing jika discount dilewatkan. 3. Quoted rate ≠ effective cost jika ada fee/restricted cash. |
| 2.3 | Exam Trap — Case A | - Trap: compare 2% dengan 12%. - Shortcut: annualize financing costs. - Target waktu: 60–90 detik. |
| 2.3 | Exam Trap — Case B | Effective rate memakai usable proceeds, bukan face value. |
| 2.3 | Exam Trap | Cari verb pledged vs sold. |
| 2.3 | Definition Trap | - Trade credit = supplier financing; bank credit = financial institution. - Committed ≠ uncommitted line. - Pledging ≠ factoring. |
| 2.3 | Logic Trap | - No stated interest ≠ free financing. - Lowest stated rate ≠ lowest effective cost. - Commitment certainty has a price. |
| 2.3 | Calculation Trap |  |
| 2.3 | Interpretation Trap | - Longer financing is not always superior: it reduces rollover risk but may create excess funding cost. - Stretching AP may appear cheaper but can damage supplier access. - Factoring is not automatically a distress signal. |
| 2.3 | Red Flags |  |
| 2.4 | Scope Boundary | [CORE CF4] Topik ini menggunakan tiga lapisan derivative thinking dari official Berk & DeMarzo references: 1. Financial options — Bab 20: call, put, payoff, moneyness, long/short, put-call parity, value drivers, dan exercise logic. 2. Real options — Bab 22: option to delay, growth option, abandonment option, decision trees, dan staged investment. |
| 2.4 | Payoff ≠ Profit | Payoff hanya melihat cash flow saat exercise/expiration. Profit juga harus memperhitungkan option premium yang dibayar atau diterima di awal. |
| 2.4 | Definition Trap | American dan European menjelaskan exercise rules, bukan lokasi geographical trading. |
| 2.4 | ITM ≠ Profitable Trade | ITM hanya berarti immediate exercise mempunyai positive intrinsic payoff. Investor masih mungkin rugi setelah memperhitungkan premium awal. |
| 2.4 | Jangan Salah Pikir | 1. Option payoff = profit. Salah; premium matters. 2. ITM = investor definitely profitable. Salah. 3. American option = traded in America. Salah. |
| 2.4 | Exam Trap — Case A | - Trap: answer 25 sebagai profit. - Shortcut: payoff first, subtract premium second. - Target waktu: 30–45 detik. |
| 2.4 | Definition Trap | - Call = right to buy; put = right to sell. - Long = holder/right; short = writer/obligation. - American vs European = exercise timing, not geography. |
| 2.4 | Logic Trap | - Payoff ≠ profit. - ITM ≠ profitable. - More volatility can raise option value. |
| 2.4 | Calculation Trap | Call — Salah $C_T=S_T-K$ |
| 2.4 | Interpretation Trap | - Option expires worthless → holder still loses initial premium. - Abandonment is not necessarily evidence initial decision was irrational. - Waiting can be an economically optimal action. |
| 2.4 | Red Flags |  |
| 2.5 | Scope Boundary | [CORE CF4] Fokus subtopik ini adalah bagaimana perusahaan memperoleh external capital melalui securities dan financing arrangements. Core areas mencakup private financing, financing rounds, IPO, primary vs secondary shares, underwriting, pricing dan book-building, IPO underpricing, SEO, rights offering, private placement, shelf registration, equity carve-out, securitization, dan public/private debt-raising context. D |
| 2.5 | Important Distinction | Strategic investor dapat mengejar strategic value, bukan hanya financial return. |
| 2.5 | Dilution ≠ Automatic Wealth Destruction | Existing shareholder percentage dapat turun, tetapi company menerima new cash. Track ownership + value + proceeds. |
| 2.5 | Definition Trap | IPO dapat mengandung primary dan secondary shares sekaligus. |
| 2.5 | Definition Trap | Underwriting tidak berarti investment tersebut “guaranteed safe”. |
| 2.5 | Exam Trap | Financing need tidak boleh dibagi begitu saja dengan offer price jika issuer tidak menerima full offer price. |
| 2.5 | Equity carve-out ≠ full divestiture. |  |
| 2.5 | Private Placement ≠ Secondary Market | Private placement can raise new capital. |
| 2.5 | Securitization does not eliminate underlying credit risk. |  |
| 2.5 | Jangan Salah Pikir | 1. IPO = all cash goes to company. 2. Secondary market raises issuer capital. 3. Firm commitment guarantees investor return. |
| 2.5 | Exam Trap | Post-money denominator = old + new shares. |
| 2.5 | Exam Trap | Include new cash; don't divide old equity by new shares only. |
| 2.5 | Definition Trap | - IPO ≠ SEO. - Primary shares ≠ secondary shares. - Rights offering ≠ secondary-market transaction. |
| 2.5 | Logic Trap | - Dilution ≠ automatic wealth destruction. - Underpricing is not automatically good for issuer. - Secondary shares do not increase corporate cash. |
| 2.5 | Calculation Trap |  |
| 2.5 | Interpretation Trap | - Oversubscribed IPO does not prove issuer maximized proceeds. - SEO price fall can reflect adverse selection. - Private placement may have lower issuance burden but higher illiquidity premium. |
| 2.5 | Red Flags |  |
| 3.1 | Scope Boundary | [CORE CF4] Subtopik ini berfokus pada bentuk organisasi bisnis dan economic trade-off-nya: sole proprietorship, partnership, limited partnership, LLC, dan corporation; termasuk hubungan ownership–control yang muncul terutama pada corporation. Detail legal dan tax yang sangat spesifik terhadap Amerika Serikat diperlakukan sebagai [TEXTBOOK CONTEXT], bukan aturan hukum Indonesia. Silabus Topik 3 juga mencantumkan Brigh |
| 3.1 | Core Misunderstanding | Kerugian business tidak selalu terbatas pada modal yang ditanamkan owner. Pada sole proprietorship dan general partnership, owner/partner dapat memiliki unlimited personal liability. Pada corporation dan LLC, textbook menekankan limited liability sebagai karakteristik utama. |
| 3.1 | Exam Core | Jika hanya boleh mengingat satu hal dari section ini: Corporation mengorbankan simplicity untuk mendapatkan limited liability, continuity, transferable ownership, dan akses lebih besar ke outside capital. |
| 3.1 | Jangan Salah Pikir | “Ada banyak partners, jadi liability otomatis terbagi dan terbatas.” Salah. Dalam general partnership, textbook menyatakan lender dapat menuntut partner terhadap outstanding debts firm. Multiple owners tidak sama dengan limited liability. |
| 3.1 | Important Distinction | Limited partner ≠ general partner dengan liability lebih kecil. Perbedaannya mencakup control, bukan hanya amount of liability. |
| 3.1 | Scope Note | Untuk CF4 3.1, pahami bahwa tax treatment dapat menjadi trade-off organizational form. Jangan menghafal historical U.S. rates atau eligibility rules sebagai current Indonesian law. |
| 3.1 | Jangan Salah Pikir | 1. Multiple owners ≠ limited liability. General partnership tetap dapat memiliki unlimited personal liability. 2. Limited liability ≠ no risk. Investor masih dapat kehilangan seluruh amount invested. 3. Limited partner ≠ LLC owner. Limited partner mendapat liability protection tetapi tidak management authority; LLC owners dapat memiliki limited liability sekaligus manage. |
| 3.1 | Exam Trap — Case A | - Trap: memilih corporation hanya karena business memiliki owner. - Mengapa distractor terlihat benar: semua corporation juga memiliki owners. - Cara menghindari: fokus pada liability dan number of owners. |
| 3.1 | Exam Trap — Case B | - Trap: memilih LLC karena melihat kata “limited liability”. - Mengapa distractor terlihat benar: LLC memang memberi limited liability. - Cara menghindari: cek management authority. Limited partner tidak manage; LLC owner dapat manage. |
| 3.1 | Exam Trap — Case C | - Trap: menghafal hanya advantages corporation dan lupa governance consequence. - Mengapa distractor terlihat benar: multiple-owner structures terlihat sama-sama mampu menghimpun capital. - Cara menghindari: cari kombinasi limited liability + transferable shares + many owners + separation ownership-control. |
| 3.1 | Definition Trap — Limited Partnership vs LLC | Limited partnership: limited partners punya limited liability tetapi tidak management authority; general partners mengelola dan personally liable. LLC: seluruh owners dapat memiliki limited liability dan tetap dapat menjalankan business. |
| 3.1 | Definition Trap — Owner vs Manager | Shareholder adalah owner. CEO / management menjalankan daily operations. Pada corporation besar, keduanya tidak harus orang yang sama. |
| 3.1 | Definition Trap — Stock vs Equity | Stock adalah individual shares of ownership. Equity adalah collection of outstanding ownership claims / total ownership stake dalam framing chapter. |
| 3.1 | Logic Trap | Limited liability ≠ zero loss. Shareholder tetap dapat kehilangan seluruh amount invested jika equity value jatuh ke nol. Limited liability berarti loss normal owner tidak meluas menjadi kewajiban personal untuk seluruh corporate debt. |
| 3.1 | Logic Trap | Partnership ≠ automatically safer than proprietorship. Menambah partner dapat menambah resources, tetapi general partners masih dapat personally liable. |
| 3.1 | Logic Trap | Corporation advantage bukan sekadar “banyak owner”. Keunggulan scale berasal dari kombinasi separate legal entity, limited liability, transferability, continuity, dan ability to sell ownership claims. |
| 3.1 | Interpretation Trap | “Corporation selalu lebih baik karena limited liability.” Tidak cukup. Corporation juga lebih formal/costly, dapat mengalami double taxation dalam textbook context, dan memisahkan ownership dari control sehingga agency problem muncul. |
| 3.1 | Interpretation Trap | “Sole proprietorship selalu buruk karena unlimited liability.” Tidak tepat. Struktur ini tetap attractive untuk business sederhana karena straightforward to set up dan memberikan direct owner control. Yang benar adalah trade-off, bukan absolute ranking. |
| 3.1 | Red Flags |  |
| 3.2 | Scope Boundary | [CORE CF4] Subtopik ini mencakup dua keputusan yang saling berhubungan: bagaimana perusahaan membiayai bisnisnya dan bagaimana perusahaan membagi cash yang tersedia antara reinvestment, debt, dividend, dan share repurchase. Fokus utamanya adalah debt–equity mix, trade-off leverage, serta dividend/payout policy. Detail lengkap perhitungan WACC ditempatkan pada 3.3 Capital Budgeting and Cost of Capital. Detail karakter |
| 3.2 | Important Distinction | WACC tidak otomatis turun setiap kali debt ditambah. Weight debt memang naik, tetapi $r_d$ dan $r_s$ juga dapat naik ketika leverage meningkatkan risk. |
| 3.2 | Textbook Context | Detail tax-rate yang digunakan Brigham bersifat period- dan jurisdiction-specific. Untuk CF4, fokus pada logic: relative taxation of dividend vs capital gain dapat memengaruhi investor preference. |
| 3.2 | Jangan Salah Pikir | 1. Debt lebih murah ≠ semakin banyak debt selalu lebih baik. Cost of debt dan equity berubah saat leverage berubah. 2. Equity tidak punya contractual interest ≠ equity gratis. Shareholders tetap menuntut required return. 3. Dividend increase ≠ otomatis bukti dividend menciptakan value. Bisa jadi perubahan harga adalah signaling effect. |
| 3.2 | Exam Trap — Case A | - Trap: memilih debt hanya karena stated interest rate terlihat lebih rendah. - Mengapa distractor terlihat benar: WACC memang menggunakan after-tax debt cost yang sering lebih rendah dari equity cost. - Cara menghindari: selalu tanyakan apa yang terjadi pada $r_d$, $r_s$, distress probability, dan FCF ketika debt naik. |
| 3.2 | Exam Trap — Case B | - Trap: “debt naik → WACC pasti turun.” - Mengapa distractor terlihat benar: debt sering memiliki lower stated cost dan tax shield. - Cara menghindari: bedakan low/moderate leverage dengan excessive leverage. |
| 3.2 | Exam Trap — Case C | - Trap: menganggap dividend dan repurchase identik dalam semua kondisi. - Mengapa distractor terlihat benar: dalam frictionless model dan total distribution yang sama, value effect dapat equivalent. - Cara menghindari: setelah memahami theoretical equivalence, periksa taxes, signals, flexibility, dan investor preference. |
| 3.2 | Definition Trap | Capital structure ≠ capital budgeting. Capital structure bertanya bagaimana firm dibiayai. Capital budgeting bertanya project/investment mana yang harus dilakukan. Dividend policy ≠ distribution policy. |
| 3.2 | Logic Trap | - Debt financing ≠ free capital. - Equity financing ≠ costless karena tidak ada mandatory interest. - Retained earnings ≠ free cash tanpa opportunity cost. |
| 3.2 | Calculation Trap | Kesalahan umum adalah menggunakan cost of debt sebelum tax dalam WACC ketika model secara eksplisit meminta after-tax debt cost. Salah |
| 3.2 | Interpretation Trap | Misalkan debt ratio naik dan EPS ikut naik. Menyimpulkan “firm lebih baik” hanya dari EPS adalah salah. Leverage juga mengubah risk, required return, probability of distress, dan firm value. Per-share accounting outcome tidak cukup untuk membuktikan value creation. |
| 3.2 | Red Flags |  |
| 3.3 | Scope Boundary | [CORE CF4] Topik 3.3 berfokus pada bagaimana perusahaan mengubah sebuah investment proposal menjadi relevant project cash flows, menentukan required return/cost of capital yang sesuai, lalu menggunakan keduanya dalam capital budgeting. Detail perbandingan metode investment appraisal seperti NPV versus IRR, payback, discounted payback, MIRR, dan profitability index dibahas lebih penuh pada 3.4 Investment Return Method |
| 3.3 | Important Distinction | Debt cost disesuaikan dengan tax karena interest memperoleh tax treatment yang berbeda dari dividends dalam framing textbook. Preferred dan common equity tidak dikalikan $(1-T)$. |
| 3.3 | Jangan Salah Pikir | Interest expense bukan operating project cost dalam standard WACC capital-budgeting setup. Financing effect sudah tercermin dalam discount rate ketika WACC digunakan. |
| 3.3 | Jangan Salah Pikir | 1. Accounting profit ≠ project free cash flow. 2. Historical coupon rate ≠ current cost of debt. 3. Book-value capital weights ≠ otomatis best WACC weights. |
| 3.3 | Exam Trap — Case A | - Trap: menggunakan 8% langsung tanpa tax adjustment. - Mengapa distractor terlihat benar: 8% adalah contractual debt rate yang terlihat eksplisit. - Cara menghindari: saat WACC dan corporate tax diberikan, tanyakan “interest tax shield?” |
| 3.3 | Exam Trap — Case B | - Trap: berhenti pada after-tax EBIT = 210. - Mengapa distractor terlihat benar: angka tersebut terlihat seperti “profit setelah tax”. - Cara menghindari: setelah profit, selalu check Depreciation → CapEx → $\Delta NWC$. |
| 3.3 | Exam Trap — Case C | - Trap: menganggap “company WACC” = mandatory discount rate semua projects. - Mengapa distractor terlihat benar: WACC memang corporate cost of capital. - Cara menghindari: sebelum menggunakan WACC, tanyakan “same risk?” |
| 3.3 | Exam Trap — Case D | - Trap: menurunkan dividend sebesar flotation cost. - Cara menghindari: flotation cost mengurangi net proceeds, bukan dividend contractual/expected. - Target waktu: 60–75 detik. |
| 3.3 | Profit ≠ Cash Flow | Revenue recognition dapat terjadi sebelum cash collection, depreciation mengurangi accounting income tanpa current cash outflow, dan CapEx dapat menghabiskan cash sebelum expense diakui penuh. |
| 3.3 | Definition Trap | Cost of debt ≠ coupon rate lama. Relevant cost adalah current required return / marginal borrowing cost. Cost of equity ≠ dividend yield saja. |
| 3.3 | Logic Trap | Net income positif ≠ FCF positif. Sebuah project dapat profitable secara accounting tetapi membutuhkan CapEx atau NWC sangat besar sehingga cash flow lemah. Depreciation expense ≠ current cash outflow. |
| 3.3 | Calculation Trap |  |
| 3.3 | Interpretation Trap | WACC yang dihitung sempurna secara arithmetic masih dapat menghasilkan valuation salah jika dipakai pada project dengan risk yang berbeda. Demikian juga project FCF yang dihitung benar masih dapat menghasilkan decision salah bila discount rate tidak sesuai. Jadi exam logic: |
| 3.3 | Red Flags |  |
| 3.4 | Scope Boundary | [CORE CF4] Fokus subtopik ini adalah metode pengukuran dan evaluasi return/value dari investment project setelah project cash flows dan required rate of return tersedia. Cash-flow construction, sunk cost, opportunity cost, depreciation tax shield, dan WACC mechanics sudah menjadi fokus 3.3 Capital Budgeting and Cost of Capital. Di sini konsep tersebut digunakan sebagai input, bukan diulang secara penuh. Brigham memba |
| 3.4 | Important Distinction | Accept/reject decision dan ranking decision bukan hal yang sama. IRR dan NPV dapat sama-sama menerima dua independent projects, tetapi memberi ranking berbeda ketika hanya satu project boleh dipilih. |
| 3.4 | Exam Trap | Jangan otomatis menganggap setiap project hanya memiliki satu IRR. |
| 3.4 | Exam Trap | Project dengan payback lebih cepat tidak otomatis memiliki NPV lebih tinggi. |
| 3.4 | SOURCE TERMINOLOGY DIFFERENCE — sangat penting | Brigham PI dan Berk–DeMarzo PI memakai normalization berbeda. Brigham: |
| 3.4 | Important Distinction | Annual/accounting rate of return ≠ IRR. ARR memakai accounting net income dan average investment. IRR memakai project cash flows dan time value of money. |
| 3.4 | Exam Trap | Jangan memilih satu project hanya karena IRR lebih tinggi jika projects independent dan tidak ada constraint. |
| 3.4 | Salah | Project dengan highest IRR belum tentu highest NPV. |
| 3.4 | Salah | Payback stops caring setelah initial investment recovered. |
| 3.4 | Salah | Discounted payback memperbaiki TVM, tetapi tetap ignores post-payback cash flows. |
| 3.4 | Salah | ARR: $\frac{Accounting\ Income}{Average\ Investment}$ |
| 3.4 | Salah | Itu benar untuk Brigham convention: $PI=\frac{PV(inflows)}{Initial\ Cost}$ |
| 3.4 | Salah | Nonnormal cash flow dapat menghasilkan: - multiple IRRs; - no IRR; |
| 3.4 | Salah | Timing matters. $100$ today tidak sama dengan $100$ five years later. |
| 3.4 | Salah | Untuk normal independent project, accept/reject conclusions biasanya sama. Konflik terutama relevan saat ranking mutually exclusive projects atau saat cash-flow pattern membuat IRR problematic. |
| 4.1 | Scope Boundary | Silabus meminta pemahaman bentuk dan fungsi financial markets nasional dan internasional, tetapi paket referensi resmi Topik 4 yang diberikan tidak menyajikan satu chapter yang secara sistematis membuat taxonomy klasik seperti money vs capital market, primary vs secondary market, atau exchange vs OTC. Karena itu note ini tidak mengimpor taxonomy tersebut dari chapter Topik lain. Fokus diletakkan pada struktur financi |
| 4.1 | Core Lesson | Access to capital markets menghubungkan asset value dengan financing capacity. Firm yang economically valuable dapat mengatasi temporary cash shortage apabila investors bersedia menyediakan capital dengan harga yang fair. |
| 4.1 | Important Distinction | Economic distress = decline in underlying asset/business value. Financial distress = difficulty arising from financing obligations. Bankruptcy headlines tidak berarti bankruptcy process sendiri menyebabkan seluruh decline in value. |
| 4.1 | Financial Meaning | International integration berarti currency choice tidak menciptakan free value. Jika satu asset identik secara ekonomi, valuation routes yang berbeda harus menghasilkan value yang konsisten. |
| 4.1 | Assumption | Berk & DeMarzo menyatakan equivalence ini dalam framework di mana uncertainty in spot exchange rates tidak correlated dengan foreign-currency cash flows untuk simplification yang digunakan. |
| 4.1 | Definition Trap | Different nominal interest rates ≠ automatically segmented markets. Rates dapat berbeda karena inflation/currency relationships. Segmentation berarti differences tetap ada after economically comparable currency/risk adjustments. |
| 4.1 | Perfect market ≠ market with zero business risk. | Perfect market assumption menghilangkan relevant financial frictions, bukan uncertainty dari project cash flows. |
| 4.1 | Integrated market ≠ same nominal interest rate everywhere. | Currency and inflation differences dapat menghasilkan different nominal rates tanpa violating integration. |
| 4.1 | Financial distress ≠ economic distress. | Economic distress = underlying business/assets lose value. Financial distress = financing obligations create difficulty. |
| 4.1 | Bankruptcy ≠ entire decline in firm value. | Dalam benchmark, decline in asset value dapat terjadi regardless of leverage; bankruptcy dapat menjadi consequence, bukan root cause. |
| 4.1 | No cash today ≠ no value. | Valuable firm dengan market access dapat refinance. |
| 4.1 | Transfer between investors ≠ change in total firm value. | Selalu lihat total value to all investors. |
| 4.1 | Takeover premium ≠ automatic value creation. | Premium adalah amount paid above pre-deal market value; acquirer harus memperoleh sufficient synergies/benefits agar deal worthwhile. |
| 4.1 | Foreign market rate lower ≠ financing economically cheaper. | Exchange-rate relations dan currency risk/forward rates harus dipertimbangkan. |
| 4.1 | Market price naik setelah announcement tidak membuktikan keputusan selalu menciptakan long-run value. |  |
| 4.1 | Capital-market segmentation dapat memberi apparent financing advantage, tetapi benefit harus dievaluasi setelah all cash-flow, currency, tax, and risk effects. |  |
| 4.1 | Lower WACC meningkatkan value hanya jika cash-flow assumptions dan risk classification tetap appropriate. |  |
| 4.2 | Source Boundary | Learning outcome CF4 menyebut “tujuan organisasi” dan “tujuan negara”. Referensi Topik 4 yang diberikan sangat kuat untuk hubungan: - capital → operating assets → cash flows → corporate value; - resource allocation melalui positive-NPV investment; |
| 4.2 | Important Distinction | Security ≠ underlying productive resource. Corporate bond adalah claim terhadap issuer. Common stock adalah ownership claim terhadap corporation. |
| 4.2 | Exam Point | Dalam Brigham Chapter 13, value-based management fokus terutama pada operating assets, karena management dapat memengaruhi operating performance dan future cash flows dari resources tersebut. |
| 4.2 | Exam Trap | Profitable ≠ value creating. Perusahaan dapat menghasilkan positive accounting profit tetapi tetap destroy value jika return atas incremental real resources lebih rendah daripada cost of capital. |
| 4.2 | Important Distinction | Financial option = contractual claim traded/created in financial markets. Real option = flexibility embedded in real investment or operating decision. |
| 4.2 | Exam Trap | Decision yang menguntungkan shareholders tidak selalu meningkatkan total firm value jika keputusan tersebut transfers wealth dari creditors dan destroys NPV. |
| 4.2 | Finance → Real Resource Link | Debt overhang menunjukkan dengan jelas bahwa financial claims dapat distort real investment decisions. |
| 4.2 | Important Distinction | Reallocation of control ≠ automatic creation of real economic value. Value hanya tercipta jika real resources dapat digunakan lebih productively atau cash flows/risk improve. |
| 4.2 | Exam Trap | Tax adalah cash-flow effect, bukan sekadar accounting presentation. |
| 4.2 | Finance–Nation Link | Institutions yang memengaruhi investor protection dan capital access pada akhirnya dapat memengaruhi real investment capacity. |
| 4.2 | Important Distinction | Government intervention dapat mengurangi immediate distress tetapi juga mengubah future incentives. Source tidak menyatakan bahwa bailout selalu baik atau selalu buruk. |
| 4.2 | Cash/security ≠ productive operating asset. | Financial asset adalah claim atau store of financial value. Real/operating resource menghasilkan business output/cash flow. |
| 4.2 | Positive profit ≠ positive economic value creation. | Jika return on capital < WACC, perusahaan dapat profitable tetapi economically destroy value. |
| 4.2 | Growth ≠ automatically good. | Growth yang memerlukan expensive operating capital dengan low return dapat menurunkan value. |
| 4.2 | More free cash ≠ automatically better allocation. | Excess cash dengan weak governance dapat memicu overinvestment atau empire building. |
| 4.2 | Debt is not purely good or bad. | Debt dapat: - discipline managers; - reduce excess free cash; |
| 4.2 | Government policy ≠ merely financial bookkeeping. | Tax, capital controls, property-right enforcement, regulation, dan bailout expectations dapat mengubah real investment incentives. |
| 4.2 | Lower foreign nominal rate ≠ automatically lower economic cost of capital. | Currency, risk, access, tax, dan market integration harus konsisten. |
| 4.2 | Asset transfer ≠ value creation. | Acquisition menciptakan economic value hanya jika combined resources menghasilkan synergy/efficiency yang melebihi relevant costs. |
| 4.3 | Scope Priority | Walaupun Topik 4 secara keseluruhan memiliki banyak chapter referensi, Chapter 29 Berk & DeMarzo dan bagian corporate governance pada Chapter 13 Brigham merupakan sumber paling langsung untuk 4.3. Chapter 16 terutama mendukung agency conflicts antara shareholders dan creditors. Chapter 28 mendukung market for corporate control dan takeover defenses. Detail teknis M&A, international finance, atau option valuation yang |
| 4.3 | Important Distinction | Separation of ownership and control bukan murni kelemahan. Separation memberi keuntungan besar berupa specialization dan diversification. Agency problem adalah trade-off dari struktur tersebut. |
| 4.3 | Exam Trap | Growth ≠ value creation. Jika expansion hanya memperbesar firm tetapi tidak meningkatkan intrinsic value, decision tersebut adalah agency problem. |
| 4.3 | Important Distinction | Current stock price maximization ≠ intrinsic value maximization. Governance harus mendorong long-term value, bukan sekadar short-term reported performance. |
| 4.3 | Important Distinction | Governance provision dapat memiliki benefit dan cost sekaligus. Staggered board dapat memberi stability tetapi juga memperkuat entrenchment. |
| 4.3 | Exam Trap | More managerial ownership ≠ always better governance. Ownership dapat meningkatkan alignment tetapi juga meningkatkan entrenchment. |
| 4.3 | Core Trade-Off | Governance bukan sekadar membuat manager menanggung 100% risk. Sistem optimal harus menyeimbangkan: incentive alignment vs risk burden. |
| 4.3 | Exam Trap | Good for equity ≠ good for firm. |
| 4.3 | Key Governance Trade-Off | Takeover defense ≠ automatically bad. Defense dapat: - protect bargaining power, |
| 4.3 | Master Principle | Good governance is not “maximize every governance control.” It is a system of checks and balances that trades off costs and benefits. |
| 4.3 | Agency problem ≠ fraud only. | Agency problem also includes legal but value-reducing behavior such as shirking, empire building, excess perks, or excessive risk avoidance. |
| 4.3 | Corporate governance ≠ board of directors only. | Governance includes board, compensation, ownership, capital structure, controls, shareholders, creditors, analysts, regulation, litigation, takeover market, and other mechanisms. |
| 4.3 | Outside director ≠ automatically independent. | Personal/business relationships can weaken independence. |
| 4.3 | More stock/options ≠ always better. | Incentives can increase risk-taking, manipulation, or entrenchment. |
| 4.3 | More debt ≠ always better discipline. | Debt can reduce waste but also create distress and debt-equity conflicts. |
| 4.3 | Managerial ownership ↑ ≠ firm value must ↑. | Alignment and entrenchment move in opposite directions. |
| 4.3 | Poison pill ≠ purely shareholder-destroying. | It can increase bargaining power and premium, but also entrench management. |
| 4.3 | Hostile takeover ≠ automatically bad. | It can replace poor management and discipline firms. |
| 4.3 | Staggered board ≠ purely good or bad. | Stability vs reduced replacement pressure. |
| 4.3 | Shareholder–manager conflict is not the only agency conflict. | Also remember: - shareholders vs creditors; - controlling vs minority shareholders; |
| 4.3 | More regulation ≠ automatically better governance. | Governance must balance benefits against compliance and flexibility costs. |
| 5.1 | Scope Boundary | [CORE CF4] Fokus 5.1 adalah apa aset investasinya, cash flow apa yang diberikan, risiko apa yang ditanggung investor, dari mana return berasal, seberapa likuid/berjangka aset tersebut, dan di pasar seperti apa aset diperdagangkan. Karena itu note ini memusatkan perhatian pada money-market instruments, long-term debt/fixed-income claims, common stock, preferred stock, securitized claims, dan pooled investment vehicles |
| 5.1 | Important Distinction | Market price adalah apa yang dibayar market sekarang. Intrinsic value adalah estimate fundamental value berdasarkan assumptions. Keduanya bukan sinonim secara definisi. |
| 5.1 | Historical Data Note | Angka return di textbook adalah historical sample, bukan expected return yang guaranteed untuk future. Jangan menghafal angka tahun tertentu sebagai rule universal. Yang penting adalah risk-return pattern dan variability. |
| 5.1 | Jangan Salah Pikir | 1. “Government bond tidak punya default risk, jadi tidak bisa rugi.” Salah. Long-term bond price dapat turun saat market rates naik. 2. “Saham memberi return lebih tinggi daripada bond.” Salah sebagai certainty. Historical average lebih tinggi tidak berarti setiap period lebih tinggi. 3. “Securitization menghilangkan risk.” Salah. Risk terutama dipindah, pooled, dan redistribusi; kualitas underlying tetap menentukan. |
| 5.1 | Exam Trap — Case A | - Trap: Mengklasifikasikan common stock sebagai short-term karena holding period investor pendek. - Mengapa distractor terlihat benar: Investor memang bisa menjualnya dalam beberapa bulan. - Cara menghindari: Money vs capital market didasarkan pada security's original maturity/nature, bukan investor holding period. |
| 5.1 | Exam Trap — Case B | - Trap: Menyamakan “no default risk” dengan “no risk”. - Mengapa distractor terlihat benar: Government securities sering disebut safe. - Cara menghindari: Pisahkan risk ke dimensions: default, interest-rate, liquidity, inflation/reinvestment. |
| 5.1 | Exam Trap — Case C | - Trap: Memilih asset hanya karena expected return numerically lebih tinggi. - Mengapa distractor terlihat benar: Soal memberi angka 10% vs 7% sehingga comparison tampak selesai. - Cara menghindari: Setelah menghitung return, selalu tanyakan: “return untuk risk apa?” |
| 5.1 | Exam Trap — Case D | - Trap: Diversification = elimination of all risk. - Mengapa distractor terlihat benar: Banyak small loans memang mengurangi idiosyncratic concentration. - Cara menghindari: Bedakan diversification of independent risk dari elimination of aggregate/systematic risk. |
| 5.1 | Definition Trap | Debt vs Equity Debt = contractual creditor claim. Equity = residual ownership claim. |
| 5.1 | Logic Trap | - Contractual cash flow ≠ guaranteed realized return. Bond dapat turun harga bila rates/credit perception berubah. - Residual claim ≠ fixed income. Common dividend tidak contractual. - Higher historical return ≠ superior future outcome. Historical averages adalah evidence, bukan promise. |
| 5.1 | Calculation Trap | Salah — stock return hanya dividend yield $r_s=\frac{D_1}{P_0}$ |
| 5.1 | Calculation Trap | Salah — mengira bond price bergerak searah dengan required yield $r\uparrow \Rightarrow P\uparrow$ |
| 5.1 | Interpretation Trap | Jika historical average return saham lebih tinggi daripada Treasury bills, kesimpulan yang valid adalah bahwa dalam sample textbook saham memberikan higher average return dengan jauh lebih besar variability. Kesimpulan yang tidak valid adalah “saham pasti mengalahkan Treasury bills untuk setiap holding period.” |
| 5.1 | Interpretation Trap | Jika bond pemerintah memiliki no default risk dalam benchmark textbook, jangan menyimpulkan “nilainya selalu stabil.” Long-term fixed-rate bond tetap dapat mengalami substantial price change ketika market yield berubah. |
| 5.1 | Red Flags |  |
| 5.2 | Scope Boundary | [CORE CF4] Silabus secara eksplisit meminta forwards, futures, options, swaps, dan pasar dari instrumen tersebut. Dari paket referensi Topik 5, pembahasan derivative secara langsung dan substansial berada terutama pada Brigham Bab 8 (financial options) dan Brigham Bab 23 (derivatives and risk management). Berk & DeMarzo Bab 10 dan 13 mendukung konteks risk, expected return, diversification, dan market pricing, tetapi |
| 5.2 | Important Distinction | Hedging ≠ making money on the derivative. Hedge yang baik dapat menghasilkan kerugian pada derivative jika kerugian itu diimbangi oleh keuntungan pada underlying exposure. |
| 5.2 | Forward bukan option | Forward tidak memberi hak untuk mundur ketika tidak menguntungkan. Kedua pihak mempunyai contractual obligation. |
| 5.2 | Jangan Salah Pikir | Payoff ≠ profit. Option buyer membayar premium di awal. Karena itu long option dapat mempunyai positive payoff tetapi tetap menghasilkan negative profit jika payoff lebih kecil daripada premium yang dibayar. |
| 5.2 | Jangan Salah Pikir | Hedge ≠ elimination of every possible risk. Hedging dapat mengurangi satu source of uncertainty tetapi menyisakan basis risk, counterparty risk, liquidity risk, atau opportunity cost. |
| 5.2 | Exam Trap — Case A | - Trap: memakai $K-S_T$ untuk long position. - Mengapa distractor terlihat benar: formula tersebut memang valid, tetapi untuk short forward. - Cara menghindari: long = benefit from price ↑ → $S_T-K$. |
| 5.2 | Exam Trap — Case B | - Trap: menganggap karena perusahaan “akan membeli”, maka harus short untuk “menjual kontrak”. - Mengapa distractor terlihat benar: istilah buy/sell physical asset bercampur dengan long/short derivative. - Cara menghindari: hedge direction ditentukan oleh loss state, bukan kata “buyer/seller” saja. |
| 5.2 | Exam Trap — Case C | - Trap: menganggap forward dapat “tidak dipakai” seperti option. - Mengapa distractor terlihat benar: keduanya sama-sama menentukan future-price exposure. - Cara menghindari: forward/futures = obligation; option holder = right. |
| 5.2 | Exam Trap — Case D | - Trap: menjumlahkan semua rates tanpa memperhatikan receive vs pay. - Mengapa distractor terlihat benar: seluruh angka terlihat seperti “cost”. - Cara menghindari: beri tanda cash flow: pay = negatif, receive = positif. |
| 5.2 | Definition Trap | Forward vs Futures Forward = customized bilateral obligation, counterparty risk lebih besar. Futures = standardized, exchange-traded, marked-to-market. |
| 5.2 | Logic Trap | - Derivative gain ≠ successful business outcome. Hedge dinilai bersama underlying exposure. - Hedging ≠ eliminating all risk. Basis, counterparty, liquidity, dan operational risks dapat tersisa. - Low initial cash requirement ≠ low risk. Leverage dapat memperbesar losses. |
| 5.2 | Calculation Trap | Forward sign error Salah untuk long forward: |
| 5.2 | Interpretation Trap | Sebuah airline melakukan hedge fuel price. Fuel price kemudian turun dan futures position rugi. Tidak otomatis berarti hedge adalah keputusan buruk. Airline dapat memperoleh benefit pada physical fuel purchase yang lebih murah. Yang dinilai adalah combined exposure, bukan derivative P/L secara terpisah. |
| 5.2 | Red Flags | \| Keyword / Condition \| Apa yang Harus Dipikirkan \| \|---\|---\| \| “will buy in the future” \| Risk = price increase → consider long hedge \| |
| 5.3 | Scope Boundary | [CORE CF4] Silabus meminta faktor ekonomi utama yang memengaruhi market price dan total return. Sumber yang paling langsung untuk macro/market channel adalah Brigham Bab 1, khususnya pembahasan cost of money, monetary/fiscal/business/international influences, serta hubungan financial markets dengan required returns. Berk & DeMarzo Bab 10 digunakan untuk risk-return, diversification, systematic risk, dan risk premium. |
| 5.3 | Important Distinction | Economic condition ≠ market price direction secara otomatis. Satu economic event dapat mengubah cash-flow expectations dan discount rate secara bersamaan, bahkan dengan arah yang berlawanan. |
| 5.3 | Exam Trap | Higher risk tidak berarti realized return pasti lebih tinggi. Yang meningkat adalah expected/required return, bukan guaranteed return. |
| 5.3 | Important Distinction | Expected inflation vs unexpected inflation Market pricing terutama bereaksi terhadap expectations. Jika inflation sudah sepenuhnya diantisipasi, sebagian pengaruhnya sudah dapat tercermin pada market yields dan prices sebelum data aktual diumumkan. |
| 5.3 | Exam Trap | Nominal gain ≠ real wealth gain. Asset dapat memberikan positive nominal return tetapi hampir tidak meningkatkan purchasing power jika inflation tinggi. |
| 5.3 | Important Distinction | Volatility tinggi ≠ otomatis required return tinggi. Dalam diversified portfolio, yang relevan adalah exposure terhadap non-diversifiable risk. |
| 5.3 | Exam Trap | Jangan menganggap higher foreign nominal rate otomatis merupakan better investment. Exchange-rate movement dan risk dapat mengubah realized return. |
| 5.3 | Important Distinction | Government-rate movement ≠ corporate yield movement satu-for-satu. Corporate yield juga mengandung compensation untuk credit dan other relevant risks. |
| 5.3 | Exam Trap | Coupon rate ≠ total bond return. Jika bond dijual sebelum maturity, perubahan market price dapat membuat realized total return berbeda dari coupon rate. |
| 5.3 | Nominal Return vs Real Return | Nominal return mengukur pertumbuhan nominal money. Real return mengukur purchasing-power growth setelah inflation. |
| 5.3 | Required Return vs Realized Return | Required/expected return adalah compensation demanded ex ante. Realized return adalah outcome actual ex post. |
| 5.3 | Risk-Free Rate vs Risk Premium | Risk-free/base rate dan compensation untuk risky exposure adalah components berbeda. |
| 5.3 | Economic Growth vs Market Return | Economic growth dan investment return berkaitan melalui expectations, cash flows, dan discount rates; keduanya bukan variable yang identik. |
| 5.3 | Interest rates naik → bond price naik karena investor mendapat yield lebih besar | Salah untuk existing fixed-rate bond. Market yield yang lebih tinggi membuat existing fixed cash flows kurang attractive, sehingga price turun. |
| 5.3 | Inflation naik → semua stock pasti turun | Terlalu absolut. Higher inflation dapat menaikkan discount rate tetapi juga mengubah nominal revenues/costs. Net equity effect depends on economics of the firm and market expectations. |
| 5.3 | Recession → interest rates selalu naik | Tidak selalu. Credit spreads/risk premiums dapat naik, sementara risk-free rates dapat turun karena weaker demand atau policy response. |
| 5.3 | Risk naik → realized return pasti naik | Risk dapat meningkatkan required expected return, tetapi actual realized outcome tetap uncertain. |
| 5.4 | Source Boundary | [CORE CF4] Materi paling langsung untuk Topik 5.4 berasal dari Berk & DeMarzo Chapter 10, khususnya historical returns, volatility, diversification, systematic risk, beta, dan CAPM-style relationship. Chapter 13 digunakan untuk market-efficiency/new-information perspective dan untuk menunjukkan bahwa empirical return patterns dapat menyimpang dari simple CAPM benchmark. Brigham Chapter 7 mendukung hubungan expected s |
| 5.4 | Important Distinction | Economic variable dan asset return bukan identik. Return adalah outcome pada security. Economic variable adalah salah satu possible driver dari cash flows, discount rates, atau market-wide risk. |
| 5.4 | Exam Trap | Historical capital gain tidak sama dengan expected growth rate. Formula constant-growth adalah forward-looking valuation relationship dengan assumptions tertentu. |
| 5.4 | Exam Trap | High required return does not mean high realized return is guaranteed. Required return adalah price of risk before outcome is known. |
| 5.4 | Historical Context | Angka 1926–2011 adalah textbook historical sample, bukan parameter universal dan bukan forecast. Yang perlu dipahami adalah pattern dan interpretation. |
| 5.4 | Important Distinction | Data antar broad asset portfolios dapat menunjukkan “higher volatility ↔ higher average return”, tetapi untuk individual securities, stand-alone volatility bukan sufficient measure dari priced risk. |
| 5.4 | Exam Trap | Jangan memilih geometric return hanya karena horizon datanya panjang jika pertanyaannya meminta estimate expected one-period return dari historical sample. Sebaliknya, jangan menggunakan arithmetic average untuk menyatakan actual compound wealth growth. |
| 5.4 | Exam Trap | Beta bukan probability of loss. Beta bukan standard deviation. Beta bukan correlation saja. |
| 5.4 | Exam Trap | “Risky security must always have expected return above risk-free rate” salah dalam CAPM jika security memiliki negative beta. |
| 5.4 | Critical Distinction | Higher required future return can create a negative current price return. Ini salah satu alasan historical realized premium tidak boleh dibaca mechanically sebagai current required premium. |
| 5.4 | CF4 Scope | Untuk CF4, lesson utamanya bukan menghafal advanced factor-model coefficients. Lesson-nya: Theoretical model gives a benchmark; historical return patterns may show departures, so empirical relationships must be interpreted carefully. |
| 5.4 | Exam Trap | Jika inflation tinggi, jangan menilai investment outcome hanya dari nominal return. |
| 5.4 | Caution | Bila dua channels bergerak opposite, direction net tidak dapat ditentukan tanpa additional information. |
| 5.4 | Trap 1 — “Higher volatility always means higher expected return.” | Salah untuk individual assets. Diversifiable volatility does not earn a risk premium in CAPM. |
| 5.4 | Trap 2 — “Historical average return is the expected future return.” | Salah. Historical average is only an estimate and may have large estimation error. |
| 5.4 | Trap 3 — “Arithmetic average equals long-run compound growth.” | Salah jika returns fluctuate. |
| 5.4 | Trap 4 — “Higher required return means current realized return rises.” | Salah. Higher required return often causes immediate price decline. |
| 5.4 | Trap 5 — “Beta is total risk.” | Salah. Beta is systematic market sensitivity. |
| 5.4 | Trap 6 — “Negative beta is impossible because risky assets must beat the risk-free asset.” | Salah. Negative-beta asset can provide insurance and therefore have expected return below \(r_f\). |
| 5.4 | Trap 7 — “Good economic data always produces positive stock return.” | Salah. Market reaction depends on what had already been expected and on discount-rate effects. |
| 5.4 | Trap 8 — “Corporate bond coupon is its total return.” | Salah. Market-price movement creates capital gain/loss. |
| 5.4 | Trap 9 — “Observed correlation proves causal relationship.” | Salah. Historical co-movement may reflect common variables, changing regimes, or omitted risks. |
| 5.4 | Trap 10 — “Positive alpha proves free money.” | Tidak otomatis. Chapter 13 presents alternative interpretations: market/friction inefficiency or model misspecification/unmeasured risk. |

## 8. Preliminary Knowledge Architecture Observed

Tanpa menentukan versi canonical, 22 notes saat ini membentuk beberapa cluster besar:

### A. Accounting & Reporting Layer
- financial reporting purpose;
- accounting concepts and qualitative characteristics;
- recognition / measurement / presentation / disclosure;
- statement architecture;
- transaction mechanics;
- group/consolidated accounts;
- ratio calculation and interpretation;
- taxation interactions.

### B. Security & Financing Layer
- equity claims;
- long-term debt;
- short/medium-term finance;
- embedded options / derivatives;
- capital raising;
- issuer vs investor consequences.

### C. Corporate Finance Decision Layer
- business entity structure;
- sources of finance;
- capital structure;
- dividend/distribution policy;
- project cash flows;
- cost of capital;
- investment appraisal.

### D. Market, Governance & Resource Allocation Layer
- market-value formation;
- capital-market access;
- real vs financial resources;
- agency conflicts;
- governance mechanisms;
- market for corporate control.

### E. Investment & Economic Return Layer
- investment asset characteristics;
- forwards/futures/options/swaps;
- economic drivers of prices;
- total/expected/required/realized returns;
- systematic risk, beta, CAPM;
- nominal vs real return.

## 9. Stage-1 Observations — No Reconciliation Yet

Beberapa structural observations sudah dapat dibuat tanpa memilih “benar/salah” antar-versi:

1. **CF4 memiliki overlap besar yang memang legitimate.** Contoh: debt muncul sebagai security (2.2), financing choice (3.2), cost component (3.3), investment asset (5.1), dan macro-sensitive instrument (5.3).
2. **Perspective adalah sumber redundancy utama.** Banyak konsep sama muncul dari issuer, investor, creditor, analyst, atau management perspective.
3. **Formula overlap terkonsentrasi pada beberapa hubs:** ratios, WACC/cost of capital, NPV/IRR, valuation, option/derivative payoffs, dan return/risk formulas.
4. **Accounting terminology overlap paling padat di Topik 1**, terutama revenue/cash, expense/cash, recognition/measurement/presentation/disclosure, statement names, equity/retained earnings, liquidity/solvency.
5. **Derivative overlap paling jelas antara 2.4 dan 5.2.** Ini kemungkinan membutuhkan “same mechanism, different purpose/context” mapping, bukan penghapusan salah satu topik.
6. **Risk-return concepts menyebar dari 3.3 ke 5.3–5.4.** Stage 2 perlu membedakan issuer cost of capital, investor required return, expected return, historical realized return, dan market risk premium.
7. **Textbook-context / jurisdiction-specific material sudah sering diberi label di topic notes.** Pada Stage 2 label tersebut harus diperiksa konsistensinya, terutama taxation, regulatory filings, entity law, dan legacy accounting terminology.
8. **Formula existence tidak berarti formula harus masuk master reference.** Stage 1 hanya mencatat keberadaannya.

## 10. Exit Criteria Stage 1

Stage 1 dianggap selesai karena:

- [x] seluruh 22 topic notes ter-cover;
- [x] knowledge objects diinventarisasi;
- [x] formula blocks diinventarisasi;
- [x] explicit warning/trap callouts diinventarisasi;
- [x] cross-topic collision families di-flag;
- [x] belum ada canonical selection;
- [x] belum ada source yang dihapus karena redundancy.

## 11. Recommended Next Stage

**Stage 2 — Cross-Source Reconciliation**

Pada Stage 2, setiap collision family akan diperiksa terhadap:
1. Silabus CF4 sebagai scope authority;
2. chapter/subchapter official textbook yang diizinkan;
3. topic notes sebagai current synthesis layer.

Hubungan antar-versi kemudian diklasifikasikan sebagai:
- Exact Conceptual Duplicate
- Same Concept, Different Terminology
- Same Concept, Different Perspective
- Same Economic Substance, Different Accounting Presentation
- General Principle vs Special Case
- Definition vs Consequence
- Accounting Treatment vs Economic Meaning
- Formula Equivalence
- Same Formula, Different Convention
- Exact vs Approximation
- Shortcut / Rule of Thumb
- Genuinely Distinct
- Potentially Misleading
- Textbook / Historical Context

> [!IMPORTANT]
> **Canonical terminology, canonical accounting treatment, dan formula status belum boleh di-freeze pada Stage 2.** Stage 2 hanya menyelesaikan relationship classification dan source conflict resolution.
