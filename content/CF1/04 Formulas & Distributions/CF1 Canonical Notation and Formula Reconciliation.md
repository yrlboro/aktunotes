# CF1 Canonical Notation Dictionary & Formula Reconciliation Matrix

## Purpose

Dokumen ini adalah **audit layer**, bukan cheat sheet final.

Tujuannya:
1. menyatukan notasi dari 27 CF1 syllabus notes dan 3 legacy formula sheets;
2. membedakan **foundation**, **core derived**, **convenience**, dan **approximation**;
3. menunjukkan kapan dua formula sebenarnya ekuivalen;
4. menandai notation collisions dan shortcut yang berpotensi menambah cognitive load;
5. menentukan status belajar: **MEMORIZE / RECONSTRUCT / REFERENCE ONLY / AVOID AS DEFAULT**.

Legacy sheets yang direkonsiliasi:
- ACTEX Exam FM Formula & Review Sheet (2023)
- Coaching Actuaries Exam FM Formula Sheet (2022)
- Theory of Interest Formulas

Authority order untuk canonicalization:
1. Silabus CF1 + 27 CF1 syllabus notes
2. Official textbook framing yang dirujuk syllabus notes
3. Legacy cheat sheets sebagai exam shortcut/reference

---

# 1. Canonical Notation Dictionary

## 1.1 Time Value of Money

| Canonical | Meaning | Legacy aliases / collisions | Decision |
|---|---|---|---|
| $a(t)$ | accumulation function of 1 from 0 to $t$ | same in all sheets | KEEP |
| $A(t)$ | amount function for principal $A(0)$ | ACTEX / Theory same | KEEP |
| $i$ | effective interest rate **per relevant period** | sometimes bond yield in legacy sheets | KEEP as generic periodic effective rate; qualify context |
| $d$ | effective discount rate per same period | same | KEEP |
| $v=(1+i)^{-1}$ | one-period discount factor | same | KEEP |
| $i^{(m)}$ | nominal interest rate convertible $m$-thly | same | KEEP |
| $d^{(m)}$ | nominal discount rate convertible $m$-thly | same | KEEP |
| $\delta$ | force of interest | same | KEEP |
| $i_{\text{real}}$ | real effective rate | some notes / sheets use $j$ or $i'$ | CANONICALIZE to $i_{\text{real}}$ |
| $\pi$ | inflation rate | legacy sheets often use $r$ | CANONICALIZE to $\pi$ to avoid collision with coupon rate |

### Canonical equivalence anchor

$$
1+i
=
\left(1+\frac{i^{(m)}}m\right)^m
=
e^\delta
=
\left(1-\frac{d^{(p)}}p\right)^{-p}
=
\frac{1}{1-d}.
$$

**Status:** MEMORIZE as the rate-conversion anchor.

---

## 1.2 Cash Flows / Equation of Value

| Canonical | Meaning | Decision |
|---|---|---|
| $C_t$ | signed cash flow at time $t$ | KEEP |
| $\tau$ | focal / valuation date | KEEP |
| $V_\tau$ | value at focal date | KEEP |

Canonical principle:

$$
V_\tau=\sum_t C_t\frac{a(\tau)}{a(t)}.
$$

Under constant compound interest:

$$
V_\tau=\sum_t C_t(1+i)^{\tau-t}.
$$

For an equation of value:

$$
\sum_t C_t(1+i)^{\tau-t}=0.
$$

**Status:** FOUNDATION — MEMORIZE conceptually, not as a specialized shortcut.

---

## 1.3 Annuities

| Canonical | Meaning | Legacy behavior | Decision |
|---|---|---|---|
| $a_{\overline{n}\rvert}$ | PV at $t=0$ of unit payments at $1,\ldots,n$ | same | KEEP |
| $\ddot a_{\overline{n}\rvert}$ | PV at first payment date of unit due annuity | same | KEEP |
| $s_{\overline{n}\rvert}$ | AV at time $n$ of unit immediate annuity | same | KEEP |
| $\ddot s_{\overline{n}\rvert}$ | AV one period after final due payment | same | KEEP |
| ${}_{m\vert}a_{\overline{n}\rvert}$ | $m$-period deferred $n$-payment annuity-immediate | same idea, notation formatting differs | KEEP |
| $(Ia)_{\overline{n}\rvert}$ | increasing annuity-immediate 1,2,...,n | same | KEEP |
| $(Da)_{\overline{n}\rvert}$ | decreasing annuity-immediate n,...,1 | same | KEEP |
| $\bar a_{\overline{n}\rvert}$ | continuous level annuity PV | same | KEEP |

**Canonical rule:** payment amount is $R$, so actual PV is $R a_{\overline{n}\rvert}$, not a redefinition of the annuity factor.

---

## 1.4 Loans

| Canonical | Meaning | Legacy aliases | Decision |
|---|---|---|---|
| $L$ | original loan principal | same | KEEP |
| $R_t$ | payment at time $t$ | ACTEX often $P$, Theory uses $P_A$ / $P(k)$ | CANONICALIZE |
| $R$ | level payment | ACTEX $P$, CA $R$, Theory $P_A$ | CANONICALIZE |
| $B_t$ | outstanding loan balance immediately after payment $t$ | same basic idea | KEEP, but timing label mandatory |
| $I_t$ | interest portion of payment $t$ | same | KEEP |
| $P_t$ | principal portion of payment $t$ | legacy sheet sometimes uses `Print` or $P_k$ | KEEP within loan context |
| $i_L$ | effective loan rate per payment period | usually $i$ | use $i$ locally; $i_L$ only when another rate coexists |
| $i_{\text{SF}}$ | sinking-fund earning rate | usually $j$ | CANONICALIZE globally to avoid $j$-collision |
| $D$ | periodic sinking-fund deposit | Theory uses $D_S$ | KEEP |

**Timing convention:** $B_t$ = balance immediately **after** payment $t$. If a source uses another convention, translate before applying formulas.

---

## 1.5 Bonds

| Canonical | Meaning | Legacy aliases / collision | Decision |
|---|---|---|---|
| $P$ | bond price / purchase price | also generic PV elsewhere | KEEP in bond context |
| $F$ | face / par amount | elsewhere can mean future value | KEEP in bond context |
| $C$ | redemption value | elsewhere generic cash flow | KEEP in bond context |
| $r$ | coupon rate per coupon period | inflation often also $r$ in legacy sheets | KEEP only in bond context |
| $Fr$ | coupon amount per coupon period | sometimes visually compressed in sheets | KEEP |
| $j$ | periodic yield rate | legacy sheets often use $i$ | KEEP because syllabus notes already use $j$ for bonds |
| $g=Fr/C$ | modified coupon rate | ACTEX / Theory | KEEP as optional derived notation |
| $B_t$ | bond book value after coupon $t$ | same symbol as loan balance | ACCEPT contextually; label “bond book value” |
| $A_t^{\text{bond}}$ | premium amortized / discount accumulated during period $t$ | Vaaler-style may use $P_t$ | NEW canonical safety notation; textbook alias must be shown |

### Collision resolution
Do **not** use $P_t$ as canonical bond principal adjustment because $P_t$ is already useful as loan principal portion.

---

## 1.6 Term Structure

| Canonical | Meaning | Legacy aliases | Decision |
|---|---|---|---|
| $s_t$ | $t$-period spot rate | ACTEX uses $r_t$, CA uses $s_t$ | CANONICALIZE to $s_t$ |
| $D(0,t)$ | spot discount factor | legacy often $P_t=(1+s_t)^{-t}$ | use $D(0,t)$ in master sheet to avoid bond-price collision |
| $f_{t_1,t_2}$ | annualized forward interest rate from $t_1$ to $t_2$ | bracket notation varies | KEEP |
| $y$ | YTM when discussing a generic security | bond syllabus notes use $j$ per period | use $y$ conceptually; $j$ when tied to bond formula |

**Important:** `forward rate` here is not `forward contract price` from derivatives.

---

## 1.7 Duration / Convexity / Immunization

| Canonical | Meaning | Decision |
|---|---|---|
| $D_{\text{Mac}}$ | Macaulay duration | KEEP |
| $D_{\text{Mod}}$ | modified duration | KEEP |
| $C_{\text{Mac}}$ | Macaulay convexity | KEEP |
| $C_{\text{Mod}}$ | modified convexity | KEEP |
| $P_A,P_L$ | PV of assets / liabilities | KEEP |
| $D_A,D_L$ | corresponding durations | KEEP |
| $C_A,C_L$ | corresponding convexities | KEEP |

**Rule:** formulas using derivatives w.r.t. $i$ and derivatives w.r.t. $\delta$ are different parameterizations; do not mix without conversion.

---

## 1.8 Derivatives

| Canonical | Meaning | Decision |
|---|---|---|
| $S_0,S_T$ | spot underlying price now / at maturity | KEEP |
| $K$ | strike price | KEEP |
| $F_{0,T}$ | delivery price / forward price agreed at 0 for $T$ | KEEP |
| $F^P_{0,T}$ | prepaid forward price | KEEP |
| $T$ | expiration / maturity | KEEP |
| $c_0,p_0$ | option premium at inception when needed | KEEP |
| $r_f$ or $\delta$ | financing basis, explicitly declared | avoid unqualified $r$ because bond coupon collision |

---

## 1.9 Portfolio

| Canonical | Meaning | Decision |
|---|---|---|
| $R_i$ | return on asset $i$ | KEEP |
| $R_p$ | portfolio return | KEEP |
| $w_i$ | portfolio weight | KEEP; do not alternate with $x_i$ |
| $\sigma_i$ | asset standard deviation | KEEP |
| $\sigma_p$ | portfolio standard deviation | KEEP |
| $\operatorname{Cov}(R_i,R_j)$ | covariance | KEEP |
| $\rho_{ij}$ | correlation | KEEP |
| $\beta_i$ | CAPM beta | KEEP |
| $R_f$ | risk-free return | KEEP |
| $R_M$ | market return | KEEP |

---

# 2. High-Risk Notation Collision Register

| Symbol | Collision | Risk | Canonical handling |
|---|---|---:|---|
| $j$ | bond yield / sinking fund rate / real rate in some notes | VERY HIGH | reserve $j$ for bond periodic yield; use $i_{\text{SF}}$, $i_{\text{real}}$ elsewhere |
| $r$ | coupon rate / inflation rate / generic interest rate | VERY HIGH | reserve $r$ for coupon rate in bond section; use $\pi$ for inflation |
| $P$ | generic PV / loan payment in ACTEX / bond price | HIGH | use $P$ for bond price only when in bond context; use $R$ for loan/annuity payment |
| $P_t$ | loan principal portion / bond principal adjustment | VERY HIGH | keep $P_t$ for loan principal; rename bond adjustment in canonical sheet |
| $F$ | future value / bond face value | MEDIUM | context label mandatory |
| $C$ | generic cash flow / redemption value | MEDIUM | use $C_t$ for generic cash flow, $C$ for redemption |
| $B_t$ | loan outstanding balance / bond book value | MEDIUM | accepted because recursion analogy is useful; always label object |
| $s_t$ vs $s_{\overline{n}\rvert}$ | spot rate vs annuity accumulated value | MEDIUM | typography + subscript/bar notation must be precise |
| $R$ | loan payment / return | MEDIUM | loans use $R$, portfolio always $R_i,R_p$ |

---

# 3. Formula Equivalence Matrix

## 3.1 TVM / Rate Conversion

### Canonical foundation
$$
v=\frac{1}{1+i}=1-d
$$

Equivalent:
$$
d=\frac{i}{1+i}=iv,\qquad
i=\frac{d}{1-d}.
$$

ACTEX, Coaching Actuaries, Theory of Interest: same mathematics.

**Learning status:** MEMORIZE anchor; RECONSTRUCT the pairwise rearrangements.

---

### Nominal / force equivalence
$$
1+i
=
\left(1+\frac{i^{(m)}}m\right)^m
=
e^\delta
=
\left(1-\frac{d^{(p)}}p\right)^{-p}.
$$

**Learning status:** MEMORIZE this chain only.  
**Do not memorize:** every pairwise conversion as a separate formula.

---

## 3.2 Annuity Immediate / Due

### Immediate
$$
a_{\overline{n}\rvert}
=
\sum_{k=1}^{n}v^k
=
\frac{1-v^n}{i}.
$$

### Due
$$
\ddot a_{\overline{n}\rvert}
=
\sum_{k=0}^{n-1}v^k
=
\frac{1-v^n}{d}
=
(1+i)a_{\overline{n}\rvert}.
$$

All three cheat sheets show multiple equivalent forms.

**Learning status:**
- $a_{\overline{n}\rvert}=(1-v^n)/i$: MEMORIZE.
- $\ddot a_{\overline{n}\rvert}=(1+i)a_{\overline{n}\rvert}$: MEMORIZE.
- $\ddot a_{\overline{n}\rvert}=(1-v^n)/d$: RECONSTRUCT.

Reason: due is a one-period timing shift, not an independent formula family.

---

## 3.3 Accumulated Annuities

$$
s_{\overline{n}\rvert}
=
\frac{(1+i)^n-1}{i}
=
(1+i)^n a_{\overline{n}\rvert}.
$$

$$
\ddot s_{\overline{n}\rvert}
=
(1+i)s_{\overline{n}\rvert}.
$$

**Learning status:** MEMORIZE $s_{\overline{n}\rvert}$; RECONSTRUCT the rest from timing.

---

## 3.4 Deferred Annuity

Canonical:
$$
{}_{m\vert}a_{\overline{n}\rvert}
=
v^m a_{\overline{n}\rvert}.
$$

Equivalent:
$$
{}_{m\vert}a_{\overline{n}\rvert}
=
a_{\overline{m+n}\rvert}-a_{\overline{m}\rvert}.
$$

All legacy sheets use the same idea.

**Learning status:** MEMORIZE $v^m a_n$; RECONSTRUCT the difference identity.

**Timing rule:** first payment is at $t=m+1$.

---

## 3.5 Perpetuity

$$
a_{\overline{\infty}\rvert}=\frac1i,\qquad
\ddot a_{\overline{\infty}\rvert}=\frac1d,\qquad
\bar a_{\overline{\infty}\rvert}=\frac{1}\delta.
$$

**Learning status:** MEMORIZE, because they are high-frequency limits and very cheap cognitively.

---

## 3.6 Arithmetic Increasing / Decreasing Annuities

Canonical increasing:
$$
(Ia)_{\overline{n}\rvert}
=
\sum_{k=1}^n k v^k.
$$

Closed form:
$$
(Ia)_{\overline{n}\rvert}
=
\frac{\ddot a_{\overline{n}\rvert}-nv^n}{i}.
$$

Canonical decreasing:
$$
(Da)_{\overline{n}\rvert}
=
\sum_{k=1}^n (n-k+1)v^k.
$$

Closed form:
$$
(Da)_{\overline{n}\rvert}
=
\frac{n-a_{\overline{n}\rvert}}{i}.
$$

**Learning status:** CORE DERIVED.
- Understand/decompose payment pattern first.
- Memorize closed forms only after the base annuity mechanics are secure.
- ACTEX/Theory contain many more $Is,Ds,\ddot{Ia},\ddot{Da}$ variants: REFERENCE ONLY unless repeatedly appearing in CF1 practice.

---

## 3.7 Geometric Annuity

For payments
$$
1,(1+k),(1+k)^2,\ldots,(1+k)^{n-1},
$$

$$
PV
=
\frac{1-\left(\frac{1+k}{1+i}\right)^n}{i-k},
\qquad i\ne k.
$$

**Learning status:** CORE DERIVED / RECONSTRUCTABLE from geometric series.

Do not store separate “immediate”, “due”, and “FV” versions as independent memory items; shift/accumulate the canonical PV.

---

## 3.8 Loan Pricing and Outstanding Balance

Initial loan with level end-of-period payment:
$$
L=R a_{\overline{n}\rvert}.
$$

Outstanding balance after payment $t$:

**Prospective**
$$
B_t=R a_{\overline{n-t}\rvert}.
$$

**Retrospective**
$$
B_t=L(1+i)^t-Rs_{\overline{t}\rvert}.
$$

**Recursion**
$$
B_t=B_{t-1}(1+i)-R.
$$

ACTEX uses $P$ for level payment; Coaching Actuaries uses $R$; Theory uses $P_A$. They are the same object.

**Learning status:**
- Meaning $B_t=PV_t(\text{future payments})$: FOUNDATION.
- Prospective + recursion: MEMORIZE.
- Retrospective: MEMORIZE concept, formula can be reconstructed.

---

## 3.9 Loan Payment Split

$$
I_t=iB_{t-1},
$$
$$
P_t=R_t-I_t,
$$
$$
B_t=B_{t-1}-P_t.
$$

For level payments, principal portions grow geometrically:
$$
P_{t+s}=P_t(1+i)^s.
$$

**Learning status:**
- first three: MEMORIZE.
- geometric principal progression: CORE DERIVED; useful shortcut.

---

## 3.10 Sinking Fund

Separate fund must accumulate to loan principal:
$$
D\,s_{\overline{n}\rvert i_{\text{SF}}}=L.
$$

Thus
$$
D=\frac{L}{s_{\overline{n}\rvert i_{\text{SF}}}}.
$$

Periodic borrower outlay:
$$
i_L L+D.
$$

**Learning status:** MEMORIZE structure.  
**Do not merge** with amortization recursion: the loan and sinking fund are separate accounts.

---

## 3.11 Bond Price

Canonical:
$$
P
=
Fr\,a_{\overline{n}\rvert j}
+
Cv_j^n.
$$

Equivalent premium/discount form:
$$
P
=
C+(Fr-Cj)a_{\overline{n}\rvert j}.
$$

If
$$
g=\frac{Fr}{C},
$$
then
$$
P=C+C(g-j)a_{\overline{n}\rvert j}.
$$

Base-amount / Makeham-style identities in ACTEX/Theory are rearrangements of the same equation.

**Learning status:**
- basic price formula: MEMORIZE.
- premium/discount rearrangement: CORE DERIVED.
- Makeham/base-amount variants: REFERENCE / RECONSTRUCT.

---

## 3.12 Bond Premium / Discount

Canonical condition:
$$
Fr>Cj \iff P>C
$$
(premium),

$$
Fr<Cj \iff P<C
$$
(discount).

Equivalently using $g=Fr/C$:
$$
g>j \iff P>C,\qquad
g<j \iff P<C.
$$

For redemption at par $C=F$:
$$
r>j \Rightarrow \text{premium},
\qquad
r<j \Rightarrow \text{discount}.
$$

**Important audit flag:** any legacy wording that reverses coupon-vs-yield relation should not be trusted as the canonical rule.

---

## 3.13 Bond Book Value / Amortization

Canonical:
$$
B_t
=
Fr\,a_{\overline{n-t}\rvert j}
+
Cv_j^{n-t}.
$$

Recursion:
$$
B_t=(1+j)B_{t-1}-Fr.
$$

Interest earned:
$$
I_t=jB_{t-1}.
$$

Premium amortization:
$$
Fr-I_t=B_{t-1}-B_t
$$
when premium.

Discount accumulation:
$$
I_t-Fr=B_t-B_{t-1}
$$
when discount.

**Learning status:** MEMORIZE recursion + interpretation; prospective book-value formula follows bond pricing.

---

## 3.14 Spot / Forward Rates

Spot discount factor:
$$
D(0,t)=(1+s_t)^{-t}.
$$

Forward relation:
$$
(1+s_{t_2})^{t_2}
=
(1+s_{t_1})^{t_1}
(1+f_{t_1,t_2})^{t_2-t_1}.
$$

Legacy ACTEX uses $r_t$ rather than $s_t$; Coaching Actuaries and syllabus notes use $s_t$.

**Learning status:** MEMORIZE accumulation-consistency relation, not isolated shortcut formulas.

---

## 3.15 YTM vs Spot

YTM:
$$
P=\sum_t\frac{C_t}{(1+y)^t}.
$$

Spot pricing:
$$
P=\sum_t\frac{C_t}{(1+s_t)^t}.
$$

These are **not equivalent formulas** except under a flat term structure / special case. Zero-coupon bond has YTM = spot rate for its maturity.

**Learning status:** CONCEPT SEPARATION — high priority.

---

## 3.16 Duration

Macaulay:
$$
D_{\text{Mac}}
=
\frac{\sum_t t\,C_tv^t}{P}.
$$

Modified:
$$
D_{\text{Mod}}
=
-\frac{P'(i)}{P(i)}
=
\frac{D_{\text{Mac}}}{1+i}.
$$

First-order approximation:
$$
\frac{\Delta P}{P}
\approx
-D_{\text{Mod}}\Delta i.
$$

ACTEX and Coaching Actuaries also show formulas parameterized by force of interest $\delta$.

**Learning status:**
- Macaulay definition: MEMORIZE.
- Modified relation: MEMORIZE.
- approximation: MEMORIZE.
- special closed forms for perpetuity/par bond: REFERENCE ONLY unless practice shows high frequency.

---

## 3.17 Convexity

Modified convexity:
$$
C_{\text{Mod}}
=
\frac{P''(i)}{P(i)}
=
\frac{\sum_t t(t+1)C_tv^{t+2}}{P}.
$$

Second-order approximation:
$$
\frac{\Delta P}{P}
\approx
-D_{\text{Mod}}\Delta i
+
\frac12C_{\text{Mod}}(\Delta i)^2.
$$

Macaulay-convexity convention using $t^2$ is a different parameterization and must be explicitly labeled.

**Learning status:** MEMORIZE modified definition + second-order approximation.  
Do not mix $C_{\text{Mac}}$ and $C_{\text{Mod}}$ silently.

---

## 3.18 Immunization

Redington:
$$
P_A=P_L,
$$
$$
D_A=D_L,
$$
$$
C_A\ge C_L.
$$

Canonical interpretation from syllabus notes:
- flat yield curve assumption;
- parallel shifts;
- local protection for sufficiently small changes.

**Learning status:** MEMORIZE conditions **with assumptions**.

Coaching Actuaries’ two-asset allocation shortcut is useful, but should be a shortcut card, not the definition of immunization.

---

## 3.19 Options

Long call payoff:
$$
\max(S_T-K,0).
$$

Long put payoff:
$$
\max(K-S_T,0).
$$

Short payoff:
$$
-\text{long payoff}.
$$

Profit at expiration:
$$
\text{profit}_T
=
\text{payoff}_T
-
FV_T(\text{net premium paid at }0).
$$

**Learning status:** MEMORIZE payoff primitives; build strategies by addition.

---

## 3.20 Forward Contract

For a no-dividend asset under the note’s cost-of-carry basis:
$$
F_{0,T}=S_0e^{rT}
$$
when continuously compounded financing rate $r$ applies.

Long payoff:
$$
S_T-K.
$$

**Learning status:** distinguish:
- forward **contract** price $F_{0,T}$;
- forward **interest rate** $f_{t_1,t_2}$.

They share a word, not a formula family.

---

## 3.21 Portfolio Mean / Variance

Expected return:
$$
E[R_p]=\sum_iw_iE[R_i].
$$

Variance:
$$
\sigma_p^2
=
\sum_i\sum_j
w_iw_j\operatorname{Cov}(R_i,R_j).
$$

Two assets:
$$
\sigma_p^2
=
w_1^2\sigma_1^2+
w_2^2\sigma_2^2+
2w_1w_2\rho_{12}\sigma_1\sigma_2.
$$

**Learning status:** MEMORIZE.

---

## 3.22 CAPM

$$
\beta_i
=
\frac{\operatorname{Cov}(R_i,R_M)}
{\operatorname{Var}(R_M)}.
$$

$$
E[R_i]
=
R_f+\beta_i(E[R_M]-R_f).
$$

**Learning status:** MEMORIZE.

---

# 4. Cheat-Sheet Reconciliation Verdict

## ACTEX 2023

**Best use:** formula backbone / compact reference.

Strengths:
- systematic TVM equivalence;
- annuity family organized well;
- prospective/retrospective loan formulas side by side;
- bond formulas grouped;
- duration/convexity/immunization compact.

Risks:
- too many equivalent annuity forms displayed with equal visual priority;
- payment symbol $P$ conflicts with bond price $P$;
- special formulas can look like independent facts.

**Verdict:** KEEP AS SECONDARY REFERENCE, not primary memorization sheet.

---

## Coaching Actuaries 2022

**Best use:** exam recognition + visual/timeline + calculator execution.

Strengths:
- very useful prospective/retrospective loan diagram;
- rate/payment-frequency practical guidance;
- compact BA-II Plus workflow;
- cleaner visual grouping than long formula handbooks.

Risks:
- calculator-oriented shortcuts can obscure underlying equation of value if used too early;
- still repeats many formulas already present in ACTEX;
- uses conventions that can differ from CF1 note notation.

**Verdict:** KEEP FOR VISUALS + EXECUTION, not as independent formula authority.

---

## Theory of Interest Formulas

**Best use:** formula handbook / edge-case lookup.

Strengths:
- broadest coverage;
- includes sinking fund, reinvestment, liability matching, special cases;
- explicitly attempts globally unique notation.

Risks:
- 15 pages is too large for a primary cheat sheet;
- contains many low-frequency identities;
- some parsed/legacy statements must be cross-checked before use;
- density encourages formula-search behavior instead of model recognition.

**Verdict:** REFERENCE ONLY. Do not use as the main exam-prep memory interface.

---

# 5. Memorization Policy

## MEMORIZE

1. $v=(1+i)^{-1}=1-d$
2. rate-equivalence accumulation chain
3. equation-of-value principle
4. $a_{\overline{n}\rvert}=(1-v^n)/i$
5. $\ddot a_{\overline{n}\rvert}=(1+i)a_{\overline{n}\rvert}$
6. $s_{\overline{n}\rvert}=((1+i)^n-1)/i$
7. ${}_{m\vert}a_{\overline{n}\rvert}=v^m a_{\overline{n}\rvert}$
8. perpetuity $1/i,1/d,1/\delta$
9. loan recursion + interest/principal split
10. prospective loan balance
11. sinking-fund separate-account equation
12. basic bond price
13. bond book-value recursion
14. spot-forward accumulation relation
15. Macaulay + modified duration and first-order approximation
16. modified convexity + second-order approximation
17. Redington conditions + assumptions
18. primitive option payoffs
19. portfolio expected return + variance
20. CAPM + beta

## RECONSTRUCT

- pairwise rate conversion formulas
- due annuity closed form using $d$
- deferred-annuity difference identity
- most FV identities
- arithmetic-annuity variants beyond core PV forms
- geometric-annuity due/FV forms
- retrospective balance formula if prospective/recursion is easier
- bond premium-discount rearrangements
- Makeham/base-amount identities
- special duration formulas

## REFERENCE ONLY

- unusual increasing/decreasing AV variants
- many m-thly special annuity identities
- continuous increasing variants unless explicitly in practice set
- reinvestment special-case formulas
- callable bond edge-case shortcuts
- specialized matching-liability formulas
- calculator keystrokes

---

# 6. Default Exam Decision Protocol

Before touching a formula:

1. **What is the unknown?**
2. **What are the cash flows and their dates?**
3. **What is the focal date?**
4. **What rate applies to each interval?**
5. **Is the rate basis aligned with payment frequency?**
6. **Is this a level stream, varying stream, or arbitrary cash flow?**
7. **Can equation of value solve it directly?**
8. **If using a shortcut, what assumptions make it valid?**
9. **Sanity check direction/sign/timing.**

The master cheat sheet should be designed around this protocol—not around textbook chapter order.

---

# 7. Architecture Recommendation for the Final CF1 Canonical Cheat Sheet

The final sheet should not copy the 27-note hierarchy.

Recommended blocks:

1. Rate & Discount Engine
2. Equation of Value
3. Annuity Timing Engine
4. Varying / Deferred / Continuous Cash Flows
5. Loan Balance Engine
6. Sinking Fund
7. Bond Price & Book Value Engine
8. Spot / Forward / Yield Curve
9. Duration / Convexity / Immunization
10. Derivative Payoff Engine
11. Portfolio Risk–Return / CAPM
12. High-Risk Notation & Exam Traps
13. Reconstruction Map

Each block should show:
- **canonical formula**
- **meaning**
- **timing/rate assumptions**
- **equivalent forms**
- **memorize vs reconstruct**
- **one common trap**

---

# 8. Audit Conclusion

The three legacy sheets are largely redundant because they encode the same mathematical system with different local notation and different levels of detail.

The main remediation is therefore not “find the best fourth formula sheet,” but:

$$
\boxed{
\text{one canonical quantity}
\rightarrow
\text{one default formula}
\rightarrow
\text{explicit equivalent forms}
\rightarrow
\text{clear assumptions}
}
$$

The biggest cognitive-load reductions come from:
- standardizing payment notation to $R$;
- reserving $j$ primarily for bond periodic yield;
- separating $i_{\text{SF}}$ and $i_{\text{real}}$;
- using $\pi$ for inflation rather than reusing $r$;
- treating prospective/retrospective/recursion as views of one balance;
- treating bond pricing/book value as the same PV engine at different focal dates;
- treating duration/convexity formulas as definition vs approximation, not competing formulas;
- relegating low-frequency identities to reference-only status.
