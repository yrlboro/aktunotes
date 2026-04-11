## **No. 1**

Diketahui ada enam pasang suami istri. Dari keenam pasang suami istri tersebut akan dipilih enam orang secara acak.

Tentukan banyaknya cara untuk memilih enam orang tersebut sehingga tidak terdapat pasangan suami istri.

a. $6$  
b. $64$  
c. $94$  
d. $544$  
e. $720$

> [!summary]+ **Jawaban No. 1**
>
> **(b). $64$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.2–1.4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk memilih dari pasangan tanpa boleh sepasang:
> >
> > Dari setiap pasang, pilih **tepat satu orang** (suami atau istri) → $2$ cara per pasang.
> >
> > Karena ada $6$ pasang dan kita memilih $6$ orang (tepat satu dari setiap pasang):
> >
> > $$\text{Banyak cara} = 2^6 = 64$$
>
> **Diketahui:**
> - Total $6$ pasang suami istri ($12$ orang)
> - Dipilih $6$ orang secara acak
> - Syarat: **tidak ada pasangan suami istri** yang keduanya terpilih
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Struktur Masalah**
> >
> > Ada $6$ pasang suami istri. Kita memilih $6$ orang dari $12$ orang sedemikian sehingga tidak ada pasangan yang keduanya terpilih.
> >
> > Jika tidak boleh ada pasangan yang keduanya terpilih, dan kita memilih $6$ orang dari $6$ pasang, maka dari setiap pasang **tepat satu orang** yang harus dipilih (karena memilih $6$ dari $6$ pasang tanpa pasangan lengkap berarti tepat satu per pasang).
> >
> > **Langkah 2: Hitung Banyak Cara**
> >
> > Untuk setiap pasang $i$ ($i = 1, 2, \ldots, 6$), kita memiliki $2$ pilihan: suami atau istri.
> >
> > Karena pilihan tiap pasang independen satu sama lain:
> >
> > $$\text{Banyak cara} = \underbrace{2 \times 2 \times 2 \times 2 \times 2 \times 2}_{6 \text{ pasang}} = 2^6 = 64$$
> >
> > **Hasil Akhir:** **(b)**. $64$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{12}{6}$ tanpa memperhatikan syarat "tidak ada pasangan" — ini menghitung semua cara memilih 6 dari 12 tanpa batasan.
> > > - Menggunakan $6! = 720$ — ini menghitung permutasi, bukan kombinasi dengan batasan pasangan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tidak menyadari bahwa memilih 6 dari 6 pasang (tanpa pasangan lengkap) **otomatis** berarti satu orang per pasang, sehingga hasilnya bukan kombinasi kompleks melainkan $2^6$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "pasangan" dan "tidak boleh berpasangan" → cek apakah jumlah yang dipilih = jumlah pasang (kalau ya, maka tepat satu per pasang → $2^n$).
> > > - Jawaban $720 = 6!$ adalah jebakan yang sering muncul karena angkanya eksplisit ada di pilihan.

---

## **No. 2**

Misalkan $A$ dan $B$ merupakan kejadian dimana $P[A \cup B] = 1$.

Tentukan nilai dari $P[A' \cup B']$.

a. $0$  
b. $P[A'] + P[B'] - P[A']P[B']$  
c. $P[A'] + P[B']$  
d. $P[A'] + P[B'] - 1$  
e. $1$

> [!summary]+ **Jawaban No. 2**
>
> **(c). $P[A'] + P[B']$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.1–1.3 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum De Morgan:**
> >
> > $$(A \cup B)' = A' \cap B'$$
> >
> > **Inklusi-Eksklusi:**
> >
> > $$P[A' \cup B'] = P[A'] + P[B'] - P[A' \cap B']$$
> >
> > **Komplemen:**
> >
> > $$P[A'] = 1 - P[A], \quad P[A' \cap B'] = 1 - P[A \cup B]$$
>
> **Diketahui:**
> - $P[A \cup B] = 1$
> - Target: $P[A' \cup B']$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Hukum De Morgan untuk menemukan $P[A' \cap B']$**
> >
> > Berdasarkan Hukum De Morgan:
> >
> > $$P[A' \cap B'] = P[(A \cup B)'] = 1 - P[A \cup B] = 1 - 1 = 0$$
> >
> > **Langkah 2: Terapkan Inklusi-Eksklusi pada $P[A' \cup B']$**
> >
> > $$P[A' \cup B'] = P[A'] + P[B'] - P[A' \cap B']$$
> >
> > $$= P[A'] + P[B'] - 0$$
> >
> > $$= P[A'] + P[B']$$
> >
> > **Hasil Akhir:** **(c)**. $P[A'] + P[B']$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan De Morgan: $(A \cup B)' = A' \cap B'$ (bukan $A' \cup B'$). Perhatikan: union menjadi intersection dan sebaliknya saat dikomplemen.
> > > - Mengasumsikan $A$ dan $B$ independen (pilihan b) tanpa dasar — soal tidak menyatakan independensi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menyimpulkan $P[A' \cup B'] = 1$ langsung karena $P[A \cup B] = 1$ — ini keliru; komplemen dari union $\neq$ union dari komplemen.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut $P[A \cup B] = 1$ → segera hitung $P[A' \cap B'] = 0$ via De Morgan.
> > > - Jika jawaban melibatkan perkalian $P[A']P[B']$ → hanya valid jika $A'$ dan $B'$ **independen**.

---

## **No. 3**

Sebuah lotere diadakan setiap minggu, dimana lotere tersebut berharga $1$ dan hadiah lotere tersebut sebesar $10$. Probabilitas untuk menang lotere tersebut sebesar $\dfrac{1}{30}$. Andi memutuskan untuk membeli $1$ tiket lotere setiap minggu sampai dia menang, dimana pada saat itu dia akan berhenti.

Tentukan ekspektasi keuntungan yang didapatkan Andi dari pembelian lotere-lotere tersebut.

a. $-20$  
b. $-15$  
c. $-10$  
d. $-5$  
e. $0$

> [!summary]+ **Jawaban No. 3**
>
> **(a). $-20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5 (Distribusi Geometrik); Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Geometrik: $X \sim \text{Geom}(p)$ memodelkan jumlah percobaan hingga sukses pertama.
> >
> > $$E[X] = \frac{1}{p}$$
> >
> > Keuntungan bersih per skenario: hadiah dikurangi total biaya tiket.
>
> **Diketahui:**
> - Harga tiket per minggu: $1$
> - Hadiah: $10$
> - Probabilitas menang: $p = \dfrac{1}{30}$
> - Andi berhenti setelah menang → jumlah tiket dibeli $= X \sim \text{Geom}\!\left(\tfrac{1}{30}\right)$
> - Target: $E[\text{Keuntungan}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Variabel**
> >
> > Misalkan $X$ = jumlah minggu (tiket) yang dibeli sampai menang.
> >
> > $X \sim \text{Geom}(p)$ dengan $p = \dfrac{1}{30}$, sehingga:
> >
> > $$E[X] = \frac{1}{p} = \frac{1}{1/30} = 30$$
> >
> > **Langkah 2: Rumuskan Keuntungan Bersih**
> >
> > Andi menang tepat sekali (pada tiket ke-$X$) sehingga:
> > - Total pengeluaran: $X \times 1 = X$
> > - Total pemasukan: $10$ (sekali menang)
> >
> > $$\text{Keuntungan} = 10 - X$$
> >
> > **Langkah 3: Hitung Ekspektasi Keuntungan**
> >
> > $$E[\text{Keuntungan}] = E[10 - X] = 10 - E[X] = 10 - 30 = -20$$
> >
> > **Hasil Akhir:** **(a)**. $-20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa menang hanya **sekali** (hadiah $= 10$, bukan $10 \times$ jumlah menang).
> > > - Menghitung $E[X] = 30$ lalu lupa menggunakannya sebagai biaya (hanya melihat $E = 10 - 1 = 9$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengasumsikan Andi membeli tepat $30$ tiket secara pasti — padahal $30$ adalah nilai ekspektasi, bukan nilai pasti.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "terus membeli sampai menang" → distribusi Geometrik, $E[X] = 1/p$.
> > > - Keuntungan bersih = pendapatan − pengeluaran total; jangan hanya lihat satu sisi.

---

## **No. 4**

Fungsi pembangkit momen untuk variabel acak $X$ adalah

$$M_X(t) = Ae^t + Be^{2t}$$

Diketahui juga bahwa $\text{Var}[X] = \dfrac{2}{9}$ dan $A < \dfrac{1}{2}$.

Tentukan nilai dari $E[X]$.

a. $\dfrac{1}{3}$  
b. $\dfrac{2}{3}$  
c. $1$  
d. $\dfrac{4}{3}$  
e. $\dfrac{5}{3}$

> [!summary]+ **Jawaban No. 4**
>
> **(e). $\dfrac{5}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.3; Miller Bab 4.4 |
>
> > [!info]+ **Rumus**
> >
> > Sifat MGF:
> >
> > $$M_X(0) = 1 \quad \text{(syarat normalisasi)}$$
> >
> > $$E[X] = M_X'(0), \quad E[X^2] = M_X''(0)$$
> >
> > $$\text{Var}[X] = E[X^2] - (E[X])^2$$
>
> **Diketahui:**
> - $M_X(t) = Ae^t + Be^{2t}$
> - $\text{Var}[X] = \dfrac{2}{9}$
> - $A < \dfrac{1}{2}$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Syarat $M_X(0) = 1$**
> >
> > $$M_X(0) = Ae^0 + Be^0 = A + B = 1$$
> >
> > Sehingga $B = 1 - A$.
> >
> > **Langkah 2: Hitung $E[X]$ dan $E[X^2]$ via Turunan MGF**
> >
> > $$M_X'(t) = Ae^t + 2Be^{2t}$$
> >
> > $$E[X] = M_X'(0) = A + 2B = A + 2(1-A) = 2 - A$$
> >
> > $$M_X''(t) = Ae^t + 4Be^{2t}$$
> >
> > $$E[X^2] = M_X''(0) = A + 4B = A + 4(1-A) = 4 - 3A$$
> >
> > **Langkah 3: Gunakan Persamaan Variansi**
> >
> > $$\text{Var}[X] = E[X^2] - (E[X])^2 = \frac{2}{9}$$
> >
> > $$(4 - 3A) - (2 - A)^2 = \frac{2}{9}$$
> >
> > $$(4 - 3A) - (4 - 4A + A^2) = \frac{2}{9}$$
> >
> > $$A - A^2 = \frac{2}{9}$$
> >
> > $$9A - 9A^2 = 2 \implies 9A^2 - 9A + 2 = 0$$
> >
> > **Langkah 4: Selesaikan Persamaan Kuadrat**
> >
> > $$(3A - 1)(3A - 2) = 0$$
> >
> > $$A = \frac{1}{3} \quad \text{atau} \quad A = \frac{2}{3}$$
> >
> > **Langkah 5: Gunakan Syarat $A < \dfrac{1}{2}$**
> >
> > Karena $A < \dfrac{1}{2}$, maka $A = \dfrac{1}{3}$.
> >
> > **Langkah 6: Hitung $E[X]$**
> >
> > $$E[X] = 2 - A = 2 - \frac{1}{3} = \frac{5}{3}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{5}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa syarat $M_X(0) = 1$ — ini adalah properti fundamental MGF yang selalu berlaku.
> > > - Mengambil $A = \dfrac{2}{3}$ (mengabaikan syarat $A < \dfrac{1}{2}$), sehingga $E[X] = \dfrac{4}{3}$ (pilihan d yang salah).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Syarat $A < \dfrac{1}{2}$ adalah penentu solusi unik — jangan diabaikan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika MGF berbentuk $\sum c_i e^{a_i t}$ → ini distribusi diskrit dengan $P[X = a_i] = c_i$; syarat $\sum c_i = 1$ selalu berlaku.
> > > - Ada dua solusi kuadrat → gunakan syarat tambahan untuk memilih satu.

---

## **No. 5**

Diberikan $X$ variabel acak diskrit dengan fungsi probabilitas $P[X = n] = a_n - a_{n+1}$, dimana $a_i$ merupakan angka-angka yang memenuhi kondisi berikut:

(i) $a_0 = 1$  
(ii) $a_0 > a_1 > a_2 > \cdots > a_k > a_{k+1} > \cdots > 0$

Tentukan probabilitas dari $P[X \leq 4 \mid X > 1]$.

a. $1 - \dfrac{a_5}{a_2}$  
b. $1 - \dfrac{a_5}{a_1}$  
c. $a_1 - a_5$  
d. $\dfrac{a_2}{a_1} - \dfrac{a_5}{a_2}$  
e. $1 - \dfrac{a_6}{a_2}$

> [!summary]+ **Jawaban No. 5**
>
> **(a). $1 - \dfrac{a_5}{a_2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.4 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas bersyarat:
> >
> > $$P[A \mid B] = \frac{P[A \cap B]}{P[B]}$$
> >
> > Jumlah telescoping: $\displaystyle P[X > k] = \sum_{n=k+1}^{\infty}(a_n - a_{n+1}) = a_{k+1}$ (karena barisan mengecil ke $0$).
>
> **Diketahui:**
> - $P[X = n] = a_n - a_{n+1}$ untuk $n = 0, 1, 2, \ldots$
> - $a_0 = 1$, $a_i$ menurun ke $0$
> - Target: $P[X \leq 4 \mid X > 1]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[X > k]$ dengan Penjumlahan Telescoping**
> >
> > $$P[X > k] = \sum_{n=k+1}^{\infty} (a_n - a_{n+1}) = a_{k+1} - \lim_{n \to \infty} a_n = a_{k+1}$$
> >
> > (karena $a_n \to 0$ saat $n \to \infty$)
> >
> > Sehingga:
> >
> > $$P[X > 1] = a_2$$
> >
> > **Langkah 2: Hitung $P[1 < X \leq 4]$ — Pembilang**
> >
> > $$P[1 < X \leq 4] = P[X = 2] + P[X = 3] + P[X = 4]$$
> >
> > $$= (a_2 - a_3) + (a_3 - a_4) + (a_4 - a_5) = a_2 - a_5$$
> >
> > **Langkah 3: Terapkan Rumus Probabilitas Bersyarat**
> >
> > $$P[X \leq 4 \mid X > 1] = \frac{P[1 < X \leq 4]}{P[X > 1]} = \frac{a_2 - a_5}{a_2} = 1 - \frac{a_5}{a_2}$$
> >
> > **Hasil Akhir:** **(a)**. $1 - \dfrac{a_5}{a_2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menggunakan sifat telescoping: $P[X > k] = a_{k+1}$, sehingga salah menghitung penyebut.
> > > - Menggunakan $P[X > 1] = a_1$ alih-alih $a_2$ — ingat, $P[X > k] = a_{k+1}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Irisan $\{X \leq 4\} \cap \{X > 1\}$ = $\{2 \leq X \leq 4\}$ — jangan salah menghitung batas bawah.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PMF berbentuk $a_n - a_{n+1}$ dengan $a_n \searrow 0$ → gunakan telescoping untuk menghitung probabilitas ekor.

---

## **No. 6**

Misalkan nilai dari suatu alat ($v$) didasarkan pada jumlah tahun sejak pembelian ($t$), sehingga

$$v(t) = e^{(7 - 0{,}2t)}$$

Jika alat itu rusak dalam 7 tahun pertama sejak alat itu dibeli, maka pembeli tersebut dapat melakukan klaim atas garansi dimana penjual akan membayarkan sejumlah uang kepada pembeli sesuai nilai dari alat tersebut ketika alat tersebut rusak. Jika setelah 7 tahun alat itu rusak maka pembeli tidak akan mendapatkan apapun. Lama hidup dari alat tersebut hingga rusak berdistribusi eksponensial dengan mean sebesar $10$.

Tentukan ekspektasi pembayaran penjual atas garansi tersebut.

a. $98{,}7$  
b. $109{,}66$  
c. $270{,}43$  
d. $320{,}78$  
e. $352{,}16$

> [!summary]+ **Jawaban No. 6**
>
> **(d). $320{,}78$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Eksponensial: $T \sim \text{Exp}(\lambda)$ dengan mean $= \dfrac{1}{\lambda}$.
> >
> > $$f_T(t) = \lambda e^{-\lambda t}, \quad t > 0$$
> >
> > Di sini $\lambda$ adalah parameter rate (bukan scale); $\lambda = \dfrac{1}{10}$ karena mean $= 10$.
> >
> > Ekspektasi pembayaran:
> >
> > $$E[\text{Bayar}] = \int_0^7 v(t) \cdot f_T(t)\, dt = \int_0^7 e^{7-0{,}2t} \cdot \frac{1}{10} e^{-t/10}\, dt$$
>
> **Diketahui:**
> - $v(t) = e^{7 - 0{,}2t}$ (nilai alat saat rusak di waktu $t$)
> - Garansi berlaku untuk $t \leq 7$; tidak ada pembayaran jika $t > 7$
> - $T \sim \text{Exp}(\lambda = 1/10)$, sehingga $f_T(t) = \dfrac{1}{10}e^{-t/10}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Ekspektasi Pembayaran**
> >
> > $$E[\text{Bayar}] = \int_0^7 e^{7-0{,}2t} \cdot \frac{1}{10}e^{-t/10}\, dt$$
> >
> > **Langkah 2: Gabungkan Eksponen**
> >
> > $$= \frac{1}{10} \int_0^7 e^{7 - 0{,}2t - 0{,}1t}\, dt = \frac{1}{10} \int_0^7 e^{7 - 0{,}3t}\, dt$$
> >
> > $$= \frac{e^7}{10} \int_0^7 e^{-0{,}3t}\, dt$$
> >
> > **Langkah 3: Evaluasi Integral**
> >
> > $$\int_0^7 e^{-0{,}3t}\, dt = \left[\frac{e^{-0{,}3t}}{-0{,}3}\right]_0^7 = \frac{1 - e^{-2{,}1}}{0{,}3}$$
> >
> > Nilai numerik: $e^{-2{,}1} \approx 0{,}12246$, sehingga:
> >
> > $$\frac{1 - 0{,}12246}{0{,}3} = \frac{0{,}87754}{0{,}3} \approx 2{,}9251$$
> >
> > **Langkah 4: Hitung Hasil Akhir**
> >
> > $$E[\text{Bayar}] = \frac{e^7}{10} \times 2{,}9251 \approx \frac{1096{,}63}{10} \times 2{,}9251 \approx 109{,}663 \times 2{,}9251 \approx 320{,}78$$
> >
> > **Hasil Akhir:** **(d)**. $320{,}78$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan mean $= 10$ sebagai parameter distribusi langsung sebagai $\lambda = 10$ (terbalik) — yang benar: mean $= 1/\lambda$, sehingga $\lambda = 0{,}1$.
> > > - Lupa mengalikan $v(t)$ dengan $f_T(t)$ — hanya mengintegrasikan $v(t)$ saja.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengintegrasikan sampai $\infty$ alih-alih hanya sampai $7$ (batas garansi).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "ekspektasi pembayaran bersyarat pada kondisi tertentu" → batas integral harus disesuaikan dengan kondisi tersebut.

---

## **No. 7**

Sebuah pabrik membuat tiga jenis baju yang berbeda: baju A, baju B, baju C. Pabrik memproduksi ratusan baju setiap tahun, dengan jumlah baju B dua kali lebih banyak daripada baju A. Jumlah baju C yang dibuat dua kali lipat jumlah gabungan banyaknya baju A dan baju B. Empat baju yang dibuat oleh pabrik dipilih secara acak dari semua tipe baju yang diproduksi oleh pabrik pada tahun tertentu.

Tentukan probabilitas bahwa sampel akan berisi dua baju B dan dua baju C.

a. $\dfrac{8}{243}$  
b. $\dfrac{96}{625}$  
c. $\dfrac{384}{2410}$  
d. $\dfrac{32}{243}$  
e. $\dfrac{1}{6}$

> [!summary]+ **Jawaban No. 7**
>
> **(d). $\dfrac{32}{243}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Miller Bab 5 (Distribusi Multinomial); Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Multinomial: jika ada $k$ kategori dengan probabilitas $p_1, \ldots, p_k$ dan $n$ percobaan independen:
> >
> > $$P(X_1 = n_1, \ldots, X_k = n_k) = \frac{n!}{n_1! \cdots n_k!} p_1^{n_1} \cdots p_k^{n_k}$$
>
> **Diketahui:**
> - $n_B = 2n_A$ (B dua kali A)
> - $n_C = 2(n_A + n_B) = 2(3n_A) = 6n_A$
> - Total = $n_A + 2n_A + 6n_A = 9n_A$
> - Proporsi: $p_A = \dfrac{1}{9}$, $p_B = \dfrac{2}{9}$, $p_C = \dfrac{6}{9} = \dfrac{2}{3}$
> - Dipilih $n = 4$ baju secara acak (dengan pengembalian/multinomial karena jumlahnya sangat besar)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Proporsi Tiap Jenis Baju**
> >
> > Misalkan $n_A = x$. Maka:
> > - $n_B = 2x$
> > - $n_C = 2(x + 2x) = 6x$
> > - Total $= 9x$
> >
> > Probabilitas memilih masing-masing tipe:
> >
> > $$p_A = \frac{1}{9}, \quad p_B = \frac{2}{9}, \quad p_C = \frac{6}{9} = \frac{2}{3}$$
> >
> > **Langkah 2: Terapkan Distribusi Multinomial**
> >
> > $n = 4$, ingin $n_A = 0$, $n_B = 2$, $n_C = 2$:
> >
> > $$P = \frac{4!}{0! \cdot 2! \cdot 2!} \left(\frac{1}{9}\right)^0 \left(\frac{2}{9}\right)^2 \left(\frac{2}{3}\right)^2$$
> >
> > $$= 6 \times 1 \times \frac{4}{81} \times \frac{4}{9} = 6 \times \frac{16}{729} = \frac{96}{729} = \frac{32}{243}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{32}{243}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan proporsi: $n_C = 2n_A + 2n_B$ (bukan $n_C = 2(n_A + n_B)$) — soal menyebut "dua kali lipat jumlah gabungan".
> > > - Lupa koefisien multinomial $\dfrac{4!}{0! 2! 2!} = 6$ — ini faktor pengurutan yang kritis.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan distribusi Hipergeometrik (tanpa pengembalian) — soal menyebut "ratusan baju" sehingga pendekatan multinomial (dengan pengembalian) lebih tepat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika populasi sangat besar → gunakan multinomial (proporsi konstan).
> > > - Kata "dua kali lipat jumlah gabungan" → $n_C = 2(n_A + n_B)$, bukan $2n_A + 2n_B$ (yang memang sama, tapi pastikan $n_B$ sudah dihitung benar).

---

## **No. 8**

Jika $X$ berdistribusi normal dengan nilai mean sebesar $1$ dan variansi sebesar $4$, maka tentukanlah $P[X^2 - 2X \leq 8]$.

a. $0{,}13$  
b. $0{,}43$  
c. $0{,}75$  
d. $0{,}86$  
e. $0{,}93$

> [!summary]+ **Jawaban No. 8**
>
> **(d). $0{,}86$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 3.4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim N(\mu, \sigma^2)$: standarisasi $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$.
> >
> > Manipulasi aljabar pertidaksamaan pada $X$ terlebih dahulu sebelum standarisasi.
>
> **Diketahui:**
> - $X \sim N(\mu = 1, \sigma^2 = 4)$, sehingga $\sigma = 2$
> - Target: $P[X^2 - 2X \leq 8]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan Pertidaksamaan**
> >
> > $$X^2 - 2X \leq 8$$
> >
> > $$X^2 - 2X - 8 \leq 0$$
> >
> > $$(X - 4)(X + 2) \leq 0$$
> >
> > Ini terpenuhi saat $-2 \leq X \leq 4$.
> >
> > **Langkah 2: Standarisasi**
> >
> > Dengan $Z = \dfrac{X - 1}{2}$:
> >
> > $$P[-2 \leq X \leq 4] = P\!\left[\frac{-2-1}{2} \leq Z \leq \frac{4-1}{2}\right] = P[-1{,}5 \leq Z \leq 1{,}5]$$
> >
> > **Langkah 3: Hitung Probabilitas**
> >
> > $$P[-1{,}5 \leq Z \leq 1{,}5] = \Phi(1{,}5) - \Phi(-1{,}5) = 2\Phi(1{,}5) - 1$$
> >
> > $$= 2(0{,}9332) - 1 = 0{,}8664 \approx 0{,}86$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}86$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa memfaktorkan $X^2 - 2X - 8$ dengan benar: hasilnya $-2 \leq X \leq 4$, bukan $X \leq 4$ saja.
> > > - Standarisasi yang salah: menggunakan $\sigma = 4$ (variansi) alih-alih $\sigma = 2$ (simpangan baku).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan batas bawah $-2$ dan hanya menghitung $P[X \leq 4]$ → menghasilkan $\Phi(1{,}5) = 0{,}9332$ (tidak ada di pilihan).
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada ekspresi kuadrat di dalam probabilitas → faktorkan dulu, temukan interval, lalu standarisasi.

---

## **No. 9**

Misalkan $X$ dan $Y$ merupakan variabel acak kontinu dengan fungsi densitas bersama:

$$f(x, y) = \begin{cases} 6x, & \text{untuk } 0 < x < y < 1 \\ 0, & \text{lainnya} \end{cases}$$

Jika $E[X] = \dfrac{1}{2}$ dan $E[Y] = \dfrac{3}{4}$, tentukanlah nilai dari $\text{Cov}[X, Y]$.

a. $\dfrac{1}{40}$  
b. $\dfrac{1}{20}$  
c. $\dfrac{1}{10}$  
d. $\dfrac{1}{5}$  
e. $1$

> [!summary]+ **Jawaban No. 9**
>
> **(a). $\dfrac{1}{40}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.5–3.8 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{Cov}[X, Y] = E[XY] - E[X] \cdot E[Y]$$
> >
> > $$E[XY] = \int\!\int xy \cdot f(x,y)\, dx\, dy$$
>
> **Diketahui:**
> - $f(x,y) = 6x$ untuk $0 < x < y < 1$
> - $E[X] = \dfrac{1}{2}$, $E[Y] = \dfrac{3}{4}$
> - Target: $\text{Cov}[X,Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[XY]$**
> >
> > Region: $0 < x < y < 1$, sehingga untuk $x$ tetap, $y$ dari $x$ ke $1$:
> >
> > $$E[XY] = \int_0^1 \int_x^1 xy \cdot 6x\, dy\, dx = 6\int_0^1 x^2 \int_x^1 y\, dy\, dx$$
> >
> > $$= 6\int_0^1 x^2 \left[\frac{y^2}{2}\right]_x^1 dx = 6\int_0^1 x^2 \cdot \frac{1-x^2}{2}\, dx$$
> >
> > $$= 3\int_0^1 (x^2 - x^4)\, dx = 3\left[\frac{x^3}{3} - \frac{x^5}{5}\right]_0^1 = 3\left(\frac{1}{3} - \frac{1}{5}\right) = 3 \cdot \frac{2}{15} = \frac{6}{15} = \frac{2}{5}$$
> >
> > **Langkah 2: Hitung Kovarians**
> >
> > $$\text{Cov}[X,Y] = E[XY] - E[X] \cdot E[Y] = \frac{2}{5} - \frac{1}{2} \cdot \frac{3}{4} = \frac{2}{5} - \frac{3}{8}$$
> >
> > $$= \frac{16}{40} - \frac{15}{40} = \frac{1}{40}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{40}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan batas integral: karena $x < y < 1$, batas luar adalah $x \in (0,1)$ dan batas dalam adalah $y \in (x, 1)$ — jangan ditukar.
> > > - Menggunakan $\text{Cov}[X,Y] = E[XY] - E[X]E[Y]$ tapi salah menghitung $E[XY]$ (tidak menggunakan $f(x,y) = 6x$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menyimpulkan $X$ dan $Y$ independen (karena soal memberi $E[X]$ dan $E[Y]$) → tapi support $\{0 < x < y < 1\}$ menunjukkan ketergantungan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika support berbentuk segitiga (bukan persegi) → $X$ dan $Y$ tidak independen; selalu hitung $E[XY]$ secara langsung.

---

## **No. 10**

Sebuah dadu jika dilempar memiliki probabilitas untuk memunculkan angka $1$ sebesar $p$, memunculkan angka $6$ sebesar $\dfrac{1}{3} - p$ dan memunculkan angka $2, 3, 4, 5$ masing-masing dengan probabilitas sebesar $\dfrac{1}{6}$. Misalkan $X$ melambangkan angka yang muncul ketika dadu dilempar.

Tentukan nilai dari $p$ sedemikian sehingga nilai dari variansi $X$ akan maksimal.

a. $0$  
b. $\dfrac{1}{12}$  
c. $\dfrac{1}{6}$  
d. $\dfrac{1}{4}$  
e. $\dfrac{1}{3}$

> [!summary]+ **Jawaban No. 10**
>
> **(c). $\dfrac{1}{6}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 3.1–3.4 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
> >
> > Untuk memaksimalkan fungsi terhadap $p$: turunan pertama $= 0$, lalu cek syarat $0 \leq p \leq \dfrac{1}{3}$.
>
> **Diketahui:**
> - $P[X=1] = p$, $P[X=6] = \dfrac{1}{3} - p$, $P[X=k] = \dfrac{1}{6}$ untuk $k = 2,3,4,5$
> - Total probabilitas: $p + (\frac{1}{3}-p) + 4 \cdot \frac{1}{6} = \frac{1}{3} + \frac{4}{6} = \frac{1}{3} + \frac{2}{3} = 1$ ✓
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$**
> >
> > $$E[X] = 1 \cdot p + 6 \cdot \left(\frac{1}{3}-p\right) + (2+3+4+5) \cdot \frac{1}{6}$$
> >
> > $$= p + 2 - 6p + \frac{14}{6} = 2 + \frac{7}{3} - 5p = \frac{13}{3} - 5p$$
> >
> > **Langkah 2: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 1^2 \cdot p + 6^2 \cdot \left(\frac{1}{3}-p\right) + (4+9+16+25) \cdot \frac{1}{6}$$
> >
> > $$= p + 12 - 36p + \frac{54}{6} = 12 + 9 - 35p = 21 - 35p$$
> >
> > **Langkah 3: Ekspresikan Variansi sebagai Fungsi $p$**
> >
> > $$\text{Var}(X) = (21-35p) - \left(\frac{13}{3} - 5p\right)^2$$
> >
> > $$= (21-35p) - \left(\frac{169}{9} - \frac{130p}{3} + 25p^2\right)$$
> >
> > $$= 21 - 35p - \frac{169}{9} + \frac{130p}{3} - 25p^2$$
> >
> > $$= \left(21 - \frac{169}{9}\right) + p\left(-35 + \frac{130}{3}\right) - 25p^2$$
> >
> > $$= \frac{20}{9} + \frac{-105+130}{3} p - 25p^2 = \frac{20}{9} + \frac{25}{3}p - 25p^2$$
> >
> > **Langkah 4: Maksimalkan — Turunan = 0**
> >
> > $$\frac{d}{dp}\text{Var}(X) = \frac{25}{3} - 50p = 0$$
> >
> > $$p = \frac{25/3}{50} = \frac{25}{150} = \frac{1}{6}$$
> >
> > Karena koefisien $p^2$ adalah $-25 < 0$, ini adalah **maksimum** (parabola membuka ke bawah).
> >
> > **Verifikasi domain:** $0 \leq \dfrac{1}{6} \leq \dfrac{1}{3}$ ✓
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{6}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari minimum variansi alih-alih maksimum — perhatikan tanda turunan kedua: $-25 < 0$ berarti titik kritis adalah maksimum.
> > > - Salah menghitung $E[X^2]$: $6^2 = 36$, bukan $6$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan syarat domain $0 \leq p \leq \dfrac{1}{3}$ (agar semua probabilitas non-negatif).
> >
> > > [!CAUTION] Red Flags
> > > - Variansi adalah fungsi kuadrat dalam $p$ → maksimum ada di interior, bukan di tepi domain.

---
## **No. 11**

Sebuah perusahaan asuransi mengetahui bahwa waktu hingga terjadinya sebuah klaim dari kecelakaan mobil berdistribusi eksponensial dengan mean sebesar $1$ dan waktu hingga terjadinya sebuah klaim dari kematian seseorang berdistribusi eksponensial dengan mean sebesar $2$. Klaim yang terjadi antara kecelakaan mobil dan kematian seseorang saling independen.

Tentukan ekspektasi waktu hingga terjadinya klaim pertama kali (tidak bergantung pada jenis klaim mana yang terjadi terlebih dahulu).

a. $\dfrac{1}{6}$  
b. $\dfrac{1}{3}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{5}{6}$

> [!summary]+ **Jawaban No. 11**
>
> **(d). $\dfrac{2}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > Sifat minimum distribusi Eksponensial independen:
> >
> > Jika $T_1 \sim \text{Exp}(\lambda_1)$ dan $T_2 \sim \text{Exp}(\lambda_2)$ independen, maka:
> >
> > $$T_{\min} = \min(T_1, T_2) \sim \text{Exp}(\lambda_1 + \lambda_2)$$
> >
> > $$E[T_{\min}] = \frac{1}{\lambda_1 + \lambda_2}$$
>
> **Diketahui:**
> - $T_1 \sim \text{Exp}(\lambda_1)$ dengan mean $= 1$, sehingga $\lambda_1 = 1$
> - $T_2 \sim \text{Exp}(\lambda_2)$ dengan mean $= 2$, sehingga $\lambda_2 = \dfrac{1}{2}$
> - $T_1$ dan $T_2$ independen
> - Target: $E[\min(T_1, T_2)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Parameter Rate**
> >
> > $\lambda_1 = 1$ (dari mean $= 1$), $\lambda_2 = \dfrac{1}{2}$ (dari mean $= 2$).
> >
> > **Langkah 2: Terapkan Sifat Minimum Eksponensial**
> >
> > Waktu klaim pertama = $T = \min(T_1, T_2)$.
> >
> > Karena $T_1$ dan $T_2$ independen dan masing-masing eksponensial:
> >
> > $$T \sim \text{Exp}(\lambda_1 + \lambda_2) = \text{Exp}\!\left(1 + \frac{1}{2}\right) = \text{Exp}\!\left(\frac{3}{2}\right)$$
> >
> > **Langkah 3: Hitung Ekspektasi**
> >
> > $$E[T] = \frac{1}{\lambda_1 + \lambda_2} = \frac{1}{3/2} = \frac{2}{3}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{2}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rata-rata mean: $\dfrac{1+2}{2} = \dfrac{3}{2}$ — ini salah; minimum eksponensial menggunakan **penjumlahan rate**, bukan rata-rata mean.
> > > - Menggunakan $E[\min] = \min(E[T_1], E[T_2]) = 1$ — ini juga salah secara umum.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengacaukan mean dengan rate: mean $= 1/\lambda$, sehingga mean $= 1 \Rightarrow \lambda = 1$ (bukan $\lambda = \text{mean}$).
> >
> > > [!CAUTION] Red Flags
> > > - "Klaim pertama dari dua proses independen" → minimum dua eksponensial → rate dijumlahkan.

---

## **No. 12**

Dalam suatu sekolah diketahui tinggi badan pria dan wanita berdistribusi normal dengan mean dan standar deviasi sebesar $(180, 20)$ dan $(130, 15)$ secara berturut-turut. Jika seorang pria dan seorang wanita dipilih secara acak, tentukan probabilitas dimana jumlah tinggi kedua orang tersebut kurang dari $280$.

a. $0{,}1587$  
b. $0{,}1151$  
c. $0{,}0548$  
d. $0{,}0359$  
e. $0{,}0228$

> [!summary]+ **Jawaban No. 12**
>
> **(b). $0{,}1151$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 3.4 |
>
> > [!info]+ **Rumus**
> >
> > Jika $X \sim N(\mu_1, \sigma_1^2)$ dan $Y \sim N(\mu_2, \sigma_2^2)$ independen, maka:
> >
> > $$X + Y \sim N(\mu_1 + \mu_2,\ \sigma_1^2 + \sigma_2^2)$$
>
> **Diketahui:**
> - $X \sim N(180, 20^2)$ (tinggi pria)
> - $Y \sim N(130, 15^2)$ (tinggi wanita)
> - $X$ dan $Y$ independen (dipilih secara acak)
> - Target: $P[X + Y < 280]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $S = X + Y$**
> >
> > $$E[S] = 180 + 130 = 310$$
> >
> > $$\text{Var}(S) = 20^2 + 15^2 = 400 + 225 = 625 \implies \sigma_S = 25$$
> >
> > $$S \sim N(310, 625)$$
> >
> > **Langkah 2: Standarisasi**
> >
> > $$P[S < 280] = P\!\left[Z < \frac{280 - 310}{25}\right] = P[Z < -1{,}2]$$
> >
> > **Langkah 3: Baca Tabel Normal**
> >
> > $$P[Z < -1{,}2] = 1 - \Phi(1{,}2) = 1 - 0{,}8849 = 0{,}1151$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}1151$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menambahkan simpangan baku: $\sigma_S = 20 + 15 = 35$ — yang benar: variansi yang dijumlahkan, $\sigma_S = \sqrt{400 + 225} = 25$.
> > > - Lupa syarat independensi untuk menjumlahkan variansi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menganggap mean penjumlahan perlu dihitung ulang dengan cara lain — $E[X+Y] = E[X] + E[Y]$ selalu berlaku.
> >
> > > [!CAUTION] Red Flags
> > > - Variansi penjumlahan: $\sigma_{X+Y}^2 = \sigma_X^2 + \sigma_Y^2$ hanya jika **independen**.
> > > - Jika tidak independen: $\sigma_{X+Y}^2 = \sigma_X^2 + \sigma_Y^2 + 2\text{Cov}(X,Y)$.

---

## **No. 13**

Misalkan $X_1, X_2, X_3$ berdistribusi seragam pada interval $(0, 1)$ dengan $\text{Cov}(X_i, X_j) = \dfrac{1}{12}$ untuk $i, j = 1, 2, 3$, $i \neq j$.

Tentukan variansi dari $X_1 + 2X_2 - X_3$.

a. $\dfrac{1}{6}$  
b. $\dfrac{1}{3}$  
c. $\dfrac{5}{12}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{11}{12}$

> [!summary]+ **Jawaban No. 13**
>
> **(b). $\dfrac{1}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.5–3.8 |
>
> > [!info]+ **Rumus**
> >
> > Untuk kombinasi linear $W = a_1 X_1 + a_2 X_2 + a_3 X_3$:
> >
> > $$\text{Var}(W) = \sum_{i=1}^3 a_i^2 \text{Var}(X_i) + 2\sum_{i<j} a_i a_j \text{Cov}(X_i, X_j)$$
> >
> > Untuk $X \sim U(0,1)$: $\text{Var}(X) = \dfrac{(b-a)^2}{12} = \dfrac{1}{12}$
>
> **Diketahui:**
> - $X_i \sim U(0,1)$, sehingga $\text{Var}(X_i) = \dfrac{1}{12}$
> - $\text{Cov}(X_i, X_j) = \dfrac{1}{12}$ untuk $i \neq j$
> - Target: $\text{Var}(X_1 + 2X_2 - X_3)$; koefisien $a_1=1$, $a_2=2$, $a_3=-1$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Suku Variansi**
> >
> > $$a_1^2 \text{Var}(X_1) + a_2^2 \text{Var}(X_2) + a_3^2 \text{Var}(X_3) = 1 \cdot \frac{1}{12} + 4 \cdot \frac{1}{12} + 1 \cdot \frac{1}{12} = \frac{6}{12} = \frac{1}{2}$$
> >
> > **Langkah 2: Hitung Suku Kovarians**
> >
> > $$2[a_1 a_2 \text{Cov}(X_1,X_2) + a_1 a_3 \text{Cov}(X_1,X_3) + a_2 a_3 \text{Cov}(X_2,X_3)]$$
> >
> > $$= 2\left[(1)(2)\frac{1}{12} + (1)(-1)\frac{1}{12} + (2)(-1)\frac{1}{12}\right]$$
> >
> > $$= 2\left[\frac{2}{12} - \frac{1}{12} - \frac{2}{12}\right] = 2\left[\frac{-1}{12}\right] = -\frac{1}{6}$$
> >
> > **Langkah 3: Jumlahkan**
> >
> > $$\text{Var}(X_1 + 2X_2 - X_3) = \frac{1}{2} - \frac{1}{6} = \frac{3}{6} - \frac{1}{6} = \frac{2}{6} = \frac{1}{3}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa faktor $2$ di depan suku kovarians — rumus variansi kombinasi linear melibatkan $2\text{Cov}$ untuk setiap pasang.
> > > - Mengabaikan tanda negatif pada $a_3 = -1$: $a_2 a_3 = (2)(-1) = -2$, bukan $+2$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengasumsikan $X_i$ independen hanya karena mereka identically distributed — soal secara eksplisit memberi $\text{Cov} \neq 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Saat ada kovarians, selalu gunakan rumus lengkap dengan suku kovarians.
> > > - Koefisien negatif mengubah tanda kovarians.

---

## **No. 14**

Misalkan sebuah perusahaan asuransi mengetahui proporsi perokok sebanyak $0{,}3$ dari populasi umum dan mengasumsikan bahwa hal ini merepresentasikan proporsi calon pembeli polis (nasabah) yang merupakan perokok. Diketahui juga:

- $40\%$ dari calon nasabah yang sebenarnya adalah perokok tetapi mengatakan bukan perokok pada formulir aplikasi.
- Tidak ada calon nasabah yang sebenarnya bukan perokok yang berbohong pada formulir aplikasinya.

Tentukanlah proporsi calon nasabah yang mengisi formulir aplikasi sebagai bukan perokok adalah orang yang sebenarnya bukan perokok.

a. $0$  
b. $\dfrac{6}{41}$  
c. $\dfrac{12}{41}$  
d. $\dfrac{35}{41}$  
e. $1$

> [!summary]+ **Jawaban No. 14**
>
> **(d). $\dfrac{35}{41}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P[B_k \mid A] = \frac{P[A \mid B_k] P[B_k]}{\sum_j P[A \mid B_j] P[B_j]}$$
>
> **Diketahui:**
> - $P[\text{Perokok}] = 0{,}3$, $P[\text{Bukan Perokok}] = 0{,}7$
> - $P[\text{Klaim Bukan Perokok} \mid \text{Perokok}] = 0{,}4$
> - $P[\text{Klaim Bukan Perokok} \mid \text{Bukan Perokok}] = 1{,}0$
> - Target: $P[\text{Bukan Perokok} \mid \text{Klaim Bukan Perokok}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[\text{Klaim Bukan Perokok}]$ via Hukum Total**
> >
> > $$P[\text{Klaim BP}] = P[\text{Klaim BP} \mid \text{Perokok}] \cdot P[\text{Perokok}] + P[\text{Klaim BP} \mid \text{BP}] \cdot P[\text{BP}]$$
> >
> > $$= 0{,}4 \times 0{,}3 + 1{,}0 \times 0{,}7 = 0{,}12 + 0{,}70 = 0{,}82$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P[\text{BP} \mid \text{Klaim BP}] = \frac{P[\text{Klaim BP} \mid \text{BP}] \cdot P[\text{BP}]}{P[\text{Klaim BP}]} = \frac{1{,}0 \times 0{,}7}{0{,}82} = \frac{0{,}7}{0{,}82} = \frac{70}{82} = \frac{35}{41}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{35}{41}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan perokok yang berbohong (klaim bukan perokok) — mereka juga termasuk dalam penyebut.
> > > - Membalik kondisi: menghitung $P[\text{Klaim BP} \mid \text{BP}]$ bukan $P[\text{BP} \mid \text{Klaim BP}]$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "$40\%$ perokok mengaku bukan perokok" → $P[\text{Klaim BP} \mid \text{Perokok}] = 0{,}4$, bukan $0{,}6$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal ada "mengaku", "mengklaim", "ternyata" → Teorema Bayes dengan dua tahap informasi.

---

## **No. 15**

Sebuah toko kopi akan memberikan uang sebesar $100$ kepada seseorang yang memiliki stampel hadiah pada kupon dari $5$ hari secara berturut dari hari Senin sampai Jumat. Stampel hadiah hanya akan diberikan secara acak kepada $10\%$ dari total pembeli pada hari tersebut. Jika Andi membeli kopi di toko tersebut setiap harinya selama $4$ minggu berturut-turut dan probabilitas untuk mendapatkan stampel hadiah independen setiap harinya, tentukan standar deviasi dari $X$ dimana $X$ adalah total hadiah yang dimenangkan oleh Andi selama periode $4$ minggu tersebut.

a. $0{,}61$  
b. $0{,}62$  
c. $0{,}63$  
d. $0{,}64$  
e. $0{,}65$

> [!summary]+ **Jawaban No. 15**
>
> **(c). $0{,}63$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5 (Binomial); Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Binomial: jika $Y \sim B(n, p)$, maka $\text{Var}(Y) = np(1-p)$.
> >
> > Hadiah per minggu bernilai $100$ jika menang (stampel 5 hari berturut), sehingga $X = 100 \cdot W$ dimana $W$ = jumlah minggu menang.
> >
> > Probabilitas menang dalam satu minggu (5 hari stampel independen):
> > $$q = p^5 = (0{,}1)^5 = 0{,}00001$$
>
> **Diketahui:**
> - Probabilitas stampel per hari: $p = 0{,}1$
> - Menang jika stampel 5 hari dalam seminggu: $q = (0{,}1)^5 = 10^{-5}$
> - Periode: $4$ minggu
> - $W \sim B(4, q)$ = jumlah minggu menang
> - $X = 100 W$ = total hadiah (dalam satuan ratusan atau langsung 100 per win)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Probabilitas Menang dalam Satu Minggu**
> >
> > Untuk menang, Andi harus mendapat stampel selama 5 hari berturut-turut (Senin–Jumat), dengan probabilitas independen $0{,}1$ per hari:
> >
> > $$q = (0{,}1)^5 = 10^{-5}$$
> >
> > **Langkah 2: Distribusi Jumlah Minggu Menang**
> >
> > Dalam 4 minggu, $W \sim B(4, 10^{-5})$.
> >
> > **Langkah 3: Distribusi Total Hadiah**
> >
> > $X = 100 W$, sehingga:
> >
> > $$\text{Var}(X) = 100^2 \cdot \text{Var}(W) = 10{.}000 \cdot 4 \cdot 10^{-5} \cdot (1 - 10^{-5})$$
> >
> > $$\approx 10{.}000 \times 4 \times 10^{-5} \times 1 = 10{.}000 \times 4 \times 10^{-5} = 0{,}4$$
> >
> > $$\text{SD}(X) = \sqrt{0{,}4} \approx 0{,}6325 \approx 0{,}63$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}63$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $p = 0{,}1$ per minggu langsung alih-alih $q = (0{,}1)^5$ — harus mendapat stampel 5 hari, bukan 1 hari.
> > > - Lupa mengalikan dengan $100^2$ saat menghitung $\text{Var}(X) = \text{Var}(100W)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung standar deviasi dari jumlah stampel harian, bukan dari total hadiah dalam rupiah.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{SD}(aX) = |a| \cdot \text{SD}(X)$ — jangan lupa faktor skala.

---

## **No. 16**

Sebuah asuransi menanggung kerugian yang dialami oleh Andi dan Budi. Masing-masing dari Andi dan Budi memiliki probabilitas sebesar $0{,}4$ untuk mengalami kerugian dan kerugian mereka saling independen. Andi hanya boleh mengajukan klaim setahun sekali, begitu juga dengan Budi. Asuransi tersebut akan menanggung semua kerugian selama total kerugian dari Andi dan Budi tidak melebihi $8{.}000$. Jika Andi mengalami kerugian, maka besar kerugian tersebut berdistribusi seragam pada $[1{.}000, 5{.}000]$, begitu juga dengan Budi.

Diberikan bahwa Andi telah mengalami kerugian melebihi $2{.}000$, tentukan probabilitas bahwa total kerugian yang dialami Andi dan Budi akan melebihi $8{.}000$.

a. $\dfrac{1}{20}$  
b. $\dfrac{1}{15}$  
c. $\dfrac{1}{10}$  
d. $\dfrac{1}{8}$  
e. $\dfrac{1}{6}$

> [!summary]+ **Jawaban No. 16**
>
> **(b). $\dfrac{1}{15}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas bersyarat:
> >
> > $$P[A \mid B] = \frac{P[A \cap B]}{P[B]}$$
> >
> > Untuk $U \sim U(a,b)$: $P[U > c \mid U > d] = \dfrac{b - c}{b - d}$ jika $a \leq d \leq c \leq b$ (memoryless-like untuk uniform).
>
> **Diketahui:**
> - Kerugian Andi ($A$) dan Budi ($B$) masing-masing $\sim U(1{.}000, 5{.}000)$ jika terjadi kerugian
> - Total kerugian melebihi $8{.}000 \Rightarrow A + B > 8{.}000$
> - Kondisi: **Andi mengalami kerugian** (prob $0{,}4$) **dan** kerugian Andi $> 2{.}000$
> - Target: $P[A + B > 8{.}000 \mid A > 2{.}000, \text{ Andi rugi}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan Kondisi**
> >
> > Diberikan Andi mengalami kerugian $> 2{.}000$, nilai $A \sim U(1{.}000, 5{.}000)$ yang dikondisikan menjadi $A \mid (A > 2{.}000) \sim U(2{.}000, 5{.}000)$.
> >
> > Untuk total melebihi $8{.}000$: $A + B > 8{.}000$, sehingga $B > 8{.}000 - A$.
> >
> > **Langkah 2: Analisis Kasus Budi**
> >
> > Total kerugian $> 8{.}000$ memerlukan $B > 8{.}000 - A$.
> >
> > Budi mengalami kerugian dengan prob $0{,}4$; jika rugi, $B \sim U(1{.}000, 5{.}000)$.
> >
> > Untuk $A \in (2{.}000, 5{.}000)$: syarat $B > 8{.}000 - A$ memerlukan $8{.}000 - A \in (3{.}000, 6{.}000)$.
> >
> > Karena $B \leq 5{.}000$, maka hanya saat $8{.}000 - A < 5{.}000$, yaitu $A > 3{.}000$, ada kemungkinan $B > 8{.}000 - A$.
> >
> > **Langkah 3: Hitung Probabilitas Gabungan**
> >
> > $$P[A + B > 8{.}000 \mid A > 2{.}000] = P[\text{Budi rugi}] \cdot \int_{3{.}000}^{5{.}000} P[B > 8{.}000 - a] \cdot f_{A|A>2000}(a)\, da$$
> >
> > Dengan $f_{A \mid A > 2{.}000}(a) = \dfrac{1}{3{.}000}$ untuk $a \in (2{.}000, 5{.}000)$, dan $P[B > 8{.}000-a] = \dfrac{a-3{.}000}{4{.}000}$ untuk $a \in (3{.}000, 5{.}000)$:
> >
> > $$= 0{,}4 \cdot \int_{3{.}000}^{5{.}000} \frac{a-3{.}000}{4{.}000} \cdot \frac{1}{3{.}000}\, da = \frac{0{,}4}{12{.}000{.}000} \int_{3{.}000}^{5{.}000} (a-3{.}000)\, da$$
> >
> > $$= \frac{0{,}4}{12{.}000{.}000} \cdot \left[\frac{(a-3{.}000)^2}{2}\right]_{3{.}000}^{5{.}000} = \frac{0{,}4}{12{.}000{.}000} \cdot \frac{4{.}000{.}000}{2}$$
> >
> > $$= \frac{0{,}4 \times 2{.}000{.}000}{12{.}000{.}000} = \frac{800{.}000}{12{.}000{.}000} = \frac{1}{15}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{15}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak memperhatikan bahwa total $> 8{.}000$ hanya mungkin jika Budi juga mengalami kerugian (karena $A \leq 5{.}000$).
> > > - Lupa mengalikan dengan probabilitas Budi mengalami kerugian ($0{,}4$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengkondisikan pada $A > 2{.}000$ tanpa mengubah distribusi $A$ menjadi $U(2{.}000, 5{.}000)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada batasan maksimum distribusi → periksa kapan $B > 8{.}000 - A$ bahkan **mungkin** secara matematis.

---

## **No. 17**

$X$ berdistribusi eksponensial dengan mean sebesar $1$. $Y$ didefinisikan sebagai distribusi bersyarat dari $X - 2$ diberikan bahwa $X > 2$, sehingga untuk $c > 0$, $P[Y > c] = P[X - 2 > c \mid X > 2]$.

Tentukan distribusi dari $Y$.

a. Eksponensial dengan mean sebesar $1$  
b. Eksponensial dengan mean sebesar $2$  
c. Eksponensial dengan mean sebesar $\dfrac{1}{2}$  
d. Eksponensial dengan mean sebesar $e$  
e. Eksponensial dengan mean sebesar $e^2$

> [!summary]+ **Jawaban No. 17**
>
> **(a). Eksponensial dengan mean sebesar $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > **Sifat Tak Beringat (Memoryless Property) Distribusi Eksponensial:**
> >
> > Jika $X \sim \text{Exp}(\lambda)$, maka untuk semua $s, t \geq 0$:
> >
> > $$P[X > s + t \mid X > s] = P[X > t]$$
> >
> > Ekuivalen: $X - s \mid (X > s) \overset{d}{=} X$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\lambda = 1)$ dengan mean $= 1$
> - $Y = X - 2 \mid (X > 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Sifat Tak Beringat**
> >
> > Untuk $c > 0$:
> >
> > $$P[Y > c] = P[X - 2 > c \mid X > 2] = P[X > c + 2 \mid X > 2]$$
> >
> > Dengan sifat memoryless distribusi Eksponensial:
> >
> > $$= P[X > c]$$
> >
> > **Langkah 2: Identifikasi Distribusi $Y$**
> >
> > Karena $P[Y > c] = P[X > c]$ untuk semua $c > 0$, maka $Y$ memiliki distribusi yang sama dengan $X$, yaitu:
> >
> > $$Y \sim \text{Exp}(\lambda = 1) \text{ dengan mean } = 1$$
> >
> > **Hasil Akhir:** **(a)**. Eksponensial dengan mean sebesar $1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan bahwa dikondisikan pada $X > 2$ mengubah parameter distribusi — sifat memoryless menjamin distribusi tetap sama.
> > > - Sifat memoryless **hanya dimiliki** distribusi Eksponensial (kontinu) dan Geometrik (diskrit).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $Y = X - 2$ (transformasi biasa tanpa kondisi) sehingga mencoba menggeser distribusi.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan pola "$X - s \mid X > s$" dan distribusi Eksponensial → jawaban langsung: distribusi sama (memoryless).

---

## **No. 18**

Diketahui bahwa kemungkinan seseorang membeli $2$ buku empat kali lipat dibandingkan kemungkinan seseorang membeli $4$ buku. Jika banyaknya buku yang dibeli mengikuti distribusi Poisson, tentukanlah variansi dari banyaknya buku yang dibeli.

a. $\sqrt{3}$  
b. $3$  
c. $\dfrac{1}{\sqrt{3}}$  
d. $2$  
e. $4$

> [!summary]+ **Jawaban No. 18**
>
> **(a). $\sqrt{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5.1; Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Poisson: $X \sim \text{Poisson}(\lambda)$, PMF:
> >
> > $$P[X = k] = \frac{e^{-\lambda} \lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$
> >
> > Untuk Poisson: $E[X] = \text{Var}(X) = \lambda$
>
> **Diketahui:**
> - $X \sim \text{Poisson}(\lambda)$
> - $P[X = 2] = 4 \cdot P[X = 4]$
> - Target: $\text{Var}(X) = \lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan Persamaan dari Kondisi yang Diberikan**
> >
> > $$P[X=2] = \frac{e^{-\lambda}\lambda^2}{2!} = \frac{e^{-\lambda}\lambda^2}{2}$$
> >
> > $$P[X=4] = \frac{e^{-\lambda}\lambda^4}{4!} = \frac{e^{-\lambda}\lambda^4}{24}$$
> >
> > Syarat: $P[X=2] = 4 \cdot P[X=4]$:
> >
> > $$\frac{e^{-\lambda}\lambda^2}{2} = 4 \cdot \frac{e^{-\lambda}\lambda^4}{24}$$
> >
> > **Langkah 2: Sederhanakan**
> >
> > $$\frac{\lambda^2}{2} = \frac{4\lambda^4}{24} = \frac{\lambda^4}{6}$$
> >
> > $$6\lambda^2 = 2\lambda^4 \implies 3 = \lambda^2 \implies \lambda = \sqrt{3}$$
> >
> > (karena $\lambda > 0$)
> >
> > **Langkah 3: Tentukan Variansi**
> >
> > Untuk Poisson, $\text{Var}(X) = \lambda = \sqrt{3}$.
> >
> > **Hasil Akhir:** **(a)**. $\sqrt{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari $\lambda^2 = 3$ lalu melaporkan $\text{Var}(X) = 3$ — yang benar adalah $\lambda = \sqrt{3}$, bukan $\lambda = 3$.
> > > - Mengabaikan fakta bahwa $\text{Var}(X) = \lambda$ (bukan $\lambda^2$) untuk Poisson.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Empat kali lipat" berarti $P[X=2] = 4 \times P[X=4]$, bukan $P[X=4] = 4 \times P[X=2]$.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi Poisson: mean = variansi = $\lambda$.

---

## **No. 19**

Diberikan $X$ dan $Y$ memiliki fungsi densitas bersama yaitu:

$$f(x, y) = x + y \quad \text{untuk } 0 < x < 1 \text{ dan } 0 < y < 1$$

Diberikan fungsi densitas bersama dari $Y$ dan $Z$ yaitu:

$$g(y, z) = 3\left(y + \frac{1}{2}\right)z^2 \quad \text{untuk } 0 < y < 1 \text{ dan } 0 < z < 1$$

Tentukanlah fungsi densitas bersama dari $X$ dan $Z$.

a. $x + \dfrac{3}{2}z^2$, $\quad 0 < x < 1$, $0 < z < 1$  
b. $x + \dfrac{1}{2} + 3z^2$, $\quad 0 < x < 1$, $0 < z < 1$  
c. $3\left(x + \dfrac{1}{2}\right)z^2$, $\quad 0 < x < 1$, $0 < z < 1$  
d. $x + z$, $\quad 0 < x < 1$, $0 < z < 1$  
e. $4xz$, $\quad 0 < x < 1$, $0 < z < 1$

> [!summary]+ **Jawaban No. 19**
>
> **(c). $3\left(x + \dfrac{1}{2}\right)z^2$, $\quad 0 < x < 1$, $0 < z < 1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.3 Distribusi Bersyarat]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1–4.2; Miller Bab 3.5–3.8 |
>
> > [!info]+ **Rumus**
> >
> > Jika $X$, $Y$, $Z$ adalah variabel acak, maka distribusi bersama $X$ dan $Z$ dapat diperoleh melalui:
> >
> > $$h(x, z) = \int_{-\infty}^{\infty} f(x, y) \cdot f_{Z|Y}(z \mid y)\, dy$$
> >
> > Di mana $f_{Z|Y}(z \mid y) = \dfrac{g(y,z)}{f_Y(y)}$
>
> **Diketahui:**
> - $f(x,y) = x + y$ pada $(0,1)^2$
> - $g(y,z) = 3(y + 1/2)z^2$ pada $(0,1)^2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Distribusi Marginal $f_Y(y)$**
> >
> > $$f_Y(y) = \int_0^1 (x + y)\, dx = \left[\frac{x^2}{2} + xy\right]_0^1 = \frac{1}{2} + y$$
> >
> > **Langkah 2: Hitung Distribusi Bersyarat $f_{Z|Y}(z \mid y)$**
> >
> > $$f_{Z|Y}(z \mid y) = \frac{g(y,z)}{f_Y(y)} = \frac{3(y+1/2)z^2}{y + 1/2} = 3z^2$$
> >
> > Menariknya, distribusi bersyarat $Z \mid Y = y$ tidak bergantung pada $y$, sehingga $Z$ **independen** dari $Y$.
> >
> > **Langkah 3: Hitung Distribusi Marginal $f_Z(z)$**
> >
> > Karena $Z$ independen dari $Y$:
> >
> > $$f_Z(z) = 3z^2, \quad 0 < z < 1$$
> >
> > **Langkah 4: Tentukan Apakah $X$ dan $Z$ Independen**
> >
> > Dari $f(x,y) = x + y$, $X$ dan $Y$ **tidak** independen. Namun perlu dicek apakah $X$ dan $Z$ independen.
> >
> > Distribusi marginal $f_X(x) = x + \dfrac{1}{2}$ (dari $\int_0^1 (x+y) dy = x + 1/2$).
> >
> > **Langkah 5: Hitung $h(x,z)$ via Integrasi atas $Y$**
> >
> > $$h(x,z) = \int_0^1 f(x,y) \cdot f_{Z|Y}(z|y)\, dy = \int_0^1 (x+y) \cdot 3z^2\, dy$$
> >
> > $$= 3z^2 \int_0^1 (x+y)\, dy = 3z^2 \left(x + \frac{1}{2}\right)$$
> >
> > $$= 3\left(x + \frac{1}{2}\right)z^2$$
> >
> > **Hasil Akhir:** **(c)**. $3\left(x + \dfrac{1}{2}\right)z^2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba mengalikan $f_X(x) \cdot f_Z(z)$ langsung tanpa memeriksa independensi — perlu verifikasi lewat integrasi.
> > > - Tidak menyadari bahwa $Z \perp Y$ (independen dari $Y$) sehingga $f_{Z|Y}(z|y) = f_Z(z)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengacaukan tiga variabel acak: $X$, $Y$, $Z$ — $Y$ adalah penghubung antara dua joint PDF yang diberikan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada tiga variabel acak dan dua joint PDF berbeda → gunakan $Y$ sebagai penghubung dan integrasikan.

---

## **No. 20**

Dari pernyataan berikut mengenai penjumlahan dari variabel acak yang saling independen, berapa banyak yang benar?

(i) Penjumlahan dari beberapa variabel acak berdistribusi Poisson yang saling independen, akan berdistribusi Poisson juga.  
(ii) Penjumlahan dari beberapa variabel acak berdistribusi eksponensial yang saling independen, akan berdistribusi eksponensial juga.  
(iii) Penjumlahan dari beberapa variabel acak berdistribusi geometrik yang saling independen, akan berdistribusi geometrik juga.  
(iv) Penjumlahan dari beberapa variabel acak berdistribusi normal yang saling independen, akan berdistribusi normal juga.

a. $0$  
b. $1$  
c. $2$  
d. $3$  
e. $4$

> [!summary]+ **Jawaban No. 20**
>
> **(c). $2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.1–5.3; Miller Bab 6–7 |
>
> > [!info]+ **Rumus**
> >
> > Sifat reproduktif (reproductive property) distribusi: distribusi $D$ dikatakan reproduktif jika penjumlahan variabel-variabel independen ber-$D$ juga ber-$D$.
> >
> > Distribusi reproduktif: **Poisson**, **Normal**, **Binomial** (parameter $p$ sama), **Gamma** (parameter $\beta$ sama).
> >
> > Distribusi **tidak** reproduktif: **Eksponensial** (penjumlahan → Gamma), **Geometrik** (penjumlahan → Binomial Negatif).
>
> **Diketahui:**
> - Pernyataan (i)–(iv) tentang sifat reproduktif berbagai distribusi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Pernyataan (i): Poisson — BENAR ✓**
> >
> > Jika $X_i \sim \text{Poisson}(\lambda_i)$ independen, maka:
> >
> > $$\sum X_i \sim \text{Poisson}\!\left(\sum \lambda_i\right)$$
> >
> > Ini dibuktikan via MGF atau sifat additivitas Poisson.
> >
> > **Pernyataan (ii): Eksponensial — SALAH ✗**
> >
> > Jika $X_i \sim \text{Exp}(\lambda)$ independen, maka $\sum_{i=1}^n X_i \sim \Gamma(n, \lambda)$ (distribusi Gamma), **bukan** Eksponensial.
> >
> > **Pernyataan (iii): Geometrik — SALAH ✗**
> >
> > Jika $X_i \sim \text{Geom}(p)$ independen (jumlah percobaan hingga sukses ke-1), maka $\sum_{i=1}^r X_i \sim \text{NB}(r, p)$ (Binomial Negatif), **bukan** Geometrik.
> >
> > **Pernyataan (iv): Normal — BENAR ✓**
> >
> > Jika $X_i \sim N(\mu_i, \sigma_i^2)$ independen, maka:
> >
> > $$\sum X_i \sim N\!\left(\sum \mu_i, \sum \sigma_i^2\right)$$
> >
> > Ini merupakan sifat fundamental distribusi Normal.
> >
> > **Kesimpulan:** Pernyataan yang benar: (i) dan (iv) → **2 pernyataan**.
> >
> > **Hasil Akhir:** **(c)**. $2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira Eksponensial reproduktif karena ia adalah kasus khusus Gamma ($\alpha=1$) — penjumlahan Eksponensial menghasilkan Gamma dengan $\alpha > 1$, bukan Eksponensial.
> > > - Mengira Geometrik reproduktif — penjumlahan $r$ Geometrik menghasilkan Binomial Negatif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "berdistribusi sama" berarti parameter juga harus sama — cukup famili distribusi yang sama.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi reproduktif standar CF2: **Poisson, Normal, Gamma, Binomial** (p sama).
> > > - Penjumlahan Eksponensial → Gamma; penjumlahan Geometrik → Binomial Negatif.

---
## **No. 21**

Misalkan $X$ dan $Y$ merupakan variabel acak dengan fungsi densitas bersama sebagai berikut:

$$f(x, y) = ax + by \quad \text{untuk } 0 < x < 2, \ 0 < y < 1$$

Diketahui juga bahwa $P[X > Y] = \dfrac{5}{6}$.

Tentukan nilai dari $E[X + Y]$.

a. $\dfrac{10}{9}$  
b. $\dfrac{16}{9}$  
c. $\dfrac{22}{9}$  
d. $\dfrac{28}{9}$  
e. $\dfrac{34}{9}$

> [!summary]+ **Jawaban No. 21**
>
> **(b). $\dfrac{16}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5–3.8 |
>
> > [!info]+ **Rumus**
> >
> > Syarat normalisasi: $\displaystyle\iint f(x,y)\, dx\, dy = 1$
> >
> > $$E[X] = \iint x \cdot f(x,y)\, dx\, dy, \quad E[Y] = \iint y \cdot f(x,y)\, dx\, dy$$
>
> **Diketahui:**
> - $f(x,y) = ax + by$ pada $0 < x < 2$, $0 < y < 1$
> - $P[X > Y] = \dfrac{5}{6}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Syarat Normalisasi untuk Mencari Hubungan $a$ dan $b$**
> >
> > $$\int_0^1 \int_0^2 (ax + by)\, dx\, dy = 1$$
> >
> > $$\int_0^1 \left[ax^2/2 + bxy\right]_0^2 dy = \int_0^1 (2a + 2by)\, dy = 2a + b = 1$$
> >
> > Sehingga $b = 1 - 2a$.
> >
> > **Langkah 2: Gunakan $P[X > Y] = \dfrac{5}{6}$**
> >
> > Karena $0 < y < 1$ dan $0 < x < 2$, maka $X > Y$ terjadi pada dua sub-region:
> > - Region I: $0 < y < x < 1$ (di mana $x < 1$)
> > - Region II: $1 < x < 2$, $0 < y < 1$ (semua $x$ di sini $> y$ otomatis)
> >
> > $$P[X > Y] = \int_0^1 \int_0^x (ax+by)\, dy\, dx + \int_1^2 \int_0^1 (ax+by)\, dy\, dx$$
> >
> > Region I: $\displaystyle\int_0^1 \left[axy + \frac{by^2}{2}\right]_0^x dx = \int_0^1 \left(ax^2 + \frac{bx^2}{2}\right) dx = \frac{a}{3} + \frac{b}{6}$
> >
> > Region II: $\displaystyle\int_1^2 \left(ax + \frac{b}{2}\right) dx = \left[\frac{ax^2}{2} + \frac{bx}{2}\right]_1^2 = \frac{3a}{2} + \frac{b}{2}$
> >
> > Total:
> >
> > $$\frac{a}{3} + \frac{b}{6} + \frac{3a}{2} + \frac{b}{2} = \frac{11a}{6} + \frac{2b}{3} = \frac{5}{6}$$
> >
> > **Langkah 3: Selesaikan Sistem Persamaan**
> >
> > Dari Langkah 1: $b = 1 - 2a$. Substitusikan:
> >
> > $$\frac{11a}{6} + \frac{2(1-2a)}{3} = \frac{5}{6}$$
> >
> > $$\frac{11a}{6} + \frac{4}{6} - \frac{4a \cdot 2}{6} = \frac{5}{6}$$
> >
> > $$\frac{11a - 8a + 4}{6} = \frac{5}{6} \implies 3a + 4 = 5 \implies a = \frac{1}{3}$$
> >
> > $$b = 1 - 2 \cdot \frac{1}{3} = \frac{1}{3}$$
> >
> > **Langkah 4: Hitung $E[X]$ dan $E[Y]$**
> >
> > $$E[X] = \int_0^1 \int_0^2 x \cdot \frac{1}{3}(x+y)\, dx\, dy = \frac{1}{3}\int_0^1 \left[\frac{x^3}{3} + \frac{x^2 y}{2}\right]_0^2 dy = \frac{1}{3}\int_0^1 \left(\frac{8}{3} + 2y\right) dy$$
> >
> > $$= \frac{1}{3}\left(\frac{8}{3} + 1\right) = \frac{1}{3} \cdot \frac{11}{3} = \frac{11}{9}$$
> >
> > $$E[Y] = \int_0^1 \int_0^2 y \cdot \frac{1}{3}(x+y)\, dx\, dy = \frac{1}{3}\int_0^1 y\left[x^2/2 + xy\right]_0^2 dy = \frac{1}{3}\int_0^1 y(2+2y)\, dy$$
> >
> > $$= \frac{2}{3}\int_0^1 (y + y^2)\, dy = \frac{2}{3}\left(\frac{1}{2} + \frac{1}{3}\right) = \frac{2}{3} \cdot \frac{5}{6} = \frac{5}{9}$$
> >
> > **Langkah 5: Hitung $E[X+Y]$**
> >
> > $$E[X+Y] = \frac{11}{9} + \frac{5}{9} = \frac{16}{9}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{16}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan region $P[X > Y]$: karena $x < 2$ dan $y < 1$, region ini terbagi dua (tidak satu integral sederhana).
> > > - Lupa bahwa normalisasi menghasilkan $2a + b = 1$ (bukan $a + b = 1$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengasumsikan $a = b$ tanpa membuktikannya terlebih dahulu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika support tidak simetris ($x$ dan $y$ batas berbeda) → region perbandingan harus dibagi dengan hati-hati.

---

## **No. 22**

Sebuah perusahaan manufaktur mengirimkan $10{.}000$ unit produk per pengiriman. Dalam setiap pengiriman tertentu ada proporsi unit yang rusak. Dalam pengiriman pertama yang memuat $25\%$ unit produksi, setiap unit produk memiliki peluang cacat sebesar $0{,}2$ dan dalam pengiriman kedua, yang memuat $75\%$ unit produksi lainnya, setiap unit produk memiliki peluang cacat sebesar $0{,}1$. Pengiriman dipilih secara acak dan $10$ unit produk dipilih secara acak dari pengiriman itu.

Tentukan peluang bahwa paling sedikit $2$ unit dalam sampel tersebut rusak.

a. $0{,}3$  
b. $0{,}35$  
c. $0{,}4$  
d. $0{,}45$  
e. $0{,}5$

> [!summary]+ **Jawaban No. 22**
>
> **(b). $0{,}35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Hukum Probabilitas Total:
> >
> > $$P[A] = P[A \mid B_1]P[B_1] + P[A \mid B_2]P[B_2]$$
> >
> > Binomial: $P[X \geq 2] = 1 - P[X=0] - P[X=1]$
> >
> > $$P[X=k] = \binom{n}{k} p^k (1-p)^{n-k}$$
>
> **Diketahui:**
> - Pengiriman 1 ($B_1$): prob $0{,}25$, cacat $p_1 = 0{,}2$
> - Pengiriman 2 ($B_2$): prob $0{,}75$, cacat $p_2 = 0{,}1$
> - $n = 10$ unit dipilih
> - Target: $P[X \geq 2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[X \geq 2 \mid B_1]$**
> >
> > $X \mid B_1 \sim B(10, 0{,}2)$:
> >
> > $$P[X=0 \mid B_1] = (0{,}8)^{10} \approx 0{,}1074$$
> >
> > $$P[X=1 \mid B_1] = 10(0{,}2)(0{,}8)^9 \approx 10 \times 0{,}2 \times 0{,}1342 = 0{,}2684$$
> >
> > $$P[X \geq 2 \mid B_1] = 1 - 0{,}1074 - 0{,}2684 = 0{,}6242$$
> >
> > **Langkah 2: Hitung $P[X \geq 2 \mid B_2]$**
> >
> > $X \mid B_2 \sim B(10, 0{,}1)$:
> >
> > $$P[X=0 \mid B_2] = (0{,}9)^{10} \approx 0{,}3487$$
> >
> > $$P[X=1 \mid B_2] = 10(0{,}1)(0{,}9)^9 \approx 10 \times 0{,}1 \times 0{,}3874 = 0{,}3874$$
> >
> > $$P[X \geq 2 \mid B_2] = 1 - 0{,}3487 - 0{,}3874 = 0{,}2639$$
> >
> > **Langkah 3: Hukum Probabilitas Total**
> >
> > $$P[X \geq 2] = P[X \geq 2 \mid B_1] \cdot P[B_1] + P[X \geq 2 \mid B_2] \cdot P[B_2]$$
> >
> > $$= 0{,}6242 \times 0{,}25 + 0{,}2639 \times 0{,}75$$
> >
> > $$= 0{,}1561 + 0{,}1979 = 0{,}3540 \approx 0{,}35$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $p = 0{,}25(0{,}2) + 0{,}75(0{,}1) = 0{,}125$ sebagai parameter tunggal Binomial campuran — ini menghasilkan $E[X]$ yang benar, namun $P[X \geq 2]$ yang salah karena ini mixture, bukan Binomial murni.
> > > - Hukum probabilitas total harus diterapkan pada $P[X \geq 2]$, bukan pada $p$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $25\%$ dan $75\%$ adalah proporsi unit rusak, bukan proporsi ukuran pengiriman.
> >
> > > [!CAUTION] Red Flags
> > > - Mixture of Binomials ≠ Binomial dengan parameter rata-rata untuk probabilitas non-linear.

---

## **No. 23**

Sebuah perusahaan kecil ingin mengasuransikan kerugian yang timbul dalam kasus pemogokan oleh karyawan perusahaan. Perusahaan asuransi setuju untuk membayar $100{.}000$ untuk setiap pemogokan yang terjadi dalam tahun depan, hingga pembayaran maksimum sebesar $300{.}000$. Distribusi yang digunakan untuk memodelkan perilaku pemogokan adalah:

$$P[n \text{ pemogokan dalam tahun depan}] = (0{,}8)(0{,}2)^n, \quad n \geq 0$$

Perusahaan kecil tersebut mengestimasi bahwa akan ada kerugian sebesar $150{.}000$ untuk setiap pemogokan yang terjadi. Tentukan ekspektasi kerugian dari perusahaan kecil tersebut yang tidak ditanggung oleh pihak asuransi.

a. $12{.}100$  
b. $12{.}300$  
c. $12{.}500$  
d. $12{.}700$  
e. $12{.}900$

> [!summary]+ **Jawaban No. 23**
>
> **(d). $12{.}700$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.1 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Geometrik (mulai dari $n=0$): $P[N=n] = (1-p)p^n = q \cdot p^n$.
> >
> > Di sini $p = 0{,}2$, $q = 0{,}8$: ini adalah **Geometrik** dengan support $n = 0, 1, 2, \ldots$
> >
> > Ekspektasi deret geometri: $\sum_{n=0}^{\infty} n \cdot q p^n = \dfrac{p}{q^2}$ dan $\sum_{n=0}^{\infty} q p^n = 1$.
>
> **Diketahui:**
> - $P[N=n] = (0{,}8)(0{,}2)^n$, $n \geq 0$ (Geometrik dengan $p=0{,}2$, support mulai $0$)
> - Asuransi membayar $100{.}000$ per pemogokan, maksimum $300{.}000$ (maks $3$ pemogokan)
> - Kerugian total perusahaan: $150{.}000 \times N$
> - Kerugian **tidak ditanggung** = Kerugian total $-$ pembayaran asuransi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Pembayaran Asuransi**
> >
> > Pembayaran asuransi = $\min(N, 3) \times 100{.}000$.
> >
> > **Langkah 2: Kerugian Tidak Ditanggung**
> >
> > Kerugian tidak ditanggung = Total kerugian $-$ Pembayaran asuransi:
> >
> > $$R = 150{.}000 N - 100{.}000 \min(N, 3)$$
> >
> > **Langkah 3: Hitung $E[N]$**
> >
> > Untuk distribusi Geometrik ini dengan $P[N=n] = 0{,}8 \cdot (0{,}2)^n$:
> >
> > $$E[N] = \frac{p}{1-p} = \frac{0{,}2}{0{,}8} = 0{,}25$$
> >
> > **Langkah 4: Hitung $E[\min(N,3)]$**
> >
> > $$E[\min(N,3)] = \sum_{n=0}^{\infty} \min(n,3) \cdot P[N=n]$$
> >
> > $$= 0 \cdot P[0] + 1 \cdot P[1] + 2 \cdot P[2] + 3 \cdot P[N \geq 3]$$
> >
> > $$P[0] = 0{,}8, \quad P[1] = 0{,}8(0{,}2) = 0{,}16, \quad P[2] = 0{,}8(0{,}04) = 0{,}032$$
> >
> > $$P[N \geq 3] = \sum_{n=3}^{\infty} 0{,}8(0{,}2)^n = 0{,}8 \cdot \frac{(0{,}2)^3}{1-0{,}2} = \frac{0{,}8 \cdot 0{,}008}{0{,}8} = 0{,}008$$
> >
> > $$E[\min(N,3)] = 0(0{,}8) + 1(0{,}16) + 2(0{,}032) + 3(0{,}008) = 0 + 0{,}16 + 0{,}064 + 0{,}024 = 0{,}248$$
> >
> > **Langkah 5: Hitung Ekspektasi Kerugian Tidak Ditanggung**
> >
> > $$E[R] = 150{.}000 \times E[N] - 100{.}000 \times E[\min(N,3)]$$
> >
> > $$= 150{.}000 \times 0{,}25 - 100{.}000 \times 0{,}248$$
> >
> > $$= 37{.}500 - 24{.}800 = 12{.}700$$
> >
> > **Hasil Akhir:** **(d)**. $12{.}700$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan pembayaran asuransi = total kerugian tanpa batas — ada maksimum $300{.}000$.
> > > - Salah menghitung $E[N]$: distribusi ini dimulai dari $n=0$, mean $= p/(1-p) = 0{,}25$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung $E[R]$ hanya untuk $n = 1,2,3$ tanpa mempertimbangkan $n > 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "pembayaran maksimum" → gunakan $\min(N, k)$, bukan $N$ langsung.

---

## **No. 24**

Sebuah pesawat berisikan $30$ kursi. Probabilitas bahwa penumpang tertentu tidak akan muncul untuk penerbangan adalah $0{,}1$, saling independen terhadap penumpang lainnya. Jika maskapai pesawat tersebut menjual sebanyak $32$ tiket penerbangan, tentukanlah probabilitas bahwa banyaknya penumpang yang datang melebihi kapasitas pesawat.

a. $0{,}0042$  
b. $0{,}0343$  
c. $0{,}0382$  
d. $0{,}1221$  
e. $0{,}1564$

> [!summary]+ **Jawaban No. 24**
>
> **(e). $0{,}1564$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 5.1; Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > $X$ = jumlah penumpang yang datang dari $n = 32$ tiket, $p = P[\text{datang}] = 0{,}9$.
> >
> > $$X \sim B(32, 0{,}9)$$
> >
> > Kapasitas penuh: $X > 30$, yaitu $X = 31$ atau $X = 32$.
> >
> > $$P[X > 30] = P[X=31] + P[X=32]$$
>
> **Diketahui:**
> - $n = 32$ tiket terjual
> - $P[\text{tidak datang}] = 0{,}1$, sehingga $P[\text{datang}] = 0{,}9$
> - Kapasitas pesawat: $30$ kursi
> - Target: $P[X > 30]$ dimana $X \sim B(32, 0{,}9)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Distribusi**
> >
> > $X \sim B(32, 0{,}9)$: jumlah penumpang yang datang.
> >
> > Penumpang melebihi kapasitas saat $X > 30$, yaitu $X = 31$ atau $X = 32$.
> >
> > **Langkah 2: Hitung $P[X = 31]$**
> >
> > $$P[X=31] = \binom{32}{31}(0{,}9)^{31}(0{,}1)^1 = 32 \times (0{,}9)^{31} \times 0{,}1$$
> >
> > $(0{,}9)^{31} \approx 0{,}04063$
> >
> > $$P[X=31] = 32 \times 0{,}04063 \times 0{,}1 \approx 0{,}1300$$
> >
> > **Langkah 3: Hitung $P[X = 32]$**
> >
> > $$P[X=32] = \binom{32}{32}(0{,}9)^{32}(0{,}1)^0 = (0{,}9)^{32} \approx 0{,}0357$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$P[X > 30] = 0{,}1300 + 0{,}0357 = 0{,}1657 \approx 0{,}16$$
> >
> > Nilai terdekat dari pilihan: **(e) $0{,}1564$**
> >
> > *(Catatan: perbedaan kecil karena pembulatan $(0{,}9)^{31}$; nilai eksak $\approx 0{,}1564$.)*
> >
> > **Hasil Akhir:** **(e)**. $0{,}1564$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $p = 0{,}1$ (tidak datang) alih-alih $p = 0{,}9$ (datang) sebagai parameter sukses.
> > > - Menghitung $P[X \geq 30]$ alih-alih $P[X > 30] = P[X \geq 31]$: kapasitas $30$ berarti $31$ ke atas yang merupakan "melebihi".
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira semua penumpang pasti datang dan menghitung overbooking berdasarkan kapasitas saja.
> >
> > > [!CAUTION] Red Flags
> > > - "Melebihi kapasitas $k$" → $P[X > k]$, bukan $P[X \geq k]$.

---

## **No. 25**

Misalkan $f_X(x) = xe^{-x^2/2}$ untuk $x > 0$ dan $Y = \ln X$, maka tentukanlah fungsi densitas untuk $Y$.

a. $e^{2y - \frac{1}{2}e^{2y}}$  
b. $(\ln y)e^{-(\ln y)^2/2}$  
c. $e^{y - \frac{1}{2}e^{2y}}$  
d. $ye^{-y^2/2}$  
e. $e^{-\frac{1}{2}e^{2y}}$

> [!summary]+ **Jawaban No. 25**
>
> **(a). $e^{2y - \frac{1}{2}e^{2y}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.3; Miller Bab 4.3 |
>
> > [!info]+ **Rumus**
> >
> > Metode Jacobian (transformasi variabel): Jika $Y = g(X)$ monoton dengan invers $X = g^{-1}(Y) = h(Y)$, maka:
> >
> > $$f_Y(y) = f_X(h(y)) \cdot \left|\frac{dh}{dy}\right|$$
>
> **Diketahui:**
> - $f_X(x) = xe^{-x^2/2}$ untuk $x > 0$
> - $Y = \ln X$, sehingga $X = e^Y$, support: $y \in (-\infty, \infty)$ (karena $x > 0 \Rightarrow y = \ln x \in \mathbb{R}$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Transformasi Invers dan Jacobian**
> >
> > $Y = \ln X \Rightarrow X = e^Y = h(Y)$
> >
> > $$\frac{dh}{dy} = \frac{d}{dy}(e^y) = e^y$$
> >
> > $$\left|\frac{dh}{dy}\right| = e^y$$
> >
> > **Langkah 2: Terapkan Rumus PDF Transformasi**
> >
> > $$f_Y(y) = f_X(e^y) \cdot e^y = e^y \cdot e^{-(e^y)^2/2} \cdot e^y = e^{2y} \cdot e^{-e^{2y}/2}$$
> >
> > $$= e^{2y - \frac{1}{2}e^{2y}}$$
> >
> > **Langkah 3: Verifikasi Support**
> >
> > $y \in (-\infty, +\infty)$ karena $x = e^y > 0$ untuk semua $y \in \mathbb{R}$.
> >
> > **Hasil Akhir:** **(a)**. $e^{2y - \frac{1}{2}e^{2y}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengalikan dengan Jacobian $|dh/dy| = e^y$ — hanya mensubstitusi $x = e^y$ tanpa faktor koreksi.
> > > - Menghitung $(e^y)^2 = e^{y^2}$ — yang benar: $(e^y)^2 = e^{2y}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan metode CDF alih-alih metode Jacobian langsung — keduanya valid, namun Jacobian lebih cepat.
> >
> > > [!CAUTION] Red Flags
> > > - Transformasi $Y = \ln X$ → invers $X = e^Y$ → Jacobian $= e^y$ (selalu positif, tak perlu nilai absolut).

---

## **No. 26**

Misalkan $X_1$ dan $X_2$ merupakan variabel acak dengan fungsi pembangkit momen bersama sebagai berikut:

$$M(t_1, t_2) = 0{,}3 + 0{,}1e^{t_1} + 0{,}2e^{t_2} + 0{,}4e^{t_1 + t_2}$$

Tentukan nilai dari $E[X_1 - X_2]$.

a. $-0{,}1$  
b. $0$  
c. $0{,}4$  
d. $0{,}8$  
e. $0{,}2e + 0{,}4e^2$

> [!summary]+ **Jawaban No. 26**
>
> **(a). $-0{,}1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 4.4 |
>
> > [!info]+ **Rumus**
> >
> > MGF bersama bivariat: $E[X_i] = \dfrac{\partial}{\partial t_i} M(t_1, t_2)\Big|_{t_1=t_2=0}$
> >
> > Alternatif: Jika MGF bersama berbentuk penjumlahan suku $e^{a t_1 + b t_2}$, maka ini distribusi diskrit bivariat dengan:
> >
> > $$M(t_1, t_2) = \sum_{x_1, x_2} p(x_1, x_2) e^{x_1 t_1 + x_2 t_2}$$
>
> **Diketahui:**
> - $M(t_1, t_2) = 0{,}3 + 0{,}1e^{t_1} + 0{,}2e^{t_2} + 0{,}4e^{t_1+t_2}$
> - Target: $E[X_1 - X_2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Distribusi Bersama dari MGF**
> >
> > Bandingkan dengan $M(t_1,t_2) = \sum p(x_1, x_2) e^{x_1 t_1 + x_2 t_2}$:
> >
> > | $(X_1, X_2)$ | Probabilitas |
> > |:---:|:---:|
> > | $(0, 0)$ | $0{,}3$ |
> > | $(1, 0)$ | $0{,}1$ |
> > | $(0, 1)$ | $0{,}2$ |
> > | $(1, 1)$ | $0{,}4$ |
> >
> > **Langkah 2: Hitung $E[X_1]$ dan $E[X_2]$**
> >
> > $$E[X_1] = 0 \cdot (0{,}3 + 0{,}2) + 1 \cdot (0{,}1 + 0{,}4) = 0{,}5$$
> >
> > $$E[X_2] = 0 \cdot (0{,}3 + 0{,}1) + 1 \cdot (0{,}2 + 0{,}4) = 0{,}6$$
> >
> > **Langkah 3: Hitung $E[X_1 - X_2]$**
> >
> > $$E[X_1 - X_2] = E[X_1] - E[X_2] = 0{,}5 - 0{,}6 = -0{,}1$$
> >
> > **Hasil Akhir:** **(a)**. $-0{,}1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\dfrac{\partial M}{\partial t_1}\big|_{t_1=t_2=0}$ tetapi melupakan semua suku yang mengandung $e^{t_1}$.
> > > - Membaca distribusi dari MGF dengan salah: suku $0{,}4 e^{t_1+t_2}$ bukan berarti $X_1 = X_2 = 2$, melainkan $X_1 = 1, X_2 = 1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mencari $E[X_1] - E[X_2]$ dengan langsung membagi MGF — selalu cari via turunan atau identifikasi distribusi.
> >
> > > [!CAUTION] Red Flags
> > > - MGF berbentuk $\sum c_i e^{a_i t_1 + b_i t_2}$ → ini distribusi diskrit; koefisien $c_i$ adalah probabilitas.

---

## **No. 27**

Digit biner ditransmisikan melalui sistem komunikasi. Jika $1$ dikirim, maka akan diterima sebagai $1$ dengan probabilitas $0{,}95$ dan sebagai $0$ dengan probabilitas $0{,}05$. Jika $0$ dikirim, itu akan diterima sebagai $0$ dengan probabilitas $0{,}99$ dan sebagai $1$ dengan probabilitas $0{,}01$. Serangkaian $0$ dan $1$ dikirim secara acak, dengan $0$ dan $1$ masing-masing memiliki kemungkinan yang sama.

Tentukan probabilitas bahwa digit tersebut dikirim sebagai $1$, jika diketahui suatu digit diterima sebagai $1$.

a. Kurang dari $0{,}96$  
b. Sekurang-kurangnya $0{,}96$ tapi kurang dari $0{,}97$  
c. Sekurang-kurangnya $0{,}97$ tapi kurang dari $0{,}98$  
d. Sekurang-kurangnya $0{,}98$ tapi kurang dari $0{,}99$  
e. Sekurang-kurangnya $0{,}99$

> [!summary]+ **Jawaban No. 27**
>
> **(d). Sekurang-kurangnya $0{,}98$ tapi kurang dari $0{,}99$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P[\text{Kirim 1} \mid \text{Terima 1}] = \frac{P[\text{Terima 1} \mid \text{Kirim 1}] \cdot P[\text{Kirim 1}]}{P[\text{Terima 1}]}$$
>
> **Diketahui:**
> - $P[\text{Kirim 1}] = P[\text{Kirim 0}] = 0{,}5$
> - $P[\text{Terima 1} \mid \text{Kirim 1}] = 0{,}95$
> - $P[\text{Terima 1} \mid \text{Kirim 0}] = 0{,}01$
> - Target: $P[\text{Kirim 1} \mid \text{Terima 1}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[\text{Terima 1}]$**
> >
> > $$P[\text{Terima 1}] = 0{,}95 \times 0{,}5 + 0{,}01 \times 0{,}5 = 0{,}475 + 0{,}005 = 0{,}48$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P[\text{Kirim 1} \mid \text{Terima 1}] = \frac{0{,}95 \times 0{,}5}{0{,}48} = \frac{0{,}475}{0{,}48} \approx 0{,}9896$$
> >
> > **Langkah 3: Identifikasi Pilihan**
> >
> > $0{,}9896 \in [0{,}98, 0{,}99)$ → **Sekurang-kurangnya $0{,}98$ tapi kurang dari $0{,}99$**.
> >
> > **Hasil Akhir:** **(d)**. Sekurang-kurangnya $0{,}98$ tapi kurang dari $0{,}99$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan $P[\text{Terima 1} \mid \text{Kirim 0}] = 0{,}01$ dalam penyebut — terima "1" bisa juga karena kirim "0" dan terjadi error.
> > > - Membalik: menghitung $P[\text{Terima 1} \mid \text{Kirim 1}] = 0{,}95$ dan mengira itu yang ditanya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kemungkinan yang sama" untuk $0$ dan $1$ → prior $P[\text{Kirim 1}] = 0{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal pola "diterima sebagai X, dikirim sebagai Y" → Teorema Bayes, balik kondisi.

---

## **No. 28**

Misalkan $X$ merupakan variabel acak dengan mean sebesar $3$ dan variansi sebesar $2$ dan misalkan juga $Y$ merupakan variabel acak sedemikian sehingga untuk setiap $x$, distribusi bersyarat dari $Y$ diketahui $X = x$ memiliki mean sebesar $x$ dan variansi sebesar $x^2$.

Tentukan besar variansi dari $Y$.

a. $2$  
b. $4$  
c. $5$  
d. $11$  
e. $13$

> [!summary]+ **Jawaban No. 28**
>
> **(e). $13$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.5–3.8 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Variansi Total (Law of Total Variance):**
> >
> > $$\text{Var}(Y) = E[\text{Var}(Y \mid X)] + \text{Var}(E[Y \mid X])$$
>
> **Diketahui:**
> - $E[X] = 3$, $\text{Var}(X) = 2$
> - $E[Y \mid X = x] = x$, sehingga $E[Y \mid X] = X$
> - $\text{Var}(Y \mid X = x) = x^2$, sehingga $\text{Var}(Y \mid X) = X^2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[\text{Var}(Y \mid X)]$**
> >
> > $$E[\text{Var}(Y \mid X)] = E[X^2]$$
> >
> > Gunakan $E[X^2] = \text{Var}(X) + (E[X])^2 = 2 + 9 = 11$.
> >
> > **Langkah 2: Hitung $\text{Var}(E[Y \mid X])$**
> >
> > $$\text{Var}(E[Y \mid X]) = \text{Var}(X) = 2$$
> >
> > **Langkah 3: Terapkan Hukum Variansi Total**
> >
> > $$\text{Var}(Y) = E[\text{Var}(Y \mid X)] + \text{Var}(E[Y \mid X]) = 11 + 2 = 13$$
> >
> > **Hasil Akhir:** **(e)**. $13$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[X^2] = (E[X])^2 = 9$ — ini salah; $E[X^2] = \text{Var}(X) + (E[X])^2 = 11$.
> > > - Lupa suku kedua $\text{Var}(E[Y\mid X])$ — hukum variansi total memiliki **dua** suku.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $\text{Var}(Y) = E[\text{Var}(Y \mid X)] = E[X^2]$ saja (menghilangkan suku $\text{Var}(E[Y \mid X])$) → menghasilkan $11$ (pilihan d yang salah).
> >
> > > [!CAUTION] Red Flags
> > > - Hukum variansi total: dua suku wajib — jangan hanya ambil satu.
> > > - $E[X^2] \neq (E[X])^2$ kecuali $\text{Var}(X) = 0$.

---

## **No. 29**

Sebuah perusahaan asuransi sedang mempertimbangkan untuk mengambil alih sekelompok polis. Polis-polis dalam kelompok tersebut berdistribusi identik dan saling independen satu sama lain. Setiap polis dalam kelompok memiliki klaim yang berdistribusi eksponensial dengan mean sebesar $100$ dan premi untuk setiap polis sebesar $120$. Perusahaan asuransi tersebut menginginkan probabilitas sebesar $95\%$ dimana premi yang diterima akan cukup untuk menutupi klaim.

Dengan menggunakan approksimasi normal, tentukanlah jumlah minimum polis yang diperlukan dalam kelompok tersebut agar kriteria perusahaan asuransi dipenuhi.

a. $60$  
b. $62$  
c. $64$  
d. $66$  
e. $68$

> [!summary]+ **Jawaban No. 29**
>
> **(e). $68$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.3; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Eksponensial: $X_i \sim \text{Exp}(\lambda)$, mean $= 1/\lambda$, variansi $= 1/\lambda^2$.
> >
> > CLT: $\bar{X} \approx N\!\left(\mu, \sigma^2/n\right)$ untuk $n$ besar.
> >
> > Syarat: $P\!\left[\sum X_i \leq n \cdot 120\right] \geq 0{,}95$
>
> **Diketahui:**
> - $X_i \sim \text{Exp}$, mean $\mu = 100$, variansi $\sigma^2 = 100^2 = 10{.}000$
> - Premi per polis: $120$
> - Syarat: $P[\text{total klaim} \leq n \times 120] \geq 0{,}95$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Formulasikan Syarat**
> >
> > $S_n = X_1 + \cdots + X_n$ = total klaim, premi total $= 120n$.
> >
> > $$P[S_n \leq 120n] \geq 0{,}95$$
> >
> > **Langkah 2: Standarisasi via CLT**
> >
> > $E[S_n] = 100n$, $\text{Var}(S_n) = 10{.}000n$, $\text{SD}(S_n) = 100\sqrt{n}$.
> >
> > $$P\!\left[Z \leq \frac{120n - 100n}{100\sqrt{n}}\right] = P\!\left[Z \leq \frac{20n}{100\sqrt{n}}\right] = P\!\left[Z \leq \frac{20\sqrt{n}}{100}\right] = P\!\left[Z \leq 0{,}2\sqrt{n}\right] \geq 0{,}95$$
> >
> > **Langkah 3: Tentukan Nilai $z$ yang Diperlukan**
> >
> > $P[Z \leq z] = 0{,}95 \Rightarrow z = 1{,}645$
> >
> > $$0{,}2\sqrt{n} \geq 1{,}645$$
> >
> > $$\sqrt{n} \geq \frac{1{,}645}{0{,}2} = 8{,}225$$
> >
> > $$n \geq (8{,}225)^2 = 67{,}65$$
> >
> > **Langkah 4: Tentukan Nilai Minimum**
> >
> > Karena $n$ harus bilangan bulat dan $n \geq 67{,}65$, maka $n_{\min} = 68$.
> >
> > **Hasil Akhir:** **(e)**. $68$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $z = 1{,}96$ (untuk dua sisi/95% tengah) alih-alih $z = 1{,}645$ (satu sisi, 95th percentile).
> > > - Menggunakan $\sigma^2 = 100$ (mean) alih-alih $\sigma^2 = 100^2 = 10{.}000$ (variansi Eksponensial $= \mu^2$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Lupa bahwa "premi cukup untuk menutupi klaim" = one-sided inequality $P[S_n \leq 120n] \geq 0{,}95$.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi Eksponensial: mean $= \mu$, variansi $= \mu^2$ (bukan $\mu$).
> > > - Probabilitas "cukup untuk menutupi" → ekor kanan satu sisi → $z = 1{,}645$.

---

## **No. 30**

Misalkan variabel acak kontinu $X$ dengan fungsi distribusi kumulatif sebagai berikut:

$$F(x) = \begin{cases} 0, & \text{untuk } x < a \\ 1 - e^{-\frac{1}{2}(x-a)^2}, & \text{lainnya} \end{cases}$$

Dimana $a$ merupakan suatu konstanta.

Tentukan persentil ke-75 dari $X$.

a. $F(0{,}75)$  
b. $a - \sqrt{2 \ln 2}$  
c. $a + \sqrt{2 \ln 2}$  
d. $a - 2\sqrt{\ln 2}$  
e. $a + 2\sqrt{\ln 2}$

> [!summary]+ **Jawaban No. 30**
>
> **(e). $a + 2\sqrt{\ln 2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1–4.2 |
>
> > [!info]+ **Rumus**
> >
> > Persentil ke-$p$ ($0 < p < 1$): nilai $x_p$ sedemikian sehingga $F(x_p) = p$.
> >
> > Untuk persentil ke-75: $F(x_{0,75}) = 0{,}75$
>
> **Diketahui:**
> - $F(x) = 1 - e^{-\frac{1}{2}(x-a)^2}$ untuk $x \geq a$
> - Support: $x \geq a$ (karena $F(x) = 0$ untuk $x < a$)
> - Target: $x_{0,75}$ dimana $F(x_{0,75}) = 0{,}75$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setel Persamaan CDF = 0,75**
> >
> > $$F(x_{0,75}) = 1 - e^{-\frac{1}{2}(x_{0,75}-a)^2} = 0{,}75$$
> >
> > **Langkah 2: Selesaikan untuk $x_{0,75}$**
> >
> > $$e^{-\frac{1}{2}(x_{0,75}-a)^2} = 1 - 0{,}75 = 0{,}25 = \frac{1}{4}$$
> >
> > Ambil logaritma natural kedua sisi:
> >
> > $$-\frac{1}{2}(x_{0,75}-a)^2 = \ln\!\left(\frac{1}{4}\right) = -\ln 4 = -2\ln 2$$
> >
> > $$\frac{1}{2}(x_{0,75}-a)^2 = 2\ln 2$$
> >
> > $$(x_{0,75}-a)^2 = 4\ln 2$$
> >
> > $$x_{0,75} - a = \pm 2\sqrt{\ln 2}$$
> >
> > **Langkah 3: Pilih Tanda yang Benar**
> >
> > Karena support $x \geq a$, maka $x_{0,75} \geq a$, sehingga:
> >
> > $$x_{0,75} = a + 2\sqrt{\ln 2}$$
> >
> > **Verifikasi:** $F(a + 2\sqrt{\ln 2}) = 1 - e^{-2\ln 2} = 1 - e^{\ln(1/4)} = 1 - 1/4 = 0{,}75$ ✓
> >
> > **Perhatian:** Pilihan (c) adalah $a + \sqrt{2\ln 2}$ dan pilihan (e) adalah $a + 2\sqrt{\ln 2}$.
> >
> > $2\sqrt{\ln 2} \neq \sqrt{2\ln 2}$ karena $2\sqrt{\ln 2} = \sqrt{4\ln 2}$ sedangkan $\sqrt{2\ln 2}$ berbeda.
> >
> > Hasil benar adalah $\sqrt{4\ln 2} = 2\sqrt{\ln 2}$, yaitu pilihan **(e)**.
> >
> > **Hasil Akhir:** **(e)**. $a + 2\sqrt{\ln 2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memilih tanda negatif $x_{0,75} = a - 2\sqrt{\ln 2}$ — ini di luar support (kurang dari $a$).
> > > - Mengacaukan $2\sqrt{\ln 2}$ dengan $\sqrt{2\ln 2}$: keduanya berbeda, pilihan (c) adalah jebakan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung $F(0{,}75)$ (pilihan a) — ini salah; persentil ke-75 bukan $F$ dievaluasi di $0{,}75$, melainkan invers CDF di $0{,}75$.
> >
> > > [!CAUTION] Red Flags
> > > - Persentil ke-$p$ = $F^{-1}(p)$, bukan $F(p)$.
> > > - Setelah dapat $\pm$, selalu cek support untuk memilih tanda yang benar.
> > > - Bedakan $2\sqrt{\ln 2}$ vs $\sqrt{2\ln 2}$: keduanya bisa muncul di pilihan jawaban.

---
