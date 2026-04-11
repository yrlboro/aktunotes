## **No. 151**

The following information is given about a group of high-risk borrowers.

(i) Of all these borrowers, 30% defaulted on at least one student loan.  
(ii) Of the borrowers who defaulted on at least one car loan, 40% defaulted on at least one student loan.  
(iii) Of the borrowers who did not default on any student loans, 28% defaulted on at least one car loan.  

A statistician randomly selects a borrower from this group and observes that the selected borrower defaulted on at least one student loan.

Calculate the probability that the selected borrower defaulted on at least one car loan.

(A) 0.33  
(B) 0.40  
(C) 0.44  
(D) 0.65  
(E) 0.72  

> [!summary]+ **Jawaban No. 151**
>
> **(C). $0{,}44$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P(C \mid S) = \frac{P(C \cap S)}{P(S)}$$
> >
> > Gunakan: $P(C \cap S) = P(S \mid C) \cdot P(C)$ dan cari $P(C)$ melalui $P(C \cap S^c) = P(C \mid S^c) \cdot P(S^c)$.
>
> **Diketahui:**
> - $P(S) = 0{,}30$ (gagal bayar pinjaman mahasiswa)
> - $P(S \mid C) = 0{,}40$ (gagal bayar mahasiswa, diberikan gagal bayar mobil)
> - $P(C \mid S^c) = 0{,}28$ (gagal bayar mobil, diberikan tidak gagal bayar mahasiswa)
> - Target: $P(C \mid S)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(C \cap S^c)$**
> >
> > $$P(C \cap S^c) = P(C \mid S^c) \cdot P(S^c) = 0{,}28 \times (1 - 0{,}30) = 0{,}28 \times 0{,}70 = 0{,}196$$
> >
> > **Langkah 2: Hubungkan $P(C \cap S)$ dengan $P(C)$**
> >
> > Karena $P(S \mid C) = P(C \cap S) / P(C) = 0{,}40$, maka:
> >
> > $$P(C \cap S) = 0{,}40 \cdot P(C)$$
> >
> > Dan karena $P(C) = P(C \cap S) + P(C \cap S^c)$:
> >
> > $$P(C) = 0{,}40 \cdot P(C) + 0{,}196$$
> >
> > $$0{,}60 \cdot P(C) = 0{,}196 \Rightarrow P(C) = \frac{0{,}196}{0{,}60} = 0{,}32\overline{6}$$
> >
> > **Langkah 3: Hitung $P(C \cap S)$**
> >
> > $$P(C \cap S) = 0{,}40 \times 0{,}32\overline{6} = 0{,}13067$$
> >
> > **Langkah 4: Terapkan Teorema Bayes**
> >
> > $$P(C \mid S) = \frac{P(C \cap S)}{P(S)} = \frac{0{,}13067}{0{,}30} \approx 0{,}4356 \approx 0{,}44$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}44$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(C \mid S) = P(S \mid C) = 0{,}40$ — ini fallacy of the transposed conditional; kedua nilai ini umumnya berbeda.
> > > - Mencoba langsung menghitung $P(C)$ tanpa terlebih dahulu mencari $P(C \cap S^c)$ dari kondisi ketiga.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan $P(C \mid S^c) = 0{,}28$ langsung sebagai $P(C)$ — ini adalah probabilitas bersyarat, bukan marginal.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan tiga informasi probabilitas berbeda → biasanya memerlukan sistem persamaan; cari $P(C \cap S)$ secara aljabar.

---

## **No. 152**

An insurance company issues policies covering damage to automobiles. The amount of damage is modeled by a uniform distribution on $[0, b]$.

The policy payout is subject to a deductible of $b/10$.

A policyholder experiences automobile damage.

Calculate the ratio of the standard deviation of the policy payout to the standard deviation of the amount of the damage.

(A) 0.8100  
(B) 0.9000  
(C) 0.9477  
(D) 0.9487  
(E) 0.9735  

> [!summary]+ **Jawaban No. 152**
>
> **(E). $0{,}9735$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Payout dengan deductible $d$: $Y = \max(X - d,\, 0)$
> >
> > Untuk $X \sim U(0, b)$ dan $d = b/10$:
> >
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2$$
>
> **Diketahui:**
> - $X \sim U(0, b)$, $f(x) = 1/b$, deductible $d = b/10$
> - Payout: $Y = \max(X - b/10,\, 0) = \begin{cases} 0, & X \leq b/10 \\ X - b/10, & X > b/10 \end{cases}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$**
> >
> > $$E[Y] = \int_{b/10}^{b} \left(x - \frac{b}{10}\right) \frac{1}{b}\, dx = \frac{1}{b}\left[\frac{x^2}{2} - \frac{bx}{10}\right]_{b/10}^{b}$$
> >
> > $$= \frac{1}{b}\left[\left(\frac{b^2}{2} - \frac{b^2}{10}\right) - \left(\frac{b^2}{200} - \frac{b^2}{100}\right)\right] = \frac{1}{b}\left[\frac{2b^2}{5} - \left(-\frac{b^2}{200}\right)\right]$$
> >
> > $$= \frac{1}{b}\left[\frac{b^2}{2} - \frac{b^2}{10} - \frac{b^2}{200} + \frac{b^2}{100}\right] = b\left[0{,}5 - 0{,}1 - 0{,}005 + 0{,}01\right] = 0{,}405b$$
> >
> > **Langkah 2: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = \int_{b/10}^{b} \left(x - \frac{b}{10}\right)^2 \frac{1}{b}\, dx = \frac{1}{b} \cdot \frac{(b - b/10)^3}{3} = \frac{1}{b} \cdot \frac{(0{,}9b)^3}{3} = \frac{0{,}729b^3}{3b} = 0{,}243b^2$$
> >
> > **Langkah 3: Hitung $\text{Var}(Y)$ dan $\text{SD}(Y)$**
> >
> > $$\text{Var}(Y) = 0{,}243b^2 - (0{,}405b)^2 = 0{,}243b^2 - 0{,}164025b^2 = 0{,}078975b^2$$
> >
> > $$\text{SD}(Y) = b\sqrt{0{,}078975} \approx 0{,}28102b$$
> >
> > **Langkah 4: Hitung $\text{SD}(X)$ dan Rasio**
> >
> > $$\text{SD}(X) = \frac{b}{\sqrt{12}} \approx 0{,}28868b$$
> >
> > $$\text{Rasio} = \frac{0{,}28102b}{0{,}28868b} \approx 0{,}9735$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}9735$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[Y^2]$ langsung dari $\int_{b/10}^b x^2 \cdot (1/b)\,dx$ — ini adalah $E[X^2]$ bersyarat, bukan $E[Y^2]$ karena $Y = X - b/10$, bukan $Y = X$.
> > > - Mengalikan deviasi standar langsung: $\text{SD}(Y) \neq (1 - 1/10) \cdot \text{SD}(X)$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal yang meminta rasio $\text{SD}$ dengan deductible → hitung $\text{Var}(Y)$ dari definisi $E[Y^2] - (E[Y])^2$ secara eksplisit.

---

## **No. 153**

A policyholder purchases automobile insurance for two years. Define the following events:

$F$ = the policyholder has exactly one accident in year one.  
$G$ = the policyholder has one or more accidents in year two.  

Define the following events:

(i) The policyholder has exactly one accident in year one and has more than one accident in year two.  
(ii) The policyholder has at least two accidents during the two-year period.  
(iii) The policyholder has exactly one accident in year one and has at least one accident in year two.  
(iv) The policyholder has exactly one accident in year one and has a total of two or more accidents in the two-year period.  
(v) The policyholder has exactly one accident in year one and has more accidents in year two than in year one.  

Determine the number of events from the above list of five that are the same as $F \cap G$.

(A) None  
(B) Exactly one  
(C) Exactly two  
(D) Exactly three  
(E) All  

> [!summary]+ **Jawaban No. 153**
>
> **(C). Exactly two**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.1–1.2; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $F \cap G$ = {tepat 1 kecelakaan tahun 1} $\cap$ {1 atau lebih kecelakaan tahun 2}
> >
> > = Tepat 1 kecelakaan tahun 1 **DAN** minimal 1 kecelakaan tahun 2.
>
> **Diketahui:**
> - $F$ = tepat 1 kecelakaan di tahun 1
> - $G$ = 1 atau lebih kecelakaan di tahun 2 (ekuivalen: minimal 1 di tahun 2)
> - $F \cap G$ = tepat 1 di tahun 1 **dan** minimal 1 di tahun 2
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Analisis Event (i)**
> >
> > Event (i): tepat 1 di tahun 1 **dan** lebih dari 1 di tahun 2.
> >
> > "$G$ = 1 atau lebih" mencakup kasus satu kecelakaan di tahun 2, sedangkan event (i) mensyaratkan **lebih dari satu**. Jadi event (i) $\subsetneq F \cap G$.
> >
> > **Event (i) ≠ $F \cap G$** ✗
> >
> > **Langkah 2: Analisis Event (ii)**
> >
> > Event (ii): minimal 2 kecelakaan selama 2 tahun. Ini bisa terjadi dengan 0 kecelakaan di tahun 1 dan $\geq 2$ di tahun 2, sehingga syarat "tepat 1 di tahun 1" tidak terpenuhi.
> >
> > **Event (ii) ≠ $F \cap G$** ✗
> >
> > **Langkah 3: Analisis Event (iii)**
> >
> > Event (iii): tepat 1 di tahun 1 **dan** minimal 1 di tahun 2. Ini persis sama dengan $F \cap G$ karena "at least one" = "one or more".
> >
> > **Event (iii) = $F \cap G$** ✓
> >
> > **Langkah 4: Analisis Event (iv)**
> >
> > Event (iv): tepat 1 di tahun 1 **dan** total $\geq 2$ selama 2 tahun. Karena tahun 1 sudah memberikan tepat 1 kecelakaan, total $\geq 2$ ekuivalen dengan tahun 2 memberikan $\geq 1$ kecelakaan.
> >
> > **Event (iv) = $F \cap G$** ✓
> >
> > **Langkah 5: Analisis Event (v)**
> >
> > Event (v): tepat 1 di tahun 1 **dan** lebih banyak kecelakaan di tahun 2 dari tahun 1. Karena tahun 1 = 1 kecelakaan, ini berarti tahun 2 $\geq 2$, yang lebih ketat dari "$G$ = minimal 1".
> >
> > **Event (v) ≠ $F \cap G$** ✗
> >
> > **Kesimpulan:** Event (iii) dan (iv) sama dengan $F \cap G$ → **tepat dua**.
> >
> > **Hasil Akhir:** **(C)**. Exactly two
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "total $\geq 2$" (event iv) berbeda dari "$\geq 1$ di tahun 2 diberikan tepat 1 di tahun 1" — padahal jika tahun 1 sudah pasti 1, keduanya identik secara logis.
> > > - Mengira "lebih dari 1 di tahun 2" (event v) sama dengan "$G$ = satu atau lebih di tahun 2" — perhatikan batas bawahnya berbeda (1 vs 2).
> >
> > > [!CAUTION] Red Flags
> > > - Soal set-theory verbal → tulis eksplisit kondisi setiap event dalam bentuk angka, lalu bandingkan satu per satu.

---

## **No. 154**

An insurance company categorizes its policyholders into three mutually exclusive groups: high-risk, medium-risk, and low-risk. An internal study of the company showed that 45% of the policyholders are low-risk and 35% are medium-risk. The probability of death over the next year, given that a policyholder is high-risk is two times the probability of death of a medium-risk policyholder. The probability of death over the next year, given that a policyholder is medium-risk is three times the probability of death of a low-risk policyholder. The probability of death of a randomly selected policyholder, over the next year, is 0.009.

Calculate the probability of death of a policyholder over the next year, given that the policyholder is high-risk.

(A) 0.0025  
(B) 0.0200  
(C) 0.1215  
(D) 0.2000  
(E) 0.3750  

> [!summary]+ **Jawaban No. 154**
>
> **(B). $0{,}0200$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Probabilitas Total:
> >
> > $$P(D) = P(H)\,P(D \mid H) + P(M)\,P(D \mid M) + P(L)\,P(D \mid L)$$
>
> **Diketahui:**
> - $P(L) = 0{,}45$, $P(M) = 0{,}35$, $P(H) = 1 - 0{,}45 - 0{,}35 = 0{,}20$
> - $P(D \mid M) = 3\,P(D \mid L)$, $P(D \mid H) = 2\,P(D \mid M) = 6\,P(D \mid L)$
> - $P(D) = 0{,}009$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan Semua Probabilitas dalam $P(D \mid L)$**
> >
> > Misalkan $P(D \mid L) = q$, maka:
> >
> > $$P(D \mid M) = 3q, \quad P(D \mid H) = 6q$$
> >
> > **Langkah 2: Terapkan Hukum Probabilitas Total**
> >
> > $$P(D) = 0{,}20 \cdot 6q + 0{,}35 \cdot 3q + 0{,}45 \cdot q = 0{,}009$$
> >
> > $$1{,}2q + 1{,}05q + 0{,}45q = 0{,}009$$
> >
> > $$2{,}7q = 0{,}009 \Rightarrow q = \frac{0{,}009}{2{,}7} = \frac{1}{300}$$
> >
> > **Langkah 3: Hitung $P(D \mid H)$**
> >
> > $$P(D \mid H) = 6q = \frac{6}{300} = 0{,}020$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}020$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(H) = 0{,}35$ (sama dengan medium) alih-alih menghitung $P(H) = 1 - 0{,}45 - 0{,}35 = 0{,}20$.
> > > - Tidak menyatakan ketiga probabilitas dalam satu variabel $q$; mencoba menyelesaikan sistem 3 persamaan dengan 3 variabel secara terpisah padahal sudah ada relasi linear.
> >
> > > [!CAUTION] Red Flags
> > > - Ketika ada relasi proporsional antar probabilitas bersyarat → nyatakan semua dalam satu variabel dan gunakan Law of Total Probability sebagai satu persamaan.

---

## **No. 155**

A policy covers a gas furnace for one year. During that year, only one of three problems can occur:

(i) The igniter switch may need to be replaced at a cost of 60. There is a 0.10 probability of this.  
(ii) The pilot light may need to be replaced at a cost of 200. There is a 0.05 probability of this.  
(iii) The furnace may need to be replaced at a cost of 3000. There is a 0.01 probability of this.  

Calculate the deductible that would produce an expected claim payment of 30.

(A) 100  
(B) At least 100 but less than 150  
(C) At least 150 but less than 200  
(D) At least 200 but less than 250  
(E) At least 250  

> [!summary]+ **Jawaban No. 155**
>
> **(C). At least 150 but less than 200**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran klaim dengan deductible $d$: bayar jika kerugian $> d$, yaitu $\max(\text{loss} - d,\, 0)$.
> >
> > Nilai harapan: $E[\text{pembayaran}] = \sum_i P(\text{kejadian}_i) \cdot \max(\text{biaya}_i - d,\, 0) = 30$.
>
> **Diketahui:**
> - Tiga kejadian: biaya 60 (prob 0.10), 200 (prob 0.05), 3000 (prob 0.01)
> - Target: cari $d$ sehingga $E[\text{pembayaran}] = 30$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Uji Deductible $d < 60$**
> >
> > $$E = 0{,}10(60-d) + 0{,}05(200-d) + 0{,}01(3000-d) = 0{,}16(d) \text{ ... }$$
> >
> > $$= 6 - 0{,}10d + 10 - 0{,}05d + 30 - 0{,}01d = 46 - 0{,}16d = 30$$
> >
> > $$d = \frac{16}{0{,}16} = 100$$
> >
> > Namun $d = 100 > 60$, sehingga asumsi $d < 60$ tidak konsisten. ✗
> >
> > **Langkah 2: Uji Deductible $60 \leq d < 200$**
> >
> > Jika $d \geq 60$: klaim biaya 60 tidak dibayar ($60 - d \leq 0$). Hanya dua kejadian yang menghasilkan pembayaran:
> >
> > $$E = 0{,}05(200 - d) + 0{,}01(3000 - d) = 30$$
> >
> > $$10 - 0{,}05d + 30 - 0{,}01d = 30$$
> >
> > $$0{,}06d = 10 \Rightarrow d = \frac{10}{0{,}06} = 166{,}67$$
> >
> > Verifikasi: $60 \leq 166{,}67 < 200$ ✓ — konsisten dengan asumsi.
> >
> > **Hasil Akhir:** **(C)**. At least 150 but less than 200 ($d \approx 166{,}67$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memasukkan semua tiga kejadian dalam persamaan tanpa memeriksa apakah deductible melampaui biaya kejadian tertentu — kejadian yang biayanya $\leq d$ tidak menghasilkan pembayaran.
> > > - Memilih jawaban (A) $d = 100$ berdasarkan hasil langkah 1 tanpa memeriksa konsistensi asumsi.
> >
> > > [!CAUTION] Red Flags
> > > - Soal deductible dengan beberapa titik kerugian diskrit → selalu uji rentang $d$ secara berurutan dan verifikasi konsistensi asumsi.

---

## **No. 156**

On a block of ten houses, $k$ are not insured. A tornado randomly damages three houses on the block.

The probability that none of the damaged houses are insured is $1/120$.

Calculate the probability that at most one of the damaged houses is insured.

(A) 1/5  
(B) 7/40  
(C) 11/60  
(D) 49/60  
(E) 119/120  

> [!summary]+ **Jawaban No. 156**
>
> **(C). $11/60$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas Hipergeometrik:
> >
> > $$P(\text{0 terasuransi rusak}) = \frac{\dbinom{k}{3}\dbinom{10-k}{0}}{\dbinom{10}{3}} = \frac{1}{120}$$
>
> **Diketahui:**
> - 10 rumah: $k$ tidak diasuransikan, $10-k$ diasuransikan
> - 3 rumah rusak dipilih acak
> - $P(\text{0 terasuransi rusak}) = 1/120$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $k$ dari Kondisi**
> >
> > $$\frac{\binom{k}{3}}{\binom{10}{3}} = \frac{1}{120} \Rightarrow \binom{k}{3} = \frac{120}{120} = 1$$
> >
> > Alternatif: $\binom{10}{3} = 120$, sehingga $\binom{k}{3} = 1$.
> >
> > $$\binom{k}{3} = \frac{k(k-1)(k-2)}{6} = 1 \Rightarrow k(k-1)(k-2) = 6 = 3 \times 2 \times 1$$
> >
> > Karena $k$ bulat: $k = 3$.
> >
> > **Langkah 2: Hitung $P(\text{tepat 0 terasuransi rusak})$**
> >
> > $$P(0) = \frac{\binom{3}{0}\binom{7}{3}}{\binom{10}{3}} = \frac{1 \times 35}{120} = \frac{35}{120} = \frac{7}{24}$$
> >
> > (Konfirmasi: $\binom{3}{3}/\binom{10}{3} = 1/120$ ✓)
> >
> > **Langkah 3: Hitung $P(\text{tepat 1 terasuransi rusak})$**
> >
> > $$P(1) = \frac{\binom{3}{1}\binom{7}{2}}{\binom{10}{3}} = \frac{3 \times 21}{120} = \frac{63}{120} = \frac{21}{40}$$
> >
> > **Langkah 4: Hitung $P(\text{paling banyak 1 terasuransi rusak})$**
> >
> > $$P(\leq 1) = P(0) + P(1) = \frac{1}{120} + \frac{63}{120} = \frac{64}{120} = \frac{8}{15}$$
> >
> > Tunggu — periksa ulang. $P(0)$ dalam konteks ini adalah "0 dari 3 yang rusak adalah terasuransi", artinya semua 3 yang rusak adalah tidak terasuransi (dari kelompok $k = 3$):
> >
> > $$P(0 \text{ terasuransi rusak}) = \frac{\binom{3}{3}\binom{7}{0}}{\binom{10}{3}} = \frac{1}{120}$$ ✓
> >
> > $$P(1 \text{ terasuransi rusak}) = \frac{\binom{7}{1}\binom{3}{2}}{\binom{10}{3}} = \frac{7 \times 3}{120} = \frac{21}{120}$$
> >
> > $$P(\leq 1) = \frac{1}{120} + \frac{21}{120} = \frac{22}{120} = \frac{11}{60}$$
> >
> > **Hasil Akhir:** **(C)**. $11/60$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "tidak diasuransikan" = "terasuransi" sehingga menukar peran $k$ dan $10-k$ dalam formula; harus jelas mana kelompok mana.
> > > - Menghitung $\binom{7}{1}\binom{3}{2}$ vs $\binom{3}{1}\binom{7}{2}$ — perlu berhati-hati: 7 = terasuransi (yang bisa rusak tapi kita tidak hitung), 3 = tidak diasuransikan. "1 terasuransi rusak" berarti 1 dari kelompok terasuransi dan 2 dari kelompok tidak terasuransi.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu definisikan dengan jelas dua kelompok (terasuransi vs tidak) sebelum menerapkan Hipergeometrik.

---

## **No. 157**

In a casino game, a gambler selects four different numbers from the first twelve positive integers. The casino then randomly draws nine numbers without replacement from the first twelve positive integers. The gambler wins the jackpot if the casino draws all four of the gambler's selected numbers.

Calculate the probability that the gambler wins the jackpot.

(A) 0.002  
(B) 0.255  
(C) 0.296  
(D) 0.573  
(E) 0.625  

> [!summary]+ **Jawaban No. 157**
>
> **(B). $0{,}255$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Hipergeometrik: dari 12 angka (4 "merah" = pilihan penjudi, 8 "biru" = sisanya), casino menarik 9. Jackpot jika semua 4 merah tertarik:
> >
> > $$P = \frac{\binom{4}{4}\binom{8}{5}}{\binom{12}{9}}$$
>
> **Diketahui:**
> - 12 angka: 4 dipilih penjudi, 8 sisanya
> - Casino menarik 9 dari 12 tanpa pengembalian
> - Jackpot: semua 4 angka penjudi masuk dalam 9 yang ditarik
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Reframe Masalah**
> >
> > Casino menarik 9 dari 12 $\equiv$ casino meninggalkan 3 dari 12. Jackpot terjadi jika tidak ada satupun dari 4 angka penjudi yang ditinggalkan, yaitu semua 3 yang ditinggalkan berasal dari 8 angka bukan-pilihan penjudi.
> >
> > **Langkah 2: Terapkan Formula Hipergeometrik**
> >
> > $$P(\text{jackpot}) = \frac{\binom{4}{4}\binom{8}{5}}{\binom{12}{9}} = \frac{1 \times 56}{220} = \frac{56}{220} = 0{,}2545$$
> >
> > **Catatan:** $\binom{12}{9} = \binom{12}{3} = 220$ dan $\binom{8}{5} = \binom{8}{3} = 56$.
> >
> > **Hasil Akhir:** **(B)**. $0{,}255$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{12}{4}$ (memilih 4 dari 12) sebagai penyebut alih-alih $\binom{12}{9}$ — konteks soal adalah casino menarik 9, bukan 4.
> > > - Mengira probabilitas adalah $(4/12) \times (3/11) \times (2/10) \times (1/9)$ — ini adalah probabilitas 4 pertama yang ditarik semuanya adalah pilihan penjudi, bukan bahwa keempat pilihan ada dalam 9 yang ditarik.
> >
> > > [!CAUTION] Red Flags
> > > - Reframe "9 dari 12 dipilih, apakah 4 spesifik termasuk?" sebagai masalah Hipergeometrik standar; gunakan simmetri $\binom{n}{k} = \binom{n}{n-k}$.

---

## **No. 158**

The number of days an employee is sick each month is modeled by a Poisson distribution with mean 1. The numbers of sick days in different months are mutually independent.

Calculate the probability that an employee is sick more than two days in a three-month period.

(A) 0.199  
(B) 0.224  
(C) 0.423  
(D) 0.577  
(E) 0.801  

> [!summary]+ **Jawaban No. 158**
>
> **(D). $0{,}577$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Sifat reproduktif Poisson: $X_1, X_2, X_3 \sim \text{Poisson}(1)$ independen $\Rightarrow N = X_1 + X_2 + X_3 \sim \text{Poisson}(3)$.
> >
> > $$P(N > 2) = 1 - P(N \leq 2) = 1 - e^{-3}\sum_{k=0}^{2}\frac{3^k}{k!}$$
>
> **Diketahui:**
> - Per bulan: $X_i \sim \text{Poisson}(1)$, independen
> - $N = X_1 + X_2 + X_3 \sim \text{Poisson}(3)$
> - Target: $P(N > 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N \leq 2)$**
> >
> > $$P(N \leq 2) = e^{-3}\left(\frac{3^0}{0!} + \frac{3^1}{1!} + \frac{3^2}{2!}\right) = e^{-3}(1 + 3 + 4{,}5) = 8{,}5\,e^{-3}$$
> >
> > $$= 8{,}5 \times 0{,}04979 \approx 0{,}4232$$
> >
> > **Langkah 2: Hitung $P(N > 2)$**
> >
> > $$P(N > 2) = 1 - 0{,}4232 = 0{,}5768 \approx 0{,}577$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}577$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Melaporkan $P(N \leq 2) \approx 0{,}423$ sebagai jawaban (pilihan C) — soal meminta $P(N > 2)$, yaitu komplemennya.
> > > - Tidak menjumlahkan parameter Poisson: menggunakan $\lambda = 1$ (per bulan) bukan $\lambda = 3$ (tiga bulan).
> >
> > > [!CAUTION] Red Flags
> > > - "More than two" = $P(N > 2) = 1 - P(N \leq 2)$; selalu ambil komplemen jika menghitung ekor atas.

---

## **No. 159**

The number of traffic accidents per week at intersection Q has a Poisson distribution with mean 3. The number of traffic accidents per week at intersection R has a Poisson distribution with mean 1.5.

Let $A$ be the probability that the number of accidents at intersection Q exceeds its mean.  
Let $B$ be the corresponding probability for intersection R.  

Calculate $B - A$.

(A) 0.00  
(B) 0.09  
(C) 0.13  
(D) 0.19  
(E) 0.31  

> [!summary]+ **Jawaban No. 159**
>
> **(B). $0{,}09$**
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
> > $N \sim \text{Poisson}(\lambda)$: $P(N > \lambda) = 1 - \displaystyle\sum_{k=0}^{\lfloor\lambda\rfloor} \frac{e^{-\lambda}\lambda^k}{k!}$
>
> **Diketahui:**
> - $N_Q \sim \text{Poisson}(3)$: $A = P(N_Q > 3)$
> - $N_R \sim \text{Poisson}(1{,}5)$: $B = P(N_R > 1{,}5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $A = P(N_Q > 3)$**
> >
> > $$A = 1 - P(N_Q \leq 3) = 1 - e^{-3}\left(1 + 3 + \frac{9}{2} + \frac{27}{6}\right) = 1 - e^{-3}\left(1 + 3 + 4{,}5 + 4{,}5\right)$$
> >
> > $$= 1 - 13\,e^{-3} = 1 - 13 \times 0{,}04979 = 1 - 0{,}6472 = 0{,}3528$$
> >
> > **Langkah 2: Hitung $B = P(N_R > 1{,}5)$**
> >
> > Karena mean = 1.5, "melebihi mean" berarti $N_R \geq 2$ (bilangan bulat pertama di atas 1.5):
> >
> > $$B = 1 - P(N_R \leq 1) = 1 - e^{-1{,}5}\left(1 + 1{,}5\right) = 1 - 2{,}5\,e^{-1{,}5}$$
> >
> > $$= 1 - 2{,}5 \times 0{,}22313 = 1 - 0{,}55783 = 0{,}4422$$
> >
> > **Langkah 3: Hitung $B - A$**
> >
> > $$B - A = 0{,}4422 - 0{,}3528 = 0{,}0894 \approx 0{,}09$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}09$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk $N_R > 1{,}5$: karena $N_R$ diskrit (bilangan bulat), maka $N_R > 1{,}5 \equiv N_R \geq 2$, artinya $P(N_R \leq 1)$ yang dikurangkan — bukan $P(N_R \leq 1{,}5)$.
> > > - Mengira $A = B$ karena "sama-sama melebihi mean" — ini salah karena bentuk distribusi Poisson berbeda untuk $\lambda = 3$ dan $\lambda = 1{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - Poisson adalah diskrit → "melebihi mean non-integer" harus diinterpretasikan sebagai $\geq \lceil\lambda\rceil$.

---

## **No. 160**

Losses due to accidents at an amusement park are exponentially distributed. An insurance company offers the park owner two different policies, with different premiums, to insure against losses due to accidents at the park.

Policy A has a deductible of 1.44. For a random loss, the probability is 0.640 that under this policy, the insurer will pay some money to the park owner. Policy B has a deductible of $d$. For a random loss, the probability is 0.512 that under this policy, the insurer will pay some money to the park owner.

Calculate $d$.

(A) 0.960  
(B) 1.152  
(C) 1.728  
(D) 1.800  
(E) 2.160  

> [!summary]+ **Jawaban No. 160**
>
> **(E). $2{,}160$**
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
> > $L \sim \text{Exp}(\mu)$ (kontinu, support $l > 0$; $\mu$ = parameter skala/mean):
> >
> > $$P(L > d) = e^{-d/\mu}$$
> >
> > Insurer membayar jika $L > d$, sehingga $P(\text{bayar}) = P(L > d) = e^{-d/\mu}$.
>
> **Diketahui:**
> - $L \sim \text{Exp}(\mu)$, $\mu$ tidak diketahui
> - Policy A: deductible $= 1{,}44$, $P(\text{bayar}) = 0{,}640$
> - Policy B: deductible $= d$, $P(\text{bayar}) = 0{,}512$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\mu$ dari Policy A**
> >
> > $$e^{-1{,}44/\mu} = 0{,}640 \Rightarrow -\frac{1{,}44}{\mu} = \ln(0{,}640) = -0{,}44629$$
> >
> > $$\mu = \frac{1{,}44}{0{,}44629} = 3{,}2266$$
> >
> > **Langkah 2: Tentukan $d$ dari Policy B**
> >
> > $$e^{-d/3{,}2266} = 0{,}512 \Rightarrow -\frac{d}{3{,}2266} = \ln(0{,}512) = -0{,}6694$$
> >
> > $$d = 0{,}6694 \times 3{,}2266 = 2{,}160$$
> >
> > **Hasil Akhir:** **(E)**. $d = 2{,}160$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(L \leq d) = 0{,}640$ alih-alih $P(L > d) = 0{,}640$ — insurer membayar jika kerugian **melebihi** deductible.
> > > - Mengira $d \propto -\ln(P)$ langsung tanpa melalui $\mu$ — perlu parameter skala terlebih dahulu.
> >
> > > [!CAUTION] Red Flags
> > > - "Insurer pays some money" = "loss exceeds deductible" = $P(L > d) = e^{-d/\mu}$; jangan tukar arah ketidaksetaraan.

---

## **No. 161**

The distribution of the size of claims paid under an insurance policy has probability density function

$$f(x) = \begin{cases} cx^a, & 0 < x < 5 \\ 0, & \text{otherwise} \end{cases}$$

where $a > 0$ and $c > 0$.

For a randomly selected claim, the probability that the size of the claim is less than 3.75 is 0.4871.

Calculate the probability that the size of a randomly selected claim is greater than 4.

(A) 0.404  
(B) 0.428  
(C) 0.500  
(D) 0.572  
(E) 0.596  

> [!summary]+ **Jawaban No. 161**
>
> **(B). $0{,}428$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Normalisasi PDF: $\displaystyle\int_0^5 cx^a\,dx = c \cdot \frac{5^{a+1}}{a+1} = 1 \Rightarrow c = \frac{a+1}{5^{a+1}}$
> >
> > CDF: $F(x) = \left(\dfrac{x}{5}\right)^{a+1}$ untuk $0 < x < 5$.
>
> **Diketahui:**
> - $f(x) = cx^a$, support $(0, 5)$
> - $P(X < 3{,}75) = 0{,}4871$
> - Target: $P(X > 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan CDF**
> >
> > Dari normalisasi: $c = (a+1)/5^{a+1}$, sehingga:
> >
> > $$F(x) = \int_0^x \frac{a+1}{5^{a+1}} t^a\,dt = \frac{x^{a+1}}{5^{a+1}} = \left(\frac{x}{5}\right)^{a+1}$$
> >
> > **Langkah 2: Tentukan $a$ dari Kondisi**
> >
> > $$F(3{,}75) = \left(\frac{3{,}75}{5}\right)^{a+1} = (0{,}75)^{a+1} = 0{,}4871$$
> >
> > $$(a+1)\ln(0{,}75) = \ln(0{,}4871)$$
> >
> > $$(a+1) \times (-0{,}28768) = -0{,}71929$$
> >
> > $$a+1 = \frac{0{,}71929}{0{,}28768} = 2{,}5 \Rightarrow a = 1{,}5$$
> >
> > **Langkah 3: Hitung $P(X > 4)$**
> >
> > $$P(X > 4) = 1 - F(4) = 1 - \left(\frac{4}{5}\right)^{2{,}5} = 1 - (0{,}8)^{2{,}5}$$
> >
> > $$(0{,}8)^{2{,}5} = (0{,}8)^2 \times (0{,}8)^{0{,}5} = 0{,}64 \times 0{,}89443 = 0{,}57243$$
> >
> > $$P(X > 4) = 1 - 0{,}57243 \approx 0{,}428$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}428$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa normalisasi memberikan bentuk CDF yang bersih $F(x) = (x/5)^{a+1}$; tidak perlu membawa konstanta $c$ secara terpisah.
> > > - Salah menghitung $(0{,}8)^{2{,}5}$: harus $(0{,}8)^2 \times \sqrt{0{,}8}$, bukan $(0{,}8)^2 \times 0{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - PDF berbentuk power-law pada interval terbatas → CDF berbentuk power ratio $(x/b)^{a+1}$; manfaatkan ini untuk menyederhanakan.

---

## **No. 162**

Company XYZ provides a warranty on a product that it produces. Each year, the number of warranty claims follows a Poisson distribution with mean $c$. The probability that no warranty claims are received in any given year is 0.60.

Company XYZ purchases an insurance policy that will reduce its overall warranty claim payment costs. The insurance policy will pay nothing for the first warranty claim received and 5000 for each claim thereafter until the end of the year.

Calculate the expected amount of annual insurance policy payments to Company XYZ.

(A) 554  
(B) 872  
(C) 1022  
(D) 1354  
(E) 1612  

> [!summary]+ **Jawaban No. 162**
>
> **(A). $554$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Jika $N \sim \text{Poisson}(c)$, maka $E[N] = c$ dan $P(N = 0) = e^{-c}$.
> >
> > Pembayaran asuransi: $5000 \cdot \max(N - 1,\, 0) = 5000(N - 1)$ jika $N \geq 1$.
> >
> > $$E[5000 \max(N-1, 0)] = 5000\bigl(E[N] - P(N \geq 1)\bigr) = 5000\bigl(E[N] - 1 + P(N=0)\bigr)$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(c)$, $P(N=0) = e^{-c} = 0{,}60$
> - $c = -\ln(0{,}60) \approx 0{,}5108$
> - Asuransi membayar 0 untuk klaim pertama, 5000 per klaim selanjutnya
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$**
> >
> > $$e^{-c} = 0{,}60 \Rightarrow c = -\ln(0{,}60) \approx 0{,}5108$$
> >
> > **Langkah 2: Nyatakan Total Pembayaran Asuransi**
> >
> > Asuransi membayar $5000 \cdot (N-1)$ untuk $N = 2, 3, 4, \ldots$, dan 0 untuk $N = 0$ atau $N = 1$.
> >
> > $$E[\text{pembayaran}] = 5000\sum_{n=2}^{\infty}(n-1)\,P(N=n)$$
> >
> > $$= 5000\left[\sum_{n=1}^{\infty}n\,P(N=n) - \sum_{n=1}^{\infty}P(N=n)\right]$$
> >
> > $$= 5000\left[E[N] - P(N \geq 1)\right]$$
> >
> > **Langkah 3: Hitung Setiap Komponen**
> >
> > $$E[N] = c = 0{,}5108$$
> >
> > $$P(N \geq 1) = 1 - P(N = 0) = 1 - 0{,}60 = 0{,}40$$
> >
> > **Langkah 4: Hitung Nilai Harapan Pembayaran**
> >
> > $$E[\text{pembayaran}] = 5000(0{,}5108 - 0{,}40) = 5000 \times 0{,}1108 = 554$$
> >
> > **Hasil Akhir:** **(A)**. $554$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira pembayaran total = $5000 \cdot N$ (membayar untuk semua klaim) — soal menyebut klaim pertama tidak dibayar, sehingga pembayaran = $5000 \cdot \max(N-1, 0)$.
> > > - Salah menyederhanakan: $E[\max(N-1, 0)] = E[N] - P(N \geq 1)$ bukan $E[N] - 1$.
> >
> > > [!CAUTION] Red Flags
> > > - "Nothing for the first claim, $k$ for each thereafter" → total = $k \cdot \max(N-1, 0)$; gunakan identitas $E[\max(N-1,0)] = E[N] - (1 - P(N=0))$.

---

## **No. 163**

For a certain health insurance policy, losses are uniformly distributed on the interval $[0, b]$. The policy has a deductible of 180 and the expected value of the unreimbursed portion of a loss is 144.

Calculate $b$.

(A) 236  
(B) 288  
(C) 388  
(D) 450  
(E) 468  

> [!summary]+ **Jawaban No. 163**
>
> **(D). $b = 450$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Bagian kerugian yang tidak diganti (unreimbursed): $X = \begin{cases} L, & L \leq 180 \\ 180, & L > 180 \end{cases}$
> >
> > $E[X] = \int_0^{180} \frac{l}{b}\,dl + 180 \cdot P(L > 180)$
>
> **Diketahui:**
> - $L \sim U(0, b)$, deductible $d = 180$
> - $E[X] = 144$ (bagian yang tidak diganti)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Ekspresi $E[X]$**
> >
> > $$E[X] = \int_0^{180} l \cdot \frac{1}{b}\,dl + 180 \cdot \frac{b - 180}{b}$$
> >
> > $$= \frac{1}{b} \cdot \frac{180^2}{2} + \frac{180(b-180)}{b}$$
> >
> > $$= \frac{180^2}{2b} + \frac{180b - 180^2}{b} = \frac{180^2}{2b} + 180 - \frac{180^2}{b}$$
> >
> > $$= 180 - \frac{180^2}{2b}$$
> >
> > **Langkah 2: Selesaikan untuk $b$**
> >
> > $$180 - \frac{180^2}{2b} = 144$$
> >
> > $$\frac{180^2}{2b} = 36 \Rightarrow 2b = \frac{180^2}{36} = \frac{32{.}400}{36} = 900 \Rightarrow b = 450$$
> >
> > **Hasil Akhir:** **(D)**. $b = 450$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "unreimbursed portion" = $E[\text{kerugian}] - E[\text{pembayaran insurer}]$ yang memberikan persamaan berbeda — ini ekuivalen tetapi lebih panjang; lebih mudah langsung dengan definisi $X$.
> > > - Lupa suku $180 \cdot P(L > 180)$: ketika kerugian melebihi 180, bagian yang tidak diganti tetap 180 (bukan $L - 180$).
> >
> > > [!CAUTION] Red Flags
> > > - "Unreimbursed portion" = $\min(L, d)$ — polisiholder menanggung seluruh kerugian hingga deductible, lalu tetap menanggung sebesar deductible jika kerugian lebih besar.

---

## **No. 164**

The working lifetime, in years, of a particular model of bread maker is normally distributed with mean 10 and variance 4.

Calculate the 12th percentile of the working lifetime, in years.

(A) 5.30  
(B) 7.65  
(C) 8.41  
(D) 12.35  
(E) 14.70  

> [!summary]+ **Jawaban No. 164**
>
> **(B). $7{,}65$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.1 |
>
> > [!info]+ **Rumus**
> >
> > Persentil ke-$p$ dari $X \sim N(\mu, \sigma^2)$:
> >
> > $$x_p = \mu + z_p \cdot \sigma$$
> >
> > di mana $z_p = \Phi^{-1}(p/100)$ adalah kuantil distribusi normal standar.
>
> **Diketahui:**
> - $X \sim N(10, 4)$, $\sigma = 2$
> - Target: persentil ke-12, yaitu $x$ sehingga $P(X \leq x) = 0{,}12$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $z$-score untuk Persentil ke-12**
> >
> > Dari tabel Normal standar: $\Phi(z) = 0{,}12 \Rightarrow z \approx -1{,}175$
> >
> > (Karena $0{,}12 < 0{,}50$, $z$ negatif.)
> >
> > **Langkah 2: Konversi ke Skala Asli**
> >
> > $$x = \mu + z \cdot \sigma = 10 + (-1{,}175)(2) = 10 - 2{,}35 = 7{,}65$$
> >
> > **Hasil Akhir:** **(B)**. $7{,}65$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $z = +1{,}175$ (persentil ke-88) alih-alih $z = -1{,}175$ — persentil ke-12 berada di bawah mean, sehingga $z$ harus negatif.
> > > - Menggunakan $\sigma^2 = 4$ dalam rumus $x = \mu + z\sigma$ alih-alih $\sigma = \sqrt{4} = 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Persentil $< 50\%$ → $z < 0$ → hasil $x < \mu$; persentil $> 50\%$ → $z > 0$ → hasil $x > \mu$.

---

## **No. 165**

The profits of life insurance companies A and B are normally distributed with the same mean. The variance of company B's profit is 2.25 times the variance of company A's profit. The 14th percentile of company A's profit is the same as the $p$th percentile of company B's profit.

Calculate $p$.

(A) 5.3  
(B) 9.3  
(C) 21.0  
(D) 23.6  
(E) 31.6  

> [!summary]+ **Jawaban No. 165**
>
> **(D). $p = 23{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.1 |
>
> > [!info]+ **Rumus**
> >
> > Jika $X_A \sim N(\mu, \sigma_A^2)$ dan $X_B \sim N(\mu, \sigma_B^2)$ dengan $\sigma_B = 1{,}5\,\sigma_A$, maka nilai yang sama $x^*$ memiliki $z$-score berbeda di kedua distribusi:
> >
> > $$z_A = \frac{x^* - \mu}{\sigma_A}, \quad z_B = \frac{x^* - \mu}{\sigma_B} = \frac{z_A \cdot \sigma_A}{\sigma_B} = \frac{z_A}{1{,}5}$$
>
> **Diketahui:**
> - $X_A \sim N(\mu, \sigma_A^2)$, $X_B \sim N(\mu, \sigma_B^2)$ dengan $\sigma_B^2 = 2{,}25\,\sigma_A^2 \Rightarrow \sigma_B = 1{,}5\,\sigma_A$
> - Persentil ke-14 dari $X_A$ = persentil ke-$p$ dari $X_B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $z$-score untuk Persentil ke-14**
> >
> > Dari tabel: $\Phi^{-1}(0{,}14) \approx -1{,}08$
> >
> > Jadi nilai yang bersangkutan: $x^* = \mu + (-1{,}08)\,\sigma_A = \mu - 1{,}08\,\sigma_A$
> >
> > **Langkah 2: Hitung $z$-score di Distribusi B**
> >
> > $$z_B = \frac{x^* - \mu}{\sigma_B} = \frac{\mu - 1{,}08\,\sigma_A - \mu}{1{,}5\,\sigma_A} = \frac{-1{,}08}{1{,}5} = -0{,}72$$
> >
> > **Langkah 3: Tentukan Persentil**
> >
> > $$p = \Phi(-0{,}72) \approx 0{,}2358 \Rightarrow p \approx 23{,}6$$
> >
> > **Hasil Akhir:** **(D)**. $p = 23{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira persentil yang sama di dua distribusi dengan mean sama tetapi variansi berbeda → bukan; nilai numerik sama tetapi $z$-score berbeda karena $\sigma$ berbeda.
> > > - Menggunakan $\sigma_B^2 = 2{,}25$ langsung sebagai $\sigma_B$ — harus ambil akar: $\sigma_B = \sqrt{2{,}25} = 1{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - "Variance adalah $k$ kali variance lain" → $\sigma$ adalah $\sqrt{k}$ kali, bukan $k$ kali.

---

## **No. 166**

The distribution of values of the retirement package offered by a company to new employees is modeled by the probability density function

$$f(x) = \frac{1}{5}e^{-(x-5)/5}, \quad x > 5$$

Calculate the variance of the retirement package value for a new employee, given that the value is at least 10.

(A) 15  
(B) 20  
(C) 25  
(D) 30  
(E) 35  

> [!summary]+ **Jawaban No. 166**
>
> **(C). $25$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Sifat memoryless distribusi Eksponensial: jika $X \sim \text{Exp}(\theta)$ dan $c$ adalah konstanta, maka:
> >
> > $$[X - c \mid X > c] \overset{d}{=} X$$
> >
> > Sehingga $\text{Var}(X \mid X > c) = \text{Var}(X) = \theta^2$.
>
> **Diketahui:**
> - $f(x) = \frac{1}{5}e^{-(x-5)/5}$ untuk $x > 5$: ini adalah distribusi Eksponensial dengan mean $\theta = 5$, digeser ke kanan sebesar 5
> - Yaitu: $X - 5 \sim \text{Exp}(5)$, sehingga $\text{Var}(X) = 25$
> - Target: $\text{Var}(X \mid X \geq 10)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Distribusi Bersyarat**
> >
> > PDF bersyarat diberikan $X \geq 10$:
> >
> > $$f(x \mid X \geq 10) = \frac{f(x)}{P(X \geq 10)} = \frac{\frac{1}{5}e^{-(x-5)/5}}{e^{-1}} = \frac{1}{5}e^{-(x-10)/5}, \quad x > 10$$
> >
> > Ini adalah PDF Eksponensial yang digeser ke 10 dengan mean $\theta = 5$.
> >
> > **Langkah 2: Gunakan Sifat Memoryless**
> >
> > Karena distribusi Eksponensial memiliki sifat memoryless, $(X - 10 \mid X \geq 10) \sim \text{Exp}(5)$:
> >
> > $$\text{Var}(X \mid X \geq 10) = \text{Var}(X - 10 \mid X \geq 10) = \text{Var}(\text{Exp}(5)) = 5^2 = 25$$
> >
> > **Hasil Akhir:** **(C)**. $25$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira kondisi $X \geq 10$ mengubah variansi menjadi berbeda dari 25 — properti memoryless Eksponensial menjamin variansi bersyarat tetap $\theta^2$.
> > > - Mengira distribusi ini bukan Eksponensial karena supportnya mulai dari 5, bukan 0 — ini adalah Eksponensial yang digeser (shifted exponential), bukan distribusi berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - PDF berbentuk $\frac{1}{\theta}e^{-(x-a)/\theta}$ untuk $x > a$ → Eksponensial tergeser; gunakan memoryless property untuk kondisional.

---

## **No. 167**

Insurance companies A and B each earn an annual profit that is normally distributed with the same positive mean. The standard deviation of company A's annual profit is one half of its mean.

In a given year, the probability that company B has a loss (negative profit) is 0.9 times the probability that company A has a loss.

Calculate the ratio of the standard deviation of company B's annual profit to the standard deviation of company A's annual profit.

(A) 0.49  
(B) 0.90  
(C) 0.98  
(D) 1.11  
(E) 1.71  

> [!summary]+ **Jawaban No. 167**
>
> **(C). $0{,}98$**
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
> > $X \sim N(\mu, \sigma_X^2)$: $P(X < 0) = \Phi(-\mu/\sigma_X)$
>
> **Diketahui:**
> - $X_A \sim N(\mu, \sigma_A^2)$ dengan $\sigma_A = \mu/2$
> - $X_B \sim N(\mu, \sigma_B^2)$
> - $P(X_B < 0) = 0{,}9 \cdot P(X_A < 0)$
> - Target: $\sigma_B / \sigma_A$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X_A < 0)$**
> >
> > $$P(X_A < 0) = \Phi\!\left(\frac{0 - \mu}{\sigma_A}\right) = \Phi\!\left(\frac{-\mu}{\mu/2}\right) = \Phi(-2) \approx 0{,}0228$$
> >
> > **Langkah 2: Tentukan $z$-score untuk $P(X_B < 0)$**
> >
> > $$P(X_B < 0) = 0{,}9 \times 0{,}0228 = 0{,}02052$$
> >
> > Dari tabel: $\Phi^{-1}(0{,}02052) \approx -2{,}04$, sehingga:
> >
> > $$\frac{-\mu}{\sigma_B} = -2{,}04 \Rightarrow \sigma_B = \frac{\mu}{2{,}04}$$
> >
> > **Langkah 3: Hitung Rasio**
> >
> > $$\frac{\sigma_B}{\sigma_A} = \frac{\mu/2{,}04}{\mu/2} = \frac{2}{2{,}04} \approx 0{,}98$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}98$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira probabilitas rugi lebih kecil pada B (0.9 kali A) berarti $\sigma_B < \sigma_A$ — ternyata hampir sama ($\sigma_B \approx \sigma_A$) karena faktor 0.9 hanya sedikit menggeser probabilitas ekor.
> > > - Menggunakan $z = -0{,}9 \times 2 = -1{,}8$ (mengalikan $z$-score langsung) — ini salah; harus mengalikan probabilitas dulu, baru cari $z$-score baru.
> >
> > > [!CAUTION] Red Flags
> > > - "Probabilitas rugi B = $k$ kali probabilitas rugi A" → hitung $P_A$ dulu, lalu $P_B = k \cdot P_A$, lalu cari $z_B = \Phi^{-1}(P_B)$.

---

## **No. 168**

Claim amounts at an insurance company are independent of one another. In year one, claim amounts are modeled by a normal random variable $X$ with mean 100 and standard deviation 25. In year two, claim amounts are modeled by the random variable $Y = 1{,}04X + 5$.

Calculate the probability that a random sample of 25 claim amounts in year two average between 100 and 110.

(A) 0.48  
(B) 0.53  
(C) 0.54  
(D) 0.67  
(E) 0.68  

> [!summary]+ **Jawaban No. 168**
>
> **(B). $0{,}53$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.3 Teorema Limit Pusat]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Miller Bab 6–7; Hogg-Tanis-Zimm Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Transformasi linear: jika $X \sim N(\mu, \sigma^2)$ dan $Y = aX + b$, maka $Y \sim N(a\mu + b,\, a^2\sigma^2)$.
> >
> > Rata-rata sampel: $\bar{Y} \sim N\!\left(\mu_Y,\, \frac{\sigma_Y^2}{n}\right)$
>
> **Diketahui:**
> - $X \sim N(100, 625)$, $Y = 1{,}04X + 5$
> - $n = 25$ sampel tahun 2
> - Target: $P(100 < \bar{Y} < 110)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $Y$**
> >
> > $$\mu_Y = 1{,}04(100) + 5 = 109, \quad \sigma_Y = 1{,}04(25) = 26$$
> >
> > **Langkah 2: Distribusi Rata-rata Sampel $\bar{Y}$**
> >
> > $$\bar{Y} \sim N\!\left(109,\, \frac{26^2}{25}\right) = N\!\left(109,\, 27{,}04\right), \quad \sigma_{\bar{Y}} = \frac{26}{5} = 5{,}2$$
> >
> > **Langkah 3: Standardisasi dan Hitung Probabilitas**
> >
> > $$P(100 < \bar{Y} < 110) = P\!\left(\frac{100 - 109}{5{,}2} < Z < \frac{110 - 109}{5{,}2}\right) = P(-1{,}73 < Z < 0{,}19)$$
> >
> > $$= \Phi(0{,}19) - \Phi(-1{,}73) = 0{,}5753 - (1 - 0{,}9582) = 0{,}5753 - 0{,}0418 = 0{,}5335$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}53$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\sigma_Y = 1{,}04 \times 25^2$ (mengalikan variansi, bukan deviasi standar) — transformasi linear: $\sigma_Y = |a| \cdot \sigma_X$.
> > > - Membagi $\sigma_Y^2$ dengan $\sqrt{n}$ alih-alih $n$: variansi dibagi $n$, deviasi standar dibagi $\sqrt{n}$.
> >
> > > [!CAUTION] Red Flags
> > > - "Average of $n$ samples" → gunakan distribusi sampling rata-rata: $\text{SE} = \sigma/\sqrt{n}$, bukan $\sigma/n$.

---

## **No. 169**

An insurance company will cover losses incurred from tornadoes in a single calendar year. However, the insurer will only cover losses for a maximum of three separate tornadoes during this timeframe. Let $X$ be the number of tornadoes that result in at least 50 million in losses, and let $Y$ be the total number of tornadoes. The joint probability function for $X$ and $Y$ is

$$p(x, y) = \begin{cases} c(x + 2y), & x = 0,1,2,3,\; y = 0,1,2,3,\; x \leq y \\ 0, & \text{otherwise} \end{cases}$$

where $c$ is a constant.

Calculate the expected number of tornadoes that result in fewer than 50 million in losses.

(A) 0.19  
(B) 0.28  
(C) 0.76  
(D) 1.00  
(E) 1.10  

> [!summary]+ **Jawaban No. 169**
>
> **(E). $1{,}10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Jumlah tornado kerugian kecil: $W = Y - X$
> >
> > $E[W] = E[Y - X] = E[Y] - E[X]$, dihitung dari distribusi gabungan.
>
> **Diketahui:**
> - $p(x,y) = c(x + 2y)$ untuk $(x, y)$ valid dengan $0 \leq x \leq y \leq 3$
> - Target: $E[Y - X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Daftar Semua Pasangan Valid dan Nilai $x + 2y$**
> >
> > | $(x, y)$ | $x + 2y$ |
> > |:-:|:-:|
> > | $(0,0)$ | 0 |
> > | $(0,1)$ | 2 |
> > | $(0,2)$ | 4 |
> > | $(0,3)$ | 6 |
> > | $(1,1)$ | 3 |
> > | $(1,2)$ | 5 |
> > | $(1,3)$ | 7 |
> > | $(2,2)$ | 6 |
> > | $(2,3)$ | 8 |
> > | $(3,3)$ | 9 |
> >
> > Total = $0 + 2 + 4 + 6 + 3 + 5 + 7 + 6 + 8 + 9 = 50$
> >
> > **Langkah 2: Tentukan $c$**
> >
> > $$c \times 50 = 1 \Rightarrow c = \frac{1}{50}$$
> >
> > **Langkah 3: Hitung $E[Y - X]$ secara Langsung**
> >
> > $$E[Y - X] = \sum_{(x,y)} (y - x) \cdot p(x,y) = \frac{1}{50} \sum_{(x,y)} (y-x)(x+2y)$$
> >
> > | $(x,y)$ | $y-x$ | $x+2y$ | Produk |
> > |:-:|:-:|:-:|:-:|
> > | $(0,0)$ | 0 | 0 | 0 |
> > | $(0,1)$ | 1 | 2 | 2 |
> > | $(0,2)$ | 2 | 4 | 8 |
> > | $(0,3)$ | 3 | 6 | 18 |
> > | $(1,1)$ | 0 | 3 | 0 |
> > | $(1,2)$ | 1 | 5 | 5 |
> > | $(1,3)$ | 2 | 7 | 14 |
> > | $(2,2)$ | 0 | 6 | 0 |
> > | $(2,3)$ | 1 | 8 | 8 |
> > | $(3,3)$ | 0 | 9 | 0 |
> >
> > $$E[Y-X] = \frac{1}{50}(0+2+8+18+0+5+14+0+8+0) = \frac{55}{50} = 1{,}10$$
> >
> > **Hasil Akhir:** **(E)**. $1{,}10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Melupakan pasangan $(0,0)$ yang memberikan $p = 0$ — tetap harus disertakan dalam penjumlahan total untuk menentukan $c$.
> > > - Mencoba menghitung $E[X]$ dan $E[Y]$ secara terpisah dari distribusi marginal (lebih panjang); menghitung $E[Y-X]$ langsung lebih efisien.
> >
> > > [!CAUTION] Red Flags
> > > - Constraint $x \leq y$ membatasi ruang sampel; pastikan hanya pasangan yang memenuhi $0 \leq x \leq y \leq 3$ yang dimasukkan.

---

## **No. 170**

At a polling booth, ballots are cast by ten voters, of whom three are Republicans, two are Democrats, and five are Independents. A local journalist interviews two of these voters, chosen randomly.

Calculate the expectation of the absolute value of the difference between the number of Republicans interviewed and the number of Democrats interviewed.

(A) 1/5  
(B) 7/15  
(C) 3/5  
(D) 11/15  
(E) 1  

> [!summary]+ **Jawaban No. 170**
>
> **(D). $11/15$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Kondisikan pada pemilih pertama yang diwawancarai (Independen, Republik, atau Demokrat), lalu hitung ekspektasi absolut bersyarat.
>
> **Diketahui:**
> - 10 pemilih: 3 R, 2 D, 5 I; dipilih 2 tanpa pengembalian
> - Target: $E[|R_{\text{diw}} - D_{\text{diw}}|]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kondisikan pada Identitas Pemilih Pertama**
> >
> > **Kasus 1: Pemilih pertama Independen** ($P = 5/10 = 1/2$)
> >
> > Sisa: 3R, 2D, 4I dari 9. Pemilih kedua: P(R) = 3/9, P(D) = 2/9, P(I) = 4/9.
> >
> > Selisih absolut:
> > - Kedua Independen (4/9): $|0-0| = 0$
> > - Satu R, satu I (3/9): $|1-0| = 1$
> > - Satu D, satu I (2/9): $|0-1| = 1$
> >
> > $E[|\Delta| \mid \text{pertama I}] = \frac{4}{9}(0) + \frac{3}{9}(1) + \frac{2}{9}(1) = \frac{5}{9}$
> >
> > **Kasus 2: Pemilih pertama Republik** ($P = 3/10$)
> >
> > Sisa: 2R, 2D, 5I dari 9. Pemilih kedua:
> > - R (2/9): $|2-0|=2$
> > - D (2/9): $|1-1|=0$
> > - I (5/9): $|1-0|=1$
> >
> > $E[|\Delta| \mid \text{pertama R}] = \frac{2}{9}(2) + \frac{2}{9}(0) + \frac{5}{9}(1) = \frac{4+0+5}{9} = 1$
> >
> > **Kasus 3: Pemilih pertama Demokrat** ($P = 2/10 = 1/5$)
> >
> > Sisa: 3R, 1D, 5I dari 9. Pemilih kedua:
> > - R (3/9): $|1-1|=0$
> > - D (1/9): $|0-2|=2$
> > - I (5/9): $|0-1|=1$
> >
> > $E[|\Delta| \mid \text{pertama D}] = \frac{3}{9}(0) + \frac{1}{9}(2) + \frac{5}{9}(1) = \frac{0+2+5}{9} = \frac{7}{9}$
> >
> > **Langkah 2: Hukum Ekspektasi Total**
> >
> > $$E[|\Delta|] = \frac{1}{2} \cdot \frac{5}{9} + \frac{3}{10} \cdot 1 + \frac{1}{5} \cdot \frac{7}{9}$$
> >
> > $$= \frac{5}{18} + \frac{3}{10} + \frac{7}{45}$$
> >
> > KPK(18, 10, 45) = 90:
> >
> > $$= \frac{25}{90} + \frac{27}{90} + \frac{14}{90} = \frac{66}{90} = \frac{11}{15}$$
> >
> > **Hasil Akhir:** **(D)**. $11/15$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menghitung $E[|R-D|]$ dari distribusi marginal $R$ dan $D$ secara terpisah — $R$ dan $D$ tidak independen karena sampling tanpa pengembalian.
> > > - Lupa memperhitungkan kemungkinan pemilih kedua adalah Independen (tidak mempengaruhi selisih R−D).
> >
> > > [!CAUTION] Red Flags
> > > - Nilai harapan nilai absolut selisih → kondisikan pada setiap kategori dan gunakan Law of Total Expectation.

---

## **No. 171**

The random variables $X$ and $Y$ have joint probability function $p(x,y)$ for $x = 0, 1$ and $y = 0, 1, 2$.

Suppose $3p(1,1) = p(1,2)$, and $p(1,1)$ maximizes the variance of $XY$.

Calculate the probability that $X$ or $Y$ is 0.

(A) 11/25  
(B) 23/50  
(C) 23/49  
(D) 26/49  
(E) 14/25  

> [!summary]+ **Jawaban No. 171**
>
> **(C). $23/49$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $Z = XY$: karena $X \in \{0,1\}$ dan $Y \in \{0,1,2\}$, maka $Z \in \{0,1,2\}$.
> >
> > $\text{Var}(Z) = E[Z^2] - (E[Z])^2$
>
> **Diketahui:**
> - $p(1,1) = b$, $p(1,2) = 3b$ (dari $3p(1,1) = p(1,2)$)
> - $p(0,0) + p(0,1) + p(0,2) + p(1,0) = 1 - b - 3b = 1 - 4b = a$ (dinotasikan)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan $Z = XY$ dan Distribusinya**
> >
> > - $Z = 0$: terjadi jika $X = 0$ atau $Y = 0$ → $P(Z = 0) = a = 1 - 4b$
> > - $Z = 1$: terjadi jika $X = 1, Y = 1$ → $P(Z = 1) = b$
> > - $Z = 2$: terjadi jika $X = 1, Y = 2$ → $P(Z = 2) = 3b$
> >
> > **Langkah 2: Hitung $\text{Var}(Z)$ sebagai Fungsi $b$**
> >
> > $$E[Z] = 0 \cdot a + 1 \cdot b + 2 \cdot 3b = 7b$$
> >
> > $$E[Z^2] = 0 \cdot a + 1 \cdot b + 4 \cdot 3b = 13b$$
> >
> > $$\text{Var}(Z) = 13b - (7b)^2 = 13b - 49b^2$$
> >
> > **Langkah 3: Maksimumkan $\text{Var}(Z)$ atas $b$**
> >
> > $$\frac{d}{db}\text{Var}(Z) = 13 - 98b = 0 \Rightarrow b = \frac{13}{98}$$
> >
> > **Langkah 4: Hitung $P(X = 0 \text{ atau } Y = 0) = P(Z = 0) = a$**
> >
> > $$a = 1 - 4b = 1 - \frac{4 \times 13}{98} = 1 - \frac{52}{98} = \frac{46}{98} = \frac{23}{49}$$
> >
> > **Hasil Akhir:** **(C)**. $23/49$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menghitung distribusi marginal $X$ dan $Y$ secara terpisah — tidak perlu; cukup bekerja dengan distribusi $Z = XY$.
> > > - Lupa bahwa $P(X = 0 \text{ atau } Y = 0) = P(Z = 0)$ karena $Z = XY = 0$ tepat ketika $X = 0$ atau $Y = 0$.
> >
> > > [!CAUTION] Red Flags
> > > - "Maximizes variance" → turunkan dan samakan nol; verifikasi ini adalah maksimum (bukan minimum) dengan uji turunan kedua: $d^2\text{Var}/db^2 = -98 < 0$ ✓.

---

## **No. 172**

The number of severe storms that strike city J in a year follows a binomial distribution with $n = 5$ and $p = 0.6$. Given that $m$ severe storms strike city J in a year, the number of severe storms that strike city K in the same year is $m$ with probability $1/2$, $m+1$ with probability $1/3$, and $m+2$ with probability $1/6$.

Calculate the expected number of severe storms that strike city J in a year during which 5 severe storms strike city K.

(A) 3.5  
(B) 3.7  
(C) 3.9  
(D) 4.0  
(E) 5.7  

> [!summary]+ **Jawaban No. 172**
>
> **(C). $3{,}9$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes untuk variabel diskrit:
> >
> > $$P(J = j \mid K = 5) = \frac{P(K = 5 \mid J = j)\,P(J = j)}{P(K = 5)}$$
>
> **Diketahui:**
> - $J \sim B(5, 0{,}6)$
> - $K \mid J = m$: nilai $m$ (prob $1/2$), $m+1$ (prob $1/3$), $m+2$ (prob $1/6$)
> - $K = 5$ terjadi hanya jika $J \in \{3, 4, 5\}$
> - Target: $E[J \mid K = 5]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(J = j)$ untuk $j = 3, 4, 5$**
> >
> > $$P(J=3) = \binom{5}{3}(0{,}6)^3(0{,}4)^2 = 10(0{,}216)(0{,}16) = 0{,}3456$$
> >
> > $$P(J=4) = \binom{5}{4}(0{,}6)^4(0{,}4)^1 = 5(0{,}1296)(0{,}4) = 0{,}2592$$
> >
> > $$P(J=5) = \binom{5}{5}(0{,}6)^5 = 0{,}07776$$
> >
> > **Langkah 2: Hitung $P(K = 5 \mid J = j)$**
> >
> > - $P(K=5 \mid J=3) = 1/6$ (harus naik 2)
> > - $P(K=5 \mid J=4) = 1/3$ (harus naik 1)
> > - $P(K=5 \mid J=5) = 1/2$ (harus tetap)
> >
> > **Langkah 3: Hitung $P(K = 5)$**
> >
> > $$P(K=5) = \frac{1}{6}(0{,}3456) + \frac{1}{3}(0{,}2592) + \frac{1}{2}(0{,}07776)$$
> >
> > $$= 0{,}0576 + 0{,}0864 + 0{,}03888 = 0{,}18288$$
> >
> > **Langkah 4: Hitung Probabilitas Posterior**
> >
> > $$P(J=3 \mid K=5) = \frac{0{,}0576}{0{,}18288} \approx 0{,}3150$$
> >
> > $$P(J=4 \mid K=5) = \frac{0{,}0864}{0{,}18288} \approx 0{,}4724$$
> >
> > $$P(J=5 \mid K=5) = \frac{0{,}03888}{0{,}18288} \approx 0{,}2126$$
> >
> > **Langkah 5: Hitung $E[J \mid K = 5]$**
> >
> > $$E[J \mid K=5] = 3(0{,}3150) + 4(0{,}4724) + 5(0{,}2126) \approx 0{,}945 + 1{,}890 + 1{,}063 = 3{,}898 \approx 3{,}9$$
> >
> > **Hasil Akhir:** **(C)**. $3{,}9$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $K = 5$ hanya mungkin jika $J = 5$ — sebenarnya bisa terjadi jika $J = 3$ (naik 2), $J = 4$ (naik 1), atau $J = 5$ (tetap).
> > > - Mengabaikan prior $P(J = j)$ dalam Bayes — probabilitas posterior berbeda dari likelihood.
> >
> > > [!CAUTION] Red Flags
> > > - "Expected value of $J$ given $K$" → Teorema Bayes lengkap; hitung prior, likelihood, dan posterior secara eksplisit.

---

## **No. 173**

Let $N$ denote the number of accidents occurring during one month on the northbound side of a highway and let $S$ denote the number occurring on the southbound side.

Suppose that $N$ and $S$ are jointly distributed as indicated in the table.

| $N \backslash S$ | 0 | 1 | 2 | 3 or more |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0.04 | 0.06 | 0.10 | 0.04 |
| 1 | 0.10 | 0.18 | 0.08 | 0.03 |
| 2 | 0.12 | 0.06 | 0.05 | 0.02 |
| 3 or more | 0.05 | 0.04 | 0.02 | 0.01 |

Calculate $\text{Var}(N \mid N + S = 2)$.

(A) 0.48  
(B) 0.55  
(C) 0.67  
(D) 0.91  
(E) 1.25  

> [!summary]+ **Jawaban No. 173**
>
> **(B). $0{,}55$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $\text{Var}(N \mid N+S=2) = E[N^2 \mid N+S=2] - (E[N \mid N+S=2])^2$
>
> **Diketahui:**
> - Tabel distribusi gabungan $N$ dan $S$
> - Target: $\text{Var}(N \mid N + S = 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Sel dengan $N + S = 2$**
> >
> > $(N, S) \in \{(2,0), (1,1), (0,2)\}$:
> > - $p(2,0) = 0{,}12$
> > - $p(1,1) = 0{,}18$
> > - $p(0,2) = 0{,}10$
> >
> > $$P(N+S=2) = 0{,}12 + 0{,}18 + 0{,}10 = 0{,}40$$
> >
> > **Langkah 2: Distribusi Bersyarat $N \mid N+S=2$**
> >
> > $$P(N=0 \mid N+S=2) = \frac{0{,}10}{0{,}40} = 0{,}25$$
> >
> > $$P(N=1 \mid N+S=2) = \frac{0{,}18}{0{,}40} = 0{,}45$$
> >
> > $$P(N=2 \mid N+S=2) = \frac{0{,}12}{0{,}40} = 0{,}30$$
> >
> > **Langkah 3: Hitung $E[N \mid N+S=2]$**
> >
> > $$E[N \mid N+S=2] = 0(0{,}25) + 1(0{,}45) + 2(0{,}30) = 0 + 0{,}45 + 0{,}60 = 1{,}05$$
> >
> > **Langkah 4: Hitung $E[N^2 \mid N+S=2]$**
> >
> > $$E[N^2 \mid N+S=2] = 0(0{,}25) + 1(0{,}45) + 4(0{,}30) = 0 + 0{,}45 + 1{,}20 = 1{,}65$$
> >
> > **Langkah 5: Hitung Variansi**
> >
> > $$\text{Var}(N \mid N+S=2) = 1{,}65 - (1{,}05)^2 = 1{,}65 - 1{,}1025 = 0{,}5475 \approx 0{,}55$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}55$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi marginal $N$ alih-alih distribusi bersyarat $N \mid N+S=2$.
> > > - Lupa bahwa kondisi $N+S=2$ membatasi ruang sampel; probabilitas bersyarat harus dinormalisasi dengan $P(N+S=2) = 0{,}40$.
> >
> > > [!CAUTION] Red Flags
> > > - Variansi bersyarat: $\text{Var}(X \mid A) = E[X^2 \mid A] - (E[X \mid A])^2$; hitung momen pertama dan kedua dari distribusi bersyarat.

---

## **No. 174**

An insurance company has an equal number of claims in each of three territories. In each territory, only three claim amounts are possible: 100, 500, and 1000. Based on the company's data, the probabilities of each claim amount are:

| | 100 | 500 | 1000 |
|:-:|:-:|:-:|:-:|
| Territory 1 | 0.90 | 0.08 | 0.02 |
| Territory 2 | 0.80 | 0.11 | 0.09 |
| Territory 3 | 0.70 | 0.20 | 0.10 |

Calculate the standard deviation of a randomly selected claim amount.

(A) 254  
(B) 291  
(C) 332  
(D) 368  
(E) 396  

> [!summary]+ **Jawaban No. 174**
>
> **(A). $254$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Karena jumlah klaim sama di tiap wilayah, probabilitas marginal didapat dengan rata-rata:
> >
> > $$P(X = x) = \frac{1}{3}\bigl[P_1(x) + P_2(x) + P_3(x)\bigr]$$
>
> **Diketahui:**
> - 3 wilayah dengan proporsi klaim sama (bobot = $1/3$ masing-masing)
> - Target: $\text{SD}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Marginal**
> >
> > $$P(X=100) = \frac{0{,}90 + 0{,}80 + 0{,}70}{3} = \frac{2{,}40}{3} = 0{,}80$$
> >
> > $$P(X=500) = \frac{0{,}08 + 0{,}11 + 0{,}20}{3} = \frac{0{,}39}{3} = 0{,}13$$
> >
> > $$P(X=1000) = \frac{0{,}02 + 0{,}09 + 0{,}10}{3} = \frac{0{,}21}{3} = 0{,}07$$
> >
> > **Langkah 2: Hitung $E[X]$**
> >
> > $$E[X] = 0{,}80(100) + 0{,}13(500) + 0{,}07(1000) = 80 + 65 + 70 = 215$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 0{,}80(10{.}000) + 0{,}13(250{.}000) + 0{,}07(1{.}000{.}000)$$
> >
> > $$= 8{.}000 + 32{.}500 + 70{.}000 = 110{.}500$$
> >
> > **Langkah 4: Hitung Variansi dan Deviasi Standar**
> >
> > $$\text{Var}(X) = 110{.}500 - 215^2 = 110{.}500 - 46{.}225 = 64{.}275$$
> >
> > $$\text{SD}(X) = \sqrt{64{.}275} \approx 253{,}5 \approx 254$$
> >
> > **Hasil Akhir:** **(A)**. $254$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung deviasi standar tiap wilayah secara terpisah lalu merata-ratakan — ini salah; harus menggabungkan distribusi terlebih dahulu, baru hitung momen.
> > > - Menggunakan $\sqrt{E[\text{Var}]} + \text{Var}(E)$ (hukum variansi total) — ini memberikan hasil yang sama, tapi lebih panjang.
> >
> > > [!CAUTION] Red Flags
> > > - "Equal number of claims in each territory" → rata sederhana probabilitas (bobot $1/3$ per wilayah).

---

## **No. 175**

At the start of a week, a coal mine has a high-capacity storage bin that is half full. During the week, 20 loads of coal are added to the storage bin. Each load of coal has a volume that is normally distributed with mean 1.50 cubic yards and standard deviation 0.25 cubic yards.

During the same week, coal is removed from the storage bin and loaded into 4 railroad cars. The amount of coal loaded into each railroad car is normally distributed with mean 7.25 cubic yards and standard deviation 0.50 cubic yards.

The amounts added to the storage bin or removed from the storage bin are mutually independent.

Calculate the probability that the storage bin contains more coal at the end of the week than it had at the beginning of the week.

(A) 0.56  
(B) 0.63  
(C) 0.67  
(D) 0.75  
(E) 0.98  

> [!summary]+ **Jawaban No. 175**
>
> **(D). $0{,}75$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.2 |
>
> > [!info]+ **Rumus**
> >
> > Kombinasi linear independen dari variabel normal:
> >
> > $$D = \sum_{i=1}^{20} A_i - \sum_{j=1}^{4} R_j \sim N(\mu_D, \sigma_D^2)$$
> >
> > $$\mu_D = 20\,\mu_A - 4\,\mu_R, \quad \sigma_D^2 = 20\,\sigma_A^2 + 4\,\sigma_R^2$$
>
> **Diketahui:**
> - 20 muatan masuk: $A_i \sim N(1{,}50,\, 0{,}25^2)$, independen
> - 4 muatan keluar: $R_j \sim N(7{,}25,\, 0{,}50^2)$, independen
> - Target: $P(D > 0)$ di mana $D = \sum A_i - \sum R_j$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Mean $D$**
> >
> > $$\mu_D = 20(1{,}50) - 4(7{,}25) = 30 - 29 = 1$$
> >
> > **Langkah 2: Hitung Variansi $D$**
> >
> > $$\sigma_D^2 = 20(0{,}25)^2 + 4(0{,}50)^2 = 20(0{,}0625) + 4(0{,}25) = 1{,}25 + 1{,}00 = 2{,}25$$
> >
> > $$\sigma_D = \sqrt{2{,}25} = 1{,}5$$
> >
> > **Langkah 3: Standardisasi dan Hitung $P(D > 0)$**
> >
> > $$P(D > 0) = P\!\left(Z > \frac{0 - 1}{1{,}5}\right) = P(Z > -0{,}67) = \Phi(0{,}67) \approx 0{,}7486 \approx 0{,}75$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}75$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengurangi mean dengan benar (30 − 29 = 1) tetapi salah menjumlahkan variansi: variansi dijumlahkan untuk penjumlahan DAN pengurangan variabel independen.
> > > - Menggunakan $\sigma_D = 20(0{,}25) - 4(0{,}50)$ — deviasi standar tidak bisa dikurangi begitu saja; harus lewat variansi.
> >
> > > [!CAUTION] Red Flags
> > > - Penjumlahan variabel normal independen (dengan tanda positif atau negatif): variansi selalu dijumlahkan (bukan dikurangi).

---

## **No. 176**

An insurance company insures a good driver and a bad driver on the same policy. The table below gives the probability of a given number of claims occurring for each of these drivers in the next ten years.

| Number of claims | Prob. for good driver | Prob. for bad driver |
|:-:|:-:|:-:|
| 0 | 0.5 | 0.2 |
| 1 | 0.3 | 0.3 |
| 2 | 0.2 | 0.4 |
| 3 | 0.0 | 0.1 |

The number of claims occurring for the two drivers are independent.

Calculate the mode of the distribution of the total number of claims occurring on this policy in the next ten years.

(A) 0  
(B) 1  
(C) 2  
(D) 3  
(E) 4  

> [!summary]+ **Jawaban No. 176**
>
> **(C). $2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Karena independen: $P(T = t) = \displaystyle\sum_{g+b=t} P(G=g)\,P(B=b)$
>
> **Diketahui:**
> - $G$ = klaim pengemudi baik: $P(0)=0{,}5$, $P(1)=0{,}3$, $P(2)=0{,}2$
> - $B$ = klaim pengemudi buruk: $P(0)=0{,}2$, $P(1)=0{,}3$, $P(2)=0{,}4$, $P(3)=0{,}1$
> - $T = G + B$, independen
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Distribusi $T$**
> >
> > $$P(T=0) = P(G=0)\,P(B=0) = 0{,}5 \times 0{,}2 = 0{,}10$$
> >
> > $$P(T=1) = P(G=0)\,P(B=1) + P(G=1)\,P(B=0) = 0{,}5(0{,}3) + 0{,}3(0{,}2) = 0{,}15 + 0{,}06 = 0{,}21$$
> >
> > $$P(T=2) = P(G=0)\,P(B=2) + P(G=1)\,P(B=1) + P(G=2)\,P(B=0)$$
> > $$= 0{,}5(0{,}4) + 0{,}3(0{,}3) + 0{,}2(0{,}2) = 0{,}20 + 0{,}09 + 0{,}04 = 0{,}33$$
> >
> > $$P(T=3) = P(G=0)\,P(B=3) + P(G=1)\,P(B=2) + P(G=2)\,P(B=1)$$
> > $$= 0{,}5(0{,}1) + 0{,}3(0{,}4) + 0{,}2(0{,}3) = 0{,}05 + 0{,}12 + 0{,}06 = 0{,}23$$
> >
> > Sisa: $P(T \geq 4) = 1 - 0{,}10 - 0{,}21 - 0{,}33 - 0{,}23 = 0{,}13$
> >
> > **Langkah 2: Identifikasi Mode**
> >
> > | $T$ | $P(T)$ |
> > |:-:|:-:|
> > | 0 | 0.10 |
> > | 1 | 0.21 |
> > | **2** | **0.33** ← maksimum |
> > | 3 | 0.23 |
> > | ≥4 | 0.13 |
> >
> > Mode = 2.
> >
> > **Hasil Akhir:** **(C)**. $2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira mode sama dengan mean $E[T] = E[G] + E[B]$ — mean dan mode tidak harus sama untuk distribusi diskrit asimetris.
> > > - Berhenti setelah menghitung $P(T=0)$ dan $P(T=1)$ tanpa melanjutkan ke $P(T=2)$ — mode bisa berada di nilai yang lebih tinggi.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi total dari dua variabel independen diskrit → hitung distribusi konvolusi secara eksplisit, jangan hanya mengandalkan intuisi.

---

## **No. 177**

In a group of 15 health insurance policyholders diagnosed with cancer, each policyholder has probability 0.90 of receiving radiation and probability 0.40 of receiving chemotherapy. Radiation and chemotherapy treatments are independent events for each policyholder, and the treatments of different policyholders are mutually independent.

The policyholders in this group all have the same health insurance that pays 2 for radiation treatment and 3 for chemotherapy treatment.

Calculate the variance of the total amount the insurance company pays for the radiation and chemotherapy treatments for these 15 policyholders.

(A) 13.5  
(B) 37.8  
(C) 108.0  
(D) 202.5  
(E) 567.0  

> [!summary]+ **Jawaban No. 177**
>
> **(B). $37{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[3.6 Matriks Variansi-Kovariansi]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(n, p)$: $\text{Var}(X) = np(1-p)$
> >
> > Untuk total pembayaran $W = 2X + 3Y$ dengan $X, Y$ independen:
> >
> > $$\text{Var}(W) = 4\,\text{Var}(X) + 9\,\text{Var}(Y)$$
>
> **Diketahui:**
> - $X$ = jumlah penerima radiasi $\sim B(15, 0{,}90)$
> - $Y$ = jumlah penerima kemoterapi $\sim B(15, 0{,}40)$
> - $X$ dan $Y$ independen; total bayar $W = 2X + 3Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Variansi $X$ dan $Y$**
> >
> > $$\text{Var}(X) = 15(0{,}90)(0{,}10) = 1{,}35$$
> >
> > $$\text{Var}(Y) = 15(0{,}40)(0{,}60) = 3{,}60$$
> >
> > **Langkah 2: Hitung $\text{Var}(W)$**
> >
> > $$\text{Var}(W) = 2^2 \cdot \text{Var}(X) + 3^2 \cdot \text{Var}(Y) = 4(1{,}35) + 9(3{,}60) = 5{,}40 + 32{,}40 = 37{,}80$$
> >
> > **Hasil Akhir:** **(B)**. $37{,}8$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengkalikan deviasi standar: $\text{SD}(2X + 3Y) \neq 2\,\text{SD}(X) + 3\,\text{SD}(Y)$ — rumus ini hanya berlaku jika $X$ dan $Y$ sempurna berkorelasi.
> > > - Menggunakan koefisien $2$ dan $3$ langsung (bukan kuadratnya) dalam formula variansi.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$; jika independen, suku kovarians = 0.

---

## **No. 178**

In a large population of patients, 20% have early stage cancer, 10% have advanced stage cancer, and the other 70% do not have cancer. Six patients from this population are randomly selected.

Calculate the expected number of selected patients with advanced stage cancer, given that at least one of the selected patients has early stage cancer.

(A) 0.403  
(B) 0.500  
(C) 0.547  
(D) 0.600  
(E) 0.625  

> [!summary]+ **Jawaban No. 178**
>
> **(C). $0{,}547$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Ekspektasi Total:
> >
> > $$E[Y] = P(X=0)\,E[Y \mid X=0] + P(X \geq 1)\,E[Y \mid X \geq 1]$$
>
> **Diketahui:**
> - $n = 6$; $P(\text{early}) = 0{,}20$, $P(\text{advanced}) = 0{,}10$, $P(\text{none}) = 0{,}70$
> - $X$ = jumlah pasien early stage, $Y$ = jumlah pasien advanced stage
> - Target: $E[Y \mid X \geq 1]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $E[Y]$ dan $P(X = 0)$**
> >
> > $$E[Y] = 6(0{,}10) = 0{,}60$$
> >
> > $$P(X = 0) = (1 - 0{,}20)^6 = (0{,}80)^6 = 0{,}26214$$
> >
> > $$P(X \geq 1) = 1 - (0{,}80)^6 = 0{,}73786$$
> >
> > **Langkah 2: Tentukan $E[Y \mid X = 0]$**
> >
> > Jika $X = 0$ (tidak ada early stage), maka setiap dari 6 pasien memiliki probabilitas bersyarat advanced = $0{,}10/(1-0{,}20) = 0{,}10/0{,}80 = 1/8$ (mengkondisikan pada tidak early).
> >
> > $$E[Y \mid X = 0] = 6 \times \frac{1}{8} = 0{,}75$$
> >
> > **Langkah 3: Gunakan Hukum Ekspektasi Total**
> >
> > $$E[Y] = P(X=0)\,E[Y \mid X=0] + P(X \geq 1)\,E[Y \mid X \geq 1]$$
> >
> > $$0{,}60 = (0{,}26214)(0{,}75) + (0{,}73786)\,E[Y \mid X \geq 1]$$
> >
> > $$0{,}60 - 0{,}19661 = 0{,}73786\,E[Y \mid X \geq 1]$$
> >
> > $$E[Y \mid X \geq 1] = \frac{0{,}40339}{0{,}73786} \approx 0{,}547$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}547$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[Y \mid X \geq 1] = E[Y] = 0{,}60$ — kondisi $X \geq 1$ mengubah distribusi; tidak bisa diabaikan.
> > > - Salah menghitung $E[Y \mid X = 0]$: harus mengkondisikan probabilitas advanced pada "bukan early" ($0{,}10/0{,}80$), bukan tetap $0{,}10$.
> >
> > > [!CAUTION] Red Flags
> > > - "Given $X \geq 1$" → gunakan Law of Total Expectation untuk mengisolasi $E[Y \mid X \geq 1]$ dari $E[Y]$ dan $E[Y \mid X=0]$.

---

## **No. 179**

Four distinct integers are chosen randomly and without replacement from the first twelve positive integers. Let $X$ be the random variable representing the second largest of the four selected integers, and let $p$ be the probability function for $X$.

Determine $p(x)$, for integer values of $x$, where $p(x) > 0$.

(A) $\dfrac{(x-1)(x-2)(12-x)}{990}$

(B) $\dfrac{(x-1)(x-2)(12-x)}{495}$

(C) $\dfrac{(x-1)(12-x)(11-x)}{495}$

(D) $\dfrac{(x-1)(12-x)(11-x)}{990}$

(E) $\dfrac{(10-x)(12-x)(11-x)}{990}$

> [!summary]+ **Jawaban No. 179**
>
> **(A). $p(x) = \dfrac{(x-1)(x-2)(12-x)}{990}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X = x$ menjadi terbesar kedua dari 4 bilangan yang dipilih:
> > - Harus ada tepat 1 bilangan $> x$ (dari $\{x+1, \ldots, 12\}$: ada $12-x$ pilihan)
> > - Harus ada tepat 2 bilangan $< x$ (dari $\{1, \ldots, x-1\}$: ada $x-1$ bilangan, pilih $\binom{x-1}{2}$)
>
> **Diketahui:**
> - 4 bilangan dipilih dari $\{1, \ldots, 12\}$ tanpa pengembalian
> - $X$ = terbesar kedua; $X$ bisa bernilai $3, 4, \ldots, 11$
> - Total cara memilih: $\binom{12}{4} = 495$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Cara Mendapatkan $X = x$**
> >
> > - Pilih 2 bilangan lebih kecil dari $x$: $\binom{x-1}{2}$ cara
> > - Pilih 1 bilangan lebih besar dari $x$ (dari $12-x$ pilihan): $\binom{12-x}{1} = 12-x$ cara
> >
> > $$\text{Cara untuk } X = x: \binom{x-1}{2}(12-x) = \frac{(x-1)(x-2)}{2}(12-x)$$
> >
> > **Langkah 2: Hitung $p(x)$**
> >
> > $$p(x) = \frac{\binom{x-1}{2}(12-x)}{\binom{12}{4}} = \frac{\frac{(x-1)(x-2)}{2}(12-x)}{495} = \frac{(x-1)(x-2)(12-x)}{990}$$
> >
> > **Langkah 3: Verifikasi Support**
> >
> > $X = x$ memerlukan setidaknya 2 bilangan di bawah $x$ ($x \geq 3$) dan setidaknya 1 di atas ($x \leq 11$).
> >
> > Jadi support: $x \in \{3, 4, \ldots, 11\}$.
> >
> > **Hasil Akhir:** **(A)**. $p(x) = \dfrac{(x-1)(x-2)(12-x)}{990}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira terbesar kedua memerlukan 1 bilangan di bawah dan 2 di atas — ini adalah formula untuk terbesar ketiga (atau terkecil kedua).
> > > - Salah menghitung total cara: harus $\binom{12}{4} = 495$, bukan $12^4$ (dengan pengembalian) atau $12 \times 11 \times 10 \times 9$ (berurutan).
> >
> > > [!CAUTION] Red Flags
> > > - "Second largest of 4" = tepat 2 nilai lebih kecil dan tepat 1 nilai lebih besar dari $x$; verifikasi support dengan memeriksa batas atas dan bawah.

---

## **No. 180**

An insurance policy covers losses incurred by a policyholder, subject to a deductible of 10,000. Incurred losses follow a normal distribution with mean 12,000 and standard deviation $c$. The probability that a loss is less than $k$ is 0.9582, where $k$ is a constant.

Given that the loss exceeds the deductible, there is a probability of 0.9500 that it is less than $k$.

Calculate $c$.

(A) 2045  
(B) 2267  
(C) 2393  
(D) 2505  
(E) 2840  

> [!summary]+ **Jawaban No. 180**
>
> **(A). $c = 2045$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.1 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas bersyarat:
> >
> > $$P(X < k \mid X > 10{.}000) = \frac{P(10{.}000 < X < k)}{P(X > 10{.}000)} = 0{,}95$$
> >
> > Dari sini: $P(10{.}000 < X < k) = 0{,}95 \cdot P(X > 10{.}000)$
>
> **Diketahui:**
> - $X \sim N(12{.}000, c^2)$
> - $P(X < k) = 0{,}9582$
> - $P(X < k \mid X > 10{.}000) = 0{,}9500$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hubungkan Dua Kondisi**
> >
> > $$P(X < k \mid X > 10{.}000) = \frac{P(10{.}000 < X < k)}{P(X > 10{.}000)} = 0{,}95$$
> >
> > $$P(10{.}000 < X < k) = P(X < k) - P(X \leq 10{.}000)$$
> >
> > Maka:
> >
> > $$\frac{P(X < k) - P(X \leq 10{.}000)}{1 - P(X \leq 10{.}000)} = 0{,}95$$
> >
> > $$P(X < k) - P(X \leq 10{.}000) = 0{,}95 \bigl[1 - P(X \leq 10{.}000)\bigr]$$
> >
> > $$0{,}9582 - P(X \leq 10{.}000) = 0{,}95 - 0{,}95\,P(X \leq 10{.}000)$$
> >
> > $$0{,}9582 - 0{,}95 = P(X \leq 10{.}000)(1 - 0{,}95)$$
> >
> > $$0{,}0082 = 0{,}05\,P(X \leq 10{.}000)$$
> >
> > $$P(X \leq 10{.}000) = \frac{0{,}0082}{0{,}05} = 0{,}164$$
> >
> > **Langkah 2: Cari $c$ dari $P(X \leq 10{.}000) = 0{,}164$**
> >
> > $$\Phi\!\left(\frac{10{.}000 - 12{.}000}{c}\right) = 0{,}164$$
> >
> > Dari tabel: $\Phi^{-1}(0{,}164) \approx -0{,}978$
> >
> > $$\frac{-2{.}000}{c} = -0{,}978 \Rightarrow c = \frac{2{.}000}{0{,}978} \approx 2045$$
> >
> > **Hasil Akhir:** **(A)**. $c = 2045$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(X \leq 10{.}000) = 1 - 0{,}9582 = 0{,}0418$ langsung — ini salah; deductible dan $k$ adalah dua konstanta berbeda, dan kondisi bersyarat menghubungkan keduanya.
> > > - Salah menulis kondisi bersyarat: harus $P(X < k \mid X > 10{.}000)$, bukan $P(X < k \mid X > k)$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan dua kondisi probabilitas yang melibatkan tiga konstanta ($k$, deductible, dan $c$) → tulis persamaan dari kondisi bersyarat dan eliminasi $k$ untuk mencari $c$.

---
