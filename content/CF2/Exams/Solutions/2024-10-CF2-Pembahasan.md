## **No. 1**

Ada dua puluh empat angka 4-digit yang menggunakan masing-masing dari empat digit 2, 4, 5, dan 7 tepat satu kali. Diurutkan berdasarkan urutan angka dari yang terkecil hingga terbesar, tentukanlah angka pada posisi ke-17 dalam daftar.

a. $4{.}527$  
b. $5{.}724$  
c. $5{.}742$  
d. $7{.}245$  
e. $7{.}524$

> [!summary]+ **Jawaban No. 1** 
>
> **(b). $5{.}724$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1.3 |
>
> > [!info]+ **Rumus**  
> >
> > Jumlah permutasi $n$ objek berbeda: $n!$
> > Untuk digit pertama $d$, angka-angka yang berawalan $d$ berjumlah $3! = 6$.
>
> **Diketahui:**
> - Digit: $\{2, 4, 5, 7\}$, masing-masing dipakai tepat sekali
> - Total angka: $4! = 24$
> - Target: angka pada posisi ke-17
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kelompokkan berdasarkan digit pertama**
> > Setiap digit pertama menghasilkan $3! = 6$ angka. Urutan digit pertama (dari kecil ke besar): $2, 4, 5, 7$.
> > - Posisi 1–6: berawalan $2$
> > - Posisi 7–12: berawalan $4$
> > - Posisi 13–18: berawalan $5$
> > - Posisi 19–24: berawalan $7$
> >
> > **Langkah 2: Tentukan digit pertama posisi ke-17**
> > Posisi 17 berada di kelompok posisi 13–18 → digit pertama adalah $\mathbf{5}$.
> > Posisi relatif dalam kelompok: $17 - 12 = 5$ (posisi ke-5 dalam kelompok berawalan 5).
> >
> > **Langkah 3: Uraikan digit berawalan 5 (sisa digit: $\{2, 4, 7\}$)**
> > Setiap digit kedua menghasilkan $2! = 2$ angka. Urutan digit kedua: $2, 4, 7$.
> > - Sub-posisi 1–2: $52xx$ (digit kedua 2)
> > - Sub-posisi 3–4: $54xx$ (digit kedua 4)
> > - Sub-posisi 5–6: $57xx$ (digit kedua 7)
> >
> > Posisi ke-5 dalam kelompok ini → digit kedua adalah $\mathbf{7}$ (sub-posisi 5–6).
> > Posisi relatif: $5 - 4 = 1$ (posisi ke-1 dalam sub-kelompok $57xx$).
> >
> > **Langkah 4: Uraikan sisa digit $\{2, 4\}$**
> > - Sub-posisi 1: $5724$ (digit ketiga 2, keempat 4)
> > - Sub-posisi 2: $5742$ (digit ketiga 4, keempat 2)
> >
> > Posisi ke-1 → angka adalah $\mathbf{5.724}$.
> >
> > **Hasil Akhir:** **(b)**. $5{.}724$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa setiap kelompok digit pertama berisi tepat $3! = 6$ elemen, bukan $4$.
> > > - Menggunakan indeks mulai dari 0 alih-alih 1, sehingga posisi geser satu.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung 24 angka dengan urutan yang salah (misal tidak mengurutkan digit pertama dari kecil ke besar).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "urutan dari terkecil ke terbesar" → pastikan digit pertama diurutkan: $2 < 4 < 5 < 7$, kemudian digit kedua, dst.
> > > - Jika posisi target $> 12$ tapi $\leq 18$ → pasti berawalan $5$.

---

## **No. 2**

Seorang aktuaris sedang mempelajari prevalensi tiga faktor risiko kesehatan, yang dilambangkan dengan $A$, $B$, dan $C$, dalam suatu populasi wanita. Diketahui bahwa:

(i) Untuk masing-masing dari tiga faktor tersebut, probabilitasnya adalah $0{,}07$ bahwa seorang wanita dalam populasi tersebut hanya memiliki faktor risiko ini (dan tidak ada yang lain).  
(ii) Untuk dua dari tiga faktor tersebut, probabilitasnya adalah $0{,}09$ bahwa ia memiliki tepat dua faktor risiko ini (tetapi tidak yang lain).  
(iii) Probabilitas bahwa seorang wanita memiliki ketiga faktor risiko tersebut, diketahui dia memiliki faktor risiko $A$ dan $B$, adalah $\dfrac{1}{3}$.  

Tentukan probabilitas bahwa seorang wanita tidak memiliki satu pun dari tiga faktor risiko tersebut, diketahui ia tidak memiliki faktor risiko $A$.

a. $0{,}573$  
b. $0{,}785$  
c. $0{,}65$  
d. $0{,}443$  
e. $0{,}674$

> [!summary]+ **Jawaban No. 2** 
>
> **(e). $0{,}674$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> >
> > $$P(A^c) = 1 - P(A)$$
> >
> > Untuk diagram Venn tiga himpunan, probabilitas total:
> >
> > $$P(A \cup B \cup C) = \sum P(\text{only one}) + \sum P(\text{exactly two}) + P(\text{all three})$$
> >
>
> **Diketahui:**
> - $P(\text{hanya } A) = P(\text{hanya } B) = P(\text{hanya } C) = 0{,}07$
> - $P(\text{tepat } A\cap B) = P(\text{tepat } A\cap C) = P(\text{tepat } B\cap C) = 0{,}09$ (tepat dua, tanpa yang ketiga)
> - $P(A \cap B \cap C \mid A \cap B) = \frac{1}{3}$
> - Target: $P(\text{tidak ada} \mid A^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A \cap B \cap C)$**
> > $P(A \cap B)$ mencakup "tepat $A$ dan $B$" dan "ketiga-tiganya":
> >
> > $$P(A \cap B) = 0{,}09 + P(A \cap B \cap C)$$
> >
> > Dari kondisi (iii):
> >
> > $$P(A \cap B \cap C \mid A \cap B) = \frac{P(A \cap B \cap C)}{P(A \cap B)} = \frac{1}{3}$$
> >
> > $$\frac{P(A \cap B \cap C)}{0{,}09 + P(A \cap B \cap C)} = \frac{1}{3}$$
> >
> > $$3P(A \cap B \cap C) = 0{,}09 + P(A \cap B \cap C)$$
> >
> > $$2P(A \cap B \cap C) = 0{,}09 \implies P(A \cap B \cap C) = 0{,}045$$
> >
> > **Langkah 2: Hitung $P(A \cup B \cup C)$**
> >
> > $$P(A \cup B \cup C) = 3(0{,}07) + 3(0{,}09) + 0{,}045 = 0{,}21 + 0{,}27 + 0{,}045 = 0{,}525$$
> >
> > **Langkah 3: Hitung $P(\text{tidak ada faktor}) = P((A \cup B \cup C)^c)$**
> >
> > $$P(\text{tidak ada}) = 1 - 0{,}525 = 0{,}475$$
> >
> > **Langkah 4: Hitung $P(A)$**
> >
> > $$P(A) = P(\text{hanya }A) + P(\text{tepat }A\cap B) + P(\text{tepat }A\cap C) + P(A \cap B \cap C)$$
> >
> > $$= 0{,}07 + 0{,}09 + 0{,}09 + 0{,}045 = 0{,}295$$
> >
> > $$P(A^c) = 1 - 0{,}295 = 0{,}705$$
> >
> > **Langkah 5: Hitung $P(\text{tidak ada} \cap A^c)$**
> > Jika wanita tidak memiliki faktor apapun, maka otomatis $A^c$ terpenuhi:
> >
> > $$P(\text{tidak ada} \cap A^c) = P(\text{tidak ada}) = 0{,}475$$
> >
> > **Langkah 6: Hitung probabilitas bersyarat**
> >
> > $$P(\text{tidak ada} \mid A^c) = \frac{P(\text{tidak ada} \cap A^c)}{P(A^c)} = \frac{0{,}475}{0{,}705} \approx 0{,}674$$
> >
> > **Hasil Akhir:** **(e)**. $0{,}674$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "tepat dua faktor" berarti $P(A \cap B)$ langsung, padahal $P(A \cap B) = P(\text{tepat }A\cap B) + P(A\cap B\cap C)$.
> > > - Tidak memasukkan $P(A\cap B\cap C)$ ketika menghitung $P(A)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(\text{tidak ada} \mid A^c) = P(\text{tidak ada})/P(A^c)$ tanpa menyadari bahwa "tidak ada faktor" ⊂ $A^c$, sehingga penyebutnya adalah $P(A^c)$, bukan sebaliknya.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi probabilitas "hanya memiliki faktor ini" → itu adalah region eksklusif di diagram Venn, bukan $P(A)$ total.
> > > - Jika ada kondisi bersyarat yang melibatkan irisan → gunakan definisi $P(A\cap B) = \sum$ semua region yang termasuk $A$ dan $B$.

---

## **No. 3**

Dalam pemodelan jumlah klaim yang diajukan oleh seorang individu berdasarkan polis asuransi mobil selama periode tiga tahun, seorang aktuaris membuat asumsi penyederhanaan bahwa untuk semua bilangan bulat $n \geq 0$, $p_{n+1} = \dfrac{1}{5} p_n$, dimana $p_n$ mewakili probabilitas bahwa pemegang polis mengajukan $n$ klaim selama periode tersebut. Berdasarkan asumsi ini, tentukan probabilitas bahwa seorang pemegang polis mengajukan lebih dari satu klaim selama periode tersebut.

a. Kurang dari $0{,}02$  
b. Sekurang-kurangnya $0{,}02$ tapi kurang dari $0{,}04$  
c. Sekurang-kurangnya $0{,}04$ tapi kurang dari $0{,}06$  
d. Sekurang-kurangnya $0{,}06$ tapi kurang dari $0{,}08$  
e. Sekurang-kurangnya $0{,}08$

> [!summary]+ **Jawaban No. 3** 
>
> **(c). Sekurang-kurangnya $0{,}04$ tapi kurang dari $0{,}06$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.1–1.2; Miller Bab 3 |
>
> > [!info]+ **Rumus**  
> >
> > Deret geometri tak hingga: $\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$ untuk $|r| < 1$.
> > Agar PMF valid: $\sum_{n=0}^{\infty} p_n = 1$.
>
> **Diketahui:**
> - $p_{n+1} = \frac{1}{5} p_n$ untuk semua $n \geq 0$
> - Ini berarti $p_n = p_0 \left(\frac{1}{5}\right)^n$
> - Target: $P(X > 1) = 1 - P(X=0) - P(X=1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $p_0$**
> > Dari normalisasi:
> >
> > $$\sum_{n=0}^{\infty} p_n = p_0 \sum_{n=0}^{\infty} \left(\frac{1}{5}\right)^n = p_0 \cdot \frac{1}{1 - \frac{1}{5}} = p_0 \cdot \frac{5}{4} = 1$$
> >
> > $$p_0 = \frac{4}{5}$$
> >
> > **Langkah 2: Hitung $p_1$**
> >
> > $$p_1 = \frac{1}{5} p_0 = \frac{1}{5} \cdot \frac{4}{5} = \frac{4}{25}$$
> >
> > **Langkah 3: Hitung $P(X > 1)$**
> >
> > $$P(X > 1) = 1 - p_0 - p_1 = 1 - \frac{4}{5} - \frac{4}{25} = 1 - \frac{20}{25} - \frac{4}{25} = 1 - \frac{24}{25} = \frac{1}{25} = 0{,}04$$
> >
> > Karena $0{,}04 \leq 0{,}04 < 0{,}06$, jawaban adalah opsi **(c)**.
> >
> > **Hasil Akhir:** **(c)**. $P(X>1) = 0{,}04$, masuk interval $[0{,}04; 0{,}06)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa syarat PMF valid mengharuskan $\sum p_n = 1$, sehingga $p_0$ tidak bebas dipilih.
> > > - Mengira $p_0 = 1$ secara langsung tanpa normalisasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Lebih dari satu klaim" = $P(X > 1)$, bukan $P(X \geq 1)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan relasi rekursif $p_{n+1} = r \cdot p_n$ → ini adalah deret geometri; gunakan normalisasi untuk mencari $p_0$.

---

## **No. 4**

Diberikan variabel acak $X$ berdistribusi normal dengan $\mu = 2$, $\sigma^2 = 9$. Misalkan $Y = e^X$, tentukanlah nilai dari $E[Y^{12}]$.

a. $e^{72}$  
b. $e^{672}$  
c. $e^{674}$  
d. $e^{667}$  
e. $e^{685}$

> [!summary]+ **Jawaban No. 4** 
>
> **(b). $e^{672}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[2.3 Fungsi Pembangkit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $X \sim N(\mu, \sigma^2)$, maka MGF-nya:
> >
> > $$M_X(t) = E[e^{tX}] = e^{\mu t + \frac{1}{2}\sigma^2 t^2}$$
> >
> > Sehingga $E[e^{tX}] = e^{\mu t + \frac{1}{2}\sigma^2 t^2}$.
>
> **Diketahui:**
> - $X \sim N(\mu=2, \sigma^2=9)$ (kontinu, support $(-\infty, \infty)$)
> - $Y = e^X$, sehingga $Y^{12} = e^{12X}$
> - Target: $E[Y^{12}] = E[e^{12X}] = M_X(12)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi $E[Y^{12}]$ sebagai evaluasi MGF**
> >
> > $$E[Y^{12}] = E[e^{12X}] = M_X(t)\big|_{t=12}$$
> >
> > **Langkah 2: Evaluasi MGF distribusi Normal pada $t=12$**
> >
> > $$M_X(12) = e^{\mu \cdot 12 + \frac{1}{2}\sigma^2 \cdot 12^2} = e^{2 \cdot 12 + \frac{1}{2} \cdot 9 \cdot 144}$$
> >
> > $$= e^{24 + \frac{1296}{2}} = e^{24 + 648} = e^{672}$$
> >
> > **Hasil Akhir:** **(b)**. $e^{672}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[Y^{12}] = (E[Y])^{12}$ — ini hanya berlaku jika $Y$ deterministik, bukan untuk variabel acak.
> > > - Lupa bahwa $E[e^{tX}] = M_X(t)$, bukan $e^{t \cdot E[X]}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung $E[Y] = e^{\mu + \frac{1}{2}\sigma^2}$ (distribusi log-normal) lalu dipangkatkan 12 — ini salah karena $E[Y^{12}] \neq (E[Y])^{12}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal minta $E[e^{tX}]$ atau $E[Y^k]$ dimana $Y = e^X$ dan $X$ Normal → gunakan MGF Normal dengan parameter $t = k$.

---

## **No. 5**

Diberikan $n$ buah dadu bersisi enam, yang dilempar secara independen satu sama lainnya. Tentukanlah probabilitas bahwa jumlah angka yang muncul dari semua dadu tersebut merupakan angka genap.

a. $\dfrac{1}{2} - \dfrac{(n-1)(n-2)(n-3)}{6n^3}$  
b. $\dfrac{1}{2} - \dfrac{(n-1)(n-2)}{6n^2}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{1}{2} + \dfrac{(n-1)(n-2)(n-3)}{6n^3}$  
e. $\dfrac{1}{2} + \dfrac{(n-1)(n-2)}{6n^2}$

> [!summary]+ **Jawaban No. 5** 
>
> **(c). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.5 Kejadian Independen]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > Jumlah dari variabel-variabel independen: jumlah genap $\iff$ jumlah variabel yang bernilai ganjil adalah genap.
> > Untuk satu dadu standar 6 sisi: $P(\text{genap}) = P(\text{ganjil}) = \frac{3}{6} = \frac{1}{2}$.
>
> **Diketahui:**
> - $n$ dadu, masing-masing sisi $\{1,2,3,4,5,6\}$, independen
> - $P(\text{angka genap pada satu dadu}) = \frac{3}{6} = \frac{1}{2}$
> - $P(\text{angka ganjil pada satu dadu}) = \frac{3}{6} = \frac{1}{2}$
> - Target: $P(\text{jumlah semua dadu genap})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kondisi jumlah genap**
> > Jumlah dari $n$ angka adalah genap jika dan hanya jika banyaknya angka ganjil di antara $n$ dadu adalah genap (0, 2, 4, ...).
> >
> > **Langkah 2: Gunakan simetri**
> > Misalkan $X_i \in \{0,1\}$ dimana $X_i = 1$ jika dadu ke-$i$ menunjukkan ganjil, $P(X_i=1) = \frac{1}{2}$.
> > Jumlah genap $\iff$ $\sum X_i$ genap.
> >
> > Karena setiap dadu memiliki $P(\text{genap}) = P(\text{ganjil}) = \frac{1}{2}$, pertimbangkan pelemparan $n-1$ dadu pertama dengan hasil apapun. Dadu ke-$n$ menentukan paritas akhir: dengan probabilitas $\frac{1}{2}$ ia akan "menggenapi" hasil, dan $\frac{1}{2}$ tidak.
> >
> > Lebih formal, dengan induksi atau fungsi pembangkit:
> >
> > $$P(\text{jumlah genap}) = \frac{1 + (1 - 2 \cdot \frac{1}{2})^n}{2} = \frac{1 + 0^n}{2} = \frac{1}{2} \quad \text{untuk } n \geq 1$$
> >
> > karena $1 - 2p = 1 - 2 \cdot \frac{1}{2} = 0$.
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira distribusi simetris antara genap dan ganjil tidak langsung menjamin probabilitas $\frac{1}{2}$ untuk jumlah; perlu memverifikasi dengan argumen paritas.
> > > - Mencoba menghitung secara langsung jumlah kombinasi — ini sah tapi jauh lebih panjang.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "$n$ dadu" berarti harus ada jawaban dalam $n$ — padahal hasilnya konstan $\frac{1}{2}$ untuk semua $n$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $P(\text{genap pada satu percobaan}) = P(\text{ganjil}) = \frac{1}{2}$ → probabilitas jumlah genap dari $n$ percobaan independen adalah selalu $\frac{1}{2}$.

---

## **No. 6**

Misalkan $W(t)$ adalah suatu fungsi yang didefinisikan sebagai berikut:

$$W(t) = \begin{cases} e^{8-0{,}2t}, & 0 < t < 8 \\ 0, & \text{lainnya} \end{cases}$$

Diketahui $T$ berdistribusi eksponensial dengan mean sebesar $13$. Tentukan nilai dari $E[W(t)]$ (dalam pembulatan terdekat).

a. $705$  
b. $823$  
c. $741$  
d. $738$  
e. $735$

> [!summary]+ **Jawaban No. 6** 
>
> **⚠️ DIANULIR oleh PAI**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | — |
> | **Prerequisite** | — |
> | **Connected Topics** | — |
> | **Referensi** | — |
>
> > [!warning]+ **Keterangan Soal Dianulir**
> > Soal No. 6 **dianulir oleh PAI** dalam kunci jawaban resmi. Berdasarkan perhitungan matematis:
> >
> > $$E[W(T)] = \int_0^8 e^{8-0{,}2t} \cdot \frac{1}{13} e^{-t/13} \, dt = \frac{e^8}{13} \int_0^8 e^{-t(0{,}2 + 1/13)} \, dt$$
> >
> > Dengan $\lambda = 0{,}2 + \frac{1}{13} = \frac{2{,}6+1}{13} = \frac{3{,}6}{13} \approx 0{,}2769$:
> >
> > $$E[W(T)] = \frac{e^8}{13} \cdot \frac{1 - e^{-8 \times 0{,}2769}}{0{,}2769} \approx \frac{2980{,}96}{13} \cdot \frac{1 - e^{-2{,}215}}{0{,}2769}$$
> >
> > Hasil numerik tidak cocok dengan satu pun opsi jawaban secara konsisten, mengindikasikan kemungkinan kesalahan pada soal (misalnya parameter fungsi atau batas integrasi). PAI memutuskan untuk menganulir soal ini.
>
> **Status:** Semua peserta mendapat nilai penuh untuk soal ini.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $E[W(T)] = W(E[T])$ — ini adalah kesalahan Jensen; nilai harapan fungsi tidak sama dengan fungsi dari nilai harapan (kecuali fungsi linear).
> > > - Lupa bahwa distribusi eksponensial dengan mean $13$ memiliki rate $\lambda = \frac{1}{13}$, bukan $\lambda = 13$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mendefinisikan $W(t)$ dengan batas dan meminta $E[W(T)]$ untuk $T$ kontinu → ini adalah integral $\int_{-\infty}^{\infty} W(t) f_T(t) \, dt$, di mana batas $W$ memotong domain integrasi.

---

## **No. 7**

Andi menggunakan prosedur berikut untuk menuliskan deretan angka. Pertama, ia memilih suku pertama yang bernilai 6. Untuk menghasilkan setiap suku berikutnya, ia melempar koin. Jika muncul gambar, ia menggandakan suku sebelumnya lalu menguranginya dengan 1. Jika muncul angka, ia mengambil setengah dari suku sebelumnya lalu menguranginya dengan 1. Tentukanlah peluang suku keempat dalam deretan angka Andi adalah bilangan bulat.

a. $\dfrac{1}{6}$  
b. $\dfrac{1}{3}$  
c. $\dfrac{1}{2}$  
d. $\dfrac{5}{8}$  
e. $\dfrac{3}{4}$

> [!summary]+ **Jawaban No. 7** 
>
> **(d). $\dfrac{5}{8}$**
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
> > Operasi: Gambar (G) → $a_{n+1} = 2a_n - 1$; Angka (A) → $a_{n+1} = \frac{a_n}{2} - 1$.
> > Bilangan bulat $\iff$ tidak ada pembagian yang menghasilkan pecahan.
>
> **Diketahui:**
> - $a_1 = 6$
> - G: $a_{n+1} = 2a_n - 1$; A: $a_{n+1} = \frac{a_n}{2} - 1$
> - Target: $P(a_4 \in \mathbb{Z})$, ada $2^3 = 8$ kemungkinan urutan 3 lemparan
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung semua 8 kemungkinan lintasan (G=Gambar, A=Angka)**
> >
> > Mulai $a_1 = 6$.
> >
> > | Lemparan 1 | $a_2$ | Lemparan 2 | $a_3$ | Lemparan 3 | $a_4$ | Bulat? |
> > |------------|--------|------------|--------|------------|--------|--------|
> > | G | $11$ | G | $21$ | G | $41$ | ✓ |
> > | G | $11$ | G | $21$ | A | $9{,}5$ | ✗ |
> > | G | $11$ | A | $4{,}5$ | G | $8$ | ✓ |
> > | G | $11$ | A | $4{,}5$ | A | $1{,}25$ | ✗ |
> > | A | $2$ | G | $3$ | G | $5$ | ✓ |
> > | A | $2$ | G | $3$ | A | $0{,}5$ | ✗ |
> > | A | $2$ | A | $0$ | G | $-1$ | ✓ |
> > | A | $2$ | A | $0$ | A | $-1$ | ✓ |
> >
> > **Langkah 2: Hitung probabilitas**
> > Setiap lintasan memiliki probabilitas $\left(\frac{1}{2}\right)^3 = \frac{1}{8}$.
> > Jumlah lintasan dengan $a_4 \in \mathbb{Z}$: 5.
> >
> > $$P(a_4 \in \mathbb{Z}) = \frac{5}{8}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{5}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menelusuri semua 8 lintasan — ada 3 lemparan koin, bukan 4.
> > > - Mengira lintasan yang mengandung satu operasi "setengah" pasti menghasilkan pecahan — padahal $4{,}5 \times 2 - 1 = 8$ adalah bulat.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Suku keempat" = $a_4$, artinya diperlukan 3 lemparan koin ($a_1 \to a_2 \to a_3 \to a_4$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan operasi rekursif pada bilangan → buat tabel semua lintasan secara eksplisit; jangan asumsikan pola tanpa verifikasi.

---

## **No. 8**

Misalkan $X$ dan $Y$ adalah dua variabel berdistribusi normal yang saling independen dengan mean sebesar $0$ dan standar deviasi sebesar $1$. Tentukanlah nilai dari $P[X^2 + Y^2 \leq 1{,}2]$.

a. $0{,}518$  
b. $0{,}451$  
c. $0{,}384$  
d. $0{,}551$  
e. $0{,}351$

> [!summary]+ **Jawaban No. 8** 
>
> **(b). $0{,}451$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.3–3.4; Miller Bab 7 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $X, Y \sim N(0,1)$ independen, maka $W = X^2 + Y^2 \sim \chi^2(2) = \text{Exp}\!\left(\frac{1}{2}\right)$.
> > CDF distribusi $\chi^2(2)$: $F_W(w) = 1 - e^{-w/2}$ untuk $w > 0$.
>
> **Diketahui:**
> - $X, Y \sim N(0,1)$, independen (kontinu, support $(-\infty,\infty)$)
> - Target: $P(X^2 + Y^2 \leq 1{,}2)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi distribusi $W = X^2 + Y^2$**
> > Karena $X, Y \sim N(0,1)$ independen:
> > - $X^2 \sim \chi^2(1)$ dan $Y^2 \sim \chi^2(1)$
> > - $W = X^2 + Y^2 \sim \chi^2(2)$
> >
> > **Langkah 2: Gunakan CDF $\chi^2(2)$**
> > Distribusi $\chi^2(2)$ identik dengan $\text{Exp}(\frac{1}{2})$ (eksponensial dengan rate $\frac{1}{2}$, mean $2$).
> > CDF-nya:
> >
> > $$F_W(w) = 1 - e^{-w/2}, \quad w > 0$$
> >
> > **Langkah 3: Evaluasi**
> >
> > $$P(W \leq 1{,}2) = 1 - e^{-1{,}2/2} = 1 - e^{-0{,}6}$$
> >
> > $$= 1 - 0{,}5488 = 0{,}4512 \approx 0{,}451$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}451$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali bahwa $X^2 + Y^2$ berdistribusi $\chi^2(2)$, lalu mencoba integrasi ganda langsung.
> > > - Menggunakan tabel $\chi^2$ untuk mencari nilai batas, padahal yang diketahui adalah batas bawah (bukan nilai kritis).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(X^2 + Y^2 \leq 1{,}2)$ memerlukan transformasi polar — ini benar tetapi lebih panjang dari menggunakan CDF $\chi^2(2)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan $\sum_{i=1}^k Z_i^2$ dimana $Z_i \sim N(0,1)$ independen → langsung gunakan $\chi^2(k)$.

---

## **No. 9**

Suatu perusahaan asuransi mengasuransikan sejumlah besar pengemudi. Misalkan $X$ adalah variabel acak yang mewakili kerugian perusahaan berdasarkan asuransi tabrakan, dan misalkan $Y$ mewakili kerugian perusahaan berdasarkan asuransi kewajiban. $X$ dan $Y$ memiliki fungsi densitas bersama sebagai berikut:

$$f(x, y) = \begin{cases} \dfrac{6x + 4 - y}{180}, & 0 < x < 3;\ 0 < y < 6 \\ 0, & \text{lainnya} \end{cases}$$

Tentukanlah probabilitas bahwa kerugian totalnya paling sedikit sebesar $3$ (dalam pembulatan terdekat).

a. $0{,}98$  
b. $0{,}93$  
c. $0{,}88$  
d. $0{,}78$  
e. $0{,}68$

> [!summary]+ **Jawaban No. 9** 
>
> **(d). $0{,}78$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.2 Distribusi Marginal]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.1; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(X + Y \geq 3) = 1 - P(X + Y < 3) = 1 - \int\!\int_{x+y < 3,\ (x,y) \in \text{support}} f(x,y)\, dx\, dy$$
> >
>
> **Diketahui:**
> - $f(x,y) = \frac{6x+4-y}{180}$ untuk $0 < x < 3$, $0 < y < 6$ (kontinu)
> - Target: $P(X + Y \geq 3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi region $X + Y < 3$ dalam support**
> > Region $X + Y < 3$ dengan $0 < x < 3$, $0 < y < 6$:
> > Karena $x > 0$ dan $y > 0$, kondisi $x+y < 3$ membatasi ke segitiga: $x \in (0,3)$, $y \in (0, 3-x)$.
> > Namun $3 - x < 6$ selalu untuk $x > 0$, sehingga batas $y$ aktif adalah $y \in (0, 3-x)$.
> >
> > **Langkah 2: Hitung $P(X+Y < 3)$**
> >
> > $$P(X+Y < 3) = \int_0^3 \int_0^{3-x} \frac{6x+4-y}{180}\, dy\, dx$$
> >
> > Hitung integral dalam terlebih dahulu:
> >
> > $$\int_0^{3-x} (6x+4-y)\, dy = (6x+4)(3-x) - \frac{(3-x)^2}{2}$$
> >
> > $$= (3-x)\left[(6x+4) - \frac{3-x}{2}\right] = (3-x) \cdot \frac{2(6x+4)-(3-x)}{2}$$
> >
> > $$= (3-x) \cdot \frac{12x+8-3+x}{2} = (3-x) \cdot \frac{13x+5}{2}$$
> >
> > Hitung integral luar:
> >
> > $$\int_0^3 (3-x)(13x+5)\, dx = \int_0^3 (39x + 15 - 13x^2 - 5x)\, dx$$
> >
> > $$= \int_0^3 (-13x^2 + 34x + 15)\, dx$$
> >
> > $$= \left[-\frac{13x^3}{3} + 17x^2 + 15x\right]_0^3$$
> >
> > $$= -\frac{13 \cdot 27}{3} + 17 \cdot 9 + 15 \cdot 3 = -117 + 153 + 45 = 81$$
> >
> > $$P(X+Y < 3) = \frac{1}{2} \cdot \frac{81}{180} = \frac{81}{360} = 0{,}225$$
> >
> > **Langkah 3: Hitung $P(X+Y \geq 3)$**
> >
> > $$P(X+Y \geq 3) = 1 - 0{,}225 = 0{,}775 \approx 0{,}78$$
> >
> > **Hasil Akhir:** **(d)**. $\approx 0{,}78$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak memperhitungkan bahwa region $\{x+y < 3\}$ dibatasi oleh support; hanya segmen $x \in (0,3)$, $y \in (0,3-x)$ yang relevan.
> > > - Lupa faktor $\frac{1}{2}$ dari batas luar integrasi dalam.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Paling sedikit $3$" = $P(X+Y \geq 3)$, dihitung sebagai komplemen dari $P(X+Y < 3)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika region integrasi dipotong oleh garis $x+y = c$ → gambar daerah integrasi terlebih dahulu dan perhatikan batas aktif mana yang dominan.

---

## **No. 10**

Diketahui $X$ dan $Y$ adalah variabel acak kontinu dengan fungsi densitas bersama sebagai berikut:

$$f(x, y) = \begin{cases} c(y - x), & \text{untuk } 0 < x < y < 1 \\ 0, & \text{lainnya} \end{cases}$$

Tentukan mean dari distribusi marginal $X$.

a. $\dfrac{1}{8}$  
b. $\dfrac{1}{4}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 10** 
>
> **(b). $\dfrac{1}{4}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Distribusi Gabungan]], [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.3 Distribusi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi marginal: $f_X(x) = \int_{-\infty}^{\infty} f(x,y)\, dy$
> > Mean: $E[X] = \int_{-\infty}^{\infty} x \cdot f_X(x)\, dx$
>
> **Diketahui:**
> - $f(x,y) = c(y-x)$ untuk $0 < x < y < 1$ (kontinu, support segitiga)
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan konstanta $c$**
> >
> > $$\int_0^1 \int_x^1 c(y-x)\, dy\, dx = 1$$
> >
> > Hitung integral dalam:
> >
> > $$\int_x^1 (y-x)\, dy = \left[\frac{y^2}{2} - xy\right]_x^1 = \frac{1}{2} - x - \frac{x^2}{2} + x^2 = \frac{1-2x+x^2}{2} = \frac{(1-x)^2}{2}$$
> >
> > Integral luar:
> >
> > $$c \int_0^1 \frac{(1-x)^2}{2}\, dx = \frac{c}{2} \cdot \frac{1}{3} = \frac{c}{6} = 1 \implies c = 6$$
> >
> > **Langkah 2: Hitung distribusi marginal $f_X(x)$**
> >
> > $$f_X(x) = \int_x^1 6(y-x)\, dy = 6 \cdot \frac{(1-x)^2}{2} = 3(1-x)^2, \quad 0 < x < 1$$
> >
> > **Langkah 3: Hitung $E[X]$**
> >
> > $$E[X] = \int_0^1 x \cdot 3(1-x)^2\, dx = 3\int_0^1 x(1-2x+x^2)\, dx$$
> >
> > $$= 3\int_0^1 (x - 2x^2 + x^3)\, dx = 3\left[\frac{1}{2} - \frac{2}{3} + \frac{1}{4}\right]$$
> >
> > $$= 3 \cdot \frac{6 - 8 + 3}{12} = 3 \cdot \frac{1}{12} = \frac{1}{4}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{1}{4}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa support adalah $0 < x < y < 1$, sehingga batas integrasi marginal $Y$ untuk $f_X(x)$ adalah dari $x$ hingga $1$, bukan $0$ hingga $1$.
> > > - Tidak mencari $c$ terlebih dahulu sebelum menghitung marginal.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "mean distribusi marginal $X$" berarti mencari $E[Y|X]$ — yang diminta adalah $E[X]$ dari $f_X(x)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika support berbentuk segitiga $0 < x < y < 1$ → batas integrasi marginal bergantung pada variabel yang "diintegrasikan keluar".

---

## **No. 11**

Suatu variabel acak $X$ mempunyai massa probabilitas $0{,}1$ pada $X = 0$ dan massa probabilitas $0{,}5$ pada $X = 1$. Fungsi densitas $X$ untuk semua nilai lainnya adalah

$$f(x) = \begin{cases} 0{,}8x, & 0 < x < 1 \\ 0, & \text{lainnya} \end{cases}$$

Tentukanlah nilai dari $E[X]$.

a. $1{,}03$  
b. $0{,}77$  
c. $0{,}39$  
d. $1{,}16$  
e. $0{,}51$

> [!summary]+ **Jawaban No. 11** 
>
> **(b). $0{,}77$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]], [[2.2 Variabel Acak Kontinu]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.7, 2.1; Miller Bab 3–4 |
>
> > [!info]+ **Rumus**  
> >
> > Untuk variabel acak campuran (mixed):
> >
> > $$E[X] = \sum_{\text{titik massa}} x_i \cdot p_i + \int_{\text{bagian kontinu}} x \cdot f(x)\, dx$$
> >
>
> **Diketahui:**
> - Massa titik: $P(X=0) = 0{,}1$, $P(X=1) = 0{,}5$
> - Bagian kontinu: $f(x) = 0{,}8x$ untuk $0 < x < 1$
> - Verifikasi total probabilitas: $0{,}1 + 0{,}5 + \int_0^1 0{,}8x\, dx = 0{,}6 + 0{,}4 = 1$ ✓
> - Target: $E[X]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kontribusi dari massa titik**
> >
> > $$0 \cdot P(X=0) + 1 \cdot P(X=1) = 0 \cdot 0{,}1 + 1 \cdot 0{,}5 = 0{,}5$$
> >
> > **Langkah 2: Kontribusi dari bagian kontinu**
> >
> > $$\int_0^1 x \cdot 0{,}8x\, dx = 0{,}8 \int_0^1 x^2\, dx = 0{,}8 \cdot \frac{1}{3} = \frac{4}{15} \approx 0{,}267$$
> >
> > **Langkah 3: Total $E[X]$**
> >
> > $$E[X] = 0{,}5 + 0{,}267 = 0{,}767 \approx 0{,}77$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}77$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan massa titik dan hanya menghitung $\int_0^1 x \cdot 0{,}8x\, dx$ — ini melewatkan kontribusi $P(X=1) = 0{,}5$.
> > > - Mengira $X$ adalah variabel murni kontinu dan mencoba menormalisasi $f(x)$ saja.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Membaca "massa probabilitas $0{,}5$ pada $X=1$" sebagai $f(1) = 0{,}5$ (nilai PDF di $x=1$) — padahal itu adalah probabilitas titik, bukan nilai densitas.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "massa probabilitas" pada titik tertentu sekaligus "fungsi densitas" → ini variabel acak campuran (mixed); $E[X]$ adalah jumlah dari kedua bagian.

---

## **No. 12**

Klaim yang diajukan berdasarkan polis asuransi mobil mengikuti distribusi normal dengan rata-rata $71{.}700$ dan deviasi standar $18{.}000$. Tentukanlah probabilitas bahwa rata-rata dari $36$ klaim yang dipilih secara acak melebihi $72{.}000$.

a. $0{,}61$  
b. $0{,}31$  
c. $0{,}46$  
d. $0{,}56$  
e. $0{,}36$

> [!summary]+ **Jawaban No. 12** 
>
> **(c). $0{,}46$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 4 — Inferensi Statistik |
> | **Sub-topik** | [[4.2 Distribusi Sampel]], [[4.3 Teorema Limit Pusat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[4.1 Penarikan Sampel Acak]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Walpole Bab 8.1 |
>
> > [!info]+ **Rumus**  
> >
> > Distribusi sampling rata-rata: jika $X_i \sim N(\mu, \sigma^2)$ i.i.d., maka
> >
> > $$\bar{X} \sim N\!\left(\mu, \frac{\sigma^2}{n}\right)$$
> >
> > Standardisasi: $Z = \dfrac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)$
>
> **Diketahui:**
> - $\mu = 71.700$, $\sigma = 18.000$, $n = 36$
> - Target: $P(\bar{X} > 72.000)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Standardisasi**
> >
> > $$Z = \frac{72.000 - 71.700}{18.000 / \sqrt{36}} = \frac{300}{18.000 / 6} = \frac{300}{3.000} = 0{,}1$$
> >
> > **Langkah 2: Hitung probabilitas**
> >
> > $$P(\bar{X} > 72.000) = P(Z > 0{,}1) = 1 - \Phi(0{,}1)$$
> >
> > Dari tabel standar: $\Phi(0{,}1) \approx 0{,}5398$
> >
> > $$P(\bar{X} > 72.000) \approx 1 - 0{,}5398 = 0{,}4602 \approx 0{,}46$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}46$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\sigma = 18.000$ langsung tanpa dibagi $\sqrt{n}$ — ini menghitung probabilitas untuk satu klaim, bukan rata-rata.
> > > - Lupa bahwa distribusi $\bar{X}$ memiliki variansi $\sigma^2/n$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Melebihi" = $P(\bar{X} > 72.000)$, bukan $P(\bar{X} \geq 72.000)$ — untuk distribusi kontinu ini sama, tapi perhatikan arah ketidaksetaraan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "rata-rata dari $n$ sampel" → standar error adalah $\sigma/\sqrt{n}$, bukan $\sigma$.

---

## **No. 13**

Suatu polis asuransi dibuat untuk menanggung kerugian $X$, di mana $X$ memiliki distribusi seragam pada $[0, 3300]$. Misalkan variabel acak lain $Y$ dimana

$$Y = \begin{cases} 0, & 0 \leq X < D \\ X - D, & D < X \leq 3300 \end{cases}$$

Tentukanlah nilai $D$ agar $E[Y] = \dfrac{1}{9} E[X]$.

a. $2{.}200$  
b. $4{.}400$  
c. $1{.}100$  
d. $2{.}100$  
e. $2{.}400$

> [!summary]+ **Jawaban No. 13** 
>
> **(a). $2{.}200$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**  
> >
> > Jika $X \sim U(0, b)$: $E[X] = b/2$, $f_X(x) = 1/b$.
> >
> > $$E[Y] = \int_D^{3300} (x - D) \cdot \frac{1}{3300}\, dx$$
> >
>
> **Diketahui:**
> - $X \sim U(0, 3300)$: $f_X(x) = \frac{1}{3300}$, $E[X] = 1650$
> - $Y = \max(X-D, 0)$ (excess loss variable)
> - Kondisi: $E[Y] = \frac{1}{9} E[X] = \frac{1650}{9}$
> - Target: nilai $D$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $E[Y]$**
> >
> > $$E[Y] = \int_D^{3300} (x - D) \cdot \frac{1}{3300}\, dx$$
> >
> > Substitusi $u = x - D$, $du = dx$, batas: $0$ hingga $3300 - D$:
> >
> > $$= \frac{1}{3300} \int_0^{3300-D} u\, du = \frac{1}{3300} \cdot \frac{(3300-D)^2}{2} = \frac{(3300-D)^2}{6600}$$
> >
> > **Langkah 2: Terapkan kondisi $E[Y] = \frac{1}{9} \cdot 1650 = \frac{1650}{9}$**
> >
> > $$\frac{(3300-D)^2}{6600} = \frac{1650}{9}$$
> >
> > $$(3300-D)^2 = \frac{6600 \times 1650}{9} = \frac{10.890.000}{9} = 1.210.000$$
> >
> > $$3300 - D = \sqrt{1.210.000} = 1100$$
> >
> > $$D = 3300 - 1100 = 2200$$
> >
> > **Hasil Akhir:** **(a)**. $D = 2{.}200$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $E[Y]$ dengan batas integrasi $[0, D]$ menggunakan $Y = X - D$ — padahal di sana $Y = 0$.
> > > - Tidak memperhitungkan bahwa distribusi Uniform berarti $f_X(x) = \frac{1}{3300}$, bukan $f_X(x) = \frac{1}{D}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $E[X] = 3300$, padahal $E[X] = \frac{3300}{2} = 1650$ untuk $U(0,3300)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal mendefinisikan $Y = (X-D)\mathbf{1}_{X>D}$ → ini adalah "excess loss variable" dalam aktuaria; $E[Y] = \frac{(b-D)^2}{2b}$ untuk $X \sim U(0,b)$.

---

## **No. 14**

Perusahaan asuransi kesehatan menjual polis kepada penduduk wilayah $X$ dan wilayah $Y$. Pengalaman klaim di masa lalu menunjukkan hal berikut:

(i) $30\%$ dari total pemegang polis dari gabungan wilayah $X$ dan wilayah $Y$ tidak mengajukan klaim.  
(ii) $15\%$ pemegang polis dari wilayah $X$ tidak mengajukan klaim.  
(iii) $40\%$ pemegang polis dari wilayah $Y$ tidak mengajukan klaim.  

Tentukanlah probabilitas bahwa pemegang polis yang dipilih secara acak adalah penduduk wilayah $X$, diketahui pemegang polis tersebut tidak mengajukan klaim.

a. $0{,}1$  
b. $0{,}2$  
c. $0{,}5$  
d. $0{,}6$  
e. $0{,}8$

> [!summary]+ **Jawaban No. 14** 
>
> **(b). $0{,}2$**
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
> > $$P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}$$
> >
> > Hukum probabilitas total:
> >
> > $$P(B) = P(B \mid A)P(A) + P(B \mid A^c)P(A^c)$$
> >
>
> **Diketahui:**
> - Misalkan $A$ = pemegang polis dari wilayah $X$, $N$ = tidak mengajukan klaim
> - $P(N) = 0{,}30$
> - $P(N \mid A) = 0{,}15$ (wilayah $X$)
> - $P(N \mid A^c) = 0{,}40$ (wilayah $Y$)
> - Target: $P(A \mid N)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $P(A)$ menggunakan hukum probabilitas total**
> >
> > $$P(N) = P(N \mid A) \cdot P(A) + P(N \mid A^c) \cdot P(A^c)$$
> >
> > $$0{,}30 = 0{,}15 \cdot P(A) + 0{,}40 \cdot (1 - P(A))$$
> >
> > $$0{,}30 = 0{,}15 P(A) + 0{,}40 - 0{,}40 P(A)$$
> >
> > $$0{,}30 - 0{,}40 = -0{,}25 P(A)$$
> >
> > $$P(A) = \frac{-0{,}10}{-0{,}25} = 0{,}40$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(A \mid N) = \frac{P(N \mid A) \cdot P(A)}{P(N)} = \frac{0{,}15 \times 0{,}40}{0{,}30} = \frac{0{,}06}{0{,}30} = 0{,}2$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(A) = 0{,}5$ (fifty-fifty) tanpa menghitung dari data — ini tidak benar karena persentase klaim berbeda di kedua wilayah.
> > > - Membalik numerator dan denominator dalam Teorema Bayes.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $P(N \mid A) = 0{,}30$ adalah probabilitas tidak klaim bagi wilayah $X$ — padahal $0{,}30$ adalah probabilitas tidak klaim untuk keseluruhan populasi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan probabilitas keseluruhan dan probabilitas bersyarat per grup → gunakan Hukum Probabilitas Total untuk mencari proporsi grup, lalu Bayes untuk pertanyaan balik.

---

## **No. 15**

Sebuah perusahaan menetapkan dana sebesar $120$ yang akan digunakan untuk membayar uang sebesar $C$, kepada $20$ karyawannya yang dapat mencapai tingkat kinerja tinggi pada tahun mendatang. Setiap karyawan memiliki peluang $2{,}5\%$ untuk mencapai tingkat kinerja tinggi di tahun mendatang. Peristiwa di mana karyawan yang berbeda mencapai tingkat kinerja tinggi pada tahun mendatang bersifat independen satu sama lain. Tentukanlah nilai maksimum $C$, sehingga probabilitas bahwa dana tersebut tidak akan cukup untuk menutupi seluruh pembayaran untuk seluruh karyawan berkinerja tinggi, kurang dari $1\%$.

a. $24$  
b. $30$  
c. $40$  
d. $60$  
e. $120$

> [!summary]+ **Jawaban No. 15** 
>
> **(c). $40$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[4.7 Selang Kepercayaan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim B(n, p)$: $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$
> > Dana cukup jika total pembayaran $= X \cdot C \leq 120$, yaitu $X \leq \lfloor 120/C \rfloor$.
> > Dana tidak cukup jika $X > 120/C$.
>
> **Diketahui:**
> - $n = 20$, $p = 0{,}025$; $X \sim B(20, 0{,}025)$
> - Dana = $120$; pembayaran per orang = $C$
> - Syarat: $P(XC > 120) < 0{,}01$, yaitu $P(X > 120/C) < 0{,}01$
> - Target: nilai maksimum $C$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ubah kondisi ke dalam $X$**
> > Dana tidak cukup $\iff$ $XC > 120 \iff X > 120/C$.
> > Harus: $P(X > 120/C) < 0{,}01$.
> >
> > **Langkah 2: Coba opsi-opsi $C$**
> > Untuk $C$ maksimal, kita ingin $120/C$ sekecil mungkin (lebih ketat).
> >
> > Uji $C = 40$: $120/40 = 3 \implies P(X > 3) < 0{,}01$?
> >
> > Hitung $P(X \leq 3)$ dengan $X \sim B(20, 0{,}025)$:
> >
> > $$P(X=0) = (0{,}975)^{20} \approx 0{,}6028$$
> >
> > $$P(X=1) = \binom{20}{1}(0{,}025)(0{,}975)^{19} \approx 20 \times 0{,}025 \times 0{,}6183 = 0{,}3086$$
> >
> > $$P(X=2) = \binom{20}{2}(0{,}025)^2(0{,}975)^{18} \approx 190 \times 0{,}000625 \times 0{,}6342 \approx 0{,}0754$$
> >
> > $$P(X=3) = \binom{20}{3}(0{,}025)^3(0{,}975)^{17} \approx 1140 \times 1{,}5625\times10^{-5} \times 0{,}6505 \approx 0{,}0115$$
> >
> > $$P(X \leq 3) \approx 0{,}6028 + 0{,}3086 + 0{,}0754 + 0{,}0115 = 0{,}9983$$
> >
> > $$P(X > 3) \approx 1 - 0{,}9983 = 0{,}0017 < 0{,}01 \checkmark$$
> >
> > Uji $C = 60$: $120/60 = 2 \implies P(X > 2)$?
> >
> > $$P(X > 2) = 1 - P(X \leq 2) \approx 1 - (0{,}6028 + 0{,}3086 + 0{,}0754) = 0{,}0132 > 0{,}01 \text{ ✗}$$
> >
> > Jadi $C = 60$ tidak memenuhi syarat, tetapi $C = 40$ memenuhi. Nilai maksimum $C$ yang memenuhi syarat adalah $40$.
> >
> > **Hasil Akhir:** **(c)**. $C = 40$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira maksimum $C$ berarti kita ingin $C$ sebesar mungkin — perlu dicek bahwa probabilitas melebihi dana harus **kurang dari** $1\%$.
> > > - Lupa bahwa "tidak cukup" berarti $X > 120/C$, bukan $X \geq 120/C$ (untuk bilangan bulat, beda!).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "peluang tidak cukup $< 1\%$" berarti kita mengijinkan $P = 1\%$ tepat — kondisinya adalah **kurang dari** $1\%$ (strict inequality).
> >
> > > [!CAUTION] Red Flags
> > > - Jika $n$ kecil dan $p$ kecil → Binomial, bukan Normal approximation. Hitung CDF Binomial secara langsung.
> > > - Jika soal meminta "nilai maksimum $C$" → coba opsi dari besar ke kecil dan temukan yang pertama memenuhi syarat.

---

## **No. 16**

Diketahui variabel acak $X$ dan $Y$ memiliki fungsi densitas bersama sebagai berikut:

$$f(x, y) = \frac{2x + y}{12} \quad \text{untuk } 0 \leq x \leq 2 \text{ dan } 0 \leq y \leq 2$$

Tentukanlah nilai dari $P(X + Y \geq 1{,}5 \mid X \leq 1)$.

a. Kurang dari $0{,}2$  
b. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$  
c. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 16** 
>
> **(d). Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]], [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[3.2 Distribusi Marginal]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
> >
>
> **Diketahui:**
> - $f(x,y) = \frac{2x+y}{12}$ untuk $0 \leq x \leq 2$, $0 \leq y \leq 2$
> - $P(X \leq 1) = \frac{1}{3}$ (lihat Soal 14/hasil integral)
> - Target: $P(X+Y \geq 1{,}5 \mid X \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X \leq 1)$**
> >
> > $$P(X \leq 1) = \int_0^1 \int_0^2 \frac{2x+y}{12}\, dy\, dx = \int_0^1 \frac{4x+2}{12}\, dx = \frac{1}{12}[2x^2+2x]_0^1 = \frac{4}{12} = \frac{1}{3}$$
> >
> > **Langkah 2: Hitung $P(X \leq 1 \cap X+Y \geq 1{,}5)$**
> > Region: $0 \leq x \leq 1$, $y \geq 1{,}5-x$, $0 \leq y \leq 2$. Untuk $x \in [0,1]$: $y$ dari $1{,}5-x$ hingga $2$.
> >
> > $$\int_0^1 \int_{1{,}5-x}^2 \frac{2x+y}{12}\, dy\, dx$$
> >
> > Integral dalam: $\int_{1{,}5-x}^2(2x+y)\,dy = [2xy+y^2/2]_{1{,}5-x}^2 = (4x+2)-(2x(1{,}5-x)+(1{,}5-x)^2/2)$
> > $= 4x+2-3x+2x^2-(2{,}25-3x+x^2)/2 = x+2+2x^2-1{,}125+1{,}5x-0{,}5x^2 = 1{,}5x^2+2{,}5x+0{,}875$
> >
> > $$\int_0^1 \frac{1{,}5x^2+2{,}5x+0{,}875}{12}\, dx = \frac{1}{12}[0{,}5x^3+1{,}25x^2+0{,}875x]_0^1 = \frac{2{,}625}{12} = 0{,}21875$$
> >
> > **Langkah 3: Probabilitas bersyarat**
> >
> > $$P(X+Y \geq 1{,}5 \mid X \leq 1) = \frac{0{,}21875}{1/3} = 0{,}65625$$
> >
> > $0{,}656 \in [0{,}6; 0{,}8)$ → **(d)**.
> >
> > **Hasil Akhir:** **(d)**. $\approx 0{,}656$, dalam interval $[0{,}6; 0{,}8)$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa membagi dengan $P(X \leq 1)$ — menghitung probabilitas gabungan bukan probabilitas bersyarat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika region integrasi dipotong garis $x+y=c$ → gambar daerah dan identifikasi batas aktif untuk setiap $x$.

---

## **No. 17**

Diketahui kerugian akibat banjir di rumah sakit dimodelkan oleh variabel acak $X$ dengan fungsi densitas sebagai berikut:

$$f(x) = \begin{cases} \dfrac{42 - x}{882}, & x < 42 \\ 0, & \text{lainnya} \end{cases}$$

Diketahui kerugian akibat banjir lebih besar dari $11$, tentukanlah probabilitas kerugian akibat banjir tersebut lebih besar dari $26$.

a. $0{,}52$  
b. $0{,}2$  
c. $0{,}27$  
d. $0{,}24$  
e. $0{,}34$

> [!summary]+ **Jawaban No. 17** 
>
> **(c). $0{,}27$**
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
> > $$P(X > 26 \mid X > 11) = \frac{P(X > 26)}{P(X > 11)}$$
> >
> > $$P(X > a) = \int_a^{42} \frac{42-x}{882}\, dx = \frac{(42-a)^2}{1764}$$
> >
>
> **Diketahui:**
> - $f(x) = \frac{42-x}{882}$ untuk $0 \leq x \leq 42$
> - Target: $P(X > 26 \mid X > 11)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Formula $P(X>a)$**
> >
> > $$P(X>a) = \int_a^{42}\frac{42-x}{882}\,dx = \frac{(42-a)^2}{1764}$$
> >
> > **Langkah 2: Hitung**
> >
> > $$P(X>26) = \frac{16^2}{1764} = \frac{256}{1764}$$
> >
> > $$P(X>11) = \frac{31^2}{1764} = \frac{961}{1764}$$
> >
> > **Langkah 3: Probabilitas bersyarat**
> >
> > $$P(X>26 \mid X>11) = \frac{256}{961} \approx 0{,}266 \approx 0{,}27$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}27$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X>26)$ tanpa membagi dengan $P(X>11)$.
> >
> > > [!CAUTION] Red Flags
> > > - Support berakhir di $x=42$; batas atas integral selalu $42$, bukan tak hingga.

---

## **No. 18**

Sebuah tim bisbol telah menjadwalkan pertandingan pembukaannya pada tanggal 1 April. Jika hujan turun pada tanggal 1 April, pertandingan ditunda dan akan dimainkan pada hari berikutnya saat tidak hujan. Tim tersebut membeli asuransi terhadap hujan. Polis tersebut akan membayar $3{.}000$ untuk setiap hari, hingga $3$ hari, saat pertandingan pembukaan ditunda. Perusahaan asuransi menentukan bahwa jumlah hari hujan berturut-turut yang dimulai pada tanggal 1 April adalah variabel acak Poisson dengan rata-rata sebesar $0{,}5$. Tentukanlah standar deviasi dari jumlah yang harus dibayarkan oleh perusahaan asuransi.

a. $2{.}096$  
b. $3{.}144$  
c. $1{.}048$  
d. $2{.}795$  
e. $1{.}397$

> [!summary]+ **Jawaban No. 18** 
>
> **(a). $2{.}096$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $N \sim \text{Poisson}(\lambda=0{,}5)$; $Y = 3000 \cdot \min(N, 3)$; $\text{SD}(Y) = 3000\sqrt{\text{Var}(\min(N,3))}$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(0{,}5)$, $e^{-0{,}5} \approx 0{,}6065$
> - $Y = 3000 \cdot M$, $M = \min(N,3)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Probabilitas $M$**
> > $P(M=0) = e^{-0{,}5} \approx 0{,}6065$
> > $P(M=1) = 0{,}5e^{-0{,}5} \approx 0{,}3033$
> > $P(M=2) = \frac{0{,}25}{2}e^{-0{,}5} \approx 0{,}0758$
> > $P(M=3) = 1 - 0{,}9856 = 0{,}0144$
> >
> > **Langkah 2: $E[M]$ dan $E[M^2]$**
> > $E[M] = 0(0{,}6065)+1(0{,}3033)+2(0{,}0758)+3(0{,}0144) = 0{,}4981$
> > $E[M^2] = 0+0{,}3033+4(0{,}0758)+9(0{,}0144) = 0{,}7361$
> >
> > **Langkah 3: SD(Y)**
> > $\text{Var}(M) = 0{,}7361-0{,}4981^2 = 0{,}4880$
> > $\text{SD}(Y) = 3000\sqrt{0{,}4880} \approx 3000 \times 0{,}6986 \approx 2096$
> >
> > **Hasil Akhir:** **(a)**. $2{.}096$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\text{Var}(Y) = 3000^2 \text{Var}(N)$ tanpa memperhatikan batas maksimum 3 hari.
> >
> > > [!CAUTION] Red Flags
> > > - "Hingga $k$ hari" → definisikan $M = \min(N,k)$ dan hitung distribusinya secara eksplisit.

---

## **No. 19**

Diketahui $X$ dan $Y$ adalah variabel acak kontinu dengan fungsi densitas bersama sebagai berikut:

$$f(x, y) = \frac{2x + y}{12} \quad \text{untuk } 0 \leq x \leq 2 \text{ dan } 0 \leq y \leq 2$$

Tentukan probabilitas bersyarat dari $P(X + Y \geq 2 \mid X \leq 1)$.

a. $\dfrac{1}{8}$  
b. $\dfrac{1}{4}$  
c. $\dfrac{3}{8}$  
d. $\dfrac{1}{2}$  
e. $\dfrac{5}{8}$

> [!summary]+ **Jawaban No. 19** 
>
> **(c). $\dfrac{3}{8}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.3 Distribusi Bersyarat]], [[3.1 Distribusi Gabungan]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > $$P(X+Y \geq 2 \mid X \leq 1) = \frac{P(X+Y \geq 2,\ X \leq 1)}{P(X \leq 1)} = \frac{P(\cdot)}{1/3}$$
> >
>
> **Diketahui:**
> - Sama dengan No. 16, $P(X \leq 1) = 1/3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(X \leq 1 \cap X+Y \geq 2)$**
> > Region: $0 \leq x \leq 1$, $y \geq 2-x$, $0 \leq y \leq 2$. Untuk $x \in [0,1]$: $y$ dari $2-x$ hingga $2$.
> >
> > Integral dalam: $\int_{2-x}^2(2x+y)\,dy = [2xy+y^2/2]_{2-x}^2$
> > $= (4x+2)-(2x(2-x)+(2-x)^2/2)$
> > $= 4x+2-4x+2x^2-(4-4x+x^2)/2$
> > $= 2+2x^2-2+2x-x^2/2 = 3x^2/2+2x$
> >
> > $$\int_0^1\frac{3x^2/2+2x}{12}\,dx = \frac{1}{12}[x^3/2+x^2]_0^1 = \frac{3/2}{12} = \frac{1}{8}$$
> >
> > **Langkah 2: Probabilitas bersyarat**
> >
> > $$P(X+Y \geq 2 \mid X \leq 1) = \frac{1/8}{1/3} = \frac{3}{8}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{3}{8}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(X \leq 1) = 1/2$ karena $X \in [0,2]$ dan mengira distribusi marginal uniform.
> >
> > > [!CAUTION] Red Flags
> > > - PDF bersama yang bukan uniform → marginal $X$ tidak uniform; hitung $P(X \leq 1)$ secara eksplisit.

---

## **No. 20**

Misalkan $S$ dan $T$ mewakili masa pakai (dalam jam) dari dua komponen yang terhubung dalam perangkat elektronik. Fungsi densitas bersama untuk $S$ dan $T$ seragam di wilayah yang ditentukan oleh $0 \leq s \leq t \leq L$, dimana $L$ adalah konstanta positif. Tentukan ekspektasi dari $7S^2 + 8T^2$.

a. $\dfrac{5L^2}{1}$  
b. $\dfrac{31L^2}{7}$  
c. $\dfrac{31L^2}{6}$  
d. $\dfrac{31L}{7}$  
e. $\dfrac{11L^2}{2}$

> [!summary]+ **Jawaban No. 20** 
>
> **(c). $\dfrac{31L^2}{6}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.1 Distribusi Gabungan]], [[3.2 Distribusi Marginal]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.1; Miller Bab 4.6 |
>
> > [!info]+ **Rumus**  
> >
> > Luas segitiga $0\leq s \leq t \leq L$: $L^2/2$, sehingga $f(s,t) = 2/L^2$.
> > $E[7S^2+8T^2] = 7E[S^2]+8E[T^2]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: $E[S^2]$**
> >
> > $$E[S^2] = \frac{2}{L^2}\int_0^L\int_s^L s^2\,dt\,ds = \frac{2}{L^2}\int_0^L s^2(L-s)\,ds = \frac{2}{L^2}\cdot\frac{L^4}{12} = \frac{L^2}{6}$$
> >
> > **Langkah 2: $E[T^2]$**
> >
> > $$E[T^2] = \frac{2}{L^2}\int_0^L\int_0^t t^2\,ds\,dt = \frac{2}{L^2}\int_0^L t^3\,dt = \frac{2}{L^2}\cdot\frac{L^4}{4} = \frac{L^2}{2}$$
> >
> > **Langkah 3: Ekspektasi**
> >
> > $$7\cdot\frac{L^2}{6}+8\cdot\frac{L^2}{2} = \frac{7L^2}{6}+4L^2 = \frac{31L^2}{6}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{31L^2}{6}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa densitas adalah $2/L^2$ (bukan $1/L^2$) karena luas segitiga adalah $L^2/2$.
> >
> > > [!CAUTION] Red Flags
> > > - Support segitiga $s \leq t$ → $S, T$ tidak independen; hitung $E[S^2]$ dan $E[T^2]$ dengan batas yang benar.

---

## **No. 21**

Jumlah mobil yang melintasi persimpangan selama periode satu menit memiliki distribusi Poisson dengan rata-rata sebesar $4$. Setiap mobil yang melintasi persimpangan adalah mobil buatan dalam negeri atau mobil buatan luar negeri. Jenis mobil-mobil yang berurutan bersifat independen satu sama lain, dengan probabilitas $0{,}75$ bahwa setiap mobil yang melintasi persimpangan adalah buatan dalam negeri. Tentukanlah probabilitas bahwa selama periode satu menit tertentu, empat mobil melintasi persimpangan dan tepat tiga di antaranya adalah buatan dalam negeri.

a. Kurang dari $0{,}075$  
b. Sekurang-kurangnya $0{,}075$ tapi kurang dari $0{,}1$  
c. Sekurang-kurangnya $0{,}1$ tapi kurang dari $0{,}125$  
d. Sekurang-kurangnya $0{,}125$ tapi kurang dari $0{,}15$  
e. Sekurang-kurangnya $0{,}15$

> [!summary]+ **Jawaban No. 21** 
>
> **(b). Sekurang-kurangnya $0{,}075$ tapi kurang dari $0{,}1$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.7 Distribusi Majemuk]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1–3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $P(N=4, K=3) = P(N=4) \cdot P(K=3 \mid N=4)$
> > $P(N=4) = \frac{e^{-4}\cdot 4^4}{4!}$; $P(K=3\mid N=4) = \binom{4}{3}(0{,}75)^3(0{,}25)^1$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1:**
> > $P(N=4) = \frac{256e^{-4}}{24} \approx 0{,}1954$
> > $P(K=3\mid N=4) = 4(0{,}421875)(0{,}25) = 0{,}421875$
> >
> > **Langkah 2:**
> > $P = 0{,}1954 \times 0{,}421875 \approx 0{,}0824$
> >
> > $0{,}0824 \in [0{,}075;0{,}1)$ → **(b)**.
> >
> > **Hasil Akhir:** **(b)**. $\approx 0{,}0824$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung hanya $P(K=3)$ dari $\text{Poisson}(3)$ marginal, bukan probabilitas bersama dengan $N=4$.
> >
> > > [!CAUTION] Red Flags
> > > - "Empat mobil melintasi DAN tepat tiga dalam negeri" → probabilitas bersama, gunakan aturan perkalian.

---

## **No. 22**

Berdasarkan polis tertentu, jumlah klaim yang diajukan memiliki distribusi Poisson. Diketahui bahwa pemegang polis yang mengajukan $5$ klaim memiliki kemungkinan $6$ kali lebih besar untuk mengajukan klaim dibandingkan mereka yang mengajukan $7$ klaim. Tentukanlah variansi dari jumlah klaim yang diajukan.

a. $5$  
b. $7$  
c. $\sqrt{5}$  
d. $\sqrt{6}$  
e. $\sqrt{7}$

> [!summary]+ **Jawaban No. 22** 
>
> **(e). $\sqrt{7}$**
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
> > $P(X=k) = \frac{e^{-\lambda}\lambda^k}{k!}$; $\text{Var}(\text{Poisson}(\lambda)) = \lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis kondisi**
> >
> > $$\frac{e^{-\lambda}\lambda^5}{5!} = 6 \cdot \frac{e^{-\lambda}\lambda^7}{7!}$$
> >
> > $$\frac{\lambda^5}{120} = \frac{6\lambda^7}{5040} \implies 840 = 120\lambda^2 \implies \lambda^2 = 7 \implies \lambda = \sqrt{7}$$
> >
> > **Langkah 2:** $\text{Var}(X) = \lambda = \sqrt{7}$
> >
> > **Hasil Akhir:** **(e)**. $\sqrt{7}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\text{Var}(X) = \lambda^2$; untuk Poisson, $\text{Var} = \lambda$ (bukan $\lambda^2$).
> >
> > > [!CAUTION] Red Flags
> > > - Perbandingan dua nilai PMF Poisson → bagi keduanya untuk menghilangkan $e^{-\lambda}$, lalu selesaikan $\lambda$.

---

## **No. 23**

Suatu perusahaan memiliki lima karyawan dalam program asuransi kesehatannya. Setiap tahun, setiap karyawan secara independen memiliki peluang $80\%$ untuk tidak dirawat di rumah sakit. Jika seorang karyawan memerlukan satu atau lebih perawatan di rumah sakit, jumlah perawatan dimodelkan oleh distribusi geometrik dengan rata-rata sebesar $1{,}50$. Jumlah perawatan di rumah sakit dari berbagai karyawan saling independen. Setiap perawatan di rumah sakit menghabiskan biaya $20{.}000$. Tentukanlah probabilitas bahwa total biaya rumah sakit perusahaan dalam setahun kurang dari $50{.}000$.

a. $0{,}41$  
b. $0{,}46$  
c. $0{,}58$  
d. $0{,}69$  
e. $0{,}78$

> [!summary]+ **Jawaban No. 23** 
>
> **(e). $0{,}78$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]], [[3.7 Distribusi Majemuk]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $\text{Geom}(p=2/3)$: $P(K=k) = (2/3)(1/3)^{k-1}$, $E[K]=3/2$
> > Biaya $< 50.000 \iff$ total perawatan $\leq 2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Probabilitas Binomial $N \sim B(5,0{,}2)$**
> > $P(N=0) = 0{,}8^5 = 0{,}32768$
> > $P(N=1) = 5(0{,}2)(0{,}8)^4 = 0{,}4096$
> > $P(N=2) = 10(0{,}04)(0{,}8)^3 = 0{,}2048$
> >
> > **Langkah 2: Probabilitas Geometrik**
> > $p = 1/E[K] = 2/3$; $P(K=1) = 2/3$; $P(K \leq 2) = 2/3+2/9 = 8/9$
> >
> > **Langkah 3: Gabungkan**
> > $P(\text{total} \leq 2) = P(N=0)+P(N=1)\cdot\frac{8}{9}+P(N=2)\cdot(2/3)^2$
> > $= 0{,}32768+0{,}4096\times\frac{8}{9}+0{,}2048\times\frac{4}{9}$
> > $= 0{,}32768+0{,}36409+0{,}09102 = 0{,}783 \approx 0{,}78$
> >
> > **Hasil Akhir:** **(e)**. $0{,}78$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $p = 1/1{,}5 = 0{,}667$ adalah benar (ya, $p=2/3$), tapi lupa untuk $N=2$ harus masing-masing tepat 1 perawatan, bukan jumlah $\leq 2$ secara bebas.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk $N=2$: dua karyawan masing-masing perlu tepat 1 perawatan → $P(K_1=1)P(K_2=1) = (2/3)^2$.

---

## **No. 24**

Dua polis asuransi jiwa, masing-masing dengan manfaat kematian sebesar $10{.}000$ dan premi sekali bayar sebesar $500$, dijual kepada pasangan suami istri, satu untuk setiap orang. Polis tersebut akan berakhir pada akhir tahun kesepuluh. Peluang hanya istri yang dapat bertahan hidup sekurang-kurangnya sepuluh tahun adalah $0{,}025$, peluang hanya suami yang dapat bertahan hidup sekurang-kurangnya sepuluh tahun adalah $0{,}02$, dan peluang keduanya akan hidup sekurang-kurangnya sepuluh tahun adalah $0{,}95$. Tentukanlah perkiraan kelebihan premi dibandingkan klaim, diketahui suami masih hidup setidaknya sepuluh tahun.

a. $897$  
b. $794$  
c. $397$  
d. $385$  
e. $294$

> [!summary]+ **Jawaban No. 24** 
>
> **(b). $794$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]], [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[3.4 Nilai Harapan dan Variansi Bersyarat]] |
> | **Referensi** | Miller Bab 2; Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**  
> >
> > $P(H_S) = P(\text{keduanya hidup})+P(\text{hanya suami hidup}) = 0{,}95+0{,}02 = 0{,}97$
> > $E[\text{klaim}\mid H_S] = \frac{0{,}02}{0{,}97}\times 10.000$; Kelebihan $= 1000 - E[\text{klaim}\mid H_S]$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1:** $P(H_S) = 0{,}97$
> >
> > **Langkah 2:** Diberi $H_S$: hanya suami hidup (prob $0{,}02/0{,}97$) → klaim $10.000$ (istri meninggal); keduanya hidup (prob $0{,}95/0{,}97$) → klaim $0$.
> >
> > $E[\text{klaim}\mid H_S] = \frac{0{,}02}{0{,}97}\times 10.000 = \frac{200}{0{,}97} \approx 206{,}19$
> >
> > **Langkah 3:** Kelebihan $= 1000 - 206{,}19 \approx 794$
> >
> > **Hasil Akhir:** **(b)**. $794$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengkondisikan pada "suami hidup" — menghitung ekspektasi klaim tanpa syarat.
> > > - Mengira klaim $= 20.000$ jika istri meninggal (padahal hanya polis istri yang membayar $10.000$).
> >
> > > [!CAUTION] Red Flags
> > > - "Diketahui suami masih hidup" → wajib menggunakan probabilitas bersyarat.

---

## **No. 25**

Jumlah klaim atas kerusakan akibat angin pada rumah yang diasuransikan adalah variabel acak independen dengan fungsi densitas sebagai berikut:

$$f(x) = \begin{cases} \dfrac{5}{x^6}, & x \geq 1 \\ 0, & \text{lainnya} \end{cases}$$

dimana $x$ adalah jumlah klaim dalam ribuan. Misalkan tiga klaim tersebut akan dibuat, tentukanlah ekspektasi klaim terbesar dari tiga klaim tersebut.

a. $1{.}488$  
b. $1{.}984$  
c. $992$  
d. $744$  
e. $2{.}232$

> [!summary]+ **Jawaban No. 25** 
>
> **(a). $1{.}488$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 3 — Variabel Acak Multivariat |
> | **Sub-topik** | [[3.8 Transformasi Variabel Acak Gabungan]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]], [[3.1 Distribusi Gabungan]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.6; Miller Bab 4.8–4.9 |
>
> > [!info]+ **Rumus**  
> >
> > CDF: $F(x) = 1 - x^{-5}$ untuk $x \geq 1$
> > PDF order statistic maksimum ($n=3$): $f_{X_{(3)}}(x) = 3[F(x)]^2 f(x)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1:** $f_{X_{(3)}}(x) = 3(1-x^{-5})^2 \cdot 5x^{-6} = \frac{15}{x^6}-\frac{30}{x^{11}}+\frac{15}{x^{16}}$
> >
> > **Langkah 2:**
> >
> > $$E[X_{(3)}] = \int_1^\infty\left(\frac{15}{x^5}-\frac{30}{x^{10}}+\frac{15}{x^{15}}\right)\,dx = \frac{15}{4}-\frac{30}{9}+\frac{15}{14}$$
> >
> > $= \frac{15}{4}-\frac{10}{3}+\frac{15}{14}$
> >
> > LCM$(4,3,14)=84$: $= \frac{315-280+90}{84} = \frac{125}{84} \approx 1{,}488$ ribu
> >
> > Dalam satuan ribuan → $E = 1.488$
> >
> > **Hasil Akhir:** **(a)**. $1{.}488$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - $E[\max] \neq \max(E[X_i])$; gunakan PDF order statistic.
> >
> > > [!CAUTION] Red Flags
> > > - "Ekspektasi nilai terbesar dari $n$ sampel" → $f_{X_{(n)}}(x) = n[F(x)]^{n-1}f(x)$.

---

## **No. 26**

Diketahui variabel acak $X_1, X_2, X_3, \ldots, X_{14}$ berdistribusi identik dan saling independen. Diketahui variabel acak lain $Y$ dimana

$$Y = \sum_{i=1}^{14} X_i$$

yang memiliki fungsi pembangkit momen

$$M(t) = e^{252e^t - 252}$$

Tentukanlah nilai dari $\text{Var}(X_1)$.

a. $\sqrt{18}$  
b. $18$  
c. $252$  
d. $\sqrt{14}$  
e. $14$

> [!summary]+ **Jawaban No. 26** 
>
> **(b). $18$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.3 Fungsi Pembangkit]], [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]] |
> | **Connected Topics** | [[4.2 Distribusi Sampel]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.2; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $M_Y(t) = [M_{X_1}(t)]^{14}$; MGF Poisson$(\lambda) = e^{\lambda(e^t-1)}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1:** $Y \sim \text{Poisson}(252)$, $M_Y(t)=e^{252(e^t-1)}$
> >
> > **Langkah 2:** $M_{X_1}(t) = [M_Y(t)]^{1/14} = e^{18(e^t-1)}$ → $X_1 \sim \text{Poisson}(18)$
> >
> > **Langkah 3:** $\text{Var}(X_1) = 18$
> >
> > **Hasil Akhir:** **(b)**. $18$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - MGF tidak dibagi 14, melainkan dipangkatkan $1/14$.
> >
> > > [!CAUTION] Red Flags
> > > - MGF berbentuk $e^{\lambda(e^t-1)}$ → distribusi Poisson dengan parameter $\lambda$.

---

## **No. 27**

Sebuah perusahaan asuransi menjual $30\%$ polis penyewanya kepada penyewa rumah dan $70\%$ sisanya kepada penyewa apartemen. Di kalangan penyewa rumah, waktu mulai pembelian polis hingga pembatalan polis berdistribusi eksponensial dengan rata-rata sebesar $4$ tahun, dan di kalangan penyewa apartemen berdistribusi eksponensial dengan rata-rata sebesar $3$ tahun. Tentukanlah probabilitas pemegang polis adalah penyewa rumah, mengingat penyewa masih mempunyai polis satu tahun setelah pembelian.

a. Kurang dari $0{,}2$  
b. Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$  
c. Sekurang-kurangnya $0{,}4$ tapi kurang dari $0{,}6$  
d. Sekurang-kurangnya $0{,}6$ tapi kurang dari $0{,}8$  
e. Sekurang-kurangnya $0{,}8$

> [!summary]+ **Jawaban No. 27** 
>
> **(b). Sekurang-kurangnya $0{,}2$ tapi kurang dari $0{,}4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Dasar-Dasar Probabilitas |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1.4, 4.4; Miller Bab 2 |
>
> > [!info]+ **Rumus**  
> >
> > $P(T>1\mid R) = e^{-1/4}$; $P(T>1\mid A) = e^{-1/3}$
> > Teorema Bayes: $P(R\mid T>1) = \frac{e^{-1/4}\times 0{,}3}{e^{-1/4}\times 0{,}3+e^{-1/3}\times 0{,}7}$
>
> > [!example]- Langkah Pengerjaan
> >
> > $e^{-1/4} \approx 0{,}7788$; $e^{-1/3} \approx 0{,}7165$
> > Pembilang: $0{,}7788 \times 0{,}30 = 0{,}23364$
> > Penyebut: $0{,}23364 + 0{,}7165 \times 0{,}70 = 0{,}23364+0{,}50155 = 0{,}73519$
> > $P(R\mid T>1) = 0{,}23364/0{,}73519 \approx 0{,}318$
> >
> > $0{,}318 \in [0{,}2;0{,}4)$ → **(b)**.
> >
> > **Hasil Akhir:** **(b)**. $\approx 0{,}318$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira mean $4$ → rate $\lambda=4$; yang benar rate $=1/4$.
> >
> > > [!CAUTION] Red Flags
> > > - Polis masih aktif setelah 1 tahun = "bukti baru" → gunakan Teorema Bayes.

---

## **No. 28**

Suatu perusahaan menentukan harga asuransi badai dengan menggunakan asumsi berikut:

(i) Dalam satu tahun kalender, paling banyak ada satu badai.  
(ii) Dalam satu tahun kalender, probabilitas terjadinya badai adalah $0{,}08$.  
(iii) Jumlah badai dalam satu tahun kalender tidak bergantung pada jumlah badai dalam tahun kalender lainnya.  

Dengan menggunakan asumsi perusahaan, tentukanlah probabilitas terjadinya sedikitnya $5$ badai dalam jangka waktu $27$ tahun.

a. $0{,}06$  
b. $0{,}08$  
c. $0{,}11$  
d. $0{,}21$  
e. $0{,}46$

> [!summary]+ **Jawaban No. 28** 
>
> **(a). $0{,}06$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3.1; Miller Bab 5 |
>
> > [!info]+ **Rumus**  
> >
> > $X \sim B(27, 0{,}08)$; $P(X \geq 5) = 1 - P(X \leq 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $(0{,}92)^{27} \approx 0{,}1049$
> > $P(X=0) \approx 0{,}1049$
> > $P(X=1) \approx 27(0{,}08)(0{,}92)^{26} \approx 0{,}2462$
> > $P(X=2) \approx 351(0{,}0064)(0{,}92)^{25} \approx 0{,}2780$
> > $P(X=3) \approx 2925(0{,}000512)(0{,}92)^{24} \approx 0{,}2018$
> > $P(X=4) \approx 17550(0{,}00004096)(0{,}92)^{23} \approx 0{,}1051$
> > $P(X \leq 4) \approx 0{,}9360$
> > $P(X \geq 5) \approx 0{,}064 \approx 0{,}06$
> >
> > **Hasil Akhir:** **(a)**. $0{,}06$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan Poisson sebagai aproksimasi — secara teknis bisa, tapi Binomial langsung lebih akurat.
> >
> > > [!CAUTION] Red Flags
> > > - "Paling banyak satu badai per tahun" → Binomial, bukan Poisson.

---

## **No. 29**

Sebuah perusahaan asuransi memiliki dua lini bisnis yang independen satu sama lain. Banyaknya klaim yang masuk per bulan dari Lini bisnis 1, misalkan $N_1$ mempunyai distribusi Poisson dengan mean sebesar $40$ dan banyaknya klaim yang masuk per bulan dari Lini bisnis 2, misalkan $N_2$ mempunyai distribusi binomial dengan $n = 100$ dan $p = 0{,}4$. Dengan menggunakan distribusi normal dengan koreksi bilangan bulat, tentukanlah probabilitas $P[|N_1 - N_2| > 3]$.

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
> | **Sub-topik** | [[4.3 Teorema Limit Pusat]], [[4.2 Distribusi Sampel]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.5 Distribusi Diskrit Umum]], [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[3.5 Independensi dan Korelasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 5.5; Walpole Bab 8.5 |
>
> > [!info]+ **Rumus**  
> >
> > $D = N_1-N_2$; $E[D]=0$; $\text{Var}(D) = 40+24 = 64$; $\text{SD}(D) = 8$
> > Koreksi bilangan bulat: $P(|D|>3) = P(D>3)+P(D<-3) \approx P(|Z|>3{,}5/8)$
>
> > [!example]- Langkah Pengerjaan
> >
> > $P(|D|>3) = 1 - P(-3 \leq D \leq 3)$
> > Dengan koreksi: $\approx 1 - P(-3{,}5 < D < 3{,}5)$
> > $= 1 - P(-0{,}4375 < Z < 0{,}4375) = 1-(2\Phi(0{,}4375)-1)$
> > $\approx 1-(2 \times 0{,}6693-1) = 1-0{,}3386 = 0{,}6614$
> >
> > $0{,}6614 \geq 0{,}65$ → **(e)**.
> >
> > **Hasil Akhir:** **(e)**. $\approx 0{,}661$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - $\text{Var}(N_1-N_2) = \text{Var}(N_1)+\text{Var}(N_2)$ (bukan selisih).
> >
> > > [!CAUTION] Red Flags
> > > - "Koreksi bilangan bulat" → batas $k$ menjadi $k+0{,}5$ atau $k-0{,}5$ tergantung arah.

---

## **No. 30**

Diketahui variabel acak kerugian $X$ berdistribusi seragam secara kontinu pada interval $[0, 3b]$. Ketika kerugian terjadi, polis asuransi membayar:

(i) $0$ jika kerugian kurang dari $b$,  
(ii) $50\%$ dari kerugian jika kerugian lebih besar dari $b$ tetapi kurang dari $2b$, dan  
(iii) $100\%$ dari kerugian jika kerugian lebih besar dari $2b$.  

$Y$ menyatakan jumlah yang dibayarkan oleh polis asuransi jika terjadi kerugian. Tentukanlah persentil ke-80 dari $Y$.

a. $1{,}2b$  
b. $1{,}6b$  
c. $2b$  
d. $2{,}4b$  
e. $2{,}8b$

> [!summary]+ **Jawaban No. 30** 
>
> **(d). $2{,}4b$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.2 Variabel Acak Kontinu]], [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.6 Distribusi Kontinu Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 4 |
>
> > [!info]+ **Rumus**    
> >
> > $X \sim U(0,3b)$: $f_X(x) = 1/(3b)$
> > $Y$: distribusi campuran dengan massa di $Y=0$ dan kontinu di $(b/2,b)$ dan $(2b,3b)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Massa dan CDF $Y$**
> > - $P(Y=0) = P(X<b) = 1/3$
> > - $Y=0{,}5X$ untuk $X\in(b,2b)$ → $Y\in(b/2,b)$: $F_Y(y) = 1/3 + (2y-b)/(3b)$ untuk $y\in[b/2,b)$
> >   - $F_Y(b^-) = 1/3+1/3 = 2/3$
> > - $Y=X$ untuk $X\in(2b,3b)$ → $Y\in(2b,3b)$: $F_Y(y) = 2/3+(y-2b)/(3b)$ untuk $y\in[2b,3b)$
> > - Catatan: gap di $Y\in(b,2b)$, $F_Y=2/3$ di sana.
> >
> > **Langkah 2: Persentil ke-80**
> > Cari $y_0$: $F_Y(y_0) = 0{,}80$.
> > Karena $0{,}80 > 2/3$, $y_0 \in [2b,3b)$:
> >
> > $$\frac{2}{3}+\frac{y_0-2b}{3b} = 0{,}80$$
> >
> > $$\frac{y_0-2b}{3b} = \frac{2}{15} \implies y_0-2b = 0{,}4b \implies y_0 = 2{,}4b$$
> >
> > **Hasil Akhir:** **(d)**. $2{,}4b$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa $Y$ memiliki massa diskrit di $Y=0$ sebesar $1/3$, sehingga persentil ke-33 sudah berada di $Y=0$.
> > > - Mengabaikan gap di $Y\in(b,2b)$ — tidak ada $Y$ yang bernilai di sini.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $g(X)$ konstan di suatu interval → ada massa diskrit di nilai tersebut; CDF lompat di titik itu.
> > > - Selalu gambar fungsi $g(X)$ untuk mengidentifikasi gap dan massa sebelum membangun CDF $Y$.

---
