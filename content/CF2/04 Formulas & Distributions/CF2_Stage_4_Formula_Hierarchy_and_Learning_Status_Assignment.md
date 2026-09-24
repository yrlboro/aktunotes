# CF2 — Stage 4 Formula Hierarchy & Learning Status Assignment

**Status:** Stage 4 complete — all reconciled formula families F01–F82 assigned to a hierarchy level and learning policy.  
**Baseline:** CF2 Stage 2 Formula Reconciliation Matrix — FIXED v2.  
**Notation authority:** CF2 Stage 3 Notation Collision Audit & Canonical Notation Dictionary.  
**Scope authority:** Silabus CF2 PAI.  
**Design objective:** reduce memorization load while preserving model recognition, derivation reliability, assumptions, and exam-speed computation.

---

## 1. Stage 4 Principle

CF2 is calculation-heavy, so “important” does **not** automatically mean “memorize every displayed formula.”

The canonical learning rule is:

> **memorize recognition + primitives + high-risk pivots; reconstruct algebraic consequences; reference low-frequency/special formulas; avoid unsafe shortcuts as defaults.**

Every formula family therefore receives two independent labels:

1. a **hierarchy level** describing mathematical dependency;
2. a **learning status** describing how it should be learned and used in exam preparation.

---

## 2. Hierarchy Definitions

### Level 0 — Universal Reasoning Rules

These are not isolated formulas. They are the rules applied **before** formula selection.

### Level 1 — Primitive / Foundation

Definitions, axioms, basic probability objects, foundational operators, and inferential reasoning structures from which many other formulas follow.

### Level 2 — Core Derived

High-frequency exam machinery that is derived from Level 1 but important enough to be immediately available or rapidly reconstructed.

### Level 3 — Convenience / Special Case

Special models, shortcuts, parameter-sensitive relationships, source-gap items, or formulas whose blind memorization creates more risk than benefit.

> [!IMPORTANT]
> Level 3 does **not** mean “unimportant.”  
> A Level 3 item can be exam-relevant but is conditional, specialized, or unsafe as a universal default.

---

## 3. Learning-Status Definitions

### MEMORIZE

Know the canonical meaning, support/assumptions, and usable formula without needing a long derivation.

Use for:

- foundational definitions;
- distribution identification essentials;
- high-frequency pivots;
- formulas where reconstruction time is costly or ambiguity risk is high.

### RECONSTRUCT

Know the derivation path and rebuild from a smaller set of primitives.

Use when memorizing a separate formula would create redundancy.

### REFERENCE ONLY

Know that the result exists, when it applies, and where it comes from, but do not spend primary memorization capacity on its full closed form.

### AVOID AS DEFAULT

The formula may be valid, but should not be the first automatic approach because its assumptions are narrow or it invites misuse.

---

# 4. Level 0 — Universal Reasoning Rules

These rules are **frozen as the front page of the future Master Cheat Sheet**.

## L0.1 — Mechanism before distribution name

Do not begin from a remembered PMF/PDF.

Use:

$$
\text{narrative}
\rightarrow
\text{random quantity}
\rightarrow
\text{support}
\rightarrow
\text{mechanism}
\rightarrow
\text{distribution}.
$$

**Learning status:** **MEMORIZE**

---

## L0.2 — Support before calculation

Before any summation, integration, transformation, conditional distribution, or named-distribution formula, determine the support.

**Learning status:** **MEMORIZE**

---

## L0.3 — Define what the random variable counts

Especially for Geometric and Negative Binomial.

A distribution name without the random-quantity definition is incomplete.

**Learning status:** **MEMORIZE**

---

## L0.4 — Parameterization before substitution

For Exponential/Gamma and any source with ambiguous conventions, map parameters first.

Canonical examples:

$$
\lambda=\frac{1}{\theta}
$$

for Exponential rate vs scale, and canonical Gamma is shape–scale:

$$
\operatorname{Gamma}(\alpha,\theta).
$$

**Learning status:** **MEMORIZE**

---

## L0.5 — Translate source notation before calculating

Convert source notation into the Stage 3 canonical dictionary first.

Examples:

- textbook PMF $f(x)\to p_X(x)$;
- sample space $S\to\Omega$;
- upper-tail critical notation $\to$ canonical lower-tail quantiles.

**Learning status:** **MEMORIZE**

---

## L0.6 — Exact before approximation

Ask:

> Is there an exact finite-sample result under the stated assumptions?

Only if not, consider approximation.

Required validity tags:

- `EXACT`
- `APPROX`
- `BOUND`
- `ASYMPTOTIC`

**Learning status:** **MEMORIZE**

---

## L0.7 — Condition before averaging

For hierarchical or conditional models:

$$
\text{condition}
\rightarrow
\text{solve easier conditional problem}
\rightarrow
\text{average / integrate back}.
$$

**Learning status:** **MEMORIZE**

---

## L0.8 — Independence is a condition, not a convenience

Never drop covariance terms or factor a joint distribution unless independence or the required weaker condition has been justified.

**Learning status:** **MEMORIZE**

---

## L0.9 — Transformation means support mapping + probability conservation

For transformations:

1. map support;
2. identify one-to-one vs many-to-one;
3. choose CDF / mass transfer / Jacobian;
4. verify normalization.

**Learning status:** **MEMORIZE**

---

## L0.10 — Statistic before sampling distribution

In inference:

$$
\text{population model}
\rightarrow
\text{random sample}
\rightarrow
\text{statistic}
\rightarrow
\text{sampling distribution}
\rightarrow
\text{inference}.
$$

**Learning status:** **MEMORIZE**

---

## L0.11 — Assumptions before pivot

Before using $Z$, $t$, $\chi^2$, or $F$, identify:

- population assumption;
- known vs unknown parameters;
- sampling design;
- independence;
- degrees of freedom;
- exact vs approximate status.

**Learning status:** **MEMORIZE**

---

## L0.12 — Derive CI from pivot when tails can confuse you

Especially for $\chi^2$ and $F$ intervals.

Use the Stage 3 **lower-tail quantile convention** and solve the pivot inequality for the target parameter.

**Learning status:** **MEMORIZE**

---

## L0.13 — Tail direction comes from $H_1$

For tests:

- $H_1:\theta>\theta_0$ → right tail;
- $H_1:\theta<\theta_0$ → left tail;
- $H_1:\theta\ne\theta_0$ → two tails.

**Learning status:** **MEMORIZE**

---

## L0.14 — p-value is computed under $H_0$

The p-value is **not**

$$
P(H_0\text{ true}\mid\text{data}).
$$

**Learning status:** **MEMORIZE**

---

## L0.15 — Same numerator does not imply same quantity

Canonical example:

$$
S^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}(X_i-\bar X)^2
$$

versus

$$
\hat\sigma^2_{\mathrm{MLE}}
=
\frac{1}{n}
\sum_{i=1}^{n}(X_i-\bar X)^2.
$$

**Learning status:** **MEMORIZE**

---

## L0.16 — Sanity check before final answer

Check at least the relevant subset:

- probability in $[0,1]$;
- PMF/PDF normalizes;
- CDF nondecreasing;
- variance nonnegative;
- covariance matrix symmetric;
- support respected;
- units/dimensions sensible;
- probability direction sensible;
- CI endpoints ordered;
- ratio positive where required;
- sample-size integer rounded in the safe direction.

**Learning status:** **MEMORIZE**

---

# 5. F01–F82 Hierarchy and Learning-Status Matrix

| ID | Hierarchy | Learning status | Canonical learning policy |
|---|---|---|---|
| F01 | **Level 1** | **MEMORIZE** | Event algebra primitives: complement, union, intersection; De Morgan may be reconstructed. |
| F02 | **Level 1** | **MEMORIZE** | Three probability axioms are primitive; derived consequences should be reconstructed. |
| F03 | **Level 2** | **RECONSTRUCT** | Derive inclusion–exclusion from overlap correction; memorize concept, not multiple case formulas. |
| F04 | **Level 1** | **MEMORIZE** | Know multiplication/addition principles and canonical permutation/combination forms after order/replacement analysis. |
| F05 | **Level 3** | **AVOID AS DEFAULT** | Use counting ratio only after equiprobability is established. |
| F06 | **Level 1** | **MEMORIZE** | Conditional probability is a foundational normalization identity. |
| F07 | **Level 1** | **MEMORIZE** | Use product criterion as the safest definition of event independence. |
| F08 | **Level 2** | **RECONSTRUCT** | Total probability and Bayes should be rebuilt from partition + conditional probability. |
| F09 | **Level 1** | **MEMORIZE** | PMF/CDF definitions and support discipline are foundational. |
| F10 | **Level 1** | **MEMORIZE** | PDF/CDF relation and probability-as-integral are foundational; survival is derived. |
| F11 | **Level 1** | **MEMORIZE** | LOTUS/expectation definition is foundational for moments and transformations. |
| F12 | **Level 2** | **RECONSTRUCT** | Variance definition is primitive; computational identity and linear-transform rule should be reconstructed. |
| F13 | **Level 3** | **REFERENCE ONLY** | PGF is syllabus-required but source-depth is limited; retain definition/use layer only. |
| F14 | **Level 1** | **MEMORIZE** | MGF definition and derivatives at zero are core tools. |
| F15 | **Level 3** | **RECONSTRUCT** | CGF is logarithm of the MGF; reconstruct when needed. |
| F16 | **Level 2** | **RECONSTRUCT** | Discrete transformation is probability-mass transfer over preimages. |
| F17 | **Level 1** | **MEMORIZE** | CDF transformation is the general transformation fallback method. |
| F18 | **Level 2** | **MEMORIZE** | One-to-one continuous change-of-variable formula is high-yield; support and absolute inverse derivative are mandatory. |
| F19 | **Level 2** | **MEMORIZE** | Bernoulli support, PMF, mean, variance are canonical distribution essentials. |
| F20 | **Level 2** | **MEMORIZE** | Binomial mechanism, support, PMF, mean, variance are canonical essentials. |
| F21 | **Level 2** | **MEMORIZE** | Hypergeometric mechanism, support, PMF, mean, variance/FPC structure are exam-core. |
| F22 | **Level 2** | **MEMORIZE** | Geometric trial-count convention, support, PMF, mean, variance must be instantly recognized. |
| F23 | **Level 2** | **MEMORIZE** | Negative-Binomial trial-count convention, support, PMF, mean, variance must be instantly recognized. |
| F24 | **Level 2** | **MEMORIZE** | Poisson support, PMF, mean/variance and exposure interpretation are core. |
| F25 | **Level 2** | **MEMORIZE** | Continuous Uniform PDF/CDF geometry, mean, variance are core. |
| F26 | **Level 2** | **MEMORIZE** | Exponential scale convention, PDF/CDF/survival, mean/variance and memoryless property are core. |
| F27 | **Level 2** | **MEMORIZE** | Gamma shape–scale parameterization, PDF kernel, mean/variance and MGF are core. |
| F28 | **Level 2** | **MEMORIZE** | Normal parameterization, standardization and location-scale interpretation are core. |
| F29 | **Level 3** | **REFERENCE ONLY** | Store exact closure and approximation relationships with conditions; do not treat them as primitives. |
| F30 | **Level 1** | **MEMORIZE** | Joint PMF/PDF/CDF definitions and joint-support discipline are foundational. |
| F31 | **Level 1** | **MEMORIZE** | Marginalization by summing/integrating out the other variable is foundational. |
| F32 | **Level 1** | **MEMORIZE** | Conditional PMF/PDF as joint divided by marginal is foundational. |
| F33 | **Level 2** | **RECONSTRUCT** | Conditional moments are ordinary moments under the conditional distribution. |
| F34 | **Level 2** | **MEMORIZE** | Law of total expectation is a core conditioning identity. |
| F35 | **Level 2** | **RECONSTRUCT** | Law of total variance is derived from conditioning; use especially for mixtures. |
| F36 | **Level 2** | **MEMORIZE** | Random-variable independence via joint factorization is the default criterion; alternatives require conditions. |
| F37 | **Level 2** | **MEMORIZE** | Joint MGF and mixed-derivative moment extraction are core in stated syllabus scope. |
| F38 | **Level 1** | **MEMORIZE** | Covariance definition/computational identity is foundational multivariate machinery. |
| F39 | **Level 2** | **MEMORIZE** | Correlation is standardized covariance; definition should be immediate. |
| F40 | **Level 2** | **RECONSTRUCT** | Variance of linear combinations should be rebuilt from covariance bilinearity. |
| F41 | **Level 2** | **MEMORIZE** | Covariance-matrix definition and diagonal/off-diagonal meaning are core. |
| F42 | **Level 2** | **MEMORIZE** | Cov(A X)=AΣAᵀ and aᵀΣa are central computational matrix identities. |
| F43 | **Level 2** | **MEMORIZE** | CF2 compound/mixture definition via conditioning + marginalization is core terminology. |
| F44 | **Level 2** | **RECONSTRUCT** | Mixture mean/variance should be reconstructed from total expectation/variance. |
| F45 | **Level 3** | **REFERENCE ONLY** | Specific mixture-pair identifications are parameterization-sensitive; derive before naming. |
| F46 | **Level 2** | **MEMORIZE** | Multivariate inverse-Jacobian density formula is core; transformed support is inseparable. |
| F47 | **Level 3** | **RECONSTRUCT** | Auxiliary-variable choice is a method, not a standalone formula. |
| F48 | **Level 1** | **MEMORIZE** | iid product model is foundational to sampling, likelihood and inferential derivations. |
| F49 | **Level 1** | **MEMORIZE** | Sample mean and unbiased sample variance definitions are foundational; n vs n−1 must stay explicit. |
| F50 | **Level 2** | **MEMORIZE** | E[X̄]=μ and Var(X̄)=σ²/n are core; exact Normal law is conditional on Normal population. |
| F51 | **Level 3** | **REFERENCE ONLY** | Finite-population correction is a special sampling model; use only when without-replacement finite population is explicit. |
| F52 | **Level 2** | **RECONSTRUCT** | Difference-of-means variance follows from linear-combination variance plus sample independence. |
| F53 | **Level 2** | **MEMORIZE** | Normal-sample chi-square pivot for variance is a core inferential primitive. |
| F54 | **Level 2** | **MEMORIZE** | Exact Student-t pivot for Normal mean with unknown σ is a core inferential primitive. |
| F55 | **Level 2** | **MEMORIZE** | F variance-ratio pivot and numerator/denominator df orientation are core. |
| F56 | **Level 2** | **MEMORIZE** | CLT standardized statement and exact-vs-approx distinction are core. |
| F57 | **Level 1** | **MEMORIZE** | Chebyshev inequality is a foundational distribution-free bound. |
| F58 | **Level 2** | **MEMORIZE** | WLLN convergence-in-probability statement is syllabus-core and source-supported. |
| F59 | **Level 2** | **MEMORIZE** | Method-of-moments equation structure is a core estimation method; solve and domain-check. |
| F60 | **Level 2** | **MEMORIZE** | Likelihood/log-likelihood workflow and global-max checks are core estimation machinery. |
| F61 | **Level 3** | **MEMORIZE** | Parameter-dependent-support MLE is a high-risk special mechanism that must be recognized immediately. |
| F62 | **Level 3** | **RECONSTRUCT** | MLE invariance is a theorem property; apply after identifying the MLE. |
| F63 | **Level 2** | **MEMORIZE** | Posterior ∝ likelihood × prior with parameter-space normalization is core Bayesian machinery. |
| F64 | **Level 3** | **REFERENCE ONLY** | Beta–Binomial conjugate update is context-specific; retain only at source-supported inference depth. |
| F65 | **Level 3** | **RECONSTRUCT** | Normal–Normal update is safest through precision-addition reasoning, not isolated formula memorization. |
| F66 | **Level 2** | **MEMORIZE** | Bias and MSE definitions are core; MSE decomposition can be reconstructed. |
| F67 | **Level 3** | **REFERENCE ONLY** | Efficiency ratio orientation and CRLB regularity make this better as a checked reference than a blind default. |
| F68 | **Level 2** | **MEMORIZE** | Consistency definition is core; unbiased/asymptotically unbiased + variance→0 is only a sufficient route. |
| F69 | **Level 2** | **MEMORIZE** | Sufficiency via factorization theorem is core in the mapped estimator-properties scope. |
| F70 | **Level 3** | **REFERENCE ONLY** | Completeness remains a syllabus/textbook-support gap; no unsupported canonical theorem is introduced. |
| F71 | **Level 1** | **MEMORIZE** | Pivot/coverage reasoning is the primitive engine for confidence intervals. |
| F72 | **Level 2** | **RECONSTRUCT** | One-mean CIs should be selected and rebuilt from the correct pivot rather than memorized as disconnected formulas. |
| F73 | **Level 2** | **RECONSTRUCT** | Difference-of-means CIs follow from design/assumptions + sampling pivot; pooled case is conditional. |
| F74 | **Level 3** | **MEMORIZE** | Mapped one-/two-proportion Wald CIs are approximate but exam-core; retain APPROX tag. |
| F75 | **Level 2** | **RECONSTRUCT** | Variance CI must be derived from the chi-square pivot using the frozen lower-tail quantile convention. |
| F76 | **Level 2** | **RECONSTRUCT** | Variance-ratio CI must be derived from the F pivot to avoid tail/df inversion errors. |
| F77 | **Level 1** | **MEMORIZE** | Hypothesis-test decision framework, tail direction and p-value interpretation are primitive inference rules. |
| F78 | **Level 2** | **MEMORIZE** | Power function and simple-alternative 1−β relationship are core testing concepts. |
| F79 | **Level 2** | **RECONSTRUCT** | One-mean tests should be rebuilt from null-centered pivots under the correct validity regime. |
| F80 | **Level 2** | **RECONSTRUCT** | Two-sample/paired mean tests must be selected from sampling design before formula construction. |
| F81 | **Level 2** | **RECONSTRUCT** | Variance tests should be rebuilt from chi-square/F pivots with explicit tail and df orientation. |
| F82 | **Level 2** | **MEMORIZE** | Recognize exact Binomial testing vs large-sample Z; null SE uses p₀. |

---

# 6. Core Memorization Set

The purpose of this section is **not** to reproduce the future Master Cheat Sheet. It identifies what deserves scarce memorization capacity.

## 6.1 Foundations to know cold

### Probability

$$
P(A\mid B)
=
\frac{P(A\cap B)}{P(B)}.
$$

$$
A\perp B
\iff
P(A\cap B)=P(A)P(B).
$$

Know the three probability axioms and counting decision logic.

### Random variables

$$
p_X(x)=P(X=x),
$$

$$
F_X(x)=P(X\le x),
$$

$$
E[g(X)]
=
\sum g(x)p_X(x)
\quad\text{or}\quad
\int g(x)f_X(x)\,dx.
$$

$$
\operatorname{Var}(X)
=
E[(X-E[X])^2].
$$

### Multivariate

$$
p_X(x)=\sum_y p_{X,Y}(x,y),
$$

$$
f_X(x)=\int f_{X,Y}(x,y)\,dy,
$$

$$
p_{X\mid Y}(x\mid y)
=
\frac{p_{X,Y}(x,y)}{p_Y(y)},
$$

$$
f_{X\mid Y}(x\mid y)
=
\frac{f_{X,Y}(x,y)}{f_Y(y)}.
$$

$$
\operatorname{Cov}(X,Y)
=
E[XY]-E[X]E[Y].
$$

---

## 6.2 Distribution recognition essentials

Memorize for each named distribution:

1. what $X$ counts/measures;
2. support;
3. parameterization;
4. PMF/PDF;
5. mean;
6. variance.

Canonical families:

- Bernoulli;
- Binomial;
- Hypergeometric;
- Geometric;
- Negative Binomial;
- Poisson;
- Continuous Uniform;
- Exponential;
- Gamma;
- Normal.

> [!DANGER]
> For Geometric and Negative Binomial, support and random-quantity definition are part of the memorized formula.

---

## 6.3 Sampling pivots to know cold

### Mean, Normal population, $\sigma$ known

$$
Z
=
\frac{\bar X-\mu}{\sigma/\sqrt n}.
$$

### Mean, Normal population, $\sigma$ unknown

$$
T
=
\frac{\bar X-\mu}{S/\sqrt n}
\sim
t_{n-1}.
$$

### Variance, Normal population

$$
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi^2_{n-1}.
$$

### Ratio of variances, independent Normal samples

$$
\frac{S_1^2/\sigma_1^2}
{S_2^2/\sigma_2^2}
\sim
F_{n_1-1,n_2-1}.
$$

### CLT

$$
\frac{\bar X-\mu}{\sigma/\sqrt n}
\xrightarrow{d}
N(0,1).
$$

The algebra may look similar, but the validity tags differ.

---

# 7. High-Value Reconstruction Paths

## R01 — Inclusion–exclusion

Start from:

> add both event probabilities → overlap counted twice → subtract overlap once.

Do not memorize separate isolated “two-event” and “disjoint-event” formulas as unrelated rules.

---

## R02 — Bayes

Start from:

$$
P(B_i\mid A)
=
\frac{P(A\cap B_i)}{P(A)}.
$$

Then:

$$
P(A\cap B_i)
=
P(B_i)P(A\mid B_i),
$$

and obtain $P(A)$ by total probability.

Mental form:

> **desired path / all paths producing the evidence**

---

## R03 — Variance shortcut

Primitive:

$$
\operatorname{Var}(X)
=
E[(X-\mu)^2].
$$

Expand to reconstruct:

$$
\operatorname{Var}(X)
=
E[X^2]-E[X]^2.
$$

---

## R04 — Variance of linear combinations

From covariance bilinearity:

$$
\operatorname{Var}(aX+bY)
=
a^2\operatorname{Var}(X)
+
b^2\operatorname{Var}(Y)
+
2ab\operatorname{Cov}(X,Y).
$$

Do not memorize separate sum and difference formulas.

---

## R05 — Conditional moments

Construct the conditional PMF/PDF first, then apply ordinary expectation.

This yields:

$$
E[X\mid Y=y]
$$

and

$$
\operatorname{Var}(X\mid Y=y).
$$

---

## R06 — Mixture mean and variance

Use:

$$
E[X]=E(E[X\mid C])
$$

and

$$
\operatorname{Var}(X)
=
E[\operatorname{Var}(X\mid C)]
+
\operatorname{Var}(E[X\mid C]).
$$

Avoid memorizing the finite-mixture variance as an unrelated expression.

---

## R07 — Difference-of-means variance

Use:

$$
\operatorname{Var}(A-B)
=
\operatorname{Var}(A)
+
\operatorname{Var}(B)
-
2\operatorname{Cov}(A,B).
$$

Independent samples imply the covariance term is zero.

---

## R08 — Confidence intervals

Do **not** begin with an endpoint formula.

Use:

$$
\text{pivot}
\rightarrow
\text{central probability }1-\alpha
\rightarrow
\text{solve for parameter}.
$$

This is mandatory as the default path for $\chi^2$ and $F$ intervals.

---

## R09 — Hypothesis tests

Use:

$$
\text{claim}
\rightarrow
H_0/H_1
\rightarrow
\text{null-centered pivot}
\rightarrow
\text{null reference distribution}
\rightarrow
\text{tail}
\rightarrow
\text{decision}.
$$

---

# 8. AVOID AS DEFAULT Registry

Only one reconciled family is globally assigned **AVOID AS DEFAULT** at family level: F05 classical counting probability.

However, several **representations or workflows** inside other families must also be avoided as defaults.

## A01 — Classical counting ratio without equiprobability

Do not automatically use:

$$
P(A)=\frac{N(A)}{N(\Omega)}
$$

until equal-likelihood of elementary outcomes is established.

## A02 — Source distribution name without parameter mapping

Avoid plugging numbers into “Geometric,” “Negative Binomial,” “Gamma,” or “Exponential” formulas before defining the convention.

## A03 — Memorized $\chi^2/F$ CI endpoints from mixed tail conventions

Default instead to pivot reconstruction using lower-tail quantiles.

## A04 — Replacing $\sigma$ by $S$ while keeping an exact $Z$ claim

If the exact Normal model has unknown $\sigma$, the exact pivot is Student $t$.

## A05 — Dropping covariance because the formula looks cleaner

Covariance disappears only when justified.

## A06 — Treating likelihood as posterior probability

Likelihood need not normalize over $\theta$.

## A07 — Treating zero covariance as independence

This implication is false in general.

## A08 — Using approximation when an exact result is available

Exact finite-sample result takes priority unless the question explicitly requests an approximation.

---

# 9. Reference-Only Registry

These items should be recognized but not consume the same memorization priority as the core engine.

- F13 — PGF beyond its source-supported definition/use layer.
- F29 — distribution closure/approximation catalogue.
- F45 — specific mixture-pair naming before derivation.
- F51 — finite-population correction unless sampling without replacement is explicit.
- F64 — Beta–Binomial conjugacy outside the mapped Bayesian context.
- F67 — CRLB / relative-efficiency details and orientation.
- F70 — completeness due to source-support gap.

Reference-only does **not** mean “ignore.” It means:

> recognize the trigger, retrieve/derive carefully, and do not let a specialized expression displace the core reasoning system.

---

# 10. Special High-Risk Items That Still Receive MEMORIZE

Some Level 3 items are deliberately marked **MEMORIZE** because the risk of failing to recognize them is high.

## F61 — Parameter-dependent-support MLE

If the parameter changes the support, ordinary score-equation workflow can fail.

Mental trigger:

> **support depends on $\theta$ → keep support indicator in likelihood → inspect boundary/order statistic.**

## F74 — Approximate proportion confidence intervals

These are approximation formulas, but they are direct syllabus/exam machinery.

They must always carry the tag:

**APPROX**

---

# 11. Dependency Map

The intended learning direction is:

```text
LEVEL 0
reasoning protocol
      ↓
LEVEL 1
probability + RV + support + expectation + covariance
sampling/inference primitives
      ↓
LEVEL 2
named distributions
conditioning identities
transformations
sampling pivots
estimation / CI / tests
      ↓
LEVEL 3
special cases
approximations
source-limited topics
conjugacy / CRLB / FPC / special mixture results
```

This means a Level 3 formula should never be used to compensate for a weak Level 1 foundation.

---

# 12. Quantitative Stage 4 Audit

All **82** Stage 2 formula families are assigned exactly once.

### Hierarchy counts

- **Level 1:** 19
- **Level 2:** 49
- **Level 3:** 14

### Learning-status counts

- **MEMORIZE:** 54
- **RECONSTRUCT:** 20
- **REFERENCE ONLY:** 7
- **AVOID AS DEFAULT:** 1


The counts are descriptive, not targets. They reflect dependency and exam-use logic rather than an attempt to force equal-sized categories.

---

# 13. Stage 4 Validation Rules for Future Artifacts

Any later canonical cheat sheet or formula card must satisfy all of the following:

1. **No Level 3 special case may be presented as a universal rule.**
2. **A RECONSTRUCT item should point to its primitive parent whenever space permits.**
3. **A MEMORIZE distribution entry must include support and parameterization.**
4. **An inferential formula must include assumptions and `EXACT` / `APPROX` / `BOUND` / `ASYMPTOTIC` status.**
5. **Any $\chi^2$ or $F$ critical point must follow the Stage 3 lower-tail quantile convention.**
6. **$S^2$ must never silently switch to a denominator-$n$ quantity.**
7. **Legacy notation must be translated before appearing in the canonical layer.**
8. **Source gaps remain marked; no silent supplementation.**

---

# 14. Stage 4 Completion Checklist

- [x] Level 0 Universal Reasoning Rules defined.
- [x] Level 1 Primitive / Foundation defined.
- [x] Level 2 Core Derived defined.
- [x] Level 3 Convenience / Special Case defined.
- [x] All F01–F82 assigned exactly once.
- [x] MEMORIZE / RECONSTRUCT / REFERENCE ONLY / AVOID AS DEFAULT assigned.
- [x] High-value reconstruction paths documented.
- [x] Unsafe-default workflows identified.
- [x] Source-gap items preserved.
- [x] Stage 3 notation used throughout.
- [x] Exact-vs-approximation distinction preserved.
- [x] MathJax written outside Markdown-table separator conflicts.

---

# 15. Next Stage

The next stage should convert the reconciled system into the **CF2 Canonical Master Cheat Sheet architecture**.

Before the final sheet is frozen, the next build should combine:

1. Level 0 decision protocol;
2. Level 1 primitives;
3. Level 2 high-yield formulas;
4. only selected Level 3 items;
5. recognition cues;
6. reconstruction arrows;
7. assumptions;
8. exact/approximation tags;
9. exam traps;
10. sanity checks.

The governing compression principle remains:

> **one canonical quantity → one default formula → equivalent forms → assumptions → reconstruction path.**
