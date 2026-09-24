---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "3"
chapter_title: "Financial Decision Making and the Law of One Price"
cf4_topics: ["3.3 Capital Budgeting and Cost of Capital", "3.4 Investment Return Methods"]
cf4_relevance: "High"
source_scope: "Berk & DeMarzo, Chapter 3 — Sections 3.1–3.5; appendix excluded from core scope"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, NPV, PresentValue, Arbitrage, LawOfOnePrice]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 3: Financial Decision Making and the Law of One Price

> [!ABSTRACT] Chapter in One View
> Chapter 3 membangun fondasi cara berpikir valuation dalam corporate finance. Masalah utamanya sederhana: **bagaimana membandingkan costs dan benefits yang bentuk, waktu, atau tempat perdagangannya berbeda?** Berk & DeMarzo menjawabnya dengan **Valuation Principle**: gunakan competitive market prices untuk mengubah setiap cost dan benefit ke common unit of value, biasanya **cash today**.
>
> Ketika cash flows terjadi pada waktu berbeda, market interest rate bertindak seperti **exchange rate across time**. Satu dolar hari ini dapat dikonversi menjadi lebih dari satu dolar di masa depan melalui investment; sebaliknya future cash flow dapat dikonversi menjadi present value melalui discounting.
>
> Dari sini muncul **Net Present Value (NPV)**: present value seluruh benefits dikurangi present value seluruh costs. Project dengan positive NPV menambah wealth; jika memilih beberapa alternatives, pilih yang **NPV-nya paling tinggi**. NPV bukan sekadar score—secara economic, NPV adalah **cash value today** dari keputusan tersebut.
>
> Chapter kemudian masuk ke **arbitrage**. Jika dua equivalent opportunities memiliki harga berbeda di competitive markets, investor dapat membeli yang murah dan menjual yang mahal untuk memperoleh profit tanpa risk dan tanpa net investment. Trading semacam ini mendorong harga menuju kesetaraan. Inilah **Law of One Price**.
>
> Law of One Price menghasilkan **no-arbitrage pricing**: harga security harus sama dengan present value cash flows yang dapat direplikasi. Karena trades securities pada normal market memiliki NPV nol, financing transaction sendiri tidak menciptakan value. Hal ini melahirkan **Separation Principle**—investment decision dapat dinilai terpisah dari financing decision.
>
> Terakhir, **value additivity** menyatakan value portfolio sama dengan jumlah value komponennya. Karena firm adalah kumpulan projects dan investments, maximizing project NPV konsisten dengan maximizing total firm value.
>
> Untuk CF4, Sections **3.1–3.5** secara eksplisit tercantum dalam Topik 3 dan terutama mendukung [[3.3 Capital Budgeting and Cost of Capital]] serta [[3.4 Investment Return Methods]].

## 1. Why This Chapter Exists

Corporate finance pada akhirnya adalah ilmu membuat keputusan dengan konsekuensi ekonomi. Financial manager harus memilih apakah perusahaan sebaiknya:

- menjalankan project atau menolaknya;
- membeli atau menyewa asset;
- berinvestasi sekarang atau nanti;
- menerima satu contractual opportunity atau melewatkannya;
- memilih satu dari beberapa alternatives;
- dan kemudian menentukan bagaimana project tersebut dibiayai.

Masalahnya, costs dan benefits jarang datang dalam bentuk yang langsung comparable.

```text
Decision
↓
Costs dan benefits
↓
Bisa berbeda dalam:
- waktu
- currency
- commodity / asset
- risk
↓
Harus diubah ke common unit of value
↓
Cash today
```

Chapter 3 memberikan machinery dasar untuk melakukan conversion tersebut.

Berk & DeMarzo sengaja memulai dari kasus yang **risk-free / certain**. Tujuannya adalah memisahkan dua persoalan:

1. **bagaimana menentukan value ketika timing berbeda**;
2. baru kemudian, pada bagian buku selanjutnya, **bagaimana menyesuaikan valuation ketika cash flow risky**.

Jadi chapter ini adalah foundation layer. Konsep NPV, discounting, arbitrage, replication, dan Law of One Price akan dipakai lagi pada bonds, stocks, derivatives, capital structure, dan project valuation.

---

## 2. Chapter Map

```text
Chapter 3 — Financial Decision Making and the Law of One Price
│
├── 3.1 Valuing Decisions
│   ├── Analyzing Costs and Benefits
│   ├── Competitive Market Prices
│   └── Valuation Principle
│
├── 3.2 Interest Rates and the Time Value of Money
│   ├── Time Value of Money
│   ├── Interest Rate as Exchange Rate Across Time
│   ├── Present Value
│   ├── Future Value
│   └── Discount Factor / Discount Rate
│
├── 3.3 Present Value and the NPV Decision Rule
│   ├── Net Present Value
│   ├── NPV as Cash Today
│   ├── Accept / Reject Rule
│   ├── Choosing among Alternatives
│   └── NPV and Cash Needs
│
├── 3.4 Arbitrage and the Law of One Price
│   ├── Arbitrage Opportunity
│   ├── Normal Market
│   └── Law of One Price
│
└── 3.5 No-Arbitrage and Security Prices
    ├── Replication and Security Valuation
    ├── No-Arbitrage Price
    ├── Interest Rates from Bond Prices
    ├── NPV of Security Trading
    ├── Separation Principle
    ├── Value Additivity
    └── Firm Value
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 3.1 Valuing Decisions | High | [[3.4 Investment Return Methods]] |
| 3.2 Interest Rates and Time Value of Money | High supporting foundation | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| 3.3 Present Value and NPV Decision Rule | Very High | [[3.4 Investment Return Methods]] |
| 3.4 Arbitrage and Law of One Price | High conceptual foundation | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| 3.5 No-Arbitrage and Security Prices | High | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| Chapter 3 Appendix — Price of Risk | `[BEYOND CURRENT SOURCE SCOPE]` | Silabus Topik 3 hanya menetapkan Chapter 3 §§3.1–3.5 |

> [!IMPORTANT] Scope Note
> Silabus CF4 secara spesifik mencantumkan **Berk & DeMarzo Chapter 3.1–3.5**. Karena itu note ini mempertahankan detail pada lima section tersebut dan **tidak merangkum Appendix “The Price of Risk” sebagai materi inti**. Appendix hanya disebut singkat pada Compression Notes.

---

## 3. 3.1 Valuing Decisions

### Intuisi: “benefit lebih besar dari cost” belum cukup

Secara intuitif, keputusan yang baik adalah keputusan ketika benefits melebihi costs. Tetapi kalimat tersebut baru meaningful jika kedua sisi dinyatakan dalam **unit value yang sama**.

Contoh textbook menggunakan trade:

- memberikan **400 ounces silver**;
- menerima **10 ounces gold**.

Tidak masuk akal membandingkan 400 dengan 10 secara langsung karena units dan economic values berbeda. Kita perlu mengubah keduanya menjadi common unit: **cash today**.

Jika:

- silver = $15 per ounce;
- gold = $900 per ounce;

maka:

$$
\text{Value of silver given up}
=400(15)
=\$6{,}000
$$

$$
\text{Value of gold received}
=10(900)
=\$9{,}000
$$

Net value:

$$
\$9{,}000-\$6{,}000=\$3{,}000
$$

Trade meningkatkan wealth sebesar $3,000.

### Analyzing Costs and Benefits

Financial manager tidak selalu menghitung seluruh underlying business effects sendirian. Textbook menunjukkan bahwa quantification dapat membutuhkan input dari berbagai fungsi:

- **marketing** → forecast revenue effect dari advertising;
- **accounting** → estimate tax savings;
- **economics** → demand response terhadap price change;
- **organizational behavior** → productivity effect dari management change;
- **strategy** → competitor response;
- **operations** → cost savings dari modernization.

Setelah economic consequences berhasil diidentifikasi dan dikuantifikasi, tugas finance adalah **membandingkan value costs dan benefits secara konsisten**.

### Competitive Market Prices Determine Cash Value

A **competitive market** dalam framing chapter ini adalah market tempat suatu good dapat **dibeli dan dijual pada harga yang sama**.

Jika market semacam itu tersedia, market price menentukan cash value dari good tersebut.

Mengapa personal preference tidak menentukan value?

Misalnya jeweler tidak butuh gold. Itu tidak menurunkan value gold baginya, karena ia bisa langsung menjual gold pada competitive market price. Sebaliknya, meskipun ia sangat membutuhkan gold, ia juga tidak perlu value gold di atas market price, karena ia dapat membelinya pada market price tersebut.

```text
Competitive market exists
↓
Good can be bought and sold at same price
↓
Market price = cash-equivalent value
↓
Personal taste / intended use tidak mengubah market value
```

> [!WARNING] Important Distinction
> **Market value ≠ personal utility.**
>
> Seseorang dapat sangat menyukai atau membenci sebuah item, tetapi jika item tersebut liquid dan dapat dibeli/dijual pada competitive price, **cash value** item tetap ditentukan market price.

### Example — Concert Tickets

**Situation**

Prize A: 4 Def Leppard tickets, face value $40 each.  
Prize B: 2 tickets ke favorite band's sold-out show, face value $45 each.

Observed competitive resale prices:

- Def Leppard = $30 each;
- favorite band = $50 each.

**Reasoning**

Face value bukan relevant economic value jika tickets aktif diperdagangkan di secondary market.

**Calculation**

$$
4(30)=\$120
$$

$$
2(50)=\$100
$$

**Meaning**

Pilih 4 Def Leppard tickets. Mereka dapat dijual $120, lalu $100 digunakan membeli 2 favorite-band tickets, menyisakan $20.

Lesson-nya bukan tentang concert tickets, melainkan:

> **Gunakan competitive market value, bukan preference atau accounting/face amount yang tidak merefleksikan opportunity value.**

### The Valuation Principle

Ini central principle chapter:

> **Value suatu asset bagi firm atau investors ditentukan oleh competitive market price. Costs dan benefits suatu decision harus dinilai menggunakan market prices; jika value benefits melebihi value costs, decision meningkatkan market value firm.**

Secara generic:

$$
\text{Net Value}
=
\text{Value of Benefits}
-
\text{Value of Costs}
$$

Jika semua terms sudah dalam cash today:

$$
\text{Net Value}>0
\Rightarrow
\text{wealth increases}
$$

### Example — Oil and Copper Opportunity

**Situation**

Firm dapat memperoleh:

- 200 barrels oil;
- 3,000 pounds copper;

untuk total price $12,000.

Market prices:

- oil = $50/barrel;
- copper = $2/pound.

**Calculation**

$$
200(50)=\$10{,}000
$$

$$
3000(2)=\$6{,}000
$$

Total market value:

$$
\$10{,}000+\$6{,}000=\$16{,}000
$$

Net value:

$$
\$16{,}000-\$12{,}000=\$4{,}000
$$

**Meaning**

Ambil opportunity tersebut. Kekhawatiran bahwa firm tidak membutuhkan seluruh commodities atau bahwa prices mungkin turun nanti tidak mengubah **current value** dari opportunity. Firm dapat segera menjual jika tidak membutuhkan commodities.

> [!INFO] CF4 Connection
> Section 3.1 adalah conceptual precursor untuk capital budgeting. NPV bukan dimulai dari formula, tetapi dari principle bahwa decision harus dinilai berdasarkan **incremental economic value** dari benefits dan costs.

---

## 4. 3.2 Interest Rates and the Time Value of Money

### Intuisi: satu dolar sekarang tidak sama dengan satu dolar nanti

Suppose investment:

- cost = $100,000 today;
- benefit = $105,000 in one year.

Subtracting $105,000 − $100,000 = $5,000 secara langsung salah karena timing-nya berbeda.

Jika $100,000 hari ini dapat invested dengan interest 7%, maka satu tahun lagi menjadi:

$$
100{,}000(1.07)=107{,}000
$$

Dengan tidak menginvestasikan di project, investor dapat memiliki $107,000. Jadi project yang hanya menghasilkan $105,000 sebenarnya lebih buruk.

Inilah **time value of money**:

> uang hari ini dan uang di masa depan memiliki economic value berbeda karena uang hari ini dapat diinvestasikan.

### Interest Rate as an Exchange Rate Across Time

Berk & DeMarzo membuat analogy yang sangat penting:

- exchange rate antar-currency menukar dollars dengan euros;
- **interest rate menukar dollars today dengan dollars in the future**.

Jika risk-free rate satu tahun adalah $r_f$, maka:

$$
\$1\text{ today}
\longleftrightarrow
\$(1+r_f)\text{ in one year}
$$

Textbook menyebut:

$$
1+r_f
$$

sebagai **interest rate factor**.

Jika $r_f=7\%$:

$$
1+r_f=1.07
$$

Jadi market exchange rate across time adalah:

$$
1.07\ \text{dollars in one year per dollar today}
$$

### Future Value

Jika cash today dikonversi ke future value:

$$
FV=C_0(1+r)
$$

Untuk $100,000 pada 7%:

$$
FV=100{,}000(1.07)=107{,}000
$$

Economic meaning:

> mengeluarkan $100,000 hari ini memiliki **opportunity cost** sebesar $107,000 setahun kemudian.

### Present Value

Sebaliknya, untuk mencari value today dari future cash flow:

$$
PV=\frac{C_1}{1+r}
$$

Untuk $105,000 setahun lagi pada 7%:

$$
PV
=
\frac{105{,}000}{1.07}
=
98{,}130.84
$$

Maka investment opportunity tadi memiliki value today:

$$
98{,}130.84-100{,}000
=-1{,}869.16
$$

Result ini equivalent dengan menghitung net value dalam future dollars:

$$
105{,}000-107{,}000=-2{,}000
$$

dan:

$$
-1{,}869.16(1.07)=-2{,}000
$$

Decision tetap sama apakah comparison dilakukan pada present date atau future date—yang penting **semua cash flows dibawa ke tanggal yang sama**.

### Present Value vs Future Value

| Concept | Meaning | Formula one period |
|---|---|---|
| Future value | Value masa depan dari cash hari ini | $FV=C_0(1+r)$ |
| Present value | Cash today equivalent dari future cash flow | $PV=\dfrac{C_1}{1+r}$ |

### Discount Factor

Term:

$$
\frac{1}{1+r}
$$

adalah **discount factor** untuk satu period.

Jika $r=7\%$:

$$
\frac{1}{1.07}=0.93458
$$

Interpretation:

> $1 yang diterima satu tahun dari sekarang bernilai sekitar $0.93458 hari ini ketika market rate 7%.

Risk-free interest rate juga disebut **discount rate** untuk risk-free cash flow.

> [!WARNING] Important Distinction
> **Interest rate factor** dan **discount factor** adalah reciprocal:
>
> $$
> \text{Interest Rate Factor}=1+r
> $$
>
> $$
> \text{Discount Factor}=\frac{1}{1+r}
> $$
>
> Yang pertama membawa value **forward**; yang kedua membawa value **backward**.

### Example — Delay of Bay Bridge Rebuilding

**Situation**

Cost rebuild in 2004 = $3.0 billion.  
Jika ditunda ke 2005, engineers estimate cost naik 10% → $3.3 billion.  
Interest rate = 2%.

**Reasoning**

Tidak boleh compare $3.0b today dengan $3.3b next year secara langsung. Convert delayed cost menjadi 2004 dollars.

**Calculation**

$$
PV(3.3\text{ billion})
=
\frac{3.3}{1.02}
=
3.235\text{ billion}
$$

Cost of delay in 2004 dollars:

$$
3.235-3.000=0.235\text{ billion}
$$

$$
=\$235\text{ million}
$$

**Meaning**

Delay satu tahun secara economic equivalent dengan kehilangan $235 million today.

### Figure 3.1 — Market Prices as Conversion Tools

Figure 3.1 menyatukan tiga conversion mechanisms:

```text
Competitive market price
→ convert a good into dollars today

Exchange rate
→ convert one currency into another

Interest rate
→ convert dollars at one date into dollars at another date
```

Core lesson:

> Valuation bekerja dengan **market exchange rates**. Interest rate bukan sekadar percentage return; ia adalah market price untuk moving purchasing power across time.

---

## 5. 3.3 Present Value and the NPV Decision Rule

### Net Present Value

Setelah semua benefits dan costs dikonversi menjadi present value, project dapat dinilai menggunakan:

$$
\boxed{
NPV
=
PV(\text{Benefits})
-
PV(\text{Costs})
}
$$

Untuk project dengan initial cost $C_0$ dan certain benefit $C_1$ satu tahun kemudian:

$$
NPV
=
\frac{C_1}{1+r_f}-C_0
$$

### NPV Is Cash Value Today

Textbook memberi contoh project:

- invest $500 today;
- receive $550 in one year;
- interest rate = 8%.

PV benefit:

$$
PV(550)
=
\frac{550}{1.08}
=509.26
$$

NPV:

$$
NPV=509.26-500=9.26
$$

Ini berarti project **economically equivalent dengan menerima extra $9.26 cash today**.

Jika firm tidak memiliki $500 cash, ia bahkan dapat borrow $509.26 today, invest $500 di project, dan keep $9.26 immediately. Setahun kemudian:

$$
509.26(1.08)=550
$$

loan dapat dilunasi tepat menggunakan project payoff.

Economic implication:

> **Positive NPV tidak bergantung pada apakah firm sedang punya cash.** Value project berasal dari project cash flows relatif terhadap market opportunity cost.

### The NPV Decision Rule

Textbook rule:

> **When making an investment decision, take the alternative with the highest NPV.**

Karena choosing an alternative dengan NPV tertentu equivalent dengan menerima NPV tersebut sebagai cash today.

#### Accept / Reject

Jika alternative adalah “do project” atau “do nothing”:

- do nothing biasanya $NPV=0$;
- positive NPV → **accept**;
- negative NPV → **reject**;
- zero NPV → indifferent from value standpoint.

$$
NPV>0
\Rightarrow
\text{accept}
$$

$$
NPV<0
\Rightarrow
\text{reject}
$$

> [!WARNING] Important Distinction
> **Positive accounting profit tidak otomatis berarti positive NPV.**
>
> NPV compares economic value of cash flows after accounting for timing and market opportunity cost. Chapter ini bahkan menunjukkan project yang nominally pays $105,000 after costing $100,000 namun tetap negative value ketika market rate 7%.

### Example — Copier Financing Offer

**Situation**

Copier cash price = $9,500 today.  
Manufacturer offers payment $10,000 in one year.  
Risk-free rate = 7%.

**Calculation**

PV future payment:

$$
PV(10{,}000)
=
\frac{10{,}000}{1.07}
=9{,}345.79
$$

Benefit dari tidak membayar $9,500 today:

$$
PV(\text{Benefit})=9{,}500
$$

NPV offer:

$$
NPV
=9{,}500-9{,}345.79
=154.21
$$

**Meaning**

Offer adalah good deal. Nilainya equivalent dengan cash discount today sebesar $154.21.

Jika firm invest $9,345.79 today at 7%:

$$
9{,}345.79(1.07)=10{,}000
$$

maka future obligation dapat dibayar penuh.

### Choosing among Alternatives

Jika alternatives mutually exclusive, jangan sekadar accept semua yang positive NPV. Pilih **highest NPV**.

Textbook Web-hosting example:

1. sell now;
2. scale back for one year then sell;
3. hire manager for one year then sell.

Interest rate = 10%.

| Alternative | Today | One Year | NPV |
|---|---:|---:|---:|
| Sell now | $200,000 | $0 | $200,000 |
| Scale back | −$30,000 | $250,000 | $197,273 |
| Hire manager | −$50,000 | $300,000 | $222,727 |

Thus:

$$
NPV_{Hire}=222{,}727
$$

adalah largest.

Maka hire manager lalu sell one year later adalah best alternative, meskipun membutuhkan cash outlay sekarang.

### NPV and Cash Needs

Ini bagian yang sangat fundamental.

Suppose owner membutuhkan $60,000 cash today. Apakah ia harus sell now karena alternative hire-manager membutuhkan $50,000 upfront?

Tidak.

Berk & DeMarzo menunjukkan bahwa investor dapat **separate investment choice dari consumption timing** melalui borrowing/lending.

Hire manager + borrow:

| Transaction | Today | One Year |
|---|---:|---:|
| Hire manager | −$50,000 | +$300,000 |
| Borrow | +$110,000 | −$121,000 |
| **Total** | **+$60,000** | **+$179,000** |

Sell now + invest excess:

| Transaction | Today | One Year |
|---|---:|---:|
| Sell now | +$200,000 | $0 |
| Invest | −$140,000 | +$154,000 |
| **Total** | **+$60,000** | **+$154,000** |

Kedua strategies memberi $60,000 today, tetapi highest-NPV strategy menghasilkan $25,000 lebih banyak in one year.

PV difference:

$$
\frac{25{,}000}{1.10}=22{,}727
$$

exactly equal dengan difference in NPVs.

### Core Principle: Maximize NPV First

> **Regardless of preferences for cash today versus cash in the future, maximize NPV first. Then borrow or lend to rearrange cash-flow timing according to preferences.**

Ini powerful because project ranking tidak harus berubah hanya karena owner membutuhkan cash hari ini.

> [!INFO] CF4 Connection
> Untuk [[3.4 Investment Return Methods]], ini adalah foundation paling penting dari NPV: **NPV is a value measure, not merely a discounted arithmetic exercise.** Highest NPV means greatest increase in investor wealth under the chapter's competitive-market assumptions.

---

## 6. 3.4 Arbitrage and the Law of One Price

### The Problem: Can the Same Asset Have Two Prices?

Suppose gold trades:

- New York: $850/ounce;
- London: $900/ounce.

Jika kedua markets competitive dan buying/selling possible at those prices, investor dapat:

1. buy gold in New York for $850;
2. simultaneously sell equivalent gold in London for $900;
3. lock in $50 profit per ounce.

No risk. No net investment required.

This is **arbitrage**.

### Arbitrage Opportunity

Textbook defines arbitrage broadly sebagai situation di mana profit dapat diperoleh:

- tanpa risk;
- tanpa net investment.

Karena arbitrage memiliki positive NPV, investors punya incentive kuat untuk exploit it.

```text
Price mismatch
↓
Buy cheap market
Sell expensive market
↓
Risk-free profit
↓
Many investors copy trade
↓
Demand ↑ where cheap
Supply ↑ where expensive
↓
Prices converge
↓
Arbitrage disappears
```

### Why Arbitrage Opportunities Disappear

Arbitrage bukan hanya “cara cari profit.” Ia adalah **mechanism of price discipline**.

Pada example gold:

- buy orders di New York mendorong New York price naik;
- sell orders di London mendorong London price turun;
- process berlanjut sampai price difference hilang.

Karena arbitrageurs bereaksi cepat, normal condition dari competitive markets adalah absence of arbitrage opportunities.

### Normal Market

Berk & DeMarzo menyebut:

> **normal market** = competitive market dengan no arbitrage opportunities.

Istilah ini penting karena banyak results berikut diasumsikan berlaku di normal market.

### Law of One Price

Core statement:

> **If equivalent investment opportunities trade simultaneously in different competitive markets, they must trade for the same price.**

Dengan symbols:

Jika A dan B menghasilkan **equivalent cash flows**, maka:

$$
Price(A)=Price(B)
$$

Jika tidak:

$$
Price(A)\neq Price(B)
\Rightarrow
\text{arbitrage opportunity}
$$

### Why This Law Matters for Valuation

Valuation Principle membutuhkan reliable competitive prices. Law of One Price memastikan bahwa equivalent goods tidak bisa memiliki persistent different prices across competitive markets.

Dengan demikian, kita tidak perlu mengecek semua markets setiap kali melakukan valuation. Any valid competitive price dapat digunakan, selama equivalent opportunities dan relevant market assumptions berlaku.

### Textbook Context — SOES Bandits

Textbook memberi historical example pada NASDAQ: multiple dealers kadang memasang quotes yang sedikit berbeda. Traders yang dapat membeli 1,000 shares pada $580.25 dari satu dealer dan menjual pada $580.30 ke dealer lain dapat memperoleh:

$$
1000(580.30-580.25)=\$50
$$

repeatedly tanpa directional stock-price risk.

Activity semacam ini memaksa dealers meng-update quotes lebih cepat, sehingga discrepancy hilang.

> [!NOTE] [TEXTBOOK CONTEXT]
> Detail institutional NASDAQ SOES bersifat historical. Lesson yang durable adalah: **arbitrage trading mempercepat alignment prices across equivalent trading opportunities.**

---

## 7. 3.5 No-Arbitrage and Security Prices

### Financial Security

A **financial security** adalah investment opportunity yang diperdagangkan di financial market.

Law of One Price dapat digunakan untuk value security ketika kita bisa menemukan **replicating alternative** yang menghasilkan same cash flows.

### Valuing a One-Year Risk-Free Bond

Suppose bond promises $1,000 in one year with no risk. Risk-free rate = 5%.

Question:

> Berapa amount yang harus diinvestasikan di bank today agar menjadi $1,000 one year later?

$$
PV
=
\frac{1000}{1.05}
=952.38
$$

Bank deposit $952.38 today dan bond sama-sama menghasilkan $1,000 one year later.

Therefore, by Law of One Price:

$$
Price(Bond)=952.38
$$

Jika bond price berbeda, arbitrage exists.

### Underpriced Bond

Suppose bond sells for less than $952.38.

Investor dapat:

- borrow $952.38-equivalent amount / finance purchase;
- buy underpriced bond;
- use bond payoff to settle future borrowing;
- pocket initial price difference.

### Overpriced Bond and Short Selling

Suppose bond sells for $960 while replicating deposit costs $952.38.

Investor dapat:

1. short sell bond → receive $960 today;
2. invest $952.38 at 5%;
3. bank investment grows to $1,000;
4. use $1,000 to satisfy short-sale obligation;
5. keep $7.62 today as arbitrage profit.

| Transaction | Today | One Year |
|---|---:|---:|
| Sell bond short | +$960.00 | −$1,000.00 |
| Invest at bank | −$952.38 | +$1,000.00 |
| **Net** | **+$7.62** | **$0** |

### No-Arbitrage Price

General procedure:

1. identify cash flows paid by security;
2. determine cost of replicating those cash flows independently;
3. that replication cost is the security's no-arbitrage price.

Thus:

$$
\boxed{
Price(\text{Security})
=
PV(\text{All cash flows paid by the security})
}
$$

This is Equation 3.3 in the chapter.

### Example — Security Paying $100 Today and $100 in One Year

Risk-free rate = 10%.

PV future $100:

$$
\frac{100}{1.10}=90.91
$$

Total no-arbitrage price immediately before today's payment:

$$
100+90.91=190.91
$$

If market price = $195, security is overpriced by:

$$
195-190.91=4.09
$$

Arbitrageur sells security and replicates both cash flows using $100 today plus bank investment $90.91, locking in $4.09.

### Determining Interest Rates from Bond Prices

No-arbitrage relation dapat dibalik.

Suppose risk-free one-year bond pays $1,000 and trades for $929.80 today.

By no-arbitrage:

$$
929.80
=
\frac{1000}{1+r_f}
$$

Thus:

$$
1+r_f
=
\frac{1000}{929.80}
=1.0755
$$

$$
\boxed{r_f=7.55\%}
$$

This explains why market interest rates can be inferred from prices of risk-free government securities.

### Return on a Risk-Free Bond

Return:

$$
Return
=
\frac{\text{Gain}}{\text{Initial Cost}}
$$

$$
=
\frac{1000-929.80}{929.80}
=7.55\%
$$

Thus, absent arbitrage:

> **all risk-free investments for the same horizon must offer the same return.**

Jika one risk-free investment menawarkan higher return, investors borrow at lower return and invest at higher return. Jika menawarkan lower return, investors sell it and move funds ke alternative.

---

## 8. The NPV of Trading Securities

Consider buying a security.

Cost:

$$
Price(\text{Security})
$$

Benefit:

$$
PV(\text{Security Cash Flows})
$$

In a normal market:

$$
Price(\text{Security})
=
PV(\text{Cash Flows})
$$

Therefore:

$$
NPV(\text{Buy Security})=0
$$

Likewise:

$$
NPV(\text{Sell Security})=0
$$

### Why Security Trades Are Zero-NPV

If buying security had positive NPV, investor could receive positive value simply by trading in competitive market—an arbitrage opportunity.

Another intuition: every voluntary trade has buyer and seller. If price gave positive NPV to buyer by construction, seller would suffer negative NPV and should refuse unless some other difference existed. Competitive normal-market price is the price at which neither side gets free value simply from the exchange.

### Real Investment Creates Value; Financial Trading Rearranges Claims

This is one of the most important conceptual statements in the chapter:

```text
Real project
→ can create economic value
→ positive NPV possible

Trading fairly priced security
→ rearranges timing / ownership / risk of cash flows
→ zero NPV on its own
```

Examples of real value creation:

- new products;
- new stores;
- more efficient production;
- productive assets and projects.

Financing transactions facilitate allocation of cash flows but, in a normal market, do not independently generate value.

---

## 9. Separation Principle

Because normal-market security transactions have zero NPV:

> **Security transactions neither create nor destroy value on their own. Therefore, investment decision can be evaluated separately from financing choice.**

This is the **Separation Principle**.

### Example — Project and Financing

Project:

- initial investment = $10 million today;
- payoff = $12 million in one year risk-free;
- risk-free rate = 10%.

PV benefit:

$$
\frac{12}{1.10}=10.91\text{ million}
$$

NPV:

$$
10.91-10=0.91\text{ million}
$$

Now suppose firm finances $5 million by issuing a security promising $5.5 million in one year.

No-arbitrage price of that security:

$$
\frac{5.5}{1.10}=5\text{ million}
$$

Firm only contributes additional $5 million today.

Project payoff left after security payment:

$$
12-5.5=6.5\text{ million}
$$

PV residual:

$$
\frac{6.5}{1.10}=5.91\text{ million}
$$

NPV to firm after financing:

$$
5.91-5=0.91\text{ million}
$$

Same NPV.

**Meaning:** fair financing changed who contributes cash today and who receives cash later, but **did not change the project's underlying economic value**.

> [!WARNING] Important Distinction
> **“Financing does not matter” is too broad.**
>
> Chapter 3's conclusion is conditional: **in a normal market**, security transactions by themselves are zero-NPV. Later chapters introduce taxes, distress costs, information, agency problems, and other imperfections that can make financing choices matter.

> [!INFO] CF4 Connection
> Separation Principle is an important bridge to [[3.2 Sources of Finance and Capital Structure]] and [[3.3 Capital Budgeting and Cost of Capital]]. First identify whether project creates value; financing mechanics should not be allowed to obscure project NPV under benchmark assumptions.

---

## 10. Valuing a Portfolio and Value Additivity

### Portfolio

A **portfolio** is a collection of securities.

Suppose security C has exactly the same total cash flows as securities A and B combined.

Then:

$$
C\equiv A+B
$$

By Law of One Price:

$$
Price(C)=Price(A+B)
$$

And because acquiring portfolio A+B costs the sum of their prices:

$$
\boxed{
Price(C)=Price(A)+Price(B)
}
$$

This is **value additivity**.

### Why Value Additivity Must Hold

If:

$$
Price(C)>Price(A)+Price(B)
$$

then arbitrageur can:

- buy A and B;
- sell C;
- receive same future cash flows on both sides;
- pocket initial difference.

Conversely, jika C cheaper than A+B, buy C and sell A+B.

Thus package price and sum-of-parts price must coincide in competitive normal markets.

### Example — Holbrook Holdings

Holbrook owns only:

- 60% stake in Harry's Hotcakes;
- one hockey team.

Market value Holbrook = $160 million.  
Market value 100% Harry's Hotcakes = $120 million.

Value of 60% stake:

$$
0.60(120)=72\text{ million}
$$

By value additivity:

$$
160=72+V_{Hockey}
$$

$$
\boxed{V_{Hockey}=88\text{ million}}
$$

### Value Additivity and Firm Value

A firm itself can be viewed as a portfolio of projects and investments.

```text
Firm cash flows
=
sum of project cash flows
↓
Firm value
=
sum of project values
```

Therefore:

> **To maximize total firm value, managers should make decisions that maximize NPV. The NPV of a decision is its contribution to total firm value.**

If a project has:

$$
NPV=+X
$$

then, all else equal, accepting it increases firm value by $X$.

This is the formal bridge between capital budgeting and shareholder-value maximization.

---

## 11. Liquidity and the Informational Role of Prices

Textbook includes a Global Financial Crisis discussion to show why **liquid competitive markets** matter beyond ease of trading.

During the 2008 mortgage-security crisis, trading volume in many mortgage-backed securities collapsed. As liquidity disappeared:

1. holders found it difficult to sell securities;
2. observed market prices became less reliable as measures of value;
3. investors lost an important source of information about asset values;
4. uncertainty about securities spilled over into uncertainty about banks that held them;
5. funding and interbank lending deteriorated further.

Thus liquid markets provide two related functions:

```text
Liquidity
├── Ability to trade
└── Informative market prices
```

> [!NOTE] [TEXTBOOK CONTEXT]
> Historical crisis narrative is supporting context, not the core CF4 calculation. The enduring lesson is that the Valuation Principle relies on **credible competitive market prices**, which can become less informative when markets are severely illiquid.

---

## Chapter Synthesis

Chapter 3 dapat dipahami sebagai satu chain of logic.

Kita mulai dari business decision. Decision memiliki costs dan benefits. Agar dapat dibandingkan, semua harus diterjemahkan ke common economic unit. Jika underlying item memiliki competitive market, **market price** menyediakan conversion rate ke cash today. Inilah Valuation Principle.

Masalah berikutnya muncul ketika cash flows berbeda waktu. Interest rate menyediakan **exchange rate across time**. Future dollars didiskonto menjadi present dollars, atau present dollars di-compound menjadi future dollars. Dengan semua cash flows berada pada same date, kita memperoleh NPV:

$$
NPV=PV(Benefits)-PV(Costs)
$$

Positive NPV berarti decision membuat investor wealthier dan menambah firm value. Jika beberapa mutually exclusive choices tersedia, highest NPV adalah best alternative. Personal preference terhadap timing consumption tidak mengubah ranking, karena investor dapat borrow atau lend setelah memilih highest-value project.

Lalu textbook bertanya: mengapa competitive market prices dapat dipercaya dan konsisten? Jawabannya adalah **arbitrage**. Jika equivalent investment opportunities memiliki different prices, investors dapat buy low dan sell high tanpa risk. Trading pressure menghapus discrepancy. Maka, di normal market, berlaku Law of One Price.

Law of One Price kemudian menjadi pricing engine. Security harus memiliki price sama dengan cost of replicating its cash flows. Untuk risk-free security, cost replication adalah present value menggunakan risk-free rate. Jika security price berbeda dari replication value, arbitrage muncul.

Karena normal-market securities sudah fairly priced, merely buying atau selling them memiliki NPV nol. Value tidak muncul dari packaging claims secara ajaib; value berasal dari real projects. Ini memungkinkan **Separation Principle**: project valuation dapat dilakukan terpisah dari fair financing transaction.

Terakhir, Law of One Price menghasilkan **value additivity**. Jika package cash flows sama dengan sum dari constituent cash flows, package value sama dengan sum of parts. Karena corporation adalah collection of projects, total firm value sama dengan total value proyek-proyeknya. Maka maximizing NPV di project level sama dengan maximizing firm value.

Mental model keseluruhan:

```text
Business decision
      ↓
Identify costs and benefits
      ↓
Use competitive prices
      ↓
Convert to cash today
      ↓
Interest rate handles time
      ↓
Compute NPV
      ↓
Choose highest NPV
      ↓
Why are market values consistent?
      ↓
Arbitrage eliminates price mismatch
      ↓
Law of One Price
      ↓
No-arbitrage security pricing
      ↓
Security trading = zero NPV
      ↓
Separate investment from financing
      ↓
Value additivity
      ↓
Maximize project NPV = maximize firm value
```

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Valuation Principle | Value decisions using competitive market prices | Foundation for economic decision valuation | [[3.4 Investment Return Methods]] |
| Competitive market | Good can be bought and sold at same price | Makes market price a usable cash-value measure | [[3.4 Investment Return Methods]] |
| Time value of money | Money today has different value from money later | Cash flows at different dates are not directly comparable | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| Risk-free interest rate | Rate for borrowing/lending without risk over a period | Exchange rate across time for risk-free cash flows | [[3.3 Capital Budgeting and Cost of Capital]] |
| Interest rate factor | $1+r$ | Converts present cash to future cash | [[3.4 Investment Return Methods]] |
| Discount factor | $1/(1+r)$ | Converts future cash to present cash | [[3.4 Investment Return Methods]] |
| Present value | Cash-today equivalent of future cash flow | Common unit for valuation | [[3.4 Investment Return Methods]] |
| Future value | Future-date equivalent of current cash | Opportunity-cost comparison | [[3.4 Investment Return Methods]] |
| NPV | $PV(Benefits)-PV(Costs)$ | Measures value created by decision | [[3.4 Investment Return Methods]] |
| NPV Decision Rule | Choose highest NPV | Direct wealth-maximizing rule | [[3.4 Investment Return Methods]] |
| Arbitrage | Risk-free profit with no net investment from price inconsistency | Forces equivalent prices to converge | [[3.3 Capital Budgeting and Cost of Capital]] |
| Normal market | Competitive market without arbitrage opportunities | Benchmark for valuation results | [[3.3 Capital Budgeting and Cost of Capital]] |
| Law of One Price | Equivalent opportunities must have same price | Core no-arbitrage valuation principle | [[3.3 Capital Budgeting and Cost of Capital]] |
| Replication | Construct another portfolio with identical cash flows | Determines security value | [[3.3 Capital Budgeting and Cost of Capital]] |
| No-arbitrage price | PV / replication cost of security cash flows | Fair benchmark security price | [[3.3 Capital Budgeting and Cost of Capital]] |
| Separation Principle | Investment valuation can be separated from fair financing | Prevents financing mechanics from distorting project evaluation | [[3.2 Sources of Finance and Capital Structure]], [[3.3 Capital Budgeting and Cost of Capital]] |
| Value additivity | Portfolio value equals sum of component values | Links project values to total firm value | [[3.3 Capital Budgeting and Cost of Capital]], [[3.4 Investment Return Methods]] |
| Liquidity | Ability to trade at or near prevailing price | Supports both trading and informative pricing | [[3.3 Capital Budgeting and Cost of Capital]] |

---

## Compression Notes

### Retained in Detail

- Valuation Principle and competitive-market logic;
- silver/gold valuation intuition;
- Def Leppard ticket example;
- oil/copper opportunity example;
- time value of money;
- interest rate as exchange rate across time;
- present value, future value, interest-rate factor, discount factor;
- Bay Bridge delay example;
- NPV definition and economic interpretation;
- NPV as cash today;
- copier financing example;
- accept/reject and highest-NPV rule;
- website-business mutually exclusive alternatives;
- NPV independence from immediate cash needs;
- arbitrage mechanics and price convergence;
- Law of One Price;
- risk-free bond replication;
- no-arbitrage price;
- short-sale arbitrage intuition;
- inferring risk-free rate from bond price;
- zero-NPV security trading;
- Separation Principle and project-financing example;
- value additivity;
- Holbrook Holdings sum-of-parts example;
- relation between project NPV and total firm value;
- liquidity as source of both tradability and market-value information.

### Condensed

- opening Microsoft / investment narrative;
- extended discussion of cross-functional managerial inputs;
- repeated Concept Check wording;
- detailed NASDAQ SOES history;
- extended institutional mechanics of short sales;
- Stock Index Arbitrage sidebar;
- 2008 mortgage-backed-security crisis narrative;
- repeated verbal explanations after equivalent numerical demonstrations.

### Omitted / Beyond CF4

- MyFinanceLab navigation and exercises;
- end-of-chapter problem set;
- further-reading references;
- full **Chapter 3 Appendix: The Price of Risk**, because CF4 syllabus cites only **Sections 3.1–3.5** for this chapter.

The textbook briefly notes at the end of the chapter that the appendix extends these ideas to risky cash flows and transaction costs. Its broad message is that risky cash flows require a risk premium and that transaction costs can create price bands rather than exact equality. Karena appendix tidak termasuk section range yang ditetapkan silabus Topik 3, detailnya tidak dimasukkan di note ini.

---

## CF4 Connection Map

```text
Chapter 3 — Valuation Foundation
          ↓
Competitive prices + time value of money
          ↓
Present Value
          ↓
NPV Decision Rule
          ↓
[[3.4 Investment Return Methods]]
          ↓
Choose value-creating projects
```

```text
Arbitrage
    ↓
Law of One Price
    ↓
No-arbitrage security valuation
    ↓
Market-required return / discounting logic
    ↓
[[3.3 Capital Budgeting and Cost of Capital]]
```

```text
Security trades at fair prices → NPV = 0
              ↓
Separation Principle
              ↓
Investment decision ≠ financing packaging
              ↓
[[3.2 Sources of Finance and Capital Structure]]
```

---

## Quick Reading Review

- Good financial decision means **value of benefits exceeds value of costs**, not merely nominal benefit amount exceeds nominal cost.
- Competitive market price converts a tradable good into **cash value today**.
- Personal preference does not change market value when the asset can be freely bought/sold at the competitive price.
- Interest rate is an **exchange rate across time**.
- $1 today becomes $(1+r)$ in one period; $1 in one period is worth $1/(1+r)$ today.
- **PV** is the cash-today equivalent of a future cash flow.
- **NPV = PV(Benefits) − PV(Costs)**.
- Positive NPV adds wealth; negative NPV destroys wealth.
- Among mutually exclusive alternatives, choose **highest NPV**, not merely any positive NPV.
- NPV is equivalent to a cash amount today.
- Investor cash-timing preferences do not change project ranking when borrowing/lending is available; maximize NPV first.
- **Arbitrage** exploits price differences among equivalent opportunities without risk and net investment.
- Arbitrage trading causes price discrepancies to disappear.
- **Law of One Price:** equivalent opportunities in competitive markets must have the same price.
- Security price equals the cost of **replicating** its cash flows.
- For a risk-free security, no-arbitrage price is the PV of promised cash flows discounted at the risk-free rate.
- All risk-free investments for the same period must offer the same return in a no-arbitrage market.
- Fairly priced security trades have **NPV = 0**.
- **Separation Principle:** evaluate investment separately from fair-market financing.
- **Value additivity:** value of a portfolio/firm equals the sum of values of its components/projects.
- Therefore, **maximizing project NPV maximizes firm value**.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Valuing decisions and cross-functional input | Chapter 3 §3.1 — *Valuing Decisions* |
| Silver/gold example and competitive market prices | Chapter 3 §3.1 — *Analyzing Costs and Benefits / Using Market Prices to Determine Cash Values* |
| Concert-ticket example | Chapter 3 Example 3.1 |
| Valuation Principle | Chapter 3 §3.1 |
| Oil and copper example | Chapter 3 Example 3.2 |
| Time value of money | Chapter 3 §3.2 — *The Time Value of Money* |
| Interest rate as exchange rate across time | Chapter 3 §3.2 — *The Interest Rate: An Exchange Rate Across Time* |
| PV, FV, discount factor, discount rate | Chapter 3 §3.2 |
| Bay Bridge delay example | Chapter 3 Example 3.3 |
| NPV definition and NPV as cash today | Chapter 3 §3.3 — *Present Value and the NPV Decision Rule* |
| Copier offer | Chapter 3 Example 3.4 |
| Highest-NPV rule and business alternatives | Chapter 3 §3.3; Example 3.5; Tables 3.1–3.2 |
| NPV and cash needs | Chapter 3 §3.3 — *NPV and Cash Needs* |
| Arbitrage and normal market | Chapter 3 §3.4 — *Arbitrage* |
| Law of One Price | Chapter 3 §3.4 — *Law of One Price* |
| SOES historical example | Chapter 3 §3.4 sidebar |
| Security replication and risk-free bond pricing | Chapter 3 §3.5 — *Valuing a Security with the Law of One Price* |
| Over/underpricing arbitrage | Chapter 3 §3.5; Tables 3.3–3.4 |
| No-arbitrage price | Chapter 3 §3.5; Example 3.6 |
| Interest rate from bond prices | Chapter 3 §3.5 |
| Zero-NPV security trading | Chapter 3 §3.5 — *The NPV of Trading Securities and Firm Decision Making* |
| Separation Principle | Chapter 3 §3.5; Example 3.7 |
| Value additivity | Chapter 3 §3.5 — *Valuing a Portfolio* |
| Holbrook Holdings example | Chapter 3 Example 3.8 |
| Liquidity and informational role of prices | Chapter 3 §3.5 Global Financial Crisis sidebar |
| Project NPV and total firm value | Chapter 3 §3.5 — *Value Additivity and Firm Value* |

