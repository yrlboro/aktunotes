## **No. 241**

An investor invests 100 dollars in a stock. Each month, the investment has probability 0.5 of increasing by 1.10 dollars and probability 0.5 of decreasing by 0.90 dollars. The changes in price in different months are mutually independent.

Calculate the probability that the investment has a value greater than 91 dollars at the end of month 100.

a. $0{,}63$  
b. $0{,}75$  
c. $0{,}82$  
d. $0{,}94$  
e. $0{,}97$

> [!summary]+ **Jawaban No. 241**
>
> **(e). $0{,}97$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]], [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5–5.6; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Limit Pusat: jika $X_1, X_2, \ldots, X_n$ i.i.d. dengan $E[X_k] = \mu$ dan $\text{Var}(X_k) = \sigma^2$, maka
> >
> > $$S = \sum_{k=1}^{n} X_k \approx N(n\mu,\, n\sigma^2) \quad \text{untuk } n \text{ besar}$$
> >
> > sehingga
> >
> > $$P(S > c) \approx P\!\left(Z > \frac{c - n\mu}{\sqrt{n\sigma^2}}\right), \quad Z \sim N(0,1)$$
>
> **Diketahui:**
> - Investasi awal = 100; setiap bulan naik $+1{,}10$ (prob. $0{,}5$) atau turun $-0{,}90$ (prob. $0{,}5$)
> - Perubahan antar bulan saling independen; $n = 100$ bulan
> - Target: $P(\text{nilai akhir} > 91) = P(100 + S_{100} > 91) = P(S_{100} > -9)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X_k]$ dan $\text{Var}(X_k)$**
> >
> > Setiap $X_k$ bernilai $+1{,}10$ atau $-0{,}90$ masing-masing dengan prob. $0{,}5$.
> >
> > $$E[X_k] = 0{,}5(1{,}10) + 0{,}5(-0{,}90) = 0{,}55 - 0{,}45 = 0{,}10$$
> >
> > $$E[X_k^2] = 0{,}5(1{,}10)^2 + 0{,}5(-0{,}90)^2 = 0{,}5(1{,}21) + 0{,}5(0{,}81) = 1{,}01$$
> >
> > $$\text{Var}(X_k) = E[X_k^2] - (E[X_k])^2 = 1{,}01 - (0{,}10)^2 = 1{,}01 - 0{,}01 = 1{,}00$$
> >
> > **Langkah 2: Distribusi $S_{100} = \sum_{k=1}^{100} X_k$**
> >
> > Dengan CLT:
> >
> > $$E[S_{100}] = 100 \times 0{,}10 = 10$$
> >
> > $$\text{Var}(S_{100}) = 100 \times 1{,}00 = 100 \implies \sigma_{S} = 10$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > Nilai akhir investasi $= 100 + S_{100}$. Syarat nilai $> 91$:
> >
> > $$P(100 + S_{100} > 91) = P(S_{100} > -9)$$
> >
> > Standarisasi:
> >
> > $$P\!\left(Z > \frac{-9 - 10}{10}\right) = P(Z > -1{,}90) = \Phi(1{,}90) \approx 0{,}9713$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}97$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menyertakan nilai awal (100) saat mengonversi kondisi nilai akhir $> 91$ ke kondisi pada $S_{100}$.
> > > - Mengira $\text{Var}(X_k) = E[X_k^2]$; selalu kurangkan $(E[X_k])^2$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "nilai investasi $> 91$" bukan "$S_{100} > 91$" — perlu dikurangi nilai awal 100 terlebih dahulu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $n$ besar dan distribusi per periode tidak disebutkan → gunakan CLT.
> > > - Jika soal menyebut perubahan independen identik → langsung identifikasi sebagai setting CLT.
>
---

## **No. 242**

Let $X$ denote the loss amount sustained by an insurance company's policyholder in an auto collision. Let $Z$ denote the portion of $X$ that the insurance company will have to pay. An actuary determines that $X$ and $Z$ are independent with respective density and probability functions

$$f_X(x) = \frac{1}{8}e^{-x/8}, \quad x > 0$$

$$P(Z = z) = \begin{cases} 0{,}45, & z = 1 \\ 0{,}55, & z = 0 \end{cases}$$

Calculate the variance of the insurance company's claim payment $ZX$.

a. $13{,}0$  
b. $15{,}8$  
c. $28{,}8$  
d. $35{,}2$  
e. $44{,}6$

> [!summary]+ **Jawaban No. 242**
>
> **(e). $44{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]], [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3–4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X$ dan $Z$ independen:
> >
> > $$E[ZX] = E[Z] \cdot E[X]$$
> >
> > $$E[(ZX)^2] = E[Z^2] \cdot E[X^2]$$
> >
> > $$\text{Var}(ZX) = E[(ZX)^2] - (E[ZX])^2$$
> >
> > Untuk $X \sim \text{Exp}(\beta = 8)$ (kontinu, $x > 0$; $\beta$ = parameter scale):
> >
> > $$E[X] = 8, \quad E[X^2] = \text{Var}(X) + (E[X])^2 = 64 + 64 = 128$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\beta = 8)$: $E[X] = 8$, $\text{Var}(X) = 64$, $E[X^2] = 128$
> - $Z$: diskrit, $P(Z=1) = 0{,}45$, $P(Z=0) = 0{,}55$
> - $X$ dan $Z$ independen
> - Target: $\text{Var}(ZX)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Z]$ dan $E[Z^2]$**
> >
> > $$E[Z] = 1(0{,}45) + 0(0{,}55) = 0{,}45$$
> >
> > $$E[Z^2] = 1^2(0{,}45) + 0^2(0{,}55) = 0{,}45$$
> >
> > **Langkah 2: Hitung $E[ZX]$ menggunakan independensi**
> >
> > $$E[ZX] = E[Z] \cdot E[X] = 0{,}45 \times 8 = 3{,}6$$
> >
> > **Langkah 3: Hitung $E[(ZX)^2]$**
> >
> > $$E[(ZX)^2] = E[Z^2] \cdot E[X^2] = 0{,}45 \times 128 = 57{,}6$$
> >
> > **Langkah 4: Hitung Variansi**
> >
> > $$\text{Var}(ZX) = E[(ZX)^2] - (E[ZX])^2 = 57{,}6 - (3{,}6)^2 = 57{,}6 - 12{,}96 = 44{,}64$$
> >
> > **Hasil Akhir:** **(e)**. $44{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(ZX) = \text{Var}(Z)\cdot\text{Var}(X)$; rumus ini tidak berlaku umum — gunakan momen kedua.
> > > - Lupa bahwa $E[X^2] = \text{Var}(X) + (E[X])^2 = 64 + 64 = 128$ untuk distribusi Eksponensial.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $Z$ kontinu karena disebut "porsi"; perhatikan bahwa $Z$ diberikan sebagai distribusi diskrit dengan dua nilai.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada produk dua variabel independen → gunakan $E[Z^2]\cdot E[X^2]$ untuk momen kedua produk, bukan $E[Z]^2 \cdot E[X]^2$.
>
---

## **No. 243**

A couple takes out a medical insurance policy that reimburses them for days of work missed due to illness. Let $X$ and $Y$ denote the number of days missed during a given month by the wife and husband, respectively. The policy pays a monthly benefit of 50 times the maximum of $X$ and $Y$, subject to a benefit limit of 100. $X$ and $Y$ are independent, each with a discrete uniform distribution on the set $\{0, 1, 2, 3, 4\}$.

Calculate the expected monthly benefit for missed days of work that is paid to the couple.

a. $70$  
b. $90$  
c. $92$  
d. $95$  
e. $140$

> [!summary]+ **Jawaban No. 243**
>
> **(b). $90$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]], [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Manfaat $B = \min(50 \cdot \max(X, Y),\, 100)$.
> >
> > Karena $X, Y \in \{0,1,2,3,4\}$ independen dengan peluang sama $1/5$ masing-masing, setiap pasangan $(x,y)$ memiliki peluang $\frac{1}{25}$.
> >
> > $$E[B] = \sum_{x=0}^{4}\sum_{y=0}^{4} B(x,y) \cdot \frac{1}{25}$$
>
> **Diketahui:**
> - $X, Y \sim U\{0,1,2,3,4\}$, independen; $P(X=x) = P(Y=y) = \frac{1}{5}$
> - Manfaat $= 50 \cdot \max(X,Y)$, dibatasi maksimum 100
> - Target: $E[B]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi nilai manfaat yang mungkin**
> >
> > $\max(X,Y)$ dapat bernilai $0, 1, 2, 3, 4$, menghasilkan $50 \cdot \max = 0, 50, 100, 150, 200$. Namun manfaat dibatasi 100, sehingga nilai manfaat yang mungkin hanya: $0$, $50$, dan $100$.
> >
> > **Langkah 2: Hitung probabilitas setiap manfaat**
> >
> > - $B = 0$: hanya terjadi jika $\max(X,Y) = 0$, yaitu $(X,Y) = (0,0)$. Probabilitas $= \frac{1}{25}$.
> >
> > - $B = 50$: terjadi jika $\max(X,Y) = 1$, yaitu pasangan $(0,1), (1,0), (1,1)$. Probabilitas $= \frac{3}{25}$.
> >
> > - $B = 100$: semua kasus lainnya, probabilitas $= \frac{21}{25}$.
> >
> > **Langkah 3: Hitung nilai harapan**
> >
> > $$E[B] = 0 \cdot \frac{1}{25} + 50 \cdot \frac{3}{25} + 100 \cdot \frac{21}{25} = \frac{0 + 150 + 2100}{25} = \frac{2250}{25} = 90$$
> >
> > **Hasil Akhir:** **(b)**. $90$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menerapkan batas manfaat (cap) 100; menghitung $E[50 \cdot \max(X,Y)]$ tanpa pembatasan akan memberikan hasil berbeda.
> > > - Menghitung $E[\max(X,Y)]$ secara terpisah tanpa mengelompokkan nilai yang sudah dicap.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Subject to a benefit limit of 100" berarti manfaat aktual $= \min(50\cdot\max(X,Y), 100)$, bukan $\max + 100$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika benefit memakai "subject to maximum/limit" → selalu terapkan $\min(\cdot, \text{limit})$ sebelum menghitung ekspektasi.
>
---

## **No. 244**

The table below shows the joint probability function of a sailor's number of boating accidents and number of hospitalizations from these accidents this year.

| | **Hospitalizations** | | | |
|:-:|:-:|:-:|:-:|:-:|
| **Accidents** | **0** | **1** | **2** | **3** |
| **0** | 0.700 | | | |
| **1** | 0.150 | 0.050 | | |
| **2** | 0.060 | 0.020 | 0.010 | |
| **3** | 0.005 | 0.002 | 0.002 | 0.001 |

Calculate the sailor's expected number of hospitalizations from boating accidents this year.

a. $0{,}085$  
b. $0{,}099$  
c. $0{,}410$  
d. $1{,}000$  
e. $1{,}500$

> [!summary]+ **Jawaban No. 244**
>
> **(b). $0{,}099$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi marginal variabel $H$ (hospitalisasi):
> >
> > $$p_H(h) = \sum_{a} p(a, h)$$
> >
> > Nilai harapan:
> >
> > $$E[H] = \sum_{h=0}^{3} h \cdot p_H(h)$$
>
> **Diketahui:**
> - Tabel distribusi gabungan $(A, H)$ diberikan
> - Target: $E[H]$ (marginal atas $H$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung distribusi marginal $H$ (jumlahkan kolom)**
> >
> > $$p_H(0) = 0{,}700 + 0{,}150 + 0{,}060 + 0{,}005 = 0{,}915$$
> >
> > $$p_H(1) = 0{,}050 + 0{,}020 + 0{,}002 = 0{,}072$$
> >
> > $$p_H(2) = 0{,}010 + 0{,}002 = 0{,}012$$
> >
> > $$p_H(3) = 0{,}001$$
> >
> > Verifikasi: $0{,}915 + 0{,}072 + 0{,}012 + 0{,}001 = 1{,}000$ ✓
> >
> > **Langkah 2: Hitung nilai harapan**
> >
> > $$E[H] = 0(0{,}915) + 1(0{,}072) + 2(0{,}012) + 3(0{,}001)$$
> >
> > $$= 0 + 0{,}072 + 0{,}024 + 0{,}003 = 0{,}099$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}099$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan baris (marginal $A$) bukannya kolom (marginal $H$) — pastikan kita mencari nilai harapan *hospitalisasi*, bukan *kecelakaan*.
> > > - Menggunakan distribusi gabungan langsung tanpa marginalisasi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ditanya nilai harapan satu variabel dari tabel joint → jumlahkan sepanjang dimensi variabel yang *lain* untuk mendapat distribusi marginal.
>
---

## **No. 245**

On Main Street, a driver's speed just before an accident is uniformly distributed on $[5, 20]$. Given the speed, the resulting loss from the accident is exponentially distributed with mean equal to three times the speed.

Calculate the variance of a loss due to an accident on Main Street.

a. $525$  
b. $1463$  
c. $1575$  
d. $1632$  
e. $1744$

> [!summary]+ **Jawaban No. 245**
>
> **(e). $1744$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.3 Distribusi Bersyarat]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]], [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Variansi Total:
> >
> > $$\text{Var}(X) = E[\text{Var}(X \mid S)] + \text{Var}(E[X \mid S])$$
> >
> > Untuk $X \mid S = s \sim \text{Exp}(\beta = 3s)$: $E[X \mid S] = 3S$ dan $\text{Var}(X \mid S) = (3S)^2 = 9S^2$.
> >
> > Untuk $S \sim U(5, 20)$: $E[S] = 12{,}5$, $\text{Var}(S) = \frac{(20-5)^2}{12} = \frac{225}{12} = 18{,}75$, $E[S^2] = \text{Var}(S) + (E[S])^2 = 18{,}75 + 156{,}25 = 175$.
>
> **Diketahui:**
> - $S \sim U(5, 20)$; $E[S] = 12{,}5$; $E[S^2] = 175$
> - $X \mid S = s \sim \text{Exp}(\beta = 3s)$: $E[X \mid S] = 3S$, $\text{Var}(X \mid S) = 9S^2$
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[\text{Var}(X \mid S)]$**
> >
> > $$E[\text{Var}(X \mid S)] = E[9S^2] = 9 \cdot E[S^2] = 9 \times 175 = 1575$$
> >
> > **Langkah 2: Hitung $\text{Var}(E[X \mid S])$**
> >
> > $$\text{Var}(E[X \mid S]) = \text{Var}(3S) = 9 \cdot \text{Var}(S) = 9 \times 18{,}75 = 168{,}75$$
> >
> > **Langkah 3: Gabungkan dengan Hukum Variansi Total**
> >
> > $$\text{Var}(X) = 1575 + 168{,}75 = 1743{,}75 \approx 1744$$
> >
> > **Hasil Akhir:** **(e)**. $1744$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $\text{Var}(X \mid S) = (E[X \mid S])^2 = 9S^2$ untuk distribusi Eksponensial (variansi = kuadrat mean).
> > > - Mengira $E[S^2] = (E[S])^2$; selalu gunakan $E[S^2] = \text{Var}(S) + (E[S])^2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi bersyarat bergantung pada variabel acak lain → gunakan Hukum Variansi Total (Eve's Law), bukan menghitung langsung.
>
---

## **No. 246**

Let $X$ be the annual number of hurricanes hitting Florida, and let $Y$ be the annual number of hurricanes hitting Texas. $X$ and $Y$ are independent Poisson variables with respective means 1.70 and 2.30.

Calculate $\text{Var}(X - Y \mid X + Y = 3)$.

a. $1{,}71$  
b. $1{,}77$  
c. $2{,}93$  
d. $3{,}14$  
e. $4{,}00$

> [!summary]+ **Jawaban No. 246**
>
> **(c). $2{,}93$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Jika $X \sim \text{Poisson}(\lambda_X)$ dan $Y \sim \text{Poisson}(\lambda_Y)$ independen, maka $X \mid (X + Y = n) \sim B\!\left(n,\, \frac{\lambda_X}{\lambda_X + \lambda_Y}\right)$.
> >
> > Kemudian $X - Y \mid (X+Y=3) = 2X - 3 \mid (X+Y=3)$, sehingga:
> >
> > $$\text{Var}(X - Y \mid X+Y=3) = 4\,\text{Var}(X \mid X+Y=3)$$
>
> **Diketahui:**
> - $X \sim \text{Poisson}(1{,}70)$, $Y \sim \text{Poisson}(2{,}30)$, independen
> - $\lambda_X + \lambda_Y = 4{,}00$; $p = \frac{1{,}70}{4{,}00} = 0{,}425$
> - Kondisi: $X + Y = 3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi bersyarat $X \mid (X+Y=3)$**
> >
> > Karena $X$ dan $Y$ Poisson independen, distribusi bersyarat $X \mid (X+Y=3) \sim B(3, p)$ dengan
> >
> > $$p = \frac{\lambda_X}{\lambda_X + \lambda_Y} = \frac{1{,}70}{4{,}00} = 0{,}425$$
> >
> > **Langkah 2: Variansi bersyarat $X$**
> >
> > $$\text{Var}(X \mid X+Y=3) = n \cdot p(1-p) = 3 \times 0{,}425 \times 0{,}575 = 0{,}7331$$
> >
> > **Langkah 3: Hubungkan $X - Y$ dengan $X$**
> >
> > Karena $Y = 3 - X$ ketika $X + Y = 3$:
> >
> > $$X - Y = X - (3 - X) = 2X - 3$$
> >
> > Oleh karena itu:
> >
> > $$\text{Var}(X - Y \mid X+Y=3) = \text{Var}(2X - 3 \mid X+Y=3) = 4 \cdot \text{Var}(X \mid X+Y=3)$$
> >
> > $$= 4 \times 0{,}7331 = 2{,}9325 \approx 2{,}93$$
> >
> > **Hasil Akhir:** **(c)**. $2{,}93$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(X-Y)$ tanpa kondisi, yaitu menggunakan $\text{Var}(X) + \text{Var}(Y)$ secara langsung.
> > > - Tidak memanfaatkan sifat bahwa jumlah dua Poisson independen yang dikondisikan mengikuti distribusi Binomial.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $X, Y \sim \text{Poisson}$ independen dan diminta variansi/ekspektasi bersyarat pada $X+Y=n$ → selalu gunakan sifat Binomial bersyarat.
>
---

## **No. 247**

Random variables $X$ and $Y$ have joint distribution

| | $X = 0$ | $X = 1$ | $X = 2$ |
|:-:|:-:|:-:|:-:|
| $Y = 0$ | $1/15$ | $a$ | $2/15$ |
| $Y = 1$ | $a$ | $b$ | $a$ |
| $Y = 2$ | $2/15$ | $a$ | $1/15$ |

Let $a$ be the value that minimizes the variance of $X$.

Calculate the variance of $Y$.

a. $2/5$  
b. $8/15$  
c. $16/25$  
d. $2/3$  
e. $7/10$

> [!summary]+ **Jawaban No. 247**
>
> **(a). $2/5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi marginal: $p_X(x) = \sum_y p(x,y)$.
> >
> > Variansi: $\text{Var}(X) = E[X^2] - (E[X])^2$.
> >
> > Total probabilitas: $\sum_{x,y} p(x,y) = 1$.
>
> **Diketahui:**
> - Tabel joint dengan parameter $a$ dan $b$; total prob. = 1
> - Cari $a$ yang meminimumkan $\text{Var}(X)$, lalu hitung $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi marginal $X$**
> >
> > $$p_X(0) = \frac{1}{15} + a + \frac{2}{15} = \frac{3}{15} + a = \frac{1}{5} + a$$
> >
> > $$p_X(1) = a + b + a = 2a + b$$
> >
> > $$p_X(2) = \frac{2}{15} + a + \frac{1}{15} = \frac{3}{15} + a = \frac{1}{5} + a$$
> >
> > **Langkah 2: Ekspektasi dan Variansi $X$**
> >
> > Berdasarkan simetri tabel ($p_X(0) = p_X(2)$), maka $E[X] = 1$.
> >
> > $$\text{Var}(X) = E[(X-1)^2] = (0-1)^2\!\left(\frac{1}{5}+a\right) + (1-1)^2(2a+b) + (2-1)^2\!\left(\frac{1}{5}+a\right)$$
> >
> > $$= 2\left(\frac{1}{5} + a\right) = \frac{2}{5} + 2a$$
> >
> > **Langkah 3: Minimumkan $\text{Var}(X)$**
> >
> > $\text{Var}(X) = \frac{2}{5} + 2a$ adalah fungsi linear-naik terhadap $a$. Karena $a \geq 0$ (probabilitas tidak negatif), minimum tercapai di $a = 0$.
> >
> > **Langkah 4: Hitung $\text{Var}(Y)$ dengan $a = 0$**
> >
> > Dengan $a = 0$, distribusi marginal $Y$ (yang simetris dengan $X$ dari struktur tabel) identik dengan marginal $X$:
> >
> > $$p_Y(0) = \frac{1}{5} + 0 = \frac{1}{5}, \quad p_Y(1) = 0 + b, \quad p_Y(2) = \frac{1}{5}$$
> >
> > Dari total probabilitas: $\frac{1}{15} + 0 + \frac{2}{15} + 0 + b + 0 + \frac{2}{15} + 0 + \frac{1}{15} = 1$, sehingga $b = 1 - \frac{6}{15} = \frac{3}{5}$.
> >
> > Maka $\text{Var}(Y) = \text{Var}(X)\big|_{a=0} = \frac{2}{5} + 2(0) = \frac{2}{5}$.
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{2}{5}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa tabel memiliki simetri, sehingga distribusi marginal $X$ dan $Y$ identik (ketika $a=0$).
> > > - Mengira minimisasi variansi memerlukan kalkulus; fungsi linear dalam $a$ cukup diperiksa di batas $a = 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika tabel joint simetris terhadap diagonal → cek apakah marginal $X$ dan $Y$ identik sebelum menghitung terpisah.
>
---

## **No. 248**

Let $X$ be a random variable that takes on the values $-1$, $0$, and $1$ with equal probabilities. Let $Y = X^2$.

Which of the following is true?

a. $\text{Cov}(X, Y) > 0$; the random variables $X$ and $Y$ are dependent.  
b. $\text{Cov}(X, Y) > 0$; the random variables $X$ and $Y$ are independent.  
c. $\text{Cov}(X, Y) = 0$; the random variables $X$ and $Y$ are dependent.  
d. $\text{Cov}(X, Y) = 0$; the random variables $X$ and $Y$ are independent.  
e. $\text{Cov}(X, Y) < 0$; the random variables $X$ and $Y$ are dependent.

> [!summary]+ **Jawaban No. 248**
>
> **(c). $\text{Cov}(X, Y) = 0$; $X$ dan $Y$ dependen.**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{Cov}(X, Y) = E[XY] - E[X]\cdot E[Y]$$
> >
> > Independensi mensyaratkan: $P(X = x, Y = y) = P(X = x)\cdot P(Y = y)$ untuk semua $x, y$.
> >
> > **Penting:** $\text{Cov}(X,Y) = 0$ **tidak** mengimplikasikan independensi secara umum.
>
> **Diketahui:**
> - $P(X = -1) = P(X = 0) = P(X = 1) = \frac{1}{3}$
> - $Y = X^2$, sehingga $Y \in \{0, 1\}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$, $E[Y]$, dan $E[XY]$**
> >
> > $$E[X] = \frac{1}{3}(-1) + \frac{1}{3}(0) + \frac{1}{3}(1) = 0$$
> >
> > $$E[Y] = E[X^2] = \frac{1}{3}(1) + \frac{1}{3}(0) + \frac{1}{3}(1) = \frac{2}{3}$$
> >
> > $$E[XY] = E[X \cdot X^2] = E[X^3] = \frac{1}{3}(-1)^3 + \frac{1}{3}(0)^3 + \frac{1}{3}(1)^3 = \frac{-1+0+1}{3} = 0$$
> >
> > **Langkah 2: Hitung Kovarians**
> >
> > $$\text{Cov}(X,Y) = E[XY] - E[X]\cdot E[Y] = 0 - 0 \cdot \frac{2}{3} = 0$$
> >
> > **Langkah 3: Periksa Independensi**
> >
> > Jika $X = 0$ maka $Y = 0$ pasti, sehingga $P(X=0, Y=1) = 0$.
> >
> > Namun $P(X=0)\cdot P(Y=1) = \frac{1}{3} \cdot \frac{2}{3} = \frac{2}{9} \neq 0$.
> >
> > Jadi $X$ dan $Y$ **dependen** meskipun kovariansnya nol.
> >
> > **Hasil Akhir:** **(c)**. $\text{Cov}(X,Y) = 0$; $X$ dan $Y$ dependen.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menyimpulkan independensi dari $\text{Cov} = 0$; ini hanya berlaku untuk distribusi Normal bivariat, tidak umum.
> > > - Kovarians mengukur *hubungan linear*; $Y = X^2$ adalah hubungan nonlinear sehingga kovarians bisa nol meski ada ketergantungan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Y$ merupakan fungsi deterministik dari $X$ → mereka pasti dependen, terlepas dari nilai kovariansnya.
> > > - Jika soal menanyakan independensi → selalu verifikasi definisi probabilitas joint, jangan hanya periksa kovarians.
>
---

## **No. 249**

Losses follow an exponential distribution with mean 1. Two independent losses are observed.

Calculate the expected value of the smaller loss.

a. $0{,}25$  
b. $0{,}50$  
c. $0{,}75$  
d. $1{,}00$  
e. $1{,}50$

> [!summary]+ **Jawaban No. 249**
>
> **(b). $0{,}50$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X, Y$ i.i.d. $\text{Exp}(\beta = 1)$, CDF minimum $Z = \min(X, Y)$:
> >
> > $$P(Z > z) = P(X > z)\cdot P(Y > z) = e^{-z} \cdot e^{-z} = e^{-2z}$$
> >
> > Sehingga $Z \sim \text{Exp}\!\left(\beta = \frac{1}{2}\right)$, dengan $E[Z] = \frac{1}{2}$.
>
> **Diketahui:**
> - $X, Y \sim \text{Exp}(\beta = 1)$ i.i.d.
> - $Z = \min(X, Y)$; target: $E[Z]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: CDF survival dari $Z$**
> >
> > $$P(Z > z) = P(X > z, Y > z) = P(X > z)\cdot P(Y > z) = e^{-z} \cdot e^{-z} = e^{-2z}, \quad z > 0$$
> >
> > **Langkah 2: Identifikasi distribusi $Z$**
> >
> > Survival function $e^{-2z}$ sesuai dengan $Z \sim \text{Exp}(\beta = \tfrac{1}{2})$ (rate = 2).
> >
> > **Langkah 3: Hitung nilai harapan**
> >
> > $$E[Z] = \frac{1}{2}$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}50$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[\min] = \frac{E[X]}{2} = \frac{1}{2}$ secara intuitif tanpa justifikasi; derivasi via survival function wajib ditunjukkan.
> > > - Mengira minimum dua Eksponensial masih Eksponensial dengan mean sama; mean-nya adalah $\frac{1}{n}$ dari mean asal untuk $n$ i.i.d. Eksponensial.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal minta statistik order ($\min$, $\max$) dari $n$ variabel i.i.d. Eksponensial → gunakan survival function, hasilnya selalu Eksponensial dengan rate $n\lambda$.
>
---

## **No. 250**

A delivery service owns two cars that consume 15 and 30 miles per gallon. Fuel costs 3 per gallon. On any given business day, each car travels a number of miles that is independent of the other and is normally distributed with mean 25 miles and standard deviation 3 miles.

Calculate the probability that on any given business day, the total fuel cost to the delivery service will be less than 7.

a. $0{,}13$  
b. $0{,}23$  
c. $0{,}29$  
d. $0{,}38$  
e. $0{,}47$

> [!summary]+ **Jawaban No. 250**
>
> **(b). $0{,}23$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > Kombinasi linear variabel Normal independen:
> >
> > $$C = aX + bY \implies C \sim N(aE[X] + bE[Y],\; a^2\text{Var}(X) + b^2\text{Var}(Y))$$
>
> **Diketahui:**
> - Mobil 1: 15 mpg; Mobil 2: 30 mpg; harga BBM = 3/galon
> - $X, Y \sim N(25, 9)$ i.i.d. (jarak tempuh, dalam mil)
> - Biaya total: $C = 3 \cdot \frac{X}{15} + 3 \cdot \frac{Y}{30} = 0{,}2X + 0{,}1Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspektasi dan variansi $C$**
> >
> > $$E[C] = 0{,}2(25) + 0{,}1(25) = 5 + 2{,}5 = 7{,}5$$
> >
> > $$\text{Var}(C) = (0{,}2)^2(9) + (0{,}1)^2(9) = 0{,}36 + 0{,}09 = 0{,}45$$
> >
> > $$\sigma_C = \sqrt{0{,}45} \approx 0{,}6708$$
> >
> > **Langkah 2: Standarisasi dan hitung probabilitas**
> >
> > $$P(C < 7) = P\!\left(Z < \frac{7 - 7{,}5}{0{,}6708}\right) = P(Z < -0{,}7454) \approx \Phi(-0{,}7454) \approx 0{,}23$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}23$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan efisiensi yang sama untuk kedua mobil; mobil 1 (15 mpg) mengonsumsi BBM lebih banyak per mil dibanding mobil 2 (30 mpg).
> > > - Lupa membagi jarak dengan efisiensi untuk mendapat konsumsi gallon: biaya = (mil/mpg) × harga.
> >
> > > [!CAUTION] Red Flags
> > > - Periksa satuan: "miles per gallon" → konsumsi gallon = jarak ÷ efisiensi, bukan jarak × efisiensi.
>
---

## **No. 251**

Two independent estimates are to be made on a building damaged by fire. Each estimate is normally distributed with mean $10b$ and variance $b^2$.

Calculate the probability that the first estimate is at least 20 percent higher than the second.

a. $0{,}023$  
b. $0{,}100$  
c. $0{,}115$  
d. $0{,}221$  
e. $0{,}444$

> [!summary]+ **Jawaban No. 251**
>
> **(b). $0{,}100$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > Selisih dua variabel Normal independen:
> >
> > $$W = X - cY \sim N(\mu_X - c\mu_Y,\; \sigma_X^2 + c^2\sigma_Y^2)$$
>
> **Diketahui:**
> - $X, Y \sim N(10b, b^2)$ independen (estimasi pertama dan kedua)
> - Target: $P(X \geq 1{,}2Y) = P(X - 1{,}2Y \geq 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan $W = X - 1{,}2Y$**
> >
> > $$E[W] = 10b - 1{,}2(10b) = 10b - 12b = -2b$$
> >
> > $$\text{Var}(W) = b^2 + (1{,}2)^2 b^2 = b^2(1 + 1{,}44) = 2{,}44\,b^2$$
> >
> > $$\sigma_W = b\sqrt{2{,}44}$$
> >
> > **Langkah 2: Standarisasi**
> >
> > $$P(W \geq 0) = P\!\left(Z \geq \frac{0 - (-2b)}{b\sqrt{2{,}44}}\right) = P\!\left(Z \geq \frac{2b}{b\sqrt{2{,}44}}\right) = P\!\left(Z \geq \frac{2}{\sqrt{2{,}44}}\right)$$
> >
> > $$= P\!\left(Z \geq \frac{2}{1{,}5620}\right) = P(Z \geq 1{,}280)$$
> >
> > **Langkah 3: Baca tabel Normal**
> >
> > $$P(Z \geq 1{,}280) = 1 - \Phi(1{,}280) \approx 1 - 0{,}900 = 0{,}100$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}100$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - "20% lebih tinggi" berarti $X \geq 1{,}2Y$, bukan $X \geq Y + 0{,}2$.
> > > - Parameter $b$ menghilang dalam standarisasi — ini wajar karena soal tidak memberikan nilai numerik $b$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika parameter soal tidak numerik tapi jawaban numerik tetap ada → parameter pasti saling hilang (cancel) dalam proses standarisasi.
>
---

## **No. 252**

The independent random variables $X$ and $Y$ have the same mean. The coefficients of variation of $X$ and $Y$ are 3 and 4 respectively.

Calculate the coefficient of variation of $\frac{1}{2}(X + Y)$.

a. $5/4$  
b. $7/4$  
c. $5/2$  
d. $7/2$  
e. $7$

> [!summary]+ **Jawaban No. 252**
>
> **(c). $5/2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Miller Bab 3–4; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Koefisien variasi: $\text{CV}(X) = \dfrac{\sigma_X}{\mu_X}$.
> >
> > Untuk $Z = \frac{1}{2}(X+Y)$ dengan $X, Y$ independen:
> >
> > $$E[Z] = \frac{E[X]+E[Y]}{2}, \quad \text{Var}(Z) = \frac{\text{Var}(X)+\text{Var}(Y)}{4}$$
>
> **Diketahui:**
> - $E[X] = E[Y] = \mu$; $\text{CV}(X) = 3 \Rightarrow \sigma_X = 3\mu$; $\text{CV}(Y) = 4 \Rightarrow \sigma_Y = 4\mu$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspektasi dan deviasi standar $Z$**
> >
> > $$E[Z] = \frac{\mu + \mu}{2} = \mu$$
> >
> > $$\text{Var}(Z) = \frac{(3\mu)^2 + (4\mu)^2}{4} = \frac{9\mu^2 + 16\mu^2}{4} = \frac{25\mu^2}{4}$$
> >
> > $$\sigma_Z = \frac{5\mu}{2}$$
> >
> > **Langkah 2: Hitung koefisien variasi $Z$**
> >
> > $$\text{CV}(Z) = \frac{\sigma_Z}{E[Z]} = \frac{5\mu/2}{\mu} = \frac{5}{2}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{5}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan CV secara langsung: $\text{CV}(Z) \neq \frac{\text{CV}(X) + \text{CV}(Y)}{2}$.
> > > - Mengira standar deviasi jumlah = jumlah standar deviasi; yang benar: variansi yang bersifat aditif untuk variabel independen.
> >
> > > [!CAUTION] Red Flags
> > > - CV adalah rasio antara standar deviasi dan mean; hitung keduanya secara terpisah, lalu bagi.
>
---

## **No. 253**

Points scored by a game participant can be modeled by $Z = 3X + 2Y - 5$. $X$ and $Y$ are independent random variables with $\text{Var}(X) = 3$ and $\text{Var}(Y) = 4$.

Calculate $\text{Var}(Z)$.

a. $12$  
b. $17$  
c. $38$  
d. $43$  
e. $68$

> [!summary]+ **Jawaban No. 253**
>
> **(d). $43$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X, Y$ independen dan konstanta $a, b, c$:
> >
> > $$\text{Var}(aX + bY + c) = a^2\,\text{Var}(X) + b^2\,\text{Var}(Y)$$
> >
> > (Konstanta tidak mempengaruhi variansi.)
>
> **Diketahui:**
> - $Z = 3X + 2Y - 5$; $\text{Var}(X) = 3$; $\text{Var}(Y) = 4$; $X, Y$ independen
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan rumus variansi kombinasi linear**
> >
> > $$\text{Var}(Z) = 3^2 \cdot \text{Var}(X) + 2^2 \cdot \text{Var}(Y) + \text{Var}(-5)$$
> >
> > $$= 9(3) + 4(4) + 0 = 27 + 16 = 43$$
> >
> > **Hasil Akhir:** **(d)**. $43$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menambahkan konstanta $-5$ dalam perhitungan variansi: $\text{Var}(c) = 0$ untuk semua konstanta $c$.
> > > - Menggunakan koefisien tanpa dikuadratkan: $a\,\text{Var}(X)$ bukan $a^2\,\text{Var}(X)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $X$ dan $Y$ **tidak** independen → harus tambahkan suku $2ab\,\text{Cov}(X,Y)$.
>
---

## **No. 254**

An actuary is studying hurricane models. A year is classified as a high, medium, or low hurricane year with probabilities 0.1, 0.3, and 0.6, respectively. The numbers of hurricanes in high, medium, and low years follow Poisson distributions with means 20, 15, and 10, respectively.

Calculate the variance of the number of hurricanes in a randomly selected year.

a. $11{,}25$  
b. $12{,}50$  
c. $12{,}94$  
d. $13{,}42$  
e. $23{,}75$

> [!summary]+ **Jawaban No. 254**
>
> **(e). $23{,}75$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Variansi Total (Eve's Law): misalkan $N$ = jumlah badai dan $T$ = tipe tahun:
> >
> > $$\text{Var}(N) = E[\text{Var}(N \mid T)] + \text{Var}(E[N \mid T])$$
> >
> > Untuk $N \mid T \sim \text{Poisson}(\lambda_T)$: $E[N \mid T] = \lambda_T$ dan $\text{Var}(N \mid T) = \lambda_T$.
> >
> > Momen kedua Poisson: $E[N^2 \mid T] = \lambda_T^2 + \lambda_T$.
>
> **Diketahui:**
> - $P(T=\text{tinggi}) = 0{,}1$, $\lambda_{\text{tinggi}} = 20$
> - $P(T=\text{sedang}) = 0{,}3$, $\lambda_{\text{sedang}} = 15$
> - $P(T=\text{rendah}) = 0{,}6$, $\lambda_{\text{rendah}} = 10$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[N]$ (rata-rata tertimbang)**
> >
> > $$E[N] = 0{,}1(20) + 0{,}3(15) + 0{,}6(10) = 2 + 4{,}5 + 6 = 12{,}5$$
> >
> > **Langkah 2: Hitung $E[N^2]$ (rata-rata momen kedua)**
> >
> > Untuk Poisson: $E[N^2 \mid T] = \lambda_T^2 + \lambda_T$
> >
> > $$E[N^2] = 0{,}1(20^2 + 20) + 0{,}3(15^2 + 15) + 0{,}6(10^2 + 10)$$
> >
> > $$= 0{,}1(420) + 0{,}3(240) + 0{,}6(110) = 42 + 72 + 66 = 180$$
> >
> > **Langkah 3: Hitung variansi**
> >
> > $$\text{Var}(N) = E[N^2] - (E[N])^2 = 180 - (12{,}5)^2 = 180 - 156{,}25 = 23{,}75$$
> >
> > **Hasil Akhir:** **(e)**. $23{,}75$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Hanya menghitung $\text{Var}(N \mid T)$ rata-rata tertimbang tanpa menambahkan komponen $\text{Var}(E[N\mid T])$.
> > > - Menggunakan mean Poisson sebagai momen kedua; momen kedua Poisson adalah $\lambda^2 + \lambda$, bukan $\lambda^2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi bergantung pada kondisi acak (mixture model) → selalu gunakan Eve's Law atau hitung via momen kedua marginal.
>
---

## **No. 255**

A dental insurance company pays 100% of the cost of fillings and 70% of the cost of root canals. Fillings and root canals cost 50 and 500 each, respectively.

The tables below show the probability distributions of the annual number of fillings and annual number of root canals for each of the company's policyholders.

| \# of Fillings | 0 | 1 | 2 | 3 |
|:-:|:-:|:-:|:-:|:-:|
| Probability | 0.60 | 0.20 | 0.15 | 0.05 |

| \# of Root Canals | 0 | 1 |
|:-:|:-:|:-:|
| Probability | 0.80 | 0.20 |

Calculate the expected annual payment per policyholder for fillings and root canals.

a. $90{,}00$  
b. $102{,}50$  
c. $132{,}50$  
d. $250{,}00$  
e. $400{,}00$

> [!summary]+ **Jawaban No. 255**
>
> **(b). $102{,}50$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Linearitas ekspektasi: $E[aF + bR] = a\,E[F] + b\,E[R]$
> >
> > Total klaim: $C = 50F + 0{,}7 \times 500 \cdot R = 50F + 350R$
>
> **Diketahui:**
> - $F$ = jumlah tambal gigi; $R$ = jumlah root canal; keduanya independen
> - Pembayaran per tambal gigi: $50$; per root canal: $0{,}7 \times 500 = 350$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[F]$**
> >
> > $$E[F] = 0(0{,}60) + 1(0{,}20) + 2(0{,}15) + 3(0{,}05) = 0 + 0{,}20 + 0{,}30 + 0{,}15 = 0{,}65$$
> >
> > **Langkah 2: Hitung $E[R]$**
> >
> > $$E[R] = 0(0{,}80) + 1(0{,}20) = 0{,}20$$
> >
> > **Langkah 3: Hitung $E[C]$**
> >
> > $$E[C] = 50 \times 0{,}65 + 350 \times 0{,}20 = 32{,}50 + 70{,}00 = 102{,}50$$
> >
> > **Hasil Akhir:** **(b)**. $102{,}50$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan biaya penuh 500 untuk root canal tanpa mengalikan dengan coverage 70%; perusahaan hanya membayar $350$.
> > > - Mengira $E[C] = E[50F] \cdot E[350R]$; ekspektasi produk $\neq$ produk ekspektasi kecuali independen, dan ini penjumlahan bukan perkalian.
> >
> > > [!CAUTION] Red Flags
> > > - Perhatikan persentase coverage: "pays X% of cost Y" → pembayaran = X% × Y, bukan Y.
>
---

## **No. 256**

A loss under a liability policy is modeled by an exponential distribution. The insurance company will cover the amount of that loss in excess of a deductible of 2000. The probability that the reimbursement is less than 6000, given that the loss exceeds the deductible, is 0.50.

Calculate the probability that the reimbursement is greater than 3000 but less than 9000, given that the loss exceeds the deductible.

a. $0{,}28$  
b. $0{,}35$  
c. $0{,}50$  
d. $0{,}65$  
e. $0{,}72$

> [!summary]+ **Jawaban No. 256**
>
> **(b). $0{,}35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Sifat memoryless distribusi Eksponensial: distribusi *reimbursement* (kerugian di atas deductible) adalah Eksponensial dengan parameter yang sama.
> >
> > Untuk $R = \text{reimbursement} \sim \text{Exp}(\lambda)$:
> >
> > $$P(R < r \mid R > 0) = 1 - e^{-\lambda r}$$
>
> **Diketahui:**
> - Loss $L \sim \text{Exp}(\lambda)$; deductible $d = 2000$
> - Reimbursement $R = L - 2000 \mid L > 2000$; karena sifat memoryless, $R \sim \text{Exp}(\lambda)$
> - $P(R < 6000) = 0{,}50 \Rightarrow 1 - e^{-6000\lambda} = 0{,}50 \Rightarrow \lambda = \frac{\ln 2}{6000}$
> - Target: $P(3000 < R < 9000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan parameter $\lambda$**
> >
> > $$1 - e^{-6000\lambda} = 0{,}50 \implies e^{-6000\lambda} = 0{,}50 \implies \lambda = \frac{\ln 2}{6000}$$
> >
> > **Langkah 2: Hitung $P(R < 9000)$ dan $P(R < 3000)$**
> >
> > $$P(R < 9000) = 1 - e^{-9000\lambda} = 1 - e^{-\frac{9000 \ln 2}{6000}} = 1 - e^{-1{,}5\ln 2} = 1 - 2^{-1{,}5} = 1 - \frac{1}{2\sqrt{2}}$$
> >
> > $$= 1 - \frac{1}{2{,}8284} \approx 1 - 0{,}3536 = 0{,}6464$$
> >
> > $$P(R < 3000) = 1 - e^{-3000\lambda} = 1 - e^{-0{,}5\ln 2} = 1 - 2^{-0{,}5} = 1 - \frac{1}{\sqrt{2}} \approx 1 - 0{,}7071 = 0{,}2929$$
> >
> > **Langkah 3: Hitung probabilitas target**
> >
> > $$P(3000 < R < 9000) = P(R < 9000) - P(R < 3000) = 0{,}6464 - 0{,}2929 = 0{,}3535 \approx 0{,}35$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menerapkan sifat memoryless; reimbursement kondisional pada $L > 2000$ memiliki distribusi Eksponensial dengan parameter yang sama dengan $L$ asli.
> > > - Menghitung $\lambda$ dari $P(L - 2000 < 6000 \mid L > 2000)$ dengan cara yang berbeda dari sifat memoryless.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada deductible dan loss Eksponensial → reimbursement mengikuti Eksponensial yang sama (memoryless property).
>
---

## **No. 257**

Let $X$ be the percentage score on a college-entrance exam for students who did not participate in an exam-preparation seminar. $X$ is modeled by a uniform distribution on $[a, 100]$.

Let $Y$ be the percentage score on a college-entrance exam for students who did participate in an exam-preparation seminar. $Y$ is modeled by a uniform distribution on $[1{,}25a, 100]$.

It is given that $E[X^2] = \frac{19600}{3}$.

Calculate the 80th percentile of $Y$.

a. $80$  
b. $85$  
c. $90$  
d. $92$  
e. $95$

> [!summary]+ **Jawaban No. 257**
>
> **(e). $95$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U(\alpha, \beta)$:
> >
> > $$E[X] = \frac{\alpha+\beta}{2}, \quad \text{Var}(X) = \frac{(\beta-\alpha)^2}{12}, \quad E[X^2] = \text{Var}(X) + (E[X])^2$$
> >
> > Persentil ke-$p$: $F^{-1}(p) = \alpha + p(\beta - \alpha)$
>
> **Diketahui:**
> - $X \sim U(a, 100)$; $E[X^2] = \frac{19600}{3}$
> - $Y \sim U(1{,}25a, 100)$
> - Target: persentil ke-80 dari $Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan $E[X^2]$ untuk menemukan $a$**
> >
> > $$E[X^2] = \text{Var}(X) + (E[X])^2 = \frac{(100-a)^2}{12} + \left(\frac{a+100}{2}\right)^2$$
> >
> > Sederhanakan:
> >
> > $$= \frac{(100-a)^2}{12} + \frac{(a+100)^2}{4} = \frac{(100-a)^2 + 3(a+100)^2}{12}$$
> >
> > Ekspansikan pembilang:
> >
> > $$(100-a)^2 + 3(a+100)^2 = (10000 - 200a + a^2) + 3(a^2 + 200a + 10000)$$
> >
> > $$= 10000 - 200a + a^2 + 3a^2 + 600a + 30000 = 4a^2 + 400a + 40000$$
> >
> > Jadi:
> >
> > $$\frac{4a^2 + 400a + 40000}{12} = \frac{19600}{3}$$
> >
> > $$4a^2 + 400a + 40000 = 4 \times 19600 = 78400$$
> >
> > $$4a^2 + 400a - 38400 = 0 \implies a^2 + 100a - 9600 = 0$$
> >
> > $$a = \frac{-100 \pm \sqrt{10000 + 38400}}{2} = \frac{-100 \pm \sqrt{48400}}{2} = \frac{-100 \pm 220}{2}$$
> >
> > Ambil solusi positif: $a = \frac{120}{2} = 60$.
> >
> > **Langkah 2: Tentukan distribusi $Y$**
> >
> > $$1{,}25a = 1{,}25 \times 60 = 75 \implies Y \sim U(75, 100)$$
> >
> > **Langkah 3: Hitung persentil ke-80**
> >
> > $$F_Y^{-1}(0{,}80) = 75 + 0{,}80(100 - 75) = 75 + 0{,}80 \times 25 = 75 + 20 = 95$$
> >
> > **Hasil Akhir:** **(e)**. $95$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[X] = \frac{19600}{3}$ sebagai momen pertama; soal menyatakan ini adalah $E[X^2]$.
> > > - Mengambil solusi negatif $a = -160$ dari persamaan kuadrat; pastikan $a > 0$ karena ini adalah batas bawah persentase.
> >
> > > [!CAUTION] Red Flags
> > > - Persentil ke-80 dari $U(\alpha, \beta)$: interpolasi linear dari $\alpha$ ke $\beta$ sebesar 80% dari rentang.
>
---

## **No. 258**

In a study of driver safety, drivers were categorized according to three risk factors. Exactly 1000 drivers exhibited each individual risk factor. Also, for each of the risk factors, there were exactly 400 drivers exhibiting that risk factor and neither of the other two risk factors. Finally, there were exactly 300 drivers who exhibited all three risk factors and 500 who exhibited none of the three risk factors.

Calculate the number of drivers in the study.

a. $2000$  
b. $2300$  
c. $2450$  
d. $2750$  
e. $3500$

> [!summary]+ **Jawaban No. 258**
>
> **(c). $2450$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Prinsip inklusi-eksklusi untuk tiga himpunan $A, B, C$:
> >
> > $$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$
>
> **Diketahui:**
> - $|A| = |B| = |C| = 1000$; $|A \cap B \cap C| = 300$
> - Eksklusif (hanya satu faktor): $|A \text{ saja}| = 400$ untuk masing-masing
> - $|\text{tidak ada}| = 500$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan komponen dalam diagram Venn**
> >
> > Setiap lingkaran memiliki 1000 elemen, dengan 400 eksklusif dan 300 berada di irisan tiga.
> >
> > Sisakan: $1000 - 400 - 300 = 300$ untuk irisan dua-atau-lebih dalam setiap lingkaran.
> >
> > Biarkan $X, Y, Z$ = jumlah elemen di irisan tepat dua himpunan (misal $X = |A \cap B \text{ saja}|$, dll).
> >
> > Dari lingkaran $A$: $400 + 300 + X + Y = 1000 \implies X + Y = 300$
> >
> > Dari lingkaran $B$: $400 + 300 + X + Z = 1000 \implies X + Z = 300$
> >
> > Dari lingkaran $C$: $400 + 300 + Y + Z = 1000 \implies Y + Z = 300$
> >
> > **Langkah 2: Selesaikan sistem persamaan**
> >
> > Dari dua persamaan pertama: $Y = Z$; dari kedua dan ketiga: $X = Y$. Jadi $X = Y = Z = 150$.
> >
> > **Langkah 3: Hitung total peserta**
> >
> > $$\text{Total} = 3(400) + 3(150) + 300 + 500 = 1200 + 450 + 300 + 500 = 2450$$
> >
> > **Hasil Akhir:** **(c)**. $2450$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan $3 \times 1000 + 300 + 500$ tanpa memperhatikan penghitungan ganda pada irisan dua dan irisan tiga.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "exactly 400 exhibiting only that factor" → ini adalah wilayah *eksklusif* dalam diagram Venn, bukan irisan.
>
---

## **No. 259**

An insurance company examines its pool of auto insurance customers and gathers the following information:

(i) All customers insure at least one car.  
(ii) 64% of the customers insure more than one car.  
(iii) 20% of the customers insure a sports car.  
(iv) Of those customers who insure more than one car, 15% insure a sports car.

Calculate the probability that a randomly selected customer insures exactly one car, and that the car is not a sports car.

a. $0{,}16$  
b. $0{,}19$  
c. $0{,}26$  
d. $0{,}29$  
e. $0{,}31$

> [!summary]+ **Jawaban No. 259**
>
> **(c). $0{,}26$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Penjumlahan: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
> >
> > Hukum Perkalian: $P(A \cap B) = P(B \mid A) \cdot P(A)$
>
> **Diketahui:**
> - $A$ = insure lebih dari satu mobil: $P(A) = 0{,}64$, sehingga $P(A^c) = 0{,}36$
> - $B$ = insure sports car: $P(B) = 0{,}20$
> - $P(B \mid A) = 0{,}15$
> - Target: $P(A^c \cap B^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A \cap B)$**
> >
> > $$P(A \cap B) = P(B \mid A) \cdot P(A) = 0{,}15 \times 0{,}64 = 0{,}096$$
> >
> > **Langkah 2: Hitung $P(A \cup B)$**
> >
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}64 + 0{,}20 - 0{,}096 = 0{,}744$$
> >
> > **Langkah 3: Hitung komplementnya**
> >
> > $$P(A^c \cap B^c) = 1 - P(A \cup B) = 1 - 0{,}744 = 0{,}256 \approx 0{,}26$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}26$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(A^c \cap B^c) = P(A^c) \cdot P(B^c)$; ini hanya berlaku jika $A$ dan $B$ independen, yang tidak disebutkan.
> > > - Menggunakan De Morgan: $P(A^c \cap B^c) = P((A \cup B)^c) = 1 - P(A \cup B)$.
> >
> > > [!CAUTION] Red Flags
> > > - Target "tepat satu mobil AND bukan sports car" = $A^c \cap B^c$ = komplemen $(A \cup B)$.
>
---

## **No. 260**

An insurance company has found that 1% of all applicants for life insurance have diabetes.

Calculate the probability that five or fewer of 200 randomly selected applicants have diabetes.

a. $0{,}85$  
b. $0{,}88$  
c. $0{,}91$  
d. $0{,}95$  
e. $0{,}98$

> [!summary]+ **Jawaban No. 260**
>
> **(e). $0{,}98$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(n, p)$ dengan $n$ besar dan $p$ kecil dapat diaproksimasi dengan $\text{Poisson}(\lambda = np)$:
> >
> > $$P(X \leq k) \approx \sum_{x=0}^{k} \frac{e^{-\lambda}\lambda^x}{x!}$$
>
> **Diketahui:**
> - $X \sim B(200, 0{,}01)$; $\lambda = np = 200 \times 0{,}01 = 2$
> - Target: $P(X \leq 5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Aproksimasi Poisson**
> >
> > Karena $n = 200$ besar dan $p = 0{,}01$ kecil, gunakan $X \approx \text{Poisson}(\lambda = 2)$.
> >
> > **Langkah 2: Hitung $P(X \leq 5)$**
> >
> > $$P(X \leq 5) = e^{-2}\sum_{x=0}^{5} \frac{2^x}{x!} = e^{-2}\!\left(1 + 2 + 2 + \frac{4}{3} + \frac{2}{3} + \frac{4}{15}\right)$$
> >
> > $$= e^{-2}\!\left(1 + 2 + 2 + \frac{4}{3} + \frac{2}{3} + \frac{4}{15}\right)$$
> >
> > Hitung suku-suku:
> >
> > $$\frac{2^0}{0!} = 1, \quad \frac{2^1}{1!} = 2, \quad \frac{2^2}{2!} = 2, \quad \frac{2^3}{3!} = \frac{8}{6} \approx 1{,}333, \quad \frac{2^4}{4!} = \frac{16}{24} \approx 0{,}667, \quad \frac{2^5}{5!} = \frac{32}{120} \approx 0{,}267$$
> >
> > $$\sum = 1 + 2 + 2 + 1{,}333 + 0{,}667 + 0{,}267 = 7{,}267$$
> >
> > $$P(X \leq 5) \approx e^{-2} \times 7{,}267 = 0{,}1353 \times 7{,}267 \approx 0{,}983$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}98$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Binomial langsung dengan $\binom{200}{x}$ yang sangat kompleks; aproksimasi Poisson jauh lebih efisien untuk $n$ besar dan $p$ kecil.
> > > - Lupa bahwa kondisi aproksimasi Poisson yang baik: $n \geq 20$, $p \leq 0{,}05$, dan $np$ moderat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $n$ besar, $p$ kecil, dan ditanya probabilitas ekor bawah → gunakan Poisson dengan $\lambda = np$.
>
---

## **No. 261**

The probability that an agent sells an insurance policy to a potential customer during a first appointment is 0.20. The events of selling an insurance policy to different potential customers during first appointments are mutually independent.

The agent has scheduled first appointments with five potential customers.

Calculate the probability that the agent sells an insurance policy during at least two of these appointments.

a. $0{,}04$  
b. $0{,}20$  
c. $0{,}26$  
d. $0{,}40$  
e. $0{,}74$

> [!summary]+ **Jawaban No. 261**
>
> **(c). $0{,}26$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(n, p)$:
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> >
> > $$P(X \geq 2) = 1 - P(X = 0) - P(X = 1)$$
>
> **Diketahui:**
> - $X \sim B(5, 0{,}20)$
> - Target: $P(X \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X = 0)$**
> >
> > $$P(X = 0) = \binom{5}{0}(0{,}20)^0(0{,}80)^5 = (0{,}80)^5 = 0{,}32768$$
> >
> > **Langkah 2: Hitung $P(X = 1)$**
> >
> > $$P(X = 1) = \binom{5}{1}(0{,}20)^1(0{,}80)^4 = 5 \times 0{,}20 \times 0{,}4096 = 0{,}4096$$
> >
> > **Langkah 3: Hitung $P(X \geq 2)$**
> >
> > $$P(X \geq 2) = 1 - 0{,}32768 - 0{,}4096 = 1 - 0{,}73728 = 0{,}26272 \approx 0{,}26$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}26$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(X \geq 2) = 1 - P(X \leq 1)$ adalah benar, tetapi sering lupa menyertakan $P(X=0)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Setidaknya dua" ($\geq 2$) → pendekatan komplemen lebih efisien dari menghitung $P(2) + P(3) + P(4) + P(5)$.
>
---

## **No. 262**

A manufacturer produces computers and releases them in shipments of 100. From a shipment of 100, the probability that exactly three computers are defective is twice the probability that exactly two computers are defective. The events that different computers are defective are mutually independent.

Calculate the probability that a randomly selected computer is defective.

a. $0{,}040$  
b. $0{,}042$  
c. $0{,}058$  
d. $0{,}060$  
e. $0{,}072$

> [!summary]+ **Jawaban No. 262**
>
> **(c). $0{,}058$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(n, p)$:
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
>
> **Diketahui:**
> - $X \sim B(100, p)$; $P(X = 3) = 2 \cdot P(X = 2)$
> - Target: nilai $p$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis persamaan dari kondisi yang diberikan**
> >
> > $$\binom{100}{3} p^3 (1-p)^{97} = 2 \binom{100}{2} p^2 (1-p)^{98}$$
> >
> > **Langkah 2: Sederhanakan**
> >
> > Bagi kedua sisi dengan $p^2(1-p)^{97}$ (karena $p \neq 0$ dan $p \neq 1$):
> >
> > $$\binom{100}{3} p = 2 \binom{100}{2} (1-p)$$
> >
> > $$161700 \cdot p = 2 \times 4950 \times (1-p) = 9900(1-p)$$
> >
> > $$161700p = 9900 - 9900p$$
> >
> > $$171600p = 9900$$
> >
> > $$p = \frac{9900}{171600} \approx 0{,}0577 \approx 0{,}058$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}058$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menyederhanakan faktor $p^2(1-p)^{97}$ dari kedua sisi sebelum menyelesaikan; persamaan menjadi rumit tidak perlu.
> > > - Mengira "tiga kali defektif = dua kali lipat peluang dua defektif" adalah interpretasi yang berbeda dari $P(X=3) = 2P(X=2)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika kondisi berupa rasio probabilitas dua nilai distribusi → tulis rasio, sederhanakan, lalu selesaikan untuk parameter yang tidak diketahui.
>
---

## **No. 263**

In any 12-month period, the probability that a home is damaged by fire is 20% and the probability of a theft loss at a home is 30%. The occurrences of fire damage and theft loss are independent events.

Calculate the probability that a randomly selected home will either be damaged by fire or will have a theft loss, but not both, during the next year.

a. $0{,}30$  
b. $0{,}38$  
c. $0{,}44$  
d. $0{,}50$  
e. $0{,}56$

> [!summary]+ **Jawaban No. 263**
>
> **(b). $0{,}38$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.5 Kejadian Independen]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas "salah satu tetapi tidak keduanya" (XOR):
> >
> > $$P(A \triangle B) = P(A \cap B^c) + P(A^c \cap B) = P(A)(1-P(B)) + (1-P(A))P(B)$$
>
> **Diketahui:**
> - $F$ = kebakaran: $P(F) = 0{,}20$; $T$ = pencurian: $P(T) = 0{,}30$; $F$ dan $T$ independen
> - Target: $P(F \triangle T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas "hanya kebakaran"**
> >
> > $$P(F \cap T^c) = P(F) \cdot P(T^c) = 0{,}20 \times 0{,}70 = 0{,}14$$
> >
> > **Langkah 2: Hitung probabilitas "hanya pencurian"**
> >
> > $$P(F^c \cap T) = P(F^c) \cdot P(T) = 0{,}80 \times 0{,}30 = 0{,}24$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$P(F \triangle T) = 0{,}14 + 0{,}24 = 0{,}38$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}38$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(F \cup T) = P(F) + P(T) - P(F \cap T) = 0{,}44$ untuk menjawab "keduanya atau salah satu" — ini bukan "salah satu tapi tidak keduanya".
> > > - "Either... or... but not both" = exclusive OR ($\triangle$), bukan inclusive OR ($\cup$).
> >
> > > [!CAUTION] Red Flags
> > > - "But not both" → gunakan XOR, bukan $\cup$. XOR = $P(A \cup B) - P(A \cap B)$.
>
---

## **No. 264**

In one company, 30% of males and 20% of females contribute to a supplemental retirement plan. Furthermore, 45% of the company's employees are female.

Calculate the probability that a randomly selected employee is female, given that this employee contributes to a supplemental retirement plan.

a. $0{,}09$  
b. $0{,}23$  
c. $0{,}35$  
d. $0{,}45$  
e. $0{,}55$

> [!summary]+ **Jawaban No. 264**
>
> **(c). $0{,}35$**
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
> > $$P(F \mid C) = \frac{P(C \mid F) \cdot P(F)}{P(C \mid F) \cdot P(F) + P(C \mid F^c) \cdot P(F^c)}$$
>
> **Diketahui:**
> - $P(F) = 0{,}45$, $P(F^c) = 0{,}55$
> - $P(C \mid F) = 0{,}20$ (wanita berkontribusi)
> - $P(C \mid F^c) = 0{,}30$ (pria berkontribusi)
> - Target: $P(F \mid C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(C)$ dengan Hukum Probabilitas Total**
> >
> > $$P(C) = P(C \mid F) \cdot P(F) + P(C \mid F^c) \cdot P(F^c) = 0{,}20(0{,}45) + 0{,}30(0{,}55) = 0{,}09 + 0{,}165 = 0{,}255$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(F \mid C) = \frac{0{,}20 \times 0{,}45}{0{,}255} = \frac{0{,}09}{0{,}255} = 0{,}353 \approx 0{,}35$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $P(F) = 0{,}45$ karena itu data yang tersedia; tetapi soal bertanya probabilitas *bersyarat* $P(F \mid C)$.
> > > - Menggunakan hanya pembilang $P(C \mid F) \cdot P(F)$ tanpa normalisasi dengan $P(C)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Probabilitas bahwa… **given that**…" selalu mengisyaratkan penggunaan Teorema Bayes atau probabilitas bersyarat langsung.
>
---

## **No. 265**

A health insurer sells policies to residents of territory X and territory Y. Past claims experience indicates the following:

(i) 20% of the total policyholders from territory X and territory Y combined filed no claims.  
(ii) 15% of the policyholders from territory X filed no claims.  
(iii) 40% of the policyholders from territory Y filed no claims.

Calculate the probability that a randomly selected policyholder was a resident of territory X, given that the policyholder filed no claims.

a. $0{,}09$  
b. $0{,}27$  
c. $0{,}50$  
d. $0{,}60$  
e. $0{,}80$

> [!summary]+ **Jawaban No. 265**
>
> **(d). $0{,}60$**
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
> > Hukum Probabilitas Total:
> >
> > $$P(C) = P(C \mid X) \cdot P(X) + P(C \mid Y) \cdot P(Y)$$
> >
> > Teorema Bayes:
> >
> > $$P(X \mid C) = \frac{P(C \mid X) \cdot P(X)}{P(C)}$$
>
> **Diketahui:**
> - $C$ = tidak ada klaim; $P(C) = 0{,}20$
> - $P(C \mid X) = 0{,}15$; $P(C \mid Y) = 0{,}40$
> - $P(X) = $ tidak diketahui; $P(Y) = 1 - P(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $P(X)$ menggunakan Hukum Probabilitas Total**
> >
> > $$P(C) = 0{,}15 \cdot P(X) + 0{,}40 \cdot (1 - P(X))$$
> >
> > $$0{,}20 = 0{,}15 \cdot P(X) + 0{,}40 - 0{,}40 \cdot P(X)$$
> >
> > $$0{,}20 - 0{,}40 = -0{,}25 \cdot P(X)$$
> >
> > $$P(X) = \frac{0{,}20}{0{,}25} = 0{,}80$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(X \mid C) = \frac{P(C \mid X) \cdot P(X)}{P(C)} = \frac{0{,}15 \times 0{,}80}{0{,}20} = \frac{0{,}12}{0{,}20} = 0{,}60$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}60$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(X)$ sudah diketahui atau sama dengan 0,5; soal ini memerlukan penentuan $P(X)$ melalui Hukum Probabilitas Total.
> > > - Lupa langkah awal: selalu cari $P(X)$ dulu sebelum menerapkan Bayes.
> >
> > > [!CAUTION] Red Flags
> > > - Jika proporsi kelompok tidak diberikan secara langsung tetapi probabilitas marginal ($P(C)$) diberikan → gunakan Hukum Probabilitas Total untuk mencari proporsi kelompok.
>
---

## **No. 266**

Claim amounts are independent random variables with probability density function

$$f(x) = \begin{cases} \dfrac{10}{x^2}, & x > 10 \\ 0, & \text{selainnya} \end{cases}$$

Calculate the probability that the largest of three randomly selected claims is less than 25.

a. $\dfrac{8}{125}$  
b. $\dfrac{12}{125}$  
c. $\dfrac{27}{125}$  
d. $\dfrac{2}{5}$  
e. $\dfrac{3}{5}$

> [!summary]+ **Jawaban No. 266**
>
> **(c). $\dfrac{27}{125}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > CDF untuk satu klaim: $F(x) = P(X \leq x) = \int_{10}^{x} \frac{10}{t^2}\,dt$
> >
> > Untuk $n$ variabel i.i.d., CDF maksimum: $P(\max \leq x) = [F(x)]^n$
>
> **Diketahui:**
> - $X_1, X_2, X_3$ i.i.d. dengan PDF di atas; $n = 3$
> - Target: $P(\max(X_1, X_2, X_3) < 25)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $F(25)$**
> >
> > $$F(25) = \int_{10}^{25} \frac{10}{x^2}\,dx = \left[-\frac{10}{x}\right]_{10}^{25} = -\frac{10}{25} + \frac{10}{10} = -0{,}4 + 1 = 0{,}6 = \frac{3}{5}$$
> >
> > **Langkah 2: Gunakan CDF maksimum**
> >
> > $$P(\max(X_1, X_2, X_3) < 25) = [F(25)]^3 = \left(\frac{3}{5}\right)^3 = \frac{27}{125}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{27}{125}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(\min < 25)$ alih-alih $P(\max < 25)$; untuk maksimum, semua variabel harus $< 25$.
> > > - Menjawab $F(25) = 3/5$ tanpa mengkuadratkannya sebanyak $n = 3$.
> >
> > > [!CAUTION] Red Flags
> > > - $P(\max \leq x) = [F(x)]^n$; $P(\min > x) = [1-F(x)]^n$ untuk variabel i.i.d.
>
---

## **No. 267**

The lifetime of a certain electronic device has an exponential distribution with mean 0.50.

Calculate the probability that the lifetime of the device is greater than 0.70, given that it is greater than 0.40.

a. $0{,}203$  
b. $0{,}247$  
c. $0{,}449$  
d. $0{,}549$  
e. $0{,}861$

> [!summary]+ **Jawaban No. 267**
>
> **(d). $0{,}549$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Sifat memoryless distribusi Eksponensial:
> >
> > $$P(X > s + t \mid X > s) = P(X > t)$$
> >
> > Untuk $X \sim \text{Exp}(\beta = 0{,}5)$, rate $\lambda = 2$:
> >
> > $$P(X > t) = e^{-\lambda t} = e^{-2t}$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\beta = 0{,}5)$, rate $\lambda = 2$
> - Target: $P(X > 0{,}70 \mid X > 0{,}40)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan sifat memoryless**
> >
> > $$P(X > 0{,}70 \mid X > 0{,}40) = P(X > 0{,}70 - 0{,}40) = P(X > 0{,}30)$$
> >
> > **Langkah 2: Hitung $P(X > 0{,}30)$**
> >
> > $$P(X > 0{,}30) = e^{-2 \times 0{,}30} = e^{-0{,}60} \approx 0{,}5488 \approx 0{,}549$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}549$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\frac{P(X > 0{,}70)}{P(X > 0{,}40)}$ secara langsung (benar, tetapi lebih panjang) tanpa memanfaatkan memoryless property.
> > > - Menggunakan mean $\beta = 0{,}5$ sebagai rate; rate $\lambda = 1/\beta = 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mengkondisikan "lifetime > $s$" dan bertanya "probability > $s+t$" → selalu gunakan memoryless property untuk Eksponensial.
>
---

## **No. 268**

A farmer purchases a five-year insurance policy that covers crop destruction due to hail. Over the five-year period, the farmer will receive a benefit of 20 for each year in which hail destroys his crop, subject to a maximum of three benefit payments. The probability that hail will destroy the farmer's crop in any given year is 0.5, independent of any other year.

Calculate the expected benefit that the farmer will receive over the five-year period.

a. $30$  
b. $34$  
c. $40$  
d. $46$  
e. $50$

> [!summary]+ **Jawaban No. 268**
>
> **(d). $46$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim B(5, 0{,}5)$ = jumlah tahun dengan klaim. Manfaat aktual:
> >
> > $$B = 20 \cdot \min(X, 3)$$
> >
> > $$E[B] = \sum_{x=0}^{5} 20\min(x, 3) \cdot P(X = x)$$
>
> **Diketahui:**
> - $X \sim B(5, 0{,}5)$; $P(X = k) = \binom{5}{k}(0{,}5)^5 = \frac{\binom{5}{k}}{32}$
> - Manfaat per pembayaran = 20; maksimum 3 pembayaran; total manfaat = $20\min(X, 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas setiap nilai $X$**
> >
> > $$P(X=0) = \frac{1}{32}, \quad P(X=1) = \frac{5}{32}, \quad P(X=2) = \frac{10}{32}$$
> >
> > $$P(X=3) = \frac{10}{32}, \quad P(X=4) = \frac{5}{32}, \quad P(X=5) = \frac{1}{32}$$
> >
> > **Langkah 2: Hitung $E[B] = E[20\min(X,3)]$**
> >
> > Manfaat aktual untuk setiap nilai:
> >
> > | $X$ | $20\min(X,3)$ | $P(X)$ | Kontribusi |
> > |:-:|:-:|:-:|:-:|
> > | 0 | 0 | 1/32 | 0 |
> > | 1 | 20 | 5/32 | 100/32 |
> > | 2 | 40 | 10/32 | 400/32 |
> > | 3 | 60 | 10/32 | 600/32 |
> > | 4 | 60 | 5/32 | 300/32 |
> > | 5 | 60 | 1/32 | 60/32 |
> >
> > $$E[B] = \frac{0 + 100 + 400 + 600 + 300 + 60}{32} = \frac{1460}{32} = 45{,}625 \approx 46$$
> >
> > **Hasil Akhir:** **(d)**. $46$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[20X] = 20 \times E[X] = 20 \times 2{,}5 = 50$ tanpa memperhatikan batas tiga pembayaran.
> > > - Lupa bahwa $X \geq 3$ semua memberikan manfaat yang sama (60), bukan $20X$.
> >
> > > [!CAUTION] Red Flags
> > > - "Subject to a maximum of $N$ payments" → gunakan $\min(X, N)$ dalam fungsi manfaat, bukan $X$ langsung.
>
---

## **No. 269**

An insurance company has two divisions, auto and property. Total annual claims, $X$, in the auto division follow a normal distribution with mean 10 and standard deviation 3. Total annual claims, $Y$, in the property division follow a normal distribution with mean 12 and standard deviation 4.

Assume that $X$ and $Y$ are independent.

Calculate the probability that total overall claims, $X + Y$, will not exceed 29.

a. $0{,}61$  
b. $0{,}69$  
c. $0{,}78$  
d. $0{,}84$  
e. $0{,}92$

> [!summary]+ **Jawaban No. 269**
>
> **(e). $0{,}92$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > Jumlah dua Normal independen:
> >
> > $$X + Y \sim N(\mu_X + \mu_Y,\; \sigma_X^2 + \sigma_Y^2)$$
>
> **Diketahui:**
> - $X \sim N(10, 9)$; $Y \sim N(12, 16)$; independen
> - Target: $P(X + Y \leq 29)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi $X + Y$**
> >
> > $$X + Y \sim N(10 + 12,\; 9 + 16) = N(22, 25)$$
> >
> > $$\sigma_{X+Y} = \sqrt{25} = 5$$
> >
> > **Langkah 2: Standarisasi**
> >
> > $$P(X + Y \leq 29) = P\!\left(Z \leq \frac{29 - 22}{5}\right) = P(Z \leq 1{,}4) = \Phi(1{,}4) \approx 0{,}9192 \approx 0{,}92$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}92$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan deviasi standar: $\sigma_{X+Y} \neq \sigma_X + \sigma_Y = 7$; yang benar adalah variansi yang dijumlahkan.
> > > - Menggunakan $\sigma^2 = 3^2 + 4^2 = 9 + 16 = 25$ sudah benar; standar deviasi $= \sqrt{25} = 5$, bukan 7.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk dua Normal independen: jumlahkan **variansi**, bukan standar deviasi.
>
---

## **No. 270**

An industrial company provides health insurance to employees located at four different plants. Health insurance costs at each plant are independent of the costs at any other plant. Plant managers have calculated the following statistics:

| Plant | Average Cost | Standard Deviation |
|:-:|:-:|:-:|
| W | 2 | 1.0 |
| X | 2 | 1.0 |
| Y | 5 | 1.5 |
| Z | 7 | 2.0 |

Calculate the standard deviation of total company health insurance costs.

a. $1{,}4$  
b. $2{,}1$  
c. $2{,}9$  
d. $5{,}5$  
e. $6{,}3$

> [!summary]+ **Jawaban No. 270**
>
> **(c). $2{,}9$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Untuk variabel-variabel independen, variansi total = jumlah variansi:
> >
> > $$\text{Var}(W + X + Y + Z) = \text{Var}(W) + \text{Var}(X) + \text{Var}(Y) + \text{Var}(Z)$$
>
> **Diketahui:**
> - $\sigma_W = 1{,}0$, $\sigma_X = 1{,}0$, $\sigma_Y = 1{,}5$, $\sigma_Z = 2{,}0$
> - Semua biaya independen
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung variansi setiap plant**
> >
> > $$\text{Var}(W) = 1{,}0^2 = 1{,}00, \quad \text{Var}(X) = 1{,}0^2 = 1{,}00$$
> >
> > $$\text{Var}(Y) = 1{,}5^2 = 2{,}25, \quad \text{Var}(Z) = 2{,}0^2 = 4{,}00$$
> >
> > **Langkah 2: Jumlahkan variansi**
> >
> > $$\text{Var}(\text{Total}) = 1{,}00 + 1{,}00 + 2{,}25 + 4{,}00 = 8{,}25$$
> >
> > **Langkah 3: Ambil akar kuadrat**
> >
> > $$\sigma_{\text{Total}} = \sqrt{8{,}25} \approx 2{,}872 \approx 2{,}9$$
> >
> > **Hasil Akhir:** **(c)**. $2{,}9$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan standar deviasi langsung: $1{,}0 + 1{,}0 + 1{,}5 + 2{,}0 = 5{,}5$; ini adalah jawaban pengecoh (opsi d).
> > > - Mengingat kembali: standar deviasi tidak bersifat aditif; **variansi** yang aditif untuk variabel independen.
> >
> > > [!CAUTION] Red Flags
> > > - Jika diminta standar deviasi total dari variabel-variabel independen → jumlahkan variansi, lalu ambil akar. Jangan jumlahkan standar deviasinya.
>
---
