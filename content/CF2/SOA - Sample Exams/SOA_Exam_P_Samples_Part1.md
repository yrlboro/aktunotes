## **No. 1**

A survey of a group's viewing habits over the last year revealed the following information:

(i) 28% watched gymnastics  
(ii) 29% watched baseball  
(iii) 19% watched soccer  
(iv) 14% watched gymnastics and baseball  
(v) 12% watched baseball and soccer  
(vi) 10% watched gymnastics and soccer  
(vii) 8% watched all three sports.  

Calculate the percentage of the group that watched none of the three sports during the last year.

a. 24%  
b. 36%  
c. 41%  
d. 52%  
e. 60%  

> [!summary]+ **Jawaban No. 1**
> 
> **(d). $52\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Wackerly Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Prinsip Inklusi-Eksklusi untuk 3 kejadian:**
> >
> > $$P(G \cup B \cup S) = P(G) + P(B) + P(S) - P(G \cap B) - P(G \cap S) - P(B \cap S) + P(G \cap B \cap S)$$
> >
> > **Komplemen:**
> >
> > $$P\bigl((G \cup B \cup S)^c\bigr) = 1 - P(G \cup B \cup S)$$
>
> **Diketahui:**
> - $P(G) = 0{,}28$, $P(B) = 0{,}29$, $P(S) = 0{,}19$
> - $P(G \cap B) = 0{,}14$, $P(B \cap S) = 0{,}12$, $P(G \cap S) = 0{,}10$
> - $P(G \cap B \cap S) = 0{,}08$
> - Target: $P(\text{tidak menonton satupun})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Prinsip Inklusi-Eksklusi**
> >
> > $$P(G \cup B \cup S) = 0{,}28 + 0{,}29 + 0{,}19 - 0{,}14 - 0{,}10 - 0{,}12 + 0{,}08$$
> >
> > $$= 0{,}76 - 0{,}36 + 0{,}08 = 0{,}48$$
> >
> > **Langkah 2: Hitung Komplemen**
> >
> > $$P(\text{tidak satupun}) = 1 - 0{,}48 = 0{,}52 = 52\%$$
> >
> > **Hasil Akhir:** **(d)**. $52\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menambahkan kembali $P(G \cap B \cap S)$ setelah dikurangi ketiga irisan ganda — ini menyebabkan jawaban terlalu kecil.
> > > - Menjumlahkan semua probabilitas tanpa mengurangkan irisan, menghasilkan $P > 1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Pertanyaan meminta yang "tidak menonton satupun" — jangan salah membaca sebagai "menonton tepat satu olahraga".
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut tiga event sekaligus → langsung terapkan Inklusi-Eksklusi 3 event.
> > > - Jika hasil $P(A \cup B \cup C) > 1$ → ada kesalahan tanda; cek apakah irisan sudah dikurangi.

---

## **No. 2**

The probability that a visit to a primary care physician's (PCP) office results in neither lab work nor referral to a specialist is 35%. Of those coming to a PCP's office, 30% are referred to specialists and 40% require lab work.

Calculate the probability that a visit to a PCP's office results in both lab work and referral to a specialist.

a. 0.05  
b. 0.12  
c. 0.18  
d. 0.25  
e. 0.35  

> [!summary]+ **Jawaban No. 2**
> 
> **(a). $0{,}05$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Aditif:**
> >
> > $$P(R \cup L) = P(R) + P(L) - P(R \cap L)$$
> >
> > **Komplemen:**
> >
> > $$P(R \cup L) = 1 - P\bigl((R \cup L)^c\bigr) = 1 - P(R^c \cap L^c)$$
>
> **Diketahui:**
> - $P(R^c \cap L^c) = 0{,}35$ (tidak dirujuk DAN tidak perlu lab)
> - $P(R) = 0{,}30$, $P(L) = 0{,}40$
> - Target: $P(R \cap L)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(R \cup L)$ dari komplemen**
> >
> > $$P(R \cup L) = 1 - P(R^c \cap L^c) = 1 - 0{,}35 = 0{,}65$$
> >
> > **Langkah 2: Gunakan Hukum Aditif untuk cari $P(R \cap L)$**
> >
> > $$P(R \cap L) = P(R) + P(L) - P(R \cup L) = 0{,}30 + 0{,}40 - 0{,}65 = 0{,}05$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}05$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(R^c \cap L^c) = P(R^c) \cdot P(L^c)$ — ini hanya berlaku jika keduanya independen, yang tidak dijamin di soal.
> > > - Salah menghitung $P(R \cup L)$ sebagai $P(R) + P(L) = 0{,}70$ tanpa memperhatikan bahwa keduanya tidak mutually exclusive.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Tidak keduanya" ≠ $P(R^c) \cap P(L^c)$ yang berarti "tidak satu pun" — perhatikan perbedaannya.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut probabilitas "neither A nor B" → itu adalah $P(A^c \cap B^c)$, bukan $1 - P(A) - P(B)$.

---

## **No. 3**

You are given $P[A \cup B] = 0{,}7$ and $P[A \cup B'] = 0{,}9$.

Calculate $P[A]$.

a. 0.2  
b. 0.3  
c. 0.4  
d. 0.6  
e. 0.8  

> [!summary]+ **Jawaban No. 3**
> 
> **(d). $0{,}6$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Aditif:**
> >
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
> >
> > $$P(A \cup B') = P(A) + P(B') - P(A \cap B')$$
> >
> > **Sifat komplemen:** $P(B) + P(B') = 1$
> >
> > **Sifat irisan:** $P(A \cap B) + P(A \cap B') = P(A)$
>
> **Diketahui:**
> - $P(A \cup B) = 0{,}7$
> - $P(A \cup B') = 0{,}9$
> - Target: $P(A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis dua persamaan dari Hukum Aditif**
> >
> > $$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}7 \quad \cdots (1)$$
> >
> > $$P(A \cup B') = P(A) + P(B') - P(A \cap B') = 0{,}9 \quad \cdots (2)$$
> >
> > **Langkah 2: Jumlahkan kedua persamaan**
> >
> > $$(1) + (2): \quad 2P(A) + \bigl[P(B) + P(B')\bigr] - \bigl[P(A \cap B) + P(A \cap B')\bigr] = 1{,}6$$
> >
> > **Langkah 3: Sederhanakan menggunakan dua identitas**
> >
> > Karena $P(B) + P(B') = 1$ dan $P(A \cap B) + P(A \cap B') = P(A)$:
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
> > > - Tidak menyadari bahwa $P(A \cap B) + P(A \cap B') = P(A)$ — ini adalah pemartisian $A$ menjadi dua bagian yang exhaustive.
> > > - Mencoba menebak nilai $P(B)$ secara terpisah tanpa memanfaatkan penjumlahan dua persamaan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Notasi $B'$ berarti komplemen $B$, bukan sesuatu yang lain — jangan bingung dengan notasi turunan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada dua persamaan dengan variabel yang saling terkait → coba jumlahkan/kurangkan untuk eliminasi.

---

## **No. 4**

An urn contains 10 balls: 4 red and 6 blue. A second urn contains 16 red balls and an unknown number of blue balls. A single ball is drawn from each urn. The probability that both balls are the same color is 0.44.

Calculate the number of blue balls in the second urn.

a. 4  
b. 20  
c. 24  
d. 44  
e. 64  

> [!summary]+ **Jawaban No. 4**
> 
> **(a). $4$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Peluang gabungan untuk dua kejadian independen:**
> >
> > $$P(A \cap B) = P(A) \cdot P(B)$$
> >
> > **Hukum Probabilitas Total (dua skenario warna):**
> >
> > $$P(\text{sama warna}) = P(R_1 \cap R_2) + P(B_1 \cap B_2)$$
>
> **Diketahui:**
> - Urn 1: 4 merah, 6 biru → total 10 bola
> - Urn 2: 16 merah, $x$ biru → total $(16 + x)$ bola
> - $P(\text{sama warna}) = 0{,}44$
> - Target: nilai $x$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis persamaan probabilitas**
> >
> > $$P(\text{sama}) = \frac{4}{10} \cdot \frac{16}{16+x} + \frac{6}{10} \cdot \frac{x}{16+x} = 0{,}44$$
> >
> > **Langkah 2: Kalikan kedua ruas dengan $10(16+x)$**
> >
> > $$4 \cdot 16 + 6x = 4{,}4(16+x)$$
> >
> > $$64 + 6x = 70{,}4 + 4{,}4x$$
> >
> > **Langkah 3: Selesaikan persamaan linear**
> >
> > $$1{,}6x = 6{,}4 \implies x = 4$$
> >
> > **Hasil Akhir:** **(a)**. $4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa total bola di urn 2 adalah $16 + x$, bukan hanya $x$.
> > > - Menggunakan $P(\text{sama}) = P(\text{merah-merah}) \cdot P(\text{biru-biru})$ alih-alih menjumlahkannya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Kedua bola berwarna sama" mencakup DUA skenario: keduanya merah ATAU keduanya biru.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada variabel tak diketahui di penyebut → kalikan kedua ruas terlebih dahulu untuk menghindari error aljabar.

---

## **No. 5**

An auto insurance company has 10,000 policyholders. Each policyholder is classified as

(i) young or old;  
(ii) male or female; and  
(iii) married or single.  

Of these policyholders, 3000 are young, 4600 are male, and 7000 are married. The policyholders can also be classified as 1320 young males, 3010 married males, and 1400 young married persons. Finally, 600 of the policyholders are young married males.

Calculate the number of the company's policyholders who are young, female, and single.

a. 280  
b. 423  
c. 486  
d. 880  
e. 896  

> [!summary]+ **Jawaban No. 5**
> 
> **(d). $880$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.3 Metode Enumerasi]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]], [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Prinsip pemartisian:**
> >
> > $$N(A) = N(A \cap B) + N(A \cap B^c)$$
> >
> > Artinya: jumlah anggota $A$ = jumlah yang ada di $A$ dan $B$ + jumlah yang ada di $A$ tapi tidak di $B$.
>
> **Diketahui:**
> - $N(\text{Young}) = 3000$, $N(\text{Male}) = 4600$, $N(\text{Married}) = 7000$
> - $N(\text{Young} \cap \text{Male}) = 1320$, $N(\text{Married} \cap \text{Male}) = 3010$, $N(\text{Young} \cap \text{Married}) = 1400$
> - $N(\text{Young} \cap \text{Married} \cap \text{Male}) = 600$
> - Target: $N(\text{Young} \cap \text{Female} \cap \text{Single})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $N(\text{Young} \cap \text{Female})$**
> >
> > $$N(\text{Young} \cap \text{Female}) = N(\text{Young}) - N(\text{Young} \cap \text{Male}) = 3000 - 1320 = 1680$$
> >
> > **Langkah 2: Hitung $N(\text{Young} \cap \text{Married} \cap \text{Female})$**
> >
> > $$N(\text{Young} \cap \text{Married} \cap \text{Female}) = N(\text{Young} \cap \text{Married}) - N(\text{Young} \cap \text{Married} \cap \text{Male})$$
> >
> > $$= 1400 - 600 = 800$$
> >
> > **Langkah 3: Hitung $N(\text{Young} \cap \text{Female} \cap \text{Single})$ dengan pemartisian berdasarkan status pernikahan**
> >
> > $$N(\text{Young} \cap \text{Female} \cap \text{Single}) = N(\text{Young} \cap \text{Female}) - N(\text{Young} \cap \text{Female} \cap \text{Married})$$
> >
> > $$= 1680 - 800 = 880$$
> >
> > **Hasil Akhir:** **(d)**. $880$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula Inklusi-Eksklusi secara membabi buta tanpa memikirkan jalur pemartisian yang lebih efisien.
> > > - Salah menghitung $N(\text{Young} \cap \text{Female} \cap \text{Married})$ — harus memanfaatkan data irisan tiga kelompok.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Lupa bahwa setiap pemegang polis hanya termasuk SATU dari Young/Old, SATU dari Male/Female, SATU dari Married/Single — ini memungkinkan pemartisian bersih.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan tiga klasifikasi biner → gambar diagram pohon atau tabel 2×2×2 untuk visualisasi sebelum menghitung.

---

## **No. 6**

A public health researcher examines the medical records of a group of 937 men who died in 1999 and discovers that 210 of the men died from causes related to heart disease. Moreover, 312 of the 937 men had at least one parent who suffered from heart disease, and, of these 312 men, 102 died from causes related to heart disease.

Calculate the probability that a man randomly selected from this group died of causes related to heart disease, given that neither of his parents suffered from heart disease.

a. 0.115  
b. 0.173  
c. 0.224  
d. 0.327  
e. 0.514  

> [!summary]+ **Jawaban No. 6**
> 
> **(b). $0{,}173$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas Bersyarat:**
> >
> > $$P(H \mid F^c) = \frac{P(H \cap F^c)}{P(F^c)}$$
>
> **Diketahui:**
> - $H$ = meninggal karena penyakit jantung; $F$ = punya orang tua dengan penyakit jantung
> - $N(\text{total}) = 937$, $N(H) = 210$, $N(F) = 312$, $N(H \cap F) = 102$
> - Target: $P(H \mid F^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $N(H \cap F^c)$**
> >
> > $$N(H \cap F^c) = N(H) - N(H \cap F) = 210 - 102 = 108$$
> >
> > **Langkah 2: Hitung $N(F^c)$**
> >
> > $$N(F^c) = 937 - 312 = 625$$
> >
> > **Langkah 3: Hitung probabilitas bersyarat**
> >
> > $$P(H \mid F^c) = \frac{108/937}{625/937} = \frac{108}{625} \approx 0{,}173$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}173$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(H) = 210/937$ sebagai jawaban — ini adalah probabilitas marginal, bukan bersyarat.
> > > - Salah menghitung $N(H \cap F^c)$ sebagai $210 - 312$ (negatif) — harus dikurangi $N(H \cap F)$, bukan $N(F)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Given that neither of his parents suffered" → kondisi bersyarat adalah $F^c$ (tidak ada orang tua yang sakit), bukan $F$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "given that" atau "diketahui bahwa" → ini selalu probabilitas bersyarat, bukan marginal.

---

## **No. 7**

An insurance company estimates that 40% of policyholders who have only an auto policy will renew next year and 60% of policyholders who have only a homeowners policy will renew next year. The company estimates that 80% of policyholders who have both an auto policy and a homeowners policy will renew at least one of those policies next year. Company records show that 65% of policyholders have an auto policy, 50% of policyholders have a homeowners policy, and 15% of policyholders have both an auto policy and a homeowners policy.

Using the company's estimates, calculate the percentage of policyholders that will renew at least one policy next year.

a. 20%  
b. 29%  
c. 41%  
d. 53%  
e. 70%  

> [!summary]+ **Jawaban No. 7**
> 
> **(d). $53\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Probabilitas Total (pemartisian berdasarkan jenis polis):**
> >
> > $$P(\text{Renew}) = P(\text{Renew} \mid A \cap H^c) \cdot P(A \cap H^c) + P(\text{Renew} \mid A^c \cap H) \cdot P(A^c \cap H) + P(\text{Renew} \mid A \cap H) \cdot P(A \cap H)$$
>
> **Diketahui:**
> - $P(A) = 0{,}65$, $P(H) = 0{,}50$, $P(A \cap H) = 0{,}15$
> - $P(\text{Renew} \mid A \cap H^c) = 0{,}40$, $P(\text{Renew} \mid A^c \cap H) = 0{,}60$, $P(\text{Renew} \mid A \cap H) = 0{,}80$
> - Target: $P(\text{Renew})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung proporsi tiap kelompok**
> >
> > $$P(A \cap H^c) = P(A) - P(A \cap H) = 0{,}65 - 0{,}15 = 0{,}50$$
> >
> > $$P(A^c \cap H) = P(H) - P(A \cap H) = 0{,}50 - 0{,}15 = 0{,}35$$
> >
> > **Langkah 2: Terapkan Hukum Probabilitas Total**
> >
> > $$P(\text{Renew}) = 0{,}40 \times 0{,}50 + 0{,}60 \times 0{,}35 + 0{,}80 \times 0{,}15$$
> >
> > $$= 0{,}20 + 0{,}21 + 0{,}12 = 0{,}53 = 53\%$$
> >
> > **Hasil Akhir:** **(d)**. $53\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(A) = 0{,}65$ langsung sebagai $P(A \cap H^c)$ — padahal $P(A)$ sudah mencakup $A \cap H$, jadi harus dikurangi.
> > > - Mengabaikan kelompok pemegang polis yang punya keduanya ($A \cap H$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Only auto" = $A \cap H^c$, bukan $A$ secara keseluruhan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada tiga kelompok yang saling eksklusif (only A, only H, both) → partisi secara eksplisit sebelum menjumlahkan.

---

## **No. 8**

Among a large group of patients recovering from shoulder injuries, it is found that 22% visit both a physical therapist and a chiropractor, whereas 12% visit neither of these. The probability that a patient visits a chiropractor exceeds by 0.14 the probability that a patient visits a physical therapist.

Calculate the probability that a randomly chosen member of this group visits a physical therapist.

a. 0.26  
b. 0.38  
c. 0.40  
d. 0.48  
e. 0.62  

> [!summary]+ **Jawaban No. 8**
> 
> **(d). $0{,}48$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Eksperimen Acak dan Ruang Sampel]] |
> | **Connected Topics** | [[1.3 Metode Enumerasi]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Aditif:**
> >
> > $$P(C \cup T) = P(C) + P(T) - P(C \cap T)$$
> >
> > **Komplemen:**
> >
> > $$P(C \cup T) = 1 - P(C^c \cap T^c)$$
>
> **Diketahui:**
> - $P(C \cap T) = 0{,}22$, $P(C^c \cap T^c) = 0{,}12$
> - $P(C) = P(T) + 0{,}14$
> - Target: $P(T)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(C \cup T)$**
> >
> > $$P(C \cup T) = 1 - 0{,}12 = 0{,}88$$
> >
> > **Langkah 2: Substitusi ke Hukum Aditif**
> >
> > $$0{,}88 = P(C) + P(T) - 0{,}22$$
> >
> > $$P(C) + P(T) = 1{,}10$$
> >
> > **Langkah 3: Substitusi $P(C) = P(T) + 0{,}14$**
> >
> > $$P(T) + 0{,}14 + P(T) = 1{,}10$$
> >
> > $$2P(T) = 0{,}96 \implies P(T) = 0{,}48$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}48$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah mengartikan "exceeds by 0.14" sebagai $P(C) = 0{,}14$ saja, bukan $P(C) - P(T) = 0{,}14$.
> > > - Lupa mengurangkan $P(C \cap T)$ dalam Hukum Aditif.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Neither" → $P(C^c \cap T^c)$, bukan $1 - P(C) - P(T)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada dua unknown ($P(C)$ dan $P(T)$) → cari dua persamaan berbeda dan selesaikan sebagai sistem persamaan.

---

## **No. 9**

An insurance company examines its pool of auto insurance customers and gathers the following information:

(i) All customers insure at least one car.  
(ii) 70% of the customers insure more than one car.  
(iii) 20% of the customers insure a sports car.  
(iv) Of those customers who insure more than one car, 15% insure a sports car.  

Calculate the probability that a randomly selected customer insures exactly one car and that car is not a sports car.

a. 0.13  
b. 0.21  
c. 0.24  
d. 0.25  
e. 0.30  

> [!summary]+ **Jawaban No. 9**
> 
> **(b). $0{,}21$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Probabilitas Bersyarat:**
> >
> > $$P(M \cap S) = P(S \mid M) \cdot P(M)$$
> >
> > **Hukum De Morgan:**
> >
> > $$P(M^c \cap S^c) = 1 - P(M \cup S) = 1 - P(M) - P(S) + P(M \cap S)$$
>
> **Diketahui:**
> - $M$ = insures more than one car; $S$ = insures a sports car
> - $P(M) = 0{,}70$, $P(S) = 0{,}20$, $P(S \mid M) = 0{,}15$
> - Target: $P(M^c \cap S^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(M \cap S)$**
> >
> > $$P(M \cap S) = P(S \mid M) \cdot P(M) = 0{,}15 \times 0{,}70 = 0{,}105$$
> >
> > **Langkah 2: Terapkan De Morgan**
> >
> > $$P(M^c \cap S^c) = 1 - P(M \cup S) = 1 - P(M) - P(S) + P(M \cap S)$$
> >
> > $$= 1 - 0{,}70 - 0{,}20 + 0{,}105 = 0{,}205 \approx 0{,}21$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}21$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(M^c \cap S^c) = P(M^c) \times P(S^c) = 0{,}30 \times 0{,}80 = 0{,}24$ — ini hanya valid jika $M$ dan $S$ independen.
> > > - Salah menghitung $P(M \cap S) = P(M) \times P(S)$ tanpa menggunakan $P(S \mid M)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - $M^c$ = insures exactly one car (bukan "tidak punya mobil"), karena semua pelanggan punya minimal satu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika probabilitas bersyarat $P(A \mid B)$ diberikan → hitung $P(A \cap B) = P(A \mid B) \cdot P(B)$ terlebih dahulu.

---

## **No. 10**

An actuary studying the insurance preferences of automobile owners makes the following conclusions:

(i) An automobile owner is twice as likely to purchase collision coverage as disability coverage.  
(ii) The event that an automobile owner purchases collision coverage is independent of the event that he or she purchases disability coverage.  
(iii) The probability that an automobile owner purchases both collision and disability coverages is 0.15.  

Calculate the probability that an automobile owner purchases neither collision nor disability coverage.

a. 0.18  
b. 0.33  
c. 0.48  
d. 0.67  
e. 0.82  

> [!summary]+ **Jawaban No. 10**
> 
> **(b). $0{,}33$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.5 Kejadian Independen]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Kejadian Independen:**
> >
> > $$P(C \cap D) = P(C) \cdot P(D)$$
> >
> > **Independensi komplemen:** Jika $C \perp D$, maka $C^c \perp D^c$, sehingga:
> >
> > $$P(C^c \cap D^c) = P(C^c) \cdot P(D^c)$$
>
> **Diketahui:**
> - $P(C) = 2P(D)$, $C \perp D$, $P(C \cap D) = 0{,}15$
> - Target: $P(C^c \cap D^c)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $P(D)$ menggunakan independensi**
> >
> > $$P(C \cap D) = P(C) \cdot P(D) = 2P(D) \cdot P(D) = 2[P(D)]^2 = 0{,}15$$
> >
> > $$[P(D)]^2 = 0{,}075 \implies P(D) = \sqrt{0{,}075} \approx 0{,}2739$$
> >
> > Lebih elegan: $P(D) = 0{,}15/P(C)$ dan $P(C) = 2P(D)$, sehingga:
> >
> > $$[P(D)]^2 = \frac{0{,}15}{2} \implies P(D) = \sqrt{0{,}075}$$
> >
> > Namun gunakan nilai eksak: $P(D)^2 = 0{,}075$, $P(C) = 2P(D)$.
> >
> > **Langkah 2: Gunakan nilai numerik yang lebih bersih**
> >
> > Dari $P(C \cap D) = 0{,}15$ dan $P(C) = 2P(D)$:
> > $2[P(D)]^2 = 0{,}15 \Rightarrow P(D) \approx 0{,}2739$, $P(C) \approx 0{,}5477$.
> >
> > **Langkah 3: Hitung $P(C^c \cap D^c)$ menggunakan independensi komplemen**
> >
> > $$P(C^c \cap D^c) = (1 - P(C))(1 - P(D)) = (1 - 2\sqrt{0{,}075})(1 - \sqrt{0{,}075})$$
> >
> > Dengan $\sqrt{0{,}075} \approx 0{,}2739$:
> >
> > $$(1 - 0{,}5477)(1 - 0{,}2739) = 0{,}4523 \times 0{,}7261 \approx 0{,}33$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}33$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa independensi berlaku juga untuk komplemen: $P(C^c \cap D^c) \neq 1 - P(C) - P(D) + P(C \cap D)$ tanpa memanfaatkan independensi.
> > > - Menggunakan $P(C \cap D) = 0{,}15$ tanpa menyadari bahwa ini memberi persamaan kuadrat untuk $P(D)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Twice as likely" → $P(C) = 2P(D)$, bukan $P(C) = P(D) + 2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "independent" → gunakan sifat $P(A \cap B) = P(A) \cdot P(B)$ dan komplemen juga independen.

---

## **No. 11**

A doctor is studying the relationship between blood pressure and heartbeat abnormalities in her patients. She tests a random sample of her patients and notes their blood pressures (high, low, or normal) and their heartbeats (regular or irregular). She finds that:

(i) 14% have high blood pressure.  
(ii) 22% have low blood pressure.  
(iii) 15% have an irregular heartbeat.  
(iv) Of those with an irregular heartbeat, one-third have high blood pressure.  
(v) Of those with normal blood pressure, one-eighth have an irregular heartbeat.  

Calculate the portion of the patients selected who have a regular heartbeat and low blood pressure.

a. 2%  
b. 5%  
c. 8%  
d. 9%  
e. 20%  

> [!summary]+ **Jawaban No. 11**
> 
> **(e). $20\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas bersyarat:**
> >
> > $$P(A \cap B) = P(A \mid B) \cdot P(B)$$
> >
> > **Pemartisian:** Total baris dan kolom dalam tabel kontingensi harus konsisten.
>
> **Diketahui:**
> - $P(\text{High BP}) = 0{,}14$, $P(\text{Low BP}) = 0{,}22$, $P(\text{Normal BP}) = 0{,}64$
> - $P(\text{Irregular}) = 0{,}15$
> - $P(\text{High BP} \mid \text{Irregular}) = 1/3$
> - $P(\text{Irregular} \mid \text{Normal BP}) = 1/8$
> - Target: $P(\text{Regular} \cap \text{Low BP})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bangun tabel kontingensi**
> >
> > | | High BP | Low BP | Normal BP | Total |
> > |:-:|:-:|:-:|:-:|:-:|
> > | **Regular** | ? | ? | ? | 0.85 |
> > | **Irregular** | ? | ? | ? | 0.15 |
> > | **Total** | 0.14 | 0.22 | 0.64 | 1.00 |
> >
> > **Langkah 2: Hitung sel yang bisa dihitung langsung**
> >
> > $$P(\text{High BP} \cap \text{Irregular}) = \frac{1}{3} \times 0{,}15 = 0{,}05$$
> >
> > $$P(\text{Normal BP} \cap \text{Irregular}) = \frac{1}{8} \times 0{,}64 = 0{,}08$$
> >
> > **Langkah 3: Hitung $P(\text{Low BP} \cap \text{Irregular})$ dari baris Total Irregular**
> >
> > $$P(\text{Low BP} \cap \text{Irregular}) = 0{,}15 - 0{,}05 - 0{,}08 = 0{,}02$$
> >
> > **Langkah 4: Hitung $P(\text{Low BP} \cap \text{Regular})$**
> >
> > $$P(\text{Low BP} \cap \text{Regular}) = P(\text{Low BP}) - P(\text{Low BP} \cap \text{Irregular}) = 0{,}22 - 0{,}02 = 0{,}20$$
> >
> > **Hasil Akhir:** **(e)**. $20\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{Regular} \cap \text{Low}) = P(\text{Regular}) \times P(\text{Low}) = 0{,}85 \times 0{,}22$ — ini hanya valid jika keduanya independen.
> > > - Salah menghitung Normal BP: $1 - 0{,}14 - 0{,}22 = 0{,}64$ (jangan lupa dikurangi keduanya).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Membaca informasi (iv) sebagai $P(\text{Irregular} \mid \text{High BP})$ padahal yang diberikan adalah $P(\text{High BP} \mid \text{Irregular})$ — urutan kondisi penting!
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada beberapa informasi bersyarat → buat tabel kontingensi lengkap sebelum menjawab.

---

## **No. 12**

An actuary is studying the prevalence of three health risk factors, denoted by A, B, and C, within a population of women. For each of the three factors, the probability is 0.1 that a woman in the population has only this risk factor (and no others). For any two of the three factors, the probability is 0.12 that she has exactly these two risk factors (but not the other). The probability that a woman has all three risk factors, given that she has A and B, is 1/3.

Calculate the probability that a woman has none of the three risk factors, given that she does not have risk factor A.

a. 0.280  
b. 0.311  
c. 0.467  
d. 0.484  
e. 0.700  

> [!summary]+ **Jawaban No. 12**
> 
> **(c). $0{,}467$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.4 Probabilitas Bersyarat]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]], [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Prinsip Inklusi-Eksklusi tiga event:**
> >
> > $$P(A \cup B \cup C) = \sum P(\text{only one}) + \sum P(\text{exactly two}) + P(\text{all three})$$
> >
> > **Probabilitas bersyarat:**
> >
> > $$P\bigl((A \cup B \cup C)^c \mid A^c\bigr) = \frac{P\bigl((A \cup B \cup C)^c \cap A^c\bigr)}{P(A^c)}$$
>
> **Diketahui:**
> - $P(\text{only } A) = P(\text{only } B) = P(\text{only } C) = 0{,}10$
> - $P(\text{exactly } A \cap B) = P(\text{exactly } A \cap C) = P(\text{exactly } B \cap C) = 0{,}12$
> - $P(A \cap B \cap C \mid A \cap B) = 1/3$
> - Target: $P\bigl((A \cup B \cup C)^c \mid A^c\bigr)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $P(A \cap B \cap C)$**
> >
> > $P(A \cap B) = P(\text{exactly }A\cap B) + P(A \cap B \cap C) = 0{,}12 + x$ di mana $x = P(A\cap B\cap C)$.
> >
> > $$\frac{x}{0{,}12 + x} = \frac{1}{3} \implies 3x = 0{,}12 + x \implies 2x = 0{,}12 \implies x = 0{,}06$$
> >
> > **Langkah 2: Hitung $P(A \cup B \cup C)$**
> >
> > $$P(A \cup B \cup C) = 3(0{,}10) + 3(0{,}12) + 0{,}06 = 0{,}30 + 0{,}36 + 0{,}06 = 0{,}72$$
> >
> > **Langkah 3: Hitung $P(A^c)$**
> >
> > $P(A)$ = only A + (exactly A∩B) + (exactly A∩C) + (all three) = $0{,}10 + 0{,}12 + 0{,}12 + 0{,}06 = 0{,}40$
> >
> > $$P(A^c) = 1 - 0{,}40 = 0{,}60$$
> >
> > **Langkah 4: Hitung $P\bigl((A \cup B \cup C)^c \cap A^c\bigr)$**
> >
> > $(A \cup B \cup C)^c \subset A^c$, sehingga:
> >
> > $$P\bigl((A \cup B \cup C)^c \cap A^c\bigr) = P\bigl((A \cup B \cup C)^c\bigr) = 1 - 0{,}72 = 0{,}28$$
> >
> > **Langkah 5: Hitung probabilitas bersyarat**
> >
> > $$P\bigl((A \cup B \cup C)^c \mid A^c\bigr) = \frac{0{,}28}{0{,}60} \approx 0{,}467$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}467$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $P(A \cap B)$: harus menyertakan irisan tiga ($A \cap B \cap C$), bukan hanya yang "tepat dua."
> > > - Tidak menyadari bahwa $(A \cup B \cup C)^c \subseteq A^c$, sehingga kompulasi pembilang menjadi sederhana.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Exactly two" ≠ $P(A \cap B)$ — "exactly A and B" artinya $A \cap B \cap C^c$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada probabilitas bersyarat tentang "all three given two" → ini adalah cara tersembunyi untuk mencari $P(A \cap B \cap C)$.

---

## **No. 13**

In modeling the number of claims filed by an individual under an automobile policy during a three-year period, an actuary makes the simplifying assumption that for all integers $n \geq 0$, $p(n+1) = 0{,}2 \cdot p(n)$, where $p(n)$ represents the probability that the policyholder files $n$ claims during the period.

Under this assumption, calculate the probability that a policyholder files more than one claim during the period.

a. 0.04  
b. 0.16  
c. 0.20  
d. 0.80  
e. 0.96  

> [!summary]+ **Jawaban No. 13**
> 
> **(a). $0{,}04$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Deret geometri tak hingga:**
> >
> > $$\sum_{k=0}^{\infty} r^k = \frac{1}{1-r}, \quad |r| < 1$$
> >
> > **Syarat total probabilitas:**
> >
> > $$\sum_{n=0}^{\infty} p(n) = 1$$
>
> **Diketahui:**
> - Rekursi: $p(n+1) = 0{,}2 \cdot p(n)$ untuk semua $n \geq 0$
> - Target: $P(N > 1) = 1 - P(N \leq 1)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Ekspresikan semua $p(n)$ dalam $p(0)$**
> >
> > $$p(n) = (0{,}2)^n \cdot p(0)$$
> >
> > **Langkah 2: Gunakan syarat normalisasi untuk cari $p(0)$**
> >
> > $$\sum_{n=0}^{\infty} (0{,}2)^n p(0) = p(0) \cdot \frac{1}{1 - 0{,}2} = \frac{p(0)}{0{,}8} = 1$$
> >
> > $$p(0) = 0{,}8$$
> >
> > **Langkah 3: Hitung $P(N \leq 1)$**
> >
> > $$p(0) = 0{,}8, \quad p(1) = 0{,}2 \times 0{,}8 = 0{,}16$$
> >
> > $$P(N \leq 1) = 0{,}8 + 0{,}16 = 0{,}96$$
> >
> > **Langkah 4: Hitung $P(N > 1)$**
> >
> > $$P(N > 1) = 1 - 0{,}96 = 0{,}04$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}04$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa deret geometri hanya konvergen jika $|r| < 1$ — di sini $r = 0{,}2$, memenuhi syarat.
> > > - Tidak ternormalisasi: mengasumsikan $p(0) = 1/5$ tanpa menurunkannya dari syarat total probabilitas.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "More than one" → $P(N > 1) = P(N \geq 2)$, bukan $P(N > 0)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika rekursi berbentuk $p(n+1) = r \cdot p(n)$ → ini distribusi geometrik; gunakan deret geometrik untuk normalisasi.

---

## **No. 14**

An insurer offers a health plan to the employees of a large company. As part of this plan, the individual employees may choose exactly two of the supplementary coverages A, B, and C, or they may choose no supplementary coverage. The proportions of the company's employees that choose coverages A, B, and C are 1/4, 1/3, and 5/12 respectively.

Calculate the probability that a randomly chosen employee will choose no supplementary coverage.

a. 0  
b. 47/144  
c. 1/2  
d. 97/144  
e. 7/9  

> [!summary]+ **Jawaban No. 14**
> 
> **(c). $\dfrac{1}{2}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.3 Metode Enumerasi]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Pemartisian:** Setiap karyawan memilih tepat dua atau tidak satupun.
> >
> > $$P(A) = P(\text{pilih }A\text{ dan }B\text{ saja}) + P(\text{pilih }A\text{ dan }C\text{ saja})$$
> >
> > **Sistem persamaan linear tiga variabel** digunakan untuk mencari masing-masing pasangan.
>
> **Diketahui:**
> - $P(A) = 1/4$, $P(B) = 1/3$, $P(C) = 5/12$
> - Setiap karyawan pilih tepat dua coverage ATAU tidak ada
> - Misalkan: $x = P(\text{A dan B saja})$, $y = P(\text{A dan C saja})$, $z = P(\text{B dan C saja})$
> - Target: $w = 1 - (x + y + z)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis tiga persamaan dari masing-masing $P(A)$, $P(B)$, $P(C)$**
> >
> > $$x + y = \frac{1}{4} \quad \cdots (1)$$
> >
> > $$x + z = \frac{1}{3} \quad \cdots (2)$$
> >
> > $$y + z = \frac{5}{12} \quad \cdots (3)$$
> >
> > **Langkah 2: Jumlahkan ketiga persamaan**
> >
> > $$2(x + y + z) = \frac{1}{4} + \frac{1}{3} + \frac{5}{12} = \frac{3 + 4 + 5}{12} = 1$$
> >
> > $$x + y + z = \frac{1}{2}$$
> >
> > **Langkah 3: Hitung probabilitas tidak memilih coverage apapun**
> >
> > $$w = 1 - (x + y + z) = 1 - \frac{1}{2} = \frac{1}{2}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{1}{2}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(A \cap B) = P(A) \times P(B)$ — ini tidak berlaku di sini karena tidak ada asumsi independensi.
> > > - Lupa bahwa $P(A)$ hanya mencakup mereka yang memilih A (baik dengan B maupun C), bukan A saja.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Exactly two" → setiap orang yang memilih A juga memilih tepat satu lagi (B atau C). Tidak ada yang memilih hanya A.
> >
> > > [!CAUTION] Red Flags
> > > - Trik penjumlahan tiga persamaan sekaligus sering muncul di soal sistem tiga variabel → coba langsung jumlahkan semua sebelum selesaikan satu per satu.

---

## **No. 15**

An insurance company determines that $N$, the number of claims received in a week, is a random variable with $P[N = n] = \dfrac{1}{2^{n+1}}$ where $n \geq 0$. The company also determines that the number of claims received in a given week is independent of the number of claims received in any other week.

Calculate the probability that exactly seven claims will be received during a given two-week period.

a. 1/256  
b. 1/128  
c. 7/512  
d. 1/64  
e. 1/32  

> [!summary]+ **Jawaban No. 15**
> 
> **(d). $\dfrac{1}{64}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[2.5 Distribusi Diskrit Umum]], [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas gabungan dua minggu (konvolusi):**
> >
> > $$P(N_1 + N_2 = 7) = \sum_{n=0}^{7} P(N_1 = n) \cdot P(N_2 = 7-n)$$
> >
> > Di mana $P(N = n) = \dfrac{1}{2^{n+1}}$.
>
> **Diketahui:**
> - $P(N_1 = n) = 1/2^{n+1}$, $N_1$ dan $N_2$ independen, distribusi identik
> - Target: $P(N_1 + N_2 = 7)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis formula konvolusi**
> >
> > $$P(N_1 + N_2 = 7) = \sum_{n=0}^{7} \frac{1}{2^{n+1}} \cdot \frac{1}{2^{(7-n)+1}} = \sum_{n=0}^{7} \frac{1}{2^{n+1} \cdot 2^{8-n}}$$
> >
> > **Langkah 2: Sederhanakan setiap suku**
> >
> > $$\frac{1}{2^{n+1} \cdot 2^{8-n}} = \frac{1}{2^{n+1+8-n}} = \frac{1}{2^9} = \frac{1}{512}$$
> >
> > Setiap dari 8 suku (n = 0, 1, ..., 7) bernilai $1/512$.
> >
> > **Langkah 3: Jumlahkan 8 suku identik**
> >
> > $$P(N_1 + N_2 = 7) = 8 \times \frac{1}{512} = \frac{8}{512} = \frac{1}{64}$$
> >
> > **Hasil Akhir:** **(d)**. $\dfrac{1}{64}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung eksponen: $2^{n+1} \cdot 2^{(7-n)+1} = 2^{n+1+8-n} = 2^9$, bukan $2^7$.
> > > - Tidak menjumlahkan semua 8 pasangan (n = 0 sampai 7).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Two-week period" → jumlah klaim adalah $N_1 + N_2$, bukan $N$ dalam satu minggu dengan parameter dua kali lipat.
> >
> > > [!CAUTION] Red Flags
> > > - Jika distribusi $P(N=n) = r^{n+1}$ untuk semua $n \geq 0$ → kenali ini sebagai distribusi geometrik; gunakan konvolusi untuk penjumlahan dua variabel independen.

---

## **No. 16**

An insurance company pays hospital claims. The number of claims that include emergency room or operating room charges is 85% of the total number of claims. The number of claims that do not include emergency room charges is 25% of the total number of claims. The occurrence of emergency room charges is independent of the occurrence of operating room charges on hospital claims.

Calculate the probability that a claim submitted to the insurance company includes operating room charges.

a. 0.10  
b. 0.20  
c. 0.25  
d. 0.40  
e. 0.80  

> [!summary]+ **Jawaban No. 16**
> 
> **(d). $0{,}40$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.5 Kejadian Independen]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Aksioma dan Perhitungan Probabilitas]] |
> | **Connected Topics** | [[1.4 Probabilitas Bersyarat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Hukum Aditif + Independensi:**
> >
> > $$P(E \cup O) = P(E) + P(O) - P(E \cap O) = P(E) + P(O) - P(E) \cdot P(O)$$
>
> **Diketahui:**
> - $P(E \cup O) = 0{,}85$, $P(E^c) = 0{,}25 \Rightarrow P(E) = 0{,}75$
> - $E \perp O$ (independen)
> - Target: $P(O)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan independensi dalam Hukum Aditif**
> >
> > $$0{,}85 = 0{,}75 + P(O) - 0{,}75 \cdot P(O)$$
> >
> > $$0{,}85 - 0{,}75 = P(O)(1 - 0{,}75) = 0{,}25 \cdot P(O)$$
> >
> > $$P(O) = \frac{0{,}10}{0{,}25} = 0{,}40$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}40$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menggunakan $P(E) = 0{,}25$ padahal yang diberikan adalah $P(E^c) = 0{,}25$, sehingga $P(E) = 0{,}75$.
> > > - Tidak memanfaatkan independensi: menggunakan $P(E \cap O)$ sebagai variabel tak diketahui tambahan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Do not include emergency room" → $P(E^c) = 0{,}25$, bukan $P(E) = 0{,}25$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "independent" → segera ganti $P(A \cap B)$ dengan $P(A) \cdot P(B)$.

---

## **No. 17**

Two instruments are used to measure the height, $h$, of a tower. The error made by the less accurate instrument is normally distributed with mean 0 and standard deviation $0{,}0056h$. The error made by the more accurate instrument is normally distributed with mean 0 and standard deviation $0{,}0044h$.

The errors from the two instruments are independent of each other.

Calculate the probability that the average value of the two measurements is within $0{,}005h$ of the height of the tower.

a. 0.38  
b. 0.47  
c. 0.68  
d. 0.84  
e. 0.90  

> [!summary]+ **Jawaban No. 17**
> 
> **(d). $0{,}84$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 Kejadian Independen]], [[3.5 Independensi dan Korelasi]] |
> | **Connected Topics** | [[4.3 Teorema Limit Pusat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 4; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **Kombinasi linear variabel normal independen:**
> >
> > $$X_1 \sim N(0, \sigma_1^2),\ X_2 \sim N(0, \sigma_2^2),\ X_1 \perp X_2$$
> >
> > $$\Rightarrow \bar{X} = \frac{X_1 + X_2}{2} \sim N\!\left(0,\ \frac{\sigma_1^2 + \sigma_2^2}{4}\right)$$
> >
> > **Standardisasi:**
> >
> > $$P(-a \leq \bar{X} \leq a) = P\!\left(\frac{-a}{\sigma_{\bar{X}}} \leq Z \leq \frac{a}{\sigma_{\bar{X}}}\right)$$
>
> **Diketahui:**
> - $X_1 \sim N(0,\ (0{,}0056h)^2)$, $X_2 \sim N(0,\ (0{,}0044h)^2)$, independen
> - Target: $P\bigl(|\bar{X}| \leq 0{,}005h\bigr)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung variansi dari rata-rata**
> >
> > $$\text{Var}(\bar{X}) = \frac{\sigma_1^2 + \sigma_2^2}{4} = \frac{(0{,}0056)^2 + (0{,}0044)^2}{4} h^2$$
> >
> > $$= \frac{0{,}00003136 + 0{,}00001936}{4} h^2 = \frac{0{,}00005072}{4} h^2 = 0{,}00001268 h^2$$
> >
> > $$\sigma_{\bar{X}} = \sqrt{0{,}00001268}\, h \approx 0{,}003561 h$$
> >
> > **Langkah 2: Standardisasi**
> >
> > $$P\bigl(|\bar{X}| \leq 0{,}005h\bigr) = P\!\left(-\frac{0{,}005h}{0{,}003561h} \leq Z \leq \frac{0{,}005h}{0{,}003561h}\right)$$
> >
> > $$\approx P(-1{,}40 \leq Z \leq 1{,}40)$$
> >
> > **Langkah 3: Cari dari tabel normal**
> >
> > $$P(-1{,}40 \leq Z \leq 1{,}40) = 2\Phi(1{,}40) - 1 = 2(0{,}9192) - 1 = 0{,}84$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}84$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $\sigma_{\bar{X}}$: variansi rata-rata = $(\sigma_1^2 + \sigma_2^2)/4$, bukan $(\sigma_1 + \sigma_2)/2$.
> > > - Menggunakan $\sigma_{\bar{X}} = (\sigma_1 + \sigma_2)/2 = (0{,}0056 + 0{,}0044)/2 \cdot h = 0{,}005h$ — ini salah.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Within $0{,}005h$" → $|\bar{X} - h| \leq 0{,}005h$; karena error berdistribusi di sekitar nol, ini ekuivalen dengan $|\bar{X}| \leq 0{,}005h$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada kombinasi dua variabel normal independen → variansi dijumlahkan, bukan standar deviasinya.

---

## **No. 18**

An auto insurance company insures drivers of all ages. An actuary compiled the following statistics on the company's insured drivers:

| Age of Driver | Probability of Accident | Portion of Company's Insured Drivers |
|:-:|:-:|:-:|
| 16–20 | 0.06 | 0.08 |
| 21–30 | 0.03 | 0.15 |
| 31–65 | 0.02 | 0.49 |
| 66–99 | 0.04 | 0.28 |

A randomly selected driver that the company insures has an accident. Calculate the probability that the driver was age 16–20.

a. 0.13  
b. 0.16  
c. 0.19  
d. 0.23  
e. 0.40  

> [!summary]+ **Jawaban No. 18**
> 
> **(b). $0{,}16$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(B_i \mid A) = \frac{P(A \mid B_i) \cdot P(B_i)}{\sum_{j} P(A \mid B_j) \cdot P(B_j)}$$
>
> **Diketahui:**
> - $B_1$: usia 16–20, $P(B_1) = 0{,}08$, $P(A \mid B_1) = 0{,}06$
> - $B_2$: usia 21–30, $P(B_2) = 0{,}15$, $P(A \mid B_2) = 0{,}03$
> - $B_3$: usia 31–65, $P(B_3) = 0{,}49$, $P(A \mid B_3) = 0{,}02$
> - $B_4$: usia 66–99, $P(B_4) = 0{,}28$, $P(A \mid B_4) = 0{,}04$
> - Target: $P(B_1 \mid A)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A)$ dengan Hukum Probabilitas Total**
> >
> > $$P(A) = 0{,}06(0{,}08) + 0{,}03(0{,}15) + 0{,}02(0{,}49) + 0{,}04(0{,}28)$$
> >
> > $$= 0{,}0048 + 0{,}0045 + 0{,}0098 + 0{,}0112 = 0{,}0303$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(B_1 \mid A) = \frac{0{,}06 \times 0{,}08}{0{,}0303} = \frac{0{,}0048}{0{,}0303} \approx 0{,}1584 \approx 0{,}16$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}16$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $P(B_1) = 0{,}08$ saja sebagai jawaban — ini adalah probabilitas prior, bukan posterior.
> > > - Salah menjumlahkan: $0{,}06 + 0{,}03 + 0{,}02 + 0{,}04$ (probabilitas kecelakaan, bukan tertimbang).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal bertanya setelah diketahui terjadi kecelakaan (posterior) → ini adalah Teorema Bayes, bukan probabilitas prior.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberikan tabel dengan "probabilitas kondisi" dan "proporsi" → hampir pasti Teorema Bayes.

---

## **No. 19**

An insurance company issues life insurance policies in three separate categories: standard, preferred, and ultra-preferred. Of the company's policyholders, 50% are standard, 40% are preferred, and 10% are ultra-preferred. Each standard policyholder has probability 0.010 of dying in the next year, each preferred policyholder has probability 0.005 of dying in the next year, and each ultra-preferred policyholder has probability 0.001 of dying in the next year.

A policyholder dies in the next year. Calculate the probability that the deceased policyholder was ultra-preferred.

a. 0.0001  
b. 0.0010  
c. 0.0071  
d. 0.0141  
e. 0.2817  

> [!summary]+ **Jawaban No. 19**
> 
> **(d). $0{,}0141$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(U \mid D) = \frac{P(D \mid U) \cdot P(U)}{P(D \mid S) \cdot P(S) + P(D \mid F) \cdot P(F) + P(D \mid U) \cdot P(U)}$$
>
> **Diketahui:**
> - $P(S) = 0{,}50$, $P(F) = 0{,}40$, $P(U) = 0{,}10$
> - $P(D \mid S) = 0{,}010$, $P(D \mid F) = 0{,}005$, $P(D \mid U) = 0{,}001$
> - Target: $P(U \mid D)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(D)$**
> >
> > $$P(D) = 0{,}010(0{,}50) + 0{,}005(0{,}40) + 0{,}001(0{,}10)$$
> >
> > $$= 0{,}0050 + 0{,}0020 + 0{,}0001 = 0{,}0071$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(U \mid D) = \frac{0{,}001 \times 0{,}10}{0{,}0071} = \frac{0{,}0001}{0{,}0071} \approx 0{,}0141$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}0141$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira jawaban adalah $P(D \mid U) = 0{,}001$ — ini probabilitas bersyarat "terbalik."
> > > - Lupa mengalikan $P(D \mid U)$ dengan $P(U)$ di pembilang.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Ultra-preferred" memiliki probabilitas kematian terendah, sehingga meski populasinya kecil (10%), kontribusinya ke $P(D)$ sangat kecil.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "given that a policyholder dies" → selalu Teorema Bayes, di mana $P(D)$ di penyebut harus dihitung dari Hukum Total.

---

## **No. 20**

Upon arrival at a hospital's emergency room, patients are categorized according to their condition as critical, serious, or stable. In the past year:

(i) 10% of the emergency room patients were critical;  
(ii) 30% of the emergency room patients were serious;  
(iii) the rest of the emergency room patients were stable;  
(iv) 40% of the critical patients died;  
(vi) 10% of the serious patients died; and  
(vii) 1% of the stable patients died.  

Given that a patient survived, calculate the probability that the patient was categorized as serious upon arrival.

a. 0.06  
b. 0.29  
c. 0.30  
d. 0.39  
e. 0.64  

> [!summary]+ **Jawaban No. 20**
> 
> **(b). $0{,}29$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(\text{Serious} \mid \text{Survived}) = \frac{P(\text{Survived} \mid \text{Serious}) \cdot P(\text{Serious})}{P(\text{Survived})}$$
>
> **Diketahui:**
> - $P(\text{Critical}) = 0{,}10$, $P(\text{Serious}) = 0{,}30$, $P(\text{Stable}) = 0{,}60$
> - $P(\text{Died} \mid \text{Critical}) = 0{,}40$, $P(\text{Died} \mid \text{Serious}) = 0{,}10$, $P(\text{Died} \mid \text{Stable}) = 0{,}01$
> - Target: $P(\text{Serious} \mid \text{Survived})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(\text{Died})$**
> >
> > $$P(\text{Died}) = 0{,}40(0{,}10) + 0{,}10(0{,}30) + 0{,}01(0{,}60) = 0{,}04 + 0{,}03 + 0{,}006 = 0{,}076$$
> >
> > $$P(\text{Survived}) = 1 - 0{,}076 = 0{,}924$$
> >
> > **Langkah 2: Hitung pembilang**
> >
> > $$P(\text{Survived} \mid \text{Serious}) \cdot P(\text{Serious}) = (1 - 0{,}10)(0{,}30) = 0{,}90 \times 0{,}30 = 0{,}27$$
> >
> > **Langkah 3: Terapkan Bayes**
> >
> > $$P(\text{Serious} \mid \text{Survived}) = \frac{0{,}27}{0{,}924} \approx 0{,}292 \approx 0{,}29$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}29$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{Serious} \mid \text{Survived}) = P(\text{Serious}) = 0{,}30$ — ini mengabaikan informasi kondisi selamat.
> > > - Lupa bahwa $P(\text{Survived} \mid \text{Serious}) = 1 - 0{,}10 = 0{,}90$, bukan $0{,}10$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "The rest were stable" → $P(\text{Stable}) = 1 - 0{,}10 - 0{,}30 = 0{,}60$, bukan 50%.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "given that survived" → hitung $P(\text{Survived})$ dulu menggunakan Hukum Total.

---

## **No. 21**

A health study tracked a group of persons for five years. At the beginning of the study, 20% were classified as heavy smokers, 30% as light smokers, and 50% as nonsmokers.

Results of the study showed that light smokers were twice as likely as nonsmokers to die during the five-year study, but only half as likely as heavy smokers.

A randomly selected participant from the study died during the five-year period. Calculate the probability that the participant was a heavy smoker.

a. 0.20  
b. 0.25  
c. 0.35  
d. 0.42  
e. 0.57  

> [!summary]+ **Jawaban No. 21**
> 
> **(d). $0{,}42$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(H \mid D) = \frac{P(D \mid H) \cdot P(H)}{P(D \mid H) \cdot P(H) + P(D \mid L) \cdot P(L) + P(D \mid N) \cdot P(N)}$$
>
> **Diketahui:**
> - $P(H) = 0{,}20$, $P(L) = 0{,}30$, $P(N) = 0{,}50$
> - Relasi: $P(D \mid L) = 2 P(D \mid N)$ dan $P(D \mid L) = \frac{1}{2} P(D \mid H)$
> - Misalkan $P(D \mid L) = 2k$, maka $P(D \mid N) = k$ dan $P(D \mid H) = 4k$
> - Target: $P(H \mid D)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tetapkan notasi relatif**
> >
> > $$P(D \mid N) = k,\quad P(D \mid L) = 2k,\quad P(D \mid H) = 4k$$
> >
> > **Langkah 2: Hitung $P(D)$**
> >
> > $$P(D) = 4k(0{,}20) + 2k(0{,}30) + k(0{,}50) = 0{,}80k + 0{,}60k + 0{,}50k = 1{,}90k$$
> >
> > **Langkah 3: Terapkan Bayes**
> >
> > $$P(H \mid D) = \frac{4k \times 0{,}20}{1{,}90k} = \frac{0{,}80}{1{,}90} \approx 0{,}421 \approx 0{,}42$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}42$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menginterpretasikan "half as likely as heavy smokers": $P(D \mid L) = \frac{1}{2} P(D \mid H)$, bukan $P(D \mid H) = \frac{1}{2} P(D \mid L)$.
> > > - Mencoba mencari nilai numerik $k$ — tidak perlu, karena $k$ saling menghilang.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Twice as likely as nonsmokers to die" → $P(D \mid L) = 2 P(D \mid N)$, bukan $P(D \mid L) = 2 \times 0{,}30$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika probabilitas kematian hanya diberikan dalam rasio (bukan nilai absolut) → gunakan variabel $k$ sebagai faktor yang akan saling menghilang.

---

## **No. 22**

An actuary studied the likelihood that different types of drivers would be involved in at least one collision during any one-year period. The results of the study are:

| Type of driver | Percentage of all drivers | Probability of at least one collision |
|:-:|:-:|:-:|
| Teen | 8% | 0.15 |
| Young adult | 16% | 0.08 |
| Midlife | 45% | 0.04 |
| Senior | 31% | 0.05 |
| Total | 100% | |

Given that a driver has been involved in at least one collision in the past year, calculate the probability that the driver is a young adult driver.

a. 0.06  
b. 0.16  
c. 0.19  
d. 0.22  
e. 0.25  

> [!summary]+ **Jawaban No. 22**
> 
> **(d). $0{,}22$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(Y \mid C) = \frac{P(C \mid Y) \cdot P(Y)}{\sum_i P(C \mid D_i) \cdot P(D_i)}$$
>
> **Diketahui:**
> - $P(\text{Teen}) = 0{,}08$, $P(\text{Young}) = 0{,}16$, $P(\text{Midlife}) = 0{,}45$, $P(\text{Senior}) = 0{,}31$
> - $P(C \mid \text{Teen}) = 0{,}15$, $P(C \mid \text{Young}) = 0{,}08$, $P(C \mid \text{Midlife}) = 0{,}04$, $P(C \mid \text{Senior}) = 0{,}05$
> - Target: $P(\text{Young} \mid C)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(C)$**
> >
> > $$P(C) = 0{,}15(0{,}08) + 0{,}08(0{,}16) + 0{,}04(0{,}45) + 0{,}05(0{,}31)$$
> >
> > $$= 0{,}0120 + 0{,}0128 + 0{,}0180 + 0{,}0155 = 0{,}0583$$
> >
> > **Langkah 2: Terapkan Bayes**
> >
> > $$P(\text{Young} \mid C) = \frac{0{,}08 \times 0{,}16}{0{,}0583} = \frac{0{,}0128}{0{,}0583} \approx 0{,}2195 \approx 0{,}22$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}22$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(\text{Young} \mid C) = P(\text{Young}) = 0{,}16$ — ini probabilitas prior, bukan posterior.
> > > - Lupa mengalikan $P(C \mid D_i)$ dengan $P(D_i)$ (probabilitas bersyarat dengan prior) di setiap suku.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Tabel memberikan probabilitas kolisi per tipe pengemudi ($P(C \mid D_i)$), bukan $P(D_i \mid C)$ yang langsung menjadi jawaban.
> >
> > > [!CAUTION] Red Flags
> > > - Soal tabel + "given that" → Teorema Bayes. Hitung $P(\text{evidence})$ dulu dari Hukum Total.

---

## **No. 23**

The number of injury claims per month is modeled by a random variable $N$ with

$$P[N = n] = \frac{1}{(n+1)(n+2)}$$

for nonnegative integers $n$.

Calculate the probability of at least one claim during a particular month, given that there have been at most four claims during that month.

a. 1/3  
b. 2/5  
c. 1/2  
d. 3/5  
e. 5/6  

> [!summary]+ **Jawaban No. 23**
> 
> **(b). $\dfrac{2}{5}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.1 Variabel Acak Diskrit]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[2.3 Fungsi Pembangkit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > **Probabilitas bersyarat:**
> >
> > $$P(N \geq 1 \mid N \leq 4) = \frac{P(1 \leq N \leq 4)}{P(N \leq 4)}$$
> >
> > **Dekomposisi fraksial parsial:**
> >
> > $$\frac{1}{(n+1)(n+2)} = \frac{1}{n+1} - \frac{1}{n+2}$$
>
> **Diketahui:**
> - $P(N = n) = \dfrac{1}{(n+1)(n+2)}$
> - Target: $P(N \geq 1 \mid N \leq 4)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(N = n)$ untuk $n = 0, 1, 2, 3, 4$**
> >
> > $$P(0) = \frac{1}{1 \cdot 2} = \frac{1}{2}, \quad P(1) = \frac{1}{2 \cdot 3} = \frac{1}{6}$$
> >
> > $$P(2) = \frac{1}{3 \cdot 4} = \frac{1}{12}, \quad P(3) = \frac{1}{4 \cdot 5} = \frac{1}{20}, \quad P(4) = \frac{1}{5 \cdot 6} = \frac{1}{30}$$
> >
> > **Langkah 2: Hitung $P(N \leq 4)$**
> >
> > $$P(N \leq 4) = \frac{1}{2} + \frac{1}{6} + \frac{1}{12} + \frac{1}{20} + \frac{1}{30}$$
> >
> > KPK = 60:
> >
> > $$= \frac{30 + 10 + 5 + 3 + 2}{60} = \frac{50}{60} = \frac{5}{6}$$
> >
> > **Langkah 3: Hitung $P(1 \leq N \leq 4)$**
> >
> > $$P(1 \leq N \leq 4) = \frac{5}{6} - \frac{1}{2} = \frac{5}{6} - \frac{3}{6} = \frac{2}{6} = \frac{1}{3}$$
> >
> > **Langkah 4: Hitung probabilitas bersyarat**
> >
> > $$P(N \geq 1 \mid N \leq 4) = \frac{1/3}{5/6} = \frac{1}{3} \times \frac{6}{5} = \frac{2}{5}$$
> >
> > **Hasil Akhir:** **(b)**. $\dfrac{2}{5}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung penyebut: $P(N \leq 4)$, bukan $P(N \leq 4 \mid N \geq 1)$.
> > > - Mengira distribusi ini berjumlah ke 1 dalam rentang 0–4 (padahal distribusinya tak hingga).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "At least one" → $N \geq 1$; "at most four" → $N \leq 4$. Pembilang adalah irisan keduanya: $1 \leq N \leq 4$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada PMF berbentuk pecahan → coba dekomposisi fraksial parsial untuk menyederhanakan penjumlahan.

---

## **No. 24**

A blood test indicates the presence of a particular disease 95% of the time when the disease is actually present. The same test indicates the presence of the disease 0.5% of the time when the disease is not actually present. One percent of the population actually has the disease.

Calculate the probability that a person actually has the disease given that the test indicates the presence of the disease.

a. 0.324  
b. 0.657  
c. 0.945  
d. 0.950  
e. 0.995  

> [!summary]+ **Jawaban No. 24**
> 
> **(b). $0{,}657$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(D \mid Y) = \frac{P(Y \mid D) \cdot P(D)}{P(Y \mid D) \cdot P(D) + P(Y \mid D^c) \cdot P(D^c)}$$
>
> **Diketahui:**
> - $P(Y \mid D) = 0{,}95$ (sensitivitas), $P(Y \mid D^c) = 0{,}005$ (false positive rate)
> - $P(D) = 0{,}01$, $P(D^c) = 0{,}99$
> - Target: $P(D \mid Y)$ (nilai prediktif positif)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(Y)$**
> >
> > $$P(Y) = 0{,}95(0{,}01) + 0{,}005(0{,}99) = 0{,}0095 + 0{,}00495 = 0{,}01445$$
> >
> > **Langkah 2: Terapkan Teorema Bayes**
> >
> > $$P(D \mid Y) = \frac{0{,}95 \times 0{,}01}{0{,}01445} = \frac{0{,}0095}{0{,}01445} \approx 0{,}657$$
> >
> > **Hasil Akhir:** **(b)**. $0{,}657$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(D \mid Y) = P(Y \mid D) = 0{,}95$ — ini intuisi yang salah; probabilitas bersyarat tidak simetris.
> > > - Lupa memperhitungkan $P(D^c) = 0{,}99$ yang besar, menyebabkan false positive mendominasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Indicates presence 0.5% when not present" → $P(Y \mid D^c) = 0{,}005$, bukan $P(Y \mid D^c) = 0{,}995$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal tes diagnostik dengan prevalensi rendah → hasilnya mengejutkan (PPV jauh di bawah sensitivitas). Selalu hitung secara eksplisit.

---

## **No. 25**

The probability that a randomly chosen male has a blood circulation problem is 0.25. Males who have a blood circulation problem are twice as likely to be smokers as those who do not have a blood circulation problem.

Calculate the probability that a male has a blood circulation problem, given that he is a smoker.

a. 1/4  
b. 1/3  
c. 2/5  
d. 1/2  
e. 2/3  

> [!summary]+ **Jawaban No. 25**
> 
> **(c). $\dfrac{2}{5}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes:**
> >
> > $$P(C \mid S) = \frac{P(S \mid C) \cdot P(C)}{P(S \mid C) \cdot P(C) + P(S \mid C^c) \cdot P(C^c)}$$
>
> **Diketahui:**
> - $P(C) = 0{,}25$, $P(C^c) = 0{,}75$
> - $P(S \mid C) = 2 P(S \mid C^c)$
> - Misalkan $P(S \mid C^c) = p$, maka $P(S \mid C) = 2p$
> - Target: $P(C \mid S)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(S)$**
> >
> > $$P(S) = 2p(0{,}25) + p(0{,}75) = 0{,}50p + 0{,}75p = 1{,}25p$$
> >
> > **Langkah 2: Terapkan Bayes**
> >
> > $$P(C \mid S) = \frac{2p \times 0{,}25}{1{,}25p} = \frac{0{,}50p}{1{,}25p} = \frac{0{,}50}{1{,}25} = \frac{2}{5}$$
> >
> > **Hasil Akhir:** **(c)**. $\dfrac{2}{5}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(C \mid S) = P(C) = 0{,}25$ — prior tidak otomatis menjadi posterior.
> > > - Salah menetapkan: "twice as likely to be smokers" → $P(S \mid C) = 2P(S \mid C^c)$, bukan $P(C \mid S) = 2P(C^c \mid S)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Faktor $p$ akan saling menghilang — tidak perlu menentukan nilai numerik $p$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika probabilitas bersyarat hanya diberikan dalam rasio → gunakan variabel $p$ yang akan dieliminasi.

---

## **No. 26**

A study of automobile accidents produced the following data:

| Model year | Proportion of all vehicles | Probability of involvement in an accident |
|:-:|:-:|:-:|
| 2014 | 0.16 | 0.05 |
| 2013 | 0.18 | 0.02 |
| 2012 | 0.20 | 0.03 |
| Other | 0.46 | 0.04 |

An automobile from one of the model years 2014, 2013, and 2012 was involved in an accident.

Calculate the probability that the model year of this automobile is 2014.

a. 0.22  
b. 0.30  
c. 0.33  
d. 0.45  
e. 0.50  

> [!summary]+ **Jawaban No. 26**
> 
> **(d). $0{,}45$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]] |
> | **Connected Topics** | [[1.5 Kejadian Independen]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > **Teorema Bayes (dibatasi pada subpopulasi):**
> >
> > $$P(B_{2014} \mid A \cap (B_{2014} \cup B_{2013} \cup B_{2012})) = \frac{P(A \mid B_{2014}) \cdot P(B_{2014})}{\sum_{i \in \{2014, 2013, 2012\}} P(A \mid B_i) \cdot P(B_i)}$$
>
> **Diketahui:**
> - Data tabel di atas
> - Kondisi: kendaraan dari tahun 2014, 2013, atau 2012
> - Target: $P(B_{2014} \mid A \cap \text{bukan Other})$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(A \cap B_i)$ untuk tahun 2014, 2013, 2012**
> >
> > $$P(A \cap B_{2014}) = 0{,}05 \times 0{,}16 = 0{,}0080$$
> >
> > $$P(A \cap B_{2013}) = 0{,}02 \times 0{,}18 = 0{,}0036$$
> >
> > $$P(A \cap B_{2012}) = 0{,}03 \times 0{,}20 = 0{,}0060$$
> >
> > **Langkah 2: Jumlahkan untuk penyebut (hanya tiga tahun)**
> >
> > $$\text{Total} = 0{,}0080 + 0{,}0036 + 0{,}0060 = 0{,}0176$$
> >
> > **Langkah 3: Terapkan Bayes**
> >
> > $$P(B_{2014} \mid A, \text{bukan Other}) = \frac{0{,}0080}{0{,}0176} \approx 0{,}4545 \approx 0{,}45$$
> >
> > **Hasil Akhir:** **(d)**. $0{,}45$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memasukkan kategori "Other" ke penyebut — soal secara eksplisit menyatakan kendaraan berasal dari tahun 2014, 2013, atau 2012 saja.
> > > - Menggunakan $P(B_{2014}) = 0{,}16$ sebagai jawaban langsung.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "An automobile from one of the model years 2014, 2013, and 2012" → penyebut Bayes hanya mencakup tiga tahun ini.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal membatasi ruang sampel dengan kondisi → penyebut Bayes hanya mencakup subhimpunan tersebut, bukan seluruh populasi.

---

## **No. 27**

A hospital receives 1/5 of its flu vaccine shipments from Company X and the remainder of its shipments from other companies. Each shipment contains a very large number of vaccine vials.

For Company X's shipments, 10% of the vials are ineffective. For every other company, 2% of the vials are ineffective. The hospital tests 30 randomly selected vials from a shipment and finds that one vial is ineffective.

Calculate the probability that this shipment came from Company X.

a. 0.10  
b. 0.14  
c. 0.37  
d. 0.63  
e. 0.86  

> [!summary]+ **Jawaban No. 27**
> 
> **(a). $0{,}10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 1 — Probabilitas Dasar |
> | **Sub-topik** | [[1.6 Teorema Bayes dan Hukum Probabilitas Total]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Probabilitas Bersyarat]], [[2.5 Distribusi Diskrit Umum]] |
> | **Connected Topics** | [[2.1 Variabel Acak Diskrit]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 1; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **Distribusi Binomial** (untuk sampel dari populasi besar):
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> >
> > **Teorema Bayes:**
> >
> > $$P(C \mid I) = \frac{P(I \mid C) \cdot P(C)}{P(I \mid C) \cdot P(C) + P(I \mid C^c) \cdot P(C^c)}$$
>
> **Diketahui:**
> - $P(C) = 1/5$, $P(C^c) = 4/5$
> - $P(\text{tidak efektif} \mid C) = 0{,}10$, $P(\text{tidak efektif} \mid C^c) = 0{,}02$
> - $n = 30$, $k = 1$ (satu vial tidak efektif)
> - Target: $P(C \mid I_1)$ di mana $I_1$ = tepat 1 dari 30 tidak efektif
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(I_1 \mid C)$ menggunakan Binomial**
> >
> > $$P(I_1 \mid C) = \binom{30}{1}(0{,}10)^1(0{,}90)^{29} = 30 \times 0{,}10 \times (0{,}90)^{29} \approx 0{,}1413$$
> >
> > **Langkah 2: Hitung $P(I_1 \mid C^c)$**
> >
> > $$P(I_1 \mid C^c) = \binom{30}{1}(0{,}02)^1(0{,}98)^{29} = 30 \times 0{,}02 \times (0{,}98)^{29} \approx 0{,}3340$$
> >
> > **Langkah 3: Terapkan Bayes**
> >
> > $$P(C \mid I_1) = \frac{0{,}1413 \times 0{,}20}{0{,}1413 \times 0{,}20 + 0{,}3340 \times 0{,}80}$$
> >
> > $$= \frac{0{,}02826}{0{,}02826 + 0{,}26720} = \frac{0{,}02826}{0{,}29546} \approx 0{,}096 \approx 0{,}10$$
> >
> > **Hasil Akhir:** **(a)**. $0{,}10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(C \mid I_1) = P(C) = 0{,}20$ karena satu vial tidak efektif "masuk akal" untuk kedua perusahaan.
> > > - Salah model: menggunakan distribusi Poisson alih-alih Binomial untuk $n = 30$ yang kecil.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Temuannya adalah "tepat satu dari 30" → gunakan PMF Binomial dengan $k = 1$, bukan $P = 0{,}10$ langsung.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal melibatkan tes/sampel dengan hasil tertentu → Bayes di mana likelihood-nya adalah distribusi Binomial.

---

## **No. 28**

The number of days that elapse between the beginning of a calendar year and the moment a high-risk driver is involved in an accident is exponentially distributed. An insurance company expects that 30% of high-risk drivers will be involved in an accident during the first 50 days of a calendar year.

Calculate the portion of high-risk drivers are expected to be involved in an accident during the first 80 days of a calendar year.

a. 0.15  
b. 0.34  
c. 0.43  
d. 0.57  
e. 0.66  

> [!summary]+ **Jawaban No. 28**
> 
> **(c). $0{,}43$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.6 Distribusi Kontinu Umum]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Variabel Acak Kontinu]] |
> | **Connected Topics** | [[2.4 Transformasi Variabel Acak Univariat]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > **CDF Distribusi Eksponensial:**
> >
> > $$P(T \leq t) = 1 - e^{-\lambda t}$$
> >
> > Di mana $\lambda > 0$ adalah parameter rate.
>
> **Diketahui:**
> - $T \sim \text{Exp}(\lambda)$
> - $P(T \leq 50) = 0{,}30$
> - Target: $P(T \leq 80)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari $\lambda$ dari informasi yang diberikan**
> >
> > $$1 - e^{-50\lambda} = 0{,}30 \implies e^{-50\lambda} = 0{,}70$$
> >
> > $$-50\lambda = \ln(0{,}70) \implies \lambda = -\frac{\ln(0{,}70)}{50}$$
> >
> > **Langkah 2: Hitung $P(T \leq 80)$**
> >
> > $$P(T \leq 80) = 1 - e^{-80\lambda} = 1 - e^{80 \cdot \frac{\ln(0{,}70)}{50} \cdot (-1)}$$
> >
> > $$= 1 - e^{(80/50)\ln(0{,}70)} = 1 - (0{,}70)^{80/50} = 1 - (0{,}70)^{1{,}6}$$
> >
> > **Langkah 3: Hitung $(0{,}70)^{1{,}6}$**
> >
> > $$(0{,}70)^{1{,}6} = e^{1{,}6 \ln(0{,}70)} \approx e^{1{,}6 \times (-0{,}3567)} = e^{-0{,}5707} \approx 0{,}5647$$
> >
> > $$P(T \leq 80) \approx 1 - 0{,}565 = 0{,}435 \approx 0{,}43$$
> >
> > **Hasil Akhir:** **(c)**. $0{,}43$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P(T \leq 80) = 0{,}30 \times \frac{80}{50} = 0{,}48$ — ini hanya benar jika distribusinya seragam (uniform), bukan eksponensial.
> > > - Lupa menggunakan properti $e^{80\lambda} = (e^{50\lambda})^{80/50} = (0{,}70)^{-80/50}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Exponentially distributed" → gunakan CDF $1 - e^{-\lambda t}$, bukan proporsi linear.
> >
> > > [!CAUTION] Red Flags
> > > - Jika diberikan $P(T \leq t_1) = p_1$ dan diminta $P(T \leq t_2)$ → manfaatkan $e^{-\lambda t_1} = 1 - p_1$ untuk eliminasi $\lambda$ secara elegan: $e^{-\lambda t_2} = (1 - p_1)^{t_2/t_1}$.

---

## **No. 29**

An actuary has discovered that policyholders are three times as likely to file two claims as to file four claims.

The number of claims filed has a Poisson distribution.

Calculate the variance of the number of claims filed.

a. $\dfrac{1}{\sqrt{3}}$  
b. $1$  
c. $\sqrt{2}$  
d. $2$  
e. $4$  

> [!summary]+ **Jawaban No. 29**
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
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **PMF Distribusi Poisson:**
> >
> > $$P(N = n) = \frac{e^{-\lambda} \lambda^n}{n!}$$
> >
> > **Variansi Poisson:** $\text{Var}(N) = \lambda$
>
> **Diketahui:**
> - $N \sim \text{Poisson}(\lambda)$
> - $P(N = 2) = 3 \cdot P(N = 4)$
> - Target: $\text{Var}(N) = \lambda$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis kondisi dalam $\lambda$**
> >
> > $$\frac{e^{-\lambda}\lambda^2}{2!} = 3 \cdot \frac{e^{-\lambda}\lambda^4}{4!}$$
> >
> > **Langkah 2: Sederhanakan (bagi kedua ruas dengan $e^{-\lambda}$)**
> >
> > $$\frac{\lambda^2}{2} = 3 \cdot \frac{\lambda^4}{24} = \frac{\lambda^4}{8}$$
> >
> > **Langkah 3: Selesaikan untuk $\lambda$**
> >
> > $$\frac{\lambda^2}{2} = \frac{\lambda^4}{8} \implies 4\lambda^2 = \lambda^4 \implies \lambda^2 = 4 \implies \lambda = 2$$
> >
> > (ambil $\lambda > 0$)
> >
> > **Langkah 4: Nyatakan variansi**
> >
> > $$\text{Var}(N) = \lambda = 2$$
> >
> > **Hasil Akhir:** **(d)**. $2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira variansi Poisson adalah $\lambda^2$ bukan $\lambda$ — untuk Poisson, mean = variansi = $\lambda$.
> > > - Salah menyederhanakan: membagi dengan $\lambda^2$ tanpa memeriksa $\lambda \neq 0$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Three times as likely to file two as four" → $P(N=2) = 3 P(N=4)$, bukan $P(N=4) = 3 P(N=2)$.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk distribusi Poisson: variansi = mean = $\lambda$. Cukup cari $\lambda$.

---

## **No. 30**

A company establishes a fund of 120 from which it wants to pay an amount, $C$, to any of its 20 employees who achieve a high performance level during the coming year. Each employee has a 2% chance of achieving a high performance level during the coming year. The events of different employees achieving a high performance level during the coming year are mutually independent.

Calculate the maximum value of $C$ for which the probability is less than 1% that the fund will be inadequate to cover all payments for high performance.

a. 24  
b. 30  
c. 40  
d. 60  
e. 120  

> [!summary]+ **Jawaban No. 30**
> 
> **(d). $60$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF2** | Topik 2 — Variabel Acak Univariat |
> | **Sub-topik** | [[2.5 Distribusi Diskrit Umum]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Variabel Acak Diskrit]], [[1.5 Kejadian Independen]] |
> | **Connected Topics** | [[3.1 Distribusi Gabungan]] |
> | **Referensi** | Hogg-Tanis-Zimm Bab 3; Miller Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > **PMF Distribusi Binomial:**
> >
> > $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
> >
> > **Kondisi tidak cukup:** Dana $120$ tidak cukup jika $X \cdot C > 120$, yaitu $X > \lfloor 120/C \rfloor$.
>
> **Diketahui:**
> - $X \sim \text{Binomial}(n = 20,\ p = 0{,}02)$
> - Syarat: $P(X \cdot C > 120) < 0{,}01$, artinya $P\!\left(X > \frac{120}{C}\right) < 0{,}01$
> - Target: nilai $C$ maksimum
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan kondisi dana tidak cukup**
> >
> > Dana tidak cukup jika $X > 120/C$, yaitu jika lebih dari $\lfloor 120/C \rfloor$ karyawan berprestasi tinggi.
> >
> > **Langkah 2: Hitung $P(X \leq k)$ kumulatif untuk beberapa nilai $k$**
> >
> > $$P(X = 0) = (0{,}98)^{20} \approx 0{,}6676$$
> >
> > $$P(X = 1) = 20(0{,}02)(0{,}98)^{19} \approx 0{,}2725$$
> >
> > $$P(X = 2) = \binom{20}{2}(0{,}02)^2(0{,}98)^{18} \approx 0{,}0528$$
> >
> > $$P(X \leq 2) \approx 0{,}6676 + 0{,}2725 + 0{,}0528 = 0{,}9929 > 0{,}99$$
> >
> > **Langkah 3: Temukan nilai ambang $k$**
> >
> > $P(X \leq 2) \approx 0{,}9929 > 0{,}99$, sehingga $P(X > 2) \approx 0{,}007 < 0{,}01$ ✓
> >
> > Ini berarti dana cukup jika paling banyak 2 karyawan berprestasi tinggi, dengan probabilitas $> 99\%$.
> >
> > **Langkah 4: Cari $C$ maksimum**
> >
> > Agar $X > 120/C$ merupakan kejadian dengan $P < 0{,}01$, kita membutuhkan $\lfloor 120/C \rfloor \geq 2$, artinya $C \leq 120/2 = 60$.
> >
> > $$C_{\max} = \frac{120}{2} = 60$$
> >
> > **Hasil Akhir:** **(d)**. $60$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira dana tidak cukup hanya jika $X \geq 5$ (menggunakan $C = 24$), tanpa mengecek probabilitas kumulatif secara teliti.
> > > - Salah arah ketidaksamaan: kita ingin $P(\text{tidak cukup}) < 0{,}01$, bukan $P(\text{cukup}) < 0{,}01$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Maximum value of $C$" → $C$ yang semakin besar membuat lebih sedikit karyawan yang "cukup" untuk menghabiskan dana; perlu menemukan batas $k$ yang tepat.
> >
> > > [!CAUTION] Red Flags
> > > - Soal optimisasi dana + distribusi Binomial → hitung $P(X \leq k)$ secara kumulatif dan cari ambang $k$ terkecil sehingga $P(X > k) < 0{,}01$.

---
