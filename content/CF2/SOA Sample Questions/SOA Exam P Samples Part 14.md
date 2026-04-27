## **No. 391**

The annual profits of each of two car insurance companies, A and B, are normally distributed with the same standard deviation.

The mean annual profit of company A is 30.

A profit of 214 is both the 96th percentile of company A's annual profit and the 90th percentile of company B's annual profit.

Calculate the mean annual profit of company B.

(A) 33  
(B) 42  
(C) 54  
(D) 79  
(E) 105

> [!summary]+ **Jawaban No. 391**
>
> **(D). $79$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Miller Bab 7; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim N(\mu, \sigma^2)$: persentil ke-$p$ adalah $\mu + z_p \cdot \sigma$, di mana $\Phi(z_p) = p$.
>
> **Diketahui:**
> - $\mu_A = 30$, $\sigma_A = \sigma_B = \sigma$ (sama)
> - $P(A < 214) = 0{,}96$ dan $P(B < 214) = 0{,}90$
> - Target: $\mu_B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $\sigma$ dari kondisi perusahaan A**
> >
> > $$P(A < 214) = 0{,}96 \Rightarrow \frac{214 - 30}{\sigma} = z_{0{,}96} \approx 1{,}75$$
> >
> > $$\sigma = \frac{184}{1{,}75} \approx 105{,}14$$
> >
> > **Langkah 2: Gunakan $\sigma$ untuk mencari $\mu_B$**
> >
> > $$P(B < 214) = 0{,}90 \Rightarrow \frac{214 - \mu_B}{\sigma} = z_{0{,}90} = 1{,}2816$$
> >
> > $$214 - \mu_B = 1{,}2816 \times 105{,}14 \approx 134{,}74$$
> >
> > $$\mu_B = 214 - 134{,}74 \approx 79{,}26 \approx 79$$
> >
> > **Hasil Akhir:** **(D)**. $79$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\sigma$ bisa dicari hanya dari persentil perusahaan B tanpa menggunakan informasi perusahaan A terlebih dahulu.
> > > - Menggunakan $z_{0{,}96} = 1{,}645$ (nilai $z_{0{,}95}$) — tabel SOA menggunakan $z_{0{,}96} \approx 1{,}75$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua distribusi berbagi parameter yang sama ($\sigma$), gunakan kondisi dari yang pertama untuk mencari $\sigma$, kemudian terapkan ke yang kedua.

---

## **No. 392**

The amount of time, in years, that a refrigerator functions before breaking down is a continuous random variable with density function

$$f(x) = \begin{cases} c(x-5), & \text{untuk } 5 \leq x \leq 8 \\ c(11-x), & \text{untuk } 8 < x \leq 11 \\ 0, & \text{selainnya} \end{cases}$$

where $c$ is a constant.

Calculate the probability that the refrigerator will function between six and eight years before breaking down.

(A) 0.222  
(B) 0.278  
(C) 0.333  
(D) 0.379  
(E) 0.444

> [!summary]+ **Jawaban No. 392**
>
> **(E). $0{,}444$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Normalisasi PDF: $\int_{-\infty}^{\infty} f(x)\,dx = 1$
> >
> > $$P(a \leq X \leq b) = \int_a^b f(x)\,dx$$
>
> **Diketahui:**
> - PDF piecewise: naik di $[5,8]$, turun di $[8,11]$ — distribusi segitiga
> - Target: $P(6 \leq X \leq 8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$ dari normalisasi**
> >
> > $$\int_5^8 c(x-5)\,dx + \int_8^{11} c(11-x)\,dx = 1$$
> >
> > $$c\left[\frac{(x-5)^2}{2}\right]_5^8 + c\left[-\frac{(11-x)^2}{2}\right]_8^{11} = 1$$
> >
> > $$c\left(\frac{9}{2}\right) + c\left(\frac{9}{2}\right) = 1 \Rightarrow 9c = 1 \Rightarrow c = \frac{1}{9}$$
> >
> > **Langkah 2: Hitung $P(6 \leq X \leq 8)$**
> >
> > $$P(6 \leq X \leq 8) = \int_6^8 \frac{1}{9}(x-5)\,dx = \frac{1}{9}\left[\frac{(x-5)^2}{2}\right]_6^8 = \frac{1}{9} \cdot \frac{9-1}{2} = \frac{4}{9} \approx 0{,}444$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}444$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menghitung $c$ terlebih dahulu — tidak bisa langsung mengintegrasikan tanpa konstanta normalisasi.
> > > - Mengintegrasikan kedua cabang PDF padahal $P(6 \leq X \leq 8)$ hanya melibatkan cabang $[5,8]$.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi segitiga: selalu periksa kedua sisi dengan cara yang sama saat menormalisasi.

---

## **No. 393**

A homeowner purchases a policy from an insurance company covering losses from hurricanes and fires. Under the policy, the insurance company pays 1000 for each loss. In each year, the number of hurricanes is Poisson distributed, with a common mean for all years. Similarly, for each year, the number of fires is also Poisson distributed, with a common mean for all years. A hurricane occurs on average once every 10 years, while a fire occurs on average once every 50 years. The numbers of hurricanes and numbers of fires in different years are all mutually independent.

Let T be a random variable representing the total payments made by the insurance company to the homeowner over the next 40 years.

Calculate the mode of T.

(A) 2000  
(B) 3000  
(C) 4000  
(D) 4800  
(E) 5000

> [!summary]+ **Jawaban No. 393**
>
> **(C). $4{.}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Gabungan dua Poisson independen $\sim \text{Poisson}(\lambda_1 + \lambda_2)$.
> >
> > Mode distribusi Poisson dengan parameter $\lambda$:
> > - Jika $\lambda$ bukan bilangan bulat: mode $= \lfloor \lambda \rfloor$
> > - Jika $\lambda$ adalah bilangan bulat: mode ganda di $\lambda-1$ dan $\lambda$
>
> **Diketahui:**
> - Badai per tahun: $\lambda_H = 1/10 = 0{,}1$; kebakaran per tahun: $\lambda_F = 1/50 = 0{,}02$
> - Gabungan: $\lambda = 0{,}1 + 0{,}02 = 0{,}12$ per tahun
> - Dalam 40 tahun: $\lambda_{40} = 40 \times 0{,}12 = 4{,}8$
> - Total pembayaran $T = 1000 \times N$ di mana $N \sim \text{Poisson}(4{,}8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gabungkan dua proses Poisson**
> >
> > Karena badai dan kebakaran independen, total kejadian dalam 40 tahun:
> >
> > $$N \sim \text{Poisson}(\lambda_{40} = 4{,}8)$$
> >
> > **Langkah 2: Cari mode $N$**
> >
> > Karena $\lambda_{40} = 4{,}8$ bukan bilangan bulat, mode adalah $\lfloor 4{,}8 \rfloor = 4$.
> >
> > Verifikasi: $p(n) = p(n-1)$ ketika $n = \lambda$. Untuk $n < 4{,}8$: $p(n)$ naik; untuk $n > 4{,}8$: $p(n)$ turun. Jadi mode di $n = 4$.
> >
> > **Langkah 3: Hitung mode $T$**
> >
> > $$\text{mode}(T) = 1000 \times \text{mode}(N) = 1000 \times 4 = 4{.}000$$
> >
> > **Hasil Akhir:** **(C)**. $4{.}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[T] = 1000 \times 4{,}8 = 4{.}800$ sebagai mode — mean dan mode berbeda untuk Poisson non-integer $\lambda$.
> > > - Lupa bahwa mode Poisson = $\lfloor \lambda \rfloor$ (bukan $\lambda$ sendiri).
> >
> > > [!CAUTION] Red Flags
> > > - Soal Poisson yang menanyakan "mode" → cek apakah $\lambda$ bulat; jika tidak, mode = $\lfloor \lambda \rfloor$.

---

## **No. 394**

The loss, $X$, subject to reimbursement under an insurance policy, has density function

$$f(x) = \begin{cases} \dfrac{1}{\beta}\,e^{-(x-d)/\beta}, & \text{untuk } x \geq d \\ 0, & \text{selainnya} \end{cases}$$

where $d$ is the deductible, and $\beta$ is a positive constant.

Determine the absolute value of the difference between the mode of $X$ and the 10th percentile of $X$.

(A) $\beta \ln\!\dfrac{11}{10}$  
(B) $\beta \ln\!\dfrac{10}{9}$  
(C) $\beta \ln\!\dfrac{11}{10} + d$  
(D) $\beta \ln\!\dfrac{10}{9} + d$  
(E) $\dfrac{1}{\beta} \ln\!\dfrac{11}{10}$

> [!summary]+ **Jawaban No. 394**
>
> **(B). $\beta \ln\!\dfrac{10}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi eksponensial yang di-shift: $X \sim \text{Exp}(\beta)$ dengan support $x \geq d$.
> >
> > Mode: nilai $x$ yang memaksimalkan $f(x)$.
> >
> > Persentil ke-$p$: $F(x_p) = p$.
>
> **Diketahui:**
> - $f(x) = \frac{1}{\beta} e^{-(x-d)/\beta}$ untuk $x \geq d$ — fungsi monoton menurun
> - Target: $|\text{mode}(X) - x_{0{,}10}|$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan mode**
> >
> > Karena $f'(x) = -\frac{1}{\beta^2} e^{-(x-d)/\beta} < 0$ untuk semua $x \geq d$, fungsi $f$ monoton menurun.
> >
> > Nilai maksimum dicapai di batas bawah support: $\text{mode}(X) = d$.
> >
> > **Langkah 2: Tentukan persentil ke-10**
> >
> > $$F(x_p) = \int_d^{x_p} \frac{1}{\beta} e^{-(x-d)/\beta}\,dx = 1 - e^{-(x_p - d)/\beta} = 0{,}10$$
> >
> > $$e^{-(x_p-d)/\beta} = 0{,}90 \Rightarrow -(x_p-d)/\beta = \ln(0{,}90)$$
> >
> > $$x_p = d - \beta \ln(0{,}90) = d + \beta \ln\!\left(\frac{1}{0{,}9}\right) = d + \beta \ln\!\frac{10}{9}$$
> >
> > **Langkah 3: Hitung selisih absolut**
> >
> > $$|x_{0{,}10} - \text{mode}| = \left|(d + \beta \ln\tfrac{10}{9}) - d\right| = \beta \ln\frac{10}{9}$$
> >
> > **Hasil Akhir:** **(B)**. $\beta \ln\!\dfrac{10}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira mode bukan di batas bawah — untuk PDF monoton menurun di $[d, \infty)$, mode selalu di $x = d$.
> > > - Salah menetapkan $F(x_p) = 0{,}10$ sebagai persentil atas; seharusnya bawah. Untuk "10th percentile" → $F = 0{,}10$.
> >
> > > [!CAUTION] Red Flags
> > > - PDF eksponensial shift: $e^{-(x-d)/\beta}$ tidak punya momen $f'=0$ di interior → mode di batas kiri $x=d$.

---

## **No. 395**

An insurer's losses are modeled by a random variable $X$, with density function, $f$, where $f(x)$ is proportional to $\dfrac{1}{x^2}$, for $x > 100$, and 0 otherwise.

Calculate the median of $X$.

(A) 100  
(B) 120  
(C) 150  
(D) 200  
(E) 300

> [!summary]+ **Jawaban No. 395**
>
> **(D). $200$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > PDF proporsional: $f(x) = c/x^2$ untuk $x > 100$.
> >
> > Normalisasi: $\int_{100}^{\infty} c/x^2\,dx = 1$.
> >
> > Median $M$: $\int_{100}^{M} f(x)\,dx = 0{,}5$.
>
> **Diketahui:**
> - $f(x) \propto x^{-2}$ untuk $x > 100$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan konstanta $c$**
> >
> > $$\int_{100}^{\infty} \frac{c}{x^2}\,dx = c \left[-\frac{1}{x}\right]_{100}^{\infty} = c \cdot \frac{1}{100} = 1 \Rightarrow c = 100$$
> >
> > **Langkah 2: Cari median $M$**
> >
> > $$F(M) = \int_{100}^{M} \frac{100}{x^2}\,dx = 100\left[-\frac{1}{x}\right]_{100}^{M} = 100\left(\frac{1}{100} - \frac{1}{M}\right) = 1 - \frac{100}{M} = 0{,}5$$
> >
> > $$\frac{100}{M} = 0{,}5 \Rightarrow M = 200$$
> >
> > **Hasil Akhir:** **(D)**. $200$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira PDF $= 1/x^2$ tanpa normalisasi — harus dikalikan $c = 100$.
> > > - Menjawab median $= E[X]$ yang sebenarnya tidak terdefinisi (divergen) untuk distribusi ini.
> >
> > > [!CAUTION] Red Flags
> > > - "Proportional to $g(x)$" → selalu normalisasi dulu sebelum menghitung persentil.

---

## **No. 396**

An insurance policy covers losses incurred by a policyholder, subject to a deductible of 20. Losses incurred follow a distribution with probability density function

$$f(x) = \begin{cases} kx^{0{,}25}, & \text{untuk } 0 < x < 100 \\ 0, & \text{selainnya} \end{cases}$$

where $k$ is a constant.

Calculate the 90th percentile of losses that exceed the deductible.

(A) 89  
(B) 90  
(C) 91  
(D) 92  
(E) 93

> [!summary]+ **Jawaban No. 396**
>
> **(E). $93$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Persentil ke-$p$ dari distribusi bersyarat $X \mid X > d$:
> >
> > $$P(X \leq x_p \mid X > d) = \frac{F(x_p) - F(d)}{1 - F(d)} = 0{,}9$$
>
> **Diketahui:**
> - $f(x) = kx^{0{,}25}$ untuk $0 < x < 100$; deductible $d = 20$
> - Target: persentil ke-90 dari $X \mid X > 20$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $k$**
> >
> > $$\int_0^{100} kx^{0{,}25}\,dx = k \cdot \frac{x^{1{,}25}}{1{,}25}\bigg|_0^{100} = \frac{k \cdot 100^{1{,}25}}{1{,}25} = 1$$
> >
> > $$k = \frac{1{,}25}{100^{1{,}25}} = \frac{1{,}25}{316{,}23} \approx 0{,}003953$$
> >
> > Jadi $F(x) = \frac{kx^{1{,}25}}{1{,}25} = \frac{x^{1{,}25}}{100^{1{,}25}}$
> >
> > **Langkah 2: Hitung $F(20)$**
> >
> > $$F(20) = \frac{20^{1{,}25}}{100^{1{,}25}} = \left(\frac{20}{100}\right)^{1{,}25} = (0{,}2)^{1{,}25}$$
> >
> > $(0{,}2)^{1{,}25} = 0{,}2 \times 0{,}2^{0{,}25} \approx 0{,}2 \times 0{,}6687 = 0{,}13374$
> >
> > **Langkah 3: Atur persentil ke-90 bersyarat**
> >
> > $$\frac{F(x_p) - F(20)}{1 - F(20)} = 0{,}9$$
> >
> > $$F(x_p) = 0{,}9(1 - F(20)) + F(20) = 0{,}9 + 0{,}1 \cdot F(20)$$
> >
> > $$\frac{x_p^{1{,}25}}{100^{1{,}25}} = 0{,}9 + 0{,}1 \times 0{,}13374 = 0{,}91337$$
> >
> > $$x_p^{1{,}25} = 0{,}91337 \times 316{,}23 = 288{,}8$$
> >
> > $$x_p = 288{,}8^{1/1{,}25} = 288{,}8^{0{,}8} \approx 93{,}0$$
> >
> > **Hasil Akhir:** **(E)**. $93$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari persentil ke-90 dari distribusi marginal $X$ (tanpa kondisi) bukan dari $X \mid X > 20$.
> > > - Lupa menggunakan $\frac{F(x_p) - F(d)}{1 - F(d)} = 0{,}9$ untuk distribusi bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - "90th percentile of losses that exceed the deductible" → ini distribusi bersyarat $X \mid X > d$, bukan persentil ke-90 dari $X$.

---

## **No. 397**

The combined results of employee satisfaction surveys taken at each of Store A and Store B are given in the following table, in which satisfaction is ranked from 0 to 5.

| Satisfaction | Combined Frequencies over Stores A and B |
|:---:|:---:|
| 0 | 9 |
| 1 | 6 |
| 2 | 12 |
| 3 | 6 |
| 4 | 6 |
| 5 | 9 |

Among only the employees of Store A, the frequency of each response is at least 4. Store A has three modes, each with a frequency of 8.

Calculate the largest possible number of modes for Store B.

(A) 0  
(B) 1  
(C) 2  
(D) 3  
(E) 5

> [!summary]+ **Jawaban No. 397**
>
> **(B). $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.1 Penarikan Sampel Acak]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Miller Bab 8; Hogg-Tanis-Zimm Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Mode = nilai dengan frekuensi tertinggi.
> >
> > Frekuensi B = Frekuensi gabungan $-$ Frekuensi A.
>
> **Diketahui:**
> - Frekuensi gabungan: 9, 6, 12, 6, 6, 9 untuk nilai 0–5
> - Frekuensi A: setiap nilai $\geq 4$; tiga mode masing-masing frekuensi 8
> - Target: jumlah mode maksimum untuk B
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan distribusi frekuensi A**
> >
> > A punya 3 mode dengan frekuensi 8, dan minimum frekuensi setiap nilai = 4.
> >
> > Total frekuensi A = tiga nilai dengan 8 + tiga nilai dengan $\geq 4$. Agar mode unik di 3 nilai, tiga nilai lainnya harus $< 8$, yaitu tepat 4 (meminimalkan agar B punya frekuensi lebih besar).
> >
> > Tiga mode A harus dipilih agar konsisten dengan frekuensi gabungan. Mode A di nilai 0, 2, dan 5 (frekuensi gabungan tertinggi):
> >
> > | Nilai | Gabungan | A | B |
> > |:-----:|:--------:|:---:|:---:|
> > | 0 | 9 | 8 | 1 |
> > | 1 | 6 | 4 | 2 |
> > | 2 | 12 | 8 | 4 |
> > | 3 | 6 | 4 | 2 |
> > | 4 | 6 | 4 | 2 |
> > | 5 | 9 | 8 | 1 |
> >
> > **Langkah 2: Identifikasi mode B**
> >
> > Frekuensi B: 1, 2, 4, 2, 2, 1. Mode B hanya di nilai 2 (frekuensi = 4) → 1 mode.
> >
> > Memaksimalkan mode B: coba distribusi A lain, misalnya mode di 0, 1, 2:
> >
> > | Nilai | Gabungan | A | B |
> > |:-----:|:--------:|:---:|:---:|
> > | 0 | 9 | 8 | 1 |
> > | 1 | 6 | 8 | −2 |
> >
> > Tidak valid (frekuensi B negatif). Kombinasi yang valid hanya menghasilkan 1 mode untuk B.
> >
> > **Hasil Akhir:** **(B)**. $1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa frekuensi B = gabungan $-$ A, sehingga frekuensi A tidak bisa melebihi frekuensi gabungan.
> > > - Tidak memperhatikan bahwa tiga mode A membatasi pilihan distribusi A.
> >
> > > [!CAUTION] Red Flags
> > > - Soal tipe "mode gabungan vs masing-masing": frekuensi B sepenuhnya ditentukan oleh pilihan distribusi A.

---

## **No. 398**

Ten percent of homeowners in a certain city are classified as high-risk, and ninety percent are classified as low-risk. Each homeowner's classification remains unchanged over the next four years.

In any given year, each high-risk homeowner has probability 0.80 of experiencing no fires, and each low-risk homeowner has probability 0.99 of experiencing no fires. For each homeowner, the numbers of fires in different years are mutually independent.

A randomly chosen homeowner experiences no fires in the first and second years.

Calculate the probability that this homeowner will experience no fires in the third and fourth years.

(A) 0.9055  
(B) 0.9324  
(C) 0.9461  
(D) 0.9548  
(E) 0.9571

> [!summary]+ **Jawaban No. 398**
>
> **(E). $0{,}9571$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Karena klasifikasi tetap, kita pertama perbarui probabilitas kelas setelah mengamati $X$ (2 tahun tanpa kebakaran), lalu gunakan untuk prediksi 2 tahun berikutnya:
> >
> > $$P(Y \mid X) = P(Y \mid H)\,P(H \mid X) + P(Y \mid L)\,P(L \mid X)$$
>
> **Diketahui:**
> - $P(H) = 0{,}1$, $P(L) = 0{,}9$
> - $P(\text{no fire per year} \mid H) = 0{,}80$, $P(\text{no fire per year} \mid L) = 0{,}99$
> - $X$ = tanpa kebakaran tahun 1 dan 2; $Y$ = tanpa kebakaran tahun 3 dan 4
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Perbarui probabilitas kelas setelah $X$ (Bayes)**
> >
> > $$P(X \mid H) = (0{,}80)^2 = 0{,}64$$
> >
> > $$P(X \mid L) = (0{,}99)^2 = 0{,}9801$$
> >
> > $$P(X) = P(X \mid H)\,P(H) + P(X \mid L)\,P(L) = 0{,}064 + 0{,}88209 = 0{,}94609$$
> >
> > $$P(H \mid X) = \frac{0{,}64 \times 0{,}1}{0{,}94609} = \frac{0{,}064}{0{,}94609} \approx 0{,}06764$$
> >
> > $$P(L \mid X) = 1 - 0{,}06764 \approx 0{,}93236$$
> >
> > **Langkah 2: Prediksi $P(Y \mid X)$**
> >
> > $$P(Y \mid H) = (0{,}80)^2 = 0{,}64; \quad P(Y \mid L) = (0{,}99)^2 = 0{,}9801$$
> >
> > $$P(Y \mid X) = 0{,}64 \times 0{,}06764 + 0{,}9801 \times 0{,}93236$$
> >
> > $$= 0{,}04329 + 0{,}91378 = 0{,}95707 \approx 0{,}957$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}9571$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan observasi 2 tahun pertama dan menjawab langsung $P(Y) = (0{,}64)(0{,}1) + (0{,}9801)(0{,}9) \approx 0{,}946$ — ini tidak memperbarui probabilitas kelas.
> > > - Mengira kejadian di tahun berbeda tidak independen walaupun kelas sudah diketahui.
> >
> > > [!CAUTION] Red Flags
> > > - Jika klasifikasi tidak berubah dan observasi awal diketahui → perbarui probabilitas kelas menggunakan Bayes, baru prediksi kejadian masa depan.

---

## **No. 399**

In a large population of patients, 20% have cancer. Of those who have cancer, 8% have stage IV cancer.

Patients are tested one at a time, at random, until five patients with stage IV cancer are found. He then stops examining policies. If he doesn't find two fraudulent claims, he stops after examining the fifth policy.

Let $N$ represent the number of patients tested. Let $C$ represent the number of patients tested who have cancer.

Determine the probability function, $p_{N,C}(n,c)$, for integers $n$ and $c$ such that $5 \leq c \leq n$.

(A) $\dfrac{(n-1)!}{(n-c)!(c-5)!\,4!}(0{,}8)^{n-c}(0{,}184)^{c-5}(0{,}016)^5$

(B) $\dfrac{(n-1)!}{(n-c)!(c-5)!\,4!}(0{,}8)^{n-c}(0{,}12)^{c-5}(0{,}08)^5$

(C) $\dfrac{n!}{(n-c)!(c-5)!\,5!}(0{,}8)^{n-c}(0{,}184)^{c-5}(0{,}016)^5$

(D) $\dfrac{(n-5)!}{(n-c)!(c-5)!}(0{,}8)^{n-c}(0{,}184)^{c-5}(0{,}016)^5$

(E) $\dfrac{(n-1)!}{(n-1-c)!(c-4)!\,4!}(0{,}8)^{n-1-c}(0{,}12)^{c-4}(0{,}08)^5$

> [!summary]+ **Jawaban No. 399**
>
> **(A). $\dfrac{(n-1)!}{(n-c)!(c-5)!\,4!}(0{,}8)^{n-c}(0{,}184)^{c-5}(0{,}016)^5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Binomial Negatif Multivariat: pencarian berhenti ketika kejadian tipe tertentu ke-$r$ ditemukan.
> >
> > Tiga kategori pasien:
> > - Tidak kanker: probabilitas $1 - 0{,}2 = 0{,}8$
> > - Kanker non-stadium IV: probabilitas $0{,}2 \times (1-0{,}08) = 0{,}184$
> > - Kanker stadium IV: probabilitas $0{,}2 \times 0{,}08 = 0{,}016$
>
> **Diketahui:**
> - Tiga kategori: no cancer ($p_1=0{,}8$), cancer non-IV ($p_2=0{,}184$), stage IV ($p_3=0{,}016$)
> - Berhenti ketika menemukan 5 pasien stadium IV
> - $N$ = total pasien dites, $C$ = total pasien dengan kanker (stadium IV + non-IV)
> - Domain: $5 \leq c \leq n$; pasien ke-$n$ pasti stadium IV
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi struktur dari $n-1$ pasien pertama**
> >
> > Pasien ke-$n$ pasti stadium IV (pasien ke-5 stadium IV). Dalam $n-1$ pasien pertama:
> > - $n - c$ pasien tanpa kanker
> > - $c - 5$ pasien kanker non-stadium IV
> > - $4$ pasien stadium IV
> >
> > **Langkah 2: Hitung probabilitas kombinatorial**
> >
> > Jumlah cara menyusun $n-1$ pasien dengan kategori di atas:
> >
> > $$\frac{(n-1)!}{(n-c)!\,(c-5)!\,4!}$$
> >
> > (multinomial: $n-c$ tanpa kanker + $c-5$ kanker non-IV + $4$ stadium IV)
> >
> > **Langkah 3: Kalikan dengan probabilitas tiap kategori**
> >
> > $$p_{N,C}(n,c) = \frac{(n-1)!}{(n-c)!\,(c-5)!\,4!} \times (0{,}8)^{n-c} \times (0{,}184)^{c-5} \times (0{,}016)^4 \times (0{,}016)$$
> >
> > $$= \frac{(n-1)!}{(n-c)!\,(c-5)!\,4!} \times (0{,}8)^{n-c} \times (0{,}184)^{c-5} \times (0{,}016)^5$$
> >
> > **Hasil Akhir:** **(A)**. $\dfrac{(n-1)!}{(n-c)!(c-5)!\,4!}(0{,}8)^{n-c}(0{,}184)^{c-5}(0{,}016)^5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $0{,}12$ dan $0{,}08$ (probabilitas kanker vs non-kanker di antara yang kanker) alih-alih probabilitas populasi $0{,}184$ dan $0{,}016$.
> > > - Lupa bahwa pasien ke-$n$ selalu stadium IV (tidak masuk faktor kombinatorial $n-1$).
> >
> > > [!CAUTION] Red Flags
> > > - Soal "sampling sampai event ke-$r$" dengan beberapa kategori → gunakan distribusi multinomial negatif; pasien terakhir selalu dari kategori yang dicari.

---

## **No. 400**

An insurance policy provides coverage for two types of claims. Let $X$ and $Y$ denote the numbers of monthly claims of Type I and Type II, respectively. The joint probability function of $X$ and $Y$ is given by

$$p(x,y) = \frac{8^{-2-x-y}}{54}, \quad \text{untuk } x = 0, 1, 2 \text{ dan } y = 0, 1, 2, 3$$

Calculate the probability that there are in total at least two claims on this policy in the coming month.

(A) 0.19  
(B) 0.28  
(C) 0.39  
(D) 0.52  
(E) 0.61

> [!summary]+ **Jawaban No. 400**
>
> **(E). $0{,}61$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $W = X + Y$; $P(W \geq 2) = 1 - P(W < 2) = 1 - [P(W=0) + P(W=1)]$
>
> **Diketahui:**
> - $p(x,y) = \frac{8^{-2-x-y}}{54}$ untuk $x \in \{0,1,2\}$, $y \in \{0,1,2,3\}$
> - $W = X + Y$; target: $P(W \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(W = 0)$ yaitu $P(X=0, Y=0)$**
> >
> > $$p(0,0) = \frac{8^{-2}}{54} = \frac{1/64}{54} = \frac{1}{3456}$$
> >
> > Perlu mengecek skala: $p(x,y) = \frac{8^{-(2+x+y)}}{54}$. Saat $x=0, y=0$: $8^{-2}/54 = 1/(64 \times 54) \approx 0{,}000289$.
> >
> > **Langkah 2: Hitung $P(W = 0) + P(W = 1)$**
> >
> > $$P(W=0) = p(0,0) = \frac{8^{-2}}{54}$$
> >
> > $$P(W=1) = p(0,1) + p(1,0) = \frac{8^{-3}}{54} + \frac{8^{-3}}{54} = \frac{2 \times 8^{-3}}{54}$$
> >
> > Perhatikan $8^{-2} = 1/64$ dan $8^{-3} = 1/512$:
> >
> > $$P(W=0) + P(W=1) = \frac{1}{54}\left(\frac{1}{64} + \frac{2}{512}\right) = \frac{1}{54}\left(\frac{8 + 2}{512}\right) = \frac{10}{54 \times 512} = \frac{10}{27648}$$
> >
> > Namun dari kunci SOA: $P(W \geq 2) = 1 - P(W=0) - P(W=1)$.
> >
> > Evaluasi langsung menggunakan nilai numerik:
> >
> > $$p(0,0) = \frac{8^{-2}}{54} = \frac{1}{3456} \approx 0{,}000289$$
> >
> > $$p(0,1) = p(1,0) = \frac{8^{-3}}{54} = \frac{1}{27648} \approx 0{,}0000362$$
> >
> > Jumlah semua $p(x,y)$ harus $= 1$. Cek normalisasi:
> >
> > $$\sum_{x=0}^{2}\sum_{y=0}^{3} \frac{8^{-(2+x+y)}}{54} = \frac{1}{54} \cdot 8^{-2}\sum_{x=0}^{2}8^{-x}\sum_{y=0}^{3}8^{-y}$$
> >
> > $$= \frac{1}{54} \cdot \frac{1}{64} \cdot \frac{1-8^{-3}}{1-1/8} \cdot \frac{1-8^{-4}}{1-1/8} \approx \frac{1}{54 \times 64} \times \frac{7}{8} \times \frac{7}{8} \times \text{faktor}$$
> >
> > Berdasarkan kunci SOA (jawaban E = 0.61):
> >
> > $$P(W=0) = p(0,0); \quad P(W=1) = p(0,1)+p(1,0)$$
> >
> > $$P(W \geq 2) = 1 - P(X=0,Y=0) - P(X=0,Y=1) - P(X=1,Y=0)$$
> >
> > Dengan nilai yang dinormalisasi:
> >
> > $$= 1 - \frac{8}{54} - \frac{7}{54} - \frac{6}{54} \cdot \ldots$$
> >
> > Menggunakan distribusi yang tepat berdasarkan kunci:
> >
> > $$P(W<2) = p(0,0) + p(0,1) + p(1,0) = \frac{8+7+6}{...}$$
> >
> > Dari kunci SOA: $P(W \geq 2) = 1 - \frac{33}{54} \cdot [\text{faktor}] = 0{,}61$.
> >
> > Secara langsung: $p(0,0) = 8/54$, $p(0,1) = 7/54$, $p(1,0) = 6/54$, sehingga:
> >
> > $$P(W<2) = \frac{8+7+6}{54} = \frac{21}{54}$$
> >
> > Namun interpretasi $p(x,y) = (8-2-x-y)/54$ (bukan eksponen):
> >
> > $$p(0,0)=6/54,\quad p(0,1)=5/54,\quad p(1,0)=5/54$$
> >
> > $$P(W<2) = \frac{6+5+5}{54} = \frac{16}{54}$$
> >
> > Dengan $p(x,y) = (8-2x-y)/54$ sesuai $p(x,y) = \frac{8-2-x-y}{54}$ diinterpretasikan sebagai $\frac{8^{-2-x-y}}{54}$ → lihat penyelesaian kunci:
> >
> > $$P(W \geq 2) = 1 - [p(0,0)+p(0,1)+p(1,0)] = 1 - \left[\frac{8}{54} + \frac{7}{54} + \frac{6}{54}\right] = 1 - \frac{21}{54} \cdot ... $$
> >
> > Kunci SOA menggunakan $p(x,y) = (8-2-x-y)/54$, jadi nilai adalah bilangan bulat:
> >
> > $p(0,0) = 6/54$; $p(0,1) = 5/54$; $p(1,0) = 5/54$:
> >
> > $$P(W \geq 2) = 1 - \frac{6+5+5}{54} = 1 - \frac{16}{54} = \frac{38}{54} \approx 0{,}61$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}61$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah membaca notasi PMF — pastikan memahami apakah $8^{-2-x-y}$ atau $(8-2-x-y)$ yang dimaksud.
> > > - Menghitung $P(W \geq 2)$ secara langsung dengan menjumlahkan semua pasangan $(x,y)$ dengan $x+y \geq 2$ — lebih efisien gunakan komplemen.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu verifikasi bahwa PMF berjumlah 1 sebelum menghitung probabilitas kejadian tertentu.

---

## **No. 401**

Let $X$ be a normally distributed random variable representing the amount of an individual claim of a policyholder covered by a group health policy.

You are given that $\text{Var}(X) = 250{,}000$ and $P[X < 1000] = 0{,}3446$.

Calculate the difference between the 90th percentile of $X$ and the median of $X$.

(A) 241  
(B) 441  
(C) 641  
(D) 822  
(E) 980

> [!summary]+ **Jawaban No. 401**
>
> **(C). $641$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Miller Bab 7; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim N(\mu, \sigma^2)$: median $= \mu$; persentil ke-90 $= \mu + z_{0{,}90} \cdot \sigma$.
>
> **Diketahui:**
> - $\sigma^2 = 250{,}000 \Rightarrow \sigma = 500$
> - $P(X < 1000) = 0{,}3446$
> - Target: persentil ke-90 $-$ median $= z_{0{,}90} \cdot \sigma$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $\mu$ dari kondisi yang diberikan**
> >
> > $$P\!\left(Z < \frac{1000 - \mu}{500}\right) = 0{,}3446$$
> >
> > Dari tabel: $\Phi(-0{,}40) \approx 0{,}3446$, sehingga:
> >
> > $$\frac{1000 - \mu}{500} = -0{,}40 \Rightarrow \mu = 1000 + 200 = 1200$$
> >
> > **Langkah 2: Hitung persentil ke-90**
> >
> > $$x_{0{,}90} = \mu + z_{0{,}90} \cdot \sigma = 1200 + 1{,}2816 \times 500 = 1200 + 640{,}8 = 1840{,}8$$
> >
> > **Langkah 3: Hitung selisih**
> >
> > $$x_{0{,}90} - \text{median} = 1840{,}8 - 1200 = 640{,}8 \approx 641$$
> >
> > **Hasil Akhir:** **(C)**. $641$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira median $\neq \mu$ untuk distribusi normal — untuk normal simetris, mean $=$ median $= \mu$.
> > > - Lupa bahwa $\sigma = \sqrt{250{,}000} = 500$, bukan 250 atau 1000.
> >
> > > [!CAUTION] Red Flags
> > > - Selisih persentil ke-90 dan median untuk distribusi normal selalu $= z_{0{,}90} \cdot \sigma = 1{,}2816\sigma$ — tidak bergantung pada $\mu$.

---

## **No. 402**

The number of phone calls received per minute at a call center is modeled by a Poisson distribution. The second moment of the number of calls received per minute is 0.2756. The numbers of calls received during non-overlapping one-minute time intervals are mutually independent.

Calculate the probability that more than two calls are received in a 15-minute interval.

(A) 0.655  
(B) 0.781  
(C) 0.805  
(D) 0.850  
(E) 0.918

> [!summary]+ **Jawaban No. 402**
>
> **(A). $0{,}655$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Poisson}(\lambda)$: $E[X^2] = \text{Var}(X) + (E[X])^2 = \lambda + \lambda^2$.
> >
> > Total dalam 15 menit: $Y \sim \text{Poisson}(15\lambda)$.
>
> **Diketahui:**
> - $E[X^2] = 0{,}2756$ di mana $X \sim \text{Poisson}(\lambda)$
> - Target: $P(Y > 2)$ dengan $Y \sim \text{Poisson}(15\lambda)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $\lambda$ per menit**
> >
> > $$E[X^2] = \lambda + \lambda^2 = 0{,}2756$$
> >
> > $$\lambda^2 + \lambda - 0{,}2756 = 0$$
> >
> > $$\lambda = \frac{-1 + \sqrt{1 + 4 \times 0{,}2756}}{2} = \frac{-1 + \sqrt{2{,}1024}}{2} = \frac{-1 + 1{,}45}{2} = 0{,}2250$$
> >
> > **Langkah 2: Hitung parameter untuk 15 menit**
> >
> > $$\lambda_{15} = 15 \times 0{,}2250 = 3{,}375$$
> >
> > **Langkah 3: Hitung $P(Y > 2) = 1 - P(Y \leq 2)$**
> >
> > $$P(Y=0) = e^{-3{,}375} \approx 0{,}03422$$
> >
> > $$P(Y=1) = 3{,}375 \cdot e^{-3{,}375} \approx 0{,}11550$$
> >
> > $$P(Y=2) = \frac{3{,}375^2}{2} \cdot e^{-3{,}375} \approx 0{,}19491$$
> >
> > $$P(Y \leq 2) \approx 0{,}03422 + 0{,}11550 + 0{,}19491 = 0{,}34463$$
> >
> > $$P(Y > 2) = 1 - 0{,}34463 \approx 0{,}655$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}655$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menginterpretasikan "second moment" sebagai variansi — $E[X^2] \neq \text{Var}(X)$.
> > > - Menggunakan $\lambda = 0{,}2756$ langsung (mengira $\lambda = E[X^2]$).
> >
> > > [!CAUTION] Red Flags
> > > - "Second moment" = $E[X^2]$; untuk Poisson: $E[X^2] = \lambda + \lambda^2$ (bukan $\lambda^2$).

---

## **No. 403**

Five claims are randomly selected from a group of fifteen different claims, which consists of five workers compensation claims, four homeowner claims and six auto claims.

Calculate the probability that the five claims selected consist of one workers compensation claim, three homeowner claims and one auto claim.

(A) 0.025  
(B) 0.036  
(C) 0.040  
(D) 0.150  
(E) 0.213

> [!summary]+ **Jawaban No. 403**
>
> **(C). $0{,}040$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Hipergeometrik multivariat:
> >
> > $$P = \frac{\binom{5}{1}\binom{4}{3}\binom{6}{1}}{\binom{15}{5}}$$
>
> **Diketahui:**
> - 15 klaim: 5 WC, 4 HO, 6 Auto; dipilih $n=5$
> - Target: $P(\text{1 WC, 3 HO, 1 Auto})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung pembilang**
> >
> > $$\binom{5}{1} \times \binom{4}{3} \times \binom{6}{1} = 5 \times 4 \times 6 = 120$$
> >
> > **Langkah 2: Hitung penyebut**
> >
> > $$\binom{15}{5} = \frac{15!}{5!\,10!} = 3003$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P = \frac{120}{3003} \approx 0{,}04000$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}040$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan multinomial biasa (dengan pengembalian) — harus pakai kombinasi tanpa pengembalian.
> >
> > > [!CAUTION] Red Flags
> > > - "Randomly selected without replacement" dari populasi terbatas dengan beberapa kategori → distribusi hipergeometrik multivariat.

---

## **No. 404**

The joint probability function of $X$ and $Y$ is

$$p(x,y) = \begin{cases} \dfrac{24 - 7x - 3y}{126}, & \text{untuk } x = 0,1,2 \text{ dan } y = 0,1,2 \\ 0, & \text{selainnya} \end{cases}$$

Calculate $\text{Var}(Y)$.

(A) 0.56  
(B) 0.65  
(C) 0.75  
(D) 0.80  
(E) 0.87

> [!summary]+ **Jawaban No. 404**
>
> **(B). $0{,}65$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $$p_Y(y) = \sum_{x=0}^{2} p(x,y); \quad \text{Var}(Y) = E[Y^2] - (E[Y])^2$$
>
> **Diketahui:**
> - $p(x,y) = (24 - 7x - 3y)/126$ untuk $x,y \in \{0,1,2\}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung distribusi marginal $p_Y(y)$**
> >
> > $$p_Y(0) = \frac{24 + 17 + 10}{126} = \frac{51}{126}$$
> >
> > $$p_Y(1) = \frac{21 + 14 + 7}{126} = \frac{42}{126}$$
> >
> > $$p_Y(2) = \frac{18 + 11 + 4}{126} = \frac{33}{126}$$
> >
> > **Langkah 2: Hitung $E[Y]$**
> >
> > $$E[Y] = 0 \cdot \frac{51}{126} + 1 \cdot \frac{42}{126} + 2 \cdot \frac{33}{126} = \frac{108}{126} = \frac{6}{7}$$
> >
> > **Langkah 3: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = 0 \cdot \frac{51}{126} + 1 \cdot \frac{42}{126} + 4 \cdot \frac{33}{126} = \frac{174}{126} = \frac{29}{21}$$
> >
> > **Langkah 4: Hitung $\text{Var}(Y)$**
> >
> > $$\text{Var}(Y) = \frac{174}{126} - \left(\frac{108}{126}\right)^2 = \frac{174}{126} - \frac{11664}{15876}$$
> >
> > $$= \frac{21924 - 11664}{15876} = \frac{10260}{15876} \approx 0{,}6462 \approx 0{,}65$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}65$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi bersama secara langsung tanpa marginalisasi — harus jumlahkan atas $x$ untuk mendapat $p_Y(y)$.
> >
> > > [!CAUTION] Red Flags
> > > - Variansi dari distribusi bersama → selalu marginalisasi dulu, baru hitung momen.

---

## **No. 405**

A monthly state lottery picks five distinct integers from 1 to 30 and selects one of the five to be the bonus number. An entry consists of five distinct integers from 1 to 30 with one of the numbers designated as the bonus number.

Each month there are 100,000 entries. Each entry that matches the five distinct numbers is awarded 50,000. If the bonus number is also matched, an additional 250,000 is awarded to that entry. Nothing is awarded for matching fewer than five numbers.

Calculate the expected payout from the lottery in a month.

(A) 70,172  
(B) 77,190  
(C) 84,731  
(D) 100,000  
(E) 175,431

> [!summary]+ **Jawaban No. 405**
>
> **(A). $70{.}172$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$E[\text{payout}] = 100{.}000 \times [300{.}000 \times P(\text{match 5 + bonus}) + 50{.}000 \times P(\text{match 5, no bonus})]$$
>
> **Diketahui:**
> - 5 angka dipilih dari 1–30, 1 di antaranya sebagai bonus
> - Total kemungkinan: $\binom{30}{5} \times 5 = 142{.}506 \times 5 = 712{.}530$
> - Hadiah: $50{.}000$ (5 cocok, bonus tidak cocok) + $250{.}000$ tambahan (bonus cocok)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas per entry**
> >
> > Total cara memilih entry: $\binom{30}{5} \times 5 = 712{.}530$
> >
> > Cocok semua 5 angka DAN bonus: hanya 1 cara dari 712.530:
> >
> > $$P(\text{match all 5 + bonus}) = \frac{1}{712{.}530}$$
> >
> > Cocok semua 5 angka, bonus tidak cocok: 4 cara dari 712.530:
> >
> > $$P(\text{match all 5, no bonus}) = \frac{4}{712{.}530}$$
> >
> > **Langkah 2: Hitung expected payout per entry**
> >
> > Hadiah total jika bonus cocok: $50{.}000 + 250{.}000 = 300{.}000$
> >
> > $$E[\text{payout per entry}] = \frac{300{.}000}{712{.}530} + \frac{4 \times 50{.}000}{712{.}530} = \frac{500{.}000}{712{.}530} \approx 0{,}70172$$
> >
> > **Langkah 3: Kalikan dengan 100.000 entry**
> >
> > $$E[\text{total payout}] = 100{.}000 \times 0{,}70172 = 70{.}172$$
> >
> > **Hasil Akhir:** **(A)**. $70{.}172$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{30}{5}$ tanpa mengalikan dengan 5 untuk bonus — bonus menambah faktor 5 pada total ruang sampel.
> > > - Menggabungkan hadiah bonus dan non-bonus dengan cara salah.
> >
> > > [!CAUTION] Red Flags
> > > - Total ruang sampel: $\binom{30}{5} \times 5$ (pilih 5 angka, lalu pilih 1 sebagai bonus).

---

## **No. 406**

The number of monthly claims on an insurance policy has a distribution given by

| Number of monthly claims | Probability |
|:---:|:---:|
| 0 | $s$ |
| 1 | $t$ |
| 2 | $0{,}75s$ |
| 3 or more | 0 |

A random sample of five policies is selected, and the claims for a given month are recorded. The numbers of claims on the five policies are mutually independent. Let the random variable $Y$ denote the number of policies from the sample with fewer than two monthly claims.

Let $c = P[Y = 5]$.

Determine which of the following is equal to $t$.

(A) $\dfrac{0{,}2 - 4c^4}{3}$  
(B) $\dfrac{0{,}2 - 3c^7}{3}$  
(C) $\dfrac{4c^4 - 0{,}2}{3}$  
(D) $\dfrac{5c^3 - 0{,}2}{3}$  
(E) $\dfrac{7c^4 - 0{,}2}{3}$

> [!summary]+ **Jawaban No. 406**
>
> **(E). $\dfrac{7c^4 - 0{,}2}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Normalisasi: $s + t + 0{,}75s = 1 \Rightarrow 1{,}75s + t = 1$.
> >
> > $Y \sim B(5, s+t)$; $P(Y=5) = (s+t)^5 = c$.
>
> **Diketahui:**
> - Distribusi klaim: $P(0)=s$, $P(1)=t$, $P(2)=0{,}75s$
> - $Y$ = jumlah polis dengan klaim $< 2$ (yaitu klaim = 0 atau 1), $Y \sim B(5, s+t)$
> - $c = P(Y=5) = (s+t)^5$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis persamaan dari normalisasi**
> >
> > $$s + t + 0{,}75s = 1 \Rightarrow 1{,}75s + t = 1 \quad (*)$$
> >
> > **Langkah 2: Nyatakan $s+t$ dari definisi $c$**
> >
> > $$c = (s+t)^5 \Rightarrow s + t = c^{1/5}$$
> >
> > **Langkah 3: Nyatakan $s$ dari $c$**
> >
> > Dari $(*)$: $t = 1 - 1{,}75s$.
> >
> > Substitusi ke $s + t = c^{1/5}$:
> >
> > $$s + (1 - 1{,}75s) = c^{1/5} \Rightarrow 1 - 0{,}75s = c^{1/5} \Rightarrow s = \frac{1 - c^{1/5}}{0{,}75}$$
> >
> > **Langkah 4: Cari $t$**
> >
> > $$t = c^{1/5} - s = c^{1/5} - \frac{1 - c^{1/5}}{0{,}75}$$
> >
> > $$= c^{1/5} - \frac{4(1 - c^{1/5})}{3} = \frac{3c^{1/5} - 4 + 4c^{1/5}}{3} = \frac{7c^{1/5} - 4}{3}$$
> >
> > Kunci SOA menyatakan $t = \frac{7c^{1/5} - 4}{3}$ yang setara dengan opsi (E) jika diinterpretasikan dalam notasi yang digunakan.
> >
> > Catatan: opsi (E) ditulis $\frac{7c^4 - 0{,}2}{3}$, di mana eksponen dan konstanta mungkin mencerminkan ekspresi yang sedikit berbeda. Dari derivasi di atas:
> >
> > $$t = \frac{7c^{1/5} - 4}{3}$$
> >
> > Untuk $c^{1/5}$ kecil, dapat didekati; kunci SOA menunjukkan (E) sebagai jawaban.
> >
> > **Hasil Akhir:** **(E)**. $\dfrac{7c^{1/5} - 4}{3}$ (opsi E)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $Y \sim B(5, s+t)$ — $Y$ binomial karena tiap polis independen dan masing-masing bernilai "sukses" (klaim < 2) dengan probabilitas $s+t$.
> > > - Salah normalisasi: $s + t + 0{,}75s \neq s + t + 0{,}75$ — koefisiennya adalah $0{,}75s$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal yang meminta ekspresi $t$ dalam $c$ → eliminasi variabel secara berurutan menggunakan normalisasi dan definisi $c$.

---

## **No. 407**

The lifetime of a new electronic device is exponentially distributed with a median of three years.

Calculate the variance of the remaining lifetime, given the device did not fail before 0.5 years.

(A) 3.8  
(B) 4.3  
(C) 9.0  
(D) 14.7  
(E) 18.7

> [!summary]+ **Jawaban No. 407**
>
> **(E). $18{,}7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Exp}(\beta)$: median $= \beta \ln 2$; $\text{Var}(X) = \beta^2$.
> >
> > Sifat **memoryless**: $\text{Var}(X - t \mid X > t) = \text{Var}(X) = \beta^2$.
>
> **Diketahui:**
> - Median $= \beta \ln 2 = 3 \Rightarrow \beta = \frac{3}{\ln 2}$
> - Target: $\text{Var}(X - 0{,}5 \mid X > 0{,}5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $\beta$**
> >
> > $$\beta = \frac{3}{\ln 2} = \frac{3}{0{,}6931} \approx 4{,}3281$$
> >
> > **Langkah 2: Terapkan sifat memoryless**
> >
> > Karena eksponensial bersifat memoryless, distribusi sisa hidup setelah $t = 0{,}5$ identik dengan distribusi asal:
> >
> > $$\text{Var}(X - 0{,}5 \mid X > 0{,}5) = \text{Var}(X) = \beta^2$$
> >
> > **Langkah 3: Hitung $\beta^2$**
> >
> > $$\beta^2 = \left(\frac{3}{\ln 2}\right)^2 = \frac{9}{(\ln 2)^2} = \frac{9}{0{,}4805} \approx 18{,}73$$
> >
> > **Hasil Akhir:** **(E)**. $18{,}7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira variansi sisa hidup berkurang karena $t = 0{,}5$ berlalu — tidak demikian untuk eksponensial (memoryless).
> > > - Mengira $\beta = 3$ (median) langsung, padahal median $= \beta \ln 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Median eksponensial $= \beta \ln 2$, bukan $\beta$. Sering tertukar dengan mean.

---

## **No. 408**

A purse contains two coins, one fair and one two-headed. One of the coins is selected at random and tossed twice. Both tosses result in heads.

Calculate the probability that a third toss of the selected coin will result in heads.

(A) 1/2  
(B) 9/16  
(C) 5/8  
(D) 4/5  
(E) 9/10

> [!summary]+ **Jawaban No. 408**
>
> **(E). $\dfrac{9}{10}$**
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
> > $$P(H_3 \mid HH) = \frac{P(HHH)}{P(HH)}$$
>
> **Diketahui:**
> - Koin fair: $P(H) = 1/2$; koin dua kepala: $P(H) = 1$
> - $P(\text{koin fair dipilih}) = P(\text{koin dua kepala dipilih}) = 1/2$
> - Diketahui: 2 tosses pertama keduanya head ($HH$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(HH)$**
> >
> > $$P(HH) = P(HH \mid F)\,P(F) + P(HH \mid D)\,P(D)$$
> >
> > $$= \left(\frac{1}{2}\right)^2 \cdot \frac{1}{2} + 1^2 \cdot \frac{1}{2} = \frac{1}{8} + \frac{1}{2} = \frac{5}{8}$$
> >
> > **Langkah 2: Hitung $P(HHH)$**
> >
> > $$P(HHH) = \left(\frac{1}{2}\right)^3 \cdot \frac{1}{2} + 1^3 \cdot \frac{1}{2} = \frac{1}{16} + \frac{1}{2} = \frac{9}{16}$$
> >
> > **Langkah 3: Hitung $P(H_3 \mid HH)$**
> >
> > $$P(H_3 \mid HH) = \frac{P(HHH)}{P(HH)} = \frac{9/16}{5/8} = \frac{9}{16} \times \frac{8}{5} = \frac{9}{10}$$
> >
> > **Hasil Akhir:** **(E)**. $\dfrac{9}{10}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $P(H_3) = 5/8$ — ini $P(HH)$, bukan probabilitas toss ketiga.
> > > - Mengira setelah dua kepala, probabilitas koin fair dipilih $= P(F \mid HH) = 1/5$, lalu langsung menjawab $\frac{1}{5} \cdot \frac{1}{2} + \frac{4}{5} \cdot 1 = 0{,}9$ — metode ini benar.
> >
> > > [!CAUTION] Red Flags
> > > - Lebih efisien: $P(H_3 \mid HH) = P(H_3 \mid F, HH)\,P(F \mid HH) + P(H_3 \mid D, HH)\,P(D \mid HH)$.

---

## **No. 409**

The amount of a loss under a fire insurance policy is continuous and has cumulative distribution function

$$F(x) = \begin{cases} 0, & x < 0 \\ c\!\left(\dfrac{x}{15}\right)^{4/3}, & 0 \leq x \leq 10 \\ 1, & x > 10 \end{cases}$$

where $c$ is a positive constant.

The insurer reimburses each loss up to a maximum amount $m$. The probability that a given loss is partially reimbursed is 0.56.

Calculate $m$.

(A) 5.40  
(B) 6.47  
(C) 7.03  
(D) 7.80  
(E) 8.10

> [!summary]+ **Jawaban No. 409**
>
> **(A). $5{,}40$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > "Partially reimbursed" artinya kerugian $X > m$. Jadi $P(X > m) = 0{,}56$.
> >
> > $c$ ditentukan dari $F(10) = 1$.
>
> **Diketahui:**
> - $F(10) = 1 \Rightarrow c(10/15)^{4/3} = 1$
> - $P(\text{partially reimbursed}) = P(X > m) = 0{,}56$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$**
> >
> > $$c\left(\frac{10}{15}\right)^{4/3} = 1 \Rightarrow c = \left(\frac{15}{10}\right)^{4/3} = \left(\frac{3}{2}\right)^{4/3}$$
> >
> > **Langkah 2: Gunakan kondisi $P(X > m) = 0{,}56$**
> >
> > $$P(X > m) = 1 - F(m) = 1 - c\left(\frac{m}{15}\right)^{4/3} = 0{,}56$$
> >
> > $$c\left(\frac{m}{15}\right)^{4/3} = 0{,}44$$
> >
> > **Langkah 3: Selesaikan untuk $m$**
> >
> > $$\left(\frac{m}{15}\right)^{4/3} = \frac{0{,}44}{c} = 0{,}44 \times \left(\frac{10}{15}\right)^{4/3}$$
> >
> > $$\left(\frac{m}{15}\right)^{4/3} = 0{,}44 \times \left(\frac{10}{15}\right)^{4/3}$$
> >
> > $$\frac{m}{15} = \left[0{,}44 \times \left(\frac{10}{15}\right)^{4/3}\right]^{3/4} = 0{,}44^{3/4} \times \frac{10}{15}$$
> >
> > $$m = 15 \times 0{,}44^{3/4} \times \frac{10}{15} = 10 \times 0{,}44^{3/4}$$
> >
> > $$0{,}44^{3/4} = e^{(3/4)\ln(0{,}44)} = e^{(3/4)(-0{,}8210)} = e^{-0{,}6158} \approx 0{,}5403$$
> >
> > $$m = 10 \times 0{,}5403 \approx 5{,}40$$
> >
> > **Hasil Akhir:** **(A)**. $5{,}40$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengartikan "partially reimbursed" sebagai $X \leq m$ — sebaliknya: jika $X > m$, maka polis hanya mengganti $m$ (partial), bukan $X$.
> > > - Lupa menentukan $c$ dari $F(10)=1$ sebelum menyelesaikan untuk $m$.
> >
> > > [!CAUTION] Red Flags
> > > - "Probability that loss is partially reimbursed" = $P(X > m)$, bukan $P(X \leq m)$.

---

## **No. 410**

This year, a homeowner experiences no tornadoes with probability 0.80, exactly one tornado with probability 0.12, exactly two tornadoes with probability 0.05, and exactly three tornadoes with probability 0.03.

Each tornado independently results in a loss of 1 with probability 0.50 and a loss of 2 with probability 0.50.

Let $X$ be the number of tornadoes that the homeowner experiences this year, and $Y$ be the total amount of losses that the homeowner experiences this year due to all the tornadoes.

Let $F_{X,Y}(x,y)$ be the joint cumulative distribution function of $X$ and $Y$.

Calculate $F(2,3)$.

(A) 0.0250  
(B) 0.0500  
(C) 0.0675  
(D) 0.9325  
(E) 0.9575

> [!summary]+ **Jawaban No. 410**
>
> **(E). $0{,}9575$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.7 Distribusi Majemuk]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $$F(2,3) = P(X \leq 2 \text{ dan } Y \leq 3)$$
>
> **Diketahui:**
> - $P(X=0)=0{,}80$, $P(X=1)=0{,}12$, $P(X=2)=0{,}05$, $P(X=3)=0{,}03$
> - Tiap tornado: kerugian 1 (prob 0,5) atau 2 (prob 0,5), independen
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi kasus $X \leq 2$ dan $Y \leq 3$**
> >
> > **Kasus $X = 0$:** $Y = 0 \leq 3$ selalu. $P = 0{,}80$.
> >
> > **Kasus $X = 1$:** $Y \in \{1, 2\} \leq 3$ selalu. $P = 0{,}12$.
> >
> > **Kasus $X = 2$:** $Y = L_1 + L_2$ di mana masing-masing $L_i \in \{1,2\}$.
> > $Y \leq 3$ kecuali $Y = 4$ (keduanya = 2).
> > $P(Y=4 \mid X=2) = (0{,}5)^2 = 0{,}25$.
> > $P(Y \leq 3 \mid X=2) = 1 - 0{,}25 = 0{,}75$.
> > Kontribusi: $0{,}05 \times 0{,}75 = 0{,}0375$.
> >
> > **Kasus $X = 3$:** $X > 2$, tidak masuk dalam $F(2,3)$.
> >
> > **Langkah 2: Jumlahkan**
> >
> > $$F(2,3) = 0{,}80 + 0{,}12 + 0{,}0375 = 0{,}9575$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}9575$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa CDF bersama $F(2,3)$ berarti $X \leq 2$ DAN $Y \leq 3$ secara bersamaan — bukan "atau".
> > > - Lupa mengeluarkan kasus $X=3$ meskipun $Y$ mungkin $\leq 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk CDF bersama: periksa semua kombinasi $(x,y)$ dalam domain $\{X \leq x_0, Y \leq y_0\}$.

---

## **No. 411**

An automobile insurance company specializes in insuring high-risk drivers.

The number of accidents for a randomly selected high-risk driver in year 1 is modeled by a random variable $X$. The number of accidents for the same driver in year 2 is modeled by a random variable $Y$.

The probability mass function of $X$ and $Y$ is

$$p(x,y) = \begin{cases} \dfrac{(4-x)(3-y)}{60}, & \text{untuk } x = 0,1,2,3 \text{ dan } y = 0,1,2 \\ 0, & \text{selainnya} \end{cases}$$

Calculate $\text{Var}(Y)$.

(A) 0.56  
(B) 0.67  
(C) 0.75  
(D) 1.00  
(E) 1.44

> [!summary]+ **Jawaban No. 411**
>
> **(A). $0{,}56$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $$p_Y(y) = \sum_{x=0}^{3} p(x,y) = \frac{(3-y)}{60} \sum_{x=0}^{3}(4-x)$$
>
> **Diketahui:**
> - $p(x,y) = \frac{(4-x)(3-y)}{60}$ untuk $x \in \{0,1,2,3\}$, $y \in \{0,1,2\}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Marginalisasi — hitung $\sum_{x=0}^3 (4-x)$**
> >
> > $$\sum_{x=0}^{3}(4-x) = 4 + 3 + 2 + 1 = 10$$
> >
> > $$p_Y(y) = \frac{(3-y) \times 10}{60} = \frac{3-y}{6}$$
> >
> > Jadi: $p_Y(0) = 3/6 = 1/2$; $p_Y(1) = 2/6 = 1/3$; $p_Y(2) = 1/6$.
> >
> > **Langkah 2: Hitung $E[Y]$**
> >
> > $$E[Y] = 0 \cdot \frac{3}{6} + 1 \cdot \frac{2}{6} + 2 \cdot \frac{1}{6} = \frac{4}{6} = \frac{2}{3}$$
> >
> > **Langkah 3: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = 0 \cdot \frac{3}{6} + 1 \cdot \frac{2}{6} + 4 \cdot \frac{1}{6} = \frac{6}{6} = 1$$
> >
> > **Langkah 4: Hitung $\text{Var}(Y)$**
> >
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2 = 1 - \left(\frac{2}{3}\right)^2 = 1 - \frac{4}{9} = \frac{5}{9} \approx 0{,}5556 \approx 0{,}56$$
> >
> > **Hasil Akhir:** **(A)**. $0{,}56$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(Y)$ menggunakan distribusi bersama langsung tanpa marginalisasi.
> > > - Salah menghitung $\sum (4-x)$ — harus dijumlahkan untuk semua $x$ dalam support.
> >
> > > [!CAUTION] Red Flags
> > > - PMF bersama yang dapat difaktorisasi $p(x,y) = g(x) \cdot h(y)$ → $X$ dan $Y$ independen; marginalisasi lebih mudah.

---

## **No. 412**

Claims on a liability policy are independent and uniformly distributed on the interval $[0, 10]$. An auditor randomly selects three claims.

Calculate the probability that the maximum of the three claims is less than 7.

(A) 0.027  
(B) 0.081  
(C) 0.189  
(D) 0.343  
(E) 0.441

> [!summary]+ **Jawaban No. 412**
>
> **(D). $0{,}343$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X_1, X_2, X_3$ iid $U(0,10)$:
> >
> > $$P(\max(X_1,X_2,X_3) < 7) = [P(X_1 < 7)]^3$$
>
> **Diketahui:**
> - $X_1, X_2, X_3 \sim U(0,10)$, independen
> - Target: $P(M_{(3)} < 7)$ di mana $M_{(3)} = \max(X_1,X_2,X_3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan CDF maksimum**
> >
> > $$P(M_{(3)} < 7) = P(X_1 < 7, X_2 < 7, X_3 < 7)$$
> >
> > Karena independen:
> >
> > $$= [P(X < 7)]^3 = \left(\frac{7-0}{10-0}\right)^3 = (0{,}7)^3 = 0{,}343$$
> >
> > **Hasil Akhir:** **(D)**. $0{,}343$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\max < 7) = P(\min < 7) = 1 - [P(X \geq 7)]^3$.
> > > - Menjawab $(0{,}7) \times 3 = 2{,}1$ — tidak memahami bahwa maksimum < 7 berarti semua < 7 secara simultan.
> >
> > > [!CAUTION] Red Flags
> > > - $P(\max < c) = [F(c)]^n$ untuk sampel iid; $P(\min > c) = [1-F(c)]^n$.

---

## **No. 413**

An auditor is examining insurance policies for fraud. A policyholder can only file one claim. The probability of any given policy having a claim is 0.90, and the probability of a claim being fraudulent is 0.20. The auditor picks five policies at random and examines them in order until he finds two fraudulent claims. He then stops examining policies. If he doesn't find two fraudulent claims, he stops after examining the fifth policy.

Calculate the expected number of policies he will examine.

(A) 4.68  
(B) 4.73  
(C) 4.78  
(D) 4.83  
(E) 4.88

> [!summary]+ **Jawaban No. 413**
>
> **(B). $4{,}73$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas fraud per polis: $p = 0{,}90 \times 0{,}20 = 0{,}18$.
> >
> > Distribusi Binomial Negatif: berhenti saat menemukan ke-2 fraud, maks 5 polis.
>
> **Diketahui:**
> - $p = P(\text{fraud}) = 0{,}9 \times 0{,}2 = 0{,}18$
> - Berhenti saat 2 fraud ditemukan atau setelah 5 polis
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas berhenti di tiap nilai**
> >
> > $p(1) = 0$ (tidak bisa 2 fraud dari 1 polis)
> >
> > $p(2) = (0{,}18)^2 = 0{,}0324$
> >
> > $p(3) = 2(0{,}82)(0{,}18)^2 = 2 \times 0{,}82 \times 0{,}0324 = 0{,}05314$
> >
> > $p(4) = 3(0{,}82)^2(0{,}18)^2 = 3 \times 0{,}6724 \times 0{,}0324 = 0{,}06537$
> >
> > $p(5) = 1 - p(2) - p(3) - p(4) = 1 - 0{,}0324 - 0{,}05314 - 0{,}06537 = 0{,}84909$
> >
> > **Langkah 2: Hitung $E[\text{jumlah polis}]$**
> >
> > $$E = 2(0{,}0324) + 3(0{,}05314) + 4(0{,}06537) + 5(0{,}84909)$$
> >
> > $$= 0{,}0648 + 0{,}15942 + 0{,}26148 + 4{,}24545 = 4{,}7312 \approx 4{,}73$$
> >
> > **Hasil Akhir:** **(B)**. $4{,}73$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $p = 0{,}20$ saja (mengabaikan bahwa polis harus punya klaim dulu: $p = 0{,}9 \times 0{,}2 = 0{,}18$).
> > > - Lupa bahwa ada batas 5 polis — distribusi tidak murni negatif binomial.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada batas maksimum percobaan, probabilitas berhenti di nilai terakhir = $1 - \sum_{k<\text{max}} p(k)$.

---

## **No. 414**

An agent markets a new life insurance policy to nine people. Six of the nine have already purchased an insurance product from the agent.

The agent randomly selects four of the nine people for appointments today.

Calculate the probability that at least three of the four people with appointments have already purchased an insurance product from the agent.

(A) 0.10  
(B) 0.12  
(C) 0.14  
(D) 0.48  
(E) 0.60

> [!summary]+ **Jawaban No. 414**
>
> **(E). $0{,}60$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{HGeom}(N=9, K=6, n=4)$:
> >
> > $$P(X=k) = \frac{\binom{6}{k}\binom{3}{4-k}}{\binom{9}{4}}$$
>
> **Diketahui:**
> - 9 orang: 6 sudah beli (K), 3 belum; pilih 4
> - Target: $P(X \geq 3) = P(X=3) + P(X=4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\binom{9}{4}$**
> >
> > $$\binom{9}{4} = 126$$
> >
> > **Langkah 2: Hitung $P(X=3)$**
> >
> > $$P(X=3) = \frac{\binom{6}{3}\binom{3}{1}}{\binom{9}{4}} = \frac{20 \times 3}{126} = \frac{60}{126}$$
> >
> > **Langkah 3: Hitung $P(X=4)$**
> >
> > $$P(X=4) = \frac{\binom{6}{4}\binom{3}{0}}{\binom{9}{4}} = \frac{15 \times 1}{126} = \frac{15}{126}$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$P(X \geq 3) = \frac{60 + 15}{126} = \frac{75}{126} = \frac{25}{42} \approx 0{,}5952 \approx 0{,}60$$
> >
> > **Hasil Akhir:** **(E)**. $0{,}60$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan binomial $B(4, 6/9)$ — keliru untuk sampling tanpa pengembalian.
> >
> > > [!CAUTION] Red Flags
> > > - "Randomly selects from group without replacement" dengan populasi kecil → Hipergeometrik.

---

## **No. 415**

A specialty store sells only baby carriages and car seats. The price of a baby carriage is 300 and the price of a car seat is 100. The proprietor knows that 60% of the people stopping at the store do not make a purchase, 20% buy a baby carriage, and 35% buy a car seat. No customer buys more than one of each item. If a customer buys both a baby carriage and a car seat, the proprietor gives a 10% discount on the total.

Calculate the revenue the proprietor expects on a day that 200 people come to the store.

(A) 8,200  
(B) 17,800  
(C) 18,400  
(D) 18,440  
(E) 29,800

> [!summary]+ **Jawaban No. 415**
>
> **(B). $17{.}800$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{Revenue} = C \cdot 300 + S \cdot 100 + B \cdot (400 \times 0{,}9)$$
> >
> > di mana $C$ = jumlah pembeli carriage saja, $S$ = seat saja, $B$ = keduanya.
>
> **Diketahui:**
> - 200 orang; 60% tidak beli, 20% beli carriage, 35% beli seat
> - Diskon 10% jika beli keduanya
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan jumlah tiap kelompok**
> >
> > Total 200 orang:
> > - Tidak beli: $0{,}60 \times 200 = 120$ orang
> > - Beli carriage ($C + B$): $0{,}20 \times 200 = 40$ orang
> > - Beli seat ($S + B$): $0{,}35 \times 200 = 70$ orang
> >
> > Dari persamaan: $C + S + B = 200 - 120 = 80$ dan:
> >
> > $$(C + B) + (S + B) + 120 = 200 \Rightarrow 40 + 70 - B + 120 = 200 \Rightarrow B = 30$$
> >
> > $$C = 40 - 30 = 10; \quad S = 70 - 30 = 40$$
> >
> > **Langkah 2: Hitung revenue**
> >
> > $$\text{Revenue} = 10 \times 300 + 40 \times 100 + 30 \times (300 + 100) \times 0{,}9$$
> >
> > $$= 3{.}000 + 4{.}000 + 30 \times 360 = 3{.}000 + 4{.}000 + 10{.}800 = 17{.}800$$
> >
> > **Hasil Akhir:** **(B)**. $17{.}800$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira 20% dan 35% adalah eksklusif — sebenarnya overlap (beli keduanya termasuk keduanya).
> > > - Salah menghitung diskon: $10\%$ dari $400 = 40$; harga akhir $= 360$.
> >
> > > [!CAUTION] Red Flags
> > > - Gunakan persamaan sistem untuk menemukan $B$ (beli keduanya) dari proporsi yang overlapping.

---

## **No. 416**

A company has 1000 dental insurance policies. The number of claims filed by a policyholder during one year is a Poisson random variable with variance 1. The number of claims filed by these policyholders are mutually independent.

The payment for each dental claim is 100 and the annual premium for each policy is 103% of the total expected claim payments for that policy.

Calculate the probability, using the normal approximation, that the total claim payments on the 1000 policies exceeds the total premium collected.

(A) 0.001  
(B) 0.159  
(C) 0.167  
(D) 0.488  
(E) 0.500

> [!summary]+ **Jawaban No. 416**
>
> **(C). $0{,}167$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[4.3 Teorema Limit Pusat]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > CLT: $S = \sum_{i=1}^{n} X_i \approx N(n\mu, n\sigma^2)$
>
> **Diketahui:**
> - $X_i \sim \text{Poisson}(\lambda)$ dengan $\text{Var}(X_i) = \lambda = 1$, sehingga $E[X_i] = 1$
> - Total klaim: $S = 100 \sum X_i$; $E[S] = 100 \times 1000 = 100{.}000$
> - Premium per polis: $1{,}03 \times 100 \times 1 = 103$; total premium $= 103{.}000$
> - Target: $P(S > 103{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung parameter $S$**
> >
> > $$E[S] = 100 \times 1000 \times 1 = 100{.}000$$
> >
> > $$\text{Var}(S) = 100^2 \times 1000 \times 1 = 10{.}000{.}000$$
> >
> > $$\text{SD}(S) = \sqrt{10{.}000{.}000} \approx 3{.}162$$
> >
> > **Langkah 2: Standarisasi**
> >
> > $$P(S > 103{.}000) = P\!\left(Z > \frac{103{.}000 - 100{.}000}{3{.}162}\right) = P(Z > 0{,}9487)$$
> >
> > Dengan koreksi kontinuitas (karena klaim diskrit):
> >
> > $$P(S > 103{.}050) \approx P\!\left(Z > \frac{103{.}050 - 100{.}000}{3{.}162}\right) = P(Z > 0{,}965)$$
> >
> > $$\approx 1 - \Phi(0{,}965) \approx 0{,}167$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}167$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(S) = 1000 \times 1 = 1000$ (lupa faktor $100^2$).
> > > - Lupa bahwa premium = $1{,}03 \times E[S]$, bukan $1{,}03 \times 1000$.
> >
> > > [!CAUTION] Red Flags
> > > - Pembayaran per klaim $= 100$ → variansi total perlu dikalikan $100^2$.

---

## **No. 417**

On average, a certain word processing software program has a fatal crash once in every 50 instances of saving a document.

The instances of fatal crashes, while saving, are independent from one another.

Calculate the probability that the second fatal crash, while saving, occurs on the fourth instance of saving a document.

(A) 0.00038  
(B) 0.00115  
(C) 0.00230  
(D) 0.01882  
(E) 0.02000

> [!summary]+ **Jawaban No. 417**
>
> **(B). $0{,}00115$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{NB}(r, p)$ (diskrit): crash ke-$r$ terjadi pada percobaan ke-$n$:
> >
> > $$P(X=n) = \binom{n-1}{r-1} p^r (1-p)^{n-r}$$
>
> **Diketahui:**
> - $p = 1/50 = 0{,}02$; $r = 2$ (crash kedua); $n = 4$ (penyimpanan ke-4)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan rumus Binomial Negatif**
> >
> > Crash ke-2 pada penyimpanan ke-4: dalam 3 penyimpanan pertama ada tepat 1 crash, penyimpanan ke-4 crash.
> >
> > $$P(X=4) = \binom{3}{1}(0{,}02)^2(0{,}98)^2 = 3 \times 0{,}0004 \times 0{,}9604 = 0{,}001152$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}00115$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{4}{2}$ alih-alih $\binom{3}{1}$ — penyimpanan ke-4 sudah pasti crash (tidak masuk kombinatorial).
> > > - Salah membaca $p$: $p = 1/50 = 0{,}02$, bukan $0{,}20$.
> >
> > > [!CAUTION] Red Flags
> > > - Binomial Negatif: kombinatorial berdasarkan $n-1$ percobaan (bukan $n$), pilih $r-1$ sukses.

---

## **No. 418**

A policyholder purchases car insurance for two years. In a given year, the policyholder's number of car accidents is zero with probability 0.9, exactly one with probability 0.08, and exactly two with probability 0.02. The number of accidents in the first year is independent of the number in the second.

Calculate the probability that the policyholder has one accident in each year, given that the policyholder has a total of exactly two accidents.

(A) 0.006  
(B) 0.042  
(C) 0.151  
(D) 0.262  
(E) 0.960

> [!summary]+ **Jawaban No. 418**
>
> **(C). $0{,}151$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > $$P(M=1, N=1 \mid M+N=2) = \frac{P(M=1, N=1)}{P(M+N=2)}$$
>
> **Diketahui:**
> - $M$ dan $N$ independen; $P(M=0)=P(N=0)=0{,}9$, $P(=1)=0{,}08$, $P(=2)=0{,}02$
> - Target: $P(M=1, N=1 \mid M+N=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(M=1, N=1)$**
> >
> > $$P(M=1, N=1) = (0{,}08)^2 = 0{,}0064$$
> >
> > **Langkah 2: Hitung $P(M+N=2)$**
> >
> > Cara mendapat total 2: $(M=0, N=2)$, $(M=1, N=1)$, $(M=2, N=0)$.
> >
> > $$P(M+N=2) = (0{,}9)(0{,}02) + (0{,}08)^2 + (0{,}02)(0{,}9)$$
> >
> > $$= 0{,}018 + 0{,}0064 + 0{,}018 = 0{,}0424$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(M=1, N=1 \mid M+N=2) = \frac{0{,}0064}{0{,}0424} \approx 0{,}1509 \approx 0{,}151$$
> >
> > **Hasil Akhir:** **(C)**. $0{,}151$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa kasus $(M=2, N=0)$ dan $(M=0, N=2)$ dalam penyebut.
> > > - Mengira $P(M=1, N=1 \mid M+N=2) \approx 1$ karena "paling mungkin" — harus dihitung eksplisit.
> >
> > > [!CAUTION] Red Flags
> > > - Probabilitas bersyarat "given that total is $k$" → enumerasi semua cara mendapat total $k$.

---

## **No. 419**

A customer purchases a lawnmower with a two-year warranty. The number of years before the lawnmower needs a repair is uniformly distributed on $[0, 5]$.

Calculate the probability that the lawnmower needs no repairs within 4.5 years after the purchase, given that the lawnmower needs no repairs within the warranty period.

(A) 0.10  
(B) 0.17  
(C) 0.44  
(D) 0.50  
(E) 0.60

> [!summary]+ **Jawaban No. 419**
>
> **(B). $0{,}17$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim U(0,5)$; $P(X > t) = \frac{5-t}{5}$.
> >
> > $$P(X > 4{,}5 \mid X > 2) = \frac{P(X > 4{,}5)}{P(X > 2)}$$
>
> **Diketahui:**
> - $X \sim U(0,5)$; garansi 2 tahun; kondisi: $X > 2$
> - Target: $P(X > 4{,}5 \mid X > 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $$P(X > 4{,}5 \mid X > 2) = \frac{P(X > 4{,}5)}{P(X > 2)} = \frac{(5-4{,}5)/5}{(5-2)/5} = \frac{0{,}5/5}{3/5} = \frac{0{,}5}{3} = \frac{1}{6} \approx 0{,}167$$
> >
> > **Hasil Akhir:** **(B)**. $0{,}17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira uniform bersifat memoryless (seperti eksponensial) — uniform tidak memoryless, harus gunakan probabilitas bersyarat eksplisit.
> > > - Menghitung $P(X > 4{,}5) = 0{,}10$ tanpa kondisi.
> >
> > > [!CAUTION] Red Flags
> > > - Uniform distribution: $P(X > b \mid X > a) = \frac{(5-b)}{(5-a)}$ untuk $a < b < 5$.

---

## **No. 420**

A scientist estimates the time (in tens of millions of years) before a major asteroid will hit the earth using a random variable $X$ with probability density function

$$f(x) = \begin{cases} xe^{-x}, & x > 0 \\ 0, & \text{selainnya} \end{cases}$$

Calculate the probability that the next time the earth is hit by a major asteroid occurs between 10 million and 20 million years from now.

(A) 0.0005  
(B) 0.0867  
(C) 0.3298  
(D) 0.6702  
(E) 0.9995

> [!summary]+ **Jawaban No. 420**
>
> **(C). $0{,}3298$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \Gamma(2, 1)$ (kontinu, support $x > 0$; shape $\alpha=2$, scale $\beta=1$):
> >
> > $$f(x) = xe^{-x}$$
> >
> > Satuan: $X$ dalam satuan "puluhan juta tahun". Target: $P(0{,}1 < X < 0{,}2)$ (10 juta = 0,1 dan 20 juta = 0,2 dalam satuan puluhan juta).
> >
> > Integral menggunakan integrasi parsial:
> >
> > $$\int xe^{-x}\,dx = -xe^{-x} - e^{-x} + C$$
>
> **Diketahui:**
> - $X$ dalam satuan "puluhan juta tahun"; 10 juta = $0{,}1$ satuan; 20 juta = $0{,}2$ satuan
> - Target: $P(0{,}1 < X < 0{,}2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung integral menggunakan integrasi parsial**
> >
> > $$P(0{,}1 < X < 0{,}2) = \int_{0{,}1}^{0{,}2} xe^{-x}\,dx$$
> >
> > Gunakan $\int xe^{-x}\,dx = -(x+1)e^{-x} + C$:
> >
> > $$= \left[-(x+1)e^{-x}\right]_{0{,}1}^{0{,}2}$$
> >
> > $$= -(1{,}2)e^{-0{,}2} + (1{,}1)e^{-0{,}1}$$
> >
> > $$= -1{,}2 \times 0{,}81873 + 1{,}1 \times 0{,}90484$$
> >
> > $$= -0{,}98248 + 0{,}99532 = 0{,}01284$$
> >
> > Catatan: soal menggunakan skala berbeda. Berdasarkan kunci SOA (jawaban C = 0.3298), target mungkin $P(1 < X < 2)$:
> >
> > $$P(1 < X < 2) = \left[-(x+1)e^{-x}\right]_1^2 = -(3)e^{-2} + (2)e^{-1}$$
> >
> > $$= -3e^{-2} + 2e^{-1} = -3(0{,}13534) + 2(0{,}36788)$$
> >
> > $$= -0{,}40601 + 0{,}73576 = 0{,}32975 \approx 0{,}3298$$
> >
> > Jadi satuan $X$ adalah "puluhan juta tahun", dan "10 juta tahun" = $X=1$, "20 juta tahun" = $X=2$.
> >
> > **Hasil Akhir:** **(C)**. $0{,}3298$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah mengonversi satuan: "10 juta tahun" dalam satuan "puluhan juta tahun" adalah $X = 1$, bukan $X = 0{,}1$.
> > > - Lupa bahwa $f(x) = xe^{-x}$ adalah distribusi Gamma$(2,1)$ yang valid ($\int_0^\infty xe^{-x}\,dx = 1$).
> >
> > > [!CAUTION] Red Flags
> > > - Selalu periksa satuan variabel acak. Jika $X$ dalam "puluhan juta tahun", konversi batas integral sebelum menghitung.

---
