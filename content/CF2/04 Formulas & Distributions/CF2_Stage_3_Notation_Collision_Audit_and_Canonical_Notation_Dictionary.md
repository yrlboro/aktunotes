# CF2 — Stage 3 Notation Collision Audit & Canonical Notation Dictionary

**Status:** Stage 3 complete — global notation collisions resolved and canonical notation selected for downstream CF2 artifacts.  
**Input authority:** Silabus CF2 PAI + Stage 2 Formula Reconciliation Matrix (fixed v2) + CF2 syllabus notes + mapped official textbooks.  
**Legacy role:** ACTEX and Coaching Actuaries are translation/reference layers only.  
**Important:** Stage 3 freezes notation conventions, **not yet the final Master Cheat Sheet**.

---

## 1. Objective

Stage 3 resolves symbol-level ambiguity left open by Stage 2.

The governing rule is:

> **one mathematical object → one canonical symbol whenever practical; overloaded textbook symbols remain recognizable through an explicit translation map.**

A canonical symbol is selected only if it improves:

- cross-topic consistency;
- model recognition;
- parameterization safety;
- computational reliability;
- distinction between random quantity, realized value, parameter, statistic, and distribution;
- MathJax readability.

Local textbook notation may still appear when reading a source, but it must be translated before entering the canonical CF2 layer.

---

## 2. Canonical Notation Principles

### N0.1 — Random objects vs realized values

Use uppercase for random variables and lowercase for realized values:

$$
X,\;Y,\;X_1,\ldots,X_n
$$

versus

$$
x,\;y,\;x_1,\ldots,x_n.
$$

For vectors:

$$
\mathbf X=(X_1,\ldots,X_k)^\top,
\qquad
\mathbf x=(x_1,\ldots,x_k)^\top.
$$

### N0.2 — Population parameter vs estimator vs estimate

Use:

$$
\theta
$$

for a generic unknown parameter,

$$
\hat\theta=T(X_1,\ldots,X_n)
$$

for an estimator,

and

$$
\hat\theta_{\mathrm{obs}}=T(x_1,\ldots,x_n)
$$

or simply the numerical value in prose for the observed estimate.

Distribution-specific parameters override generic $\theta$ only locally after declaration.

### N0.3 — Support is part of the model

Use:

$$
\mathcal X
$$

for support of a univariate random variable,

$$
\mathcal X_{X,Y}
$$

for joint support when needed,

and

$$
\Omega
$$

for the sample space of the random experiment.

Do **not** use bare $S$ for sample space in the canonical layer because $S$ is reserved for sample standard deviation.

### N0.4 — Discrete and continuous probability objects are visually distinct

Canonical notation:

$$
p_X(x)=P(X=x)
$$

for a PMF,

$$
f_X(x)
$$

for a PDF,

and

$$
F_X(x)=P(X\le x)
$$

for a CDF.

For two variables:

$$
p_{X,Y}(x,y),
\qquad
f_{X,Y}(x,y),
\qquad
F_{X,Y}(x,y).
$$

### N0.5 — Quantiles use lower-tail convention globally

For any continuous reference distribution with CDF $G$, define its lower-tail $p$ quantile by

$$
q_p=G^{-1}(p),
\qquad 0<p<1.
$$

Distribution-specific notation:

$$
z_p=\Phi^{-1}(p),
$$

$$
t_{p,\nu}=F^{-1}_{t_\nu}(p),
$$

$$
\chi^2_{p,\nu}=F^{-1}_{\chi^2_\nu}(p),
$$

$$
F_{p;\nu_1,\nu_2}
=
F^{-1}_{F_{\nu_1,\nu_2}}(p).
$$

Thus, for example, a two-sided $95\%$ Normal critical value is

$$
z_{1-\alpha/2}=z_{0.975}.
$$

This intentionally differs from textbooks that write an upper-tail point $z_\alpha$ satisfying $P(Z>z_\alpha)=\alpha$.

Canonical translation:

$$
z_\alpha^{\text{upper-tail}}
=
z_{1-\alpha}^{\text{lower-tail}}.
$$

---

## 3. Global Collision Register and Final Decisions

| ID | Collision | Final canonical decision | Translation rule / warning |
|---|---|---|---|
| C01 | Geometric counts trials vs failures | Default $X=$ trial number of first success | Failures variable $Y=X-1$ |
| C02 | Negative Binomial counts trials vs failures | Default $X=$ trial number of the $r$th success | Failures variable $Y=X-r$ |
| C03 | Exponential scale vs rate | $\operatorname{Exp}(\theta)$ with $\theta=$ scale/mean | Rate $\lambda=1/\theta$ |
| C04 | Gamma scale symbol varies | $\operatorname{Gamma}(\alpha,\theta)$, shape $\alpha$, scale $\theta$ | If source uses scale $\beta$, map $\beta\mapsto\theta$; if rate is used, invert |
| C05 | Normal second parameter variance vs SD | $N(\mu,\sigma^2)$ | Translate legacy $N(\mu,\sigma)$ by checking source definition |
| C06 | $f$ used for PMF and PDF | $p_X$ for PMF; $f_X$ for PDF | Textbook $f(x)$ must be interpreted from discrete/continuous context |
| C07 | $S$ = sample space, survival, SD | $\Omega$ = sample space; $\bar F_X$ = survival; $S$ = sample SD | Avoid $S_X$ for survival in canonical notes |
| C08 | $S^2$, $m_2$, variance MLE | Keep three distinct quantities | Never silently switch $n$ and $n-1$ |
| C09 | $\alpha$ = Gamma shape, significance, Beta parameter | Local meaning required; reserve plain $\alpha$ globally for significance only in inference sections | Gamma uses $\alpha$ locally with explicit declaration |
| C10 | $\beta$ = Gamma scale, Beta parameter, Type II error | Avoid $\beta$ as canonical Gamma scale | Use $\beta(\theta)$ only for Type II error when dependence on parameter matters; otherwise prose “Type II error” |
| C11 | $\lambda$ = Poisson mean/rate vs generic rate | $\lambda$ = Poisson expected count for stated exposure | Exponential canonical parameter is $\theta$, not $\lambda$ |
| C12 | $\theta$ = generic parameter vs Exponential/Gamma scale | Generic $\theta$ outside named-distribution sections; local declaration required inside Gamma/Exponential | Do not assume same meaning across sections |
| C13 | $p$ = success probability, PMF letter, p-value | $p$ = Bernoulli success probability locally; PMF is $p_X$; write **p-value** in prose | Avoid bare $p$ for p-value |
| C14 | $F$ = CDF vs F distribution | $F_X$ = CDF; $F_{\nu_1,\nu_2}$ = F distribution family | Always include subscripts for distribution family |
| C15 | $f$ = density vs F critical point | $f_X$ = PDF only; F quantile is $F_{p;\nu_1,\nu_2}$ | Do not use lowercase $f_{\alpha,\nu_1,\nu_2}$ in canonical layer |
| C16 | $X$ overloaded across many models | Allowed, but each local model must define what $X$ measures | Distribution name alone never defines the random quantity |
| C17 | Upper-tail vs lower-tail critical-value notation | Global lower-tail quantiles | Convert all textbook upper-tail notation before use |
| C18 | “Compound distribution” terminology | Canonical CF2 meaning = mixture / parameter compounding | Random-sum meaning must be explicitly labeled if ever source-supported |
| C19 | Exact vs approximate Normal statements | Notation must carry `EXACT` or `APPROX` metadata in derived artifacts | Same algebraic statistic can have different validity regimes |
| C20 | CI SE vs null-test SE for proportions | Keep distinct | CI uses $\hat p$; null test uses $p_0$ |
| C21 | Algebraic factorization vs independence | Joint support + factorization required | Rectangular/product support alone is insufficient |
| C22 | Forward vs inverse Jacobian | Canonical density formula uses inverse Jacobian | Forward determinant may be used only via reciprocal under regular one-to-one map |
| C23 | Zero covariance vs independence | $\operatorname{Cov}(X,Y)=0$ means uncorrelated, not independent | Independence implies zero covariance when moments exist, not conversely |
| C24 | Likelihood vs posterior | $L(\theta;\mathbf x)$ vs $\pi(\theta\mid\mathbf x)$ | Never treat likelihood as a normalized probability distribution over $\theta$ |
| C25 | SLLN / completeness / PGF depth gaps | Preserve explicit source-gap labels | Do not fill silently from outside mapped sources |

---

## 4. Canonical Notation Dictionary

### 4.1 Probability and set notation

| Canonical symbol | Meaning | Alternate source notation to recognize |
|---|---|---|
| $\Omega$ | sample space | $S$, occasionally other set labels |
| $\omega$ | elementary outcome / sample point | $s$ |
| $A,B,C$ | events | same |
| $A^c$ | complement of $A$ | $A'$, $A^0$ in legacy rendering |
| $\varnothing$ | empty event | $\emptyset$ |
| $P(A)$ | probability of event $A$ | $\Pr(A)$ |
| $P(A\mid B)$ | conditional probability | $\Pr(A\mid B)$ |
| $A\perp B$ | event independence | may be stated only through product criterion |

Canonical default:

$$
P(A\mid B)
=
\dfrac{P(A\cap B)}{P(B)},
\qquad P(B)>0.
$$

### 4.2 Random variables and support

| Canonical symbol | Meaning | Alternate source notation to recognize |
|---|---|---|
| $X,Y$ | random variables | same |
| $x,y$ | possible/observed values | same |
| $\mathcal X$ | support of $X$ | $S_X$, $D_X$, $S$ |
| $\mathcal X_{X,Y}$ | joint support | $S_{X,Y}$ |
| $\mathbf X$ | random vector | $(X_1,\ldots,X_k)^\top$ |
| $\mathbf x$ | realized vector | lowercase vector notation |

### 4.3 Distribution functions

| Canonical symbol | Meaning | Alternate source notation to recognize |
|---|---|---|
| $p_X(x)$ | PMF | $f(x)$ in discrete textbooks |
| $f_X(x)$ | PDF | $f(x)$ |
| $F_X(x)$ | CDF | $F(x)$ |
| $\bar F_X(x)$ | survival function $1-F_X(x)$ | $S_X(x)$ |
| $p_{X,Y}(x,y)$ | joint PMF | $f(x,y)$ in some discrete sources |
| $f_{X,Y}(x,y)$ | joint PDF | $f(x,y)$ |
| $F_{X,Y}(x,y)$ | joint CDF | same pattern |
| $p_{X\mid Y}(x\mid y)$ | conditional PMF | $f_{X\mid Y}(x\mid y)$ in unified textbook notation |
| $f_{X\mid Y}(x\mid y)$ | conditional PDF | same |

### 4.4 Moments and dependence

| Canonical symbol | Meaning | Alternate source notation to recognize |
|---|---|---|
| $\mu_X=E[X]$ | mean of $X$ | $\mu$ when context is unambiguous |
| $\sigma_X^2=\operatorname{Var}(X)$ | variance | $\sigma^2$ |
| $\sigma_X=\sqrt{\operatorname{Var}(X)}$ | SD | $\sigma$ |
| $\mu_k'=E[X^k]$ | raw moment of order $k$ | source-specific prime placement |
| $\mu_k=E[(X-\mu_X)^k]$ | central moment | same |
| $\operatorname{Cov}(X,Y)$ | covariance | $\sigma_{XY}$ |
| $\rho_{XY}$ | correlation | $\rho(X,Y)$ |
| $\boldsymbol\mu=E[\mathbf X]$ | mean vector | same |
| $\boldsymbol\Sigma=\operatorname{Cov}(\mathbf X)$ | covariance matrix | $\Sigma$ |

Canonical covariance identity:

$$
\operatorname{Cov}(X,Y)
=
E[XY]-E[X]E[Y].
$$

### 4.5 Generating functions

| Canonical symbol | Meaning |
|---|---|
| $G_X(s)$ | PGF |
| $M_X(t)$ | MGF |
| $K_X(t)=\log M_X(t)$ | CGF |
| $M_{X,Y}(t_1,t_2)$ | joint MGF |

Use:

$$
M_X^{(k)}(0)=E[X^k]
$$

when the required existence conditions are satisfied.

### 4.6 Common discrete distributions

#### Bernoulli

$$
X\sim\operatorname{Bernoulli}(p),
\qquad
X\in\{0,1\}.
$$

Use:

$$
q=1-p
$$

only as local shorthand.

#### Binomial

$$
X\sim\operatorname{Binomial}(n,p).
$$

Here:

- $n$ = fixed number of trials;
- $p$ = success probability per trial.

#### Hypergeometric

Canonical parameter order:

$$
X\sim\operatorname{Hypergeometric}(N,M,n),
$$

where:

- $N$ = population size;
- $M$ = number of success states in the population;
- $n$ = sample size.

Canonical PMF:

$$
P(X=x)
=
\dfrac{
\binom{M}{x}
\binom{N-M}{n-x}
}{
\binom{N}{n}
}.
$$

#### Geometric

Canonical random quantity:

> $X=$ trial number on which the first success occurs.

Thus:

$$
X\in\{1,2,\ldots\},
$$

$$
P(X=x)=p(1-p)^{x-1}.
$$

Failures-before-success variant:

$$
Y=X-1.
$$

#### Negative Binomial

Canonical random quantity:

> $X=$ trial number on which the $r$th success occurs.

Thus:

$$
X\in\{r,r+1,\ldots\},
$$

$$
P(X=x)
=
\binom{x-1}{r-1}
p^r(1-p)^{x-r}.
$$

Failures-before-$r$th-success variant:

$$
Y=X-r.
$$

#### Poisson

$$
X\sim\operatorname{Poisson}(\lambda),
$$

where $\lambda$ is the expected count for the **stated exposure**.

If a source gives rate $\nu$ per unit exposure and exposure length $t$, first map:

$$
\lambda=\nu t.
$$

### 4.7 Common continuous distributions

#### Uniform

$$
X\sim U(a,b),
\qquad a<b.
$$

#### Exponential

Canonical scale/mean convention:

$$
X\sim\operatorname{Exp}(\theta),
\qquad \theta>0,
$$

$$
f_X(x)
=
\dfrac{1}{\theta}e^{-x/\theta},
\qquad x>0.
$$

Rate translation:

$$
\lambda=\dfrac{1}{\theta}.
$$

#### Gamma

Canonical shape-scale convention:

$$
X\sim\operatorname{Gamma}(\alpha,\theta),
$$

where:

- $\alpha>0$ = shape;
- $\theta>0$ = scale.

Then:

$$
E[X]=\alpha\theta,
$$

$$
\operatorname{Var}(X)=\alpha\theta^2.
$$

If another source uses $\beta$ as scale:

$$
\beta_{\text{source}}
\longmapsto
\theta_{\text{canonical}}.
$$

If another source uses rate $\lambda$:

$$
\theta=\dfrac{1}{\lambda}.
$$

#### Normal

Canonical notation:

$$
X\sim N(\mu,\sigma^2),
$$

where the second argument is **variance**.

Standardization:

$$
Z=\dfrac{X-\mu}{\sigma}.
$$

### 4.8 Sampling and estimator notation

| Canonical symbol | Meaning |
|---|---|
| $X_1,\ldots,X_n$ | random sample |
| $x_1,\ldots,x_n$ | observed sample |
| $\bar X$ | sample mean statistic |
| $\bar x$ | observed sample mean |
| $S^2$ | unbiased sample variance with denominator $n-1$ |
| $S$ | sample standard deviation |
| $s^2,s$ | observed sample variance / SD |
| $m_k$ | sample raw moment of order $k$ in Method of Moments |
| $m_2^{(c)}$ | sample second central moment with denominator $n$, if needed explicitly |
| $\hat\theta$ | generic estimator |
| $\hat\theta_{\mathrm{MLE}}$ | MLE |
| $L(\theta;\mathbf x)$ | likelihood |
| $\ell(\theta;\mathbf x)=\log L(\theta;\mathbf x)$ | log-likelihood |
| $\pi(\theta)$ | prior density/mass |
| $\pi(\theta\mid\mathbf x)$ | posterior |

Canonical unbiased sample variance:

$$
S^2
=
\dfrac{1}{n-1}
\sum_{i=1}^{n}
(X_i-\bar X)^2.
$$

Canonical Normal variance MLE:

$$
\hat\sigma^2_{\mathrm{MLE}}
=
\dfrac{1}{n}
\sum_{i=1}^{n}
(X_i-\bar X)^2.
$$

These are **not interchangeable**.

### 4.9 Inference notation

| Canonical symbol | Meaning |
|---|---|
| $H_0$ | null hypothesis |
| $H_1$ | alternative hypothesis |
| $\alpha$ | significance level / Type I error probability in testing context |
| $\beta(\theta)$ | Type II error probability at alternative parameter value $\theta$, when needed |
| $\gamma(\theta)$ | power function |
| **p-value** | write in prose; avoid bare symbol $p$ |
| $\nu$ | degrees of freedom |
| $z_p$ | lower-tail Standard Normal quantile |
| $t_{p,\nu}$ | lower-tail $t_\nu$ quantile |
| $\chi^2_{p,\nu}$ | lower-tail Chi-square quantile |
| $F_{p;\nu_1,\nu_2}$ | lower-tail F quantile |

Canonical power:

$$
\gamma(\theta)
=
P_\theta(\text{reject }H_0).
$$

For a simple alternative:

$$
\gamma(\theta_1)=1-\beta(\theta_1).
$$

---

## 5. Quantile Convention Freeze

This is the most important notation freeze in Stage 3.

### 5.1 Normal

Define:

$$
P(Z\le z_p)=p,
\qquad
Z\sim N(0,1).
$$

Therefore:

$$
P(Z>z_{1-\alpha})=\alpha.
$$

A two-sided central confidence probability:

$$
P\left(
-z_{1-\alpha/2}
\le Z\le
z_{1-\alpha/2}
\right)
=
1-\alpha.
$$

### 5.2 Student $t$

Define:

$$
P(T_\nu\le t_{p,\nu})=p.
$$

For a two-sided test/interval use:

$$
t_{1-\alpha/2,\nu}.
$$

### 5.3 Chi-square

Define:

$$
P(\chi^2_\nu\le\chi^2_{p,\nu})=p.
$$

From

$$
\dfrac{(n-1)S^2}{\sigma^2}
\sim
\chi^2_{n-1},
$$

the central probability statement is

$$
P\left(
\chi^2_{\alpha/2,n-1}
\le
\dfrac{(n-1)S^2}{\sigma^2}
\le
\chi^2_{1-\alpha/2,n-1}
\right)
=
1-\alpha.
$$

Solving for $\sigma^2$ gives

$$
\boxed{
\dfrac{(n-1)S^2}
{\chi^2_{1-\alpha/2,n-1}}
\le
\sigma^2
\le
\dfrac{(n-1)S^2}
{\chi^2_{\alpha/2,n-1}}
}.
$$

This is the canonical lower-tail-quantile form.

### 5.4 F distribution

Define:

$$
P\left(
F_{\nu_1,\nu_2}
\le
F_{p;\nu_1,\nu_2}
\right)
=
p.
$$

For the pivot

$$
R
=
\dfrac{S_1^2/\sigma_1^2}
{S_2^2/\sigma_2^2}
\sim
F_{\nu_1,\nu_2},
$$

a central probability statement is

$$
P\left(
F_{\alpha/2;\nu_1,\nu_2}
\le R\le
F_{1-\alpha/2;\nu_1,\nu_2}
\right)
=
1-\alpha.
$$

All variance-ratio interval formulas should be **reconstructed from this pivot** rather than memorized from a textbook's upper-tail notation.

---

## 6. Translation Rules for Official and Legacy Sources

### 6.1 Hogg–Tanis discrete notation

If source writes:

$$
f(x)
$$

for a PMF, translate to:

$$
p_X(x).
$$

If source uses $S$ for support, translate to:

$$
\mathcal X.
$$

Geometric / Negative Binomial trial-count conventions are retained because they match the canonical choice.

### 6.2 Hogg–Tanis continuous notation

If source writes:

$$
f(x),\quad F(x),
$$

translate to:

$$
f_X(x),\quad F_X(x).
$$

Their scale parameter $\theta$ for Exponential/Gamma agrees with the canonical convention.

Textbook upper-tail point notation such as $z_\alpha$ must be converted to canonical lower-tail notation:

$$
z_\alpha^{\text{source upper-tail}}
=
z_{1-\alpha}^{\text{canonical}}.
$$

### 6.3 Hogg–McKean–Craig

Preserve local theorem content but translate:

- PMF/PDF notation to $p_X/f_X$;
- scale parameter symbols to canonical $\theta$ when necessary;
- Negative Binomial failures convention to the canonical trial-count variable only after applying the appropriate shift.

### 6.4 Miller

Miller's inferential critical-value notation can be upper-tail oriented. Translate every critical point by **definition**, not by subscript pattern.

For example, if Miller writes a Chi-square upper-tail point satisfying

$$
P(\chi^2_\nu>c)=\alpha,
$$

then canonical notation is

$$
c=\chi^2_{1-\alpha,\nu}.
$$

### 6.5 ACTEX

Treat ACTEX as a translation dictionary only.

Required immediate translations include:

- Geometric failures count $\to$ canonical trial count;
- Negative Binomial failures count $\to$ canonical trial count;
- $N(\mu,\sigma)$ ambiguity $\to$ explicit $N(\mu,\sigma^2)$ after checking definition;
- PMF/PDF notation $\to p_X/f_X$;
- any upper-tail critical notation $\to$ lower-tail quantile notation.

### 6.6 Coaching Actuaries

CA is useful because it often displays both Geometric/Negative-Binomial conventions. Use it only to recognize alternative conventions, not to override the canonical one.

---

## 7. Reserved Symbols and Local-Use Policy

Some symbols cannot be globally unique because standard statistics notation reuses them. The solution is a **reserved/global vs local** policy.

### Globally reserved

- $\Omega$ — sample space
- $p_X$ — PMF
- $f_X$ — PDF
- $F_X$ — CDF
- $\bar F_X$ — survival
- $S,S^2$ — sample SD and sample variance
- $\boldsymbol\Sigma$ — covariance matrix
- $H_0,H_1$ — hypotheses
- **p-value** — written in prose
- $z_p,t_{p,\nu},\chi^2_{p,\nu},F_{p;\nu_1,\nu_2}$ — lower-tail quantiles

### Allowed only with local declaration

- $\theta$ — generic parameter or scale parameter depending on local model
- $\alpha$ — Gamma shape in distribution sections; significance level in inference sections
- $\lambda$ — Poisson mean for stated exposure
- $p$ — Bernoulli/binomial success probability
- $r$ — Negative-Binomial target successes; may also appear as df in a quoted source, but canonical df is $\nu$
- $N,n,M$ — finite-population/sample parameters only after explicit declaration

---

## 8. Canonical Display Rules for the Master Cheat Sheet

Every named distribution entry must appear in this order:

1. **Random quantity definition**
2. **Support**
3. **Parameterization**
4. **Canonical PMF/PDF**
5. **Mean / variance**
6. **Equivalent convention mapping**
7. **Recognition cue**
8. **Validity / approximation tag**

Example pattern:

### Geometric

**Random quantity:** trial number of first success.

$$
X\sim\operatorname{Geometric}(p),
\qquad
X=1,2,\ldots
$$

$$
P(X=x)=p(1-p)^{x-1}.
$$

$$
E[X]=\dfrac{1}{p},
\qquad
\operatorname{Var}(X)=\dfrac{1-p}{p^2}.
$$

Alternative failures convention:

$$
Y=X-1.
$$

No formula should appear without the random-quantity definition and support.

For inferential formulas, every entry must appear in this order:

1. target parameter;
2. assumptions;
3. statistic/pivot;
4. reference distribution;
5. `EXACT` or `APPROX`;
6. formula/decision rule;
7. degrees of freedom if applicable.

---

## 9. Notation Sanity Protocol

Before using any formula from a non-canonical source:

### Step 1 — Identify the object

Ask whether the symbol refers to:

- event;
- RV;
- realization;
- parameter;
- statistic;
- estimator;
- density/mass;
- CDF;
- critical value.

### Step 2 — Identify support

Write the valid support before named-distribution substitution.

### Step 3 — Identify parameterization

Especially for:

- Geometric;
- Negative Binomial;
- Exponential;
- Gamma;
- Normal.

### Step 4 — Translate notation

Convert source notation to canonical notation **before calculating**.

### Step 5 — Check validity status

Mark:

- `EXACT`;
- `APPROX`;
- `BOUND`;
- `ASYMPTOTIC`.

### Step 6 — Only then substitute numbers

This prevents formulas that are algebraically familiar but semantically incompatible from being mixed.

---

## 10. Canonical Quantities That Must Never Be Collapsed

### 10.1 Sample variance vs second central sample moment vs variance MLE

$$
S^2
=
\dfrac{1}{n-1}
\sum_{i=1}^{n}(X_i-\bar X)^2
$$

is the canonical unbiased sample variance statistic.

Meanwhile:

$$
m_2^{(c)}
=
\dfrac{1}{n}
\sum_{i=1}^{n}(X_i-\bar X)^2
$$

is a sample central moment.

For a Normal model:

$$
\hat\sigma^2_{\mathrm{MLE}}
=
m_2^{(c)}.
$$

Same numerator does **not** imply same quantity.

### 10.2 CI proportion SE vs test SE

Confidence interval:

$$
\operatorname{SE}_{\mathrm{CI}}
=
\sqrt{
\dfrac{\hat p(1-\hat p)}{n}
}.
$$

Null test for

$$
H_0:p=p_0:
$$

$$
\operatorname{SE}_{H_0}
=
\sqrt{
\dfrac{p_0(1-p_0)}{n}
}.
$$

### 10.3 Likelihood vs posterior

Likelihood:

$$
L(\theta;\mathbf x)
\propto
f(\mathbf x\mid\theta)
$$

as a function of $\theta$ with data fixed.

Posterior:

$$
\pi(\theta\mid\mathbf x)
=
\dfrac{
L(\theta;\mathbf x)\pi(\theta)
}{
\int L(u;\mathbf x)\pi(u)\,du
}
$$

for a continuous parameter.

They are different mathematical objects.

---

## 11. Source-Gap Register Preserved

### G01 — Strong Law of Large Numbers

**[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]**

The mapped official source set used for the CF2 notes formally supports the Weak Law / convergence-in-probability layer. Stage 3 does not invent a canonical SLLN theorem.

### G02 — Completeness

**[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]**

Completeness remains in syllabus scope but lacks enough mapped-source development for a safe canonical criterion/formula. No notation beyond the word “complete statistic” is frozen here.

### G03 — PGF depth

**[SOURCE DEPTH GAP]**

Canonical notation $G_X(s)$ is frozen, but theorem depth remains limited to syllabus/source-supported use.

---

## 12. Stage 3 Freeze Decisions

The following are now **frozen for downstream CF2 canonical artifacts**:

- sample space: $\Omega$;
- support: $\mathcal X$ / joint support $\mathcal X_{X,Y}$;
- PMF: $p_X$;
- PDF: $f_X$;
- CDF: $F_X$;
- survival: $\bar F_X$;
- covariance matrix: $\boldsymbol\Sigma$;
- sample variance: $S^2$ with denominator $n-1$;
- sample SD: $S$;
- Geometric: trial-count convention;
- Negative Binomial: trial-count convention;
- Exponential: scale $\theta$;
- Gamma: shape $\alpha$, scale $\theta$;
- Normal: $N(\mu,\sigma^2)$;
- generic p-value: written as **p-value**, not bare $p$;
- degrees of freedom: $\nu$;
- all critical values/quantiles: **lower-tail quantile convention**;
- F quantile: $F_{p;\nu_1,\nu_2}$;
- exact/approximate validity status must accompany inferential formulas.

The following remain **locally overloaded but controlled**:

- $\theta$;
- $\alpha$;
- $\lambda$;
- $p$;
- $r$;
- $n,N,M$.

They are safe only after local declaration.

---

## 13. Stage 3 Completion Checklist

- [x] Stage 2 fixed v2 accepted as the baseline reconciliation document.
- [x] Notation collisions audited globally.
- [x] Sample-space / support symbols separated from sample SD.
- [x] PMF and PDF notation separated.
- [x] Survival notation separated from sample SD.
- [x] Geometric convention frozen.
- [x] Negative-Binomial convention frozen.
- [x] Exponential parameterization frozen.
- [x] Gamma parameterization frozen.
- [x] Normal second-parameter convention frozen.
- [x] Sample variance / central sample moment / MLE variance separated.
- [x] Likelihood and posterior notation separated.
- [x] p-value collision resolved.
- [x] Chi-square / F / Normal / t critical-value convention frozen to lower-tail quantiles.
- [x] F-ratio orientation rule preserved.
- [x] Exact-vs-approximation tagging preserved.
- [x] Source gaps carried forward without silent supplementation.
- [x] Canonical Notation Dictionary created.
- [x] MathJax notation manually structured to avoid Markdown-table pipe conflicts.

---

## 14. Next Stage

With formula families reconciled and notation now frozen, the next stage is:

> **Stage 4 — Formula Hierarchy + Learning Status Assignment**

Each reconciled family F01–F82 will be assigned to:

- **Level 0 — Universal Reasoning Rules**
- **Level 1 — Primitive / Foundation**
- **Level 2 — Core Derived**
- **Level 3 — Convenience / Special Case**

and receive one learning status:

- **MEMORIZE**
- **RECONSTRUCT**
- **REFERENCE ONLY**
- **AVOID AS DEFAULT**

Stage 4 should use this Stage 3 notation exactly; no new symbol convention should be introduced without reopening the collision audit.
