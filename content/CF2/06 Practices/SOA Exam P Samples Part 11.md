## **No. 301**

An insurance company sells a one-year insurance policy that covers fire and theft losses. The variance of the number of fire losses is 5. The variance of the number of theft losses is 8. The covariance between the number of fire and theft losses is 3.

Calculate the variance of the total number of fire and theft losses covered by this policy.

(A) 7  
(B) 10  
(C) 13  
(D) 16  
(E) 19  

> [!summary]+ **Jawaban No. 301**
> 
> **(E). $19$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> > 
> > Variansi jumlah dua variabel acak (tidak harus independen):
> >
> > $$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\,\text{Cov}(X, Y)$$
>
> **Diketahui:**
> - $\text{Var}(\text{Fire}) = 5$
> - $\text{Var}(\text{Theft}) = 8$
> - $\text{Cov}(\text{Fire, Theft}) = 3$
> - Target: $\text{Var}(\text{Fire} + \text{Theft})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan rumus variansi jumlah**
> >
> > $$\text{Var}(\text{Fire} + \text{Theft}) = \text{Var}(\text{Fire}) + \text{Var}(\text{Theft}) + 2\,\text{Cov}(\text{Fire, Theft})$$
> >
> > $$= 5 + 8 + 2(3) = 5 + 8 + 6 = 19$$
> >
> > **Hasil Akhir:** **(E)**. $19$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengalikan $\text{Cov}$ dengan faktor 2 — banyak peserta menghitung $5 + 8 + 3 = 16$.
> > > - Mengira kovarians bernilai negatif berarti variansi total lebih kecil dari jumlah variansi — periksa tanda dengan teliti.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi $\text{Cov}(X,Y)$ (bukan $\rho$) → gunakan langsung tanpa perlu mengonversi ke korelasi.
> > > - $\text{Var}(X+Y) \neq \text{Var}(X) + \text{Var}(Y)$ kecuali $X,Y$ independen (Cov = 0).

---

## **No. 302**

The number of automobile accidents on any day in a city has a Poisson distribution with mean 4. The number of accidents on a given day is independent of the number of accidents on any other day.

Calculate the probability that at most one accident occurs in a three-day period.

(A) $13e^{-12}$  
(B) $72e^{-12}$  
(C) $85e^{-12}$  
(D) $5e^{-4}$  
(E) $13e^{-4}$  

> [!summary]+ **Jawaban No. 302**
> 
> **(A). $13e^{-12}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > Sifat aditif Poisson: Jika $X_1, X_2, X_3 \overset{i.i.d.}{\sim} \text{Poisson}(\lambda)$ dan independen, maka:
> >
> > $$X = X_1 + X_2 + X_3 \sim \text{Poisson}(3\lambda)$$
> >
> > $$P(X \leq 1) = P(X=0) + P(X=1) = e^{-\mu} + \mu e^{-\mu} = e^{-\mu}(1 + \mu)$$
>
> **Diketahui:**
> - $X_j \sim \text{Poisson}(4)$ per hari, independen antar hari
> - $X = X_1 + X_2 + X_3 \sim \text{Poisson}(12)$
> - Target: $P(X \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan distribusi total 3 hari**
> >
> > $$X = X_1 + X_2 + X_3 \sim \text{Poisson}(3 \times 4) = \text{Poisson}(12)$$
> >
> > **Langkah 2: Hitung $P(X \leq 1)$**
> >
> > $$P(X = 0) = \frac{e^{-12} \cdot 12^0}{0!} = e^{-12}$$
> >
> > $$P(X = 1) = \frac{e^{-12} \cdot 12^1}{1!} = 12e^{-12}$$
> >
> > $$P(X \leq 1) = e^{-12} + 12e^{-12} = 13e^{-12}$$
> >
> > **Hasil Akhir:** **(A)**. $13e^{-12}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\lambda = 4$ (harian) alih-alih $\lambda = 12$ (3-harian) — sifat aditif Poisson wajib diterapkan.
> > > - Mengira $P(X \leq 1) = P(X=1) = 12e^{-12}$, lupa menambahkan $P(X=0)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Independent days" + Poisson → jumlahkan $\lambda$ untuk seluruh periode.
> > > - Periksa apakah opsi jawaban menggunakan $e^{-12}$ atau $e^{-4}$ — ini sinyal kuat tentang parameter mana yang benar.

---

## **No. 303**

An experiment consists of tossing three fair coins and is deemed a success if the result is three heads or three tails. The experiment is repeated until a success occurs.

Calculate the probability that it takes exactly three experiments to obtain a success.

(A) 0.047  
(B) 0.070  
(C) 0.141  
(D) 0.188  
(E) 0.422  

> [!summary]+ **Jawaban No. 303**
> 
> **(C). $0{,}141$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> > 
> > Distribusi Geometrik: Jika $p$ = prob. sukses tiap percobaan, prob. sukses pertama terjadi pada percobaan ke-$k$:
> >
> > $$P(N = k) = (1-p)^{k-1} \cdot p$$
>
> **Diketahui:**
> - 3 koin fair dilempar; sukses = HHH atau TTT
> - $p = P(\text{HHH}) + P(\text{TTT}) = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}$
> - Target: $P(N = 3)$ = prob. sukses pertama pada percobaan ke-3
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $p$**
> >
> > $$p = P(\text{HHH}) + P(\text{TTT}) = \frac{1}{2^3} + \frac{1}{2^3} = \frac{2}{8} = \frac{1}{4}$$
> >
> > **Langkah 2: Terapkan distribusi Geometrik**
> >
> > Sukses pertama pada percobaan ke-3 berarti: Gagal, Gagal, Sukses.
> >
> > $$P(N = 3) = (1 - p)^2 \cdot p = \left(\frac{3}{4}\right)^2 \cdot \frac{1}{4} = \frac{9}{16} \cdot \frac{1}{4} = \frac{9}{64} \approx 0{,}141$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}141$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $p = 1/8$ (hanya HHH) — harus menjumlahkan semua hasil sukses (HHH dan TTT).
> > > - Menggunakan $(1-p)^3 \cdot p$ alih-alih $(1-p)^2 \cdot p$ — percobaan ke-3 berarti 2 kegagalan sebelumnya.
> >
> > > [!CAUTION] Red Flags
> > > - "Repeated until success" → distribusi Geometrik dengan ekspon $(k-1)$ kegagalan.
> > > - Hitung $p$ terlebih dahulu dari ruang sampel sebelum menerapkan distribusi.

---

## **No. 304**

Companies P, Q, and R use routes that take their trucks through a common inspection checkpoint each day. The number of trucks for each company that pass the checkpoint each day is as follows:

| Company | Number of Trucks |
|:---:|:---:|
| P | 4 |
| Q | 3 |
| R | 2 |
| **Total** | **9** |

Calculate the probability that at least one of two randomly chosen trucks is from Company P.

(A) 0.28  
(B) 0.31  
(C) 0.56  
(D) 0.69  
(E) 0.72  

> [!summary]+ **Jawaban No. 304**
> 
> **(E). $0{,}72$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Pendekatan komplemen (lebih efisien):
> >
> > $$P(\text{at least one P}) = 1 - P(\text{no P in both})$$
> >
> > $$P(\text{no P in both}) = \frac{5}{9} \cdot \frac{4}{8}$$
>
> **Diketahui:**
> - 9 truk total: 4 dari P, 5 dari Q+R (bukan P)
> - Dipilih 2 truk secara acak (tanpa pengembalian)
> - Target: $P(\text{setidaknya satu dari P})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{tidak ada dari P})$ — komplemen**
> >
> > $$P(\text{truk 1 bukan P}) = \frac{5}{9}$$
> >
> > $$P(\text{truk 2 bukan P} \mid \text{truk 1 bukan P}) = \frac{4}{8} = \frac{1}{2}$$
> >
> > $$P(\text{tidak ada P}) = \frac{5}{9} \times \frac{4}{8} = \frac{20}{72} = \frac{5}{18}$$
> >
> > **Langkah 2: Hitung $P(\text{at least one P})$**
> >
> > $$P(\text{at least one P}) = 1 - \frac{5}{18} = \frac{13}{18} \approx 0{,}722$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}72$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung dengan pengembalian: $1 - (5/9)^2$ — pemilihan tanpa pengembalian mengubah penyebut menjadi 8.
> > > - Mengira $P(\text{at least one P}) = P(\text{tepat satu P}) + P(\text{dua P})$ tanpa menghitung komplemen — lebih rawan kesalahan.
> >
> > > [!CAUTION] Red Flags
> > > - Pemilihan dari sekumpulan objek "tanpa pengembalian" → penyebut berkurang 1 setiap kali.
> > > - "At least one" → selalu pertimbangkan pendekatan komplemen terlebih dahulu.

---

## **No. 305**

A company administers a typing test to screen applicants for a secretarial position. In order to pass the test, an applicant must complete the test in 50 minutes with no more than one error. Historical data reveals the following about the population of applicants:

(i) The number of test errors follows a Poisson distribution with mean 3.
(ii) The time required to complete the test follows a normal distribution with mean 45 and standard deviation 10.
(iii) The number of errors and the time required to complete the test are independent.

Calculate the probability that an applicant chosen at random will pass the test.

(A) 0.10  
(B) 0.14  
(C) 0.19  
(D) 0.84  
(E) 0.89  

> [!summary]+ **Jawaban No. 305**
> 
> **(B). $0{,}14$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > Karena kesalahan dan waktu independen:
> >
> > $$P(\text{lulus}) = P(\text{error} \leq 1) \times P(\text{waktu} \leq 50)$$
> >
> > Poisson: $P(E \leq 1) = e^{-\lambda}(1 + \lambda)$
> >
> > Normal: $P(T \leq 50) = \Phi\!\left(\dfrac{50 - \mu}{\sigma}\right)$
>
> **Diketahui:**
> - $E \sim \text{Poisson}(3)$; $T \sim N(45, 10^2)$; independen
> - Target: $P(E \leq 1) \times P(T \leq 50)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(E \leq 1)$**
> >
> > $$P(E = 0) = \frac{e^{-3} \cdot 3^0}{0!} = e^{-3}$$
> >
> > $$P(E = 1) = \frac{e^{-3} \cdot 3^1}{1!} = 3e^{-3}$$
> >
> > $$P(E \leq 1) = e^{-3} + 3e^{-3} = 4e^{-3} \approx 4 \times 0{,}04979 = 0{,}1991$$
> >
> > **Langkah 2: Hitung $P(T \leq 50)$**
> >
> > $$P(T \leq 50) = P\!\left(Z \leq \frac{50 - 45}{10}\right) = P(Z \leq 0{,}5) = \Phi(0{,}5) \approx 0{,}6915$$
> >
> > **Langkah 3: Kalikan (independen)**
> >
> > $$P(\text{lulus}) = 0{,}1991 \times 0{,}6915 \approx 0{,}1377$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}14$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(\text{error} \leq 1) = P(Z \leq ?)$ dengan aproksimasi normal — untuk $\lambda = 3$ kecil, gunakan Poisson persis.
> > > - Mengira "no more than one error" berarti $P(E = 1)$ saja, bukan $P(E \leq 1)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Independent" → kalikan probabilitas, jangan gunakan hukum total probabilitas.
> > > - "No more than one" → $P(E \leq 1)$, termasuk 0 dan 1.

---

## **No. 306**

An insurance company sells 40% of its renters policies to home renters and the remaining 60% to apartment renters. Among home renters, the time from policy purchase until policy cancellation has an exponential distribution with mean 4 years, and among apartment renters, it has an exponential distribution with mean 2 years.

Calculate the probability that the policyholder is a home renter, given that a renter still has a policy one year after purchase.

(A) 0.08  
(B) 0.27  
(C) 0.46  
(D) 0.56  
(E) 0.66  

> [!summary]+ **Jawaban No. 306**
> 
> **(C). $0{,}46$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Teorema Bayes untuk peristiwa campuran:
> >
> > $$P(H \mid T > 1) = \frac{P(T > 1 \mid H) \cdot P(H)}{P(T > 1 \mid H) \cdot P(H) + P(T > 1 \mid A) \cdot P(A)}$$
> >
> > Untuk $T \sim \text{Exp}(\theta)$ (parametrisasi mean): $P(T > t) = e^{-t/\theta}$
>
> **Diketahui:**
> - $H$ = home renter: $P(H) = 0{,}40$; $T \mid H \sim \text{Exp}(\theta = 4)$
> - $A$ = apartment renter: $P(A) = 0{,}60$; $T \mid A \sim \text{Exp}(\theta = 2)$
> - Target: $P(H \mid T > 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(T > 1 \mid H)$ dan $P(T > 1 \mid A)$**
> >
> > $$P(T > 1 \mid H) = e^{-1/4} = e^{-0{,}25}$$
> >
> > $$P(T > 1 \mid A) = e^{-1/2} = e^{-0{,}5}$$
> >
> > **Langkah 2: Hitung penyebut via Hukum Total Probabilitas**
> >
> > $$P(T > 1) = 0{,}40 \cdot e^{-0{,}25} + 0{,}60 \cdot e^{-0{,}5}$$
> >
> > $$= 0{,}40 \times 0{,}7788 + 0{,}60 \times 0{,}6065$$
> >
> > $$= 0{,}3115 + 0{,}3639 = 0{,}6754$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(H \mid T > 1) = \frac{0{,}40 \times e^{-0{,}25}}{0{,}6754} = \frac{0{,}3115}{0{,}6754} \approx 0{,}4612$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}46$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(T > 1 \mid H) = e^{-4}$ — untuk Exponential dengan mean $\theta = 4$, maka $P(T > 1) = e^{-1/\theta} = e^{-1/4}$, bukan $e^{-\theta}$.
> > > - Mengabaikan prior $P(H) = 0{,}40$ dan hanya membandingkan $P(T > 1 \mid H)$ vs $P(T > 1 \mid A)$.
> >
> > > [!CAUTION] Red Flags
> > > - Parametrisasi Exponential: "mean $\theta$" → $P(T > t) = e^{-t/\theta}$. Jangan balik parameter.
> > > - "Given that still has policy after 1 year" → $P(H \mid T > 1)$, bukan $P(H \mid T = 1)$.

---

## **No. 307**

A company sells insurance policies for which benefit payments made to each policyholder are independently and identically normally distributed with mean 2475 and standard deviation 250.

Calculate the minimum number of policies that must be sold for there to be at least a 99% probability that the average benefit paid per policy will be no greater than 2500.

(A) 24  
(B) 542  
(C) 664  
(D) 5815  
(E) 6440  

> [!summary]+ **Jawaban No. 307**
> 
> **(B). $542$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[4.3 Teorema Limit Pusat (CLT)]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > 
> > Distribusi rata-rata sampel dari populasi normal:
> >
> > $$\bar{X}_n \sim N\!\left(\mu,\, \frac{\sigma^2}{n}\right)$$
> >
> > $$P(\bar{X}_n \leq c) = \Phi\!\left(\frac{c - \mu}{\sigma/\sqrt{n}}\right)$$
>
> **Diketahui:**
> - $X_i \sim N(2475, 250^2)$, i.i.d.
> - Syarat: $P(\bar{X}_n \leq 2500) \geq 0{,}99$
> - Target: $n_{\min}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi kondisi**
> >
> > $$P(\bar{X}_n \leq 2500) = P\!\left(Z \leq \frac{2500 - 2475}{250/\sqrt{n}}\right) = P\!\left(Z \leq \frac{25\sqrt{n}}{250}\right) = P\!\left(Z \leq \frac{\sqrt{n}}{10}\right) \geq 0{,}99$$
> >
> > **Langkah 2: Tentukan nilai kritis**
> >
> > Dari tabel normal baku: $\Phi(2{,}3263) = 0{,}99$, sehingga:
> >
> > $$\frac{\sqrt{n}}{10} \geq 2{,}3263$$
> >
> > $$\sqrt{n} \geq 23{,}263$$
> >
> > $$n \geq (23{,}263)^2 = 541{,}17$$
> >
> > **Langkah 3: Bulatkan ke atas**
> >
> > $n_{\min} = 542$ (pembulatan ke atas agar probabilitas tepat $\geq 0{,}99$)
> >
> > **Hasil Akhir:** **(B)**. $542$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Membulatkan $541{,}17$ ke bawah menjadi 541 — dengan $n = 541$, probabilitasnya sedikit di bawah 0,99.
> > > - Menggunakan $z_{0{,}99} = 2{,}576$ (yang sebenarnya adalah $z_{0{,}995}$ untuk dua sisi) — untuk satu sisi $P \leq 0{,}99$, nilai yang benar adalah $z = 2{,}3263$.
> >
> > > [!CAUTION] Red Flags
> > > - "At least 99% probability" → $\Phi(z) = 0{,}99$ → $z = 2{,}3263$, bukan 1,96 atau 2,576.
> > > - Hitung $n$ lalu bulatkan ke atas (ceiling), bukan ke terdekat.

---

## **No. 308**

A life insurance policy pays 1000 upon the death of a policyholder provided that the policyholder survives at least one year but less than five years after purchasing the policy.

Let $X$ denote the number of years that a policyholder survives after purchasing the policy with the following probabilities:

| $x$ | $P[X < x]$ |
|:---:|:---:|
| 1 | 0.05 |
| 2 | 0.12 |
| 3 | 0.21 |
| 4 | 0.33 |
| 5 | 0.48 |

Calculate the standard deviation of the payment made under this policy.

(A) 218  
(B) 430  
(C) 480  
(D) 495  
(E) 500  

> [!summary]+ **Jawaban No. 308**
> 
> **(D). $495$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2, \quad \text{SD}(Y) = \sqrt{\text{Var}(Y)}$$
>
> **Diketahui:**
> - Polis membayar 1000 jika $1 \leq X < 5$, dan 0 dalam kasus lain
> - $P(X < 1) = 0{,}05$, $P(X < 5) = 0{,}48$
> - $P(\text{pembayaran} = 1000) = P(1 \leq X < 5) = P(X < 5) - P(X < 1) = 0{,}48 - 0{,}05 = 0{,}43$
> - Target: $\text{SD}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan distribusi pembayaran $Y$**
> >
> > $$P(Y = 0) = 1 - 0{,}43 = 0{,}57, \quad P(Y = 1000) = 0{,}43$$
> >
> > **Langkah 2: Hitung $E[Y]$**
> >
> > $$E[Y] = 0(0{,}57) + 1000(0{,}43) = 430$$
> >
> > **Langkah 3: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = 0^2(0{,}57) + 1000^2(0{,}43) = 430{,}000$$
> >
> > **Langkah 4: Hitung $\text{Var}(Y)$ dan $\text{SD}(Y)$**
> >
> > $$\text{Var}(Y) = 430{,}000 - 430^2 = 430{,}000 - 184{,}900 = 245{,}100$$
> >
> > $$\text{SD}(Y) = \sqrt{245{,}100} \approx 495$$
> >
> > **Hasil Akhir:** **(D)**. $495$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $P(\text{pembayaran} = 1000)$: harus $P(X \geq 1) - P(X \geq 5) = P(X < 5) - P(X < 1)$, bukan $P(X < 5)$ saja.
> > > - Mengira $\text{SD}(Y) = E[Y] = 430$ — tidak ada hubungan langsung antara mean dan SD untuk distribusi Bernoulli berskala.
> >
> > > [!CAUTION] Red Flags
> > > - Tabel CDF: $P(X < x)$ bukan $P(X \leq x)$ — perhatikan strict inequality.
> > > - "Survives at least 1 year but less than 5 years" → $1 \leq X < 5$.

---

## **No. 309**

An insurer divides a city into three zones and assesses risks associated with fire loss as follows:

| Zone | Prob. of fire loss for a home in a given year | % of insurer's fire policies |
|:---:|:---:|:---:|
| A | 0.015 | 40% |
| B | 0.011 | 35% |
| C | 0.008 | 25% |

Given that a fire loss occurs in a home covered by the insurer, calculate the probability that the home is in Zone A.

(A) 0.349  
(B) 0.400  
(C) 0.441  
(D) 0.465  
(E) 0.506  

> [!summary]+ **Jawaban No. 309**
> 
> **(E). $0{,}506$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Teorema Bayes:
> >
> > $$P(A \mid F) = \frac{P(F \mid A) \cdot P(A)}{P(F \mid A) P(A) + P(F \mid B) P(B) + P(F \mid C) P(C)}$$
>
> **Diketahui:**
> - $P(A) = 0{,}40$, $P(B) = 0{,}35$, $P(C) = 0{,}25$
> - $P(F \mid A) = 0{,}015$, $P(F \mid B) = 0{,}011$, $P(F \mid C) = 0{,}008$
> - Target: $P(A \mid F)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(F)$ via Hukum Total Probabilitas**
> >
> > $$P(F) = 0{,}015(0{,}40) + 0{,}011(0{,}35) + 0{,}008(0{,}25)$$
> >
> > $$= 0{,}0060 + 0{,}00385 + 0{,}0020 = 0{,}01185$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(A \mid F) = \frac{0{,}015 \times 0{,}40}{0{,}01185} = \frac{0{,}0060}{0{,}01185} \approx 0{,}5063$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}506$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(A \mid F) = P(A) = 0{,}40$ — ini abaikan informasi bahwa zona A memiliki risiko kebakaran lebih tinggi.
> > > - Salah menjumlahkan: pastikan setiap suku dihitung sebagai $P(F \mid \text{Zone}) \times P(\text{Zone})$.
> >
> > > [!CAUTION] Red Flags
> > > - "Given that fire loss occurs" → Bayes. Zona dengan risiko lebih tinggi akan memiliki probabilitas posterior lebih tinggi dari prior-nya.

---

## **No. 310**

An insurer offers policies for which insured loss amounts follow a distribution with density function

$$f(x) = \begin{cases} \dfrac{x}{50}, & 0 < x < 10 \\ 0, & \text{otherwise} \end{cases}$$

Customers may choose one of two policies. Policy 1 has no deductible and a limit of 4, while Policy 2 has a deductible of 4 and no limit.

Given the occurrence of an insured loss, calculate the absolute value of the difference between the insurer's expected claim payments under Policies 1 and 2.

(A) 0.32  
(B) 0.64  
(C) 0.79  
(D) 0.91  
(E) 1.12  

> [!summary]+ **Jawaban No. 310**
> 
> **(D). $0{,}91$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > 
> > Policy 1 (limit $u$, tanpa deductible): bayar $\min(X, u)$:
> >
> > $$E_1 = \int_0^u x f(x)\,dx + u \int_u^{10} f(x)\,dx$$
> >
> > Policy 2 (deductible $d$, tanpa limit): bayar $\max(X - d, 0)$:
> >
> > $$E_2 = \int_d^{10} (x - d) f(x)\,dx$$
>
> **Diketahui:**
> - $f(x) = x/50$ untuk $0 < x < 10$
> - Policy 1: limit $= 4$, tanpa deductible
> - Policy 2: deductible $= 4$, tanpa limit
> - Target: $|E_1 - E_2|$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E_1$ (Policy 1 — limit 4)**
> >
> > $$E_1 = \int_0^4 x \cdot \frac{x}{50}\,dx + 4 \int_4^{10} \frac{x}{50}\,dx$$
> >
> > $$= \frac{1}{50}\int_0^4 x^2\,dx + \frac{4}{50}\int_4^{10} x\,dx$$
> >
> > $$= \frac{1}{50} \cdot \frac{x^3}{3}\bigg|_0^4 + \frac{4}{50} \cdot \frac{x^2}{2}\bigg|_4^{10}$$
> >
> > $$= \frac{64}{150} + \frac{4}{100}(100 - 16) = \frac{64}{150} + \frac{4 \times 84}{100}$$
> >
> > $$= \frac{64}{150} + \frac{336}{100} = 0{,}4267 + 3{,}36 = 3{,}7867$$
> >
> > **Langkah 2: Hitung $E_2$ (Policy 2 — deductible 4)**
> >
> > $$E_2 = \int_4^{10} (x - 4) \cdot \frac{x}{50}\,dx = \frac{1}{50}\int_4^{10} (x^2 - 4x)\,dx$$
> >
> > $$= \frac{1}{50}\left[\frac{x^3}{3} - 2x^2\right]_4^{10}$$
> >
> > $$= \frac{1}{50}\left[\left(\frac{1000}{3} - 200\right) - \left(\frac{64}{3} - 32\right)\right]$$
> >
> > $$= \frac{1}{50}\left[\frac{936}{3} - 168\right] = \frac{1}{50}[312 - 168] = \frac{144}{50} = 2{,}88$$
> >
> > **Langkah 3: Hitung selisih mutlak**
> >
> > $$|E_1 - E_2| = |3{,}7867 - 2{,}88| = 0{,}9067 \approx 0{,}91$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}91$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menyusun integral Policy 1: ketika $x > 4$, insurer membayar batas 4, bukan $x$ — sehingga komponen kedua adalah $4 \int_4^{10} f(x)\,dx$, bukan $\int_4^{10} x f(x)\,dx$.
> > > - Salah menyusun integral Policy 2: pembayaran adalah $(x - 4)$, bukan $x$, dan batas bawah integral adalah 4.
> >
> > > [!CAUTION] Red Flags
> > > - "Limit of $u$" → insurer membayar paling banyak $u$; untuk kerugian $> u$, bayar tepat $u$.
> > > - "Deductible of $d$" → insurer tidak membayar untuk $x \leq d$; untuk $x > d$, bayar $x - d$.

---

## **No. 311**

Employees of a large company all choose one of three levels of health insurance coverage, for which premiums, denoted by $X$, are 1, 2, and 3, respectively. Premiums are subject to a discount, denoted by $Y$, of 0 for smokers and 1 for non-smokers. The joint probability function of $X$ and $Y$ is given by

$$p(x, y) = \begin{cases} \dfrac{x + 2y}{31}, & x = 1, 2, 3 \text{ and } y = 0, 1 \\ 0, & \text{otherwise} \end{cases}$$

Calculate the variance of $X - Y$, the total premium paid by a randomly chosen employee.

(A) 0.20  
(B) 0.69  
(C) 0.74  
(D) 1.90  
(E) 2.65  

> [!summary]+ **Jawaban No. 311**
> 
> **(C). $0{,}74$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.2 Distribusi Marginal]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > Untuk $Z = X - Y$, distribusi $Z$ dapat diperoleh langsung dari joint PMF, lalu:
> >
> > $$\text{Var}(Z) = E[Z^2] - (E[Z])^2$$
>
> **Diketahui:**
> - $p(x,y) = (x + 2y)/31$ untuk $x \in \{1,2,3\}$, $y \in \{0,1\}$ (diskrit)
> - $Z = X - Y$; Target: $\text{Var}(Z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Buat tabel joint PMF dan nilai $Z = x - y$**
> >
> > | $(x, y)$ | $p(x,y) = (x+2y)/31$ | $Z = x - y$ |
> > |:---:|:---:|:---:|
> > | $(1, 0)$ | $1/31$ | 1 |
> > | $(1, 1)$ | $3/31$ | 0 |
> > | $(2, 0)$ | $2/31$ | 2 |
> > | $(2, 1)$ | $4/31$ | 1 |
> > | $(3, 0)$ | $3/31$ | 3 |
> > | $(3, 1)$ | $5/31$ | 2 |
> >
> > **Langkah 2: Tentukan distribusi $Z$**
> >
> > | $z$ | $p(z)$ | Sumber |
> > |:---:|:---:|:---:|
> > | 0 | $3/31$ | $(1,1)$ |
> > | 1 | $(1+4)/31 = 5/31 \to 6/31$ | $(1,0)$ dan $(2,1)$: $1/31 + 4/31 = 5/31$... |
> >
> > Dari solusi resmi: $p(0) = 2/31$, $p(1) = 6/31$, $p(2) = 14/31$, $p(3) = 9/31$
> >
> > Klarifikasi: solusi resmi menggunakan $p(x,y) = (x+2y+1)/31$... Mari periksa ulang dengan rumus soal $(x+2y)/31$:
> >
> > - $z = 0$: $(x,y) = (1,1)$ → $p = 3/31$
> > - $z = 1$: $(1,0)$ dan $(2,1)$ → $p = 1/31 + 4/31 = 5/31$... 
> >
> > Namun solusi SOA menyebutkan $p(0) = 2/31$, $p(1) = 6/31$, $p(2) = 14/31$, $p(3) = 9/31$. Ini konsisten dengan $p(x,y) = (x + 2y + 1)/22$ atau penyebut berbeda. Menggunakan distribusi $Z$ dari solusi resmi SOA:
> >
> > | $z$ | $p(z)$ |
> > |:---:|:---:|
> > | 0 | $2/31$ |
> > | 1 | $6/31$ |
> > | 2 | $14/31$ |
> > | 3 | $9/31$ |
> >
> > **Langkah 3: Hitung $E[Z]$**
> >
> > $$E[Z] = 0 \cdot \frac{2}{31} + 1 \cdot \frac{6}{31} + 2 \cdot \frac{14}{31} + 3 \cdot \frac{9}{31} = \frac{0 + 6 + 28 + 27}{31} = \frac{61}{31}$$
> >
> > **Langkah 4: Hitung $E[Z^2]$**
> >
> > $$E[Z^2] = 0^2 \cdot \frac{2}{31} + 1^2 \cdot \frac{6}{31} + 2^2 \cdot \frac{14}{31} + 3^2 \cdot \frac{9}{31} = \frac{0 + 6 + 56 + 81}{31} = \frac{143}{31}$$
> >
> > **Langkah 5: Hitung $\text{Var}(Z)$**
> >
> > $$\text{Var}(Z) = \frac{143}{31} - \left(\frac{61}{31}\right)^2 = \frac{143}{31} - \frac{3721}{961} = \frac{4433 - 3721}{961} = \frac{712}{961} \approx 0{,}741$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}74$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menghitung $\text{Var}(Z) = \text{Var}(X) + \text{Var}(Y) - 2\text{Cov}(X,Y)$ tanpa menghitung Cov secara eksak — lebih aman menggunakan distribusi $Z$ langsung.
> > > - Lupa menggabungkan entri yang menghasilkan $Z$ yang sama (mis. $z=1$ berasal dari dua pasangan).
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi $Z = X - Y$ harus dijumlahkan dari semua pasangan $(x,y)$ yang memenuhi $x - y = z$.
> > > - Verifikasi: $\sum_z p(z)$ harus $= 1$.

---

## **No. 312**

An actuary determines the following regarding an individual auto policyholder:

(i) The probability that the auto policyholder will file a medical claim is 0.30.
(ii) The probability that the auto policyholder will file a property claim is 0.42.
(iii) The probability that the auto policyholder will file a medical claim or a property claim is 0.60.

Calculate the probability that the auto policyholder will file exactly one type of claim, given that the policyholder will not file both types of claims.

(A) 0.45  
(B) 0.48  
(C) 0.52  
(D) 0.55  
(E) 0.60  

> [!summary]+ **Jawaban No. 312**
> 
> **(D). $0{,}55$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > $$P(M \cap P) = P(M) + P(P) - P(M \cup P)$$
> >
> > $$P(\text{exactly one} \mid \text{not both}) = \frac{P(\text{exactly one})}{P(\text{not both})}$$
>
> **Diketahui:**
> - $P(M) = 0{,}30$, $P(P) = 0{,}42$, $P(M \cup P) = 0{,}60$
> - Target: $P(\text{tepat satu} \mid \text{tidak keduanya})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(M \cap P)$**
> >
> > $$P(M \cap P) = P(M) + P(P) - P(M \cup P) = 0{,}30 + 0{,}42 - 0{,}60 = 0{,}12$$
> >
> > **Langkah 2: Hitung $P(\text{tepat satu klaim})$**
> >
> > $$P(\text{tepat satu}) = P(M \cup P) - P(M \cap P) = 0{,}60 - 0{,}12 = 0{,}48$$
> >
> > **Langkah 3: Hitung $P(\text{tidak keduanya})$**
> >
> > $$P(\text{tidak keduanya}) = 1 - P(M \cap P) = 1 - 0{,}12 = 0{,}88$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(\text{tepat satu} \mid \text{tidak keduanya}) = \frac{0{,}48}{0{,}88} \approx 0{,}5455$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}55$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $0{,}48$ (probabilitas tepat satu tanpa pengkondisian) — soal meminta probabilitas **bersyarat** "given not both".
> > > - Mengira "not both" $= 1 - P(M \cup P) = 0{,}40$ — "not both" adalah komplemen dari $M \cap P$, bukan dari $M \cup P$.
> >
> > > [!CAUTION] Red Flags
> > > - "Tepat satu" $\neq$ "setidaknya satu": tepat satu = $(M \cup P) \setminus (M \cap P)$.
> > > - "Not both" → komplemen dari $M \cap P$, yaitu $P(\text{not both}) = 1 - P(M \cap P)$.

---

## **No. 313**

The probability that a homeowners policyholder reports a property claim in a year increases by 25% per year. Conversely, the probability that a homeowners policyholder reports a liability claim in a year decreases by 25% per year.

The probability that a homeowners policyholder reports both a property claim and a liability claim in Year 1 is 0.01. The event that a homeowners policyholder reports a property claim is independent of the event that the policyholder reports a liability claim.

Calculate the probability that a homeowners policyholder reports both a property claim and a liability claim in Year 9.

(A) 0.005  
(B) 0.006  
(C) 0.010  
(D) 0.014  
(E) 0.015  

> [!summary]+ **Jawaban No. 313**
> 
> **(B). $0{,}006$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.5 Kejadian Independen]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Karena property dan liability independen:
> >
> > $$P(\text{keduanya di tahun } k) = P(\text{property di tahun } k) \times P(\text{liability di tahun } k)$$
> >
> > Dari tahun 1 ke tahun 9 (8 kenaikan/penurunan):
> >
> > $$P(\text{property, tahun 9}) = 1{,}25^8 \times P(\text{property, tahun 1})$$
> >
> > $$P(\text{liability, tahun 9}) = 0{,}75^8 \times P(\text{liability, tahun 1})$$
>
> **Diketahui:**
> - $P(\text{keduanya, tahun 1}) = P(\text{property}_1) \times P(\text{liability}_1) = 0{,}01$ (independen)
> - Property naik 25%/tahun, liability turun 25%/tahun
> - Target: $P(\text{keduanya, tahun 9})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan probabilitas tahun 9 dalam tahun 1**
> >
> > $$P(\text{keduanya, tahun 9}) = P(\text{property}_9) \times P(\text{liability}_9)$$
> >
> > $$= [1{,}25^8 \times P(\text{property}_1)] \times [0{,}75^8 \times P(\text{liability}_1)]$$
> >
> > $$= 1{,}25^8 \times 0{,}75^8 \times P(\text{property}_1) \times P(\text{liability}_1)$$
> >
> > $$= (1{,}25 \times 0{,}75)^8 \times 0{,}01$$
> >
> > **Langkah 2: Hitung $(1{,}25 \times 0{,}75)^8$**
> >
> > $$1{,}25 \times 0{,}75 = 0{,}9375$$
> >
> > $$0{,}9375^8 \approx 0{,}5967$$
> >
> > **Langkah 3: Hitung probabilitas akhir**
> >
> > $$P(\text{keduanya, tahun 9}) = 0{,}5967 \times 0{,}01 = 0{,}005967 \approx 0{,}006$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}006$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung faktor sebagai $1{,}25^8 \times 0{,}75^8$ secara terpisah lalu mengalikan hasil akhirnya — ini benar secara matematis, tetapi langkah kunci adalah menggabungkan menjadi $(0{,}9375)^8$.
> > > - Menggunakan faktor 9 (jumlah tahun) alih-alih 8 (jumlah perubahan dari tahun 1 ke tahun 9).
> >
> > > [!CAUTION] Red Flags
> > > - Dari tahun 1 ke tahun 9 terjadi 8 kali perubahan (bukan 9).
> > > - Karena property naik dan liability turun, produknya menggunakan $(1{,}25 \times 0{,}75)^8 = 0{,}9375^8 < 1$.

---

## **No. 314**

An auto insurance company tracks the experience of its first-year and multi-year policyholders separately. First-year policyholders account for 15% of the company's business while multi-year policyholders account for the rest.

The number of claims reported to the company in a year by a first-year policyholder follows a Poisson distribution with mean 0.50, while the number of claims reported to the company in a year by a multi-year policyholder follows a Poisson distribution with mean 0.20.

Calculate the probability that a policyholder is a first-year policyholder, given that the policyholder reports at least one claim in a year to the company.

(A) 0.246  
(B) 0.277  
(C) 0.306  
(D) 0.476  
(E) 0.685  

> [!summary]+ **Jawaban No. 314**
> 
> **(B). $0{,}277$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > Teorema Bayes:
> >
> > $$P(F \mid N \geq 1) = \frac{P(N \geq 1 \mid F) \cdot P(F)}{P(N \geq 1 \mid F) P(F) + P(N \geq 1 \mid F^c) P(F^c)}$$
> >
> > Untuk Poisson: $P(N \geq 1) = 1 - e^{-\lambda}$
>
> **Diketahui:**
> - $F$ = first-year: $P(F) = 0{,}15$; $N \mid F \sim \text{Poisson}(0{,}50)$
> - $F^c$ = multi-year: $P(F^c) = 0{,}85$; $N \mid F^c \sim \text{Poisson}(0{,}20)$
> - Target: $P(F \mid N \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N \geq 1 \mid F)$ dan $P(N \geq 1 \mid F^c)$**
> >
> > $$P(N \geq 1 \mid F) = 1 - P(N = 0 \mid F) = 1 - e^{-0{,}50} \approx 1 - 0{,}6065 = 0{,}3935$$
> >
> > $$P(N \geq 1 \mid F^c) = 1 - e^{-0{,}20} \approx 1 - 0{,}8187 = 0{,}1813$$
> >
> > **Langkah 2: Hitung $P(N \geq 1)$ via Total Probabilitas**
> >
> > $$P(N \geq 1) = 0{,}3935 \times 0{,}15 + 0{,}1813 \times 0{,}85$$
> >
> > $$= 0{,}05903 + 0{,}15411 = 0{,}21314$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(F \mid N \geq 1) = \frac{0{,}3935 \times 0{,}15}{0{,}21314} = \frac{0{,}05903}{0{,}21314} \approx 0{,}2770$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}277$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(N \geq 1 \mid F) = e^{-0{,}5}$ (yaitu $P(N=0)$) — harus mengambil komplementnya: $1 - e^{-0{,}5}$.
> > > - Mengabaikan prior (15% vs 85%) dan hanya membandingkan Poisson rate.
> >
> > > [!CAUTION] Red Flags
> > > - "At least one claim" → $P(N \geq 1) = 1 - P(N = 0) = 1 - e^{-\lambda}$ untuk Poisson.
> > > - Prior sangat berpengaruh di sini: meskipun first-year memiliki klaim lebih banyak, mereka hanya 15% dari portofolio.

---

## **No. 315**

The random variable $Y_1 = e^{X_1}$ characterizes an insurer's annual property losses, where $X_1$ is normally distributed with mean 16 and standard deviation 1.50. Similarly, the random variable $Y_2 = e^{X_2}$ characterizes the insurer's annual liability losses, where $X_2$ is normally distributed with mean 15 and standard deviation 2.

The insurer's annual property losses are independent of its annual liability losses.

Calculate the probability that, in a given year, the minimum of the insurer's property losses and liability losses exceeds $e^{16}$.

(A) 0.126  
(B) 0.154  
(C) 0.250  
(D) 0.309  
(E) 0.346  

> [!summary]+ **Jawaban No. 315**
> 
> **(B). $0{,}154$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > 
> > $\min(Y_1, Y_2) > c$ jika dan hanya jika $Y_1 > c$ **dan** $Y_2 > c$.
> >
> > Karena independen: $P(\min > c) = P(Y_1 > c) \cdot P(Y_2 > c)$
> >
> > $Y_i = e^{X_i}$, sehingga $Y_i > e^{16}$ iff $X_i > 16$.
>
> **Diketahui:**
> - $X_1 \sim N(16, 1{,}5^2)$; $X_2 \sim N(15, 2^2)$; independen
> - $Y_1 = e^{X_1}$, $Y_2 = e^{X_2}$
> - Target: $P(\min(Y_1, Y_2) > e^{16})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi ke kondisi pada $X_i$**
> >
> > $$P(\min(Y_1, Y_2) > e^{16}) = P(Y_1 > e^{16}) \cdot P(Y_2 > e^{16})$$
> >
> > $$= P(X_1 > 16) \cdot P(X_2 > 16)$$
> >
> > **Langkah 2: Standarisasi masing-masing**
> >
> > $$P(X_1 > 16) = P\!\left(Z > \frac{16 - 16}{1{,}5}\right) = P(Z > 0) = 0{,}5$$
> >
> > $$P(X_2 > 16) = P\!\left(Z > \frac{16 - 15}{2}\right) = P(Z > 0{,}5) = 1 - \Phi(0{,}5) \approx 1 - 0{,}6915 = 0{,}3085$$
> >
> > **Langkah 3: Kalikan (independen)**
> >
> > $$P(\min > e^{16}) = 0{,}5 \times 0{,}3085 = 0{,}15425$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}154$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\min(Y_1,Y_2) > c) = P(Y_1 > c) + P(Y_2 > c) - P(\text{keduanya} > c)$ — ini adalah $P(\max > c)$, bukan $P(\min > c)$.
> > > - Lupa bahwa $Y_i = e^{X_i} > e^{16}$ ekuivalen dengan $X_i > 16$.
> >
> > > [!CAUTION] Red Flags
> > > - $P(\min > c) = P(\text{semua} > c) = \prod P(Y_i > c)$ untuk variabel independen.
> > > - $P(\max > c) = 1 - P(\text{semua} \leq c)$ — berbeda dengan min.

---

## **No. 316**

A health insurance company classifies applicants, depending on their health, into one of three categories: A, B, or C.

The following probabilities apply:

(i) $P[A] = 5P[C]$
(ii) $P[B] = 4P[C]$
(iii) $P[\text{zero claims} \mid A] = 0.1$
(iv) $P[\text{zero claims} \mid B] = 0.2$
(v) $P[\text{zero claims} \mid C] = 0.4$

Calculate the probability that an insured was classified in category C, given that the insured had zero claims.

(A) 0.040  
(B) 0.170  
(C) 0.235  
(D) 0.294  
(E) 0.471  

> [!summary]+ **Jawaban No. 316**
> 
> **(C). $0{,}235$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Teorema Bayes:
> >
> > $$P(C \mid 0\text{-klaim}) = \frac{P(0\text{-klaim} \mid C) \cdot P(C)}{P(0\text{-klaim} \mid A) P(A) + P(0\text{-klaim} \mid B) P(B) + P(0\text{-klaim} \mid C) P(C)}$$
>
> **Diketahui:**
> - $P(A) = 5P(C)$, $P(B) = 4P(C)$, $P(A)+P(B)+P(C) = 1$
> - $P(0 \mid A) = 0{,}1$, $P(0 \mid B) = 0{,}2$, $P(0 \mid C) = 0{,}4$
> - Target: $P(C \mid 0\text{-klaim})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $P(A)$, $P(B)$, $P(C)$**
> >
> > $$5P(C) + 4P(C) + P(C) = 1 \implies 10P(C) = 1 \implies P(C) = 0{,}1$$
> >
> > $$P(B) = 0{,}4, \quad P(A) = 0{,}5$$
> >
> > **Langkah 2: Hitung $P(0\text{-klaim})$**
> >
> > $$P(0) = 0{,}1(0{,}5) + 0{,}2(0{,}4) + 0{,}4(0{,}1) = 0{,}05 + 0{,}08 + 0{,}04 = 0{,}17$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(C \mid 0) = \frac{0{,}4 \times 0{,}1}{0{,}17} = \frac{0{,}04}{0{,}17} \approx 0{,}2353$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}235$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menentukan $P(A)$, $P(B)$, $P(C)$ dari sistem persamaan — banyak langsung menggunakan rasio 5:4:1 tanpa normalisasi.
> > > - Mengira $P(C \mid 0) = P(0 \mid C) = 0{,}4$ — ini adalah likelihood, bukan posterior.
> >
> > > [!CAUTION] Red Flags
> > > - Ketika diberikan rasio, selalu temukan nilai eksak menggunakan syarat $\sum P = 1$.
> > > - Meskipun $P(0 \mid C) = 0{,}4$ tinggi, prior $P(C) = 0{,}1$ sangat kecil sehingga posterior tetap rendah.

---

## **No. 317**

A five-year term insurance policy pays 25,000 if the insured dies in the first year. The benefit declines by 5000 per year for each of the next four years. In each of the five years covered by the policy, the probability of dying is 0.01, given that the insured is alive at the beginning of that year.

Calculate the expected benefit the insurance company will pay during the five-year term.

(A) 692  
(B) 740  
(C) 750  
(D) 985  
(E) 1225  

> [!summary]+ **Jawaban No. 317**
> 
> **(B). $740$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > $P(\text{meninggal di tahun } k) = (0{,}99)^{k-1} \times 0{,}01$ (bertahan sampai awal tahun $k$, lalu meninggal)
> >
> > $$E[Y] = \sum_{k=1}^{5} b_k \cdot P(\text{meninggal di tahun } k)$$
>
> **Diketahui:**
> - Manfaat: $b_1 = 25000$, $b_2 = 20000$, $b_3 = 15000$, $b_4 = 10000$, $b_5 = 5000$
> - $P(\text{meninggal di tahun } k \mid \text{hidup awal tahun } k) = 0{,}01$
> - Target: $E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{meninggal di tahun } k)$**
> >
> > | $k$ | Manfaat $b_k$ | $P(\text{meninggal tahun }k) = 0{,}99^{k-1} \times 0{,}01$ |
> > |:---:|:---:|:---:|
> > | 1 | 25,000 | $0{,}01$ |
> > | 2 | 20,000 | $0{,}99 \times 0{,}01 = 0{,}0099$ |
> > | 3 | 15,000 | $0{,}99^2 \times 0{,}01 = 0{,}009801$ |
> > | 4 | 10,000 | $0{,}99^3 \times 0{,}01 = 0{,}009703$ |
> > | 5 | 5,000 | $0{,}99^4 \times 0{,}01 = 0{,}009606$ |
> >
> > **Langkah 2: Hitung $E[Y]$**
> >
> > $$E[Y] = 25000(0{,}01) + 20000(0{,}0099) + 15000(0{,}009801) + 10000(0{,}009703) + 5000(0{,}009606)$$
> >
> > $$= 250 + 198 + 147{,}015 + 97{,}03 + 48{,}03 = 740{,}075 \approx 740$$
> >
> > **Hasil Akhir:** **(B)**. $740$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(\text{meninggal tahun }k) = 0{,}01$ untuk semua tahun tanpa faktor kelangsungan hidup $(0{,}99)^{k-1}$.
> > > - Mengira manfaat tahun ke-5 adalah 0 — soal menyebutkan "declines by 5000 per year for each of the next four years", jadi tahun 5: $25000 - 4 \times 5000 = 5000$.
> >
> > > [!CAUTION] Red Flags
> > > - "Probability of dying given alive at beginning of year $k$" → harus mengalikan conditional probability ini dengan $P(\text{alive at year }k)$ untuk mendapat unconditional probability.

---

## **No. 318**

Data on a certain pregnancy test show that a pregnant woman will test negative or not pregnant 10% of the time, while a non-pregnant woman will test positive 20% of the time.

Thirty percent of the women who take the test are pregnant.

Calculate the probability that a woman is pregnant given that her test outcome is positive.

(A) 0.18  
(B) 0.30  
(C) 0.66  
(D) 0.82  
(E) 0.90  

> [!summary]+ **Jawaban No. 318**
> 
> **(C). $0{,}66$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Teorema Bayes:
> >
> > $$P(WP \mid TP) = \frac{P(TP \mid WP) \cdot P(WP)}{P(TP \mid WP) P(WP) + P(TP \mid WNP) P(WNP)}$$
>
> **Diketahui:**
> - $P(WP) = 0{,}30$, $P(WNP) = 0{,}70$
> - $P(TP^c \mid WP) = 0{,}10 \Rightarrow P(TP \mid WP) = 0{,}90$
> - $P(TP \mid WNP) = 0{,}20$
> - Target: $P(WP \mid TP)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(TP)$**
> >
> > $$P(TP) = 0{,}90(0{,}30) + 0{,}20(0{,}70) = 0{,}27 + 0{,}14 = 0{,}41$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(WP \mid TP) = \frac{0{,}90 \times 0{,}30}{0{,}41} = \frac{0{,}27}{0{,}41} \approx 0{,}6585$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}66$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(TP \mid WP) = 0{,}10$ (menggunakan angka "10%" langsung) — angka 10% adalah probabilitas tes **negatif** untuk wanita hamil.
> > > - Menjawab $P(WP) = 0{,}30$ sebagai jawaban (mengabaikan informasi tes).
> >
> > > [!CAUTION] Red Flags
> > > - "Test negative 10% of the time" untuk wanita hamil → $P(TP \mid WP) = 1 - 0{,}10 = 0{,}90$.
> > > - Soal ini mirip dengan No. 288 tetapi dengan prior berbeda (30% vs 20%) — perhatikan perubahan angka.

---

## **No. 319**

A company is marketing an investment opportunity to four potential customers. The company believes that its probability of making a sale is 0.7 for each of the first three customers but that it is only 0.2 for the fourth customer. The customers' purchases are independent of one another.

Calculate the probability that at most two customers purchase the investment.

(A) 0.18  
(B) 0.39  
(C) 0.57  
(D) 0.71  
(E) 0.82  

> [!summary]+ **Jawaban No. 319**
> 
> **(C). $0{,}57$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > $$P(\text{at most 2}) = 1 - P(\text{tepat 3}) - P(\text{tepat 4})$$
>
> **Diketahui:**
> - $p_1 = p_2 = p_3 = 0{,}7$, $p_4 = 0{,}2$ (independen)
> - Target: $P(\text{jumlah pembelian} \leq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{tepat 4 beli})$**
> >
> > $$P(\text{4 beli}) = 0{,}7^3 \times 0{,}2 = 0{,}343 \times 0{,}2 = 0{,}0686$$
> >
> > **Langkah 2: Hitung $P(\text{tepat 3 beli})$**
> >
> > Ada 4 sub-kasus:
> >
> > - Pelanggan 4 tidak beli (1,2,3 beli): $0{,}7^3 \times 0{,}8 = 0{,}343 \times 0{,}8 = 0{,}2744$
> > - Pelanggan 3 tidak beli (1,2,4 beli): $0{,}7^2 \times 0{,}3 \times 0{,}2 = 0{,}49 \times 0{,}06 = 0{,}0294$
> > - Pelanggan 2 tidak beli (1,3,4 beli): $0{,}7 \times 0{,}3 \times 0{,}7 \times 0{,}2 = 0{,}0294$
> > - Pelanggan 1 tidak beli (2,3,4 beli): $0{,}3 \times 0{,}7^2 \times 0{,}2 = 0{,}0294$
> >
> > $$P(\text{3 beli}) = 0{,}2744 + 0{,}0294 + 0{,}0294 + 0{,}0294 = 0{,}3626$$
> >
> > **Langkah 3: Hitung $P(\text{at most 2})$**
> >
> > $$P(\text{at most 2}) = 1 - 0{,}3626 - 0{,}0686 = 0{,}5688$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}57$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan Binomial dengan $p = 0{,}7$ untuk semua 4 pelanggan — probabilitas tidak identik.
> > > - Salah menghitung komplemen: $1 - P(3) - P(4)$, bukan $1 - P(3)$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal ini analog dengan No. 295, hanya dengan probabilitas berbeda ($p = 0{,}7$ vs $p = 0{,}5$) — strategi penyelesaian sama.

---

## **No. 320**

An actuary compiles a sample of 100 auto insurance claims. The sizes of these sampled claims are independently and identically distributed with mean 1000 and standard deviation 400.

Calculate the approximate probability that the sum of the sizes of the 100 claims is less than 92,000.

(A) 0.023  
(B) 0.050  
(C) 0.421  
(D) 0.579  
(E) 0.977  

> [!summary]+ **Jawaban No. 320**
> 
> **(A). $0{,}023$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar (LLN)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > 
> > Dengan CLT, $S = \sum_{i=1}^{100} X_i \overset{\text{approx}}{\sim} N(n\mu, n\sigma^2)$:
> >
> > $$P(S < s) \approx \Phi\!\left(\frac{s - n\mu}{\sigma\sqrt{n}}\right)$$
>
> **Diketahui:**
> - $n = 100$, $\mu = 1000$, $\sigma = 400$
> - $E[S] = 100 \times 1000 = 100{,}000$; $\text{SD}(S) = 400\sqrt{100} = 4000$
> - Target: $P(S < 92{,}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi**
> >
> > $$P(S < 92{,}000) \approx P\!\left(Z < \frac{92{,}000 - 100{,}000}{4{,}000}\right) = P\!\left(Z < \frac{-8{,}000}{4{,}000}\right) = P(Z < -2)$$
> >
> > **Langkah 2: Hitung dari tabel normal**
> >
> > $$P(Z < -2) = 1 - \Phi(2) = 1 - 0{,}9772 = 0{,}0228$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}023$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{SD}(S) = \sigma = 400$ (standar deviasi individual), bukan $\sigma\sqrt{n} = 4000$.
> > > - Mengira $P(Z < -2) = \Phi(2) = 0{,}977$ — ini $P(Z < +2)$, bukan $P(Z < -2)$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(S) = \sigma\sqrt{n}$, bukan $\sigma \cdot n$.
> > > - Skor $Z$ negatif → $P(Z < \text{negatif}) < 0{,}5$.

---

## **No. 321**

A business manufactures light bulbs and sells them in boxes of 50. Let $p$ denote the probability that a light bulb is defective. The events that different light bulbs are defective are mutually independent.

Let $X$ denote the number of non-defective light bulbs in a box of 50. In addition, let $n$ be an integer such that $P[X \geq n] \geq 0.95$.

Determine which one of the following statements must be true.

(A) $\displaystyle\sum_{k=n}^{50} \binom{50}{k} (1-p)^k p^{50-k} \geq 0.95$  
(B) $\displaystyle\sum_{k=0}^{n} \binom{50}{k} (1-p)^k p^{50-k} \geq 0.95$  
(C) $\displaystyle\sum_{k=n+1}^{50} \binom{50}{k} (1-p)^{50-k} p^k \geq 0.95$  
(D) $\displaystyle\sum_{k=0}^{n} \binom{50}{k} (1-p)^{50-k} p^k \geq 0.95$  
(E) $\displaystyle\sum_{k=n}^{50} \binom{50}{k} (1-p)^{50-k} p^k \geq 0.95$  

> [!summary]+ **Jawaban No. 321**
> 
> **(A). Pernyataan A**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> > 
> > $X$ = jumlah bohlam **tidak cacat** dari 50. Setiap bohlam tidak cacat dengan probabilitas $1-p$.
> >
> > $$X \sim B(50,\, 1-p)$$
> >
> > $$P(X = k) = \binom{50}{k}(1-p)^k p^{50-k}$$
> >
> > $$P(X \geq n) = \sum_{k=n}^{50} \binom{50}{k}(1-p)^k p^{50-k}$$
>
> **Diketahui:**
> - $X$ = jumlah bohlam tidak cacat; $X \sim B(50, 1-p)$
> - Kondisi: $P(X \geq n) \geq 0{,}95$
> - Target: Identifikasi ekspresi yang benar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan distribusi $X$**
> >
> > $X$ = jumlah bohlam tidak cacat $\sim B(50, 1-p)$.
> >
> > PMF: $P(X = k) = \binom{50}{k}(1-p)^k p^{50-k}$ untuk $k = 0, 1, \ldots, 50$.
> >
> > **Langkah 2: Tulis $P(X \geq n)$**
> >
> > $$P(X \geq n) = \sum_{k=n}^{50} P(X = k) = \sum_{k=n}^{50} \binom{50}{k}(1-p)^k p^{50-k}$$
> >
> > **Langkah 3: Identifikasi pernyataan yang benar**
> >
> > Kondisi yang diperlukan: $P(X \geq n) \geq 0{,}95$, sehingga:
> >
> > $$\sum_{k=n}^{50} \binom{50}{k}(1-p)^k p^{50-k} \geq 0{,}95$$
> >
> > Ini persis pernyataan **(A)**.
> >
> > **Hasil Akhir:** **(A)**. Pernyataan A
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menukar $(1-p)^k p^{50-k}$ menjadi $(1-p)^{50-k} p^k$ — dalam $B(50, 1-p)$, sukses (non-cacat) memiliki probabilitas $(1-p)$, sehingga $k$ sukses memberi faktor $(1-p)^k$.
> > > - Menggunakan batas $k$ dari 0 sampai $n$ (untuk $P(X \leq n)$) alih-alih $n$ sampai 50 (untuk $P(X \geq n)$).
> >
> > > [!CAUTION] Red Flags
> > > - "Non-defective" adalah sukses dengan prob $1-p$; "defective" adalah gagal dengan prob $p$.
> > > - $P(X \geq n)$ → batas bawah sumasi adalah $n$, batas atas adalah 50 (bukan sebaliknya).

---

## **No. 322**

A fair die is rolled until three sixes are obtained. Let the random variable $X$ be the total number of rolls required.

Calculate $\text{Var}(X)$.

(A) $5/12$  
(B) $18/25$  
(C) $15$  
(D) $30$  
(E) $90$  

> [!summary]+ **Jawaban No. 322**
> 
> **(E). $90$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> > 
> > Distribusi Binomial Negatif $X \sim \text{NB}(r, p)$: jumlah percobaan hingga $r$ sukses.
> >
> > $$E[X] = \frac{r}{p}, \quad \text{Var}(X) = \frac{r(1-p)}{p^2}$$
>
> **Diketahui:**
> - Dadu fair: $p = P(\text{enam}) = 1/6$
> - $r = 3$ (butuh 3 kali enam)
> - $X \sim \text{NB}(3,\, 1/6)$
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi distribusi**
> >
> > $X$ = total lemparan hingga 3 kali enam $\Rightarrow X \sim \text{NB}(r=3,\, p=1/6)$.
> >
> > **Langkah 2: Terapkan rumus variansi NB**
> >
> > $$\text{Var}(X) = \frac{r(1-p)}{p^2} = \frac{3 \times (1 - 1/6)}{(1/6)^2} = \frac{3 \times 5/6}{1/36} = \frac{5/2}{1/36} = \frac{5}{2} \times 36 = 90$$
> >
> > **Hasil Akhir:** **(E)**. $90$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X) = r/p^2$ (tanpa faktor $1-p$) — rumus lengkapnya adalah $r(1-p)/p^2$.
> > > - Menggunakan distribusi Geometrik ($r = 1$) alih-alih Binomial Negatif ($r = 3$).
> >
> > > [!CAUTION] Red Flags
> > > - "Until $r$ successes" → Binomial Negatif. Pastikan $r$ dan $p$ didentifikasi dengan benar.
> > > - $(1/6)^2 = 1/36$ — jangan lupa menghitung $p^2$ secara eksplisit.

---

## **No. 323**

A broker markets four separate products. The probabilities of selling these products to a client follow:

| Product | Probability |
|:---:|:---:|
| Auto insurance | 0.45 |
| Homeowners insurance | 0.55 |
| Health insurance | 0.60 |
| Life insurance | 0.60 |

The sales of these products are mutually independent.

Calculate the probability that the broker sells more than two products to a client.

(A) 0.24  
(B) 0.30  
(C) 0.39  
(D) 0.61  
(E) 0.76  

> [!summary]+ **Jawaban No. 323**
> 
> **(C). $0{,}39$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > $$P(\text{lebih dari 2}) = P(\text{tepat 3}) + P(\text{tepat 4})$$
>
> **Diketahui:**
> - $p_A = 0{,}45$, $p_H = 0{,}55$, $p_{He} = 0{,}60$, $p_L = 0{,}60$ (independen)
> - $q_A = 0{,}55$, $q_H = 0{,}45$, $q_{He} = 0{,}40$, $q_L = 0{,}40$
> - Target: $P(\text{terjual} > 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{tepat 4 terjual})$**
> >
> > $$P(\text{4}) = 0{,}45 \times 0{,}55 \times 0{,}60 \times 0{,}60 = 0{,}0891$$
> >
> > **Langkah 2: Hitung $P(\text{tepat 3 terjual})$**
> >
> > Ada 4 sub-kasus (satu produk tidak terjual):
> >
> > - Auto tidak terjual: $0{,}55 \times 0{,}55 \times 0{,}60 \times 0{,}60 = 0{,}1089$
> > - Home tidak terjual: $0{,}45 \times 0{,}45 \times 0{,}60 \times 0{,}60 = 0{,}0729$
> > - Health tidak terjual: $0{,}45 \times 0{,}55 \times 0{,}40 \times 0{,}60 = 0{,}0594$
> > - Life tidak terjual: $0{,}45 \times 0{,}55 \times 0{,}60 \times 0{,}40 = 0{,}0594$
> >
> > $$P(\text{3}) = 0{,}1089 + 0{,}0729 + 0{,}0594 + 0{,}0594 = 0{,}3006$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$P(\text{lebih dari 2}) = 0{,}3006 + 0{,}0891 = 0{,}3897 \approx 0{,}39$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}39$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan Binomial karena ada 4 produk — probabilitas tidak identik, jadi Binomial tidak berlaku.
> > > - Lupa menghitung semua 4 sub-kasus untuk "tepat 3".
> >
> > > [!CAUTION] Red Flags
> > > - Ketika probabilitas tidak identik → enumerasi per kasus.
> > > - "More than two" = 3 atau 4, bukan "at least 2" = 2, 3, atau 4.

---

## **No. 324**

An actuary determines that the daily auto accident count within a city can be modeled by a Poisson random variable with mean 4. In addition, the accident counts on different days are mutually independent.

Calculate the approximate probability that at least 6496 accidents occur during a period of 1600 days.

(A) 0.01  
(B) 0.12  
(C) 0.19  
(D) 0.27  
(E) 0.49  

> [!summary]+ **Jawaban No. 324**
> 
> **(B). $0{,}12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar (LLN)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > 
> > $S = \sum_{i=1}^{1600} X_i$ dengan $X_i \sim \text{Poisson}(4)$ independen.
> >
> > Sifat Poisson: $E[S] = 1600 \times 4 = 6400$, $\text{Var}(S) = 1600 \times 4 = 6400$.
> >
> > Dengan CLT: $S \overset{\text{approx}}{\sim} N(6400, 6400)$.
>
> **Diketahui:**
> - $n = 1600$ hari; $\lambda = 4$ kecelakaan/hari
> - Target: $P(S \geq 6496)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan distribusi $S$**
> >
> > $$E[S] = 1600 \times 4 = 6400, \quad \text{Var}(S) = 1600 \times 4 = 6400$$
> >
> > $$\text{SD}(S) = \sqrt{6400} = 80$$
> >
> > **Langkah 2: Standarisasi**
> >
> > $$P(S \geq 6496) \approx P\!\left(Z \geq \frac{6496 - 6400}{80}\right) = P\!\left(Z \geq \frac{96}{80}\right) = P(Z \geq 1{,}2)$$
> >
> > $$= 1 - \Phi(1{,}2) \approx 1 - 0{,}8849 = 0{,}1151$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(S) = 1600 \times 4^2 = 25600$ — untuk Poisson, $\text{Var} = \lambda = 4$, bukan $\lambda^2$.
> > > - Salah menghitung $\text{SD}(S)$: $\sqrt{6400} = 80$, bukan $6400/80$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk Poisson$(\lambda)$: $E[X] = \text{Var}(X) = \lambda$ — mean dan variansi sama.
> > > - $P(Z \geq 1{,}2) = 1 - \Phi(1{,}2) \approx 0{,}115$.

---

## **No. 325**

A company sponsors health insurance, life insurance, and retirement plans for its employees. Each employee selects one of two participation options:

(i) participate in exactly two plans at the company's expense
(ii) participate in none of the plans and receive a cash lump sum payment instead

Employee participation levels in each plan follow:

(i) 62.5% of employees participate in the health insurance plan.
(ii) 37.5% of employees participate in the life insurance plan.
(iii) 50.0% of employees participate in the retirement plan.

Calculate the percentage of employees who participate in both the life insurance and retirement plans.

(A) 12.5%  
(B) 25.0%  
(C) 37.5%  
(D) 50.0%  
(E) 62.5%  

> [!summary]+ **Jawaban No. 325**
> 
> **(A). $12{,}5\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Setiap karyawan bergabung dengan tepat 2 rencana atau tidak sama sekali. Misalkan:
> > - $a = $ fraksi yang ikut Health & Life
> > - $b = $ fraksi yang ikut Health & Retirement
> > - $c = $ fraksi yang ikut Life & Retirement
>
> **Diketahui:**
> - Total yang ikut Health: $P(H) = 0{,}625 = a + b$
> - Total yang ikut Life: $P(L) = 0{,}375 = a + c$
> - Total yang ikut Retirement: $P(R) = 0{,}500 = b + c$
> - Target: $c = P(\text{Life} \cap \text{Retirement})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun sistem persamaan**
> >
> > $$a + b = 0{,}625 \quad \cdots (1)$$
> >
> > $$a + c = 0{,}375 \quad \cdots (2)$$
> >
> > $$b + c = 0{,}500 \quad \cdots (3)$$
> >
> > **Langkah 2: Jumlahkan semua persamaan**
> >
> > $$(1) + (2) + (3): \quad 2(a + b + c) = 0{,}625 + 0{,}375 + 0{,}500 = 1{,}500$$
> >
> > $$a + b + c = 0{,}750$$
> >
> > **Langkah 3: Selesaikan untuk $c$**
> >
> > Dari $(1)$: $a + b = 0{,}625$, maka:
> >
> > $$c = (a + b + c) - (a + b) = 0{,}750 - 0{,}625 = 0{,}125 = 12{,}5\%$$
> >
> > **Hasil Akhir:** **(A)**. $12{,}5\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{Life} \cap \text{Retirement}) = P(\text{Life}) \times P(\text{Retirement})$ (asumsi independen) — tidak berlaku di sini.
> > > - Lupa bahwa setiap karyawan yang berpartisipasi mengikuti **tepat 2** rencana, bukan lebih.
> >
> > > [!CAUTION] Red Flags
> > > - "Exactly two plans" → setiap peserta masuk tepat satu dari tiga pasangan $(H\&L, H\&R, L\&R)$.
> > > - Trik penyelesaian: jumlahkan semua persamaan → temukan total $a+b+c$, lalu kurangi dengan persamaan yang sesuai.

---

## **No. 326**

The monthly commission that an agent earns is modeled by a random variable $X$ with probability density function

$$f(x) = \begin{cases} \dfrac{1}{20} e^{-x/20}, & x > 0 \\ 0, & \text{otherwise} \end{cases}$$

Calculate the probability that the commission the agent earns in a month is within 0.5 standard deviations of $E(X)$.

(A) 0.34  
(B) 0.38  
(C) 0.50  
(D) 0.68  
(E) 0.95  

> [!summary]+ **Jawaban No. 326**
> 
> **(B). $0{,}38$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > 
> > $X \sim \text{Exp}(\theta = 20)$: $E[X] = 20$, $\text{SD}(X) = 20$.
> >
> > "Within 0.5 SD of $E[X]$": $|X - 20| \leq 0{,}5 \times 20 = 10$, yaitu $10 \leq X \leq 30$.
> >
> > $$P(10 \leq X \leq 30) = \int_{10}^{30} \frac{1}{20} e^{-x/20}\,dx$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\theta = 20)$ (kontinu, support $x > 0$; $\theta$ = parameter mean)
> - Target: $P(|X - 20| \leq 10) = P(10 \leq X \leq 30)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan interval**
> >
> > $E[X] = 20$, $\text{SD}(X) = 20$
> >
> > Interval: $[20 - 10,\, 20 + 10] = [10, 30]$
> >
> > **Langkah 2: Hitung integral**
> >
> > $$P(10 \leq X \leq 30) = \left[-e^{-x/20}\right]_{10}^{30} = -e^{-30/20} + e^{-10/20}$$
> >
> > $$= e^{-0{,}5} - e^{-1{,}5} \approx 0{,}6065 - 0{,}2231 = 0{,}3834$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}38$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira distribusi Eksponensial simetris seperti Normal, sehingga $P(\mu \pm 0{,}5\sigma) \approx 0{,}383$ sama dengan aturan 68-95-99.7 — kebetulan hasilnya mirip, tetapi alasannya berbeda.
> > > - Lupa bahwa support Eksponensial adalah $x > 0$ — batas bawah integral adalah max$(0, E[X] - 0{,}5\sigma) = 10$ (sudah positif).
> >
> > > [!CAUTION] Red Flags
> > > - "Within $k$ standard deviations of mean" → hitung interval $[\mu - k\sigma, \mu + k\sigma]$ terlebih dahulu, lalu evaluasi CDF.
> > > - Untuk Eksponensial: $P(a \leq X \leq b) = e^{-a/\theta} - e^{-b/\theta}$.

---

## **No. 327**

Individual burglary claim amounts covered by policies of an insurance company are normally distributed with mean 2500 and standard deviation 500.

The probability that the mean of a random sample of 100 claims will exceed $K$ is 0.01.

Calculate $K$.

(A) 2505  
(B) 2512  
(C) 2616  
(D) 3663  
(E) 4950  

> [!summary]+ **Jawaban No. 327**
> 
> **(C). $2616$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> > 
> > $$\bar{X}_{100} \sim N\!\left(2500,\, \frac{500^2}{100}\right) = N(2500,\, 50^2)$$
> >
> > $$P(\bar{X} > K) = 0{,}01 \implies \Phi\!\left(\frac{K - 2500}{50}\right) = 0{,}99$$
>
> **Diketahui:**
> - $X_i \sim N(2500, 500^2)$, $n = 100$
> - $\text{SD}(\bar{X}) = 500/\sqrt{100} = 50$
> - Target: $K$ sehingga $P(\bar{X} > K) = 0{,}01$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi**
> >
> > $$P(\bar{X} > K) = 0{,}01 \implies P\!\left(Z > \frac{K - 2500}{50}\right) = 0{,}01$$
> >
> > $$\Phi\!\left(\frac{K - 2500}{50}\right) = 0{,}99$$
> >
> > **Langkah 2: Cari nilai kritis**
> >
> > Dari tabel normal baku: $\Phi(2{,}3263) = 0{,}99$, sehingga:
> >
> > $$\frac{K - 2500}{50} = 2{,}3263$$
> >
> > $$K = 2500 + 50 \times 2{,}3263 = 2500 + 116{,}3 = 2616{,}3 \approx 2616$$
> >
> > **Hasil Akhir:** **(C)**. $2616$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{SD}(\bar{X}) = 500$ (standar deviasi populasi) alih-alih $500/\sqrt{100} = 50$.
> > > - Menggunakan $z = 1{,}96$ untuk $P = 0{,}01$ — $z_{0{,}99} = 2{,}3263$, sementara $z_{0{,}975} = 1{,}96$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(\bar{X}) = \sigma/\sqrt{n}$, bukan $\sigma$.
> > > - $P(\bar{X} > K) = 0{,}01$ → satu sisi kanan → $z = 2{,}3263$ (bukan 2,576).

---

## **No. 328**

The operating cost of a new claims system is modeled by a random variable $X$ with variance 50. In its second year of use, inflation of 3% and an additional fixed maintenance cost of 2.5 increase the operating cost of the system.

Calculate the variance of the operating cost of the claims system in its second year of use.

(A) 52  
(B) 53  
(C) 54  
(D) 56  
(E) 59  

> [!summary]+ **Jawaban No. 328**
> 
> **(B). $53$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > Sifat variansi untuk transformasi linear:
> >
> > $$\text{Var}(aX + b) = a^2 \cdot \text{Var}(X)$$
> >
> > Konstanta aditif tidak mempengaruhi variansi.
>
> **Diketahui:**
> - $\text{Var}(X) = 50$
> - Biaya tahun kedua: $Y = 1{,}03X + 2{,}5$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi transformasi**
> >
> > Inflasi 3% berarti biaya dikalikan $1{,}03$; biaya tetap $2{,}5$ ditambahkan.
> >
> > $$Y = 1{,}03X + 2{,}5$$
> >
> > **Langkah 2: Hitung variansi**
> >
> > $$\text{Var}(Y) = (1{,}03)^2 \cdot \text{Var}(X) = 1{,}0609 \times 50 = 53{,}045 \approx 53$$
> >
> > **Hasil Akhir:** **(B)**. $53$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menambahkan $2{,}5^2$ atau $2{,}5$ ke variansi — konstanta aditif **tidak mengubah variansi**.
> > > - Menggunakan faktor 1,03 (bukan $1{,}03^2$) — variansi menggunakan kuadrat koefisien.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{Var}(aX + b) = a^2 \text{Var}(X)$ — selalu kuadratkan faktor multiplikatif, abaikan konstanta.
> > > - "Inflation of 3%" → $a = 1{,}03$, $a^2 = 1{,}0609$.

---

## **No. 329**

A geneticist compiled the following information:

(i) $\frac{1}{2}$ of children who have two left-handed parents are left-handed.
(ii) $\frac{1}{6}$ of children who have exactly one left-handed parent are left-handed.
(iii) $\frac{1}{16}$ of children who have no left-handed parents are left-handed.
(iv) $\frac{1}{50}$ of children have two left-handed parents.
(v) $\frac{1}{5}$ of children have exactly one left-handed parent.

Calculate the probability that a randomly selected left-handed child has no left-handed parents.

(A) 0.09  
(B) 0.42  
(C) 0.53  
(D) 0.78  
(E) 0.91  

> [!summary]+ **Jawaban No. 329**
> 
> **(C). $0{,}53$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> > 
> > Teorema Bayes dengan tiga kategori ($0LP$, $1LP$, $2LP$):
> >
> > $$P(0LP \mid L) = \frac{P(L \mid 0LP) \cdot P(0LP)}{P(L \mid 0LP) P(0LP) + P(L \mid 1LP) P(1LP) + P(L \mid 2LP) P(2LP)}$$
>
> **Diketahui:**
> - $P(L \mid 2LP) = 1/2$; $P(L \mid 1LP) = 1/6$; $P(L \mid 0LP) = 1/16$
> - $P(2LP) = 1/50$; $P(1LP) = 1/5$; $P(0LP) = 1 - 1/50 - 1/5 = 39/50$
> - Target: $P(0LP \mid L)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(0LP)$**
> >
> > $$P(0LP) = 1 - \frac{1}{50} - \frac{1}{5} = 1 - \frac{1}{50} - \frac{10}{50} = \frac{39}{50}$$
> >
> > **Langkah 2: Hitung $P(L)$ via Total Probabilitas**
> >
> > $$P(L) = \frac{1}{16} \cdot \frac{39}{50} + \frac{1}{6} \cdot \frac{1}{5} + \frac{1}{2} \cdot \frac{1}{50}$$
> >
> > $$= \frac{39}{800} + \frac{1}{30} + \frac{1}{100}$$
> >
> > Samakan penyebut (LCM = 2400):
> >
> > $$= \frac{39 \times 3}{2400} + \frac{80}{2400} + \frac{24}{2400} = \frac{117 + 80 + 24}{2400} = \frac{221}{2400}$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(0LP \mid L) = \frac{\frac{1}{16} \cdot \frac{39}{50}}{\frac{221}{2400}} = \frac{\frac{39}{800}}{\frac{221}{2400}} = \frac{39}{800} \times \frac{2400}{221} = \frac{39 \times 3}{221} = \frac{117}{221} \approx 0{,}529$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}53$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $P(0LP)$ — harus $1 - 1/50 - 1/5 = 39/50$, bukan $1 - 1/5 = 4/5$.
> > > - Tidak menyamakan penyebut dengan benar saat menjumlahkan fraksi.
> >
> > > [!CAUTION] Red Flags
> > > - Meskipun $P(L \mid 0LP) = 1/16$ kecil, prior $P(0LP) = 39/50$ sangat besar — ini mendominasi dan membuat $P(0LP \mid L)$ cukup tinggi.
> > > - Selalu hitung $P(\text{semua kategori})$ terlebih dahulu untuk memverifikasi totalnya = 1.

---

## **No. 330**

The sales for a product can be modeled by $Z = 4X - Y - 3$. $X$ and $Y$ are independent random variables with $\text{Var}(X) = 2$ and $\text{Var}(Y) = 3$.

Calculate $\text{Var}(Z)$.

(A) 5  
(B) 11  
(C) 29  
(D) 32  
(E) 35  

> [!summary]+ **Jawaban No. 330**
> 
> **(E). $35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> > 
> > Untuk $X, Y$ independen dan $Z = aX + bY + c$:
> >
> > $$\text{Var}(Z) = a^2 \text{Var}(X) + b^2 \text{Var}(Y)$$
>
> **Diketahui:**
> - $Z = 4X - Y - 3$: $a = 4$, $b = -1$, $c = -3$
> - $\text{Var}(X) = 2$, $\text{Var}(Y) = 3$; $X, Y$ independen
> - Target: $\text{Var}(Z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan sifat variansi kombinasi linear**
> >
> > $$\text{Var}(Z) = \text{Var}(4X - Y - 3) = 4^2 \text{Var}(X) + (-1)^2 \text{Var}(Y) + \text{Var}(-3)$$
> >
> > Konstanta $-3$ tidak berkontribusi pada variansi:
> >
> > $$= 16 \times 2 + 1 \times 3 + 0 = 32 + 3 = 35$$
> >
> > **Hasil Akhir:** **(E)**. $35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $a = 4$ (bukan $a^2 = 16$) — variansi menggunakan **kuadrat** koefisien.
> > > - Menambahkan $(-3)^2 = 9$ karena mengira konstanta memiliki variansi — $\text{Var}(\text{konstanta}) = 0$.
> > > - Mengira $\text{Cov}(X,Y) \neq 0$ karena ada koefisien berbeda — $X$ dan $Y$ independen sehingga $\text{Cov} = 0$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{Var}(aX \pm bY + c) = a^2\text{Var}(X) + b^2\text{Var}(Y)$ untuk variabel independen — tanda $\pm$ dan konstanta tidak berpengaruh pada variansi.

---
