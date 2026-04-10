## **No. 1**

Jika setiap kelahiran bayi laki-laki dan perempuan memiliki peluang yang sama untuk dilahirkan, tentukan peluang bahwa dalam sebuah keluarga yang mempunyai tiga anak, tepat satu diantaranya perempuan.

a. $\dfrac{3}{8}$  
b. $\dfrac{1}{8}$  
c. $\dfrac{1}{4}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 1** 
>
> **(a). $\dfrac{3}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi Binomial: $X \sim B(n, p)$
> >
> > $$P[X = k] = \binom{n}{k} p^k (1-p)^{n-k}$$
> >
> > Di sini $p$ adalah probabilitas sukses (lahir perempuan), bukan proporsi populasi (konteks: distribusi diskrit).
>
> **Diketahui:**
> - $n = 3$ (jumlah anak)
> - $p = 0{,}5$ (peluang anak perempuan)
> - Target: $P[X = 1]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Distribusi**
> > Setiap kelahiran independen, peluang perempuan $p = \frac{1}{2}$, dan $n = 3$ percobaan. Maka $X \sim B(3, 0{,}5)$.
> >
> > **Langkah 2: Hitung $P[X = 1]$**
> >
> > $$P[X = 1] = \binom{3}{1} \left(\frac{1}{2}\right)^1 \left(\frac{1}{2}\right)^2 = 3 \cdot \frac{1}{2} \cdot \frac{1}{4} = \frac{3}{8}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{3}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan permutasi $P(3,1)$ alih-alih kombinasi $\binom{3}{1}$ — urutan tidak relevan untuk "tepat satu perempuan".
> > > - Lupa bahwa peluang simetris: $p = 1-p = 0{,}5$ sehingga sering mengabaikan faktor $(1-p)^{n-k}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "tepat satu perempuan" = peluang urutan tertentu (LPL, dll.), lupa mengalikan dengan jumlah kombinasi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "peluang yang sama" untuk dua hasil biner → langsung $p = 0{,}5$.
> > > - Jika soal menyebut "tepat $k$" dari $n$ percobaan independen → gunakan Binomial PMF.

---

## **No. 2**

Diketahui bahwa $P(A|B) = 0{,}4 = P(A'|B')$ dan $P(A) = 0{,}5$. Tentukanlah nilai dari $P(B)$.

a. $0{,}3$  
b. $0{,}4$  
c. $0{,}5$  
d. $0{,}6$  
e. $0{,}7$

> [!summary]+ **Jawaban No. 2** 
>
> **(c). $0{,}5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(A'|B') = \frac{P(A' \cap B')}{P(B')}$$
> >
> > Hukum Probabilitas Total: $P(A) = P(A|B)P(B) + P(A|B')P(B')$
>
> **Diketahui:**
> - $P(A|B) = 0{,}4$
> - $P(A'|B') = 0{,}4$, sehingga $P(A|B') = 1 - P(A'|B') = 0{,}6$
> - $P(A) = 0{,}5$
> - Target: $P(B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $P(A|B')$**
> >
> > $$P(A'|B') = 0{,}4 \Rightarrow P(A|B') = 1 - 0{,}4 = 0{,}6$$
> >
> > **Langkah 2: Terapkan Hukum Probabilitas Total**
> >
> > $$P(A) = P(A|B)P(B) + P(A|B')P(B')$$
> >
> > $$0{,}5 = 0{,}4 \cdot P(B) + 0{,}6 \cdot (1 - P(B))$$
> >
> > **Langkah 3: Selesaikan untuk $P(B)$**
> >
> > $$0{,}5 = 0{,}4\,P(B) + 0{,}6 - 0{,}6\,P(B)$$
> >
> > $$0{,}5 - 0{,}6 = -0{,}2\,P(B)$$
> >
> > $$-0{,}1 = -0{,}2\,P(B) \Rightarrow P(B) = 0{,}5$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(A'|B') = 1 - P(A|B)$ — ini salah. Yang benar: $P(A'|B') = 1 - P(A|B')$.
> > > - Lupa menerapkan Hukum Probabilitas Total, mencoba langsung dari definisi bersyarat saja.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah membaca $P(A'|B')$ sebagai $P(A|B)'$ atau komplemen dari $P(A|B)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan dua kondisi bersyarat berbeda → gunakan Hukum Probabilitas Total.
> > > - Jika muncul notasi $A'$ dan $B'$ → ingat konversi: $P(A|B') = 1 - P(A'|B')$.

---

## **No. 3**

Pasien dalam sebuah penelitian dites untuk penyakit diabetes, satu per satu, sampai terdapat pasien ditemukan mengidap penyakit ini. Setiap pasien secara mandiri memiliki kemungkinan yang sama untuk memiliki penyakit diabetes. Misalkan $r$ mewakili probabilitas bahwa paling sedikit empat pasien dites. Tentukan peluang paling sedikit dua belas pasien dites jika diketahui paling sedikit empat pasien yang dites.

a. $r^{\frac{11}{3}}$  
b. $r^3$  
c. $r^{\frac{8}{3}}$  
d. $r^2$  
e. $r^{\frac{1}{3}}$

> [!summary]+ **Jawaban No. 3** 
>
> **(c). $r^{\frac{8}{3}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi Geometrik: $X \sim \text{Geom}(p)$ — jumlah percobaan hingga sukses pertama.
> >
> > $$P[X \geq k] = (1-p)^{k-1}$$
> >
> > Sifat memoryless (tanpa ingatan) distribusi geometrik:
> >
> > $$P[X \geq m+n \mid X \geq m] = P[X \geq n+1]$$
> >
> > Probabilitas bersyarat: $P(A|B) = \frac{P(A \cap B)}{P(B)}$
>
> **Diketahui:**
> - $X$ = jumlah pasien yang dites (distribusi Geometrik dengan parameter $p$)
> - $r = P[X \geq 4] = (1-p)^3$
> - Target: $P[X \geq 12 \mid X \geq 4]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan $r$ dalam $p$**
> >
> > $$r = P[X \geq 4] = (1-p)^3$$
> >
> > Sehingga $(1-p) = r^{1/3}$.
> >
> > **Langkah 2: Hitung probabilitas bersyarat**
> >
> > $$P[X \geq 12 \mid X \geq 4] = \frac{P[X \geq 12 \cap X \geq 4]}{P[X \geq 4]} = \frac{P[X \geq 12]}{P[X \geq 4]}$$
> >
> > Karena $\{X \geq 12\} \subseteq \{X \geq 4\}$.
> >
> > **Langkah 3: Hitung numerator dan denominator**
> >
> > $$P[X \geq 12] = (1-p)^{11} = \left(r^{1/3}\right)^{11} = r^{11/3}$$
> >
> > $$P[X \geq 4] = (1-p)^3 = r$$
> >
> > **Langkah 4: Hitung hasil akhir**
> >
> > $$P[X \geq 12 \mid X \geq 4] = \frac{r^{11/3}}{r^1} = r^{11/3 - 1} = r^{8/3}$$
> >
> > **Hasil Akhir:** **(c)**. $r^{8/3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan sifat memoryless secara salah: $P[X \geq 12 \mid X \geq 4] = P[X \geq 8]$, yang memberikan $(1-p)^7 = r^{7/3}$ — ini mengabaikan bahwa memoryless benar tapi formula $P[X \geq n+1]$ harus disesuaikan.
> > > - Keliru menulis $P[X \geq k] = (1-p)^k$ alih-alih $(1-p)^{k-1}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "paling sedikit 4 dites" = tepat 4, lalu menghitung secara berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "dites satu per satu sampai ditemukan" → distribusi Geometrik.
> > > - Jika muncul probabilitas bersyarat dua kejadian $\{X \geq m\}$ dan $\{X \geq n\}$ dengan $m < n$ → $\frac{P[X \geq n]}{P[X \geq m]}$.

---

## **No. 4**

Misalkan $X$ adalah variabel acak berdistribusi binomial sehingga

$$P[X = k] = \binom{n}{k} p^k (1-p)^{n-k} \quad \text{untuk } n \geq 1 \text{ dan } k = 0, 1, 2, \ldots, n$$

dan fungsi pembangkit probabilitas dari $X$ adalah $P_X(t) = (1 - p + pt)^n = (0{,}3 + 0{,}7t)^6$.

Tentukanlah nilai dari $E[X^3]$.

a. Kurang dari $75$  
b. Sekurang-kurangnya $75$ tapi kurang dari $80$  
c. Sekurang-kurangnya $80$ tapi kurang dari $85$  
d. Sekurang-kurangnya $85$ tapi kurang dari $90$  
e. Sekurang-kurangnya $90$

> [!summary]+ **Jawaban No. 4** 
>
> **(d). Sekurang-kurangnya $85$ tapi kurang dari $90$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Fungsi Pembangkit Probabilitas (PGF): $G_X(t) = E[t^X]$
> > Momen faktorial: $G_X^{(k)}(1) = E[X(X-1)\cdots(X-k+1)]$
> > Untuk Binomial $B(n,p)$: $E[X] = np$, $E[X^2] = np(1-p) + n^2p^2$, $\text{Var}(X) = np(1-p)$
> > Hubungan momen biasa dengan momen faktorial:
> >
> > $$E[X^3] = E[X(X-1)(X-2)] + 3E[X(X-1)] + E[X]$$
> >
>
> **Diketahui:**
> - $n = 6$, $p = 0{,}7$ (dari PGF: $0{,}3 + 0{,}7t$, sehingga $1-p = 0{,}3$, $p = 0{,}7$)
> - Target: $E[X^3]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Parameter**
> > Dari $G_X(t) = (0{,}3 + 0{,}7t)^6$: $n = 6$, $p = 0{,}7$, $q = 1-p = 0{,}3$.
> >
> > **Langkah 2: Hitung momen faktorial dari PGF**
> > Momen faktorial ke-$k$ dari PGF Binomial:
> >
> > $$\mu_{(1)} = E[X] = np = 6 \cdot 0{,}7 = 4{,}2$$
> >
> > $$\mu_{(2)} = E[X(X-1)] = n(n-1)p^2 = 6 \cdot 5 \cdot 0{,}49 = 14{,}7$$
> >
> > $$\mu_{(3)} = E[X(X-1)(X-2)] = n(n-1)(n-2)p^3 = 6 \cdot 5 \cdot 4 \cdot 0{,}343 = 41{,}16$$
> >
> > **Langkah 3: Konversi ke $E[X^3]$**
> >
> > $$E[X^3] = \mu_{(3)} + 3\mu_{(2)} + \mu_{(1)}$$
> >
> > $$E[X^3] = 41{,}16 + 3(14{,}7) + 4{,}2$$
> >
> > $$E[X^3] = 41{,}16 + 44{,}1 + 4{,}2 = 89{,}46$$
> >
> > **Hasil Akhir:** **(d)**. Sekurang-kurangnya $85$ tapi kurang dari $90$ ($E[X^3] = 89{,}46$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[X^3] = (E[X])^3 = 4{,}2^3 = 74{,}088$ — ini hanya valid jika $X$ adalah konstanta.
> > > - Salah rumus konversi momen faktorial: lupa suku $3\mu_{(2)}$ atau $\mu_{(1)}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah membaca parameter PGF: $0{,}3 + 0{,}7t$ berarti $1-p = 0{,}3$, bukan $p = 0{,}3$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi PGF dan meminta $E[X^k]$ → konversi via momen faktorial, bukan turunan langsung MGF.

---

## **No. 5**

Misalkan $X$ dan $Y$ adalah variabel acak dengan fungsi densitas bersama sebagai berikut:

| | $X = 2$ | $X = 3$ | $X = 4$ | $X = 5$ |
|:-:|:-:|:-:|:-:|:-:|
| $Y = 0$ | $0{,}05$ | $0{,}05$ | $0{,}15$ | $0{,}05$ |
| $Y = 1$ | $0{,}4$ | $0$ | $0$ | $0$ |
| $Y = 2$ | $0{,}05$ | $0{,}15$ | $0{,}1$ | $0$ |

Tentukanlah nilai dari $\text{Cov}[X - Y,\ X + Y]$.

a. Kurang dari $-1$  
b. Sekurang-kurangnya $-1$ tapi kurang dari $0$  
c. Sekurang-kurangnya $0$ tapi kurang dari $1$  
d. Sekurang-kurangnya $1$ tapi kurang dari $1{,}5$  
e. Sekurang-kurangnya $1{,}5$

> [!summary]+ **Jawaban No. 5** 
>
> **(c). Sekurang-kurangnya $0$ tapi kurang dari $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > $$\text{Cov}(U, V) = E[UV] - E[U]E[V]$$
> >
> > Untuk $U = X - Y$ dan $V = X + Y$:
> >
> > $$\text{Cov}(X-Y, X+Y) = \text{Var}(X) - \text{Var}(Y)$$
> >
> > karena $\text{Cov}(X-Y, X+Y) = E[X^2] - E[Y^2] - (E[X]^2 - E[Y]^2) = \text{Var}(X) - \text{Var}(Y)$
>
> **Diketahui:**
> - Tabel distribusi gabungan $X$ dan $Y$ seperti di atas
> - Target: $\text{Cov}[X-Y, X+Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan Kovariansi**
> >
> > $$\text{Cov}(X-Y, X+Y) = \text{Var}(X) - \text{Var}(Y)$$
> >
> > **Langkah 2: Hitung Distribusi Marginal $X$**
> > $P(X=2) = 0{,}05 + 0{,}4 + 0{,}05 = 0{,}5$
> > $P(X=3) = 0{,}05 + 0 + 0{,}15 = 0{,}2$
> > $P(X=4) = 0{,}15 + 0 + 0{,}1 = 0{,}25$
> > $P(X=5) = 0{,}05 + 0 + 0 = 0{,}05$
> >
> > $E[X] = 2(0{,}5) + 3(0{,}2) + 4(0{,}25) + 5(0{,}05) = 1{,}0 + 0{,}6 + 1{,}0 + 0{,}25 = 2{,}85$
> > $E[X^2] = 4(0{,}5) + 9(0{,}2) + 16(0{,}25) + 25(0{,}05) = 2{,}0 + 1{,}8 + 4{,}0 + 1{,}25 = 9{,}05$
> > $\text{Var}(X) = 9{,}05 - (2{,}85)^2 = 9{,}05 - 8{,}1225 = 0{,}9275$
> >
> > **Langkah 3: Hitung Distribusi Marginal $Y$**
> > $P(Y=0) = 0{,}05 + 0{,}05 + 0{,}15 + 0{,}05 = 0{,}30$
> > $P(Y=1) = 0{,}4 + 0 + 0 + 0 = 0{,}40$
> > $P(Y=2) = 0{,}05 + 0{,}15 + 0{,}1 + 0 = 0{,}30$
> >
> > $E[Y] = 0(0{,}3) + 1(0{,}4) + 2(0{,}3) = 0 + 0{,}4 + 0{,}6 = 1{,}0$
> > $E[Y^2] = 0(0{,}3) + 1(0{,}4) + 4(0{,}3) = 0 + 0{,}4 + 1{,}2 = 1{,}6$
> > $\text{Var}(Y) = 1{,}6 - (1{,}0)^2 = 0{,}6$
> >
> > **Langkah 4: Hitung Kovariansi**
> >
> > $$\text{Cov}(X-Y, X+Y) = \text{Var}(X) - \text{Var}(Y) = 0{,}9275 - 0{,}6 = 0{,}3275$$
> >
> > **Hasil Akhir:** **(c)**. Sekurang-kurangnya $0$ tapi kurang dari $1$ ($\text{Cov} \approx 0{,}3275$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Cov}(X-Y, X+Y)$ secara langsung menggunakan $E[(X-Y)(X+Y)] - E[X-Y]E[X+Y]$ tanpa menyederhanakan — lebih panjang dan rentan error.
> > > - Lupa bahwa $\text{Cov}(X-Y, X+Y) = \text{Var}(X) - \text{Var}(Y)$ (berlaku jika $X$ dan $Y$ tidak harus independen).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menjumlahkan salah satu baris/kolom tabel untuk mendapat marginal.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal meminta $\text{Cov}(aX+bY, cX+dY)$ → gunakan sifat bilinear kovariansi.

---

## **No. 6**

Menurut model kerusakan akibat kecelakaan mobil dalam suatu portofolio polis asuransi, kecelakaan mobil mengakibatkan kerusakan ringan atau kerusakan berat. Jika terjadi kerusakan ringan maka jumlah kerusakan berdistribusi eksponensial dengan rata-rata $1$ dan jika terjadi kerusakan berat maka jumlah kerusakan berdistribusi eksponensial dengan rata-rata $2$. $80\%$ kecelakaan mobil mengalami kerusakan ringan. Tentukanlah median dari jumlah kerusakan polis asuransi dalam portofolio ini ketika terjadi kecelakaan mobil.

a. Kurang dari $0{,}75$  
b. Sekurang-kurangnya $0{,}75$ tapi kurang dari $0{,}8$  
c. Sekurang-kurangnya $0{,}8$ tapi kurang dari $0{,}85$  
d. Sekurang-kurangnya $0{,}85$ tapi kurang dari $0{,}9$  
e. Sekurang-kurangnya $0{,}9$

> [!summary]+ **Jawaban No. 6** 
>
> **(b). Sekurang-kurangnya $0{,}75$ tapi kurang dari $0{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2–3; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi campuran (mixture): $F(x) = w_1 F_1(x) + w_2 F_2(x)$
> > Eksponensial dengan rata-rata $\theta$: $F(x) = 1 - e^{-x/\theta}$, $x > 0$.
> > Di sini $\theta$ adalah parameter skala (rata-rata), bukan rate $\lambda = 1/\theta$.
> > Median $m$: $F(m) = 0{,}5$
>
> **Diketahui:**
> - Kerusakan ringan (prob. $0{,}8$): $X \sim \text{Exp}(\theta = 1)$
> - Kerusakan berat (prob. $0{,}2$): $X \sim \text{Exp}(\theta = 2)$
> - Target: median $m$ dari $F(x) = 0{,}8(1-e^{-x}) + 0{,}2(1-e^{-x/2})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis CDF campuran**
> >
> > $$F(x) = 0{,}8(1 - e^{-x}) + 0{,}2(1 - e^{-x/2})$$
> >
> > **Langkah 2: Selesaikan $F(m) = 0{,}5$**
> >
> > $$0{,}8(1 - e^{-m}) + 0{,}2(1 - e^{-m/2}) = 0{,}5$$
> >
> > $$0{,}8 - 0{,}8e^{-m} + 0{,}2 - 0{,}2e^{-m/2} = 0{,}5$$
> >
> > $$1 - 0{,}8e^{-m} - 0{,}2e^{-m/2} = 0{,}5$$
> >
> > $$0{,}8e^{-m} + 0{,}2e^{-m/2} = 0{,}5$$
> >
> > **Langkah 3: Substitusi $u = e^{-m/2}$**
> >
> > $$0{,}8u^2 + 0{,}2u - 0{,}5 = 0$$
> >
> > Kalikan dengan $10$: $8u^2 + 2u - 5 = 0$
> >
> > $$u = \frac{-2 \pm \sqrt{4 + 160}}{16} = \frac{-2 \pm \sqrt{164}}{16}$$
> >
> > Ambil nilai positif: $u = \frac{-2 + 12{,}806}{16} \approx \frac{10{,}806}{16} \approx 0{,}6754$
> >
> > **Langkah 4: Hitung $m$**
> >
> > $$e^{-m/2} = 0{,}6754 \Rightarrow -m/2 = \ln(0{,}6754) \approx -0{,}3924$$
> >
> > $$m \approx 0{,}7848$$
> >
> > **Hasil Akhir:** **(b)**. Sekurang-kurangnya $0{,}75$ tapi kurang dari $0{,}8$ ($m \approx 0{,}7848$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari median dari rata-rata terbobot mean, bukan dari CDF campuran.
> > > - Menggunakan $E[X] = 0{,}8(1) + 0{,}2(2) = 1{,}2$ sebagai median — mean ≠ median untuk distribusi tidak simetris.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah mengidentifikasi parameter: "rata-rata 1" berarti $\theta = 1$ (skala), bukan $\lambda = 1$ (rate), meskipun kebetulan sama di kasus pertama.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "distribusi campuran" (mixture) → CDF campuran, bukan PDF campuran saja.
> > > - Jika muncul persamaan transenden → gunakan substitusi $u = e^{-m/k}$ untuk mereduksi ke polinomial.

---

## **No. 7**

Diberikan sebuah kubus besar berukuran $3 \times 3 \times 3$ yang seluruh permukaannya dicat dengan warna merah. Kubus tersebut dipotong menjadi $27$ kubus satuan (kubus kecil berukuran $1 \times 1 \times 1$). Diketahui bahwa Amir mengambil satu kubus kecil yang salah satu sisinya berwarna merah. Tentukan peluang kubus kecil yang diambil Amir memiliki tepat dua sisi berwarna merah.

a. $\dfrac{6}{27}$  
b. $\dfrac{8}{27}$  
c. $\dfrac{12}{27}$  
d. $\dfrac{4}{13}$  
e. $\dfrac{6}{13}$

> [!summary]+ **Jawaban No. 7** 
>
> **(e). $\dfrac{6}{13}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(A|B) = \frac{P(A \cap B)}{P(B)}$$
> >
> > Enumerasi kubus:
> > - Kubus sudut (3 sisi merah): 8 buah
> > - Kubus tepi bukan sudut (2 sisi merah): 12 buah
> > - Kubus muka tengah (1 sisi merah): 6 buah
> > - Kubus tengah (0 sisi merah): 1 buah
>
> **Diketahui:**
> - Kubus $3 \times 3 \times 3$ → 27 kubus satuan
> - Kondisi: kubus yang diambil memiliki setidaknya 1 sisi merah
> - Target: $P(\text{tepat 2 sisi merah} \mid \text{setidaknya 1 sisi merah})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Klasifikasi kubus satuan**
> > - 8 kubus sudut: masing-masing 3 sisi merah
> > - 12 kubus tepi (bukan sudut): masing-masing 2 sisi merah
> > - 6 kubus muka tengah: masing-masing 1 sisi merah
> > - 1 kubus inti tengah: 0 sisi merah
> > Total: $8 + 12 + 6 + 1 = 27$ ✓
> >
> > **Langkah 2: Identifikasi kubus dengan ≥ 1 sisi merah**
> >
> > $$|\{B\}| = 8 + 12 + 6 = 26$$
> >
> > **Langkah 3: Identifikasi kubus dengan tepat 2 sisi merah**
> >
> > $$|\{A \cap B\}| = 12$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(\text{2 sisi merah} \mid \text{≥1 sisi merah}) = \frac{12}{26} = \frac{6}{13}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{6}{13}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P = 12/27$ tanpa memperhatikan kondisi bahwa kubus yang diambil memiliki setidaknya 1 sisi merah.
> > > - Salah menghitung jumlah kubus tepi: ada 12 buah, bukan 8.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Salah satu sisinya berwarna merah" ditafsirkan sebagai "tepat satu sisi merah" — padahal ini berarti "setidaknya satu sisi merah" (kondisi/syarat untuk diambil).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "diketahui bahwa" atau memberikan kondisi → selalu gunakan probabilitas bersyarat.

---

## **No. 8**

Besarnya tenaga minimum yang diperlukan untuk memutuskan jenis kabel tertentu berdistribusi normal dengan mean sebesar $12{.}432$ dan standar deviasi sebesar $25$. Terdapat sampel acak sebanyak $400$ kabel jenis ini dipilih. Tentukanlah probabilitas bahwa paling sedikit $349$ kabel yang dipilih tidak akan putus di bawah tenaga sebesar $12{.}400$.

a. $0{,}62$  
b. $0{,}67$  
c. $0{,}92$  
d. $0{,}97$  
e. $1$

> [!summary]+ **Jawaban No. 8** 
>
> **(d). $0{,}97$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> >
> > Kabel tidak putus jika tenaga minimum $> 12{.}400$, yaitu $P(X > 12{.}400)$ untuk $X \sim N(12432, 25^2)$.
> > Jumlah kabel tidak putus $K \sim B(400, p)$, gunakan pendekatan normal.
> >
> > $$Z = \frac{X - \mu}{\sigma}$$
> >
>
> **Diketahui:**
> - $X \sim N(\mu = 12432, \sigma = 25)$
> - $n = 400$ kabel
> - Target: $P(K \geq 349)$ di mana $K$ = jumlah kabel yang tidak putus di bawah $12{.}400$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $p = P(X > 12400)$**
> >
> > $$Z = \frac{12400 - 12432}{25} = \frac{-32}{25} = -1{,}28$$
> >
> > $$p = P(X > 12400) = P(Z > -1{,}28) = \Phi(1{,}28) \approx 0{,}8997 \approx 0{,}9$$
> >
> > **Langkah 2: Distribusi $K$**
> > $K \sim B(400, 0{,}9)$
> > $E[K] = 400 \cdot 0{,}9 = 360$
> > $\text{Var}(K) = 400 \cdot 0{,}9 \cdot 0{,}1 = 36$, $\sigma_K = 6$
> >
> > **Langkah 3: Pendekatan Normal untuk $P(K \geq 349)$**
> >
> > $$P(K \geq 349) \approx P\left(Z \geq \frac{349 - 360}{6}\right) = P\left(Z \geq \frac{-11}{6}\right) = P(Z \geq -1{,}833)$$
> >
> > $$= \Phi(1{,}833) \approx 0{,}9666 \approx 0{,}97$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}97$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa ada dua tahap: pertama cari $p$ dari distribusi Normal, lalu gunakan distribusi Binomial untuk menghitung probabilitas pada $K$.
> > > - Salah arah pertidaksamaan: kabel "tidak putus" berarti tenaga minimum $> 12{.}400$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Paling sedikit 349" → $K \geq 349$, bukan $K > 349$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan distribusi normal kemudian sampel → proses dua langkah (hitung $p$, lalu Binomial/Normal).

---

## **No. 9**

Diketahui suatu fungsi kumulatif bersama yaitu

$$F(x, y) = \frac{1}{250}(20xy - x^2 y - xy^2), \quad 0 \leq x \leq 5 \text{ dan } 0 \leq y \leq 5$$

Tentukanlah nilai dari $E[Y|X = 0]$.

a. $\dfrac{5}{3}$  
b. $\dfrac{20}{11}$  
c. $2$  
d. $\dfrac{20}{9}$  
e. $\dfrac{5}{2}$

> [!summary]+ **Jawaban No. 9** 
>
> **(d). $\dfrac{20}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > PDF gabungan dari CDF: $f(x,y) = \dfrac{\partial^2 F}{\partial x \partial y}$
> > PDF marginal: $f_X(x) = \int_0^5 f(x,y)\,dy$
> > PDF bersyarat: $f_{Y|X}(y|x) = \dfrac{f(x,y)}{f_X(x)}$
> > Nilai harapan bersyarat: $E[Y|X=x] = \int y \cdot f_{Y|X}(y|x)\,dy$
>
> **Diketahui:**
> - $F(x,y) = \frac{1}{250}(20xy - x^2y - xy^2)$, support $[0,5] \times [0,5]$
> - Target: $E[Y \mid X = 0]$ — gunakan limit $x \to 0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PDF gabungan**
> >
> > $$f(x,y) = \frac{\partial^2 F}{\partial x \partial y} = \frac{\partial}{\partial y}\left[\frac{1}{250}(20y - 2xy - y^2)\right]$$
> >
> > $$= \frac{1}{250}(20 - 2x - 2y)$$
> >
> > **Langkah 2: Hitung PDF marginal $f_X(x)$**
> >
> > $$f_X(x) = \int_0^5 \frac{20 - 2x - 2y}{250}\,dy = \frac{1}{250}\left[(20-2x)y - y^2\right]_0^5$$
> >
> > $$= \frac{1}{250}\left[5(20-2x) - 25\right] = \frac{75 - 10x}{250} = \frac{15 - 2x}{50}$$
> >
> > **Langkah 3: PDF bersyarat $f_{Y|X}(y|x=0)$**
> > Pada $x = 0$:
> >
> > $$f_{Y|X}(y|0) = \frac{f(0,y)}{f_X(0)} = \frac{(20-2y)/250}{15/50} = \frac{(20-2y)/250}{15/50} = \frac{20-2y}{250} \cdot \frac{50}{15} = \frac{20-2y}{75}$$
> >
> > **Langkah 4: Hitung $E[Y|X=0]$**
> >
> > $$E[Y|X=0] = \int_0^5 y \cdot \frac{20-2y}{75}\,dy = \frac{1}{75}\int_0^5 (20y - 2y^2)\,dy$$
> >
> > $$= \frac{1}{75}\left[10y^2 - \frac{2y^3}{3}\right]_0^5 = \frac{1}{75}\left[250 - \frac{250}{3}\right] = \frac{1}{75} \cdot \frac{500}{3} = \frac{500}{225} = \frac{20}{9}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{20}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menurunkan CDF dua kali terhadap kedua variabel untuk mendapat PDF gabungan.
> > > - Substitusi $x = 0$ ke $F(x,y)$ langsung tanpa menurunkan — CDF bukan PDF.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $E[Y|X=0]$ sama dengan $E[Y]$ (marginal) — ini hanya benar jika $X$ dan $Y$ independen.
> >
> > > [!CAUTION] Red Flags
> > > - Jika diberikan CDF bersama → selalu turunkan dua kali untuk mendapat PDF sebelum menghitung ekspektasi bersyarat.

---

## **No. 10**

Diketahui variabel acak diskrit $X$ dengan fungsi probabilitas sebagai berikut:

| $x$ | $10$ | $20$ | $30$ | $40$ | $50$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| $f(x)$ | $0{,}1$ | $0{,}1$ | $0{,}4$ | $0{,}3$ | $0{,}1$ |

Misalkan $\mu_X$ dan $\sigma_X$ adalah mean dan standar deviasi dari $X$. Tentukanlah nilai dari $P(|X - \mu_X| \leq \sigma_X)$.

a. $1$  
b. $0{,}8$  
c. $0{,}7$  
d. $0{,}5$  
e. $0{,}4$

> [!summary]+ **Jawaban No. 10** 
>
> **(c). $0{,}7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > $$E[X] = \sum x \cdot p_X(x), \quad E[X^2] = \sum x^2 \cdot p_X(x)$$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2, \quad \sigma_X = \sqrt{\text{Var}(X)}$$
> >
>
> **Diketahui:**
> - Tabel PMF seperti di atas
> - Target: $P(\mu_X - \sigma_X \leq X \leq \mu_X + \sigma_X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\mu_X$**
> >
> > $$\mu_X = 10(0{,}1) + 20(0{,}1) + 30(0{,}4) + 40(0{,}3) + 50(0{,}1) = 1+2+12+12+5 = 32$$
> >
> > **Langkah 2: Hitung $\sigma_X$**
> >
> > $$E[X^2] = 100(0{,}1)+400(0{,}1)+900(0{,}4)+1600(0{,}3)+2500(0{,}1)$$
> >
> > $$= 10+40+360+480+250 = 1140$$
> >
> > $$\text{Var}(X) = 1140 - 32^2 = 1140 - 1024 = 116$$
> >
> > $$\sigma_X = \sqrt{116} \approx 10{,}77$$
> >
> > **Langkah 3: Tentukan interval $[\mu_X - \sigma_X, \mu_X + \sigma_X]$**
> >
> > $$[32 - 10{,}77,\ 32 + 10{,}77] = [21{,}23,\ 42{,}77]$$
> >
> > **Langkah 4: Identifikasi nilai $X$ dalam interval**
> > Nilai $x$ yang masuk: $x = 30$ (prob. $0{,}4$) dan $x = 40$ (prob. $0{,}3$).
> > ($x = 20 < 21{,}23$ dan $x = 50 > 42{,}77$ tidak masuk.)
> >
> > $$P(|X - 32| \leq 10{,}77) = P(X \in \{30, 40\}) = 0{,}4 + 0{,}3 = 0{,}7$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(|X - \mu| \leq \sigma) \geq 0{,}75$ selalu (Chebyshev memberikan lower bound untuk $k = 1$: hanya $\geq 0$).
> > > - Lupa memeriksa apakah batas interval inklusif atau eksklusif — di sini inklusif ($\leq$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira nilai $x = 20$ dan $x = 40$ masuk, tanpa memeriksa batas numerik $[21{,}23, 42{,}77]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal meminta $P(|X - \mu| \leq k\sigma)$ → hitung $\mu$ dan $\sigma$ secara eksplisit dulu.

---

## **No. 11**

Diketahui $X_1$, $X_2$ dan $X_3$ merupakan variabel acak eksponensial yang saling independen dengan rata-rata masing-masing $2$, $3$ dan $4$. $Y$ didefinisikan sebagai $\max\{X_1, X_2, X_3\}$. Tentukan nilai dari $E[Y]$.

a. Kurang dari $3$  
b. Sekurang-kurangnya $3$ tapi kurang dari $4$  
c. Sekurang-kurangnya $4$ tapi kurang dari $5$  
d. Sekurang-kurangnya $5$ tapi kurang dari $6$  
e. Sekurang-kurangnya $6$

> [!summary]+ **Jawaban No. 11** 
>
> **(d). Sekurang-kurangnya $5$ tapi kurang dari $6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> >
> > CDF dari maksimum: $F_Y(y) = F_{X_1}(y) \cdot F_{X_2}(y) \cdot F_{X_3}(y)$ (karena independen)
> > Untuk $X_i \sim \text{Exp}(\theta_i)$ (rata-rata $\theta_i$): $F_{X_i}(y) = 1 - e^{-y/\theta_i}$
> >
> > $$E[Y] = \int_0^\infty [1 - F_Y(y)]\,dy = \int_0^\infty P(Y > y)\,dy$$
> >
> > Di sini $\theta_i$ adalah parameter skala (rata-rata), berbeda dari rate $\lambda_i = 1/\theta_i$.
>
> **Diketahui:**
> - $X_1 \sim \text{Exp}(\theta_1=2)$, $X_2 \sim \text{Exp}(\theta_2=3)$, $X_3 \sim \text{Exp}(\theta_3=4)$
> - $Y = \max\{X_1, X_2, X_3\}$
> - Target: $E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: CDF dari $Y$**
> >
> > $$F_Y(y) = (1-e^{-y/2})(1-e^{-y/3})(1-e^{-y/4})$$
> >
> > **Langkah 2: Ekspansi $P(Y > y) = 1 - F_Y(y)$**
> > Gunakan inklusi-eksklusi:
> >
> > $$P(Y > y) = P(X_1>y) + P(X_2>y) + P(X_3>y)$$
> >
> > $$- P(X_1>y, X_2>y) - P(X_1>y, X_3>y) - P(X_2>y, X_3>y)$$
> >
> > $$+ P(X_1>y, X_2>y, X_3>y)$$
> >
> > $$= e^{-y/2} + e^{-y/3} + e^{-y/4} - e^{-5y/6} - e^{-3y/4} - e^{-7y/12} + e^{-13y/12}$$
> >
> > **Langkah 3: Hitung $E[Y] = \int_0^\infty P(Y > y)\,dy$**
> > Gunakan $\int_0^\infty e^{-ay}\,dy = 1/a$:
> >
> > $$E[Y] = 2 + 3 + 4 - \frac{6}{5} - \frac{4}{3} - \frac{12}{7} + \frac{12}{13}$$
> >
> > $$= 9 - 1{,}2 - 1{,}3333 - 1{,}7143 + 0{,}9231$$
> >
> > $$= 9 - 3{,}3243 = 5{,}676$$
> >
> > **Hasil Akhir:** **(d)**. Sekurang-kurangnya $5$ tapi kurang dari $6$ ($E[Y] \approx 5{,}676$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[\max] = \max\{E[X_i]\} = 4$ — ini salah total.
> > > - Lupa menggunakan formula $E[Y] = \int_0^\infty P(Y > y)\,dy$ untuk variabel non-negatif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan rate $\lambda_i = 1/\theta_i$ tanpa konsisten dalam seluruh langkah.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut $Y = \max\{X_1, \ldots, X_n\}$ dengan distribusi berbeda → inklusi-eksklusi pada $P(Y > y)$.

---

## **No. 12**

Sebuah koin dilempar sebanyak $200$ kali. Pelemparannya tidak tergantung satu sama lain. Banyaknya gambar yang muncul ketika koin dilempar adalah $X$. Tentukanlah nilai dari bilangan bulat terkecil $k$ (dengan menerapkan pendekatan normal dengan koreksi bilangan bulat) yang memenuhi hubungan probabilitas

$$P(100 - k \leq X \leq 100 + k) \geq 0{,}95$$

a. $13$  
b. $14$  
c. $15$  
d. $16$  
e. $17$

> [!summary]+ **Jawaban No. 12** 
>
> **(b). $14$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim B(200, 0{,}5)$, pendekatan normal: $X \approx N(\mu, \sigma^2)$
> > Koreksi kesinambungan (continuity correction): $P(a \leq X \leq b) \approx P(a - 0{,}5 < Z\sigma + \mu < b + 0{,}5)$
> > Untuk $P(100-k \leq X \leq 100+k)$: setelah koreksi → $P\left(Z \leq \frac{k+0{,}5}{\sigma}\right) - P\left(Z \leq \frac{-(k+0{,}5)}{\sigma}\right)$
>
> **Diketahui:**
> - $n = 200$, $p = 0{,}5$
> - $\mu = 100$, $\sigma^2 = 50$, $\sigma = \sqrt{50} = 5\sqrt{2} \approx 7{,}071$
> - Target: bilangan bulat terkecil $k$ sehingga $P(100-k \leq X \leq 100+k) \geq 0{,}95$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pendekatan normal dengan koreksi kesinambungan**
> >
> > $$P(100-k \leq X \leq 100+k) \approx P\left(\frac{-(k+0{,}5)}{7{,}071} \leq Z \leq \frac{k+0{,}5}{7{,}071}\right) \geq 0{,}95$$
> >
> > Karena distribusi simetris: $2\Phi\left(\frac{k+0{,}5}{7{,}071}\right) - 1 \geq 0{,}95$
> >
> > **Langkah 2: Selesaikan**
> >
> > $$\Phi\left(\frac{k+0{,}5}{7{,}071}\right) \geq 0{,}975$$
> >
> > Nilai $z$ untuk $\Phi(z) = 0{,}975$: $z = 1{,}96$
> >
> > $$\frac{k+0{,}5}{7{,}071} \geq 1{,}96 \Rightarrow k + 0{,}5 \geq 13{,}859 \Rightarrow k \geq 13{,}359$$
> >
> > **Langkah 3: Ambil bilangan bulat terkecil**
> > $k \geq 13{,}359 \Rightarrow k_{\min} = 14$
> >
> > **Hasil Akhir:** **(b)**. $14$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menggunakan koreksi kesinambungan, menghasilkan $k \geq 1{,}96 \times 7{,}071 - 0{,}5 \approx 13{,}36$, yang tetap memberikan $k = 14$, tetapi prosedurnya tidak tepat.
> > > - Menggunakan $\sigma = 50$ alih-alih $\sigma = \sqrt{50}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Bilangan bulat terkecil" berarti ceiling ($\lceil 13{,}36 \rceil = 14$), bukan pembulatan biasa.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "koreksi bilangan bulat" atau "continuity correction" → tambahkan $0{,}5$ pada batas interval diskrit.

---

## **No. 13**

Kerugian tahunan mengikuti distribusi seragam pada interval $[0, 2000]$. Premi asuransi sebesar $1200$ dibebankan untuk menutup kerugian. Jika kerugian di bawah premi, manajer risiko menerima bonus sebesar $25\%$ dari selisih premi dan kerugian. Tentukanlah ekspektasi bonus yang akan diterima manajer risiko.

a. $150$  
b. $130$  
c. $110$  
d. $90$  
e. $70$

> [!summary]+ **Jawaban No. 13** 
>
> **(d). $90$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > $L \sim U(0, 2000)$, $f_L(l) = \frac{1}{2000}$
> > Bonus: $B = 0{,}25(1200 - L)$ jika $L < 1200$, dan $B = 0$ jika $L \geq 1200$
> >
> > $$E[B] = \int_0^{1200} 0{,}25(1200 - l) \cdot \frac{1}{2000}\,dl$$
> >
>
> **Diketahui:**
> - $L \sim U(0, 2000)$
> - Bonus $B = 0{,}25 \max(1200 - L, 0)$
> - Target: $E[B]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup integral**
> >
> > $$E[B] = \int_0^{1200} 0{,}25(1200 - l) \cdot \frac{1}{2000}\,dl$$
> >
> > **Langkah 2: Hitung integral**
> >
> > $$= \frac{0{,}25}{2000} \int_0^{1200} (1200 - l)\,dl = \frac{0{,}25}{2000} \left[1200l - \frac{l^2}{2}\right]_0^{1200}$$
> >
> > $$= \frac{0{,}25}{2000} \left[1{.}440{.}000 - 720{.}000\right] = \frac{0{,}25}{2000} \cdot 720{.}000$$
> >
> > $$= \frac{180{.}000}{2000} = 90$$
> >
> > **Hasil Akhir:** **(d)**. $90$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegralkan dari $0$ sampai $2000$ tanpa memperhatikan bonus hanya ada jika $L < 1200$.
> > > - Lupa mengalikan dengan PDF $\frac{1}{2000}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira bonus = $0{,}25 \times 1200$ tanpa memperhitungkan nilai acak dari kerugian.
> >
> > > [!CAUTION] Red Flags
> > > - Jika bonus/pembayaran bersyarat → tulis fungsi $B(L)$ secara eksplisit, lalu hitung $E[B]$ dengan integral atas support yang relevan.

---

## **No. 14**

Seorang siswa mengikuti ujian PAI yang terdiri dari $20$ soal benar-salah. Siswa mengetahui jawaban untuk $N$ buah soal sehingga dapat dijawab dengan benar, dan menebak jawaban sisanya. Peluang bersyarat siswa mengetahui jawaban suatu pertanyaan, diketahui bahwa siswa menjawabnya dengan benar adalah $0{,}824$. Tentukanlah nilai dari $N$.

a. $8$  
b. $10$  
c. $14$  
d. $16$  
e. $18$

> [!summary]+ **Jawaban No. 14** 
>
> **(c). $14$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > Teorema Bayes:
> >
> > $$P(K \mid B) = \frac{P(B \mid K) P(K)}{P(B \mid K)P(K) + P(B \mid K^c)P(K^c)}$$
> >
> > di mana $K$ = tahu jawaban, $B$ = benar.
>
> **Diketahui:**
> - $n = 20$ soal, $N$ soal diketahui
> - $P(K) = N/20$, $P(K^c) = (20-N)/20$
> - $P(B|K) = 1$ (jika tahu pasti benar), $P(B|K^c) = 1/2$ (tebak benar-salah)
> - $P(K|B) = 0{,}824$
> - Target: $N$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Teorema Bayes**
> >
> > $$0{,}824 = \frac{1 \cdot \frac{N}{20}}{1 \cdot \frac{N}{20} + \frac{1}{2} \cdot \frac{20-N}{20}} = \frac{N}{N + \frac{20-N}{2}} = \frac{N}{\frac{N+20}{2}} = \frac{2N}{N+20}$$
> >
> > **Langkah 2: Selesaikan**
> >
> > $$0{,}824(N + 20) = 2N$$
> >
> > $$0{,}824N + 16{,}48 = 2N$$
> >
> > $$16{,}48 = 1{,}176N$$
> >
> > $$N = \frac{16{,}48}{1{,}176} \approx 14$$
> >
> > **Hasil Akhir:** **(c)**. $14$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira peluang menebak benar pada soal benar-salah adalah $1/3$ (soal pilihan ganda) — soal ini $1/2$.
> > > - Lupa bahwa $P(B|K) = 1$ (jika tahu, pasti benar).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Membalik posisi Bayes: menghitung $P(B|K)$ bukan $P(K|B)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "peluang bersyarat... diketahui..." → langsung identifikasi sebagai Teorema Bayes.

---

## **No. 15**

Diketahui banyaknya anggota keluarga yang dipilih secara acak di suatu kota tertentu adalah $1 + X$, dimana $X$ mempunyai distribusi binomial dengan $n = 3$, $p = 0{,}4$. Fasilitas medis kota memperkirakan biaya medis tahunan (dalam jutaan rupiah) untuk sebuah keluarga adalah sebagai berikut:

| Banyaknya anggota keluarga | $1$ | $2$ | $3$ | $4$ |
|:-:|:-:|:-:|:-:|:-:|
| Biaya medis tahunan (dalam jutaan rupiah) | $2$ | $3$ | $3{,}75$ | $4{,}25$ |

Tentukanlah rata-rata biaya medis tahunan (dalam jutaan rupiah) per keluarga di kota tersebut.

a. Kurang dari $3$  
b. Sekurang-kurangnya $3$ tapi kurang dari $3{,}1$  
c. Sekurang-kurangnya $3{,}1$ tapi kurang dari $3{,}2$  
d. Sekurang-kurangnya $3{,}2$ tapi kurang dari $3{,}3$  
e. Sekurang-kurangnya $3{,}3$

> [!summary]+ **Jawaban No. 15** 
>
> **(b). Sekurang-kurangnya $3$ tapi kurang dari $3{,}1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim B(3, 0{,}4)$: $P(X=k) = \binom{3}{k}(0{,}4)^k(0{,}6)^{3-k}$
> > Jumlah anggota keluarga $M = 1 + X \in \{1, 2, 3, 4\}$
> > $E[g(M)] = \sum_{m} g(m) P(M = m)$
>
> **Diketahui:**
> - $M = 1 + X$, $X \sim B(3, 0{,}4)$
> - Tabel biaya $g(m)$ untuk $m = 1, 2, 3, 4$
> - Target: $E[g(M)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PMF dari $X$**
> > $P(X=0) = (0{,}6)^3 = 0{,}216$ → $M=1$
> > $P(X=1) = 3(0{,}4)(0{,}6)^2 = 0{,}432$ → $M=2$
> > $P(X=2) = 3(0{,}4)^2(0{,}6) = 0{,}288$ → $M=3$
> > $P(X=3) = (0{,}4)^3 = 0{,}064$ → $M=4$
> >
> > **Langkah 2: Hitung ekspektasi biaya**
> >
> > $$E[g(M)] = 2(0{,}216) + 3(0{,}432) + 3{,}75(0{,}288) + 4{,}25(0{,}064)$$
> >
> > $$= 0{,}432 + 1{,}296 + 1{,}08 + 0{,}272 = 3{,}08$$
> >
> > **Hasil Akhir:** **(b)**. Sekurang-kurangnya $3$ tapi kurang dari $3{,}1$ ($E = 3{,}08$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[M] = 1 + E[X] = 1 + 1{,}2 = 2{,}2$ kemudian mencari biaya untuk $M = 2{,}2$ — interpolasi tidak valid untuk fungsi diskrit.
> > > - Menggunakan $E[g(M)] = g(E[M])$ (Jensen's Inequality: ini hanya berlaku untuk fungsi linear).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Lupa offset: $M = 1 + X$, bukan $M = X$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi tabel fungsi dari variabel acak → hitung $E$ via $\sum g(m)P(M=m)$, bukan via $g(E[M])$.

---

## **No. 16**

Seorang administrator klaim asuransi memverifikasi klaim untuk berbagai jumlah kerugian. Untuk klaim kerugian sebesar $x$, jumlah waktu yang dihabiskan oleh administrator untuk memverifikasi klaim didistribusikan secara merata antara $0$ dan $1 + x$ jam. Besar klaim yang diterima oleh administrator terdistribusi secara seragam antara $1$ dan $2$. Tentukanlah waktu rata-rata yang dibutuhkan administrator untuk sebuah klaim secara acak.

a. $1{,}125$  
b. $1{,}25$  
c. $1{,}375$  
d. $1{,}5$  
e. $1{,}625$

> [!summary]+ **Jawaban No. 16** 
>
> **(b). $1{,}25$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Hukum ekspektasi total (Law of Total Expectation):
> >
> > $$E[T] = E[E[T|X]]$$
> >
> > Jika $T|X=x \sim U(0, 1+x)$, maka $E[T|X=x] = \frac{1+x}{2}$
>
> **Diketahui:**
> - $X \sim U(1, 2)$ (besar klaim)
> - $T|X=x \sim U(0, 1+x)$ (waktu verifikasi)
> - Target: $E[T]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[T|X]$**
> >
> > $$E[T|X=x] = \frac{0 + (1+x)}{2} = \frac{1+x}{2}$$
> >
> > **Langkah 2: Hitung $E[T]$ via hukum ekspektasi total**
> >
> > $$E[T] = E\left[\frac{1+X}{2}\right] = \frac{1 + E[X]}{2} = \frac{1 + 1{,}5}{2} = \frac{2{,}5}{2} = 1{,}25$$
> >
> > (di mana $E[X] = (1+2)/2 = 1{,}5$ untuk $X \sim U(1,2)$)
> >
> > **Hasil Akhir:** **(b)**. $1{,}25$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari $E[T|X = E[X]] = E[T|X = 1{,}5] = (1+1{,}5)/2 = 1{,}25$ — kebetulan sama, tetapi prosedur yang benar adalah $E_X[E[T|X]]$.
> > > - Mengira $E[T] = E[T|X=1] = 1$ atau $E[T|X=2] = 1{,}5$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah membaca distribusi waktu: $U(0, 1+x)$ berarti batas atas bergantung pada $x$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi satu variabel bergantung pada variabel lain → gunakan Law of Total Expectation.

---

## **No. 17**

Survei dilakukan terhadap orang-orang yang memiliki telepon seluler, telepon rumah, atau keduanya. Ditemukan bahwa $75\%$ orang yang memiliki telepon rumah juga memiliki telepon seluler dan $40\%$ dari mereka yang memiliki telepon seluler juga memiliki telepon rumah. Dari orang-orang dalam survei ini yang memiliki telepon seluler atau telepon rumah atau keduanya, tentukanlah persentase orang yang memiliki keduanya. (Pilihlah jawaban terdekat!)

a. $31\%$  
b. $35\%$  
c. $39\%$  
d. $42\%$  
e. $45\%$

> [!summary]+ **Jawaban No. 17** 
>
> **(b). $35\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > Misalkan $S$ = telepon seluler, $R$ = telepon rumah.
> > $P(S|R) = 0{,}75$: $P(S \cap R) = 0{,}75\,P(R)$
> > $P(R|S) = 0{,}40$: $P(S \cap R) = 0{,}40\,P(S)$
> > Target: $\frac{P(S \cap R)}{P(S \cup R)}$
> > $P(S \cup R) = P(S) + P(R) - P(S \cap R)$
>
> **Diketahui:**
> - $P(S|R) = 0{,}75 \Rightarrow P(S \cap R) = 0{,}75\,P(R)$
> - $P(R|S) = 0{,}40 \Rightarrow P(S \cap R) = 0{,}40\,P(S)$
> - Target: persentase yang memiliki keduanya dari total yang memiliki setidaknya satu
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspresikan dalam variabel $P(R)$**
> > Dari $P(S \cap R) = 0{,}75\,P(R)$ dan $P(S \cap R) = 0{,}40\,P(S)$:
> >
> > $$P(S) = \frac{0{,}75}{0{,}40}\,P(R) = 1{,}875\,P(R)$$
> >
> > **Langkah 2: Hitung $P(S \cup R)$**
> >
> > $$P(S \cup R) = P(S) + P(R) - P(S \cap R) = 1{,}875\,P(R) + P(R) - 0{,}75\,P(R) = 2{,}125\,P(R)$$
> >
> > **Langkah 3: Hitung persentase**
> >
> > $$\frac{P(S \cap R)}{P(S \cup R)} = \frac{0{,}75\,P(R)}{2{,}125\,P(R)} = \frac{0{,}75}{2{,}125} \approx 0{,}3529 \approx 35\%$$
> >
> > **Hasil Akhir:** **(b)**. $35\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(S|R) = P(R|S)$ (simetri yang salah).
> > > - Menjumlahkan persentase: $(75\% + 40\%)/2 = 57{,}5\%$ — tidak bermakna.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Penyebut yang benar adalah $P(S \cup R)$, bukan $P(S)$ atau $P(R)$ saja.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut dua probabilitas bersyarat yang saling berkaitan → ekspresikan semua dalam satu variabel.

---

Pertanyaan 18 dan 19 diketahui bahwa variabel acak $X$, yang mempunyai distribusi Poisson yang dimodifikasi dan $Y$ berdistribusi Poisson dengan mean $\lambda > 0$. Fungsi probabilitas untuk $X$ didefinisikan sebagai berikut:

$$P[X = 0] = \frac{P[Y = 0]}{2} \quad \text{dan} \quad P[X = k] = c \times P[Y = k] \quad \text{untuk } k = 1, 2, \ldots$$

## **No. 18**

Tentukanlah nilai dari $c$.

a. $\dfrac{1}{2}$  
b. $\dfrac{2 - e^{-\lambda}}{2 - 2e^{-\lambda}}$  
c. $\dfrac{2 - e^{-\lambda}}{2 - e^{-\lambda}}$  
d. $\dfrac{1 - 2e^{-\lambda}}{2 - 2e^{-\lambda}}$  
e. $\dfrac{1 - e^{-\lambda}}{1 - 2e^{-\lambda}}$

> [!summary]+ **Jawaban No. 18** 
>
> **(b). $\dfrac{2 - e^{-\lambda}}{2 - 2e^{-\lambda}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > Axiom normalisasi: $\sum_{k=0}^\infty P[X=k] = 1$
> > Poisson: $P[Y=k] = \frac{e^{-\lambda}\lambda^k}{k!}$, maka $P[Y=0] = e^{-\lambda}$ dan $\sum_{k=1}^\infty P[Y=k] = 1 - e^{-\lambda}$.
> > Di sini $\lambda$ adalah parameter mean distribusi Poisson (konteks: distribusi diskrit).
>
> **Diketahui:**
> - $P[X=0] = e^{-\lambda}/2$
> - $P[X=k] = c \cdot P[Y=k]$ untuk $k \geq 1$
> - Target: $c$ dari syarat normalisasi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan syarat normalisasi**
> >
> > $$\sum_{k=0}^\infty P[X=k] = 1$$
> >
> > $$\frac{e^{-\lambda}}{2} + c\sum_{k=1}^\infty P[Y=k] = 1$$
> >
> > $$\frac{e^{-\lambda}}{2} + c(1 - e^{-\lambda}) = 1$$
> >
> > **Langkah 2: Selesaikan untuk $c$**
> >
> > $$c(1 - e^{-\lambda}) = 1 - \frac{e^{-\lambda}}{2} = \frac{2 - e^{-\lambda}}{2}$$
> >
> > $$c = \frac{2 - e^{-\lambda}}{2(1 - e^{-\lambda})} = \frac{2 - e^{-\lambda}}{2 - 2e^{-\lambda}}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{2 - e^{-\lambda}}{2 - 2e^{-\lambda}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\sum_{k=1}^\infty P[Y=k] = 1$ (lupa mengurangi $P[Y=0] = e^{-\lambda}$).
> > > - Substitusi $c = 1/2$ langsung tanpa verifikasi normalisasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P[X=0] = P[Y=0]/2$ berarti distribusi $X$ adalah separuh dari $Y$ untuk semua $k$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi dimodifikasi → selalu cek normalisasi untuk menentukan konstanta.

---

## **No. 19**

Tentukanlah nilai dari $\text{Var}[X]$.

a. $c\lambda + c\lambda^2 + c^2\lambda^2$  
b. $c\lambda - c\lambda^2 + c^2\lambda^2$  
c. $c\lambda + c\lambda^2 - c^2\lambda^2$  
d. $c\lambda - c\lambda^2 - c^2\lambda^2$  
e. $-c\lambda + c\lambda^2 + c^2\lambda^2$

> [!summary]+ **Jawaban No. 19** 
>
> **(c). $c\lambda + c\lambda^2 - c^2\lambda^2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > $\text{Var}(X) = E[X^2] - (E[X])^2$
> > Kontribusi $k=0$: $P[X=0] = e^{-\lambda}/2$ → suku $k=0$ tidak berkontribusi pada $E[X]$ atau $E[X^2]$.
> > Untuk $k \geq 1$: $P[X=k] = c \cdot \frac{e^{-\lambda}\lambda^k}{k!}$
> > Momen Poisson $Y$: $E[Y] = \lambda$, $E[Y^2] = \lambda + \lambda^2$
>
> **Diketahui:**
> - Distribusi $X$ seperti di atas dengan $c = \frac{2-e^{-\lambda}}{2-2e^{-\lambda}}$
> - Target: $\text{Var}[X]$ dalam bentuk $c$ dan $\lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$**
> >
> > $$E[X] = \sum_{k=0}^\infty k \cdot P[X=k] = 0 \cdot P[X=0] + \sum_{k=1}^\infty k \cdot c\,P[Y=k]$$
> >
> > $$= c\sum_{k=1}^\infty k\,P[Y=k] = c\sum_{k=0}^\infty k\,P[Y=k] = c\,E[Y] = c\lambda$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> >
> > $$E[X^2] = \sum_{k=1}^\infty k^2 \cdot c\,P[Y=k] = c\,E[Y^2] = c(\lambda + \lambda^2)$$
> >
> > **Langkah 3: Hitung $\text{Var}[X]$**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = c(\lambda + \lambda^2) - (c\lambda)^2$$
> >
> > $$= c\lambda + c\lambda^2 - c^2\lambda^2$$
> >
> > **Hasil Akhir:** **(c)**. $c\lambda + c\lambda^2 - c^2\lambda^2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\sum_{k=1}^\infty k\,P[Y=k] = E[Y] - 0 = \lambda$ — benar, karena suku $k=0$ pada $E[Y]$ adalah nol.
> > > - Lupa bahwa $E[Y^2] = \text{Var}(Y) + (E[Y])^2 = \lambda + \lambda^2$ untuk Poisson.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mencari nilai numerik $c$ dan substitusi — soal meminta jawaban dalam bentuk $c$ dan $\lambda$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal meminta variansi distribusi dimodifikasi → pisahkan kontribusi tiap bagian distribusi.

---

## **No. 20**

Diketahui $X_1$, $X_2$ dan $X_3$ merupakan variabel acak bebas yang masing-masing terdistribusi seragam pada interval $[0, 2]$. Misalkan ketiga variabel disusun dalam urutan meningkat $Y_1 \leq Y_2 \leq Y_3$ ($Y_1$ adalah yang terkecil dari ketiga $X$). Tentukanlah variansi dari $Y_2$.

a. Kurang dari $0{,}1$  
b. Sekurang-kurangnya $0{,}1$ tapi kurang dari $0{,}2$  
c. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}3$  
d. Sekurang-kurangnya $0{,}3$ tapi kurang dari $0{,}4$  
e. Sekurang-kurangnya $0{,}5$

> [!summary]+ **Jawaban No. 20** 
>
> **(c). Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> >
> > PDF order statistik ke-$k$ dari $n$ sampel dengan PDF $f(x)$ dan CDF $F(x)$:
> >
> > $$f_{Y_k}(y) = \frac{n!}{(k-1)!(n-k)!} [F(y)]^{k-1}[1-F(y)]^{n-k} f(y)$$
> >
> > Untuk $X_i \sim U(0,2)$: $f(x) = 1/2$, $F(x) = x/2$ untuk $0 \leq x \leq 2$.
> > $Y_2$ adalah median ($k=2$, $n=3$).
>
> **Diketahui:**
> - $n = 3$, $X_i \sim U(0,2)$, $k = 2$ (order statistik ke-2)
> - Target: $\text{Var}(Y_2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: PDF dari $Y_2$**
> >
> > $$f_{Y_2}(y) = \frac{3!}{1! \cdot 1!}\left(\frac{y}{2}\right)^1\left(1-\frac{y}{2}\right)^1 \cdot \frac{1}{2} = 6 \cdot \frac{y}{2} \cdot \frac{2-y}{2} \cdot \frac{1}{2} = \frac{3y(2-y)}{4}$$
> >
> > untuk $0 \leq y \leq 2$.
> >
> > **Langkah 2: Hitung $E[Y_2]$**
> >
> > $$E[Y_2] = \int_0^2 y \cdot \frac{3y(2-y)}{4}\,dy = \frac{3}{4}\int_0^2 (2y^2 - y^3)\,dy$$
> >
> > $$= \frac{3}{4}\left[\frac{2y^3}{3} - \frac{y^4}{4}\right]_0^2 = \frac{3}{4}\left[\frac{16}{3} - 4\right] = \frac{3}{4} \cdot \frac{4}{3} = 1$$
> >
> > **Langkah 3: Hitung $E[Y_2^2]$**
> >
> > $$E[Y_2^2] = \int_0^2 y^2 \cdot \frac{3y(2-y)}{4}\,dy = \frac{3}{4}\int_0^2 (2y^3 - y^4)\,dy$$
> >
> > $$= \frac{3}{4}\left[\frac{y^4}{2} - \frac{y^5}{5}\right]_0^2 = \frac{3}{4}\left[8 - \frac{32}{5}\right] = \frac{3}{4} \cdot \frac{8}{5} = \frac{6}{5} = 1{,}2$$
> >
> > **Langkah 4: Hitung $\text{Var}(Y_2)$**
> >
> > $$\text{Var}(Y_2) = E[Y_2^2] - (E[Y_2])^2 = 1{,}2 - 1 = 0{,}2$$
> >
> > **Hasil Akhir:** **(c)**. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}3$ ($\text{Var}(Y_2) = 0{,}2$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(Y_2) = \text{Var}(X)/n$ — formula ini hanya untuk rata-rata sampel, bukan order statistik.
> > > - Salah formula PDF order statistik: menggunakan $f_{Y_k}$ untuk $X \sim U(0,1)$ tanpa menyesuaikan dengan $U(0,2)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "variabel terkecil" adalah $Y_1$, padahal soal meminta $Y_2$ (median untuk $n=3$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "urutan meningkat" dan meminta momen → gunakan formula PDF order statistik.

---

## **No. 21**

Untuk jenis kultur bakteri tertentu, waktu yang diperlukan agar jumlah bakteri berlipat ganda memiliki distribusi seragam kontinu antara $8$ dan $12$ jam. Untuk jenis kultur bakteri lainnya, jumlah waktu yang diperlukan agar jumlah bakteri berlipat ganda memiliki distribusi seragam kontinu antara $10$ dan $18$ jam. Dengan asumsi bahwa kedua kultur bakteri tersebut tumbuh secara independen, tentukan peluang bahwa kultur bakteri pertama akan berlipat ganda sebelum kultur bakteri kedua berlipat ganda.

a. Kurang dari $0{,}75$  
b. Sekurang-kurangnya $0{,}75$ tapi kurang dari $0{,}8$  
c. Sekurang-kurangnya $0{,}8$ tapi kurang dari $0{,}85$  
d. Sekurang-kurangnya $0{,}85$ tapi kurang dari $0{,}9$  
e. Sekurang-kurangnya $0{,}9$ tapi kurang dari $1$

> [!summary]+ **Jawaban No. 21** 
>
> **(e). Sekurang-kurangnya $0{,}9$ tapi kurang dari $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim U(8,12)$, $Y \sim U(10,18)$, independen.
> > $P(X < Y) = \int\int_{x < y} f_X(x)f_Y(y)\,dx\,dy$
> > Perlu hitung area $\{(x,y): x < y\}$ pada persegi $[8,12] \times [10,18]$.
>
> **Diketahui:**
> - $X \sim U(8,12)$: $f_X(x) = 1/4$ untuk $8 \leq x \leq 12$
> - $Y \sim U(10,18)$: $f_Y(y) = 1/8$ untuk $10 \leq y \leq 18$
> - Target: $P(X < Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi region integrasi**
> > $(x,y) \in [8,12] \times [10,18]$ dengan syarat $x < y$.
> > Total area persegi: $4 \times 8 = 32$.
> >
> > **Langkah 2: Tentukan sub-region berdasarkan overlap**
> > - Untuk $y \in [10,18]$ dan $x \in [8,12]$:
> >   - Jika $y > 12$: seluruh range $x \in [8,12]$ memenuhi $x < y$ (lebar $= 4$)
> >   - Jika $y \in [10,12]$: $x < y$, sehingga $x \in [8, y)$ (lebar $= y - 8$)
> >   - Jika $y < 8$: tidak mungkin karena $y \geq 10 > 8$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P(X < Y) = \int_{10}^{12}\int_8^y \frac{1}{4} \cdot \frac{1}{8}\,dx\,dy + \int_{12}^{18}\int_8^{12} \frac{1}{4} \cdot \frac{1}{8}\,dx\,dy$$
> >
> > $$= \frac{1}{32}\int_{10}^{12}(y-8)\,dy + \frac{1}{32}\int_{12}^{18} 4\,dy$$
> >
> > $$= \frac{1}{32}\left[\frac{(y-8)^2}{2}\right]_{10}^{12} + \frac{1}{32}[4y]_{12}^{18}$$
> >
> > $$= \frac{1}{32}\left[\frac{16}{2} - \frac{4}{2}\right] + \frac{1}{32}[72 - 48]$$
> >
> > $$= \frac{1}{32}[8-2] + \frac{24}{32} = \frac{6}{32} + \frac{24}{32} = \frac{30}{32} = \frac{15}{16} = 0{,}9375$$
> >
> > **Hasil Akhir:** **(e)**. Sekurang-kurangnya $0{,}9$ tapi kurang dari $1$ ($P(X<Y) = 0{,}9375$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak membagi region integrasi menjadi sub-region berdasarkan nilai kritis $y = 12$.
> > > - Mengira $P(X < Y) = 1$ karena range $Y$ dimulai dari $10 \geq 8$ — tapi $X$ bisa sampai $12 > 10$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah menentukan batas integrasi, tidak memperhatikan overlap antara $[8,12]$ dan $[10,18]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua variabel uniform dengan support overlap → gambar region integrasi sebelum menghitung.

---

## **No. 22**

Diketahui $X$ menunjukkan jumlah pasien yang mengunjungi klinik dokter gigi dalam sehari. Fungsi probabilitas $X$ adalah $P(X = 2) = 0{,}1$, $P(X = 3) = 0{,}6$, $P(X = 4) = 0{,}3$. $20\%$ pasien yang mengunjungi klinik membutuhkan perawatan gigi kosmetik dan $80\%$ lainnya membutuhkan layanan gigi lainnya. Pasien tidak bergantung satu sama lain. Tentukanlah probabilitas banyaknya pasien yang memerlukan perawatan gigi kosmetik dalam sehari adalah paling sedikit $3$ orang.

a. Kurang dari $0{,}01$  
b. Sekurang-kurangnya $0{,}01$ tapi kurang dari $0{,}015$  
c. Sekurang-kurangnya $0{,}015$ tapi kurang dari $0{,}02$  
d. Sekurang-kurangnya $0{,}02$ tapi kurang dari $0{,}025$  
e. Sekurang-kurangnya $0{,}025$

> [!summary]+ **Jawaban No. 22** 
>
> **(b). Sekurang-kurangnya $0{,}01$ tapi kurang dari $0{,}015$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Misalkan $Z$ = jumlah pasien kosmetik. Kondisi pada $X$: $Z|X=n \sim B(n, 0{,}2)$.
> >
> > $$P(Z \geq 3) = \sum_{n=3}^4 P(X=n) \cdot P(Z \geq 3 \mid X=n)$$
> >
> > (jika $X=2$: $Z$ maks 2, tidak bisa $Z \geq 3$)
>
> **Diketahui:**
> - $P(X=2) = 0{,}1$, $P(X=3) = 0{,}6$, $P(X=4) = 0{,}3$
> - $Z|X=n \sim B(n, 0{,}2)$
> - Target: $P(Z \geq 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: $X = 2$: $Z \leq 2$, jadi $P(Z \geq 3 | X=2) = 0$**
> >
> > **Langkah 2: $X = 3$: $Z \sim B(3, 0{,}2)$**
> >
> > $$P(Z = 3 | X=3) = (0{,}2)^3 = 0{,}008$$
> >
> > **Langkah 3: $X = 4$: $Z \sim B(4, 0{,}2)$**
> >
> > $$P(Z \geq 3 | X=4) = P(Z=3) + P(Z=4)$$
> >
> > $$= \binom{4}{3}(0{,}2)^3(0{,}8) + (0{,}2)^4 = 4(0{,}008)(0{,}8) + 0{,}0016 = 0{,}0256 + 0{,}0016 = 0{,}0272$$
> >
> > **Langkah 4: Hitung $P(Z \geq 3)$**
> >
> > $$P(Z \geq 3) = 0{,}6 \cdot 0{,}008 + 0{,}3 \cdot 0{,}0272$$
> >
> > $$= 0{,}0048 + 0{,}00816 = 0{,}01296$$
> >
> > **Hasil Akhir:** **(b)**. Sekurang-kurangnya $0{,}01$ tapi kurang dari $0{,}015$ ($P \approx 0{,}01296$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan kontribusi $X=4$ atau $X=3$ saat menghitung $P(Z \geq 3)$.
> > > - Mengira $Z$ mengikuti Binomial dengan $n$ tetap, padahal $n$ adalah acak.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Paling sedikit $3$" = $Z \geq 3$, bukan $Z > 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika jumlah percobaan Binomial adalah acak → gunakan Law of Total Probability: $P(Z \geq k) = \sum_n P(X=n) P(Z \geq k | X=n)$.

---

## **No. 23**

Sebuah dadu dilempar berulang kali. Misal $X$ adalah banyak lemparan yang dibutuhkan untuk memperoleh angka $5$ dan $Y$ adalah banyak lemparan yang dibutuhkan untuk memperoleh angka $2$. Tentukanlah nilai dari $E(X|Y = 2)$.

a. $5$  
b. $5{,}2$  
c. $6$  
d. $6{,}6$  
e. $6{,}8$

> [!summary]+ **Jawaban No. 23** 
>
> **(d). $6{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Perhatikan bahwa $X$ dan $Y$ **tidak independen** karena berbagi lemparan yang sama.
> > $p_5 = 1/6$ (peluang muncul 5), $p_2 = 1/6$ (peluang muncul 2).
> > Kondisi $Y=2$: angka 2 pertama muncul pada lemparan ke-2 → lemparan ke-1 bukan 2, lemparan ke-2 adalah 2.
> > Perlu analisis kasus untuk posisi 5 pertama.
>
> **Diketahui:**
> - $X$ = lemparan pertama mendapat angka 5, $Y$ = lemparan pertama mendapat angka 2
> - $Y = 2$: lemparan 1 bukan 2, lemparan 2 adalah 2
> - Target: $E[X | Y=2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Analisis kondisi $Y = 2$**
> > Lemparan 1: bukan angka 2 (peluang $5/6$). Lemparan 2: angka 2 (peluang $1/6$).
> > Terdapat dua sub-kasus untuk posisi 5:
> >
> > **Langkah 2: Kasus-kasus untuk nilai $X$**
> > - $X = 1$: Lemparan 1 adalah 5. Tapi lemparan 1 harus bukan 2, dan bisa saja 5. $P(\text{lempar 1 = 5}) = 1/6$.
> > - $X = 2$: Lemparan 2 adalah 5. Tapi lemparan 2 harus = 2 (syarat $Y=2$). Kontradiksi → $P(X=2|Y=2)=0$.
> > - $X \geq 3$: Lemparan 1 bukan 5 dan bukan 2, lemparan 2 adalah 2 (bukan 5), lalu lemparan ke-$k \geq 3$ adalah 5.
> >
> > Kondisi $Y=2$: lemparan 1 $\in \{1,2,3,4,6\}$ (bukan 2), lemparan 2 = 2.
> > Dalam kondisi ini, $P(\text{lempar 1} = 5 | Y=2) = \frac{P(\text{lempar 1}=5, Y=2)}{P(Y=2)} = \frac{(1/6)(1/6)}{(5/6)(1/6)} = \frac{1}{5}$.
> > $P(\text{lempar 1} \neq 5 \text{ dan } \neq 2 | Y=2) = 4/5$.
> >
> > **Langkah 3: Hitung $E[X|Y=2]$**
> > - Jika $X=1$ (prob. $1/5$): $E[X | X=1] = 1$.
> > - Jika lemparan 1 bukan 5 dan bukan 2 (prob. $4/5$): Dari lemparan ke-3 dan seterusnya, mencari 5 dengan $p = 1/6$. Ekspektasi posisi 5 = lemparan ke-(2 + geom): $E[X | \text{kasus ini}] = 2 + E[\text{Geom}(1/6)] = 2 + 6 = 8$.
> >
> > $$E[X|Y=2] = \frac{1}{5}(1) + \frac{4}{5}(8) = \frac{1}{5} + \frac{32}{5} = \frac{33}{5} = 6{,}6$$
> >
> > **Hasil Akhir:** **(d)**. $6{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $X$ dan $Y$ independen → $E[X|Y=2] = E[X] = 6$ — salah, karena berbagi lemparan yang sama.
> > > - Lupa bahwa $X=2$ tidak mungkin jika $Y=2$ (lemparan ke-2 sudah dipakai untuk 2, bukan 5).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Memisahkan masalah menjadi dua percobaan independen.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua variabel geometrik berbagi percobaan (dadu sama) → periksa dependensi, jangan anggap independen.

---

## **No. 24**

Diketahui variabel acak $X$ mempunyai $P(X = 0) = 0{,}2$ dan $P(X = 1) = 0{,}1$. Untuk semua nilai lainnya, $X$ memiliki fungsi densitas berikut:

$$f(x) = \begin{cases} 0, & x < 0 \\ x, & 0 < x < 1 \\ 2x, & 1 < x < c \\ 0, & x \geq c \end{cases}$$

Tentukanlah $P(X < 1 | X > 0{,}5)$.

a. Kurang dari $0{,}6$  
b. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}7$  
c. Sekurang-kurangnya $0{,}7$ tapi kurang dari $0{,}8$  
d. Sekurang-kurangnya $0{,}8$ tapi kurang dari $0{,}9$  
e. Sekurang-kurangnya $0{,}9$

> [!summary]+ **Jawaban No. 24** 
>
> **(a). Kurang dari $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > $X$ adalah variabel acak campuran (mixed): memiliki massa diskrit di $x=0$ dan $x=1$, serta bagian kontinu.
> > Syarat normalisasi: massa diskrit + integral kontinu = 1.
> > Probabilitas bersyarat: $P(A|B) = P(A \cap B)/P(B)$.
>
> **Diketahui:**
> - $P(X=0) = 0{,}2$, $P(X=1) = 0{,}1$
> - $f(x) = x$ untuk $(0,1)$, $f(x) = 2x$ untuk $(1,c)$
> - Target: tentukan $c$, lalu hitung $P(X < 1 | X > 0{,}5)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$ dari normalisasi**
> >
> > $$0{,}2 + 0{,}1 + \int_0^1 x\,dx + \int_1^c 2x\,dx = 1$$
> >
> > $$0{,}3 + \frac{1}{2} + [x^2]_1^c = 1$$
> >
> > $$0{,}3 + 0{,}5 + c^2 - 1 = 1$$
> >
> > $$c^2 = 1{,}2 \Rightarrow c = \sqrt{1{,}2} \approx 1{,}095$$
> >
> > **Langkah 2: Hitung $P(X > 0{,}5)$**
> > Massa di $X=0$: tidak masuk (karena $0 < 0{,}5$). Massa di $X=1$: masuk ($1 > 0{,}5$).
> >
> > $$P(X > 0{,}5) = \int_{0{,}5}^1 x\,dx + P(X=1) + \int_1^c 2x\,dx$$
> >
> > $$= \left[\frac{x^2}{2}\right]_{0{,}5}^1 + 0{,}1 + [x^2]_1^c$$
> >
> > $$= \frac{1-0{,}25}{2} + 0{,}1 + (1{,}2 - 1) = 0{,}375 + 0{,}1 + 0{,}2 = 0{,}675$$
> >
> > **Langkah 3: Hitung $P(X < 1 \text{ dan } X > 0{,}5)$**
> > Massa di $X=0$: tidak masuk. Massa di $X=1$: tidak masuk ($X < 1$ ketat).
> >
> > $$P(0{,}5 < X < 1) = \int_{0{,}5}^1 x\,dx = 0{,}375$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(X < 1 | X > 0{,}5) = \frac{P(0{,}5 < X < 1)}{P(X > 0{,}5)} = \frac{0{,}375}{0{,}675} \approx 0{,}5556$$
> >
> > **Hasil Akhir:** **(a)**. Kurang dari $0{,}6$ ($\approx 0{,}556$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa memperhitungkan massa diskrit di $X=1$ dalam $P(X > 0{,}5)$.
> > > - Mengira $P(X < 1) = \int_0^1 f(x)dx$ saja, tanpa memperhatikan massa diskrit di $x=0$ dan $x=1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $P(X < 1)$ vs $P(X \leq 1)$: karena ada massa di $X=1$, kedua hal ini berbeda!
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mencampur massa diskrit dan PDF kontinu → ini distribusi campuran, hitung massa dan integral secara terpisah.

---

## **No. 25**

Diketahui $X$ berdistribusi normal dengan mean $\mu$ dan variansi $\sigma^2$. Diketahui juga variabel acak $Y$ dimana $Y = e^X$. Tentukanlah koefisien variansi dari $Y$.

a. $e^{\mu^2}(e^{\sigma^2} - 1)$  
b. $e^{2\mu^2}(e^{\sigma^2} - 1)$  
c. $e^{\sigma^2} - 1$  
d. $\sqrt{e^{\mu^2}(e^{\sigma^2} - 1)}$  
e. $\sqrt{e^{\sigma^2} - 1}$

> [!summary]+ **Jawaban No. 25** 
>
> **(e). $\sqrt{e^{\sigma^2} - 1}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $Y = e^X$ dengan $X \sim N(\mu, \sigma^2)$ → $Y$ berdistribusi Log-Normal.
> > MGF normal: $M_X(t) = e^{\mu t + \sigma^2 t^2/2}$
> > $E[Y^k] = E[e^{kX}] = M_X(k) = e^{k\mu + k^2\sigma^2/2}$
> > Koefisien variasi: $CV = \dfrac{\sigma_Y}{E[Y]}$
>
> **Diketahui:**
> - $X \sim N(\mu, \sigma^2)$, $Y = e^X$
> - Target: $CV(Y) = \dfrac{\sqrt{\text{Var}(Y)}}{E[Y]}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$ dan $E[Y^2]$**
> >
> > $$E[Y] = E[e^X] = M_X(1) = e^{\mu + \sigma^2/2}$$
> >
> > $$E[Y^2] = E[e^{2X}] = M_X(2) = e^{2\mu + 2\sigma^2}$$
> >
> > **Langkah 2: Hitung $\text{Var}(Y)$**
> >
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2 = e^{2\mu + 2\sigma^2} - e^{2\mu + \sigma^2} = e^{2\mu + \sigma^2}(e^{\sigma^2} - 1)$$
> >
> > **Langkah 3: Hitung $CV(Y)$**
> >
> > $$CV(Y) = \frac{\sqrt{\text{Var}(Y)}}{E[Y]} = \frac{\sqrt{e^{2\mu+\sigma^2}(e^{\sigma^2}-1)}}{e^{\mu+\sigma^2/2}} = \frac{e^{\mu+\sigma^2/2}\sqrt{e^{\sigma^2}-1}}{e^{\mu+\sigma^2/2}} = \sqrt{e^{\sigma^2}-1}$$
> >
> > **Hasil Akhir:** **(e)**. $\sqrt{e^{\sigma^2} - 1}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[e^X] = e^{E[X]} = e^\mu$ — ini hanya benar jika $X$ adalah konstanta (Jensen: $e^{E[X]} \leq E[e^X]$).
> > > - Tidak menyederhanakan $CV$ — $e^{\mu}$ saling menghapus di pembilang dan penyebut.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira koefisien variasi = $\text{Var}(Y)/E[Y]$ (tanpa akar kuadrat di pembilang).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut $Y = e^X$ dengan $X$ normal → gunakan MGF normal untuk menghitung semua momen.

---

## **No. 26**

Diketahui $X$ dan $Y$ adalah variabel acak diskrit pada bilangan bulat $\{0, 1, 2\}$, dengan fungsi pembangkit momen $M_X(t)$ dan $M_Y(t)$. Diketahui juga bahwa

$$M_X(t) + M_Y(t) = \frac{3}{4} + \frac{3}{4}e^t + \frac{1}{2}e^{2t} \quad \text{dan} \quad M_X(t) - M_Y(t) = \frac{1}{4} - \frac{1}{4}e^t$$

Tentukanlah nilai dari $P(X = 1)$.

a. $\dfrac{1}{4}$  
b. $\dfrac{1}{8}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 26** 
>
> **(a). $\dfrac{1}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > MGF untuk variabel diskrit pada $\{0, 1, 2\}$:
> >
> > $$M_X(t) = P(X=0) + P(X=1)e^t + P(X=2)e^{2t}$$
> >
> > Koefisien $e^{kt}$ dalam $M_X(t)$ adalah $P(X=k)$.
>
> **Diketahui:**
> - $M_X(t) + M_Y(t)$ dan $M_X(t) - M_Y(t)$ diberikan
> - Target: $P(X = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $M_X(t)$**
> >
> > $$M_X(t) = \frac{(M_X + M_Y) + (M_X - M_Y)}{2}$$
> >
> > $$= \frac{1}{2}\left[\left(\frac{3}{4} + \frac{3}{4}e^t + \frac{1}{2}e^{2t}\right) + \left(\frac{1}{4} - \frac{1}{4}e^t\right)\right]$$
> >
> > $$= \frac{1}{2}\left[1 + \frac{1}{2}e^t + \frac{1}{2}e^{2t}\right] = \frac{1}{2} + \frac{1}{4}e^t + \frac{1}{4}e^{2t}$$
> >
> > **Langkah 2: Baca koefisien $e^t$**
> >
> > $$P(X=0) = \frac{1}{2}, \quad P(X=1) = \frac{1}{4}, \quad P(X=2) = \frac{1}{4}$$
> >
> > Verifikasi: $\frac{1}{2} + \frac{1}{4} + \frac{1}{4} = 1$ ✓
> >
> > **Hasil Akhir:** **(a)**. $P(X=1) = \dfrac{1}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa koefisien $e^{kt}$ dalam MGF diskrit langsung memberikan probabilitas $P(X=k)$.
> > > - Keliru dalam aljabar: menjumlahkan atau mengurangi kedua persamaan secara salah.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $M_X(t)$ harus diturunkan untuk mendapatkan probabilitas — tidak perlu jika support diskrit dan terbatas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi dua persamaan dengan $M_X \pm M_Y$ → selesaikan secara simultan untuk $M_X$.

---

## **No. 27**

Perusahaan asuransi mengasuransikan mobil berwarna merah dan hijau. Seorang aktuaris mengumpulkan data sebagai berikut:

| Warna Mobil | Merah | Hijau |
|:-:|:-:|:-:|
| Banyak mobil yang diasuransikan | $300$ | $700$ |
| Probabilitas terjadi kecelakaan | $0{,}1$ | $0{,}05$ |
| Kemungkinan bahwa besar klaim melebihi 10 juta, jika diketahui terjadi kecelakaan dari kelompok ini | $0{,}9$ | $0{,}8$ |

Aktuaris memilih secara acak suatu klaim dari semua klaim yang melebihi besar klaim di atas 10 juta. Tentukanlah peluang klaim tersebut terjadi pada mobil berwarna merah.

a. Kurang dari $0{,}2$  
b. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$  
c. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 27** 
>
> **(c). Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > Teorema Bayes:
> >
> > $$P(M|B) = \frac{P(B|M)P(M)}{P(B|M)P(M) + P(B|H)P(H)}$$
> >
> > di mana $M$ = mobil merah, $H$ = mobil hijau, $B$ = klaim $> 10$ juta.
>
> **Diketahui:**
> - $P(M) = 300/1000 = 0{,}3$, $P(H) = 0{,}7$
> - $P(K|M) = 0{,}1$ (kecelakaan | merah), $P(K|H) = 0{,}05$
> - $P(B|K,M) = 0{,}9$, $P(B|K,H) = 0{,}8$
> - $P(B|M) = P(K|M) \cdot P(B|K,M) = 0{,}1 \times 0{,}9 = 0{,}09$
> - $P(B|H) = P(K|H) \cdot P(B|K,H) = 0{,}05 \times 0{,}8 = 0{,}04$
> - Target: $P(M | B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung ekspektasi jumlah klaim besar dari masing-masing kelompok**
> > - Merah: $300 \times 0{,}09 = 27$ klaim
> > - Hijau: $700 \times 0{,}04 = 28$ klaim
> >
> > **Langkah 2: Terapkan Bayes**
> >
> > $$P(M|B) = \frac{300 \times 0{,}09}{300 \times 0{,}09 + 700 \times 0{,}04} = \frac{27}{27 + 28} = \frac{27}{55} \approx 0{,}4909$$
> >
> > **Hasil Akhir:** **(c)**. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$ ($\approx 0{,}491$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(B|M) = 0{,}9$ langsung tanpa mengalikan dengan $P(K|M) = 0{,}1$.
> > > - Lupa membobot dengan jumlah mobil (300 dan 700) dalam proporsi prior.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kemungkinan klaim melebihi 10 juta jika diketahui terjadi kecelakaan" = probabilitas bersyarat pada kecelakaan, bukan probabilitas tanpa syarat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada dua level kondisi (kecelakaan LALU klaim besar) → gabungkan dulu menjadi satu probabilitas $P(B | \text{warna})$ sebelum menerapkan Bayes.

---

## **No. 28**

Sebuah penelitian sedang dilakukan di mana kesehatan dua kelompok yang saling independen. Setiap kelompok terdiri atas sepuluh pemegang polis yang dipantau selama periode waktu satu tahun. Jika probabilitas peserta dalam penelitian ini keluar sebelum penelitian berakhir sebesar $0{,}2$ (terlepas dari peserta lainnya), tentukanlah peluang terdapatnya paling sedikit sembilan peserta menyelesaikan penelitian, dan hanya terjadi pada suatu kelompok tetapi tidak pada kelompok lainnya.

a. Kurang dari $0{,}11$  
b. Sekurang-kurangnya $0{,}11$ tapi kurang dari $0{,}22$  
c. Sekurang-kurangnya $0{,}22$ tapi kurang dari $0{,}33$  
d. Sekurang-kurangnya $0{,}33$ tapi kurang dari $0{,}44$  
e. Sekurang-kurangnya $0{,}44$

> [!summary]+ **Jawaban No. 28** 
>
> **(e). Sekurang-kurangnya $0{,}44$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > Misalkan $A$ = kejadian bahwa suatu kelompok memiliki $\geq 9$ peserta selesai.
> > $Z_i \sim B(10, 0{,}8)$ (jumlah yang selesai di kelompok $i$, karena $p_{\text{selesai}} = 1 - 0{,}2 = 0{,}8$).
> > $P(A) = P(Z_i \geq 9) = P(Z_i = 9) + P(Z_i = 10)$
> > Target: $P(\text{tepat satu kelompok memiliki} \geq 9) = 2 P(A)(1-P(A))$
>
> **Diketahui:**
> - $n = 10$, $p = 0{,}8$ (selesai), dua kelompok independen
> - Target: $P(\text{tepat satu dari dua kelompok memiliki} \geq 9 \text{ penyelesai})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(Z \geq 9)$ untuk satu kelompok**
> >
> > $$P(Z=9) = \binom{10}{9}(0{,}8)^9(0{,}2)^1 = 10 \cdot (0{,}8)^9 \cdot 0{,}2$$
> >
> > $(0{,}8)^9 = 0{,}134217728$
> > $P(Z=9) = 10 \cdot 0{,}134217728 \cdot 0{,}2 = 0{,}268435456$
> >
> > $$P(Z=10) = (0{,}8)^{10} = 0{,}1073741824$$
> >
> > $$P(Z \geq 9) = 0{,}268435456 + 0{,}1073741824 = 0{,}3758096384 \approx 0{,}3758$$
> >
> > **Langkah 2: Probabilitas tepat satu kelompok memiliki $\geq 9$**
> > Misalkan $q = P(Z \geq 9) \approx 0{,}3758$.
> >
> > $$P(\text{tepat satu}) = 2q(1-q) = 2(0{,}3758)(0{,}6242) \approx 2(0{,}2346) = 0{,}4693$$
> >
> > **Hasil Akhir:** **(e)**. Sekurang-kurangnya $0{,}44$ ($\approx 0{,}4693$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $p = 0{,}2$ (probabilitas keluar) sebagai probabilitas sukses (selesai) — harus $p = 0{,}8$.
> > > - Mengira "hanya terjadi pada suatu kelompok" = salah satu kelompok spesifik, bukan salah satu dari dua.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Paling sedikit sembilan" = $Z \geq 9$, bukan $Z = 9$.
> > > - "Hanya terjadi pada suatu kelompok tetapi tidak pada kelompok lainnya" = XOR: tepat satu yang memenuhi → $2q(1-q)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "tepat satu dari dua" kejadian independen → gunakan pola $2p(1-p)$.

---

## **No. 29**

Suhu tertinggi harian di Jakarta pada bulan Januari berdistribusi normal dengan rata-rata $25$ derajat Celcius dan standar deviasi sebesar $5$ derajat Celcius. Suhu tertinggi harian di Surabaya pada bulan Januari berdistribusi normal dengan rata-rata $20$ derajat Celcius dan standar deviasi sebesar $8$ derajat Celcius. Dengan asumsi bahwa suhu tertinggi harian di Jakarta dan Surabaya tidak bergantung satu sama lain, tentukan probabilitas bahwa pada hari tertentu di bulan Januari, selisih suhu tertinggi untuk hari itu di Jakarta dan Surabaya berada dalam kisaran $1$ derajat Celsius satu sama lain.

a. Kurang dari $0{,}05$  
b. Sekurang-kurangnya $0{,}05$ tapi kurang dari $0{,}06$  
c. Sekurang-kurangnya $0{,}06$ tapi kurang dari $0{,}07$  
d. Sekurang-kurangnya $0{,}07$ tapi kurang dari $0{,}08$  
e. Sekurang-kurangnya $0{,}08$

> [!summary]+ **Jawaban No. 29** 
>
> **(d). Sekurang-kurangnya $0{,}07$ tapi kurang dari $0{,}08$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $J \sim N(\mu_J, \sigma_J^2)$ dan $S \sim N(\mu_S, \sigma_S^2)$ independen, maka:
> >
> > $$D = J - S \sim N(\mu_J - \mu_S,\ \sigma_J^2 + \sigma_S^2)$$
> >
> > Target: $P(|D| \leq 1) = P(-1 \leq D \leq 1)$
>
> **Diketahui:**
> - $J \sim N(25, 25)$ ($\sigma_J = 5$)
> - $S \sim N(20, 64)$ ($\sigma_S = 8$)
> - $D = J - S \sim N(5, 89)$, $\sigma_D = \sqrt{89} \approx 9{,}434$
> - Target: $P(-1 \leq D \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi $D = J - S$**
> > $E[D] = 25 - 20 = 5$, $\text{Var}(D) = 25 + 64 = 89$, $\sigma_D = \sqrt{89} \approx 9{,}434$
> >
> > **Langkah 2: Standardisasi**
> >
> > $$P(-1 \leq D \leq 1) = P\left(\frac{-1-5}{9{,}434} \leq Z \leq \frac{1-5}{9{,}434}\right) = P\left(-0{,}636 \leq Z \leq -0{,}424\right)$$
> >
> > **Langkah 3: Hitung dari tabel Normal**
> >
> > $$P(-0{,}636 \leq Z \leq -0{,}424) = \Phi(-0{,}424) - \Phi(-0{,}636)$$
> >
> > $\Phi(-0{,}424) = 1 - \Phi(0{,}424) \approx 1 - 0{,}6642 = 0{,}3358$
> > $\Phi(-0{,}636) = 1 - \Phi(0{,}636) \approx 1 - 0{,}7375 = 0{,}2625$
> >
> > $$P = 0{,}3358 - 0{,}2625 = 0{,}0733$$
> >
> > **Hasil Akhir:** **(d)**. Sekurang-kurangnya $0{,}07$ tapi kurang dari $0{,}08$ ($\approx 0{,}0733$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(J-S) = \sigma_J^2 - \sigma_S^2$ — untuk independen: $\text{Var}(J-S) = \sigma_J^2 + \sigma_S^2$.
> > > - Lupa bahwa $E[D] = 5 \neq 0$, sehingga interval $(-1,1)$ tidak simetris terhadap mean.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Berada dalam kisaran 1 derajat satu sama lain" = $|J - S| \leq 1$, bukan $J - S \leq 1$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika selisih dua normal → distribusi normal baru, perhatikan $E[D]$ bisa tidak nol.

---

## **No. 30**

Diketahui $Y$ adalah faktor pertumbuhan dana investasi tahun depan, dimana $Y = e^X$, dimana $X$ mempunyai distribusi seragam pada interval $[-1, 1]$. Tentukanlah persentil ke-80 dari $Y$.

a. Kurang dari $1{,}5$  
b. Sekurang-kurangnya $1{,}5$ tapi kurang dari $1{,}75$  
c. Sekurang-kurangnya $1{,}75$ tapi kurang dari $2$  
d. Sekurang-kurangnya $2$ tapi kurang dari $2{,}25$  
e. Sekurang-kurangnya $2{,}25$

> [!summary]+ **Jawaban No. 30** 
>
> **(c). Sekurang-kurangnya $1{,}75$ tapi kurang dari $2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > Persentil ke-$p$ dari transformasi monoton: jika $Y = g(X)$ dengan $g$ monoton meningkat, maka persentil ke-$p$ dari $Y$ adalah $g$ dari persentil ke-$p$ dari $X$.
> > $X \sim U(-1,1)$: persentil ke-80 dari $X$ adalah $x_{0{,}8}$ di mana $F_X(x_{0{,}8}) = 0{,}8$.
>
> **Diketahui:**
> - $X \sim U(-1,1)$, $Y = e^X$ (transformasi monoton meningkat)
> - Target: persentil ke-80 dari $Y$, yaitu $y_{0{,}8}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung persentil ke-80 dari $X$**
> > $F_X(x) = \frac{x-(-1)}{1-(-1)} = \frac{x+1}{2}$
> > Selesaikan $F_X(x_{0{,}8}) = 0{,}8$:
> >
> > $$\frac{x_{0{,}8}+1}{2} = 0{,}8 \Rightarrow x_{0{,}8} = 2(0{,}8) - 1 = 0{,}6$$
> >
> > **Langkah 2: Transformasikan ke persentil $Y$**
> >
> > $$y_{0{,}8} = e^{x_{0{,}8}} = e^{0{,}6} \approx 1{,}8221$$
> >
> > **Hasil Akhir:** **(c)**. Sekurang-kurangnya $1{,}75$ tapi kurang dari $2$ ($y_{0{,}8} \approx 1{,}822$)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari PDF dari $Y$ lalu mengintegrasikan untuk CDF — prosedur benar tetapi jauh lebih panjang; manfaatkan sifat monoton.
> > > - Mengira persentil ke-80 dari $Y$ = $e^{E[X] + 0{,}8\sigma_X}$ — ini hanya berlaku untuk distribusi normal.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Persentil ke-80" = nilai $y$ sehingga $P(Y \leq y) = 0{,}8$, bukan $P(Y \geq y) = 0{,}8$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Y = g(X)$ dengan $g$ monoton meningkat → persentil $Y$ = $g$(persentil $X$), tidak perlu transformasi PDF/CDF penuh.

---
