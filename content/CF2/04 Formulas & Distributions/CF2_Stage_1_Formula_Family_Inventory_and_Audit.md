# CF2 — Stage 1 Formula Family Inventory & Audit

**Status:** Stage 1 complete — inventory/audit only; canonical notation and formula selection are **not yet frozen**.  
**Scope authority:** Silabus CF2 PAI.  
**Primary formula/concept layer:** 28 CF2 syllabus topic notes + official textbook chapters mapped by the syllabus.  
**Secondary layer:** ACTEX Exam P Formula & Review Sheet; Coaching Actuaries P Formula Sheet.  

---

## 1. Audit Principles

This inventory treats a formula as a mathematical object with **quantity + support/domain + assumptions + parameterization + role**, not as an isolated string.

Every family will ultimately be reconciled under:

> one canonical quantity → one default formula → equivalent forms → assumptions → reconstruction path

Stage 1 does **not** decide the final canonical representation. It identifies all formula families that must be reconciled in Stage 2.

### Source hierarchy

1. Silabus CF2 PAI — determines scope.
2. CF2 syllabus notes and official textbooks — primary formula/concept authority.
3. Legacy Exam P formula sheets — secondary reference, used to expose collisions, alternate conventions, shortcuts, and out-of-scope carryovers.

---

# 2. Formula Family Master Inventory

## TOPIK 1 — Dasar-Dasar Probabilitas

### F01 — Event Algebra & Set Identities
**Core objects:** union, intersection, complement, subset, disjointness, exhaustiveness.  
**Formula cluster:** De Morgan laws; distributive laws; complement identities.  
**Primary notes:** 1.1–1.2.  
**Audit risk:** notation for complement (`A^c`, `A'`, legacy `A^0`/rendered prime); confusion between mutually exclusive and independent.

### F02 — Probability Axioms & Derived Probability Rules
**Core objects:** non-negativity, normalization, countable additivity.  
**Derived cluster:** `P(∅)=0`, complement rule, monotonicity, bounds.  
**Primary notes:** 1.2.  
**Audit risk:** derived rules being memorized as independent primitives.

### F03 — Addition / Inclusion–Exclusion
**Core formula:** two-event and three-event inclusion–exclusion.  
**Primary notes:** 1.2.  
**Legacy overlap:** both formula sheets.  
**Audit risk:** special mutually-exclusive form used as if general.

### F04 — Counting / Enumeration
**Core objects:** addition principle, multiplication principle, factorial, permutations, combinations, repeated-object partition/multinomial-style counting where source-supported.  
**Primary notes:** 1.3.  
**Audit risk:** order/replacement distinction; notation `_nP_r`, `nP_r`, `_nC_r`, `\binom nr`.

### F05 — Equally Likely Classical Probability
**Core form:** favorable outcomes / total outcomes.  
**Primary notes:** 1.2–1.3.  
**Audit risk:** using the ratio without equiprobability.

### F06 — Conditional Probability
**Primitive form:** `P(A|B)=P(A∩B)/P(B)` with `P(B)>0`.  
**Derived:** multiplication rule.  
**Primary notes:** 1.4.  
**Audit risk:** direction reversal; wrong denominator.

### F07 — Event Independence
**Core form:** `P(A∩B)=P(A)P(B)`.  
**Equivalent conditional forms:** when denominators are positive.  
**Primary notes:** 1.5.  
**Audit risk:** pairwise vs mutual independence; zero-probability denominator issues; mutually exclusive ≠ independent.

### F08 — Total Probability & Bayes
**Core forms:** partition-weighted total probability; Bayes posterior normalization.  
**Primary notes:** 1.6.  
**Legacy overlap:** both formula sheets.  
**Audit risk:** posterior direction; partition completeness; two-branch special case overused as universal form.

---

## TOPIK 2 — Variabel Acak Univariat

### F09 — Discrete RV / PMF / CDF
**Core objects:** support, `p_X(x)`, `F_X(x)`, point mass from CDF jump.  
**Primary notes:** 2.1.  
**Audit risk:** textbook `f(x)` used for PMF vs canonical candidate `p_X(x)`; endpoint convention in CDF differences.

### F10 — Continuous RV / PDF / CDF / Survival
**Core objects:** `f_X(x)`, `F_X(x)`, survival `S_X(x)=1-F_X(x)`.  
**Primary notes:** 2.2.  
**Legacy overlap:** both formula sheets.  
**Audit risk:** density treated as probability; `P(X=x)=0` scope; `>` vs `≥` survival conventions.

### F11 — Expectation / LOTUS / Moments
**Core forms:** discrete sum, continuous integral, `E[g(X)]`, raw moments, central moments.  
**Primary notes:** 2.1–2.2.  
**Audit risk:** raw vs central moment notation (`μ'_k` vs `μ_k`); existence conditions omitted.

### F12 — Variance / Standard Deviation / Linear Transform
**Primitive:** `Var(X)=E[(X-E[X])^2]`.  
**Computational identity:** `E[X^2]-E[X]^2`.  
**Linear transform:** `Var(aX+b)=a^2 Var(X)`.  
**Primary notes:** 2.1–2.2.  
**Audit risk:** legacy sheet typo-like rendering `Var[aX+b]`; mean vs variance scale confusion.

### F13 — PGF
**Core object:** probability generating function for nonnegative-integer-type variables as supported by syllabus note.  
**Primary notes:** 2.3.  
**Audit risk:** syllabus explicitly requires PGF, while textbook support in assigned chapters is thinner than MGF treatment — **textbook-support gap to retain explicitly**.

### F14 — MGF
**Core:** `M_X(t)=E[e^{tX}]`; derivatives at zero; existence neighborhood; uniqueness when valid.  
**Primary notes:** 2.3.  
**Audit risk:** existence conditions; raw moments vs variance; MGF recognition without checking domain.

### F15 — CGF / Cumulants
**Core:** logarithm of MGF and derivative-based cumulants, to the level supported in notes/source.  
**Primary notes:** 2.3.  
**Audit risk:** over-expansion beyond syllabus/source; confusing cumulants with central moments.

### F16 — Univariable Transformation: Discrete
**Core:** one-to-one mass transfer; many-to-one preimage summation.  
**Primary notes:** 2.4.  
**Audit risk:** mistakenly inserting Jacobian for discrete transformation.

### F17 — Univariable Transformation: Continuous CDF Method
**Core:** transform event `g(X)≤y`, then differentiate when appropriate.  
**Primary notes:** 2.4.  
**Audit risk:** monotone increasing vs decreasing; support mapping omitted.

### F18 — Univariable Change of Variables / Jacobian
**Core:** `f_Y(y)=f_X(g^{-1}(y)) |d g^{-1}(y)/dy|` for one-to-one regular transformations.  
**Primary notes:** 2.4.  
**Audit risk:** derivative direction; absolute value; many-to-one branches.

### F19 — Bernoulli Family
**Core:** PMF, mean, variance, MGF.  
**Primary notes:** 2.5.  
**Audit risk:** indicator notation vs generic success probability.

### F20 — Binomial Family
**Core:** PMF, support, mean, variance, MGF, tail/complement, sum property for same `p`.  
**Primary notes:** 2.5.  
**Audit risk:** fixed-trial vs without-replacement recognition; different `p_i` incorrectly collapsed.

### F21 — Hypergeometric Family
**Core:** PMF, constrained support, mean, variance with finite population correction.  
**Primary notes:** 2.5.  
**Legacy collisions:** parameter symbols `(N,M,n)` vs ACTEX `(M,K,n)` vs other textbook `(N,D,n)`.  
**Audit risk:** population size / success count symbol collision; support endpoints.

### F22 — Geometric Family
**Two genuine parameterizations:**
- trial number of first success: support `1,2,…`, mean `1/p`;
- failures before first success: support `0,1,…`, mean `(1-p)/p`.
**Primary note default:** trial-number convention.  
**Legacy:** ACTEX uses failures convention; Coaching Actuaries lists both.  
**Audit risk:** **major parameterization collision**; memoryless statement depends on chosen variable.

### F23 — Negative Binomial Family
**Two genuine parameterizations:**
- trial number of `r`th success: support `r,r+1,…`, mean `r/p`;
- failures before `r`th success: support `0,1,…`, mean `r(1-p)/p`.
**Primary note default:** trial-number convention with mapping to failures convention.  
**Legacy:** ACTEX failures convention; Coaching Actuaries lists both.  
**Audit risk:** **major parameterization collision**; combinatorial coefficient changes appearance but maps by `X=Y+r`.

### F24 — Poisson Family
**Core:** PMF, mean/variance `λ`, MGF, independent-sum closure.  
**Primary notes:** 2.5.  
**Audit risk:** `λ` as mean/rate parameter vs other uses of lambda in likelihood/rate contexts.

### F25 — Continuous Uniform Family
**Core:** PDF/CDF, mean, variance, affine transform.  
**Primary notes:** 2.6.  
**Audit risk:** endpoint inclusivity immaterial probabilistically but can vary in source; discrete Uniform must remain distinct.

### F26 — Exponential Family
**Core default candidate in notes:** scale/mean `θ`, density `θ^{-1}e^{-x/θ}`, mean `θ`, variance `θ^2`.  
**Mapping:** rate `λ=1/θ`.  
**Primary notes:** 2.6; 4.5 MLE examples.  
**Audit risk:** **major rate-vs-scale collision**.

### F27 — Gamma Family
**Core default candidate in notes:** shape–scale `Γ(α,θ)`; `E[X]=αθ`, `Var(X)=αθ^2`.  
**Textbook alternative symbol:** Hogg–McKean–Craig uses `β` as scale in cited material.  
**Primary notes:** 2.6; 3.7; 4.5.  
**Audit risk:** **major symbol/parameterization collision**: `(α,θ)` vs `(α,β)` and potential rate notation.

### F28 — Normal Family
**Core:** PDF, standardization, mean/variance, affine/sum closure.  
**Primary notes:** 2.6.  
**Legacy notation issue:** ACTEX writes `N(μ,σ)` while describing variance `σ²`; syllabus notes generally use `N(μ,σ²)`.  
**Audit risk:** **major notation convention collision** in the second argument.

### F29 — Distribution Relationships / Approximations
**Candidate subfamilies:** sums of independent same-family variables; Poisson approximation / Normal approximation only where official sources support them; Gamma–Exponential relationship; geometric/negative-binomial relationship.  
**Primary notes:** 2.5–2.6, 4.2–4.3.  
**Audit risk:** exact closure vs approximation conflation.

---

## TOPIK 3 — Variabel Acak Multivariat

### F30 — Joint PMF / PDF / CDF
**Core:** normalization on joint support; probability over region; joint CDF.  
**Primary notes:** 3.1.  
**Audit risk:** `f(x,y)` used for both joint PMF and joint PDF in textbooks; region bounds omitted.

### F31 — Marginalization
**Core:** sum/integrate out the other variable using valid support.  
**Primary notes:** 3.2.  
**Audit risk:** rectangular bounds assumed on nonrectangular support; piecewise marginal support.

### F32 — Conditional PMF / PDF / CDF
**Core:** joint slice divided by conditioning marginal.  
**Primary notes:** 3.3.  
**Audit risk:** continuous conditioning misinterpreted via point probability; conditional support changes with conditioning value.

### F33 — Conditional Expectation & Conditional Variance
**Core:** `E[g(X)|Y=y]`; conditional second moment; variance identity.  
**Primary notes:** 3.4.  
**Audit risk:** `E[X|Y]` random variable vs `E[X|Y=y]` function/value.

### F34 — Law of Total Expectation
**Core:** `E[X]=E(E[X|Y])`.  
**Primary notes:** 3.4; reused in 3.7.  
**Audit risk:** treating as separate formula from conditional-marginal averaging rather than reconstruction rule.

### F35 — Law of Total Variance / Mixture Variance
**Core family:** within + between variance decomposition where source-supported.  
**Primary notes:** 3.7 explicitly uses mixture variance and relates it to total variance.  
**Audit risk:** 3.4 deliberately does not make total variance a core syllabus formula, while 3.7 uses the identity as a supported connection — **scope-placement issue**.

### F36 — Independence of Random Variables
**Core:** joint factorization; CDF factorization; conditional=marginal; MGF factorization when MGF exists.  
**Primary notes:** 3.5.  
**Audit risk:** product support necessary diagnostic but not sufficient; factorization domain.

### F37 — Joint MGF & Mixed Moments
**Core:** `M_{X,Y}(t_1,t_2)`; partial derivatives produce `E[X^rY^s]`.  
**Primary notes:** 3.5.  
**Audit risk:** derivative indices/order; existence condition.

### F38 — Covariance
**Primitive:** `E[(X-E[X])(Y-E[Y])]`.  
**Computational identity:** `E[XY]-E[X]E[Y]`.  
**Primary notes:** 3.5.  
**Legacy overlap:** both formula sheets.  
**Audit risk:** independence ⇒ zero covariance, converse false.

### F39 — Correlation
**Core:** covariance standardized by SD product.  
**Primary notes:** 3.5.  
**Audit risk:** undefined if variance zero; zero correlation ≠ independence.

### F40 — Variance of Linear Combinations
**Core:** scalar two-variable and general multi-variable forms including covariance cross terms.  
**Primary notes:** 3.5–3.6.  
**Legacy overlap:** `Var(X+Y)` special case.  
**Audit risk:** special independent form used without covariance check.

### F41 — Variance–Covariance Matrix
**Core:** `Σ=Cov(X)=E[(X-μ)(X-μ)^T]`; elementwise variances/covariances; symmetry.  
**Primary notes:** 3.6.  
**Audit risk:** symbol `Σ` may collide with summation visually; row/column vector convention.

### F42 — Matrix Linear Transformation
**Core:** `Cov(A X)=A Σ A^T`; `Var(a^T X)=a^T Σ a`.  
**Primary notes:** 3.6.  
**Audit risk:** transpose placement and dimension errors.

### F43 — Mixture / Parameter Compounding
**Core:** finite mixture weighted densities/PMFs/CDFs; continuous mixing integral.  
**Primary notes:** 3.7.  
**Audit risk:** **terminology collision**: CF2 source uses mixture/parameter compounding, while actuarial usage often uses compound distribution for random sums.

### F44 — Mixture Mean & Variance
**Core:** weighted means; variance = within + between.  
**Primary notes:** 3.7.  
**Audit risk:** variance reduced incorrectly to weighted component variances only.

### F45 — Specific Compound/Mixture Pairs
**Source-supported examples:** Poisson–Gamma compounding and other pairs explicitly developed in assigned source.  
**Primary notes:** 3.7.  
**Audit risk:** result distribution parameterization (especially Negative Binomial convention) must be mapped before identification.

### F46 — Multivariable Change of Variables / Jacobian
**Core:** inverse transformation; determinant absolute value; transformed joint support.  
**Primary notes:** 3.8.  
**Audit risk:** forward vs inverse Jacobian reciprocal; support mapping more important than determinant algebra.

### F47 — Auxiliary-Variable Method & Marginalization of Transformed Variables
**Core:** pair target function with an auxiliary variable to obtain one-to-one transform; then marginalize.  
**Primary notes:** 3.8.  
**Audit risk:** arbitrary auxiliary choice causing non-one-to-one mapping or difficult support.

---

## TOPIK 4 — Inferensi Statistik

### F48 — Random Sample / iid Joint Model
**Core:** iid factorization `∏ f(x_i;θ)` and statistic/estimate distinction.  
**Primary notes:** 4.1.  
**Audit risk:** without-replacement finite sampling incorrectly treated as iid.

### F49 — Sample Mean / Sample Variance
**Core:** `\bar X`; unbiased sample variance with denominator `n-1`.  
**Primary notes:** 4.1–4.2.  
**Audit risk:** **major denominator collision** with raw second sample moment and Normal variance MLE (`1/n`).

### F50 — Sampling Distribution of Sample Mean
**Core:** `E[\bar X]=μ`, `Var(\bar X)=σ²/n`, SE `σ/√n`; exact Normal under Normal population.  
**Primary notes:** 4.2.  
**Audit risk:** variance vs standard error scaling; exact vs approximate Normal.

### F51 — Finite Population Correction
**Core:** variance/SE adjustment for simple random sampling without replacement.  
**Primary notes:** 4.2.  
**Audit risk:** applying FPC to iid/infinite-population sampling.

### F52 — Difference of Two Means
**Core:** expectation/variance/SE of independent sample mean difference.  
**Primary notes:** 4.2.  
**Audit risk:** subtracting variances because means are subtracted.

### F53 — Chi-Square Sampling Distribution of Variance
**Core:** `(n-1)S²/σ² ~ χ²_{n-1}` under Normal population.  
**Primary notes:** 4.2.  
**Audit risk:** Normality omitted; df; critical-value convention.

### F54 — Student t Sampling Distribution
**Core:** `(\bar X-μ)/(S/√n) ~ t_{n-1}` under Normal population.  
**Primary notes:** 4.2.  
**Audit risk:** replacing `σ` by `S` but retaining exact `N(0,1)`.

### F55 — F Sampling Distribution / Variance Ratio
**Core:** ratio of independent scaled chi-squares; sample-variance standardization.  
**Primary notes:** 4.2.  
**Audit risk:** numerator/denominator orientation; reciprocal swaps df; equal-variance special case.

### F56 — CLT for Mean and Sum
**Core:** standardized convergence in distribution; mean and sum approximation forms.  
**Primary notes:** 4.3.  
**Legacy overlap:** ACTEX.  
**Audit risk:** exact vs approximate; mean vs sum scale; legacy wording “distribution approaches Normal” needs conditions/standardization context.

### F57 — Chebyshev Inequality
**Core:** upper deviation bound and central lower bound.  
**Primary notes:** 4.4.  
**Audit risk:** inequality incorrectly treated as equality.

### F58 — Weak LLN
**Core:** `\bar X_n ->_P μ` via Chebyshev under source assumptions.  
**Primary notes:** 4.4.  
**Audit risk:** LLN confused with CLT; strong-law statements exceed assigned source.

### F59 — Method of Moments Estimation
**Core:** raw sample moments `m'_k=(1/n)ΣX_i^k` equated to population moments.  
**Primary note:** 4.5.  
**Audit risk:** replacing denominator-`n` moment variance with unbiased `S²`; parameter domain check.

### F60 — Likelihood / Log-Likelihood / MLE
**Core:** iid likelihood, argmax, log-likelihood, boundary/support checks.  
**Primary note:** 4.5.  
**Audit risk:** likelihood treated as probability distribution over parameter; score root assumed to be global MLE.

### F61 — Parameter-Dependent Support / Order-Statistic MLE
**Core:** support indicator can determine MLE boundary, e.g. Uniform endpoint.  
**Primary note:** 4.5.  
**Audit risk:** blind differentiation.

### F62 — MLE Invariance
**Core:** transformed MLE for transformed parameter, to source-supported conditions.  
**Primary note:** 4.5.  
**Audit risk:** confusing MLE invariance with unbiasedness under nonlinear transformation.

### F63 — Bayesian Posterior Updating
**Core:** prior × sampling model → posterior normalization.  
**Primary note:** 4.5.  
**Audit risk:** frequentist likelihood vs Bayesian posterior probability.

### F64 — Beta–Binomial Conjugacy
**Core:** posterior parameter updates and posterior mean under stated loss.  
**Primary note:** 4.5.  
**Audit risk:** Beta distribution is not a Topik 2 named-distribution learning outcome but appears legitimately inside official Bayesian estimation material — **contextual formula, not general distribution-family memorization target**.

### F65 — Normal–Normal Bayesian Updating
**Core:** posterior precision additivity and precision-weighted mean.  
**Primary note:** 4.5.  
**Audit risk:** mixing variance and precision weights.

### F66 — Bias / Unbiasedness / MSE
**Core:** bias function; unbiased criterion; `MSE=Var+Bias²`.  
**Primary notes:** 4.6; decision-theory support in Miller Ch. 9.  
**Audit risk:** unbiasedness treated as universal optimality.

### F67 — Efficiency / MVUE / Cramér–Rao
**Core:** variance comparison for unbiased estimators; CR lower bound under regularity assumptions.  
**Primary notes:** 4.6.  
**Audit risk:** orientation of relative-efficiency ratio; CR bound used without regularity conditions.

### F68 — Consistency
**Core:** convergence in probability definition; sufficient condition via vanishing variance + unbiased/asymptotically unbiased setup.  
**Primary notes:** 4.6.  
**Audit risk:** consistency confused with unbiasedness or asymptotic unbiasedness.

### F69 — Sufficiency / Factorization Theorem
**Core:** conditional definition; Neyman–Fisher-style factorization as presented in source.  
**Primary notes:** 4.6.  
**Audit risk:** sufficiency interpreted as accuracy.

### F70 — Completeness
**Syllabus requires:** completeness of statistic.  
**Current official assigned source support:** insufficient for a full foundational treatment in the retrieved mapped chapters.  
**Status:** **SYLLABUS GAP / TEXTBOOK-SUPPORT GAP** to preserve; do not silently import a full theorem from outside assigned material.

### F71 — Confidence Interval General Pivot Logic
**Core:** pivotal construction and repeated-sampling coverage.  
**Primary notes:** 4.7.  
**Audit risk:** frequentist CI interpreted as posterior probability.

### F72 — CI for One Mean
**Subfamilies:** known `σ` Z; unknown `σ` exact Normal-population t; large-sample approximate Z with `s`.  
**Primary notes:** 4.7.  
**Audit risk:** exact vs approximate; Z vs t.

### F73 — CI for Difference of Means
**Subfamilies:** known variances Z; large-sample approximate Z; pooled t under equal Normal variances.  
**Primary notes:** 4.7.  
**Audit risk:** pooling without assumption; df.

### F74 — CI for Proportion(s)
**Core:** one-proportion and difference-of-proportions Normal approximation forms.  
**Primary notes:** 4.7.  
**Audit risk:** approximate treated as exact; CI SE differs from null-test pooled SE in testing contexts.

### F75 — CI for Variance
**Core:** chi-square pivot inversion.  
**Primary notes:** 4.7.  
**Audit risk:** **critical-value convention collision** (upper-tail vs lower-tail quantile notation); asymmetric endpoints.

### F76 — CI for Ratio of Variances
**Core:** F pivot with reciprocal quantiles/df swap.  
**Primary notes:** 4.7.  
**Audit risk:** numerator orientation and quantile convention.

### F77 — Hypothesis-Test Framework
**Core:** `H0/H1`, tail direction, critical region, Type I/II, significance, P-value.  
**Primary notes:** 4.8.  
**Audit risk:** “accept H0” wording; P-value interpreted as probability null is true.

### F78 — Power / Type II Error
**Core:** power function `P_θ(reject H0)` and `1-β` for simple alternative.  
**Primary notes:** 4.8; Hogg–McKean–Craig §8.2.  
**Audit risk:** power treated as a single constant under composite alternative.

### F79 — One-Sample Mean Tests
**Subfamilies:** exact known-σ Z; approximate large-sample Z with S; exact Normal small-sample t.  
**Primary notes:** 4.8.  
**Audit risk:** same as CI but null-centered statistic and tail direction.

### F80 — Two-Sample Mean Tests
**Subfamilies:** known-variance Z; large-sample Z; pooled t; paired-difference t.  
**Primary notes:** 4.8.  
**Audit risk:** paired vs independent sample model; pooling assumption.

### F81 — Variance Tests
**Subfamilies:** one variance chi-square; ratio/equality of variances F.  
**Primary notes:** 4.8.  
**Audit risk:** Normality, tail direction, larger variance numerator convention in two-sided F implementations.

### F82 — Proportion Tests
**Subfamilies:** exact Binomial logic; large-sample Z; multiple-proportion chi-square where within mapped source.  
**Primary notes:** 4.8.  
**Audit risk:** exact vs approximation; continuity correction; null-based variance vs CI variance.

---

# 3. High-Risk Collision Register — Stage 1 Findings

These are not yet final canonical decisions. They are the conflicts that **must** be resolved in Stage 2.

| ID | Collision | Why dangerous |
|---|---|---|
| C01 | Geometric: trials-to-first-success vs failures-before-first-success | Same distribution name, different support, mean, PMF exponent |
| C02 | Negative Binomial: trial number of rth success vs failures before rth success | Same name, shifted variable, different support and mean |
| C03 | Exponential: scale/mean `θ` vs rate `λ` | Density exponent and mean invert |
| C04 | Gamma: shape–scale symbols `Γ(α,θ)` vs `Γ(α,β)` and possible rate convention | Same second symbol may mean different mathematical quantity across sources |
| C05 | Normal notation `N(μ,σ²)` vs legacy `N(μ,σ)` | Ambiguous second parameter: variance or SD |
| C06 | `f(x)` used for PMF and PDF in textbooks | Discrete/continuous object collision |
| C07 | `S` used for sample space, survival function, and sample standard deviation | Major notation collision across topics |
| C08 | `S²` unbiased sample variance (`n-1`) vs raw second central sample moment (`n`) vs Normal variance MLE (`n`) | Similar-looking quantities with different purpose |
| C09 | `α` as Gamma shape, test significance, Beta parameter | High-frequency symbol collision |
| C10 | `β` as Gamma scale, Beta parameter, Type II error | High-frequency symbol collision |
| C11 | `λ` as Poisson mean/rate and generic rate parameter | Meaning depends on model |
| C12 | `θ` generic unknown parameter vs Exponential scale vs distribution-specific parameter | Global vs local usage collision |
| C13 | `p` success probability vs PMF notation candidate `p_X(x)` vs P-value colloquial “p” | Context-sensitive collision |
| C14 | `F` as CDF vs F distribution/test statistic | Major visual collision |
| C15 | `f` as density/pmf vs F critical value often `f_{α,ν1,ν2}` | Case-sensitive collision |
| C16 | `X` random variable vs trial-count Geometric variable vs sample observation | Conceptual overload, not necessarily avoidable |
| C17 | Chi-square/F critical-value subscripts: upper-tail vs lower-tail conventions | Can reverse CI endpoints or rejection thresholds |
| C18 | Compound distribution = mixture in official CF2 source vs random sum in actuarial terminology | Terminology can trigger the wrong model |
| C19 | CLT exact Normal sampling vs asymptotic Normal approximation | Same numerical form, different validity status |
| C20 | CI proportion SE vs hypothesis-test null SE | Similar formulas but different variance substitution logic |
| C21 | Joint/support factorization vs mere algebraic factorization | Independence can be falsely concluded if support ignored |
| C22 | Forward Jacobian vs inverse Jacobian | Reciprocal error directly changes density |
| C23 | Covariance-zero vs independence | One-way implication only |
| C24 | Likelihood vs posterior density | Likelihood is not normalized over parameter in frequentist MLE |
| C25 | Strong LLN and completeness are in syllabus but not fully developed in mapped official source material | Requires explicit gap management, not silent supplementation |

---

# 4. Legacy Formula Sheet Scope Audit

## ACTEX Exam P Formula & Review Sheet

### Directly useful secondary overlaps
- conditional probability, total probability, Bayes;
- inclusion–exclusion and combinations;
- PMF/PDF/CDF/expectation/moments;
- Binomial, Geometric, Poisson, Negative Binomial, Hypergeometric;
- Uniform, Normal, Exponential, Gamma;
- marginal, conditional, covariance, correlation, variance of sum;
- CLT.

### Out-of-CF2 / do not promote merely because present
- Lognormal distribution as a named core family;
- Beta distribution as a generic Topik 2 family;
- insurance deductible, policy limit, coinsurance, cost-per-loss/payment formulas.

**Important nuance:** Beta legitimately reappears in official CF2 Bayesian estimation as a prior/posterior family. That does not make the generic Beta distribution a Topik 2 core named-distribution learning outcome.

## Coaching Actuaries P Formula Sheet

### Directly useful secondary overlaps
Broadly overlaps with Topik 1–3 distribution mechanics and exposes both Geometric/Negative-Binomial conventions.

### Out-of-CF2 / reference-only unless official source context requires
- Lognormal as general named distribution;
- Beta as generic univariate distribution;
- several insurance-specific formulas if present beyond syllabus.

---

# 5. Stage 1 Source-Gap Register

## G01 — Strong Law of Large Numbers
Silabus explicitly mentions weak and strong laws. Current mapped official Topik 4 source treatment retrieved for the syllabus notes formally develops convergence in probability / WLLN but does not provide a full formal SLLN theorem and condition set.  
**Action:** retain as `[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]` until Stage 2/validation; do not fill silently.

## G02 — Completeness of a Statistic
Silabus explicitly lists completeness. Current mapped source material used in 4.6 does not provide a complete foundational development from definition through working criteria in the assigned sections.  
**Action:** retain explicit gap; do not invent a canonical formula/theorem from outside assigned sources.

## G03 — PGF Depth
Silabus explicitly includes PGF, while assigned textbook material gives much stronger explicit MGF/CGF coverage.  
**Action:** keep PGF at syllabus-required level and mark any expansion beyond source support.

---

# 6. Stage 1 Structural Findings

1. **The main CF2 problem is not duplicate formulas alone.** The highest-risk errors are convention errors: support, parameterization, exact-vs-approximate status, and critical-value orientation.
2. **Distribution formulas must be indexed by random quantity.** “Geometric” or “Negative Binomial” without defining what the RV counts is unsafe.
3. **Support is part of a formula.** This is especially important for transformation, joint/marginal/conditional distributions, and parameter-dependent MLEs.
4. **Sampling/inference formulas require assumption tags.** The same-looking standardized statistic can be exact Normal, exact t, or approximate Normal depending on model assumptions.
5. **`n` vs `n-1` is not a typo-level issue.** CF2 contains at least three legitimate second-moment/variance objects with different denominators and purposes.
6. **Critical-value notation needs its own canonical policy.** Chi-square and F upper-tail/lower-tail conventions can reverse endpoints even when algebra is otherwise correct.
7. **Legacy Exam P sheets are useful collision detectors, not authorities.** They contain valid alternate conventions and material outside CF2 scope.
8. **Compound distribution terminology must be pinned to the official CF2 source context.** In this syllabus layer it primarily means mixture/parameter compounding, not automatically aggregate random sums.
9. **Bayesian formulas require a conceptual notation boundary.** Likelihood, prior, posterior, and sampling distribution must not share ambiguous notation.
10. **Two explicit syllabus-support gaps exist already:** SLLN and completeness; PGF has a depth/support asymmetry.

---

# 7. Proposed Stage 2 Inputs

Stage 2 should now build the **Formula Reconciliation Matrix**. For each family F01–F82, classify every source representation as one of:

- EXACT DUPLICATE
- ALGEBRAICALLY EQUIVALENT
- SAME QUANTITY, DIFFERENT NOTATION
- SAME FAMILY, DIFFERENT PARAMETERIZATION
- SAME FAMILY, DIFFERENT RANDOM-QUANTITY DEFINITION
- SPECIAL CASE
- DERIVED / RECONSTRUCTABLE
- APPROXIMATION
- SHORTCUT
- GENUINELY DISTINCT FORMULA
- POTENTIALLY MISLEADING / UNSAFE WITHOUT CONDITION
- OUT OF CF2 SCOPE
- SOURCE GAP

The output of Stage 2 should also nominate **canonical candidates**, but notation should not be frozen until the notation-collision audit and validation pass are complete.

---

# 8. Stage 1 Completion Status

- [x] All 28 CF2 syllabus subtopics accounted for.
- [x] Official syllabus scope mapped.
- [x] Two legacy formula sheets included as secondary references.
- [x] 82 formula families / subfamilies inventoried.
- [x] 25 high-risk collision areas registered.
- [x] Major out-of-scope legacy carryovers identified.
- [x] Syllabus/textbook-support gaps recorded.
- [ ] Source-by-source equivalence classification — **Stage 2**.
- [ ] Formula hierarchy Level 0–3 — later stage.
- [ ] MEMORIZE / RECONSTRUCT / REFERENCE ONLY / AVOID AS DEFAULT — later stage.
- [ ] Canonical notation freeze — later stage.
- [ ] Canonical master cheat sheet — later stage.
- [ ] Final manual MathJax/LaTeX QA — final validation stage.

