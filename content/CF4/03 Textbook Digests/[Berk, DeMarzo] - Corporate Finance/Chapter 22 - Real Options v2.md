---
type: "condensed-book"
exam: "CF4"
book: "Corporate Finance"
author: "Jonathan Berk and Peter DeMarzo"
chapter: "22"
chapter_title: "Real Options"
cf4_topics: ["4.3"]
cf4_relevance: "High"
source_scope: "Chapter 22, Sections 22.1-22.7 in the supplied textbook edition; the CF4 syllabus lists 22.1-22.8"
compression_level: "Condensed"
tags: [CF4, CondensedBook, BerkDeMarzo, CorporateFinance, RealOptions, CapitalBudgeting]
date_created: "2026-08-25"
status: "study-note"
---

# Berk & DeMarzo — Chapter 22: Real Options

> [!ABSTRACT] Chapter in One View
> Traditional NPV analysis can understate project value when management can revise decisions after uncertainty is resolved. A **real option** is the right—not the obligation—to make a future business decision, such as delaying, expanding, staging, replacing, or abandoning an investment. Flexibility adds value because the firm can exploit favorable outcomes while limiting exposure to unfavorable ones. Decision trees separate uncontrollable information events from managerial choices and are evaluated backward from future nodes. An investment opportunity resembles a call option: project value is the underlying asset, required investment is the strike price, and cash flow forgone while waiting is analogous to a dividend. Consequently, positive current NPV does not always mean “invest now,” while negative current NPV does not always make an opportunity worthless. Growth options can justify small initial or pilot investments; abandonment options cap losses; replacement options affect comparisons between projects of different lives; and staged projects should generally acquire the most information at the lowest cost before making large commitments. Because exact real-option valuation is application-specific, managers also use profitability-index and hurdle-rate rules, but these are decision heuristics rather than measures of economic value.

## 1. Why This Chapter Exists

Standard capital budgeting often treats project cash flows as if all future actions were fixed today. In reality, management observes demand, technology, interest rates, regulation, or competitor behavior and then decides whether to continue, expand, delay, modify, replace, or terminate the project. Expected cash-flow forecasts may hide this flexibility rather than value it explicitly.

Biotechnology R&D illustrates the problem. An early research expenditure does not commit the firm to fund every subsequent stage. Favorable results trigger further investment; poor results lead to mothballing or abandonment. The initial expenditure therefore purchases both information and a call option on later development.

The chapter develops this decision logic:

```text
Small or reversible commitment
↓
New information arrives
↓
Management chooses the best branch
├── abandon / defer
├── continue
└── expand / replace
↓
Downside is limited while upside is preserved
↓
Project opportunity value exceeds static NPV
```

## 2. Chapter Map

```text
Chapter 22 — Real Options
├── 22.1 Real Versus Financial Options
├── 22.2 Decision Tree Analysis
├── 22.3 The Option to Delay an Investment Opportunity
│   ├── Investment as a call option
│   ├── Factors affecting investment timing
│   └── Investment options and firm risk
├── 22.4 Growth and Abandonment Options
│   ├── Valuing growth potential
│   ├── Option to expand
│   └── Option to abandon
├── 22.5 Applications to Multiple Projects
│   ├── Mutually exclusive projects with different lives
│   └── Staging mutually dependent investments
├── 22.6 Rules of Thumb
│   ├── Profitability index rule
│   └── Hurdle rate rule
└── 22.7 Key Insights from Real Options
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| 22.1-22.2 Real options and decision trees | High — flexible managerial decision-making | [[4.3 Agency Theory and Governance]] |
| 22.3 Option to delay | High — uncertainty, timing, and commitment | [[4.3 Agency Theory and Governance]] |
| 22.4 Growth and abandonment | High — dynamic scaling and downside control | [[4.3 Agency Theory and Governance]] |
| 22.5 Multiple-project applications | High — replacement and staged investment | [[4.3 Agency Theory and Governance]] |
| 22.6 Rules of thumb | Supporting — practical approximations | [[4.3 Agency Theory and Governance]] |
| 22.7 Synthesis | High — core decision principles | [[4.3 Agency Theory and Governance]] |

> [!NOTE] Source-edition note
> Silabus CF4 menuliskan Chapter 22.1–22.8. Edisi textbook yang diberikan hanya mempunyai Sections 22.1–22.7; setelah 22.7 langsung terdapat Chapter Summary dan Key Terms. Note ini mengikuti struktur source dan tidak membuat Section 22.8 yang tidak tersedia.

## 3. 22.1 Real Versus Financial Options

**Financial option** memberi hak membeli atau menjual traded financial asset. **Real option** memberi hak mengambil business decision atas real asset atau investment opportunity. Contohnya: meluncurkan produk, membuka pabrik, memperbesar capacity, menghentikan R&D, atau menjual project assets.

| Dimension | Financial option | Real option |
|---|---|---|
| Underlying | Traded stock, bond, commodity, atau security | Project, technology, patent, factory, land, business opportunity |
| Exercise decision | Buy/sell financial asset | Invest, delay, expand, contract, replace, atau abandon |
| Market price | Sering observable | Underlying dan option biasanya tidak traded |
| Valuation inputs | Relatif standardized | Sangat application-specific |
| Common logic | Right without obligation; asymmetric payoff | Sama: favourable outcomes diambil, unfavourable outcomes ditolak |

Walaupun underlying real option tidak diperdagangkan, prinsip option pricing tetap berguna. Flexibility menambah value karena keputusan dibuat **setelah** informasi baru tersedia. Semakin besar uncertainty yang relevan dan semakin fleksibel response manajemen, semakin besar potential option value.

> [!WARNING] Important Distinction
> **Uncertainty saja tidak otomatis menciptakan value.** Value muncul dari kombinasi uncertainty dan kemampuan untuk meresponsnya. Jika decision tidak dapat diubah setelah informasi datang, firm hanya menanggung risk tanpa memperoleh real-option benefit.

## 4. 22.2 Decision Tree Analysis

**Decision tree** adalah graphical representation dari future decisions dan uncertainty resolution. Tree harus membedakan:

- **decision node** (kotak): branch dipilih oleh decision maker;
- **information node** (lingkaran): branch ditentukan oleh uncertainty di luar kontrol;
- terminal payoff: cash flow atau NPV setelah seluruh relevant events dan actions.

Decision tree berbeda dari binomial option tree murni karena memasukkan **choices** selain stochastic outcomes. Analisis dilakukan dengan *rollback*: mulai dari terminal nodes, pilih action optimal pada setiap decision node, lalu hitung expected discounted value pada information nodes.

### Example — Megan’s Booth and Weather Information

Megan membayar booth fee USD 500 sebelum swap meet. Profit bersih dari goods, sebelum booth fee, rata-rata USD 1,100. Jika sunshine (75%), operating profit sekitar USD 1,500; jika rain (25%), hadir di meet menimbulkan additional loss USD 100.

Tanpa flexibility setelah weather diketahui:

$$
E(\text{Operating Profit})
=0.75(1{,}500)+0.25(-100)
=1{,}100
$$

Dengan option untuk hadir hanya ketika sunny, payoff dari rain branch menjadi nol:

$$
E(\text{Operating Profit with Option})
=0.75(1{,}500)+0.25(0)
=1{,}125
$$

Real-option value:

$$
1{,}125-1{,}100=25
$$

Setelah booth fee:

$$
NPV=1{,}125-500=625
$$

Megan tetap membeli booth tetapi menunggu weather information sebelum memutuskan hadir. Booth fee telah menjadi sunk cost; keputusan hadir harus didasarkan hanya pada incremental payoff sesudah weather diketahui.

> [!WARNING] Important Distinction
> **Ex ante commitment ≠ ex post action.** Membayar fee dapat optimal ex ante karena memperoleh access. Setelah fee sunk, hadir tetap harus dievaluasi ulang berdasarkan incremental benefit dan cost pada information state aktual.

## 5. 22.3 The Option to Delay an Investment Opportunity

Menunggu memberi kesempatan memperoleh information sebelum capital commitment, tetapi sering mempunyai cost: firm kehilangan interim cash flow, competitor dapat masuk, atau investment cost berubah. Optimal timing menyeimbangkan value of flexibility dengan cost of delay.

### Investment as a call option

Hak membuka electric-car dealership sekarang atau tepat satu tahun lagi menyerupai European call:

| Financial call input | Real investment counterpart | Dealership example |
|---|---|---:|
| Stock price $S$ | Current market value of operating asset | USD 6 juta |
| Strike price $K$ | Required investment | USD 5 juta |
| Expiration $T$ | Final decision date | 1 year |
| Risk-free rate $r_f$ | Risk-free rate | 5% |
| Volatility $\sigma$ | Volatility of project value | 40% |
| Dividend | Cash flow forgone by waiting | USD 0.6 juta |

Dealership menghasilkan first-year FCF USD 0.6 juta, tumbuh 2%, dengan project cost of capital 12%:

$$
V=\frac{0.6}{12\%-2\%}=6\text{ juta}
\tag{22.1}
$$

Immediate NPV adalah USD 1 juta. Tetapi jika firm menunggu, ia hanya invest bila year-1 asset value melebihi USD 5 juta. Payoff identik dengan:

$$
\max(V_1-K,0)
$$

Cash flow yang hilang saat menunggu diperlakukan seperti dividend. Ex-dividend asset value dan PV strike adalah:

$$
S^x=6-\frac{0.6}{1.12}=5.46\text{ juta}
$$

$$
PV(K)=\frac{5}{1.05}=4.76\text{ juta}
$$

Black-Scholes inputs memberi:

$$
d_1
=\frac{\ln[S^x/PV(K)]}{\sigma\sqrt{T}}
+\frac{\sigma\sqrt{T}}{2}
=0.543
$$

$$
d_2=d_1-\sigma\sqrt{T}=0.143
$$

$$
\boxed{
C=S^xN(d_1)-PV(K)N(d_2)=1.20\text{ juta}
}
\tag{22.2}
$$

Value of waiting USD 1.20 juta lebih besar daripada immediate NPV USD 1 juta. Firm seharusnya menunggu. Informasi satu tahun memungkinkan walk-away bila outlook memburuk, sementara upside tetap dapat diambil.

Jika current operating value naik menjadi USD 7 juta karena first-year cash flow lebih besar, immediate NPV USD 2 juta melebihi wait option USD 1.91 juta; invest now menjadi optimal. Dalam textbook example, trigger-nya adalah operating value sekitar USD 6.66 juta, atau immediate NPV USD 1.66 juta.

> [!WARNING] Important Distinction
> Dengan option to wait, rule **NPV > 0 → invest now** tidak lagi cukup. Invest now hanya bila immediate NPV melebihi value of preserving the option. Karena itu, investment trigger biasanya membutuhkan NPV yang secara material positif.

### A negative current NPV can still have positive opportunity value

Jika dealership saat ini bernilai USD 4 juta, immediate NPV adalah USD -1 juta. Namun hak untuk menunggu masih bernilai sekitar USD 248,000 karena dealership value mungkin naik sebelum option expires. Opportunity value tidak boleh disamakan dengan NPV apabila firm wajib berinvestasi hari ini.

### Factors affecting investment timing

1. **Volatility.** Lebih banyak uncertainty berarti lebih banyak information yang dapat dipelajari sebelum exercise. Downside dapat ditolak sedangkan upside dipertahankan, sehingga value of waiting naik.
2. **Dividends/cost of delay.** Lost interim cash flow, competitor entry, lost market share, patent decay, atau higher future cost adalah counterpart dividend. Semakin besar value yang hilang saat menunggu, semakin cepat exercise menjadi optimal.
3. **Time to decision.** Lebih banyak waktu biasanya memberi lebih banyak opportunity bagi favourable information, tetapi juga dapat menambah cumulative delay cost.
4. **Investment cost and risk-free rate.** Menunda fixed strike juga menunda cash payment; PV investment cost turun ketika dibayar kemudian.

### Example — Lower Volatility and Competition

Dengan asset value USD 6 juta tetapi volatility hanya 25%, wait option turun menjadi USD 0.93 juta. Immediate NPV USD 1 juta lebih tinggi, sehingga invest now. Information yang mungkin diperoleh tidak cukup besar.

Dengan volatility 40% tetapi delay membuat future FCF turun 10% karena competitor expansion, effective underlying value turun menjadi USD 4.92 juta dan option value USD 0.85 juta. Cost of waiting kembali membuat immediate investment optimal.

### Investment options and firm risk

Growth option biasanya lebih risky daripada assets in place. Dalam dealership case, underlying dealership beta sekitar 2, tetapi option beta:

$$
\beta_{\text{option}}
=\frac{S^xN(d_1)}{C}\beta_{\text{underlying}}
$$

Dengan inputs textbook, multiplier sekitar 3.2 sehingga corporation beta sekitar 6.4. Option value sangat sensitive terhadap underlying value karena option masih jauh dari guaranteed exercise.

Implikasinya:

- young atau R&D-intensive firms dengan value besar dari future growth options dapat mempunyai beta lebih tinggi daripada mature firms;
- firm beta yang mengandung banyak growth options dapat **overstate** beta assets in place;
- memakai comparable firm beta tanpa memisahkan growth options dapat menghasilkan project discount rate terlalu tinggi.

## 6. 22.4 Growth and Abandonment Options

**Growth option** adalah hak melakukan future investment atau memperbesar scale jika conditions favourable. **Abandonment option** adalah hak mengurangi scale, menjual assets, break contract, atau walk away jika project buruk. Keduanya menambah value karena payoff menjadi asymmetric.

### Valuing growth potential under interest-rate uncertainty

StartUp hanya memiliki patent obat. Jika developed, drug memberi certain profit USD 1 juta per year selama 17 tahun; development cost USD 10 juta. Pada 8% annuity yield, immediate NPV:

$$
NPV
=\frac{1}{0.08}\left(1-\frac{1}{1.08^{17}}\right)-10
=-0.878\text{ juta}
$$

Namun interest rates akan berubah setelah satu tahun menjadi 10% atau 5% dan kemudian tetap. Bila naik, firm tidak invest. Bila turun, remaining 16-year NPV menjadi USD 0.838 juta. Dengan risk-neutral probability rate rise 71.95% dan one-year risk-free rate 6%:

$$
PV(\text{Patent Option})
=\frac{0.838(1-0.7195)+0(0.7195)}{1.06}
=0.222\text{ juta}
$$

Patent bernilai positif walaupun immediate development NPV negatif. Uncertainty pada cost of capital menciptakan growth-option value karena firm hanya exercises dalam low-rate state.

### The option to expand

Project membutuhkan initial USD 10 juta. Setelah satu tahun, product berhasil dengan risk-neutral probability 50% dan menghasilkan USD 1 juta perpetuity; jika gagal, menghasilkan nol. Firm dapat double scale dengan terms yang sama setelah melihat outcome. Risk-free rate 6%.

Tanpa expansion option:

$$
NPV_{\text{static}}
=\frac{0.5(1)}{0.06}-10
=-1.667\text{ juta}
$$

Jika sukses, NPV doubling adalah:

$$
NPV_{\text{double|success}}
=\frac{1}{0.06}-10
=6.667\text{ juta}
$$

Present value expansion option:

$$
PV(\text{Growth Option})
=\frac{0.5(6.667)}{1.06}
=3.145\text{ juta}
$$

Total:

$$
NPV=-1.667+3.145=1.478\text{ juta}
$$

Initial project hanya worthwhile karena membuka option to expand. Small-scale launch adalah pilot yang membeli information; full commitment dilakukan setelah success diketahui.

### The option to abandon

Gourmet store memerlukan setup cost USD 400,000 dan operating cost USD 10,000 per month. Revenue menjadi USD 16,000 bila building menjadi tourist attraction dan USD 8,000 jika tidak, masing-masing probability 50%. Cost of capital 7% per year; monthly rate sekitar 0.565%.

Tanpa ability to exit, expected monthly revenue USD 12,000:

$$
NPV_{\text{no option}}
=\frac{12{,}000-10{,}000}{0.00565}-400{,}000
=-46{,}018
$$

Lease dapat dihentikan tanpa cost setelah 24 months. Jika tourist attraction, project NPV USD 661,947. Jika tidak, store ditutup setelah dua tahun dan NPV USD -444,770. Expected NPV dengan optimal abandonment:

$$
NPV_{\text{with option}}
=0.5(661{,}947)+0.5(-444{,}770)
=108{,}589
$$

Abandonment-option value:

$$
108{,}589-(-46{,}018)=154{,}607
$$

Flexibility mengubah project dari reject menjadi accept.

> [!WARNING] Important Distinction
> Abandonment tidak berarti initial decision selalu salah. Firm membeli opportunity lalu menggunakan information yang baru tersedia. Continuing a negative-NPV project hanya karena capital telah dikeluarkan adalah **sunk-cost fallacy**.

Manager sering memperoleh prestige dari launching atau expanding projects tetapi kurang dihargai ketika menutup project. Agency incentives dapat menyebabkan abandonment option tidak digunakan, walaupun terminating losers menciptakan value lebih besar daripada memulai venture baru.

## 7. 22.5 Applications to Multiple Projects

### Comparing mutually exclusive investments with different lives

Canadian Motors membandingkan:

- five-year machine: cost USD 10 juta, annual saving USD 3 juta;
- ten-year machine: cost USD 16 juta, annual saving USD 3 juta;
- cost of capital 10%.

Standalone NPVs:

$$
NPV_5
=\frac{3}{0.10}\left(1-\frac{1}{1.10^5}\right)-10
=1.37\text{ juta}
$$

$$
NPV_{10}
=\frac{3}{0.10}\left(1-\frac{1}{1.10^{10}}\right)-16
=2.43\text{ juta}
$$

Memilih NPV 10-year secara langsung mengabaikan apa yang terjadi setelah five-year machine habis.

| Replacement assumption after year 5 | Total 10-year-horizon NPV of short machine | Decision implication |
|---|---:|---|
| No replacement | USD 1.37 juta | 10-year machine superior |
| Replace at same terms | $1.37+1.37/1.10^5=2.22$ juta | 10-year machine still slightly superior |
| Improved replacement cost USD 7 juta | $1.37+4.37/1.10^5=4.08$ juta | 5-year machine superior |

Short-lived project includes a **replacement option**. Long-lived project commits the firm and sacrifices ability to respond to future technology or cost changes.

### Equivalent annual benefit and its hidden assumption

Equivalent annual benefit (EAB) converts NPV into constant annual benefit over project life. Textbook results:

$$
EAB_5=0.361\text{ juta},\qquad EAB_{10}=0.395\text{ juta}
$$

EAB selects 10-year machine. But EAB implicitly assumes each project can be repeatedly replaced at identical terms. When replacement terms are uncertain, this assumption can be wrong and explicit real-option analysis is necessary.

### Example — Valuing uncertain replacement

At year 5, short-machine cost is equally likely to be USD 13 juta, USD 10 juta, or USD 7 juta. Optimal replacement NPV is respectively zero, USD 1.37 juta, or USD 4.37 juta. Therefore:

$$
NPV_{5,\text{ option}}
=1.37
+\frac{\tfrac13(0)+\tfrac13(1.37)+\tfrac13(4.37)}{1.10^5}
=2.56\text{ juta}
$$

Short-lived machine now exceeds the 10-year NPV USD 2.43 juta. Commitment flexibility reverses the ranking.

### Staging mutually dependent investments

Eclectic Motors needs three breakthroughs, all of which must succeed:

| Stage | Cost | Time | Probability of success |
|---|---:|---:|---:|
| Materials | USD 100 juta | 1 year | 50% |
| Recharger | USD 400 juta | 1 year | 50% |
| Battery | USD 100 juta | 4 years | 25% |

Only one stage can be undertaken at a time. Sequence matters because later investment is avoided if earlier stage fails.

The intuition is:

- all else equal, do **cheaper stage first** so expensive investment is not wasted;
- all else equal, do **riskier stage first** because failure resolves viability earlier;
- all else equal, do **longer stage first** because subsequent costs are delayed more and discounted longer.

General ranking rule, highest first:

$$
\boxed{
\frac{1-PV(\text{success})}{PV(\text{investment})}
}
\tag{22.3}
$$

For Eclectic:

| Stage | Ranking score |
|---|---:|
| Battery | 0.00802 |
| Materials | 0.00528 |
| Recharger | 0.00132 |

Optimal sequence: **battery → materials → recharger**.

Given future profit value USD 4 billion and this optimal sequence, project NPV is USD 19.1 juta. Textbook emphasizes that any other ordering produces negative NPV. Real-option value comes not only from whether stages occur, but also from sequencing commitments to maximize information and minimize wasted capital.

## 8. 22.6 Rules of Thumb

Exact real-option analysis requires application-specific uncertainty modeling, dynamic decisions, probabilities, discount rates, and sometimes option-pricing expertise. Firms therefore use heuristics.

### Profitability index rule

For a project with only upfront investment:

$$
\text{Profitability Index}
=\frac{NPV}{\text{Initial Investment}}
$$

Without delay option, accept when index $>0$. With option to wait, firms require a higher threshold—sometimes around 1—so NPV must be sufficiently large before committing. High thresholds reflect asymmetric timing error: investing too early destroys flexibility irreversibly, whereas waiting somewhat too long often only postpones benefits.

### Hurdle rate rule

Instead of raising required NPV, firm raises discount rate above true cost of capital and invests only if NPV at this **hurdle rate** is positive. For interest-rate uncertainty:

$$
\boxed{
\text{Hurdle Rate}
=\text{Cost of Capital}
\times
\frac{\text{Callable Annuity Rate}}{\text{Risk-Free Rate}}
}
\tag{22.4}
$$

A callable annuity can be refinanced if rates fall. If project NPV is positive even when financed at callable rate, firm can invest now while retaining benefit of future lower rates.

### Example — Hurdle Rate and Option to Delay

Risk-free technology requires USD 1 juta and pays USD 90,000 perpetually. Current risk-free perpetuity rate 5.4%; callable annuity rate 9%. Hurdle-rate NPV:

$$
NPV_{\text{hurdle}}
=\frac{90{,}000}{0.09}-1{,}000{,}000=0
$$

Rule says indifferent between now and wait. True value at cost of capital:

$$
NPV_{\text{true}}
=\frac{90{,}000}{0.054}-1{,}000{,}000
=666{,}667
$$

If rates fall to 5%, future NPV is USD 800,000. With risk-neutral probability 90% and one-year rate 8%:

$$
PV(\text{Wait})
=\frac{0.90(800{,}000)}{1.08}
=666{,}667
$$

The timing rule is exact in this special constant-perpetual-cash-flow, pure-interest-rate-uncertainty case.

> [!WARNING] Important Distinction
> **Hurdle rate is a decision rule, not a valuation discount rate.** Economic project value tetap dihitung dengan true cost of capital. Menggunakan hurdle rate untuk melaporkan value akan understate NPV.

## 9. 22.7 Key Insights from Real Options

### Out-of-the-money real options have value

Current negative NPV tidak membuat opportunity worthless jika future states dapat menghasilkan positive NPV dan firm bebas tidak berinvestasi pada bad states.

### In-the-money options need not be exercised immediately

Current positive NPV tidak otomatis berarti invest now. Exercise menghilangkan wait option; invest hanya jika immediate NPV melebihi option value yang dilepas.

### Waiting is valuable

Information memungkinkan better contingent decisions. Jika menunggu tidak mempunyai cost, early commitment tidak optimal. Jika ada lost cash flow atau competition, compare cost of delay against information value.

### Delay investment expenses as much as possible

Capital sebaiknya committed pada last responsible moment. Premature expenditure mengurangi flexibility dan dapat menjadi wasted cost jika later information buruk.

### Create value by exploiting real options

Real-option value hanya terealisasi jika management benar-benar re-evaluates decisions. At each stage, choices adalah abandon, defer, continue, modify, atau grow. Governance, incentives, dan willingness to terminate projects sangat menentukan apakah theoretical option value menjadi shareholder value.

> [!INFO] CF4 Connection
> Real options adalah jembatan antara capital budgeting dan governance. Contractual flexibility tidak cukup; decision makers harus mempunyai incentive, information, dan authority untuk memilih branch yang memaksimalkan firm value, termasuk keputusan tidak populer seperti menunda atau menghentikan project.

## Chapter Synthesis

Static NPV bertanya, “Berapa value jika firm berkomitmen pada satu fixed plan?” Real-option analysis bertanya, “Berapa value jika firm dapat mengubah plan setelah belajar?” Perbedaan kedua nilai tersebut adalah value of managerial flexibility.

Flexibility menciptakan asymmetric exposure: firm membayar limited commitment atau option premium hari ini, menambah investment saat conditions favourable, dan menghindari future outlay atau menghentikan losses saat conditions unfavourable. Karena itu, uncertainty dapat menaikkan value of opportunity—berlawanan dengan intuisi bahwa risk selalu buruk—selama downside dapat dibatasi.

Timing, scale, sequencing, and exit saling terkait. Delay option menentukan kapan commit; growth option menentukan kapan expand; abandonment option menentukan kapan stop; replacement option mempertahankan ability to adopt better future technology; staging menentukan information apa yang dibeli terlebih dahulu. Semua keputusan harus dievaluasi backward dari future optimal actions, bukan berdasarkan sunk cost atau prestige dari existing strategy.

Namun real options tidak membenarkan segala speculative project. Option value membutuhkan identifiable future decision, information that can resolve uncertainty, managerial ability to respond, and disciplined exercise rules. Tanpa elemen tersebut, “strategic value” mudah menjadi alasan untuk menerima negative-NPV investments.

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Real option | Right to make future business decision | Adds flexibility value to static project | [[4.3 Agency Theory and Governance]] |
| Decision node | Management-controlled branch | Identifies action choice | [[4.3 Agency Theory and Governance]] |
| Information node | Uncontrolled uncertainty branch | Identifies when information arrives | [[4.3 Agency Theory and Governance]] |
| Option to delay | Right to postpone investment | Preserves flexibility and information value | [[4.3 Agency Theory and Governance]] |
| Cost of delay | Interim value forgone while waiting | Real-option counterpart of dividend | [[4.3 Agency Theory and Governance]] |
| Growth option | Right to invest or expand later | Can make initial pilot worthwhile | [[4.3 Agency Theory and Governance]] |
| Abandonment option | Right to terminate or disinvest | Limits downside and combats sunk-cost error | [[4.3 Agency Theory and Governance]] |
| Replacement option | Right to adopt future project/technology | Critical for different-life comparisons | [[4.3 Agency Theory and Governance]] |
| Staged investment | Sequential conditional commitments | Buys information before large outlays | [[4.3 Agency Theory and Governance]] |
| Mutually dependent investments | All stages required for final benefit | Sequence affects expected wasted cost | [[4.3 Agency Theory and Governance]] |
| Equivalent annual benefit | NPV expressed as annual annuity | Assumes replacement at identical terms | [[4.3 Agency Theory and Governance]] |
| Profitability-index rule | Require NPV/investment above threshold | Practical delay heuristic | [[4.3 Agency Theory and Governance]] |
| Hurdle-rate rule | Apply elevated rate to exercise decision | Approximates option to wait | [[4.3 Agency Theory and Governance]] |
| Growth-option beta | Risk of option component | Can exceed beta of assets in place | [[4.3 Agency Theory and Governance]] |

## Compression Notes

### Retained in Detail

- Real versus financial option distinction and decision-tree mechanics.
- Megan booth example and explicit value of flexibility.
- Dealership option mapping, Black-Scholes inputs, investment trigger, volatility, delay cost, and beta implication.
- Growth-option examples under interest-rate uncertainty and staged expansion.
- Abandonment-option calculation and sunk-cost implication.
- Different-life machines, replacement option, EAB limitation, and uncertain replacement example.
- Eclectic Motors staged-investment sequence and Eq. 22.3.
- Profitability-index and hurdle-rate rules, including why hurdle rate is not a valuation rate.

### Condensed

- Opening biotechnology narrative and urban-land application.
- TARP uncertainty case and mortgage-refinancing box reduced to conceptual lessons.
- Risk-neutral probability derivation retained through its conclusion rather than every intermediate annuity step.
- Boeing interview condensed into the pilot-stage and decision-gate mechanics.

### Omitted / Beyond CF4

- Bibliographic footnotes, further reading, concept checks, and end-of-chapter problems.
- Repeated numerical demonstrations with the same conceptual lesson.
- A separate Section 22.8, because it does not exist in the supplied textbook edition despite the syllabus notation 22.1–22.8.

## CF4 Connection Map

```text
Uncertain future conditions
↓
Information node
↓
Managerial discretion at decision node
├── delay / abandon
├── continue / replace
└── expand
↓
Project cash flows and risk change
↓
[[4.3 Agency Theory and Governance]]
```

## Quick Reading Review

- Real option is a right to make future business decision; underlying asset usually is not traded.
- Flexibility adds value only when management can act after relevant information arrives.
- Decision trees distinguish square decision nodes from circular information nodes and are solved backward.
- With delay option, invest now only when immediate NPV exceeds value of waiting.
- Current negative NPV opportunity can still have positive value; current positive NPV need not be exercised.
- Higher volatility generally raises wait/growth option value; lost interim cash flow and competition reduce it.
- Growth-option beta can greatly exceed asset-in-place beta.
- Small pilot project may be justified solely by the option to expand after success.
- Abandonment caps losses; sunk costs should not force continuation.
- Different-life projects must include replacement options; EAB assumes identical replacement terms.
- Stage cheaper, riskier, and longer mutually dependent tasks earlier, subject to the full ranking rule.
- Profitability-index and hurdle-rate thresholds approximate timing decisions but do not measure true value.
- Real-option value requires continuous re-evaluation and disciplined willingness to delay, grow, or stop.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists; Chapter Map | Chapter 22 opening and notation |
| Real versus financial options | Section 22.1 |
| Decision-tree analysis and Megan example | Section 22.2; Figures 22.1-22.3 |
| Dealership delay option and firm risk | Section 22.3; Table 22.1; Figures 22.4-22.5; Example 22.1 |
| Growth, expansion, and abandonment | Section 22.4; Figures 22.6-22.8 |
| Replacement and staged investments | Section 22.5; Table 22.2; Examples 22.2-22.4 |
| Rules of thumb | Section 22.6; Eq. 22.4; Example 22.5 |
| Synthesis principles | Section 22.7 and Chapter Summary |
