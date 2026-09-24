---
title: Chapter 2 - Probability
book: Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed.
chapter: 2
exam: CF2
scope: Topik 1 — Dasar-Dasar Probabilitas
tags:
  - CF2
  - Miller
  - Probabilitas
  - RuangSampel
  - Kejadian
  - ProbabilitasBersyarat
  - Independensi
  - Bayes
status: condensed-textbook-note
language: id
---

# Miller Chapter 2 — Probabilitas

> [!ABSTRACT] Tujuan chapter
> Chapter 2 membangun kerangka probabilitas yang digunakan sepanjang sisa buku. Miller bergerak dari interpretasi probabilitas menuju **ruang sampel dan kejadian**, kemudian memperkenalkan postulat probabilitas dan aturan turunannya, probabilitas bersyarat, aturan perkalian, independensi kejadian, hukum probabilitas total, dan Teorema Bayes. Chapter ini hampir seluruhnya memetakan CF2 Topik 1.

## 1. Pendahuluan

`[CORE CF2 / SUPPORTING CONTEXT]`

Miller membedakan beberapa interpretasi probabilitas sebelum mengadopsi kerangka aksiomatik.

### Probabilitas klasik

Jika suatu eksperimen mempunyai $N$ hasil elementer yang sama mungkin dan kejadian $A$ terdiri atas $n$ hasil yang mendukung kejadian tersebut, maka

$$
P(A)=\frac{n}{N}.
$$

Contoh: satu set kartu biasa mempunyai 4 ace dari 52 kartu yang diasumsikan sama mungkin, sehingga

$$
P(\text{ace})=\frac4{52}=\frac1{13}.
$$

`[ASSUMPTION]` Rasio ini valid karena hasil-hasil elementer diasumsikan memiliki peluang yang sama. Pencacahan saja tidak cukup untuk membenarkan formula probabilitas ini.

### Interpretasi frekuensi

Probabilitas juga dapat dipahami sebagai proporsi jangka panjang terjadinya suatu event ketika eksperimen diulang berkali-kali pada kondisi yang sebanding. Probabilitas $0.84$, misalnya, berarti event tersebut diperkirakan terjadi sekitar 84% dari banyak pengulangan.

### Pendekatan aksiomatik

Chapter kemudian memperlakukan probabilitas sebagai objek matematis yang memenuhi sekumpulan aturan dasar. Interpretasi klasik atau frekuensi dapat digunakan dalam aplikasi selama probabilitas yang diberikan memenuhi aturan tersebut.

Pemisahan ini penting:

```text
interpretasi / data / asumsi
          ↓
menetapkan probabilitas
          ↓
aksioma membatasi perilaku probabilitas
```

---

# 2. Ruang Sampel

`[CORE CF2]`

Miller menggunakan istilah **eksperimen** secara luas untuk setiap proses observasi atau pengukuran. Hasil-hasil yang mungkin disebut **outcomes**.

## Definisi — ruang sampel

Himpunan seluruh hasil yang mungkin dari suatu eksperimen disebut **ruang sampel**, biasanya dilambangkan dengan $S$. Setiap elemennya disebut **titik sampel**.

### Contoh diskrit berhingga — satu lemparan koin

$$
S=\{H,T\}.
$$

### Ruang sampel yang dideskripsikan dengan aturan

Untuk ruang yang besar atau tak berhingga, Miller dapat mendeskripsikan outcome melalui suatu sifat, misalnya

$$
S=\{2k+1:k=0,1,2,\ldots\}
$$

untuk bilangan bulat positif ganjil.

### Pemilihan tingkat detail ruang sampel

Ruang sampel harus mempertahankan seluruh informasi yang dibutuhkan pertanyaan.

Untuk satu dadu, jika sisi yang terlihat relevan:

$$
S=\{1,2,3,4,5,6\}.
$$

Untuk dua dadu yang dapat dibedakan, ruang yang natural adalah pasangan terurut:

$$
S=\{(i,j):i,j\in\{1,\ldots,6\}\}.
$$

Ruang ini memiliki 36 titik sampel. Jika langsung direduksi menjadi total $2,3,\ldots,12$, informasi akan hilang dan—yang lebih penting—nilai total tersebut tidak sama mungkin.

### Ruang sampel diskrit versus kontinu

Ruang sampel disebut **diskrit** jika titik-titiknya dapat didaftarkan secara berhingga atau terhitung. Ruang sampel **kontinu** mengandung suatu kontinum, misalnya interval waktu hidup atau pengukuran fisik.

Contoh ruang untuk lifetime:

$$
S=\{t:t\ge0\}.
$$

`[IMPORTANT DISTINCTION]` Ruang sampel kontinu tidak berarti setiap subset akan memperoleh probabilitas melalui penjumlahan peluang per titik; mekanisme probabilitas pada kasus kontinu berbeda dari kasus diskrit.

---

# 3. Kejadian

`[CORE CF2]`

## Definisi — kejadian

Sebuah **kejadian (event)** adalah subset dari ruang sampel.

Dengan demikian, pertanyaan probabilitas dapat diubah menjadi pertanyaan himpunan.

### Contoh textbook — hasil dadu habis dibagi 3

Untuk

$$
S=\{1,2,3,4,5,6\},
$$

kejadiannya adalah

$$
A=\{3,6\}.
$$

### Contoh textbook — total 7 dari dua dadu

Dengan ruang sampel pasangan terurut:

$$
B=\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}.
$$

### Contoh textbook — sequence hit/miss

Misalkan 0 menyatakan miss dan 1 menyatakan hit untuk tiga tembakan. Ruang sampelnya mempunyai $2^3=8$ sequence.

- miss ketiga-tiganya:

$$
M=\{(0,0,0)\};
$$

- tepat satu hit:

$$
N=\{(1,0,0),(0,1,0),(0,0,1)\}.
$$

Contoh ini menghubungkan langsung teknik pencacahan Chapter 1 dengan pembentukan event.

### Operasi kejadian

Untuk kejadian $A,B\subseteq S$:

- union $A\cup B$: $A$ atau $B$ atau keduanya;
- intersection $A\cap B$: $A$ dan $B$ terjadi;
- complement $A^c$: outcome dalam $S$ yang tidak berada dalam $A$.

Miller menggunakan diagram Venn untuk memvisualisasikan daerah-daerah tersebut.

## Kejadian saling lepas

Dua kejadian disebut mutually exclusive atau **saling lepas** apabila

$$
A\cap B=\varnothing.
$$

Keduanya tidak mungkin terjadi secara bersamaan.

`[IMPORTANT DISTINCTION]`

> **Saling lepas tidak sama dengan independen.** Jika dua event yang masing-masing memiliki probabilitas positif saling lepas, terjadinya salah satu justru meniadakan event yang lain; karena itu keduanya dependent.

### Hukum himpunan yang berguna

Latihan textbook menguatkan beberapa identitas berikut.

**Asosiatif:**

$$
(A\cup B)\cup C=A\cup(B\cup C),
$$

dan analog untuk intersection.

**Distributif:**

$$
A\cap(B\cup C)=(A\cap B)\cup(A\cap C),
$$

$$
A\cup(B\cap C)=(A\cup B)\cap(A\cup C).
$$

**De Morgan:**

$$
(A\cap B)^c=A^c\cup B^c,
$$

$$
(A\cup B)^c=A^c\cap B^c.
$$

Identitas ini bukan sekadar notasi: sering kali suatu event probabilitas yang sulit dapat diubah menjadi bentuk complement atau dekomposisi saling lepas yang lebih mudah dihitung.

---

# 4. Probabilitas Suatu Kejadian

`[CORE CF2]`

Miller memperkenalkan postulat probabilitas untuk ruang sampel diskrit.

## Postulat probabilitas

Untuk event dalam $S$:

1. **Non-negativitas**

$$
P(A)\ge0.
$$

2. **Normalisasi**

$$
P(S)=1.
$$

3. **Aditivitas untuk event saling lepas**

Jika $A_1,A_2,\ldots$ saling lepas, maka

$$
P\left(\bigcup_i A_i\right)=\sum_iP(A_i).
$$

Postulat ini membatasi penetapan probabilitas yang diperbolehkan, tetapi tidak otomatis menentukan nilai numeriknya dalam sebuah aplikasi nyata.

### Probabilitas event dari probabilitas titik sampel

Untuk ruang diskrit, jika event $A$ terdiri atas titik sampel $s_1,s_2,\ldots$, maka

$$
\boxed{P(A)=\sum_{s\in A}P(\{s\})}.
$$

Teorema ini adalah bentuk umum dari formula pencacahan equally likely. Jika semua $N$ titik sampel mempunyai probabilitas $1/N$ dan $A$ terdiri dari $n$ titik, maka

$$
P(A)=n\left(\frac1N\right)=\frac nN.
$$

Jadi probabilitas klasik merupakan kasus khusus dari kerangka aksiomatik.

---

# 5. Beberapa Aturan Probabilitas

`[CORE CF2]`

Miller menurunkan sejumlah konsekuensi praktis dari postulat.

## 5.1 Event kosong

$$
\boxed{P(\varnothing)=0}.
$$

## 5.2 Aturan complement

Karena $A$ dan $A^c$ saling lepas dan union-nya adalah $S$,

$$
P(A)+P(A^c)=1,
$$

sehingga

$$
\boxed{P(A^c)=1-P(A)}.
$$

Aturan ini sangat berguna untuk event seperti “setidaknya satu”.

## 5.3 Monotonisitas

Jika

$$
A\subseteq B,
$$

maka

$$
\boxed{P(A)\le P(B)}.
$$

Ini memberikan sanity check: event yang lebih sempit tidak mungkin memiliki probabilitas lebih besar daripada event yang memuatnya.

## 5.4 Aturan penjumlahan untuk dua kejadian

Untuk sembarang $A$ dan $B$,

$$
\boxed{P(A\cup B)=P(A)+P(B)-P(A\cap B)}.
$$

### Mengapa intersection dikurangkan?

Penjumlahan $P(A)+P(B)$ menghitung daerah $A\cap B$ dua kali. Karena itu perlu dikurangkan sekali.

Jika $A$ dan $B$ saling lepas, maka $P(A\cap B)=0$, sehingga diperoleh aturan penjumlahan biasa.

## 5.5 Inclusion–exclusion untuk tiga kejadian

Miller memperluas logika yang sama menjadi

$$
\boxed{
\begin{aligned}
P(A\cup B\cup C)
={}&P(A)+P(B)+P(C)\\
&-P(A\cap B)-P(A\cap C)-P(B\cap C)\\
&+P(A\cap B\cap C).
\end{aligned}
}
$$

Tanda berganti karena pengurangan intersection berpasangan menghilangkan daerah triple-overlap terlalu banyak, sehingga harus ditambahkan kembali sekali.

### Struktur contoh textbook

Untuk tiga kondisi medis $C,F,E$, Miller memasukkan probabilitas tunggal, berpasangan, dan tiga sekaligus ke formula dan memperoleh probabilitas union $0.66$. Hal terpenting bukan aritmetikanya, melainkan logika pencatatan daerah overlap.

---

# 6. Probabilitas Bersyarat

`[CORE CF2]`

Probabilitas bersyarat memformalkan perubahan probabilitas ketika informasi tambahan membatasi outcome yang masih mungkin.

Misalkan diketahui bahwa event $B$ telah terjadi. Ruang sampel efektif menjadi $B$, sedangkan bagian yang mendukung $A$ menjadi $A\cap B$. Ini memotivasi

$$
\boxed{
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
},\qquad P(B)>0.
$$

`[ASSUMPTION]` Dalam definisi elementer ini, event yang menjadi kondisi harus memiliki probabilitas positif.

## 6.1 Conditioning tidak simetris

Secara umum,

$$
P(A\mid B)\neq P(B\mid A).
$$

Numerator intersection sama, tetapi denominator berbeda:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},
\qquad
P(B\mid A)=\frac{P(A\cap B)}{P(A)}.
$$

## 6.2 Aturan perkalian

Mengatur ulang definisi probabilitas bersyarat memberikan

$$
\boxed{
P(A\cap B)=P(B)P(A\mid B)
}
$$

atau secara ekuivalen

$$
\boxed{
P(A\cap B)=P(A)P(B\mid A)
}.
$$

Formula ini sangat natural untuk event berurutan: probabilitas mencapai suatu jalur sama dengan probabilitas tahap pertama dikalikan probabilitas bersyarat tahap berikutnya.

### Dengan replacement versus tanpa replacement

Contoh sampling Miller menunjukkan perbedaan mendasar.

**Dengan replacement:** komposisi kembali seperti semula, sehingga selection dapat tetap independen dan probabilitas tiap tahap tidak berubah.

**Tanpa replacement:** komposisi berubah, sehingga probabilitas tahap berikutnya harus dikondisikan pada hasil sebelumnya.

Misalkan populasi terdiri dari 20 objek dengan 5 defective. Probabilitas defective pada pengambilan pertama adalah

$$
\frac5{20}.
$$

Jika satu defective diambil dan tidak dikembalikan, probabilitas defective berikutnya menjadi

$$
\frac4{19},
$$

bukan $5/20$.

## 6.3 Aturan perkalian untuk tiga kejadian

Aturan dua event dapat diperluas menjadi

$$
\boxed{
P(A\cap B\cap C)
=P(A)P(B\mid A)P(C\mid A\cap B)
}.
$$

Secara lebih umum, probabilitas sebuah jalur gabungan adalah perkalian probabilitas bersyarat secara berurutan.

Mental model:

```text
awal
 ↓ P(A)
A
 ↓ P(B | A)
A∩B
 ↓ P(C | A∩B)
A∩B∩C
```

Ini adalah analog probabilistik dari prinsip perkalian pada Chapter 1.

---

# 7. Kejadian Independen

`[CORE CF2]`

Secara intuitif, event disebut independen ketika terjadinya atau tidak terjadinya satu event tidak mengubah probabilitas event lainnya.

Jika conditional probabilities terdefinisi, independensi berarti

$$
P(B\mid A)=P(B)
$$

dan secara ekuivalen

$$
P(A\mid B)=P(A).
$$

Miller menggunakan kriteria perkalian sebagai definisi formal karena tetap bekerja dengan baik pada kasus probabilitas nol.

## Definisi — independensi dua kejadian

$$
\boxed{
A\text{ dan }B\text{ independen}
\iff
P(A\cap B)=P(A)P(B)
}.
$$

Jika kesamaan ini tidak terpenuhi, event dependent.

### Contoh textbook — tiga lemparan koin

Miller mendefinisikan event $A,B,C$ dalam delapan sequence yang sama mungkin dan menunjukkan:

- $A$ dan $B$ memenuhi kriteria perkalian dan independen;
- $B$ dan $C$ tidak memenuhinya dan dependent.

Contoh ini penting karena independensi harus diverifikasi dari probabilitas, bukan semata-mata dari intuisi verbal.

## 7.1 Complement mempertahankan independensi

Miller membuktikan, misalnya, bahwa jika $A$ dan $B$ independen, maka $A$ dan $B^c$ juga independen.

Mulai dari

$$
A=(A\cap B)\cup(A\cap B^c),
$$

dengan kedua bagian saling lepas,

$$
P(A)=P(A\cap B)+P(A\cap B^c).
$$

Karena independen,

$$
P(A\cap B)=P(A)P(B),
$$

sehingga

$$
\begin{aligned}
P(A\cap B^c)
&=P(A)-P(A)P(B)\\
&=P(A)[1-P(B)]\\
&=P(A)P(B^c).
\end{aligned}
$$

Maka $A$ dan $B^c$ independen.

Hasil serupa berlaku untuk $A^c$ dengan $B$ dan untuk $A^c$ dengan $B^c$.

## 7.2 Independensi lebih dari dua kejadian

Definisi Miller mensyaratkan bahwa **setiap intersection dari subset mana pun yang terdiri atas 2,3,...,$k$ event harus dapat difaktorkan menjadi perkalian probabilitas marginal terkait**.

Untuk tiga event $A,B,C$, mutual independence memerlukan keempat kondisi:

$$
P(A\cap B)=P(A)P(B),
$$

$$
P(A\cap C)=P(A)P(C),
$$

$$
P(B\cap C)=P(B)P(C),
$$

dan

$$
P(A\cap B\cap C)=P(A)P(B)P(C).
$$

`[IMPORTANT DISTINCTION]`

> Independensi berpasangan (pairwise independence) tidak cukup untuk menjamin mutual independence.

### Contoh textbook — pairwise tetapi tidak mutually independent

Miller memberikan konstruksi diagram Venn dengan

$$
P(A)=P(B)=P(C)=\frac12,
$$

seluruh intersection berpasangan bernilai $1/4$, tetapi

$$
P(A\cap B\cap C)=\frac14
\neq
\frac18
=P(A)P(B)P(C).
$$

Jadi setiap pasang event independen, tetapi ketiganya tidak mutually independent.

## 7.3 Probabilitas hasil berurutan untuk repeated independent trials

Setelah independensi ditetapkan, probabilitas sequence gabungan menjadi perkalian sederhana.

### Contoh textbook — tiga head

Untuk tiga toss koin fair yang independen:

$$
P(HHH)
=\left(\frac12\right)^3
=\frac18.
$$

### Contoh textbook — empat angka enam lalu satu bukan enam

Untuk lima lemparan dadu independen:

$$
P(6,6,6,6,\text{bukan }6)
=\left(\frac16\right)^4\left(\frac56\right)
=\frac5{7776}.
$$

Perhatikan bahwa ini adalah probabilitas dari **satu sequence tertentu**, bukan “tepat empat angka enam dalam urutan apa pun.” Untuk yang terakhir diperlukan faktor pencacahan.

---

# 8. Teorema Bayes

`[CORE CF2]`

Miller mengembangkan Bayes melalui eksperimen bertahap.

## 8.1 Hukum probabilitas total dua cabang

Misalkan event $A$ dapat terjadi melalui $B$ atau $B^c$. Maka

$$
A=(A\cap B)\cup(A\cap B^c),
$$

dan kedua bagian saling lepas. Karena itu

$$
P(A)=P(A\cap B)+P(A\cap B^c).
$$

Menggunakan aturan perkalian:

$$
\boxed{
P(A)=P(B)P(A\mid B)+P(B^c)P(A\mid B^c)
}.
$$

### Contoh textbook — keterlambatan proyek konstruksi

Diberikan:

- $P(B)=0.60$ untuk terjadinya strike;
- $P(A\mid B)=0.35$ untuk proyek selesai tepat waktu jika terjadi strike;
- $P(A\mid B^c)=0.85$ jika tidak terjadi strike.

Maka

$$
\begin{aligned}
P(A)
&=(0.60)(0.35)+(0.40)(0.85)\\
&=0.55.
\end{aligned}
$$

Strukturnya lebih penting daripada konteks spesifik: pecah event menjadi jalur yang saling lepas, hitung probabilitas tiap jalur, lalu jumlahkan.

## 8.2 Partisi

Event $B_1,\ldots,B_k$ membentuk **partisi** dari $S$ jika:

1. saling lepas secara berpasangan;
2. union-nya sama dengan $S$.

Artinya tepat satu dari $B_i$ terjadi.

## 8.3 Hukum probabilitas total

Jika $B_1,\ldots,B_k$ merupakan partisi $S$ dan $P(B_i)>0$, maka untuk event $A$:

$$
\boxed{
P(A)=\sum_{i=1}^kP(B_i)P(A\mid B_i)
}.
$$

### Derivasi

Karena partisi mencakup seluruh ruang sampel,

$$
A=\bigcup_{i=1}^k(A\cap B_i),
$$

dan seluruh intersection tersebut saling lepas. Maka

$$
P(A)=\sum_iP(A\cap B_i).
$$

Terapkan aturan perkalian:

$$
P(A\cap B_i)=P(B_i)P(A\mid B_i).
$$

Sehingga diperoleh formula total probability.

Hukum ini dapat dipahami sebagai **rata-rata tertimbang probabilitas bersyarat**, dengan bobot berupa prior probability $P(B_i)$.

## 8.4 Teorema Bayes

Misalkan $B_1,\ldots,B_k$ membentuk partisi dan event $A$ memiliki probabilitas positif. Untuk cabang $B_r$,

$$
P(B_r\mid A)
=
\frac{P(A\cap B_r)}{P(A)}.
$$

Numerator:

$$
P(A\cap B_r)=P(B_r)P(A\mid B_r),
$$

sedangkan denominator diperoleh dari hukum probabilitas total. Maka

$$
\boxed{
P(B_r\mid A)
=
\frac{P(B_r)P(A\mid B_r)}
{\sum_{i=1}^kP(B_i)P(A\mid B_i)}
}.
$$

### Interpretasi bobot jalur

Definisikan

$$
w_i=P(B_i)P(A\mid B_i).
$$

Maka

$$
P(B_r\mid A)=\frac{w_r}{\sum_iw_i}.
$$

Jadi Bayes dapat dipahami sebagai **normalisasi bobot semua jalur yang dapat menghasilkan evidence yang diamati**.

### Contoh textbook — rental agencies

Contoh rental car Miller mempunyai tiga agency. Probabilitas bahwa kendaraan yang diterima memerlukan ganti oli terlebih dahulu dihitung dari tiga bobot jalur. Jika diketahui kendaraan memang perlu ganti oli, probabilitas posterior bahwa kendaraan berasal dari agency 2 adalah

$$
\frac{(0.30)(0.20)}
{(0.60)(0.09)+(0.30)(0.20)+(0.10)(0.06)}
=0.5.
$$

Meskipun agency 2 hanya menyuplai 30% kendaraan, agency tersebut menyumbang 50% dari kendaraan yang perlu ganti oli karena conditional oil-change rate-nya lebih tinggi.

### Contoh textbook — penyakit langka dan false positive

Miller menggunakan contoh screening penyakit langka untuk menunjukkan **base-rate effect**. Bahkan test dengan detection probability tinggi pada penderita penyakit dapat menghasilkan banyak false positives ketika prevalence penyakit sangat kecil.

Pelajaran matematisnya:

> probabilitas posterior ditentukan bersama-sama oleh prior/base rate dan conditional evidence rates.

Nilai $P(\text{positive}\mid\text{disease})$ yang tinggi saja tidak menentukan $P(\text{disease}\mid\text{positive})$.

---

# 9. Teori dalam Praktik

`[CF2 SUPPORTING CONTEXT]`

Miller menutup chapter dengan menekankan penerapan, bukan hukum probabilitas baru. Kerangka matematis membutuhkan penerjemahan situasi nyata secara disiplin menjadi:

- ruang sampel;
- event;
- penetapan probabilitas;
- jalur conditional atau partisi ketika informasi diperoleh secara berurutan.

Dalam praktik, model probabilitas bergantung pada asumsi. Jawaban dapat benar secara aljabar tetapi buruk secara ilmiah apabila definisi outcome, asumsi sama mungkin, asumsi independensi, atau struktur conditioning-nya keliru.

---

# Sintesis Chapter

Alur konseptual Chapter 2 sangat koheren:

```text
eksperimen acak
      ↓
ruang sampel S
      ↓
event sebagai subset
      ↓
aksioma probabilitas
      ↓
aturan probabilitas turunan
      ↓
conditioning pada informasi baru
      ↓
aturan perkalian
      ↓
independensi sebagai faktorisasi
      ↓
partisi menjadi jalur penyebab/sumber
      ↓
hukum probabilitas total
      ↓
normalisasi posterior Bayes
```

Tiga gagasan struktural muncul berulang kali:

1. **Dekomposisi menjadi bagian saling lepas** — digunakan dalam aturan penjumlahan dan hukum probabilitas total.
2. **Pembatasan ruang sampel** — digunakan dalam probabilitas bersyarat.
3. **Faktorisasi** — aturan perkalian selalu memfaktorkan joint event secara conditional; independensi memungkinkan conditional probability diganti dengan marginal probability.

---

# Hubungan Kunci

## Aljabar kejadian

$$
(A\cup B)^c=A^c\cap B^c,
\qquad
(A\cap B)^c=A^c\cup B^c.
$$

## Aturan probabilitas inti

$$
P(A^c)=1-P(A),
$$

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

## Probabilitas bersyarat dan aturan perkalian

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},
$$

$$
P(A\cap B)=P(B)P(A\mid B)=P(A)P(B\mid A).
$$

## Independensi

$$
A\perp B
\iff
P(A\cap B)=P(A)P(B).
$$

Jika denominator positif, ini ekuivalen dengan

$$
P(A\mid B)=P(A)
$$

dan

$$
P(B\mid A)=P(B).
$$

## Hukum probabilitas total

Untuk partisi $B_1,\ldots,B_k$,

$$
P(A)=\sum_iP(B_i)P(A\mid B_i).
$$

## Bayes

$$
P(B_r\mid A)
=
\frac{P(B_r)P(A\mid B_r)}
{\sum_iP(B_i)P(A\mid B_i)}.
$$

---

# Perbedaan Penting

| Konsep A | Konsep B | Perbedaan |
|---|---|---|
| outcome | event | outcome = satu titik sampel; event = himpunan titik sampel |
| mutually exclusive | independent | saling lepas melarang kejadian bersama; independen berarti satu tidak mengubah probabilitas lainnya |
| $P(A\mid B)$ | $P(B\mid A)$ | denominator berbeda, sehingga umumnya nilainya berbeda |
| aturan perkalian | aturan independensi | aturan perkalian selalu menggunakan conditional probability; independensi menggantinya dengan marginal probability |
| pairwise independence | mutual independence | pemeriksaan berpasangan tidak menjamin faktorisasi tingkat lebih tinggi |
| total probability | Bayes | total probability menghitung probabilitas evidence; Bayes membalik conditioning dan menormalisasi bobot cabang |
| probabilitas klasik berbasis pencacahan | probabilitas umum | rasio jumlah memerlukan hasil elementer yang sama mungkin |

---

# Peta Koneksi CF2

Chapter 2 adalah sumber utama Miller untuk keenam subtopik CF2 Topik 1:

- [[1.1 Eksperimen Acak dan Ruang Sampel]] — Sections 2–3.
- [[1.2 Aksioma dan Perhitungan Probabilitas]] — Sections 4–5.
- [[1.3 Metode Enumerasi]] — Chapter 1 menyediakan teknik pencacahan yang digunakan bersama probabilitas equiprobable pada Section 4.
- [[1.4 Probabilitas Bersyarat]] — Section 6.
- [[1.5 Kejadian Independen]] — Section 7.
- [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] — Section 8.

Chapter ini juga menyiapkan topik berikutnya:

- random variable memetakan outcome ruang sampel menjadi nilai numerik;
- joint distribution menggeneralisasi probabilitas pada pasangan/tuple;
- sampling statistik sangat bergantung pada independensi dan conditional structure.

---

# Quick Reading Review

1. Mengapa total dua dadu tidak boleh diperlakukan sebagai 11 hasil yang sama mungkin?
2. Apa perbedaan antara outcome elementer dan event?
3. Nyatakan tiga postulat probabilitas yang digunakan Miller untuk ruang diskrit.
4. Turunkan aturan complement dari postulat.
5. Mengapa $P(A\cap B)$ harus dikurangkan dalam aturan penjumlahan dua event?
6. Jelaskan conditioning sebagai ruang sampel yang dipersempit.
7. Mengapa $P(A\mid B)$ umumnya tidak sama dengan $P(B\mid A)$?
8. Turunkan aturan perkalian dari definisi probabilitas bersyarat.
9. Bagaimana sampling tanpa replacement menciptakan dependence?
10. Nyatakan kriteria perkalian untuk independensi.
11. Mengapa pairwise independence tidak menjamin mutual independence?
12. Jelaskan secara informal mengapa independensi $A$ dan $B$ mengimplikasikan independensi $A$ dan $B^c$.
13. Apa dua syarat agar $B_1,\ldots,B_k$ membentuk partisi?
14. Turunkan hukum probabilitas total dari dekomposisi saling lepas event $A$.
15. Jelaskan Bayes sebagai “bobot jalur target dibagi total bobot evidence.”
16. Mengapa penyakit langka dapat memiliki posterior probability rendah meskipun test mempunyai sensitivitas tinggi?

---

# Catatan Kompresi

Dikompres atau dihilangkan:

- penjelasan verbal berulang mengenai interpretasi probabilitas;
- sebagian besar latihan rutin;
- demonstrasi Venn diagram berulang untuk identitas himpunan yang sama;
- pembahasan kalkulator/software;
- diskusi filosofis yang panjang mengenai subjective probability dan Bayes;
- contoh numerik berulang dengan mekanisme yang sama.

Dipertahankan secara detail:

- pembentukan ruang sampel dan event;
- distinction diskrit/kontinu;
- postulat probabilitas;
- complement/addition/inclusion–exclusion;
- probabilitas bersyarat dan aturan perkalian;
- logika with-vs-without replacement;
- definisi independensi dan theorem tentang complement;
- pairwise-vs-mutual independence;
- derivasi total probability;
- formula Bayes, interpretasi tree/path, dan base-rate example.

---

# Source Traceability

- Sumber utama: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 2, dari `Topik 1 - [Miller].pdf`.
- Acuan scope CF2: Silabus CF2 — Miller Chapters 1–2 merupakan referensi resmi Topik 1.
- Framework editorial: `Prompt_CF2_Condensed_Textbook_Notes.md`.

