# CF2 Periode November 2025
## **No. 1**

Variabel acak Y memiliki fungsi kepekatan peluang sebagai berikut:

$$f(y) = \begin{cases} \dfrac{y}{6} - \dfrac{y^2}{36}, & \text{untuk } 0 < y < 6 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah $P[1 < Y < 3 \mid 2 < Y < 4]$! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}111$  
b. $0{,}241$  
c. $0{,}481$  
d. $0{,}500$  
e. $0{,}885$

> [!summary]+ **Jawaban No. 1**
> 
> **(d). $0{,}500$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > 
> > Probabilitas bersyarat untuk variabel acak kontinu:  
> > 
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$  
> > 
> > Di sini $A = \{1 < Y < 3\}$, $B = \{2 < Y < 4\}$, sehingga $A \cap B = \{2 < Y < 3\}$.
>
> **Diketahui:**
> - $f(y) = \dfrac{y}{6} - \dfrac{y^2}{36}$ untuk $0 < y < 6$ (kontinu, support $(0,6)$)
> - Target: $P(1 < Y < 3 \mid 2 < Y < 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Irisan**
> >
> > $$\{1 < Y < 3\} \cap \{2 < Y < 4\} = \{2 < Y < 3\}$$
> >
> > **Langkah 2: Hitung $P(2 < Y < 3)$ — pembilang**  
> >
> > $$P(2 < Y < 3) = \int_2^3 \left(\frac{y}{6} - \frac{y^2}{36}\right) dy = \left[\frac{y^2}{12} - \frac{y^3}{108}\right]_2^3$$  
> > 
> > $$= \left(\frac{9}{12} - \frac{27}{108}\right) - \left(\frac{4}{12} - \frac{8}{108}\right) = \left(\frac{81}{108} - \frac{27}{108}\right) - \left(\frac{36}{108} - \frac{8}{108}\right)$$  
> > 
> > $$= \frac{54}{108} - \frac{28}{108} = \frac{26}{108}$$
> >
> > **Langkah 3: Hitung $P(2 < Y < 4)$ — penyebut**  
> >
> > $$P(2 < Y < 4) = \int_2^4 \left(\frac{y}{6} - \frac{y^2}{36}\right) dy = \left[\frac{y^2}{12} - \frac{y^3}{108}\right]_2^4$$  
> > 
> > $$= \left(\frac{16}{12} - \frac{64}{108}\right) - \left(\frac{4}{12} - \frac{8}{108}\right) = \left(\frac{144}{108} - \frac{64}{108}\right) - \left(\frac{36}{108} - \frac{8}{108}\right)$$  
> > 
> > $$= \frac{80}{108} - \frac{28}{108} = \frac{52}{108}$$
> >
> > **Langkah 4: Hitung Probabilitas Bersyarat**
> >
> > $$P(1 < Y < 3 \mid 2 < Y < 4) = \frac{P(2 < Y < 3)}{P(2 < Y < 4)} = \frac{26/108}{52/108} = \frac{26}{52} = 0{,}500$$  
> >
> > **Hasil Akhir:** **(d)**. $0{,}500$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(1 < Y < 3)$ sebagai pembilang langsung tanpa mengambil irisannya dengan $B$. Pembilang yang benar adalah $P(A \cap B) = P(2 < Y < 3)$.
> > > - Lupa bahwa $P(A \mid B) \neq P(A) / P(B)$ ketika $A$ dan $B$ tidak saling bebas dan memiliki irisan parsial.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Notasi $P[A \mid B]$ dengan kurung siku identik dengan $P(A \mid B)$ — bukan notasi interval.
> > > - "Paling mendekati" mengisyaratkan perlu menghitung numerik sampai presisi cukup.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "diketahui bahwa..." → ini selalu probabilitas bersyarat, hitung irisan dulu.
> > > - Jika event $A$ dan $B$ overlap sebagian → identifikasi $A \cap B$ sebelum menulis integral manapun.

---

## **No. 2**

Suatu polis asuransi memberikan perlindungan terhadap risiko hujan badai dan pencurian untuk sebuah bangunan selama 10 tahun. Perusahaan asuransi hanya akan menanggung satu kejadian kerugian untuk masing-masing hujan badai dan pencurian dalam suatu tahun kalender tertentu.

Untuk setiap tahun kalender ke-$k$, misal $H_k$ merupakan kejadian yang menyatakan terjadinya kerugian akibat hujan badai dan $T_k$ merupakan kejadian yang menyatakan terjadinya kerugian akibat pencurian. Setiap kejadian kerugian $H_1, \ldots, H_{10}, T_1, \ldots, T_{10}$ diasumsikan saling bebas dan diketahui $P(H_k) = 0{,}2$, $P(T_k) = 0{,}1$, untuk setiap $k$.

Hitunglah peluang bahwa banyaknya kejadian hujan badai dan pencurian yang ditanggung oleh polis asuransi dalam sepuluh tahun kalender kurang dari dua! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}17$  
b. $0{,}23$  
c. $0{,}77$  
d. $0{,}80$  
e. $0{,}83$

> [!summary]+ **Jawaban No. 2**
> 
> **(a). $0{,}17$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1–3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> > 
> > Distribusi Binomial: Jika $X \sim B(n, p)$ maka
> > 
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> > 
> > Total klaim $N = N_H + N_T$ di mana $N_H \sim B(10, 0{,}2)$ dan $N_T \sim B(10, 0{,}1)$ saling bebas.
>
> **Diketahui:**
> - $P(H_k) = 0{,}2$, $P(T_k) = 0{,}1$ untuk setiap $k = 1, \ldots, 10$
> - Semua kejadian saling bebas
> - Target: $P(N_H + N_T < 2) = P(N_H + N_T = 0) + P(N_H + N_T = 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Definisikan Variabel**
> >
> > Misal $N_H$ = total klaim hujan badai selama 10 tahun, $N_H \sim B(10, 0{,}2)$.
> > 
> > Misal $N_T$ = total klaim pencurian selama 10 tahun, $N_T \sim B(10, 0{,}1)$.
> > $N_H$ dan $N_T$ saling bebas. Total klaim: $N = N_H + N_T$.
> >
> > **Langkah 2: Hitung $P(N = 0) = P(N_H = 0) \cdot P(N_T = 0)$**
> >
> > $$P(N_H = 0) = (0{,}8)^{10} = 0{,}10737$$
> > 
> > $$P(N_T = 0) = (0{,}9)^{10} = 0{,}34868$$
> > 
> > $$P(N = 0) = 0{,}10737 \times 0{,}34868 = 0{,}03744$$
> >
> > **Langkah 3: Hitung $P(N = 1)$**
> >
> > $N = 1$ terjadi jika: ($N_H = 1, N_T = 0$) atau ($N_H = 0, N_T = 1$).
> >
> > $$P(N_H = 1) = \binom{10}{1}(0{,}2)^1(0{,}8)^9 = 10 \times 0{,}2 \times 0{,}13422 = 0{,}26844$$
> > 
> > $$P(N_T = 1) = \binom{10}{1}(0{,}1)^1(0{,}9)^9 = 10 \times 0{,}1 \times 0{,}38742 = 0{,}38742$$
> >
> > $$P(N = 1) = P(N_H=1) \cdot P(N_T=0) + P(N_H=0) \cdot P(N_T=1)$$
> > 
> > $$= 0{,}26844 \times 0{,}34868 + 0{,}10737 \times 0{,}38742$$
> > 
> > $$= 0{,}09361 + 0{,}04160 = 0{,}13521$$
> >
> > **Langkah 4: Hitung $P(N < 2)$**
> >
> > $$P(N < 2) = P(N=0) + P(N=1) = 0{,}03744 + 0{,}13521 = 0{,}17265 \approx 0{,}17$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menjumlahkan probabilitas per tahun tanpa mempertimbangkan distribusi binomial untuk 10 tahun.
> > > - Mengasumsikan $N = N_H + N_T$ berdistribusi Binomial tunggal — tidak tepat karena $p$ berbeda.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kurang dari dua" berarti $N = 0$ atau $N = 1$, bukan $N \leq 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada dua proses independen dengan $p$ berbeda → tidak bisa digabung langsung menjadi satu distribusi Binomial; hitung masing-masing lalu konvolusi.

---

## **No. 3**

Misal X merupakan variabel acak kontinu dengan fungsi kepadatan peluang:

$$f(x) = \begin{cases} \dfrac{|x|}{10}, & \text{untuk } -2 \leq x \leq 4 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah varians dari X! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}25$  
b. $2{,}52$  
c. $3{,}32$  
d. $4{,}13$  
e. $4{,}93$  

> [!summary]+ **Jawaban No. 3**
> 
> **(c). $3{,}32$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1–2.2; Miller Bab 4.1–4.3 |
>
> > [!info]+ **Rumus**  
> > 
> > $$\text{Var}(X) = E[X^2] - (E[X])^2$$
> > 
> > Dengan $|x|$ yang terbagi: $|x| = -x$ untuk $x < 0$ dan $|x| = x$ untuk $x \geq 0$.
>
> **Diketahui:**
> - $f(x) = \dfrac{|x|}{10}$ untuk $-2 \leq x \leq 4$ (kontinu, support $[-2, 4]$)
> - Target: $\text{Var}(X)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi PDF valid**
> >
> > $$\int_{-2}^{0} \frac{-x}{10} dx + \int_{0}^{4} \frac{x}{10} dx = \frac{1}{10}\left[\frac{-x^2}{2}\right]_{-2}^{0} + \frac{1}{10}\left[\frac{x^2}{2}\right]_{0}^{4} = \frac{4}{20} + \frac{16}{20} = \frac{20}{20} = 1 \checkmark$$
> >
> > **Langkah 2: Hitung $E[X]$**
> >
> > $$E[X] = \int_{-2}^{0} x \cdot \frac{-x}{10} dx + \int_{0}^{4} x \cdot \frac{x}{10} dx$$
> > 
> > $$= \frac{-1}{10}\int_{-2}^{0} x^2 dx + \frac{1}{10}\int_{0}^{4} x^2 dx$$
> > 
> > $$= \frac{-1}{10} \cdot \frac{8}{3} + \frac{1}{10} \cdot \frac{64}{3} = \frac{-8}{30} + \frac{64}{30} = \frac{56}{30} = \frac{28}{15} \approx 1{,}8\overline{6}$$
> >
> > **Langkah 3: Hitung $E[X^2]$**
> >
> > $$E[X^2] = \int_{-2}^{0} x^2 \cdot \frac{-x}{10} dx + \int_{0}^{4} x^2 \cdot \frac{x}{10} dx$$
> > 
> > $$= \frac{-1}{10}\int_{-2}^{0} x^3 dx + \frac{1}{10}\int_{0}^{4} x^3 dx$$
> > 
> > $$= \frac{-1}{10}\left[\frac{x^4}{4}\right]_{-2}^{0} + \frac{1}{10}\left[\frac{x^4}{4}\right]_{0}^{4}$$
> > 
> > $$= \frac{-1}{10}\left(0 - \frac{16}{4}\right) + \frac{1}{10}\cdot\frac{256}{4}$$
> > 
> > $$= \frac{-1}{10}(-4) + \frac{1}{10}(64) = \frac{4}{10} + \frac{64}{10} = \frac{68}{10} = 6{,}8$$
> >
> > **Langkah 4: Hitung Varians**
> >
> > $$\text{Var}(X) = E[X^2] - (E[X])^2 = 6{,}8 - \left(\frac{28}{15}\right)^2 = 6{,}8 - \frac{784}{225}$$
> > 
> > $$= 6{,}8 - 3{,}4\overline{8} = 3{,}3\overline{1} \approx 3{,}32$$
> >
> > **Hasil Akhir:** **(c)**. $3{,}32$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa memisahkan integral di $x = 0$ untuk menangani nilai absolut $|x|$ — mengintegral $\dfrac{|x|}{10}$ langsung dari $-2$ hingga $4$ memberikan hasil salah.
> > > - Menghitung $E[|X|]$ alih-alih $E[X]$ — keduanya berbeda karena support mencakup nilai negatif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira support simetris hanya karena ada $|x|$ — support $[-2, 4]$ tidak simetris di sekitar 0.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PDF mengandung $|x|$ → selalu pecah integral di titik $x = 0$.
> > > - Jika support tidak simetris → $E[X] \neq 0$ meskipun ada nilai negatif.

---

## **No. 4**

Masa hidup suatu bohlam lampu dalam bulan diketahui mengikuti distribusi seragam $[0, 40]$. Misal $a$ merupakan angka ril positif dengan nilai kurang dari 30. Peluang bahwa bohlam lampu rusak dalam 30 bulan, jika diketahui bahwa bohlam lampu berfungsi dengan baik setelah $a$ bulan sebesar $0{,}6$. Tentukan nilai $a$!

a. $6$  
b. $12$  
c. $15$  
d. $16$  
e. $18$

> [!summary]+ **Jawaban No. 4**
> 
> **(c). $15$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > 
> > Untuk $X \sim U(0, 40)$:
> > 
> > $$P(X \leq x) = \frac{x}{40}, \quad 0 \leq x \leq 40$$
> > 
> > Probabilitas bersyarat:
> > 
> > $$P(X \leq 30 \mid X > a) = \frac{P(a < X \leq 30)}{P(X > a)}$$
>
> **Diketahui:**
> - $X \sim U(0, 40)$ (kontinu, support $[0, 40]$)
> - $P(\text{rusak dalam 30 bulan} \mid \text{masih hidup setelah } a) = 0{,}6$
> - Ini setara dengan $P(X \leq 30 \mid X > a) = 0{,}6$, dengan $0 < a < 30$
> - Target: nilai $a$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan persamaan probabilitas bersyarat**
> >
> > $$P(X \leq 30 \mid X > a) = \frac{P(a < X \leq 30)}{P(X > a)} = 0{,}6$$
> >
> > **Langkah 2: Hitung masing-masing probabilitas untuk $U(0,40)$**
> >
> > $$P(a < X \leq 30) = \frac{30 - a}{40}$$
> > 
> > $$P(X > a) = \frac{40 - a}{40}$$
> >
> > **Langkah 3: Bentuk persamaan dan selesaikan**
> >
> > $$\frac{(30-a)/40}{(40-a)/40} = 0{,}6$$
> > 
> > $$\frac{30 - a}{40 - a} = 0{,}6$$
> > 
> > $$30 - a = 0{,}6(40 - a)$$
> > 
> > $$30 - a = 24 - 0{,}6a$$
> > 
> > $$6 = 0{,}4a$$
> > 
> > $$a = 15$$
> >
> > **Hasil Akhir:** **(c)**. $a = 15$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X \leq 30 \mid X > a) = P(X \leq 30) / P(X > a)$ tanpa mengambil irisan — pembilang yang benar adalah $P(a < X \leq 30)$, bukan $P(X \leq 30)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Rusak dalam 30 bulan, diketahui masih hidup setelah $a$ bulan" → ini probabilitas bersyarat $P(X \leq 30 \mid X > a)$, bukan $P(X \leq 30 - a)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebutkan "diketahui masih hidup/berfungsi setelah $t$" → gunakan probabilitas bersyarat, bukan survival langsung.

---

## **No. 5**

Suatu perusahaan asuransi umum menjual produk asuransi kendaraan dan asuransi kebakaran. Banyaknya klaim tahunan atas asuransi kendaraan dan asuransi kebakaran mengikuti distribusi Poisson dengan rataan $\lambda_1$ dan $\lambda_2$, secara berurutan. Peluang tidak terdapatnya klaim pada asuransi kendaraan dalam satu tahun diketahui sebesar satu setengah kali peluang tidak terdapatnya klaim pada asuransi kebakaran dalam satu tahun. Misal $V_1$ dan $V_2$ merupakan varians dari banyaknya klaim tahunan untuk asuransi kendaraan dan asuransi kebakaran, secara berurutan. Hitunglah $V_1 - V_2$!

a. $0{,}693$  
b. $0{,}724$  
c. $0{,}766$  
d. $0{,}813$  
e. $0{,}832$

> [!summary]+ **Jawaban No. 5**
> 
> **⚠️ DIANULIR oleh PAI**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | — |
> | **Prerequisite** | — |
> | **Connected Topics** | — |
> | **Referensi** | — |
>
> > [!warning]+ **Keterangan Soal Dianulir**
> > 
> > Soal No. 5 **dianulir oleh PAI** dalam kunci jawaban resmi. Analisis: Dari kondisi soal, $P(N_1 = 0) = \tfrac{3}{2} P(N_2 = 0)$ memberikan $e^{-\lambda_1} = \tfrac{3}{2} e^{-\lambda_2}$, sehingga $\lambda_1 - \lambda_2 = \ln(2/3) \approx -0{,}405$. Karena $V_i = \lambda_i$ untuk distribusi Poisson, maka $V_1 - V_2 = \lambda_1 - \lambda_2 \approx -0{,}405$. Nilai ini **negatif** dan tidak ada pada pilihan jawaban yang semuanya positif. Ketidakkonsistenan antara kondisi soal ("satu setengah kali") dan pilihan jawaban yang tersedia menjadi dasar pembatalan.
>
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk distribusi Poisson, $E[N] = \text{Var}(N) = \lambda$, sehingga $V_1 - V_2 = \lambda_1 - \lambda_2$.
> > > - Salah membaca "satu setengah kali" sebagai $P(N_1=0) = \tfrac{1}{2}P(N_2=0)$ alih-alih $\tfrac{3}{2}P(N_2=0)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika hasil perhitungan tidak ada pada pilihan jawaban → periksa kembali interpretasi frasa soal.
> > > - "Satu setengah kali" = $1{,}5$ kali, bukan $0{,}5$ kali.

---

## **No. 6**

Nilai akhir dari mata kuliah aljabar linear dimodelkan menggunakan distribusi normal. Modus dari nilai ujian sebesar $56{,}00$ dan persentil ke-40 dari nilai ujian sebesar $52{,}20$. Hitunglah persentil dari nilai akhir dari mata kuliah aljabar linear sebesar $65{,}50$! (Pilihlah jawaban yang paling mendekati!)

a. Persentil ke-71  
b. Persentil ke-74  
c. Persentil ke-78  
d. Persentil ke-81  
e. Persentil ke-85

> [!summary]+ **Jawaban No. 6**
> 
> **(b). Persentil ke-74**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat (CLT)]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> > 
> > Untuk $X \sim N(\mu, \sigma^2)$:
> > 
> > - Modus = Mean = $\mu$ (distribusi normal simetris)
> > - Standardisasi: $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$
> > - Jika $X_p$ adalah persentil ke-$p$, maka $P(X \leq X_p) = p/100$
>
> **Diketahui:**
> - $X \sim N(\mu, \sigma^2)$ (kontinu)
> - Modus $= \mu = 56{,}00$
> - Persentil ke-40: $P(X \leq 52{,}20) = 0{,}40$
> - Target: persentil dari nilai $65{,}50$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $\mu$**
> >
> > Untuk distribusi normal, modus = mean, sehingga $\mu = 56{,}00$.
> >
> > **Langkah 2: Cari $\sigma$ menggunakan persentil ke-40**
> >
> > $$P(X \leq 52{,}20) = 0{,}40 \implies P\left(Z \leq \frac{52{,}20 - 56}{\sigma}\right) = 0{,}40$$
> > 
> > Dari tabel normal: $\Phi^{-1}(0{,}40) = -0{,}2533$
> >
> > $$\frac{52{,}20 - 56}{\sigma} = -0{,}2533 \implies \frac{-3{,}80}{\sigma} = -0{,}2533$$
> > 
> > $$\sigma = \frac{3{,}80}{0{,}2533} = 15{,}00$$
> >
> > **Langkah 3: Cari persentil dari nilai $65{,}50$**
> >
> > $$z = \frac{65{,}50 - 56}{15} = \frac{9{,}50}{15} = 0{,}6333$$
> > 
> > $$P(X \leq 65{,}50) = \Phi(0{,}6333) \approx 0{,}7367 \approx 0{,}74$$
> >
> > Jadi nilai $65{,}50$ berada pada **persentil ke-74**.
> >
> > **Hasil Akhir:** **(b)**. Persentil ke-74
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modus distribusi normal berbeda dari mean — untuk distribusi normal, modus = median = mean = $\mu$.
> > > - Salah arah standardisasi: $z = (x - \mu)/\sigma$, bukan $(\mu - x)/\sigma$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Persentil ke-40 berarti $P(X \leq 52{,}20) = 0{,}40$ — ini memberikan $z < 0$ karena nilai di bawah mean.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $z^*$ dari tabel Φ bernilai positif tapi nilai yang diberikan di bawah mean → ada kesalahan tanda.

---

## **No. 7**

Misal $X$ merupakan variabel acak yang merepresentasikan waktu yang diperlukan untuk memperbaiki ban mobil yang kempes total. Anda diberikan informasi berikut:

i. $X$ mengikuti distribusi seragam pada selang $[a, b]$
ii. Persentil ke-50 dari $X$ yaitu $16{,}36$
iii. Deviasi standar dari $X$ yaitu $7{,}63$

Hitunglah $\dfrac{b}{a}$! (Pilihlah jawaban yang paling mendekati!)

a. $1{,}83$  
b. $2{,}12$  
c. $4{,}58$  
d. $6{,}62$  
e. $9{,}41$

> [!summary]+ **Jawaban No. 7**
> 
> **(e). $9{,}41$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > 
> > Untuk $X \sim U(a, b)$: 
> > 
> > $$\text{Median} = \frac{a+b}{2}, \qquad \text{SD}(X) = \frac{b-a}{\sqrt{12}}$$
>
> **Diketahui:**
> - $X \sim U(a, b)$ (kontinu, support $[a, b]$)
> - Persentil ke-50 (median) $= 16{,}36$
> - Deviasi standar $= 7{,}63$
> - Target: $b/a$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan kondisi median**
> >
> > $$\frac{a+b}{2} = 16{,}36 \implies a + b = 32{,}72 \quad \cdots (1)$$
> >
> > **Langkah 2: Gunakan kondisi deviasi standar**
> >
> > $$\frac{b-a}{\sqrt{12}} = 7{,}63 \implies b - a = 7{,}63\sqrt{12} = 7{,}63 \times 3{,}4641 = 26{,}43 \quad \cdots (2)$$
> >
> > **Langkah 3: Selesaikan sistem persamaan**
> >
> > Dari (1) + (2): $2b = 59{,}15 \implies b = 29{,}575$
> > 
> > Dari (1) − (2): $2a = 6{,}29 \implies a = 3{,}145$
> >
> > **Langkah 4: Hitung $b/a$**
> >
> > $$\frac{b}{a} = \frac{29{,}575}{3{,}145} = 9{,}403 \approx 9{,}41$$
> >
> > **Hasil Akhir:** **(e)**. $9{,}41$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rumus variansi $\sigma^2 = (b-a)^2/12$ lupa mengakarkan — soal memberikan SD bukan variansi.
> > > - Mengira persentil ke-50 = $a + 0{,}5(b-a)$ (benar) tapi lupa bahwa ini sama dengan $(a+b)/2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan SD dan median → langsung bentuk dua persamaan linear dan selesaikan.

---

## **No. 8**

Suatu pialang asuransi memasarkan 4 produk asuransi yang berbeda. Peluang produk-produk tersebut terjual sebagai berikut:

| Produk | Peluang |
|--------|---------|
| Asuransi kendaraan | 0,55 |
| Asuransi properti | 0,45 |
| Asuransi kesehatan | 0,50 |
| Asuransi jiwa | 0,60 |

Penjualan dari produk-produk asuransi di atas diketahui saling bebas. Hitunglah peluang pialang menjual lebih dari dua produk ke seorang klien! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}27$  
b. $0{,}35$  
c. $0{,}39$  
d. $0{,}57$  
e. $0{,}73$

> [!summary]+ **Jawaban No. 8**
> 
> **(b). $0{,}35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.5 Kejadian Independen]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 2–3; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> > 
> > Untuk kejadian independen, gunakan perkalian probabilitas. "Lebih dari dua produk" = tepat 3 atau tepat 4 produk terjual.
> > 
> > Misal $p_1=0{,}55$, $p_2=0{,}45$, $p_3=0{,}50$, $p_4=0{,}60$, $q_i = 1-p_i$.
> > 
> > $$P(\text{lebih dari 2}) = P(\text{tepat 3}) + P(\text{tepat 4})$$
>
> **Diketahui:**
> - $p_1 = 0{,}55$, $q_1 = 0{,}45$
> - $p_2 = 0{,}45$, $q_2 = 0{,}55$
> - $p_3 = 0{,}50$, $q_3 = 0{,}50$
> - $p_4 = 0{,}60$, $q_4 = 0{,}40$
> - Target: $P(N > 2)$ di mana $N$ = banyaknya produk terjual
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{tepat 4 terjual})$**
> >
> > $$P(\text{4}) = 0{,}55 \times 0{,}45 \times 0{,}50 \times 0{,}60 = 0{,}07425$$
> >
> > **Langkah 2: Hitung $P(\text{tepat 3 terjual})$**
> >
> > Ada $\binom{4}{1} = 4$ cara memilih produk yang **tidak** terjual:
> >
> > - Produk 1 tidak terjual: $0{,}45 \times 0{,}45 \times 0{,}50 \times 0{,}60 = 0{,}06075$
> > - Produk 2 tidak terjual: $0{,}55 \times 0{,}55 \times 0{,}50 \times 0{,}60 = 0{,}09075$
> > - Produk 3 tidak terjual: $0{,}55 \times 0{,}45 \times 0{,}50 \times 0{,}60 = 0{,}07425$
> > - Produk 4 tidak terjual: $0{,}55 \times 0{,}45 \times 0{,}50 \times 0{,}40 = 0{,}04950$
> >
> > $$P(\text{tepat 3}) = 0{,}06075 + 0{,}09075 + 0{,}07425 + 0{,}04950 = 0{,}27525$$
> >
> > **Langkah 3: Hitung $P(N > 2)$**
> >
> > $$P(N > 2) = P(\text{tepat 3}) + P(\text{tepat 4}) = 0{,}27525 + 0{,}07425 = 0{,}34950 \approx 0{,}35$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan distribusi Binomial dengan $p$ rata-rata — tidak valid karena masing-masing $p_i$ berbeda.
> > > - Menghitung komplemen sebagai $1 - P(N \leq 2)$ lalu melakukan kesalahan di $P(N=2)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Lebih dari dua" = 3 atau 4, **bukan** 2, 3, atau 4.
> >
> > > [!CAUTION] Red Flags
> > > - Jika setiap item memiliki $p$ berbeda → enumerasi semua kombinasi, jangan pakai Binomial biasa.

---

## **No. 9**

Variabel acak besaran kerugian yang dialami oleh perusahaan asuransi, X, memiliki fungsi densitas sebagai berikut:

$$f(y) = \begin{cases} c(x-5), & \text{untuk } 5 \leq y \leq 8 \\ c(11-x), & \text{untuk } 8 \leq y \leq 11 \\ 0, & \text{selainnya} \end{cases}$$

Dimana $c$ merupakan suatu konstanta. Tentukan persentil ke-30 dari besaran kerugian yang dialami oleh perusahaan tersebut! (Pilihlah jawaban yang paling mendekati!)

a. $5{,}47$  
b. $6{,}14$  
c. $6{,}80$  
d. $7{,}06$  
e. $7{,}32$

> [!summary]+ **Jawaban No. 9**
> 
> **(e). $7{,}32$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4.1 |
>
> > [!info]+ **Rumus**  
> > 
> > - Syarat normalisasi: $\int_{-\infty}^{\infty} f(x)\,dx = 1$
> > - Persentil ke-$p$: nilai $x_p$ sedemikian sehingga $F(x_p) = p/100$
>
> **Diketahui:**
> - Distribusi segitiga dengan puncak di $x = 8$, support $[5, 11]$
> - Target: persentil ke-30, yaitu $x_{0.30}$ sedemikian $F(x_{0.30}) = 0{,}30$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari konstanta $c$**
> >
> > $$\int_5^8 c(x-5)\,dx + \int_8^{11} c(11-x)\,dx = 1$$
> > 
> > $$c\left[\frac{(x-5)^2}{2}\right]_5^8 + c\left[-\frac{(11-x)^2}{2}\right]_8^{11} = 1$$
> > 
> > $$c \cdot \frac{9}{2} + c \cdot \frac{9}{2} = 1 \implies 9c = 1 \implies c = \frac{1}{9}$$
> >
> > **Langkah 2: Tentukan apakah persentil ke-30 berada di $[5,8]$ atau $[8,11]$**
> >
> > Luas total bagian kiri ($[5,8]$): $\frac{1}{9} \cdot \frac{9}{2} = \frac{1}{2} = 0{,}50$
> >
> > Karena $0{,}30 < 0{,}50$, persentil ke-30 berada di interval $[5, 8]$.
> >
> > **Langkah 3: Selesaikan $F(x_{0.30}) = 0{,}30$ pada $[5, 8]$**
> >
> > $$F(x) = \int_5^x \frac{1}{9}(t-5)\,dt = \frac{1}{9} \cdot \frac{(x-5)^2}{2} = \frac{(x-5)^2}{18}$$
> >
> > $$\frac{(x-5)^2}{18} = 0{,}30 \implies (x-5)^2 = 5{,}4$$
> > 
> > $$(x-5) = \sqrt{5{,}4} = 2{,}3238$$
> > 
> > $$x = 5 + 2{,}3238 = 7{,}3238 \approx 7{,}32$$
> >
> > **Hasil Akhir:** **(e)**. $7{,}32$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa memeriksa apakah persentil yang dicari berada di bagian kiri atau kanan distribusi sebelum mengintegral — jika langsung integral dari 5 hingga 11, akan keliru.
> > > - Salah menghitung $c$: luas segitiga = $\frac{1}{2} \times \text{alas} \times \text{tinggi} = \frac{1}{2} \times 6 \times c \times 3 = 9c$ (perlu verifikasi dengan integral).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Perhatikan bahwa soal mendefinisikan $f(y)$ tetapi menggunakan $x$ di dalam ekspresi — variabel integrasi adalah nilai domain (yang pada dasarnya sama).
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi berbentuk segitiga → selalu cek luas masing-masing bagian sebelum menentukan di mana persentil berada.

---

## **No. 10**

Enam pasien secara saling bebas memiliki peluang yang sama untuk mengidap penyakit tertentu. Peluang bahwa tidak ada pasien yang mengidap penyakit sebesar 10 kali peluang tepat satu orang mengidap penyakit. Peluang bahwa tidak ada pasien yang mengidap penyakit sebesar $x$ kali peluang tepat tiga pasien mengidap penyakit. Tentukan nilai $x$!

a. $300$  
b. $1{.}000$  
c. $1{.}800$  
d. $6{.}000$  
e. $10{.}800$

> [!summary]+ **Jawaban No. 10**
> 
> **(e). $10{.}800$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5.2 |
>
> > [!info]+ **Rumus**  
> > 
> > Distribusi Binomial $X \sim B(n, p)$:
> > 
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> > 
> > Dengan $n = 6$ dan $p$ = peluang seorang pasien mengidap penyakit.
>
> **Diketahui:**
> - $n = 6$ pasien, $p$ sama untuk semua (saling bebas)
> - $P(X=0) = 10 \cdot P(X=1)$
> - Target: $x$ sedemikian $P(X=0) = x \cdot P(X=3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung masing-masing probabilitas**
> >
> > Misal $q = 1-p$.
> > 
> > $$P(X=0) = q^6$$
> > 
> > $$P(X=1) = 6pq^5$$
> > 
> > $$P(X=3) = \binom{6}{3}p^3q^3 = 20p^3q^3$$
> >
> > **Langkah 2: Gunakan kondisi $P(X=0) = 10 \cdot P(X=1)$ untuk cari $p$**
> >
> > $$q^6 = 10 \cdot 6pq^5 = 60pq^5$$
> > 
> > $$q = 60p \implies 1-p = 60p \implies 1 = 61p \implies p = \frac{1}{61}$$
> > 
> > $$q = \frac{60}{61}$$
> >
> > **Langkah 3: Hitung rasio $x = P(X=0)/P(X=3)$**
> >
> > $$x = \frac{P(X=0)}{P(X=3)} = \frac{q^6}{20p^3q^3} = \frac{q^3}{20p^3}$$
> > 
> > $$= \frac{1}{20} \left(\frac{q}{p}\right)^3 = \frac{1}{20} \times 60^3 = \frac{216{,}000}{20} = 10{,}800$$
> >
> > **Hasil Akhir:** **(e)**. $10{.}800$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $\binom{6}{3} = 20$ ada dalam $P(X=3)$ — jika tidak disertakan, rasio akan salah.
> > > - Mencari nilai $p$ numerik dan memasukkannya kembali — lebih efisien menggunakan rasio $q/p = 60$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal meminta rasio probabilitas Binomial → cari dulu $q/p$ dari kondisi pertama, lalu gunakan langsung di kondisi kedua.

---


## **No. 11**

Di sepanjang jalan tol, mobil-mobil dipilih secara acak untuk pemeriksaan ban. Misal X merepresentasikan banyaknya ban depan yang sudah tidak layak pakai dan Y merepresentasikan banyaknya ban belakang yang sudah tidak layak pakai pada mobil-mobil yang dipilih secara acak. Fungsi peluang bersama dari X dan Y diberikan sebagai berikut:

$$p(x, y) = \begin{cases} \dfrac{(6-x)(3-y)}{58(1+|x+y|)}, & \text{untuk } x = 0,1,2 \text{ dan } y = 0,1,2 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah varians dari banyaknya ban mobil yang sudah tidak layak pakai dari mobil-mobil yang terpilih dengan satu ban belakang tidak layak pakai!

a. $7/16$  
b. $49/100$  
c. $2/3$  
d. $7/10$  
e. $1$

> [!summary]+ **Jawaban No. 11**
> 
> **⚠️ DIANULIR oleh PAI**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]] |
> | **Difficulty** | — |
> | **Prerequisite** | — |
> | **Connected Topics** | — |
> | **Referensi** | — |
>
> > [!warning]+ **Keterangan Soal Dianulir**
> > Soal No. 11 **dianulir oleh PAI** dalam kunci jawaban resmi.   
> > Analisis masalah: Pertanyaan meminta varians dari "banyaknya ban yang tidak layak pakai" dengan kondisi $Y=1$ (satu ban belakang tidak layak). Namun soal tidak mendefinisikan secara jelas apakah yang dimaksud adalah varians dari $X \mid Y=1$ atau varians dari total $(X+Y) \mid Y=1$. Ketidakjelasan frasa "banyaknya ban mobil yang sudah tidak layak pakai dari mobil-mobil yang terpilih dengan satu ban belakang tidak layak pakai" menghasilkan interpretasi ganda yang tidak menghasilkan jawaban tunggal konsisten dengan pilihan yang tersedia.
>
> 
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk distribusi bersyarat diskrit: $p_{X|Y}(x|y) = p(x,y) / p_Y(y)$ — marginal $p_Y(y)$ harus dihitung terlebih dahulu dengan menjumlahkan atas semua nilai $x$.
> > > - Varians bersyarat: $\text{Var}(X|Y=y) = E[X^2|Y=y] - (E[X|Y=y])^2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mengandung frasa ambigu tentang "variabel yang dimaksud" dalam konteks distribusi bersyarat → identifikasi variabel target secara eksplisit sebelum menghitung.

---

## **No. 12**

Dalam suatu tahun kalender, profit yang dihasilkan PT Cuan Terus dari penjualan waran diketahui mengikuti distribusi normal dengan rataan 20 dan varians 16. Hitunglah interval, terpusat pada rataannya, yang memuat 25% peluang atas satu tahun profit! (Pilihlah jawaban yang paling mendekati!)

a. $(12{,}2;\ 27{,}8)$  
b. $(14{,}9;\ 25{,}1)$  
c. $(16{,}0;\ 24{,}0)$  
d. $(17{,}3;\ 22{,}7)$  
e. $(18{,}7;\ 21{,}3)$  

> [!summary]+ **Jawaban No. 12**
> 
> **(e). $(18{,}7;\ 21{,}3)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 6 |
>
> > [!info]+ **Rumus**  
> > 
> > Untuk $X \sim N(\mu, \sigma^2)$, interval terpusat di $\mu$ dengan peluang $p$:
> > 
> > $$P(\mu - z^* \sigma \leq X \leq \mu + z^* \sigma) = p$$
> > 
> > di mana $z^* = \Phi^{-1}\!\left(\dfrac{1+p}{2}\right)$.
>
> **Diketahui:**
> - $X \sim N(20, 16)$, sehingga $\mu = 20$, $\sigma = 4$
> - Interval terpusat di $\mu$ dengan peluang $25\% = 0{,}25$
> - Target: batas bawah dan atas interval
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $z^*$ untuk peluang 25%**
> >
> > Masing-masing ekor: $(1-0{,}25)/2 = 0{,}375$.
> > 
> > $P(X \leq \mu + z^*\sigma) = 0{,}625$.
> > 
> > Dari tabel normal: $z^* = \Phi^{-1}(0{,}625) \approx 0{,}3186$.
> >
> > **Langkah 2: Hitung batas interval**
> >
> > $$\text{Batas bawah} = 20 - 0{,}3186 \times 4 = 18{,}73 \approx 18{,}7$$
> > 
> > $$\text{Batas atas} = 20 + 0{,}3186 \times 4 = 21{,}27 \approx 21{,}3$$
> >
> > **Hasil Akhir:** **(e)**. $(18{,}7;\ 21{,}3)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari $z^*$ dari $\Phi(z^*) = 0{,}25$ — yang benar adalah $\Phi(z^*) = 0{,}625$.
> > > - Menggunakan $\sigma^2 = 16$ sebagai $\sigma$ — ingat $\sigma = \sqrt{16} = 4$.
> >
> > > [!CAUTION] Red Flags
> > > - "Interval terpusat pada rataan" → $z^* = \Phi^{-1}((1+p)/2)$, bagi peluang secara simetris.

---

## **No. 13**

Proporsi tanaman kapas di suatu lahan pertanian yang terdampak hama kumbang kapas dimodelkan menggunakan variabel acak kontinu dengan fungsi kepadatan peluang:

$$f(x) = \begin{cases} 20x^3(1-x), & \text{untuk } 0 \leq x \leq 1 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah deviasi standar dari proporsi tanaman kapas di lahan tersebut yang terdampak hama kumbang kapas! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}032$  
b. $0{,}178$  
c. $0{,}476$  
d. $0{,}690$  
e. $0{,}959$

> [!summary]+ **Jawaban No. 13**
> 
> **(b). $0{,}178$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.6 Distribusi Kontinu Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> > 
> > Distribusi Beta dengan $\alpha=4$, $\beta=2$:
> > 
> > $$E[X] = \frac{\alpha}{\alpha+\beta} = \frac{4}{6}, \qquad \text{Var}(X) = \frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)} = \frac{8}{252} = \frac{2}{63}$$
>
> **Diketahui:**
> - $f(x) = 20x^3(1-x)$ pada $[0,1]$; ini distribusi Beta($4, 2$)
> - Target: $\text{SD}(X) = \sqrt{\text{Var}(X)}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi distribusi Beta**
> >
> > $f(x) = 20x^3(1-x)^1$ → $\alpha - 1 = 3$, $\beta-1=1$, sehingga $\alpha=4$, $\beta=2$.
> > 
> > Verifikasi: $\Gamma(6)/(\Gamma(4)\Gamma(2)) = 120/(6\times1) = 20$ ✓
> >
> > **Langkah 2: Hitung variansi**
> >
> > $$\text{Var}(X) = \frac{4 \times 2}{36 \times 7} = \frac{8}{252} = \frac{2}{63}$$
> >
> > **Langkah 3: Hitung deviasi standar**
> >
> > $$\text{SD}(X) = \sqrt{2/63} = 0{,}17819 \approx 0{,}178$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}178$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengakarkan variansi. Eksponen dalam PDF Beta adalah $\alpha-1$ dan $\beta-1$, bukan $\alpha$ dan $\beta$.
> >
> > > [!CAUTION] Red Flags
> > > - PDF berbentuk $cx^a(1-x)^b$ dengan support $[0,1]$ → distribusi Beta dengan $\alpha = a+1$, $\beta = b+1$.

---
## **No. 14**

Klaim dari produk asuransi perkapalan diketahui mengikuti distribusi eksponensial dengan rataan $\dfrac{400}{\ln 2}$ (dalam juta). Untuk setiap klaim, besaran yang dibayarkan sebesar besarnya kerugian, hingga maksimum 1000 (dalam juta). Hitunglah nilai ekspektasi dari pembayaran klaim! (Pilihlah jawaban yang paling mendekati!)

a. $298$  
b. $367$  
c. $400$  
d. $475$  
e. $577$

> [!summary]+ **Jawaban No. 14**
> 
> **(d). $475$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> > 
> > **Limited Expected Value (LEV)** untuk $X \sim \text{Exp}(\theta)$ dengan rataan $\theta = 1/\lambda$:
> > 
> > $$E[\min(X, u)] = \theta\left(1 - e^{-u/\theta}\right) = \frac{1}{\lambda}\left(1 - e^{-\lambda u}\right)$$
> > 
> > Turunan dari definisi langsung:
> > 
> > $$E[\min(X,u)] = \int_0^u x \cdot \lambda e^{-\lambda x}\,dx + u \cdot P(X > u)$$
> > 
> > dengan $P(X > u) = e^{-\lambda u}$ untuk distribusi eksponensial.
>
> **Diketahui:**
> - $X \sim \text{Exp}$ dengan rataan $\theta = \dfrac{400}{\ln 2}$, sehingga rate $\lambda = \dfrac{\ln 2}{400}$
> - Pembayaran per klaim: $Y = \min(X,\, 1000)$ (dibayar penuh hingga batas 1000)
> - Target: $E[Y] = E[\min(X, 1000)]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pahami Struktur Pembayaran**
> >
> > Karena ada batas maksimum pembayaran sebesar 1000, variabel pembayaran $Y$ bukan lagi $X$, melainkan:
> > 
> > $$Y = \min(X, 1000) = \begin{cases} X, & X \leq 1000 \\ 1000, & X > 1000 \end{cases}$$
> > 
> > Ini disebut **variabel terpotong dari atas** (*right-censored*). Nilai ekspektasinya — yang dikenal sebagai **Limited Expected Value** — harus dihitung dengan rumus khusus, bukan sekadar $E[X] = \theta$.
> >
> > **Langkah 2: Hitung Eksponen $\lambda u$**
> >
> > Substitusi $\lambda = \dfrac{\ln 2}{400}$ dan $u = 1000$:
> > 
> > $$\lambda u = \frac{\ln 2}{400} \times 1000 = \frac{1000 \ln 2}{400} = \frac{5\ln 2}{2} = 2{,}5\ln 2$$
> >
> > **Langkah 3: Sederhanakan $e^{-\lambda u}$ menggunakan sifat logaritma**
> >
> > $$e^{-\lambda u} = e^{-2{,}5 \ln 2}$$
> > 
> > Gunakan sifat $e^{a \ln b} = b^a$:
> > 
> > $$e^{-2{,}5 \ln 2} = 2^{-2{,}5} = \frac{1}{2^{2{,}5}} = \frac{1}{2^2 \cdot 2^{0{,}5}} = \frac{1}{4\sqrt{2}}$$
> > 
> > Secara numerik: $2^{2{,}5} = 4\sqrt{2} \approx 4 \times 1{,}41421 = 5{,}65685$, sehingga:
> > 
> > $$e^{-\lambda u} \approx \frac{1}{5{,}65685} \approx 0{,}17678$$
> >
> > **Langkah 4: Terapkan Rumus LEV**
> >
> > $$E[\min(X, 1000)] = \theta\left(1 - e^{-\lambda u}\right) = \frac{400}{\ln 2}\left(1 - 0{,}17678\right)$$
> > 
> > $$= \frac{400}{\ln 2} \times 0{,}82322$$
> > 
> > Gunakan $\ln 2 \approx 0{,}69315$:
> > 
> > $$= \frac{400 \times 0{,}82322}{0{,}69315} = \frac{329{,}288}{0{,}69315} \approx 475{,}0$$
> >
> > **Hasil Akhir:** **(d)**. $475$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $E[Y] = E[X] = \theta = \dfrac{400}{\ln 2} \approx 577$ tanpa mempertimbangkan batas pembayaran — ini mengabaikan efek *censoring* dan menghasilkan nilai yang **terlalu besar** (opsi e).
> > > - Salah menghitung $e^{-2{,}5\ln 2}$: sebagian siswa menghitung $e^{-2{,}5} \times \ln 2$ (urutan operasi keliru) alih-alih $e^{-2{,}5\ln 2} = 2^{-2{,}5}$.
> > > - Lupa bahwa rumus LEV untuk eksponensial sudah dalam bentuk tertutup — tidak perlu integrasi manual jika rumus diingat.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Dibayarkan sebesar besarnya kerugian, hingga maksimum 1000" berarti $Y = \min(X, 1000)$, **bukan** $Y = X - 1000$ atau $Y = \max(X - 1000, 0)$ (yang merupakan rumus *excess of deductible*).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **"hingga maksimum"** atau **"policy limit"** → gunakan $E[\min(X, u)]$, bukan $E[X]$.
> > > - Jika hasilnya $\approx \theta$ (rataan penuh) → curigai lupa menerapkan batas; nilai LEV selalu **lebih kecil** dari $E[X]$.
> > > - Jika muncul bentuk $e^{-a \ln b}$ → konversi ke $b^{-a}$ untuk menghindari galat numerik.
>
---

## **No. 15**

Setiap orang dalam suatu populasi besar yang saling bebas satu sama lain memiliki peluang sebesar $0{,}0625$ untuk mengidap suatu penyakit. Dilakukan pengujian klinis terhadap orang-orang di populasi ini, hingga seseorang teridentifikasi mengidap penyakit tersebut. Tentukan modus dari banyaknya orang yang terkena pengujian klinis!

a. $1$  
b. $6$  
c. $11$  
d. $15$  
e. $16$

> [!summary]+ **Jawaban No. 15**
> 
> **(a). $1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > **Distribusi Geometrik** $X \sim \text{Geom}(p)$: memodelkan banyaknya percobaan Bernoulli yang dibutuhkan hingga sukses pertama.
> > 
> > $$P(X = k) = (1-p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots$$
> > 
> > - Rataan: $E[X] = \dfrac{1}{p}$
> > - Variansi: $\text{Var}(X) = \dfrac{1-p}{p^2}$
> > - **Modus: selalu $= 1$** karena PMF bersifat menurun monoton dalam $k$.
>
> **Diketahui:**
> - $p = 0{,}0625 = \dfrac{1}{16}$ (peluang seseorang mengidap penyakit)
> - Pengujian dilakukan hingga **pertama kali** ditemukan seseorang yang sakit → model Geometrik
> - $X$ = banyaknya orang yang diuji
> - Target: modus $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Model Distribusi**
> >
> > Setiap orang diuji secara independen dengan peluang sukses (sakit) $p = 0{,}0625$. Pengujian berhenti saat pertama kali ditemukan yang sakit. Ini persis merupakan percobaan Bernoulli berulang hingga sukses pertama, sehingga:
> > $$X \sim \text{Geom}(p = 0{,}0625)$$
> >
> > **Langkah 2: Tuliskan PMF secara Eksplisit**
> >
> > $$P(X = k) = (1 - 0{,}0625)^{k-1} \times 0{,}0625 = (0{,}9375)^{k-1} \times 0{,}0625, \quad k = 1, 2, 3, \ldots$$
> > 
> > Hitung beberapa nilai awal untuk melihat polanya:
> >
> > | $k$ | $(0{,}9375)^{k-1}$ | $P(X=k)$ |
> > |:-:|:-:|:-:|
> > | $1$ | $1{,}0000$ | $0{,}06250$ |
> > | $2$ | $0{,}9375$ | $0{,}05859$ |
> > | $3$ | $0{,}8789$ | $0{,}05493$ |
> > | $4$ | $0{,}8240$ | $0{,}05150$ |
> >
> > **Langkah 3: Buktikan Bahwa PMF Menurun Monoton**
> >
> > Perhatikan rasio antara dua nilai PMF berurutan:
> > 
> > $$\frac{P(X = k+1)}{P(X = k)} = \frac{(0{,}9375)^k \times 0{,}0625}{(0{,}9375)^{k-1} \times 0{,}0625} = 0{,}9375 < 1$$
> > 
> > Karena rasio ini **kurang dari 1 untuk semua $k$**, PMF bersifat **menurun monoton** — artinya $P(X=1) > P(X=2) > P(X=3) > \cdots$
> >
> > **Langkah 4: Tentukan Modus**
> >
> > Modus adalah nilai $k$ yang memaksimalkan $P(X=k)$. Karena PMF menurun monoton mulai dari $k=1$, nilai maksimumnya dicapai di $k = 1$. Jadi:
> > 
> > $$\text{Modus} = 1$$
> >
> > **Hasil Akhir:** **(a)**. $1$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira **modus = mean**: $E[X] = 1/p = 1/0{,}0625 = 16$ (opsi e). Mean dan modus untuk distribusi Geometrik **tidak pernah sama** kecuali $p=1$.
> > > - Mengira modus distribusi Geometrik mengikuti formula serupa distribusi Binomial Negatif atau distribusi diskrit lain yang memiliki modus $> 1$.
> > > - Lupa bahwa modus distribusi Geometrik adalah **properti tetap**: selalu 1, tidak bergantung pada nilai $p$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan distribusi Binomial Negatif (menunggu $r > 1$ sukses) alih-alih Geometrik — soal ini menunggu tepat **1 sukses pertama**.
> > > - Mengira $X$ dimulai dari $k = 0$ (versi alternatif Geometrik yang menghitung *kegagalan* sebelum sukses pertama). Soal ini jelas menyatakan "banyaknya orang yang terkena pengujian", sehingga $k = 1, 2, 3, \ldots$
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut **"hingga pertama kali"** atau **"sampai ditemukan yang pertama"** → $X \sim \text{Geom}(p)$ dengan modus $= 1$.
> > > - Jika diminta **modus** (bukan mean/median) pada distribusi Geometrik → jawabannya langsung $1$ tanpa perlu hitung numerik.
> > > - Opsi dengan nilai $1/p$ (di sini: $16$, opsi e) adalah **jebakan klasik** yang merepresentasikan mean, bukan modus.
>
---

## **No. 16**

Di Negara Wakanda, 5% dari seluruh bank yang terdaftar diprediksi akan mengalami kebangkrutan dalam 5 tahun ke depan. Lembaga Penjamin Simpanan (LPS) di negara tersebut menjamin 80% bank yang terdaftar. Hanya terdapat 3% bank yang terdaftar di LPS diprediksi akan mengalami kebangkrutan dalam 5 tahun ke depan. Hitunglah peluang bahwa bank yang mengalami kebangkrutan di negara tersebut dalam 5 tahun kedepan dijamin oleh LPS!

a. $0{,}02$  
b. $0{,}04$  
c. $0{,}06$  
d. $0{,}48$  
e. $0{,}60$

> [!summary]+ **Jawaban No. 16**
> 
> **(d). $0{,}48$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]], [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > **Teorema Bayes** (bentuk dua partisi):
> > 
> > $$P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}$$
> > 
> > Ekuivalen, menggunakan **probabilitas gabungan**:
> > 
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad \text{dengan } P(A \cap B) = P(B \mid A) \cdot P(A)$$
>
> **Diketahui:**
> - Definisikan kejadian:
>   - $B$ = bank mengalami kebangkrutan dalam 5 tahun ke depan
>   - $L$ = bank dijamin oleh LPS
> - $P(B) = 0{,}05$ (5% bank akan bangkrut)
> - $P(L) = 0{,}80$ (80% bank dijamin LPS)
> - $P(B \mid L) = 0{,}03$ (3% bank yang dijamin LPS diprediksi bangkrut)
> - Target: $P(L \mid B)$ — peluang bank dijamin LPS, **diketahui** bank tersebut bangkrut
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Jenis Pertanyaan**
> >
> > Soal memberikan $P(B \mid L)$ dan menanyakan $P(L \mid B)$ — ini adalah **pembalikan kondisional**, ciri khas Teorema Bayes. Perhatikan perbedaannya:
> > 
> > - $P(B \mid L)$ = "dari bank yang dijamin LPS, berapa yang bangkrut?" → diberikan
> > - $P(L \mid B)$ = "dari bank yang bangkrut, berapa yang ternyata dijamin LPS?" → ditanya
> >
> > **Langkah 2: Hitung Probabilitas Gabungan $P(B \cap L)$**
> >
> > Gunakan definisi probabilitas bersyarat:
> > 
> > $$P(B \cap L) = P(B \mid L) \cdot P(L) = 0{,}03 \times 0{,}80 = 0{,}024$$
> > 
> > Artinya: 2,4% dari seluruh bank terdaftar adalah bank yang dijamin LPS **dan** akan bangkrut.
> >
> > **Langkah 3: Terapkan Teorema Bayes**
> >
> > $$P(L \mid B) = \frac{P(B \cap L)}{P(B)} = \frac{0{,}024}{0{,}05} = 0{,}48$$
> >
> > **Verifikasi Konsistensi:** Perlu dicek apakah informasi soal konsisten. Bank yang tidak dijamin LPS: proporsi $P(L^c) = 0{,}20$. Probabilitas bangkrut bagi yang tidak dijamin:
> > 
> > $$P(B \mid L^c) = \frac{P(B) - P(B \cap L)}{P(L^c)} = \frac{0{,}05 - 0{,}024}{0{,}20} = \frac{0{,}026}{0{,}20} = 0{,}13$$
> > 
> > Ini berarti 13% bank yang tidak dijamin LPS diprediksi bangkrut — lebih tinggi dari 3% yang dijamin LPS. Masuk akal secara kontekstual (bank tanpa jaminan lebih rentan).
> >
> > **Hasil Akhir:** **(d)**. $0{,}48$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Langsung menjawab $P(L \mid B) = P(B \mid L) = 0{,}03$ — ini adalah kesalahan klasik **menukar kondisi** (*confusion of the inverse*). $P(A \mid B) \neq P(B \mid A)$ secara umum.
> > > - Mengira $P(L \mid B) = P(L) \times P(B \mid L) = 0{,}80 \times 0{,}03 = 0{,}024$ — ini menghitung $P(L \cap B)$, bukan $P(L \mid B)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "3% bank yang terdaftar di LPS diprediksi bangkrut" = $P(B \mid L) = 0{,}03$, **bukan** $P(B \cap L) = 0{,}03$. Frasa "dari bank yang terdaftar di LPS" menandakan kondisi, sehingga ini adalah probabilitas bersyarat.
> > > - "Peluang bank yang mengalami kebangkrutan dijamin LPS" = $P(L \mid B)$, **bukan** $P(B \cap L)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan $P(A \mid B)$ lalu menanya $P(B \mid A)$ → **Teorema Bayes** wajib digunakan.
> > > - Frasa **"dari [kelompok X], berapa persen yang [kondisi Y]"** → selalu probabilitas bersyarat $P(Y \mid X)$.
> > > - Jika $P(B \mid L) \times P(L) \neq P(B)$ perlu dicek, karena bisa diverifikasi via hukum probabilitas total.
>
---

## **No. 17**

Banyaknya klaim bulanan pada suatu produk asuransi memiliki distribusi sebagai berikut:

| Banyaknya Klaim | Peluang |
|-----------------|---------|
| 0 | $s$ |
| 1 | $t$ |
| 2 | $0{,}75s$ |
| 3 atau lebih | $0$ |

Diambil sampel acak sebanyak 5 polis dan data klaim di suatu bulan telah tersedia. Banyaknya klaim dari kelima polis tersebut saling bebas. Misal Y merupakan banyaknya polis dari sampel yang diambil memiliki kurang dari 2 klaim bulanan.

Misal $c = P(Y = 5)$. Tentukan mana dari jawaban berikut ini yang merepresentasikan $t$!

a. $\dfrac{4-4c^{0{,}2}}{3}$  
b. $\dfrac{3-7c^{0{,}2}}{3}$  
c. $\dfrac{4c^{0{,}2}-4}{3}$  
d. $\dfrac{5c^{0{,}2}-4}{3}$  
e. $\dfrac{7c^{0{,}2}-4}{3}$

> [!summary]+ **Jawaban No. 17**
> 
> **(e). $\dfrac{7c^{0{,}2}-4}{3}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > **Aksioma Normalisasi PMF:**
> > 
> > $$\sum_{\text{semua } k} P(X = k) = 1$$
> > 
> > **Distribusi Binomial** $Y \sim B(n, p)$:
> > 
> > $$P(Y = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$
> > 
> > Khususnya: $P(Y = n) = p^n$ (semua $n$ percobaan sukses).
>
> **Diketahui:**
> - PMF klaim per polis: $P(X=0)=s$, $P(X=1)=t$, $P(X=2)=0{,}75s$, $P(X \geq 3)=0$
> - $n = 5$ polis, klaim masing-masing independen
> - $Y$ = banyaknya polis (dari 5) yang memiliki **kurang dari 2 klaim** (yaitu 0 atau 1 klaim)
> - $c = P(Y=5)$
> - Target: nyatakan $t$ dalam $c$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Normalisasi PMF**
> >
> > Total probabilitas harus sama dengan 1:
> > 
> > $$s + t + 0{,}75s + 0 = 1$$
> > 
> > $$1{,}75s + t = 1 \quad \Longrightarrow \quad t = 1 - 1{,}75s \tag{1}$$
> >
> > **Langkah 2: Tentukan Probabilitas Sukses untuk $Y$**
> >
> > $Y$ menghitung banyaknya polis dengan **kurang dari 2 klaim** = klaim 0 atau klaim 1. Probabilitas satu polis memiliki kurang dari 2 klaim:
> > 
> > $$p = P(X < 2) = P(X=0) + P(X=1) = s + t$$
> > 
> > Karena 5 polis saling bebas dan masing-masing "sukses" dengan peluang $p = s + t$, maka:
> > 
> > $$Y \sim B(5,\, s+t)$$
> >
> > **Langkah 3: Gunakan Definisi $c = P(Y=5)$**
> >
> > Untuk $Y \sim B(5, p)$:
> > 
> > $$P(Y=5) = \binom{5}{5}(s+t)^5 \cdot (1-(s+t))^0 = (s+t)^5$$
> > 
> > Maka:
> > 
> > $$c = (s+t)^5 \quad \Longrightarrow \quad s + t = c^{1/5} = c^{0{,}2} \tag{2}$$
> >
> > **Langkah 4: Selesaikan Sistem Persamaan untuk $s$**
> >
> > Dari persamaan (1): $t = 1 - 1{,}75s$, substitusi ke persamaan (2):
> > 
> > $$s + (1 - 1{,}75s) = c^{0{,}2}$$
> > 
> > $$1 - 0{,}75s = c^{0{,}2}$$
> > 
> > $$0{,}75s = 1 - c^{0{,}2}$$
> > 
> > $$s = \frac{1 - c^{0{,}2}}{0{,}75} = \frac{4(1 - c^{0{,}2})}{3} \tag{3}$$
> >
> > **Langkah 5: Hitung $t$ dari $s$**
> >
> > Substitusi (3) ke (1):
> > 
> > $$t = 1 - 1{,}75s = 1 - \frac{7}{4} \cdot \frac{4(1-c^{0{,}2})}{3} = 1 - \frac{7(1-c^{0{,}2})}{3}$$
> > 
> > $$t = \frac{3}{3} - \frac{7(1-c^{0{,}2})}{3} = \frac{3 - 7(1 - c^{0{,}2})}{3} = \frac{3 - 7 + 7c^{0{,}2}}{3}$$
> > 
> > $$\boxed{t = \frac{7c^{0{,}2} - 4}{3}}$$
> >
> > **Verifikasi Konsistensi:** Agar $t \geq 0$, perlu $7c^{0{,}2} \geq 4$, yaitu $c^{0{,}2} \geq \dfrac{4}{7}$, atau $c \geq \left(\dfrac{4}{7}\right)^5 \approx 0{,}126$. Ini adalah syarat agar distribusi valid.
> >
> > **Hasil Akhir:** **(e)**. $t = \dfrac{7c^{0{,}2}-4}{3}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah membentuk persamaan normalisasi: misalnya menulis $s + t + 0{,}75 = 1$ (lupa bahwa $0{,}75$ adalah koefisien dari $s$, bukan nilai mandiri).
> > > - Salah mengidentifikasi distribusi $Y$: mengira $Y$ berdistribusi Poisson atau distribusi lain, padahal 5 percobaan independen dengan peluang sukses tetap $\to Y \sim \text{Binomial}$.
> > > - Salah menuliskan $P(Y=5)$: menggunakan $\binom{5}{5}(s+t)^5(1-s-t)^0$ dan lupa bahwa $\binom{5}{5} = 1$ dan $(1-s-t)^0 = 1$ — hasilnya tetap benar, tetapi bisa membingungkan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **"Kurang dari 2 klaim"** = $\{X = 0\} \cup \{X = 1\}$, **bukan** $\{X = 0\} \cup \{X = 1\} \cup \{X = 2\}$. Kata "kurang dari" (*strict inequality*) tidak mencakup 2.
> > > - Mengira $Y$ = total klaim dari 5 polis, bukan banyaknya polis yang memenuhi kondisi tertentu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika PMF ditulis dengan simbol tak diketahui ($s$, $t$, dll.) → **langkah pertama selalu normalisasi** untuk membentuk persamaan.
> > > - Jika soal menyebut **"kurang dari $k$"** → batas atas tidak ikut dihitung; tulis ulang secara eksplisit: $\{X = 0, 1, \ldots, k-1\}$.
> > > - Jika hasil $c = p^n$ muncul → segera balikkan dengan $p = c^{1/n}$ untuk mendapatkan peluang sukses per trial.

---
## **No. 18**

Misal X merupakan random variabel dengan rataan 0 dan varians $a > 0$. Hitunglah $P(X^2 < a)$! (Pilihlah jawaban yang paling mendekati!)

a. $0{,}34$  
b. $0{,}42$  
c. $0{,}68$  
d. $0{,}84$  
e. $0{,}90$

> [!summary]+ **Jawaban No. 18**
> 
> **(c). $0{,}68$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[4.4 Hukum Bilangan Besar]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3; Miller Bab 6 |
>
> > [!info]+ **Rumus**
> > 
> > **Distribusi Normal Standar** $Z \sim N(0,1)$:
> > 
> > $$P(-1 < Z < 1) = 2\Phi(1) - 1 \approx 0{,}6827$$
> > 
> > **Standardisasi:** Jika $X \sim N(\mu, \sigma^2)$, maka $Z = \dfrac{X - \mu}{\sigma} \sim N(0,1)$.
>
> **Diketahui:**
> - $E[X] = 0$, $\text{Var}(X) = a$ → standar deviasi $= \sqrt{a}$
> - Soal meminta nilai **tepat** yang cocok dengan salah satu opsi → asumsikan $X \sim N(0, a)$
> - Target: $P(X^2 < a)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ubah Pertidaksamaan $X^2 < a$ menjadi Pertidaksamaan Linear**
> >
> > $X^2 < a$ berarti $|X| < \sqrt{a}$, yang ekuivalen dengan:
> > 
> > $$-\sqrt{a} < X < \sqrt{a}$$
> > 
> > Jadi kita tidak boleh hanya menulis $X < \sqrt{a}$ (keliru karena mengabaikan sisi kiri).
> >
> > **Langkah 2: Standardisasi ke $Z \sim N(0,1)$**
> >
> > Karena $X \sim N(0, a)$ dengan $\mu = 0$ dan $\sigma = \sqrt{a}$:
> > 
> > $$P(-\sqrt{a} < X < \sqrt{a}) = P\!\left(\frac{-\sqrt{a} - 0}{\sqrt{a}} < Z < \frac{\sqrt{a} - 0}{\sqrt{a}}\right) = P(-1 < Z < 1)$$
> >
> > **Langkah 3: Hitung Probabilitas dari Tabel Normal**
> >
> > $$P(-1 < Z < 1) = \Phi(1) - \Phi(-1) = \Phi(1) - (1 - \Phi(1)) = 2\Phi(1) - 1$$
> > 
> > $$= 2(0{,}8413) - 1 = 1{,}6827 - 1 = 0{,}6827 \approx 0{,}68$$
> >
> > Ini adalah "aturan 68-95-99,7": sekitar 68% nilai distribusi normal jatuh dalam satu standar deviasi dari mean.
> >
> > **Hasil Akhir:** **(c)**. $0{,}68$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menulis $P(X^2 < a) = P(X < \sqrt{a})$ — ini **salah** karena mengabaikan sisi negatif. $X^2 < a$ berarti $-\sqrt{a} < X < \sqrt{a}$ (kedua sisi).
> > > - Menggunakan ketidaksamaan Chebyshev: $P(|X - \mu| < k\sigma) \geq 1 - 1/k^2$. Dengan $k=1$, batas bawahnya $\geq 0$ — tidak informatif dan tidak menghasilkan nilai tepat sesuai opsi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal hanya menyebut mean dan variansi, tanpa menyebut distribusi secara eksplisit. Namun karena opsi jawaban berupa nilai **tepat** (bukan batas bawah/atas) dan salah satu opsi adalah $0{,}68$ (nilai khas $P(-1 < Z < 1)$), maka diasumsikan $X \sim N(0, a)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal hanya diketahui mean dan variansi tetapi meminta nilai probabilitas **tepat** → asumsikan distribusi Normal.
> > > - Ekspresi $P(X^2 < \sigma^2)$ selalu ekuivalen dengan $P(-\sigma < X < \sigma) = P(-1 < Z < 1) \approx 0{,}68$ untuk distribusi Normal.

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
> > 
> > - $u \geq 0$, $0 \leq v \leq 1$
> > - $x + y = u \leq 2$ (karena $x \leq 1$ dan $y \leq 1$)
> > - Lebih tepatnya: $0 < u \leq 2$ dan $0 < v < 1$, dengan syarat $uv \leq 1$ dan $u(1-v) \leq 1$
> >
> > **Langkah 4: Tulis PDF Bersama $(U,V)$**
> >
> > $$f_{U,V}(u,v) = f_{X,Y}(uv,\, u(1-v)) \cdot |J| = 1 \cdot u = u$$
> > (berlaku pada support yang valid)
> >
> > **Langkah 5: Evaluasi di $(u,v) = (1/2, 1/2)$ dan Verifikasi Support**
> >
> > Cek apakah titik $(1/2, 1/2)$ berada di support:
> > - $x = uv = \tfrac{1}{2} \times \tfrac{1}{2} = \tfrac{1}{4} \in [0,1]$ ✓
> > - $y = u(1-v) = \tfrac{1}{2} \times \tfrac{1}{2} = \tfrac{1}{4} \in [0,1]$ ✓
> >
> > Evaluasi:
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
> > 
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
> > **Hitung gabungan:** 
> > 
> > $(A \cup B) \cup (A \cup B^c) = A \cup B \cup B^c = A \cup \Omega = \Omega$
> > 
> > $$\therefore P((A\cup B) \cup (A \cup B^c)) = P(\Omega) = 1$$
> >
> > **Hitung irisan:** 
> > 
> > $(A \cup B) \cap (A \cup B^c) = A \cup (B \cap B^c) = A \cup \emptyset = A$
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

Tiga kartu diambil dari satu set kartu remi standar. Berapakah peluang ketiga kartu tersebut bergambar hati, jika diketahui setidaknya dua dari tiga kartu tersebut bergambar hati? (Pilihlah jawaban yang paling mendekati!)

a. $0{,}0859$  
b. $0{,}0781$  
c. $0{,}0713$  
d. $0{,}0625$  
e. $0{,}0576$

> [!summary]+ **Jawaban No. 25**
> 
> **(a). $0{,}0859$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Metode Enumerasi]], [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.3–1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > **Probabilitas Bersyarat:**
> > 
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> > 
> > **Kombinasi** (pengambilan tanpa urutan, tanpa pengembalian):
> > 
> > $$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
> > 
> > Kartu remi standar: 52 kartu total, 13 kartu hati, 39 kartu bukan hati.
>
> **Diketahui:**
> - Deck standar: 52 kartu, 13 hati ($\heartsuit$), 39 bukan hati
> - Diambil 3 kartu **tanpa pengembalian** (urutan tidak penting → kombinasi)
> - Kejadian $A$ = ketiga kartu adalah hati
> - Kejadian $B$ = setidaknya 2 dari 3 kartu adalah hati
> - Perhatikan: $A \subset B$ (jika semua 3 hati, pasti setidaknya 2 hati), sehingga $A \cap B = A$
> - Target: $P(A \mid B)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Ruang Sampel Total**
> >
> > Banyaknya cara memilih 3 kartu dari 52:
> > 
> > $$\binom{52}{3} = \frac{52 \times 51 \times 50}{3 \times 2 \times 1} = \frac{132{.}600}{6} = 22{.}100$$
> >
> > **Langkah 2: Hitung $P(A) = P(\text{tepat 3 hati})$**
> >
> > Memilih 3 kartu hati dari 13 kartu hati yang tersedia:
> > 
> > $$\binom{13}{3} = \frac{13 \times 12 \times 11}{6} = 286$$
> > 
> > $$P(A) = \frac{286}{22{.}100}$$
> >
> > **Langkah 3: Hitung $P(\text{tepat 2 hati})$**
> >
> > Memilih 2 hati dari 13, dan 1 bukan hati dari 39:
> > 
> > $$\binom{13}{2} \times \binom{39}{1} = \frac{13 \times 12}{2} \times 39 = 78 \times 39 = 3{.}042$$
> > 
> > $$P(\text{tepat 2 hati}) = \frac{3{.}042}{22{.}100}$$
> >
> > **Langkah 4: Hitung $P(B) = P(\text{setidaknya 2 hati})$**
> >
> > "Setidaknya 2 hati" mencakup tepat 2 hati **atau** tepat 3 hati:
> > 
> > $$P(B) = P(\text{tepat 2 hati}) + P(\text{tepat 3 hati}) = \frac{3{.}042 + 286}{22{.}100} = \frac{3{.}328}{22{.}100}$$
> >
> > **Langkah 5: Terapkan Rumus Probabilitas Bersyarat**
> >
> > Karena $A \subset B$, maka $P(A \cap B) = P(A)$:
> > 
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)}{P(B)} = \frac{286/22{.}100}{3{.}328/22{.}100} = \frac{286}{3{.}328}$$
> >
> > Penyebut $22{.}100$ saling menghilangkan — kita hanya perlu membandingkan **jumlah cara** (bukan probabilitas):
> > 
> > $$P(A \mid B) = \frac{286}{3{.}328} = 0{,}08594 \approx 0{,}0859$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}0859$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $\binom{52}{3}$: ingat rumusnya $\frac{52 \times 51 \times 50}{6} = 22{.}100$, bukan $52 \times 51 \times 50$ tanpa dibagi $6$.
> > > - Mengira $P(A \cap B) = P(A) \times P(B)$ — ini hanya berlaku jika $A$ dan $B$ **independen**, yang jelas tidak berlaku di sini (karena $A \subset B$).
> > > - Lupa bahwa "setidaknya 2 hati" mencakup **dua** kasus: tepat 2 dan tepat 3. Hanya menghitung tepat 2 hati sebagai penyebut adalah kesalahan umum.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Pengambilan kartu selalu **tanpa pengembalian** kecuali dinyatakan lain → gunakan kombinasi $\binom{n}{k}$, bukan pangkat $p^k(1-p)^{n-k}$ (yang untuk Binomial dengan pengembalian).
> > > - "Setidaknya 2" = $\geq 2$, artinya inklusif terhadap nilai 2 itu sendiri.
> >
> > > [!CAUTION] Red Flags
> > > - Soal kombinatorik dengan "diketahui bahwa..." → selalu $P(A \mid B) = P(A \cap B) / P(B)$.
> > > - Jika $A \subset B$ (kejadian A adalah bagian dari B) → $P(A \cap B) = P(A)$, sehingga $P(A \mid B) = P(A)/P(B)$. Identifikasi relasi subset ini untuk menyederhanakan perhitungan.

---

## **No. 26**

Hitunglah fungsi pembangkit peluang $P_N(t)$ dari variabel acak Poisson N dengan rataan 2 pada $t = \dfrac{1}{2}$! (Pilihlah jawaban yang paling mendekati!)

a. $27{,}0434$  
b. $7{,}3891$  
c. $2{,}7183$  
d. $1{,}6487$  
e. $0{,}3679$

> [!summary]+ **Jawaban No. 26**
> 
> **(e). $0{,}3679$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]], [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.3 Fungsi Pembangkit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > **Fungsi Pembangkit Peluang (PGF)** untuk variabel acak diskrit $N$ dengan support $\{0,1,2,\ldots\}$:
> > 
> > $$G_N(t) = E[t^N] = \sum_{k=0}^{\infty} t^k \cdot P(N=k)$$
> > 
> > **PGF khusus untuk $N \sim \text{Poisson}(\lambda)$:**
> > 
> > $$G_N(t) = e^{\lambda(t-1)}$$
> > 
> > **Perbedaan PGF vs MGF** (wajib dihapal):
> > 
> > - PGF: $G_N(t) = E[t^N] = e^{\lambda(t-1)}$ — argumennya adalah $t^N$
> > - MGF: $M_N(t) = E[e^{tN}] = e^{\lambda(e^t - 1)}$ — argumennya adalah $e^{tN}$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda = 2)$
> - Target: $G_N\!\left(\dfrac{1}{2}\right)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Rumus PGF untuk Poisson**
> >
> > Untuk $N \sim \text{Poisson}(\lambda = 2)$:
> > 
> > $$G_N(t) = e^{\lambda(t-1)} = e^{2(t-1)}$$
> >
> > **Langkah 2: Substitusi $t = \dfrac{1}{2}$**
> >
> > $$G_N\!\left(\tfrac{1}{2}\right) = e^{2\left(\frac{1}{2} - 1\right)} = e^{2 \times (-\frac{1}{2})} = e^{-1}$$
> >
> > **Langkah 3: Evaluasi Numerik**
> >
> > $$e^{-1} = \frac{1}{e} \approx \frac{1}{2{,}71828} \approx 0{,}3679$$
> >
> > Sebagai sanity check: nilai PGF di $t = 1$ selalu $= 1$ (karena $G_N(1) = E[1^N] = 1$). Di sini $t = 1/2 < 1$, sehingga wajar hasilnya $< 1$. ✓
> >
> > **Hasil Akhir:** **(e)**. $0{,}3679$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Menggunakan MGF alih-alih PGF**: MGF Poisson adalah $M_N(t) = e^{\lambda(e^t - 1)}$. Jika menggunakan MGF dengan $t = 1/2$: $M_N(1/2) = e^{2(e^{0{,}5}-1)} = e^{2(1{,}6487-1)} = e^{1{,}2974} \approx 3{,}66$ — tidak ada di opsi, namun jelas bukan jawaban yang diminta.
> > > - Salah menghitung eksponen: $2(1/2 - 1) = 2 \times (-1/2) = -1$, **bukan** $2 \times 1/2 = 1$.
> > > - Mengira $G_N(1/2) = e^{\lambda \cdot t} = e^{2 \times 1/2} = e^1 \approx 2{,}718$ — lupa faktor $(t-1)$, bukan hanya $t$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Fungsi pembangkit peluang" (PGF) berbeda dari "fungsi pembangkit momen" (MGF). Soal secara eksplisit menyebut PGF — gunakan $G_N(t) = E[t^N]$, bukan $M_N(t) = E[e^{tN}]$.
> >
> > > [!CAUTION] Red Flags
> > > - Opsi (c) $\approx 2{,}718 = e^1$ adalah jebakan untuk yang menggunakan $e^{\lambda t}$ tanpa faktor $-1$.
> > > - Opsi (d) $\approx 1{,}6487 = e^{0{,}5}$ adalah jebakan untuk yang hanya menghitung $e^{t}$ atau $e^{\lambda/2}$.
> > > - Selalu cek: PGF di $t=1$ harus $= 1$. Ini berguna untuk verifikasi rumus.

---

## **No. 27**

Misal $X$ memiliki sebaran binomial dengan parameter $n$ dan $p$, dan distribusi bersyarat dari $Y$ jika diketahui $X = x$ mengikuti sebaran Poisson dengan rataan $x$.

Tentukan varians dari $Y$!

a. $x$  
b. $np$  
c. $np(1-p)$  
d. $np^2$  
e. $np(2-p)$

> [!summary]+ **Jawaban No. 27**
> 
> **(e). $np(2-p)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.4 Nilai Harapan dan Variansi Bersyarat]], [[3.7 Distribusi Majemuk (Compound Distribution)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Distribusi Bersyarat (Conditional Distribution)]], [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1–2.6; Hogg-Tanis-Zimm Bab 4.4 |
>
> > [!info]+ **Rumus**
> > 
> > **Hukum Ekspektasi Total (Law of Total Expectation / Adam's Law):**
> > 
> > $$E[Y] = E\!\left[E[Y \mid X]\right]$$
> > 
> > **Hukum Variansi Total (Law of Total Variance / Eve's Law):**
> > 
> > $$\text{Var}(Y) = E\!\left[\text{Var}(Y \mid X)\right] + \text{Var}\!\left(E[Y \mid X]\right)$$
> > 
> > Untuk $Y \mid X = x \sim \text{Poisson}(x)$: $E[Y \mid X=x] = x$ dan $\text{Var}(Y \mid X=x) = x$.
> > 
> > Untuk $X \sim B(n,p)$: $E[X] = np$ dan $\text{Var}(X) = np(1-p)$.
>
> **Diketahui:**
> - $X \sim B(n, p)$: variabel acak "luar" (mixing variable)
> - $Y \mid X = x \sim \text{Poisson}(x)$: distribusi $Y$ bergantung pada nilai $X$
> - Ini adalah **distribusi majemuk (compound distribution)**
> - Target: $\text{Var}(Y)$ — variansi marginal (tanpa syarat) dari $Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Momen Bersyarat dari $Y \mid X$**
> >
> > Karena $Y \mid X = x \sim \text{Poisson}(x)$, dan Poisson dengan rataan $\mu$ memiliki mean dan variansi keduanya $= \mu$:
> > 
> > $$E[Y \mid X = x] = x \quad \Longrightarrow \quad E[Y \mid X] = X$$
> > 
> > $$\text{Var}(Y \mid X = x) = x \quad \Longrightarrow \quad \text{Var}(Y \mid X) = X$$
> > 
> > (Perhatikan: $E[Y \mid X]$ dan $\text{Var}(Y \mid X)$ adalah **fungsi dari** $X$, bukan konstanta.)
> >
> > **Langkah 2: Hitung Suku Pertama Eve's Law — $E[\text{Var}(Y \mid X)]$**
> >
> > $$E\!\left[\text{Var}(Y \mid X)\right] = E[X] = np$$
> > 
> > (menggunakan Hukum Ekspektasi Total: $E[X] = np$ untuk $X \sim B(n,p)$)
> >
> > **Langkah 3: Hitung Suku Kedua Eve's Law — $\text{Var}(E[Y \mid X])$**
> >
> > $$\text{Var}\!\left(E[Y \mid X]\right) = \text{Var}(X) = np(1-p)$$
> > 
> > (karena $E[Y \mid X] = X$, variansinya sama dengan variansi $X$)
> >
> > **Langkah 4: Jumlahkan Kedua Suku**
> >
> > $$\text{Var}(Y) = E\!\left[\text{Var}(Y \mid X)\right] + \text{Var}\!\left(E[Y \mid X]\right)$$
> > 
> > $$= np + np(1-p)$$
> > 
> > $$= np\left[1 + (1-p)\right]$$
> > 
> > $$= np(2-p)$$
> >
> > **Verifikasi dengan nilai khusus:** 
> > 
> > Coba $p = 1$: $X = n$ pasti, sehingga $Y \sim \text{Poisson}(n)$ dan $\text{Var}(Y) = n$. Formula: $np(2-p) = n \cdot 1 \cdot (2-1) = n$. ✓
> >
> > **Hasil Akhir:** **(e)**. $\text{Var}(Y) = np(2-p)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Hanya mengambil suku pertama**: $\text{Var}(Y) = E[\text{Var}(Y|X)] = E[X] = np$ — ini opsi (b), **tidak lengkap** karena mengabaikan suku kedua Eve's Law.
> > > - **Hanya mengambil suku kedua**: $\text{Var}(Y) = \text{Var}(E[Y|X]) = \text{Var}(X) = np(1-p)$ — ini opsi (c), juga **tidak lengkap**.
> > > - **Mengira $\text{Var}(Y) = \text{Var}(Y|X=x) = x$** — opsi (a) ini salah karena $x$ adalah nilai tertentu (bukan variabel), dan variansi marginal tidak sama dengan variansi bersyarat di satu titik.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Distribusi bersyarat $Y|X=x$ adalah Poisson dengan rataan $x$" berarti rataan Poisson **bervariasi** bergantung pada $X$ — ini adalah struktur distribusi majemuk, bukan distribusi Poisson biasa.
> > > - Jawaban $Y$ (marginal) **bukan** Poisson — distribusi marginal campuran umumnya lebih kompleks.
> >
> > > [!CAUTION] Red Flags
> > > - Kata kunci **"distribusi bersyarat dari $Y$ jika diketahui $X$"** + "tentukan variansi $Y$" → selalu gunakan **Eve's Law** (kedua suku, jangan ada yang dilewat).
> > > - Soal **compound distribution** (Poisson-Binomial, Poisson-Gamma, dll.) → Eve's Law adalah senjata utama.

---

## **No. 28**

Misal (X,Y) memiliki fungsi peluang bersama:

$$f_{X,Y}(x, y) = \begin{cases} 6(1-x-y), & \text{untuk } 0 \leq x \leq 1,\ 0 \leq y \leq 1,\ 0 \leq x+y \leq 1 \\ 0, & \text{selainnya} \end{cases}$$

Tentukan $P\!\left(0 \leq X \leq \dfrac{1}{2}\right)$!

a. $\dfrac{1}{12}$  
b. $\dfrac{1}{8}$  
c. $\dfrac{7}{12}$  
d. $\dfrac{1}{4}$  
e. $\dfrac{7}{8}$

> [!summary]+ **Jawaban No. 28**
> 
> **(e). $\dfrac{7}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]], [[3.1 Distribusi Gabungan (Joint Distribution)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan (Joint Distribution)]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[2.2 Variabel Acak Kontinu]] |
> | **Referensi** | Hogg-McKean-Craig Bab 2.1; Hogg-Tanis-Zimm Bab 4.1 |
>
> > [!info]+ **Rumus**
> > 
> > **PDF Marginal** dari $X$:
> > 
> > $$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dy$$
> > 
> > Batas integral $y$ harus memperhatikan **support** (region dimana $f_{X,Y} > 0$).
> >
> > Untuk support segitiga $\{x \geq 0,\, y \geq 0,\, x+y \leq 1\}$: batas $y$ adalah dari $0$ hingga $1-x$ (untuk $x$ tetap).
>
> **Diketahui:**
> - $f_{X,Y}(x,y) = 6(1-x-y)$ pada region segitiga: $x \geq 0$, $y \geq 0$, $x+y \leq 1$
> - Region ini adalah segitiga dengan sudut di $(0,0)$, $(1,0)$, dan $(0,1)$
> - Target: $P\!\left(0 \leq X \leq \dfrac{1}{2}\right) = \displaystyle\int_0^{1/2} f_X(x)\,dx$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Batas Integral untuk Marginalisasi**
> >
> > Untuk nilai $x$ yang tetap ($0 \leq x \leq 1$), variabel $y$ harus memenuhi:
> > 
> > - $y \geq 0$ (dari syarat support)
> > - $x + y \leq 1$, sehingga $y \leq 1 - x$
> >
> > Jadi batas integral $y$: dari $0$ sampai $1-x$.
> >
> > **Langkah 2: Hitung PDF Marginal $f_X(x)$**
> >
> > $$f_X(x) = \int_0^{1-x} 6(1-x-y)\,dy$$
> >
> > Misal $u = 1-x$ (konstanta saat mengintegralkan terhadap $y$):
> > 
> > $$= \int_0^{u} 6(u - y)\,dy = 6\left[uy - \frac{y^2}{2}\right]_0^{u}$$
> > 
> > $$= 6\left(u^2 - \frac{u^2}{2}\right) = 6 \cdot \frac{u^2}{2} = 3u^2 = 3(1-x)^2$$
> >
> > Jadi: $f_X(x) = 3(1-x)^2$ untuk $0 \leq x \leq 1$.
> >
> > **Verifikasi:** $\displaystyle\int_0^1 3(1-x)^2\,dx = \left[-(1-x)^3\right]_0^1 = 0 - (-1) = 1$ ✓
> >
> > **Langkah 3: Hitung $P\!\left(0 \leq X \leq \dfrac{1}{2}\right)$**
> >
> > $$P\!\left(0 \leq X \leq \tfrac{1}{2}\right) = \int_0^{1/2} 3(1-x)^2\,dx$$
> >
> > Gunakan substitusi $u = 1-x$, $du = -dx$:
> > 
> > - Saat $x = 0$: $u = 1$
> > - Saat $x = 1/2$: $u = 1/2$
> >
> > $$= \int_1^{1/2} 3u^2 (-du) = \int_{1/2}^{1} 3u^2\,du = \left[u^3\right]_{1/2}^{1} = 1^3 - \left(\tfrac{1}{2}\right)^3 = 1 - \frac{1}{8} = \frac{7}{8}$$
> >
> > Atau langsung (tanpa substitusi):
> > 
> > $$= \left[-(1-x)^3\right]_0^{1/2} = -(1-\tfrac{1}{2})^3 - (-(1-0)^3) = -\frac{1}{8} + 1 = \frac{7}{8}$$
> >
> > **Hasil Akhir:** **(e)**. $\dfrac{7}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Salah menentukan batas atas $y$**: menggunakan $y$ dari $0$ hingga $1$ (alih-alih $1-x$). Ini mengintegrasikan di luar support, menghasilkan nilai $f_X(x)$ yang salah dan bahkan mungkin tidak valid sebagai PDF.
> > > - **Menghitung $P(0 \leq X \leq 1/2)$ via integral ganda langsung** tanpa memarginalkan lebih dulu — sebenarnya bisa, tetapi lebih rawan kesalahan dalam menentukan region integrasi. Pendekatan via marginal lebih sistematis.
> > > - Salah tanda saat mengevaluasi anti-turunan $-(1-x)^3$: pastikan substitusi batas atas dan bawah dilakukan dengan benar.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $P(0 \leq X \leq 1/2)$ adalah probabilitas **marginal** — artinya $Y$ bisa bernilai apa saja (sesuai support), bukan $Y = 0$ atau nilai tertentu.
> >
> > > [!CAUTION] Red Flags
> > > - Support berbentuk **segitiga** (ada syarat $x + y \leq 1$) → **selalu gambar region** terlebih dahulu sebelum menentukan batas integral. Batas atas $y$ bergantung pada $x$: $y_{\max} = 1-x$, **bukan** $1$.
> > > - Setelah mendapat $f_X(x)$, verifikasi dengan $\displaystyle\int_0^1 f_X(x)\,dx = 1$ sebelum melanjutkan.

---

## **No. 29**

Keluarga Suprapto memiliki 5 anak. Diasumsikan peluang lahir setiap anak Perempuan sebesar $0{,}5$ dan kelahiran dari setiap anak saling bebas, berapakah peluang keluarga Suprapto memiliki setidaknya 1 anak perempuan jika diketahui mereka memiliki setidaknya 1 anak laki-laki?

a. $\dfrac{31}{32}$  
b. $\dfrac{30}{31}$  
c. $\dfrac{15}{16}$  
d. $\dfrac{5}{31}$  
e. $\dfrac{5}{32}$

> [!summary]+ **Jawaban No. 29**
> 
> **(b). $\dfrac{30}{31}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.5 Kejadian Independen]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**
> > 
> > **Probabilitas Bersyarat:**
> > 
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> > 
> > **Hukum De Morgan:**
> > 
> > $$P(A \cup B) = 1 - P(A^c \cap B^c)$$
> > 
> > **Inklusi-Eksklusi:**
> > 
> > $$P(A \cap B) = 1 - P(A^c) - P(B^c) + P(A^c \cap B^c)$$
>
> **Diketahui:**
> - 5 anak, $p(\text{perempuan}) = 0{,}5$, setiap kelahiran independen
> - Definisikan:
>   - $F$ = setidaknya 1 anak perempuan
>   - $M$ = setidaknya 1 anak laki-laki
>   - $F^c$ = tidak ada anak perempuan = semua 5 anak laki-laki
>   - $M^c$ = tidak ada anak laki-laki = semua 5 anak perempuan
> - Target: $P(F \mid M)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Probabilitas Komplemen**
> >
> > $$P(F^c) = P(\text{semua laki-laki}) = \left(\frac{1}{2}\right)^5 = \frac{1}{32}$$
> > 
> > $$P(M^c) = P(\text{semua perempuan}) = \left(\frac{1}{2}\right)^5 = \frac{1}{32}$$
> >
> > **Langkah 2: Hitung $P(M)$ — Penyebut**
> >
> > $$P(M) = 1 - P(M^c) = 1 - \frac{1}{32} = \frac{31}{32}$$
> >
> > **Langkah 3: Hitung $P(F \cap M)$ — Pembilang**
> >
> > $F \cap M$ = ada setidaknya 1 perempuan **dan** setidaknya 1 laki-laki = **bukan** (semua perempuan atau semua laki-laki).
> >
> > Gunakan inklusi-eksklusi pada komplemen:
> > 
> > $$P((F \cap M)^c) = P(F^c \cup M^c) = P(F^c) + P(M^c) - P(F^c \cap M^c)$$
> >
> > Perhatikan: $F^c \cap M^c$ = semua perempuan **sekaligus** semua laki-laki = **mustahil** ($\emptyset$):
> > 
> > $$P(F^c \cap M^c) = 0$$
> >
> > Maka:
> > 
> > $$P((F \cap M)^c) = \frac{1}{32} + \frac{1}{32} - 0 = \frac{2}{32}$$
> > 
> > $$P(F \cap M) = 1 - \frac{2}{32} = \frac{30}{32}$$
> >
> > **Langkah 4: Terapkan Rumus Probabilitas Bersyarat**
> >
> > $$P(F \mid M) = \frac{P(F \cap M)}{P(M)} = \frac{30/32}{31/32} = \frac{30}{31}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{30}{31}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(F \mid M) = P(F) / P(M) = \dfrac{31/32}{31/32} = 1$ — ini salah karena pembilang harus $P(F \cap M)$, bukan $P(F)$.
> > > - Mengira $F$ dan $M$ saling bebas sehingga $P(F \cap M) = P(F) \times P(M)$ — tidak berlaku karena keduanya bergantung pada komposisi yang sama (5 anak).
> > > - Salah mengidentifikasi $F^c \cap M^c$: ini adalah kejadian **mustahil** (tidak mungkin 5 anak semuanya perempuan DAN semuanya laki-laki secara bersamaan), sehingga $P(F^c \cap M^c) = 0$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Setidaknya 1 perempuan" bukan berarti "tepat 1 perempuan". Komplemen dari "setidaknya 1 perempuan" adalah "tidak ada perempuan sama sekali" (semua laki-laki).
> >
> > > [!CAUTION] Red Flags
> > > - Soal bertipe "setidaknya... diketahui setidaknya..." → gunakan $P(A|B) = P(A \cap B)/P(B)$, dan hitung $P(A \cap B)$ via **komplemen** karena lebih mudah.
> > > - Strategi umum: $P(\text{setidaknya 1 dari X}) = 1 - P(\text{tidak ada X}) = 1 - (1-p)^n$.

---

## **No. 30**

Banyaknya lonjakan daya yang terjadi pada suatu jaringan listrik diketahui mengikuti distribusi Poisson dengan rataan 1 lonjakan daya setiap 12 jam. Berapakah peluang bahwa tidak akan terjadi lonjakan daya lebih dari satu kali dalam 24 jam?

a. $2e^{-2}$  
b. $3e^{-2}$  
c. $e^{-1/2}$  
d. $\dfrac{3}{2}e^{-1/2}$  
e. $e^{-1}$

> [!summary]+ **Jawaban No. 30**
> 
> **(b). $3e^{-2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**
> > 
> > **PMF Distribusi Poisson** dengan rate $\lambda$:
> > 
> > $$P(N = k) = \frac{e^{-\lambda}\lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$
> > 
> > **Sifat Skalabilitas Poisson terhadap Waktu:** Jika rata-rata kejadian adalah $\lambda_0$ per satuan waktu $t_0$, maka dalam waktu $t$:
> > 
> > $$\lambda_t = \lambda_0 \times \frac{t}{t_0}$$
> > 
> > Sehingga $N_t \sim \text{Poisson}(\lambda_t)$.
>
> **Diketahui:**
> - Rata-rata: 1 lonjakan per 12 jam → $\lambda_{12} = 1$
> - Periode yang ditanya: 24 jam
> - $\lambda_{24} = 1 \times \dfrac{24}{12} = 2$, sehingga $N_{24} \sim \text{Poisson}(2)$
> - "Tidak lebih dari satu kali" = $P(N_{24} \leq 1) = P(N_{24}=0) + P(N_{24}=1)$
> - Target: $P(N_{24} \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Skala Parameter Poisson ke Periode 24 Jam**
> >
> > Distribusi Poisson bersifat **aditif terhadap waktu**: jika dalam 12 jam rata-rata 1 lonjakan, maka dalam 24 jam (dua kali lipat periodenya) rata-ratanya dua kali lipat:
> > 
> > $$\lambda_{24} = 1 \times \frac{24}{12} = 2$$
> > 
> > Sehingga $N_{24} \sim \text{Poisson}(2)$.
> >
> > **Langkah 2: Interpretasi "Tidak Lebih dari Satu Kali"**
> >
> > "Tidak lebih dari satu kali" = $N_{24} \leq 1$ = $N_{24} \in \{0, 1\}$.
> > Ini mencakup dua kasus: **nol lonjakan** dan **tepat satu lonjakan**.
> >
> > **Langkah 3: Hitung $P(N_{24} = 0)$**
> >
> > $$P(N_{24} = 0) = \frac{e^{-2} \cdot 2^0}{0!} = \frac{e^{-2} \cdot 1}{1} = e^{-2}$$
> >
> > **Langkah 4: Hitung $P(N_{24} = 1)$**
> >
> > $$P(N_{24} = 1) = \frac{e^{-2} \cdot 2^1}{1!} = \frac{2e^{-2}}{1} = 2e^{-2}$$
> >
> > **Langkah 5: Jumlahkan**
> >
> > $$P(N_{24} \leq 1) = e^{-2} + 2e^{-2} = 3e^{-2}$$
> >
> > Secara numerik: $3e^{-2} \approx 3 \times 0{,}1353 = 0{,}4060$.
> >
> > **Hasil Akhir:** **(b)**. $3e^{-2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - **Lupa menskalakan $\lambda$**: menggunakan $\lambda = 1$ untuk 24 jam (alih-alih $\lambda = 2$). Ini menghasilkan $P(N \leq 1) = e^{-1} + e^{-1} = 2e^{-1}$ — tidak ada di opsi.
> > > - **Salah arah skala**: menggunakan $\lambda_{24} = 1/2$ (membagi alih-alih mengalikan) — ini keliru; periode yang **lebih panjang** → $\lambda$ **lebih besar**.
> > > - Lupa bahwa $0! = 1$ dan $1! = 1$, sehingga penyebutnya $= 1$ untuk kedua suku.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - **"Tidak lebih dari satu kali"** = $P(N \leq 1)$, mencakup $N=0$ dan $N=1$ — **bukan** hanya $P(N=1)$ atau $P(N < 1)$.
> > > - Bandingkan frasa yang sering dipertukarkan:
> > >   - "Tidak lebih dari 1" = $N \leq 1$ → hitung $P(0) + P(1)$
> > >   - "Kurang dari 1" = $N < 1$ → hanya $P(0)$
> > >   - "Setidaknya 1" = $N \geq 1$ → $1 - P(0)$
> > >   - "Lebih dari 1" = $N > 1$ → $1 - P(0) - P(1)$
> >
> > > [!CAUTION] Red Flags
> > > - Soal Poisson dengan **perubahan satuan waktu** → **skala $\lambda$ secara proporsional** sebelum menghitung apapun. Ini adalah langkah pertama yang wajib.
> > > - Jika opsi jawaban berbentuk $ke^{-\lambda}$ → pastikan nilai $\lambda$ sudah benar setelah penskalaaan.

---

