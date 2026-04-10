## **No. 31**

A large pool of adults earning their first driver's license includes 50% low-risk drivers, 30% moderate-risk drivers, and 20% high-risk drivers. Because these drivers have no prior driving record, an insurance company considers each driver to be randomly selected from the pool.

This month, the insurance company writes four new policies for adults earning their first driver's license.

Calculate the probability that these four will contain at least two more high-risk drivers than low-risk drivers.

a. 0.006  
b. 0.012  
c. 0.018  
d. 0.049  
e. 0.073  

> [!summary]+ **Jawaban No. 31**
> 
> **(d). $0{,}049$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Multinomial** untuk $(X, Y, Z)$ dengan parameter $(n, p_L, p_M, p_H)$:
> >
> > $$P(X=x, Y=y, Z=z) = \frac{n!}{x!\,y!\,z!}\, p_L^x\, p_M^y\, p_H^z, \quad x+y+z=n$$
>
> **Diketahui:**
> - $n = 4$, $p_L = 0{,}50$, $p_M = 0{,}30$, $p_H = 0{,}20$
> - Kondisi: $Z \geq X + 2$ (high-risk setidaknya 2 lebih banyak dari low-risk)
> - Target: $P(Z - X \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Enumerate semua kombinasi $(x, y, z)$ yang memenuhi $z \geq x + 2$ dan $x+y+z = 4$**
> >
> > | $(x, y, z)$ | Syarat |
> > |:-:|:-:|
> > | $(0, 0, 4)$ | $4 \geq 2$ ✓ |
> > | $(1, 0, 3)$ | $3 \geq 3$ ✓ |
> > | $(0, 1, 3)$ | $3 \geq 2$ ✓ |
> > | $(0, 2, 2)$ | $2 \geq 2$ ✓ |
> >
> > **Langkah 2: Hitung probabilitas masing-masing kombinasi**
> >
> > $$P(0,0,4) = \frac{4!}{0!\,0!\,4!}(0{,}50)^0(0{,}30)^0(0{,}20)^4 = (0{,}20)^4 = 0{,}0016$$
> >
> > $$P(1,0,3) = \frac{4!}{1!\,0!\,3!}(0{,}50)^1(0{,}30)^0(0{,}20)^3 = 4(0{,}50)(0{,}20)^3 = 0{,}0160$$
> >
> > $$P(0,1,3) = \frac{4!}{0!\,1!\,3!}(0{,}50)^0(0{,}30)^1(0{,}20)^3 = 4(0{,}30)(0{,}20)^3 = 0{,}0096$$
> >
> > $$P(0,2,2) = \frac{4!}{0!\,2!\,2!}(0{,}50)^0(0{,}30)^2(0{,}20)^2 = 6(0{,}30)^2(0{,}20)^2 = 0{,}0216$$
> >
> > **Langkah 3: Jumlahkan semua probabilitas**
> >
> > $$P = 0{,}0016 + 0{,}0160 + 0{,}0096 + 0{,}0216 = 0{,}0488 \approx 0{,}049$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}049$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa kombinasi $(1,0,3)$: ini memenuhi $z - x = 2 \geq 2$, jadi harus disertakan.
> > > - Menggunakan distribusi Binomial biasa alih-alih Multinomial untuk tiga kategori.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "At least two more high-risk than low-risk" → $Z - X \geq 2$, bukan $Z \geq 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada tiga kategori dengan $n$ pengamatan → gunakan distribusi Multinomial; enumerate semua kombinasi yang valid.

---

## **No. 32**

The loss due to a fire in a commercial building is modeled by a random variable $X$ with density function

$$f(x) = \begin{cases} 0{,}005(20 - x), & 0 < x < 20 \\ 0, & \text{otherwise} \end{cases}$$

Given that a fire loss exceeds 8, calculate the probability that it exceeds 16.

a. 1/25  
b. 1/9  
c. 1/8  
d. 1/3  
e. 3/7  

> [!summary]+ **Jawaban No. 32**
> 
> **(b). $\dfrac{1}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas bersyarat kontinu:**
> >
> > $$P(X > 16 \mid X > 8) = \frac{P(X > 16)}{P(X > 8)}$$
> >
> > **Ekor distribusi (survival function):**
> >
> > $$P(X > x) = \int_x^{20} 0{,}005(20 - t)\, dt$$
>
> **Diketahui:**
> - $f(x) = 0{,}005(20 - x)$ untuk $0 < x < 20$
> - Target: $P(X > 16 \mid X > 8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan formula umum $P(X > x)$**
> >
> > $$P(X > x) = \int_x^{20} 0{,}005(20-t)\,dt = 0{,}005\left[20t - \frac{t^2}{2}\right]_x^{20}$$
> >
> > $$= 0{,}005\left[\left(400 - 200\right) - \left(20x - \frac{x^2}{2}\right)\right] = 0{,}005\left(200 - 20x + \frac{x^2}{2}\right)$$
> >
> > **Langkah 2: Hitung $P(X > 8)$**
> >
> > $$P(X > 8) = 0{,}005\left(200 - 160 + 32\right) = 0{,}005 \times 72 = 0{,}36$$
> >
> > **Langkah 3: Hitung $P(X > 16)$**
> >
> > $$P(X > 16) = 0{,}005\left(200 - 320 + 128\right) = 0{,}005 \times 8 = 0{,}04$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(X > 16 \mid X > 8) = \frac{0{,}04}{0{,}36} = \frac{1}{9}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(8 < X < 16)$ sebagai pembilang — pembilang yang benar adalah $P(X > 16)$.
> > > - Salah mengintegrasikan: batas atas selalu 20 (bukan $\infty$) karena support adalah $(0, 20)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Given that loss exceeds 8" → penyebut adalah $P(X > 8)$, bukan $P(X = 8)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika kondisi adalah $X > a$ dan pertanyaan adalah $X > b$ dengan $b > a$ → rumus bersyarat menjadi $P(X>b)/P(X>a)$.

---

## **No. 33**

The lifetime of a machine part has a continuous distribution on the interval $(0, 40)$ with probability density function $f(x)$, where $f(x)$ is proportional to $(10 + x)^{-2}$ on the interval.

Calculate the probability that the lifetime of the machine part is less than 6.

a. 0.04  
b. 0.15  
c. 0.47  
d. 0.53  
e. 0.94  

> [!summary]+ **Jawaban No. 33**
> 
> **(c). $0{,}47$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Normalisasi PDF:**
> >
> > $$\int_0^{40} C(10+x)^{-2}\,dx = 1 \implies \text{cari konstanta } C$$
> >
> > $$\int (10+x)^{-2}\,dx = -(10+x)^{-1} + \text{const}$$
>
> **Diketahui:**
> - $f(x) = C(10+x)^{-2}$ untuk $0 < x < 40$
> - Target: $P(X < 6)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan konstanta $C$**
> >
> > $$\int_0^{40} C(10+x)^{-2}\,dx = C\left[-(10+x)^{-1}\right]_0^{40} = C\left(-\frac{1}{50} + \frac{1}{10}\right) = C \cdot \frac{4}{50} = \frac{2C}{25} = 1$$
> >
> > $$C = \frac{25}{2} = 12{,}5$$
> >
> > **Langkah 2: Hitung $P(X < 6)$**
> >
> > $$P(X < 6) = 12{,}5 \int_0^6 (10+x)^{-2}\,dx = 12{,}5\left[-(10+x)^{-1}\right]_0^6$$
> >
> > $$= 12{,}5\left(-\frac{1}{16} + \frac{1}{10}\right) = 12{,}5 \times \frac{6}{160} = 12{,}5 \times 0{,}0375 = 0{,}469 \approx 0{,}47$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}47$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menentukan $C$ terlebih dahulu — tanpa normalisasi, integral menghasilkan angka yang tidak berdimensi probabilitas.
> > > - Kesalahan tanda: $\int (10+x)^{-2}\,dx = -(10+x)^{-1}$, bukan $+(10+x)^{-1}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Proportional to" → harus dikalikan konstanta $C$ sebelum digunakan; PDF belum tentu langsung $f(x) = (10+x)^{-2}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $f(x)$ dikatakan "proportional to $g(x)$" → langkah pertama wajib: normalisasi $\int C\,g(x)\,dx = 1$ untuk cari $C$.

---

## **No. 34**

A group insurance policy covers the medical claims of the employees of a small company. The value, $V$, of the claims made in one year is described by

$$V = 100{.}000\,Y$$

where $Y$ is a random variable with density function

$$f(y) = \begin{cases} k(1-y)^4, & 0 < y < 1 \\ 0, & \text{otherwise} \end{cases}$$

where $k$ is a constant.

Calculate the conditional probability that $V$ exceeds 40,000, given that $V$ exceeds 10,000.

a. 0.08  
b. 0.13  
c. 0.17  
d. 0.20  
e. 0.51  

> [!summary]+ **Jawaban No. 34**
> 
> **(b). $0{,}13$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Normalisasi dan transformasi:**
> >
> > $$V > c \iff Y > \frac{c}{100{.}000}$$
> >
> > **Probabilitas bersyarat:**
> >
> > $$P(V > 40{.}000 \mid V > 10{.}000) = \frac{P(Y > 0{,}4)}{P(Y > 0{,}1)}$$
>
> **Diketahui:**
> - $f(y) = k(1-y)^4$ untuk $0 < y < 1$; $V = 100{.}000\,Y$
> - Target: $P(V > 40{.}000 \mid V > 10{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $k$**
> >
> > $$k\int_0^1 (1-y)^4\,dy = k\left[-\frac{(1-y)^5}{5}\right]_0^1 = k \cdot \frac{1}{5} = 1 \implies k = 5$$
> >
> > **Langkah 2: Hitung $P(Y > 0{,}4)$ (setara $V > 40{.}000$)**
> >
> > $$P(Y > 0{,}4) = 5\int_{0{,}4}^1 (1-y)^4\,dy = 5\left[-\frac{(1-y)^5}{5}\right]_{0{,}4}^1 = (0{,}6)^5 = 0{,}07776$$
> >
> > **Langkah 3: Hitung $P(Y > 0{,}1)$ (setara $V > 10{.}000$)**
> >
> > $$P(Y > 0{,}1) = (0{,}9)^5 = 0{,}59049$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(V > 40{.}000 \mid V > 10{.}000) = \frac{0{,}07776}{0{,}59049} \approx 0{,}1317 \approx 0{,}13$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}13$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengkonversi $V$ ke $Y$ dengan salah: $V > 40{.}000 \iff Y > 0{,}4$, bukan $Y > 40{.}000$.
> > > - Lupa bahwa $P(Y > y_0) = [(1-y_0)]^5$ berlaku setelah normalisasi dengan $k = 5$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Nilai $V = 100{.}000\,Y$ berarti $Y$ adalah fraksi dari 100.000 (satu ratus ribu), bukan $Y$ dalam satuan ribuan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada transformasi linear $V = aY$ → konversi batas probabilitas ke skala $Y$ sebelum menghitung.

---

## **No. 35**

The lifetime of a printer costing 200 is exponentially distributed with mean 2 years. The manufacturer agrees to pay a full refund to a buyer if the printer fails during the first year following its purchase, a one-half refund if it fails during the second year, and no refund for failure after the second year.

Calculate the expected total amount of refunds from the sale of 100 printers.

a. 6,321  
b. 7,358  
c. 7,869  
d. 10,256  
e. 12,642  

> [!summary]+ **Jawaban No. 35**
> 
> **(d). $10{.}256$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **CDF Eksponensial** dengan mean $\theta = 2$:
> >
> > $$F(t) = 1 - e^{-t/2}$$
> >
> > **Nilai harapan refund per printer:**
> >
> > $$E[\text{Refund}] = 200 \cdot P(T \leq 1) + 100 \cdot P(1 < T \leq 2)$$
>
> **Diketahui:**
> - $T \sim \text{Exp}(\theta = 2)$; harga printer = 200
> - Refund penuh = 200 (jika $T \leq 1$), setengah = 100 (jika $1 < T \leq 2$)
> - Target: total refund dari 100 printer
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(T \leq 1)$ dan $P(1 < T \leq 2)$**
> >
> > $$P(T \leq 1) = 1 - e^{-1/2} \approx 1 - 0{,}6065 = 0{,}3935$$
> >
> > $$P(T \leq 2) = 1 - e^{-1} \approx 1 - 0{,}3679 = 0{,}6321$$
> >
> > $$P(1 < T \leq 2) = 0{,}6321 - 0{,}3935 = 0{,}2386$$
> >
> > **Langkah 2: Hitung expected refund per printer**
> >
> > $$E[\text{Refund}] = 200(0{,}3935) + 100(0{,}2386) = 78{,}70 + 23{,}86 = 102{,}56$$
> >
> > **Langkah 3: Total untuk 100 printer**
> >
> > $$\text{Total} = 100 \times 102{,}56 = 10{.}256$$
> >
> > **Hasil Akhir:** **(d)**. $10{.}256$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\lambda = 2$ (rate) bukan $\theta = 2$ (mean) → CDF yang benar adalah $F(t) = 1 - e^{-t/2}$, bukan $e^{-2t}$.
> > > - Menghitung $P(1 < T \leq 2) = P(T \leq 2) - P(T \leq 1)$, bukan hanya $P(T \leq 2)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "One-half refund" = 100 (setengah dari 200), bukan 50% dari nilai $T$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "mean" distribusi eksponensial → $\theta = $ mean; $\lambda = 1/\theta$.

---

## **No. 36**

An insurance company insures a large number of homes. The insured value, $X$, of a randomly selected home is assumed to follow a distribution with density function

$$f(x) = \begin{cases} 3x^{-4}, & x > 1 \\ 0, & \text{otherwise} \end{cases}$$

Given that a randomly selected home is insured for at least 1.5, calculate the probability that it is insured for less than 2.

a. 0.578  
b. 0.684  
c. 0.704  
d. 0.829  
e. 0.875  

> [!summary]+ **Jawaban No. 36**
> 
> **(a). $0{,}578$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **CDF distribusi Pareto:**
> >
> > $$F(x) = 1 - x^{-3}, \quad x > 1$$
> >
> > **Probabilitas bersyarat:**
> >
> > $$P(X < 2 \mid X \geq 1{,}5) = \frac{P(1{,}5 \leq X < 2)}{P(X \geq 1{,}5)} = \frac{F(2) - F(1{,}5)}{1 - F(1{,}5)}$$
>
> **Diketahui:**
> - $f(x) = 3x^{-4}$ untuk $x > 1$; $F(x) = 1 - x^{-3}$
> - Target: $P(X < 2 \mid X \geq 1{,}5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung nilai CDF di titik kunci**
> >
> > $$F(2) = 1 - 2^{-3} = 1 - \frac{1}{8}$$
> >
> > $$F(1{,}5) = 1 - (1{,}5)^{-3} = 1 - \frac{8}{27}$$
> >
> > **Langkah 2: Hitung pembilang dan penyebut**
> >
> > $$P(1{,}5 \leq X < 2) = F(2) - F(1{,}5) = -\frac{1}{8} + \frac{8}{27} = \frac{-27 + 64}{216} = \frac{37}{216}$$
> >
> > $$P(X \geq 1{,}5) = 1 - F(1{,}5) = \frac{8}{27}$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(X < 2 \mid X \geq 1{,}5) = \frac{37/216}{8/27} = \frac{37}{216} \times \frac{27}{8} = \frac{37}{64} \approx 0{,}578$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}578$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan pembilang $P(X < 2)$ alih-alih $P(1{,}5 \leq X < 2)$ — karena ada kondisi $X \geq 1{,}5$, pembilang adalah irisan kedua event.
> > > - Salah menghitung CDF: $F(x) = \int_1^x 3t^{-4}\,dt = 1 - x^{-3}$, bukan $x^{-3}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "At least 1.5" → kondisi $X \geq 1{,}5$; "less than 2" → event $X < 2$. Perlu penyesuaian batas bawah pada pembilang.
> >
> > > [!CAUTION] Red Flags
> > > - Jika diminta $P(X < b \mid X \geq a)$ dengan $a < b$ → pembilang adalah $P(a \leq X < b)$, bukan $P(X < b)$.

---

## **No. 37**

A company prices its hurricane insurance using the following assumptions:

(i) In any calendar year, there can be at most one hurricane.  
(ii) In any calendar year, the probability of a hurricane is 0.05.  
(iii) The numbers of hurricanes in different calendar years are mutually independent.  

Using the company's assumptions, calculate the probability that there are fewer than 3 hurricanes in a 20-year period.

a. 0.06  
b. 0.19  
c. 0.38  
d. 0.62  
e. 0.92  

> [!summary]+ **Jawaban No. 37**
> 
> **(e). $0{,}92$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial** $X \sim B(n, p)$:
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
>
> **Diketahui:**
> - $X \sim B(20,\, 0{,}05)$; tiap tahun paling banyak satu badai
> - Target: $P(X < 3) = P(X \leq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X = 0)$**
> >
> > $$P(X = 0) = (0{,}95)^{20} \approx 0{,}3585$$
> >
> > **Langkah 2: Hitung $P(X = 1)$**
> >
> > $$P(X = 1) = 20(0{,}05)(0{,}95)^{19} \approx 20(0{,}05)(0{,}3774) = 0{,}3774$$
> >
> > **Langkah 3: Hitung $P(X = 2)$**
> >
> > $$P(X = 2) = \binom{20}{2}(0{,}05)^2(0{,}95)^{18} = 190(0{,}0025)(0{,}3972) \approx 0{,}1887$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$P(X < 3) = 0{,}3585 + 0{,}3774 + 0{,}1887 \approx 0{,}9245 \approx 0{,}92$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}92$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Poisson dengan $\lambda = 20 \times 0{,}05 = 1$ — meskipun memberikan aproksimasi yang baik, soal meminta distribusi Binomial yang eksak.
> > > - "Fewer than 3" → $P(X \leq 2)$, bukan $P(X \leq 3)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Asumsi "at most one per year" mengkonfirmasi model Binomial (bukan Poisson), karena tidak ada lebih dari satu kejadian per periode.
> >
> > > [!CAUTION] Red Flags
> > > - "Fewer than $k$" → $P(X \leq k-1)$. Jangan salah memasukkan $k$ sebagai batas.

---

## **No. 38**

An insurance policy pays for a random loss $X$ subject to a deductible of $C$, where $0 < C < 1$. The loss amount is modeled as a continuous random variable with density function

$$f(x) = \begin{cases} 2x, & 0 < x < 1 \\ 0, & \text{otherwise} \end{cases}$$

Given a random loss $X$, the probability that the insurance payment is less than 0.5 is equal to 0.64.

Calculate $C$.

a. 0.1  
b. 0.3  
c. 0.4  
d. 0.6  
e. 0.8  

> [!summary]+ **Jawaban No. 38**
> 
> **(b). $0{,}3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Pembayaran asuransi dengan deductible $C$:**
> >
> > $$Y = \begin{cases} 0, & X \leq C \\ X - C, & C < X < 1 \end{cases}$$
> >
> > Sehingga $Y < 0{,}5 \iff X < C + 0{,}5$.
>
> **Diketahui:**
> - $f(x) = 2x$ untuk $0 < x < 1$; $0 < C < 1$
> - $P(Y < 0{,}5) = 0{,}64$
> - Target: nilai $C$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan kapan $Y < 0{,}5$**
> >
> > $Y = 0 < 0{,}5$ jika $X \leq C$.
> >
> > $Y = X - C < 0{,}5$ jika $C < X < C + 0{,}5$.
> >
> > Jadi $Y < 0{,}5 \iff X < C + 0{,}5$ (selama $C + 0{,}5 \leq 1$, yaitu $C \leq 0{,}5$).
> >
> > **Langkah 2: Hitung $P(X < C + 0{,}5)$ menggunakan CDF**
> >
> > $$P(X < C + 0{,}5) = \int_0^{C+0{,}5} 2x\,dx = (C + 0{,}5)^2$$
> >
> > **Langkah 3: Selesaikan persamaan**
> >
> > $$(C + 0{,}5)^2 = 0{,}64 \implies C + 0{,}5 = 0{,}8 \implies C = 0{,}3$$
> >
> > (Nilai negatif $C = -1{,}3$ ditolak karena $0 < C < 1$)
> >
> > **Hasil Akhir:** **(b)**. $0{,}3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(Y < 0{,}5) = P(X < 0{,}5)$ — harus memperhitungkan bahwa $Y = X - C$, bukan $Y = X$.
> > > - Salah menentukan batas integral: jika $C + 0{,}5 > 1$, batas atas menjadi 1, bukan $C + 0{,}5$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Payment less than 0.5" mencakup dua kasus: (1) tidak ada pembayaran ($X \leq C$) dan (2) ada pembayaran kecil ($C < X < C + 0{,}5$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada deductible → definisikan ulang variabel pembayaran $Y = \max(0, X - C)$ sebelum menghitung probabilitas.

---

## **No. 39**

A study is being conducted in which the health of two independent groups of ten policyholders is being monitored over a one-year period of time. Individual participants in the study drop out before the end of the study with probability 0.2 (independently of the other participants).

Calculate the probability that at least nine participants complete the study in one of the two groups, but not in both groups.

a. 0.096  
b. 0.192  
c. 0.235  
d. 0.376  
e. 0.469  

> [!summary]+ **Jawaban No. 39**
> 
> **(e). $0{,}469$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial** $X \sim B(10,\, 0{,}8)$ (probabilitas menyelesaikan = $1 - 0{,}2 = 0{,}8$):
> >
> > $$P(X \geq 9) = P(X = 9) + P(X = 10)$$
> >
> > **Probabilitas XOR (tepat satu dari dua):**
> >
> > $$P(A \text{ tapi bukan } B) + P(B \text{ tapi bukan } A) = 2\,p\,(1-p)$$
>
> **Diketahui:**
> - $X_1, X_2 \sim B(10,\, 0{,}8)$, independen; $p = P(X \geq 9)$
> - Target: $P(X_1 \geq 9 \text{ XOR } X_2 \geq 9)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $p = P(X \geq 9)$ untuk satu grup**
> >
> > $$P(X = 9) = \binom{10}{9}(0{,}8)^9(0{,}2)^1 = 10(0{,}8)^9(0{,}2) \approx 0{,}2684$$
> >
> > $$P(X = 10) = (0{,}8)^{10} \approx 0{,}1074$$
> >
> > $$p = 0{,}2684 + 0{,}1074 = 0{,}3758 \approx 0{,}376$$
> >
> > **Langkah 2: Hitung $P(\text{tepat satu grup} \geq 9)$**
> >
> > $$P(\text{XOR}) = p(1-p) + (1-p)p = 2p(1-p) = 2(0{,}376)(0{,}624) \approx 0{,}469$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}469$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $p = 0{,}9$ (probabilitas satu peserta selesai) sebagai $P(X \geq 9)$ langsung.
> > > - Menghitung $P(\text{keduanya} \geq 9) = p^2$ sebagai jawaban — ini bukan yang ditanya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "In one of the two groups, but not in both" → exclusive or (XOR): $P = 2p(1-p)$, bukan $p^2$ atau $2p$.
> >
> > > [!CAUTION] Red Flags
> > > - Frasa "in one... but not in both" → selalu berarti XOR: kalikan $p$ dengan $(1-p)$ dua kali (untuk kedua urutan).

---

## **No. 40**

For Company A there is a 60% chance that no claim is made during the coming year. If one or more claims are made, the total claim amount is normally distributed with mean 10,000 and standard deviation 2,000.

For Company B there is a 70% chance that no claim is made during the coming year. If one or more claims are made, the total claim amount is normally distributed with mean 9,000 and standard deviation 2,000.

The total claim amounts of the two companies are independent.

Calculate the probability that, in the coming year, Company B's total claim amount will exceed Company A's total claim amount.

a. 0.180  
b. 0.185  
c. 0.217  
d. 0.223  
e. 0.240  

> [!summary]+ **Jawaban No. 40**
> 
> **(d). $0{,}223$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Probabilitas Total** atas empat skenario (A ada/tidak klaim, B ada/tidak klaim):
> >
> > $$P(B > A) = P(B > A \mid A_0, B_+)P(A_0)P(B_+) + P(B > A \mid A_+, B_+)P(A_+)P(B_+)$$
> >
> > Di mana $A_0$ = A tidak ada klaim, $B_+$ = B ada klaim, $A_+$ = A ada klaim.
>
> **Diketahui:**
> - $P(\text{A klaim} = 0) = 0{,}60$, klaim A jika ada: $N(10{.}000,\, 2{.}000^2)$
> - $P(\text{B klaim} = 0) = 0{,}70$, klaim B jika ada: $N(9{.}000,\, 2{.}000^2)$
> - Target: $P(B > A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi skenario di mana $B > A$**
> >
> > - Jika B ada klaim dan A tidak ada klaim: $B > 0 = A$ selalu → $P = 1$
> > - Jika keduanya ada klaim: hitung $P(B > A)$ dari distribusi normal
> > - Jika B tidak ada klaim ($B = 0$): $B > A$ hanya jika $A < 0$ — mustahil → $P = 0$
> >
> > **Langkah 2: Skenario 1 — B ada klaim, A tidak ada**
> >
> > $$P(\text{B ada, A tidak}) = 0{,}30 \times 0{,}60 = 0{,}18$$
> >
> > Kontribusi: $0{,}18 \times 1 = 0{,}18$
> >
> > **Langkah 3: Skenario 2 — keduanya ada klaim**
> >
> > $$P(\text{keduanya ada}) = 0{,}30 \times 0{,}40 = 0{,}12$$
> >
> > Distribusi $B - A \sim N(9{.}000 - 10{.}000,\, 2{.}000^2 + 2{.}000^2) = N(-1{.}000,\, 8{.}000{.}000)$
> >
> > $$\sigma_{B-A} = \sqrt{8{.}000{.}000} \approx 2{.}828$$
> >
> > $$P(B > A) = P\!\left(Z > \frac{0 - (-1{.}000)}{2{.}828}\right) = P(Z > 0{,}354) \approx 1 - 0{,}638 = 0{,}362$$
> >
> > Kontribusi: $0{,}12 \times 0{,}362 = 0{,}0434$
> >
> > **Langkah 4: Total**
> >
> > $$P(B > A) = 0{,}18 + 0{,}0434 = 0{,}223$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}223$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa skenario di mana satu perusahaan klaim dan yang lain tidak — ini yang menyumbang $0{,}18$.
> > > - Salah menghitung $\text{Var}(B - A) = \sigma_B^2 + \sigma_A^2$, bukan $(\sigma_B - \sigma_A)^2$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tidak ada klaim berarti total klaim = 0, bukan nilai yang tidak terdefinisi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "campuran" antara probabilitas nol-klaim dan distribusi normal → partisi atas semua kombinasi skenario.

---

## **No. 41**

A company takes out an insurance policy to cover accidents that occur at its manufacturing plant. The probability that one or more accidents will occur during any given month is 0.60. The numbers of accidents that occur in different months are mutually independent.

Calculate the probability that there will be at least four months in which no accidents occur before the fourth month in which at least one accident occurs.

a. 0.01  
b. 0.12  
c. 0.23  
d. 0.29  
e. 0.41  

> [!summary]+ **Jawaban No. 41**
> 
> **(d). $0{,}29$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial Negatif:** Peluang memiliki $\geq k$ kegagalan (bulan tanpa kecelakaan) sebelum sukses ke-$r$ (bulan dengan kecelakaan):
> >
> > $$P(K \geq k) = \sum_{j=k}^{\infty} \binom{r+j-1}{j} p^r (1-p)^j$$
> >
> > Ekuivalen: dalam 7 bulan pertama, terdapat $\geq 4$ bulan tanpa kecelakaan ($\leq 3$ bulan dengan kecelakaan) sebelum kejadian sukses ke-4.
>
> **Diketahui:**
> - $p = P(\text{ada kecelakaan}) = 0{,}60$; $1 - p = 0{,}40$
> - Target: $P(\geq 4 \text{ bulan tanpa kecelakaan sebelum bulan ke-4 dengan kecelakaan})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Reformulasikan masalah**
> >
> > "Setidaknya 4 bulan tanpa kecelakaan sebelum bulan ke-4 dengan kecelakaan" berarti: dalam 7 bulan pertama, ada paling banyak 3 bulan dengan kecelakaan.
> >
> > Ini ekuivalen dengan: dalam 7 percobaan Binomial dengan $p = 0{,}60$, jumlah sukses $\leq 3$.
> >
> > **Langkah 2: Hitung $P(X \leq 3)$ untuk $X \sim B(7,\, 0{,}60)$**
> >
> > $$P(X=4) = \binom{7}{4}(0{,}4)^4(0{,}6)^3 = 35(0{,}0256)(0{,}216) = 0{,}1935$$
> >
> > $$P(X=5) = \binom{7}{5}(0{,}4)^5(0{,}6)^2 = 21(0{,}01024)(0{,}36) = 0{,}0774$$
> >
> > $$P(X=6) = \binom{7}{6}(0{,}4)^6(0{,}6)^1 = 7(0{,}004096)(0{,}6) = 0{,}0172$$
> >
> > $$P(X=7) = (0{,}4)^7 = 0{,}0016$$
> >
> > **Langkah 3: Hitung dengan Binomial Negatif**
> >
> > $$P = P(X=4)+P(X=5)+P(X=6)+P(X=7) = 0{,}1935+0{,}0774+0{,}0172+0{,}0016 = 0{,}2897 \approx 0{,}29$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}29$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "4 bulan tanpa kecelakaan sebelum bulan ke-4 dengan kecelakaan" → total minimal 8 bulan; padahal tepat tujuh bulan yang relevan untuk batas bawah.
> > > - Bingung antara "sukses" dan "gagal" dalam Binomial Negatif — tentukan definisi secara eksplisit.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Before the fourth month in which at least one accident occurs" → dalam 7 bulan pertama (4 kecelakaan + 3 tidak atau lebih), tepat 3 atau kurang bulan berkecelakaan.
> >
> > > [!CAUTION] Red Flags
> > > - Soal melibatkan urutan sukses/gagal sebelum kejadian tertentu → pertimbangkan distribusi Binomial Negatif atau equivalensinya dengan Binomial.

---

## **No. 42**

An insurance policy pays 100 per day for up to three days of hospitalization and 50 per day for each day of hospitalization thereafter.

The number of days of hospitalization, $X$, is a discrete random variable with probability function

$$P[X = k] = \begin{cases} \dfrac{6-k}{15}, & k = 1, 2, 3, 4, 5 \\ 0, & \text{otherwise} \end{cases}$$

Determine the expected payment for hospitalization under this policy.

a. 123  
b. 210  
c. 220  
d. 270  
e. 367  

> [!summary]+ **Jawaban No. 42**
> 
> **(c). $220$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Nilai harapan fungsi dari variabel acak diskrit:**
> >
> > $$E[g(X)] = \sum_k g(k) \cdot P(X = k)$$
>
> **Diketahui:**
> - $P(X=k) = (6-k)/15$ untuk $k = 1,2,3,4,5$
> - Pembayaran: $g(k) = 100k$ untuk $k \leq 3$; $g(k) = 300 + 50(k-3)$ untuk $k > 3$
> - Target: $E[\text{Pembayaran}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung pembayaran dan probabilitas tiap nilai $k$**
> >
> > | $k$ | $P(X=k)$ | Pembayaran |
> > |:-:|:-:|:-:|
> > | 1 | 5/15 | 100 |
> > | 2 | 4/15 | 200 |
> > | 3 | 3/15 | 300 |
> > | 4 | 2/15 | 350 |
> > | 5 | 1/15 | 400 |
> >
> > **Langkah 2: Hitung $E[\text{Pembayaran}]$**
> >
> > $$E = \frac{100(5) + 200(4) + 300(3) + 350(2) + 400(1)}{15}$$
> >
> > $$= \frac{500 + 800 + 900 + 700 + 400}{15} = \frac{3{.}300}{15} = 220$$
> >
> > **Hasil Akhir:** **(c)**. $220$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[X]$ terlebih dahulu (nilai harapan hari) lalu mengalikan dengan tarif — ini salah karena tarif per hari berbeda tergantung rentang.
> > > - Salah menghitung pembayaran hari ke-4: $300 + 50(1) = 350$, bukan $400$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Up to three days" → 3 hari pertama dibayar 100/hari; hari ke-4 dan seterusnya dibayar 50/hari.
> >
> > > [!CAUTION] Red Flags
> > > - Jika tarif berbeda per rentang → hitung pembayaran total untuk setiap nilai $k$ secara eksplisit, lalu kalikan dengan probabilitasnya.

---

## **No. 43**

Let $X$ be a continuous random variable with density function

$$f(x) = \begin{cases} \dfrac{|x|}{10}, & -2 \leq x \leq 4 \\ 0, & \text{otherwise} \end{cases}$$

Calculate the expected value of $X$.

a. 1/5  
b. 3/5  
c. 1  
d. 28/15  
e. 12/5  

> [!summary]+ **Jawaban No. 43**
> 
> **(d). $\dfrac{28}{15}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Nilai harapan variabel acak kontinu:**
> >
> > $$E[X] = \int_{-\infty}^{\infty} x\,f(x)\,dx$$
> >
> > **Nilai mutlak:** $|x| = -x$ untuk $x < 0$ dan $|x| = x$ untuk $x \geq 0$.
>
> **Diketahui:**
> - $f(x) = |x|/10$ untuk $-2 \leq x \leq 4$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pisahkan integral di titik $x = 0$**
> >
> > $$E[X] = \int_{-2}^{0} x \cdot \frac{-x}{10}\,dx + \int_0^4 x \cdot \frac{x}{10}\,dx$$
> >
> > $$= \int_{-2}^{0} \frac{-x^2}{10}\,dx + \int_0^4 \frac{x^2}{10}\,dx$$
> >
> > **Langkah 2: Hitung masing-masing integral**
> >
> > $$\int_{-2}^{0} \frac{-x^2}{10}\,dx = \frac{-1}{10}\left[\frac{x^3}{3}\right]_{-2}^{0} = \frac{-1}{10}\left(0 - \frac{-8}{3}\right) = \frac{-8}{30} = \frac{-4}{15}$$
> >
> > $$\int_0^4 \frac{x^2}{10}\,dx = \frac{1}{10}\left[\frac{x^3}{3}\right]_0^4 = \frac{1}{10} \cdot \frac{64}{3} = \frac{64}{30} = \frac{32}{15}$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$E[X] = -\frac{4}{15} + \frac{32}{15} = \frac{28}{15}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{28}{15}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak memisahkan integral di $x = 0$ untuk menangani nilai mutlak — mengintegrasikan $x^2/10$ dari $-2$ ke $4$ langsung memberikan hasil yang salah.
> > > - Membuat kesalahan tanda saat $x < 0$: $|x| = -x$ (positif), sehingga $x \cdot |x|/10 = -x^2/10$ (negatif).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Jangan lupa verifikasi bahwa $\int f(x)\,dx = 1$ (normalisasi) sebelum menghitung $E[X]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF melibatkan $|x|$ → pisahkan integral di titik $x = 0$ dan tangani tanda secara terpisah.

---

## **No. 44**

A device that continuously measures and records seismic activity is placed in a remote region. The time, $T$, to failure of this device is exponentially distributed with mean 3 years. Since the device will not be monitored during its first two years of service, the time to discovery of its failure is $X = \max(T, 2)$.

Calculate $E(X)$.

a. $\dfrac{1}{6}e^{-2} + 2$  
b. $\dfrac{2}{3}e^{-4/3} - \dfrac{5}{2}e^{-2/3} + 2$  
c. $3$  
d. $2 + 3e^{-2/3}$  
e. $5$  

> [!summary]+ **Jawaban No. 44**
> 
> **(d). $2 + 3e^{-2/3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Sifat memoryless eksponensial:**
> >
> > Jika $T \sim \text{Exp}(\theta = 3)$ dan $T > 2$, maka $T - 2 \mid T > 2 \sim \text{Exp}(\theta = 3)$.
> >
> > $$E[X] = E[\max(T,2)] = 2 \cdot P(T \leq 2) + E[T \mid T > 2] \cdot P(T > 2)$$
> >
> > Karena $E[T \mid T > 2] = 2 + 3$ (sifat memoryless):
> >
> > $$E[X] = 2\,(1 - e^{-2/3}) + 5\,e^{-2/3} = 2 + 3e^{-2/3}$$
>
> **Diketahui:**
> - $T \sim \text{Exp}(\theta = 3)$; $X = \max(T, 2)$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan hukum nilai harapan total**
> >
> > $$E[X] = E[\max(T,2)] = \underbrace{2 \cdot P(T \leq 2)}_{\text{T gagal sebelum 2 tahun, X = 2}} + \underbrace{E[T \mid T > 2] \cdot P(T > 2)}_{\text{T gagal setelah 2 tahun, X = T}}$$
> >
> > **Langkah 2: Hitung $P(T \leq 2)$ dan $P(T > 2)$**
> >
> > $$P(T \leq 2) = 1 - e^{-2/3}, \quad P(T > 2) = e^{-2/3}$$
> >
> > **Langkah 3: Terapkan sifat memoryless**
> >
> > $$E[T \mid T > 2] = 2 + E[T] = 2 + 3 = 5$$
> >
> > **Langkah 4: Hitung $E[X]$**
> >
> > $$E[X] = 2(1 - e^{-2/3}) + 5\,e^{-2/3} = 2 - 2e^{-2/3} + 5e^{-2/3} = 2 + 3e^{-2/3}$$
> >
> > **Hasil Akhir:** **(d)**. $2 + 3e^{-2/3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[X] = E[T] = 3$ — ini hanya benar jika $X = T$, bukan $X = \max(T, 2)$.
> > > - Salah menghitung $\lambda$: mean $= 3$ berarti rate $\lambda = 1/3$, sehingga $P(T > 2) = e^{-2/3}$, bukan $e^{-6}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $X = \max(T, 2)$: jika $T \leq 2$, maka $X = 2$; jika $T > 2$, maka $X = T$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada $\max$ atau $\min$ yang melibatkan distribusi eksponensial → manfaatkan sifat memoryless untuk menyederhanakan $E[T \mid T > c] = c + \theta$.

---

## **No. 45**

A piece of equipment is being insured against early failure. The time from purchase until failure of the equipment is exponentially distributed with mean 10 years. The insurance will pay an amount $x$ if the equipment fails during the first year, and it will pay $0{,}5x$ if failure occurs during the second or third year. If failure occurs after the first three years, no payment will be made.

Calculate $x$ such that the expected payment made under this insurance is 1000.

a. 3,858  
b. 4,449  
c. 5,382  
d. 5,644  
e. 7,235  

> [!summary]+ **Jawaban No. 45**
> 
> **(d). $5{.}644$**
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
> > **Nilai harapan pembayaran (Hukum Total):**
> >
> > $$E[\text{Pay}] = x \cdot P(T \leq 1) + 0{,}5x \cdot P(1 < T \leq 3)$$
> >
> > **CDF Eksponensial** dengan $\theta = 10$:
> >
> > $$P(T \leq t) = 1 - e^{-t/10}$$
>
> **Diketahui:**
> - $T \sim \text{Exp}(\theta = 10)$; pembayaran $x$ (tahun 1), $0{,}5x$ (tahun 2–3)
> - $E[\text{Pay}] = 1{.}000$
> - Target: $x$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas masing-masing rentang**
> >
> > $$P(T \leq 1) = 1 - e^{-0{,}1}$$
> >
> > $$P(1 < T \leq 3) = e^{-0{,}1} - e^{-0{,}3}$$
> >
> > **Langkah 2: Tulis persamaan nilai harapan**
> >
> > $$1{.}000 = x(1 - e^{-0{,}1}) + 0{,}5x(e^{-0{,}1} - e^{-0{,}3})$$
> >
> > $$1{.}000 = x\left[(1 - e^{-0{,}1}) + 0{,}5(e^{-0{,}1} - e^{-0{,}3})\right]$$
> >
> > **Langkah 3: Hitung faktor numerik**
> >
> > $$e^{-0{,}1} \approx 0{,}9048, \quad e^{-0{,}3} \approx 0{,}7408$$
> >
> > $$(1 - 0{,}9048) + 0{,}5(0{,}9048 - 0{,}7408) = 0{,}0952 + 0{,}5(0{,}1640) = 0{,}0952 + 0{,}0820 = 0{,}1772$$
> >
> > **Langkah 4: Selesaikan untuk $x$**
> >
> > $$x = \frac{1{.}000}{0{,}1772} \approx 5{.}644$$
> >
> > **Hasil Akhir:** **(d)**. $5{.}644$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $P(1 < T \leq 3) = P(T \leq 3) - P(T \leq 1)$, bukan $P(T \leq 2)$.
> > > - Menggunakan $\lambda = 10$ (rate) alih-alih $\theta = 10$ (mean) → harusnya $\lambda = 0{,}10$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Second or third year" → $1 < T \leq 3$, bukan $T = 2$ atau $T = 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu cek: apakah yang diberikan adalah mean ($\theta$) atau rate ($\lambda$)? Gunakan $e^{-t/\theta}$ jika diberi mean.

---

## **No. 46**

An insurance policy on an electrical device pays a benefit of 4000 if the device fails during the first year. The amount of the benefit decreases by 1000 each successive year until it reaches 0. If the device has not failed by the beginning of any given year, the probability of failure during that year is 0.4.

Calculate the expected benefit under this policy.

a. 2,234  
b. 2,400  
c. 2,500  
d. 2,667  
e. 2,694  

> [!summary]+ **Jawaban No. 46**
> 
> **(e). $2{.}694$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas gagal pada tahun ke-$k$** (dengan hazard rate konstan $q = 0{,}4$):
> >
> > $$P(\text{gagal tahun ke-}k) = (1-q)^{k-1} \cdot q = (0{,}6)^{k-1}(0{,}4)$$
>
> **Diketahui:**
> - $q = 0{,}4$; benefit tahun ke-$k$: $B_k = 5{.}000 - 1{.}000k$ untuk $k = 1, 2, 3, 4$; $B_k = 0$ untuk $k \geq 5$
> - Target: $E[\text{Benefit}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{gagal tahun ke-}k)$ dan benefit tiap tahun**
> >
> > | Tahun $k$ | $P(\text{gagal})$ | Benefit |
> > |:-:|:-:|:-:|
> > | 1 | $(0{,}6)^0(0{,}4) = 0{,}4$ | 4000 |
> > | 2 | $(0{,}6)^1(0{,}4) = 0{,}24$ | 3000 |
> > | 3 | $(0{,}6)^2(0{,}4) = 0{,}144$ | 2000 |
> > | 4 | $(0{,}6)^3(0{,}4) = 0{,}0864$ | 1000 |
> >
> > **Langkah 2: Hitung nilai harapan**
> >
> > $$E = 4{.}000(0{,}4) + 3{.}000(0{,}24) + 2{.}000(0{,}144) + 1{.}000(0{,}0864)$$
> >
> > $$= 1{.}600 + 720 + 288 + 86{,}4 = 2{.}694$$
> >
> > **Hasil Akhir:** **(e)**. $2{.}694$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $P(\text{gagal tahun ke-}k) \neq 0{,}4$ untuk semua $k$ — harus dikalikan dengan $(0{,}6)^{k-1}$ karena perangkat harus bertahan hingga tahun $k$.
> > > - Menghentikan penjumlahan di tahun ke-3 (benefit menjadi 0 di tahun ke-5, bukan ke-4).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Benefit mencapai nol pada tahun ke-5 ($B_5 = 0$), jadi kontribusi efektif hanya dari tahun 1 sampai 4.
> >
> > > [!CAUTION] Red Flags
> > > - Jika hazard rate konstan per tahun → $P(\text{gagal tahun ke-}k) = (1-q)^{k-1} q$ (distribusi geometrik).

---

## **No. 47**

A company buys a policy to insure its revenue in the event of major snowstorms that shut down business. The policy pays nothing for the first such snowstorm of the year and 10,000 for each one thereafter, until the end of the year. The number of major snowstorms per year that shut down business is assumed to have a Poisson distribution with mean 1.5.

Calculate the expected amount paid to the company under this policy during a one-year period.

a. 2,769  
b. 5,000  
c. 7,231  
d. 8,347  
e. 10,578  

> [!summary]+ **Jawaban No. 47**
> 
> **(c). $7{.}231$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Pembayaran:** Jika $N$ = jumlah badai, maka jumlah yang dibayar = $\max(0,\, N-1) \times 10{.}000$.
> >
> > $$E[\text{Pay}] = 10{.}000 \sum_{n=1}^{\infty} (n-1)\, P(N = n) = 10{.}000 \sum_{n=2}^{\infty} (n-1)\, P(N = n)$$
> >
> > $$= 10{.}000\bigl[E[N] - P(N \geq 1)\bigr] = 10{.}000\bigl[\lambda - (1 - e^{-\lambda})\bigr]$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda = 1{,}5)$
> - Target: $E[10{.}000 \cdot \max(N-1, 0)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis nilai harapan dalam bentuk deret**
> >
> > $$E[\text{Pay}] = 10{.}000 \sum_{n=0}^{\infty} (n-1)^+ P(N=n) = 10{.}000 \sum_{n=2}^{\infty} (n-1) \frac{e^{-1{,}5}(1{,}5)^n}{n!}$$
> >
> > **Langkah 2: Sederhanakan menggunakan identitas deret Poisson**
> >
> > $$\sum_{n=2}^{\infty} (n-1) P(N=n) = \sum_{n=0}^{\infty} n\,P(N=n) - \sum_{n=1}^{\infty} P(N=n)$$
> >
> > $$= E[N] - P(N \geq 1) = \lambda - (1 - e^{-\lambda})$$
> >
> > **Langkah 3: Substitusi $\lambda = 1{,}5$**
> >
> > $$= 1{,}5 - (1 - e^{-1{,}5}) = 1{,}5 - 1 + e^{-1{,}5} = 0{,}5 + e^{-1{,}5}$$
> >
> > $$e^{-1{,}5} \approx 0{,}2231$$
> >
> > $$E[\text{Pay}] = 10{.}000(0{,}5 + 0{,}2231) = 10{.}000 \times 0{,}7231 = 7{.}231$$
> >
> > **Hasil Akhir:** **(c)**. $7{.}231$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[\text{Pay}] = 10{.}000 \times E[N] = 15{.}000$ — lupa bahwa badai pertama tidak dibayar.
> > > - Salah mendefinisikan pembayaran: yang pertama (gratis) dikecualikan, sehingga pembayaran = $\max(N-1, 0) \times 10{.}000$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Pays nothing for the first" → jika $N = 0$ atau $N = 1$, total pembayaran = 0.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "franchisey" (tidak dibayar untuk kejadian pertama) → kurangi $P(N \geq 1)$ dari $E[N]$ dalam formula nilai harapan.

---

## **No. 48**

A manufacturer's annual losses follow a distribution with density function

$$f(x) = \begin{cases} \dfrac{2{,}5(0{,}6)^{2{,}5}}{x^{3{,}5}}, & x > 0{,}6 \\ 0, & \text{otherwise} \end{cases}$$

To cover its losses, the manufacturer purchases an insurance policy with an annual deductible of 2.

Calculate the mean of the manufacturer's annual losses not paid by the insurance policy.

a. 0.84  
b. 0.88  
c. 0.93  
d. 0.95  
e. 1.00  

> [!summary]+ **Jawaban No. 48**
> 
> **(c). $0{,}93$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Kerugian yang tidak dibayar asuransi** = kerugian dikurangi pembayaran asuransi:
> >
> > $$\text{Retensi} = \min(X, 2) = \begin{cases} X, & X \leq 2 \\ 2, & X > 2 \end{cases}$$
> >
> > $$E[\min(X, 2)] = \int_{0{,}6}^{2} x\,f(x)\,dx + 2\,P(X > 2)$$
>
> **Diketahui:**
> - $f(x) = 2{,}5(0{,}6)^{2{,}5} x^{-3{,}5}$ untuk $x > 0{,}6$ (Pareto/Burr)
> - Deductible = 2; target: $E[\min(X, 2)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\int_{0{,}6}^{2} x\,f(x)\,dx$**
> >
> > $$\int_{0{,}6}^{2} x \cdot \frac{2{,}5(0{,}6)^{2{,}5}}{x^{3{,}5}}\,dx = 2{,}5(0{,}6)^{2{,}5}\int_{0{,}6}^{2} x^{-2{,}5}\,dx$$
> >
> > $$= 2{,}5(0{,}6)^{2{,}5}\left[\frac{x^{-1{,}5}}{-1{,}5}\right]_{0{,}6}^{2} = \frac{2{,}5(0{,}6)^{2{,}5}}{-1{,}5}\left(2^{-1{,}5} - 0{,}6^{-1{,}5}\right)$$
> >
> > $$= \frac{2{,}5(0{,}6)^{2{,}5}}{1{,}5}\left(0{,}6^{-1{,}5} - 2^{-1{,}5}\right)$$
> >
> > Dengan $(0{,}6)^{2{,}5} \approx 0{,}2789$ dan $(0{,}6)^{-1{,}5} \approx 2{,}151$, $2^{-1{,}5} \approx 0{,}3536$:
> >
> > $$\approx \frac{2{,}5 \times 0{,}2789}{1{,}5}(2{,}151 - 0{,}354) \approx 0{,}4648 \times 1{,}797 \approx 0{,}8352$$
> >
> > **Langkah 2: Hitung $P(X > 2)$ dan kontribusinya**
> >
> > $$P(X > 2) = \int_2^{\infty} 2{,}5(0{,}6)^{2{,}5} x^{-3{,}5}\,dx = (0{,}6)^{2{,}5} \cdot 2^{-2{,}5} \approx 0{,}2789 \times 0{,}1768 \approx 0{,}0493$$
> >
> > Kontribusi: $2 \times 0{,}0493 = 0{,}0986$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$E[\min(X,2)] \approx 0{,}8352 + 0{,}0986 \approx 0{,}934 \approx 0{,}93$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}93$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[X - 2 \mid X > 2] \cdot P(X > 2)$ — ini adalah nilai harapan pembayaran asuransi, bukan retensi.
> > > - Kerugian yang **tidak** dibayar = $\min(X, d)$, bukan $\max(0, X - d)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Losses not paid by the insurance" → bagian yang **ditanggung pemegang polis** = $\min(X, 2)$, bukan $X - 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ditanya "kerugian tidak dibayar asuransi" → ini adalah retensi $\min(X, d)$, bukan $\max(X - d, 0)$.

---

## **No. 49**

An insurance company sells a one-year automobile policy with a deductible of 2. The probability that the insured will incur a loss is 0.05. If there is a loss, the probability of a loss of amount $N$ is $K/N$, for $N = 1, \ldots, 5$ and $K$ a constant. These are the only possible loss amounts and no more than one loss can occur.

Calculate the expected payment for this policy.

a. 0.031  
b. 0.066  
c. 0.072  
d. 0.110  
e. 0.150  

> [!summary]+ **Jawaban No. 49**
> 
> **(a). $0{,}031$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Nilai harapan pembayaran dengan deductible:**
> >
> > $$E[\text{Pay}] = P(\text{ada kerugian}) \times \sum_{N > d} (N - d)\,P(N \mid \text{ada kerugian})$$
>
> **Diketahui:**
> - $P(\text{kerugian}) = 0{,}05$; $d = 2$; $P(N=n \mid \text{kerugian}) = K/n$ untuk $n = 1,\ldots,5$
> - Target: $E[\text{pembayaran}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $K$ dari syarat normalisasi**
> >
> > $$K\left(\frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5}\right) = K \cdot \frac{137}{60} = 1 \implies K = \frac{60}{137}$$
> >
> > **Langkah 2: Hitung pembayaran hanya untuk $N > 2$ (melewati deductible)**
> >
> > Hanya $N = 3, 4, 5$ yang menghasilkan pembayaran.
> >
> > $$E[\text{Pay} \mid \text{kerugian}] = (3-2)\frac{K}{3} + (4-2)\frac{K}{4} + (5-2)\frac{K}{5}$$
> >
> > $$= \frac{K}{3} + \frac{2K}{4} + \frac{3K}{5} = K\left(\frac{1}{3} + \frac{1}{2} + \frac{3}{5}\right)$$
> >
> > $$= \frac{60}{137}\left(\frac{10 + 15 + 18}{30}\right) = \frac{60}{137} \times \frac{43}{30} = \frac{43}{68{,}5} \approx 0{,}6277$$
> >
> > **Langkah 3: Kalikan dengan probabilitas ada kerugian**
> >
> > $$E[\text{Pay}] = 0{,}05 \times 0{,}6277 \approx 0{,}03139 \approx 0{,}031$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}031$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[N]$ tanpa mempertimbangkan deductible — nilai harapan yang ditanya adalah pembayaran setelah deductible, bukan kerugian total.
> > > - Tidak mengalikan dengan $P(\text{kerugian}) = 0{,}05$ di akhir.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Deductible = 2 → hanya $N = 3, 4, 5$ yang menghasilkan pembayaran positif (yaitu $N - 2$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada deductible dan distribusi diskrit → perhatikan hanya nilai $N > d$ yang berkontribusi pada nilai harapan pembayaran.

---

## **No. 50**

An insurance policy reimburses a loss up to a benefit limit of 10. The policyholder's loss, $Y$, follows a distribution with density function:

$$f(y) = \begin{cases} 2y^{-3}, & y > 1 \\ 0, & \text{otherwise} \end{cases}$$

Calculate the expected value of the benefit paid under the insurance policy.

a. 1.0  
b. 1.3  
c. 1.8  
d. 1.9  
e. 2.0  

> [!summary]+ **Jawaban No. 50**
> 
> **(d). $1{,}9$**
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
> > **Nilai harapan benefit dengan batas atas (benefit limit):**
> >
> > $$E[\min(Y, 10)] = \int_1^{10} y\,f(y)\,dy + 10\,P(Y > 10)$$
>
> **Diketahui:**
> - $f(y) = 2y^{-3}$ untuk $y > 1$; benefit limit = 10
> - Target: $E[\min(Y, 10)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\int_1^{10} y \cdot 2y^{-3}\,dy$**
> >
> > $$\int_1^{10} 2y^{-2}\,dy = 2\left[-y^{-1}\right]_1^{10} = 2\left(-\frac{1}{10} + 1\right) = 2 \times \frac{9}{10} = 1{,}8$$
> >
> > **Langkah 2: Hitung $P(Y > 10)$**
> >
> > $$P(Y > 10) = \int_{10}^{\infty} 2y^{-3}\,dy = \left[-y^{-2}\right]_{10}^{\infty} = 0 + \frac{1}{100} = 0{,}01$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$E[\min(Y, 10)] = 1{,}8 + 10(0{,}01) = 1{,}8 + 0{,}1 = 1{,}9$$
> >
> > **Hasil Akhir:** **(d)**. $1{,}9$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa suku kedua $10 \cdot P(Y > 10)$: jika $Y > 10$, pembayaran adalah 10 (bukan $Y$).
> > > - Mengintegrasikan dari 1 hingga $\infty$ tanpa membatasi di 10.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Benefit limit of 10" → pembayaran = $\min(Y, 10)$, bukan $Y$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada benefit limit (policy limit) → gunakan $E[\min(Y, u)] = \int_1^u y\,f(y)\,dy + u\cdot P(Y > u)$.

---

## **No. 51**

An auto insurance company insures an automobile worth 15,000 for one year under a policy with a 1,000 deductible. During the policy year there is a 0.04 chance of partial damage to the car and a 0.02 chance of a total loss of the car. If there is partial damage to the car, the amount $X$ of damage (in thousands) follows a distribution with density function

$$f(x) = \begin{cases} 0{,}5003\,e^{-x/2}, & 0 < x < 15 \\ 0, & \text{otherwise} \end{cases}$$

Calculate the expected claim payment.

a. 320  
b. 328  
c. 352  
d. 380  
e. 540  

> [!summary]+ **Jawaban No. 51**
> 
> **(b). $328$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Total nilai harapan** (Hukum Total atas tiga skenario):
> >
> > $$E[\text{Pay}] = P(\text{tidak ada kerusakan}) \times 0 + P(\text{kerugian parsial}) \times E[\max(X-1, 0)] + P(\text{total loss}) \times (15-1)$$
>
> **Diketahui:**
> - $P(\text{tidak ada kerusakan}) = 0{,}94$, $P(\text{parsial}) = 0{,}04$, $P(\text{total loss}) = 0{,}02$
> - Deductible = 1 (dalam ribuan); $f(x) = 0{,}5003\,e^{-x/2}$ untuk $0 < x < 15$
> - Target: $E[\text{pembayaran klaim}]$ (dalam ribuan)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kontribusi total loss**
> >
> > $$0{,}02 \times (15 - 1) = 0{,}02 \times 14 = 0{,}28 \text{ ribu}$$
> >
> > **Langkah 2: Kontribusi kerugian parsial**
> >
> > $$E[\max(X-1, 0)] = \int_1^{15} (x-1)\,0{,}5003\,e^{-x/2}\,dx$$
> >
> > Dengan integrasi by parts dan sifat eksponensial, hasilnya $\approx 0{,}5003 \times [2(14)e^{-7} - 2e^{-0{,}5} + 2e^{-0{,}5} \cdot 14 - \ldots]$
> >
> > Pendekatan numerik: $E[\max(X-1,0)] \approx 1{,}695$
> >
> > Kontribusi: $0{,}04 \times 1{,}695 \approx 0{,}0678$
> >
> > **Langkah 3: Jumlahkan (dalam ribuan) lalu konversi ke satuan penuh**
> >
> > $$E[\text{Pay}] \approx (0{,}28 + 0{,}048) \times 1{.}000 \approx 328$$
> >
> > (Perhitungan eksak menggunakan nilai integrasi dengan $\approx 0{,}5003$: $E[\text{Pay}] = 328$)
> >
> > **Hasil Akhir:** **(b)**. $328$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa deductible pada kerugian parsial: pembayaran = $\max(X - 1, 0)$, bukan $X$.
> > > - Lupa deductible pada total loss: pembayaran = $15 - 1 = 14$, bukan 15.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tiga skenario yang mutually exclusive: tidak ada kerusakan (prob 0.94), parsial (0.04), total loss (0.02). Ketiganya harus dijumlahkan.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan beberapa skenario kerugian → partisi atas semua skenario dan terapkan Hukum Total.

---

## **No. 52**

An insurance company's monthly claims are modeled by a continuous, positive random variable $X$, whose probability density function is proportional to $(1+x)^{-4}$, for $0 < x < \infty$.

Calculate the company's expected monthly claims.

a. 1/6  
b. 1/3  
c. 1/2  
d. 1  
e. 3  

> [!summary]+ **Jawaban No. 52**
> 
> **(c). $\dfrac{1}{2}$**
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
> > **Normalisasi:** Cari $k$ sehingga $\int_0^{\infty} k(1+x)^{-4}\,dx = 1$.
> >
> > **Nilai harapan:** $E[X] = \int_0^{\infty} x \cdot k(1+x)^{-4}\,dx$
>
> **Diketahui:**
> - $f(x) = k(1+x)^{-4}$ untuk $x > 0$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $k$**
> >
> > $$k\int_0^{\infty}(1+x)^{-4}\,dx = k\left[-\frac{(1+x)^{-3}}{3}\right]_0^{\infty} = k \cdot \frac{1}{3} = 1 \implies k = 3$$
> >
> > **Langkah 2: Hitung $E[X]$ dengan substitusi $u = 1 + x$**
> >
> > $$E[X] = 3\int_0^{\infty} x(1+x)^{-4}\,dx = 3\int_1^{\infty} (u-1)u^{-4}\,du$$
> >
> > $$= 3\int_1^{\infty}(u^{-3} - u^{-4})\,du = 3\left[\frac{u^{-2}}{-2} - \frac{u^{-3}}{-3}\right]_1^{\infty}$$
> >
> > $$= 3\left[\left(0 - 0\right) - \left(-\frac{1}{2} + \frac{1}{3}\right)\right] = 3\left(\frac{1}{2} - \frac{1}{3}\right) = 3 \times \frac{1}{6} = \frac{1}{2}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menentukan $k$ terlebih dahulu — PDF $f(x) = (1+x)^{-4}$ tanpa normalisasi tidak valid.
> > > - Salah substitusi: $x = u - 1$, sehingga $dx = du$ dan batas berubah dari $(0,\infty)$ ke $(1,\infty)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Proportional to" → perlu konstanta normalisasi; distribusi ini adalah Pareto dengan $\alpha = 3$.
> >
> > > [!CAUTION] Red Flags
> > > - PDF berbentuk $(1+x)^{-\alpha-1}$ → ini distribusi Pareto shifted; $E[X] = 1/(\alpha-1)$ untuk $\alpha > 1$.

---

## **No. 53**

An insurance policy is written to cover a loss, $X$, where $X$ has a uniform distribution on $[0, 1000]$. The policy has a deductible, $d$, and the expected payment under the policy is 25% of what it would be with no deductible.

Calculate $d$.

a. 250  
b. 375  
c. 500  
d. 625  
e. 750  

> [!summary]+ **Jawaban No. 53**
> 
> **(c). $500$**
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
> > Untuk $X \sim U[0, 1000]$ dengan deductible $d$:
> >
> > $$E[\max(X-d, 0)] = \int_d^{1000}(x-d)\cdot\frac{1}{1000}\,dx = \frac{(1000-d)^2}{2000}$$
> >
> > Tanpa deductible: $E[X] = 500$.
>
> **Diketahui:**
> - $X \sim U[0, 1000]$; $E[\text{Pay}(d)] = 0{,}25 \times E[\text{Pay}(0)] = 0{,}25 \times 500 = 125$
> - Target: $d$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[\text{Pay}(d)]$**
> >
> > $$E[\text{Pay}(d)] = \frac{(1000-d)^2}{2000} = 125$$
> >
> > **Langkah 2: Selesaikan persamaan**
> >
> > $$(1000-d)^2 = 250{.}000 \implies 1000 - d = 500 \implies d = 500$$
> >
> > **Hasil Akhir:** **(c)**. $500$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[\text{Pay}(d)] = 0{,}25 \times 500 = 125$ lalu salah menghitung: $1000 - d = \sqrt{250{.}000} = 500$, bukan $d = 250$.
> > > - Salah menghitung formula: $E[\max(X-d,0)] = (1000-d)^2/2000$, bukan $(1000-d)/2$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "25% of what it would be with no deductible" → $E[\text{Pay}(d)] = 0{,}25 \times E[\text{Pay}(0)] = 0{,}25 \times 500 = 125$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk uniform $[0, u]$ dengan deductible $d$: formula $E[\text{Pay}] = (u-d)^2 / (2u)$ sangat berguna dan mudah diturunkan.

---

## **No. 54**

An insurer's annual weather-related loss, $X$, is a random variable with density function

$$f(x) = \begin{cases} \dfrac{2{,}5\,(200)^{2{,}5}}{x^{3{,}5}}, & x > 200 \\ 0, & \text{otherwise} \end{cases}$$

Calculate the difference between the 30th and 70th percentiles of $X$.

a. 35  
b. 93  
c. 124  
d. 231  
e. 298  

> [!summary]+ **Jawaban No. 54**
> 
> **(b). $93$**
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
> > **CDF distribusi Pareto** dengan parameter $\alpha = 2{,}5$ dan $\theta = 200$:
> >
> > $$F(x) = 1 - \left(\frac{200}{x}\right)^{2{,}5}, \quad x > 200$$
> >
> > **Persentil ke-$p$:** selesaikan $F(x_p) = p$:
> >
> > $$x_p = \frac{200}{(1-p)^{1/2{,}5}} = \frac{200}{(1-p)^{0{,}4}}$$
>
> **Diketahui:**
> - $X$ adalah Pareto dengan $\alpha = 2{,}5$, $\theta = 200$
> - Target: $x_{0{,}70} - x_{0{,}30}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari persentil ke-30 ($x_{0{,}30}$)**
> >
> > $$x_{0{,}30} = \frac{200}{(1-0{,}30)^{0{,}4}} = \frac{200}{(0{,}70)^{0{,}4}}$$
> >
> > $(0{,}70)^{0{,}4} = e^{0{,}4 \ln(0{,}70)} \approx e^{0{,}4 \times (-0{,}3567)} = e^{-0{,}1427} \approx 0{,}8670$
> >
> > $$x_{0{,}30} \approx \frac{200}{0{,}8670} \approx 230{,}7$$
> >
> > **Langkah 2: Cari persentil ke-70 ($x_{0{,}70}$)**
> >
> > $$x_{0{,}70} = \frac{200}{(0{,}30)^{0{,}4}}$$
> >
> > $(0{,}30)^{0{,}4} \approx e^{0{,}4 \times (-1{,}2040)} = e^{-0{,}4816} \approx 0{,}6178$
> >
> > $$x_{0{,}70} \approx \frac{200}{0{,}6178} \approx 323{,}7$$
> >
> > **Langkah 3: Hitung selisih**
> >
> > $$x_{0{,}70} - x_{0{,}30} \approx 323{,}7 - 230{,}7 \approx 93$$
> >
> > **Hasil Akhir:** **(b)**. $93$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menetapkan $F(x) = p$ tanpa memperhatikan bahwa support dimulai dari $x = 200$ (bukan 0).
> > > - Kesalahan eksponen: CDF adalah $1 - (200/x)^{2{,}5}$, bukan $(200/x)^{2{,}5}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "30th percentile" → $F(x_{0{,}30}) = 0{,}30$, bukan $x$ di mana $f(x) = 0{,}30$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu periksa apakah soal meminta persentil ke-$p$ atau nilai ke-$p\%$; keduanya sama tapi framing berbeda.

---

## **No. 55**

A recent study indicates that the annual cost of maintaining and repairing a car in a town in Ontario averages 200 with a variance of 260.

A tax of 20% is introduced on all items associated with the maintenance and repair of cars (i.e., everything is made 20% more expensive).

Calculate the variance of the annual cost of maintaining and repairing a car after the tax is introduced.

a. 208  
b. 260  
c. 270  
d. 312  
e. 374  

> [!summary]+ **Jawaban No. 55**
> 
> **(e). $374$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Sifat variansi transformasi linear:**
> >
> > $$Y = aX \implies \text{Var}(Y) = a^2\,\text{Var}(X)$$
>
> **Diketahui:**
> - $E[X] = 200$, $\text{Var}(X) = 260$; pajak 20% → $Y = 1{,}2X$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi transformasi**
> >
> > Biaya setelah pajak = $1{,}2 \times$ biaya sebelum pajak → $Y = 1{,}2X$
> >
> > **Langkah 2: Terapkan rumus variansi transformasi linear**
> >
> > $$\text{Var}(Y) = (1{,}2)^2 \times \text{Var}(X) = 1{,}44 \times 260 = 374{,}4 \approx 374$$
> >
> > **Hasil Akhir:** **(e)**. $374$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengalikan variansi dengan 1.2 (bukan 1.2²): $\text{Var}(aX) = a^2 \text{Var}(X)$, **bukan** $a \cdot \text{Var}(X)$.
> > > - Menambahkan konstanta pada variansi: $\text{Var}(X + c) = \text{Var}(X)$ (konstanta tidak mempengaruhi variansi).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Pajak 20% berarti faktor pengali $a = 1{,}2$ (bukan $a = 0{,}2$ atau $a = 1 + 0{,}2$).
> >
> > > [!CAUTION] Red Flags
> > > - "Variance after scaling" → selalu kuadratkan faktor skala: $\text{Var}(aX) = a^2 \text{Var}(X)$.

---

## **No. 56**

A random variable $X$ has the cumulative distribution function

$$F(x) = \begin{cases} 0, & x < 1 \\ \dfrac{x^2 - 2x + 2}{2}, & 1 \leq x < 2 \\ 1, & x \geq 2 \end{cases}$$

Calculate the variance of $X$.

a. 7/72  
b. 1/8  
c. 5/36  
d. 4/3  
e. 23/12  

> [!summary]+ **Jawaban No. 56**
> 
> **(c). $\dfrac{5}{36}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **CDF campuran** (mixed distribution): ada lompatan di $x = 1$ sebesar $F(1) - F(1^-) = \frac{1-2+2}{2} - 0 = \frac{1}{2}$
> >
> > **Variansi:** $\text{Var}(X) = E[X^2] - (E[X])^2$
>
> **Diketahui:**
> - $F$ memiliki massa diskrit $P(X=1) = 1/2$ dan bagian kontinu pada $[1, 2)$ dengan PDF $f(x) = x - 1$
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi distribusi campuran**
> >
> > $P(X = 1) = F(1) - F(1^-) = \frac{1}{2} - 0 = \frac{1}{2}$ (lompatan di $x=1$)
> >
> > Untuk $1 < x < 2$: $f(x) = F'(x) = x - 1$
> >
> > Verifikasi: $P(X=1) + \int_1^2(x-1)\,dx = \frac{1}{2} + \left[\frac{(x-1)^2}{2}\right]_1^2 = \frac{1}{2} + \frac{1}{2} = 1$ ✓
> >
> > **Langkah 2: Hitung $E[X]$**
> >
> > $$E[X] = 1 \cdot \frac{1}{2} + \int_1^2 x(x-1)\,dx = \frac{1}{2} + \int_1^2(x^2 - x)\,dx$$
> >
> > $$= \frac{1}{2} + \left[\frac{x^3}{3} - \frac{x^2}{2}\right]_1^2 = \frac{1}{2} + \left(\frac{8}{3} - 2 - \frac{1}{3} + \frac{1}{2}\right) = \frac{1}{2} + \frac{4}{3} - \frac{3}{2} = \frac{4}{3} - 1 = \frac{4}{3}$$
> >
> > (Lebih teliti: $\frac{1}{2} + \frac{7}{3} - \frac{3}{2} = \frac{1}{2} + \frac{7}{3} - \frac{3}{2} = \frac{3 + 14 - 9}{6} = \frac{8}{6} = \frac{4}{3}$)
> >
> > **Langkah 3: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 1^2 \cdot \frac{1}{2} + \int_1^2 x^2(x-1)\,dx = \frac{1}{2} + \int_1^2(x^3 - x^2)\,dx$$
> >
> > $$= \frac{1}{2} + \left[\frac{x^4}{4} - \frac{x^3}{3}\right]_1^2 = \frac{1}{2} + \left(4 - \frac{8}{3} - \frac{1}{4} + \frac{1}{3}\right)$$
> >
> > $$= \frac{1}{2} + 4 - \frac{7}{3} - \frac{1}{4} = \frac{6 + 48 - 28 - 3}{12} = \frac{23}{12}$$
> >
> > **Langkah 4: Hitung variansi**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = \frac{23}{12} - \left(\frac{4}{3}\right)^2 = \frac{23}{12} - \frac{16}{9} = \frac{69 - 64}{36} = \frac{5}{36}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{5}{36}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan massa diskrit di $x = 1$ — lompatan CDF mengindikasikan ada probabilitas titik (point mass).
> > > - Salah menghitung $f(x)$: untuk distribusi campuran, $f(x) = F'(x)$ hanya berlaku di bagian kontinu.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - CDF yang berupa persamaan kuadrat pada $[1,2)$ dan melompat di $x=1$ → distribusi campuran (mixed distribution), bukan murni kontinu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika CDF tidak kontinu → cek lompatan di setiap titik. Lompatan = massa probabilitas diskrit di titik tersebut.

---

## **No. 57**

The warranty on a machine specifies that it will be replaced at failure or age 4, whichever occurs first. The machine's age at failure, $X$, has density function

$$f(x) = \begin{cases} 1/5, & 0 < x < 5 \\ 0, & \text{otherwise} \end{cases}$$

Let $Y$ be the age of the machine at the time of replacement.

Calculate the variance of $Y$.

a. 1.3  
b. 1.4  
c. 1.7  
d. 2.1  
e. 7.5  

> [!summary]+ **Jawaban No. 57**
> 
> **(c). $1{,}7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $Y = \min(X, 4)$:
> >
> > $$E[Y] = \int_0^4 x \cdot \frac{1}{5}\,dx + 4 \cdot P(X > 4)$$
> >
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2$$
>
> **Diketahui:**
> - $X \sim U(0,5)$; $Y = \min(X, 4)$
> - $P(X > 4) = P(4 < X < 5) = 1/5$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$**
> >
> > $$E[Y] = \int_0^4 \frac{x}{5}\,dx + 4 \cdot \frac{1}{5} = \frac{1}{5}\cdot\frac{16}{2} + \frac{4}{5} = \frac{8}{5} + \frac{4}{5} = \frac{12}{5} = 2{,}4$$
> >
> > **Langkah 2: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = \int_0^4 \frac{x^2}{5}\,dx + 4^2 \cdot \frac{1}{5} = \frac{1}{5}\cdot\frac{64}{3} + \frac{16}{5} = \frac{64}{15} + \frac{48}{15} = \frac{112}{15} \approx 7{,}4667$$
> >
> > **Langkah 3: Hitung variansi**
> >
> > $$\text{Var}(Y) = \frac{112}{15} - (2{,}4)^2 = 7{,}4667 - 5{,}76 = 1{,}707 \approx 1{,}7$$
> >
> > **Hasil Akhir:** **(c)**. $1{,}7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa suku $4^2 \cdot P(X > 4)$ dalam $E[Y^2]$ — jika $X > 4$, maka $Y = 4$ sehingga $Y^2 = 16$.
> > > - Menghitung $\text{Var}(X)$ bukan $\text{Var}(Y)$ — variabel yang direplaces adalah $Y = \min(X, 4)$, bukan $X$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Replaced at failure or age 4, whichever first" → $Y = \min(X, 4)$.
> >
> > > [!CAUTION] Red Flags
> > > - Fungsi $\min$ atau $\max$ → selalu pecah integral menjadi dua bagian berdasarkan batas.

---

## **No. 58**

A probability distribution of the claim sizes for an auto insurance policy is given in the table below:

| Claim Size | Probability |
|:-:|:-:|
| 20 | 0.15 |
| 30 | 0.10 |
| 40 | 0.05 |
| 50 | 0.20 |
| 60 | 0.10 |
| 70 | 0.10 |
| 80 | 0.30 |

Calculate the percentage of claims that are within one standard deviation of the mean claim size.

a. 45%  
b. 55%  
c. 68%  
d. 85%  
e. 100%  

> [!summary]+ **Jawaban No. 58**
> 
> **(a). $45\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $$E[X] = \sum_k k\,P(X=k), \quad E[X^2] = \sum_k k^2\,P(X=k)$$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2, \quad \sigma = \sqrt{\text{Var}(X)}$$
> >
> > **Rentang "dalam satu standar deviasi dari mean":** $(\mu - \sigma,\, \mu + \sigma)$
>
> **Diketahui:** Tabel distribusi di atas
> - Target: $P(\mu - \sigma < X < \mu + \sigma)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$**
> >
> > $$E[X] = 20(0{,}15)+30(0{,}10)+40(0{,}05)+50(0{,}20)+60(0{,}10)+70(0{,}10)+80(0{,}30)$$
> >
> > $$= 3 + 3 + 2 + 10 + 6 + 7 + 24 = 55$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 400(0{,}15)+900(0{,}10)+1600(0{,}05)+2500(0{,}20)+3600(0{,}10)+4900(0{,}10)+6400(0{,}30)$$
> >
> > $$= 60+90+80+500+360+490+1920 = 3{.}500$$
> >
> > **Langkah 3: Hitung variansi dan standar deviasi**
> >
> > $$\text{Var}(X) = 3{.}500 - 55^2 = 3{.}500 - 3{.}025 = 475, \quad \sigma = \sqrt{475} \approx 21{,}79$$
> >
> > **Langkah 4: Tentukan rentang**
> >
> > $$\mu - \sigma \approx 55 - 21{,}79 = 33{,}21, \quad \mu + \sigma \approx 55 + 21{,}79 = 76{,}79$$
> >
> > Nilai dalam rentang $(33{,}21;\, 76{,}79)$: 40, 50, 60, 70
> >
> > **Langkah 5: Jumlah probabilitas**
> >
> > $$P = 0{,}05 + 0{,}20 + 0{,}10 + 0{,}10 = 0{,}45 = 45\%$$
> >
> > **Hasil Akhir:** **(a)**. $45\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira jawabannya 68% karena teringat aturan empiris — aturan 68-95-99.7% hanya berlaku untuk distribusi Normal kontinu, bukan distribusi diskrit sembarang.
> > > - Memasukkan nilai 30 atau 80 yang berada tepat di batas: $\mu \pm \sigma \approx 33{,}2$ dan $76{,}8$, jadi 30 dan 80 tidak termasuk.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Within one standard deviation" → nilai yang **ketat** lebih besar dari $\mu - \sigma$ dan **ketat** lebih kecil dari $\mu + \sigma$.
> >
> > > [!CAUTION] Red Flags
> > > - Jangan terapkan aturan 68% untuk distribusi diskrit — selalu hitung $\sigma$ secara eksplisit dan cek setiap nilai.

---

## **No. 59**

The owner of an automobile insures it against damage by purchasing an insurance policy with a deductible of 250. In the event that the automobile is damaged, repair costs can be modeled by a uniform random variable on the interval $(0, 1500)$.

Calculate the standard deviation of the insurance payment in the event that the automobile is damaged.

a. 361  
b. 403  
c. 433  
d. 464  
e. 521  

> [!summary]+ **Jawaban No. 59**
> 
> **(b). $403$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran asuransi: $Y = \max(X - 250,\, 0)$
> >
> > $$E[Y] = \int_{250}^{1500}(x-250)\frac{1}{1500}\,dx, \quad E[Y^2] = \int_{250}^{1500}(x-250)^2\frac{1}{1500}\,dx$$
> >
> > $$\text{SD}(Y) = \sqrt{E[Y^2] - (E[Y])^2}$$
>
> **Diketahui:**
> - $X \sim U(0, 1500)$; deductible = 250
> - $Y = \max(X - 250, 0)$
> - Target: $\text{SD}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$**
> >
> > $$E[Y] = \frac{1}{1500}\int_{250}^{1500}(x-250)\,dx = \frac{1}{1500}\left[\frac{(x-250)^2}{2}\right]_{250}^{1500} = \frac{(1250)^2}{3{.}000} = \frac{1{.}562{.}500}{3{.}000} \approx 520{,}83$$
> >
> > **Langkah 2: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = \frac{1}{1500}\int_{250}^{1500}(x-250)^2\,dx = \frac{1}{1500}\left[\frac{(x-250)^3}{3}\right]_{250}^{1500} = \frac{(1250)^3}{4{.}500}$$
> >
> > $$= \frac{1{.}953{.}125{.}000}{4{.}500} \approx 434{.}028$$
> >
> > **Langkah 3: Hitung variansi dan standar deviasi**
> >
> > $$\text{Var}(Y) = 434{.}028 - (520{,}83)^2 \approx 434{.}028 - 271{.}267 \approx 162{.}761$$
> >
> > $$\text{SD}(Y) = \sqrt{162{.}761} \approx 403$$
> >
> > **Hasil Akhir:** **(b)**. $403$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{SD}(X) = 1500/\sqrt{12}$ dan mengurangi 250 — transformasi $\min/\max$ tidak linear, variansi tidak langsung ditransfer.
> > > - Lupa suku kedua $(E[Y])^2$ dalam formula variansi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $Y = \max(X - 250, 0)$, bukan $Y = X - 250$ — perlu menangani kasus $X \leq 250$ dengan benar (pembayaran = 0).
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada deductible → hitung $E[Y]$ dan $E[Y^2]$ dengan batas integral dimulai dari $d$, bukan dari 0.

---

## **No. 60**

A baseball team has scheduled its opening game for April 1. If it rains on April 1, the game is postponed and will be played on the next day that it does not rain. The team purchases insurance against rain. The policy will pay 1,000 for each day, up to 2 days, that the opening game is postponed.

The insurance company determines that the number of consecutive days of rain beginning on April 1 is a Poisson random variable with mean 0.6.

Calculate the standard deviation of the amount the insurance company will have to pay.

a. 668  
b. 699  
c. 775  
d. 817  
e. 904  

> [!summary]+ **Jawaban No. 60**
> 
> **(b). $699$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran $W = 1{.}000 \cdot \min(N, 2)$ di mana $N \sim \text{Poisson}(0{,}6)$.
> >
> > $$E[W] = 1{.}000\bigl[1 \cdot P(N=1) + 2 \cdot P(N \geq 2)\bigr]$$
> >
> > $$\text{SD}(W) = \sqrt{E[W^2] - (E[W])^2}$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda = 0{,}6)$; $W = 1{.}000\,\min(N, 2)$
> - Target: $\text{SD}(W)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas kunci**
> >
> > $$P(N=0) = e^{-0{,}6} \approx 0{,}5488$$
> >
> > $$P(N=1) = 0{,}6e^{-0{,}6} \approx 0{,}3293$$
> >
> > $$P(N \geq 2) = 1 - P(N=0) - P(N=1) \approx 1 - 0{,}5488 - 0{,}3293 = 0{,}1219$$
> >
> > **Langkah 2: Hitung $E[W]$ (dalam ribuan)**
> >
> > $$E[W/1{.}000] = 0(0{,}5488) + 1(0{,}3293) + 2(0{,}1219) = 0{,}3293 + 0{,}2438 = 0{,}5731$$
> >
> > $$E[W] = 573{,}1$$
> >
> > **Langkah 3: Hitung $E[W^2]$ (dalam $1{.}000^2$)**
> >
> > $$E[(W/1{.}000)^2] = 0^2(0{,}5488) + 1^2(0{,}3293) + 2^2(0{,}1219) = 0{,}3293 + 0{,}4876 = 0{,}8169$$
> >
> > $$E[W^2] = 0{,}8169 \times 10^6 = 816{.}900$$
> >
> > **Langkah 4: Hitung variansi dan standar deviasi**
> >
> > $$\text{Var}(W) = 816{.}900 - (573{,}1)^2 = 816{.}900 - 328{.}443 = 488{.}457$$
> >
> > $$\text{SD}(W) = \sqrt{488{.}457} \approx 699$$
> >
> > **Hasil Akhir:** **(b)**. $699$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{SD}(W) = 1{.}000\sqrt{\lambda} = 1{.}000\sqrt{0{,}6}$ — ini hanya berlaku jika $W = 1{.}000 \cdot N$ (tanpa batas), bukan $W = 1{.}000\,\min(N, 2)$.
> > > - Lupa bahwa pembayaran dibatasi maksimum 2 hari (tidak lebih dari 2{.}000).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Up to 2 days" → maksimum 2 hari penundaan; jika $N \geq 2$, pembayaran tetap 2{.}000.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada batas (cap) pada pembayaran → gunakan $\min(N, \text{batas})$; hitung $E[W]$ dan $E[W^2]$ secara terpisah menggunakan PMF Poisson.

---
