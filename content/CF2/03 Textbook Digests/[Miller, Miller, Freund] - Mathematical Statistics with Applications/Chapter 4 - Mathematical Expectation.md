# Miller Chapter 4 — Mathematical Expectation

> **Source:** Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 4  
> **Peran dalam CF2:** Condensed Textbook Note — mengikuti struktur dan reasoning textbook.  
> **Silabus terkait:** [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]], [[2.3 Fungsi Pembangkit]], [[3.4 Nilai Harapan dan Variansi Bersyarat]], [[3.5 Independensi dan Korelasi]], [[3.6 Matriks Variansi-Kovariansi]]

---

## Chapter Map

Chapter 3 menjelaskan bagaimana probability tersebar. Chapter 4 bertanya:

> **Bagaimana distribution tersebut diringkas menjadi karakteristik numerik?**

Perkembangan utamanya:

$$
\text{expected value}
\rightarrow
E[g(X)]
\rightarrow
\text{moments}
\rightarrow
\text{mean/variance}
\rightarrow
\text{Chebyshev}
\rightarrow
\text{MGF}
\rightarrow
\text{product moments/covariance}
\rightarrow
\text{linear combinations}
\rightarrow
\text{conditional expectation}.
$$

Chapter ini sangat penting karena formula sampling distributions dan statistical inference pada chapter berikutnya dibangun dari hasil-hasil ini.

---

# 1. Introduction

[CF2 SUPPORTING CONTEXT]

Miller memperkenalkan expectation melalui games of chance.

Jika sebuah ticket memiliki kemungkinan memperoleh beberapa nilai payoff, average payoff dalam repeated plays dihitung dengan menjumlahkan

$$
(\text{payoff})(\text{probability}).
$$

Dari sinilah muncul konsep mathematical expectation.

[IMPORTANT DISTINCTION]

“Expected value” tidak berarti nilai yang paling mungkin terjadi, dan tidak harus merupakan nilai yang benar-benar dapat diamati.

Contoh textbook: expected number of white-cord television sets dapat sama dengan $1/2$, walaupun setengah television set jelas tidak mungkin dikirim. Nilai tersebut adalah **long-run average**.

---

# 2. The Expected Value of a Random Variable

[CORE CF2]

## 2.1 Definisi

Jika $X$ discrete dengan PMF $f(x)$,

$$
\boxed{
E(X)=\sum_x x f(x)
}
$$

asalkan penjumlahan tersebut konvergen.

Jika $X$ continuous dengan PDF $f(x)$,

$$
\boxed{
E(X)=
\int_{-\infty}^{\infty}
x f(x)\,dx
}
$$

asalkan integral tersebut ada.

[ASSUMPTION]

Keberadaan expectation tidak otomatis. Miller secara eksplisit menyatakan bahwa jika sum/integral tidak ada, expectation undefined.

---

## 2.2 Contoh textbook: hypergeometric expectation

Sebuah lot terdiri dari 12 television sets, 2 di antaranya memiliki white cords. Tiga set dipilih secara random.

Jika

$$
X=\text{number of white-cord sets selected},
$$

maka support-nya:

$$
x=0,1,2.
$$

PMF diperoleh secara kombinatorial:

$$
f(x)
=
\frac{
\binom{2}{x}
\binom{10}{3-x}
}{
\binom{12}{3}
},
\qquad x=0,1,2.
$$

Textbook memberikan:

$$
f(0)=\frac{6}{11},
\qquad
f(1)=\frac{9}{22},
\qquad
f(2)=\frac{1}{22}.
$$

Maka

$$
E(X)
=
0\cdot \frac{6}{11}
+
1\cdot\frac{9}{22}
+
2\cdot\frac{1}{22}
=
\frac12.
$$

Interpretasi: repeated shipments dengan mekanisme yang sama akan mempunyai rata-rata $0.5$ white-cord set per shipment.

---

## 2.3 Expected value dari fungsi $g(X)$

Sering kali target bukan $X$, melainkan

$$
Y=g(X).
$$

Kita tidak perlu mencari distribution dari $Y$ terlebih dahulu.

Jika $X$ discrete,

$$
\boxed{
E[g(X)]
=
\sum_x g(x)f(x)
}
$$

dan jika $X$ continuous,

$$
\boxed{
E[g(X)]
=
\int_{-\infty}^{\infty}
g(x)f(x)\,dx.
}
$$

Ini adalah salah satu reusable results terpenting dalam chapter.

### Mengapa hasil ini masuk akal?

Jika beberapa nilai $x$ dipetakan ke nilai $g(x)$ yang sama, probability mass-nya dapat digabung. Menjumlahkan $g(x)f(x)$ secara langsung menghasilkan expectation yang sama tanpa perlu terlebih dahulu membentuk PMF dari $g(X)$.

---

## 2.4 Contoh: $g(X)=2X^2+1$

Untuk balanced die,

$$
P(X=x)=\frac16,\qquad x=1,\ldots,6.
$$

Maka

$$
E(2X^2+1)
=
\sum_{x=1}^6
(2x^2+1)\frac16
=
\frac{94}{3}.
$$

Pelajarannya: transformasikan quantity terlebih dahulu, lalu hitung average terhadap original distribution.

---

## 2.5 Linearity of expectation

Jika $a,b$ constants,

$$
\boxed{
E(aX+b)=aE(X)+b.
}
$$

Konsekuensi langsung:

$$
E(aX)=aE(X),
$$

dan untuk constant $b$,

$$
E(b)=b.
$$

Lebih umum,

$$
\boxed{
E\left[
\sum_{i=1}^{n}c_i g_i(X)
\right]
=
\sum_{i=1}^{n}
c_i E[g_i(X)].
}
$$

[IMPORTANT DISTINCTION]

Linearity of expectation **tidak membutuhkan independence**.

Ini nantinya menjadi sangat penting untuk sums of random variables.

---

## 2.6 Polynomial functions

Miller menunjukkan bahwa ekspansi dapat dipakai untuk menghitung expectation dari polynomial.

Contoh:

$$
E[(2X+1)^2]
=
4E(X^2)+4E(X)+1.
$$

Secara umum, dari binomial theorem,

$$
E[(aX+b)^n]
=
\sum_{i=0}^{n}
\binom{n}{i}
a^{n-i}b^i
E(X^{n-i}).
$$

Ini menghubungkan expected values of transformations dengan moments.

---

## 2.7 Functions of several random variables

Jika $X,Y$ discrete dengan joint PMF $f(x,y)$,

$$
\boxed{
E[g(X,Y)]
=
\sum_x\sum_y
g(x,y)f(x,y).
}
$$

Jika continuous dengan joint PDF,

$$
\boxed{
E[g(X,Y)]
=
\int_{-\infty}^{\infty}
\int_{-\infty}^{\infty}
g(x,y)f(x,y)\,dx\,dy.
}
$$

[IMPORTANT DISTINCTION]

Untuk nonrectangular support, integration/summation harus dibatasi pada valid joint region.

General linearity tetap berlaku:

$$
E\left[
\sum_i c_i g_i(X_1,\ldots,X_k)
\right]
=
\sum_i c_i E[g_i(X_1,\ldots,X_k)].
$$

---

# 3. Moments

[CORE CF2]

Moments memberikan ringkasan numerik sistematis dari distribution.

## 3.1 Moments about the origin

$r$-th moment about the origin:

$$
\boxed{
\mu_r'
=
E(X^r).
}
$$

Discrete:

$$
\mu_r'
=
\sum_x x^r f(x).
$$

Continuous:

$$
\mu_r'
=
\int_{-\infty}^{\infty}
x^r f(x)\,dx.
$$

Special cases:

$$
\mu_0'=1,
$$

dan

$$
\mu_1'=E(X).
$$

## 3.2 Mean

Miller memberi simbol khusus:

$$
\boxed{
\mu=\mu_1'=E(X).
}
$$

Mean menggambarkan location / center of gravity dari distribution.

## 3.3 Moments about the mean

$r$-th central moment:

$$
\boxed{
\mu_r
=
E[(X-\mu)^r].
}
$$

Discrete:

$$
\mu_r
=
\sum_x
(x-\mu)^r f(x),
$$

continuous:

$$
\mu_r
=
\int_{-\infty}^{\infty}
(x-\mu)^r f(x)\,dx.
$$

Basic results:

$$
\mu_0=1,
$$

$$
\mu_1=0.
$$

## 3.4 Variance

Second central moment adalah variance:

$$
\boxed{
\sigma^2
=
\operatorname{Var}(X)
=
E[(X-\mu)^2].
}
$$

Standard deviation:

$$
\boxed{
\sigma=\sqrt{\operatorname{Var}(X)}.
}
$$

Miller menggunakan histogram dengan mean sama tetapi variance berbeda untuk menunjukkan bahwa variance mengukur spread:

- $\sigma^2$ lebih kecil $\rightarrow$ mass lebih terkonsentrasi dekat mean;
- $\sigma^2$ lebih besar $\rightarrow$ distribution lebih menyebar.

## 3.5 Computing formula for variance

Dengan mengembangkan square,

$$
\operatorname{Var}(X)
=
E(X^2-2\mu X+\mu^2).
$$

Dengan linearity:

$$
\operatorname{Var}(X)
=
E(X^2)-2\mu E(X)+\mu^2.
$$

Karena $E(X)=\mu$,

$$
\boxed{
\operatorname{Var}(X)
=
E(X^2)-[E(X)]^2
=
\mu_2'-\mu^2.
}
$$

Ini biasanya merupakan cara komputasi yang lebih cepat.

[IMPORTANT DISTINCTION]

$$
E(X^2)\neq [E(X)]^2
$$

secara umum.

Variance adalah selisih keduanya.

## 3.6 Contoh: balanced die

Untuk $X\in\{1,\ldots,6\}$,

$$
\mu=E(X)=\frac72.
$$

Kemudian

$$
E(X^2)
=
\frac{1^2+\cdots+6^2}{6}
=
\frac{91}{6}.
$$

Sehingga

$$
\operatorname{Var}(X)
=
\frac{91}{6}
-
\left(\frac72\right)^2
=
\frac{35}{12}.
$$

## 3.7 Variance under linear transformation

Jika

$$
Y=aX+b,
$$

maka

$$
\boxed{
\operatorname{Var}(aX+b)
=
a^2\operatorname{Var}(X).
}
$$

Dua implikasi:

1. shift $+b$ tidak mengubah spread;
2. scaling dengan $a$ mengalikan variance dengan $a^2$.

Sehingga standard deviation berubah menurut

$$
\sigma_Y=|a|\sigma_X.
$$

---

# 4. Chebyshev’s Theorem

[CORE CF2]

Chebyshev memberikan bound pada konsentrasi di sekitar mean **tanpa perlu mengetahui bentuk distribution secara spesifik**.

Jika $X$ mempunyai mean $\mu$ dan standard deviation $\sigma$, maka untuk $k>0$,

$$
\boxed{
P(|X-\mu|<k\sigma)
\ge
1-\frac1{k^2}.
}
$$

Equivalent tail form:

$$
\boxed{
P(|X-\mu|\ge k\sigma)
\le
\frac1{k^2}.
}
$$

[ASSUMPTION]

Mean dan variance harus ada; untuk bound yang informatif biasanya $k>1$.

## 4.1 Intuisi proof

Variance adalah weighted average dari squared distance terhadap mean:

$$
\sigma^2
=
E[(X-\mu)^2].
$$

Pada tail region

$$
|X-\mu|\ge k\sigma,
$$

kita mempunyai

$$
(X-\mu)^2\ge k^2\sigma^2.
$$

Jika terlalu banyak probability mass berada di tail tersebut, expectation dari squared distance akan melebihi $\sigma^2$. Dari argument inilah upper bound $1/k^2$ muncul.

## 4.2 Standard benchmark

Untuk $k=2$:

$$
P(|X-\mu|<2\sigma)\ge \frac34.
$$

Untuk $k=3$:

$$
P(|X-\mu|<3\sigma)\ge \frac89.
$$

Untuk $k=5$:

$$
P(|X-\mu|<5\sigma)\ge \frac{24}{25}.
$$

[IMPORTANT DISTINCTION]

Chebyshev memberi **lower bound**, bukan exact probability.

Jika distribution diketahui, exact probability dapat jauh lebih besar.

Miller menunjukkan sebuah example dengan exact probability sekitar $0.96$ untuk interval $\mu\pm2\sigma$, sedangkan Chebyshev hanya menjamin minimal $0.75$.

---

# 5. Moment-Generating Functions

[CORE CF2]

MGF menyediakan metode alternatif untuk memperoleh moments dan, pada chapter berikutnya, sangat berguna untuk sums dan distribution identification.

## 5.1 Definisi

$$
\boxed{
M_X(t)
=
E(e^{tX}).
}
$$

Discrete:

$$
M_X(t)
=
\sum_x e^{tx}f(x).
$$

Continuous:

$$
M_X(t)
=
\int_{-\infty}^{\infty}
e^{tx}f(x)\,dx.
$$

[ASSUMPTION]

MGF digunakan hanya **ketika exists**, biasanya untuk $t$ pada neighborhood di sekitar $0$.

## 5.2 Mengapa disebut “moment-generating”?

Gunakan Maclaurin expansion:

$$
e^{tx}
=
1+tx+\frac{t^2x^2}{2!}
+\frac{t^3x^3}{3!}
+\cdots.
$$

Taking expectation:

$$
M_X(t)
=
1+\mu_1't
+
\mu_2'\frac{t^2}{2!}
+
\mu_3'\frac{t^3}{3!}
+\cdots.
$$

Karena itu coefficient berkaitan langsung dengan moments about origin.

Equivalent derivative rule:

$$
\boxed{
M_X^{(r)}(0)
=
\mu_r'
=
E(X^r).
}
$$

Khususnya:

$$
E(X)=M_X'(0),
$$

$$
E(X^2)=M_X''(0).
$$

Maka:

$$
\operatorname{Var}(X)
=
M_X''(0)-[M_X'(0)]^2.
$$

## 5.3 Contoh textbook: exponential-shaped density

Untuk

$$
f(x)=e^{-x},
\qquad x>0,
$$

$$
M_X(t)
=
\int_0^\infty
e^{tx}e^{-x}\,dx
=
\int_0^\infty
e^{-(1-t)x}\,dx.
$$

Integral ada jika

$$
t<1,
$$

dan

$$
\boxed{
M_X(t)=\frac1{1-t}.
}
$$

Maclaurin series:

$$
\frac1{1-t}
=
1+t+t^2+t^3+\cdots.
$$

Mencocokkan dengan

$$
1+\mu_1't
+
\mu_2'\frac{t^2}{2!}
+\cdots
$$

memberikan

$$
\boxed{
\mu_r'=r!.
}
$$

## 5.4 Transformation rules for MGF

Miller memberikan rules penting.

Untuk constant $a$,

$$
\boxed{
M_{X+a}(t)
=
e^{at}M_X(t).
}
$$

Untuk scaling $bX$,

$$
\boxed{
M_{bX}(t)
=
M_X(bt).
}
$$

Untuk affine transform

$$
Y=\frac{X+a}{b},
$$

$$
\boxed{
M_Y(t)
=
e^{at/b}
M_X\left(\frac{t}{b}\right).
}
$$

Semua formula tersebut berasal langsung dari definition $E(e^{tY})$.

---

# 6. Product Moments

[CORE CF2]

Untuk dua random variables, moments dapat melibatkan powers dari keduanya sekaligus.

## 6.1 Product moments about the origin

$$
\boxed{
\mu_{r,s}'
=
E(X^rY^s).
}
$$

Discrete:

$$
\mu_{r,s}'
=
\sum_x\sum_y
x^ry^s f(x,y).
$$

Continuous:

$$
\mu_{r,s}'
=
\iint
x^ry^s f(x,y)\,dx\,dy.
$$

Special cases:

$$
\mu_{1,0}'=E(X)=\mu_X,
$$

$$
\mu_{0,1}'=E(Y)=\mu_Y.
$$

## 6.2 Product moments about the means

$$
\boxed{
\mu_{r,s}
=
E[(X-\mu_X)^r(Y-\mu_Y)^s].
}
$$

Kasus paling penting adalah $r=s=1$.

## 6.3 Covariance

Miller mendefinisikan

$$
\boxed{
\operatorname{Cov}(X,Y)
=
E[(X-\mu_X)(Y-\mu_Y)].
}
$$

Equivalent computational form:

$$
\boxed{
\operatorname{Cov}(X,Y)
=
E(XY)-E(X)E(Y).
}
$$

Derivasi:

$$
\begin{aligned}
E[(X-\mu_X)(Y-\mu_Y)]
&=
E(XY-X\mu_Y-Y\mu_X+\mu_X\mu_Y)\\
&=
E(XY)-\mu_YE(X)-\mu_XE(Y)+\mu_X\mu_Y\\
&=
E(XY)-\mu_X\mu_Y.
\end{aligned}
$$

## 6.4 Interpretasi

Miller memberikan interpretasi kualitatif:

- large $X$ cenderung bersama large $Y$ $\rightarrow$ covariance positive;
- large $X$ cenderung bersama small $Y$ $\rightarrow$ covariance negative.

Tetapi covariance adalah measure of joint linear movement, bukan full characterization of dependence.

## 6.5 Independence implies zero covariance

Jika $X$ dan $Y$ independent,

$$
E(XY)=E(X)E(Y),
$$

sehingga

$$
\boxed{
\operatorname{Cov}(X,Y)=0.
}
$$

[IMPORTANT DISTINCTION]

Converse tidak berlaku:

$$
\operatorname{Cov}(X,Y)=0
$$

**tidak menjamin** independence.

Miller memberikan example dua random variables yang dependent tetapi covariance-nya zero.

Ini adalah salah satu conceptual distinctions terpenting dari chapter.

## 6.6 Product expectation untuk independent variables

Jika

$$
X_1,\ldots,X_n
$$

independent, maka

$$
\boxed{
E(X_1X_2\cdots X_n)
=
\prod_{i=1}^n E(X_i).
}
$$

[ASSUMPTION]

Faktorisasi ini membutuhkan independence.

Jangan keliru dengan linearity:

$$
E(X+Y)=E(X)+E(Y),
$$

yang tidak membutuhkan independence.

---

# 7. Moments of Linear Combinations of Random Variables

[CORE CF2]

Bagian ini menyediakan formula yang sangat reusable.

Ambil

$$
Y=\sum_{i=1}^{n}a_iX_i.
$$

## 7.1 Mean of a linear combination

$$
\boxed{
E(Y)
=
\sum_{i=1}^{n}a_iE(X_i).
}
$$

Sekali lagi, independence tidak diperlukan.

## 7.2 Variance of a linear combination

General formula:

$$
\boxed{
\operatorname{Var}(Y)
=
\sum_{i=1}^{n}
a_i^2\operatorname{Var}(X_i)
+
2
\sum_{i<j}
a_i a_j
\operatorname{Cov}(X_i,X_j).
}
$$

[IMPORTANT DISTINCTION]

Cross-covariance terms tidak boleh dihapus kecuali ada alasan.

Jika $X_i$ independent, covariance pairwise-nya zero, sehingga:

$$
\boxed{
\operatorname{Var}
\left(
\sum_i a_iX_i
\right)
=
\sum_i a_i^2\operatorname{Var}(X_i).
}
$$

## 7.3 Contoh dengan correlated variables

Miller memberikan:

$$
W=3X-Y+2Z.
$$

Mean:

$$
E(W)
=
3E(X)-E(Y)+2E(Z).
$$

Variance:

$$
\begin{aligned}
\operatorname{Var}(W)
={}&
9\operatorname{Var}(X)
+
\operatorname{Var}(Y)
+
4\operatorname{Var}(Z)\\
&-6\operatorname{Cov}(X,Y)
+12\operatorname{Cov}(X,Z)
-4\operatorname{Cov}(Y,Z).
\end{aligned}
$$

Coefficient pada covariance berasal dari

$$
2a_i a_j.
$$

Ini merupakan useful mechanical check.

## 7.4 Covariance of two linear combinations

Jika

$$
Y_1=\sum_i a_iX_i,
\qquad
Y_2=\sum_i b_iX_i,
$$

maka Miller memberikan:

$$
\boxed{
\operatorname{Cov}(Y_1,Y_2)
=
\sum_i
a_i b_i\operatorname{Var}(X_i)
+
\sum_{i<j}
(a_i b_j+a_j b_i)
\operatorname{Cov}(X_i,X_j).
}
$$

Jika seluruh $X_i$ independent,

$$
\boxed{
\operatorname{Cov}(Y_1,Y_2)
=
\sum_i a_i b_i\operatorname{Var}(X_i).
}
$$

[CF2 CONNECTION]

Formula ini adalah component-wise form dari algebra variance-covariance matrix yang muncul dalam multivariate statistics.

---

# 8. Conditional Expectations

[CORE CF2]

Conditional expectation menggunakan conditional distribution sebagai weighting law.

## 8.1 Definisi

Jika $X$ discrete dan $f(x\mid y)$ adalah conditional PMF,

$$
\boxed{
E[g(X)\mid Y=y]
=
\sum_x
g(x)f(x\mid y).
}
$$

Untuk $g(X)=X$,

$$
\boxed{
E(X\mid Y=y)
=
\sum_x x f(x\mid y).
}
$$

Jika continuous,

$$
\boxed{
E[g(X)\mid Y=y]
=
\int_{-\infty}^{\infty}
g(x)f(x\mid y)\,dx.
}
$$

Khususnya,

$$
\boxed{
\mu_{X\mid y}
=
E(X\mid Y=y).
}
$$

[IMPORTANT DISTINCTION]

$$
E(X\mid Y=y)
$$

adalah value/function pada particular $y$.

Sedangkan

$$
E(X\mid Y)
$$

dipandang sebagai random variable/function of $Y$.

## 8.2 Conditional variance

Miller mendefinisikan

$$
\boxed{
\operatorname{Var}(X\mid Y=y)
=
E[(X-\mu_{X\mid y})^2\mid Y=y].
}
$$

Computational identity:

$$
\boxed{
\operatorname{Var}(X\mid Y=y)
=
E(X^2\mid Y=y)
-
[E(X\mid Y=y)]^2.
}
$$

Ini persis variance identity biasa, tetapi seluruh expectation dihitung terhadap **conditional distribution**.

## 8.3 Mechanical procedure

Untuk menghitung conditional mean/variance:

1. dapatkan joint PMF/PDF;
2. cari marginal $f_Y(y)$;
3. bentuk conditional law
   $$
   f_{X\mid Y}(x\mid y);
   $$
4. hitung
   $$
   E(X\mid Y=y);
   $$
5. hitung
   $$
   E(X^2\mid Y=y);
   $$
6. gunakan
   $$
   \operatorname{Var}(X\mid Y=y)
   =
   E(X^2\mid Y=y)
   -
   [E(X\mid Y=y)]^2.
   $$

---

# 9. The Theory in Practice

[CF2 SUPPORTING CONTEXT]

Miller menghubungkan theoretical moments dengan descriptive statistics dari observed data.

## 9.1 Sample mean

Analog empiris dari population mean:

$$
\boxed{
\bar{x}
=
\frac1n
\sum_{i=1}^n x_i.
}
$$

Textbook memberi intuisi bahwa mean adalah balance point / centroid dari data.

Mean bekerja baik sebagai location measure untuk symmetric atau nearly symmetric distributions.

Namun mean sensitif terhadap extreme observations.

Miller menggunakan salary example untuk menunjukkan bahwa satu very large salary dapat menaikkan mean sehingga kurang representatif untuk typical employee.

## 9.2 Median

Untuk skewed data, median sering lebih representatif.

Data diurutkan dari kecil ke besar, lalu median mengambil middle location.

Textbook menggunakan family-income-like setting untuk menekankan bahwa heavily right-skewed distributions sering lebih masuk akal dideskripsikan dengan median daripada mean.

## 9.3 Sample standard deviation

Analog empiris dari $\sigma$:

$$
\boxed{
s
=
\sqrt{
\frac{
\sum_{i=1}^{n}(x_i-\bar{x})^2
}{
n-1
}
}.
}
$$

Computational form yang diberikan Miller:

$$
\boxed{
s
=
\sqrt{
\frac{
n\sum_{i=1}^{n}x_i^2
-
\left(\sum_{i=1}^{n}x_i\right)^2
}{
n(n-1)
}
}.
}
$$

[TEXTBOOK CONTEXT]

Pada titik ini Miller belum menjelaskan secara penuh mengapa divisor $n-1$ digunakan; motivasi inferensialnya muncul kemudian.

## 9.4 Range

Sample range:

$$
\boxed{
r=x_{\max}-x_{\min}.
}
$$

Miller menyatakan range dapat dipakai sebagai rough dispersion measure terutama untuk small samples, tetapi kualitasnya sebagai summary menurun untuk larger samples karena hanya menggunakan dua extreme observations.

---

# Chapter Synthesis

## Expectation machinery

$$
\boxed{
E[g(X)]
=
\sum g(x)f(x)
}
$$

atau

$$
\boxed{
E[g(X)]
=
\int g(x)f(x)\,dx.
}
$$

Linearity:

$$
\boxed{
E\left(\sum_i a_iX_i\right)
=
\sum_i a_iE(X_i).
}
$$

## Moments

$$
\boxed{
\mu_r'=E(X^r)
}
$$

$$
\boxed{
\mu_r=E[(X-\mu)^r]
}
$$

$$
\boxed{
\operatorname{Var}(X)
=
E(X^2)-[E(X)]^2.
}
$$

## Chebyshev

$$
\boxed{
P(|X-\mu|\ge k\sigma)
\le
\frac1{k^2}.
}
$$

## MGF

$$
\boxed{
M_X(t)=E(e^{tX})
}
$$

$$
\boxed{
M_X^{(r)}(0)=E(X^r).
}
$$

## Covariance

$$
\boxed{
\operatorname{Cov}(X,Y)
=
E(XY)-E(X)E(Y).
}
$$

Independence:

$$
X\perp Y
\quad\Longrightarrow\quad
\operatorname{Cov}(X,Y)=0,
$$

tetapi converse tidak berlaku.

## Linear combinations

$$
\boxed{
\operatorname{Var}
\left(
\sum_i a_iX_i
\right)
=
\sum_i a_i^2\operatorname{Var}(X_i)
+
2\sum_{i<j}a_i a_j\operatorname{Cov}(X_i,X_j).
}
$$

Jika independent:

$$
\boxed{
\operatorname{Var}
\left(
\sum_i a_iX_i
\right)
=
\sum_i a_i^2\operatorname{Var}(X_i).
}
$$

## Conditional expectation

$$
\boxed{
E(X\mid Y=y)
=
\sum_x x f(x\mid y)
}
$$

atau

$$
\boxed{
E(X\mid Y=y)
=
\int x f(x\mid y)\,dx.
}
$$

$$
\boxed{
\operatorname{Var}(X\mid Y=y)
=
E(X^2\mid Y=y)
-
[E(X\mid Y=y)]^2.
}
$$

---

# Reusable Mathematical Reading Pattern

Untuk problem expectation/moments dari Chapter 4:

1. **Identifikasi distribution dan support.**
2. **Tentukan target:** $E(X)$, $E[g(X)]$, moment, variance, covariance, atau conditional quantity.
3. **Gunakan original distribution bila memungkinkan** — jangan mencari transformed distribution jika theorem $E[g(X)]$ sudah cukup.
4. **Manfaatkan linearity** sebelum melakukan sum/integral.
5. Untuk variance:
   $$
   E(X^2)-[E(X)]^2
   $$
   sering lebih cepat.
6. Untuk covariance:
   $$
   E(XY)-E(X)E(Y).
   $$
7. Untuk sums:
   - mean selalu linear;
   - variance harus membawa covariance terms kecuali independence justified.
8. Untuk MGF:
   - cek keberadaannya;
   - differentiate pada $t=0$.
9. Untuk conditional moments:
   - bentuk conditional distribution terlebih dahulu.
10. Lakukan sanity check:
   - variance $\ge0$;
   - standard deviation $\ge0$;
   - unit variance adalah squared units;
   - shift constant tidak mengubah variance.

---

# Connections to CF2 Syllabus

- Sections 1–3 $\rightarrow$ [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]]
- Section 5 $\rightarrow$ [[2.3 Fungsi Pembangkit]]
- Section 6 $\rightarrow$ [[3.5 Independensi dan Korelasi]]
- Section 7 $\rightarrow$ [[3.5 Independensi dan Korelasi]], [[3.6 Matriks Variansi-Kovariansi]]
- Section 8 $\rightarrow$ [[3.4 Nilai Harapan dan Variansi Bersyarat]]
- Section 9 $\rightarrow$ supporting bridge toward sampling statistics and later inferential chapters

---

## One-line takeaway

> **Chapter 4 mengubah distribution menjadi numerical structure: expectation dan moments menggambarkan location/spread, MGF menghasilkan moments, covariance menangkap joint movement, dan linear/conditional expectation menjadi machinery utama untuk chapter CF2 berikutnya.**
