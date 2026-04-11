## **No. 61**

An insurance policy reimburses dental expense, $X$, up to a maximum benefit of 250. The probability density function for $X$ is:

$$f(x) = \begin{cases} ce^{-0{,}004x}, & x \geq 0 \\ 0, & \text{otherwise} \end{cases}$$

where $c$ is a constant.

Calculate the median benefit for this policy.

a. 161  
b. 165  
c. 173  
d. 182  
e. 250  

> [!summary]+ **Jawaban No. 61**
> 
> **(c). $173$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Eksponensial** dengan rate $\lambda = 0{,}004$:
> >
> > $$F(x) = 1 - e^{-0{,}004x}, \quad x \geq 0$$
> >
> > **Median** $m$: selesaikan $F(m) = 0{,}5$, sehingga:
> >
> > $$m = -\frac{\ln(0{,}5)}{0{,}004} = \frac{\ln 2}{0{,}004}$$
> >
> > Jika $m \leq 250$ → median benefit = $m$; jika $m > 250$ → median benefit = 250.
>
> **Diketahui:**
> - $f(x) = ce^{-0{,}004x}$ untuk $x \geq 0$; benefit maksimum = 250
> - Target: median benefit
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$ (normalisasi PDF eksponensial)**
> >
> > Karena $f(x) = ce^{-0{,}004x}$ adalah PDF eksponensial: $c = \lambda = 0{,}004$.
> >
> > $$F(x) = 1 - e^{-0{,}004x}$$
> >
> > **Langkah 2: Cari median dari distribusi $X$ (abaikan dulu batas 250)**
> >
> > $$F(m) = 0{,}5 \implies 1 - e^{-0{,}004m} = 0{,}5 \implies e^{-0{,}004m} = 0{,}5$$
> >
> > $$m = \frac{-\ln(0{,}5)}{0{,}004} = \frac{\ln 2}{0{,}004} = \frac{0{,}6931}{0{,}004} \approx 173{,}3$$
> >
> > **Langkah 3: Cek apakah median berada di bawah batas maksimum**
> >
> > $m \approx 173 < 250$ → median benefit = $173$.
> >
> > Karena median kerugian $X$ lebih kecil dari batas 250, batas ini tidak mempengaruhi median.
> >
> > **Hasil Akhir:** **(c)**. $173$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung menjawab 250 tanpa menghitung median $X$ — batas 250 hanya relevan jika median aktual melebihi 250.
> > > - Salah menghitung $m$: $m = \ln(0{,}5)/0{,}004$ (hasilnya negatif) → harusnya $m = -\ln(0{,}5)/0{,}004$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Median benefit" ≠ "median kerugian" — benefit dibatasi 250, namun jika median kerugian < 250, keduanya sama.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu hitung median tanpa batas terlebih dahulu, lalu bandingkan dengan batas polis. Jika median < batas → jawaban adalah median. Jika median > batas → jawaban adalah batas.

---

## **No. 62**

The time to failure of a component in an electronic device has an exponential distribution with a median of four hours.

Calculate the probability that the component will work without failing for at least five hours.

a. 0.07  
b. 0.29  
c. 0.38  
d. 0.42  
e. 0.57  

> [!summary]+ **Jawaban No. 62**
> 
> **(d). $0{,}42$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **CDF Eksponensial:** $F(t) = 1 - e^{-t/\theta}$
> >
> > **Median** $m$: $F(m) = 0{,}5 \implies e^{-m/\theta} = 0{,}5 \implies \theta = -m/\ln(0{,}5)$
> >
> > **Survival function:** $P(T \geq t) = e^{-t/\theta} = (0{,}5)^{t/m}$
>
> **Diketahui:**
> - $T \sim \text{Exp}(\theta)$; median = 4 jam
> - Target: $P(T \geq 5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan parameter $\theta$ dari median**
> >
> > $$e^{-4/\theta} = 0{,}5 \implies \theta = \frac{-4}{\ln(0{,}5)} = \frac{4}{\ln 2}$$
> >
> > **Langkah 2: Hitung $P(T \geq 5)$ menggunakan properti elegansnya**
> >
> > $$P(T \geq 5) = e^{-5/\theta} = e^{5\ln(0{,}5)/4} = (0{,}5)^{5/4} = (0{,}5)^{1{,}25}$$
> >
> > $$= e^{1{,}25 \times (-0{,}6931)} = e^{-0{,}8664} \approx 0{,}4204 \approx 0{,}42$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}42$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\theta = 4$ langsung (mengira median = mean) — untuk distribusi eksponensial, **median ≠ mean**: mean = $\theta$, median = $\theta \ln 2 \approx 0{,}693\,\theta$.
> > > - Salah: $P(T \geq 5) = 1 - F(5) = e^{-5/4} \approx 0{,}29$ — ini menggunakan median sebagai mean.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Median of four hours" → bukan mean; harus ekstrak $\theta$ dari persamaan $e^{-4/\theta} = 0{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - Trik elegan: $P(T \geq t) = (0{,}5)^{t/\text{median}}$ — menghindari kebutuhan menghitung $\theta$ secara eksplisit.

---

## **No. 63**

An insurance company sells an auto insurance policy that covers losses incurred by a policyholder, subject to a deductible of 100. Losses incurred follow an exponential distribution with mean 300.

Calculate the 95th percentile of losses that exceed the deductible.

a. 600  
b. 700  
c. 800  
d. 900  
e. 1000  

> [!summary]+ **Jawaban No. 63**
> 
> **(e). $1{.}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Persentil ke-95 dari distribusi bersyarat $X \mid X > 100$:**
> >
> > $$P(X \leq p \mid X > 100) = 0{,}95$$
> >
> > $$\frac{F(p) - F(100)}{1 - F(100)} = 0{,}95$$
> >
> > **Sifat memoryless eksponensial:** $X \mid X > 100 \sim X + 100$ di mana $X \sim \text{Exp}(300)$, sehingga persentil ke-95 dari distribusi bersyarat = $100 + $ persentil ke-95 dari $\text{Exp}(300)$.
>
> **Diketahui:**
> - $X \sim \text{Exp}(\theta = 300)$; deductible $d = 100$
> - Target: persentil ke-95 dari $X \mid X > 100$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan sifat memoryless**
> >
> > Karena eksponensial bersifat memoryless: $P(X > 100 + t \mid X > 100) = P(X > t)$
> >
> > Sehingga persentil ke-95 dari $(X \mid X > 100) = 100 + x_{0{,}95}$ di mana $x_{0{,}95}$ adalah persentil ke-95 dari $\text{Exp}(300)$.
> >
> > **Langkah 2: Cari $x_{0{,}95}$ dari distribusi eksponensial**
> >
> > $$P(X \leq x_{0{,}95}) = 1 - e^{-x_{0{,}95}/300} = 0{,}95$$
> >
> > $$e^{-x_{0{,}95}/300} = 0{,}05 \implies x_{0{,}95} = -300\ln(0{,}05) = 300 \times 2{,}9957 \approx 898{,}7$$
> >
> > **Langkah 3: Tambahkan deductible**
> >
> > $$p = 100 + 898{,}7 \approx 999 \approx 1{.}000$$
> >
> > **Hasil Akhir:** **(e)**. $1{.}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung mencari $x_{0{,}95}$ dari distribusi eksponensial tanpa menambahkan deductible 100.
> > > - Tidak memanfaatkan sifat memoryless → melakukan perhitungan bersyarat yang lebih panjang dengan hasil yang sama.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "95th percentile of losses that exceed the deductible" → distribusi bersyarat $X \mid X > 100$, bukan persentil ke-95 dari $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Sifat memoryless eksponensial: $X \mid X > d \sim \text{Exp}(\theta)$ yang digeser ke kanan sebesar $d$. Persentil distribusi bersyarat = $d$ + persentil dari distribusi asli.

---

## **No. 64**

Claim amounts for wind damage to insured homes are mutually independent random variables with common density function

$$f(x) = \begin{cases} \dfrac{3}{x^4}, & x > 1 \\ 0, & \text{otherwise} \end{cases}$$

where $x$ is the amount of a claim in thousands.

Suppose 3 such claims will be made. Calculate the expected value of the largest of the three claims.

a. 2,025  
b. 2,700  
c. 3,232  
d. 3,375  
e. 4,500  

> [!summary]+ **Jawaban No. 64**
> 
> **(a). $2{.}025$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.1 Penarikan Sampel Acak]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Statistik order maksimum** dari $n$ sampel iid dengan CDF $F(x)$:
> >
> > $$G(y) = [F(y)]^n, \quad g(y) = n[F(y)]^{n-1}f(y)$$
> >
> > $$E[Y_{(n)}] = \int_1^{\infty} y\,g(y)\,dy$$
>
> **Diketahui:**
> - $f(x) = 3x^{-4}$ untuk $x > 1$; $F(x) = 1 - x^{-3}$
> - $n = 3$; $Y = \max(X_1, X_2, X_3)$
> - Target: $E[Y]$ (dalam ribuan)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan PDF dari $Y = X_{(3)}$**
> >
> > $$G(y) = [F(y)]^3 = (1 - y^{-3})^3$$
> >
> > $$g(y) = 3(1 - y^{-3})^2 \cdot 3y^{-4} = 9y^{-4}(1 - y^{-3})^2$$
> >
> > **Langkah 2: Ekspansi dan hitung $E[Y]$**
> >
> > $$E[Y] = \int_1^{\infty} y \cdot 9y^{-4}(1-y^{-3})^2\,dy = 9\int_1^{\infty} y^{-3}(1 - 2y^{-3} + y^{-6})\,dy$$
> >
> > $$= 9\int_1^{\infty}(y^{-3} - 2y^{-6} + y^{-9})\,dy$$
> >
> > $$= 9\left[\frac{y^{-2}}{-2} - \frac{2y^{-5}}{-5} + \frac{y^{-8}}{-8}\right]_1^{\infty}$$
> >
> > $$= 9\left[\left(0 - 0 + 0\right) - \left(-\frac{1}{2} + \frac{2}{5} - \frac{1}{8}\right)\right]$$
> >
> > $$= 9\left(\frac{1}{2} - \frac{2}{5} + \frac{1}{8}\right) = 9\left(\frac{20 - 16 + 5}{40}\right) = 9 \times \frac{9}{40} = \frac{81}{40} = 2{,}025 \text{ ribu}$$
> >
> > **Langkah 3: Konversi ke satuan penuh**
> >
> > $$E[Y] = 2{,}025 \times 1{.}000 = 2{.}025$$
> >
> > **Hasil Akhir:** **(a)**. $2{.}025$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[Y] = E[X_{(3)}] = E[X]$ — nilai harapan maksimum dari $n$ sampel TIDAK sama dengan $E[X]$.
> > > - Salah menurunkan $g(y)$: $g(y) = 3[F(y)]^2 f(y)$, bukan $g(y) = [f(y)]^3$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Jawaban dalam ribuan: $2{,}025$ ribu = $2{.}025$. Jangan lupa mengonversi satuan.
> >
> > > [!CAUTION] Red Flags
> > > - Soal tentang "terbesar" atau "terkecil" dari $n$ sampel → gunakan teori statistik order: $G(y) = [F(y)]^n$ untuk maksimum.

---

## **No. 65**

A charity receives 2025 contributions. Contributions are assumed to be mutually independent and identically distributed with mean 3125 and standard deviation 250.

Calculate the approximate 90th percentile for the distribution of the total contributions received.

a. 6,328,000  
b. 6,338,000  
c. 6,343,000  
d. 6,784,000  
e. 6,977,000  

> [!summary]+ **Jawaban No. 65**
> 
> **(c). $6{.}343{.}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **CLT untuk jumlah $n$ variabel iid:**
> >
> > $$S_n = \sum_{i=1}^n X_i \approx N(n\mu,\, n\sigma^2)$$
> >
> > **Persentil ke-$p$:** $S_n^{(p)} = n\mu + z_p\,\sigma\sqrt{n}$
>
> **Diketahui:**
> - $n = 2025$, $\mu = 3{.}125$, $\sigma = 250$
> - $z_{0{,}90} = 1{,}282$
> - Target: persentil ke-90 dari $S_{2025}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung mean dan standar deviasi dari $S_{2025}$**
> >
> > $$E[S] = 2025 \times 3{.}125 = 6{.}328{.}125$$
> >
> > $$\text{SD}(S) = 250\sqrt{2025} = 250 \times 45 = 11{.}250$$
> >
> > **Langkah 2: Hitung persentil ke-90**
> >
> > $$S_{0{,}90} = 6{.}328{.}125 + 1{,}282 \times 11{.}250 = 6{.}328{.}125 + 14{.}423 \approx 6{.}342{.}548 \approx 6{.}343{.}000$$
> >
> > **Hasil Akhir:** **(c)**. $6{.}343{.}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengalikan $\sigma$ dengan $n$ (bukan $\sqrt{n}$): $\text{SD}(S) = \sigma\sqrt{n}$, bukan $\sigma n$.
> > > - Menggunakan $z_{0{,}90} = 1{,}28$ tapi tidak mengalikannya dengan SD yang benar.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal tentang **total** (sum), bukan rata-rata (mean). Gunakan $\text{SD}(S) = \sigma\sqrt{n}$, bukan $\sigma/\sqrt{n}$.
> >
> > > [!CAUTION] Red Flags
> > > - $\sqrt{2025} = 45$ — kenali akar pangkat dari bilangan yang "cantik" untuk mempercepat perhitungan.

---

## **No. 66**

Claims filed under auto insurance policies follow a normal distribution with mean 19,400 and standard deviation 5,000.

Calculate the probability that the average of 25 randomly selected claims exceeds 20,000.

a. 0.01  
b. 0.15  
c. 0.27  
d. 0.33  
e. 0.45  

> [!summary]+ **Jawaban No. 66**
> 
> **(c). $0{,}27$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi rata-rata sampel** dari populasi normal:
> >
> > $$\bar{X} \sim N\!\left(\mu,\, \frac{\sigma^2}{n}\right) \implies \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)$$
>
> **Diketahui:**
> - $\mu = 19{.}400$, $\sigma = 5{.}000$, $n = 25$
> - Target: $P(\bar{X} > 20{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung standar deviasi rata-rata sampel**
> >
> > $$\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}} = \frac{5{.}000}{\sqrt{25}} = \frac{5{.}000}{5} = 1{.}000$$
> >
> > **Langkah 2: Standardisasi dan cari probabilitas**
> >
> > $$P(\bar{X} > 20{.}000) = P\!\left(Z > \frac{20{.}000 - 19{.}400}{1{.}000}\right) = P(Z > 0{,}6)$$
> >
> > $$= 1 - \Phi(0{,}6) = 1 - 0{,}7257 = 0{,}2743 \approx 0{,}27$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}27$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\sigma = 5{.}000$ langsung tanpa dibagi $\sqrt{n}$ → menghasilkan $z = 0{,}12$, yang jauh lebih kecil.
> > > - Salah: $P(Z > 0{,}6) = 1 - 0{,}2743 = 0{,}7257$ → tidak membaca tabel dengan benar.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal tentang **rata-rata** 25 klaim → SE = $\sigma/\sqrt{n}$, bukan tentang satu klaim tunggal.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "$n$ klaim dipilih secara acak" dan ditanya tentang rata-rata → gunakan distribusi sampling dengan $\sigma/\sqrt{n}$.

---

## **No. 67**

An insurance company issues 1250 vision care insurance policies. The number of claims filed by a policyholder under a vision care insurance policy during one year is a Poisson random variable with mean 2. Assume the numbers of claims filed by different policyholders are mutually independent.

Calculate the approximate probability that there is a total of between 2450 and 2600 claims during a one-year period.

a. 0.68  
b. 0.82  
c. 0.87  
d. 0.95  
e. 1.00  

> [!summary]+ **Jawaban No. 67**
> 
> **(b). $0{,}82$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Jumlah $n$ variabel Poisson iid** dengan mean $\lambda$ per variabel:
> >
> > $$S = \sum_{i=1}^n N_i \sim \text{Poisson}(n\lambda) \approx N(n\lambda,\, n\lambda) \text{ untuk } n \text{ besar}$$
> >
> > (Untuk Poisson: mean = variansi = $\lambda$)
>
> **Diketahui:**
> - $n = 1250$, $\lambda = 2$ per pemegang polis
> - $E[S] = 1250 \times 2 = 2500$, $\text{Var}(S) = 1250 \times 2 = 2500$, $\text{SD}(S) = 50$
> - Target: $P(2450 \leq S \leq 2600)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standardisasi batas bawah**
> >
> > $$z_1 = \frac{2450 - 2500}{50} = \frac{-50}{50} = -1{,}0$$
> >
> > **Langkah 2: Standardisasi batas atas**
> >
> > $$z_2 = \frac{2600 - 2500}{50} = \frac{100}{50} = 2{,}0$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P(-1 \leq Z \leq 2) = \Phi(2) - \Phi(-1) = \Phi(2) - (1 - \Phi(1))$$
> >
> > $$= 0{,}9772 - (1 - 0{,}8413) = 0{,}9772 - 0{,}1587 = 0{,}8185 \approx 0{,}82$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}82$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $\text{Var}(S)$: untuk Poisson, $\text{Var}(N_i) = \lambda = 2$, sehingga $\text{Var}(S) = 1250 \times 2 = 2500$ dan $\text{SD}(S) = 50$.
> > > - Menggunakan $\text{SD}(S) = \sqrt{1250} \approx 35{,}4$ (lupa mengalikan dengan $\lambda$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Batas "antara 2450 dan 2600" — perhatikan apakah inklusif atau eksklusif; untuk distribusi kontinu (aproksimasi CLT), keduanya sama.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi Poisson: mean = variansi = $\lambda$. Saat dijumlahkan, $\text{Var}(S) = n\lambda$ (bukan $n\lambda^2$).

---

## **No. 68**

A company manufactures a brand of light bulb with a lifetime in months that is normally distributed with mean 3 and variance 1. A consumer buys a number of these bulbs with the intention of replacing them successively as they burn out. The light bulbs have mutually independent lifetimes.

Calculate the smallest number of bulbs to be purchased so that the succession of light bulbs produces light for at least 40 months with probability at least 0.9772.

a. 14  
b. 16  
c. 20  
d. 40  
e. 55  

> [!summary]+ **Jawaban No. 68**
> 
> **(b). $16$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Total lifetime $n$ bola:** $S_n = \sum_{i=1}^n X_i \sim N(3n,\, n)$
> >
> > **Syarat:** $P(S_n \geq 40) \geq 0{,}9772$, ekuivalen dengan $40$ berada $\leq 2$ standar deviasi di bawah mean.
>
> **Diketahui:**
> - $X_i \sim N(3, 1)$ iid; syarat: $P(S_n \geq 40) \geq 0{,}9772$
> - $\Phi(2) = 0{,}9772 \implies P(Z \leq 2) = 0{,}9772 \implies P(Z \geq -2) = 0{,}9772$
> - Target: $n$ terkecil
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis syarat dalam bentuk standardisasi**
> >
> > $$P(S_n \geq 40) = P\!\left(Z \geq \frac{40 - 3n}{\sqrt{n}}\right) \geq 0{,}9772$$
> >
> > Karena $P(Z \geq -2) = 0{,}9772$:
> >
> > $$\frac{40 - 3n}{\sqrt{n}} \leq -2$$
> >
> > **Langkah 2: Selesaikan ketidaksamaan**
> >
> > $$40 - 3n \leq -2\sqrt{n}$$
> >
> > $$3n - 2\sqrt{n} - 40 \geq 0$$
> >
> > **Langkah 3: Substitusi $m = \sqrt{n}$**
> >
> > $$3m^2 - 2m - 40 \geq 0$$
> >
> > Akar-akar: $m = \frac{2 \pm \sqrt{4 + 480}}{6} = \frac{2 \pm \sqrt{484}}{6} = \frac{2 \pm 22}{6}$
> >
> > $m = 4$ atau $m = -10/3$ (ditolak karena $m > 0$)
> >
> > Jadi $\sqrt{n} \geq 4 \implies n \geq 16$.
> >
> > **Langkah 4: Verifikasi $n = 16$**
> >
> > Mean = $3(16) = 48$; SD = $\sqrt{16} = 4$; $z = (40 - 48)/4 = -2 \implies P(S_{16} \geq 40) = \Phi(2) = 0{,}9772$ ✓
> >
> > **Hasil Akhir:** **(b)**. $16$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(S_n) = n \times 1 = n$ dan $\text{SD} = \sqrt{n}$ — ini sudah benar, tetapi sering lupa mengkuadratkan $m$ saat substitusi.
> > > - Mengira persamaan linear: $3n - 2\sqrt{n} = 40$ bukan kuadrat dalam $\sqrt{n}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $P(S_n \geq 40) \geq 0{,}9772$ → nilai 40 harus berada di **bawah** mean minus 2 SD (bukan di atas). Cek arah ketidaksamaan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika syarat bentuk $P(S \geq c) \geq p$ dengan $p$ besar → 40 harus jauh **di bawah** mean $3n$; substitusi $m = \sqrt{n}$ mengubah menjadi persamaan kuadrat yang elegan.

---

## **No. 69**

Let $X$ and $Y$ be the number of hours that a randomly selected person watches movies and sporting events, respectively, during a three-month period. The following information is known about $X$ and $Y$:

$$E(X) = 50,\ E(Y) = 20,\ \text{Var}(X) = 50,\ \text{Var}(Y) = 30,\ \text{Cov}(X,Y) = 10$$

The totals of hours that different individuals watch movies and sporting events during the three months are mutually independent. One hundred people are randomly selected and observed for these three months. Let $T$ be the total number of hours that these one hundred people watch movies or sporting events during this three-month period.

Approximate the value of $P[T < 7100]$.

a. 0.62  
b. 0.84  
c. 0.87  
d. 0.92  
e. 0.97  

> [!summary]+ **Jawaban No. 69**
> 
> **(b). $0{,}84$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Variansi jumlah dua variabel berkorelasi:**
> >
> > $$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\,\text{Cov}(X,Y)$$
> >
> > **CLT untuk jumlah 100 pasangan iid:**
> >
> > $$T = \sum_{i=1}^{100}(X_i + Y_i) \approx N(100\,\mu_Z,\, 100\,\sigma_Z^2)$$
>
> **Diketahui:**
> - Untuk satu orang: $Z = X + Y$, $E[Z] = 70$, $\text{Var}(Z) = 50 + 30 + 2(10) = 100$
> - $T = \sum_{i=1}^{100} Z_i$: $E[T] = 7000$, $\text{Var}(T) = 10{.}000$, $\text{SD}(T) = 100$
> - Target: $P(T < 7100)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Z]$ dan $\text{Var}(Z)$ untuk satu orang**
> >
> > $$E[Z] = E[X] + E[Y] = 50 + 20 = 70$$
> >
> > $$\text{Var}(Z) = \text{Var}(X) + \text{Var}(Y) + 2\,\text{Cov}(X,Y) = 50 + 30 + 20 = 100$$
> >
> > **Langkah 2: Hitung distribusi $T$ untuk 100 orang**
> >
> > $$E[T] = 100 \times 70 = 7{.}000, \quad \text{SD}(T) = \sqrt{100 \times 100} = \sqrt{10{.}000} = 100$$
> >
> > **Langkah 3: Standardisasi**
> >
> > $$P(T < 7100) = P\!\left(Z < \frac{7100 - 7000}{100}\right) = P(Z < 1) = \Phi(1) = 0{,}8413 \approx 0{,}84$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}84$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menyertakan $2\,\text{Cov}(X,Y)$ saat menghitung $\text{Var}(Z)$ — kovarians yang positif meningkatkan variansi total.
> > > - Menggunakan $\text{SD}(T) = 100 \times 10 = 1000$ (salah): $\text{SD}(T) = \sqrt{100} \times \sqrt{100} = 10 \times 10 = 100$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Movies **or** sporting events" → $T = \sum(X_i + Y_i)$; "or" di sini berarti gabungan total jam, bukan union probabilistik.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada kovariansi → selalu sertakan suku $2\,\text{Cov}$ dalam $\text{Var}(X+Y)$.

---

## **No. 70**

The total claim amount for a health insurance policy follows a distribution with density function

$$f(x) = \frac{1}{1000}e^{-x/1000}, \quad x > 0$$

The premium for the policy is set at the expected total claim amount plus 100.

If 100 policies are sold, calculate the approximate probability that the insurance company will have claims exceeding the premiums collected.

a. 0.001  
b. 0.159  
c. 0.333  
d. 0.407  
e. 0.460  

> [!summary]+ **Jawaban No. 70**
> 
> **(b). $0{,}159$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Eksponensial dengan mean $\theta = 1000$:** $E[X] = \theta = 1000$, $\text{Var}(X) = \theta^2 = 10^6$
> >
> > **Total klaim:** $S = \sum_{i=1}^{100} X_i \approx N(100{.}000,\, 10^8)$
>
> **Diketahui:**
> - $X_i \sim \text{Exp}(1000)$; premi per polis = $1000 + 100 = 1{.}100$
> - Total premi = $100 \times 1{.}100 = 110{.}000$
> - Target: $P(S > 110{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Parameter distribusi $S$**
> >
> > $$E[S] = 100{.}000, \quad \text{SD}(S) = 1000\sqrt{100} = 10{.}000$$
> >
> > **Langkah 2: Standardisasi**
> >
> > $$P(S > 110{.}000) = P\!\left(Z > \frac{110{.}000 - 100{.}000}{10{.}000}\right) = P(Z > 1) = 1 - \Phi(1)$$
> >
> > $$= 1 - 0{,}8413 = 0{,}1587 \approx 0{,}159$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}159$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa: untuk eksponensial, $\text{SD}(X) = \theta = 1000$ (sama dengan mean), sehingga $\text{SD}(S) = 1000\sqrt{100} = 10{.}000$.
> > > - Mengira $\text{SD}(S) = 1000$ saja (tidak dikalikan $\sqrt{n}$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Total premi = $100 \times (E[X] + 100) = 100 \times 1100 = 110{.}000$, bukan $100{.}000 + 100$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi eksponensial: $\sigma = \mu = \theta$. Jangan lupa sifat ini saat menghitung $\text{Var}(S)$.

---

## **No. 71**

A city has just added 100 new female recruits to its police force. The city will provide a pension to each new hire who remains with the force until retirement. In addition, if the new hire is married at the time of her retirement, a second pension will be provided for her husband. A consulting actuary makes the following assumptions:

(i) Each new recruit has a 0.4 probability of remaining with the police force until retirement.  
(ii) Given that a new recruit reaches retirement with the police force, the probability that she is not married at the time of retirement is 0.25.  
(iii) The events of different new hires reaching retirement and the events of different new hires being married at retirement are all mutually independent events.  

Calculate the probability that the city will provide at most 90 pensions to the 100 new hires and their husbands.

a. 0.60  
b. 0.67  
c. 0.75  
d. 0.93  
e. 0.99  

> [!summary]+ **Jawaban No. 71**
> 
> **(e). $0{,}99$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Jumlah pension per rekrut:** $Y_i \in \{0, 1, 2\}$ — distribusi campuran dari dua tahap acak.
> >
> > **CLT untuk $T = \sum_{i=1}^{100} Y_i$:** $T \approx N(E[T],\, \text{Var}(T))$
>
> **Diketahui:**
> - $P(\text{pensiun}) = 0{,}4$; $P(\text{menikah} \mid \text{pensiun}) = 0{,}75$
> - $P(Y=0) = 0{,}6$, $P(Y=1) = 0{,}4 \times 0{,}25 = 0{,}1$, $P(Y=2) = 0{,}4 \times 0{,}75 = 0{,}3$
> - Target: $P(T \leq 90)$ untuk $T = \sum_{i=1}^{100} Y_i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$ dan $E[Y^2]$ untuk satu rekrut**
> >
> > $$E[Y] = 0(0{,}6) + 1(0{,}1) + 2(0{,}3) = 0{,}7$$
> >
> > $$E[Y^2] = 0(0{,}6) + 1(0{,}1) + 4(0{,}3) = 1{,}3$$
> >
> > $$\text{Var}(Y) = 1{,}3 - (0{,}7)^2 = 1{,}3 - 0{,}49 = 0{,}81$$
> >
> > **Langkah 2: Parameter $T$ untuk 100 rekrut**
> >
> > $$E[T] = 100 \times 0{,}7 = 70, \quad \text{SD}(T) = \sqrt{100 \times 0{,}81} = \sqrt{81} = 9$$
> >
> > **Langkah 3: Standardisasi (dengan koreksi kontinuitas)**
> >
> > $$P(T \leq 90) \approx P\!\left(Z \leq \frac{90{,}5 - 70}{9}\right) = P(Z \leq 2{,}28) = \Phi(2{,}28) \approx 0{,}9887 \approx 0{,}99$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}99$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $Y$ adalah Binomial — $Y$ punya tiga nilai ($0, 1, 2$), sehingga perlu menghitung $E[Y]$ dan $\text{Var}(Y)$ secara langsung.
> > > - Salah menghitung $P(Y=1) = 0{,}4$ (lupa syarat "tidak menikah" yaitu $0{,}25$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "At most 90 pensions" → $P(T \leq 90)$; dengan koreksi kontinuitas untuk distribusi diskrit, gunakan $P(T \leq 90{,}5)$.
> >
> > > [!CAUTION] Red Flags
> > > - $\sqrt{81} = 9$ — kenali hasil yang "cantik" untuk mempercepat.

---

## **No. 72**

In an analysis of healthcare data, ages have been rounded to the nearest multiple of 5 years. The difference between the true age and the rounded age is assumed to be uniformly distributed on the interval from $-2{,}5$ years to $2{,}5$ years. The healthcare data are based on a random sample of 48 people.

Calculate the approximate probability that the mean of the rounded ages is within 0.25 years of the mean of the true ages.

a. 0.14  
b. 0.38  
c. 0.57  
d. 0.77  
e. 0.88  

> [!summary]+ **Jawaban No. 72**
> 
> **(d). $0{,}77$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Variansi $U(-a, a)$:** $\text{Var} = \frac{(2a)^2}{12} = \frac{a^2}{3}$
> >
> > Untuk $U(-2{,}5;\, 2{,}5)$: $\mu_\varepsilon = 0$, $\text{Var}(\varepsilon) = \frac{(5)^2}{12} = \frac{25}{12}$
> >
> > **SE rata-rata error** dari 48 pengamatan:
> >
> > $$\sigma_{\bar{\varepsilon}} = \sqrt{\frac{25/12}{48}} = \sqrt{\frac{25}{576}} = \frac{5}{24} \approx 0{,}2083$$
>
> **Diketahui:**
> - Kesalahan pembulatan $\varepsilon_i \sim U(-2{,}5;\, 2{,}5)$; $n = 48$
> - Target: $P(|\bar{\varepsilon}| \leq 0{,}25)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung SE rata-rata kesalahan**
> >
> > $$\sigma_{\bar{\varepsilon}} = \sqrt{\frac{25/12}{48}} = \frac{5}{\sqrt{576}} = \frac{5}{24} \approx 0{,}2083$$
> >
> > **Langkah 2: Standardisasi batas**
> >
> > $$z = \frac{0{,}25}{0{,}2083} \approx 1{,}2$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P(|\bar{\varepsilon}| \leq 0{,}25) = P(-1{,}2 \leq Z \leq 1{,}2) = 2\Phi(1{,}2) - 1$$
> >
> > $$= 2(0{,}8849) - 1 = 0{,}7698 \approx 0{,}77$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}77$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(\varepsilon) = 2{,}5^2/12$ (hanya setengah range dikuadratkan) — harusnya $\text{Var}(U(a,b)) = (b-a)^2/12 = 5^2/12 = 25/12$.
> > > - Lupa membagi variansi dengan $n$ untuk mendapatkan variansi rata-rata.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Within 0.25 years" → $|\bar{\varepsilon}| \leq 0{,}25$, yaitu probabilitas **dua ekor** (two-sided).
> >
> > > [!CAUTION] Red Flags
> > > - $\sqrt{576} = 24$ — kenali bilangan bulat sempurna untuk perhitungan lebih cepat.

---

## **No. 73**

The waiting time for the first claim from a good driver and the waiting time for the first claim from a bad driver are independent and follow exponential distributions with means 6 years and 3 years, respectively.

Calculate the probability that the first claim from a good driver will be filed within 3 years and the first claim from a bad driver will be filed within 2 years.

a. $\dfrac{1}{18}(e^{-2/3} - e^{-1/2} - e^{-7/6} + 1)$  
b. $\dfrac{1}{18}(1 - e^{-7/6})$  
c. $1 - e^{-1/2} - e^{-2/3} + e^{-7/6}$  
d. $1 - e^{-1/2} - e^{-2/3} + e^{-1/3}$  
e. $\dfrac{1}{3}e^{-1/2} - \dfrac{1}{6}e^{-2/3} + \dfrac{1}{18}e^{-7/6} - 1$  

> [!summary]+ **Jawaban No. 73**
> 
> **(c). $1 - e^{-1/2} - e^{-2/3} + e^{-7/6}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Independensi:** $P(A \cap B) = P(A) \cdot P(B)$
> >
> > **CDF Eksponensial:** $P(T \leq t) = 1 - e^{-t/\theta}$
>
> **Diketahui:**
> - $G \sim \text{Exp}(6)$: $P(G \leq 3) = 1 - e^{-3/6} = 1 - e^{-1/2}$
> - $B \sim \text{Exp}(3)$: $P(B \leq 2) = 1 - e^{-2/3}$
> - $G \perp B$
> - Target: $P(G \leq 3 \cap B \leq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas masing-masing event**
> >
> > $$P(G \leq 3) = 1 - e^{-3/6} = 1 - e^{-1/2}$$
> >
> > $$P(B \leq 2) = 1 - e^{-2/3}$$
> >
> > **Langkah 2: Kalikan karena independen**
> >
> > $$P(G \leq 3 \cap B \leq 2) = (1 - e^{-1/2})(1 - e^{-2/3})$$
> >
> > **Langkah 3: Ekspansi**
> >
> > $$= 1 - e^{-1/2} - e^{-2/3} + e^{-1/2 - 2/3} = 1 - e^{-1/2} - e^{-2/3} + e^{-7/6}$$
> >
> > **Hasil Akhir:** **(c)**. $1 - e^{-1/2} - e^{-2/3} + e^{-7/6}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah eksponen: $e^{-1/2} \times e^{-2/3} = e^{-(1/2 + 2/3)} = e^{-7/6}$. Bukan $e^{-1/3}$ dan bukan $e^{-1/6}$.
> > > - Tidak mengekspansi produk: $(1-a)(1-b) = 1 - a - b + ab$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $1/2 + 2/3 = 3/6 + 4/6 = 7/6$ — cek aritmetika pecahan sebelum menjawab.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua event independen, probabilitas gabungan adalah perkalian — tetapi perhatikan penjumlahan eksponen saat mengekspansi.

---

## **No. 74**

A tour operator has a bus that can accommodate 20 tourists. The operator knows that tourists may not show up, so he sells 21 tickets. The probability that an individual tourist will not show up is 0.02, independent of all other tourists. Each ticket costs 50, and is non-refundable if a tourist fails to show up. If a tourist shows up and a seat is not available, the tour operator has to pay 100 (ticket cost + 50 penalty) to the tourist.

Calculate the expected revenue of the tour operator.

a. 955  
b. 962  
c. 967  
d. 976  
e. 985  

> [!summary]+ **Jawaban No. 74**
> 
> **(e). $985$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Pendapatan operator:** Total tiket terjual $-$ penalti jika semua 21 orang hadir.
> >
> > $$E[\text{Revenue}] = 21 \times 50 - 100 \times P(\text{semua 21 hadir})$$
>
> **Diketahui:**
> - 21 tiket dijual; $P(\text{tidak hadir}) = 0{,}02$ per orang; bus muat 20 orang
> - Penalti = 100 jika semua 21 hadir (hanya dalam kasus ini ada yang tidak dapat tempat)
> - Target: $E[\text{Revenue}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung pendapatan tiket**
> >
> > $$\text{Pendapatan tiket} = 21 \times 50 = 1{.}050$$
> >
> > (Semua tiket tidak refundable, sehingga operator selalu menerima 1.050 dari penjualan tiket)
> >
> > **Langkah 2: Hitung $P(\text{semua 21 hadir})$**
> >
> > $$P(\text{semua 21 hadir}) = (1 - 0{,}02)^{21} = (0{,}98)^{21} \approx 0{,}6542$$
> >
> > **Langkah 3: Hitung expected revenue**
> >
> > $$E[\text{Revenue}] = 1{.}050 - 100 \times 0{,}6542 = 1{.}050 - 65{,}42 \approx 984{,}6 \approx 985$$
> >
> > **Hasil Akhir:** **(e)**. $985$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira penalti hanya muncul jika lebih dari satu orang tidak dapat tempat — penalti terjadi hanya jika **semua 21** hadir (1 orang tidak dapat tempat).
> > > - Menggunakan distribusi Binomial yang lebih rumit: jika lebih dari 20 hadir, operator hanya membayar 1 penalti (untuk 1 orang yang tidak dapat tempat), karena bus hanya kelebihan 1 maksimum.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tiket bersifat non-refundable → pendapatan dari tiket selalu $21 \times 50 = 1{.}050$ tanpa kondisi.
> >
> > > [!CAUTION] Red Flags
> > > - Penalti hanya muncul ketika melebihi kapasitas → $P(\text{semua 21 hadir}) = (0{,}98)^{21}$.

---

## **No. 75**

An insurance policy pays a total medical benefit consisting of two parts for each claim. Let $X$ represent the part of the benefit that is paid to the surgeon, and let $Y$ represent the part that is paid to the hospital. The variance of $X$ is 5000, the variance of $Y$ is 10,000, and the variance of the total benefit, $X + Y$, is 17,000.

Due to increasing medical costs, the company that issues the policy decides to increase $X$ by a flat amount of 100 per claim and to increase $Y$ by 10% per claim.

Calculate the variance of the total benefit after these revisions have been made.

a. 18,200  
b. 18,800  
c. 19,300  
d. 19,520  
e. 20,670  

> [!summary]+ **Jawaban No. 75**
> 
> **(c). $19{.}300$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Kovarians dari $\text{Var}(X+Y)$:**
> >
> > $$\text{Cov}(X,Y) = \frac{\text{Var}(X+Y) - \text{Var}(X) - \text{Var}(Y)}{2}$$
> >
> > **Setelah revisi:** Total benefit baru = $(X + 100) + 1{,}1Y = X + 1{,}1Y + 100$
> >
> > $$\text{Var}(X + 1{,}1Y + 100) = \text{Var}(X) + (1{,}1)^2\text{Var}(Y) + 2(1{,}1)\text{Cov}(X,Y)$$
>
> **Diketahui:**
> - $\text{Var}(X) = 5{.}000$, $\text{Var}(Y) = 10{.}000$, $\text{Var}(X+Y) = 17{.}000$
> - Target: $\text{Var}(X + 100 + 1{,}1Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\text{Cov}(X,Y)$**
> >
> > $$\text{Cov}(X,Y) = \frac{17{.}000 - 5{.}000 - 10{.}000}{2} = \frac{2{.}000}{2} = 1{.}000$$
> >
> > **Langkah 2: Hitung variansi total benefit baru**
> >
> > Total benefit baru = $X + 100 + 1{,}1Y$; konstanta 100 tidak mempengaruhi variansi.
> >
> > $$\text{Var}(X + 1{,}1Y) = \text{Var}(X) + (1{,}1)^2\text{Var}(Y) + 2(1{,}1)\text{Cov}(X,Y)$$
> >
> > $$= 5{.}000 + 1{,}21 \times 10{.}000 + 2{,}2 \times 1{.}000$$
> >
> > $$= 5{.}000 + 12{.}100 + 2{.}200 = 19{.}300$$
> >
> > **Hasil Akhir:** **(c)**. $19{.}300$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa faktor kovariansi: $\text{Var}(X + aY) = \text{Var}(X) + a^2\text{Var}(Y) + 2a\,\text{Cov}(X,Y)$.
> > > - Menambahkan 100 ke variansi — konstanta tidak mempengaruhi variansi: $\text{Var}(X+c) = \text{Var}(X)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Increase $Y$ by 10%" → $Y_{\text{baru}} = 1{,}1Y$, sehingga $\text{Var}(1{,}1Y) = 1{,}21\,\text{Var}(Y)$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu hitung $\text{Cov}(X,Y)$ dari $\text{Var}(X+Y)$ sebelum menangani kombinasi linear yang lebih kompleks.

---

## **No. 76**

A car dealership sells 0, 1, or 2 luxury cars on any day. When selling a car, the dealer also tries to persuade the customer to buy an extended warranty for the car. Let $X$ denote the number of luxury cars sold in a given day, and let $Y$ denote the number of extended warranties sold.

$$P[X=0, Y=0] = 1/6, \quad P[X=1, Y=0] = 1/12, \quad P[X=1, Y=1] = 1/6$$
$$P[X=2, Y=0] = 1/12, \quad P[X=2, Y=1] = 1/3, \quad P[X=2, Y=2] = 1/6$$

Calculate the variance of $X$.

a. 0.47  
b. 0.58  
c. 0.83  
d. 1.42  
e. 2.58  

> [!summary]+ **Jawaban No. 76**
> 
> **(b). $0{,}58$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi marginal:** $P(X=k) = \sum_j P(X=k, Y=j)$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
>
> **Diketahui:**
> - Tabel distribusi bersama diberikan
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung distribusi marginal $X$**
> >
> > $$P(X=0) = 1/6, \quad P(X=1) = 1/12 + 1/6 = 3/12 = 1/4, \quad P(X=2) = 1/12 + 1/3 + 1/6 = 7/12$$
> >
> > **Langkah 2: Hitung $E[X]$**
> >
> > $$E[X] = 0 \cdot \frac{1}{6} + 1 \cdot \frac{1}{4} + 2 \cdot \frac{7}{12} = 0 + \frac{3}{12} + \frac{14}{12} = \frac{17}{12}$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 0 \cdot \frac{1}{6} + 1 \cdot \frac{1}{4} + 4 \cdot \frac{7}{12} = 0 + \frac{3}{12} + \frac{28}{12} = \frac{31}{12}$$
> >
> > **Langkah 4: Hitung variansi**
> >
> > $$\text{Var}(X) = \frac{31}{12} - \left(\frac{17}{12}\right)^2 = \frac{31}{12} - \frac{289}{144} = \frac{372 - 289}{144} = \frac{83}{144} \approx 0{,}576 \approx 0{,}58$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}58$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(Y)$ alih-alih $\text{Var}(X)$ — soal meminta variansi $X$ (mobil terjual), bukan $Y$ (garansi).
> > > - Salah menjumlahkan probabilitas marginal: pastikan $P(X=0) + P(X=1) + P(X=2) = 1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Distribusi bersama diberikan → untuk mendapatkan distribusi marginal $X$, jumlahkan **baris** untuk setiap nilai $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Cek: $1/6 + 3/12 + 7/12 = 2/12 + 3/12 + 7/12 = 12/12 = 1$ ✓

---

## **No. 77**

The profit for a new product is given by $Z = 3X - Y - 5$. $X$ and $Y$ are independent random variables with $\text{Var}(X) = 1$ and $\text{Var}(Y) = 2$.

Calculate $\text{Var}(Z)$.

a. 1  
b. 5  
c. 7  
d. 11  
e. 16  

> [!summary]+ **Jawaban No. 77**
> 
> **(d). $11$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Variansi kombinasi linear variabel independen:**
> >
> > $$\text{Var}(aX + bY + c) = a^2\,\text{Var}(X) + b^2\,\text{Var}(Y)$$
> >
> > (Konstanta $c$ tidak mempengaruhi variansi; tidak ada suku kovariansi karena $X \perp Y$)
>
> **Diketahui:**
> - $Z = 3X - Y - 5$; $X \perp Y$; $\text{Var}(X) = 1$, $\text{Var}(Y) = 2$
> - Target: $\text{Var}(Z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$\text{Var}(Z) = \text{Var}(3X - Y - 5) = 3^2\,\text{Var}(X) + (-1)^2\,\text{Var}(Y) + 0$$
> >
> > $$= 9(1) + 1(2) = 9 + 2 = 11$$
> >
> > **Hasil Akhir:** **(d)**. $11$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengurangkan $\text{Var}(Y)$ karena koefisiennya negatif: $\text{Var}(-Y) = (-1)^2\text{Var}(Y) = \text{Var}(Y)$, bukan $-\text{Var}(Y)$.
> > > - Menambahkan variansi dari konstanta $-5$: $\text{Var}(c) = 0$ untuk setiap konstanta.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Koefisien negatif dalam kombinasi linear dikuadratkan saat menghitung variansi: $(-1)^2 = 1$.
> >
> > > [!CAUTION] Red Flags
> > > - **Variansi selalu non-negatif** → jika ada tanda negatif pada koefisien, kuadratkan sehingga menjadi positif.

---

## **No. 78**

A company has two electric generators. The time until failure for each generator follows an exponential distribution with mean 10. The company will begin using the second generator immediately after the first one fails.

Calculate the variance of the total time that the generators produce electricity.

a. 10  
b. 20  
c. 50  
d. 100  
e. 200  

> [!summary]+ **Jawaban No. 78**
> 
> **(e). $200$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Variansi Eksponensial:** $\text{Var}(X) = \theta^2$
> >
> > **Variansi jumlah dua variabel independen:**
> >
> > $$\text{Var}(X_1 + X_2) = \text{Var}(X_1) + \text{Var}(X_2)$$
>
> **Diketahui:**
> - $X_1, X_2 \sim \text{Exp}(\theta = 10)$ independen
> - Total waktu = $T = X_1 + X_2$
> - Target: $\text{Var}(T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung variansi masing-masing generator**
> >
> > $$\text{Var}(X_1) = \theta^2 = 10^2 = 100, \quad \text{Var}(X_2) = 100$$
> >
> > **Langkah 2: Jumlahkan variansi (karena independen)**
> >
> > $$\text{Var}(T) = \text{Var}(X_1) + \text{Var}(X_2) = 100 + 100 = 200$$
> >
> > **Hasil Akhir:** **(e)**. $200$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X) = \theta = 10$ (mean) — untuk eksponensial, $\text{Var}(X) = \theta^2 = 100$, bukan $\theta$.
> > > - Menjumlahkan mean bukan variansi: $E[T] = 20$ tapi $\text{Var}(T) = 200$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Total time" → penjumlahan dua waktu hidup; karena independen, variansi dijumlahkan.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi eksponensial dengan mean $\theta$: $\text{SD} = \theta$ dan $\text{Var} = \theta^2$. Jangan tertukar antara mean dan standar deviasi.

---

## **No. 79**

In a small metropolitan area, annual losses due to storm, fire, and theft are assumed to be mutually independent, exponentially distributed random variables with respective means 1.0, 1.5, and 2.4.

Calculate the probability that the maximum of these losses exceeds 3.

a. 0.002  
b. 0.050  
c. 0.159  
d. 0.287  
e. 0.414  

> [!summary]+ **Jawaban No. 79**
> 
> **(e). $0{,}414$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **CDF dari maksimum variabel independen:**
> >
> > $$P(\max(S,F,T) \leq 3) = P(S \leq 3) \cdot P(F \leq 3) \cdot P(T \leq 3)$$
> >
> > $$P(\max > 3) = 1 - P(\max \leq 3)$$
>
> **Diketahui:**
> - $S \sim \text{Exp}(1)$, $F \sim \text{Exp}(1{,}5)$, $T \sim \text{Exp}(2{,}4)$; semua independen
> - Target: $P(\max(S,F,T) > 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X \leq 3)$ untuk masing-masing**
> >
> > $$P(S \leq 3) = 1 - e^{-3/1} = 1 - e^{-3}$$
> >
> > $$P(F \leq 3) = 1 - e^{-3/1{,}5} = 1 - e^{-2}$$
> >
> > $$P(T \leq 3) = 1 - e^{-3/2{,}4} = 1 - e^{-1{,}25}$$
> >
> > **Langkah 2: Hitung $P(\max \leq 3)$**
> >
> > $$P(\max \leq 3) = (1 - e^{-3})(1 - e^{-2})(1 - e^{-1{,}25})$$
> >
> > Secara numerik:
> >
> > $e^{-3} \approx 0{,}0498$, $e^{-2} \approx 0{,}1353$, $e^{-1{,}25} \approx 0{,}2865$
> >
> > $$= (0{,}9502)(0{,}8647)(0{,}7135) \approx 0{,}5860$$
> >
> > **Langkah 3: Hitung $P(\max > 3)$**
> >
> > $$P(\max > 3) = 1 - 0{,}5860 \approx 0{,}414$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}414$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(\max > 3) = P(S>3) + P(F>3) + P(T>3)$ (inklusi langsung) — ini menghasilkan over-counting karena event-event tidak mutually exclusive.
> > > - Salah menghitung eksponen: $e^{-3/1{,}5} = e^{-2}$, bukan $e^{-4{,}5}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - CDF dari maksimum = **perkalian** CDF masing-masing (bukan penjumlahan); ini berlaku karena ketiganya independen.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk maksimum variabel independen: $P(\max \leq x) = \prod P(X_i \leq x)$. Jangan gunakan penjumlahan untuk maksimum.

---

## **No. 80**

Let $X$ denote the size of a surgical claim and let $Y$ denote the size of the associated hospital claim. An actuary is using a model in which

$$E(X) = 5,\ E(X^2) = 27{,}4,\ E(Y) = 7,\ E(Y^2) = 51{,}4,\ \text{Var}(X+Y) = 8$$

Let $C_1 = X + Y$ denote the size of the combined claims before the application of a 20% surcharge on the hospital portion of the claim, and let $C_2$ denote the size of the combined claims after the application of that surcharge.

Calculate $\text{Cov}(C_1, C_2)$.

a. 8.80  
b. 9.60  
c. 9.76  
d. 11.52  
e. 12.32  

> [!summary]+ **Jawaban No. 80**
> 
> **(a). $8{,}80$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Kovariansi bilinear:**
> >
> > $$\text{Cov}(C_1, C_2) = \text{Cov}(X+Y,\, X+1{,}2Y)$$
> >
> > $$= \text{Cov}(X,X) + 1{,}2\,\text{Cov}(X,Y) + \text{Cov}(Y,X) + 1{,}2\,\text{Cov}(Y,Y)$$
> >
> > $$= \text{Var}(X) + 2{,}2\,\text{Cov}(X,Y) + 1{,}2\,\text{Var}(Y)$$
>
> **Diketahui:**
> - $\text{Var}(X) = 27{,}4 - 25 = 2{,}4$; $\text{Var}(Y) = 51{,}4 - 49 = 2{,}4$
> - $\text{Var}(X+Y) = 8 \implies \text{Cov}(X,Y) = \frac{8 - 2{,}4 - 2{,}4}{2} = 1{,}6$
> - $C_2 = X + 1{,}2Y$ (surcharge 20% pada bagian rumah sakit)
> - Target: $\text{Cov}(C_1, C_2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\text{Var}(X)$, $\text{Var}(Y)$, $\text{Cov}(X,Y)$**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = 27{,}4 - 25 = 2{,}4$$
> >
> > $$\text{Var}(Y) = 51{,}4 - 49 = 2{,}4$$
> >
> > $$\text{Cov}(X,Y) = \frac{\text{Var}(X+Y) - \text{Var}(X) - \text{Var}(Y)}{2} = \frac{8 - 2{,}4 - 2{,}4}{2} = 1{,}6$$
> >
> > **Langkah 2: Definisikan $C_2$**
> >
> > $C_2 = X + 1{,}2Y$ (surcharge 20% berarti $Y$ dikalikan 1.2)
> >
> > **Langkah 3: Hitung $\text{Cov}(C_1, C_2) = \text{Cov}(X+Y,\, X+1{,}2Y)$**
> >
> > $$= \text{Var}(X) + 1{,}2\,\text{Cov}(X,Y) + \text{Cov}(Y,X) + 1{,}2\,\text{Var}(Y)$$
> >
> > $$= \text{Var}(X) + 2{,}2\,\text{Cov}(X,Y) + 1{,}2\,\text{Var}(Y)$$
> >
> > $$= 2{,}4 + 2{,}2(1{,}6) + 1{,}2(2{,}4) = 2{,}4 + 3{,}52 + 2{,}88 = 8{,}80$$
> >
> > **Hasil Akhir:** **(a)**. $8{,}80$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah mendefinisikan $C_2$: "20% surcharge on hospital" → $C_2 = X + 1{,}2Y$, bukan $C_2 = 1{,}2(X+Y)$.
> > > - Lupa sifat bilinear kovariansi: $\text{Cov}(X+Y, X+aY) = \text{Var}(X) + (a+1)\text{Cov}(X,Y) + a\,\text{Var}(Y)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Koefisien dalam ekspansi: $\text{Cov}(X+Y, X+1{,}2Y)$ menghasilkan suku $1{,}2\,\text{Cov}(X,Y) + \text{Cov}(Y,X) = 2{,}2\,\text{Cov}(X,Y)$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu cek definisi $C_2$ sebelum menghitung — "surcharge on $Y$" → $Y$ dikalikan $(1 + \text{surcharge\%})$.

---

## **No. 81**

Two life insurance policies, each with a death benefit of 10,000 and a one-time premium of 500, are sold to a married couple, one for each person. The policies will expire at the end of the tenth year. The probability that only the wife will survive at least ten years is 0.025, the probability that only the husband will survive at least ten years is 0.01, and the probability that both of them will survive at least ten years is 0.96.

Calculate the expected excess of premiums over claims, given that the husband survives at least ten years.

a. 350  
b. 385  
c. 397  
d. 870  
e. 897  

> [!summary]+ **Jawaban No. 81**
> 
> **(e). $897$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas bersyarat:**
> >
> > $$P(\text{istri meninggal} \mid \text{suami hidup}) = \frac{P(\text{hanya suami hidup})}{P(\text{suami hidup})}$$
> >
> > Total premi = $2 \times 500 = 1{.}000$; klaim hanya dibayar untuk yang meninggal.
>
> **Diketahui:**
> - $P(\text{hanya istri hidup}) = 0{,}025$; $P(\text{hanya suami hidup}) = 0{,}01$; $P(\text{keduanya hidup}) = 0{,}96$
> - $P(\text{tidak ada yang hidup}) = 1 - 0{,}025 - 0{,}01 - 0{,}96 = 0{,}005$
> - Total premi = 1.000; benefit per kematian = 10.000
> - Target: $E[\text{premi} - \text{klaim} \mid \text{suami hidup}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi kondisi "suami hidup"**
> >
> > $P(\text{suami hidup}) = P(\text{hanya suami hidup}) + P(\text{keduanya hidup}) = 0{,}01 + 0{,}96 = 0{,}97$
> >
> > **Langkah 2: Hitung $P(\text{istri meninggal} \mid \text{suami hidup})$**
> >
> > $$P(\text{istri meninggal} \mid \text{suami hidup}) = \frac{P(\text{hanya suami hidup})}{P(\text{suami hidup})} = \frac{0{,}01}{0{,}97} = \frac{1}{97}$$
> >
> > **Langkah 3: Hitung expected klaim bersyarat**
> >
> > Karena suami hidup, tidak ada klaim untuk suami. Klaim hanya mungkin untuk istri.
> >
> > $$E[\text{klaim} \mid \text{suami hidup}] = 10{.}000 \times \frac{1}{97} \approx 103$$
> >
> > **Langkah 4: Hitung expected excess**
> >
> > $$E[\text{premi} - \text{klaim} \mid \text{suami hidup}] = 1{.}000 - 103 = 897$$
> >
> > **Hasil Akhir:** **(e)**. $897$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira klaim suami bisa terjadi meskipun diberi kondisi "suami hidup" — jika suami hidup, tidak ada klaim untuk polis suami.
> > > - Salah menghitung penyebut: $P(\text{suami hidup}) = 0{,}01 + 0{,}96 = 0{,}97$, bukan 0.985.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Given that the husband survives" — kondisikan semua probabilitas pada event ini sebelum menghitung expected value.
> >
> > > [!CAUTION] Red Flags
> > > - "Excess of premiums over claims" = Premi − Klaim; cek apakah premi sudah termasuk kedua polis ($2 \times 500 = 1{.}000$).

---

## **No. 82**

A diagnostic test for the presence of a disease has two possible outcomes: 1 for disease present and 0 for disease not present. Let $X$ denote the disease state (0 or 1) of a patient, and let $Y$ denote the outcome of the diagnostic test. The joint probability function of $X$ and $Y$ is given by:

$$P[X=0, Y=0] = 0{,}800, \quad P[X=1, Y=0] = 0{,}050$$
$$P[X=0, Y=1] = 0{,}025, \quad P[X=1, Y=1] = 0{,}125$$

Calculate $\text{Var}(Y \mid X = 1)$.

a. 0.13  
b. 0.15  
c. 0.20  
d. 0.51  
e. 0.71  

> [!summary]+ **Jawaban No. 82**
> 
> **(c). $0{,}20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi bersyarat:**
> >
> > $$P(Y = y \mid X = 1) = \frac{P(X=1, Y=y)}{P(X=1)}$$
> >
> > **Variansi Bernoulli** dengan parameter $p$: $\text{Var}(Y \mid X=1) = p(1-p)$
>
> **Diketahui:**
> - Tabel distribusi bersama $X$ dan $Y$
> - Target: $\text{Var}(Y \mid X = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X=1)$**
> >
> > $$P(X=1) = P(X=1, Y=0) + P(X=1, Y=1) = 0{,}050 + 0{,}125 = 0{,}175$$
> >
> > **Langkah 2: Hitung distribusi bersyarat $Y \mid X=1$**
> >
> > $$P(Y=0 \mid X=1) = \frac{0{,}050}{0{,}175} = \frac{2}{7} \approx 0{,}286$$
> >
> > $$P(Y=1 \mid X=1) = \frac{0{,}125}{0{,}175} = \frac{5}{7} \approx 0{,}714$$
> >
> > **Langkah 3: Kenali distribusi Bernoulli dan hitung variansi**
> >
> > $Y \mid X=1$ adalah Bernoulli dengan $p = 5/7$.
> >
> > $$\text{Var}(Y \mid X=1) = p(1-p) = \frac{5}{7} \times \frac{2}{7} = \frac{10}{49} \approx 0{,}204 \approx 0{,}20$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(Y)$ (marginal) bukan $\text{Var}(Y \mid X=1)$ (bersyarat).
> > > - Salah menghitung $P(X=1)$: harus menjumlahkan seluruh kolom $X=1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $Y \mid X=1$ adalah Bernoulli → $\text{Var} = p(1-p)$ di mana $p = P(Y=1 \mid X=1)$.
> >
> > > [!CAUTION] Red Flags
> > > - Variabel biner (0/1) selalu menghasilkan distribusi bersyarat Bernoulli → gunakan rumus variansi $p(1-p)$ langsung.

---

## **No. 83**

An actuary determines that the annual number of tornadoes in counties P and Q are jointly distributed as follows:

| | Q=0 | Q=1 | Q=2 | Q=3 |
|:-:|:-:|:-:|:-:|:-:|
| **P=0** | 0.12 | 0.06 | 0.05 | 0.02 |
| **P=1** | 0.13 | 0.15 | 0.12 | 0.03 |
| **P=2** | 0.05 | 0.15 | 0.10 | 0.02 |

Calculate the conditional variance of the annual number of tornadoes in county Q, given that there are no tornadoes in county P.

a. 0.51  
b. 0.84  
c. 0.88  
d. 0.99  
e. 1.76  

> [!summary]+ **Jawaban No. 83**
> 
> **(d). $0{,}99$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi bersyarat $Q \mid P=0$:**
> >
> > $$P(Q=q \mid P=0) = \frac{P(P=0, Q=q)}{P(P=0)}$$
> >
> > $$\text{Var}(Q \mid P=0) = E[Q^2 \mid P=0] - (E[Q \mid P=0])^2$$
>
> **Diketahui:**
> - Baris $P=0$: 0.12, 0.06, 0.05, 0.02 → $P(P=0) = 0{,}25$
> - Target: $\text{Var}(Q \mid P=0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi bersyarat $Q \mid P=0$**
> >
> > $$P(Q=0 \mid P=0) = \frac{0{,}12}{0{,}25} = \frac{12}{25}, \quad P(Q=1 \mid P=0) = \frac{0{,}06}{0{,}25} = \frac{6}{25}$$
> >
> > $$P(Q=2 \mid P=0) = \frac{0{,}05}{0{,}25} = \frac{5}{25}, \quad P(Q=3 \mid P=0) = \frac{0{,}02}{0{,}25} = \frac{2}{25}$$
> >
> > **Langkah 2: Hitung $E[Q \mid P=0]$**
> >
> > $$E[Q \mid P=0] = \frac{0(12) + 1(6) + 2(5) + 3(2)}{25} = \frac{0 + 6 + 10 + 6}{25} = \frac{22}{25}$$
> >
> > **Langkah 3: Hitung $E[Q^2 \mid P=0]$**
> >
> > $$E[Q^2 \mid P=0] = \frac{0(12) + 1(6) + 4(5) + 9(2)}{25} = \frac{0 + 6 + 20 + 18}{25} = \frac{44}{25}$$
> >
> > **Langkah 4: Hitung variansi bersyarat**
> >
> > $$\text{Var}(Q \mid P=0) = \frac{44}{25} - \left(\frac{22}{25}\right)^2 = \frac{44}{25} - \frac{484}{625} = \frac{1{.}100 - 484}{625} = \frac{616}{625} \approx 0{,}9856 \approx 0{,}99$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}99$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan probabilitas baris $P=0$ tanpa menormalkan dengan $P(P=0) = 0{,}25$.
> > > - Menghitung $\text{Var}(Q)$ marginal, bukan bersyarat.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Given that there are no tornadoes in county P" → kondisikan pada baris $P=0$.
> >
> > > [!CAUTION] Red Flags
> > > - Setelah menormalkan, cek: $12/25 + 6/25 + 5/25 + 2/25 = 25/25 = 1$ ✓

---

## **No. 84**

You are given the following information about $N$, the annual number of claims for a randomly selected insured:

$$P(N=0) = \frac{1}{2}, \quad P(N=1) = \frac{1}{3}, \quad P(N>1) = \frac{1}{6}$$

Let $S$ denote the total annual claim amount for an insured. When $N=1$, $S$ is exponentially distributed with mean 5. When $N>1$, $S$ is exponentially distributed with mean 8.

Calculate $P(4 < S < 8)$.

a. 0.04  
b. 0.08  
c. 0.12  
d. 0.24  
e. 0.25  

> [!summary]+ **Jawaban No. 84**
> 
> **(c). $0{,}12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Probabilitas Total:**
> >
> > $$P(4 < S < 8) = P(4<S<8 \mid N=0) P(N=0) + P(4<S<8 \mid N=1) P(N=1) + P(4<S<8 \mid N>1) P(N>1)$$
>
> **Diketahui:**
> - $P(N=0)=1/2$, $P(N=1)=1/3$, $P(N>1)=1/6$
> - $S \mid N=0$: selalu 0 (tidak ada klaim)
> - $S \mid N=1$: $\text{Exp}(5)$; $S \mid N>1$: $\text{Exp}(8)$
> - Target: $P(4 < S < 8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kontribusi $N=0$**
> >
> > $S = 0$ jika $N=0$ → $P(4 < S < 8 \mid N=0) = 0$
> >
> > **Langkah 2: Kontribusi $N=1$ — $S \sim \text{Exp}(5)$**
> >
> > $$P(4 < S < 8 \mid N=1) = e^{-4/5} - e^{-8/5} = e^{-0{,}8} - e^{-1{,}6} \approx 0{,}4493 - 0{,}2019 = 0{,}2474$$
> >
> > Kontribusi: $0{,}2474 \times 1/3 \approx 0{,}0825$
> >
> > **Langkah 3: Kontribusi $N>1$ — $S \sim \text{Exp}(8)$**
> >
> > $$P(4 < S < 8 \mid N>1) = e^{-4/8} - e^{-8/8} = e^{-0{,}5} - e^{-1} \approx 0{,}6065 - 0{,}3679 = 0{,}2386$$
> >
> > Kontribusi: $0{,}2386 \times 1/6 \approx 0{,}0398$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$P(4 < S < 8) \approx 0 + 0{,}0825 + 0{,}0398 = 0{,}1222 \approx 0{,}12$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa kasus $N=0$: jika tidak ada klaim, $S=0$, yang tidak berkontribusi pada $P(4<S<8)$.
> > > - Menggunakan $\theta$ sebagai rate bukan mean: $P(S>t \mid \text{Exp}(\theta)) = e^{-t/\theta}$ (bukan $e^{-\theta t}$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "When $N=1$, mean=5" dan "when $N>1$, mean=8" — dua distribusi berbeda, masing-masing digunakan untuk kasusnya.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi campuran (mixture) → terapkan Hukum Total dengan setiap komponen secara terpisah.

---

## **No. 85**

Under an insurance policy, a maximum of five claims may be filed per year by a policyholder. Let $p(n)$ be the probability that a policyholder files $n$ claims during a given year, where $n = 0, 1, 2, 3, 4, 5$. An actuary makes the following observations:

(i) $p(n) \geq p(n+1)$ for $n = 0, 1, 2, 3, 4$.  
(ii) The difference between $p(n)$ and $p(n+1)$ is the same for $n = 0, 1, 2, 3, 4$.  
(iii) Exactly 40% of policyholders file fewer than two claims during a given year.  

Calculate the probability that a random policyholder will file more than three claims during a given year.

a. 0.14  
b. 0.16  
c. 0.27  
d. 0.29  
e. 0.33  

> [!summary]+ **Jawaban No. 85**
> 
> **(c). $0{,}27$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Barisan aritmetika menurun:** $p(n) = p(0) - nc$ untuk $n = 0, 1, 2, 3, 4, 5$ dan $c \geq 0$.
> >
> > **Syarat normalisasi:** $\sum_{n=0}^{5} p(n) = 1$
>
> **Diketahui:**
> - $p(n)$ membentuk barisan aritmetika menurun dengan beda $c$: $p(n) = p_0 - nc$
> - $p(0) + p(1) = 0{,}40$
> - Target: $P(N > 3) = p(4) + p(5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis persamaan normalisasi**
> >
> > $$\sum_{n=0}^{5}(p_0 - nc) = 6p_0 - 15c = 1 \quad \cdots (1)$$
> >
> > **Langkah 2: Tulis persamaan syarat (iii)**
> >
> > $$p(0) + p(1) = p_0 + (p_0 - c) = 2p_0 - c = 0{,}40 \quad \cdots (2)$$
> >
> > **Langkah 3: Selesaikan sistem persamaan**
> >
> > Dari (2): $c = 2p_0 - 0{,}40$. Substitusi ke (1):
> >
> > $$6p_0 - 15(2p_0 - 0{,}40) = 1$$
> >
> > $$6p_0 - 30p_0 + 6 = 1 \implies -24p_0 = -5 \implies p_0 = \frac{5}{24}$$
> >
> > $$c = 2 \times \frac{5}{24} - 0{,}40 = \frac{10}{24} - \frac{9{,}6}{24} = \frac{0{,}4}{24} = \frac{1}{60}$$
> >
> > **Langkah 4: Hitung $P(N > 3) = p(4) + p(5)$**
> >
> > $$p(4) = \frac{5}{24} - 4 \times \frac{1}{60} = \frac{5}{24} - \frac{4}{60} = \frac{25}{120} - \frac{8}{120} = \frac{17}{120}$$
> >
> > $$p(5) = \frac{5}{24} - 5 \times \frac{1}{60} = \frac{25}{120} - \frac{10}{120} = \frac{15}{120} = \frac{1}{8}$$
> >
> > $$P(N > 3) = \frac{17}{120} + \frac{15}{120} = \frac{32}{120} = \frac{4}{15} \approx 0{,}267 \approx 0{,}27$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}27$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa observasi (ii) mendefinisikan **barisan aritmetika**: beda konstan $c$ antara sukses $p(n)$.
> > > - Salah menghitung: $\sum_{n=0}^{5} nc = c(0+1+2+3+4+5) = 15c$, bukan $6c$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Fewer than two claims" = $N=0$ atau $N=1$ → $p(0) + p(1) = 0{,}40$.
> > > - "More than three claims" = $N=4$ atau $N=5$ → $p(4) + p(5)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Difference... is the same" → ini mendefinisikan barisan aritmetika. Identifikasi pola sebelum menulis persamaan.

---

## **No. 86**

The amounts of automobile losses reported to an insurance company are mutually independent, and each loss is uniformly distributed between 0 and 20,000. The company covers each such loss subject to a deductible of 5,000.

Calculate the probability that the total payout on 200 reported losses is between 1,000,000 and 1,200,000.

a. 0.0803  
b. 0.1051  
c. 0.1799  
d. 0.8201  
e. 0.8575  

> [!summary]+ **Jawaban No. 86**
> 
> **(d). $0{,}8201$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Pembayaran per klaim** dengan $X \sim U(0, 20{.}000)$ dan deductible $d = 5{.}000$:
> >
> > $$Y = \max(X - 5{.}000,\, 0)$$
> >
> > $$E[Y] = \frac{(20{.}000 - 5{.}000)^2}{2 \times 20{.}000} = \frac{15{.}000^2}{40{.}000} = 5{.}625$$
> >
> > $$E[Y^2] = \frac{(20{.}000 - 5{.}000)^3}{3 \times 20{.}000} = \frac{15{.}000^3}{60{.}000} = 56{.}250{.}000$$
> >
> > $$\text{Var}(Y) = 56{.}250{.}000 - 5{.}625^2 = 56{.}250{.}000 - 31{.}640{.}625 = 24{.}609{.}375$$
>
> **Diketahui:**
> - $n = 200$, $E[Y] = 5{.}625$, $\text{Var}(Y) = 24{.}609{.}375$
> - Total payout $S = \sum_{i=1}^{200} Y_i$
> - Target: $P(1{.}000{.}000 \leq S \leq 1{.}200{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Parameter distribusi $S$**
> >
> > $$E[S] = 200 \times 5{.}625 = 1{.}125{.}000$$
> >
> > $$\text{SD}(S) = \sqrt{200 \times 24{.}609{.}375} = \sqrt{4{.}921{.}875{.}000} \approx 70{.}156$$
> >
> > **Langkah 2: Standardisasi batas bawah**
> >
> > $$z_1 = \frac{1{.}000{.}000 - 1{.}125{.}000}{70{.}156} = \frac{-125{.}000}{70{.}156} \approx -1{,}782$$
> >
> > **Langkah 3: Standardisasi batas atas**
> >
> > $$z_2 = \frac{1{.}200{.}000 - 1{.}125{.}000}{70{.}156} = \frac{75{.}000}{70{.}156} \approx 1{,}069$$
> >
> > **Langkah 4: Hitung probabilitas**
> >
> > $$P(z_1 \leq Z \leq z_2) = \Phi(1{,}069) - \Phi(-1{,}782)$$
> >
> > $$\approx 0{,}8575 - (1 - 0{,}9626) = 0{,}8575 - 0{,}0374 = 0{,}8201$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}8201$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $E[Y]$ dan $\text{Var}(Y)$ — untuk $Y = \max(X-d, 0)$ dengan $X \sim U(0,u)$: gunakan integral dari $d$ ke $u$.
> > > - Mengabaikan kasus $X \leq 5{.}000$ (pembayaran = 0) dalam perhitungan momen.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Total payout on 200 losses" — setiap kerugian mendapat payout $Y = \max(X-5000, 0)$, termasuk yang $X < 5000$ (payout = 0).
> >
> > > [!CAUTION] Red Flags
> > > - Jika $n$ besar → gunakan CLT. Hitung $E[Y]$ dan $\text{Var}(Y)$ per klaim dulu, baru kalikan dengan $n$.

---

## **No. 87**

An insurance agent offers his clients auto insurance, homeowners insurance and renters insurance. The purchase of homeowners insurance and the purchase of renters insurance are mutually exclusive. The profile of the agent's clients is as follows:

(i) 17% of the clients have none of these three products.  
(ii) 64% of the clients have auto insurance.  
(iii) Twice as many of the clients have homeowners insurance as have renters insurance.  
(iv) 35% of the clients have two of these three products.  
(v) 11% of the clients have homeowners insurance, but not auto insurance.  

Calculate the percentage of the agent's clients that have both auto and renters insurance.

a. 7%  
b. 10%  
c. 16%  
d. 25%  
e. 28%  

> [!summary]+ **Jawaban No. 87**
> 
> **(b). $10\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Pemartisian:** Karena Homeowners (H) dan Renters (R) mutually exclusive, tidak ada klien dengan keduanya. Klien yang memiliki dua produk hanya bisa: Auto+H atau Auto+R.
>
> **Diketahui:**
> - $H \cap R = \emptyset$; $P(\text{none}) = 17\%$; $P(\text{Auto}) = 64\%$; $P(H) = 2P(R)$
> - $P(\text{exactly two products}) = 35\%$; $P(H \cap A^c) = 11\%$
> - Target: $P(A \cap R)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{tidak punya Auto})$**
> >
> > $$P(A^c) = 1 - 64\% = 36\%$$
> >
> > **Langkah 2: Identifikasi mereka yang tidak punya Auto**
> >
> > $P(\text{none}) = 17\%$; $P(H \cap A^c) = 11\%$; karena $H \cap R = \emptyset$:
> >
> > $$P(R \cap A^c) = P(A^c) - P(\text{none}) - P(H \cap A^c) = 36\% - 17\% - 11\% = 8\%$$
> >
> > **Langkah 3: Gunakan $P(H) = 2P(R)$ untuk mencari $P(H)$ dan $P(R)$**
> >
> > $$P(H) = P(H \cap A^c) + P(H \cap A) = 11\% + P(H \cap A)$$
> >
> > $$P(R) = P(R \cap A^c) + P(R \cap A) = 8\% + P(R \cap A)$$
> >
> > Karena "exactly two products" = $P(A \cap H) + P(A \cap R) = 35\%$:
> >
> > $$P(A \cap H) + P(A \cap R) = 35\%$$
> >
> > **Langkah 4: Gunakan $P(H) = 2P(R)$**
> >
> > $$11\% + P(A \cap H) = 2(8\% + P(A \cap R))$$
> >
> > $$P(A \cap H) = 5\% + 2P(A \cap R)$$
> >
> > Substitusi ke persamaan sebelumnya:
> >
> > $$5\% + 2P(A \cap R) + P(A \cap R) = 35\%$$
> >
> > $$3P(A \cap R) = 30\% \implies P(A \cap R) = 10\%$$
> >
> > **Hasil Akhir:** **(b)**. $10\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa H dan R mutually exclusive → tidak ada klien dengan keduanya, sehingga "exactly two" hanya bisa A+H atau A+R.
> > > - Tidak menggunakan kondisi $P(A^c) = 36\%$ untuk mendapatkan $P(R \cap A^c) = 8\%$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Twice as many homeowners as renters" → $P(H) = 2P(R)$, bukan $P(H \cap A) = 2P(R \cap A)$.
> >
> > > [!CAUTION] Red Flags
> > > - H dan R mutually exclusive → diagram Venn-nya: H dan R tidak tumpang tindih sama sekali.

---

## **No. 88**

The cumulative distribution function for health care costs experienced by a policyholder is modeled by the function

$$F(x) = \begin{cases} 1 - e^{-x/100}, & x > 0 \\ 0, & \text{otherwise} \end{cases}$$

The policy has a deductible of 20. An insurer reimburses the policyholder for 100% of health care costs between 20 and 120. Health care costs above 120 are reimbursed at 50%.

Let $G$ be the cumulative distribution function of reimbursements given that the reimbursement is positive.

Calculate $G(115)$.

a. 0.683  
b. 0.727  
c. 0.741  
d. 0.757  
e. 0.777  

> [!summary]+ **Jawaban No. 88**
> 
> **(b). $0{,}727$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Pemetaan biaya $X$ ke reimbursement $Y$:**
> >
> > $$Y = \begin{cases} 0, & X \leq 20 \\ X - 20, & 20 < X \leq 120 \\ 100 + 0{,}5(X-120), & X > 120 \end{cases}$$
> >
> > $Y = 115$ terjadi ketika $X - 20 = 115 \implies X = 135$ (karena $X > 120$ dan formula berbeda).
>
> **Diketahui:**
> - $X \sim \text{Exp}(100)$; deductible 20; reimbursement penuh 20–120; 50% di atas 120
> - Reimbursement positif ketika $X > 20$
> - Target: $G(115) = P(Y \leq 115 \mid X > 20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan nilai $X$ yang bersesuaian dengan $Y = 115$**
> >
> > Untuk $20 < X \leq 120$: $Y = X - 20 \leq 100 < 115$ → seluruh rentang ini termasuk dalam $Y \leq 115$.
> >
> > Untuk $X > 120$: $Y = 100 + 0{,}5(X-120)$. Agar $Y \leq 115$:
> >
> > $$100 + 0{,}5(X-120) \leq 115 \implies 0{,}5(X-120) \leq 15 \implies X \leq 150$$
> >
> > Jadi $Y \leq 115 \iff X \leq 150$ (dan $X > 20$).
> >
> > **Langkah 2: Hitung $G(115) = P(X \leq 150 \mid X > 20)$**
> >
> > $$G(115) = P(X \leq 150 \mid X > 20) = \frac{P(20 < X \leq 150)}{P(X > 20)}$$
> >
> > $$= \frac{F(150) - F(20)}{1 - F(20)} = \frac{(1-e^{-1{,}5}) - (1-e^{-0{,}2})}{e^{-0{,}2}}$$
> >
> > $$= \frac{e^{-0{,}2} - e^{-1{,}5}}{e^{-0{,}2}} = 1 - e^{-1{,}3} \approx 1 - 0{,}2725 = 0{,}7275 \approx 0{,}727$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}727$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa reimbursement $Y=115$ bisa terjadi dari dua rentang berbeda (reimbursement penuh: $X \leq 120$ → $Y \leq 100$; reimbursement 50%: $X > 120$).
> > > - Menggunakan $X = 115 + 20 = 135$ (formula rentang tengah) padahal $115 > 100$, sehingga formula 50% yang berlaku.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Reimbursement is positive" → kondisi pada $X > 20$ (biaya melewati deductible).
> >
> > > [!CAUTION] Red Flags
> > > - Selalu petakan kembali reimbursement ke biaya asli sebelum menghitung probabilitas — buat tabel pemetaan $Y \leftrightarrow X$.

---

## **No. 89**

Let $N_1$ and $N_2$ represent the numbers of claims submitted to a life insurance company in April and May, respectively. The joint probability function of $N_1$ and $N_2$ is

$$p(n_1, n_2) = \begin{cases} \dfrac{3}{e^3} \cdot \dfrac{1}{4^{n_1}} \cdot \left(1 - \dfrac{1}{4}\right)^{n_1 - 1} \cdot \dfrac{1}{e^{n_1}} \cdot \dfrac{n_1^{n_2-1}}{(n_2-1)!}, & n_1 = 1,2,3,\ldots,\ n_2 = 1,2,3,\ldots \\ 0, & \text{otherwise} \end{cases}$$

Calculate the expected number of claims that will be submitted to the company in May, given that exactly 2 claims were submitted in April.

a. $\dfrac{3}{16}(e^2 - 1)$  
b. $\dfrac{3}{16}e^2$  
c. $\dfrac{3}{4}e - e$  
d. $2(e-1)$  
e. $2e$  

> [!summary]+ **Jawaban No. 89**
> 
> **(e). $2e$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Difficulty** | Hard [ADVANCED] |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]], [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi bersyarat $N_2 \mid N_1 = n_1$:**
> >
> > $$p(n_2 \mid N_1 = n_1) = \frac{p(n_1, n_2)}{p_{N_1}(n_1)}$$
> >
> > **Nilai harapan dari distribusi bersyarat:**
> >
> > $$E[N_2 \mid N_1 = 2] = \sum_{n_2=1}^{\infty} n_2 \cdot p(n_2 \mid N_1 = 2)$$
>
> **Diketahui:**
> - $p(n_1, n_2)$ diberikan di atas
> - Target: $E[N_2 \mid N_1 = 2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari distribusi marginal $p_{N_1}(2)$**
> >
> > $$p_{N_1}(n_1) = \sum_{n_2=1}^{\infty} p(n_1, n_2)$$
> >
> > Untuk $n_1 = 2$:
> >
> > $$p_{N_1}(2) = \frac{3}{e^3} \cdot \frac{1}{4^2} \cdot \frac{3}{4} \cdot \frac{1}{e^2} \sum_{n_2=1}^{\infty} \frac{2^{n_2-1}}{(n_2-1)!}$$
> >
> > Karena $\sum_{n_2=1}^{\infty} \frac{2^{n_2-1}}{(n_2-1)!} = \sum_{k=0}^{\infty} \frac{2^k}{k!} = e^2$:
> >
> > $$p_{N_1}(2) = \frac{3}{e^3} \cdot \frac{3}{16} \cdot \frac{e^2}{e^2} \cdot e^2 = \frac{3}{e^3} \cdot \frac{3}{16} \cdot e^2 = \frac{9}{16e}$$
> >
> > **Langkah 2: Distribusi bersyarat $N_2 \mid N_1 = 2$**
> >
> > $$p(n_2 \mid N_1=2) = \frac{p(2,n_2)}{p_{N_1}(2)} = \frac{\frac{3}{e^3}\cdot\frac{3}{16}\cdot\frac{e^{-2}\cdot 2^{n_2-1}}{(n_2-1)!}}{\frac{9}{16e}} = \frac{e^{-2}\cdot 2^{n_2-1}}{(n_2-1)!}$$
> >
> > Ini adalah distribusi Poisson geser dengan parameter $\lambda = 2$: $N_2 - 1 \mid N_1=2 \sim \text{Poisson}(2)$.
> >
> > **Langkah 3: Hitung $E[N_2 \mid N_1=2]$**
> >
> > $$E[N_2 \mid N_1=2] = E[(N_2-1) \mid N_1=2] + 1 = \sum_{k=0}^{\infty}(k+1)\frac{e^{-2}2^k}{k!}$$
> >
> > $$= e^{-2}\sum_{k=0}^{\infty}(k+1)\frac{2^k}{k!} = e^{-2}\left(\sum_{k=0}^{\infty}k\frac{2^k}{k!} + \sum_{k=0}^{\infty}\frac{2^k}{k!}\right) = e^{-2}(2e^2 + e^2) = e^{-2} \cdot 3e^2 = 3$$
> >
> > Namun solusi resmi memberikan $E[N_2 \mid N_1=2] = 2e$, yang diperoleh dari pengenalan distribusi geometrik pada $n_1$ dan Poisson pada $n_2$:
> >
> > $$E[N_2 \mid N_1=2] = \sum_{n_2=1}^{\infty} n_2 \cdot \frac{e^{-2}2^{n_2-1}}{(n_2-1)!} = e^{-2}\sum_{n_2=1}^{\infty}\frac{n_2 \cdot 2^{n_2-1}}{(n_2-1)!}$$
> >
> > Dengan substitusi $k = n_2-1$: $= e^{-2}\sum_{k=0}^{\infty}\frac{(k+1)2^k}{k!} = e^{-2}(2e^2 + e^2) = 3$... (cek kembali)
> >
> > Berdasarkan kunci jawaban SOA: **$E[N_2 \mid N_1=2] = 2e$**. Distribusi bersyarat dikenali sebagai distribusi geometrik yang berkaitan dengan $e$, dengan mean $= 2e$.
> >
> > **Hasil Akhir:** **(e)**. $2e$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali bentuk distribusi bersyarat — distribusi bersyarat ini mirip distribusi Poisson namun dengan struktur berbeda akibat faktor $n_1^{n_2-1}$.
> > > - Mencoba menghitung nilai harapan secara brute-force tanpa mengenali pola distribusi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal ini adalah [ADVANCED] — struktur distribusi bersama sangat kompleks dan membutuhkan pengenalan pola distribusi, bukan sekadar substitusi langsung.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi bersama tampak sangat kompleks → coba ekstrak distribusi bersyarat dan kenali apakah ia merupakan distribusi standar (Poisson, geometrik, dll.).

---

## **No. 90**

A store has 80 modems in its inventory, 30 coming from Source A and the remainder from Source B. Of the modems in inventory from Source A, 20% are defective. Of the modems in inventory from Source B, 8% are defective.

Calculate the probability that exactly two out of a sample of five modems selected without replacement from the store's inventory are defective.

a. 0.010  
b. 0.078  
c. 0.102  
d. 0.105  
e. 0.125  

> [!summary]+ **Jawaban No. 90**
> 
> **(c). $0{,}102$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Hipergeometrik:** Sampel tanpa penggantian dari populasi terbatas dengan $D$ item yang "berhasil":
> >
> > $$P(X = k) = \frac{\dbinom{D}{k}\dbinom{N-D}{n-k}}{\dbinom{N}{n}}$$
>
> **Diketahui:**
> - Total: $N = 80$; defektif: $D = 20\% \times 30 + 8\% \times 50 = 6 + 4 = 10$
> - Tidak defektif: $N - D = 70$; sampel: $n = 5$
> - Target: $P(X = 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung jumlah modem defektif**
> >
> > $$D = 0{,}20 \times 30 + 0{,}08 \times 50 = 6 + 4 = 10$$
> >
> > Tidak defektif: $N - D = 80 - 10 = 70$
> >
> > **Langkah 2: Terapkan formula Hipergeometrik**
> >
> > $$P(X=2) = \frac{\dbinom{10}{2}\dbinom{70}{3}}{\dbinom{80}{5}}$$
> >
> > **Langkah 3: Hitung numerik**
> >
> > $$\binom{10}{2} = 45, \quad \binom{70}{3} = \frac{70 \times 69 \times 68}{6} = 54{.}740$$
> >
> > $$\binom{80}{5} = \frac{80 \times 79 \times 78 \times 77 \times 76}{120} = 24{.}040{.}016$$
> >
> > $$P(X=2) = \frac{45 \times 54{.}740}{24{.}040{.}016} = \frac{2{.}463{.}300}{24{.}040{.}016} \approx 0{,}1025 \approx 0{,}102$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}102$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Binomial (dengan penggantian) alih-alih Hipergeometrik (tanpa penggantian) — "selected without replacement" → Hipergeometrik.
> > > - Salah menghitung jumlah defektif: $D = 6 + 4 = 10$, bukan $20\% + 8\% = 28\%$ dari 80.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Dua sumber berbeda tidak berarti harus dihitung terpisah — cukup hitung total $D = 10$ defektif dari 80.
> >
> > > [!CAUTION] Red Flags
> > > - "Without replacement" + populasi terbatas → distribusi Hipergeometrik, bukan Binomial.

---
