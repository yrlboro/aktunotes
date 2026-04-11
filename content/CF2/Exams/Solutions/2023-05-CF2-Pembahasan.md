## **No. 1**

Di dalam suatu laci, terdapat tujuh pasang kaos kaki yang setiap pasangnya berbeda dengan pasang lainnya (kaos kaki sebelah kiri dan kaos kaki sebelah kanan dianggap sebagai kaos kaki yang berbeda). Diambil lima kaos kaki sekaligus secara acak.

Tentukan banyaknya cara pengambilan sehingga di antara yang terambil terdapat tepat sepasang kaos kaki yang cocok (berpasangan).

a. $1{.}120$  
b. $560$  
c. $140$  
d. $56$  
e. $7$

> [!summary]+ **Jawaban No. 1**
>
> **(a). $1{.}120$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Kombinasi (pemilihan tanpa urutan):
> >
> > $$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$$
> >
> > Strategi **"Divide and Conquer"** dalam kombinatorik: pisahkan kondisi yang harus dipenuhi dan yang harus dihindari, lalu kalikan hasilnya (aturan perkalian).
>
> **Diketahui:**
> - $7$ pasang kaos kaki, tiap pasang berbeda, kiri $\neq$ kanan → total $14$ kaos kaki berbeda
> - Diambil $5$ sekaligus secara acak
> - Syarat: **tepat satu** pasang yang cocok (berpasangan) di antara 5 yang terambil
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Strategi Penghitungan**
> >
> > "Tepat satu pasang" berarti:
> > - Dari 7 pasang, **pilih 1 pasang** yang keduanya masuk → wajib ambil kedua kaos kaki dari pasang ini.
> > - Sisa $5 - 2 = 3$ kaos kaki berasal dari pasang-pasang lain, **tanpa membentuk pasang baru**.
> >
> > **Langkah 2: Memilih Pasang yang Lengkap**
> >
> > Pilih 1 pasang dari 7 pasang yang ada:
> >
> > $$\binom{7}{1} = 7$$
> >
> > **Langkah 3: Memilih 3 Kaos Kaki Lain Tanpa Pasang Baru**
> >
> > Sisa $14 - 2 = 12$ kaos kaki berasal dari $6$ pasang yang tersisa.
> >
> > Agar tidak terbentuk pasang baru: dari setiap pasang yang dipilih, **ambil hanya 1** kaos kaki (kiri atau kanan).
> >
> > - Pilih **3 pasang** dari 6 pasang tersisa (untuk diambil salah satunya): $\binom{6}{3}$
> > - Dari setiap pasang yang dipilih, pilih **1 dari 2** kaos kaki: $2^3$
> >
> > $$\binom{6}{3} \times 2^3 = 20 \times 8 = 160$$
> >
> > **Langkah 4: Hitung Total**
> >
> > $$\text{Total} = \binom{7}{1} \times \binom{6}{3} \times 2^3 = 7 \times 20 \times 8 = 1{.}120$$
> >
> > **Hasil Akhir:** **(a)**. $1{.}120$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa setelah memilih 1 pasang lengkap, sisa 3 kaos kaki **tidak boleh membentuk pasang baru** — kunci utama soal ini.
> > > - Menghitung $\binom{12}{3}$ untuk 3 kaos kaki sisa tanpa memperhatikan larangan membentuk pasang.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan bahwa "kiri dan kanan dianggap berbeda" — ini berarti total benda bukan 7 melainkan 14.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "tepat $k$ pasang" → pisahkan langkah: (1) pilih pasang lengkap, (2) pilih sisa tanpa membentuk pasang tambahan.
> > > - Jika hasil tidak ada di pilihan → cek apakah kondisi "tanpa pasang baru" sudah diterapkan.
>
---

## **No. 2**

Diketahui dari $1{.}000$ orang, $800$ orang menyukai olahraga sepakbola dan $600$ orang menyukai olahraga bulutangkis. Semuanya menyukai setidaknya satu dari dua olahraga tersebut.

Tentukan probabilitas dipilihnya seseorang yang menyukai bulutangkis tapi tidak menyukai sepakbola.

a. $0$  
b. $0{,}1$  
c. $0{,}2$  
d. $0{,}3$  
e. $0{,}4$

> [!summary]+ **Jawaban No. 2**
>
> **(c). $0{,}2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.1–1.2; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Hukum penjumlahan (Inclusion-Exclusion):
> >
> > $$|F \cup B| = |F| + |B| - |F \cap B|$$
> >
> > Kardinalitas "hanya $B$" (tidak $F$):
> >
> > $$|B \setminus F| = |B| - |F \cap B|$$
>
> **Diketahui:**
> - Total: $n = 1{.}000$ orang
> - $|F| = 800$ (suka sepakbola), $|B| = 600$ (suka bulutangkis)
> - Semua suka setidaknya satu: $|F \cup B| = 1{.}000$
> - Target: $P(\text{hanya bulutangkis}) = P(B \setminus F)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $|F \cap B|$ (keduanya)**
> >
> > $$|F \cap B| = |F| + |B| - |F \cup B| = 800 + 600 - 1{.}000 = 400$$
> >
> > **Langkah 2: Hitung $|B \setminus F|$ (bulutangkis saja)**
> >
> > $$|B \setminus F| = |B| - |F \cap B| = 600 - 400 = 200$$
> >
> > **Langkah 3: Hitung Probabilitas**
> >
> > $$P(B \setminus F) = \frac{200}{1{.}000} = 0{,}2$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(B) = 0{,}6$ langsung sebagai jawaban — ini adalah probabilitas **semua** penggemar bulutangkis, bukan yang **hanya** bulutangkis.
> > > - Lupa mengurangkan irisan: $P(B \setminus F) \neq P(B)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Menyukai bulutangkis tapi tidak menyukai sepakbola" = $B \cap F^c = B \setminus F$, bukan $P(B)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "semua menyukai setidaknya satu" → $|F \cup B| = $ total populasi, gunakan ini untuk mencari irisan.
>
---

## **No. 3**

Sebuah undian diadakan setiap minggu, dimana undian tersebut berharga $1$ dan hadiah undian tersebut sebesar $10$. Probabilitas untuk mendapatkan undian tersebut sebesar $\dfrac{1}{20}$. Andi memutuskan untuk membeli $1$ tiket undian setiap minggu sampai dia menang, dimana pada saat itu dia akan berhenti.

Tentukan ekspektasi keuntungan yang didapatkan Andi dari pembelian undian-undian tersebut.

a. $-20$  
b. $-15$  
c. $-10$  
d. $+10$  
e. $+20$

> [!summary]+ **Jawaban No. 3**
>
> **(c). $-10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.4 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Geom}(p)$ dengan support $X = 1, 2, 3, \ldots$ (banyak percobaan hingga sukses pertama):
> >
> > $$E[X] = \frac{1}{p}$$
> >
> > Keuntungan bersih = Pendapatan $-$ Total Pengeluaran.
>
> **Diketahui:**
> - Harga tiket: $1$ per minggu, hadiah: $10$
> - $p = \dfrac{1}{20}$ (probabilitas menang)
> - $X$ = jumlah tiket yang dibeli hingga menang pertama kali → $X \sim \text{Geom}\!\left(\tfrac{1}{20}\right)$, support $X = 1, 2, 3, \ldots$
> - Target: $E[\text{Keuntungan}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Modelkan Keuntungan**
> >
> > Andi membeli $X$ tiket (Geometrik) lalu menang sekali:
> >
> > $$\text{Keuntungan} = \text{Hadiah} - \text{Total biaya tiket} = 10 - X$$
> >
> > **Langkah 2: Hitung Ekspektasi Jumlah Tiket**
> >
> > $$E[X] = \frac{1}{p} = \frac{1}{1/20} = 20$$
> >
> > **Langkah 3: Hitung Ekspektasi Keuntungan**
> >
> > $$E[\text{Keuntungan}] = E[10 - X] = 10 - E[X] = 10 - 20 = -10$$
> >
> > Andi **diharapkan rugi** sebesar $10$ secara keseluruhan.
> >
> > **Hasil Akhir:** **(c)**. $-10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira keuntungan = $10 - 1 = 9$ (hanya satu tiket) — padahal Andi membeli banyak tiket hingga menang.
> > > - Salah parametrisasi Geometrik: jika support $X = 0, 1, 2, \ldots$, maka $E[X] = (1-p)/p$, bukan $1/p$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Berhenti saat menang" → jumlah pembelian adalah **variabel acak Geometrik**, bukan nilai tetap.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "sampai pertama kali berhasil" → distribusi Geometrik dengan $E[X] = 1/p$ (untuk support $\{1,2,\ldots\}$).
>
---

## **No. 4**

Fungsi pembangkit momen untuk variabel acak $X$ adalah

$$M_X(t) = Ae^t + Be^{2t}$$

Diketahui juga bahwa $\text{Var}[X] = \dfrac{3}{16}$ dan $A > \dfrac{1}{2}$.

Tentukan nilai dari $E[X]$.

a. $\dfrac{7}{4}$  
b. $\dfrac{5}{4}$  
c. $1$  
d. $\dfrac{3}{4}$  
e. $\dfrac{1}{2}$

> [!summary]+ **Jawaban No. 4**
>
> **(b). $\dfrac{5}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 4.5 |
>
> > [!info]+ **Rumus**
> >
> > Properti MGF:
> >
> > $$E[X] = M_X'(0), \quad E[X^2] = M_X''(0)$$
> >
> > $$\text{Var}[X] = E[X^2] - (E[X])^2$$
> >
> > Syarat normalisasi: jika $M_X(t) = Ae^{t \cdot 1} + Be^{t \cdot 2}$, maka $X$ adalah variabel diskrit dengan $P(X=1) = A$ dan $P(X=2) = B$, sehingga $A + B = 1$.
>
> **Diketahui:**
> - $M_X(t) = Ae^t + Be^{2t}$
> - $\text{Var}[X] = \dfrac{3}{16}$, $A > \dfrac{1}{2}$
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Distribusi**
> >
> > MGF berbentuk $Ae^{t \cdot 1} + Be^{t \cdot 2}$ menunjukkan $X$ diskrit dengan dua nilai:
> >
> > $$P(X = 1) = A, \quad P(X = 2) = B$$
> >
> > Syarat distribusi: $A + B = 1$.
> >
> > **Langkah 2: Hitung Momen**
> >
> > $$E[X] = 1 \cdot A + 2 \cdot B = A + 2B = A + 2(1-A) = 2 - A$$
> >
> > $$E[X^2] = 1^2 \cdot A + 2^2 \cdot B = A + 4B = A + 4(1-A) = 4 - 3A$$
> >
> > **Langkah 3: Gunakan Variansi untuk Cari $A$**
> >
> > $$\text{Var}[X] = E[X^2] - (E[X])^2 = (4-3A) - (2-A)^2$$
> >
> > $$= 4 - 3A - 4 + 4A - A^2 = A - A^2 = A(1-A) = \frac{3}{16}$$
> >
> > Selesaikan $A(1-A) = \dfrac{3}{16}$:
> >
> > $$16A^2 - 16A + 3 = 0 \implies (4A-1)(4A-3) = 0$$
> >
> > $$A = \frac{1}{4} \quad \text{atau} \quad A = \frac{3}{4}$$
> >
> > **Langkah 4: Pilih Nilai $A$ yang Benar**
> >
> > Karena $A > \dfrac{1}{2}$, maka $A = \dfrac{3}{4}$, $B = \dfrac{1}{4}$.
> >
> > **Langkah 5: Hitung $E[X]$**
> >
> > $$E[X] = 2 - A = 2 - \frac{3}{4} = \frac{5}{4}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{5}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memilih $A = 1/4$ tanpa memperhatikan syarat $A > 1/2$ → menghasilkan $E[X] = 7/4$ yang salah.
> > > - Lupa bahwa $A + B = 1$ adalah syarat normalisasi PMF.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan turunan MGF untuk mencari $E[X]$ padahal $E[X]$ bisa langsung diperoleh dari bentuk PMF.
> >
> > > [!CAUTION] Red Flags
> > > - Jika MGF berbentuk $\sum_k c_k e^{kt}$ → $c_k = P(X=k)$, dan $\sum c_k = 1$ wajib terpenuhi.
> > > - Jika ada dua solusi dari persamaan variansi → gunakan syarat tambahan (di sini: $A > 1/2$) untuk memilih.
>
---

## **No. 5**

Misalkan $X$ dan $Y$ merupakan variabel acak dengan fungsi densitas bersama sebagai berikut:

| | $X = 0$ | $X = 1$ | $X = 2$ |
|:-:|:-:|:-:|:-:|
| $Y = 0$ | $0$ | $0{,}1$ | $0{,}2$ |
| $Y = 1$ | $0{,}1$ | $0{,}2$ | $0$ |
| $Y = 2$ | $0{,}2$ | $0{,}2$ | $0$ |

Tentukan nilai dari koefisien korelasi antara $X$ dan $Y$.

a. Sekurang-kurangnya $-1$ tapi kurang dari $-0{,}6$  
b. Sekurang-kurangnya $-0{,}6$ tapi kurang dari $-0{,}2$  
c. Sekurang-kurangnya $-0{,}2$ tapi kurang dari $0{,}2$  
d. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}6$  
e. Sekurang-kurangnya $0{,}6$

> [!summary]+ **Jawaban No. 5**
>
> **(a). $\rho \approx -0{,}671$ (sekurang-kurangnya $-1$ tapi kurang dari $-0{,}6$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.2 Distribusi Marginal]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.5–3.8 |
>
> > [!info]+ **Rumus**
> >
> > $$\rho_{X,Y} = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X) \cdot \text{Var}(Y)}}$$
> >
> > $$\text{Cov}(X,Y) = E[XY] - E[X]\cdot E[Y]$$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
>
> **Diketahui:**
> - Tabel distribusi bersama $p(x,y)$ untuk $x \in \{0,1,2\}$, $y \in \{0,1,2\}$
> - Verifikasi: $\sum_{x,y} p(x,y) = 0{+}0{,}1{+}0{,}2{+}0{,}1{+}0{,}2{+}0{+}0{,}2{+}0{,}2{+}0 = 1{,}0$ ✓
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi Marginal $X$**
> >
> > $$P(X=0) = 0+0{,}1+0{,}2 = 0{,}3$$
> >
> > $$P(X=1) = 0{,}1+0{,}2+0{,}2 = 0{,}5$$
> >
> > $$P(X=2) = 0{,}2+0+0 = 0{,}2$$
> >
> > **Langkah 2: Distribusi Marginal $Y$**
> >
> > $$P(Y=0) = 0+0{,}1+0{,}2 = 0{,}3$$
> >
> > $$P(Y=1) = 0{,}1+0{,}2+0 = 0{,}3$$
> >
> > $$P(Y=2) = 0{,}2+0{,}2+0 = 0{,}4$$
> >
> > **Langkah 3: Hitung Momen-Momen yang Dibutuhkan**
> >
> > $$E[X] = 0(0{,}3) + 1(0{,}5) + 2(0{,}2) = 0{,}9$$
> >
> > $$E[X^2] = 0^2(0{,}3) + 1^2(0{,}5) + 2^2(0{,}2) = 0{,}5 + 0{,}8 = 1{,}3$$
> >
> > $$\text{Var}(X) = 1{,}3 - (0{,}9)^2 = 1{,}3 - 0{,}81 = 0{,}49$$
> >
> > $$E[Y] = 0(0{,}3) + 1(0{,}3) + 2(0{,}4) = 1{,}1$$
> >
> > $$E[Y^2] = 0(0{,}3) + 1(0{,}3) + 4(0{,}4) = 0{,}3 + 1{,}6 = 1{,}9$$
> >
> > $$\text{Var}(Y) = 1{,}9 - (1{,}1)^2 = 1{,}9 - 1{,}21 = 0{,}69$$
> >
> > **Langkah 4: Hitung $E[XY]$**
> >
> > $$E[XY] = \sum_{x,y} xy \cdot p(x,y)$$
> >
> > Hanya sel dengan $x \neq 0$ dan $y \neq 0$ yang berkontribusi:
> >
> > $$E[XY] = 1{\cdot}1(0{,}2) + 1{\cdot}2(0{,}2) + 2{\cdot}0(\ldots) = 0{,}2 + 0{,}4 = 0{,}6$$
> >
> > **Langkah 5: Hitung Kovarians dan Korelasi**
> >
> > $$\text{Cov}(X,Y) = E[XY] - E[X]E[Y] = 0{,}6 - (0{,}9)(1{,}1) = 0{,}6 - 0{,}99 = -0{,}39$$
> >
> > $$\rho_{X,Y} = \frac{-0{,}39}{\sqrt{0{,}49 \times 0{,}69}} = \frac{-0{,}39}{\sqrt{0{,}3381}} = \frac{-0{,}39}{0{,}5815} \approx -0{,}671$$
> >
> > Karena $-1 \leq -0{,}671 < -0{,}6$, jawaban adalah **(a)**.
> >
> > **Hasil Akhir:** **(a)**. $\rho \approx -0{,}671$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa sel dengan $x=0$ atau $y=0$ tidak berkontribusi pada $E[XY]$.
> > > - Salah menghitung distribusi marginal: $P(X=x) = \sum_y p(x,y)$ (sum atas **baris** untuk kolom $x$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $\text{Cov}(X,Y) < 0$ berarti $X$ dan $Y$ berlawanan arah — benar secara intuitif, tapi tetap harus dihitung numerik untuk menentukan interval.
> >
> > > [!CAUTION] Red Flags
> > > - Jika tabel joint distribution diberikan → hitung marginal dulu sebelum momen apapun.
> > > - Selalu verifikasi $\sum p(x,y) = 1$ sebelum mulai menghitung.
>
---

## **No. 6**

Diketahui lama waktu sampai mesin rusak dimodelkan sebagai distribusi eksponensial dengan rata-rata 3 tahun. Garansi pada mesin memberikan skenario pengembalian uang sebagai berikut:

- Jika mesin rusak dalam 1 tahun, harga pembelian penuh dikembalikan.
- Jika mesin rusak setelah 1 tahun tetapi belum 2 tahun, $\dfrac{3}{4}$ dari harga pembelian dikembalikan.
- Jika mesin rusak setelah 2 tahun tetapi belum 4 tahun, $\dfrac{1}{2}$ dari harga pembelian dikembalikan.
- Jika mesin rusak setelah 4 tahun, $\dfrac{1}{4}$ dari harga pembelian dikembalikan.

Misalkan ekspektasi yang akan dikembalikan dalam garansi tersebut sebesar $c$ dari harga pembelian. Tentukanlah nilai dari $c$.

a. Kurang dari $0{,}2$  
b. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$  
c. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 6**
>
> **(d). $c \approx 0{,}627$ (sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 6.4 |
>
> > [!info]+ **Rumus**
> >
> > $T \sim \text{Exp}(\lambda)$ di sini $\lambda$ adalah **rate** ($\lambda = 1/\text{mean}$):
> >
> > $$P(T \leq t) = 1 - e^{-\lambda t}, \quad P(a < T \leq b) = e^{-\lambda a} - e^{-\lambda b}$$
> >
> > Ekspektasi variabel fungsi-step:
> >
> > $$E[g(T)] = \sum_k c_k \cdot P(T \in \text{interval}_k)$$
>
> **Diketahui:**
> - $T \sim \text{Exp}(\lambda = 1/3)$ (rate = $1/3$, mean = $3$ tahun)
> - Pengembalian (sebagai fraksi harga): $g(T) = 1$ jika $T<1$; $3/4$ jika $1 \leq T < 2$; $1/2$ jika $2 \leq T < 4$; $1/4$ jika $T \geq 4$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Tiap Interval**
> >
> > Gunakan $P(a \leq T < b) = e^{-a/3} - e^{-b/3}$:
> >
> > $$P(T < 1) = 1 - e^{-1/3} \approx 0{,}2835$$
> >
> > $$P(1 \leq T < 2) = e^{-1/3} - e^{-2/3} \approx 0{,}7165 - 0{,}5134 = 0{,}2031$$
> >
> > $$P(2 \leq T < 4) = e^{-2/3} - e^{-4/3} \approx 0{,}5134 - 0{,}2636 = 0{,}2498$$
> >
> > $$P(T \geq 4) = e^{-4/3} \approx 0{,}2636$$
> >
> > **Langkah 2: Hitung $E[g(T)] = c$**
> >
> > $$c = 1 \cdot P(T<1) + \frac{3}{4} \cdot P(1 \leq T < 2) + \frac{1}{2} \cdot P(2 \leq T < 4) + \frac{1}{4} \cdot P(T \geq 4)$$
> >
> > $$c = 1(0{,}2835) + 0{,}75(0{,}2031) + 0{,}5(0{,}2498) + 0{,}25(0{,}2636)$$
> >
> > $$c = 0{,}2835 + 0{,}1523 + 0{,}1249 + 0{,}0659 = 0{,}6266$$
> >
> > Karena $0{,}6 \leq 0{,}6266 < 0{,}8$, jawaban adalah **(d)**.
> >
> > **Hasil Akhir:** **(d)**. $c \approx 0{,}627$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\lambda = 3$ (mean) sebagai rate — yang benar adalah $\lambda = 1/\text{mean} = 1/3$.
> > > - Salah menghitung $P(T \geq 4) = 1 - e^{-4/3}$ (ini adalah CDF, bukan survival).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "garansi penuh selamanya" → padahal ada garansi minimal $1/4$ untuk semua kasus.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut distribusi Eksponensial dengan **rata-rata** $\mu$ → rate $\lambda = 1/\mu$, bukan $\lambda = \mu$.
>
---

## **No. 7**

Sebuah kotak berisikan 6 bola identik dimana 4 bola berwarna putih dan 2 bola berwarna biru. Sebuah bola diambil secara acak dari kotak tersebut dan digantikan dengan bola berwarna putih. Prosedur ini dilakukan berulang kali.

Tentukanlah probabilitas bahwa setelah $n$ kali melakukan prosedur tersebut, terdapat tepat satu bola berwarna biru yang tersisa di dalam kotak.

a. $\left(\dfrac{5}{6}\right)^n + \left(\dfrac{2}{3}\right)^n$  
b. $\left(\dfrac{5}{6}\right)^n - \left(\dfrac{2}{3}\right)^n$  
c. $2\left[\left(\dfrac{5}{6}\right)^n + \left(\dfrac{2}{3}\right)^n\right]$  
d. $2\left[\left(\dfrac{5}{6}\right)^n - \left(\dfrac{2}{3}\right)^n\right]$  
e. $2\left(\dfrac{5}{12}\right)^n$

> [!summary]+ **Jawaban No. 7**
>
> **(d). $2\!\left[\!\left(\dfrac{5}{6}\right)^n - \left(\dfrac{2}{3}\right)^n\right]$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3–1.4 |
>
> > [!info]+ **Rumus**
> >
> > Rekurensi linier orde-1 (persamaan beda):
> >
> > $$a_n = r \cdot a_{n-1} + f(n)$$
> >
> > Solusinya: $a_n = a_n^{(\text{hom})} + a_n^{(\text{part})}$, di mana bagian homogen adalah $C \cdot r^n$.
>
> **Diketahui:**
> - Kotak: 6 bola (4 putih, 2 biru) awal
> - Setiap langkah: ambil 1 bola acak, ganti dengan putih
> - Definisi state: jumlah bola biru (state 0, 1, atau 2); state 0 adalah absorbing
> - Target: $p_1(n) = P(\text{tepat 1 biru setelah } n \text{ langkah})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Probabilitas Transisi**
> >
> > **State 2** (2 biru): $P(\text{ambil biru}) = 2/6 = 1/3$ → pindah ke state 1; $P(\text{ambil putih}) = 4/6 = 2/3$ → tetap di state 2.
> >
> > **State 1** (1 biru): $P(\text{ambil biru}) = 1/6$ → pindah ke state 0; $P(\text{ambil putih}) = 5/6$ → tetap di state 1.
> >
> > **Langkah 2: Tulis Rekurensi**
> >
> > Mulai dari state 2 (kondisi awal):
> >
> > $$p_2(n) = \left(\frac{2}{3}\right)^n \quad \text{(state 2 setelah } n \text{ langkah)}$$
> >
> > $$p_1(n) = \frac{5}{6}\,p_1(n-1) + \frac{1}{3}\,p_2(n-1) = \frac{5}{6}\,p_1(n-1) + \frac{1}{3}\left(\frac{2}{3}\right)^{n-1}$$
> >
> > dengan kondisi awal $p_1(0) = 0$.
> >
> > **Langkah 3: Selesaikan Rekurensi**
> >
> > Bagian homogen: $C \cdot \left(\dfrac{5}{6}\right)^n$.
> >
> > Coba solusi partikular $p_1^{(p)}(n) = K \cdot \left(\dfrac{2}{3}\right)^n$:
> >
> > $$K\left(\frac{2}{3}\right)^n = \frac{5}{6} K\left(\frac{2}{3}\right)^{n-1} + \frac{1}{3}\left(\frac{2}{3}\right)^{n-1}$$
> >
> > Bagi dengan $\left(\dfrac{2}{3}\right)^{n-1}$:
> >
> > $$K \cdot \frac{2}{3} = \frac{5}{6}K + \frac{1}{3} \implies K\!\left(\frac{2}{3} - \frac{5}{6}\right) = \frac{1}{3} \implies K\!\left(-\frac{1}{6}\right) = \frac{1}{3} \implies K = -2$$
> >
> > Solusi umum: $p_1(n) = C\left(\dfrac{5}{6}\right)^n - 2\left(\dfrac{2}{3}\right)^n$.
> >
> > **Langkah 4: Terapkan Kondisi Awal**
> >
> > $p_1(0) = 0$: $C \cdot 1 - 2 \cdot 1 = 0 \implies C = 2$.
> >
> > $$\boxed{p_1(n) = 2\left(\frac{5}{6}\right)^n - 2\left(\frac{2}{3}\right)^n = 2\left[\left(\frac{5}{6}\right)^n - \left(\frac{2}{3}\right)^n\right]}$$
> >
> > **Hasil Akhir:** **(d)**. $2\!\left[\left(\dfrac{5}{6}\right)^n - \left(\dfrac{2}{3}\right)^n\right]$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $p_2(n) = (2/3)^n$ berasal dari probabilitas independen — padahal ini adalah solusi rekurensi $p_2(n) = (2/3) \cdot p_2(n-1)$.
> > > - Salah mengidentifikasi konstanta $K$ pada solusi partikular.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung probabilitas "minimal 1 biru" alih-alih "tepat 1 biru".
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan proses berulang dengan state diskrit → modelkan sebagai rantai Markov dengan rekurensi.
> > > - Selalu periksa kondisi awal: di sini $p_1(0) = 0$ karena awal ada 2 biru, bukan 1.
>
---

## **No. 8**

Andi, Budi, dan Chandra adalah pelari marathon yang masing-masing memiliki waktu lari yang berdistribusi normal, sebagai berikut:

- Andi: Rata-rata sebesar $2{,}4$ dan variansi sebesar $0{,}09$.
- Budi: Rata-rata sebesar $2{,}5$ dan variansi sebesar $0{,}04$.
- Chandra: Rata-rata sebesar $2{,}7$ dan variansi sebesar $0{,}16$.

Asumsikan waktu lari mereka saling bebas, tentukanlah probabilitas bahwa pada lomba marathon berikutnya waktu lari Budi kurang dari rata-rata waktu lari Andi dan Chandra.

a. Kurang dari $0{,}5$  
b. Sekurang-kurangnya $0{,}5$ tapi kurang dari $0{,}6$  
c. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}7$  
d. Sekurang-kurangnya $0{,}7$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 8**
>
> **(b). $P \approx 0{,}562$ (sekurang-kurangnya $0{,}5$ tapi kurang dari $0{,}6$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]], [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.2; Miller Bab 7.4 |
>
> > [!info]+ **Rumus**
> >
> > Jika $X_1, \ldots, X_n$ independen dan normal, maka kombinasi linearnya juga normal:
> >
> > $$W = \sum_i a_i X_i \sim N\!\left(\sum_i a_i \mu_i,\ \sum_i a_i^2 \sigma_i^2\right)$$
>
> **Diketahui:**
> - $A \sim N(2{,}4;\; 0{,}09)$, $B \sim N(2{,}5;\; 0{,}04)$, $C \sim N(2{,}7;\; 0{,}16)$, saling independen
> - Target: $P\!\left(B < \dfrac{A+C}{2}\right)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun sebagai Satu Variabel Normal**
> >
> > Definisikan $W = B - \dfrac{A+C}{2} = B - \dfrac{1}{2}A - \dfrac{1}{2}C$.
> >
> > Cari $P(W < 0)$.
> >
> > **Langkah 2: Hitung Mean $W$**
> >
> > $$E[W] = 2{,}5 - \frac{1}{2}(2{,}4) - \frac{1}{2}(2{,}7) = 2{,}5 - 1{,}2 - 1{,}35 = -0{,}05$$
> >
> > Alternatif: tulis $W = 2B - A - C$ (kalikan 2), lalu cari $P(2B - A - C < 0)$.
> >
> > Gunakan $W = 2B - A - C$:
> >
> > $$E[W] = 2(2{,}5) - 2{,}4 - 2{,}7 = 5{,}0 - 5{,}1 = -0{,}1$$
> >
> > $$\text{Var}(W) = 4(0{,}04) + 0{,}09 + 0{,}16 = 0{,}16 + 0{,}25 = 0{,}41$$
> >
> > $$\sigma_W = \sqrt{0{,}41} \approx 0{,}6403$$
> >
> > **Langkah 3: Standarisasi dan Cari Probabilitas**
> >
> > $$P(W < 0) = P\!\left(Z < \frac{0 - (-0{,}1)}{0{,}6403}\right) = P(Z < 0{,}1562) \approx \Phi(0{,}156) \approx 0{,}562$$
> >
> > Karena $0{,}5 \leq 0{,}562 < 0{,}6$, jawaban adalah **(b)**.
> >
> > **Hasil Akhir:** **(b)**. $P \approx 0{,}562$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah dalam variansi kombinasi linear: $\text{Var}(aX + bY) = a^2 \text{Var}(X) + b^2 \text{Var}(Y)$ (bukan $a \cdot \text{Var}(X) + b \cdot \text{Var}(Y)$).
> > > - Lupa bahwa "rata-rata waktu Andi dan Chandra" = $(A+C)/2$, bukan $2{,}55$ (nilai rata-rata deterministik).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "rata-rata waktu Andi dan Chandra" adalah nilai konstanta $(2{,}4+2{,}7)/2 = 2{,}55$ — padahal $A$ dan $C$ adalah variabel acak.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut variabel normal yang saling bebas dan menanyakan probabilitas perbandingan → bentuk selisih linear, yang juga berdistribusi normal.
>
---

## **No. 9**

Misalkan $X$ dan $Y$ merupakan variabel acak kontinu dengan fungsi densitas yang sama dan saling bebas:

$$f(t) = \begin{cases} 1, & \text{untuk } 0 < t < 1 \\ 0, & \text{lainnya} \end{cases}$$

Tentukanlah nilai dari $P\left[X + Y^2 > 1\right]$.

a. $0$  
b. $\dfrac{1}{12}$  
c. $\dfrac{1}{6}$  
d. $\dfrac{1}{4}$  
e. $\dfrac{1}{3}$

> [!summary]+ **Jawaban No. 9**
>
> **(e). $\dfrac{1}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X, Y$ independen dengan $f_X$ dan $f_Y$:
> >
> > $$f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y)$$
> >
> > $$P((X,Y) \in R) = \iint_R f_{X,Y}(x,y)\, dx\, dy$$
>
> **Diketahui:**
> - $X, Y \sim U(0,1)$ independen → $f_{X,Y}(x,y) = 1$ untuk $(x,y) \in (0,1)^2$
> - Target: $P(X + Y^2 > 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Region Integrasi**
> >
> > Region: $\{(x,y) : 0<x<1,\; 0<y<1,\; x + y^2 > 1\}$, ekuivalen dengan $x > 1 - y^2$.
> >
> > **Langkah 2: Susun Integral**
> >
> > Integrasikan atas $y \in (0,1)$, lalu untuk setiap $y$, $x$ berjalan dari $1-y^2$ sampai $1$:
> >
> > $$P(X + Y^2 > 1) = \int_0^1 \int_{1-y^2}^1 1\, dx\, dy = \int_0^1 \left[1 - (1-y^2)\right] dy$$
> >
> > $$= \int_0^1 y^2\, dy = \left[\frac{y^3}{3}\right]_0^1 = \frac{1}{3}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{1}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegrasikan dalam urutan salah: jika integrasi dimulai dari $x$, batas bawah $y$ bergantung pada $x$ secara nonlinier ($y > \sqrt{1-x}$), menjadi lebih rumit.
> > > - Salah menentukan batas: $x$ dimulai dari $1-y^2$, bukan dari $0$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira PDF bersama adalah $f(x,y) = f(x)+f(y)$ — yang benar untuk independen adalah perkalian: $f(x,y) = f(x) \cdot f(y) = 1$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika batas integral mengandung fungsi nonlinier (seperti $y^2$) → pilih urutan integrasi yang batasnya lebih sederhana (linear).
>
---

## **No. 10**

Di awal tahun, Andi diberikan proposal investasi. Pembayaran Andi dari investasi terkait dengan nilai penutupan indeks saham pada hari terakhir tahun ini. Jika nilai penutupan indeks pada hari terakhir tahun ini adalah $X$, pembayaran Andi adalah $Y = \min\{\max\{X, 20\}, 50\}$. Pada awal tahun, ketika Andi mempertimbangkan proposal ini, Andi memodelkan $X$ dengan distribusi seragam pada interval $(0, 100)$.

Berdasarkan model Andi tersebut, tentukan hasil pembayaran yang diharapkan Andi.

a. Kurang dari $30$  
b. Sekurang-kurangnya $30$ tapi kurang dari $32$  
c. Sekurang-kurangnya $32$ tapi kurang dari $34$  
d. Sekurang-kurangnya $34$ tapi kurang dari $36$  
e. Sekurang-kurangnya $36$

> [!summary]+ **Jawaban No. 10**
>
> **(e). $E[Y] = 39{,}5$ (sekurang-kurangnya $36$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U(a,b)$: $f_X(x) = \dfrac{1}{b-a}$ untuk $a < x < b$.
> >
> > Fungsi $\min\{\max\{x, c_1\}, c_2\}$ disebut **floor-ceiling clamp**:
> >
> > $$Y = \begin{cases} c_1, & X < c_1 \\ X, & c_1 \leq X \leq c_2 \\ c_2, & X > c_2 \end{cases}$$
>
> **Diketahui:**
> - $X \sim U(0, 100)$ → $f_X(x) = 1/100$ untuk $0 < x < 100$
> - $Y = \min\{\max\{X, 20\}, 50\}$: jika $X<20$ maka $Y=20$; jika $20 \leq X \leq 50$ maka $Y=X$; jika $X>50$ maka $Y=50$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pisahkan Wilayah Integrasi**
> >
> > $$E[Y] = \frac{1}{100}\left[\int_0^{20} 20\, dx + \int_{20}^{50} x\, dx + \int_{50}^{100} 50\, dx\right]$$
> >
> > **Langkah 2: Hitung Tiap Bagian**
> >
> > $$\int_0^{20} 20\, dx = 20 \times 20 = 400$$
> >
> > $$\int_{20}^{50} x\, dx = \left[\frac{x^2}{2}\right]_{20}^{50} = \frac{2500 - 400}{2} = \frac{2100}{2} = 1{.}050$$
> >
> > $$\int_{50}^{100} 50\, dx = 50 \times 50 = 2{.}500$$
> >
> > **Langkah 3: Gabungkan**
> >
> > $$E[Y] = \frac{1}{100}(400 + 1{.}050 + 2{.}500) = \frac{3{.}950}{100} = 39{,}5$$
> >
> > Karena $39{,}5 \geq 36$, jawaban adalah **(e)**.
> >
> > **Hasil Akhir:** **(e)**. $E[Y] = 39{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menguraikan $Y$: $\min\{\max\{X,20\},50\}$ bukan $\max\{\min\{X,50\},20\}$ (sebenarnya keduanya ekuivalen, tapi mudah tertukar dalam logika).
> > > - Lupa bahwa batas integrasi bergantung pada nilai clamp ($20$ dan $50$), bukan $0$ dan $100$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $E[Y] = E[X] = 50$ (mean Uniform) — padahal $Y$ adalah versi tersensor dari $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika muncul $\min\{\max\{\cdot\}\}$ → langsung buat tabel tiga kasus (bawah-tengah-atas) dan integrasikan terpisah.
>
---
## **No. 11**

Diketahui $X$ memiliki distribusi bernilai bilangan bulat non-negatif diskrit dengan mean $4$ dan variansi sebesar $10$. Dua distribusi baru dibuat dari $X$:

- $Y$ memiliki fungsi probabilitas yang sama dengan $X$ untuk $Y = 2, 3, 4, \ldots$ tetapi $P[Y = 0] = 0$ dan $P[Y = 1] = P[X = 0] + P[X = 1]$.
- $Z$ memiliki fungsi probabilitas yang sama dengan $X$ untuk $Z = 3, 4, \ldots$ tetapi $P[Z = 0] = P[Z = 1] = 0$ dan $P[Z = 2] = P[X = 0] + P[X = 1] + P[X = 2]$.

Diketahui bahwa mean dari $Y$ adalah $4{,}1$ dan mean dari $Z$ adalah $4{,}3$. Tentukanlah variansi dari $Z$. (Pilihlah jawaban yang paling mendekati!)

a. $8$  
b. $8{,}2$  
c. $8{,}4$  
d. $8{,}6$  
e. $8{,}8$

> [!summary]+ **Jawaban No. 11**
>
> **(b). $\text{Var}(Z) \approx 8{,}21$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 3.2 |
>
> > [!info]+ **Rumus**
> >
> > Momen kedua: $E[X^2] = \text{Var}(X) + (E[X])^2$
> >
> > Manipulasi ekspektasi untuk distribusi modifikasi:
> >
> > $$E[Y] = \sum_{k \geq 0} k \cdot P(Y=k)$$
>
> **Diketahui:**
> - $E[X]=4$, $\text{Var}(X)=10$ → $E[X^2] = 10 + 16 = 26$
> - $E[Y] = 4{,}1$, $E[Z] = 4{,}3$
> - Modifikasi: $Y$ menggabungkan $P(X=0)+P(X=1)$ ke nilai $1$; $Z$ menggabungkan $P(X=0)+P(X=1)+P(X=2)$ ke nilai $2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $P(X=0)$ dari $E[Y]$**
> >
> > $$E[Y] = \underbrace{\sum_{k=2}^{\infty} k \cdot P(X=k)}_{\text{sama dengan } X} + 1 \cdot [P(X=0)+P(X=1)]$$
> >
> > Suku pertama $= E[X] - 0 \cdot P(X=0) - 1 \cdot P(X=1) = 4 - P(X=1)$.
> >
> > $$E[Y] = 4 - P(X=1) + P(X=0) + P(X=1) = 4 + P(X=0) = 4{,}1$$
> >
> > $$\implies P(X=0) = 0{,}1$$
> >
> > **Langkah 2: Cari $P(X=1)$ dari $E[Z]$**
> >
> > $$E[Z] = \sum_{k=3}^{\infty} k \cdot P(X=k) + 2[P(X=0)+P(X=1)+P(X=2)]$$
> >
> > $= E[X] - 0\cdot P(X=0) - 1\cdot P(X=1) - 2\cdot P(X=2) + 2P(X=0) + 2P(X=1) + 2P(X=2)$
> >
> > $= 4 + 2P(X=0) + P(X=1) = 4 + 2(0{,}1) + P(X=1) = 4{,}3$
> >
> > $$\implies P(X=1) = 0{,}1$$
> >
> > **Langkah 3: Hitung $E[Z^2]$**
> >
> > $$E[Z^2] = \sum_{k=3}^{\infty} k^2 P(X=k) + 4[P(X=0)+P(X=1)+P(X=2)]$$
> >
> > $= E[X^2] - 0^2 P(X=0) - 1^2 P(X=1) - 2^2 P(X=2) + 4[P(X=0)+P(X=1)+P(X=2)]$
> >
> > $= 26 - P(X=1) - 4P(X=2) + 4P(X=0) + 4P(X=1) + 4P(X=2)$
> >
> > $= 26 + 3P(X=1) + 4P(X=0) = 26 + 3(0{,}1) + 4(0{,}1) = 26 + 0{,}7 = 26{,}7$
> >
> > **Langkah 4: Hitung $\text{Var}(Z)$**
> >
> > $$\text{Var}(Z) = E[Z^2] - (E[Z])^2 = 26{,}7 - (4{,}3)^2 = 26{,}7 - 18{,}49 = 8{,}21$$
> >
> > **Hasil Akhir:** **(b)**. $\text{Var}(Z) \approx 8{,}21$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah memanipulasi $E[Z^2]$: suku $k^2 P(X=k)$ untuk $k=0,1,2$ digantikan dengan $4 \cdot [P(X=0)+P(X=1)+P(X=2)]$, bukan nilai aslinya.
> > > - Mengira $P(X=2)$ diperlukan secara eksplisit — ternyata $P(X=2)$ saling menghapus dalam ekspresi $E[Z^2]$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $E[Y]$ langsung sama dengan $E[X]+$ sesuatu tanpa derivasi formal — perlu diturunkan dengan definisi.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan distribusi yang "dimodifikasi" (probability mass dipindahkan) → tulis ulang ekspektasi dari definisi dan manfaatkan $E[X]$ asli.
>
---

## **No. 12**

Diketahui $X$ berdistribusi normal dengan mean sebesar $1$ dan variansi sebesar $4$.

Tentukanlah nilai dari $P[X^2 - 4X \leq 0]$.

a. Kurang dari $0{,}15$  
b. Sekurang-kurangnya $0{,}15$ tapi kurang dari $0{,}35$  
c. Sekurang-kurangnya $0{,}35$ tapi kurang dari $0{,}55$  
d. Sekurang-kurangnya $0{,}55$ tapi kurang dari $0{,}75$  
e. Sekurang-kurangnya $0{,}75$

> [!summary]+ **Jawaban No. 12**
>
> **(d). $P \approx 0{,}6247$ (sekurang-kurangnya $0{,}55$ tapi kurang dari $0{,}75$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 7.1 |
>
> > [!info]+ **Rumus**
> >
> > Standarisasi distribusi Normal $X \sim N(\mu, \sigma^2)$:
> >
> > $$P(a \leq X \leq b) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$$
> >
> > di mana $\Phi$ adalah CDF distribusi Normal standar $N(0,1)$.
>
> **Diketahui:**
> - $X \sim N(\mu=1, \sigma^2=4)$ → $\sigma = 2$
> - Target: $P(X^2 - 4X \leq 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan Pertidaksamaan**
> >
> > $$X^2 - 4X \leq 0 \implies X(X-4) \leq 0$$
> >
> > Produk $X(X-4) \leq 0$ terpenuhi ketika $X$ berada di antara kedua akar:
> >
> > $$0 \leq X \leq 4$$
> >
> > **Langkah 2: Hitung Probabilitas**
> >
> > $$P(0 \leq X \leq 4) = \Phi\!\left(\frac{4-1}{2}\right) - \Phi\!\left(\frac{0-1}{2}\right) = \Phi(1{,}5) - \Phi(-0{,}5)$$
> >
> > $$= \Phi(1{,}5) - [1 - \Phi(0{,}5)] = 0{,}9332 - (1 - 0{,}6915) = 0{,}9332 - 0{,}3085 = 0{,}6247$$
> >
> > Karena $0{,}55 \leq 0{,}6247 < 0{,}75$, jawaban adalah **(d)**.
> >
> > **Hasil Akhir:** **(d)**. $P \approx 0{,}6247$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menguraikan $X^2 - 4X \leq 0$: ada yang mengira jawabannya $X \leq 0$ atau $X \leq 4$ saja (satu sisi), padahal harus dua sisi karena produk dua faktor.
> > > - Salah menstandarisasi: $z = (x - \mu)/\sigma = (x-1)/2$, bukan $(x-1)/4$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Lupa bahwa variansi $= 4$ berarti $\sigma = 2$, bukan $\sigma = 4$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika muncul $P[f(X) \leq 0]$ dengan $f$ polinomial → faktorkan $f(X)$ terlebih dahulu, tentukan interval tempat $f(X) \leq 0$.
>
---

## **No. 13**

Misalkan $X$ berdistribusi seragam pada interval $[0, 1]$ dan distribusi bersyarat dari $Y$ dengan diketahui $X = x$ merupakan distribusi seragam pada interval $[x, 2]$.

Tentukan nilai dari $E[Y]$.

a. $\dfrac{3}{4}$  
b. $1$  
c. $\dfrac{5}{4}$  
d. $\dfrac{3}{2}$  
e. $\dfrac{7}{4}$

> [!summary]+ **Jawaban No. 13**
>
> **(c). $E[Y] = \dfrac{5}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.8 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Ekspektasi Total (Law of Total Expectation):**
> >
> > $$E[Y] = E[E[Y \mid X]]$$
> >
> > Jika $Y \mid X=x \sim U(x, 2)$, maka:
> >
> > $$E[Y \mid X=x] = \frac{x + 2}{2}$$
>
> **Diketahui:**
> - $X \sim U(0, 1)$
> - $Y \mid X=x \sim U(x, 2)$ untuk $0 \leq x \leq 1$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y \mid X=x]$**
> >
> > Karena $Y \mid X=x \sim U(x,2)$:
> >
> > $$E[Y \mid X=x] = \frac{x + 2}{2}$$
> >
> > **Langkah 2: Terapkan Hukum Ekspektasi Total**
> >
> > $$E[Y] = E\!\left[\frac{X+2}{2}\right] = \frac{E[X] + 2}{2}$$
> >
> > **Langkah 3: Gunakan $E[X]$ untuk $X \sim U(0,1)$**
> >
> > $$E[X] = \frac{0+1}{2} = \frac{1}{2}$$
> >
> > $$E[Y] = \frac{1/2 + 2}{2} = \frac{5/2}{2} = \frac{5}{4}$$
> >
> > **Verifikasi dengan integral langsung:**
> >
> > $$E[Y] = \int_0^1 \frac{x+2}{2} \cdot 1\, dx = \frac{1}{2}\left[\frac{x^2}{2} + 2x\right]_0^1 = \frac{1}{2}\left(\frac{1}{2}+2\right) = \frac{5}{4}$$
> >
> > **Hasil Akhir:** **(c)**. $E[Y] = \dfrac{5}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[Y] = (0+2)/2 = 1$ karena menggunakan batas bawah 0 (batas $X$) bukan $x$ (nilai kondisional aktual).
> > > - Salah menerapkan law of total expectation: $E[Y] \neq E[Y|X=0{,}5]$ (tidak boleh substitusi nilai tengah $X$ saja).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira interval kondisional tetap $[0,2]$, padahal batas bawahnya adalah $x$ (bergantung pada nilai $X$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi bersyarat $Y|X=x$ tergantung pada $x$ → gunakan $E[Y]=E[E[Y|X]]$, jangan substitusi nilai $x$ yang tetap.
>
---

## **No. 14**

Sebuah studi tentang hubungan antara tekanan darah dan kadar kolesterol menunjukkan hasil sebagai berikut:

- Dari mereka yang memiliki tekanan darah tinggi, $50\%$ memiliki kadar kolesterol tinggi.
- Dari mereka yang memiliki kadar kolesterol tinggi, $60\%$ memiliki tekanan darah tinggi.

Dari mereka yang memiliki setidaknya satu dari kondisi tekanan darah tinggi atau kadar kolesterol tinggi, tentukanlah probabilitas mereka memiliki kedua kondisi tersebut.

a. $\dfrac{1}{3}$  
b. $\dfrac{4}{9}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{4}{8}$  
e. $\dfrac{7}{9}$

> [!summary]+ **Jawaban No. 14**
>
> **(c). $\dfrac{3}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2.7 |
>
> > [!info]+ **Rumus**
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} \implies P(A \cap B) = P(A \mid B) \cdot P(B)$$
> >
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
>
> **Diketahui:**
> - $P(C \mid H) = 0{,}5$ → $P(H \cap C) = 0{,}5 \cdot P(H)$
> - $P(H \mid C) = 0{,}6$ → $P(H \cap C) = 0{,}6 \cdot P(C)$
> - Target: $P(H \cap C \mid H \cup C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari Rasio $P(H)/P(C)$**
> >
> > Dari dua persamaan:
> >
> > $$0{,}5 \cdot P(H) = P(H \cap C) = 0{,}6 \cdot P(C) \implies \frac{P(H)}{P(C)} = \frac{0{,}6}{0{,}5} = \frac{6}{5}$$
> >
> > **Langkah 2: Parameterisasi**
> >
> > Misalkan $P(H) = 6k$, $P(C) = 5k$, maka $P(H \cap C) = 3k$.
> >
> > **Langkah 3: Hitung $P(H \cup C)$**
> >
> > $$P(H \cup C) = 6k + 5k - 3k = 8k$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat yang Diminta**
> >
> > $$P(H \cap C \mid H \cup C) = \frac{P(H \cap C)}{P(H \cup C)} = \frac{3k}{8k} = \frac{3}{8}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{3}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan nilai probabilitas absolut (misalnya $P(H)=0{,}5$ atau $P(C)=0{,}6$) — pernyataan soal memberikan **probabilitas bersyarat**, bukan absolut.
> > > - Langsung menghitung $P(H \cap C) = 0{,}5 \times 0{,}6 = 0{,}3$ — ini hanya valid jika $H$ dan $C$ independen.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "dari mereka yang memiliki tekanan darah tinggi, $50\%$ dst." adalah $P(H) = 0{,}5$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika hanya rasio yang dapat ditentukan (bukan nilai absolut) → gunakan parametrisasi dengan satu variabel bebas ($k$), lalu rasio saling menghapus.
>
---

## **No. 15**

Sebuah koin memiliki kemungkinan dua kali lipat untuk memunculkan angka dibandingkan gambar. Jika koin dilempar secara terpisah, tentukanlah probabilitas munculnya gambar ketiga kalinya pada lemparan kelima.

a. $\dfrac{8}{81}$  
b. $\dfrac{40}{243}$  
c. $\dfrac{16}{81}$  
d. $\dfrac{80}{243}$  
e. $\dfrac{3}{5}$

> [!summary]+ **Jawaban No. 15**
>
> **(a). $\dfrac{8}{81}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.4 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial Negatif** — probabilitas sukses ke-$r$ pada percobaan ke-$n$:
> >
> > $$P(X = n) = \binom{n-1}{r-1} p^r (1-p)^{n-r}$$
> >
> > di mana $p$ = probabilitas sukses, $r$ = jumlah sukses yang ditarget.
>
> **Diketahui:**
> - "Angka dua kali lebih mungkin dari gambar" → $P(\text{angka}) = 2/3$, $P(\text{gambar}) = 1/3$
> - "Sukses" = muncul gambar, $p = 1/3$
> - Target: gambar ke-3 muncul tepat pada lemparan ke-5
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Parameter**
> >
> > Gambar ke-3 pada lemparan ke-5 berarti: pada 4 lemparan pertama terdapat tepat 2 gambar, dan lemparan ke-5 adalah gambar.
> >
> > **Langkah 2: Terapkan Rumus Binomial Negatif**
> >
> > $$P = \binom{4}{2} \left(\frac{1}{3}\right)^3 \left(\frac{2}{3}\right)^2$$
> >
> > $$= 6 \times \frac{1}{27} \times \frac{4}{9} = \frac{24}{243} = \frac{8}{81}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{8}{81}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{5}{3}$ alih-alih $\binom{4}{2}$ — lemparan terakhir (ke-5) sudah **pasti** gambar, jadi hanya 4 lemparan pertama yang dipilih.
> > > - Salah menentukan $p$: soal menyebut "angka dua kali lipat gambar" → $P(\text{gambar}) = 1/3$, bukan $2/3$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "gambar ketiga kalinya pada lemparan kelima" berarti "di antara 5 lemparan, tepat 3 gambar" (distribusi Binomial) — padahal lemparan ke-5 **harus** gambar.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "sukses ke-$r$ pada percobaan ke-$n$" → distribusi Binomial Negatif, bukan Binomial biasa.
>
---

## **No. 16**

Diketahui bahwa:

- $X_1$ berdistribusi binomial dengan mean sebesar $2$ dan variansi sebesar $1$.
- $X_2$ berdistribusi Poisson dengan variansi sebesar $2$.
- $X_1$ dan $X_2$ saling independen.
- $Y = X_1 + X_2$.

Tentukan nilai dari $P(Y < 3)$.

a. $\dfrac{11}{16}e^{-2}$  
b. $\dfrac{15}{16}e^{-2}$  
c. $\dfrac{19}{16}e^{-2}$  
d. $\dfrac{23}{16}e^{-2}$  
e. $\dfrac{27}{16}e^{-2}$

> [!summary]+ **Jawaban No. 16**
>
> **(d). $\dfrac{23}{16}e^{-2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1–3.2; Miller Bab 5.2–5.3 |
>
> > [!info]+ **Rumus**
> >
> > $X_1 \sim B(n, p)$: $E[X_1]=np$, $\text{Var}(X_1)=np(1-p)$.
> >
> > $X_2 \sim \text{Poisson}(\lambda)$: $E[X_2] = \text{Var}(X_2) = \lambda$.
> >
> > PMF Binomial: $P(X_1=k) = \binom{n}{k}p^k(1-p)^{n-k}$.
> >
> > PMF Poisson: $P(X_2=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$.
>
> **Diketahui:**
> - $E[X_1]=2$, $\text{Var}(X_1)=1$ → $np=2$, $np(1-p)=1$ → $1-p=1/2$, $p=1/2$, $n=4$; jadi $X_1 \sim B(4, 1/2)$
> - $\text{Var}(X_2)=2$ → $\lambda=2$; jadi $X_2 \sim \text{Poisson}(2)$
> - Target: $P(Y < 3) = P(Y=0) + P(Y=1) + P(Y=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PMF yang Diperlukan**
> >
> > Karena $X_1$ dan $X_2$ independen: $P(Y=k) = \sum_{j=0}^{k} P(X_1=j) \cdot P(X_2=k-j)$.
> >
> > PMF $X_1 \sim B(4,1/2)$: $P(X_1=k) = \binom{4}{k}/16$.
> >
> > | $k$ | $P(X_1=k)$ |
> > |-----|------------|
> > | $0$ | $1/16$ |
> > | $1$ | $4/16$ |
> > | $2$ | $6/16$ |
> >
> > PMF $X_2 \sim \text{Poisson}(2)$: $P(X_2=k) = e^{-2} \cdot 2^k/k!$.
> >
> > | $k$ | $P(X_2=k)$ |
> > |-----|------------|
> > | $0$ | $e^{-2}$ |
> > | $1$ | $2e^{-2}$ |
> > | $2$ | $2e^{-2}$ |
> >
> > **Langkah 2: Hitung $P(Y=0)$**
> >
> > $$P(Y=0) = P(X_1=0) \cdot P(X_2=0) = \frac{1}{16} \cdot e^{-2} = \frac{1}{16}e^{-2}$$
> >
> > **Langkah 3: Hitung $P(Y=1)$**
> >
> > $$P(Y=1) = P(X_1=0) \cdot P(X_2=1) + P(X_1=1) \cdot P(X_2=0)$$
> >
> > $$= \frac{1}{16} \cdot 2e^{-2} + \frac{4}{16} \cdot e^{-2} = \frac{2+4}{16}e^{-2} = \frac{6}{16}e^{-2}$$
> >
> > **Langkah 4: Hitung $P(Y=2)$**
> >
> > $$P(Y=2) = P(X_1=0)P(X_2=2) + P(X_1=1)P(X_2=1) + P(X_1=2)P(X_2=0)$$
> >
> > $$= \frac{1}{16}(2e^{-2}) + \frac{4}{16}(2e^{-2}) + \frac{6}{16}(e^{-2}) = \frac{2+8+6}{16}e^{-2} = \frac{16}{16}e^{-2} = e^{-2}$$
> >
> > **Langkah 5: Jumlahkan**
> >
> > $$P(Y<3) = \frac{1}{16}e^{-2} + \frac{6}{16}e^{-2} + \frac{16}{16}e^{-2} = \frac{23}{16}e^{-2}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{23}{16}e^{-2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan parameter $B(n,p)$: dari $np=2$ dan $np(1-p)=1$, ada yang langsung menggunakan $n=2$ atau $p=1$ tanpa menyelesaikan sistem.
> > > - Salah menghitung konvolusi: terlewat satu pasangan $(j, k-j)$ dalam penjumlahan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $Y = X_1 + X_2 \sim \text{Poisson}$ — ini hanya valid jika kedua komponen Poisson; $X_1$ adalah Binomial.
> >
> > > [!CAUTION] Red Flags
> > > - $Y < 3$ berarti $Y \in \{0, 1, 2\}$ — jangan lewatkan $Y=0$ dalam penjumlahan.
> > > - Selalu buat tabel PMF untuk nilai yang diperlukan sebelum menghitung konvolusi.
>
---
## **No. 17**

Diketahui fungsi densitas dari variabel acak $X$ sebagai berikut:

$$f(x) = \frac{\alpha\theta^{\alpha}}{x^{\alpha+1}} \quad \text{untuk } x > \theta, \text{ dimana } \alpha > 0 \text{ dan } \theta > 0$$

Diketahui juga bahwa mean dari $X$ adalah $\dfrac{\alpha\theta}{\alpha-1}$ jika $\alpha > 1$. Seseorang menganalisa data kerugian yang diasumsikan mengikuti distribusi $X$, tetapi nilai $\alpha$ dan $\theta$ tidak diketahui, akan tetapi diketahui bahwa $\theta < 200$. Data tersebut menunjukkan bahwa rata-rata kerugian untuk semua kerugian adalah $180$, dan rata-rata kerugian untuk semua kerugian yang di atas $200$ adalah $250$.

Tentukan median distribusi tersebut.

a. Sekurang-kurangnya $180$  
b. Sekurang-kurangnya $160$ tapi kurang dari $180$  
c. Sekurang-kurangnya $140$ tapi kurang dari $160$  
d. Sekurang-kurangnya $120$ tapi kurang dari $140$  
e. Kurang dari $120$

> [!summary]+ **Jawaban No. 17**
>
> **(b). $\text{Median} \approx 165{,}4$ (sekurang-kurangnya $160$ tapi kurang dari $180$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 6.4 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi **Pareto** dengan parameter $(\alpha, \theta)$: $f(x) = \dfrac{\alpha\theta^\alpha}{x^{\alpha+1}}$, $x > \theta$.
> >
> > CDF: $F(x) = 1 - \left(\dfrac{\theta}{x}\right)^\alpha$.
> >
> > Ekspektasi bersyarat: $E[X \mid X > d] = \dfrac{\alpha \cdot d}{\alpha - 1}$ untuk $d \geq \theta$.
> >
> > Median: $F(m) = 0{,}5$ → $m = \theta \cdot 2^{1/\alpha}$.
>
> **Diketahui:**
> - $E[X] = \dfrac{\alpha\theta}{\alpha-1} = 180$
> - $E[X \mid X > 200] = 250$ dan $d = 200 \geq \theta$
> - $\theta < 200$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan $E[X \mid X > 200]$ untuk Cari $\alpha$**
> >
> > Untuk distribusi Pareto, sifat "excess loss" berlaku:
> >
> > $$E[X \mid X > d] = \frac{\alpha d}{\alpha - 1}$$
> >
> > $$\frac{\alpha \cdot 200}{\alpha - 1} = 250 \implies 200\alpha = 250\alpha - 250 \implies 50\alpha = 250 \implies \alpha = 5$$
> >
> > **Langkah 2: Cari $\theta$ dari Mean**
> >
> > $$\frac{5\theta}{5-1} = 180 \implies \frac{5\theta}{4} = 180 \implies \theta = 144$$
> >
> > Periksa: $\theta = 144 < 200$ ✓
> >
> > **Langkah 3: Hitung Median**
> >
> > Dari $F(m) = 0{,}5$:
> >
> > $$1 - \left(\frac{144}{m}\right)^5 = 0{,}5 \implies \left(\frac{144}{m}\right)^5 = 0{,}5 \implies m = 144 \cdot 2^{1/5}$$
> >
> > $$m = 144 \times 2^{0{,}2} = 144 \times 1{,}1487 \approx 165{,}4$$
> >
> > Karena $160 \leq 165{,}4 < 180$, jawaban adalah **(b)**.
> >
> > **Hasil Akhir:** **(b)**. Median $\approx 165{,}4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[X \mid X > 200] = E[X] + 200$ (model Eksponensial memoryless) — distribusi Pareto **tidak** memiliki sifat memoryless.
> > > - Salah menghitung median: menggunakan $F(m)=0{,}5 \implies m = \theta + $ sesuatu (khas Eksponensial).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $\theta$ bisa sembarang karena "tidak diketahui" — $\theta$ harus dicari dari sistem dua persamaan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika muncul PDF berbentuk $\theta^\alpha / x^{\alpha+1}$ → ini distribusi Pareto; kenali formula CDF dan momen bersyaratnya.
>
---

## **No. 18**

Sebuah perusahaan asuransi melakukan studi klaim. Studi ini menemukan bahwa untuk hari-hari dimana terdapat paling banyak $2$ klaim, rata-rata jumlah klaim per hari adalah $1{,}2$. Perusahaan asuransi tersebut memodelkan jumlah klaim yang tiba dalam suatu hari tertentu sebagai distribusi Poisson.

Berdasarkan model ini, tentukanlah probabilitas bahwa paling banyak $2$ klaim tiba di kantor tersebut pada suatu hari tertentu. (Pilihlah jawaban yang paling mendekati!)

a. $0{,}64$  
b. $0{,}66$  
c. $0{,}68$  
d. $0{,}70$  
e. $0{,}72$

> [!summary]+ **Jawaban No. 18**
>
> **(c). $P(N \leq 2) \approx 0{,}677 \approx 0{,}68$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > PMF Poisson: $P(N=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$.
> >
> > Ekspektasi bersyarat:
> >
> > $$E[N \mid N \leq 2] = \frac{\sum_{k=0}^{2} k \cdot P(N=k)}{P(N \leq 2)}$$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda)$ (tidak diketahui)
> - $E[N \mid N \leq 2] = 1{,}2$
> - Target: $P(N \leq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan dari Ekspektasi Bersyarat**
> >
> > $$E[N \mid N \leq 2] = \frac{0 \cdot e^{-\lambda} + 1 \cdot \lambda e^{-\lambda} + 2 \cdot \dfrac{\lambda^2}{2} e^{-\lambda}}{e^{-\lambda}(1 + \lambda + \lambda^2/2)} = 1{,}2$$
> >
> > Faktor $e^{-\lambda}$ saling menghapus:
> >
> > $$\frac{\lambda + \lambda^2}{1 + \lambda + \lambda^2/2} = 1{,}2$$
> >
> > **Langkah 2: Selesaikan untuk $\lambda$**
> >
> > $$\lambda + \lambda^2 = 1{,}2\left(1 + \lambda + \frac{\lambda^2}{2}\right) = 1{,}2 + 1{,}2\lambda + 0{,}6\lambda^2$$
> >
> > $$0{,}4\lambda^2 - 0{,}2\lambda - 1{,}2 = 0 \implies 2\lambda^2 - \lambda - 6 = 0$$
> >
> > $$\lambda = \frac{1 \pm \sqrt{1 + 48}}{4} = \frac{1 \pm 7}{4}$$
> >
> > Ambil $\lambda > 0$: $\lambda = \dfrac{1+7}{4} = 2$.
> >
> > **Langkah 3: Hitung $P(N \leq 2)$ dengan $\lambda = 2$**
> >
> > $$P(N \leq 2) = e^{-2}\left(1 + 2 + \frac{4}{2}\right) = e^{-2}(1 + 2 + 2) = 5e^{-2} \approx 5 \times 0{,}1353 = 0{,}6767$$
> >
> > Paling mendekati $0{,}68$, jawaban adalah **(c)**.
> >
> > **Hasil Akhir:** **(c)**. $P(N \leq 2) \approx 0{,}68$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\lambda = 1{,}2$ langsung (menggunakan nilai ekspektasi bersyarat sebagai parameter Poisson) — padahal $1{,}2 = E[N \mid N \leq 2] \neq \lambda$.
> > > - Salah menggunakan rumus diskriminan kuadrat; atau memilih akar negatif $\lambda = -3/2$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Rata-rata untuk hari dengan paling banyak 2 klaim" = **ekspektasi bersyarat** $E[N \mid N \leq 2]$, bukan mean marginal $E[N]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan rata-rata dalam kondisi tertentu → tulis sebagai ekspektasi bersyarat dan gunakan definisi.
>
---

## **No. 19**

Misalkan $X$ adalah hasil pelemparan dadu yang adil. Distribusi bersyarat dari $Y|X$ adalah Poisson dengan rata-rata $X$.

Tentukanlah nilai dari variansi $Y$.

a. Kurang dari $2$  
b. Sekurang-kurangnya $2$ tapi kurang dari $3$  
c. Sekurang-kurangnya $3$ tapi kurang dari $4$  
d. Sekurang-kurangnya $4$ tapi kurang dari $5$  
e. Sekurang-kurangnya $5$

> [!summary]+ **Jawaban No. 19**
>
> **(e). $\text{Var}(Y) = \dfrac{77}{12} \approx 6{,}42$ (sekurang-kurangnya $5$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]], [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[3.3 Distribusi Bersyarat]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.8 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Variansi Total (Law of Total Variance):**
> >
> > $$\text{Var}(Y) = E[\text{Var}(Y \mid X)] + \text{Var}(E[Y \mid X])$$
> >
> > Untuk $Y \mid X \sim \text{Poisson}(X)$: $E[Y|X] = X$ dan $\text{Var}(Y|X) = X$.
>
> **Diketahui:**
> - $X$ = hasil dadu adil → $X \in \{1,2,3,4,5,6\}$, setiap nilai dengan peluang $1/6$
> - $Y \mid X \sim \text{Poisson}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Komponen**
> >
> > $E[Y \mid X] = X$ dan $\text{Var}(Y \mid X) = X$ (sifat distribusi Poisson).
> >
> > **Langkah 2: Hitung $E[\text{Var}(Y \mid X)]$**
> >
> > $$E[\text{Var}(Y \mid X)] = E[X] = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = \frac{7}{2}$$
> >
> > **Langkah 3: Hitung $\text{Var}(E[Y \mid X])$**
> >
> > $$\text{Var}(E[Y \mid X]) = \text{Var}(X) = E[X^2] - (E[X])^2$$
> >
> > $$E[X^2] = \frac{1^2+2^2+3^2+4^2+5^2+6^2}{6} = \frac{91}{6}$$
> >
> > $$\text{Var}(X) = \frac{91}{6} - \left(\frac{7}{2}\right)^2 = \frac{91}{6} - \frac{49}{4} = \frac{182-147}{12} = \frac{35}{12}$$
> >
> > **Langkah 4: Gabungkan**
> >
> > $$\text{Var}(Y) = \frac{7}{2} + \frac{35}{12} = \frac{42}{12} + \frac{35}{12} = \frac{77}{12} \approx 6{,}42$$
> >
> > Karena $6{,}42 \geq 5$, jawaban adalah **(e)**.
> >
> > **Hasil Akhir:** **(e)**. $\text{Var}(Y) = \dfrac{77}{12} \approx 6{,}42$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(Y) = E[X]$ saja — ini hanya komponen pertama; bagian $\text{Var}(E[Y|X])$ seringkali terlupakan.
> > > - Salah menghitung $\text{Var}(X)$ untuk dadu: gunakan $E[X^2] - (E[X])^2 = 91/6 - 49/4 = 35/12$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "distribusi bersyarat Poisson dengan rata-rata $X$" berarti $\lambda = 3{,}5$ (nilai rata-rata dadu) yang tetap — padahal $\lambda = X$ adalah variabel acak.
> >
> > > [!CAUTION] Red Flags
> > > - Hukum variansi total memiliki **dua suku**: $E[\text{Var}(Y|X)]$ dan $\text{Var}(E[Y|X])$ — jangan lupakan salah satunya.
>
---

## **No. 20**

Diketahui $X$ dan $Y$ merupakan variabel acak dimana $X$ diskrit dan $Y$ kontinu. Fungsi densitas bersama dari $X$ dan $Y$ adalah:

$$f(x, y) = \frac{(x+1)e^{-y/2}}{12} \quad \text{untuk } x = 0, 1, 2 \text{ dan } 0 < y < \infty$$

Tentukan probabilitas bahwa $X + Y < 2$.

a. $\dfrac{1}{6}\left(3 - 2e^{-\frac{1}{2}} - e^{-1}\right)$  
b. $\dfrac{1}{6}\left(3 - e^{-\frac{1}{2}} - e^{-1}\right)$  
c. $\dfrac{1}{3}\left(3 - 2e^{-\frac{1}{2}} - e^{-1}\right)$  
d. $\dfrac{1}{3}\left(3 - e^{-\frac{1}{2}} - e^{-1}\right)$  
e. $\dfrac{1}{2}\left(3 - 2e^{-\frac{1}{2}} - e^{-1}\right)$

> [!summary]+ **Jawaban No. 20**
>
> **(a). $\dfrac{1}{6}\!\left(3 - 2e^{-1/2} - e^{-1}\right)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk distribusi campuran (mixed): $P(X+Y<2) = \sum_{x} \int_{0}^{2-x} f(x,y)\, dy$ (dengan batasan $x$ sedemikian sehingga $2-x > 0$, yaitu $x < 2$).
> >
> > Integral dasar: $\displaystyle\int_0^u e^{-y/2} dy = -2e^{-y/2}\Big|_0^u = 2(1-e^{-u/2})$.
>
> **Diketahui:**
> - $f(x,y) = \dfrac{(x+1)e^{-y/2}}{12}$ untuk $x \in \{0,1,2\}$, $y > 0$
> - Target: $P(X + Y < 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Kasus**
> >
> > Kondisi $X + Y < 2$ dengan $y > 0$ mengharuskan $y < 2 - x$, sehingga $2 - x > 0$, yaitu $x < 2$.
> >
> > - $x = 0$: $y$ dari $0$ sampai $2$
> > - $x = 1$: $y$ dari $0$ sampai $1$
> > - $x = 2$: $2-x = 0$, tidak ada $y > 0$ yang memenuhi → kontribusi $= 0$
> >
> > **Langkah 2: Hitung Kontribusi $x=0$**
> >
> > $$\int_0^2 \frac{(0+1)e^{-y/2}}{12}\, dy = \frac{1}{12} \cdot 2(1-e^{-1}) = \frac{1-e^{-1}}{6}$$
> >
> > **Langkah 3: Hitung Kontribusi $x=1$**
> >
> > $$\int_0^1 \frac{(1+1)e^{-y/2}}{12}\, dy = \frac{2}{12} \cdot 2(1-e^{-1/2}) = \frac{1-e^{-1/2}}{3}$$
> >
> > **Langkah 4: Gabungkan**
> >
> > $$P(X+Y<2) = \frac{1-e^{-1}}{6} + \frac{1-e^{-1/2}}{3} = \frac{1-e^{-1}}{6} + \frac{2(1-e^{-1/2})}{6}$$
> >
> > $$= \frac{1 - e^{-1} + 2 - 2e^{-1/2}}{6} = \frac{3 - 2e^{-1/2} - e^{-1}}{6}$$
> >
> > $$= \frac{1}{6}\left(3 - 2e^{-1/2} - e^{-1}\right)$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{6}\!\left(3 - 2e^{-1/2} - e^{-1}\right)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegrasikan $x=2$ dengan batas $y \in (0,0)$ → hasilnya nol, bukan menghasilkan kontribusi.
> > > - Salah menghitung $\int_0^u e^{-y/2}dy$: hasilnya $2(1-e^{-u/2})$, bukan $e^{-u/2}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $X$ kontinu dan mengintegrasikan atas $x$ juga — padahal $X$ diskrit; gunakan penjumlahan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $X$ diskrit dan $Y$ kontinu → gunakan $\sum_x \int_{\text{region}} f(x,y)\, dy$, bukan integral ganda biasa.
>
---

## **No. 21**

Dalam kasus kecelakaan, polis asuransi mobil membayar $X$ untuk kerusakan mobil dan $Y$ untuk klaim kewajiban. Model untuk distribusi bersama dari $X$ dan $Y$ memenuhi hubungan berikut:

- Distribusi bersyarat dari $Y$ diketahui $X$: $f_{Y|X}(y|x) = \dfrac{1}{x}$ untuk $0 < y < x$.
- Distribusi dari $X$: $f_X(x) = 3x^2$ untuk $0 < x < 1$.

Misalkan klaim kewajiban untuk kecelakaan tertentu adalah $y = 0{,}4$. Tentukan klaim kerusakan yang diharapkan.

a. Kurang dari $0{,}4$  
b. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}55$  
c. Sekurang-kurangnya $0{,}55$ tapi kurang dari $0{,}7$  
d. Sekurang-kurangnya $0{,}7$ tapi kurang dari $0{,}85$  
e. Sekurang-kurangnya $0{,}85$

> [!summary]+ **Jawaban No. 21**
>
> **(d). $E[X \mid Y=0{,}4] \approx 0{,}743$ (sekurang-kurangnya $0{,}7$ tapi kurang dari $0{,}85$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.8 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi bersyarat $X \mid Y=y$ (Bayes kontinu):
> >
> > $$f_{X|Y}(x \mid y) = \frac{f(x,y)}{f_Y(y)} = \frac{f_{Y|X}(y|x) \cdot f_X(x)}{f_Y(y)}$$
>
> **Diketahui:**
> - $f_{Y|X}(y|x) = 1/x$ untuk $0 < y < x < 1$
> - $f_X(x) = 3x^2$ untuk $0 < x < 1$
> - Target: $E[X \mid Y = 0{,}4]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Distribusi Bersama**
> >
> > $$f(x,y) = f_{Y|X}(y|x) \cdot f_X(x) = \frac{1}{x} \cdot 3x^2 = 3x \quad \text{untuk } 0 < y < x < 1$$
> >
> > **Langkah 2: Hitung PDF Marginal $Y$**
> >
> > $$f_Y(y) = \int_y^1 3x\, dx = 3\left[\frac{x^2}{2}\right]_y^1 = \frac{3}{2}(1-y^2)$$
> >
> > Saat $y = 0{,}4$: $f_Y(0{,}4) = \dfrac{3}{2}(1 - 0{,}16) = \dfrac{3}{2}(0{,}84) = 1{,}26$.
> >
> > **Langkah 3: Hitung PDF Bersyarat $X \mid Y=0{,}4$**
> >
> > $$f_{X|Y}(x \mid 0{,}4) = \frac{3x}{1{,}26} = \frac{3x}{\frac{3}{2}(0{,}84)} = \frac{x}{0{,}42} \quad \text{untuk } 0{,}4 < x < 1$$
> >
> > **Langkah 4: Hitung $E[X \mid Y=0{,}4]$**
> >
> > $$E[X \mid Y=0{,}4] = \int_{0{,}4}^1 x \cdot \frac{x}{0{,}42}\, dx = \frac{1}{0{,}42}\int_{0{,}4}^1 x^2\, dx$$
> >
> > $$= \frac{1}{0{,}42} \cdot \left[\frac{x^3}{3}\right]_{0{,}4}^1 = \frac{1}{0{,}42} \cdot \frac{1 - 0{,}064}{3} = \frac{0{,}936}{1{,}26} \approx 0{,}743$$
> >
> > Karena $0{,}7 \leq 0{,}743 < 0{,}85$, jawaban adalah **(d)**.
> >
> > **Hasil Akhir:** **(d)**. $E[X \mid Y=0{,}4] \approx 0{,}743$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah batas integral marginal $f_Y$: karena $y < x < 1$, integral atas $x$ dari $y$ sampai $1$ (bukan $0$ sampai $1$).
> > > - Menggunakan $E[X]$ marginal alih-alih $E[X \mid Y=0{,}4]$ — soal menanyakan ekspektasi bersyarat.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $x$ bisa dari $0$ sampai $1$ tanpa kondisi $x > y = 0{,}4$ — ini melanggar batasan $y < x$ pada joint distribution.
> >
> > > [!CAUTION] Red Flags
> > > - Jika domain joint distribution berbentuk $\{0 < y < x < 1\}$ → selalu gambar daerah integrasi sebelum menentukan batas.
>
---

## **No. 22**

Sebuah tim bisbol akan menyumbangkan $100{.}000$ untuk setiap pukulan home run setelah home run ke-2 dalam suatu permainan. Diketahui bahwa banyak home run yang dicapai dalam suatu permainan berdistribusi Poisson dengan rata-rata sebesar $4$.

Tentukanlah besar uang yang diharapkan akan disumbangkan oleh tim tersebut.

a. Kurang dari $150{.}000$  
b. Sekurang-kurangnya $150{.}000$ tapi kurang dari $175{.}000$  
c. Sekurang-kurangnya $175{.}000$ tapi kurang dari $200{.}000$  
d. Sekurang-kurangnya $200{.}000$ tapi kurang dari $225{.}000$  
e. Sekurang-kurangnya $225{.}000$

> [!summary]+ **Jawaban No. 22**
>
> **(d). $E[\text{donasi}] \approx 210{.}989$ (sekurang-kurangnya $200{.}000$ tapi kurang dari $225{.}000$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > $N \sim \text{Poisson}(\lambda)$: $E[N] = \lambda$, $E[N^2] = \lambda^2 + \lambda$.
> >
> > Donasi: $D = 100{.}000 \cdot \max(N-2, 0)$.
> >
> > $$E[(N-2)^+] = E[N] - 2 + 2P(N=0) + P(N=1)$$
> >
> > (rumus ini diturunkan dari identitas: $E[\max(N-c,0)] = E[N] - c + \sum_{k=0}^{c} P(N \leq k) - P(N \leq c) \cdot c$ yang disederhanakan)
>
> **Diketahui:**
> - $N \sim \text{Poisson}(4)$
> - Donasi per home run setelah ke-2: $100{.}000$
> - Total donasi: $D = 100{.}000 \cdot \max(N-2, 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[\max(N-2, 0)]$ dengan Definisi**
> >
> > $$E[(N-2)^+] = \sum_{k=3}^{\infty}(k-2) \cdot P(N=k)$$
> >
> > $$= \sum_{k=0}^{\infty} k \cdot P(N=k) - 2\sum_{k=0}^{\infty} P(N=k) - \sum_{k=0}^{2}(k-2)P(N=k) + \sum_{k=0}^{2}(k-2)P(N=k)$$
> >
> > Cara lebih sistematis: $E[(N-2)^+] = E[N] - 2 + 2P(N=0) + P(N=1)$.
> >
> > Dengan $\lambda = 4$:
> >
> > $$P(N=0) = e^{-4}, \quad P(N=1) = 4e^{-4}$$
> >
> > $$E[(N-2)^+] = 4 - 2 + 2e^{-4} + 4e^{-4} = 2 + 6e^{-4}$$
> >
> > $$= 2 + 6(0{,}01832) = 2 + 0{,}10990 \approx 2{,}110$$
> >
> > **Langkah 2: Hitung Ekspektasi Donasi**
> >
> > $$E[D] = 100{.}000 \times 2{,}110 \approx 211{.}000$$
> >
> > Karena $200{.}000 \leq 211{.}000 < 225{.}000$, jawaban adalah **(d)**.
> >
> > **Hasil Akhir:** **(d)**. $E[D] \approx 211{.}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira donasi dimulai dari home run ke-2 (inklusif), bukan **setelah** ke-2 — perhatikan "setelah home run ke-2".
> > > - Menggunakan $E[N-2] = E[N]-2 = 2$ tanpa memperhatikan $\max(\cdot, 0)$ — padahal saat $N \leq 2$ donasi = 0.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "$100{.}000$ untuk setiap home run setelah ke-2" berarti: kalau $N=5$, donasi $= 3 \times 100{.}000$, bukan $100{.}000$ saja.
> >
> > > [!CAUTION] Red Flags
> > > - Jika muncul "setiap unit di atas ambang batas $c$" → modelkan sebagai $E[(N-c)^+]$, bukan $E[N]-c$.
>
---

## **No. 23**

Dalam sebuah pertandingan sepakbola antara tim $A$ dan tim $B$, diketahui bahwa banyaknya gol yang dicetak oleh tim $A$ dalam suatu pertandingan berdistribusi geometrik, $X_A = 0, 1, 2, \ldots$ dengan mean sebesar $3{,}5$. Diketahui juga banyaknya gol yang dicetak oleh tim $B$ dalam suatu pertandingan berdistribusi geometrik, $X_B = 0, 1, 2, \ldots$ dengan mean sebesar $3$. Asumsikan $X_A$ dan $X_B$ saling independen.

Tentukanlah probabilitas bahwa tim $B$ akan memenangkan pertandingan dengan selisih gol sekurang-kurangnya 2 gol.

a. $0{,}1$  
b. $0{,}2$  
c. $0{,}3$  
d. $0{,}4$  
e. $0{,}5$

> [!summary]+ **Jawaban No. 23**
>
> **(c). $P(X_B \geq X_A + 2) = 0{,}3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.4 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Geometrik dengan support $\{0, 1, 2, \ldots\}$ dan mean $\mu = (1-p)/p$:
> >
> > $$p = \frac{1}{\mu + 1}, \quad P(X = k) = p(1-p)^k, \quad P(X \geq k) = (1-p)^k$$
>
> **Diketahui:**
> - $X_A \sim \text{Geom}(p_A)$, $E[X_A] = 3{,}5$ → $p_A = 1/(3{,}5+1) = 1/4{,}5 = 2/9$, $q_A = 7/9$
> - $X_B \sim \text{Geom}(p_B)$, $E[X_B] = 3$ → $p_B = 1/(3+1) = 1/4$, $q_B = 3/4$
> - Target: $P(X_B \geq X_A + 2) = P(X_B - X_A \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis sebagai Penjumlahan**
> >
> > $$P(X_B \geq X_A + 2) = \sum_{a=0}^{\infty} P(X_A=a) \cdot P(X_B \geq a+2)$$
> >
> > $$= \sum_{a=0}^{\infty} p_A q_A^a \cdot q_B^{a+2}$$
> >
> > $$= p_A q_B^2 \sum_{a=0}^{\infty} (q_A q_B)^a = \frac{p_A q_B^2}{1 - q_A q_B}$$
> >
> > **Langkah 2: Substitusi Nilai**
> >
> > $$q_A q_B = \frac{7}{9} \times \frac{3}{4} = \frac{21}{36} = \frac{7}{12}$$
> >
> > $$p_A q_B^2 = \frac{2}{9} \times \left(\frac{3}{4}\right)^2 = \frac{2}{9} \times \frac{9}{16} = \frac{2}{16} = \frac{1}{8}$$
> >
> > $$P(X_B \geq X_A + 2) = \frac{1/8}{1 - 7/12} = \frac{1/8}{5/12} = \frac{1}{8} \times \frac{12}{5} = \frac{12}{40} = \frac{3}{10} = 0{,}3$$
> >
> > **Hasil Akhir:** **(c)**. $P(X_B \geq X_A + 2) = 0{,}3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah parametrisasi Geometrik: jika support $\{0,1,2,\ldots\}$ dan mean $= \mu$, maka $p = 1/(\mu+1)$, bukan $1/\mu$.
> > > - Salah menggunakan deret geometri: $\sum_{a=0}^\infty r^a = 1/(1-r)$ valid hanya jika $|r|<1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Tim $B$ menang dengan selisih $\geq 2$" berarti $X_B - X_A \geq 2$, yaitu $X_B \geq X_A + 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu tentukan parametrisasi Geometrik dulu (support $\{0,1,\ldots\}$ atau $\{1,2,\ldots\}$) sebelum menghitung $p$.
>
---

## **No. 24**

Sebuah perusahaan manufaktur mengirimkan $100$ peti yang berisikan unit produksinya. Dalam setiap peti terdapat proporsi unit yang rusak. Terdapat sebanyak $15$ peti, dimana setiap unit produk di dalamnya memiliki peluang cacat sebesar $0{,}25$ dan untuk $85$ peti lainnya, setiap unit produk di dalamnya memiliki peluang cacat sebesar $0{,}15$. Sebuah peti dipilih secara acak dan $10$ unit produk dipilih secara acak dari peti tersebut.

Tentukan peluang bahwa paling sedikit $2$ unit dalam sampel tersebut rusak.

a. $0{,}30$  
b. $0{,}35$  
c. $0{,}40$  
d. $0{,}45$  
e. $0{,}50$

> [!summary]+ **Jawaban No. 24**
>
> **(e). $P(X \geq 2) \approx 0{,}50$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2.7 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Probabilitas Total:**
> >
> > $$P(A) = P(A \mid B_1)P(B_1) + P(A \mid B_2)P(B_2)$$
> >
> > PMF Binomial: $P(X \leq 1) = P(X=0) + P(X=1) = (1-p)^n + np(1-p)^{n-1}$
>
> **Diketahui:**
> - $P(\text{peti tinggi}) = 15/100 = 0{,}15$; $P(\text{peti rendah}) = 85/100 = 0{,}85$
> - $X \mid \text{peti tinggi} \sim B(10, 0{,}25)$; $X \mid \text{peti rendah} \sim B(10, 0{,}15)$
> - Target: $P(X \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hukum Probabilitas Total**
> >
> > $$P(X \geq 2) = P(X \geq 2 \mid \text{tinggi}) \cdot 0{,}15 + P(X \geq 2 \mid \text{rendah}) \cdot 0{,}85$$
> >
> > **Langkah 2: Hitung $P(X \geq 2 \mid \text{peti tinggi})$ dengan $p=0{,}25$, $n=10$**
> >
> > $$P(X=0) = (0{,}75)^{10} \approx 0{,}0563$$
> >
> > $$P(X=1) = 10(0{,}25)(0{,}75)^9 \approx 10(0{,}25)(0{,}0751) \approx 0{,}1877$$
> >
> > $$P(X \geq 2) = 1 - 0{,}0563 - 0{,}1877 = 0{,}7560$$
> >
> > **Langkah 3: Hitung $P(X \geq 2 \mid \text{peti rendah})$ dengan $p=0{,}15$, $n=10$**
> >
> > $$P(X=0) = (0{,}85)^{10} \approx 0{,}1969$$
> >
> > $$P(X=1) = 10(0{,}15)(0{,}85)^9 \approx 10(0{,}15)(0{,}2316) \approx 0{,}3474$$
> >
> > $$P(X \geq 2) = 1 - 0{,}1969 - 0{,}3474 = 0{,}4557$$
> >
> > **Langkah 4: Gabungkan**
> >
> > $$P(X \geq 2) = 0{,}7560(0{,}15) + 0{,}4557(0{,}85) = 0{,}1134 + 0{,}3873 = 0{,}5007 \approx 0{,}50$$
> >
> > **Hasil Akhir:** **(e)**. $P(X \geq 2) \approx 0{,}50$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan nilai $p$ tunggal (rata-rata $p = 0{,}15\times0{,}25 + 0{,}85\times0{,}15 = 0{,}165$) secara langsung — ini hanya valid jika $p$ digunakan dalam ekspektasi, bukan dalam probabilitas Binomial.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Paling sedikit 2" = $P(X \geq 2) = 1 - P(X=0) - P(X=1)$; jangan gunakan $P(X > 2)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika sampel diambil dari populasi campuran (mixture) → gunakan Hukum Probabilitas Total dengan mengkondisikan pada jenis populasi.
>
---

## **No. 25**

Diketahui $X$ berdistribusi seragam pada interval $(0, 1)$. Diketahui juga variabel acak $Y$ didefinisikan sebagai $Y = X^{-k}$, dimana $0 < k < 1$.

Tentukan mean dari $Y$.

a. $\dfrac{1}{k}$  
b. $\dfrac{1}{1-k}$  
c. $k$  
d. $\dfrac{k}{1-k}$  
e. $\dfrac{1}{k-1}$

> [!summary]+ **Jawaban No. 25**
>
> **(b). $E[Y] = \dfrac{1}{1-k}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U(0,1)$, $f_X(x) = 1$ pada $(0,1)$:
> >
> > $$E[g(X)] = \int_0^1 g(x) \cdot 1\, dx$$
> >
> > Integral pangkat: $\displaystyle\int_0^1 x^r\, dx = \frac{1}{r+1}$ untuk $r > -1$.
>
> **Diketahui:**
> - $X \sim U(0,1)$, $Y = X^{-k}$, $0 < k < 1$
> - Target: $E[Y] = E[X^{-k}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Ekspektasi sebagai Integral**
> >
> > $$E[Y] = E[X^{-k}] = \int_0^1 x^{-k} \cdot 1\, dx$$
> >
> > **Langkah 2: Evaluasi Integral**
> >
> > Eksponen: $-k > -1$ karena $0 < k < 1$, sehingga integral konvergen.
> >
> > $$\int_0^1 x^{-k}\, dx = \left[\frac{x^{-k+1}}{-k+1}\right]_0^1 = \frac{1}{1-k}$$
> >
> > (Batas bawah: $x^{1-k} \to 0$ saat $x \to 0^+$ karena $1-k > 0$.)
> >
> > **Hasil Akhir:** **(b)**. $E[Y] = \dfrac{1}{1-k}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira integral $\int_0^1 x^{-k} dx$ tidak konvergen karena pangkat negatif — integral ini konvergen selama $-k > -1$, yaitu $k < 1$ (terpenuhi).
> > > - Salah menghitung anti-turunan: $\int x^{-k}dx = \dfrac{x^{-k+1}}{-k+1}$, bukan $\dfrac{x^{-k+1}}{-k}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mencoba mencari PDF $Y$ dan mengintegrasikan — lebih mudah menggunakan LOTUS (Law of the Unconscious Statistician).
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Y = g(X)$ dan $X$ seragam → $E[Y] = \int_0^1 g(x)dx$ langsung (LOTUS), tidak perlu mencari PDF $Y$.
>
---

## **No. 26**

Misalkan $X$ merupakan variabel acak dengan fungsi pembangkit momen sebagai berikut:

$$M(t) = \frac{e^{at}}{1 - bt^2} \quad \text{untuk } -1 < t < 1$$

Jika diketahui mean dari $X$ sebesar $2$ dan variansi dari $X$ sebesar $4$.

Tentukan nilai dari $a + b$.

a. $4$  
b. $3$  
c. $2$  
d. $1$  
e. $0$

> [!summary]+ **Jawaban No. 26**
>
> **(a). $a + b = 4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 4.5 |
>
> > [!info]+ **Rumus**
> >
> > $$E[X] = M'(0), \quad E[X^2] = M''(0), \quad \text{Var}(X) = E[X^2] - (E[X])^2$$
> >
> > Turunan produk/hasil bagi di $t=0$ lebih mudah menggunakan ekspansi Taylor:
> >
> > $$M(t) = \left(1 + at + \frac{a^2t^2}{2} + \ldots\right)\left(1 + bt^2 + \ldots\right) = 1 + at + \left(\frac{a^2}{2}+b\right)t^2 + \ldots$$
> >
> > sehingga $E[X] = a$ dan $E[X^2] = a^2 + 2b$.
>
> **Diketahui:**
> - $M(t) = e^{at}/(1-bt^2)$
> - $E[X] = 2$, $\text{Var}(X) = 4$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kembangkan MGF di sekitar $t=0$**
> >
> > $$e^{at} = 1 + at + \frac{a^2t^2}{2} + O(t^3)$$
> >
> > $$\frac{1}{1-bt^2} = 1 + bt^2 + O(t^4)$$
> >
> > $$M(t) = \left(1 + at + \frac{a^2 t^2}{2} + \cdots\right)(1 + bt^2 + \cdots) = 1 + at + \left(\frac{a^2}{2} + b\right)t^2 + \cdots$$
> >
> > **Langkah 2: Ekstrak Momen**
> >
> > Dari ekspansi MGF: koefisien $t$ adalah $E[X]/1! = E[X]$, dan koefisien $t^2$ adalah $E[X^2]/2!$.
> >
> > $$E[X] = a = 2 \implies a = 2$$
> >
> > $$\frac{E[X^2]}{2} = \frac{a^2}{2} + b \implies E[X^2] = a^2 + 2b$$
> >
> > **Langkah 3: Gunakan Variansi**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = a^2 + 2b - a^2 = 2b = 4 \implies b = 2$$
> >
> > **Langkah 4: Hitung $a + b$**
> >
> > $$a + b = 2 + 2 = 4$$
> >
> > **Hasil Akhir:** **(a)**. $a + b = 4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menghitung $M'(0)$ dan $M''(0)$ dengan turunan langsung (kuosien) — jauh lebih rumit dan rawan kesalahan dibanding ekspansi Taylor.
> > > - Mengira $\text{Var}(X) = b$ langsung — yang benar adalah $\text{Var}(X) = 2b$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah menggunakan rumus: $M(t) = e^{\mu t + \sigma^2 t^2/2}$ (ini khusus Normal) — soal ini tidak mengasumsikan distribusi Normal.
> >
> > > [!CAUTION] Red Flags
> > > - Jika MGF berbentuk produk → kembangkan tiap faktor ke deret Taylor orde cukup, lalu kalikan.
>
---

## **No. 27**

Dua kotak serupa masing-masing berisi $10$ bola bernomor dengan bentuk serupa. Kotak 1 berisi $5$ bola dengan angka $1$ dan $5$ bola dengan angka $2$. Kotak 2 berisi $3$ bola dengan angka $1$ dan $7$ bola dengan angka $2$. Sebuah kotak dipilih secara acak, dan sebuah bola dipilih dari kotak tersebut.

Tentukanlah peluang bahwa kotak 1 yang terpilih jika diketahui bahwa bola yang dipilih bernomor $1$.

a. $\dfrac{1}{8}$  
b. $\dfrac{2}{8}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{4}{8}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 27**
>
> **(e). $\dfrac{5}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2.7 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(B_i \mid A) = \frac{P(A \mid B_i) \cdot P(B_i)}{\sum_j P(A \mid B_j) \cdot P(B_j)}$$
>
> **Diketahui:**
> - $P(\text{Kotak 1}) = P(\text{Kotak 2}) = 1/2$
> - $P(\text{bola}=1 \mid \text{Kotak 1}) = 5/10 = 1/2$
> - $P(\text{bola}=1 \mid \text{Kotak 2}) = 3/10$
> - Target: $P(\text{Kotak 1} \mid \text{bola}=1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{bola}=1)$ via Hukum Probabilitas Total**
> >
> > $$P(\text{bola}=1) = \frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{3}{10} = \frac{1}{4} + \frac{3}{20} = \frac{5}{20} + \frac{3}{20} = \frac{8}{20} = \frac{2}{5}$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(\text{Kotak 1} \mid \text{bola}=1) = \frac{P(\text{bola}=1 \mid \text{Kotak 1}) \cdot P(\text{Kotak 1})}{P(\text{bola}=1)} = \frac{\frac{1}{2} \cdot \frac{1}{2}}{\frac{2}{5}} = \frac{1/4}{2/5} = \frac{1}{4} \times \frac{5}{2} = \frac{5}{8}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{5}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{Kotak 1} \mid \text{bola}=1) = P(\text{bola}=1 \mid \text{Kotak 1}) = 1/2$ — ini membalik kondisional.
> > > - Salah menghitung penyebut Bayes: harus menjumlahkan atas semua kotak.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan bahwa kotak dipilih dengan probabilitas sama ($1/2$ masing-masing).
> >
> > > [!CAUTION] Red Flags
> > > - Teorema Bayes: penyebut = $P(\text{bola}=1)$ yang dihitung via Hukum Probabilitas Total atas semua hipotesis (kotak 1 dan kotak 2).
>
---

## **No. 28**

Misalkan survei penggemar sepak bola meminta para penggemar untuk mengurutkan dari kemungkinan besar peluang tim masing-masing negara memenangkan piala dunia. Survei tersebut menemukan hal-hal berikut:

- $\dfrac{2}{3}$ dari mereka yang menempatkan Argentina di peringkat pertama, menempatkan Prancis di peringkat kedua.
- $\dfrac{1}{7}$ dari mereka yang tidak menempatkan Argentina di peringkat pertama, menempatkan Prancis di peringkat kedua.
- $30\%$ dari mereka yang disurvei menempatkan Prancis di peringkat kedua.

Dari orang-orang yang disurvei yang menempatkan Prancis di peringkat kedua, tentukanlah proporsi yang tidak menempatkan Argentina di peringkat pertama.

a. $\dfrac{1}{4}$  
b. $\dfrac{1}{3}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{3}{4}$

> [!summary]+ **Jawaban No. 28**
>
> **(b). $\dfrac{1}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2.7 |
>
> > [!info]+ **Rumus**
> >
> > $$P(F2) = P(F2 \mid A) \cdot P(A) + P(F2 \mid A^c) \cdot P(A^c)$$
> >
> > $$P(A^c \mid F2) = \frac{P(F2 \mid A^c) \cdot P(A^c)}{P(F2)}$$
>
> **Diketahui:**
> - $P(F2 \mid A) = 2/3$ (Prancis ke-2 | Argentina ke-1)
> - $P(F2 \mid A^c) = 1/7$ (Prancis ke-2 | bukan Argentina ke-1)
> - $P(F2) = 0{,}3$
> - Target: $P(A^c \mid F2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $P(A)$ dari Hukum Probabilitas Total**
> >
> > $$P(F2) = \frac{2}{3} P(A) + \frac{1}{7}(1-P(A)) = 0{,}3$$
> >
> > $$\frac{2}{3}P(A) + \frac{1}{7} - \frac{1}{7}P(A) = 0{,}3$$
> >
> > $$P(A)\left(\frac{2}{3} - \frac{1}{7}\right) = 0{,}3 - \frac{1}{7} = \frac{2{,}1 - 1}{7} = \frac{1{,}1}{7}$$
> >
> > $$P(A) \cdot \frac{11}{21} = \frac{11}{70} \implies P(A) = \frac{11}{70} \times \frac{21}{11} = \frac{21}{70} = \frac{3}{10}$$
> >
> > **Langkah 2: Hitung $P(A^c)$**
> >
> > $$P(A^c) = 1 - \frac{3}{10} = \frac{7}{10}$$
> >
> > **Langkah 3: Terapkan Bayes**
> >
> > $$P(A^c \mid F2) = \frac{P(F2 \mid A^c) \cdot P(A^c)}{P(F2)} = \frac{\frac{1}{7} \times \frac{7}{10}}{0{,}3} = \frac{\frac{1}{10}}{0{,}3} = \frac{1}{10} \times \frac{10}{3} = \frac{1}{3}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah mengidentifikasi event: $A$ = "Argentina ke-1", $F2$ = "Prancis ke-2"; jangan tertukar.
> > > - Mencari $P(A \mid F2)$ (Argentina ke-1 | Prancis ke-2) alih-alih $P(A^c \mid F2)$ — baca soal hingga akhir.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(A) = 2/3$ karena $P(F2|A) = 2/3$ — ini probabilitas bersyarat, bukan marginal.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan $P(F2|A)$, $P(F2|A^c)$, dan $P(F2)$ → ini adalah setup Teorema Bayes; cari $P(A)$ terlebih dahulu dari LPT.
>
---

## **No. 29**

Sebuah perusahaan asuransi sedang mempertimbangkan untuk mengambil alih sekelompok polis. Polis-polis dalam kelompok tersebut berdistribusi identik dan saling independen satu sama lain. Setiap polis dalam kelompok memiliki klaim yang berdistribusi eksponensial dengan mean sebesar $100$ dan premi untuk setiap polis sebesar $150$. Perusahaan asuransi tersebut menginginkan probabilitas sebesar $95\%$ dimana premi yang diterima akan cukup untuk menutupi klaim.

Dengan menggunakan approksimasi normal, tentukanlah jumlah minimum polis yang diperlukan dalam kelompok tersebut agar kriteria perusahaan asuransi dipenuhi.

a. $11$  
b. $12$  
c. $13$  
d. $14$  
e. $15$

> [!summary]+ **Jawaban No. 29**
>
> **(a). $n_{\min} = 11$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Miller Bab 8 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Limit Pusat (CLT):** Untuk $X_1, \ldots, X_n$ i.i.d. dengan mean $\mu$ dan variansi $\sigma^2$:
> >
> > $$S_n = \sum_{i=1}^n X_i \approx N(n\mu,\, n\sigma^2) \quad \text{(untuk } n \text{ besar)}$$
> >
> > Untuk distribusi Eksponensial: $E[X] = \mu$, $\text{Var}(X) = \mu^2$.
>
> **Diketahui:**
> - $X_i \sim \text{Exp}(\mu = 100)$ → $\text{Var}(X_i) = 100^2 = 10{.}000$, $\sigma = 100$
> - Premi per polis: $150$; total premi $n$ polis: $150n$
> - Syarat: $P(S_n \leq 150n) \geq 0{,}95$ di mana $S_n = \sum X_i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standardisasi Kondisi**
> >
> > $$P(S_n \leq 150n) = P\!\left(Z \leq \frac{150n - 100n}{100\sqrt{n}}\right) = P\!\left(Z \leq \frac{50n}{100\sqrt{n}}\right) = P\!\left(Z \leq \frac{\sqrt{n}}{2}\right) \geq 0{,}95$$
> >
> > **Langkah 2: Cari Nilai $n$ Minimum**
> >
> > $$\frac{\sqrt{n}}{2} \geq z_{0{,}95} = 1{,}645$$
> >
> > $$\sqrt{n} \geq 3{,}290 \implies n \geq (3{,}290)^2 = 10{,}824$$
> >
> > Karena $n$ harus bilangan bulat: $n_{\min} = 11$.
> >
> > **Verifikasi:**
> > - $n=10$: $\sqrt{10}/2 = 1{,}581 < 1{,}645$ → tidak memenuhi.
> > - $n=11$: $\sqrt{11}/2 = 1{,}658 > 1{,}645$ → memenuhi ✓
> >
> > **Hasil Akhir:** **(a)**. $n_{\min} = 11$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(X) = 100$ (bukan $\mu^2 = 10{.}000$) untuk Eksponensial — ingat: untuk Eksponensial, $\sigma = \mu$.
> > > - Salah menentukan arah ketidaksetaraan: total **klaim** $\leq$ total **premi** (klaim di kiri, premi di kanan).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $z_{0{,}95} = 1{,}96$ (ini untuk interval kepercayaan dua sisi) — untuk satu sisi, $z_{0{,}95} = 1{,}645$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi Eksponensial dengan mean $\mu$ → selalu ingat $\sigma^2 = \mu^2$, bukan $\sigma^2 = \mu$.
> > > - Setelah mendapat $n \geq 10{,}824$, bulatkan ke atas: $n_{\min} = 11$.
>
---

## **No. 30**

Misalkan variabel acak kontinu $X$ dengan fungsi distribusi kumulatif sebagai berikut:

$$F(x) = \begin{cases} 0, & \text{untuk } x < a \\ 1 - e^{-\frac{1}{2}(x-a)^2}, & \text{lainnya} \end{cases}$$

Dimana $a$ merupakan suatu konstanta. Misalkan persentil ke-75 dari $X$ adalah $b$ dan persentil ke-50 dari $X$ adalah $c$. Jika $\dfrac{b}{c} = \sqrt{2}$, tentukanlah persentil ke-25 dari $X$.

a. Sekurang-kurangnya $0{,}79$  
b. Sekurang-kurangnya $0{,}78$ tapi kurang dari $0{,}79$  
c. Sekurang-kurangnya $0{,}77$ tapi kurang dari $0{,}78$  
d. Sekurang-kurangnya $0{,}76$ tapi kurang dari $0{,}77$  
e. Kurang dari $0{,}76$

> [!summary]+ **Jawaban No. 30**
>
> **(e). Persentil ke-25 $\approx 0{,}759$ (kurang dari $0{,}76$)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**
> >
> > Persentil ke-$p$ (yaitu $x_p$) didefinisikan oleh $F(x_p) = p$:
> >
> > $$1 - e^{-\frac{1}{2}(x_p - a)^2} = p \implies (x_p - a)^2 = -2\ln(1-p) = 2\ln\!\frac{1}{1-p}$$
>
> **Diketahui:**
> - $F(x) = 1 - e^{-(x-a)^2/2}$ untuk $x \geq a$
> - $b = $ persentil ke-75: $F(b) = 0{,}75$
> - $c = $ persentil ke-50: $F(c) = 0{,}5$
> - $b/c = \sqrt{2}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspresikan $b$ dan $c$ dalam bentuk $a$**
> >
> > Dari $F(b) = 0{,}75$:
> >
> > $$(b-a)^2 = -2\ln(0{,}25) = 2\ln 4 = 4\ln 2 \implies b - a = 2\sqrt{\ln 2}$$
> >
> > Dari $F(c) = 0{,}5$:
> >
> > $$(c-a)^2 = -2\ln(0{,}5) = 2\ln 2 \implies c - a = \sqrt{2\ln 2} = \sqrt{2}\sqrt{\ln 2}$$
> >
> > **Langkah 2: Gunakan Syarat $b/c = \sqrt{2}$**
> >
> > $$\frac{b}{c} = \frac{a + 2\sqrt{\ln 2}}{a + \sqrt{2}\sqrt{\ln 2}} = \sqrt{2}$$
> >
> > $$a + 2\sqrt{\ln 2} = \sqrt{2}\left(a + \sqrt{2}\sqrt{\ln 2}\right) = \sqrt{2}\,a + 2\sqrt{\ln 2}$$
> >
> > $$a = \sqrt{2}\,a \implies a(1-\sqrt{2}) = 0 \implies a = 0$$
> >
> > **Langkah 3: Hitung Persentil ke-25**
> >
> > Dengan $a = 0$, cari $x_{0{,}25}$ dari $F(x_{0{,}25}) = 0{,}25$:
> >
> > $$1 - e^{-x^2/2} = 0{,}25 \implies e^{-x^2/2} = 0{,}75 \implies \frac{x^2}{2} = -\ln(0{,}75) = \ln\!\frac{4}{3}$$
> >
> > $$x^2 = 2\ln\!\frac{4}{3} \implies x = \sqrt{2\ln(4/3)}$$
> >
> > $$\ln(4/3) = \ln 4 - \ln 3 = 0{,}28768 \implies x = \sqrt{2 \times 0{,}28768} = \sqrt{0{,}57536} \approx 0{,}7585$$
> >
> > Karena $0{,}7585 < 0{,}76$, jawaban adalah **(e)**.
> >
> > **Hasil Akhir:** **(e)**. Persentil ke-25 $\approx 0{,}759$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $a$ tidak bisa nol karena "pasti ada offset" — derivasi menunjukkan $a=0$ adalah satu-satunya solusi konsisten.
> > > - Salah menggunakan $F(x_{0{,}25}) = 0{,}75$ (ini persentil ke-75, bukan ke-25).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira persentil ke-25 = $-b$ (simetri) — distribusi ini bukan simetrik di sekitar 0; support-nya adalah $[a, \infty) = [0, \infty)$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu periksa: persentil ke-$p$ dari CDF $F$ berarti $F(x_p) = p/100$ (bukan $1 - p/100$).
> > > - Jika ada parameter yang tidak diketahui ($a$) dan syarat tambahan ($b/c = \sqrt{2}$) → gunakan syarat tersebut untuk mencari parameter, kemudian hitung persentil.
>
---
