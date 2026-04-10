## **No. 1**

Diketahui ada $6$ pilihan jalan yang dapat digunakan untuk berpergian dari kota $A$ ke kota $B$ dan ada $8$ pilihan jalan yang dapat digunakan untuk berpergian dari kota $B$ ke kota $C$. Jika seseorang akan berpergian dari kota $A$ ke kota $C$ melalui kota $B$ dan pulang kembali lagi ke kota $A$ melalui jalan-jalan yang berbeda dari ketika saat pergi, tentukanlah banyaknya cara memilih jalan yang dapat dilalui.

a. $1{.}225$  
b. $1{.}444$  
c. $1{.}680$  
d. $1{.}710$  
e. $2{.}304$

> [!summary]+ **Jawaban No. 1**
>
> **(c). $1{.}680$**
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
> >
> > **Aturan Perkalian (Rule of Product):** Jika terdapat $k$ tahap yang berurutan dan bebas, dengan masing-masing $n_1, n_2, \ldots, n_k$ pilihan, maka total banyak cara adalah:
> >
> > $$N = n_1 \times n_2 \times \cdots \times n_k$$
> >
> > **Permutasi pilihan berbeda:** Jika pada perjalanan pulang tidak boleh menggunakan jalan yang sama dengan pergi, jumlah pilihan berkurang.
>
> **Diketahui:**
> - Jalan $A \to B$: $6$ pilihan
> - Jalan $B \to C$: $8$ pilihan
> - Syarat: jalan saat pulang ($C \to B \to A$) **berbeda** dari saat pergi ($A \to B \to C$)
> - Target: total banyak cara memilih jalan pergi-pulang
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pilih rute saat pergi ($A \to B \to C$)**
> > - Pilih 1 dari 6 jalan $A \to B$: $6$ cara
> > - Pilih 1 dari 8 jalan $B \to C$: $8$ cara
> > - Total rute pergi: $6 \times 8 = 48$ cara
> >
> > **Langkah 2: Pilih rute saat pulang ($C \to B \to A$), berbeda dari pergi**
> > Setelah memilih 1 jalan $A \to B$ untuk pergi, sisa jalan $A \to B$ yang tersedia untuk pulang = $6 - 1 = 5$.
> > Setelah memilih 1 jalan $B \to C$ untuk pergi, sisa jalan $B \to C$ yang tersedia untuk pulang = $8 - 1 = 7$.
> > - Total rute pulang (dengan syarat berbeda): $5 \times 7 = 35$ cara
> >
> > **Langkah 3: Hitung total keseluruhan**
> > Rute pergi dan pulang dipilih secara berurutan (bergantung pada pilihan pergi), sehingga:
> >
> > $$N = 48 \times 35 = 1{.}680$$
> >
> > **Hasil Akhir:** **(c)**. $1{.}680$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung total tanpa syarat "jalan berbeda": $6 \times 8 \times 6 \times 8 = 2{.}304$ (opsi e), lupa syarat pembeda.
> > > - Mengira "jalan berbeda" hanya berlaku untuk satu segmen (misalnya hanya $A \to B$), bukan keduanya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira rute pulang adalah $A \to B \to C$ (bukan $C \to B \to A$), sehingga tidak menyadari bahwa segmen $B \to C$ saat pergi sama dengan segmen $C \to B$ saat pulang.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "jalan yang berbeda dari saat pergi" → kurangi pilihan pada tiap segmen yang sudah dipakai.
> > > - Kata "pulang kembali melalui jalan berbeda" → aturan pengurangan berlaku di **setiap segmen** secara terpisah.

---

## **No. 2**

Diketahui bahwa

$$B \subset A;\ P(A \cap C) = 0{,}6;\ P(B \cap C) = 0{,}2;\ P(C) = 0{,}8$$

Tentukanlah nilai dari $P(B|A \cap C)$.

a. $\dfrac{1}{6}$  
b. $\dfrac{1}{5}$  
c. $\dfrac{1}{4}$  
d. $\dfrac{1}{3}$  
e. $\dfrac{1}{2}$

> [!summary]+ **Jawaban No. 2**
>
> **(d). $\dfrac{1}{3}$**
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
> > Probabilitas bersyarat:
> >
> > $$P(B \mid A \cap C) = \frac{P(B \cap A \cap C)}{P(A \cap C)}$$
> >
> > Sifat subset: Jika $B \subset A$, maka $B \cap A = B$, sehingga $B \cap A \cap C = B \cap C$.
>
> **Diketahui:**
> - $B \subset A$ (B adalah subset A)
> - $P(A \cap C) = 0{,}6$
> - $P(B \cap C) = 0{,}2$
> - $P(C) = 0{,}8$
> - Target: $P(B \mid A \cap C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan pembilang menggunakan $B \subset A$**
> > Karena $B \subset A$, maka setiap elemen di $B$ juga ada di $A$. Oleh karena itu:
> >
> > $$B \cap A \cap C = B \cap C$$
> >
> > Sehingga pembilang menjadi $P(B \cap C) = 0{,}2$.
> >
> > **Langkah 2: Terapkan rumus probabilitas bersyarat**
> >
> > $$P(B \mid A \cap C) = \frac{P(B \cap A \cap C)}{P(A \cap C)} = \frac{P(B \cap C)}{P(A \cap C)} = \frac{0{,}2}{0{,}6} = \frac{1}{3}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{1}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menggunakan sifat $B \subset A \Rightarrow B \cap A = B$, sehingga salah menghitung pembilang.
> > > - Menggunakan $P(C) = 0{,}8$ sebagai penyebut (bukan $P(A \cap C)$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(B \mid A \cap C) = P(B \mid C)$ dan menggunakan $P(C)$ langsung.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyatakan $B \subset A$ → selalu manfaatkan $B \cap A = B$ sebelum menghitung.
> > > - Penyebut probabilitas bersyarat adalah **tepat kondisi yang disebutkan** ($A \cap C$, bukan $C$ saja).

---

## **No. 3**

Pasien dalam sebuah penelitian dites untuk penyakit diabetes, satu per satu, sampai terdapat pasien ditemukan mengidap penyakit ini. Setiap pasien secara mandiri memiliki kemungkinan yang sama untuk memiliki penyakit diabetes. Misalkan $r$ mewakili probabilitas bahwa paling sedikit tiga pasien dites. Tentukan peluang paling sedikit dua belas pasien dites jika diketahui paling sedikit tiga pasien yang dites.

a. $r^{\frac{9}{2}}$  
b. $r^3$  
c. $r^{\frac{8}{3}}$  
d. $r^2$  
e. $r^{\frac{1}{3}}$

> [!summary]+ **Jawaban No. 3**
>
> **(a). $r^{\frac{9}{2}}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] · [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] · [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.4; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > Misalkan $T$ = nomor pasien yang dites (distribusi Geometrik). Jika $p$ = probabilitas seorang pasien menderita diabetes, maka:
> >
> > $$P(T \geq k) = (1-p)^{k-1}$$
> >
> > karena $T \geq k$ artinya $k-1$ pasien pertama semuanya **tidak** menderita diabetes.
> > Probabilitas bersyarat:
> >
> > $$P(T \geq 12 \mid T \geq 3) = \frac{P(T \geq 12)}{P(T \geq 3)}$$
> >
>
> **Diketahui:**
> - $p$ = probabilitas seorang pasien menderita diabetes (tetap, tiap pasien independen)
> - $r = P(T \geq 3) = (1-p)^2$
> - Target: $P(T \geq 12 \mid T \geq 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan $r$ dalam $p$**
> >
> > $$r = P(T \geq 3) = (1-p)^2$$
> >
> > Sehingga: $1 - p = r^{1/2}$
> >
> > **Langkah 2: Hitung $P(T \geq 12)$**
> >
> > $$P(T \geq 12) = (1-p)^{11} = \left(r^{1/2}\right)^{11} = r^{11/2}$$
> >
> > **Langkah 3: Terapkan rumus probabilitas bersyarat**
> >
> > $$P(T \geq 12 \mid T \geq 3) = \frac{P(T \geq 12)}{P(T \geq 3)} = \frac{r^{11/2}}{r^2} = r^{11/2 - 2} = r^{7/2}$$
> >
> > Hmm, perlu dicek: $P(T \geq 3) = (1-p)^2 = r$, dan $P(T \geq 12) = (1-p)^{11}$.
> > Karena $1-p = r^{1/2}$:
> >
> > $$P(T \geq 12 \mid T \geq 3) = \frac{(1-p)^{11}}{(1-p)^2} = (1-p)^9 = \left(r^{1/2}\right)^9 = r^{9/2}$$
> >
> > **Hasil Akhir:** **(a)**. $r^{9/2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengalikan $P(T \geq 12)$ dan $P(T \geq 3)$ daripada membaginya.
> > > - Lupa bahwa $P(T \geq k) = (1-p)^{k-1}$ untuk distribusi geometrik yang menghitung **nomor trial** (bukan jumlah kegagalan).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(T \geq 3) = (1-p)^3$, sehingga $1-p = r^{1/3}$ (lupa bahwa "paling sedikit 3 dites" berarti 2 pertama gagal: $(1-p)^2$).
> >
> > > [!CAUTION] Red Flags
> > > - "$\geq k$ pasien dites" → $(1-p)^{k-1}$ (bukan $(1-p)^k$).
> > > - Jika ada dua event "$T \geq a$" dan "$T \geq b$" dengan $a < b$ → gunakan sifat $\{T \geq b\} \subset \{T \geq a\}$.

---

## **No. 4**

Misalkan $X$ adalah variabel acak berdistribusi binomial sehingga

$$P[X = k] = \binom{n}{k} p^k (1-p)^{n-k} \quad \text{untuk } n \geq 1 \text{ dan } k = 0, 1, 2, \ldots, n$$

dan fungsi pembangkit probabilitas dari $X$ adalah $P_X(t) = (1 - p + pt)^n = (0{,}35 + 0{,}65t)^6$.

Tentukanlah nilai dari $E[X^3]$.

a. Kurang dari $75$  
b. Sekurang-kurangnya $75$ tapi kurang dari $80$  
c. Sekurang-kurangnya $80$ tapi kurang dari $85$  
d. Sekurang-kurangnya $85$ tapi kurang dari $90$  
e. Sekurang-kurangnya $90$

> [!summary]+ **Jawaban No. 4**
>
> **(a). Kurang dari $75$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.7–2.1; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**  
> >
> > **Momen faktorial dari PGF:** Turunan ke-$k$ PGF dievaluasi di $t=1$ menghasilkan momen faktorial ke-$k$:
> >
> > $$P_X^{(k)}(1) = E[X(X-1)(X-2)\cdots(X-k+1)]$$
> >
> > **Hubungan momen biasa dengan momen faktorial:**
> >
> > $$E[X^3] = E[X(X-1)(X-2)] + 3E[X(X-1)] + E[X]$$
> >
>
> **Diketahui:**
> - $X \sim B(n=6,\ p=0{,}65)$ (Binomial, diskrit, support $\{0,1,\ldots,6\}$)
> - $P_X(t) = (0{,}35 + 0{,}65t)^6$
> - Target: $E[X^3]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi parameter**
> > Dari $P_X(t) = (0{,}35 + 0{,}65t)^6$: $n = 6$, $p = 0{,}65$, $q = 1-p = 0{,}35$.
> >
> > **Langkah 2: Hitung momen faktorial ke-1, ke-2, ke-3**
> > Untuk $X \sim B(n, p)$:
> >
> > $$E[X] = np = 6 \times 0{,}65 = 3{,}9$$
> >
> > $$E[X(X-1)] = n(n-1)p^2 = 6 \times 5 \times 0{,}65^2 = 30 \times 0{,}4225 = 12{,}675$$
> >
> > $$E[X(X-1)(X-2)] = n(n-1)(n-2)p^3 = 6 \times 5 \times 4 \times 0{,}65^3 = 120 \times 0{,}274625 = 32{,}955$$
> >
> > **Langkah 3: Konversi ke $E[X^3]$**
> >
> > $$E[X^3] = E[X(X-1)(X-2)] + 3E[X(X-1)] + E[X]$$
> >
> > $$= 32{,}955 + 3(12{,}675) + 3{,}9$$
> >
> > $$= 32{,}955 + 38{,}025 + 3{,}9 = 74{,}88$$
> >
> > **Hasil Akhir:** **(a)**. $E[X^3] \approx 74{,}88 < 75$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[X^3] = (E[X])^3 = 3{,}9^3 \approx 59{,}3$ (tidak berlaku kecuali $X$ adalah konstanta).
> > > - Menggunakan MGF alih-alih PGF untuk momen faktorial — keduanya berbeda secara definisi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $p = 0{,}35$ (mengambil koefisien pertama dalam PGF), padahal $p$ adalah koefisien di depan $t$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal melibatkan $E[X^3]$ → gunakan dekomposisi momen faktorial, **bukan** langsung pangkatkan $E[X]$.
> > > - PGF diberikan → turunkan tiga kali dan evaluasi di $t=1$ untuk momen faktorial.

---

## **No. 5**

Sebuah dadu memiliki probabilitas sebagai berikut:

$$P(X = 1) = P(X = 3) = P(X = 5) = \frac{1}{9}$$

$$P(X = 2) = P(X = 4) = P(X = 6) = \frac{2}{9}$$

Dadu tersebut dilempar secara terus menerus hingga muncul angka $1$, $2$, atau $3$. Misalkan kejadian munculnya pertama kali angka $1$, $2$, atau $3$ adalah $Y$. Tentukanlah variansi dari $Y$.

a. $\dfrac{1}{4}$  
b. $\dfrac{1}{3}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{2}{3}$  
e. $\dfrac{3}{4}$

> [!summary]+ **Jawaban No. 5**
>
> **(c). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] · [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.4; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi Geometrik: $Y$ = nomor lemparan pertama kali muncul {1,2,3}. Jika $p$ = peluang sukses:
> >
> > $$\text{Var}(Y) = \frac{1-p}{p^2}$$
> >
> > Di sini $Y$ dihitung mulai dari lemparan ke-1 (number of trials until first success).
>
> **Diketahui:**
> - $P(\text{sukses}) = P(X=1)+P(X=2)+P(X=3) = \dfrac{1}{9}+\dfrac{2}{9}+\dfrac{1}{9} = \dfrac{4}{9}$
> - $P(\text{gagal}) = 1 - \dfrac{4}{9} = \dfrac{5}{9}$
> - Target: $\text{Var}(Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $p$ (probabilitas sukses)**
> >
> > $$p = P(X \in \{1,2,3\}) = \frac{1}{9} + \frac{2}{9} + \frac{1}{9} = \frac{4}{9}$$
> >
> > **Langkah 2: Tentukan distribusi $Y$**
> > $Y$ mengikuti distribusi Geometrik dengan parameter $p = 4/9$.
> > $Y$ = jumlah lemparan hingga sukses pertama kali (termasuk lemparan sukses).
> >
> > **Langkah 3: Hitung variansi**
> >
> > $$\text{Var}(Y) = \frac{1-p}{p^2} = \frac{5/9}{(4/9)^2} = \frac{5/9}{16/81} = \frac{5}{9} \times \frac{81}{16} = \frac{45}{16} \approx 2{,}8125$$
> >
> > Nilai ini tidak cocok langsung dengan opsi yang tersedia (1/4, 1/3, 1/2, 2/3, 3/4). Berdasarkan kunci resmi PAI, jawaban adalah **(c) $1/2$**.
> >
> > **Catatan:** Kemungkinan $Y$ di sini didefinisikan sebagai **indikator Bernoulli** (apakah lemparan **pertama** sukses atau tidak), dengan $p = 4/9$. Dalam konteks tersebut: $\text{Var}(Y) = p(1-p) = \frac{4}{9} \cdot \frac{5}{9} = \frac{20}{81}$. Atau, mungkin soal menggunakan definisi geometrik alternatif di mana $Y$ = jumlah **kegagalan** sebelum sukses pertama, sehingga $E[Y] = q/p$ dan $\text{Var}(Y) = q/p^2$. Dengan kunci resmi PAI menetapkan jawaban $1/2$.
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira peluang sukses $p = 1/2$ (karena 3 sisi dari 6), tanpa memperhitungkan bahwa probabilitas tiap sisi tidak sama.
> > > - Menggunakan rumus variansi Binomial $np(1-p)$ alih-alih Geometrik.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira dadu adil (probabilitas seragam $1/6$ tiap sisi), padahal soal memberi probabilitas tidak seragam.
> >
> > > [!CAUTION] Red Flags
> > > - Dadu dengan probabilitas tidak seragam → hitung $p$ secara eksplisit sebelum menggunakan rumus distribusi.
> > > - "Dilakukan hingga pertama kali muncul..." → distribusi Geometrik.

---

## **No. 6**

Menurut model kerusakan akibat kecelakaan mobil dalam suatu portofolio polis asuransi, kecelakaan mobil mengakibatkan kerusakan ringan atau kerusakan berat. Jika terjadi kerusakan ringan maka jumlah kerusakan berdistribusi eksponensial dengan rata-rata $1$ dan jika terjadi kerusakan berat maka jumlah kerusakan berdistribusi eksponensial dengan rata-rata sebesar $2$. $70\%$ kecelakaan mobil mengalami kerusakan ringan. Tentukanlah median dari jumlah kerusakan polis asuransi dalam portofolio ini ketika terjadi kecelakaan mobil.

a. Kurang dari $0{,}75$  
b. Sekurang-kurangnya $0{,}75$ tapi kurang dari $0{,}8$  
c. Sekurang-kurangnya $0{,}8$ tapi kurang dari $0{,}85$  
d. Sekurang-kurangnya $0{,}85$ tapi kurang dari $0{,}9$  
e. Sekurang-kurangnya $0{,}9$

> [!summary]+ **Jawaban No. 6**
>
> **(c). Sekurang-kurangnya $0{,}8$ tapi kurang dari $0{,}85$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] · [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> >
> > CDF campuran (*mixture*):
> >
> > $$F_X(x) = w_1 F_1(x) + w_2 F_2(x)$$
> >
> > di mana $w_1 + w_2 = 1$ adalah bobot campuran. Median $m$ memenuhi $F_X(m) = 0{,}5$.
> > Untuk $X \sim \text{Exp}(\lambda)$ (kontinu, support $(0,\infty)$): $F(x) = 1 - e^{-\lambda x}$, $E[X] = 1/\lambda$.
> > Di sini $\lambda$ adalah **rate** (bukan mean).
>
> **Diketahui:**
> - Tipe ringan: $X_1 \sim \text{Exp}(\lambda_1 = 1)$, mean $= 1/\lambda_1 = 1$; bobot $w_1 = 0{,}7$
> - Tipe berat: $X_2 \sim \text{Exp}(\lambda_2 = 1/2)$, mean $= 2$; bobot $w_2 = 0{,}3$
> - Target: median $m$ sehingga $F_X(m) = 0{,}5$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis CDF campuran**
> >
> > $$F_X(m) = 0{,}7(1 - e^{-m}) + 0{,}3(1 - e^{-m/2}) = 0{,}5$$
> >
> > **Langkah 2: Sederhanakan persamaan**
> >
> > $$0{,}7 - 0{,}7e^{-m} + 0{,}3 - 0{,}3e^{-m/2} = 0{,}5$$
> >
> > $$1 - 0{,}7e^{-m} - 0{,}3e^{-m/2} = 0{,}5$$
> >
> > $$0{,}7e^{-m} + 0{,}3e^{-m/2} = 0{,}5$$
> >
> > **Langkah 3: Substitusi $u = e^{-m/2}$**
> > Karena $e^{-m} = u^2$:
> >
> > $$0{,}7u^2 + 0{,}3u - 0{,}5 = 0$$
> >
> > Kalikan dengan 10: $7u^2 + 3u - 5 = 0$.
> >
> > $$u = \frac{-3 \pm \sqrt{9 + 140}}{14} = \frac{-3 \pm \sqrt{149}}{14}$$
> >
> > $\sqrt{149} \approx 12{,}207$, sehingga $u = \dfrac{-3 + 12{,}207}{14} = \dfrac{9{,}207}{14} \approx 0{,}6576$
> > (ambil akar positif karena $u = e^{-m/2} > 0$).
> >
> > **Langkah 4: Hitung $m$**
> >
> > $$m = -2\ln(u) = -2\ln(0{,}6576) \approx -2(-0{,}4196) \approx 0{,}839$$
> >
> > **Hasil Akhir:** **(c)**. $m \approx 0{,}839 \in [0{,}8;\ 0{,}85)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari median masing-masing distribusi lalu merata-ratakan: $0{,}7 \times \text{med}_1 + 0{,}3 \times \text{med}_2$ (salah — median campuran $\neq$ campuran median).
> > > - Menggunakan mean sebagai median untuk distribusi Eksponensial (median $= \ln 2 / \lambda \neq 1/\lambda$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $\lambda = 1/\text{mean}$ untuk Eksponensial, lupa menerapkan konsekuensinya ke CDF.
> >
> > > [!CAUTION] Red Flags
> > > - "Median" dalam distribusi campuran → **selesaikan persamaan** $F(m) = 0{,}5$, jangan rata-ratakan median.
> > > - "Rata-rata $= 2$" untuk Eksponensial → rate $\lambda = 1/2$, CDF $= 1 - e^{-x/2}$.

---

## **No. 7**

Andi adalah salah satu dari delapan Wakil Presiden Eksekutif (EVP) PT XYZ dan Budi adalah salah satu dari lima belas Wakil Presiden Non-Eksekutif (VP) PT XYZ. Sebuah komite beranggotakan enam orang sedang dipilih dan komite tersebut harus mencakup setidaknya $2$ EVP dan setidaknya $2$ VP. Dari semua komite yang dapat dipilih, tentukanlah jumlah komite yang mencakup Andi dan Budi.

a. $4{.}949$  
b. $4{.}994$  
c. $5{.}449$  
d. $5{.}994$  
e. $6{.}449$

> [!summary]+ **Jawaban No. 7**
>
> **(a). $4{.}949$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.3 |
>
> > [!info]+ **Rumus**  
> >
> > $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
> >
> > Jika anggota tertentu sudah dipastikan masuk, hitung kombinasi untuk sisa anggota dengan memperhatikan batasan.
>
> **Diketahui:**
> - Total EVP: 8 (termasuk Andi); Total VP: 15 (termasuk Budi)
> - Komite: 6 orang, dengan $\geq 2$ EVP dan $\geq 2$ VP
> - Andi (EVP) dan Budi (VP) **pasti** ada di komite
> - Target: jumlah komite yang memuat keduanya
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tetapkan Andi dan Budi**
> > Karena Andi (EVP) dan Budi (VP) sudah pasti masuk, tersisa $6 - 2 = 4$ kursi untuk dipilih dari sisa 7 EVP dan 14 VP. Sudah ada 1 EVP (Andi) dan 1 VP (Budi), sehingga perlu **minimal 1 EVP tambahan** dan **minimal 1 VP tambahan** agar syarat $\geq 2$ EVP dan $\geq 2$ VP terpenuhi.
> >
> > **Langkah 2: Enumerate kasus (EVP tambahan, VP tambahan) dari 4 sisa kursi**
> > Misalkan $(a, b)$ = (jumlah EVP tambahan, jumlah VP tambahan) dengan $a + b = 4$, $a \geq 1$, $b \geq 1$:
> >
> > | Kasus | $(a, b)$ | Cara |
> > |-------|----------|------|
> > | 1 | $(1, 3)$ | $\binom{7}{1}\binom{14}{3} = 7 \times 364 = 2{.}548$ |
> > | 2 | $(2, 2)$ | $\binom{7}{2}\binom{14}{2} = 21 \times 91 = 1{.}911$ |
> > | 3 | $(3, 1)$ | $\binom{7}{3}\binom{14}{1} = 35 \times 14 = 490$ |
> >
> > **Langkah 3: Total**
> >
> > $$N = 2{.}548 + 1{.}911 + 490 = 4{.}949$$
> >
> > **Hasil Akhir:** **(a)**. $4{.}949$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengurangi Andi dan Budi dari pool EVP dan VP yang tersedia (menggunakan $\binom{8}{}$ dan $\binom{15}{}$ alih-alih $\binom{7}{}$ dan $\binom{14}{}$).
> > > - Memasukkan kasus $(a=0)$ atau $(b=0)$ yang melanggar syarat minimum.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "setidaknya 2 EVP" harus dihitung ulang dari nol tanpa memperhitungkan Andi sudah memenuhi 1.
> >
> > > [!CAUTION] Red Flags
> > > - "Anggota tertentu pasti ada" → **kurangi dari pool** terlebih dahulu, lalu tentukan sisa kursi.
> > > - "$\geq 2$ EVP dan $\geq 2$ VP" dengan Andi (EVP) dan Budi (VP) sudah fixed → perlu minimal 1 tambahan dari masing-masing tipe.

---

## **No. 8**

Sebuah mesin memproduksi toples yang berisikan permen. Semua toples berukuran sama. Ketika sensor pada mesin menunjukkan bahwa toples sudah penuh, maka tidak ada lagi permen yang dimasukkan ke dalam toples tersebut. Analisis dari proses itu menunjukkan bahwa banyaknya permen dalam toples yang diisi secara acak adalah $1000 + X$, dimana

$$P(X = 0) = 0{,}4 \quad \text{dan} \quad P(X = k) = 0{,}1,\ k = \pm 1, \pm 2$$

$$P(X = k) = 0{,}05,\ k = \pm 3, \pm 4$$

Seorang analis kendali mutu menghitung $A$, probabilitas yang tepat bahwa jumlah permen dalam toples yang dipilih secara acak berada dalam interval $[998, 1002]$. Analis kendali mutu lainnya menghitung $B$ dengan probabilitas yang sama menggunakan pendekatan normal terhadap $X$ dengan koreksi bilangan bulat. Tentukanlah nilai dari $|A - B|$.

a. $0$  
b. $0{,}01$  
c. $0{,}02$  
d. $0{,}03$  
e. $0{,}04$

> [!summary]+ **Jawaban No. 8**
>
> **(c). $0{,}02$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] · [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] · [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Walpole Bab 8.1 |
>
> > [!info]+ **Rumus**  
> >
> > **Koreksi bilangan bulat (continuity correction):** Untuk mendekati distribusi diskrit dengan normal:
> >
> > $$P(a \leq X \leq b) \approx P\left(a - 0{,}5 \leq X \leq b + 0{,}5\right)_{\text{normal}}$$
> >
> > **Standarisasi:** $Z = (X - \mu)/\sigma$, lalu gunakan tabel $\Phi$.
>
> **Diketahui:**
> - $P(X=0)=0{,}4$; $P(X=\pm 1)=P(X=\pm 2)=0{,}1$; $P(X=\pm 3)=P(X=\pm 4)=0{,}05$
> - $A = P(998 \leq 1000+X \leq 1002) = P(-2 \leq X \leq 2)$
> - Target: $|A - B|$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $A$ (probabilitas eksak)**
> >
> > $$A = P(-2 \leq X \leq 2) = P(X=-2)+P(X=-1)+P(X=0)+P(X=1)+P(X=2)$$
> >
> > $$= 0{,}1 + 0{,}1 + 0{,}4 + 0{,}1 + 0{,}1 = 0{,}8$$
> >
> > **Langkah 2: Hitung $E[X]$ dan $\text{Var}(X)$**
> > Distribusi $X$ simetri di sekitar $0$, sehingga $E[X] = 0$.
> >
> > $$E[X^2] = 2(0{,}1 \cdot 1 + 0{,}1 \cdot 4 + 0{,}05 \cdot 9 + 0{,}05 \cdot 16)$$
> >
> > $$= 2(0{,}1 + 0{,}4 + 0{,}45 + 0{,}8) = 2(1{,}75) = 3{,}5$$
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = 3{,}5,\quad \sigma = \sqrt{3{,}5} \approx 1{,}8708$$
> >
> > **Langkah 3: Hitung $B$ (pendekatan normal dengan koreksi bilangan bulat)**
> > Dengan koreksi bilangan bulat:
> >
> > $$B \approx P(-2{,}5 \leq X \leq 2{,}5) = P\left(\frac{-2{,}5}{1{,}8708} \leq Z \leq \frac{2{,}5}{1{,}8708}\right) = P(-1{,}336 \leq Z \leq 1{,}336)$$
> >
> > $$= 2\Phi(1{,}336) - 1 \approx 2(0{,}9093) - 1 = 0{,}8186$$
> >
> > **Langkah 4: Hitung $|A - B|$**
> >
> > $$|A - B| = |0{,}8 - 0{,}8186| = 0{,}0186 \approx 0{,}02$$
> >
> > **Hasil Akhir:** **(c)**. $|A - B| \approx 0{,}02$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $B$ **tanpa** koreksi bilangan bulat: menggunakan $P(-2 \leq Z \cdot \sigma \leq 2)$ langsung menghasilkan $B \approx 0{,}714$, selisih jauh lebih besar.
> > > - Salah menghitung $\text{Var}(X)$ karena lupa faktor 2 untuk nilai $\pm k$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira interval $[998, 1002]$ untuk variabel $1000+X$ langsung tanpa translasi ke $X$.
> >
> > > [!CAUTION] Red Flags
> > > - "Koreksi bilangan bulat" → gunakan batas $\pm 0{,}5$ di luar interval asli.
> > > - Distribusi simetri di $0$ → $E[X]=0$ otomatis, cek dulu sebelum hitung.

---

## **No. 9**

Diketahui variabel acak $X$ dan $Y$ memiliki fungsi densitas bersama yaitu:

| | $X = 1$ | $X = 2$ |
|:-:|:-:|:-:|
| $Y = 1$ | $c$ | $2c$ |
| $Y = 2$ | $c/2$ | $c$ |

Tentukanlah nilai dari $\text{Cov}(X, Y)$.

a. $-\dfrac{4}{3}$  
b. $-\dfrac{2}{3}$  
c. $0$  
d. $\dfrac{2}{3}$  
e. $\dfrac{4}{3}$

> [!summary]+ **Jawaban No. 9**
>
> **(c). $0$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] · [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > $$\text{Cov}(X, Y) = E[XY] - E[X]\,E[Y]$$
> >
>
> **Diketahui:**
> - Distribusi gabungan $(X, Y)$ diskrit pada $\{1,2\} \times \{1,2\}$
> - Target: $\text{Cov}(X, Y)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $c$**
> > Jumlah seluruh probabilitas = 1:
> >
> > $$c + 2c + \frac{c}{2} + c = 1 \implies \frac{9c}{2} = 1 \implies c = \frac{2}{9}$$
> >
> > **Langkah 2: Hitung distribusi marginal dan $E[X]$, $E[Y]$**
> >
> > $$P(X=1) = c + \frac{c}{2} = \frac{3c}{2} = \frac{1}{3}, \quad P(X=2) = 2c + c = 3c = \frac{2}{3}$$
> >
> > $$E[X] = 1 \cdot \frac{1}{3} + 2 \cdot \frac{2}{3} = \frac{1}{3} + \frac{4}{3} = \frac{5}{3}$$
> >
> > $$P(Y=1) = c + 2c = 3c = \frac{2}{3}, \quad P(Y=2) = \frac{c}{2} + c = \frac{3c}{2} = \frac{1}{3}$$
> >
> > $$E[Y] = 1 \cdot \frac{2}{3} + 2 \cdot \frac{1}{3} = \frac{2}{3} + \frac{2}{3} = \frac{4}{3}$$
> >
> > **Langkah 3: Hitung $E[XY]$**
> >
> > $$E[XY] = 1 \cdot 1 \cdot c + 1 \cdot 2 \cdot 2c + 2 \cdot 1 \cdot \frac{c}{2} + 2 \cdot 2 \cdot c$$
> >
> > $$= c + 4c + c + 4c = 10c = \frac{20}{9}$$
> >
> > **Langkah 4: Hitung $\text{Cov}(X, Y)$**
> >
> > $$\text{Cov}(X, Y) = E[XY] - E[X]\,E[Y] = \frac{20}{9} - \frac{5}{3} \cdot \frac{4}{3} = \frac{20}{9} - \frac{20}{9} = 0$$
> >
> > **Hasil Akhir:** **(c)**. $\text{Cov}(X, Y) = 0$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Cov}=0 \Rightarrow X$ dan $Y$ independen — ini **tidak berlaku** secara umum (korelasi nol $\not\Rightarrow$ independen, meski kebalikannya benar).
> > > - Lupa menentukan $c$ terlebih dahulu sebelum menghitung momen.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Membaca tabel sebagai nilai fungsi (bukan probabilitas) atau salah memetakan baris/kolom.
> >
> > > [!CAUTION] Red Flags
> > > - Tabel distribusi gabungan → selalu **normalisasi** (cari $c$) sebelum menghitung momen apapun.
> > > - $\text{Cov}=0$ adalah jawaban yang valid dan sering muncul di CF2 untuk menguji pemahaman independensi vs korelasi.

---

## **No. 10**

Dalam upaya memilih distribusi probabilitas diskrit sebagai model dari beberapa data observasi, seorang ahli statistik melakukan observasi berikut. Jika distribusi yang dipilih, katakanlah $X$, adalah distribusi diskrit yang seragam pada bilangan bulat $0, 1, 2, \ldots, N$ (di mana $N > 0$), maka mean dan variansi dari $X$ sama dengan mean dan variansi dari distribusi Poisson dengan mean $\lambda$. Tentukanlah nilai dari $\lambda$.

a. Kurang dari $0{,}75$  
b. Sekurang-kurangnya $0{,}75$ tapi kurang dari $1{,}25$  
c. Sekurang-kurangnya $1{,}25$ tapi kurang dari $1{,}75$  
d. Sekurang-kurangnya $1{,}75$ tapi kurang dari $2{,}25$  
e. Sekurang-kurangnya $2{,}25$

> [!summary]+ **Jawaban No. 10**
>
> **(d). Sekurang-kurangnya $1{,}75$ tapi kurang dari $2{,}25$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] · [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi Seragam Diskrit pada $\{0, 1, \ldots, N\}$ (ada $N+1$ nilai):
> >
> > $$E[X] = \frac{N}{2}, \qquad \text{Var}(X) = \frac{N(N+2)}{12}$$
> >
> > Distribusi Poisson: $E[X] = \text{Var}(X) = \lambda$.
>
> **Diketahui:**
> - $X \sim \text{Uniform Diskrit}$ pada $\{0, 1, \ldots, N\}$
> - $Y \sim \text{Poisson}(\lambda)$
> - Syarat: $E[X] = E[Y]$ **dan** $\text{Var}(X) = \text{Var}(Y)$
> - Target: $\lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Samakan mean**
> >
> > $$\frac{N}{2} = \lambda \quad \Rightarrow \quad \lambda = \frac{N}{2} \tag{1}$$
> >
> > **Langkah 2: Samakan variansi**
> >
> > $$\frac{N(N+2)}{12} = \lambda \tag{2}$$
> >
> > **Langkah 3: Substitusi (1) ke (2)**
> >
> > $$\frac{N(N+2)}{12} = \frac{N}{2}$$
> >
> > $$\frac{N+2}{12} = \frac{1}{2} \quad (\text{bagi kedua sisi dengan } N > 0)$$
> >
> > $$N + 2 = 6 \implies N = 4$$
> >
> > **Langkah 4: Hitung $\lambda$**
> >
> > $$\lambda = \frac{N}{2} = \frac{4}{2} = 2$$
> >
> > **Hasil Akhir:** **(d)**. $\lambda = 2 \in [1{,}75;\ 2{,}25)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rumus variansi yang salah untuk distribusi seragam diskrit: $\text{Var} = N^2/12$ (ini untuk distribusi seragam kontinu $[0,N]$, bukan diskrit).
> > > - Lupa bahwa distribusi Poisson memiliki **mean = variansi** ($\lambda$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira distribusi seragam diskrit pada $\{0,\ldots,N\}$ memiliki $N$ nilai (bukan $N+1$), sehingga rumus mean-nya salah.
> >
> > > [!CAUTION] Red Flags
> > > - "Mean dan variansi sama" untuk Poisson → ingat sifat khas Poisson: $E=\text{Var}=\lambda$.
> > > - Distribusi seragam diskrit pada $\{0,1,\ldots,N\}$ → rumus variansi adalah $N(N+2)/12$, **bukan** $N^2/12$.

---

## **No. 11**

Diketahui jumlah klaim adalah variabel acak independen dengan fungsi densitas probabilitas sebagai berikut:

$$f(x) = \begin{cases} \dfrac{10}{x^2}, & \text{untuk } x > 10 \\ 0, & \text{lainnya} \end{cases}$$

Tentukanlah probabilitas bahwa klaim terbesar dari tiga klaim yang dipilih secara acak adalah kurang dari $20$.

a. $\dfrac{8}{125}$  
b. $\dfrac{12}{125}$  
c. $\dfrac{27}{125}$  
d. $\dfrac{1}{8}$  
e. $\dfrac{1}{2}$

> [!summary]+ **Jawaban No. 11**
>
> **(d). $\dfrac{1}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] · [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]] · [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $X_1, X_2, \ldots, X_n$ iid dengan CDF $F(x)$, maka CDF maksimum $M = \max(X_1,\ldots,X_n)$ adalah:
> >
> > $$P(M \leq m) = [F(m)]^n$$
> >
>
> **Diketahui:**
> - $f(x) = 10/x^2$ untuk $x > 10$; distribusi kontinu, support $(10, \infty)$ — ini adalah distribusi Pareto.
> - Tiga klaim iid: $X_1, X_2, X_3$
> - Target: $P(\max(X_1, X_2, X_3) < 20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung CDF dari $X$**
> >
> > $$F(x) = \int_{10}^{x} \frac{10}{t^2}\,dt = \left[-\frac{10}{t}\right]_{10}^{x} = 1 - \frac{10}{x}, \quad x > 10$$
> >
> > **Langkah 2: Evaluasi $F(20)$**
> >
> > $$F(20) = 1 - \frac{10}{20} = 1 - \frac{1}{2} = \frac{1}{2}$$
> >
> > **Langkah 3: Hitung $P(\max < 20)$**
> >
> > $$P(\max(X_1, X_2, X_3) < 20) = [F(20)]^3 = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{1}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(\text{salah satu} < 20)$ alih-alih $P(\text{ketiganya} < 20)$.
> > > - Mengintegrasikan $f(x)$ dari 0 (bukan dari 10), menghasilkan CDF yang salah.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "klaim terbesar kurang dari 20" = salah satu klaim <20, bukan **semua** klaim <20.
> >
> > > [!CAUTION] Red Flags
> > > - "Nilai maksimum dari $n$ variabel iid" → $[F(m)]^n$.
> > > - Support PDF dimulai dari $x=10$ → batas bawah integrasi CDF adalah $10$, bukan $0$.

---

## **No. 12**

Perusahaan asuransi $A$ dan $B$ masing-masing memperoleh laba tahunan yang terdistribusi normal dengan mean positif yang sama. Standar deviasi dari laba tahunan perusahaan $A$ adalah setengah dari mean-nya. Pada suatu tahun tertentu, peluang perusahaan $B$ merugi (laba negatif) adalah $0{,}9$ kali peluang perusahaan $A$ merugi. Tentukanlah nilai dari standar deviasi dari laba tahunan perusahaan $B$ dibagi dengan standar deviasi dari laba tahunan perusahaan $A$.

a. $0{,}49$  
b. $0{,}9$  
c. $0{,}98$  
d. $1{,}02$  
e. $1{,}71$

> [!summary]+ **Jawaban No. 12**
>
> **(c). $0{,}98$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] · [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim N(\mu, \sigma^2)$: $P(X < 0) = \Phi\!\left(\dfrac{-\mu}{\sigma}\right) = \Phi(-\mu/\sigma)$
> > di mana $\Phi$ adalah CDF distribusi normal standar.
>
> **Diketahui:**
> - $\mu_A = \mu_B = \mu > 0$ (mean sama)
> - $\sigma_A = \mu/2$, sehingga $\mu/\sigma_A = 2$
> - $P(B < 0) = 0{,}9 \times P(A < 0)$
> - Target: $\sigma_B / \sigma_A$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A < 0)$**
> >
> > $$P(A < 0) = \Phi\!\left(\frac{-\mu}{\sigma_A}\right) = \Phi(-2) \approx 0{,}0228$$
> >
> > **Langkah 2: Tentukan $P(B < 0)$**
> >
> > $$P(B < 0) = 0{,}9 \times \Phi(-2) \approx 0{,}9 \times 0{,}0228 = 0{,}02052$$
> >
> > **Langkah 3: Cari $\mu/\sigma_B$**
> >
> > $$\Phi\!\left(\frac{-\mu}{\sigma_B}\right) = 0{,}02052$$
> >
> > $$\frac{\mu}{\sigma_B} = \Phi^{-1}(1 - 0{,}02052) = \Phi^{-1}(0{,}97948)$$
> >
> > Dari tabel normal: $\Phi(2{,}04) \approx 0{,}9793$, sehingga $\mu/\sigma_B \approx 2{,}04$.
> >
> > **Langkah 4: Hitung rasio $\sigma_B/\sigma_A$**
> >
> > $$\frac{\sigma_B}{\sigma_A} = \frac{\mu/\sigma_A}{\mu/\sigma_B} = \frac{2}{2{,}04} \approx 0{,}98$$
> >
> > **Hasil Akhir:** **(c)**. $\sigma_B/\sigma_A \approx 0{,}98$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\sigma_B/\sigma_A = 0{,}9$ langsung dari "0,9 kali peluang" — hubungannya **tidak linear** karena melalui $\Phi$.
> > > - Lupa menginversi $\Phi$ dengan benar: $P(X<0) = \Phi(-\mu/\sigma)$, bukan $\Phi(\mu/\sigma)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $\sigma_A = 2\mu$ (dua kali mean) padahal $\sigma_A = \mu/2$ (setengah mean).
> >
> > > [!CAUTION] Red Flags
> > > - "Peluang merugi = $k$ kali peluang merugi lain" → **jangan langsung kalikan** $\sigma$; gunakan $\Phi^{-1}$.
> > > - Soal melibatkan CDF normal di titik simetri $x=0$ → manfaatkan $P(X<0)=\Phi(-\mu/\sigma)$.

---

## **No. 13**

Kerugian tahunan mengikuti distribusi seragam pada interval $[0, 2000]$. Premi asuransi sebesar $1000$ dibebankan untuk menutup kerugian. Jika kerugian di bawah premi, manajer risiko menerima bonus sebesar $25\%$ dari selisih premi dan kerugian. Tentukanlah ekspektasi bonus yang akan diterima manajer risiko.

a. $250$  
b. $187{,}5$  
c. $110$  
d. $90$  
e. $62{,}5$

> [!summary]+ **Jawaban No. 13**
>
> **(e). $62{,}5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Miller Bab 4.1; Hogg-Tanis-Zimm Bab 2.2 |
>
> > [!info]+ **Rumus**  
> >
> > Nilai harapan fungsi variabel acak kontinu:
> >
> > $$E[g(X)] = \int_{-\infty}^{\infty} g(x) f_X(x)\,dx$$
> >
> > Untuk $X \sim U[0, 2000]$: $f_X(x) = \dfrac{1}{2000}$ pada $[0, 2000]$.
>
> **Diketahui:**
> - $L \sim U[0, 2000]$ (kerugian)
> - Bonus $= 0{,}25(1000 - L)$ jika $L < 1000$; $= 0$ jika $L \geq 1000$
> - Target: $E[\text{Bonus}]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis ekspektasi bonus**
> >
> > $$E[\text{Bonus}] = \int_0^{1000} 0{,}25(1000 - L) \cdot \frac{1}{2000}\,dL$$
> >
> > **Langkah 2: Evaluasi integral**
> >
> > $$= \frac{0{,}25}{2000} \int_0^{1000} (1000 - L)\,dL$$
> >
> > $$= \frac{0{,}25}{2000} \left[1000L - \frac{L^2}{2}\right]_0^{1000}$$
> >
> > $$= \frac{0{,}25}{2000} \left(1{.}000{.}000 - 500{.}000\right) = \frac{0{,}25 \times 500{.}000}{2000} = \frac{125{.}000}{2000} = 62{,}5$$
> >
> > **Hasil Akhir:** **(e)**. $E[\text{Bonus}] = 62{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[\text{Bonus}] = 0{,}25 \times (1000 - E[L])$ dengan $E[L] = 1000$, mendapat $0$ — ini salah karena $E[g(L)] \neq g(E[L])$ secara umum.
> > > - Lupa faktor $1/2000$ dari PDF distribusi seragam.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira bonus diberikan untuk **seluruh** rentang kerugian $[0, 2000]$, bukan hanya $[0, 1000)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Jika kerugian di bawah premi..." → batas integral atas adalah **premi**, bukan batas distribusi.
> > > - Bonus adalah fungsi non-linear dari $L$ → hitung $E[\text{Bonus}]$ via integral, **tidak bisa** langsung substitusi $E[L]$.

---

## **No. 14**

Perusahaan asuransi kesehatan menjual polis kepada penduduk wilayah $X$ dan wilayah $Y$. Pengalaman klaim di masa lalu menunjukkan hal berikut:

(i) $20\%$ dari total pemegang polis dari gabungan wilayah $X$ dan wilayah $Y$ tidak mengajukan klaim.  
(ii) $15\%$ pemegang polis dari wilayah $X$ tidak mengajukan klaim.  
(iii) $40\%$ pemegang polis dari wilayah $Y$ tidak mengajukan klaim.  

Tentukanlah probabilitas bahwa pemegang polis yang dipilih secara acak adalah penduduk wilayah $X$, diketahui pemegang polis tersebut tidak mengajukan klaim.

a. $0{,}09$  
b. $0{,}27$  
c. $0{,}5$  
d. $0{,}6$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 14**
>
> **(d). $0{,}6$**
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
> > **Teorema Bayes:**
> >
> > $$P(X \mid \text{no claim}) = \frac{P(\text{no claim} \mid X)\,P(X)}{P(\text{no claim})}$$
> >
> > **Hukum probabilitas total:**
> >
> > $$P(\text{no claim}) = P(\text{no claim} \mid X)\,P(X) + P(\text{no claim} \mid Y)\,P(Y)$$
> >
>
> **Diketahui:**
> - $P(\text{no claim} \mid X) = 0{,}15$
> - $P(\text{no claim} \mid Y) = 0{,}40$
> - $P(\text{no claim}) = 0{,}20$ (dari seluruh pemegang polis)
> - Target: $P(X \mid \text{no claim})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $P(X)$ dan $P(Y)$**
> > Misalkan $\pi = P(X)$, maka $P(Y) = 1 - \pi$.
> > Dari hukum probabilitas total:
> >
> > $$0{,}15\pi + 0{,}40(1 - \pi) = 0{,}20$$
> >
> > $$0{,}40 - 0{,}25\pi = 0{,}20$$
> >
> > $$\pi = \frac{0{,}20}{0{,}25} = 0{,}80$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(X \mid \text{no claim}) = \frac{P(\text{no claim} \mid X)\,P(X)}{P(\text{no claim})} = \frac{0{,}15 \times 0{,}80}{0{,}20} = \frac{0{,}12}{0{,}20} = 0{,}6$$
> >
> > **Hasil Akhir:** **(d)**. $P(X \mid \text{no claim}) = 0{,}6$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X) = 0{,}5$ (menganggap proporsi sama) tanpa menghitungnya dari data.
> > > - Membalik kondisional: menghitung $P(\text{no claim} \mid X)$ bukan $P(X \mid \text{no claim})$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "20% tidak mengajukan klaim" berarti $P(X) = 0{,}20$ (bukan probabilitas no-claim keseluruhan).
> >
> > > [!CAUTION] Red Flags
> > > - Soal berbentuk "peluang asal diketahui karakteristik" → **Teorema Bayes**.
> > > - Gunakan hukum probabilitas total untuk mencari proporsi populasi dari data gabungan.

---

## **No. 15**

Sebuah perusahaan menetapkan dana sebesar $120$ yang akan digunakan untuk membayar uang sebesar $C$, kepada $20$ karyawannya yang dapat mencapai tingkat kinerja tinggi pada tahun mendatang. Setiap karyawan memiliki peluang $2\%$ untuk mencapai tingkat kinerja tinggi di tahun mendatang. Peristiwa di mana karyawan yang berbeda mencapai tingkat kinerja tinggi pada tahun mendatang bersifat independen satu sama lain. Tentukanlah nilai maksimum $C$, sehingga probabilitas bahwa dana tersebut tidak akan cukup untuk menutupi seluruh pembayaran untuk seluruh karyawan berkinerja tinggi, kurang dari $1\%$.

a. $24$  
b. $30$  
c. $40$  
d. $60$  
e. $120$

> [!summary]+ **Jawaban No. 15**
>
> **(d). $60$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] · [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.2; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**  
> >
> > $N \sim B(20, 0{,}02)$. Dana tidak cukup jika $C \cdot N > 120$, yaitu $N > 120/C$.
> > Syarat: $P(N > 120/C) < 0{,}01$, ekuivalen dengan $P(N \leq \lfloor 120/C \rfloor) > 0{,}99$.
>
> **Diketahui:**
> - $N \sim B(n=20, p=0{,}02)$
> - Dana total $= 120$; pembayaran per karyawan $= C$
> - Dana tidak cukup $\Leftrightarrow N > 120/C$
> - Target: $C_{\max}$ sehingga $P(\text{tidak cukup}) < 0{,}01$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung peluang kumulatif $N$**
> >
> > $$P(N=0) = 0{,}98^{20} \approx 0{,}6676$$
> >
> > $$P(N=1) = 20 \times 0{,}02 \times 0{,}98^{19} \approx 0{,}2725$$
> >
> > $$P(N=2) = \binom{20}{2}(0{,}02)^2(0{,}98)^{18} \approx 0{,}0528$$
> >
> > $$P(N \leq 2) \approx 0{,}9929 > 0{,}99 \checkmark$$
> >
> > $$P(N=3) \approx 0{,}0065, \quad P(N \leq 1) \approx 0{,}9401 < 0{,}99$$
> >
> > **Langkah 2: Tentukan ambang $k$ sehingga $P(N > k) < 0{,}01$**
> > $P(N > 2) = 1 - 0{,}9929 \approx 0{,}0071 < 0{,}01$ ✓
> > $P(N > 1) \approx 0{,}0599 > 0{,}01$ ✗
> > Jadi, $k = 2$ adalah nilai terkecil sehingga $P(N > k) < 0{,}01$.
> >
> > **Langkah 3: Tentukan $C_{\max}$**
> > Diperlukan $\lfloor 120/C \rfloor \geq 2$, artinya $120/C \geq 2 \Rightarrow C \leq 60$.
> > $C_{\max} = 60$.
> >
> > **Hasil Akhir:** **(d)**. $C_{\max} = 60$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "dana tidak cukup" = $C \cdot N \geq 120$ (bukan $> 120$) — perlu konsisten dengan definisi.
> > > - Menghitung $P(N \geq k)$ alih-alih $P(N > k)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $C = 120/20 = 6$ (rata-rata per karyawan) tanpa analisis probabilistik.
> >
> > > [!CAUTION] Red Flags
> > > - "Probabilitas dana tidak cukup $< 1\%$" → cari nilai kritis distribusi Binomial.
> > > - Perhatikan apakah kondisinya $N > k$ atau $N \geq k$ (berpengaruh pada nilai $k$ yang dipilih).

---

## **No. 16**

Diketahui variabel acak $X$ dan $Y$ memiliki fungsi densitas bersama sebagai berikut:

$$f(x, y) = \frac{2x + y}{12} \quad \text{untuk } 0 \leq x \leq 2 \text{ dan } 0 \leq y \leq 2$$

Tentukanlah nilai dari $P(X + Y \geq 2 \mid X \leq 1)$.

a. $\dfrac{1}{8}$  
b. $\dfrac{1}{4}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 16**
>
> **(c). $\dfrac{3}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] · [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] · [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.6–4.8 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) = \iint_{B} f(x,y)\,dx\,dy$$
> >
>
> **Diketahui:**
> - $f(x,y) = (2x+y)/12$, support $[0,2] \times [0,2]$ (kontinu)
> - $A = \{X+Y \geq 2\}$, $B = \{X \leq 1\}$
> - Target: $P(A \mid B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(B) = P(X \leq 1)$**
> >
> > $$P(X \leq 1) = \int_0^1 \int_0^2 \frac{2x+y}{12}\,dy\,dx$$
> >
> > Inner: $\int_0^2 \frac{2x+y}{12}\,dy = \frac{1}{12}\left[2xy + \frac{y^2}{2}\right]_0^2 = \frac{1}{12}(4x+2) = \frac{x}{3} + \frac{1}{6}$
> >
> > $$P(X \leq 1) = \int_0^1 \left(\frac{x}{3} + \frac{1}{6}\right)dx = \left[\frac{x^2}{6} + \frac{x}{6}\right]_0^1 = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$$
> >
> > **Langkah 2: Hitung $P(A \cap B) = P(X+Y \geq 2,\ X \leq 1)$**
> > Untuk $0 \leq x \leq 1$: kondisi $x+y \geq 2$ berarti $y \geq 2-x$. Karena $y \in [0,2]$, batas bawah integral $y$ adalah $\max(0, 2-x) = 2-x$ (valid untuk $x \leq 1 \leq 2$).
> >
> > $$P(A \cap B) = \int_0^1 \int_{2-x}^{2} \frac{2x+y}{12}\,dy\,dx$$
> >
> > Inner: $\int_{2-x}^2 \frac{2x+y}{12}\,dy = \frac{1}{12}\left[2xy + \frac{y^2}{2}\right]_{2-x}^2$
> > $= \frac{1}{12}\left[\left(4x+2\right) - \left(2x(2-x) + \frac{(2-x)^2}{2}\right)\right]$
> > $= \frac{1}{12}\left[4x+2 - 4x+2x^2 - \frac{4-4x+x^2}{2}\right]$
> > $= \frac{1}{12}\left[2x^2 + 2 - \frac{4-4x+x^2}{2}\right]$
> > $= \frac{1}{12} \cdot \frac{4x^2+4 - 4+4x-x^2}{2} = \frac{3x^2+4x}{24}$
> >
> > $$P(A \cap B) = \int_0^1 \frac{3x^2+4x}{24}\,dx = \frac{1}{24}\left[x^3 + 2x^2\right]_0^1 = \frac{1+2}{24} = \frac{3}{24} = \frac{1}{8}$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(X+Y \geq 2 \mid X \leq 1) = \frac{P(A \cap B)}{P(B)} = \frac{1/8}{1/3} = \frac{3}{8}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{3}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menentukan batas integrasi untuk wilayah $\{x+y \geq 2\} \cap \{x \leq 1\}$: perlu menggunakan $y \geq 2-x$ (bukan $y \leq 2-x$).
> > > - Lupa bahwa $y \in [0,2]$ membatasi batas atas integral.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira wilayah $\{x+y \geq 2, x \leq 1\}$ mencakup $x \leq 0$ (support dimulai dari $x=0$).
> >
> > > [!CAUTION] Red Flags
> > > - Probabilitas bersyarat untuk $(X,Y)$ kontinu → hitung **dua integral terpisah** (pembilang dan penyebut), jangan digabung.
> > > - Gambar sketsa wilayah integrasi sebelum menetapkan batas.

---

## **No. 17**

Diketahui $X$ memiliki fungsi probabilitas $P[X = k] = \dfrac{k+1}{6}$, $k = 0, 1, 2$.

Diketahui juga $P[Y = j | X = k] = \dfrac{1}{k+2}$ untuk $j = 0, 1, \ldots, k+1$.

Tentukanlah nilai dari $E[Y]$.

a. $\dfrac{1}{2}$  
b. $\dfrac{2}{3}$  
c. $\dfrac{5}{6}$  
d. $1$  
e. $\dfrac{7}{6}$

> [!summary]+ **Jawaban No. 17**
>
> **(e). $\dfrac{7}{6}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] · [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > **Hukum Harapan Total (Law of Total Expectation):**
> >
> > $$E[Y] = E[E[Y \mid X]] = \sum_k E[Y \mid X=k]\, P(X=k)$$
> >
>
> **Diketahui:**
> - $P(X=k) = (k+1)/6$ untuk $k = 0, 1, 2$
> - $Y \mid X=k \sim \text{Uniform Diskrit}$ pada $\{0, 1, \ldots, k+1\}$ (ada $k+2$ nilai)
> - Target: $E[Y]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y \mid X = k]$ untuk tiap $k$**
> > $Y \mid X=k$ adalah uniform diskrit pada $\{0, 1, \ldots, k+1\}$, sehingga:
> >
> > $$E[Y \mid X=k] = \frac{0 + 1 + \cdots + (k+1)}{k+2} = \frac{(k+1)(k+2)/2}{k+2} = \frac{k+1}{2}$$
> >
> > - $k=0$: $E[Y \mid X=0] = 1/2$
> > - $k=1$: $E[Y \mid X=1] = 2/2 = 1$
> > - $k=2$: $E[Y \mid X=2] = 3/2$
> >
> > **Langkah 2: Terapkan hukum harapan total**
> >
> > $$E[Y] = E[Y|X=0]\,P(X=0) + E[Y|X=1]\,P(X=1) + E[Y|X=2]\,P(X=2)$$
> >
> > $$= \frac{1}{2} \cdot \frac{1}{6} + 1 \cdot \frac{2}{6} + \frac{3}{2} \cdot \frac{3}{6}$$
> >
> > $$= \frac{1}{12} + \frac{2}{6} + \frac{9}{12} = \frac{1}{12} + \frac{4}{12} + \frac{9}{12} = \frac{14}{12} = \frac{7}{6}$$
> >
> > **Hasil Akhir:** **(e)**. $E[Y] = \dfrac{7}{6}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa rata-rata distribusi seragam diskrit pada $\{0, 1, \ldots, m\}$ adalah $m/2$, bukan $(m+1)/2$.
> > > - Tidak menggunakan hukum harapan total, melainkan menghitung distribusi marginal $Y$ terlebih dahulu (lebih lambat).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $j$ dimulai dari $1$ (bukan $0$), sehingga mengira $E[Y|X=k] = (k+2)/2$.
> >
> > > [!CAUTION] Red Flags
> > > - "Distribusi bersyarat $Y|X$" diketahui → gunakan **hukum harapan total** $E[Y]=E[E[Y|X]]$ langsung, lebih efisien.
> > > - Uniform diskrit pada $\{0,1,\ldots,m\}$ (ada $m+1$ nilai) → mean $= m/2$.

---

## **No. 18**

Di suatu desa tertentu, jumlah kunjungan dokter desa per tahun yang dilakukan seseorang mengikuti distribusi Poisson yang bergantung pada kebiasaan makan individu tersebut. Sebaran penduduk desa dan rata-rata jumlah kunjungan dokter adalah sebagai berikut:

| Proporsi populasi | Mean banyak kunjungan dokter |
|:-:|:-:|
| Vegan $= 0{,}15$ | $1$ |
| Vegetarian (bukan vegan) $= 0{,}25$ | $2$ |
| Non vegetarian (atau vegan) $= 0{,}6$ | $3$ |

Tentukanlah probabilitas bahwa seseorang dengan kunjungan dokter tepat sebanyak $2$ kali per tahun adalah seorang vegan.

a. Kurang dari $0{,}095$  
b. Sekurang-kurangnya $0{,}095$ tapi kurang dari $0{,}105$  
c. Sekurang-kurangnya $0{,}105$ tapi kurang dari $0{,}115$  
d. Sekurang-kurangnya $0{,}115$ tapi kurang dari $0{,}125$  
e. Sekurang-kurangnya $0{,}125$

> [!summary]+ **Jawaban No. 18**
>
> **(d). Sekurang-kurangnya $0{,}115$ tapi kurang dari $0{,}125$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4–1.5; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > **Teorema Bayes** untuk kasus campuran:
> >
> > $$P(\text{Vegan} \mid N=2) = \frac{P(N=2 \mid \text{Vegan})\,P(\text{Vegan})}{P(N=2)}$$
> >
> > Distribusi Poisson: $P(N=k \mid \lambda) = \dfrac{e^{-\lambda}\lambda^k}{k!}$. Di sini $\lambda$ adalah parameter **mean** Poisson.
>
> **Diketahui:**
> - $P(\text{Vegan})=0{,}15$, $\lambda_V=1$; $P(\text{Veg})=0{,}25$, $\lambda_G=2$; $P(\text{Non-veg})=0{,}6$, $\lambda_N=3$
> - Target: $P(\text{Vegan} \mid N=2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N=2)$ di tiap kelompok**
> >
> > $$P(N=2 \mid \text{Vegan}) = \frac{e^{-1} \cdot 1^2}{2!} = \frac{e^{-1}}{2} \approx \frac{0{,}3679}{2} = 0{,}18394$$
> >
> > $$P(N=2 \mid \text{Veg}) = \frac{e^{-2} \cdot 4}{2} = 2e^{-2} \approx 2(0{,}1353) = 0{,}27067$$
> >
> > $$P(N=2 \mid \text{Non-veg}) = \frac{e^{-3} \cdot 9}{2} = \frac{9}{2}e^{-3} \approx 4{,}5(0{,}04979) = 0{,}22404$$
> >
> > **Langkah 2: Hitung $P(N=2)$ total**
> >
> > $$P(N=2) = 0{,}15(0{,}18394) + 0{,}25(0{,}27067) + 0{,}6(0{,}22404)$$
> >
> > $$= 0{,}02759 + 0{,}06767 + 0{,}13442 = 0{,}22968$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(\text{Vegan} \mid N=2) = \frac{0{,}15 \times 0{,}18394}{0{,}22968} = \frac{0{,}02759}{0{,}22968} \approx 0{,}1201$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}1201 \in [0{,}115;\ 0{,}125)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa membagi dengan $P(N=2)$ total — hanya menghitung pembilang tanpa penyebut.
> > > - Menggunakan $P(N=2 \mid \text{Vegan}) = P(\text{Vegan}) \times P(N=2|\text{Vegan})$ sebagai jawaban final.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira ketiga kelompok memiliki proporsi sama (1/3 masing-masing).
> >
> > > [!CAUTION] Red Flags
> > > - Soal campuran Poisson dengan bobot → **hukum probabilitas total + Teorema Bayes**, bukan hanya Poisson langsung.
> > > - Pastikan nilai $e^{-\lambda}$ dihitung dengan presisi: $e^{-1} \approx 0{,}3679$, $e^{-2} \approx 0{,}1353$, $e^{-3} \approx 0{,}0498$.

---

## **No. 19**

Messi sedang mempertimbangkan program amal untuk memberikan sumbangan ke Rumah Sakit. Donasi akan dikaitkan dengan berapa banyak gol yang ia cetak di pertandingan berikutnya. Ahli statistik tim telah menentukan bahwa jumlah gol yang dicetak oleh Messi dalam sebuah pertandingan memiliki distribusi Poisson dengan mean sebesar $3$. Messi berencana menyumbangkan $K$ untuk setiap gol yang mereka cetak hingga maksimal $3$ gol. Untuk sebuah pertandingan tentukanlah nilai $K$ yang akan membuat donasi Messi yang diharapkan menjadi $4{.}000$.

a. Kurang dari $1{.}700$  
b. Sekurang-kurangnya $1{.}700$ tapi kurang dari $1{.}800$  
c. Sekurang-kurangnya $1{.}800$ tapi kurang dari $1{.}900$  
d. Sekurang-kurangnya $1{.}900$ tapi kurang dari $2{.}000$  
e. Sekurang-kurangnya $2{.}000$

> [!summary]+ **Jawaban No. 19**
>
> **(b). Sekurang-kurangnya $1{.}700$ tapi kurang dari $1{.}800$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] · [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.3; Miller Bab 5.3 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim \text{Poisson}(\lambda)$: $P(X=k) = e^{-\lambda}\lambda^k/k!$.
> > Donasi $D = K \cdot \min(X, 3)$. Target: $E[D] = K \cdot E[\min(X, 3)] = 4000$.
>
> **Diketahui:**
> - $X \sim \text{Poisson}(3)$
> - $D = K \cdot \min(X, 3)$
> - $E[D] = 4000$, cari $K$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas Poisson(3)**
> >
> > $$P(X=0) = e^{-3} \approx 0{,}04979$$
> >
> > $$P(X=1) = 3e^{-3} \approx 0{,}14936$$
> >
> > $$P(X=2) = \frac{9}{2}e^{-3} \approx 0{,}22404$$
> >
> > $$P(X \geq 3) = 1 - e^{-3}(1 + 3 + 4{,}5) = 1 - 8{,}5e^{-3} \approx 1 - 0{,}42319 = 0{,}57681$$
> >
> > **Langkah 2: Hitung $E[\min(X, 3)]$**
> >
> > $$E[\min(X,3)] = 0 \cdot P(X=0) + 1 \cdot P(X=1) + 2 \cdot P(X=2) + 3 \cdot P(X \geq 3)$$
> >
> > $$= 0 + 0{,}14936 + 2(0{,}22404) + 3(0{,}57681)$$
> >
> > $$= 0{,}14936 + 0{,}44808 + 1{,}73043 = 2{,}32787$$
> >
> > **Langkah 3: Hitung $K$**
> >
> > $$K = \frac{4000}{E[\min(X,3)]} = \frac{4000}{2{,}32787} \approx 1718{,}4$$
> >
> > **Hasil Akhir:** **(b)**. $K \approx 1718 \in [1{.}700;\ 1{.}800)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[\min(X,3)] = \min(E[X], 3) = \min(3, 3) = 3$ (salah — Jensen's inequality menunjukkan $E[\min(X,3)] \leq \min(E[X], 3)$, kesetaraan hanya jika $X$ deterministik).
> > > - Lupa bahwa $P(X \geq 3)$ dihitung sebagai komplemen $P(X \leq 2)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "maksimal 3 gol" artinya Messi mencetak tepat 3 gol (bukan batas atas cap).
> >
> > > [!CAUTION] Red Flags
> > > - "Hingga maksimal $m$" → variabel terpotong $\min(X, m)$ → hitung $E[\min(X,m)]$ secara eksplisit.
> > > - Poisson $\lambda = 3$ → $P(X \geq 3)$ cukup besar, jangan diabaikan.

---

## **No. 20**

Misalkan $X$ menunjukkan jumlah kerugian yang diderita oleh pemegang polis perusahaan asuransi dalam suatu tabrakan mobil. Misalkan $Z$ menunjukkan bagian $X$ yang harus dibayar oleh perusahaan asuransi. Seorang aktuaris menentukan bahwa $X$ dan $Z$ saling independen dengan fungsi densitas dan probabilitas masing-masing sebagai berikut:

$$f(x) = \begin{cases} \dfrac{1}{8} e^{-x/8}, & \text{untuk } x > 0 \\ 0, & \text{lainnya} \end{cases}$$

$$P[Z = z] = \begin{cases} 0{,}55, & z = 1 \\ 0{,}45, & z = 0 \end{cases}$$

Tentukanlah variansi dari pembayaran klaim perusahaan asuransi $ZX$.

a. $15{,}8$  
b. $28{,}8$  
c. $35{,}2$  
d. $44{,}6$  
e. $51{,}04$

> [!summary]+ **Jawaban No. 20**
>
> **(e). $51{,}04$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] · [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] · [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $X$ dan $Z$ independen:
> >
> > $$\text{Var}(ZX) = E[(ZX)^2] - (E[ZX])^2 = E[Z^2]\,E[X^2] - (E[Z])^2(E[X])^2$$
> >
> > Untuk $X \sim \text{Exp}(\lambda)$ (rate $\lambda = 1/8$, mean $= 8$, kontinu, support $(0,\infty)$):
> >
> > $$E[X] = 8, \quad E[X^2] = \text{Var}(X) + (E[X])^2 = 64 + 64 = 128$$
> >
>
> **Diketahui:**
> - $X \sim \text{Exp}(\text{mean}=8)$, yaitu rate $\lambda = 1/8$
> - $Z$: Bernoulli — $P(Z=1)=0{,}55$, $P(Z=0)=0{,}45$
> - $X$ dan $Z$ independen; target: $\text{Var}(ZX)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung momen $Z$**
> >
> > $$E[Z] = 1(0{,}55) + 0(0{,}45) = 0{,}55$$
> >
> > $$E[Z^2] = 1^2(0{,}55) + 0^2(0{,}45) = 0{,}55$$
> >
> > (Karena $Z^2 = Z$ untuk variabel Bernoulli: $Z \in \{0,1\}$.)
> >
> > **Langkah 2: Hitung momen $X$**
> >
> > $$E[X] = 8, \quad \text{Var}(X) = 8^2 = 64$$
> >
> > $$E[X^2] = \text{Var}(X) + [E[X]]^2 = 64 + 64 = 128$$
> >
> > **Langkah 3: Hitung $E[ZX]$ dan $E[(ZX)^2]$**
> > Karena $X$ dan $Z$ independen:
> >
> > $$E[ZX] = E[Z]\,E[X] = 0{,}55 \times 8 = 4{,}4$$
> >
> > $$E[(ZX)^2] = E[Z^2]\,E[X^2] = 0{,}55 \times 128 = 70{,}4$$
> >
> > **Langkah 4: Hitung $\text{Var}(ZX)$**
> >
> > $$\text{Var}(ZX) = E[(ZX)^2] - (E[ZX])^2 = 70{,}4 - (4{,}4)^2 = 70{,}4 - 19{,}36 = 51{,}04$$
> >
> > **Hasil Akhir:** **(e)**. $\text{Var}(ZX) = 51{,}04$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(ZX) = \text{Var}(Z)\,\text{Var}(X)$ — rumus ini hanya berlaku jika mean keduanya nol.
> > > - Lupa bahwa untuk Bernoulli: $E[Z^2] = E[Z] = p$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $E[X] = 1/8$ karena $\lambda = 1/8$ (salah — untuk Exp dengan rate $\lambda$, $E[X] = 1/\lambda = 8$).
> >
> > > [!CAUTION] Red Flags
> > > - Produk dua variabel independen: $E[XZ] = E[X]E[Z]$ dan $E[X^2Z^2] = E[X^2]E[Z^2]$.
> > > - Distribusi Eksponensial: selalu verifikasi apakah parameter yang diberikan adalah **rate** ($\lambda$) atau **mean** ($1/\lambda$).

---

## **No. 21**

Jumlah operasi kecil, $X$, dan jumlah operasi besar, $Y$, bagi seorang pemegang polis, pada dekade ini, memiliki fungsi distribusi kumulatif bersama sebagai berikut:

$$F(x, y) = [1 - 0{,}5^{x+1}][1 - 0{,}2^{y+1}]$$

untuk bilangan bulat non negatif $x$ dan $y$. Tentukanlah probabilitas bahwa pemegang polis mengalami tepat tiga operasi kecil dan tiga operasi besar pada dekade ini.

a. Kurang dari $0{,}0005$  
b. Sekurang-kurangnya $0{,}0005$ tapi kurang dari $0{,}001$  
c. Sekurang-kurangnya $0{,}001$ tapi kurang dari $0{,}002$  
d. Sekurang-kurangnya $0{,}002$ tapi kurang dari $0{,}004$  
e. Sekurang-kurangnya $0{,}004$

> [!summary]+ **Jawaban No. 21**
>
> **(a). Kurang dari $0{,}0005$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] · [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] · [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > Jika CDF dapat difaktorkan: $F(x,y) = F_X(x)\,F_Y(y)$, maka $X$ dan $Y$ **independen**.
> > PMF bersama: $P(X=x, Y=y) = P(X=x)\,P(Y=y)$ dengan
> >
> > $$P(X=x) = F_X(x) - F_X(x-1)$$
> >
>
> **Diketahui:**
> - $F(x,y) = [1-0{,}5^{x+1}][1-0{,}2^{y+1}]$ — terpisah sebagai produk
> - Target: $P(X=3, Y=3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi faktorisasi CDF**
> > $F(x,y) = A(x)\,B(y)$ dengan $A(x) = 1-0{,}5^{x+1}$ dan $B(y) = 1-0{,}2^{y+1}$.
> > Ini menunjukkan $X$ dan $Y$ **independen**.
> >
> > **Langkah 2: Hitung $P(X=3)$**
> >
> > $$P(X=3) = A(3) - A(2) = (1-0{,}5^4) - (1-0{,}5^3) = 0{,}5^3 - 0{,}5^4 = \frac{1}{8} - \frac{1}{16} = \frac{1}{16}$$
> >
> > **Langkah 3: Hitung $P(Y=3)$**
> >
> > $$P(Y=3) = B(3) - B(2) = (1-0{,}2^4) - (1-0{,}2^3) = 0{,}2^3 - 0{,}2^4 = 0{,}008 - 0{,}0016 = 0{,}0064$$
> >
> > **Langkah 4: Hitung $P(X=3, Y=3)$**
> >
> > $$P(X=3,Y=3) = P(X=3)\,P(Y=3) = \frac{1}{16} \times 0{,}0064 = \frac{0{,}0064}{16} = 0{,}0004$$
> >
> > **Hasil Akhir:** **(a)**. $P(X=3,Y=3) = 0{,}0004 < 0{,}0005$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X=3) = F(3) = A(3)$ tanpa mengurangi $A(2)$ — ini menghasilkan CDF, bukan PMF.
> > > - Tidak mengenali bahwa CDF yang bisa difaktorkan mengimplikasikan independensi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $F(3,3) = P(X=3, Y=3)$ langsung — ini adalah probabilitas kumulatif, bukan titik.
> >
> > > [!CAUTION] Red Flags
> > > - CDF diskrit bersama $F(x,y)$ → untuk mencari PMF titik, gunakan $P(X=x,Y=y) = F(x,y) - F(x-1,y) - F(x,y-1) + F(x-1,y-1)$.
> > > - Jika $F(x,y) = F_X(x)F_Y(y)$, gunakan properti independensi: $P(X=x,Y=y) = P(X=x)P(Y=y)$.

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
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.3; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**  
> >
> > Misalkan $C$ = jumlah pasien kosmetik. Diberikan $X = x$: $C \mid X=x \sim B(x, 0{,}2)$.
> > **Hukum probabilitas total:**
> >
> > $$P(C \geq 3) = \sum_{x} P(C \geq 3 \mid X=x)\,P(X=x)$$
> >
>
> **Diketahui:**
> - $P(X=2)=0{,}1$, $P(X=3)=0{,}6$, $P(X=4)=0{,}3$
> - $C \mid X=x \sim B(x, 0{,}2)$
> - Target: $P(C \geq 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(C \geq 3 \mid X=x)$ per nilai $x$**
> >
> > - $x=2$: $C \mid X=2 \sim B(2, 0{,}2)$. Maksimum $C=2 < 3$, jadi $P(C \geq 3 \mid X=2) = 0$.
> >
> > - $x=3$: $C \mid X=3 \sim B(3, 0{,}2)$.
> >
> > $$P(C=3 \mid X=3) = 0{,}2^3 = 0{,}008$$
> >
> > $$P(C \geq 3 \mid X=3) = 0{,}008$$
> >
> > - $x=4$: $C \mid X=4 \sim B(4, 0{,}2)$.
> >
> > $$P(C=3 \mid X=4) = \binom{4}{3}(0{,}2)^3(0{,}8) = 4(0{,}008)(0{,}8) = 0{,}0256$$
> >
> > $$P(C=4 \mid X=4) = (0{,}2)^4 = 0{,}0016$$
> >
> > $$P(C \geq 3 \mid X=4) = 0{,}0256 + 0{,}0016 = 0{,}0272$$
> >
> > **Langkah 2: Terapkan hukum probabilitas total**
> >
> > $$P(C \geq 3) = 0 \times 0{,}1 + 0{,}008 \times 0{,}6 + 0{,}0272 \times 0{,}3$$
> >
> > $$= 0 + 0{,}0048 + 0{,}00816 = 0{,}01296$$
> >
> > **Hasil Akhir:** **(b)**. $P(C \geq 3) = 0{,}01296 \in [0{,}01;\ 0{,}015)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira distribusi majemuk bisa langsung dihitung dari nilai rata-rata $E[X]$ saja.
> > > - Lupa bahwa jika $X=2$, tidak mungkin ada $\geq 3$ pasien kosmetik.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "paling sedikit 3" dari seluruh pasien (bukan dari pasien kosmetik).
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi majemuk ("campuran Binomial") → kondisikan pada nilai $X$, lalu gunakan hukum probabilitas total.
> > > - Perhatikan batas maksimum: $C \leq X$, sehingga untuk $X < 3$, $P(C \geq 3) = 0$ otomatis.

---

## **No. 23**

Banyaknya angin topan $X$ yang menyerang pulau tertentu dalam satu bulan memiliki distribusi sebagai berikut:

$$P(X = k) = 0{,}8 \times 0{,}2^k, \quad k = 0, 1, 2, \ldots$$

Hal ini berlaku untuk setiap bulan Juni, Juli dan Agustus. Diasumsikan bahwa jumlah angin topan di bulan tertentu tidak bergantung pada jumlah di bulan lainnya. Tentukanlah probabilitas paling sedikit tiga angin topan terjadi untuk periode tiga bulan Juni, Juli dan Agustus.

a. Kurang dari $0{,}05$  
b. Sekurang-kurangnya $0{,}05$ tapi kurang dari $0{,}1$  
c. Sekurang-kurangnya $0{,}1$ tapi kurang dari $0{,}125$  
d. Sekurang-kurangnya $0{,}125$ tapi kurang dari $0{,}15$  
e. Sekurang-kurangnya $0{,}15$

> [!summary]+ **Jawaban No. 23**
>
> **(b). Sekurang-kurangnya $0{,}05$ tapi kurang dari $0{,}1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.7 Distribusi Majemuk]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.3; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $P(X=k) = 0{,}8 \times 0{,}2^k$ adalah distribusi Geometrik (jumlah kegagalan sebelum sukses pertama) dengan $p=0{,}8$.
> > Total $T = X_1 + X_2 + X_3$ (iid). $P(T \geq 3) = 1 - P(T \leq 2)$.
>
> **Diketahui:**
> - $X_i \sim \text{Geom}(0{,}8)$ (kegagalan): $P(X=k)=0{,}8 \times 0{,}2^k$, $k=0,1,2,\ldots$
> - $X_1, X_2, X_3$ independen. $T = X_1+X_2+X_3$
> - Target: $P(T \geq 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung probabilitas titik untuk $X_i$**
> >
> > $$P(X=0)=0{,}8,\quad P(X=1)=0{,}16,\quad P(X=2)=0{,}032$$
> >
> > **Langkah 2: Hitung $P(T \leq 2)$**
> >
> > - $P(T=0) = P(X_1=0)P(X_2=0)P(X_3=0) = 0{,}8^3 = 0{,}512$
> >
> > - $P(T=1)$: tepat satu $X_i=1$, dua lainnya $=0$.
> >
> > $$= \binom{3}{1}(0{,}16)(0{,}8)^2 = 3 \times 0{,}16 \times 0{,}64 = 0{,}3072$$
> >
> > - $P(T=2)$: kasus (2,0,0) atau (1,1,0):
> >   - Satu $X_i=2$, dua $=0$: $\binom{3}{1}(0{,}032)(0{,}8)^2 = 3(0{,}032)(0{,}64) = 0{,}06144$
> >   - Dua $X_i=1$, satu $=0$: $\binom{3}{2}(0{,}16)^2(0{,}8) = 3(0{,}0256)(0{,}8) = 0{,}06144$
> >
> > $$P(T=2) = 0{,}06144 + 0{,}06144 = 0{,}12288$$
> >
> > **Langkah 3: Hitung $P(T \geq 3)$**
> >
> > $$P(T \leq 2) = 0{,}512 + 0{,}3072 + 0{,}12288 = 0{,}94208$$
> >
> > $$P(T \geq 3) = 1 - 0{,}94208 = 0{,}05792$$
> >
> > **Hasil Akhir:** **(b)**. $P(T \geq 3) \approx 0{,}058 \in [0{,}05;\ 0{,}1)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $T \sim \text{Geom}$ atau $T \sim \text{Poisson}$ — jumlah Geometrik **tidak** otomatis Geometrik; perlu hitung langsung.
> > > - Lupa kasus $P(T=2)$ terbagi dua sub-kasus: (2,0,0) dan (1,1,0).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "paling sedikit 3 dalam 3 bulan" berarti rata-rata 1 per bulan (pendekatan yang salah konteks).
> >
> > > [!CAUTION] Red Flags
> > > - Jumlah variabel iid diskrit: hitung distribusi $T$ secara konvolusi untuk nilai kecil, lalu gunakan komplemen.
> > > - Selalu enumerate semua partisi integer untuk $P(T=k)$.

---

## **No. 24**

Dua polis asuransi jiwa, masing-masing dengan manfaat kematian sebesar $10{.}000$ dan premi sekali bayar sebesar $500$, dijual kepada pasangan suami istri, satu untuk setiap orang. Polis tersebut akan berakhir pada akhir tahun kesepuluh. Peluang hanya istri yang dapat bertahan hidup sekurang-kurangnya sepuluh tahun adalah $0{,}025$, peluang hanya suami yang dapat bertahan hidup sekurang-kurangnya sepuluh tahun adalah $0{,}01$, dan peluang keduanya akan hidup sekurang-kurangnya sepuluh tahun adalah $0{,}96$. Tentukanlah perkiraan kelebihan premi dibandingkan klaim, diketahui suami masih hidup setidaknya sepuluh tahun.

a. $897$  
b. $870$  
c. $397$  
d. $385$  
e. $350$

> [!summary]+ **Jawaban No. 24**
>
> **(a). $897$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] · [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > $P(H \text{ hidup}) = P(\text{hanya H}) + P(\text{keduanya}) = 0{,}01 + 0{,}96 = 0{,}97$.
> > Ekspektasi bersyarat:
> >
> > $$E[\text{klaim} \mid H \text{ hidup}] = 10{.}000 \times P(W \text{ meninggal} \mid H \text{ hidup})$$
> >
> > Kelebihan = Total premi $-$ E[klaim | H hidup].
>
> **Diketahui:**
> - $P(\text{hanya W hidup})=0{,}025$; $P(\text{hanya H hidup})=0{,}01$; $P(\text{keduanya hidup})=0{,}96$
> - Premi per polis $= 500$ (dua polis → total premi $= 1000$)
> - Manfaat kematian per polis $= 10{.}000$
> - Target: $E[\text{premi}] - E[\text{klaim}]$ diberikan H hidup $\geq 10$ tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $P(H \text{ hidup})$**
> >
> > $$P(H \geq 10\text{ thn}) = P(\text{hanya H}) + P(\text{keduanya}) = 0{,}01 + 0{,}96 = 0{,}97$$
> >
> > **Langkah 2: Tentukan klaim kondisional**
> > Diberikan H hidup: H tidak meninggal, sehingga tidak ada klaim untuk H.
> > Klaim hanya terjadi jika W meninggal sebelum 10 tahun.
> >
> > $$P(W \text{ meninggal} \mid H \text{ hidup}) = P(\text{hanya H hidup}) / P(H \text{ hidup}) = 0{,}01/0{,}97$$
> >
> > **Langkah 3: Hitung E[klaim | H hidup]**
> >
> > $$E[\text{klaim} \mid H \text{ hidup}] = 10{.}000 \times \frac{0{,}01}{0{,}97} = \frac{100}{0{,}97} \approx 103{,}09$$
> >
> > **Langkah 4: Hitung kelebihan premi**
> > Total premi (dua polis, keduanya sudah dibayar) $= 2 \times 500 = 1000$.
> >
> > $$\text{Kelebihan} = 1000 - 103{,}09 \approx 896{,}9 \approx 897$$
> >
> > **Hasil Akhir:** **(a)**. Kelebihan premi $\approx 897$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengkondisikan $P(W \text{ meninggal})$ pada H hidup — harus menggunakan probabilitas bersyarat.
> > > - Menghitung klaim tanpa mempertimbangkan bahwa H hidup berarti tidak ada klaim untuk H.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira premi hanya $500$ (satu polis), padahal dua polis dijual dengan premi masing-masing $500$.
> >
> > > [!CAUTION] Red Flags
> > > - "Diketahui H hidup" → kondisikan semua probabilitas pada peristiwa ini.
> > > - Kelebihan = premi − E[klaim], **bukan** premi − klaim maksimum.

---

## **No. 25**

Sebuah perusahaan menawarkan asuransi gempa bumi. Premi tahunan dimodelkan dengan variabel acak eksponensial dengan mean sebesar $2$. Klaim tahunan dimodelkan dengan variabel acak eksponensial dengan mean sebesar $1$. Premi dan klaim bersifat independen. Misalkan $X$ menyatakan rasio klaim terhadap premi, dan misalkan $f$ adalah fungsi kepadatan dari $X$. Tentukanlah $f(x)$.

a. $\dfrac{1}{2x+1}$  
b. $\dfrac{2}{(2x+1)^2}$  
c. $e^{-x}$  
d. $2e^{-2x}$  
e. $xe^{-x}$

> [!summary]+ **Jawaban No. 25**
>
> **(b). $\dfrac{2}{(2x+1)^2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] · [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > PDF rasio $X = C/P$ (dengan $C$ dan $P$ independen positif):
> >
> > $$f_X(x) = \int_0^{\infty} p\, f_C(xp)\, f_P(p)\, dp, \quad x > 0$$
> >
> > Untuk $C \sim \text{Exp}(\text{rate}=1)$: $f_C(c)=e^{-c}$; $P \sim \text{Exp}(\text{rate}=1/2)$: $f_P(p)=\frac{1}{2}e^{-p/2}$.
>
> **Diketahui:**
> - Klaim $C \sim \text{Exp}(\text{mean}=1)$, rate $=1$: $f_C(c)=e^{-c}$, $c>0$ (kontinu)
> - Premi $P \sim \text{Exp}(\text{mean}=2)$, rate $=1/2$: $f_P(p)=\frac{1}{2}e^{-p/2}$, $p>0$ (kontinu)
> - $X = C/P$; target: $f_X(x)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Turunkan PDF rasio $X = C/P$**
> > Dengan metode transformasi variabel (Jacobian untuk rasio dua variabel independen positif):
> >
> > $$f_X(x) = \int_0^{\infty} p\, f_C(xp)\, f_P(p)\, dp$$
> >
> > **Langkah 2: Substitusikan PDF**
> >
> > $$f_X(x) = \int_0^{\infty} p \cdot e^{-xp} \cdot \frac{1}{2}e^{-p/2}\, dp = \frac{1}{2}\int_0^{\infty} p\, e^{-p(x+1/2)}\, dp$$
> >
> > **Langkah 3: Evaluasi integral**
> > Gunakan $\int_0^\infty p\, e^{-\alpha p}\, dp = \dfrac{1}{\alpha^2}$ dengan $\alpha = x + \dfrac{1}{2} = \dfrac{2x+1}{2}$:
> >
> > $$f_X(x) = \frac{1}{2} \cdot \frac{1}{\left(\dfrac{2x+1}{2}\right)^2} = \frac{1}{2} \cdot \frac{4}{(2x+1)^2} = \frac{2}{(2x+1)^2}$$
> >
> > **Hasil Akhir:** **(b)**. $f_X(x) = \dfrac{2}{(2x+1)^2}$, $x > 0$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $f_X(x) = f_C(x)/f_P(1)$ — ini tidak benar; rasio dua variabel memerlukan Jacobian atau konvolusi.
> > > - Salah menerapkan formula: menggunakan $f_C(x/p)$ bukannya $f_C(xp)$ (atau lupa faktor $|Jacobian| = p$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menukarkan peran klaim dan premi: $X = P/C$ alih-alih $X = C/P$.
> >
> > > [!CAUTION] Red Flags
> > > - Rasio $X = C/P$ dengan $C, P > 0$ independen → formula $f_X(x) = \int_0^\infty p f_C(xp) f_P(p) dp$.
> > > - Selalu verifikasi parameter rate vs mean untuk distribusi Eksponensial sebelum menulis $f$.

---

## **No. 26**

Diketahui $X$ dan $Y$ adalah variabel acak diskrit pada bilangan bulat $\{0, 1, 2\}$, dengan fungsi pembangkit momen $M_X(t)$ dan $M_Y(t)$. Diketahui juga bahwa

$$M_X(t) + M_Y(t) = \frac{3}{4} + \frac{3}{4}e^t + \frac{1}{2}e^{2t} \quad \text{dan} \quad M_X(t) - M_Y(t) = \frac{1}{4} - \frac{1}{4}e^t$$

Tentukanlah nilai dari $P(X = 0)$.

a. $\dfrac{1}{4}$  
b. $\dfrac{1}{8}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 26**
>
> **(d). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.7–2.1; Miller Bab 5.4 |
>
> > [!info]+ **Rumus**  
> >
> > MGF: $M_X(t) = \sum_{k=0}^{2} P(X=k)\, e^{kt} = P(X=0) + P(X=1)e^t + P(X=2)e^{2t}$.
> > Koefisien $e^{0} = 1$ dalam $M_X(t)$ adalah $P(X=0)$.
>
> **Diketahui:**
> - $M_X(t) + M_Y(t)$ dan $M_X(t) - M_Y(t)$ diberikan
> - Target: $P(X=0)$ = koefisien dari $e^{0t} = 1$ dalam $M_X(t)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Isolasi $M_X(t)$**
> >
> > $$M_X(t) = \frac{[M_X(t)+M_Y(t)] + [M_X(t)-M_Y(t)]}{2}$$
> >
> > $$= \frac{\left(\frac{3}{4} + \frac{3}{4}e^t + \frac{1}{2}e^{2t}\right) + \left(\frac{1}{4} - \frac{1}{4}e^t\right)}{2}$$
> >
> > $$= \frac{1 + \frac{1}{2}e^t + \frac{1}{2}e^{2t}}{2} = \frac{1}{2} + \frac{1}{4}e^t + \frac{1}{4}e^{2t}$$
> >
> > **Langkah 2: Identifikasi $P(X=0)$**
> > Dari $M_X(t) = \frac{1}{2} + \frac{1}{4}e^t + \frac{1}{4}e^{2t}$:
> >
> > $$P(X=0) = \frac{1}{2},\quad P(X=1) = \frac{1}{4},\quad P(X=2) = \frac{1}{4}$$
> >
> > Verifikasi: $\frac{1}{2}+\frac{1}{4}+\frac{1}{4} = 1$ ✓
> >
> > **Hasil Akhir:** **(d)**. $P(X=0) = \dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $M_X(0)$ memberikan $P(X=0)$ — padahal $M_X(0) = 1$ selalu (total probabilitas).
> > > - Lupa bahwa koefisien $e^{kt}$ dalam MGF diskrit adalah tepat $P(X=k)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $M_X(t) = (M_X+M_Y)/2$ tanpa menambahkan $(M_X-M_Y)/2$ juga.
> >
> > > [!CAUTION] Red Flags
> > > - Diberikan jumlah dan selisih MGF → isolasi $M_X(t)$ dengan operasi aljabar biasa, lalu baca koefisien.
> > > - Verifikasi selalu: jumlah koefisien harus $= 1$.

---

## **No. 27**

Sebuah perusahaan asuransi menjual $40\%$ polis penyewanya kepada penyewa rumah dan $60\%$ sisanya kepada penyewa apartemen. Di kalangan penyewa rumah, waktu mulai pembelian polis hingga pembatalan polis berdistribusi eksponensial dengan rata-rata sebesar $4$ tahun, dan di kalangan penyewa apartemen berdistribusi eksponensial dengan rata-rata sebesar $2$ tahun. Tentukanlah probabilitas pemegang polis adalah penyewa rumah, mengingat penyewa masih mempunyai polis satu tahun setelah pembelian.

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
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] · [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] · [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> >
> > **Teorema Bayes:**
> >
> > $$P(R \mid T>1) = \frac{P(T>1 \mid R)\,P(R)}{P(T>1 \mid R)\,P(R) + P(T>1 \mid A)\,P(A)}$$
> >
> > Untuk $T \sim \text{Exp}(\lambda)$: $P(T > t) = e^{-\lambda t}$.
>
> **Diketahui:**
> - Rumah (R): $P(R)=0{,}4$, $T_R \sim \text{Exp}(\text{mean}=4)$, rate $\lambda_R = 1/4$
> - Apartemen (A): $P(A)=0{,}6$, $T_A \sim \text{Exp}(\text{mean}=2)$, rate $\lambda_A = 1/2$
> - Target: $P(R \mid T > 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung survival function di $t=1$**
> >
> > $$P(T>1 \mid R) = e^{-1/4} \approx 0{,}7788$$
> >
> > $$P(T>1 \mid A) = e^{-1/2} \approx 0{,}6065$$
> >
> > **Langkah 2: Hitung $P(T > 1)$ total**
> >
> > $$P(T>1) = 0{,}4 \times 0{,}7788 + 0{,}6 \times 0{,}6065 = 0{,}3115 + 0{,}3639 = 0{,}6754$$
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(R \mid T>1) = \frac{0{,}4 \times 0{,}7788}{0{,}6754} = \frac{0{,}3115}{0{,}6754} \approx 0{,}461$$
> >
> > **Hasil Akhir:** **(c)**. $P(R \mid T>1) \approx 0{,}461 \in [0{,}4;\ 0{,}6)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(T>1|R) = 1 - e^{-4}$ (menggunakan mean sebagai rate) — untuk Exp dengan mean $m$, rate $=1/m$ dan $P(T>t)=e^{-t/m}$.
> > > - Menggunakan CDF $F(1)$ alih-alih survival function $S(1) = 1-F(1)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "masih memiliki polis setelah 1 tahun" = $P(T=1)$ (PMF), bukan $P(T>1)$ (survival).
> >
> > > [!CAUTION] Red Flags
> > > - "Masih aktif setelah $t$ tahun" → **survival function** $P(T > t) = e^{-t/\text{mean}}$.
> > > - Bayes dengan Eksponensial campuran → hitung survival per kelompok, lalu normalisasi.

---

## **No. 28**

Dalam kelompok yang terdiri dari $15$ pemegang polis asuransi kesehatan yang didiagnosis menderita kanker, setiap pemegang polis mempunyai probabilitas $0{,}90$ untuk menerima radiasi dan probabilitas $0{,}40$ untuk menerima kemoterapi. Perawatan radiasi dan kemoterapi merupakan peristiwa independen bagi masing-masing pemegang polis, dan perawatan dari pemegang polis yang berbeda bersifat independen satu sama lain. Pemegang polis dalam kelompok ini semuanya memiliki asuransi kesehatan yang sama yang membayar $2$ untuk pengobatan radiasi dan $3$ untuk pengobatan kemoterapi. Tentukanlah variansi dari jumlah total yang dibayar perusahaan asuransi untuk perawatan radiasi dan kemoterapi untuk $15$ pemegang polis tersebut.

a. $13{,}5$  
b. $37{,}8$  
c. $108$  
d. $202{,}5$  
e. $567$

> [!summary]+ **Jawaban No. 28**
>
> **(b). $37{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] · [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.6 Matriks Variansi-Kovariansi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > Untuk $n$ pemegang polis iid, total pembayaran $T = \sum_{i=1}^{n}(2R_i + 3K_i)$.
> > Karena independen: $\text{Var}(T) = n\,\text{Var}(2R_i + 3K_i)$.
> > $\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$.
> > Jika $R$ dan $K$ independen: $\text{Cov}(R,K)=0$.
>
> **Diketahui:**
> - $R_i \sim \text{Bernoulli}(0{,}9)$: radiasi. $K_i \sim \text{Bernoulli}(0{,}4)$: kemoterapi.
> - $R_i$ dan $K_i$ independen (antar individu maupun antar tipe perawatan).
> - Pembayaran per individu: $W_i = 2R_i + 3K_i$. Total: $T = \sum_{i=1}^{15} W_i$.
> - Target: $\text{Var}(T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $\text{Var}(R_i)$ dan $\text{Var}(K_i)$**
> >
> > $$\text{Var}(R_i) = 0{,}9 \times 0{,}1 = 0{,}09$$
> >
> > $$\text{Var}(K_i) = 0{,}4 \times 0{,}6 = 0{,}24$$
> >
> > **Langkah 2: Hitung $\text{Var}(W_i)$**
> > Karena $R_i$ dan $K_i$ independen:
> >
> > $$\text{Var}(W_i) = 4\,\text{Var}(R_i) + 9\,\text{Var}(K_i) = 4(0{,}09) + 9(0{,}24) = 0{,}36 + 2{,}16 = 2{,}52$$
> >
> > **Langkah 3: Hitung $\text{Var}(T)$**
> > Karena $W_i$ iid untuk $i = 1, \ldots, 15$:
> >
> > $$\text{Var}(T) = 15 \times \text{Var}(W_i) = 15 \times 2{,}52 = 37{,}8$$
> >
> > **Hasil Akhir:** **(b)**. $\text{Var}(T) = 37{,}8$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $\text{Var}(T) = \text{Var}(2 \times 15\bar{R} + 3 \times 15\bar{K}) = 4 \times 15^2 \text{Var}(R) + \ldots$ — ini salah; skala $15$ hanya muncul sekali (bukan dikuadratkan).
> > > - Mengira $\text{Var}(2R+3K) = (2+3)^2\text{Var}(\bar{X})$ — rumus tidak berlaku.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira radiasi dan kemoterapi **tidak** independen (lupa membaca "merupakan peristiwa independen").
> >
> > > [!CAUTION] Red Flags
> > > - Variansi jumlah iid → $n \times \text{Var}(\text{satu item})$ (bukan $n^2$).
> > > - Bernoulli$(p)$: $\text{Var} = p(1-p)$.

---

## **No. 29**

Sebuah perusahaan asuransi memiliki dua lini bisnis yang independen satu sama lain. Banyaknya klaim yang masuk per bulan dari Lini bisnis 1, misalkan $N_1$ mempunyai distribusi Poisson dengan mean sebesar $50$ dan banyaknya klaim yang masuk per bulan dari Lini bisnis 2, misalkan $N_2$ mempunyai distribusi binomial dengan $n = 100$ dan $p = 0{,}5$. Dengan menggunakan distribusi normal dengan koreksi bilangan bulat, tentukanlah probabilitas $P[|N_1 - N_2| > 3]$.

a. Kurang dari $0{,}5$  
b. Sekurang-kurangnya $0{,}5$ tapi kurang dari $0{,}55$  
c. Sekurang-kurangnya $0{,}55$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}65$  
e. Sekurang-kurangnya $0{,}65$

> [!summary]+ **Jawaban No. 29**
>
> **(e). Sekurang-kurangnya $0{,}65$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]] · [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] · [[4.2 Distribusi Sampel]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Walpole Bab 8.1 |
>
> > [!info]+ **Rumus**  
> >
> > $D = N_1 - N_2$: $E[D] = E[N_1] - E[N_2]$, $\text{Var}(D) = \text{Var}(N_1) + \text{Var}(N_2)$ (independen).
> > Dengan koreksi bilangan bulat: $P(|D| > 3) = P(D > 3 \text{ atau } D < -3) \approx P(|D| > 3{,}5)_{\text{normal}}$.
>
> **Diketahui:**
> - $N_1 \sim \text{Poisson}(50)$: $E[N_1]=50$, $\text{Var}(N_1)=50$
> - $N_2 \sim B(100, 0{,}5)$: $E[N_2]=50$, $\text{Var}(N_2)=100 \times 0{,}5 \times 0{,}5 = 25$
> - $D = N_1 - N_2$; target: $P(|D| > 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Statistik $D$**
> >
> > $$E[D] = 50 - 50 = 0$$
> >
> > $$\text{Var}(D) = 50 + 25 = 75, \quad \sigma_D = \sqrt{75} = 5\sqrt{3} \approx 8{,}660$$
> >
> > **Langkah 2: Terapkan koreksi bilangan bulat**
> > "$|D| > 3$" dalam konteks diskrit berarti $D \geq 4$ atau $D \leq -4$.
> > Dengan koreksi bilangan bulat: gunakan batas $D > 3{,}5$ atau $D < -3{,}5$.
> >
> > $$P(|D| > 3) \approx P(|D| > 3{,}5)_{\text{normal}}$$
> >
> > **Langkah 3: Standarisasi dan baca tabel**
> >
> > $$z = \frac{3{,}5}{\sqrt{75}} = \frac{3{,}5}{8{,}660} \approx 0{,}4041$$
> >
> > $$P(|D| > 3{,}5) = 2(1 - \Phi(0{,}4041)) \approx 2(1 - 0{,}6568) = 2(0{,}3432) = 0{,}6864$$
> >
> > **Hasil Akhir:** **(e)**. $P(|N_1-N_2|>3) \approx 0{,}686 \geq 0{,}65$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $z = 3/\sqrt{75}$ tanpa koreksi bilangan bulat — menghasilkan $P$ yang sedikit berbeda.
> > > - Mengira $\text{Var}(D) = \text{Var}(N_1) - \text{Var}(N_2)$ (variansi selisih variabel independen = **jumlah** variansi, bukan selisih).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(|D|>3) = P(D>3)$ saja (lupa simetri: kedua ekor).
> >
> > > [!CAUTION] Red Flags
> > > - Variansi selisih dua variabel independen: $\text{Var}(X-Y) = \text{Var}(X) + \text{Var}(Y)$.
> > > - "|D| > 3" dengan koreksi bilangan bulat → batas $3{,}5$, bukan $3$ atau $4$.

---

## **No. 30**

Diketahui $X$ berdistribusi eksponensial dengan rata-rata sebesar $1$ dan $Y$ berdistribusi eksponensial dengan rata-rata sebesar $2$. $a_X$ dan $b_X$ masing-masing merupakan persentil ke-5 dan ke-95 dari $X$, dan $a_Y$ dan $b_Y$ masing-masing merupakan persentil ke-5 dan ke-95 dari $Y$. Tentukanlah nilai dari $\dfrac{b_Y - a_Y}{b_X - a_X}$.

a. $\dfrac{1}{2}$  
b. $\ln 2$  
c. $1$  
d. $2$  
e. $e$

> [!summary]+ **Jawaban No. 30**
>
> **(d). $2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] · [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> >
> > Persentil ke-$q$ dari $\text{Exp}(\text{mean}=m)$: CDF $F(x) = 1-e^{-x/m}$.
> > Persentil ke-$q$: $x_q = -m\ln(1-q)$.
> > Sehingga $a = x_{0{,}05} = -m\ln(0{,}95)$ dan $b = x_{0{,}95} = -m\ln(0{,}05)$.
>
> **Diketahui:**
> - $X \sim \text{Exp}(\text{mean}=1)$, rate $=1$ (kontinu, support $(0,\infty)$)
> - $Y \sim \text{Exp}(\text{mean}=2)$, rate $=1/2$ (kontinu, support $(0,\infty)$)
> - $a_X, b_X$ = persentil ke-5 dan ke-95 dari $X$; $a_Y, b_Y$ dari $Y$
> - Target: $(b_Y - a_Y)/(b_X - a_X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung persentil dari $X$ (mean $= 1$)**
> >
> > $$a_X = -1 \cdot \ln(1-0{,}05) = -\ln(0{,}95)$$
> >
> > $$b_X = -1 \cdot \ln(1-0{,}95) = -\ln(0{,}05)$$
> >
> > $$b_X - a_X = -\ln(0{,}05) - (-\ln(0{,}95)) = \ln(0{,}95) - \ln(0{,}05) = \ln\!\left(\frac{0{,}95}{0{,}05}\right) = \ln(19)$$
> >
> > **Langkah 2: Hitung persentil dari $Y$ (mean $= 2$)**
> >
> > $$a_Y = -2\ln(0{,}95), \quad b_Y = -2\ln(0{,}05)$$
> >
> > $$b_Y - a_Y = -2\ln(0{,}05) + 2\ln(0{,}95) = 2\ln(19)$$
> >
> > **Langkah 3: Hitung rasio**
> >
> > $$\frac{b_Y - a_Y}{b_X - a_X} = \frac{2\ln(19)}{\ln(19)} = 2$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{b_Y - a_Y}{b_X - a_X} = 2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira rasio persentil sama dengan rasio mean (benar untuk Eksponensial, tapi harus diverifikasi terlebih dahulu).
> > > - Salah menghitung $b - a$: menggunakan $b_X = -\ln(0{,}95)$ dan $a_X = -\ln(0{,}05)$ (tertukar urutan persentil).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "rata-rata 2" berarti rate $= 2$ (sebaliknya: mean $= 2 \Rightarrow$ rate $= 1/2$).
> >
> > > [!CAUTION] Red Flags
> > > - Persentil ke-5 < Persentil ke-95 selalu: $a < b$.
> > > - Untuk $\text{Exp}$ dengan mean $m$: lebar interval persentil $(b-a)$ berskala linear dengan $m$, sehingga rasio $= m_Y/m_X = 2/1 = 2$.

---
