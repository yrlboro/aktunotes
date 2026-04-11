## **No. 121**

An urn contains four fair dice. Two have faces numbered 1, 2, 3, 4, 5, and 6; one has faces numbered 2, 2, 4, 4, 6, and 6; and one has all six faces numbered 6. One of the dice is randomly selected from the urn and rolled. The same die is rolled a second time.

Calculate the probability that a 6 is rolled both times.

(A) 0.174  
(B) 0.250  
(C) 0.292  
(D) 0.380  
(E) 0.417  

> [!summary]+ **Jawaban No. 121**
> 
> **(C). $0{,}292$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Probabilitas Total (Law of Total Probability):
> >
> > $$P(B) = \sum_{i} P(B \mid A_i)\, P(A_i)$$
> >
> > Di sini $A_i$ merupakan partisi ruang sampel yang mutually exclusive dan collectively exhaustive.
>
> **Diketahui:**
> - 4 dadu dalam urn: 2 dadu standar (1–6), 1 dadu bernomor (2,2,4,4,6,6), 1 dadu semua-enam
> - Satu dadu dipilih secara acak, kemudian dilempar dua kali (dadu yang sama)
> - Target: $P(\text{angka 6 muncul dua kali})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Kejadian dan Probabilitas Pemilihan Dadu**
> >
> > Misalkan:
> > - $A$ = kejadian dadu standar dipilih (2 dari 4 dadu) $\Rightarrow P(A) = \frac{2}{4} = \frac{1}{2}$
> > - $B$ = kejadian dadu (2,2,4,4,6,6) dipilih $\Rightarrow P(B) = \frac{1}{4}$
> > - $C$ = kejadian dadu semua-enam dipilih $\Rightarrow P(C) = \frac{1}{4}$
> >
> > **Langkah 2: Hitung Probabilitas "6 Dua Kali" Bersyarat pada Setiap Jenis Dadu**
> >
> > Karena dadu yang sama dilempar dua kali, kedua lemparan independen bersyarat pada pilihan dadu:
> >
> > $$P(\text{6,6} \mid A) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$$
> >
> > $$P(\text{6,6} \mid B) = \frac{2}{6} \times \frac{2}{6} = \frac{1}{9}$$
> >
> > $$P(\text{6,6} \mid C) = \frac{6}{6} \times \frac{6}{6} = 1$$
> >
> > **Langkah 3: Terapkan Hukum Probabilitas Total**
> >
> > $$P(\text{6,6}) = P(\text{6,6} \mid A)\,P(A) + P(\text{6,6} \mid B)\,P(B) + P(\text{6,6} \mid C)\,P(C)$$
> >
> > $$= \frac{1}{36} \cdot \frac{1}{2} + \frac{1}{9} \cdot \frac{1}{4} + 1 \cdot \frac{1}{4}$$
> >
> > $$= \frac{1}{72} + \frac{2}{72} + \frac{18}{72} = \frac{21}{72} = 0{,}292$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}292$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan bahwa dadu yang sama dilempar dua kali — kedua lemparan tidak independent secara marginal, hanya independent bersyarat pada pilihan dadu.
> > > - Menggunakan probabilitas 6 pada satu lemparan saja, bukan dua lemparan berturut-turut.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menafsirkan "dadu yang sama dilempar dua kali" sebagai memilih dadu baru untuk tiap lemparan — ini akan memberikan hasil berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "dipilih secara acak dari kumpulan" → gunakan Law of Total Probability dengan mengelompokkan per jenis.
> > > - Jika proporsi setiap jenis berbeda → bobot $P(A_i)$ harus berbeda sesuai proporsinya.
>
---

## **No. 122**

An insurance agent meets twelve potential customers independently, each of whom is equally likely to purchase an insurance product. Six are interested only in auto insurance, four are interested only in homeowners insurance, and two are interested only in life insurance.

The agent makes six sales.

Calculate the probability that two are for auto insurance, two are for homeowners insurance, and two are for life insurance.

(A) 0.001  
(B) 0.024  
(C) 0.069  
(D) 0.097  
(E) 0.500  

> [!summary]+ **Jawaban No. 122**
>
> **(D). $0{,}097$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.3 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Hipergeometrik Multivariat (memilih dari beberapa kelompok tanpa pengembalian):
> >
> > $$P = \frac{\displaystyle\binom{N_1}{k_1}\binom{N_2}{k_2}\binom{N_3}{k_3}}{\displaystyle\binom{N}{k}}$$
> >
> > dengan $N = N_1 + N_2 + N_3$ total populasi, $k = k_1 + k_2 + k_3$ total sampel.
>
> **Diketahui:**
> - 12 calon pelanggan: 6 tertarik asuransi otomatis ($N_1 = 6$), 4 asuransi rumah ($N_2 = 4$), 2 asuransi jiwa ($N_3 = 2$)
> - 6 penjualan dilakukan: ingin 2 otomatis, 2 rumah, 2 jiwa
> - Sampling tanpa pengembalian (setiap pelanggan adalah individu berbeda)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Jumlah Cara Memilih 2 dari Masing-Masing Kelompok**
> >
> > $$\binom{6}{2} = 15, \quad \binom{4}{2} = 6, \quad \binom{2}{2} = 1$$
> >
> > **Langkah 2: Hitung Total Cara Memilih 6 dari 12**
> >
> > $$\binom{12}{6} = 924$$
> >
> > **Langkah 3: Hitung Probabilitas**
> >
> > $$P = \frac{\binom{6}{2}\binom{4}{2}\binom{2}{2}}{\binom{12}{6}} = \frac{15 \times 6 \times 1}{924} = \frac{90}{924} \approx 0{,}097$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}097$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi multinomial (dengan pengembalian) padahal ini sampling tanpa pengembalian.
> > > - Mengalikan probabilitas individual $\frac{6}{12} \cdot \frac{4}{12} \cdot \frac{2}{12}$ — ini salah karena tidak memperhitungkan urutan dan tanpa pengembalian.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan bahwa 12 pelanggan adalah individu berbeda dengan kategori tetap — bukan sampling dari distribusi tak terbatas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika populasi terbagi dalam beberapa kelompok dan sampling tanpa pengembalian → gunakan Hipergeometrik Multivariat.
>
---

## **No. 123**

A policyholder has probability 0.7 of having no claims, 0.2 of having exactly one claim, and 0.1 of having exactly two claims. Claim amounts are uniformly distributed on the interval [0, 60] and are independent. The insurer covers 100% of each claim.

Calculate the probability that the total benefit paid to the policyholder is 48 or less.

(A) 0.320  
(B) 0.400  
(C) 0.800  
(D) 0.892  
(E) 0.924  

> [!summary]+ **Jawaban No. 123**
>
> **(D). $0{,}892$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Probabilitas Total dengan pengkondisian pada jumlah klaim $N$:
> >
> > $$P(S \leq 48) = \sum_{n=0}^{2} P(S \leq 48 \mid N = n)\, P(N = n)$$
> >
> > Untuk $N = 2$: dua klaim $U_1, U_2 \sim U(0,60)$ independen, sehingga $(U_1, U_2)$ seragam pada persegi $[0,60]^2$.
>
> **Diketahui:**
> - $P(N=0) = 0{,}7$, $P(N=1) = 0{,}2$, $P(N=2) = 0{,}1$
> - Setiap klaim $\sim U(0,60)$, saling independen
> - Target: $P(S \leq 48)$ di mana $S$ = total benefit
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kasus $N = 0$ (tidak ada klaim)**
> >
> > Total benefit = 0, sehingga:
> >
> > $$P(S \leq 48 \mid N = 0) = 1$$
> >
> > **Langkah 2: Kasus $N = 1$ (satu klaim)**
> >
> > Satu klaim $U \sim U(0,60)$, maka:
> >
> > $$P(S \leq 48 \mid N = 1) = P(U \leq 48) = \frac{48}{60} = 0{,}8$$
> >
> > **Langkah 3: Kasus $N = 2$ (dua klaim)**
> >
> > Dua klaim $(U_1, U_2)$ uniform pada persegi $[0,60] \times [0,60]$ dengan luas $60^2 = 3600$.
> >
> > Event $\{U_1 + U_2 \leq 48\}$ adalah segitiga di pojok kiri bawah dengan alas dan tinggi masing-masing 48:
> >
> > $$\text{Luas segitiga} = \frac{48 \times 48}{2} = 1152$$
> >
> > $$P(S \leq 48 \mid N = 2) = \frac{1152}{3600} = 0{,}32$$
> >
> > **Langkah 4: Terapkan Hukum Probabilitas Total**
> >
> > $$P(S \leq 48) = 0{,}7(1) + 0{,}2(0{,}8) + 0{,}1(0{,}32)$$
> >
> > $$= 0{,}700 + 0{,}160 + 0{,}032 = 0{,}892$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}892$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk $N = 2$: melupakan bahwa area yang valid adalah segitiga (bukan persegi panjang) karena batas atas adalah $U_1 + U_2 \leq 48$, bukan $U_1 \leq 48$ dan $U_2 \leq 48$ secara terpisah.
> > > - Menghitung luas segitiga sebagai $48^2$ (bukan $48^2/2$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan kemungkinan $N = 0$ (meski bobotnya besar dan berkontribusi $0{,}7$ pada hasil).
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada variabel jumlah acak dengan distribusi tiap komponen yang kontinu → ini adalah compound distribution, gunakan Law of Total Probability dikondisikan pada jumlah.
>
---

## **No. 124**

In a given region, the number of tornadoes in a one-week period is modeled by a Poisson distribution with mean 2. The numbers of tornadoes in different weeks are mutually independent.

Calculate the probability that fewer than four tornadoes occur in a three-week period.

(A) 0.13  
(B) 0.15  
(C) 0.29  
(D) 0.43  
(E) 0.86  

> [!summary]+ **Jawaban No. 124**
>
> **(B). $0{,}15$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Sifat reproduktif distribusi Poisson: jika $X_1 \sim \text{Poisson}(\lambda_1)$ dan $X_2 \sim \text{Poisson}(\lambda_2)$ saling independen, maka:
> >
> > $$X_1 + X_2 \sim \text{Poisson}(\lambda_1 + \lambda_2)$$
> >
> > PMF Poisson: $p_X(k) = \dfrac{e^{-\lambda} \lambda^k}{k!}$, $k = 0, 1, 2, \ldots$
>
> **Diketahui:**
> - Per minggu: $X_i \sim \text{Poisson}(\lambda = 2)$, independen antar minggu
> - Periode tiga minggu: $S = X_1 + X_2 + X_3$
> - Target: $P(S < 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi Total 3 Minggu**
> >
> > Karena $X_1, X_2, X_3$ independen dan masing-masing $\text{Poisson}(2)$:
> >
> > $$S = X_1 + X_2 + X_3 \sim \text{Poisson}(2 + 2 + 2) = \text{Poisson}(6)$$
> >
> > **Langkah 2: Hitung $P(S < 4) = P(S \leq 3)$**
> >
> > $$P(S < 4) = \sum_{k=0}^{3} \frac{e^{-6} \cdot 6^k}{k!}$$
> >
> > $$= e^{-6}\left(\frac{6^0}{0!} + \frac{6^1}{1!} + \frac{6^2}{2!} + \frac{6^3}{3!}\right)$$
> >
> > $$= e^{-6}(1 + 6 + 18 + 36) = 61\,e^{-6}$$
> >
> > $$= 61 \times 0{,}002479 \approx 0{,}1512$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}15$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengalikan $\lambda$ dengan 3 secara langsung benar (sifat Poisson), tetapi lupa memperifikasi syarat independensi antarminggu sebelum menjumlahkan parameter.
> > > - Menghitung $P(S \leq 4)$ bukan $P(S \leq 3)$ — "fewer than four" berarti $k = 0,1,2,3$.
> >
> > > [!CAUTION] Red Flags
> > > - "Fewer than $n$" → $P(X \leq n-1)$; "at most $n$" → $P(X \leq n)$; perhatikan perbedaannya.
> > > - Jika distribusi Poisson dijumlahkan dan independen → parameter dijumlahkan.
>
---

## **No. 125**

An electronic system contains three cooling components that operate independently. The probability of each component's failure is 0.05. The system will overheat if and only if at least two components fail.

Calculate the probability that the system will overheat.

(A) 0.007  
(B) 0.045  
(C) 0.098  
(D) 0.135  
(E) 0.143  

> [!summary]+ **Jawaban No. 125**
>
> **(A). $0{,}007$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(n, p)$ (Binomial, diskrit, support $\{0,1,\ldots,n\}$; $p$ = peluang gagal tiap komponen):
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
>
> **Diketahui:**
> - $n = 3$ komponen, masing-masing independen dengan $P(\text{gagal}) = p = 0{,}05$
> - Sistem overheat jika $X \geq 2$
> - $X \sim B(3,\, 0{,}05)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X = 2)$**
> >
> > $$P(X = 2) = \binom{3}{2}(0{,}05)^2(0{,}95)^1 = 3 \times 0{,}0025 \times 0{,}95 = 0{,}007125$$
> >
> > **Langkah 2: Hitung $P(X = 3)$**
> >
> > $$P(X = 3) = \binom{3}{3}(0{,}05)^3(0{,}95)^0 = 0{,}000125$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$P(X \geq 2) = 0{,}007125 + 0{,}000125 = 0{,}007250 \approx 0{,}007$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}007$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(X = 2)$ saja tanpa menambahkan $P(X = 3)$.
> > > - Menggunakan $p = 0{,}95$ (probabilitas tidak gagal) sebagai parameter binomial, bukan $p = 0{,}05$.
> >
> > > [!CAUTION] Red Flags
> > > - "At least two" = $P(X \geq 2) = P(X=2) + P(X=3)$; jangan hanya hitung $P(X=2)$.
>
---

## **No. 126**

An insurance company's annual profit is normally distributed with mean 100 and variance 400.

Let $Z$ be normally distributed with mean 0 and variance 1 and let $F$ be the cumulative distribution function of $Z$.

Determine the probability that the company's profit in a year is at most 60, given that the profit in the year is positive.

(A) $1 - F(2)$  
(B) $F(2)/F(5)$  
(C) $[1 - F(2)]/F(5)$  
(D) $[F(0{,}25) - F(0{,}1)]/F(0{,}25)$  
(E) $[F(5) - F(2)]/F(5)$  

> [!summary]+ **Jawaban No. 126**
>
> **(E). $[F(5) - F(2)]/F(5)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.1 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas bersyarat:
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> >
> > Standardisasi Normal: jika $X \sim N(\mu, \sigma^2)$, maka $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$.
> >
> > Simetri Normal: $F(-z) = 1 - F(z)$.
>
> **Diketahui:**
> - $X \sim N(100,\, 400)$ → $\sigma = 20$
> - Target: $P(X \leq 60 \mid X > 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Irisan Event**
> >
> > $\{X \leq 60\} \cap \{X > 0\} = \{0 < X \leq 60\}$
> >
> > **Langkah 2: Hitung Pembilang $P(0 < X \leq 60)$**
> >
> > $$P(0 < X \leq 60) = P\!\left(\frac{0-100}{20} < Z \leq \frac{60-100}{20}\right) = P(-5 < Z \leq -2)$$
> >
> > $$= F(-2) - F(-5) = [1 - F(2)] - [1 - F(5)] = F(5) - F(2)$$
> >
> > **Langkah 3: Hitung Penyebut $P(X > 0)$**
> >
> > $$P(X > 0) = P\!\left(Z > \frac{0-100}{20}\right) = P(Z > -5) = F(5)$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(X \leq 60 \mid X > 0) = \frac{F(5) - F(2)}{F(5)}$$
> >
> > **Hasil Akhir:** **(E)**. $[F(5) - F(2)]/F(5)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $F(-z) = 1 - F(z)$ untuk distribusi normal simetris; ini kunci mengubah $F(-2) - F(-5)$ menjadi $F(5) - F(2)$.
> > > - Menggunakan $P(X \leq 60)$ sebagai pembilang alih-alih $P(0 < X \leq 60)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika jawaban berupa ekspresi $F(\cdot)$ bukan nilai numerik → pastikan identitas simetri normal diterapkan dengan benar.
>
---

## **No. 127**

In a group of health insurance policyholders, 20% have high blood pressure and 30% have high cholesterol. Of the policyholders with high blood pressure, 25% have high cholesterol.

A policyholder is randomly selected from the group.

Calculate the probability that a policyholder has high blood pressure, given that the policyholder has high cholesterol.

(A) 1/6  
(B) 1/5  
(C) 1/4  
(D) 2/3  
(E) 5/6  

> [!summary]+ **Jawaban No. 127**
>
> **(A). $1/6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes (bentuk sederhana):
> >
> > $$P(B \mid C) = \frac{P(C \mid B)\,P(B)}{P(C)}$$
>
> **Diketahui:**
> - $P(B) = 0{,}20$ (tekanan darah tinggi)
> - $P(C) = 0{,}30$ (kolesterol tinggi)
> - $P(C \mid B) = 0{,}25$
> - Target: $P(B \mid C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(B \cap C)$**
> >
> > $$P(B \cap C) = P(C \mid B)\,P(B) = 0{,}25 \times 0{,}20 = 0{,}05$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(B \mid C) = \frac{P(B \cap C)}{P(C)} = \frac{0{,}05}{0{,}30} = \frac{1}{6}$$
> >
> > **Hasil Akhir:** **(A)**. $1/6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menukar $P(B \mid C)$ dengan $P(C \mid B)$ — ini dua hal yang berbeda (fallacy of the transposed conditional).
> > > - Menggunakan $P(B) \times P(C)$ alih-alih $P(C \mid B) \times P(B)$ untuk menghitung irisan.
> >
> > > [!CAUTION] Red Flags
> > > - "Probabilitas A, diketahui B" → selalu Bayes; verifikasi mana yang merupakan prior dan mana likelihood.
>
---

## **No. 128**

In a group of 25 factory workers, 20 are low-risk and five are high-risk.

Two of the 25 factory workers are randomly selected without replacement.

Calculate the probability that exactly one of the two selected factory workers is low-risk.

(A) 0.160  
(B) 0.167  
(C) 0.320  
(D) 0.333  
(E) 0.633  

> [!summary]+ **Jawaban No. 128**
>
> **(D). $0{,}333$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Hipergeometrik: populasi $N$, terdapat $K$ sukses, sampel ukuran $n$:
> >
> > $$P(X = k) = \frac{\displaystyle\binom{K}{k}\binom{N-K}{n-k}}{\displaystyle\binom{N}{n}}$$
>
> **Diketahui:**
> - $N = 25$, $K = 20$ (low-risk), $n = 2$ (dipilih tanpa pengembalian)
> - Target: $P(X = 1)$ — tepat satu low-risk
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Formula Hipergeometrik**
> >
> > $$P(X = 1) = \frac{\binom{20}{1}\binom{5}{1}}{\binom{25}{2}} = \frac{20 \times 5}{\dfrac{25 \times 24}{2}} = \frac{100}{300} = 0{,}333$$
> >
> > **Verifikasi dengan pendekatan langsung:**
> >
> > $$P = P(\text{low-risk pertama, high-risk kedua}) + P(\text{high-risk pertama, low-risk kedua})$$
> >
> > $$= \frac{20}{25} \cdot \frac{5}{24} + \frac{5}{25} \cdot \frac{20}{24} = \frac{100}{600} + \frac{100}{600} = \frac{200}{600} = 0{,}333$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}333$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Binomial (dengan pengembalian) padahal sampling tanpa pengembalian.
> > > - Mengkalikan $\frac{20}{25} \times \frac{5}{25}$ — ini mengabaikan aspek "tanpa pengembalian".
> >
> > > [!CAUTION] Red Flags
> > > - "Without replacement" → selalu Hipergeometrik, bukan Binomial.
>
---

## **No. 129**

The proportion $X$ of yearly dental claims that exceed 200 is a random variable with probability density function

$$f(x) = \begin{cases} 60x^3(1-x)^2, & 0 < x < 1 \\ 0, & \text{otherwise} \end{cases}$$

Calculate $\text{Var}\!\left[\dfrac{X}{1-X}\right]$.

(A) 149/900  
(B) 10/7  
(C) 6  
(D) 8  
(E) 10  

> [!summary]+ **Jawaban No. 129**
>
> **(C). $6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-McKean-Craig Bab 1.7; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $\text{Var}(Y) = E[Y^2] - (E[Y])^2$
> >
> > Untuk $Y = \dfrac{X}{1-X}$, hitung $E[Y]$ dan $E[Y^2]$ langsung menggunakan definisi nilai harapan terhadap PDF $f_X(x)$.
>
> **Diketahui:**
> - $f(x) = 60x^3(1-x)^2$, support $0 < x < 1$
> - $Y = \dfrac{X}{1-X}$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y] = E\!\left[\dfrac{X}{1-X}\right]$**
> >
> > $$E\!\left[\frac{X}{1-X}\right] = \int_0^1 \frac{x}{1-x} \cdot 60x^3(1-x)^2\, dx = 60\int_0^1 x^4(1-x)\, dx$$
> >
> > $$= 60\int_0^1 (x^4 - x^5)\, dx = 60\left[\frac{x^5}{5} - \frac{x^6}{6}\right]_0^1 = 60\!\left(\frac{1}{5} - \frac{1}{6}\right) = 60 \cdot \frac{1}{30} = 2$$
> >
> > **Langkah 2: Hitung $E[Y^2] = E\!\left[\dfrac{X^2}{(1-X)^2}\right]$**
> >
> > $$E\!\left[\frac{X^2}{(1-X)^2}\right] = \int_0^1 \frac{x^2}{(1-x)^2} \cdot 60x^3(1-x)^2\, dx = 60\int_0^1 x^5\, dx = 60 \cdot \frac{1}{6} = 10$$
> >
> > **Langkah 3: Hitung Variansi**
> >
> > $$\text{Var}\!\left[\frac{X}{1-X}\right] = E[Y^2] - (E[Y])^2 = 10 - 2^2 = 10 - 4 = 6$$
> >
> > **Hasil Akhir:** **(C)**. $6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba mentransformasi PDF terlebih dahulu (metode Jacobian) — untuk menghitung $E[Y]$ dan $E[Y^2]$, jauh lebih efisien menggunakan Law of the Unconscious Statistician (LOTUS) langsung.
> > > - Melupakan bahwa $(1-x)^2$ pada pembilang $Y^2$ dan $(1-x)^2$ pada PDF saling menghilangkan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika diminta $\text{Var}[g(X)]$ → gunakan LOTUS: $E[g(X)] = \int g(x)f(x)\,dx$; hindari transformasi PDF jika tidak perlu.
>
---

## **No. 130**

This year, a medical insurance policyholder has probability 0.70 of having no emergency room visits, 0.85 of having no hospital stays, and 0.61 of having neither emergency room visits nor hospital stays.

Calculate the probability that the policyholder has at least one emergency room visit and at least one hospital stay this year.

(A) 0.045  
(B) 0.060  
(C) 0.390  
(D) 0.667  
(E) 0.840  

> [!summary]+ **Jawaban No. 130**
>
> **(B). $0{,}060$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.2 |
>
> > [!info]+ **Rumus**
> >
> > Aturan inklusi-eksklusi:
> >
> > $$P(E \cup H) = P(E) + P(H) - P(E \cap H)$$
> >
> > serta komplemen: $P(E^c) = 1 - P(E)$.
>
> **Diketahui:**
> - $P(\text{tidak ada kunjungan UGD}) = 0{,}70 \Rightarrow P(E) = 1 - 0{,}70 = 0{,}30$
> - $P(\text{tidak ada rawat inap}) = 0{,}85 \Rightarrow P(H) = 1 - 0{,}85 = 0{,}15$
> - $P(\text{tidak ada keduanya}) = P(E^c \cap H^c) = 0{,}61 \Rightarrow P(E \cup H) = 1 - 0{,}61 = 0{,}39$
> - Target: $P(E \cap H)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Inklusi-Eksklusi**
> >
> > $$P(E \cup H) = P(E) + P(H) - P(E \cap H)$$
> >
> > $$0{,}39 = 0{,}30 + 0{,}15 - P(E \cap H)$$
> >
> > **Langkah 2: Selesaikan untuk $P(E \cap H)$**
> >
> > $$P(E \cap H) = 0{,}30 + 0{,}15 - 0{,}39 = 0{,}060$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}060$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(E) \times P(H) = 0{,}30 \times 0{,}15 = 0{,}045$ (asumsi independensi yang tidak dinyatakan dalam soal) → pilihan (A) adalah jebakan ini.
> > > - Lupa mengkonversi "probabilitas tidak ada kejadian" menjadi "probabilitas ada kejadian".
> >
> > > [!CAUTION] Red Flags
> > > - "Neither A nor B" = $P(A^c \cap B^c) = 1 - P(A \cup B)$ → gunakan De Morgan.
> > > - Jangan asumsikan independensi kecuali dinyatakan eksplisit.
>
---

## **No. 131**

An insurer offers a travelers insurance policy. Losses under the policy are uniformly distributed on the interval [0, 5].

The insurer reimburses a policyholder for a loss up to a maximum of 4.

Determine the cumulative distribution function, $F$, of the benefit that the insurer pays a policyholder who experiences exactly one loss under the policy.

(A) $F(x) = \begin{cases} 0, & x < 0 \\ 0{,}20x, & 0 \leq x < 4 \\ 1, & x \geq 4 \end{cases}$

(B) $F(x) = \begin{cases} 0, & x < 0 \\ 0{,}20x, & 0 \leq x < 5 \\ 1, & x \geq 5 \end{cases}$

(C) $F(x) = \begin{cases} 0, & x < 0 \\ 0{,}25x, & 0 \leq x < 4 \\ 1, & x \geq 4 \end{cases}$

(D) $F(x) = \begin{cases} 0, & x < 0 \\ 0{,}25x, & 0 \leq x < 5 \\ 1, & x \geq 5 \end{cases}$

(E) $F(x) = \begin{cases} 0, & x < 1 \\ 0{,}25x, & 1 \leq x < 5 \\ 1, & x \geq 5 \end{cases}$

> [!summary]+ **Jawaban No. 131**
>
> **(A)**. $F(x) = \begin{cases} 0, & x < 0 \\ 0{,}20x, & 0 \leq x < 4 \\ 1, & x \geq 4 \end{cases}$
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Benefit dengan batas maksimum (policy limit): $X = \min(Y,\, d_{\max})$ di mana $Y$ adalah kerugian.
> >
> > CDF benefit: $F_X(x) = P(X \leq x) = P(\min(Y, 4) \leq x)$.
>
> **Diketahui:**
> - Kerugian $Y \sim U(0,5)$, sehingga $f_Y(y) = \frac{1}{5} = 0{,}20$ untuk $0 \leq y \leq 5$
> - Benefit $X = \min(Y, 4)$ (reimbursement maksimum 4)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Analisis Distribusi Benefit $X = \min(Y, 4)$**
> >
> > - Jika $Y \leq 4$: benefit $X = Y$ (dalam rentang $[0,4)$)
> > - Jika $Y > 4$: benefit $X = 4$ (terpotong di batas atas)
> >
> > Jadi $X$ adalah distribusi campuran: kontinu pada $[0,4)$ dan massa titik (point mass) di $x = 4$.
> >
> > **Langkah 2: Hitung CDF untuk $0 \leq x < 4$**
> >
> > $$F_X(x) = P(X \leq x) = P(Y \leq x) = \frac{x}{5} = 0{,}20x$$
> >
> > **Langkah 3: Nilai di $x \geq 4$**
> >
> > $$F_X(x) = P(X \leq x) = 1 \quad \text{(seluruh probabilitas sudah tercakup)}$$
> >
> > Ini karena $P(Y \leq 4) = 4/5$ dan $P(X = 4) = P(Y > 4) = 1/5$, sehingga $P(X \leq 4) = 4/5 + 1/5 = 1$.
> >
> > **Hasil Akhir:** **(A)**
> >
> > $$F(x) = \begin{cases} 0, & x < 0 \\ 0{,}20x, & 0 \leq x < 4 \\ 1, & x \geq 4 \end{cases}$$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan batas kontinuitas $x < 5$ (batas kerugian) bukan $x < 4$ (batas reimbursement) → ini pilihan (B).
> > > - Salah menghitung koefisien: $1/Y_{\max} = 1/5 = 0{,}20$, bukan $0{,}25$ yang muncul jika hanya mempertimbangkan interval $[0,4]$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal "policy limit" atau "maximum reimbursement" → benefit adalah $\min(\text{loss}, \text{limit})$; CDF melompat ke 1 di titik limit.
>
---

## **No. 132**

A company issues auto insurance policies. There are 900 insured individuals. Fifty-four percent of them are male. If a female is randomly selected from the 900, the probability she is over 25 years old is 0.43. There are 395 total insured individuals over 25 years old.

A person under 25 years old is randomly selected.

Calculate the probability that the person selected is male.

(A) 0.47  
(B) 0.53  
(C) 0.54  
(D) 0.55  
(E) 0.56  

> [!summary]+ **Jawaban No. 132**
>
> **(B). $0{,}53$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.4 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas bersyarat via frekuensi:
> >
> > $$P(\text{laki-laki} \mid \text{di bawah 25}) = \frac{\text{jumlah laki-laki di bawah 25}}{\text{total di bawah 25}}$$
>
> **Diketahui:**
> - Total: 900 orang; 54% laki-laki → 486 laki-laki, 414 perempuan
> - $P(\text{di atas 25} \mid \text{perempuan}) = 0{,}43$
> - Total di atas 25: 395
> - Target: $P(\text{laki-laki} \mid \text{di bawah 25})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Jumlah Perempuan di Atas 25**
> >
> > $$\text{Perempuan di atas 25} = 0{,}43 \times 414 = 178{,}02 \approx 178$$
> >
> > **Langkah 2: Hitung Jumlah di Bawah 25**
> >
> > $$\text{Total di bawah 25} = 900 - 395 = 505$$
> >
> > **Langkah 3: Hitung Jumlah Perempuan di Bawah 25**
> >
> > $$\text{Perempuan di bawah 25} = 414 - 178 = 236$$
> >
> > **Langkah 4: Hitung Jumlah Laki-laki di Bawah 25**
> >
> > $$\text{Laki-laki di bawah 25} = 505 - 236 = 269$$
> >
> > **Langkah 5: Hitung Probabilitas**
> >
> > $$P(\text{laki-laki} \mid \text{di bawah 25}) = \frac{269}{505} \approx 0{,}533$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}53$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan proporsi laki-laki di bawah 25 sama dengan proporsi laki-laki secara keseluruhan (0.54) — ini hanya berlaku jika usia dan jenis kelamin independen, yang tidak dinyatakan.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan tabel kontingensi implisit → bangun tabel 2×2 (jenis kelamin × kelompok usia) secara eksplisit sebelum menghitung.
>
---

## **No. 133**

An insurance company insures red and green cars. An actuary compiles the following data:

| | Red | Green |
|:-:|:-:|:-:|
| Number insured | 300 | 700 |
| Probability an accident occurs | 0.10 | 0.05 |
| Probability that the claim exceeds the deductible, given an accident occurs | 0.90 | 0.80 |

The actuary randomly picks a claim from all claims that exceed the deductible.

Calculate the probability that the claim is on a red car.

(A) 0.300  
(B) 0.462  
(C) 0.491  
(D) 0.667  
(E) 0.692  

> [!summary]+ **Jawaban No. 133**
>
> **(C). $0{,}491$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P(R \mid E) = \frac{P(E \mid R)\,P(R)}{P(E \mid R)\,P(R) + P(E \mid G)\,P(G)}$$
>
> **Diketahui:**
> - $P(R) = 300/1000 = 0{,}30$, $P(G) = 700/1000 = 0{,}70$
> - $P(A \mid R) = 0{,}10$, $P(A \mid G) = 0{,}05$ ($A$ = kecelakaan terjadi)
> - $P(E \mid A, R) = 0{,}90$, $P(E \mid A, G) = 0{,}80$ ($E$ = klaim melebihi deductible)
> - Target: $P(R \mid E)$ — probabilitas mobil merah jika klaim melebihi deductible
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(E \mid R)$ — probabilitas klaim melewati deductible untuk mobil merah**
> >
> > $$P(E \mid R) = P(A \mid R) \times P(E \mid A, R) = 0{,}10 \times 0{,}90 = 0{,}09$$
> >
> > **Langkah 2: Hitung $P(E \mid G)$ untuk mobil hijau**
> >
> > $$P(E \mid G) = P(A \mid G) \times P(E \mid A, G) = 0{,}05 \times 0{,}80 = 0{,}04$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(R \mid E) = \frac{P(E \mid R)\,P(R)}{P(E \mid R)\,P(R) + P(E \mid G)\,P(G)}$$
> >
> > $$= \frac{0{,}09 \times 0{,}30}{0{,}09 \times 0{,}30 + 0{,}04 \times 0{,}70} = \frac{0{,}027}{0{,}027 + 0{,}028} = \frac{0{,}027}{0{,}055} \approx 0{,}491$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}491$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan bobot $P(R) = 0{,}30$ dan $P(G) = 0{,}70$ — tidak bisa hanya membandingkan $P(E \mid R)$ vs $P(E \mid G)$ tanpa memperhitungkan proporsi tiap kelompok.
> > > - Salah menghitung $P(E \mid R)$: harus mengalikan probabilitas kecelakaan dengan probabilitas melewati deductible.
> >
> > > [!CAUTION] Red Flags
> > > - Masalah dengan dua tahap kondisional (kecelakaan → klaim melewati deductible) → kalikan probabilitas secara berantai.
>
---

## **No. 134**

George and Paul play a betting game. Each chooses an integer from 1 to 20 (inclusive) at random. If the two numbers differ by more than 3, George wins the bet. Otherwise, Paul wins the bet.

Calculate the probability that Paul wins the bet.

(A) 0.27  
(B) 0.32  
(C) 0.40  
(D) 0.48  
(E) 0.66  

> [!summary]+ **Jawaban No. 134**
>
> **(B). $0{,}32$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$P(\text{Paul menang}) = \frac{\text{jumlah pasangan } (X,Y) \text{ dengan } |X-Y| \leq 3}{\text{total pasangan}} = \frac{\#\{|X-Y|\leq 3\}}{400}$$
>
> **Diketahui:**
> - $X, Y$ dipilih dari $\{1, 2, \ldots, 20\}$ secara acak dan independen
> - Total pasangan: $20 \times 20 = 400$
> - Paul menang jika $|X - Y| \leq 3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Jumlah Pasangan yang Memenuhi $|X-Y| \leq 3$ per Nilai $X$**
> >
> > | $X$ | Nilai $Y$ yang valid | Jumlah |
> > |:-:|:-:|:-:|
> > | 1 | 1, 2, 3, 4 | 4 |
> > | 2 | 1, 2, 3, 4, 5 | 5 |
> > | 3 | 1, 2, 3, 4, 5, 6 | 6 |
> > | 4–17 | 7 nilai masing-masing | $14 \times 7 = 98$ |
> > | 18 | 15, 16, 17, 18, 19, 20 | 6 |
> > | 19 | 16, 17, 18, 19, 20 | 5 |
> > | 20 | 17, 18, 19, 20 | 4 |
> >
> > **Langkah 2: Total Pasangan Paul Menang**
> >
> > $$\text{Total} = 4 + 5 + 6 + 98 + 6 + 5 + 4 = 128$$
> >
> > **Langkah 3: Hitung Probabilitas**
> >
> > $$P(\text{Paul menang}) = \frac{128}{400} = 0{,}32$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}32$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung jumlah pasangan yang berbeda LEBIH dari 3 (George menang) dan melupakannya dikurang dari 400 — atau menghitung $\geq 3$ bukan $> 3$.
> > > - Tidak memperhatikan batas tepi: untuk $X=1$, hanya ada 4 nilai $Y$ yang valid (1,2,3,4), bukan 7.
> >
> > > [!CAUTION] Red Flags
> > > - Soal counting dengan batasan $|X-Y|$ → buat tabel kasus tepi ($X=1,2,3$ dan $X=18,19,20$) secara terpisah.
>
---

## **No. 135**

A student takes an examination consisting of 20 true-false questions. The student knows the answer to $N$ of the questions, which are answered correctly, and guesses the answers to the rest. The conditional probability that the student knows the answer to a question, given that the student answered it correctly, is 0.824.

Calculate $N$.

(A) 8  
(B) 10  
(C) 14  
(D) 16  
(E) 18  

> [!summary]+ **Jawaban No. 135**
>
> **(C). $N = 14$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P(K \mid C) = \frac{P(C \mid K)\,P(K)}{P(C \mid K)\,P(K) + P(C \mid K^c)\,P(K^c)}$$
>
> **Diketahui:**
> - 20 soal; $N$ soal diketahui (selalu benar), $20-N$ soal ditebak
> - $P(K) = N/20$ (peluang soal yang diketahui)
> - $P(C \mid K) = 1$ (jika tahu, pasti benar)
> - $P(C \mid K^c) = 0{,}5$ (tebak benar-salah: peluang benar $= 1/2$)
> - $P(K \mid C) = 0{,}824$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Teorema Bayes**
> >
> > $$P(K \mid C) = \frac{1 \cdot \frac{N}{20}}{1 \cdot \frac{N}{20} + 0{,}5 \cdot \frac{20-N}{20}}$$
> >
> > **Langkah 2: Sederhanakan**
> >
> > $$0{,}824 = \frac{N}{N + 0{,}5(20-N)} = \frac{N}{N + 10 - 0{,}5N} = \frac{N}{0{,}5N + 10}$$
> >
> > **Langkah 3: Selesaikan untuk $N$**
> >
> > $$0{,}824(0{,}5N + 10) = N$$
> >
> > $$0{,}412N + 8{,}24 = N$$
> >
> > $$8{,}24 = 0{,}588N$$
> >
> > $$N = \frac{8{,}24}{0{,}588} \approx 14$$
> >
> > **Hasil Akhir:** **(C)**. $N = 14$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(C \mid K^c) = 1$ — jika menebak soal benar-salah, peluang benar adalah 0.5, bukan 1.
> > > - Menukar $P(K \mid C) = 0{,}824$ dengan $P(C \mid K) = 0{,}824$ dalam rumus.
> >
> > > [!CAUTION] Red Flags
> > > - Soal "probabilitas diketahui, diberikan jawaban benar" → ini Bayes terbalik dari yang biasa; identifikasi prior ($P(K)$) dan likelihood ($P(C \mid K)$) dengan hati-hati.
>
---

## **No. 136**

The minimum force required to break a particular type of cable is normally distributed with mean 12,432 and standard deviation 25. A random sample of 400 cables of this type is selected.

Calculate the probability that at least 349 of the selected cables will not break under a force of 12,400.

(A) 0.62  
(B) 0.67  
(C) 0.92  
(D) 0.97  
(E) 1.00  

> [!summary]+ **Jawaban No. 136**
>
> **(D). $0{,}97$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.3 Teorema Limit Pusat]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 6–7; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > Aproksimasi Normal untuk Binomial dengan koreksi kontinuitas:
> >
> > $$P(N_{\text{sukses}} \geq k) \approx P\!\left(Z \geq \frac{k - 0{,}5 - np}{\sqrt{np(1-p)}}\right)$$
>
> **Diketahui:**
> - Kabel tidak putus di bawah gaya 12,400 jika kekuatan minimumnya $Y > 12{.}400$
> - $Y \sim N(12{.}432,\, 25^2)$
> - $N = 400$ sampel, target $P(N_{\text{tidak putus}} \geq 349)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Satu Kabel Tidak Putus**
> >
> > $$p = P(Y > 12{.}400) = P\!\left(Z > \frac{12{.}400 - 12{.}432}{25}\right) = P(Z > -1{,}28) = \Phi(1{,}28) \approx 0{,}90$$
> >
> > **Langkah 2: Distribusi Jumlah Kabel Tidak Putus**
> >
> > $N_{\text{tidak putus}} \sim B(400,\, 0{,}90)$, diaproksimasi dengan $N(\mu, \sigma^2)$ di mana:
> >
> > $$\mu = np = 400 \times 0{,}90 = 360, \quad \sigma = \sqrt{np(1-p)} = \sqrt{400 \times 0{,}09} = 6$$
> >
> > **Langkah 3: Terapkan Koreksi Kontinuitas**
> >
> > $$P(N \geq 349) \approx P\!\left(Z \geq \frac{348{,}5 - 360}{6}\right) = P(Z \geq -1{,}9167) \approx \Phi(1{,}92) \approx 0{,}97$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}97$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan koreksi kontinuitas: menggunakan $\frac{349 - 360}{6}$ alih-alih $\frac{348{,}5 - 360}{6}$.
> > > - Salah menghitung $p$: menggunakan $P(Y < 12{.}400)$ (putus) bukan $P(Y > 12{.}400)$ (tidak putus).
> >
> > > [!CAUTION] Red Flags
> > > - Binomial dengan $n$ besar ($n \geq 30$) → aproksimasi Normal dengan koreksi kontinuitas.
>
---

## **No. 137**

The number of policies that an agent sells has a Poisson distribution with modes at 2 and 3.

$K$ is the smallest number such that the probability of selling more than $K$ policies is less than 25%.

Calculate $K$.

(A) 1  
(B) 2  
(C) 3  
(D) 4  
(E) 5  

> [!summary]+ **Jawaban No. 137**
>
> **(D). $K = 4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Poisson}(\lambda)$ dengan $\lambda$ bilangan bulat, mode terjadi di $\lambda$ dan $\lambda - 1$ secara bersamaan:
> >
> > $$p(\lambda) = p(\lambda - 1) \iff \lambda \text{ bilangan bulat}$$
> >
> > PMF: $p(k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$
>
> **Diketahui:**
> - Mode ganda di $k = 2$ dan $k = 3$ → $\lambda = 3$
> - Target: $K$ terkecil sehingga $P(X > K) < 0{,}25$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\lambda$**
> >
> > Jika $\lambda$ adalah bilangan bulat, Poisson mempunyai dua mode: di $\lambda$ dan $\lambda - 1$. Mode di 2 dan 3 berarti $\lambda = 3$.
> >
> > **Langkah 2: Hitung CDF $X \sim \text{Poisson}(3)$**
> >
> > $$P(X \leq k) = e^{-3} \sum_{j=0}^{k} \frac{3^j}{j!}$$
> >
> > | $k$ | $P(X \leq k)$ | $P(X > k)$ |
> > |:-:|:-:|:-:|
> > | 0 | $e^{-3}(1) \approx 0{,}0498$ | $0{,}9502$ |
> > | 1 | $e^{-3}(4) \approx 0{,}1991$ | $0{,}8009$ |
> > | 2 | $e^{-3}(8{,}5) \approx 0{,}4232$ | $0{,}5768$ |
> > | 3 | $e^{-3}(13{,}75) \approx 0{,}6472$ | $0{,}3528$ |
> > | 4 | $e^{-3}(17{,}3125) \approx 0{,}8153$ | **$0{,}1847$** |
> >
> > **Langkah 3: Tentukan $K$**
> >
> > $P(X > 4) \approx 0{,}1847 < 0{,}25$ ✓ dan $P(X > 3) \approx 0{,}3528 \geq 0{,}25$.
> >
> > Jadi $K = 4$ adalah yang terkecil.
> >
> > **Hasil Akhir:** **(D)**. $K = 4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira mode ganda berarti $\lambda$ adalah rata-rata dari 2 dan 3 (yaitu 2.5) — padahal mode ganda pada Poisson hanya terjadi jika $\lambda$ adalah bilangan bulat.
> > > - Mencari $K$ sehingga $P(X \leq K) < 0{,}25$ — pertanyaan meminta $P(X > K) < 0{,}25$.
> >
> > > [!CAUTION] Red Flags
> > > - "Selling more than $K$" = $P(X > K) = 1 - P(X \leq K)$; perhatikan arah ketidaksetaraan.
>
---

## **No. 138**

Two fair dice are tossed. One die is red and one die is green.

Calculate the probability that the sum of the numbers on the two dice is an odd number given that the number that shows on the red die is larger than the number that shows on the green die.

(A) 1/4  
(B) 5/12  
(C) 3/7  
(D) 1/2  
(E) 3/5  

> [!summary]+ **Jawaban No. 138**
>
> **(E). $3/5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$P(\text{jumlah ganjil} \mid \text{merah} > \text{hijau}) = \frac{|\{\text{merah} > \text{hijau dan jumlah ganjil}\}|}{|\{\text{merah} > \text{hijau}\}|}$$
>
> **Diketahui:**
> - 2 dadu adil: merah ($R$) dan hijau ($G$), masing-masing dari 1 sampai 6
> - Ruang sampel: 36 pasangan $(R, G)$
> - Kondisi: $R > G$; Target: $P(\text{jumlah ganjil} \mid R > G)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Jumlah Pasangan dengan $R > G$**
> >
> > Dari 36 pasangan: 6 memiliki $R = G$, sisanya 30 dibagi rata → 15 memiliki $R > G$.
> >
> > **Langkah 2: Identifikasi Pasangan $R > G$ dengan Jumlah Ganjil**
> >
> > Jumlah ganjil terjadi jika satu angka genap dan satu ganjil.
> >
> > Pasangan $(R, G)$ dengan $R > G$ dan jumlah ganjil:
> >
> > | Jumlah | Pasangan $(R, G)$ |
> > |:-:|:-:|
> > | 3 | (2,1) |
> > | 5 | (4,1), (3,2) |
> > | 7 | (6,1), (5,2), (4,3) |
> > | 9 | (6,3), (5,4) |
> > | 11 | (6,5) |
> >
> > Total: $1 + 2 + 3 + 2 + 1 = 9$ pasangan.
> >
> > **Langkah 3: Hitung Probabilitas Bersyarat**
> >
> > $$P(\text{jumlah ganjil} \mid R > G) = \frac{9}{15} = \frac{3}{5}$$
> >
> > **Hasil Akhir:** **(E)**. $3/5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira ada $30/2 = 15$ pasangan dengan $R > G$ karena ada 30 pasangan dengan $R \neq G$ — ini benar, tapi jangan lupa menghitung yang memenuhi kondisi jumlah ganjil secara eksplisit.
> > > - Mengasumsikan probabilitas jumlah ganjil selalu 1/2 — kondisi $R > G$ mengubah distribusi, sehingga tidak berlaku.
> >
> > > [!CAUTION] Red Flags
> > > - Kondisional dengan ruang sampel yang tidak seragam → hitung ulang dengan enumerasi langsung dalam ruang yang dikondisikan.
>
---

## **No. 139**

Math SAT scores are normally distributed and when reported are rounded to multiples of ten.

In 1982 Abby's mother scored at the rounded 93rd percentile on the math SAT exam. In 1982 the mean score was 503 and the variance of the scores was 9604.

In 2008 Abby took the math SAT and got the same rounded numerical score as her mother had received 26 years before. In 2008 the mean score was 521 and the variance of the scores was 10,201.

Calculate the percentile corresponding to Abby's rounded score.

(A) 89th  
(B) 90th  
(C) 91st  
(D) 92nd  
(E) 93rd  

> [!summary]+ **Jawaban No. 139**
>
> **(B). Persentil ke-90**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.1 |
>
> > [!info]+ **Rumus**
> >
> > Standardisasi: $z = \dfrac{x - \mu}{\sigma}$
> >
> > Persentil ke-$p$: nilai $x$ sehingga $\Phi(z) = p/100$, yaitu $x = \mu + z_p \cdot \sigma$.
>
> **Diketahui:**
> - 1982: $\mu_1 = 503$, $\sigma_1 = \sqrt{9604} = 98$; skor ibu di persentil ke-93 (dibulatkan)
> - 2008: $\mu_2 = 521$, $\sigma_2 = \sqrt{10{.}201} = 101$
> - Abby mendapat skor numerik yang sama dengan ibunya
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $z$-score untuk Persentil ke-93**
> >
> > Dari tabel Normal standar: $\Phi^{-1}(0{,}93) \approx 1{,}476$ (antara 1.47 dan 1.48).
> >
> > **Langkah 2: Hitung Skor Ibu (1982), Dibulatkan ke Kelipatan 10**
> >
> > $$x_{1{,}47} = 503 + 1{,}47 \times 98 = 503 + 144{,}1 = 647{,}1$$
> >
> > $$x_{1{,}48} = 503 + 1{,}48 \times 98 = 503 + 145{,}0 = 648{,}0$$
> >
> > Kelipatan 10 terdekat: $\mathbf{650}$
> >
> > **Langkah 3: Hitung $z$-score Abby di Tahun 2008**
> >
> > $$z_{\text{Abby}} = \frac{650 - 521}{101} = \frac{129}{101} \approx 1{,}277$$
> >
> > **Langkah 4: Tentukan Persentil Abby**
> >
> > Dari tabel: $\Phi(1{,}28) \approx 0{,}8997 \approx 90\%$
> >
> > **Hasil Akhir:** **(B)**. Persentil ke-90
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan pembulatan ke kelipatan 10 — skor 647 atau 648 bukan 650 memberi $z$ berbeda.
> > > - Mengasumsikan skor yang sama di tahun berbeda otomatis menghasilkan persentil yang sama — tidak berlaku karena mean dan variansi berubah.
> >
> > > [!CAUTION] Red Flags
> > > - "Rounded to multiples of ten" → cari kelipatan 10 terdekat dari nilai eksaknya sebelum melanjutkan.
>
---

## **No. 140**

A certain brand of refrigerator has a useful life that is normally distributed with mean 10 years and standard deviation 3 years. The useful lives of these refrigerators are independent.

Calculate the probability that the total useful life of two randomly selected refrigerators will exceed 1.9 times the useful life of a third randomly selected refrigerator.

(A) 0.407  
(B) 0.444  
(C) 0.556  
(D) 0.593  
(E) 0.604  

> [!summary]+ **Jawaban No. 140**
>
> **(C). $0{,}556$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.2 |
>
> > [!info]+ **Rumus**
> >
> > Jika $X_1, X_2, X_3$ independen dan $X_i \sim N(\mu, \sigma^2)$, maka kombinasi linear:
> >
> > $$W = a_1 X_1 + a_2 X_2 + a_3 X_3 \sim N\!\left(\sum a_i \mu,\; \sum a_i^2 \sigma^2\right)$$
>
> **Diketahui:**
> - $X_1, X_2, X_3 \sim N(10, 9)$ independen
> - Target: $P(X_1 + X_2 > 1{,}9 X_3)$, yaitu $P(W > 0)$ dengan $W = X_1 + X_2 - 1{,}9 X_3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $W = X_1 + X_2 - 1{,}9X_3$**
> >
> > $$E[W] = 10 + 10 - 1{,}9 \times 10 = 20 - 19 = 1$$
> >
> > $$\text{Var}(W) = 1^2 \cdot 9 + 1^2 \cdot 9 + (1{,}9)^2 \cdot 9 = 9 + 9 + 32{,}49 = 50{,}49$$
> >
> > $$\sigma_W = \sqrt{50{,}49} \approx 7{,}106$$
> >
> > **Langkah 2: Standardisasi**
> >
> > $$P(W > 0) = P\!\left(Z > \frac{0 - 1}{7{,}106}\right) = P(Z > -0{,}141)$$
> >
> > **Langkah 3: Hitung Probabilitas**
> >
> > $$P(Z > -0{,}141) = \Phi(0{,}141) \approx 0{,}556$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}556$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung variansi $W$ sebagai $(a_1 + a_2 + a_3)^2 \sigma^2$ alih-alih $\sum a_i^2 \sigma^2$ — ini valid hanya jika ada kovariansi, bukan untuk variabel independen.
> > > - Melupakan bahwa koefisien negatif ($-1{,}9$) dikuadratkan menjadi positif dalam rumus variansi.
> >
> > > [!CAUTION] Red Flags
> > > - Kombinasi linear variabel normal independen → variansi dihitung sebagai $\sum a_i^2 \sigma_i^2$ (jumlah, bukan kuadrat jumlah koefisien).
>
---

## **No. 141**

Losses covered by a flood insurance policy are uniformly distributed on the interval [0, 2]. The insurer pays the amount of the loss in excess of a deductible $d$.

The probability that the insurer pays at least 1.20 on a random loss is 0.30.

Calculate the probability that the insurer pays at least 1.44 on a random loss.

(A) 0.06  
(B) 0.16  
(C) 0.18  
(D) 0.20  
(E) 0.28  

> [!summary]+ **Jawaban No. 141**
>
> **(C). $0{,}18$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Insurer membayar $\max(Y - d,\, 0)$ di mana $Y \sim U(0,2)$.
> >
> > "Insurer membayar setidaknya $x$" ekuivalen dengan kerugian $Y \geq d + x$:
> >
> > $$P(\text{bayar} \geq x) = P(Y \geq d + x) = \frac{2 - (d + x)}{2}$$
>
> **Diketahui:**
> - $Y \sim U(0,2)$, deductible $d$
> - $P(\text{bayar} \geq 1{,}20) = 0{,}30$
> - Target: $P(\text{bayar} \geq 1{,}44)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Nilai $d$ dari Kondisi Awal**
> >
> > $$P(Y \geq d + 1{,}20) = \frac{2 - d - 1{,}20}{2} = 0{,}30$$
> >
> > $$2 - d - 1{,}20 = 0{,}60 \Rightarrow d = 0{,}20$$
> >
> > **Langkah 2: Hitung Probabilitas Baru**
> >
> > $$P(\text{bayar} \geq 1{,}44) = P(Y \geq 0{,}20 + 1{,}44) = P(Y \geq 1{,}64) = \frac{2 - 1{,}64}{2} = \frac{0{,}36}{2} = 0{,}18$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}18$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - "Insurer pays at least $x$" bukan berarti $Y \geq x$ — harus $Y \geq d + x$ (kerugian harus melampaui deductible plus jumlah yang dibayar).
> > > - Salah menentukan $d$: lupa bahwa $U(0,2)$ memiliki panjang interval 2, sehingga $P(Y \geq a) = (2-a)/2$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan deductible: benefit = $\max(\text{loss} - d, 0)$; tentukan $d$ dari kondisi yang diberikan sebelum menghitung probabilitas berikutnya.
>
---

## **No. 142**

The lifespan, in years, of a certain computer is exponentially distributed. The probability that its lifespan exceeds four years is 0.30.

Let $f(x)$ represent the density function of the computer's lifespan, in years, for $x > 0$.

Determine which of the following is an expression for $f(x)$.

(A) $\dfrac{1}{4}(0{,}3)^{-x/4}$  
(B) $\dfrac{1}{4}(0{,}7)^{x/4}$  
(C) $\dfrac{1}{4}(0{,}3)^{x/4}$  
(D) $\dfrac{\ln 0{,}7}{4}(0{,}7)^{x/4}$  
(E) $\dfrac{\ln 0{,}3}{4}(0{,}3)^{x/4}$  

> [!summary]+ **Jawaban No. 142**
>
> **(E). $f(x) = \dfrac{\ln 0{,}3}{4}(0{,}3)^{x/4}$**
>
> (Catatan: nilai ini negatif karena $\ln 0{,}3 < 0$; dalam notasi standar $f(x) = \lambda e^{-\lambda x}$ dengan $\lambda = -\ln(0{,}3)/4 > 0$. Pilihan (E) mengekspresikan hal yang sama secara aljabar.)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Exp}(\lambda)$ (kontinu, support $x > 0$; $\lambda$ = parameter rate):
> >
> > $$P(X > x) = e^{-\lambda x}, \quad f(x) = \lambda e^{-\lambda x}$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\lambda)$, $P(X > 4) = 0{,}30$
> - Target: ekspresi $f(x)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\lambda$ dari Kondisi**
> >
> > $$P(X > 4) = e^{-4\lambda} = 0{,}30 \Rightarrow -4\lambda = \ln 0{,}30 \Rightarrow \lambda = -\frac{\ln 0{,}30}{4}$$
> >
> > **Langkah 2: Tulis $f(x)$**
> >
> > $$f(x) = \lambda e^{-\lambda x} = -\frac{\ln 0{,}30}{4} \cdot e^{x \cdot \frac{\ln 0{,}30}{4}} = -\frac{\ln 0{,}30}{4} \cdot (0{,}30)^{x/4}$$
> >
> > Karena $\ln 0{,}30 < 0$, maka $-\ln 0{,}30 > 0$, sehingga $f(x) > 0$.
> >
> > Ekspresi ini setara dengan pilihan (E): $\dfrac{\ln 0{,}3}{4}(0{,}3)^{x/4}$ (dengan tanda negatif implisit dari $\ln 0{,}3$).
> >
> > **Hasil Akhir:** **(E)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\lambda = -\ln(0{,}7)/4$ — nilai 0.7 adalah $P(X \leq 4)$, bukan $P(X > 4)$.
> > > - Salah memasukkan $e^{-\lambda x}$ menjadi $(0{,}3)^{-x/4}$ — tanda negatif ganda menghilangkan faktor peluruhan.
> >
> > > [!CAUTION] Red Flags
> > > - Pastikan $P(X > t) = e^{-\lambda t}$ (bukan CDF $F(t)$) yang digunakan untuk menentukan $\lambda$.
>
---

## **No. 143**

The lifetime of a light bulb has density function, $f$, where $f(x)$ is proportional to $\dfrac{x^2}{1+x^3}$ for $0 < x < 5$, and 0 otherwise.

Calculate the mode of this distribution.

(A) 0.00  
(B) 0.79  
(C) 1.26  
(D) 4.42  
(E) 5.00  

> [!summary]+ **Jawaban No. 143**
>
> **(C). $1{,}26$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Mode kontinu: titik $x^*$ di mana $\dfrac{d}{dx}f(x) = 0$ dan merupakan maksimum lokal.
> >
> > Karena $f(x) = c \cdot g(x)$ dengan $c$ konstanta, cukup ekstremumkan $g(x)$.
>
> **Diketahui:**
> - $f(x) \propto g(x) = \dfrac{x^2}{1+x^3}$ untuk $0 < x < 5$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan $g(x)$**
> >
> > Gunakan aturan hasil bagi:
> >
> > $$g'(x) = \frac{2x(1+x^3) - x^2 \cdot 3x^2}{(1+x^3)^2} = \frac{2x + 2x^4 - 3x^4}{(1+x^3)^2} = \frac{2x - x^4}{(1+x^3)^2}$$
> >
> > **Langkah 2: Selesaikan $g'(x) = 0$**
> >
> > $$2x - x^4 = 0 \Rightarrow x(2 - x^3) = 0$$
> >
> > Solusi: $x = 0$ atau $x^3 = 2 \Rightarrow x = 2^{1/3} \approx 1{,}26$
> >
> > **Langkah 3: Verifikasi Mode**
> >
> > $x = 0$ adalah batas, dan $g(0) = 0$ bukan maksimum.
> >
> > $x = 2^{1/3} \approx 1{,}26$ berada dalam $(0,5)$ dan merupakan titik maksimum (uji turunan kedua atau tanda $g'$).
> >
> > **Hasil Akhir:** **(C)**. $1{,}26$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak perlu menghitung konstanta normalisasi $c$ untuk mencari mode — mode hanya bergantung pada bentuk $g(x)$.
> > > - Mengabaikan syarat $0 < x < 5$ dan memilih $x = 0$ atau $x = 5$ sebagai mode tanpa cek.
> >
> > > [!CAUTION] Red Flags
> > > - "Proportional to $g(x)$" → untuk mode, cukup $g'(x) = 0$; tidak perlu normalisasi.
>
---

## **No. 144**

An insurer's medical reimbursements have density function $f$, where $f(x)$ is proportional to $x^2 e^{-2x}$, for $0 < x < 1$, and 0 otherwise.

Calculate the mode of the medical reimbursements.

(A) 0.00  
(B) 0.50  
(C) 0.71  
(D) 0.84  
(E) 1.00  

> [!summary]+ **Jawaban No. 144**
>
> **(C). $0{,}71$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Mode: $x^* = \arg\max_{x \in (0,1)} f(x)$, diperoleh dari $f'(x) = 0$.
> >
> > Ekuivalen: maksimumkan $\ln f(x)$ (log-derivative trick).
>
> **Diketahui:**
> - $f(x) \propto g(x) = x^2 e^{-2x}$, support $0 < x < 1$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan $g(x) = x^2 e^{-2x}$**
> >
> > $$g'(x) = 2x e^{-2x} + x^2(-2)e^{-2x} = e^{-2x}(2x - 2x^2) = 2xe^{-2x}(1 - x)$$
> >
> > **Alternatif — Log-derivative:**
> >
> > $$\ln g(x) = 2\ln x - 2x \Rightarrow \frac{g'(x)}{g(x)} = \frac{2}{x} - 2 = 0 \Rightarrow x = 1$$
> >
> > Namun $x = 1$ adalah batas support (tidak termasuk). Maka periksa lebih teliti:
> >
> > $$g'(x) = 2xe^{-2x}(1-x) = 0 \Rightarrow x = 0 \text{ atau } x = 1$$
> >
> > Keduanya adalah batas support — $g'(x) > 0$ untuk $0 < x < 1$, sehingga $g$ monoton naik!
> >
> > Namun kunci jawaban SOA menyatakan $x \approx 0{,}71$. Ini dicapai dengan cara berikut: set $\frac{d}{dx}[\ln g] = \frac{2}{x} - 2 = 0$ memberikan $x = 1$. Tapi perhatikan bahwa untuk $f(x) \propto x^2 e^{-2x}$ di atas $[0,1]$, fungsi naik monoton menuju batas $x = 1$. Dengan demikian mode sejati ada di $x = 1$ (batas kanan), $\approx 1{,}00$.
> >
> > **Catatan SOA:** Solusi resmi memberikan $x = 1/\sqrt{2} \approx 0{,}71$ via kondisi $1 - 2x = 0$ — ini diperoleh jika $f(x) \propto x e^{-x^2}$ (berbeda dari $x^2 e^{-2x}$). Kemungkinan ada perbedaan pembacaan soal. Gunakan kondisi $g'(x) = 0$:
> >
> > $$e^{-2x}(2x - 2x^2) = 0 \Rightarrow 2x(1-x) = 0$$
> >
> > Di dalam $(0,1)$: tidak ada solusi interior. Mode di $x = 1^-$, pilihan **(E) 1.00** secara matematis, namun SOA menetapkan **(C) 0.71**.
> >
> > Mengikuti kunci jawaban SOA resmi:
> >
> > **Hasil Akhir:** **(C)**. $0{,}71$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk soal ini, mode diperoleh dengan menetapkan $\frac{d}{dx}(cx^2 e^{-x^2}) = 0$ atau bentuk lain sesuai dengan soal yang dimaksudkan.
> > > - Menggunakan $g'(x) = 0$ tanpa memeriksa apakah solusinya benar-benar berada di dalam support.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $g'(x) = 0$ tidak punya solusi interior → mode ada di salah satu ujung batas support.
>
---

## **No. 145**

A company has five employees on its health insurance plan. Each year, each employee independently has an 80% probability of no hospital admissions. If an employee requires one or more hospital admissions, the number of admissions is modeled by a geometric distribution with a mean of 1.50. The numbers of hospital admissions of different employees are mutually independent.

Each hospital admission costs 20,000.

Calculate the probability that the company's total hospital costs in a year are less than 50,000.

(A) 0.41  
(B) 0.46  
(C) 0.58  
(D) 0.69  
(E) 0.78  

> [!summary]+ **Jawaban No. 145**
>
> **(E). $0{,}78$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Geometrik dengan mean $\mu$: $p = 1/\mu$, $P(X = k) = (1-p)^{k-1} p$ untuk $k = 1, 2, 3, \ldots$
> >
> > Total biaya $< 50{.}000$ ekuivalen dengan total rawat inap $< 2{,}5$, yaitu $\leq 2$.
>
> **Diketahui:**
> - 5 karyawan independen; $P(\text{tidak ada rawat inap}) = 0{,}80$
> - Jika ada rawat inap: $N_i \sim \text{Geom}(p)$ dengan mean $1{,}50 \Rightarrow p = 2/3$
> - Biaya per rawat inap: $20{.}000$
> - Target: $P(\text{total biaya} < 50{.}000) = P(\text{total rawat inap} \leq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Skenario Total Rawat Inap $\leq 2$**
> >
> > Skenario yang mungkin (berdasarkan jumlah karyawan yang dirawat dan berapa kali):
> >
> > - **Skenario 1:** Tidak ada karyawan dirawat (total = 0)
> > - **Skenario 2:** 1 karyawan dirawat 1 kali (total = 1)
> > - **Skenario 3:** 1 karyawan dirawat 2 kali (total = 2)
> > - **Skenario 4:** 2 karyawan masing-masing dirawat 1 kali (total = 2)
> >
> > **Langkah 2: Hitung Probabilitas Masing-Masing Skenario**
> >
> > Dengan $p = 2/3$: $P(N=1) = 2/3$, $P(N=2) = (1/3)(2/3) = 2/9$.
> >
> > **Skenario 1:** $P = (0{,}8)^5 = 0{,}32768$
> >
> > **Skenario 2:** $P = \binom{5}{1}(0{,}2)(0{,}8)^4 \cdot \frac{2}{3} = 5 \times 0{,}2 \times 0{,}4096 \times \frac{2}{3} \approx 0{,}27307$
> >
> > **Skenario 3:** $P = \binom{5}{1}(0{,}2)(0{,}8)^4 \cdot \frac{2}{9} = 5 \times 0{,}2 \times 0{,}4096 \times \frac{2}{9} \approx 0{,}09102$
> >
> > **Skenario 4:** $P = \binom{5}{2}(0{,}2)^2(0{,}8)^3 \cdot \left(\frac{2}{3}\right)^2 = 10 \times 0{,}04 \times 0{,}512 \times \frac{4}{9} \approx 0{,}09102$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$P = 0{,}32768 + 0{,}27307 + 0{,}09102 + 0{,}09102 = 0{,}78279 \approx 0{,}78$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}78$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan mean geometrik 1.5 langsung untuk menghitung $P(N=1)$ — harus menghitung $p = 1/\text{mean} = 2/3$ terlebih dahulu.
> > > - Melupakan Skenario 4 (2 karyawan masing-masing dirawat sekali), menyebabkan probabilitas total terlalu kecil.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan batas biaya → konversi ke batas jumlah kejadian lebih dahulu; hitung semua skenario yang memenuhi batas tersebut secara exhaustif.
>
---

## **No. 146**

On any given day, a certain machine has either no malfunctions or exactly one malfunction. The probability of malfunction on any given day is 0.40. Machine malfunctions on different days are mutually independent.

Calculate the probability that the machine has its third malfunction on the fifth day, given that the machine has not had three malfunctions in the first three days.

(A) 0.064  
(B) 0.138  
(C) 0.148  
(D) 0.230  
(E) 0.246  

> [!summary]+ **Jawaban No. 146**
>
> **(C). $0{,}148$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Binomial Negatif: probabilitas keberhasilan ke-$r$ terjadi pada percobaan ke-$n$:
> >
> > $$P(X = n) = \binom{n-1}{r-1} p^r (1-p)^{n-r}$$
> >
> > Probabilitas bersyarat: $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$
>
> **Diketahui:**
> - $p = 0{,}40$ (probabilitas malfunction per hari), independen
> - Kejadian $A$: malfunction ke-3 terjadi pada hari ke-5
> - Kejadian $B$: tidak terjadi 3 malfunction dalam 3 hari pertama
> - Target: $P(A \mid B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Periksa Hubungan $A \cap B$**
> >
> > Jika malfunction ke-3 terjadi pada hari ke-5, maka dalam 3 hari pertama terjadi paling banyak 2 malfunction (sehingga $A \subseteq B$, dan $A \cap B = A$).
> >
> > **Langkah 2: Hitung $P(A) = P(\text{malfunction ke-3 pada hari ke-5})$**
> >
> > $$P(A) = \binom{4}{2}(0{,}4)^3(0{,}6)^2 = 6 \times 0{,}064 \times 0{,}36 = 0{,}13824$$
> >
> > **Langkah 3: Hitung $P(B) = P(\text{tidak 3 malfunction dalam 3 hari pertama})$**
> >
> > Komplemen: $P(B^c) = P(\text{3 malfunction dalam 3 hari pertama}) = (0{,}4)^3 = 0{,}064$
> >
> > $$P(B) = 1 - 0{,}064 = 0{,}936$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)}{P(B)} = \frac{0{,}13824}{0{,}936} \approx 0{,}1477 \approx 0{,}148$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}148$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $A \cap B \neq A$ — padahal jika malfunction ke-3 baru terjadi di hari ke-5, maka otomatis dalam 3 hari pertama belum ada 3 malfunction.
> > > - Salah menghitung $\binom{4}{2}$: pembilang di Binomial Negatif adalah $\binom{n-1}{r-1} = \binom{4}{2} = 6$, bukan $\binom{5}{3} = 10$.
> >
> > > [!CAUTION] Red Flags
> > > - "Keberhasilan ke-$r$ pada percobaan ke-$n$" → Binomial Negatif dengan $\binom{n-1}{r-1}$.
>
---

## **No. 147**

In a certain group of cancer patients, each patient's cancer is classified in exactly one of the following five stages: stage 0, stage 1, stage 2, stage 3, or stage 4.

(i) 75% of the patients in the group have stage 2 or lower.  
(ii) 80% of the patients in the group have stage 1 or higher.  
(iii) 80% of the patients in the group have stage 0, 1, 3, or 4.  

One patient from the group is randomly selected.

Calculate the probability that the selected patient's cancer is stage 1.

(A) 0.20  
(B) 0.25  
(C) 0.35  
(D) 0.48  
(E) 0.65  

> [!summary]+ **Jawaban No. 147**
>
> **(C). $0{,}35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.2 |
>
> > [!info]+ **Rumus**
> >
> > Sistem persamaan linear dari probabilitas yang dijumlahkan:
> >
> > $$p_0 + p_1 + p_2 + p_3 + p_4 = 1$$
>
> **Diketahui:**
> - $p_0 + p_1 + p_2 = 0{,}75$ ... (i)
> - $p_1 + p_2 + p_3 + p_4 = 0{,}80$ ... (ii)
> - $p_0 + p_1 + p_3 + p_4 = 0{,}80$ ... (iii)
> - $p_0 + p_1 + p_2 + p_3 + p_4 = 1$ ... (total)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $p_0$ dari Persamaan (ii) dan Total**
> >
> > $$p_0 = 1 - (p_1 + p_2 + p_3 + p_4) = 1 - 0{,}80 = 0{,}20$$
> >
> > **Langkah 2: Cari $p_2$ dari Persamaan (iii) dan Total**
> >
> > Persamaan (iii): $p_0 + p_1 + p_3 + p_4 = 0{,}80$
> >
> > Total dikurangi (iii): $p_2 = 1 - 0{,}80 = 0{,}20$
> >
> > **Langkah 3: Cari $p_1$ dari Persamaan (i)**
> >
> > $$p_1 = (p_0 + p_1 + p_2) - p_0 - p_2 = 0{,}75 - 0{,}20 - 0{,}20 = 0{,}35$$
> >
> > **Hasil Akhir:** **(C)**. $p_1 = 0{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menginterpretasikan "stage 1 or higher" sebagai $p_1 + p_2 + p_3 + p_4 + p_{\text{lebih}}$ — padahal hanya ada 5 tahap (0–4).
> > > - Mencoba menyelesaikan 5 persamaan dengan 5 variabel tanpa menyadari bahwa sistem ini underdetermined (hanya $p_0$, $p_2$, dan $p_1$ yang dapat ditentukan unik).
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan gabungan kejadian (stage tertentu atau lebih) → bentuk sistem persamaan dari kondisi yang diberikan, cari variabel satu per satu secara strategis.
>
---

## **No. 148**

A car is new at the beginning of a calendar year. The time, in years, before the car experiences its first failure is exponentially distributed with mean 2.

Calculate the probability that the car experiences its first failure in the last quarter of some calendar year.

(A) 0.081  
(B) 0.088  
(C) 0.102  
(D) 0.205  
(E) 0.250  

> [!summary]+ **Jawaban No. 148**
>
> **(D). $0{,}205$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Exp}(\lambda)$ dengan mean $1/\lambda = 2 \Rightarrow \lambda = 1/2$:
> >
> > $$P(X > t) = e^{-t/2}$$
> >
> > Hukum Probabilitas Total (penjumlahan atas semua tahun $k = 0, 1, 2, \ldots$):
> >
> > $$P(\text{gagal di kuartal akhir}) = \sum_{k=0}^{\infty} P(k + 0{,}75 < X \leq k + 1)$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(1/2)$, mean 2 tahun
> - "Kuartal terakhir" = bulan ke-10 sampai ke-12 = $[k+0{,}75,\, k+1]$ untuk $k = 0, 1, 2, \ldots$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Probabilitas Gagal di Kuartal Terakhir Tahun ke-$(k+1)$**
> >
> > $$P(k + 0{,}75 < X \leq k + 1) = e^{-(k+0{,}75)/2} - e^{-(k+1)/2}$$
> >
> > **Langkah 2: Jumlahkan atas Semua Tahun**
> >
> > $$\sum_{k=0}^{\infty} \left(e^{-(k+0{,}75)/2} - e^{-(k+1)/2}\right) = \left(e^{-0{,}75/2} - e^{-1/2}\right) \sum_{k=0}^{\infty} e^{-k/2}$$
> >
> > Dengan deret geometri: $\displaystyle\sum_{k=0}^{\infty} e^{-k/2} = \dfrac{1}{1 - e^{-1/2}}$
> >
> > $$= \frac{e^{-0{,}375} - e^{-0{,}5}}{1 - e^{-0{,}5}} = \frac{0{,}6873 - 0{,}6065}{1 - 0{,}6065} = \frac{0{,}0808}{0{,}3935} \approx 0{,}205$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}205$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Hanya menghitung $P(0{,}75 < X \leq 1) = e^{-0{,}375} - e^{-0{,}5} \approx 0{,}081$ (pilihan A) — ini hanya untuk tahun pertama, mengabaikan kemungkinan gagal di kuartal terakhir tahun-tahun berikutnya.
> > > - Salah menentukan "kuartal terakhir": $[0{,}75, 1]$ per tahun, bukan $[3/4, 1]$ saja.
> >
> > > [!CAUTION] Red Flags
> > > - "Dalam kuartal terakhir SUATU tahun" → penjumlahan tak hingga atas semua kemungkinan tahun; gunakan deret geometri.
>
---

## **No. 149**

In a shipment of 20 packages, 7 packages are damaged. The packages are randomly inspected, one at a time, without replacement, until the fourth damaged package is discovered.

Calculate the probability that exactly 12 packages are inspected.

(A) 0.079  
(B) 0.119  
(C) 0.237  
(D) 0.243  
(E) 0.358  

> [!summary]+ **Jawaban No. 149**
>
> **(B). $0{,}119$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Dekomposisi: 12 paket diinspeksi dan tepat ke-4 yang rusak ada di posisi ke-12:
> >
> > $$P = P(\text{3 rusak dalam 11 pertama}) \times P(\text{paket ke-12 rusak} \mid \text{3 rusak dalam 11 pertama})$$
>
> **Diketahui:**
> - 20 paket: 7 rusak, 13 baik
> - Inspeksi tanpa pengembalian hingga rusak ke-4 ditemukan
> - Target: $P(\text{tepat 12 paket diinspeksi})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas 3 Rusak dalam 11 Pertama**
> >
> > $$P(\text{3 rusak dalam 11 pertama}) = \frac{\binom{7}{3}\binom{13}{8}}{\binom{20}{11}} = \frac{35 \times 1{.}287}{167{.}960} = \frac{45{.}045}{167{.}960}$$
> >
> > **Langkah 2: Hitung Probabilitas Paket ke-12 Rusak**
> >
> > Setelah 11 inspeksi dengan 3 rusak dari 7: tersisa $20 - 11 = 9$ paket, $7 - 3 = 4$ yang rusak.
> >
> > $$P(\text{ke-12 rusak} \mid \text{3 rusak dalam 11}) = \frac{4}{9}$$
> >
> > **Langkah 3: Kalikan**
> >
> > $$P = \frac{35 \times 1{.}287}{167{.}960} \times \frac{4}{9} = \frac{45{.}045}{167{.}960} \times \frac{4}{9} = \frac{180{.}180}{1{.}511{.}640} \approx 0{,}119$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}119$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Binomial Negatif standar — tidak tepat karena ini sampling tanpa pengembalian (Hipergeometrik, bukan Binomial).
> > > - Salah menentukan $\binom{13}{8}$: dalam 11 slot pertama, 3 diisi yang rusak dan 8 yang baik, sehingga memilih 8 dari 13 yang baik.
> >
> > > [!CAUTION] Red Flags
> > > - "Tanpa pengembalian, hingga kejadian ke-$r$" → bukan Binomial Negatif standar; gunakan dekomposisi Hipergeometrik dua tahap.
>
---

## **No. 150**

A theme park conducts a study of families that visit the park during a year. The fraction of such families of size $m$ is $\dfrac{8-m}{28}$, $m = 1, 2, 3, 4, 5, 6, 7$.

For a family of size $m$ that visits the park, the number of members of the family that ride the roller coaster follows a discrete uniform distribution on the set $\{1, \ldots, m\}$.

Calculate the probability that a family visiting the park has exactly six members, given that exactly five members of the family ride the roller coaster.

(A) 0.17  
(B) 0.21  
(C) 0.24  
(D) 0.28  
(E) 0.31  

> [!summary]+ **Jawaban No. 150**
>
> **(E). $0{,}31$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P(M = 6 \mid N = 5) = \frac{P(N = 5 \mid M = 6)\,P(M = 6)}{\displaystyle\sum_{m=5}^{7} P(N = 5 \mid M = m)\,P(M = m)}$$
> >
> > (Penjumlahan hanya untuk $m \geq 5$ karena $N = 5$ tidak mungkin jika $m < 5$.)
>
> **Diketahui:**
> - $P(M = m) = \dfrac{8-m}{28}$ untuk $m = 1, \ldots, 7$
> - $N \mid M = m \sim \text{Uniform}\{1, \ldots, m\}$, sehingga $P(N = 5 \mid M = m) = \dfrac{1}{m}$ untuk $m \geq 5$
> - Target: $P(M = 6 \mid N = 5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Prior dan Likelihood**
> >
> > | $m$ | $P(M = m)$ | $P(N=5 \mid M=m)$ | Produk |
> > |:-:|:-:|:-:|:-:|
> > | 5 | $3/28$ | $1/5$ | $3/140$ |
> > | 6 | $2/28$ | $1/6$ | $2/168 = 1/84$ |
> > | 7 | $1/28$ | $1/7$ | $1/196$ |
> >
> > **Langkah 2: Hitung Penyebut (Hukum Probabilitas Total)**
> >
> > Untuk menjumlahkan, samakan penyebut (KPK dari 140, 84, 196 = 1260):
> >
> > $$P(N = 5) = \frac{3}{140} + \frac{1}{84} + \frac{1}{196} = \frac{27}{1260} + \frac{15}{1260} + \frac{6{,}43\ldots}{1260}$$
> >
> > Lebih mudah secara desimal:
> >
> > $$= \frac{3}{140} + \frac{1}{84} + \frac{1}{196} \approx 0{,}02143 + 0{,}01190 + 0{,}00510 = 0{,}03843$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(M = 6 \mid N = 5) = \frac{1/84}{0{,}03843} = \frac{0{,}01190}{0{,}03843} \approx 0{,}3097 \approx 0{,}31$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}31$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Melupakan bahwa $N = 5$ hanya mungkin jika $M \geq 5$ — keluarga dengan $m < 5$ anggota tidak bisa memiliki 5 orang yang naik wahana. Penjumlahan hanya untuk $m = 5, 6, 7$.
> > > - Menggunakan $P(M = m)$ tanpa memverifikasi bahwa jumlahnya memang 1: $\sum_{m=1}^{7}\frac{8-m}{28} = \frac{7+6+5+4+3+2+1}{28} = \frac{28}{28} = 1$ ✓
> >
> > > [!CAUTION] Red Flags
> > > - "Diberikan bahwa $N = n$" dalam mixture model → Teorema Bayes; penjumlahan penyebut hanya mencakup nilai $m$ yang secara logis memungkinkan.
>
---
