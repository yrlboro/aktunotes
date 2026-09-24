---
type: "condensed-book"
exam: "CF2"
book: "Probability and Statistical Inference, 9th Edition"
author: "Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman"
chapter: "1"
chapter_title: "Probability"
cf2_topics: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]
cf2_relevance: "High"
source_scope: "Chapter 1; Sections 1.1-1.5, with Sections 1.1-1.4 in the official Hogg-Tanis CF2 mapping and Section 1.5 summarized as textbook continuation"
compression_level: "Condensed"
tags: [CF2, CondensedBook, HoggTanis]
date_created: "2026-08-29"
status: "study-note"
---

# Hogg, Tanis & Zimmerman — Chapter 1: Probability

> [!ABSTRACT] Chapter in One View
> Chapter ini membangun bahasa matematika untuk ketidakpastian dari level paling dasar: **random experiment → outcome space → event → probability set function**. Setelah aljabar himpunan dan aksioma probabilitas diperkenalkan, penulis menurunkan aturan complement, monotonicity, dan addition rule yang menjadi alat perhitungan dasar. Section berikutnya mengembangkan **enumeration** untuk menghitung banyaknya outcome ketika outcome dianggap equally likely: multiplication principle, permutations, ordered/unordered samples, combinations, distinguishable permutations, dan multinomial coefficients. Conditional probability kemudian mempersempit sample space ke event yang diketahui telah terjadi dan menghasilkan multiplication rule untuk joint events. Konsep ini dilanjutkan ke **independence**, yaitu kondisi ketika informasi bahwa satu event terjadi tidak mengubah probabilitas event lain, termasuk perbedaan penting antara pairwise dan mutual independence. Chapter ditutup dengan law of total probability dan Bayes' theorem sebagai mekanisme memperbarui prior probability menjadi posterior probability setelah evidence diamati. Dalam silabus CF2, Sections 1.1-1.4 merupakan referensi resmi Hogg-Tanis untuk Topik 1; Bayes sendiri tetap merupakan learning outcome Topik 1, tetapi Section 1.5 tidak tercantum dalam range resmi Hogg-Tanis pada silabus yang diberikan.

## 1. Why This Chapter Exists

Statistical analysis berhadapan dengan data yang berubah dari satu pengamatan ke pengamatan lain. Karena outcome dari proses semacam itu tidak selalu dapat diprediksi sebelum eksperimen dilakukan, dibutuhkan model yang memungkinkan kita mengukur ketidakpastian secara konsisten. Probability menyediakan fondasi tersebut.

Chapter ini bergerak dari bahasa set menuju calculation mechanics. Pertama, hasil eksperimen direpresentasikan sebagai **outcomes** di dalam outcome space $S$, dan pertanyaan yang ingin dijawab direpresentasikan sebagai **events**. Probability kemudian didefinisikan sebagai fungsi pada events yang memenuhi tiga aksioma. Dari sana, berbagai formula bukan dihafalkan sebagai aturan terpisah, tetapi diturunkan dari struktur himpunan dan aksioma.

Ketika outcomes bersifat equally likely, probabilitas dapat dihitung melalui counting. Ini memotivasi section enumeration. Setelah itu, penulis memperkenalkan informasi tambahan melalui conditional probability, lalu membedakan situasi ketika informasi tersebut mengubah probabilitas dengan situasi ketika tidak mengubahnya—independence. Bayes' theorem menjadi kelanjutan natural: jika probabilitas penyebab dan mekanisme menghasilkan evidence diketahui, evidence dapat digunakan untuk menghitung ulang probabilitas penyebab tersebut.

Setelah menyelesaikan chapter, pembaca seharusnya mampu membangun sample space, mendefinisikan event, menggunakan aljabar himpunan, menghitung probability dari aksioma dan counting, melakukan conditioning, serta mengidentifikasi dan menggunakan independence.

## 2. Chapter Map

- **1.1 Properties of Probability**
  - random experiment, outcome space, event
  - set algebra dan Venn diagrams
  - relative-frequency motivation
  - probability axioms
  - complement dan addition rules
  - equally likely outcomes
- **1.2 Methods of Enumeration**
  - multiplication principle
  - permutations
  - ordered samples
  - sampling with/without replacement
  - combinations
  - binomial coefficients
  - distinguishable permutations dan multinomial coefficients
  - unordered sampling with replacement sebagai supporting extension
- **1.3 Conditional Probability**
  - conditioning sebagai restriction of the sample space
  - definition of $P(A\mid B)$
  - multiplication rule
  - extension ke tiga atau lebih events
  - decomposition menurut mutually exclusive paths
- **1.4 Independent Events**
  - probabilistic independence
  - equivalent conditional interpretation
  - complements of independent events
  - pairwise vs mutual independence
  - independent repetitions
- **1.5 Bayes' Theorem**
  - law of total probability
  - prior dan posterior probabilities
  - Bayes' formula

| Textbook Section | CF2 Relevance | Connected Syllabus Note |
|---|---|---|
| 1.1 Properties of Probability | Core | [[1.1 Eksperimen Acak dan Ruang Sampel]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| 1.2 Methods of Enumeration | Core | [[1.3 Metode Enumerasi]] |
| 1.3 Conditional Probability | Core | [[1.4 Probabilitas Bersyarat]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
| 1.4 Independent Events | Core | [[1.5 Kejadian Independen]] |
| 1.5 Bayes' Theorem | Core concept in CF2, but outside the official Hogg-Tanis section range listed in the syllabus | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |

---

## 3. 1.1 Properties of Probability

### Intuisi: dari ketidakpastian menuju event

Penulis memulai dari **random experiment**, yaitu eksperimen yang outcome spesifiknya tidak dapat diketahui dengan certainty sebelum eksperimen dilakukan, walaupun kumpulan seluruh outcome yang mungkin dapat dideskripsikan. Kumpulan ini disebut **outcome space** dan dinotasikan dengan $S$.

Jika $A$ adalah subset dari $S$, maka $A$ disebut **event**. Ketika outcome eksperimen berada di dalam $A$, event $A$ dikatakan terjadi.

> [!WARNING] Important Distinction
> **Outcome $\neq$ Event.**
>
> Outcome adalah satu hasil elementer eksperimen. Event adalah **set** yang berisi satu atau lebih outcomes. Karena event diperlakukan sebagai subset dari $S$, seluruh aljabar himpunan dapat diterapkan langsung pada event.

### Set algebra yang digunakan

Untuk events $A,B,C\subseteq S$:

- $\varnothing$: empty/null event.
- $A\subseteq B$: setiap outcome di $A$ juga berada di $B$.
- $A\cup B$: $A$ atau $B$ atau keduanya terjadi.
- $A\cap B$: $A$ dan $B$ terjadi bersamaan.
- $A^c$: complement dari $A$, yaitu seluruh outcomes di $S$ yang tidak berada di $A$.

Dua konsep struktur event penting:

- **Mutually exclusive / disjoint**: $A_i\cap A_j=\varnothing$ untuk $i\neq j$.
- **Exhaustive**: $A_1\cup\cdots\cup A_k=S$.

Jika events mutually exclusive sekaligus exhaustive, events tersebut membentuk partition dari sample space.

Hukum set yang dipakai berulang kali:

$$
A\cup B=B\cup A,\qquad A\cap B=B\cap A,
$$

$$
(A\cup B)\cup C=A\cup(B\cup C),
$$

$$
(A\cap B)\cap C=A\cap(B\cap C),
$$

$$
A\cap(B\cup C)=(A\cap B)\cup(A\cap C),
$$

$$
A\cup(B\cap C)=(A\cup B)\cap(A\cup C).
$$

De Morgan's laws:

$$
(A\cup B)^c=A^c\cap B^c,
$$

$$
(A\cap B)^c=A^c\cup B^c.
$$

Figure 1.1-1 dan 1.1-2 dalam textbook menggunakan Venn diagrams untuk menunjukkan bahwa operasi event bukan sekadar simbol aljabar: setiap formula merepresentasikan region tertentu di dalam $S$. De Morgan khususnya dipahami dengan membandingkan region di luar union dengan intersection dari dua complements.

### Relative-frequency motivation

Jika eksperimen diulang $n$ kali dan event $A$ terjadi sebanyak $N(A)$ kali, maka

$$
\frac{N(A)}{n}
$$

adalah **relative frequency** event $A$. Untuk $n$ kecil nilainya dapat sangat berfluktuasi, tetapi dalam repeated trials sering terlihat kecenderungan stabilisasi. Probabilitas $P(A)$ dimotivasi sebagai nilai yang menggambarkan proporsi jangka panjang tersebut.

[TEXTBOOK EXAMPLE] Dalam Example 1.1-1, eksperimen enam lemparan die disimulasikan berulang kali, dengan “success” berarti terdapat minimal satu match antara nomor roll dan face yang muncul. Relative frequency success bergerak menuju nilai sekitar $0.665$. Penulis menekankan bahwa simulation mendukung assignment probability, tetapi **tidak membuktikannya**.

### Probability sebagai set function

[CORE CF2] Probability didefinisikan sebagai real-valued set function $P$ yang memberikan setiap event $A\subseteq S$ suatu angka $P(A)$ dengan:

1. **Non-negativity**
   $$
   P(A)\ge 0.
   $$
2. **Normalization**
   $$
   P(S)=1.
   $$
3. **Countable additivity for disjoint events**
   Jika $A_i\cap A_j=\varnothing$ untuk $i\neq j$, maka
   $$
   P\left(\bigcup_i A_i\right)=\sum_i P(A_i).
   $$

Aksioma ketiga mencakup finite maupun countably infinite collection of mutually exclusive events.

### Consequences of the axioms

#### Complement rule

Karena

$$
S=A\cup A^c,\qquad A\cap A^c=\varnothing,
$$

maka

$$
1=P(S)=P(A)+P(A^c),
$$

sehingga

$$
\boxed{P(A)=1-P(A^c)}.
$$

Ini adalah hasil yang secara matematis sederhana tetapi sangat penting: suatu event yang sulit dihitung langsung dapat diganti dengan complement yang lebih sederhana.

[TEXTBOOK EXAMPLE] Example 1.1-3 mempertimbangkan fair coin yang terus dilempar sampai dua successive flips sama. Event $A$ = “memerlukan tiga atau lebih flips”. Complement adalah berhenti tepat setelah dua flips, yaitu $\{HH,TT\}$ dari empat equally likely outcomes $\{HH,HT,TH,TT\}$. Maka

$$
P(A)=1-P(A^c)=1-\frac{2}{4}=\frac12.
$$

#### Empty event

Dengan $A=\varnothing$ pada complement rule:

$$
\boxed{P(\varnothing)=0}.
$$

#### Monotonicity

Jika $A\subseteq B$, tulis

$$
B=A\cup(B\cap A^c),
$$

dengan kedua bagian disjoint. Maka

$$
P(B)=P(A)+P(B\cap A^c)\ge P(A),
$$

sehingga

$$
\boxed{A\subseteq B\implies P(A)\le P(B)}.
$$

Karena setiap $A\subseteq S$,

$$
0\le P(A)\le 1.
$$

#### Addition rule untuk dua events

Union $A\cup B$ dapat dipecah menjadi bagian disjoint:

$$
A\cup B=A\cup(A^c\cap B).
$$

Karena

$$
B=(A\cap B)\cup(A^c\cap B),
$$

maka

$$
P(A^c\cap B)=P(B)-P(A\cap B).
$$

Substitusi menghasilkan

$$
\boxed{P(A\cup B)=P(A)+P(B)-P(A\cap B)}.
$$

Interpretasi: $P(A)+P(B)$ menghitung intersection dua kali, sehingga satu $P(A\cap B)$ harus dikurangkan.

[TEXTBOOK EXAMPLE] Jika probability dua kereta tepat waktu adalah $P(A)=0.93$ dan $P(B)=0.89$, dengan $P(A\cap B)=0.87$, maka probability minimal satu kereta tepat waktu adalah

$$
P(A\cup B)=0.93+0.89-0.87=0.95.
$$

#### Addition rule untuk tiga events

Dengan inclusion-exclusion:

$$
\boxed{
\begin{aligned}
P(A\cup B\cup C)
&=P(A)+P(B)+P(C)\\
&\quad-P(A\cap B)-P(A\cap C)-P(B\cap C)\\
&\quad+P(A\cap B\cap C).
\end{aligned}}
$$

Pairwise intersections dikurangkan karena sebelumnya dihitung dua kali; triple intersection kemudian harus ditambah kembali karena terlalu banyak dikurangkan.

### Equally likely outcomes

Misalkan finite outcome space

$$
S=\{e_1,e_2,\ldots,e_m\}
$$

memiliki $m$ equally likely outcomes sehingga

$$
P(\{e_i\})=\frac1m.
$$

Jika event $A$ berisi $h$ outcomes, maka

$$
\boxed{P(A)=\frac{h}{m}=\frac{N(A)}{N(S)}}.
$$

> [!NOTE] Assumption
> Formula $P(A)=N(A)/N(S)$ **bukan aksioma umum probabilitas**. Formula ini hanya sah ketika elementary outcomes yang dihitung memang equally likely. Fairness/equiprobability merupakan bagian dari probability model.

[TEXTBOOK EXAMPLE] Dalam deck standar 52 cards, jika setiap card equally likely, probability drawing a king adalah

$$
P(\text{king})=\frac{4}{52}=\frac1{13}.
$$

Contoh ini mempersiapkan Section 1.2: ketika outcome adalah 13-card hand, numerator dan denominator tidak lagi mudah dihitung tanpa combinatorial methods.

> [!INFO] CF2 Connection
> Section ini membangun [[1.1 Eksperimen Acak dan Ruang Sampel]] dan [[1.2 Aksioma dan Perhitungan Probabilitas]]. Hampir seluruh calculation pada chapter berikutnya bergantung pada kemampuan memodelkan event dengan set operations sebelum menerapkan formula probabilitas.

---

## 4. 1.2 Methods of Enumeration

### Intuisi

Jika outcomes equally likely, probability sering berbentuk

$$
P(A)=\frac{N(A)}{N(S)}.
$$

Masalah utamanya bergeser dari probability ke **counting**: berapa banyak outcomes yang mungkin dan berapa banyak yang memenuhi event? Section ini mengembangkan teknik enumerasi untuk menjawab pertanyaan tersebut tanpa harus menuliskan seluruh outcome satu per satu.

### Multiplication Principle

Jika procedure $E_1$ mempunyai $n_1$ outcomes dan untuk setiap outcome tersebut procedure $E_2$ mempunyai $n_2$ outcomes, maka composite procedure $E_1E_2$ memiliki

$$
\boxed{n_1n_2}
$$

outcomes.

Untuk $m$ stages:

$$
\boxed{N(E_1E_2\cdots E_m)=n_1n_2\cdots n_m}.
$$

[TEXTBOOK EXAMPLE] Memilih satu rat dari dua sexes dan salah satu dari tiga treatments menghasilkan

$$
2\times 3=6
$$

ordered outcomes. Figure 1.2-1 menggambarkan struktur ini sebagai tree diagram: setiap branch tahap pertama bercabang lagi sesuai pilihan tahap kedua.

### Permutations of distinct objects

Untuk menyusun $n$ distinct objects dalam $n$ positions:

$$
n(n-1)(n-2)\cdots 2\cdot 1=n!.
$$

Textbook mendefinisikan $0!=1$.

Setiap arrangement dari $n$ different objects disebut **permutation**.

Jika hanya $r$ positions yang diisi dari $n$ distinct objects tanpa repetition, maka

$$
{}_nP_r=n(n-1)\cdots(n-r+1)=\boxed{\frac{n!}{(n-r)!}}.
$$

[TEXTBOOK EXAMPLE] Empat-letter code dari 26 letters dengan semua letters berbeda:

$$
{}_{26}P_4=26\cdot25\cdot24\cdot23=358{,}800.
$$

Perhatikan bahwa jika repetition diperbolehkan, struktur berubah menjadi $26^4$, bukan ${}_{26}P_4$.

### Ordered samples dan replacement structure

Textbook secara eksplisit memisahkan dua keputusan:

1. apakah **order of selection** diperhatikan;
2. apakah object **replaced** setelah dipilih.

**Ordered sample of size $r$**: urutan $r$ selected objects dicatat.

#### Ordered, with replacement

Setiap draw selalu memiliki $n$ choices:

$$
\boxed{n^r}.
$$

[TEXTBOOK EXAMPLE] Rolling a six-sided die seven times setara dengan sampling with replacement dari $\{1,2,3,4,5,6\}$:

$$
6^7=279{,}936.
$$

#### Ordered, without replacement

Jumlah choices berkurang setelah tiap draw:

$$
\boxed{{}_nP_r=\frac{n!}{(n-r)!}}.
$$

### Combinations: unordered, without replacement

Jika urutan tidak diperhatikan, setiap set of $r$ distinct selected objects telah dihitung sebanyak $r!$ kali dalam ${}_nP_r$. Karena itu,

$$
{}_nC_r=\binom nr
=\frac{{}_nP_r}{r!}
=\boxed{\frac{n!}{r!(n-r)!}}.
$$

Setiap unordered subset tersebut disebut **combination**.

Sifat simetri langsung:

$$
\binom nr=\binom n{n-r}.
$$

Memilih $r$ objects untuk “masuk” equivalent dengan memilih $n-r$ objects untuk “tidak masuk”.

[TEXTBOOK EXAMPLE] Number of possible 5-card poker hands:

$$
\binom{52}{5}=2{,}598{,}960.
$$

### Binomial coefficients

Textbook menghubungkan combinations dengan expansion

$$
(a+b)^n=\sum_{r=0}^n \binom nr a^r b^{n-r}.
$$

Koefisien $\binom nr$ muncul karena untuk menghasilkan term dengan $r$ factors $a$ dan $n-r$ factors $b$, kita memilih $r$ dari $n$ positions yang menyumbangkan $a$.

Hubungan ini penting secara konseptual: combination bukan sekadar formula counting; ia juga menghitung berapa banyak terms identik yang terbentuk dalam expansion.

### Counting probability in equally likely sample spaces

[TEXTBOOK EXAMPLE] Untuk five-card hand, denominator adalah

$$
N(S)=\binom{52}{5}.
$$

Jika event $A$ = all five cards are spades, maka

$$
N(A)=\binom{13}{5}\binom{39}{0}=\binom{13}{5},
$$

sehingga

$$
P(A)=\frac{\binom{13}{5}}{\binom{52}{5}}\approx 0.000495.
$$

Jika event $B$ = exactly three kings and two queens,

$$
P(B)=\frac{\binom43\binom42\binom{44}{0}}{\binom{52}{5}}.
$$

Jika event $C$ = exactly two kings, two queens, and one jack,

$$
P(C)=\frac{\binom42\binom42\binom41\binom{40}{0}}{\binom{52}{5}}.
$$

Struktur reusable dari contoh ini adalah:

$$
\text{favorable count}
=\prod_j \binom{\text{available in category }j}{\text{selected from category }j}.
$$

Tetapi formula hanya bekerja ketika categories dan restrictions sudah didefinisikan dengan benar.

### Distinguishable permutations

Jika terdapat $n$ objects tetapi tidak semuanya distinguishable, $n!$ akan overcount arrangements.

Untuk dua types, dengan $r$ objects type pertama dan $n-r$ type kedua:

$$
\boxed{\frac{n!}{r!(n-r)!}=\binom nr}.
$$

Textbook menyebut masing-masing arrangement sebagai **distinguishable permutation**.

[TEXTBOOK EXAMPLE] 10 coin flips dengan exactly 4 heads dan 6 tails memiliki

$$
\binom{10}{4}=210
$$

possible H/T sequences.

Untuk $s$ types dengan counts $n_1,\ldots,n_s$ dan

$$
n_1+\cdots+n_s=n,
$$

jumlah distinguishable permutations adalah

$$
\boxed{\binom{n}{n_1,n_2,\ldots,n_s}
=\frac{n!}{n_1!n_2!\cdots n_s!}}.
$$

Koefisien yang sama muncul pada multinomial expansion $(a_1+\cdots+a_s)^n$.

### Four basic sampling-count structures

Dari development textbook, counting dapat diringkas secara struktural:

| Order | Replacement | Number of samples |
|---|---|---:|
| Ordered | With replacement | $n^r$ |
| Ordered | Without replacement | ${}_nP_r=\dfrac{n!}{(n-r)!}$ |
| Unordered | Without replacement | $\binom nr$ |
| Unordered | With replacement | $\binom{n+r-1}{r}$ |

Case terakhir dibahas sebagai remark/supporting extension melalui representation dengan $r$ zeros dan $n-1$ separators. Total symbols adalah $n+r-1$, dan choosing positions dari $r$ identical selected units menghasilkan

$$
\binom{n+r-1}{r}=\binom{n+r-1}{n-1}.
$$

> [!WARNING] Important Distinction
> **Permutation vs combination bukan perbedaan “formula mana yang diingat”, melainkan apakah order menghasilkan outcome yang berbeda.** Replacement adalah keputusan terpisah. Sebelum menghitung, tentukan dua hal ini secara eksplisit.

> [!INFO] CF2 Connection
> Section ini langsung mendukung [[1.3 Metode Enumerasi]]. Dalam CF2, enumeration berfungsi sebagai mesin untuk membangun numerator/denominator pada equally likely sample spaces dan juga sebagai fondasi bentuk PMF distribusi diskrit pada chapter berikutnya.

---

## 5. 1.3 Conditional Probability

### Intuisi: probability setelah informasi baru diketahui

Conditional probability muncul ketika sample space efektif dipersempit oleh informasi bahwa event tertentu telah terjadi. Jika sebelumnya semua outcomes dalam $S$ dipertimbangkan, setelah diketahui $B$ terjadi, hanya outcomes di dalam $B$ yang masih relevan.

[TEXTBOOK EXAMPLE] Misalkan terdapat 20 tulip bulbs, 13 menghasilkan red flowers dan 7 menghasilkan non-red. Delapan bulbs termasuk early bloomers, dan 5 dari 8 early bloomers menghasilkan red flowers. Tanpa informasi tambahan,

$$
P(R)=\frac{13}{20}.
$$

Jika diketahui selected bulb adalah early bloomer $E$, sample space efektif menjadi 8 early bloomers, dan favorable outcomes adalah 5 red early bloomers:

$$
P(R\mid E)=\frac58.
$$

Karena

$$
\frac58
=\frac{N(R\cap E)}{N(E)}
=\frac{N(R\cap E)/N(S)}{N(E)/N(S)},
$$

muncul bentuk

$$
\frac{P(R\cap E)}{P(E)}.
$$

### Definition of conditional probability

Untuk $P(B)>0$,

$$
\boxed{P(A\mid B)=\frac{P(A\cap B)}{P(B)}}.
$$

Interpretasi:

- numerator: probability mass yang memenuhi **A dan B**;
- denominator: seluruh probability mass yang masih mungkin setelah diketahui $B$ terjadi;
- ratio: proporsi dari conditioned space $B$ yang juga berada di $A$.

> [!WARNING] Important Distinction
> **$P(A\mid B)$ umumnya tidak sama dengan $P(B\mid A)$.**
>
> Keduanya menggunakan intersection yang sama pada numerator, tetapi denominator berbeda:
> $$
> P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad
> P(B\mid A)=\frac{P(A\cap B)}{P(A)}.
> $$

[TEXTBOOK EXAMPLE] Jika

$$
P(A)=0.4,\qquad P(B)=0.5,\qquad P(A\cap B)=0.3,
$$

maka

$$
P(A\mid B)=\frac{0.3}{0.5}=0.6,
$$

sedangkan

$$
P(B\mid A)=\frac{0.3}{0.4}=0.75.
$$

### Conditional probability is itself a probability function

Untuk fixed conditioning event $B$ dengan $P(B)>0$, function $P(\cdot\mid B)$ memenuhi probability axioms. Secara khusus:

$$
P(A\mid B)\ge0,
$$

$$
P(B\mid B)=1,
$$

serta additivity untuk mutually exclusive events.

Karena itu, semua hasil dasar seperti complement rule juga berlaku di conditioned space:

$$
\boxed{P(A^c\mid B)=1-P(A\mid B)}.
$$

Ini menguatkan interpretation bahwa conditioning pada $B$ pada dasarnya menjadikan $B$ sebagai sample space baru.

### Multiplication rule

Dari definition:

$$
P(B\mid A)=\frac{P(A\cap B)}{P(A)},
$$

sehingga

$$
\boxed{P(A\cap B)=P(A)P(B\mid A)}.
$$

Secara simetris,

$$
\boxed{P(A\cap B)=P(B)P(A\mid B)}.
$$

Textbook menyebut hubungan ini **multiplication rule**.

Kegunaan utamanya adalah ketika joint probability sulit ditetapkan langsung tetapi probability tahap pertama dan conditional probability tahap berikutnya natural dari sampling mechanism.

[TEXTBOOK EXAMPLE] Bowl berisi 7 blue chips dan 3 red chips. Dua chips ditarik successively tanpa replacement. Jika $A$ = first chip blue dan $B$ = second chip red, maka

$$
P(A)=\frac7{10},\qquad P(B\mid A)=\frac39,
$$

sehingga

$$
P(A\cap B)=\frac7{10}\cdot\frac39=\frac7{30}.
$$

Calculation mengikuti timeline eksperimen: first event probability dikalikan dengan probability second event setelah first event diketahui terjadi.

### Extension to three or more events

Untuk tiga events,

$$
P(A\cap B\cap C)
=P(A\cap B)P(C\mid A\cap B),
$$

dan

$$
P(A\cap B)=P(A)P(B\mid A).
$$

Jadi

$$
\boxed{
P(A\cap B\cap C)
=P(A)P(B\mid A)P(C\mid A\cap B)
}.
$$

Secara umum, chain multiplication rule mengikuti urutan conditioning yang semakin kaya.

[TEXTBOOK EXAMPLE] Untuk empat cards dealt successively without replacement, probability suatu sequence spesifik dihitung sebagai product probability tiap card dengan conditioning pada seluruh cards yang sudah muncul. Mekanisme tanpa replacement membuat denominator dan composition berubah pada setiap tahap.

### Decomposing an event into paths

Conditional multiplication juga memungkinkan event kompleks dihitung sebagai union dari mutually exclusive paths.

[TEXTBOOK EXAMPLE] Seorang anak memiliki marbles di left dan right pocket. Event “blue marble from right pocket” dapat terjadi melalui mutually exclusive paths berdasarkan warna yang lebih dahulu diambil dari left pocket. Jika path pertama adalah $B_L\cap B_R$ dan path kedua $W_L\cap B_R$, maka

$$
P(B_R)
=P(B_L\cap B_R)+P(W_L\cap B_R),
$$

sehingga

$$
P(B_R)
=P(B_L)P(B_R\mid B_L)
+P(W_L)P(B_R\mid W_L).
$$

Ini merupakan bentuk awal dari reasoning yang nanti diformalkan sebagai law of total probability.

> [!NOTE] Assumption
> Conditional probability $P(A\mid B)$ hanya didefinisikan oleh formula textbook ketika $P(B)>0$. Conditioning event tidak boleh memiliki zero probability dalam konteks definisi elementer ini.

> [!INFO] CF2 Connection
> Section ini adalah basis [[1.4 Probabilitas Bersyarat]]. Multiplication rule juga menjadi jembatan langsung ke [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], karena Bayes membalik arah conditioning dengan bantuan joint probability yang sama.

---

## 6. 1.4 Independent Events

### Intuisi: kapan conditioning tidak mengubah probability?

Conditional probability biasanya berubah setelah informasi baru diketahui. Tetapi terdapat situasi ketika mengetahui $A$ terjadi sama sekali tidak mengubah probability $B$. Textbook menggunakan ini untuk memotivasi independence.

Jika $P(A)>0$ dan

$$
P(B\mid A)=P(B),
$$

maka knowledge bahwa $A$ terjadi tidak membawa probabilistic information tentang $B$.

Substitusi multiplication rule memberikan

$$
P(A\cap B)=P(A)P(B\mid A)=P(A)P(B).
$$

Karena bentuk terakhir tetap bermakna bahkan ketika $P(A)=0$ atau $P(B)=0$, textbook menggunakan product criterion sebagai definition utama.

### Definition of independence

Events $A$ dan $B$ independent jika dan hanya jika

$$
\boxed{P(A\cap B)=P(A)P(B)}.
$$

Jika tidak, events dependent.

Jika probability conditioning positif, criterion ini equivalent dengan

$$
P(B\mid A)=P(B)
$$

atau

$$
P(A\mid B)=P(A).
$$

[TEXTBOOK EXAMPLE] Roll satu red die dan satu white die. Let

- $A=\{4\text{ pada red die}\}$,
- $B=\{\text{sum kedua dice odd}\}$.

Dari 36 equally likely outcomes, 6 favorable untuk $A$, 18 untuk $B$, dan 3 untuk $A\cap B$. Karena

$$
P(A)P(B)=\frac6{36}\frac{18}{36}=\frac3{36}=P(A\cap B),
$$

maka $A$ dan $B$ independent.

Sebaliknya, untuk $C=\{5\text{ pada red die}\}$ dan $D=\{\text{sum}=11\}$,

$$
P(C)P(D)=\frac6{36}\frac2{36}=\frac1{108}\neq\frac1{36}=P(C\cap D),
$$

sehingga $C$ dan $D$ dependent.

> [!WARNING] Important Distinction
> **Mutually exclusive $\neq$ independent.**
>
> Jika $A$ dan $B$ mutually exclusive dan keduanya memiliki positive probability, maka
> $$
> P(A\cap B)=0
> $$
> tetapi
> $$
> P(A)P(B)>0,
> $$
> sehingga keduanya justru dependent. Mutually exclusive berarti keduanya tidak dapat terjadi bersama; independence berarti occurrence satu event tidak mengubah chance event lainnya.

### Independence and complements

Jika $A$ dan $B$ independent, textbook menunjukkan bahwa pasangan berikut juga independent:

- $A$ dan $B^c$;
- $A^c$ dan $B$;
- $A^c$ dan $B^c$.

Untuk contoh pertama, jika $P(A)>0$,

$$
P(B^c\mid A)=1-P(B\mid A)=1-P(B)=P(B^c).
$$

Maka

$$
P(A\cap B^c)=P(A)P(B^c).
$$

Hasil lainnya mengikuti reasoning serupa.

### Pairwise independence is not mutual independence

Textbook memberikan contoh urn dengan four numbered balls dan tiga events $A,B,C$. Ketiganya memenuhi

$$
P(A\cap B)=P(A)P(B),
$$

$$
P(A\cap C)=P(A)P(C),
$$

$$
P(B\cap C)=P(B)P(C),
$$

sehingga independent **in pairs**. Namun,

$$
P(A\cap B\cap C)\neq P(A)P(B)P(C).
$$

Jadi pairwise independence tidak cukup untuk menyimpulkan mutual independence.

Untuk tiga events, textbook mendefinisikan mutual independence melalui dua conditions:

1. setiap pair independent;
2. triple intersection factorizes:
   $$
   P(A\cap B\cap C)=P(A)P(B)P(C).
   $$

Untuk lebih banyak events, mutual independence membutuhkan factorization yang sesuai untuk seluruh relevant subcollections, bukan hanya keseluruhan intersection.

### Product rule under mutual independence

Jika $A_1,\ldots,A_n$ mutually independent, maka

$$
\boxed{
P(A_1\cap A_2\cap\cdots\cap A_n)
=\prod_{i=1}^n P(A_i)
}.
$$

### Complement + independence: repeated trials

[TEXTBOOK EXAMPLE] Fair six-sided die rolled six independent times. Let $A_i$ = face $i$ appears on roll $i$. Maka

$$
P(A_i)=\frac16,
\qquad
P(A_i^c)=\frac56.
$$

Jika $B$ = at least one match, maka complement adalah no matches:

$$
B^c=A_1^c\cap A_2^c\cap\cdots\cap A_6^c.
$$

Dengan independence,

$$
P(B^c)=\left(\frac56\right)^6,
$$

sehingga

$$
\boxed{P(B)=1-\left(\frac56\right)^6\approx0.665}.
$$

Ini menyelesaikan probability yang sebelumnya di Section 1.1 hanya disimulasikan.

Struktur umum yang dibangun source adalah:

$$
P(\text{at least one})
=1-P(\text{none}),
$$

lalu independence digunakan untuk factorize probability “none”.

### Independent trials and sequences

Untuk repeated independent trials, probability sebuah particular sequence adalah product dari probabilities hasil pada setiap trial.

[TEXTBOOK EXAMPLE] Jika probability lottery win setiap hari adalah $1/5$ dan days independent, probability sequence seperti $WWLLL$ adalah

$$
\left(\frac15\right)^2\left(\frac45\right)^3.
$$

Urutan yang berbeda tetapi memiliki jumlah wins/losses yang sama akan mempunyai product yang sama ketika trial probabilities identik. Chapter berikutnya akan memanfaatkan counting banyaknya sequence semacam itu untuk membangun binomial distribution.

> [!INFO] CF2 Connection
> Section ini mendukung [[1.5 Kejadian Independen]]. Ia juga menjembatani basic probability dengan distribusi diskrit: repeated independent Bernoulli-type trials + combinatorial counting menjadi struktur Binomial di Chapter 2.

---

## 7. 1.5 Bayes' Theorem

> [!NOTE] CF2 Scope Note
> Bayes' theorem dan law of total probability merupakan learning outcome **Topik 1 CF2**. Namun, mapping referensi resmi yang diberikan mencantumkan Hogg, Tanis & Zimmerman hanya **Sections 1.1-1.4** untuk Topik 1. Karena user meminta seluruh Chapter 1, section ini tetap diringkas secara textbook-faithful, tetapi dibedakan dari official Hogg source range.

### From mutually exclusive paths to total probability

Misalkan $B_1,\ldots,B_m$ mutually exclusive dan exhaustive:

$$
B_i\cap B_j=\varnothing\quad(i\neq j),
$$

$$
B_1\cup\cdots\cup B_m=S.
$$

Setiap event $A$ dapat dipecah menjadi

$$
A=(B_1\cap A)\cup\cdots\cup(B_m\cap A),
$$

dengan pieces mutually exclusive. Maka

$$
P(A)=\sum_{i=1}^m P(B_i\cap A).
$$

Menggunakan multiplication rule:

$$
\boxed{
P(A)=\sum_{i=1}^m P(B_i)P(A\mid B_i)
}.
$$

Textbook menyebutnya **law of total probability**.

### Bayes' theorem

Untuk $P(A)>0$,

$$
P(B_k\mid A)=\frac{P(B_k\cap A)}{P(A)}.
$$

Karena

$$
P(B_k\cap A)=P(B_k)P(A\mid B_k)
$$

dan denominator diperoleh dari total probability, maka

$$
\boxed{
P(B_k\mid A)
=
\frac{P(B_k)P(A\mid B_k)}
{\sum_{i=1}^m P(B_i)P(A\mid B_i)}
}.
$$

Textbook menyebut $P(B_i)$ **prior probabilities** dan $P(B_i\mid A)$ **posterior probabilities**.

### Textbook bowl example

Tiga bowls $B_1,B_2,B_3$ dipilih dengan unequal prior probabilities. Setelah sebuah chip ditarik dan diketahui berwarna red ($R$), posterior probability bowl asal dihitung.

Pertama:

$$
P(R)=\sum_{i=1}^3P(B_i)P(R\mid B_i).
$$

Kemudian untuk setiap bowl:

$$
P(B_i\mid R)=\frac{P(B_i)P(R\mid B_i)}{P(R)}.
$$

Nilai posterior berbeda dari prior karena evidence $R$ lebih compatible dengan bowls yang mempunyai proportion red chips lebih besar.

### Base-rate effect in the screening example

Textbook menggunakan Pap smear example untuk memperlihatkan bahwa high test sensitivity tidak otomatis berarti positive test memiliki high posterior probability of disease. Jika disease sangat rare, denominator

$$
P(T^+)
=P(C^+)P(T^+\mid C^+)+P(C^-)P(T^+\mid C^-)
$$

dapat didominasi oleh false positives dari kelompok non-disease yang sangat besar.

Posterior adalah

$$
P(C^+\mid T^+)
=\frac{P(C^+)P(T^+\mid C^+)}{P(T^+)}.
$$

Textbook memakai contoh ini untuk menunjukkan bahwa prior/base rate merupakan komponen matematika yang tidak boleh diabaikan ketika conditioning dibalik.

> [!WARNING] Important Distinction
> **$P(A\mid B)$ tidak dapat “dibalik” menjadi $P(B\mid A)$ tanpa prior/base rate information.** Bayes' theorem bukan sekadar pertukaran posisi symbols; denominator harus mengakumulasi seluruh paths yang dapat menghasilkan evidence.

---

## Important Distinctions and Assumptions

> [!WARNING] Important Distinction
> **Event vs outcome** — outcome adalah single result; event adalah subset dari possible outcomes.

> [!WARNING] Important Distinction
> **Mutually exclusive vs independent** — mutually exclusive positive-probability events tidak dapat terjadi bersama dan karena itu tidak independent; independent events dapat terjadi bersama dengan joint probability berupa product marginals.

> [!WARNING] Important Distinction
> **Conditional vs joint probability** — $P(A\mid B)$ adalah joint mass $P(A\cap B)$ yang dinormalisasi oleh $P(B)$.

> [!NOTE] Assumption
> Counting formula $P(A)=N(A)/N(S)$ membutuhkan equally likely elementary outcomes.

> [!NOTE] Assumption
> Multiplying event probabilities langsung sebagai $P(A\cap B)=P(A)P(B)$ membutuhkan independence. Tanpa independence, gunakan $P(A)P(B\mid A)$.

> [!WARNING] Important Distinction
> **Pairwise independence vs mutual independence** — semua pairs independent belum cukup untuk menjamin joint factorization tiga atau lebih events.

> [!NOTE] Assumption
> $P(A\mid B)$ menurut definisi elementer chapter ini memerlukan $P(B)>0$.

---

## Chapter Synthesis

Chapter 1 dapat dipahami sebagai satu progression dari **struktur event** menuju **struktur informasi**.

Pertama, random experiment menghasilkan outcome di dalam $S$. Pertanyaan probabilistik diterjemahkan menjadi subsets $A,B,\ldots$ dan hubungan logis antarpertanyaan diterjemahkan menjadi union, intersection, complement, disjointness, dan exhaustiveness. Probability kemudian ditempatkan di atas struktur set tersebut sebagai function $P$ yang harus nonnegative, normalized, dan additive untuk disjoint events. Complement rule, monotonicity, dan addition rule bukan formula terpisah; semuanya merupakan consequences dari tiga axioms tadi.

Untuk finite equally likely sample spaces, probability dapat dihitung dengan counting. Karena enumeration manual cepat menjadi tidak praktis, multiplication principle membangun seluruh family counting formulas. Permutations menangani ordered selections; combinations muncul ketika order diabaikan; replacement menentukan apakah choices tetap atau berkurang; distinguishable permutations memperbaiki overcount ketika objects of the same type tidak dapat dibedakan. Dengan demikian, combinatorics menyediakan $N(A)$ dan $N(S)$ yang diperlukan oleh elementary probability model.

Conditional probability lalu mengubah sudut pandang: setelah $B$ diketahui terjadi, probability mass dinormalisasi di dalam $B$. Dari definisi ini muncul multiplication rule, yang memungkinkan joint event dihitung sebagai path probability. Independence adalah special case ketika conditioning tidak mengubah probability, sehingga multiplication rule menyederhana menjadi product of marginal probabilities. Untuk beberapa events, pairwise relationships belum cukup; mutual independence membutuhkan factorization pada joint structures yang relevan.

Akhirnya, jika sample space dipartition menjadi possible causes $B_i$, event evidence $A$ dapat dihitung sebagai sum of mutually exclusive paths $B_i\cap A$. Law of total probability menghitung probability evidence; Bayes' theorem menggunakan probability evidence tersebut untuk mengubah prior $P(B_i)$ menjadi posterior $P(B_i\mid A)$. Dengan demikian, seluruh chapter menghubungkan logika set, counting, conditioning, dan updating dalam satu probability framework yang konsisten.

## Key Relationships

| Relationship / Concept | Meaning | Conditions / Support | CF2 Link |
|---|---|---|---|
| $A^c$ | Outcomes in $S$ not in $A$ | $A\subseteq S$ | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
| $P(S)=1$ | Total probability mass | Probability axiom | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| $P(A^c)=1-P(A)$ | Complement probability | Any event $A$ | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| $A\subseteq B\Rightarrow P(A)\le P(B)$ | Monotonicity | Any events | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ | Addition rule | Any two events | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| $P(A)=N(A)/N(S)$ | Favorable/total counting | Finite, equally likely outcomes | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
| $n_1\cdots n_m$ | Multiplication principle | Sequential procedure with stated choices | [[1.3 Metode Enumerasi]] |
| ${}_nP_r=n!/(n-r)!$ | Ordered selection without replacement | $0\le r\le n$ | [[1.3 Metode Enumerasi]] |
| $\binom nr=n!/[r!(n-r)!]$ | Unordered selection without replacement | $0\le r\le n$ | [[1.3 Metode Enumerasi]] |
| $n^r$ | Ordered selection with replacement | $r$ draws, $n$ choices each | [[1.3 Metode Enumerasi]] |
| $n!/(n_1!\cdots n_s!)$ | Distinguishable permutations | $\sum_i n_i=n$ | [[1.3 Metode Enumerasi]] |
| $P(A\mid B)=P(A\cap B)/P(B)$ | Probability inside conditioned space | $P(B)>0$ | [[1.4 Probabilitas Bersyarat]] |
| $P(A\cap B)=P(A)P(B\mid A)$ | Multiplication rule | $P(A)>0$ for conditional form | [[1.4 Probabilitas Bersyarat]] |
| $P(A\cap B)=P(A)P(B)$ | Independence criterion | Definition of independent events | [[1.5 Kejadian Independen]] |
| Pairwise $\not\Rightarrow$ mutual independence | Pair checks do not guarantee full joint factorization | Three or more events | [[1.5 Kejadian Independen]] |
| $P(A)=\sum_iP(B_i)P(A\mid B_i)$ | Total probability | $B_i$ mutually exclusive and exhaustive | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
| $P(B_k\mid A)=\dfrac{P(B_k)P(A\mid B_k)}{\sum_iP(B_i)P(A\mid B_i)}$ | Bayesian updating | Partition $B_i$, positive denominator | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |

## Notation Used in This Chapter

| Symbol | Meaning | Support / Domain / Unit | Notes |
|---|---|---|---|
| $S$ | Outcome/sample space | Set of all possible outcomes | Textbook uses “outcome space” |
| $A,B,C$ | Events | Subsets of $S$ | Set operations apply |
| $\varnothing$ | Empty/null event | No outcomes | $P(\varnothing)=0$ |
| $A^c$ | Complement of $A$ | Relative to $S$ | Text extraction may render prime-like symbol; note uses standard $A^c$ |
| $A\cup B$ | Union | Event | “A or B or both” |
| $A\cap B$ | Intersection | Event | “A and B” |
| $P(A)$ | Probability of event $A$ | $[0,1]$ | Set function |
| $N(A)$ | Number/frequency of outcomes in $A$ depending context | Nonnegative integer | In counting context, cardinality/favorable outcomes |
| $n!$ | Factorial | $n\in\{0,1,2,\ldots\}$ | $0!=1$ |
| ${}_nP_r$ | Permutations of $n$ objects taken $r$ at a time | $0\le r\le n$ | Ordered, without replacement |
| ${}_nC_r=\binom nr$ | Combinations | $0\le r\le n$ | Unordered, without replacement |
| $P(A\mid B)$ | Conditional probability of $A$ given $B$ | $P(B)>0$ | Conditioning restricts effective sample space |
| $B_1,\ldots,B_m$ | Partition events in Bayes section | Mutually exclusive and exhaustive | Used for total probability |

## Compression Notes

### Retained in Detail

- random experiment, outcome space, event, and set algebra;
- probability axioms and their principal consequences;
- complement and inclusion-exclusion reasoning;
- equally likely outcome model and its required assumption;
- multiplication principle, permutations, combinations, replacement structure, distinguishable permutations;
- conceptual derivation of conditional probability and multiplication rule;
- independence, complement relationships, pairwise vs mutual independence;
- representative repeated-trial calculation;
- law of total probability and Bayes' theorem because Chapter 1 was requested in full.

### Condensed

- historical and general-statistics opening narrative;
- repeated examples that apply the same counting formula;
- long exercise sets;
- repeated numerical arithmetic once the mathematical structure was clear;
- software/table references for combinatorial coefficients;
- extended narrative surrounding applications when it did not introduce a new probability mechanism.

### Omitted / Beyond CF2

- end-of-chapter historical notes and biographical discussion were omitted;
- most exercises were not reproduced;
- Section 1.5 was retained only as a condensed continuation because Bayes is a CF2 learning outcome, while the supplied syllabus maps Hogg-Tanis to Sections 1.1-1.4 for Topik 1.

## CF2 Connection Map

```text
Random experiment
      ↓
Outcome space S and events
      ↓
Set algebra / Venn regions
      ↓
Probability axioms
      ↓
Complement + addition rules
      ↓
[[1.1 Eksperimen Acak dan Ruang Sampel]]
[[1.2 Aksioma dan Perhitungan Probabilitas]]

Equally likely outcomes
      ↓
Count N(A) and N(S)
      ↓
Multiplication principle
      ↓
Permutation / combination / replacement
      ↓
[[1.3 Metode Enumerasi]]

Additional information B
      ↓
P(A|B)
      ↓
Multiplication rule
      ↓
[[1.4 Probabilitas Bersyarat]]
      ↓
Conditioning changes nothing
      ↓
Independence
      ↓
[[1.5 Kejadian Independen]]

Partition B1,...,Bm
      ↓
Total probability of evidence A
      ↓
Reverse conditioning
      ↓
Bayes posterior
      ↓
[[1.6 Teorema Bayes dan Hukum Probabilitas Total]]
```

## Quick Reading Review

- Random experiment memiliki outcome yang belum diketahui beforehand tetapi seluruh possible outcomes dapat dideskripsikan sebagai $S$.
- Event adalah subset dari $S$; karena itu union, intersection, complement, disjointness, dan exhaustiveness adalah bahasa dasar probability.
- Probability adalah set function dengan non-negativity, normalization, dan countable additivity pada disjoint events.
- Complement rule dan addition rule diturunkan dari axioms; keduanya bukan assumptions tambahan.
- Formula favorable/total hanya valid ketika elementary outcomes equally likely.
- Enumeration dimulai dari multiplication principle; permutations dan combinations hanyalah special structures dari sequential counting.
- Selalu pisahkan dua pertanyaan pada sampling: **apakah order matters?** dan **with or without replacement?**
- Conditional probability menormalisasi joint probability di dalam conditioning event: $P(A\mid B)=P(A\cap B)/P(B)$.
- Multiplication rule $P(A\cap B)=P(A)P(B\mid A)$ berlaku umum; product marginals $P(A)P(B)$ hanya berlaku untuk independent events.
- Mutually exclusive positive-probability events bukan independent.
- Pairwise independence tidak menjamin mutual independence untuk tiga atau lebih events.
- At-least-one probabilities pada independent trials sering dibangun textbook melalui complement: $1-P(\text{none})$.
- Law of total probability menjumlahkan mutually exclusive paths menuju event yang sama.
- Bayes' theorem menggunakan prior, conditional evidence probability, dan total evidence probability untuk menghasilkan posterior.

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Chapter overview and purpose | Chapter 1 opening; Section 1.1 introduction |
| Random experiment, outcome space, event, set algebra | Section 1.1, opening definitions and Figures 1.1-1 to 1.1-2 |
| Relative frequency and probability axioms | Section 1.1; Example 1.1-1; Definition 1.1-1 |
| Complement, monotonicity, addition rules | Section 1.1; Theorems 1.1-1 through 1.1-6 |
| Equally likely outcomes | Section 1.1, final development and Example 1.1-6 |
| Multiplication principle and permutations | Section 1.2; Examples 1.2-1 through 1.2-5 |
| Ordered samples and replacement | Section 1.2; Definitions 1.2-3 through 1.2-5 |
| Combinations and binomial coefficients | Section 1.2; Definition 1.2-6 and subsequent development |
| Distinguishable permutations / multinomial coefficient | Section 1.2; Definition 1.2-7 and subsequent examples |
| Conditional probability | Section 1.3; Examples 1.3-1 through 1.3-4; Definition 1.3-1 |
| Multiplication rule and sequential conditioning | Section 1.3; Definition 1.3-2 and subsequent examples |
| Independence | Section 1.4; Definition 1.4-1; Theorem 1.4-1 |
| Pairwise vs mutual independence | Section 1.4; Definition 1.4-2 and preceding counterexample |
| Repeated independent trials | Section 1.4; Examples including the six-roll match problem and lottery sequence |
| Total probability and Bayes' theorem | Section 1.5; Equations 1.5-1 and 1.5-2 and Bayes formula |
| Prior/posterior interpretation and applications | Section 1.5; bowl, factory-spring, and Pap-smear examples |
