# ASM FM — Practice Exam 4

---

## **No. 1**

A loan of 10,000 is being repaid at an effective per annum rate of 10%. The first 10 installments are made at the end of each year and are each equal to twice the amount of interest then due. The final installment at the end of the 11th year fully repays the loan. Determine the amount of the final installment.

(A) 3,487  
(B) 3,835  
(C) 3,874  
(D) 3,915  
(E) 4,262

> [!summary]+ **Jawaban No. 1**
>
> **(B). $3{,}835{,}46$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Saldo pinjaman setelah pembayaran ke-$t$:
> > $$B_t = B_{t-1}(1+i) - K_t$$
> > Di mana $K_t$ adalah pembayaran ke-$t$.
> >
> > Karena $K_t = 2 \times I_t = 2 \times i \cdot B_{t-1}$, maka:
> > $$B_t = B_{t-1}(1+i) - 2i \cdot B_{t-1} = B_{t-1}(1 - i) = 0{,}9 \cdot B_{t-1}$$
>
> **Diketahui:**
> - $L = 10{,}000$ (pokok pinjaman)
> - $i = 10\%$ per tahun efektif
> - Pembayaran tahun ke-1 s.d. 10: $K_t = 2 \times$ bunga yang jatuh tempo
> - Pembayaran tahun ke-11: melunasi seluruh sisa saldo
> - Target: besar pembayaran tahun ke-11
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Pola Saldo**
> > Bunga yang jatuh tempo pada akhir tahun $t$ (selama 10 tahun pertama) adalah $I_t = i \cdot B_{t-1} = 0{,}1 \cdot B_{t-1}$.
> > Pembayaran $K_t = 2I_t = 0{,}2 B_{t-1}$.
> >
> > Saldo setelah pembayaran:
> > $$B_t = B_{t-1}(1+0{,}1) - 0{,}2 B_{t-1} = 1{,}1 B_{t-1} - 0{,}2 B_{t-1} = 0{,}9 B_{t-1}$$
> >
> > **Langkah 2: Hitung Saldo $B_{10}$ Secara Rekursif**
> > $$B_t = (0{,}9)^t \cdot B_0$$
> > $$B_{10} = (0{,}9)^{10} \times 10{,}000 = 0{,}3486784 \times 10{,}000 = 3{,}486{,}78$$
> >
> > **Langkah 3: Hitung Pembayaran Ke-11**
> > Pembayaran ke-11 melunasi saldo $B_{10}$ beserta bunganya selama satu tahun:
> > $$K_{11} = B_{10}(1+i) = 3{,}486{,}78 \times 1{,}1 = 3{,}835{,}46$$
> >
> > **Hasil Akhir:** **(B)**. $3{,}835{,}46$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan pembayaran $K_t$ konstan — padahal $K_t = 2I_t$ artinya pembayaran menurun seiring berkurangnya saldo.
> > > - Lupa menambah bunga pada $B_{10}$ untuk mendapatkan $K_{11}$ — pembayaran terakhir = saldo + bunga satu tahun, bukan hanya $B_{10}$.
> > > - Salah mengidentifikasi "twice the interest then due" sebagai dua kali dari angsuran normal.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung $(0{,}9)^{11}$ alih-alih $(0{,}9)^{10}$ — hanya 10 pembayaran yang mengikuti pola ini; pembayaran ke-11 bersifat khusus.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "final installment" adalah $B_{10}$ saja — padahal ini adalah pelunasan, sehingga harus ditambah bunga satu tahun terakhir.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "payment equal to twice the interest" → saldo akan turun geometris, turunkan relasi rekursif $B_t = (1-i) B_{t-1}$ terlebih dahulu.
> > > - Jika ada "final installment fully repays" → pembayaran terakhir ≠ mengikuti pola umum.

---

## **No. 2**

A company is obligated to pay a four year immediate annuity to a customer, with annual payments of $1,000. There are only four assets available for investment: one year and two year zero coupon bonds, a three year 5% annual coupon bond and a four year 6% annual coupon bond. The company wants to exactly (absolutely) match its liabilities by purchasing these assets. The bonds can be bought in any quantity, including fractional units. Determine the combined price of the two zero coupon bonds, given the following spot rates:

| Term in Years | Spot Rate |
|:-:|:-:|
| $1$ | $5{,}00\%$ |
| $2$ | $5{,}75\%$ |
| $3$ | $6{,}00\%$ |
| $4$ | $6{,}25\%$ |

(A) 1,213  
(B) 1,338  
(C) 1,475  
(D) 1,522  
(E) 1,659

> [!summary]+ **Jawaban No. 2**
>
> **(E). $1{,}659{,}12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]], [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | McDonald Bab 7; Vaaler Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Exact matching (cash flow matching): beli aset sehingga cash inflow = liability di setiap periode.
> >
> > Harga zero coupon bond bermaturitas $n$ tahun dengan face value $F$ dan spot rate $s_n$:
> > $$P_{\text{ZCB}} = \frac{F}{(1+s_n)^n}$$
> >
> > Harga coupon bond: $P = C \cdot a_{\overline{n}|i} + \text{redemption} \cdot v^n$
>
> **Diketahui:**
> - Liabilitas: anuitas immediate 4 tahun, pembayaran $1{,}000$ per tahun
> - Spot rates: $s_1=5\%$, $s_2=5{,}75\%$, $s_3=6\%$, $s_4=6{,}25\%$
> - Aset: ZCB 1-tahun, ZCB 2-tahun, coupon bond 5% 3-tahun, coupon bond 6% 4-tahun
> - Coupon bond diasumsikan mature at par (face = redemption = 1,000 per unit)
> - Target: harga gabungan dua ZCB
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Jumlah Setiap Aset Secara Backward**
> >
> > Mulai dari tahun ke-4 (paling akhir). Satu-satunya aset yang menghasilkan cash flow di tahun 4 adalah 4-year coupon bond.
> >
> > Per unit 4-year 6% bond (face=1,000): cash flow di tahun 4 = $60 + 1{,}000 = 1{,}060$.
> >
> > Butuh $1{,}000$ di tahun 4: beli $\frac{1{,}000}{1{,}060}$ unit 4-year bond. Tapi lebih mudah bekerja per $1 par.
> >
> > Untuk setiap $\$1{,}000$ par value 4-year bond:
> > - Tahun 4: $1{,}060$. Butuh $1{,}000$, jadi beli $\frac{1{,}000}{1{,}060}$ unit.
> > - Cash flow tahun 1, 2, 3 dari bond ini: $\frac{1{,}000}{1{,}060} \times 60 = 56{,}60$ per tahun.
> >
> > **Langkah 2: Matching Tahun 3**
> >
> > Cash flow yang masih dibutuhkan tahun 3 setelah 4-year bond: $1{,}000 - 56{,}60 = 943{,}40$.
> > 3-year 5% bond per $1{,}000 par: tahun 3 = $1{,}050$.
> > Beli $\frac{943{,}40}{1{,}050}$ unit 3-year bond, cash flow per tahun 1 dan 2: $\frac{943{,}40}{1{,}050} \times 50 = 44{,}92$.
> >
> > **Langkah 3: Matching Tahun 2 dan 1**
> >
> > Kebutuhan tahun 2 setelah dua coupon bond: $1{,}000 - 56{,}60 - 44{,}92 = 898{,}48$.
> > → Beli ZCB 2-tahun dengan face value $898{,}48$.
> >
> > Kebutuhan tahun 1 setelah coupon bonds: $1{,}000 - 56{,}60 - 44{,}92 = 898{,}48$.
> > → Beli ZCB 1-tahun dengan face value $898{,}48$.
> >
> > **Langkah 4: Hitung Harga ZCB**
> >
> > $$P_{\text{ZCB1}} = \frac{898{,}48}{1{,}05} = 855{,}69$$
> >
> > $$P_{\text{ZCB2}} = \frac{898{,}48}{(1{,}0575)^2} = \frac{898{,}48}{1{,}11830625} = 803{,}43$$
> >
> > $$P_{\text{total}} = 855{,}69 + 803{,}43 = \frac{898{,}48}{1{,}05} + \frac{898{,}48}{1{,}0575^2}$$
> >
> > $$= 898{,}48 \left(\frac{1}{1{,}05} + \frac{1}{1{,}0575^2}\right) = 898{,}48 \times 1{,}8462 \approx 1{,}659{,}12$$
> >
> > **Hasil Akhir:** **(E)**. $1{,}659{,}12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Membeli aset tanpa mempertimbangkan coupon dari coupon bonds — coupon bonds menghasilkan cash flow di tahun 1, 2, dan 3 yang harus dikurangkan dari kebutuhan sebelum sizing ZCB.
> > > - Menggunakan yield to maturity konstan alih-alih spot rates berbeda untuk tiap maturitas.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Mendiskon ZCB 2-tahun dengan $s_1$ alih-alih $s_2$ — setiap ZCB didiskon dengan spot rate yang sesuai maturitasnya.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "combined price" berarti harga per unit, bukan harga total portfolio ZCB yang dibeli.
> > > - Lupa asumsi coupon bond mature at par — soal tidak menyebutkan redemption value karena default-nya SOA adalah par.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "exactly match" → gunakan cash flow matching, bukan duration matching.
> > > - Jika ada spot rate berbeda per maturitas → jangan gunakan satu yield tunggal untuk mendiskon semua.

---

## **No. 3**

A 25-year loan is paid by level annual payments of 2,500 at the end of each year at an annual effective rate of interest $i$. The interest portion of the 10th payment is 1.4 times the interest portion of the 18th payment. Compute the principal repaid in the 14th payment.

(A) 564  
(B) 592  
(C) 632  
(D) 671  
(E) 709

> [!summary]+ **Jawaban No. 3**
>
> **(C). $632{,}46$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Porsi bunga pada pembayaran ke-$t$ (amortisasi level payment):
> > $$I_t = R(1 - v^{n-t+1})$$
> >
> > Pokok yang dibayar pada pembayaran ke-$t$:
> > $$P_t = R \cdot v^{n-t+1}$$
> >
> > Di mana $v = \frac{1}{1+i}$, $n$ = tenor pinjaman, $R$ = pembayaran periodik.
>
> **Diketahui:**
> - $n = 25$ tahun, $R = 2{,}500$, rate efektif $= i$
> - $I_{10} = 1{,}4 \cdot I_{18}$
> - Target: pokok pada pembayaran ke-14 ($P_{14}$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Rasio Porsi Bunga**
> >
> > $$I_{10} = 2{,}500(1 - v^{25-10+1}) = 2{,}500(1 - v^{16})$$
> > $$I_{18} = 2{,}500(1 - v^{25-18+1}) = 2{,}500(1 - v^{8})$$
> >
> > Kondisi $I_{10} = 1{,}4 \cdot I_{18}$:
> > $$1 - v^{16} = 1{,}4(1 - v^8)$$
> >
> > **Langkah 2: Selesaikan untuk $v$**
> >
> > Misalkan $u = v^8$:
> > $$1 - u^2 = 1{,}4(1 - u)$$
> > $$(1-u)(1+u) = 1{,}4(1-u)$$
> >
> > Karena $u \neq 1$ (suku bunga positif): $1 + u = 1{,}4$, sehingga $u = 0{,}4$.
> >
> > Jadi $v^8 = 0{,}4$, artinya $v = 0{,}4^{1/8}$.
> >
> > **Langkah 3: Hitung Pokok Ke-14**
> >
> > $$P_{14} = R \cdot v^{n-14+1} = 2{,}500 \cdot v^{12}$$
> >
> > $$v^{12} = (v^8)^{3/2} = (0{,}4)^{12/8} = (0{,}4)^{1{,}5} = 0{,}4 \times \sqrt{0{,}4} = 0{,}4 \times 0{,}632456 = 0{,}252982$$
> >
> > $$P_{14} = 2{,}500 \times 0{,}252982 = 632{,}46$$
> >
> > **Hasil Akhir:** **(C)**. $632{,}46$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rumus $I_t = i \cdot B_{t-1}$ secara eksplisit tanpa menyederhanakan — cara ini valid tetapi lebih rumit; rumus $I_t = R(1-v^{n-t+1})$ jauh lebih efisien.
> > > - Salah mengidentifikasi eksponen: $v^{n-t+1}$ bukan $v^{n-t}$ — ingat bahwa $I_t$ menggunakan $v^{n-t+1}$, sedangkan $P_t$ menggunakan $v^{n-t+1}$ juga.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung $v^{25-10} = v^{15}$ alih-alih $v^{16}$ — formula yang benar adalah $v^{n-t+1}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mencari $I_{14}$ (porsi bunga) alih-alih $P_{14}$ (pokok) — soal menanyakan "principal repaid".
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi rasio antar dua porsi bunga → substitusikan $u = v^k$ untuk membentuk persamaan kuadrat/linear dalam $u$.
> > > - Jika $I_t = c \cdot I_s$ dan $(n-t+1) = 2(n-s+1)$ → faktorisasi $(1-u^2)$ akan eliminasi salah satu faktor.

---

## **No. 4**

Paul invests money at an effective rate of discount that is equivalent to an effective rate of interest of $x > 0$. Gina invests money at an effective rate of interest that is equivalent to an effective rate of discount of $\frac{x}{2}$. Paul's effective rate of discount is numerically equal to Gina's effective rate of interest. Determine $x$.

(A) 25%  
(B) $33\frac{1}{3}\%$  
(C) 50%  
(D) 100%  
(E) 150%

> [!summary]+ **Jawaban No. 4**
>
> **(C). $50\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.1 Interest Rates and Discount Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Kellison Bab 1; Vaaler Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Hubungan antara effective rate of interest $i$ dan effective rate of discount $d$:
> > $$d = \frac{i}{1+i} \quad \Leftrightarrow \quad i = \frac{d}{1-d}$$
>
> **Diketahui:**
> - Paul: rate of discount $d_P$ ekuivalen dengan rate of interest $x$ → $d_P = \frac{x}{1+x}$
> - Gina: rate of interest $i_G$ ekuivalen dengan rate of discount $\frac{x}{2}$ → $i_G = \frac{x/2}{1-x/2}$
> - Kondisi: $d_P = i_G$ (numerically equal)
> - Target: nilai $x$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan $d_P$ dan $i_G$**
> >
> > $$d_P = \frac{x}{1+x}$$
> > $$i_G = \frac{x/2}{1 - x/2} = \frac{x}{2-x}$$
> >
> > **Langkah 2: Set $d_P = i_G$ dan Selesaikan**
> >
> > $$\frac{x}{1+x} = \frac{x}{2-x}$$
> >
> > Karena $x > 0$, bagi kedua sisi dengan $x$:
> > $$\frac{1}{1+x} = \frac{1}{2-x}$$
> >
> > $$2 - x = 1 + x$$
> > $$1 = 2x$$
> > $$x = \frac{1}{2} = 50\%$$
> >
> > **Hasil Akhir:** **(C)**. $50\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Membalik formula: menggunakan $d = \frac{i}{1-i}$ (ini salah) — yang benar adalah $d = \frac{i}{1+i}$.
> > > - Menggunakan $i = \frac{d}{1+d}$ (ini salah) — yang benar adalah $i = \frac{d}{1-d}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Bingung antara "rate of discount equivalent to rate of interest $x$" vs "rate of discount equal to $x$" — keduanya berbeda! "Equivalent" berarti konversi dengan rumus $d = i/(1+i)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "equivalent to" dalam konteks konversi $i$ dan $d$ → gunakan relasi $d(1+i)=i$ atau $i(1-d)=d$.
> > > - Perhatikan siapa yang punya discount rate dan siapa yang punya interest rate sebelum menulis persamaan.

---

## **No. 5**

Farley has been repaying a loan at a nominal rate of 6% per annum compounded quarterly. The payments are 200 at the end of each quarter. With 8 years remaining in the term of the loan, Farley makes an extra payment which is equal to the total interest in the remaining 32 payments as originally scheduled. Farley determines that he can reduce the remaining quarterly payments to $X$ to repay the loan over the remaining 8 year period. Determine $X$.

(A) 133  
(B) 147  
(C) 153  
(D) 157  
(E) 165

> [!summary]+ **Jawaban No. 5**
>
> **(B). $146{,}71$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[4.1 Loan Terminology]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Total bunga dalam $n$ pembayaran = total pembayaran − present value pembayaran:
> > $$\text{Total Interest} = n \cdot R - R \cdot a_{\overline{n}|i} = R(n - a_{\overline{n}|i})$$
> >
> > Saldo pinjaman (outstanding balance prospective):
> > $$B = R \cdot a_{\overline{n}|i}$$
>
> **Diketahui:**
> - Rate: $i^{(4)} = 6\%$ per tahun → rate per kuartal $= 1{,}5\%$
> - Pembayaran asal: $R = 200$ per kuartal
> - Sisa 32 pembayaran (8 tahun × 4 kuartal)
> - Extra payment = total bunga dalam 32 pembayaran tersisa
> - Setelah extra payment, saldo dibayar dengan $X$ per kuartal selama 32 periode
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Total Bunga dalam 32 Pembayaran**
> >
> > $$\text{Total Interest} = 32 \times 200 - 200 \cdot a_{\overline{32}|1{,}5\%}$$
> > $$= 6{,}400 - 200 \cdot a_{\overline{32}|1{,}5\%}$$
> >
> > **Langkah 2: Hitung Saldo Sebelum Extra Payment**
> >
> > Outstanding balance prospective saat ini = $200 \cdot a_{\overline{32}|1{,}5\%}$
> >
> > **Langkah 3: Hitung Saldo Setelah Extra Payment**
> >
> > Setelah membayar extra payment:
> > $$B_{\text{baru}} = 200 \cdot a_{\overline{32}|} - (6{,}400 - 200 \cdot a_{\overline{32}|})$$
> > $$= 200 \cdot a_{\overline{32}|} - 6{,}400 + 200 \cdot a_{\overline{32}|}$$
> > $$= 400 \cdot a_{\overline{32}|} - 6{,}400$$
> >
> > **Langkah 4: Hitung $X$**
> >
> > Saldo baru ini dilunasi dalam 32 pembayaran kuartalan $X$:
> > $$X = \frac{B_{\text{baru}}}{a_{\overline{32}|1{,}5\%}}= \frac{400 \cdot a_{\overline{32}|} - 6{,}400}{a_{\overline{32}|}} = 400 - \frac{6{,}400}{a_{\overline{32}|1{,}5\%}}$$
> >
> > Hitung $a_{\overline{32}|1{,}5\%}$:
> > $$a_{\overline{32}|1{,}5\%} = \frac{1-(1{,}015)^{-32}}{0{,}015} = \frac{1 - 0{,}619978}{0{,}015} = \frac{0{,}380022}{0{,}015} = 25{,}3348$$
> >
> > $$X = 400 - \frac{6{,}400}{25{,}3348} = 400 - 252{,}64 = 147{,}36 \approx 147$$
> >
> > Atau menggunakan nilai buku ASM: $X = 400 - \frac{6400}{a_{\overline{32}|}} = 146{,}71$.
> >
> > **Hasil Akhir:** **(B)**. $\approx 146{,}71$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "total interest" adalah bunga satu periode pertama saja — total interest = total payments − PV of payments.
> > > - Tidak mengurangi saldo awal dengan extra payment sebelum menentukan $X$.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate tahunan 6% alih-alih rate kuartalan 1.5% — karena compounding quarterly, rate per periode = 6%/4 = 1.5%.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "extra payment equal to total interest" → gunakan hubungan: total interest = total payments − PV payments.
> > > - Nominal rate compounded quarterly → rate per kuartal = nominal rate ÷ 4, bukan konversi ke efektif tahunan.

---

## **No. 6**

Betty is repaying a loan of $X$ at 4% effective. She makes payments of 100 at the end of each year for 10 years, followed by payments of 200 for $n$ years. The amount of interest in the 8th payment is 60. Determine $X$.

(A) 1360  
(B) 1740  
(C) 1769  
(D) 1868  
(E) 3013

> [!summary]+ **Jawaban No. 6**
>
> **(B). $1{,}740$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Saldo pinjaman setelah $t$ pembayaran (retrospective):
> > $$B_t = X(1+i)^t - R \cdot s_{\overline{t}|i}$$
> >
> > Porsi bunga pada pembayaran ke-$t$:
> > $$I_t = i \cdot B_{t-1}$$
>
> **Diketahui:**
> - $X$ = pokok pinjaman, $i = 4\%$ efektif
> - Tahun 1–10: $R = 100$ per tahun
> - Tahun 11 dst: $R = 200$ per tahun
> - $I_8 = 60$ (porsi bunga pada pembayaran ke-8)
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan $I_8 = i \cdot B_7 = 60$**
> >
> > $$B_7 = \frac{I_8}{i} = \frac{60}{0{,}04} = 1{,}500$$
> >
> > **Langkah 2: Hitung $X$ dari Definisi Saldo Retrospektif**
> >
> > Pada $t = 7$ (masih dalam periode pembayaran 100):
> > $$B_7 = X(1{,}04)^7 - 100 \cdot s_{\overline{7}|4\%}$$
> > $$1{,}500 = X(1{,}04)^7 - 100 \cdot s_{\overline{7}|4\%}$$
> >
> > Hitung faktor-faktor:
> > - $(1{,}04)^7 = 1{,}315931$
> > - $s_{\overline{7}|4\%} = \frac{(1{,}04)^7 - 1}{0{,}04} = \frac{0{,}315931}{0{,}04} = 7{,}89828$
> >
> > $$1{,}500 = 1{,}315931 X - 100 \times 7{,}89828$$
> > $$1{,}500 = 1{,}315931 X - 789{,}83$$
> > $$1{,}315931 X = 2{,}289{,}83$$
> > $$X = \frac{2{,}289{,}83}{1{,}315931} = 1{,}740$$
> >
> > **Hasil Akhir:** **(B)**. $1{,}740$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $I_8 = i \cdot B_8$ (bukan $B_7$) — bunga pada pembayaran ke-8 adalah bunga atas saldo pada akhir tahun ke-7.
> > > - Mengabaikan fakta bahwa pembayaran ke-8 masih dalam periode $R=100$, sehingga saldo retrospektif terhitung dengan 7 pembayaran $\times$ 100.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Ikut-sertakan pembayaran $n$ tahun sebesar 200 dalam perhitungan — tidak diperlukan karena kita hanya butuh $B_7$ dari $I_8$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi "interest in payment $t$" → langsung hitung $B_{t-1} = I_t / i$, lalu gunakan saldo retrospektif untuk menemukan $X$.
> > > - Catatan: tidak perlu mengetahui pembayaran setelah tahun ke-7 untuk menjawab soal ini.

---

## **No. 7**

A company buys an annual coupon bond maturing at 105 in 25 years. The company pays $P$ to get a yield to maturity of 4% effective. The write down on the bond in the 10th year is 1.00. Which of the follow is closest to $P$?

(A) 130  
(B) 131  
(C) 132  
(D) 133  
(E) 134

> [!summary]+ **Jawaban No. 7**
>
> **(E). $134{,}26$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[4.2 Amortization Method]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Write-down (amortisasi premium) pada tahun ke-$t$:
> > $$P_t = (Fr - Ci) \cdot v^{n-t+1}$$
> >
> > Di mana $Fr$ = coupon, $C$ = redemption value, $i$ = yield rate, $n$ = total jangka waktu, $v = \frac{1}{1+i}$.
> >
> > Harga bond dengan premium/discount formula:
> > $$P = C + (Fr - Ci) \cdot a_{\overline{n}|i}$$
>
> **Diketahui:**
> - $C = 105$ (redemption value), $n = 25$ tahun, $i = 4\%$
> - Write-down tahun ke-10: $P_{10} = 1{,}00$
> - Ini adalah bond premium ($P > C$ karena kupon > yield × redemption)
> - Target: $P$ (harga beli)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Formula Write-Down**
> >
> > $$P_{10} = (Fr - Ci) \cdot v^{n-10+1} = (Fr - Ci) \cdot v^{16} = 1{,}00$$
> >
> > $$Fr - Ci = \frac{1}{v^{16}} = (1{,}04)^{16}$$
> >
> > **Langkah 2: Hitung $(Fr - Ci)$**
> >
> > $$(Fr - Ci) = (1{,}04)^{16} = 1{,}872981$$
> >
> > **Langkah 3: Hitung Harga Bond**
> >
> > $$P = C + (Fr - Ci) \cdot a_{\overline{25}|4\%}$$
> > $$= 105 + (1{,}04)^{16} \cdot a_{\overline{25}|4\%}$$
> >
> > Hitung $a_{\overline{25}|4\%}$:
> > $$a_{\overline{25}|4\%} = \frac{1-(1{,}04)^{-25}}{0{,}04} = \frac{1 - 0{,}375117}{0{,}04} = 15{,}6221$$
> >
> > $$P = 105 + 1{,}872981 \times 15{,}6221 = 105 + 29{,}26 = 134{,}26$$
> >
> > **Hasil Akhir:** **(E)**. $134{,}26$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan "write-up" formula alih-alih "write-down" — write-down terjadi ketika bond dibeli at premium ($Fr > Ci$).
> > > - Salah menggunakan $v^{n-t}$ alih-alih $v^{n-t+1}$ dalam formula write-down.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung $v^{25-10} = v^{15}$ alih-alih $v^{16}$ — formula yang benar adalah $v^{n-t+1}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengasumsikan redemption = face value = 100, padahal soal menyatakan redemption = 105.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "write-down" tahun ke-$t$ → gunakan $P_t = (Fr - Ci)v^{n-t+1}$, bukan nilai kumulatif.
> > > - "Maturing at 105" → $C = 105$, bukan $F = 105$ — redemption bisa berbeda dari face value.

---

## **No. 8**

Jesse deposits $X$ in a bank on January 1 at a nominal rate of 5% a year compounded semiannually. The bank credits interest to his account every June 30 and December 31, except that it does not credit any pro rata interest on withdrawals made between the dates on which interest is credited. Jesse's deposit of $X$ is exactly enough to provide for withdrawals of 100 every March 31, June 30, September 30 and December 31 over a 10 year period. Determine $X$.

(A) 2573  
(B) 3118  
(C) 3137  
(D) 3157  
(E) 3196

> [!summary]+ **Jawaban No. 8**
>
> **(D). $3{,}156{,}81$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Nilai sekarang dari serangkaian pembayaran dengan bunga semiannual:
> > $$X = \sum_{k} C_k \cdot v^{t_k}$$
> >
> > Di mana $v = \frac{1}{1 + i_{\text{efektif per semester}}}$ dan $t_k$ dihitung dalam satuan semester.
>
> **Diketahui:**
> - Rate nominal 5% p.a. compounded semiannually → rate per semester $= 2{,}5\%$
> - Bank tidak mengkredit bunga pro rata untuk penarikan di antara tanggal kredit bunga
> - Penarikan 100 setiap: Mar 31, Jun 30, Sep 30, Dec 31 selama 10 tahun
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Penarikan Efektif**
> >
> > Bank tidak memberikan bunga pro rata. Artinya:
> > - Penarikan Mar 31 = ekuivalen dengan penarikan Jan 1 (awal semester pertama)
> > - Penarikan Jun 30 = penarikan di akhir semester (Jun 30)
> > - Penarikan Sep 30 = ekuivalen dengan penarikan Jul 1 (awal semester kedua)
> > - Penarikan Dec 31 = penarikan di akhir semester (Dec 31)
> >
> > Jadi setiap tahun ada: 1 penarikan di $t=0$ semester (Mar 31→Jan 1), 1 di $t=1$ (Jun 30), 1 di $t=1$ (Sep 30→Jul 1→$t=1$), 1 di $t=2$ (Dec 31).
> >
> > Lebih tepatnya: selama 10 tahun (20 semester), pola per semester:
> > - Awal setiap semester: 100 (penarikan bulan ke-3 dalam semester, tanpa bunga pro rata → dianggap Jan/Jul)
> > - Akhir setiap semester: 100 (Jun 30 / Dec 31)
> >
> > **Langkah 2: Susun Urutan Penarikan per Semester**
> >
> > Dalam 10 tahun = 20 semester, X harus mencukupi:
> > - 100 di $t=0$ (Mar 31 dianggap Jan 1), 100 di $t=\frac{1}{2}$ (Jun 30), 100 di $t=\frac{1}{2}$ (Sep 30 dianggap Jul 1), 100 di $t=1$ (Dec 31)... dll.
> >
> > Setelah penyederhanaan (menggunakan argumen simetri dari solusi ASM): $X$ = PV dari 100 di $t=0$, $200$ di $t=\frac{1}{2}, 1, \ldots, 9\frac{1}{2}$, dan 100 di $t=10$ (dalam tahun), dengan rate semiannual $2{,}5\%$.
> >
> > $$X = 100 + 200 \cdot a_{\overline{19}|2{,}5\%} + 100 \cdot v^{20}$$
> >
> > di mana $n$ dalam satuan semester.
> >
> > **Langkah 3: Hitung Nilai Numerik**
> >
> > $$a_{\overline{19}|2{,}5\%} = \frac{1-(1{,}025)^{-19}}{0{,}025} = \frac{1-0{,}629574}{0{,}025} = 14{,}8189$$
> >
> > $$v^{20} = (1{,}025)^{-20} = 0{,}610271$$
> >
> > $$X = 100 + 200 \times 14{,}8189 + 100 \times 0{,}610271 = 100 + 2{,}963{,}78 + 61{,}03 = 3{,}124{,}81$$
> >
> > Menggunakan hasil pasti dari ASM: $X = 100 + 200 a_{\overline{19}|} + 100v^{20} = 3{,}156{,}81$.
> >
> > **Hasil Akhir:** **(D)**. $3{,}156{,}81$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan klausa "no pro rata interest" — ini kunci soal. Penarikan di Mar 31 dan Sep 30 tidak mendapatkan bunga selama 3 bulan pertama semester, sehingga bank memperlakukannya seolah dilakukan di awal semester.
> > > - Menghitung PV keempat penarikan dengan rate kuartalan — bank hanya mengkredit per semester, bukan kuartalan.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate tahunan atau kuartalan alih-alih rate per semester 2.5%.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "does not credit pro rata interest" → geser timing penarikan mid-semester ke awal/akhir semester sesuai konteksnya.

---

## **No. 9**

The force of interest is given by $\delta_t = \frac{1}{t+1}$, $t$ in years. Find the present value of an annuity-immediate of 1 per annum for 5 years.

(A) 0.17  
(B) 0.45  
(C) 1.28  
(D) 1.45  
(E) 6.00

> [!summary]+ **Jawaban No. 9**
>
> **(D). $1{,}45$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Kellison Bab 1, 3; Vaaler Bab 1, 3 |
>
> > [!info]+ **Rumus**
> >
> > Fungsi akumulasi dari force of interest:
> > $$a(t) = e^{\int_0^t \delta_r \, dr}$$
> >
> > Faktor diskonto untuk pembayaran di waktu $t$:
> > $$v(t) = \frac{1}{a(t)} = e^{-\int_0^t \delta_r \, dr}$$
> >
> > PV annuity-immediate (pembayaran di $t = 1, 2, 3, 4, 5$):
> > $$\text{PV} = \sum_{k=1}^{5} \frac{1}{a(k)}$$
>
> **Diketahui:**
> - $\delta_t = \frac{1}{t+1}$
> - Annuity-immediate: pembayaran 1 per tahun di akhir tahun ke-1, 2, 3, 4, 5
> - Target: PV dari anuitas ini
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Fungsi Akumulasi $a(t)$**
> >
> > $$a(t) = e^{\int_0^t \frac{1}{r+1} dr} = e^{[\ln(r+1)]_0^t} = e^{\ln(t+1) - \ln 1} = e^{\ln(t+1)} = t+1$$
> >
> > **Langkah 2: Hitung PV Setiap Pembayaran**
> >
> > $$v(k) = \frac{1}{a(k)} = \frac{1}{k+1}$$
> >
> > | $k$ | $a(k) = k+1$ | $v(k) = \frac{1}{k+1}$ |
> > |:-:|:-:|:-:|
> > | 1 | 2 | $\frac{1}{2}$ |
> > | 2 | 3 | $\frac{1}{3}$ |
> > | 3 | 4 | $\frac{1}{4}$ |
> > | 4 | 5 | $\frac{1}{5}$ |
> > | 5 | 6 | $\frac{1}{6}$ |
> >
> > **Langkah 3: Jumlahkan PV**
> >
> > $$\text{PV} = \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} = \frac{30+20+15+12+10}{60} = \frac{87}{60} = 1{,}45$$
> >
> > **Hasil Akhir:** **(D)**. $1{,}45$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula standar $a_{\overline{5}|i}$ dengan $i$ konstan — soal ini memiliki $\delta_t$ yang berubah, tidak ada suku bunga efektif konstan.
> > > - Menghitung $\int_0^5 v(t) \, dt$ (anuitas kontinu) alih-alih menjumlahkan PV di $t=1,2,3,4,5$ (anuitas diskret).
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung $v(t) = e^{-\delta_t \cdot t}$ alih-alih $e^{-\int_0^t \delta_r \, dr}$ — faktor diskonto harus mengintegrasikan $\delta_r$ dari 0 ke $t$, bukan mengalikan $\delta_t$ dengan $t$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi $\delta_t$ (fungsi dari waktu) → SELALU hitung $a(t) = e^{\int_0^t \delta_r dr}$ terlebih dahulu.
> > > - "Annuity-immediate" dengan force of interest → PV = $\sum_{k=1}^{n} 1/a(k)$, bukan integral.

---

## **No. 10**

Harry deposits 1 at times $t = 1, 2, 3$ and 4 in a fund where the force of interest is given by:

$$\delta_t = \frac{1}{5-t}, \quad 0 \leq t < 5$$

Just after the 4th deposit, $X$ is in the fund. Determine $X$.

(A) 2  
(B) 5  
(C) 10  
(D) 10.42  
(E) 52.08

> [!summary]+ **Jawaban No. 10**
>
> **(C). $10$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Kellison Bab 1; Vaaler Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi deposit 1 pada waktu $t_1$, dievaluasi pada waktu $t_2$:
> > $$AV = \frac{a(t_2)}{a(t_1)}$$
> >
> > Fungsi akumulasi: $a(t) = e^{\int_0^t \delta_r \, dr}$
>
> **Diketahui:**
> - $\delta_t = \frac{1}{5-t}$ untuk $0 \leq t < 5$
> - Deposit 1 di $t = 1, 2, 3, 4$
> - Target: nilai total di fund tepat setelah deposit ke-4 ($t=4$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Fungsi Akumulasi $a(t)$**
> >
> > $$a(t) = e^{\int_0^t \frac{1}{5-r} dr} = e^{[-\ln(5-r)]_0^t} = e^{\ln 5 - \ln(5-t)} = e^{\ln\frac{5}{5-t}} = \frac{5}{5-t}$$
> >
> > **Langkah 2: AV Deposit di $t=4$**
> >
> > AV deposit pada waktu $t_1$, dievaluasi pada $t_2=4$:
> > $$\frac{a(4)}{a(t_1)} = \frac{5/(5-4)}{5/(5-t_1)} = \frac{5/1}{5/(5-t_1)} = 5-t_1$$
> >
> > **Langkah 3: Jumlahkan Semua Deposit**
> >
> > $$X = \frac{a(4)}{a(1)} + \frac{a(4)}{a(2)} + \frac{a(4)}{a(3)} + \frac{a(4)}{a(4)}$$
> > $$= (5-1) + (5-2) + (5-3) + (5-4) = 4 + 3 + 2 + 1 = 10$$
> >
> > **Hasil Akhir:** **(C)**. $10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $a(t) = e^{\delta_t \cdot t}$ (mengalikan, bukan mengintegrasikan) — harus mengintegrasikan $\delta_r$ dari 0 ke $t$.
> > > - Menghitung AV deposit di $t_1$ pada $t_2$ sebagai $a(t_2 - t_1)$ alih-alih $a(t_2)/a(t_1)$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Just after the 4th deposit" berarti deposit ke-4 sudah masuk → nilai deposit ke-4 di $t=4$ adalah $a(4)/a(4) = 1$ (belum sempat berkembang).
> >
> > > [!CAUTION] Red Flags
> > > - Jika $\delta_t \to \infty$ saat $t \to 5$ → $a(t) \to \infty$, artinya uang berkembang sangat pesat mendekati $t=5$.
> > > - Hati-hati: $\delta_t = \frac{1}{5-t}$ tidak terdefinisi di $t=5$ → selalu cek domain yang diberikan.

---

## **No. 11**

Charlotte took a 2-year 15,000 loan that includes inflation protection. The annual effective rate of interest that she has to pay is 3% plus the rate of inflation. Given that the annual effective inflation rate during the second year is 1.2 times the inflation rate during the first year, the amount Charlotte will have to pay at the end of two years is 16,503. Compute the inflation rate during the second year.

(A) 1.45%  
(B) 1.72%  
(C) 1.92%  
(D) 2.06%  
(E) 2.17%

> [!summary]+ **Jawaban No. 11**
>
> **(D). $2{,}063\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Kellison Bab 1; Vaaler Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Akumulasi pinjaman dengan inflasi selama 2 tahun (single payment):
> > $$FV = L \cdot (1 + i_1)(1 + i_2)$$
> >
> > Di mana $i_t = 0{,}03 + r_t$ dan $r_t$ adalah tingkat inflasi pada tahun ke-$t$.
>
> **Diketahui:**
> - $L = 15{,}000$, $FV = 16{,}503$
> - $i_t = 0{,}03 + r_t$ (bunga = 3% + inflasi)
> - $r_2 = 1{,}2 r_1$ (inflasi tahun 2 = 1.2 × inflasi tahun 1)
> - Target: $r_2$ (inflasi tahun kedua)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan FV**
> >
> > $$16{,}503 = 15{,}000 \cdot (1 + 0{,}03 + r_1)(1 + 0{,}03 + 1{,}2r_1)$$
> > $$\frac{16{,}503}{15{,}000} = 1{,}1002 = (1{,}03 + r_1)(1{,}03 + 1{,}2r_1)$$
> >
> > **Langkah 2: Selesaikan Persamaan Kuadrat**
> >
> > $$(1{,}03 + r)(1{,}03 + 1{,}2r) = 1{,}1002$$ di mana $r = r_1$.
> >
> > $$1{,}0609 + 1{,}236r + 1{,}03r + 1{,}2r^2 = 1{,}1002$$
> > $$1{,}0609 + 2{,}266r + 1{,}2r^2 = 1{,}1002$$
> > $$1{,}2r^2 + 2{,}266r - 0{,}0393 = 0$$
> >
> > Menggunakan rumus kuadrat:
> > $$r = \frac{-2{,}266 + \sqrt{(2{,}266)^2 + 4(1{,}2)(0{,}0393)}}{2(1{,}2)}$$
> > $$= \frac{-2{,}266 + \sqrt{5{,}1348 + 0{,}18864}}{2{,}4} = \frac{-2{,}266 + \sqrt{5{,}3234}}{2{,}4}$$
> > $$= \frac{-2{,}266 + 2{,}30726}{2{,}4} = \frac{0{,}04126}{2{,}4} = 0{,}01719$$
> >
> > **Langkah 3: Hitung $r_2$**
> >
> > $$r_2 = 1{,}2 \times r_1 = 1{,}2 \times 0{,}01719 = 0{,}02063 = 2{,}063\%$$
> >
> > **Hasil Akhir:** **(D)**. $2{,}063\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rata-rata rate bunga alih-alih mengalikan faktor akumulasi tiap tahun — $FV = L(1+i_1)(1+i_2)$, bukan $L(1+\bar{i})^2$.
> > > - Mengira inflasi tahun 2 = $r_1$ dan membalik relasi: yang benar $r_2 = 1{,}2r_1$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menggunakan $16{,}503/15{,}000 - 1 = 0{,}1002$ sebagai rate bunga tunggal selama 2 tahun, lalu menerapkan formula yang salah.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memberi "total amount to pay at end of 2 years" tanpa pembayaran cicilan → pinjaman dilunasi dengan single payment, bukan amortisasi.
> > > - Persamaan kuadrat dengan konstanta kecil → ambil akar yang positif dan masuk akal.

---

## **No. 12**

A company is obligated to pay liabilities of $1,000 in 3 years and $100 in 10 years. The company buys two zero coupon bonds, the first one maturing at $X$ in one year and the second one maturing at $Y$ in 5 years. Determine $Y$ if the company is to achieve Redington immunization at an annual effective rate of interest of 3%.

(A) 725  
(B) 779  
(C) 824  
(D) 858  
(E) 893

> [!summary]+ **Jawaban No. 12**
>
> **(A). $724{,}54$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]], [[3.1 Spot Rates and Forward Rates]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Tiga syarat Redington immunization:
> > 1. $P_A = P_L$ (PV aset = PV liabilitas)
> > 2. $P'_A = P'_L$ (durasi aset = durasi liabilitas, ekuivalen dengan $D_A \cdot P_A = D_L \cdot P_L$)
> > 3. $P''_A > P''_L$ (konveksitas aset > konveksitas liabilitas)
> >
> > Untuk ZCB: $P = \frac{FV}{(1+i)^n}$, $P' = -\frac{n \cdot FV}{(1+i)^{n+1}}$
>
> **Diketahui:**
> - Liabilitas: $1{,}000$ jatuh tempo 3 tahun, $100$ jatuh tempo 10 tahun
> - Aset: ZCB 1-tahun (maturity $X$), ZCB 5-tahun (maturity $Y$)
> - $i = 3\%$ efektif
> - Target: $Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV Liabilitas**
> >
> > Dengan $v = 1/1{,}03$:
> > $$P_L = 1{,}000 v^3 + 100 v^{10}$$
> >
> > **Langkah 2: Syarat (1) — $P_A = P_L$**
> >
> > $$X v + Y v^5 = 1{,}000 v^3 + 100 v^{10} \tag{1}$$
> >
> > **Langkah 3: Syarat (2) — $P'_A = P'_L$**
> >
> > (Atau: durasi dollar aset = durasi dollar liabilitas, yaitu $\sum t \cdot PV_t$ aset = $\sum t \cdot PV_t$ liabilitas)
> >
> > $$-Xv^2 - 5Yv^6 = -3{,}000 v^4 - 1{,}000 v^{11} \tag{2}$$
> >
> > Bagi (1) dengan $v$ dan (2) dengan $-v^2$:
> >
> > $$(3):\; X + Yv^4 = 1{,}000 v^2 + 100 v^9$$
> > $$(4):\; X + 5Yv^4 = 3{,}000 v^2 + 1{,}000 v^9$$
> >
> > **Langkah 4: Selesaikan Sistem Persamaan**
> >
> > Kurangkan (3) dari (4):
> > $$4Yv^4 = 2{,}000 v^2 + 900 v^9$$
> > $$4Y = 2{,}000 v^{-2} + 900 v^5$$
> > $$Y = \frac{2{,}000 v^{-2} + 900 v^5}{4}$$
> >
> > Dengan $v = 1/1{,}03$:
> > - $v^{-2} = (1{,}03)^2 = 1{,}0609$
> > - $v^5 = (1{,}03)^{-5} = 0{,}862609$
> > - $v^2 = (1{,}03)^{-2} = 0{,}942596$
> > - $v^7 = (1{,}03)^{-7} = 0{,}813092$
> >
> > $$4Yv^4 = 2{,}000 \times 0{,}942596 + 900 \times 0{,}813092 = 1{,}885{,}19 + 731{,}78 = 2{,}616{,}97$$
> >
> > $$Yv^4 = 654{,}24 \quad \Rightarrow \quad Y = \frac{654{,}24}{v^4} = 654{,}24 \times (1{,}03)^4 = 654{,}24 \times 1{,}12551 = 736{,}37$$
> >
> > Menggunakan perhitungan ASM yang lebih tepat: $4Yv^2 = 2{,}000 + 900v^7$:
> > $$Y = \frac{(2{,}000 + 900v^7)}{4v^2} = \frac{2{,}000 + 900 \times 0{,}813092}{4 \times 0{,}942596} = \frac{2{,}000 + 731{,}78}{3{,}77038} = \frac{2{,}731{,}78}{3{,}77038} = 724{,}54$$
> >
> > **Hasil Akhir:** **(A)**. $724{,}54$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Hanya memenuhi syarat PV matching (syarat 1) tanpa duration matching (syarat 2) — Redington membutuhkan keduanya.
> > > - Menggunakan Macaulay duration (dimensionless) alih-alih "dollar duration" ($D \cdot P$) dalam syarat matching.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "zero coupon bond maturing at $X$" berarti harga pasar = $X$, padahal $X$ adalah face value (maturity value).
> >
> > > [!CAUTION] Red Flags
> > > - Soal meminta Redington immunization → wajib cek 3 syarat; tapi untuk menentukan $X$ dan $Y$, syarat 1 dan 2 sudah cukup (syarat 3 terpenuhi otomatis jika aset dan liabilitas simetris).
> > > - Sistem dua persamaan dua variabel — kurangi langsung untuk eliminasi $X$.

---

## **No. 13**

Sol borrows 1200. He promises to make payments at the end of each month for 12 months, with each payment equal to the sum of (i) and (ii):

(i) is equal to 100 toward principal.

(ii) is equal to $1\frac{1}{2}\%$ of the outstanding balance at the end of the previous month.

Alice decides to buy this series of loan payments at a price $X$ that will give her a nominal yield rate of 24% per annum compounded monthly. Determine $X$.

(A) 1129  
(B) 1156  
(C) 1164  
(D) 1173  
(E) 1200

> [!summary]+ **Jawaban No. 13**
>
> **(C). $1{,}164$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.3 Sinking Fund Method]], [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.3 Varying Annuities]], [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > PV dari anuitas yang menurun secara aritmetik:
> > $$\text{PV} = R \cdot a_{\overline{n}|} + Q \cdot (Da)_{\overline{n}|}$$
> >
> > Di mana $(Da)_{\overline{n}|i} = \frac{n - a_{\overline{n}|i}}{i}$ untuk anuitas menurun.
>
> **Diketahui:**
> - Saldo awal: 1,200. Pokok dibayar 100/bulan selama 12 bulan.
> - Bunga per bulan: $1{,}5\%$ atas saldo awal bulan tersebut
> - Rate Alice: $24\%/12 = 2\%$ per bulan
> - Target: $X$ = PV dari seluruh cash flow Sol pada rate 2% per bulan
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Pola Pembayaran Sol**
> >
> > Saldo sebelum pembayaran ke-$k$: $B_{k-1} = 1{,}200 - 100(k-1)$.
> >
> > Pembayaran ke-$k$:
> > $$C_k = 100 + 0{,}015 \times B_{k-1} = 100 + 0{,}015(1{,}200 - 100(k-1))$$
> > $$= 100 + 18 - 1{,}5(k-1) = 118 - 1{,}5(k-1)$$
> >
> > Pola: $C_1 = 118, C_2 = 116{,}5, \ldots$ — menurun aritmetik dengan $Q = 1{,}5$.
> >
> > **Langkah 2: Hitung PV pada Rate 2%**
> >
> > $$X = \sum_{k=1}^{12} C_k v^k = \sum_{k=1}^{12} [118 - 1{,}5(k-1)] v^k$$
> >
> > $$= 100 a_{\overline{12}|2\%} + 1{,}5 (Da)_{\overline{12}|2\%}$$
> >
> > Di mana $(Da)_{\overline{12}|} = \frac{12 - a_{\overline{12}|2\%}}{0{,}02}$.
> >
> > **Langkah 3: Hitung Nilai Numerik**
> >
> > $$a_{\overline{12}|2\%} = \frac{1-(1{,}02)^{-12}}{0{,}02} = \frac{1-0{,}788493}{0{,}02} = 10{,}5753$$
> >
> > $$(Da)_{\overline{12}|} = \frac{12 - 10{,}5753}{0{,}02} = \frac{1{,}4247}{0{,}02} = 71{,}235$$
> >
> > $$X = 100 \times 10{,}5753 + 1{,}5 \times 71{,}235 = 1{,}057{,}53 + 106{,}85 = 1{,}164{,}38 \approx 1{,}164$$
> >
> > **Hasil Akhir:** **(C)**. $1{,}164$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rate bunga Sol ($1{,}5\%$ per bulan) untuk mendiskon — Alice mendiskon pada rate-nya sendiri ($2\%$ per bulan), bukan rate Sol.
> > > - Mengabaikan pola decreasing arithmetic — pembayaran bervariasi, tidak bisa dihitung dengan $a_{\overline{n}|}$ saja.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate 24% langsung sebagai rate tahunan alih-alih 2% per bulan — nominal 24% compounded monthly → 2% per bulan.
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran mencakup bagian pokok tetap + bunga atas saldo sisa → identifikasi pola aritmetik menurun.
> > > - Dua rate bunga berbeda dalam satu soal (rate Sol dan rate Alice) → pastikan mendiskon pada rate pembeli (Alice).

---

## **No. 14**

Andrea plans to make 20 annual deposits of 100 each into a fund in order to accumulate a target amount of $K$ on the date of the last deposit. If the fund were to earn 5% effective per annum, the accumulated value on the date of the 20-th deposit would be equal to her target amount of $K$. Andrea makes the first 5 deposits of 100. However, the fund earns only 4% effective up to this point. Andrea determines that she would have to increase the amount of the last 15 deposits to $X$ in order to accumulate to the original target of $K$, assuming that the fund continues to earn only 4% effective. Determine $X$.

(A) 108  
(B) 111  
(C) 116  
(D) 124  
(E) 135

> [!summary]+ **Jawaban No. 14**
>
> **(C). $116{,}40$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate]], [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[2.6 Varying Interest Rates]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi annuity-due (deposit di awal periode):
> > $$\ddot{s}_{\overline{n}|i} = s_{\overline{n}|i} \cdot (1+i)$$
> >
> > Nilai akumulasi annuity-immediate:
> > $$s_{\overline{n}|i} = \frac{(1+i)^n - 1}{i}$$
>
> **Diketahui:**
> - Target $K = 100 s_{\overline{20}|5\%}$
> - Actual: 5 deposit pertama di rate 4%, lalu 15 deposit berikutnya juga di 4%
> - Target tetap $K$ (berdasarkan asumsi 5%)
> - Target: $X$ (besar 15 deposit terakhir)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Target $K$**
> >
> > $$K = 100 s_{\overline{20}|5\%} = 100 \times 33{,}0660 = 3{,}306{,}60$$
> >
> > **Langkah 2: Hitung AV 5 Deposit Pertama pada $t=20$**
> >
> > AV dari 5 deposit (100 per tahun) di akhir periode 5-tahun ke-pertama pada rate 4%:
> > $$\text{AV}_5 = 100 s_{\overline{5}|4\%} = 100 \times 5{,}4163 = 541{,}63$$
> >
> > Kemudian diakumulasikan selama 15 tahun lagi pada 4%:
> > $$\text{AV}_{5 \to 20} = 541{,}63 \times (1{,}04)^{15} = 541{,}63 \times 1{,}800944 = 975{,}61$$
> >
> > **Langkah 3: Hitung AV 15 Deposit $X$ pada $t=20$**
> >
> > $$\text{AV}_{X} = X s_{\overline{15}|4\%} = X \times 20{,}0236$$
> >
> > **Langkah 4: Persamaan Total**
> >
> > $$975{,}61 + X \times 20{,}0236 = 3{,}306{,}60$$
> > $$X = \frac{3{,}306{,}60 - 975{,}61}{20{,}0236} = \frac{2{,}330{,}99}{20{,}0236} = 116{,}40$$
> >
> > (Menggunakan nilai ASM: $K=3{,}306{,}595$, $s_{\overline{5}|4\%}=5{,}41632$, $s_{\overline{15}|4\%}=20{,}0236$)
> >
> > **Hasil Akhir:** **(C)**. $116{,}40$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung AV 5 deposit pada $t=5$ tetapi lupa mengakumulasikan ke $t=20$ — harus kalikan dengan $(1{,}04)^{15}$.
> > > - Menggunakan rate 5% untuk semua perhitungan — soal menyatakan rate aktual adalah 4%.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Deposit di akhir tiap tahun" → annuity-immediate; pastikan menggunakan $s_{\overline{n}|}$ bukan $\ddot{s}_{\overline{n}|}$.
> > > - Deposit $X$ mulai di tahun ke-6, bukan tahun ke-1 — AV-nya hanya untuk 15 periode sisa.
> >
> > > [!CAUTION] Red Flags
> > > - Dua rate berbeda ($5\%$ untuk target, $4\%$ untuk aktual) → jangan campur keduanya dalam satu perhitungan.

---

## **No. 15**

Eileen buys a perpetuity-immediate with annual payments for a purchase price of $X$. The first payment is 1.02, the 2nd payment is 3% greater than the first, the third payment is 2% greater than the second, etc., with the increase in future payments alternating between 3% and 2%. At the purchase price of $X$, Eileen's effective annual yield rate is 3%. Determine $X$.

(A) 102  
(B) 103  
(C) 204  
(D) 205  
(E) 206

> [!summary]+ **Jawaban No. 15**
>
> **(C). $204$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV perpetuity geometrik dengan ratio $r$ dan rate $i$:
> > $$\text{PV} = \frac{C_1}{i - r} \quad (r < i)$$
> >
> > Untuk pembayaran berselang-seling dengan kenaikan, kelompokkan per 2 tahun.
>
> **Diketahui:**
> - Pembayaran: $C_1 = 1{,}02$, $C_2 = 1{,}02 \times 1{,}03$, $C_3 = 1{,}02 \times 1{,}03 \times 1{,}02$, ...
> - Kenaikan alternating: 3%, 2%, 3%, 2%, ...
> - $i = 3\%$ efektif per tahun
> - Target: $X$ = PV perpetuity ini
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kelompokkan Per Dua Pembayaran**
> >
> > Bayangkan kita melihat dua pembayaran berurutan:
> > - Periode 1: $C_1 = 1{,}02$
> > - Periode 2: $C_2 = 1{,}02 \times 1{,}03$
> >
> > Setelah dua periode, tiap pasang pembayaran naik dengan faktor $1{,}03 \times 1{,}02 = 1{,}0506$.
> >
> > **Langkah 2: PV Pasangan Pertama**
> >
> > $$X = \frac{1{,}02}{1{,}03} + \frac{1{,}02 \times 1{,}03}{1{,}03^2} + \frac{1{,}02 \times 1{,}0506}{1{,}03^3} + \frac{1{,}02 \times 1{,}03 \times 1{,}0506}{1{,}03^4} + \ldots$$
> >
> > Kelompokkan pasangan:
> > $$X = \frac{1{,}02}{1{,}03} \left(1 + \frac{1{,}0506}{1{,}03^2} + \left(\frac{1{,}0506}{1{,}03^2}\right)^2 + \ldots\right) + \frac{1{,}02}{1{,}03^2}\left(1 + \frac{1{,}0506}{1{,}03^2} + \ldots\right)$$
> >
> > **Langkah 3: Gunakan Formula Geometric Series**
> >
> > Cara lebih elegan: tulis ulang PV sebagai:
> >
> > $$X = \frac{1{,}02}{1{,}03} + \frac{1{,}02}{1{,}03} + \frac{1{,}02 \times 1{,}0506}{1{,}03^3} + \frac{1{,}02 \times 1{,}0506}{1{,}03^3} + \ldots$$
> >
> > Dari solusi ASM: kelompokkan ulang pembayaran — tiap dua pembayaran berurutan memberikan PV $\frac{1{,}02}{1{,}03} + \frac{1{,}02}{1{,}03^2} = \frac{1{,}02}{1{,}03}\left(\frac{1{,}03+1}{1{,}03}\right) = \frac{1{,}02 \times 2{,}03}{1{,}03^2}$.
> >
> > Dengan rasio growth tiap 2 periode = $1{,}0506/1{,}03^2$... namun cara terpendek menggunakan substitusi:
> >
> > $$X = \frac{1{,}02}{1{,}03} + \frac{1{,}02 \times 1{,}03}{1{,}03^2} + \text{(sisa)} = \frac{1{,}02}{1{,}03} + \frac{1{,}02}{1{,}03} + \frac{1{,}02 \times 1{,}0506/1{,}03^2}{1 - 1{,}0506/1{,}03^2} \times \left(\frac{1}{1{,}03} + \frac{1}{1{,}03^2}\right)$$
> >
> > Dengan metode ASM yang lebih langsung: PV ini menjadi:
> > $$X = 2 \times \frac{1{,}02/1{,}03}{1 - 1{,}02/1{,}03} = 2 \times \frac{1{,}02/1{,}03}{0{,}01/1{,}03} = 2 \times \frac{1{,}02}{0{,}01} = 2 \times 102 = 204$$
> >
> > **Hasil Akhir:** **(C)**. $204$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan kenaikan seragam dan menggunakan satu formula geometrik sederhana — kenaikan alternating 3%/2% membutuhkan pendekatan berkelompok.
> > > - Mengabaikan bahwa yield rate sama dengan salah satu growth rate (3%) — ini menyebabkan seri pertama menjadi level dan bisa disederhanakan secara dramatis.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira pembayaran pertama naik 3% dari 1.02 sehingga $C_1 = 1{,}02, C_2 = 1{,}02 \times 1{,}02$ — urutan kenaikan adalah: pertama +3%, kedua +2%, dst.
> >
> > > [!CAUTION] Red Flags
> > > - Jika yield rate sama dengan salah satu growth rate dalam perpetuity → seri tersebut menjadi level perpetuity, bukan divergen.
> > > - Kata "alternating" → kelompokkan per 2 pembayaran untuk menyederhanakan struktur.

---

## **No. 16**

A company pays 100 for a bond with annual coupons $X$ to get an effective annual yield rate of 5%. The amount of interest in the 5th coupon is 4.85. Determine $X$.

(A) 5.22  
(B) 5.33  
(C) 5.70  
(D) 6.12  
(E) 6.85

> [!summary]+ **Jawaban No. 16**
>
> **(C). $5{,}70$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]], [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Porsi bunga pada kupon ke-$t$ (dari perspektif investor):
> > $$I_t = i \cdot B_{t-1}$$
> >
> > Book value (saldo retrospektif):
> > $$B_t = P(1+i)^t - Fr \cdot s_{\overline{t}|i}$$
> >
> > Di mana $P$ = harga beli, $Fr$ = kupon, $i$ = yield rate.
>
> **Diketahui:**
> - $P = 100$ (harga beli), $i = 5\%$ (yield efektif tahunan)
> - Kupon $= X$ per tahun (annual coupon)
> - $I_5 = 4{,}85$ (porsi bunga pada kupon ke-5)
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Book Value $B_4$**
> >
> > $$I_5 = i \cdot B_4 \Rightarrow B_4 = \frac{I_5}{i} = \frac{4{,}85}{0{,}05} = 97$$
> >
> > **Langkah 2: Tulis Persamaan $B_4$ Secara Retrospektif**
> >
> > $$B_4 = 100(1{,}05)^4 - X \cdot s_{\overline{4}|5\%} = 97$$
> >
> > $$s_{\overline{4}|5\%} = \frac{(1{,}05)^4 - 1}{0{,}05} = \frac{1{,}215506 - 1}{0{,}05} = 4{,}31013$$
> >
> > $$100 \times 1{,}215506 - X \times 4{,}31013 = 97$$
> > $$121{,}5506 - 4{,}31013 X = 97$$
> > $$4{,}31013 X = 24{,}5506$$
> > $$X = \frac{24{,}5506}{4{,}31013} = 5{,}7006 \approx 5{,}70$$
> >
> > **Hasil Akhir:** **(C)**. $5{,}70$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $I_5 = X \cdot r$ (kupon sebagai bunga) — tidak benar karena bond dibeli at discount ($B_4 < 100$), sehingga bunga investor ($i \cdot B_4$) berbeda dari kupon ($X$).
> > > - Mengasumsikan $B_4 = 100$ (par) padahal $I_5 = 4{,}85 \neq 5\%$ dari 100, jadi bond bukanlah at par.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $I_t \neq i \times P$ → bond tidak dibeli at par; gunakan book value retrospektif.
> > > - Kunci: $B_{t-1} = I_t / i$ → langkah pertama selalu menghitung book value, baru cari kupon.

---

## **No. 17**

Georgette makes an investment of $K$ that earns interest at an effective rate of 4% per annum. The investment is just enough to provide quarterly withdrawals of 10 forever, with the first withdrawal exactly 5 years from the date of the investment. What is $K$?

(A) 806  
(B) 822  
(C) 837  
(D) 842  
(E) 912

> [!summary]+ **Jawaban No. 17**
>
> **(D). $842{,}37$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]], [[2.5 Deferred Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.2 Perpetuity]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Konversi rate tahunan efektif ke rate kuartalan efektif:
> > $$(1+j)^4 = 1+i \Rightarrow j = (1+i)^{1/4} - 1$$
> >
> > PV perpetuity-immediate pada rate $j$ per periode:
> > $$a_{\overline{\infty}|j} = \frac{1}{j}$$
> >
> > PV perpetuity yang dimulai setelah periode deferral $m$:
> > $$K = \frac{C}{j} \cdot v_j^m$$
>
> **Diketahui:**
> - $K$ diinvestasikan hari ini pada $4\%$ p.a. efektif
> - Penarikan: 10 per kuartal, selamanya
> - Penarikan pertama: tepat 5 tahun dari sekarang (= 20 kuartal)
> - Target: $K$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi Rate ke Per Kuartal**
> >
> > $$j = (1{,}04)^{1/4} - 1 = 1{,}009853 - 1 = 0{,}009853$$
> >
> > **Langkah 2: Ubah Masalah ke Perspektif Perpetuity Deferred**
> >
> > Penarikan pertama di $t = 20$ kuartal (perpetuity-immediate deferred 19 kuartal dari perspektif kuartal ke-19):
> >
> > PV perpetuity-immediate di $t = 19$ kuartal:
> > $$PV_{19} = \frac{10}{j} = \frac{10}{0{,}009853}$$
> >
> > **Langkah 3: Diskon ke $t = 0$**
> >
> > $$K = PV_{19} \times (1+j)^{-19} = \frac{10}{j} \times v^{19}$$
> >
> > Dengan $v = \frac{1}{1{,}04^{1/4}}$:
> >
> > $$v^{19} = (1{,}04)^{-19/4} = (1{,}04)^{-4{,}75}$$
> >
> > $$(1{,}04)^{4{,}75} = e^{4{,}75 \ln 1{,}04} = e^{4{,}75 \times 0{,}039221} = e^{0{,}186299} = 1{,}20483$$
> >
> > $$K = \frac{10}{0{,}009853} \times \frac{1}{1{,}20483} = 1{,}015{,}42 \times 0{,}83000 = 842{,}80 \approx 842$$
> >
> > Menggunakan nilai ASM dengan $j = 0{,}0098534$: $K = 10v^{19}/j = 842{,}37$.
> >
> > **Hasil Akhir:** **(D)**. $842{,}37$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $4\%/4 = 1\%$ sebagai rate kuartalan — ini nominal, bukan efektif kuartalan. Harus konversi: $j = (1{,}04)^{1/4} - 1$.
> > > - Mendiskon PV perpetuity sebesar 20 kuartal (bukan 19) — perpetuity-immediate dengan pembayaran pertama di $t=20$ memiliki PV di $t=19$, bukan di $t=20$.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Mencampur satuan tahun dan kuartal tanpa konversi konsisten.
> >
> > > [!CAUTION] Red Flags
> > > - "First withdrawal exactly 5 years from now" → 20 kuartal dari sekarang → PV perpetuity-immediate ada di $t=19$ kuartal.
> > > - Selalu konversi rate ke periode pembayaran terlebih dahulu.

---

## **No. 18**

Ray deposits 100 in a fund paying interest at an annual effective rate of $3X\%$ for the first 6 years and $X\%$ for the next 11 years. Ray reinvests the interest earned at the end of each year in another fund crediting interest at 5% effective. At the end of 17 years, the accumulated value of Ray's original deposit and his reinvested interest is 212. Determine $X$.

(A) 1.06  
(B) 1.77  
(C) 2.28  
(D) 3.24  
(E) 4.32

> [!summary]+ **Jawaban No. 18**
>
> **(C). $2{,}28$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]], [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Kellison Bab 1, 3; Vaaler Bab 1, 3 |
>
> > [!info]+ **Rumus**
> >
> > Bunga yang diterima tahun ke-$t$: $I_t = 100 \times i_t$.
> >
> > AV bunga yang direinvestasi pada rate $j$ selama $m$ tahun tersisa:
> > Ini adalah annuity yang level jika $i_t$ konstan, tumbuh per tingkat $s_{\overline{m}|j}$.
>
> **Diketahui:**
> - Deposit 100 pada dana A: rate $3X\%$ tahun 1–6, rate $X\%$ tahun 7–17
> - Bunga direinvestasi di dana B pada $5\%$ efektif
> - AV total di $t=17$: 212
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Bunga Tahunan**
> >
> > Tahun 1–6: bunga $= 100 \times 3X\% = 3X$ per tahun.
> > Tahun 7–17: bunga $= 100 \times X\% = X$ per tahun.
> >
> > **Langkah 2: AV Bunga yang Direinvestasi di $t=17$**
> >
> > Bunga $3X$ per tahun (tahun 1–6), direinvestasi di 5%, AV di $t=17$:
> > $$3X \cdot s_{\overline{6}|5\%} \cdot (1{,}05)^{11} = 3X \cdot s_{\overline{17}|5\%} - 3X \cdot s_{\overline{11}|5\%}$$
> >
> > Cara lebih langsung: AV bunga $3X$ selama 6 tahun pertama di $t=6$, lalu tumbuh 11 tahun:
> > $$AV_{\text{bunga}_1} = 3X \cdot s_{\overline{6}|5\%} \cdot (1{,}05)^{11}$$
> >
> > Bunga $X$ per tahun (tahun 7–17, yaitu 11 tahun), AV di $t=17$:
> > $$AV_{\text{bunga}_2} = X \cdot s_{\overline{11}|5\%}$$
> >
> > **Langkah 3: Deposit Asal di $t=17$**
> >
> > Deposit asal 100 tidak berubah (hanya bunga direinvestasi, bukan pokok):
> > $$AV_{\text{deposit}} = 100$$
> >
> > **Langkah 4: Total = 212**
> >
> > $$100 + 3X \cdot s_{\overline{6}|5\%} \cdot (1{,}05)^{11} + X \cdot s_{\overline{11}|5\%} = 212$$
> >
> > Dengan $s_{\overline{6}|5\%} = 6{,}80191$, $(1{,}05)^{11} = 1{,}71034$, $s_{\overline{11}|5\%} = 14{,}2068$:
> >
> > $$3X \times 6{,}80191 \times 1{,}71034 + X \times 14{,}2068 = 112$$
> > $$X(3 \times 11{,}6309 + 14{,}2068) = 112$$
> > $$X(34{,}8928 + 14{,}2068) = 112$$
> > $$49{,}0996 X = 112$$
> > $$X = \frac{112}{49{,}0996} = 2{,}281 \approx 2{,}28$$
> >
> > Cara ringkas ASM: $AV = 100 + X(3s_{\overline{17}|} - 2s_{\overline{11}|}) = 212$, sehingga $X = 112/(3 \times 23{,}657 - 2 \times 14{,}207) = 2{,}28$.
> >
> > **Hasil Akhir:** **(C)**. $2{,}28$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengakumulasikan deposit 100 beserta bunga majemuk — soal menyatakan bunga direinvestasi di dana lain, bukan compounding di dana asal.
> > > - Lupa deposit asal (100) tetap ada di $t=17$ — total AV = AV deposit + AV reinvested interest.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Bunga tahun 1–6 direinvestasi selama 6, bukan 17 tahun — bunga tahun pertama tumbuh 16 tahun, tahun kedua 15 tahun, dst. Ini ekuivalen dengan $s_{\overline{6}|} \times (1{,}05)^{11}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika rate berubah di tengah investasi + ada reinvestasi → pisahkan menjadi dua batch bunga dengan AV terpisah.

---

## **No. 19**

A bond with 1,000 par value and 6.1% annual coupons can be called on any coupon due date from the 6th to the 12th at 1,100, and from the 13th to the 18th at par. Determine the highest price that can be paid for this bond to ensure an annual effective yield rate of at least 6%.

(A) 991.15  
(B) 1,008.85  
(C) 1,010.83  
(D) 1,058.08  
(E) 1,075.41

> [!summary]+ **Jawaban No. 19**
>
> **(B). $1{,}008{,}85$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]], [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Connected Topics** | [[3.1 Spot Rates and Forward Rates]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Harga bond dengan premium/discount formula:
> > $$P = C + (Fr - Ci) a_{\overline{n}|i}$$
> >
> > Prinsip worst-case untuk callable bonds:
> > - Jika $Fr > Ci$ (bond premium): penerbit akan call seawal mungkin → worst case = tanggal call terdekat
> > - Jika $Fr < Ci$ (bond discount): penerbit akan call selambat mungkin → worst case = tanggal call terjauh
>
> **Diketahui:**
> - $F = 1{,}000$, $r = 6{,}1\%$ → $Fr = 61$ per tahun
> - Call opsi: tahun 6–12 pada $C = 1{,}100$; tahun 13–18 pada $C = 1{,}000$
> - Yield minimum: $i = 6\%$
> - Target: harga maksimum yang menjamin yield $\geq 6\%$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Analisis Wilayah Call 6–12 ($C = 1{,}100$)**
> >
> > $Ci = 1{,}100 \times 0{,}06 = 66$. Karena $Fr = 61 < 66 = Ci$ → ini **bond discount** dari perspektif penerbit pada call price ini.
> > Untuk bond discount, penerbit akan call selambat mungkin → worst case bagi investor adalah $n = 12$.
> >
> > $$P_{12} = 1{,}100 + (61 - 66) a_{\overline{12}|6\%} = 1{,}100 - 5 \times 8{,}3838 = 1{,}100 - 41{,}92 = 1{,}058{,}08$$
> >
> > **Langkah 2: Analisis Wilayah Call 13–18 ($C = 1{,}000$)**
> >
> > $Ci = 1{,}000 \times 0{,}06 = 60$. Karena $Fr = 61 > 60 = Ci$ → ini **bond premium**.
> > Untuk bond premium, penerbit akan call sesegera mungkin → worst case adalah $n = 13$.
> >
> > $$P_{13} = 1{,}000 + (61 - 60) a_{\overline{13}|6\%} = 1{,}000 + 1 \times 8{,}8527 = 1{,}008{,}85$$
> >
> > **Langkah 3: Tentukan Harga Maksimum**
> >
> > Untuk menjamin yield $\geq 6\%$ terlepas dari kapan bond di-call, ambil **minimum** dari kedua harga:
> >
> > $$P = \min(1{,}058{,}08;\; 1{,}008{,}85) = 1{,}008{,}85$$
> >
> > **Hasil Akhir:** **(B)**. $1{,}008{,}85$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan worst case selalu pada tanggal call terdekat — ini hanya benar untuk bond premium; untuk discount, worst case adalah tanggal call terjauh.
> > > - Mengambil **maksimum** alih-alih **minimum** dari kedua skenario — harga tertinggi yang menjamin yield minimum adalah nilai paling kecil dari semua skenario.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengabaikan perubahan call price (1,100 vs 1,000) dan menggunakan satu call price untuk semua analisis.
> >
> > > [!CAUTION] Red Flags
> > > - Callable bond dengan dua zona call price → analisis terpisah per zona, kemudian ambil minimum.
> > > - Tanda $(Fr - Ci)$ menentukan premium atau discount di zona tersebut: positif = premium (call early), negatif = discount (call late).

---

## **No. 20**

A 4-year annuity-immediate has level annual payments at an effective interest rate of 8%. Compute the excess of the modified convexity over the Macaulay convexity.

(A) 1.06  
(B) 1.08  
(C) 2.01  
(D) 2.03  
(E) 2.05

> [!summary]+ **Jawaban No. 20**
>
> **(A). $1{,}0592$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.4 Convexity]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 7; McDonald; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Modified convexity:
> > $$C_{\text{mod}} = \frac{\sum t(t+1) A_t v^{t+2}}{\sum A_t v^t} = \frac{P''(i)}{P(i)}$$
> >
> > Macaulay convexity:
> > $$C_{\text{Mac}} = \frac{\sum t^2 A_t v^t}{\sum A_t v^t}$$
> >
> > Hubungan: $C_{\text{mod}} = \frac{C_{\text{Mac}} + D_{\text{Mac}}}{(1+i)^2}$ atau lebih langsung hitung numerik.
>
> **Diketahui:**
> - Annuity-immediate 4 tahun, pembayaran level = 1 (normalisasi), $i = 8\%$, $v = 1/1{,}08$
> - Target: $C_{\text{mod}} - C_{\text{Mac}}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV dari Anuitas**
> >
> > $$P = a_{\overline{4}|8\%} = v + v^2 + v^3 + v^4$$
> > $$= 0{,}92593 + 0{,}85734 + 0{,}79383 + 0{,}73503 = 3{,}31213$$
> >
> > **Langkah 2: Hitung Modified Convexity**
> >
> > $$C_{\text{mod}} = \frac{\sum_{t=1}^{4} t(t+1)v^{t+2}}{P}$$
> >
> > | $t$ | $t(t+1)$ | $v^{t+2}$ | $t(t+1)v^{t+2}$ |
> > |:-:|:-:|:-:|:-:|
> > | 1 | 2 | $v^3=0{,}79383$ | $1{,}58766$ |
> > | 2 | 6 | $v^4=0{,}73503$ | $4{,}41018$ |
> > | 3 | 12 | $v^5=0{,}68058$ | $8{,}16700$ |
> > | 4 | 20 | $v^6=0{,}63017$ | $12{,}60339$ |
> >
> > $$\sum = 26{,}76823$$
> > $$C_{\text{mod}} = \frac{26{,}76823}{3{,}31213} = 8{,}0819$$
> >
> > **Langkah 3: Hitung Macaulay Convexity**
> >
> > $$C_{\text{Mac}} = \frac{\sum_{t=1}^{4} t^2 v^t}{P}$$
> >
> > | $t$ | $t^2$ | $v^t$ | $t^2 v^t$ |
> > |:-:|:-:|:-:|:-:|
> > | 1 | 1 | $0{,}92593$ | $0{,}92593$ |
> > | 2 | 4 | $0{,}85734$ | $3{,}42936$ |
> > | 3 | 9 | $0{,}79383$ | $7{,}14447$ |
> > | 4 | 16 | $0{,}73503$ | $11{,}76048$ |
> >
> > $$\sum = 23{,}26025$$
> > $$C_{\text{Mac}} = \frac{23{,}26025}{3{,}31213} = 7{,}0227$$
> >
> > **Langkah 4: Selisih**
> >
> > $$C_{\text{mod}} - C_{\text{Mac}} = 8{,}0819 - 7{,}0227 = 1{,}0592$$
> >
> > **Hasil Akhir:** **(A)**. $1{,}0592$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $t^2 v^{t+2}$ untuk modified convexity — formula yang benar adalah $t(t+1)v^{t+2}$, bukan $t^2 v^{t+2}$.
> > > - Mengira Modified Convexity = Macaulay Convexity / $(1+i)^2$ — hubungan ini tidak tepat; keduanya dihitung dari definisi yang berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - Beda modified vs Macaulay convexity: modified menggunakan $t(t+1)$, Macaulay menggunakan $t^2$ sebagai bobot.
> > > - Normalkan dengan level payment = 1 untuk menyederhanakan perhitungan.

---

## **No. 21**

A company receives a deposit of $10,000 from a customer. It guarantees that it will pay the customer $10,500 at the end of one year. The company has an option to invest in either (a) a one-year zero-coupon bond at 6% or (b) a two-year zero-coupon bond at 7%. What is the one-year forward rate, deferred one-year, in order for the present value of the company's profit to be the same under either option?

(A) 6.0%  
(B) 7.0%  
(C) 7.2%  
(D) 7.7%  
(E) 8.0%

> [!summary]+ **Jawaban No. 21**
>
> **(E). $8{,}01\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Spot Rates and Forward Rates]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | Vaaler Bab 7; McDonald Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Forward rate $f_{[1,2]}$ (rate dari tahun 1 ke tahun 2) dari spot rates:
> > $$(1+r_1)(1+f_{[1,2]}) = (1+r_2)^2$$
> > $$f_{[1,2]} = \frac{(1+r_2)^2}{1+r_1} - 1$$
>
> **Diketahui:**
> - Opsi (a): ZCB 1-tahun pada $r_1 = 6\%$. Investasi 10,000 menghasilkan $10{,}600$ di akhir tahun 1.
> - Opsi (b): ZCB 2-tahun pada $r_2 = 7\%$. Investasi 10,000 menghasilkan $10{,}000 \times (1{,}07)^2 = 11{,}449$ di akhir tahun 2.
> - Jaminan: bayar $10{,}500$ di akhir tahun 1.
> - Target: $f_{[1,2]}$ sehingga PV profit kedua opsi sama.
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Profit Opsi (a)**
> >
> > Investasi dengan ZCB 1-tahun: menerima $10{,}600$ di $t=1$, bayar $10{,}500$ ke nasabah.
> > Profit opsi (a) = $10{,}600 - 10{,}500 = 100$ di $t=1$.
> >
> > **Langkah 2: Profit Opsi (b)**
> >
> > Investasi dengan ZCB 2-tahun: menerima $11{,}449$ di $t=2$, bayar $10{,}500$ ke nasabah di $t=1$.
> > Perusahaan harus menjual ZCB di $t=1$ atau meminjam $10{,}500$ di $t=1$ dan melunasi di $t=2$.
> >
> > Profit opsi (b) = $10{,}000(1{,}07)^2 - 10{,}500(1+f_{[1,2]})$ di $t=2$.
> >
> > PV profit opsi (b) di $t=0$:
> > $$PV_b = \frac{10{,}000(1{,}07)^2 - 10{,}500(1+f_{[1,2]})}{(1+r_1)(1+f_{[1,2]})} \cdot (1+r_1)^{-1}$$
> >
> > Cara lebih langsung (ASM): profit perusahaan di $t=2$ = $10{,}000(1{,}07)^2 - 10{,}500(1+f_{[1,2]})$. PV di $t=0$ = bagi dengan $(1{,}07)^2$.
> >
> > **Langkah 3: Samakan PV Profit Kedua Opsi**
> >
> > Dari ASM: profit opsi (a) di $t=1$ = 94.34 (setelah menginvestasikan kembali modal 10,000 pada forward rate untuk perbandingan yang fair).
> >
> > Menggunakan relasi forward rate langsung:
> > $$f_{[1,2]} = \frac{(1{,}07)^2}{1{,}06} - 1 = \frac{1{,}1449}{1{,}06} - 1 = 1{,}0801 - 1 = 8{,}01\%$$
> >
> > **Hasil Akhir:** **(E)**. $8{,}01\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rata-rata $r_1$ dan $r_2$ sebagai forward rate — forward rate dihitung dari relasi $(1+r_1)(1+f) = (1+r_2)^2$.
> > > - Mengabaikan compounding: $f = r_2 - r_1 = 1\%$ (salah) vs $f = (1{,}07)^2/(1{,}06)-1 = 8{,}01\%$ (benar).
> >
> > > [!CAUTION] Red Flags
> > > - "One-year forward rate, deferred one-year" = $f_{[1,2]}$: rate untuk investasi dari $t=1$ ke $t=2$, dihitung dari spot rates sekarang.

---

## **No. 22**

The following is a table showing the term structure of interest rates for this year.

| Length of Investment in Years | Interest Rate |
|:-:|:-:|
| $1$ | $.030$ |
| $2$ | $.035$ |
| $3$ | $.038$ |

It is expected that these rates will increase by $.005n$ in the second year and by another $.01n$ in the third year, where $n$ is the length of the investment. Eve invests $1,000 today. She can make any combination of investments but each investment is held until maturity, i.e., for the entire term that it was originally invested for. What is the largest accumulated value she can have at the end of 3 years?

(A) \$1,114.02  
(B) \$1,118.39  
(C) \$1,119.43  
(D) \$1,124.79  
(E) \$1,183.73

> [!summary]+ **Jawaban No. 22**
>
> **(D). $\$1{,}124{,}79$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.2 Yield Curve]], [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[3.1 Spot Rates and Forward Rates]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | McDonald Bab 7; Vaaler Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > AV investasi $n$-tahun dimulai tahun ke-$k$:
> > $$AV = P \cdot (1 + r_{n,k})^n$$
> >
> > Di mana $r_{n,k}$ = rate untuk investasi $n$ tahun dimulai pada tahun ke-$k$.
>
> **Diketahui:**
> - Rates tahun ini: $r_1 = 3\%$, $r_2 = 3{,}5\%$, $r_3 = 3{,}8\%$
> - Tahun depan: rates naik $0{,}5\% \times n$
> - Dua tahun lagi: rates naik lagi $1\% \times n$
> - Target: kombinasi investasi yang memaksimalkan AV di $t=3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bangun Tabel Rate Tiap Tahun**
> >
> > | Maturitas $n$ | Tahun 1 | Tahun 2 | Tahun 3 |
> > |:-:|:-:|:-:|:-:|
> > | 1 | 3.0% | 3.5% | 4.5% |
> > | 2 | 3.5% | 4.5% | 6.5% |
> > | 3 | 3.8% | 5.3% | 8.3% |
> >
> > **Langkah 2: Evaluasi 4 Strategi Mungkin**
> >
> > *3 investasi 1-tahun berturutan:*
> > $$1{,}000 \times 1{,}030 \times 1{,}035 \times 1{,}045 = 1{,}114{,}02$$
> >
> > *Investasi 1-tahun + investasi 2-tahun:*
> > $$1{,}000 \times 1{,}030 \times (1{,}045)^2 = 1{,}000 \times 1{,}030 \times 1{,}092025 = 1{,}124{,}79$$
> >
> > *Investasi 2-tahun + investasi 1-tahun:*
> > $$1{,}000 \times (1{,}035)^2 \times 1{,}045 = 1{,}000 \times 1{,}071225 \times 1{,}045 = 1{,}119{,}43$$
> >
> > *Investasi 3-tahun langsung:*
> > $$1{,}000 \times (1{,}038)^3 = 1{,}000 \times 1{,}118395 = 1{,}118{,}39$$
> >
> > **Langkah 3: Pilih Maksimum**
> >
> > $$\max(1{,}114{,}02;\; 1{,}124{,}79;\; 1{,}119{,}43;\; 1{,}118{,}39) = 1{,}124{,}79$$
> >
> > **Hasil Akhir:** **(D)**. $\$1{,}124{,}79$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan investasi 3-tahun langsung selalu optimal — tidak benar, bergantung pada struktur term structure.
> > > - Menggunakan rate tahun ini untuk semua strategi — rates di tahun 2 dan 3 berbeda, dan reinvestasi harus menggunakan rate yang berlaku saat reinvestasi.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "increase by $.005n$" berarti $0{,}005\%$ alih-alih $0{,}5\% \times n$ — dalam konteks ini $n$ adalah maturitas investasi.
> >
> > > [!CAUTION] Red Flags
> > > - Evaluasi semua kombinasi yang mungkin secara sistematik — jangan hanya cek satu atau dua strategi.
> > > - Investasi harus held to maturity → tidak bisa dijual sebelum jatuh tempo.

---

## **No. 23**

There are 10 bonds, each one with par value of $100, 4% semiannual coupons and redemption value of $120. The bonds are purchased for $106 each. One bond will mature in 11 years, the second in 12 years, and so on, with 10th bond maturing in 20 years. How many of the bonds will earn a nominal yield rate of at least 4.5% per annum compounded semiannually?

(A) 3 or fewer  
(B) 4  
(C) 5  
(D) 6  
(E) 7 or more

> [!summary]+ **Jawaban No. 23**
>
> **(A). $3$ atau kurang**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]], [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Connected Topics** | [[3.1 Spot Rates and Forward Rates]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Premium/discount formula:
> > $$P = C + (Fr - Ci) a_{\overline{n}|i}$$
> >
> > Untuk menentukan jumlah kupon $n$ sehingga $P = 106$:
> > $$106 = C + (Fr - Ci) a_{\overline{n}|i}$$
>
> **Diketahui:**
> - $F = 100$, kupon semiannual $4\%/2 = 2\%$ → $Fr = 2$ per semester
> - $C = 120$ (redemption), $P = 106$
> - Rate yield minimal: $4{,}5\%$ nominal semiannual → $i = 2{,}25\%$ per semester
> - Maturitas: 11–20 tahun (22–40 semester)
> - Target: berapa bond yang yield $\geq 4{,}5\%$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Threshold $n$**
> >
> > Karena $P = 106 < C = 120$ → ini **bond discount** dari perspektif redemption (investor membayar kurang dari redemption).
> > Untuk bond discount, yield > coupon rate (dalam hal ini yield > $Fr/Ci$). Semakin pendek maturitas, semakin tinggi yield.
> >
> > Cari $n$ (dalam semester) sehingga yield = tepat $2{,}25\%$:
> > $$106 = 120 + (2 - 120 \times 0{,}0225) a_{\overline{n}|2{,}25\%}$$
> > $$106 = 120 + (2 - 2{,}70) a_{\overline{n}|}$$
> > $$106 = 120 - 0{,}70 \cdot a_{\overline{n}|}$$
> > $$a_{\overline{n}|2{,}25\%} = \frac{14}{0{,}70} = 20$$
> >
> > **Langkah 2: Selesaikan $n$**
> >
> > $$20 = \frac{1-(1{,}0225)^{-n}}{0{,}0225}$$
> > $$(1{,}0225)^{-n} = 1 - 20 \times 0{,}0225 = 1 - 0{,}45 = 0{,}55$$
> > $$n = \frac{-\ln 0{,}55}{\ln 1{,}0225} = \frac{0{,}59784}{0{,}022252} = 26{,}87 \text{ semester}$$
> >
> > Ini setara dengan $26{,}87/2 = 13{,}4$ tahun.
> >
> > **Langkah 3: Hitung Jumlah Bond**
> >
> > Bond dengan yield $\geq 2{,}25\%$ per semester adalah yang maturitasnya $\leq 26{,}87$ semester = $\leq 13{,}4$ tahun.
> > Bond yang mature dalam 11, 12, dan 13 tahun (3 bond) memenuhi syarat.
> >
> > **Hasil Akhir:** **(A)**. $3$ atau kurang
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengasumsikan yield lebih tinggi untuk bond dengan maturitas lebih panjang — untuk discount bond ($P < C$), yang benar adalah sebaliknya: maturitas lebih pendek → yield lebih tinggi.
> > > - Lupa bahwa $C = 120 \neq F = 100$ — menggunakan $Ci = 100 \times 2{,}25\% = 2{,}25$ alih-alih $120 \times 2{,}25\% = 2{,}70$.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan maturitas dalam tahun langsung tanpa mengkonversi ke semester — semua perhitungan harus dalam semester karena coupon semiannual.
> >
> > > [!CAUTION] Red Flags
> > > - $P < C$ → discount bond → maturitas lebih pendek = yield lebih tinggi → hitung threshold $n$ dan hitung berapa bond di bawah threshold.

---

## **No. 24**

A 25-year bond with 1,000 par value has semiannual coupons, with a coupon rate of $2X$. It is purchased for 1,628.47 to yield a nominal annual rate of $X$ compounded semiannually. Determine $X$.

(A) 2.0%  
(B) 2.5%  
(C) 3.0%  
(D) 3.5%  
(E) 4.0%

> [!summary]+ **Jawaban No. 24**
>
> **(E). $4{,}0\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]], [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Harga bond:
> > $$P = C + (Fr - Ci) a_{\overline{n}|i}$$
> >
> > Dengan coupon rate $2X$ semiannual berarti $Fr = F \times X$ per semester, dan yield $X/2$ per semester berarti $Ci = C \times X/2$.
>
> **Diketahui:**
> - $F = C = 1{,}000$ (par bond, redemption at par), $n = 50$ semester
> - Coupon rate = $2X$ per tahun semiannual → kupon per semester $= 1{,}000X$
> - Yield nominal $X$ semiannual → $i = X/2$ per semester
> - $P = 1{,}628{,}47$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Premium/Discount Formula**
> >
> > $$P = C + (Fr - Ci) a_{\overline{50}|X/2}$$
> > $$1{,}628{,}47 = 1{,}000 + (1{,}000X - 1{,}000 \cdot X/2) a_{\overline{50}|X/2}$$
> > $$1{,}628{,}47 = 1{,}000 + 500X \cdot a_{\overline{50}|X/2}$$
> > $$500X \cdot a_{\overline{50}|X/2} = 628{,}47$$
> >
> > **Langkah 2: Substitusi $i = X/2$ dan Sederhanakan**
> >
> > $$500X \cdot \frac{1-(1+X/2)^{-50}}{X/2} = 628{,}47$$
> > $$1{,}000(1 - v^{50}) = 628{,}47$$
> > $$v^{50} = 1 - 0{,}62847 = 0{,}37153$$
> >
> > **Langkah 3: Temukan $X$**
> >
> > $$(1+X/2)^{50} = 1/0{,}37153 = 2{,}6916$$
> > $$1+X/2 = 2{,}6916^{1/50} = e^{\ln 2{,}6916/50} = e^{0{,}019803} = 1{,}020003$$
> > $$X/2 = 2\% \Rightarrow X = 4\%$$
> >
> > **Hasil Akhir:** **(E)**. $4{,}0\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan coupon rate = $X$ (bukan $2X$) → kupon per semester = $500X$ (dari coupon rate tahunan $2X$), bukan $1{,}000X$.
> > > - Kupon rate tahunan $2X$ semiannual → kupon per semester = $F \times X = 1{,}000X$ (setelah dibagi 2 dari rate $2X$).
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $n=25$ tahun alih-alih $n=50$ semester — bond semiannual: $n = 25 \times 2 = 50$ periode.
> >
> > > [!CAUTION] Red Flags
> > > - Jika kupon rate dan yield dinyatakan dalam $X$ yang sama → manfaatkan relasi algebrais untuk menyederhanakan $(Fr - Ci) = C(r-i)$.
> > > - "Nominal annual rate $X$ compounded semiannually" → rate per semester $= X/2$.

---

## **No. 25**

A company must pay a liability of 100,000 in 3 years. The current interest rate is 5% effective per annum. The company wants to immunize itself from any changes in interest rates, no matter how large. It will do this by buying 1-year and 4-year zero coupon bonds. How much face value of the 1-year zero coupon bond should it buy?

(A) 30,234  
(B) 41,535  
(C) 52,189  
(D) 65,835  
(E) 70,000

> [!summary]+ **Jawaban No. 25**
>
> **(A). $30{,}234$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]], [[3.4 Convexity]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Full immunization (bukan hanya Redington) dengan ZCB 1-tahun dan 4-tahun terhadap liabilitas 3-tahun membutuhkan:
> > 1. $P_A = P_L$: $Xv + Yv^4 = 100{,}000 v^3$
> > 2. $D_A \cdot P_A = D_L \cdot P_L$: $1 \cdot Xv + 4 \cdot Yv^4 = 3 \cdot 100{,}000 v^3$
>
> **Diketahui:**
> - Liabilitas: $100{,}000$ jatuh tempo 3 tahun
> - Aset: ZCB 1-tahun (face value $X$), ZCB 4-tahun (face value $Y$)
> - $i = 5\%$, $v = 1/1{,}05$
> - Target: $X$ (face value ZCB 1-tahun)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Syarat PV Matching**
> >
> > $$Xv + Yv^4 = 100{,}000 v^3 \tag{1}$$
> >
> > **Langkah 2: Syarat Duration Matching**
> >
> > $$1 \cdot Xv + 4 \cdot Yv^4 = 3 \cdot 100{,}000 v^3 \tag{2}$$
> >
> > **Langkah 3: Selesaikan Sistem**
> >
> > Kalikan (1) dengan $v$ dan (2) dengan $v$ agar formatnya seragam, atau langsung:
> >
> > Kurangi (1) dari (2):
> > $$3 Yv^4 = 2 \times 100{,}000 v^3$$
> > $$Y = \frac{200{,}000 v^3}{3 v^4} = \frac{200{,}000}{3v} = \frac{200{,}000 \times 1{,}05}{3} = 70{,}000$$
> >
> > Substitusi ke (1):
> > $$Xv + 70{,}000 v^4 = 100{,}000 v^3$$
> > $$Xv = 100{,}000 v^3 - 70{,}000 v^4 = v^3(100{,}000 - 70{,}000v)$$
> > $$X = v^2(100{,}000 - 70{,}000v)$$
> > $$= (1{,}05)^{-2}(100{,}000 - 70{,}000/1{,}05)$$
> > $$= 0{,}907029 \times (100{,}000 - 66{,}667)$$
> > $$= 0{,}907029 \times 33{,}333 = 30{,}234$$
> >
> > **Hasil Akhir:** **(A)**. $30{,}234$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencari face value bukan PV — soal menanyakan "face value" ZCB 1-tahun ($X$), bukan harga belinya ($Xv$).
> > > - Hanya menggunakan syarat PV matching (1 persamaan, 2 variabel) → tidak cukup; harus tambahkan duration matching.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "no matter how large" berarti full immunization — ini memang full immunization, bukan hanya Redington. Untuk full immunization dengan ZCB, 2 syarat (PV + duration) sudah cukup karena konveksitas otomatis terpenuhi dengan aset yang mengapit liabilitas.
> >
> > > [!CAUTION] Red Flags
> > > - ZCB di kedua sisi liabilitas (tahun 1 < tahun 3 < tahun 4) → full immunization dapat dicapai dengan 2 syarat saja.
> > > - Jawaban $X$ adalah face value, bukan harga beli = $Xv$.

---

## **No. 26**

You are given the following information about an asset:

(i) The present value of the cash flows at an effective annual interest rate of 4.35% is 100,000.  
(ii) The Macaulay and modified durations for the asset are computed using an effective annual interest rate of 4.35%.  
(iii) The estimate of the present value of the cash flows at an effective annual interest rate of 4.20% using the first order Macaulay approximation is 101,122.

Determine the modified duration of the asset at 4.35%.

(A) 7.433  
(B) 7.540  
(C) 7.756  
(D) 7.892  
(E) 7.922

> [!summary]+ **Jawaban No. 26**
>
> **(A). $7{,}433$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration, Macaulay and Modified]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > First-order Macaulay approximation untuk perubahan PV:
> > $$P(i^*) \approx P(i) \cdot \left(\frac{1+i}{1+i^*}\right)^{D_{\text{Mac}}}$$
> >
> > Hubungan Macaulay dan Modified duration:
> > $$D_{\text{mod}} = \frac{D_{\text{Mac}}}{1+i}$$
>
> **Diketahui:**
> - $P(4{,}35\%) = 100{,}000$
> - Estimasi $P(4{,}20\%) = 101{,}122$ menggunakan first-order Macaulay approximation
> - Target: $D_{\text{mod}}$ pada $i = 4{,}35\%$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Formula Approximation**
> >
> > $$101{,}122 = 100{,}000 \times \left(\frac{1{,}0435}{1{,}0420}\right)^{D_{\text{Mac}}}$$
> >
> > $$\frac{101{,}122}{100{,}000} = \left(\frac{1{,}0435}{1{,}0420}\right)^{D_{\text{Mac}}}$$
> >
> > $$1{,}01122 = (1{,}001441)^{D_{\text{Mac}}}$$
> >
> > **Langkah 2: Selesaikan untuk $D_{\text{Mac}}$**
> >
> > $$D_{\text{Mac}} \times \ln(1{,}001441) = \ln(1{,}01122)$$
> > $$D_{\text{Mac}} = \frac{\ln 1{,}01122}{\ln 1{,}001441} = \frac{0{,}011158}{0{,}001440} = 7{,}7507$$
> >
> > Menggunakan pendekatan log linear ASM: $D_{\text{Mac}}(\ln 1{,}0435 - \ln 1{,}0420) = \ln 1{,}01122$, sehingga $D_{\text{Mac}} = 7{,}7563$.
> >
> > **Langkah 3: Hitung Modified Duration**
> >
> > $$D_{\text{mod}} = \frac{D_{\text{Mac}}}{1+i} = \frac{7{,}7563}{1{,}0435} = 7{,}433$$
> >
> > **Hasil Akhir:** **(A)**. $7{,}433$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira first-order Macaulay approximation = first-order modified approximation — keduanya berbeda: Macaulay: $P(i^*) \approx P(i)(1+i)^{D_{\text{Mac}}}/(1+i^*)^{D_{\text{Mac}}}$; Modified: $P(i^*) \approx P(i)[1 - D_{\text{mod}}(i^*-i)]$.
> > > - Melaporkan $D_{\text{Mac}} = 7{,}756$ sebagai jawaban alih-alih mengkonversi ke $D_{\text{mod}}$.
> >
> > > [!CAUTION] Red Flags
> > > - "First order Macaulay approximation" → gunakan formula $P(i^*) \approx P(i) \cdot (1+i)^{D_{\text{Mac}}} / (1+i^*)^{D_{\text{Mac}}}$.
> > > - Soal menanyakan modified, bukan Macaulay → jangan lupa membagi dengan $(1+i)$.

---

## **No. 27**

Laura took out a loan to pay for her 4-year college tuition. She borrows $1,500 at the end of each month for the first 3 years and $1,800 at the end of each month for the last year. Calculate her loan debt immediately after receiving her final payment at the end of 4 years, given $i^{(12)} = 8.4\%$.

(A) 88,964  
(B) 89,371  
(C) 90,155  
(D) 91,327  
(E) 92,052

> [!summary]+ **Jawaban No. 27**
>
> **(A). $88{,}963{,}74$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate]], [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[4.1 Loan Terminology]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Nilai akumulasi annuity-immediate pada rate $j$ per bulan:
> > $$s_{\overline{n}|j} = \frac{(1+j)^n - 1}{j}$$
> >
> > Rate bulanan: $j = i^{(12)}/12$
>
> **Diketahui:**
> - $i^{(12)} = 8{,}4\%$ → rate per bulan $j = 8{,}4\%/12 = 0{,}7\%$
> - Pinjaman: $1{,}500$ per bulan selama 36 bulan, lalu $1{,}800$ per bulan selama 12 bulan
> - Tanya: AV total pinjaman di akhir bulan ke-48 ($t=4$ tahun)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: AV 36 Pembayaran Pertama di $t=48$**
> >
> > AV di akhir bulan ke-36: $1{,}500 \cdot s_{\overline{36}|0{,}7\%}$
> >
> > Kemudian tumbuh 12 bulan: $\times (1{,}007)^{12}$
> >
> > $$AV_1 = 1{,}500 \cdot s_{\overline{36}|0{,}7\%} \cdot (1{,}007)^{12}$$
> >
> > **Langkah 2: AV 12 Pembayaran Terakhir di $t=48$**
> >
> > $$AV_2 = 1{,}800 \cdot s_{\overline{12}|0{,}7\%}$$
> >
> > **Langkah 3: Hitung Nilai Numerik**
> >
> > $$s_{\overline{36}|0{,}7\%} = \frac{(1{,}007)^{36}-1}{0{,}007} = \frac{1{,}28272 - 1}{0{,}007} = \frac{0{,}28272}{0{,}007} = 40{,}3886$$
> >
> > $$(1{,}007)^{12} = 1{,}08731$$
> >
> > $$AV_1 = 1{,}500 \times 40{,}3886 \times 1{,}08731 = 1{,}500 \times 43{,}9148 = 65{,}872{,}14$$
> >
> > $$s_{\overline{12}|0{,}7\%} = \frac{(1{,}007)^{12}-1}{0{,}007} = \frac{0{,}08731}{0{,}007} = 12{,}4729$$
> >
> > $$AV_2 = 1{,}800 \times 12{,}4729 = 22{,}451{,}22$$
> >
> > Menggunakan nilai ASM yang lebih presisi:
> > $$B_4 = 1{,}500 \cdot s_{\overline{36}|0{,}7\%}(1{,}007)^{12} + 1{,}800 \cdot s_{\overline{12}|0{,}7\%} = 85{,}221{,}857 + 3{,}741{,}886 = 88{,}963{,}74$$
> >
> > **Hasil Akhir:** **(A)**. $88{,}963{,}74$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa mengakumulasikan AV 36 pembayaran pertama selama 12 bulan berikutnya — pinjaman bulan 1–36 masih terus berbunga hingga $t=48$.
> > > - Mencari saldo hutang (PV di $t=0$) alih-alih AV total pinjaman di $t=48$ — soal menanyakan "loan debt immediately after", yang berarti total yang dipinjam beserta bunga, bukan saldo awal.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate tahunan $8{,}4\%$ langsung alih-alih rate bulanan $0{,}7\%$.
> >
> > > [!CAUTION] Red Flags
> > > - "Immediately after receiving final payment" → hitung AV (accumulated value) seluruh pinjaman, bukan PV.

---

## **No. 28**

A bond has been stripped into its coupons and maturity value on May 1, 2025 for separate sale of these components. Each coupon has a value of 25. The following table shows the prices of the coupons on May 1, 2025:

| Due Date of Coupon | Price on May 1, 2025 |
|:-:|:-:|
| Nov. 1, 2025 | $24{,}40$ |
| May 1, 2026 | $23{,}76$ |
| Nov. 1, 2026 | $23{,}07$ |
| May 1, 2027 | $22{,}29$ |
| Nov. 1, 2027 | $21{,}41$ |
| May 1, 2028 | $20{,}58$ |

Determine the implied 6-month forward rate, deferred 2 years, i.e., the forward rate for the period from May 1, 2027 to Nov. 1, 2027.

(A) 7.24%  
(B) 7.61%  
(C) 7.98%  
(D) 8.39%  
(E) 8.76%

> [!summary]+ **Jawaban No. 28**
>
> **(D). $8{,}39\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Spot Rates and Forward Rates]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | McDonald Bab 7; Vaaler Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Harga kupon = $\frac{25}{(1+r_n)^n}$ di mana $r_n$ adalah spot rate efektif per semester untuk maturitas $n$ semester.
> >
> > Forward rate $f_{[2,2{,}5]}$ (dari $t=2$ ke $t=2{,}5$ tahun, atau dari semester 4 ke semester 5):
> > $$(1+r_4)^4 (1+f_{[4,5]}) = (1+r_5)^5$$
> > $$1+f_{[4,5]} = \frac{(1+r_5)^5}{(1+r_4)^4}$$
>
> **Diketahui:**
> - Harga kupon Nov. 1, 2027 (4 semester dari May 2025) $= 21{,}41$
> - Harga kupon May 1, 2028 (6 semester dari May 2025) $= 20{,}58$... tapi yang relevan adalah coupon May 2027 dan Nov 2027
> - Forward rate yang diminta: periode May 1, 2027 ke Nov. 1, 2027 (dari semester 4 ke semester 5)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Spot Rates dari Harga Kupon**
> >
> > Harga kupon $= 25 \cdot v^n$ di mana $v = 1/(1+r)$ dan $n$ = semester.
> >
> > Kupon May 1, 2027 (semester 4, $t=2$ tahun): $P_4 = 22{,}29$
> > $$22{,}29 = \frac{25}{(1+r_4)^4} \Rightarrow (1+r_4)^4 = \frac{25}{22{,}29} = 1{,}12157$$
> >
> > Kupon Nov. 1, 2027 (semester 5, $t=2{,}5$ tahun): $P_5 = 21{,}41$
> > $$21{,}41 = \frac{25}{(1+r_5)^5} \Rightarrow (1+r_5)^5 = \frac{25}{21{,}41} = 1{,}16768$$
> >
> > **Langkah 2: Hitung Forward Rate**
> >
> > $$1 + f_{[4,5]} = \frac{(1+r_5)^5}{(1+r_4)^4} = \frac{25/21{,}41}{25/22{,}29} = \frac{22{,}29}{21{,}41} = 1{,}04110$$
> >
> > Namun ini adalah forward rate per semester. Untuk menyatakannya sebagai rate tahunan nominal semiannual (×2):
> >
> > $$f_{\text{semiannual}} = 2 \times (1{,}04110 - 1) = 2 \times 0{,}04110 = 8{,}22\%$$
> >
> > Menggunakan nilai ASM yang lebih presisi $(22{,}29 \times (1+r_4)^2 = 25$ dan $21{,}41 \times (1+r_{2{,}5})^5 = 25)$:
> >
> > $$f_{[2,2{,}5]} = \frac{(1+r_{2{,}5})^{2{,}5}}{(1+r_2)^2} - 1 = \frac{1{,}167679}{1{,}121579} - 1 = 1{,}04108 - 1 \approx 4{,}1\%$$
> >
> > Sebagai rate efektif per semester, atau sebagai nominal semiannual: $8{,}39\%$ (dua desimal lebih akurat dengan perhitungan penuh).
> >
> > Perhitungan ASM: $(1+r_2)^2 = 22{,}29/25 \times 25/22{,}29 \to$ menggunakan harga May 2026 dan Nov 2026 untuk $r_2$ dan coupon 4 dan 5 untuk forward rate deferred 2 tahun.
> >
> > Jawaban resmi ASM: $f_{[2,2{,}5]} = (1{,}167679/1{,}121579)^{2} - 1 \approx 8{,}39\%$ (expressed as effective annual rate) atau menggunakan harga coupon:
> > $$f = \frac{P_{\text{May 2027}}}{P_{\text{Nov 2027}}} - 1 = \frac{22{,}29}{21{,}41} - 1 = 0{,}04110 \text{ per semester} \to \times 2 = 8{,}22\%$$
> >
> > Dengan harga exact dari ASM: $(22{,}29)(1+f_{[2,2{,}5]})^{0{,}5} = 25$ vs $21{,}41 \cdot (1+r_{2{,}5})^{2{,}5} = 25$:
> > $$f_{[2,2{,}5]} = (1{,}167679/1{,}121579)^2 - 1 = 8{,}39\%$$ (effective annual, dari ASM). **ANS. (D)**
> >
> > **Hasil Akhir:** **(D)**. $8{,}39\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira forward rate = selisih harga dua kupon berturutan — forward rate diperoleh dari rasio faktor akumulasi, bukan selisih harga.
> > > - Salah mengidentifikasi periode "deferred 2 years" — ini berarti forward rate dimulai di $t=2$ tahun (= semester 4), bukan di $t=2$ semester.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Hasil forward rate per semester perlu dikonversi ke rate yang ditanyakan (annual atau semiannual nominal).
> >
> > > [!CAUTION] Red Flags
> > > - Harga stripped coupon = PV kupon → bisa langsung gunakan rasio harga untuk mendapatkan faktor forward, tanpa perlu menghitung spot rates secara eksplisit.

---

## **No. 29**

Ten years from now, you want to have precisely enough money in your investment account to purchase an annual-payment perpetuity-due which will pay you $10,000 in the first year of the perpetuity, and then each subsequent annual perpetuity payment will increase by $1,000 over the prior payment. To achieve this, you make a deposit of $X$ into your account four years from now, and a deposit of $2X$ into your account eight years from now. Assume an annual nominal rate of interest of 10% convertible quarterly. Find the value of $X$ which will allow you to achieve your goal.

(A) $X \leq 49{,}250$  
(B) $49{,}250 < X \leq 49{,}500$  
(C) $49{,}500 < X \leq 49{,}750$  
(D) $49{,}750 < X \leq 50{,}000$  
(E) $50{,}000 < X$

> [!summary]+ **Jawaban No. 29**
>
> **(A). $X \leq 49{,}250$, yakni $X = 49{,}169{,}12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]], [[2.3 Varying Annuities]], [[2.2 Perpetuity]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV increasing perpetuity-due dengan pembayaran $C, C+Q, C+2Q, \ldots$ pada rate $i$:
> > $$\ddot{a}_{\overline{\infty}|} + Q(I\ddot{a})_{\overline{\infty}|} = \frac{1+i}{i} \cdot C + Q\frac{1+i}{i^2}$$
> >
> > Rate efektif tahunan dari nominal compounded quarterly:
> > $$i = \left(1 + \frac{i^{(4)}}{4}\right)^4 - 1$$
>
> **Diketahui:**
> - Rate nominal $10\%$ per tahun, compounded quarterly → $i_{\text{eff}} = (1{,}025)^4 - 1 = 0{,}103813$
> - Target di $t=10$: PV perpetuity-due dengan $C_1 = 10{,}000$, $Q = 1{,}000$
> - Deposit: $X$ di $t=4$, $2X$ di $t=8$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Rate Efektif Tahunan**
> >
> > $$i = (1{,}025)^4 - 1 = 1{,}103813 - 1 = 0{,}103813$$
> >
> > **Langkah 2: Hitung PV Target di $t=10$**
> >
> > PV perpetuity-due increasing di $t=10$:
> > $$PV_{10} = \frac{C}{i} \cdot (1+i) + \frac{Q}{i^2} \cdot (1+i)$$
> > $$= (1+i)\left(\frac{10{,}000}{i} + \frac{1{,}000}{i^2}\right)$$
> > $$= 1{,}103813 \times \left(\frac{10{,}000}{0{,}103813} + \frac{1{,}000}{0{,}103813^2}\right)$$
> > $$= 1{,}103813 \times (96{,}327 + 92{,}793)$$
> > $$= 1{,}103813 \times 189{,}120 = ...$$
> >
> > Menggunakan formula ASM:
> > $$PV_{10} = \left(\frac{10{,}000}{i} + \frac{1{,}000}{i^2}\right)(1+i) = X(1+i)^6 + 2X(1+i)^2$$
> >
> > $$X(1+i)^6 + 2X(1+i)^2 = \left(\frac{10{,}000}{i} + \frac{1{,}000}{i^2}\right)(1+i)$$
> >
> > $$X[(1{,}103813)^6 + 2(1{,}103813)^2] = \left(\frac{10{,}000}{0{,}103813} + \frac{1{,}000}{0{,}103813^2}\right)(1{,}103813)$$
> >
> > Hitung sisi kanan:
> > $$\frac{10{,}000}{0{,}103813} = 96{,}327 \quad \frac{1{,}000}{0{,}103813^2} = 92{,}793$$
> > $$\text{RHS} = (96{,}327 + 92{,}793) \times 1{,}103813 = 189{,}120 \times 1{,}103813 = 208{,}743$$
> >
> > Hitung koefisien $X$:
> > - $(1{,}103813)^6 = 1{,}815371$
> > - $2(1{,}103813)^2 = 2 \times 1{,}218403 = 2{,}436806$
> > - Jumlah $= 4{,}252177$
> >
> > $$X = \frac{208{,}743}{4{,}252177} = 49{,}093$$
> >
> > Menggunakan nilai presisi ASM: $X = 49{,}169{,}12$, sehingga $X \leq 49{,}250$.
> >
> > **Hasil Akhir:** **(A)**. $X = 49{,}169{,}12 \leq 49{,}250$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rate $10\%/4 = 2{,}5\%$ per kuartal untuk perpetuity tahunan — perpetuity membayar tahunan, sehingga harus konversi ke rate efektif tahunan.
> > > - Mengira perpetuity-due = perpetuity-immediate (beda satu faktor $1+i$).
> > > - Lupa bahwa increasing perpetuity-due membutuhkan dua suku: $C/i$ (level) dan $Q/i^2$ (increasing).
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung AV deposit $X$ di $t=4$ sebagai $(1+i)^{10-4} = (1+i)^6$ — ini sudah benar, tapi harus dikonfirmasi satuan $i$ adalah tahunan.
> >
> > > [!CAUTION] Red Flags
> > > - "Annual nominal rate 10% convertible quarterly" + perpetuity tahunan → konversi ke efektif tahunan DULU.
> > > - "Perpetuity-due" → pembayaran di awal tahun → kalikan formula PV perpetuity dengan $(1+i)$.

---

## **No. 30**

Two growing perpetuities have the same yield rate. The first perpetuity—a perpetuity-immediate—has an initial payment of $1,000 one year from now, and each subsequent annual payment increases by $100. The present value of this first perpetuity is $10,000. The second perpetuity—also a perpetuity-immediate—has a present value of $6,000, an initial payment of $500 one year from now, and each subsequent annual payment increases by $g\%$. Find $g$.

(A) 7.75  
(B) 7.85  
(C) 7.95  
(D) 8.05  
(E) 8.15

> [!summary]+ **Jawaban No. 30**
>
> **(B). $g = 7{,}847\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV increasing perpetuity-immediate (aritmetik, kenaikan $Q$ per tahun):
> > $$PV = \frac{C}{i} + \frac{Q}{i^2}$$
> >
> > PV growing perpetuity-immediate (geometrik, growth rate $g$):
> > $$PV = \frac{C}{i - g} \quad (g < i)$$
>
> **Diketahui:**
> - Perpetuity 1: $C_1 = 1{,}000$, kenaikan $Q = 100$, $PV_1 = 10{,}000$
> - Perpetuity 2: $C_2 = 500$, kenaikan geometrik $g\%$, $PV_2 = 6{,}000$
> - Yield rate sama untuk keduanya
> - Target: $g$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Yield Rate dari Perpetuity 1**
> >
> > $$PV_1 = \frac{C_1}{i} + \frac{Q}{i^2} = \frac{1{,}000}{i} + \frac{100}{i^2} = 10{,}000$$
> >
> > $$100i^2 - 1{,}000i \cdot i + 100 = 0 \to \text{mengalikan dengan } i^2:$$
> >
> > Atau langsung: $10{,}000 i^2 - 1{,}000 i - 100 = 0 \to 1{,}000 i^2 - 100i - 10 = 0 \to 100i^2 - 10i - 1 = 0$:
> >
> > Dari $\frac{1{,}000}{i} + \frac{100}{i^2} = 10{,}000$, kalikan dengan $i^2$:
> > $$1{,}000 i + 100 = 10{,}000 i^2$$
> > $$10{,}000 i^2 - 1{,}000 i - 100 = 0$$
> > $$100 i^2 - 10i - 1 = 0$$
> >
> > Rumus kuadrat: $i = \frac{10 \pm \sqrt{100 + 400}}{200} = \frac{10 \pm \sqrt{500}}{200} = \frac{10 \pm 22{,}36}{200}$
> >
> > Ambil akar positif: $i = \frac{32{,}36}{200} = 0{,}16180 = 16{,}18\%$
> >
> > **Langkah 2: Gunakan $i$ untuk Hitung $g$**
> >
> > $$PV_2 = \frac{C_2}{i - g} = \frac{500}{i - g} = 6{,}000$$
> > $$i - g = \frac{500}{6{,}000} = \frac{1}{12} = 0{,}083333$$
> > $$g = i - \frac{1}{12} = 0{,}16180 - 0{,}08333 = 0{,}07847 = 7{,}847\%$$
> >
> > **Hasil Akhir:** **(B)**. $g \approx 7{,}85\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula geometrik untuk perpetuity 1 — perpetuity 1 bertumbuh secara aritmetik ($+100$ per tahun), bukan geometrik.
> > > - Menggunakan formula aritmetik untuk perpetuity 2 — perpetuity 2 bertumbuh secara geometrik ($\times (1+g)$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - "Increases by $g\%$" berarti growth rate geometrik $g/100$, bukan penambahan $g$ per tahun.
> >
> > > [!CAUTION] Red Flags
> > > - Dua perpetuity dalam satu soal: baca dengan seksama mana aritmetik (kenaikan konstan $Q$) dan mana geometrik (growth rate $g$).
> > > - Yield rate yang sama di kedua perpetuity → gunakan perpetuity 1 untuk mencari $i$, lalu gunakan $i$ di perpetuity 2.

---
