---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk; Peter DeMarzo"
chapter: "1"
chapter_title: "The Corporation"
cf4_topics: ["2.1", "2.5", "3.1", "3.2"]
cf4_relevance: "High"
source_scope: "Berk & DeMarzo, Chapter 1 — Sections 1.1–1.3 and chapter summary"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, Corporation, CorporateFinance]
date_created: "2026-08-24"
status: "study-note"
---

# Berk & DeMarzo — Chapter 1: The Corporation

> [!ABSTRACT] Chapter in One View
> Chapter 1 membangun fondasi corporate finance dari tiga pertanyaan: **bentuk organisasi bisnis apa yang dipilih**, **siapa yang memiliki dan mengendalikan corporation**, dan **mengapa stock market penting bagi corporation serta investor**.  
> Berk & DeMarzo membedakan empat bentuk utama firm—**sole proprietorship, partnership, limited liability company (LLC), dan corporation**—dengan fokus pada liability, continuity, transferability of ownership, access to capital, dan taxation.  
> Corporation menjadi bentuk dominan untuk large business karena merupakan **separate legal entity**, memberi **limited liability**, ownership dibagi menjadi transferable shares, dan dapat mengumpulkan capital dari banyak investor. Trade-off pentingnya adalah higher formation/administrative complexity dan, untuk C corporation dalam konteks textbook AS, **double taxation**.  
> Karena ownership tersebar di banyak shareholders, control didelegasikan kepada **board of directors**, CEO, dan management. Financial manager kemudian menjalankan tiga fungsi utama: **investment decisions, financing decisions, dan cash management**.  
> Tujuan yang menyatukan shareholders adalah meningkatkan **value of their shares**, tetapi separation of ownership and control menciptakan **agency problem** ketika managers mengejar kepentingan sendiri. Compensation design, board oversight, stock-price feedback, dan market for corporate control membantu mengurangi konflik ini.  
> Chapter juga menekankan bahwa shareholder-value maximization tidak otomatis baik jika firm memindahkan biaya ke pihak lain; **public policy dan regulation** dibutuhkan ketika corporate actions menimbulkan external costs.  
> Dalam financial distress, bankruptcy tidak selalu berarti business berhenti. Secara ekonomis, bankruptcy dapat dipahami sebagai **transfer of ownership/control dari equity holders kepada debt holders** ketika claims debt tidak dapat dipenuhi.  
> Terakhir, **stock market** memberi liquidity dan market price bagi shares public companies. Chapter membedakan **private vs public firms**, **primary vs secondary markets**, lalu menjelaskan bid price, ask price, bid–ask spread, market makers, NYSE, dan NASDAQ dalam institutional context textbook.  
> Untuk CF4, chapter ini paling langsung mendukung [[3.1 Business Entity Structures]], sekaligus memberi foundation untuk [[3.2 Sources of Finance and Capital Structure]], [[2.1 Equity Instruments]], dan [[2.5 Capital Raising Methods]].

## 1. Why This Chapter Exists

Corporate finance mempelajari **bagaimana orang di dalam corporation membuat financial decisions**. Sebelum membahas valuation, capital structure, payout, atau securities, pembaca perlu memahami terlebih dahulu wadah hukumnya: apa itu corporation, mengapa banyak large businesses memilih bentuk tersebut, siapa yang membuat keputusan, dan bagaimana ownership dapat diperdagangkan.

Opening chapter memakai sejarah Dartmouth College sebagai konteks bahwa corporation merupakan **legal institution**, bukan hanya kumpulan orang atau assets. Setelah status corporation sebagai separate legal entity kuat secara hukum, corporate form memungkinkan ownership dan control berkembang jauh melampaui satu owner. Historical narrative tersebut dikompresi; lesson yang dipertahankan adalah bahwa legal separation merupakan dasar dari property rights, limited liability, transferable ownership, dan corporate continuity.

Alur chapter adalah:

```text
Business organizational form
        ↓
Who owns the firm and bears liability?
        ↓
Corporation as separate legal entity
        ↓
Ownership divided into shares
        ↓
Ownership separated from control
        ↓
Financial manager + board + CEO
        ↓
Agency conflicts and governance mechanisms
        ↓
Publicly traded shares
        ↓
Stock market liquidity + market prices
```

---

## 2. Chapter Map

```text
Chapter 1 — The Corporation
├── 1.1 The Four Types of Firms
│   ├── Sole Proprietorships
│   ├── Partnerships
│   │   └── Limited Partnerships
│   ├── Limited Liability Companies
│   ├── Corporations
│   │   ├── Formation
│   │   ├── Ownership and stock
│   │   └── Dividends
│   └── Tax Implications for Corporate Entities
│       ├── C Corporations
│       └── S Corporations
│
├── 1.2 Ownership Versus Control of Corporations
│   ├── Corporate Management Team
│   ├── Financial Manager
│   │   ├── Investment Decisions
│   │   ├── Financing Decisions
│   │   └── Cash Management
│   ├── Goal of the Firm
│   ├── Firm and Society
│   ├── Ethics and Incentives
│   │   ├── Agency Problems
│   │   └── CEO Performance / Market for Corporate Control
│   └── Corporate Bankruptcy
│
└── 1.3 The Stock Market
    ├── Private vs Public Companies
    ├── Primary and Secondary Markets
    ├── Major Stock Markets
    ├── NYSE
    └── NASDAQ
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 1.1 Four Types of Firms | Very High | [[3.1 Business Entity Structures]] |
| Corporation ownership / stock | High | [[2.1 Equity Instruments]], [[2.5 Capital Raising Methods]] |
| Corporate taxation | Supporting | [[3.1 Business Entity Structures]] |
| 1.2 Ownership vs Control | High | [[3.1 Business Entity Structures]], [[3.2 Sources of Finance and Capital Structure]] |
| Financial manager's three tasks | High | [[3.2 Sources of Finance and Capital Structure]], [[3.4 Investment Return Methods]] |
| Agency problem / incentives | Supporting context | [[3.1 Business Entity Structures]] |
| Corporate bankruptcy | Supporting | [[2.2 Long-Term Debt Instruments]], [[3.2 Sources of Finance and Capital Structure]] |
| 1.3 Stock Market | High | [[2.1 Equity Instruments]], [[2.5 Capital Raising Methods]] |
| Primary vs secondary market | High | [[2.5 Capital Raising Methods]] |
| Bid/ask, NYSE, NASDAQ mechanics | Supporting | [[2.1 Equity Instruments]] |

> [!NOTE] Scope Note
> **Berk & DeMarzo Chapter 1** tercantum sebagai referensi resmi untuk **Topik 2**, dan Sections **1.1–1.3** juga tercantum untuk **Topik 3**. Karena Chapter 1 memang terdiri dari Sections 1.1–1.3, hampir seluruh conceptual core chapter memiliki relevansi CF4. Historical U.S. legal narrative, institution-specific statistics, dan regulatory details dipadatkan sebagai `[TEXTBOOK CONTEXT]`.

---

## 3. 1.1 The Four Types of Firms

### Intuisi: organizational form menentukan siapa yang menanggung risiko

Ketika sebuah business dimulai, pertanyaan pertama bukan hanya “apa yang dijual?” tetapi juga:

- siapa owner-nya?
- apakah business dan owner dianggap satu atau terpisah secara hukum?
- siapa yang bertanggung jawab jika business gagal membayar debt?
- apakah ownership mudah dialihkan?
- apakah business dapat hidup setelah owner keluar atau meninggal?
- seberapa mudah business memperoleh outside capital?
- bagaimana earnings dikenai tax?

Berk & DeMarzo membangun jawaban melalui empat bentuk firm.

### 3.1 Sole Proprietorship

A **sole proprietorship** adalah business yang dimiliki dan dijalankan oleh satu orang.

Core characteristics:

1. **Easy to establish.** Struktur ini sederhana sehingga common untuk new/small businesses.
2. **No separation between firm and owner.** Business hanya dapat memiliki satu owner; investor lain tidak dapat sekadar membeli ownership share seperti pada corporation.
3. **Unlimited personal liability.** Jika business gagal membayar debt, lender dapat menuntut repayment dari personal assets owner.
4. **Limited life and difficult transferability.** Business sangat terkait dengan owner; ownership transfer dan continuity lebih sulit.

Economic trade-off:

```text
Simplicity
+ low setup complexity
        vs
unlimited personal liability
+ weak transferability
+ limited access to outside equity
```

Textbook menekankan bahwa ketika business berkembang dan dapat memperoleh financing tanpa personal guarantee owner, incentive untuk berpindah ke limited-liability form meningkat.

> [!WARNING] Important Distinction
> **Business loss ≠ automatically limited to capital invested** pada sole proprietorship. Karena unlimited liability, owner dapat kehilangan personal assets di luar amount yang ditanamkan ke business.

---

### 3.2 Partnership

A **partnership** secara dasar mirip sole proprietorship tetapi memiliki lebih dari satu owner.

Dalam **general partnership**:

- all partners dapat bertanggung jawab atas debt firm;
- lender dapat menuntut repayment dari partner;
- death atau withdrawal seorang partner dapat mengakhiri partnership kecuali agreement menyediakan mechanism lain.

Partnership tetap umum pada professional businesses seperti law, medical, atau accounting firms, di mana personal reputation partners merupakan bagian penting dari business relationship.

#### Limited Partnership

A **limited partnership** memiliki dua classes of owners:

| Owner | Liability | Management Authority |
|---|---|---|
| **General partner** | Unlimited / personally liable | Mengendalikan business |
| **Limited partner** | Limited to investment | Tidak memiliki management authority |

Limited partners dapat menyediakan capital tanpa mempertaruhkan private assets beyond their investment, tetapi sebagai trade-off mereka tidak menjalankan managerial decision making.

Textbook menggunakan **private equity** dan **venture capital funds** sebagai contoh: general partners mengelola investments, sementara outside investors sering menjadi limited partners.

> [!WARNING] Important Distinction
> **Limited partnership ≠ semua partners limited.** Setidaknya terdapat general partner yang mengendalikan business dan menanggung unlimited liability dalam struktur textbook ini.

---

### 3.3 Limited Liability Company (LLC)

A **limited liability company (LLC)** digambarkan textbook sebagai limited partnership **tanpa general partner**.

Artinya:

- semua owners memiliki **limited liability**;
- tetapi berbeda dari limited partners, owners LLC **dapat ikut menjalankan business**.

Secara conceptual, LLC mencoba menggabungkan dua desired features:

```text
Limited liability
+
Management participation
```

Textbook memberi international naming context seperti GmbH, SARL, SRL, dan SL. Detail institutional naming ini berguna sebagai context tetapi bukan conceptual core.

---

### 3.4 Corporation

A **corporation** adalah **legally defined artificial being / legal entity** yang **separate from its owners**.

Karena separation ini, corporation dapat:

- enter into contracts;
- acquire assets;
- incur obligations;
- own property;
- continue independently dari individual owners.

Yang paling penting untuk financial structure:

> Corporation sendiri bertanggung jawab atas obligations corporation; owners tidak otomatis bertanggung jawab atas corporate debts.

Inilah basis **limited liability** bagi shareholders.

#### Formation

Corporation harus dibentuk secara legal melalui chartering/incorporation. Karena itu setup lebih costly dan formal daripada proprietorship.

Corporate charter / articles and bylaws menetapkan basic rules mengenai bagaimana corporation dijalankan.

#### Ownership Is Divided into Stock

Total ownership interest corporation dibagi menjadi **shares of stock**. Collection dari seluruh outstanding shares disebut **equity**.

Owner sebuah share dapat disebut:

- shareholder;
- stockholder;
- equity holder.

Shareholders dapat menerima **dividend payments**, yaitu payments yang dibuat corporation kepada equity holders atas discretion corporation.

Jika seorang shareholder memiliki 25% shares, secara basic ia berhak atas 25% dari total dividend distribution yang dibagikan proportionally.

### Why the Corporation Scales

Feature unik yang sangat penting: tidak ada requirement bahwa owner harus memiliki expertise tertentu untuk memiliki stock. Ownership shares dapat diperdagangkan kepada outside investors.

Akibatnya:

```text
Ownership divided into transferable shares
        ↓
Outside investors can participate
        ↓
Large pool of capital becomes accessible
        ↓
Firm can grow beyond wealth of founders
```

Ini adalah salah satu alasan utama corporation mendominasi large-scale economic activity walaupun jumlah corporation lebih sedikit daripada small proprietorships.

### Corporation — Main Advantages and Disadvantages

| Dimension | Corporation |
|---|---|
| Legal identity | Separate from owners |
| Owner liability | Limited to investment, subject to legal exceptions |
| Ownership | Divided into shares |
| Transferability | High relative to proprietorship/partnership |
| Number of owners | Potentially very large |
| Continuity | Not tied to life of individual owner |
| Capital raising | Strong access to outside capital |
| Formation | More formal/costly |
| Tax | C corporation may face double taxation in textbook U.S. context |

> [!INFO] CF4 Connection
> Ini adalah `[CORE CF4]` untuk [[3.1 Business Entity Structures]]. Kunci pemahaman bukan hafalan nama saja, tetapi **liability + control + transferability + continuity + financing capacity**.

---

## 4. Tax Implications for Corporate Entities

### 4.1 Double Taxation of C Corporations

Karena corporation merupakan separate legal entity, corporation membayar tax atas profits-nya. Jika after-tax profit kemudian didistribusikan kepada shareholder sebagai dividend, shareholder juga membayar personal tax atas dividend tersebut.

Mechanics:

```text
Corporate pretax earnings
        ↓ corporate tax
After-tax corporate earnings
        ↓ dividend distribution
Shareholder dividend income
        ↓ personal dividend tax
After-tax cash to shareholder
```

### Example — Taxation of Corporate Earnings

**Situation**

Corporation earns **$5 per share before tax**. Corporate tax rate = 40%. Remaining earnings dibagikan sebagai dividend. Shareholder dividend tax rate = 15%.

**Reasoning & Calculation**

Corporate tax:

$$
0.40(5)=2.00
$$

After-corporate-tax earnings:

$$
5.00-2.00=3.00
$$

Personal dividend tax:

$$
0.15(3.00)=0.45
$$

Cash remaining to shareholder:

$$
3.00-0.45=2.55
$$

Total tax:

$$
2.00+0.45=2.45
$$

Effective combined tax rate:

$$
\frac{2.45}{5.00}=49\%
$$

**Meaning**

Tidak benar menghitung combined tax sebagai sekadar $40\%+15\%=55\%$, karena personal dividend tax hanya diterapkan pada earnings **setelah** corporate tax.

General mechanics, jika corporate tax rate $T_C$ dan dividend tax rate $T_D$:

$$
\text{After-tax shareholder cash}
=
E(1-T_C)(1-T_D)
$$

> [!NOTE] Formula di atas adalah algebra langsung dari textbook example untuk menjelaskan mechanics; textbook example sendiri menggunakan angka spesifik.

---

### 4.2 S Corporations

Dalam textbook U.S. context, **S corporation** adalah corporation yang memilih special tax treatment sehingga firm profits/losses tidak dikenai corporate income tax terlebih dahulu. Instead, profits dialokasikan langsung kepada shareholders berdasarkan ownership share dan dimasukkan ke individual tax returns.

Important detail:

> Shareholder dapat memiliki tax liability atas allocated profit **meskipun cash tidak didistribusikan**.

### Example — S Corporation Earnings

Dengan earnings $5 per share dan personal non-dividend tax rate 30%:

$$
\text{Personal tax}=0.30(5)=1.50
$$

No corporate tax is paid dalam example, sehingga total tax jauh lebih rendah daripada $2.45 pada C corporation example.

### Why Not Every Corporation Is an S Corporation?

Textbook menjelaskan adanya strict eligibility limits (misalnya type/number of shareholders dalam U.S. rules saat edition tersebut ditulis). Karena itu most large corporations merupakan **C corporations**.

> [!NOTE] [TEXTBOOK CONTEXT]
> Tax rates, eligibility limits, dan jurisdiction-specific rules dalam section ini berasal dari U.S. tax environment textbook. Untuk CF4 condensed reading, yang utama adalah **economic distinction antara entity-level taxation dan pass-through treatment**, bukan menganggap historical rates sebagai current law.

---

## 5. 1.2 Ownership Versus Control of Corporations

### Intuisi: banyak owners tidak dapat semuanya menjalankan business

Pada sole proprietorship, owner dan manager bisa orang yang sama. Pada public corporation, ownership bisa tersebar ke ribuan atau jutaan shareholders yang dapat membeli dan menjual shares kapan saja.

Karena itu corporation memisahkan:

- **ownership** → shareholders;
- **ultimate oversight/control** → board of directors;
- **day-to-day management** → CEO dan management team.

Separation ini memungkinkan scale, tetapi juga menciptakan central governance problem: **orang yang mengendalikan assets bukan orang yang secara langsung memiliki seluruh economic claim**.

---

### 5.1 Corporate Management Team

Shareholders memilih **board of directors**, yang memiliki ultimate decision-making authority.

Board:

- menetapkan high-level policies;
- menentukan governance rules;
- memonitor company performance;
- menentukan atau mengawasi top-management compensation;
- memilih/hire senior management, terutama CEO.

**Chief executive officer (CEO)** menjalankan corporation berdasarkan rules dan policies yang ditetapkan board.

**Chief financial officer (CFO)** adalah senior financial manager yang umumnya melapor ke CEO.

### Figure 1.2 — Typical Corporate Organization

Figure chapter menggambarkan chain berikut:

```text
Shareholders
    ↓ elect
Board of Directors
    ↓ hires / oversees
Chief Executive Officer
    ↓
Chief Financial Officer
    ↓
Controller + Treasurer
```

Dalam figure:

- **Controller** berkaitan dengan accounting dan tax functions;
- **Treasurer** berkaitan dengan capital budgeting, risk management, dan credit management.

Lesson figure bukan job-title trivia, tetapi **delegation of financial authority**.

---

## 6. The Financial Manager

Financial managers memiliki **tiga main tasks**.

### 6.1 Investment Decisions

Ini adalah keputusan tentang **where to invest the firm’s money**.

Financial manager harus membandingkan costs dan benefits dari projects/investments dan memilih penggunaan capital yang menambah value bagi owners.

```text
Available projects
      ↓
Compare costs and benefits
      ↓
Choose investments
      ↓
Shape future operations and value
```

Textbook menempatkan investment decision sebagai salah satu tugas paling fundamental karena keputusan ini menentukan what the firm actually does.

> [!INFO] CF4 Connection
> Ini menjadi foundation untuk [[3.4 Investment Return Methods]]. Chapter 1 belum membangun NPV/IRR secara detail; ia menjelaskan **why investment appraisal exists**.

---

### 6.2 Financing Decisions

Setelah firm menentukan investments, pertanyaan berikutnya: **how will the firm pay for them?**

Corporate finance menyediakan dua broad sources yang ditekankan:

- **equity** → raise money by selling ownership shares;
- **debt** → borrow money.

Financing decision memengaruhi mix antara debt dan equity yang outstanding.

```text
Investment need
      ↓
Need funding
      ↓
Equity or Debt?
      ↓
Capital structure
```

> [!INFO] CF4 Connection
> Ini langsung menjembatani [[2.1 Equity Instruments]], [[2.2 Long-Term Debt Instruments]], [[2.5 Capital Raising Methods]], dan [[3.2 Sources of Finance and Capital Structure]].

---

### 6.3 Cash Management

Financial manager juga harus memastikan firm memiliki cukup cash untuk memenuhi **day-to-day obligations**.

Textbook menghubungkannya dengan **working capital management**. Growing firm dapat memiliki promising products tetapi tetap gagal jika cash habis sebelum revenue menghasilkan sufficient inflows.

Important logic:

> A valuable business opportunity does not eliminate short-term liquidity needs.

Company sering harus spend cash dahulu untuk development, production, inventory, dan launch sebelum sales menghasilkan cash.

---

## 7. The Goal of the Firm

Pada firm dengan satu owner, owner dapat menentukan goal langsung. Pada corporation dengan banyak shareholders, individual preferences berbeda-beda.

Namun textbook berargumen bahwa banyak keputusan penting memiliki common denominator:

> **Shareholders are better off when management makes decisions that increase the value of their shares.**

Ini memberi objective yang dapat digunakan management tanpa mengetahui seluruh personal consumption preferences setiap investor.

### Value, Not Manager Prestige

Shareholders tidak perlu sepakat tentang:

- kapan mereka ingin consume;
- seberapa kaya mereka;
- portfolio personal mereka;
- personal priorities mereka.

Mereka tetap dapat setuju bahwa lebih tinggi value dari investment mereka membuat mereka **financially better off**.

---

## 8. The Firm and Society

Apakah maximizing shareholder value otomatis baik untuk society?

Textbook answer: **often, but not always**.

Jika corporate action:

- membuat shareholders lebih baik;
- menghasilkan useful products/services;
- dan **tidak membuat pihak lain worse off**;

maka value creation juga dapat meningkatkan social welfare.

Problem muncul ketika corporation mendapatkan benefit dengan memindahkan cost ke others.

Examples textbook:

- pollution yang tidak dibayar firm;
- product use yang menimbulkan environmental harm;
- excessive risk-taking yang sementara menguntungkan bank shareholders tetapi kemudian merusak broader economy.

### Role of Public Policy

Ketika private corporate incentives dan social consequences tidak aligned, **public policy/regulation** diperlukan untuk realign incentives.

Mental model:

```text
Firm maximizes shareholder value
        ↓
Does firm bear full social cost?
        ├── Yes → private and social incentives more aligned
        └── No  → external cost / conflict
                   ↓
             Public policy / regulation
```

> [!WARNING] Important Distinction
> Textbook **tidak** mengatakan “shareholder value is always socially optimal.” Ia secara eksplisit memberi condition: external harms dapat membuat private value creation costly bagi society.

---

## 9. Ethics and Incentives within Corporations

### 9.1 Agency Problem

Separation ownership dan control menciptakan **agency problem**.

Shareholders adalah principals; managers bertindak sebagai agents. Agency problem muncul ketika managers menempatkan **own self-interest** di atas shareholder interests.

Examples of potential conflict:

- manager mengejar size/prestige daripada value;
- compensation atau perks berlebihan;
- mengambil terlalu sedikit atau terlalu banyak risk karena personal incentives berbeda;
- mempertahankan projects yang benefit management tetapi tidak shareholders.

Textbook juga melihat agency conflict sebagai **ethical dilemma**: manager telah dipercayakan untuk bertindak bagi owners tetapi memiliki personal incentives sendiri.

### 9.2 Incentive Compensation

Salah satu solution adalah menghubungkan management compensation dengan:

- firm profits;
- stock price;
- measures of performance.

Idea:

```text
Manager reward linked to shareholder outcome
        ↓
Manager self-interest becomes more aligned
        ↓
Agency conflict may decrease
```

Tetapi incentive design memiliki trade-off.

Jika compensation terlalu tightly linked ke performance:

- managers dapat menanggung personal risk terlalu besar dan menjadi excessively conservative;

atau jika downside terlalu terbatas:

- managers dapat mengambil **excessive risk** karena mendapat upside tetapi tidak fully bear downside.

> [!WARNING] Important Distinction
> **More performance-based pay ≠ automatically perfect alignment.** Contract design itself changes risk-taking incentives.

---

### 9.3 Other Stakeholders

Selain shareholders dan managers, corporation juga berinteraksi dengan:

- employees;
- customers;
- communities;
- creditors;
- others affected by its actions.

Managers kadang mengambil actions yang benefit other stakeholders—misalnya mempertahankan plant, membayar higher wages, atau menerapkan environmental standard lebih tinggi.

Textbook membedakan dua possibilities:

1. action tersebut akhirnya juga benefit shareholders melalui better workforce, reputation, customer loyalty, dll.;
2. action tersebut benefit stakeholders tetapi mengurangi shareholder wealth, sehingga secara economic mirip **corporate charity** yang dilakukan atas nama shareholders.

Nuance penting: shareholders sendiri mungkin memiliki moral preferences berbeda, sehingga bahkan “good cause” dapat menciptakan conflict jika owners tidak unanimous.

---

## 10. Monitoring CEO Performance and the Market for Corporate Control

### Stock Price as Feedback

Jika shareholders tidak puas, mereka dapat menjual shares. Jika banyak investors ingin sell, stock price cenderung turun sampai new buyers willing to hold it.

Sebaliknya, well-managed corporation menarik buyers dan dapat mendorong stock price naik.

Karena itu stock price berfungsi sebagai **continuous market feedback** terhadap management performance.

### Board Discipline

Board dapat mengganti CEO jika performance buruk. Tetapi textbook mengakui management dapat menjadi **entrenched** jika board kurang independent atau terlalu dekat dengan executives.

### Hostile Takeover

Jika poor management menekan stock price, low valuation dapat menciptakan opportunity bagi outside investor/corporate raider untuk:

1. membeli large fraction of shares;
2. memperoleh voting power;
3. mengganti board dan management;
4. memperbaiki company performance;
5. benefit dari subsequent increase in firm value.

Ini menciptakan **market for corporate control**.

> [!NOTE] Textbook Perspective
> Istilah “hostile” dan “raider” memiliki negative connotation, tetapi chapter menekankan potential governance role-nya: threat of takeover dapat discipline managers dan boards.

---

## 11. Corporate Bankruptcy

Debt holders biasanya tidak mengendalikan corporation selama firm memenuhi contractual debt claims.

Namun jika firm gagal membayar debt:

- creditors memiliki claim terhadap corporate assets;
- firm dapat renegotiate;
- atau masuk bankruptcy protection;
- ultimate control dapat berpindah dari equity holders ke debt holders.

### Bankruptcy as Change in Ownership

Berk & DeMarzo memberikan mental model yang sangat penting:

> **Corporate bankruptcy tidak harus dipahami sebagai “business mati”; sering kali ia lebih tepat dilihat sebagai change in ownership/control.**

```text
Firm meets debt claims
      ↓
Equity holders retain ownership/control

Firm cannot meet debt claims
      ↓
Renegotiation / bankruptcy
      ↓
Debt holders may take control
```

### Bankruptcy ≠ Liquidation

**Liquidation** berarti shutting down business dan selling assets.

Bankruptcy tidak selalu menghasilkan liquidation. Jika business sebagai going concern memiliki value lebih besar, creditors juga dapat memilih mempertahankan operations.

Textbook menggunakan Federated/Bloomingdale's dan airlines sebagai examples: original equity can be wiped out sementara operating business tetap berjalan.

> [!WARNING] Important Distinction
> **Bankruptcy ≠ automatic liquidation.**  
> Bankruptcy concerns claims, ownership, and control; underlying productive business dapat tetap viable.

---

## 12. 1.3 The Stock Market

### Intuisi: ownership yang transferable butuh marketplace

Corporation menjadi powerful karena ownership dibagi menjadi shares. Tetapi transferable ownership hanya benar-benar valuable jika investor dapat **buy and sell efficiently**.

Private company shares tidak regularly traded, sehingga valuing dan exiting investment dapat lebih sulit.

Public company shares diperdagangkan di **stock market / stock exchange**, yang menyediakan:

- liquidity;
- observable market prices;
- trading mechanism;
- continuous feedback mengenai investor views of firm decisions.

### Liquidity

An investment is **liquid** jika dapat dijual quickly and easily pada price yang very close dengan contemporaneous buy price.

Liquidity penting karena memberi flexibility kepada investors mengenai:

- kapan masuk;
- kapan keluar;
- berapa lama memegang investment.

Economic connection:

```text
Tradable shares
      ↓
Greater liquidity
      ↓
More attractive to outside investors
      ↓
Broader access to equity capital
```

---

## 13. Private Companies vs Public Companies

### Private Company

Shares dimiliki limited group dan tidak regularly traded di organized stock market.

Consequences:

- market price tidak continuously observable;
- buying/selling ownership biasanya lebih difficult;
- ownership transfer lebih negotiated.

### Public Company

Shares diperdagangkan pada organized stock markets.

Consequences:

- ownership lebih liquid;
- market price lebih visible;
- investor base dapat lebih luas.

> [!INFO] CF4 Connection
> Distinction ini penting bagi [[2.5 Capital Raising Methods]] karena becoming public memengaruhi bagaimana company memperoleh capital dan bagaimana existing ownership dapat diperdagangkan.

---

## 14. Primary and Secondary Stock Markets

### Primary Market

**Primary market** adalah market tempat corporation **issues new shares** dan sells them to investors.

Corporate finance meaning:

> **Issuer receives new capital.**

Examples include initial issuance atau subsequent new share issuance.

### Secondary Market

**Secondary market** adalah trading of **existing shares among investors**.

Corporate finance meaning:

> Corporation normally does **not** receive proceeds ketika Investor A menjual existing share kepada Investor B.

### Why Secondary Markets Still Matter to the Corporation

Walaupun issuer tidak menerima cash dari secondary trade, liquidity membuat shares lebih attractive kepada investors. Dengan demikian secondary markets mendukung ability perusahaan untuk raise capital di primary market.

```text
Primary market
New security issued
Issuer receives funds

Secondary market
Existing security traded
Investor ↔ Investor
Issuer normally receives no new funds
```

> [!WARNING] Important Distinction
> **Primary vs secondary = new issue vs existing security trade**, bukan “important market vs less important market.”

---

## 15. Stock Market Trading: Bid, Ask, and Transaction Costs

Chapter kemudian menggunakan institutional details NYSE dan NASDAQ untuk menjelaskan bagaimana liquidity disediakan.

### Bid Price

**Bid price** = price at which market maker is willing to **buy** shares.

Dari investor perspective:

> Jika investor ingin **sell**, investor menerima bid.

### Ask Price

**Ask price** = price at which market maker is willing to **sell** shares.

Dari investor perspective:

> Jika investor ingin **buy**, investor membayar ask.

### Bid–Ask Spread

Karena:

$$
\text{Ask Price} > \text{Bid Price}
$$

maka:

$$
\text{Bid-Ask Spread}
=
\text{Ask Price}-\text{Bid Price}
$$

Spread merupakan **transaction cost** bagi investor.

### Example — Why the Spread Is a Cost

Suppose quote:

- bid = $15.77
- ask = $15.78

Investor yang membeli segera membayar:

$$
15.78
$$

Jika langsung menjual kembali tanpa price movement, ia hanya menerima:

$$
15.77
$$

Immediate round-trip loss:

$$
15.78-15.77=0.01
$$

per share, sebelum commissions atau fees lain.

> [!WARNING] Important Distinction
> **Buy at ask; sell at bid.** Ini adalah direction yang paling mudah tertukar.

---

## 16. NYSE and NASDAQ — Textbook Market Structure

### 16.1 NYSE

Dalam institutional description edition textbook, NYSE digambarkan sebagai physical exchange dengan **specialists / market makers** yang match buyers and sellers dan post bid/ask prices.

Market maker menyediakan liquidity dengan standing ready to trade pada quoted prices dan menerima spread sebagai compensation atas fungsi tersebut.

### 16.2 NASDAQ

NASDAQ digambarkan sebagai electronic/network market tanpa kebutuhan physical trading floor.

Important textbook distinction:

- NYSE: satu specialist/market maker per stock dalam traditional structure described;
- NASDAQ: multiple market makers dapat compete untuk stock yang sama.

Each NASDAQ market maker posts bid and ask prices, dan system menunjukkan best quotes kepada participants.

> [!NOTE] [TEXTBOOK CONTEXT]
> Institutional trading architecture berubah over time. Untuk condensed CF4 reading, lesson yang paling tahan waktu adalah **market makers, bid/ask quotes, spread, liquidity, and competition**, bukan menghafal historical exchange microstructure sebagai current fact.

---

## 17. Figure 1.3 and Global Stock Markets

Chapter menampilkan worldwide stock markets berdasarkan measures seperti market capitalization dan trading volume. Specific rankings dan angka merupakan snapshot periode textbook.

Conceptual lesson:

- equity markets bersifat global;
- market size dapat diukur dengan lebih dari satu metric;
- market capitalization dan trading activity bukan hal yang sama;
- cross-border trading dan integrated exchanges dapat meningkatkan liquidity.

Detailed historical ranking dikompresi karena tidak diperlukan untuk memahami corporate-finance mechanism.

---

## Chapter Synthesis

Jika Chapter 1 hanya boleh dipahami sebagai satu cerita, ceritanya adalah **bagaimana corporate form memungkinkan business memperoleh scale, dan governance serta financial markets muncul sebagai konsekuensi dari scale tersebut**.

Business kecil dapat dimiliki satu orang, tetapi growth cepat membawa masalah. Founder wealth terbatas, unlimited personal liability berbahaya, dan ownership sulit dialihkan. Corporation memecahkan sebagian besar masalah ini dengan menjadikan firm sebagai separate legal entity, membagi ownership menjadi shares, dan membatasi liability shareholders.

Namun solution tersebut menciptakan problem baru: ketika shares tersebar pada banyak investors, owners tidak bisa menjalankan firm langsung. Mereka memilih board, board mengawasi CEO, dan managers mengelola investments, financing, serta cash. Separation ini membuat specialization possible, tetapi juga menimbulkan agency problem karena managers dapat memiliki interests yang berbeda dari shareholders.

Governance mechanisms kemudian berkembang untuk mengatasi problem tersebut: compensation incentives, board oversight, market price feedback, dan market for corporate control. Sementara itu, debt contracts menciptakan class investor lain—creditors—yang dapat mengambil control jika firm gagal memenuhi debt claims. Karena itu bankruptcy adalah bagian dari allocation of control rights, bukan sekadar “company tutup.”

Akhirnya, transferability of shares membutuhkan stock market. Public stock markets menyediakan liquidity dan observable prices, sehingga ownership corporation dapat berpindah tanpa business itself harus dibubarkan. Primary market membantu corporation raise new capital; secondary market membuat securities tersebut tradable. Bid/ask mechanics menunjukkan bahwa liquidity memiliki provider dan cost.

Chapter 1 dengan demikian menghubungkan empat building blocks corporate finance:

```text
Legal form
   ↓
Ownership claims
   ↓
Control and incentives
   ↓
Financial markets
```

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Sole proprietorship | One owner, no legal separation, unlimited liability | Simple but hard to scale safely | [[3.1 Business Entity Structures]] |
| Partnership | Multiple owners, general partners liable | Shared ownership but liability/continuity issues | [[3.1 Business Entity Structures]] |
| Limited partnership | General + limited partners | Separates management from passive capital | [[3.1 Business Entity Structures]] |
| LLC | Limited liability + owner management | Hybrid organizational benefit | [[3.1 Business Entity Structures]] |
| Corporation | Separate legal entity | Foundation of scalable ownership | [[3.1 Business Entity Structures]] |
| Limited liability | Owner loss generally limited to investment | Encourages outside investment | [[3.1 Business Entity Structures]] |
| Stock / equity | Divided ownership claims | Enables transferable ownership and raising equity capital | [[2.1 Equity Instruments]] |
| Board of directors | Ultimate corporate oversight body elected by shareholders | Connects ownership to control | [[3.1 Business Entity Structures]] |
| Financial manager | Makes investment, financing, and cash-management decisions | Core corporate-finance role | [[3.2 Sources of Finance and Capital Structure]] |
| Agency problem | Manager interests diverge from shareholder interests | Explains governance/incentive design | [[3.1 Business Entity Structures]] |
| Market for corporate control | Takeover threat can discipline poor managers | External governance mechanism | [[3.1 Business Entity Structures]] |
| Bankruptcy | Potential transfer of control to debt holders after default | Clarifies debt vs equity claims | [[2.2 Long-Term Debt Instruments]] |
| Stock market | Organized trading mechanism for public shares | Provides liquidity and prices | [[2.1 Equity Instruments]] |
| Primary market | New securities sold by issuer | Firm raises capital | [[2.5 Capital Raising Methods]] |
| Secondary market | Existing securities trade among investors | Provides liquidity | [[2.5 Capital Raising Methods]] |
| Bid–ask spread | Ask minus bid | Direct transaction cost / liquidity mechanism | [[2.1 Equity Instruments]] |

---

## Compression Notes

### Retained in Detail

- four major firm types and their liability/control differences;
- corporation as separate legal entity;
- stock, equity, shareholder, dividend concepts;
- advantages of transferable ownership and access to outside capital;
- C corporation vs S corporation tax mechanics;
- textbook tax examples;
- board, CEO, CFO, controller, treasurer structure;
- three tasks of financial manager;
- goal of increasing share value;
- firm vs society / external-cost logic;
- agency problem and incentive-design trade-offs;
- CEO monitoring and hostile takeover mechanism;
- bankruptcy as ownership/control transfer;
- bankruptcy vs liquidation distinction;
- private vs public companies;
- primary vs secondary markets;
- liquidity;
- bid, ask, spread;
- NYSE/NASDAQ market-maker framework.

### Condensed

- Dartmouth College historical legal narrative;
- detailed U.S. incorporation history;
- country-by-country legal names for LLC-type entities;
- Goldman Sachs interview narrative;
- Dodd-Frank sidebars;
- Citizens United sidebar;
- detailed airline-bankruptcy stories;
- exchange-merger interview;
- historical market rankings and trading-volume statistics;
- repeated Concept Check questions.

### Omitted / Beyond CF4

- website references and MyFinanceLab navigation;
- end-of-chapter problem set;
- further-reading bibliography;
- detailed historical political/legal controversies;
- institution-specific statistics that do not teach a durable finance concept.

> [!IMPORTANT] Reading Priority
> Untuk CF4, section paling penting adalah **1.1 business forms**, lalu **financial manager + ownership/control mechanics**, serta **primary vs secondary markets**. Agency, bankruptcy, dan market microstructure penting sebagai supporting understanding, tetapi jangan menggantikan fokus utama pada characteristics of business entities dan corporate financing architecture.

---

## CF4 Connection Map

```text
Four organizational forms
        ↓
[[3.1 Business Entity Structures]]
        ↓
Corporation → ownership divided into stock
        ↓
[[2.1 Equity Instruments]]
        ↓
Investment / financing / cash decisions
        ↓
[[3.2 Sources of Finance and Capital Structure]]
        ↓
Need for external capital
        ↓
Primary market
        ↓
[[2.5 Capital Raising Methods]]
        ↓
Secondary market liquidity
        ↓
More tradable ownership claims
```

Agency and bankruptcy provide a second conceptual bridge:

```text
Ownership ≠ Control
      ↓
Agency problem
      ↓
Governance / incentives / market for corporate control

Debt outstanding
      ↓
Debt-holder claims
      ↓ default
Bankruptcy
      ↓
Potential control transfer: equity → debt holders
```

---

## Quick Reading Review

- Berk & DeMarzo membedakan **sole proprietorship, partnership, LLC, dan corporation**.
- Sole proprietorship dan general partnership membawa **unlimited personal liability**.
- Limited partner memiliki limited liability tetapi tidak management authority.
- LLC memberi owners limited liability sekaligus ability to manage.
- Corporation adalah **separate legal entity** dari owners.
- Limited liability dan transferable shares membuat corporation jauh lebih mudah memperoleh outside capital.
- Total ownership corporation dibagi menjadi **stock**; seluruh stock claims disebut **equity**.
- Shareholder dapat menerima dividends, tetapi dividend payment merupakan corporate decision.
- C corporation mengalami entity-level tax dan shareholder-level tax atas distributed dividends dalam textbook U.S. context.
- S corporation menggunakan pass-through-style tax treatment dalam textbook context.
- Shareholders memilih **board of directors**; board mengawasi CEO; CFO memimpin financial function.
- Financial manager memiliki tiga tugas: **investment decisions, financing decisions, cash management**.
- Common shareholder objective adalah meningkatkan **value of shares**.
- Shareholder-value decisions dapat merugikan society jika firm tidak menanggung full external costs.
- **Agency problem** muncul ketika managers mengejar self-interest daripada shareholder interest.
- Incentive compensation membantu alignment tetapi dapat mengubah risk-taking incentives secara tidak diinginkan.
- Poor stock performance memberi feedback kepada board dan dapat membuka peluang **hostile takeover**.
- Market for corporate control dapat berfungsi sebagai external discipline terhadap entrenched management.
- Corporate bankruptcy dapat dipahami sebagai **transfer of control dari equity holders ke debt holders**.
- **Bankruptcy ≠ liquidation**; operating business dapat tetap berjalan.
- Public-company shares diperdagangkan pada stock markets; private-company shares tidak regularly traded.
- Stock markets menyediakan **liquidity dan observable market prices**.
- Primary market = **new securities issued, issuer receives funds**.
- Secondary market = **existing securities traded among investors**.
- Investor **buys at ask** dan **sells at bid**.
- Bid–ask spread adalah transaction cost dan compensation bagi liquidity provision.
- NYSE/NASDAQ details perlu dibaca sebagai `[TEXTBOOK CONTEXT]`; durable concept-nya adalah market makers, quotes, liquidity, dan trading costs.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter purpose / legal corporation context | Berk & DeMarzo, Chapter 1 introduction |
| Sole proprietorship | Chapter 1, Section 1.1 — Sole Proprietorships |
| Partnerships and limited partnerships | Chapter 1, Section 1.1 — Partnerships |
| LLC | Chapter 1, Section 1.1 — Limited Liability Companies |
| Corporation as legal entity | Chapter 1, Section 1.1 — Corporations |
| Formation and ownership of corporation | Chapter 1, Section 1.1 — Formation / Ownership of a Corporation |
| Corporate taxation and double taxation | Chapter 1, Section 1.1 — Tax Implications for Corporate Entities |
| C corporation tax example | Chapter 1, Example 1.1 |
| S corporation treatment and example | Chapter 1, Example 1.2 |
| Board / CEO / CFO structure | Chapter 1, Section 1.2 — Corporate Management Team and Figure 1.2 |
| Three tasks of financial manager | Chapter 1, Section 1.2 — The Financial Manager |
| Goal of the firm | Chapter 1, Section 1.2 — The Goal of the Firm |
| Firm and society | Chapter 1, Section 1.2 — The Firm and Society |
| Agency problems and incentive compensation | Chapter 1, Section 1.2 — Ethics and Incentives within Corporations |
| CEO performance / hostile takeover | Chapter 1, Section 1.2 — The CEO's Performance |
| Bankruptcy and control transfer | Chapter 1, Section 1.2 — Corporate Bankruptcy |
| Stock market and liquidity | Chapter 1, Section 1.3 — The Stock Market |
| Primary vs secondary markets | Chapter 1, Section 1.3 — Primary and Secondary Stock Markets |
| Global stock-market context | Chapter 1, Section 1.3 — The Largest Stock Markets / Figure 1.3 |
| NYSE, bid/ask, spread | Chapter 1, Section 1.3 — NYSE |
| NASDAQ and competing market makers | Chapter 1, Section 1.3 — NASDAQ |
| End-of-chapter summary | Chapter 1 — Chapter Summary |
