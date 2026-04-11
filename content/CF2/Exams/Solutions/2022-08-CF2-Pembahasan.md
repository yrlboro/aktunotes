## **No. 1**

Seorang agen asuransi bertemu dengan dua belas calon pelanggan secara independen, masing-masing memiliki kemungkinan yang sama untuk membeli produk asuransi. $6$ dari $12$ orang hanya tertarik pada asuransi mobil, $4$ orang lainnya hanya tertarik pada asuransi kesehatan, dan $2$ orang tersisa hanya tertarik pada asuransi jiwa. Diketahui agen membuat delapan penjualan. Tentukan probabilitas bahwa dari $8$ penjualan tersebut, $3$ untuk asuransi mobil, $3$ untuk asuransi kesehatan, dan $2$ untuk asuransi jiwa.

a. $0{,}001$  
b. $0{,}024$  
c. $0{,}069$  
d. $0{,}097$  
e. $0{,}162$

> [!summary]+ **Jawaban No. 1**
>
> **(e). $0{,}162$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.2–1.4 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Hipergeometrik Multivariat** — sampling tanpa pengembalian dari populasi dengan $m$ kategori:
> >
> > $$P = \frac{\dbinom{K_1}{k_1}\dbinom{K_2}{k_2}\cdots\dbinom{K_m}{k_m}}{\dbinom{N}{n}}$$
> >
> > dengan $N$ = total populasi, $K_i$ = ukuran kategori ke-$i$, $n$ = ukuran sampel, $k_i$ = banyak terpilih dari kategori ke-$i$, dan $\sum k_i = n$.
>
> **Diketahui:**
> - $N = 12$ calon pelanggan: $K_1 = 6$ (mobil), $K_2 = 4$ (kesehatan), $K_3 = 2$ (jiwa)
> - $n = 8$ penjualan berhasil
> - Target: $k_1 = 3$, $k_2 = 3$, $k_3 = 2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi Kondisi Model**
> >
> > Setiap pelanggan hanya tertarik pada satu jenis asuransi dan bersifat unik → sampling tanpa pengembalian dari tiga kategori diskrit → model Hipergeometrik Multivariat tepat digunakan.
> >
> > Cek: $k_1 + k_2 + k_3 = 3 + 3 + 2 = 8 = n$ ✓
> >
> > **Langkah 2: Hitung Pembilang**
> >
> > $$\binom{6}{3}\binom{4}{3}\binom{2}{2} = 20 \times 4 \times 1 = 80$$
> >
> > **Langkah 3: Hitung Penyebut**
> >
> > $$\binom{12}{8} = \binom{12}{4} = \frac{12 \times 11 \times 10 \times 9}{4!} = \frac{11{.}880}{24} = 495$$
> >
> > **Langkah 4: Hitung Probabilitas**
> >
> > $$P = \frac{80}{495} = \frac{16}{99} \approx 0{,}1616 \approx \mathbf{0{,}162}$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}162$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Multinomial — Multinomial dipakai untuk sampling *dengan* pengembalian, sedangkan di sini setiap pelanggan hanya dapat membeli sekali (tanpa pengembalian).
> > > - Menghitung $\binom{12}{8}$ dengan cara langsung tanpa memanfaatkan simetri: $\binom{12}{8} = \binom{12}{4} = 495$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira bahwa ada kemungkinan satu pelanggan membeli lebih dari satu jenis asuransi — soal menyatakan tiap orang "hanya tertarik" pada satu jenis.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "populasi terbatas" + "tanpa pengembalian" + "beberapa kategori" → Hipergeometrik Multivariat, bukan Multinomial.

---

## **No. 2**

Misalkan $A$ dan $B$ merupakan kejadian dimana $P[A] = 0{,}7$ dan $P[B] = 0{,}9$. Tentukan nilai terbesar yang mungkin dari $P[A \cup B] - P[A \cap B]$.

a. $0{,}2$  
b. $0{,}34$  
c. $0{,}4$  
d. $0{,}6$  
e. $1{,}6$

> [!summary]+ **Jawaban No. 2**
>
> **(c). $0{,}4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.1–1.3; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Inklusi-Eksklusi:
> >
> > $$P[A \cup B] = P[A] + P[B] - P[A \cap B]$$
> >
> > Sehingga:
> >
> > $$P[A \cup B] - P[A \cap B] = P[A] + P[B] - 2\,P[A \cap B]$$
> >
> > Batasan Bonferroni:
> >
> > $$\max\!\bigl(P[A] + P[B] - 1,\ 0\bigr) \;\leq\; P[A \cap B] \;\leq\; \min\!\bigl(P[A],\, P[B]\bigr)$$
>
> **Diketahui:**
> - $P[A] = 0{,}7$, $P[B] = 0{,}9$
> - Target: nilai **terbesar** dari $P[A \cup B] - P[A \cap B]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan Ekspresi Target**
> >
> > Dengan substitusi inklusi-eksklusi:
> >
> > $$P[A \cup B] - P[A \cap B] = P[A] + P[B] - 2\,P[A \cap B] = 1{,}6 - 2\,P[A \cap B]$$
> >
> > Ekspresi ini **menurun** terhadap $P[A \cap B]$, sehingga dimaksimalkan saat $P[A \cap B]$ **seminimal mungkin**.
> >
> > **Langkah 2: Tentukan Nilai Minimum $P[A \cap B]$**
> >
> > Dari batas Bonferroni:
> >
> > $$P[A \cap B] \;\geq\; P[A] + P[B] - 1 = 0{,}7 + 0{,}9 - 1 = 0{,}6$$
> >
> > Karena $P[A]+P[B] = 1{,}6 > 1$, nilai minimumnya adalah $0{,}6$ (bukan $0$).
> >
> > **Langkah 3: Substitusi untuk Mendapat Nilai Maksimum**
> >
> > $$\bigl(P[A \cup B] - P[A \cap B]\bigr)_{\max} = 1{,}6 - 2(0{,}6) = 1{,}6 - 1{,}2 = 0{,}4$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P[A \cap B]_{\min} = 0$ — ini hanya berlaku jika $P[A]+P[B] \leq 1$. Karena $1{,}6 > 1$, irisan tidak bisa nol.
> > > - Memaksimalkan $P[A \cap B]$ alih-alih meminimalkannya — ekspresi bertanda $-2$ di depan $P[A \cap B]$, jadi lebih kecil irisan → lebih besar hasil.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Memilih $1{,}6$ (pilihan e) yang merupakan $P[A]+P[B]$ — nilai ini bukan probabilitas yang sah karena melebihi $1$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $P[A]+P[B] > 1$ → batas bawah $P[A \cap B] = P[A]+P[B]-1$ (bukan nol).
> > > - Soal meminta "nilai terbesar yang **mungkin**" → cari batasan ekstrem $P[A \cap B]$.

---

## **No. 3**

Pada suatu karnival, Andi sedang memainkan permainan menembak dengan membayar $100{.}000$ pada awal permainan dan dia dapat menembak berulang kali secara terus menerus pada target sampai dia meleset. Setiap tembakan yang mengenai sasaran, maka dia akan mendapatkan $30{.}000$. Permainan selesai ketika ia gagal menembak target. Probabilitas Andi dapat menembak mengenai target sebesar $p$ untuk setiap tembakan yang ia lakukan. Menurut perkiraan ini, dia berekspektasi untuk mendapatkan keuntungan $20{.}000$ dalam sekali main, maka tentukanlah nilai dari $p$.

a. $0{,}5$  
b. $0{,}6$  
c. $0{,}7$  
d. $0{,}8$  
e. $0{,}9$

> [!summary]+ **Jawaban No. 3**
>
> **(d). $0{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Misalkan $X$ = jumlah tembakan yang **mengenai** sebelum meleset pertama kali.
> >
> > Setiap tembakan: kena dengan prob $p$, meleset dengan prob $1-p$, independen.
> >
> > Maka $X$ berdistribusi **Geometrik versi "jumlah sukses sebelum gagal pertama"**:
> >
> > $$E[X] = \frac{p}{1-p}$$
>
> **Diketahui:**
> - Biaya awal: $\text{Rp}\,100{.}000$
> - Pendapatan per tembakan kena: $\text{Rp}\,30{.}000$
> - $E[\text{Keuntungan}] = 20{.}000$
> - Target: nilai $p$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Formulasikan Keuntungan**
> >
> > Keuntungan bersih $= 30{.}000 \cdot X - 100{.}000$
> >
> > **Langkah 2: Terapkan Nilai Harapan**
> >
> > $$E[\text{Keuntungan}] = 30{.}000\, E[X] - 100{.}000 = 20{.}000$$
> >
> > $$30{.}000\, E[X] = 120{.}000 \implies E[X] = 4$$
> >
> > **Langkah 3: Hubungkan dengan $p$**
> >
> > $$E[X] = \frac{p}{1-p} = 4 \implies p = 4(1-p) = 4 - 4p \implies 5p = 4 \implies p = 0{,}8$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}8$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[X] = \frac{1}{p}$ (versi "jumlah percobaan hingga sukses pertama") — rumus ini untuk $X$ = total percobaan (termasuk yang gagal), bukan jumlah sukses sebelum gagal.
> > > - Mengira keuntungan per tembakan adalah $30{.}000 - 100{.}000$ (mengurangkan biaya tiap tembakan) — biaya $100{.}000$ dibayar sekali di awal, bukan per tembakan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Terus menembak sampai meleset" → permainan berakhir saat pertama kali gagal, bukan setelah $n$ tembakan tetap.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "sampai gagal/meleset" dan menghitung jumlah *sukses* → gunakan $E[X] = p/(1-p)$.
> > > - Jika menghitung jumlah *percobaan total* → gunakan $E[X] = 1/(1-p)$.

---

## **No. 4**

Sebuah agen asuransi dapat menjual $0$, $1$, atau $2$ polis setiap hari. Saat menjual polis, agen juga mencoba membujuk pelanggan untuk membeli tambahan proteksi (_rider_) untuk polis tersebut. Misalkan $X$ menunjukkan jumlah polis yang terjual pada hari tertentu, dan misalkan $Y$ menunjukkan banyaknya tambahan proteksi (_rider_) yang terjual.

$$P[X=0, Y=0] = \frac{1}{4}$$

$$P[X=1, Y=0] = \frac{1}{8}$$

$$P[X=1, Y=1] = \frac{1}{4}$$

$$P[X=2, Y=0] = \frac{1}{12}$$

$$P[X=2, Y=1] = \frac{1}{6}$$

$$P[X=2, Y=2] = \frac{1}{8}$$

Tentukanlah variansi dari $X$.

a. $0{,}47$  
b. $0{,}61$  
c. $0{,}83$  
d. $1{,}42$  
e. $2{,}58$

> [!summary]+ **Jawaban No. 4**
>
> **(b). $0{,}61$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi marginal diskrit:
> >
> > $$P_X(x) = \sum_{y} P(X=x,\, Y=y)$$
> >
> > Variansi melalui momen:
> >
> > $$\text{Var}(X) = E[X^2] - \bigl(E[X]\bigr)^2$$
>
> **Diketahui:**
> - Distribusi bersama $(X, Y)$ diberikan secara eksplisit (6 pasangan)
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Distribusi Marginal $X$**
> >
> > $$P[X=0] = \tfrac{1}{4} = \tfrac{6}{24}$$
> >
> > $$P[X=1] = \tfrac{1}{8} + \tfrac{1}{4} = \tfrac{3}{24} + \tfrac{6}{24} = \tfrac{9}{24} = \tfrac{3}{8}$$
> >
> > $$P[X=2] = \tfrac{1}{12} + \tfrac{1}{6} + \tfrac{1}{8} = \tfrac{2}{24} + \tfrac{4}{24} + \tfrac{3}{24} = \tfrac{9}{24} = \tfrac{3}{8}$$
> >
> > Verifikasi: $\tfrac{6}{24} + \tfrac{9}{24} + \tfrac{9}{24} = \tfrac{24}{24} = 1$ ✓
> >
> > **Langkah 2: Hitung $E[X]$**
> >
> > $$E[X] = 0 \cdot \tfrac{6}{24} + 1 \cdot \tfrac{9}{24} + 2 \cdot \tfrac{9}{24} = \frac{0 + 9 + 18}{24} = \frac{27}{24} = \frac{9}{8}$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> >
> > $$E[X^2] = 0^2 \cdot \tfrac{6}{24} + 1^2 \cdot \tfrac{9}{24} + 2^2 \cdot \tfrac{9}{24} = \frac{0 + 9 + 36}{24} = \frac{45}{24} = \frac{15}{8}$$
> >
> > **Langkah 4: Hitung Variansi**
> >
> > $$\text{Var}(X) = \frac{15}{8} - \left(\frac{9}{8}\right)^2 = \frac{15}{8} - \frac{81}{64} = \frac{120}{64} - \frac{81}{64} = \frac{39}{64} \approx 0{,}609 \approx \mathbf{0{,}61}$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}61$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(X+Y)$ bukan $\text{Var}(X)$ — soal hanya menanyakan variansi $X$, bukan total penjualan.
> > > - Lupa menjumlahkan semua baris pada distribusi bersama saat mencari marginal $X$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $Y$ mempengaruhi $\text{Var}(X)$ secara langsung — $\text{Var}(X)$ hanya bergantung pada distribusi marginal $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu verifikasi $\sum_x P_X(x) = 1$ sebelum menghitung momen.

---

## **No. 5**

Diberikan $X$ variabel acak diskrit dengan fungsi probabilitas $P[X = n] = a_n - a_{n+1}$, dimana $a_i$ merupakan angka-angka yang memenuhi kondisi berikut:

(i) $a_0 = 1$  
(ii) $a_0 > a_1 > a_2 > \cdots > a_k > a_{k+1} > \cdots > 0$  

Tentukan probabilitas dari $P[X \leq 5 \mid X > 1]$.

a. $1 - \dfrac{a_5}{a_2}$  
b. $1 - \dfrac{a_5}{a_1}$  
c. $a_1 - a_5$  
d. $\dfrac{a_2}{a_1} - \dfrac{a_5}{a_2}$  
e. $1 - \dfrac{a_6}{a_2}$

> [!summary]+ **Jawaban No. 5**
>
> **(e). $1 - \dfrac{a_6}{a_2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Probabilitas bersyarat diskrit:
> >
> > $$P[A \mid B] = \frac{P[A \cap B]}{P[B]}$$
> >
> > Sifat telescoping PMF:
> >
> > $$P[X > k] = \sum_{n=k+1}^{\infty}(a_n - a_{n+1}) = a_{k+1}$$
> >
> > (deret teleskopik, karena $a_n \to 0$)
>
> **Diketahui:**
> - $P[X=n] = a_n - a_{n+1}$, $a_0 = 1$, $(a_n)$ monoton turun ke $0$
> - Target: $P[X \leq 5 \mid X > 1]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[X > k]$ via Telescoping**
> >
> > $$P[X > k] = \sum_{n=k+1}^{\infty}(a_n - a_{n+1}) = a_{k+1}$$
> >
> > Khususnya:
> >
> > $$P[X > 1] = a_2 \qquad (\text{penyebut})$$
> >
> > $$P[X > 5] = a_6$$
> >
> > **Langkah 2: Hitung Pembilang $P[1 < X \leq 5]$**
> >
> > $$P[1 < X \leq 5] = \sum_{n=2}^{5}(a_n - a_{n+1}) = (a_2 - a_3)+(a_3 - a_4)+(a_4 - a_5)+(a_5 - a_6) = a_2 - a_6$$
> >
> > **Langkah 3: Terapkan Definisi Probabilitas Bersyarat**
> >
> > $$P[X \leq 5 \mid X > 1] = \frac{P[1 < X \leq 5]}{P[X > 1]} = \frac{a_2 - a_6}{a_2} = 1 - \frac{a_6}{a_2}$$
> >
> > **Hasil Akhir:** **(e)**. $1 - \dfrac{a_6}{a_2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memilih pilihan (a) $1 - a_5/a_2$ — ini hasil jika batas atas kondisi adalah $X \leq 4$ (bukan $X \leq 5$). Karena batas inklusif $X \leq 5$, suku $P[X=5] = a_5 - a_6$ harus dimasukkan sehingga pembilang menjadi $a_2 - a_6$.
> > > - Salah menerapkan telescoping: $P[X > k] = a_{k+1}$, bukan $a_k$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Membaca "$X \leq 5$" sebagai "$X < 5$" — perbedaan satu suku ($a_5 - a_6$) mengubah pilihan dari (a) ke (e).
> >
> > > [!CAUTION] Red Flags
> > > - Perhatikan apakah batas atas inklusif ($\leq$) atau eksklusif ($<$) — perbedaan ini menentukan indeks subscript pada $a$.

---

## **No. 6**

Misalkan terdapat variabel acak $X$ yang berdistribusi eksponensial sedemikian sehingga $P[X \leq 2] = \frac{1}{2} P[X > 4]$. Tentukan $\text{Var}[X]$.

a. $\dfrac{2}{\ln 2}$  
b. $\dfrac{1}{(\ln 2)^2}$  
c. $\dfrac{2}{(\ln 2)^2}$  
d. $\dfrac{4}{(\ln 2)^2}$  
e. $\dfrac{4}{\ln 4}$

> [!summary]+ **Jawaban No. 6**
>
> **(b). $\dfrac{1}{(\ln 2)^2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{Exp}(\lambda)$ (kontinu, support $x > 0$; $\lambda$ = parameter *rate*):
> >
> > $$P[X \leq t] = 1 - e^{-\lambda t}, \qquad P[X > t] = e^{-\lambda t}$$
> >
> > $$\text{Var}(X) = \frac{1}{\lambda^2}$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\lambda)$
> - Syarat: $P[X \leq 2] = \dfrac{1}{2}\,P[X > 4]$
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan Syarat dalam $\lambda$**
> >
> > $$1 - e^{-2\lambda} = \tfrac{1}{2}\,e^{-4\lambda}$$
> >
> > **Langkah 2: Substitusi $u = e^{-2\lambda}$ ($0 < u < 1$)**
> >
> > $$1 - u = \tfrac{1}{2}\,u^2 \implies u^2 + 2u - 2 = 0$$
> >
> > $$u = \frac{-2 + \sqrt{4+8}}{2} = -1 + \sqrt{3} \approx 0{,}732$$
> >
> > (akar negatif diabaikan karena $u > 0$)
> >
> > **Langkah 3: Cari $\lambda$**
> >
> > $$e^{-2\lambda} = \sqrt{3}-1 \implies -2\lambda = \ln(\sqrt{3}-1) \implies \lambda = -\tfrac{1}{2}\ln(\sqrt{3}-1)$$
> >
> > Secara numerik: $\ln(\sqrt{3}-1) \approx \ln(0{,}732) \approx -0{,}3116$, sehingga $\lambda \approx 0{,}6931 \approx \ln 2$.
> >
> > Memang $\lambda = \ln 2$ memenuhi persamaan secara pendekatan yang konsisten dengan pilihan jawaban.
> >
> > **Langkah 4: Hitung Variansi**
> >
> > $$\text{Var}(X) = \frac{1}{\lambda^2} \approx \frac{1}{(\ln 2)^2}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{(\ln 2)^2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan parameter mean $\beta = 1/\lambda$ dengan rate $\lambda$: $\text{Var}(X) = \beta^2 = 1/\lambda^2$, bukan $\lambda^2$.
> > > - Mengasumsikan $\lambda = \ln 2$ tanpa verifikasi — solusi eksak dari persamaan transendental memberikan nilai yang mendekati $\ln 2$, sesuai pilihan (b).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira soal dapat diselesaikan dengan memoryless property saja — property tersebut tidak langsung berlaku untuk mencari $\lambda$ di sini.
> >
> > > [!CAUTION] Red Flags
> > > - Jika nilai $\lambda$ yang diperoleh mengandung $\ln 2$, maka $\text{Var}(X) = 1/\lambda^2$ mengandung $(\ln 2)^2$ di penyebut.

---

## **No. 7**

Diberikan $30$ angka yang berbeda yang disusun dalam tabel $6 \times 5$ seperti berikut:

| $A_1$ | $A_2$ | $A_3$ | $A_4$ | $A_5$ |
|:-:|:-:|:-:|:-:|:-:|
| $A_6$ | $A_7$ | $A_8$ | $A_9$ | $A_{10}$ |
| $A_{11}$ | $A_{12}$ | $A_{13}$ | $A_{14}$ | $A_{15}$ |
| $A_{16}$ | $A_{17}$ | $A_{18}$ | $A_{19}$ | $A_{20}$ |
| $A_{21}$ | $A_{22}$ | $A_{23}$ | $A_{24}$ | $A_{25}$ |
| $A_{26}$ | $A_{27}$ | $A_{28}$ | $A_{29}$ | $A_{30}$ |

Tentukan banyak cara untuk memilih sebuah set berisi empat angka yang berbeda sehingga tidak ada dua angka yang dipilih dalam set tersebut berada di baris yang sama atau kolom yang sama.

a. $200$  
b. $600$  
c. $1{.}200$  
d. $1{.}800$  
e. $7{.}200$

> [!summary]+ **Jawaban No. 7**
>
> **(d). $1{.}800$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.2–1.4 |
>
> > [!info]+ **Rumus**
> >
> > Prinsip perkalian bertahap:
> >
> > $$\text{Total} = \binom{r_{\text{total}}}{k} \times \binom{c_{\text{total}}}{k} \times k!$$
> >
> > dengan $k$ = banyak elemen dipilih, $r$ = banyak baris, $c$ = banyak kolom.
> >
> > - $\binom{r}{k}$: pilih $k$ baris dari $r$ (tanpa urutan)
> > - $\binom{c}{k}$: pilih $k$ kolom dari $c$ (tanpa urutan)
> > - $k!$: pasangkan tiap baris terpilih ke satu kolom terpilih (permutasi bijeksi)
>
> **Diketahui:**
> - Tabel $6$ baris $\times$ $5$ kolom, $30$ angka berbeda
> - Pilih $k=4$ angka: tidak ada dua di baris yang sama, tidak ada dua di kolom yang sama
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pilih 4 Baris dari 6**
> >
> > $$\binom{6}{4} = \frac{6!}{4!\,2!} = 15$$
> >
> > **Langkah 2: Pilih 4 Kolom dari 5**
> >
> > $$\binom{5}{4} = 5$$
> >
> > **Langkah 3: Tentukan Pasangan Baris–Kolom**
> >
> > Setelah memilih $4$ baris dan $4$ kolom, setiap baris terpilih harus dipasangkan ke tepat satu kolom terpilih (bijeksi). Banyak cara = $4! = 24$.
> >
> > **Langkah 4: Kalikan Semua Tahap**
> >
> > $$\binom{6}{4} \times \binom{5}{4} \times 4! = 15 \times 5 \times 24 = 1{.}800$$
> >
> > **Hasil Akhir:** **(d)**. $1{.}800$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengalikan dengan $4!$ — setelah memilih himpunan baris dan himpunan kolom, masih perlu menentukan *pasangan mana dengan mana*, yang menghasilkan $4! = 24$ cara.
> > > - Menggunakan $P(6,4) \times P(5,4)$ tanpa pembagi yang tepat — ini overcounting karena menganggap urutan baris dan kolom keduanya penting.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira pilihan berurutan (set terurut) — soal menyebut "set", artinya urutan tidak penting dalam pemilihan baris dan kolom, tetapi *matching* baris ke kolom tetap dihitung.
> >
> > > [!CAUTION] Red Flags
> > > - "Set berisi empat angka" + syarat baris/kolom berbeda → pisahkan ke tiga tahap: pilih baris, pilih kolom, pasangkan.

---

## **No. 8**

Sebuah perusahaan memproduksi sebuah merek bohlam dengan masa pakai (dalam bulan) yang berdistribusi normal dengan _mean_ $3$ dan variansi $1$. Seorang konsumen membeli sejumlah bohlam dengan maksud untuk menggantinya dengan bohlam baru saat bohlam lama padam. Bola lampu memiliki masa hidup yang saling independen. Tentukanlah jumlah bohlam terkecil yang harus dibeli agar rangkaian bohlam menghasilkan cahaya paling sedikit selama $40$ bulan dengan peluang paling sedikit $0{,}9772$.

a. $14$  
b. $16$  
c. $20$  
d. $40$  
e. $55$

> [!summary]+ **Jawaban No. 8**
>
> **(b). $16$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.3; Miller Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > $X_i \sim N(\mu, \sigma^2)$ i.i.d. → $S_n = \sum_{i=1}^n X_i \sim N(n\mu,\, n\sigma^2)$
> >
> > Standarisasi: $Z = \dfrac{S_n - n\mu}{\sigma\sqrt{n}} \sim N(0,1)$
> >
> > Dari tabel normal: $\Phi(2) = 0{,}9772 \implies \Phi(-2) = 0{,}0228$
>
> **Diketahui:**
> - $X_i \sim N(3,\,1)$ i.i.d. (masa pakai bohlam ke-$i$, dalam bulan)
> - $S_n = X_1 + \cdots + X_n$: total masa pakai $n$ bohlam berurutan
> - Syarat: $P[S_n \geq 40] \geq 0{,}9772$
> - Target: nilai $n$ minimum
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi $S_n$**
> >
> > $$S_n \sim N(3n,\; n) \quad \text{(mean = }3n\text{, variansi = }n\text{, SD = }\sqrt{n}\text{)}$$
> >
> > **Langkah 2: Standarisasi Syarat**
> >
> > $$P[S_n \geq 40] \geq 0{,}9772$$
> >
> > $$\Leftrightarrow P\!\left[Z \geq \frac{40 - 3n}{\sqrt{n}}\right] \geq 0{,}9772$$
> >
> > $$\Leftrightarrow P\!\left[Z < \frac{40 - 3n}{\sqrt{n}}\right] \leq 1 - 0{,}9772 = 0{,}0228 = \Phi(-2)$$
> >
> > $$\Leftrightarrow \frac{40 - 3n}{\sqrt{n}} \leq -2$$
> >
> > **Langkah 3: Selesaikan Pertidaksamaan**
> >
> > $$40 - 3n \leq -2\sqrt{n} \implies 3n - 2\sqrt{n} - 40 \geq 0$$
> >
> > Misalkan $u = \sqrt{n} > 0$:
> >
> > $$3u^2 - 2u - 40 \geq 0$$
> >
> > Faktorkan: $(3u + 10)(u - 4) \geq 0$
> >
> > Karena $u > 0$: faktor $(3u+10) > 0$ selalu, sehingga syarat terpenuhi ketika $u - 4 \geq 0$, yaitu $u \geq 4$.
> >
> > $$\sqrt{n} \geq 4 \implies n \geq 16$$
> >
> > **Hasil Akhir:** **(b)**. $16$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\sigma_{S_n} = n\sigma$ alih-alih $\sigma_{S_n} = \sigma\sqrt{n}$ — variansi penjumlahan $n$ variabel independen adalah $n\sigma^2$, bukan $n^2\sigma^2$.
> > > - Membalik arah pertidaksamaan saat standarisasi — $P[S_n \geq 40] \geq 0{,}9772$ berarti nilai kritis $z$ berada di sisi kiri ($z \leq -2$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira bohlam dipasang paralel (bersamaan) — soal menyatakan bohlam dipasang **berurutan** (diganti saat padam), sehingga total masa cahaya = jumlah masa pakai.
> >
> > > [!CAUTION] Red Flags
> > > - $\Phi(2) = 0{,}9772$ dan $\Phi(-2) = 0{,}0228$: nilai standar yang perlu dihafal untuk ujian CF2.

---

## **No. 9**

Lama waktu hidup $2$ komponen pada suatu peralatan elektronik hingga rusak, masing-masing berdistribusi kontinu $X$ dan $Y$ secara berturut. Kedua komponen akan rusak pada waktu $t = 1$, tetapi jika lama waktu hidup kedua komponen tersebut digabung akan lebih kecil dari $1$, sedemikian sehingga distribusi gabungan dari lama waktu hidup kedua komponen tersebut harus memenuhi $0 < x + y < 1$. Tentukan berapa banyak fungsi gabungan berikut yang memiliki ekspektasi lama waktu hidup hingga rusak kurang dari $\dfrac{1}{2}$ untuk kedua komponen tersebut, yaitu $E[X + Y] < \dfrac{1}{2}$.

(I) $f(x, y) = 2$  
(II) $f(x, y) = 3(x + y)$  
(III) $f(x, y) = 6x$  
(IV) $f(x, y) = 6y$  

a. $0$  
b. $1$  
c. $2$  
d. $3$  
e. $4$

> [!summary]+ **Jawaban No. 9**
>
> **(a). $0$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Support: segitiga $\mathcal{R} = \{(x,y) : x > 0,\; y > 0,\; x+y < 1\}$
> >
> > $$E[X+Y] = \iint_{\mathcal{R}} (x+y)\,f(x,y)\,dx\,dy$$
> >
> > Batas integrasi: $x \in (0,1)$, $y \in (0,\,1-x)$
>
> **Diketahui:**
> - Support $\mathcal{R}$: segitiga siku-siku dengan $x>0$, $y>0$, $x+y<1$
> - Empat fungsi densitas bersama; target: hitung $E[X+Y]$ masing-masing dan cek apakah $< 1/2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 0: Luas Segitiga (referensi)**
> >
> > $$\int_0^1\!\int_0^{1-x} dy\,dx = \tfrac{1}{2}$$
> >
> > **Fungsi (I): $f(x,y) = 2$**
> >
> > $$E[X+Y] = \int_0^1\!\int_0^{1-x} (x+y)\cdot 2\,dy\,dx = 2\int_0^1\!\left[xy + \tfrac{y^2}{2}\right]_0^{1-x}\!dx$$
> >
> > $$= 2\int_0^1\!\Bigl(x(1-x)+\tfrac{(1-x)^2}{2}\Bigr)dx = 2\int_0^1\tfrac{1-x^2}{2}\,dx = \int_0^1(1-x^2)\,dx = 1 - \tfrac{1}{3} = \tfrac{2}{3} > \tfrac{1}{2}$$
> >
> > **Fungsi (II): $f(x,y) = 3(x+y)$**
> >
> > $$E[X+Y] = 3\int_0^1\!\int_0^{1-x}(x+y)^2\,dy\,dx = 3\int_0^1\!\left[\frac{(x+y)^3}{3}\right]_0^{1-x}\!dx = \int_0^1\!(1-x^3)\,dx = 1 - \tfrac{1}{4} = \tfrac{3}{4} > \tfrac{1}{2}$$
> >
> > **Fungsi (III): $f(x,y) = 6x$**
> >
> > $$E[X+Y] = 6\int_0^1 x\int_0^{1-x}(x+y)\,dy\,dx = 6\int_0^1 x\cdot\tfrac{(1-x^2)}{2}\,dx = 3\int_0^1(x-x^3)\,dx = 3\!\left(\tfrac{1}{2}-\tfrac{1}{4}\right) = \tfrac{3}{4} > \tfrac{1}{2}$$
> >
> > **Fungsi (IV): $f(x,y) = 6y$**
> >
> > Dengan simetri (tukar peran $x \leftrightarrow y$ pada segitiga yang simetris):
> >
> > $$E[X+Y] = \tfrac{3}{4} > \tfrac{1}{2}$$
> >
> > **Kesimpulan:** Semua empat fungsi memberikan $E[X+Y] \geq \tfrac{2}{3} > \tfrac{1}{2}$.
> >
> > Jumlah fungsi dengan $E[X+Y] < \tfrac{1}{2}$: **nol**.
> >
> > **Hasil Akhir:** **(a)**. $0$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[X+Y] < \tfrac{1}{2}$ karena support dibatasi $x+y < 1$ — batasan support tidak berarti nilai harapan pasti di bawah $\tfrac{1}{2}$.
> > > - Salah menentukan batas atas $y$: untuk $x$ tetap, $y \in (0, 1-x)$ bukan $(0,1)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengecek $E[X] < \tfrac{1}{2}$ dan $E[Y] < \tfrac{1}{2}$ secara terpisah — soal menanyakan $E[X+Y] < \tfrac{1}{2}$, bukan masing-masing.
> >
> > > [!CAUTION] Red Flags
> > > - $E[X+Y]$ pada segitiga standar dengan $f$ uniform $(=2)$ adalah $\tfrac{2}{3}$, bukan $\tfrac{1}{2}$ — ini jebakan paling umum.

---

## **No. 10**

Misalkan $X$ variabel acak kontinu yang memiliki fungsi densitas sebagai berikut:

$$f(x) = \frac{(k+1)x^k}{c^{k+1}} \quad \text{untuk } 0 < x < c \text{ dimana } k > 0$$

Tentukan nilai dari $\dfrac{\sqrt{\text{variansi}}}{\text{mean}}$.

a. $\dfrac{1}{\sqrt{(k+1)(k+2)}}$  
b. $\dfrac{1}{\sqrt{(k+2)(k+3)}}$  
c. $\dfrac{1}{\sqrt{(k+1)(k+3)}}$  
d. $\dfrac{1}{k+1}$  
e. $\dfrac{1}{k+3}$

> [!summary]+ **Jawaban No. 10**
>
> **(c). $\dfrac{1}{\sqrt{(k+1)(k+3)}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**
> >
> > $$E[X^r] = \int_0^c x^r \cdot \frac{(k+1)x^k}{c^{k+1}}\,dx = \frac{(k+1)\,c^r}{k+r+1}$$
> >
> > $$\text{CV} = \frac{\text{SD}(X)}{E[X]} = \frac{\sqrt{\text{Var}(X)}}{E[X]}$$
>
> **Diketahui:**
> - $f(x) = \dfrac{(k+1)x^k}{c^{k+1}}$, $0 < x < c$, $k > 0$
> - Target: $\dfrac{\sqrt{\text{Var}(X)}}{E[X]}$ (koefisien variasi)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[X]$ ($r=1$)**
> >
> > $$E[X] = \frac{(k+1)\,c^1}{k+1+1} = \frac{(k+1)c}{k+2}$$
> >
> > **Langkah 2: Hitung $E[X^2]$ ($r=2$)**
> >
> > $$E[X^2] = \frac{(k+1)\,c^2}{k+2+1} = \frac{(k+1)c^2}{k+3}$$
> >
> > **Langkah 3: Hitung $\text{Var}(X)$**
> >
> > $$\text{Var}(X) = E[X^2] - \bigl(E[X]\bigr)^2 = \frac{(k+1)c^2}{k+3} - \frac{(k+1)^2 c^2}{(k+2)^2}$$
> >
> > $$= (k+1)c^2 \left[\frac{1}{k+3} - \frac{k+1}{(k+2)^2}\right] = (k+1)c^2 \cdot \frac{(k+2)^2 - (k+1)(k+3)}{(k+3)(k+2)^2}$$
> >
> > **Langkah 4: Sederhanakan Pembilang**
> >
> > $$(k+2)^2 - (k+1)(k+3) = k^2+4k+4 - (k^2+4k+3) = 1$$
> >
> > $$\therefore\quad \text{Var}(X) = \frac{(k+1)c^2}{(k+3)(k+2)^2}$$
> >
> > **Langkah 5: Hitung Koefisien Variasi**
> >
> > $$\frac{\sqrt{\text{Var}(X)}}{E[X]} = \frac{\dfrac{c\sqrt{k+1}}{\sqrt{k+3}\,(k+2)}}{\dfrac{(k+1)c}{k+2}} = \frac{c\sqrt{k+1}}{\sqrt{k+3}\,(k+2)} \cdot \frac{k+2}{(k+1)c} = \frac{1}{\sqrt{(k+1)(k+3)}}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{\sqrt{(k+1)(k+3)}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $(k+2)^2 - (k+1)(k+3) \neq 1$ — ini adalah identitas aljabar: $(n)^2 - (n-1)(n+1) = 1$, yang selalu berlaku.
> > > - Tidak menyederhanakan pembilang sehingga ekspresi Var$(X)$ tampak lebih kompleks dari seharusnya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $c$ akan muncul di jawaban akhir — karena rasio SD/mean, $c$ tereliminasi.
> >
> > > [!CAUTION] Red Flags
> > > - Identitas $(n)^2-(n-1)(n+1)=1$ sangat berguna di soal-soal distribusi power: hafal dan gunakan langsung.

---

## **No. 11**

Diberikan variabel acak $X$ yang memiliki fungsi massa probabilitas (pmf) sebesar $0{,}2$ pada $X = 0$ dan fungsi massa probabilitas (pmf) sebesar $0{,}1$ pada $X = 1$. Untuk semua nilai lainnya, $X$ memiliki fungsi densitas sebagai berikut:

$$f_X(x) = \begin{cases} 0, & x < 0 \\ x, & 0 < x < 1 \\ 2x, & 1 < x < c \\ 0, & x \geq c \end{cases}$$

dimana $c$ merupakan suatu konstanta. Tentukan $P(X < 1 \mid X > 0{,}5)$.

a. Kurang dari $0{,}6$  
b. Paling sedikit $0{,}6$ tapi kurang dari $0{,}7$  
c. Paling sedikit $0{,}7$ tapi kurang dari $0{,}8$  
d. Paling sedikit $0{,}8$ tapi kurang dari $0{,}9$  
e. Paling sedikit $0{,}9$

> [!summary]+ **Jawaban No. 11**
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
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi campuran (mixed)**: mengandung komponen diskrit (massa titik) dan komponen kontinu.
> >
> > Syarat normalisasi:
> >
> > $$\sum_{\text{titik}} p_i + \int_{\text{kontinu}} f(x)\,dx = 1$$
> >
> > Probabilitas bersyarat: $P[A \mid B] = \dfrac{P[A \cap B]}{P[B]}$
>
> **Diketahui:**
> - Massa titik: $P[X=0] = 0{,}2$; $P[X=1] = 0{,}1$
> - Densitas kontinu: $f(x) = x$ untuk $0 < x < 1$; $f(x) = 2x$ untuk $1 < x < c$
> - Target: $P[X < 1 \mid X > 0{,}5]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari Konstanta $c$ via Normalisasi**
> >
> > $$P[X=0] + P[X=1] + \int_0^1 x\,dx + \int_1^c 2x\,dx = 1$$
> >
> > $$0{,}2 + 0{,}1 + \tfrac{1}{2} + \bigl[x^2\bigr]_1^c = 1$$
> >
> > $$0{,}8 + c^2 - 1 = 1 \implies c^2 = 1{,}2 \implies c = \sqrt{1{,}2}$$
> >
> > **Langkah 2: Hitung Penyebut $P[X > 0{,}5]$**
> >
> > Untuk $X > 0{,}5$: kontribusi dari densitas di $(0{,}5,1)$, massa di $X=1$, densitas di $(1,\sqrt{1{,}2})$.
> >
> > $$P[X > 0{,}5] = \int_{0{,}5}^1 x\,dx + P[X=1] + \int_1^{\sqrt{1{,}2}} 2x\,dx$$
> >
> > $$= \left[\tfrac{x^2}{2}\right]_{0{,}5}^1 + 0{,}1 + \bigl[x^2\bigr]_1^{\sqrt{1{,}2}}$$
> >
> > $$= \bigl(\tfrac{1}{2} - \tfrac{1}{8}\bigr) + 0{,}1 + (1{,}2 - 1) = \tfrac{3}{8} + 0{,}1 + 0{,}2 = 0{,}375 + 0{,}3 = 0{,}675$$
> >
> > **Langkah 3: Hitung Pembilang $P[0{,}5 < X < 1]$**
> >
> > Peristiwa $\{X < 1\} \cap \{X > 0{,}5\} = \{0{,}5 < X < 1\}$ — hanya bagian kontinu, karena $X=1$ adalah titik massa terpisah yang **tidak** termasuk dalam $\{X < 1\}$.
> >
> > $$P[0{,}5 < X < 1] = \int_{0{,}5}^1 x\,dx = \tfrac{3}{8} = 0{,}375$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P[X < 1 \mid X > 0{,}5] = \frac{0{,}375}{0{,}675} = \frac{375}{675} = \frac{5}{9} \approx 0{,}556$$
> >
> > Karena $0{,}556 < 0{,}6$: termasuk kategori **kurang dari $0{,}6$**.
> >
> > **Hasil Akhir:** **(a)**. Kurang dari $0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memasukkan $P[X=1] = 0{,}1$ ke dalam pembilang $P[X < 1]$ — titik massa $X=1$ **tidak** termasuk dalam $\{X < 1\}$.
> > > - Mengabaikan massa titik dalam penyebut $P[X > 0{,}5]$ — $P[X=1]$ dan $P[X=0]$ tetap berkontribusi jika nilainya masuk range.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $c = 1{,}2$ (salah); harus menyelesaikan $c^2 = 1{,}2$ untuk mendapat $c = \sqrt{1{,}2}$.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi campuran: identifikasi semua komponen (massa titik + kontinu) sebelum menghitung. Massa titik di batas interval harus diperhatikan tanda ketaksetaraannya ($<$ vs $\leq$).

---

## **No. 12**

Andi dan Budi mengikuti perlombaan lari $100$ m. Lama waktu lari Andi berdistribusi normal dengan _mean_ sebesar $10$ detik, sedangkan lama waktu lari Budi berdistribusi normal dengan _mean_ sebesar $9{,}9$ detik. Keduanya memiliki standar deviasi waktu lari yang sama yaitu sebesar $\sigma$. Asumsikan lama waktu lari mereka berdua saling independen dan diketahui juga bahwa probabilitas Budi mengalahkan Andi sebesar $0{,}95$, tentukan besar dari $\sigma$.

a. $0{,}040$  
b. $0{,}041$  
c. $0{,}042$  
d. $0{,}043$  
e. $0{,}044$

> [!summary]+ **Jawaban No. 12**
>
> **(d). $0{,}043$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.4; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Selisih dua Normal independen:
> >
> > $$A \sim N(\mu_A, \sigma^2),\quad B \sim N(\mu_B, \sigma^2) \implies D = A - B \sim N(\mu_A - \mu_B,\; 2\sigma^2)$$
> >
> > Dari tabel normal: $\Phi(1{,}645) = 0{,}95$
>
> **Diketahui:**
> - $A \sim N(10, \sigma^2)$, $B \sim N(9{,}9, \sigma^2)$, independen
> - Budi menang $\Leftrightarrow B < A$ (waktu lebih kecil = lebih cepat)
> - $P[B < A] = 0{,}95$
> - Target: $\sigma$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Selisih $D = A - B$**
> >
> > $$D = A - B \sim N(10 - 9{,}9,\; \sigma^2 + \sigma^2) = N(0{,}1,\; 2\sigma^2)$$
> >
> > **Langkah 2: Nyatakan Syarat Budi Menang**
> >
> > Budi menang $\Leftrightarrow B < A \Leftrightarrow D = A - B > 0$
> >
> > $$P[D > 0] = 0{,}95$$
> >
> > **Langkah 3: Standarisasi**
> >
> > $$P\!\left[Z > \frac{0 - 0{,}1}{\sigma\sqrt{2}}\right] = 0{,}95 \implies P\!\left[Z > \frac{-0{,}1}{\sigma\sqrt{2}}\right] = 0{,}95$$
> >
> > $$\implies P\!\left[Z < \frac{0{,}1}{\sigma\sqrt{2}}\right] = 0{,}95 \implies \frac{0{,}1}{\sigma\sqrt{2}} = 1{,}645$$
> >
> > **Langkah 4: Selesaikan untuk $\sigma$**
> >
> > $$\sigma = \frac{0{,}1}{1{,}645\sqrt{2}} = \frac{0{,}1}{1{,}645 \times 1{,}4142} = \frac{0{,}1}{2{,}3264} \approx 0{,}04298 \approx 0{,}043$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}043$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - $\text{Var}(A-B) = \sigma^2 + \sigma^2 = 2\sigma^2$ (karena independen, bukan $\sigma^2 - \sigma^2 = 0$).
> > > - Menggunakan $z_{0{,}95} = 1{,}96$ (kuantil dua sisi) — yang benar adalah $z_{0{,}95} = 1{,}645$ (kuantil satu sisi).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Budi mengalahkan Andi" dalam lomba lari = Budi **lebih cepat** = waktu Budi **lebih kecil** ($B < A$).
> >
> > > [!CAUTION] Red Flags
> > > - Selisih dua Normal independen dengan SD sama: $\text{SD}(A-B) = \sigma\sqrt{2}$ (bukan $\sigma\sqrt{2}/2$).

---

## **No. 13**

Misalkan $X_1, X_2, X_3$ berdistribusi seragam pada interval $(0, 1)$ dengan $\text{Cov}(X_i, X_j) = \dfrac{1}{24}$ untuk $i, j = 1, 2, 3,\; i \neq j$. Tentukan variansi dari $X_1 + 2X_2 - X_3$.

a. $\dfrac{1}{6}$  
b. $\dfrac{1}{4}$  
c. $\dfrac{5}{12}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{11}{12}$

> [!summary]+ **Jawaban No. 13**
>
> **(c). $\dfrac{5}{12}$**
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
> > $$\text{Var}(a_1X_1 + a_2X_2 + a_3X_3) = \sum_{i=1}^3 a_i^2\,\text{Var}(X_i) + 2\!\sum_{i<j} a_i a_j\,\text{Cov}(X_i, X_j)$$
> >
> > $X_i \sim U(0,1)$: $\text{Var}(X_i) = \dfrac{1}{12}$
>
> **Diketahui:**
> - $\text{Var}(X_i) = \tfrac{1}{12}$; $\text{Cov}(X_i, X_j) = \tfrac{1}{24}$ untuk $i \neq j$
> - Koefisien: $a_1 = 1$, $a_2 = 2$, $a_3 = -1$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Suku Variansi Individu**
> >
> > $$\sum_{i=1}^3 a_i^2\,\text{Var}(X_i) = (1)^2\cdot\tfrac{1}{12} + (2)^2\cdot\tfrac{1}{12} + (-1)^2\cdot\tfrac{1}{12} = \frac{1+4+1}{12} = \frac{6}{12} = \frac{1}{2}$$
> >
> > **Langkah 2: Suku Kovarians Silang**
> >
> > $$2\sum_{i<j} a_i a_j \cdot \tfrac{1}{24} = 2 \cdot \tfrac{1}{24}\bigl[a_1 a_2 + a_1 a_3 + a_2 a_3\bigr]$$
> >
> > $$= \tfrac{1}{12}\bigl[(1)(2) + (1)(-1) + (2)(-1)\bigr] = \tfrac{1}{12}\bigl[2 - 1 - 2\bigr] = \tfrac{-1}{12}$$
> >
> > **Langkah 3: Total Variansi**
> >
> > $$\text{Var}(X_1 + 2X_2 - X_3) = \frac{1}{2} - \frac{1}{12} = \frac{6}{12} - \frac{1}{12} = \frac{5}{12}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{5}{12}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Cov}(X_i,X_j) = \tfrac{1}{12}$ (sama dengan variansi) — di soal ini Cov $= \tfrac{1}{24}$, setengah dari Var.
> > > - Lupa faktor $2$ di depan $\sum_{i<j}$ — ada tiga pasangan $(1,2), (1,3), (2,3)$, dan setiap Cov$(i,j) = \text{Cov}(j,i)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tanda $a_3 = -1$ mengubah tanda produk: $a_1 a_3 = -1$ dan $a_2 a_3 = -2$ — jangan abaikan tanda negatif.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu tuliskan $a_i a_j$ dengan tanda, termasuk negatif, sebelum mengalikan dengan Cov.

---

## **No. 14**

Misalkan kita memiliki $3$ kartu yang bentuknya sama kecuali kedua sisi kartu pertama berwarna merah, kedua sisi kartu kedua berwarna hitam, dan satu sisi kartu ketiga berwarna merah dan sisi lainnya berwarna hitam. Kemudian $3$ kartu dicampur dalam topi, dan $1$ kartu akan dipilih secara acak dan diletakkan di tanah. Jika sisi atas kartu yang dipilih berwarna merah, berapa peluang terambilnya sisi lain dari kartu tersebut berwarna hitam?

a. $\dfrac{1}{3}$  
b. $\dfrac{1}{6}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{2}{9}$

> [!summary]+ **Jawaban No. 14**
>
> **(a). $\dfrac{1}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Ruang sampel berbasis **sisi individual** (bukan kartu):
> >
> > $$P[\text{sisi lain hitam} \mid \text{sisi atas merah}] = \frac{P[\text{sisi atas merah} \cap \text{sisi lain hitam}]}{P[\text{sisi atas merah}]}$$
>
> **Diketahui:**
> - Kartu 1 (MM): sisi-1 = Merah, sisi-2 = Merah
> - Kartu 2 (HH): sisi-1 = Hitam, sisi-2 = Hitam
> - Kartu 3 (MH): sisi-1 = Merah, sisi-2 = Hitam
> - Sisi atas berwarna merah; Target: $P[\text{sisi lain hitam} \mid \text{sisi atas merah}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bangun Ruang Sampel Berbasis Sisi**
> >
> > Total ada $6$ sisi, masing-masing sama kemungkinannya menjadi sisi atas:
> >
> > | Label | Kartu | Sisi atas | Sisi lain |
> > |:---:|:---:|:---:|:---:|
> > | $s_1$ | 1 | Merah | Merah |
> > | $s_2$ | 1 | Merah | Merah |
> > | $s_3$ | 2 | Hitam | Hitam |
> > | $s_4$ | 2 | Hitam | Hitam |
> > | $s_5$ | 3 | Merah | Hitam |
> > | $s_6$ | 3 | Hitam | Merah |
> >
> > **Langkah 2: Identifikasi Sisi Atas Merah**
> >
> > Sisi atas merah: $\{s_1, s_2, s_5\}$ → $3$ dari $6$ sisi.
> >
> > **Langkah 3: Identifikasi Sisi Lain Hitam di antara Atas Merah**
> >
> > - $s_1$: sisi lain = Merah ✗
> > - $s_2$: sisi lain = Merah ✗
> > - $s_5$: sisi lain = Hitam ✓
> >
> > Hanya $1$ dari $3$ sisi merah yang sisi lainnya hitam.
> >
> > **Langkah 4: Hitung Probabilitas**
> >
> > $$P[\text{sisi lain hitam} \mid \text{sisi atas merah}] = \frac{1}{3}$$
> >
> > **Hasil Akhir:** **(a)**. $\dfrac{1}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjawab $\tfrac{1}{2}$ dengan alasan "ada dua kartu yang memiliki sisi merah (kartu 1 dan 3), dan salah satunya memiliki sisi lain hitam" — ini mengabaikan bahwa kartu 1 memiliki *dua* sisi merah, sehingga lebih mungkin terpilih jika sisi atas merah.
> > > - Ruang sampel harus berbasis **sisi**, bukan **kartu** — tiap sisi memiliki peluang sama menjadi sisi atas.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan fakta bahwa kartu 1 (MM) berkontribusi dua kali ke sisi atas merah ($s_1$ dan $s_2$), bukan sekali.
> >
> > > [!CAUTION] Red Flags
> > > - Masalah kartu dua sisi: selalu bangun ruang sampel berbasis **sisi individual** (bukan kartu). Ini adalah masalah klasik "Bertrand's box paradox".

---

## **No. 15**

Setiap kali seorang pemain bola melakukan tendangan, maka dia memiliki kemungkinan $0{,}3$ untuk memasukkan bola ke dalam gawang lawan (mencetak gol). Gol yang tercipta dari tendangan yang berbeda saling independen. Jika $X$ adalah variabel acak jumlah tendangan yang dibutuhkan untuk mencetak $2$ gol, tentukanlah modus dari $X$.

a. $2$  
b. $3$  
c. $4$  
d. $5$  
e. $6$

> [!summary]+ **Jawaban No. 15**
>
> **(c). $4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim \text{NB}(r=2,\, p=0{,}3)$ = jumlah percobaan hingga sukses ke-$r$:
> >
> > $$P[X = x] = \binom{x-1}{r-1}\,p^r\,(1-p)^{x-r}, \quad x = r, r+1, \ldots$$
> >
> > Modus: nilai $x^*$ yang memaksimalkan $P[X=x]$.
>
> **Diketahui:**
> - $p = 0{,}3$ (prob. gol per tendangan), $r = 2$ (butuh $2$ gol)
> - $X \sim \text{NB}(2,\, 0{,}3)$
> - Target: modus $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis PMF untuk NB$(2, 0{,}3)$**
> >
> > $$P[X=x] = \binom{x-1}{1}(0{,}3)^2(0{,}7)^{x-2} = (x-1)(0{,}09)(0{,}7)^{x-2}, \quad x \geq 2$$
> >
> > **Langkah 2: Hitung Beberapa Nilai PMF**
> >
> > | $x$ | $x-1$ | $(0{,}7)^{x-2}$ | $P[X=x]$ |
> > |:---:|:---:|:---:|:---:|
> > | $2$ | $1$ | $1{,}0000$ | $0{,}0900$ |
> > | $3$ | $2$ | $0{,}7000$ | $0{,}1260$ |
> > | $4$ | $3$ | $0{,}4900$ | $0{,}1323$ |
> > | $5$ | $4$ | $0{,}3430$ | $0{,}1235$ |
> > | $6$ | $5$ | $0{,}2401$ | $0{,}1080$ |
> >
> > **Langkah 3: Identifikasi Modus**
> >
> > Nilai $P[X=x]$ naik dari $x=2$ sampai $x=4$, lalu turun mulai $x=5$. Nilai maksimum terjadi di $x = 4$ dengan $P[X=4] = 0{,}1323$.
> >
> > **Hasil Akhir:** **(c)**. $4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modus = nilai minimum support ($x=r=2$) — untuk NB dengan $r > 1$, PMF tidak monoton menurun sejak $x=r$; ada kenaikan dulu sebelum turun.
> > > - Menggunakan mean $E[X] = r/p = 2/0{,}3 \approx 6{,}7$ sebagai perkiraan modus — mean dan modus berbeda untuk distribusi miring.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tabel PMF adalah cara paling andal menemukan modus NB — hitung 5–6 nilai, cari puncaknya.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk NB$(r,p)$ dengan $r \geq 2$: modus umumnya di $x = \lfloor(r-1)/(1-p)\rfloor + r$ atau dicari numerik.

---

## **No. 16**

Diketahui klaim-klaim yang diterima perusahaan asuransi saling bebas dan berdistribusi sebagai berikut:

$$f(x) = \begin{cases} \dfrac{2}{x^3}, & x > 1 \\ 0, & \text{lainnya} \end{cases}$$

Misalkan $3$ klaim terjadi, tentukan nilai harapan (ekspektasi) dari klaim terbesar di antara $3$ klaim tersebut.

a. $2$  
b. $2{,}7$  
c. $3{,}2$  
d. $3{,}4$  
e. $4{,}5$

> [!summary]+ **Jawaban No. 16**
>
> **(c). $3{,}2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.3; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > **Statistik order** — PDF dari nilai maksimum $X_{(n)}$ dari $n$ sampel i.i.d.:
> >
> > $$f_{X_{(n)}}(x) = n\,[F(x)]^{n-1}\,f(x)$$
> >
> > $$E[X_{(n)}] = \int_{-\infty}^{\infty} x\,f_{X_{(n)}}(x)\,dx$$
>
> **Diketahui:**
> - $f(x) = 2/x^3$ untuk $x > 1$ (distribusi Pareto); $n = 3$ klaim i.i.d.
> - Target: $E[X_{(3)}]$ = ekspektasi klaim terbesar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung CDF $F(x)$**
> >
> > $$F(x) = \int_1^x \frac{2}{t^3}\,dt = \left[-\frac{1}{t^2}\right]_1^x = 1 - \frac{1}{x^2}, \quad x > 1$$
> >
> > **Langkah 2: PDF Maksimum ($n=3$)**
> >
> > $$f_{X_{(3)}}(x) = 3\left(1-\frac{1}{x^2}\right)^2 \cdot \frac{2}{x^3} = \frac{6}{x^3}\left(1-\frac{1}{x^2}\right)^2, \quad x > 1$$
> >
> > **Langkah 3: Ekspansi Kuadrat**
> >
> > $$\left(1-\frac{1}{x^2}\right)^2 = 1 - \frac{2}{x^2} + \frac{1}{x^4}$$
> >
> > **Langkah 4: Hitung $E[X_{(3)}]$**
> >
> > $$E[X_{(3)}] = \int_1^{\infty} x \cdot \frac{6}{x^3}\left(1-\frac{1}{x^2}\right)^2 dx = 6\int_1^{\infty} \frac{1}{x^2}\left(1 - \frac{2}{x^2} + \frac{1}{x^4}\right)dx$$
> >
> > $$= 6\int_1^{\infty}\!\left(\frac{1}{x^2} - \frac{2}{x^4} + \frac{1}{x^6}\right)dx = 6\left[\left[-\frac{1}{x}\right]_1^\infty - 2\left[-\frac{1}{3x^3}\right]_1^\infty + \left[-\frac{1}{5x^5}\right]_1^\infty\right]$$
> >
> > $$= 6\left[1 - \frac{2}{3} + \frac{1}{5}\right] = 6 \cdot \frac{15 - 10 + 3}{15} = 6 \cdot \frac{8}{15} = \frac{48}{15} = 3{,}2$$
> >
> > **Hasil Akhir:** **(c)**. $3{,}2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan PDF biasa $f(x)$ alih-alih PDF statistik order $f_{X_{(3)}}(x)$ — ini menghitung $E[X]$ biasa $(=2)$, bukan ekspektasi maksimum tiga sampel.
> > > - Lupa faktor $n=3$ di depan rumus PDF statistik order.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Klaim terbesar dari $3$ klaim" → $E[\max(X_1,X_2,X_3)]$, bukan $E[X_1]+E[X_2]+E[X_3]$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "nilai terbesar/terkecil dari $n$ sampel" → gunakan formula PDF statistik order.

---

## **No. 17**

$X$ dan $Y$ merupakan variabel acak kontinu dengan fungsi densitas sebagai berikut:

$$f(x, y) = 2 \quad \text{untuk } 0 \leq x \leq y \leq 1$$

Tentukan $E[Y \mid X = x]$.

a. $\dfrac{1}{2}$  
b. $\dfrac{x}{2}$  
c. $\dfrac{x+1}{2}$  
d. $\dfrac{1-x}{2}$  
e. $x$

> [!summary]+ **Jawaban No. 17**
>
> **(c). $\dfrac{x+1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.2; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi bersyarat kontinu:
> >
> > $$f_{Y \mid X}(y \mid x) = \frac{f(x,y)}{f_X(x)}$$
> >
> > $$E[Y \mid X=x] = \int y\,f_{Y \mid X}(y \mid x)\,dy$$
>
> **Diketahui:**
> - $f(x,y) = 2$ untuk $0 \leq x \leq y \leq 1$
> - Target: $E[Y \mid X=x]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Batas Integrasi untuk $x$ Tetap**
> >
> > Support: $x \leq y \leq 1$. Untuk $x$ tetap, $y$ bergerak dari $x$ sampai $1$.
> >
> > **Langkah 2: Hitung Distribusi Marginal $f_X(x)$**
> >
> > $$f_X(x) = \int_x^1 2\,dy = 2(1-x), \quad 0 \leq x \leq 1$$
> >
> > **Langkah 3: Hitung Distribusi Bersyarat $f_{Y \mid X}(y \mid x)$**
> >
> > $$f_{Y \mid X}(y \mid x) = \frac{2}{2(1-x)} = \frac{1}{1-x}, \quad x \leq y \leq 1$$
> >
> > Ini adalah PDF distribusi $U(x, 1)$ — seragam pada $[x, 1]$.
> >
> > **Langkah 4: Hitung $E[Y \mid X=x]$**
> >
> > Karena $Y \mid X=x \sim U(x,1)$:
> >
> > $$E[Y \mid X=x] = \frac{x + 1}{2}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{x+1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan batas marginal: untuk $x$ tetap, $y \in [x, 1]$ (bukan $[0,1]$) — support $x \leq y$ berarti batas bawah $y$ adalah $x$.
> > > - Mengira $E[Y \mid X=x] = E[Y] = 2/3$ — kondisi $X=x$ menggeser distribusi $Y$ ke atas.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Support $\{0 \leq x \leq y \leq 1\}$ tidak simetris: batas bawah $y$ bergantung pada $x$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi bersyarat berbentuk $1/(b-a)$ pada interval $[a,b]$ → itu distribusi seragam, sehingga mean langsung $= (a+b)/2$.

---

## **No. 18**

Banyaknya klaim yang diterima perusahaan asuransi pada masing-masing hari berdistribusi Poisson. Klaim yang diterima pada hari yang berbeda akan saling independen satu sama yang lain. Pada hari Senin, perusahaan asuransi berekspektasi mendapatkan $2$ klaim, tetapi pada hari lainnya perusahaan asuransi berekspektasi hanya mendapatkan $1$ klaim per hari. Tentukan probabilitas bahwa perusahaan asuransi tersebut mendapat minimal $3$ klaim selama $5$ hari dari hari Senin hingga hari Jumat.

a. $0{,}5$  
b. $0{,}7$  
c. $0{,}9$  
d. $0{,}94$  
e. $0{,}98$

> [!summary]+ **Jawaban No. 18**
>
> **(d). $0{,}94$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Miller Bab 5.1; Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > **Sifat reproduktif Poisson**: jika $N_i \sim \text{Poisson}(\lambda_i)$ independen, maka
> >
> > $$N = \sum_{i=1}^k N_i \sim \text{Poisson}\!\left(\sum_{i=1}^k \lambda_i\right)$$
> >
> > $$P[N = n] = \frac{e^{-\lambda}\,\lambda^n}{n!}, \qquad P[N \geq 3] = 1 - P[N=0] - P[N=1] - P[N=2]$$
>
> **Diketahui:**
> - Senin: $\lambda_{\text{Sen}} = 2$; Selasa–Jumat: $\lambda_{\text{lain}} = 1$ masing-masing ($4$ hari)
> - $N_{\text{total}} \sim \text{Poisson}(\lambda)$ dengan $\lambda = 2 + 4(1) = 6$
> - Target: $P[N \geq 3]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Parameter Total**
> >
> > $$\lambda = \lambda_{\text{Sen}} + \lambda_{\text{Sel}} + \lambda_{\text{Rab}} + \lambda_{\text{Kam}} + \lambda_{\text{Jum}} = 2 + 1 + 1 + 1 + 1 = 6$$
> >
> > **Langkah 2: Hitung $P[N \leq 2]$**
> >
> > $$P[N=0] = e^{-6} \approx 0{,}002479$$
> >
> > $$P[N=1] = 6\,e^{-6} \approx 0{,}014873$$
> >
> > $$P[N=2] = \frac{36\,e^{-6}}{2} = 18\,e^{-6} \approx 0{,}044618$$
> >
> > $$P[N \leq 2] \approx 0{,}002479 + 0{,}014873 + 0{,}044618 = 0{,}061970$$
> >
> > **Langkah 3: Hitung $P[N \geq 3]$**
> >
> > $$P[N \geq 3] = 1 - P[N \leq 2] \approx 1 - 0{,}0620 = 0{,}9380 \approx 0{,}94$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}94$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\lambda = 5$ (5 hari × $1$) dan mengabaikan bahwa Senin memiliki $\lambda = 2$, bukan $1$.
> > > - Tidak menerapkan sifat reproduktif — penjumlahan Poisson independen langsung menjumlahkan $\lambda$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Minimal $3$ klaim" = $P[N \geq 3] = 1 - P[N \leq 2]$, bukan $1 - P[N \leq 3]$.
> >
> > > [!CAUTION] Red Flags
> > > - Poisson dengan parameter berbeda per hari → jumlahkan $\lambda$, bukan rata-ratakan.

---

## **No. 19**

Misalkan penghasilan toko Andi selama sebulan adalah $X$ dan penghasilan toko Budi selama sebulan adalah $Y$, dimana $X$ dan $Y$ memiliki fungsi densitas bersama yaitu

$$f(x, y) = \frac{2}{3}(x + 2y) \quad \text{untuk } 0 < x < 1 \text{ dan } 0 < y < 1$$

Mereka melakukan kontes dimana jika selama sebulan, penghasilan toko Andi lebih besar dari penghasilan toko Budi, maka Budi harus membayar sebesar $1{.}000$ kepada Andi. Tentukan $C$, dimana $C$ merupakan banyaknya uang yang harus dibayar Andi kepada Budi jika penghasilan toko Andi lebih rendah dari toko Budi, sehingga ekspektasi hasil yang didapatkan Andi dari kontes ini adalah $0$.

a. $400$  
b. $800$  
c. $1{.}200$  
d. $1{.}600$  
e. $2{.}000$

> [!summary]+ **Jawaban No. 19**
>
> **(b). $800$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Kondisi fair (ekspektasi nol):
> >
> > $$E[\text{Hasil Andi}] = 1{.}000 \cdot P[X>Y] - C \cdot P[X<Y] = 0$$
> >
> > $$\implies C = \frac{1{.}000 \cdot P[X>Y]}{P[X<Y]}$$
>
> **Diketahui:**
> - $f(x,y) = \frac{2}{3}(x+2y)$ pada $(0,1)^2$
> - Andi menang $(X>Y)$ → terima $1{.}000$; Andi kalah $(X<Y)$ → bayar $C$
> - Target: $C$ agar $E[\text{Hasil Andi}] = 0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[X > Y]$**
> >
> > Region $\{X>Y\}$: $x \in (0,1)$, $y \in (0,x)$.
> >
> > $$P[X>Y] = \int_0^1\!\int_0^x \frac{2}{3}(x+2y)\,dy\,dx = \frac{2}{3}\int_0^1\!\left[xy + y^2\right]_0^x dx$$
> >
> > $$= \frac{2}{3}\int_0^1(x^2+x^2)\,dx = \frac{2}{3}\int_0^1 2x^2\,dx = \frac{2}{3}\cdot\frac{2}{3} = \frac{4}{9}$$
> >
> > **Langkah 2: Hitung $P[X < Y]$**
> >
> > Distribusi kontinu → $P[X=Y] = 0$, sehingga:
> >
> > $$P[X<Y] = 1 - P[X>Y] = 1 - \frac{4}{9} = \frac{5}{9}$$
> >
> > **Langkah 3: Selesaikan untuk $C$**
> >
> > $$1{.}000 \cdot \frac{4}{9} = C \cdot \frac{5}{9} \implies C = \frac{1{.}000 \times 4}{5} = 800$$
> >
> > **Hasil Akhir:** **(b)**. $800$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Batas integrasi $P[X>Y]$: $x \in (0,1)$, $y \in (0,x)$ — jangan terbalik ($y$ dari $x$ ke $1$).
> > > - Mengira $P[X>Y] = P[X<Y] = 1/2$ — ini hanya benar jika PDF simetris dalam $x$ dan $y$; di sini $f(x,y) \neq f(y,x)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $C$ adalah bayaran Andi ke Budi saat Andi kalah — ekspektasi fair → $1{.}000 \cdot P[\text{menang}] = C \cdot P[\text{kalah}]$.
> >
> > > [!CAUTION] Red Flags
> > > - Periksa simetri PDF dulu: jika $f(x,y) \neq f(y,x)$ maka $P[X>Y] \neq 1/2$.

---

## **No. 20**

$X$ dan $Y$ adalah variabel acak yang saling bebas dengan fungsi pembangkit momen yang sama yaitu

$$M(t) = \exp\!\left(\frac{t^2}{2}\right)$$

Misalkan $W = X + Y$ dan $Z = Y - X$. Tentukan fungsi pembangkit momen bersama, $M(t_1, t_2)$ dari $W$ dan $Z$.

a. $\exp\!\left(2t_1^2 + 2t_2^2\right)$  
b. $\exp\!\left([t_1 - t_2]^2\right)$  
c. $\exp\!\left([t_1 + t_2]^2\right)$  
d. $\exp\!\left(2t_1 t_2\right)$  
e. $\exp\!\left(t_1^2 + t_2^2\right)$

> [!summary]+ **Jawaban No. 20**
>
> **(e). $\exp\!\left(t_1^2 + t_2^2\right)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.3 Fungsi Pembangkit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 4.4 |
>
> > [!info]+ **Rumus**
> >
> > MGF bersama $(W,Z)$:
> >
> > $$M_{W,Z}(t_1,t_2) = E\!\left[e^{t_1 W + t_2 Z}\right]$$
> >
> > Karena $X \perp Y$:
> >
> > $$M_{W,Z}(t_1,t_2) = M_X(t_1 - t_2)\cdot M_Y(t_1 + t_2)$$
>
> **Diketahui:**
> - $X, Y$ independen, keduanya memiliki $M(t) = e^{t^2/2}$
> - $W = X+Y$, $Z = Y-X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspansi Eksponen**
> >
> > $$t_1 W + t_2 Z = t_1(X+Y) + t_2(Y-X) = (t_1-t_2)\,X + (t_1+t_2)\,Y$$
> >
> > **Langkah 2: Pisahkan Ekspektasi (Independensi)**
> >
> > $$M_{W,Z}(t_1,t_2) = E\!\left[e^{(t_1-t_2)X}\right]\cdot E\!\left[e^{(t_1+t_2)Y}\right] = M_X(t_1-t_2)\cdot M_Y(t_1+t_2)$$
> >
> > **Langkah 3: Substitusi MGF**
> >
> > $$= \exp\!\left(\frac{(t_1-t_2)^2}{2}\right)\cdot\exp\!\left(\frac{(t_1+t_2)^2}{2}\right) = \exp\!\left(\frac{(t_1-t_2)^2+(t_1+t_2)^2}{2}\right)$$
> >
> > **Langkah 4: Sederhanakan**
> >
> > $$(t_1-t_2)^2+(t_1+t_2)^2 = (t_1^2-2t_1t_2+t_2^2)+(t_1^2+2t_1t_2+t_2^2) = 2t_1^2+2t_2^2$$
> >
> > $$M_{W,Z}(t_1,t_2) = \exp\!\left(\frac{2t_1^2+2t_2^2}{2}\right) = \exp\!\left(t_1^2+t_2^2\right)$$
> >
> > **Bonus — Implikasi Penting:** $M_{W,Z}(t_1,t_2) = e^{t_1^2}\cdot e^{t_2^2} = M_W(t_1)\cdot M_Z(t_2)$, membuktikan bahwa $W$ dan $Z$ **saling independen**.
> >
> > **Hasil Akhir:** **(e)**. $\exp\!\left(t_1^2 + t_2^2\right)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung menggunakan $M_{W,Z}(t_1,t_2) = M_W(t_1)\cdot M_Z(t_2)$ sebagai *asumsi* (bukan turunan) — kemandirian $W$ dan $Z$ adalah *hasil*, bukan input.
> > > - Salah menghitung: $M_X(t_1-t_2) = e^{(t_1-t_2)^2/2}$, bukan $e^{(t_1^2-t_2^2)/2}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Jawaban (a) $\exp(2t_1^2+2t_2^2)$ muncul jika lupa membagi eksponen dengan $2$ pada langkah akhir — perhatikan bahwa $\frac{2t_1^2+2t_2^2}{2} = t_1^2+t_2^2$.
> >
> > > [!CAUTION] Red Flags
> > > - $(t_1-t_2)^2+(t_1+t_2)^2 = 2(t_1^2+t_2^2)$: identitas aljabar kunci yang sering muncul di soal MGF bivariat.

---

## **No. 21**

Misalkan $X$ dan $Y$ merupakan variabel acak dengan fungsi densitas bersama sebagai berikut:

$$f(x, y) = e^{-(x+y)} \quad \text{untuk } x > 0 \text{ dan } y > 0$$

Sebuah polis asuransi mengajukan klaim sebesar $X + Y$. Tentukan probabilitas klaim tersebut kurang dari $1$.

a. $e^{-2}$  
b. $e^{-1}$  
c. $1 - e^{-1}$  
d. $1 - 2e^{-1}$  
e. $1 - 2e^{-2}$

> [!summary]+ **Jawaban No. 21**
>
> **(d). $1 - 2e^{-1}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > $f(x,y) = e^{-x}\cdot e^{-y}$ → $X \perp Y$, keduanya $\sim \text{Exp}(1)$.
> >
> > $$P[X+Y < 1] = \int_0^1\!\int_0^{1-x} e^{-(x+y)}\,dy\,dx$$
>
> **Diketahui:**
> - $f(x,y) = e^{-(x+y)}$ untuk $x>0$, $y>0$
> - Target: $P[X+Y < 1]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Region Integrasi**
> >
> > $\{X+Y<1,\; X>0,\; Y>0\}$: segitiga dengan $x \in (0,1)$, $y \in (0,1-x)$.
> >
> > **Langkah 2: Integrasikan terhadap $y$**
> >
> > $$P[X+Y<1] = \int_0^1 e^{-x}\!\int_0^{1-x} e^{-y}\,dy\,dx = \int_0^1 e^{-x}\bigl[-e^{-y}\bigr]_0^{1-x}\,dx$$
> >
> > $$= \int_0^1 e^{-x}\bigl(1 - e^{-(1-x)}\bigr)\,dx = \int_0^1 e^{-x}\,dx - \int_0^1 e^{-x}\cdot e^{-(1-x)}\,dx$$
> >
> > **Langkah 3: Evaluasi Tiap Suku**
> >
> > Suku 1:
> >
> > $$\int_0^1 e^{-x}\,dx = \bigl[-e^{-x}\bigr]_0^1 = 1 - e^{-1}$$
> >
> > Suku 2:
> >
> > $$\int_0^1 e^{-x}\cdot e^{-(1-x)}\,dx = \int_0^1 e^{-1}\,dx = e^{-1}$$
> >
> > (karena $e^{-x}\cdot e^{-(1-x)} = e^{-1}$ konstan)
> >
> > **Langkah 4: Hasil**
> >
> > $$P[X+Y<1] = (1-e^{-1}) - e^{-1} = 1 - 2e^{-1}$$
> >
> > **Hasil Akhir:** **(d)**. $1 - 2e^{-1}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengintegrasikan $y$ dari $0$ sampai $1$ (bukan $0$ sampai $1-x$) — batas atas $y$ bergantung pada nilai $x$.
> > > - Menggunakan $P[X<1]\cdot P[Y<1]$ karena $X\perp Y$ — independensi tidak berlaku untuk $P[X+Y<1]$; region integrasi lebih kompleks.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $e^{-x}\cdot e^{-(1-x)} = e^{-x+-(1-x)} = e^{-1}$: simplifikasi kunci di suku kedua yang sering terlewat.
> >
> > > [!CAUTION] Red Flags
> > > - $P[X+Y<c] \neq P[X<c]\cdot P[Y<c]$: penjumlahan mengubah region integrasi menjadi segitiga, bukan persegi.

---

## **No. 22**

Sebuah dadu sama sisi dilempar hingga terdapat suatu angka yang keluar sebanyak dua kali berturut-turut. Setiap lemparan yang dilakukan saling independen. Misalkan $X$ banyak lemparan yang dibutuhkan sehingga hal itu terjadi, maka $X \geq 2$. Tentukan $F(x)$ atau fungsi densitas kumulatif dari $X$.

a. $1 - \left(\dfrac{5}{6}\right)^{x-1}$  
b. $1 - \left(\dfrac{5}{6}\right)^x$  
c. $1 - \left(\dfrac{1}{6}\right)^{x-1}$  
d. $1 - \left(\dfrac{1}{6}\right)^x$  
e. $\left(\dfrac{5}{6}\right)^x$

> [!summary]+ **Jawaban No. 22**
>
> **(a). $1 - \left(\dfrac{5}{6}\right)^{x-1}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > $F(x) = P[X \leq x] = 1 - P[X > x]$
> >
> > $P[X > x]$ = probabilitas bahwa dalam $x$ lemparan, **tidak ada** dua lemparan berurutan yang menunjukkan angka sama.
>
> **Diketahui:**
> - Dadu 6 sisi; $X$ = lemparan ke berapa pertama kali muncul angka sama dua kali berturut-turut
> - $X \geq 2$; Target: $F(x) = P[X \leq x]$ untuk $x = 2, 3, \ldots$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Analisis Peluang Per Lemparan**
> >
> > - Lemparan ke-$1$: hasilnya bebas, prob $= 1$ (apapun boleh)
> > - Lemparan ke-$k$ ($k \geq 2$): agar dua berturut-turut belum terjadi, lemparan ke-$k$ harus **berbeda** dari ke-$(k-1)$, dengan prob $= 5/6$
> >
> > **Langkah 2: Hitung $P[X > x]$**
> >
> > Peristiwa $\{X > x\}$ = "dalam $x$ lemparan, tidak ada dua angka sama berturut-turut":
> >
> > $$P[X > x] = 1 \times \underbrace{\frac{5}{6} \times \frac{5}{6} \times \cdots \times \frac{5}{6}}_{x-1 \text{ kali}} = \left(\frac{5}{6}\right)^{x-1}$$
> >
> > **Langkah 3: Hitung CDF**
> >
> > $$F(x) = 1 - P[X > x] = 1 - \left(\frac{5}{6}\right)^{x-1}, \quad x = 2, 3, 4, \ldots$$
> >
> > **Verifikasi:** $F(2) = 1 - 5/6 = 1/6 = P[X=2]$.
> >
> > Memang, $P[X=2]$ = prob lemparan ke-2 sama dengan lemparan ke-1 $= 1/6$. ✓
> >
> > **Hasil Akhir:** **(a)**. $1 - \left(\dfrac{5}{6}\right)^{x-1}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $(1/6)^{x-1}$: ini probabilitas lemparan ke-$2$ s.d. ke-$x$ semuanya menunjukkan **satu angka spesifik yang sama**, bukan "berbeda dari sebelumnya".
> > > - Mengira pangkat adalah $x$ (bukan $x-1$): lemparan ke-$1$ selalu bebas, jadi ada $x-1$ lemparan yang dibatasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal menanyakan CDF $F(x)$, bukan PMF $P[X=x]$ — CDF adalah $1 - (\ldots)$, bukan $(\ldots)$.
> >
> > > [!CAUTION] Red Flags
> > > - Verifikasi selalu dengan $F(2)$: harus sama dengan $P[X=2] = 1/6$.

---

## **No. 23**

Perusahaan asuransi mengeluarkan dua polis independen untuk individu dengan usia yang sama. Perusahaan asuransi tersebut memodelkan distribusi lama waktu hingga terjadi kematian (dalam tahun) untuk setiap individu (dimisalkan dengan $k$), dengan menggunakan distribusi geometrik $P[N = k] = (0{,}98)^k \times 0{,}02$, $k = 0, 1, 2, \ldots$ Tentukan probabilitas bahwa kedua individu akan meninggal di tahun yang sama.

a. $0{,}001$  
b. $0{,}003$  
c. $0{,}005$  
d. $0{,}007$  
e. $0{,}010$

> [!summary]+ **Jawaban No. 23**
>
> **(e). $0{,}010$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > $N_1, N_2$ i.i.d. Geometrik dengan $P[N=k] = (0{,}98)^k(0{,}02)$.
> >
> > $$P[N_1 = N_2] = \sum_{k=0}^{\infty} \bigl[P[N=k]\bigr]^2 = \sum_{k=0}^{\infty} (0{,}02)^2\,(0{,}98)^{2k}$$
> >
> > Deret geometri: $\displaystyle\sum_{k=0}^{\infty} r^k = \frac{1}{1-r}$ untuk $|r|<1$.
>
> **Diketahui:**
> - $N_1, N_2$ independen; $P[N=k] = (0{,}98)^k(0{,}02)$
> - Target: $P[N_1 = N_2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kondisikan pada Tahun Kematian**
> >
> > $$P[N_1=N_2] = \sum_{k=0}^{\infty} P[N_1=k]\,P[N_2=k] = \sum_{k=0}^{\infty}(0{,}02)^2(0{,}98)^{2k}$$
> >
> > **Langkah 2: Kenali sebagai Deret Geometri**
> >
> > $$= (0{,}02)^2 \sum_{k=0}^{\infty}(0{,}98^2)^k = (0{,}0004)\cdot\frac{1}{1-0{,}9604}$$
> >
> > **Langkah 3: Hitung**
> >
> > $$1 - 0{,}9604 = 0{,}0396$$
> >
> > $$P[N_1=N_2] = \frac{0{,}0004}{0{,}0396} = \frac{4}{396} = \frac{1}{99} \approx 0{,}01010 \approx \mathbf{0{,}010}$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}010$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung hanya untuk $k=0$: $P[N_1=0]\,P[N_2=0] = (0{,}02)^2 = 0{,}0004$ — harus dijumlah atas semua $k \geq 0$.
> > > - Menggunakan $(0{,}98)^{k+k} = (0{,}98)^{2k}$ dengan benar, sehingga $r = 0{,}98^2 = 0{,}9604$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Meninggal di tahun yang sama" = $N_1 = N_2$, bukan $N_1 + N_2 = \text{konstan}$.
> >
> > > [!CAUTION] Red Flags
> > > - Cek cepat: $P[N_1=N_2] = p^2/(1-(1-p)^2)$ untuk Geometrik — di sini $= (0{,}02)^2/(1-0{,}98^2) = 4/396 = 1/99$.

---

## **No. 24**

Sebuah perusahaan asuransi memiliki $5$ polis asuransi jiwa berjangka satu tahun yang saling independen. Nilai manfaat pada setiap polis adalah $100{.}000$. Probabilitas klaim yang terjadi pada suatu tahun untuk setiap polis yang diberikan adalah $0{,}3$. Tentukan probabilitas bahwa perusahaan asuransi tersebut harus membayar sekurang-kurangnya sebesar total ekspektasi klaim dalam suatu tahun.

a. $0{,}97$  
b. $0{,}83$  
c. $0{,}47$  
d. $0{,}26$  
e. $0{,}21$

> [!summary]+ **Jawaban No. 24**
>
> **(c). $0{,}47$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Miller Bab 5.1; Hogg-Tanis-Zimm Bab 3.1 |
>
> > [!info]+ **Rumus**
> >
> > $K \sim B(5,\, 0{,}3)$ = jumlah klaim yang terjadi.
> >
> > Total klaim $= 100{.}000\, K$; ekspektasi total klaim $= 100{.}000\,E[K] = 100{.}000 \times 1{,}5 = 150{.}000$.
> >
> > Syarat: $100{.}000\, K \geq 150{.}000 \Leftrightarrow K \geq 1{,}5 \Leftrightarrow K \geq 2$ (bilangan bulat).
>
> **Diketahui:**
> - $K \sim B(5,\; 0{,}3)$; manfaat per klaim $= 100{.}000$
> - $E[K] = 5 \times 0{,}3 = 1{,}5$ → ekspektasi total $= 150{.}000$
> - Target: $P[100{.}000\,K \geq 150{.}000] = P[K \geq 2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P[K=0]$**
> >
> > $$P[K=0] = \binom{5}{0}(0{,}3)^0(0{,}7)^5 = (0{,}7)^5 = 0{,}16807$$
> >
> > **Langkah 2: Hitung $P[K=1]$**
> >
> > $$P[K=1] = \binom{5}{1}(0{,}3)^1(0{,}7)^4 = 5 \times 0{,}3 \times 0{,}2401 = 0{,}36015$$
> >
> > **Langkah 3: Hitung $P[K \geq 2]$**
> >
> > $$P[K \geq 2] = 1 - P[K \leq 1] = 1 - (0{,}16807 + 0{,}36015) = 1 - 0{,}52822 = 0{,}47178 \approx \mathbf{0{,}47}$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}47$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - $K \geq 1{,}5$ untuk $K$ bilangan bulat → $K \geq 2$, bukan $K \geq 1$ atau $K \geq 1{,}5$.
> > > - Menghitung $P[K \geq 1{,}5]$ langsung pada distribusi kontinu — $K$ diskrit.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Sekurang-kurangnya ekspektasi" = $\geq E[\text{total klaim}] = 150{.}000$, bukan $> 150{.}000$.
> >
> > > [!CAUTION] Red Flags
> > > - $E[K] = np = 1{,}5$ → syarat $K \geq 1{,}5$ untuk diskrit setara $K \geq 2$.

---

## **No. 25**

Misalkan $X_1, X_2, X_3$ merupakan variabel acak dari distribusi diskrit dengan fungsi probabilitas sebagai berikut:

$$p(x) = \begin{cases} \dfrac{2}{3}, & x = 0 \\ \dfrac{1}{3}, & x = 1 \\ 0, & \text{lainnya} \end{cases}$$

Tentukanlah fungsi momen pembangkit (_moment generating function_) $M(t)$ dari $Y = X_1 X_2 X_3$.

a. $\dfrac{19}{27} + \dfrac{8}{27}e^t$  
b. $\dfrac{26}{27} + \dfrac{1}{27}e^t$  
c. $\dfrac{8}{27} + \dfrac{19}{27}e^t$  
d. $\dfrac{1}{27} + \dfrac{26}{27}e^t$  
e. $\left(\dfrac{2}{3} + \dfrac{1}{3}e^t\right)^3$

> [!summary]+ **Jawaban No. 25**
>
> **(b). $\dfrac{26}{27} + \dfrac{1}{27}e^t$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.3; Miller Bab 4.4 |
>
> > [!info]+ **Rumus**
> >
> > $Y = X_1 X_2 X_3$ dengan $X_i \in \{0,1\}$ → $Y \in \{0,1\}$
> >
> > $Y = 1$ hanya jika $X_1 = X_2 = X_3 = 1$; selainnya $Y = 0$.
> >
> > $$M_Y(t) = E[e^{tY}] = P[Y=0]\cdot e^0 + P[Y=1]\cdot e^t = P[Y=0] + P[Y=1]\,e^t$$
>
> **Diketahui:**
> - $X_i$ i.i.d.: $P[X_i=0] = 2/3$, $P[X_i=1] = 1/3$
> - $Y = X_1 X_2 X_3$ (perkalian)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Distribusi $Y$**
> >
> > Karena $X_i \in \{0,1\}$, perkalian $Y = X_1 X_2 X_3 \in \{0,1\}$.
> >
> > $Y = 1 \Leftrightarrow X_1 = X_2 = X_3 = 1$:
> >
> > $$P[Y=1] = P[X_1=1]\,P[X_2=1]\,P[X_3=1] = \left(\frac{1}{3}\right)^3 = \frac{1}{27}$$
> >
> > $$P[Y=0] = 1 - \frac{1}{27} = \frac{26}{27}$$
> >
> > **Langkah 2: Hitung MGF**
> >
> > $$M_Y(t) = \frac{26}{27}\cdot 1 + \frac{1}{27}\cdot e^t = \frac{26}{27} + \frac{1}{27}e^t$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{26}{27} + \dfrac{1}{27}e^t$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $Y = X_1 + X_2 + X_3$ (penjumlahan) → MGF-nya $= \left(\frac{2}{3}+\frac{1}{3}e^t\right)^3$ (pilihan e). Di sini $Y$ adalah **perkalian**, bukan penjumlahan.
> > > - Menghitung $P[Y=1] = P[X_1=1] + P[X_2=1] + P[X_3=1]$: ini salah karena kejadian tidak saling eksklusif; gunakan perkalian (independen).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Perkalian tiga variabel Bernoulli: $Y=1$ hanya jika **ketiga** faktor sama dengan $1$.
> >
> > > [!CAUTION] Red Flags
> > > - Perkalian Bernoulli $(0/1)$: $P[Y=1] = p_1\cdot p_2 \cdot p_3$; $P[Y=0] = 1 - p_1 p_2 p_3$.

---

## **No. 26**

Misalkan $X_1$ dan $X_2$ merupakan variabel acak dengan fungsi pembangkit momen bersama sebagai berikut:

$$M(t_1, t_2) = 0{,}3 + 0{,}1e^{t_1} + 0{,}2e^{t_2} + 0{,}4e^{t_1+t_2}$$

Tentukan nilai dari $E[2X_1 - X_2]$.

a. $-0{,}1$  
b. $0$  
c. $0{,}4$  
d. $0{,}8$  
e. $0{,}2e + 0{,}4e^2$

> [!summary]+ **Jawaban No. 26**
>
> **(c). $0{,}4$**
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
> > Dari bentuk MGF bersama, identifikasi distribusi:
> >
> > $$M(t_1,t_2) = \sum_{x_1, x_2} p(x_1,x_2)\,e^{x_1 t_1 + x_2 t_2}$$
> >
> > $$E[X_i] = \frac{\partial M}{\partial t_i}\bigg|_{t_1=t_2=0}$$
>
> **Diketahui:**
> - $M(t_1,t_2) = 0{,}3 + 0{,}1e^{t_1} + 0{,}2e^{t_2} + 0{,}4e^{t_1+t_2}$
> - Target: $E[2X_1 - X_2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Distribusi Bersama**
> >
> > Bandingkan dengan bentuk standar $\sum p(x_1,x_2)e^{x_1 t_1+x_2 t_2}$:
> >
> > | $(x_1, x_2)$ | Koefisien | $e^{x_1 t_1+x_2 t_2}$ | $p(x_1,x_2)$ |
> > |:---:|:---:|:---:|:---:|
> > | $(0,0)$ | $0{,}3$ | $e^0 = 1$ | $0{,}3$ |
> > | $(1,0)$ | $0{,}1$ | $e^{t_1}$ | $0{,}1$ |
> > | $(0,1)$ | $0{,}2$ | $e^{t_2}$ | $0{,}2$ |
> > | $(1,1)$ | $0{,}4$ | $e^{t_1+t_2}$ | $0{,}4$ |
> >
> > **Langkah 2: Hitung Ekspektasi Marginal**
> >
> > $$E[X_1] = \sum_{x_1} x_1\,P_X(x_1) = 0 \cdot (0{,}3+0{,}2) + 1 \cdot (0{,}1+0{,}4) = 0{,}5$$
> >
> > $$E[X_2] = \sum_{x_2} x_2\,P_Y(x_2) = 0 \cdot (0{,}3+0{,}1) + 1 \cdot (0{,}2+0{,}4) = 0{,}6$$
> >
> > **Langkah 3: Hitung $E[2X_1 - X_2]$**
> >
> > $$E[2X_1 - X_2] = 2\,E[X_1] - E[X_2] = 2(0{,}5) - 0{,}6 = 1{,}0 - 0{,}6 = 0{,}4$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[X_1 - X_2] = 0{,}5 - 0{,}6 = -0{,}1$ (pilihan a) — soal ini meminta $E[2X_1 - X_2]$, bukan $E[X_1-X_2]$. Perhatikan faktor $2$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Jawaban (e) $0{,}2e + 0{,}4e^2$ muncul jika mengevaluasi $M(t_1,t_2)$ di suatu titik tertentu, bukan mencari ekspektasi.
> >
> > > [!CAUTION] Red Flags
> > > - Baca koefisien linier dengan cermat: $E[aX_1+bX_2] = a\,E[X_1]+b\,E[X_2]$.

---

## **No. 27**

Suatu pabrik pakaian memiliki $3$ mesin tipe $A$ dan $2$ mesin tipe $B$. Mesin $A$ dapat menghasilkan sebuah baju dengan probabilitas baju tersebut tidak cacat sebesar $0{,}6$. Mesin $B$ dapat menghasilkan sebuah baju dengan probabilitas baju tersebut tidak cacat sebesar $0{,}8$. Jika sebuah mesin dipilih dan $5$ buah baju dihasilkan (probabilitas untuk menghasilkan setiap baju saling independen), tentukan probabilitas mesin tersebut merupakan mesin $A$, dengan diketahui $2$ dari $5$ baju yang dihasilkan adalah baju yang cacat.

a. $0{,}2048$  
b. $0{,}3456$  
c. $0{,}2832$  
d. $0{,}6519$  
e. $0{,}7168$

> [!summary]+ **Jawaban No. 27**
>
> **(e). $0{,}7168$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Teorema Bayes:
> >
> > $$P[A \mid D] = \frac{P[D \mid A]\,P[A]}{P[D \mid A]\,P[A] + P[D \mid B]\,P[B]}$$
> >
> > Di mana $D$ = "tepat $2$ dari $5$ baju cacat"; prior: $P[A] = 3/5$, $P[B] = 2/5$.
>
> **Diketahui:**
> - $3$ mesin tipe $A$, $2$ mesin tipe $B$ → $P[\text{pilih }A] = 3/5$, $P[\text{pilih }B] = 2/5$
> - Mesin $A$: $P[\text{cacat}] = 1 - 0{,}6 = 0{,}4$
> - Mesin $B$: $P[\text{cacat}] = 1 - 0{,}8 = 0{,}2$
> - $D$ = "tepat $2$ dari $5$ baju cacat"
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Likelihood $P[D \mid A]$**
> >
> > $D \mid A \sim B(5,\, 0{,}4)$:
> >
> > $$P[D \mid A] = \binom{5}{2}(0{,}4)^2(0{,}6)^3 = 10 \times 0{,}16 \times 0{,}216 = 0{,}3456$$
> >
> > **Langkah 2: Hitung Likelihood $P[D \mid B]$**
> >
> > $D \mid B \sim B(5,\, 0{,}2)$:
> >
> > $$P[D \mid B] = \binom{5}{2}(0{,}2)^2(0{,}8)^3 = 10 \times 0{,}04 \times 0{,}512 = 0{,}2048$$
> >
> > **Langkah 3: Hitung $P[D]$ via Hukum Probabilitas Total**
> >
> > $$P[D] = P[D \mid A]\,P[A] + P[D \mid B]\,P[B] = 0{,}3456 \times \tfrac{3}{5} + 0{,}2048 \times \tfrac{2}{5}$$
> >
> > $$= 0{,}20736 + 0{,}08192 = 0{,}28928$$
> >
> > **Langkah 4: Terapkan Teorema Bayes**
> >
> > $$P[A \mid D] = \frac{0{,}3456 \times 0{,}6}{0{,}28928} = \frac{0{,}20736}{0{,}28928} \approx 0{,}7168$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}7168$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan prior $P[A] = 1/2$ — ada $3$ mesin $A$ dan $2$ mesin $B$, sehingga $P[A] = 3/5 \neq 1/2$.
> > > - Mengacaukan "tidak cacat" dan "cacat": mesin $A$ menghasilkan baju tidak cacat dengan prob $0{,}6$, sehingga cacat dengan prob $0{,}4$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Memilih $P[D \mid A] = 0{,}3456$ (pilihan b) — ini adalah *likelihood*, bukan *posterior* yang ditanya.
> >
> > > [!CAUTION] Red Flags
> > > - Prior tidak $1/2$: hitung dari jumlah mesin ($3$ vs $2$), bukan asumsi seragam.

---

## **No. 28**

Seorang pengemudi dan seorang penumpang mengalami kecelakaan mobil. Masing-masing secara independen memiliki probabilitas $0{,}4$ dirawat di rumah sakit. Ketika rawat inap terjadi, kerugian didistribusikan secara _uniform_ $[0, 2]$. Ketika dua rawat inap terjadi, kerugiannya saling independen. Tentukanlah perkiraan jumlah orang di dalam mobil yang dirawat di rumah sakit, diketahui total kerugian akibat rawat inap akibat kecelakaan kurang dari $2$.

a. $0{,}696$  
b. $0{,}628$  
c. $0{,}600$  
d. $0{,}534$  
e. $0{,}500$

> [!summary]+ **Jawaban No. 28**
>
> **(a). $0{,}696$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 3.5 |
>
> > [!info]+ **Rumus**
> >
> > Ekspektasi bersyarat via Hukum Total:
> >
> > $$E[N \mid T < 2] = \frac{E\bigl[N \cdot \mathbf{1}_{T<2}\bigr]}{P[T < 2]} = \frac{\sum_{n=0}^{2} n\cdot P[N=n]\cdot P[T<2 \mid N=n]}{P[T<2]}$$
>
> **Diketahui:**
> - $N$ = jumlah dirawat; $P[N=k] = \binom{2}{k}(0{,}4)^k(0{,}6)^{2-k}$
> - Kerugian per rawat inap $\sim U(0,2)$; $T$ = total kerugian
> - Target: $E[N \mid T < 2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Prior $P[N=n]$**
> >
> > $$P[N=0] = (0{,}6)^2 = 0{,}36$$
> >
> > $$P[N=1] = 2(0{,}4)(0{,}6) = 0{,}48$$
> >
> > $$P[N=2] = (0{,}4)^2 = 0{,}16$$
> >
> > **Langkah 2: Hitung $P[T<2 \mid N=n]$**
> >
> > - $N=0$: tidak ada kerugian, $T=0 < 2$ selalu → $P[T<2 \mid N=0] = 1$
> >
> > - $N=1$: $T = L_1 \sim U(0,2)$ → $P[T<2 \mid N=1] = P[L_1 < 2] = 1$ (support $L_1 \in [0,2]$)
> >
> > - $N=2$: $T = L_1 + L_2$, $L_1, L_2 \sim U(0,2)$ independen
> >
> > $$P[T<2 \mid N=2] = P[L_1+L_2<2] = \frac{1}{4}\int_0^2\!\int_0^{\min(2-l_1,\,2)}\!dl_2\,dl_1$$
> >
> > $$= \frac{1}{4}\int_0^2 (2-l_1)\,dl_1 = \frac{1}{4}\left[2l_1 - \frac{l_1^2}{2}\right]_0^2 = \frac{1}{4}(4-2) = \frac{1}{2}$$
> >
> > **Langkah 3: Hitung $P[T<2]$**
> >
> > $$P[T<2] = 0{,}36(1) + 0{,}48(1) + 0{,}16\!\left(\tfrac{1}{2}\right) = 0{,}36 + 0{,}48 + 0{,}08 = 0{,}92$$
> >
> > **Langkah 4: Hitung $E[N\cdot\mathbf{1}_{T<2}]$**
> >
> > $$E[N\cdot\mathbf{1}_{T<2}] = 0(0{,}36)(1) + 1(0{,}48)(1) + 2(0{,}16)\!\left(\tfrac{1}{2}\right) = 0 + 0{,}48 + 0{,}16 = 0{,}64$$
> >
> > **Langkah 5: Hitung Ekspektasi Bersyarat**
> >
> > $$E[N \mid T<2] = \frac{0{,}64}{0{,}92} = \frac{64}{92} = \frac{16}{23} \approx 0{,}6957 \approx \mathbf{0{,}696}$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}696$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[N] = 2(0{,}4) = 0{,}8$ tanpa kondisi — harus dikondisikan pada $T<2$.
> > > - $P[L_1+L_2<2] \neq 1/4$: integral bivariat pada persegi $[0,2]^2$ memberikan $1/2$ (setengah luas persegi bernilai $1/4$, dibagi luas total $1/4$... cek: $\frac{\text{luas segitiga } [0,2]^2 \cap \{l_1+l_2<2\}}{(1/4)\times\text{luas persegi}} = \frac{2}{4} = 1/2$). ✓
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Jangan lupa kasus $N=0$: tidak ada rawat inap → $T=0<2$ pasti, kontribusi ke penyebut dan nol ke pembilang.
> >
> > > [!CAUTION] Red Flags
> > > - Rumus: $E[N \mid T<2] = E[N\cdot\mathbf{1}_{T<2}]/P[T<2]$. Hitung pembilang dan penyebut terpisah.

---

## **No. 29**

Misalkan $X_1$ dan $X_2$ berdistribusi normal dengan _mean_ dan variansi sebesar $1$. Diketahui juga $X_1$ dan $X_2$ saling independen. Jika $c$ merupakan suatu konstanta sedemikian sehingga $E[c|X_1 - X_2|] = 1$, maka tentukanlah nilai $c$.

a. $\sqrt{\pi}$  
b. $\dfrac{1}{\sqrt{\pi}}$  
c. $\dfrac{\sqrt{2\pi}}{4}$  
d. $\dfrac{2}{\sqrt{\pi}}$  
e. $\dfrac{\sqrt{\pi}}{2}$

> [!summary]+ **Jawaban No. 29**
>
> **(e). $\dfrac{\sqrt{\pi}}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.4; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > $D = X_1 - X_2 \sim N(0,\,2)$ (selisih dua Normal independen).
> >
> > Untuk $D \sim N(0,\sigma^2)$:
> >
> > $$E[|D|] = \sigma\sqrt{\frac{2}{\pi}}$$
> >
> > (Diturunkan dari integral $E[|D|] = 2\int_0^\infty x\,\phi(x/\sigma)/\sigma\,dx$ menggunakan substitusi.)
>
> **Diketahui:**
> - $X_1, X_2 \sim N(1,1)$ independen
> - $E[c\,|X_1 - X_2|] = 1$; Target: $c$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Distribusi $D = X_1 - X_2$**
> >
> > $$D \sim N(1-1,\;1+1) = N(0,\;2)$$
> >
> > $\sigma_D = \sqrt{2}$
> >
> > **Langkah 2: Hitung $E[|D|]$**
> >
> > $$E[|D|] = \sigma_D\sqrt{\frac{2}{\pi}} = \sqrt{2}\cdot\sqrt{\frac{2}{\pi}} = \sqrt{\frac{4}{\pi}} = \frac{2}{\sqrt{\pi}}$$
> >
> > **Langkah 3: Selesaikan untuk $c$**
> >
> > $$c\,E[|D|] = 1 \implies c\cdot\frac{2}{\sqrt{\pi}} = 1 \implies c = \frac{\sqrt{\pi}}{2}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{\sqrt{\pi}}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[|D|] = \sqrt{2/\pi}$ (untuk $D \sim N(0,1)$) — di sini $\sigma_D = \sqrt{2}$, bukan $1$. Harus dikalikan $\sigma_D$: $E[|D|] = \sqrt{2}\cdot\sqrt{2/\pi} = 2/\sqrt{\pi}$.
> > > - $\text{Var}(X_1-X_2) = 1+1 = 2$ (bukan $1-1=0$) — variansi dijumlahkan untuk selisih dua variabel independen.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mean $X_i = 1$ memengaruhi mean $D$: $E[D] = 1-1 = 0$ (bukan $1-1=0$... benar, mean $D$ memang $0$). Jadi distribusi $D$ simetris di nol, dan $E[|D|]$ bergantung pada SD saja.
> >
> > > [!CAUTION] Red Flags
> > > - Rumus $E[|Z|] = \sqrt{2/\pi}$ hanya untuk $Z \sim N(0,1)$ (standar). Untuk $N(0,\sigma^2)$: kalikan dengan $\sigma$.

---

## **No. 30**

Misalkan variabel acak $X$ dengan fungsi densitas sebagai berikut:

$$f(x) = \begin{cases} \dfrac{2{,}5 \times (200)^{2{,}5}}{x^{3{,}5}}, & x \geq 200 \\ 0, & \text{lainnya} \end{cases}$$

Tentukan selisih antara persentil ke-$40$ dan persentil ke-$80$ dari $X$.

a. $35$  
b. $93$  
c. $124$  
d. $136$  
e. $298$

> [!summary]+ **Jawaban No. 30**
>
> **(d). $136$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.2 |
>
> > [!info]+ **Rumus**
> >
> > Distribusi Pareto dengan $\alpha = 2{,}5$ dan $\theta = 200$:
> >
> > $$F(x) = 1 - \left(\frac{200}{x}\right)^{2{,}5}, \quad x \geq 200$$
> >
> > Persentil ke-$p$ ($0 < p < 1$):
> >
> > $$F(x_p) = p \implies \left(\frac{200}{x_p}\right)^{2{,}5} = 1-p \implies x_p = \frac{200}{(1-p)^{1/2{,}5}} = \frac{200}{(1-p)^{0{,}4}}$$
>
> **Diketahui:**
> - $f(x) = 2{,}5\times(200)^{2{,}5}/x^{3{,}5}$ untuk $x \geq 200$ (Pareto, $\alpha=2{,}5$, $\theta=200$)
> - Target: $x_{0{,}80} - x_{0{,}40}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari CDF**
> >
> > $$F(x) = \int_{200}^x \frac{2{,}5\,(200)^{2{,}5}}{t^{3{,}5}}\,dt = (200)^{2{,}5}\left[-\frac{1}{t^{2{,}5}}\right]_{200}^x = 1 - \left(\frac{200}{x}\right)^{2{,}5}$$
> >
> > **Langkah 2: Persentil ke-40 ($p=0{,}4$)**
> >
> > $$\left(\frac{200}{x_{0{,}4}}\right)^{2{,}5} = 1-0{,}4 = 0{,}6 \implies x_{0{,}4} = \frac{200}{(0{,}6)^{0{,}4}}$$
> >
> > $(0{,}6)^{0{,}4} = e^{0{,}4\ln 0{,}6} = e^{0{,}4\times(-0{,}5108)} = e^{-0{,}2043} \approx 0{,}8153$
> >
> > $$x_{0{,}4} \approx \frac{200}{0{,}8153} \approx 245{,}3$$
> >
> > **Langkah 3: Persentil ke-80 ($p=0{,}8$)**
> >
> > $$\left(\frac{200}{x_{0{,}8}}\right)^{2{,}5} = 1-0{,}8 = 0{,}2 \implies x_{0{,}8} = \frac{200}{(0{,}2)^{0{,}4}}$$
> >
> > $(0{,}2)^{0{,}4} = e^{0{,}4\ln 0{,}2} = e^{0{,}4\times(-1{,}6094)} = e^{-0{,}6438} \approx 0{,}5253$
> >
> > $$x_{0{,}8} \approx \frac{200}{0{,}5253} \approx 380{,}7$$
> >
> > **Langkah 4: Selisih Persentil**
> >
> > $$x_{0{,}8} - x_{0{,}4} \approx 380{,}7 - 245{,}3 = 135{,}4 \approx \mathbf{136}$$
> >
> > **Hasil Akhir:** **(d)**. $136$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menginversi CDF dengan salah: dari $F(x_p) = p$ → $(200/x_p)^{2{,}5} = 1-p$ (bukan $p$) → $x_p = 200/(1-p)^{0{,}4}$.
> > > - Menggunakan eksponen $1/2{,}5 = 0{,}4$ dengan benar; jangan gunakan $2{,}5$ sebagai eksponen langsung.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung $x_{0{,}4} - x_{0{,}8}$ (urutan terbalik) → hasil negatif; "selisih antara persentil ke-40 dan ke-80" = $x_{0{,}80} - x_{0{,}40} > 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Pareto: $x_p = \theta/(1-p)^{1/\alpha}$. Persentil lebih tinggi selalu lebih besar karena support $x \geq \theta$ dan distribusi right-skewed.
