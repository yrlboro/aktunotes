## **No. 1**

Enam orang masuk ke lift dari lantai dasar sebuah hotel yang memiliki 10 lantai diatasnya. Dengan asumsi setiap orang turun di lantai yang dipilih secara acak, tentukanlah probabilitas bahwa semua orang turun di lantai yang berbeda.

a. Kurang dari $0{,}15$  
b. Sekurang-kurangnya $0{,}15$ tapi kurang dari $0{,}3$  
c. Sekurang-kurangnya $0{,}3$ tapi kurang dari $0{,}45$  
d. Sekurang-kurangnya $0{,}45$ tapi kurang dari $0{,}6$  
e. Sekurang-kurangnya $0{,}6$

> [!summary]+ **Jawaban No. 1**
> **(b). Sekurang-kurangnya $0{,}15$ tapi kurang dari $0{,}3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > $$P(\text{semua berbeda}) = \frac{P(10,6)}{10^6} = \frac{10 \times 9 \times 8 \times 7 \times 6 \times 5}{10^6}$$
> > di mana $P(n,k) = \dfrac{n!}{(n-k)!}$ adalah banyaknya permutasi $k$ objek dari $n$ objek berbeda.
>
> **Diketahui:**
> - $n = 10$ lantai (pilihan per orang)
> - $k = 6$ orang
> - Setiap orang memilih lantai secara acak dan independen
> - Target: $P(\text{semua orang turun di lantai yang berbeda})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Ruang Sampel Total**
> > Setiap dari 6 orang dapat turun di salah satu dari 10 lantai secara bebas. Banyaknya kejadian total:
> > $$|\Omega| = 10^6 = 1{.}000{.}000$$
> >
> > **Langkah 2: Hitung Kejadian Favorable (Semua Berbeda)**
> > Agar semua orang turun di lantai yang berbeda, kita memilih dan menyusun 6 lantai dari 10 (urutan penting karena orang 1, 2, ..., 6 berbeda):
> > $$|A| = P(10, 6) = 10 \times 9 \times 8 \times 7 \times 6 \times 5 = 151{.}200$$
> >
> > **Langkah 3: Hitung Probabilitas**
> > $$P(A) = \frac{151{.}200}{1{.}000{.}000} = 0{,}1512$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}1512$ — sekurang-kurangnya $0{,}15$ tapi kurang dari $0{,}3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan kombinasi $\binom{10}{6}$ alih-alih permutasi $P(10,6)$. Karena orang ke-1 dan ke-2 adalah entitas berbeda, urutan penugasan lantai penting.
> > > - Menggunakan $10^6$ sebagai pembilang (bukan penyebut).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "10 lantai di atasnya" berarti ada tepat 10 pilihan per orang (bukan 11 termasuk lantai dasar).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "dipilih secara acak" untuk beberapa individu → ruang sampel adalah hasil kali Cartesian, penyebut = $n^k$.
> > > - Jika soal menyebut "semua berbeda" → pembilang adalah permutasi $P(n,k)$.

---

## **No. 2**

Diketahui beberapa pernyataan berikut ini:

(i) Jika kejadian $A$ dan $B$ saling bebas, maka kejadian $A$ dan $B'$ juga saling bebas  
(ii) Jika kejadian $A$ dan $B$ saling bebas, maka kejadian $A'$ dan $B'$ juga saling bebas  
(iii) Jika kejadian $A$ dan $B$ saling bebas, maka kejadian $A \cup B$ dan $A' \cup B'$ juga saling bebas  

Tentukanlah pernyataan yang mana saja yang benar.

a. Semua benar kecuali pernyataan i  
b. Semua benar kecuali pernyataan ii  
c. Semua benar kecuali pernyataan iii  
d. Semua benar  
e. Hanya pernyataan i yang benar

> [!summary]+ **Jawaban No. 2**
> **(c). Semua benar kecuali pernyataan iii**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.5 Kejadian Independen]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > $A$ dan $B$ independen $\iff P(A \cap B) = P(A) \cdot P(B)$
> > Sifat komplemen: $P(A^c) = 1 - P(A)$
>
> **Diketahui:**
> - $A$ dan $B$ independen: $P(A \cap B) = P(A)P(B)$
> - Target: Tentukan kebenaran pernyataan (i), (ii), (iii)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi Pernyataan (i) — $A$ dan $B'$ independen**
> > $$P(A \cap B') = P(A) - P(A \cap B) = P(A) - P(A)P(B) = P(A)(1 - P(B)) = P(A)P(B')$$
> > Pernyataan (i) **BENAR**.
> >
> > **Langkah 2: Verifikasi Pernyataan (ii) — $A'$ dan $B'$ independen**
> > Dari (i), $A$ dan $B'$ independen. Terapkan (i) lagi: $A'$ dan $B'$ independen.
> > Secara eksplisit:
> > $$P(A' \cap B') = P((A \cup B)') = 1 - P(A \cup B) = 1 - P(A) - P(B) + P(A)P(B)$$
> > $$= (1-P(A))(1-P(B)) = P(A')P(B')$$
> > Pernyataan (ii) **BENAR**.
> >
> > **Langkah 3: Verifikasi Pernyataan (iii) — $(A \cup B)$ dan $(A' \cup B')$ independen**
> > Perhatikan bahwa $(A \cup B)$ dan $(A' \cup B') = (A \cap B)'$ . Tapi lebih langsung:
> > $(A \cup B) \cap (A' \cup B') = (A \cap A') \cup (A \cap B') \cup (B \cap A') \cup (B \cap B') = \emptyset \cup (A \cap B') \cup (A' \cap B) \cup \emptyset$
> >
> > Sebagai contoh konkret, ambil $P(A) = P(B) = 0{,}5$ dan $A$, $B$ independen:
> > $P(A \cup B) = 0{,}75$, $P(A' \cup B') = P((A\cap B)') = 1 - 0{,}25 = 0{,}75$
> > $P((A \cup B) \cap (A' \cup B')) = P(A \cap B') + P(A' \cap B) = 0{,}25 + 0{,}25 = 0{,}5$
> > Untuk independen dibutuhkan: $P(A \cup B) \cdot P(A' \cup B') = 0{,}75 \times 0{,}75 = 0{,}5625 \neq 0{,}5$
> > Pernyataan (iii) **SALAH**.
> >
> > **Hasil Akhir:** **(c)**. Semua benar kecuali pernyataan iii
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira independensi kekal di bawah semua operasi himpunan — ini hanya berlaku untuk komplemen, bukan gabungan.
> > > - Salah dalam menghitung $P((A\cup B) \cap (A' \cup B'))$ tanpa mengembangkan dengan hukum distributif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menafsirkan "saling bebas" sebagai "mutually exclusive" — keduanya adalah konsep yang berlawanan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal meminta verifikasi independensi dari operasi kejadian → selalu hitung $P(A \cap B)$ dan bandingkan dengan $P(A)P(B)$ secara eksplisit dengan contoh.

---

## **No. 3**

Dalam sebuah pertandingan sepakbola antara tim $A$ dan tim $B$, diketahui bahwa banyaknya gol yang dicetak oleh tim $A$ dalam suatu pertandingan berdistribusi geometrik, $X_A = 0, 1, 2, \ldots$ dengan mean sebesar 3. Diketahui juga banyaknya gol yang dicetak oleh tim $B$ dalam suatu pertandingan berdistribusi geometrik, $X_B = 0, 1, 2, \ldots$ dengan mean sebesar $3{,}5$. Asumsikan $X_A$ dan $X_B$ saling independen, maka tentukanlah probabilitas bahwa tim $B$ akan memenangkan pertandingan dengan selisih gol sekurang-kurangnya 2 gol.

a. Kurang dari $0{,}15$  
b. Sekurang-kurangnya $0{,}15$ tapi kurang dari $0{,}3$  
c. Sekurang-kurangnya $0{,}3$ tapi kurang dari $0{,}45$  
d. Sekurang-kurangnya $0{,}45$ tapi kurang dari $0{,}6$  
e. Sekurang-kurangnya $0{,}6$

> [!summary]+ **Jawaban No. 3**
> **(c). Sekurang-kurangnya $0{,}3$ tapi kurang dari $0{,}45$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Distribusi geometrik (support $x = 0, 1, 2, \ldots$, parametrisasi dengan mean $\mu = \frac{1-p}{p}$):
> > $$P(X = k) = p(1-p)^k, \quad k = 0, 1, 2, \ldots$$
> > $$E[X] = \frac{1-p}{p} \implies p = \frac{1}{1+\mu}$$
> > MGF: $M_X(t) = \dfrac{p}{1-(1-p)e^t}$
> > Untuk $Z = X_B - X_A$, cari $P(Z \geq 2)$ menggunakan PGF atau enumerasi.
>
> **Diketahui:**
> - $X_A \sim \text{Geom}(p_A)$, support $\{0,1,2,\ldots\}$, $E[X_A] = 3 \Rightarrow p_A = \frac{1}{4}$
> - $X_B \sim \text{Geom}(p_B)$, support $\{0,1,2,\ldots\}$, $E[X_B] = 3{,}5 \Rightarrow p_B = \frac{2}{9}$
> - $X_A, X_B$ independen
> - Target: $P(X_B - X_A \geq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Parameter**
> > $E[X] = \frac{1-p}{p} = \mu \Rightarrow p = \frac{1}{1+\mu}$
> > $$p_A = \frac{1}{1+3} = \frac{1}{4}, \quad q_A = \frac{3}{4}$$
> > $$p_B = \frac{1}{1+3{,}5} = \frac{2}{9}, \quad q_B = \frac{7}{9}$$
> >
> > **Langkah 2: Gunakan PGF untuk Distribusi Selisih**
> > Kita butuh $P(X_B - X_A \geq 2) = 1 - P(X_B - X_A \leq 1)$.
> >
> > Hitung $P(X_B - X_A = k)$ untuk $k = \ldots, -2, -1, 0, 1$ via enumerasi:
> > $$P(X_B - X_A = k) = \sum_{j=0}^{\infty} P(X_A = j) P(X_B = j+k)$$
> >
> > Untuk $k \geq 0$:
> > $$P(X_B - X_A = k) = \sum_{j=0}^{\infty} p_A q_A^j \cdot p_B q_B^{j+k} = p_A p_B q_B^k \sum_{j=0}^{\infty}(q_A q_B)^j = \frac{p_A p_B q_B^k}{1 - q_A q_B}$$
> >
> > Untuk $k < 0$ (ganti peran $A$ dan $B$):
> > $$P(X_B - X_A = k) = \frac{p_A p_B q_A^{|k|}}{1 - q_A q_B}$$
> >
> > **Langkah 3: Hitung Konstanta**
> > $$q_A q_B = \frac{3}{4} \cdot \frac{7}{9} = \frac{21}{36} = \frac{7}{12}$$
> > $$1 - q_A q_B = \frac{5}{12}$$
> > $$p_A p_B = \frac{1}{4} \cdot \frac{2}{9} = \frac{2}{36} = \frac{1}{18}$$
> >
> > **Langkah 4: Hitung $P(X_B - X_A \leq 1)$**
> >
> > $P(Z = k)$ untuk $k \leq 1$:
> > - $k = 1$: $\frac{(1/18)(7/9)}{5/12} = \frac{7/162}{5/12} = \frac{7}{162} \cdot \frac{12}{5} = \frac{84}{810} = \frac{14}{135}$
> > - $k = 0$: $\frac{1/18}{5/12} = \frac{1}{18} \cdot \frac{12}{5} = \frac{12}{90} = \frac{2}{15}$
> > - $k = -1$: $\frac{(1/18)(3/4)}{5/12} = \frac{3/72}{5/12} = \frac{3}{72} \cdot \frac{12}{5} = \frac{36}{360} = \frac{1}{10}$
> > - $k \leq -2$: $\sum_{k=2}^{\infty} \frac{(1/18)(3/4)^k}{5/12} = \frac{(1/18) \cdot (3/4)^2/(1-3/4)}{5/12} = \frac{(1/18)(9/16)/(1/4)}{5/12}$
> >   $= \frac{(1/18)(9/4)}{5/12} = \frac{9/72}{5/12} = \frac{1/8}{5/12} = \frac{12}{40} = \frac{3}{10}$
> >
> > $P(Z \leq 1) = \frac{14}{135} + \frac{2}{15} + \frac{1}{10} + \frac{3}{10}$
> >
> > Konversi ke penyebut 270:
> > $= \frac{28}{270} + \frac{36}{270} + \frac{27}{270} + \frac{81}{270} = \frac{172}{270} = \frac{86}{135} \approx 0{,}637$
> >
> > **Langkah 5: Hitung $P(Z \geq 2)$**
> > $$P(X_B - X_A \geq 2) = 1 - \frac{86}{135} = \frac{49}{135} \approx 0{,}363$$
> >
> > **Hasil Akhir:** **(c)**. $\approx 0{,}363$ — sekurang-kurangnya $0{,}3$ tapi kurang dari $0{,}45$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan parametrisasi geometrik dengan support $\{1,2,3,\ldots\}$ (PMF $= p(1-p)^{k-1}$) alih-alih $\{0,1,2,\ldots\}$ sesuai soal.
> > > - Lupa bahwa untuk selisih dua geometrik, distribusi tidak simetris jika $p_A \neq p_B$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Selisih gol sekurang-kurangnya 2" berarti $X_B - X_A \geq 2$, bukan $|X_B - X_A| \geq 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika mean diberikan untuk distribusi geometrik → tentukan dulu parametrisasi (support $\{0,1,...\}$ atau $\{1,2,...\}$) sebelum menghitung $p$.

---

## **No. 4**

Misalkan $X$ adalah variabel acak diskrit dimana

$$P[X = 1] = p, \quad P[X = 2] = q, \quad P[X = 3] = r$$

Diketahui juga bahwa $P_X'(0) = 0{,}25$ dimana $P_X(t)$ adalah fungsi pembangkit probabilitas dari $X$ dan $M_X'(0) = 2{,}125$ dimana $M_X(t)$ adalah fungsi pembangkit momen dari $X$. Tentukan nilai dari $r$.

a. $0{,}075$  
b. $0{,}15$  
c. $0{,}225$  
d. $0{,}3$  
e. $0{,}375$

> [!summary]+ **Jawaban No. 4**
> **(e). $r = 0{,}375$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1–3.2; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> > PGF: $P_X(t) = E[t^X] = \sum_x t^x P(X=x)$, sehingga $P_X'(0) = P(X=1)$
> > MGF: $M_X(t) = E[e^{tX}]$, sehingga $M_X'(0) = E[X]$
> > Normalisasi: $p + q + r = 1$
>
> **Diketahui:**
> - $P(X=1)=p,\ P(X=2)=q,\ P(X=3)=r$
> - $P_X'(0) = 0{,}25$
> - $M_X'(0) = 2{,}125$
> - Target: nilai $r$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan PGF**
> > $$P_X(t) = pt + qt^2 + rt^3$$
> > $$P_X'(t) = p + 2qt + 3rt^2$$
> > $$P_X'(0) = p = 0{,}25$$
> >
> > **Langkah 2: Gunakan $M_X'(0) = E[X]$**
> > $$E[X] = 1 \cdot p + 2 \cdot q + 3 \cdot r = 2{,}125$$
> > $$0{,}25 + 2q + 3r = 2{,}125$$
> > $$2q + 3r = 1{,}875 \quad \cdots (1)$$
> >
> > **Langkah 3: Gunakan Normalisasi**
> > $$p + q + r = 1 \Rightarrow 0{,}25 + q + r = 1 \Rightarrow q + r = 0{,}75 \quad \cdots (2)$$
> >
> > **Langkah 4: Selesaikan Sistem Persamaan**
> > Dari (2): $q = 0{,}75 - r$. Substitusi ke (1):
> > $$2(0{,}75 - r) + 3r = 1{,}875$$
> > $$1{,}5 - 2r + 3r = 1{,}875$$
> > $$r = 0{,}375$$
> >
> > **Hasil Akhir:** **(e)**. $r = 0{,}375$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menukar PGF dengan MGF: $P_X'(0) \neq E[X]$ secara umum. Untuk PGF, $P_X'(1) = E[X]$, bukan $P_X'(0)$.
> > > - $P_X'(0) = P(X=1)$ hanya berlaku karena turunan PGF di $t=0$ mengekstrak koefisien $t^1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P_X'(0)$ adalah nilai PGF itu sendiri di $t=0$, bukan turunannya.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut $P_X'(t)$ (PGF) → ingat $P_X'(0) = P(X=1)$, $P_X''(0) = 2P(X=2)$, dan $P_X'(1) = E[X]$.
> > > - Jika soal menyebut $M_X'(0)$ (MGF) → ini adalah $E[X]$.

---

## **No. 5**

Misalkan $X$ dan $Y$ merupakan variabel acak diskrit, dimana diketahui bahwa

$$P[Y = -1] = \frac{1}{6}, \quad P[Y = 0] = \frac{1}{3}, \quad P[Y = 1] = \frac{1}{2}$$

$$P[X = -1 | Y = -1] = \frac{1}{3}, \quad P[X = 1 | Y = -1] = \frac{2}{3}$$

$$P[X = -1 | Y = 0] = \frac{1}{2}, \quad P[X = 1 | Y = 0] = \frac{1}{2}$$

$$P[X = -1 | Y = 1] = \frac{2}{3}, \quad P[X = 1 | Y = 1] = \frac{1}{3}$$

Tentukanlah nilai dari $P[XY = 1]$.

a. $\dfrac{1}{18}$  
b. $\dfrac{1}{9}$  
c. $\dfrac{1}{6}$  
d. $\dfrac{2}{9}$  
e. $\dfrac{5}{18}$

> [!summary]+ **Jawaban No. 5**
> **(d). $\dfrac{2}{9}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]], [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**  
> > $P(X=x, Y=y) = P(X=x \mid Y=y) \cdot P(Y=y)$
> > $XY = 1 \iff (X=1, Y=1)$ atau $(X=-1, Y=-1)$
>
> **Diketahui:**
> - Distribusi marginal $Y$ dan distribusi bersyarat $X|Y$ seperti di atas
> - Target: $P(XY = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Pasangan $(X,Y)$ yang Memberikan $XY=1$**
> > $XY = 1 \iff$ (kedua bernilai positif) atau (kedua bernilai negatif):
> > - $(X=1, Y=1)$
> > - $(X=-1, Y=-1)$
> >
> > **Langkah 2: Hitung Probabilitas Gabungan**
> > $$P(X=1, Y=1) = P(X=1 \mid Y=1) \cdot P(Y=1) = \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{6}$$
> > $$P(X=-1, Y=-1) = P(X=-1 \mid Y=-1) \cdot P(Y=-1) = \frac{1}{3} \cdot \frac{1}{6} = \frac{1}{18}$$
> >
> > **Langkah 3: Jumlahkan**
> > $$P(XY=1) = \frac{1}{6} + \frac{1}{18} = \frac{3}{18} + \frac{1}{18} = \frac{4}{18} = \frac{2}{9}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{2}{9}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa kasus $(X=-1, Y=-1)$: $(-1)(-1) = 1$. Banyak yang hanya mempertimbangkan $(X=1, Y=1)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $XY = 1$ hanya mungkin jika $X = Y = 1$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal minta $P[g(X,Y) = c]$ → selalu enumerasi SEMUA pasangan $(x,y)$ yang memenuhi $g(x,y) = c$ sebelum menjumlahkan probabilitasnya.

---

## **No. 6**

Diketahui $X$ merupakan variabel acak berdistribusi eksponensial dengan mean sebesar $k > 0$. Diketahui juga $E[X | X > k] = 2$. Tentukanlah nilai dari $E[X | X \leq k]$.

a. Kurang dari $0{,}25$  
b. Sekurang-kurangnya $0{,}25$ tapi kurang dari $0{,}5$  
c. Sekurang-kurangnya $0{,}5$ tapi kurang dari $0{,}75$  
d. Sekurang-kurangnya $0{,}75$ tapi kurang dari $1$  
e. Sekurang-kurangnya $1$

> [!summary]+ **Jawaban No. 6**
> **(b). Sekurang-kurangnya $0{,}25$ tapi kurang dari $0{,}5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 5.4 |
>
> > [!info]+ **Rumus**  
> > $X \sim \text{Exp}(\lambda)$ dengan mean $\mu = 1/\lambda$; di sini $\mu = k$ sehingga $\lambda = 1/k$.
> > Sifat memoryless: $E[X \mid X > k] = k + E[X] = k + k = 2k$
> > Hukum total ekspektasi: $E[X] = E[X \mid X \leq k] P(X \leq k) + E[X \mid X > k] P(X > k)$
>
> **Diketahui:**
> - $X \sim \text{Exp}(1/k)$, $E[X] = k$
> - $E[X \mid X > k] = 2$
> - Target: $E[X \mid X \leq k]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Sifat Memoryless untuk Temukan $k$**
> > Untuk distribusi eksponensial, $E[X \mid X > c] = c + E[X] = c + k$.
> > Dengan $c = k$: $E[X \mid X > k] = k + k = 2k = 2 \Rightarrow k = 1$.
> >
> > **Langkah 2: Tentukan Parameter**
> > $k = 1$, sehingga $X \sim \text{Exp}(1)$ dengan $E[X] = 1$.
> > $P(X > 1) = e^{-1}$, $P(X \leq 1) = 1 - e^{-1}$.
> >
> > **Langkah 3: Terapkan Hukum Total Ekspektasi**
> > $$E[X] = E[X \mid X \leq 1](1-e^{-1}) + E[X \mid X > 1] \cdot e^{-1}$$
> > $$1 = E[X \mid X \leq 1](1-e^{-1}) + 2 \cdot e^{-1}$$
> > $$E[X \mid X \leq 1] = \frac{1 - 2e^{-1}}{1 - e^{-1}}$$
> >
> > **Langkah 4: Hitung Numerik**
> > $e^{-1} \approx 0{,}3679$
> > $$E[X \mid X \leq 1] = \frac{1 - 2(0{,}3679)}{1 - 0{,}3679} = \frac{1 - 0{,}7358}{0{,}6321} = \frac{0{,}2642}{0{,}6321} \approx 0{,}418$$
> >
> > **Hasil Akhir:** **(b)**. $\approx 0{,}418$ — sekurang-kurangnya $0{,}25$ tapi kurang dari $0{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa sifat memoryless distribusi eksponensial: $E[X \mid X > c] = c + \mu$, bukan $\mu$.
> > > - Mengabaikan bahwa kondisi $E[X|X>k]=2$ memberikan informasi untuk mencari $k$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan ekspektasi bersyarat distribusi eksponensial → gunakan sifat memoryless terlebih dahulu.
> > > - Jika soal memiliki parameter yang tidak diketahui ($k$) → gunakan informasi yang diberikan untuk mencari parameter tersebut dulu.

---

## **No. 7**

Sebuah dadu bersisi 6 dengan sisi bernomor 1 sampai 6 dilempar secara berulang. Setiap lemparan saling independen. Lemparan dadu akan berulang dilakukan hingga jumlah angka-angka yang keluar dari setiap lemparan dadu tersebut sedikitnya berjumlah 14. Tentukanlah probabilitas sehingga diperlukan paling sedikit 4 kali lemparan untuk mencapai hal tersebut.

a. Kurang dari $0{,}2$  
b. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$  
c. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 7**
> **(e). Sekurang-kurangnya $0{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> > "Diperlukan paling sedikit 4 lemparan" = komplemen dari "total $\geq 14$ dicapai dalam 1, 2, atau 3 lemparan".
> > $P(\text{butuh} \geq 4) = 1 - P(\text{total} \geq 14 \text{ dalam} \leq 3 \text{ lemparan})$
>
> **Diketahui:**
> - Setiap lemparan menghasilkan nilai $1,2,3,4,5,6$ dengan peluang sama $1/6$
> - Target terpenuhi: jumlah kumulatif $\geq 14$
> - Target: $P(\text{diperlukan} \geq 4 \text{ lemparan})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Formulasi Komplemen**
> > $$P(\text{butuh} \geq 4) = 1 - P(\text{total} \geq 14 \text{ dalam} \leq 3 \text{ lemparan})$$
> > = $1 - P(\text{total} \geq 14 \text{ dalam 1 lemparan}) - P(\text{total} \geq 14 \text{ dalam tepat 2 lemparan}) - P(\text{total} \geq 14 \text{ dalam tepat 3 lemparan})$
> >
> > **Langkah 2: Peluang Total $\geq 14$ dalam 1 Lemparan**
> > Nilai maksimum 1 dadu = 6 < 14. Tidak mungkin.
> > $P_1 = 0$
> >
> > **Langkah 3: Peluang Total $\geq 14$ dalam Tepat 2 Lemparan**
> > Lemparan 1 belum mencapai 14 (pasti, karena maks = 6), lemparan 2 membuat total $\geq 14$.
> > Artinya $X_1 + X_2 \geq 14$. Nilai maks = 12 < 14. Tidak mungkin juga.
> > $P_2 = 0$
> >
> > **Langkah 4: Peluang Total $\geq 14$ dalam Tepat 3 Lemparan**
> > Harus: $X_1 + X_2 < 14$ (terpenuhi otomatis karena maks = 12) dan $X_1 + X_2 + X_3 \geq 14$.
> > Juga, belum selesai setelah 2 lemparan: $X_1 + X_2 < 14$ (selalu benar).
> > Jadi cari: $P(X_1 + X_2 + X_3 \geq 14)$ di mana $X_1+X_2 \leq 12$ (otomatis) dan $X_3 \leq 6$.
> >
> > Minimum $X_1+X_2+X_3 = 3$, maksimum = 18.
> > Kita cari: pasangan $(x_1, x_2, x_3)$ dengan $x_1+x_2+x_3 \geq 14$ dan $x_i \in \{1,...,6\}$.
> >
> > Total outcome = $6^3 = 216$.
> > Hitung outcome $x_1+x_2+x_3 \geq 14$:
> > - $S = 14$: Banyaknya solusi $x_1+x_2+x_3=14$, $1 \leq x_i \leq 6$.
> >   Substitusi $y_i = x_i -1$: $y_1+y_2+y_3=11$, $0 \leq y_i \leq 5$.
> >   Dengan inklusi-eksklusi: $\binom{13}{2} - 3\binom{7}{2} + 3\binom{1}{2} = 78 - 63 + 0 = 15$
> > - $S = 15$: $y_1+y_2+y_3=12$, $0 \leq y_i \leq 5$: $\binom{14}{2} - 3\binom{8}{2} + 3\binom{2}{2} = 91 - 84 + 3 = 10$
> > - $S = 16$: $y_1+y_2+y_3=13$: $\binom{15}{2} - 3\binom{9}{2} + 3\binom{3}{2} = 105 - 108 + 9 = 6$
> > - $S = 17$: $y_1+y_2+y_3=14$: $\binom{16}{2} - 3\binom{10}{2} + 3\binom{4}{2} = 120 - 135 + 18 = 3$
> > - $S = 18$: hanya $(6,6,6)$: 1
> >
> > Total favorable = $15 + 10 + 6 + 3 + 1 = 35$
> > $P_3 = \frac{35}{216}$
> >
> > **Langkah 5: Hitung Hasil Akhir**
> > $$P(\text{butuh} \geq 4) = 1 - 0 - 0 - \frac{35}{216} = \frac{181}{216} \approx 0{,}838$$
> >
> > **Hasil Akhir:** **(e)**. $\approx 0{,}838$ — sekurang-kurangnya $0{,}8$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa 1 atau 2 lemparan tidak bisa mencapai total 14, menyebabkan perhitungan yang tidak perlu.
> > > - Salah menghitung jumlah solusi integer dengan inklusi-eksklusi (lupa batas atas $x_i \leq 6$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Paling sedikit 4 kali lemparan" = butuh $\geq 4$ lemparan = total tidak mencapai 14 dalam 3 lemparan pertama.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal tentang "lemparan berulang hingga kondisi terpenuhi" → gunakan komplemen dan hitung kapan kondisi pertama kali terpenuhi.

---

## **No. 8**

Andi ingin pergi mendaki gunung, maka dari itu dia ingin membawa sebuah senter yang dapat menyala minimal selama 48 jam. Sebuah senter dapat menyala hanya dengan menggunakan sebuah baterai. Untuk sebuah baterai memiliki lama hidup berdistribusi normal dengan mean sebesar 8 jam dan standar deviasi sebesar 2 jam. Diasumsikan lama hidup baterai saling independen satu sama lain.

Tentukanlah jumlah minimal baterai yang harus dibawa Andi agar ia memiliki probabilitas sebesar 99% bahwa senter tersebut akan menyala minimal selama 48 jam.

a. $6$  
b. $7$  
c. $8$  
d. $9$  
e. $10$

> [!summary]+ **Jawaban No. 8**
> **(c). $8$ baterai**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]], [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.8; Walpole Bab 8 |
>
> > [!info]+ **Rumus**  
> > Jika $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$ i.i.d., maka $S_n = \sum X_i \sim N(n\mu, n\sigma^2)$.
> > $$P(S_n \geq 48) = P\left(Z \geq \frac{48 - n\mu}{\sigma\sqrt{n}}\right) \geq 0{,}99$$
>
> **Diketahui:**
> - $X_i \sim N(8, 4)$ (mean 8 jam, variansi $\sigma^2 = 4$)
> - $S_n = X_1 + \cdots + X_n$ = total lama nyala
> - Target: $P(S_n \geq 48) \geq 0{,}99$, cari $n$ minimum
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standarisasi**
> > $S_n \sim N(8n, 4n)$
> > $$P(S_n \geq 48) = P\left(Z \geq \frac{48 - 8n}{2\sqrt{n}}\right) \geq 0{,}99$$
> >
> > **Langkah 2: Syarat dari Tabel Normal**
> > $P(Z \geq z) \geq 0{,}99 \iff z \leq -z_{0{,}99} = -2{,}326$
> > $$\frac{48 - 8n}{2\sqrt{n}} \leq -2{,}326$$
> > $$48 - 8n \leq -4{,}652\sqrt{n}$$
> > $$8n - 4{,}652\sqrt{n} - 48 \geq 0$$
> >
> > **Langkah 3: Uji Nilai $n$**
> > Substitusi $n = 7$: $8(7) - 4{,}652\sqrt{7} - 48 = 56 - 12{,}31 - 48 = -4{,}31 < 0$ ✗
> > Substitusi $n = 8$: $8(8) - 4{,}652\sqrt{8} - 48 = 64 - 13{,}16 - 48 = 2{,}84 > 0$ ✓
> >
> > **Hasil Akhir:** **(c)**. $n_{\min} = 8$ baterai
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah arah ketidaksamaan: $P(S_n \geq 48) \geq 0{,}99$ berarti titik kritis di ekor kiri ($z_{0{,}01} = -2{,}326$), bukan ekor kanan.
> > > - Menggunakan nilai $z_{0{,}95} = 1{,}645$ (untuk peluang 95%) alih-alih $z_{0{,}99} = 2{,}326$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal "probabilitas $\geq$ suatu nilai minimal" dengan distribusi normal → perhatikan arah ketidaksamaan sebelum lookup tabel.

---

## **No. 9**

Lama waktu yang diperlukan seorang teknisi untuk memperbaiki perangkat mekanis tertentu yang tidak berfungsi berdistribusi seragam antara 3 dan 6 jam. Misalkan dua perangkat gagal secara bersamaan, dan pekerjaan perbaikan dimulai secara bersamaan oleh dua teknisi yang saling independen.

Tentukan lama waktu yang diharapkan hingga terdapat satu perangkat yang selesai diperbaiki.

a. $3{,}25$  
b. $3{,}5$  
c. $3{,}75$  
d. $4$  
e. $4{,}25$

> [!summary]+ **Jawaban No. 9**
> **(d). $4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]], [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > Jika $X, Y \sim U(a,b)$ i.i.d., maka CDF dari minimum $M = \min(X,Y)$:
> > $$F_M(m) = 1 - [1-F_X(m)]^2, \quad f_M(m) = 2[1-F_X(m)]f_X(m)$$
> > $$E[M] = \int_3^6 m \cdot f_M(m)\, dm$$
>
> **Diketahui:**
> - $X, Y \sim U(3,6)$ i.i.d.
> - $M = \min(X,Y)$ = waktu selesai pertama
> - Target: $E[M]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: PDF dari $U(3,6)$**
> > $$f_X(x) = \frac{1}{3}, \quad F_X(x) = \frac{x-3}{3}, \quad 3 \leq x \leq 6$$
> >
> > **Langkah 2: PDF dari $M = \min(X,Y)$**
> > $$f_M(m) = 2[1-F_X(m)]f_X(m) = 2 \cdot \frac{6-m}{3} \cdot \frac{1}{3} = \frac{2(6-m)}{9}, \quad 3 \leq m \leq 6$$
> >
> > **Langkah 3: Hitung $E[M]$**
> > $$E[M] = \int_3^6 m \cdot \frac{2(6-m)}{9}\, dm = \frac{2}{9}\int_3^6 (6m - m^2)\, dm$$
> > $$= \frac{2}{9}\left[3m^2 - \frac{m^3}{3}\right]_3^6 = \frac{2}{9}\left[\left(108 - 72\right) - \left(27 - 9\right)\right]$$
> > $$= \frac{2}{9}[36 - 18] = \frac{2}{9} \times 18 = 4$$
> >
> > **Hasil Akhir:** **(d)**. $E[M] = 4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[\min(X,Y)] = \frac{a+b}{2}$ (rata-rata uniform) — ini salah; rata-rata minimum LEBIH KECIL dari rata-rata distribusi aslinya.
> > > - Lupa faktor 2 dalam PDF dari minimum ketika ada 2 variabel i.i.d.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal tentang "selesai pertama" dari beberapa proses → ini adalah distribusi minimum, bukan rata-rata.
> > > - Untuk $n$ variabel i.i.d.: $f_{\min}(x) = n[1-F(x)]^{n-1}f(x)$.

---

## **No. 10**

Diketahui variabel acak $X$ memiliki fungsi densitas sebagai berikut:

$$f(x) = x, \quad \text{untuk } 0 < x < 1$$

$$P[X = 0] = a \quad \text{dan} \quad P[X = 1] = b$$

$$P[X < 0] = P[X > 1] = 0$$

Tentukan nilai dari $a$ sedemikian sehingga nilai dari $Var[X]$ maksimal.

a. $0 \leq a < 0{,}1$  
b. $0{,}1 \leq a < 0{,}2$  
c. $0{,}2 \leq a < 0{,}3$  
d. $0{,}3 \leq a < 0{,}4$  
e. $a \geq 0{,}4$

> [!summary]+ **Jawaban No. 10**
> **(d). $0{,}3 \leq a < 0{,}4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > Untuk distribusi campuran (mixed): $E[X] = a \cdot 0 + \int_0^1 x \cdot f(x)\, dx \cdot c + b \cdot 1$ di mana $c$ adalah konstanta normalisasi.
> > Normalisasi: $a + \int_0^1 c \cdot x\, dx + b = 1$, sehingga $a + c/2 + b = 1$.
>
> **Diketahui:**
> - $X$ adalah distribusi campuran: massa di $x=0$ (prob. $a$), massa di $x=1$ (prob. $b$), dan PDF $f(x) = cx$ pada $(0,1)$
> - Normalisasi: $a + b + c \cdot \int_0^1 x\, dx = 1 \Rightarrow a + b + c/2 = 1$
> - Target: cari $a$ yang memaksimalkan $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Normalisasi**
> > Bagian kontinu memiliki PDF berbentuk $cx$ (dengan $c$ skalar). Total massa di bagian kontinu:
> > $$\int_0^1 cx\, dx = \frac{c}{2}$$
> > Normalisasi: $a + b + \frac{c}{2} = 1$. Misalkan massa kontinu = $m = c/2$, maka $a + b + m = 1$.
> >
> > Perhatikan: bentuk PDF kontinu adalah $cx$ (proporsional $x$). Jika massa kontinu adalah $m$, maka PDF = $\frac{2m \cdot x}{1} = 2mx$ untuk $0 < x < 1$ (karena $\int_0^1 2mx\, dx = m$).
> >
> > **Langkah 2: Hitung $E[X]$**
> > $$E[X] = a \cdot 0 + \int_0^1 x \cdot 2mx\, dx + b \cdot 1 = 2m \cdot \frac{1}{3} + b = \frac{2m}{3} + b$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> > $$E[X^2] = a \cdot 0 + \int_0^1 x^2 \cdot 2mx\, dx + b \cdot 1 = 2m \cdot \frac{1}{4} + b = \frac{m}{2} + b$$
> >
> > **Langkah 4: Ekspresi Var(X) sebagai Fungsi $a$**
> > Dari normalisasi: $m = 1 - a - b$. Untuk memaksimalkan variansi, perlu relasi antara $a$ dan $b$.
> > Dari kondisi PDF $f(x) = x$ (dengan koefisien 1, bukan $c$), kita interpretasikan bahwa $f(x) = x$ sudah merupakan PDF unnormalized — sehingga massa kontinu yang "murni" adalah $\int_0^1 x\, dx = 1/2$. Maka massa kontinu yang tersisa setelah mempertimbangkan $a$ dan $b$ adalah $1/2 \cdot (1-a-b)$ per unit ... 
> > 
> > Lebih tepat: $f(x) = x$ pada $(0,1)$ sebagai "template", dengan skala $c$ sehingga $a + c/2 + b = 1$.
> > $m = c/2 = 1 - a - b$, sehingga $c = 2(1-a-b)$.
> >
> > $$E[X] = \frac{2(1-a-b)}{3} + b = \frac{2}{3} - \frac{2a}{3} - \frac{2b}{3} + b = \frac{2}{3} - \frac{2a}{3} + \frac{b}{3}$$
> > $$E[X^2] = (1-a-b) + b = 1 - a$$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = (1-a) - \left(\frac{2-2a+b}{3}\right)^2$$
> >
> > **Langkah 5: Optimalkan — Minimasi atas $b$**
> > Untuk nilai $a$ tetap, $\text{Var}(X)$ dimaksimalkan dengan meminimalkan $(E[X])^2$. 
> > $E[X] = \frac{2-2a+b}{3}$, diminimalkan ketika $b = 0$ (karena $b \geq 0$ dan koefisien $b$ positif, maka $b=0$ paling kecil).
> > Dengan $b = 0$: constraint $a + c/2 = 1 \Rightarrow c = 2(1-a)$, valid jika $0 \leq a \leq 1$.
> >
> > $$E[X]\big|_{b=0} = \frac{2(1-a)}{3}, \quad E[X^2]\big|_{b=0} = 1-a$$
> > $$\text{Var}(X)\big|_{b=0} = (1-a) - \frac{4(1-a)^2}{9}$$
> > Misalkan $u = 1-a \in [0,1]$:
> > $$g(u) = u - \frac{4u^2}{9}$$
> > $$g'(u) = 1 - \frac{8u}{9} = 0 \Rightarrow u = \frac{9}{8} > 1$$
> > Karena $u \leq 1$ dan $g'(u) > 0$ untuk $u < 9/8$, maka $g(u)$ meningkat pada $[0,1]$.
> > Maksimum di $u = 1 \Rightarrow a = 0$?
> >
> > Namun perlu cek juga dengan $b > 0$. Dengan $b$ bebas:
> > $$\text{Var}(X) = (1-a) - \frac{(2-2a+b)^2}{9}$$
> > $\partial/\partial b$: negatif, jadi $b=0$ optimal. ✓
> > $\partial/\partial a$: $-1 - \frac{2(2-2a+b)(-2)}{9} = -1 + \frac{4(2-2a)}{9}$. Set = 0:
> > $$\frac{4(2-2a)}{9} = 1 \Rightarrow 2-2a = \frac{9}{4} \Rightarrow a = 2 - \frac{9}{8} = \frac{7}{8}$$
> > Namun $a = 7/8$ tidak memenuhi karena: $g'(a) = -1 + \frac{4(2-2a)}{9}$, saat $a=0$: $= -1 + 8/9 < 0$.
> >
> > Ini berarti $\text{Var}$ menurun dalam $a$ saat $b=0$. Coba kasus $b > 0$ secara bersamaan:
> > Kondisi orde pertama terhadap $a$: 
> > $$-1 + \frac{4(2-2a+b)}{9} = 0 \Rightarrow 2-2a+b = \frac{9}{4}$$
> > $$b = \frac{9}{4} - 2 + 2a = \frac{1}{4} + 2a$$
> > Substitusi ke normalisasi ($a + b + m = 1$, $m = 1-a-b$): valid untuk semua $a$, $b \geq 0$.
> > Dengan $b = 1/4 + 2a$ dan $b \leq 1 - a$ (dari $m \geq 0$):
> > $1/4 + 2a \leq 1 - a \Rightarrow 3a \leq 3/4 \Rightarrow a \leq 1/4$.
> > Dan $b \geq 0$: otomatis.
> >
> > Hitung $\text{Var}$ pada titik kritis ini:
> > $E[X] = (2-2a+b)/3 = (9/4)/3 = 3/4$
> > $E[X^2] = 1 - a$
> > $\text{Var} = (1-a) - 9/16$
> > Dimaksimalkan saat $a$ minimum = $0$: $\text{Var} = 1 - 9/16 = 7/16$.
> >
> > Ini kontradiksi: $a=0$ optimal? Periksa batas $a=1/4$ (batas atas):
> > $b = 1/4 + 1/2 = 3/4$, $m = 1 - 1/4 - 3/4 = 0$: Var $= 3/4 - 9/16 = 3/16$.
> > 
> > Jadi variansi maksimal di internal saat $a$ sekecil mungkin (mendekati 0) dengan $b = 1/4$.
> > Namun soal meminta $a$ yang memaksimalkan, dan jawabannya dari kunci adalah **(d)**: $0{,}3 \leq a < 0{,}4$.
> > 
> > Kemungkinan interpretasi berbeda: $f(x) = x$ adalah PDF penuh (tanpa skala $c$), dengan $a + b + 1/2 = 1$, yaitu $a + b = 1/2$, maka $b = 1/2 - a$.
> >
> > Dengan constraint $b = 1/2 - a$, $0 \leq a \leq 1/2$:
> > $E[X] = \frac{2}{3} \cdot \frac{1}{2} + b = \frac{1}{3} + (1/2 - a) = \frac{5}{6} - a$
> > $E[X^2] = \frac{1}{2} \cdot \frac{1}{2} + b = \frac{1}{4} + (1/2 - a) = \frac{3}{4} - a$
> > $\text{Var}(X) = (3/4 - a) - (5/6 - a)^2$
> > $= 3/4 - a - 25/36 + 5a/3 - a^2$
> > $= -a^2 + (5/3 - 1)a + (3/4 - 25/36)$
> > $= -a^2 + \frac{2}{3}a + \frac{2}{9}$
> >
> > Turunan: $-2a + 2/3 = 0 \Rightarrow a = 1/3 \approx 0{,}333$
> >
> > $a = 1/3 \in [0{,}3, 0{,}4)$ ✓
> >
> > **Hasil Akhir:** **(d)**. $a = 1/3 \approx 0{,}333$ — dalam rentang $0{,}3 \leq a < 0{,}4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa ini adalah distribusi campuran (mixed distribution) dengan massa titik di 0 dan 1 serta PDF kontinu di $(0,1)$.
> > > - Tidak menggunakan constraint normalisasi untuk menyatakan $b$ dalam $a$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada massa titik ($P[X=c] > 0$) bersama PDF kontinu → normalisasi: jumlah semua massa = 1.
> > > - Optimasi variansi → turunkan terhadap parameter bebas dan set turunan = 0.

---

## **No. 11**

Diketahui $X$ memiliki distribusi bernilai bilangan bulat non-negatif diskrit dengan mean 3 dan variansi sebesar 10. Dua distribusi baru dibuat dari $X$. $Y$ memiliki fungsi probabilitas yang sama dengan $X$ untuk $Y = 2, 3, 4, \ldots$ tetapi $P[Y = 0] = 0$ dan $P[Y = 1] = P[X = 0] + P[X = 1]$. $Z$ memiliki fungsi probabilitas yang sama dengan $X$ untuk $Z = 3, 4, \ldots$ tetapi $P[Z = 0] = P[Z = 1] = 0$ dan $P[Z = 2] = P[X = 0] + P[X = 1] + P[X = 2]$. Diketahui bahwa mean dari $Y$ adalah $3{,}2$ dan mean dari $Z$ adalah $3{,}7$.

Tentukanlah variansi dari $Z$. (Pilihlah jawaban terdekat)

a. $7$  
b. $7{,}2$  
c. $7{,}4$  
d. $7{,}6$  
e. $7{,}8$

> [!summary]+ **Jawaban No. 11**
> **(a). $7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.1–1.6; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> > $E[X] = \sum_x x \cdot p_X(x)$, $E[X^2] = \sum_x x^2 \cdot p_X(x)$, $\text{Var}(X) = E[X^2] - (E[X])^2$
> > Untuk distribusi yang dimodifikasi: hitung pergeseran nilai harapan dan momen kedua.
>
> **Diketahui:**
> - $E[X] = 3$, $\text{Var}(X) = 10 \Rightarrow E[X^2] = \text{Var}(X) + (E[X])^2 = 19$
> - $E[Y] = 3{,}2$, $E[Z] = 3{,}7$
> - Target: $\text{Var}(Z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Notasi**
> > Misalkan $p_k = P(X=k)$, $s_0 = p_0$, $s_1 = p_0+p_1$, $s_2 = p_0+p_1+p_2$.
> >
> > **Langkah 2: Hitung $E[Y]$ untuk Menemukan $p_0$**
> > $Y$ identik dengan $X$ untuk nilai $\geq 2$, kecuali massa $p_0+p_1$ dipindah dari nilai asalnya ke nilai 1.
> > $$E[Y] = E[X] - 0 \cdot p_0 - 1 \cdot p_1 + 1 \cdot (p_0+p_1)$$
> > $$= 3 - p_1 + p_0 + p_1 = 3 + p_0$$
> > $$3 + p_0 = 3{,}2 \Rightarrow p_0 = 0{,}2$$
> >
> > **Langkah 3: Hitung $E[Z]$ untuk Menemukan $p_1$**
> > $Z$ identik dengan $X$ untuk nilai $\geq 3$, massa $s_2 = p_0+p_1+p_2$ dipindah ke nilai 2.
> > $$E[Z] = E[X] - 0 \cdot p_0 - 1 \cdot p_1 - 2 \cdot p_2 + 2(p_0+p_1+p_2)$$
> > $$= 3 + 2p_0 + p_1$$
> > $$3 + 2(0{,}2) + p_1 = 3{,}7 \Rightarrow p_1 = 0{,}3$$
> >
> > **Langkah 4: Hitung $E[Z^2]$**
> > $$E[Z^2] = E[X^2] - 0^2 p_0 - 1^2 p_1 - 2^2 p_2 + 2^2(p_0+p_1+p_2)$$
> > $$= 19 - p_1 - 4p_2 + 4(p_0+p_1+p_2)$$
> > $$= 19 + 4p_0 + 3p_1 = 19 + 4(0{,}2) + 3(0{,}3) = 19 + 0{,}8 + 0{,}9 = 20{,}7$$
> >
> > **Langkah 5: Hitung Var(Z)**
> > $$\text{Var}(Z) = E[Z^2] - (E[Z])^2 = 20{,}7 - (3{,}7)^2 = 20{,}7 - 13{,}69 = 7{,}01 \approx 7$$
> >
> > **Hasil Akhir:** **(a)**. $\text{Var}(Z) \approx 7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung perubahan $E[X]$ ketika probabilitas dipindah — harus menghitung selisih kontribusi nilai lama dan nilai baru.
> > > - Lupa bahwa $E[X^2] = \text{Var}(X) + (E[X])^2 = 10 + 9 = 19$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi dimodifikasi dengan "memindahkan massa" → gunakan: $E[Z] = E[X] + \sum_k (k_{\text{baru}} - k_{\text{lama}}) p_k$.

---

## **No. 12**

Perusahaan asuransi mengasuransikan 800 kerugian yang saling independen. Dari 800 kerugian tersebut, terdapat 400 kerugian masing-masing berdistribusi eksponensial dengan rata-rata sebesar 1, dan 400 kerugian lainnya masing-masing berdistribusi eksponensial dengan rata-rata sebesar 2. Perusahaan asuransi menggunakan aproksimasi normal untuk menemukan setiap hal berikut:

(i) persentil ke-95 dari agregat 400 kerugian pertama masing-masing dengan rata-rata sebesar 1, misalkan $A$,  
(ii) persentil ke-95 dari agregat 400 kerugian pertama masing-masing dengan rata-rata sebesar 2, misalkan $B$, dan  
(iii) persentil ke-95 dari keseluruhan 800 kerugian, misalkan $C$.  

Tentukanlah nilai dari $\dfrac{C}{A + B}$.

a. Kurang dari $0{,}2$  
b. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$  
c. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 12**
> **(e). Sekurang-kurangnya $0{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]], [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.3 Teorema Limit Pusat]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Walpole Bab 8; Hogg-Tanis-Zimm Bab 5 |
>
> > [!info]+ **Rumus**  
> > Untuk $X_i \sim \text{Exp}(\lambda)$: $E[X_i] = 1/\lambda$, $\text{Var}(X_i) = 1/\lambda^2$.
> > Persentil ke-95 dengan aproksimasi normal: $\mu_S + z_{0{,}95} \sigma_S = \mu_S + 1{,}645 \sigma_S$
>
> **Diketahui:**
> - Grup 1: 400 variabel $\sim \text{Exp}(1)$, mean = 1, variansi = 1
> - Grup 2: 400 variabel $\sim \text{Exp}(1/2)$, mean = 2, variansi = 4
> - Target: $C/(A+B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $A$ (persentil ke-95 agregat grup 1)**
> > $S_1 = \sum_{i=1}^{400} X_i^{(1)}$: $E[S_1] = 400$, $\text{Var}(S_1) = 400$, $\sigma_{S_1} = 20$
> > $$A = 400 + 1{,}645 \times 20 = 400 + 32{,}9 = 432{,}9$$
> >
> > **Langkah 2: Hitung $B$ (persentil ke-95 agregat grup 2)**
> > $S_2 = \sum_{i=1}^{400} X_i^{(2)}$: $E[S_2] = 800$, $\text{Var}(S_2) = 1600$, $\sigma_{S_2} = 40$
> > $$B = 800 + 1{,}645 \times 40 = 800 + 65{,}8 = 865{,}8$$
> >
> > **Langkah 3: Hitung $C$ (persentil ke-95 keseluruhan)**
> > $S = S_1 + S_2$ (independen): $E[S] = 1200$, $\text{Var}(S) = 400 + 1600 = 2000$, $\sigma_S = \sqrt{2000} = 20\sqrt{5}$
> > $$C = 1200 + 1{,}645 \times 20\sqrt{5} = 1200 + 1{,}645 \times 44{,}72 = 1200 + 73{,}56 = 1273{,}56$$
> >
> > **Langkah 4: Hitung Rasio**
> > $$A + B = 432{,}9 + 865{,}8 = 1298{,}7$$
> > $$\frac{C}{A+B} = \frac{1273{,}56}{1298{,}7} \approx 0{,}981$$
> >
> > **Hasil Akhir:** **(e)**. $\approx 0{,}981$ — sekurang-kurangnya $0{,}8$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $C = A + B$ karena persentil bersifat aditif — ini SALAH. Variansi bersifat aditif, bukan standar deviasi, sehingga $\sigma_S \neq \sigma_{S_1} + \sigma_{S_2}$.
> > > - Salah menghitung variansi $\text{Exp}(\lambda)$: $\text{Var} = 1/\lambda^2$, bukan $1/\lambda$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menggabungkan dua kelompok dan membandingkan persentil → $\sigma_{\text{gabungan}} = \sqrt{\sigma_1^2 + \sigma_2^2} < \sigma_1 + \sigma_2$, sehingga $C < A + B$.

---

## **No. 13**

Misalkan $X$ dan $Y$ adalah variabel acak yang saling independen dan masing-masing berdistribusi seragam pada interval $[0, 1]$. Diketahui $U = \min\{X, Y\}$ dan $W = \max\{X, Y\}$.

Tentukan nilai dari $Cov(U, W)$.

a. $\dfrac{1}{2}$  
b. $\dfrac{1}{4}$  
c. $\dfrac{1}{16}$  
d. $\dfrac{1}{24}$  
e. $\dfrac{1}{36}$

> [!summary]+ **Jawaban No. 13**
> **(e). $\dfrac{1}{12}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]], [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > $\text{Cov}(U,W) = E[UW] - E[U]E[W]$
> > Kunci: $U + W = X + Y$, $UW = XY$ (karena $\{U,W\} = \{X,Y\}$ sebagai himpunan)
>
> **Diketahui:**
> - $X, Y \sim U(0,1)$ i.i.d., $E[X] = 1/2$, $E[X^2] = 1/3$, $\text{Var}(X) = 1/12$
> - Target: $\text{Cov}(U,W)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Identitas Aljabar**
> > Karena $\{U,W\} = \{X,Y\}$ (hanya diurutkan):
> > - $U + W = X + Y$
> > - $UW = XY$
> >
> > **Langkah 2: Hitung Momen yang Dibutuhkan**
> > $$E[U] + E[W] = E[X] + E[Y] = 1$$
> > $$E[UW] = E[XY] = E[X]E[Y] = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$$ (karena $X \perp Y$)
> >
> > **Langkah 3: Temukan $E[U]$ dan $E[W]$ dari Order Statistics**
> > Untuk $X,Y \sim U(0,1)$ i.i.d., order statistics: $E[U] = E[Y_{(1)}] = \frac{1}{3}$, $E[W] = E[Y_{(2)}] = \frac{2}{3}$
> >
> > **Langkah 4: Hitung Kovariansi**
> > $$\text{Cov}(U,W) = E[UW] - E[U]E[W] = \frac{1}{4} - \frac{1}{3} \cdot \frac{2}{3} = \frac{1}{4} - \frac{2}{9} = \frac{9}{36} - \frac{8}{36} = \frac{1}{36}$$
> >
> > **Hasil Akhir:** **(e)**. $\text{Cov}(U,W) = \dfrac{1}{36}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Cov}(U,W) = 0$ karena "min dan max dari variabel independen juga independen" — SALAH, U dan W TIDAK independen.
> > > - Lupa identitas $UW = XY$ yang menyederhanakan perhitungan $E[UW]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal tentang min dan max dari variabel i.i.d. → gunakan identitas $U+W = \sum X_i$ dan $UW = \prod X_i$ untuk perhitungan yang efisien.

---

## **No. 14**

Seorang dokter hewan melakukan studi kematian selama 3 tahun pada kucing dan diabetes. Dalam studi tersebut, 60% kucing sehat, 30% menderita pra-diabetes, dan 10% menderita diabetes. Dalam periode tiga tahun ditemukan bahwa kucing pra-diabetes dua kali lebih mungkin mati daripada kucing sehat dan $0{,}5$ kali lebih mungkin mati daripada kucing diabetes. Seekor kucing yang dipilih secara acak dari kelompok studi ditemukan telah mati selama periode tiga tahun.

Tentukanlah probabilitas bahwa kucing yang dipilih tersebut menderita diabetes.

a. $\dfrac{1}{2}$  
b. $\dfrac{1}{3}$  
c. $\dfrac{1}{4}$  
d. $\dfrac{1}{5}$  
e. $\dfrac{1}{6}$

> [!summary]+ **Jawaban No. 14**
> **(c). $\dfrac{1}{4}$**
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
> > Teorema Bayes:
> > $$P(H_i \mid D) = \frac{P(D \mid H_i) P(H_i)}{\sum_j P(D \mid H_j) P(H_j)}$$
>
> **Diketahui:**
> - $P(\text{Sehat}) = 0{,}6$, $P(\text{Pra-DM}) = 0{,}3$, $P(\text{DM}) = 0{,}1$
> - $P(\text{Mati} \mid \text{Pra-DM}) = 2 P(\text{Mati} \mid \text{Sehat})$
> - $P(\text{Mati} \mid \text{Pra-DM}) = 0{,}5 \times P(\text{Mati} \mid \text{DM})$
> - Target: $P(\text{DM} \mid \text{Mati})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tetapkan Nilai Relatif**
> > Misalkan $P(\text{Mati} \mid \text{Sehat}) = q$.
> > $P(\text{Mati} \mid \text{Pra-DM}) = 2q$
> > $P(\text{Mati} \mid \text{DM}) = 4q$ (karena pra-DM = 0,5 × DM → DM = 2 × pra-DM = 4q)
> >
> > **Langkah 2: Hukum Total Probabilitas**
> > $$P(\text{Mati}) = 0{,}6q + 0{,}3(2q) + 0{,}1(4q) = 0{,}6q + 0{,}6q + 0{,}4q = 1{,}6q$$
> >
> > **Langkah 3: Teorema Bayes**
> > $$P(\text{DM} \mid \text{Mati}) = \frac{P(\text{Mati} \mid \text{DM}) P(\text{DM})}{P(\text{Mati})} = \frac{4q \times 0{,}1}{1{,}6q} = \frac{0{,}4}{1{,}6} = \frac{1}{4}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menginterpretasikan "0,5 kali lebih mungkin": $P(\text{Pra-DM}) = 0{,}5 \times P(\text{DM})$, bukan sebaliknya.
> > > - Menghilangkan $q$ sebelum cukup yakin semua ekspresi sudah dalam $q$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika probabilitas bersyarat dinyatakan dalam rasio relatif → tetapkan satu variabel (misalnya $q$) dan ekspresikan semua dalam $q$; $q$ akan saling menghilang saat Bayes dihitung.

---

## **No. 15**

Sebuah koin memiliki kemungkinan dua kali lipat untuk memunculkan angka dibandingkan gambar. Jika koin dilempar secara terpisah, tentukanlah probabilitas munculnya gambar ketiga kalinya pada lemparan keenam.

a. $\dfrac{8}{81}$  
b. $\dfrac{40}{243}$  
c. $\dfrac{40}{729}$  
d. $\dfrac{80}{243}$  
e. $\dfrac{80}{729}$

> [!summary]+ **Jawaban No. 15**
> **(e). $\dfrac{80}{729}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Distribusi Binomial Negatif: probabilitas sukses ke-$r$ terjadi pada percobaan ke-$n$:
> > $$P(X = n) = \binom{n-1}{r-1} p^r (1-p)^{n-r}$$
> > Di sini "sukses" = gambar, $r=3$, $n=6$.
>
> **Diketahui:**
> - $P(\text{angka}) = 2/3$, $P(\text{gambar}) = 1/3$ (perbandingan 2:1)
> - Target: Gambar ke-3 muncul tepat pada lemparan ke-6
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Probabilitas**
> > Angka : Gambar = 2 : 1, jadi $p_{\text{gambar}} = 1/3$, $p_{\text{angka}} = 2/3$.
> >
> > **Langkah 2: Terapkan Binomial Negatif**
> > Gambar ke-3 pada lemparan ke-6: dalam 5 lemparan pertama ada tepat 2 gambar dan 3 angka, lemparan ke-6 adalah gambar.
> > $$P = \binom{5}{2}\left(\frac{1}{3}\right)^2\left(\frac{2}{3}\right)^3 \times \frac{1}{3}$$
> > $$= 10 \times \frac{1}{9} \times \frac{8}{27} \times \frac{1}{3} = 10 \times \frac{8}{729} = \frac{80}{729}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{80}{729}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa lemparan ke-6 HARUS gambar (dikondisikan), sehingga kombinatorial hanya untuk 5 lemparan pertama.
> > > - Salah menghitung $p$: "dua kali lebih mungkin angka" berarti $p(\text{angka}) = 2/3$, bukan $p(\text{gambar}) = 2/3$.
> >
> > > [!CAUTION] Red Flags
> > > - "Sukses ke-$r$ pada percobaan ke-$n$" → ini Binomial Negatif, formula: $\binom{n-1}{r-1}p^r(1-p)^{n-r}$.

---

## **No. 16**

Diketahui fungsi densitas bersama dari variabel acak $X$ dan $Y$ sebagai berikut:

$$f(x, y) = 2e^{-(x+y)} \quad \text{untuk } 0 < x < y < \infty$$

Tentukan nilai dari $Cov(X + Y, X - Y)$.

a. $-2$  
b. $-1$  
c. $0$  
d. $1$  
e. $2$

> [!summary]+ **Jawaban No. 16**
> **(b). $-1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]], [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.2 Distribusi Marginal]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.4; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > $\text{Cov}(X+Y, X-Y) = \text{Var}(X) - \text{Var}(Y)$
> > (menggunakan bilinearitas kovariansi dan $\text{Cov}(X,Y) = \text{Cov}(Y,X)$)
>
> **Diketahui:**
> - $f(x,y) = 2e^{-(x+y)}$ untuk $0 < x < y < \infty$
> - Target: $\text{Cov}(X+Y, X-Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan dengan Bilinearitas**
> > $$\text{Cov}(X+Y, X-Y) = \text{Cov}(X,X) - \text{Cov}(X,Y) + \text{Cov}(Y,X) - \text{Cov}(Y,Y)$$
> > $$= \text{Var}(X) - \text{Var}(Y)$$
> >
> > **Langkah 2: Cari Distribusi Marginal**
> > $$f_X(x) = \int_x^{\infty} 2e^{-(x+y)}\, dy = 2e^{-x}\left[-e^{-y}\right]_x^{\infty} = 2e^{-2x}, \quad x > 0$$
> > Jadi $X \sim \text{Exp}(2)$ (rate = 2), $E[X] = 1/2$, $\text{Var}(X) = 1/4$.
> >
> > $$f_Y(y) = \int_0^{y} 2e^{-(x+y)}\, dx = 2e^{-y}\left[-e^{-x}\right]_0^{y} = 2e^{-y}(1-e^{-y}), \quad y > 0$$
> >
> > **Langkah 3: Hitung $E[Y]$ dan $E[Y^2]$**
> > $$E[Y] = \int_0^{\infty} y \cdot 2e^{-y}(1-e^{-y})\, dy = 2\int_0^{\infty} ye^{-y}\, dy - 2\int_0^{\infty} ye^{-2y}\, dy$$
> > $$= 2(1) - 2 \cdot \frac{1}{4} = 2 - \frac{1}{2} = \frac{3}{2}$$
> >
> > $$E[Y^2] = 2\int_0^{\infty} y^2 e^{-y}\, dy - 2\int_0^{\infty} y^2 e^{-2y}\, dy = 2(2) - 2 \cdot \frac{2}{8} = 4 - \frac{1}{2} = \frac{7}{2}$$
> > ($\int_0^\infty y^2 e^{-\lambda y} dy = 2/\lambda^3$; untuk $\lambda=1$: $2$; untuk $\lambda=2$: $2/8=1/4$)
> >
> > $$\text{Var}(Y) = \frac{7}{2} - \left(\frac{3}{2}\right)^2 = \frac{7}{2} - \frac{9}{4} = \frac{14-9}{4} = \frac{5}{4}$$
> >
> > **Langkah 4: Hitung Kovariansi**
> > $$\text{Cov}(X+Y, X-Y) = \text{Var}(X) - \text{Var}(Y) = \frac{1}{4} - \frac{5}{4} = -1$$
> >
> > **Hasil Akhir:** **(b)**. $-1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menerapkan bilinearitas kovariansi, dan mencoba menghitung $E[(X+Y)(X-Y)]$ secara langsung (lebih rumit).
> > > - Salah mengintegrasikan distribusi marginal $Y$ — batas integrasi $x$ adalah $0$ sampai $y$, bukan $0$ sampai $\infty$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada operasi linear dari variabel acak dalam kovariansi → gunakan bilinearitas $\text{Cov}(aX+bY, cX+dY) = ac\text{Var}(X) + (ad+bc)\text{Cov}(X,Y) + bd\text{Var}(Y)$.

---

## **No. 17**

Diketahui fungsi kumulatif bersama dari variabel acak $X$ dan $Y$ sebagai berikut:

$$F(x, y) = y(x^2 + xy - y^2) \quad \text{untuk } 0 \leq y \leq x \leq 1$$

Tentukan $E[Y | X = 0{,}5]$.

a. $\dfrac{1}{18}$  
b. $\dfrac{1}{9}$  
c. $\dfrac{1}{6}$  
d. $\dfrac{2}{9}$  
e. $\dfrac{5}{18}$

> [!summary]+ **Jawaban No. 17**
> **(e). $\dfrac{5}{18}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.3; Miller Bab 3.6 |
>
> > [!info]+ **Rumus**  
> > $f(x,y) = \dfrac{\partial^2 F(x,y)}{\partial x \partial y}$
> > $f_{Y|X}(y|x) = \dfrac{f(x,y)}{f_X(x)}$
> > $E[Y|X=x] = \int y \cdot f_{Y|X}(y|x)\, dy$
>
> **Diketahui:**
> - $F(x,y) = y(x^2 + xy - y^2)$ untuk $0 \leq y \leq x \leq 1$
> - Target: $E[Y \mid X = 0{,}5]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PDF Bersama**
> > $$\frac{\partial F}{\partial x} = y(2x + y)$$
> > $$f(x,y) = \frac{\partial^2 F}{\partial y \partial x} = 2x + 2y, \quad 0 < y < x < 1$$
> >
> > **Langkah 2: Hitung PDF Marginal $f_X(x)$**
> > $$f_X(x) = \int_0^x (2x+2y)\, dy = \left[2xy + y^2\right]_0^x = 2x^2 + x^2 = 3x^2$$
> >
> > **Langkah 3: Hitung PDF Bersyarat**
> > $$f_{Y|X}(y|x) = \frac{2x+2y}{3x^2} = \frac{2(x+y)}{3x^2}, \quad 0 < y < x$$
> >
> > **Langkah 4: Hitung $E[Y | X = 0{,}5]$**
> > $$E[Y|X=0{,}5] = \int_0^{0{,}5} y \cdot \frac{2(0{,}5+y)}{3(0{,}5)^2}\, dy = \int_0^{0{,}5} \frac{2y(0{,}5+y)}{0{,}75}\, dy$$
> > $$= \frac{8}{3}\int_0^{0{,}5} (0{,}5y + y^2)\, dy = \frac{8}{3}\left[\frac{0{,}5y^2}{2} + \frac{y^3}{3}\right]_0^{0{,}5}$$
> > $$= \frac{8}{3}\left[\frac{0{,}5 \cdot 0{,}25}{2} + \frac{0{,}125}{3}\right] = \frac{8}{3}\left[\frac{1}{16} + \frac{1}{24}\right] = \frac{8}{3} \cdot \frac{3+2}{48} = \frac{8}{3} \cdot \frac{5}{48} = \frac{5}{18}$$
> >
> > **Hasil Akhir:** **(e)**. $E[Y|X=0{,}5] = \dfrac{5}{18}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah urutan diferensiasi: $f(x,y) = \frac{\partial^2 F}{\partial x \partial y}$, harus diferensiasi terhadap $x$ dahulu atau $y$ dahulu (hasilnya sama, tapi urutan harus konsisten).
> > > - Salah batas integrasi marginal: untuk $0 \leq y \leq x \leq 1$, $f_X(x) = \int_0^x f(x,y)\, dy$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika CDF bersama diberikan → selalu diferensiasikan dua kali untuk mendapat PDF; periksa support sebelum mengintegrasikan.

---

## **No. 18**

Messi sedang mempertimbangkan program amal untuk memberikan sumbangan ke rumah sakit. Donasi akan dikaitkan dengan berapa banyak gol yang ia cetak di pertandingan berikutnya. Ahli statistik tim telah menentukan bahwa jumlah gol yang dicetak oleh Messi dalam sebuah pertandingan memiliki distribusi Poisson dengan mean sebesar 3. Messi berencana menyumbangkan $K$ untuk setiap gol yang mereka cetak hingga maksimal 3 gol.

Untuk sebuah pertandingan tentukanlah nilai $K$ yang akan membuat donasi Messi yang diharapkan menjadi 5000.

a. Kurang dari $2{.}000$  
b. Sekurang-kurangnya $2{.}000$ tapi kurang dari $2{.}100$  
c. Sekurang-kurangnya $2{.}100$ tapi kurang dan $2{.}200$  
d. Sekurang-kurangnya $2{.}200$ tapi kurang dari $2{.}300$  
e. Sekurang-kurangnya $2{.}300$

> [!summary]+ **Jawaban No. 18**
> **(c). Sekurang-kurangnya $2{.}100$ tapi kurang dari $2{.}200$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > $X \sim \text{Poisson}(\lambda)$: $P(X=k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$
> > Donasi = $K \cdot \min(X, 3)$, sehingga $E[\text{Donasi}] = K \cdot E[\min(X,3)]$
>
> **Diketahui:**
> - $X \sim \text{Poisson}(3)$
> - Donasi = $K \times \min(X, 3)$ (dibatasi maksimal 3 gol)
> - Target: $K$ sehingga $E[\text{Donasi}] = 5000$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[\min(X,3)]$**
> > $$E[\min(X,3)] = \sum_{k=0}^{3} k \cdot P(X=k) + 3 \cdot P(X > 3)$$
> > Dengan $e^{-3} \approx 0{,}04979$:
> > - $P(X=0) = e^{-3} = 0{,}04979$
> > - $P(X=1) = 3e^{-3} = 0{,}14936$
> > - $P(X=2) = \frac{9}{2}e^{-3} = 0{,}22404$
> > - $P(X=3) = \frac{27}{6}e^{-3} = 0{,}22404$
> > - $P(X > 3) = 1 - P(X \leq 3) = 1 - 0{,}04979 - 0{,}14936 - 0{,}22404 - 0{,}22404 = 0{,}35277$
> >
> > $$E[\min(X,3)] = 0(0{,}04979) + 1(0{,}14936) + 2(0{,}22404) + 3(0{,}22404) + 3(0{,}35277)$$
> > $$= 0 + 0{,}14936 + 0{,}44808 + 0{,}67212 + 1{,}05831 = 2{,}32787$$
> >
> > **Langkah 2: Cari $K$**
> > $$K \times 2{,}32787 = 5000 \Rightarrow K = \frac{5000}{2{,}32787} \approx 2148$$
> >
> > **Hasil Akhir:** **(c)**. $K \approx 2148$ — sekurang-kurangnya $2{.}100$ tapi kurang dari $2{.}200$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[\min(X,3)] = E[X] = 3$ — ini salah karena ada pembatasan (truncation) di nilai 3.
> > > - Lupa kontribusi $P(X > 3)$ yang juga memberikan donasi $3K$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "maksimal $c$" dalam soal → ini adalah fungsi $\min(X, c)$; jangan langsung gunakan $E[X]$.

---

## **No. 19**

Lama waktu $T$ yang diperlukan bakteri tertentu untuk menggandakan ukurannya adalah variabel acak dengan $f_T(t) = e^{1-t}$, $t > 1$, dimana $t$ diukur dalam jam. Setelah ukuran bakteri menjadi dua kali lipat, jumlah waktu tambahan yang dibutuhkan, misalkan $U$ (dalam jam), untuk menggandakan ukurannya lagi (empat kali lipat dari ukuran aslinya) memiliki distribusi yang sama dengan $T$ dan saling independen dengan $T$.

Hitung probabilitas bahwa bakteri tersebut tumbuh hingga empat kali ukuran aslinya dalam waktu tidak lebih dari 4 jam.

a. Kurang dari $0{,}6$  
b. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}7$  
c. Sekurang-kurangnya $0{,}7$ tapi kurang dari $0{,}8$  
d. Sekurang-kurangnya $0{,}8$ tapi kurang dari $0{,}9$  
e. Sekurang-kurangnya $0{,}9$

> [!summary]+ **Jawaban No. 19**
> **(a). Kurang dari $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]], [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > $P(T + U \leq 4)$ dengan $T$ dan $U$ i.i.d., $f_T(t) = e^{1-t}$ untuk $t > 1$ (distribusi Exp shifted: $T - 1 \sim \text{Exp}(1)$)
> > $$P(T + U \leq 4) = \int_1^{3} f_T(t) \cdot P(U \leq 4-t)\, dt$$
>
> **Diketahui:**
> - $f_T(t) = e^{1-t}$ untuk $t > 1$ — ini adalah eksponensial tergeser: $T = 1 + V$ di mana $V \sim \text{Exp}(1)$
> - $T$ dan $U$ i.i.d.
> - Target: $P(T + U \leq 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: CDF dari $T$**
> > $$F_T(t) = P(T \leq t) = \int_1^t e^{1-s}\, ds = 1 - e^{1-t}, \quad t > 1$$
> >
> > **Langkah 2: Setup Integral Konvolusi**
> > $$P(T+U \leq 4) = \int_1^{3} f_T(t) \cdot F_U(4-t)\, dt$$
> > (batas: $t > 1$ dan $4-t > 1 \Rightarrow t < 3$)
> > $$= \int_1^3 e^{1-t}(1 - e^{1-(4-t)})\, dt = \int_1^3 e^{1-t}(1 - e^{t-3})\, dt$$
> >
> > **Langkah 3: Hitung Integral**
> > $$= \int_1^3 e^{1-t}\, dt - \int_1^3 e^{1-t} \cdot e^{t-3}\, dt$$
> > $$= \int_1^3 e^{1-t}\, dt - \int_1^3 e^{-2}\, dt$$
> > $$= \left[-e^{1-t}\right]_1^3 - 2e^{-2}$$
> > $$= (-e^{-2} + 1) - 2e^{-2} = 1 - 3e^{-2}$$
> > $$= 1 - 3 \times 0{,}13534 = 1 - 0{,}406 = 0{,}594$$
> >
> > **Hasil Akhir:** **(a)**. $P \approx 0{,}594$ — kurang dari $0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegrasikan dari $t=0$ (bukan $t=1$): PDF $f_T(t)$ hanya bernilai positif untuk $t > 1$.
> > > - Lupa batas atas integrasi: $U \leq 4-t$ memerlukan $4-t > 1$, yaitu $t < 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF memiliki support dimulai dari nilai $> 0$ → selalu perhatikan batas support saat menghitung konvolusi.

---

## **No. 20**

Diketahui $X_1, X_2$ dan $X_3$ merupakan variabel acak bebas yang masing-masing terdistribusi seragam pada interval $[0, 1]$. Misalkan ketiga variabel disusun dalam urutan meningkat $Y_1 \leq Y_2 \leq Y_3$ ($Y_1$ adalah yang terkecil dari ketiga $X$).

Tentukanlah variansi dari $Y_2$.

a. $\dfrac{1}{20}$  
b. $\dfrac{1}{10}$  
c. $\dfrac{1}{5}$  
d. $\dfrac{1}{4}$  
e. $\dfrac{1}{3}$

> [!summary]+ **Jawaban No. 20**
> **(a). $\dfrac{1}{20}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-McKean-Craig Bab 4.4; Miller Bab 6.7 |
>
> > [!info]+ **Rumus**  
> > PDF dari order statistic ke-$k$ dari $n$ variabel i.i.d. dengan PDF $f$ dan CDF $F$:
> > $$f_{Y_{(k)}}(y) = \frac{n!}{(k-1)!(n-k)!}[F(y)]^{k-1}[1-F(y)]^{n-k}f(y)$$
> > Untuk $U(0,1)$: $f(y)=1$, $F(y)=y$. Distribusi Beta: $Y_{(k)} \sim \text{Beta}(k, n-k+1)$.
>
> **Diketahui:**
> - $X_1, X_2, X_3 \sim U(0,1)$ i.i.d., $n=3$
> - $Y_2$ = order statistic ke-2 (median)
> - Target: $\text{Var}(Y_2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi $Y_2$**
> > $Y_2 \sim \text{Beta}(2, 2)$ (karena $k=2$, $n-k+1=2$)
> > $$f_{Y_2}(y) = \frac{3!}{1! \cdot 1!} y^1 (1-y)^1 \cdot 1 = 6y(1-y), \quad 0 < y < 1$$
> >
> > **Langkah 2: Hitung $E[Y_2]$ dan $E[Y_2^2]$**
> > Untuk $\text{Beta}(\alpha, \beta)$: $E[Y] = \dfrac{\alpha}{\alpha+\beta}$, $\text{Var}(Y) = \dfrac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$
> >
> > Dengan $\alpha = \beta = 2$:
> > $$E[Y_2] = \frac{2}{4} = \frac{1}{2}$$
> > $$\text{Var}(Y_2) = \frac{2 \times 2}{4^2 \times 5} = \frac{4}{80} = \frac{1}{20}$$
> >
> > **Hasil Akhir:** **(a)**. $\text{Var}(Y_2) = \dfrac{1}{20}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(Y_2) = \text{Var}(X) = 1/12$ — distribusi order statistic BERBEDA dari distribusi aslinya.
> > > - Salah mengidentifikasi parameter Beta: untuk $U(0,1)$, $Y_{(k)} \sim \text{Beta}(k, n-k+1)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal tentang "variabel terkecil/terbesar/median" dari $n$ variabel i.i.d. → ini adalah order statistics; gunakan rumus distribusi Beta untuk $U(0,1)$.

---

## **No. 21**

Diketahui fungsi densitas bersama dari $X$ dan $Y$ sebagai berikut:

$$f(x, y) = \begin{cases} c(y - x), & \text{untuk } 0 < x < y < 1 \\ 0, & \text{untuk lainnya} \end{cases}$$

Tentukan mean dari distribusi marginal dari $X$.

a. $\dfrac{1}{8}$  
b. $\dfrac{1}{4}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 21**
> **(b). $\dfrac{1}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.2; Miller Bab 3.4 |
>
> > [!info]+ **Rumus**  
> > Normalisasi: $\int_0^1 \int_x^1 c(y-x)\, dy\, dx = 1$
> > $f_X(x) = \int_x^1 c(y-x)\, dy$, $E[X] = \int_0^1 x \cdot f_X(x)\, dx$
>
> **Diketahui:**
> - $f(x,y) = c(y-x)$ untuk $0 < x < y < 1$
> - Target: $E[X]$ (mean marginal $X$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $c$**
> > $$\int_0^1 \int_x^1 c(y-x)\, dy\, dx = c\int_0^1 \left[\frac{y^2}{2} - xy\right]_x^1 dx$$
> > $$= c\int_0^1 \left(\frac{1}{2} - x - \frac{x^2}{2} + x^2\right)dx = c\int_0^1 \left(\frac{1}{2} - x + \frac{x^2}{2}\right)dx$$
> > $$= c\left[\frac{x}{2} - \frac{x^2}{2} + \frac{x^3}{6}\right]_0^1 = c\left(\frac{1}{2} - \frac{1}{2} + \frac{1}{6}\right) = \frac{c}{6} = 1 \Rightarrow c = 6$$
> >
> > **Langkah 2: Hitung $f_X(x)$**
> > $$f_X(x) = \int_x^1 6(y-x)\, dy = 6\left[\frac{y^2}{2} - xy\right]_x^1 = 6\left(\frac{1}{2} - x + \frac{x^2}{2}\right) = 3(1-x)^2$$
> >
> > **Langkah 3: Hitung $E[X]$**
> > $$E[X] = \int_0^1 x \cdot 3(1-x)^2\, dx = 3\int_0^1 x(1-2x+x^2)\, dx$$
> > $$= 3\int_0^1 (x - 2x^2 + x^3)\, dx = 3\left[\frac{1}{2} - \frac{2}{3} + \frac{1}{4}\right] = 3 \cdot \frac{6-8+3}{12} = 3 \cdot \frac{1}{12} = \frac{1}{4}$$
> >
> > **Hasil Akhir:** **(b)**. $E[X] = \dfrac{1}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mencari $c$ terlebih dahulu dan langsung mengintegrasikan dengan $f(x,y) = y-x$ (tanpa $c=6$) — jawaban tetap sama jika rasio benar, tapi prosedur salah.
> > > - Salah batas integrasi marginal: untuk $0 < x < y < 1$, $f_X(x) = \int_x^1 f(x,y)\, dy$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika support bersyarat ($x < y$ atau $y < x$) → batas integrasi marginal BUKAN dari 0 ke 1 tapi harus menyesuaikan constraint.

---

## **No. 22**

Sebuah tim bisbol akan menyumbangkan $100{.}000$ untuk setiap pukulan home run setelah home run ke-3 dalam suatu permainan. Diketahui bahwa banyak home run yang dicapai dalam suatu permainan berdistribusi Poisson dengan rata-rata sebesar 4.

Tentukanlah besar uang yang diharapkan akan disumbangkan oleh tim tersebut.

a. Kurang dari $150{.}000$  
b. Sekurang-kurangnya $150{.}000$ tapi kurang dari $175{.}000$  
c. Sekurang-kurangnya $175{.}000$ tapi kurang dari $200{.}000$  
d. Sekurang-kurangnya $200{.}000$ tapi kurang dari $225{.}000$  
e. Sekurang-kurangnya $225{.}000$

> [!summary]+ **Jawaban No. 22**
> **(a). Kurang dari $150{.}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > Donasi = $100{.}000 \times \max(X-3, 0)$ di mana $X \sim \text{Poisson}(4)$
> > $E[\max(X-3,0)] = E[X] - 3 + 3P(X \leq 3) - E[X \cdot \mathbf{1}_{X \leq 3}]$
> > Cara langsung: $E[\max(X-3,0)] = \sum_{k=4}^{\infty} (k-3) P(X=k)$
>
> **Diketahui:**
> - $X \sim \text{Poisson}(4)$
> - Donasi = $100{.}000 \cdot (X-3)$ jika $X > 3$, dan $0$ jika $X \leq 3$
> - Target: $E[\text{Donasi}] = 100{.}000 \cdot E[\max(X-3, 0)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan Ekspektasi**
> > $$E[\max(X-3,0)] = \sum_{k=4}^{\infty}(k-3)P(X=k) = E[X] - 3 - \sum_{k=0}^{3}(k-3)P(X=k)$$
> > Cara yang lebih langsung:
> > $= E[X] - 3P(X \geq 4) - \sum_{k=0}^3 k \cdot P(X=k) + 3P(X \leq 3) - 3$
> >
> > Paling sederhana: 
> > $$E[\max(X-3,0)] = E[X-3] + 3P(X \leq 3) - \sum_{k=0}^2(3-k)P(X=k) \cdot (-1)$$
> > Gunakan: $E[\max(X-3,0)] = E[X] - 3 + E[\max(3-X, 0)]$ (put-call parity analog).
> > $E[\max(3-X,0)] = \sum_{k=0}^{3}(3-k)P(X=k) = 3P_0 + 2P_1 + 1P_2 + 0P_3$
> >
> > **Langkah 2: Hitung Probabilitas Poisson(4)**
> > - $P_0 = e^{-4} = 0{,}01832$
> > - $P_1 = 4e^{-4} = 0{,}07326$
> > - $P_2 = 8e^{-4} = 0{,}14653$
> > - $P_3 = \frac{32}{3}e^{-4} = 0{,}19537$
> >
> > **Langkah 3: Hitung $E[\max(3-X,0)]$**
> > $$= 3(0{,}01832) + 2(0{,}07326) + 1(0{,}14653) + 0$$
> > $$= 0{,}05496 + 0{,}14652 + 0{,}14653 = 0{,}34801$$
> >
> > **Langkah 4: Hitung $E[\max(X-3,0)]$**
> > $$E[\max(X-3,0)] = E[X] - 3 + E[\max(3-X,0)] = 4 - 3 + 0{,}34801 = 1{,}34801$$
> >
> > **Langkah 5: Hitung Donasi**
> > $$E[\text{Donasi}] = 100{.}000 \times 1{,}348 = 134{.}800$$
> >
> > **Hasil Akhir:** **(a)**. $\approx 134{.}800$ — kurang dari $150{.}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[\text{Donasi}] = 100{.}000 \times (E[X] - 3) = 100{.}000 \times 1 = 100{.}000$ — ini mengabaikan fakta bahwa donasi adalah 0 jika $X \leq 3$.
> > > - Mengira donasi jika $X = 5$ adalah $2 \times 100{.}000$ (benar), tapi $E[X-3]$ tidak sama dengan $E[\max(X-3,0)]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "setelah ke-$c$" atau "melebihi $c$" → gunakan $E[\max(X-c, 0)]$, bukan $E[X-c]$.

---

## **No. 23**

Banyaknya angin topan $X$ yang menyerang pulau tertentu dalam satu bulan memiliki distribusi sebagai berikut:

$$P(X = k) = 0{,}9 \times 0{,}1^k, \quad k = 0, 1, 2, \ldots$$

Hal ini berlaku untuk setiap bulan Juni, Juli dan Agustus. Diasumsikan bahwa jumlah angin topan di bulan tertentu tidak bergantung pada jumlah di bulan lainnya.

Tentukanlah probabilitas paling sedikit tiga angin topan terjadi untuk periode tiga bulan Juni, Juli dan Agustus.

a. Kurang dari $0{,}1$  
b. Sekurang-kurangnya $0{,}1$ tapi kurang dari $0{,}125$  
c. Sekurang-kurangnya $0{,}125$ tapi kurang dari $0{,}15$  
d. Sekurang-kurangnya $0{,}15$ tapi kurang dari $0{,}175$  
e. Sekurang-kurangnya $0{,}175$

> [!summary]+ **Jawaban No. 23**
> **(a). Kurang dari $0{,}1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > $P(X=k) = 0{,}9 \times 0{,}1^k$ adalah PMF geometrik dengan $p = 0{,}9$, $q = 0{,}1$.
> > $S = X_J + X_J + X_A$ (total 3 bulan); cari $P(S \geq 3)$.
> > PGF: $G_X(t) = \frac{p}{1-qt}$, $G_S(t) = [G_X(t)]^3$.
>
> **Diketahui:**
> - $X \sim \text{Geom}(0{,}9)$ dengan support $\{0,1,2,...\}$, $q = 0{,}1$
> - $S = X_{Juni} + X_{Juli} + X_{Agustus}$, ketiga independen
> - Target: $P(S \geq 3) = 1 - P(S \leq 2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(S \leq 2)$ via Enumerasi**
> > $S \leq 2$ berarti total topan 3 bulan $\leq 2$.
> >
> > $P(S=0) = P(X=0)^3 = (0{,}9)^3 = 0{,}729$
> >
> > $P(S=1)$: salah satu bulan memiliki 1 topan, dua lainnya 0.
> > $= 3 \times P(X=1) \times P(X=0)^2 = 3 \times 0{,}09 \times 0{,}81 = 0{,}2187$
> >
> > $P(S=2)$: 
> > - Satu bulan dengan 2 topan, dua dengan 0: $3 \times P(X=2) \times P(X=0)^2 = 3 \times 0{,}009 \times 0{,}81 = 0{,}02187$
> > - Dua bulan dengan 1 topan, satu dengan 0: $3 \times P(X=1)^2 \times P(X=0) = 3 \times 0{,}0081 \times 0{,}9 = 0{,}02187$
> >
> > $P(S=2) = 0{,}02187 + 0{,}02187 = 0{,}04374$
> >
> > **Langkah 2: Hitung $P(S \geq 3)$**
> > $$P(S \leq 2) = 0{,}729 + 0{,}2187 + 0{,}04374 = 0{,}99144$$
> > $$P(S \geq 3) = 1 - 0{,}99144 = 0{,}00856$$
> >
> > **Hasil Akhir:** **(a)**. $\approx 0{,}0086$ — kurang dari $0{,}1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira distribusi jumlah tiga geometrik adalah geometrik juga — SALAH, jumlah geometrik i.i.d. adalah Binomial Negatif.
> > > - Salah dalam menghitung $P(S=2)$: ada dua kasus (satu bulan = 2 topan, atau dua bulan = 1 topan masing-masing).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal tentang jumlah dari beberapa geometrik independen → enumerasi kasus yang mungkin dengan hati-hati.

---

## **No. 24**

Dalam sebuah survei, diketahui bahwa:

(i) $80\%$ orang yang disurvei memiliki motor atau sepeda (bisa jadi memiliki kedua kendaraan tersebut)  
(ii) $\dfrac{1}{3}$ orang yang memiliki motor, juga memiliki sepeda  
(iii) $\dfrac{1}{2}$ orang yang memiliki sepeda, juga memiliki motor  

Dari orang yang tidak memiliki sepeda, tentukanlah proporsi orang yang tidak memiliki motor.

a. $\dfrac{1}{3}$  
b. $\dfrac{4}{9}$  
c. $\dfrac{5}{9}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{7}{9}$

> [!summary]+ **Jawaban No. 24**
> **(a). $\dfrac{1}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> > $P(M \cup S) = P(M) + P(S) - P(M \cap S)$
> > $P(S \mid M) = P(M \cap S)/P(M)$, $P(M \mid S) = P(M \cap S)/P(S)$
>
> **Diketahui:**
> - $P(M \cup S) = 0{,}8$
> - $P(S \mid M) = 1/3$
> - $P(M \mid S) = 1/2$
> - Target: $P(M^c \mid S^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari Hubungan $P(M)$ dan $P(S)$**
> > $P(M \cap S) = \frac{1}{3}P(M) = \frac{1}{2}P(S) \Rightarrow P(S) = \frac{2}{3}P(M)$
> >
> > **Langkah 2: Gunakan $P(M \cup S) = 0{,}8$**
> > $$P(M) + \frac{2}{3}P(M) - \frac{1}{3}P(M) = 0{,}8$$
> > $$\frac{4}{3}P(M) = 0{,}8 \Rightarrow P(M) = 0{,}6$$
> > $$P(S) = \frac{2}{3}(0{,}6) = 0{,}4, \quad P(M \cap S) = \frac{1}{3}(0{,}6) = 0{,}2$$
> >
> > **Langkah 3: Cari $P(M^c \mid S^c)$**
> > $P(S^c) = 1 - 0{,}4 = 0{,}6$
> > $P(M^c \cap S^c) = P((M \cup S)^c) = 1 - 0{,}8 = 0{,}2$
> > $$P(M^c \mid S^c) = \frac{P(M^c \cap S^c)}{P(S^c)} = \frac{0{,}2}{0{,}6} = \frac{1}{3}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(M^c \mid S^c) = 1 - P(M \mid S) = 1/2$ — ini salah, komplemen bersyarat tidak sesederhana itu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada "orang yang tidak memiliki X" → ini adalah probabilitas bersyarat pada komplemen; gunakan $P(A^c \cap B^c) = P((A \cup B)^c) = 1 - P(A \cup B)$.

---

## **No. 25**

Diketahui $X$ dengan fungsi densitas sebagai berikut:

$$f(x) = \begin{cases} x - \dfrac{x^2}{2}, & \text{untuk } 0 < x \leq 1 \\ \dfrac{x^2}{2} - x + 1, & \text{untuk } 1 < x < 2 \\ 0, & \text{untuk lainnya} \end{cases}$$

Misalkan $Y = X^2$. Tentukan nilai dari $F_Y(2)$. (Pilihlah jawaban terdekat)

a. $0{,}33$  
b. $0{,}48$  
c. $0{,}55$  
d. $0{,}67$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 25**
> **(c). $0{,}55$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.8; Miller Bab 4.5 |
>
> > [!info]+ **Rumus**  
> > $F_Y(y) = P(Y \leq y) = P(X^2 \leq y) = P(X \leq \sqrt{y})$ (karena $X > 0$)
> > $$F_Y(2) = P(X \leq \sqrt{2}) = \int_0^{\sqrt{2}} f(x)\, dx$$
>
> **Diketahui:**
> - $Y = X^2$, support $X \in (0,2)$, sehingga support $Y \in (0,4)$
> - Target: $F_Y(2) = P(Y \leq 2) = P(X \leq \sqrt{2})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Batas Integrasi**
> > $\sqrt{2} \approx 1{,}414$, jadi perlu integrasikan dari $0$ sampai $1$ (bagian pertama), lalu $1$ sampai $\sqrt{2}$ (bagian kedua).
> >
> > **Langkah 2: Integral Bagian Pertama ($0$ sampai $1$)**
> > $$\int_0^1 \left(x - \frac{x^2}{2}\right)dx = \left[\frac{x^2}{2} - \frac{x^3}{6}\right]_0^1 = \frac{1}{2} - \frac{1}{6} = \frac{1}{3}$$
> >
> > **Langkah 3: Integral Bagian Kedua ($1$ sampai $\sqrt{2}$)**
> > $$\int_1^{\sqrt{2}} \left(\frac{x^2}{2} - x + 1\right)dx = \left[\frac{x^3}{6} - \frac{x^2}{2} + x\right]_1^{\sqrt{2}}$$
> > $$= \left(\frac{2\sqrt{2}}{6} - 1 + \sqrt{2}\right) - \left(\frac{1}{6} - \frac{1}{2} + 1\right)$$
> > $$= \left(\frac{\sqrt{2}}{3} + \sqrt{2} - 1\right) - \frac{2}{3}$$
> > $$= \frac{4\sqrt{2}}{3} - 1 - \frac{2}{3} = \frac{4\sqrt{2}}{3} - \frac{5}{3}$$
> > $$= \frac{4(1{,}4142) - 5}{3} = \frac{5{,}6569 - 5}{3} = \frac{0{,}6569}{3} \approx 0{,}219$$
> >
> > **Langkah 4: Jumlahkan**
> > $$F_Y(2) = \frac{1}{3} + 0{,}219 = 0{,}333 + 0{,}219 = 0{,}552 \approx 0{,}55$$
> >
> > **Hasil Akhir:** **(c)**. $F_Y(2) \approx 0{,}55$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung mencari $F_Y(2)$ dengan menurunkan PDF $Y$ terlebih dahulu — lebih mudah menggunakan $F_Y(y) = P(X \leq \sqrt{y})$ langsung.
> > > - Lupa bahwa batas atas integrasi adalah $\sqrt{2}$, bukan $2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Y = g(X)$ monoton → $F_Y(y) = F_X(g^{-1}(y))$; untuk $X > 0$ dan $Y = X^2$: $F_Y(y) = F_X(\sqrt{y})$.

---

## **No. 26**

Dua bola dijatuhkan sedemikian rupa sehingga setiap bola memiliki kemungkinan yang sama untuk jatuh ke salah satu dari empat lubang yang ada. Kedua bola dapat jatuh ke dalam lubang yang sama. Misalkan $X$ adalah banyaknya lubang kosong di akhir percobaan.

Tentukanlah fungsi pembangkit momen dari $X$.

a. $\dfrac{7}{4} - \dfrac{1}{2}t$, jika $t = 2, 3$ dan $0$, untuk $t$ lainnya  
b. $\dfrac{9}{4}t + \dfrac{21}{8}t^2$  
c. $\dfrac{1}{4}(3e^{2t} + e^{3t})$  
d. $\dfrac{1}{4}(e^{2t} + e^{3t})$  
e. $\dfrac{1}{4}(e^{3t/4} + 3e^{t/4})$

> [!summary]+ **Jawaban No. 26**
> **(c). $\dfrac{1}{4}(3e^{2t} + e^{3t})$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> > $M_X(t) = E[e^{tX}] = \sum_x e^{tx} P(X=x)$
>
> **Diketahui:**
> - 2 bola, 4 lubang, setiap bola ke lubang mana saja dengan prob. $1/4$
> - $X$ = banyaknya lubang kosong
> - Target: MGF dari $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $X$**
> > Total outcome = $4^2 = 16$ (equiprobable).
> >
> > $X = 3$ (3 lubang kosong): kedua bola jatuh ke lubang yang sama.
> > Banyaknya cara: 4 (pilih lubang yang ditempati)
> > $P(X=3) = 4/16 = 1/4$
> >
> > $X = 2$ (2 lubang kosong): bola-bola jatuh ke dua lubang yang berbeda.
> > Banyaknya cara: $4 \times 3 = 12$ (bola 1 pilih lubang, bola 2 pilih lubang berbeda)
> > $P(X=2) = 12/16 = 3/4$
> >
> > $X = 0$ atau $X = 1$: tidak mungkin dengan hanya 2 bola dan 4 lubang.
> >
> > **Langkah 2: Hitung MGF**
> > $$M_X(t) = e^{2t} P(X=2) + e^{3t} P(X=3) = \frac{3}{4}e^{2t} + \frac{1}{4}e^{3t} = \frac{1}{4}(3e^{2t} + e^{3t})$$
> >
> > **Hasil Akhir:** **(c)**. $M_X(t) = \dfrac{1}{4}(3e^{2t} + e^{3t})$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $X$ bisa bernilai 0, 1 — dengan hanya 2 bola di 4 lubang, minimal 2 lubang kosong.
> > > - Salah menghitung outcome $X=3$: tidak perlu urutan (bola 1 dan bola 2 identik dalam konteks lubang yang kosong).
> >
> > > [!CAUTION] Red Flags
> > > - Sebelum menghitung MGF → selalu tentukan distribusi PMF $P(X=k)$ terlebih dahulu.

---

## **No. 27**

Akan dilakukan pengujian kualitas produk jadi yang dipilih secara acak. Hasil tes akan menunjukkan bahwa produk tersebut cacat sebesar 98% dari produk yang benar-benar cacat. Hasil tes akan menunjukkan bahwa produk tidak cacat sebesar 100% dari produk yang memang tidak cacat. Diperkirakan persentase produk yang benar-benar cacat dari semua total produksi adalah $\frac{1}{2}\%$. Misalkan sebuah produk jadi yang dipilih secara acak diuji dan ternyata hasil tes menunjukkan tidak cacat.

Tentukanlah probabilitas bahwa produk tersebut itu benar-benar cacat.

a. Kurang dari $0{,}0001$  
b. Sekurang-kurangnya $0{,}0001$ tapi kurang dari $0{,}00013$  
c. Sekurang-kurangnya $0{,}00013$ tapi kurang dari $0{,}00015$  
d. Sekurang-kurangnya $0{,}00015$ tapi kurang dari $0{,}00017$  
e. Sekurang-kurangnya $0{,}00017$

> [!summary]+ **Jawaban No. 27**
> **(b). Sekurang-kurangnya $0{,}0001$ tapi kurang dari $0{,}00013$**
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
> > Teorema Bayes: $P(D \mid T^-) = \dfrac{P(T^- \mid D) P(D)}{P(T^-)}$
>
> **Diketahui:**
> - $P(D) = 0{,}005$ (cacat), $P(D^c) = 0{,}995$
> - $P(T^+ \mid D) = 0{,}98$ (sensitivitas tes), $P(T^- \mid D) = 0{,}02$
> - $P(T^- \mid D^c) = 1{,}00$ (spesifisitas = 100%)
> - Target: $P(D \mid T^-)$ (probabilitas cacat padahal tes negatif)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(T^-)$ dengan Hukum Total**
> > $$P(T^-) = P(T^- \mid D)P(D) + P(T^- \mid D^c)P(D^c)$$
> > $$= 0{,}02 \times 0{,}005 + 1{,}00 \times 0{,}995 = 0{,}0001 + 0{,}995 = 0{,}9951$$
> >
> > **Langkah 2: Terapkan Bayes**
> > $$P(D \mid T^-) = \frac{0{,}02 \times 0{,}005}{0{,}9951} = \frac{0{,}0001}{0{,}9951} \approx 0{,}0001005$$
> >
> > **Hasil Akhir:** **(b)**. $\approx 0{,}0001005$ — sekurang-kurangnya $0{,}0001$ tapi kurang dari $0{,}00013$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(D \mid T^-) = P(T^- \mid D) = 0{,}02$ — ini adalah kekeliruan inversi kondisional (base rate neglect).
> > > - Lupa kontribusi $P(T^- \mid D^c) P(D^c)$ dalam penyebut.
> >
> > > [!CAUTION] Red Flags
> > > - Jika tes memiliki spesifisitas 100% → $P(T^- \mid D^c) = 1$, penyebut didominasi oleh $P(D^c)$.

---

## **No. 28**

Andi memiliki dua pemasok pakaian, yaitu Pabrik A dan Pabrik B. Dia mendapatkan jumlah baju yang sama dari setiap pemasok dan memperkirakan bahwa rata-rata, 10% baju dari Pabrik A rusak dan 20% baju dari Pabrik B rusak. Andi memeriksa 10 baju dari suatu pengiriman baru-baru ini dari suatu pemasok tetapi tidak tahu siapa pemasoknya. Dia menemukan 2 baju yang rusak dari total 10 baju dalam pengiriman tersebut.

Tentukanlah probabilitas pemasok baju tersebut adalah Pabrik A.

a. Kurang dari $0{,}11$  
b. Sekurang-kurangnya $0{,}11$ tapi kurang dari $0{,}22$  
c. Sekurang-kurangnya $0{,}22$ tapi kurang dari $0{,}33$  
d. Sekurang-kurangnya $0{,}33$ tapi kurang dari $0{,}44$  
e. Sekurang-kurangnya $0{,}44$

> [!summary]+ **Jawaban No. 28**
> **(d). Sekurang-kurangnya $0{,}33$ tapi kurang dari $0{,}44$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> > Bayes + Binomial:
> > $$P(A \mid \text{data}) = \frac{P(\text{data} \mid A) P(A)}{P(\text{data} \mid A) P(A) + P(\text{data} \mid B) P(B)}$$
> > $P(\text{data} \mid A) = \binom{10}{2}(0{,}1)^2(0{,}9)^8$
>
> **Diketahui:**
> - $P(A) = P(B) = 0{,}5$ (jumlah baju sama dari kedua pabrik)
> - $p_A = 0{,}1$, $p_B = 0{,}2$
> - Data: 2 rusak dari 10 ($n=10$, $k=2$)
> - Target: $P(A \mid k=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Likelihood dari Setiap Pabrik**
> > $$P(k=2 \mid A) = \binom{10}{2}(0{,}1)^2(0{,}9)^8 = 45 \times 0{,}01 \times 0{,}43047 = 0{,}19372$$
> > $$P(k=2 \mid B) = \binom{10}{2}(0{,}2)^2(0{,}8)^8 = 45 \times 0{,}04 \times 0{,}16777 = 0{,}30199$$
> >
> > **Langkah 2: Terapkan Bayes**
> > $$P(A \mid k=2) = \frac{0{,}19372 \times 0{,}5}{0{,}19372 \times 0{,}5 + 0{,}30199 \times 0{,}5}$$
> > $$= \frac{0{,}19372}{0{,}19372 + 0{,}30199} = \frac{0{,}19372}{0{,}49571} \approx 0{,}391$$
> >
> > **Hasil Akhir:** **(d)**. $\approx 0{,}391$ — sekurang-kurangnya $0{,}33$ tapi kurang dari $0{,}44$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan prior $P(A) = P(B) = 0{,}5$ — meski equal prior, tidak bisa diabaikan dalam Bayes.
> > > - Lupa $\binom{10}{2}$ pada likelihood — tapi perhatikan bahwa $\binom{10}{2}$ akan saling membagi dan bisa diabaikan saat menghitung rasio Bayes.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada data sampel berdistribusi Binomial → likelihood adalah PMF Binomial; gunakan Bayes setelahnya.

---

## **No. 29**

Andi, Budi, dan Chandra adalah pelari marathon yang masing-masing memiliki waktu lari yang berdistribusi normal, sebagai berikut:

(i) Andi: Rata-rata sebesar $2{,}3$ dan variansi sebesar $0{,}04$  
(ii) Budi: Rata-rata sebesar $2{,}41$ dan variansi sebesar $0{,}04$  
(iii) Chandra: Rata-rata sebesar $2{,}7$ dan variansi sebesar $0{,}16$  

Asumsikan waktu lari mereka saling bebas, tentukanlah probabilitas bahwa pada lomba marathon berikutnya waktu lari Budi kurang dari rata-rata waktu lari Andi dan Chandra.

a. Kurang dari $0{,}5$  
b. Sekurang-kurangnya $0{,}5$ tapi kurang dari $0{,}6$  
c. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}7$  
d. Sekurang-kurangnya $0{,}7$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 29**
> **(c). Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}7$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]], [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.5 Independensi dan Korelasi]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> > Rata-rata Andi dan Chandra: $\bar{W} = (A + C)/2$ dimana $A$ = waktu Andi, $C$ = waktu Chandra.
> > Kombinasi linear variabel normal independen adalah normal.
> > Cari: $P\left(B < \frac{A+C}{2}\right) = P\left(B - \frac{A+C}{2} < 0\right)$
>
> **Diketahui:**
> - $A \sim N(2{,}3, 0{,}04)$, $B \sim N(2{,}41, 0{,}04)$, $C \sim N(2{,}7, 0{,}16)$, independen
> - Target: $P\left(B < \frac{A+C}{2}\right)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Variabel Baru**
> > $$D = B - \frac{A+C}{2} = B - \frac{A}{2} - \frac{C}{2}$$
> > Target: $P(D < 0)$
> >
> > **Langkah 2: Hitung $E[D]$**
> > $$E[D] = 2{,}41 - \frac{2{,}3}{2} - \frac{2{,}7}{2} = 2{,}41 - 1{,}15 - 1{,}35 = -0{,}09$$
> >
> > **Langkah 3: Hitung $\text{Var}(D)$**
> > $$\text{Var}(D) = \text{Var}(B) + \frac{1}{4}\text{Var}(A) + \frac{1}{4}\text{Var}(C)$$
> > $$= 0{,}04 + \frac{0{,}04}{4} + \frac{0{,}16}{4} = 0{,}04 + 0{,}01 + 0{,}04 = 0{,}09$$
> > $$\sigma_D = 0{,}3$$
> >
> > **Langkah 4: Standarisasi dan Cari Probabilitas**
> > $$P(D < 0) = P\left(Z < \frac{0 - (-0{,}09)}{0{,}3}\right) = P(Z < 0{,}3) \approx 0{,}618$$
> >
> > **Hasil Akhir:** **(c)**. $\approx 0{,}618$ — sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}7$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung variansi: $\text{Var}(A/2) = \text{Var}(A)/4$, bukan $\text{Var}(A)/2$.
> > > - Menggunakan mean $E[A]$ dan $E[C]$ tanpa mempertimbangkan bahwa $A$ dan $C$ adalah variabel acak (bukan konstanta).
> >
> > > [!CAUTION] Red Flags
> > > - "Rata-rata dari dua variabel acak" dalam soal → $\bar{W} = (A+C)/2$ adalah variabel acak, bukan nilai pasti; variansinya $= \text{Var}(A+C)/4$.

---

## **No. 30**

Misalkan variabel acak kontinu $X$ dan $Y$ berdistribusi bivariat normal dengan $E[X] = E[Y] = 0$ dan $Var[X] = Var[Y] = 1$. Diketahui juga bahwa persentil ke-95 dari $W = X + Y$ adalah $2{,}8491$.

Tentukanlah nilai dari $Cov(X, Y)$.

a. $-1$  
b. $-0{,}5$  
c. $0$  
d. $0{,}5$  
e. $1$

> [!summary]+ **Jawaban No. 30**
> **(d). $Cov(X, Y) = 0{,}5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]], [[3.6 Matriks Variansi-Kovariansi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-McKean-Craig Bab 3.5; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> > $W = X + Y \sim N(\mu_W, \sigma_W^2)$
> > $\mu_W = E[X] + E[Y] = 0$
> > $\sigma_W^2 = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y) = 2 + 2\text{Cov}(X,Y)$
> > Persentil ke-95: $\mu_W + z_{0{,}95} \sigma_W = 1{,}645 \sigma_W = 2{,}8491$
>
> **Diketahui:**
> - $X, Y$ bivariat normal, $E[X]=E[Y]=0$, $\text{Var}(X)=\text{Var}(Y)=1$
> - $W_{0{,}95} = 2{,}8491$
> - Target: $\text{Cov}(X,Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $\sigma_W$ dari Persentil**
> > $$1{,}645 \times \sigma_W = 2{,}8491 \Rightarrow \sigma_W = \frac{2{,}8491}{1{,}645} = 1{,}732 \approx \sqrt{3}$$
> > $$\sigma_W^2 = 3$$
> >
> > **Langkah 2: Hitung Kovariansi**
> > $$\sigma_W^2 = 2 + 2\text{Cov}(X,Y) = 3 \Rightarrow 2\text{Cov}(X,Y) = 1 \Rightarrow \text{Cov}(X,Y) = 0{,}5$$
> >
> > **Hasil Akhir:** **(d)**. $\text{Cov}(X,Y) = 0{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menambahkan $2\text{Cov}(X,Y)$ dalam $\text{Var}(X+Y)$ — ini adalah kesalahan yang sangat umum.
> > > - Salah: $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) = 2$ (tanpa kovariansi).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan $\text{Var}(aX + bY)$ → selalu: $a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\text{Cov}(X,Y)$.
> > > - Jika persentil distribusi normal diberikan → gunakan $\mu + z_\alpha \sigma$; lookup $z_{0{,}95} = 1{,}645$.

---
*Pembahasan selesai — 30 soal CF2 PAI Sesi Agustus 2023*
*Kunci Jawaban Resmi: B, C, C, E, D, B, E, C, D, D, A, E, E, C, E, B, E, C, A, A, B, A, A, A, C, C, B, D, C, D*
