## **No. 541**

The lifetime of an electronic component is exponentially distributed. Given that the component lasts at least five years, the probability that it lasts at least fifteen years is 0.027.

Calculate the probability that the component lasts at least 25 years, given that it lasts at least five years.

(A) 0.0007  
(B) 0.0024  
(C) 0.0135  
(D) 0.0162  
(E) 0.0450  

> [!summary]+ **Jawaban No. 541**
>
> **(A). $0{,}0007$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Sifat **memoryless** Eksponensial: $P(X > t + s \mid X > s) = P(X > t) = e^{-t/\beta}$.
> >
> > $$P(X > 15 \mid X > 5) = P(X > 10) = e^{-10/\beta} = 0{,}027$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\beta)$; $P(X > 15 \mid X > 5) = P(X > 10) = 0{,}027$
> - Target: $P(X > 25 \mid X > 5) = P(X > 20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan target dalam probabilitas marginal**
> >
> > Berdasarkan sifat memoryless:
> >
> > $$P(X > 25 \mid X > 5) = P(X > 20) = e^{-20/\beta}$$
> >
> > **Langkah 2: Hubungkan $P(X > 20)$ dengan $P(X > 10)$**
> >
> > $$P(X > 20) = [e^{-10/\beta}]^2 = (0{,}027)^2 = 0{,}000729 \approx 0{,}0007$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}0007$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira perlu menghitung $\beta$ terlebih dahulu — cukup gunakan hubungan $e^{-20/\beta} = (e^{-10/\beta})^2$.
> > > - Mengira $P(X > 25 \mid X > 5) = P(X > 25)/P(X > 5)$ tanpa menyederhanakan via memoryless.
> >
> > > [!CAUTION] Red Flags
> > > - Memoryless: jarak "10 tahun di atas 5" sama dengan "10 tahun dari nol".
> > > - $(0{,}027)^2 = 0{,}000729 \approx 0{,}0007$.

---

## **No. 542**

Each of the 76 employees of a company is either a low-risk or a high-risk employee. This year, each low-risk employee's number of accidents has standard deviation 0.50 and each high-risk employee's number of accidents has standard deviation 5.50. The standard deviation of the total number of accidents for all the employees is 43.00. The frequencies of accidents among the employees are independent.

Calculate the number of low-risk employees.

(A) 1  
(B) 15  
(C) 38  
(D) 61  
(E) 75  

> [!summary]+ **Jawaban No. 542**
>
> **(B). $15$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[4.1 Penarikan Sampel Acak]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk variabel independen, variansi total adalah jumlah variansi individual:
> >
> > $$\text{Var}(S) = l \cdot \sigma_L^2 + (76 - l) \cdot \sigma_H^2 = 43^2 = 1849$$
>
> **Diketahui:**
> - $l$ = jumlah low-risk; $76 - l$ = jumlah high-risk
> - $\sigma_L = 0{,}50$, $\sigma_H = 5{,}50$; $\text{SD}(S) = 43$
> - Target: $l$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis persamaan variansi total**
> >
> > $$l(0{,}50)^2 + (76 - l)(5{,}50)^2 = 43^2$$
> >
> > $$0{,}25l + 30{,}25(76 - l) = 1849$$
> >
> > **Langkah 2: Selesaikan untuk $l$**
> >
> > $$0{,}25l + 2299 - 30{,}25l = 1849$$
> >
> > $$-30l = 1849 - 2299 = -450$$
> >
> > $$l = \frac{450}{30} = 15$$
> >
> > **Hasil Akhir:** **(B)**. $15$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan SD (bukan variansi) dalam persamaan — harus $\sigma^2$, bukan $\sigma$.
> > > - Mengira SD total = rata-rata SD individu — hanya berlaku jika semua identik.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{Var}(S) = \sum_i \text{Var}(X_i) = l \sigma_L^2 + (76-l)\sigma_H^2$ untuk variabel independen.
> > > - Periksa: $15(0{,}25) + 61(30{,}25) = 3{,}75 + 1845{,}25 = 1849 = 43^2$ ✓.

---

## **No. 543**

A renter's insurance policy pays a percentage $p$ of the amount by which each loss exceeds a deductible $d$. Each policyholder reports a loss if and only if the loss exceeds the deductible.

The variance of a reported loss is $v$.

Determine the variance of the claim payment resulting from a reported loss.

(A) $pv$  
(B) $p^2 v$  
(C) $p(v - d)$  
(D) $p^2(v - d)$  
(E) $(1-p)^2 v$  

> [!summary]+ **Jawaban No. 543**
>
> **(B). $p^2 v$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Sifat variansi untuk transformasi linear: $\text{Var}(aX + b) = a^2 \text{Var}(X)$.
> >
> > Pembayaran klaim: $C = p(X - d)$ di mana $X$ = kerugian dilaporkan ($X > d$).
>
> **Diketahui:**
> - $X$ = kerugian yang dilaporkan (selalu $> d$); $\text{Var}(X) = v$
> - Pembayaran: $C = p(X - d)$
> - Target: $\text{Var}(C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi transformasi**
> >
> > $$C = p(X - d) = pX - pd$$
> >
> > Ini adalah transformasi linear dengan $a = p$, $b = -pd$ (konstanta).
> >
> > **Langkah 2: Terapkan sifat variansi**
> >
> > $$\text{Var}(C) = \text{Var}(pX - pd) = p^2 \text{Var}(X - d) = p^2 \text{Var}(X) = p^2 v$$
> >
> > (Karena $d$ adalah konstanta: $\text{Var}(X - d) = \text{Var}(X) = v$.)
> >
> > **Hasil Akhir:** **(B)**. $p^2 v$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X - d) = \text{Var}(X) - d$ — konstanta tidak mengubah variansi.
> > > - Menggunakan $p$ (bukan $p^2$) sebagai koefisien variansi.
> >
> > > [!CAUTION] Red Flags
> > > - Geser konstanta ($-pd$) tidak mengubah variansi; faktor skala ($p$) dikuadratkan.
> > > - "Reported loss" berarti $X > d$ sudah terjamin, sehingga $\text{Var}(X)$ langsung digunakan.

---

## **No. 544**

Assume the distribution of the number of automobile claims per year for an auto insurance policyholder is described by the following table:

| Number of Claims | Probability |
|:---:|:---:|
| 0 | 0.4 |
| 1 | 0.3 |
| 2 | 0.2 |
| 3 | 0.1 |

For each claim that occurs, there is a probability of 0.5 that the claim size is 500 and a probability of 0.5 that the claim size is 1000. Claim sizes are mutually independent.

Calculate the probability that the total claim size for a randomly selected policyholder this year is greater than or equal to 2000, given that at least two claims occur.

(A) 0.14  
(B) 0.25  
(C) 0.29  
(D) 0.46  
(E) 0.88  

> [!summary]+ **Jawaban No. 544**
>
> **(D). $0{,}46$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.7 Distribusi Majemuk (Compound Distribution)]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$P(\text{total} \geq 2000 \mid N \geq 2) = \frac{P(\text{total} \geq 2000,\, N \geq 2)}{P(N \geq 2)}$$
>
> **Diketahui:**
> - $N \in \{0,1,2,3\}$ dengan probabilitas $\{0{,}4; 0{,}3; 0{,}2; 0{,}1\}$
> - Setiap klaim: 500 atau 1000, masing-masing dengan prob. 0,5; independen
> - Target: $P(\text{total} \geq 2000 \mid N \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N \geq 2)$**
> >
> > $$P(N \geq 2) = 0{,}2 + 0{,}1 = 0{,}3$$
> >
> > **Langkah 2: Hitung $P(\text{total} \geq 2000,\, N = 2)$**
> >
> > Dengan $N=2$: total $\geq 2000$ hanya jika kedua klaim = 1000.
> >
> > $$P(\text{total} \geq 2000 \mid N=2) = (0{,}5)^2 = 0{,}25$$
> >
> > $$P(\text{total} \geq 2000,\, N=2) = 0{,}2 \times 0{,}25 = 0{,}05$$
> >
> > **Langkah 3: Hitung $P(\text{total} \geq 2000,\, N = 3)$**
> >
> > Dengan $N=3$: total $\geq 2000$ terjadi kecuali semua tiga klaim = 500 (total = 1500).
> >
> > $$P(\text{total} \geq 2000 \mid N=3) = 1 - (0{,}5)^3 = 1 - 0{,}125 = 0{,}875$$
> >
> > $$P(\text{total} \geq 2000,\, N=3) = 0{,}1 \times 0{,}875 = 0{,}0875$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(\text{total} \geq 2000,\, N \geq 2) = 0{,}05 + 0{,}0875 = 0{,}1375$$
> >
> > $$P(\text{total} \geq 2000 \mid N \geq 2) = \frac{0{,}1375}{0{,}3} = 0{,}4583 \approx 0{,}46$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}46$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk $N=3$: total $\geq 2000$ bukan hanya "semua 1000" — total dengan klaim campuran (mis. 500+500+1000=2000) juga memenuhi syarat.
> > > - Mengabaikan kasus $N=3$ dalam pembilang.
> >
> > > [!CAUTION] Red Flags
> > > - "Total $\geq 2000$ dengan $N=2$": butuh 2×1000 = 2000 → hanya satu cara → $p = (0{,}5)^2 = 0{,}25$.
> > > - "Total $\geq 2000$ dengan $N=3$": gunakan komplemen (hanya gagal jika semua = 500).

---

## **No. 545**

The total amount of all hurricane claims filed with a company in a one-year time period is modeled by a random variable $X$ with density function

$$f(x) = \frac{1}{1{,}000{,}000} e^{-x/1{,}000{,}000}, \quad x > 0$$

Calculate, to the nearest 100,000, the difference between the 15th and 95th percentiles of the total amount of hurricane claims.

(A) 1,800,000  
(B) 1,900,000  
(C) 2,700,000  
(D) 2,800,000  
(E) 3,000,000  

> [!summary]+ **Jawaban No. 545**
>
> **(D). $2{,}800{,}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Exp}(\beta = 1{,}000{,}000)$; CDF: $F(x) = 1 - e^{-x/\beta}$.
> >
> > Persentil ke-$p$: $x_p = -\beta \ln(1-p)$.
>
> **Diketahui:**
> - $X \sim \text{Exp}(1{,}000{,}000)$
> - Target: $x_{0{,}95} - x_{0{,}15}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung persentil ke-15**
> >
> > $$1 - e^{-a/1{,}000{,}000} = 0{,}15 \implies e^{-a/1{,}000{,}000} = 0{,}85$$
> >
> > $$a = -1{,}000{,}000 \ln(0{,}85) \approx 1{,}000{,}000 \times 0{,}16252 = 162{,}519$$
> >
> > **Langkah 2: Hitung persentil ke-95**
> >
> > $$1 - e^{-b/1{,}000{,}000} = 0{,}95 \implies e^{-b/1{,}000{,}000} = 0{,}05$$
> >
> > $$b = -1{,}000{,}000 \ln(0{,}05) \approx 1{,}000{,}000 \times 2{,}99573 = 2{,}995{,}732$$
> >
> > **Langkah 3: Hitung selisih**
> >
> > $$b - a = 2{,}995{,}732 - 162{,}519 = 2{,}833{,}213 \approx 2{,}800{,}000$$
> >
> > **Hasil Akhir:** **(D)**. $2{,}800{,}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $F(x) = e^{-x/\beta}$ (survival function) sebagai CDF — CDF adalah $1 - e^{-x/\beta}$.
> > > - Mengira persentil ke-15 berarti $P(X < 0{,}15) = 0{,}15$ — persentil dihitung dari CDF, bukan PDF.
> >
> > > [!CAUTION] Red Flags
> > > - $x_p = -\beta \ln(1-p)$ — hafalkan rumus persentil Eksponensial.
> > > - $\ln(0{,}05) \approx -2{,}996$; $\ln(0{,}85) \approx -0{,}163$ — tanda negatif saling menghilang.

---

## **No. 546**

A large lot of circuit boards contains 10% that are defective. A test for defective boards is correct with 80% probability if the board is defective and correct with only 40% probability if the board is not defective.

A randomly selected board is tested and the test indicates that the board is defective.

Calculate the probability that the board is defective.

(A) 2/25  
(B) 1/10  
(C) 2/17  
(D) 4/31  
(E) 2/11  

> [!summary]+ **Jawaban No. 546**
>
> **(D). $4/31$**
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
> > $$P(D \mid T) = \frac{P(T \mid D) \cdot P(D)}{P(T \mid D) P(D) + P(T \mid D^c) P(D^c)}$$
>
> **Diketahui:**
> - $P(D) = 0{,}10$; $P(D^c) = 0{,}90$
> - $P(T \mid D) = 0{,}80$ (tes benar jika cacat)
> - $P(T \mid D^c) = 1 - 0{,}40 = 0{,}60$ (tes salah jika tidak cacat, yaitu tes menunjukkan cacat padahal tidak)
> - Target: $P(D \mid T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Klarifikasi probabilitas bersyarat**
> >
> > "Tes benar dengan prob. 40% jika tidak cacat" → $P(\text{tes menunjukkan tidak cacat} \mid D^c) = 0{,}40$, sehingga $P(T \mid D^c) = P(\text{tes menunjukkan cacat} \mid D^c) = 0{,}60$.
> >
> > **Langkah 2: Hitung $P(T)$**
> >
> > $$P(T) = 0{,}80 \times 0{,}10 + 0{,}60 \times 0{,}90 = 0{,}08 + 0{,}54 = 0{,}62$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(D \mid T) = \frac{0{,}80 \times 0{,}10}{0{,}62} = \frac{0{,}08}{0{,}62} = \frac{8}{62} = \frac{4}{31}$$
> >
> > **Hasil Akhir:** **(D)**. $4/31$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "benar 40% jika tidak cacat" berarti $P(T \mid D^c) = 0{,}40$ — sebaliknya! "Benar" untuk board tidak cacat berarti tes menunjukkan "tidak cacat". Jadi $P(T \mid D^c) = 1 - 0{,}40 = 0{,}60$.
> > > - Menjawab $P(D) = 0{,}10$ (prior) tanpa menghitung posterior.
> >
> > > [!CAUTION] Red Flags
> > > - "Tes benar jika $X$" → hasil tes = kondisi sebenarnya $X$; $P(T \mid D^c) =$ prob. tes salah untuk board tidak cacat $= 1 - 0{,}40 = 0{,}60$.
> > > - Hasil $4/31 \approx 0{,}129$ — walaupun hanya 10% cacat, tes positif meningkatkan probabilitas menjadi ~13%.

---

## **No. 547**

A weather satellite is sending a binary code of 0s and 1s describing a tropical storm. Suppose 70% of the message being sent is 0s and there is an 80% chance of any particular 0 or 1 being received correctly. (If a 1 is sent and incorrectly received, it is received as a 0, and vice versa.)

Calculate the probability that a 0 was sent, given that a 1 was received.

(A) 0.16  
(B) 0.34  
(C) 0.37  
(D) 0.63  
(E) 0.90  

> [!summary]+ **Jawaban No. 547**
>
> **(C). $0{,}37$**
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
> > Teorema Bayes: $P(B_0 \mid A_1) = \dfrac{P(A_1 \mid B_0) \cdot P(B_0)}{P(A_1)}$
> >
> > Di mana $B_i$ = "dikirim $i$", $A_i$ = "diterima $i$".
>
> **Diketahui:**
> - $P(B_0) = 0{,}70$, $P(B_1) = 0{,}30$
> - $P(A_0 \mid B_0) = 0{,}80$ → $P(A_1 \mid B_0) = 0{,}20$ (0 dikirim, 1 diterima = salah)
> - $P(A_1 \mid B_1) = 0{,}80$ → $P(A_0 \mid B_1) = 0{,}20$ (1 dikirim, 1 diterima = benar)
> - Target: $P(B_0 \mid A_1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A_1)$**
> >
> > $$P(A_1) = P(A_1 \mid B_0) P(B_0) + P(A_1 \mid B_1) P(B_1)$$
> >
> > $$= 0{,}20 \times 0{,}70 + 0{,}80 \times 0{,}30 = 0{,}14 + 0{,}24 = 0{,}38$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(B_0 \mid A_1) = \frac{0{,}20 \times 0{,}70}{0{,}38} = \frac{0{,}14}{0{,}38} \approx 0{,}3684 \approx 0{,}37$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}37$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "1 diterima padahal 0 dikirim" berarti $P(A_1 \mid B_0) = 0{,}80$ — sebaliknya, 0 dikirim dengan benar berarti 0 diterima ($P(A_0 \mid B_0) = 0{,}80$), sehingga $P(A_1 \mid B_0) = 0{,}20$.
> > > - Menjawab $P(B_0) = 0{,}70$ (prior) tanpa memperbarui.
> >
> > > [!CAUTION] Red Flags
> > > - "80% chance of being received correctly" → $P(\text{diterima} = \text{dikirim}) = 0{,}80$, $P(\text{diterima} \neq \text{dikirim}) = 0{,}20$.
> > > - Meskipun 70% pesan adalah 0, jika 1 diterima, sebagian besar kemungkinan adalah 1 yang dikirim dengan benar ($0{,}24 > 0{,}14$).

---

## **No. 548**

Urn A contains five red chips and four white chips. Urn B contains four red chips and five white chips. Two chips are transferred from urn A to urn B. Then a single chip is drawn from urn B.

Calculate the probability that the chip drawn from urn B will be white.

(A) 0.455  
(B) 0.535  
(C) 0.545  
(D) 0.556  
(E) 0.571  

> [!summary]+ **Jawaban No. 548**
>
> **(B). $0{,}535$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Total Probabilitas dengan pengkondisian pada komposisi 2 chip yang dipindahkan:
> >
> > $$P(W) = P(W \mid 0WT) P(0WT) + P(W \mid 1WT) P(1WT) + P(W \mid 2WT) P(2WT)$$
>
> **Diketahui:**
> - Urn A: 5 merah, 4 putih (total 9)
> - Urn B: 4 merah, 5 putih (total 9) → setelah transfer: 11 chip
> - 2 chip dipindahkan dari A ke B; target: $P(\text{putih dari B})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan probabilitas tipe transfer**
> >
> > $$P(0WT) = \frac{\binom{5}{2}}{\binom{9}{2}} = \frac{10}{36}$$
> >
> > $$P(1WT) = \frac{\binom{4}{1}\binom{5}{1}}{\binom{9}{2}} = \frac{20}{36}$$
> >
> > $$P(2WT) = \frac{\binom{4}{2}}{\binom{9}{2}} = \frac{6}{36}$$
> >
> > **Langkah 2: Hitung probabilitas putih dari B bersyarat pada transfer**
> >
> > - $0$ putih ditransfer (2 merah masuk): Urn B jadi 4M+2R, 5P → $P(W \mid 0WT) = 5/11$
> > - $1$ putih ditransfer: Urn B jadi 4M+1R, 6P → $P(W \mid 1WT) = 6/11$
> > - $2$ putih ditransfer: Urn B jadi 4M, 7P → $P(W \mid 2WT) = 7/11$
> >
> > **Langkah 3: Terapkan Total Probabilitas**
> >
> > $$P(W) = \frac{5}{11} \cdot \frac{10}{36} + \frac{6}{11} \cdot \frac{20}{36} + \frac{7}{11} \cdot \frac{6}{36}$$
> >
> > $$= \frac{1}{11 \times 36}(5 \times 10 + 6 \times 20 + 7 \times 6)$$
> >
> > $$= \frac{50 + 120 + 42}{396} = \frac{212}{396} = \frac{53}{99} \approx 0{,}5354$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}535$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira jumlah chip di B setelah transfer = 9 — setelah 2 chip ditambahkan, B memiliki $9 + 2 = 11$ chip.
> > > - Salah menghitung $P(0WT)$: 2 merah dari A dipilih dari 5 merah (bukan 9).
> >
> > > [!CAUTION] Red Flags
> > > - Kondisikan pada jumlah putih yang dipindah (0, 1, atau 2); gunakan Hipergeometrik untuk probabilitas transfer.

---

## **No. 549**

Six people are seated randomly around a circular table. Two of the six people are left-handed.

Calculate the probability that the two left-handed people are seated next to each other.

(A) 1/6  
(B) 1/5  
(C) 1/3  
(D) 2/5  
(E) 3/5  

> [!summary]+ **Jawaban No. 549**
>
> **(D). $2/5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Untuk meja bundar: setelah satu orang duduk (referensi), ada 5! pengaturan yang mungkin.
> >
> > Pendekatan alternatif: Setelah orang kidal pertama duduk, ada 5 kursi tersisa. Orang kidal kedua duduk bersebelahan jika memilih salah satu dari 2 kursi di sebelah kidal pertama.
>
> **Diketahui:**
> - 6 orang di meja bundar; 2 kidal (L1 dan L2)
> - Target: $P(\text{L1 dan L2 bersebelahan})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Pendekatan sederhana:**
> >
> > Tempatkan L1 terlebih dahulu (fix sebagai referensi). Tersisa 5 kursi untuk 5 orang lain. L2 memilih salah satu dari 5 kursi secara acak.
> >
> > Kursi bersebelahan dengan L1: 2 kursi (kiri dan kanan).
> >
> > $$P(\text{bersebelahan}) = \frac{2}{5}$$
> >
> > **Verifikasi dengan enumerasi:**
> >
> > Total pengaturan melingkar = $(6-1)! = 5! = 120$.
> >
> > Pengaturan di mana L1 dan L2 bersebelahan: perlakukan L1-L2 sebagai satu blok → $(5-1)! \times 2 = 4! \times 2 = 48$.
> >
> > $$P = \frac{48}{120} = \frac{2}{5}$$
> >
> > **Hasil Akhir:** **(D)**. $2/5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan permutasi linear ($6!$) alih-alih circular ($5!$) — di meja bundar, satu posisi ditetapkan sebagai referensi.
> > > - Mengira kursi bersebelahan hanya 1 (satu sisi) — ada 2 kursi bersebelahan (kiri dan kanan).
> >
> > > [!CAUTION] Red Flags
> > > - Circular permutation: fix satu orang sebagai referensi, hitung pengaturan $(n-1)!$ untuk sisanya.
> > > - Blok dua orang: $2!$ cara untuk membalik urutan dalam blok.

---

## **No. 550**

In a group of nine people, five have high blood sugar. Five people are to be chosen randomly from this group of nine.

Calculate how many possible combinations contain exactly two people with high blood sugar.

(A) 10  
(B) 14  
(C) 40  
(D) 100  
(E) 126  

> [!summary]+ **Jawaban No. 550**
>
> **(C). $40$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{Jumlah kombinasi} = \binom{5}{2} \times \binom{4}{3}$$
>
> **Diketahui:**
> - 9 orang: 5 high blood sugar (HBS), 4 non-HBS
> - Pilih 5 orang; target: kombinasi dengan tepat 2 HBS
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pilih 2 dari 5 HBS**
> >
> > $$\binom{5}{2} = 10$$
> >
> > **Langkah 2: Pilih 3 dari 4 non-HBS**
> >
> > $$\binom{4}{3} = 4$$
> >
> > **Langkah 3: Kalikan**
> >
> > $$\text{Jumlah kombinasi} = 10 \times 4 = 40$$
> >
> > **Hasil Akhir:** **(C)**. $40$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Hanya menghitung $\binom{5}{2} = 10$ dan melupakan pilihan dari non-HBS.
> > > - Menggunakan $\binom{9}{5} = 126$ tanpa membatasi jumlah HBS.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk "tepat 2 HBS dari 5 pilihan": pilih 2 dari HBS DAN 3 dari non-HBS → kalikan.

---

## **No. 551**

A motorist makes four driving errors this year. Each error independently has probability 0.3 of resulting in an accident. The motorist's insurance company reimburses up to two accidents due to the motorist's errors this year.

Calculate the probability that these four errors result in at least one unreimbursed accident.

(A) 0.03  
(B) 0.08  
(C) 0.24  
(D) 0.32  
(E) 0.41  

> [!summary]+ **Jawaban No. 551**
>
> **(B). $0{,}08$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(4, 0{,}3)$; "unreimbursed accident" terjadi jika $X \geq 3$ (lebih dari 2 kecelakaan).
> >
> > $$P(X \geq 3) = P(X=3) + P(X=4)$$
>
> **Diketahui:**
> - $X \sim B(4, 0{,}3)$; perusahaan menanggung maksimum 2 kecelakaan
> - "Unreimbursed" → $X > 2$, yaitu $X \geq 3$
> - Target: $P(X \geq 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X=3)$**
> >
> > $$P(X=3) = \binom{4}{3}(0{,}3)^3(0{,}7)^1 = 4 \times 0{,}027 \times 0{,}7 = 0{,}0756$$
> >
> > **Langkah 2: Hitung $P(X=4)$**
> >
> > $$P(X=4) = \binom{4}{4}(0{,}3)^4 = (0{,}3)^4 = 0{,}0081$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$P(X \geq 3) = 0{,}0756 + 0{,}0081 = 0{,}0837 \approx 0{,}08$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}08$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "unreimbursed" terjadi jika $X \geq 2$ (padahal 2 kecelakaan masih ditanggung).
> > > - Hanya menghitung $P(X=3)$ dan lupa $P(X=4)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Reimburses up to two" → 0, 1, dan 2 kecelakaan semua ditanggung; "unreimbursed" hanya terjadi saat $X \geq 3$.

---

## **No. 552**

The distribution of the lifetime in years of a certain brand of lawnmower is uniform on the interval $[a, b]$, where $0 < a < b$.

Determine the 80th percentile of the lifetime in years of this brand of lawnmower.

(A) $a + 0{,}8b$  
(B) $0{,}2a + 0{,}8b$  
(C) $0{,}8a + 0{,}2b$  
(D) $0{,}8(b - a)$  
(E) $0{,}8(b + a)$  

> [!summary]+ **Jawaban No. 552**
>
> **(B). $0{,}2a + 0{,}8b$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U[a, b]$: persentil ke-$p$ adalah:
> >
> > $$x_p = a + p(b - a) = (1-p)a + pb$$
>
> **Diketahui:**
> - $X \sim U[a, b]$; Target: $x_{0{,}80}$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$x_{0{,}80} = a + 0{,}80(b - a) = a + 0{,}80b - 0{,}80a = 0{,}20a + 0{,}80b$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}2a + 0{,}8b$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira persentil ke-80 = $0{,}8 \times b$ (lupa offset $a$).
> > > - Memilih (C) $0{,}8a + 0{,}2b$ — ini adalah persentil ke-20, bukan ke-80.
> >
> > > [!CAUTION] Red Flags
> > > - $x_p = a + p(b-a) = (1-p)a + pb$ — koefisien $p$ untuk $b$, koefisien $(1-p)$ untuk $a$.
> > > - Verifikasi: $x_{0} = a$ ✓, $x_{1} = b$ ✓, $x_{0{,}5} = (a+b)/2$ ✓.

---

## **No. 553**

A random variable $X$ is exponentially distributed with 40th percentile equal to $4\ln\!\left(\dfrac{5}{3}\right)$.

Calculate the median of $X$.

(A) $5\ln\!\left(\dfrac{5}{3}\right)$  
(B) $4\ln 2$  
(C) $5\ln\!\left(\dfrac{12}{25}\right)$  
(D) $4$  
(E) $5$  

> [!summary]+ **Jawaban No. 553**
>
> **(B). $4\ln 2$**
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
> > Untuk $X \sim \text{Exp}(\beta)$: persentil ke-$p$ adalah $x_p = -\beta \ln(1-p)$.
> >
> > $$x_{0{,}40} = -\beta \ln(0{,}60), \quad x_{0{,}50} = -\beta \ln(0{,}50) = \beta \ln 2$$
>
> **Diketahui:**
> - $x_{0{,}40} = 4\ln(5/3)$
> - Target: $x_{0{,}50}$ (median)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\beta$ dari persentil ke-40**
> >
> > $$-\beta \ln(1-0{,}40) = -\beta \ln(0{,}60) = 4\ln(5/3)$$
> >
> > Perhatikan: $\ln(5/3) = -\ln(3/5) = -\ln(0{,}60)$.
> >
> > $$-\beta \ln(0{,}60) = 4 \times (-\ln(0{,}60)) \implies \beta = 4$$
> >
> > **Langkah 2: Hitung median**
> >
> > $$x_{0{,}50} = \beta \ln 2 = 4 \ln 2$$
> >
> > **Hasil Akhir:** **(B)**. $4\ln 2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira median Eksponensial = mean $= \beta$ — sebenarnya median $= \beta \ln 2 \approx 0{,}693\beta$.
> > > - Gagal mengenali bahwa $\ln(5/3) = -\ln(3/5) = -\ln(0{,}6)$, sehingga $\beta = 4$.
> >
> > > [!CAUTION] Red Flags
> > > - $x_p = -\beta \ln(1-p)$; untuk $p = 0{,}40$: $-(1-0{,}40) = -0{,}60 = \ln(3/5) = -\ln(5/3)$.
> > > - Median Eksponensial: $x_{0{,}5} = \beta \ln 2$ (bukan $\beta$).

---

## **No. 554**

The base fare charged by airlines for flights from City A to City B is uniformly distributed on $[100, 225]$. In addition to the base fare, the airlines charge a processing fee of 15 and a 30% fuel surcharge applied to the base fare.

Calculate the standard deviation of the total charge for a flight from City A to City B.

(A) 10.8  
(B) 36.1  
(C) 41.1  
(D) 46.9  
(E) 61.9  

> [!summary]+ **Jawaban No. 554**
>
> **(D). $46{,}9$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim U[100, 225]$; total biaya $C = X + 15 + 0{,}30X = 1{,}30X + 15$.
> >
> > $$\text{Var}(C) = (1{,}30)^2 \text{Var}(X), \quad \text{Var}(X) = \frac{(225-100)^2}{12}$$
>
> **Diketahui:**
> - $X \sim U[100, 225]$; $C = 1{,}30X + 15$
> - Target: $\text{SD}(C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\text{Var}(X)$**
> >
> > $$\text{Var}(X) = \frac{(225 - 100)^2}{12} = \frac{125^2}{12} = \frac{15625}{12} \approx 1302{,}08$$
> >
> > **Langkah 2: Hitung $\text{Var}(C)$**
> >
> > $$\text{Var}(C) = (1{,}30)^2 \times 1302{,}08 = 1{,}69 \times 1302{,}08 \approx 2200{,}52$$
> >
> > **Langkah 3: Hitung $\text{SD}(C)$**
> >
> > $$\text{SD}(C) = \sqrt{2200{,}52} \approx 46{,}91$$
> >
> > **Hasil Akhir:** **(D)**. $46{,}9$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $C = X + 0{,}30 + 15$ (surcharge sebagai angka tetap) — surcharge 30% diterapkan pada base fare $X$, bukan nilai tetap.
> > > - Menambahkan SD (bukan variansi): $\text{SD}(C) \neq 1{,}30 \times \text{SD}(X) + 0$ — tunggu, ini sebenarnya **benar** karena $\text{SD}(aX+b) = |a| \text{SD}(X)$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(1{,}3X + 15) = 1{,}3 \times \text{SD}(X) = 1{,}3 \times \sqrt{1302{,}08} = 1{,}3 \times 36{,}08 \approx 46{,}9$.
> > > - Konstanta (+15) tidak mempengaruhi SD.

---

## **No. 555**

The amount of beverage filled into each bottle by a bottling machine is independently and normally distributed with mean 12.0 ounces and standard deviation $\sigma$ ounces.

Approximately 20% of all 24-bottle cases contain more than 290 ounces of total beverage.

Calculate $\sigma$.

(A) 0.01  
(B) 0.10  
(C) 0.49  
(D) 2.38  
(E) 10.10  

> [!summary]+ **Jawaban No. 555**
>
> **(C). $0{,}49$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > $Y = \sum_{i=1}^{24} X_i \sim N(24 \times 12,\, 24\sigma^2) = N(288,\, 24\sigma^2)$.
> >
> > $$P(Y > 290) = 0{,}20 \implies P\!\left(Z > \frac{290 - 288}{\sigma\sqrt{24}}\right) = 0{,}20$$
>
> **Diketahui:**
> - $X_i \sim N(12, \sigma^2)$, $n = 24$, i.i.d.
> - $P(Y > 290) = 0{,}20$
> - Target: $\sigma$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi**
> >
> > $$P\!\left(Z > \frac{290 - 288}{\sigma\sqrt{24}}\right) = 0{,}20$$
> >
> > $$\frac{2}{\sigma\sqrt{24}} = z_{0{,}80} = 0{,}84162$$
> >
> > **Langkah 2: Selesaikan untuk $\sigma$**
> >
> > $$\sigma = \frac{2}{0{,}84162 \times \sqrt{24}} = \frac{2}{0{,}84162 \times 4{,}8990} = \frac{2}{4{,}1226} \approx 0{,}4851$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}49$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[Y] = 12$ (per botol) alih-alih $E[Y] = 24 \times 12 = 288$ (per kasus).
> > > - Mengira $\text{SD}(Y) = \sigma$ — sebenarnya $\text{SD}(Y) = \sigma\sqrt{24}$.
> >
> > > [!CAUTION] Red Flags
> > > - $P(Z > z) = 0{,}20 \implies z = z_{0{,}80} = 0{,}84162$ (nilai kritis untuk persentil ke-80).
> > > - $\sqrt{24} \approx 4{,}899$.

---

## **No. 556**

The profit on an individual insurance policy is normally distributed. The 60th percentile of the profit is 1000. The 80th percentile of the profit is 2000.

Calculate the 95th percentile, to the nearest 100, of the profit.

(A) 2300  
(B) 2400  
(C) 2700  
(D) 3400  
(E) 3900  

> [!summary]+ **Jawaban No. 556**
>
> **(D). $3400$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim N(\mu, \sigma^2)$: persentil ke-$p$ adalah $x_p = \mu + z_p \sigma$.
> >
> > Dari dua persentil yang diketahui, buat sistem persamaan untuk $\mu$ dan $\sigma$.
>
> **Diketahui:**
> - $x_{0{,}60} = 1000$: $\mu + 0{,}253347\sigma = 1000$
> - $x_{0{,}80} = 2000$: $\mu + 0{,}841621\sigma = 2000$
> - Target: $x_{0{,}95}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Selesaikan sistem persamaan**
> >
> > Kurangi persamaan pertama dari kedua:
> >
> > $$(0{,}841621 - 0{,}253347)\sigma = 2000 - 1000$$
> >
> > $$0{,}588274\sigma = 1000 \implies \sigma = \frac{1000}{0{,}588274} \approx 1699{,}89$$
> >
> > $$\mu = 1000 - 0{,}253347 \times 1699{,}89 \approx 1000 - 430{,}66 = 569{,}34$$
> >
> > **Langkah 2: Hitung persentil ke-95**
> >
> > $$x_{0{,}95} = \mu + z_{0{,}95} \sigma = 569{,}34 + 1{,}64485 \times 1699{,}89$$
> >
> > $$= 569{,}34 + 2794{,}47 = 3363{,}8 \approx 3400$$
> >
> > **Hasil Akhir:** **(D)**. $3400$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira selisih persentil konstan: karena 80%-60% = 20% menghasilkan selisih 1000, mengira 95%-80% = 15% menghasilkan 750, sehingga $x_{0{,}95} = 2750$ — ini salah karena skala normal tidak linear.
> > > - Salah menggunakan nilai $z$: $z_{0{,}60} = 0{,}253$, $z_{0{,}80} = 0{,}842$, $z_{0{,}95} = 1{,}645$.
> >
> > > [!CAUTION] Red Flags
> > > - Persentil Normal tidak ekuidistan — jarak antara persentil bergantung pada nilai $z$.
> > > - Sistem dua persamaan: $(z_{0{,}80} - z_{0{,}60})\sigma = x_{0{,}80} - x_{0{,}60}$.

---

## **No. 557**

A customer just purchased a refrigerator with a five-year warranty. The number of years before the refrigerator malfunctions is exponentially distributed. The probability that the refrigerator malfunctions before the five-year warranty expires is 0.40.

Calculate the standard deviation of the number of years before the refrigerator malfunctions.

(A) 0.10  
(B) 3.13  
(C) 5.46  
(D) 9.79  
(E) 12.50  

> [!summary]+ **Jawaban No. 557**
>
> **(D). $9{,}79$**
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
> > $X \sim \text{Exp}(\beta)$: $P(X < 5) = 1 - e^{-5/\beta} = 0{,}40 \implies e^{-5/\beta} = 0{,}60$.
> >
> > Untuk Eksponensial: $\text{SD}(X) = \beta$ (standar deviasi = mean).
>
> **Diketahui:**
> - $X \sim \text{Exp}(\beta)$; $P(X < 5) = 0{,}40$
> - Target: $\text{SD}(X) = \beta$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\beta$**
> >
> > $$1 - e^{-5/\beta} = 0{,}40 \implies e^{-5/\beta} = 0{,}60$$
> >
> > $$-\frac{5}{\beta} = \ln(0{,}60) \approx -0{,}51083$$
> >
> > $$\beta = \frac{5}{0{,}51083} \approx 9{,}788$$
> >
> > **Langkah 2: SD = mean = $\beta$**
> >
> > $$\text{SD}(X) = \beta \approx 9{,}79$$
> >
> > **Hasil Akhir:** **(D)**. $9{,}79$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\beta = 5/0{,}40 = 12{,}5$ — ini salah; harus invers dari $-\ln(0{,}60)$, bukan $1/p$.
> > > - Mengira SD $\neq$ mean untuk Eksponensial — untuk distribusi ini, SD $= \mu = \beta$.
> >
> > > [!CAUTION] Red Flags
> > > - $\ln(0{,}60) \approx -0{,}5108$, bukan $-0{,}40$.
> > > - Eksponensial: $\text{Mean} = \text{SD} = \beta$.

---

## **No. 558**

The probability is 0.45 that a mouse exposed to a certain disease will develop it. The events of individual mice developing the disease are all mutually independent.

Calculate the probability that the tenth mouse exposed to the disease will be the third to catch it.

(A) 0.0014  
(B) 0.0499  
(C) 0.1110  
(D) 0.1165  
(E) 0.1665  

> [!summary]+ **Jawaban No. 558**
>
> **(B). $0{,}0499$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Binomial Negatif: prob. sukses ke-$r$ terjadi pada percobaan ke-$n$:
> >
> > $$P(N=n) = \binom{n-1}{r-1} p^r (1-p)^{n-r}$$
>
> **Diketahui:**
> - $p = 0{,}45$; $r = 3$ (sukses ke-3); $n = 10$ (percobaan ke-10)
> - Target: $P(N = 10)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$P(N=10) = \binom{9}{2}(0{,}45)^3(0{,}55)^7$$
> >
> > $$= 36 \times (0{,}091125) \times (0{,}01522) = 36 \times 0{,}001387 \approx 0{,}04994$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}0499$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{10}{3}$ alih-alih $\binom{9}{2}$ — dari 9 percobaan pertama, tepat 2 harus sukses; percobaan ke-10 pasti sukses.
> > > - Mengira ini adalah soal Binomial $B(10, 0{,}45)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Percobaan ke-$n$ adalah sukses ke-$r$": binom. koef. = $\binom{n-1}{r-1}$ (bukan $\binom{n}{r}$).
> > > - $(0{,}45)^3 \approx 0{,}0911$; $(0{,}55)^7 \approx 0{,}01522$; $36 \times 0{,}0911 \times 0{,}01522 \approx 0{,}04994$.

---

## **No. 559**

Brand A air conditioning units have twice the expected life span of Brand B air conditioning units. The life span for each brand is exponentially distributed.

The probability that a Brand A air conditioning unit lasts at least 15 years is 0.046656.

Calculate the probability that a Brand B air conditioning unit lasts at least 5 years.

(A) 0.01  
(B) 0.03  
(C) 0.07  
(D) 0.13  
(E) 0.18  

> [!summary]+ **Jawaban No. 559**
>
> **(D). $0{,}13$**
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
> > $X_A \sim \text{Exp}(\beta_A)$, $X_B \sim \text{Exp}(\beta_B)$; $\beta_A = 2\beta_B$.
> >
> > $P(X_A > 15) = e^{-15/\beta_A} = 0{,}046656$
>
> **Diketahui:**
> - $\beta_A = 2\beta_B$; $P(X_A > 15) = 0{,}046656$
> - Target: $P(X_B > 5) = e^{-5/\beta_B}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\beta_A$**
> >
> > $$e^{-15/\beta_A} = 0{,}046656 \implies -\frac{15}{\beta_A} = \ln(0{,}046656)$$
> >
> > Perhatikan: $0{,}046656 = (0{,}6)^6$ (cek: $0{,}6^6 = 0{,}046656$ ✓). Maka:
> >
> > $$\frac{15}{\beta_A} = -6\ln(0{,}6) \implies \beta_A = \frac{15}{-6\ln(0{,}6)} = \frac{15}{6 \times 0{,}51083} \approx 4{,}894$$
> >
> > **Langkah 2: Tentukan $\beta_B = \beta_A/2 \approx 2{,}447$**
> >
> > **Langkah 3: Hitung $P(X_B > 5)$**
> >
> > $$P(X_B > 5) = e^{-5/\beta_B} = e^{-5/2{,}447} = e^{-2 \times (15/\beta_A)/6 \times ...}$$
> >
> > Cara lebih elegan: $\frac{5}{\beta_B} = \frac{5}{2\beta_B/2} = \frac{10}{\beta_A} \cdot \frac{15}{15} = \frac{2}{3} \cdot \frac{15}{\beta_A}$.
> >
> > Karena $e^{-15/\beta_A} = 0{,}046656^{1} = (0{,}6)^6$, maka $e^{-1/\beta_A} = (0{,}6)^{6/15} = (0{,}6)^{2/5}$.
> >
> > $$e^{-5/\beta_B} = e^{-10/\beta_A} = [(0{,}6)^{6/15}]^{10} = (0{,}6)^{60/15} = (0{,}6)^4 = 0{,}1296$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}13$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\beta_B = \beta_A/2$ tetapi menghitung $P(X_B > 5) = e^{-5/\beta_A}$ (lupa membagi $\beta$).
> > > - Tidak mengenali bahwa $0{,}046656 = 0{,}6^6$.
> >
> > > [!CAUTION] Red Flags
> > > - $\beta_A = 2\beta_B$ → $5/\beta_B = 10/\beta_A$.
> > > - $e^{-10/\beta_A} = (e^{-15/\beta_A})^{2/3} = (0{,}046656)^{2/3} = (0{,}6^6)^{2/3} = 0{,}6^4 = 0{,}1296$.

---

## **No. 560**

Homeowner losses due to fire are exponentially distributed with mean 6. Homeowners insurance policy A reimburses up to a maximum of $m$ for a loss due to fire. Homeowners insurance policy B, with a different premium, reimburses up to a maximum of $m + 2$ for a loss due to fire.

Let $p_A$ be the probability that a loss due to fire is partially unreimbursed under policy A. Let $p_B$ be the probability that a loss due to fire is partially unreimbursed under policy B.

Determine $\dfrac{p_B}{p_A}$.

(A) $e^{-1/2}$  
(B) $e^{-1/3}$  
(C) $\dfrac{1-e^{-(m+2)/6}}{1-e^{-m/6}}$  
(D) $\dfrac{1-e^{m/6-2}}{1-e^{-m/6}}$  
(E) $\dfrac{m}{m+2}$  

> [!summary]+ **Jawaban No. 560**
>
> **(B). $e^{-1/3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > "Partially unreimbursed" berarti kerugian melebihi batas maksimum:
> >
> > $$p_A = P(X > m) = e^{-m/6}, \quad p_B = P(X > m+2) = e^{-(m+2)/6}$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(6)$; $p_A = e^{-m/6}$, $p_B = e^{-(m+2)/6}$
> - Target: $p_B / p_A$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$\frac{p_B}{p_A} = \frac{e^{-(m+2)/6}}{e^{-m/6}} = e^{-(m+2)/6 + m/6} = e^{-2/6} = e^{-1/3}$$
> >
> > **Hasil Akhir:** **(B)**. $e^{-1/3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "partially unreimbursed" berarti $0 < \text{pembayaran} < m$ — sebenarnya berarti kerugian $> m$ (sehingga ada bagian yang tidak ditanggung).
> > > - Kesalahan aljabar: $e^{-(m+2)/6}/e^{-m/6} = e^{-2/6}$ (eksponen dikurangi, bukan dijumlah).
> >
> > > [!CAUTION] Red Flags
> > > - Rasio tidak bergantung pada $m$ — ini karena sifat distribusi Eksponensial (perbandingan survival function).
> > > - $e^{-2/6} = e^{-1/3}$.

---

## **No. 561**

From a collection of eight keys, Door A can only be opened with one key and Door B can only be opened with one other key.

Calculate the probability that among four randomly selected keys, exactly three keys will open neither door.

(A) 0.03  
(B) 0.11  
(C) 0.29  
(D) 0.42  
(E) 0.57  

> [!summary]+ **Jawaban No. 561**
>
> **(E). $0{,}57$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > 8 kunci: 1 untuk A, 1 untuk B, 6 tidak membuka pintu manapun.
> >
> > "Tepat 3 dari 4 kunci tidak membuka pintu apapun" → 3 dari 6 biasa + 1 kunci pintu (A atau B).
>
> **Diketahui:**
> - 8 kunci: 2 "pintu" (1 untuk A, 1 untuk B), 6 "bukan pintu"
> - Pilih 4 kunci; target: $P(\text{tepat 3 tidak membuka pintu manapun})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung kombinasi yang memenuhi**
> >
> > Tepat 3 "bukan pintu" dan tepat 1 "pintu" (kunci A atau B):
> >
> > $$\binom{6}{3} \times \binom{2}{1} = 20 \times 2 = 40$$
> >
> > **Langkah 2: Total kombinasi 4 dari 8**
> >
> > $$\binom{8}{4} = 70$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P = \frac{40}{70} = \frac{4}{7} \approx 0{,}5714$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}57$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "tepat 3 tidak membuka pintu" = $\binom{6}{3}/\binom{8}{4}$ (lupa memilih 1 kunci pintu dari 2).
> > > - Salah menghitung: ada 2 kunci "pintu" (A dan B), bukan 1.
> >
> > > [!CAUTION] Red Flags
> > > - "Tepat 3 tidak membuka pintu" + "4 kunci dipilih" → 1 kunci lainnya membuka pintu (A atau B).
> > > - $\binom{6}{3} \times \binom{2}{1} = 40$; $\binom{8}{4} = 70$; $P = 40/70 = 4/7$.

---

## **No. 562**

The damage from an accident at a certain intersection follows a uniform distribution on the interval $[a, b]$, where $0 < a < 3$. The probability that the damage is greater than 4, given that it is greater than 3, is 0.90. The probability that the damage is greater than 4, given that it is less than 11, is 0.70.

Calculate the unconditional probability that the damage is greater than 4.

(A) 0.70  
(B) 0.75  
(C) 0.80  
(D) 0.85  
(E) 0.90  

> [!summary]+ **Jawaban No. 562**
>
> **(B). $0{,}75$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U[a, b]$: $P(X > c) = (b-c)/(b-a)$ untuk $a \leq c \leq b$.
>
> **Diketahui:**
> - $X \sim U[a, b]$, $0 < a < 3$
> - $P(X > 4 \mid X > 3) = 0{,}90$
> - $P(X > 4 \mid X < 11) = 0{,}70$
> - Target: $P(X > 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Dari $P(X > 4 \mid X > 3) = 0{,}90$**
> >
> > $$\frac{P(X > 4)}{P(X > 3)} = \frac{b-4}{b-3} = 0{,}90$$
> >
> > $$b - 4 = 0{,}90(b-3) = 0{,}90b - 2{,}7 \implies 0{,}10b = 1{,}3 \implies b = 13$$
> >
> > **Langkah 2: Dari $P(X > 4 \mid X < 11) = 0{,}70$**
> >
> > Karena $b = 13 > 11$:
> >
> > $$\frac{P(4 < X < 11)}{P(X < 11)} = \frac{11-4}{11-a} = \frac{7}{11-a} = 0{,}70$$
> >
> > $$11 - a = \frac{7}{0{,}70} = 10 \implies a = 1$$
> >
> > **Langkah 3: Hitung $P(X > 4)$**
> >
> > $$P(X > 4) = \frac{b - 4}{b - a} = \frac{13 - 4}{13 - 1} = \frac{9}{12} = 0{,}75$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}75$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab 0,70 atau 0,90 (nilai yang diberikan) — ini adalah probabilitas **bersyarat**, bukan unconditional.
> > > - Gagal menggunakan kedua kondisi untuk menentukan $a$ dan $b$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk Uniform: $P(X > c \mid X > d) = (b-c)/(b-d)$ jika $c > d$.
> > > - Perlu menyelesaikan $a$ dan $b$ terlebih dahulu, lalu hitung $P(X > 4)$ secara unconditional.

---

## **No. 563**

Losses under a boat insurance policy are exponentially distributed with mean $\dfrac{400}{\ln 2}$.

For each loss, the claim payment is the amount of the loss, up to a maximum of 1000.

Calculate the expected value of a claim payment.

(A) 298  
(B) 367  
(C) 400  
(D) 475  
(E) 577  

> [!summary]+ **Jawaban No. 563**
>
> **(D). $475$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $C = \min(X, 1000)$, $X \sim \text{Exp}(\beta)$:
> >
> > $$E[C] = \int_0^{1000} x f(x)\,dx + 1000 \cdot P(X > 1000)$$
> >
> > $$= \beta(1 - e^{-1000/\beta}) - 1000 e^{-1000/\beta} + 1000 e^{-1000/\beta} = \beta(1 - e^{-1000/\beta})$$
>
> **Diketahui:**
> - $\beta = 400/\ln 2$; target: $E[\min(X, 1000)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $e^{-1000/\beta}$**
> >
> > $$e^{-1000/\beta} = e^{-1000 \ln 2/400} = e^{-2{,}5\ln 2} = 2^{-2{,}5} = \frac{1}{4\sqrt{2}} \approx \frac{1}{5{,}6569} \approx 0{,}17678$$
> >
> > **Langkah 2: Terapkan rumus**
> >
> > $$E[C] = \beta(1 - e^{-1000/\beta}) - 1000 e^{-1000/\beta} + 1000 e^{-1000/\beta}$$
> >
> > Gunakan hasil integral lengkap dari solusi SOA:
> >
> > $$E[C] = \int_0^{1000} x \cdot \frac{1}{\beta} e^{-x/\beta}\,dx + 1000 \cdot e^{-1000/\beta}$$
> >
> > $$= \beta(1 - e^{-1000/\beta}) + 1000 e^{-1000/\beta} - 1000 e^{-1000/\beta}$$
> >
> > Dari solusi SOA: $E[C] = \beta - \beta e^{-1000/\beta} + 1000 e^{-1000/\beta} - 1000 e^{-1000/\beta} = \beta(1 - e^{-1000/\beta})$
> >
> > $$= \frac{400}{\ln 2}(1 - 2^{-2{,}5}) = \frac{400}{\ln 2}\left(1 - \frac{1}{4\sqrt{2}}\right)$$
> >
> > $$= \frac{400}{0{,}6931}(1 - 0{,}17678) = 577{,}08 \times 0{,}82322 \approx 475{,}06$$
> >
> > **Hasil Akhir:** **(D)**. $475$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[\min(X,m)] = E[X] = \beta$ — ini hanya benar jika $m \to \infty$.
> > > - Lupa bahwa $e^{-1000/\beta} = 2^{-2{,}5}$ menggunakan substitusi $\beta = 400/\ln 2$.
> >
> > > [!CAUTION] Red Flags
> > > - $E[\min(X, m)] = \beta(1 - e^{-m/\beta})$ — hafalkan formula penting ini untuk Eksponensial dengan limit.

---

## **No. 564**

The length of an exchange student's phone call depends on whether the call is domestic or international. Lengths of domestic calls are exponentially distributed with a mean of 0.75 minutes, and lengths of international calls are exponentially distributed with a mean of 0.50 minutes. Each call has a 40% probability of being a domestic call and a 60% probability of being an international call.

Calculate the probability that the length of a randomly selected phone call by the student is between one and three minutes.

(A) 0.178  
(B) 0.200  
(C) 0.222  
(D) 0.250  
(E) 0.378  

> [!summary]+ **Jawaban No. 564**
>
> **(A). $0{,}178$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Total Probabilitas:
> >
> > $$P(1 < X < 3) = P(1 < X < 3 \mid D) P(D) + P(1 < X < 3 \mid I) P(I)$$
>
> **Diketahui:**
> - $D$: domestik ($\beta_D = 0{,}75$), $P(D) = 0{,}40$
> - $I$: internasional ($\beta_I = 0{,}50$), $P(I) = 0{,}60$
> - Target: $P(1 < X < 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas bersyarat domestik**
> >
> > $$P(1 < X < 3 \mid D) = e^{-1/0{,}75} - e^{-3/0{,}75} = e^{-4/3} - e^{-4} \approx 0{,}2636 - 0{,}0183 = 0{,}2453$$
> >
> > **Langkah 2: Hitung probabilitas bersyarat internasional**
> >
> > $$P(1 < X < 3 \mid I) = e^{-1/0{,}50} - e^{-3/0{,}50} = e^{-2} - e^{-6} \approx 0{,}1353 - 0{,}0025 = 0{,}1329$$
> >
> > **Langkah 3: Total Probabilitas**
> >
> > $$P(1 < X < 3) = 0{,}40 \times 0{,}2453 + 0{,}60 \times 0{,}1329$$
> >
> > $$= 0{,}09812 + 0{,}07974 = 0{,}17786 \approx 0{,}178$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}178$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira mean campuran = $0{,}40 \times 0{,}75 + 0{,}60 \times 0{,}50 = 0{,}60$, lalu menggunakan distribusi Eksponensial tunggal — campuran Eksponensial bukan Eksponensial.
> > > - Salah menghitung: $e^{-1/0{,}75} = e^{-4/3} \approx 0{,}2636$, bukan $e^{-0{,}75}$.
> >
> > > [!CAUTION] Red Flags
> > > - Campuran dua Eksponensial → gunakan Total Probabilitas, kondisikan pada tipe panggilan.
> > > - $P(a < X < b \mid \text{Exp}(\beta)) = e^{-a/\beta} - e^{-b/\beta}$.

---

## **No. 565**

The proportion of cotton plants on a large farm infested with boll weevils is modeled by a continuous random variable with probability density function

$$f(x) = 20x^3(1-x), \quad 0 \leq x \leq 1$$

Calculate the standard deviation of the proportion of cotton plants on the farm that are infested with boll weevils.

(A) 0.032  
(B) 0.178  
(C) 0.476  
(D) 0.690  
(E) 0.959  

> [!summary]+ **Jawaban No. 565**
>
> **(B). $0{,}178$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Ini adalah distribusi Beta dengan $\alpha = 4$ dan $\beta = 2$.
> >
> > $$\text{Var}(\text{Beta}(\alpha,\beta)) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)} = \frac{4 \times 2}{6^2 \times 7} = \frac{8}{252} = \frac{2}{63}$$
>
> **Diketahui:**
> - $f(x) = 20x^3(1-x)$ untuk $0 \leq x \leq 1$ → Beta$(\alpha=4, \beta=2)$
> - Target: $\text{SD}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$**
> >
> > $$E[X] = \int_0^1 x \cdot 20x^3(1-x)\,dx = 20\int_0^1 (x^4 - x^5)\,dx = 20\left(\frac{1}{5} - \frac{1}{6}\right) = 20 \cdot \frac{1}{30} = \frac{2}{3}$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 20\int_0^1 (x^5 - x^6)\,dx = 20\left(\frac{1}{6} - \frac{1}{7}\right) = 20 \cdot \frac{1}{42} = \frac{10}{21}$$
> >
> > **Langkah 3: Hitung $\text{Var}(X)$ dan $\text{SD}(X)$**
> >
> > $$\text{Var}(X) = \frac{10}{21} - \left(\frac{2}{3}\right)^2 = \frac{10}{21} - \frac{4}{9} = \frac{30}{63} - \frac{28}{63} = \frac{2}{63} \approx 0{,}03175$$
> >
> > $$\text{SD}(X) = \sqrt{\frac{2}{63}} = \sqrt{0{,}03175} \approx 0{,}17817$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}178$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $\text{Var}(X) \approx 0{,}032$ (tanpa akar) — soal meminta SD, bukan variansi.
> > > - Salah menghitung: $E[X^2] - (E[X])^2 = 10/21 - 4/9$ → harus samakan penyebut: $30/63 - 28/63 = 2/63$.
> >
> > > [!CAUTION] Red Flags
> > > - Beta$(\alpha, \beta)$: mean $= \alpha/(\alpha+\beta)$, variansi $= \alpha\beta/[(\alpha+\beta)^2(\alpha+\beta+1)]$.
> > > - Jangan salah: $\text{SD} = \sqrt{\text{Var}}$, bukan Var itu sendiri.

---

## **No. 566**

The annual number of claims per policy for a class of insurance policies is modeled by a Poisson distribution with mean 1.20.

A policy is randomly selected from those policies that had at least one claim in the past year.

Calculate the probability that the selected policy had at least three claims in the past year.

(A) 0.10  
(B) 0.12  
(C) 0.15  
(D) 0.17  
(E) 0.20  

> [!summary]+ **Jawaban No. 566**
>
> **(D). $0{,}17$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $$P(X \geq 3 \mid X \geq 1) = \frac{P(X \geq 3)}{P(X \geq 1)} = \frac{1 - P(X \leq 2)}{1 - P(X = 0)}$$
>
> **Diketahui:**
> - $X \sim \text{Poisson}(1{,}20)$; Target: $P(X \geq 3 \mid X \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X = 0)$, $P(X = 1)$, $P(X = 2)$**
> >
> > $$P(X=0) = e^{-1{,}2} \approx 0{,}30119$$
> >
> > $$P(X=1) = 1{,}2 e^{-1{,}2} \approx 0{,}36143$$
> >
> > $$P(X=2) = \frac{1{,}44}{2} e^{-1{,}2} \approx 0{,}21686$$
> >
> > **Langkah 2: Hitung probabilitas**
> >
> > $$P(X \geq 1) = 1 - 0{,}30119 = 0{,}69881$$
> >
> > $$P(X \geq 3) = 1 - 0{,}30119 - 0{,}36143 - 0{,}21686 = 0{,}12052$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(X \geq 3 \mid X \geq 1) = \frac{0{,}12052}{0{,}69881} \approx 0{,}17247$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $P(X \geq 3) \approx 0{,}12$ tanpa pengkondisian.
> > > - Menggunakan $P(X \geq 1) = 1$ sebagai penyebut — penyebut harus $P(X \geq 1) < 1$.
> >
> > > [!CAUTION] Red Flags
> > > - "Dipilih dari polis yang memiliki setidaknya satu klaim" → kondisi $X \geq 1$ → probabilitas bersyarat.

---

## **No. 567**

A company tests five batteries. Each battery has a probability $p$ of being defective, where $p$ is a constant. The events of different batteries being defective are mutually independent.

The number of defective batteries out of the five batteries is a random variable $N$, where $E(N^2) = 1{,}80$.

Calculate $\text{Var}(N)$.

(A) 0.80  
(B) 0.98  
(C) 1.15  
(D) 1.67  
(E) 1.80  

> [!summary]+ **Jawaban No. 567**
>
> **(A). $0{,}80$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $N \sim B(5, p)$: $E[N] = 5p$, $\text{Var}(N) = 5p(1-p)$.
> >
> > $E[N^2] = \text{Var}(N) + (E[N])^2 = 5p(1-p) + (5p)^2 = 5p - 5p^2 + 25p^2 = 5p + 20p^2$
>
> **Diketahui:**
> - $N \sim B(5, p)$; $E[N^2] = 1{,}80$
> - Target: $\text{Var}(N)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Selesaikan persamaan untuk $p$**
> >
> > $$5p + 20p^2 = 1{,}80 \implies 20p^2 + 5p - 1{,}80 = 0$$
> >
> > Kalikan 10: $200p^2 + 50p - 18 = 0$; gunakan formula kuadrat:
> >
> > $$p = \frac{-50 \pm \sqrt{2500 + 4 \times 200 \times 18}}{400} = \frac{-50 \pm \sqrt{2500 + 14400}}{400} = \frac{-50 \pm \sqrt{16900}}{400} = \frac{-50 \pm 130}{400}$$
> >
> > $$p = \frac{80}{400} = 0{,}20 \quad (\text{ambil nilai positif})$$
> >
> > **Langkah 2: Hitung $\text{Var}(N)$**
> >
> > $$\text{Var}(N) = 5 \times 0{,}20 \times (1 - 0{,}20) = 5 \times 0{,}20 \times 0{,}80 = 0{,}80$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}80$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(N) = E[N^2] = 1{,}80$ — ini salah; $\text{Var}(N) = E[N^2] - (E[N])^2$.
> > > - Gagal menyelesaikan persamaan kuadrat dengan benar — pastikan $p > 0$.
> >
> > > [!CAUTION] Red Flags
> > > - $E[N^2] = \text{Var}(N) + (E[N])^2$ — jangan langsung menggunakan $E[N^2]$ sebagai variansi.
> > > - Persamaan $20p^2 + 5p - 1{,}80 = 0$ → $p = 0{,}20$ atau $p < 0$ (buang nilai negatif).

---

## **No. 568**

Policyholders of a particular type of insurance policy will have either zero claims or one claim. The probability of zero claims is 20%. If a claim is received, the claim size follows a normal distribution with mean 50,000 and standard deviation $c$.

The probability that a randomly selected policyholder has a claim exceeding 55,000 is 0.1837.

Calculate $c$.

(A) 5546  
(B) 6125  
(C) 6490  
(D) 6756  
(E) 7120  

> [!summary]+ **Jawaban No. 568**
>
> **(D). $6756$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $$P(\text{klaim} > 55000) = P(\text{ada klaim}) \times P(X > 55000 \mid \text{ada klaim})$$
> >
> > $$0{,}1837 = 0{,}80 \times P\!\left(Z > \frac{55000 - 50000}{c}\right)$$
>
> **Diketahui:**
> - $P(\text{0 klaim}) = 0{,}20$; $P(\text{1 klaim}) = 0{,}80$
> - $X \mid \text{ada klaim} \sim N(50000, c^2)$
> - $P(\text{klaim} > 55000) = 0{,}1837$
> - Target: $c$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X > 55000 \mid \text{ada klaim})$**
> >
> > $$P(X > 55000 \mid \text{ada klaim}) = \frac{0{,}1837}{0{,}80} = 0{,}229625$$
> >
> > **Langkah 2: Standarisasi**
> >
> > $$P\!\left(Z > \frac{5000}{c}\right) = 0{,}229625 \implies \Phi\!\left(\frac{5000}{c}\right) = 0{,}770375$$
> >
> > $$\frac{5000}{c} = z_{0{,}770} \approx 0{,}74008$$
> >
> > **Langkah 3: Selesaikan untuk $c$**
> >
> > $$c = \frac{5000}{0{,}74008} \approx 6756$$
> >
> > **Hasil Akhir:** **(D)**. $6756$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung menggunakan $P(X > 55000) = 0{,}1837$ tanpa mempertimbangkan probabilitas ada klaim (0,80).
> > > - Mengira $P(X > 55000 \mid \text{ada klaim}) = 0{,}1837$, padahal ini adalah $P(\text{klaim} > 55000)$ secara marginal.
> >
> > > [!CAUTION] Red Flags
> > > - $P(\text{klaim} > c) = P(\text{ada klaim}) \times P(X > c \mid \text{ada klaim})$ — pisahkan dua kejadian.
> > > - $\Phi^{-1}(0{,}770) \approx 0{,}740$ dari tabel normal baku.

---

## **No. 569**

An insurance policy covers a house for ten calendar years for losses due to hailstorm and theft. Only one loss due to hailstorm and only one loss due to theft are covered by the policy during any one calendar year.

For the $k$th calendar year let $H_k$ be the event that the policy incurs a loss due to hailstorm and let $T_k$ be the event that the policy incurs a loss due to theft. Suppose that the events $H_1, \ldots, H_{10}, T_1, \ldots, T_{10}$ are mutually independent, and that $P[H_k] = 0{,}2$ and $P[T_k] = 0{,}1$ for all $k$.

Calculate the probability that the total number of hailstorm and theft losses covered by the policy during the ten calendar years is less than two.

(A) 0.17  
(B) 0.23  
(C) 0.77  
(D) 0.80  
(E) 0.83  

> [!summary]+ **Jawaban No. 569**
>
> **(A). $0{,}17$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $T \sim B(10, 0{,}1)$ dan $H \sim B(10, 0{,}2)$ independen. Total $= T + H$.
> >
> > $P(T+H < 2) = P(T+H=0) + P(T+H=1)$
>
> **Diketahui:**
> - $H = \sum_{k=1}^{10} \mathbf{1}_{H_k} \sim B(10, 0{,}2)$; $T = \sum_{k=1}^{10} \mathbf{1}_{T_k} \sim B(10, 0{,}1)$; independen
> - Target: $P(T + H < 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(T=0)$, $P(T=1)$**
> >
> > $$P(T=0) = (0{,}9)^{10} = 0{,}348678$$
> >
> > $$P(T=1) = \binom{10}{1}(0{,}1)(0{,}9)^9 = 10 \times 0{,}1 \times 0{,}387420 = 0{,}387420$$
> >
> > **Langkah 2: Hitung $P(H=0)$, $P(H=1)$**
> >
> > $$P(H=0) = (0{,}8)^{10} = 0{,}107374$$
> >
> > $$P(H=1) = \binom{10}{1}(0{,}2)(0{,}8)^9 = 10 \times 0{,}2 \times 0{,}134218 = 0{,}268435$$
> >
> > **Langkah 3: Hitung $P(T+H < 2)$**
> >
> > $P(T+H=0) = P(T=0) \times P(H=0) = 0{,}348678 \times 0{,}107374 = 0{,}037442$
> >
> > $P(T+H=1) = P(T=0)P(H=1) + P(T=1)P(H=0)$
> >
> > $= 0{,}348678 \times 0{,}268435 + 0{,}387420 \times 0{,}107374$
> >
> > $= 0{,}093614 + 0{,}041601 = 0{,}135215$
> >
> > $$P(T+H < 2) = 0{,}037442 + 0{,}135215 = 0{,}172657 \approx 0{,}17$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $T + H \sim B(20, 0{,}15)$ — ini salah karena $p_T \neq p_H$; jumlah dua Binomial dengan $p$ berbeda bukan Binomial.
> > > - Lupa menghitung $P(T+H=1)$ yang merupakan penjumlahan dua skenario.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk $P(T+H = 1)$: kasus $(T=0, H=1)$ ATAU $(T=1, H=0)$ — dua skenario berbeda.
> > > - Karena $T$ dan $H$ independen: $P(T=a, H=b) = P(T=a) \times P(H=b)$.

---

## **No. 570**

A homeowner hires a moving company to transport ten pieces of electronic equipment to a new home. Each piece is equally likely to be damaged during the move, and the event of damage to any one piece is independent of the events of damage to the other pieces. The homeowner fully insures two of these pieces, partially insures three of them, and leaves the other five pieces uninsured.

During the move, three pieces are damaged.

Calculate the probability that at least one damaged piece is fully insured and at least one damaged piece is partially insured.

(A) 0.242  
(B) 0.250  
(C) 0.325  
(D) 0.378  
(E) 0.400  

> [!summary]+ **Jawaban No. 570**
>
> **(C). $0{,}325$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Total kombinasi 3 barang rusak dari 10: $\binom{10}{3} = 120$.
> >
> > Hitung kasus favorabel: $\geq 1$ dari Fully (F) dan $\geq 1$ dari Partially (P).
>
> **Diketahui:**
> - 10 barang: 2 Fully (F), 3 Partially (P), 5 Uninsured (U)
> - 3 barang rusak dipilih secara acak
> - Target: $P(\geq 1 \text{ F dan} \geq 1 \text{ P dalam 3 rusak})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi kasus yang memenuhi**
> >
> > Kasus (jumlah F, P, U) yang memenuhi syarat $\geq 1$ F dan $\geq 1$ P:
> >
> > (i) $(1F, 1P, 1U)$: $\binom{2}{1}\binom{3}{1}\binom{5}{1} = 2 \times 3 \times 5 = 30$
> >
> > (ii) $(1F, 2P, 0U)$: $\binom{2}{1}\binom{3}{2}\binom{5}{0} = 2 \times 3 \times 1 = 6$
> >
> > (iii) $(2F, 1P, 0U)$: $\binom{2}{2}\binom{3}{1}\binom{5}{0} = 1 \times 3 \times 1 = 3$
> >
> > **Langkah 2: Jumlahkan kasus favorabel**
> >
> > $$30 + 6 + 3 = 39$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P = \frac{39}{120} = 0{,}325$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}325$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa kasus (2F, 1P) atau (1F, 2P) — hanya menghitung kasus "satu dari masing-masing".
> > > - Menggunakan pendekatan komplemen secara salah: $1 - P(\text{tidak ada F}) - P(\text{tidak ada P})$ perlu dikurangi penghitungan ganda (inklusi-ekslusi).
> >
> > > [!CAUTION] Red Flags
> > > - Enumerasi langsung lebih aman dari komplemen untuk soal ini.
> > > - Verifikasi: $30 + 6 + 3 = 39$; $39/120 = 0{,}325$ ✓.

---
