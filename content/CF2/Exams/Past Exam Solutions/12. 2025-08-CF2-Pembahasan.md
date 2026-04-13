# CF2 Periode Agustus 2025
## **No. 1**

PT Asuransi Gemilang Sejahtera memiliki suatu produk asuransi kendaraan bermotor yang memberikan perlindungan kepada pengendara hingga usia 65 tahun. Seorang analis aktuaria melakukan studi pengalaman mengenai peluang kecelakaan dalam suatu tahun kalender dan diperoleh statistik sebagai berikut:

| Rentang Usia Pengendara | Peluang Kecelakaan | Porsi Pengendara |
|:-:|:-:|:-:|
| $18$-$20$ | $0{,}06$ | $0{,}08$ |
| $21$-$30$ | $0{,}03$ | $0{,}15$ |
| $31$-$50$ | $0{,}02$ | $0{,}49$ |
| $51$-$65$ | $0{,}04$ | $0{,}28$ |

Seorang pengendara yang mengalami suatu kecelakaan diambil secara acak dari perusahaan tersebut. Tentukan peluang bahwa pengendara tersebut berada pada rentang usia 18-20! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}13$  
b. $0{,}16$  
c. $0{,}19$  
d. $0{,}23$  
e. $0{,}40$

> [!summary]+ **Jawaban No. 1** 
> 
> **$0{,}16$ (b)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > 
> > **Teorema Bayes:**
> > 
> > $$P(A_i \mid B) = \frac{P(B \mid A_i)\,P(A_i)}{\sum_{j} P(B \mid A_j)\,P(A_j)}$$
> > 
> > **Hukum Probabilitas Total:**
> > 
> > $$P(B) = \sum_{j} P(B \mid A_j)\,P(A_j)$$
> >
>
> **Diketahui:**
> - $A_1 = \{18\text{-}20\}$, $P(A_1) = 0{,}08$, $P(\text{Kecelakaan} \mid A_1) = 0{,}06$
> - $A_2 = \{21\text{-}30\}$, $P(A_2) = 0{,}15$, $P(\text{Kecelakaan} \mid A_2) = 0{,}03$
> - $A_3 = \{31\text{-}50\}$, $P(A_3) = 0{,}49$, $P(\text{Kecelakaan} \mid A_3) = 0{,}02$
> - $A_4 = \{51\text{-}65\}$, $P(A_4) = 0{,}28$, $P(\text{Kecelakaan} \mid A_4) = 0{,}04$
> - Target: $P(A_1 \mid \text{Kecelakaan})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{Kecelakaan})$ dengan Hukum Probabilitas Total**
> >
> > $$P(\text{Kecelakaan}) = (0{,}06)(0{,}08) + (0{,}03)(0{,}15) + (0{,}02)(0{,}49) + (0{,}04)(0{,}28)$$
> > 
> > $$= 0{,}0048 + 0{,}0045 + 0{,}0098 + 0{,}0112 = 0{,}0303$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(A_1 \mid \text{Kecelakaan}) = \frac{P(\text{Kecelakaan} \mid A_1)\,P(A_1)}{P(\text{Kecelakaan})} = \frac{(0{,}06)(0{,}08)}{0{,}0303} = \frac{0{,}0048}{0{,}0303} \approx 0{,}158$$
> >
> > Dibulatkan: $0{,}16$.
> >
> > **Hasil Akhir:** $0{,}16$ **(b)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab langsung $P(\text{Kecelakaan} \mid A_1) = 0{,}06$ — ini bukan yang ditanya; soal membalik arah kondisi.
> > > - Tidak menghitung $P(\text{Kecelakaan})$ terlebih dahulu sebagai penyebut Bayes.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Porsi pengendara" adalah probabilitas prior $P(A_i)$, bukan bobot tambahan — harus digunakan langsung dalam formula.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "diambil secara acak dari yang mengalami [kejadian B]" → ini selalu Teorema Bayes, hitung $P(B)$ dulu.
> > > - Jika $\sum P(A_i) \neq 1$ → cek kembali tabel porsi; di sini $0{,}08+0{,}15+0{,}49+0{,}28 = 1$ ✓

---

## **No. 2**

Wadah A memuat 10 bola yang terdiri dari 4 bola berwarna merah dan 6 bola berwarna biru. Wadah B memuat 16 bola berwarna merah dan $x$ bola berwarna biru. Satu bola diambil dari masing-masing wadah. Peluang kedua bola tersebut berwarna sama sebesar $0{,}44$. Tentukan banyaknya bola yang terdapat pada Wadah B!

a. $4$  
b. $20$  
c. $24$  
d. $44$  
e. $64$

> [!summary]+ **Jawaban No. 2** 
> 
> **$20$ (b)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.2 |
>
> > [!info]+ **Rumus**  
> >
> > Karena pengambilan dari Wadah A dan B saling bebas:
> >
> > $$P(\text{sama warna}) = P(\text{keduanya merah}) + P(\text{keduanya biru})$$
> >
> > $$= P(M_A)\,P(M_B) + P(B_A)\,P(B_B)$$
> >
>
> **Diketahui:**
> - Wadah A: 4 merah, 6 biru, total 10 bola
> - Wadah B: 16 merah, $x$ biru, total $(16+x)$ bola
> - $P(\text{sama warna}) = 0{,}44$
> - Target: total bola Wadah B $= 16 + x$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun persamaan probabilitas**
> >
> > $$P(\text{sama}) = \frac{4}{10} \cdot \frac{16}{16+x} + \frac{6}{10} \cdot \frac{x}{16+x} = 0{,}44$$
> >
> > **Langkah 2: Sederhanakan**
> >
> > $$\frac{64 + 6x}{10(16+x)} = 0{,}44$$
> >
> > $$64 + 6x = 4{,}4(16 + x)$$
> >
> > $$64 + 6x = 70{,}4 + 4{,}4x$$
> >
> > $$1{,}6x = 6{,}4 \implies x = 4$$
> >
> > **Langkah 3: Hitung total bola Wadah B**
> >
> > $$\text{Total} = 16 + 4 = 20$$
> >
> > **Hasil Akhir:** $20$ **(b)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $x = 4$ tanpa menambahkan 16 — soal menanyakan total bola, bukan jumlah bola biru saja.
> > > - Lupa menyertakan kasus "keduanya biru" dalam persamaan probabilitas.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "$x$ bola berwarna biru" artinya total Wadah B adalah $16 + x$, bukan $x$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menanyakan "banyaknya bola" → pastikan menjawab total, bukan satu warna saja.

---
## **No. 3**

Suatu kelas terdiri dari 8 laki-laki dan 7 perempuan. Seorang guru mengambil 3 siswa secara acak tanpa pemulihan. Hitunglah peluang banyaknya laki-laki yang terpilih melebihi banyaknya perempuan yang terpilih!

a. $\dfrac{512}{3375}$  
b. $\dfrac{28}{65}$  
c. $\dfrac{8}{15}$  
d. $\dfrac{1856}{3375}$  
e. $\dfrac{36}{65}$

> [!summary]+ **Jawaban No. 3**
> 
> **(e). $\dfrac{36}{65}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.3 |
>
> > [!info]+ **Rumus**
> >
> > **Prinsip Probabilitas Klasik:**
> >
> > $$P(A) = \frac{\text{Jumlah cara favorable}}{\text{Total cara pengambilan}}$$
> >
> > **Kombinasi** (pengambilan tanpa urutan, tanpa pengembalian):
> >
> > $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
> >
> > **Aturan Perkalian:** Jika pemilihan $k$ laki-laki dari $n_L$ dan $m$ perempuan dari $n_P$ dilakukan secara bersamaan:
> >
> > $$\text{Cara} = \binom{n_L}{k} \times \binom{n_P}{m}$$
> >
>
> **Diketahui:**
> - 8 laki-laki (L), 7 perempuan (P), total 15 siswa
> - Diambil 3 siswa **tanpa pemulihan** (tanpa pengembalian), urutan tidak penting
> - Target: $P(\text{jumlah L} > \text{jumlah P})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Semua Kemungkinan Komposisi 3 Siswa**
> >
> > Jika diambil 3 siswa, komposisi yang mungkin adalah:
> >
> > | Komposisi | L > P? |
> > |:-:|:-:|
> > | 0L, 3P | Tidak ($0 < 3$) |
> > | 1L, 2P | Tidak ($1 < 2$) |
> > | 2L, 1P | **Ya** ($2 > 1$) ✓ |
> > | 3L, 0P | **Ya** ($3 > 0$) ✓ |
> >
> > Jadi kasus favorable: **2L 1P** dan **3L 0P**.
> >
> > **Langkah 2: Hitung Total Cara Pengambilan**
> >
> > $$\binom{15}{3} = \frac{15 \times 14 \times 13}{3 \times 2 \times 1} = \frac{2730}{6} = 455$$
> >
> > **Langkah 3: Hitung Cara Favorable untuk Kasus 2L, 1P**
> >
> > Pilih 2 laki-laki dari 8, dan 1 perempuan dari 7:
> >
> > $$\binom{8}{2} \times \binom{7}{1} = \frac{8 \times 7}{2} \times 7 = 28 \times 7 = 196$$
> >
> > **Langkah 4: Hitung Cara Favorable untuk Kasus 3L, 0P**
> >
> > Pilih 3 laki-laki dari 8, dan 0 perempuan dari 7:
> >
> > $$\binom{8}{3} \times \binom{7}{0} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} \times 1 = 56 \times 1 = 56$$
> >
> > **Langkah 5: Jumlahkan dan Hitung Probabilitas**
> >
> > Total cara favorable: $196 + 56 = 252$
> >
> > $$P(\text{L} > \text{P}) = \frac{252}{455}$$
> >
> > Sederhanakan: $\gcd(252, 455)$. Coba: $252 = 7 \times 36$ dan $455 = 7 \times 65$, sehingga $\gcd = 7$:
> >
> > $$\frac{252}{455} = \frac{252 \div 7}{455 \div 7} = \frac{36}{65}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{36}{65}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan **permutasi** alih-alih kombinasi: karena pengambilan 3 siswa tidak mempertimbangkan urutan (siapa diambil pertama, kedua, dst.), rumus yang tepat adalah $\binom{n}{k}$, bukan $P(n,k) = n!/(n-k)!$.
> > > - Melewatkan salah satu kasus favorable: hanya menghitung 2L1P atau hanya 3L0P — keduanya harus dijumlahkan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "**Melebihi**" berarti $>$ (strict inequality), bukan $\geq$. Kasus 1L2P (laki-laki = 1, perempuan = 2) **tidak** memenuhi karena $1 \not> 2$.
> > > - "Tanpa pemulihan" berarti setelah seorang siswa diambil, ia tidak dikembalikan → gunakan **kombinasi hipergeometrik** $\binom{n_L}{k}\binom{n_P}{m}$, bukan Binomial $p^k(1-p)^{n-k}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **"tanpa pemulihan/pengembalian"** dengan populasi **terbatas** → gunakan kombinasi, bukan rumus Binomial (yang mengasumsikan pengambilan dengan pengembalian atau populasi tak hingga).
> > > - Selalu buat tabel komposisi yang mungkin terlebih dahulu, lalu tandai mana yang memenuhi kondisi soal.

---

## **No. 4**

Misal $X$ merupakan variabel acak kontinu dengan fungsi kepadatan peluang:

$$f(x) = \begin{cases} \dfrac{|x|}{10}, & \text{untuk } -2 \leq x \leq 4 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah nilai harapan dari $X$!

a. $\dfrac{1}{5}$  
b. $\dfrac{3}{5}$  
c. $1$  
d. $\dfrac{28}{15}$  
e. $\dfrac{12}{5}$

> [!summary]+ **Jawaban No. 4** 
> 
> **$\dfrac{28}{15}$ (d)**
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
> > $$E[X] = \int_{-\infty}^{\infty} x\,f(x)\,dx$$
> >
> > Untuk fungsi nilai mutlak: $|x| = -x$ jika $x < 0$, dan $|x| = x$ jika $x \geq 0$.
>
> **Diketahui:**
> - $f(x) = \dfrac{|x|}{10}$ untuk $-2 \leq x \leq 4$, support $[-2, 4]$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi PDF valid**
> >
> > $$\int_{-2}^{0} \frac{-x}{10}\,dx + \int_{0}^{4} \frac{x}{10}\,dx = \frac{1}{10}\left[\frac{-x^2}{2}\right]_{-2}^{0} + \frac{1}{10}\left[\frac{x^2}{2}\right]_{0}^{4}$$
> >
> > $$= \frac{1}{10}(2) + \frac{1}{10}(8) = \frac{2}{10} + \frac{8}{10} = 1 \checkmark$$
> >
> > **Langkah 2: Hitung $E[X]$ dengan memecah integral di $x = 0$**
> >
> > $$E[X] = \int_{-2}^{0} x \cdot \frac{-x}{10}\,dx + \int_{0}^{4} x \cdot \frac{x}{10}\,dx$$
> >
> > Bagian pertama ($x \in [-2, 0]$):
> >
> > $$\int_{-2}^{0} \frac{-x^2}{10}\,dx = \frac{-1}{10}\left[\frac{x^3}{3}\right]_{-2}^{0} = \frac{-1}{10}\left(0 - \frac{-8}{3}\right) = \frac{-1}{10} \cdot \frac{8}{3} = \frac{-8}{30}$$
> >
> > Bagian kedua ($x \in [0, 4]$):
> >
> > $$\int_{0}^{4} \frac{x^2}{10}\,dx = \frac{1}{10}\left[\frac{x^3}{3}\right]_{0}^{4} = \frac{1}{10} \cdot \frac{64}{3} = \frac{64}{30}$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$E[X] = \frac{-8}{30} + \frac{64}{30} = \frac{56}{30} = \frac{28}{15}$$
> >
> > **Hasil Akhir:** $\dfrac{28}{15}$ **(d)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak memecah integral di titik $x = 0$ — integrasi $|x|$ harus ditangani secara terpisah untuk bagian negatif dan positif.
> > > - Langsung mengintegralkan $x \cdot \frac{x}{10}$ di seluruh $[-2,4]$ tanpa menangani tanda negatif — ini salah karena $|x| \neq x$ untuk $x < 0$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $f(x) = x/10$ di seluruh support (mengabaikan nilai mutlak) — padahal $f(-1) = 1/10$, bukan $-1/10$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF mengandung $|x|$ atau $|x - c|$ → selalu pecah integral di titik kritis di mana ekspresi di dalam $|\cdot|$ bernilai nol.

---

## **No. 5**

Suatu tim bisbol telah menjadwalkan pembukaan gim pada 1 April. Jika hari hujan pada 1 April, permainan akan ditunda dan akan dijadwalkan pada keesokan harinya jika hari tidak hujan. Tim tersebut membeli asuransi yang memberikan penggantian kerugian ketika terjadi hujan. Polis tersebut akan memberikan manfaat sebesar 1 juta untuk setiap harinya, hingga dua hari, ketika pembukaan gim ditunda. Perusahaan asuransi menentukan bahwa banyaknya jumlah hari hujan yang dimulai 1 April berdistribusi Poisson dengan rataan $0{,}6$. Berapa deviasi standar dari besarnya manfaat asuransi yang Perusahaan asuransi harus bayarkan? (Pilihlah jawaban yang paling mendekati!)

a. $668$ ribu  
b. $699$ ribu  
c. $775$ ribu  
d. $817$ ribu  
e. $904$ ribu

> [!summary]+ **Jawaban No. 5**
> 
> **(b). $699$ ribu**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > **PMF Poisson:** $P(N=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$ untuk $k = 0, 1, 2, \ldots$
> >
> > **Variansi dari variabel diskrit:**
> >
> > $$\text{Var}(B) = E[B^2] - (E[B])^2, \qquad \text{SD}(B) = \sqrt{\text{Var}(B)}$$
> >
> > **Transformasi terbatas (capped variable):** Jika $B = \min(N, c)$, maka $B$ mengambil nilai $0, 1, \ldots, c-1$ masing-masing dengan $P(N=k)$, dan nilai $c$ dengan $P(N \geq c)$.
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda = 0{,}6)$ = banyaknya hari hujan mulai 1 April
> - Manfaat asuransi: 1 juta per hari hujan, **maksimum 2 hari** → $B = \min(N, 2)$ juta
> - Target: $\text{SD}(B)$ dalam satuan ribu rupiah
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Poisson yang Diperlukan**
> >
> > Dengan $\lambda = 0{,}6$:
> >
> > $$P(N=0) = \frac{e^{-0{,}6}(0{,}6)^0}{0!} = e^{-0{,}6} \approx 0{,}5488$$
> >
> > $$P(N=1) = \frac{e^{-0{,}6}(0{,}6)^1}{1!} = 0{,}6\,e^{-0{,}6} \approx 0{,}3293$$
> >
> > $$P(N \geq 2) = 1 - P(N=0) - P(N=1) = 1 - 0{,}5488 - 0{,}3293 = 0{,}1219$$
> >
> > **Langkah 2: Tentukan Distribusi $B = \min(N, 2)$**
> >
> > Karena manfaat dibayar **hingga maksimum 2 hari**:
> > - $B = 0$ jika $N = 0$ (tidak ada hujan)
> > - $B = 1$ jika $N = 1$ (hujan 1 hari)
> > - $B = 2$ jika $N \geq 2$ (hujan 2 hari atau lebih, tetap dibayar 2 hari)
> >
> > | $B$ (juta) | $P(B)$ |
> > |:-:|:-:|
> > | $0$ | $0{,}5488$ |
> > | $1$ | $0{,}3293$ |
> > | $2$ | $0{,}1219$ |
> >
> > Verifikasi: $0{,}5488 + 0{,}3293 + 0{,}1219 = 1{,}000$ ✓
> >
> > **Langkah 3: Hitung $E[B]$**
> >
> > $$E[B] = 0 \times 0{,}5488 + 1 \times 0{,}3293 + 2 \times 0{,}1219$$
> >
> > $$= 0 + 0{,}3293 + 0{,}2438 = 0{,}5731 \text{ juta}$$
> >
> > **Langkah 4: Hitung $E[B^2]$**
> >
> > $$E[B^2] = 0^2 \times 0{,}5488 + 1^2 \times 0{,}3293 + 2^2 \times 0{,}1219$$
> >
> > $$= 0 + 0{,}3293 + 4 \times 0{,}1219 = 0{,}3293 + 0{,}4876 = 0{,}8169 \text{ juta}^2$$
> >
> > **Langkah 5: Hitung Variansi dan Deviasi Standar**
> >
> > $$\text{Var}(B) = E[B^2] - (E[B])^2 = 0{,}8169 - (0{,}5731)^2$$
> >
> > $$(0{,}5731)^2 = 0{,}3284$$
> >
> > $$\text{Var}(B) = 0{,}8169 - 0{,}3284 = 0{,}4885 \text{ juta}^2$$
> >
> > $$\text{SD}(B) = \sqrt{0{,}4885} \approx 0{,}6989 \text{ juta} = 698{,}9 \text{ ribu} \approx 699 \text{ ribu}$$
> >
> > **Hasil Akhir:** **(b)**. $699$ ribu
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{SD}(N) = \sqrt{\lambda} = \sqrt{0{,}6} \approx 775$ ribu (opsi c) secara langsung — ini adalah deviasi standar dari $N$, **bukan** dari $B = \min(N,2)$. Variabel $B$ memiliki distribusi yang berbeda dari $N$ karena di-cap di 2.
> > > - Lupa bahwa untuk $N \geq 2$, manfaat tetap $B = 2$ (bukan $B = N$). Semua kejadian $N = 2, 3, 4, \ldots$ digabung menjadi satu nilai $B = 2$ dengan probabilitas $P(N \geq 2)$.
> > > - Salah menghitung $(E[B])^2$: pastikan mengkuadratkan hasil $E[B]$, bukan $E[B^2]$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Manfaat **hingga** dua hari" berarti **batas atas** manfaat adalah 2 hari — ini adalah struktur $\min(N, 2)$, bukan "tepat 2 hari" atau "setidaknya 2 hari".
> > > - Manfaat dihitung per hari hujan yang menyebabkan penundaan, dimulai dari 1 April. Jika tidak hujan sama sekali ($N=0$), tidak ada manfaat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebutkan **batas maksimum manfaat** → bentuk variabel pembayaran menjadi $B = \min(N, c)$, lalu buat tabel distribusi $B$ secara eksplisit.
> > > - Soal meminta **deviasi standar**, bukan variansi → jangan lupa mengakarkan di langkah terakhir.
> > > - Nilai $\sqrt{0{,}6} \approx 0{,}775$ adalah jebakan opsi (c) — ini hanya berlaku jika tidak ada pembatasan manfaat.

---

## **No. 6**

Misal $X$ dan $Y$ merupakan dua variabel acak kontinu dengan fungsi peluang bersama:

$$f(x, y) = \begin{cases} 15y, & \text{untuk } x^2 \leq y \leq x \\ 0, & \text{selainnya} \end{cases}$$

Misal $g$ merupakan fungsi kepadatan dari $Y$. Manakah dari pilihan jawaban berikut yang merepresentasikan $g$?

a. $g(y) = \begin{cases} 15y, & \text{untuk } 0 \leq y \leq 1 \\ 0, & \text{selainnya} \end{cases}$  
b. $g(y) = \begin{cases} \dfrac{15y^2}{2}, & \text{untuk } x^2 \leq y \leq x \\ 0, & \text{selainnya} \end{cases}$  
c. $g(y) = \begin{cases} \dfrac{15y^2}{2}, & \text{untuk } 0 \leq y \leq 1 \\ 0, & \text{selainnya} \end{cases}$  
d. $g(y) = \begin{cases} 15y^{3/2}\left(1 - y^{1/2}\right), & \text{untuk } x^2 \leq y \leq x \\ 0, & \text{selainnya} \end{cases}$  
e. $g(y) = \begin{cases} 15y^{3/2}\left(1 - y^{1/2}\right), & \text{untuk } 0 \leq y \leq 1 \\ 0, & \text{selainnya} \end{cases}$

> [!summary]+ **Jawaban No. 6**
> 
> **(e). $g(y) = 15y^{3/2}(1-y^{1/2})$ untuk $0 \leq y \leq 1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan (Joint Distribution)]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1–2.3; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > **PDF Marginal dari $Y$** (mengintegrasikan $f(x,y)$ terhadap $x$):
> >
> > $$g_Y(y) = \int_{-\infty}^{\infty} f(x, y)\,dx$$
> >
> > Batas integrasi harus ditentukan dari **region support** $\{(x,y) : x^2 \leq y \leq x\}$ untuk nilai $y$ yang diberikan — bukan dari nilai $x$ yang diberikan.
>
> **Diketahui:**
> - $f(x,y) = 15y$ pada region $\{x^2 \leq y \leq x\}$, yaitu untuk $0 \leq x \leq 1$
> - Target: $g_Y(y) = \displaystyle\int f(x,y)\,dx$ sebagai fungsi $y$ saja (bebas dari $x$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gambar dan Pahami Region Support**
> >
> > Kondisi $x^2 \leq y \leq x$ artinya:
> > - $y \geq x^2$ (titik $(x,y)$ berada di atas parabola $y = x^2$)
> > - $y \leq x$ (titik $(x,y)$ berada di bawah garis $y = x$)
> >
> > Kedua kurva berpotongan di $(0,0)$ dan $(1,1)$. Jadi support $(X,Y)$ adalah region antara parabola dan garis diagonal di $[0,1]^2$, dengan $0 \leq x \leq 1$.
> >
> > **Langkah 2: Tentukan Batas $x$ untuk Nilai $y$ Tertentu**
> >
> > Untuk menghitung $g_Y(y)$, kita perlu batas $x$ saat $y$ dipegang tetap:
> > - Dari $y \leq x$: $x \geq y$ (batas bawah $x$)
> > - Dari $y \geq x^2$: $x \leq \sqrt{y}$ (batas atas $x$)
> >
> > Jadi untuk $y$ tetap: $x$ berkisar dari $y$ sampai $\sqrt{y}$.
> >
> > Support $Y$: karena $x \in [0,1]$ dan $y \in [x^2, x]$, nilai $y$ berkisar dari $0$ (saat $x \to 0$) hingga $1$ (saat $x = 1$). Jadi support marginal $Y$ adalah $[0,1]$.
> >
> > **Langkah 3: Integrasikan $f(x,y)$ terhadap $x$**
> >
> > $$g_Y(y) = \int_{y}^{\sqrt{y}} 15y\,dx$$
> >
> > Karena $15y$ adalah konstanta terhadap $x$ (tidak mengandung $x$):
> >
> > $$= 15y \int_{y}^{\sqrt{y}} dx = 15y \cdot \left[x\right]_{y}^{\sqrt{y}} = 15y\left(\sqrt{y} - y\right)$$
> >
> > **Langkah 4: Sederhanakan Hasilnya**
> >
> > $$g_Y(y) = 15y(\sqrt{y} - y) = 15y \cdot y^{1/2} - 15y \cdot y = 15y^{3/2} - 15y^2$$
> >
> > Faktorkan:
> >
> > $$= 15y^{3/2}(1 - y^{1/2})$$
> >
> > **Langkah 5: Nyatakan Support Marginal**
> >
> > Support $g_Y$ adalah $0 \leq y \leq 1$ — **bebas dari $x$** karena $x$ sudah diintegrasikan:
> >
> > $$g_Y(y) = \begin{cases} 15y^{3/2}(1 - y^{1/2}), & 0 \leq y \leq 1 \\ 0, & \text{selainnya} \end{cases}$$
> >
> > **Verifikasi (opsional):** Seharusnya $\displaystyle\int_0^1 15y^{3/2}(1-y^{1/2})\,dy = 1$.
> > $= 15\left[\dfrac{y^{5/2}}{5/2} - \dfrac{y^3}{3}\right]_0^1 = 15\left(\dfrac{2}{5} - \dfrac{1}{3}\right) = 15 \times \dfrac{1}{15} = 1$ ✓
> >
> > **Hasil Akhir:** **(e)**. $g(y) = 15y^{3/2}(1 - y^{1/2})$ untuk $0 \leq y \leq 1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah menentukan batas integrasi $x$**: mengintegrasikan dari $x^2$ ke $x$ (menukar batas antara $x$ dan $y$). Ingat: untuk marginalisasi terhadap $y$, kita integrasikan terhadap $x$, sehingga batas harus dinyatakan dalam $y$ bukan $x$.
> > > - Menganggap $15y$ adalah fungsi $x$ karena tertulis $f(x,y)$ — padahal $15y$ **tidak mengandung $x$**, sehingga bisa langsung difaktorkan keluar dari integral.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Memilih opsi **(b)** atau **(d)** yang mencantumkan support $x^2 \leq y \leq x$ — ini **pasti salah** karena PDF marginal $g_Y(y)$ adalah fungsi $y$ saja. Support tidak boleh mengandung $x$ (variabel yang sudah diintegrasikan).
> > > - Memilih opsi **(a)** dengan $g(y) = 15y$ — ini adalah integrand sebelum diintegrasikan, bukan hasil marginalisasi.
> > > - Memilih opsi **(c)** dengan $g(y) = 15y^2/2$ — ini mungkin hasil mengintegrasikan $15y$ terhadap $y$ (bukan $x$), yang merupakan kesalahan arah integrasi.
> >
> > > [!CAUTION] Red Flags
> > > - Support berbentuk **non-rectangular** (ada relasi antar $x$ dan $y$ di syarat support) → **wajib gambar region** sebelum menentukan batas integrasi.
> > > - Langkah kritis: ubah dulu "batas $y$ dalam $x$" → "batas $x$ dalam $y$" sebelum mengintegrasikan. Di sini: dari $x^2 \leq y \leq x$ → menjadi $y \leq x \leq \sqrt{y}$.
> > > - Opsi yang mengandung variabel terintegrasi di support → **langsung eliminasi** tanpa perlu hitung.

---

## **No. 7**

Suatu perangkat berfungsi hingga salah satu dari dua komponen berhenti bekerja. Fungsi peluang bersama dari masa hidup kedua komponen yang diukur dalam jam diberikan sebagai berikut:

$$f(x, y) = \frac{x + y}{27}, \quad \text{untuk } 0 < x < 3 \text{ dan } 0 < y < 3$$

Hitunglah peluang perangkat mengalami kegagalan dalam satu jam pertama pengoperasian! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}04$  
b. $0{,}41$  
c. $0{,}44$  
d. $0{,}59$  
e. $0{,}96$

> [!summary]+ **Jawaban No. 7** 
> 
> **$0{,}41$ (b)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**  
> >
> > Perangkat gagal dalam 1 jam jika $\min(X, Y) \leq 1$:
> >
> > $$P(\min(X,Y) \leq 1) = 1 - P(\min(X,Y) > 1) = 1 - P(X > 1, Y > 1)$$
> >
> > $$P(X > 1, Y > 1) = \int_1^3 \int_1^3 f(x,y)\,dx\,dy$$
> >
>
> **Diketahui:**
> - $f(x,y) = \dfrac{x+y}{27}$ pada $(0,3) \times (0,3)$, kontinu
> - Perangkat gagal saat komponen pertama mati: $T = \min(X, Y)$
> - Target: $P(T \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan komplemen**
> >
> > $$P(T \leq 1) = 1 - P(X > 1, Y > 1)$$
> >
> > **Langkah 2: Hitung $P(X > 1, Y > 1)$**
> >
> > $$P(X>1, Y>1) = \int_1^3 \int_1^3 \frac{x+y}{27}\,dx\,dy$$
> >
> > Integral dalam terhadap $x$:
> >
> > $$\int_1^3 \frac{x+y}{27}\,dx = \frac{1}{27}\left[\frac{x^2}{2} + yx\right]_1^3 = \frac{1}{27}\left[\left(\frac{9}{2}+3y\right)-\left(\frac{1}{2}+y\right)\right] = \frac{1}{27}(4 + 2y)$$
> >
> > Integral luar terhadap $y$:
> >
> > $$\int_1^3 \frac{4+2y}{27}\,dy = \frac{1}{27}\left[4y + y^2\right]_1^3 = \frac{1}{27}\left[(12+9)-(4+1)\right] = \frac{1}{27}(21-5) = \frac{16}{27} \approx 0{,}593$$
> >
> > **Langkah 3: Hitung probabilitas kegagalan**
> >
> > $$P(T \leq 1) = 1 - \frac{16}{27} = \frac{11}{27} \approx 0{,}407 \approx 0{,}41$$
> >
> > **Hasil Akhir:** $0{,}41$ **(b)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(X \leq 1) + P(Y \leq 1)$ tanpa memperhitungkan irisan — ini menghasilkan perhitungan ganda.
> > > - Menggunakan $P(\min \leq 1)$ dengan marginal saja jika $X$ dan $Y$ tidak independen (di sini memang tidak independen karena PDF bersama $\neq$ produk marginal).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Gagal dalam satu jam" berarti $\min(X,Y) \leq 1$, bukan $X \leq 1$ dan $Y \leq 1$ secara bersamaan.
> >
> > > [!CAUTION] Red Flags
> > > - "Berfungsi hingga salah satu komponen berhenti" → sistem seri → gunakan $\min(X,Y)$.
> > > - Gunakan komplemen untuk mempermudah: $P(\min \leq 1) = 1 - P(X>1, Y>1)$.

---

## **No. 8**

Misal $X$ dan $Y$ merupakan variabel acak kontinu dengan fungsi peluang bersama sebagai berikut:

$$f(x, y) = \begin{cases} 24xy, & \text{untuk } 0 < x < 1 \text{ dan } 0 < y < 1 - x \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah peluang $P\!\left(Y < X \mid X = \dfrac{1}{3}\right)$!

a. $\dfrac{1}{27}$  
b. $\dfrac{2}{27}$  
c. $\dfrac{1}{3}$  
d. $\dfrac{4}{9}$  
e. $\dfrac{1}{4}$

> [!summary]+ **Jawaban No. 8** 
> 
> **$\dfrac{1}{4}$ (e)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.2 Distribusi Marginal]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.3; Miller Bab 3.6 |
>
> > [!info]+ **Rumus**  
> >
> > **PDF bersyarat** $Y \mid X = x$:
> >
> > $$f_{Y|X}(y \mid x) = \frac{f(x,y)}{f_X(x)}$$
> >
> > **Probabilitas bersyarat:**
> >
> > $$P(Y < a \mid X = x) = \int_0^{a} f_{Y|X}(y \mid x)\,dy$$
> >
>
> **Diketahui:**
> - $f(x,y) = 24xy$ untuk $0 < x < 1$, $0 < y < 1-x$
> - Target: $P\!\left(Y < \frac{1}{3} \mid X = \frac{1}{3}\right)$ — karena $Y < X$ dan $X = \frac{1}{3}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PDF marginal $f_X(x)$**
> >
> > $$f_X(x) = \int_0^{1-x} 24xy\,dy = 24x \cdot \frac{(1-x)^2}{2} = 12x(1-x)^2$$
> >
> > **Langkah 2: Tentukan PDF bersyarat $f_{Y|X}(y \mid x)$**
> >
> > $$f_{Y|X}(y \mid x) = \frac{24xy}{12x(1-x)^2} = \frac{2y}{(1-x)^2}, \quad 0 < y < 1-x$$
> >
> > Untuk $x = \frac{1}{3}$: $f_{Y|X}\!\left(y \mid \frac{1}{3}\right) = \frac{2y}{(2/3)^2} = \frac{2y}{4/9} = \frac{9y}{2}$, untuk $0 < y < \frac{2}{3}$.
> >
> > **Langkah 3: Hitung $P\!\left(Y < \frac{1}{3} \mid X = \frac{1}{3}\right)$**
> >
> > $$P\!\left(Y < \frac{1}{3} \mid X = \frac{1}{3}\right) = \int_0^{1/3} \frac{9y}{2}\,dy = \frac{9}{2} \cdot \frac{y^2}{2}\Bigg|_0^{1/3} = \frac{9}{4} \cdot \frac{1}{9} = \frac{1}{4}$$
> >
> > **Hasil Akhir:** $\dfrac{1}{4}$ **(e)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $f(x,y)$ langsung tanpa membagi dengan $f_X(x)$ — PDF bersyarat bukan PDF bersama.
> > > - Lupa bahwa batas atas $Y \mid X = x$ adalah $1 - x$, bukan $1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "$P(Y < X \mid X = 1/3)$" berarti $P(Y < 1/3 \mid X = 1/3)$ — substitusi nilai $X$ terlebih dahulu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memuat kondisi $X = x$ (nilai tertentu) → selalu gunakan distribusi bersyarat, bukan joint langsung.

---

## **No. 9**

$X$ dan $Y$ merupakan variabel acak yang saling bebas dengan fungsi pembangkit momen $M(t) = e^{\frac{t^2}{2}}$. Misal $W = X + Y$ dan $Z = Y - X$. Tentukan fungsi pembangkit momen bersama $M(t_1, t_2)$ dari $W$ dan $Z$!

a. $e^{2t_1^2 + 2t_2^2}$  
b. $e^{(t_1 - t_2)^2}$  
c. $e^{(t_1 + t_2)^2}$  
d. $e^{2t_1 t_2}$  
e. $e^{t_1^2 + t_2^2}$

> [!summary]+ **Jawaban No. 9**
> 
> **(e). $e^{t_1^2 + t_2^2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]], [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.3 Fungsi Pembangkit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Referensi** | Hogg-McKean-Craig Bab 3.1; Hogg-Tanis-Zimm Bab 5.8 |
>
> > [!info]+ **Rumus**
> >
> > **Joint MGF dari $(W, Z)$:**
> >
> > $$M_{W,Z}(t_1, t_2) = E\!\left[e^{t_1 W + t_2 Z}\right]$$
> >
> > **Sifat Independensi:** Jika $X \perp Y$, maka untuk semua fungsi $g(X)$ dan $h(Y)$:
> >
> > $$E[g(X) \cdot h(Y)] = E[g(X)] \cdot E[h(Y)]$$
> >
> > **Substitusi MGF univariat:** $E\!\left[e^{aX}\right] = M_X(a)$ — evaluasi MGF $X$ di titik $a$.
>
> **Diketahui:**
> - $X, Y$ saling bebas ($X \perp Y$) dengan MGF yang sama: $M_X(t) = M_Y(t) = e^{t^2/2}$
> - Ini adalah MGF distribusi $N(0,1)$
> - $W = X + Y$, $Z = Y - X$
> - Target: $M_{W,Z}(t_1, t_2) = E[e^{t_1 W + t_2 Z}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspresikan $t_1 W + t_2 Z$ dalam $X$ dan $Y$**
> >
> > Substitusi $W = X + Y$ dan $Z = Y - X$:
> >
> > $$t_1 W + t_2 Z = t_1(X+Y) + t_2(Y-X)$$
> >
> > $$= t_1 X + t_1 Y + t_2 Y - t_2 X$$
> >
> > $$= (t_1 - t_2)X + (t_1 + t_2)Y$$
> >
> > **Langkah 2: Pisahkan Ekspektasi Menggunakan Independensi $X \perp Y$**
> >
> > $$M_{W,Z}(t_1,t_2) = E\!\left[e^{(t_1-t_2)X + (t_1+t_2)Y}\right]$$
> >
> > $$= E\!\left[e^{(t_1-t_2)X} \cdot e^{(t_1+t_2)Y}\right]$$
> >
> > Karena $X \perp Y$, faktor yang hanya bergantung pada $X$ dan faktor yang hanya bergantung pada $Y$ dapat dipisahkan:
> >
> > $$= E\!\left[e^{(t_1-t_2)X}\right] \cdot E\!\left[e^{(t_1+t_2)Y}\right]$$
> >
> > $$= M_X(t_1-t_2) \cdot M_Y(t_1+t_2)$$
> >
> > **Langkah 3: Substitusi MGF**
> >
> > Gunakan $M_X(s) = e^{s^2/2}$ dan $M_Y(s) = e^{s^2/2}$:
> >
> > $$M_X(t_1-t_2) = e^{(t_1-t_2)^2/2}$$
> >
> > $$M_Y(t_1+t_2) = e^{(t_1+t_2)^2/2}$$
> >
> > $$M_{W,Z}(t_1,t_2) = e^{(t_1-t_2)^2/2} \cdot e^{(t_1+t_2)^2/2} = e^{\frac{(t_1-t_2)^2 + (t_1+t_2)^2}{2}}$$
> >
> > **Langkah 4: Sederhanakan Eksponen**
> >
> > Ekspansi pembilang eksponen:
> >
> > $$(t_1-t_2)^2 = t_1^2 - 2t_1t_2 + t_2^2$$
> >
> > $$(t_1+t_2)^2 = t_1^2 + 2t_1t_2 + t_2^2$$
> >
> > Jumlahkan (perhatikan suku $\pm 2t_1t_2$ saling menghilangkan):
> >
> > $$(t_1-t_2)^2 + (t_1+t_2)^2 = 2t_1^2 + 2t_2^2$$
> >
> > Maka:
> >
> > $$M_{W,Z}(t_1,t_2) = e^{\frac{2t_1^2 + 2t_2^2}{2}} = e^{t_1^2 + t_2^2}$$
> >
> > **Catatan Bonus:** Karena joint MGF memfaktorkan menjadi $e^{t_1^2} \cdot e^{t_2^2} = M_W(t_1) \cdot M_Z(t_2)$, ini membuktikan bahwa $W$ dan $Z$ **saling bebas** — meskipun keduanya merupakan kombinasi linear dari $X$ dan $Y$ yang sama!
> >
> > **Hasil Akhir:** **(e)**. $e^{t_1^2 + t_2^2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Langsung menulis** $M_{W,Z}(t_1,t_2) = M_W(t_1) \cdot M_Z(t_2)$ tanpa derivasi — ini hanya valid jika $W \perp Z$, yang justru merupakan kesimpulan yang perlu dibuktikan, bukan asumsi awal.
> > > - Salah menguraikan $t_1 W + t_2 Z$: menulis $(t_1+t_2)X + (t_1-t_2)Y$ (tanda tertukar antara koefisien $X$ dan $Y$).
> > > - Salah ekspansi aljabar: $(a+b)^2 + (a-b)^2 = 2a^2 + 2b^2$ (suku $\pm 2ab$ saling menghilangkan) — ini harus dihapal.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira joint MGF $M_{W,Z}(t_1,t_2)$ adalah hasil kali MGF univariat $M_W(t_1) \cdot M_Z(t_2)$ secara langsung. Joint MGF didefinisikan sebagai $E[e^{t_1 W + t_2 Z}]$, bukan $E[e^{t_1 W}] \cdot E[e^{t_2 Z}]$ kecuali jika $W \perp Z$ sudah diketahui.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $M(t) = e^{t^2/2}$ → distribusi $N(0,1)$; kombinasi linear variabel Normal adalah Normal.
> > > - Langkah kritis: **ubah $t_1 W + t_2 Z$ menjadi bentuk $aX + bY$** dulu sebelum mengambil ekspektasi — ini selalu langkah pertama untuk joint MGF dari transformasi linear.
> > > - Jika joint MGF memfaktorkan sebagai $g(t_1) \cdot h(t_2)$ → $W$ dan $Z$ independen.

---

## **No. 10**

Ketika pemegang polis melakukan klaim akibat suatu kebakaran yang terjadi kepada suatu perusahaan asuransi kebakaran, maka perusahaan tersebut akan menentukan estimasi awal besaran klaim yang akan dibayarkan kepada penerima manfaat sebesar $X$. Ketika klaim tersebut disetujui, Perusahaan membayarkan manfaat sebesar $Y$.

Perusahaan asuransi menentukan $X$ dan $Y$ memiliki fungsi peluang bersama:

$$f(x, y) = \frac{2}{x^2(x-1)} \cdot y^{-\frac{2x-1}{x-1}}, \quad \text{untuk } x > 1,\ y > 1$$

Jika diketahui estimasi klaim awal sebesar 2, tentukan peluang bahwa besaran klaim yang disetujui oleh perusahaan asuransi di antara 1 dan 3!

a. $\dfrac{1}{9}$  
b. $\dfrac{2}{9}$  
c. $\dfrac{1}{3}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{8}{9}$

> [!summary]+ **Jawaban No. 10**
> 
> **(e). $\dfrac{8}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.2 Distribusi Marginal]], [[3.3 Distribusi Bersyarat (Conditional Distribution)]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.3; Miller Bab 3.6 |
>
> > [!info]+ **Rumus**
> >
> > **PDF Bersyarat** $Y$ diketahui $X = x$:
> >
> > $$f_{Y|X}(y \mid x) = \frac{f(x,y)}{f_X(x)}$$
> >
> > **PDF Marginal** $X$:
> >
> > $$f_X(x) = \int_1^{\infty} f(x,y)\,dy$$
> >
> > **Probabilitas bersyarat** menggunakan PDF bersyarat:
> >
> > $$P(a < Y < b \mid X = x) = \int_a^b f_{Y|X}(y \mid x)\,dy$$
> >
>
> **Diketahui:**
> - $f(x,y) = \dfrac{2}{x^2(x-1)} \cdot y^{-\frac{2x-1}{x-1}}$ untuk $x > 1$, $y > 1$
> - Nilai kondisi: $X = 2$
> - Target: $P(1 < Y < 3 \mid X = 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Substitusi $x = 2$ ke PDF Bersama**
> >
> > Hitung konstanta dan eksponen untuk $x = 2$:
> > - Konstanta: $\dfrac{2}{x^2(x-1)}\bigg|_{x=2} = \dfrac{2}{4 \times 1} = \dfrac{1}{2}$
> > - Eksponen: $\dfrac{2x-1}{x-1}\bigg|_{x=2} = \dfrac{2(2)-1}{2-1} = \dfrac{3}{1} = 3$
> >
> > Sehingga:
> >
> > $$f(2, y) = \frac{1}{2} \cdot y^{-3}, \quad y > 1$$
> >
> > **Langkah 2: Hitung Marginal $f_X(2)$**
> >
> > $$f_X(2) = \int_1^{\infty} f(2, y)\,dy = \int_1^{\infty} \frac{1}{2} y^{-3}\,dy$$
> >
> > $$= \frac{1}{2} \left[\frac{y^{-2}}{-2}\right]_1^{\infty} = \frac{1}{2} \left(0 - \frac{1^{-2}}{-2}\right) = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$$
> >
> > (Limit: saat $y \to \infty$, $y^{-2} \to 0$)
> >
> > **Langkah 3: Tentukan PDF Bersyarat $f_{Y|X}(y \mid 2)$**
> >
> > $$f_{Y|X}(y \mid 2) = \frac{f(2, y)}{f_X(2)} = \frac{\frac{1}{2} y^{-3}}{\frac{1}{4}} = \frac{1}{2} \times 4 \times y^{-3} = 2y^{-3}, \quad y > 1$$
> >
> > **Verifikasi:** $\displaystyle\int_1^{\infty} 2y^{-3}\,dy = 2 \cdot \left[\dfrac{y^{-2}}{-2}\right]_1^{\infty} = 2 \cdot \dfrac{1}{2} = 1$ ✓ (valid sebagai PDF)
> >
> > Ini adalah distribusi **Pareto tipe II** dengan parameter $\alpha = 2$.
> >
> > **Langkah 4: Hitung $P(1 < Y < 3 \mid X = 2)$**
> >
> > $$P(1 < Y < 3 \mid X = 2) = \int_1^3 2y^{-3}\,dy$$
> >
> > $$= 2 \left[\frac{y^{-2}}{-2}\right]_1^3 = \left[-y^{-2}\right]_1^3$$
> >
> > $$= \left(-\frac{1}{3^2}\right) - \left(-\frac{1}{1^2}\right) = -\frac{1}{9} + 1 = \frac{8}{9}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{8}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Tidak membagi dengan $f_X(2)$**: menggunakan $f(2,y) = \tfrac{1}{2}y^{-3}$ langsung sebagai PDF bersyarat. Ini adalah PDF bersama yang belum ternormalisasi — integralnya $= 1/4$, bukan $1$.
> > > - Salah menghitung eksponen saat $x=2$: beberapa salah menghitung $\dfrac{2x-1}{x-1} = \dfrac{3}{1} = 3$ menjadi $\dfrac{3}{2}$ atau nilai lain.
> > > - Salah menghitung integral $\int_1^3 2y^{-3}\,dy$: anti-turunan $y^{-3}$ adalah $\dfrac{y^{-2}}{-2}$, bukan $\dfrac{y^{-2}}{2}$ — perhatikan tanda negatif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Di antara 1 dan 3" = $P(1 < Y < 3)$. Batas bawah $y = 1$ sesuai dengan support $y > 1$, sehingga $P(Y = 1) = 0$ untuk distribusi kontinu — tidak perlu khawatir inklusivitas.
> >
> > > [!CAUTION] Red Flags
> > > - Soal menyebut "**jika diketahui** estimasi klaim awal sebesar $x$" → ini adalah **distribusi bersyarat** $f_{Y|X}(y \mid x)$, bukan distribusi marginal atau bersama.
> > > - Prosedur standar: (1) substitusi nilai $x$, (2) hitung marginal $f_X(x)$, (3) bagi untuk dapat $f_{Y|X}$, (4) integrasikan untuk dapat probabilitas.
> > > - Jika $f(x,y) \propto y^{-\alpha}$ dengan $\alpha > 1$ dan support $y > 1$ → distribusi Pareto; integral selalu konvergen.

---

## **No. 11**

Suatu Perusahaan asuransi menawarkan produk asuransi kesehatan kepada para karyawan di suatu Perusahaan besar. Sebagai bagian dari rencana ini, setiap karyawan dapat menambahkan tepat dua dari asuransi tambahan A, B, dan C, atau mereka dapat memilih untuk tidak menambahkan asuransi tambahan apapun dari ketiganya. Proporsi dari karyawan Perusahaan yang memilih asuransi tambahan A, B, dan C yaitu $\dfrac{1}{4}$, $\dfrac{1}{3}$, dan $\dfrac{5}{12}$, secara berurutan. Tentukan peluang seorang karyawan yang diambil secara acak akan memilih tidak dengan asuransi tambahan!

a. $0$  
b. $\dfrac{47}{144}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{97}{144}$  
e. $\dfrac{7}{9}$

> [!summary]+ **Jawaban No. 11**
> 
> **(c). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Normalisasi Probabilitas:** Total proporsi seluruh kelompok $= 1$:
> >
> > $$p_{AB} + p_{AC} + p_{BC} + p_0 = 1$$
> >
> > **Relasi proporsi pilihan individual dan pasangan:**
> > - $P(\text{pilih A}) = p_{AB} + p_{AC}$ (karyawan yang memilih A pasti memilih salah satu dari AB atau AC)
> > - $P(\text{pilih B}) = p_{AB} + p_{BC}$
> > - $P(\text{pilih C}) = p_{AC} + p_{BC}$
>
> **Diketahui:**
> - Setiap karyawan memilih **tepat 2** dari $\{A, B, C\}$ atau **tidak memilih sama sekali**
> - $P(\text{pilih A}) = \frac{1}{4}$, $P(\text{pilih B}) = \frac{1}{3}$, $P(\text{pilih C}) = \frac{5}{12}$
> - Target: $p_0 = P(\text{tidak memilih})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Variabel**
> >
> > Karena setiap karyawan yang memilih akan memilih **tepat 2** asuransi, hanya ada 3 kemungkinan pasangan:
> > - $p_{AB}$ = proporsi yang memilih A dan B
> > - $p_{AC}$ = proporsi yang memilih A dan C
> > - $p_{BC}$ = proporsi yang memilih B dan C
> > - $p_0$ = proporsi yang tidak memilih apapun
> >
> > **Langkah 2: Tulis Sistem Persamaan dari Proporsi Individual**
> >
> > Karyawan yang "memilih A" berarti paket mereka mencakup A, yaitu paket AB atau AC:
> >
> > $$p_{AB} + p_{AC} = \frac{1}{4} \tag{1}$$
> >
> > $$p_{AB} + p_{BC} = \frac{1}{3} \tag{2}$$
> >
> > $$p_{AC} + p_{BC} = \frac{5}{12} \tag{3}$$
> >
> > **Langkah 3: Jumlahkan Ketiga Persamaan**
> >
> > $$(p_{AB} + p_{AC}) + (p_{AB} + p_{BC}) + (p_{AC} + p_{BC}) = \frac{1}{4} + \frac{1}{3} + \frac{5}{12}$$
> >
> > $$2(p_{AB} + p_{AC} + p_{BC}) = \frac{3}{12} + \frac{4}{12} + \frac{5}{12} = \frac{12}{12} = 1$$
> >
> > $$p_{AB} + p_{AC} + p_{BC} = \frac{1}{2}$$
> >
> > **Langkah 4: Hitung Proporsi yang Tidak Memilih**
> >
> > Karena total proporsi harus $= 1$:
> >
> > $$p_0 = 1 - (p_{AB} + p_{AC} + p_{BC}) = 1 - \frac{1}{2} = \frac{1}{2}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menjumlahkan $P(A) + P(B) + P(C)$ dan menyimpulkan $p_0 = 0$**: memang $\frac{1}{4}+\frac{1}{3}+\frac{5}{12} = 1$, tetapi ini **tidak berarti** semua karyawan memilih. Karena setiap karyawan yang memilih dihitung **dua kali** (sekali di setiap asuransi yang dipilih), jumlah $P(A)+P(B)+P(C) = 2(p_{AB}+p_{AC}+p_{BC})$, bukan $p_{AB}+p_{AC}+p_{BC}$.
> > > - Mencoba menyelesaikan sistem 3 persamaan untuk mendapat $p_{AB}$, $p_{AC}$, $p_{BC}$ secara individual — tidak perlu! Kita hanya butuh jumlah totalnya, yang cukup didapat dari menjumlahkan ketiga persamaan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Proporsi karyawan yang memilih A" = $P(A) = p_{AB} + p_{AC}$, **bukan** $p_{AB} + p_{AC} + p_{BC}$ (yang mencakup semua yang memilih apapun).
> > > - Jangan mengira karyawan bisa memilih hanya 1 atau semua 3 — soal menyatakan "tepat dua atau tidak sama sekali".
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **"tepat $k$ dari $n$ opsi"** → setiap karyawan yang memilih dihitung di $k$ kategori → jumlah proporsi individual $= k \times$ (proporsi yang memilih).
> > > - Trik efisien: **jumlahkan semua persamaan** untuk mendapat $k \times \sum p_{\text{pasangan}}$, lalu bagi $k$. Di sini $k=2$, sehingga $P(A)+P(B)+P(C) = 2(p_{AB}+p_{AC}+p_{BC})$.

---

## **No. 12**

Suatu perusahaan transportasi memiliki bus yang dapat mengakomodasi 20 orang turis. Berdasarkan pengalaman, perusahaan menduga beberapa turis akan tidak datang, sehingga perusahaan tersebut menjual 21 tiket. Peluang turis tidak datang sebesar $0{,}02$ dan saling bebas dengan turis-turis lainnya. Setiap tiket dijual seharga 50 ribu dan tidak ada pengembalian uang jika turis tidak datang. Jika turis datang dan kursi tidak tersedia, maka perusahaan harus membayar kerugian sebesar 100 ribu (yaitu sebesar harga tiket dan penalti sebesar 50 ribu). Berapakah ekspektasi pendapatan yang diterima oleh operator? (Pilihlah jawaban yang paling mendekati!)

a. $935{.}000$  
b. $950{.}000$  
c. $967{.}000$  
d. $976{.}000$  
e. $985{.}000$

> [!summary]+ **Jawaban No. 12**
> 
> **(e). $985{.}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial:** $N \sim B(n, p_{\text{datang}})$ dengan $n=21$, $p_{\text{datang}} = 1 - 0{,}02 = 0{,}98$.
> >
> > $$P(N=k) = \binom{21}{k}(0{,}98)^k(0{,}02)^{21-k}$$
> >
> > **Ekspektasi dengan dua skenario:**
> >
> > $$E[\text{Pendapatan}] = R_1 \cdot P(\text{Skenario 1}) + R_2 \cdot P(\text{Skenario 2})$$
> >
>
> **Diketahui:**
> - 21 tiket dijual, kapasitas bus 20 kursi
> - $p(\text{tidak datang}) = 0{,}02$, $p(\text{datang}) = 0{,}98$, setiap turis independen
> - $N$ = banyaknya turis yang datang → $N \sim B(21, 0{,}98)$
> - Pendapatan per tiket: Rp50.000 (tidak dikembalikan meski tidak datang)
> - Penalti jika turis datang tapi tidak ada kursi: Rp100.000 per orang (tiket 50 ribu dikembalikan + penalti 50 ribu)
> - Target: $E[\text{Pendapatan bersih operator}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Skenario yang Mungkin**
> >
> > Dengan 21 tiket dan kapasitas 20:
> > - **Skenario A** ($N \leq 20$): setidaknya 1 turis tidak datang → semua turis yang datang mendapat kursi. Tidak ada penalti.
> > - **Skenario B** ($N = 21$): semua 21 turis datang → 1 orang tidak mendapat kursi → perusahaan bayar penalti Rp100.000.
> >
> > *Mengapa hanya dua skenario?* Karena $N$ bisa bernilai 0 sampai 21, tetapi kursi hanya tidak cukup jika $N > 20$, yaitu hanya jika $N = 21$.
> >
> > **Langkah 2: Hitung Pendapatan di Masing-Masing Skenario**
> >
> > Pendapatan kotor dari penjualan tiket (selalu): $21 \times 50.000 = \text{Rp}1.050.000$
> >
> > - **Skenario A** ($N \leq 20$): tidak ada penalti → Pendapatan = Rp$1.050.000$
> > - **Skenario B** ($N = 21$): penalti Rp$100.000$ untuk 1 orang → Pendapatan = Rp$1.050.000 - 100.000 = \text{Rp}950.000$
> >
> > **Langkah 3: Hitung Probabilitas Masing-Masing Skenario**
> >
> > $$P(N = 21) = \binom{21}{21}(0{,}98)^{21}(0{,}02)^0 = (0{,}98)^{21}$$
> >
> > Hitung $(0{,}98)^{21}$:
> >
> > $$\ln(0{,}98) \approx -0{,}02020 \implies 21 \times (-0{,}02020) = -0{,}4242$$
> >
> > $$(0{,}98)^{21} = e^{-0{,}4242} \approx 0{,}6543$$
> >
> > $$P(N \leq 20) = 1 - P(N=21) = 1 - 0{,}6543 = 0{,}3457$$
> >
> > **Langkah 4: Hitung Ekspektasi Pendapatan**
> >
> > $$E[\text{Pendapatan}] = 1.050.000 \times P(N \leq 20) + 950.000 \times P(N=21)$$
> >
> > $$= 1.050.000 \times 0{,}3457 + 950.000 \times 0{,}6543$$
> >
> > $$= 362.985 + 621.585 = 984.570 \approx \text{Rp}985.000$$
> >
> > **Alternatif penghitungan yang lebih ringkas:**
> >
> > $$E[\text{Pendapatan}] = 1.050.000 - 100.000 \times P(N=21)$$
> >
> > $$= 1.050.000 - 100.000 \times 0{,}6543 = 1.050.000 - 65.430 = 984.570 \approx \text{Rp}985.000$$
> >
> > **Hasil Akhir:** **(e)**. $985{.}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[\text{Pendapatan}] = 20 \times 50.000 = 1.000.000$ — ini mengabaikan bahwa **tiket yang tidak digunakan** (turis tidak datang) tetap menghasilkan pendapatan Rp50.000 karena tidak ada pengembalian uang.
> > > - Mengira lebih dari 1 orang bisa kelebihan kursi — dengan tepat 21 tiket dan kapasitas 20, maksimum kelebihan adalah $21 - 20 = 1$ orang (hanya terjadi jika $N=21$).
> > > - Salah menghitung $(0{,}98)^{21}$: gunakan logaritma natural atau kalkulator. Hasilnya $\approx 0{,}654$, **bukan** $\approx 0{,}98^2 = 0{,}96$ (keliru menggunakan pangkat kecil).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Penalti sebesar 100 ribu" adalah total yang dibayar perusahaan (bukan hanya penalti bersih) — ini mencakup pengembalian tiket Rp50.000 + penalti tambahan Rp50.000, totalnya Rp100.000.
> > > - "Pendapatan" di sini adalah pendapatan **bersih** operator: total penerimaan dari tiket dikurangi pengeluaran penalti.
> >
> > > [!CAUTION] Red Flags
> > > - **Masalah overbooking**: kapasitas $n$, tiket dijual $n+k$ → penalti hanya terjadi jika $N > n$. Di sini $n=20$, $k=1$, sehingga penalti hanya jika $N = 21$.
> > > - Rumus ringkas yang berguna: $E[\text{Pendapatan}] = \text{Pendapatan maks} - \text{Penalti} \times P(\text{kelebihan})$.
> > > - Selalu cek: apakah ada lebih dari satu skenario penalti? Di sini tidak, karena hanya bisa kelebihan 0 atau 1 orang.

---
## **No. 13**

Seorang peneliti kesehatan masyarakat meneliti rekam medis dari suatu grup yang terdiri dari 937 laki-laki yang meninggal di tahun 1997 dan menemukan fakta bahwa 210 diantaranya meninggal akibat penyakit jantung. Selain itu, 312 dari 937 laki-laki memiliki setidaknya satu orang tua (ayah atau ibu) yang juga meninggal karena penyakit jantung. Dari 312 orang ini, sebanyak 102 laki-laki meninggal karena penyakit jantung. Tentukanlah peluang seorang laki-laki yang diambil secara acak dari grup ini meninggal karena penyakit jantung, jika diketahui tidak ada satupun dari orangtuanya yang meninggal karena penyakit jantung! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}115$  
b. $0{,}173$  
c. $0{,}224$  
d. $0{,}327$  
e. $0{,}514$

> [!summary]+ **Jawaban No. 13**
> 
> **(b). $0{,}173$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas Bersyarat:**
> >
> > $$P(A \mid B^c) = \frac{P(A \cap B^c)}{P(B^c)}$$
> >
> > Di mana $P(A \cap B^c) = P(A) - P(A \cap B)$ dan $P(B^c) = 1 - P(B)$.
> >
> > **Pendekatan counting (frekuensi relatif):** Lebih mudah bekerja langsung dengan **jumlah orang** daripada probabilitas, karena semua data diberikan dalam bentuk frekuensi absolut.
>
> **Diketahui:**
> - Total laki-laki dalam grup: $937$
> - Meninggal karena penyakit jantung: $210$ orang
> - Definisikan kejadian:
>   - $J$ = meninggal karena penyakit jantung
>   - $B$ = setidaknya satu orang tua meninggal karena penyakit jantung → $|B| = 312$
>   - $B^c$ = tidak ada orang tua yang meninggal karena penyakit jantung → $|B^c| = 937 - 312 = 625$
> - Dari 312 orang di kelompok $B$: 102 meninggal karena jantung → $|J \cap B| = 102$
> - Target: $P(J \mid B^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun Tabel Frekuensi (Opsional tapi Sangat Membantu)**
> >
> > |  | Jantung ($J$) | Bukan Jantung ($J^c$) | **Total** |
> > |:-:|:-:|:-:|:-:|
> > | Orang tua punya riwayat ($B$) | $102$ | $312-102=210$ | $312$ |
> > | Orang tua tidak punya riwayat ($B^c$) | $?$ | $?$ | $625$ |
> > | **Total** | $210$ | $727$ | $937$ |
> >
> > **Langkah 2: Hitung $|J \cap B^c|$ — Jumlah yang Meninggal karena Jantung di Kelompok $B^c$**
> >
> > Total yang meninggal karena jantung: $210$.
> > Yang meninggal karena jantung dengan riwayat keluarga ($J \cap B$): $102$.
> > Maka yang meninggal karena jantung **tanpa** riwayat keluarga ($J \cap B^c$):
> >
> > $$|J \cap B^c| = 210 - 102 = 108$$
> >
> > **Langkah 3: Hitung $|B^c|$ — Ukuran Kelompok Kondisi**
> >
> > $$|B^c| = 937 - 312 = 625$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(J \mid B^c) = \frac{|J \cap B^c|}{|B^c|} = \frac{108}{625} = 0{,}1728 \approx 0{,}173$$
> >
> > **Tabel Lengkap setelah diisi:**
> >
> > |  | Jantung ($J$) | Bukan Jantung ($J^c$) | **Total** |
> > |:-:|:-:|:-:|:-:|
> > | Riwayat keluarga ($B$) | $102$ | $210$ | $312$ |
> > | Tidak ada riwayat ($B^c$) | $108$ | $517$ | $625$ |
> > | **Total** | $210$ | $727$ | $937$ |
> >
> > **Hasil Akhir:** **(b)**. $0{,}173$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $\dfrac{108}{937} \approx 0{,}115$ — ini adalah $P(J \cap B^c)$, probabilitas gabungan, **bukan** probabilitas bersyarat. Penyebut yang benar adalah $|B^c| = 625$, bukan total populasi $937$.
> > > - Mengira $P(J \mid B^c) = P(J) - P(J \mid B) = \dfrac{210}{937} - \dfrac{102}{312}$ — operasi ini tidak valid dalam probabilitas.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "**Tidak ada satupun** dari orangtuanya yang meninggal karena penyakit jantung" = komplemen dari "**setidaknya satu** orang tua meninggal karena jantung". Kelompok $B^c$ terdiri dari $937 - 312 = 625$ orang.
> > > - "Dari 312 orang ini, 102 meninggal karena jantung" → $|J \cap B| = 102$, bukan $|J \cap B^c| = 102$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan data **frekuensi absolut** (bukan probabilitas langsung) → gunakan **pendekatan counting**: hitung jumlah orang yang memenuhi kondisi, bagi dengan ukuran kelompok kondisi.
> > > - Jika ada kondisi "diketahui bahwa..." → **penyebut adalah ukuran kelompok kondisi** (di sini $|B^c| = 625$), bukan total populasi.

---

## **No. 14**

Suatu Perusahaan asuransi menerbitkan 1250 polis produk kesehatan mata. Banyaknya klaim yang diajukan oleh pemegang polis dari polis produk ini dalam setahun diketahui mengikuti distribusi Poisson dengan rataan 2. Asumsikan bahwa banyaknya klaim yang diajukan oleh setiap pemegang polis saling bebas antara satu sama lain. Berapakah peluang aproksimasi dari banyaknya klaim yang diajukan dalam satu tahun berada di antara 2450 dan 2600 klaim? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}68$  
b. $0{,}82$  
c. $0{,}87$  
d. $0{,}95$  
e. $1{,}00$

> [!summary]+ **Jawaban No. 14**
> 
> **(b). $0{,}82$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar (LLN)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Miller Bab 8 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Limit Pusat (CLT):** Untuk $X_1, X_2, \ldots, X_n$ i.i.d. dengan $E[X_i] = \mu$ dan $\text{Var}(X_i) = \sigma^2$, maka untuk $n$ besar:
> >
> > $$S = \sum_{i=1}^n X_i \overset{a}{\sim} N(n\mu,\, n\sigma^2)$$
> >
> > **Sifat Poisson:** Untuk $X \sim \text{Poisson}(\lambda)$: $E[X] = \lambda$ dan $\text{Var}(X) = \lambda$ (mean = variansi).
> >
> > **Standarisasi:**
> >
> > $$Z = \frac{S - n\mu}{\sqrt{n\sigma^2}} \overset{a}{\sim} N(0,1)$$
> >
>
> **Diketahui:**
> - $n = 1250$ polis, masing-masing $X_i \sim \text{Poisson}(\lambda = 2)$, saling bebas
> - $E[X_i] = \lambda = 2$, $\text{Var}(X_i) = \lambda = 2$
> - $S = \displaystyle\sum_{i=1}^{1250} X_i$ = total klaim dalam setahun
> - Target: $P(2450 \leq S \leq 2600)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Parameter Distribusi $S$**
> >
> > Karena $X_i$ saling bebas dan identik:
> >
> > $$E[S] = n \cdot E[X_i] = 1250 \times 2 = 2500$$
> >
> > $$\text{Var}(S) = n \cdot \text{Var}(X_i) = 1250 \times 2 = 2500$$
> >
> > $$\text{SD}(S) = \sqrt{2500} = 50$$
> >
> > Karena $n = 1250$ sangat besar, oleh CLT:
> >
> > $$S \overset{a}{\sim} N(2500, 2500)$$
> >
> > **Langkah 2: Standarisasi Batas-Batas Interval**
> >
> > $$P(2450 \leq S \leq 2600) \approx P\!\left(\frac{2450 - 2500}{50} \leq Z \leq \frac{2600 - 2500}{50}\right)$$
> >
> > $$= P\!\left(\frac{-50}{50} \leq Z \leq \frac{100}{50}\right) = P(-1 \leq Z \leq 2)$$
> >
> > **Langkah 3: Hitung Probabilitas dari Tabel Normal Standar**
> >
> > $$P(-1 \leq Z \leq 2) = \Phi(2) - \Phi(-1)$$
> >
> > Dari tabel:
> > - $\Phi(2) = 0{,}9772$
> > - $\Phi(-1) = 1 - \Phi(1) = 1 - 0{,}8413 = 0{,}1587$
> >
> > $$P(-1 \leq Z \leq 2) = 0{,}9772 - 0{,}1587 = 0{,}8185 \approx 0{,}82$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}82$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah menghitung variansi $S$**: menggunakan $\text{Var}(S) = n \cdot \lambda^2 = 1250 \times 4 = 5000$ → $\text{SD}(S) = \sqrt{5000} \approx 70{,}7$. Ini keliru karena untuk Poisson, **variansi = mean = $\lambda$**, bukan $\lambda^2$.
> > > - Salah menghitung batas bawah: $\dfrac{2450-2500}{50} = -1$ (benar), tetapi beberapa salah hitung menjadi $\dfrac{2450}{50} = 49$.
> > > - Lupa bahwa $\Phi(-z) = 1 - \Phi(z)$, sehingga $\Phi(-1) = 1 - 0{,}8413 = 0{,}1587$, **bukan** $-0{,}8413$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Berada di antara 2450 dan 2600" — standarisasi menggunakan **kedua** batas (bawah dan atas). Jangan hanya menghitung $P(S \leq 2600)$ atau $P(S \geq 2450)$ secara terpisah.
> > > - $n = 1250$ adalah jumlah **polis** (bukan klaim). Total klaim $S$ adalah jumlahan dari 1250 variabel acak.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi **Poisson**, selalu ingat: $E[X] = \text{Var}(X) = \lambda$. Ini berbeda dari distribusi Binomial di mana $\text{Var}(X) = np(1-p) \neq np = E[X]$.
> > > - Soal menyebut "peluang **aproksimasi**" → sinyal kuat untuk menggunakan CLT + normal standar.
> > > - Setelah standarisasi: cek apakah $z$-score masuk akal (biasanya antara $-3$ dan $3$ untuk rentang yang "wajar").

---

## **No. 15**

Suatu polis asuransi kumpulan memberikan proteksi kesehatan kepada para karyawan di suatu perusahaan mikro. Nilai klaim dalam setahun yang dinyatakan oleh $V$ didefinisikan sebagai $V = 100{.}000 \cdot Y$ dengan $Y$ merupakan variabel random dengan fungsi kepadatan peluang:

$$f(y) = \begin{cases} k(1 - y)^4, & \text{untuk } 0 < y < 1 \\ 0, & \text{selainnya} \end{cases}$$

dengan $k$ merupakan suatu konstanta. Berapakah peluang bersyarat dari $V$ melebihi 40.000, jika diketahui $V$ melebihi 10.000? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}08$  
b. $0{,}13$  
c. $0{,}17$  
d. $0{,}20$  
e. $0{,}51$

> [!summary]+ **Jawaban No. 15**
> 
> **(b). $0{,}13$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.2; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Normalisasi PDF:** $\displaystyle\int_{-\infty}^{\infty} f(y)\,dy = 1$ digunakan untuk menentukan konstanta $k$.
> >
> > **Probabilitas Bersyarat untuk variabel kontinu:**
> >
> > $$P(V > a \mid V > b) = \frac{P(V > a \cap V > b)}{P(V > b)}$$
> >
> > Jika $a > b$, maka $\{V > a\} \subset \{V > b\}$, sehingga $P(V > a \cap V > b) = P(V > a)$:
> >
> > $$P(V > a \mid V > b) = \frac{P(V > a)}{P(V > b)} \quad \text{untuk } a > b$$
> >
> > **Konversi $V$ ke $Y$:** $V = 100.000 \cdot Y$, sehingga $V > c \Leftrightarrow Y > \dfrac{c}{100.000}$.
>
> **Diketahui:**
> - $f(y) = k(1-y)^4$ untuk $0 < y < 1$
> - $V = 100.000 \cdot Y$
> - Konversi batas: $V > 40.000 \Leftrightarrow Y > 0{,}4$ dan $V > 10.000 \Leftrightarrow Y > 0{,}1$
> - Karena $0{,}4 > 0{,}1$: $P(V > 40.000 \mid V > 10.000) = \dfrac{P(Y > 0{,}4)}{P(Y > 0{,}1)}$
> - Target: nilai probabilitas bersyarat tersebut
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Konstanta $k$ dari Kondisi Normalisasi**
> >
> > $$\int_0^1 k(1-y)^4\,dy = 1$$
> >
> > Hitung integralnya dengan substitusi $u = 1-y$, $du = -dy$:
> >
> > $$\int_0^1 (1-y)^4\,dy = \int_1^0 u^4(-du) = \int_0^1 u^4\,du = \left[\frac{u^5}{5}\right]_0^1 = \frac{1}{5}$$
> >
> > Sehingga:
> >
> > $$k \cdot \frac{1}{5} = 1 \implies k = 5$$
> >
> > Jadi $f(y) = 5(1-y)^4$ untuk $0 < y < 1$.
> >
> > **Langkah 2: Hitung $P(Y > 0{,}4)$ — Pembilang**
> >
> > $$P(Y > 0{,}4) = \int_{0{,}4}^{1} 5(1-y)^4\,dy$$
> >
> > Gunakan anti-turunan: $\displaystyle\int 5(1-y)^4\,dy = -\frac{5(1-y)^5}{5} = -(1-y)^5$
> >
> > $$= \left[-(1-y)^5\right]_{0{,}4}^{1} = -(1-1)^5 - (-(1-0{,}4)^5) = 0 + (0{,}6)^5$$
> >
> > Hitung $(0{,}6)^5$:
> >
> > $$(0{,}6)^2 = 0{,}36;\quad (0{,}6)^4 = 0{,}1296;\quad (0{,}6)^5 = 0{,}6 \times 0{,}1296 = 0{,}07776$$
> >
> > $$P(Y > 0{,}4) = 0{,}07776$$
> >
> > **Langkah 3: Hitung $P(Y > 0{,}1)$ — Penyebut**
> >
> > $$P(Y > 0{,}1) = \left[-(1-y)^5\right]_{0{,}1}^{1} = 0 + (1-0{,}1)^5 = (0{,}9)^5$$
> >
> > Hitung $(0{,}9)^5$:
> >
> > $$(0{,}9)^2 = 0{,}81;\quad (0{,}9)^4 = 0{,}6561;\quad (0{,}9)^5 = 0{,}9 \times 0{,}6561 = 0{,}59049$$
> >
> > $$P(Y > 0{,}1) = 0{,}59049$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(V > 40.000 \mid V > 10.000) = \frac{P(Y > 0{,}4)}{P(Y > 0{,}1)} = \frac{0{,}07776}{0{,}59049} = 0{,}1317 \approx 0{,}13$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}13$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Lupa menentukan $k$**: menggunakan $f(y) = (1-y)^4$ dengan $k=1$. Ini menghasilkan $\int_0^1 (1-y)^4\,dy = 1/5 \neq 1$, artinya $f$ bukan PDF yang valid. Selalu tentukan $k$ terlebih dahulu.
> > > - **Salah mengidentifikasi pembilang**: menggunakan $P(10.000 < V \leq 40.000)$ sebagai pembilang. Karena $40.000 > 10.000$, berlaku $\{V > 40.000\} \subset \{V > 10.000\}$, sehingga pembilang adalah $P(V > 40.000)$, bukan $P(10.000 < V \leq 40.000)$.
> > > - Salah menghitung anti-turunan: $\int 5(1-y)^4\,dy = -(1-y)^5 + C$. Pastikan tanda negatif diperhatikan (dari chain rule: turunan $(1-y)^5$ adalah $-5(1-y)^4$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "V **melebihi** 40.000" = $V > 40.000$ (strict inequality). Untuk variabel kontinu, $P(V = 40.000) = 0$ sehingga $P(V > 40.000) = P(V \geq 40.000)$ — tidak ada perbedaan numerik.
> > > - Konversi yang benar: $V = 100.000 \cdot Y$, sehingga $V > 40.000 \Leftrightarrow 100.000 Y > 40.000 \Leftrightarrow Y > 0{,}4$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF memuat **konstanta $k$ yang tidak diketahui** → **selalu tentukan $k$ dulu** sebelum menghitung probabilitas apapun.
> > > - Pola $P(V > a \mid V > b)$ dengan $a > b$ → sederhanakan langsung menjadi $\dfrac{P(V > a)}{P(V > b)}$ (karena irisan $= P(V > a)$).
> > > - Bentuk $f(y) = k(1-y)^n$ pada $[0,1]$ → ini distribusi **Beta(1, n+1)** dengan $k = n+1$. Di sini $n=4$, sehingga $k=5$. Berguna sebagai pengecekan cepat.

---

## **No. 16**

Seorang dokter melakukan studi mengenai hubungan antara tekanan darah dan ketidaknormalan detak jantung pada para pasiennya. Ia melakukan pengujian secara acak kepada para pasiennya dan mencatat tekanan darah mereka (tinggi, rendah, atau normal) dan detak jantungnya (normal atau tidak normal). Berdasarkan hasil riset yang ia lakukan, didapatkan informasi sebagai berikut:

(i) $14\%$ memiliki tekanan darah tinggi  
(ii) $22\%$ memiliki tekanan darah rendah  
(iii) $15\%$ memiliki detak jantung tidak normal  
(iv) Bagi mereka yang memiliki detak jantung tidak normal, sepertiganya memiliki tekanan darah tinggi  
(v) Bagi mereka yang memiliki tekanan darah normal, seperdelapannya memiliki detak jantung tidak normal  

Berapakah porsi dari pasien yang terpilih dalam pengujian memiliki detak jantung normal dan tekanan darah rendah?

a. $2\%$  
b. $5\%$  
c. $8\%$  
d. $9\%$  
e. $20\%$

> [!summary]+ **Jawaban No. 16**
> 
> **(e). $20\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Definisi Probabilitas Bersyarat** (digunakan untuk menghitung probabilitas gabungan):
> >
> > $$P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$$
> >
> > **Hukum Probabilitas Total** (untuk partisi $\{T_1, T_2, T_3\}$ dari ruang sampel):
> >
> > $$P(D') = P(T_1 \cap D') + P(T_2 \cap D') + P(T_3 \cap D')$$
> >
> > **Komplemen:**
> >
> > $$P(T_{\text{rendah}} \cap D) = P(T_{\text{rendah}}) - P(T_{\text{rendah}} \cap D')$$
> >
>
> **Diketahui:**
> - Definisikan kejadian:
>   - $T_t$ = tekanan darah tinggi, $T_r$ = tekanan darah rendah, $T_n$ = tekanan darah normal
>   - $D$ = detak jantung **normal**, $D'$ = detak jantung **tidak normal**
> - Dari kondisi soal:
>   - (i) $P(T_t) = 0{,}14$
>   - (ii) $P(T_r) = 0{,}22$
>   - (iii) $P(D') = 0{,}15$, sehingga $P(D) = 0{,}85$
>   - (iv) $P(T_t \mid D') = \dfrac{1}{3}$
>   - (v) $P(D' \mid T_n) = \dfrac{1}{8}$
> - $P(T_n) = 1 - P(T_t) - P(T_r) = 1 - 0{,}14 - 0{,}22 = 0{,}64$
> - Target: $P(T_r \cap D)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Strategi:** Kita akan mengisi sel-sel "tabel 3×2" secara sistematis (3 kategori tekanan darah × 2 kategori detak jantung).
> >
> > **Langkah 1: Hitung $P(T_t \cap D')$ dari Kondisi (iv)**
> >
> > Dari definisi probabilitas bersyarat: $P(T_t \cap D') = P(D') \cdot P(T_t \mid D')$
> >
> > $$P(T_t \cap D') = 0{,}15 \times \frac{1}{3} = 0{,}05$$
> >
> > **Langkah 2: Hitung $P(T_n \cap D')$ dari Kondisi (v)**
> >
> > Dari definisi probabilitas bersyarat: $P(T_n \cap D') = P(T_n) \cdot P(D' \mid T_n)$
> >
> > $$P(T_n \cap D') = 0{,}64 \times \frac{1}{8} = 0{,}08$$
> >
> > **Langkah 3: Hitung $P(T_r \cap D')$ dari Hukum Probabilitas Total**
> >
> > Tekanan darah $\{T_t, T_r, T_n\}$ adalah **partisi** dari ruang sampel, sehingga:
> >
> > $$P(D') = P(T_t \cap D') + P(T_r \cap D') + P(T_n \cap D')$$
> >
> > $$0{,}15 = 0{,}05 + P(T_r \cap D') + 0{,}08$$
> >
> > $$P(T_r \cap D') = 0{,}15 - 0{,}05 - 0{,}08 = 0{,}02$$
> >
> > **Langkah 4: Hitung $P(T_r \cap D)$ — Target**
> >
> > Karena $\{D, D'\}$ adalah partisi:
> >
> > $$P(T_r) = P(T_r \cap D) + P(T_r \cap D')$$
> >
> > $$0{,}22 = P(T_r \cap D) + 0{,}02$$
> >
> > $$P(T_r \cap D) = 0{,}22 - 0{,}02 = 0{,}20$$
> >
> > **Tabel Lengkap (sebagai verifikasi):**
> >
> > | | Detak Normal ($D$) | Detak Tidak Normal ($D'$) | **Total** |
> > |:-:|:-:|:-:|:-:|
> > | Tekanan Tinggi ($T_t$) | $0{,}09$ | $0{,}05$ | $0{,}14$ |
> > | Tekanan Rendah ($T_r$) | $\mathbf{0{,}20}$ | $0{,}02$ | $0{,}22$ |
> > | Tekanan Normal ($T_n$) | $0{,}56$ | $0{,}08$ | $0{,}64$ |
> > | **Total** | $0{,}85$ | $0{,}15$ | $1{,}00$ |
> >
> > **Hasil Akhir:** **(e)**. $20\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menjawab $P(T_r \cap D') = 0{,}02$** (opsi a) — ini adalah irisan tekanan rendah dengan detak **tidak** normal, bukan detak normal. Soal meminta detak **normal**.
> > > - Salah mengidentifikasi kondisi (iv) dan (v): kondisi (iv) adalah $P(T_t \mid D') = 1/3$ (tekanan tinggi **diketahui** detak tidak normal), **bukan** $P(D' \mid T_t) = 1/3$. Arah kondisi harus benar sebelum menggunakan rumus perkalian.
> > > - Mengira $P(T_t \cap D')$ bisa dihitung sebagai $P(T_t) \times P(D') = 0{,}14 \times 0{,}15 = 0{,}021$ — ini hanya valid jika $T_t$ dan $D'$ **independen**, yang belum tentu benar.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Kondisi (v): "bagi mereka yang memiliki **tekanan darah normal**, seperdelapannya memiliki detak jantung tidak normal" = $P(D' \mid T_n) = 1/8$, **bukan** $P(T_n \mid D') = 1/8$.
> > > - Target soal adalah $P(T_r \cap D)$ = detak **normal** DAN tekanan **rendah** — perhatikan kedua kondisi ini harus dipenuhi sekaligus.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan **multiple kondisi bersyarat** dan beberapa kategori → **susun tabel 2D** terlebih dahulu, isi sel yang bisa dihitung langsung, lalu gunakan sifat baris/kolom menjumlahkan ke total marginal untuk mencari sel yang belum diketahui.
> > > - Hukum probabilitas total: $P(D') = \sum_i P(T_i \cap D')$ — ini adalah kunci Langkah 3 yang menghubungkan informasi kondisi (iv) dan (v) untuk menemukan $P(T_r \cap D')$.

---

## **No. 17**

Misal $X$ dan $Y$ merupakan profit bulanan Perusahaan I dan II, secara berurutan. Profit bulanan dari Perusahaan I dapat dimodelkan dengan menggunakan variabel acak kontinu dengan fungsi kepekatan $f_X(x)$. Perusahaan II memiliki profit bulanan senilai dua kali Perusahaan I. Tentukan fungsi kepekatan peluang dari profit bulanan Perusahaan II!

a. $\dfrac{1}{2} f_X\!\left(\dfrac{y}{2}\right)$  
b. $f_X\!\left(\dfrac{y}{2}\right)$  
c. $2 f_X\!\left(\dfrac{y}{2}\right)$  
d. $2 f_X(y)$  
e. $2 f_X(2y)$

> [!summary]+ **Jawaban No. 17**
> 
> **(a). $\dfrac{1}{2} f_X\!\left(\dfrac{y}{2}\right)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.7; Miller Bab 4.4 |
>
> > [!info]+ **Rumus**
> >
> > **Teknik CDF untuk Transformasi Monoton Meningkat ($Y = g(X)$):**
> >
> > Langkah:
> > 1. Nyatakan $F_Y(y) = P(Y \leq y) = P(g(X) \leq y)$ dalam bentuk $F_X$
> > 2. Turunkan: $f_Y(y) = \dfrac{d}{dy} F_Y(y)$
> >
> > **Ekuivalen — Rumus Jacobian (Change of Variable):**
> >
> > $$f_Y(y) = f_X\!\left(g^{-1}(y)\right) \cdot \left|\frac{d}{dy}g^{-1}(y)\right|$$
> >
> > di mana $g^{-1}(y)$ adalah invers dari transformasi $y = g(x)$.
>
> **Diketahui:**
> - $Y = 2X$ (profit Perusahaan II = dua kali profit Perusahaan I)
> - $f_X(x)$ diketahui (bentuk umum, tidak dispesifikasi)
> - Target: $f_Y(y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Metode 1: Teknik CDF (Lebih Fundamental, Direkomendasikan untuk Pemahaman)**
> >
> > **Langkah 1: Nyatakan CDF $Y$ dalam CDF $X$**
> >
> > $$F_Y(y) = P(Y \leq y) = P(2X \leq y) = P\!\left(X \leq \frac{y}{2}\right) = F_X\!\left(\frac{y}{2}\right)$$
> >
> > (Tanda pertidaksamaan tidak berubah karena membagi kedua sisi dengan $2 > 0$.)
> >
> > **Langkah 2: Turunkan untuk Mendapat PDF $Y$**
> >
> > $$f_Y(y) = \frac{d}{dy} F_Y(y) = \frac{d}{dy} F_X\!\left(\frac{y}{2}\right)$$
> >
> > Gunakan chain rule: $\dfrac{d}{dy} F_X\!\left(\dfrac{y}{2}\right) = f_X\!\left(\dfrac{y}{2}\right) \cdot \dfrac{d}{dy}\left(\dfrac{y}{2}\right) = f_X\!\left(\dfrac{y}{2}\right) \cdot \dfrac{1}{2}$
> >
> > $$f_Y(y) = \frac{1}{2} f_X\!\left(\frac{y}{2}\right)$$
> >
> > **Metode 2: Rumus Jacobian (Lebih Cepat)**
> >
> > Transformasi: $y = g(x) = 2x$. Invers: $x = g^{-1}(y) = y/2$.
> >
> > Jacobian: $\left|\dfrac{d}{dy}\left(\dfrac{y}{2}\right)\right| = \dfrac{1}{2}$
> >
> > Substitusi ke rumus:
> >
> > $$f_Y(y) = f_X\!\left(\frac{y}{2}\right) \cdot \frac{1}{2} = \frac{1}{2} f_X\!\left(\frac{y}{2}\right)$$
> >
> > **Verifikasi Normalisasi (sanity check):**
> >
> > $$\int_{-\infty}^{\infty} \frac{1}{2} f_X\!\left(\frac{y}{2}\right) dy$$
> >
> > Substitusi $u = y/2$, $du = dy/2$, sehingga $dy = 2\,du$:
> >
> > $$= \int_{-\infty}^{\infty} \frac{1}{2} f_X(u) \cdot 2\,du = \int_{-\infty}^{\infty} f_X(u)\,du = 1 \checkmark$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{2} f_X\!\left(\dfrac{y}{2}\right)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menulis $f_Y(y) = f_X(y/2)$** tanpa faktor $1/2$ (opsi b) — ini melanggar normalisasi: $\int f_X(y/2)\,dy = 2 \neq 1$. Faktor Jacobian **wajib** ada untuk menjaga total probabilitas tetap 1.
> > > - **Mengira Jacobian adalah $|dy/dx| = 2$** (turunan $Y$ terhadap $X$) — Jacobian yang digunakan dalam rumus transformasi PDF adalah $|dx/dy| = 1/2$ (turunan invers), **bukan** $|dy/dx|$.
> > > - Memilih opsi (c) $2f_X(y/2)$ — ini mengalikan dengan $|dy/dx| = 2$ (keliru) alih-alih $|dx/dy| = 1/2$.
> > > - Memilih opsi (e) $2f_X(2y)$ — ini menggunakan argumen $2y$ (bukan $y/2$) dan faktor 2, keduanya keliru.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Profit dua kali lipat" berarti $Y = 2X$, **bukan** $X = 2Y$. Arah yang benar: Perusahaan II = 2 × Perusahaan I.
> >
> > > [!CAUTION] Red Flags
> > > - **Formula umum untuk $Y = aX + b$** (transformasi linear, $a \neq 0$):
> > >
> > >   $$f_Y(y) = \frac{1}{|a|} f_X\!\left(\frac{y-b}{a}\right)$$
> > >
> > >   Untuk $Y = 2X$ (yaitu $a=2$, $b=0$): $f_Y(y) = \dfrac{1}{2} f_X\!\left(\dfrac{y}{2}\right)$ ✓
> > > - Jika $a > 1$ (memperlebar distribusi), faktor depan $1/|a| < 1$ → PDF "menjadi lebih rendah tapi lebih lebar". Ini masuk akal secara intuitif.
> > > - Selalu verifikasi: hasilnya harus terintegrasi ke 1 atas seluruh support.

---

## **No. 18**

Masa hidup dari suatu mesin pencetak seharga 200 juta diketahui mengikuti distribusi eksponensial dengan rataan 2 tahun. Pabrik dari mesin pencetak setuju untuk memberikan pengembalian dana penuh kepada pembeli jika mesin pencetak mengalami kerusakan dalam kurun waktu satu tahun sejak pembelian dan pengembalian dana sebagian jika kerusakan terjadi di tahun kedua. Jika pabrik mencetak 100 mesin pencetak, berapakah nilai ekspektasi pengembalian dana yang dibayarkan? (Pilihlah jawaban yang paling mendekati!)

a. $6{.}321$ juta  
b. $7{.}358$ juta  
c. $7{.}869$ juta  
d. $10{.}256$ juta  
e. $12{.}642$ juta

> [!summary]+ **Jawaban No. 18**
> 
> **(d). $10{.}256$ juta**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | SOA Exam P Sample Q No. 35; Hogg-Tanis-Zimm Bab 3.3; Miller Bab 5.4 |
>
> > [!info]+ **Rumus**
> >
> > CDF distribusi Eksponensial (parametrisasi skala $\theta = 1/\lambda$):
> >
> > $$F(t) = 1 - e^{-t/\theta}, \quad t > 0$$
> >
> > Probabilitas gagal di interval $(a, b]$:
> >
> > $$P(a < T \leq b) = F(b) - F(a) = e^{-a/\theta} - e^{-b/\theta}$$
> >
> > Ekspektasi dana pengembalian untuk **satu** mesin:
> >
> > $$E[R] = \sum_{\text{skenario}} (\text{besar refund}) \times P(\text{skenario})$$
> >
>
> **Diketahui:**
> - $T \sim \text{Exp}(\theta = 2)$ (rata-rata masa hidup = 2 tahun)
> - Harga mesin: 200 juta
> - Kebijakan refund:
>   - Rusak di tahun ke-1 (i.e., $T \leq 1$): refund **penuh** = 200 juta
>   - Rusak di tahun ke-2 (i.e., $1 < T \leq 2$): refund **setengah** = 100 juta
>   - Rusak setelah tahun ke-2 ($T > 2$): refund **nol** = 0
> - Jumlah mesin: 100 unit
> - Target: $E[\text{Total Refund}] = 100 \times E[R]$, di mana $R$ adalah refund untuk satu mesin
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Tiap Skenario**
> >
> > Karena $T \sim \text{Exp}(\theta = 2)$, maka $F(t) = 1 - e^{-t/2}$.
> >
> > **Skenario 1** — Rusak di tahun ke-1, $P(T \leq 1)$:
> >
> > $$P(T \leq 1) = 1 - e^{-1/2} = 1 - e^{-0{,}5}$$
> >
> > **Skenario 2** — Rusak di tahun ke-2, $P(1 < T \leq 2)$:
> >
> > $$P(1 < T \leq 2) = F(2) - F(1) = e^{-1/2} - e^{-1} = e^{-0{,}5} - e^{-1}$$
> >
> > **Skenario 3** — Bertahan lebih dari 2 tahun, $P(T > 2)$:
> >
> > $$P(T > 2) = e^{-1} \quad \text{(tidak perlu dihitung, refundnya 0)}$$
> >
> > **Langkah 2: Hitung Ekspektasi Refund untuk Satu Mesin**
> >
> > Refund $R$ adalah variabel acak diskrit dengan tiga nilai kemungkinan:
> >
> > $$E[R] = 200 \cdot P(T \leq 1) + 100 \cdot P(1 < T \leq 2) + 0 \cdot P(T > 2)$$
> >
> > Substitusi:
> >
> > $$E[R] = 200\,(1 - e^{-0{,}5}) + 100\,(e^{-0{,}5} - e^{-1})$$
> >
> > **Langkah 3: Sederhanakan Secara Aljabar**
> >
> > Distribusikan konstanta:
> >
> > $$E[R] = 200 - 200e^{-0{,}5} + 100e^{-0{,}5} - 100e^{-1}$$
> >
> > $$E[R] = 200 - 100e^{-0{,}5} - 100e^{-1}$$
> >
> > $$E[R] = 200 - 100\left(e^{-0{,}5} + e^{-1}\right)$$
> >
> > **Langkah 4: Hitung Numerik**
> >
> > Nilai numerik eksak:
> >
> > $$e^{-0{,}5} \approx 0{,}60653, \qquad e^{-1} \approx 0{,}36788$$
> >
> > $$e^{-0{,}5} + e^{-1} \approx 0{,}60653 + 0{,}36788 = 0{,}97441$$
> >
> > $$E[R] = 200 - 100 \times 0{,}97441 = 200 - 97{,}441 = 102{,}559 \text{ juta}$$
> >
> > Tunggu — satuan perlu dicek. Karena harga mesin adalah 200 juta, seluruh perhitungan sudah dalam satuan **juta rupiah**. Jadi $E[R] \approx 102{,}559$ juta untuk **satu mesin**.
> >
> > > [!warning] Perhatikan satuan refund
> > > Soal menyebut harga 200 juta dan meminta jawaban dalam satuan juta. Pastikan angka 200 dan 100 di atas diperlakukan sebagai satuan juta.
> >
> > **Langkah 5: Kalikan dengan 100 Mesin**
> >
> > $$E[\text{Total Refund}] = 100 \times E[R] = 100 \times 102{,}559 \approx 10{.}256 \text{ juta}$$
> >
> > **Verifikasi cepat:** Jawaban ini masuk akal secara intuitif — rata-rata masa hidup hanya 2 tahun, sehingga banyak mesin yang rusak di 2 tahun pertama. Total refund $\approx$ 10.256 juta dari potensi maksimum $100 \times 200 = 20{.}000$ juta (jika semua rusak di tahun pertama) adalah sekitar 51%, yang wajar mengingat distribusi eksponensial memiliki probabilitas tinggi untuk kejadian awal.
> >
> > **Hasil Akhir:** **(d)**. $10{.}256$ juta
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah menentukan refund tahun ke-2.** Soal bilang "pengembalian sebagian" — tanpa menyebut angkanya secara eksplisit. Ini adalah jebakan klasik: kita harus *mengasumsikan* bahwa "sebagian" = setengah (½ × 200 = 100 juta). Soal ini memang identik dengan SOA Sample Q No. 35 di mana refund tahun ke-2 secara eksplisit adalah $\frac{1}{2}$ dari harga. Jika soal tidak menyebutkan secara eksplisit, baca ulang soal atau cek dari opsi jawaban mana yang cocok.
> > > - **Lupa bahwa $E[R]$ adalah ekspektasi untuk SATU mesin**, lalu lupa dikalikan 100. Ini akan menghasilkan jawaban sekitar 102,56 juta (tidak ada di opsi), bukan 10.256 juta.
> > > - **Salah parametrisasi Eksponensial.** Rataan = 2 tahun berarti $\theta = 2$ (parameter skala) atau $\lambda = 1/2$ (parameter laju). Gunakan $e^{-t/2}$, bukan $e^{-2t}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **"Rusak dalam kurun waktu satu tahun"** = $T \leq 1$, bukan $T < 1$ (untuk distribusi kontinu keduanya sama, tapi penting untuk dipahami batasnya).
> > > - **"Rusak di tahun kedua"** = $1 < T \leq 2$ (bukan $T = 2$ atau $T > 1$ tanpa batas atas). Batas atas adalah $T = 2$; setelah itu tidak ada refund.
> > > - **"100 mesin"** adalah pengali akhir, bukan parameter distribusi. Jangan memasukkan angka 100 ke dalam perhitungan probabilitas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "rataan/mean = $m$" untuk distribusi Eksponensial → parameter skala $\theta = m$, gunakan $e^{-t/m}$ untuk survival function, **bukan** $e^{-mt}$.
> > > - Jika soal menyebut kebijakan refund berjenjang (full/partial/none) → ini adalah ekspektasi variabel acak diskrit yang nilainya bergantung pada interval waktu. Buat tabel skenario terlebih dahulu.
> > > - Jika hasil perhitungan satu unit tidak ada di opsi, kemungkinan besar kamu belum mengalikan dengan jumlah unit (100 mesin).

---

## **No. 19**

$(X_1, X_2, X_3)$ merupakan vektor acak dengan distribusi multivariat dengan nilai harapan $(0,0,0)$ dan matriks varians kovarians sebagai berikut:

$$\boldsymbol{\Sigma} = \begin{bmatrix} 4{,}0 & 1{,}5 & 1{,}0 \\ 1{,}5 & 1{,}0 & 0{,}5 \\ 1{,}0 & 0{,}5 & 1{,}0 \end{bmatrix}$$

Jika random variabel $W$ didefinisikan menggunakan formula $X_1 = aX_2 + bX_3 + W$ dan $W$ tidak berkorelasi dengan variabel $X_2$ dan $X_3$, maka koefisien $a$ bernilai:

a. $1$  
b. $\dfrac{4}{3}$  
c. $\dfrac{5}{3}$  
d. $2$  
e. $\dfrac{7}{3}$

> [!summary]+ **Jawaban No. 19**
> 
> **(b). $\dfrac{4}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | [ADVANCED] |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[3.6 Matriks Variansi-Kovariansi]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 4.4 |
>
> > [!info]+ **Rumus**
> >
> > **Sifat Linearitas Kovarians:** Untuk konstanta $a, b$ dan variabel acak $W, X_2, X_3$:
> >
> > $$\text{Cov}(aU + bV + W,\, X_j) = a\,\text{Cov}(U, X_j) + b\,\text{Cov}(V, X_j) + \text{Cov}(W, X_j)$$
> >
> > **Notasi Matriks Kovarians:** $\sigma_{ij} = \text{Cov}(X_i, X_j)$, dengan elemen diagonal $\sigma_{ii} = \text{Var}(X_i)$.
>
> **Diketahui:**
> - $\boldsymbol{\Sigma}$: $\sigma_{12} = 1{,}5$, $\sigma_{13} = 1{,}0$, $\sigma_{22} = 1{,}0$, $\sigma_{23} = 0{,}5$, $\sigma_{33} = 1{,}0$
> - $W = X_1 - aX_2 - bX_3$ (dari definisi $X_1 = aX_2 + bX_3 + W$)
> - $\text{Cov}(W, X_2) = 0$ dan $\text{Cov}(W, X_3) = 0$
> - Target: nilai $a$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Jabarkan Kondisi $\text{Cov}(W, X_2) = 0$**
> >
> > Substitusi $W = X_1 - aX_2 - bX_3$:
> >
> > $$\text{Cov}(X_1 - aX_2 - bX_3,\; X_2) = 0$$
> >
> > Gunakan linearitas kovarians:
> >
> > $$\text{Cov}(X_1, X_2) - a\,\text{Cov}(X_2, X_2) - b\,\text{Cov}(X_3, X_2) = 0$$
> >
> > $$\sigma_{12} - a\,\sigma_{22} - b\,\sigma_{32} = 0$$
> >
> > $$1{,}5 - a(1{,}0) - b(0{,}5) = 0$$
> >
> > $$a + 0{,}5b = 1{,}5 \tag{1}$$
> >
> > **Langkah 2: Jabarkan Kondisi $\text{Cov}(W, X_3) = 0$**
> >
> > $$\text{Cov}(X_1 - aX_2 - bX_3,\; X_3) = 0$$
> >
> > $$\sigma_{13} - a\,\sigma_{23} - b\,\sigma_{33} = 0$$
> >
> > $$1{,}0 - a(0{,}5) - b(1{,}0) = 0$$
> >
> > $$0{,}5a + b = 1{,}0 \tag{2}$$
> >
> > **Langkah 3: Selesaikan Sistem Persamaan Linear**
> >
> > Dari persamaan (2): $b = 1{,}0 - 0{,}5a$. Substitusi ke persamaan (1):
> >
> > $$a + 0{,}5(1{,}0 - 0{,}5a) = 1{,}5$$
> >
> > $$a + 0{,}5 - 0{,}25a = 1{,}5$$
> >
> > $$0{,}75a = 1{,}0$$
> >
> > $$a = \frac{1{,}0}{0{,}75} = \frac{4}{3}$$
> >
> > Sebagai pelengkap: $b = 1{,}0 - 0{,}5 \times \dfrac{4}{3} = 1{,}0 - \dfrac{2}{3} = \dfrac{1}{3}$.
> >
> > **Hasil Akhir:** **(b)**. $a = \dfrac{4}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "tidak berkorelasi" berarti $W$ dan $X_j$ independen — padahal tidak berkorelasi hanya berarti $\text{Cov}(W, X_j) = 0$. Independensi adalah kondisi yang lebih kuat.
> > > - Salah membaca matriks $\boldsymbol{\Sigma}$: ingat $\sigma_{ij}$ adalah elemen baris $i$, kolom $j$. Matriks ini simetris, sehingga $\sigma_{23} = \sigma_{32} = 0{,}5$.
> > > - Mencoba menghitung $\text{Var}(W)$ terlebih dahulu — tidak perlu untuk mencari $a$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $X_1 = aX_2 + bX_3 + W$ berarti $W = X_1 - aX_2 - bX_3$. Ini adalah **regresi linear** $X_1$ pada $X_2$ dan $X_3$, dan kondisi ortogonalitas $\text{Cov}(W, X_j)=0$ adalah syarat persamaan normal (*normal equations*) dalam regresi.
> >
> > > [!CAUTION] Red Flags
> > > - Soal menyebut "$W$ tidak berkorelasi dengan $X_j$" → tulis $\text{Cov}(W, X_j) = 0$ untuk setiap $j$, lalu bentuk sistem persamaan linear dari elemen-elemen $\boldsymbol{\Sigma}$.
> > > - Sistem persamaan (1) dan (2) adalah $2 \times 2$ — selalu cukup untuk mencari dua koefisien $a$ dan $b$.

---

## **No. 20**

Anda diberikan X dan Y yang keduanya mengikuti distribusi seragam $[0,1]$ dan saling bebas. Diberikan $U = X + Y$ dan $V = \dfrac{X}{X+Y}$. Tentukan fungsi peluang bersama dari $(U, V)$ yang dievaluasi pada $\left(\dfrac{1}{2}, \dfrac{1}{2}\right)$!

a. $0$  
b. $\dfrac{1}{4}$  
c. $\dfrac{1}{3}$  
d. $\dfrac{1}{2}$  
e. $1$

> [!summary]+ **Jawaban No. 20**
> 
> **(d). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.6; Hogg-Tanis-Zimm Bab 5.6 |
>
> > [!info]+ **Rumus**
> >
> > **Teknik Jacobian untuk transformasi bivariat:** Jika $(X,Y) \mapsto (U,V)$ adalah transformasi satu-satu dengan invers $(X,Y) = (h_1(U,V),\, h_2(U,V))$, maka:
> >
> > $$f_{U,V}(u,v) = f_{X,Y}(h_1(u,v),\, h_2(u,v)) \cdot |J|$$
> >
> > dengan Jacobian invers:
> >
> > $$J = \det\begin{pmatrix} \partial x/\partial u & \partial x/\partial v \\ \partial y/\partial u & \partial y/\partial v \end{pmatrix}$$
> >
>
> **Diketahui:**
> - $X, Y \sim U[0,1]$ independen, sehingga $f_{X,Y}(x,y) = 1$ untuk $0 \leq x, y \leq 1$
> - Transformasi maju: $U = X + Y$, $V = \dfrac{X}{X+Y}$
> - Target: $f_{U,V}\!\left(\tfrac{1}{2}, \tfrac{1}{2}\right)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari Transformasi Invers $(U,V) \to (X,Y)$**
> >
> > Dari definisi $U = X+Y$ dan $V = X/(X+Y)$:
> >
> > $$X = UV \quad \text{dan} \quad Y = U - X = U - UV = U(1-V)$$
> >
> > Jadi: $x = uv$ dan $y = u(1-v)$.
> >
> > **Langkah 2: Hitung Jacobian Invers**
> >
> > $$J = \det\begin{pmatrix} \partial x/\partial u & \partial x/\partial v \\ \partial y/\partial u & \partial y/\partial v \end{pmatrix} = \det\begin{pmatrix} v & u \\ 1-v & -u \end{pmatrix}$$
> >
> > $$= v \cdot (-u) - u \cdot (1-v) = -uv - u + uv = -u$$
> >
> > $$|J| = |-u| = u$$
> >
> > **Langkah 3: Tentukan Support $(U,V)$**
> >
> > Dari $x = uv \geq 0$ dan $y = u(1-v) \geq 0$ dengan $x \leq 1$ dan $y \leq 1$:
> > - $u \geq 0$, $0 \leq v \leq 1$
> > - $x + y = u \leq 2$ (karena $x \leq 1$ dan $y \leq 1$)
> > - Lebih tepatnya: $0 < u \leq 2$ dan $0 < v < 1$, dengan syarat $uv \leq 1$ dan $u(1-v) \leq 1$
> >
> > **Langkah 4: Tulis PDF Bersama $(U,V)$**
> >
> > $$f_{U,V}(u,v) = f_{X,Y}(uv,\, u(1-v)) \cdot |J| = 1 \cdot u = u$$
> >
> > (berlaku pada support yang valid)
> >
> > **Langkah 5: Evaluasi di $(u,v) = (1/2, 1/2)$ dan Verifikasi Support**
> >
> > Cek apakah titik $(1/2, 1/2)$ berada di support:
> > - $x = uv = \tfrac{1}{2} \times \tfrac{1}{2} = \tfrac{1}{4} \in [0,1]$ ✓
> > - $y = u(1-v) = \tfrac{1}{2} \times \tfrac{1}{2} = \tfrac{1}{4} \in [0,1]$ ✓
> >
> > Evaluasi:
> >
> > $$f_{U,V}\!\left(\tfrac{1}{2}, \tfrac{1}{2}\right) = u = \frac{1}{2}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengalikan dengan $|J|$ — ini adalah kesalahan paling umum dalam soal transformasi bivariat. Tanpa Jacobian, jawabannya keliru menjadi $f_{U,V} = 1$.
> > > - Salah menghitung determinan matriks $2 \times 2$: ingat $\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$.
> > > - Menggunakan Jacobian **maju** $(x,y) \to (u,v)$ alih-alih Jacobian **invers** $(u,v) \to (x,y)$. Rumus Jacobian dalam transformasi PDF selalu menggunakan Jacobian invers.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Lupa memverifikasi bahwa titik evaluasi berada di dalam support sebelum menghitung. Jika titik di luar support, PDF-nya $= 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Transformasi bivariat → ikuti prosedur 4 langkah: **(1)** cari invers, **(2)** hitung Jacobian invers, **(3)** tentukan support baru, **(4)** tulis PDF dan evaluasi.
> > > - Jika $f_{X,Y}(x,y) = 1$ (seragam), maka $f_{U,V}(u,v) = |J|$ langsung — sesederhana itu.

---

## **No. 21**

Suatu perusahaan menentukan harga dari asuransi gempa bumi dengan menggunakan asumsi-asumsi sebagai berikut:

i. Di setiap tahun kalender, terdapat hanya satu kali gempa bumi  
ii. Di setiap tahun kalender, peluang terjadinya gempa bumi sebesar $0{,}05$  
iii. Banyaknya gempa bumi yang terjadi di setiap tahun kalender saling bebas  

Dengan menggunakan asumsi di atas, tentukan peluang terjadi kurang dari 3 gempa bumi dalam 20 tahun. (Pilihlah jawaban yang paling mendekati!)

a. $0{,}06$  
b. $0{,}19$  
c. $0{,}38$  
d. $0{,}62$  
e. $0{,}92$

> [!summary]+ **Jawaban No. 21**
> 
> **(e). $0{,}92$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial** $X \sim B(n, p)$:
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$
> >
> > Syarat: $n$ percobaan Bernoulli yang **independen** dengan peluang sukses **tetap** $p$.
>
> **Diketahui:**
> - Setiap tahun: independen, peluang gempa $p = 0{,}05$, paling banyak 1 gempa per tahun (asumsi i)
> - Jumlah tahun: $n = 20$
> - $X$ = banyaknya tahun yang terjadi gempa dalam 20 tahun → $X \sim B(20,\, 0{,}05)$
> - Target: $P(X < 3) = P(X=0) + P(X=1) + P(X=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X=0)$**
> >
> > $$P(X=0) = \binom{20}{0}(0{,}05)^0(0{,}95)^{20} = 1 \times 1 \times (0{,}95)^{20}$$
> >
> > $(0{,}95)^{20} = e^{20\ln(0{,}95)} = e^{20 \times (-0{,}05129)} = e^{-1{,}0258} \approx 0{,}35849$
> >
> > **Langkah 2: Hitung $P(X=1)$**
> >
> > $$P(X=1) = \binom{20}{1}(0{,}05)^1(0{,}95)^{19} = 20 \times 0{,}05 \times \frac{(0{,}95)^{20}}{0{,}95}$$
> >
> > $$= 1 \times \frac{0{,}35849}{0{,}95} = 20 \times 0{,}05 \times 0{,}37736 = 0{,}37736$$
> >
> > **Langkah 3: Hitung $P(X=2)$**
> >
> > $$P(X=2) = \binom{20}{2}(0{,}05)^2(0{,}95)^{18} = 190 \times 0{,}0025 \times \frac{(0{,}95)^{20}}{(0{,}95)^2}$$
> >
> > $$= 190 \times 0{,}0025 \times \frac{0{,}35849}{0{,}9025} = 190 \times 0{,}0025 \times 0{,}39722 = 0{,}18868$$
> >
> > **Langkah 4: Jumlahkan Ketiga Probabilitas**
> >
> > $$P(X < 3) = 0{,}35849 + 0{,}37736 + 0{,}18868 = 0{,}92453 \approx 0{,}92$$
> >
> > **Verifikasi via Aproksimasi Poisson** (opsional, untuk mengecek kewajaran):
> > Dengan $\lambda = np = 20 \times 0{,}05 = 1$, dan $X \approx \text{Poisson}(1)$:
> >
> > $$P(X<3) \approx e^{-1}\!\left(1 + 1 + \frac{1}{2}\right) = e^{-1} \times 2{,}5 = 0{,}920 \checkmark$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}92$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah mengidentifikasi distribusi: mengira ini distribusi Poisson secara langsung. Soal secara eksplisit menyebut Bernoulli per tahun dengan $n$ terbatas → Binomial. Poisson hanya sebagai aproksimasi.
> > > - Salah menghitung $(0{,}95)^{19}$ atau $(0{,}95)^{18}$: gunakan hubungan rekursif $(0{,}95)^{k-1} = (0{,}95)^k / 0{,}95$ untuk efisiensi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **"Kurang dari 3"** = $\{X=0\} \cup \{X=1\} \cup \{X=2\}$, **tidak mencakup $X=3$**. Jika soal mengatakan "paling banyak 3" atau "tidak lebih dari 3", barulah $X=3$ dimasukkan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada kata **"saling bebas"** + **peluang tetap per periode** + **jumlah periode terbatas** → $X \sim \text{Binomial}$.
> > > - Gunakan aproksimasi Poisson ($\lambda = np$) hanya untuk verifikasi, bukan sebagai jawaban utama saat $n$ kecil.

---

## **No. 22**

Anda merupakan seorang aktuaris yang bertanggung jawab dalam melakukan negosiasi terhadap kontrak reasuransi di perusahaan tempat anda bekerja. Anda menentukan bahwa besar kerugian (dalam juta) yang ingin direasuransikan mengikuti distribusi seragam pada interval $[1000, 2000]$. Anda memiliki dua pilihan skema kontrak reasuransi untuk risiko ini:

(i) Kontrak pertama membayarkan klaim reasuransi sebesar $90\%$ dari besar kerugian, sedangkan  
(ii) Kontrak kedua membayarkan klaim reasuransi hingga limit maksimum, dimana nilai limit ditentukan sedemikian sehingga nilai harapan dari klaim reasuransi dari kedua kontrak bernilai sama.

Hitunglah rasio dari varians klaim reasuransi atas kontrak kedua terhadap varians klaim reasuransi atas kontrak pertama! (Pilihlah jawaban yang paling mendekati!)

a. $1{,}5$  
b. $2{,}0$  
c. $0{,}9$  
d. $0{,}6$  
e. $0{,}3$

> [!summary]+ **Jawaban No. 22**
> 
> **(e). $0{,}3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U[a, b]$: $E[X] = \dfrac{a+b}{2}$, $\text{Var}(X) = \dfrac{(b-a)^2}{12}$, $f(x) = \dfrac{1}{b-a}$.
> >
> > **Variansi transformasi linear:** $\text{Var}(cX) = c^2\,\text{Var}(X)$.
> >
> > **Variansi LEV** $Y_2 = \min(X, L)$:
> >
> > $$E[Y_2^2] = \int_a^L x^2 \cdot \frac{1}{b-a}\,dx + L^2 \cdot P(X > L)$$
> >
> > $$\text{Var}(Y_2) = E[Y_2^2] - (E[Y_2])^2$$
> >
>
> **Diketahui:**
> - $X \sim U[1000, 2000]$: rataan $= 1500$, variansi $= \dfrac{(1000)^2}{12} = \dfrac{10^6}{12}$
> - Kontrak 1: $Y_1 = 0{,}9X$ (proporsional)
> - Kontrak 2: $Y_2 = \min(X, L)$ (limited payment) dengan $E[Y_2] = E[Y_1]$
> - Target: $\dfrac{\text{Var}(Y_2)}{\text{Var}(Y_1)}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y_1]$ dan $\text{Var}(Y_1)$**
> >
> > $$E[Y_1] = 0{,}9 \times E[X] = 0{,}9 \times 1500 = 1350$$
> >
> > $$\text{Var}(Y_1) = (0{,}9)^2 \times \text{Var}(X) = 0{,}81 \times \frac{10^6}{12} = \frac{810{.}000}{12} = 67{.}500$$
> >
> > **Langkah 2: Cari Limit $L$ dari Syarat $E[Y_2] = 1350$**
> >
> > Karena $L$ harus berada dalam $[1000, 2000]$, dan $f(x) = 1/1000$:
> >
> > $$E[\min(X,L)] = \int_{1000}^{L} x \cdot \frac{1}{1000}\,dx + L \cdot \int_L^{2000} \frac{1}{1000}\,dx$$
> >
> > $$= \frac{1}{1000}\cdot\frac{L^2 - 1000^2}{2} + \frac{L(2000-L)}{1000}$$
> >
> > $$= \frac{L^2 - 10^6}{2000} + \frac{2000L - L^2}{1000} = \frac{L^2 - 10^6 + 4000L - 2L^2}{2000}$$
> >
> > $$= \frac{-L^2 + 4000L - 10^6}{2000} = 1350$$
> >
> > $$-L^2 + 4000L - 10^6 = 2{.}700{.}000$$
> >
> > $$L^2 - 4000L + 3{.}700{.}000 = 0$$
> >
> > Gunakan rumus kuadrat:
> >
> > $$L = \frac{4000 \pm \sqrt{4000^2 - 4(3{.}700{.}000)}}{2} = \frac{4000 \pm \sqrt{16{.}000{.}000 - 14{.}800{.}000}}{2}$$
> >
> > $$= \frac{4000 \pm \sqrt{1{.}200{.}000}}{2} = \frac{4000 \pm 1095{,}4}{2}$$
> >
> > Dua solusi: $L \approx 2547{,}7$ (di luar $[1000,2000]$, **ditolak**) atau $L \approx 1452{,}3$ ✓
> >
> > **Langkah 3: Hitung $E[Y_2^2]$**
> >
> > Dengan $L = 1452{,}3$ dan $P(X > L) = \dfrac{2000 - 1452{,}3}{1000} = \dfrac{547{,}7}{1000} = 0{,}5477$:
> >
> > $$E[Y_2^2] = \frac{1}{1000}\int_{1000}^{1452{,}3} x^2\,dx + (1452{,}3)^2 \times 0{,}5477$$
> >
> > $$= \frac{1}{1000} \cdot \frac{(1452{,}3)^3 - (1000)^3}{3} + (1452{,}3)^2 \times 0{,}5477$$
> >
> > Hitung suku pertama:
> >
> > $$(1452{,}3)^3 \approx 3{,}0646 \times 10^9$$
> >
> > $$\frac{3{,}0646 \times 10^9 - 10^9}{3000} = \frac{2{,}0646 \times 10^9}{3000} \approx 688{.}200$$
> >
> > Hitung suku kedua:
> >
> > $$(1452{,}3)^2 \approx 2{,}1092 \times 10^6$$
> >
> > $$2{,}1092 \times 10^6 \times 0{,}5477 \approx 1{.}155{.}410$$
> >
> > $$E[Y_2^2] \approx 688{.}200 + 1{.}155{.}410 = 1{.}843{.}610$$
> >
> > **Langkah 4: Hitung $\text{Var}(Y_2)$**
> >
> > $$\text{Var}(Y_2) = E[Y_2^2] - (E[Y_2])^2 = 1{.}843{.}610 - (1350)^2 = 1{.}843{.}610 - 1{.}822{.}500 = 21{.}110$$
> >
> > **Langkah 5: Hitung Rasio**
> >
> > $$\frac{\text{Var}(Y_2)}{\text{Var}(Y_1)} = \frac{21{.}110}{67{.}500} \approx 0{,}313 \approx 0{,}3$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $\text{Var}(cX) = c^2\,\text{Var}(X)$, bukan $c \cdot \text{Var}(X)$. Koefisien $0{,}9$ harus dikuadratkan: $(0{,}9)^2 = 0{,}81$.
> > > - Salah dalam mengintegrasikan $E[\min(X,L)]$: harus dibagi dua bagian — satu untuk $X \leq L$ (bayar $X$) dan satu untuk $X > L$ (bayar $L$).
> > > - Mengambil solusi $L = 2547{,}7$ tanpa mengecek apakah $L \in [1000, 2000]$ — selalu verifikasi domain solusi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Kontrak 2 adalah **limited payment** $\min(X,L)$ (bayar kerugian penuh hingga batas $L$), **bukan** *excess of loss* (bayar kelebihan di atas deductible).
> >
> > > [!CAUTION] Red Flags
> > > - Kontrak proporsional ($cX$) cenderung memiliki variansi **lebih besar** dari kontrak limited ($\min(X,L)$) dengan mean yang sama, karena kontrak limited memotong ekor distribusi sehingga mengurangi dispersi.
> > > - Rasio $< 1$ menandakan kontrak kedua (limited) **lebih stabil** — masuk akal secara intuisi reasuransi.

---

## **No. 23**

Peluang keterlambatan keberangkatan pesawat terbang dari suatu penerbangan diketahui sebesar $\dfrac{1}{6}$, dengan setiap satu keberangkatan pesawat terbang diperlakukan sebagai suatu percobaan Bernoulli. Hitunglah peluang setidaknya 40 dari 180 keberangkatan pesawat terbang akan mengalami keterlambatan, menggunakan aproksimasi normal dengan koreksi kontinuitas! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}0345$  
b. $0{,}0287$  
c. $0{,}0197$  
d. $0{,}0110$  
e. $0{,}0096$

> [!summary]+ **Jawaban No. 23**
> 
> **(b). $0{,}0287$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Walpole Bab 8.5 |
>
> > [!info]+ **Rumus**
> >
> > **Aproksimasi Normal dengan Koreksi Kontinuitas** untuk $X \sim B(n,p)$:
> >
> > $$\mu = np, \quad \sigma = \sqrt{np(1-p)}$$
> >
> > $$P(X \geq k) \approx P\!\left(Z \geq \frac{k - 0{,}5 - \mu}{\sigma}\right)$$
> >
> > Alasan koreksi: distribusi Binomial bersifat **diskrit**, sedangkan Normal bersifat **kontinu**. Nilai diskrit $X = k$ direpresentasikan sebagai interval kontinu $[k - 0{,}5,\; k + 0{,}5]$.
>
> **Diketahui:**
> - $n = 180$, $p = \dfrac{1}{6}$
> - $\mu = np = 180 \times \dfrac{1}{6} = 30$
> - $\sigma^2 = np(1-p) = 180 \times \dfrac{1}{6} \times \dfrac{5}{6} = 25$, sehingga $\sigma = 5$
> - Target: $P(X \geq 40)$ menggunakan aproksimasi Normal dengan koreksi kontinuitas
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Koreksi Kontinuitas untuk $P(X \geq 40)$**
> >
> > "Setidaknya 40" berarti $X \geq 40$ (inklusif). Dalam aproksimasi kontinu, ini direpresentasikan sebagai $X_{\text{kontinu}} \geq 40 - 0{,}5 = 39{,}5$:
> >
> > $$P(X \geq 40) \approx P\!\left(Z \geq \frac{39{,}5 - 30}{5}\right) = P\!\left(Z \geq \frac{9{,}5}{5}\right) = P(Z \geq 1{,}90)$$
> >
> > **Langkah 2: Hitung dari Tabel Normal Standar**
> >
> > $$P(Z \geq 1{,}90) = 1 - \Phi(1{,}90) = 1 - 0{,}9713 = 0{,}0287$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}0287$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Tidak menggunakan koreksi kontinuitas**: $z = (40 - 30)/5 = 2{,}00$ → $P(Z \geq 2{,}00) = 0{,}0228$. Ini bukan jawaban yang diminta soal dan tidak menggunakan koreksi yang diminta.
> > > - **Koreksi arah yang salah**: untuk $P(X \geq k)$, gunakan $k - 0{,}5$ (geser ke kiri). Untuk $P(X \leq k)$, gunakan $k + 0{,}5$ (geser ke kanan). Mudah diingat: koreksi selalu ke arah yang **memperluas** wilayah event.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **"Setidaknya 40"** = $P(X \geq 40)$, inklusif. Berbeda dengan **"lebih dari 40"** = $P(X > 40) = P(X \geq 41)$, yang menggunakan koreksi $40 + 0{,}5 = 40{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - Tabel koreksi kontinuitas yang wajib dihapal:
> > >
> > > | Kejadian Diskrit | Koreksi Kontinu |
> > > |:-:|:-:|
> > > | $P(X \geq k)$ | $P(Z \geq \frac{k-0{,}5-\mu}{\sigma})$ |
> > > | $P(X > k)$ | $P(Z \geq \frac{k+0{,}5-\mu}{\sigma})$ |
> > > | $P(X \leq k)$ | $P(Z \leq \frac{k+0{,}5-\mu}{\sigma})$ |
> > > | $P(X < k)$ | $P(Z \leq \frac{k-0{,}5-\mu}{\sigma})$ |

---

## **No. 24**

Anda diberikan informasi sebagai berikut:

i. $P(A \cup B) = 0{,}7$  
ii. $P(A \cup B^c) = 0{,}9$  

Tentukan $P(A)$!

a. $0{,}2$  
b. $0{,}3$  
c. $0{,}4$  
d. $0{,}6$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 24**
> 
> **(d). $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.2; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Identitas Probabilitas untuk Dua Kejadian:**
> >
> > $$P(E) + P(F) = P(E \cup F) + P(E \cap F)$$
> >
> > Ini adalah analog probabilitas dari identitas himpunan $|E| + |F| = |E \cup F| + |E \cap F|$.
> >
> > **Sifat Komplementer:** $B \cup B^c = \Omega$ dan $B \cap B^c = \emptyset$.
>
> **Diketahui:**
> - $P(A \cup B) = 0{,}7$
> - $P(A \cup B^c) = 0{,}9$
> - Target: $P(A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Gabungan dan Irisan dari Dua Kejadian**
> >
> > Terapkan identitas $P(E) + P(F) = P(E \cup F) + P(E \cap F)$ dengan $E = A \cup B$ dan $F = A \cup B^c$:
> >
> > **Hitung gabungan:** $(A \cup B) \cup (A \cup B^c) = A \cup B \cup B^c = A \cup \Omega = \Omega$
> >
> > $$\therefore P((A\cup B) \cup (A \cup B^c)) = P(\Omega) = 1$$
> >
> > **Hitung irisan:** $(A \cup B) \cap (A \cup B^c) = A \cup (B \cap B^c) = A \cup \emptyset = A$
> >
> > $$\therefore P((A\cup B) \cap (A \cup B^c)) = P(A)$$
> >
> > **Langkah 2: Substitusi ke Identitas**
> >
> > $$P(A \cup B) + P(A \cup B^c) = P(\Omega) + P(A)$$
> >
> > $$0{,}7 + 0{,}9 = 1 + P(A)$$
> >
> > $$1{,}6 = 1 + P(A)$$
> >
> > $$P(A) = 0{,}6$$
> >
> > **Hasil Akhir:** **(d)**. $P(A) = 0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba membentuk sistem persamaan dengan tiga variabel $P(A)$, $P(B)$, $P(A \cap B)$ menggunakan rumus $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ — ini menghasilkan dua persamaan dengan tiga variabel (underdetermined). Sistem tidak cukup untuk diselesaikan tanpa identitas tambahan.
> > > - Lupa sifat distribusif himpunan: $A \cup (B \cap B^c) = A \cup \emptyset = A$, bukan $(A \cup B) \cap (A \cup B^c) = A \cap B$ atau bentuk keliru lainnya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(A \cup B^c)$ adalah komplemen dari $P(A \cup B)$, sehingga $P(A \cup B^c) = 1 - P(A \cup B) = 0{,}3$ — ini **keliru**. $B^c$ adalah komplemen $B$, bukan komplemen $A \cup B$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan $P(E)$ dan $P(F)$ di mana $E \cup F = \Omega$ → langsung gunakan $P(E) + P(F) = 1 + P(E \cap F)$ untuk mencari $P(E \cap F)$.
> > > - Selalu cek apakah gabungan dua kejadian bisa disederhanakan menjadi $\Omega$ atau irisan menjadi $\emptyset$ — ini sering menghasilkan solusi yang elegan tanpa perlu variabel tambahan.

---

## **No. 25**

Sampel yang terdiri dari 3 bilangan diambil secara acak dan tanpa pengembalian dari populasi $\{1, 2, 3, 4, 5\}$. Berapakah peluang bahwa jangkauan (range) dari sampel yang terpilih sebesar 3?

a. $\dfrac{1}{15}$  
b. $\dfrac{24}{125}$  
c. $\dfrac{2}{10}$  
d. $\dfrac{3}{10}$  
e. $\dfrac{2}{5}$

> [!summary]+ **Jawaban No. 25**
> 
> **(e). $\dfrac{2}{5}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1_3_Metode_Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1_2_Aksioma_dan_Perhitungan_Probabilitas]] |
> | **Connected Topics** | [[1_4_Probabilitas_Bersyarat]] |
> | **Referensi** | Wackerly, Mendenhall & Scheaffer — Ch. 3 |
>
> > [!info]+ **Rumus**
> >
> > **Peluang Klasik (Ruang Sampel Seragam):**
> >
> > $$P(A) = \frac{|A|}{|S|}$$
> >
> > **Jangkauan (Range) sampel:**
> >
> > $$\text{Range} = X_{(n)} - X_{(1)}$$
> >
> > di mana $X_{(1)}$ = nilai terkecil dan $X_{(n)}$ = nilai terbesar dalam sampel.
> >
> > **Kombinasi (sampling tanpa pengembalian):**
> >
> > $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
>
> **Diketahui:**
> - Populasi: $\{1, 2, 3, 4, 5\}$, ukuran $N = 5$
> - Ukuran sampel: $n = 3$, diambil **tanpa pengembalian** (urutan tidak diperhatikan)
> - Target: $P(\text{Range} = 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung total ruang sampel**
> >
> > Karena pengambilan tanpa pengembalian dan urutan tidak diperhatikan, total cara memilih 3 bilangan dari 5 adalah:
> >
> > $$|S| = \binom{5}{3} = \frac{5!}{3!\,2!} = 10$$
> >
> > **Langkah 2: Identifikasi syarat Range = 3**
> >
> > Range $= X_{\max} - X_{\min} = 3$.
> >
> > Kita cari semua pasangan $(X_{\min}, X_{\max})$ sehingga $X_{\max} - X_{\min} = 3$:
> >
> > | $X_{\min}$ | $X_{\max}$ | Selisih |
> > |:-:|:-:|:-:|
> > | $1$ | $4$ | $3$ ✓ |
> > | $2$ | $5$ | $3$ ✓ |
> >
> > Jadi hanya ada 2 pasangan ujung yang memenuhi.
> >
> > **Langkah 3: Hitung kejadian yang memenuhi**
> >
> > Untuk setiap pasangan ujung, nilai tengah (elemen ke-3 sampel) harus berada **di antara** $X_{\min}$ dan $X_{\max}$.
> >
> > **Kasus 1:** $X_{\min} = 1$, $X_{\max} = 4$
> >
> > Nilai tengah yang mungkin dari populasi, dengan syarat $1 < x < 4$ dan $x \in \{1,2,3,4,5\}$:
> > → $x \in \{2, 3\}$ → **2 sampel**: $\{1,2,4\}$ dan $\{1,3,4\}$
> >
> > **Kasus 2:** $X_{\min} = 2$, $X_{\max} = 5$
> >
> > Nilai tengah dengan syarat $2 < x < 5$ dan $x \in \{1,2,3,4,5\}$:
> > → $x \in \{3, 4\}$ → **2 sampel**: $\{2,3,5\}$ dan $\{2,4,5\}$
> >
> > Total kejadian yang memenuhi: $|A| = 2 + 2 = 4$
> >
> > **Langkah 4: Hitung peluang**
> >
> > $$P(\text{Range} = 3) = \frac{|A|}{|S|} = \frac{4}{10} = \frac{2}{5}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{2}{5}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan sampling **dengan** pengembalian sehingga menggunakan $5^3 = 125$ sebagai ruang sampel — ini menghasilkan opsi (b) yang merupakan jebakan.
> > > - Lupa bahwa nilai tengah harus **benar-benar berada di antara** $X_{\min}$ dan $X_{\max}$, bukan sama dengan salah satunya.
> > > - Menghitung pasangan ujung tetapi lupa menghitung berapa elemen tengah yang tersedia untuk masing-masing kasus.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menafsirkan "jangkauan = 3" sebagai "ada 3 nilai yang berbeda" — padahal jangkauan adalah $X_{\max} - X_{\min}$.
> > > - Mengira soal meminta urutan sampel diperhatikan (permutasi), sehingga membagi $|S|$ dengan $3!$ atau sebaliknya.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **"tanpa pengembalian"** dan tidak menyebut urutan → gunakan **kombinasi** $\binom{n}{k}$, bukan permutasi.
> > > - Jika soal menyebut **"range"** → identifikasi semua pasangan $(X_{\min}, X_{\max})$ terlebih dahulu, lalu hitung elemen tengah yang valid.
> > > - Opsi (b) $\frac{24}{125}$ adalah jebakan untuk yang menghitung dengan sampling **dengan** pengembalian.

---

## **No. 26**

Suatu kotak memuat 35 buah permata yang berisi 10 permata asli dan 25 permata tiruan. Permata diambil secara acak dari kotak, satu permata setiap kali pengambilan, tanpa pengembalian. Berapakah peluang tepat 2 permata tiruan terpilih sebelum permata asli yang kedua terpilih?

a. $\dfrac{225}{5236}$  
b. $\dfrac{675}{5236}$  
c. $\dfrac{\dbinom{25}{2}\dbinom{10}{2}}{\dbinom{35}{4}}$  
d. $\dbinom{3}{2}\!\left(\dfrac{10}{35}\right)^{\!2}\!\left(\dfrac{25}{35}\right)^{\!2}$  
e. $\dbinom{4}{2}\!\left(\dfrac{10}{35}\right)^{\!2}\!\left(\dfrac{25}{35}\right)^{\!2}$

> [!summary]+ **Jawaban No. 26**
> 
> **(b). $\dfrac{675}{5236}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1_3_Metode_Enumerasi]], [[1_4_Probabilitas_Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1_2_Aksioma_dan_Perhitungan_Probabilitas]], [[1_3_Metode_Enumerasi]] |
> | **Connected Topics** | [[2_5_Distribusi_Diskrit_Umum]] (Distribusi Negatif Hipergeometrik) |
> | **Referensi** | Wackerly, Mendenhall & Scheaffer — Ch. 3–4 |
>
> > [!info]+ **Rumus**
> >
> > **Aturan perkalian probabilitas bersyarat (sampling tanpa pengembalian):**
> >
> > $$P(A_1 \cap A_2 \cap \cdots \cap A_k) = P(A_1)\cdot P(A_2|A_1)\cdot P(A_3|A_1,A_2)\cdots$$
> >
> > **Kunci soal "tepat $r$ sukses sebelum sukses ke-$k$":** Pengambilan ke-$n$ **pasti** merupakan sukses ke-$k$, sehingga di antara $n-1$ pengambilan sebelumnya terdapat tepat $k-1$ sukses dan sisanya gagal.
>
> **Diketahui:**
> - Total permata: $N = 35$
> - Permata asli (A): $10$; permata tiruan (T): $25$
> - Sampling: **tanpa pengembalian**, satu per satu
> - Kejadian: tepat **2 tiruan** terpilih **sebelum** asli ke-2 terpilih
> - Target: probabilitas kejadian tersebut
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pahami struktur kejadian**
> >
> > Kita ingin: tepat 2 tiruan muncul **sebelum** asli ke-2.
> >
> > Artinya, proses berhenti saat permata asli ke-2 terpilih. Pada saat berhenti, urutan pengambilan telah menghasilkan:
> > - 4 pengambilan total
> > - Pengambilan ke-4 **pasti** = asli (asli ke-2)
> > - Di antara 3 pengambilan pertama: tepat **1 asli** dan tepat **2 tiruan**
> >
> > Ini adalah **Distribusi Negatif Hipergeometrik**: berapa peluang asli ke-2 muncul tepat pada pengambilan ke-4?
> >
> > **Langkah 2: Hitung jumlah susunan di 3 posisi pertama**
> >
> > Di posisi 1, 2, 3 harus ada tepat 1 asli dan 2 tiruan.
> >
> > Jumlah cara memilih posisi untuk 1 asli di antara 3 slot:
> >
> > $$\binom{3}{1} = 3$$
> >
> > **Langkah 3: Hitung probabilitas tiap susunan**
> >
> > Kita hitung probabilitas salah satu urutan spesifik, misalnya: T, T, A, A (tiruan, tiruan, asli, asli).
> >
> > $$P(\text{T, T, A, A}) = \frac{25}{35} \cdot \frac{24}{34} \cdot \frac{10}{33} \cdot \frac{9}{32}$$
> >
> > Untuk urutan lain yang memenuhi syarat (1 A dan 2 T di 3 posisi pertama, lalu A di posisi ke-4), probabilitas tiap urutannya **berbeda** karena sampling tanpa pengembalian. Kita harus menghitungnya secara langsung.
> >
> > **Tiga urutan yang memenuhi** (A di posisi ke-4 selalu):
> >
> > **(i) T, T, A, A:**
> >
> > $$\frac{25}{35} \cdot \frac{24}{34} \cdot \frac{10}{33} \cdot \frac{9}{32}$$
> >
> > **(ii) T, A, T, A:**
> >
> > $$\frac{25}{35} \cdot \frac{10}{34} \cdot \frac{24}{33} \cdot \frac{9}{32}$$
> >
> > **(iii) A, T, T, A:**
> >
> > $$\frac{10}{35} \cdot \frac{25}{34} \cdot \frac{24}{33} \cdot \frac{9}{32}$$
> >
> > **Langkah 4: Amati bahwa ketiga peluang identik**
> >
> > Perhatikan bahwa pembilang ketiga ekspresi di atas sama persis:
> >
> > $$25 \cdot 24 \cdot 10 \cdot 9$$
> >
> > dan penyebutnya pun sama: $35 \cdot 34 \cdot 33 \cdot 32$.
> >
> > Ini karena perkalian bersifat komutatif — urutan faktor tidak mengubah hasil perkalian.
> >
> > Sehingga total peluang:
> >
> > $$P = 3 \cdot \frac{25 \cdot 24 \cdot 10 \cdot 9}{35 \cdot 34 \cdot 33 \cdot 32}$$
> >
> > **Langkah 5: Hitung nilai numerik**
> >
> > Pembilang:
> >
> > $$3 \cdot 25 \cdot 24 \cdot 10 \cdot 9 = 3 \cdot 54{.}000 = 162{.}000$$
> >
> > Penyebut:
> >
> > $$35 \cdot 34 \cdot 33 \cdot 32 = 35 \cdot 34 = 1{.}190;\quad 1{.}190 \cdot 33 = 39{.}270;\quad 39{.}270 \cdot 32 = 1{.}256{.}640$$
> >
> > Sederhanakan:
> >
> > $$P = \frac{162{.}000}{1{.}256{.}640}$$
> >
> > Bagi keduanya dengan $\gcd$. Coba bagi dengan $240$:
> >
> > $$\frac{162{.}000 \div 240}{1{.}256{.}640 \div 240} = \frac{675}{5{.}236}$$
> >
> > Verifikasi: $162{.}000 / 240 = 675$ ✓; $1{.}256{.}640 / 240 = 5{.}236$ ✓
> >
> > $$\boxed{P = \frac{675}{5{.}236}}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{675}{5236}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula **Hipergeometrik biasa** seperti opsi (c): $\frac{\binom{25}{2}\binom{10}{2}}{\binom{35}{4}}$ — ini menghitung peluang tepat 2 tiruan DAN 2 asli dalam 4 pengambilan **tanpa syarat urutan**. Soal ini berbeda karena posisi ke-4 **harus** asli ke-2.
> > > - Menggunakan formula **Binomial** seperti opsi (d) atau (e) — padahal sampling dilakukan **tanpa pengembalian**, bukan dengan pengembalian, sehingga probabilitas tidak konstan.
> > > - Salah menghitung jumlah urutan: ada $\binom{3}{1} = 3$ cara (bukan $\binom{4}{2} = 6$) karena posisi ke-4 sudah terkunci sebagai asli ke-2.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menafsirkan "sebelum asli kedua" sebagai "di antara 4 pengambilan bebas" — padahal frasa ini berarti proses **berhenti** saat asli ke-2 muncul, sehingga posisi terakhir sudah terkunci.
> > > - Lupa bahwa "tepat 2 tiruan sebelum asli ke-2" berarti total pengambilan = 4 (2 tiruan + 2 asli), bukan lebih.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **"tanpa pengembalian"** dan ada kondisi "sukses ke-$k$ muncul tepat pada pengambilan ke-$n$" → gunakan pendekatan **Negatif Hipergeometrik**, bukan Binomial atau Hipergeometrik biasa.
> > > - Jika melihat opsi berbentuk $\binom{n}{k}p^k(1-p)^{n-k}$ → itu formula Binomial (dengan pengembalian), langsung eliminasi untuk soal tanpa pengembalian.

---

## **No. 27**

Misal $X$ merupakan variabel acak kontinu dengan fungsi peluang:

$$f_X(x) = \begin{cases} \theta x + \dfrac{3}{2}\,\theta^{3/2}\,x^2, & 0 < x < \dfrac{1}{\sqrt{\theta}} \\ 0, & \text{selainnya} \end{cases}$$

dengan $\theta > 0$. Tentukan nilai harapan dari $X$!

a. $\dfrac{\theta^{5/2}}{3} + \dfrac{3\theta^{7/2}}{8}$  
b. $1$  
c. $\dfrac{5}{2\sqrt{\theta}}$  
d. $\dfrac{5}{2}$  
e. $\dfrac{17}{24\sqrt{\theta}}$

> [!summary]+ **Jawaban No. 27**
> 
> **(e). $\dfrac{17}{24\sqrt{\theta}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2_2_Variabel_Acak_Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2_2_Variabel_Acak_Kontinu]], kalkulus integral |
> | **Connected Topics** | [[2_6_Distribusi_Kontinu_Umum]] |
> | **Referensi** | Hogg, McKean & Craig — Ch. 2 |
>
> > [!info]+ **Rumus**
> >
> > **Nilai harapan variabel acak kontinu:**
> >
> > $$E[X] = \int_{-\infty}^{\infty} x\, f_X(x)\, dx$$
> >
> > **Integral pangkat:**
> >
> > $$\int_0^b x^n\, dx = \frac{b^{n+1}}{n+1}$$
>
> **Diketahui:**
> - $f_X(x) = \theta x + \dfrac{3}{2}\theta^{3/2} x^2$ untuk $0 < x < \dfrac{1}{\sqrt{\theta}}$, dan $0$ selainnya
> - $\theta > 0$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis definisi nilai harapan**
> >
> > $$E[X] = \int_0^{1/\sqrt{\theta}} x \cdot f_X(x)\, dx = \int_0^{1/\sqrt{\theta}} x\left(\theta x + \frac{3}{2}\theta^{3/2} x^2\right) dx$$
> >
> > **Langkah 2: Distribusikan $x$ ke dalam kurung**
> >
> > $$E[X] = \int_0^{1/\sqrt{\theta}} \left(\theta x^2 + \frac{3}{2}\theta^{3/2} x^3\right) dx$$
> >
> > **Langkah 3: Integrasikan suku per suku**
> >
> > $$E[X] = \theta \cdot \frac{x^3}{3}\Bigg|_0^{1/\sqrt{\theta}} + \frac{3}{2}\theta^{3/2} \cdot \frac{x^4}{4}\Bigg|_0^{1/\sqrt{\theta}}$$
> >
> > $$= \frac{\theta}{3}\left(\frac{1}{\sqrt{\theta}}\right)^3 + \frac{3\theta^{3/2}}{8}\left(\frac{1}{\sqrt{\theta}}\right)^4$$
> >
> > **Langkah 4: Sederhanakan setiap suku**
> >
> > **Suku 1:**
> >
> > $$\frac{\theta}{3}\cdot\frac{1}{\theta^{3/2}} = \frac{\theta}{3\,\theta^{3/2}} = \frac{1}{3\,\theta^{1/2}} = \frac{1}{3\sqrt{\theta}}$$
> >
> > **Suku 2:**
> >
> > $$\frac{3\theta^{3/2}}{8}\cdot\frac{1}{\theta^2} = \frac{3}{8\,\theta^{1/2}} = \frac{3}{8\sqrt{\theta}}$$
> >
> > **Langkah 5: Jumlahkan kedua suku**
> >
> > $$E[X] = \frac{1}{3\sqrt{\theta}} + \frac{3}{8\sqrt{\theta}} = \frac{1}{\sqrt{\theta}}\left(\frac{1}{3} + \frac{3}{8}\right)$$
> >
> > Samakan penyebut: $\text{KPK}(3,8) = 24$
> >
> > $$\frac{1}{3} + \frac{3}{8} = \frac{8}{24} + \frac{9}{24} = \frac{17}{24}$$
> >
> > Sehingga:
> >
> > $$E[X] = \frac{17}{24\sqrt{\theta}}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{17}{24\sqrt{\theta}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengalikan $x$ dengan $f_X(x)$ — menghitung $\int f_X(x)\,dx$ (ini adalah verifikasi bahwa $f$ adalah PDF valid, bukan $E[X]$).
> > > - Salah menyederhanakan pangkat: $\left(\frac{1}{\sqrt{\theta}}\right)^3 = \theta^{-3/2}$, bukan $\theta^{3/2}$. Perhatikan tanda negatif pada eksponen.
> > > - Menghitung integral dengan batas atas $\infty$ alih-alih $\frac{1}{\sqrt{\theta}}$ — batas support harus diperhatikan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menjawab opsi (a) karena langsung mensubstitusi batas tanpa menyederhanakan — opsi (a) adalah nilai sebelum disederhanakan.
> > > - Mengira $E[X]$ harus berupa konstanta dan memilih opsi (b) $= 1$ tanpa perhitungan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika batas atas PDF mengandung **parameter** (seperti $\frac{1}{\sqrt{\theta}}$) → hasil $E[X]$ juga akan mengandung parameter tersebut; eliminasi opsi yang berupa konstanta murni.
> > > - Setelah integrasi, selalu **sederhanakan pangkat** $\theta$ secara teliti: $\frac{\theta}{\theta^{3/2}} = \theta^{1-3/2} = \theta^{-1/2}$.

---

## **No. 28**

Banyaknya lonjakan daya yang terjadi pada suatu jaringan listrik diketahui mengikuti distribusi Poisson dengan rataan 1 lonjakan daya setiap 12 jam. Berapakah peluang bahwa tidak akan terjadi lonjakan daya lebih dari satu kali dalam 24 jam?

a. $2e^{-2}$  
b. $3e^{-2}$  
c. $e^{-1/2}$  
d. $\dfrac{3}{2}e^{-1/2}$  
e. $e^{-1}$

> [!summary]+ **Jawaban No. 28**
> 
> **(b). $3e^{-2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2_5_Distribusi_Diskrit_Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2_1_Variabel_Acak_Diskrit]] |
> | **Connected Topics** | [[2_6_Distribusi_Kontinu_Umum]] (Eksponensial sebagai waktu antar-kejadian Poisson) |
> | **Referensi** | Hogg, McKean & Craig — Ch. 3; Wackerly et al. — Ch. 5 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Poisson** — $X \sim \text{Poisson}(\lambda)$:
> >
> > $$P(X = k) = \frac{e^{-\lambda}\,\lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$
> >
> > **Penskalaan parameter Poisson:** Jika rata-rata kejadian adalah $\lambda_0$ per satuan waktu $t_0$, maka untuk interval waktu $t$:
> >
> > $$\lambda = \lambda_0 \cdot \frac{t}{t_0}$$
>
> **Diketahui:**
> - Rata-rata: $1$ lonjakan per $12$ jam → $\lambda_0 = \frac{1}{12}$ lonjakan/jam
> - Interval yang ditanya: $t = 24$ jam
> - $\lambda_{24} = \frac{1}{12} \times 24 = 2$ lonjakan per 24 jam
> - Target: $P(X \leq 1)$ di mana $X \sim \text{Poisson}(2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan parameter $\lambda$ untuk 24 jam**
> >
> > Rata-rata diberikan sebagai 1 lonjakan per 12 jam.
> >
> > Untuk interval 24 jam (= $2 \times 12$ jam):
> >
> > $$\lambda = 1 \times \frac{24}{12} = 2$$
> >
> > Jadi $X \sim \text{Poisson}(\lambda = 2)$.
> >
> > **Langkah 2: Terjemahkan kalimat soal**
> >
> > "Tidak akan terjadi lebih dari satu kali" berarti:
> >
> > $$P(X \leq 1) = P(X = 0) + P(X = 1)$$
> >
> > **Langkah 3: Hitung $P(X = 0)$**
> >
> > $$P(X = 0) = \frac{e^{-2}\cdot 2^0}{0!} = e^{-2}$$
> >
> > **Langkah 4: Hitung $P(X = 1)$**
> >
> > $$P(X = 1) = \frac{e^{-2}\cdot 2^1}{1!} = 2e^{-2}$$
> >
> > **Langkah 5: Jumlahkan**
> >
> > $$P(X \leq 1) = e^{-2} + 2e^{-2} = 3e^{-2}$$
> >
> > **Hasil Akhir:** **(b)**. $3e^{-2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\lambda = 1$ tanpa penskalaan ke 24 jam — menghasilkan $e^{-1}$ atau $\frac{3}{2}e^{-1/2}$ (opsi c atau d).
> > > - Salah menskalakan: menggunakan $\lambda = \frac{1}{2}$ (membagi, bukan mengalikan) — menghasilkan opsi (d).
> > > - Hanya menghitung $P(X = 1)$ saja tanpa menjumlahkan $P(X = 0)$ — menghasilkan $2e^{-2}$ yaitu opsi (a).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menafsirkan "tidak lebih dari satu kali" sebagai $P(X < 1) = P(X = 0)$ saja — padahal "tidak lebih dari satu" = $P(X \leq 1)$, termasuk $X = 1$.
> > > - Mengira "rataan 1 lonjakan per 12 jam" langsung berarti $\lambda = 12$ (membalik satuan).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **rata-rata per satuan waktu tertentu** tetapi menanyakan **interval berbeda** → **skalakan $\lambda$** terlebih dahulu sebelum menghitung.
> > > - Frasa **"tidak lebih dari satu"** → $P(X \leq 1)$, harus mencakup $k = 0$ dan $k = 1$.

---

## **No. 29**

Sebuah koin yang setimbang dilempar satu kali. Jika sisi angka muncul, maka 1 dadu setimbang digulirkan. Jika sisi gambar yang muncul, maka 2 dadu setimbang digulirkan. Jika $Y$ merupakan total angka dadu yang muncul, tentukan $P(Y = 6)$!

a. $\dfrac{1}{9}$  
b. $\dfrac{5}{36}$  
c. $\dfrac{11}{72}$  
d. $\dfrac{1}{6}$  
e. $\dfrac{11}{36}$

> [!summary]+ **Jawaban No. 29**
> 
> **(c). $\dfrac{11}{72}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1_6_Teorema_Bayes_dan_Hukum_Probabilitas_Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1_4_Probabilitas_Bersyarat]], [[1_5_Kejadian_Independen]] |
> | **Connected Topics** | [[3_4_Nilai_Harapan_dan_Variansi_Bersyarat]] |
> | **Referensi** | Wackerly, Mendenhall & Scheaffer — Ch. 3 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Probabilitas Total:**
> >
> > $$P(B) = \sum_{i} P(B \mid A_i)\, P(A_i)$$
> >
> > di mana $\{A_i\}$ adalah partisi ruang sampel.
>
> **Diketahui:**
> - Koin setimbang: $P(\text{Angka}) = P(\text{Gambar}) = \frac{1}{2}$
> - Jika Angka → gulir 1 dadu; Jika Gambar → gulir 2 dadu
> - $Y$ = total angka dadu
> - Target: $P(Y = 6)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Partisi ruang sampel berdasarkan hasil koin**
> >
> > Misalkan $A$ = muncul Angka, $G$ = muncul Gambar.
> >
> > $$P(Y = 6) = P(Y = 6 \mid A)\,P(A) + P(Y = 6 \mid G)\,P(G)$$
> >
> > $$= P(Y = 6 \mid A)\cdot\frac{1}{2} + P(Y = 6 \mid G)\cdot\frac{1}{2}$$
> >
> > **Langkah 2: Hitung $P(Y = 6 \mid A)$**
> >
> > Jika Angka muncul, hanya 1 dadu digulirkan. Dadu memiliki sisi 1–6.
> >
> > $Y = 6$ hanya jika dadu menunjukkan angka 6, yaitu 1 dari 6 kemungkinan:
> >
> > $$P(Y = 6 \mid A) = \frac{1}{6}$$
> >
> > **Langkah 3: Hitung $P(Y = 6 \mid G)$**
> >
> > Jika Gambar muncul, 2 dadu digulirkan. Total ruang sampel = $6 \times 6 = 36$.
> >
> > Pasangan $(d_1, d_2)$ dengan $d_1 + d_2 = 6$:
> >
> > | $d_1$ | $d_2$ |
> > |:-:|:-:|
> > | $1$ | $5$ |
> > | $2$ | $4$ |
> > | $3$ | $3$ |
> > | $4$ | $2$ |
> > | $5$ | $1$ |
> >
> > Jumlah pasangan = 5.
> >
> > $$P(Y = 6 \mid G) = \frac{5}{36}$$
> >
> > **Langkah 4: Terapkan Hukum Total Probabilitas**
> >
> > $$P(Y = 6) = \frac{1}{6}\cdot\frac{1}{2} + \frac{5}{36}\cdot\frac{1}{2}$$
> >
> > $$= \frac{1}{12} + \frac{5}{72}$$
> >
> > Samakan penyebut: $\text{KPK}(12, 72) = 72$
> >
> > $$= \frac{6}{72} + \frac{5}{72} = \frac{11}{72}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{11}{72}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan hasil koin dan langsung menghitung $P(Y = 6)$ dengan 2 dadu saja — menghasilkan $\frac{5}{36}$ (opsi b).
> > > - Tidak menggunakan Hukum Total Probabilitas — menjumlahkan langsung $\frac{1}{6} + \frac{5}{36}$ tanpa pembobotan $\frac{1}{2}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira bahwa satu dadu dan dua dadu memberikan ruang sampel yang sama — padahal jumlah dadu berbeda mengubah ruang sampel secara fundamental.
> > > - Lupa bahwa $Y = 6$ dari 1 dadu (Angka muncul) berarti 1 dadu menunjukkan 6, bukan jumlah dua dadu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan **eksperimen dua tahap** (koin lalu dadu) → selalu gunakan **Hukum Total Probabilitas** dengan partisi berdasarkan hasil tahap pertama.
> > > - Jika jumlah objek yang digunakan **bergantung pada hasil acak sebelumnya** → kondisikan setiap kasus secara terpisah.

---

## **No. 30**

Misal $A$, $B$, dan $C$ merupakan kejadian sedemikian sehingga $A$ dan $B$ saling bebas, $B$ dan $C$ saling lepas, $P(A) = \dfrac{1}{4}$, $P(B) = \dfrac{1}{6}$, $P(C) = \dfrac{1}{2}$. Berapakah $P\!\left((A \cap B)^C \cup C\right)$?

a. $\dfrac{11}{24}$  

b. $\dfrac{3}{4}$  

c. $\dfrac{5}{6}$  

d. $\dfrac{23}{24}$  

e. $1$

> [!summary]+ **Jawaban No. 30**
> 
> **(d). $\dfrac{23}{24}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1_5_Kejadian_Independen]], [[1_2_Aksioma_dan_Perhitungan_Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1_2_Aksioma_dan_Perhitungan_Probabilitas]], [[1_5_Kejadian_Independen]] |
> | **Connected Topics** | [[1_4_Probabilitas_Bersyarat]], [[1_6_Teorema_Bayes_dan_Hukum_Probabilitas_Total]] |
> | **Referensi** | Wackerly, Mendenhall & Scheaffer — Ch. 3 |
>
> > [!info]+ **Rumus**
> >
> > **Komplemen:**
> >
> > $$P(E^C) = 1 - P(E)$$
> >
> > **Inklusi-Eksklusi untuk dua kejadian:**
> >
> > $$P(E \cup F) = P(E) + P(F) - P(E \cap F)$$
> >
> > **Independensi ($A$ dan $B$ saling bebas):**
> >
> > $$P(A \cap B) = P(A)\cdot P(B)$$
> >
> > **Saling lepas ($B$ dan $C$ mutually exclusive):**
> >
> > $$P(B \cap C) = 0$$
>
> **Diketahui:**
> - $A \perp B$ (saling bebas): $P(A \cap B) = P(A)\cdot P(B)$
> - $B$ dan $C$ saling lepas: $P(B \cap C) = 0$
> - $P(A) = \frac{1}{4}$, $P(B) = \frac{1}{6}$, $P(C) = \frac{1}{2}$
> - Target: $P\!\left((A \cap B)^C \cup C\right)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A \cap B)$**
> >
> > Karena $A$ dan $B$ saling bebas:
> >
> > $$P(A \cap B) = P(A)\cdot P(B) = \frac{1}{4}\cdot\frac{1}{6} = \frac{1}{24}$$
> >
> > **Langkah 2: Hitung $P((A \cap B)^C)$**
> >
> > $$P((A \cap B)^C) = 1 - P(A \cap B) = 1 - \frac{1}{24} = \frac{23}{24}$$
> >
> > **Langkah 3: Terapkan inklusi-eksklusi**
> >
> > $$P\!\left((A\cap B)^C \cup C\right) = P\!\left((A\cap B)^C\right) + P(C) - P\!\left((A\cap B)^C \cap C\right)$$
> >
> > Kita perlu $P\!\left((A\cap B)^C \cap C\right)$.
> >
> > **Langkah 4: Hitung $P((A \cap B)^C \cap C)$**
> >
> > Gunakan hukum komplemen:
> >
> > $$P\!\left((A\cap B)^C \cap C\right) = P(C) - P\!\left(A\cap B\cap C\right)$$
> >
> > Ini karena: $(A\cap B)^C \cap C$ adalah bagian dari $C$ yang **tidak** termasuk $A \cap B$, yaitu $C \setminus (A\cap B\cap C)$.
> >
> > Sekarang, $P(A\cap B\cap C)$: perhatikan bahwa $B$ dan $C$ **saling lepas**, sehingga $B \cap C = \emptyset$.
> >
> > Maka $A \cap B \cap C \subseteq B \cap C = \emptyset$, sehingga:
> >
> > $$P(A\cap B\cap C) = 0$$
> >
> > Jadi:
> >
> > $$P\!\left((A\cap B)^C \cap C\right) = P(C) - 0 = P(C) = \frac{1}{2}$$
> >
> > **Langkah 5: Substitusikan ke inklusi-eksklusi**
> >
> > $$P\!\left((A\cap B)^C \cup C\right) = \frac{23}{24} + \frac{1}{2} - \frac{1}{2} = \frac{23}{24}$$
> >
> > Perhatikan bahwa suku $P(C)$ dan $P\!\left((A\cap B)^C \cap C\right)$ saling menghapus!
> >
> > $$\boxed{P\!\left((A\cap B)^C \cup C\right) = \frac{23}{24}}$$
> >
> > **Catatan intuitif:** Karena $B \cap C = \emptyset$, maka $C \subseteq B^C$, yang berarti $C \subseteq (A\cap B)^C$. Jadi $C$ sudah termuat di dalam $(A\cap B)^C$, sehingga $(A\cap B)^C \cup C = (A\cap B)^C$, dan peluangnya langsung $\frac{23}{24}$.
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{23}{24}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan **saling bebas** (independent) dengan **saling lepas** (mutually exclusive) — keduanya berbeda secara fundamental. Saling lepas: $P(B\cap C)=0$; saling bebas: $P(A\cap B)=P(A)P(B)$.
> > > - Mengasumsikan bahwa karena $B\perp\!\!\!\perp A$ dan $B\cap C=\emptyset$, maka $A$ dan $C$ juga saling lepas — ini tidak dapat disimpulkan.
> > > - Salah menerapkan inklusi-eksklusi: menulis $P(E\cup F) = P(E) + P(F)$ tanpa mengurangi $P(E\cap F)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tidak menyadari bahwa karena $C \subseteq (A\cap B)^C$ (akibat $B\cap C=\emptyset$), maka gabungan $(A\cap B)^C \cup C$ sama dengan $(A\cap B)^C$ itu sendiri — langkah ini mempersingkat perhitungan secara signifikan.
> > > - Menjumlahkan $P((A\cap B)^C) + P(C)$ tanpa mengurangi irisan — menghasilkan $\frac{23}{24}+\frac{1}{2} = \frac{47}{24} > 1$, yang jelas salah.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mencampur **"saling bebas"** dan **"saling lepas"** dalam satu soal → baca ulang dengan teliti mana pasangan yang independen dan mana yang mutually exclusive.
> > > - Jika hasil inklusi-eksklusi lebih dari 1 → pasti ada kesalahan; periksa apakah suku irisan sudah dikurangi.
> > > - Jika soal menyebut $B \cap C = \emptyset$ dan ada ekspresi melibatkan $C$ → langsung periksa apakah $C$ sudah termuat di dalam komplemen yang relevan.

---
