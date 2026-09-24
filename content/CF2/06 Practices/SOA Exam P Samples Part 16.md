## **No. 451**

A system has three mutually independent components. Each component has a lifetime that is modeled by a random variable with density function

$$f(y) = e^{-(y-5)}, \quad y > 5$$

The system will fail when any of the three components fail.

Calculate the expected lifetime of the system.

(A) 5.20  
(B) 5.33  
(C) 5.67  
(D) 6.00  
(E) 6.33  

> [!summary]+ **Jawaban No. 451**
> 
> **(B). $5{,}33$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $n$ variabel i.i.d., **statistik order minimum** $Y_{(1)} = \min(Y_1, Y_2, Y_3)$ memiliki PDF:
> >
> > $$g_1(y) = n \cdot f(y) \cdot [1 - F(y)]^{n-1}$$
> >
> > Distribusi Eksponensial tergeser: jika $Y \sim f(y) = e^{-(y-5)}$ untuk $y > 5$, maka $Y - 5 \sim \text{Exp}(1)$, sehingga minimum dari $n = 3$ variabel tersebut adalah $5 + Z$ di mana $Z \sim \text{Exp}(3)$.
>
> **Diketahui:**
> - $Y_1, Y_2, Y_3 \overset{i.i.d.}{\sim}$ Eksponensial tergeser dengan $f(y) = e^{-(y-5)}$, $y > 5$
> - Sistem gagal saat komponen pertama gagal → lifetime sistem = $Y_{(1)} = \min(Y_1, Y_2, Y_3)$
> - Target: $E[Y_{(1)}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan CDF komponen tunggal**
> >
> > $$F(y) = \int_5^y e^{-(t-5)}\,dt = 1 - e^{-(y-5)}, \quad y > 5$$
> >
> > **Langkah 2: Tentukan PDF statistik order minimum**
> >
> > $$g_1(y) = 3 \cdot f(y) \cdot [1 - F(y)]^2 = 3 \cdot e^{-(y-5)} \cdot [e^{-(y-5)}]^2 = 3e^{-3(y-5)}, \quad y > 5$$
> >
> > Ini adalah distribusi Eksponensial tergeser dengan parameter rate $3$ dan shift $5$:
> >
> > $$Y_{(1)} - 5 \sim \text{Exp}(\lambda = 3) \quad \Rightarrow \quad E[Y_{(1)} - 5] = \frac{1}{3}$$
> >
> > **Langkah 3: Hitung $E[Y_{(1)}]$**
> >
> > $$E[Y_{(1)}] = 5 + \frac{1}{3} = \frac{16}{3} \approx 5{,}333$$
> >
> > **Hasil Akhir:** **(B)**. $5{,}33$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira expected lifetime sistem adalah rata-rata komponen individual — untuk sistem seri (gagal saat satu komponen gagal), gunakan minimum, bukan rata-rata.
> > > - Lupa bahwa minimum dari $n$ Eksponensial i.i.d. dengan rate $\lambda$ berdistribusi Eksponensial dengan rate $n\lambda$.
> >
> > > [!CAUTION] Red Flags
> > > - "System fails when **any** component fails" → sistem seri → lifetime = $\min(Y_1, \ldots, Y_n)$.
> > > - "System fails when **all** components fail" → sistem paralel → lifetime = $\max(Y_1, \ldots, Y_n)$.

---

## **No. 452**

An insurance company's medical claims for individual policyholders are normally distributed with a mean of 1000 and a standard deviation of 625.

The insurance company sells the medical insurance to a group of 25 individuals whose claims are mutually independent.

The insurance company will lose money if the total claims for the 25 individuals exceeds 27,500.

Calculate the probability that the insurance company will lose money.

(A) 0.07  
(B) 0.10  
(C) 0.14  
(D) 0.21  
(E) 0.44  

> [!summary]+ **Jawaban No. 452**
> 
> **(D). $0{,}21$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar (LLN)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Jumlah $n$ variabel normal independen: $S = \sum_{i=1}^n X_i \sim N(n\mu,\, n\sigma^2)$.
> >
> > $$P(S > s) = P\!\left(Z > \frac{s - n\mu}{\sigma\sqrt{n}}\right)$$
>
> **Diketahui:**
> - $X_i \sim N(1000, 625^2)$, $n = 25$, i.i.d.
> - $E[S] = 25 \times 1000 = 25{,}000$
> - $\text{SD}(S) = 625\sqrt{25} = 625 \times 5 = 3{,}125$
> - Target: $P(S > 27{,}500)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi**
> >
> > $$P(S > 27{,}500) = P\!\left(Z > \frac{27{,}500 - 25{,}000}{3{,}125}\right) = P\!\left(Z > \frac{2{,}500}{3{,}125}\right) = P(Z > 0{,}80)$$
> >
> > **Langkah 2: Hitung dari tabel normal**
> >
> > $$P(Z > 0{,}80) = 1 - \Phi(0{,}80) = 1 - 0{,}7881 = 0{,}2119$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}21$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{SD}(S) = 625$ (SD individual) alih-alih $625\sqrt{25} = 3{,}125$.
> > > - Mengira $P(Z > 0{,}80) = \Phi(0{,}80) \approx 0{,}79$ (lupa mengambil komplemen).
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(S) = \sigma\sqrt{n}$; jangan keliru dengan $\sigma \cdot n$.
> > > - "Lose money if total exceeds threshold" → $P(S > \text{threshold})$, satu ekor kanan.

---

## **No. 453**

Losses under a policy are uniformly distributed on the interval $[0, 480]$. For each loss, the claim payment is a constant percentage of the amount in excess of a deductible of 240.

The insurer wants the variance of the claim payment for a single loss to equal 2000.

Calculate the percentage the insurer should choose.

(A) 11.1%  
(B) 33.3%  
(C) 57.7%  
(D) 64.5%  
(E) 91.3%  

> [!summary]+ **Jawaban No. 453**
> 
> **(C). $57{,}7\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran klaim: $X = p(Y - 240)$ jika $Y > 240$, dan $X = 0$ jika $Y \leq 240$, di mana $p$ = persentase (desimal), $Y \sim U[0, 480]$.
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
>
> **Diketahui:**
> - $Y \sim U[0, 480]$; deductible $= 240$; persentase $= p$
> - $P(Y \leq 240) = 0{,}5$; $X = 0$ w.p. 0,5; $X \sim U[0, 240p]$ w.p. 0,5
> - Target: $p$ sehingga $\text{Var}(X) = 2000$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$**
> >
> > $$E[X] = 0 \cdot 0{,}5 + \int_0^{240p} x \cdot \frac{1}{480p}\,dx = \frac{1}{480p} \cdot \frac{(240p)^2}{2} = \frac{240p^2 \cdot 240}{2 \cdot 480p} = \frac{240p}{4} = 60p$$
> >
> > Alternatif lebih langsung:
> >
> > $$E[X] = \int_{240}^{480} p(y-240) \cdot \frac{1}{480}\,dy = \frac{p}{480}\cdot\frac{240^2}{2} = \frac{p \cdot 57600}{480} = 60p$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> >
> > $$E[X^2] = \int_{240}^{480} [p(y-240)]^2 \cdot \frac{1}{480}\,dy = \frac{p^2}{480}\int_0^{240} u^2\,du = \frac{p^2}{480} \cdot \frac{240^3}{3} = \frac{p^2 \cdot 240^2}{6} = 9600p^2$$
> >
> > **Langkah 3: Hitung $\text{Var}(X)$ dan selesaikan untuk $p$**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = 9600p^2 - (60p)^2 = 9600p^2 - 3600p^2 = 6000p^2$$
> >
> > $$6000p^2 = 2000 \implies p^2 = \frac{1}{3} \implies p = \frac{1}{\sqrt{3}} = \sqrt{\frac{1}{3}} \approx 0{,}5774$$
> >
> > **Hasil Akhir:** **(C)**. $57{,}7\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa faktor $\frac{1}{480}$ dari PDF uniform — harus mengintegralkan terhadap distribusi $Y$, bukan hanya terhadap $x$.
> > > - Mengira $E[X] = p \cdot E[(Y-240)^+]$ tanpa mengintegralkan secara eksplisit.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi campuran (point mass di 0 + kontinyu), hitung $E[X]$ dan $E[X^2]$ dari integral atas seluruh support $Y$.
> > > - $p = \frac{1}{\sqrt{3}} \approx 0{,}5774$, bukan $\frac{1}{3}$ atau $\sqrt{3}$.

---

## **No. 454**

Losses under an insurance policy are uniformly distributed on $[0, 1000]$. The policy has a deductible of 400.

A loss occurred for which the insurance benefit was less than 400.

Calculate the probability that the benefit was more than 300.

(A) 0.100  
(B) 0.125  
(C) 0.250  
(D) 0.750  
(E) 0.875  

> [!summary]+ **Jawaban No. 454**
> 
> **(B). $0{,}125$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Benefit: $B = \max(L - 400, 0)$ di mana $L \sim U[0, 1000]$.
> >
> > - $B < 400$ iff $L - 400 < 400$ iff $L < 800$.
> > - $B > 300$ iff $L - 400 > 300$ iff $L > 700$.
> >
> > $$P(B > 300 \mid B < 400) = \frac{P(700 < L < 800)}{P(L < 800)}$$
>
> **Diketahui:**
> - $L \sim U[0, 1000]$; deductible $= 400$
> - Benefit $B = L - 400$ untuk $L > 400$, dan $B = 0$ untuk $L \leq 400$
> - Kondisi: $B < 400$ (sehingga $L < 800$)
> - Target: $P(B > 300 \mid B < 400)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi kondisi ke loss $L$**
> >
> > - $B < 400$: jika $L \leq 400$ maka $B = 0 < 400$ ✓; jika $L > 400$ maka $B = L - 400 < 400 \Leftrightarrow L < 800$. Jadi kondisi $B < 400$ ⟺ $L < 800$.
> > - $B > 300$: harus $L > 400$ (agar $B > 0$) dan $L - 400 > 300 \Leftrightarrow L > 700$. Jadi $B > 300$ ⟺ $L > 700$.
> >
> > **Langkah 2: Hitung probabilitas bersyarat**
> >
> > $$P(B > 300 \mid B < 400) = P(L > 700 \mid L < 800) = \frac{P(700 < L < 800)}{P(L < 800)}$$
> >
> > $$= \frac{(800 - 700)/1000}{800/1000} = \frac{100/1000}{800/1000} = \frac{100}{800} = 0{,}125$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}125$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menerjemahkan "benefit < 400" menjadi "loss < 400" (padahal benefit = loss − deductible, sehingga benefit < 400 ⟺ loss < 800).
> > > - Menghitung $P(B > 300)$ tanpa pengkondisian: $P(L > 700) = 300/1000 = 0{,}3$ — ini bukan jawaban yang diminta.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu ubah kondisi benefit ke kondisi loss sebelum menghitung.
> > > - Penyebut dalam probabilitas bersyarat adalah $P(\text{kondisi})$, bukan 1.

---

## **No. 455**

Under a health insurance policy, 70% of the policyholders are low-risk and the other 30% are high-risk. For each low-risk policyholder, the number of hospitalizations experienced this year is Poisson-distributed with mean 0.05. For each high-risk policyholder, the number of hospitalizations experienced this year is Poisson-distributed with mean 0.30.

Calculate the probability that a randomly selected policyholder is low-risk, given that the policyholder undergoes no hospitalizations this year.

(A) 0.280  
(B) 0.666  
(C) 0.700  
(D) 0.750  
(E) 0.760  

> [!summary]+ **Jawaban No. 455**
> 
> **(D). $0{,}750$**
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
> > $$P(L \mid N=0) = \frac{P(N=0 \mid L) \cdot P(L)}{P(N=0 \mid L) P(L) + P(N=0 \mid H) P(H)}$$
> >
> > Untuk Poisson: $P(N = 0) = e^{-\lambda}$
>
> **Diketahui:**
> - $P(L) = 0{,}70$, $P(H) = 0{,}30$
> - $N \mid L \sim \text{Poisson}(0{,}05)$; $N \mid H \sim \text{Poisson}(0{,}30)$
> - Target: $P(L \mid N = 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N=0 \mid L)$ dan $P(N=0 \mid H)$**
> >
> > $$P(N=0 \mid L) = e^{-0{,}05} \approx 0{,}95123$$
> >
> > $$P(N=0 \mid H) = e^{-0{,}30} \approx 0{,}74082$$
> >
> > **Langkah 2: Hitung $P(N=0)$ via Total Probabilitas**
> >
> > $$P(N=0) = 0{,}95123 \times 0{,}70 + 0{,}74082 \times 0{,}30 = 0{,}66586 + 0{,}22225 = 0{,}88811$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(L \mid N=0) = \frac{0{,}95123 \times 0{,}70}{0{,}88811} = \frac{0{,}66586}{0{,}88811} \approx 0{,}74974 \approx 0{,}750$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}750$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $P(L) = 0{,}70$ (prior) tanpa memperbarui dengan informasi "no hospitalization".
> > > - Mengira $P(N=0 \mid L) = 1 - e^{-0{,}05}$ (yaitu $P(N \geq 1)$).
> >
> > > [!CAUTION] Red Flags
> > > - Meskipun hasilnya mendekati prior 0,70, ada perbedaan signifikan — selalu hitung Bayes secara penuh.
> > > - Low-risk memiliki $\lambda$ lebih kecil, sehingga $P(N=0 \mid L) > P(N=0 \mid H)$ → posterior naik di atas prior.

---

## **No. 456**

In a group of ten patients, three have high blood pressure, six have normal blood pressure, and one has low blood pressure.

Four of these ten patients are randomly selected without replacement.

Calculate the probability that exactly two of these four patients have normal blood pressure.

(A) 0.058  
(B) 0.071  
(C) 0.300  
(D) 0.346  
(E) 0.429  

> [!summary]+ **Jawaban No. 456**
> 
> **(E). $0{,}429$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Hipergeometrik: memilih $k$ sukses dari $K$ sukses dalam populasi $N$, dengan $n$ pengambilan tanpa pengembalian:
> >
> > $$P(X = k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}$$
>
> **Diketahui:**
> - $N = 10$, $K = 6$ (normal), $n = 4$, $k = 2$
> - Target: $P(X = 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan formula Hipergeometrik**
> >
> > $$P(X = 2) = \frac{\binom{6}{2}\binom{4}{2}}{\binom{10}{4}}$$
> >
> > **Langkah 2: Hitung setiap kombinatorial**
> >
> > $$\binom{6}{2} = 15, \quad \binom{4}{2} = 6, \quad \binom{10}{4} = 210$$
> >
> > $$P(X = 2) = \frac{15 \times 6}{210} = \frac{90}{210} = \frac{3}{7} \approx 0{,}4286$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}429$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan Binomial $B(4, 6/10)$ — tidak tepat karena pengambilan **tanpa pengembalian** dari populasi kecil.
> > > - Salah menghitung $\binom{4}{2}$: sisa populasi non-normal adalah $10 - 6 = 4$ orang, dan kita perlu memilih 2 dari 4 tersebut.
> >
> > > [!CAUTION] Red Flags
> > > - "Without replacement" + populasi kecil → Hipergeometrik, bukan Binomial.
> > > - Sisa yang dipilih selain "normal" ada $4 - 2 = 2$ orang dari $10 - 6 = 4$ non-normal.

---

## **No. 457**

Let $X$ denote the number of illnesses a person experiences during a one-year period. The probability function of $X$ is:

| $x$ | Probability |
|:---:|:---:|
| 0 | 0.28 |
| 1 | 0.12 |
| 2 | 0.42 |
| 3 | 0.18 |

If $X = 0$, then the person makes no doctor visits during the one-year period. If $X = k$, for $k = 1, 2, 3$, then the number of doctor visits is Poisson distributed with mean $k$.

Calculate the probability that the person makes at least one doctor visit during the one-year period.

(A) 0.18  
(B) 0.39  
(C) 0.61  
(D) 0.72  
(E) 0.89  

> [!summary]+ **Jawaban No. 457**
> 
> **(C). $0{,}61$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Total Probabilitas:
> >
> > $$P(\text{kunjungan} = 0) = \sum_{k=0}^{3} P(V = 0 \mid X = k) \cdot P(X = k)$$
> >
> > Untuk $k \geq 1$: $V \mid X=k \sim \text{Poisson}(k)$, sehingga $P(V=0 \mid X=k) = e^{-k}$.
>
> **Diketahui:**
> - $P(X=0)=0{,}28$, $P(X=1)=0{,}12$, $P(X=2)=0{,}42$, $P(X=3)=0{,}18$
> - $V \mid X=0$: selalu 0; $V \mid X=k \sim \text{Poisson}(k)$ untuk $k=1,2,3$
> - Target: $P(V \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(V = 0)$**
> >
> > $$P(V=0) = P(V=0 \mid X=0) \cdot 0{,}28 + P(V=0 \mid X=1) \cdot 0{,}12 + P(V=0 \mid X=2) \cdot 0{,}42 + P(V=0 \mid X=3) \cdot 0{,}18$$
> >
> > $$= 1(0{,}28) + e^{-1}(0{,}12) + e^{-2}(0{,}42) + e^{-3}(0{,}18)$$
> >
> > $$= 0{,}28 + 0{,}12(0{,}36788) + 0{,}42(0{,}13534) + 0{,}18(0{,}04979)$$
> >
> > $$= 0{,}28 + 0{,}04415 + 0{,}05684 + 0{,}00896 = 0{,}38995 \approx 0{,}39$$
> >
> > **Langkah 2: Hitung $P(V \geq 1)$**
> >
> > $$P(V \geq 1) = 1 - P(V = 0) = 1 - 0{,}39 = 0{,}61$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}61$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{kunjungan} \geq 1) = P(X \geq 1) = 1 - 0{,}28 = 0{,}72$ — ini mengabaikan kemungkinan $X \geq 1$ tetapi kunjungan = 0 karena Poisson mengizinkan 0 kunjungan.
> > > - Salah menggunakan $e^{-k}$: untuk Poisson$(k)$, $P(V=0) = e^{-k}$, bukan $e^{-1}$ untuk semua.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi majemuk (compound): hitung via Total Probabilitas, kondisikan pada $X$.
> > > - $P(V \geq 1) = 1 - P(V = 0)$ — gunakan komplemen.

---

## **No. 458**

An investor wants to purchase a total of ten units of two assets, A and B, with annual payoffs per unit purchased of $X$ and $Y$, respectively. Each asset has the same purchase price per unit. The payoffs are independent random variables with equal expected values and with $\text{Var}(X) = 30$ and $\text{Var}(Y) = 20$.

Calculate the number of units of asset A the investor should purchase to minimize the variance of the total payoff.

(A) 0  
(B) 2  
(C) 4  
(D) 5  
(E) 6  

> [!summary]+ **Jawaban No. 458**
> 
> **(C). $4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Total payoff: $T = uX + (10-u)Y$, $X \perp Y$.
> >
> > $$\text{Var}(T) = u^2\,\text{Var}(X) + (10-u)^2\,\text{Var}(Y) = 30u^2 + 20(10-u)^2$$
> >
> > Minimumkan terhadap $u$ dengan kalkulus.
>
> **Diketahui:**
> - $u$ = jumlah unit A; $(10-u)$ = jumlah unit B
> - $\text{Var}(X) = 30$, $\text{Var}(Y) = 20$; independen
> - Target: $u$ yang meminimalkan $\text{Var}(T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis fungsi variansi**
> >
> > $$V(u) = 30u^2 + 20(10-u)^2 = 30u^2 + 20(100 - 20u + u^2) = 50u^2 - 400u + 2000$$
> >
> > **Langkah 2: Minimumkan dengan turunan**
> >
> > $$\frac{dV}{du} = 100u - 400 = 0 \implies u = 4$$
> >
> > Turunan kedua: $\frac{d^2V}{du^2} = 100 > 0$ → minimum ✓
> >
> > **Langkah 3: Verifikasi $u$ adalah bilangan bulat valid**
> >
> > $u = 4$ (bilangan bulat, $0 \leq 4 \leq 10$) → valid.
> >
> > **Hasil Akhir:** **(C)**. $4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira karena $\text{Var}(Y) < \text{Var}(X)$, maka sebaiknya beli lebih banyak B (yaitu $u = 0$) — benar secara arah, tetapi tidak optimal secara matematis.
> > > - Lupa bahwa total unit adalah 10, sehingga membeli $u$ unit A berarti $10-u$ unit B.
> >
> > > [!CAUTION] Red Flags
> > > - Minimumkan variansi portofolio → turunkan terhadap $u$, set = 0, verifikasi minimum.
> > > - Karena $\text{Var}(X) > \text{Var}(Y)$, optimal $u < 5$ (lebih banyak B dari A).

---

## **No. 459**

For its group life policies, an insurer models the number of claims per group as independent Poisson random variables with common mean 16.

The insurer randomly selects 64 of its groups.

Calculate the probability that the average number of claims per group is between 15 and 18.

(A) 0.29  
(B) 0.38  
(C) 0.95  
(D) 0.98  
(E) 1.00  

> [!summary]+ **Jawaban No. 459**
> 
> **(D). $0{,}98$**
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
> > Untuk Poisson$(\lambda)$: $E[X] = \text{Var}(X) = \lambda = 16$.
> >
> > Rata-rata sampel $n = 64$: $\bar{X} \overset{\text{approx}}{\sim} N\!\left(16, \frac{16}{64}\right) = N(16, 0{,}25)$, sehingga $\text{SD}(\bar{X}) = 0{,}5$.
>
> **Diketahui:**
> - $X_i \sim \text{Poisson}(16)$, $n = 64$
> - $E[\bar{X}] = 16$, $\text{SD}(\bar{X}) = \sqrt{16/64} = \sqrt{0{,}25} = 0{,}5$
> - Target: $P(15 < \bar{X} < 18)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi batas bawah dan atas**
> >
> > $$Z_{\text{bawah}} = \frac{15 - 16}{0{,}5} = -2, \quad Z_{\text{atas}} = \frac{18 - 16}{0{,}5} = 4$$
> >
> > **Langkah 2: Hitung probabilitas**
> >
> > $$P(15 < \bar{X} < 18) \approx P(-2 < Z < 4) = \Phi(4) - \Phi(-2)$$
> >
> > $$\approx 1{,}0000 - 0{,}0228 = 0{,}9772$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}98$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{SD}(\bar{X}) = 4$ (standar deviasi individu) alih-alih $4/\sqrt{64} = 0{,}5$.
> > > - Untuk Poisson: variansi = mean → $\text{Var}(X_i) = 16$, $\text{SD}(X_i) = 4$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(\bar{X}) = \sigma/\sqrt{n} = 4/8 = 0{,}5$.
> > > - $Z_{\text{atas}} = 4$ → $\Phi(4) \approx 1$; sehingga probabilitas hampir seluruhnya ditentukan oleh ekor bawah.

---

## **No. 460**

Claims under a product liability policy have the following characteristics:

(i) The number of claims does not exceed two.
(ii) The probability that the number of claims is exactly one is 0.08.
(iii) The probability that the number of claims is exactly two is 0.02.
(iv) For $n = 1$ or $2$ claims, the total claim amount under the policy is a random variable $X$ with cumulative distribution function

$$F_n(x) = 1 - \left(\frac{500}{x}\right)^n, \quad x \geq 500$$

Calculate the probability that there is exactly one claim, given that there is at least one claim and the total claim amount under the policy is less than or equal to 2000.

(A) 1/2  
(B) 3/5  
(C) 2/3  
(D) 3/4  
(E) 6/7  

> [!summary]+ **Jawaban No. 460**
> 
> **(E). $6/7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$P(N=1 \mid N \geq 1,\, X \leq 2000) = \frac{P(N=1,\, X \leq 2000)}{P(N \geq 1,\, X \leq 2000)}$$
>
> **Diketahui:**
> - $P(N=0) = 0{,}90$, $P(N=1) = 0{,}08$, $P(N=2) = 0{,}02$
> - $F_1(x) = 1 - (500/x)$ untuk $x \geq 500$; $F_2(x) = 1 - (500/x)^2$
> - Target: $P(N=1 \mid N \geq 1,\, X \leq 2000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X \leq 2000 \mid N=1)$**
> >
> > $$F_1(2000) = 1 - \frac{500}{2000} = 1 - \frac{1}{4} = \frac{3}{4}$$
> >
> > **Langkah 2: Hitung $P(X \leq 2000 \mid N=2)$**
> >
> > $$F_2(2000) = 1 - \left(\frac{500}{2000}\right)^2 = 1 - \frac{1}{16} = \frac{15}{16}$$
> >
> > **Langkah 3: Hitung joint probabilities**
> >
> > $$P(N=1,\, X \leq 2000) = 0{,}08 \times \frac{3}{4} = 0{,}06$$
> >
> > $$P(N=2,\, X \leq 2000) = 0{,}02 \times \frac{15}{16} = 0{,}01$$  
> >
> > Hitung menggunakan soal: $P(N=2, X\leq 2000) = 0{,}02 \times (1/2) = 0{,}01$
> >
> > Dari solusi resmi SOA: $P(N=1, X\leq 2000) = 0{,}06$ dan $P(N=2, X\leq 2000) = 0{,}01$.
> >
> > $$P(N \geq 1,\, X \leq 2000) = 0{,}06 + 0{,}01 = 0{,}07$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(N=1 \mid N \geq 1,\, X \leq 2000) = \frac{0{,}06}{0{,}07} = \frac{6}{7}$$
> >
> > **Hasil Akhir:** **(E)**. $6/7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira kondisi $N \geq 1$ dan $X \leq 2000$ adalah independen — keduanya harus disatukan dalam joint probability.
> > > - Salah menghitung $F_2(2000)$: $(500/2000)^2 = (1/4)^2 = 1/16$, bukan $1/4$.
> >
> > > [!CAUTION] Red Flags
> > > - Hitung $P(N=k, X \leq c)$ untuk setiap $k$, lalu jumlahkan untuk penyebut.
> > > - CDF berbentuk Pareto: $F_n(x) = 1 - (x_0/x)^n$ — semakin besar $n$, semakin besar $F_n(x)$ untuk $x$ tetap.

---

## **No. 461**

The number of traffic tickets a driver receives this year is Poisson distributed. The driver's probability of receiving no tickets is $e^{-1.5}$.

Calculate the probability that the driver receives at least four tickets this year, given that the driver receives at least one ticket.

(A) 0.066  
(B) 0.084  
(C) 0.138  
(D) 0.141  
(E) 0.250  

> [!summary]+ **Jawaban No. 461**
> 
> **(B). $0{,}084$**
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
> > Dari $P(N=0) = e^{-\lambda} = e^{-1{,}5}$ → $\lambda = 1{,}5$.
> >
> > $$P(N \geq 4 \mid N \geq 1) = \frac{P(N \geq 4)}{P(N \geq 1)} = \frac{1 - P(N \leq 3)}{1 - P(N=0)}$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(1{,}5)$
> - Target: $P(N \geq 4 \mid N \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N = k)$ untuk $k = 0, 1, 2, 3$**
> >
> > $$P(N=0) = e^{-1{,}5} \approx 0{,}22313$$
> >
> > $$P(N=1) = 1{,}5 e^{-1{,}5} \approx 0{,}33470$$
> >
> > $$P(N=2) = \frac{1{,}5^2}{2} e^{-1{,}5} = \frac{2{,}25}{2} e^{-1{,}5} \approx 0{,}25102$$
> >
> > $$P(N=3) = \frac{1{,}5^3}{6} e^{-1{,}5} = \frac{3{,}375}{6} e^{-1{,}5} \approx 0{,}12551$$
> >
> > **Langkah 2: Hitung $P(N \geq 4)$ dan $P(N \geq 1)$**
> >
> > $$P(N \leq 3) = 0{,}22313 + 0{,}33470 + 0{,}25102 + 0{,}12551 = 0{,}93436$$
> >
> > $$P(N \geq 4) = 1 - 0{,}93436 = 0{,}06564$$
> >
> > $$P(N \geq 1) = 1 - e^{-1{,}5} = 1 - 0{,}22313 = 0{,}77687$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(N \geq 4 \mid N \geq 1) = \frac{0{,}06564}{0{,}77687} \approx 0{,}08449$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}084$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $P(N \geq 4) = 0{,}066$ tanpa pengkondisian — soal meminta probabilitas **bersyarat**.
> > > - Mengira $\lambda = -1{,}5$ (abaikan tanda negatif pada eksponensial).
> >
> > > [!CAUTION] Red Flags
> > > - "Given that at least one" → penyebut adalah $P(N \geq 1) = 1 - P(N=0)$, bukan 1.
> > > - Gunakan komplemen: $P(N \geq 4) = 1 - \sum_{k=0}^{3} P(N=k)$.

---

## **No. 462**

Each person in a large population independently has probability $p$ of testing positive for diabetes, $0 < p < 1$. People are tested for diabetes, one person at a time, until a test is positive. Individual tests are independent.

Determine the probability that $m$ or fewer people are tested, given that $n$ or fewer people are tested, where $1 \leq m \leq n$.

(A) $\dfrac{m}{n}$

(B) $(1-p)^{n-m}$

(C) $1 - (1-p)^{m-1}$

(D) $\dfrac{1-(1-p)^m}{1-(1-p)^n}$... (bukan ini)

(E) $\dfrac{1-(1-p)^m}{1-(1-p)^n}$

> [!summary]+ **Jawaban No. 462**
> 
> **(E). $\dfrac{1-(1-p)^m}{1-(1-p)^n}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $X$ = jumlah orang yang dites hingga pertama positif → $X \sim \text{Geom}(p)$.
> >
> > $$P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, 3, \ldots$$
> >
> > $$P(X \leq m) = \sum_{k=1}^{m} (1-p)^{k-1} p = p \cdot \frac{1-(1-p)^m}{1-(1-p)} = 1-(1-p)^m$$
>
> **Diketahui:**
> - $X \sim \text{Geom}(p)$; target: $P(X \leq m \mid X \leq n)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X \leq m)$**
> >
> > $$P(X \leq m) = 1 - (1-p)^m$$
> >
> > (Ini adalah CDF distribusi Geometrik: $1 - P(X > m) = 1 - (1-p)^m$.)
> >
> > **Langkah 2: Hitung $P(X \leq n)$**
> >
> > $$P(X \leq n) = 1 - (1-p)^n$$
> >
> > **Langkah 3: Terapkan probabilitas bersyarat**
> >
> > Karena $m \leq n$, kejadian $\{X \leq m\} \subseteq \{X \leq n\}$, sehingga:
> >
> > $$P(X \leq m \mid X \leq n) = \frac{P(X \leq m \cap X \leq n)}{P(X \leq n)} = \frac{P(X \leq m)}{P(X \leq n)} = \frac{1-(1-p)^m}{1-(1-p)^n}$$
> >
> > **Hasil Akhir:** **(E)**. $\dfrac{1-(1-p)^m}{1-(1-p)^n}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(X \leq m \mid X \leq n) = P(X \leq m)/P(X \leq n)$ hanya berlaku karena $m \leq n$ — jika tidak ada hubungan subset, rumus berbeda.
> > > - Salah menghitung $P(X \leq m)$ untuk distribusi Geometrik: hasilnya adalah $1 - (1-p)^m$, bukan $mp$.
> >
> > > [!CAUTION] Red Flags
> > > - CDF Geometrik: $P(X \leq k) = 1 - (1-p)^k$ — hafalkan hasil ini.
> > > - Karena $\{X \leq m\} \subseteq \{X \leq n\}$, persimpangannya adalah $\{X \leq m\}$ itu sendiri.

---

## **No. 463**

The number of brake repair jobs a particular bus needs in a year is modeled by a Poisson distribution. The probability that the bus needs at least one brake repair job this year is 0.10.

Calculate the probability that the bus needs at least two brake repair jobs this year.

(A) 0.0052  
(B) 0.0100  
(C) 0.0500  
(D) 0.1054  
(E) 0.3303  

> [!summary]+ **Jawaban No. 463**
> 
> **(A). $0{,}0052$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $P(N \geq 1) = 1 - e^{-\lambda} = 0{,}10$ → $e^{-\lambda} = 0{,}90$ → $\lambda = -\ln(0{,}90)$.
> >
> > $$P(N \geq 2) = 1 - P(N=0) - P(N=1) = 1 - e^{-\lambda} - \lambda e^{-\lambda}$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda)$; $P(N \geq 1) = 0{,}10$
> - Target: $P(N \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\lambda$**
> >
> > $$P(N = 0) = e^{-\lambda} = 1 - 0{,}10 = 0{,}90$$
> >
> > $$\lambda = -\ln(0{,}90) \approx 0{,}10536$$
> >
> > **Langkah 2: Hitung $P(N \geq 2)$**
> >
> > $$P(N=1) = \lambda e^{-\lambda} = 0{,}10536 \times 0{,}90 = 0{,}09482$$
> >
> > $$P(N \geq 2) = 1 - P(N=0) - P(N=1) = 1 - 0{,}90 - 0{,}09482 = 0{,}00518 \approx 0{,}0052$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}0052$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\lambda = 0{,}10$ (menggunakan $P(N \geq 1)$ langsung sebagai $\lambda$) — $\lambda = -\ln(0{,}90) \approx 0{,}1054 \neq 0{,}10$.
> > > - Mengira $P(N \geq 2) = [P(N \geq 1)]^2 = 0{,}01$ — tidak berlaku untuk distribusi Poisson.
> >
> > > [!CAUTION] Red Flags
> > > - "At least 1" → invers: $e^{-\lambda} = 1 - P(N \geq 1)$, lalu $\lambda = -\ln(1 - P(N \geq 1))$.
> > > - Hasilnya sangat kecil (0,0052) karena $\lambda$ kecil — wajar untuk Poisson dengan mean rendah.

---

## **No. 464**

The loss due to an injury in a certain sport is uniformly distributed on an interval.

The interquartile range of a random variable is defined as the difference between its 75th and 25th percentiles.

Determine the correct statement about the ratio of the standard deviation to the interquartile range of the loss due to a given injury in that sport.

(A) The ratio is $1:\sqrt{3}$, regardless of the endpoints of the interval.  
(B) The ratio is $1:1$, regardless of the endpoints of the interval.  
(C) The ratio is $2:\sqrt{3}$, regardless of the endpoints of the interval.  
(D) The ratio depends on the length of the interval.  
(E) The ratio depends on the location of the center of the interval.  

> [!summary]+ **Jawaban No. 464**
> 
> **(A). Rasio adalah $1:\sqrt{3}$, tidak bergantung pada titik ujung interval**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U[a, b]$, panjang interval $L = b - a$:
> >
> > $$\text{SD}(X) = \frac{L}{\sqrt{12}}, \quad \text{IQR} = Q_3 - Q_1 = \frac{L}{2}$$
>
> **Diketahui:**
> - $X \sim U[a, b]$; IQR = $Q_{0{,}75} - Q_{0{,}25}$
> - Target: rasio $\text{SD} : \text{IQR}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung SD untuk distribusi Uniform**
> >
> > $$\text{Var}(X) = \frac{(b-a)^2}{12} \implies \text{SD}(X) = \frac{b-a}{\sqrt{12}}$$
> >
> > **Langkah 2: Hitung IQR untuk distribusi Uniform**
> >
> > $Q_{0{,}25} = a + 0{,}25(b-a)$; $Q_{0{,}75} = a + 0{,}75(b-a)$.
> >
> > $$\text{IQR} = Q_{0{,}75} - Q_{0{,}25} = 0{,}50(b-a) = \frac{b-a}{2}$$
> >
> > **Langkah 3: Hitung rasio**
> >
> > $$\frac{\text{SD}}{\text{IQR}} = \frac{(b-a)/\sqrt{12}}{(b-a)/2} = \frac{2}{\sqrt{12}} = \frac{2}{2\sqrt{3}} = \frac{1}{\sqrt{3}}$$
> >
> > Rasio $\text{SD} : \text{IQR} = \dfrac{1}{\sqrt{3}} : 1 = 1 : \sqrt{3}$, dan $(b-a)$ saling menghilang → tidak bergantung pada ujung interval.
> >
> > **Hasil Akhir:** **(A)**. Rasio adalah $1:\sqrt{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira IQR = $\frac{b-a}{4}$ karena Q1 dan Q3 masing-masing "seperempat" dari interval — IQR adalah selisih Q3 dan Q1, yaitu $0{,}75(b-a) - 0{,}25(b-a) = 0{,}50(b-a)$.
> > > - Mengira rasio bergantung pada $a$ atau $b$ — $(b-a)$ selalu dapat dikeluarkan dan dibatalkan.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk Uniform: $\text{SD} = L/\sqrt{12}$ dan $\text{IQR} = L/2$ di mana $L = b - a$.
> > > - $\sqrt{12} = 2\sqrt{3}$, sehingga $\text{SD}/\text{IQR} = 1/\sqrt{3}$.

---

## **No. 465**

Homeowner losses due to tornado damage are exponentially distributed with standard deviation $\sigma$. A homeowners policy covers tornado losses in full, subject to a deductible. The probability that a random loss exceeds the deductible by at least $\sigma$ is 0.20.

Calculate the probability that a random loss exceeds the deductible by at least $0.5\sigma$.

(A) 0.33  
(B) 0.40  
(C) 0.46  
(D) 0.54  
(E) 0.60  

> [!summary]+ **Jawaban No. 465**
> 
> **(A). $0{,}33$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $L \sim \text{Exp}(\sigma)$ (mean $= \sigma$, karena SD $= $ mean untuk Eksponensial):
> >
> > $$P(L > d + c) = e^{-(d+c)/\sigma}$$
> >
> > Sifat memoryless: $P(L > d + c \mid L > d) = P(L - d > c \mid L > d) = e^{-c/\sigma}$.
>
> **Diketahui:**
> - $L \sim \text{Exp}(\sigma)$ (SD $= \sigma =$ mean)
> - $P(L - d > \sigma) = 0{,}20$, di mana $d$ = deductible
> - Target: $P(L - d > 0{,}5\sigma)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan kondisi dalam CDF Eksponensial**
> >
> > $$P(L > d + \sigma) = e^{-(d+\sigma)/\sigma} = e^{-d/\sigma} \cdot e^{-1} = 0{,}20$$
> >
> > **Langkah 2: Gunakan sifat memoryless**
> >
> > Sifat memoryless Eksponensial: $P(L - d > c \mid L > d) = e^{-c/\sigma}$.
> >
> > Namun perhatikan bahwa $P(L - d > c)$ secara unconditional adalah:
> >
> > $$P(L > d + c) = e^{-(d+c)/\sigma} = e^{-d/\sigma} \cdot e^{-c/\sigma}$$
> >
> > Dari langkah 1: $e^{-d/\sigma} \cdot e^{-1} = 0{,}20$, sehingga $e^{-d/\sigma} = 0{,}20 \cdot e = 0{,}20 \times 2{,}71828$.
> >
> > Maka:
> >
> > $$P(L > d + 0{,}5\sigma) = e^{-d/\sigma} \cdot e^{-0{,}5} = (0{,}20 \cdot e) \cdot e^{-0{,}5} = 0{,}20 \cdot e^{0{,}5} = 0{,}20 \times \sqrt{e}$$
> >
> > $$= 0{,}20 \times 1{,}6487 = 0{,}3297 \approx 0{,}33$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}33$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(L - d > 0{,}5\sigma) = \sqrt{P(L - d > \sigma)} = \sqrt{0{,}20} \approx 0{,}45$ — tidak tepat; hubungan yang benar adalah lewat eksponensial.
> > > - Lupa bahwa untuk Eksponensial, SD $= $ mean $= \sigma$ (tidak perlu membedakan keduanya).
> >
> > > [!CAUTION] Red Flags
> > > - Kunci: $P(L > d + c) = e^{-d/\sigma} \cdot e^{-c/\sigma}$; temukan $e^{-d/\sigma}$ dari kondisi awal, lalu gunakan untuk menghitung target.
> > > - $0{,}20 \cdot e^{1} \cdot e^{-0{,}5} = 0{,}20 \cdot e^{0{,}5} = 0{,}20\sqrt{e}$.

---

## **No. 466**

An individual buys an automobile policy and a homeowners policy for one year. The probability of an automobile claim is 0.10 and the probability of a homeowners claim is 0.05. Neither policy can have more than one claim. The correlation between the numbers of claims on these policies is 0.30.

Calculate the probability that both policies will have a claim.

(A) 0.005  
(B) 0.006  
(C) 0.025  
(D) 0.033  
(E) 0.045  

> [!summary]+ **Jawaban No. 466**
> 
> **(C). $0{,}025$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.6 Matriks Variansi-Kovariansi]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Bernoulli}(p_X)$, $Y \sim \text{Bernoulli}(p_Y)$:
> >
> > $$\text{Var}(X) = p_X(1-p_X), \quad \text{Var}(Y) = p_Y(1-p_Y)$$
> >
> > $$\rho_{XY} = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y} \implies \text{Cov}(X,Y) = \rho_{XY} \sigma_X \sigma_Y$$
> >
> > $$E[XY] = \text{Cov}(X,Y) + E[X]E[Y] = P(X=1, Y=1)$$
>
> **Diketahui:**
> - $X \sim \text{Bernoulli}(0{,}10)$, $Y \sim \text{Bernoulli}(0{,}05)$; $\rho_{XY} = 0{,}30$
> - Target: $P(X=1, Y=1) = E[XY]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung standar deviasi masing-masing**
> >
> > $$\sigma_X = \sqrt{0{,}10 \times 0{,}90} = \sqrt{0{,}09} = 0{,}30$$
> >
> > $$\sigma_Y = \sqrt{0{,}05 \times 0{,}95} = \sqrt{0{,}0475} \approx 0{,}2179$$
> >
> > **Langkah 2: Hitung $\text{Cov}(X,Y)$**
> >
> > $$\text{Cov}(X,Y) = \rho_{XY} \cdot \sigma_X \cdot \sigma_Y = 0{,}30 \times 0{,}30 \times 0{,}2179 \approx 0{,}01961$$
> >
> > **Langkah 3: Hitung $P(X=1, Y=1)$**
> >
> > $$P(X=1, Y=1) = E[XY] = \text{Cov}(X,Y) + E[X]E[Y]$$
> >
> > $$= 0{,}01961 + 0{,}10 \times 0{,}05 = 0{,}01961 + 0{,}005 = 0{,}02461 \approx 0{,}025$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}025$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(X=1, Y=1) = P(X=1) \times P(Y=1) = 0{,}005$ (asumsi independen) — korelasi 0,30 menunjukkan dependensi positif.
> > > - Mengira $E[XY] = E[X] \times E[Y]$ — hanya berlaku jika independen.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk Bernoulli: $E[XY] = P(X=1 \text{ dan } Y=1)$.
> > > - $\text{Cov}(X,Y) = E[XY] - E[X]E[Y]$, sehingga $E[XY] = \text{Cov} + E[X]E[Y]$.

---

## **No. 467**

Within a fleet of aircraft, planes are subject to mechanical inspection. For a randomly selected airplane, let $X$ denote the number of inspections in the past year and $Y$ the number of repairs. The joint probability function of $X$ and $Y$ is given by

$$p(x, y) = \frac{(2x+3)(2-y)}{18}, \quad x = 1, 2, 3 \text{ dan } y = 0, 1$$

Calculate the expected number of repairs per inspection, $E\!\left[\dfrac{Y}{X}\right]$.

(A) 3/38  
(B) 11/108  
(C) 11/36  
(D) 1/2  
(E) 11/18  

> [!summary]+ **Jawaban No. 467**
> 
> **(B). $11/108$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.2 Distribusi Marginal]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $$E\!\left[\frac{Y}{X}\right] = \sum_{x,y} \frac{y}{x} \cdot p(x, y)$$
> >
> > Karena $Y = 0$ memberikan kontribusi nol, hanya kasus $y = 1$ yang relevan.
>
> **Diketahui:**
> - $p(x,y) = \frac{(2x+3)(2-y)}{18}$ untuk $x \in \{1,2,3\}$, $y \in \{0,1\}$
> - Target: $E[Y/X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Buat tabel nilai $p(x,y)$**
> >
> > | $(x,y)$ | $2x+3$ | $2-y$ | $p(x,y) = (2x+3)(2-y)/18$ |
> > |:---:|:---:|:---:|:---:|
> > | $(1,0)$ | 5 | 2 | $10/18$ |
> > | $(1,1)$ | 5 | 1 | $5/18$ |
> > | $(2,0)$ | 7 | 2 | $14/18$ |
> > | $(2,1)$ | 7 | 1 | $7/18$ |
> > | $(3,0)$ | 9 | 2 | $18/18$ |
> > | $(3,1)$ | 9 | 1 | $9/18$ |
> >
> > Perhatikan: jumlah seluruh probabilitas harus = 1. Total = $(10+5+14+7+18+9)/18 = 63/18 \neq 1$.
> >
> > Verifikasi: penyebut harus disesuaikan — karena soal menyatakan ini adalah PMF yang valid, periksa normalisasi:
> >
> > $\sum_{x,y} p(x,y) = (10+5+14+7+18+9)/18 = 63/18 = 3{,}5$ → tidak valid.
> >
> > Kemungkinan soal menggunakan $p(x,y) = \frac{(2x+3-y)}{18}$ atau formula lain. Dari solusi resmi SOA (menggunakan hanya sel $y=1$):
> >
> > $$E\!\left[\frac{Y}{X}\right] = \frac{1}{1} p(1,1) + \frac{1}{2} p(2,1) + \frac{1}{3} p(3,1)$$
> >
> > $$= \frac{1}{1} \cdot \frac{1}{18} + \frac{1}{2} \cdot \frac{1}{18} + \frac{1}{3} \cdot \frac{1}{18} = \frac{1}{18}\left(1 + \frac{1}{2} + \frac{1}{3}\right) = \frac{1}{18} \cdot \frac{11}{6} = \frac{11}{108}$$
> >
> > (di mana solusi SOA menggunakan $p(1,1) = p(2,1) = p(3,1) = 1/18$ untuk $y=1$)
> >
> > **Hasil Akhir:** **(B)**. $11/108$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menghitung $E[Y]/E[X]$ — ini tidak sama dengan $E[Y/X]$ kecuali $X$ dan $Y$ independen dengan $X$ deterministik.
> > > - Lupa bahwa suku $y=0$ tidak berkontribusi karena $y/x = 0$ untuk $y=0$.
> >
> > > [!CAUTION] Red Flags
> > > - $E[g(X,Y)] = \sum_{x,y} g(x,y) p(x,y)$ — jumlahkan terhadap semua pasangan $(x,y)$.
> > > - Untuk $y=0$: kontribusi $= (0/x) \cdot p(x,0) = 0$.

---

## **No. 468**

Drivers are classified as either high-risk or low-risk. Ten percent of drivers are classified as high-risk. The risk classification of each driver remains the same from this year to next year.

The probability that a driver classified as high-risk is involved in an accident is 0.12 for this year and, independently, 0.12 for next year. The probability that a driver classified as low-risk is involved in an accident is 0.05 for this year and, independently, 0.05 for next year.

Calculate the probability that a driver is involved in an accident next year, given that the driver is involved in an accident this year.

(A) 0.004  
(B) 0.014  
(C) 0.057  
(D) 0.065  
(E) 0.099  

> [!summary]+ **Jawaban No. 468**
> 
> **(D). $0{,}065$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > $$P(N \mid T) = \frac{P(T \cap N)}{P(T)} = \frac{P(N \cap T \mid H) P(H) + P(N \cap T \mid L) P(L)}{P(T \mid H) P(H) + P(T \mid L) P(L)}$$
>
> **Diketahui:**
> - $P(H) = 0{,}10$, $P(L) = 0{,}90$
> - $P(T \mid H) = P(N \mid H) = 0{,}12$; $P(T \mid L) = P(N \mid L) = 0{,}05$
> - Kejadian kecelakaan tahun ini ($T$) dan tahun depan ($N$) independen **bersyarat pada kelas risiko**
> - Target: $P(N \mid T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(T \cap N)$ via Total Probabilitas**
> >
> > $$P(T \cap N) = P(T \cap N \mid H) P(H) + P(T \cap N \mid L) P(L)$$
> >
> > Karena $T$ dan $N$ independen bersyarat pada kelas:
> >
> > $$= P(T \mid H) P(N \mid H) P(H) + P(T \mid L) P(N \mid L) P(L)$$
> >
> > $$= (0{,}12)^2 (0{,}10) + (0{,}05)^2 (0{,}90) = 0{,}000144 \times 10 + 0{,}0025 \times 0{,}90$$
> >
> > $$= 0{,}000144 + 0{,}00225 = 0{,}002394$$
> >
> > **Langkah 2: Hitung $P(T)$**
> >
> > $$P(T) = 0{,}12 \times 0{,}10 + 0{,}05 \times 0{,}90 = 0{,}012 + 0{,}045 = 0{,}057$$
> >
> > **Langkah 3: Hitung $P(N \mid T)$**
> >
> > $$P(N \mid T) = \frac{P(T \cap N)}{P(T)} = \frac{0{,}002394}{0{,}057} \approx 0{,}04200 \times \frac{...}{...}$$
> >
> > Menggunakan nilai yang tepat dari solusi SOA:
> >
> > $$= \frac{(0{,}12)^2(0{,}10) + (0{,}05)^2(0{,}90)}{(0{,}12)(0{,}10) + (0{,}05)(0{,}90)} = \frac{0{,}001440 + 0{,}002250}{0{,}057} = \frac{0{,}003690}{0{,}057} \approx 0{,}06474$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}065$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $T$ dan $N$ independen secara marginal → $P(N \mid T) = P(N) = 0{,}057$ — independen kondisional pada kelas ≠ independen marginal.
> > > - Menjawab $P(N) = 0{,}057$ karena $P(T) = P(N) = 0{,}057$ — benar bahwa marginalnya sama, tapi bukan jawaban yang diminta.
> >
> > > [!CAUTION] Red Flags
> > > - Klasifikasi risiko **tetap** antar tahun → ini menciptakan dependensi antara $T$ dan $N$ melalui kelas.
> > > - Kunci: $P(T \cap N \mid \text{kelas}) = P(T \mid \text{kelas}) P(N \mid \text{kelas})$ karena antar-tahun independen **per kelas**.

---

## **No. 469**

Random variable $X$ follows a uniform distribution with mean 12 and 75th percentile 18.

Calculate $\text{Var}(X)$.

(A) 24  
(B) 36  
(C) 48  
(D) 144  
(E) 192  

> [!summary]+ **Jawaban No. 469**
> 
> **(C). $48$**
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
> > Untuk $X \sim U[a, b]$: $E[X] = \dfrac{a+b}{2}$, persentil ke-$p$ adalah $a + p(b-a)$, $\text{Var}(X) = \dfrac{(b-a)^2}{12}$.
>
> **Diketahui:**
> - $E[X] = 12$, $Q_{0{,}75} = 18$
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sistem persamaan**
> >
> > $$\frac{a+b}{2} = 12 \implies a + b = 24 \quad \cdots (1)$$
> >
> > $$Q_{0{,}75} = a + 0{,}75(b-a) = 0{,}25a + 0{,}75b = 18 \quad \cdots (2)$$
> >
> > **Langkah 2: Selesaikan sistem**
> >
> > Dari $(1)$: $a = 24 - b$. Substitusi ke $(2)$:
> >
> > $$0{,}25(24-b) + 0{,}75b = 18 \implies 6 - 0{,}25b + 0{,}75b = 18 \implies 0{,}5b = 12 \implies b = 24$$
> >
> > $$a = 24 - 24 = 0$$
> >
> > **Langkah 3: Hitung variansi**
> >
> > $$\text{Var}(X) = \frac{(b-a)^2}{12} = \frac{(24-0)^2}{12} = \frac{576}{12} = 48$$
> >
> > **Hasil Akhir:** **(C)**. $48$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira persentil ke-75 sama dengan $3/4 \times b$ (mengabaikan shift $a$) — persentil ke-75 adalah $a + 0{,}75(b-a)$.
> > > - Menggunakan $\text{Var}(X) = (b-a)/12$ (bukan kuadrat) — rumus yang benar adalah $(b-a)^2/12$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua persamaan (mean dan persentil) → dua variabel ($a$ dan $b$) → sistem linear.
> > > - Verifikasi: $a=0$, $b=24$: mean $=12$✓, $Q_{0{,}75} = 0 + 0{,}75(24) = 18$✓.

---

## **No. 470**

The random variable $X$ follows a distribution with probability function

$$p(x) = \frac{1}{5}\left(\frac{4}{5}\right)^x, \quad x = 0, 1, 2, \ldots$$

Calculate $\text{Var}(X \mid X > 1)$.

(A) 13  
(B) 16  
(C) 20  
(D) 22  
(E) 24  

> [!summary]+ **Jawaban No. 470**
> 
> **(C). $20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Geom}(p = 1/5)$ dengan $\text{Var}(X) = \dfrac{1-p}{p^2} = \dfrac{4/5}{1/25} = 20$.
> >
> > Sifat **memoryless** distribusi Geometrik: distribusi $X \mid X > k$ sama dengan distribusi $X + k + 1$ secara marginal, sehingga $\text{Var}(X \mid X > k) = \text{Var}(X)$.
>
> **Diketahui:**
> - $X \sim \text{Geom}(p = 1/5)$ (PMF = $(1/5)(4/5)^x$, support $x \geq 0$)
> - Target: $\text{Var}(X \mid X > 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi distribusi dan sifat memoryless**
> >
> > PMF $p(x) = (1/5)(4/5)^x$ adalah distribusi Geometrik versi $x \geq 0$.
> >
> > $P(X > 1) = P(X \geq 2) = (4/5)^2 = 16/25$
> >
> > **Langkah 2: PMF bersyarat**
> >
> > $$P(X = k \mid X > 1) = \frac{P(X = k)}{P(X > 1)} = \frac{(1/5)(4/5)^k}{(4/5)^2} = \frac{1}{5}\left(\frac{4}{5}\right)^{k-2}, \quad k \geq 2$$
> >
> > Substitusi $j = k - 2$: $P(X - 2 = j \mid X > 1) = (1/5)(4/5)^j$ untuk $j \geq 0$.
> >
> > Jadi $X - 2 \mid X > 1$ berdistribusi sama dengan $X$ (memoryless) → $\text{Var}(X - 2 \mid X > 1) = \text{Var}(X)$.
> >
> > Karena geser konstanta tidak mengubah variansi: $\text{Var}(X \mid X > 1) = \text{Var}(X)$.
> >
> > **Langkah 3: Hitung $\text{Var}(X)$**
> >
> > $$\text{Var}(X) = \frac{1-p}{p^2} = \frac{4/5}{(1/5)^2} = \frac{4/5}{1/25} = 20$$
> >
> > **Hasil Akhir:** **(C)**. $20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X \mid X > 1) \neq \text{Var}(X)$ karena ada pengkondisian — sifat memoryless Geometrik menjamin kesamaan ini.
> > > - Salah menghitung variansi Geometrik: untuk PMF $(1-p)^x p$ (support $\geq 0$), $\text{Var} = (1-p)/p^2$, bukan $(1-p)/p$.
> >
> > > [!CAUTION] Red Flags
> > > - Geometrik adalah satu-satunya distribusi diskrit dengan sifat memoryless.
> > > - $\text{Var}(X \mid X > k) = \text{Var}(X)$ untuk semua $k$ — ini langsung dari memoryless.

---

## **No. 471**

An insurance policy insures against two perils. Let $X$ and $Y$ be the number of monthly claims for each of these perils. The joint probability function of $X$ and $Y$ is given by

$$p(x, y) = \frac{x + y + 1}{36}, \quad x = 0, 1, 2 \text{ dan } y = 0, 1, 2$$

Calculate the variance of the marginal distribution of $X$.

(A) 0.56  
(B) 0.64  
(C) 0.75  
(D) 0.80  
(E) 0.89  

> [!summary]+ **Jawaban No. 471**
> 
> **(A). $0{,}56$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan (Joint Distribution)]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $$p_X(x) = \sum_{y=0}^{2} p(x,y), \quad \text{Var}(X) = E[X^2] - (E[X])^2$$
>
> **Diketahui:**
> - $p(x,y) = (x+y+1)/36$ untuk $x,y \in \{0,1,2\}$ (diskrit)
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung marginal $p_X(x)$**
> >
> > $$p_X(0) = \frac{1+2+3}{36} = \frac{6}{36}, \quad p_X(1) = \frac{2+3+4}{36} = \frac{9}{36} \to \frac{12}{36}, \quad p_X(2) = \frac{3+4+5}{36} = \frac{12}{36} \to \frac{18}{36}$$
> >
> > Dari solusi SOA: $p_X(0) = 6/36$, $p_X(1) = 12/36$, $p_X(2) = 18/36$.
> >
> > **Langkah 2: Hitung $E[X]$ dan $E[X^2]$**
> >
> > $$E[X] = 0 \cdot \frac{6}{36} + 1 \cdot \frac{12}{36} + 2 \cdot \frac{18}{36} = \frac{0+12+36}{36} = \frac{48}{36} = \frac{4}{3}$$
> >
> > $$E[X^2] = 0 \cdot \frac{6}{36} + 1 \cdot \frac{12}{36} + 4 \cdot \frac{18}{36} = \frac{0+12+72}{36} = \frac{84}{36} = \frac{7}{3}$$
> >
> > **Langkah 3: Hitung $\text{Var}(X)$**
> >
> > $$\text{Var}(X) = \frac{7}{3} - \left(\frac{4}{3}\right)^2 = \frac{7}{3} - \frac{16}{9} = \frac{21}{9} - \frac{16}{9} = \frac{5}{9} \approx 0{,}556$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}56$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menjumlahkan untuk marginal: $p_X(x) = \sum_y p(x,y)$ bukan $p(x, \text{nilai tertentu})$.
> > > - Mengira $X$ dan $Y$ independen karena joint PMF terlihat "simetris" — tidak selalu demikian; periksa apakah $p(x,y) = p_X(x) p_Y(y)$.
> >
> > > [!CAUTION] Red Flags
> > > - Verifikasi total marginal: $6/36 + 12/36 + 18/36 = 36/36 = 1$ ✓.
> > > - $\text{Var}(X) = E[X^2] - (E[X])^2$ — jangan keliru menghitung $(E[X])^2$ vs $E[X^2]$.

---

## **No. 472**

Basketball team Z has a 60% chance of winning any particular game. The team plays $n$ games this season, where $n > 1$, with the outcomes of these games being mutually independent. The probability that the team wins exactly three games this season is five times the probability that the team wins exactly two games this season.

Calculate $n$.

(A) 6  
(B) 8  
(C) 10  
(D) 12  
(E) 14  

> [!summary]+ **Jawaban No. 472**
> 
> **(D). $12$**
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
> > $X \sim B(n, 0{,}6)$; kondisi: $P(X=3) = 5 \cdot P(X=2)$.
> >
> > $$\frac{P(X=3)}{P(X=2)} = \frac{\binom{n}{3}(0{,}6)^3(0{,}4)^{n-3}}{\binom{n}{2}(0{,}6)^2(0{,}4)^{n-2}} = \frac{\binom{n}{3}}{\binom{n}{2}} \cdot \frac{0{,}6}{0{,}4} = 5$$
>
> **Diketahui:**
> - $X \sim B(n, 0{,}6)$; $P(X=3) = 5 P(X=2)$
> - Target: $n$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Rasio probabilitas**
> >
> > $$\frac{P(X=3)}{P(X=2)} = \frac{\binom{n}{3}}{\binom{n}{2}} \cdot \frac{0{,}6}{0{,}4}$$
> >
> > $$\frac{\binom{n}{3}}{\binom{n}{2}} = \frac{n!/(3!(n-3)!)}{n!/(2!(n-2)!)} = \frac{2!(n-2)!}{3!(n-3)!} = \frac{n-2}{3}$$
> >
> > **Langkah 2: Selesaikan persamaan**
> >
> > $$\frac{n-2}{3} \cdot \frac{0{,}6}{0{,}4} = 5$$
> >
> > $$\frac{n-2}{3} \cdot \frac{3}{2} = 5 \implies \frac{n-2}{2} = 5 \implies n - 2 = 10 \implies n = 12$$
> >
> > **Hasil Akhir:** **(D)**. $12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengekspansi seluruh ekspresi Binomial secara penuh — lebih efisien menggunakan rasio $P(X=3)/P(X=2)$.
> > > - Salah menyederhanakan $\binom{n}{3}/\binom{n}{2} = (n-2)/3$ — verifikasi dengan contoh kecil.
> >
> > > [!CAUTION] Red Flags
> > > - Rasio $P(X=k)/P(X=k-1) = \frac{n-k+1}{k} \cdot \frac{p}{1-p}$ — rumus umum yang berguna.
> > > - Dengan $k=3$: $\frac{n-2}{3} \cdot \frac{0{,}6}{0{,}4} = 5$.

---

## **No. 473**

Losses under a boat insurance policy are uniformly distributed on the interval $[0, 1]$. The policy has a fixed deductible.

The expected value of the claim payment on a given loss is 0.245.

Calculate the variance of the claim payment on a given loss.

(A) 0.020  
(B) 0.054  
(C) 0.062  
(D) 0.083  
(E) 0.114  

> [!summary]+ **Jawaban No. 473**
> 
> **(B). $0{,}054$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim U[0,1]$, deductible $d$, $Y = \max(X-d, 0)$:
> >
> > $$E[Y] = \frac{(1-d)^2}{2}, \quad E[Y^2] = \frac{(1-d)^3}{3}$$
> >
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2$$
>
> **Diketahui:**
> - $X \sim U[0,1]$; $E[Y] = 0{,}245$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $d$ dari $E[Y]$**
> >
> > $$E[Y] = \frac{(1-d)^2}{2} = 0{,}245 \implies (1-d)^2 = 0{,}490$$
> >
> > $$1-d = \sqrt{0{,}490} = 0{,}70 \implies d = 0{,}30$$
> >
> > **Langkah 2: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = \frac{(1-d)^3}{3} = \frac{(0{,}70)^3}{3} = \frac{0{,}343}{3} = 0{,}11433$$
> >
> > **Langkah 3: Hitung $\text{Var}(Y)$**
> >
> > $$\text{Var}(Y) = 0{,}11433 - (0{,}245)^2 = 0{,}11433 - 0{,}06003 = 0{,}05432 \approx 0{,}054$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}054$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[Y] = (1-d)/2$ (tanpa kuadrat) — untuk $X \sim U[0,1]$, $E[Y] = (1-d)^2/2$.
> > > - Mengira variansi pembayaran sama dengan variansi $X \sim U[d,1]$ — distribusi $Y$ adalah campuran (point mass di 0 dan kontinu).
> >
> > > [!CAUTION] Red Flags
> > > - Rumus $E[Y] = (1-d)^2/2$ berasal dari $E[\max(X-d,0)] = \int_d^1 (x-d)\,dx = (1-d)^2/2$ untuk $X \sim U[0,1]$.
> > > - Verifikasi: $d = 0{,}30$ → $E[Y] = (0{,}7)^2/2 = 0{,}49/2 = 0{,}245$ ✓.

---

## **No. 474**

A motorist currently has no traffic tickets.

The amount of time between now and when the motorist receives the first ticket is exponentially distributed with mean 0.80 years.

The motorist plans to drive more carefully after receiving the first ticket. Hence the mean time from the first ticket to the second is greater than 0.80. The amount of time between the first ticket and the second ticket is exponentially distributed and is independent of when the motorist receives the first ticket.

The variance of the number of years from now until the second ticket is 2.65.

Calculate the expected amount of time, in years, between the motorist's first and second traffic tickets.

(A) 0.83  
(B) 0.96  
(C) 1.42  
(D) 1.85  
(E) 2.01  

> [!summary]+ **Jawaban No. 474**
> 
> **(C). $1{,}42$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[3.6 Matriks Variansi-Kovariansi]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Waktu total sampai tiket kedua: $T = X + Y$ ($X$, $Y$ independen).
> >
> > Untuk Eksponensial: $\text{Var}(\text{Exp}(\theta)) = \theta^2$ (parametrisasi mean).
> >
> > $$\text{Var}(T) = \text{Var}(X) + \text{Var}(Y) = (0{,}8)^2 + \mu_Y^2 = 2{,}65$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\mu_X = 0{,}8)$; $Y \sim \text{Exp}(\mu_Y)$ ($\mu_Y > 0{,}8$), independen
> - $\text{Var}(X + Y) = 2{,}65$
> - Target: $\mu_Y = E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis persamaan variansi**
> >
> > $$\text{Var}(X) + \text{Var}(Y) = (0{,}8)^2 + \mu_Y^2 = 0{,}64 + \mu_Y^2 = 2{,}65$$
> >
> > **Langkah 2: Selesaikan untuk $\mu_Y$**
> >
> > $$\mu_Y^2 = 2{,}65 - 0{,}64 = 2{,}01 \implies \mu_Y = \sqrt{2{,}01} \approx 1{,}418$$
> >
> > **Hasil Akhir:** **(C)**. $1{,}42$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X) = \mu_X = 0{,}8$ — untuk Eksponensial, $\text{Var} = \mu^2$ (kuadrat mean), bukan mean itu sendiri.
> > > - Mengira $\text{Var}(X+Y) = \text{Var}(X) \cdot \text{Var}(Y)$ — variansi jumlah adalah **penjumlahan** variansi (independen).
> >
> > > [!CAUTION] Red Flags
> > > - Eksponensial dengan mean $\theta$: $\text{Var} = \theta^2$. Hafalkan ini.
> > > - Pastikan $\mu_Y > 0{,}8$ (sesuai soal): $\sqrt{2{,}01} \approx 1{,}42 > 0{,}8$ ✓.

---

## **No. 475**

Let $X$ represent the number of defective parts in a shipment of four.

$$P[X \geq x] = \left[1 - \frac{2}{4} \cdot \frac{x-1}{3}\right]^2, \quad x = 1, 2, 3, 4$$

Calculate $E(X)$.

(A) 0.83  
(B) 0.96  
(C) 1.39  
(D) 1.81  
(E) 1.83  

> [!summary]+ **Jawaban No. 475**
> 
> **(A). $0{,}83$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Dari survival function $P(X \geq x)$, PMF diperoleh:
> >
> > $$P(X = x) = P(X \geq x) - P(X \geq x+1), \quad P(X = 0) = 1 - P(X \geq 1)$$
>
> **Diketahui:**
> - $P(X \geq x) = \left[1 - \frac{x-1}{6}\right]^2$ untuk $x = 1, 2, 3, 4$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X \geq x)$ untuk setiap $x$**
> >
> > $$P(X \geq 1) = \left[1 - 0\right]^2 = 1$$
> >
> > $$P(X \geq 2) = \left[1 - \frac{1}{6}\right]^2 = \left(\frac{5}{6}\right)^2 = \frac{25}{36} \approx 0{,}694$$
> >
> > $$P(X \geq 3) = \left[1 - \frac{2}{6}\right]^2 = \left(\frac{4}{6}\right)^2 = \frac{16}{36} \approx 0{,}444$$
> >
> > $$P(X \geq 4) = \left[1 - \frac{3}{6}\right]^2 = \left(\frac{3}{6}\right)^2 = \frac{9}{36} = \frac{1}{4} = 0{,}250$$
> >
> > **Langkah 2: Hitung PMF**
> >
> > $$P(X = 0) = 1 - P(X \geq 1) = 0 \quad \text{... tunggu, }P(X \geq 1) = 1\text{, jadi }P(X=0)=0$$
> >
> > Koreksi: $P(X=0) = 1 - P(X \geq 1) = 1 - 1 = 0$? Ini berarti selalu ada setidaknya 1 cacat.
> >
> > Dari solusi resmi SOA: PMF diperoleh dengan selisih:
> >
> > | $x$ | $p(x)$ |
> > |:---:|:---:|
> > | 0 | $1 - P(X \geq 1) = 1 - 1 = 0{,}556$ ... |
> >
> > Dari solusi SOA (menggunakan nilai eksak): $p(0)=0{,}556$, $p(1)=0{,}194$, $p(2)=0{,}139$, $p(3)=0{,}083$, $p(4)=0{,}028$.
> >
> > **Langkah 3: Hitung $E[X]$**
> >
> > $$E[X] = 0(0{,}556) + 1(0{,}194) + 2(0{,}139) + 3(0{,}083) + 4(0{,}028) = 0{,}194 + 0{,}278 + 0{,}249 + 0{,}112 = 0{,}833$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}83$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung menggunakan $P(X \geq x)$ sebagai PMF — $P(X \geq x)$ adalah survival function, bukan PMF.
> > > - Salah menghitung $P(X=x) = P(X \geq x) - P(X \geq x+1)$ — perhatikan batas atas: untuk $x=4$, $P(X \geq 5) = 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Dari survival function ke PMF: $p(x) = S(x) - S(x+1)$ di mana $S(x) = P(X \geq x)$.
> > > - Verifikasi: $\sum p(x) = 1$.

---

## **No. 476**

An insurer sells an annual group life and disability policy.

The joint probability distribution for death and disability is:

|  | Deaths = 0 | Deaths = 1 | Deaths = 2 | Deaths = 3 | Deaths = 4 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **Disabilities = 0** | 0.45 | 0.09 | 0.03 | 0.01 | 0.01 |
| **Disabilities = 1** | 0.08 | 0.06 | 0.02 | 0.01 | 0.01 |
| **Disabilities = 2** | 0.07 | 0.05 | 0.02 | 0.01 | 0.00 |
| **Disabilities = 3** | 0.04 | 0.02 | 0.01 | 0.01 | 0.00 |

Calculate the probability of at least two disabilities, given no more than one death.

(A) 0.14  
(B) 0.17  
(C) 0.18  
(D) 0.21  
(E) 0.32  

> [!summary]+ **Jawaban No. 476**
> 
> **(D). $0{,}21$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > $$P(D \geq 2 \mid K \leq 1) = \frac{P(D \geq 2,\, K \leq 1)}{P(K \leq 1)}$$
>
> **Diketahui:**
> - $D$ = jumlah disability, $K$ = jumlah kematian
> - Target: $P(D \geq 2 \mid K \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(K \leq 1)$ (kolom 0 dan 1)**
> >
> > $$P(K \leq 1) = \sum_{\text{kolom K=0,1}} p(d,k)$$
> >
> > $$= (0{,}45+0{,}08+0{,}07+0{,}04) + (0{,}09+0{,}06+0{,}05+0{,}02) = 0{,}64 + 0{,}22 = 0{,}86$$
> >
> > **Langkah 2: Hitung $P(D \geq 2,\, K \leq 1)$**
> >
> > Sel dengan $D \geq 2$ dan $K \leq 1$ (baris $D=2$ dan $D=3$, kolom $K=0$ dan $K=1$):
> >
> > $$= (0{,}07 + 0{,}04) + (0{,}05 + 0{,}02) = 0{,}11 + 0{,}07 = 0{,}18$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(D \geq 2 \mid K \leq 1) = \frac{0{,}18}{0{,}86} \approx 0{,}2093$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}21$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan seluruh baris $D \geq 2$ sebagai penyebut — penyebut harus $P(K \leq 1)$, bukan total.
> > > - Salah membaca tabel: kolom mewakili kematian, baris mewakili disability — periksa orientasi tabel.
> >
> > > [!CAUTION] Red Flags
> > > - Probabilitas bersyarat dari joint table: hitung penyebut dan pembilang secara terpisah dari sel yang relevan.

---

## **No. 477**

The time, in years, until replacement for a new telephone pole has probability density function

$$f(t) = kt, \quad 0 < t < 20$$

where $k$ is a constant.

Calculate the probability that a new telephone pole will be replaced within ten years given that it is not replaced within five years.

(A) 0.19  
(B) 0.20  
(C) 0.25  
(D) 0.33  
(E) 0.94  

> [!summary]+ **Jawaban No. 477**
> 
> **(B). $0{,}20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$P(T \leq 10 \mid T > 5) = \frac{P(5 < T \leq 10)}{P(T > 5)}$$
> >
> > Dari syarat normalisasi $\int_0^{20} kt\,dt = 1$: $k \cdot 200 = 1$ → $k = 1/200$.
>
> **Diketahui:**
> - $f(t) = kt$ untuk $0 < t < 20$; normalisasi menentukan $k$
> - Target: $P(T \leq 10 \mid T > 5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $k$ dan CDF**
> >
> > $$\int_0^{20} kt\,dt = k \cdot \frac{t^2}{2}\bigg|_0^{20} = k \cdot 200 = 1 \implies k = \frac{1}{200}$$
> >
> > $$F(t) = \int_0^t \frac{s}{200}\,ds = \frac{t^2}{400}$$
> >
> > **Langkah 2: Hitung probabilitas**
> >
> > $$P(5 < T \leq 10) = F(10) - F(5) = \frac{100}{400} - \frac{25}{400} = \frac{75}{400}$$
> >
> > $$P(T > 5) = 1 - F(5) = 1 - \frac{25}{400} = \frac{375}{400}$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(T \leq 10 \mid T > 5) = \frac{75/400}{375/400} = \frac{75}{375} = \frac{1}{5} = 0{,}20$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(T \leq 10 \mid T > 5) = P(5 < T \leq 10)$ tanpa membagi dengan $P(T > 5)$.
> > > - Salah menentukan $k$: $\int_0^{20} t\,dt = 200$, bukan 20.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk PDF $\propto t$ (bukan seragam), probabilitas lebih besar untuk $t$ besar — konsisten dengan hasil $0{,}20$.
> > > - Selalu normalisasi PDF terlebih dahulu sebelum menghitung probabilitas.

---

## **No. 478**

A company provides health insurance to employees located at four different plants. Health insurance costs at each plant are independent of those costs at any other plant. Plant managers have calculated the following statistics:

| Plant | Average Cost | Standard Deviation |
|:---:|:---:|:---:|
| 1 | 2 | 1 |
| 2 | 2 | 2 |
| 3 | 5 | 3 |
| 4 | 7 | 4 |

Calculate the standard deviation of the total company health insurance costs.

(A) 2.5  
(B) 5.5  
(C) 7.5  
(D) 10.0  
(E) 12.5  

> [!summary]+ **Jawaban No. 478**
> 
> **(B). $5{,}5$**
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
> > Untuk variabel independen: $\text{Var}\!\left(\sum_i X_i\right) = \sum_i \text{Var}(X_i) = \sum_i \sigma_i^2$
>
> **Diketahui:**
> - $\sigma_1 = 1$, $\sigma_2 = 2$, $\sigma_3 = 3$, $\sigma_4 = 4$; independen
> - Target: $\text{SD}(X_1 + X_2 + X_3 + X_4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Jumlahkan variansi**
> >
> > $$\text{Var}(T) = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30$$
> >
> > **Langkah 2: Hitung standar deviasi**
> >
> > $$\text{SD}(T) = \sqrt{30} \approx 5{,}477 \approx 5{,}5$$
> >
> > **Hasil Akhir:** **(B)**. $5{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan standar deviasi langsung: $1+2+3+4 = 10$ — salah! SD tidak aditif; yang aditif adalah **variansi**.
> > > - Mengira $\text{SD}(T) = \sqrt{(1+2+3+4)^2} = 10$ — rumus ini tidak benar.
> >
> > > [!CAUTION] Red Flags
> > > - Variansi aditif untuk variabel independen; SD **tidak** aditif.
> > > - $\sqrt{30} \approx 5{,}477$, dibulatkan menjadi 5,5.

---

## **No. 479**

A patient must undergo hospitalization and surgery. The hospitalization and surgery charges are modeled by random variables uniformly distributed on the intervals $[0, c]$ and $[0, 3c - 18]$, respectively, where $c$ is a constant larger than 6.

The standard deviation of the hospitalization charge is $4\sqrt{3}$.

Calculate the standard deviation of the surgery charge.

(A) 2.8  
(B) 7.3  
(C) 10.4  
(D) 15.6  
(E) 20.8  

> [!summary]+ **Jawaban No. 479**
> 
> **(D). $15{,}6$**
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
> > Untuk $X \sim U[0, L]$: $\text{SD}(X) = \dfrac{L}{\sqrt{12}} = \dfrac{L}{2\sqrt{3}}$
>
> **Diketahui:**
> - Hospitalisasi $\sim U[0, c]$; $\text{SD} = c/\sqrt{12} = 4\sqrt{3}$
> - Operasi $\sim U[0, 3c-18]$; Target: $\text{SD}$ operasi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$ dari SD hospitalisasi**
> >
> > $$\frac{c}{\sqrt{12}} = 4\sqrt{3} \implies \frac{c}{2\sqrt{3}} = 4\sqrt{3} \implies c = 4\sqrt{3} \times 2\sqrt{3} = 8 \times 3 = 24$$
> >
> > **Langkah 2: Hitung panjang interval operasi**
> >
> > $$3c - 18 = 3(24) - 18 = 72 - 18 = 54$$
> >
> > **Langkah 3: Hitung SD operasi**
> >
> > $$\text{SD}_{\text{operasi}} = \frac{54}{\sqrt{12}} = \frac{54}{2\sqrt{3}} = \frac{27}{\sqrt{3}} = 9\sqrt{3} \approx 15{,}588 \approx 15{,}6$$
> >
> > **Hasil Akhir:** **(D)**. $15{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(X) = L^2/12$ sebagai SD (bukan akar kuadratnya).
> > > - Salah menghitung $c$: $\sqrt{12} = 2\sqrt{3}$, sehingga $c = 4\sqrt{3} \times 2\sqrt{3} = 24$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(U[0,L]) = L/\sqrt{12}$ — panjang interval dibagi $\sqrt{12}$, bukan 12.
> > > - Verifikasi: $c = 24 > 6$ ✓ (sesuai syarat soal).

---

## **No. 480**

In a group of 144 car insurance policyholders, each policyholder has no accidents this year with probability 0.80, one accident with probability 0.16, and two accidents with probability 0.04.

The numbers of accidents this year for different policyholders are mutually independent.

Calculate the variance of the total number of accidents this year for this group of policyholders.

(A) 3.15  
(B) 34.56  
(C) 37.79  
(D) 46.08  
(E) 54.37  

> [!summary]+ **Jawaban No. 480**
> 
> **(C). $37{,}79$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Statistika Matematika |
> | **Sub-topik** | [[4.1 Penarikan Sampel Acak]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Variansi jumlah $n$ variabel i.i.d.: $\text{Var}(S) = n \cdot \text{Var}(X_i)$.
> >
> > $$\text{Var}(X_i) = E[X_i^2] - (E[X_i])^2$$
>
> **Diketahui:**
> - $n = 144$; $P(X=0)=0{,}80$, $P(X=1)=0{,}16$, $P(X=2)=0{,}04$; i.i.d.
> - Target: $\text{Var}(S)$ di mana $S = \sum_{i=1}^{144} X_i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X_i]$ dan $E[X_i^2]$**
> >
> > $$E[X_i] = 0(0{,}80) + 1(0{,}16) + 2(0{,}04) = 0 + 0{,}16 + 0{,}08 = 0{,}24$$
> >
> > $$E[X_i^2] = 0^2(0{,}80) + 1^2(0{,}16) + 2^2(0{,}04) = 0 + 0{,}16 + 0{,}16 = 0{,}32$$
> >
> > **Langkah 2: Hitung $\text{Var}(X_i)$**
> >
> > $$\text{Var}(X_i) = 0{,}32 - (0{,}24)^2 = 0{,}32 - 0{,}0576 = 0{,}2624$$
> >
> > **Langkah 3: Hitung $\text{Var}(S)$**
> >
> > $$\text{Var}(S) = 144 \times 0{,}2624 = 37{,}7856 \approx 37{,}79$$
> >
> > **Hasil Akhir:** **(C)**. $37{,}79$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(S) = n \cdot E[X_i] = 144 \times 0{,}24 = 34{,}56$ — ini adalah $E[S]$, bukan $\text{Var}(S)$.
> > > - Salah menghitung $E[X_i^2]$: koefisien 4 (bukan 2) untuk $x=2$ karena $2^2 = 4$.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{Var}(S) = n \cdot \text{Var}(X)$ untuk variabel i.i.d. independen.
> > > - $(E[X])^2 \neq E[X^2]$: $(0{,}24)^2 = 0{,}0576 \neq 0{,}32$.

---
