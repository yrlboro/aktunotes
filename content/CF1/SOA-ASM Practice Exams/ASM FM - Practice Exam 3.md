# ASM FM — Practice Exam 3

---

## **No. 1**

Harvey is repaying a loan of 1000 with annual payments of 120 for 10 years followed by annual payments of 100 for as long as necessary. The amount of interest in the first payment is 100 and the amount of interest in the 12th payment is $X$. Determine $X$.

(A) 63  
(B) 65  
(C) 75  
(D) 78  
(E) 80

> [!summary]+ **Jawaban No. 1**
>
> **(B). $64{,}94$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Bunga pada pembayaran ke-$t$:
> > $$I_t = i \cdot B_{t-1}$$
> > Outstanding balance retrospektif:
> > $$B_t = L(1+i)^t - R \cdot s_{\overline{t}|i}$$
> > di mana $L$ = pokok pinjaman, $R$ = besar cicilan, $i$ = suku bunga efektif.
>
> **Diketahui:**
> - $L = 1{,}000$ (pokok pinjaman)
> - $R_1 = 120$ untuk 10 tahun pertama; $R_2 = 100$ sesudahnya
> - $I_1 = 100$ (bunga pada pembayaran pertama)
> - Target: $I_{12}$ (bunga pada pembayaran ke-12)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan suku bunga $i$**
> >
> > Karena $I_1 = i \cdot B_0 = i \cdot L = 100$:
> > $$i = \frac{100}{1{,}000} = 10\%$$
> >
> > **Langkah 2: Hitung outstanding balance $B_{11}$ secara retrospektif**
> >
> > Pembayaran selama 10 tahun pertama sebesar 120, lalu tahun ke-11 juga 100 (sudah masuk pola ke-2). Outstanding balance setelah 11 pembayaran dihitung mundur dari akhir 10 tahun, lalu maju 1 tahun dengan pembayaran 100:
> >
> > Pada akhir tahun ke-10:
> > $$B_{10} = 1{,}000(1{,}1)^{10} - 120 \cdot s_{\overline{10}|10\%}$$
> > $$= 1{,}000(2{,}593742) - 120(15{,}93742)$$
> > $$= 2{,}593{,}74 - 1{,}912{,}49 = 681{,}25$$
> >
> > Outstanding balance setelah pembayaran ke-11 (100):
> > $$B_{11} = 681{,}25(1{,}1) - 100 = 749{,}38 - 100 = 649{,}38$$
> >
> > **Langkah 3: Hitung bunga pembayaran ke-12**
> >
> > $$I_{12} = i \cdot B_{11} = 0{,}10 \times 649{,}38 = 64{,}94$$
> >
> > **Hasil Akhir:** **(B)**. $64{,}94$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Lupa bahwa pembayaran berubah pada tahun ke-11 (bukan ke-10). Outstanding balance $B_{11}$ harus dihitung menggunakan $R=100$, bukan $R=120$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $I_{12}$ dihitung dari saldo setelah 12 pembayaran — yang benar adalah dari saldo *sebelum* pembayaran ke-12, yaitu $B_{11}$.
> > > - Salah menghitung $s_{\overline{10}|}$ menggunakan kalkulator dengan compounding yang tidak tepat.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Mengira pembayaran 120 berlanjut hingga pembayaran ke-12; nyatanya pembayaran ke-11 dan seterusnya adalah 100.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "followed by payments of [jumlah berbeda]" → hati-hati pergantian pola pembayaran saat menghitung outstanding balance retrospektif.
> > > - Jika interest pertama diketahui → itu cara paling cepat untuk menemukan $i$.

---

## **No. 2**

A company buys a 100 par value bond with 5% annual coupons. The company pays a price that will give it a yield rate of 4% effective if the bond matures at par at the end of 7 years. The company receives all coupons when due. However, at the end of 7 years, the company receives a maturity value of only 90, due to the bankruptcy of the issuer of the bond. The company's effective annual yield rate over the 7-year period is $i$. Determine $i$.

(A) 0.92%  
(B) 1.87%  
(C) 2.24%  
(D) 2.73%  
(E) 3.28%

> [!summary]+ **Jawaban No. 2**
>
> **(D). $2{,}73\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Harga obligasi (basic formula):
> > $$P = Fr \cdot a_{\overline{n}|i} + C \cdot v^n$$
> > di mana $F$ = face value, $r$ = coupon rate, $C$ = redemption value, $i$ = yield rate.
> >
> > Untuk mencari yield aktual, selesaikan:
> > $$P = Fr \cdot a_{\overline{n}|i_{aktual}} + C_{aktual} \cdot v^n$$
>
> **Diketahui:**
> - $F = 100$, $r = 5\%$, $n = 7$ tahun, $C_{jadwal} = 100$ (at par)
> - Yield yang diharapkan $= 4\%$, sehingga harga beli $P$ dihitung pada $i=4\%$
> - Realisasi nilai jatuh tempo $= 90$ (akibat kebangkrutan)
> - Target: yield aktual $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung harga beli obligasi pada yield 4%**
> >
> > $$P = 5 \cdot a_{\overline{7}|4\%} + 100 \cdot v^7_{4\%}$$
> > $$= 5 \times 6{,}00205 + 100 \times 0{,}75992 = 30{,}01 + 75{,}99 = 106{,}00$$
> >
> > **Langkah 2: Tuliskan persamaan nilai aktual**
> >
> > Dengan $C_{aktual} = 90$, persamaan nilai menjadi:
> > $$106 = 5 \cdot a_{\overline{7}|i} + 90 \cdot v^7_i$$
> >
> > **Langkah 3: Selesaikan untuk $i$ (secara numerik/kalkulator)**
> >
> > Masukkan ke kalkulator keuangan: $N=7$, $PV=-106$, $PMT=5$, $FV=90$, hitung $I/Y$:
> > $$i = 2{,}73\%$$
> >
> > **Hasil Akhir:** **(D)**. $i = 2{,}73\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $n$ yang salah — $n=7$ tahun adalah jatuh tempo, bukan $n=7$ semester.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira harga beli dihitung ulang dari yield 2.73% — harga beli sudah ditetapkan saat pembelian berdasarkan yield 4%.
> > > - Menggunakan $C = 100$ dalam persamaan yield aktual, padahal realisasi nilainya 90.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Yield rate over the 7-year period" berarti yield aktual yang menyamakan harga beli dengan seluruh arus kas yang benar-benar diterima (kupon + 90 di akhir).
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut redemption value berbeda dari par → ganti nilai $C$ dalam persamaan yield, bukan harga beli.
> > > - Harga beli ditentukan oleh ekspektasi awal, bukan realisasi akhir.

---

## **No. 3**

Hans takes out a loan for which he pays installments of 1,000 at the end of each year for $N$ years. The sum of the principal repaid in the first 3 installments is 1,579.13 and in the next 3 installments is 1,768.63. Determine $N$.

(A) 15  
(B) 16  
(C) 17  
(D) 18  
(E) 19

> [!summary]+ **Jawaban No. 3**
>
> **(D). $18$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Pokok yang dibayar pada cicilan ke-$t$:
> > $$P_t = R \cdot v^{n-t+1}$$
> > Rasio pokok antar kelompok (geometric progression):
> > $$\frac{\sum_{t=4}^{6} P_t}{\sum_{t=1}^{3} P_t} = (1+i)^3$$
>
> **Diketahui:**
> - $R = 1{,}000$ per tahun
> - $\sum_{t=1}^{3} P_t = 1{,}579{,}13$
> - $\sum_{t=4}^{6} P_t = 1{,}768{,}63$
> - Target: $N$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan suku bunga $i$ dari rasio pokok**
> >
> > Dalam amortisasi cicilan tetap, pokok yang dibayar membentuk deret geometri dengan rasio $(1+i)$. Maka rasio jumlah pokok kelompok 3 berikutnya terhadap 3 sebelumnya:
> > $$\frac{1{,}768{,}63}{1{,}579{,}13} = (1+i)^3 = 1{,}120003$$
> > $$(1+i)^3 = 1{,}120003 \implies i = (1{,}120003)^{1/3} - 1 = 3{,}85\%$$
> >
> > **Langkah 2: Tuliskan ekspresi jumlah pokok pertama**
> >
> > Pokok pada cicilan ke-$t$ adalah $P_t = 1{,}000 \cdot v^{N-t+1}$. Jumlah pokok pada 3 cicilan pertama:
> > $$P_1 + P_2 + P_3 = 1{,}000(v^N + v^{N-1} + v^{N-2}) = 1{,}000 \cdot v^{N-2} \cdot a_{\overline{3}|i}$$
> > $$= 1{,}000 \cdot v^{N-3} \cdot a_{\overline{3}|3{,}85\%} = 1{,}579{,}13$$
> >
> > **Langkah 3: Selesaikan untuk $N$**
> >
> > $$v^{N-3} = \frac{1{,}579{,}13}{1{,}000 \cdot a_{\overline{3}|3{,}85\%}}$$
> >
> > Karena $a_{\overline{3}|3{,}85\%} \approx 2{,}7862$:
> > $$v^{N-3} = \frac{1{,}579{,}13}{1{,}000 \times 2{,}7862} = 0{,}567418$$
> >
> > Menggunakan kalkulator: $v^{N-3} = 0{,}567418$ pada $i = 3{,}85\%$ memberikan $N-3 = 15$, sehingga:
> > $$N = 18$$
> >
> > **Hasil Akhir:** **(D)**. $N = 18$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira kelompok "3 berikutnya" adalah cicilan 4–7, bukan 4–6. "The next 3 installments" merujuk pada cicilan ke-4, 5, dan 6.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa pokok dalam amortisasi membentuk deret geometri — ini kunci utama soal.
> > > - Salah menyusun ekspresi $\sum P_t$ sehingga pangkat $v$ keliru.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Sum of principal repaid" ≠ "sum of installments". Bagian bunga dari setiap cicilan harus dikeluarkan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua blok pokok diberikan → cari $i$ dari rasio, baru cari $N$.
> > > - Rasio blok pokok = $(1+i)^{\text{jarak antar blok}}$.

---

## **No. 4**

A bond with 100 par value and annual coupons at coupon rate $r$ is redeemable at par at the end of 25 years. The bond is purchased at a price that will earn 5% effective. The write-up in the 15th year is 1.17. Determine $r$.

(A) 3.00%  
(B) 3.23%  
(C) 6.95%  
(D) 7.00%  
(E) 7.25%

> [!summary]+ **Jawaban No. 4**
>
> **(A). $r = 3{,}00\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[4.2 Amortization Method]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Write-up (kenaikan book value) pada tahun ke-$t$ untuk obligasi yang dibeli diskon:
> > $$\text{Write-up}_t = (C \cdot i - Fr) \cdot v^{n-t+1}$$
> > di mana $C$ = redemption value, $i$ = yield, $F$ = face value, $r$ = coupon rate, $n$ = term.
> >
> > Atau ekuivalen: $\text{Write-up}_t = (Fr - Ci) \cdot v^{n-t+1}$ untuk premium (negatif untuk discount).
>
> **Diketahui:**
> - $F = C = 100$ (at par), $n = 25$, $i = 5\%$
> - Write-up tahun ke-15 $= 1{,}17$ (positif → obligasi dibeli diskon → $Fr < Ci$)
> - Target: $r$ (coupon rate)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan ekspresi write-up tahun ke-15**
> >
> > Write-up (kenaikan book value) pada tahun ke-$t$ diberikan oleh:
> > $$\text{Write-up}_t = (Ci - Fr) \cdot v^{n-t+1}$$
> >
> > Pada $t = 15$, $n = 25$:
> > $$1{,}17 = [(100)(0{,}05) - 100r] \cdot v^{25-15+1} = (5 - 100r) \cdot v^{11}_{5\%}$$
> >
> > **Langkah 2: Selesaikan untuk $r$**
> >
> > $$1{,}17 = (5 - 100r)(1{,}05)^{-11}$$
> > $$1{,}17 \times (1{,}05)^{11} = 5 - 100r$$
> > $$1{,}17 \times 1{,}71034 = 5 - 100r$$
> > $$2{,}0011 = 5 - 100r$$
> > $$100r = 5 - 2{,}0011 = 2{,}9989$$
> > $$r = \frac{2{,}9989}{100} \approx 3{,}00\%$$
> >
> > **Hasil Akhir:** **(A)**. $r = 3{,}00\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $v^{n-t}$ alih-alih $v^{n-t+1}$ — pangkat discount untuk write-up tahun ke-$t$ adalah $n-t+1$, bukan $n-t$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan write-up (discount amortization) dengan write-down (premium amortization). Write-up positif berarti $r < i$, bukan $r > i$.
> > > - Salah menggunakan formula $(Fr - Ci)v^{n-t+1}$ dan lupa bahwa hasilnya negatif untuk discount → tanda harus disesuaikan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Write-up in the 15th year" = kenaikan book value selama tahun ke-15, bukan nilai book value pada tahun ke-15.
> >
> > > [!CAUTION] Red Flags
> > > - Write-up positif → bond dibeli di bawah par (diskon) → $r < i$.
> > > - Jika soal menyebut "write-up" atau "write-down" → gunakan formula amortisasi premium/diskon.

---

## **No. 5**

You want to accumulate a retirement account that will have a cost-of-living (or inflation) adjustment. To that end, you deposit $X$ into an account one year from now, and then each subsequent annual payment increases by $0.25X$. You make a total of 40 deposits. Immediately after the 40th and final deposit, you use the entire accumulated value in the account to purchase a 25-year annuity which will pay you $10,000 at the end of the first year, with each subsequent annual payment increasing by 3% per year. Assume an effective annual interest rate of 8% throughout the entire 65-year period. Find the value of $X$ that will provide an account sufficient to purchase such a growing annuity.

(A) 147  
(B) 157  
(C) 167  
(D) 177  
(E) 187

> [!summary]+ **Jawaban No. 5**
>
> **(A). $X = 147{,}15$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 4; McDonald Bab terkait growing annuity |
>
> > [!info]+ **Rumus**
> >
> > Nilai sekarang growing annuity-immediate ($g$ = growth rate, $i$ = interest rate, $n$ = term):
> > $$PV = \frac{PMT_1}{i - g}\left[1 - \left(\frac{1+g}{1+i}\right)^n\right]$$
> >
> > Nilai akumulasi annuity-immediate dengan pembayaran meningkat aritmetika:
> > $$FV = X \cdot s_{\overline{40}|i} + 0{,}25X \cdot \left(\frac{s_{\overline{40}|} - 40}{i}\right)$$
>
> **Diketahui:**
> - Deposit: $X, X{+}0{,}25X, X{+}0{,}50X, \ldots$ selama 40 tahun (increasing arithmetic)
> - $i = 8\%$ selama 65 tahun
> - Anuitas pensiun: pembayaran awal $10{,}000$, tumbuh $3\%$/tahun, selama 25 tahun
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV growing annuity pensiun (pada saat pensiun)**
> >
> > $$PV_{\text{pensiun}} = 10{,}000 \times \frac{1 - \left(\frac{1{,}03}{1{,}08}\right)^{25}}{0{,}08 - 0{,}03}$$
> >
> > **Langkah 2: Samakan dengan FV akumulasi deposit**
> >
> > Deposit membentuk increasing arithmetic annuity. FV setelah 40 tahun:
> > $$FV = X \cdot s_{\overline{40}|8\%} + 0{,}25X \cdot \left(\frac{s_{\overline{40}|8\%} - 40}{0{,}08}\right)$$
> >
> > **Langkah 3: Selesaikan**
> >
> > Menyamakan kedua sisi:
> > $$X \cdot s_{\overline{40}|0{,}08} + 0{,}25X \cdot \left(\frac{s_{\overline{40}|0{,}08} - 40}{0{,}08}\right) = 10{,}000 \cdot \frac{1 - \left(\frac{1{,}03}{1{,}08}\right)^{25}}{0{,}08 - 0{,}03}$$
> >
> > Menyelesaikan dengan nilai numerik yang diberikan di solusi ASM:
> > $$X = 147{,}15$$
> >
> > **Hasil Akhir:** **(A)**. $X = 147{,}15$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Lupa bahwa 40 tahun akumulasi + 25 tahun anuitas = 65 tahun total, tetapi rate $i=8\%$ konstan sepanjang periode.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula growing annuity yang salah arah: deposit tumbuh secara aritmetika ($+0{,}25X$), bukan geometri.
> > > - Mengacaukan FV akumulasi (sisi kiri) dengan PV anuitas pensiun (sisi kanan) — keduanya harus diukur pada titik waktu yang sama (t=40).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Each subsequent payment increases by $0.25X$" = kenaikan konstan (aritmetika), bukan persentase (geometri).
> >
> > > [!CAUTION] Red Flags
> > > - Jika deposit atau pembayaran tumbuh secara aritmetika → gunakan $(Ia)$ atau $(Is)$.
> > > - Jika pembayaran tumbuh secara geometri → gunakan formula growing annuity.

---

## **No. 6**

Jan gives Ted a loan at 4% effective to be repaid by 10 annual payments of 100, followed by 5 annual payments of 200. Just after Ted makes the 5th payment, Jan and Ted discover that each of the 15 payments should have been 10% higher than they were originally scheduled. They agree that Ted will make increased payments of $K$ in the 6th through 10th years to adjust for the error. The payments of 200 in the 11th through 15th years will not change. Determine $K$.

(A) 113  
(B) 129  
(C) 139  
(D) 145  
(E) 149

> [!summary]+ **Jawaban No. 6**
>
> **(C). $K = 138{,}60$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Prinsip kesetaraan nilai (equivalence principle): PV pembayaran seharusnya = PV pembayaran aktual, diukur pada titik waktu yang sama.
> > $$PV_{\text{seharusnya}} = PV_{\text{aktual (yang sudah dibayar + yang akan dibayar)}}$$
>
> **Diketahui:**
> - Jadwal asli: 10 × 100 + 5 × 200
> - Jadwal seharusnya: 10 × 110 + 5 × 220 (10% lebih tinggi)
> - Setelah pembayaran ke-5 (sudah dibayar 5×100, bukan 5×110)
> - Cicilan ke-6 s/d 10: $K$ (disesuaikan)
> - Cicilan ke-11 s/d 15: tetap 200 (bukan 220)
> - $i = 4\%$, Target: $K$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV jadwal seharusnya (pada $t=0$)**
> >
> > PV jadwal 15 pembayaran yang benar (10% lebih tinggi):
> > $$PV_{\text{benar}} = 110 \cdot a_{\overline{10}|4\%} + 220 \cdot a_{\overline{15}|4\%} - 220 \cdot a_{\overline{10}|4\%}$$
> > $$= 220 \cdot a_{\overline{15}|} - 110 \cdot a_{\overline{10}|}$$
> >
> > **Langkah 2: Hitung PV pembayaran aktual (pada $t=0$)**
> >
> > 5 pembayaran pertama sudah terlanjur dibayar 100 (bukan 110). Sisa: $K$ untuk t=6–10, dan 200 untuk t=11–15:
> > $$PV_{\text{aktual}} = 100 \cdot a_{\overline{5}|} + K \cdot (a_{\overline{10}|} - a_{\overline{5}|}) + 200 \cdot (a_{\overline{15}|} - a_{\overline{10}|})$$
> >
> > **Langkah 3: Samakan dan selesaikan $K$**
> >
> > Menyamakan $PV_{\text{benar}} = PV_{\text{aktual}}$:
> > $$220a_{\overline{15}|} - 110a_{\overline{10}|} = 100a_{\overline{5}|} + K(a_{\overline{10}|} - a_{\overline{5}|}) + 200(a_{\overline{15}|} - a_{\overline{10}|})$$
> >
> > Menyederhanakan dan menggunakan nilai numerik pada $i=4\%$:
> > $$K = \frac{20a_{\overline{15}|} + 90a_{\overline{10}|} - 100a_{\overline{5}|}}{a_{\overline{10}|} - a_{\overline{5}|}} = 138{,}60$$
> >
> > **Hasil Akhir:** **(C)**. $K = 138{,}60$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengukur PV pada $t=5$ (setelah pembayaran ke-5) alih-alih $t=0$. Jika menggunakan $t=5$ sebagai titik acuan, semua faktor anuitas harus disesuaikan.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa pembayaran ke-11 s/d 15 tetap 200, bukan 220. Ini yang membuat soal lebih kompleks.
> > > - Salah memahami "each of the 15 payments should have been 10% higher" — ini berlaku untuk jadwal asli, bukan untuk yang akan datang.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Payments of 200 in the 11th through 15th years will not change" = tetap 200, bukan naik ke 220.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada koreksi jadwal pembayaran → gunakan equivalence principle pada satu titik waktu yang konsisten.

---

## **No. 7**

An asset has cash inflows of $1,000 in one year and $2,000 in four years. Determine the ratio of the convexity of the asset to the modified duration of the asset at an effective rate of 8%.

(A) 3.94  
(B) 4.25  
(C) 4.59  
(D) 5.12  
(E) 5.89

> [!summary]+ **Jawaban No. 7**
>
> **(B). $4{,}25$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.4 Convexity]], [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > Present value: $P = \sum C_t v^t$
> >
> > Modified duration: $D_{\text{mod}} = -\frac{P'}{P}$ di mana $P' = \frac{dP}{di}$
> > $$P' = -\sum t \cdot C_t \cdot v^{t+1}$$
> >
> > Convexity: $\text{Conv} = \frac{P''}{P}$ di mana $P'' = \frac{d^2P}{di^2}$
> > $$P'' = \sum t(t+1) \cdot C_t \cdot v^{t+2}$$
>
> **Diketahui:**
> - $C_1 = 1{,}000$ pada $t=1$; $C_4 = 2{,}000$ pada $t=4$
> - $i = 8\%$, $v = 1/1{,}08$
> - Target: $\text{Convexity} / D_{\text{mod}}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P$**
> >
> > $$P = 1{,}000v + 2{,}000v^4$$
> >
> > **Langkah 2: Hitung $P'$ (turunan pertama terhadap $i$)**
> >
> > $$P' = -1{,}000v^2 - 8{,}000v^5$$
> >
> > **Langkah 3: Hitung $D_{\text{mod}}$**
> >
> > $$D_{\text{mod}} = -\frac{P'}{P} = \frac{1{,}000v^2 + 8{,}000v^5}{1{,}000v + 2{,}000v^4}$$
> >
> > **Langkah 4: Hitung $P''$ (turunan kedua)**
> >
> > $$P'' = 2{,}000v^3 + 40{,}000v^6$$
> >
> > **Langkah 5: Hitung Convexity**
> >
> > $$\text{Conv} = \frac{P''}{P} = \frac{2{,}000v^3 + 40{,}000v^6}{1{,}000v + 2{,}000v^4}$$
> >
> > **Langkah 6: Hitung rasio Convexity / $D_{\text{mod}}$**
> >
> > $$\frac{\text{Conv}}{D_{\text{mod}}} = \frac{P''/P}{-P'/P} = \frac{P''}{-P'} = \frac{2{,}000v^3 + 40{,}000v^6}{1{,}000v^2 + 8{,}000v^5}$$
> >
> > Perhatikan bahwa $P$ saling terhapus. Pada $i = 8\%$ ($v = 1/1{,}08$):
> > - Numerator: $2{,}000(1{,}08)^{-3} + 40{,}000(1{,}08)^{-6} = 1{,}587{,}66 + 25{,}206{,}79$... (nilai dihitung numerik)
> > - Nilai rasio $= \mathbf{4{,}25}$
> >
> > **Hasil Akhir:** **(B)**. $4{,}25$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $v^t$ bukan $v^{t+1}$ dalam turunan — ingat bahwa $\frac{d}{di}v^t = -t \cdot v^{t+1}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan Macaulay duration dengan modified duration. $D_{\text{mod}} = D_{\text{mac}}/(1+i)$.
> > > - Lupa bahwa convexity menggunakan turunan *kedua*, bukan pertama.
> > > - Salah rumus $P''$: untuk cash flow $C_t$ pada waktu $t$, kontribusinya ke $P''$ adalah $t(t+1) \cdot C_t \cdot v^{t+2}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Ratio of convexity to modified duration" = Conv/$D_{\text{mod}}$, bukan sebaliknya.
> >
> > > [!CAUTION] Red Flags
> > > - Rasio Convexity/$D_{\text{mod}}$ → $P$ saling terhapus, sederhanakan terlebih dahulu.

---

## **No. 8**

Percy invests continuously at a rate of 100 per annum for 40 years in a fund earning 5% per annum compounded continuously. At the end of 60 years, $X$ is in the fund. There are no withdrawals. Determine $X$.

(A) 12778  
(B) 25395  
(C) 34735  
(D) 48832  
(E) 62386

> [!summary]+ **Jawaban No. 8**
>
> **(C). $X = 34{,}735$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi continuous annuity selama $n$ tahun dengan force of interest $\delta$:
> > $$\bar{s}_{\overline{n}|\delta} = \frac{e^{\delta n} - 1}{\delta}$$
> >
> > Jika investasi berhenti pada $t=n_1$ dan dana terus tumbuh hingga $t=n_2$:
> > $$X = \rho \cdot \bar{s}_{\overline{n_1}|} \cdot e^{\delta(n_2 - n_1)}$$
> > atau ekuivalen: $X = \rho \cdot (\bar{s}_{\overline{n_2}|} - \bar{s}_{\overline{n_2 - n_1}|})$
>
> **Diketahui:**
> - Rate investasi kontinu $\rho = 100$ per tahun
> - Investasi berlangsung selama 40 tahun (t=0 hingga t=40)
> - $\delta = 5\% = 0{,}05$ (force of interest = compounded continuously)
> - Nilai dihitung pada $t=60$ (20 tahun setelah investasi berhenti)
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kenali bahwa $\delta = 5\%$ karena "5% compounded continuously"**
> >
> > Rate 5% compounded continuously sama artinya dengan force of interest $\delta = 5\%$.
> >
> > **Langkah 2: Ekspresikan $X$ sebagai selisih $\bar{s}$**
> >
> > $$X = 100(\bar{s}_{\overline{60}|} - \bar{s}_{\overline{20}|}) \text{ pada } \delta = 5\%$$
> >
> > Ini karena investasi dari $t=0$ hingga $t=40$ tumbuh hingga $t=60$, identik dengan anuitas kontinu 60 tahun penuh dikurangi anuitas kontinu 20 tahun terakhir yang tidak ada investasinya.
> >
> > **Langkah 3: Hitung nilai numerik**
> >
> > $$\bar{s}_{\overline{60}|} = \frac{e^{(0{,}05)(60)} - 1}{0{,}05} = \frac{e^3 - 1}{0{,}05}$$
> > $$\bar{s}_{\overline{20}|} = \frac{e^{(0{,}05)(20)} - 1}{0{,}05} = \frac{e^1 - 1}{0{,}05}$$
> >
> > $$X = 100 \cdot \frac{(e^3 - 1) - (e^1 - 1)}{0{,}05} = 100 \cdot \frac{e^3 - e}{0{,}05}$$
> > $$= 2{,}000(e^3 - e) = 2{,}000(20{,}0855 - 2{,}7183) = 2{,}000 \times 17{,}3672 = 34{,}734$$
> >
> > **Hasil Akhir:** **(C)**. $X = 34{,}735$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira investasi berlanjut hingga $t=60$ (bukan berhenti di $t=40$). Dana berhenti diisi pada $t=40$ tetapi terus berkembang hingga $t=60$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\bar{s}_{\overline{40}|}$ lalu lupa mengalikan dengan $e^{\delta \cdot 20}$ untuk pertumbuhan 20 tahun berikutnya.
> > > - Mengira "5% compounded continuously" = $i^{(m)} = 5\%$ dengan $m \to \infty$, yang memang benar ($\delta = 5\%$), tetapi kemudian salah menggunakan formula diskret.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "At the end of 60 years" bukan berarti investasi berlangsung 60 tahun — hanya penilaian dilakukan pada $t=60$.
> >
> > > [!CAUTION] Red Flags
> > > - "Compounded continuously" → $\delta = $ rate yang disebutkan.
> > > - Jika investasi berhenti sebelum tanggal evaluasi → gunakan $\bar{s}_{\overline{n_2}|} - \bar{s}_{\overline{n_2-n_1}|}$.

---

## **No. 9**

You are given the following information about Bond A and Bond B:

(i) Both bonds have annual coupons, sell at par and mature at par at the same annual effective rate $i$.  
(ii) The term of Bond A is $n$ years and the term of Bond B is $2n$ years.  
(iii) The modified duration of Bond A is 5.913877 and the modified duration of Bond B is 9.292143.

Determine the Macaulay duration of a similar bond with a term of $3n$ years.

(A) 10.85  
(B) 11.22  
(C) 12.04  
(D) 13.75  
(E) 14.89

> [!summary]+ **Jawaban No. 9**
>
> **(C). $12{,}04$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[3.3 Duration (Macaulay and Modified)]] |
> | **Connected Topics** | [[3.4 Convexity]], [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > Untuk obligasi yang dijual dan jatuh tempo pada par (coupon rate = yield):
> > $$D_{\text{mod}} = a_{\overline{n}|i}$$
> > $$D_{\text{mac}} = (1+i) \cdot D_{\text{mod}} = \ddot{a}_{\overline{n}|i}$$
>
> **Diketahui:**
> - Bond A: $D_{\text{mod}}(n) = a_{\overline{n}|} = 5{,}913877$
> - Bond B: $D_{\text{mod}}(2n) = a_{\overline{2n}|} = 9{,}292143$
> - Target: $D_{\text{mac}}$ bond dengan term $3n$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan sifat obligasi at-par**
> >
> > Untuk obligasi yang dijual dan jatuh tempo pada par, modified duration = $a_{\overline{n}|}$. Maka:
> > $$a_{\overline{n}|} = 5{,}913877 \quad \text{dan} \quad a_{\overline{2n}|} = 9{,}292143$$
> >
> > **Langkah 2: Temukan $v^n$ dan $i$**
> >
> > Gunakan relasi: $a_{\overline{2n}|} / a_{\overline{n}|} = 1 + v^n$
> > $$\frac{9{,}292143}{5{,}913877} = 1 + v^n = 1{,}571244 \implies v^n = 0{,}571244$$
> >
> > Dari $a_{\overline{n}|} = \frac{1-v^n}{i}$:
> > $$5{,}913877 = \frac{1 - 0{,}571244}{i} \implies i = \frac{0{,}428756}{5{,}913877} = 0{,}0725 = 7{,}25\%$$
> >
> > **Langkah 3: Tentukan $n$**
> >
> > $v^n = 0{,}571244$ pada $i = 7{,}25\%$: $n = 8$.
> >
> > **Langkah 4: Hitung Macaulay duration bond term $3n = 24$ tahun**
> >
> > $$D_{\text{mac}} = \ddot{a}_{\overline{24}|7{,}25\%} = (1+i) \cdot a_{\overline{24}|7{,}25\%}$$
> >
> > Menggunakan kalkulator: $a_{\overline{24}|7{,}25\%} = 11{,}24$, sehingga:
> > $$D_{\text{mac}} = 1{,}0725 \times 11{,}24 \approx 12{,}04$$
> >
> > **Hasil Akhir:** **(C)**. $12{,}04$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira "3n years" hanya perlu menghitung $a_{\overline{3n}|}$ tanpa terlebih dahulu menemukan nilai $n$ dan $i$ secara eksplisit.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan modified duration dengan Macaulay duration untuk jawaban akhir. Soal minta Macaulay, bukan modified.
> > > - Tidak mengenali bahwa untuk obligasi at-par, $D_{\text{mod}} = a_{\overline{n}|}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Similar bond" berarti bond yang sama (same par, same coupon rate = yield, sama $i$), hanya term yang berbeda ($3n$).
> >
> > > [!CAUTION] Red Flags
> > > - Bond yang "sell at par" dan "mature at par" → coupon rate = yield rate.
> > > - Jika dua modified duration diberikan untuk term $n$ dan $2n$ → gunakan rasio untuk menemukan $v^n$.

---

## **No. 10**

Carl invests 1000. He receives interest on his investment at the end of each year for 10 years at an effective rate of $i$. Carl reinvests the interest at an effective rate of $\frac{3}{4}i$. At the end of 10 years, the total of Carl's original investment and the accumulated value of his reinvested interest is 1400. Determine $i$.

(A) 2.67%  
(B) 3.54%  
(C) 4.37%  
(D) 4.70%  
(E) 5.82%

> [!summary]+ **Jawaban No. 10**
>
> **(B). $i = 3{,}54\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi reinvestasi bunga:
> > $$AV = L + L \cdot i \cdot s_{\overline{n}|j}$$
> > di mana $L$ = pokok, $i$ = yield investasi asli, $j$ = yield reinvestasi, $n$ = periode.
>
> **Diketahui:**
> - $L = 1{,}000$; $n = 10$ tahun; $i$ = yield asli; $j = \frac{3}{4}i$ = yield reinvestasi
> - AV total pada $t=10$ = $1{,}400$ (pokok + akumulasi reinvestasi bunga)
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Susun persamaan**
> >
> > Bunga yang diterima setiap tahun adalah $1{,}000 \times i$. Bunga ini diinvestasikan ulang pada rate $\frac{3}{4}i$. Nilai akumulasi reinvestasi bunga pada $t=10$:
> > $$AV_{\text{reinvestasi}} = 1{,}000i \cdot s_{\overline{10}|\frac{3}{4}i}$$
> >
> > Total pada $t=10$:
> > $$1{,}000 + 1{,}000i \cdot s_{\overline{10}|\frac{3}{4}i} = 1{,}400$$
> > $$1{,}000i \cdot s_{\overline{10}|\frac{3}{4}i} = 400$$
> >
> > **Langkah 2: Ekspresikan dengan lebih rapi**
> >
> > $$1{,}000i \left[\frac{\left(1 + \frac{3}{4}i\right)^{10} - 1}{\frac{3}{4}i}\right] = 400$$
> > $$\frac{4}{3} \left[\left(1 + \frac{3}{4}i\right)^{10} - 1\right] = 0{,}4$$
> > $$\left(1 + \frac{3}{4}i\right)^{10} = 1{,}3$$
> >
> > **Langkah 3: Selesaikan**
> >
> > $$\frac{3}{4}i = (1{,}3)^{1/10} - 1 = 1{,}02658 - 1 = 0{,}02658$$
> > $$i = \frac{4}{3} \times 0{,}02658 = 3{,}54\%$$
> >
> > **Hasil Akhir:** **(B)**. $i = 3{,}54\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira bunga juga berbunga-majemuk secara langsung di rate $i$ — padahal bunga diambil setiap akhir tahun dan diinvestasikan ulang pada rate berbeda.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa menambahkan pokok $L = 1{,}000$ ke sisi kiri — soal menyatakan "total of Carl's original investment *and* the accumulated value."
> > > - Menggunakan $s_{\overline{10}|i}$ (rate investasi asli) bukan $s_{\overline{10}|\frac{3}{4}i}$ (rate reinvestasi).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Receives interest at the end of each year" → bunga simple per tahun, bukan compound. Pokok tetap 1,000 sepanjang 10 tahun.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada reinvestasi dengan rate berbeda → gunakan $s_{\overline{n}|j}$ bukan $s_{\overline{n}|i}$.
> > > - Jangan campur aduk antara yield investasi dan yield reinvestasi.

---

## **No. 11**

Joe's annual salary increases by $p\%$ every year. The mean of his annual salary for the last 10 years is 1.182 times the mean of his annual salary for the last 20 years. Determine $p$.

(A) 1.25  
(B) 2.25  
(C) 3.25  
(D) 3.75  
(E) 5.38

> [!summary]+ **Jawaban No. 11**
>
> **(D). $p = 3{,}75$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Rata-rata dari deret geometri gaji selama $n$ tahun terakhir:
> > $$\bar{S}_n = S \cdot \frac{s_{\overline{n}|p\%}}{n}$$
> > di mana $S$ adalah gaji tahun pertama dari pengamatan dan $p\%$ adalah growth rate.
>
> **Diketahui:**
> - Gaji tumbuh geometri dengan rate $p\%$ per tahun
> - Rata-rata 10 tahun terakhir $= 1{,}182 \times$ rata-rata 20 tahun terakhir
> - Target: $p$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan titik referensi**
> >
> > Misalkan gaji 20 tahun lalu adalah $S$. Gaji pada tahun ke-$k$ dari sekarang (mundur) adalah $S(1+p\%)^k$.
> >
> > Rata-rata gaji 20 tahun terakhir:
> > $$\bar{S}_{20} = \frac{S \cdot s_{\overline{20}|p\%}}{20}$$
> >
> > Rata-rata gaji 10 tahun terakhir (dari tahun ke-10 hingga tahun ke-1 terakhir):
> > $$\bar{S}_{10} = S \cdot \frac{s_{\overline{20}|} - s_{\overline{10}|}}{10}$$
> >
> > **Langkah 2: Tuliskan persamaan rasio**
> >
> > $$\frac{\bar{S}_{10}}{\bar{S}_{20}} = \frac{s_{\overline{20}|} - s_{\overline{10}|}}{10} \cdot \frac{20}{s_{\overline{20}|}} = \frac{s_{\overline{20}|} - s_{\overline{10}|}}{s_{\overline{20}|}/2} = 1{,}182$$
> >
> > Maka:
> > $$\frac{s_{\overline{20}|} - s_{\overline{10}|}}{s_{\overline{20}|}/2} = 1{,}182$$
> > $$2 \cdot \frac{s_{\overline{20}|} - s_{\overline{10}|}}{s_{\overline{20}|}} = 1{,}182 \implies \frac{s_{\overline{20}|}}{s_{\overline{10}|}} = 2{,}4450$$
> >
> > **Langkah 3: Gunakan sifat $s_{\overline{20}|}/s_{\overline{10}|}$**
> >
> > $$\frac{s_{\overline{20}|}}{s_{\overline{10}|}} = (1+p\%)^{10} + 1 = 2{,}4450$$
> > $$(1+p\%)^{10} = 1{,}4450$$
> > $$p\% = (1{,}4450)^{0{,}1} - 1 \approx 3{,}75\%$$
> >
> > **Hasil Akhir:** **(D)**. $p = 3{,}75$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira "10 tahun terakhir" adalah 10 tahun pertama dari total 20 tahun pengamatan. Urutan waktu harus diperhatikan: "10 tahun terakhir" adalah tahun terbaru.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menyusun deret gaji: gaji yang lebih baru lebih tinggi (bukan lebih rendah).
> > > - Tidak mengenali sifat $s_{\overline{2n}|}/s_{\overline{n}|} = (1+i)^n + 1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Mean of his annual salary for the last 10 years" = rata-rata aritmatika dari 10 tahun gaji terbaru.
> >
> > > [!CAUTION] Red Flags
> > > - Soal melibatkan rasio dua rata-rata dari periode berbeda → identifikasi $s$ mana yang digunakan untuk masing-masing.

---

## **No. 12**

The following expressions represent the net present values of three different sets of asset cash inflows and liability cash outflows:

(i) $1000v^2 - 1800v + 700$  
(ii) $10{,}000v^2 - 18{,}010v + 8109$  
(iii) $-500v^2 + 900v - 405$  

Which of these sets of cash flows satisfy the conditions for Redington immunization at an annual effective rate of interest of $i = 1/9$?

(A) (i) only  
(B) (ii) only  
(C) (iii) only  
(D) None of (i), (ii) or (iii)  
(E) The correct answer is not given by (A), (B), (C), or (D).

> [!summary]+ **Jawaban No. 12**
>
> **(D). None of (i), (ii) or (iii)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]], [[3.4 Convexity]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > Tiga syarat Redington immunization (di mana $S$ = net surplus = PV aset − PV liabilitas):
> > 1. $S = 0$ (PV aset = PV liabilitas)
> > 2. $S' = \frac{dS}{di} = 0$ (durasi aset = durasi liabilitas)
> > 3. $S'' = \frac{d^2S}{di^2} > 0$ (konveksitas aset > konveksitas liabilitas)
>
> **Diketahui:**
> - $i = 1/9$, maka $v = (1 + 1/9)^{-1} = 9/10 = 0{,}9$
> - Tiga ekspresi NPV diberikan
> - Target: Cek syarat Redington untuk masing-masing
>
> > [!example]- Langkah Pengerjaan
> >
> > **Nilai $v$ pada $i = 1/9$:** $v = 0{,}9$, $v^2 = 0{,}81$
> >
> > **Cek (i): $S = 1000v^2 - 1800v + 700$**
> >
> > $S = 1000(0{,}81) - 1800(0{,}9) + 700 = 810 - 1620 + 700 = -110 \neq 0$
> >
> > ❌ Syarat 1 gagal. (i) tidak memenuhi Redington.
> >
> > **Cek (ii): $S = 10{,}000v^2 - 18{,}010v + 8109$**
> >
> > $S = 10{,}000(0{,}81) - 18{,}010(0{,}9) + 8109 = 8100 - 16209 + 8109 = 0$ ✓
> >
> > $S' = -20{,}000v^3 + 18{,}010v^2$
> > $S' = -20{,}000(0{,}729) + 18{,}010(0{,}81) = -14{,}580 + 14{,}588{,}1 = 8{,}10 \neq 0$
> >
> > ❌ Syarat 2 gagal. (ii) tidak memenuhi Redington.
> >
> > **Cek (iii): $S = -500v^2 + 900v - 405$**
> >
> > $S = -500(0{,}81) + 900(0{,}9) - 405 = -405 + 810 - 405 = 0$ ✓
> >
> > $S' = 1000v^3 - 900v^2 = 1000(0{,}729) - 900(0{,}81) = 729 - 729 = 0$ ✓
> >
> > $S'' = -3000v^4 + 1800v^3 = -3000(0{,}6561) + 1800(0{,}729) = -1968{,}30 + 1312{,}20 = -656{,}10 < 0$
> >
> > ❌ Syarat 3 gagal: $S'' < 0$ berarti ini adalah *maksimum lokal*, bukan minimum. (iii) tidak memenuhi Redington.
> >
> > **Kesimpulan:** Tidak ada satupun yang memenuhi ketiga syarat Redington.
> >
> > **Hasil Akhir:** **(D)**. None of (i), (ii) or (iii)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Lupa bahwa $\frac{d}{di}v^n = -n \cdot v^{n+1}$, bukan $-n \cdot v^{n-1}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $S'' > 0$ cukup diperiksa tanpa $S=0$ dan $S'=0$ lebih dulu — ketiga syarat harus terpenuhi semua.
> > > - Tidak menyadari bahwa $S'' < 0$ berarti *maksimum* (bukan minimum), sehingga portfolio tidak terproteksi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Net present value" = PV aset − PV liabilitas (surplus). Syarat Redington adalah $S=0$, $S'=0$, $S''>0$.
> >
> > > [!CAUTION] Red Flags
> > > - Cek ketiga syarat secara berurutan. Jika syarat 1 gagal, langsung lanjut ke ekspresi berikutnya.
> > > - $S'' < 0$ pada $i=i_0$ → portofolio rentan terhadap perubahan suku bunga (tidak terimmunisasi).

---

## **No. 13**

An insurance company has a liability of 100 at time 1 and another liability of 75 at time 6. The company invests in two assets to meet these liabilities. The first asset provides a cash flow of $A$ at time 0 and the second asset provides a cash flow of $B$ at time 4. At an annual effective interest rate of 6%, the first two conditions of the Redington immunization are satisfied. Compute the sum $A + B$ and state whether the 3rd condition of the Redington immunization is satisfied.

(A) Sum = 175 and the 3rd condition of the Redington immunization is not satisfied.  
(B) Sum = 174.22 and the 3rd condition of the Redington immunization is not satisfied.  
(C) Sum = 174.22 and the 3rd condition of the Redington immunization is satisfied.  
(D) Sum = 173.59 and the 3rd condition of the Redington immunization is not satisfied.  
(E) Sum = 173.59 and the 3rd condition of the Redington immunization is satisfied.

> [!summary]+ **Jawaban No. 13**
>
> **(B). Sum = $174{,}22$ and the 3rd condition of the Redington immunization is not satisfied.**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > Syarat 1 Redington: $\sum A_t v^t = \sum L_t v^t$
> > $$A + Bv^4 = 100v + 75v^6$$
> >
> > Syarat 2 Redington: $\sum t A_t v^t = \sum t L_t v^t$
> > $$0 \cdot A + 4Bv^4 = 1 \cdot 100v + 6 \cdot 75v^6$$
> >
> > Syarat 3: Konveksitas aset > Konveksitas liabilitas:
> > $$\sum t^2 A_t v^t > \sum t^2 L_t v^t$$
>
> **Diketahui:**
> - Liabilitas: 100 pada $t=1$, 75 pada $t=6$
> - Aset: $A$ pada $t=0$, $B$ pada $t=4$
> - $i = 6\%$, $v = 1/1{,}06$
> - Target: $A+B$ dan status syarat 3
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Syarat 1 (PV aset = PV liabilitas)**
> >
> > $$A + Bv^4 = 100v + 75v^6 = 100(1{,}06)^{-1} + 75(1{,}06)^{-6}$$
> > $$= 94{,}340 + 52{,}872 = 147{,}212$$
> >
> > **Langkah 2: Terapkan Syarat 2 (Durasi aset = Durasi liabilitas)**
> >
> > $$0 \cdot A + 4Bv^4 = 1(100v) + 6(75v^6) = 94{,}340 + 317{,}232 = 411{,}572$$
> >
> > Dari syarat 2:
> > $$B = \frac{411{,}572}{4v^4} = \frac{411{,}572 \times (1{,}06)^4}{4} = \frac{411{,}572 \times 1{,}2625}{4} = \frac{519{,}59}{4} = 129{,}90$$
> >
> > **Langkah 3: Hitung $A$**
> >
> > $$A = 147{,}212 - Bv^4 = 147{,}212 - 129{,}90(1{,}06)^{-4} = 147{,}212 - 102{,}88 = 44{,}32$$
> >
> > $$A + B = 44{,}32 + 129{,}90 = 174{,}22$$
> >
> > **Langkah 4: Cek Syarat 3 (Konveksitas)**
> >
> > Konveksitas aset: $\sum t^2 A_t v^t = 0^2 \cdot A + 4^2 \cdot B v^4 = 16 \times 129{,}90 \times (1{,}06)^{-4} = 1646{,}29$
> >
> > Konveksitas liabilitas: $\sum t^2 L_t v^t = 1^2(100v) + 6^2(75v^6) = 94{,}34 + 36(75)(1{,}06)^{-6} = 94{,}34 + 1903{,}40 = 1997{,}74$
> >
> > Karena $1646{,}29 < 1997{,}74$: konveksitas aset **lebih kecil** dari konveksitas liabilitas.
> >
> > Syarat 3 **tidak terpenuhi**.
> >
> > **Hasil Akhir:** **(B)**. Sum $= 174{,}22$ dan syarat 3 Redington **tidak terpenuhi**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Aset $A$ berada pada $t=0$, sehingga kontribusinya ke syarat 2 adalah $0 \times A = 0$ (bukan $A$). Ini sering terlewat.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira syarat 3 terpenuhi karena $A+B > PV_{\text{liabilitas}}$ — ini bukan syarat 3.
> > > - Lupa bahwa cash flow aset pada $t=0$ memiliki bobot waktu = 0 dalam syarat durasi dan konveksitas.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Syarat 3 membandingkan $\sum t^2 A_t v^t$ (aset) vs $\sum t^2 L_t v^t$ (liabilitas). Aset harus lebih besar agar terimmunisasi.
> >
> > > [!CAUTION] Red Flags
> > > - Aset pada $t=0$ → tidak berkontribusi pada durasi maupun konveksitas ($t=0$).
> > > - Selalu verifikasi syarat 3 setelah mendapatkan nilai aset; jangan asumsikan terpenuhi otomatis.

---

## **No. 14**

Arrange in order of increasing annual effective rate of interest:

I. An effective rate of interest of 4% per annum.  
II. A force of interest of 4% per annum.  
III. A nominal rate of interest of 4% per annum convertible semiannually.  
IV. A nominal rate of discount of 4% per annum convertible semiannually.  

(A) I, III, II, IV  
(B) I, IV, III, II  
(C) II, I, III, IV  
(D) II, III, IV, I  
(E) IV, I, III, II

> [!summary]+ **Jawaban No. 14**
>
> **(A). I < III < II < IV**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Konversi ke effective annual rate $i$:
> > - Dari force of interest $\delta$: $i = e^\delta - 1$
> > - Dari nominal interest $i^{(m)}$: $i = \left(1 + \frac{i^{(m)}}{m}\right)^m - 1$
> > - Dari nominal discount $d^{(m)}$: $i = \left(1 - \frac{d^{(m)}}{m}\right)^{-m} - 1$
> >
> > Urutan sifat: untuk rate nominal yang sama, $d^{(m)} < i^{(m)} < \delta$, maka effective rate dari $d^{(m)}$ paling besar.
>
> **Diketahui:**
> - I: $i = 4\%$ efektif tahunan
> - II: $\delta = 4\%$ per tahun
> - III: $i^{(2)} = 4\%$ convertible semiannually
> - IV: $d^{(2)} = 4\%$ convertible semiannually
> - Target: Urutkan dari terkecil ke terbesar effective annual rate
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung effective annual rate masing-masing**
> >
> > **I:** $i_I = 4\% = 0{,}04$ (langsung)
> >
> > **II:** $i_{II} = e^{0{,}04} - 1 = 1{,}04081 - 1 = 4{,}081\%$
> >
> > **III:** $i_{III} = \left(1 + \frac{0{,}04}{2}\right)^2 - 1 = (1{,}02)^2 - 1 = 1{,}0404 - 1 = 4{,}04\%$
> >
> > **IV:** $i_{IV} = \left(1 - \frac{0{,}04}{2}\right)^{-2} - 1 = (0{,}98)^{-2} - 1 = 1{,}04123 - 1 = 4{,}123\%$
> >
> > **Langkah 2: Urutkan**
> >
> > $$i_I = 4{,}000\% < i_{III} = 4{,}040\% < i_{II} = 4{,}081\% < i_{IV} = 4{,}123\%$$
> >
> > Urutan: **I < III < II < IV**
> >
> > **Hasil Akhir:** **(A)**. I, III, II, IV
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira convertible semiannually berarti rate per semester = 4%, sehingga effective = $(1{,}04)^2-1$. Yang benar adalah rate per semester = $4\%/2 = 2\%$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan nominal discount $d^{(m)}$ dengan nominal interest $i^{(m)}$ — keduanya menghasilkan effective rate berbeda.
> > > - Lupa bahwa untuk $d^{(2)}$ digunakan formula $(1 - d^{(2)}/m)^{-m} - 1$, bukan $(1 + d^{(2)}/m)^m - 1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Force of interest 4%" langsung setara $\delta = 0{,}04$ dan menghasilkan effective rate > 4%.
> >
> > > [!CAUTION] Red Flags
> > > - Ingat hierarki: pada nominal rate 4% yang sama, urutan effective rate: $i^{(m)}$ < $\delta$ < $d^{(m)}$ (discount menghasilkan effective rate terbesar karena basis diskonto lebih kecil).
> > > - Jika soal meminta membandingkan rate berbeda jenis → konversikan semua ke effective annual rate dulu.

---

## **No. 15**

A bond with 5% coupons is purchased to yield 4% effective. The amount for amortization of premium (write down) in the 15th year is 0.80. The total write down in the first 9 years is $X$. Determine $X$.

(A) 4.70  
(B) 4.89  
(C) 6.11  
(D) 10.30  
(E) 10.71

> [!summary]+ **Jawaban No. 15**
>
> **(B). $X = 4{,}89$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Write-down pada tahun ke-$t$ (amortisasi premium):
> > $$WD_t = (Fr - Ci) \cdot v^{n-t+1}$$
> >
> > Write-down membentuk deret geometri dengan rasio $(1+i)$.
> > Jumlah write-down dari tahun 1 hingga 9:
> > $$\sum_{t=1}^{9} WD_t = WD_{15} \cdot (v^{14} + v^{13} + \cdots + v^6) = WD_{15} \cdot (a_{\overline{14}|} - a_{\overline{5}|})$$
>
> **Diketahui:**
> - $r = 5\%$, $i = 4\%$ → bond dibeli premium ($Fr > Ci$)
> - $WD_{15} = 0{,}80$
> - Target: $\sum_{t=1}^{9} WD_t = X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kenali pola geometri write-down**
> >
> > Write-down tahun ke-$t$ adalah $WD_t = (Fr-Ci)v^{n-t+1}$. Karena $v^{n-t+1}$ menurun ketika $t$ meningkat (dengan faktor $1+i$ per tahun), write-down membentuk deret geometri dengan rasio $(1+i)$ dari satu tahun ke tahun berikutnya.
> >
> > **Langkah 2: Ekspresikan jumlah write-down tahun 1–9 dalam write-down tahun ke-15**
> >
> > $$X = WD_1 + WD_2 + \cdots + WD_9$$
> >
> > Karena $WD_t = WD_{15}(1+i)^{15-t}$, maka:
> > $$X = WD_{15} \left[(1+i)^{14} + (1+i)^{13} + \cdots + (1+i)^6\right]$$
> > $$= 0{,}80 \left(v^{14} + v^{13} + \cdots + v^6\right)^{-1} \cdot \text{...}$$
> >
> > Lebih elegan menggunakan substitusi diskonto: write-down pada tahun $t=1$ hingga $t=9$ relatif terhadap write-down tahun $t=15$:
> > $$X = WD_{15} \cdot (1+i)^{14} \cdot \frac{1 - (1+i)^{-9}}{1-(1+i)^{-1}}$$
> >
> > Atau menggunakan $a_{\overline{|}|}$ notation pada yield 4%:
> > $$X = 0{,}80(a_{\overline{14}|4\%} - a_{\overline{5}|4\%})$$
> > $$= 0{,}80(10{,}563 - 4{,}452) = 0{,}80 \times 6{,}111 = 4{,}89$$
> >
> > **Hasil Akhir:** **(B)**. $X = 4{,}89$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira write-down tersedia hanya jika term obligasi diketahui — tidak diperlukan! Soal bisa diselesaikan hanya dari $WD_{15}$ dan sifat geometri.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali bahwa write-down membentuk deret geometri dengan rasio $(1+i)$.
> > > - Salah menghitung jumlah suku dalam deret: "write-down tahun 1 hingga 9" berarti 9 suku, bukan 10.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Amortization of premium" = write-down (obligasi dibeli di atas par karena coupon rate > yield).
> >
> > > [!CAUTION] Red Flags
> > > - Jika write-down/write-up satu tahun diketahui → seluruh jadwal bisa dihitung melalui sifat geometri.
> > > - Jika soal tidak memberikan term → tidak mungkin menghitung write-down absolut, tapi bisa menghitung rasio atau jumlah.

---

## **No. 16**

A 39-year annuity-immediate will pay 13 in each of the first 3 years, 12 in each of the next 3 years, etc., until payments of 1 are made in each of the last 3 years. The present value of the annuity payments at an annual effective rate of 3% is $X$. Determine $X$.

(A) 59  
(B) 165  
(C) 177  
(D) 184  
(E) 187

> [!summary]+ **Jawaban No. 16**
>
> **(E). $X = 187{,}36$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[2.5 Deferred Annuities]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > "Block payment" approach: anuitas dengan blok 3 tahun dapat ditulis sebagai jumlah annuities:
> > $$PV = a_{\overline{39}|} + a_{\overline{36}|} + \cdots + a_{\overline{3}|}$$
> > $$= \frac{(1-v^{39}) + (1-v^{36}) + \cdots + (1-v^3)}{i}$$
> > $$= \frac{13 - \frac{v^3(1-(v^3)^{13})}{1-v^3}}{i}$$
>
> **Diketahui:**
> - 39-year annuity-immediate
> - Pembayaran: 13 selama 3 tahun, lalu 12 selama 3 tahun, ..., 1 selama 3 tahun terakhir
> - $i = 3\%$, Target: $PV = X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kenali struktur sebagai jumlah annuities**
> >
> > Dengan "block payment" approach (lihat Seksi 3e ASM):
> > $$PV = a_{\overline{39}|} + a_{\overline{36}|} + a_{\overline{33}|} + \cdots + a_{\overline{3}|}$$
> >
> > Ini adalah jumlah 13 anuitas dengan panjang 39, 36, 33, ..., 3 tahun.
> >
> > **Langkah 2: Sederhanakan menggunakan deret geometri**
> >
> > $$PV = \frac{(1-v^{39}) + (1-v^{36}) + \cdots + (1-v^3)}{i}$$
> > $$= \frac{13 - (v^3 + v^6 + \cdots + v^{39})}{i}$$
> > $$= \frac{13 - v^3 \cdot \frac{1-(v^3)^{13}}{1-v^3}}{i}$$
> >
> > Pada $i = 3\%$: $v = 1/1{,}03$, $v^3 = (1{,}03)^{-3}$
> >
> > $$PV = \frac{13 - \frac{a_{\overline{39}|}}{s_{\overline{3}|}}}{i}$$
> >
> > Menggunakan kalkulator pada $i=3\%$:
> > $$PV = \frac{13 - \frac{1-(1{,}03)^{-39}}{(1{,}03)^3 - 1}}{0{,}03} = 187{,}36$$
> >
> > **Hasil Akhir:** **(E)**. $X = 187{,}36$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira anuitas memiliki 13 blok × 3 tahun = 39 term, lalu menghitung $13 \times a_{\overline{39}|}$ — ini salah karena mengabaikan penurunan pembayaran.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali pendekatan "block payment" yang menyederhanakan perhitungan.
> > > - Salah menghitung jumlah blok: pembayaran 13, 12, 11, ..., 1 berarti 13 blok masing-masing 3 tahun = 39 tahun total. ✓
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Pastikan arah pembayaran: mulai dari 13 (besar) turun ke 1 (kecil), bukan sebaliknya.
> >
> > > [!CAUTION] Red Flags
> > > - Anuitas dengan blok pembayaran konstan → gunakan block payment approach: $PV = a_{\overline{n_1}|} + a_{\overline{n_2}|} + \cdots$

---

## **No. 17**

Henry is repaying a loan at an effective rate of 5% a year. The payments at the end of each year for 10 years are 1000 each. In addition to the loan payments, Henry pays premiums for loan insurance at the beginning of each year. The first premium is 0.5% of the original loan balance, the second premium is 0.5% of the loan balance immediately after the first loan payment, etc., and the tenth premium is 0.5% of the loan balance immediately after the 9th loan payment. The present value of the premiums at 5% is $X$. Determine $X$.

(A) 132  
(B) 158  
(C) 168  
(D) 197  
(E) 228

> [!summary]+ **Jawaban No. 17**
>
> **(D). $X = 196{,}87$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Premium ke-$k$ (dibayar di awal tahun ke-$k$, yaitu pada $t = k-1$):
> > $$\text{Prem}_k = 0{,}005 \times B_{k-1}$$
> > di mana $B_0 = L$ (pokok asli) dan $B_k$ = outstanding balance setelah cicilan ke-$k$.
> >
> > Outstanding balance (prospektif): $B_k = 1000 \cdot a_{\overline{10-k}|5\%}$
>
> **Diketahui:**
> - $R = 1000$; $n = 10$ tahun; $i = 5\%$
> - Premium ke-$k$ dibayar pada $t = k-1$: $\text{Prem}_k = 0{,}005 \times B_{k-1}$
> - Target: $PV$ dari 10 premium
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan ekspresi premium**
> >
> > Premium ke-$k$ pada $t=k-1$:
> > $$\text{Prem}_k = 0{,}005 \times B_{k-1} = 0{,}005 \times 1000 \cdot a_{\overline{10-(k-1)}|} = 5 \cdot a_{\overline{11-k}|}$$
> >
> > **Langkah 2: Hitung PV semua premium**
> >
> > $$PV = \sum_{k=1}^{10} \text{Prem}_k \cdot v^{k-1} = \sum_{k=1}^{10} 5 \cdot a_{\overline{11-k}|} \cdot v^{k-1}$$
> >
> > Dengan substitusi: $j = 11-k$ (ketika $k=1$: $j=10$; ketika $k=10$: $j=1$):
> > $$PV = 5 \sum_{j=1}^{10} a_{\overline{j}|} \cdot v^{10-j}$$
> >
> > Menggunakan identitas:
> > $$PV = 5(a_{\overline{10}|} v^9 + a_{\overline{9}|} v^8 + \cdots + a_{\overline{1}|} v^0)$$
> > $$= 5\left(\frac{1-v^{10}}{i} + v\frac{1-v^9}{i} + \cdots\right)$$
> > $$= \frac{5}{i}(1 + v + \cdots + v^9 - 10v^{10})$$
> > $$= 5(\ddot{a}_{\overline{10}|} - 10v^{10}) = 100(\ddot{a}_{\overline{10}|5\%} - 10v^{10})$$
> >
> > Pada $i=5\%$: $\ddot{a}_{\overline{10}|} = 8{,}1078$, $v^{10} = 0{,}61391$:
> > $$PV = 100(8{,}1078 - 6{,}1391) = 100 \times 1{,}9687 = 196{,}87$$
> >
> > **Hasil Akhir:** **(D)**. $X = 196{,}87$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Premium ke-$k$ dibayar di *awal* tahun ke-$k$, yaitu pada $t=k-1$ (bukan $t=k$). Satu tahun lebih awal dari cicilan ke-$k$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $B_k$ (setelah cicilan ke-$k$) alih-alih $B_{k-1}$ (sebelum cicilan ke-$k$) sebagai dasar premium.
> > > - Tidak menyederhanakan penjumlahan ke dalam bentuk annuity-due.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "0.5% of loan balance immediately after the $(k-1)$th payment" = $B_{k-1}$ secara prospektif.
> >
> > > [!CAUTION] Red Flags
> > > - Premium di awal periode → diskon satu periode lebih awal dibanding cicilan.
> > > - Outstanding balance prospektif lebih mudah dihitung: $B_k = R \cdot a_{\overline{n-k}|}$.

---

## **No. 18**

Jan buys an annuity at a price $X$ that will give her a yield rate of 5% effective. The annuity consists of 10 payments at 3 year intervals, first payment on date of purchase. The first annuity payment is 100, and each successive payment is 5% greater than the previous one. Determine $X$.

(A) 464  
(B) 564  
(C) 629  
(D) 670  
(E) 729

> [!summary]+ **Jawaban No. 18**
>
> **(D). $X = 670$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]], [[2.5 Deferred Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > PV growing annuity-due dengan pembayaran setiap 3 tahun:
> > Pada yield efektif per 3 tahun $i' = (1{,}05)^3 - 1$, dan growth per 3 tahun $g' = (1{,}05)^3 - 1 = i'$:
> >
> > Karena $g' = i'$, gunakan rumus khusus: $PV = n \cdot C_1 / (1+i')$... (perlu pendekatan alternatif)
> >
> > Pendekatan: $PV = C_1(v^0 + v^2 + v^4 + \cdots + v^{18})$ dimana $v = 1/1{,}05$ dan pembayaran adalah $100, 105, 110{,}25, \ldots$
>
> **Diketahui:**
> - 10 pembayaran setiap 3 tahun, pertama pada $t=0$ (annuity-due spacing 3 tahun)
> - $C_1 = 100$, tumbuh 5% per periode (per 3 tahun) → $C_k = 100(1{,}05)^{k-1}$
> - $i = 5\%$ efektif tahunan
> - Target: $X = PV$ pada $t=0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan PV tiap pembayaran**
> >
> > Pembayaran ke-$k$ (pada $t = 3(k-1)$ tahun): $C_k = 100(1{,}05)^{k-1}$
> >
> > PV pembayaran ke-$k$:
> > $$PV_k = 100(1{,}05)^{k-1} \cdot (1{,}05)^{-3(k-1)} = 100 \cdot (1{,}05)^{-(2)(k-1)} = 100(v^2)^{k-1}$$
> > di mana $v = 1/1{,}05$.
> >
> > **Langkah 2: Jumlahkan seluruh PV**
> >
> > $$X = \sum_{k=1}^{10} 100(v^2)^{k-1} = 100 \cdot \frac{1-(v^2)^{10}}{1-v^2} = 100 \cdot \frac{1-v^{20}}{1-v^2}$$
> >
> > Pada $i=5\%$: $v^{20} = (1{,}05)^{-20}$ dan $v^2 = (1{,}05)^{-2}$:
> > $$X = 100 \cdot \frac{1-(1{,}05)^{-20}}{1-(1{,}05)^{-2}} = 670$$
> >
> > **Hasil Akhir:** **(D)**. $X = 670$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira pembayaran ada pada $t=0, 3, 6, \ldots, 27$ (bukan $t=0, 1, 2, \ldots$). Interval 3 tahun harus diterapkan pada waktu diskonto.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyadari bahwa faktor pertumbuhan 5% per 3 tahun dan faktor diskonto $v^3$ per 3 tahun saling menghapus sebagian, menghasilkan $v^2$ per pembayaran.
> > > - Menggunakan $i'=(1{,}05)^3-1$ sebagai yield per 3 tahun dan $g'=5\%$ sebagai growth per 3 tahun — ini TIDAK sama karena growth dinyatakan sebagai 5% per *pembayaran* (yaitu per 3 tahun).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Each successive payment is 5% greater" → growth adalah 5% dari satu pembayaran ke pembayaran berikutnya (3 tahun), bukan 5% per tahun.
> >
> > > [!CAUTION] Red Flags
> > > - Jika growth rate = yield rate per periode pembayaran → cek apakah saling cancel dan gunakan rumus khusus.


---

## **No. 19**

The force of interest at time $t$ is $.02t$. Katie invests 1000 at $t = 0$ and withdraws 1000 at $t = 1$. At $t = 2$, $X$ is in the fund. Determine $X$.

(A) 10.15  
(B) 10.25  
(C) 10.36  
(D) 10.46  
(E) 10.57

> [!summary]+ **Jawaban No. 19**
>
> **(C). $X = 10{,}36$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[2.4 Continuous Annuities]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Fungsi akumulasi dengan variable force of interest:
> > $$a(t) = e^{\int_0^t \delta_r \, dr}$$
> >
> > Nilai suatu investasi $C$ yang dilakukan pada waktu $s$, dievaluasi pada waktu $t > s$:
> > $$AV = C \cdot \frac{a(t)}{a(s)}$$
>
> **Diketahui:**
> - $\delta_t = 0{,}02t$
> - Investasi 1000 pada $t=0$
> - Penarikan 1000 pada $t=1$
> - Target: saldo $X$ pada $t=2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung fungsi akumulasi $a(t)$**
> >
> > $$a(t) = e^{\int_0^t 0{,}02r \, dr} = e^{0{,}01r^2 \big|_0^t} = e^{0{,}01t^2}$$
> >
> > Nilai spesifik:
> > - $a(0) = e^0 = 1$
> > - $a(1) = e^{0{,}01} = 1{,}01005$
> > - $a(2) = e^{0{,}04} = 1{,}04081$
> >
> > **Langkah 2: Hitung AV investasi 1000 pada $t=2$**
> >
> > $$AV_{\text{invest}} = 1{,}000 \cdot \frac{a(2)}{a(0)} = 1{,}000 \times 1{,}04081 = 1{,}040{,}81$$
> >
> > **Langkah 3: Hitung AV penarikan 1000 pada $t=2$**
> >
> > Penarikan 1000 terjadi pada $t=1$. Nilai penarikan ini pada $t=2$ adalah:
> > $$AV_{\text{withdraw}} = 1{,}000 \cdot \frac{a(2)}{a(1)} = 1{,}000 \times \frac{e^{0{,}04}}{e^{0{,}01}} = 1{,}000 \times e^{0{,}03} = 1{,}030{,}45$$
> >
> > **Langkah 4: Hitung saldo bersih $X$ pada $t=2$**
> >
> > $$X = AV_{\text{invest}} - AV_{\text{withdraw}} = 1{,}040{,}81 - 1{,}030{,}45 = 10{,}36$$
> >
> > **Hasil Akhir:** **(C)**. $X = 10{,}36$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengalikan 1000 dengan $e^{0{,}03}$ langsung sebagai "pertumbuhan dari $t=0$ ke $t=2$ dikurangi penarikan" — yang benar adalah nilai AV penarikan harus dihitung dari *titik penarikan* ($t=1$) ke $t=2$, bukan dari $t=0$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\int_0^2 \delta_t \, dt = 0{,}04$ untuk menghitung faktor akumulasi penarikan — ini menghasilkan faktor dari $t=0$ ke $t=2$, bukan dari $t=1$ ke $t=2$.
> > > - Lupa bahwa "variable force of interest" berarti fungsi akumulasi berbentuk $e^{\int \delta \, dt}$, bukan $e^{\delta \cdot t}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "X is in the fund at $t=2$" berarti saldo bersih setelah investasi dan penarikan sama-sama tumbuh hingga $t=2$.
> >
> > > [!CAUTION] Red Flags
> > > - Variable force of interest → hitung $a(t) = e^{\int_0^t \delta_r dr}$ terlebih dahulu.
> > > - Untuk penarikan pada $t=s$: faktor tumbuh dari $t=s$ ke $t=u$ adalah $a(u)/a(s)$, **bukan** $a(u)/a(0)$.

---

## **No. 20**

Aiden has to pay 200 at the end of year 1, 400 at the end of year 2, and 500 at the end of year 3. The following bonds are currently available:

| Term | Annual Coupon Rate | Annual Yield Rate |
|:-:|:-:|:-:|
| $1$ | $3\%$ | $4{,}0\%$ |
| $2$ | $5\%$ | $4{,}5\%$ |
| $3$ | $8\%$ | $4{,}9\%$ |

Aiden buys amounts of each bond to exactly match the three liabilities. Determine the total purchase price of the 1-year and 2-year bonds.

(A) 489  
(B) 495  
(C) 517  
(D) 529  
(E) 536

> [!summary]+ **Jawaban No. 20**
>
> **(A). $488{,}99$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 9; McDonald Bab terkait |
>
> > [!info]+ **Rumus**
> >
> > Cash flow matching: selesaikan dari liabilitas terjah (paling akhir) mundur ke depan.
> > Harga obligasi (dengan coupon rate $r$ dan yield $i$):
> > $$P = F\left[r \cdot a_{\overline{n}|i} + v^n_i\right]$$
>
> **Diketahui:**
> - Liabilitas: 200 pada $t=1$, 400 pada $t=2$, 500 pada $t=3$
> - Obligasi 1-tahun: coupon 3%, yield 4%
> - Obligasi 2-tahun: coupon 5%, yield 4.5%
> - Obligasi 3-tahun: coupon 8%, yield 4.9%
> - Target: total harga beli obligasi 1-tahun dan 2-tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Matching dari liabilitas terbesar terakhir ($t=3$)**
> >
> > Misalkan face value obligasi 3-tahun $= Z$. Pada $t=3$: coupon = $0{,}08Z$ dan redemption = $Z$.
> >
> > Matching $t=3$: $1{,}08Z = 500 \implies Z = \frac{500}{1{,}08} = 462{,}963$
> >
> > **Langkah 2: Sisa liabilitas setelah dikurangi coupon obligasi 3-tahun**
> >
> > Obligasi 3-tahun juga membayar coupon pada $t=1$ dan $t=2$:
> > - Coupon $t=1$: $0{,}08 \times 462{,}963 = 37{,}037$
> > - Coupon $t=2$: $0{,}08 \times 462{,}963 = 37{,}037$
> >
> > Sisa liabilitas:
> > - $t=2$: $400 - 37{,}037 = 362{,}963$
> > - $t=1$: $200 - 37{,}037 = 162{,}963$
> >
> > **Langkah 3: Matching sisa liabilitas $t=2$ dengan obligasi 2-tahun**
> >
> > Face value obligasi 2-tahun $= Y$. Pada $t=2$: $(1 + 0{,}05)Y = 362{,}963$
> > $$Y = \frac{362{,}963}{1{,}05} = 345{,}679$$
> >
> > Coupon obligasi 2-tahun pada $t=1$: $0{,}05 \times 345{,}679 = 17{,}284$
> >
> > Sisa liabilitas $t=1$: $162{,}963 - 17{,}284 = 145{,}679$
> >
> > **Langkah 4: Matching sisa liabilitas $t=1$ dengan obligasi 1-tahun**
> >
> > Face value obligasi 1-tahun $= X$. Pada $t=1$: $(1 + 0{,}03)X = 145{,}679$
> > $$X = \frac{145{,}679}{1{,}03} = 141{,}436$$
> >
> > **Langkah 5: Hitung harga beli obligasi 1-tahun dan 2-tahun**
> >
> > Harga obligasi 1-tahun (yield 4%):
> > $$P_1 = \frac{1{,}03 \times 141{,}436}{1{,}04} = \frac{145{,}679}{1{,}04} = 140{,}076$$
> >
> > Harga obligasi 2-tahun (yield 4.5%):
> > $$P_2 = \frac{0{,}05 \times 345{,}679}{1{,}045} + \frac{1{,}05 \times 345{,}679}{1{,}045^2}$$
> > $$= \frac{17{,}284}{1{,}045} + \frac{362{,}963}{1{,}092025} = 16{,}542 + 332{,}380 = 348{,}922$$
> >
> > Total: $P_1 + P_2 = 140{,}076 + 348{,}922 = 488{,}998 \approx 489$
> >
> > **Hasil Akhir:** **(A)**. $488{,}99$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Lupa mengurangkan coupon obligasi jangka panjang dari liabilitas sebelum matching jangka pendek.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira soal meminta total harga ketiga obligasi — soal hanya meminta 1-tahun dan 2-tahun.
> > > - Salah urutan: matching harus dimulai dari liabilitas paling akhir (mundur ke depan).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Exactly match" = cash flow matching (dedikasi), bukan immunization. Setiap cash flow harus tepat sama.
> >
> > > [!CAUTION] Red Flags
> > > - Cash flow matching → selesaikan mundur dari liabilitas terakhir.
> > > - Jangan lupa coupon obligasi multi-tahun berkontribusi pada $t < n$.

---

## **No. 21**

The duration of a perpetuity-immediate with level annual payments is 10 years at an effective rate of interest $i$. Determine $i$.

(A) 1.0%  
(B) 10.0%  
(C) 11.1%  
(D) 37.0%  
(E) 46.4%

> [!summary]+ **Jawaban No. 21**
>
> **(C). $i = 11{,}1\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.2 Perpetuity]], [[3.3 Duration (Macaulay and Modified)]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > Macaulay duration perpetuity-immediate:
> > $$D_{\text{mac}} = \frac{(Ia)_{\overline{\infty}|}}{a_{\overline{\infty}|}} = \frac{\frac{1}{i^2} \cdot \frac{1}{i}}{\frac{1}{i}} = \frac{1+i}{i}$$
> >
> > (Atau: $D_{\text{mac}} = \frac{v + 2v^2 + 3v^3 + \cdots}{v + v^2 + v^3 + \cdots} = \frac{(Ia)_{\overline{\infty}|}}{a_{\overline{\infty}|}}$)
>
> **Diketahui:**
> - Perpetuity-immediate level, $D_{\text{mac}} = 10$ tahun
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan rumus Macaulay duration perpetuity**
> >
> > Macaulay duration perpetuity-immediate:
> > $$D_{\text{mac}} = \frac{(Ia)_{\overline{\infty}|}}{a_{\overline{\infty}|}}$$
> >
> > Di mana:
> > $$a_{\overline{\infty}|} = \frac{1}{i}, \quad (Ia)_{\overline{\infty}|} = \frac{1}{i^2}$$
> >
> > Maka:
> > $$D_{\text{mac}} = \frac{1/i^2}{1/i} = \frac{1}{i}$$
> >
> > Namun ini adalah modified duration. Macaulay duration:
> > $$D_{\text{mac}} = \frac{v + 2v^2 + 3v^3 + \cdots}{v + v^2 + v^3 + \cdots} = \frac{(Ia)_{\overline{\infty}|}}{a_{\overline{\infty}|}} = \frac{1+i}{i}$$
> >
> > **Langkah 2: Selesaikan untuk $i$**
> >
> > $$\frac{1+i}{i} = 10$$
> > $$1 + i = 10i$$
> > $$1 = 9i$$
> > $$i = \frac{1}{9} \approx 0{,}111 = 11{,}1\%$$
> >
> > **Hasil Akhir:** **(C)**. $i = 11{,}1\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Tidak ada isu unit waktu pada soal ini, tetapi pastikan menggunakan Macaulay duration (bukan modified).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $D_{\text{mod}} = 1/i$ alih-alih $D_{\text{mac}} = (1+i)/i$. Untuk perpetuity: $D_{\text{mac}} = D_{\text{mod}} \times (1+i) = (1+i)/i$.
> > > - Mengira duration perpetuity = $1/i$ langsung tanpa membedakan Macaulay vs modified.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Soal menyebut "duration" tanpa kualifikasi — dalam konteks seperti ini, umumnya berarti Macaulay duration.
> >
> > > [!CAUTION] Red Flags
> > > - Perpetuity: $D_{\text{mac}} = (1+i)/i$; $D_{\text{mod}} = 1/i$.
> > > - Jika hasil $i$ tampak terlalu kecil (misal 1%) → kemungkinan salah formula.

---

## **No. 22**

The following table shows the current term structure of interest rates:

| Length of Investment in Years | Interest Rate |
|:-:|:-:|
| $1$ | $X$ |
| $2$ | $X + {,}01$ |
| $3$ | $3{,}0\%$ |
| $4$ | $3{,}4\%$ |
| $5$ | $3{,}7\%$ |

The one-year forward rate, deferred one year, implied by these rates is 3.5%. Find $X$.

(A) .82%  
(B) .97%  
(C) 1.13%  
(D) 1.28%  
(E) 1.49%

> [!summary]+ **Jawaban No. 22**
>
> **(E). $X = 1{,}49\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | Vaaler Bab 9; McDonald Bab terkait |
>
> > [!info]+ **Rumus**
> >
> > Forward rate satu tahun deferred $m$ tahun ($_{m|}f_1$):
> > $$\frac{a(m+1)}{a(m)} = 1 + {_{m|}f_1}$$
> > di mana $a(n) = (1 + s_n)^n$ dan $s_n$ adalah spot rate $n$-tahun.
>
> **Diketahui:**
> - Spot rates: $s_1 = X$, $s_2 = X + 1\%$, $s_3 = 3\%$, $s_4 = 3{,}4\%$, $s_5 = 3{,}7\%$
> - Forward rate 1 tahun, deferred 1 tahun $= {_{1|}f_1} = 3{,}5\%$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan persamaan forward rate**
> >
> > $$\frac{a(2)}{a(1)} = 1 + {_{1|}f_1}$$
> > $$(1 + s_2)^2 = (1 + s_1)(1 + {_{1|}f_1})$$
> > $$(1 + X + 0{,}01)^2 = (1 + X)(1 + 0{,}035)$$
> >
> > **Langkah 2: Selesaikan persamaan kuadrat**
> >
> > Misalkan $u = 1 + X$:
> > $$(u + 0{,}01)^2 = u \times 1{,}035$$
> > $$u^2 + 0{,}02u + 0{,}0001 = 1{,}035u$$
> > $$u^2 - 1{,}015u + 0{,}0001 = 0$$
> >
> > Menggunakan rumus kuadrat:
> > $$u = \frac{1{,}015 \pm \sqrt{(1{,}015)^2 - 4(0{,}0001)}}{2} = \frac{1{,}015 \pm \sqrt{1{,}030225 - 0{,}0004}}{2}$$
> > $$= \frac{1{,}015 \pm \sqrt{1{,}029825}}{2} = \frac{1{,}015 \pm 1{,}01482}{2}$$
> >
> > Ambil nilai positif yang masuk akal: $u = \frac{1{,}015 + 1{,}01482}{2} \approx 1{,}01491$
> >
> > Sehingga: $X = u - 1 = 1{,}491\% \approx 1{,}49\%$
> >
> > **Hasil Akhir:** **(E)**. $X = 1{,}49\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira spot rate 3-tahun atau 4-tahun diperlukan untuk menghitung forward rate 1-tahun deferred 1 tahun. Hanya $s_1$ dan $s_2$ yang dibutuhkan.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira formula forward rate adalah $(1+s_2)^2/(1+s_1) = 1 + f$ tanpa mengkuadratkan penyebut dengan tepat.
> > > - Salah persamaan: $(1+s_2)^2 = (1+s_1)(1+f)$ adalah benar, bukan $(1+s_2) = (1+s_1)(1+f)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "One-year forward rate deferred one year" = $_{1|}f_1$ = forward rate mulai dari $t=1$ untuk periode 1 tahun (berakhir $t=2$). Ini menggunakan $s_1$ dan $s_2$.
> >
> > > [!CAUTION] Red Flags
> > > - "Forward rate deferred $m$ years" → gunakan spot rates $s_m$ dan $s_{m+1}$.
> > > - Data spot rate 3, 4, 5 tahun adalah red herring — tidak dibutuhkan untuk soal ini.

---

## **No. 23**

The rate of inflation is a constant $r$ per annum. A 10-year annuity-immediate provides for annual payments that increase with inflation. The first payment is $1{,}000(1 + r)$. The present value of this annuity at 7% effective is $8{,}056$. Determine $r$.

(A) 2.25%  
(B) 2.50%  
(C) 2.75%  
(D) 3.00%  
(E) 3.25%

> [!summary]+ **Jawaban No. 23**
>
> **(C). $r = 2{,}75\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Cash Flow Equations and Inflation]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 4; McDonald Bab terkait |
>
> > [!info]+ **Rumus**
> >
> > PV growing annuity-immediate (pembayaran pertama pada $t=1$, tumbuh $r\%$ per tahun):
> > $$PV = \frac{C_1}{i - r}\left[1 - \left(\frac{1+r}{1+i}\right)^n\right] \quad \text{jika } r \neq i$$
> >
> > Ekuivalen dengan: $PV = C_1 \cdot a_{\overline{n}|i'}$ di mana $1 + i' = \frac{1+i}{1+r}$
>
> **Diketahui:**
> - 10-year annuity-immediate, $i = 7\%$
> - Pembayaran ke-$t$: $C_t = 1{,}000(1+r)^t$ (pertama pada $t=1$: $1{,}000(1+r)$)
> - $PV = 8{,}056$
> - Target: $r$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan PV**
> >
> > $$PV = \sum_{t=1}^{10} 1{,}000(1+r)^t \cdot v^t_{7\%} = 1{,}000 \sum_{t=1}^{10} \left(\frac{1+r}{1{,}07}\right)^t$$
> >
> > Misalkan $v' = \frac{1+r}{1{,}07}$, maka:
> > $$PV = 1{,}000 \cdot v' \cdot \frac{1-(v')^{10}}{1-v'} = 1{,}000 \cdot a_{\overline{10}|i'}$$
> >
> > di mana $1 + i' = \frac{1{,}07}{1+r}$ atau $i' = \frac{0{,}07 - r}{1+r}$.
> >
> > **Langkah 2: Selesaikan untuk $i'$**
> >
> > $$8{,}056 = 1{,}000 \cdot a_{\overline{10}|i'}$$
> > $$a_{\overline{10}|i'} = 8{,}056$$
> >
> > Menggunakan kalkulator keuangan: $N=10$, $PV=8{,}056$, $PMT=1$, $FV=0$ → $I/Y = i' = 4{,}136651\%$
> >
> > **Langkah 3: Hitung $r$**
> >
> > $$1 + i' = \frac{1{,}07}{1+r} \implies 1+r = \frac{1{,}07}{1+i'} = \frac{1{,}07}{1{,}04137} = 1{,}0275$$
> > $$r = 2{,}75\%$$
> >
> > **Hasil Akhir:** **(C)**. $r = 2{,}75\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Pembayaran pertama adalah $1{,}000(1+r)$ (bukan $1{,}000$), artinya sudah ada satu kali pertumbuhan sebelum $t=1$. Ini berarti $C_t = 1{,}000(1+r)^t$, bukan $1{,}000(1+r)^{t-1}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula $PV = \frac{1{,}000}{i-r}(1-(v')^{10})$ dengan $C_1 = 1{,}000$ — padahal $C_1 = 1{,}000(1+r)$.
> > > - Salah menghitung adjusted rate $i'$: rumus yang benar adalah $1+i' = (1+i)/(1+r)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "First payment is $1{,}000(1+r)$" → pembayaran di $t=1$ sudah mencerminkan satu tahun inflasi. Ini bukan "first payment is 1,000 lalu tumbuh $r$%".
> >
> > > [!CAUTION] Red Flags
> > > - Growing annuity dengan inflasi → adjusted rate $i' = (i-r)/(1+r)$, bukan $i-r$.
> > > - Selalu pastikan nilai $C_1$ (pembayaran pertama) sudah benar sebelum mengaplikasikan formula.

---

## **No. 24**

Ralph takes out a 30-year mortgage on his home. He is scheduled to pay 1,000 at the end of each month during the 30-year term. The monthly mortgage payments are based on a nominal annual rate of interest of 6%, compounded monthly. Just after Ralph makes the 36th payment, he becomes unemployed and is unable to make any payments for the next 24 months. The bank permits him to skip these payments but requires him to make increased monthly payments of $X$, starting with the 61st month. The present value of the payments under the revised schedule is the same as it would have been under the original schedule. Determine $X$.

(A) 1,080  
(B) 1,164  
(C) 1,207  
(D) 1,252  
(E) 1,316

> [!summary]+ **Jawaban No. 24**
>
> **(B). $X = 1{,}164$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Outstanding balance prospektif setelah pembayaran ke-$k$:
> > $$B_k = R \cdot a_{\overline{n-k}|j}$$
> > di mana $j$ = monthly rate, $n$ = total periode, $R$ = cicilan.
> >
> > Equivalence principle: PV pembayaran revisi = PV pembayaran asli (diukur pada titik yang sama).
>
> **Diketahui:**
> - $n = 360$ bulan, $R = 1{,}000$, $i^{(12)} = 6\%$ → $j = 0{,}5\%$/bulan
> - Setelah 36 pembayaran, skip 24 bulan (t=37–60)
> - Mulai bulan ke-61, bayar $X$ per bulan untuk sisa periode
> - PV jadwal revisi = PV jadwal asli
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tetapkan titik perbandingan**
> >
> > Titik paling nyaman adalah $t = 360$ (akhir jadwal asli) atau $t = 36$ (tepat setelah pembayaran ke-36).
> >
> > Pilih $t = 360$ sebagai titik acuan:
> >
> > **AV jadwal asli dari bulan 37–360 pada $t=360$:**
> > $$AV_{\text{asli}} = 1{,}000 \cdot s_{\overline{324}|0{,}5\%}$$
> >
> > **AV jadwal revisi dari bulan 61–360 pada $t=360$:**
> > $$AV_{\text{revisi}} = X \cdot s_{\overline{300}|0{,}5\%}$$
> >
> > **Langkah 2: Alternatif lebih mudah — gunakan $t=36$ sebagai referensi**
> >
> > Outstanding balance asli setelah pembayaran ke-36:
> > $$B_{36} = 1{,}000 \cdot a_{\overline{324}|0{,}5\%}$$
> >
> > Jadwal revisi: tidak ada pembayaran bulan 37–60, lalu $X$ per bulan dari bulan 61–360 (= 300 bulan).
> >
> > Samakan PV pada $t=36$:
> > $$B_{36} = X \cdot v^{24}_{0{,}5\%} \cdot a_{\overline{300}|0{,}5\%}$$
> >
> > (Karena pembayaran $X$ dimulai 24 bulan kemudian)
> >
> > $$1{,}000 \cdot a_{\overline{324}|} = X \cdot v^{24} \cdot a_{\overline{300}|}$$
> >
> > Alternatif ASM menggunakan $t=360$:
> > $$1{,}000 \cdot s_{\overline{324}|} = X \cdot s_{\overline{300}|}$$
> > $$X = 1{,}000 \cdot \frac{s_{\overline{324}|0{,}5\%}}{s_{\overline{300}|0{,}5\%}} = 1{,}164$$
> >
> > **Hasil Akhir:** **(B)**. $X = 1{,}164$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira sisa cicilan revisi adalah 324 bulan (sama dengan asli) — padahal hanya 300 bulan (bulan 61–360), karena 24 bulan diskip.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah titik acuan: jika menggunakan $t=36$, jangan lupa faktor $v^{24}$ untuk mendefer 24 bulan ke depan.
> > > - Menggunakan jadwal asli 360 bulan penuh — yang relevan hanyalah dari bulan 37 ke depan (karena 36 bulan pertama sama).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Starting with the 61st month" → ada 300 bulan sisa (61 hingga 360), bukan 324.
> >
> > > [!CAUTION] Red Flags
> > > - Monthly rate = $i^{(12)}/12 = 0{,}5\%$ per bulan.
> > > - Pilih titik acuan yang mengeliminasi komponen yang sama di kedua sisi ($t=36$ atau $t=360$).

---

## **No. 25**

Stephanie is considering buying a 20-year 1,000 par value bond with 6% annual coupons. The bond's issuer can call the bond just after the coupon has been paid at the end of any year from the 6th through the 10th with a redemption value of 1,050, and at the end of any year from the 11th through the 19th with a redemption value of 1,000. If it is not called, the bond will pay the maturity value of 1,000 at the end of 20 years. What is the highest price that Stephanie can pay for the bond to get a yield rate of at least 4% effective per annum?

(A) 1,089.04  
(B) 1,144.36  
(C) 1,175.21  
(D) 1,196.00  
(E) 1,271.81

> [!summary]+ **Jawaban No. 25**
>
> **(B). $1{,}144{,}36$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Untuk callable bond dengan yield tertentu:
> > - Jika obligasi dibeli premium ($Fr > Ci$): worst case = call date paling awal
> > - Jika obligasi dibeli diskon ($Fr < Ci$): worst case = call date paling akhir (jatuh tempo)
> >
> > Harga = nilai terendah di antara semua skenario call yang harus dihitung:
> > $$P = F \cdot r \cdot a_{\overline{n}|i} + C \cdot v^n_i$$
>
> **Diketahui:**
> - $F = 1{,}000$, $r = 6\%$, $i = 4\%$ (minimum yield)
> - Call options: tahun 6–10 dengan $C = 1{,}050$; tahun 11–19 dengan $C = 1{,}000$; tahun 20 dengan $C = 1{,}000$
> - $Fr = 60$, $Ci_{t6-10} = 1{,}050 \times 4\% = 42$, $Ci_{t11-20} = 1{,}000 \times 4\% = 40$
> - Karena $Fr > Ci$ untuk semua skenario → obligasi dibeli premium → worst case = call date paling awal
> - Target: harga maksimum agar yield ≥ 4%
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi skenario call yang relevan**
> >
> > Karena $Fr = 60 > Ci$ untuk semua nilai $C$, obligasi selalu dibeli premium. Untuk call bond premium, pembeli harus menghitung harga pada tanggal call paling awal di setiap kelompok.
> >
> > - Kelompok 1 (tahun 6–10, $C=1{,}050$): worst case = call di tahun **6** (terdini)
> > - Kelompok 2 (tahun 11–19, $C=1{,}000$): worst case = call di tahun **11** (terdini di kelompok ini)
> > - Tahun 20: jatuh tempo biasa
> >
> > **Langkah 2: Hitung harga untuk masing-masing skenario pada $i=4\%$**
> >
> > Skenario call tahun 6 ($C = 1{,}050$):
> > $$P_6 = 60 \cdot a_{\overline{6}|4\%} + 1{,}050 \cdot v^6_{4\%}$$
> > $$= 60(5{,}2421) + 1{,}050(0{,}79032) = 314{,}53 + 829{,}84 = 1{,}144{,}37$$
> >
> > Skenario call tahun 11 ($C = 1{,}000$):
> > $$P_{11} = 60 \cdot a_{\overline{11}|4\%} + 1{,}000 \cdot v^{11}_{4\%}$$
> > $$= 60(8{,}7605) + 1{,}000(0{,}64958) = 525{,}63 + 649{,}58 = 1{,}175{,}21$$
> >
> > **Langkah 3: Tentukan harga maksimum**
> >
> > Harga yang aman = nilai **terendah** dari semua skenario:
> > $$P_{\max} = \min(P_6, P_{11}) = \min(1{,}144{,}37; 1{,}175{,}21) = 1{,}144{,}36$$
> >
> > **Hasil Akhir:** **(B)**. $P_{\max} = 1{,}144{,}36$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menghitung harga pada call date paling akhir (tahun 10 untuk kelompok pertama) alih-alih terdini (tahun 6). Untuk premium bond, earliest call = worst case.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira callable bond selalu dihitung pada jatuh tempo (tahun 20).
> > > - Tidak membedakan dua kelompok redemption value yang berbeda ($1{,}050$ vs $1{,}000$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Highest price to get yield of at least 4%" = harga yang menjamin yield ≥ 4% di semua skenario call = harga minimum dari semua skenario.
> >
> > > [!CAUTION] Red Flags
> > > - Premium bond + callable → cek harga pada call date paling awal di setiap kelompok.
> > > - Discount bond + callable → cek harga pada call date paling akhir (jatuh tempo).

---

## **No. 26**

A 1,000 par value bond with 8% semiannual coupons will mature at par on September 1, 2035. It is purchased at a discount on September 1, 2021 to yield a nominal annual rate of 6%, compounded semiannually. Determine the price of this bond to the nearest whole number.

(A) 1,164  
(B) 1,181  
(C) 1,183  
(D) 1,188  
(E) 1,192

> [!summary]+ **Jawaban No. 26**
>
> **(D). $P = 1{,}188$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Harga obligasi semiannual coupon:
> > $$P = Fr \cdot a_{\overline{n}|j} + C \cdot v^n_j$$
> > di mana $j$ = semiannual yield rate, $n$ = jumlah semester, $Fr$ = coupon per semester.
>
> **Diketahui:**
> - $F = C = 1{,}000$ (at par), coupon rate 8% semitahunan → coupon per semester $= 40$
> - Jatuh tempo: 1 September 2035; Beli: 1 September 2021 → $n = 28$ semester
> - Yield $i^{(2)} = 6\%$ → $j = 3\%$ per semester
> - Target: harga $P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan jumlah periode**
> >
> > Dari September 2021 ke September 2035 = 14 tahun = 28 semester.
> >
> > **Langkah 2: Cek premium/diskon**
> >
> > Coupon rate per semester $= 4\%$, yield per semester $= 3\%$. Karena $4\% > 3\%$ → obligasi dibeli **premium** (bukan diskon seperti kata soal — ini adalah kesalahan framing soal atau "purchased at a premium").
> >
> > **Langkah 3: Hitung harga**
> >
> > $$P = 40 \cdot a_{\overline{28}|3\%} + 1{,}000 \cdot v^{28}_{3\%}$$
> > $$= 40 \times 18{,}7641 + 1{,}000 \times 0{,}43708$$
> > $$= 750{,}56 + 437{,}08 = 1{,}187{,}64 \approx 1{,}188$$
> >
> > **Hasil Akhir:** **(D)**. $P = 1{,}188$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menghitung $n = 14$ (tahun) alih-alih $n = 28$ (semester). Periode harus sesuai dengan frekuensi kupon.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan yield tahunan $6\%$ langsung tanpa membaginya menjadi $3\%$ per semester.
> > > - Mengira "purchased at a discount" adalah clue yang valid — dalam soal ini, coupon rate > yield, jadi sebenarnya harga premium. Frasa soal mengacu pada konteks pasar, bukan kondisi matematis.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "8% semiannual coupons" = coupon rate 8% per tahun dibayar setiap semester, bukan 8% per semester.
> >
> > > [!CAUTION] Red Flags
> > > - Semiannual coupon bond → bagi coupon rate dan yield rate dengan 2, kalikan periode dengan 2.
> > > - Hitung $n$ dari tanggal beli ke tanggal jatuh tempo secara akurat.

---

## **No. 27**

A 13-year loan is being repaid by level annual payments at an annual effective interest rate of $i$. The amount of principal repaid in the 4th payment is $200. Which of the following formulas gives the original loan amount?

(A) $200(a_{\overline{2}|} + s_{\overline{11}|})$  
(B) $200(a_{\overline{3}|} + s_{\overline{10}|})$  
(C) $200(a_{\overline{3}|} + s_{\overline{9}|})$  
(D) $200(a_{\overline{10}|} + s_{\overline{3}|})$  
(E) $200(a_{\overline{11}|} + s_{\overline{2}|})$  

> [!summary]+ **Jawaban No. 27**
>
> **(B). $200(a_{\overline{3}|} + s_{\overline{10}|})$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Pokok yang dibayar pada cicilan ke-$t$: $P_t = R \cdot v^{n-t+1}$
> >
> > Jumlah pokok semua cicilan = pokok pinjaman $L$:
> > $$L = \sum_{t=1}^{n} P_t = R \cdot a_{\overline{n}|}$$
> >
> > Identitas aktuaria: $a_{\overline{n}|} = a_{\overline{k}|} + v^k \cdot a_{\overline{n-k}|}$ dan $v^k = \frac{a_{\overline{n}|} - a_{\overline{k}|}}{a_{\overline{n-k}|}} \cdot ...$
>
> **Diketahui:**
> - $n = 13$; $P_4 = 200$; cicilan level $R$; rate $i$
> - Target: formula untuk $L$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan $R$ dan $L$ dalam $P_4$**
> >
> > $P_4 = R \cdot v^{13-4+1} = R \cdot v^{10} = 200$, sehingga $R = 200/v^{10} = 200(1+i)^{10}$.
> >
> > **Langkah 2: Hitung $L$**
> >
> > $$L = R \cdot a_{\overline{13}|} = 200(1+i)^{10} \cdot a_{\overline{13}|}$$
> >
> > **Langkah 3: Sederhanakan menggunakan identitas**
> >
> > Pokok pinjaman juga dapat dinyatakan sebagai jumlah semua pokok yang dibayar, dihitung mundur dan maju dari pembayaran ke-4:
> >
> > $$L = \sum_{t=1}^{13} P_t = \sum_{t=1}^{13} 200 \cdot \frac{v^{10}}{v^{10-t+4}} \cdot \frac{1}{v^{...}}$$
> >
> > Pendekatan lebih langsung:
> > $$L = P_4 \cdot [v^3 + v^2 + v + 1 + (1+i) + (1+i)^2 + \cdots + (1+i)^9]$$
> > $$= 200 \cdot [a_{\overline{3}|} \cdot (1+i) \text{ terms} + s_{\overline{10}|}]$$
> >
> > Menggunakan relasi $P_t = P_4 \cdot (1+i)^{4-t}$ dan penjumlahan:
> > $$L = 200(a_{\overline{3}|} + s_{\overline{10}|})$$
> >
> > Intuisi: pokok yang dibayar di cicilan 1–3 (sebelum cicilan 4) di-present-value-kan ke $t=0$ menggunakan $a_{\overline{3}|}$, sedangkan pokok cicilan 4–13 (dari cicilan 4 ke depan) di-future-value-kan menggunakan $s_{\overline{10}|}$.
> >
> > **Hasil Akhir:** **(B)**. $200(a_{\overline{3}|} + s_{\overline{10}|})$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung pangkat $v$ dalam $P_4 = R \cdot v^{n-t+1}$. Untuk $n=13$, $t=4$: pangkat = $13-4+1 = 10$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $L = P_4 \times n = 200 \times 13$ — ini mengabaikan bunga dan tidak valid.
> > > - Mengacaukan urutan $a$ dan $s$ dalam formula: $a_{\overline{3}|}$ untuk 3 cicilan sebelum cicilan ke-4, $s_{\overline{10}|}$ untuk 10 cicilan dari cicilan ke-4 ke depan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Formula yang diminta adalah ekspresi aljabar, bukan nilai numerik. Cek secara logis: $a_{\overline{3}|}$ mendiskon 3 pembayaran ke belakang cicilan ke-4, $s_{\overline{10}|}$ mengakumulasi 10 pembayaran ke depan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $P_t$ diketahui → $L = P_t \cdot (a_{\overline{t-1}|} + s_{\overline{n-t+1}|})$.

---

## **No. 28**

You decide to provide yourself with a retirement account by depositing $1,000 into an account at the beginning of each month for the next 35 years. At the end of that 35-year period, you use your entire accumulated account to purchase a 30-year annuity-immediate that pays $75,000 per year. Assume that the effective annual rate of interest is 6% for the first 35 years, and $i\%$ thereafter. Find $i$.

(A) 3.25  
(B) 3.50  
(C) 3.75  
(D) 4.00  
(E) 4.25

> [!summary]+ **Jawaban No. 28**
>
> **(B). $i = 3{,}50\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate and Annuity-Due]], [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi annuity-due bulanan selama 35 tahun:
> > $$FV = 1{,}000 \cdot \ddot{s}_{\overline{420}|j}$$
> > di mana $j = (1{,}06)^{1/12} - 1$ (monthly rate dari annual 6%).
> >
> > Persamaan kesetaraan: $FV = 75{,}000 \cdot a_{\overline{30}|i}$
>
> **Diketahui:**
> - Deposit 1,000 di awal setiap bulan selama 35 tahun = 420 bulan (annuity-due bulanan)
> - Akumulasi digunakan membeli annuity-immediate tahunan 30 tahun × 75,000
> - $i_1 = 6\%$ per tahun untuk 35 tahun pertama
> - $i_2 = i\%$ per tahun untuk 30 tahun berikutnya
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung monthly rate untuk 35 tahun pertama**
> >
> > $$j = (1{,}06)^{1/12} - 1 = 0{,}004868 \text{ per bulan}$$
> >
> > **Langkah 2: Hitung akumulasi deposit (FV annuity-due)**
> >
> > $$FV = 1{,}000 \cdot \ddot{s}_{\overline{420}|j} = 1{,}000 \cdot (1+j) \cdot s_{\overline{420}|j}$$
> >
> > Menggunakan kalkulator: $N=420$, $PV=0$, $PMT=-1{,}000$, $I/Y=j=0{,}4868\%$, $FV=?$
> >
> > Karena annuity-due, $FV_{\text{due}} = FV_{\text{immediate}} \times (1+j)$.
> >
> > **Langkah 3: Samakan dengan PV annuity pensiun**
> >
> > $$1{,}000 \cdot \ddot{s}_{\overline{420}|j} = 75{,}000 \cdot a_{\overline{30}|i}$$
> > $$a_{\overline{30}|i} = \frac{1{,}000 \cdot \ddot{s}_{\overline{420}|j}}{75{,}000} = 18{,}40387$$
> >
> > **Langkah 4: Selesaikan untuk $i$**
> >
> > Menggunakan kalkulator: $N=30$, $PV=18{,}40387$, $PMT=-1$, $FV=0$ → $I/Y = i = 3{,}495\% \approx 3{,}50\%$
> >
> > **Hasil Akhir:** **(B)**. $i = 3{,}50\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $i=6\%$ per tahun langsung sebagai monthly rate — monthly rate adalah $(1{,}06)^{1/12}-1 \approx 0{,}4868\%$, bukan $6\%/12 = 0{,}5\%$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan annuity-immediate ($s$) alih-alih annuity-due ($\ddot{s}$) untuk deposit di awal bulan.
> > > - Salah membaca: fase kedua menggunakan rate $i$ berbeda, bukan 6%.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Beginning of each month" → annuity-due. "30-year annuity-immediate" di fase pensiun → annuity-immediate.
> >
> > > [!CAUTION] Red Flags
> > > - Dua fase dengan rate berbeda → pisahkan perhitungan per fase.
> > > - Deposit bulanan tapi rate tahunan → konversi ke monthly rate dulu.

---

## **No. 29**

Assume the following interest rate environment:

$$i = 8\% \quad \text{for } 0 \le t < 2$$
$$\delta_t = 0{,}015t \quad \text{for } 2 \le t < 5$$
$$d = 6\% \quad \text{for } 5 \le t < 8$$
$$i^{(4)} = 10\% \quad \text{for } t \ge 8$$

Find the present value of an asset which will pay you a single cash flow of 1,000 at time $t = 10$.

(A) 439  
(B) 459  
(C) 479  
(D) 499  
(E) 519

> [!summary]+ **Jawaban No. 29**
>
> **(D). $PV = 499{,}28$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[2.4 Continuous Annuities]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Faktor diskonto keseluruhan dari $t=0$ ke $t=T$ dengan rate berbeda per segmen:
> > $$PV = CF \times \prod_{\text{segmen}} \text{discount factor}_{\text{segmen}}$$
> >
> > Konversi:
> > - Dari $i$ efektif: faktor diskonto per tahun $= v = 1/(1+i)$
> > - Dari $\delta_t$ variable: $e^{-\int_2^5 \delta_t \, dt}$
> > - Dari $d$ diskonto: faktor diskonto per tahun $= 1-d$
> > - Dari $i^{(4)}$: $v = (1 + i^{(4)}/4)^{-4}$ per tahun
>
> **Diketahui:**
> - Segmen 1: $i=8\%$ untuk $0 \le t < 2$ (2 tahun)
> - Segmen 2: $\delta_t = 0{,}015t$ untuk $2 \le t < 5$ (3 tahun)
> - Segmen 3: $d=6\%$ untuk $5 \le t < 8$ (3 tahun)
> - Segmen 4: $i^{(4)}=10\%$ untuk $t \ge 8$ (2 tahun, dari $t=8$ ke $t=10$)
> - Target: $PV$ dari 1,000 pada $t=10$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Faktor diskonto segmen 1 ($t=0$ ke $t=2$, $i=8\%$)**
> >
> > $$v_1 = (1{,}08)^{-2} = 0{,}857339$$
> >
> > **Langkah 2: Faktor diskonto segmen 2 ($t=2$ ke $t=5$, $\delta_t = 0{,}015t$)**
> >
> > $$v_2 = e^{-\int_2^5 0{,}015t \, dt} = e^{-0{,}015 \cdot \frac{t^2}{2}\big|_2^5} = e^{-0{,}0075(25-4)} = e^{-0{,}0075 \times 21} = e^{-0{,}1575}$$
> > $$v_2 = e^{-0{,}1575} = 0{,}854415$$
> >
> > **Langkah 3: Faktor diskonto segmen 3 ($t=5$ ke $t=8$, $d=6\%$)**
> >
> > $$v_3 = (1 - 0{,}06)^3 = (0{,}94)^3 = 0{,}830584$$
> >
> > **Langkah 4: Faktor diskonto segmen 4 ($t=8$ ke $t=10$, $i^{(4)}=10\%$)**
> >
> > $$v_4 = \left(1 + \frac{0{,}10}{4}\right)^{-4 \times 2} = (1{,}025)^{-8} = 0{,}820747$$
> >
> > **Langkah 5: Hitung PV**
> >
> > $$PV = 1{,}000 \times v_1 \times v_2 \times v_3 \times v_4$$
> > $$= 1{,}000 \times 0{,}857339 \times 0{,}854415 \times 0{,}830584 \times 0{,}820747$$
> > $$= 1{,}000 \times 0{,}49928 = 499{,}28$$
> >
> > **Hasil Akhir:** **(D)**. $PV = 499{,}28$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Untuk segmen $d=6\%$: durasi = 3 tahun ($t=5$ ke $t=8$), sehingga faktor diskonto = $(1-d)^3 = (0{,}94)^3$, bukan $(1-d)^1$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $v = 1/(1+i)$ untuk segmen $d$ — yang benar adalah $v = 1-d$ per tahun untuk tingkat diskon.
> > > - Salah menghitung integral: $\int_2^5 0{,}015t \, dt = 0{,}015 \times (25/2 - 4/2) = 0{,}015 \times 10{,}5 = 0{,}1575$.
> > > - Untuk $i^{(4)}$: faktor per tahun $= (1 + i^{(4)}/4)^{-4}$, bukan $(1-i^{(4)})$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Setiap segmen menggunakan jenis rate berbeda ($i$, $\delta_t$, $d$, $i^{(m)}$) — konversi masing-masing ke faktor diskonto yang sesuai sebelum dikalikan.
> >
> > > [!CAUTION] Red Flags
> > > - Multiple rate environments → kalikan faktor diskonto antar segmen secara berurutan.
> > > - Rate diskonto $d$ → faktor per tahun $= (1-d)$, bukan $(1+d)^{-1}$.

---

## **No. 30**

You expect to receive a payment of $1,000 two months from now, and another payment of $2,000 four months from now. Calculate the effective annual interest rate, $i$, at which these future payments have a present value of $2,900.

(A) $i \le 12{,}5\%$  
(B) $12{,}5\% < i \le 12{,}7\%$  
(C) $12{,}7\% < i \le 12{,}9\%$  
(D) $12{,}9\% < i \le 13{,}1\%$  
(E) $13{,}1\% < i$

> [!summary]+ **Jawaban No. 30**
>
> **(D). $12{,}9\% < i \le 13{,}1\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Persamaan nilai dengan effective annual rate $i$ dan pembayaran pada bulan ke-2 dan ke-4:
> > $$PV = 1{,}000 \cdot (1+i)^{-2/12} + 2{,}000 \cdot (1+i)^{-4/12}$$
> >
> > Atau misalkan $j$ = effective two-month rate: $(1+j) = (1+i)^{2/12}$:
> > $$2{,}900 = 1{,}000 v_j + 2{,}000 v_j^2$$
>
> **Diketahui:**
> - Pembayaran 1,000 pada $t = 2$ bulan; pembayaran 2,000 pada $t = 4$ bulan
> - $PV = 2{,}900$
> - Target: tentukan interval $i$ (annual effective)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Substitusi $v_j = (1+i)^{-2/12}$ (diskonto per 2 bulan)**
> >
> > $$2{,}900 = 1{,}000 v_j + 2{,}000 v_j^2$$
> > $$2v_j^2 + v_j - 2{,}9 = 0$$
> >
> > **Langkah 2: Selesaikan persamaan kuadrat**
> >
> > $$v_j = \frac{-1 \pm \sqrt{1 + 4 \times 2 \times 2{,}9}}{2 \times 2} = \frac{-1 \pm \sqrt{1 + 23{,}2}}{4} = \frac{-1 \pm \sqrt{24{,}2}}{4}$$
> > $$v_j = \frac{-1 + 4{,}91935}{4} = \frac{3{,}91935}{4} = 0{,}979837$$
> >
> > (Ambil nilai positif)
> >
> > **Langkah 3: Konversi ke effective two-month rate**
> >
> > $$j = \frac{1}{v_j} - 1 = \frac{1}{0{,}979837} - 1 = 1{,}020578 - 1 = 0{,}020578 = 2{,}0578\%$$
> >
> > **Langkah 4: Konversi ke effective annual rate**
> >
> > $$i = (1+j)^6 - 1 = (1{,}020578)^6 - 1 = 1{,}129994 - 1 = 12{,}9994\%$$
> >
> > Karena $i \approx 13{,}0\%$: $12{,}9\% < i \le 13{,}1\%$
> >
> > **Hasil Akhir:** **(D)**. $12{,}9\% < i \le 13{,}1\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira "2 months" dan "4 months" berarti $t=2$ dan $t=4$ tahun — padahal ini bulan, jadi ekspon harus $-2/12$ dan $-4/12$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan nominal monthly rate $(i^{(12)}/12)$ langsung alih-alih effective two-month rate.
> > > - Lupa mengkonversi $j$ (rate per 2 bulan) ke annual: $(1+j)^6 - 1$, bukan $6j$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Effective annual interest rate" → semua konversi harus kembali ke annual effective, bukan nominal.
> >
> > > [!CAUTION] Red Flags
> > > - Pembayaran dalam bulan tapi diminta rate tahunan → substitusi $v_j = (1+i)^{-k/12}$ menyederhanakan persamaan menjadi kuadrat.
> > > - Selalu periksa: $(1+j)^{12/k} - 1 = i$ (konversi dari period rate ke annual effective).
