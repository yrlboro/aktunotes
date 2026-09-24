# Miller Chapter 3 — Probability Distributions and Probability Densities

> **Source:** Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 3  
> **Peran dalam CF2:** Condensed Textbook Note — mengikuti struktur dan perkembangan konsep textbook, bukan format syllabus cheat sheet.  
> **Silabus terkait:** [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]], [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]], [[3.3 Distribusi Bersyarat (Conditional Distribution)]], [[3.5 Independensi dan Korelasi]]

---

## Chapter Map

Chapter ini membangun bahasa dasar untuk berpindah dari **outcome suatu eksperimen acak** ke objek matematis yang dapat dianalisis dengan probabilitas:

$$
\text{sample space}
\longrightarrow
\text{random variable}
\longrightarrow
\text{PMF/PDF}
\longrightarrow
\text{CDF}
\longrightarrow
\text{joint distribution}
\longrightarrow
\text{marginal/conditional distribution}
\longrightarrow
\text{independence}.
$$

Urutan ini penting. Miller tidak langsung memperkenalkan daftar distribusi khusus; ia terlebih dahulu membangun *machinery* yang nantinya dipakai untuk seluruh probability distributions.

---

# 1. Random Variables

[CORE CF2]

Dalam banyak eksperimen acak, yang menarik bukan seluruh outcome mentahnya, melainkan **suatu angka yang diturunkan dari outcome tersebut**.

Contoh textbook: ketika dua dadu dilempar, sample point adalah ordered pair seperti $(3,6)$, tetapi quantity yang ingin diamati bisa saja jumlah kedua dadu, yaitu $9$.

## 1.1 Definisi

Miller mendefinisikan random variable sebagai fungsi bernilai real pada sample space.

Jika $S$ adalah sample space dengan probability measure dan

$$
X:S\to\mathbb{R},
$$

maka $X$ disebut **random variable**.

[IMPORTANT DISTINCTION]

Random variable bukan “angka acak” dalam arti informal. Ia adalah **fungsi**. Sebelum eksperimen dilakukan, $X$ merupakan mapping; setelah outcome diamati, mapping tersebut menghasilkan sebuah nilai $x$.

Textbook menggunakan konvensi:

- $X,Y,\ldots$ untuk random variables;
- $x,y,\ldots$ untuk nilai yang mungkin diambil random variable.

Event

$$
X=x
$$

berarti himpunan seluruh sample points $s\in S$ yang memenuhi $X(s)=x$.

## 1.2 Contoh: memilih dua kaus kaki

Sebuah laci berisi 5 kaus kaki coklat $B$ dan 3 hijau $G$. Dua kaus kaki diambil tanpa pengembalian. Sample space terurut:

$$
S=\{BB,BG,GB,GG\}.
$$

Probabilitas masing-masing outcome:

$$
P(BB)=\frac{5}{8}\frac{4}{7}=\frac{5}{14},
$$

$$
P(BG)=P(GB)=\frac{5}{8}\frac{3}{7}=\frac{15}{56},
$$

$$
P(GG)=\frac{3}{8}\frac{2}{7}=\frac{3}{28}.
$$

Definisikan $W$ = banyaknya kaus kaki coklat yang terpilih. Maka

$$
W(BB)=2,\qquad
W(BG)=W(GB)=1,\qquad
W(GG)=0.
$$

Perhatikan bahwa beberapa sample points dapat dipetakan ke nilai random variable yang sama.

## 1.3 Random variable diskrit versus kontinu

Miller memulai dengan random variables pada discrete sample spaces lalu beralih ke continuous sample spaces.

Secara konseptual:

- **discrete random variable** mengambil himpunan nilai berhingga atau terhitung;
- **continuous random variable** mengambil nilai pada suatu skala kontinu.

Perbedaan ini menentukan apakah mekanisme probabilitas nantinya menggunakan **penjumlahan** atau **integrasi**.

---

# 2. Probability Distributions

[CORE CF2]

Untuk discrete random variable $X$, probability measure pada sample space menginduksi probabilitas untuk setiap nilai yang mungkin diambil $X$.

## 2.1 Probability distribution / PMF

Miller menggunakan istilah **probability distribution** untuk fungsi

$$
f(x)=P(X=x)
$$

pada nilai-nilai dalam range $X$.

Dalam terminologi modern CF2, fungsi ini adalah PMF.

Sebuah fungsi dapat menjadi discrete probability distribution apabila:

$$
f(x)\ge 0
$$

untuk seluruh $x$ dalam domain yang relevan, dan

$$
\sum_x f(x)=1.
$$

[ASSUMPTION]

Penjumlahan harus mencakup **seluruh support** random variable.

Untuk event $A$ yang terdiri atas beberapa nilai $X$,

$$
P(X\in A)=\sum_{x\in A}f(x).
$$

## 2.2 Contoh jumlah dua dadu

Jika $X$ adalah jumlah dua balanced dice, maka support-nya:

$$
\{2,3,\ldots,12\},
$$

dan Miller menuliskan PMF dalam bentuk ringkas:

$$
f(x)=\frac{6-|x-7|}{36},
\qquad x=2,3,\ldots,12.
$$

Formula ini merangkum pola

$$
1,2,3,4,5,6,5,4,3,2,1
$$

untuk banyaknya ordered outcomes yang menghasilkan total $2,\ldots,12$.

## 2.3 Contoh empat coin tosses

Untuk empat kali toss balanced coin dan $X=$ number of heads,

$$
P(X=x)=\frac{\binom{4}{x}}{16},
\qquad x=0,1,2,3,4.
$$

Textbook menggunakan contoh ini untuk menunjukkan bahwa probability distribution dapat direpresentasikan dengan:

- tabel;
- formula;
- probability histogram;
- bar chart.

Namun objek probabilistiknya tetap PMF $f(x)$.

---

## 2.4 Distribution Function / CDF untuk discrete $X$

Miller mendefinisikan distribution function:

$$
F(x)=P(X\le x).
$$

Jika $X$ discrete dengan PMF $f$,

$$
F(x)=\sum_{t\le x}f(t),
\qquad -\infty<x<\infty.
$$

[IMPORTANT DISTINCTION]

Walaupun $X$ hanya mengambil nilai diskrit, $F(x)$ didefinisikan untuk **setiap bilangan real $x$**.

Karena itu, CDF diskrit berbentuk step function.

Sifat dasarnya:

$$
\lim_{x\to-\infty}F(x)=0,
\qquad
\lim_{x\to\infty}F(x)=1,
$$

dan bila $a<b$,

$$
F(a)\le F(b).
$$

### Empat toss coin

Jika

$$
f(0)=\frac{1}{16},\quad
f(1)=\frac{4}{16},\quad
f(2)=\frac{6}{16},\quad
f(3)=\frac{4}{16},\quad
f(4)=\frac{1}{16},
$$

maka

$$
F(x)=
\begin{cases}
0, & x<0,\\[3pt]
\frac{1}{16}, & 0\le x<1,\\[3pt]
\frac{5}{16}, & 1\le x<2,\\[3pt]
\frac{11}{16}, & 2\le x<3,\\[3pt]
\frac{15}{16}, & 3\le x<4,\\[3pt]
1, & x\ge 4.
\end{cases}
$$

## 2.5 Memperoleh PMF dari CDF

Bila support diskrit tersusun

$$
x_1<x_2<\cdots,
$$

maka probability mass pada $x_i$ adalah **besar lompatan CDF** di titik tersebut.

Secara konseptual:

$$
P(X=x_i)=F(x_i)-F(x_i^-).
$$

Mental model penting dari Miller:

> PMF menyimpan mass pada titik-titik; CDF mengakumulasikan mass dari kiri.

---

# 3. Continuous Random Variables

[CORE CF2]

Jika quantity diukur pada skala kontinu, point probabilities tidak lagi menjadi building block yang tepat.

Contohnya: berat, waktu, panjang, volume, pitch diameter, dan lifetime.

Miller menjelaskan bahwa continuous random variable sering berasal dari pengukuran yang secara ideal dapat mengambil sembarang nilai dalam suatu interval, bahkan bila alat ukur praktis membulatkan angka.

Peralihan fundamentalnya adalah:

$$
\text{diskrit: probability mass pada titik}
$$

menjadi

$$
\text{kontinu: probability direpresentasikan oleh area pada interval}.
$$

---

# 4. Probability Density Functions

[CORE CF2]

## 4.1 PDF

Sebuah fungsi $f(x)$ merupakan probability density function dari continuous random variable $X$ jika probabilitas interval diperoleh dari area di bawah density:

$$
P(a<X<b)=\int_a^b f(x)\,dx.
$$

Secara lebih umum,

$$
P(X\in A)=\int_A f(x)\,dx.
$$

Untuk menjadi PDF yang valid, Miller mensyaratkan:

$$
f(x)\ge0,
$$

dan

$$
\int_{-\infty}^{\infty}f(x)\,dx=1.
$$

[IMPORTANT DISTINCTION]

Pada continuous random variable,

$$
f(c)\neq P(X=c).
$$

Bahkan,

$$
P(X=c)=0
$$

untuk setiap single point $c$.

Karena itu:

$$
P(a<X<b)
=
P(a\le X\le b)
=
P(a<X\le b)
=
P(a\le X<b).
$$

Inklusi endpoint tidak mengubah probability pada continuous model.

## 4.2 Support tetap harus eksplisit

Jika, misalnya,

$$
f(x)=ce^{-3x},\qquad x>0,
$$

maka seluruh integrasi probability dilakukan hanya pada support $x>0$, dan $f(x)=0$ di luar support.

Normalisasi menentukan $c$:

$$
1=\int_0^\infty ce^{-3x}\,dx.
$$

[IMPORTANT DISTINCTION]

Density dapat bernilai lebih besar dari $1$. Yang harus berada antara $0$ dan $1$ adalah **probability/area**, bukan tinggi density.

---

## 4.3 Continuous CDF

Jika $X$ kontinu dengan PDF $f$,

$$
F(x)=P(X\le x)
=
\int_{-\infty}^{x} f(t)\,dt.
$$

Jika $F$ differentiable pada titik tersebut,

$$
f(x)=F'(x).
$$

Jadi hubungan utamanya:

$$
\boxed{
F(x)=\int_{-\infty}^{x}f(t)\,dt
}
$$

dan

$$
\boxed{
f(x)=\frac{d}{dx}F(x)
}
$$

pada daerah yang smooth.

Selain itu,

$$
P(a<X\le b)=F(b)-F(a).
$$

## 4.4 Contoh density eksponensial

Untuk bentuk:

$$
f(x)=3e^{-3x},\qquad x>0,
$$

CDF diperoleh dari

$$
F(x)=\int_0^x 3e^{-3t}\,dt
=
1-e^{-3x},
\qquad x>0,
$$

dengan

$$
F(x)=0,\qquad x\le0.
$$

Dari CDF, interval probabilities dapat dihitung tanpa mengintegrasikan ulang:

$$
P(a<X<b)=F(b)-F(a).
$$

## 4.5 Mixed distribution

Miller secara singkat menunjukkan bahwa ada distribution function yang memiliki:

- bagian kontinu; dan
- lompatan.

Lompatan pada CDF berarti terdapat positive point mass.

Jika besar lompatan pada $x=c$ adalah

$$
F(c)-F(c^-),
$$

maka

$$
P(X=c)=F(c)-F(c^-).
$$

[CF2 SUPPORTING CONTEXT]

Setelah itu, chapter terutama membatasi pembahasan pada random variables yang sepenuhnya diskrit atau sepenuhnya kontinu.

---

# 5. Multivariate Distributions

[CORE CF2]

Satu eksperimen dapat menghasilkan lebih dari satu random variable. Kita kemudian tertarik pada perilaku simultan dari $X,Y,\ldots$.

Hal terpenting pada bagian ini adalah **joint support**.

> Jangan menghitung joint probability sebelum memahami pasangan $(x,y)$ mana yang mungkin.

## 5.1 Discrete joint probability distribution

Untuk discrete $X,Y$,

$$
f(x,y)=P(X=x,Y=y).
$$

Joint PMF yang valid harus memenuhi

$$
f(x,y)\ge0
$$

dan

$$
\sum_x\sum_y f(x,y)=1,
$$

dengan penjumlahan hanya pada valid joint support.

Untuk region/set $A$,

$$
P\bigl((X,Y)\in A\bigr)
=
\sum\sum_{(x,y)\in A} f(x,y).
$$

### Contoh textbook: dua caplet

Miller menggunakan pemilihan dua caplet dari kumpulan aspirin, sedative, dan laxative untuk menunjukkan bahwa joint PMF dapat direpresentasikan dalam bentuk tabel.

Pelajaran utama bukan angka tertentu, melainkan prosedurnya:

1. definisikan $X$ dan $Y$;
2. tentukan seluruh pasangan $(x,y)$ yang feasible;
3. hitung outcome yang menghasilkan setiap pasangan;
4. bagi dengan total equally likely selections.

## 5.2 Joint CDF untuk discrete variables

$$
F(x,y)
=
P(X\le x,Y\le y)
=
\sum_{s\le x}\sum_{t\le y}f(s,t).
$$

CDF mengakumulasi mass pada bagian joint support yang berada “di kiri-bawah” titik $(x,y)$.

## 5.3 Continuous joint density

Untuk continuous $X,Y$, joint density $f(x,y)$ didefinisikan melalui probability pada region $A$:

$$
P\bigl((X,Y)\in A\bigr)
=
\iint_A f(x,y)\,dx\,dy.
$$

Joint density yang valid harus memenuhi

$$
f(x,y)\ge0
$$

dan

$$
\int_{-\infty}^{\infty}
\int_{-\infty}^{\infty}
f(x,y)\,dx\,dy
=
1.
$$

[IMPORTANT DISTINCTION]

Untuk multivariate continuous distribution, **geometri region menentukan integration bounds**.

Jika support misalnya

$$
0<x<1,\qquad 0<y<1-x,
$$

maka support berbentuk triangular, bukan rectangular, sehingga integral yang benar dapat ditulis:

$$
\int_0^1\int_0^{1-x}\cdots\,dy\,dx
$$

atau dengan urutan integrasi ekuivalen yang bounds-nya disesuaikan.

## 5.4 Joint CDF continuous

Jika $f$ adalah joint density,

$$
F(x,y)
=
P(X\le x,Y\le y)
=
\int_{-\infty}^{y}
\int_{-\infty}^{x}
f(s,t)\,ds\,dt.
$$

Jika regularity cukup,

$$
f(x,y)
=
\frac{\partial^2}{\partial x\,\partial y}F(x,y).
$$

## 5.5 Extension ke lebih dari dua random variables

Miller memperluas konsep ke

$$
X_1,X_2,\ldots,X_n.
$$

Untuk discrete case:

$$
f(x_1,\ldots,x_n)
=
P(X_1=x_1,\ldots,X_n=x_n),
$$

dengan total mass

$$
\sum_{x_1}\cdots\sum_{x_n}
f(x_1,\ldots,x_n)=1.
$$

Untuk continuous case:

$$
P\bigl((X_1,\ldots,X_n)\in A\bigr)
=
\int\cdots\int_A
f(x_1,\ldots,x_n)\,dx_1\cdots dx_n.
$$

Pelajaran struktural:

> Mekanisme bivariate hanyalah special case dari mekanisme multivariate.

---

# 6. Marginal Distributions

[CORE CF2]

Marginal distribution menjawab pertanyaan:

> Jika joint behavior diketahui, bagaimana distribusi salah satu variable saja?

Operasinya adalah **menghilangkan variable lain dengan penjumlahan/integrasi**.

## 6.1 Discrete marginal PMFs

Jika $f(x,y)$ adalah joint PMF,

$$
g(x)=\sum_y f(x,y)
$$

adalah marginal distribution dari $X$, dan

$$
h(y)=\sum_x f(x,y)
$$

adalah marginal distribution dari $Y$.

Dalam joint probability table, marginal probabilities adalah row/column totals.

[IMPORTANT DISTINCTION]

Batas penjumlahan harus mengikuti **joint support**. Bila support nonrectangular, range valid $y$ dapat bergantung pada $x$, dan sebaliknya.

## 6.2 Continuous marginal densities

Jika $f(x,y)$ adalah joint PDF,

$$
g(x)=\int_{-\infty}^{\infty} f(x,y)\,dy,
$$

$$
h(y)=\int_{-\infty}^{\infty} f(x,y)\,dx.
$$

Namun secara praktik integral hanya dilakukan pada bagian support tempat density nonzero.

### Textbook Example 21

Diberikan

$$
f(x,y)=\frac{2}{3}(x+2y),
\qquad
0<x<1,\quad 0<y<1.
$$

Marginal $X$:

$$
g(x)
=
\int_0^1 \frac{2}{3}(x+2y)\,dy
=
\frac{2}{3}(x+1),
\qquad 0<x<1.
$$

Marginal $Y$:

$$
h(y)
=
\int_0^1 \frac{2}{3}(x+2y)\,dx
=
\frac{1}{3}(1+4y),
\qquad 0<y<1.
$$

Keduanya bernilai nol di luar support masing-masing.

## 6.3 Higher-dimensional marginalization

Jika joint density

$$
f(x_1,x_2,\ldots,x_n)
$$

diketahui, marginal density dari subset variables diperoleh dengan mengintegrasikan seluruh variables yang tidak ingin dipertahankan.

Contoh marginal $X_2$:

$$
h(x_2)
=
\int\cdots\int
f(x_1,x_2,\ldots,x_n)
\,dx_1\,dx_3\cdots dx_n.
$$

Contoh joint marginal dari $(X_1,X_n)$:

$$
\phi(x_1,x_n)
=
\int\cdots\int
f(x_1,x_2,\ldots,x_n)
\,dx_2\cdots dx_{n-1}.
$$

Prinsipnya sama, hanya dimensinya bertambah.

---

# 7. Conditional Distributions

[CORE CF2]

Conditional distribution adalah versi random-variable dari conditional probability.

Untuk events,

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

Untuk discrete random variables, ambil

$$
A=\{X=x\},
\qquad
B=\{Y=y\}.
$$

## 7.1 Discrete conditional distribution

Jika joint PMF $f(x,y)$ dan marginal $h(y)=P(Y=y)$, maka

$$
f(x\mid y)
=
P(X=x\mid Y=y)
=
\frac{f(x,y)}{h(y)},
\qquad h(y)>0.
$$

Sebaliknya,

$$
w(y\mid x)
=
\frac{f(x,y)}{g(x)},
\qquad g(x)>0.
$$

Untuk fixed $y$, conditional PMF harus ternormalisasi:

$$
\sum_x f(x\mid y)=1.
$$

[IMPORTANT DISTINCTION]

Dalam $f(x\mid y)$:

- $x$ adalah variable;
- $y$ dianggap sebagai fixed conditioning value.

## 7.2 Continuous conditional density

Jika joint PDF $f(x,y)$ dan marginal PDF $h(y)$, maka

$$
f(x\mid y)
=
\frac{f(x,y)}{h(y)},
\qquad h(y)>0.
$$

Untuk valid $y$,

$$
\int_{-\infty}^{\infty} f(x\mid y)\,dx=1.
$$

Secara analog,

$$
w(y\mid x)
=
\frac{f(x,y)}{g(x)}.
$$

[IMPORTANT DISTINCTION]

Walaupun $P(Y=y)=0$ untuk continuous $Y$, conditional **density** given $Y=y$ tetap didefinisikan melalui ratio of densities dalam framework textbook.

## 7.3 Textbook Example 24

Dari Example 21,

$$
f(x,y)=\frac{2}{3}(x+2y),
\qquad
0<x<1,\quad 0<y<1,
$$

dan

$$
h(y)=\frac{1}{3}(1+4y).
$$

Maka

$$
f(x\mid y)
=
\frac{\frac{2}{3}(x+2y)}
{\frac{1}{3}(1+4y)}
=
\frac{2x+4y}{1+4y},
\qquad 0<x<1.
$$

Jika $y=\frac12$,

$$
f\!\left(x\mid \frac12\right)
=
\frac{2x+2}{3}.
$$

Kemudian,

$$
P\left(
X\le \frac12
\mid
Y=\frac12
\right)
=
\int_0^{1/2}
\frac{2x+2}{3}\,dx
=
\frac{5}{12}.
$$

Struktur yang perlu dipertahankan:

$$
\text{joint}
\rightarrow
\text{marginal conditioning variable}
\rightarrow
\text{ratio}
\rightarrow
\text{normalisasi}
\rightarrow
\text{conditional probability}.
$$

## 7.4 Independence

Miller menghubungkan independence dengan fakta bahwa conditional distribution tidak lagi bergantung pada conditioning value.

Jika

$$
f(x\mid y)=g(x)
$$

untuk seluruh valid $x,y$, maka

$$
f(x,y)
=
f(x\mid y)h(y)
=
g(x)h(y).
$$

Ini memotivasi definisi faktorisasi.

Untuk $n$ discrete random variables,

$$
X_1,\ldots,X_n
$$

independent jika dan hanya jika

$$
f(x_1,\ldots,x_n)
=
f_1(x_1)f_2(x_2)\cdots f_n(x_n)
$$

untuk seluruh joint support.

Untuk continuous variables, faktorisasi yang sama berlaku pada density:

$$
f(x_1,\ldots,x_n)
=
\prod_{i=1}^n f_i(x_i).
$$

[IMPORTANT DISTINCTION]

Independence adalah property **joint distribution**, bukan sekadar impression bahwa dua variables “tidak berkaitan”.

Jika faktorisasi tidak berlaku, variables dependent.

## 7.5 Pairwise versus mutual independence

Textbook menunjukkan contoh tiga variables di mana beberapa pasangan dapat independent walaupun ketiganya tidak mutually independent.

Karena itu:

$$
\text{mutual independence}
\not\equiv
\text{hanya mengecek pasangan-pasangan}.
$$

Untuk full independence $n$-variate, faktorisasi keseluruhan joint law diperlukan.

---

# 8. The Theory in Practice

[CF2 SUPPORTING CONTEXT]

Bagian ini beralih dari theoretical probability distributions ke empirical data distributions.

Tujuan utamanya adalah menunjukkan hubungan antara:

- theoretical distribution;
- observed data;
- descriptive graphical representation.

Ini bukan pusat probability mechanics CF2, tetapi membantu membangun intuisi mengenai bentuk distribution.

## 8.1 Ordered data dan stem-and-leaf display

Data mentah dapat diurutkan sehingga strukturnya lebih terlihat.

Stem-and-leaf display mempertahankan individual observations sambil menunjukkan shape secara visual. Miller menekankan bahwa, berbeda dari grouping yang terlalu agresif, stem-and-leaf tidak menghilangkan detail individual observations.

Double-stem display dapat dipakai ketika terlalu banyak observations terkumpul pada satu stem.

## 8.2 Frequency distribution

Frequency distribution mengelompokkan numerical data ke classes dengan lower dan upper limits tertentu.

Istilah textbook:

- **class limits**: nilai observasi terkecil/terbesar yang masuk class;
- **class frequency**: banyak observations dalam class;
- **class boundary**: midpoint antara adjacent class limits;
- **class interval**: jarak antara successive class boundaries;
- **class mark**: midpoint dari upper dan lower class limits.

[IMPORTANT DISTINCTION]

Miller menekankan bahwa class interval bukan sekadar

$$
\text{upper class limit}-\text{lower class limit}.
$$

## 8.3 Histogram, skewness, modality

Histogram menggambarkan frequency distribution secara visual.

Miller menggunakan contoh solder-bond strengths untuk menunjukkan positive skewness: sebagian besar data berada pada nilai rendah/moderat, dengan tail panjang ke kanan.

Terminologi:

- right tail panjang $\rightarrow$ positive skewness;
- left tail panjang $\rightarrow$ negative skewness;
- dua modes $\rightarrow$ bimodal;
- lebih dari dua modes $\rightarrow$ multimodal.

Interpretasi praktis textbook: multimodality dapat mengindikasikan beberapa underlying causes atau subpopulations.

[CF2 SUPPORTING CONTEXT]

Bagian descriptive-statistics ini terutama berguna sebagai visual bridge menuju statistical inference selanjutnya, tetapi bukan pengganti definisi probabilistic distribution.

---

# Chapter Synthesis

Chapter 3 membangun dua sistem paralel.

## Discrete

$$
\boxed{
f(x)=P(X=x)
}
$$

$$
\boxed{
F(x)=\sum_{t\le x}f(t)
}
$$

Joint:

$$
\boxed{
f(x,y)=P(X=x,Y=y)
}
$$

Marginal:

$$
\boxed{
g(x)=\sum_y f(x,y)
}
$$

Conditional:

$$
\boxed{
f(x\mid y)=\frac{f(x,y)}{h(y)}
}
$$

Independence:

$$
\boxed{
f(x,y)=g(x)h(y)
}
$$

## Continuous

$$
\boxed{
P(a<X<b)=\int_a^b f(x)\,dx
}
$$

$$
\boxed{
F(x)=\int_{-\infty}^{x}f(t)\,dt
}
$$

Joint:

$$
\boxed{
P\bigl((X,Y)\in A\bigr)
=
\iint_A f(x,y)\,dx\,dy
}
$$

Marginal:

$$
\boxed{
g(x)=\int f(x,y)\,dy
}
$$

Conditional:

$$
\boxed{
f(x\mid y)=\frac{f(x,y)}{h(y)}
}
$$

Independence:

$$
\boxed{
f(x,y)=g(x)h(y)
}
$$

---

# Reusable Mathematical Reading Pattern

Saat membaca problem yang menggunakan machinery Chapter 3:

1. **Tentukan random variable(s).**
2. **Tentukan discrete atau continuous.**
3. **Tuliskan support/joint support.**
4. **Identifikasi objek yang diberikan: PMF, PDF, atau CDF.**
5. **Lakukan normalisasi bila ada unknown constant.**
6. **Untuk probability:** lakukan sum/integral hanya pada event region.
7. **Untuk marginal:** eliminasi variable lain.
8. **Untuk conditional:** bagi joint dengan marginal dari conditioning variable.
9. **Untuk independence:** cek faktorisasi joint law.
10. **Verifikasi:** total mass/area harus $1$, probability harus berada dalam $[0,1]$.

---

# Connections to CF2 Syllabus

- Sections 1–2 $\rightarrow$ [[2.1 Variabel Acak Diskrit]]
- Sections 3–4 $\rightarrow$ [[2.2 Variabel Acak Kontinu]]
- Section 5 $\rightarrow$ [[3.1 Distribusi Gabungan (Joint Distribution)]]
- Section 6 $\rightarrow$ [[3.2 Distribusi Marginal]]
- Section 7 $\rightarrow$ [[3.3 Distribusi Bersyarat (Conditional Distribution)]]
- Independence discussion in Section 7 $\rightarrow$ [[3.5 Independensi dan Korelasi]]
- Section 8 $\rightarrow$ supporting descriptive context for understanding empirical distributions

---

## One-line takeaway

> **Chapter 3 mengajarkan bagaimana probability measure pada sample space ditransfer menjadi distribution dari random variable—pertama univariate, lalu joint, marginal, conditional, dan akhirnya independence.**
