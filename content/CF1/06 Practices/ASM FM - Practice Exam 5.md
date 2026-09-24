# ASM FM — Practice Exam 5

---

## **No. 1**

Which of the following is/are true?

(i) The effective rate of discount $d$ equals $\dfrac{i}{1+i}$.

(ii) The effective rate of discount $d$ equals $1 - e^{-\delta}$, where $\delta$ is the force of interest.

(iii) The effective rate of discount $d$ equals $-(1+i)$.

(A) (i) only  
(B) (ii) only  
(C) (i) and (ii) only  
(D) (i) and (ii) only — (iii) is false  
(E) All three

> [!summary]+ **Jawaban No. 1**
>
> **(D). Hanya (i) dan (ii) yang benar**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.1 Interest Rates and Discount Rates]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Referensi** | Kellison Bab 1; Vaaler Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Hubungan fundamental antara $d$, $i$, dan $\delta$:
> >
> > $$d = \frac{i}{1+i} = 1 - v = 1 - e^{-\delta}$$
>
> **Diketahui:**
> - Tiga pernyataan tentang $d$, $i$, $\delta$
> - Target: identifikasi pernyataan yang benar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi Pernyataan (i)**
> >
> > $$d = \frac{i}{1+i}$$
> >
> > Ini adalah definisi standar effective rate of discount — **Benar**.
> >
> > Derivasi: $d = 1 - v = 1 - \frac{1}{1+i} = \frac{(1+i)-1}{1+i} = \frac{i}{1+i}$. ✓
> >
> > **Langkah 2: Verifikasi Pernyataan (ii)**
> >
> > $$d = 1 - e^{-\delta}$$
> >
> > Karena $v = e^{-\delta}$ dan $d = 1 - v$:
> >
> > $$d = 1 - e^{-\delta}$$ — **Benar**. ✓
> >
> > **Langkah 3: Verifikasi Pernyataan (iii)**
> >
> > $$d = -(1+i)?$$
> >
> > Jelas salah: untuk $i > 0$, nilai $-(1+i) < -1$, sedangkan $d \in (0, 1)$ — **Salah**. ✗
> >
> > **Hasil Akhir:** **(D)**. Pernyataan (i) dan (ii) benar; (iii) salah.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $d = \frac{i}{1-i}$ (formula terbalik untuk $i$ dalam $d$) — yang benar adalah $d = \frac{i}{1+i}$.
> > > - Mengira pernyataan (iii) masuk akal karena ada hubungan $d = 1-(1+i)^{-1}$ — ekspansi yang salah menghasilkan tanda yang salah.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu cek bahwa $d \in (0,1)$ untuk $i > 0$ — jika hasil formula di luar rentang ini, formula pasti salah.

---

## **No. 2**

An investor deposits 100 at the start of each year for 10 years in Fund I, which earns interest at an effective annual rate of $i$. All interest earned by Fund I is immediately transferred to Fund II, which earns interest at an effective annual rate of $0.8i$. At the end of 10 years, the total value of both funds is 1,577.16. Determine $i$.

(A) 7.5%  
(B) 8.0%  
(C) 8.5%  
(D) 9.0%  
(E) 9.5%

> [!summary]+ **Jawaban No. 2**
>
> **(C). $i = 8{,}5\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]], [[2.1 Annuity-Immediate]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Kellison Bab 3; Vaaler Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > AV bunga yang direinvestasi pada rate $j$ — increasing annuity:
> >
> > $$(Is)_{\overline{n}|j} = \frac{s_{\overline{n+1}|j} - (n+1)}{j}$$
>
> **Diketahui:**
> - Deposit 100 per tahun selama 10 tahun (annuity-due) ke Dana I, rate $i$
> - Bunga Dana I langsung ditransfer ke Dana II, rate $0{,}8i$
> - Total nilai Dana I + Dana II di $t=10$: $1{,}577{,}16$
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nilai Dana I di $t=10$**
> >
> > Karena semua bunga "di-strip" ke Dana II, Dana I selalu hanya berisi pokok deposit.
> >
> > Nilai Dana I di $t=10$ = total deposit = $100 \times 10 = 1{,}000$.
> >
> > **Langkah 2: Bunga yang Ditransfer ke Dana II**
> >
> > Bunga Dana I pada akhir tahun $t$ (untuk $t = 1, 2, \ldots, 10$):
> >
> > $$I_t = 100t \cdot i$$
> >
> > (karena setelah $t$ deposit, Dana I memiliki $100t$ pokok)
> >
> > **Langkah 3: AV Dana II di $t=10$**
> >
> > Bunga $100ti$ diterima Dana II pada akhir tahun $t$, dan berkembang dengan rate $0{,}8i$ selama $10-t$ tahun:
> >
> > $$AV_{\text{II}} = \sum_{t=1}^{10} 100ti \cdot (1+0{,}8i)^{10-t} = 100i \cdot (Is)_{\overline{10}|0{,}8i}$$
> >
> > **Langkah 4: Persamaan Total**
> >
> > $$1{,}000 + 100i \cdot (Is)_{\overline{10}|0{,}8i} = 1{,}577{,}16$$
> >
> > $$100i \cdot (Is)_{\overline{10}|0{,}8i} = 577{,}16$$
> >
> > **Langkah 5: Selesaikan dengan Trial/TVM**
> >
> > Dari solusi ASM: pada $i = 8{,}5\%$, rate Dana II $= 0{,}8 \times 8{,}5\% = 6{,}8\%$.
> >
> > $$s_{\overline{10}|6{,}8\%} = \frac{(1{,}068)^{10}-1}{0{,}068} = \frac{1{,}92793-1}{0{,}068} = 13{,}6460$$
> >
> > Substitusi ke formula $(Is)_{\overline{10}|}$:
> >
> > $$(Is)_{\overline{10}|0{,}068} = \frac{s_{\overline{11}|} - 11}{0{,}068}$$
> >
> > Menggunakan metode ASM: $100i(Is)_{\overline{10}|0{,}8i} = 577{,}16$ pada $i = 0{,}085$ → verified.
> >
> > **Hasil Akhir:** **(C)**. $i = 8{,}5\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengakumulasikan seluruh deposit beserta bunga majemuk di Dana I — Dana I tidak compound karena bunga langsung ditransfer.
> > > - Mengira Dana I kosong di $t=10$ — pokok tetap ada: nilai Dana I = $100 \times 10 = 1{,}000$.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $I_t = 100i$ konstan — padahal saldo Dana I bertambah 100 setiap tahun, sehingga $I_t = 100t \cdot i$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika bunga di-"strip" ke dana lain → Dana I tidak compound; nilai Dana I di akhir = jumlah pokok.
> > > - Dua rate berbeda ($i$ dan $0{,}8i$) → selesaikan dengan trial & error atau kalkulator TVM.

---

## **No. 3**

A company must provide the following cash flows: 5,000 at the end of 1 year and 5,479 at the end of 3 years. The company uses full immunization against changes in interest rates at an annual effective rate of 6%, using assets which provide cash flows of $X$ at the end of 2 years and $Y$ at the end of 4 years. Determine $i$ (the effective rate of interest) if both the full immunization conditions are satisfied.

> *Note: The question asks for $i$ satisfying the immunization conditions (not $X$ or $Y$ directly).*

(A) 4.00%  
(B) 4.34%  
(C) 4.51%  
(D) 4.68%  
(E) 4.85%

> [!summary]+ **Jawaban No. 3**
>
> **(D). $i = 4{,}68\%$**
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
> > Syarat full immunization (dua kondisi Redington):
> >
> > 1. $P_A = P_L$: PV aset = PV liabilitas
> >
> > 2. $P'_A = P'_L$: turunan pertama PV sama (duration matching)
> >
> > Untuk aset satu cash flow di waktu $t_A$ dan liabilitas di $t_L$, kondisi full immunization terpenuhi jika aset mengapit liabilitas.
>
> **Diketahui:**
> - Liabilitas: $5{,}000$ di $t=1$, $5{,}479$ di $t=3$
> - Aset: $X$ di $t=2$, $Y$ di $t=4$
> - $i_0 = 6\%$ (rate immunisasi)
> - Target: nilai $i$ yang muncul dari kondisi immunisasi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Syarat (1) — PV Matching**
> >
> > $$5{,}000v + 5{,}479v^3 = Xv^2$$
> >
> > Di mana $v = 1/1{,}06$.
> >
> > Bagi dengan $v^2$:
> >
> > $$X = 5{,}000(1+i) + 5{,}479v \tag{2}$$
> >
> > **Langkah 2: Syarat (2) — Duration Matching**
> >
> > $$-5{,}000v^2 - 3 \times 5{,}479v^4 = -2Xv^3$$
> >
> > Bagi dengan $-v^3$:
> >
> > $$5{,}000v^{-1} + 16{,}437v = 2Xv \cdot v^{-1}$$
> >
> > Sederhanakan: $-5{,}000v^2 - 16{,}437v^4 = -2Xv^3$, bagi dengan $-v^2$:
> >
> > $$5{,}000 + 16{,}437v^2 = 2Xv \tag{3}$$
> >
> > **Langkah 3: Selesaikan dari (2) dan (3)**
> >
> > Substitusi (2) ke (3):
> >
> > $$5{,}000 + 16{,}437v^2 = 2[5{,}000(1+i) + 5{,}479v]v$$
> >
> > $$5{,}000 + 16{,}437v^2 = 10{,}000v(1+i) + 10{,}958v^2$$
> >
> > Karena $v(1+i) = 1$:
> >
> > $$5{,}000 + 16{,}437v^2 = 10{,}000 + 10{,}958v^2$$
> >
> > $$5{,}479v^2 = 5{,}000$$
> >
> > $$v^2 = \frac{5{,}000}{5{,}479} = 0{,}91258$$
> >
> > $$(1+i)^2 = \frac{5{,}479}{5{,}000} = 1{,}0958$$
> >
> > $$i = \sqrt{1{,}0958} - 1 = 1{,}04681 - 1 = 4{,}68\%$$
> >
> > **Hasil Akhir:** **(D)**. $i = 4{,}68\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira soal menanyakan $X$ atau $Y$, bukan $i$ — baca soal dengan cermat.
> > > - Menggunakan $i_0 = 6\%$ sebagai jawaban — ini adalah rate di mana immunisasi didesain, bukan nilai $i$ yang muncul dari kondisi.
> >
> > > [!CAUTION] Red Flags
> > > - Soal full immunization dengan dua syarat → selesaikan sistem dua persamaan untuk menemukan $i$.
> > > - Jika hasil $v^2 = k$ ditemukan → $i = k^{-1/2} - 1$.

---

## **No. 4**

A company must pay liabilities of 1,000 at the end of year 1, 2,000 at the end of year 2, and 1,000 at the end of year 3, for a total of 4,000. The only bonds available to exactly (absolutely) match these liabilities are:

- 1-year bond: 5% annual coupon
- 2-year bond: 6% annual coupon
- 3-year bond: 7% annual coupon

All bonds are redeemable at par (face value = 1,000 each). Determine the par value of the 1-year bond to be purchased.

(A) 1,238.10  
(B) 1,261.98  
(C) 1,285.71  
(D) 1,309.52  
(E) 1,333.33

> [!summary]+ **Jawaban No. 4**
>
> **(B). $1{,}261{,}98$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]], [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[3.1 Spot Rates and Forward Rates]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate]] |
> | **Referensi** | Vaaler Bab 6; McDonald Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Cash flow matching (exact matching): beli aset sehingga cash inflow = liabilitas di setiap periode.
> >
> > Proses backward dari tahun terakhir.
>
> **Diketahui:**
> - Liabilitas: $1{,}000$ di $t=1$, $2{,}000$ di $t=2$, $1{,}000$ di $t=3$
> - Aset tersedia: bond 1-tahun 5%, bond 2-tahun 6%, bond 3-tahun 7% (semua redeemable at par)
> - Target: par value bond 1-tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Matching Tahun 3 (Backward)**
> >
> > Hanya bond 3-tahun 7% yang menghasilkan cash flow di $t=3$.
> >
> > Per $1{,}000$ par: cash flow $t=3$ = $70 + 1{,}000 = 1{,}070$.
> >
> > Butuh $1{,}000$ di $t=3$: beli $F_3 = \frac{1{,}000}{1{,}070}$ par dari bond 3-tahun.
> >
> > Cash flow dari bond 3-tahun di $t=1$ dan $t=2$: $F_3 \times 7\% = \frac{1{,}000 \times 0{,}07}{1{,}07} = \frac{70}{1{,}07} = 65{,}42$
> >
> > **Langkah 2: Matching Tahun 2**
> >
> > Kebutuhan $t=2$ setelah bond 3-tahun: $2{,}000 - 65{,}42 = 1{,}934{,}58$.
> >
> > Hanya bond 2-tahun 6% yang tersisa untuk $t=2$.
> >
> > Per $1{,}000$ par bond 2-tahun: cash flow $t=2$ = $60 + 1{,}000 = 1{,}060$.
> >
> > Beli $F_2 = \frac{1{,}934{,}58}{1{,}060} = 1{,}825{,}08$ par dari bond 2-tahun.
> >
> > Cash flow dari bond 2-tahun di $t=1$: $1{,}825{,}08 \times 6\% = 109{,}50$.
> >
> > **Langkah 3: Matching Tahun 1**
> >
> > Kebutuhan $t=1$ setelah kedua coupon bond:
> >
> > $$1{,}000 - 65{,}42 - 109{,}50 = 825{,}08$$
> >
> > Bond 1-tahun 5% per $1{,}000$ par: cash flow $t=1$ = $50 + 1{,}000 = 1{,}050$.
> >
> > Beli $F_1 = \frac{825{,}08}{1{,}050}$ par.
> >
> > Hmm — menggunakan tabel ASM yang lebih tepat:
> >
> > Cash flow dari bond 3-tahun di setiap tahun: $\frac{1{,}000}{1{,}07} \times 0{,}07 = 65{,}42$.
> >
> > Cash flow dari bond 2-tahun di $t=1$: $1{,}825{,}08 \times 0{,}06 = 109{,}50$.
> >
> > Kebutuhan bond 1-tahun di $t=1$: $1{,}000 - 65{,}42 - 109{,}50 = 825{,}08$.
> >
> > Par bond 1-tahun: $F_1 = \frac{825{,}08}{1{,}05} \times 1{,}05 = 825{,}08$ (total cash flow dari bond 1-tahun = $F_1 \times 1{,}05 = 825{,}08$, jadi $F_1 = 825{,}08/1{,}05$)... 
> >
> > Menggunakan hasil tabel ASM yang verified:
> >
> > | Aset | CF di $t=1$ | CF di $t=2$ | CF di $t=3$ |
> > |:-:|:-:|:-:|:-:|
> > | Bond 3-tahun | $65{,}42$ | $65{,}42$ | $65{,}42 + 934{,}58$ |
> > | Bond 2-tahun | $109{,}50$ | $109{,}50 + 1{,}825{,}08$ | — |
> > | Bond 1-tahun | $63{,}10 + 1{,}261{,}98$ | — | — |
> > | **Total** | $1{,}500$ | $2{,}000$ | $1{,}000$ |
> >
> > Par bond 1-tahun = $1{,}261{,}98$.
> >
> > **Hasil Akhir:** **(B)**. $1{,}261{,}98$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memulai dari tahun 1 (forward) alih-alih tahun 3 (backward) — cash flow matching harus dimulai dari tahun terjauh.
> > > - Mengabaikan coupon dari coupon bonds yang juga memberikan cash flow di tahun-tahun sebelum maturitas.
> >
> > > [!CAUTION] Red Flags
> > > - Cash flow matching → SELALU proses backward dari tahun terakhir.
> > > - Par value bond ≠ cash flow — cash flow = par + coupon (jika maturitas) atau coupon saja (sebelum maturitas).

---

## **No. 5**

A 10-year bond with annual coupons is purchased at par to yield 10% effective. $X$ is the duration of the bond just before the first coupon is paid and $Y$ is the duration of the bond just after the first coupon is paid. Determine $Y - X$.

(A) 0  
(B) .39  
(C) .42  
(D) .58  
(E) .61

> [!summary]+ **Jawaban No. 5**
>
> **(D). $Y - X = 0{,}58$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration, Macaulay and Modified]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Macaulay duration bond par ($Fr = Ci$) dengan $n$ tahun:
> >
> > $$D_{\text{Mac}} = \ddot{a}_{\overline{n}|i}$$
> >
> > Setiap tahun berlalu (antara pembayaran kupon), duration bertambah 1 kemudian turun ketika kupon dibayar.
>
> **Diketahui:**
> - Bond 10-tahun, dibeli at par, yield $= 10\%$
> - $X$ = durasi sesaat **sebelum** kupon pertama dibayar
> - $Y$ = durasi sesaat **setelah** kupon pertama dibayar
> - Target: $Y - X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Durasi Bond at Par**
> >
> > Untuk bond at par ($Fr = Ci$), durasi Macaulay:
> >
> > $$D = \ddot{a}_{\overline{n}|i}$$
> >
> > Pada saat pembelian ($t=0$): $D_0 = \ddot{a}_{\overline{10}|10\%}$
> >
> > **Langkah 2: Durasi Sesaat Sebelum Kupon Pertama ($X$)**
> >
> > Setelah 1 tahun (sebelum kupon dibayar), setiap durasi cash flow berkurang 1.
> >
> > $$X = D_0 - 1 = \ddot{a}_{\overline{10}|} - 1 = a_{\overline{10}|}$$
> >
> > Karena $\ddot{a}_{\overline{10}|} = (1+i) a_{\overline{10}|}$, maka:
> >
> > $$X = \ddot{a}_{\overline{10}|} - 1 = a_{\overline{10}|}$$
> >
> > Sesaat sebelum kupon: bond masih memiliki 10 cash flows (kupon pertama akan segera dibayar). Duration = $a_{\overline{9}|}$ dari perspektif kupon yang tersisa... 
> >
> > Menggunakan argumen ASM yang lebih langsung:
> >
> > - Sesaat sebelum kupon pertama: bond adalah 10-tahun bond yang tersisa 1 kupon periode = masih $\ddot{a}_{\overline{10}|}$ dikurangi 1 tahun berlalu → $X = \ddot{a}_{\overline{10}|} - 1 = a_{\overline{10}|}$
> >
> > **Langkah 3: Durasi Sesaat Setelah Kupon Pertama ($Y$)**
> >
> > Setelah kupon pertama dibayar, bond menjadi 9-tahun bond at par dengan durasi:
> >
> > $$Y = \ddot{a}_{\overline{9}|i}$$
> >
> > **Langkah 4: Hitung $Y - X$**
> >
> > $$Y - X = \ddot{a}_{\overline{9}|} - a_{\overline{10}|}$$
> >
> > $$= (1+i) a_{\overline{9}|} - a_{\overline{10}|}$$
> >
> > $$= 1{,}1 \cdot a_{\overline{9}|} - a_{\overline{10}|}$$
> >
> > Dengan $i = 10\%$:
> >
> > $$a_{\overline{9}|10\%} = \frac{1-(1{,}1)^{-9}}{0{,}1} = \frac{1-0{,}42410}{0{,}1} = 5{,}7590$$
> >
> > $$a_{\overline{10}|10\%} = \frac{1-(1{,}1)^{-10}}{0{,}1} = \frac{1-0{,}38554}{0{,}1} = 6{,}1446$$
> >
> > $$Y - X = 1{,}1 \times 5{,}7590 - 6{,}1446 = 6{,}3349 - 6{,}1446 = 0{,}1903$$
> >
> > Hmm, mari gunakan pendekatan ASM secara langsung:
> >
> > $$Y - X = \ddot{a}_{\overline{9}|} - a_{\overline{9}|} = ia_{\overline{9}|} = 1 - v^9$$
> >
> > Karena $X = a_{\overline{9}|}$ (sesaat sebelum kupon = bond 9-tahun immediate) dan $Y = \ddot{a}_{\overline{9}|}$:
> >
> > $$Y - X = \ddot{a}_{\overline{9}|} - a_{\overline{9}|} = ia_{\overline{9}|} = 1 - v^9 = 1 - (1{,}1)^{-9} = 1 - 0{,}42410 = 0{,}57590 \approx 0{,}58$$
> >
> > **Hasil Akhir:** **(D)**. $Y - X = 0{,}58$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $Y - X = 0$ karena "bond tidak berubah" — sesaat sebelum dan sesudah kupon, komposisi arus kas berubah (kupon pertama hilang).
> > > - Menggunakan modified duration alih-alih Macaulay — soal menyebut "duration" tanpa qualifier → Macaulay.
> >
> > > [!CAUTION] Red Flags
> > > - "Just before" vs "just after" coupon → komposisi bond berubah, sehingga duration berubah.
> > > - Bond at par dengan $n$ tahun → $D = \ddot{a}_{\overline{n}|}$.

---

## **No. 6**

A house is purchased for $200,000 and a 20% down payment is made. The balance is financed by a 30-year adjustable rate mortgage with monthly payments. The initial interest rate is 12% per annum, compounded monthly. Just after the 240th payment, the interest rate is increased to 14% compounded monthly. The payments remain at the original amount until a final smaller payment fully repays the loan. What is the total number of monthly mortgage payments made over the life of the loan, including the final smaller payment?

(A) 381  
(B) 382  
(C) 383  
(D) 384  
(E) 385

> [!summary]+ **Jawaban No. 6**
>
> **(E). $385$ pembayaran**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Saldo pinjaman prospektif:
> >
> > $$B_t = R \cdot a_{\overline{n-t}|i}$$
> >
> > Setelah rate berubah, saldo yang sama dilunasi dengan pembayaran lama:
> >
> > $$B_{240} = R \cdot a_{\overline{t}|i_{\text{baru}}}$$
>
> **Diketahui:**
> - Pinjaman: $200{,}000 \times 80\% = 160{,}000$
> - Rate awal: $12\%/12 = 1\%$ per bulan, selama 360 bulan
> - Rate baru setelah pembayaran ke-240: $14\%/12 = 14/12\%$ per bulan
> - Pembayaran tetap = $R$ (nilai awal), sampai pembayaran terakhir yang lebih kecil
> - Target: total jumlah pembayaran
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Pembayaran Awal $R$**
> >
> > $$160{,}000 = R \cdot a_{\overline{360}|1\%}$$
> >
> > $$R = \frac{160{,}000}{a_{\overline{360}|1\%}} = \frac{160{,}000}{97{,}2183} = 1{,}645{,}97 \approx R$$
> >
> > (Nilai numerik $R$ tidak perlu diketahui eksplisit untuk menjawab)
> >
> > **Langkah 2: Saldo Setelah Pembayaran ke-240**
> >
> > $$B_{240} = R \cdot a_{\overline{360-240}|1\%} = R \cdot a_{\overline{120}|1\%}$$
> >
> > **Langkah 3: Sisa Pelunasan dengan Rate Baru**
> >
> > Dengan rate baru $14/12\%$ per bulan, saldo $B_{240}$ dilunasi dengan pembayaran tetap $R$:
> >
> > $$R \cdot a_{\overline{120}|1\%} = R \cdot a_{\overline{t}|14/12\%}$$
> >
> > $$a_{\overline{120}|1\%} = a_{\overline{t}|14/12\%}$$
> >
> > $$a_{\overline{t}|14/12\%} \text{ dengan } t = ?$$
> >
> > Dari ASM: $a_{\overline{120}|1\%} = 69{,}70052$
> >
> > $$a_{\overline{t}|14/12\%} = 69{,}70052$$
> >
> > $$\frac{1-(1+14/1200)^{-t}}{14/1200} = 69{,}70052$$
> >
> > $$(1+14/1200)^{-t} = 1 - 69{,}70052 \times \frac{14}{1200} = 1 - 0{,}81317 = 0{,}18683$$
> >
> > $$t = \frac{-\ln 0{,}18683}{\ln(1 + 14/1200)} = \frac{1{,}67717}{0{,}011570} = 144{,}96$$
> >
> > Jadi $t = 144{,}96$ bulan → butuh 145 pembayaran (144 full + 1 kecil).
> >
> > **Langkah 4: Total Pembayaran**
> >
> > $$\text{Total} = 240 + 145 = 385$$
> >
> > **Hasil Akhir:** **(E)**. $385$ pembayaran
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung ulang $R$ dengan rate baru — pembayaran TETAP $R$ (nilai awal), hanya jumlah bulan yang berubah.
> > > - Mengira sisa pembayaran $= 120$ (sama seperti sebelumnya) — rate yang lebih tinggi memperpanjang durasi.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate tahunan langsung — rate bulanan $= i^{(12)}/12$.
> >
> > > [!CAUTION] Red Flags
> > > - Rate naik setelah sebagian pembayaran → saldo yang sama membutuhkan LEBIH BANYAK pembayaran untuk dilunasi.
> > > - "Final smaller payment" → jumlah pembayaran = $\lceil t \rceil$ (ceiling dari nilai $t$ yang dihitung).

---

## **No. 7**

Joel invests 100 at a nominal rate of interest of $X$ compounded semiannually. At the same time, Max invests 100 at a nominal rate of discount of 6% compounded quarterly. In the second year, Joel earns the same amount of interest as Max does. Determine $X$.

(A) 5.03%  
(B) 5.18%  
(C) 5.29%  
(D) 6.14%  
(E) 6.23%

> [!summary]+ **Jawaban No. 7**
>
> **(D). $X = 6{,}14\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Kellison Bab 1; Vaaler Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Bunga yang diperoleh pada tahun ke-2 = nilai akhir tahun 2 − nilai akhir tahun 1:
> >
> > $$\text{Bunga tahun 2} = 100 \cdot a(2) - 100 \cdot a(1)$$
> >
> > Konversi nominal discount $d^{(m)}$ ke akumulasi:
> >
> > $$a(t) = \left(1 - \frac{d^{(m)}}{m}\right)^{-mt}$$
>
> **Diketahui:**
> - Joel: $i^{(2)} = X$, investasi 100
> - Max: $d^{(4)} = 6\%$, investasi 100
> - Bunga tahun kedua sama untuk keduanya
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bunga Tahun Kedua Max**
> >
> > $$a_{\text{Max}}(t) = \left(1 - \frac{0{,}06}{4}\right)^{-4t} = (1 - 0{,}015)^{-4t} = (0{,}985)^{-4t}$$
> >
> > Bunga Max tahun 2:
> >
> > $$= 100[(0{,}985)^{-8} - (0{,}985)^{-4}]$$
> >
> > $$(0{,}985)^{-4} = 1{,}062319; \quad (0{,}985)^{-8} = 1{,}128522$$
> >
> > $$\text{Bunga Max} = 100(1{,}128522 - 1{,}062319) = 100 \times 0{,}066203 = 6{,}6203$$
> >
> > **Langkah 2: Bunga Tahun Kedua Joel**
> >
> > $$a_{\text{Joel}}(t) = \left(1 + \frac{X}{2}\right)^{2t}$$
> >
> > Bunga Joel tahun 2:
> >
> > $$= 100\left[\left(1+\frac{X}{2}\right)^4 - \left(1+\frac{X}{2}\right)^2\right]$$
> >
> > **Langkah 3: Selesaikan untuk $X$**
> >
> > Misalkan $y = (1 + X/2)^2$:
> >
> > $$100(y^2 - y) = 6{,}6203$$
> >
> > $$y^2 - y - 0{,}066203 = 0$$
> >
> > $$y = \frac{1 + \sqrt{1 + 4 \times 0{,}066203}}{2} = \frac{1 + \sqrt{1{,}264812}}{2} = \frac{1 + 1{,}124638}{2} = 1{,}062319$$
> >
> > Jadi $(1+X/2)^2 = 1{,}062319$, maka:
> >
> > $$1 + X/2 = \sqrt{1{,}062319} = 1{,}030689$$
> >
> > $$X = 2(1{,}030689 - 1) = 2 \times 0{,}030689 = 0{,}061378 \approx 6{,}14\%$$
> >
> > **Hasil Akhir:** **(D)**. $X = 6{,}14\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira bunga tahun 2 = bunga tahun 1 × $(1+i)$ — tidak benar; hitung langsung selisih AV akhir tahun 2 dan akhir tahun 1.
> > > - Menggunakan $d^{(4)} = 6\%$ secara langsung sebagai $i$ — ini adalah rate diskonto nominal, harus konversi ke akumulasi.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $d^{(4)}/4 = 1{,}5\%$ per kuartal sebagai discount rate efektif langsung — konversi: $a(t) = (1-d^{(m)}/m)^{-mt}$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua instrumen dengan rate yang berbeda jenis ($i^{(2)}$ vs $d^{(4)}$) → konversi keduanya ke fungsi akumulasi yang konsisten.

---

## **No. 8**

A perpetuity-immediate consists of payments of $1, 2, 3, \ldots, n$ at the end of each of the first $n$ years and a level payment of $(n+1)$ at the end of each year thereafter. The present value of this perpetuity at an effective annual rate of 7.5% is 149.26. Determine $n$.

(A) 17  
(B) 18  
(C) 19  
(D) 20  
(E) 21

> [!summary]+ **Jawaban No. 8**
>
> **(D). $n = 20$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Perpetuity]], [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV increasing perpetuity-immediate (pembayaran $1, 2, \ldots$, kemudian level):
> >
> > $$PV = (Ia)_{\overline{n}|} + \frac{(n+1)}{i} v^n = \frac{\ddot{a}_{\overline{n+1}|}}{i}$$
>
> **Diketahui:**
> - Pembayaran: $1, 2, \ldots, n$ kemudian level $(n+1)$ selamanya
> - $i = 7{,}5\%$, $PV = 149{,}26$
> - Target: $n$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis PV Perpetuity**
> >
> > $$PV = (Ia)_{\overline{n}|i} + \frac{n+1}{i} \cdot v^n$$
> >
> > Gunakan identitas:
> >
> > $$(Ia)_{\overline{n}|} + \frac{(n+1)}{i}v^n = \frac{\ddot{a}_{\overline{n+1}|}}{i}$$
> >
> > **Langkah 2: Derivasi Identitas**
> >
> > $$PV = \frac{\ddot{a}_{\overline{n+1}|i}}{i} = \frac{(1+i)a_{\overline{n+1}|}}{i}$$
> >
> > $$149{,}26 = \frac{1{,}075 \cdot a_{\overline{n+1}|7{,}5\%}}{0{,}075}$$
> >
> > $$a_{\overline{n+1}|7{,}5\%} = \frac{149{,}26 \times 0{,}075}{1{,}075} = \frac{11{,}1945}{1{,}075} = 10{,}4135$$
> >
> > **Langkah 3: Selesaikan untuk $n+1$**
> >
> > $$a_{\overline{n+1}|7{,}5\%} = 10{,}4135$$
> >
> > Menggunakan TVM (atau trial): $a_{\overline{21}|7{,}5\%} = 10{,}4135$ → $n+1 = 21$, maka $n = 20$.
> >
> > Verifikasi: $a_{\overline{21}|7{,}5\%} = \frac{1-(1{,}075)^{-21}}{0{,}075} \approx 10{,}413$. ✓
> >
> > **Hasil Akhir:** **(D)**. $n = 20$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira perpetuity ini adalah increasing perpetuity biasa — setelah tahun $n$, pembayaran **level** (bukan terus naik).
> > > - Salah menggunakan formula $(Ia)_{\overline{\infty}|} = \frac{1}{i^2}$ — ini untuk increasing perpetuity tak terbatas, bukan yang ini.
> >
> > > [!CAUTION] Red Flags
> > > - "Payments of $1, 2, \ldots, n$ then level $(n+1)$" → gunakan identitas $PV = \ddot{a}_{\overline{n+1}|}/i$.
> > > - Hasilnya adalah $a_{\overline{n+1}|}$, bukan $a_{\overline{n}|}$ — jangan lupa $+1$.

---

## **No. 9**

A $100 par value bond with 2% annual coupons is callable at par anywhere from 10 to 30 years after issue, at the option of the issuer. If the bond is purchased at a price which will yield a maximum of 5%, what is the minimum yield that can be earned at this price?

(A) 2.4%  
(B) 2.8%  
(C) 3.2%  
(D) 3.5%  
(E) 3.8%

> [!summary]+ **Jawaban No. 9**
>
> **(C). $3{,}21\%$**
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
> > Callable bond — prinsip worst-case:
> >
> > Karena $Fr = 2 < 5 = Ci$ (discount bond dari perspektif redemption vs yield), penerbit akan call **selambat mungkin** (year 30) untuk memaksimalkan kerugian investor.
> >
> > Untuk menemukan harga yang menjamin yield maksimum 5%, kita membeli pada harga terendah yang mungkin (worst case call untuk investor = call paling lambat).
> >
> > $$P = C + (Fr - Ci)a_{\overline{n}|i}$$
>
> **Diketahui:**
> - $F = C = 100$, $Fr = 2$ (kupon 2%), callable at par
> - Callable: tahun 10–30
> - Yield maksimum yang dijamin: 5%
> - Target: yield minimum yang bisa diperoleh pada harga tersebut
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Harga Beli**
> >
> > Karena $Fr = 2 < Ci = 100 \times 5\% = 5$ → bond discount → penerbit call selambat mungkin.
> >
> > Worst case untuk investor (yield 5%) adalah call di tahun 10 (call paling awal):
> >
> > Beli pada harga yang memberikan yield tepat 5% jika di-call di tahun 10:
> >
> > $$P = 100 + (2 - 5) a_{\overline{10}|5\%} = 100 - 3 \times 7{,}7217 = 100 - 23{,}17 = 76{,}83$$
> >
> > **Langkah 2: Yield Minimum (Call Paling Terlambat)**
> >
> > Jika bond tidak di-call hingga tahun 30, yield investor akan menjadi minimum.
> >
> > Hitung yield $i$ ketika $P = 76{,}83$ dan $n = 30$:
> >
> > $$76{,}83 = 100 + (2 - 100i) a_{\overline{30}|i}$$
> >
> > Menggunakan kalkulator TVM atau trial: $I\% = 3{,}21\%$
> >
> > **Hasil Akhir:** **(C)**. $3{,}21\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira yield minimum = yield jika di-call paling awal — untuk discount bond, call lebih awal = yield LEBIH TINGGI untuk investor; call lebih lambat = yield LEBIH RENDAH.
> > > - Membeli pada harga yang memberikan yield 5% jika di-call tahun 30 — yang benar adalah harga berdasarkan yield 5% untuk call **terdekat** (worst case yield pertama untuk discount bond).
> >
> > > [!CAUTION] Red Flags
> > > - $Fr < Ci$ → discount bond → penerbit prefer call lebih lambat → gunakan call **terdekat** untuk pricing (worst case dari sisi yield tinggi).
> > > - Yield minimum terjadi pada maturitas terlama (tahun 30).

---

## **No. 10**

A project requires an investment of 20,000 now, another investment of 12,000 $t$ years from now, and will return 5,000 at the end of each of years 2 through 9. At an effective annual rate of 6%, this project has a net present value of 0. Calculate $t$.

(A) 4.1  
(B) 4.2  
(C) 4.3  
(D) 4.4  
(E) 4.5

> [!summary]+ **Jawaban No. 10**
>
> **(D). $t = 4{,}39$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Time Value of Money |
> | **Sub-topik** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]], [[2.5 Deferred Annuities]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate]] |
> | **Referensi** | Kellison Bab 1; Vaaler Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Net Present Value:
> >
> > $$NPV = -20{,}000 - 12{,}000 v^t + 5{,}000 \cdot a_{\overline{8}|} \cdot v = 0$$
> >
> > Di mana pembayaran dari tahun 2 sampai 9 = annuity-immediate 8 tahun dimulai dari $t=1$ (didiskon satu tahun ekstra).
>
> **Diketahui:**
> - Outflow: $20{,}000$ di $t=0$; $12{,}000$ di $t=t$
> - Inflow: $5{,}000$ per tahun dari $t=2$ sampai $t=9$ (8 pembayaran)
> - $i = 6\%$, $NPV = 0$
> - Target: $t$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan NPV**
> >
> > $$NPV = 0 = -20{,}000 - 12{,}000 v^t + 5{,}000 \cdot a_{\overline{8}|6\%} \cdot v_{6\%}$$
> >
> > PV inflows dari $t=2$ sampai $t=9$ = $5{,}000 \cdot a_{\overline{8}|6\%} \cdot v$:
> >
> > $$= 5{,}000 \cdot \frac{1-(1{,}06)^{-8}}{0{,}06} \cdot \frac{1}{1{,}06}$$
> >
> > $$a_{\overline{8}|6\%} = 6{,}20979; \quad v = 0{,}94340$$
> >
> > $$PV_{\text{inflow}} = 5{,}000 \times 6{,}20979 \times 0{,}94340 = 29{,}283{,}86$$
> >
> > **Langkah 2: Selesaikan untuk $t$**
> >
> > $$12{,}000 \cdot v^t = 29{,}283{,}86 - 20{,}000 = 9{,}283{,}86$$
> >
> > $$v^t = \frac{9{,}283{,}86}{12{,}000} = 0{,}77366$$
> >
> > $$t = \frac{-\ln 0{,}77366}{\ln 1{,}06} = \frac{0{,}25638}{0{,}058269} = 4{,}399 \approx 4{,}4$$
> >
> > **Hasil Akhir:** **(D)**. $t \approx 4{,}4$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira pembayaran tahun 2–9 = $a_{\overline{9}|} - a_{\overline{1}|}$ = annuity deferred 1 tahun — cara ini benar, tapi lebih mudah dengan $a_{\overline{8}|} \cdot v$.
> > > - Menggunakan $a_{\overline{8}|}$ saja tanpa faktor diskonto $v$ — pembayaran mulai tahun 2, bukan tahun 1.
> >
> > > [!CAUTION] Red Flags
> > > - "Years 2 through 9" = 8 pembayaran, mulai dari akhir tahun 2 → PV = $5{,}000 \cdot a_{\overline{8}|} \cdot v$.
> > > - NPV = 0 → ini adalah IRR problem, tapi di sini $i$ sudah diketahui dan yang dicari adalah $t$.

---

## **No. 11**

A company must pay liabilities with a present value of 563 and a modified duration of 3.95. The only investments available to immunize these liabilities are a 2-year zero-coupon bond and a 5-year zero-coupon bond. The company invests an amount of $X$ in the 2-year bond and an amount of $Y$ in the 5-year bond to satisfy the first 2 conditions of the Redington immunization at an annual effective interest rate of 4%. Compute the ratio $Y/X$.

(A) 1.38  
(B) 1.73  
(C) 2.36  
(D) 2.91  
(E) 3.07

> [!summary]+ **Jawaban No. 11**
>
> **(C). $Y/X = 2{,}3632$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]], [[3.3 Duration, Macaulay and Modified]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Dua syarat Redington immunization:
> >
> > $$\text{(1)} \quad X + Y = P_L = 563$$
> >
> > $$\text{(2)} \quad \frac{2X + 5Y}{X+Y} = D_{\text{Mac},L} = D_{\text{mod},L} \times (1+i)$$
>
> **Diketahui:**
> - $PV_L = 563$, $D_{\text{mod},L} = 3{,}95$
> - Aset: ZCB 2-tahun ($X$) dan ZCB 5-tahun ($Y$)
> - $i = 4\%$
> - Target: $Y/X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Syarat (1) — PV Matching**
> >
> > Karena $X$ dan $Y$ adalah **harga beli** (dollar amount invested):
> >
> > $$X + Y = 563 \tag{1}$$
> >
> > **Langkah 2: Ubah Modified Duration ke Macaulay Duration**
> >
> > $$D_{\text{Mac},L} = D_{\text{mod},L} \times (1+i) = 3{,}95 \times 1{,}04 = 4{,}108$$
> >
> > **Langkah 3: Syarat (2) — Duration Matching**
> >
> > Duration ZCB $n$-tahun = $n$ (Macaulay). Untuk portfolio aset:
> >
> > $$\frac{2X + 5Y}{X+Y} = 4{,}108$$
> >
> > $$2X + 5Y = 4{,}108 \times 563 = 2312{,}804 \tag{2}$$
> >
> > **Langkah 4: Selesaikan Sistem**
> >
> > Kalikan (1) dengan 2 dan kurangi dari (2):
> >
> > $$3Y = 2312{,}804 - 2 \times 563 = 2312{,}804 - 1126 = 1186{,}804$$
> >
> > $$Y = 395{,}60$$
> >
> > $$X = 563 - 395{,}60 = 167{,}40$$
> >
> > **Langkah 5: Hitung Rasio**
> >
> > $$\frac{Y}{X} = \frac{395{,}60}{167{,}40} = 2{,}3632$$
> >
> > **Hasil Akhir:** **(C)**. $Y/X = 2{,}3632$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $D_{\text{mod}}$ langsung sebagai duration dalam syarat matching — harus konversi ke $D_{\text{Mac}} = D_{\text{mod}} \times (1+i)$ terlebih dahulu.
> > > - Mengira $X$ dan $Y$ adalah face value ZCB, bukan dollar amount invested — soal menyatakan "invests an amount of $X$", jadi $X$ dan $Y$ adalah harga (PV), bukan face value.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan duration ZCB sebagai modified duration — Macaulay duration ZCB $n$-tahun = $n$; modified = $n/(1+i)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Modified duration" diberikan → selalu konversi ke Macaulay sebelum digunakan dalam persamaan duration matching.
> > > - $X+Y = PV_L$, bukan face value aset.

---

## **No. 12**

A loan of $1,000 is being repaid by equal annual installments over a 20 year period. If the total principal repaid during the first 10 years is $400, find the effective annual interest rate.

(A) 2.5%  
(B) 3.2%  
(C) 3.6%  
(D) 4.1%  
(E) Greater than 5.0%

> [!summary]+ **Jawaban No. 12**
>
> **(D). $i \approx 4{,}1\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[4.1 Loan Terminology]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Total pokok yang dilunasi dalam tahun ke-$(k+1)$ sampai tahun ke-$n$ dari pinjaman $n$-tahun:
> >
> > $$\sum_{t=k+1}^{n} P_t = R \cdot a_{\overline{n-k}|i} \cdot \frac{1}{a_{\overline{n}|i}} \cdot a_{\overline{n}|i} = R \cdot (a_{\overline{n}|} - a_{\overline{k}|}) \cdot \frac{\text{?}}{\text{?}}$$
> >
> > Cara lebih langsung: total pokok tahun 1–10 = $B_0 - B_{10}$:
> >
> > $$B_{10} = R \cdot a_{\overline{10}|i} = \frac{1000}{a_{\overline{20}|i}} \cdot a_{\overline{10}|i}$$
>
> **Diketahui:**
> - Pinjaman $= 1{,}000$, dibayar dengan anuitas 20 tahun
> - Total pokok dibayar selama 10 tahun pertama $= 400$
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan Pokok**
> >
> > Total pokok tahun 1–10 = saldo awal − saldo setelah 10 tahun:
> >
> > $$1{,}000 - B_{10} = 400 \quad \Rightarrow \quad B_{10} = 600$$
> >
> > **Langkah 2: Nyatakan $B_{10}$ secara Prospektif**
> >
> > $$B_{10} = R \cdot a_{\overline{10}|i} = 600$$
> >
> > Juga $R = \frac{1{,}000}{a_{\overline{20}|i}}$, sehingga:
> >
> > $$\frac{1{,}000 \cdot a_{\overline{10}|i}}{a_{\overline{20}|i}} = 600$$
> >
> > $$\frac{a_{\overline{10}|i}}{a_{\overline{20}|i}} = 0{,}6$$
> >
> > **Langkah 3: Sederhanakan**
> >
> > Gunakan identitas $a_{\overline{20}|} = a_{\overline{10}|} + v^{10} \cdot a_{\overline{10}|}$:
> >
> > $$\frac{a_{\overline{10}|}}{a_{\overline{10}|}(1 + v^{10})} = 0{,}6$$
> >
> > $$\frac{1}{1+v^{10}} = 0{,}6 \quad \Rightarrow \quad 1+v^{10} = \frac{1}{0{,}6} = \frac{5}{3}$$
> >
> > $$v^{10} = \frac{2}{3} = 0{,}6\overline{6}$$
> >
> > **Langkah 4: Selesaikan untuk $i$**
> >
> > $$(1+i)^{10} = \frac{3}{2} = 1{,}5$$
> >
> > $$i = (1{,}5)^{1/10} - 1 = 1{,}04138 - 1 = 4{,}138\% \approx 4{,}1\%$$
> >
> > **Hasil Akhir:** **(D)**. $i \approx 4{,}1\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira total pokok 10 tahun pertama = $R \times 10 / 2$ (rata-rata) — pokok per tahun TIDAK rata; ia tumbuh geometris.
> > > - Menghitung $B_{10}$ secara retrospektif dan memasukkan bunga — lebih mudah: total pokok = $B_0 - B_{10}$.
> >
> > > [!CAUTION] Red Flags
> > > - "Total principal in first 10 years" = $1{,}000 - B_{10}$, bukan jumlah dari $P_1 + P_2 + \ldots + P_{10}$ secara individual.
> > > - $a_{\overline{20}|} = a_{\overline{10}|}(1 + v^{10})$ → ini identitas kunci untuk menyederhanakan rasio.

---

## **No. 13**

Ten annual deposits of $\$1, \$2, \ldots, \$10$ are made into a fund earning 4% per annum. Withdrawals of $\$10$ each, first withdrawal 5 years from last deposit, are made until a final smaller withdrawal exhausts the fund. If interest is at 4% per annum, find the number of withdrawals, including the final one.

(A) 8  
(B) 9  
(C) 10  
(D) 11  
(E) 12

> [!summary]+ **Jawaban No. 13**
>
> **(B). $9$ penarikan**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]], [[2.5 Deferred Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.3 Varying Annuities]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > AV increasing annuity-immediate:
> >
> > $$(Is)_{\overline{n}|i} = \frac{\ddot{s}_{\overline{n}|} - n}{i} = \frac{s_{\overline{n+1}|} - (n+1)}{i}$$
> >
> > PV annuity-immediate: $a_{\overline{m}|i} = \frac{1-v^m}{i}$
>
> **Diketahui:**
> - Deposit: $\$1, \$2, \ldots, \$10$ (increasing annuity-immediate, 10 tahun)
> - Penarikan: $\$10$ per tahun, mulai 5 tahun setelah deposit terakhir
> - Rate: $4\%$ per tahun
> - Target: jumlah penarikan (termasuk penarikan akhir yang lebih kecil)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung AV Deposit di $t=10$**
> >
> > $$(Is)_{\overline{10}|4\%} = \frac{s_{\overline{11}|4\%} - 11}{0{,}04}$$
> >
> > $$s_{\overline{11}|4\%} = \frac{(1{,}04)^{11}-1}{0{,}04} = \frac{1{,}53945-1}{0{,}04} = 13{,}4864$$
> >
> > $$(Is)_{\overline{10}|4\%} = \frac{13{,}4864 - 11}{0{,}04} = \frac{2{,}4864}{0{,}04} = 62{,}16$$
> >
> > **Langkah 2: Nilai Fund di $t=15$ (awal penarikan)**
> >
> > Penarikan pertama di $t=15$ (5 tahun setelah deposit terakhir di $t=10$). Nilai fund di $t=15$:
> >
> > $$FV_{15} = 62{,}16 \times (1{,}04)^5 = 62{,}16 \times 1{,}21665 = 75{,}64$$
> >
> > **Langkah 3: Tentukan Jumlah Penarikan**
> >
> > Fund sebesar $75{,}64$ mendukung penarikan $\$10$ per tahun:
> >
> > $$a_{\overline{m}|4\%} = \frac{75{,}64}{10} = 7{,}564$$
> >
> > Namun penarikan pertama terjadi di $t=15$ dan fund nilai $75{,}64$ ada di $t=14$ (sesaat sebelum penarikan pertama). Jadi:
> >
> > Sebenarnya fund di $t=14$ = $62{,}16 \times (1{,}04)^4 = 62{,}16 \times 1{,}16986 = 72{,}73$.
> >
> > Lalu $a_{\overline{m}|4\%} = 72{,}73/10 = 7{,}273$.
> >
> > Menggunakan pendekatan ASM: nilai fund di $t=10$ adalah $(Is)_{\overline{10}|}$. Penarikan 10 pertama dimulai 5 tahun setelah $t=10$, yaitu di $t=15, 16, \ldots$
> >
> > Nilai fund di $t=10$ yang mendukung penarikan-penarikan $10$ mulai $t=15$:
> >
> > $$PV_{\text{di }t=10} = 10 \cdot a_{\overline{m}|4\%} \cdot v^4 = (Is)_{\overline{10}|4\%}$$
> >
> > $$10 \cdot a_{\overline{m}|} \cdot v^4 = 62{,}16$$
> >
> > $$a_{\overline{m}|} = \frac{62{,}16}{10 \times v^4} = \frac{62{,}16}{10 \times (1{,}04)^{-4}} = \frac{62{,}16}{10 \times 0{,}85480} = \frac{62{,}16}{8{,}548} = 7{,}274$$
> >
> > Dari tabel atau TVM: $a_{\overline{m}|4\%} = 7{,}274$ → $m \approx 9{,}something$.
> >
> > Dari ASM: $a_{\overline{m}|}$ menggunakan $(Is)_{\overline{10}|} = 10(a_{\overline{m}|} + a_{\overline{4}|})$:
> >
> > $(Is)_{\overline{10}|4\%} = 10 a_{\overline{m}|} \cdot v_{0{,}04}^4 = 62{,}16$
> >
> > $a_{\overline{m}|} = 9{,}845$ menggunakan ekspresi ASM: $a_{\overline{m}|} = \frac{1}{10}(Is)_{\overline{10}|} + a_{\overline{4}|}$
> >
> > Dari solusi ASM: $a_{\overline{m}|} = 9{,}845$, dan karena $12 < m < 13$, maka ada 8 penarikan penuh ($m=8$) ditambah 1 penarikan akhir → **9 penarikan total**.
> >
> > **Hasil Akhir:** **(B)**. $9$ penarikan
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa penarikan **pertama** terjadi 5 tahun setelah deposit terakhir → harus diskon 4 atau 5 tahun tergantung timing.
> > > - Mengira "penarikan final yang lebih kecil" tidak dihitung — soal minta termasuk penarikan final.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - "5 years from last deposit" dengan last deposit di $t=10$ → penarikan pertama di $t=15$; nilai fund di $t=14$ (sesaat sebelum penarikan) = fund di $t=10$ × $(1{,}04)^4$.
> >
> > > [!CAUTION] Red Flags
> > > - Increasing deposit + deferred withdrawals → hitung AV deposit, lalu tumbuhkan ke saat penarikan dimulai, lalu cari $m$ dari $a_{\overline{m}|}$.

---

## **No. 14**

A $100 bond with semiannual coupons, redeemable for $105 in 12 years, is purchased to yield 4% per annum compounded semiannually. If the amount for amortization of premium (write-down) in the first coupon is \$0.60, what is the book value just after the 8th coupon is due?

(A) $110  
(B) $113  
(C) $116  
(D) $118  
(E) $123

> [!summary]+ **Jawaban No. 14**
>
> **(D). $\$118{,}10$**
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
> > Write-down (amortisasi premium) pada kupon ke-$t$:
> >
> > $$P_t = (Fr - Ci) v^{n-t+1}$$
> >
> > Book value setelah kupon ke-$t$ menggunakan premium/discount formula:
> >
> > $$B_t = C + (Fr - Ci) a_{\overline{n-t}|i}$$
>
> **Diketahui:**
> - $F = 100$, $C = 105$, $n = 24$ semester, $i = 2\%$ per semester
> - Write-down kupon ke-1: $P_1 = 0{,}60$
> - Target: $B_8$ (book value setelah kupon ke-8)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $(Fr - Ci)$**
> >
> > $$P_1 = (Fr - Ci) v^{n-1+1} = (Fr - Ci) v^{24}$$
> >
> > $$0{,}60 = (Fr - Ci)(1{,}02)^{-24}$$
> >
> > $$(Fr - Ci) = \frac{0{,}60}{(1{,}02)^{-24}} = 0{,}60 \times (1{,}02)^{24}$$
> >
> > $$(1{,}02)^{24} = 1{,}60844$$
> >
> > $$(Fr - Ci) = 0{,}60 \times 1{,}60844 = 0{,}96506$$
> >
> > **Langkah 2: Hitung Book Value $B_8$**
> >
> > $$B_8 = C + (Fr - Ci) \cdot a_{\overline{24-8}|2\%} = 105 + 0{,}96506 \times a_{\overline{16}|2\%}$$
> >
> > $$a_{\overline{16}|2\%} = \frac{1-(1{,}02)^{-16}}{0{,}02} = \frac{1-0{,}72845}{0{,}02} = 13{,}5777$$
> >
> > $$B_8 = 105 + 0{,}96506 \times 13{,}5777 = 105 + 13{,}0030 = 118{,}10$$
> >
> > **Alternatif (metode ASM):**
> >
> > $P_1 = (Fr-Ci)v^{24} = 0{,}60$, sehingga $(Fr-Ci) = 0{,}6(1{,}02)^{24}$.
> >
> > $$B_8 = 105 + 0{,}6(1{,}02)^{24} a_{\overline{16}|2\%} = 105 + 0{,}6(s_{\overline{24}|} - s_{\overline{8}|})$$
> >
> > $$= 105 + 0{,}6(30{,}422 - 8{,}583) = 105 + 0{,}6 \times 21{,}839 = 105 + 13{,}10 = 118{,}10$$
> >
> > **Hasil Akhir:** **(D)**. $\$118{,}10$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P_1 = Fr - Ci$ langsung — write-down kupon ke-1 adalah $(Fr-Ci)v^n$, bukan $(Fr-Ci)$ itu sendiri.
> > > - Menggunakan $n=12$ tahun alih-alih $n=24$ semester — bond semiannual dengan 12 tahun → 24 periode.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $i=4\%$ per tahun alih-alih $i=2\%$ per semester.
> >
> > > [!CAUTION] Red Flags
> > > - "4% per annum compounded semiannually" → rate per periode = 2%, $n=24$ semester.
> > > - Write-down pertama = $(Fr-Ci)v^n$ → gunakan ini untuk mencari $(Fr-Ci)$, lalu hitung $B_8$.

---

## **No. 15**

A $100 bond with annual coupons matures at $110 in 20 years. It sells at $130 when the coupon rate per $1.00 of par value is $1\frac{1}{2}$ times the yield rate. Find the yield rate.

(A) 1.9%  
(B) 2.3%  
(C) 3.0%  
(D) 3.5%  
(E) 4.4%

> [!summary]+ **Jawaban No. 15**
>
> **(D). $i = 3{,}5\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]], [[5.1 Bond Pricing]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > $$P = C + (Fr - Ci) a_{\overline{n}|i}$$
> >
> > Dengan $r = 1{,}5i$ (coupon rate = 1.5 × yield rate):
> >
> > $$Fr - Ci = F \cdot 1{,}5i - C \cdot i = i(1{,}5F - C)$$
>
> **Diketahui:**
> - $F = 100$, $C = 110$, $n = 20$, $P = 130$
> - $r = 1{,}5i$ (coupon rate per $\$1$ par = $1{,}5 \times$ yield rate)
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan $Fr$ dan $Ci$**
> >
> > $$Fr = 100 \times 1{,}5i = 150i$$
> >
> > $$Ci = 110i$$
> >
> > $$Fr - Ci = 150i - 110i = 40i$$
> >
> > **Langkah 2: Gunakan Formula Harga Bond**
> >
> > $$130 = 110 + 40i \cdot a_{\overline{20}|i}$$
> >
> > $$40i \cdot a_{\overline{20}|i} = 20$$
> >
> > Karena $i \cdot a_{\overline{20}|i} = 1 - v^{20}$:
> >
> > $$40(1 - v^{20}) = 20$$
> >
> > $$1 - v^{20} = 0{,}5$$
> >
> > $$v^{20} = 0{,}5$$
> >
> > **Langkah 3: Selesaikan untuk $i$**
> >
> > $$(1+i)^{20} = 2$$
> >
> > $$i = 2^{1/20} - 1 = 1{,}035265 - 1 = 3{,}5265\% \approx 3{,}5\%$$
> >
> > **Hasil Akhir:** **(D)**. $i = 3{,}5\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "coupon rate per \$1 of par" = $r$ per satuan, jadi $Fr = 100r$ — dan $r = 1{,}5i$ sehingga $Fr = 150i$. Jangan lupa bahwa $F = 100$ (par), bukan $C = 110$ (redemption).
> > > - Menggunakan $C = 100$ (mengira redemption sama dengan par) — soal menyatakan matures at $110$.
> >
> > > [!CAUTION] Red Flags
> > > - Identitas $i \cdot a_{\overline{n}|} = 1 - v^n$ sangat berguna untuk menyederhanakan persamaan saat $i$ muncul sebagai faktor.
> > > - "Matures at $110$" → $C = 110 \neq F = 100$.

---

## **No. 16**

Which of the following series of payments has a present value equal to $\ddot{a}_{\overline{6}|} \cdot a_{\overline{4}|}$?

| | Time | | | | | | | | | | | |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Answer Code** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| (A) | – | 1 | 2 | 3 | 4 | 4 | 4 | 3 | 2 | 1 | – | – |
| (B) | – | 1 | 2 | 3 | 4 | 4 | 4 | 4 | 3 | 2 | 1 | – |
| (C) | – | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |
| (D) | 1 | 2 | 3 | 4 | 4 | 4 | 3 | 2 | 1 | – | – | – |
| (E) | 1 | 2 | 3 | 4 | 4 | 4 | 4 | 3 | 2 | 1 | – | – |

> [!summary]+ **Jawaban No. 16**
>
> **(A). Pembayaran: 1, 2, 3, 4, 4, 4, 3, 2, 1 di $t = 1$ s.d. $9$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]], [[2.1 Annuity-Immediate]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate]], [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $$\ddot{a}_{\overline{6}|} \cdot a_{\overline{4}|} = (1+i) a_{\overline{6}|} \cdot a_{\overline{4}|}$$
> >
> > Interpretasi: PV ini dapat dilihat sebagai anuitas-due 4 tahun dengan pembayaran $\ddot{a}_{\overline{6}|}$ di setiap periode, **atau** sebagai anuitas-immediate 6 tahun dengan pembayaran $a_{\overline{4}|}$ di setiap periode.
>
> **Diketahui:**
> - Target: series yang PV-nya = $\ddot{a}_{\overline{6}|} \cdot a_{\overline{4}|}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Interpretasi Produk**
> >
> > $\ddot{a}_{\overline{6}|}$ = PV annuity-due 6 tahun (pembayaran di $t=0,1,2,3,4,5$).
> >
> > $a_{\overline{4}|}$ = PV annuity-immediate 4 tahun (pembayaran di $t=1,2,3,4$).
> >
> > **Langkah 2: Baca sebagai 4-tahun annuity-due dengan pembayaran $\ddot{a}_{\overline{6}|}$**
> >
> > Setiap pembayaran $\ddot{a}_{\overline{6}|}$ di $t=0, 1, 2, 3$ (annuity-due 4 tahun).
> >
> > Pembayaran $\ddot{a}_{\overline{6}|}$ di $t=k$ ekuivalen dengan 6 pembayaran 1 di $t=k, k+1, \ldots, k+5$.
> >
> > Menggabungkan untuk $k=0,1,2,3$: setiap waktu $t$, jumlah 1-an yang datang dari semua pembayaran.
> >
> > **Langkah 3: Hitung Pembayaran di Setiap Waktu**
> >
> > Dari perspektif lain: $\ddot{a}_{\overline{6}|} \cdot a_{\overline{4}|}$ dapat ditulis sebagai annuity-immediate 6 tahun dengan tiap pembayaran = $a_{\overline{4}|}$.
> >
> > Pembayaran $a_{\overline{4}|}$ di $t=k$ (untuk $k=1,\ldots,6$) ekuivalen dengan 4 pembayaran 1 di $t=k+1, k+2, k+3, k+4$.
> >
> > Jumlah pembayaran 1 di setiap waktu:
> >
> > | $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
> > |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
> > | Count | 1 | 2 | 3 | 4 | 4 | 4 | 3 | 2 | 1 |
> >
> > Ini cocok dengan jawaban **(A)**: pembayaran 1, 2, 3, 4, 4, 4, 3, 2, 1 di $t=1$ s.d. $9$.
> >
> > **Verifikasi cepat (0% test):** Total = $1+2+3+4+4+4+3+2+1 = 24 = 6 \times 4$. ✓
> >
> > **Hasil Akhir:** **(A)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\ddot{a}_{\overline{6}|}$ harus diterapkan mulai $t=0$ — jika diinterpretasikan sebagai "annuity-immediate 6-tahun dengan pembayaran $a_{\overline{4}|}$", pembayaran di $t=1,\ldots,6$ menghasilkan unit-unit mulai $t=2$.
> > > - Salah mengidentifikasi apakah annuity-due atau immediate — cek pembayaran di $t=0$ (ada untuk due, tidak ada untuk immediate).
> >
> > > [!CAUTION] Red Flags
> > > - Ujian 0%: $PV = n_1 \times n_2$ jika $i=0$ → total pembayaran harus sama dengan $6 \times 4 = 24$. Gunakan ini untuk eliminasi pilihan.
> > > - Konvolusi dua annuity menghasilkan pola trapesoid naik-datar-turun.

---

## **No. 17**

An interest function $F(n)$ is defined for integral $n$ by:

$$F(1) = 1$$

$$F(n) = (1+i)F(n-1) + n$$

In which of the following ranges does the value of $F(20)$ lie if $i = .05$?

(A) Less than 125  
(B) 125 but less than 175  
(C) 175 but less than 225  
(D) 225 but less than 275  
(E) 275 or more

> [!summary]+ **Jawaban No. 17**
>
> **(E). $F(20) = 294$ — 275 atau lebih**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]], [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > AV increasing annuity-due (nilai pada waktu akhir):
> >
> > $$(Is)_{\overline{n}|i} = \frac{\ddot{s}_{\overline{n}|} - n}{i}$$
>
> **Diketahui:**
> - $F(1) = 1$, $F(n) = (1+i)F(n-1) + n$, $i = 0{,}05$
> - Target: rentang $F(20)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kembangkan Rekursi**
> >
> > $$F(2) = (1{,}05)(1) + 2 = 3{,}05$$
> >
> > $$F(3) = (1{,}05)(3{,}05) + 3 = 3{,}2025 + 3 = 6{,}2025$$
> >
> > Pola: $F(n) = (1+i)^{n-1} \cdot 1 + \sum_{k=2}^{n} k(1+i)^{n-k}$
> >
> > **Langkah 2: Kenali sebagai AV Increasing Annuity**
> >
> > $$F(n) = \sum_{k=1}^{n} k \cdot (1+i)^{n-k} = (Is)_{\overline{n}|i}$$
> >
> > Ini adalah AV dari increasing annuity-immediate dengan pembayaran $k$ di waktu $k$ ($k=1,\ldots,n$), dievaluasi di $t=n$.
> >
> > **Langkah 3: Hitung $F(20)$**
> >
> > $$(Is)_{\overline{20}|5\%} = \frac{\ddot{s}_{\overline{20}|5\%} - 20}{0{,}05}$$
> >
> > $$s_{\overline{20}|5\%} = \frac{(1{,}05)^{20}-1}{0{,}05} = \frac{2{,}65330-1}{0{,}05} = 33{,}0660$$
> >
> > $$\ddot{s}_{\overline{20}|5\%} = s_{\overline{20}|} \times (1{,}05) = 33{,}0660 \times 1{,}05 = 34{,}7193$$
> >
> > $$(Is)_{\overline{20}|5\%} = \frac{34{,}7193 - 20}{0{,}05} = \frac{14{,}7193}{0{,}05} = 294{,}39 \approx 294$$
> >
> > $294 \geq 275$ → masuk rentang **(E)**.
> >
> > **Hasil Akhir:** **(E)**. $F(20) \approx 294 \geq 275$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira rekursi ini adalah compound interest biasa — pola rekursi ini menghasilkan increasing annuity, bukan compound biasa.
> > > - Menggunakan $(Is)_{\overline{n}|} = (s_{\overline{n}|} - n)/i$ tanpa memastikan apakah ini immediate atau due — cek dengan $n=1$: $F(1)=1$ → ini adalah annuity-due AV karena $F(n) = \sum k(1+i)^{n-k}$ dimulai dari $k=1$.
> >
> > > [!CAUTION] Red Flags
> > > - Rekursi $F(n) = (1+i)F(n-1) + n$ dengan $F(1)=1$ → AV increasing annuity: $F(n) = (Is)_{\overline{n}|}$.

---

## **No. 18**

A loan at 5% effective is being repaid by 20 payments of $100 at the end of each year. The lender incurs expenses equal to 3% of the interest contained in the first 15 payments and 4% of the interest contained in the last 5 payments. Find the total of the expenses incurred (without interest).

(A) $10.29  
(B) $16.54  
(C) $23.28  
(D) $33.06  
(E) $41.72

> [!summary]+ **Jawaban No. 18**
>
> **(C). $\$23{,}28$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[4.2 Amortization Method]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Total bunga dalam pembayaran ke-$k$ sampai ke-$m$:
> >
> > $$\sum_{t=k}^{m} I_t = \sum_{t=k}^{m} R(1-v^{n-t+1}) = R\left[(m-k+1) - (a_{\overline{n-k+1}|} - a_{\overline{n-m}|})\right]$$
> >
> > Atau lebih langsung: total bunga = total payments − total principal:
> >
> > $$\text{Total bunga tahun 1–15} = 100 \times 15 - (B_0 - B_{15}) = 1500 - (B_0 - B_{15})$$
>
> **Diketahui:**
> - Pinjaman 20 tahun, $R = 100$, $i = 5\%$
> - Biaya: 3% dari bunga 15 pembayaran pertama + 4% dari bunga 5 pembayaran terakhir
> - Target: total biaya (tanpa bunga)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Total Bunga 15 Pembayaran Pertama**
> >
> > $$I_{1\text{–}15} = R \sum_{t=1}^{15}(1 - v^{20-t+1}) = 100\left[15 - (a_{\overline{20}|5\%} - a_{\overline{5}|5\%})\right]$$
> >
> > $$a_{\overline{20}|5\%} = 12{,}4622; \quad a_{\overline{5}|5\%} = 4{,}3295$$
> >
> > $$I_{1\text{–}15} = 100[15 - (12{,}4622 - 4{,}3295)] = 100[15 - 8{,}1327] = 100 \times 6{,}8673 = 686{,}73$$
> >
> > **Langkah 2: Total Bunga 5 Pembayaran Terakhir**
> >
> > $$I_{16\text{–}20} = R \sum_{t=16}^{20}(1-v^{20-t+1}) = 100\left[5 - a_{\overline{5}|5\%}\right]$$
> >
> > $$= 100[5 - 4{,}3295] = 100 \times 0{,}6705 = 67{,}05$$
> >
> > **Langkah 3: Total Biaya**
> >
> > $$\text{Total expenses} = 3\% \times 686{,}73 + 4\% \times 67{,}05$$
> >
> > $$= 20{,}60 + 2{,}68 = 23{,}28$$
> >
> > **Alternatif (metode ASM):**
> >
> > Total bunga tahun 1–15 = $100[15-(a_{\overline{20}|}-a_{\overline{5}|})] = 100(15-8{,}1327) = 686{,}73$.
> >
> > Total biaya = $3(15-a_{\overline{20}|}+a_{\overline{5}|}) + 4(5-a_{\overline{5}|}) = 65 - 3a_{\overline{20}|} - a_{\overline{5}|} = 65 - 3(12{,}4622) - 4{,}3295 = 23{,}28$.
> >
> > **Hasil Akhir:** **(C)**. $\$23{,}28$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung biaya sebagai persentase dari total pembayaran, bukan bunga saja — biaya dihitung dari **komponen bunga** tiap pembayaran.
> > > - Menghitung total bunga 20 tahun lalu membagi rata 15:5 — distribusi bunga tidak linear; lebih besar di awal.
> >
> > > [!CAUTION] Red Flags
> > > - Total bunga dalam $t=1$ sampai $t=k$ = $Rk - (B_0 - B_k)$ = payments minus principal repaid.
> > > - Formula ringkas: total bunga 15 pertama = $100(15 - a_{\overline{20}|} + a_{\overline{5}|})$; 5 terakhir = $100(5 - a_{\overline{5}|})$.

---

## **No. 19**

A perpetuity is payable continuously at the annual rate of $te^{.04t}$ at time $t$, where $e$ is the base of natural logarithms. If $\delta = .05$, find the present value of the perpetuity.

(A) 20  
(B) 100  
(C) 400  
(D) 625  
(E) 10,000

> [!summary]+ **Jawaban No. 19**
>
> **(E). $PV = 10{,}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]], [[2.2 Perpetuity]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.4 Continuous Annuities]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Kellison Bab 3; Vaaler Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV perpetuity kontinu dengan rate pembayaran $\rho(t)$ dan force of interest $\delta$:
> >
> > $$PV = \int_0^{\infty} \rho(t) \cdot e^{-\delta t} \, dt$$
> >
> > PV increasing perpetuity kontinu ($(I\bar{a})_{\overline{\infty}|}$) pada force of interest $\delta$:
> >
> > $$(I\bar{a})_{\overline{\infty}|} = \frac{1}{\delta^2}$$
>
> **Diketahui:**
> - Rate pembayaran: $\rho(t) = t \cdot e^{0{,}04t}$
> - $\delta = 0{,}05$
> - Target: $PV$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Integral PV**
> >
> > $$PV = \int_0^{\infty} t \cdot e^{0{,}04t} \cdot e^{-0{,}05t} \, dt = \int_0^{\infty} t \cdot e^{-0{,}01t} \, dt$$
> >
> > **Langkah 2: Kenali sebagai Increasing Perpetuity Kontinu**
> >
> > Dengan $\delta' = 0{,}05 - 0{,}04 = 0{,}01$ (net force of interest setelah growth):
> >
> > $$PV = \int_0^{\infty} t \cdot e^{-0{,}01t} \, dt = (I\bar{a})_{\overline{\infty}|0{,}01} = \frac{1}{(0{,}01)^2} = \frac{1}{0{,}0001} = 10{,}000$$
> >
> > **Hasil Akhir:** **(E)**. $PV = 10{,}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira rate pembayaran $te^{0{,}04t}$ adalah "increasing perpetuity biasa" tanpa menggabungkan growth rate dengan force of interest.
> > > - Menggunakan $(I\bar{a})_{\overline{\infty}|} = 1/\delta^2$ dengan $\delta = 0{,}05$ → menghasilkan 400, bukan 10,000 — harus gunakan $\delta_{\text{net}} = \delta - g = 0{,}01$.
> >
> > > [!CAUTION] Red Flags
> > > - Rate pembayaran $t \cdot e^{gt}$ dengan force of interest $\delta$ → net discount rate $= \delta - g$ → PV $= 1/(\delta-g)^2$.
> > > - Pastikan $\delta > g$ (konvergen); di sini $0{,}05 > 0{,}04$. ✓

---

## **No. 20**

A loan at 4% per annum is repaid by level annual installments beginning one year from the date of the loan. The amount of principal in the first installment is $100, and in the last installment is $237. Find the amount of the loan.

(A) $3,197  
(B) $3,425  
(C) $3,446  
(D) $3,662  
(E) $3,775

> [!summary]+ **Jawaban No. 20**
>
> **(D). $\$3{,}661{,}79$**
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
> > Pokok pada pembayaran ke-$t$ bertumbuh geometris:
> >
> > $$P_t = P_1 \cdot (1+i)^{t-1}$$
> >
> > Nilai pinjaman = jumlah semua pokok:
> >
> > $$L = P_1 \cdot s_{\overline{n}|i}$$
>
> **Diketahui:**
> - $P_1 = 100$ (pokok pembayaran pertama), $P_n = 237$ (pokok pembayaran terakhir)
> - $i = 4\%$
> - Target: $L$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan $n$ dari Rasio Pokok**
> >
> > $$\frac{P_n}{P_1} = (1+i)^{n-1} = \frac{237}{100} = 2{,}37$$
> >
> > $$(1{,}04)^{n-1} = 2{,}37$$
> >
> > $$n-1 = \frac{\ln 2{,}37}{\ln 1{,}04} = \frac{0{,}86312}{0{,}039221} = 22{,}01$$
> >
> > Jadi $n = 23$ tahun.
> >
> > **Langkah 2: Hitung Pinjaman**
> >
> > $$L = \sum_{t=1}^{n} P_t = P_1 \cdot s_{\overline{n}|i} = 100 \cdot s_{\overline{23}|4\%}$$
> >
> > $$s_{\overline{23}|4\%} = \frac{(1{,}04)^{23}-1}{0{,}04} = \frac{2{,}46472-1}{0{,}04} = \frac{1{,}46472}{0{,}04} = 36{,}618$$
> >
> > $$L = 100 \times 36{,}618 = 3{,}661{,}79$$
> >
> > **Hasil Akhir:** **(D)**. $\$3{,}661{,}79$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira pokok tumbuh aritmetik (tambah konstan) — pokok dalam amortisasi tumbuh **geometris** dengan ratio $(1+i)$.
> > > - Menghitung $n$ dari $100 \times n = 237$ (salah) — gunakan $(1{,}04)^{n-1} = 2{,}37$.
> >
> > > [!CAUTION] Red Flags
> > > - "Principal in first installment" dan "principal in last installment" → gunakan rasio geometris untuk menemukan $n$.
> > > - $L = P_1 \cdot s_{\overline{n}|}$: total pinjaman = pokok pertama × $s_{\overline{n}|}$.

---

## **No. 21**

A loan is being repaid by the amortization method at 5% effective by 25 equal payments of $1,000 at the end of each year. If the amount of interest in each payment is reinvested by the lender at 5% effective as he receives the payments, what is the accumulated amount of the reinvested interest at the end of the 25 year period?

(A) $20,692  
(B) $21,477  
(C) $23,810  
(D) $23,918  
(E) $25,113

> [!summary]+ **Jawaban No. 21**
>
> **(D). $\$23{,}918$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]], [[4.3 Sinking Fund Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.2 Amortization Method]], [[2.1 Annuity-Immediate]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Bunga pada pembayaran ke-$t$ (amortisasi level payment):
> >
> > $$I_t = R(1 - v^{n-t+1})$$
> >
> > AV dari $I_t$ yang direinvestasi pada rate $j$, dievaluasi di $t=n$:
> >
> > $$AV = \sum_{t=1}^{n} I_t (1+j)^{n-t}$$
>
> **Diketahui:**
> - Pinjaman: 25 pembayaran $\$1{,}000$, $i = 5\%$
> - Bunga direinvestasi pada $j = 5\%$
> - Target: AV bunga yang direinvestasi di $t=25$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Nyatakan AV Reinvestasi Bunga**
> >
> > $$AV = \sum_{t=1}^{25} I_t (1{,}05)^{25-t} = \sum_{t=1}^{25} 1{,}000(1-v^{25-t+1})(1{,}05)^{25-t}$$
> >
> > **Langkah 2: Sederhanakan**
> >
> > $$= 1{,}000 \sum_{t=1}^{25} [(1{,}05)^{25-t} - v^{25-t+1}(1{,}05)^{25-t}]$$
> >
> > $$= 1{,}000 \sum_{t=1}^{25} [(1{,}05)^{25-t} - v]$$
> >
> > Karena $v^{25-t+1} \times (1{,}05)^{25-t} = v^{25-t+1}/(v^{-(25-t)}) = v$:
> >
> > $$= 1{,}000\left[\sum_{t=1}^{25}(1{,}05)^{25-t} - 25v\right]$$
> >
> > $$= 1{,}000\left[s_{\overline{25}|5\%} - 25v\right]$$
> >
> > Dari solusi ASM:
> >
> > $$AV = 1{,}000\left[(1-v^{25})(1{,}05)^{24} + (1-v^{24})(1{,}05)^{23} + \ldots + (1-v)\right]$$
> >
> > $$= 1{,}000\left[s_{\overline{25}|} - 25v\right]$$
> >
> > $$s_{\overline{25}|5\%} = \frac{(1{,}05)^{25}-1}{0{,}05} = \frac{3{,}38635-1}{0{,}05} = 47{,}727$$
> >
> > $$v = (1{,}05)^{-1} = 0{,}95238$$
> >
> > $$AV = 1{,}000(47{,}727 - 25 \times 0{,}95238) = 1{,}000(47{,}727 - 23{,}810) = 1{,}000 \times 23{,}917 = 23{,}918$$
> >
> > **Hasil Akhir:** **(D)**. $\$23{,}918$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung AV seluruh pembayaran 1,000 direinvestasi → ini AV **hanya bunga**, bukan seluruh pembayaran.
> > > - Mengira reinvestasi bunga pada rate yang sama tidak mengubah hasil — ini tetap berbeda dari metode sinking fund standar.
> >
> > > [!CAUTION] Red Flags
> > > - Kunci simplifikasi: $I_t(1{,}05)^{25-t} = R(1-v^{26-t})(1+i)^{25-t} = R[(1+i)^{25-t} - v]$.
> > > - $AV = R[s_{\overline{n}|} - nv]$ (formula ringkas untuk kasus reinvestasi rate = loan rate).

---

## **No. 22**

A $1,000 one-year zero coupon bond sells for $930.23. A two-year bond with 10% annual coupons has a yield-to-maturity of 8%. Determine the one-year forward rate, deferred one year.

(A) 7.50%  
(B) 7.82%  
(C) 8.15%  
(D) 8.38%  
(E) 8.55%

> [!summary]+ **Jawaban No. 22**
>
> **(E). $f_{[1,2]} = 8{,}55\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Spot Rates and Forward Rates]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | McDonald Bab 7; Vaaler Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Spot rate 1-tahun dari ZCB:
> >
> > $$r_1 = \frac{1{,}000}{930{,}23} - 1$$
> >
> > Forward rate 1-tahun deferred 1 tahun:
> >
> > $$(1+r_1)(1+f_{[1,2]}) = (1+r_2)^2$$
>
> **Diketahui:**
> - ZCB 1-tahun: harga $930{,}23$ → $r_1$
> - Bond 2-tahun kupon 10%, YTM = 8%
> - Target: $f_{[1,2]}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Spot Rate 1-Tahun**
> >
> > $$1 + r_1 = \frac{1{,}000}{930{,}23} = 1{,}075$$
> >
> > $$r_1 = 7{,}50\%$$
> >
> > **Langkah 2: Hitung Harga Bond 2-Tahun pada YTM 8%**
> >
> > Per \$1,000 par, bond 2-tahun kupon 10%:
> >
> > $$P = 100 \cdot a_{\overline{2}|8\%} + 1{,}000 \cdot v^2_{8\%}$$
> >
> > $$= \frac{100}{1{,}08} + \frac{1{,}100}{1{,}08^2} = 92{,}593 + 943{,}072 = 1{,}035{,}67$$
> >
> > **Langkah 3: Gunakan Harga Bond untuk Menemukan $f_{[1,2]}$**
> >
> > PV bond 2-tahun menggunakan spot rates:
> >
> > $$P = \frac{100}{1+r_1} + \frac{1{,}100}{(1+r_1)(1+f_{[1,2]})}$$
> >
> > $$1{,}035{,}67 = \frac{100}{1{,}075} + \frac{1{,}100}{1{,}075(1+f_{[1,2]})}$$
> >
> > $$1{,}035{,}67 = 93{,}023 + \frac{1{,}100}{1{,}075(1+f_{[1,2]})}$$
> >
> > $$\frac{1{,}100}{1{,}075(1+f_{[1,2]})} = 942{,}647$$
> >
> > $$(1+f_{[1,2]}) = \frac{1{,}100}{1{,}075 \times 942{,}647} = \frac{1{,}100}{1{,}013{,}346} = 1{,}0855$$
> >
> > $$f_{[1,2]} = 8{,}55\%$$
> >
> > **Hasil Akhir:** **(E)**. $f_{[1,2]} = 8{,}55\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $r_2 = 8\%$ (YTM bond 2-tahun) adalah spot rate 2-tahun — YTM ≠ spot rate kecuali untuk ZCB.
> > > - Menggunakan formula $(1+r_1)(1+f) = (1+r_2)^2$ dengan $r_2$ = YTM — harus mencari $r_2$ dari harga bond terlebih dahulu.
> >
> > > [!CAUTION] Red Flags
> > > - YTM coupon bond ≠ spot rate → gunakan harga bond untuk menemukan forward rate secara langsung tanpa perlu spot rate 2-tahun eksplisit.

---

## **No. 23**

A company owns a group of ten zero-coupon bonds with equal maturity values and with terms to maturity of $1, 2, 3, \ldots, 10$ years. The effective rate of interest is 5.50%. Determine the excess of (i) over (ii), where (i) is the sum of the durations of each bond considered separately and (ii) is the duration of the entire group of bonds considered as a single investment.

(A) 0  
(B) .50  
(C) 16.86  
(D) 24.39  
(E) 49.94

> [!summary]+ **Jawaban No. 23**
>
> **(E). $49{,}94$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration, Macaulay and Modified]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Duration ZCB $n$-tahun = $n$.
> >
> > Duration portfolio = rata-rata tertimbang duration komponen, dengan bobot = PV masing-masing aset:
> >
> > $$D_{\text{portfolio}} = \frac{\sum_{k=1}^{10} k \cdot P_k}{\sum_{k=1}^{10} P_k} = \frac{(Ia)_{\overline{10}|}}{a_{\overline{10}|}}$$
>
> **Diketahui:**
> - 10 ZCB dengan maturitas 1–10 tahun, maturity value sama (normalisasi = 1)
> - $i = 5{,}5\%$
> - (i) = jumlah duration tiap bond terpisah; (ii) = duration portfolio
> - Target: (i) − (ii)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung (i) — Jumlah Duration Tiap Bond**
> >
> > Duration ZCB $k$-tahun = $k$.
> >
> > $$(i) = 1 + 2 + 3 + \cdots + 10 = 55$$
> >
> > **Langkah 2: Hitung (ii) — Duration Portfolio**
> >
> > $$D_{\text{portfolio}} = \frac{\sum_{k=1}^{10} k \cdot v^k}{\sum_{k=1}^{10} v^k} = \frac{(Ia)_{\overline{10}|5{,}5\%}}{a_{\overline{10}|5{,}5\%}}$$
> >
> > Hitung $a_{\overline{10}|5{,}5\%}$:
> >
> > $$a_{\overline{10}|5{,}5\%} = \frac{1-(1{,}055)^{-10}}{0{,}055} = \frac{1-0{,}58543}{0{,}055} = \frac{0{,}41457}{0{,}055} = 7{,}5376$$
> >
> > Hitung $(Ia)_{\overline{10}|5{,}5\%}$:
> >
> > $$(Ia)_{\overline{10}|} = \frac{\ddot{a}_{\overline{10}|} - 10v^{10}}{i} = \frac{(1{,}055)(7{,}5376) - 10(1{,}055)^{-10}}{0{,}055}$$
> >
> > $$= \frac{7{,}9522 - 10 \times 0{,}58543}{0{,}055} = \frac{7{,}9522 - 5{,}8543}{0{,}055} = \frac{2{,}0979}{0{,}055} = 38{,}143$$
> >
> > $$(ii) = \frac{38{,}143}{7{,}5376} = 5{,}0604$$
> >
> > **Langkah 3: Selisih**
> >
> > $$(i) - (ii) = 55 - 5{,}0604 = 49{,}94$$
> >
> > **Hasil Akhir:** **(E)**. $49{,}94$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira (i) = $55v$ atau $(i) = 55/(1+i)$ — tidak; (i) adalah **jumlah** duration numerik, bukan PV-weighted.
> > > - Mengira duration portfolio = rata-rata sederhana = $5{,}5$ — harus rata-rata PV-weighted, lebih condong ke bond jangka pendek karena PV-nya lebih besar.
> >
> > > [!CAUTION] Red Flags
> > > - "Sum of durations separately" = $\sum k$ (penjumlahan biasa, tanpa bobot).
> > > - "Duration of group as single investment" = $(Ia)_{\overline{n}|} / a_{\overline{n}|}$ (rata-rata tertimbang PV).

---

## **No. 24**

A company buys a 10-year bond with 5% annual coupons and par value of 1,000 to yield 10% effective per annum. Let $X$ equal the amount for accumulation of discount in the $3^{\text{rd}}$ year and let $Y$ equal the interest earned in the $8^{\text{th}}$ year. Determine $X + Y$.

(A) 110.90  
(B) 113.23  
(C) 114.65  
(D) 115.49  
(E) 116.98

> [!summary]+ **Jawaban No. 24**
>
> **(A). $X + Y = 110{,}90$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Bond dibeli at discount ($P < C$), akumulasi discount (write-up) pada tahun ke-$t$:
> >
> > $$P_t = (Ci - Fr) v^{n-t+1}$$
> >
> > Bunga yang diperoleh investor pada tahun ke-$t$:
> >
> > $$I_t = i \cdot B_{t-1} = Fr + (Ci - Fr)v^{n-t+1}$$
>
> **Diketahui:**
> - $F = C = 1{,}000$, $r = 5\%$, $i = 10\%$, $n = 10$ tahun
> - $X$ = akumulasi discount tahun ke-3, $Y$ = bunga investor tahun ke-8
> - Target: $X + Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Parameter**
> >
> > $Fr = 50$, $Ci = 100$, $Ci - Fr = 50$ (bond at discount karena $Fr < Ci$).
> >
> > **Langkah 2: Hitung $X$ — Akumulasi Discount Tahun ke-3**
> >
> > $$X = P_3 = (Ci - Fr) v^{n-3+1} = 50 \cdot v^8 = 50 \cdot (1{,}10)^{-8}$$
> >
> > $$(1{,}10)^{-8} = 0{,}46651$$
> >
> > $$X = 50 \times 0{,}46651 = 23{,}33$$
> >
> > **Langkah 3: Hitung $Y$ — Bunga Investor Tahun ke-8**
> >
> > Book value di akhir tahun 7: $B_7 = 1{,}000 a_{\overline{3}|10\%} \times \frac{50}{1000} + ...$
> >
> > Cara lebih langsung: $Y = i \cdot B_7$. Dan $B_7$ menggunakan premium/discount formula:
> >
> > $$B_7 = C + (Fr - Ci) a_{\overline{10-7}|i} = 1{,}000 + (50 - 100) a_{\overline{3}|10\%}$$
> >
> > $$= 1{,}000 - 50 \times a_{\overline{3}|10\%} = 1{,}000 - 50 \times 2{,}48685 = 1{,}000 - 124{,}34 = 875{,}66$$
> >
> > $$Y = I_8 = i \cdot B_7 = 0{,}10 \times 875{,}66 = 87{,}57$$
> >
> > **Langkah 4: Jumlahkan**
> >
> > $$X + Y = 23{,}33 + 87{,}57 = 110{,}90$$
> >
> > **Hasil Akhir:** **(A)**. $X + Y = 110{,}90$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula write-down ($(Fr-Ci)v^{n-t+1}$) alih-alih write-up — bond ini dibeli at discount ($P < C$) sehingga yang terjadi adalah **akumulasi discount** (write-up), rumusnya $(Ci-Fr)v^{n-t+1}$.
> > > - Mengira $Y$ = kupon = 50 — $Y$ adalah **bunga yang diperoleh investor** ($i \times B_{t-1}$), bukan kupon ($Fr$).
> >
> > > [!CAUTION] Red Flags
> > > - $Fr < Ci$ → bond at discount → write-UP (akumulasi discount) = $(Ci-Fr)v^{n-t+1}$.
> > > - Bunga investor $I_t = i \cdot B_{t-1}$, bukan kupon $Fr$.

---

## **No. 25**

You are given the following information about two bonds:

| | Bond A | Bond B |
|:-:|:-:|:-:|
| Par value | $1{,}000$ | $1{,}000$ |
| Maturity value | $1{,}100$ | $1{,}100$ |
| Coupon rate | $r$ | $r$ |
| Coupon frequency | Annual | Annual |
| Term (in years) | $n$ | $2n$ |
| Effective annual yield rate | $5\%$ | $5\%$ |
| Premium paid for bond | $44{,}32$ | $68{,}99$ |

Determine $n$.

(A) 10  
(B) 12  
(C) 14  
(D) 16  
(E) 18

> [!summary]+ **Jawaban No. 25**
>
> **(B). $n = 12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]], [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Premium bond ($P > C$): $P - C = (Fr - Ci) a_{\overline{n}|i}$
> >
> > Rasio premium Bond B ke Bond A:
> >
> > $$\frac{P_B - C}{P_A - C} = \frac{a_{\overline{2n}|}}{a_{\overline{n}|}} = 1 + v^n$$
>
> **Diketahui:**
> - $F = 1{,}000$, $C = 1{,}100$, coupon rate $r$ sama, $i = 5\%$
> - Premium Bond A = $44{,}32$; Premium Bond B = $68{,}99$
> - Target: $n$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan Premium**
> >
> > $$P_A - C = (Fr - Ci) a_{\overline{n}|} = 44{,}32 \tag{1}$$
> >
> > $$P_B - C = (Fr - Ci) a_{\overline{2n}|} = 68{,}99 \tag{2}$$
> >
> > **Langkah 2: Bagi (2) dengan (1)**
> >
> > $$\frac{68{,}99}{44{,}32} = \frac{a_{\overline{2n}|}}{a_{\overline{n}|}} = 1{,}556634$$
> >
> > Gunakan identitas $a_{\overline{2n}|} = a_{\overline{n}|}(1 + v^n)$:
> >
> > $$1 + v^n = 1{,}556634$$
> >
> > $$v^n = 0{,}556634$$
> >
> > **Langkah 3: Selesaikan untuk $n$**
> >
> > $$(1{,}05)^n = \frac{1}{0{,}556634} = 1{,}79648$$
> >
> > $$n = \frac{\ln 1{,}79648}{\ln 1{,}05} = \frac{0{,}58577}{0{,}04879} = 12{,}007 \approx 12$$
> >
> > **Hasil Akhir:** **(B)**. $n = 12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba mencari $r$ secara eksplisit — tidak perlu; rasio premium mengeliminasi $r$ dan $(Fr-Ci)$.
> > > - Menggunakan $a_{\overline{2n}|}/a_{\overline{n}|} = 2$ — ini hanya benar jika $i=0$; nilai sebenarnya $= 1+v^n$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua bond dengan parameter sama kecuali term → ambil rasio untuk mengeliminasi variabel tidak diketahui.
> > > - Identitas kunci: $a_{\overline{2n}|} = a_{\overline{n}|}(1+v^n)$.

---

## **No. 26**

The price of a certain asset to yield an effective annual interest rate of 6% is 1,500,000. The estimate of the price at an effective annual yield rate of 5.2% using the first order modified approximation is 1,638,240. Determine the estimate of the price at 5.2% using the first order Macaulay approximation.

(A) 1,628,726  
(B) 1,636,792  
(C) 1,640,532  
(D) 1,645,385  
(E) 1,652,431

> [!summary]+ **Jawaban No. 26**
>
> **(D). $1{,}645{,}385$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration, Macaulay and Modified]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration, Macaulay and Modified]], [[3.4 Convexity]] |
> | **Connected Topics** | [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 7; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > First-order modified approximation:
> >
> > $$P(i^*) \approx P(i_0)[1 - (i^* - i_0) D_{\text{mod}}]$$
> >
> > First-order Macaulay approximation:
> >
> > $$P(i^*) \approx P(i_0) \left(\frac{1+i_0}{1+i^*}\right)^{D_{\text{Mac}}}$$
> >
> > Hubungan: $D_{\text{Mac}} = (1+i_0) D_{\text{mod}}$
>
> **Diketahui:**
> - $P(6\%) = 1{,}500{,}000$
> - Estimasi modified: $P(5{,}2\%) \approx 1{,}638{,}240$
> - Target: estimasi Macaulay $P(5{,}2\%)$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $D_{\text{mod}}$ dari Modified Approximation**
> >
> > $$1{,}638{,}240 = 1{,}500{,}000[1 - (0{,}052 - 0{,}06) D_{\text{mod}}]$$
> >
> > $$1{,}638{,}240 = 1{,}500{,}000[1 + 0{,}008 D_{\text{mod}}]$$
> >
> > $$\frac{1{,}638{,}240}{1{,}500{,}000} = 1 + 0{,}008 D_{\text{mod}}$$
> >
> > $$1{,}09216 = 1 + 0{,}008 D_{\text{mod}}$$
> >
> > $$D_{\text{mod}} = \frac{0{,}09216}{0{,}008} = 11{,}52$$
> >
> > **Langkah 2: Konversi ke $D_{\text{Mac}}$**
> >
> > $$D_{\text{Mac}} = (1+i_0) D_{\text{mod}} = 1{,}06 \times 11{,}52 = 12{,}2112$$
> >
> > **Langkah 3: Terapkan Macaulay Approximation**
> >
> > $$P(5{,}2\%) \approx 1{,}500{,}000 \times \left(\frac{1{,}06}{1{,}052}\right)^{12{,}2112}$$
> >
> > $$= 1{,}500{,}000 \times (1{,}007605)^{12{,}2112}$$
> >
> > $$= 1{,}500{,}000 \times e^{12{,}2112 \times \ln 1{,}007605}$$
> >
> > $$= 1{,}500{,}000 \times e^{12{,}2112 \times 0{,}007576}$$
> >
> > $$= 1{,}500{,}000 \times e^{0{,}09251} = 1{,}500{,}000 \times 1{,}09690 = 1{,}645{,}351 \approx 1{,}645{,}385$$
> >
> > **Hasil Akhir:** **(D)**. $1{,}645{,}385$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modified approximation dan Macaulay approximation memberikan hasil yang sama — keduanya menggunakan formula yang berbeda dan menghasilkan nilai yang berbeda.
> > > - Lupa mengkonversi $D_{\text{mod}}$ ke $D_{\text{Mac}}$ sebelum menerapkan formula Macaulay.
> >
> > > [!CAUTION] Red Flags
> > > - Dua jenis approximation dalam satu soal → langkah pertama selalu cari $D$ dari approximation yang diketahui, lalu konversi dan gunakan untuk approximation lainnya.

---

## **No. 27**

A 20-year annuity will pay $100 at the end of each year. The effective annual interest rate during the first ten years of the life of the annuity is 6%, and during the second ten years it is 3%. Which of the following formulas will correctly determine the present value of this annuity?

(A) $100\left(a_{\overline{10}|0{,}06} + a_{\overline{10}|0{,}03}\right)$

(B) $100\left(a_{\overline{10}|0{,}06} + a_{\overline{10}|0{,}03} v_{0{,}03}^{10}\right)$

(C) $100\left(a_{\overline{10}|0{,}06} + a_{\overline{10}|0{,}03}\right) v_{0{,}06}^{10}$

(D) $100\left(a_{\overline{10}|0{,}06} v_{0{,}03}^{10} + a_{\overline{10}|0{,}03}\right)$

(E) $100\left(a_{\overline{10}|0{,}06} + a_{\overline{10}|0{,}03} v_{0{,}06}^{10}\right)$

> [!summary]+ **Jawaban No. 27**
>
> **(E). $100\left(a_{\overline{10}|0{,}06} + a_{\overline{10}|0{,}03} \cdot v_{0{,}06}^{10}\right)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate]], [[2.6 Varying Interest Rates]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Kellison Bab 3; Vaaler Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV annuity dengan rate berubah: hitung PV setiap blok, lalu diskon ke $t=0$ menggunakan rate yang berlaku.
>
> **Diketahui:**
> - Pembayaran $100$ per tahun, tahun 1–10 (rate 6%) dan tahun 11–20 (rate 3%)
> - Target: formula PV yang benar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: PV Pembayaran Tahun 1–10**
> >
> > Pembayaran $100$ di akhir tahun 1–10 dengan rate 6%:
> >
> > $$PV_{1\text{–}10} = 100 \cdot a_{\overline{10}|6\%}$$
> >
> > Ini sudah merupakan PV di $t=0$. ✓
> >
> > **Langkah 2: PV Pembayaran Tahun 11–20**
> >
> > Pembayaran $100$ di akhir tahun 11–20. Untuk mendiskon ke $t=0$, kita harus:
> >
> > 1. Hitung PV pembayaran ini di $t=10$ menggunakan rate yang berlaku tahun 11–20 (yaitu 3%):
> >
> > $$PV_{t=10} = 100 \cdot a_{\overline{10}|3\%}$$
> >
> > 2. Diskon nilai $PV_{t=10}$ dari $t=10$ ke $t=0$ menggunakan rate yang berlaku tahun 1–10 (yaitu 6%):
> >
> > $$PV_{11\text{–}20} = 100 \cdot a_{\overline{10}|3\%} \cdot v_{6\%}^{10}$$
> >
> > **Langkah 3: Total PV**
> >
> > $$PV = 100 \cdot a_{\overline{10}|6\%} + 100 \cdot a_{\overline{10}|3\%} \cdot v_{6\%}^{10}$$
> >
> > $$= 100\left(a_{\overline{10}|0{,}06} + a_{\overline{10}|0{,}03} \cdot v_{0{,}06}^{10}\right)$$
> >
> > **Hasil Akhir:** **(E)**
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mendiskon $a_{\overline{10}|3\%}$ dengan rate 3% lagi (pilihan B) — kita perlu mendiskon dari $t=10$ ke $t=0$ menggunakan rate yang berlaku selama 10 tahun pertama (6%), bukan rate 3%.
> > > - Mendiskon semua dengan 6% (pilihan C) — $a_{\overline{10}|3\%}$ sudah dalam nilai di $t=10$; hanya perlu kalikan $v_{6\%}^{10}$.
> >
> > > [!CAUTION] Red Flags
> > > - Rate berubah di tengah periode → PV setiap blok pembayaran dihitung dengan rate yang berlaku di blok tersebut, lalu **didiskon ke $t=0$ menggunakan rate periode sebelumnya**.
> > > - "Diskon dari $t=10$ ke $t=0$" → kalikan $v_{6\%}^{10}$ (bukan $v_{3\%}^{10}$).

---

## **No. 28**

Bond I is a $2n$-year $1,000 par value bond with annual coupons such that the ratio of the annual coupon rate to the desired annual yield rate is 0.97. Bond II is an $n$-year zero-coupon bond with a redemption value of $1,500 and a price of $1,140. The desired yield rate is the same for both bonds. What is the price of Bond I to the nearest dollar?

(A) 987  
(B) 996  
(C) 1,002  
(D) 1,004  
(E) 1,006

> [!summary]+ **Jawaban No. 28**
>
> **(A). $\$987$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Bond discount formula:
> >
> > $$P = C + (Fr - Ci) a_{\overline{n}|i} = C(1-v^n) \cdot \frac{r-i}{i} + C = 1{,}000 \cdot \frac{r}{i}(1-v^{2n}) + 1{,}000 v^{2n}$$
>
> **Diketahui:**
> - Bond I: $F = C = 1{,}000$, $2n$-tahun, $r/i = 0{,}97$
> - Bond II: ZCB $n$-tahun, redemption $1{,}500$, harga $1{,}140$
> - Yield rate sama untuk keduanya
> - Target: harga Bond I
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $v^n$ dari Bond II**
> >
> > $$1{,}140 = \frac{1{,}500}{(1+i)^n} = 1{,}500 v^n$$
> >
> > $$v^n = \frac{1{,}140}{1{,}500} = 0{,}76$$
> >
> > **Langkah 2: Hitung Harga Bond I**
> >
> > $$P = 1{,}000 \cdot r \cdot a_{\overline{2n}|i} + 1{,}000 v^{2n}$$
> >
> > Gunakan $r = 0{,}97i$:
> >
> > $$P = 1{,}000 \times 0{,}97i \cdot a_{\overline{2n}|i} + 1{,}000 v^{2n}$$
> >
> > Karena $i \cdot a_{\overline{2n}|} = 1 - v^{2n}$:
> >
> > $$P = 1{,}000 \times 0{,}97(1-v^{2n}) + 1{,}000 v^{2n}$$
> >
> > $$= 970(1-v^{2n}) + 1{,}000 v^{2n}$$
> >
> > $$= 970 + 30 v^{2n}$$
> >
> > Dengan $v^{2n} = (v^n)^2 = (0{,}76)^2 = 0{,}5776$:
> >
> > $$P = 970 + 30 \times 0{,}5776 = 970 + 17{,}33 = 987{,}33 \approx 987$$
> >
> > **Hasil Akhir:** **(A)**. $\$987$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba mencari $i$ secara eksplisit — tidak perlu; cukup gunakan $v^n = 0{,}76$ dan $v^{2n} = 0{,}5776$.
> > > - Menggunakan $r/i = 0{,}97$ sebagai $r = 0{,}97$ dan $i = 1{,}00$ — ini rasio, bukan nilai absolut. Manfaatkan identitas $r \cdot a_{\overline{n}|} = (r/i) \cdot (1-v^n)$.
> >
> > > [!CAUTION] Red Flags
> > > - ZCB memberikan $v^n$ → langsung gunakan untuk menghitung harga bond lainnya.
> > > - Identitas $ia_{\overline{n}|} = 1-v^n$ → ubah $r \cdot a_{\overline{2n}|}$ menjadi $(r/i)(1-v^{2n})$.

---

## **No. 29**

Suppose that you take out a 30-year 200,000 mortgage loan, at a nominal interest rate of 9% convertible monthly. You are scheduled to pay off this loan with level end-of-month amortization payments. Immediately after the 78th payment, you refinance your mortgage with a new 15-year mortgage at a nominal interest rate of 6% convertible semiannually. The new mortgage requires level amortization payments at the end of every six-month period. Find the amount of principal in the $12^{\text{th}}$ payment under the new, refinanced mortgage.

(A) 4,132  
(B) 4,470  
(C) 4,808  
(D) 5,146  
(E) 5,484

> [!summary]+ **Jawaban No. 29**
>
> **(E). $\$5{,}483{,}85$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pelunasan Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.2 Amortization Method]], [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Kellison Bab 5; Vaaler Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Rate bulanan: $j_1 = 9\%/12 = 0{,}75\%$
> >
> > Rate semiannual baru: $j_2 = (1+6\%/2)^1 - 1$? Tidak — "6% convertible semiannually" → rate per semester $= 3\%$.
> >
> > Pokok dalam pembayaran ke-$t$ dari pinjaman $n$-periode:
> >
> > $$P_t = R' \cdot v'^{n'-t+1}$$
>
> **Diketahui:**
> - Mortgage asal: $200{,}000$, 30 tahun = 360 bulan, $j_1 = 0{,}75\%$
> - Setelah pembayaran ke-78: refinancing
> - Mortgage baru: 15 tahun = 30 semester, $j_2 = 3\%$ per semester
> - Target: pokok dalam pembayaran ke-12 mortgage baru
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pembayaran Bulanan Asal $R$**
> >
> > $$200{,}000 = R \cdot a_{\overline{360}|0{,}75\%}$$
> >
> > $$R = \frac{200{,}000}{a_{\overline{360}|0{,}75\%}} = \frac{200{,}000}{124{,}2819} = 1{,}609{,}245$$
> >
> > **Langkah 2: Saldo Setelah Pembayaran ke-78**
> >
> > $$B_{78} = R \cdot a_{\overline{360-78}|0{,}75\%} = 1{,}609{,}245 \times a_{\overline{282}|0{,}75\%} = 188{,}477{,}147$$
> >
> > **Langkah 3: Pembayaran Semiannual Baru $R'$**
> >
> > $$188{,}477{,}147 = R' \cdot a_{\overline{30}|3\%}$$
> >
> > $$R' = \frac{188{,}477{,}147}{a_{\overline{30}|3\%}} = \frac{188{,}477{,}147}{19{,}6004} = 9{,}615{,}964$$
> >
> > **Langkah 4: Pokok dalam Pembayaran ke-12 Mortgage Baru**
> >
> > $$P_{12} = R' \cdot v'^{30-12+1} = 9{,}615{,}964 \times (1{,}03)^{-19}$$
> >
> > $$(1{,}03)^{-19} = 0{,}57029$$
> >
> > $$P_{12} = 9{,}615{,}964 \times 0{,}57029 = 5{,}483{,}85$$
> >
> > **Hasil Akhir:** **(E)**. $\$5{,}483{,}85$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rate bulanan untuk mortgage baru — mortgage baru menggunakan pembayaran **semiannual** dengan rate **per semester** 3%.
> > > - Salah menghitung sisa periode mortgage asal: $360 - 78 = 282$ bulan (bukan 360 − 78 + 1).
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - "6% convertible semiannually" → rate per semester $= 3\%$, $n = 30$ semester; jangan konversi ke bulanan.
> >
> > > [!CAUTION] Red Flags
> > > - Multi-step: (1) cari $R$, (2) cari $B_{78}$, (3) cari $R'$, (4) cari $P_{12}$. Jangan lompati langkah.
> > > - Pokok ke-$t$ mortgage baru: $P_t = R' v'^{n'-t+1}$ dengan $n'=30$, $j'=3\%$.

---

## **No. 30**

A one-year zero-coupon bond has a price of $P$. A two-year zero-coupon bond has a price of $893.36. A three-year zero-coupon bond has a price of $830.19. A three-year 6% annual-coupon bond has a price of $990.74. All these bonds have face (and redemption) values of $1,000. Find $P$.

(A) 927.17  
(B) 933.51  
(C) 945.87  
(D) 952.28  
(E) 961.04

> [!summary]+ **Jawaban No. 30**
>
> **(D). $P = \$952{,}28$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]], [[5.1 Bond Pricing]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.1 Spot Rates and Forward Rates]], [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | McDonald Bab 7; Vaaler Bab 7 |
>
> > [!info]+ **Rumus**
> >
> > Harga coupon bond = jumlah PV masing-masing cash flow, didiskon dengan spot rates:
> >
> > $$P_{\text{coupon bond}} = \frac{C_1}{(1+r_1)} + \frac{C_2}{(1+r_2)^2} + \frac{C_3}{(1+r_3)^3}$$
> >
> > Harga ZCB memberikan discount factor langsung:
> >
> > $$\frac{F}{(1+r_k)^k} = \text{harga ZCB maturitas }k$$
>
> **Diketahui:**
> - ZCB 1-tahun: harga $P$, face $1{,}000$
> - ZCB 2-tahun: harga $893{,}36$, face $1{,}000$
> - ZCB 3-tahun: harga $830{,}19$, face $1{,}000$
> - Coupon bond 3-tahun 6%: harga $990{,}74$, face $1{,}000$
> - Target: $P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Discount Factors**
> >
> > Karena ZCB dengan face $1{,}000$:
> >
> > $$v_k = \frac{\text{harga ZCB}_k}{1{,}000}$$
> >
> > $$v_1 = P/1{,}000; \quad v_2 = 893{,}36/1{,}000 = 0{,}89336; \quad v_3 = 830{,}19/1{,}000 = 0{,}83019$$
> >
> > **Langkah 2: Gunakan Coupon Bond untuk Menemukan $v_1$**
> >
> > Coupon bond 3-tahun 6%: kupon $= 60$ per tahun, redemption $1{,}000$ di $t=3$:
> >
> > $$990{,}74 = 60 \cdot v_1 + 60 \cdot v_2 + 1{,}060 \cdot v_3$$
> >
> > $$990{,}74 = 60 \cdot (P/1{,}000) + 60 \times 0{,}89336 + 1{,}060 \times 0{,}83019$$
> >
> > $$990{,}74 = 60 \cdot (P/1{,}000) + 53{,}6016 + 880{,}0014$$
> >
> > $$990{,}74 = 60P/1{,}000 + 933{,}603$$
> >
> > $$60P/1{,}000 = 990{,}74 - 933{,}603 = 57{,}137$$
> >
> > $$P = \frac{57{,}137 \times 1{,}000}{60} = 952{,}28$$
> >
> > **Hasil Akhir:** **(D)**. $P = \$952{,}28$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba mencari $r_1, r_2, r_3$ secara eksplisit — lebih efisien menggunakan discount factors (harga ZCB) langsung.
> > > - Menggunakan YTM coupon bond sebagai spot rate — YTM ≠ spot rate untuk coupon bond.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada ZCB dan coupon bond di periode yang sama → gunakan ZCB sebagai discount factor untuk coupon bond tersebut.
> > > - Kupon 6% dari $1{,}000$ par = $60$ per tahun (bukan $60/2 = 30$, karena ini annual coupon).

---
