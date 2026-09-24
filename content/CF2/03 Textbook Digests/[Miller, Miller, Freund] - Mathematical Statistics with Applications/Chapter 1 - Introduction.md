---
title: Chapter 1 - Introduction
book: Miller, Miller & Freund — Mathematical Statistics with Applications, 8th ed.
chapter: 1
exam: CF2
scope: Topik 1 — Dasar-Dasar Probabilitas
tags:
  - CF2
  - Miller
  - Probabilitas
  - Enumerasi
  - Permutasi
  - Kombinasi
  - KoefisienBinomial
status: condensed-textbook-note
language: id
---

# Miller Chapter 1 — Pendahuluan

> [!ABSTRACT] Tujuan chapter
> Chapter 1 memberikan orientasi awal mengenai statistika matematis, kemudian dilanjutkan dengan review ringkas tentang **metode kombinatorial** dan **koefisien binomial**. Untuk CF2, bagian pembuka yang bersifat historis dan aplikatif berfungsi sebagai konteks pendukung; inti matematisnya adalah teknik pencacahan: prinsip perkalian, permutasi, kombinasi, susunan dengan objek berulang, permutasi melingkar, pencacahan multinomial, serta identitas koefisien binomial yang berasal dari konsep-konsep tersebut.

## 1. Pendahuluan

`[CF2 SUPPORTING CONTEXT]`

Miller memulai dengan menempatkan statistika sebagai bidang yang lebih luas daripada sekadar pengumpulan dan tabulasi data. Persoalan utama statistika adalah membuat inferensi dan keputusan ketika hasil yang mungkin terjadi bersifat tidak pasti. Probabilitas menyediakan struktur matematis untuk merepresentasikan ketidakpastian tersebut, sedangkan statistika menggunakan data yang diamati untuk mempelajari mekanisme yang mendasarinya.

Contoh-contoh pembuka mencakup permainan peluang, pekerjaan aktuaria, teknik, kedokteran, ekonomi, dan ilmu fisika. Poin konseptualnya bukan daftar aplikasinya, melainkan bahwa berbagai persoalan praktis memiliki karakter matematis yang sama: **terdapat beberapa hasil yang mungkin dan hasil aktual tidak diketahui sebelumnya**.

Pada bagian selanjutnya dari Chapter 1, Miller belum membangun aksioma probabilitas. Fokusnya adalah me-review alat untuk menghitung banyaknya kemungkinan hasil. Alat ini menjadi penting di Chapter 2 ketika probabilitas dihitung sebagai

$$
P(A)=\frac{\text{banyaknya hasil yang mendukung }A}{\text{banyaknya seluruh hasil yang mungkin}}
$$

dengan asumsi bahwa seluruh hasil elementer memiliki peluang yang sama.

**Koneksi CF2:** [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.3 Metode Enumerasi]].

---

## 2. Metode Kombinatorial

`[CORE CF2]`

### 2.1 Prinsip dasar pencacahan

Misalkan suatu proses terdiri atas dua tahap berurutan:

- tahap 1 dapat dilakukan dengan $n_1$ cara;
- untuk setiap hasil pada tahap 1, tahap 2 dapat dilakukan dengan $n_2$ cara.

Maka keseluruhan proses dapat dilakukan dengan

$$
\boxed{n_1n_2}
$$

cara.

Miller memotivasinya dengan memandang setiap hasil lengkap sebagai pasangan terurut $(x_i,y_j)$. Untuk setiap satu dari $n_1$ pilihan koordinat pertama, tersedia $n_2$ pilihan koordinat kedua.

### Contoh textbook — pilihan liburan

Pilih:

- satu dari $5$ negara bagian;
- satu dari $3$ moda transportasi.

Maka terdapat

$$
5\cdot3=15
$$

kemungkinan perjalanan.

Diagram pohon pada textbook membantu melihat strukturnya: setiap cabang negara bagian terbagi lagi menjadi tiga cabang transportasi. Struktur ini layak diingat karena pada probabilitas bersyarat, tree diagram bekerja dengan logika cabang yang sama, hanya saja setiap cabang diberi probabilitas alih-alih sekadar jumlah kemungkinan.

### Contoh textbook — dua dadu yang dapat dibedakan

Dadu merah memiliki $6$ hasil. Untuk setiap hasil dadu merah, dadu hijau juga memiliki $6$ hasil. Maka:

$$
6\cdot6=36.
$$

Perbedaan antara **dua dadu yang dapat dibedakan** dengan sekadar jumlah kedua dadu penting: hasil elementernya berupa pasangan terurut.

### Prinsip perkalian umum

Jika suatu proses terdiri dari $k$ tahap berurutan dan tahap ke-$i$ dapat dilakukan dengan $n_i$ cara setelah tahap sebelumnya ditentukan, maka

$$
\boxed{N=n_1n_2\cdots n_k}.
$$

Inilah fondasi dari sebagian besar rumus pencacahan selanjutnya.

### Contoh textbook — tes benar/salah

Untuk tes dengan 20 soal true/false, setiap soal mempunyai dua kemungkinan jawaban, sehingga terdapat

$$
2^{20}=1{,}048{,}576
$$

pola jawaban lengkap.

Pelajaran utamanya: menghitung seluruh sequence biasanya dapat direpresentasikan sebagai **masalah pengisian posisi satu per satu**.

---

## 2.2 Permutasi

Miller mendefinisikan **permutasi** sebagai susunan berbeda dari objek-objek yang berbeda.

Untuk $n$ objek berbeda yang ditempatkan ke $n$ posisi:

$$
n(n-1)(n-2)\cdots2\cdot1=n!.
$$

Jadi

$$
\boxed{\text{banyaknya permutasi dari }n\text{ objek berbeda}=n!}.
$$

Textbook juga mendefinisikan

$$
0!=1.
$$

### Contoh textbook — lima pemain starter basket

Urutan perkenalan lima pemain yang berbeda dapat dibuat dalam

$$
5!=120
$$

cara.

### Permutasi $n$ objek diambil $r$ sekaligus

Jika hanya $r$ posisi terurut yang perlu diisi dari $n$ objek berbeda, jumlah pilihan menurun sebagai

$$
n(n-1)\cdots(n-r+1).
$$

Maka

$$
\boxed{{}_nP_r=\frac{n!}{(n-r)!}},\qquad r=0,1,\ldots,n.
$$

Mengapa bentuk faktorial bekerja:

$$
\frac{n!}{(n-r)!}
=
\frac{n(n-1)\cdots(n-r+1)(n-r)!}{(n-r)!}.
$$

### Contoh textbook — pengurus klub

Empat jabatan berbeda akan diberikan kepada 24 anggota. Karena jabatan berbeda, urutan/peran penting:

$$
{}_{24}P_4
=
24\cdot23\cdot22\cdot21
=
255{,}024.
$$

`[IMPORTANT DISTINCTION]`

> Memilih empat orang untuk empat **jabatan yang berbeda** adalah masalah permutasi. Memilih empat orang untuk suatu komite tanpa pembagian jabatan adalah masalah kombinasi.

---

## 2.3 Permutasi melingkar

Ketika objek-objek berbeda disusun mengelilingi sebuah lingkaran, rotasi tidak dihitung sebagai susunan berbeda apabila setiap objek tetap memiliki tetangga yang sama.

Tetapkan satu objek sebagai anchor. Sisa $n-1$ objek dapat disusun dalam

$$
\boxed{(n-1)!}
$$

cara.

### Contoh textbook — empat pemain bridge

Tetapkan satu pemain. Susun tiga sisanya:

$$
3!=6.
$$

`[CF2 SUPPORTING CONTEXT]` Permutasi melingkar adalah kasus khusus dari permutasi. Gunakan $(n-1)!$ hanya apabila rotasi benar-benar dianggap ekuivalen; jangan menggunakannya untuk susunan linear biasa.

---

## 2.4 Permutasi dengan objek berulang/tidak dapat dibedakan

Rumus biasa $n!$ akan menghitung terlalu banyak apabila terdapat objek yang identik.

Misalkan dari $n$ objek:

- $n_1$ berjenis pertama;
- $n_2$ berjenis kedua;
- $\ldots$;
- $n_k$ berjenis ke-$k$;

dengan

$$
n_1+n_2+\cdots+n_k=n.
$$

Jika seluruh objek untuk sementara diberi label berbeda, akan terdapat $n!$ susunan. Tetapi pertukaran di antara objek identik jenis ke-$i$ tidak menghasilkan susunan baru, sehingga terjadi overcount sebanyak $n_i!$ untuk setiap jenis. Maka

$$
\boxed{
\frac{n!}{n_1!n_2!\cdots n_k!}
}.
$$

### Contoh textbook — BOOK

Huruf-hurufnya adalah $B,O,O,K$.

Jika kedua O dibedakan untuk sementara, terdapat $4!$ permutasi, tetapi setiap susunan aktual dihitung $2!$ kali. Jadi

$$
\frac{4!}{2!}=12.
$$

### Contoh textbook — lukisan berdasarkan pelukis

Dua lukisan Monet, tiga Renoir, dan dua Degas dianggap tidak dapat dibedakan di dalam kelompok pelukis yang sama. Maka

$$
\frac{7!}{2!3!2!}=210.
$$

Logika yang dapat digunakan kembali:

> **beri label sementara → hitung seolah berbeda → bagi dengan pertukaran internal yang tidak menghasilkan susunan baru**.

---

## 2.5 Kombinasi

**Kombinasi** adalah pemilihan $r$ objek dari $n$ objek berbeda **tanpa memperhatikan urutan**.

Jika urutan penting, terdapat

$$
{}_nP_r
$$

pilihan terurut. Namun setiap kelompok tak-terurut yang berisi $r$ objek muncul dalam $r!$ urutan. Maka

$$
\binom nr
=
\frac{{}_nP_r}{r!}
=
\boxed{\frac{n!}{r!(n-r)!}}.
$$

### Contoh textbook — memilih tiga rumah tangga dari dua puluh

Jika urutan diperhatikan:

$$
{}_{20}P_3=20\cdot19\cdot18=6840.
$$

Setiap subset tiga rumah tangga dihitung sebanyak $3!=6$ kali, sehingga

$$
\binom{20}{3}
=
\frac{6840}{6}
=1140.
$$

### Mengapa kombinasi sering muncul dalam probabilitas

Jika sebuah event hanya ditentukan oleh **objek mana yang terpilih**, bukan urutan pemilihannya, maka objek elementer yang natural adalah subset. Contoh selanjutnya mencakup kartu yang dibagikan dan pengambilan sampel tanpa memperhatikan urutan.

---

## 2.6 Pemilihan tipe multinomial ke beberapa kelompok

Miller memperluas logika kombinasi ke pembagian $n$ objek berbeda ke kelompok berukuran tertentu $n_1,\ldots,n_k$, dengan

$$
n_1+\cdots+n_k=n.
$$

Banyaknya cara adalah

$$
\boxed{
\binom{n}{n_1,n_2,\ldots,n_k}
=
\frac{n!}{n_1!n_2!\cdots n_k!}
}.
$$

Salah satu derivasi adalah memilih kelompok secara berurutan:

$$
\binom{n}{n_1}
\binom{n-n_1}{n_2}
\cdots
\binom{n-n_1-\cdots-n_{k-1}}{n_k}.
$$

Faktor-faktor faktorial kemudian saling meniadakan dan menghasilkan bentuk multinomial.

### Contoh textbook — kamar hotel

Tujuh pebisnis ditempatkan ke satu kamar berisi tiga orang dan dua kamar masing-masing berisi dua orang. Dengan ukuran kelompok $3,2,2$:

$$
\frac{7!}{3!2!2!}=210.
$$

Secara matematis, struktur ini berkaitan erat dengan permutasi objek berulang karena keduanya pada akhirnya membagi $n!$ dengan faktorial yang mewakili urutan internal yang tidak relevan.

---

# 3. Koefisien Binomial

`[CORE CF2]`

Miller kemudian menghubungkan kombinasi secara langsung dengan aljabar.

Pertimbangkan

$$
(x+y)^n.
$$

Setiap suku pada ekspansi diperoleh dengan memilih $x$ atau $y$ dari masing-masing $n$ faktor. Suku $x^{n-r}y^r$ muncul ketika tepat $r$ faktor memberikan $y$. Banyaknya cara memilih $r$ faktor tersebut adalah

$$
\binom nr.
$$

Karena itu, koefisien $x^{n-r}y^r$ adalah $\binom nr$.

## 3.1 Teorema binomial

$$
\boxed{
(x+y)^n
=
\sum_{r=0}^n
\binom nr x^{n-r}y^r
}.
$$

Inilah alasan $\binom nr$ disebut **koefisien binomial**.

Contoh:

$$
(x+y)^3
=x^3+3x^2y+3xy^2+y^3,
$$

dan koefisien $1,3,3,1$ adalah

$$
\binom30,\binom31,\binom32,\binom33.
$$

---

## 3.2 Identitas simetri

Miller membuktikan

$$
\boxed{
\binom nr=\binom n{n-r}
}.
$$

### Penalaran kombinatorial

Memilih $r$ objek yang dimasukkan otomatis menentukan $n-r$ objek yang tidak dipilih. Jadi jumlah cara memilih objek yang masuk sama dengan jumlah cara memilih objek yang dikeluarkan.

### Verifikasi aljabar

$$
\binom n{n-r}
=
\frac{n!}{(n-r)!r!}
=
\binom nr.
$$

Identitas ini juga berguna secara komputasional ketika $r$ mendekati $n$.

---

## 3.3 Identitas Pascal

Untuk $r=1,\ldots,n-1$,

$$
\boxed{
\binom nr
=
\binom{n-1}{r}
+
\binom{n-1}{r-1}
}.
$$

Miller menurunkannya dari ekspansi binomial. Interpretasi pencacahannya: pilih satu objek khusus. Sebuah subset berukuran $r$ dapat:

- tidak memuat objek tersebut, sehingga terdapat $\binom{n-1}{r}$ cara; atau
- memuat objek tersebut, sehingga perlu memilih $r-1$ objek dari $n-1$ sisanya, yaitu $\binom{n-1}{r-1}$ cara.

Recurrence ini menghasilkan Segitiga Pascal.

---

## 3.4 Penjumlahan binomial penting

Substitusi $x=y=1$ ke teorema binomial memberikan

$$
2^n
=
\sum_{r=0}^n\binom nr.
$$

Interpretasi: himpunan berisi $n$ elemen mempunyai $2^n$ subset karena setiap elemen mempunyai dua status—dipilih atau tidak dipilih.

Substitusi $x=1$ dan $y=-1$ memberikan

$$
0
=
\sum_{r=0}^n(-1)^r\binom nr
$$

untuk bilangan bulat positif $n$, yang menyatakan kesamaan jumlah subset berukuran genap dan ganjil.

Identitas ini merupakan alat pendukung; penggunaan utama dalam CF2 tetap mengenali $\binom nr$ sebagai pencacahan pemilihan tanpa urutan.

---

# 4. Teori dalam Praktik

`[CF2 SUPPORTING CONTEXT]`

Pembahasan aplikasi chapter ini menekankan bahwa rumus pencacahan hanya berguna setelah persoalan direpresentasikan dengan benar. Software atau kalkulator dapat menghitung faktorial atau koefisien binomial, tetapi pekerjaan utama adalah menentukan:

1. apa yang dimaksud dengan satu hasil lengkap;
2. apakah pemilihan berlangsung dalam beberapa tahap;
3. apakah urutan penting;
4. apakah objek berbeda satu sama lain;
5. apakah objek berulang dapat dibedakan;
6. apakah terdapat ekuivalensi rotasi;
7. apakah yang diminta adalah susunan, subset, atau pembagian ke beberapa kelompok.

Untuk CF2, keputusan struktural ini lebih penting daripada sekadar mengevaluasi ekspresi faktorial.

---

# Sintesis Chapter

Chapter 1 membangun hampir seluruh rumus pencacahan elementer dari satu prinsip:

> **bangun satu hasil secara bertahap dan hitung banyaknya pilihan pada setiap tahap.**

Dari prinsip ini:

- menyusun seluruh $n$ objek berbeda menghasilkan $n!$;
- memilih dan mengurutkan $r$ dari $n$ menghasilkan ${}_nP_r$;
- pemilihan tanpa urutan membagi faktor $r!$ dan menghasilkan $\binom nr$;
- tipe objek identik membagi faktor permutasi internal;
- susunan melingkar menetapkan satu objek acuan;
- pembagian ke kelompok menghasilkan koefisien multinomial;
- koefisien binomial muncul sebagai banyaknya cara memilih faktor yang menyumbangkan $y$ dalam $(x+y)^n$.

Urutan konsepnya:

```text
prinsip perkalian
        ↓
susunan terurut
        ↓
permutasi
        ↓ bagi urutan yang tidak relevan
kombinasi
        ↓
koefisien binomial
        ↓
identitas / hubungan aljabar
```

---

# Hubungan Kunci

| Struktur | Banyaknya | Kondisi utama |
|---|---:|---|
| $k$ tahap berurutan | $n_1n_2\cdots n_k$ | pilihan dikalikan antar-tahap |
| susun seluruh $n$ objek berbeda | $n!$ | urutan penting |
| pilih dan urutkan $r$ dari $n$ | ${}_nP_r=\frac{n!}{(n-r)!}$ | urutan penting |
| pilih $r$ dari $n$ | $\binom nr=\frac{n!}{r!(n-r)!}$ | urutan tidak penting |
| susunan melingkar | $(n-1)!$ | rotasi ekuivalen |
| tipe objek berulang | $\frac{n!}{\prod_i n_i!}$ | pertukaran internal objek identik tidak relevan |
| kelompok berukuran $n_1,\ldots,n_k$ | $\frac{n!}{\prod_i n_i!}$ | urutan internal kelompok tidak penting |
| simetri koefisien binomial | $\binom nr=\binom n{n-r}$ | pilih yang masuk vs yang tidak masuk |
| identitas Pascal | $\binom nr=\binom{n-1}r+\binom{n-1}{r-1}$ | pecah berdasarkan objek khusus dipilih/tidak |

---

# Peta Koneksi CF2

- [[1.1 Eksperimen Acak dan Ruang Sampel]] — pencacahan membutuhkan definisi hasil elementer yang tepat.
- [[1.2 Aksioma dan Perhitungan Probabilitas]] — jumlah kemungkinan berubah menjadi probabilitas hanya setelah model probabilitas ditentukan, sering kali melalui asumsi equiprobable.
- [[1.3 Metode Enumerasi]] — Chapter 1 adalah sumber utama Miller untuk prinsip perkalian, permutasi, kombinasi, dan teknik pencacahan terkait.
- [[1.4 Probabilitas Bersyarat]] — logika pencacahan berurutan muncul kembali ketika ruang sampel dibatasi oleh informasi bersyarat.
- [[2.5 Distribusi Diskrit Umum]] — PMF Binomial dan Hypergeometric menggunakan $\binom nr$ secara langsung.

---

# Quick Reading Review

1. Mengapa prinsip perkalian perlu dipahami sebagai beberapa tahap berurutan?
2. Apa yang membuat pembagian jabatan menjadi masalah permutasi, bukan kombinasi?
3. Turunkan ${}_nP_r$ langsung dari pengisian posisi.
4. Mengapa kita membagi dengan $r!$ untuk memperoleh $\binom nr$?
5. Mengapa banyaknya susunan melingkar adalah $(n-1)!$, bukan $n!$?
6. Jelaskan logika pembagian dengan $n_i!$ untuk objek berulang.
7. Turunkan $\binom nr=\binom n{n-r}$ dengan penalaran pemilihan, bukan aljabar.
8. Jelaskan mengapa $\binom nr$ adalah koefisien $x^{n-r}y^r$ pada $(x+y)^n$.
9. Pertanyaan pemodelan apa yang harus dijawab sebelum menggunakan rumus faktorial apa pun?
10. Mengapa $\sum_{r=0}^n\binom nr=2^n$?

---

# Catatan Kompresi

Dikompres secara agresif:

- nama tokoh dan kronologi historis;
- contoh berulang dengan mekanisme pencacahan yang sama;
- komentar penggunaan kalkulator/software;
- kumpulan latihan dan aritmetika rutin;
- pembahasan panjang mengenai tabel faktorial/koefisien binomial.

Dipertahankan secara detail:

- logika prinsip perkalian;
- derivasi permutasi dan kombinasi;
- susunan objek berulang dan susunan melingkar;
- logika pengelompokan multinomial;
- hubungan dengan teorema binomial;
- identitas simetri dan Pascal;
- contoh textbook representatif yang menunjukkan struktur pencacahan.

---

# Source Traceability

- Sumber utama: Miller, Miller & Freund, *Mathematical Statistics with Applications*, 8th ed., Chapter 1, dari `Topik 1 - [Miller].pdf`.
- Acuan scope CF2: Silabus CF2 — Miller Chapters 1–2 merupakan referensi resmi Topik 1.
- Framework editorial: `Prompt_CF2_Condensed_Textbook_Notes.md`.

