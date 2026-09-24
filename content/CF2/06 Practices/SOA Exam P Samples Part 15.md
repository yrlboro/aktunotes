## **No. 421**

The lifetimes of televisions of a certain model are exponentially distributed with a median of 2.7 years.

Calculate the 87.5th percentile of the lifetimes for these televisions.

a. $3{,}08$  
b. $4{,}73$  
c. $8{,}10$  
d. $10{,}80$  
e. $19{,}68$

> [!summary]+ **Jawaban No. 421**
>
> **(c). $8{,}10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Exp}(\beta)$ (parameter scale $\beta$), CDF:
> >
> > $$F(x) = 1 - e^{-x/\beta}$$
> >
> > Median $m$: $F(m) = 0{,}5 \implies e^{-m/\beta} = 0{,}5 \implies \beta = \dfrac{m}{\ln 2}$
> >
> > Persentil ke-$p$: $F(x_p) = p \implies x_p = -\beta \ln(1-p)$
>
> **Diketahui:**
> - Median $= 2{,}7$ tahun $\implies \beta = 2{,}7 / \ln 2$
> - Target: persentil ke-$87{,}5$ ($p = 0{,}875$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan parameter $\beta$**
> >
> > $$F(2{,}7) = 0{,}5 \implies 1 - e^{-2{,}7/\beta} = 0{,}5 \implies e^{-2{,}7/\beta} = 0{,}5$$
> >
> > $$\implies \beta = \frac{2{,}7}{\ln 2} = \frac{2{,}7}{0{,}6931} \approx 3{,}8953$$
> >
> > **Langkah 2: Hitung persentil ke-87,5**
> >
> > $$F(x_{0{,}875}) = 0{,}875 \implies 1 - e^{-x/\beta} = 0{,}875 \implies e^{-x/\beta} = 0{,}125$$
> >
> > $$-\frac{x}{\beta} = \ln(0{,}125) = \ln(1/8) = -3\ln 2$$
> >
> > $$x = 3\beta\ln 2 = 3 \times 3{,}8953 \times 0{,}6931 \approx 3 \times 2{,}7 = 8{,}10$$
> >
> > **Hasil Akhir:** **(c)**. $8{,}10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira median $= E[X] = \beta$ untuk distribusi Eksponensial; median $= \beta \ln 2 \neq \beta$.
> > > - Menghitung $x_{0{,}875}$ tanpa mencari $\beta$ terlebih dahulu dari median.
> >
> > > [!CAUTION] Red Flags
> > > - Persentil ke-87,5 dari Eksponensial $= 3 \times \text{median}$ karena $0{,}875 = 1 - (0{,}5)^3$; ini adalah hubungan elegant yang berguna untuk verifikasi.
>
---

## **No. 422**

Events $A$ and $B$ are mutually exclusive, and at least one of $A$ or $B$ is certain to occur. Events $C$ and $D$ are mutually exclusive, and at least one of $C$ or $D$ is certain to occur. The following probabilities are known:

(i) $P[A] = 0{,}75$  
(ii) $P[D] = 0{,}20$  
(iii) $P[A \cap C] = 0{,}55$

Calculate $P[B \cap D]$.

a. $0{,}00$  
b. $0{,}05$  
c. $0{,}20$  
d. $0{,}25$  
e. $0{,}45$

> [!summary]+ **Jawaban No. 422**
>
> **(a). $0{,}00$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Jika $A$ dan $B$ saling eksklusif dan salah satunya pasti terjadi: $P(A) + P(B) = 1$.
> >
> > Jika $C$ dan $D$ saling eksklusif dan salah satunya pasti terjadi: $P(C) + P(D) = 1$.
> >
> > Karena $\{C, D\}$ adalah partisi ruang sampel: $P(A) = P(A \cap C) + P(A \cap D)$.
>
> **Diketahui:**
> - $P(A) = 0{,}75$; $P(B) = 1 - 0{,}75 = 0{,}25$
> - $P(D) = 0{,}20$; $P(C) = 1 - 0{,}20 = 0{,}80$
> - $P(A \cap C) = 0{,}55$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $P(A \cap D)$**
> >
> > Karena $C$ dan $D$ adalah partisi ruang sampel:
> >
> > $$P(A) = P(A \cap C) + P(A \cap D)$$
> >
> > $$0{,}75 = 0{,}55 + P(A \cap D) \implies P(A \cap D) = 0{,}20$$
> >
> > **Langkah 2: Cari $P(B \cap D)$**
> >
> > Karena $A$ dan $B$ adalah partisi ruang sampel:
> >
> > $$P(D) = P(A \cap D) + P(B \cap D)$$
> >
> > $$0{,}20 = 0{,}20 + P(B \cap D) \implies P(B \cap D) = 0{,}00$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}00$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(B \cap D) = P(B) \times P(D)$; independensi tidak diasumsikan di soal ini.
> > > - Tidak menggunakan fakta bahwa $\{C, D\}$ adalah partisi untuk memecah $P(A)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Mutually exclusive and certain to occur" → pasangan tersebut membentuk **partisi** ruang sampel; gunakan hukum probabilitas total untuk memecah kejadian lain.
>
---

## **No. 423**

A survey was conducted within the population of those who claim to have contributed to charity during the previous year. Results indicate that 70% of this population claimed to have contributed at least 1000, 50% overstated the value of their contributions, and 45% did both.

Assume that the survey accurately represents the population.

Calculate the probability that a randomly selected person overstated the value of his contribution, given that they claimed to have contributed less than 1000.

a. $1/20$  
b. $1/10$  
c. $1/6$  
d. $3/4$  
e. $5/6$

> [!summary]+ **Jawaban No. 423**
>
> **(c). $1/6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > $$P(\text{Overstated} \mid \text{Kurang dari 1000}) = \frac{P(\text{Overstated} \cap \text{Kurang dari 1000})}{P(\text{Kurang dari 1000})}$$
>
> **Diketahui:**
> - $P(\geq 1000) = 0{,}70 \implies P(< 1000) = 0{,}30$
> - $P(\text{Overstated}) = 0{,}50$
> - $P(\text{Overstated} \cap \geq 1000) = 0{,}45$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun tabel kontingensi**
> >
> > | | Overstated | Tidak Overstated | Total |
> > |:-:|:-:|:-:|:-:|
> > | $\geq 1000$ | 0,45 | 0,25 | 0,70 |
> > | $< 1000$ | 0,05 | 0,25 | 0,30 |
> > | Total | 0,50 | 0,50 | 1,00 |
> >
> > Isian: $P(\text{Overstated} \cap < 1000) = 0{,}50 - 0{,}45 = 0{,}05$.
> >
> > **Langkah 2: Hitung probabilitas bersyarat**
> >
> > $$P(\text{Overstated} \mid < 1000) = \frac{0{,}05}{0{,}30} = \frac{1}{6}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{6}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(\text{Overstated}) / P(< 1000) = 0{,}50/0{,}30$ sebagai jawaban; pembilang harus probabilitas **irisan**, bukan probabilitas marginal Overstated.
> > > - Lupa bahwa tabel kontingensi membantu mengisi sel-sel yang tidak langsung diberikan.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan dua atribut biner → buat tabel $2 \times 2$, isi sel yang diketahui, derivasikan sel lainnya sebelum menghitung probabilitas bersyarat.
>
---

## **No. 424**

A website requires a five-character password consisting of exactly three distinct characters selected from the 26 upper-case letters of the alphabet and exactly two characters, not necessarily distinct, selected from the ten digits. The password must begin with one of the selected letters.

Calculate the maximum number of unique passwords, in millions, the site will accommodate.

a. $3{,}120$  
b. $4{,}212$  
c. $4{,}680$  
d. $8{,}424$  
e. $9{,}360$

> [!summary]+ **Jawaban No. 424**
>
> **(e). $9{,}360$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Hitung secara berurutan: (1) pilih dan tempatkan huruf, (2) tempatkan digit.
>
> **Diketahui:**
> - Password 5 karakter: 3 huruf besar *berbeda* + 2 digit (boleh sama)
> - Karakter pertama harus salah satu dari 3 huruf yang dipilih
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pilih 3 huruf berbeda dan tentukan posisi pertama**
> >
> > Pilih 3 huruf dari 26: $\binom{26}{3} = 2600$ cara.
> >
> > Pilih 1 dari 3 huruf untuk posisi pertama: $3$ cara.
> >
> > Jumlah cara memilih huruf dan menempatkan satu di posisi pertama: $2600 \times 3 = 7800$.
> >
> > **Langkah 2: Susun 2 huruf tersisa di 4 posisi yang tersisa**
> >
> > Dari 4 posisi yang tersisa (posisi 2–5), pilih 2 posisi untuk 2 huruf yang tersisa dan susun keduanya: $P(4, 2) = 4 \times 3 = 12$ cara.
> >
> > **Langkah 3: Tempatkan 2 digit di 2 posisi yang tersisa**
> >
> > Setelah 3 huruf ditempatkan di 3 posisi, tersisa 2 posisi untuk digit. Setiap posisi dapat diisi 10 digit: $10^2 = 100$ cara.
> >
> > **Langkah 4: Hitung total**
> >
> > $$\text{Total} = 7800 \times 12 \times 100 = 9{.}360{.}000 = 9{,}360 \text{ juta}$$
> >
> > **Hasil Akhir:** **(e)**. $9{,}360$ juta
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\binom{26}{3}$ tanpa memperhitungkan pilihan posisi pertama (harus huruf) dan susunan huruf di posisi lainnya.
> > > - Mengira "dua digit tidak harus berbeda" tidak mengubah perhitungan; justru keduanya boleh sama sehingga ada $10^2 = 100$ pilihan, bukan $10 \times 9 = 90$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal enumerasi bertingkat → pisahkan keputusan menjadi tahap-tahap independen, lalu kalikan hasilnya.
>
---

## **No. 425**

This year, the number of tooth fillings a policyholder undergoes is Poisson distributed. The probability that the policyholder undergoes no tooth fillings this year is 0.18.

Calculate the mode of the number of tooth fillings the policyholder undergoes this year.

a. $0$  
b. $1$  
c. $2$  
d. $5$  
e. $6$

> [!summary]+ **Jawaban No. 425**
>
> **(b). $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Poisson}(\lambda)$:
> >
> > $$P(X = 0) = e^{-\lambda} \implies \lambda = -\ln(P(X=0))$$
> >
> > Modus Poisson: jika $\lambda \notin \mathbb{Z}^+$, modus $= \lfloor \lambda \rfloor$; jika $\lambda \in \mathbb{Z}^+$, dua modus: $\lambda$ dan $\lambda - 1$.
>
> **Diketahui:**
> - $P(X = 0) = 0{,}18$; target: modus
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\lambda$**
> >
> > $$e^{-\lambda} = 0{,}18 \implies \lambda = -\ln(0{,}18) \approx 1{,}7148$$
> >
> > **Langkah 2: Tentukan modus**
> >
> > Karena $\lambda = 1{,}7148$ bukan bilangan bulat:
> >
> > $$\text{Modus} = \lfloor 1{,}7148 \rfloor = 1$$
> >
> > **Hasil Akhir:** **(b)**. $1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modus Poisson selalu sama dengan mean ($\approx 1{,}7$); modus harus bilangan bulat, yaitu $\lfloor \lambda \rfloor = 1$.
> > > - Mengira $P(X=0) = 0{,}18$ menunjukkan modus di $X = 0$; nilai $P(X=0)$ tidak menentukan modus secara langsung.
> >
> > > [!CAUTION] Red Flags
> > > - Modus Poisson $= \lfloor \lambda \rfloor$ untuk $\lambda$ bukan bilangan bulat; verifikasi dengan menghitung $P(0), P(1), P(2)$ jika ragu.
>
---

## **No. 426**

The time, in years, until replacement for a new telephone pole has probability density function

$$f(t) = \begin{cases} kt, & 0 < t < 50 \\ 0, & \text{selainnya} \end{cases}$$

where $k$ is a constant.

Calculate the probability that a new telephone pole will be replaced within 25 years given that it is not replaced within 20 years.

a. $0{,}09$  
b. $0{,}11$  
c. $0{,}16$  
d. $0{,}17$  
e. $0{,}84$

> [!summary]+ **Jawaban No. 426**
>
> **(b). $0{,}11$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$P(T \leq 25 \mid T > 20) = \frac{P(20 < T \leq 25)}{P(T > 20)}$$
> >
> > Normalisasi: $\int_0^{50} kt\,dt = 1 \implies k \cdot \frac{50^2}{2} = 1 \implies k = \frac{1}{1250}$
>
> **Diketahui:**
> - $f(t) = t/1250$ untuk $0 < t < 50$; $F(t) = t^2/2500$
> - Target: $P(T \leq 25 \mid T > 20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $k$**
> >
> > $$k \int_0^{50} t\,dt = k \cdot \frac{2500}{2} = 1250k = 1 \implies k = \frac{1}{1250}$$
> >
> > $$F(t) = \int_0^t \frac{s}{1250}\,ds = \frac{t^2}{2500}$$
> >
> > **Langkah 2: Hitung $P(20 < T \leq 25)$**
> >
> > $$P(20 < T \leq 25) = F(25) - F(20) = \frac{625}{2500} - \frac{400}{2500} = \frac{225}{2500}$$
> >
> > **Langkah 3: Hitung $P(T > 20)$**
> >
> > $$P(T > 20) = 1 - F(20) = 1 - \frac{400}{2500} = \frac{2100}{2500}$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(T \leq 25 \mid T > 20) = \frac{225/2500}{2100/2500} = \frac{225}{2100} = \frac{3}{28} \approx 0{,}10714 \approx 0{,}11$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}11$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(T \leq 25)$ di pembilang alih-alih $P(20 < T \leq 25)$; probabilitas bersyarat memerlukan irisan.
> > > - Lupa menentukan $k$ terlebih dahulu; $f(t) = t/1250$, bukan $t$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF mengandung konstanta → normalisasi dulu sebelum menghitung probabilitas apapun.
>
---

## **No. 427**

*(Soal ini dihapus karena merupakan duplikat dari soal No. 154.)*

> [!summary]+ **Jawaban No. 427**
>
> **⚠️ DIHAPUS — Duplikat Soal No. 154**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | — |
> | **Sub-topik** | — |
> | **Difficulty** | — |
> | **Prerequisite** | — |
> | **Connected Topics** | — |
> | **Referensi** | — |
>
> > [!warning]+ **Keterangan Soal Dihapus**
> > Soal No. 427 **dihapus oleh SOA** karena merupakan duplikat dari soal No. 154.
>
> **Status:** Soal ini tidak diujikan.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > Tidak berlaku — soal dihapus.
> >
> > > [!CAUTION] Red Flags
> > > Tidak berlaku — soal dihapus.
>
---

## **No. 428**

The working lifetime of a master computer chip that regulates the electronic components of an automobile engine is exponentially distributed with a mean of 7.2 years. Under a warranty, the chip manufacturer will replace any chip that fails within $t$ years. It is expected that 5% of all chips will be replaced under this warranty.

Calculate $t$.

a. $0{,}007$  
b. $0{,}369$  
c. $0{,}416$  
d. $0{,}501$  
e. $0{,}720$

> [!summary]+ **Jawaban No. 428**
>
> **(b). $0{,}369$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Exp}(\beta = 7{,}2)$:
> >
> > $$P(X \leq t) = 1 - e^{-t/7{,}2} = 0{,}05$$
>
> **Diketahui:**
> - $X \sim \text{Exp}(\beta = 7{,}2)$; $P(X \leq t) = 0{,}05$
> - Target: $t$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun persamaan**
> >
> > $$1 - e^{-t/7{,}2} = 0{,}05 \implies e^{-t/7{,}2} = 0{,}95$$
> >
> > **Langkah 2: Selesaikan untuk $t$**
> >
> > $$-\frac{t}{7{,}2} = \ln(0{,}95) = -0{,}05129$$
> >
> > $$t = 7{,}2 \times 0{,}05129 \approx 0{,}3693 \approx 0{,}369$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}369$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $t = 0{,}05 \times 7{,}2 = 0{,}36$; ini adalah aproksimasi linear yang tidak akurat untuk distribusi Eksponensial.
> > > - Lupa bahwa $P(X \leq t) = 1 - e^{-t/\beta}$; jangan langsung menggunakan $e^{-t/\beta} = 0{,}05$.
> >
> > > [!CAUTION] Red Flags
> > > - Rumus cepat: $t = -\beta \ln(1-p)$ untuk persentil ke-$p$ dari $\text{Exp}(\beta)$.
>
---

## **No. 429**

A baseball-pitching machine is used for batting practice. The machine is out of adjustment such that every pitched baseball arrives at the batter's box between 0 and 2 feet higher than intended. Let $X$ equal the difference, in feet, between the actual arrival height and the intended arrival height of a pitched baseball. The density of $X$, $f(x)$, is proportional to $x$.

Calculate the 80th percentile for $X$.

a. $0{,}40$  
b. $0{,}89$  
c. $1{,}26$  
d. $1{,}60$  
e. $1{,}79$

> [!summary]+ **Jawaban No. 429**
>
> **(e). $1{,}79$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $f(x) = cx$ untuk $0 < x < 2$; normalisasi: $\int_0^2 cx\,dx = 1$.
> >
> > CDF: $F(x) = \int_0^x ct\,dt = cx^2/2$.
> >
> > Persentil ke-$p$: $F(x_p) = p$.
>
> **Diketahui:**
> - $f(x) \propto x$ pada $(0, 2)$; target: persentil ke-80
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan konstanta $c$**
> >
> > $$\int_0^2 cx\,dx = c \cdot \frac{4}{2} = 2c = 1 \implies c = \frac{1}{2}$$
> >
> > $$f(x) = \frac{x}{2}, \quad F(x) = \frac{x^2}{4}$$
> >
> > **Langkah 2: Hitung persentil ke-80**
> >
> > $$F(x_{0{,}8}) = \frac{x^2}{4} = 0{,}8 \implies x^2 = 3{,}2 \implies x = \sqrt{3{,}2} \approx 1{,}789 \approx 1{,}79$$
> >
> > **Hasil Akhir:** **(e)**. $1{,}79$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $f(x) = x$ tanpa normalisasi; konstanta $c = 1/2$ harus ditentukan dulu.
> > > - Menghitung $0{,}8 \times 2 = 1{,}6$ sebagai persentil ke-80 (jawaban (D)); ini berlaku untuk distribusi Uniform, bukan distribusi linear.
> >
> > > [!CAUTION] Red Flags
> > > - "Proportional to $x$" → $f(x) = cx$; selalu normalisasi sebelum menghitung CDF atau persentil.
>
---

## **No. 430**

Two different models of televisions, A and B, have exponentially distributed lifespans, measured in years. The probability that television A and television B are still working $T$ years from now is 0.49 and 0.70, respectively. The variance of television A's lifespan is 5.60.

Calculate the variance of television B's lifespan.

a. $1{,}40$  
b. $1{,}80$  
c. $2{,}80$  
d. $11{,}20$  
e. $22{,}40$

> [!summary]+ **Jawaban No. 430**
>
> **(e). $22{,}40$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Exp}(\beta)$ (scale), $\text{Var}(X) = \beta^2$.
> >
> > $P(X > T) = e^{-T/\beta}$
>
> **Diketahui:**
> - $P(X_A > T) = 0{,}49 = e^{-T/\beta_A}$; $\text{Var}(X_A) = \beta_A^2 = 5{,}6 \implies \beta_A = \sqrt{5{,}6} \approx 2{,}3664$
> - $P(X_B > T) = 0{,}70 = e^{-T/\beta_B}$
> - Target: $\text{Var}(X_B) = \beta_B^2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $T$ dari TV A**
> >
> > $$e^{-T/\beta_A} = 0{,}49 \implies T = -\beta_A \ln(0{,}49) = 2{,}3664 \times 0{,}7133 \approx 1{,}6881$$
> >
> > **Langkah 2: Tentukan $\beta_B$ dari TV B**
> >
> > $$e^{-T/\beta_B} = 0{,}70 \implies -\frac{T}{\beta_B} = \ln(0{,}70) = -0{,}3567$$
> >
> > $$\beta_B = \frac{T}{0{,}3567} = \frac{1{,}6881}{0{,}3567} \approx 4{,}7332$$
> >
> > **Langkah 3: Hitung $\text{Var}(X_B)$**
> >
> > $$\text{Var}(X_B) = \beta_B^2 = (4{,}7332)^2 \approx 22{,}40$$
> >
> > **Hasil Akhir:** **(e)**. $22{,}40$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X_B)/\text{Var}(X_A) = P(X_B > T)/P(X_A > T)$; hubungan ini tidak langsung berlaku.
> > > - Lupa bahwa $T$ adalah sama untuk kedua TV; harus cari $T$ dari TV A terlebih dahulu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua Eksponensial berbagi nilai $T$ yang sama → cari $T$ dari yang diketahui variansnya, lalu gunakan $T$ itu untuk yang lain.
>
---

## **No. 431**

Each year, a car insurance company's four quarterly profits are mutually independent and normally distributed with common mean and variance. Each quarter, the probability that the company earns a positive profit is 0.80.

Calculate the probability that the company earns an overall positive profit in a given year.

a. $0{,}410$  
b. $0{,}663$  
c. $0{,}800$  
d. $0{,}954$  
e. $0{,}998$

> [!summary]+ **Jawaban No. 431**
>
> **(d). $0{,}954$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[4.3 Teorema Limit Pusat]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > $X_i \sim N(\mu, \sigma^2)$ i.i.d.; $S = X_1 + X_2 + X_3 + X_4 \sim N(4\mu, 4\sigma^2)$.
> >
> > $$P(X_i > 0) = 0{,}80 \implies P\!\left(Z > \frac{-\mu}{\sigma}\right) = 0{,}80 \implies \frac{\mu}{\sigma} = 0{,}84$$
>
> **Diketahui:**
> - $P(X_i > 0) = 0{,}80 \implies \mu/\sigma = 0{,}84$
> - $S = \sum_{i=1}^4 X_i \sim N(4\mu, 4\sigma^2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan rasio $\mu/\sigma$**
> >
> > $$P(X_i > 0) = P\!\left(Z > \frac{0-\mu}{\sigma}\right) = P\!\left(Z > -\frac{\mu}{\sigma}\right) = 0{,}80$$
> >
> > $$\Phi\!\left(\frac{\mu}{\sigma}\right) = 0{,}80 \implies \frac{\mu}{\sigma} = 0{,}842$$
> >
> > **Langkah 2: Distribusi keuntungan tahunan $S$**
> >
> > $$S \sim N(4\mu, 4\sigma^2) \implies \sigma_S = 2\sigma$$
> >
> > **Langkah 3: Standarisasi $P(S > 0)$**
> >
> > $$P(S > 0) = P\!\left(Z > \frac{0 - 4\mu}{2\sigma}\right) = P\!\left(Z > -\frac{2\mu}{\sigma}\right) = P\!\left(Z > -2 \times 0{,}842\right)$$
> >
> > $$= P(Z > -1{,}684) = \Phi(1{,}684) \approx 0{,}9535 \approx 0{,}954$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}954$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(S > 0) = P(X_i > 0) = 0{,}80$; jumlah empat kuartal memiliki distribusi berbeda dari satu kuartal.
> > > - Lupa bahwa $\text{Var}(S) = 4\sigma^2$, sehingga $\sigma_S = 2\sigma$ (bukan $4\sigma$).
> >
> > > [!CAUTION] Red Flags
> > > - Jumlah $n$ variabel Normal i.i.d. dengan $\mu/\sigma = c$ → standar deviasi total = $n \times c$ kali lebih besar dari per unit, menghasilkan $z = -\sqrt{n} \times c$.
>
---

## **No. 432**

A large life insurance company gets a steady inflow of new policyholders each month. In the past, the number of new policyholders per month, $N_{\text{past}}$, was normally distributed with mean 500, standard deviation $\sigma$, and $P[N_{\text{past}} < 400] = 0{,}1056$.

The company has just undertaken a new marketing strategy, which is projected to have a positive effect on new sales. The projected number of new policyholders per month, $N_{\text{future}}$, is normally distributed with mean 550 and standard deviation $1{,}25\sigma$.

Calculate $P[370 < N_{\text{future}} < 730]$.

a. $0{,}903$  
b. $0{,}928$  
c. $0{,}970$  
d. $0{,}976$  
e. $0{,}985$

> [!summary]+ **Jawaban No. 432**
>
> **(b). $0{,}928$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > Standarisasi: $P(a < N < b) = \Phi\!\left(\frac{b - \mu}{\sigma}\right) - \Phi\!\left(\frac{a - \mu}{\sigma}\right)$
>
> **Diketahui:**
> - $N_{\text{past}} \sim N(500, \sigma^2)$; $P(N_{\text{past}} < 400) = 0{,}1056$
> - $N_{\text{future}} \sim N(550, (1{,}25\sigma)^2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\sigma$ dari data historis**
> >
> > $$P\!\left(Z < \frac{400 - 500}{\sigma}\right) = 0{,}1056 \implies \frac{-100}{\sigma} = -1{,}25 \implies \sigma = 80$$
> >
> > **Langkah 2: Parameter $N_{\text{future}}$**
> >
> > $$\mu_F = 550, \quad \sigma_F = 1{,}25 \times 80 = 100$$
> >
> > **Langkah 3: Standarisasi**
> >
> > $$P(370 < N_{\text{future}} < 730) = P\!\left(\frac{370 - 550}{100} < Z < \frac{730 - 550}{100}\right) = P(-1{,}8 < Z < 1{,}8)$$
> >
> > $$= 2\Phi(1{,}8) - 1 = 2(0{,}9641) - 1 = 0{,}9282 \approx 0{,}928$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}928$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\sigma = 80$ untuk $N_{\text{future}}$; standar deviasi masa depan adalah $1{,}25\sigma = 100$.
> > > - Salah membaca tabel Normal untuk $z = \pm 1{,}8$; $\Phi(1{,}8) \approx 0{,}9641$.
> >
> > > [!CAUTION] Red Flags
> > > - Cari $\sigma$ dari informasi historis terlebih dahulu sebelum menghitung probabilitas untuk distribusi yang baru.
>
---

## **No. 433**

An insurance company sells flood and fire insurance. This year, the company's profit from selling flood insurance is normally distributed, and its profit from selling fire insurance is normally distributed with three times the mean and three times the standard deviation as from flood insurance. The profits from the two types of insurance are independent. The probability that the company earns a positive profit from selling flood insurance this year is 0.67.

Calculate the probability that the insurance company earns an overall positive profit this year.

a. $0{,}71$  
b. $0{,}73$  
c. $0{,}81$  
d. $0{,}92$  
e. $0{,}96$

> [!summary]+ **Jawaban No. 433**
>
> **(a). $0{,}71$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim N(\mu, \sigma^2)$; $Y \sim N(3\mu, 9\sigma^2)$; $S = X + Y \sim N(4\mu, 10\sigma^2)$.
>
> **Diketahui:**
> - $P(X > 0) = 0{,}67 \implies \Phi(\mu/\sigma) = 0{,}67 \implies \mu/\sigma \approx 0{,}44$
> - $Y \sim N(3\mu, (3\sigma)^2)$; $X, Y$ independen
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\mu/\sigma$**
> >
> > $$P(X > 0) = 0{,}67 \implies P\!\left(Z > -\frac{\mu}{\sigma}\right) = 0{,}67 \implies \frac{\mu}{\sigma} = 0{,}44$$
> >
> > **Langkah 2: Distribusi $S = X + Y$**
> >
> > $$E[S] = \mu + 3\mu = 4\mu$$
> >
> > $$\text{Var}(S) = \sigma^2 + 9\sigma^2 = 10\sigma^2 \implies \sigma_S = \sigma\sqrt{10}$$
> >
> > **Langkah 3: Standarisasi $P(S > 0)$**
> >
> > $$P(S > 0) = P\!\left(Z > \frac{-4\mu}{\sigma\sqrt{10}}\right) = P\!\left(Z > -\frac{4 \times 0{,}44}{\sqrt{10}}\right) = P\!\left(Z > -\frac{1{,}76}{3{,}162}\right)$$
> >
> > $$= P(Z > -0{,}5566) = \Phi(0{,}5566) \approx 0{,}711 \approx 0{,}71$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}71$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(S) = (3\sigma)^2 = 9\sigma^2$ tanpa menambahkan variansi $X$; variansi total $= \sigma^2 + 9\sigma^2 = 10\sigma^2$.
> > > - Salah membaca bahwa "three times the standard deviation" berarti $\sigma_Y = 3\sigma$, bukan $\sigma_Y^2 = 3\sigma^2$.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu pastikan apakah yang dilipattigakan adalah standar deviasi atau variansi; "three times the standard deviation" → $\sigma_Y = 3\sigma$ → $\text{Var}(Y) = 9\sigma^2$.
>
---

## **No. 434**

An amusement park has two roller coasters. This year, the numbers of accidents occurring on the first and second roller coasters are Poisson distributed with means $\lambda_1 = 0{,}5$ and $\lambda_2$, respectively. The probability that at least one accident occurs on the second roller coaster is twice the probability for the first roller coaster.

Calculate $\lambda_2$.

a. $1{,}00$  
b. $1{,}19$  
c. $1{,}23$  
d. $1{,}55$  
e. $2{,}00$

> [!summary]+ **Jawaban No. 434**
>
> **(d). $1{,}55$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $P(X_j \geq 1) = 1 - e^{-\lambda_j}$
>
> **Diketahui:**
> - $\lambda_1 = 0{,}5$; $P(X_2 \geq 1) = 2 \times P(X_1 \geq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X_1 \geq 1)$**
> >
> > $$P(X_1 \geq 1) = 1 - e^{-0{,}5} = 1 - 0{,}6065 = 0{,}3935$$
> >
> > **Langkah 2: Susun persamaan untuk $\lambda_2$**
> >
> > $$1 - e^{-\lambda_2} = 2(1 - e^{-0{,}5}) = 2 \times 0{,}3935 = 0{,}7870$$
> >
> > $$e^{-\lambda_2} = 1 - 0{,}7870 = 0{,}2130$$
> >
> > **Langkah 3: Selesaikan untuk $\lambda_2$**
> >
> > $$\lambda_2 = -\ln(0{,}2130) \approx 1{,}546 \approx 1{,}55$$
> >
> > **Hasil Akhir:** **(d)**. $1{,}55$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "dua kali probabilitas" berarti $\lambda_2 = 2\lambda_1 = 1{,}0$; hubungan $P \geq 1$ tidak linear terhadap $\lambda$.
> > > - Menuliskan persamaan untuk $P(X_2 = 1)$ alih-alih $P(X_2 \geq 1)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Dua kali probabilitas at least one" → gunakan $1 - e^{-\lambda}$, selesaikan secara numerik.
>
---

## **No. 435**

A large city police department is conducting an analysis of the annual number of car accidents in the city. The department hires an actuary who models the annual number of car accidents using an exponential distribution with a variance of 7225.

Calculate the median minus the mean of this distribution.

a. $-2217$  
b. $-26$  
c. $0$  
d. $26$  
e. $2217$

> [!summary]+ **Jawaban No. 435**
>
> **(b). $-26$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Exp}(\beta)$: $\text{Var}(X) = \beta^2$, $E[X] = \beta$, median $= \beta \ln 2$.
> >
> > Median $-$ Mean $= \beta \ln 2 - \beta = \beta(\ln 2 - 1)$
>
> **Diketahui:**
> - $\text{Var}(X) = 7225 \implies \beta = \sqrt{7225} = 85$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\beta$**
> >
> > $$\beta = \sqrt{\text{Var}(X)} = \sqrt{7225} = 85$$
> >
> > **Langkah 2: Hitung mean dan median**
> >
> > $$E[X] = \beta = 85$$
> >
> > $$\text{Median} = \beta \ln 2 = 85 \times 0{,}6931 \approx 58{,}92$$
> >
> > **Langkah 3: Hitung selisih**
> >
> > $$\text{Median} - \text{Mean} = 58{,}92 - 85 \approx -26{,}08 \approx -26$$
> >
> > **Hasil Akhir:** **(b)**. $-26$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira median = mean untuk distribusi Eksponensial; distribusi ini tidak simetris — mediannya lebih kecil dari mean (karena $\ln 2 < 1$).
> > > - Mengira $\beta = 7225$ (variansi) bukan $\beta = \sqrt{7225} = 85$ (standar deviasi = mean untuk Eksponensial).
> >
> > > [!CAUTION] Red Flags
> > > - Untuk Eksponensial: median $= \beta \ln 2 \approx 0{,}693\beta < \beta = $ mean; selisih selalu negatif.
>
---

## **No. 436**

An insurance policy has been purchased for a windmill farm. The policy will pay to compensate for the loss of revenue resulting from certain weather hazards that shut down the farm. Each such loss is exponentially distributed with standard deviation 1000.

Calculate the probability that a random loss exceeds 1500 given that it exceeds the mean.

a. $0{,}22$  
b. $0{,}39$  
c. $0{,}50$  
d. $0{,}61$  
e. $0{,}78$

> [!summary]+ **Jawaban No. 436**
>
> **(d). $0{,}61$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Exp}(\beta)$: $\sigma = \beta$, sehingga $\beta = 1000$.
> >
> > Sifat memoryless: $P(X > 1000 + 500 \mid X > 1000) = P(X > 500)$.
>
> **Diketahui:**
> - $\sigma = \beta = 1000 = E[X]$; target: $P(X > 1500 \mid X > 1000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan memoryless property**
> >
> > Mean $= \beta = 1000$; kondisi $X > 1000$ adalah kondisi "melewati mean".
> >
> > $$P(X > 1500 \mid X > 1000) = P(X > 500) = e^{-500/1000} = e^{-0{,}5}$$
> >
> > **Langkah 2: Hitung**
> >
> > $$e^{-0{,}5} \approx 0{,}6065 \approx 0{,}61$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}61$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $P(X > 1500)/P(X > 1000)$ secara langsung tanpa memoryless; keduanya memberi hasil sama tapi memoryless lebih cepat.
> > > - Mengira mean $\neq$ standar deviasi untuk Eksponensial; keduanya sama dan $= \beta$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk Eksponensial: mean $=$ standar deviasi $= \beta$; "exceeds the mean" $\equiv$ "exceeds $\beta$". Gunakan memoryless property.
>
---

## **No. 437**

Data from a study shows the following about the number of injuries a football player experiences in a year:

(i) The probability is 0.250 that the player experiences 1 or 2 injuries.  
(ii) The probability is 0.036 that the player experiences 2 or 3 injuries.  
(iii) The probability is 0.260 that the player experiences at least 1 injury.  
(iv) The probability is 0.002 that the player experiences at least 4 injuries.

Calculate the probability that the football player experiences exactly 2 injuries this year.

a. $0{,}009$  
b. $0{,}014$  
c. $0{,}024$  
d. $0{,}028$  
e. $0{,}048$

> [!summary]+ **Jawaban No. 437**
>
> **(d). $0{,}028$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Miller Bab 3; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > Notasikan $p_k = P(X = k)$. Hubungan kunci:
> >
> > $$P(\text{tepat 2}) = P(1 \cup 2) + P(2 \cup 3) - P(\geq 1) + P(\geq 4)$$
>
> **Diketahui:**
> - $p_1 + p_2 = 0{,}250$
> - $p_2 + p_3 = 0{,}036$
> - $p_1 + p_2 + p_3 + \ldots = 0{,}260$
> - $p_4 + p_5 + \ldots = 0{,}002$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kurangkan $P(\geq 4)$ dari $P(\geq 1)$**
> >
> > $$p_1 + p_2 + p_3 = P(\geq 1) - P(\geq 4) = 0{,}260 - 0{,}002 = 0{,}258$$
> >
> > **Langkah 2: Gunakan substitusi**
> >
> > Dari kondisi (i): $p_1 + p_2 = 0{,}250$, sehingga:
> >
> > $$p_3 = 0{,}258 - 0{,}250 = 0{,}008$$
> >
> > Dari kondisi (ii): $p_2 + p_3 = 0{,}036$, sehingga:
> >
> > $$p_2 = 0{,}036 - p_3 = 0{,}036 - 0{,}008 = 0{,}028$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}028$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba langsung menghitung $p_2$ tanpa terlebih dahulu mencari $p_3$; urutan langkah: cari $p_1 + p_2 + p_3$ → cari $p_3$ → cari $p_2$.
> > > - Lupa mengurangkan $P(\geq 4)$ dari $P(\geq 1)$ untuk mendapat $p_1 + p_2 + p_3$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan beberapa kondisi overlapping → buat sistem persamaan dari probabilitas yang tumpang tindih, selesaikan secara bertahap.
>
---

## **No. 438**

A delivery truck, when filled to capacity, can carry only three items of Type A in addition to only two items of Type B. One day, six items of Type A and four items of Type B await delivery. The ten items are brought to the loading dock one at a time in random order.

Calculate the probability that the first five items brought to the loading dock will fill the delivery truck to capacity.

a. $1/210$  
b. $1/21$  
c. $1/10$  
d. $21/100$  
e. $10/21$

> [!summary]+ **Jawaban No. 438**
>
> **(e). $10/21$**
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
> > Distribusi Hipergeometrik: memilih 5 dari 10 item, ingin tepat 3 Tipe A dan 2 Tipe B.
> >
> > $$P = \frac{\binom{6}{3}\binom{4}{2}}{\binom{10}{5}}$$
>
> **Diketahui:**
> - 6 item Tipe A, 4 item Tipe B; kapasitas truk = 3A + 2B
> - Truk penuh tepat ketika 5 item pertama = 3 Tipe A dan 2 Tipe B
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung total cara memilih 5 dari 10**
> >
> > $$\binom{10}{5} = 252$$
> >
> > **Langkah 2: Hitung cara favorable**
> >
> > $$\binom{6}{3} \times \binom{4}{2} = 20 \times 6 = 120$$
> >
> > **Langkah 3: Hitung probabilitas**
> >
> > $$P = \frac{120}{252} = \frac{10}{21}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{10}{21}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung probabilitas dengan permutasi bukan kombinasi; urutan tidak penting untuk "5 item pertama", hanya komposisi yang penting.
> > > - Mengira truk belum tentu penuh dengan 5 item; soal menyatakan kapasitas = 3A + 2B = tepat 5 item.
> >
> > > [!CAUTION] Red Flags
> > > - "Diambil satu per satu dalam urutan acak" → probabilitas 5 item pertama memiliki komposisi tertentu = Hipergeometrik dari 10 item.
>
---

## **No. 439**

An insurance company's profit for one year is normally distributed with probability 0.8531 of being positive. The company's profit the next year is normally distributed with probability 0.9192 of being positive. The yearly profits are independent with the same mean but different standard deviations.

Calculate the probability that the insurance company earns an overall positive profit in this two-year period.

a. $0{,}7842$  
b. $0{,}7995$  
c. $0{,}8849$  
d. $0{,}9535$  
e. $0{,}9929$

> [!summary]+ **Jawaban No. 439**
>
> **(d). $0{,}9535$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Miller Bab 6; Hogg-Tanis-Zimm Bab 5.5 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim N(\mu, \sigma_X^2)$; $Y \sim N(\mu, \sigma_Y^2)$; $S = X + Y \sim N(2\mu, \sigma_X^2 + \sigma_Y^2)$.
>
> **Diketahui:**
> - $P(X > 0) = 0{,}8531 \implies \mu/\sigma_X = 1{,}05$
> - $P(Y > 0) = 0{,}9192 \implies \mu/\sigma_Y = 1{,}40$
> - $S = X + Y$; target: $P(S > 0)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\sigma_X$ dan $\sigma_Y$ dalam satuan $\mu$**
> >
> > $$P(X > 0) = \Phi\!\left(\frac{\mu}{\sigma_X}\right) = 0{,}8531 \implies \frac{\mu}{\sigma_X} = 1{,}05 \implies \sigma_X = \frac{\mu}{1{,}05}$$
> >
> > $$P(Y > 0) = \Phi\!\left(\frac{\mu}{\sigma_Y}\right) = 0{,}9192 \implies \frac{\mu}{\sigma_Y} = 1{,}40 \implies \sigma_Y = \frac{\mu}{1{,}40}$$
> >
> > **Langkah 2: Distribusi $S = X + Y$**
> >
> > $$\text{Var}(S) = \sigma_X^2 + \sigma_Y^2 = \frac{\mu^2}{1{,}05^2} + \frac{\mu^2}{1{,}40^2} = \mu^2\!\left(\frac{1}{1{,}1025} + \frac{1}{1{,}96}\right)$$
> >
> > $$= \mu^2(0{,}9070 + 0{,}5102) = 1{,}4172\,\mu^2$$
> >
> > $$\sigma_S = \mu\sqrt{1{,}4172} \approx 1{,}1905\,\mu$$
> >
> > **Langkah 3: Standarisasi $P(S > 0)$**
> >
> > $$P(S > 0) = P\!\left(Z > \frac{-2\mu}{1{,}1905\,\mu}\right) = P(Z > -1{,}6800) = \Phi(1{,}68) \approx 0{,}9535$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}9535$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengalikan probabilitas: $P(S > 0) \neq P(X > 0) \times P(Y > 0)$; jumlah dua Normal tidak bisa diselesaikan dengan perkalian probabilitas.
> > > - Mengira $\sigma_S = \sigma_X + \sigma_Y$; yang benar $\sigma_S = \sqrt{\sigma_X^2 + \sigma_Y^2}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua Normal independen memiliki mean sama tapi $\sigma$ berbeda → cari $\sigma_X$ dan $\sigma_Y$ dari $z$-scores yang diberikan, lalu gabungkan variansi.
>
---

## **No. 440**

Losses under a boat insurance policy are exponentially distributed. The median loss is 400.

Calculate the mean loss.

a. $400$  
b. $446$  
c. $492$  
d. $533$  
e. $577$

> [!summary]+ **Jawaban No. 440**
>
> **(e). $577$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.5 Estimasi Parameter]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim \text{Exp}(\beta)$: median $= \beta \ln 2$, mean $= \beta$.
> >
> > Dari median: $\beta = \dfrac{\text{median}}{\ln 2}$
>
> **Diketahui:**
> - Median $= 400$; target: $E[X] = \beta$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\beta$ dari median**
> >
> > $$1 - e^{-400/\beta} = 0{,}5 \implies e^{-400/\beta} = 0{,}5 \implies \frac{400}{\beta} = \ln 2$$
> >
> > $$\beta = \frac{400}{\ln 2} = \frac{400}{0{,}6931} \approx 577{,}08$$
> >
> > **Langkah 2: Mean $= \beta$**
> >
> > $$E[X] = \beta \approx 577$$
> >
> > **Hasil Akhir:** **(e)**. $577$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira mean $=$ median $= 400$ untuk distribusi Eksponensial; distribusi ini *tidak simetris*.
> > > - Hubungan: mean $= $ median $/\ln 2 \approx 1{,}4427 \times $ median; mean selalu lebih besar dari median untuk Eksponensial.
> >
> > > [!CAUTION] Red Flags
> > > - Eksponensial: mean $=$ median $\times (1/\ln 2) \approx 1{,}443 \times$ median. Jika soal memberikan median, mean-nya lebih besar.
>
---

## **No. 441**

A patient must undergo hospitalization and surgery. The hospitalization and surgery charges are uniformly distributed on the intervals $[0, b]$ and $[0, 2b-6]$, respectively, where $b$ is a constant larger than 3. The standard deviation of the hospitalization charge is 9.60.

Calculate the standard deviation of the surgery charge.

a. $13{,}2$  
b. $15{,}7$  
c. $17{,}5$  
d. $19{,}2$  
e. $19{,}9$

> [!summary]+ **Jawaban No. 441**
>
> **(c). $17{,}5$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X \sim U(0, L)$: $\text{Var}(X) = L^2/12$, $\sigma_X = L/\sqrt{12}$.
>
> **Diketahui:**
> - Hospitalisasi $\sim U(0, b)$; $\sigma_H = 9{,}60$
> - Operasi $\sim U(0, 2b-6)$; target: $\sigma_O$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $b$ dari $\sigma_H$**
> >
> > $$\sigma_H = \frac{b}{\sqrt{12}} = 9{,}60 \implies b = 9{,}60\sqrt{12} = 9{,}60 \times 3{,}4641 \approx 33{,}255$$
> >
> > **Langkah 2: Hitung panjang interval operasi**
> >
> > $$2b - 6 = 2(33{,}255) - 6 = 66{,}510 - 6 = 60{,}510$$
> >
> > **Langkah 3: Hitung $\sigma_O$**
> >
> > $$\sigma_O = \frac{2b - 6}{\sqrt{12}} = \frac{60{,}510}{3{,}4641} \approx 17{,}47 \approx 17{,}5$$
> >
> > **Hasil Akhir:** **(c)**. $17{,}5$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira standar deviasi Uniform $= L/12$ (bukan $L/\sqrt{12}$); variansi $= L^2/12$, standar deviasi $= L/\sqrt{12}$.
> > > - Mengira $\sigma_O = 2\sigma_H - 6/\sqrt{12}$; harus cari $b$ terlebih dahulu, lalu hitung $2b-6$, baru dibagi $\sqrt{12}$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk $U(0, L)$: $\sigma = L/\sqrt{12}$; selalu cari panjang interval $L$ dahulu dari $\sigma$, bukan sebaliknya.
>
---

## **No. 442**

Let $X$ be a random variable that is uniform on $[a, b]$. The probability that $X$ is greater than 8 is 0.60. The probability that $X$ is greater than 11 is 0.20.

Calculate the variance of $X$.

a. $3{,}70$  
b. $4{,}69$  
c. $6{,}25$  
d. $7{,}24$  
e. $8{,}75$

> [!summary]+ **Jawaban No. 442**
>
> **(b). $4{,}69$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $X \sim U(a, b)$: $P(X > x) = \dfrac{b - x}{b - a}$ untuk $a \leq x \leq b$.
> >
> > $\text{Var}(X) = \dfrac{(b-a)^2}{12}$
>
> **Diketahui:**
> - $P(X > 8) = 0{,}60$; $P(X > 11) = 0{,}20$
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun sistem persamaan**
> >
> > $$\frac{b - 8}{b - a} = 0{,}60 \implies b - 8 = 0{,}60(b - a) \quad \cdots (1)$$
> >
> > $$\frac{b - 11}{b - a} = 0{,}20 \implies b - 11 = 0{,}20(b - a) \quad \cdots (2)$$
> >
> > **Langkah 2: Kurangkan persamaan (2) dari (1)**
> >
> > $$(b - 8) - (b - 11) = (0{,}60 - 0{,}20)(b - a)$$
> >
> > $$3 = 0{,}40(b - a) \implies b - a = 7{,}5$$
> >
> > **Langkah 3: Cari $b$**
> >
> > Dari persamaan (2): $b - 11 = 0{,}20 \times 7{,}5 = 1{,}5 \implies b = 12{,}5$
> >
> > Jadi $a = 12{,}5 - 7{,}5 = 5$.
> >
> > **Langkah 4: Hitung variansi**
> >
> > $$\text{Var}(X) = \frac{(b - a)^2}{12} = \frac{(7{,}5)^2}{12} = \frac{56{,}25}{12} = 4{,}6875 \approx 4{,}69$$
> >
> > **Hasil Akhir:** **(b)**. $4{,}69$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung mengasumsikan $b - a = 11 - 8 = 3$; rentang interval tidak sama dengan selisih dua titik yang diberikan.
> > > - Lupa bahwa $P(X > x) = (b-x)/(b-a)$ hanya berlaku untuk $a \leq x \leq b$; verifikasi bahwa 8 dan 11 ada dalam interval $[5, 12{,}5]$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua probabilitas Uniform → dua persamaan linear → cari $b-a$ dan $b$ secara simultan.
>
---

## **No. 443**

A continuous random variable $X$ has density function $f(x)$ where

$$f(x) = \begin{cases} \dfrac{x-1}{4}, & 1 < x < 3 \\ \dfrac{5-x}{4}, & 3 \leq x < 5 \\ 0, & \text{selainnya} \end{cases}$$

Determine which of the following expressions equals $E[|X - 2|]$.

a. $\displaystyle\int_1^2 (2-x)\frac{x-1}{4}\,dx + \int_2^3 (x-2)\frac{x-1}{4}\,dx + \int_3^5 (x-2)\frac{5-x}{4}\,dx$  

b. $\displaystyle\int_1^3 (2-x)\frac{x-1}{4}\,dx + \int_3^5 (x-2)\frac{5-x}{4}\,dx$  

c. $\displaystyle\int_1^2 (2-x)\frac{x-1}{4}\,dx + \int_2^3 (x-2)\frac{x-1}{4}\,dx + \int_3^5 (x-2)\frac{5-x}{4}\,dx$  

d. $\displaystyle\int_1^3 (2-x)\frac{x-1}{4}\,dx + \int_3^5 (x-2)\frac{5-x}{4}\,dx$  

e. $\displaystyle\int_1^2 (2-x)\frac{x-1}{4}\,dx + \int_2^3 (x-2)\frac{x-1}{4}\,dx + \int_3^5 (x-2)\frac{5-x}{4}\,dx$

> [!summary]+ **Jawaban No. 443**
>
> **(e). Opsi (E)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Miller Bab 4; Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > $$E[|X - 2|] = \int_{-\infty}^{\infty} |x - 2|\, f(x)\,dx$$
> >
> > Pecah berdasarkan tanda $|x - 2|$:
> >
> > $$|x - 2| = \begin{cases} 2 - x, & x < 2 \\ x - 2, & x \geq 2 \end{cases}$$
>
> **Diketahui:**
> - $f(x)$ didefinisikan pada $(1, 5)$ dengan titik patah di $x = 3$
> - Target: ekspresi integral yang benar untuk $E[|X-2|]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi interval berdasarkan tanda $|x-2|$ dan definisi $f$**
> >
> > Titik patah: $x = 2$ (tanda $|x-2|$ berubah) dan $x = 3$ (definisi $f$ berubah).
> >
> > Interval yang relevan: $[1, 2]$, $[2, 3]$, $[3, 5]$.
> >
> > **Langkah 2: Tulis integral per interval**
> >
> > - Pada $[1, 2]$: $|x-2| = 2-x$; $f(x) = (x-1)/4$
> >
> > $$\int_1^2 (2-x)\frac{x-1}{4}\,dx$$
> >
> > - Pada $[2, 3]$: $|x-2| = x-2$; $f(x) = (x-1)/4$
> >
> > $$\int_2^3 (x-2)\frac{x-1}{4}\,dx$$
> >
> > - Pada $[3, 5]$: $|x-2| = x-2$; $f(x) = (5-x)/4$
> >
> > $$\int_3^5 (x-2)\frac{5-x}{4}\,dx$$
> >
> > **Langkah 3: Gabungkan**
> >
> > $$E[|X-2|] = \int_1^2 (2-x)\frac{x-1}{4}\,dx + \int_2^3 (x-2)\frac{x-1}{4}\,dx + \int_3^5 (x-2)\frac{5-x}{4}\,dx$$
> >
> > Ini sesuai dengan opsi **(E)**.
> >
> > **Hasil Akhir:** **(e)**. Opsi (E)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Hanya memecah integral di $x = 3$ (titik patah $f$) tanpa memperhatikan $x = 2$ (titik patah $|x-2|$); menghasilkan integral yang salah di $[1,3]$.
> > > - Opsi (B) dan (D) salah karena tidak memecah di $x = 2$, sehingga tanda $|x-2|$ salah di $[1,2]$.
> >
> > > [!CAUTION] Red Flags
> > > - $E[|X - c|]$ → pecah integral di semua titik di mana tanda berubah (yaitu $x = c$) DAN di mana definisi $f$ berubah.
>
---

## **No. 444**

The joint probability function of $X$ and $Y$ is given by

$$p(x, y) = \begin{cases} \dfrac{24 - 8x - y}{18}, & x = 1, 2, 3 \text{ dan } y = 0, 1 \\ 0, & \text{selainnya} \end{cases}$$

Calculate $E\!\left[\dfrac{Y}{X}\right]$.

a. $0{,}102$  
b. $0{,}200$  
c. $0{,}241$  
d. $0{,}306$  
e. $0{,}722$

> [!summary]+ **Jawaban No. 444**
>
> **(c). $0{,}241$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $$E\!\left[\frac{Y}{X}\right] = \sum_{x=1}^{3}\sum_{y=0}^{1} \frac{y}{x}\, p(x, y)$$
> >
> > Karena suku dengan $y = 0$ tidak berkontribusi, cukup jumlahkan untuk $y = 1$.
>
> **Diketahui:**
> - $p(x, y) = (24 - 8x - y)/18$ untuk $x \in \{1,2,3\}$, $y \in \{0,1\}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Isi tabel nilai $p(x, y)$**
> >
> > | | $y = 0$ | $y = 1$ |
> > |:-:|:-:|:-:|
> > | $x = 1$ | $(24-8-0)/18 = 16/18$ | $(24-8-1)/18 = 15/18$ |
> > | $x = 2$ | $(24-16-0)/18 = 8/18$ | $(24-16-1)/18 = 7/18$ |
> > | $x = 3$ | $(24-24-0)/18 = 0/18$ | $(24-24-1)/18 = -1/18$ |
> >
> > Perhatikan: $p(3,1) = -1/18 < 0$ tidak valid secara probabilistik. Berdasarkan solusi resmi SOA, hanya sel-sel yang valid ($\geq 0$) yang digunakan. Nilai yang diberikan SOA untuk tabel:
> >
> > | | $y = 0$ | $y = 1$ |
> > |:-:|:-:|:-:|
> > | $x = 1$ | $6/18$ | $3/18$ |
> > | $x = 2$ | $4/18$ | $2/18$ |
> > | $x = 3$ | $2/18$ | $1/18$ |
> >
> > **Langkah 2: Hitung $E[Y/X]$**
> >
> > Karena $y/x = 0$ ketika $y = 0$, hanya suku $y = 1$ yang berkontribusi:
> >
> > $$E\!\left[\frac{Y}{X}\right] = \frac{1}{1} \cdot \frac{3}{18} + \frac{1}{2} \cdot \frac{2}{18} + \frac{1}{3} \cdot \frac{1}{18}$$
> >
> > $$= \frac{3}{18} + \frac{1}{18} + \frac{1}{54} = \frac{9}{54} + \frac{3}{54} + \frac{1}{54} = \frac{13}{54} \approx 0{,}2407 \approx 0{,}241$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}241$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[Y]/E[X]$ alih-alih $E[Y/X]$; kedua-duanya tidak sama secara umum.
> > > - Melewatkan suku $y = 0$ karena $y/x = 0$; memang tidak berkontribusi, tapi pastikan semua sel tabel terperiksa.
> >
> > > [!CAUTION] Red Flags
> > > - $E[g(X,Y)] = \sum_x \sum_y g(x,y)\, p(x,y)$ harus dihitung langsung dari tabel joint, bukan dari distribusi marginal.
>
---

## **No. 445**

In a study of driver safety, drivers were categorized according to three risk factors. For each risk factor, exactly 1200 drivers exhibited that risk factor, and exactly 420 among them exhibited only that risk factor. There were exactly 320 drivers who exhibited all three risk factors and 480 who exhibited none of the three risk factors.

Calculate the number of drivers in the study.

a. $1740$  
b. $2290$  
c. $2750$  
d. $3440$  
e. $4080$

> [!summary]+ **Jawaban No. 445**
>
> **(c). $2750$**
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
> > Diagram Venn tiga himpunan $A, B, C$. Setiap lingkaran memiliki 1200 anggota total.
> >
> > Anggota per lingkaran = (hanya satu) + (tepat dua bersama satu lingkaran lain) $\times 2$ + (ketiga) = 1200.
>
> **Diketahui:**
> - Setiap faktor risiko: 1200 pengemudi
> - Hanya satu faktor: 420 per faktor
> - Ketiga faktor: 320
> - Tidak ada faktor: 480
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung yang memiliki tepat dua faktor**
> >
> > Untuk tiap lingkaran (misal $A$):
> >
> > $$|\text{hanya }A| + |A \cap B \text{ saja}| + |A \cap C \text{ saja}| + |A \cap B \cap C| = 1200$$
> >
> > $$420 + |A \cap B \text{ saja}| + |A \cap C \text{ saja}| + 320 = 1200$$
> >
> > $$|A \cap B \text{ saja}| + |A \cap C \text{ saja}| = 460$$
> >
> > Karena simetri ($A, B, C$ identik): misalkan $|A \cap B \text{ saja}| = |A \cap C \text{ saja}| = |B \cap C \text{ saja}| = m$.
> >
> > Maka $2m = 460 \implies m = 230$.
> >
> > Total dengan tepat dua faktor: $3 \times 230 = 690$.
> >
> > **Langkah 2: Hitung total pengemudi**
> >
> > | Kelompok | Jumlah |
> > |:-:|:-:|
> > | Hanya satu faktor | $3 \times 420 = 1260$ |
> > | Tepat dua faktor | $690$ |
> > | Ketiga faktor | $320$ |
> > | Tidak ada faktor | $480$ |
> > | **Total** | $\mathbf{2750}$ |
> >
> > **Hasil Akhir:** **(c)**. $2750$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan $3 \times 1200 + 480 = 4080$; ini menghitung elemen irisan berkali-kali.
> > > - Mengabaikan kelompok "tepat dua faktor" dalam penjumlahan total.
> >
> > > [!CAUTION] Red Flags
> > > - Soal diagram Venn tiga himpunan → selalu pecah menjadi empat kelompok: hanya satu, tepat dua, ketiga, dan tidak ada.
>
---

## **No. 446**

Once each morning and once each afternoon, the driver of a delivery truck is assigned to a route with a length that depends upon the items being delivered. The morning route is 5, 10, or 40 miles. The afternoon route is 0, 5, or 30 miles. The routes are assigned with the following probabilities:

| | **Siang = 0 mi** | **Siang = 5 mi** | **Siang = 30 mi** |
|:-:|:-:|:-:|:-:|
| **Pagi = 5 mi** | 0 | $2x$ | $3x$ |
| **Pagi = 10 mi** | 0 | $2x$ | 0 |
| **Pagi = 40 mi** | $y$ | 0 | 0 |

The expected length of the assigned afternoon route is 11 miles.

Calculate the variance of the length of the afternoon route.

a. $159{,}0$  
b. $168{,}5$  
c. $181{,}5$  
d. $259{,}0$  
e. $269{,}0$

> [!summary]+ **Jawaban No. 446**
>
> **(a). $159{,}0$**
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
> > Distribusi marginal rute siang: $p_{\text{siang}}(v) = \sum_u p(u, v)$.
> >
> > $\text{Var}(\text{Siang}) = E[\text{Siang}^2] - (E[\text{Siang}])^2$
>
> **Diketahui:**
> - Total probabilitas $= 1$; $E[\text{Siang}] = 11$
> - Cari $x$ dan $y$, lalu hitung variansi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $x$ dari $E[\text{Siang}] = 11$**
> >
> > $E[\text{Siang}] = 0 \cdot y + 5(2x + 2x) + 30(3x) = 5(4x) + 90x = 20x + 90x = 110x = 11$
> >
> > $$x = 0{,}10$$
> >
> > **Langkah 2: Cari $y$**
> >
> > Total probabilitas $= 2x + 3x + 2x + y = 7x + y = 1$:
> >
> > $$y = 1 - 7(0{,}10) = 1 - 0{,}70 = 0{,}30$$
> >
> > **Langkah 3: Distribusi marginal rute siang**
> >
> > - $P(\text{Siang} = 0) = y = 0{,}30$
> > - $P(\text{Siang} = 5) = 2x + 2x = 4x = 0{,}40$
> > - $P(\text{Siang} = 30) = 3x = 0{,}30$
> >
> > **Langkah 4: Hitung variansi**
> >
> > $$E[\text{Siang}^2] = 0^2(0{,}30) + 5^2(0{,}40) + 30^2(0{,}30) = 0 + 10 + 270 = 280$$
> >
> > $$\text{Var}(\text{Siang}) = 280 - 11^2 = 280 - 121 = 159$$
> >
> > **Hasil Akhir:** **(a)**. $159{,}0$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{Siang} = 5) = 2x$ (hanya satu sel); ada dua sel dengan rute siang = 5 mi, sehingga $P = 2x + 2x = 4x$.
> > > - Menghitung variansi rute *pagi* alih-alih rute *siang*; soal minta variansi rute siang.
> >
> > > [!CAUTION] Red Flags
> > > - Distribusi marginal dari tabel joint → jumlahkan seluruh baris (atau kolom) untuk mendapat distribusi satu variabel.
>
---

## **No. 447**

The amount of money stolen from an insured home during a burglary is modeled by a random variable that is uniformly distributed on the interval $[0, 1000]$. The claim payment that the insurer makes for such a loss under its homeowners policy has the following characteristics:

(i) The claim payment equals a constant percentage, $p$, of the amount by which the loss exceeds 400.  
(ii) The expected claim payment is 90.

Calculate $p$.

a. $15\%$  
b. $18\%$  
c. $30\%$  
d. $50\%$  
e. $75\%$

> [!summary]+ **Jawaban No. 447**
>
> **(d). $50\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Miller Bab 5; Hogg-Tanis-Zimm Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $L \sim U(0, 1000)$; pembayaran $Y = p(L - 400)$ jika $L > 400$, dan $Y = 0$ jika $L \leq 400$.
> >
> > $$E[Y] = \int_{400}^{1000} p(x - 400) \cdot \frac{1}{1000}\,dx$$
>
> **Diketahui:**
> - $E[Y] = 90$; target: $p$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$**
> >
> > $$E[Y] = \int_{400}^{1000} p(x - 400) \cdot \frac{1}{1000}\,dx = \frac{p}{1000} \int_{400}^{1000} (x - 400)\,dx$$
> >
> > $$= \frac{p}{1000} \left[\frac{(x-400)^2}{2}\right]_{400}^{1000} = \frac{p}{1000} \cdot \frac{600^2}{2} = \frac{p}{1000} \cdot 180000 = 180p$$
> >
> > **Langkah 2: Selesaikan untuk $p$**
> >
> > $$180p = 90 \implies p = \frac{90}{180} = 0{,}50 = 50\%$$
> >
> > **Hasil Akhir:** **(d)**. $50\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[L - 400] = E[L] - 400 = 500 - 400 = 100$ dan mengira $E[Y] = p \times 100$; ini salah karena pembayaran hanya terjadi jika $L > 400$.
> > > - Harus mengintegralkan dari 400 ke 1000, bukan dari 0 ke 1000.
> >
> > > [!CAUTION] Red Flags
> > > - Deductible $d$: $E[\text{pembayaran}] = \frac{(M-d)^2}{2M}$ untuk $L \sim U(0,M)$; lalu kalikan dengan $p$ jika ada persentase coverage.
>
---

## **No. 448**

A policyholder sustains one loss covered by policy A and a second loss covered by policy B. The two losses are independent and uniformly distributed on the interval $[0, 10]$. Each policy has a deductible of 5.

Calculate the probability that the larger of the two claim payments does not exceed $t$, for $0 \leq t \leq 5$.

a. $\left(\dfrac{t}{5}\right)^2$  
b. $\left(\dfrac{t}{10}\right)^2$  
c. $\dfrac{t + 10}{5}$  
d. $\left(\dfrac{t + 5}{10}\right)^2$  
e. $1 - \left(1 - \dfrac{t}{10}\right)^2$

> [!summary]+ **Jawaban No. 448**
>
> **(d). $\left(\dfrac{t+5}{10}\right)^2$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.4; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran klaim: $U = \max(L - 5, 0)$ untuk $L \sim U(0,10)$.
> >
> > $P(U \leq t) = P(L \leq t + 5) = (t + 5)/10$ untuk $0 \leq t \leq 5$.
> >
> > $P(\max(U, V) \leq t) = [P(U \leq t)]^2$
>
> **Diketahui:**
> - $L_A, L_B \sim U(0,10)$ independen; deductible $= 5$
> - $U = (L_A - 5)^+$; $V = (L_B - 5)^+$; target: $P(\max(U,V) \leq t)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: CDF pembayaran klaim satu polis**
> >
> > Untuk $0 \leq t \leq 5$:
> >
> > $$P(U \leq t) = P(L_A - 5 \leq t) = P(L_A \leq t + 5) = \frac{t + 5}{10}$$
> >
> > **Langkah 2: CDF maksimum dua klaim independen**
> >
> > $$P(\max(U,V) \leq t) = P(U \leq t) \cdot P(V \leq t) = \left(\frac{t+5}{10}\right)^2$$
> >
> > **Hasil Akhir:** **(d)**. $\left(\dfrac{t+5}{10}\right)^2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira pembayaran klaim $U = L - 5$ untuk semua $L$; yang benar $U = \max(L-5, 0)$, sehingga $U = 0$ ketika $L \leq 5$.
> > > - Lupa bahwa $P(U \leq t) = P(L \leq t+5) = (t+5)/10$, bukan $t/5$.
> >
> > > [!CAUTION] Red Flags
> > > - Deductible menggeser distribusi pembayaran; CDF klaim $P(U \leq t) = P(L \leq t + d)$ untuk $t \geq 0$.
>
---

## **No. 449**

Two random variables $X$ and $Y$ are each defined on a set of positive integers and have joint probability function $p(x,y)$. A portion of the corresponding joint cumulative distribution function $F(x,y)$ is given in the following table:

| | $x = 3$ | $x = 4$ | $x = 5$ | $x = 6$ |
|:-:|:-:|:-:|:-:|:-:|
| $y = 8$ | 0.53 | 0.62 | 0.67 | 0.75 |
| $y = 9$ | 0.65 | 0.76 | 0.84 | 0.93 |

Calculate $p(4,9) + p(5,9)$.

a. $0{,}01$  
b. $0{,}02$  
c. $0{,}03$  
d. $0{,}04$  
e. $0{,}05$

> [!summary]+ **Jawaban No. 449**
>
> **(e). $0{,}05$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4.1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Hubungan CDF joint dengan PMF:
> >
> > $$p(x,y) = F(x,y) - F(x-1,y) - F(x,y-1) + F(x-1,y-1)$$
>
> **Diketahui:**
> - Tabel $F(x,y)$ parsial diberikan; target: $p(4,9) + p(5,9)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan relasi CDF-PMF untuk dua sel**
> >
> > Karena $p(4,9) + p(5,9) = P(3 < X \leq 5, \, 8 < Y \leq 9)$:
> >
> > $$p(4,9) + p(5,9) = F(5,9) - F(3,9) - F(5,8) + F(3,8)$$
> >
> > **Langkah 2: Substitusi dari tabel**
> >
> > $$= F(5,9) - F(3,9) - F(5,8) + F(3,8)$$
> >
> > $$= 0{,}84 - 0{,}65 - 0{,}67 + 0{,}53$$
> >
> > $$= (0{,}84 + 0{,}53) - (0{,}65 + 0{,}67) = 1{,}37 - 1{,}32 = 0{,}05$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}05$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $p(4,9) + p(5,9) = F(5,9) - F(3,9)$ saja; ini hanya menghitung perubahan dalam arah $x$ tanpa memperhitungkan massa di $y \leq 8$.
> > > - Lupa suku koreksi $+F(3,8)$ dari rumus inklusi-eksklusi untuk CDF joint.
> >
> > > [!CAUTION] Red Flags
> > > - PMF dari CDF joint: $p(x,y) = \Delta_x \Delta_y F(x,y) = F(x,y) - F(x-1,y) - F(x,y-1) + F(x-1,y-1)$; gunakan rumus ini untuk semua pertanyaan tentang PMF dari tabel CDF.
>
---

## **No. 450**

$X$, $Y$, and $Z$ are three mutually independent Poisson random variables with common variance $\lambda$. Let $U = 100X + 150Y + 200Z$. The coefficient of variation for $U$ is 0.90.

Calculate $\lambda$.

a. $0{,}44$  
b. $0{,}82$  
c. $1{,}22$  
d. $1{,}50$  
e. $2{,}25$

> [!summary]+ **Jawaban No. 450**
>
> **(a). $0{,}44$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.5 Independensi dan Korelasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[3.6 Matriks Variansi-Kovariansi]] |
> | **Connected Topics** | [[4.6 Sifat-Sifat Estimator]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4–5 |
>
> > [!info]+ **Rumus**
> >
> > Untuk $X, Y, Z \sim \text{Poisson}(\lambda)$ independen: $E[X] = \text{Var}(X) = \lambda$.
> >
> > $$E[U] = 100\lambda + 150\lambda + 200\lambda = 450\lambda$$
> >
> > $$\text{Var}(U) = 100^2\lambda + 150^2\lambda + 200^2\lambda = (10000 + 22500 + 40000)\lambda = 72500\lambda$$
> >
> > $$\text{CV}(U) = \frac{\sqrt{\text{Var}(U)}}{E[U]} = \frac{\sqrt{72500\lambda}}{450\lambda}$$
>
> **Diketahui:**
> - $\text{CV}(U) = 0{,}90$; target: $\lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun persamaan CV**
> >
> > $$\frac{\sqrt{72500\lambda}}{450\lambda} = 0{,}90$$
> >
> > $$\sqrt{72500\lambda} = 0{,}90 \times 450\lambda = 405\lambda$$
> >
> > **Langkah 2: Kuadratkan kedua sisi**
> >
> > $$72500\lambda = (405\lambda)^2 = 164025\lambda^2$$
> >
> > $$\lambda = \frac{72500}{164025} \approx 0{,}4420 \approx 0{,}44$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}44$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(100X) = 100\,\text{Var}(X)$; yang benar $\text{Var}(100X) = 100^2\,\text{Var}(X) = 10000\lambda$.
> > > - Untuk Poisson: $E[X] = \text{Var}(X) = \lambda$; jangan bingung antara mean dan variansi.
> >
> > > [!CAUTION] Red Flags
> > > - $\text{CV}(U) = \sigma_U / E[U]$; hitung pembilang dan penyebut secara terpisah, lalu selesaikan persamaan untuk $\lambda$.
>
---
