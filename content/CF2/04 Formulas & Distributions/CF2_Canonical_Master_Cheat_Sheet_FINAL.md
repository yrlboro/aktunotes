# CF2 — Canonical Master Cheat Sheet FINAL

**Status:** **FROZEN PRIMARY REFERENCE** — validated, notation-frozen, and MathJax/LaTeX QA completed.  
**Scope authority:** Silabus CF2 PAI.  
**Formula-family baseline:** Stage 2 Formula Reconciliation Matrix — FIXED v2.  
**Notation authority:** Stage 3 Canonical Notation Dictionary.  
**Learning-policy authority:** Stage 4 Formula Hierarchy & Learning Status Assignment.  
**Design principle:** **one canonical quantity → one default formula → equivalent forms → assumptions → reconstruction path**.

> [!IMPORTANT]
> This is not a formula dump. Always execute the Level 0 decision protocol before selecting a formula.

---

# 0. Level 0 — Universal Decision Protocol

## 0.1 Probability / distribution problems

```text
Narrative
→ define random experiment / quantity
→ determine support
→ identify mechanism
→ declare parameterization
→ choose exact model
→ calculate
→ sanity check
```

### Mandatory questions

1. **What does the random variable count or measure?**
2. **What is the support?**
3. **Discrete or continuous?**
4. **Fixed number of trials or waiting time?**
5. **With replacement / independent, or without replacement?**
6. **Scale or rate parameterization?**
7. **Exact result or approximation?**

---

## 0.2 Multivariate problems

```text
Joint support
→ target region / slice / projection
→ joint / marginal / conditional?
→ sum or integrate with correct bounds
→ check normalization
```

---

## 0.3 Transformation problems

```text
X support
→ Y = g(X)
→ map support
→ one-to-one?
→ choose:
   discrete mass transfer
   CDF method
   inverse Jacobian
→ verify normalization
```

---

## 0.4 Inference problems

```text
Population model
→ random sample
→ statistic
→ assumptions
→ exact or approximate?
→ pivot / sampling distribution
→ target parameter / decision
→ sanity check
```

### Reference-distribution trigger

- Known population SD + Normal mean problem → Standard Normal.
- Unknown population SD + Normal mean problem → Student $t$.
- Normal population variance → Chi-square.
- Ratio of two independent Normal variances → $F$.
- Non-Normal large-sample mean → CLT Normal approximation.

---

# 1. Canonical Notation

## 1.1 Core probability notation

$$
\Omega=\text{sample space},
\qquad
A^c=\text{complement of }A.
$$

$$
p_X(x)=P(X=x)
$$

for a PMF,

$$
f_X(x)
$$

for a PDF,

$$
F_X(x)=P(X\le x)
$$

for a CDF, and

$$
\bar F_X(x)=1-F_X(x)
$$

for the survival function.

Use:

$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2
$$

for sample variance, so bare $S$ is reserved for sample standard deviation.

---

## 1.2 Quantile convention — frozen lower-tail convention

$$
P(Z\le z_p)=p.
$$

$$
P(T_\nu\le t_{p,\nu})=p.
$$

$$
P(\chi^2_\nu\le \chi^2_{p,\nu})=p.
$$

$$
P(F_{\nu_1,\nu_2}\le F_{p;\nu_1,\nu_2})=p.
$$

For a central two-sided probability $1-\alpha$, use the lower-tail points

$$
1-\frac{\alpha}{2}
\qquad\text{and}\qquad
\frac{\alpha}{2}.
$$

---

# 2. Basic Probability

## 2.1 Probability axioms — MEMORIZE

For every event $A$:

$$
P(A)\ge0,
$$

$$
P(\Omega)=1,
$$

and for pairwise disjoint events $A_i$,

$$
P\left(\bigcup_i A_i\right)
=
\sum_i P(A_i).
$$

### Reconstruct from axioms

$$
P(A^c)=1-P(A),
$$

$$
0\le P(A)\le1.
$$

---

## 2.1A Relative frequency — MEMORIZE concept

If an experiment is repeated $n$ times and event $A$ occurs $N_n(A)$ times, its observed relative frequency is

$$
\boxed{
r_n(A)
=
\frac{N_n(A)}{n}
}.
$$

This motivates probability as a stable long-run event measure. Do not confuse the observed relative frequency $r_n(A)$ with the model probability $P(A)$ at finite $n$.

---

## 2.2 Inclusion–exclusion — RECONSTRUCT

$$
P(A\cup B)
=
P(A)+P(B)-P(A\cap B).
$$

For disjoint events:

$$
P(A\cup B)=P(A)+P(B).
$$

---

## 2.3 Conditional probability — MEMORIZE

$$
\boxed{
P(A\mid B)
=
\frac{P(A\cap B)}{P(B)}
},
\qquad
P(B)>0.
$$

Rearrange to obtain the multiplication rule:

$$
P(A\cap B)
=
P(B)P(A\mid B)
=
P(A)P(B\mid A).
$$

---

## 2.4 Event independence — MEMORIZE

Safest canonical definition:

$$
\boxed{
A\perp B
\iff
P(A\cap B)=P(A)P(B)
}.
$$

If the relevant denominator is positive:

$$
P(A\mid B)=P(A).
$$

> [!DANGER]
> Mutually exclusive events with positive probabilities are not independent.

---

## 2.5 Total probability and Bayes — RECONSTRUCT

If $B_1,\ldots,B_m$ form a partition:

$$
\boxed{
P(A)
=
\sum_{i=1}^{m}
P(B_i)P(A\mid B_i)
}.
$$

Then:

$$
\boxed{
P(B_k\mid A)
=
\frac{
P(B_k)P(A\mid B_k)
}{
\sum_{i=1}^{m}
P(B_i)P(A\mid B_i)
}
}.
$$

Mental model:

> **target path / all paths producing the evidence**

---

# 3. Counting

## 3.1 Decision rule

```text
Alternative disjoint cases → add
Successive choices → multiply
Order matters → permutation
Order does not matter → combination
```

## 3.2 Core formulas — MEMORIZE

$$
n!
=
n(n-1)\cdots 2\cdot1.
$$

$$
P(n,r)
=
\frac{n!}{(n-r)!}.
$$

$$
\binom{n}{r}
=
\frac{n!}{r!(n-r)!}.
$$

### With replacement, ordered $r$ selections from $n$ objects

$$
n^r.
$$

### Classical counting probability — AVOID AS DEFAULT

$$
P(A)
=
\frac{N(A)}{N(\Omega)}
$$

only when elementary outcomes are equally likely.

---

# 4. Univariate Random Variables

## 4.1 PMF / PDF / CDF — MEMORIZE

### Discrete

$$
p_X(x)\ge0,
\qquad
\sum_{x\in\mathcal X}p_X(x)=1.
$$

$$
F_X(x)
=
\sum_{\substack{t\in\mathcal X\\ t\le x}}
p_X(t).
$$

### Continuous

$$
f_X(x)\ge0,
\qquad
\int_{\mathcal X}f_X(x)\,dx=1.
$$

$$
F_X(x)
=
\int_{-\infty}^{x}f_X(t)\,dt.
$$

When differentiable:

$$
f_X(x)=F_X'(x).
$$

For continuous $X$:

$$
P(X=x)=0.
$$

---

## 4.2 Expectation and moments — MEMORIZE

### Discrete

$$
E[g(X)]
=
\sum_{x\in\mathcal X}
g(x)p_X(x).
$$

### Continuous

$$
E[g(X)]
=
\int_{\mathcal X}
g(x)f_X(x)\,dx.
$$

Raw moment:

$$
\mu_k'
=
E[X^k].
$$

Central moment:

$$
\mu_k
=
E[(X-\mu)^k].
$$

---

## 4.3 Variance — primitive + reconstruction

Definition:

$$
\boxed{
\operatorname{Var}(X)
=
E[(X-E[X])^2]
}.
$$

Computational form:

$$
\boxed{
\operatorname{Var}(X)
=
E[X^2]-E[X]^2
}.
$$

Linear transformation:

$$
E[aX+b]
=
aE[X]+b,
$$

$$
\operatorname{Var}(aX+b)
=
a^2\operatorname{Var}(X).
$$

---

# 5. Generating Functions

## 5.1 PGF — MEMORIZE syllabus-required core; deeper results REFERENCE ONLY

For nonnegative integer-valued $X$:

$$
\boxed{
G_X(s)
=
E[s^X]
=
\sum_{x=0}^{\infty}
p_X(x)s^x
}.
$$

Basic check:

$$
G_X(1)=1.
$$

First factorial moment:

$$
\boxed{
G_X'(1)=E[X]
}.
$$

Second factorial moment:

$$
\boxed{
G_X''(1)
=
E[X(X-1)]
}.
$$

Therefore:

$$
E[X^2]
=
G_X''(1)+G_X'(1),
$$

and

$$
\boxed{
\operatorname{Var}(X)
=
G_X''(1)
+
G_X'(1)
-
[G_X'(1)]^2
}.
$$

For nonnegative integer-valued $X$, the algebraic connection with the MGF is

$$
M_X(t)=G_X(e^t).
$$

> [!NOTE]
> These coefficient/factorial-moment identities are retained at the syllabus-required level and are directly derived from the PGF definition. Do not silently import a broader external PGF theorem set.

---

## 5.2 MGF — MEMORIZE

$$
\boxed{
M_X(t)
=
E[e^{tX}]
}.
$$

If the MGF exists on a neighborhood of $0$:

$$
M_X^{(k)}(0)
=
E[X^k].
$$

In particular:

$$
E[X]
=
M_X'(0),
$$

$$
E[X^2]
=
M_X''(0).
$$

---

## 5.3 CGF — RECONSTRUCT

$$
\boxed{
K_X(t)
=
\log M_X(t)
}.
$$

Cumulants are generated by derivatives at $0$:

$$
\kappa_r
=
K_X^{(r)}(0).
$$

In particular:

$$
\boxed{
K_X'(0)
=
E[X]
}
$$

and

$$
\boxed{
K_X''(0)
=
\operatorname{Var}(X)
}.
$$

This is often computationally cleaner than differentiating the MGF twice when $M_X(t)$ has an exponential form.

---

# 6. Transformations — Univariate

## 6.1 Discrete transformation — RECONSTRUCT

For $Y=g(X)$:

$$
\boxed{
p_Y(y)
=
\sum_{x:g(x)=y}
p_X(x)
}.
$$

No Jacobian is used for discrete probability mass.

---

## 6.2 CDF method — MEMORIZE

$$
\boxed{
F_Y(y)
=
P(g(X)\le y)
}.
$$

This is the general fallback transformation method.

---

## 6.2A MGF transformation / distribution identification — MEMORIZE route

For

$$
Y=aX+b,
$$

the transformed MGF is

$$
\boxed{
M_Y(t)
=
e^{bt}M_X(at)
}.
$$

More generally, for any transformation $Y=g(X)$:

$$
M_Y(t)
=
E[e^{t g(X)}].
$$

Use the MGF route when the resulting MGF is easy to compute and matches a known distribution. This can be useful even for a many-to-one transform such as $Y=X^2$.

> [!IMPORTANT]
> MGF recognition requires the relevant MGF to exist on a neighborhood of $0$. It is an alternative transformation method, not a replacement for support checks.

---

## 6.3 One-to-one continuous transformation — MEMORIZE

If $y=g(x)$ is differentiable and one-to-one:

$$
\boxed{
f_Y(y)
=
f_X(g^{-1}(y))
\left\lvert
\frac{d}{dy}g^{-1}(y)
\right\rvert
}.
$$

Always determine the transformed support first.

---

# 7. Discrete Distributions

# 7.1 Bernoulli — MEMORIZE

**Random quantity:** one success/failure indicator.

$$
X\sim\operatorname{Bernoulli}(p),
\qquad
x\in\{0,1\}.
$$

$$
P(X=x)
=
p^x(1-p)^{1-x}.
$$

$$
E[X]=p.
$$

$$
\operatorname{Var}(X)=p(1-p).
$$

---

# 7.2 Binomial — MEMORIZE

**Recognition:** fixed $n$, independent Bernoulli trials, constant success probability $p$, count successes.

$$
X\sim\operatorname{Binomial}(n,p).
$$

Support:

$$
x=0,1,\ldots,n.
$$

PMF:

$$
\boxed{
P(X=x)
=
\binom{n}{x}
p^x(1-p)^{n-x}
}.
$$

$$
E[X]=np.
$$

$$
\operatorname{Var}(X)=np(1-p).
$$

MGF:

$$
M_X(t)
=
(1-p+pe^t)^n.
$$

At least one success:

$$
P(X\ge1)
=
1-(1-p)^n.
$$

---

# 7.3 Hypergeometric — MEMORIZE

**Recognition:** finite population, sampling **without replacement**, count successes.

Canonical parameters:

- $N$ = population size;
- $M$ = number of successes in population;
- $n$ = sample size.

$$
X\sim\operatorname{Hypergeometric}(N,M,n).
$$

PMF:

$$
\boxed{
P(X=x)
=
\frac{
\binom{M}{x}
\binom{N-M}{n-x}
}{
\binom{N}{n}
}
}.
$$

Support:

$$
\max(0,n-(N-M))
\le x\le
\min(n,M).
$$

Let

$$
p=\frac{M}{N}.
$$

Then:

$$
E[X]=np.
$$

$$
\operatorname{Var}(X)
=
np(1-p)
\frac{N-n}{N-1}.
$$

---

# 7.4 Geometric — MEMORIZE

**Canonical random quantity:** $X=$ trial number of the first success.

$$
X\sim\operatorname{Geometric}(p).
$$

Support:

$$
x=1,2,\ldots
$$

PMF:

$$
\boxed{
P(X=x)
=
p(1-p)^{x-1}
}.
$$

$$
E[X]
=
\frac{1}{p}.
$$

$$
\operatorname{Var}(X)
=
\frac{1-p}{p^2}.
$$

Alternative failures convention:

$$
Y=X-1.
$$

> [!DANGER]
> Never use a Geometric formula before checking what the random variable counts.

---

# 7.5 Negative Binomial — MEMORIZE

**Canonical random quantity:** $X=$ trial number of the $r$th success.

Support:

$$
x=r,r+1,\ldots
$$

PMF:

$$
\boxed{
P(X=x)
=
\binom{x-1}{r-1}
p^r(1-p)^{x-r}
}.
$$

$$
E[X]
=
\frac{r}{p}.
$$

$$
\operatorname{Var}(X)
=
\frac{r(1-p)}{p^2}.
$$

Alternative failures convention:

$$
Y=X-r.
$$

---

# 7.6 Poisson — MEMORIZE

$$
X\sim\operatorname{Poisson}(\lambda).
$$

Support:

$$
x=0,1,2,\ldots
$$

PMF:

$$
\boxed{
P(X=x)
=
e^{-\lambda}
\frac{\lambda^x}{x!}
}.
$$

$$
E[X]
=
\lambda.
$$

$$
\operatorname{Var}(X)
=
\lambda.
$$

If rate is $\nu$ per unit exposure and exposure length is $t$:

$$
\lambda=\nu t.
$$

---

# 8. Continuous Distributions

# 8.1 Uniform — MEMORIZE

$$
X\sim U(a,b),
\qquad a<b.
$$

$$
f_X(x)
=
\frac{1}{b-a},
\qquad a\le x\le b.
$$

$$
F_X(x)
=
\frac{x-a}{b-a},
\qquad a\le x<b.
$$

$$
E[X]
=
\frac{a+b}{2}.
$$

$$
\operatorname{Var}(X)
=
\frac{(b-a)^2}{12}.
$$

---

# 8.2 Exponential — MEMORIZE

Canonical **scale / mean** parameterization:

$$
X\sim\operatorname{Exp}(\theta),
\qquad
\theta>0.
$$

$$
\boxed{
f_X(x)
=
\frac{1}{\theta}
e^{-x/\theta},
\qquad x>0
}.
$$

$$
F_X(x)
=
1-e^{-x/\theta}.
$$

$$
\bar F_X(x)
=
e^{-x/\theta}.
$$

$$
E[X]=\theta.
$$

$$
\operatorname{Var}(X)=\theta^2.
$$

MGF:

$$
M_X(t)
=
\frac{1}{1-\theta t},
\qquad
t<\frac{1}{\theta}.
$$

Rate translation:

$$
\lambda=\frac{1}{\theta}.
$$

Memoryless property:

$$
P(X>s+t\mid X>s)
=
P(X>t).
$$

---

# 8.3 Gamma — MEMORIZE

Canonical **shape–scale** parameterization:

$$
X\sim\operatorname{Gamma}(\alpha,\theta),
\qquad
\alpha,\theta>0.
$$

$$
\boxed{
f_X(x)
=
\frac{
x^{\alpha-1}e^{-x/\theta}
}{
\Gamma(\alpha)\theta^\alpha
},
\qquad x>0
}.
$$

$$
E[X]
=
\alpha\theta.
$$

$$
\operatorname{Var}(X)
=
\alpha\theta^2.
$$

MGF:

$$
M_X(t)
=
(1-\theta t)^{-\alpha},
\qquad
t<\frac{1}{\theta}.
$$

Rate translation:

$$
\theta=\frac{1}{\lambda}.
$$

Exponential is the special case:

$$
\alpha=1.
$$

---

# 8.4 Normal — MEMORIZE

Canonical notation:

$$
X\sim N(\mu,\sigma^2).
$$

PDF:

$$
f_X(x)
=
\frac{1}{\sigma\sqrt{2\pi}}
\exp\left[
-\frac{(x-\mu)^2}{2\sigma^2}
\right].
$$

Standardization:

$$
\boxed{
Z
=
\frac{X-\mu}{\sigma}
\sim N(0,1)
}.
$$

---

# 9. Multivariate Random Variables

## 9.1 Joint distribution — MEMORIZE

### Discrete

$$
p_{X,Y}(x,y)
=
P(X=x,Y=y).
$$

$$
\sum_x\sum_y
p_{X,Y}(x,y)
=
1.
$$

### Continuous

$$
\iint_{\mathcal X_{X,Y}}
f_{X,Y}(x,y)\,dx\,dy
=
1.
$$

Joint CDF:

$$
F_{X,Y}(x,y)
=
P(X\le x,Y\le y).
$$

---

## 9.2 Marginalization — MEMORIZE

### Discrete

$$
\boxed{
p_X(x)
=
\sum_y
p_{X,Y}(x,y)
}.
$$

### Continuous

$$
\boxed{
f_X(x)
=
\int
f_{X,Y}(x,y)\,dy
}.
$$

Bounds must come from the joint support.

---

## 9.2A Marginal CDF — MEMORIZE

From the joint CDF:

$$
\boxed{
F_X(x)
=
\lim_{y\to\infty}
F_{X,Y}(x,y)
}
$$

and

$$
\boxed{
F_Y(y)
=
\lim_{x\to\infty}
F_{X,Y}(x,y)
}.
$$

If the other variable has bounded support, the limit means evaluating the joint CDF beyond its upper support boundary.

---

## 9.3 Conditional distributions — MEMORIZE

### Discrete

$$
\boxed{
p_{X\mid Y}(x\mid y)
=
\frac{
p_{X,Y}(x,y)
}{
p_Y(y)
}
},
\qquad
p_Y(y)>0.
$$

### Continuous

$$
\boxed{
f_{X\mid Y}(x\mid y)
=
\frac{
f_{X,Y}(x,y)
}{
f_Y(y)
}
},
\qquad
f_Y(y)>0.
$$

---

## 9.3A Conditional CDF — MEMORIZE

For fixed $y$:

$$
\boxed{
F_{X\mid Y}(x\mid y)
=
P(X\le x\mid Y=y)
}.
$$

Discrete:

$$
F_{X\mid Y}(x\mid y)
=
\sum_{u\le x}
p_{X\mid Y}(u\mid y).
$$

Continuous:

$$
F_{X\mid Y}(x\mid y)
=
\int_{-\infty}^{x}
f_{X\mid Y}(u\mid y)\,du,
$$

with effective bounds determined by the conditional support.

---

## 9.4 Conditional expectation and variance — RECONSTRUCT

Calculate moments under the conditional distribution:

$$
E[X\mid Y=y]
=
\sum_x
x\,p_{X\mid Y}(x\mid y)
$$

or

$$
E[X\mid Y=y]
=
\int
x f_{X\mid Y}(x\mid y)\,dx.
$$

Then:

$$
\operatorname{Var}(X\mid Y=y)
=
E[X^2\mid Y=y]
-
E[X\mid Y=y]^2.
$$

---

## 9.5 Law of total expectation — MEMORIZE

$$
\boxed{
E[X]
=
E(E[X\mid Y])
}.
$$

---

## 9.6 Law of total variance — RECONSTRUCT

$$
\boxed{
\operatorname{Var}(X)
=
E[\operatorname{Var}(X\mid Y)]
+
\operatorname{Var}(E[X\mid Y])
}.
$$

---

## 9.7 Independence of random variables — MEMORIZE

Canonical distribution criterion:

### Discrete

$$
p_{X,Y}(x,y)
=
p_X(x)p_Y(y).
$$

### Continuous

$$
f_{X,Y}(x,y)
=
f_X(x)f_Y(y).
$$

Support compatibility matters.

> [!DANGER]
> Product-shaped support is not enough by itself to prove independence.

---

## 9.7A Joint MGF and joint moments — MEMORIZE

If the joint MGF exists on a neighborhood of $(0,0)$:

$$
\boxed{
M_{X,Y}(t_1,t_2)
=
E\!\left[
e^{t_1X+t_2Y}
\right]
}.
$$

Marginal MGFs:

$$
M_X(t_1)
=
M_{X,Y}(t_1,0),
$$

$$
M_Y(t_2)
=
M_{X,Y}(0,t_2).
$$

Mixed derivatives give joint raw moments:

$$
\boxed{
\left.
\frac{
\partial^{r+s}
}{
\partial t_1^r
\partial t_2^s
}
M_{X,Y}(t_1,t_2)
\right\rvert_{(0,0)}
=
E[X^rY^s]
}.
$$

In particular:

$$
\left.
\frac{
\partial^2 M_{X,Y}
}{
\partial t_1\partial t_2
}
\right\rvert_{(0,0)}
=
E[XY].
$$

When the joint MGF exists, independence is equivalent to

$$
\boxed{
M_{X,Y}(t_1,t_2)
=
M_X(t_1)M_Y(t_2)
}.
$$

---

## 9.8 Covariance and correlation — MEMORIZE

$$
\boxed{
\operatorname{Cov}(X,Y)
=
E[XY]-E[X]E[Y]
}.
$$

$$
\boxed{
\rho_{XY}
=
\frac{
\operatorname{Cov}(X,Y)
}{
\sigma_X\sigma_Y
}
}.
$$

Independence implies zero covariance when moments exist, but the converse is false in general.

---

## 9.9 Variance of linear combinations — RECONSTRUCT

$$
\operatorname{Var}(aX+bY)
=
a^2\operatorname{Var}(X)
+
b^2\operatorname{Var}(Y)
+
2ab\operatorname{Cov}(X,Y).
$$

---

## 9.10 Covariance matrix — MEMORIZE

$$
\boldsymbol\mu
=
E[\mathbf X].
$$

$$
\boxed{
\boldsymbol\Sigma
=
E[
(\mathbf X-\boldsymbol\mu)
(\mathbf X-\boldsymbol\mu)^\top
]
}.
$$

Linear transformation:

$$
\boxed{
\operatorname{Cov}(A\mathbf X)
=
A\boldsymbol\Sigma A^\top
}.
$$

For a scalar linear combination:

$$
\boxed{
\operatorname{Var}(\mathbf a^\top\mathbf X)
=
\mathbf a^\top
\boldsymbol\Sigma
\mathbf a
}.
$$

---

# 10. Mixtures / Parameter Compounding

Canonical CF2 meaning:

$$
\boxed{
f_X(x)
=
\int
f_{X\mid\Theta}(x\mid\theta)
g_\Theta(\theta)\,d\theta
}
$$

or the analogous sum in the discrete mixing case.

For a finite mixture with component indicator $C$ and

$$
P(C=i)=w_i,
\qquad
\sum_i w_i=1,
$$

the marginal law is

$$
\boxed{
f_X(x)
=
\sum_i
w_i f_i(x)
}
$$

for continuous components, with the analogous PMF form in the discrete case, and

$$
\boxed{
F_X(x)
=
\sum_i
w_iF_i(x)
}.
$$


Mean:

$$
E[X]
=
E(E[X\mid\Theta]).
$$

Variance:

$$
\operatorname{Var}(X)
=
E[\operatorname{Var}(X\mid\Theta)]
+
\operatorname{Var}(E[X\mid\Theta]).
$$

> [!DANGER]
> Do not automatically interpret “compound distribution” as a random-sum model. In the mapped CF2 source, the primary meaning is mixture / parameter compounding.

Specific mixture-pair identification is **REFERENCE ONLY**: derive the marginal distribution first, then match support and parameterization.

---

# 11. Multivariate Transformation

For a regular one-to-one transformation

$$
\mathbf Y=g(\mathbf X),
$$

with inverse

$$
\mathbf X=h(\mathbf Y),
$$

canonical density formula:

$$
\boxed{
f_{\mathbf Y}(\mathbf y)
=
f_{\mathbf X}(h(\mathbf y))
\left\lvert
\det
\frac{\partial\mathbf x}
{\partial\mathbf y}
\right\rvert
}.
$$

Mandatory:

1. determine transformed support;
2. use the **inverse** Jacobian;
3. verify normalization.

---

## 11.1 Auxiliary-variable method — RECONSTRUCT

When the target is one function of several variables, for example

$$
U=g(X,Y),
$$

a one-to-one transformation may require introducing an auxiliary variable:

$$
V=h(X,Y).
$$

Then:

```text
choose (U,V) so transformation is one-to-one
→ invert to (X,Y)
→ map transformed support
→ apply inverse Jacobian
→ marginalize out V
→ obtain distribution of U
```

The auxiliary variable is a construction device, not a new probability law.

---


# 12. Random Samples and Sampling Distributions

## 12.1 iid random sample — MEMORIZE

For iid

$$
X_1,\ldots,X_n
$$

with common PMF/PDF $f(x;\theta)$:

$$
\boxed{
f(\mathbf x;\theta)
=
\prod_{i=1}^{n}
f(x_i;\theta)
}.
$$

This product structure underlies likelihood and many sampling-distribution derivations.

---

## 12.2 Sample mean and sample variance — MEMORIZE

$$
\bar X
=
\frac{1}{n}
\sum_{i=1}^{n}X_i.
$$

$$
\boxed{
S^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}
(X_i-\bar X)^2
}.
$$

For iid observations with finite variance:

$$
E[\bar X]
=
\mu.
$$

$$
\boxed{
\operatorname{Var}(\bar X)
=
\frac{\sigma^2}{n}
}.
$$

$$
\operatorname{SE}(\bar X)
=
\frac{\sigma}{\sqrt{n}}.
$$

---

## 12.3 Finite population correction — REFERENCE ONLY

For simple random sampling without replacement from a finite population of size $N$:

$$
\operatorname{Var}(\bar X)
=
\frac{\sigma^2}{n}
\frac{N-n}{N-1}.
$$

Do not use this under ordinary iid / with-replacement sampling.

---

## 12.4 Difference of independent sample means — RECONSTRUCT

If samples are independent:

$$
E[\bar X_1-\bar X_2]
=
\mu_1-\mu_2.
$$

$$
\operatorname{Var}(\bar X_1-\bar X_2)
=
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}.
$$

---

# 13. Exact Sampling Pivots

# 13.1 Normal mean, known $\sigma$ — EXACT

If

$$
X_i\stackrel{\text{iid}}{\sim}N(\mu,\sigma^2),
$$

then

$$
\boxed{
Z
=
\frac{\bar X-\mu}
{\sigma/\sqrt{n}}
\sim N(0,1)
}.
$$

---

# 13.2 Normal variance — EXACT

If

$$
X_i\stackrel{\text{iid}}{\sim}N(\mu,\sigma^2),
$$

then:

$$
\boxed{
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi^2_{n-1}
}.
$$

Also:

$$
\bar X\perp S^2.
$$

---

# 13.3 Normal mean, unknown $\sigma$ — EXACT

For a Normal population:

$$
\boxed{
T
=
\frac{\bar X-\mu}
{S/\sqrt{n}}
\sim
t_{n-1}
}.
$$

---

# 13.4 Ratio of two independent Normal variances — EXACT

For independent Normal samples:

$$
\boxed{
\frac{
S_1^2/\sigma_1^2
}{
S_2^2/\sigma_2^2
}
\sim
F_{n_1-1,n_2-1}
}.
$$

Ratio orientation and degrees of freedom must move together.

---

# 14. CLT, Chebyshev, and LLN

## 14.1 Central Limit Theorem — ASYMPTOTIC

For iid observations with finite positive variance:

$$
\boxed{
\frac{\bar X-\mu}
{\sigma/\sqrt{n}}
\xrightarrow{d}
N(0,1)
}.
$$

Thus for sufficiently large $n$:

$$
\bar X
\approx
N\left(
\mu,
\frac{\sigma^2}{n}
\right).
$$

> [!IMPORTANT]
> Normal population → exact Normal sample mean.  
> Non-Normal population + large $n$ → CLT approximation.

---

## 14.2 Chebyshev inequality — BOUND

$$
\boxed{
P(
\lvert X-\mu\rvert
\ge\varepsilon
)
\le
\frac{\sigma^2}{\varepsilon^2}
}.
$$

For the sample mean:

$$
P(
\lvert\bar X-\mu\rvert
\ge\varepsilon
)
\le
\frac{\sigma^2}{n\varepsilon^2}.
$$

It is a bound, not an equality.

---

## 14.3 Weak Law of Large Numbers — ASYMPTOTIC

$$
\boxed{
\bar X_n
\xrightarrow{P}
\mu
}.
$$

Equivalent:

$$
P(
\lvert\bar X_n-\mu\rvert
\ge\varepsilon
)
\to0.
$$

> [!WARNING]
> **[TEXTBOOK-SUPPORT GAP]** The mapped official source supports the Weak Law formally. A full Strong Law theorem is not silently added here.

---

# 15. Parameter Estimation

## 15.1 Method of Moments — MEMORIZE workflow

For $k$ parameters:

1. compute the first $k$ theoretical moments;
2. equate them to sample moments;
3. solve;
4. check parameter domain.

Canonical sample raw moment:

$$
m_k
=
\frac{1}{n}
\sum_{i=1}^{n}X_i^k.
$$

Set:

$$
m_k
=
E_\theta[X^k].
$$

> [!DANGER]
> The denominator-$n$ sample moment is not the same object as unbiased sample variance.

---

## 15.2 Maximum Likelihood — MEMORIZE workflow

Likelihood:

$$
\boxed{
L(\theta;\mathbf x)
=
\prod_{i=1}^{n}
f(x_i;\theta)
}.
$$

Log-likelihood:

$$
\ell(\theta;\mathbf x)
=
\log L(\theta;\mathbf x).
$$

Workflow:

```text
write likelihood including support
→ log if convenient
→ differentiate when regular
→ solve score equation
→ check parameter domain
→ check boundary/support
→ verify global maximum
```

### High-risk special case: parameter-dependent support — MEMORIZE trigger

If the support depends on $\theta$, do **not** remove the support indicator before maximization.

Mental trigger:

> support depends on parameter → inspect boundary / order statistic

---

## 15.3 Normal variance MLE vs sample variance

Normal MLE:

$$
\boxed{
\hat\sigma^2_{\mathrm{MLE}}
=
\frac{1}{n}
\sum_{i=1}^{n}
(X_i-\bar X)^2
}.
$$

Unbiased sample variance:

$$
\boxed{
S^2
=
\frac{1}{n-1}
\sum_{i=1}^{n}
(X_i-\bar X)^2
}.
$$

These are genuinely distinct quantities.

---

## 15.4 MLE invariance — RECONSTRUCT

If $\hat\theta$ is the MLE of $\theta$, then under the source-supported invariance property, the MLE of $g(\theta)$ is obtained from:

$$
g(\hat\theta).
$$

This does not imply unbiasedness.

---

## 15.5 Bayesian estimation — MEMORIZE structure

Prior:

$$
\pi(\theta).
$$

Likelihood:

$$
L(\theta;\mathbf x).
$$

Posterior:

$$
\boxed{
\pi(\theta\mid\mathbf x)
\propto
L(\theta;\mathbf x)\pi(\theta)
}.
$$

For a continuous parameter:

$$
\pi(\theta\mid\mathbf x)
=
\frac{
L(\theta;\mathbf x)\pi(\theta)
}{
\int
L(u;\mathbf x)\pi(u)\,du
}.
$$

> [!DANGER]
> Likelihood is not a normalized probability distribution over $\theta$.

---

## 15.6 Normal–Normal conjugate update — RECONSTRUCT

When the mapped Bayesian model is Normal with known sampling variance and a Normal prior, the safest reconstruction is in **precision** form.

If

$$
\theta\sim N(\mu_0,\tau_0^2)
$$

and, conditionally on $\theta$,

$$
X_i\stackrel{\text{iid}}{\sim}N(\theta,\sigma^2),
$$

then posterior precision is

$$
\boxed{
\frac{1}{\tau_n^2}
=
\frac{1}{\tau_0^2}
+
\frac{n}{\sigma^2}
}
$$

and posterior mean is the precision-weighted average

$$
\boxed{
\mu_n
=
\tau_n^2
\left(
\frac{\mu_0}{\tau_0^2}
+
\frac{n\bar x}{\sigma^2}
\right)
}.
$$

Use only when this Normal–Normal model is explicitly the one being used.

---


# 16. Estimator Properties

## 16.1 Bias and unbiasedness — MEMORIZE

$$
\operatorname{Bias}(\hat\theta)
=
E[\hat\theta]-\theta.
$$

Unbiased:

$$
E[\hat\theta]
=
\theta.
$$

---

## 16.2 Mean square error — MEMORIZE / reconstruct decomposition

$$
\boxed{
\operatorname{MSE}(\hat\theta)
=
E[
(\hat\theta-\theta)^2
]
}.
$$

$$
\boxed{
\operatorname{MSE}(\hat\theta)
=
\operatorname{Var}(\hat\theta)
+
\operatorname{Bias}(\hat\theta)^2
}.
$$

---

## 16.3 Consistency — MEMORIZE definition

$$
\boxed{
\hat\theta_n
\xrightarrow{P}
\theta
}.
$$

A source-supported sufficient route is:

- bias tends to zero / asymptotically unbiased;
- variance tends to zero.

Do not confuse this sufficient condition with the definition.

---

## 16.4 Sufficiency — MEMORIZE criterion

Factorization theorem form:

$$
\boxed{
f(\mathbf x;\theta)
=
g(T(\mathbf x),\theta)
h(\mathbf x)
}.
$$

For sufficiency:

- $g$ contains the parameter dependence and depends on data only through $T$;
- $h$ does not depend on $\theta$.

---

## 16.5 Efficiency / CRLB — REFERENCE ONLY

Use only with the source-stated regularity conditions and clearly label the orientation of any relative-efficiency ratio.

Do not memorize an unlabeled variance ratio.

---

## 16.5A Relative efficiency and Cramér–Rao — REFERENCE ONLY

For two unbiased estimators, never quote an unlabeled variance ratio. Under Miller's orientation, the efficiency of $\hat\theta_2$ relative to $\hat\theta_1$ is

$$
\boxed{
\operatorname{Eff}
(\hat\theta_2\text{ relative to }\hat\theta_1)
=
\frac{
\operatorname{Var}(\hat\theta_1)
}{
\operatorname{Var}(\hat\theta_2)
}
}.
$$

Under the regularity conditions used in the mapped source, an unbiased estimator satisfies the Cramér–Rao lower bound

$$
\boxed{
\operatorname{Var}(\hat\theta)
\ge
\frac{
1
}{
n\,E_\theta
\left[
\left(
\frac{\partial}{\partial\theta}
\log f(X;\theta)
\right)^2
\right]
}
}.
$$

If an unbiased estimator attains the bound under the stated conditions, it is minimum-variance unbiased in that setting.

> [!DANGER]
> CRLB is not a universal inequality without its regularity assumptions, and relative-efficiency orientation must always be labeled.

---

## 16.6 Completeness — SOURCE GAP

> [!WARNING]
> **[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]** Completeness is in syllabus scope, but the mapped official source does not provide enough foundational mechanics for a safe canonical formula/theorem. No external theorem is silently inserted.

---

# 17. Confidence Intervals

# 17.1 Universal CI reconstruction protocol

```text
target parameter
→ assumptions
→ pivot
→ reference distribution
→ central probability 1−α
→ solve inequality for parameter
→ substitute observed statistics
```

---

## 17.2 One mean, known $\sigma$ — EXACT for Normal population

$$
\boxed{
\bar x
\pm
z_{1-\alpha/2}
\frac{\sigma}{\sqrt{n}}
}.
$$

For non-Normal large samples, the same structure is CLT-based **APPROX**.

---

## 17.3 One mean, unknown $\sigma$ — EXACT for Normal population

$$
\boxed{
\bar x
\pm
t_{1-\alpha/2,n-1}
\frac{s}{\sqrt{n}}
}.
$$

---

## 17.4 Difference of two independent means, known variances

$$
(\bar x_1-\bar x_2)
\pm
z_{1-\alpha/2}
\sqrt{
\frac{\sigma_1^2}{n_1}
+
\frac{\sigma_2^2}{n_2}
}.
$$

Exact when the underlying Normal assumptions support the exact Normal sampling result; otherwise large-sample usage is approximate.

---

## 17.5 Pooled two-sample $t$ — EXACT under equal-variance Normal model

Pooled variance:

$$
\boxed{
S_p^2
=
\frac{
(n_1-1)S_1^2
+
(n_2-1)S_2^2
}{
n_1+n_2-2
}
}.
$$

CI:

$$
\boxed{
(\bar x_1-\bar x_2)
\pm
t_{1-\alpha/2,n_1+n_2-2}
s_p
\sqrt{
\frac{1}{n_1}
+
\frac{1}{n_2}
}
}.
$$

Assumptions:

- independent samples;
- Normal populations;
- equal population variances.

---

## 17.6 One proportion — APPROX

$$
\boxed{
\hat p
\pm
z_{1-\alpha/2}
\sqrt{
\frac{
\hat p(1-\hat p)
}{n}
}
}.
$$

Do not use the null value $p_0$ in the CI standard error.

---

## 17.7 Difference of two proportions — APPROX

$$
\boxed{
(\hat p_1-\hat p_2)
\pm
z_{1-\alpha/2}
\sqrt{
\frac{
\hat p_1(1-\hat p_1)
}{n_1}
+
\frac{
\hat p_2(1-\hat p_2)
}{n_2}
}
}.
$$

---

## 17.8 Variance CI — RECONSTRUCT from Chi-square pivot

From

$$
\frac{(n-1)S^2}{\sigma^2}
\sim
\chi^2_{n-1},
$$

using the canonical lower-tail convention:

$$
\boxed{
\frac{
(n-1)s^2
}{
\chi^2_{1-\alpha/2,n-1}
}
\le
\sigma^2
\le
\frac{
(n-1)s^2
}{
\chi^2_{\alpha/2,n-1}
}
}.
$$

**EXACT** for a Normal population.

---

## 17.9 Ratio of variances CI — RECONSTRUCT from F pivot

Start from:

$$
R
=
\frac{
S_1^2/\sigma_1^2
}{
S_2^2/\sigma_2^2
}
\sim
F_{\nu_1,\nu_2},
$$

where:

$$
\nu_1=n_1-1,
\qquad
\nu_2=n_2-1.
$$

Use:

$$
P\left(
F_{\alpha/2;\nu_1,\nu_2}
\le R\le
F_{1-\alpha/2;\nu_1,\nu_2}
\right)
=
1-\alpha,
$$

then solve for:

$$
\frac{\sigma_1^2}{\sigma_2^2}.
$$

> [!DANGER]
> Do not memorize a mixed upper-tail/lower-tail endpoint formula. Reconstruct from the pivot.

---

# 18. Hypothesis Testing

## 18.1 Universal decision protocol — MEMORIZE

```text
parameter claim
→ define H0 and H1
→ tail direction from H1
→ choose test statistic
→ determine null distribution
→ compute statistic / p-value
→ reject or do not reject H0
```

Type I error:

$$
\alpha
=
P(\text{reject }H_0\mid H_0\text{ true}).
$$

For a simple alternative:

$$
\beta
=
P(\text{do not reject }H_0\mid H_1\text{ true}).
$$

Power function:

$$
\boxed{
\gamma(\theta)
=
P_\theta(\text{reject }H_0)
}.
$$

For a simple alternative:

$$
\gamma(\theta_1)=1-\beta(\theta_1).
$$

---

## 18.2 p-value

The p-value is a tail probability computed **under the null model**.

Reject when:

$$
\text{p-value}\le\alpha.
$$

> [!DANGER]
> p-value is not $P(H_0\text{ true}\mid\text{data})$.

---

## 18.3 One-sample mean, known $\sigma$

Under:

$$
H_0:\mu=\mu_0,
$$

use:

$$
\boxed{
Z
=
\frac{
\bar X-\mu_0
}{
\sigma/\sqrt{n}
}
}.
$$

Exact under Normal population assumptions; large-sample use may be approximate outside Normality.

---

## 18.4 One-sample mean, unknown $\sigma$, Normal population — EXACT

$$
\boxed{
T
=
\frac{
\bar X-\mu_0
}{
S/\sqrt{n}
}
\sim
t_{n-1}
}.
$$

---

## 18.5 Two independent means — RECONSTRUCT

Known population variances:

$$
Z
=
\frac{
(\bar X_1-\bar X_2)-\delta_0
}{
\sqrt{
\sigma_1^2/n_1
+
\sigma_2^2/n_2
}
}.
$$

Large unknown-variance version replaces population variances by sample variances and is **APPROX**.

Pooled $t$ is used only under equal-variance Normal assumptions.

---

## 18.6 Paired samples

Define:

$$
D_i=X_i-Y_i.
$$

Then reduce to a one-sample mean problem on the differences:

$$
T
=
\frac{
\bar D-\delta_0
}{
S_D/\sqrt{n}
}.
$$

> [!DANGER]
> Paired data are not an independent two-sample problem.

---

## 18.7 One population variance — EXACT for Normal population

Under:

$$
H_0:\sigma^2=\sigma_0^2,
$$

use:

$$
\boxed{
\chi^2
=
\frac{
(n-1)S^2
}{
\sigma_0^2
}
}.
$$

Reference distribution:

$$
\chi^2_{n-1}.
$$

---

## 18.8 Ratio of two variances — EXACT for independent Normal samples

Under:

$$
H_0:
\sigma_1^2=\sigma_2^2,
$$

the standard ratio may be written:

$$
F
=
\frac{S_1^2}{S_2^2}
$$

with numerator orientation chosen consistently with the alternative and with:

$$
\nu_1=n_1-1,
\qquad
\nu_2=n_2-1.
$$

If the ratio is inverted, the degrees of freedom must also be inverted.

---

## 18.9 One proportion

Exact route:

> use Binomial tail probabilities under $H_0:p=p_0$.

Large-sample Normal approximation:

$$
\boxed{
Z
=
\frac{
\hat p-p_0
}{
\sqrt{
p_0(1-p_0)/n
}
}
}.
$$

> [!IMPORTANT]
> CI SE uses $\hat p$.  
> Null-test SE uses $p_0$.

---

## 18.10 Difference of two proportions — APPROX

For two independent Binomial samples and the equality null

$$
H_0:p_1=p_2,
$$

use the pooled estimator

$$
\boxed{
\hat p
=
\frac{x_1+x_2}{n_1+n_2}
}.
$$

The large-sample test statistic is

$$
\boxed{
Z
=
\frac{
\hat p_1-\hat p_2
}{
\sqrt{
\hat p(1-\hat p)
\left(
\frac{1}{n_1}
+
\frac{1}{n_2}
\right)
}
}
}.
$$

> [!IMPORTANT]
> The equality test uses a **pooled** null standard error. The confidence interval for $p_1-p_2$ uses separate sample-proportion standard errors.

---

## 18.11 Equality of $k$ proportions — APPROX

For independent Binomial groups under

$$
H_0:
p_1=p_2=\cdots=p_k,
$$

use the pooled estimator

$$
\hat p
=
\frac{
\sum_{i=1}^{k}x_i
}{
\sum_{i=1}^{k}n_i
}.
$$

The mapped-source statistic is

$$
\boxed{
\chi^2
=
\sum_{i=1}^{k}
\frac{
(x_i-n_i\hat p)^2
}{
n_i\hat p(1-\hat p)
}
}
\approx
\chi^2_{k-1}.
$$

This is a large-sample approximation.

---


# 19. High-Risk Exam Traps

1. **Geometric:** trials vs failures.
2. **Negative Binomial:** trial number of $r$th success vs number of failures.
3. **Gamma / Exponential:** scale vs rate.
4. **Normal:** verify whether the second argument is variance or SD.
5. **$S^2$ vs variance MLE:** $n-1$ vs $n$.
6. **Discrete endpoints:** strict vs inclusive inequalities matter.
7. **Continuous endpoints:** individual points carry probability zero.
8. **Joint support:** wrong region means wrong answer even if integration is perfect.
9. **Conditional density:** denominator is the marginal of the conditioning variable.
10. **Independence:** zero covariance does not imply independence.
11. **Jacobian:** use inverse Jacobian in the canonical density formula.
12. **CLT:** approximation is not an exact finite-sample law.
13. **$Z$ vs $t$:** unknown $\sigma$ under exact Normal small-sample inference means $t$.
14. **Variance inference:** exact Chi-square/F results require Normal population assumptions.
15. **F ratio:** swapping numerator swaps the degrees of freedom.
16. **Chi-square/F quantiles:** canonical system uses lower-tail quantiles.
17. **Proportion CI vs test:** use $\hat p$ vs $p_0$ in the SE.
18. **MLE:** score equation root is only a candidate; check support/boundary/global maximum.
19. **Parameter-dependent support:** do not differentiate away the support condition.
20. **Bayesian estimation:** likelihood is not posterior.
21. **Confidence interval:** frequentist coverage is not posterior probability.
22. **p-value:** not probability that $H_0$ is true.
23. **Paired data:** analyze differences, not two independent samples.
24. **Counting ratio:** only under equally likely elementary outcomes.
25. **Compound distribution:** CF2 primary meaning is mixture / parameter compounding.

---

# 20. Reconstruction Map

## Bayes

$$
\text{conditional probability}
\rightarrow
\text{joint path}
\rightarrow
\text{total probability denominator}.
$$

## Variance

$$
E[(X-\mu)^2]
\rightarrow
E[X^2]-E[X]^2.
$$

## Mixture variance

$$
\text{condition}
\rightarrow
\text{within variance}
+
\text{between variance}.
$$

## Difference-of-means variance

$$
\operatorname{Var}(A-B)
\rightarrow
\operatorname{Var}(A)
+
\operatorname{Var}(B)
-
2\operatorname{Cov}(A,B).
$$

## Chi-square / F confidence intervals

$$
\text{pivot}
\rightarrow
\text{central probability}
\rightarrow
\text{solve for parameter}.
$$

## Tests

$$
H_0/H_1
\rightarrow
\text{null-centered pivot}
\rightarrow
\text{reference distribution}
\rightarrow
\text{tail}.
$$

---

# 21. Final Sanity Checklist

Before finalizing an answer, check:

- Does the probability lie in $[0,1]$?
- Does the PMF/PDF normalize?
- Is the support correct?
- Does the CDF increase from $0$ to $1$?
- Is variance nonnegative?
- Are units consistent?
- Is the parameterization explicitly declared?
- Is the formula exact, approximate, a bound, or asymptotic?
- Are the degrees of freedom correct?
- Is the correct tail being used?
- Is the F numerator consistent with its degrees of freedom?
- Are CI lower and upper endpoints in the correct order?
- Has any $n$ vs $n-1$ switch occurred?
- For a test, does the tail direction match $H_1$?
- For a transformation, has the transformed support been checked?

---

# 22. Reference-Only / Source-Gap Appendix

## 22.1 Finite population correction

Reference when finite-population sampling without replacement is explicit.

## 22.2 Specific mixture-pair identities

Derive and parameter-match before naming the result.

## 22.3 Beta–Binomial conjugacy

Legitimate in the mapped Bayesian-estimation context, but generic Beta is not promoted as a Topik 2 named-distribution target.

## 22.4 CRLB / relative efficiency

Reference with source-stated regularity conditions and explicit ratio orientation.

## 22.5 Strong LLN

**[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]**

No external canonical theorem inserted.

## 22.6 Completeness

**[SYLLABUS GAP / TEXTBOOK-SUPPORT GAP]**

No unsupported formula/theorem inserted.

## 22.7 PGF depth

**[SOURCE DEPTH GAP]**

Definition retained; deeper theorem set not silently imported.

---

# 23. Final Freeze Status

This document is the **CF2 Canonical Master Cheat Sheet FINAL** and is now the **FROZEN PRIMARY REFERENCE** for canonical CF2 notation and formula usage. Stage 6 coverage gaps were patched before freeze, and Stage 7 completed manual MathJax/LaTeX and renderer-risk QA.

Freeze basis:

1. all 28 Silabus CF2 subtopics validated in Stage 6;
2. F01–F82 coverage validated;
3. Stage 3 canonical notation applied consistently;
4. exact / approximate / bound / asymptotic distinctions preserved;
5. remaining source gaps explicitly retained;
6. Stage 7 manual MathJax/LaTeX and Markdown-renderer QA completed.


---

# 24. Canonical Freeze Control

**Freeze status:** **FROZEN PRIMARY REFERENCE**

The following conventions must not be changed in downstream CF2 notes, worked solutions, formula cards, or exam summaries unless the reconciliation process is explicitly reopened:

- sample space: $\Omega$;
- support: $\mathcal X$;
- PMF: $p_X(x)$;
- PDF: $f_X(x)$;
- CDF: $F_X(x)$;
- survival: $\bar F_X(x)$;
- sample variance: $S^2$ with denominator $n-1$;
- Geometric: trial number of first success;
- Negative Binomial: trial number of the $r$th success;
- Exponential: scale/mean $\theta$;
- Gamma: shape $\alpha$, scale $\theta$;
- Normal: $N(\mu,\sigma^2)$;
- covariance matrix: $\boldsymbol\Sigma$;
- degrees of freedom: $\nu$;
- p-value: written as **p-value**, not bare $p$;
- critical values: lower-tail quantile convention
  $z_p$, $t_{p,\nu}$, $\chi^2_{p,\nu}$, and $F_{p;\nu_1,\nu_2}$.

If a source uses another convention, translate it into this system **before calculation**.

## Remaining source gaps

The freeze does **not** silently resolve the following:

1. **Strong Law of Large Numbers** — syllabus mentions it, but mapped official-source support is insufficient for a formal canonical theorem.
2. **Completeness** — syllabus scope exists, but the mapped official source does not provide enough foundational mechanics for a safe theorem/formula.
3. **PGF depth beyond the retained factorial-moment layer** — no broader external theorem set is imported.

These items remain explicitly marked and should not be filled from memory without reopening source authorization.
