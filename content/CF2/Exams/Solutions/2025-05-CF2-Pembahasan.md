## **No. 1**

Kerugian yang disebabkan oleh kebakaran pada gedung komersial dimodelkan dengan menggunakan variabel acak $X$ dengan fungsi kepadatan peluang sebagai berikut:

$$f(x) = \begin{cases} 0{,}005(20 - x), & \text{untuk } 0 < x < 20 \text{ miliar} \\ 0, & \text{selainnya} \end{cases}$$

Jika diketahui kerugian akibat kebakaran melebihi 8 miliar, berapakah peluang kerugian tersebut melebihi 16 miliar?

a. $\dfrac{1}{25}$  
b. $\dfrac{1}{9}$  
c. $\dfrac{1}{8}$  
d. $\dfrac{1}{3}$  
e. $\dfrac{3}{7}$

> [!summary]+ **Jawaban No. 1**
>
> **(b). $\dfrac{1}{9}$**
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
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> >
> > Di sini $A = \{X > 16\}$, $B = \{X > 8\}$, sehingga $A \cap B = \{X > 16\}$.
>
> **Diketahui:**
> - $f(x) = 0{,}005(20-x)$ untuk $0 < x < 20$ (kontinu, support $(0,20)$)
> - Target: $P(X > 16 \mid X > 8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Irisan**
> > $\{X > 16\} \cap \{X > 8\} = \{X > 16\}$
> >
> > **Langkah 2: Hitung $P(X > 16)$ — pembilang**
> >
> > $$P(X > 16) = \int_{16}^{20} 0{,}005(20-x)\,dx = 0{,}005\left[20x - \frac{x^2}{2}\right]_{16}^{20}$$
> >
> > $$= 0{,}005\left[\left(400 - 200\right) - \left(320 - 128\right)\right] = 0{,}005(200 - 192) = 0{,}005 \times 8 = 0{,}04$$
> >
> > **Langkah 3: Hitung $P(X > 8)$ — penyebut**
> >
> > $$P(X > 8) = \int_{8}^{20} 0{,}005(20-x)\,dx = 0{,}005\left[20x - \frac{x^2}{2}\right]_{8}^{20}$$
> >
> > $$= 0{,}005\left[(400-200)-(160-32)\right] = 0{,}005(200 - 128) = 0{,}005 \times 72 = 0{,}36$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(X > 16 \mid X > 8) = \frac{0{,}04}{0{,}36} = \frac{1}{9}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X>16)$ langsung sebagai jawaban tanpa mengkondisikan pada $\{X>8\}$.
> > > - Lupa bahwa untuk $A \subseteq B$ berlaku $P(A \cap B) = P(A)$, sehingga pembilang cukup $P(X>16)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kerugian melebihi 16" berarti $X > 16$, bukan $X \geq 16$ (karena kontinu, keduanya sama, tapi penting untuk diketahui).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "jika diketahui..." → selalu gunakan formula probabilitas bersyarat.
> > > - Jika $A \subset B$ → irisan langsung = $A$, tidak perlu hitung ulang.

---

## **No. 2**

Portofolio kerugian asuransi kebakaran, dinyatakan dengan variabel acak $X$, memiliki fungsi kepadatan peluang sebagai berikut:

$$f(x) = \begin{cases} \dfrac{(2{,}5)(200)^{2{,}5}}{x^{3{,}5}}, & \text{untuk } x > 200 \text{ juta} \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah perbedaan persentil ke-30 dan persentil ke-70 dari $X$! (Pilihlah jawaban yang paling mendekati!)

a. 35 juta  
b. 93 juta  
c. 124 juta  
d. 231 juta  
e. 298 juta

> [!summary]+ **Jawaban No. 2**
>
> **(b). $93$ juta**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi Pareto: CDF adalah $F(x) = 1 - \left(\dfrac{\theta}{x}\right)^{\alpha}$ untuk $x > \theta$.
> > Persentil ke-$p$: $F(\pi_p) = p \Rightarrow \pi_p = \theta(1-p)^{-1/\alpha}$.
> > Di sini $\alpha = 2{,}5$ (parameter shape) dan $\theta = 200$ (parameter scale/lokasi).
>
> **Diketahui:**
> - $f(x) = \dfrac{(2{,}5)(200)^{2{,}5}}{x^{3{,}5}}$ untuk $x > 200$ → distribusi Pareto dengan $\alpha = 2{,}5$, $\theta = 200$
> - Target: $\pi_{70} - \pi_{30}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan CDF**
> >
> > $$F(x) = \int_{200}^{x} \frac{(2{,}5)(200)^{2{,}5}}{t^{3{,}5}}\,dt = 1 - \left(\frac{200}{x}\right)^{2{,}5}$$
> >
> > **Langkah 2: Hitung Persentil ke-30 ($\pi_{30}$)**
> >
> > $$F(\pi_{30}) = 0{,}30 \Rightarrow 1 - \left(\frac{200}{\pi_{30}}\right)^{2{,}5} = 0{,}30$$
> >
> > $$\left(\frac{200}{\pi_{30}}\right)^{2{,}5} = 0{,}70 \Rightarrow \pi_{30} = \frac{200}{(0{,}70)^{0{,}4}}$$
> >
> > $$(0{,}70)^{0{,}4} = e^{0{,}4 \ln(0{,}70)} = e^{0{,}4 \times (-0{,}35667)} = e^{-0{,}14267} \approx 0{,}8671$$
> >
> > $$\pi_{30} \approx \frac{200}{0{,}8671} \approx 230{,}7 \text{ juta}$$
> >
> > **Langkah 3: Hitung Persentil ke-70 ($\pi_{70}$)**
> >
> > $$\left(\frac{200}{\pi_{70}}\right)^{2{,}5} = 0{,}30 \Rightarrow \pi_{70} = \frac{200}{(0{,}30)^{0{,}4}}$$
> >
> > $$(0{,}30)^{0{,}4} = e^{0{,}4 \ln(0{,}30)} = e^{0{,}4 \times (-1{,}20397)} = e^{-0{,}48159} \approx 0{,}6178$$
> >
> > $$\pi_{70} \approx \frac{200}{0{,}6178} \approx 323{,}7 \text{ juta}$$
> >
> > **Langkah 4: Hitung Selisih**
> >
> > $$\pi_{70} - \pi_{30} \approx 323{,}7 - 230{,}7 = 93{,}0 \text{ juta}$$
> >
> > **Hasil Akhir:** **(b)**. $93$ juta
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menukar $\alpha$ dan $1/\alpha$ saat menghitung invers CDF.
> > > - Lupa bahwa $0{,}4 = 1/2{,}5$, sehingga pangkat yang digunakan adalah $1/\alpha$ bukan $\alpha$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan $F(\pi_{70}) = 0{,}30$ (terbalik dengan $\pi_{30}$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut distribusi dengan PDF berbentuk $cx^{-(\alpha+1)}$ → ini Pareto, gunakan CDF analistik.
> > > - Selalu periksa: apakah support $x > \theta$ dan bukan $x > 0$.

---

## **No. 3**

Anda diberikan informasi sebagai berikut:

(i) $P(A \cup B) = 0{,}7$  
(ii) $P(A \cup B^C) = 0{,}9$

Tentukan $P(A)$!

a. $0{,}2$  
b. $0{,}3$  
c. $0{,}4$  
d. $0{,}6$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 3**
>
> **(d). $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
> >
> > $$P(A \cup B^C) = P(A) + P(B^C) - P(A \cap B^C)$$
> >
> > $$P(A) = P(A \cap B) + P(A \cap B^C)$$
> >
>
> **Diketahui:**
> - $P(A \cup B) = 0{,}7$
> - $P(A \cup B^C) = 0{,}9$
> - Target: $P(A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspresikan kedua persamaan**
> >
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}7 \quad \cdots (1)$$
> >
> > $$P(A \cup B^C) = P(A) + P(B^C) - P(A \cap B^C) = 0{,}9 \quad \cdots (2)$$
> >
> > **Langkah 2: Jumlahkan (1) dan (2)**
> >
> > $$(1)+(2): \quad 2P(A) + P(B) + P(B^C) - P(A \cap B) - P(A \cap B^C) = 1{,}6$$
> >
> > Karena $P(B) + P(B^C) = 1$ dan $P(A \cap B) + P(A \cap B^C) = P(A)$:
> >
> > $$2P(A) + 1 - P(A) = 1{,}6$$
> >
> > $$P(A) = 0{,}6$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa identitas $P(A \cap B) + P(A \cap B^C) = P(A)$ (partisi $A$ oleh $B$).
> > > - Tidak memanfaatkan $P(B) + P(B^C) = 1$ saat menjumlahkan dua persamaan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah membaca $P(A \cup B^C)$ sebagai $P(A \cup B)^C$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan dua persamaan dengan komplemen → coba jumlahkan kedua persamaan dan manfaatkan identitas komplemen.

---

## **No. 4**

Suatu perusahaan manufaktur yang memproduksi bohlam lampu dengan umur hidup yang diukur dalam bulan, diketahui mengikuti distribusi normal dengan mean sebesar 3 dan varians sebesar 1. Krisna membeli beberapa bohlam lampu untuk menggantikan bohlam-bohlam yang rusak. Bohlam lampu memiliki umur hidup yang saling bebas.

Berapakah minimum banyaknya bohlam yang harus dibeli oleh Krisna agar dapat digunakan setidaknya 40 bulan dengan peluang setidaknya $0{,}9772$?

a. 14  
b. 16  
c. 20  
d. 40  
e. 55

> [!summary]+ **Jawaban No. 4**
>
> **(b). $16$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] · [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $X_i \sim N(\mu, \sigma^2)$ i.i.d., maka $S_n = \sum_{i=1}^n X_i \sim N(n\mu, n\sigma^2)$.
> >
> > $$P(S_n \geq 40) \geq 0{,}9772$$
> >
>
> **Diketahui:**
> - $X_i \sim N(3, 1)$ i.i.d., $\mu = 3$, $\sigma^2 = 1$
> - Target: $\min n$ sehingga $P(S_n \geq 40) \geq 0{,}9772$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi Total Umur**
> > $S_n = X_1 + \cdots + X_n \sim N(3n, n)$
> >
> > **Langkah 2: Standardisasi**
> >
> > $$P(S_n \geq 40) = P\!\left(Z \geq \frac{40 - 3n}{\sqrt{n}}\right) \geq 0{,}9772$$
> >
> > Karena $P(Z \geq -2) = 0{,}9772$, kita butuh:
> >
> > $$\frac{40 - 3n}{\sqrt{n}} \leq -2$$
> >
> > **Langkah 3: Selesaikan Pertidaksamaan**
> >
> > $$40 - 3n \leq -2\sqrt{n}$$
> >
> > $$3n - 2\sqrt{n} - 40 \geq 0$$
> >
> > Substitusi $u = \sqrt{n}$: $3u^2 - 2u - 40 \geq 0$
> >
> > $$u = \frac{2 \pm \sqrt{4 + 480}}{6} = \frac{2 \pm 22}{6}$$
> >
> > Ambil akar positif: $u = \frac{24}{6} = 4$, sehingga $\sqrt{n} \geq 4 \Rightarrow n \geq 16$.
> >
> > **Langkah 4: Verifikasi**
> > Untuk $n = 16$: $\frac{40 - 48}{4} = \frac{-8}{4} = -2$ → $P(Z \geq -2) = 0{,}9772$ ✓
> >
> > **Hasil Akhir:** **(b)**. $16$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(Z \geq 2) = 0{,}9772$ alih-alih $P(Z \geq -2) = 0{,}9772$.
> > > - Lupa bahwa $P(Z \geq -2) = \Phi(2) \approx 0{,}9772$ karena simetri distribusi normal.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Dapat digunakan setidaknya 40 bulan" = total umur $S_n \geq 40$, bukan rata-rata $\geq 40$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "peluang setidaknya $0{,}9772$" → ingat $\Phi(2) \approx 0{,}9772$ dan nilai kritis $z = -2$ untuk ekor kiri.

---

## **No. 5**

Rumah Sakit Sumber Sehat menerima $\frac{1}{5}$ dari keseluruhan pengiriman vaksin flu dari perusahaan farmasi X dan sisanya dari perusahaan farmasi selainnya. Setiap pengiriman memuat vial vaksin dengan jumlah yang sangat banyak. Untuk pengiriman yang dilakukan oleh farmasi X, 10% vial dinyatakan tidak efektif. Untuk setiap perusahaan farmasi yang lainnya, 2% vial dinyatakan tidak efektif. Pihak rumah sakit melakukan pengujian terhadap 30 vial yang diambil secara acak dari vial-vial yang dikirimkan oleh seluruh perusahaan farmasi dan menemukan bahwa 1 vial tidak efektif.

Tentukan peluang bahwa 1 vial yang tidak efektif tersebut berasal dari Perusahaan farmasi X! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}10$  
b. $0{,}14$  
c. $0{,}37$  
d. $0{,}63$  
e. $0{,}86$

> [!summary]+ **Jawaban No. 5**
>
> **(a). $0{,}10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > **Teorema Bayes:**
> >
> > $$P(H \mid E) = \frac{P(E \mid H) \cdot P(H)}{P(E)}$$
> >
> > **Distribusi Binomial:** $P(X = k \mid n, p) = \binom{n}{k}p^k(1-p)^{n-k}$
>
> **Diketahui:**
> - $P(\text{X}) = 1/5$, $P(\text{lain}) = 4/5$
> - $p_X = 0{,}10$ (prob. tidak efektif dari X), $p_{\text{lain}} = 0{,}02$
> - 30 vial diuji, 1 tidak efektif; Target: $P(\text{X} \mid k=1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(k=1 \mid \text{dari X})$**
> > Jika pengiriman dari X: $K \sim B(30, 0{,}10)$
> >
> > $$P(K=1 \mid X) = \binom{30}{1}(0{,}10)^1(0{,}90)^{29} = 30 \times 0{,}10 \times (0{,}90)^{29}$$
> >
> > $(0{,}90)^{29} \approx 0{,}04661$
> >
> > $$P(K=1 \mid X) \approx 30 \times 0{,}10 \times 0{,}04661 = 0{,}13983$$
> >
> > **Langkah 2: Hitung $P(k=1 \mid \text{dari lain})$**
> > Jika pengiriman dari lain: $K \sim B(30, 0{,}02)$
> >
> > $$P(K=1 \mid \text{lain}) = \binom{30}{1}(0{,}02)^1(0{,}98)^{29} = 30 \times 0{,}02 \times (0{,}98)^{29}$$
> >
> > $(0{,}98)^{29} \approx 0{,}5580$
> >
> > $$P(K=1 \mid \text{lain}) \approx 30 \times 0{,}02 \times 0{,}5580 = 0{,}33480$$
> >
> > **Langkah 3: Hitung $P(k=1)$ dengan Hukum Probabilitas Total**
> >
> > $$P(K=1) = P(K=1 \mid X) \cdot P(X) + P(K=1 \mid \text{lain}) \cdot P(\text{lain})$$
> >
> > $$= 0{,}13983 \times \frac{1}{5} + 0{,}33480 \times \frac{4}{5}$$
> >
> > $$= 0{,}02797 + 0{,}26784 = 0{,}29581$$
> >
> > **Langkah 4: Terapkan Teorema Bayes**
> >
> > $$P(X \mid K=1) = \frac{P(K=1 \mid X) \cdot P(X)}{P(K=1)} = \frac{0{,}02797}{0{,}29581} \approx 0{,}0945 \approx 0{,}10$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan proporsi 10%/2% langsung sebagai likelihood tanpa mempertimbangkan distribusi binomial dari sampel 30 vial.
> > > - Mengabaikan fakta bahwa pengujian dilakukan atas 30 vial (sampel), bukan seluruh populasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah mengartikan "1 vial tidak efektif berasal dari X" sebagai soal tanpa distribusi binomial.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "n vial diambil acak dan ditemukan k tidak efektif" → gunakan likelihood Binomial di dalam Bayes.

---

## **No. 6**

Suatu perusahaan elektronik memberikan garansi mesin yang menyatakan bahwa mesin akan digantikan jika terjadi kerusakan atau jika mesin sudah berusia 4 tahun, yang mana yang terlebih dahulu terjadi. Usia mesin pada saat terjadi kegagalan, $X$, memiliki fungsi kepadatan peluang sebagai berikut:

$$f(x) = \begin{cases} \dfrac{1}{5}, & \text{untuk } 0 < x < 5 \\ 0, & \text{selainnya} \end{cases}$$

$Y$ merupakan usia dari mesin pada saat penggantian. Tentukan varians dari $Y$! (Pilihlah jawaban yang paling mendekati!)

a. $1{,}3$  
b. $1{,}4$  
c. $1{,}7$  
d. $2{,}1$  
e. $7{,}5$

> [!summary]+ **Jawaban No. 6**
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
> > $Y = \min(X, 4)$: variabel campuran (mixed).
> >
> > $$E[Y] = \int_0^4 x \cdot f(x)\,dx + 4 \cdot P(X \geq 4)$$
> >
> > $$E[Y^2] = \int_0^4 x^2 \cdot f(x)\,dx + 16 \cdot P(X \geq 4)$$
> >
> > $$\text{Var}(Y) = E[Y^2] - (E[Y])^2$$
> >
>
> **Diketahui:**
> - $X \sim U(0,5)$: $f(x) = 1/5$ untuk $0 < x < 5$
> - $Y = \min(X, 4)$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $P(X \geq 4)$**
> >
> > $$P(X \geq 4) = \int_4^5 \frac{1}{5}\,dx = \frac{1}{5}$$
> >
> > **Langkah 2: Hitung $E[Y]$**
> >
> > $$E[Y] = \int_0^4 x \cdot \frac{1}{5}\,dx + 4 \cdot \frac{1}{5} = \frac{1}{5}\cdot\frac{16}{2} + \frac{4}{5} = \frac{8}{5} + \frac{4}{5} = \frac{12}{5} = 2{,}4$$
> >
> > **Langkah 3: Hitung $E[Y^2]$**
> >
> > $$E[Y^2] = \int_0^4 x^2 \cdot \frac{1}{5}\,dx + 16 \cdot \frac{1}{5} = \frac{1}{5}\cdot\frac{64}{3} + \frac{16}{5} = \frac{64}{15} + \frac{48}{15} = \frac{112}{15} \approx 7{,}467$$
> >
> > **Langkah 4: Hitung Varians**
> >
> > $$\text{Var}(Y) = \frac{112}{15} - (2{,}4)^2 = \frac{112}{15} - \frac{144}{25} = \frac{2800 - 2160}{375} = \frac{640}{375} \approx 1{,}707 \approx 1{,}7$$
> >
> > **Hasil Akhir:** **(c)**. $1{,}7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(Y)$ menggunakan distribusi $X$ uniform secara langsung tanpa mempertimbangkan truncation di $y = 4$.
> > > - Melupakan titik massa pada $Y = 4$ (probabilitas $1/5$) yang membuat $Y$ menjadi variabel campuran.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah menafsirkan "digantikan jika terjadi kerusakan atau usia 4 tahun" sebagai $Y = X$ tanpa batasan atas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "yang mana terlebih dahulu terjadi" → ini $\min(X, c)$, bukan $X$ biasa.
> > > - Variabel $Y = \min(X,c)$ selalu bersifat campuran: kontinu di $(0,c)$ dan titik massa di $c$.

---

## **No. 7**

Suatu pengujian diagnostik mengenai pendeteksian suatu penyakit memiliki 2 kemungkinan: 1 jika terdapat penyakit dan 0 jika tidak terdapat penyakit.

Misal $X$ merupakan kondisi keberadaan penyakit pasien saat ini dan $Y$ merupakan hasil pengecekan diagnostik. Fungsi kepadatan peluang bersama dari $X$ dan $Y$ diberikan sebagai berikut:

$$P(X = 0, Y = 0) = 0{,}800$$

$$P(X = 0, Y = 1) = 0{,}025$$

$$P(X = 1, Y = 0) = 0{,}050$$

$$P(X = 1, Y = 1) = 0{,}125$$

Hitunglah $Var(Y | X = 1)$! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}13$  
b. $0{,}15$  
c. $0{,}20$  
d. $0{,}51$  
e. $0{,}71$

> [!summary]+ **Jawaban No. 7**
>
> **(c). $0{,}20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] · [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(Y = y \mid X = x) = \frac{P(X=x, Y=y)}{P(X=x)}$$
> >
> > $$\text{Var}(Y \mid X=x) = E[Y^2 \mid X=x] - (E[Y \mid X=x])^2$$
> >
> > Untuk variabel Bernoulli bersyarat: $\text{Var}(Y|X=1) = p(1-p)$ dengan $p = P(Y=1|X=1)$.
>
> **Diketahui:**
> - Joint PMF diberikan
> - Target: $\text{Var}(Y \mid X = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Marginal $P(X=1)$**
> >
> > $$P(X=1) = P(X=1,Y=0) + P(X=1,Y=1) = 0{,}050 + 0{,}125 = 0{,}175$$
> >
> > **Langkah 2: Hitung Distribusi Bersyarat $Y \mid X=1$**
> >
> > $$P(Y=0 \mid X=1) = \frac{0{,}050}{0{,}175} = \frac{2}{7} \approx 0{,}2857$$
> >
> > $$P(Y=1 \mid X=1) = \frac{0{,}125}{0{,}175} = \frac{5}{7} \approx 0{,}7143$$
> >
> > **Langkah 3: Hitung Variansi Bersyarat**
> > $Y \mid X=1 \sim \text{Bernoulli}(p)$ dengan $p = 5/7$.
> >
> > $$\text{Var}(Y \mid X=1) = p(1-p) = \frac{5}{7} \times \frac{2}{7} = \frac{10}{49} \approx 0{,}204 \approx 0{,}20$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X=1)$ yang keliru (misalnya tidak menjumlahkan seluruh nilai $Y$).
> > > - Lupa normalisasi: distribusi bersyarat harus dijumlahkan menjadi 1.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung $\text{Var}(Y)$ marginal alih-alih $\text{Var}(Y \mid X=1)$ bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Y$ bersyarat hanya bernilai 0 atau 1 → langsung gunakan rumus Bernoulli $p(1-p)$.

---

## **No. 8**

Misal $X_1, X_2, X_3$ merupakan variabel acak dari sebaran diskret dengan fungsi kepadatan peluang sebagai berikut:

$$p(x) = \begin{cases} \dfrac{1}{3}, & x = 0 \\ \dfrac{2}{3}, & x = 1 \\ 0, & \text{selainnya} \end{cases}$$

Tentukanlah fungsi pembangkit momen $M(t)$ dari $Y = X_1 X_2 X_3$!

a. $\dfrac{19}{27} + \dfrac{8}{27}e^{t}$  
b. $1 + 2e^{t}$  
c. $\left(\dfrac{1}{3} + \dfrac{2}{3}e^{t}\right)^3$  
d. $\dfrac{1}{27} + \dfrac{8}{27}e^{t}$  
e. $\dfrac{1}{3} + \dfrac{2}{3}e^{3t}$

> [!summary]+ **Jawaban No. 8**
>
> **(a). $\dfrac{19}{27} + \dfrac{8}{27}e^{t}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] · [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > $$M_Y(t) = E[e^{tY}] = \sum_y e^{ty} P(Y=y)$$
> >
> > Untuk $Y = X_1 X_2 X_3$ dengan $X_i \in \{0,1\}$: $Y = 1$ hanya jika $X_1 = X_2 = X_3 = 1$.
>
> **Diketahui:**
> - $X_i \sim \text{Bernoulli}(2/3)$ i.i.d., support $\{0,1\}$
> - $Y = X_1 X_2 X_3$
> - Target: $M_Y(t)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $Y$**
> > Karena $X_i \in \{0,1\}$, produk $Y = X_1 X_2 X_3$ juga bernilai 0 atau 1.
> > $Y = 1 \Leftrightarrow X_1 = X_2 = X_3 = 1$ (karena jika ada yang 0, produknya 0).
> >
> > $$P(Y=1) = P(X_1=1) \cdot P(X_2=1) \cdot P(X_3=1) = \left(\frac{2}{3}\right)^3 = \frac{8}{27}$$
> >
> > $$P(Y=0) = 1 - \frac{8}{27} = \frac{19}{27}$$
> >
> > **Langkah 2: Hitung MGF**
> >
> > $$M_Y(t) = e^{t \cdot 0} \cdot P(Y=0) + e^{t \cdot 1} \cdot P(Y=1) = \frac{19}{27} + \frac{8}{27}e^t$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{19}{27} + \dfrac{8}{27}e^{t}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memilih opsi (c): $\left(\frac{1}{3}+\frac{2}{3}e^t\right)^3$ adalah MGF dari $X_1+X_2+X_3$, bukan $X_1 X_2 X_3$.
> > > - Mengira MGF produk = produk MGF (ini hanya berlaku untuk penjumlahan variabel bebas, bukan perkalian).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $Y = X_1 X_2 X_3$ (perkalian), bukan $X_1 + X_2 + X_3$ (penjumlahan).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mendefinisikan $Y$ sebagai *produk* variabel Bernoulli → tentukan PMF $Y$ terlebih dahulu, baru hitung MGF langsung dari definisi.

---

## **No. 9**

Banyaknya hari yang dilalui di antara awal tahun kalender dan kejadian di mana pengendara berisiko tinggi terlibat dalam suatu kecelakaan diketahui mengikuti distribusi eksponensial. Perusahaan asuransi menduga 30% pengendara berisiko tinggi akan terlibat dalam suatu kecelakaan dalam 50 hari pertama pada suatu tahun kalender.

Berapa porsi pengendara berisiko tinggi yang diekspektasikan akan terlibat kecelakaan dalam 80 hari pertama dalam suatu tahun kalender? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}15$  
b. $0{,}34$  
c. $0{,}43$  
d. $0{,}57$  
e. $0{,}66$

> [!summary]+ **Jawaban No. 9**
>
> **(c). $0{,}43$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim \text{Exp}(\lambda)$: $F(x) = 1 - e^{-\lambda x}$ untuk $x > 0$.
> > Di sini $\lambda$ adalah rate (bukan scale). $E[X] = 1/\lambda$.
>
> **Diketahui:**
> - $P(X \leq 50) = 0{,}30$
> - Target: $P(X \leq 80)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan Parameter $\lambda$**
> >
> > $$P(X \leq 50) = 1 - e^{-50\lambda} = 0{,}30$$
> >
> > $$e^{-50\lambda} = 0{,}70 \Rightarrow -50\lambda = \ln(0{,}70) \Rightarrow \lambda = -\frac{\ln(0{,}70)}{50} = \frac{0{,}35667}{50} \approx 0{,}007133$$
> >
> > **Langkah 2: Hitung $P(X \leq 80)$**
> >
> > $$P(X \leq 80) = 1 - e^{-80\lambda} = 1 - e^{-80 \times 0{,}007133} = 1 - e^{-0{,}5707}$$
> >
> > $$= 1 - (0{,}70)^{80/50} = 1 - (0{,}70)^{1{,}6}$$
> >
> > $$(0{,}70)^{1{,}6} = e^{1{,}6 \times \ln(0{,}70)} = e^{1{,}6 \times (-0{,}35667)} = e^{-0{,}57067} \approx 0{,}5653$$
> >
> > $$P(X \leq 80) \approx 1 - 0{,}5653 = 0{,}4347 \approx 0{,}43$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}43$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan skala linear: $P(X \leq 80) = 80/50 \times 0{,}30 = 0{,}48$ — ini salah karena eksponensial tidak linear.
> > > - Menggunakan memoryless property secara keliru di sini (memoryless berlaku untuk probabilitas bersyarat, bukan untuk $P(X \leq 80)$ langsung).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan satu probabilitas distribusi eksponensial → gunakan untuk mencari $\lambda$, lalu hitung probabilitas lain.
> > > - Trik: $P(X \leq t_2) = 1 - (1-P(X \leq t_1))^{t_2/t_1}$ untuk distribusi eksponensial.

---

## **No. 10**

Suatu perusahaan asuransi umum menanggung risiko pengendara dalam jumlah yang besar. Misal $X$ merepresentasikan besaran kerugian (dalam juta) yang dialami atas asuransi kecelakaan kendaraan bermotor, dan $Y$ merepresentasikan besaran kerugian (dalam juta) atas asuransi tanggung gugat. $X$ dan $Y$ memiliki fungsi kepadatan peluang bersama sebagai berikut:

$$f(x, y) = \begin{cases} \dfrac{2x + 2 - y}{4}, & \text{untuk } 0 < x < 1 \text{ dan } 0 < y < 2 \\ 0, & \text{selainnya} \end{cases}$$

Berapa peluang total kerugian setidaknya 1 juta? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}33$  
b. $0{,}38$  
c. $0{,}41$  
d. $0{,}71$  
e. $0{,}75$

> [!summary]+ **Jawaban No. 10**
>
> **(d). $0{,}71$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(X + Y \geq 1) = \iint_{x+y \geq 1} f(x,y)\,dx\,dy$$
> >
> > Lebih mudah: $P(X+Y \geq 1) = 1 - P(X+Y < 1)$.
>
> **Diketahui:**
> - $f(x,y) = \dfrac{2x+2-y}{4}$ untuk $0<x<1$, $0<y<2$
> - Target: $P(X+Y \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X+Y < 1)$ dengan mengintegralkan di wilayah $x+y<1$, $x>0$, $y>0$**
> > Wilayah: $0 < x < 1$, $0 < y < 1-x$ (dan $y < 2$, otomatis terpenuhi karena $y < 1-x < 1 < 2$).
> >
> > $$P(X+Y<1) = \int_0^1 \int_0^{1-x} \frac{2x+2-y}{4}\,dy\,dx$$
> >
> > **Langkah 2: Integral dalam (terhadap $y$)**
> >
> > $$\int_0^{1-x} \frac{2x+2-y}{4}\,dy = \frac{1}{4}\left[(2x+2)y - \frac{y^2}{2}\right]_0^{1-x}$$
> >
> > $$= \frac{1}{4}\left[(2x+2)(1-x) - \frac{(1-x)^2}{2}\right]$$
> >
> > $$= \frac{(1-x)}{4}\left[(2x+2) - \frac{(1-x)}{2}\right] = \frac{(1-x)}{4} \cdot \frac{4x+4-1+x}{2} = \frac{(1-x)(5x+3)}{8}$$
> >
> > **Langkah 3: Integral luar (terhadap $x$)**
> >
> > $$P(X+Y<1) = \int_0^1 \frac{(1-x)(5x+3)}{8}\,dx = \frac{1}{8}\int_0^1 (5x+3-5x^2-3x)\,dx$$
> >
> > $$= \frac{1}{8}\int_0^1 (2x+3-5x^2)\,dx = \frac{1}{8}\left[x^2+3x-\frac{5x^3}{3}\right]_0^1$$
> >
> > $$= \frac{1}{8}\left(1+3-\frac{5}{3}\right) = \frac{1}{8}\cdot\frac{7}{3} = \frac{7}{24} \approx 0{,}2917$$
> >
> > **Langkah 4: Hitung $P(X+Y \geq 1)$**
> >
> > $$P(X+Y \geq 1) = 1 - \frac{7}{24} = \frac{17}{24} \approx 0{,}708 \approx 0{,}71$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}71$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegralkan langsung $P(X+Y \geq 1)$ tanpa memperhatikan batas wilayah integrasi yang rumit — lebih mudah melalui komplemen.
> > > - Kesalahan batas integral: ketika $x$ mendekati 1, batas $y$ dari $1-x$ mendekati 0.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut $P(X+Y \geq c)$ dengan $c$ di tengah support → gunakan komplemen dan pisahkan wilayah integrasi.

---
## **No. 11**

Suatu produk asuransi memiliki pola profit yang direpresentasikan oleh formula berikut:

$$Z = 3X - Y - 5$$

$X$ dan $Y$ merupakan variabel acak yang saling bebas dengan $\text{Var}(X) = 1$ dan $\text{Var}(Y) = 2$.

Berapakah varians dari $Z$?

a. $1$  
b. $5$  
c. $7$  
d. $11$  
e. $16$

> [!summary]+ **Jawaban No. 11**
>
> **(d). $11$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] · [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk dua variabel acak $X$ dan $Y$ yang **saling bebas (independen)**:
> >
> > $$\text{Var}(aX + bY + c) = a^2\,\text{Var}(X) + b^2\,\text{Var}(Y)$$
> >
> > Catatan penting: konstanta $c$ **tidak mempengaruhi varians** sama sekali — varians hanya mengukur penyebaran, bukan posisi. Koefisien $a$ dan $b$ dikuadratkan karena varians bersifat kuadratik.
>
> **Diketahui:**
> - $\text{Var}(X) = 1$, $\text{Var}(Y) = 2$
> - $X$ dan $Y$ saling bebas → $\text{Cov}(X, Y) = 0$
> - $Z = 3X - Y - 5$, artinya $a = 3$, $b = -1$, $c = -5$
> - Target: $\text{Var}(Z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Koefisien**
> > Tulis ulang $Z = 3X + (-1)Y + (-5)$.
> > - Koefisien $X$ adalah $a = 3$
> > - Koefisien $Y$ adalah $b = -1$
> > - Konstanta adalah $c = -5$
> >
> > **Langkah 2: Terapkan Rumus Varians Kombinasi Linear**
> > Karena $X \perp Y$ (independen), kovarians nol, sehingga:
> >
> > $$\text{Var}(Z) = a^2\,\text{Var}(X) + b^2\,\text{Var}(Y)$$
> >
> > $$\text{Var}(Z) = (3)^2 \cdot 1 + (-1)^2 \cdot 2$$
> >
> > $$= 9 \cdot 1 + 1 \cdot 2 = 9 + 2 = 11$$
> >
> > **Mengapa konstanta $-5$ hilang?**
> > Varians mengukur seberapa jauh nilai menyebar dari rata-ratanya. Menambahkan konstanta hanya menggeser semua nilai secara bersamaan — jarak antar nilai tidak berubah, sehingga penyebaran (varians) tidak berubah.
> >
> > **Hasil Akhir:** **(d)**. $11$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menyertakan konstanta dalam varians:** menulis $\text{Var}(Z) = 9(1) + 1(2) + (-5)^2 = 36$ — ini salah. Konstanta *tidak* masuk ke rumus varians.
> > > - **Lupa mengkuadratkan koefisien:** menulis $3\,\text{Var}(X) + \text{Var}(Y) = 3(1) + 1(2) = 5$ (pilihan b) — ingat, rumusnya $a^2$, bukan $a$.
> > > - **Menganggap koefisien negatif berpengaruh pada tanda varians:** $(-1)^2 = 1$, bukan $-1$. Varians selalu non-negatif.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut variabel *saling bebas* → $\text{Cov} = 0$, tidak ada suku silang $2ab\,\text{Cov}(X,Y)$.
> > > - Jika variabel **tidak** independen → rumus lengkapnya: $\text{Var}(aX+bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$.
> > > - Konstanta (angka tanpa variabel) **selalu hilang** dalam varians — tanpa kecuali.

---

## **No. 12**

Suatu perangkat terdiri dari dua sirkuit. Sirkuit kedua merupakan cadangan dari sirkuit yang pertama, sehingga sirkuit kedua hanya akan digunakan ketika sirkuit pertama mengalami kegagalan. Perangkat dinyatakan gagal jika dan hanya jika sirkuit kedua mengalami kegagalan. Misal $X$ dan $Y$ secara berurutan merupakan waktu dimana sirkuit pertama dan sirkuit kedua mengalami kegagalan.

$X$ dan $Y$ memiliki fungsi kepadatan peluang bersama sebagai berikut:

$$f(x, y) = \begin{cases} 6e^{-x}e^{-2y}, & \text{untuk } 0 < x < y < \infty \\ 0, & \text{selainnya} \end{cases}$$

Berapakah nilai harapan waktu di mana perangkat dinyatakan gagal? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}33$  
b. $0{,}50$  
c. $0{,}67$  
d. $0{,}83$  
e. $1{,}00$

> [!summary]+ **Jawaban No. 12**
>
> **(d). $0{,}83$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Marginal** — untuk "membuang" variabel yang tidak diperlukan:
> >
> > $$f_Y(y) = \int_{-\infty}^{\infty} f(x, y)\, dx$$
> >
> > Batas integrasi disesuaikan dengan support yang berlaku untuk $x$ pada nilai $y$ tertentu.
> >
> > **Nilai Harapan** dari distribusi marginal:
> >
> > $$E[Y] = \int_0^\infty y \cdot f_Y(y)\, dy$$
> >
> > **Rumus integral standar** (wajib hafal untuk Exam CF2):
> >
> > $$\int_0^\infty y\, e^{-\lambda y}\, dy = \frac{1}{\lambda^2}$$
> >
>
> **Diketahui:**
> - $f(x,y) = 6e^{-x}e^{-2y}$ untuk $0 < x < y < \infty$
> - Support: $x$ selalu lebih kecil dari $y$ (sirkuit pertama gagal lebih dulu, lalu sirkuit kedua)
> - Perangkat gagal pada saat $Y$ (bukan $X$)
> - Target: $E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pahami Support — Ini Langkah Paling Kritis**
> > Support-nya adalah $0 < x < y < \infty$, artinya untuk nilai $y$ yang tetap, $x$ hanya bisa bernilai dari $0$ sampai $y$ (bukan sampai $\infty$). Ini masuk akal secara fisik: sirkuit pertama harus gagal *sebelum* sirkuit kedua.
> >
> > **Langkah 2: Hitung Distribusi Marginal $f_Y(y)$**
> > Marginalisasi terhadap $x$ (eliminasi $x$):
> >
> > $$f_Y(y) = \int_0^y 6e^{-x}e^{-2y}\, dx$$
> >
> > Karena $e^{-2y}$ tidak bergantung pada $x$, keluarkan dari integral:
> >
> > $$= 6e^{-2y} \int_0^y e^{-x}\, dx$$
> >
> > Hitung integral: $\displaystyle\int_0^y e^{-x}\, dx = \left[-e^{-x}\right]_0^y = -e^{-y} - (-e^{0}) = 1 - e^{-y}$
> >
> > $$f_Y(y) = 6e^{-2y}(1 - e^{-y}) = 6e^{-2y} - 6e^{-3y}, \quad y > 0$$
> >
> > **Langkah 3: Verifikasi $f_Y(y)$ adalah PDF yang valid (opsional tapi disarankan)**
> >
> > $$\int_0^\infty (6e^{-2y} - 6e^{-3y})\, dy = \frac{6}{2} - \frac{6}{3} = 3 - 2 = 1 \checkmark$$
> >
> > **Langkah 4: Hitung $E[Y]$**
> >
> > $$E[Y] = \int_0^\infty y(6e^{-2y} - 6e^{-3y})\, dy = 6\int_0^\infty ye^{-2y}\,dy - 6\int_0^\infty ye^{-3y}\,dy$$
> >
> > Gunakan rumus $\displaystyle\int_0^\infty ye^{-\lambda y}\,dy = \frac{1}{\lambda^2}$:
> > - Untuk $\lambda = 2$: $\displaystyle\int_0^\infty ye^{-2y}\,dy = \frac{1}{4}$
> > - Untuk $\lambda = 3$: $\displaystyle\int_0^\infty ye^{-3y}\,dy = \frac{1}{9}$
> >
> > $$E[Y] = 6 \cdot \frac{1}{4} - 6 \cdot \frac{1}{9} = \frac{6}{4} - \frac{6}{9} = \frac{3}{2} - \frac{2}{3}$$
> >
> > Samakan penyebut (KPK = 6):
> >
> > $$= \frac{9}{6} - \frac{4}{6} = \frac{5}{6} \approx 0{,}833$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}83$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah batas atas saat marginalisasi:** menggunakan $\int_0^\infty e^{-x}\,dx$ — ini salah karena batas atas $x$ adalah $y$ (bukan $\infty$), sesuai constraint $x < y$.
> > > - **Menghitung $E[X]$ bukan $E[Y]$:** perangkat gagal pada waktu $Y$ (kegagalan sirkuit cadangan), bukan $X$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Perangkat gagal jika sirkuit kedua gagal" → yang dicari adalah $E[Y]$, bukan $E[X+Y]$ atau $E[X]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika support berbunyi $0 < x < y$ → batas integrasi untuk $x$ saat menghitung $f_Y(y)$ adalah dari $0$ ke $y$, **bukan** $0$ ke $\infty$.
> > > - Hafal rumus $\int_0^\infty ye^{-\lambda y}dy = 1/\lambda^2$ — sering muncul di soal CF2 yang melibatkan distribusi eksponensial.

---

## **No. 13**

Sebaran peluang dari besaran klaim (claim severity) untuk suatu polis asuransi kendaraan bermotor diberikan oleh tabel berikut:

| Besaran Klaim (dalam juta) | Peluang |
|:-:|:-:|
| $20$ | $0{,}15$ |
| $30$ | $0{,}10$ |
| $40$ | $0{,}05$ |
| $50$ | $0{,}20$ |
| $60$ | $0{,}10$ |
| $70$ | $0{,}10$ |
| $80$ | $0{,}30$ |

Berapa persen klaim berada dalam satu deviasi standar dari rataan besaran klaim?

a. $45\%$  
b. $55\%$  
c. $65\%$  
d. $85\%$  
e. $100\%$

> [!summary]+ **Jawaban No. 13**
>
> **(a). $45\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$E[X] = \sum_x x \cdot p(x), \qquad E[X^2] = \sum_x x^2 \cdot p(x)$$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2, \qquad \sigma = \sqrt{\text{Var}(X)}$$
> >
> > Interval "satu deviasi standar dari rataan": $(\mu - \sigma,\; \mu + \sigma)$
> > Jawaban akhir: $P(\mu - \sigma < X < \mu + \sigma) = \sum_{x \in \text{interval}} p(x)$
>
> **Diketahui:**
> - Distribusi diskrit dengan 7 nilai (20, 30, 40, 50, 60, 70, 80)
> - Target: persentase peluang yang jatuh dalam interval $(\mu - \sigma, \mu + \sigma)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Rata-rata $E[X] = \mu$**
> > Kalikan setiap nilai klaim dengan peluangnya, lalu jumlahkan:
> >
> > | $x$ | $p(x)$ | $x \cdot p(x)$ |
> > |:-:|:-:|:-:|
> > | $20$ | $0{,}15$ | $3{,}00$ |
> > | $30$ | $0{,}10$ | $3{,}00$ |
> > | $40$ | $0{,}05$ | $2{,}00$ |
> > | $50$ | $0{,}20$ | $10{,}00$ |
> > | $60$ | $0{,}10$ | $6{,}00$ |
> > | $70$ | $0{,}10$ | $7{,}00$ |
> > | $80$ | $0{,}30$ | $24{,}00$ |
> >
> > $$E[X] = 3+3+2+10+6+7+24 = 55$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> > Kalikan setiap nilai *kuadrat* dengan peluangnya:
> >
> > | $x$ | $x^2$ | $p(x)$ | $x^2 \cdot p(x)$ |
> > |:-:|:-:|:-:|:-:|
> > | $20$ | $400$ | $0{,}15$ | $60$ |
> > | $30$ | $900$ | $0{,}10$ | $90$ |
> > | $40$ | $1{.}600$ | $0{,}05$ | $80$ |
> > | $50$ | $2{.}500$ | $0{,}20$ | $500$ |
> > | $60$ | $3{.}600$ | $0{,}10$ | $360$ |
> > | $70$ | $4{.}900$ | $0{,}10$ | $490$ |
> > | $80$ | $6{.}400$ | $0{,}30$ | $1{.}920$ |
> >
> > $$E[X^2] = 60+90+80+500+360+490+1{.}920 = 3{.}500$$
> >
> > **Langkah 3: Hitung Varians dan Deviasi Standar**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = 3{.}500 - 55^2 = 3{.}500 - 3{.}025 = 475$$
> >
> > $$\sigma = \sqrt{475} \approx 21{,}79$$
> >
> > **Langkah 4: Tentukan Interval $(\mu - \sigma, \mu + \sigma)$**
> >
> > $$\text{Batas bawah} = 55 - 21{,}79 = 33{,}21$$
> >
> > $$\text{Batas atas} = 55 + 21{,}79 = 76{,}79$$
> >
> > Interval: $(33{,}21;\; 76{,}79)$
> >
> > **Langkah 5: Cek Setiap Nilai Klaim — Masuk Interval atau Tidak?**
> >
> > | Nilai $x$ | Masuk interval $(33{,}21;\; 76{,}79)$? | $p(x)$ |
> > |:-:|:-:|:-:|
> > | $20$ | ✗ (terlalu kecil, $20 < 33{,}21$) | — |
> > | $30$ | ✗ (terlalu kecil, $30 < 33{,}21$) | — |
> > | $40$ | ✓ | $0{,}05$ |
> > | $50$ | ✓ | $0{,}20$ |
> > | $60$ | ✓ | $0{,}10$ |
> > | $70$ | ✓ | $0{,}10$ |
> > | $80$ | ✗ (terlalu besar, $80 > 76{,}79$) | — |
> >
> > **Langkah 6: Jumlahkan Peluang Nilai yang Masuk Interval**
> >
> > $$P(\mu-\sigma < X < \mu+\sigma) = 0{,}05 + 0{,}20 + 0{,}10 + 0{,}10 = 0{,}45 = 45\%$$
> >
> > **Hasil Akhir:** **(a)**. $45\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Memasukkan nilai 30 ke dalam interval:** $30 < 33{,}21$, jadi $30$ berada *di luar* batas bawah.
> > > - **Memasukkan nilai 80 ke dalam interval:** $80 > 76{,}79$, jadi $80$ berada *di luar* batas atas.
> > > - **Lupa mengkuadratkan nilai saat hitung $E[X^2]$:** mengalikan $x$ (bukan $x^2$) dengan $p(x)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **Menggunakan aturan empiris 68%:** aturan "68% data dalam $\pm 1\sigma$" hanya berlaku untuk distribusi normal. Distribusi diskrit ini tidak normal — hasilnya bisa jauh berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu cek setiap nilai klaim satu per satu terhadap batas interval. Jangan asumsikan mana yang masuk.
> > > - Batas interval bersifat *terbuka* — nilai persis di $\mu \pm \sigma$ tidak dihitung (walaupun untuk distribusi diskrit ini hampir tidak mungkin terjadi).

---

## **No. 14**

Total besaran klaim dari produk asuransi kesehatan mengikuti sebaran dengan fungsi kepadatan peluang (dalam ribu rupiah): $f(x) = \dfrac{1}{1{.}000}e^{-\frac{x}{1{.}000}}$ untuk $x > 0$. Premi untuk produk ini ditentukan sebesar nilai ekspektasi total besaran klaim ditambah 100 ribu rupiah.

Jika 100 polis saling bebas terjual, berapakah peluang aproksimasi normal dari perusahaan asuransi akan membayarkan klaim melebihi premi yang diterima?

a. $0{,}001$  
b. $0{,}159$  
c. $0{,}333$  
d. $0{,}407$  
e. $0{,}460$

> [!summary]+ **Jawaban No. 14**
>
> **(b). $0{,}159$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] · [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Eksponensial** dengan parameter $\lambda$: $f(x) = \lambda e^{-\lambda x}$
> > - Mean: $\mu = \dfrac{1}{\lambda}$
> > - Varians: $\sigma^2 = \dfrac{1}{\lambda^2} = \mu^2$ (ingat: untuk eksponensial, **mean = SD**)
> >
> > **Teorema Limit Pusat (CLT):** Untuk $n$ besar, jumlah $S_n = X_1 + X_2 + \cdots + X_n$ dari variabel i.i.d. mendekati normal:
> >
> > $$S_n \approx N(n\mu,\; n\sigma^2)$$
> >
> > **Standardisasi:**
> >
> > $$Z = \frac{S_n - n\mu}{\sigma\sqrt{n}} \sim N(0,1)$$
> >
>
> **Diketahui:**
> - $f(x) = \frac{1}{1{.}000}e^{-x/1{.}000}$ → distribusi Eksponensial dengan $\lambda = \frac{1}{1{.}000}$
> - $\mu = 1{.}000$, $\sigma^2 = 1{.}000^2 = 10^6$, $\sigma = 1{.}000$
> - Premi per polis $= \mu + 100 = 1{.}100$
> - $n = 100$ polis
> - Total premi diterima $= 100 \times 1{.}100 = 110{.}000$
> - Total klaim $S_{100} = X_1 + X_2 + \cdots + X_{100}$
> - Target: $P(S_{100} > 110{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Parameter Distribusi Total Klaim $S_{100}$**
> > Dengan CLT, $S_{100}$ mendekati distribusi normal dengan:
> >
> > $$E[S_{100}] = n \cdot \mu = 100 \times 1{.}000 = 100{.}000$$
> >
> > $$\text{Var}(S_{100}) = n \cdot \sigma^2 = 100 \times 10^6 = 10^8$$
> >
> > $$\text{SD}(S_{100}) = \sqrt{10^8} = 10{.}000$$
> >
> > **Langkah 2: Standardisasi — Ubah ke $Z$-score**
> >
> > $$P(S_{100} > 110{.}000) = P\!\left(Z > \frac{110{.}000 - 100{.}000}{10{.}000}\right) = P(Z > 1)$$
> >
> > **Langkah 3: Baca Tabel Normal Standar**
> >
> > $$P(Z > 1) = 1 - \Phi(1) = 1 - 0{,}8413 = 0{,}1587 \approx 0{,}159$$
> >
> > **Intepretasi:** Ada sekitar $15{,}9\%$ kemungkinan perusahaan asuransi merugi (klaim melebihi premi). Loading 100 ribu rupiah per polis tidak cukup aman.
> >
> > **Hasil Akhir:** **(b)**. $0{,}159$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah menghitung varians eksponensial:** menggunakan $\sigma^2 = \mu = 1{.}000$ — ini keliru. Untuk distribusi eksponensial, $\sigma^2 = \mu^2 = 1{.}000^2 = 10^6$.
> > > - **Lupa mengalikan dengan $n$ untuk mendapat $\text{SD}(S_{100})$:** menggunakan $\text{SD} = 1{.}000$ (SD satu polis) alih-alih $\text{SD}(S_{100}) = 1{.}000 \times \sqrt{100} = 10{.}000$.
> > > - **Menghitung total klaim rata-rata sebagai premi:** premi per polis adalah $\mu + 100 = 1{.}100$, bukan $\mu = 1{.}000$.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi eksponensial: **mean = SD = $1/\lambda$**. Ini properti unik eksponensial — manfaatkan untuk cek perhitungan.
> > > - "Premi = mean + loading" → total premi dari $n$ polis = $n(\mu + \text{loading})$.
> > > - Jika soal minta "peluang merugi" → hitung $P(\text{total klaim} > \text{total premi})$.

---

## **No. 15**

Suatu Perusahaan menawarkan produk polis asuransi jiwa dasar kepada karyawannya. Selain itu, Perusahaan juga menawarkan asuransi jiwa tambahan kepada karyawannya. Untuk membeli produk asuransi jiwa tambahan, karyawan diwajibkan membeli asuransi jiwa dasar. Misal $X$ merupakan proporsi dari total karyawan yang membeli polis asuransi jiwa dasar, dan $Y$ merupakan proporsi dari total karyawan membeli polis asuransi jiwa tambahan. Misal $X$ dan $Y$ memiliki fungsi kepadatan peluang bersama $f(x, y) = 2(x + y)$ dengan daerah di mana kepadatan (density) nya bernilai positif.

Jika diketahui 10% dari total karyawan membeli polis asuransi jiwa dasar, berapa peluang kurang dari 5% karyawan membeli polis asuransi tambahan? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}010$  
b. $0{,}013$  
c. $0{,}108$  
d. $0{,}417$  
e. $0{,}500$

> [!summary]+ **Jawaban No. 15**
>
> **(d). $0{,}417$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Support:** Karena membeli tambahan mengharuskan membeli dasar, maka $Y \leq X$. Juga keduanya adalah proporsi, jadi $0 \leq Y \leq X \leq 1$. Support: $0 < y < x < 1$.
> >
> > **PDF Bersyarat:**
> >
> > $$f_{Y|X}(y \mid x) = \frac{f(x, y)}{f_X(x)}$$
> >
> > **Distribusi Marginal $f_X(x)$:** integralkan $f(x,y)$ terhadap $y$ dalam batasnya:
> >
> > $$f_X(x) = \int_0^x f(x, y)\, dy$$
> >
> > **Peluang Bersyarat:**
> >
> > $$P(Y < 0{,}05 \mid X = 0{,}10) = \int_0^{0{,}05} f_{Y|X}(y \mid 0{,}10)\, dy$$
> >
>
> **Diketahui:**
> - $f(x, y) = 2(x+y)$, support $0 < y < x < 1$
> - Kondisi: $X = 0{,}10$ (diketahui 10% membeli dasar)
> - Target: $P(Y < 0{,}05 \mid X = 0{,}10)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Support dengan Tepat**
> > Karena $Y \leq X$ (tidak mungkin lebih banyak yang beli tambahan daripada dasar):
> > - Support: $0 < y < x < 1$
> > - Artinya: untuk $X = x$ yang tetap, $y$ bergerak dari $0$ sampai $x$
> >
> > **Langkah 2: Hitung Marginal $f_X(x)$**
> >
> > $$f_X(x) = \int_0^x 2(x+y)\, dy = 2\int_0^x (x+y)\, dy$$
> >
> > $$= 2\left[xy + \frac{y^2}{2}\right]_0^x = 2\left(x \cdot x + \frac{x^2}{2}\right) = 2\left(x^2 + \frac{x^2}{2}\right) = 2 \cdot \frac{3x^2}{2} = 3x^2$$
> >
> > **Langkah 3: Hitung PDF Bersyarat $f_{Y|X}(y \mid x)$**
> >
> > $$f_{Y|X}(y \mid x) = \frac{f(x,y)}{f_X(x)} = \frac{2(x+y)}{3x^2}, \quad 0 < y < x$$
> >
> > **Langkah 4: Substitusi $x = 0{,}10$**
> >
> > $$f_{Y|X}(y \mid 0{,}10) = \frac{2(0{,}10 + y)}{3(0{,}10)^2} = \frac{2(0{,}10 + y)}{3 \times 0{,}01} = \frac{2(0{,}10 + y)}{0{,}03}$$
> >
> > **Langkah 5: Hitung Peluang Bersyarat**
> >
> > $$P(Y < 0{,}05 \mid X = 0{,}10) = \int_0^{0{,}05} \frac{2(0{,}10+y)}{0{,}03}\, dy = \frac{2}{0{,}03} \int_0^{0{,}05} (0{,}10 + y)\, dy$$
> >
> > Hitung integral:
> >
> > $$\int_0^{0{,}05}(0{,}10+y)\,dy = \left[0{,}10y + \frac{y^2}{2}\right]_0^{0{,}05} = 0{,}10(0{,}05) + \frac{(0{,}05)^2}{2} = 0{,}005 + 0{,}00125 = 0{,}00625$$
> >
> > Substitusikan:
> >
> > $$P = \frac{2}{0{,}03} \times 0{,}00625 = \frac{0{,}0125}{0{,}03} = \frac{125}{300} = \frac{5}{12} \approx 0{,}4167$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}417$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah batas marginal:** menggunakan $\int_0^1 f(x,y)\,dy$ — ini salah. Karena $y < x$, batas atas adalah $x$, bukan $1$.
> > > - **Mengabaikan syarat konteks:** tidak menyadari bahwa $Y \leq X$ (jumlah pembeli tambahan tidak boleh melebihi pembeli dasar).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Frasa "diwajibkan membeli dasar terlebih dahulu" → ini adalah clue bahwa $Y \leq X$, bukan $0 \leq X, Y \leq 1$ secara bebas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal ada relasi "A diperlukan untuk membeli B" atau "B ≤ A" → support adalah $0 < y < x < 1$, **bukan** kotak $[0,1]^2$.
> > > - Selalu gambar/pikirkan daerah support sebelum mulai hitung — kesalahan support menyebabkan semua hasil salah.

---

## **No. 16**

Suatu polis asuransi mengganti biaya manfaat perawatan gigi, $X$, hingga maksimum benefit sebesar 250. Fungsi kepadatan peluang untuk $X$ yaitu:

$$f(x) = \begin{cases} ce^{-0{,}004x}, & \text{untuk } x \geq 0 \\ 0, & \text{selainnya} \end{cases}$$

Dengan $c$ merupakan suatu konstanta.

Hitunglah median manfaat dari produk ini! (Pilihlah jawaban yang paling mendekati!)

a. $161$  
b. $165$  
c. $173$  
d. $182$  
e. $250$

> [!summary]+ **Jawaban No. 16**
>
> **(c). $173$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Eksponensial:** $f(x) = \lambda e^{-\lambda x}$ → konstanta $c = \lambda$.
> >
> > **Manfaat yang dibayar (capped benefit):**
> >
> > $$B = \min(X, 250) = \begin{cases} X, & \text{jika } X < 250 \\ 250, & \text{jika } X \geq 250 \end{cases}$$
> >
> > $B$ adalah **variabel campuran**: kontinu di $[0, 250)$ dan punya titik massa di $B = 250$.
> >
> > **Median $m$** dari $B$: nilai $m$ sedemikian sehingga $P(B \leq m) = 0{,}5$.
> > - Jika $P(B = 250) < 0{,}5$ → median ada di bagian kontinu, cari $m < 250$
> > - Jika $P(B = 250) \geq 0{,}5$ → median $= 250$
>
> **Diketahui:**
> - $f(x) = ce^{-0{,}004x}$ → Eksponensial dengan $\lambda = 0{,}004$, jadi $c = 0{,}004$
> - $F_X(x) = 1 - e^{-0{,}004x}$ (CDF distribusi eksponensial)
> - $B = \min(X, 250)$
> - Target: median dari $B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Nilai $c$**
> > Agar $f(x)$ merupakan PDF yang valid, $\int_0^\infty ce^{-0{,}004x}\,dx = 1$.
> >
> > $$c \cdot \frac{1}{0{,}004} = 1 \implies c = 0{,}004$$
> >
> > Jadi $X \sim \text{Eksponensial}(\lambda = 0{,}004)$ dengan mean $= 1/0{,}004 = 250$.
> >
> > **Langkah 2: Hitung $P(B = 250)$ — Probabilitas Titik Massa**
> > $B = 250$ terjadi ketika $X \geq 250$:
> >
> > $$P(B = 250) = P(X \geq 250) = e^{-0{,}004 \times 250} = e^{-1} \approx 0{,}3679$$
> >
> > **Langkah 3: Tentukan Letak Median**
> > $P(B = 250) \approx 0{,}3679 < 0{,}5$
> > → Median **bukan** di $250$, melainkan di bagian kontinu ($m < 250$).
> >
> > **Mengapa?** Karena hanya $36{,}79\%$ nilai $B$ berada di titik $250$. Untuk mencapai $50\%$ kumulatif, kita harus sudah melampaui titik $m$ di bagian kontinu.
> >
> > **Langkah 4: Cari Median $m$ dari Bagian Kontinu**
> > Untuk $m < 250$, peluang $P(B \leq m) = P(X \leq m) = F_X(m)$:
> >
> > $$F_X(m) = 1 - e^{-0{,}004m} = 0{,}5$$
> >
> > $$e^{-0{,}004m} = 0{,}5$$
> >
> > Ambil logaritma natural kedua sisi:
> >
> > $$-0{,}004m = \ln(0{,}5) = -\ln 2 \approx -0{,}6931$$
> >
> > $$m = \frac{0{,}6931}{0{,}004} = 173{,}3 \approx 173$$
> >
> > **Verifikasi:** $173 < 250$ ✓, jadi asumsi median di bagian kontinu sudah benar.
> >
> > **Hasil Akhir:** **(c)**. $173$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Langsung menyimpulkan median = 250** karena ada titik massa di sana — salah. Harus cek dulu apakah $P(B=250) \geq 0{,}5$. Di sini $P(B=250) \approx 0{,}37 < 0{,}5$, jadi median ada di bawah 250.
> > > - **Mencari median $X$** tanpa mempertimbangkan cap. Kebetulan hasilnya sama di soal ini ($173 < 250$), tapi secara konseptual harus bekerja pada variabel $B = \min(X, 250)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Median manfaat" → median dari $B = \min(X, 250)$, **bukan** median dari biaya klaim $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "manfaat hingga limit/maksimum" → definisikan $B = \min(X, \text{limit})$ terlebih dahulu.
> > > - Selalu cek $P(B = \text{cap})$ sebelum mencari median: jika $\geq 0{,}5$ maka median = cap; jika $< 0{,}5$ maka cari di bagian kontinu.

---

## **No. 17**

Seorang aktuaris menentukan banyaknya tornado yang terjadi di negara P dan Q dalam satu tahun memiliki distribusi bersama sebagai berikut:

| | **Banyaknya tornado di negara Q dalam satu tahun** | | | |
|:-:|:-:|:-:|:-:|:-:|
| **Banyaknya tornado di negara P dalam satu tahun** | **0** | **1** | **2** | **3** |
| **0** | $0{,}12$ | $0{,}06$ | $0{,}05$ | $0{,}02$ |
| **1** | $0{,}13$ | $0{,}15$ | $0{,}12$ | $0{,}03$ |
| **2** | $0{,}05$ | $0{,}15$ | $0{,}10$ | $0{,}02$ |

Hitunglah varians bersyarat dari banyaknya tornado yang terjadi dalam satu tahun di negara Q, jika diketahui tidak ada tornado yang terjadi di negara P! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}51$  
b. $0{,}84$  
c. $0{,}88$  
d. $0{,}99$  
e. $1{,}76$

> [!summary]+ **Jawaban No. 17**
>
> **(d). $0{,}99$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] · [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Bersyarat Diskrit:**
> >
> > $$P(Q = q \mid P = p) = \frac{P(P = p,\; Q = q)}{P(P = p)}$$
> >
> > **Varians Bersyarat** menggunakan rumus standar $\text{Var} = E[X^2] - (E[X])^2$:
> >
> > $$\text{Var}(Q \mid P = 0) = E[Q^2 \mid P = 0] - \bigl(E[Q \mid P = 0]\bigr)^2$$
> >
>
> **Diketahui:**
> - Distribusi bersama dalam tabel (baris = $P$, kolom = $Q$)
> - Kondisi: $P = 0$ → gunakan **baris pertama** tabel
> - Target: $\text{Var}(Q \mid P = 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ambil Data dari Baris $P = 0$**
> > Baris $P = 0$: $P(P=0, Q=0) = 0{,}12$; $P(P=0, Q=1) = 0{,}06$; $P(P=0, Q=2) = 0{,}05$; $P(P=0, Q=3) = 0{,}02$
> >
> > **Langkah 2: Hitung Marginal $P(P = 0)$**
> >
> > $$P(P=0) = 0{,}12 + 0{,}06 + 0{,}05 + 0{,}02 = 0{,}25$$
> >
> > **Langkah 3: Normalisasi — Hitung Distribusi Bersyarat**
> > Bagi setiap nilai baris $P=0$ dengan $0{,}25$:
> >
> > | $q$ | $P(P=0, Q=q)$ | $P(Q=q \mid P=0)$ |
> > |:-:|:-:|:-:|
> > | $0$ | $0{,}12$ | $0{,}12/0{,}25 = 0{,}48$ |
> > | $1$ | $0{,}06$ | $0{,}06/0{,}25 = 0{,}24$ |
> > | $2$ | $0{,}05$ | $0{,}05/0{,}25 = 0{,}20$ |
> > | $3$ | $0{,}02$ | $0{,}02/0{,}25 = 0{,}08$ |
> >
> > Cek: $0{,}48 + 0{,}24 + 0{,}20 + 0{,}08 = 1{,}00$ ✓
> >
> > **Langkah 4: Hitung $E[Q \mid P = 0]$**
> >
> > $$E[Q \mid P=0] = 0(0{,}48) + 1(0{,}24) + 2(0{,}20) + 3(0{,}08)$$
> >
> > $$= 0 + 0{,}24 + 0{,}40 + 0{,}24 = 0{,}88$$
> >
> > **Langkah 5: Hitung $E[Q^2 \mid P = 0]$**
> >
> > $$E[Q^2 \mid P=0] = 0^2(0{,}48) + 1^2(0{,}24) + 2^2(0{,}20) + 3^2(0{,}08)$$
> >
> > $$= 0 + 0{,}24 + 4(0{,}20) + 9(0{,}08) = 0 + 0{,}24 + 0{,}80 + 0{,}72 = 1{,}76$$
> >
> > **Langkah 6: Hitung Varians Bersyarat**
> >
> > $$\text{Var}(Q \mid P=0) = E[Q^2 \mid P=0] - \bigl(E[Q \mid P=0]\bigr)^2$$
> >
> > $$= 1{,}76 - (0{,}88)^2 = 1{,}76 - 0{,}7744 = 0{,}9856 \approx 0{,}99$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}99$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Melaporkan $E[Q^2 \mid P=0] = 1{,}76$ sebagai varians** (pilihan e) — ini adalah $E[Q^2]$, bukan varians. Harus dikurangi $(E[Q])^2 = (0{,}88)^2$.
> > > - **Tidak membagi dengan $P(P=0) = 0{,}25$** saat normalisasi — menggunakan probabilitas gabungan langsung sebagai probabilitas bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal minta varians bersyarat → **wajib** normalisasi distribusi bersyarat lebih dulu, baru hitung momen.
> > > - Selalu lakukan 2 langkah: hitung $E[Q|P]$ dan $E[Q^2|P]$, lalu gabungkan dengan rumus $\text{Var} = E[X^2] - (E[X])^2$.
> > > - Pilihan $0{,}88$ (pilihan c) adalah $E[Q \mid P=0]$, bukan varians — jebakan klasik.

---

## **No. 18**

Seorang aktuaris menemukan bahwa pemegang polis memiliki tendensi untuk klaim sebanyak 2 kali dalam suatu periode polis sebesar tiga kali lipat dibandingkan klaim sebanyak 4 kali dalam suatu periode polis.

Jika banyaknya klaim yang diajukan mengikuti sebaran Poisson, berapakah varians dari banyaknya klaim yang diajukan?

a. $\dfrac{1}{\sqrt{3}}$  
b. $1$  
c. $\sqrt{2}$  
d. $2$  
e. $4$

> [!summary]+ **Jawaban No. 18**
>
> **(d). $2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Poisson** dengan parameter $\lambda$:
> >
> > $$P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$
> >
> > Properti utama: $E[X] = \text{Var}(X) = \lambda$
>
> **Diketahui:**
> - $P(X = 2) = 3 \cdot P(X = 4)$ ("tiga kali lipat")
> - $X \sim \text{Poisson}(\lambda)$
> - Target: $\text{Var}(X) = \lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Kedua PMF Secara Eksplisit**
> >
> > $$P(X=2) = \frac{e^{-\lambda}\lambda^2}{2!} = \frac{e^{-\lambda}\lambda^2}{2}$$
> >
> > $$P(X=4) = \frac{e^{-\lambda}\lambda^4}{4!} = \frac{e^{-\lambda}\lambda^4}{24}$$
> >
> > **Langkah 2: Bentuk Persamaan dari Kondisi yang Diberikan**
> >
> > $$P(X=2) = 3 \cdot P(X=4)$$
> >
> > $$\frac{e^{-\lambda}\lambda^2}{2} = 3 \cdot \frac{e^{-\lambda}\lambda^4}{24}$$
> >
> > **Langkah 3: Sederhanakan Persamaan**
> > Bagi kedua sisi dengan $e^{-\lambda}$ (selalu positif, aman untuk dibagi):
> >
> > $$\frac{\lambda^2}{2} = \frac{3\lambda^4}{24} = \frac{\lambda^4}{8}$$
> >
> > Kalikan kedua sisi dengan $8$:
> >
> > $$4\lambda^2 = \lambda^4$$
> >
> > Bagi kedua sisi dengan $\lambda^2$ (karena $\lambda > 0$, aman untuk dibagi):
> >
> > $$4 = \lambda^2$$
> >
> > $$\lambda = 2 \quad (\lambda > 0 \text{ diambil nilai positif})$$
> >
> > **Langkah 4: Simpulkan Varians**
> > Untuk distribusi Poisson: $\text{Var}(X) = \lambda = 2$
> >
> > **Hasil Akhir:** **(d)**. $2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Lupa bahwa untuk Poisson, varians = mean = $\lambda$** — setelah menemukan $\lambda = 2$, langsung simpulkan $\text{Var}(X) = 2$, bukan menghitung varians secara terpisah.
> > > - **Membagi dengan $\lambda^2$ padahal $\lambda$ bisa nol** — untuk konteks ini aman karena $\lambda > 0$ (parameter Poisson selalu positif), tetapi harus disebutkan secara eksplisit.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Tiga kali lipat" berarti $P(X=2) = 3 \times P(X=4)$, bukan $P(X=4) = 3 \times P(X=2)$. Perhatikan urutan kalimat: "klaim 2 kali sebesar tiga kali lipat dibandingkan klaim 4 kali."
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi rasio $P(X=a) / P(X=b)$ untuk distribusi Poisson → hubungkan langsung dengan $\lambda$ melalui PMF Poisson.
> > > - Jika menemukan $\lambda^4 - 4\lambda^2 = 0$ → faktorkan menjadi $\lambda^2(\lambda^2 - 4) = 0$ → ambil $\lambda = 2$ (buang solusi $\lambda = 0$ dan $\lambda = -2$).

---

## **No. 19**

Suatu dealer mobil mampu menjual 0, 1 atau 2 mobil mewah setiap harinya. Saat menjual mobil, dealer juga menawarkan pelanggan untuk membeli perpanjangan garansi mobil. Misal $X$ merupakan banyaknya mobil mewah yang dijual dalam sehari, dan $Y$ merupakan banyaknya perpanjangan garansi mobil yang terjual.

$$P(X = 0, Y = 0) = \frac{1}{6}; \quad P(X = 1, Y = 0) = \frac{1}{12}; \quad P(X = 2, Y = 0) = \frac{1}{12}$$

$$P(X = 1, Y = 1) = \frac{1}{6}; \quad P(X = 2, Y = 1) = \frac{1}{3}; \quad P(X = 2, Y = 2) = \frac{1}{6}$$

Berapakah varians dari $X$? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}47$  
b. $0{,}58$  
c. $0{,}83$  
d. $1{,}42$  
e. $2{,}58$

> [!summary]+ **Jawaban No. 19**
>
> **(b). $0{,}58$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Marginal Diskrit** — jumlahkan seluruh nilai $y$ untuk mendapat distribusi $X$ saja:
> >
> > $$P(X = x) = \sum_y P(X = x,\; Y = y)$$
> >
> > **Varians:**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
> >
>
> **Diketahui:**
> - Distribusi gabungan 6 pasangan $(x, y)$ diberikan
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun Tabel Distribusi Gabungan**
> >
> > | $(X, Y)$ | Peluang |
> > |:-:|:-:|
> > | $(0, 0)$ | $1/6$ |
> > | $(1, 0)$ | $1/12$ |
> > | $(1, 1)$ | $1/6$ |
> > | $(2, 0)$ | $1/12$ |
> > | $(2, 1)$ | $1/3$ |
> > | $(2, 2)$ | $1/6$ |
> >
> > **Langkah 2: Hitung Marginal $P(X = x)$ dengan Menjumlahkan Semua $y$**
> > - $P(X=0)$: hanya ada satu pasangan → $P(0,0) = \dfrac{1}{6}$
> > - $P(X=1)$: ada $Y=0$ dan $Y=1$ → $P(1,0) + P(1,1) = \dfrac{1}{12} + \dfrac{1}{6} = \dfrac{1}{12} + \dfrac{2}{12} = \dfrac{3}{12} = \dfrac{1}{4}$
> > - $P(X=2)$: ada $Y=0$, $Y=1$, $Y=2$ → $P(2,0) + P(2,1) + P(2,2) = \dfrac{1}{12} + \dfrac{1}{3} + \dfrac{1}{6} = \dfrac{1}{12} + \dfrac{4}{12} + \dfrac{2}{12} = \dfrac{7}{12}$
> >
> > Verifikasi: $\dfrac{1}{6} + \dfrac{1}{4} + \dfrac{7}{12} = \dfrac{2}{12} + \dfrac{3}{12} + \dfrac{7}{12} = \dfrac{12}{12} = 1$ ✓
> >
> > **Langkah 3: Hitung $E[X]$**
> >
> > $$E[X] = 0 \cdot \frac{1}{6} + 1 \cdot \frac{1}{4} + 2 \cdot \frac{7}{12} = 0 + \frac{1}{4} + \frac{14}{12} = \frac{3}{12} + \frac{14}{12} = \frac{17}{12}$$
> >
> > **Langkah 4: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 0^2 \cdot \frac{1}{6} + 1^2 \cdot \frac{1}{4} + 2^2 \cdot \frac{7}{12} = 0 + \frac{1}{4} + \frac{28}{12} = \frac{3}{12} + \frac{28}{12} = \frac{31}{12}$$
> >
> > **Langkah 5: Hitung Varians**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = \frac{31}{12} - \left(\frac{17}{12}\right)^2 = \frac{31}{12} - \frac{289}{144}$$
> >
> > Samakan penyebut ($\times 12$ untuk suku pertama):
> >
> > $$= \frac{31 \times 12}{144} - \frac{289}{144} = \frac{372}{144} - \frac{289}{144} = \frac{83}{144} \approx 0{,}576 \approx 0{,}58$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}58$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menghitung $\text{Var}(Y)$ alih-alih $\text{Var}(X)$** — soal hanya minta varians $X$ (banyaknya mobil terjual), bukan garansi.
> > > - **Lupa menjumlahkan semua nilai $y$ untuk mendapat marginal $P(X=x)$** — misalnya untuk $P(X=2)$, ada 3 nilai $y$ yang harus dijumlahkan.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu verifikasi $\sum_x P(X=x) = 1$ setelah menghitung marginal — jika tidak sama dengan 1, ada kesalahan penjumlahan.
> > > - Marginal $P(X=x)$ didapat dengan "memproyeksikan" tabel ke sumbu $X$ (menjumlahkan per baris/kolom).

---

## **No. 20**

Suatu polis asuransi memberikan manfaat penggantian biaya kerugian hingga limit benefit 10 juta. Kerugian pemegang polis $Y$, mengikuti distribusi dengan fungsi kepadatan peluang sebagai berikut:

$$f(y) = \begin{cases} \dfrac{2}{y^3}, & \text{untuk } y > 1 \\ 0, & \text{selainnya} \end{cases}$$

Berapakah nilai harapan dari manfaat yang dibayarkan oleh polis asuransi tersebut?

a. $1{,}0$ juta  
b. $1{,}3$ juta  
c. $1{,}8$ juta  
d. $1{,}9$ juta  
e. $2{,}0$ juta

> [!summary]+ **Jawaban No. 20**
>
> **(d). $1{,}9$ juta**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] · [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Manfaat dengan limit (capped benefit):**
> >
> > $$B = \min(Y, 10) = \begin{cases} Y, & \text{jika } Y \leq 10 \\ 10, & \text{jika } Y > 10 \end{cases}$$
> >
> > **Nilai Harapan Variabel Campuran:**
> >
> > $$E[B] = \underbrace{\int_1^{10} y \cdot f(y)\, dy}_{\text{kontribusi bagian kontinu}} + \underbrace{10 \cdot P(Y > 10)}_{\text{kontribusi titik massa di }B=10}$$
> >
> > (Batas bawah integral mulai dari 1 karena support $f(y)$ dimulai dari $y > 1$.)
>
> **Diketahui:**
> - $f(y) = 2/y^3$ untuk $y > 1$ (distribusi Pareto dengan $\alpha = 2$, $\theta = 1$)
> - Limit manfaat $= 10$
> - $B = \min(Y, 10)$
> - Target: $E[B]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(Y > 10)$ — Peluang Titik Massa**
> >
> > $$P(Y > 10) = \int_{10}^\infty \frac{2}{y^3}\, dy = \left[\frac{-1}{y^2}\right]_{10}^\infty = 0 - \left(\frac{-1}{100}\right) = \frac{1}{100} = 0{,}01$$
> >
> > *(Ingat: $\int y^{-3}dy = \frac{y^{-2}}{-2}$, jadi $\int \frac{2}{y^3}dy = \frac{-1}{y^2}$)*
> >
> > **Langkah 2: Hitung Kontribusi Bagian Kontinu $\int_1^{10} y \cdot f(y)\, dy$**
> >
> > $$\int_1^{10} y \cdot \frac{2}{y^3}\, dy = \int_1^{10} \frac{2}{y^2}\, dy = \left[\frac{-2}{y}\right]_1^{10} = \frac{-2}{10} - \frac{-2}{1} = -0{,}2 + 2 = 1{,}8$$
> >
> > **Langkah 3: Hitung $E[B]$ dengan Menggabungkan Kedua Bagian**
> >
> > $$E[B] = 1{,}8 + 10 \times 0{,}01 = 1{,}8 + 0{,}1 = 1{,}9$$
> >
> > **Intuisi:** Sebagian besar klaim ($99\%$) dibayar sesuai nilai aslinya, tetapi $1\%$ klaim yang sangat besar hanya dibayar sebesar limit 10 juta — sehingga total ekspektasi manfaat sedikit di bawah $E[Y]$.
> >
> > **Hasil Akhir:** **(d)**. $1{,}9$ juta
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menggunakan $\int_1^\infty y \cdot f(y)\, dy = E[Y]$** tanpa cap → ini menghitung $E[Y]$ (nilai harapan kerugian penuh), bukan $E[B]$ (nilai harapan manfaat yang dibatasi).
> > > - **Lupa kontribusi titik massa di $B = 10$** → cukup menghitung $\int_1^{10}$ dan berhenti, padahal harus ditambah $10 \cdot P(Y > 10)$.
> > > - **Salah batas bawah integral:** support $f(y)$ dimulai dari $y > 1$, bukan $y > 0$ — jangan mulai integral dari 0.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Manfaat hingga limit 10 juta" → $B = \min(Y, 10)$. Jika kerugian $Y < 10$, dibayar penuh; jika $Y \geq 10$, dibayar hanya 10.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "limit benefit" atau "maksimum manfaat" → definisikan $B = \min(Y, \text{limit})$ dan gunakan formula dua bagian (integral + titik massa).
> > > - Selalu periksa support PDF — di soal ini support dimulai dari $y > 1$, bukan $y > 0$.

---

## **No. 21**

Suatu Perusahaan asuransi memiliki cabang di 3 kota: J, K, dan L. Karena lokasi dari ketiga cabang berada di pulau yang berbeda, maka dapat diasumsikan bahwa kerugian yang terjadi di ketiga kota tersebut saling bebas. Fungsi pembangkit momen dari sebaran kerugian di 3 kota tersebut diberikan sebagai berikut:

$$M_J(t) = (1 - 2t)^{-3} \qquad M_K(t) = (1 - 2t)^{-2{,}5} \qquad M_L(t) = (1 - 2t)^{-4{,}5}$$

$X$ merepresentasikan kerugian total dari 3 kota tersebut.

Tentukan nilai dari $E(X^3)$!

a. $1{.}320$  
b. $2{.}082$  
c. $5{.}760$  
d. $8{.}000$  
e. $10{.}560$

> [!summary]+ **Jawaban No. 21**
>
> **(e). $10{.}560$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > **MGF Penjumlahan Variabel Independen:**
> > Jika $X = J + K + L$ dan ketiganya independen, maka:
> >
> > $$M_X(t) = M_J(t) \cdot M_K(t) \cdot M_L(t)$$
> >
> > **Identifikasi Distribusi dari Bentuk MGF:**
> > MGF berbentuk $(1-\beta t)^{-\alpha}$ adalah MGF distribusi **Gamma** dengan parameter shape $\alpha$ dan scale $\beta$.
> >
> > **Momen ke-$k$ dari distribusi Gamma($\alpha, \beta$):**
> >
> > $$E[X^k] = \frac{\Gamma(\alpha + k)}{\Gamma(\alpha)} \cdot \beta^k$$
> >
> > Karena $\Gamma(n) = (n-1)!$ untuk bilangan bulat positif, maka:
> >
> > $$\frac{\Gamma(\alpha+k)}{\Gamma(\alpha)} = \alpha(\alpha+1)(\alpha+2)\cdots(\alpha+k-1)$$
> >
> > Ini adalah hasil kali $k$ bilangan berturut-turut mulai dari $\alpha$.
>
> **Diketahui:**
> - MGF setiap kota berbentuk $(1-2t)^{-\alpha}$ dengan $\beta = 2$
> - J: $\alpha_J = 3$; K: $\alpha_K = 2{,}5$; L: $\alpha_L = 4{,}5$
> - $X = J + K + L$, ketiganya independen
> - Target: $E[X^3]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gabungkan MGF untuk Mendapat MGF Total**
> > Karena J, K, L saling bebas:
> >
> > $$M_X(t) = M_J(t) \cdot M_K(t) \cdot M_L(t) = (1-2t)^{-3} \cdot (1-2t)^{-2{,}5} \cdot (1-2t)^{-4{,}5}$$
> >
> > Jumlahkan eksponen (basis sama, perkalian = penjumlahan pangkat):
> >
> > $$M_X(t) = (1-2t)^{-(3+2{,}5+4{,}5)} = (1-2t)^{-10}$$
> >
> > **Langkah 2: Identifikasi Distribusi $X$**
> > Bentuk $(1-2t)^{-10}$ cocok dengan MGF Gamma dengan $\alpha = 10$ dan $\beta = 2$.
> > Jadi: $X \sim \Gamma(\alpha = 10,\; \beta = 2)$.
> >
> > **Langkah 3: Hitung $E[X^3]$ Menggunakan Formula Momen Gamma**
> > Untuk $k = 3$:
> >
> > $$E[X^3] = \frac{\Gamma(10+3)}{\Gamma(10)} \cdot \beta^3 = \frac{\Gamma(13)}{\Gamma(10)} \cdot 2^3$$
> >
> > **Hitung $\dfrac{\Gamma(13)}{\Gamma(10)}$:**
> > Karena $\Gamma(n) = (n-1)!$:
> >
> > $$\frac{\Gamma(13)}{\Gamma(10)} = \frac{12!}{9!} = 10 \times 11 \times 12 = 1{.}320$$
> >
> > *(Kita hanya perlu mengalikan 3 bilangan berurutan dari $\alpha=10$ ke atas: $10 \times 11 \times 12$)*
> >
> > **Hitung $E[X^3]$:**
> >
> > $$E[X^3] = 1{.}320 \times 2^3 = 1{.}320 \times 8 = 10{.}560$$
> >
> > **Hasil Akhir:** **(e)**. $10{.}560$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menghitung $(E[X])^3$ alih-alih $E[X^3]$:** $(E[X])^3 \neq E[X^3]$ kecuali distribusinya deterministik. $E[X] = \alpha\beta = 10 \times 2 = 20$, sehingga $(E[X])^3 = 8{.}000$ — ini opsi (d), jebakan klasik.
> > > - **Lupa mengalikan dengan $\beta^k = 2^3 = 8$:** hanya menghitung $\Gamma(13)/\Gamma(10) = 1{.}320$ (opsi a) dan berhenti.
> > > - **Salah menghitung $\Gamma(13)/\Gamma(10)$:** menggunakan $12!/9! = 12 \times 11 \times 10 = 1{.}320$ — ini benar. Yang sering salah adalah menghitung $12 \times 11 \times 10 \times \cdots$ terlalu banyak faktor.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kerugian total" = $X = J + K + L$, bukan salah satu kota saja.
> >
> > > [!CAUTION] Red Flags
> > > - Jika MGF berbentuk $(1-\beta t)^{-\alpha}$ → kenali sebagai Gamma, gunakan formula momen Gamma.
> > > - MGF penjumlahan variabel independen = produk MGF masing-masing → pangkat bisa langsung dijumlahkan jika basis sama.
> > > - $E[X^3]$ dan $(E[X])^3$ adalah dua hal yang **sangat berbeda**.

---

## **No. 22**

Berapakah peluang dari 5 kartu yang diambil secara acak dan tanpa pengembalian dari setumpuk kartu standar yang berjumlah 52 kartu, terdiri dari 1 Raja Sekop, 1 Raja lainnya, 2 Ratu, serta 1 kartu lainnya yang bukan Raja atau Ratu?

a. $\dfrac{\dbinom{4}{2}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$  
b. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$  
c. $\dfrac{\dbinom{7}{3}\dbinom{44}{1}}{\dbinom{52}{5}}$  
d. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{11}{1}}{\dbinom{52}{5}}$  
e. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}}{\dbinom{52}{5}}$

> [!summary]+ **Jawaban No. 22**
>
> **(b). $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$**
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
> > **Aturan Perkalian Counting (Multiplication Principle):**
> > Jika setiap pilihan dilakukan secara terpisah dan independen, jumlah cara keseluruhan adalah hasil kali jumlah cara masing-masing pilihan.
> >
> > **Kombinasi:** $\dbinom{n}{k}$ = jumlah cara memilih $k$ objek dari $n$ objek tanpa memperhatikan urutan.
> >
> > **Struktur kartu standar (52 kartu):**
> > - 4 Raja (♠ ♥ ♦ ♣), 4 Ratu (♠ ♥ ♦ ♣)
> > - Kartu bukan Raja/Ratu: $52 - 4 - 4 = 44$ kartu
>
> **Diketahui:**
> - Kartu standar 52 lembar: 4 Raja, 4 Ratu, 44 lainnya
> - Target hand: **{1 Raja Sekop} + {1 Raja lain} + {2 Ratu} + {1 bukan Raja/Ratu}**
> - Total cara memilih 5 dari 52: $\dbinom{52}{5}$ (penyebut)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pahami Komposisi Hand yang Diinginkan**
> > Kita perlu 5 kartu dengan komposisi spesifik:
> > - **Slot 1:** 1 Raja Sekop — ini kartu yang *spesifik* (hanya ada 1 di seluruh dek)
> > - **Slot 2:** 1 Raja dari *bukan* Sekop — pilih dari 3 Raja yang tersisa (♥, ♦, ♣)
> > - **Slot 3–4:** 2 Ratu dari 4 Ratu yang ada
> > - **Slot 5:** 1 kartu yang bukan Raja dan bukan Ratu, dari 44 kartu tersisa
> >
> > **Langkah 2: Hitung Cara Mengisi Setiap Slot**
> >
> > | Slot | Deskripsi | Jumlah Cara |
> > |:-:|:-:|:-:|
> > | Raja Sekop | Spesifik, hanya 1 kartu | $\dbinom{1}{1} = 1$ |
> > | Raja lain (non-Sekop) | Pilih 1 dari 3 Raja tersisa | $\dbinom{3}{1}$ |
> > | 2 Ratu | Pilih 2 dari 4 Ratu | $\dbinom{4}{2}$ |
> > | 1 kartu lain | Pilih 1 dari 44 kartu non-Raja/Ratu | $\dbinom{44}{1}$ |
> >
> > **Langkah 3: Hitung Pembilang**
> > Menggunakan aturan perkalian:
> >
> > $$\text{Pembilang} = \binom{1}{1} \times \binom{3}{1} \times \binom{4}{2} \times \binom{44}{1} = 1 \times \binom{3}{1}\binom{4}{2}\binom{44}{1}$$
> >
> > **Langkah 4: Bentuk Peluang**
> >
> > $$P = \frac{\binom{3}{1}\binom{4}{2}\binom{44}{1}}{\binom{52}{5}}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{\dbinom{3}{1}\dbinom{4}{2}\dbinom{44}{1}}{\dbinom{52}{5}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Memilih 2 Raja dari 4** ($\binom{4}{2}$, opsi a): mengabaikan syarat bahwa *satu Raja harus Raja Sekop spesifik*. Jika pakai $\binom{4}{2}$, kita menghitung kombinasi yang mungkin tidak mengandung Raja Sekop.
> > > - **Salah hitung kartu non-Raja/Ratu:** $52 - 4 - 4 = 44$ (benar), bukan $52 - 4 - 4 - 4 = 40$.
> > > - **Memilih 1 dari 11** ($\binom{11}{1}$, opsi d): angka 11 tidak relevan dalam konteks ini.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "1 Raja Sekop" = kartu *spesifik dan tertentu* → tidak ada pilihan ($\binom{1}{1}=1$), yang dipilih adalah Raja *lainnya* dari 3 yang tersisa.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut kartu *spesifik* (seperti "Raja Sekop") → pisahkan dari kelompok umumnya; beri faktor $\binom{1}{1}=1$, lalu sisanya dipilih dari sisa grup.
> > > - Selalu hitung dulu jumlah total tiap kelompok kartu sebelum menulis kombinasi.

---

## **No. 23**

Misal $X$ merupakan variabel acak diskret dengan fungsi peluang $P(X = x) = \dfrac{2}{3^x}$ untuk $x = 1, 2, 3, \ldots$

Berapakah peluang $X$ merupakan angka genap?

a. $\dfrac{1}{4}$  
b. $\dfrac{2}{7}$  
c. $\dfrac{1}{3}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{3}{4}$

> [!summary]+ **Jawaban No. 23**
>
> **(a). $\dfrac{1}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Deret Geometri Tak Hingga:** Untuk $|r| < 1$:
> >
> > $$\sum_{k=1}^{\infty} r^k = \frac{r}{1-r}$$
> >
> > atau ekuivalen:
> >
> > $$\sum_{k=0}^{\infty} r^k = \frac{1}{1-r}$$
> >
> > **Ide Kunci:** Nilai genap ($x = 2, 4, 6, \ldots$) dapat ditulis sebagai $x = 2k$ untuk $k = 1, 2, 3, \ldots$ Substitusi ini mengubah deret dengan "langkah 2" menjadi deret geometri biasa dengan rasio baru $r^2$.
>
> **Diketahui:**
> - $P(X=x) = 2/3^x = 2 \cdot (1/3)^x$ untuk $x = 1, 2, 3, \ldots$
> - Target: $P(X \text{ genap}) = P(X=2) + P(X=4) + P(X=6) + \cdots$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi PMF Valid (Boleh Dilewat di Ujian)**
> >
> > $$\sum_{x=1}^\infty \frac{2}{3^x} = 2 \sum_{x=1}^\infty \left(\frac{1}{3}\right)^x = 2 \cdot \frac{1/3}{1-1/3} = 2 \cdot \frac{1/3}{2/3} = 2 \cdot \frac{1}{2} = 1 \checkmark$$
> >
> > **Langkah 2: Tulis Deret untuk Nilai Genap**
> >
> > $$P(X \text{ genap}) = P(X=2) + P(X=4) + P(X=6) + \cdots = \sum_{k=1}^{\infty} P(X = 2k)$$
> >
> > Substitusikan $x = 2k$ ke dalam PMF:
> >
> > $$P(X = 2k) = \frac{2}{3^{2k}} = 2 \cdot \left(\frac{1}{3^2}\right)^k = 2 \cdot \left(\frac{1}{9}\right)^k$$
> >
> > **Langkah 3: Jumlahkan Deret Geometri**
> >
> > $$P(X \text{ genap}) = \sum_{k=1}^{\infty} 2 \cdot \left(\frac{1}{9}\right)^k = 2 \sum_{k=1}^{\infty} \left(\frac{1}{9}\right)^k$$
> >
> > Gunakan rumus deret geometri dengan $r = 1/9$:
> >
> > $$= 2 \cdot \frac{1/9}{1 - 1/9} = 2 \cdot \frac{1/9}{8/9} = 2 \cdot \frac{1}{8} = \frac{2}{8} = \frac{1}{4}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menggunakan rasio $r = 1/3$ (bukan $1/9$):** untuk nilai genap $x = 2, 4, 6, \ldots$, rasio antar suku berurutan adalah $(1/3)^2 = 1/9$ karena $x$ melompat 2. Menggunakan $r=1/3$ akan menghasilkan jawaban yang salah.
> > > - **Lupa faktor 2 di PMF:** menulis $\sum (1/9)^k$ tanpa mengalikan dengan 2.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk mencari $P(X \in \{2, 4, 6, \ldots\})$ dari PMF berbentuk $c \cdot r^x$ → substitusi $x = 2k$, rasio baru menjadi $r^2$.
> > > - Hasil $P(X \text{ genap}) < P(X \text{ ganjil})$ masuk akal di sini karena PMF menurun cepat, dan nilai ganjil terkecil ($x=1$) sudah memiliki peluang $2/3$.

---

## **No. 24**

Misal $X$ memiliki sebaran binomial dengan parameter $n$ dan $p$, dan distribusi bersyarat dari $Y$ jika diketahui $X = x$ mengikuti sebaran Poisson dengan rataan $x$.

Tentukan varians dari $Y$!

a. $x$  
b. $np$  
c. $np(1 - p)$  
d. $np^2$  
e. $np(2 - p)$

> [!summary]+ **Jawaban No. 24**
>
> **(e). $np(2-p)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Hogg-McKean-Craig Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Variansi Total (Law of Total Variance):**
> >
> > $$\text{Var}(Y) = E\bigl[\text{Var}(Y \mid X)\bigr] + \text{Var}\bigl(E[Y \mid X]\bigr)$$
> >
> > Rumus ini terdiri dari dua suku yang **keduanya wajib dihitung**:
> > - Suku 1: $E[\text{Var}(Y|X)]$ = rata-rata dari varians bersyarat
> > - Suku 2: $\text{Var}(E[Y|X])$ = varians dari rata-rata bersyarat
> >
> > **Properti Distribusi Poisson:** Jika $Y|X=x \sim \text{Poisson}(x)$, maka:
> > - $E[Y \mid X=x] = x$ (mean Poisson = parameternya)
> > - $\text{Var}(Y \mid X=x) = x$ (varians Poisson = parameternya juga)
> >
> > **Properti Distribusi Binomial:** Jika $X \sim B(n,p)$, maka:
> > - $E[X] = np$
> > - $\text{Var}(X) = np(1-p)$
>
> **Diketahui:**
> - $X \sim B(n, p)$
> - $Y \mid X = x \sim \text{Poisson}(\lambda = x)$
> - Target: $\text{Var}(Y)$ tanpa kondisi apapun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Momen Bersyarat sebagai Fungsi dari $X$**
> > Karena $Y|X=x \sim \text{Poisson}(x)$:
> >
> > $$E[Y \mid X] = X \quad \text{(fungsi dari variabel acak }X\text{)}$$
> >
> > $$\text{Var}(Y \mid X) = X \quad \text{(fungsi dari variabel acak }X\text{)}$$
> >
> > **Langkah 2: Hitung Suku Pertama — $E[\text{Var}(Y|X)]$**
> >
> > $$E\bigl[\text{Var}(Y \mid X)\bigr] = E[X] = np$$
> >
> > **Langkah 3: Hitung Suku Kedua — $\text{Var}(E[Y|X])$**
> >
> > $$\text{Var}\bigl(E[Y \mid X]\bigr) = \text{Var}(X) = np(1-p)$$
> >
> > **Langkah 4: Gabungkan Kedua Suku**
> >
> > $$\text{Var}(Y) = E[\text{Var}(Y|X)] + \text{Var}(E[Y|X]) = np + np(1-p)$$
> >
> > Faktorkan $np$:
> >
> > $$= np\bigl(1 + (1-p)\bigr) = np(2-p)$$
> >
> > **Hasil Akhir:** **(e)**. $np(2-p)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Hanya menghitung satu suku:** menjawab $np$ (hanya suku pertama, opsi b) atau $np(1-p)$ (hanya suku kedua, opsi c) — hukum variansi total **selalu** terdiri dari dua suku.
> > > - **Menjawab $x$** (opsi a): $x$ adalah nilai yang sudah diketahui/ditetapkan, bukan variabel acak. $\text{Var}(Y)$ yang diminta adalah tanpa kondisi apapun.
> > > - **Bingung antara $E[\text{Var}(Y|X)]$ dan $\text{Var}(E[Y|X])$:** keduanya berbeda. Yang pertama: ambil varians dulu baru ekspektasi. Yang kedua: ambil ekspektasi dulu baru varians.
> >
> > > [!CAUTION] Red Flags
> > > - Hukum variansi total wajib digunakan saat ada struktur hierarkis: "$Y$ bergantung pada $X$, dan $X$ adalah variabel acak".
> > > - Untuk distribusi Poisson: mean = varians = parameter $\lambda$. Ini membuat $E[Y|X] = \text{Var}(Y|X) = X$ — properti khusus Poisson yang sering diuji.
> > > - Jika $Y|X=x \sim$ distribusi apapun dengan mean $= ax+b$ dan varians $= cx+d$ → substitusi ke hukum variansi total secara langsung.

---

## **No. 25**

Seorang aktuaris melakukan studi pengalaman mengenai kemungkinan berbagai kategori usia pengendara yang terlibat dalam setidaknya satu kecelakaan dalam periode satu tahun. Hasil studi diberikan sebagai berikut:

| Kategori Usia Pengendara | % Banyaknya Pengendara | Peluang Setidaknya Satu Kecelakaan Terjadi |
|:-:|:-:|:-:|
| Remaja | $8\%$ | $0{,}15$ |
| Dewasa Muda | $16\%$ | $0{,}08$ |
| Paruh Baya | $45\%$ | $0{,}04$ |
| Usia Tua | $31\%$ | $0{,}05$ |
| Total | $100\%$ | |

Jika seorang pengendara diketahui terlibat dalam setidaknya satu kecelakaan di tahun lalu, berapakah peluang pengendara tersebut dari kategori Dewasa Muda? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}06$  
b. $0{,}16$  
c. $0{,}19$  
d. $0{,}22$  
e. $0{,}25$

> [!summary]+ **Jawaban No. 25**
>
> **(d). $0{,}22$**
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
> > **Hukum Probabilitas Total** — menghitung peluang suatu kejadian dengan menjumlahkan kontribusi dari semua kemungkinan "penyebab":
> >
> > $$P(A) = \sum_i P(A \mid C_i) \cdot P(C_i)$$
> >
> > **Teorema Bayes** — membalik arah kondisi (dari "peluang kecelakaan given kategori" menjadi "peluang kategori given kecelakaan"):
> >
> > $$P(C_i \mid A) = \frac{P(A \mid C_i) \cdot P(C_i)}{P(A)}$$
> >
> > Di sini: $A$ = "terlibat kecelakaan", $C_i$ = kategori usia.
>
> **Diketahui:**
> - $P(\text{Remaja}) = 0{,}08$; $P(\text{DM}) = 0{,}16$; $P(\text{PB}) = 0{,}45$; $P(\text{UT}) = 0{,}31$
> - $P(A|\text{Remaja}) = 0{,}15$; $P(A|\text{DM}) = 0{,}08$; $P(A|\text{PB}) = 0{,}04$; $P(A|\text{UT}) = 0{,}05$
> - Target: $P(\text{DM} \mid A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Peluang Bersama untuk Setiap Kategori**
> > Peluang bersama = proporsi kategori × peluang kecelakaan dalam kategori tersebut:
> >
> > | Kategori | $P(C_i)$ | $P(A|C_i)$ | $P(A \cap C_i) = P(C_i) \times P(A|C_i)$ |
> > |:-:|:-:|:-:|:-:|
> > | Remaja | $0{,}08$ | $0{,}15$ | $0{,}08 \times 0{,}15 = 0{,}0120$ |
> > | Dewasa Muda | $0{,}16$ | $0{,}08$ | $0{,}16 \times 0{,}08 = 0{,}0128$ |
> > | Paruh Baya | $0{,}45$ | $0{,}04$ | $0{,}45 \times 0{,}04 = 0{,}0180$ |
> > | Usia Tua | $0{,}31$ | $0{,}05$ | $0{,}31 \times 0{,}05 = 0{,}0155$ |
> >
> > **Langkah 2: Hitung $P(A)$ dengan Hukum Total**
> >
> > $$P(A) = 0{,}0120 + 0{,}0128 + 0{,}0180 + 0{,}0155 = 0{,}0583$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(\text{DM} \mid A) = \frac{P(A \cap \text{DM})}{P(A)} = \frac{0{,}0128}{0{,}0583} \approx 0{,}2196 \approx 0{,}22$$
> >
> > **Interpretasi:** Meskipun Dewasa Muda hanya 16% dari populasi pengendara, mereka menyumbang sekitar 22% dari pengendara yang terlibat kecelakaan — sedikit lebih tinggi dari proporsi aslinya.
> >
> > **Hasil Akhir:** **(d)**. $0{,}22$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menjawab $0{,}16$** (opsi b): ini adalah proporsi Dewasa Muda di populasi ($P(\text{DM})$), bukan peluang bersyarat setelah diketahui terlibat kecelakaan.
> > > - **Menjawab $0{,}08$** (opsi a ≈): ini adalah peluang kecelakaan *given* Dewasa Muda ($P(A|\text{DM})$), bukan yang ditanya (arahnya terbalik).
> > > - **Salah menjumlahkan $P(A)$:** melewatkan satu kategori saat menghitung hukum total.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Jika diketahui terlibat kecelakaan" → ini sinyal kuat untuk Teorema Bayes. Arah pertanyaan terbalik dari data yang diberikan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal berstruktur: "diketahui terjadi suatu kejadian, berapa peluang berasal dari kelompok tertentu?" → **selalu Teorema Bayes**.
> > > - Hitung $P(A)$ lengkap dari semua kategori sebelum menghitung posterior. Jangan hanya menggunakan dua atau tiga kategori.

---

## **No. 26**

Future lifetime (dalam bulan) dari dua komponen sebuah mesin memiliki fungsi kepadatan peluang bersama:

$$f_{x,y}(x, y) = \begin{cases} \dfrac{6}{125{.}000}(50 - x - y), & \text{untuk } 0 < x < 50 - y < 50 \\ 0, & \text{selainnya} \end{cases}$$

Tentukan peluang kedua komponen masih dapat digunakan 20 bulan dari sekarang!

a. $\dfrac{6}{125{.}000} \int_{0}^{20} \int_{0}^{20} (50 - x - y) \, dy \, dx$  
b. $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50 - x - y) \, dy \, dx$  
c. $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x-y} (50 - x - y) \, dy \, dx$  
d. $\dfrac{6}{125{.}000} \int_{20}^{50} \int_{20}^{50-x} (50 - x - y) \, dy \, dx$  
e. $\dfrac{6}{125{.}000} \int_{20}^{50} \int_{20}^{50-x-y} (50 - x - y) \, dy \, dx$

> [!summary]+ **Jawaban No. 26**
>
> **(b). $\dfrac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50 - x - y) \, dy \, dx$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Support dari $f(x,y)$:** Kondisi $0 < x < 50-y < 50$ berarti:
> > - $x > 0$, $y > 0$, dan $x + y < 50$
> > - Daerah ini berbentuk **segitiga** dengan sudut di $(0,0)$, $(50,0)$, dan $(0,50)$.
> >
> > **Probabilitas bersama untuk wilayah $D$:**
> >
> > $$P((X,Y) \in D) = \iint_D f(x,y)\, dy\, dx$$
> >
> > Batas integral harus mencerminkan irisan antara kondisi soal ($x>20$, $y>20$) dengan support asli ($x+y<50$).
>
> **Diketahui:**
> - Support: segitiga $x>0$, $y>0$, $x+y<50$
> - "Kedua komponen masih hidup 20 bulan lagi" = $X > 20$ **dan** $Y > 20$
> - Target: $P(X > 20,\; Y > 20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gambarkan Daerah Integrasi**
> > Kita perlu irisan tiga kondisi:
> > 1. $x > 20$ (komponen 1 masih hidup)
> > 2. $y > 20$ (komponen 2 masih hidup)
> > 3. $x + y < 50$ (dalam support PDF)
> >
> > **Langkah 2: Tentukan Batas untuk $x$ (integral luar)**
> > Dari kondisi $x > 20$ dan $x + y < 50$ dengan $y > 20$:
> > - Kita butuh $y < 50 - x$ dengan $y > 20$
> > - Agar ada nilai $y$ yang valid: batas bawah $y$ ($=20$) harus lebih kecil dari batas atas $y$ ($=50-x$)
> > - Artinya: $20 < 50 - x$, sehingga $x < 30$
> > - Jadi batas untuk $x$: $20 < x < 30$
> >
> > **Langkah 3: Tentukan Batas untuk $y$ (integral dalam)**
> > Untuk $x$ yang tetap dalam $(20, 30)$:
> > - Batas bawah $y$: harus $y > 20$
> > - Batas atas $y$: dari support, $y < 50 - x$
> > - Jadi: $20 < y < 50 - x$
> >
> > **Ringkasan Batas:**
> >
> > | Variabel | Batas Bawah | Batas Atas |
> > |:-:|:-:|:-:|
> > | $x$ (luar) | $20$ | $30$ |
> > | $y$ (dalam) | $20$ | $50-x$ |
> >
> > **Langkah 4: Tulis Integral**
> >
> > $$P(X>20, Y>20) = \frac{6}{125{.}000} \int_{20}^{30} \int_{20}^{50-x} (50-x-y)\, dy\, dx$$
> >
> > **Mengapa batas atas $x$ bukan 50?** (jebakan opsi d)
> > Jika $x \geq 30$, maka $50-x \leq 20$, sehingga batas atas $y$ ($=50-x$) menjadi $\leq 20$ — lebih kecil dari batas bawah $y$ ($=20$). Interval integral menjadi kosong, kontribusinya nol. Jadi batas $x$ efektifnya hanya sampai 30.
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{6}{125{.}000} \displaystyle\int_{20}^{30} \int_{20}^{50-x} (50-x-y)\, dy\, dx$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Memilih batas atas $x = 50$** (opsi d): tidak mempertimbangkan bahwa $y > 20$ mensyaratkan $50-x > 20$, yaitu $x < 30$.
> > > - **Memilih opsi (a) dengan batas 0 ke 20:** batas integral dari 0 ke 20 menghasilkan $P(X < 20, Y < 20)$ — justru komplemen dari yang diminta.
> > > - **Batas atas $y$ ditulis $50-x-y$** (opsi c dan e): batas atas integral tidak boleh mengandung variabel yang sedang diintegralkan ($y$).
> >
> > > [!CAUTION] Red Flags
> > > - Untuk soal distribusi bersama dengan support berbentuk segitiga: **selalu gambar daerah integrasinya** sebelum menulis batas.
> > > - Saat menentukan batas luar ($x$): cek kondisi agar batas dalam ($y$) punya interval yang valid (batas bawah < batas atas).

---

## **No. 27**

Besaran klaim-klaim yang diajukan atas polis asuransi kendaraan bermotor mengikuti distribusi normal dengan mean $19{.}400$ dan deviasi standar $5{.}000$.

Berapakah peluang rata-rata dari 25 sampel yang diambil secara acak melebihi $20{.}000$? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}01$  
b. $0{,}15$  
c. $0{,}27$  
d. $0{,}33$  
e. $0{,}45$

> [!summary]+ **Jawaban No. 27**
>
> **(c). $0{,}27$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.2 Distribusi Sampel]] · [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Rata-Rata Sampel:**
> > Jika $X_1, X_2, \ldots, X_n \sim N(\mu, \sigma^2)$ i.i.d., maka rata-rata sampel:
> >
> > $$\bar{X} = \frac{X_1 + X_2 + \cdots + X_n}{n} \sim N\!\left(\mu,\; \frac{\sigma^2}{n}\right)$$
> >
> > artinya rata-rata sampel memiliki:
> > - Mean yang sama: $E[\bar{X}] = \mu$
> > - Standar deviasi yang lebih kecil: $\text{SD}(\bar{X}) = \dfrac{\sigma}{\sqrt{n}}$ (disebut *standard error*)
> >
> > **Standardisasi:**
> >
> > $$P(\bar{X} > c) = P\!\left(Z > \frac{c - \mu}{\sigma/\sqrt{n}}\right), \quad Z \sim N(0,1)$$
> >
>
> **Diketahui:**
> - $\mu = 19{.}400$, $\sigma = 5{.}000$, $n = 25$
> - Target: $P(\bar{X} > 20{.}000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Standard Error (SE) Rata-Rata Sampel**
> >
> > $$\text{SE} = \frac{\sigma}{\sqrt{n}} = \frac{5{.}000}{\sqrt{25}} = \frac{5{.}000}{5} = 1{.}000$$
> >
> > Artinya: rata-rata dari 25 sampel menyebar dengan standar deviasi $1{.}000$ (jauh lebih kecil dari $5{.}000$ untuk satu observasi).
> >
> > **Langkah 2: Hitung $Z$-score**
> >
> > $$Z = \frac{\bar{X} - \mu}{\text{SE}} = \frac{20{.}000 - 19{.}400}{1{.}000} = \frac{600}{1{.}000} = 0{,}6$$
> >
> > **Langkah 3: Baca Tabel Normal Standar**
> >
> > $$P(\bar{X} > 20{.}000) = P(Z > 0{,}6) = 1 - \Phi(0{,}6) \approx 1 - 0{,}7257 = 0{,}2743 \approx 0{,}27$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}27$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menggunakan $\sigma = 5{.}000$ langsung** (tanpa dibagi $\sqrt{n}$): menghasilkan $Z = 600/5{.}000 = 0{,}12$, lalu $P(Z>0{,}12) \approx 0{,}45$ — opsi (e). Ini keliru karena pertanyaan tentang *rata-rata* sampel, bukan satu klaim individual.
> > > - **Mengalikan $\sigma$ dengan $\sqrt{n}$** alih-alih membagi: $5{.}000 \times 5 = 25{.}000$ — ini rumus untuk SD total $S_n$, bukan SD rata-rata $\bar{X}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Kata kunci "rata-rata dari 25 sampel" → ini adalah distribusi $\bar{X}$, bukan distribusi $X$ individu. Selalu gunakan $\sigma/\sqrt{n}$ sebagai standard error.
> >
> > > [!CAUTION] Red Flags
> > > - "Rata-rata dari $n$ sampel melebihi $c$" → gunakan $\text{SE} = \sigma/\sqrt{n}$.
> > > - "Satu klaim melebihi $c$" → gunakan $\sigma$ langsung.
> > > - Dua pertanyaan yang berbeda! Selalu perhatikan apakah soal tentang satu nilai atau rata-rata.

---

## **No. 28**

Suatu perusahaan menentukan harga dari asuransi gempa bumi dengan menggunakan asumsi-asumsi sebagai berikut:

(i) Di setiap tahun kalender, terdapat hanya satu kali gempa bumi  
(ii) Di setiap tahun kalender, peluang terjadinya gempa bumi sebesar $0{,}05$  
(iii) Banyaknya gempa bumi yang terjadi di setiap tahun kalender saling bebas  

Dengan menggunakan asumsi di atas, tentukan peluang terjadi kurang dari 3 gempa bumi dalam 20 tahun. (Pilihlah jawaban yang paling mendekati!)

a. $0{,}06$  
b. $0{,}19$  
c. $0{,}38$  
d. $0{,}62$  
e. $0{,}92$

> [!summary]+ **Jawaban No. 28**
>
> **(e). $0{,}92$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial** $N \sim B(n, p)$: jumlah "sukses" dalam $n$ percobaan Bernoulli independen dengan peluang sukses $p$ per percobaan.
> >
> > $$P(N=k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> >
> > **Mengapa Binomial?** Tiap tahun adalah percobaan Bernoulli: gempa (sukses, $p=0{,}05$) atau tidak (gagal, $p=0{,}95$). Dalam 20 tahun yang independen, total gempa $N \sim B(20, 0{,}05)$.
>
> **Diketahui:**
> - $n = 20$ tahun, $p = 0{,}05$ per tahun, antar tahun independen
> - $N \sim B(20,\; 0{,}05)$
> - Target: $P(N < 3) = P(N=0) + P(N=1) + P(N=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N=0)$ — Tidak Ada Gempa Sama Sekali**
> >
> > $$P(N=0) = \binom{20}{0}(0{,}05)^0(0{,}95)^{20} = 1 \times 1 \times (0{,}95)^{20}$$
> >
> > $(0{,}95)^{20} \approx 0{,}3585$
> >
> > **Langkah 2: Hitung $P(N=1)$ — Tepat 1 Gempa**
> >
> > $$P(N=1) = \binom{20}{1}(0{,}05)^1(0{,}95)^{19} = 20 \times 0{,}05 \times (0{,}95)^{19}$$
> >
> > $(0{,}95)^{19} = (0{,}95)^{20}/0{,}95 = 0{,}3585/0{,}95 \approx 0{,}3774$
> >
> > $$P(N=1) = 20 \times 0{,}05 \times 0{,}3774 = 1 \times 0{,}3774 = 0{,}3774$$
> >
> > **Langkah 3: Hitung $P(N=2)$ — Tepat 2 Gempa**
> >
> > $$P(N=2) = \binom{20}{2}(0{,}05)^2(0{,}95)^{18} = 190 \times 0{,}0025 \times (0{,}95)^{18}$$
> >
> > $(0{,}95)^{18} = 0{,}3774/0{,}95 \approx 0{,}3972$
> >
> > $$P(N=2) = 190 \times 0{,}0025 \times 0{,}3972 = 0{,}475 \times 0{,}3972 \approx 0{,}1887$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$P(N < 3) = P(N=0) + P(N=1) + P(N=2) = 0{,}3585 + 0{,}3774 + 0{,}1887 = 0{,}9246 \approx 0{,}92$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}92$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menganggap distribusinya Poisson** (karena $p$ kecil dan $n$ besar): memang Poisson bisa jadi aproksimasi ($\lambda = np = 1$), tetapi soal tidak meminta aproksimasi — gunakan Binomial eksak.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **"Kurang dari 3"** = $\{0, 1, 2\}$ — jangan masukkan $P(N=3)$. Kata "kurang dari" (bukan "paling banyak") bersifat **ketat**.
> >
> > > [!CAUTION] Red Flags
> > > - "Kurang dari $k$" → jumlahkan $P(N=0)$ sampai $P(N=k-1)$ saja.
> > > - "Paling banyak $k$" atau "tidak lebih dari $k$" → jumlahkan $P(N=0)$ sampai $P(N=k)$.
> > > - Asumsi "di setiap tahun terjadi paling banyak 1 gempa" + independen + Bernoulli → Binomial, bukan Poisson.

---

## **No. 29**

Distribusi kerugian yang disebabkan oleh kerusakan akibat kebakaran gudang diberikan sebagai berikut:

| Besar Kerugian | Peluang |
|:-:|:-:|
| $0$ | $0{,}900$ |
| $500$ | $0{,}060$ |
| $1{.}000$ | $0{,}030$ |
| $10{.}000$ | $0{,}008$ |
| $50{.}000$ | $0{,}001$ |
| $100{.}000$ | $0{,}001$ |

Jika kerugian lebih besar dari nol, tentukan nilai ekspektasi dari kerugian tersebut! (Pilihlah jawaban yang paling mendekati!)

a. $290$  
b. $322$  
c. $1{.}704$  
d. $2{.}900$  
e. $32{.}222$

> [!summary]+ **Jawaban No. 29**
>
> **(d). $2{.}900$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] · [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Nilai Ekspektasi Bersyarat** (diskrit):
> >
> > $$E[X \mid X > 0] = \frac{\displaystyle\sum_{x > 0} x \cdot P(X = x)}{P(X > 0)}$$
> >
> > **Intuisi:** Kita membatasi pandangan hanya pada kasus di mana kerugian benar-benar terjadi ($X > 0$). Distribusi bersyarat ini "menghapus" kasus $X=0$ dan menormalisasi ulang peluang sisanya.
>
> **Diketahui:**
> - $P(X=0) = 0{,}900$ → $P(X>0) = 1 - 0{,}900 = 0{,}100$
> - Nilai kerugian positif: 500, 1.000, 10.000, 50.000, 100.000
> - Target: $E[X \mid X > 0]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Pembilang — $\sum_{x>0} x \cdot P(X=x)$**
> > Kalikan setiap nilai kerugian positif dengan peluangnya:
> >
> > | Besar Kerugian $x$ | Peluang $P(X=x)$ | $x \times P(X=x)$ |
> > |:-:|:-:|:-:|
> > | $500$ | $0{,}060$ | $500 \times 0{,}060 = 30$ |
> > | $1{.}000$ | $0{,}030$ | $1{.}000 \times 0{,}030 = 30$ |
> > | $10{.}000$ | $0{,}008$ | $10{.}000 \times 0{,}008 = 80$ |
> > | $50{.}000$ | $0{,}001$ | $50{.}000 \times 0{,}001 = 50$ |
> > | $100{.}000$ | $0{,}001$ | $100{.}000 \times 0{,}001 = 100$ |
> >
> > $$\sum_{x>0} x \cdot P(X=x) = 30 + 30 + 80 + 50 + 100 = 290$$
> >
> > *Catatan: nilai 290 ini adalah $E[X]$ tanpa kondisi (nilai ekspektasi kerugian tanpa syarat). Ini adalah opsi (a) — jebakan!*
> >
> > **Langkah 2: Hitung Penyebut — $P(X > 0)$**
> >
> > $$P(X > 0) = 1 - P(X=0) = 1 - 0{,}900 = 0{,}100$$
> >
> > **Langkah 3: Hitung Ekspektasi Bersyarat**
> >
> > $$E[X \mid X > 0] = \frac{290}{0{,}100} = 2{.}900$$
> >
> > **Interpretasi:** Rata-rata kerugian per kejadian kebakaran yang benar-benar menimbulkan kerugian adalah Rp2.900.000. Ini jauh lebih besar dari $E[X] = 290$ karena kita mengecualikan 90% kasus tanpa kerugian.
> >
> > **Hasil Akhir:** **(d)**. $2{.}900$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menjawab 290** (opsi a): nilai ini adalah $E[X]$ tanpa syarat, bukan $E[X|X>0]$. Lupa membagi dengan $P(X>0) = 0{,}1$.
> > > - **Salah menghitung $P(X>0)$:** menggunakan $0{,}060+0{,}030+\cdots = 0{,}100$ (benar) atau menggunakan $1-0{,}9=0{,}1$ (juga benar) — keduanya sama.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Jika kerugian lebih besar dari nol" → ini adalah **kondisi**, bukan filter. Gunakan rumus ekspektasi bersyarat, bukan hanya menjumlahkan nilai positif.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal berbunyi "jika [kondisi], berapa ekspektasinya?" → selalu bagi dengan peluang kondisi tersebut.
> > > - Hasil $E[X|X>0]$ harus **selalu lebih besar** dari $E[X]$ ketika $P(X=0) > 0$ — gunakan ini sebagai cek logika.

---

## **No. 30**

Misal $X$, $Y$, dan $Z$ memiliki nilai rataan sebesar 1, 2 dan 3 secara berturut-turut serta varians sebesar 4, 5 dan 9. Kovarians dari $X$ dan $Y$ sebesar 2, kovarians dari $X$ dan $Z$ sebesar 3, serta kovarians dari $Y$ dan $Z$ sebesar 1.

Berapakah nilai rataan dan varians, secara berurut-urut, dari variabel acak $3X + 2Y - Z$?

a. $4$ dan $31$  
b. $4$ dan $65$  
c. $4$ dan $67$  
d. $14$ dan $13$  
e. $14$ dan $65$

> [!summary]+ **Jawaban No. 30**
>
> **(c). $4$ dan $67$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] · [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $W = aX + bY + cZ$:
> >
> > **Nilai Harapan** (linear, selalu berlaku):
> >
> > $$E[W] = a\,E[X] + b\,E[Y] + c\,E[Z]$$
> >
> > **Varians** (perlu hati-hati dengan suku kovarians):
> >
> > $$\text{Var}(W) = a^2\text{Var}(X) + b^2\text{Var}(Y) + c^2\text{Var}(Z)$$
> >
> > $$\quad + 2ab\,\text{Cov}(X,Y) + 2ac\,\text{Cov}(X,Z) + 2bc\,\text{Cov}(Y,Z)$$
> >
> > **Catatan penting:** Tanda koefisien ($a$, $b$, $c$) mempengaruhi tanda suku kovarians. Jika $c = -1$, maka $2ac$ dan $2bc$ ikut berubah tanda.
>
> **Diketahui:**
> - $E[X]=1$, $E[Y]=2$, $E[Z]=3$
> - $\text{Var}(X)=4$, $\text{Var}(Y)=5$, $\text{Var}(Z)=9$
> - $\text{Cov}(X,Y)=2$, $\text{Cov}(X,Z)=3$, $\text{Cov}(Y,Z)=1$
> - $W = 3X + 2Y - Z$ → koefisien: $a=3$, $b=2$, $c=-1$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[W]$**
> >
> > $$E[W] = 3\,E[X] + 2\,E[Y] + (-1)\,E[Z] = 3(1) + 2(2) + (-1)(3) = 3 + 4 - 3 = 4$$
> >
> > **Langkah 2: Hitung Setiap Suku Varians Secara Terpisah**
> >
> > | Suku | Rumus | Nilai |
> > |:-:|:-:|:-:|
> > | $a^2\text{Var}(X)$ | $3^2 \times 4 = 9 \times 4$ | $36$ |
> > | $b^2\text{Var}(Y)$ | $2^2 \times 5 = 4 \times 5$ | $20$ |
> > | $c^2\text{Var}(Z)$ | $(-1)^2 \times 9 = 1 \times 9$ | $9$ |
> > | $2ab\,\text{Cov}(X,Y)$ | $2(3)(2)(2) = 12 \times 2$ | $24$ |
> > | $2ac\,\text{Cov}(X,Z)$ | $2(3)(-1)(3) = -6 \times 3$ | $-18$ |
> > | $2bc\,\text{Cov}(Y,Z)$ | $2(2)(-1)(1) = -4 \times 1$ | $-4$ |
> >
> > **Langkah 3: Jumlahkan Semua Suku**
> >
> > $$\text{Var}(W) = 36 + 20 + 9 + 24 + (-18) + (-4)$$
> >
> > $$= 36 + 20 + 9 + 24 - 18 - 4 = 67$$
> >
> > **Hasil Akhir:** **(c)**. $E[W] = 4$ dan $\text{Var}(W) = 67$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Lupa tanda negatif pada suku kovarians yang melibatkan $c=-1$:** menghitung $2ac\,\text{Cov}(X,Z) = +18$ (harusnya $-18$) dan $2bc\,\text{Cov}(Y,Z) = +4$ (harusnya $-4$). Kesalahan ini menghasilkan $67 + 18 + 4 + 18 + 4 = 67 + 22 = 65$ ... tidak, menghasilkan $36+20+9+24+18+4 = 111$ — terlalu besar. Kesalahan yang lebih halus: hanya salah tanda satu suku.
> > > - **Lupa mengkuadratkan koefisien varians:** menulis $a\,\text{Var}(X) = 3 \times 4 = 12$ (harusnya $9 \times 4 = 36$).
> > > - **Menghitung $E[W]$ sebagai $3(1)+2(2)+1(3) = 10$:** lupa tanda negatif koefisien $Z$, menghasilkan mean $= 10$ (mendekati opsi d, $14$, tapi masih salah).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Opsi (d) $E=14$ muncul jika menghitung $E[W] = 3(1)+2(2)+1(3) = 10$ atau $3+4+3 \neq 14$ — pastikan tanda koefisien $Z$ adalah negatif.
> >
> > > [!CAUTION] Red Flags
> > > - Setiap kali ada koefisien negatif dalam kombinasi linear → **wajib** bawa tanda negatif ke dalam semua suku kovarians yang melibatkan variabel itu.
> > > - Pilihan (b) dengan varians $65$: mungkin berasal dari menghitung $2ac\,\text{Cov}(X,Z) = +18$ (salah tanda) dan $2bc\,\text{Cov}(Y,Z) = +4$ (salah tanda), menghasilkan $36+20+9+24-18-4 = 67$... atau varian kesalahan lain. Selalu hitung satu per satu seperti tabel di atas.

---
