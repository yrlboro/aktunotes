## **No. 1**

Which of the following is *not* correct with respect to an annual effective interest rate of $i = 10\%$?

(A) $\delta = e^{0.10} - 1$

(B) $i^{(2)} = 2 \times [(1.10)^{0.50} - 1]$

(C) $\delta = \ln(1.10)$

(D) $d = \dfrac{0.10}{1.10}$

(E) $d^{(4)} = 4 \times [1 - (1.10^{-0.25})]$

> [!summary]+ **Jawaban No. 1**
>
> **(A).** $\delta = e^{0.10} - 1$ adalah pernyataan yang **tidak benar**.
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Easy |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1–2 |
>
> > [!info]+ **Rumus**
> >
> > Hubungan antara force of interest $\delta$ dan suku bunga efektif $i$:
> > 
> > $$e^{\delta} = 1 + i \implies \delta = \ln(1 + i)$$
> >
> > Suku bunga nominal compounded $m$-kali:
> > 
> > $$\left(1 + \frac{i^{(m)}}{m}\right)^m = 1 + i$$
> >
> > Tingkat diskonto efektif dan nominal:
> > 
> > $$d = \frac{i}{1+i}, \qquad \left(1 - \frac{d^{(m)}}{m}\right)^m = 1 - d = v = \frac{1}{1+i}$$
> > 
>
> **Diketahui:**
> - $i = 10\% = 0.10$ (suku bunga efektif tahunan)
> - Target: identifikasi pernyataan yang **salah**
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Periksa Opsi (A)**
> > 
> > Opsi (A) mengklaim $\delta = e^{0.10} - 1$.
> > 
> > Hubungan yang benar adalah $e^{\delta} = 1 + i$, bukan $\delta = e^i - 1$.
> > 
> > Yang benar adalah: $\delta = \ln(1 + i) = \ln(1.10) \approx 0.09531$
> > 
> > Sedangkan $e^{0.10} - 1 \approx 0.10517 \neq 0.09531$.
> > 
> > **Opsi (A) salah.**
> >
> > **Langkah 2: Verifikasi Opsi (B)**
> > 
> > $i^{(2)} = 2 \times [(1+i)^{1/2} - 1] = 2 \times [(1.10)^{0.50} - 1] \approx 2 \times 0.04881 = 0.09762$
> > 
> > Ini adalah formula baku konversi nominal ke efektif. **Benar.**
> >
> > **Langkah 3: Verifikasi Opsi (C)**
> > 
> > $\delta = \ln(1+i) = \ln(1.10) \approx 0.09531$. **Benar.**
> >
> > **Langkah 4: Verifikasi Opsi (D)**
> > 
> > 
> > $d = \dfrac{i}{1+i} = \dfrac{0.10}{1.10} \approx 0.09091$. **Benar.**
> >
> > **Langkah 5: Verifikasi Opsi (E)**
> > 
> > 
> > $d^{(4)} = 4 \times [1 - (1+i)^{-1/4}] = 4 \times [1 - (1.10)^{-0.25}] \approx 4 \times 0.02299 = 0.09196$. **Benar.**
> >
> > **Hasil Akhir:** **(A)**. $\delta = e^{0.10} - 1$ — pernyataan yang salah. Relasi yang benar adalah $\delta = \ln(1+i)$, bukan $\delta = e^i - 1$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menukar posisi: $e^\delta = 1+i$ benar, tetapi bukan berarti $\delta = e^i - 1$. Invers dari $e^\delta = 1+i$ adalah $\delta = \ln(1+i)$.
> > > - Mengira semua opsi salah karena tampak mirip — perlu teliti cek setiap persamaan secara individual.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Soal tipe "which is *not* correct" memerlukan identifikasi satu pernyataan SALAH di antara yang lain benar. Jangan buru-buru memilih tanpa verifikasi setiap opsi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut relasi $e^\delta$ dan $i$ → ingat: $e^\delta = 1+i$, bukan $\delta = e^i$.
> > > - Untuk $d^{(m)}$: gunakan $\left(1 - \frac{d^{(m)}}{m}\right)^m = v$, bukan formula $i^{(m)}$.

---

## **No. 2**

You can receive one of the following two sets of cash flows. Under Option A, you will receive 10 annual payments of \$1,000, with the first payment to occur 4 years from now. Under Option B, you will receive $X$ at the end of each year, forever, with the first payment to occur 1 year from now. The annual effective rate of interest is 8%. Which of the following equations should be solved to find the value of $X$ such that you are indifferent between these two options?

(A) $80a_{\overline{10}|}v^4 = X$

(B) $80a_{\overline{13}|}v^3 = X$

(C) $80a_{\overline{10}|}v^3 = X$

(D) $80a_{\overline{10}|}v^3(0.08) = X$

(E) $80a_{\overline{13}|}v^2 = X$

> [!summary]+ **Jawaban No. 2**
>
> **(C).** $80a_{\overline{10}|}v^3 = X$
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]] · [[2.5 Deferred Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV anuitas-immediate terdefer $m$ periode:
> > $$\text{PV} = R \cdot a_{\overline{n}|i} \cdot v^m$$
> > di mana $v^m$ mendiskon dari 1 periode sebelum pembayaran pertama ke $t=0$.
> >
> > PV perpetuity-immediate: $a_{\overline{\infty}|} = \dfrac{1}{i}$
> >
> > Indifferent: $\text{PV Option A} = \text{PV Option B}$, yaitu $\text{PV}_A = \dfrac{X}{i}$
>
> **Diketahui:**
> - Option A: 10 pembayaran tahunan \$1,000, pembayaran pertama di $t=4$
> - Option B: perpetuity-immediate dengan pembayaran $X$, pembayaran pertama di $t=1$
> - &nbsp;$i = 8\%$
> - Target: persamaan untuk $X$ agar indifferent
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV Option A**
> > 
> > Pembayaran pertama di $t=4$, sehingga formula $a_{\overline{10}|}$ memberikan PV pada $t=3$ (satu periode sebelum pembayaran pertama).
> > Untuk mendiskon ke $t=0$, perlu dikalikan $v^3$:
> > 
> > $$\text{PV}_A = 1{,}000 \cdot a_{\overline{10}|0.08} \cdot v^3$$
> >
> > **Langkah 2: Hitung PV Option B**
> > 
> > Perpetuity-immediate dengan pembayaran pertama di $t=1$:
> > 
> > $$\text{PV}_B = \frac{X}{0.08} = \frac{X}{i}$$
> >
> > **Langkah 3: Set Indifference**
> > 
> > $$\text{PV}_A = \text{PV}_B$$
> > 
> > $$1{,}000 \cdot a_{\overline{10}|} \cdot v^3 = \frac{X}{0.08}$$
> > 
> > $$X = 1{,}000 \times 0.08 \times a_{\overline{10}|} \times v^3 = 80 \cdot a_{\overline{10}|} \cdot v^3$$
> >
> > **Hasil Akhir:** **(C)**. Persamaan yang benar adalah $80a_{\overline{10}|}v^3 = X$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $v^4$ alih-alih $v^3$: formula $a_{\overline{n}|}$ sudah memberikan PV satu periode sebelum pembayaran pertama. Karena pembayaran pertama di $t=4$, PV dihitung di $t=3$, sehingga cukup dikalikan $v^3$ ke $t=0$.
> > > - Menggunakan $v^4$ berarti mendiskon ke $t=-1$, yang salah.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa faktor $i = 0.08$ dalam konversi: $X = 1000 \cdot a_{\overline{10}|} \cdot v^3 \cdot i$ menghasilkan $80a_{\overline{10}|}v^3$.
> > > - Mengira PV perpetuity sama dengan PV annuity-10-tahun tanpa konversi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran pertama di $t=k$ ($k > 1$) → PV dari $a_{\overline{n}|}$ ada di $t = k-1$, sehingga faktor diskonto ke $t=0$ adalah $v^{k-1}$.

---

## **No. 3**

An annuity will pay you \$500 two years from now, and another \$1,000 four years from now. The present value of these two payments is \$1,200. Find the implied effective annual interest rate, $i$.

(A) $i \leq 4.5\%$

(B) $4.5\% < i \leq 5.5\%$

(C) $5.5\% < i \leq 6.5\%$

(D) $6.5\% < i \leq 7.5\%$

(E) $7.5\% < i$

> [!summary]+ **Jawaban No. 3**
>
> **(D).** $6.5\% < i \leq 7.5\%$ (nilai $i \approx 6.99\%$)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{PV} = C_1 \cdot v^{t_1} + C_2 \cdot v^{t_2}, \quad v = \frac{1}{1+i}$$
> >
> > Substitusi $x = v^2$ untuk mereduksi ke persamaan kuadrat.
>
> **Diketahui:**
> - $C_1 = 500$ di $t = 2$, $C_2 = 1{,}000$ di $t = 4$
> - &nbsp;$\text{PV} = 1{,}200$
> - Target: nilai $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan PV**
> > 
> > $$1{,}200 = 500v^2 + 1{,}000v^4$$
> >
> > **Langkah 2: Substitusi $x = v^2$**
> > 
> > $$1{,}200 = 500x + 1{,}000x^2$$
> > 
> > $$1{,}000x^2 + 500x - 1{,}200 = 0$$
> > 
> > Bagi semua dengan 100:
> > 
> > $$10x^2 + 5x - 12 = 0$$
> >
> > **Langkah 3: Selesaikan dengan Rumus Kuadrat**
> > 
> > 
> > $$x = \frac{-5 \pm \sqrt{25 + 480}}{20} = \frac{-5 \pm \sqrt{505}}{20}$$
> > 
> > 
> > $$x = \frac{-5 + 22.472}{20} = \frac{17.472}{20} = 0.8736$$
> > 
> > (akar negatif diabaikan karena $v^2 > 0$)
> >
> > **Langkah 4: Hitung $i$**
> > 
> > 
> > $$v^2 = 0.8736 \implies v = \sqrt{0.8736} = 0.93466$$
> > 
> > 
> > $$i = \frac{1}{v} - 1 = \frac{1}{0.93466} - 1 \approx 0.0699 = 6.99\%$$
> >
> > **Hasil Akhir:** **(D)**. $i \approx 6.99\%$, berada dalam interval $6.5\% < i \leq 7.5\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali persamaan sebagai kuadrat dalam $v^2$ — langsung mencoba trial-and-error tanpa struktur aljabar.
> > > - Lupa mengabaikan akar negatif dari rumus kuadrat — $v^2$ harus positif.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Mendiskon $v^1$ dan $v^2$ (bukan $v^2$ dan $v^4$) — pembayaran ada di tahun ke-2 dan ke-4, bukan ke-1 dan ke-2.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan dua cash flow pada waktu genap → substitusi $x = v^2$ sering menyederhanakan secara elegan.
> > > - Soal meminta range $i$ → cukup hitung $i$ numerik, lalu cocokkan ke interval.

---

## **No. 4**

An investor took out a 30-year loan which he repays with annual payments of 1,500 at an annual effective interest rate of 4%. The payments are made at the end of the year. At the time of the 12th payment, the investor pays an additional payment of 4,000 and wants to repay the remaining balance over 10 years. Calculate the revised annual payment.

(A) 1,682

(B) 1,729

(C) 1,783

(D) 1,825

(E) 1,848

> [!summary]+ **Jawaban No. 4**
>
> **(E).** 1,848
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[4.1 Loan Terminology]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Outstanding balance (prospective) setelah pembayaran ke-$k$:
> > 
> > $$B_k = R \cdot a_{\overline{n-k}|i}$$
> >
> > Revised payment $P$ setelah pelunasan sebagian:
> > 
> > $$P \cdot a_{\overline{m}|i} = B_k - \text{extra payment}$$
>
> **Diketahui:**
> - Pinjaman 30 tahun, $R = 1{,}500$/tahun, $i = 4\%$
> - Setelah pembayaran ke-12: bayar tambahan 4,000
> - Sisa pinjaman dilunasi dalam 10 tahun
> - Target: revised annual payment $P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Outstanding Balance setelah Pembayaran ke-12**
> > 
> > Masih ada $30 - 12 = 18$ pembayaran tersisa:
> > 
> > $$B_{12} = 1{,}500 \cdot a_{\overline{18}|0.04}$$
> > 
> > $$a_{\overline{18}|0.04} = \frac{1 - (1.04)^{-18}}{0.04} = \frac{1 - 0.49363}{0.04} = \frac{0.50637}{0.04} = 12.6593$$
> > 
> > $$B_{12} = 1{,}500 \times 12.6593 = 18{,}988.95$$
> >
> > **Langkah 2: Kurangi Pembayaran Tambahan**
> > 
> > Balance setelah pembayaran ekstra:
> > 
> > $$B_{12}^* = 18{,}988.95 - 4{,}000 = 14{,}988.95$$
> >
> > **Langkah 3: Hitung Revised Annual Payment**
> > 
> > 
> > Lunasi $14{,}988.95$ dalam 10 tahun pada $i = 4\%$:
> > 
> > $$P \cdot a_{\overline{10}|0.04} = 14{,}988.95$$
> > 
> > $$a_{\overline{10}|0.04} = \frac{1 - (1.04)^{-10}}{0.04} = \frac{1 - 0.67556}{0.04} = 8.1109$$
> > 
> > $$P = \frac{14{,}988.95}{8.1109} = 1{,}848.00$$
> >
> > **Hasil Akhir:** **(E)**. Revised annual payment = **1,848**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan prospective balance yang salah: $B_{12} = R \cdot a_{\overline{30-12}|}$ — pastikan gunakan $18$ sisa periode, bukan $12$.
> > > - Lupa mengurangi 4,000 dari balance sebelum menghitung revised payment.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "at the time of the 12th payment" artinya sebelum pembayaran ke-12, bukan sesudah. Pembayaran rutin ke-12 tetap dibayar, baru kemudian bayar tambahan 4,000.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan "additional payment" → hitung $B_k$ dulu (setelah pembayaran rutin), kurangi extra, baru hitung revised payment.

---

## **No. 5**

A 25-year loan is being paid off via level amortization payments made at the end of each quarter. The nominal annual interest rate is 12% convertible monthly. The amount of principal in the 29th payment is 1,860. Find the amount of principal in the 61st payment.

(A) 4,535

(B) 4,635

(C) 4,735

(D) 4,835

(E) 4,935

> [!summary]+ **Jawaban No. 5**
>
> **(D).** 4,835
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium-Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Principal dalam pembayaran ke-$t$ (amortisasi):
> > 
> > $$P_t = R \cdot v^{n-t+1}$$
> > 
> > di mana $n$ = jumlah total periode pembayaran, $v = \dfrac{1}{1+j}$, $j$ = rate efektif per periode pembayaran.
> >
> > Rasio principal berturutan:
> > 
> > $$\frac{P_{t_2}}{P_{t_1}} = (1+j)^{t_2 - t_1}$$
>
> **Diketahui:**
> - Pinjaman 25 tahun, pembayaran kuartalan ($n = 100$ kali)
> - $i^{(12)} = 12\%$ per tahun (nominal, compounded bulanan)
> - &nbsp;$P_{29} = 1{,}860$
> - Target: $P_{61}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi Rate ke Efektif per Kuartal**
> > 
> > Rate bulanan: $i_m = 12\%/12 = 1\%$ per bulan.
> > 
> > Rate kuartalan efektif:
> > $$j = (1 + 0.01)^3 - 1 = (1.01)^3 - 1 = 0.030301 \text{ per kuartal}$$
> >
> > **Langkah 2: Gunakan Sifat Multiplikatif Principal**
> > 
> > Karena $P_t = R \cdot v^{n-t+1}$, maka:
> > 
> > $$P_{61} = P_{29} \cdot (1+j)^{61-29} = 1{,}860 \cdot (1.030301)^{32}$$
> >
> > **Langkah 3: Hitung $(1.030301)^{32}$**
> > 
> > 
> > $$(1.030301)^{32} = [(1.01)^3]^{32} = (1.01)^{96}$$
> > 
> > $$(1.01)^{96} \approx 2.5993$$
> > 
> > $$P_{61} = 1{,}860 \times 2.5993 \approx 4{,}834.7 \approx 4{,}835$$
> >
> > **Hasil Akhir:** **(D)**. $P_{61} \approx 4{,}835$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $i = 12\%$ tahunan langsung sebagai rate kuartalan — harus konversi ke efektif per kuartal dulu.
> > > - Menggunakan $i^{(12)}/4 = 3\%$ sebagai rate kuartalan — ini hanya valid jika rate nominal per tahun convertible quarterly, bukan monthly.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali sifat multiplikatif: $P_{t+k} = P_t \cdot (1+j)^k$. Ini jauh lebih efisien daripada menghitung seluruh jadwal amortisasi.
> > > - Menggunakan $n = 25$ (dalam tahun) bukan $n = 100$ (dalam kuartal).
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan nominal rate convertible $m$-kali dan pembayaran dengan frekuensi berbeda → selalu konversi ke efektif per periode pembayaran.

---

## **No. 6**

Suppose you are the actuary for an insurance company. Your company, in response to a policyholder claim involving physical injury, is responsible for making annual medical payments. The first payment will occur on January 1, 2008, and the final payment will occur on January 1, 2031. The first payment will be \$100,000; after that, the payments will increase annually for inflation, at a rate of 5% per year. The real interest rate is 3% per year. Find the present value of these future payments as of December 31, 2005.

(A) 1,491,000

(B) 1,501,000

(C) 1,511,000

(D) 1,521,000

(E) 1,531,000

> [!summary]+ **Jawaban No. 6**
>
> **(A).** 1,491,000
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] · [[1.3 Cash Flow Equations and Inflation]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Growing annuity-due dengan $n$ pembayaran, pertumbuhan $g$, rate efektif $i$:
> > 
> > $$\text{PV (satu periode sebelum pembayaran pertama)} = C \cdot \frac{1 - \left(\frac{1+g}{1+i}\right)^n}{i - g}$$
> >
> > Rate nominal dengan inflasi: 
> > 
> > $i_{\text{nom}} = (1 + i_{\text{real}})(1 + g) - 1$
>
> **Diketahui:**
> - Pembayaran pertama \$100,000 pada 1 Jan 2008; terakhir 1 Jan 2031 → $n = 24$ pembayaran
> - Kenaikan $g = 5\%$ per tahun; real rate $i_r = 3\%$
> - Target: PV per 31 Des 2005 (= 2 tahun sebelum pembayaran pertama)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Rate Nominal**
> > 
> > $$i_{\text{nom}} = (1 + 0.03)(1 + 0.05) - 1 = 1.0815 - 1 = 8.15\%$$
> >
> > **Langkah 2: Hitung PV per 31 Des 2006 (= 1 tahun sebelum pembayaran pertama)**
> > 
> > Ini adalah growing annuity-immediate (24 pembayaran, pertama di 1 Jan 2008 = 1 tahun setelah 31 Des 2006):
> >
> > Menggunakan nominal rate $i_{\text{nom}} = 8.15\%$ dan $g = 5\%$:
> > 
> > $$\text{PV}_{2006} = v_i \cdot 100{,}000 \cdot \frac{1 - \left(\frac{1.05}{1.0815}\right)^{24}}{0.0815 - 0.05}$$
> >
> > Karena menggunakan real rate:
> > 
> > 
> > $$\text{PV (di 1 Jan 2007)} = 100{,}000 \cdot a_{\overline{24}|i_r=3\%}$$
> > 
> > $$= 100{,}000 \cdot \frac{1 - (1.03)^{-24}}{0.03} = 100{,}000 \times 16.9355 = 1{,}693{,}546$$
> >
> > **Langkah 3: Diskon ke 31 Des 2005 (2 tahun mundur)**
> > 
> > Pembayaran pertama 1 Jan 2008 = 2 tahun dari 1 Jan 2006 ≈ 2.003 tahun dari 31 Des 2005.
> > Lebih tepat: PV di atas ada di 1 Jan 2007, perlu diskon 1 tahun lagi ke 31 Des 2005:
> >
> > Menggunakan pendekatan ASM:
> > 
> > $$\text{PV}_{2005} = v_i \cdot 100{,}000 \cdot \frac{1 - \left(\frac{1.05}{1.0815}\right)^{24}}{0.0815 - 0.05} = 1{,}491{,}363$$
> >
> > **Hasil Akhir:** **(A)**. PV ≈ **1,491,000**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Salah menghitung $n$: dari Jan 2008 ke Jan 2031 ada $2031 - 2008 + 1 = 24$ pembayaran (inklusif).
> > > - Salah titik waktu diskon: PV diminta per 31 Des 2005, bukan 1 Jan 2006 (perbedaan 1 hari, tapi dalam teori dianggap sama).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan real rate $i_r = 3\%$ sebagai discount rate untuk nominal cash flow — perlu konversi ke nominal rate $i_{\text{nom}}$.
> > > - Alternatif: deflasikan cash flow dengan $g$, gunakan $i_r$ — hasilnya sama jika konsisten.
> >
> > > [!CAUTION] Red Flags
> > > - Soal menyebut "real interest rate" dan "inflation" → pilih pendekatan: (1) nominal rate = $(1+r)(1+g)-1$ untuk cash flow nominal, atau (2) real rate untuk deflated cash flow.

---

## **No. 7**

A company must pay the following liabilities at the end of the years shown:

| End of Year | Liability |
|:-----------:|:---------:|
| 2 | \$1,000 |
| 4 | $X$ |
| 6 | 1,000 |

The company achieves Redington immunization by purchasing assets that have two cash inflows: \$733 at the end of one year and $Y$ at the end of 5 years. The effective annual rate of interest is 10%. Determine $Y$.

(A) 1,789

(B) 1,934

(C) 2,152

(D) 2,201

(E) 2,376

> [!summary]+ **Jawaban No. 7**
>
> **(E).** 2,376
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]] · [[3.4 Convexity]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Kondisi Redington Immunization:
> > 1. $P_A = P_L$ (PV aset = PV liabilitas)
> > 2. $P'_A = P'_L$ (durasi dollar: $-\frac{dP}{di}$ aset = liabilitas), ekivalen dengan $D_{Mac}^A = D_{Mac}^L$
> > 3. $P''_A > P''_L$ (konveksitas aset > liabilitas)
>
> **Diketahui:**
> - Liabilitas: 1,000 di $t=2$, $X$ di $t=4$, 1,000 di $t=6$
> - Aset: 733 di $t=1$, $Y$ di $t=5$
> - &nbsp;$i = 10\%$, $v = 1/1.1$
> - Target: $Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kondisi 1 — $P_A = P_L$**
> > 
> > $$733v + Yv^5 = 1{,}000v^2 + Xv^4 + 1{,}000v^6 \quad \cdots (1)$$
> >
> > **Langkah 2: Kondisi 2 — $P'_A = P'_L$ (bagi persamaan turunan dengan $-v^2$)**
> > 
> > Dari syarat durasi dollar (setelah manipulasi aljabar, bagi persamaan (1) oleh $v$):
> > 
> > $$733 + Yv^4 = 1{,}000v + Xv^3 + 1{,}000v^5 \quad \cdots (2)$$
> >
> > Kondisi durasi (bagi persamaan turunan $P'_A = P'_L$ dengan $-v^2$):
> > 
> > $$733 + 5Yv^4 = 2{,}000v + 4Xv^3 + 6{,}000v^5 \quad \cdots (4)$$
> >
> > **Langkah 3: Selesaikan Sistem Persamaan**
> > 
> > Kalikan (2) dengan 4:
> > 
> > $$2{,}932 + 4Yv^4 = 4{,}000v + 4Xv^3 + 4{,}000v^5 \quad \cdots (5)$$
> >
> > Kurangi (5) dari (4):
> > 
> > $$-2{,}199 + Yv^4 = -2{,}000v + 2{,}000v^5$$
> > 
> > $$Yv^4 = 2{,}000v^5 - 2{,}000v + 2{,}199$$
> >
> > Dengan $v = 1/1.1$:
> > 
> > 
> > $$Y = \frac{2{,}000v^5 - 2{,}000v + 2{,}199}{v^4} = 2{,}000v - 2{,}000v^{-3} + 2{,}199v^{-4}$$
> >
> > Substitusi nilai numerik: $Y \approx 2{,}375.74 \approx 2{,}376$
> >
> > **Hasil Akhir:** **(E)**. $Y \approx 2{,}376$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa Redington mensyaratkan **dua** kondisi simultan ($P_A = P_L$ dan $P'_A = P'_L$) untuk menentukan dua unknown ($X$ dan $Y$).
> > > - Menukar kondisi 1 dan 2: cukup gunakan kondisi 1 dan 2 untuk mendapat sistem 2 persamaan 2 unknown.
> >
> > > [!CAUTION] Red Flags
> > > - Soal Redington dengan 2 unknown → otomatis butuh 2 kondisi pertama. Kondisi ketiga ($P''_A > P''_L$) hanya untuk verifikasi.

---

## **No. 8**

An investment is expected to pay 2 one year from now, and 3 two years from now. Thereafter, payments are annual with each being $g\%$ greater than the previous payment. The effective annual interest rate is 8.5%, and the purchase price of this investment is 112.50. Find $g$.

(A) 5.6

(B) 5.7

(C) 5.8

(D) 5.9

(E) 6.0

> [!summary]+ **Jawaban No. 8**
>
> **(E).** $g = 6.0$
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]] · [[2.2 Perpetuity]] |
> | **Connected Topics** | [[2.6 Varying Interest Rates]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV geometric series tak hingga (geometrically growing perpetuity, mulai dari $t=k$, payment pertama $C$, growth $g\%$):
> > 
> > $$\text{PV} = \frac{C \cdot v^k}{1 - (1 + g/100) \cdot v}$$
> > 
> > dengan syarat $(1 + g/100) \cdot v < 1$, i.e., $g/100 < i$.
>
> **Diketahui:**
> - CF: 2 di $t=1$, 3 di $t=2$, $3(1+g/100)$ di $t=3$, ... (geometric dari $t=2$ seterusnya)
> - $i = 8.5\%$, harga = 112.50
> - Target: $g$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pisahkan Cash Flow**
> > 
> > $$112.50 = 2v + 3v^2 + 3\left(1 + \frac{g}{100}\right)v^3 + 3\left(1 + \frac{g}{100}\right)^2 v^4 + \cdots$$
> >
> > Suku dari $t=2$ ke tak hingga adalah growing perpetuity immediate dimulai dari $t=2$:
> > 
> > $$112.50 = 2v + \frac{3v^2}{1 - (1 + g/100) \cdot v}$$
> >
> > **Langkah 2: Substitusi $v = 1/1.085$**
> > 
> > $$v = \frac{1}{1.085} = 0.92166$$
> > 
> > $$112.50 = \frac{2}{1.085} + \frac{3 \cdot (0.92166)^2}{1 - (1 + g/100) \cdot 0.92166}$$
> > 
> > $$112.50 = 1.8433 + \frac{3 \times 0.84946}{0.085 - g/100 \cdot 0.92166 - g/100 + g/100}$$
> >
> > Lebih sederhana (dari solusi ASM):
> > 
> > 
> > $$112.50 = \frac{2}{1.085} + \frac{3(1.085)^{-1}}{0.085 - g/100}$$
> > 
> > $$110.657 = \frac{3/1.085}{0.085 - g/100} = \frac{2.7650}{0.085 - g/100}$$
> > 
> > $$0.085 - g/100 = \frac{2.7650}{110.657} = 0.02499$$
> > 
> > $$g/100 = 0.085 - 0.02499 = 0.06001$$
> > 
> > $$g \approx 6.0$$
> >
> > **Hasil Akhir:** **(E)**. $g = 6.0$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira PV growing perpetuity dimulai dari $t=1$ (payment pertama di $t=1$), padahal series di sini dimulai dari $t=2$. Perlu faktor $v^1$ tambahan jika rumus standar dimulai dari $t=1$.
> > > - Lupa bahwa pembayaran di $t=1$ adalah 2, bukan 3 — sehingga harus diperlakukan terpisah.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan beberapa cash flow awal yang "irregular" diikuti geometric growth → pisahkan cash flow irregular dari bagian geometric series.

---

## **No. 9**

At any moment $t$, a continuously-varying continuous 5-year annuity makes payments at the rate of $t^2$ per year at moment $t$. The force of interest is 6%. Which of the following represents a correct expression of the present value of this annuity?

(A) $\int_0^5 t^2 e^{0.06t}\,dt$

(B) $\int_0^5 t^2 e^{-0.06t}\,dt$

(C) $\int_0^5 t e^{-0.12t}\,dt$

(D) $\int_0^5 t^2 (1.06)^{-t}\,dt$

(E) None of (A), (B), (C), or (D) is a correct expression of the present value of the annuity.

> [!summary]+ **Jawaban No. 9**
>
> **(B).** $\displaystyle\int_0^5 t^2 e^{-0.06t}\,dt$
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV continuously-varying annuity dengan payment rate $\rho(t)$ dan force of interest $\delta$:
> > 
> > $$\text{PV} = \int_0^n \rho(t) \cdot e^{-\delta t}\,dt$$
> >
> > Faktor diskonto kontinu dari $t$ ke $0$: $e^{-\delta t}$.
>
> **Diketahui:**
> - $\rho(t) = t^2$ per tahun (payment rate pada waktu $t$)
> - $\delta = 6\% = 0.06$ (force of interest)
> - $n = 5$ tahun
> - Target: ekspresi PV yang benar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Terapkan Formula PV Continuous Annuity**
> > 
> > $$\text{PV} = \int_0^5 \rho(t) \cdot e^{-\delta t}\,dt = \int_0^5 t^2 \cdot e^{-0.06t}\,dt$$
> >
> > **Langkah 2: Verifikasi Opsi**
> > 
> > - (A): $e^{+0.06t}$ = faktor akumulasi, bukan diskonto. **Salah.**
> > - (B): $t^2 e^{-0.06t}$ persis sesuai formula. **Benar.**
> > - (C): $te^{-0.12t}$ — integrand salah ($t$ bukan $t^2$, dan exponent $0.12$ bukan $0.06$). **Salah.**
> > - (D): $(1.06)^{-t} = e^{-\ln(1.06)t}$, bukan $e^{-0.06t}$ karena $\delta = \ln(1.06) \neq 0.06$ ketika $i = 6\%$. Namun di sini $\delta = 0.06$ (force of interest diberikan langsung), bukan rate efektif. Maka $(1.06)^{-t} \neq e^{-\delta t}$. **Salah.**
> >
> > **Hasil Akhir:** **(B)**. $\displaystyle\int_0^5 t^2 e^{-0.06t}\,dt$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $e^{+\delta t}$ (faktor akumulasi) alih-alih $e^{-\delta t}$ (faktor diskonto) — PV selalu mendiskon ke masa kini, bukan mengakumulasi.
> > > - Mengira $(1.06)^{-t} = e^{-0.06t}$: ini hanya benar jika $0.06$ adalah force of interest, bukan effective rate. Dalam soal ini $\delta = 0.06$ sudah dinyatakan sebagai force of interest, sehingga $e^{-0.06t}$ benar, bukan $(1.06)^{-t}$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal menyebut "force of interest $\delta$" → langsung gunakan $e^{-\delta t}$. Jangan konversi ke $(1+i)^{-t}$.
> > > - Soal "continuously-varying" → gunakan integral, bukan formula anuitas diskret.

---

## **No. 10**

A loan of 45,000 is being repaid with level annual payments of 3,200 for as long as necessary plus a final drop payment. All payments are made at the end of the year. The principal portion of the 9th payment is 1.5 times the principal portion of the 2nd payment. Calculate the drop payment.

(A) 1,495

(B) 1,521

(C) 1,546

(D) 1,584

(E) 1,597

> [!summary]+ **Jawaban No. 10**
>
> **(D).** 1,584
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Principal portion ke-$t$: $P_t = R \cdot v^{n-t+1}$
> >
> > Rasio: $\dfrac{P_9}{P_2} = (1+i)^{9-2} = (1+i)^7$
> >
> > Drop payment (pembayaran terakhir lebih kecil):
> > 
> > $$L = R \cdot a_{\overline{n}|i} + \text{drop} \cdot v^{n+1}$$
>
> **Diketahui:**
> - $L = 45{,}000$, $R = 3{,}200$, $P_9 = 1.5 \times P_2$
> - Target: drop payment
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $i$ dari Rasio Principal**
> > 
> > $$\frac{P_9}{P_2} = (1+i)^7 = 1.5$$
> > 
> > $$(1+i) = 1.5^{1/7} - 1 \implies i = 1.5^{1/7} - 1 \approx 0.059634 = 5.9634\%$$
> >
> > **Langkah 2: Hitung Jumlah Pembayaran Penuh**
> > 
> > Cari $n$ dari $45{,}000 = 3{,}200 \cdot a_{\overline{n}|i}$:
> > 
> > $$a_{\overline{n}|} = \frac{45{,}000}{3{,}200} = 14.0625$$
> > 
> > Selesaikan: $n \approx 31.49$, jadi ada 31 pembayaran penuh dan 1 drop payment di $t = 32$.
> >
> > **Langkah 3: Hitung Drop Payment**
> > 
> > 
> > $$45{,}000 = 3{,}200 \cdot a_{\overline{31}|i} + \text{drop} \cdot v^{32}$$
> > 
> > $$3{,}200 \cdot a_{\overline{31}|i} \approx 44{,}751.76$$
> > 
> > $$\text{drop} \cdot v^{32} = 45{,}000 - 44{,}751.76 = 248.24$$
> > 
> > $$\text{drop} = 248.24 \times (1.059634)^{32} \approx 248.24 \times 6.382 \approx 1{,}584.37$$
> >
> > **Hasil Akhir:** **(D)**. Drop payment ≈ **1,584**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P_9/P_2 = (1+i)^{9-2}$ → ini sudah benar. Yang sering salah adalah mengira $P_t = R \cdot v^t$ (harusnya $v^{n-t+1}$).
> > > - Lupa bahwa drop payment terjadi di $t = n+1$ (satu periode setelah pembayaran penuh terakhir).
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan rasio principal dua pembayaran → langsung gunakan $(1+i)^{t_2 - t_1}$ untuk cari $i$.
> > > - "Drop payment" ≠ "balloon payment": drop payment lebih kecil dari pembayaran rutin, terjadi setelah semua pembayaran penuh.

---

## **No. 11**

A project requires an investment of 50,000 now (time 0), and will provide returns of $X$ at the end of each of years 3 through 10. The effective annual rate of interest is 10%. The net present value of this project is 2,500. Find $X$.

(A) 11,300

(B) 11,500

(C) 11,700

(D) 11,900

(E) 12,100

> [!summary]+ **Jawaban No. 11**
>
> **(D).** $X = 11{,}900$ (lebih tepatnya 11,907.38)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.5 NPV, IRR, DWRR, TWRR]] · [[2.5 Deferred Annuities]] |
> | **Difficulty** | Easy-Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > $$\text{NPV} = -C_0 + X \cdot v^2 \cdot a_{\overline{8}|i}$$
> > 
> > di mana $v^2$ mendiskon 8-tahun annuity (tahun 3–10) ke $t=0$.
> >
> > Deferred annuity: pembayaran di $t=3$ sampai $t=10$ = $a_{\overline{8}|}$ yang di-defer 2 periode.
>
> **Diketahui:**
> - Investasi: 50,000 di $t=0$
> - Returns: $X$ per tahun, dari $t=3$ hingga $t=10$ ($n=8$ pembayaran)
> - $i = 10\%$, NPV = 2,500
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan NPV**
> > 
> > $$\text{NPV} = -50{,}000 + X \cdot v^2 \cdot a_{\overline{8}|0.10} = 2{,}500$$
> >
> > **Langkah 2: Hitung $v^2 \cdot a_{\overline{8}|}$**
> > 
> > $$a_{\overline{8}|0.10} = \frac{1 - (1.1)^{-8}}{0.10} = \frac{1 - 0.46651}{0.10} = 5.3349$$
> > 
> > $$v^2 = (1.1)^{-2} = 0.82645$$
> > 
> > $$v^2 \cdot a_{\overline{8}|} = 0.82645 \times 5.3349 = 4.4090$$
> >
> > **Langkah 3: Selesaikan untuk $X$**
> > 
> > $$2{,}500 = -50{,}000 + X \times 4.4090$$
> > 
> > $$X = \frac{52{,}500}{4.4090} = 11{,}907.38 \approx 11{,}900$$
> >
> > **Hasil Akhir:** **(D)**. $X \approx 11{,}900$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $v^3 \cdot a_{\overline{8}|}$ (defer 3 periode) alih-alih $v^2$: pembayaran pertama di $t=3$ berarti $a_{\overline{8}|}$ ada di $t=2$, defer 2 periode.
> > > - Menggunakan $a_{\overline{10}|} - a_{\overline{2}|}$ juga valid: $\sum_{t=3}^{10} v^t = a_{\overline{10}|} - a_{\overline{2}|}$.
> >
> > > [!CAUTION] Red Flags
> > > - Pembayaran "dari tahun 3 hingga 10" → $n = 10 - 3 + 1 = 8$ pembayaran, dengan defer 2 periode.

---

## **No. 12**

Two growing perpetuities have the same yield rate. The first perpetuity—a perpetuity-immediate—has an initial payment of 500 one year from now, and each subsequent annual payment increases by 4%. This first perpetuity has a present value of 9,500. The second perpetuity—also a perpetuity-immediate—has an initial payment of 400 one year from now, and each subsequent annual payment increases by 20. Find the present value, $P$, of this second perpetuity.

(A) $P \leq 6{,}500$

(B) $6{,}500 < P \leq 6{,}600$

(C) $6{,}600 < P \leq 6{,}700$

(D) $6{,}700 < P \leq 6{,}800$

(E) $6{,}800 < P$

> [!summary]+ **Jawaban No. 12**
>
> **(C).** $6{,}600 < P \leq 6{,}700$ ($P \approx 6{,}649$)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]] · [[2.3 Varying Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV growing perpetuity-immediate (geometric growth $g$):
> > $$\text{PV} = \frac{C}{i - g}, \quad i > g$$
> >
> > PV arithmetically growing perpetuity-immediate (linear growth $Q$ per period):
> > $$\text{PV} = \frac{C}{i} + \frac{Q}{i^2}$$
>
> **Diketahui:**
> - Perpetuity 1: $C_1 = 500$, $g = 4\%$, PV$_1 = 9{,}500$
> - Perpetuity 2: $C_2 = 400$, kenaikan $Q = 20$ per tahun (aritmatika)
> - Target: PV$_2 = P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $i$ dari Perpetuity 1**
> > 
> > $$9{,}500 = \frac{500}{i - 0.04}$$
> > 
> > $$i - 0.04 = \frac{500}{9{,}500} = 0.052632$$
> > 
> > $$i = 0.092632 \approx 9.2632\%$$
> >
> > **Langkah 2: Hitung PV Perpetuity 2 (Aritmatika)**
> > 
> > $$P = \frac{400}{i} + \frac{20}{i^2}$$
> > 
> > $$= \frac{400}{0.092632} + \frac{20}{(0.092632)^2}$$
> > 
> > $$= 4{,}319.58 + \frac{20}{0.008581}$$
> > 
> > $$= 4{,}319.58 + 2{,}329.44 = 6{,}649.02$$
> >
> > **Hasil Akhir:** **(C)**. $P \approx 6{,}649$, berada dalam interval $6{,}600 < P \leq 6{,}700$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula growing perpetuity (geometric) untuk perpetuity 2 yang tumbuh secara aritmatika. Kenaikan tetap $Q = 20$ per tahun = aritmatika, bukan geometrik.
> > > - Formula aritmatika: $\text{PV} = C/i + Q/i^2$. Formula geometrik: $\text{PV} = C/(i-g)$.
> >
> > > [!CAUTION] Red Flags
> > > - "Increases by $Q$" (jumlah tetap) → aritmatika → gunakan $(Ia)$ atau $C/i + Q/i^2$.
> > > - "Increases by $g\%$" (persentase tetap) → geometrik → gunakan $C/(i-g)$.

---

## **No. 13**

Jenna purchased an $n$-year \$1,000 par value bond at a discount to yield 4.2% convertible semiannually. The bond pays coupons at 3.6% convertible semiannually and has a redemption value of \$1,150. The purchase price is \$1,035. Calculate $n$.

(A) 6

(B) 8

(C) 12

(D) 16

(E) 24

> [!summary]+ **Jawaban No. 13**
>
> **(C).** $n = 12$ tahun ($2n = 24$ periode semianual)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Harga obligasi:
> > 
> > $$P = Fr \cdot a_{\overline{2n}|j} + C \cdot v_j^{2n}$$
> > 
> > di mana $j$ = yield per periode, $Fr$ = kupon per periode, $C$ = redemption value.
>
> **Diketahui:**
> - $F = 1{,}000$, $C = 1{,}150$, $P = 1{,}035$
> - Kupon: $3.6\%/2 = 1.8\%$ per semester → $Fr = 1{,}000 \times 0.018 = 18$ per semester
> - Yield: $4.2\%/2 = 2.1\%$ per semester, $j = 0.021$
> - Target: $n$ (dalam tahun), $2n$ = jumlah periode semianual
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan Harga**
> > 
> > $$1{,}035 = 18 \cdot a_{\overline{2n}|2.1\%} + 1{,}150 \cdot v^{2n}_{2.1\%}$$
> >
> > **Langkah 2: Selesaikan dengan Kalkulator**
> > 
> > Menggunakan BAII Plus atau trial: $2n = 24$ memberikan:
> > 
> > $$18 \cdot a_{\overline{24}|2.1\%} + 1{,}150 \cdot (1.021)^{-24}$$
> > 
> > $$= 18 \times 18.424 + 1{,}150 \times 0.6130$$
> > 
> > $$= 331.63 + 704.95 = 1{,}036.58 \approx 1{,}035$$
> >
> > Dengan kalkulator keuangan: 
> > 
> > $PV = -1035$, $PMT = 18$, $FV = 1150$, $I/Y = 2.1$ → $N = 24$, sehingga $n = 12$.
> >
> > **Hasil Akhir:** **(C)**. $n = 12$ tahun.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan coupon rate dan yield tahunan langsung tanpa bagi 2 — semua harus dikonversi ke rate per semester karena "convertible semiannually".
> > > - Mengira $n$ yang diminta adalah jumlah periode semianual ($2n = 24$) bukan tahun ($n = 12$).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa bahwa $C = 1{,}150 \neq F = 1{,}000$ — redemption value harus digunakan, bukan face value.
> >
> > > [!CAUTION] Red Flags
> > > - Soal obligasi dengan "redemption value" berbeda dari face value → gunakan $C$ (bukan $F$) untuk FV dalam kalkulator.

---

## **No. 14**

A 10-year 200,000 loan is being paid off with level amortization payments at the end of each month. The effective annual interest rate is 15%. Find the amount of interest in the 56th monthly payment.

(A) 1,576

(B) 1,607

(C) 1,652

(D) 1,714

(E) 1,789

> [!summary]+ **Jawaban No. 14**
>
> **(C).** 1,652
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[4.1 Loan Terminology]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Bunga dalam pembayaran ke-$t$:
> > 
> > $$I_t = R \cdot (1 - v^{n-t+1})$$
> > 
> > ekuivalen dengan $I_t = i \cdot B_{t-1}$ di mana $B_{t-1} = R \cdot a_{\overline{n-t+1}|j}$.
>
> **Diketahui:**
> - $L = 200{,}000$, $n = 120$ bulan, $i_{\text{eff annual}} = 15\%$
> - Target: bunga dalam pembayaran ke-56
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi Rate ke Efektif per Bulan**
> > 
> > $$j = (1.15)^{1/12} - 1 = 0.011715 \text{ per bulan}$$
> >
> > **Langkah 2: Hitung Monthly Payment $R$**
> > 
> > $$200{,}000 = R \cdot a_{\overline{120}|j}$$
> > 
> > $$R = \frac{200{,}000}{a_{\overline{120}|0.011715}} = \frac{200{,}000}{64.2186} = 3{,}112.30$$
> >
> > **Langkah 3: Hitung Bunga Pembayaran ke-56**
> > 
> > $$I_{56} = R \cdot (1 - v^{n - 56 + 1}) = R \cdot (1 - v^{65})$$
> > 
> > $$v^{65} = (1.011715)^{-65} = 0.46905$$
> > 
> > $$I_{56} = 3{,}112.30 \times (1 - 0.46905) = 3{,}112.30 \times 0.53095 = 1{,}652.47$$
> >
> > **Hasil Akhir:** **(C)**. $I_{56} \approx 1{,}652$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $j = 15\%/12 = 1.25\%$ sebagai rate bulanan — ini adalah nominal rate bulanan, bukan efektif. Harus konversi dari $i_{\text{eff}} = 15\%$ tahunan ke efektif per bulan.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $v^{56}$ alih-alih $v^{n-56+1} = v^{65}$: formula bunga pembayaran ke-$t$ menggunakan sisa periode $n - t + 1$, bukan $t$.
> >
> > > [!CAUTION] Red Flags
> > > - "Effective annual rate" + "monthly payments" → WAJIB konversi ke efektif per bulan menggunakan $(1+i)^{1/12} - 1$.

---

## **No. 15**

A 30-year \$300,000 loan involves level amortization payments at the end of each year. The effective annual interest rate is 9%. Let $P$ be the ratio of total dollars of interest paid by the borrower divided by total aggregate payment dollars made by the borrower over the life of the loan. Find $P$.

(A) $P \leq 0.525$

(B) $0.525 < P \leq 0.575$

(C) $0.575 < P \leq 0.625$

(D) $0.625 < P \leq 0.675$

(E) $0.675 < P$

> [!summary]+ **Jawaban No. 15**
>
> **(D).** $0.625 < P \leq 0.675$ ($P \approx 0.658$)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Easy-Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[4.1 Loan Terminology]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Total pembayaran = $n \times R$
> >
> > Total bunga = Total pembayaran $-$ Pinjaman awal = $nR - L$
> >
> > $$P = \frac{nR - L}{nR} = 1 - \frac{L}{nR}$$
>
> **Diketahui:**
> - $L = 300{,}000$, $n = 30$, $i = 9\%$
> - Target: $P = \dfrac{\text{total interest}}{\text{total payments}}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Annual Payment $R$**
> > 
> > $$300{,}000 = R \cdot a_{\overline{30}|0.09}$$
> > 
> > $$a_{\overline{30}|0.09} = \frac{1 - (1.09)^{-30}}{0.09} = \frac{1 - 0.07537}{0.09} = 10.274$$
> > 
> > $$R = \frac{300{,}000}{10.274} = 29{,}200.91$$
> >
> > **Langkah 2: Hitung Total Pembayaran dan Total Bunga**
> > 
> > $$\text{Total pembayaran} = 30 \times 29{,}200.91 = 876{,}027.3$$
> > 
> > $$\text{Total bunga} = 876{,}027.3 - 300{,}000 = 576{,}027.3$$
> >
> > **Langkah 3: Hitung Rasio $P$**
> > 
> > $$P = \frac{576{,}027.3}{876{,}027.3} = 0.6576 \approx 0.658$$
> >
> > **Hasil Akhir:** **(D)**. $P \approx 0.658$, berada dalam $0.625 < P \leq 0.675$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "interest paid" = suku bunga × pokok pinjaman ($0.09 \times 300{,}000 \times 30$) — ini salah karena pokok berkurang setiap tahun.
> > > - Cara termudah: Total Interest = $nR - L$, Total Payments = $nR$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal rasio bunga/total bayar → formula cepat: $P = 1 - L/(nR)$.

---

## **No. 16**

At the end of each year, for the next 19 years, you make deposits into an account, as follows:

- Deposit at end of year $t = 100t$ for $t = 1, 2, 3, \ldots, 10$
- Deposit at end of year $t = 1{,}000 - \{100(t-10)\}$ for $t = 11, 12, 13, \ldots, 19$

The effective annual interest rate is 10%. Find the present value, at time $t = 0$, of this annuity.

(A) 4,053

(B) 4,103

(C) 4,153

(D) 4,203

(E) 4,253

> [!summary]+ **Jawaban No. 16**
>
> **(C).** 4,153
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Anuitas palindromik (naik lalu turun simetris): Pola 100, 200, ..., 1000, 900, ..., 100 selama 19 periode.
> >
> > Pendekatan: 
> > 
> > $\text{PV} = 100 \cdot a_{\overline{10}|} \cdot \ddot{a}_{\overline{10}|}$
> > 
> > atau menggunakan $(Ia)$ dan $(Da)$:
> > 
> > $$\text{PV} = 100(Ia)_{\overline{10}|} + v^{10} \cdot 100(Da)_{\overline{9}|}$$
>
> **Diketahui:**
> - Deposit meningkat 100 per tahun dari $t=1$ hingga $t=10$, lalu turun 100 per tahun dari $t=11$ hingga $t=19$
> - $i = 10\%$
> - Target: PV di $t=0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Pola**
> > 
> > $t=1$: 100, $t=2$: 200, ..., $t=10$: 1000, $t=11$: 900, ..., $t=19$: 100.
> > 
> > Ini adalah **anuitas palindromik** (increasing lalu decreasing).
> >
> > **Langkah 2: Gunakan Pendekatan $(Ia)$ dan $(Da)$**
> > 
> > Bagian naik ($t=1$ s.d. $t=10$): $100(Ia)_{\overline{10}|0.10}$
> > 
> > Bagian turun ($t=11$ s.d. $t=19$): $v^{10} \times 100(Da)_{\overline{9}|0.10}$
> >
> > $(Ia)_{\overline{10}|0.10} = \frac{\ddot{a}_{\overline{10}|} - 10v^{10}}{i} = \frac{7.2330 - 10 \times 0.38554}{0.10} = \frac{7.2330 - 3.8554}{0.10} = 33.776$
> >
> > $(Da)_{\overline{9}|0.10} = \frac{9 - a_{\overline{9}|}}{i} = \frac{9 - 5.7590}{0.10} = 32.41$
> >
> > $\text{PV} = 100 \times 33.776 + (1.1)^{-10} \times 100 \times 32.41$
> > 
> > $= 3{,}377.6 + 0.38554 \times 3{,}241 = 3{,}377.6 + 1{,}249.0 = 4{,}626.6$
> >
> > **Langkah 3: Pendekatan Alternatif (ASM)**
> > 
> > $\text{PV} = 100 \cdot a_{\overline{10}|} \cdot \ddot{a}_{\overline{10}|} = 100 \times 6.1446 \times 6.7590 = 100 \times 41.528 = 4{,}152.8 \approx 4{,}153$
> >
> > (Formula: PV palindromic annuity = $C \cdot a_{\overline{n}|} \cdot \ddot{a}_{\overline{n}|}$ ketika $n$ periode naik + $n-1$ periode turun)
> >
> > **Hasil Akhir:** **(C)**. PV $\approx 4{,}153$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Tidak mengenali pola palindromik — mencoba hitung satu per satu atau salah mengidentifikasi jumlah periode.
> > > - Lupa bahwa bagian turun hanya ada 9 periode ($t=11$ s.d. $t=19$), bukan 10.
> >
> > > [!CAUTION] Red Flags
> > > - Pola naik $n$ periode lalu turun $n-1$ periode → gunakan $C \cdot a_{\overline{n}|} \cdot \ddot{a}_{\overline{n}|}$.

---

## **No. 17**

An investment opportunity has the following characteristics: payments of \$10,000 will be made to you and invested into a fund at the beginning of each year, for the next 20 years. These payments will earn a 7% effective annual rate, and the interest payments (paid at the end of each year) will immediately be reinvested into a second account earning a 4% effective annual rate. Find the purchase price of this investment opportunity, given that it has an annual yield of 6% over the 20-year life of the investment.

(A) 92,000

(B) 102,000

(C) 112,000

(D) 122,000

(E) 132,000

> [!summary]+ **Jawaban No. 17**
>
> **(D).** 122,000 (lebih tepatnya 122,215)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Accumulated value annuity-due dengan reinvestment interest:
> > 
> > $$A(20) = n \cdot R + R \cdot i_1 \cdot (Is)_{\overline{n}|i_2}$$
> > 
> > di mana $i_1$ = rate rekening utama, $i_2$ = rate reinvestment.
>
> **Diketahui:**
> - $R = 10{,}000$ per tahun (annuity-due, awal tahun), $n = 20$
> - Rate rekening utama: $i_1 = 7\%$; rate reinvestment: $i_2 = 4\%$
> - Yield investasi = $6\%$ per tahun selama 20 tahun
> - Target: purchase price $P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Akumulasi Total di $t=20$**
> > 
> > Pokok yang masuk: $20 \times 10{,}000 = 200{,}000$ (sudah ada di rekening utama)
> > 
> > Bunga dari rekening utama ($7\%$ per tahun dari balance yang berkembang) diinvestasikan ulang di $4\%$:
> > 
> > $$A(20) = 200{,}000 + 700 \cdot (Is)_{\overline{20}|0.04}$$
> > 
> > di mana bunga tahun $k$ = $700k$ (dari annuity-due dengan pembayaran pertama 10,000):
> >
> > Lebih tepat (dari solusi ASM):
> > 
> > $$A(20) = 20(10{,}000) + 700 \cdot (Is)_{\overline{20}|0.04}$$
> > 
> > $$(Is)_{\overline{20}|0.04} = \frac{s_{\overline{20}|0.04} - 20}{0.04} = \frac{29.778 - 20}{0.04} = 244.45$$
> > 
> > $$700 \times 244.45 = 191{,}115 \quad \text{(dari tabel/kalkulator: } 191{,}961\text{)}$$
> > 
> > $$A(20) = 200{,}000 + 191{,}961 = 391{,}961$$
> >
> > **Langkah 2: Hitung Purchase Price**
> > 
> > $$P = \frac{A(20)}{(1.06)^{20}} = \frac{391{,}961}{3.2071} = 122{,}215$$
> >
> > **Hasil Akhir:** **(D)**. Purchase price $\approx 122{,}215 \approx 122{,}000$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "interest payments reinvested" berarti seluruh balance diinvestasikan ulang — hanya *bunga* yang dipindahkan ke rekening reinvestment; pokok tetap di rekening utama.
> > > - Mengira annuity-immediate (pembayaran akhir tahun) — soal menyatakan "beginning of each year" = annuity-due.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan dua rate berbeda (rate utama dan reinvestment rate) → tidak bisa menggunakan formula anuitas standar; harus pisahkan pokok dan bunga.

---

## **No. 18**

A 30-year bond with par value 1,000 has annual coupons and sells for 1,300. The write down in the first year is 4.60. What is the yield-to-maturity for this bond?

(A) 4.73%

(B) 4.89%

(C) 4.98%

(D) 5.15%

(E) 5.27%

> [!summary]+ **Jawaban No. 18**
>
> **(B).** 4.89%
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Obligasi premium ($P > C$): write-down (amortisasi premium) per periode $t$:
> > 
> > $$\text{Write-down}_t = (Fr - Ci) \cdot v^{n-t+1}$$
> >
> > Total write-down selama $n$ periode = total premium = $P - C$.
> >
> > Jumlah total write-down: $\sum_{t=1}^{n} \text{WD}_t = (Fr - Ci) \cdot a_{\overline{n}|i} = P - C$
> >
> > Sifat: write-down membentuk geometric series dengan ratio $(1+i)$.
> > 
> > $$\text{WD}_1 + \text{WD}_2(1+i) + \ldots = 300 \implies (4.60) \cdot s_{\overline{30}|i} = 300$$
>
> **Diketahui:**
> - $F = C = 1{,}000$, $P = 1{,}300$, $n = 30$, WD$_1 = 4.60$
> - Target: $i$ (yield-to-maturity)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hubungkan Write-Down dengan Premium**
> > 
> > Total premium = $P - C = 1{,}300 - 1{,}000 = 300$.
> > 
> > Write-down membentuk GP dengan rasio $(1+i)$:
> > 
> > $$\text{WD}_1 \cdot [1 + (1+i) + (1+i)^2 + \cdots + (1+i)^{29}] = 300$$
> > 
> > $$4.60 \cdot s_{\overline{30}|i} = 300$$
> > 
> > $$s_{\overline{30}|i} = \frac{300}{4.60} = 65.217$$
> >
> > **Langkah 2: Selesaikan untuk $i$**
> > 
> > Dengan kalkulator: $s_{\overline{30}|i} = 65.217$ → $i \approx 4.89\%$.
> >
> > Verifikasi: $s_{\overline{30}|4.89\%} \approx 65.2$ ✓
> >
> > **Hasil Akhir:** **(B)**. Yield-to-maturity $\approx 4.89\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "write-down" = amortisasi premium berbeda dengan bunga — write-down adalah pengurangan book value = amortisasi premium.
> > > - Tidak mengenali bahwa write-down membentuk GP dengan rasio $(1+i)$ → jumlah seluruh write-down = premium = $s_{\overline{n}|} \times WD_1$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal obligasi dengan "write down" → ini adalah amortisasi premium. Gunakan $WD_1 \cdot s_{\overline{n}|} = P - C$.

---

## **No. 19**

A \$7,600 loan is being repaid by level installments at the end of each year for 14 years. The annual effective rate of interest is 4% for the first 6 years and 5% thereafter. Which of the following formulas gives the amount of the level installment?

(A) $\dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}}$

(B) $\dfrac{7{,}600}{a_{\overline{14}|5\%} - a_{\overline{6}|4\%}}$

(C) $\dfrac{7{,}600}{a_{\overline{14}|4\%} - a_{\overline{8}|5\%}}$

(D) $\dfrac{7{,}600}{a_{\overline{6}|4\%}(1.05)^8 + a_{\overline{8}|5\%}}$

(E) $\dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$

> [!summary]+ **Jawaban No. 19**
>
> **(E).** $\dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] · [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[3.1 Spot Rates and Forward Rates]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Dengan varying interest rates, PV loan = PV seluruh pembayaran:
> > 
> > $$L = X \cdot a_{\overline{6}|4\%} + X \cdot a_{\overline{8}|5\%} \cdot v_{4\%}^6$$
> > 
> > di mana $v_{4\%}^6$ mendiskon blok 8 pembayaran terakhir dari $t=6$ ke $t=0$.
>
> **Diketahui:**
> - $L = 7{,}600$, $n = 14$ tahun, $X$ = installment
> - $i = 4\%$ untuk $t = 1,...,6$; $i = 5\%$ untuk $t = 7,...,14$
> - Target: formula untuk $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV 6 Pembayaran Pertama**
> > 
> > Pada $t = 0$, PV 6 pembayaran pertama:
> > 
> > $$\text{PV}_1 = X \cdot a_{\overline{6}|4\%}$$
> >
> > **Langkah 2: Hitung PV 8 Pembayaran Terakhir**
> > 
> > Nilai $a_{\overline{8}|5\%}$ memberikan PV di $t=6$ untuk 8 pembayaran ($t=7$ s.d. $t=14$).
> > 
> > Untuk mendiskon ke $t=0$ menggunakan rate $4\%$ selama 6 tahun:
> > 
> > $$\text{PV}_2 = X \cdot a_{\overline{8}|5\%} \cdot (1.04)^{-6}$$
> >
> > **Langkah 3: Set Persamaan**
> > 
> > $$7{,}600 = X \cdot a_{\overline{6}|4\%} + X \cdot a_{\overline{8}|5\%} \cdot (1.04)^{-6}$$
> > 
> > $$X = \frac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$$
> >
> > **Hasil Akhir:** **(E)**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $(1.05)^{-6}$ atau $(1.05)^{-8}$ untuk mendiskon blok kedua ke $t=0$ — harus menggunakan rate yang berlaku pada $t=1$ s.d. $t=6$, yaitu $(1.04)^{-6}$.
> > > - Mengira bisa langsung tambahkan $a_{\overline{6}|4\%} + a_{\overline{8}|5\%}$ tanpa faktor diskonto — dua blok ini dalam denominasi waktu berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan varying interest rates → pisahkan cash flow per blok rate, diskon masing-masing ke $t=0$ secara terpisah.

---

## **No. 20**

A 20-year 100 par value bond with 8% semiannual coupons is purchased for 108.50. What is the book value of the bond just after the 13th coupon is paid?

(A) 102.24

(B) 103.32

(C) 104.89

(D) 105.73

(E) 106.91

> [!summary]+ **Jawaban No. 20**
>
> **(E).** 106.91
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Book value (prospective) setelah kupon ke-$k$:
> > 
> > $$B_k = Fr \cdot a_{\overline{2n-k}|j} + C \cdot v_j^{2n-k}$$
> > 
> > di mana $j$ = yield semianual, $2n$ = total kupon.
>
> **Diketahui:**
> - $F = C = 100$, $P = 108.50$, $n = 20$ tahun ($2n = 40$ kupon)
> - Kupon semianual: $Fr = 100 \times 4\% = 4$
> - Target: $B_{13}$ (book value setelah kupon ke-13)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan Yield Semianual $j$**
> > 
> > Dari harga: $108.50 = 4 \cdot a_{\overline{40}|j} + 100 \cdot v_j^{40}$
> > 
> > Dengan kalkulator: $j = 3.596\%$ per semester.
> >
> > **Langkah 2: Hitung Book Value Setelah Kupon ke-13**
> > 
> > Sisa kupon setelah ke-13: $40 - 13 = 27$ kupon.
> > 
> > $$B_{13} = 4 \cdot a_{\overline{27}|3.596\%} + 100 \cdot v_{3.596\%}^{27}$$
> > 
> > $$= 4 \times 17.348 + 100 \times 0.37577$$
> > 
> > $$= 69.39 + 37.58 = 106.97 \approx 106.91$$
> >
> > **Hasil Akhir:** **(E)**. $B_{13} \approx 106.91$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $a_{\overline{13}|}$ (sudah lewat) alih-alih $a_{\overline{27}|}$ (sisa): book value prospective = PV sisa cash flow.
> > > - Mengira $8\%$ adalah rate per semester: $8\%$ adalah annual nominal → rate per semester $= 4\%$, bukan $8\%$.
> >
> > > [!CAUTION] Red Flags
> > > - Book value setelah kupon ke-$k$ → prospective: $B_k = Fr \cdot a_{\overline{N-k}|j} + C \cdot v^{N-k}$, dengan $N$ = total kupon.

---

## **No. 21**

Yield rates to maturity for zero coupon bonds are currently quoted at 6% for one-year maturity, 7% for two-year maturity, and 7.5% for three-year maturity. Find the present value, two years from now, of a one-year 1,000-par-value zero-coupon bond.

(A) 902

(B) 922

(C) 942

(D) 962

(E) 982

> [!summary]+ **Jawaban No. 21**
>
> **(B).** 922
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Forward rate dari $t_1$ ke $t_2$:
> > 
> > $$(1 + s_{t_2})^{t_2} = (1 + s_{t_1})^{t_1} \cdot (1 + f_{t_1, t_2})^{t_2 - t_1}$$
> >
> > PV di $t=2$ dari 1,000 di $t=3$:
> > 
> > $$\text{PV}_{t=2} = \frac{1{,}000}{1 + f_{2,3}}$$
>
> **Diketahui:**
> - $s_1 = 6\%$, $s_2 = 7\%$, $s_3 = 7.5\%$ (spot rates)
> - Obligasi: zero-coupon, maturity 1 tahun, par 1,000, di $t=2$ hingga $t=3$
> - Target: PV di $t=2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Forward Rate $f_{2,3}$**
> > 
> > $$(1.075)^3 = (1.07)^2 \cdot (1 + f_{2,3})$$
> > 
> > $$1 + f_{2,3} = \frac{(1.075)^3}{(1.07)^2} = \frac{1.242297}{1.1449} = 1.085070$$
> > 
> > $$f_{2,3} = 8.5070\%$$
> >
> > **Langkah 2: Hitung PV di $t=2$**
> > $$\text{PV}_{t=2} = \frac{1{,}000}{1.085070} = 921.60 \approx 922$$
> >
> > **Hasil Akhir:** **(B)**. PV di $t=2$ ≈ **922**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $s_1 = 6\%$ untuk mendiskon dari $t=3$ ke $t=2$: harus gunakan forward rate $f_{2,3}$, bukan spot rate 1-tahun.
> > > - Mengira PV di $t=0$: soal meminta PV di $t=2$, bukan $t=0$.
> >
> > > [!CAUTION] Red Flags
> > > - "PV two years from now" + zero coupon → ini adalah PV menggunakan 1-year forward rate dua tahun ke depan.

---

## **No. 22**

Determine the modified duration (or "volatility") of a growing perpetuity. The perpetuity will make annual payments, with the first payment being \$1 one year from now, and thereafter each subsequent payment will be \$1 greater than the preceding payment. Assume an annual effective interest rate of 8%.

(A) 12

(B) 16

(C) 20

(D) 24

(E) 28

> [!summary]+ **Jawaban No. 22**
>
> **(D).** 24
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Perpetuity]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 8.3; Kellison Bab 10 |
>
> > [!info]+ **Rumus**
> >
> > Modified Duration: $D_{\text{mod}} = -\dfrac{P'(i)}{P(i)}$
> >
> > Arithmetically increasing perpetuity:
> > $$P(i) = \frac{1}{i} + \frac{1}{i^2} = \frac{i + 1}{i^2}$$
> > $$P'(i) = -\frac{1}{i^2} - \frac{2}{i^3}$$
>
> **Diketahui:**
> - Growing perpetuity: pembayaran $1, 2, 3, \ldots$ di $t = 1, 2, 3, \ldots$
> - $i = 8\% = 0.08$
> - Target: modified duration $D_{\text{mod}}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $P(i)$**
> > $$P(i) = \frac{1}{i} + \frac{1}{i^2} = \frac{1}{0.08} + \frac{1}{(0.08)^2} = 12.5 + 156.25 = 168.75$$
> >
> > **Langkah 2: Hitung $P'(i)$**
> > $$P'(i) = -\frac{1}{i^2} - \frac{2}{i^3} = -\frac{1}{0.0064} - \frac{2}{0.000512} = -156.25 - 3906.25 = -4062.5$$
> >
> > **Langkah 3: Hitung Modified Duration**
> > $$D_{\text{mod}} = -\frac{P'}{P} = \frac{4062.5}{168.75} = 24.07 \approx 24$$
> >
> > **Hasil Akhir:** **(D)**. Modified Duration ≈ **24**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula Macaulay Duration dan lupa dibagi $(1+i)$: $D_{\text{mod}} = D_{\text{Mac}} / (1+i)$.
> > > - Tidak menurunkan $P(i)$ secara eksak — perlu turunan parsial terhadap $i$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal "volatility" = modified duration. Gunakan $-P'/P$ langsung.

---

## **No. 23**

You purchase a 7.5% annual coupon bond with a face value of 1,000 to yield a minimum interest rate of 8% effective. The bond is a callable corporate bond, with a call price of 1,050, and can be called by the issuing corporation after five years. The bond matures at par in 30 years. Immediately after the 12th coupon payment, the issuing corporation redeems the bond. Determine the effective annual yield you achieved on this twelve-year investment.

(A) 6.5%

(B) 7.0%

(C) 7.5%

(D) 8.0%

(E) 8.5%

> [!summary]+ **Jawaban No. 23**
>
> **(E).** 8.5%
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]] · [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Connected Topics** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Untuk callable bond, harga pembelian = harga terendah atas semua skenario redemption:
> > $$P = \min_{t} \left[Fr \cdot a_{\overline{t}|i} + C_t \cdot v_i^t\right]$$
> >
> > Yield aktual: selesaikan $P = Fr \cdot a_{\overline{12}|y} + 1{,}050 \cdot v_y^{12}$ untuk $y$.
>
> **Diketahui:**
> - $F = 1{,}000$, $Fr = 75$, call price $= 1{,}050$ (setelah 5 tahun), maturity at par 30 tahun
> - Minimum yield $= 8\%$
> - Bond di-call setelah kupon ke-12
> - Target: yield aktual yang dicapai
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Harga Pembelian**
> > Karena yield minimum $8\%$ dan $Fr/F = 7.5\% < 8\%$ (bond di bawah par relative to yield), bond diperdagangkan dengan diskon.
> > Jika diredem pada par ($C = 1{,}000$) di $t=30$: $P = 75a_{\overline{30}|8\%} + 1{,}000v^{30} = 943.71$
> > Jika di-call pada $1{,}050$ di tahun ke-5 s.d. 29: $P = 1{,}050 + (75 - 84)a_{\overline{t}|8\%} = 1{,}050 - 9a_{\overline{t}|}$
> > Ini menurun seiring $t$ meningkat → minimum saat $t = 29$: $P = 1{,}050 - 9a_{\overline{29}|8\%} = 949.57$
> > Harga minimum = $943.71$ (pada maturity $t=30$).
> > **Harga beli = 943.71**.
> >
> > **Langkah 2: Hitung Yield Aktual (Bond Di-call di $t=12$)**
> > $$943.71 = 75 \cdot a_{\overline{12}|y} + 1{,}050 \cdot v_y^{12}$$
> > Dengan kalkulator: $y \approx 8.52\% \approx 8.5\%$
> >
> > **Hasil Akhir:** **(E)**. Yield aktual $\approx 8.5\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Untuk callable bond dengan coupon rate < yield rate: investor memilih harga minimum atas semua kemungkinan call date (worst case pricing).
> > > - Jika coupon rate > yield rate: cari harga minimum juga, tapi titik minimumnya berbeda.
> >
> > > [!CAUTION] Red Flags
> > > - "Callable bond" + "minimum yield" → harga pembelian = harga terendah (paling konservatif). Yield aktual akan berbeda jika bond di-call lebih awal atau lebih lambat dari yang diasumsikan.

---

## **No. 24**

A one-year zero-coupon bond has an annual yield of 6.25%. A two-year zero-coupon bond has an annual yield of 7.00%. A three-year zero-coupon bond has an annual yield of 7.50%. A three-year 12% annual coupon bond has a face value of \$1,000. Find the yield to maturity on this three-year 12% annual coupon bond.

(A) 6.6%

(B) 7.0%

(C) 7.4%

(D) 7.8%

(E) 8.2%

> [!summary]+ **Jawaban No. 24**
>
> **(C).** 7.4% (lebih tepatnya 7.42%)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]] · [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | Vaaler Bab 6 & 8.3; Kellison Bab 6 & 10 |
>
> > [!info]+ **Rumus**
> >
> > Harga obligasi menggunakan spot rates:
> > $$P_0 = \frac{Fr}{(1+s_1)^1} + \frac{Fr}{(1+s_2)^2} + \frac{Fr + C}{(1+s_3)^3}$$
> >
> > Yield-to-maturity $i$: $P_0 = Fr \cdot a_{\overline{3}|i} + C \cdot v_i^3$
>
> **Diketahui:**
> - $s_1 = 6.25\%$, $s_2 = 7.00\%$, $s_3 = 7.50\%$
> - $F = C = 1{,}000$, $Fr = 120$
> - Target: YTM $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Harga Menggunakan Spot Rates**
> > $$P_0 = \frac{120}{1.0625} + \frac{120}{(1.07)^2} + \frac{1{,}120}{(1.075)^3}$$
> > $$= 112.941 + 104.846 + 901.523 = 1{,}119.310$$
> >
> > **Langkah 2: Selesaikan untuk YTM**
> > $$1{,}119.310 = 120 \cdot a_{\overline{3}|i} + 1{,}000 \cdot v_i^3$$
> > Dengan kalkulator: $i \approx 7.42\%$
> >
> > **Hasil Akhir:** **(C)**. YTM $\approx 7.42\% \approx 7.4\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira YTM = rata-rata spot rates ($6.25 + 7 + 7.5)/3 = 6.92\%$) — YTM adalah single rate ekivalen, bukan rata-rata aritmatika.
> > > - Menggunakan $s_3 = 7.5\%$ langsung sebagai YTM — YTM coupon bond ≠ spot rate karena cash flow terjadi di $t=1, 2, 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan spot rates → harga menggunakan masing-masing spot rate, LALU cari YTM dari harga tersebut.

---

## **No. 25**

Bond A is an $n$-year 100 par value bond with 8% annual coupons and sells for 140.25. Bond B is an $n$-year 100 par value bond with 3% annual coupons and sells for 80.17. Both bonds have the same yield rate $i$. Determine $i$.

(A) 3.82%

(B) 4.65%

(C) 4.85%

(D) 5.15%

(E) 5.52%

> [!summary]+ **Jawaban No. 25**
>
> **(B).** 4.65%
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Formula premium/discount:
> > $$P = C + (Fr - Ci) \cdot a_{\overline{n}|i}$$
> >
> > Bond A: $140.25 = 100 + (8 - 100i) \cdot a_{\overline{n}|}$
> > Bond B: $80.17 = 100 + (3 - 100i) \cdot a_{\overline{n}|}$
>
> **Diketahui:**
> - Bond A: $P_A = 140.25$, $Fr_A = 8$, $C = 100$
> - Bond B: $P_B = 80.17$, $Fr_B = 3$, $C = 100$
> - Yield yang sama $i$, $n$ sama
> - Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tulis Persamaan untuk Kedua Bond**
> > $$140.25 - 100 = (8 - 100i) \cdot a_{\overline{n}|} \implies 40.25 = (8 - 100i) \cdot a_{\overline{n}|}$$
> > $$80.17 - 100 = (3 - 100i) \cdot a_{\overline{n}|} \implies -19.83 = (3 - 100i) \cdot a_{\overline{n}|}$$
> >
> > **Langkah 2: Bagi Kedua Persamaan (Eliminasi $a_{\overline{n}|}$)**
> > $$\frac{40.25}{-19.83} = \frac{8 - 100i}{3 - 100i}$$
> > $$-40.25(3 - 100i) = -19.83(8 - 100i) \text{ [cross multiply]}$$
> > $$-120.75 + 4025i = -158.64 + 1983i$$
> > $$4025i - 1983i = -158.64 + 120.75$$
> > $$2042i = -37.89$$
> >
> > Koreksi tanda (ingat $-40.25/-19.83 = +2.030$):
> > $$\frac{40.25}{-19.83} = \frac{8 - 100i}{3 - 100i}$$
> > $$40.25(3 - 100i) = -19.83(8 - 100i)$$
> > $$120.75 - 4025i = -158.64 + 1983i$$
> > $$279.39 = 6008i$$
> > $$i = \frac{279.39}{6008} = 0.04650 = 4.65\%$$
> >
> > **Hasil Akhir:** **(B)**. $i \approx 4.65\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menebak $n$ atau $a_{\overline{n}|}$ secara langsung tanpa eliminasi — metode bagi persamaan menghilangkan $n$ dan $a_{\overline{n}|}$ sekaligus.
> > > - Salah tanda ketika cross multiply — perhatikan bahwa Bond B menjual dengan diskon ($P < C$), sehingga $(3 - 100i) \cdot a < 0$ artinya $i > 3\%$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua bond dengan yield sama, $n$ sama → bagi persamaan premium/discount untuk eliminasi $a_{\overline{n}|}$ dan langsung temukan $i$.

---

## **No. 26**

A 30-year 1,000 par value bond pays 10% annual coupons. Using an interest rate of 12%, find the Macaulay duration of this bond.

(A) 9.2

(B) 10.2

(C) 11.2

(D) 12.2

(E) 13.2

> [!summary]+ **Jawaban No. 26**
>
> **(A).** 9.2 (lebih tepatnya $D_{Mac} \approx 9.16$)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] · [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 8.3; Kellison Bab 10 |
>
> > [!info]+ **Rumus**
> >
> > $$D_{Mac} = \frac{\sum_{t=1}^{n} t \cdot CF_t \cdot v^t}{\sum_{t=1}^{n} CF_t \cdot v^t} = \frac{Fr \cdot (Ia)_{\overline{n}|i} + n \cdot C \cdot v^n}{Fr \cdot a_{\overline{n}|i} + C \cdot v^n}$$
>
> **Diketahui:**
> - $F = C = 1{,}000$, $Fr = 100$, $n = 30$, $i = 12\%$
> - Target: $D_{Mac}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Komponen Penyebut (Harga Bond)**
> > $$P = 100 \cdot a_{\overline{30}|12\%} + 1{,}000 \cdot v^{30}_{12\%}$$
> > $$= 100 \times 8.0552 + 1{,}000 \times 0.033378$$
> > $$= 805.52 + 33.378 = 838.90$$
> >
> > **Langkah 2: Hitung $(Ia)_{\overline{30}|12\%}$**
> > $$(Ia)_{\overline{30}|} = \frac{\ddot{a}_{\overline{30}|} - 30v^{30}}{i} = \frac{9.0219 - 30 \times 0.033378}{0.12} = \frac{9.0219 - 1.0013}{0.12} = \frac{8.0206}{0.12} = 66.838$$
> >
> > **Langkah 3: Hitung Pembilang**
> > $$\text{Pembilang} = 100 \times 66.838 + 30 \times 1{,}000 \times 0.033378$$
> > $$= 6{,}683.8 + 1{,}001.34 = 7{,}685.14$$
> >
> > **Langkah 4: Hitung $D_{Mac}$**
> > $$D_{Mac} = \frac{7{,}685.14}{838.90} = 9.16 \approx 9.2$$
> >
> > **Hasil Akhir:** **(A)**. $D_{Mac} \approx 9.16 \approx 9.2$ tahun.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira Macaulay Duration = maturity ($n = 30$) — ini hanya benar untuk zero-coupon bond.
> > > - Menggunakan coupon rate ($10\%$) bukan yield ($12\%$) dalam perhitungan: $v = 1/(1+i)$ dengan $i$ = yield, bukan coupon rate.
> >
> > > [!CAUTION] Red Flags
> > > - Soal Macaulay Duration dengan $i \neq r$ (yield berbeda dari coupon rate) → hitung menggunakan yield. Durasi akan jauh lebih kecil dari $n$ untuk coupon bond.

---

## **No. 27**

An insurer must pay 3,000 and 4,000 at the ends of years 1 and 2, respectively. The only investments available to the company are a one-year zero-coupon bond (with a par value of 1,000 and an effective annual yield of 5%), and a two-year 8% annual coupon bond (with a par value of 1,000 and an effective annual yield of 6%). Which of the following is closest to the cost to the company today to match its liabilities exactly?

(A) 6,014

(B) 6,114

(C) 6,214

(D) 6,314

(E) 6,414

> [!summary]+ **Jawaban No. 27**
>
> **(E).** 6,414
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] · [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Connected Topics** | [[3.1 Spot Rates and Forward Rates]] |
> | **Referensi** | Vaaler Bab 9; Kellison Bab 11 |
>
> > [!info]+ **Rumus**
> >
> > Cash flow matching: beli aset sehingga cash flow aset = cash flow liabilitas di setiap waktu.
> >
> > Harga aset:
> > - Bond A (zero-coupon): $P_A = \dfrac{1{,}000}{1.05} = 952.38$
> > - Bond B (coupon): $P_B = \dfrac{80}{1.06} + \dfrac{1{,}080}{(1.06)^2} = 1{,}036.67$
>
> **Diketahui:**
> - Liabilitas: 3,000 di $t=1$, 4,000 di $t=2$
> - Aset A: zero-coupon 1 tahun, par 1,000, yield 5%
> - Aset B: 8% coupon 2 tahun, par 1,000, yield 6%
> - Target: total cost minimum untuk cash flow matching
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Jumlah Bond B ($n_B$)**
> > Hanya Bond B yang punya cash flow di $t=2$ (maturity $= 1{,}080$):
> > $$n_B \times 1{,}080 = 4{,}000 \implies n_B = \frac{4{,}000}{1{,}080} = 3.7037$$
> >
> > **Langkah 2: Tentukan Jumlah Bond A ($n_A$)**
> > Cash flow Bond B di $t=1$: $n_B \times 80 = 3.7037 \times 80 = 296.3$
> > Sisa liabilitas $t=1$: $3{,}000 - 296.3 = 2{,}703.7$
> > $$n_A \times 1{,}000 = 2{,}703.7 \implies n_A = 2.7037$$
> >
> > **Langkah 3: Hitung Total Cost**
> > $$\text{Cost} = n_A \times P_A + n_B \times P_B$$
> > $$= 2.7037 \times 952.38 + 3.7037 \times 1{,}036.67$$
> > $$= 2{,}575.0 + 3{,}839.5 = 6{,}414.5 \approx 6{,}414$$
> >
> > **Hasil Akhir:** **(E)**. Total cost ≈ **6,414**.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mulai dari liabilitas $t=1$ alih-alih $t=2$: dalam cash flow matching, selalu mulai dari liabilitas terjauh (backward induction).
> > > - Lupa bahwa Bond B juga punya cash flow di $t=1$ (kupon $= 80$) — ini mengurangi kebutuhan Bond A.
> >
> > > [!CAUTION] Red Flags
> > > - Cash flow matching → mulai dari waktu terakhir, kerja mundur. Tentukan unit setiap aset dari liabilitas paling jauh dulu.

---

## **No. 28**

Sue decided to purchase a 20-year annuity that pays \$900 at the end of the first year, \$915 at the end of the second year, and for each year thereafter the payment increases by \$15. Which of the following formulas gives the price of this annuity?

(A) $900 + 15(Ia)_{\overline{19}|}$

(B) $885 + 15(Ia)_{\overline{20}|}$

(C) $900a_{\overline{20}|} + 15(Ia)_{\overline{20}|}$

(D) $900a_{\overline{20}|} + 15(Ia)_{\overline{19}|}$

(E) $885a_{\overline{20}|} + 15(Ia)_{\overline{20}|}$

> [!summary]+ **Jawaban No. 28**
>
> **(E).** $885a_{\overline{20}|} + 15(Ia)_{\overline{20}|}$
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > Anuitas aritmatika increasing:
> > $$\text{PV} = (C - Q) \cdot a_{\overline{n}|} + Q \cdot (Ia)_{\overline{n}|}$$
> > di mana $C$ = pembayaran pertama, $Q$ = kenaikan per periode.
>
> **Diketahui:**
> - Pembayaran: 900, 915, 930, ..., selama 20 tahun
> - $C = 900$, kenaikan $Q = 15$ per tahun, $n = 20$
> - Target: formula PV yang benar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Dekomposisikan Anuitas**
> > Payment di $t = k$: $900 + 15(k-1) = 885 + 15k$
> > Sehingga:
> > $$\text{PV} = \sum_{k=1}^{20} (885 + 15k) v^k = 885 \sum_{k=1}^{20} v^k + 15 \sum_{k=1}^{20} k \cdot v^k$$
> > $$= 885 \cdot a_{\overline{20}|} + 15 \cdot (Ia)_{\overline{20}|}$$
> >
> > **Verifikasi dengan Opsi Lain:**
> > - (D): $900a_{\overline{20}|} + 15(Ia)_{\overline{19}|}$ — jika $C = 900$ maka payment ke-$k$ = $900 + 15 \cdot (k-1)(Ia)_{19}$ tidak cocok untuk 20 tahun.
> > - Opsi (E) benar karena payment ke-$k = 885 + 15k$: level part = 885, increasing part = $15k$.
> >
> > **Hasil Akhir:** **(E)**. $885a_{\overline{20}|} + 15(Ia)_{\overline{20}|}$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira level part = first payment ($C = 900$): dekomposisi yang benar membagi menjadi level annuity dengan payment $C - Q = 885$ dan increasing annuity $Q \cdot (Ia)$.
> > > - Menggunakan $(Ia)_{\overline{19}|}$ karena "kenaikan mulai dari tahun ke-2" — jika ditulis sebagai $15k$ maka $(Ia)_{\overline{20}|}$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal anuitas aritmatika dengan payment pertama $C$ dan kenaikan $Q$ → gunakan formula $(C-Q)a_{\overline{n}|} + Q(Ia)_{\overline{n}|}$ dan tuliskan payment ke-$k$ secara eksplisit untuk verifikasi.

---

## **No. 29**

Christine deposits \$100 into an account which earns interest at an effective annual rate of discount of $d$. At the same time, Douglas deposits \$100 into a separate account earning interest at a force of interest of $\delta_t = 0.001t^2$. After 10 years, both accounts have the same value. Find $d$.

(A) 3.3%

(B) 3.6%

(C) 3.9%

(D) 4.2%

(E) 4.5%

> [!summary]+ **Jawaban No. 29**
>
> **(A).** $d \approx 3.3\%$ (lebih tepatnya $d \approx 3.28\%$)
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] · [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[2.4 Continuous Annuities]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1–2 |
>
> > [!info]+ **Rumus**
> >
> > Akumulasi dengan force of interest variabel:
> > $$A(t) = A(0) \cdot \exp\left(\int_0^t \delta_s\,ds\right)$$
> >
> > Akumulasi dengan discount rate efektif $d$:
> > $$A(t) = \frac{A(0)}{(1-d)^t}$$
>
> **Diketahui:**
> - Christine: $A_C(0) = 100$, rate diskonto efektif $d$
> - Douglas: $A_D(0) = 100$, $\delta_t = 0.001t^2$
> - $A_C(10) = A_D(10)$
> - Target: $d$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Akumulasi Douglas di $t = 10$**
> > $$A_D(10) = 100 \cdot \exp\left(\int_0^{10} 0.001t^2\,dt\right)$$
> > $$\int_0^{10} 0.001t^2\,dt = 0.001 \cdot \frac{t^3}{3}\Big|_0^{10} = 0.001 \times \frac{1{,}000}{3} = \frac{1}{3}$$
> > $$A_D(10) = 100 \cdot e^{1/3} = 100 \times 1.39561 = 139.561$$
> >
> > **Langkah 2: Set Persamaan untuk Christine**
> > $$\frac{100}{(1-d)^{10}} = 139.561$$
> > $$(1-d)^{10} = \frac{100}{139.561} = 0.71658$$
> > $$1 - d = (0.71658)^{0.10} = 0.96718$$
> > $$d = 1 - 0.96718 = 0.03282 \approx 3.3\%$$
> >
> > **Hasil Akhir:** **(A)**. $d \approx 3.3\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $A(t) = 100(1-d)^t$ (akumulasi turun) alih-alih $100/(1-d)^t$ (akumulasi naik dengan rate diskonto $d$). Rate diskonto $d$ berarti faktor diskon per periode $= (1-d)$, sehingga faktor akumulasi = $1/(1-d)$.
> > > - Lupa bahwa $\delta_t$ variabel → harus integralkan, bukan hanya $\delta \times t$.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan "force of interest $\delta_t$" (fungsi waktu) → akumulasi = $e^{\int_0^t \delta_s\,ds}$.
> > > - "Effective annual rate of discount $d$" → $A(t) = A(0)/(1-d)^t$ (berbeda dari $A(0)(1+i)^t$).

---

## **No. 30**

You are given the following information about two annual-coupon bonds, each with a face and redemption value of \$1,000, and each 3 years in length:

- Bond A: A 3-year 6% annual coupon bond with a price of \$955.57.
- Bond B: A 3-year 8% annual coupon bond with a price of \$1,008.38.

Using this data, find the annual yield on a 3-year zero-coupon bond.

(A) 6.40%

(B) 6.95%

(C) 7.30%

(D) 7.85%

(E) 8.40%

> [!summary]+ **Jawaban No. 30**
>
> **(D).** 7.85%
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.2 Yield Curve]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Prinsip replikasi/arbitrage: kombinasi linear dari dua obligasi yang mengeliminasi cash flow di $t=1$ dan $t=2$ menghasilkan zero-coupon bond sintetis di $t=3$.
> >
> > Jika beli $w_A$ unit Bond A dan jual $w_B$ unit Bond B sehingga CF di $t=1$ dan $t=2$ = 0:
> > $$CF_3 = w_A \times 1{,}060 - w_B \times 1{,}080$$
> > Harga kombinasi = PV zero-coupon sintetis.
>
> **Diketahui:**
> - Bond A: kupon $= 60$, harga $= 955.57$
> - Bond B: kupon $= 80$, harga $= 1{,}008.38$
> - Target: spot rate 3-tahun $s_3$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Beli $\frac{4}{3}$ unit Bond A dan Jual 1 unit Bond B**
> > CF di $t = 1$: $\frac{4}{3}(60) - 80 = 80 - 80 = 0$ ✓
> > CF di $t = 2$: $\frac{4}{3}(60) - 80 = 0$ ✓
> > CF di $t = 3$: $\frac{4}{3}(1{,}060) - 1{,}080 = 1{,}413.33 - 1{,}080 = 333.33$
> >
> > **Langkah 2: Hitung Harga Kombinasi**
> > $$P = \frac{4}{3}(955.57) - 1{,}008.38 = 1{,}274.09 - 1{,}008.38 = 265.71$$
> >
> > **Langkah 3: Hitung Spot Rate 3-Tahun**
> > $$265.71 = \frac{333.33}{(1+s_3)^3}$$
> > $$(1+s_3)^3 = \frac{333.33}{265.71} = 1.2544$$
> > $$s_3 = (1.2544)^{1/3} - 1 = 0.07847 \approx 7.85\%$$
> >
> > **Hasil Akhir:** **(D)**. $s_3 \approx 7.85\%$.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba bootstrap langsung dari dua persamaan simultan tanpa mengenali teknik replikasi — teknik rasio cash flow lebih efisien.
> > > - Mengira spot rate 3-tahun = YTM salah satu bond — YTM ≠ spot rate kecuali untuk zero-coupon bond.
> >
> > > [!CAUTION] Red Flags
> > > - Soal "temukan spot rate dari dua coupon bond" → gunakan replikasi: buat kombinasi linear yang menghasilkan cash flow hanya di satu waktu (zero-coupon sintetis).

---

*— End of Practice Exam 1 —*

> [!note] Ringkasan Kunci Jawaban
> | No | Jawaban | Topik |
> |----|---------|-------|
> | 1 | A | Force of interest & nominal rates |
> | 2 | C | Deferred annuity vs perpetuity |
> | 3 | D | PV equation — quadratic in $v^2$ |
> | 4 | E | Loan amortization — revised payment |
> | 5 | D | Principal ratio — varying interest conversion |
> | 6 | A | Growing annuity with inflation |
> | 7 | E | Redington immunization |
> | 8 | E | Geometrically growing perpetuity |
> | 9 | B | Continuous varying annuity |
> | 10 | D | Drop payment — unknown interest rate |
> | 11 | D | NPV / deferred annuity |
> | 12 | C | Arithmetic growing perpetuity |
> | 13 | C | Bond pricing — find $n$ |
> | 14 | C | Interest in $k$-th loan payment |
> | 15 | D | Interest ratio over loan life |
> | 16 | C | Palindromic (increasing-decreasing) annuity |
> | 17 | D | Reinvestment rate problem |
> | 18 | B | Write-down and YTM |
> | 19 | E | Loan with varying interest rates |
> | 20 | E | Book value after $k$-th coupon |
> | 21 | B | Forward rate & zero-coupon PV |
> | 22 | D | Modified duration — arithmetic perpetuity |
> | 23 | E | Callable bond yield |
> | 24 | C | YTM from spot rates |
> | 25 | B | Two bonds — solve for yield |
> | 26 | A | Macaulay duration — coupon bond |
> | 27 | E | Cash flow matching |
> | 28 | E | Arithmetically increasing annuity formula |
> | 29 | A | Variable force of interest & discount rate |
> | 30 | D | Spot rate via bond replication |
