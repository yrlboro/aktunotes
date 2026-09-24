# CF2 — Stage 2 Formula Reconciliation Matrix
**Status:** Stage 2 complete — source-by-source reconciliation and canonical-candidate nomination. **Canonical notation is not yet frozen.**  
**Scope authority:** Silabus CF2 PAI.  
**Primary formula/concept layer:** 28 CF2 syllabus topic notes + official textbook chapters mapped by the syllabus.  
**Secondary reference layer:** ACTEX Exam P Formula & Review Sheet; Coaching Actuaries P Formula Sheet.  
**Stage 2 objective:** determine whether apparently different formulas are duplicates, algebraic equivalents, notation variants, parameterization variants, special cases, approximations, shortcuts, or genuinely distinct quantities.
---

> [!NOTE] MathJax / Markdown rendering
> Semua ekspresi matematika pada versi ini menggunakan delimiter `$...$` atau `$$...$$`. Label klasifikasi ditulis sebagai **bold text**, bukan inline-code. Notasi absolute value/Jacobian menggunakan `\lvert` dan `\rvert` agar tidak konflik dengan separator tabel Markdown.

## 1. Reconciliation Rules
For every family, the working principle is:

> **one canonical quantity → one default formula → equivalent forms → assumptions → source mapping**
Classification labels used in this stage:
- **EXACT DUPLICATE** — same mathematical quantity and same conditions.
- **ALGEBRAICALLY EQUIVALENT** — same quantity, different algebraic form.
- **NOTATION VARIANT** — same quantity, different symbols.
- **PARAMETERIZATION VARIANT** — same distribution family but parameters encode different quantities.
- **RANDOM-QUANTITY VARIANT** — same named family but random variable counts something different.
- **SPECIAL CASE** — valid only under additional conditions.
- **DERIVED / RECONSTRUCTABLE** — should be reconstructed from a more primitive identity.
- **APPROXIMATION** — not an exact finite-sample identity.
- **SHORTCUT** — computational convenience, not a new principle.
- **GENUINELY DISTINCT** — similar appearance but mathematically different quantity.
- **POTENTIALLY MISLEADING** — unsafe without an explicit condition/convention.
- **OUT OF CF2 SCOPE** — present in legacy material but not promoted by the CF2 syllabus.
- **SOURCE GAP** — required by syllabus but not fully developed in mapped official source.
### Source-abbreviation key

| Abbrev. | Source layer |
|---|---|
| **SN** | CF2 syllabus topic notes |
| **HT** | Hogg, Tanis & Zimmerman |
| **HMC** | Hogg, McKean & Craig |
| **MMF** | Miller, Miller & Freund |
| **W** | Walpole et al. |
| **ACTEX** | ACTEX Exam P formula sheet |
| **CA** | Coaching Actuaries P formula sheet |

---
## 2. High-Risk Reconciliation Decisions
### C01 — Geometric
- **Canonical candidate:** Canonical candidate random quantity: $X=$ **trial number of first success**.
- **Default form:** $P(X=x)=p(1-p)^{x-1},\;x=1,2,\ldots$, $E[X]=1/p$, $\operatorname{Var}(X)=(1-p)/p^2$.
- **Source reconciliation:** ACTEX uses failures-before-first-success; CA lists both. These are not mere notation variants because the random quantity differs.
- **Stage 2 decision:** Classify ACTEX form as **RANDOM-QUANTITY VARIANT**; retain mapping $Y=X-1$. Canonical candidate follows SN/HT/MMF trial-count convention.
### C02 — Negative Binomial
- **Canonical candidate:** Canonical candidate random quantity: $X=$ **trial number of the $r$th success**.
- **Default form:** $P(X=x)=\binom{x-1}{r-1}p^r(1-p)^{x-r}$ for $x=r,r+1,\ldots$.
- **Source reconciliation:** ACTEX uses failures before the $r$th success; CA lists both.
- **Stage 2 decision:** Classify as **RANDOM-QUANTITY VARIANT**; mapping $Y=X-r$. Never write “Negative Binomial$(r,p)$” without defining what the RV counts.
### C03 — Exponential
- **Canonical candidate:** Canonical candidate: **scale/mean** parameter $\theta>0$.
- **Default form:** $f_X(x)=\theta^{-1}e^{-x/\theta}$, $E[X]=\theta$, $\operatorname{Var}(X)=\theta^2$.
- **Source reconciliation:** Rate form $\lambda e^{-\lambda x}$ is equivalent only after $\lambda=1/\theta$.
- **Stage 2 decision:** Classify as **PARAMETERIZATION VARIANT**. Always map rate ↔ scale before substitution.
### C04 — Gamma
- **Canonical candidate:** Canonical candidate: $\operatorname{Gamma}(\alpha,\theta)$ with shape $\alpha$ and **scale** $\theta$.
- **Default form:** $E[X]=\alpha\theta$, $\operatorname{Var}(X)=\alpha\theta^2$, $M_X(t)=(1-\theta t)^{-\alpha}$.
- **Source reconciliation:** HMC/MMF may use another symbol (e.g. $\beta$) for scale; rate notation also exists externally.
- **Stage 2 decision:** Symbol change alone = **NOTATION VARIANT**; scale↔rate = **PARAMETERIZATION VARIANT**. Canonical candidate uses $\theta$ for scale.
### C05 — Normal
- **Canonical candidate:** Canonical candidate: $N(\mu,\sigma^2)$ where the second argument is **variance**.
- **Default form:** $Z=(X-\mu)/\sigma$.
- **Source reconciliation:** ACTEX writes $N(\mu,\sigma)$ while simultaneously describing variance $\sigma^2$.
- **Stage 2 decision:** Classify ACTEX notation as **POTENTIALLY MISLEADING**. Translate immediately to $N(\mu,\sigma^2)$.
### C06/C07 — $f$, $S$
- **Canonical candidate:** Canonical candidate separates probability objects: $p_X(x)$ PMF, $f_X(x)$ PDF, $F_X(x)$ CDF, $\bar F_X(x)$ or $S_X(x)$ survival only when needed.
- **Default form:** Sample space candidate $\Omega$; sample standard deviation $S$ and sample variance $S^2$.
- **Source reconciliation:** Textbooks often use $f$ for both PMF/PDF and $S$ for sample space/support.
- **Stage 2 decision:** Classify as **NOTATION VARIANT**; defer final symbol freeze to Stage 3 notation dictionary.
### C08 — $n$ vs $n-1$
- **Canonical candidate:** Three quantities must remain distinct.
- **Default form:** $S^2=\dfrac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2$; sample second central moment $m_2=\dfrac{1}{n}\sum_{i=1}^{n}(X_i-\bar X)^2$; Normal variance MLE $\hat{\sigma}^{2}_{\mathrm{MLE}}=m_2$.
- **Source reconciliation:** Same numerator, different statistical objective.
- **Stage 2 decision:** Classify as **GENUINELY DISTINCT**, not equivalent formulas. Attach role label to every occurrence.
### C17 — $\chi^2/F$ critical values
- **Canonical candidate:** Canonical candidate will use **lower-tail quantile notation** $q_p$ conceptually, or explicitly define any upper-tail symbol before use.
- **Default form:** For example, if $\chi^2_{p,\nu}$ denotes the lower-tail $p$ quantile, then variance-CI endpoints are derived from the pivot rather than memorized by subscript.
- **Source reconciliation:** Miller/legacy may use upper-tail critical-value notation.
- **Stage 2 decision:** Classify as **NOTATION VARIANT** with high danger. Default policy: derive endpoints from pivot + stated quantile convention.
### C18 — Compound distribution
- **Canonical candidate:** Canonical CF2 meaning: **mixture / parameter compounding** in the mapped HMC source.
- **Default form:** $f_X(x)=\int f_{X\mid\Theta}(x\mid\theta)g_\Theta(\theta)\,d\theta$ or the discrete analogue.
- **Source reconciliation:** Actuarial “compound distribution” often means random sum, but that is not the primary mapped CF2 source meaning here.
- **Stage 2 decision:** Classify random-sum interpretation as **OUTSIDE PRIMARY CF2 MEANING** unless explicitly source-supported in a question.
### C19 — Exact vs approximate Normal
- **Canonical candidate:** Exact and approximate statements must never share the same status tag.
- **Default form:** Normal population: $\bar X\sim N(\mu,\sigma^2/n)$ exactly. Non-Normal with large $n$: $\bar X\approx N(\mu,\sigma^2/n)$ via CLT.
- **Source reconciliation:** Same numerical standardization can appear in both.
- **Stage 2 decision:** Classify as **GENUINELY DISTINCT VALIDITY STATUS**; every formula must carry **EXACT** or **APPROX**.
### C20 — Proportion CI vs test SE
- **Canonical candidate:** CI and null-test standard errors are different quantities.
- **Default form:** CI: $\sqrt{\hat p(1-\hat p)/n}$. One-sample test under $H_0:p=p_0$: $\sqrt{p_0(1-p_0)/n}$.
- **Source reconciliation:** Both look like Bernoulli SE.
- **Stage 2 decision:** Classify as **GENUINELY DISTINCT** because one estimates sampling variance while the other is evaluated under the null.
### C22 — Jacobian direction
- **Canonical candidate:** Canonical candidate: use the **inverse Jacobian** in the density formula.
- **Default form:** $f_{\mathbf{Y}}(\mathbf{y})=f_{\mathbf{X}}\!\left(\mathbf{x}(\mathbf{y})\right)\left\lvert\dfrac{\partial\mathbf{x}}{\partial\mathbf{y}}\right\rvert$.
- **Source reconciliation:** Forward determinant is its reciprocal only for a regular one-to-one transform.
- **Stage 2 decision:** Classify forward form as **ALGEBRAICALLY EQUIVALENT** only after reciprocal and regularity conditions are explicit.
### C24 — Likelihood vs posterior
- **Canonical candidate:** Likelihood: $L(\theta;\mathbf{x})\propto f(\mathbf{x}\mid\theta)$ as a function of $\theta$ for fixed data.
- **Default form:** Posterior: $\pi(\theta\mid\mathbf{x})\propto L(\theta;\mathbf{x})\pi(\theta)$ and must normalize over $\theta$.
- **Source reconciliation:** Same sampling model factor appears in both.
- **Stage 2 decision:** Classify as **GENUINELY DISTINCT**. Never call likelihood a probability distribution over $\theta$ in the frequentist step.
---
## 3. Formula Reconciliation Matrix — F01 to F82
*The “canonical candidate” column is a nomination, not a notation freeze. Stage 3 will resolve notation collisions globally.*

| ID | Quantity / family | Source reconciliation | Classification | Canonical candidate / default | Required condition / warning |
|---|---|---|---|---|---|
| F01 | Event algebra | SN/HT/MMF use equivalent set identities; legacy uses prime/complement notation. | NOTATION VARIANT + EXACT DUPLICATE | $A^c$, $A\cup B$, $A\cap B$; derive De Morgan from set algebra. | Complement symbol must be mapped; mutually exclusive is not independence. |
| F02 | Probability axioms & derived rules | Official sources agree; legacy mostly lists consequences rather than axioms. | DERIVED / RECONSTRUCTABLE | Primitive: non-negativity, $P(\Omega)=1$, countable additivity. | Complement, bounds, monotonicity are derived, not separate primitives. |
| F03 | Inclusion–exclusion | SN, ACTEX, CA match algebraically. | EXACT DUPLICATE | $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. | Disjoint form is only a special case. |
| F04 | Counting | Same mathematics; notation varies $nP_r$, ${}_nP_r$, $nC_r$, $\binom{n}{r}$. | NOTATION VARIANT | $P(n,r)=\dfrac{n!}{(n-r)!}$, $\binom{n}{r}=\dfrac{n!}{r!(n-r)!}$. | Choose only after order/replacement analysis. |
| F05 | Classical equally-likely probability | Legacy and SN same ratio. | SPECIAL CASE | $P(A)=N(A)/N(\Omega)$. | Only when elementary outcomes are equally likely. |
| F06 | Conditional probability | All sources agree. | EXACT DUPLICATE | $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$. | $P(B)>0$; right side of $\mid$ controls denominator. |
| F07 | Event independence | Product form universal; conditional form requires positive denominator. | SPECIAL CASE + ALGEBRAIC EQUIVALENT | $P(A\cap B)=P(A)P(B)$. | Use product form as default; conditional equality only when defined. |
| F08 | Total probability & Bayes | Two-branch legacy forms are special cases of partition form. | SPECIAL CASE + DERIVED | $P(A)=\sum_{i}P(B_i)P(A\mid B_i)$ and posterior normalization. | $\{B_i\}$ must be a partition; denominator includes all paths. |
| F09 | Discrete PMF/CDF | HT may write $f(x)$ for PMF; SN distinguishes $p_X$. | NOTATION VARIANT | $p_X(x)=P(X=x)$; $F_X(x)=\sum_{t\le x}p_X(t)$. | Support first; endpoint handling matters. |
| F10 | Continuous PDF/CDF/survival | ACTEX/CA/SN equivalent; survival endpoint convention immaterial for continuous but not universally. | NOTATION VARIANT | $F_X(x)=\int_{-\infty}^x f_X(t)dt$, $\bar F_X(x)=1-F_X(x)$. | Density is not point probability. |
| F11 | Expectation / LOTUS / moments | Official and legacy sum/integral forms match. | EXACT DUPLICATE | $E[g(X)]=\sum g(x)p_X(x)$ or $\int g(x)f_X(x)dx$. | Existence/integrability required; raw vs central moments distinct. |
| F12 | Variance / SD / linear transform | Direct and computational forms are equivalent; legacy contains compact variants. | ALGEBRAICALLY EQUIVALENT | $\operatorname{Var}(X)=E[(X-E[X])^2]$; compute via $E[X^2]-E[X]^2$. | $\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)$. |
| F13 | PGF | Required by syllabus; official mapped treatment thinner than MGF. | SOURCE GAP + CORE DEFINITION | $G_X(s)=E[s^X]$ for nonnegative-integer-type $X$. | Do not over-expand beyond source-supported syllabus level. |
| F14 | MGF | Official sources agree on definition/derivatives. | EXACT DUPLICATE | $M_X(t)=E[e^{tX}]$, $M_X^{(k)}(0)=E[X^k]$. | Need existence on a neighborhood of $0$ for uniqueness/standard theorems. |
| F15 | CGF | Definition is logarithm of MGF. | DERIVED / RECONSTRUCTABLE | $K_X(t)=\log M_X(t)$. | Use only to source-supported cumulant depth. |
| F16 | Discrete transformation | One-to-one and many-to-one are same mass-transfer principle. | DERIVED / RECONSTRUCTABLE | $p_Y(y)=\sum_{x:g(x)=y}p_X(x)$. | No Jacobian for discrete mass. |
| F17 | Continuous CDF transformation | General event mapping; monotone cases are special simplifications. | PRIMITIVE METHOD + SPECIAL CASES | $F_Y(y)=P(g(X)\le y)$. | Map support and inequality direction before differentiating. |
| F18 | Univariate Jacobian | Official forms equivalent when inverse derivative used. | ALGEBRAICALLY EQUIVALENT | $f_Y(y)=f_X(g^{-1}(y))\left\lvert d g^{-1}(y)/dy\right\rvert$. | One-to-one regular transform; many-to-one requires summing branches or CDF method. |
| F19 | Bernoulli | Sources align. | EXACT DUPLICATE | $P(X=x)=p^x(1-p)^{1-x}$, $x\in\{0,1\}$. | One trial / indicator mechanism. |
| F20 | Binomial | Sources align; sum property requires common $p$. | EXACT DUPLICATE + SPECIAL CASE | $P(X=x)=\binom{n}{x}p^x(1-p)^{n-x}$. | Fixed $n$, independent Bernoulli trials, constant $p$. |
| F21 | Hypergeometric | Same quantity; symbols differ across sources. | NOTATION VARIANT | Canonical candidate $N=$ population size, $M=$ successes, $n=$ sample size. | $P(X=x)=\dfrac{\binom{M}{x}\binom{N-M}{n-x}}{\binom{N}{n}}$ with constrained support. |
| F22 | Geometric | Official primary convention = trial number; ACTEX failures; CA both. | RANDOM-QUANTITY VARIANT | Trial-count default: $P(X=x)=p(1-p)^{x-1}$, $x\ge1$. | Always define what $X$ counts; map failures by $Y=X-1$. |
| F23 | Negative Binomial | Official primary convention = trial number; ACTEX failures; CA both. | RANDOM-QUANTITY VARIANT | Trial-count default: $\binom{x-1}{r-1}p^r(1-p)^{x-r}$. | Map failures by $Y=X-r$; variance unchanged under shift. |
| F24 | Poisson | Sources align. | EXACT DUPLICATE | $P(X=x)=e^{-\lambda}\lambda^x/x!$. | $\lambda$ is expected count for the stated exposure; rate × exposure if necessary. |
| F25 | Continuous Uniform | Sources align; endpoint inclusivity differs but probability is unchanged for continuous endpoints. | EXACT DUPLICATE / IMMATERIAL ENDPOINT VARIANT | $f(x)=1/(b-a)$ on $[a,b]$. | Do not confuse with discrete Uniform. |
| F26 | Exponential | Official/legacy scale form aligns; rate form is mapped alternative. | PARAMETERIZATION VARIANT | Scale default $\theta$: $f(x)=\theta^{-1}e^{-x/\theta}$. | Declare scale vs rate. |
| F27 | Gamma | Shape–scale across primary sources, but scale symbol differs. | NOTATION VARIANT; PARAMETERIZATION VARIANT if rate used | $\operatorname{Gamma}(\alpha,\theta)$ shape–scale. | Declare second parameter explicitly. |
| F28 | Normal | SN uses variance as second argument; ACTEX ambiguous SD notation. | POTENTIALLY MISLEADING NOTATION VARIANT | $N(\mu,\sigma^2)$. | Translate any $N(\mu,\sigma)$ notation before use. |
| F29 | Distribution relationships / approximations | Closures are exact under stated independence/common-parameter conditions; Binomial→Poisson etc are approximations. | EXACT vs APPROXIMATION SPLIT | Store each relationship with an **EXACT** or **APPROX** tag. | Never merge limit/approximation with closure identities. |
| F30 | Joint PMF/PDF/CDF | Textbooks may use $f$ for both discrete and continuous; SN separates. | NOTATION VARIANT | $p_{X,Y}$ for joint PMF, $f_{X,Y}$ for joint PDF, $F_{X,Y}$ for joint CDF. | Joint support is part of the formula. |
| F31 | Marginalization | All sources same operation. | EXACT DUPLICATE | $p_X(x)=\sum_{y}p_{X,Y}(x,y)$ or $f_X(x)=\int f_{X,Y}(x,y)\,dy$. | Bounds come from support; may be piecewise. |
| F32 | Conditional distribution | All sources same ratio form; continuous interpretation differs from literal point conditioning. | EXACT DUPLICATE WITH DOMAIN DISTINCTION | $p_{X\mid Y}=p_{X,Y}/p_Y$ or $f_{X\mid Y}=f_{X,Y}/f_Y$. | Conditioning marginal must be positive; conditional support is a slice. |
| F33 | Conditional expectation/variance | Same as univariate expectation/variance under conditional distribution. | DERIVED / RECONSTRUCTABLE | $E[g(X)\mid Y=y]$ from the conditional PMF/PDF; $\operatorname{Var}(X\mid Y=y)=E[X^2\mid Y=y]-E[X\mid Y=y]^2$. | Distinguish $E[X\mid Y]$ from $E[X\mid Y=y]$. |
| F34 | Law of total expectation | Official sources agree. | DERIVED / RECONSTRUCTABLE | $E[X]=E(E[X\mid Y])$. | Condition then average back over $Y$. |
| F35 | Law of total variance / mixture variance | 3.7 supports within+between decomposition; 3.4 does not elevate it as a primary outcome. | SOURCE-PLACEMENT VARIANT | $\operatorname{Var}(X)=E[\operatorname{Var}(X\mid Y)]+\operatorname{Var}(E[X\mid Y])$. | Use as supported tool in mixture/conditioning contexts; do not overstate syllabus prominence. |
| F36 | Independence of RVs | Factorization, conditional=marginal, CDF factorization, MGF factorization are equivalent under their conditions. | ALGEBRAIC / THEOREM EQUIVALENTS | Default distribution criterion: joint = product of marginals. | Support must be compatible; MGF criterion requires existence. |
| F37 | Joint MGF & mixed moments | Official source direct. | EXACT DUPLICATE | $M_{X,Y}(t_1,t_2)=E[e^{t_1X+t_2Y}]$; mixed derivatives give joint moments. | Existence near $(0,0)$. |
| F38 | Covariance | Definition and computational identity equivalent. | ALGEBRAICALLY EQUIVALENT | $\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]$. | Compute via $E[XY]-E[X]E[Y]$; independence ⇒ zero covariance, not conversely. |
| F39 | Correlation | Sources align. | EXACT DUPLICATE | $\rho_{XY}=\operatorname{Cov}(X,Y)/(\sigma_X\sigma_Y)$. | Requires positive finite variances. |
| F40 | Variance of linear combinations | Legacy $\operatorname{Var}(X+Y)$ is a special case of general bilinear form. | SPECIAL CASE + DERIVED | $\operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y)$. | Drop covariance only with justification. |
| F41 | Variance–covariance matrix | SN/HMC consistent. | EXACT DUPLICATE | $\boldsymbol\Sigma=E[(\mathbf{X}-\boldsymbol\mu)(\mathbf{X}-\boldsymbol\mu)^\top]$. | Matrix is symmetric; $\Sigma$ notation pending global collision audit. |
| F42 | Linear transformation of covariance | Matrix and scalar forms are same identity. | ALGEBRAICALLY EQUIVALENT | $\operatorname{Cov}(A\mathbf{X})=A\boldsymbol\Sigma A^\top$; $\operatorname{Var}(\mathbf a^\top\mathbf{X})=\mathbf a^\top\boldsymbol\Sigma\mathbf a$. | Check dimensions and transpose placement. |
| F43 | Mixture / parameter compounding | Official CF2 source treats compounding as mixing; legacy actuarial meaning may differ. | TERMINOLOGY COLLISION | $f_X(x)=\int f_{X\mid\Theta}(x\mid\theta)g(\theta)d\theta$. | Do not default to random-sum interpretation. |
| F44 | Mixture mean/variance | Weighted mean and within+between variance are exact. | DERIVED / RECONSTRUCTABLE | $E[X]=\sum p_i\mu_i$; $\operatorname{Var}(X)=\sum p_i\sigma_i^2+\sum p_i(\mu_i-\mu)^2$. | Weighted component variances alone are insufficient unless component means coincide. |
| F45 | Specific mixture pairs | Poisson–Gamma result depends on Gamma and Negative-Binomial conventions. | PARAMETERIZATION-SENSITIVE IDENTIFICATION | Derive marginal first, then map to the chosen NB convention. | Do not identify by name before matching support and PMF. |
| F46 | Multivariable Jacobian | Inverse-Jacobian source form and reciprocal-forward form are equivalent only under regular one-to-one maps. | ALGEBRAICALLY EQUIVALENT WITH CONDITION | $f_{\mathbf{Y}}(\mathbf{y})=f_{\mathbf{X}}(\mathbf{x}(\mathbf{y}))\left\lvert\det \frac{\partial\mathbf{x}}{\partial\mathbf{y}}\right\rvert$. | Map transformed support before integration. |
| F47 | Auxiliary-variable method | Not a separate probability law; a construction to make a one-to-one transform. | METHOD / RECONSTRUCTABLE | Choose auxiliary variable, transform jointly, then marginalize target. | Auxiliary choice must preserve one-to-one mapping on relevant support. |
| F48 | Random sample / iid joint model | Official sources agree; finite sampling without replacement is a different dependence model. | SPECIAL CASE / MODEL DISTINCTION | $f(\mathbf{x};\theta)=\prod_{i=1}^n f(x_i;\theta)$ for iid sampling. | Do not use product under finite without-replacement sampling. |
| F49 | Sample mean / sample variance | Sample variance $1/(n-1)$ differs from MLE/moment denominator $1/n$. | GENUINELY DISTINCT | $\bar X=\dfrac{1}{n}\sum_{i=1}^{n}X_i$, $S^2=\dfrac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2$. | Attach statistic role; do not convert denominators silently. |
| F50 | Sampling distribution of mean | Mean/variance identities general under iid finite variance; exact Normal distribution needs Normal population. | CORE IDENTITY + SPECIAL EXACT RESULT | $E[\bar X]=\mu$, $\operatorname{Var}(\bar X)=\sigma^2/n$. | Label exact Normal vs CLT approximation. |
| F51 | Finite population correction | Different model from iid infinite/with-replacement sampling. | SPECIAL CASE | $\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}\frac{N-n}{N-1}$. | Simple random sampling without replacement from finite population. |
| F52 | Difference of two means | Official sources align. | EXACT DUPLICATE | $\operatorname{Var}(\bar X_1-\bar X_2)=\sigma_1^2/n_1+\sigma_2^2/n_2$ for independent samples. | If dependent, covariance term is needed. |
| F53 | Chi-square variance sampling | Official sources align. | EXACT DUPLICATE | $(n-1)S^2/\sigma^2\sim\chi^2_{n-1}$. | Exact only for Normal population. |
| F54 | Student $t$ sampling | Official sources align. | EXACT DUPLICATE | $\dfrac{\bar X-\mu}{S/\sqrt{n}}\sim t_{n-1}$. | Exact Normal-population result; $\bar X$ and $S^2$ independence is crucial. |
| F55 | $F$ variance ratio sampling | Equivalent ratio formulations differ by orientation. | NOTATION / ORIENTATION VARIANT | $(S_1^2/\sigma_1^2)/(S_2^2/\sigma_2^2)\sim F_{n_1-1,n_2-1}$. | Swap ratio ⇒ swap degrees of freedom. |
| F56 | CLT | Legacy wording and official standardized statement describe same asymptotic phenomenon at different rigor levels. | APPROXIMATION / ASYMPTOTIC | $\dfrac{\bar X-\mu}{\sigma/\sqrt{n}}\xrightarrow{d}N(0,1)$. | For finite non-Normal $n$, any Normal calculation is approximate. |
| F57 | Chebyshev | Sources align. | EXACT INEQUALITY | $P\!\left(\lvert X-\mu\rvert\ge\varepsilon\right)\le\dfrac{\sigma^2}{\varepsilon^2}$. | It is a bound, never replace $\le$ by $=$. |
| F58 | Weak LLN | Official mapped source supports convergence in probability. | EXACT ASYMPTOTIC THEOREM | $\bar X_n\xrightarrow{P}\mu$. | Do not substitute a strong-law statement not developed in the mapped source. |
| F59 | Method of moments | Moment equations use denominator $n$ sample moments. | GENUINELY DISTINCT FROM UNBIASED VARIANCE | $m_k\equiv\dfrac{1}{n}\sum_{i=1}^{n}X_i^k=\mu_k(\theta)$ (or raw-moment notation as source uses). | Solve parameter equations then check domain. |
| F60 | Likelihood / log-likelihood / MLE | Product likelihood and log-likelihood are monotone-transform equivalents for maximization. | ALGEBRAICALLY EQUIVALENT FOR ARGMAX | $L(\theta;\mathbf{x})=\prod f(x_i;\theta)$; maximize $\ell=\log L$. | Score root is only a candidate; check support, boundary, global maximum. |
| F61 | Parameter-dependent-support MLE | Boundary/order-statistic solution is genuinely different from regular score-root workflow. | GENUINELY DISTINCT MLE MECHANISM | Keep indicator/support constraints inside $L(\theta;\mathbf{x})$. | Do not differentiate away parameter-dependent support. |
| F62 | MLE invariance | Transformation property of MLE. | DERIVED / THEOREM PROPERTY | If $\hat\theta$ is MLE of $\theta$, candidate for $g(\theta)$ is $g(\hat\theta)$ under source conditions. | Does not imply unbiasedness of $g(\hat\theta)$. |
| F63 | Bayesian posterior | Bayes numerator resembles likelihood × prior but object is normalized posterior density/mass. | GENUINELY DISTINCT FROM LIKELIHOOD | $\pi(\theta\mid x)\propto L(\theta;x)\pi(\theta)$. | Normalization is over parameter; keep prior/posterior symbols distinct. |
| F64 | Beta–Binomial conjugacy | Beta is legitimate only in this inference context, despite not being a named Topik 2 core distribution. | CONTEXTUAL CORE / NOT GENERAL DISTRIBUTION TARGET | Posterior hyperparameters update by successes/failures according to source convention. | Do not promote generic Beta formulas to Topik 2 simply because legacy sheets include them. |
| F65 | Normal–Normal Bayesian update | Variance and precision forms are algebraically equivalent. | ALGEBRAICALLY EQUIVALENT PARAMETER FORM | Canonical candidate: posterior precision = prior precision + data precision; mean = precision-weighted average. | Do not weight by variance when the formula is in precision form. |
| F66 | Bias / unbiasedness / MSE | MSE decomposition exact. | EXACT DUPLICATE + DERIVED | $\operatorname{Bias}(\hat\theta)=E[\hat\theta]-\theta$; $\operatorname{MSE}=\operatorname{Var}+\operatorname{Bias}^2$. | Unbiasedness is not universal optimality. |
| F67 | Efficiency / CRLB | Relative-efficiency ratio orientation varies by wording; CRLB depends on regularity. | ORIENTATION VARIANT + SPECIAL THEOREM | Always write “efficiency of A relative to B” next to the variance ratio. | CRLB only under stated regularity and unbiased-estimator setting used by source. |
| F68 | Consistency | Definition and sufficient criterion are not equivalent statements. | GENUINELY DISTINCT: DEFINITION vs SUFFICIENT CONDITION | $\hat\theta_n\xrightarrow{P}\theta$ is definition; unbiased/asymptotically unbiased + variance→0 is a sufficient route. | Do not use sufficient condition as definition. |
| F69 | Sufficiency / factorization | Conditional definition and factorization theorem are equivalent criteria in the source framework. | THEOREM EQUIVALENTS | $f(\mathbf{x};\theta)=g(T(\mathbf{x}),\theta)h(\mathbf{x})$. | $h$ must not depend on $\theta$; sufficiency is information retention, not accuracy. |
| F70 | Completeness | Syllabus requires it; mapped official source lacks full foundational mechanics. | SOURCE GAP | No canonical formula frozen in Stage 2. | Preserve **[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]**. |
| F71 | General CI pivot logic | All concrete intervals derive from a pivot/coverage statement. | PRIMITIVE REASONING RULE | $P(L(X)<\theta<U(X))=1-\alpha$ via a pivot. | Interpretation is repeated-sampling coverage, not posterior probability. |
| F72 | CI for one mean | Known-$\sigma$ Z, unknown-$\sigma$ exact $t$, and large-sample approximate Z are different validity regimes. | GENUINELY DISTINCT + APPROXIMATION SPLIT | Select by assumptions before formula. | Do not “replace $\sigma$ by $s$” and keep an exact Z claim. |
| F73 | CI for difference of means | Known variance Z, large-sample Z, pooled t are distinct regimes. | GENUINELY DISTINCT + SPECIAL CASE | Pooled $t$ only under independent Normal samples with equal variances. | Degrees of freedom $n_1+n_2-2$ only in pooled case. |
| F74 | CI for proportions | Normal-Wald-type forms in source are approximations. | APPROXIMATION | $\hat p\pm z_{\alpha/2}\sqrt{\hat p(1-\hat p)/n}$ and analogous difference form. | Do not call exact; keep separate from null-test SE. |
| F75 | CI for variance | Different critical-value conventions produce apparently reversed subscripts. | NOTATION VARIANT | Derive from $(n-1)S^2/\sigma^2\sim\chi^2_{n-1}$ using explicitly defined quantiles. | Exact Normal-population assumption; interval is asymmetric. |
| F76 | CI for ratio of variances | Equivalent F-quantile formulas depend on ratio and tail convention. | NOTATION / ORIENTATION VARIANT | Derive from F pivot, preserving numerator/denominator df. | Normal populations + independent samples. |
| F77 | Hypothesis-test framework | Official sources align; older “accept $H_0$” wording is interpretive, not a formula change. | EXACT DUPLICATE + WORDING CAUTION | Decision language: reject / do not reject $H_0$. | Tail direction comes from $H_1$; P-value is under $H_0$. |
| F78 | Power / Type II error | For simple alternative, power $=1-\beta$; for composite alternative power is a function. | SPECIAL CASE | $\gamma(\theta)=P_\theta(\text{reject }H_0)$. | Do not report one fixed power number for an entire composite alternative without specifying $\theta$. |
| F79 | One-sample mean tests | Known-$\sigma$ Z, large-sample approximate Z, exact Normal $t$ are distinct regimes. | GENUINELY DISTINCT + APPROXIMATION SPLIT | Null-center statistic using $\mu_0$; choose distribution from assumptions. | Same algebraic numerator does not imply same reference distribution. |
| F80 | Two-sample mean tests | Known variance Z, large-sample Z, pooled t, paired t correspond to different sampling designs. | GENUINELY DISTINCT MODELS | Paired data → one-sample test on differences; independent data → two-sample formulas. | Do not pool without equal-variance assumption. |
| F81 | Variance tests | Chi-square one-variance and F two-variance tests are distinct pivots. | GENUINELY DISTINCT | One variance: $\chi^2=(n-1)S^2/\sigma_0^2$; ratio: $F=S_1^2/S_2^2$ under equality null with orientation defined. | Exact Normal-population assumption; tail/df orientation explicit. |
| F82 | Proportion tests | Exact Binomial logic and large-sample Z are separate methods. | EXACT vs APPROXIMATION SPLIT | Under $H_0:p=p_0$, large-sample SE uses $p_0$; exact method uses Binomial tails. | Continuity correction only if explicitly source-supported/required; do not silently add. |


---
## 4. Cross-Source Legacy Mapping
### 4.1 ACTEX — keep, translate, or reject?

| Legacy item | Stage 2 classification | CF2 treatment |
|---|---|---|
| Conditional probability / Bayes / inclusion–exclusion | EXACT DUPLICATE / SPECIAL CASE | Keep after mapping notation. |
| Geometric on $0,1,2,\ldots$ | RANDOM-QUANTITY VARIANT | Translate to failures variable $Y$; default CF2 candidate remains trial count $X=Y+1$. |
| Negative Binomial on failures | RANDOM-QUANTITY VARIANT | Translate by $X=Y+r$. |
| Normal written $N(\mu,\sigma)$ | POTENTIALLY MISLEADING | Translate to canonical candidate $N(\mu,\sigma^2)$ before calculation. |
| Exponential/Gamma scale formulas | EXACT DUPLICATE / NOTATION VARIANT | Keep; declare scale parameter. |
| Marginal / conditional / covariance / variance of sum | EXACT DUPLICATE / SPECIAL CASE | Keep; promote general forms from SN where legacy gives special case. |
| CLT prose form | ASYMPTOTIC / APPROXIMATION | Keep only with iid/finite-moment context and exact-vs-approx label. |
| Lognormal, generic Beta, deductible/limit/coinsurance | OUT OF CF2 SCOPE | Do not include in canonical CF2 sheet, except Beta when it appears inside official Bayesian-estimation context. |


### 4.2 Coaching Actuaries — keep, translate, or reject?

| Legacy item | Stage 2 classification | CF2 treatment |
|---|---|---|
| General probability identities | EXACT DUPLICATE | Keep after notation mapping. |
| Both Geometric conventions shown | USEFUL COLLISION MAP | Use as translation reference; default candidate is trial-count convention. |
| Both Negative Binomial conventions shown | USEFUL COLLISION MAP | Use as translation reference; default candidate is trial-count convention. |
| Distribution table closures | MIX OF EXACT AND SPECIAL CASE | Keep only with conditions (independence, same $p$, etc.). |
| Legacy PMF/PDF notation | NOTATION VARIANT | Translate to $p_X$ for discrete and $f_X$ for continuous. |
| Lognormal / generic Beta / insurance-specific material | OUT OF CF2 SCOPE | Reference only; not promoted to CF2 core. |


---
## 5. Canonical-Candidate Quantity Map
These are **candidate defaults** to be stress-tested in the notation-collision stage.

| Quantity | Candidate default | Equivalent / alternate forms to recognize |
|---|---|---|
| Sample space | $\Omega$ | Textbooks may use $S$ or $C$. |
| Discrete PMF | $p_X(x)$ | Textbooks may write $f(x)$. |
| Continuous PDF | $f_X(x)$ | — |
| CDF | $F_X(x)$ | — |
| Survival | $\bar F_X(x)=1-F_X(x)$ | $S_X(x)$ recognized but potentially collides with sample SD. |
| Mean | $\mu=E[X]$ | — |
| Variance | $\sigma^2=\operatorname{Var}(X)$ | — |
| Covariance | $\operatorname{Cov}(X,Y)$ | $\sigma_{XY}$ as compact matrix element when defined. |
| Geometric RV | $X=$ trial number of first success | Failures variable $Y=X-1$. |
| Negative Binomial RV | $X=$ trial number of $r$th success | Failures variable $Y=X-r$. |
| Exponential | $\operatorname{Exp}(\theta)$, $\theta=$ scale/mean | Rate $\lambda=1/\theta$. |
| Gamma | $\operatorname{Gamma}(\alpha,\theta)$, shape–scale | Other sources may use $\beta$ for scale or a rate parameter. |
| Normal | $N(\mu,\sigma^2)$ | Legacy $N(\mu,\sigma)$ must be translated. |
| Sample variance | $S^2=\dfrac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2$ | $\hat\sigma^2_{\mathrm{MLE}}=\dfrac{1}{n}\sum_{i=1}^{n}(X_i-\bar X)^2$ is a different quantity. |
| Covariance matrix | $\boldsymbol\Sigma=\operatorname{Cov}(\mathbf{X})$ | Element $(i,j)=\operatorname{Cov}(X_i,X_j)$. |
| Generic parameter | $\theta$ | Distribution-specific use of $\theta$ must be locally declared. |
| P-value | **p-value** in prose, not bare $p$ | Avoid collision with Bernoulli success probability $p$. |


---
## 6. Exact vs Approximation Registry

| Result | Exact status | Approximation counterpart / warning |
|---|---|---|
| $\bar X\sim N(\mu,\sigma^2/n)$ | Exact if the population is Normal. | CLT approximation for sufficiently large $n$ from non-Normal finite-variance populations. |
| $(n-1)S^2/\sigma^2\sim\chi^2_{n-1}$ | Exact for Normal population. | Do not generalize to arbitrary populations. |
| $\dfrac{\bar X-\mu}{S/\sqrt{n}}\sim t_{n-1}$ | Exact for Normal population. | Large-sample Normal approximation with $S$ is a separate regime. |
| Variance ratio $F$ pivot | Exact for two independent Normal samples. | Do not use as generic ratio law outside assumptions. |
| One-proportion CI | Approximate in mapped source. | SE uses $\hat p$ for CI; null $p_0$ for one-sample test. |
| Binomial → Poisson | Approximation / limit relationship. | Keep separate from exact sum-closure of Poisson variables. |
| Hypergeometric → Binomial | Approximation when sampling fraction is small / source-supported conditions. | Not an identity. |
| Chebyshev | Exact inequality. | Bound, not approximation and not equality. |
| WLLN / CLT | Exact asymptotic theorems. | Finite-$n$ numerical Normal use via CLT is approximate. |


---
## 7. Source-Gap Decisions Carried Forward
### G01 — Strong Law of Large Numbers
**[SOURCE GAP]** The syllabus mentions weak and strong laws, but the mapped official material used for the notes formally develops WLLN/convergence in probability. Stage 2 does **not** import an external SLLN theorem.
### G02 — Completeness
**[SOURCE GAP]** Completeness is explicitly in scope, but the mapped official source does not provide enough foundational mechanics for a safe canonical theorem/formula. It remains unresolved pending a source-authorized extension or syllabus-level clarification.
### G03 — PGF depth
**[SOURCE DEPTH GAP]** Keep the definition and syllabus-required derivative/use layer only. Do not silently import a larger PGF theorem set from outside the assigned source.
---
## 8. Stage 2 Conclusions
1. **Most apparent formula conflicts are not contradictory mathematics.** They fall into notation, parameterization, random-quantity definition, or validity-status differences.
2. **The two most dangerous named-distribution collisions are Geometric and Negative Binomial.** A distribution name without a random-quantity definition is not sufficient.
3. **$n$ vs $n-1$ must never be “reconciled” into one formula.** These are different statistical quantities and objectives.
4. **Exact-vs-approximate status becomes part of the canonical formula metadata.** A formula without its validity status is incomplete.
5. **Critical-value notation is not safe enough to freeze yet.** Stage 3 must choose a global lower-tail/upper-tail quantile policy.
6. **Legacy sheets are retained as translation dictionaries, not formula authorities.** Out-of-scope content is quarantined.
7. **Canonical candidates now exist for all supported F01–F82 families except the explicit source gaps.** Final notation remains provisional until Stage 3.
---
## 9. Stage 2 Completion Checklist
- [x] F01–F82 classified source-by-source at the formula-family level.
- [x] Exact duplicates separated from derived identities.
- [x] Algebraic equivalents identified.
- [x] Parameterization variants identified.
- [x] Random-quantity variants identified.
- [x] Exact vs approximation distinctions registered.
- [x] Legacy out-of-scope formulas quarantined.
- [x] Canonical candidates nominated.
- [x] Source gaps preserved rather than silently filled.
- [x] Math notation written with MathJax delimiters.
- [ ] Global notation-collision resolution and Canonical Notation Dictionary — **Stage 3**.
- [ ] Level 0–3 hierarchy and learning-status assignment — subsequent stage.
- [ ] Final Master Cheat Sheet and notation freeze — later validation stage.
