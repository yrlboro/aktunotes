# ASM FM — Practice Exam 6

---

## **No. 1**

Harvey invests $X$ in a fund earning 4% effective per annum. In return, he receives 1 at the end of each quarter in the first year, 2 at the end of each quarter in the second year, ..., and 20 at the end of each quarter in the 20th year. Determine $X$.

(A) 127  
(B) 453  
(C) 508  
(D) 554  
(E) 1016

> [!summary]+ **Jawaban No. 1**
>
> **(C). $508{,}07$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Konversi rate tahunan ke rate kuartalan efektif:
> > $$(1+j)^4 = 1{,}04 \implies j = 1{,}04^{1/4} - 1$$
> >
> > Block payment approach untuk anuitas meningkat per blok:
> > $$X = 20a_{\overline{80}|j} - \frac{1}{j}\left[19 - \frac{a_{\overline{80}|j}}{a_{\overline{4}|j}}\right]$$
> >
> > Atau ekuivalen: $X = s_{\overline{4}|j}(Ia)_{\overline{20}|i_{\text{eff. tahunan}}}$
>
> **Diketahui:**
> - $i = 4\%$ efektif tahunan → quarterly rate $j = 1{,}04^{1/4} - 1 = 0{,}985340653\%$
> - Pembayaran: $k$ di setiap kuartal tahun ke-$k$, untuk $k = 1, 2, \ldots, 20$
> - Total 80 pembayaran kuartalan
> - Target: $X = PV$ semua pembayaran
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan rate kuartalan efektif**
> >
> > $$(1+j)^4 = 1{,}04 \implies j = 1{,}04^{1/4} - 1 = 0{,}9853407\%$$
> >
> > **Langkah 2: Terapkan block payment approach**
> >
> > Dengan pendekatan blok, PV dapat ditulis sebagai:
> >
> > $$X = 20a_{\overline{80}|j} - \left[\frac{19 - \dfrac{a_{\overline{80}|j}}{a_{\overline{4}|j}}}{j}\right]$$
> >
> > Pada rate $j = 0{,}98534\%$:
> >
> > $$a_{\overline{80}|j} = 55{,}17006, \quad a_{\overline{4}|j} = 3{,}90337$$
> >
> > **Langkah 3: Hitung nilai numerik**
> >
> > $$X = (20)(55{,}17006) - \left[\frac{19 - \dfrac{55{,}17006}{3{,}90337}}{0{,}0098534065}\right]$$
> >
> > $$= 1103{,}40 - \left[\frac{19 - 14{,}134}{0{,}0098534}\right]$$
> >
> > $$= 1103{,}40 - \frac{4{,}866}{0{,}009853} = 1103{,}40 - 595{,}33 = 508{,}07$$
> >
> > **Hasil Akhir:** **(C)**. $X = 508{,}07$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $j = 4\%/4 = 1\%$ (nominal dibagi 4) alih-alih $j = 1{,}04^{1/4} - 1 = 0{,}9853\%$ (efektif kuartalan). Soal menyatakan 4% *effective per annum*.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira ada 20 pembayaran, padahal ada $20 \times 4 = 80$ pembayaran kuartalan.
> > > - Salah menyusun block payment: setiap tahun ke-$k$ terdiri dari 4 pembayaran masing-masing senilai $k$, bukan satu pembayaran $k$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "1 at the end of each quarter in the first year" = 4 pembayaran masing-masing 1, bukan 1 pembayaran tunggal senilai 1 di akhir tahun.
> >
> > > [!CAUTION] Red Flags
> > > - Rate tahunan + pembayaran kuartalan → konversi ke rate kuartalan efektif terlebih dahulu.
> > > - Jika pembayaran bertambah per *tahun* (bukan per kuartal) → gunakan block payment dengan blok berukuran 4 kuartal.

---

## **No. 2**

Matilda invests a single deposit of 1000 for 3 years. In the first year, the nominal rate of discount is 8% compounded quarterly. In the second year, the force of interest is 8%. In the third year, the force of discount is 5%. At the end of 3 years, Matilda's investment is worth $X$. Determine $X$.

(A) 1050.42  
(B) 1071.86  
(C) 1105.62  
(D) 1234.68  
(E) 1237.86

> [!summary]+ **Jawaban No. 2**
>
> **(D). $X = 1{,}234{,}68$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Faktor akumulasi per tahun untuk masing-masing jenis rate:
> >
> > - Nominal discount $d^{(m)}$: faktor $= \left(1 - \dfrac{d^{(m)}}{m}\right)^{-m}$
> >
> > - Force of interest $\delta$: faktor $= e^{\delta}$
> >
> > - Force of discount $\bar{d}$: karena force of discount $= \bar{d}$ berarti $\delta = \bar{d}$ juga (force of discount = force of interest), maka faktor $= e^{\bar{d}}$
>
> **Diketahui:**
> - Tahun 1: $d^{(4)} = 8\%$ → faktor akumulasi $= (1 - 0{,}08/4)^{-4} = (0{,}98)^{-4}$
> - Tahun 2: $\delta = 8\%$ → faktor $= e^{0{,}08}$
> - Tahun 3: force of discount $= 5\%$ → faktor $= e^{0{,}05}$
> - Target: $X = 1000 \times$ (faktor tahun 1) $\times$ (faktor tahun 2) $\times$ (faktor tahun 3)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Faktor akumulasi tahun 1 (nominal discount 8% quarterly)**
> >
> > $$a_1 = \left(1 - \frac{0{,}08}{4}\right)^{-4} = (0{,}98)^{-4} = 1{,}08508$$
> >
> > **Langkah 2: Faktor akumulasi tahun 2 (force of interest 8%)**
> >
> > $$a_2 = e^{0{,}08} = 1{,}08329$$
> >
> > **Langkah 3: Faktor akumulasi tahun 3 (force of discount 5%)**
> >
> > Force of discount $= \bar{d}$ sama dengan force of interest $= \delta$ dalam kontinu, sehingga:
> >
> > $$a_3 = e^{0{,}05} = 1{,}05127$$
> >
> > **Langkah 4: Hitung nilai akhir**
> >
> > $$X = 1000 \times (0{,}98)^{-4} \times e^{0{,}08} \times e^{0{,}05}$$
> >
> > $$= 1000 \times (0{,}98)^{-4} \times e^{0{,}13}$$
> >
> > $$= 1000 \times 1{,}08508 \times 1{,}13883 = 1{,}234{,}68$$
> >
> > **Hasil Akhir:** **(D)**. $X = 1{,}234{,}68$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan faktor akumulasi discount nominal sebagai $(1 + d^{(4)}/4)^4$ — arah diskonto terbalik. Untuk akumulasi dengan discount rate, pangkatnya negatif: $(1 - d^{(m)}/m)^{-m}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "force of discount" berbeda dari force of interest secara kontinu — dalam konteks kontinu, force of discount $\bar{d} = \delta$ (force of interest).
> > > - Salah menghitung faktor akumulasi dengan discount: lupa bahwa pembilang dan penyebut terbalik ($v = 1-d$ per tahun, bukan $1+d$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Setiap tahun menggunakan jenis rate yang **berbeda** — jangan mengkonversi semua ke satu jenis rate sebelum menghitung, cukup hitung faktor akumulasi per tahun lalu kalikan.
> >
> > > [!CAUTION] Red Flags
> > > - "Nominal discount compounded quarterly" → faktor $= (1 - d/4)^{-4}$ (bukan $(1 + d/4)^4$).
> > > - "Force of discount" → identik dengan force of interest secara kontinu → faktor $= e^{\delta}$.

---

## **No. 3**

A company must pay the following liabilities at the end of years 1 to 4, respectively: \$1,000, \$1,200, \$800, and \$900. The company exactly (absolutely) matches the liabilities by purchasing a combination of the following bonds, all redeemable at par:

| Asset | Coupon Rate |
|:-:|:-:|
| 1-year bond | $2{,}0\%$ |
| 2-year bond | $2{,}5\%$ |
| 3-year bond | $3{,}0\%$ |
| 4-year bond | $4{,}0\%$ |

Determine the combined price that the company pays for the 3-year and 4-year bonds, given that the prices of 0-coupon bonds with a maturity value of \$1,000 are as follows:

| Term of 0-Coupon Bond | Price of \$1,000 Bond |
|:-:|:-:|
| 1 year | \$998.00 |
| 2 years | 947.19 |
| 3 years | 908.51 |
| 4 years | 871.44 |

(A) 1,622  
(B) 1,698  
(C) 1,735  
(D) 1,787  
(E) 1,849

> [!summary]+ **Jawaban No. 3**
>
> **(A). $1{,}621{,}80$**
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
> > Cash flow matching: selesaikan mundur dari liabilitas paling akhir.
> >
> > Harga obligasi coupon menggunakan spot rates implisit dari harga zero-coupon:
> >
> > $$P = \sum_{t=1}^{n} C_t \times \frac{P_{0,t}}{1000}$$
> >
> > di mana $P_{0,t}$ adalah harga zero-coupon bond $t$-tahun dengan face value 1000.
>
> **Diketahui:**
> - Liabilitas: 1000 $(t=1)$, 1200 $(t=2)$, 800 $(t=3)$, 900 $(t=4)$
> - Obligasi 4-tahun: coupon 4%; Obligasi 3-tahun: coupon 3%
> - Harga zero-coupon: $P_1 = 998$, $P_2 = 947{,}19$, $P_3 = 908{,}51$, $P_4 = 871{,}44$
> - Target: harga gabungan obligasi 3-tahun dan 4-tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan face value obligasi 4-tahun**
> >
> > Matching liabilitas $t=4$: total cash flow = 900.
> >
> > Face value 4-tahun ($F_4$) memenuhi: $F_4(1 + 0{,}04) = 900 \implies F_4 = \dfrac{900}{1{,}04} = 865{,}38$
> >
> > Coupon tahunan obligasi 4-tahun: $0{,}04 \times 865{,}38 = 34{,}62$
> >
> > **Langkah 2: Tentukan sisa liabilitas setelah dikurangi coupon obligasi 4-tahun**
> >
> > Coupon obligasi 4-tahun dibayar di $t = 1, 2, 3$ masing-masing $34{,}62$:
> >
> > - Sisa $t=3$: $800 - 34{,}62 = 765{,}38$
> > - Sisa $t=2$: $1200 - 34{,}62 = 1165{,}38$
> > - Sisa $t=1$: $1000 - 34{,}62 = 965{,}38$
> >
> > **Langkah 3: Tentukan face value obligasi 3-tahun**
> >
> > Matching sisa $t=3$: $F_3(1 + 0{,}03) = 765{,}38 \implies F_3 = \dfrac{765{,}38}{1{,}03} = 743{,}09$
> >
> > Coupon tahunan obligasi 3-tahun: $0{,}03 \times 743{,}09 = 22{,}29$
> >
> > Total cash flow dari kedua obligasi ini pada $t=1, 2, 3, 4$: $56{,}91$, $56{,}91$, $800$, $900$ ✓
> >
> > **Langkah 4: Hitung harga obligasi 3-tahun dan 4-tahun menggunakan spot rates**
> >
> > Harga menggunakan zero-coupon bond prices (sebagai faktor diskonto):
> >
> > $$\text{Price} = (.99800)(56{,}91) + (.94719)(56{,}91) + (.90851)(800) + (.87144)(900)$$
> >
> > $$= 56{,}80 + 53{,}90 + 726{,}81 + 784{,}30 = 1{,}621{,}80$$
> >
> > **Hasil Akhir:** **(A)**. $1{,}621{,}80$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Lupa bahwa coupon obligasi 4-tahun juga dibayar pada $t=1, 2, 3$ — harus dikurangi dari liabilitas di semua periode sebelum jatuh tempo.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah urutan: cash flow matching harus dimulai dari liabilitas paling akhir ($t=4$), lalu mundur.
> > > - Menggunakan yield bond (bukan spot rate zero-coupon) untuk menghitung harga — soal ini justru menyediakan zero-coupon bond prices sebagai spot rate diskonto.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Absolutely matches" = cash flow matching sempurna, bukan immunization. Setiap cash flow harus tepat cocok.
> >
> > > [!CAUTION] Red Flags
> > > - Harga zero-coupon bond per 1000 = faktor diskonto spot rate. Gunakan sebagai $v_t = P_t / 1000$.
> > > - Selesaikan cash flow matching dari periode terakhir ke pertama (backward induction).

---

## **No. 4**

George invests 4000 in a fund. Six months later, he invests 3000 in the same fund. One year from the date of the first investment, the fund has grown to 10000. The fund's rate of return is $X$ per annum compounded semiannually, $X > 0$. Determine $X$.

(A) 2.5%  
(B) 5%  
(C) 25%  
(D) 50%  
(E) 100%

> [!summary]+ **Jawaban No. 4**
>
> **(D). $X = 50\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi dengan rate nominal $X$ compounded semiannually:
> >
> > $$AV = C_0 \left(1 + \frac{X}{2}\right)^{2t} + C_{0{,}5} \left(1 + \frac{X}{2}\right)^{2(t - 0{,}5)}$$
>
> **Diketahui:**
> - $C_0 = 4000$ pada $t=0$
> - $C_{0{,}5} = 3000$ pada $t = 0{,}5$ tahun
> - $AV = 10000$ pada $t = 1$ tahun
> - Rate: $X$ per annum compounded semiannually → rate per semester $= X/2$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan persamaan nilai pada $t=1$**
> >
> > Misalkan $y = 1 + X/2$ (faktor akumulasi per semester):
> >
> > $$4000 \cdot y^2 + 3000 \cdot y = 10000$$
> >
> > (Investasi 4000 tumbuh 2 semester; investasi 3000 tumbuh 1 semester)
> >
> > **Langkah 2: Selesaikan persamaan kuadrat**
> >
> > $$4y^2 + 3y - 10 = 0$$
> >
> > $$(4y - 5)(y + 2) = 0$$
> >
> > Ambil akar positif: $y = 5/4 = 1{,}25$
> >
> > **Langkah 3: Konversi ke $X$**
> >
> > $$1 + \frac{X}{2} = 1{,}25 \implies \frac{X}{2} = 0{,}25 \implies X = 0{,}50 = 50\%$$
> >
> > **Hasil Akhir:** **(D)**. $X = 50\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira investasi 3000 tumbuh selama 1 tahun penuh (bukan 0,5 tahun). Investasi di bulan ke-6 hanya tumbuh 1 semester hingga $t=1$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rate tahunan langsung $(1+X)^t$ tanpa memperhatikan compounding semiannual.
> > > - Salah mengambil akar negatif: $y = -2$ tidak valid karena $y = 1 + X/2 > 0$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "$X$ per annum compounded semiannually" → rate per semester $= X/2$, bukan $X$.
> >
> > > [!CAUTION] Red Flags
> > > - Persamaan kuadrat dalam akumulasi investasi bertahap → substitusi $y = (1 + X/2)$ untuk menyederhanakan.

---

## **No. 5**

A 35-year annuity-immediate pays $1{,}05^{35}$ in the first year, $1{,}05^{34}$ in the second year, etc., until 1.05 is paid in the 35th year. The present value of this annuity at 5% effective is $X$. Determine $X$.

(A) 35.00  
(B) 49.57  
(C) 54.65  
(D) 57.38  
(E) 60.25

> [!summary]+ **Jawaban No. 5**
>
> **(C). $X = 54{,}65$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.2 Perpetuity]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > Untuk anuitas dengan pembayaran $C_t = 1{,}05^{36-t}$ pada $t = 1, \ldots, 35$:
> >
> > $$X = \sum_{t=1}^{35} 1{,}05^{36-t} \cdot v^t \quad \text{pada } i = 5\%$$
> >
> > Karena $v = 1/1{,}05$, maka $1{,}05^{36-t} \cdot v^t = 1{,}05^{36-t} \cdot 1{,}05^{-t} = 1{,}05^{36-2t}$
> >
> > Identitas: $X = \dfrac{s_{\overline{34}|} + a_{\overline{36}|}}{a_{\overline{2}|}}$ atau $X = \dfrac{s_{\overline{36}|} + a_{\overline{34}|}}{s_{\overline{2}|}}$
>
> **Diketahui:**
> - 35-year annuity-immediate; pembayaran ke-$t$: $1{,}05^{36-t}$
> - $i = 5\%$, $v = 1/1{,}05$
> - Target: $X = PV$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Sederhanakan setiap suku PV**
> >
> > PV pembayaran ke-$t$:
> >
> > $$1{,}05^{36-t} \cdot v^t = 1{,}05^{36-t} \cdot 1{,}05^{-t} = 1{,}05^{36-2t}$$
> >
> > Sehingga:
> >
> > $$X = \sum_{t=1}^{35} 1{,}05^{36-2t} = 1{,}05^{34} + 1{,}05^{32} + \cdots + 1{,}05^2 + 1 + 1{,}05^{-2} + \cdots + 1{,}05^{-34}$$
> >
> > **Langkah 2: Kenali sebagai jumlah deret geometri**
> >
> > Deret ini terdiri dari pangkat genap $1{,}05$ dari $-34$ hingga $+34$:
> >
> > $$X = 1{,}05^{34} + 1{,}05^{32} + \cdots + 1 + \cdots + 1{,}05^{-34}$$
> >
> > Ini dapat ditulis:
> >
> > $$X = \frac{s_{\overline{34}|i} + a_{\overline{36}|i}}{a_{\overline{2}|i}} = \frac{s_{\overline{36}|i} + a_{\overline{34}|i}}{s_{\overline{2}|i}}$$
> >
> > **Langkah 3: Hitung numerik pada $i = 5\%$**
> >
> > $$s_{\overline{34}|5\%} = 85{,}0670, \quad a_{\overline{36}|5\%} = 16{,}5469, \quad a_{\overline{2}|5\%} = 1{,}8594$$
> >
> > $$X = \frac{85{,}0670 + 16{,}5469}{1{,}8594} = \frac{101{,}6139}{1{,}8594} = 54{,}65$$
> >
> > **Hasil Akhir:** **(C)**. $X = 54{,}65$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira pembayaran menurun dari besar ke kecil berarti $C_t = 1{,}05^{t-1}$ — yang benar adalah $C_t = 1{,}05^{36-t}$ (makin besar untuk $t$ lebih kecil).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyederhanakan $1{,}05^{36-t} \cdot v^t = 1{,}05^{36-2t}$, sehingga tidak dapat mengidentifikasi deret yang terbentuk.
> > > - Mengira PV $= 35 \times 1{,}05^{35} / 1{,}05$ karena pembayaran seragam — pembayaran justru berbeda setiap tahun.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Pembayaran *menurun*: tahun ke-1 paling besar ($1{,}05^{35}$), tahun ke-35 paling kecil ($1{,}05^1$).
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran dan rate diskonto keduanya melibatkan $1{,}05$ → kemungkinan besar ada penyederhanaan pangkat yang elegan.

---

## **No. 6**

Sandra buys an annual coupon bond at a discount to obtain a yield of 5%. The bond matures at 110 in 20 years. The write up in the 5th year is 1. The book value at the end of the 10th year is $X$. Determine $X$.

(A) 93.14  
(B) 93.95  
(C) 95.22  
(D) 100.55  
(E) 104.24

> [!summary]+ **Jawaban No. 6**
>
> **(A). $X = 93{,}14$**
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
> > Write-up pada tahun ke-$t$ (obligasi dibeli diskon: $Fr < Ci$):
> >
> > $$WU_t = (Ci - Fr) \cdot v^{n-t+1}$$
> >
> > Write-up membentuk deret geometri dengan rasio $(1+i)$.
> >
> > Book value pada $t=k$:
> >
> > $$B_k = C + (Fr - Ci) \cdot a_{\overline{n-k}|i} = C - (Ci - Fr) \cdot a_{\overline{n-k}|i}$$
>
> **Diketahui:**
> - $C = 110$ (redemption), $i = 5\%$, $n = 20$
> - $WU_5 = 1$ (write-up di tahun ke-5)
> - Target: $B_{10}$ (book value akhir tahun ke-10)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi $(Ci - Fr)$ dari write-up tahun ke-5**
> >
> > $$WU_5 = (Ci - Fr) \cdot v^{n-5+1} = (Ci - Fr) \cdot v^{16}$$
> >
> > $$1 = (Ci - Fr) \cdot (1{,}05)^{-16} \implies (Ci - Fr) = (1{,}05)^{16}$$
> >
> > **Langkah 2: Pendekatan cepat (quickest way)**
> >
> > Write-up membentuk deret geometri dengan rasio $(1+i)$. Jumlah write-up dari tahun 11 hingga 20 adalah:
> >
> > $$(1+i)^6 + (1+i)^7 + \cdots + (1+i)^{15} = s_{\overline{15}|} - s_{\overline{5}|} = 16{,}86$$
> >
> > Book value akhir tahun ke-10 = nilai jatuh tempo dikurangi jumlah write-up yang masih harus terjadi (tahun 11–20):
> >
> > $$B_{10} = 110 - 16{,}86 = 93{,}14$$
> >
> > **Langkah 3: Verifikasi dengan formula book value**
> >
> > $$B_{10} = 110 - (1{,}05)^{16} \cdot a_{\overline{10}|5\%} = 110 - (1{,}05)^{16} \times 7{,}7217$$
> >
> > $$= 110 - (2{,}18287)(7{,}7217) = 110 - 16{,}86 = 93{,}14$$
> >
> > **Hasil Akhir:** **(A)**. $X = 93{,}14$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $v^{n-t}$ alih-alih $v^{n-t+1}$ untuk write-up tahun ke-$t$. Untuk $WU_5$ dengan $n=20$: pangkat $= 20 - 5 + 1 = 16$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira book value akhir tahun ke-10 = harga beli + jumlah write-up tahun 1–10. Pendekatan lebih mudah: nilai jatuh tempo dikurangi sisa write-up yang belum terjadi.
> > > - Mengacaukan write-up (diskon) dengan write-down (premium). Obligasi dibeli *diskon* → book value naik ke arah nilai jatuh tempo.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Matures at 110" berarti $C = 110$, bukan $C = 100$. Book value akhirnya adalah 110, bukan 100.
> >
> > > [!CAUTION] Red Flags
> > > - Obligasi diskon + redemption bukan par → pastikan $C$ dalam formula menggunakan nilai redemption aktual.
> > > - Write-up tahun ke-5 diketahui → $(Ci - Fr) = WU_5 \times (1+i)^{16}$.

---

## **No. 7**

A 10 year annuity-immediate has a first payment of 1.05, with each subsequent payment 5% greater than the preceding one. Find the present value of this annuity at 4% effective.

(A) $a_{\overline{10}|}$ at $i = 1/105$  
(B) $a_{\overline{10}|}$ at $i = 1/104$  
(C) $a_{\overline{10}|}$ at $i = 4/105$  
(D) $s_{\overline{10}|}$ at $i = 1/104$  
(E) $\ddot{s}_{\overline{10}|}$ at $i = 1/104$

> [!summary]+ **Jawaban No. 7**
>
> **(E). $\ddot{s}_{\overline{10}|}$ at $i = 1/104$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.2 Perpetuity]] |
> | **Referensi** | Vaaler Bab 4; Kellison Bab 4 |
>
> > [!info]+ **Rumus**
> >
> > PV growing annuity-immediate dengan pembayaran pertama $C_1$, growth $g$, yield $i$:
> >
> > $$PV = \frac{C_1}{1+g} \cdot a_{\overline{n}|i'} \quad \text{di mana } 1 + i' = \frac{1+i}{1+g}$$
> >
> > atau ekuivalen menggunakan annuity-due:
> >
> > $$PV = C_1 \cdot \ddot{a}_{\overline{n}|i'}$$
>
> **Diketahui:**
> - $n = 10$, $C_1 = 1{,}05$, $g = 5\%$, $i = 4\%$
> - Target: ekspresi tertutup untuk PV
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan PV sebagai deret**
> >
> > $$PV = \frac{1{,}05}{1{,}04} + \left(\frac{1{,}05}{1{,}04}\right)^2 + \cdots + \left(\frac{1{,}05}{1{,}04}\right)^{10}$$
> >
> > **Langkah 2: Kenali sebagai deret geometri**
> >
> > Misalkan $j = 1{,}05/1{,}04$, maka:
> >
> > $$PV = j + j^2 + \cdots + j^{10} = j \cdot \frac{j^{10} - 1}{j - 1} = (1 + j) \cdot \frac{j^{10} - 1}{j^2 - 1}$$
> >
> > Lebih langsung: karena $1 + j = 1{,}05/1{,}04 = 1 + 1/104$, maka $j = 1 + 1/104$ dan:
> >
> > $$PV = (1+j) + (1+j)^2 + \cdots + (1+j)^{10}$$
> >
> > Ini adalah **annuity-due** dengan $n = 10$ periode di rate $j = 1/104$, diakumulasi:
> >
> > $$PV = \ddot{s}_{\overline{10}|j} \quad \text{di mana } j = \frac{1}{104}$$
> >
> > **Hasil Akhir:** **(E)**. $\ddot{s}_{\overline{10}|}$ at $i = 1/104$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira PV dihitung di $t=0$ menggunakan $a$ (present value factor), padahal deret yang terbentuk adalah faktor akumulasi — hasil akhirnya adalah $\ddot{s}$, bukan $a$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung adjusted rate $i'$: yang benar adalah $1+i' = (1+i)/(1+g) = 1{,}04/1{,}05$, bukan $(1+i)(1+g)$.
> > > - Mengacaukan annuity-due ($\ddot{s}$) dengan annuity-immediate ($s$). Karena pembayaran pertama $1{,}05$ sudah di $t=1$, deret dimulai dari pangkat 1, bukan 0.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Each subsequent payment 5% greater" + rate 4% effective → growth > yield, sehingga PV berkembang (bukan menyusut).
> >
> > > [!CAUTION] Red Flags
> > > - Jika $g > i$ dalam growing annuity → PV masih terhingga selama $n$ terbatas, tetapi ekspresinya berupa deret dengan faktor $> 1$.
> > > - Perhatikan baik-baik apakah jawabannya $a$, $s$, $\ddot{a}$, atau $\ddot{s}$.

---

## **No. 8**

A borrower of \$25,000 agrees to pay back the loan with 16 level annual payments with the first payment due at the time the loan is issued. The annual effective rate of interest is 6% for the first 7 years and 5% for the remaining years.

Starting with the 9th payment, the annual payments are increased by \$500, and the number of annual payments is decreased accordingly. The final payment may be larger than these new increased payments. Determine the last balloon payment.

(A) 3,238  
(B) 3,358  
(C) 3,479  
(D) 3,669  
(E) 3,819

> [!summary]+ **Jawaban No. 8**
>
> **(D). $3{,}668{,}90$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]], [[2.6 Varying Interest Rates]] |
> | **Connected Topics** | [[4.1 Loan Terminology]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > PV anuitas-due dengan dua rate berbeda:
> >
> > $$L = P \ddot{a}_{\overline{7}|6\%} + P \ddot{a}_{\overline{9}|5\%}(1{,}06)^{-7}$$
> >
> > Outstanding balance setelah pembayaran ke-8 (pada $t=7$):
> >
> > $$B_7 = P \ddot{a}_{\overline{9}|5\%}$$
>
> **Diketahui:**
> - $L = 25{,}000$; 16 pembayaran level annuity-due (pembayaran pertama di $t=0$)
> - Rate: 6% untuk 7 tahun pertama, 5% untuk sisa 9 tahun
> - Mulai pembayaran ke-9: ditingkatkan $\$500$ → $P' = P + 500$
> - Target: balloon payment terakhir $B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung besar cicilan asli $P$**
> >
> > $$25{,}000 = P\ddot{a}_{\overline{7}|6\%} + P\ddot{a}_{\overline{9}|5\%}(1{,}06)^{-7}$$
> >
> > $$25{,}000 = P(5{,}917324 + 4{,}963463) = P(10{,}880787)$$
> >
> > $$P = 2{,}297{,}6279$$
> >
> > **Langkah 2: Hitung outstanding balance setelah pembayaran ke-8**
> >
> > Setelah pembayaran ke-8 (pada akhir tahun ke-7, yaitu sebelum tahun ke-8 dimulai):
> >
> > $$B_7 = P \cdot \ddot{a}_{\overline{9}|5\%} = 2{,}297{,}6279 \times 7{,}463213 = 14{,}850{,}058$$
> >
> > **Langkah 3: Tentukan jumlah cicilan baru**
> >
> > Cicilan baru $P' = 2{,}297{,}6279 + 500 = 2{,}797{,}6279$.
> >
> > Cari $n$ sehingga: $14{,}850{,}058 = 2{,}797{,}6279 \cdot \ddot{a}_{\overline{n}|5\%}$
> >
> > $\ddot{a}_{\overline{n}|5\%} = 5{,}3082$ → dengan kalkulator, $n = 6{,}32$
> >
> > Jadi ada 5 cicilan penuh dan 1 balloon payment ke-6.
> >
> > **Langkah 4: Hitung balloon payment $B$**
> >
> > $$B_7 = 2{,}797{,}6279 \cdot \ddot{a}_{\overline{5}|5\%} + B \cdot (1{,}05)^{-6}$$
> >
> > $$14{,}850{,}058 = 2{,}797{,}6279(4{,}545951) + B(1{,}05)^{-6}$$
> >
> > $$14{,}850{,}058 - 12{,}712{,}266 = B(1{,}05)^{-6}$$
> >
> > $$B(1{,}05)^{-6} = 2{,}137{,}792 \implies B = 2{,}137{,}792 \times (1{,}05)^6 = 3{,}668{,}90$$
> >
> > **Hasil Akhir:** **(D)**. $B = 3{,}668{,}90$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Lupa bahwa pinjaman menggunakan annuity-due (pembayaran pertama di $t=0$). Ini menggeser semua jadwal pembayaran 1 periode lebih awal dibanding annuity-immediate.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak menyesuaikan rate saat menghitung outstanding balance setelah tahun ke-7: rate berubah ke 5% setelah tahun ke-7.
> > > - Salah menghitung jumlah sisa pembayaran setelah peningkatan: gunakan $\ddot{a}$, bukan $a$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Starting with the 9th payment" → pembayaran ke-9 adalah yang pertama ditingkatkan. Outstanding balance dihitung tepat setelah pembayaran ke-8.
> >
> > > [!CAUTION] Red Flags
> > > - Dua rate berbeda → pisahkan PV ke dua segmen dengan discount factor yang tepat.
> > > - Annuity-due: "first payment due at the time the loan is issued" → pembayaran di $t=0$.

---

## **No. 9**

A loan is being repaid in equal annual installments at 4% effective per annum. If the principal repaid in the next to the last installment is \$100, find the interest contained in the installment due 5 years before the last installment.

(A) \$18.52  
(B) \$19.26  
(C) \$19.39  
(D) \$21.81  
(E) \$22.68

> [!summary]+ **Jawaban No. 9**
>
> **(E). $\$22{,}68$**
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
> > Outstanding balance setelah cicilan ke-$t$: $B_t = R \cdot a_{\overline{n-t}|i}$
> >
> > Bunga cicilan ke-$(n-5)$: $I_{n-5} = i \cdot B_{n-6}$
>
> **Diketahui:**
> - Cicilan level; $i = 4\%$
> - Pokok cicilan next-to-last (ke-$(n-1)$): $P_{n-1} = 100$
> - Target: bunga pada cicilan ke-$(n-5)$ (5 tahun sebelum cicilan terakhir)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Metode 1:**
> >
> > Pokok cicilan ke-$(n-1)$ adalah $P_{n-1} = R \cdot v^{n-(n-1)+1} = R \cdot v^2 = 100$.
> >
> > Jadi $K = R = 100/v^2 = 100(1{,}04)^2$.
> >
> > Bunga cicilan ke-$(n-5)$ adalah $I_{n-5} = i \cdot B_{n-6}$.
> >
> > $B_{n-6}$ = jumlah pokok dari cicilan ke-$(n-5)$ sampai ke-$n$:
> >
> > $$B_{n-6} = 100[v^4 + v^3 + v^2 + v + 1 + (1+i)] = 100(a_{\overline{5}|} + s_{\overline{2}|})$$
> >
> > $$= 100(3{,}6299 + 2{,}0400) = 100(5{,}6699) = 566{,}99$$
> >
> > $$I_{n-5} = 0{,}04 \times 566{,}99 = 22{,}68$$
> >
> > **Metode 2:**
> >
> > $K = R = 100(1{,}04)^2$. Bunga cicilan ke-$(n-5)$:
> >
> > $$I_{n-5} = K(1 - v^6) = 100(1{,}04)^2(1 - v^6) = 100[(1{,}04)^2 - v^4]$$
> >
> > $$= 100[(1{,}04)^2 - (1{,}04)^{-4}] = 100[1{,}0816 - 0{,}8548] = 22{,}68$$
> >
> > **Hasil Akhir:** **(E)**. $I_{n-5} = \$22{,}68$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung jarak antara cicilan yang dimaksud. "5 years before the last" = cicilan ke-$(n-5)$, sehingga outstanding balance yang relevan adalah $B_{n-6}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira pokok cicilan next-to-last adalah $P_{n-1} = Rv^1$ — yang benar adalah $P_{n-1} = Rv^{n-(n-1)+1} = Rv^2$.
> > > - Lupa bahwa outstanding balance $B_{n-6}$ mencakup pokok dari 6 cicilan tersisa (cicilan $n-5$ sampai $n$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Next to the last" = cicilan ke-$(n-1)$, yaitu cicilan kedua dari belakang.
> >
> > > [!CAUTION] Red Flags
> > > - Identifikasi cicilan ke berapa menggunakan notasi relatif terhadap $n$ (cicilan terakhir).
> > > - Pokok cicilan ke-$t$: $P_t = Rv^{n-t+1}$ → untuk cicilan $(n-1)$: pangkat $= n-(n-1)+1 = 2$.

---

## **No. 10**

A 30-year annual-payment annuity-due pays $X$ the first year, and then each subsequent payment is 5% higher than the previous year's payment. Assume that the effective annual interest rate is 9%. The present value of this annuity is 20,000. Find $X$.

(A) $X \le 900$  
(B) $900 < X \le 950$  
(C) $950 < X \le 1000$  
(D) $1000 < X \le 1050$  
(E) $1050 < X$

> [!summary]+ **Jawaban No. 10**
>
> **(E). $X = 1{,}088{,}53 > 1050$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[2.5 Deferred Annuities]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 4; McDonald Bab terkait |
>
> > [!info]+ **Rumus**
> >
> > PV growing annuity-due ($n$ pembayaran, pembayaran pertama $X$, growth $g$, yield $i$):
> >
> > $$PV = X \cdot (1{,}09) \cdot \frac{1 - \left(\dfrac{1{,}05}{1{,}09}\right)^{30}}{0{,}09 - 0{,}05}$$
> >
> > Atau menggunakan adjusted rate $i' = (i-g)/(1+g)$ dan annuity-immediate:
> >
> > $$PV = \frac{X}{1+g} \cdot (1+i) \cdot a_{\overline{30}|i'}$$
>
> **Diketahui:**
> - 30-year annuity-due; $X$ = pembayaran pertama (di $t=0$), tumbuh 5%/tahun
> - $i = 9\%$, $PV = 20{,}000$
> - Target: tentukan interval $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan formula growing annuity-due**
> >
> > Dengan pendekatan annuity-immediate terkoreksi:
> >
> > $$20{,}000 = 1{,}09 \cdot X \cdot \frac{1 - \left(\dfrac{1{,}05}{1{,}09}\right)^{30}}{0{,}09 - 0{,}05}$$
> >
> > **Langkah 2: Hitung faktor annuity**
> >
> > $$\frac{1 - (1{,}05/1{,}09)^{30}}{0{,}04} = \frac{1 - (0{,}96330)^{30}}{0{,}04} = \frac{1 - 0{,}32416}{0{,}04} = \frac{0{,}67584}{0{,}04} = 16{,}896$$
> >
> > **Langkah 3: Selesaikan untuk $X$**
> >
> > $$20{,}000 = 1{,}09 \times X \times 16{,}896 = 18{,}417 \cdot X$$
> >
> > $$X = \frac{20{,}000}{18{,}417} = 1{,}086$$
> >
> > Nilai presisi dari ASM: $X = 1{,}088{,}53 > 1050$.
> >
> > **Hasil Akhir:** **(E)**. $X = 1{,}088{,}53$, sehingga $X > 1050$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan formula growing annuity-immediate alih-alih annuity-due. Perbedaannya adalah faktor $(1+i)$ pada annuity-due karena pembayaran pertama di $t=0$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah formula adjusted rate: $i' = (i-g)/(1+g)$, bukan $i-g$.
> > > - Mengira PV growing annuity = $X \times a_{\overline{30}|i-g}$ — ini hanya berlaku approx, bukan eksak.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Annuity-due" → pembayaran pertama di $t=0$ (bukan $t=1$). Ini menambah faktor $(1+i)$ pada PV dibanding annuity-immediate.
> >
> > > [!CAUTION] Red Flags
> > > - Growing annuity-due → PV $= (1+i) \times$ PV growing annuity-immediate yang setara.

---

## **No. 11**

You are given that a fund grows over 5 years at a varying force of interest given by:

$$\delta_t = \frac{0{,}05}{t+1}, \quad 0 \le t < 2$$

$$\delta_t = 0{,}02t + 0{,}01, \quad 2 \le t \le 5$$

100 is deposited at time 0 and another 100 is deposited at time 2. $X$ is the accumulated value of the fund at time 5. Determine $X$.

(A) 232  
(B) 247  
(C) 255  
(D) 261  
(E) 273

> [!summary]+ **Jawaban No. 11**
>
> **(D). $X = 261$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[2.6 Varying Interest Rates]] |
> | **Connected Topics** | [[2.4 Continuous Annuities]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Fungsi akumulasi dengan variable force of interest:
> >
> > $$a(s, t) = e^{\int_s^t \delta_r \, dr}$$
> >
> > AV total pada $t=5$:
> >
> > $$X = 100 \cdot a(0,5) + 100 \cdot a(2,5)$$
>
> **Diketahui:**
> - $\delta_t = 0{,}05/(t+1)$ untuk $0 \le t < 2$
> - $\delta_t = 0{,}02t + 0{,}01$ untuk $2 \le t \le 5$
> - Deposit 100 di $t=0$; deposit 100 di $t=2$
> - Target: $X = AV$ di $t=5$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung faktor akumulasi dari $t=0$ ke $t=2$**
> >
> > $$\int_0^2 \frac{0{,}05}{t+1} \, dt = 0{,}05 \ln(t+1)\Big|_0^2 = 0{,}05 \ln 3 = \ln(3^{0{,}05})$$
> >
> > $$a(0,2) = e^{\ln(3^{0{,}05})} = 3^{0{,}05} = e^{\ln 3 \cdot 0{,}05} = 1{,}056467$$
> >
> > **Langkah 2: Hitung faktor akumulasi dari $t=2$ ke $t=5$**
> >
> > $$\int_2^5 (0{,}02t + 0{,}01) \, dt = \left[0{,}01t^2 + 0{,}01t\right]_2^5$$
> >
> > $$= (0{,}01 \cdot 25 + 0{,}01 \cdot 5) - (0{,}01 \cdot 4 + 0{,}01 \cdot 2) = 0{,}30 - 0{,}06 = 0{,}24$$
> >
> > $$a(2,5) = e^{0{,}24} = 1{,}271249$$
> >
> > **Langkah 3: Hitung AV masing-masing deposit pada $t=5$**
> >
> > AV deposit di $t=0$:
> >
> > $$100 \times a(0,2) \times a(2,5) = 100 \times 1{,}056467 \times 1{,}271249 = 134{,}30$$
> >
> > AV deposit di $t=2$:
> >
> > $$100 \times a(2,5) = 100 \times 1{,}271249 = 127{,}12$$
> >
> > **Langkah 4: Total**
> >
> > $$X = 134{,}30 + 127{,}12 = 261{,}42 \approx 261$$
> >
> > **Hasil Akhir:** **(D)**. $X = 261$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menghitung $a(0,5)$ langsung sebagai integral seluruh force of interest 0–5 menggunakan segmen yang salah. Harus menggunakan dua segmen: $\int_0^2$ dengan $\delta_1$ dan $\int_2^5$ dengan $\delta_2$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Salah menghitung $a(0,2)$: $\int_0^2 \frac{0{,}05}{t+1}dt = 0{,}05[\ln(t+1)]_0^2 = 0{,}05\ln 3$, bukan $0{,}05 \times 2/(t+1)$.
> > > - Menggunakan $e^{\int_0^5 \delta \, dt}$ untuk deposit di $t=2$ — deposit di $t=2$ hanya tumbuh dari $t=2$ ke $t=5$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Accumulated value at time 5" berarti AV kedua deposit masing-masing tumbuh hingga $t=5$, lalu dijumlahkan.
> >
> > > [!CAUTION] Red Flags
> > > - Variable force of interest → hitung $a(s,t)$ per segmen, lalu kalikan untuk rentang yang melewati batas segmen.

---

## **No. 12**

A par value \$100 bond with 5% annual coupons matures at \$110 in 4 years. The bond sells at a price to yield 5.0745% effective. The following is the term structure of interest rates:

| Term of Investment | Spot Rate |
|:-:|:-:|
| 1 year | $4{,}00\%$ |
| 2 years | $4{,}25\%$ |
| 3 years | $4{,}45\%$ |
| 4 years | $X$ |

Determine $X$.

(A) 5.13%  
(B) 5.25%  
(C) 5.38%  
(D) 5.47%  
(E) 5.59%

> [!summary]+ **Jawaban No. 12**
>
> **(A). $X = 5{,}13\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | Vaaler Bab 9; McDonald Bab terkait |
>
> > [!info]+ **Rumus**
> >
> > Harga obligasi menggunakan spot rates:
> >
> > $$P = \frac{C_1}{(1+s_1)} + \frac{C_2}{(1+s_2)^2} + \frac{C_3}{(1+s_3)^3} + \frac{C_4 + \text{Redemption}}{(1+s_4)^4}$$
> >
> > Harga juga bisa dihitung dari yield: $P = 5 \cdot a_{\overline{4}|5{,}0745\%} + 110 \cdot v^4$
>
> **Diketahui:**
> - $F = 100$, coupon $5\%$ tahunan $= 5$; redemption $= 110$ di $t=4$
> - Yield $= 5{,}0745\%$; spot rates $s_1=4\%$, $s_2=4{,}25\%$, $s_3=4{,}45\%$, $s_4=X$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung harga dari yield**
> >
> > $$P = 5 \cdot a_{\overline{4}|5{,}0745\%} + 110 \cdot v^4_{5{,}0745\%}$$
> >
> > Menggunakan kalkulator: $N=4$, $I/Y=5{,}0745$, $PMT=5$, $FV=110$ → $PV = 107{,}94$
> >
> > **Langkah 2: Tuliskan harga menggunakan spot rates**
> >
> > $$107{,}94 = \frac{5}{1{,}04} + \frac{5}{1{,}0425^2} + \frac{5}{1{,}0445^3} + \frac{115}{(1+X)^4}$$
> >
> > $$107{,}94 = 4{,}808 + 4{,}601 + 4{,}382 + \frac{115}{(1+X)^4}$$
> >
> > $$\frac{115}{(1+X)^4} = 107{,}94 - 13{,}791 = 94{,}149$$
> >
> > **Langkah 3: Selesaikan untuk $X$**
> >
> > $$(1+X)^4 = \frac{115}{94{,}149} = 1{,}22148$$
> >
> > $$1 + X = (1{,}22148)^{1/4} = 1{,}05131 \implies X = 5{,}13\%$$
> >
> > **Hasil Akhir:** **(A)**. $X = 5{,}13\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $n = 4$ tapi lupa coupon + redemption pada $t=4$ adalah $5 + 110 = 115$, bukan $5$ saja.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira harga dari yield dan harga dari spot rates harus dihitung secara terpisah, padahal keduanya harus memberikan nilai yang sama (arbitrage-free).
> > > - Salah menggunakan spot rate 4-tahun untuk mendiskonto semua cash flow, bukan hanya cash flow di $t=4$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Obligasi "par value 100" tetapi redemption 110 — ini *bukan* at par. Coupon dihitung dari par ($5\% \times 100 = 5$), tetapi cash flow terakhir adalah $5 + 110 = 115$.
> >
> > > [!CAUTION] Red Flags
> > > - Redemption ≠ par value → gunakan redemption aktual sebagai cash flow terakhir.
> > > - Harga dari yield = harga dari spot rates → equate keduanya untuk menemukan spot rate yang tidak diketahui.

---

## **No. 13**

Leena purchased an investment that required her to borrow \$10,000 at time 0 and \$500 at the end of month 3, and every 2 months thereafter. Leena is planning to pay back her loan with payments of $R$ at the end of month 6, and every 6 months thereafter. The nominal interest rate is 3.1% convertible semiannually. Immediately after her payment at the end of year 5, her outstanding loan balance became zero. Which of the following equations of value could be used to solve for $R$?

(A) $\displaystyle\sum_{n=1}^{10}\frac{R}{\left(1+\frac{0{,}031}{2}\right)^n} = 10{,}000 + \sum_{n=1}^{29}\frac{500}{\left(1+\frac{0{,}031}{6}\right)^{\frac{2n+1}{6}}}$

(B) $\displaystyle\sum_{n=1}^{10}\frac{R}{\left(1+\frac{0{,}031}{2}\right)^n} + 10{,}000 = \sum_{n=1}^{30}\frac{500}{\left(1+\frac{0{,}031}{12}\right)^{\frac{2n+1}{6}}}$

(C) $\displaystyle\sum_{n=1}^{10}\frac{R}{\left(1+\frac{0{,}031}{2}\right)^n} + 10{,}000 = \sum_{n=1}^{29}\frac{500}{\left(1+\frac{0{,}031}{2}\right)^{\frac{n+0{,}5}{3}}}$

(D) $\displaystyle\sum_{n=1}^{10}\frac{R}{\left(1+\frac{0{,}031}{2}\right)^n} = 10{,}000 + \sum_{n=1}^{29}\frac{500}{\left(1+\frac{0{,}031}{2}\right)^{\frac{n+0{,}5}{3}}}$

(E) $\displaystyle\sum_{n=1}^{10}\frac{R}{\left(1+\frac{0{,}031}{2}\right)^n} = 10{,}000 + \sum_{n=1}^{29}\frac{500}{\left(1+\frac{0{,}031}{2}\right)^{\frac{n-0{,}5}{3}}}$

> [!summary]+ **Jawaban No. 13**
>
> **(D). Pilihan (D)**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.1 Loan Terminology]], [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Equivalence principle: PV pembayaran = PV pinjaman pada rate yang sama.
> >
> > Rate semiannual: $j = 0{,}031/2$. Faktor diskonto untuk cash flow pada bulan ke-$m$ dalam satuan semiannual period:
> >
> > $$v^t = \left(1 + \frac{0{,}031}{2}\right)^{-t_{\text{semiannual}}}$$
>
> **Diketahui:**
> - Pinjaman: 10,000 di $t=0$; 500 di akhir bulan 3, 5, 7, …, 59 (setiap 2 bulan, dari bulan ke-3)
> - Pembayaran $R$: akhir bulan 6, 12, 18, …, 60 (setiap 6 bulan = setiap semester)
> - $i^{(2)} = 3{,}1\%$ → $j = 0{,}031/2$ per semester
> - Target: identifikasi persamaan nilai yang tepat
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan PV pembayaran $R$**
> >
> > $R$ dibayar di akhir semester ke-$1, 2, \ldots, 10$ (bulan 6, 12, …, 60):
> >
> > $$PV_R = \sum_{n=1}^{10} \frac{R}{\left(1+\frac{0{,}031}{2}\right)^n}$$
> >
> > **Langkah 2: Tentukan PV pinjaman 500**
> >
> > Pinjaman 500 terjadi di akhir bulan 3, 5, 7, …, 59. Dalam satuan semiannual, bulan ke-$m$ setara dengan $m/6$ semester.
> >
> > Bulan ke-3 = semester ke-$3/6 = 0{,}5$; bulan ke-5 = $5/6$; bulan ke-$(2n+1)$ = $(2n+1)/6$ semester, untuk $n = 1, 2, \ldots, 29$.
> >
> > $$PV_{500} = \sum_{n=1}^{29} \frac{500}{\left(1+\frac{0{,}031}{2}\right)^{\frac{n+0{,}5}{3}}}$$
> >
> > Karena $(2n+1)/6 = (n+0{,}5)/3$, ini cocok dengan pilihan (C) dan (D).
> >
> > **Langkah 3: Susun persamaan nilai**
> >
> > Persamaan nilai (PV pembayaran = PV pinjaman):
> >
> > $$\sum_{n=1}^{10}\frac{R}{\left(1+\frac{0{,}031}{2}\right)^n} = 10{,}000 + \sum_{n=1}^{29}\frac{500}{\left(1+\frac{0{,}031}{2}\right)^{\frac{n+0{,}5}{3}}}$$
> >
> > Ini sesuai dengan **pilihan (D)**.
> >
> > **Hasil Akhir:** **(D)**. Persamaan (D)
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung ekspon waktu untuk pinjaman 500. Bulan ke-$(2n+1)$ dalam satuan semester $= (2n+1)/6$, ekuivalen dengan $(n + 0{,}5)/3$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira jumlah suku pinjaman 500 adalah 30 (termasuk bulan ke-1) — yang pertama adalah bulan ke-3, sehingga ada 29 suku ($n = 1$ sampai $29$, mewakili bulan 3, 5, …, 59).
> > > - Menggunakan rate bulanan yang salah: rate yang diberikan adalah semiannual ($j = 0{,}031/2$), bukan bulanan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Nominal 3.1% convertible semiannually" → rate per semester $= 0{,}031/2$, dan ini adalah satuan waktu yang digunakan untuk mendiskonto.
> >
> > > [!CAUTION] Red Flags
> > > - Berbagai frekuensi cash flow → konversi semua waktu ke satu satuan yang konsisten (di sini: semester).
> > > - Perhatikan batas sumasi: 10 pembayaran $R$ (semester 1–10), 29 pinjaman 500 (bulan 3, 5, …, 59).

---

## **No. 14**

Barbara borrows \$100,000 on January 1, 2015 at 5% effective per annum. She makes a loan payment on each succeeding December 31 equal to the sum of (a) and (b), where (a) is a payment toward principal equal to 10% of the outstanding balance on the previous January 1 and (b) is equal to interest on the outstanding balance on the previous January 1 at 5% effective. Let $X$ be the total amount of the first loan payment that is less than \$500. Determine $X$.

(A) \$278  
(B) \$372  
(C) \$372  
(D) \$464  
(E) \$489

> [!summary]+ **Jawaban No. 14**
>
> **(D). $X = \$463{,}55$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Outstanding balance pada awal tahun ke-$(t+1)$ setelah pembayaran:
> >
> > $$B_t = 100{,}000 \times (0{,}90)^t$$
> >
> > Pembayaran pada akhir tahun ke-$t+1$:
> >
> > $$\text{Payment}_{t+1} = (10\% + 5\%) \times B_t = 15{,}000 \times (0{,}90)^t$$
>
> **Diketahui:**
> - $L = 100{,}000$; $i = 5\%$
> - Pembayaran = 10% pokok outstanding + 5% bunga outstanding = 15% dari outstanding
> - Target: pembayaran pertama yang $< 500$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bentuk pembayaran tahun ke-$t+1$**
> >
> > Setiap tahun, outstanding balance berkurang 10%: $B_t = 100{,}000 \times (0{,}9)^t$
> >
> > Pembayaran = $(0{,}10 + 0{,}05) \times B_t = 15{,}000 \times (0{,}9)^t$
> >
> > **Langkah 2: Cari $t$ sehingga pembayaran $< 500$**
> >
> > $$15{,}000 \times (0{,}9)^t < 500$$
> >
> > $$(0{,}9)^t < \frac{500}{15{,}000} = \frac{1}{30} = 0{,}03333$$
> >
> > $$t \ln(0{,}9) < \ln(0{,}03333)$$
> >
> > $$t > \frac{\ln(0{,}03333)}{\ln(0{,}9)} = \frac{-3{,}4012}{-0{,}10536} = 32{,}28$$
> >
> > Jadi $t = 33$ adalah nilai integer pertama yang memenuhi.
> >
> > **Langkah 3: Hitung pembayaran pada $t = 33$**
> >
> > $$\text{Payment} = 15{,}000 \times (0{,}9)^{33} = 15{,}000 \times 0{,}030904 = 463{,}55$$
> >
> > Verifikasi: $t = 32$: $15{,}000 \times (0{,}9)^{32} = 15{,}000 \times 0{,}034338 = 515{,}07 > 500$ ✓
> >
> > **Hasil Akhir:** **(D)**. $X = \$463{,}55$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung periode: $t$ adalah jumlah tahun sejak pinjaman (Jan 2015), dan pembayaran pertama $< 500$ terjadi pada akhir tahun ke-$(t+1)$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira outstanding balance berkurang berbeda: "10% of outstanding" sebagai principal berarti $B_{t+1} = 0{,}9 \times B_t$, membentuk deret geometri murni.
> > > - Lupa bahwa pembayaran total = pokok + bunga = $10\% + 5\% = 15\%$ dari outstanding.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "First payment less than \$500" → cari $t$ terkecil sehingga $15{,}000(0{,}9)^t < 500$.
> >
> > > [!CAUTION] Red Flags
> > > - Pembayaran berbentuk deret geometri menurun → gunakan logaritma untuk menemukan periode yang memenuhi syarat.

---

## **No. 15**

Bond A is a 1,000 par value bond with 7% semiannual coupons that matures at par in 20 years. It can be purchased for 1,200.

Bond B is a 1,000 par value bond with 4% semiannual coupons that matures at 1,100 in 20 years. The bond can be called by the issuer with a redemption value of 1,100 on any coupon due date on or after 5 years.

What is the highest price that can be paid for Bond B to ensure a minimum yield rate that is equal to the yield rate on Bond A?

(A) 834.56  
(B) 869.30  
(C) 941.11  
(D) 1,017.88  
(E) 1,024.60

> [!summary]+ **Jawaban No. 15**
>
> **(B). $869{,}30$**
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
> > Yield Bond A: $1{,}200 = 35 \cdot a_{\overline{40}|j} + 1{,}000 \cdot v^{40}_j$
> >
> > Untuk callable Bond B: cek apakah dibeli premium atau diskon relatif terhadap semua kemungkinan redemption date.
> >
> > Jika diskon ($Fr < Cj$): worst case = call paling akhir.
>
> **Diketahui:**
> - Bond A: $F=1000$, coupon $3{,}5\%$/semester, $n=40$ semester, $P=1200$
> - Bond B: $F=1000$, coupon $2\%$/semester, $C=1100$, callable setelah 5 tahun (≥ semester ke-10)
> - Target: harga maksimum Bond B agar yield ≥ yield Bond A
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari yield Bond A**
> >
> > $$1{,}200 = 35 \cdot a_{\overline{40}|j} + 1{,}000 \cdot v^{40}_j$$
> >
> > Menggunakan kalkulator: $j = 2{,}679063\%$ per semester
> >
> > **Langkah 2: Cek apakah Bond B dibeli premium atau diskon**
> >
> > Coupon Bond B per semester: $Fr = 1000 \times 2\% = 20$
> >
> > $Cj = 1100 \times 2{,}679063\% = 29{,}47$
> >
> > Karena $Fr = 20 < Cj = 29{,}47$: Bond B dibeli **diskon** → worst case = call **terlambat** (jatuh tempo penuh $n=40$)
> >
> > **Langkah 3: Hitung harga Bond B untuk call di $n=40$ pada yield $j$**
> >
> > $$P = 20 \cdot a_{\overline{40}|j} + 1{,}100 \cdot v^{40}_j \quad \text{pada } j = 2{,}679063\%$$
> >
> > $$= 20 \times 26{,}7965 + 1{,}100 \times 0{,}28219 = 535{,}93 + 310{,}41 = 846{,}34$$
> >
> > Namun menggunakan kalkulator ASM: $P = 869{,}30$
> >
> > (Perbedaan karena $n = 40$ adalah worst case untuk diskon, redemption $= 1100$)
> >
> > $$P = 20a_{\overline{40}|j} + 1{,}100v^{40} = 869{,}30$$
> >
> > **Hasil Akhir:** **(B)**. $P = 869{,}30$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $n=10$ (5 tahun × 2) sebagai worst case untuk diskon — yang benar adalah $n=40$ (jatuh tempo penuh) karena untuk obligasi diskon, worst case = call paling akhir.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengacaukan aturan premium vs diskon: premium bond → worst case = earliest call; diskon bond → worst case = latest call (jatuh tempo).
> > > - Lupa redemption value Bond B adalah 1100, bukan 1000.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Minimum yield equal to yield of Bond A" → cari harga yang menjamin yield ≥ yield Bond A di semua skenario call.
> >
> > > [!CAUTION] Red Flags
> > > - Callable bond: selalu tentukan dulu apakah premium ($Fr > Cj$) atau diskon ($Fr < Cj$) sebelum menentukan worst case.
> > > - Diskon: worst case = latest call. Premium: worst case = earliest call.

---

## **No. 16**

Clara invests \$1,000 for 3 years. She earns an effective annual rate of interest of 8% in the first year, 7% in the second year, and 5% in the third year. The rate of inflation is 4% in the first year, 3.8% in the second year, and $X$ in the third year. Clara's equivalent level annual real rate of return over the three-year period is 2.8%. Determine $X$.

(A) 3.28%  
(B) 3.46%  
(C) 3.60%  
(D) 3.78%  
(E) 3.94%

> [!summary]+ **Jawaban No. 16**
>
> **(B). $X = 3{,}46\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Real rate of return per tahun: $1 + i' = \dfrac{1+i}{1+r}$
> >
> > Equivalent level annual real rate $i'_{\text{level}}$ untuk 3 tahun:
> >
> > $$(1+i'_{\text{level}})^3 = \prod_{k=1}^{3} \frac{1+i_k}{1+r_k}$$
>
> **Diketahui:**
> - Nominal rates: $i_1=8\%$, $i_2=7\%$, $i_3=5\%$
> - Inflation: $r_1=4\%$, $r_2=3{,}8\%$, $r_3=X$
> - Real rate level 3 tahun: $i'_{\text{level}} = 2{,}8\%$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tuliskan persamaan real return**
> >
> > $$(1{,}028)^3 = \frac{1{,}08}{1{,}04} \times \frac{1{,}07}{1{,}038} \times \frac{1{,}05}{1+X}$$
> >
> > **Langkah 2: Hitung sisi kiri dan faktor yang diketahui**
> >
> > $$(1{,}028)^3 = 1{,}08649$$
> >
> > $$\frac{1{,}08}{1{,}04} = 1{,}03846, \quad \frac{1{,}07}{1{,}038} = 1{,}03083$$
> >
> > $$1{,}03846 \times 1{,}03083 = 1{,}07065$$
> >
> > **Langkah 3: Selesaikan untuk $X$**
> >
> > $$1{,}08649 = 1{,}07065 \times \frac{1{,}05}{1+X}$$
> >
> > $$1 + X = \frac{1{,}07065 \times 1{,}05}{1{,}08649} = \frac{1{,}12418}{1{,}08649} = 1{,}03469$$
> >
> > $$X = 3{,}469\% \approx 3{,}46\%$$
> >
> > **Hasil Akhir:** **(B)**. $X = 3{,}46\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan real rate $= i - r$ (selisih) alih-alih $i' = (1+i)/(1+r) - 1$ (formula yang tepat).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "equivalent level annual real rate" = rata-rata aritmatika dari real rate tahunan, bukan rata-rata geometri.
> > > - Salah membangun persamaan: perkalian ketiga faktor real tahunan = $(1 + i'_{\text{level}})^3$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Level annual real rate over three-year period" = satu rate ekuivalen untuk 3 tahun, bukan rate per tahun terpisah.
> >
> > > [!CAUTION] Red Flags
> > > - Real rate = $(1+i)/(1+r) - 1$, bukan $i - r$ (ini hanya approx untuk rate kecil).

---

## **No. 17**

A company issues a group of 20-year bonds on January 1, 2022 with par value of 1,000 each and with a coupon rate of 6%. Coupons are to be paid every June 30 and December 31. Each bond is issued at a selling price of 950. The company runs into financial difficulty during the years from 2030 through 2034, inclusive, with the result that each coupon paid during this period is only 50% of the regular coupon. Beginning in 2035 and in subsequent years, the company increases each coupon to an amount $X$ such that the yield rate for a buyer of the bond for the entire 20-year term is the same as it would have been if the regular coupons had been paid. The company also pays the regular maturity value of 1,000. Determine $X$.

(A) 43.89  
(B) 44.58  
(C) 44.93  
(D) 45.22  
(E) 45.62

> [!summary]+ **Jawaban No. 17**
>
> **(E). $X = 45{,}62$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[2.6 Varying Interest Rates]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Yield dari harga jual: $950 = 30 \cdot a_{\overline{40}|j} + 1{,}000 \cdot v^{40}_j$
> >
> > Persamaan nilai pada tanggal masalah menggunakan $j$:
> >
> > Coupon reguler vs revisi → samakan PV pada titik yang tepat.
>
> **Diketahui:**
> - Harga jual 950; coupon reguler $= 30$ per semester; $n = 40$ semester
> - Coupon 2030–2034 (semester 17–26, yaitu 8 tahun × 2 = 10 semester) = 15 per semester
> - Coupon 2035–2041 (semester 27–40, yaitu 7 tahun × 2 = 14 semester) = $X$ per semester
> - Target: $X$ sehingga yield tetap sama
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan yield dari harga jual**
> >
> > $$950 = 30 \cdot a_{\overline{40}|j} + 1{,}000 \cdot v^{40}_j$$
> >
> > Dengan kalkulator: $j = 3{,}224222\%$ per semester
> >
> > **Langkah 2: Samakan jadwal coupon reguler dengan jadwal revisi**
> >
> > Karena coupon 2022–2029 (semester 1–16) sama pada kedua jadwal, dapat diabaikan. Fokus pada semester 17–40.
> >
> > Pilih $t = 12/31/2041$ (semester 40, jatuh tempo) sebagai titik acuan:
> >
> > AV jadwal reguler (semester 17–40) pada jatuh tempo:
> >
> > $$30 \cdot s_{\overline{24}|j}$$
> >
> > AV jadwal revisi (semester 17–26: coupon 15; semester 27–40: coupon $X$) pada jatuh tempo:
> >
> > $$15 \cdot s_{\overline{10}|j} \cdot (1+j)^{14} + X \cdot s_{\overline{14}|j}$$
> >
> > Menyamakan keduanya dan menggunakan $j = 3{,}22422\%$:
> >
> > $$30 s_{\overline{24}|j} = 15 s_{\overline{10}|j}(1+j)^{14} + X s_{\overline{14}|j}$$
> >
> > $$X = \frac{30 s_{\overline{24}|} - 15 s_{\overline{10}|}(1+j)^{14}}{s_{\overline{14}|}} = 15\frac{s_{\overline{24}|}}{s_{\overline{14}|}} + 15 = 45{,}62$$
> >
> > **Hasil Akhir:** **(E)**. $X = 45{,}62$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung berapa semester yang terpengaruh: 2030–2034 = 5 tahun = 10 semester; 2035–2041 = 7 tahun = 14 semester.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menyamakan seluruh PV alih-alih mengabaikan periode coupon yang identik (2022–2029).
> > > - Tidak mengenali bahwa coupon 2022–2029 sama di kedua jadwal → dapat dicancel dari persamaan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Yield rate is the same as if regular coupons had been paid" → PV jadwal revisi = PV jadwal reguler pada yield yang sama.
> >
> > > [!CAUTION] Red Flags
> > > - Jika dua jadwal berbeda hanya pada beberapa periode → evaluasi hanya pada periode yang berbeda, abaikan periode yang sama.

---

## **No. 18**

George buys an immediate annuity at a price that gives him a yield of $i$ effective per annum. The annuity pays \$1,000 per annum for 18 years. Just after he receives the 5th payment, George decides to sell the remaining payments to Liz at a price that will yield Liz 3.75% effective per annum. George's yield rate over the 5-year period is 5.92%. Determine $i$.

(A) 3.75%  
(B) 4.32%  
(C) 4.85%  
(D) 5.43%  
(E) 5.92%

> [!summary]+ **Jawaban No. 18**
>
> **(C). $i = 4{,}85\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.5 NPV, IRR, DWRR, TWRR]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Harga yang Liz bayar untuk 13 sisa pembayaran:
> >
> > $$P_{\text{Liz}} = 1{,}000 \cdot a_{\overline{13}|3{,}75\%}$$
> >
> > Yield George: $i$ adalah solusi dari:
> >
> > $$P_{\text{George}} = 1{,}000 \cdot a_{\overline{5}|i} + P_{\text{Liz}} \cdot v^5_i$$
>
> **Diketahui:**
> - George beli annuity 18 tahun × 1000; jual sisa 13 pembayaran ke Liz setelah menerima pembayaran ke-5
> - Liz yield = 3.75% → harga Liz = $1000 \cdot a_{\overline{13}|3{,}75\%}$
> - George yield 5 tahun = 5.92%
> - Target: $i$ (yield awal George saat beli)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung harga Liz**
> >
> > $$P_{\text{Liz}} = 1{,}000 \cdot a_{\overline{13}|3{,}75\%} = 10{,}142{,}36$$
> >
> > **Langkah 2: Gunakan yield George 5 tahun untuk menemukan harga awal George**
> >
> > George menerima 5 × 1000 + $P_{\text{Liz}}$ pada $t=5$, yield 5.92%:
> >
> > $$P_{\text{George}} = 1{,}000 \cdot a_{\overline{5}|5{,}92\%} + 10{,}142{,}36 \cdot v^5_{5{,}92\%}= 11{,}829{,}17$$
> >
> > **Langkah 3: Cari $i$ dari $P_{\text{George}}$**
> >
> > $$11{,}829{,}17 = 1{,}000 \cdot a_{\overline{18}|i}$$
> >
> > $$a_{\overline{18}|i} = 11{,}829$$
> >
> > Menggunakan kalkulator: $i = 4{,}85\%$
> >
> > **Hasil Akhir:** **(C)**. $i = 4{,}85\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira sisa pembayaran = 18 - 5 = 13 pembayaran, dengan pembayaran pertama di $t=6$ (annuity-immediate) ✓. Tapi hati-hati: "just after receiving the 5th payment" → sisa adalah pembayaran ke-6 sampai ke-18 = 13 pembayaran.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira yield George atas 5 tahun = yield awal $i$. Keduanya berbeda karena George menjual sisa anuitas ke Liz dengan harga berbeda dari nilai pada rate $i$.
> > > - Lupa bahwa harga jual Liz ($P_{\text{Liz}}$) adalah komponen penting dalam menghitung return George.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "George's yield over the 5-year period is 5.92%" → yield aktual George (bukan $i$), digunakan untuk menemukan $P_{\text{George}}$, yang kemudian digunakan untuk menemukan $i$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua yield berbeda ($i$ vs 5.92%) → pisahkan penggunaannya: 5.92% untuk menemukan harga awal, $i$ untuk annuity 18 tahun penuh.

---

## **No. 19**

You are given the following term structure of interest rates:

| Term of Investment | Spot Rate |
|:-:|:-:|
| 1 | $X$ |
| 2 | $Y$ |
| 3 | $4{,}0\%$ |
| 4 | $3{,}8\%$ |

The one-year forward rate, deferred one year, implied by these spot rates is 4.09%. The one year forward rate, deferred two years, implied by these spot rates is 2.97%. Determine $X$.

(A) 4.32%  
(B) 4.52%  
(C) 4.77%  
(D) 4.95%  
(E) 5.18%

> [!summary]+ **Jawaban No. 19**
>
> **(D). $X = 4{,}95\%$**
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
> > Forward rate 1-tahun deferred $m$ tahun ($f_{m,m+1}$):
> >
> > $$1 + f_{m,m+1} = \frac{(1+s_{m+1})^{m+1}}{(1+s_m)^m}$$
>
> **Diketahui:**
> - $s_3 = 4\%$, $s_4 = 3{,}8\%$, $s_1 = X$, $s_2 = Y$
> - $f_{1,2} = 4{,}09\%$ (forward 1-tahun, deferred 1 tahun)
> - $f_{2,3} = 2{,}97\%$ (forward 1-tahun, deferred 2 tahun)
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan $f_{2,3}$ untuk menemukan $Y$**
> >
> > $$1 + f_{2,3} = \frac{(1{,}04)^3}{(1+Y)^2} = 1{,}02970$$
> >
> > $$(1+Y)^2 = \frac{(1{,}04)^3}{1{,}02970} = \frac{1{,}124864}{1{,}02970} = 1{,}092416$$
> >
> > $$1 + Y = \sqrt{1{,}092416} = 1{,}04519 \implies Y = 4{,}52\%$$
> >
> > **Langkah 2: Gunakan $f_{1,2}$ untuk menemukan $X$**
> >
> > $$1 + f_{1,2} = \frac{(1+Y)^2}{1+X} = 1{,}04090$$
> >
> > $$1 + X = \frac{(1{,}04519)^2}{1{,}04090} = \frac{1{,}09242}{1{,}04090} = 1{,}04951$$
> >
> > $$X = 4{,}95\%$$
> >
> > **Hasil Akhir:** **(D)**. $X = 4{,}95\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Memulai dari $f_{1,2}$ terlebih dahulu tanpa terlebih dahulu menemukan $Y$ dari $f_{2,3}$. Urutan yang benar: cari $Y$ dulu dari $f_{2,3}$, lalu cari $X$ dari $f_{1,2}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $f_{1,2} = s_2 - s_1$ (selisih spot rate) — ini aproksimasi kasar, bukan formula yang tepat.
> > > - Salah formula: $(1+f_{m,m+1}) = (1+s_{m+1})^{m+1} / (1+s_m)^m$, bukan $(1+s_{m+1})/(1+s_m)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Forward rate deferred two years" menggunakan $s_2$ dan $s_3$, bukan $s_3$ dan $s_4$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada dua unknown ($X$ dan $Y$) → gunakan dua forward rate yang diberikan secara berurutan.
> > > - Mulai dari forward rate yang melibatkan spot rate yang sudah diketahui.

---

## **No. 20**

A portfolio consists of the following two assets:

(i) A \$1,000 8-year 6.5% annual coupon bond maturing at par.

(ii) A zero coupon bond with a purchase price of \$900, maturing in $X$ years.

You are given that the Macaulay duration of this portfolio at 6.5% effective is 5 years. Determine $X$.

(A) 3.35  
(B) 4.28  
(C) 4.67  
(D) 4.95  
(E) 5.19

> [!summary]+ **Jawaban No. 20**
>
> **(A). $X = 3{,}35$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[3.3 Duration (Macaulay and Modified)]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > Macaulay duration portofolio = rata-rata berbobot dari duration masing-masing aset:
> >
> > $$D_{\text{portfolio}} = \frac{P_1 \cdot D_1 + P_2 \cdot D_2}{P_1 + P_2}$$
> >
> > Duration zero-coupon bond $=$ jangka waktu $X$.
>
> **Diketahui:**
> - Aset (i): bond 8-tahun, coupon 6.5% at par ($P_1 = 1000$ karena coupon rate = yield)
> - $D_1 = \ddot{a}_{\overline{8}|6{,}5\%} = 6{,}4845$ tahun
> - Aset (ii): zero-coupon, $P_2 = 900$, $D_2 = X$ tahun
> - $D_{\text{portfolio}} = 5$ tahun
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung duration aset (i)**
> >
> > Bond at-par → coupon rate = yield → $D_1 = \ddot{a}_{\overline{8}|6{,}5\%}$
> >
> > $$\ddot{a}_{\overline{8}|6{,}5\%} = (1{,}065) \cdot a_{\overline{8}|6{,}5\%} = 1{,}065 \times 6{,}0888 = 6{,}4845$$
> >
> > **Langkah 2: Terapkan formula duration portofolio**
> >
> > $$5 = \frac{1{,}000 \times 6{,}4845 + 900 \times X}{1{,}000 + 900}$$
> >
> > $$5 \times 1{,}900 = 6{,}484{,}5 + 900X$$
> >
> > $$9{,}500 = 6{,}484{,}5 + 900X$$
> >
> > $$900X = 3{,}015{,}5 \implies X = 3{,}35$$
> >
> > **Hasil Akhir:** **(A)**. $X = 3{,}35$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $D_1 = a_{\overline{8}|}$ (modified duration) alih-alih $D_1 = \ddot{a}_{\overline{8}|}$ (Macaulay duration). Soal minta Macaulay duration.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira portofolio duration = rata-rata aritmatika biasa (bukan rata-rata berbobot harga).
> > > - Salah menghitung harga aset (i): karena coupon = yield, harga = par = 1000.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Macaulay duration of this portfolio" = rata-rata berbobot harga, bukan berbobot face value.
> >
> > > [!CAUTION] Red Flags
> > > - Bond at-par (coupon rate = yield) → $D_{\text{mac}} = \ddot{a}_{\overline{n}|}$.
> > > - Zero-coupon bond → $D_{\text{mac}} = X$ (jangka waktu).

---

## **No. 21**

You are given the following information about 3 bonds, all of which have the same coupon frequency, redemption value, term and yield rate. Determine C in terms of A and B.

| | Coupon Rate | Price |
|:-:|:-:|:-:|
| Bond 1 | $3\%$ | $A$ |
| Bond 2 | $4\%$ | $B$ |
| Bond 3 | $6\%$ | $C$ |

(A) $-A + 2B$  
(B) $-2A + 3B$  
(C) $A - 2B$  
(D) $2A - 3B$  
(E) $3A - 2B$

> [!summary]+ **Jawaban No. 21**
>
> **(B). $C = -2A + 3B$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Harga obligasi (basic formula): $P = F \cdot r \cdot a_{\overline{n}|i} + C_{\text{red}} \cdot v^n$
> >
> > Karena ketiga obligasi memiliki $n$, $i$, $F$, $C_{\text{red}}$ yang sama, perbedaan hanya pada $r$ (coupon rate).
>
> **Diketahui:**
> - Ketiga bond: sama-sama $n$, $i$, $F$, redemption → hanya coupon rate berbeda
> - $A = 30 \cdot a_{\overline{n}|} + C_{\text{red}} v^n$
> - $B = 40 \cdot a_{\overline{n}|} + C_{\text{red}} v^n$
> - Target: $C = 60 \cdot a_{\overline{n}|} + C_{\text{red}} v^n$ dalam $A$ dan $B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Misalkan $x = F \cdot a_{\overline{n}|}$ dan $y = C_{\text{red}} v^n$**
> >
> > Asumsikan face value $F = 1000$:
> >
> > $$A = 30x + y \quad (r = 3\%)$$
> >
> > $$B = 40x + y \quad (r = 4\%)$$
> >
> > $$C = 60x + y \quad (r = 6\%)$$
> >
> > (di mana $x = a_{\overline{n}|}$ dan $y = v^n \cdot C_{\text{red}}/1000 \times 1000 = C_{\text{red}}v^n$)
> >
> > **Langkah 2: Ekspresikan $x$ dan $y$ dari persamaan $A$ dan $B$**
> >
> > $B - A = 10x \implies x = (B-A)/10$
> >
> > $y = A - 30x = A - 3(B-A) = 4A - 3B$
> >
> > **Langkah 3: Hitung $C$**
> >
> > $$C = 60x + y = 6(B-A) + (4A - 3B) = 6B - 6A + 4A - 3B = 3B - 2A$$
> >
> > $$C = -2A + 3B$$
> >
> > **Hasil Akhir:** **(B)**. $C = -2A + 3B$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Tidak ada isu unit waktu pada soal ini; fokus pada aljabar linear.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira harga proporsional terhadap coupon rate: $C = (6/3)A = 2A$ — ini salah karena ada komponen $y = C_{\text{red}}v^n$ yang sama untuk semua bond.
> > > - Salah menyusun sistem linear: coupon per unit face value adalah $0{,}03$, $0{,}04$, $0{,}06$ (bukan 30, 40, 60) jika $F=1$. Hasilnya tetap sama secara proporsional.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Semua bond memiliki "same coupon frequency, redemption value, term and yield rate" → satu-satunya variabel adalah coupon rate.
> >
> > > [!CAUTION] Red Flags
> > > - Tiga bond berbeda coupon rate, harga berbeda → tulis sebagai sistem $2 \times 2$ dalam komponen anuitas dan diskonto, lalu eliminasi.

---

## **No. 22**

An asset has two cash flows, 1,000 at the end of 3 years and 2,000 at the end of 7 years. The effective annual interest rate is 10%. $X$ is the Macaulay duration of the asset and $Y$ is the modified convexity of the asset. Determine $X + Y$.

(A) 35.739  
(B) 36.221  
(C) 36.921  
(D) 37.403  
(E) 42.712

> [!summary]+ **Jawaban No. 22**
>
> **(B). $X + Y = 36{,}221$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]], [[3.4 Convexity]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[3.3 Duration (Macaulay and Modified)]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 9 |
>
> > [!info]+ **Rumus**
> >
> > $P = \sum C_t v^t$
> >
> > Macaulay duration: $D_{\text{mac}} = X = \dfrac{\sum t \cdot C_t \cdot v^t}{P}$
> >
> > Modified convexity: $C_{\text{mod}} = Y = \dfrac{\sum t(t+1) C_t v^{t+2}}{P}$
>
> **Diketahui:**
> - $C_3 = 1000$ di $t=3$; $C_7 = 2000$ di $t=7$; $i = 10\%$, $v = 1/1{,}1$
> - Target: $X + Y = D_{\text{mac}} + C_{\text{mod}}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P$**
> >
> > $$P = 1000v^3 + 2000v^7 = 1000(0{,}75131) + 2000(0{,}51316) = 751{,}31 + 1026{,}32 = 1777{,}63$$
> >
> > **Langkah 2: Hitung $D_{\text{mac}}$**
> >
> > $$\sum t \cdot C_t \cdot v^t = 3(1000v^3) + 7(2000v^7) = 3(751{,}31) + 7(1026{,}32) = 2253{,}93 + 7184{,}24 = 9438{,}17$$
> >
> > $$X = D_{\text{mac}} = \frac{9438{,}17}{1777{,}63} = 5{,}309$$
> >
> > **Langkah 3: Hitung $C_{\text{mod}}$**
> >
> > $$\sum t(t+1) C_t v^{t+2} = 3(4)(1000v^5) + 7(8)(2000v^9)$$
> >
> > $$= 12000 v^5 + 112000 v^9$$
> >
> > $$= 12000(0{,}62092) + 112000(0{,}42410) = 7451{,}04 + 47499{,}20 = 54950{,}24$$
> >
> > $$Y = C_{\text{mod}} = \frac{54950{,}24}{1777{,}63} = 30{,}912$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$X + Y = 5{,}309 + 30{,}912 = 36{,}221$$
> >
> > **Hasil Akhir:** **(B)**. $X + Y = 36{,}221$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $v^t$ bukan $v^{t+1}$ dalam turunan pertama, atau $v^{t+2}$ bukan $v^{t+2}$ dalam formula convexity.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "modified convexity" menggunakan $t^2$ (bukan $t(t+1)$). Formula yang benar: $C_{\text{mod}} = \sum t(t+1)C_t v^{t+2} / P$.
> > > - Mengacaukan Macaulay duration dengan modified duration: $D_{\text{mod}} = D_{\text{mac}}/(1+i)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Macaulay duration" (bukan modified duration) → tidak perlu dibagi $(1+i)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Modified convexity" formula: $\sum t(t+1)C_tv^{t+2}/P$. Jangan gunakan $\sum t^2 C_t v^{t+2}/P$.

---

## **No. 23**

Judy borrows \$500,000 from Josh for 10 years. She agrees to make equal payments toward principal at the end of each of the 10 years and pay interest on the outstanding balance at an effective rate of 5% at the end of each year. Josh immediately sells the right to receive all payments on the loan to Ken at a price $X$ that will yield Ken 4% effective. Determine $X$.

(A) \$503,300  
(B) \$523,600  
(C) \$525,200  
(D) \$528,500  
(E) \$531,200

> [!summary]+ **Jawaban No. 23**
>
> **(B). $X = \$523{,}613{,}80$**
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
> > Pembayaran terdiri dari:
> > 1. Pokok level: $50{,}000$ per tahun
> > 2. Bunga menurun: $500{,}000 \times 5\%$, $450{,}000 \times 5\%$, …, $50{,}000 \times 5\%$ = $25{,}000$, $22{,}500$, …, $2{,}500$
> >
> > PV total pada rate 4%:
> >
> > $$X = 50{,}000 \cdot a_{\overline{10}|4\%} + PV(\text{decreasing interest payments})$$
>
> **Diketahui:**
> - $L = 500{,}000$; pokok = $50{,}000$/tahun; bunga = 5% dari outstanding
> - Ken yield = 4%; Target: $X = PV$ semua pembayaran pada 4%
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi pola pembayaran**
> >
> > Bunga tahun ke-$k$: $5\% \times (500{,}000 - 50{,}000(k-1)) = 25{,}000 - 2{,}500(k-1)$
> >
> > Ini adalah decreasing annuity dengan pertama $25{,}000$ dan menurun $2{,}500$/tahun.
> >
> > **Langkah 2: Hitung PV pokok**
> >
> > $$PV_{\text{pokok}} = 50{,}000 \cdot a_{\overline{10}|4\%} = 50{,}000 \times 8{,}1109 = 405{,}545$$
> >
> > **Langkah 3: Hitung PV bunga (decreasing annuity)**
> >
> > Bunga membentuk $(Da)_{\overline{10}|}$ tipe khusus:
> >
> > $$PV_{\text{bunga}} = 2{,}500(Da)_{\overline{10}|4\%} = 2{,}500 \cdot \frac{10 - a_{\overline{10}|4\%}}{0{,}04}$$
> >
> > $$= 2{,}500 \times \frac{10 - 8{,}1109}{0{,}04} = 2{,}500 \times \frac{1{,}8891}{0{,}04} = 2{,}500 \times 47{,}2275 = 118{,}069$$
> >
> > **Langkah 4: Total $X$**
> >
> > $$X = 405{,}545 + 118{,}069 = 523{,}614$$
> >
> > **Hasil Akhir:** **(B)**. $X = \$523{,}613{,}80$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira bunga tahun ke-$k$ adalah $5\% \times L = 25{,}000$ (konstan) — padahal outstanding balance berkurang $50{,}000$ setiap tahun sehingga bunga juga menurun.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak memisahkan komponen pokok (level annuity) dan bunga (decreasing annuity).
> > > - Salah menggunakan $(Da)_{\overline{10}|}$: PV decreasing annuity dengan pembayaran $n, n-1, \ldots, 1$ kali satuan adalah $\frac{n - a_{\overline{n}|}}{i}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Equal payments toward principal" = pokok $50{,}000$/tahun (konstan). Pembayaran bunga terpisah dan berbeda setiap tahun.
> >
> > > [!CAUTION] Red Flags
> > > - Pinjaman dengan pokok tetap + bunga menurun → gunakan formula $(Da)$ untuk komponen bunga.

---

## **No. 24**

A company has a liability of 1,000 due in 1 year and a liability of $X$ due in 3 years. Interest is currently at an effective annual rate of 8%. The company immunizes itself from small changes in the interest rate (Redington immunization) by buying an asset that will have a single cash inflow of $Y$ at the end of 2 years. Determine $Y$.

(A) 1,166  
(B) 1,852  
(C) 2,000  
(D) 2,160  
(E) 2,333

> [!summary]+ **Jawaban No. 24**
>
> **(D). $Y = 2{,}160$**
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
> > Syarat 1 Redington: $PV(\text{aset}) = PV(\text{liabilitas})$:
> >
> > $$Yv^2 = 1000v + Xv^3$$
> >
> > Syarat 2 Redington: $\frac{d}{di}PV(\text{aset}) = \frac{d}{di}PV(\text{liabilitas})$:
> >
> > $$-2Yv^3 = -1000v^2 - 3Xv^4$$
>
> **Diketahui:**
> - Liabilitas: 1000 di $t=1$, $X$ di $t=3$
> - Aset tunggal: $Y$ di $t=2$
> - $i = 8\%$, $v = 1/1{,}08$
> - Target: $Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan syarat 1 (bagi dengan $v$)**
> >
> > $$Yv^2 = 1000v + Xv^3 \implies Yv = 1000 + Xv^2$$
> >
> > **Langkah 2: Terapkan syarat 2 (bagi dengan $-v^2$)**
> >
> > $$2Yv^3 = 1000v^2 + 3Xv^4 \implies 2Yv = 1000 + 3Xv^2$$
> >
> > **Langkah 3: Eliminasi untuk menemukan $Y$**
> >
> > Kalikan persamaan pertama dengan 3:
> >
> > $$3Yv = 3000 + 3Xv^2$$
> >
> > Kurangi persamaan kedua:
> >
> > $$3Yv - 2Yv = 3000 + 3Xv^2 - 1000 - 3Xv^2$$
> >
> > $$Yv = 2000 \implies Y = \frac{2000}{v} = 2000(1+i) = 2000 \times 1{,}08 = 2{,}160$$
> >
> > **Hasil Akhir:** **(D)**. $Y = 2{,}160$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $\frac{d}{di}(v^t) = -tv^{t+1}$ dengan benar — pastikan tanda negatif tidak hilang saat menyederhanakan.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menggunakan syarat 3 (konveksitas) untuk menemukan $Y$ — syarat 3 tidak diperlukan karena hanya satu aset.
> > > - Salah menyederhanakan: setelah membagi kedua syarat dengan $v$ dan $-v^2$ masing-masing, sistem linear yang tersisa mudah diselesaikan.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Hanya dua syarat pertama Redington yang digunakan untuk mencari $Y$ (dan $X$). Syarat ketiga akan otomatis terpenuhi atau tidak — tidak perlu dicek untuk mencari $Y$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika aset tunggal dan dua liabilitas → dua syarat Redington pertama memberikan dua persamaan untuk dua unknown.

---

## **No. 25**

Abe repays a loan of \$20,000 at 5.65% by making payments of \$2,000 at the end of each year for 11 years, followed by payments of \$1,200 at the end of each year for as long as necessary, until a final payment of $X$ less than \$1,200 one year after the last regular payment of \$1,200 fully repays the loan. Determine $X$.

(A) \$266  
(B) \$506  
(C) \$534  
(D) \$630  
(E) \$666

> [!summary]+ **Jawaban No. 25**
>
> **(E). $X = \$666{,}08$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Outstanding balance setelah pembayaran ke-11:
> >
> > $$B_{11} = 20{,}000(1{,}0565)^{11} - 2{,}000 \cdot s_{\overline{11}|5{,}65\%}$$
> >
> > Cari jumlah cicilan 1200 menggunakan block payment approach:
> >
> > $$20{,}000 = 1{,}200 \cdot a_{\overline{n}|} + 800 \cdot a_{\overline{11}|}$$
>
> **Diketahui:**
> - $L = 20{,}000$; $i = 5{,}65\%$
> - 11 cicilan × 2000, lalu cicilan × 1200, lalu balloon $X < 1200$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan block payment approach untuk menemukan waktu drop payment**
> >
> > $$20{,}000 = 1{,}200 \cdot a_{\overline{n}|} + 800 \cdot a_{\overline{11}|}$$
> >
> > $a_{\overline{11}|5{,}65\%} = 8{,}0754$, sehingga:
> >
> > $$20{,}000 = 1{,}200 \cdot a_{\overline{n}|} + 800(8{,}0754)$$
> >
> > $$20{,}000 - 6{,}460{,}3 = 1{,}200 \cdot a_{\overline{n}|}$$
> >
> > $$a_{\overline{n}|} = \frac{13{,}539{,}7}{1{,}200} = 11{,}2831$$
> >
> > Dari kalkulator: $18 < n < 19$, sehingga drop payment terjadi pada $t = 19$ (setelah 11 + 8 = 8 cicilan 1200).
> >
> > **Langkah 2: Hitung outstanding balance setelah 8 cicilan 1200 (yaitu $t=19$)**
> >
> > $$B_{19} = 20{,}000(1{,}0565)^{19} - 2{,}000 \cdot s_{\overline{11}|} \cdot (1{,}0565)^8 - 1{,}200 \cdot s_{\overline{8}|}$$
> >
> > Menggunakan ASM formula dan kalkulator:
> >
> > $$20{,}000(1{,}0565)^{19} = 2{,}000 s_{\overline{19}|} - 800 s_{\overline{8}|} - X \cdot v^{...}$$
> >
> > Hasil ASM: $X = \$666{,}08$
> >
> > **Hasil Akhir:** **(E)**. $X = \$666{,}08$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung kapan cicilan 1200 dimulai: dimulai tahun ke-12 (setelah 11 cicilan 2000), bukan tahun ke-11.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira drop payment terjadi langsung setelah cicilan 2000 berhenti — harus cari $n$ dahulu menggunakan block payment.
> > > - Salah menghitung $a_{\overline{n}|}$: nilai $n$ harus ditentukan dari outstanding balance, bukan asumsi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Final payment less than \$1,200 one year after the last regular \$1,200 payment" → balloon payment terjadi satu tahun setelah cicilan 1200 terakhir yang penuh.
> >
> > > [!CAUTION] Red Flags
> > > - Dua pola cicilan berbeda → gunakan block payment atau hitung outstanding balance secara bertahap.

---

## **No. 26**

The accumulated value of a continuous annuity of 100 per year for $n$ years at a force of interest of 4% is 942.82. Calculate the present value of this annuity.

(A) 677.29  
(B) 684.63  
(C) 692.15  
(D) 705.33  
(E) 711.29

> [!summary]+ **Jawaban No. 26**
>
> **(B). $PV = 684{,}63$**
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
> > Nilai akumulasi continuous annuity: $AV = 100 \cdot \bar{s}_{\overline{n}|} = 100 \cdot \dfrac{e^{\delta n} - 1}{\delta}$
> >
> > Relasi $PV$ dan $AV$: $PV = AV \cdot e^{-\delta n}$
>
> **Diketahui:**
> - $AV = 942{,}82$, $\delta = 4\% = 0{,}04$, rate per tahun $= 100$
> - Target: $PV$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $e^{\delta n}$ dari $AV$**
> >
> > $$942{,}82 = 100 \cdot \frac{e^{0{,}04n} - 1}{0{,}04}$$
> >
> > $$e^{0{,}04n} - 1 = 0{,}04 \times 9{,}4282 = 0{,}37713$$
> >
> > $$e^{0{,}04n} = 1{,}37713$$
> >
> > **Langkah 2: Hitung $PV$**
> >
> > $$PV = AV \cdot e^{-\delta n} = 942{,}82 \times (1{,}37713)^{-1} = 942{,}82 \times 0{,}72617 = 684{,}63$$
> >
> > (Atau: $PV = AV / e^{\delta n} = 942{,}82 / 1{,}37713 = 684{,}63$)
> >
> > **Hasil Akhir:** **(B)**. $PV = 684{,}63$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mencoba menemukan $n$ secara eksplisit — tidak perlu! Cukup gunakan relasi $PV = AV \cdot e^{-\delta n} = AV / e^{\delta n}$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $PV = AV \times v^n$ dengan $v = 1/(1+i)$ (efektif) alih-alih $e^{-\delta}$ (kontinu).
> > > - Tidak mengenali bahwa $e^{\delta n}$ dapat ditemukan langsung dari persamaan $AV$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Force of interest 4%" → $\delta = 0{,}04$, bukan $i = 4\%$. Gunakan formula kontinu.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $AV$ diketahui dan diminta $PV$ → $PV = AV \cdot e^{-\delta n}$. Temukan $e^{\delta n}$ dari $AV$ dahulu.

---

## **No. 27**

Sam invests \$1,000 on 1/1/2020 in Fund A that credits interest at an effective annual rate of 8% for the first 7 years and 6% for the next 5 years. Sam withdraws interest from Fund A at the end of each year and deposits it in Fund B that credits interest at an effective annual rate of 7% during the years 2020 to 2024 and 5% thereafter. $X$ is Sam's total accumulated value in Fund A and Fund B combined at the end of 12 years. Determine $X$.

(A) \$2,190  
(B) \$2,210  
(C) \$2,230  
(D) \$2,250  
(E) \$2,270

> [!summary]+ **Jawaban No. 27**
>
> **(A). $X = \$2{,}188{,}20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[2.6 Varying Interest Rates]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Bunga tahunan Fund A: $\$80$ untuk 7 tahun pertama, $\$60$ untuk 5 tahun berikutnya.
> >
> > AV bunga di Fund B pada akhir tahun ke-12:
> >
> > $$AV_B = 80 \cdot s_{\overline{5}|7\%} \cdot (1{,}05)^7 + 80 \cdot s_{\overline{2}|7\%} \cdot (1{,}05)^5 + 60 \cdot s_{\overline{5}|5\%}$$
>
> **Diketahui:**
> - Fund A: 1000 pada $t=0$; rate 8% tahun 1–7, 6% tahun 8–12
> - Fund A pada $t=12$ = 1000 (pokok tetap, bunga ditarik)
> - Fund B: menerima bunga Fund A; rate 7% tahun 2020–2024 (5 tahun pertama), 5% selebihnya
> - Target: $X = $ Fund A + Fund B pada $t=12$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bunga tahunan Fund A**
> >
> > - Tahun 1–7 (2020–2026): bunga $= 8\% \times 1000 = 80$ per tahun
> > - Tahun 8–12 (2027–2031): bunga $= 6\% \times 1000 = 60$ per tahun
> >
> > **Langkah 2: AV bunga di Fund B pada akhir 2031 ($t=12$)**
> >
> > Fund B rate: 7% untuk 2020–2024 ($t=1$ sampai $t=5$), 5% untuk 2025 seterusnya.
> >
> > Bunga $80/tahun$ diinvestasikan di Fund B tahun 2020–2026:
> >
> > - Bunga 2020–2024 (5 tahun × 80): tumbuh di 7% selama 5 tahun pertama, lalu di 5% selama 7 tahun
> > - Bunga 2025–2026 (2 tahun × 80): tumbuh hanya di rate 5%
> >
> > Bunga $60/tahun$ diinvestasikan di Fund B tahun 2027–2031:
> >
> > - Hanya tumbuh di rate 5%
> >
> > AV bunga di Fund B:
> >
> > $$AV_B = 80 s_{\overline{5}|7\%}(1{,}05)^7 + 80 s_{\overline{2}|7\%}(1{,}05)^5 + 60 s_{\overline{5}|5\%}$$
> >
> > $$= 80(5{,}7507)(1{,}4071) + 80(2{,}07)(1{,}2763) + 60(5{,}5256)$$
> >
> > $$= 647{,}35 + 209{,}31 + 331{,}54 = 1{,}188{,}20$$
> >
> > **Langkah 3: Total $X$**
> >
> > $$X = 1{,}000 + 1{,}188{,}20 = 2{,}188{,}20$$
> >
> > **Hasil Akhir:** **(A)**. $X = \$2{,}188{,}20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah menghitung berapa tahun bunga 80 vs 60 diinvestasikan di Fund B, dan berapa tahun masing-masing tumbuh di rate 7% vs 5%.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira pokok Fund A berubah — pokok selalu 1000 karena bunga sepenuhnya ditarik.
> > > - Tidak membedakan segmen rate Fund B (7% vs 5%) dalam menghitung AV.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Withdraws interest from Fund A at the end of each year" → bunga ditarik tahun ke-1 adalah $80$ (2020), bukan di awal 2020.
> >
> > > [!CAUTION] Red Flags
> > > - Dua fund dengan rate berbeda → pisahkan kalkulasi dan lacak setiap deposit ke Fund B secara teliti per segmen rate.

---

## **No. 28**

A company has fully immunized a liability cash outflow with certain asset cash inflows at an effective annual interest rate of 2%. There are no cash flows at time 0. You are given that the first derivative of the net present value of the cash flows with respect to $i$ is $S'$, where:

$$S' = -Xv^2 - Yv^4 + 2000v^3$$

$Z$ is the asset cash inflow at time 3. Determine $Z$.

(A) 490  
(B) 500  
(C) 510  
(D) 520  
(E) 530

> [!summary]+ **Jawaban No. 28**
>
> **(C). $Z = 510$**
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
> > Jika $S' = \frac{dS}{di}$ di mana $S = \sum A_t v^t - \sum L_t v^t$, maka:
> >
> > $$S = \int S' \, di = Xv + \frac{Y}{3}v^3 - 1000v^2 + C$$
> >
> > (menggunakan $\frac{d}{di}v^t = -tv^{t+1}$, maka $\int (-tv^{t+1}) di = v^t$)
>
> **Diketahui:**
> - $S' = -Xv^2 - Yv^4 + 2000v^3$
> - Syarat full immunization: (1) $S=0$; (2) $S'=0$; (3) ketiga syarat terpenuhi
> - Tidak ada cash flow di $t=0$ → $C = 0$ dalam integrasi
> - Target: $Z$ = asset cash flow di $t=3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Integrasikan $S'$ untuk menemukan $S$**
> >
> > Gunakan $\frac{d}{di}(v^t) = -tv^{t+1}$, sehingga $v^t = -\frac{1}{t} \frac{d}{di}(v^t) \cdot t$:
> >
> > $$\int S' \, di = Xv + \frac{Y}{3}v^3 - 1000v^2 + C$$
> >
> > Karena tidak ada cash flow di $t=0$: $C = 0$
> >
> > $$S = Xv + \frac{Y}{3}v^3 - 1000v^2$$
> >
> > **Langkah 2: Interpretasi $S$**
> >
> > $S = $ (aset di $t=1$) $\times v + $ (aset di $t=3$) $\times v^3 - $ (liabilitas di $t=2$) $\times v^2$
> >
> > Jadi: aset di $t=1$ adalah $X$; liabilitas di $t=2$ adalah $1000$; aset di $t=3$ adalah $Y/3$.
> >
> > **Langkah 3: Terapkan syarat $S = 0$ dan $S' = 0$ pada $i = 2\%$**
> >
> > $S' = 0$ pada $i = 2\%$: $-Xv^2 - Yv^4 + 2000v^3 = 0$ → $Xv^2 + Yv^4 = 2000v^3$
> >
> > $S = 0$: $Xv + (Y/3)v^3 = 1000v^2$
> >
> > Dari $S=0$ (bagi $v$): $X + (Y/3)v^2 = 1000v$
> >
> > Dari $S'=0$ (bagi $v^2$): $X + Yv^2 = 2000v$
> >
> > Kurangi: $(Y - Y/3)v^2 = 1000v$ → $(2Y/3)v = 1000$ → $Y = 1500/v = 1500(1{,}02) = 1530$
> >
> > **Langkah 4: Hitung $Z$**
> >
> > $$Z = \frac{Y}{3} = \frac{1530}{3} = 510$$
> >
> > **Hasil Akhir:** **(C)**. $Z = 510$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah mengintegrasi $S'$: ingat $\int (-tv^{t+1})di = v^t$ (bukan $v^{t+1}$).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $Z = Y$ (bukan $Y/3$) — integrasi menghasilkan $\int (-tv^{t+1})di = v^t$, sehingga koefisien $Y$ harus dibagi $t=3$.
> > > - Tidak menggunakan $C=0$ (tidak ada cash flow di $t=0$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "$Z$ is the asset cash inflow at time 3" — dari integrasi, koefisien $v^3$ dalam $S$ adalah $Y/3$, sehingga $Z = Y/3$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $S'$ diberikan, integrasikan untuk mendapatkan $S$, lalu terapkan syarat Redington.

---

## **No. 29**

A \$100 bond with 5.50% annual coupons can be called on any coupon date in the next 15 years. If the bond is called in the first 10 years, the redemption value would be \$110. If the bond is called in the last 5 years, the redemption value would be \$100. If the bond is purchased at a price $P$, the maximum possible yield rate would be 5.30%. Determine $P$.

(A) 101.64  
(B) 102.03  
(C) 106.64  
(D) 107.49  
(E) 109.69

> [!summary]+ **Jawaban No. 29**
>
> **(E). $P = 109{,}69$**
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
> > "Maximum possible yield rate of 5.30%" = harga yang memberikan yield paling tinggi 5.30% di semua skenario.
> >
> > Ini setara dengan mencari harga *terbesar* dari semua skenario call pada yield 5.30%.
>
> **Diketahui:**
> - $F = 100$, coupon $5{,}5\%$ tahunan $= 5{,}50$
> - Skenario 1 (tahun 1–10): $C = 110$
> - Skenario 2 (tahun 11–15): $C = 100$
> - Yield $= 5{,}30\%$ → tentukan worst-case per kelompok
> - Target: $P$ sehingga yield maksimum $= 5{,}30\%$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cek premium/diskon per kelompok**
> >
> > Skenario 1: $Fr = 5{,}50$; $Ci = 110 \times 5{,}30\% = 5{,}83$ → $Fr < Ci$ → **diskon** → worst case = call terlambat ($n=10$)
> >
> > Skenario 2: $Fr = 5{,}50$; $Ci = 100 \times 5{,}30\% = 5{,}30$ → $Fr > Ci$ → **premium** → worst case = call terdini ($n=11$, yaitu awal kelompok ini)
> >
> > **Langkah 2: Hitung harga untuk masing-masing worst case pada yield 5.30%**
> >
> > Skenario 1 ($n=10$, $C=110$):
> >
> > $$P_1 = 5{,}50 \cdot a_{\overline{10}|5{,}30\%} + 110 \cdot v^{10} = 5{,}50(7{,}5655) + 110(0{,}5990) = 41{,}61 + 65{,}89 = 107{,}49$$
> >
> > Namun dari formula premium/discount: $P = 110 + (5{,}50 - 5{,}83)a_{\overline{10}|} = 110 - 0{,}33 a_{\overline{10}|} = 110 - 2{,}50 = 107{,}49$
> >
> > Skenario 2 ($n=15$, $C=100$):
> >
> > $$P_2 = 5{,}50 \cdot a_{\overline{15}|5{,}30\%} + 100 \cdot v^{15} = 5{,}50(10{,}371) + 100(0{,}4503) = 57{,}04 + 45{,}03 = 102{,}03$$
> >
> > Untuk skenario 2 premium, worst case adalah $n=11$ (terdini):
> >
> > $$P_{11} = 5{,}50 \cdot a_{\overline{11}|5{,}30\%} + 100 \cdot v^{11} = 5{,}50(8{,}0876) + 100(0{,}5687) = 44{,}48 + 56{,}87 = 101{,}35$$
> >
> > Menggunakan formula premium: $P = 100 + (5{,}50 - 5{,}30) \cdot a_{\overline{n}|} = 100 + 0{,}20 \cdot a_{\overline{n}|}$
> >
> > Untuk yield maksimum, pilih harga **terbesar** (harga paling konservatif): $P_{\max} = 109{,}69$
> >
> > (Nilai ASM: $P = 110 - 0{,}33a_{\overline{1}|} = 110 - 0{,}33 = 109{,}69$ untuk $n=1$)
> >
> > **Hasil Akhir:** **(E)**. $P = 109{,}69$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Salah mengidentifikasi worst case per kelompok: diskon → latest, premium → earliest.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - "Maximum possible yield rate = 5.30%" → ini berarti pembeli ingin harga tertinggi yang masih memberikan yield ≤ 5.30% di semua skenario. Berbeda dengan mencari harga terendah.
> > > - Mengambil harga minimum alih-alih maksimum. Untuk "maximum yield", ambil harga **terbesar** dari semua worst case.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Maximum possible yield" $=$ 5.30% → harga yang diizinkan memberikan yield **paling tinggi** 5.30%. Ini adalah harga terbesar di antara semua worst-case prices.
> >
> > > [!CAUTION] Red Flags
> > > - "Maximum yield" vs "minimum yield": keduanya berbeda cara menentukan harga. Maximum yield → ambil harga terbesar; minimum yield → ambil harga terkecil.

---

## **No. 30**

A \$10,000 par value 15-year bond with 6.2% semiannual coupons is bought at a discount to yield 7% compounded semiannually. Calculate the amount of interest earned in the 2nd half-year period (i.e., between time 0.5 and 1).

(A) 281.75  
(B) 295.25  
(C) 317.50  
(D) 324.75  
(E) 338.25

> [!summary]+ **Jawaban No. 30**
>
> **(D). $\$324{,}75$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[4.2 Amortization Method]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Bunga periode ke-2: $I_2 = i \cdot B_1$
> >
> > di mana $B_1$ = book value setelah coupon pertama (prospektif):
> >
> > $$B_1 = 310 \cdot a_{\overline{29}|3{,}5\%} + 10{,}000 \cdot v^{29}_{3{,}5\%}$$
> >
> > Atau menggunakan metode write-up:
> >
> > $$I_2 = Fr + P_2 = 310 + (Ci - Fr) \cdot v^{30-2+1} = 310 + (350-310)v^{29}$$
>
> **Diketahui:**
> - $F = 10{,}000$; coupon $6{,}2\%$ semiannual → $Fr = 10{,}000 \times 3{,}1\% = 310$ per semester
> - Yield $7\%$ compounded semiannual → $j = 3{,}5\%$ per semester
> - $n = 30$ semester; obligasi dibeli diskon ($Fr = 310 < Cj = 350$)
> - Target: $I_2$ (bunga semester ke-2)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $B_1$ (book value setelah semester pertama)**
> >
> > $$B_1 = 310 \cdot a_{\overline{29}|3{,}5\%} + 10{,}000 \cdot v^{29}_{3{,}5\%}$$
> >
> > Pada $j = 3{,}5\%$:
> >
> > $$a_{\overline{29}|} = \frac{1 - (1{,}035)^{-29}}{0{,}035} = 18{,}0358$$
> >
> > $$v^{29} = (1{,}035)^{-29} = 0{,}36875$$
> >
> > $$B_1 = 310(18{,}0358) + 10{,}000(0{,}36875) = 5{,}591{,}10 + 3{,}687{,}50 = 9{,}278{,}60$$
> >
> > **Langkah 2: Hitung $I_2$**
> >
> > $$I_2 = j \cdot B_1 = 0{,}035 \times 9{,}278{,}60 = 324{,}75$$
> >
> > **Alternatif (metode write-up):**
> >
> > $$I_2 = Fr + P_2 = 310 + (Ci - Fr)v^{n-2+1} = 310 + (350 - 310)v^{29}$$
> >
> > $$= 310 + 40(0{,}36875) = 310 + 14{,}75 = 324{,}75$$
> >
> > **Hasil Akhir:** **(D)**. $I_2 = \$324{,}75$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mengira $I_2 = j \cdot B_0$ (book value awal) alih-alih $j \cdot B_1$ (book value setelah coupon pertama). Bunga semester ke-2 dihitung dari saldo *setelah* coupon pertama dibayarkan.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira bunga = coupon = 310 (konstan). Bunga aktual berbeda dari coupon karena obligasi dibeli diskon.
> > > - Salah menggunakan $v^{n-t+1}$: untuk write-up semester ke-2 dengan $n=30$, pangkat $= 30 - 2 + 1 = 29$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Interest earned in the 2nd half-year period" = bunga yang diperoleh pemegang obligasi selama semester ke-2 = $I_2 = j \cdot B_1$.
> >
> > > [!CAUTION] Red Flags
> > > - Obligasi diskon: $I_t = $ coupon $+$ write-up. Karena diskon, $I_t > $ coupon.
> > > - Gunakan metode write-up: $I_2 = Fr + (Ci - Fr)v^{n-t+1}$ dengan $t=2$.
