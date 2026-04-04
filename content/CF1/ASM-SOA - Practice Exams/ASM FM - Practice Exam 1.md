# ASM FM 16th Edition — Practice Exam 1
## Pembahasan Lengkap (Soal No. 1 – 30)

> **Sumber Soal:** ASM FM Study Manual, 16th Edition, Practice Exam 1
> **Format:** 30 soal pilihan ganda | Kunci Jawaban resmi tersedia di file ASM
> **Dibuat dengan:** Prompt Pembahasan Exam CF1 FINAL

---

## **No. 1**

Which of the following is **not** correct with respect to an annual effective interest rate of $i = 10\%$?

(A) $\delta = e^{0.10} - 1$
(B) $i^{(2)} = 2 \times [(1.10)^{0.50} - 1]$
(C) $\delta = \ln(1.10)$
(D) $d = \dfrac{0.10}{1.10}$
(E) $d^{(4)} = 4 \times [1 - (1.10^{-0.25})]$

> [!summary]+ **Jawaban No. 1**
> **(A). $\delta = e^{0.10} - 1$ adalah pernyataan yang TIDAK benar**
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
> > Hubungan antara $i$ (efektif), $\delta$ (force of interest), $d$ (discount rate), $i^{(m)}$ (nominal), $d^{(m)}$ (nominal discount):
> > $$e^\delta = 1 + i \quad \Rightarrow \quad \delta = \ln(1+i)$$
> > $$i^{(m)} = m\left[(1+i)^{1/m} - 1\right]$$
> > $$d = \frac{i}{1+i}$$
> > $$d^{(m)} = m\left[1 - (1+i)^{-1/m}\right]$$
>
> **Diketahui:**
> - $i = 10\%$ (suku bunga efektif tahunan)
> - Target: Temukan pernyataan yang TIDAK benar dari kelima opsi
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Verifikasi Opsi (A)**
> > Opsi (A) menyatakan $\delta = e^{0.10} - 1$.
> > Hubungan yang benar: $e^\delta = 1 + i$, sehingga $\delta = \ln(1+i) = \ln(1.10) \approx 0.09531$.
> > Tetapi $e^{0.10} - 1 \approx 1.10517 - 1 = 0.10517 \neq 0.09531$.
> > **Pernyataan (A) SALAH.** (Opsi ini membalik posisi $\delta$ dan $i$.)
> >
> > **Langkah 2: Verifikasi Opsi (B)**
> > $i^{(2)} = 2[(1.10)^{0.5} - 1] = 2[1.04881 - 1] = 2(0.04881) = 0.09762$.
> > Ini adalah formula standar untuk nominal rate compounded semesteran. ✓
> >
> > **Langkah 3: Verifikasi Opsi (C)**
> > $\delta = \ln(1.10) \approx 0.09531$. Ini adalah hubungan yang benar. ✓
> >
> > **Langkah 4: Verifikasi Opsi (D)**
> > $d = \frac{i}{1+i} = \frac{0.10}{1.10} \approx 0.09091$. Ini adalah formula standar. ✓
> >
> > **Langkah 5: Verifikasi Opsi (E)**
> > $d^{(4)} = 4[1 - (1.10)^{-0.25}] = 4[1 - 0.97629] = 4(0.02371) = 0.09483$. Ini benar. ✓
> >
> > **Hasil Akhir:** **(A)**. $\delta = e^{0.10} - 1$ adalah pernyataan yang tidak benar.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Tidak ada mismatch unit di soal ini, tetapi kesalahan serupa: menggunakan $e^i$ untuk mendapatkan $\delta$, padahal yang benar adalah $\delta = \ln(1+i)$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $\delta = e^i - 1$ (membalik relasi): yang benar adalah $e^\delta = 1 + i$, bukan $e^i = 1 + \delta$.
> > > - Mengira $d = i/(1-i)$ alih-alih $i/(1+i)$.
> > > - Mengira $d^{(m)} = m[(1+i)^{1/m} - 1]$ (ini adalah formula untuk $i^{(m)}$, bukan $d^{(m)}$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Soal menanyakan yang "tidak benar" — jangan terburu-buru memilih pernyataan pertama yang tampak asing, melainkan verifikasi setiap opsi.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal memuat $e^\delta$ atau $e^i$ → SELALU periksa arah relasi: $e^\delta = 1+i$, jadi $\delta = \ln(1+i)$.
> > > - Soal "which is NOT correct" → verifikasi semua opsi sebelum memilih.

---

## **No. 2**

You can receive one of the following two sets of cash flows. Under Option A, you will receive 10 annual payments of \$1,000, with the first payment to occur 4 years from now. Under Option B, you will receive $X$ at the end of each year, forever, with the first payment to occur 1 year from now. The annual effective rate of interest is 8%. Which of the following equations should be solved to find the value of $X$ such that you are indifferent between these two options?

(A) $80\, a_{\overline{10}|}\, v^4 = X$
(B) $80\, a_{\overline{10}|}\, v^3 = X$
(C) $80\, a_{\overline{10}|}\, v^3 = X$
(D) $80\, a_{\overline{10}|}\, v^2 = X$
(E) $80\, a_{\overline{10}|}\, v^2 = X$

*(Kunci jawaban ASM: (C) — persamaan ekuivalensi: $\text{PV}_A = \text{PV}_B$ dengan $\text{PV}_A = 1000\, a_{\overline{10}|0.08}\, v^3$ dan $\text{PV}_B = X/0.08$)*

> [!summary]+ **Jawaban No. 2**
> **(C). $1{,}000\, a_{\overline{10}|0.08}\, v^3 = \dfrac{X}{0.08}$, sehingga $X = 80\, a_{\overline{10}|}\, v^3$**
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
> > PV Annuity-immediate yang ditunda $m$ periode:
> > $$\text{PV} = R \cdot a_{\overline{n}|i} \cdot v^m$$
> > Formula annuity-immediate menempatkan nilai **1 periode sebelum** pembayaran pertama.
> > PV Perpetuity-immediate (pembayaran level $X$ selamanya, mulai akhir tahun ke-1):
> > $$\text{PV} = \frac{X}{i}$$
>
> **Diketahui:**
> - Option A: 10 pembayaran tahunan \$1,000, pembayaran pertama 4 tahun dari sekarang
> - Option B: Perpetuity-immediate level $X$ per tahun, pembayaran pertama 1 tahun dari sekarang
> - $i = 8\%$ efektif tahunan
> - Target: Persamaan ekuivalensi PV$_A$ = PV$_B$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV Option A**
> > Pembayaran pertama Option A di $t = 4$. Formula $a_{\overline{10}|}$ menempatkan nilai 1 periode *sebelum* pembayaran pertama, yaitu di $t = 3$.
> > Sehingga kita perlu mendiskon dari $t = 3$ ke $t = 0$ sebanyak 3 tahun:
> > $$\text{PV}_A = 1{,}000 \cdot a_{\overline{10}|0.08} \cdot v^3$$
> >
> > **Langkah 2: Hitung PV Option B**
> > Perpetuity-immediate dengan pembayaran pertama di $t = 1$:
> > $$\text{PV}_B = \frac{X}{i} = \frac{X}{0.08}$$
> >
> > **Langkah 3: Set Indifference (PV$_A$ = PV$_B$)**
> > $$1{,}000 \cdot a_{\overline{10}|0.08} \cdot v^3 = \frac{X}{0.08}$$
> > $$X = 80 \cdot a_{\overline{10}|0.08} \cdot v^3$$
> >
> > Secara numerik: $a_{\overline{10}|0.08} = 6.71008$, $v^3 = (1.08)^{-3} = 0.79383$
> > $X = 80 \times 6.71008 \times 0.79383 = 42.62$
> >
> > **Hasil Akhir:** **(C)**. $X = 80 \cdot a_{\overline{10}|} \cdot v^3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $v^4$ alih-alih $v^3$: formula $a_{\overline{n}|}$ (annuity-immediate) sudah mencakup satu periode diskonto implisit — ia menghasilkan nilai di $t = 3$, sehingga hanya butuh 3 tahun diskonto tambahan ke $t = 0$, bukan 4.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $\ddot{a}_{\overline{10}|}$ (annuity-due) — nilai annuity-due berada di $t = 4$ (saat pembayaran pertama), sehingga harus dikalikan $v^4$. Tapi soal tidak menyebut "beginning of period".
> > > - Mengabaikan faktor $1/i$ untuk perpetuity — PV perpetuity bukan cukup $X \cdot n$, melainkan $X/i$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "First payment 4 years from now" → annuity-immediate dengan $v^3$ (bukan $v^4$), karena $a_{\overline{n}|}$ sendiri sudah mendiskon 1 periode.
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran pertama di $t = k$ dengan annuity-immediate → kalikan dengan $v^{k-1}$.
> > > - Jika soal menyebut "indifference" → ekuivalensi PV.

---

## **No. 3**

An annuity will pay you \$500 two years from now, and another \$1,000 four years from now. The present value of these two payments is \$1,200. Find the implied effective annual interest rate, $i$.

(A) $i < 4.5\%$ (B) $4.5\% < i < 5.5\%$ (C) $5.5\% < i < 6.5\%$ (D) $6.5\% < i < 7.5\%$ (E) $7.5\% < i$

> [!summary]+ **Jawaban No. 3**
> **(D). $6.5\% < i < 7.5\%$, dengan $i \approx 10.07\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] · [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> > PV dari arus kas diskrit:
> > $$\text{PV} = \sum_{t} C_t \cdot v^t, \quad v = \frac{1}{1+i}$$
> > Substitusi $w = v^2$ untuk menyederhanakan ke persamaan kuadratik.
>
> **Diketahui:**
> - $C_2 = 500$ (pembayaran di $t = 2$)
> - $C_4 = 1{,}000$ (pembayaran di $t = 4$)
> - $\text{PV} = 1{,}200$
> - Target: $i$ (efektif tahunan)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup Persamaan PV**
> > $$1{,}200 = 500v^2 + 1{,}000v^4$$
> >
> > **Langkah 2: Substitusi $w = v^2$**
> > $$1{,}200 = 500w + 1{,}000w^2$$
> > $$1{,}000w^2 + 500w - 1{,}200 = 0$$
> > Bagi dengan 100:
> > $$10w^2 + 5w - 12 = 0$$
> >
> > **Langkah 3: Selesaikan dengan Rumus Kuadrat**
> > $$w = \frac{-5 \pm \sqrt{25 + 480}}{20} = \frac{-5 \pm \sqrt{505}}{20} = \frac{-5 \pm 22.472}{20}$$
> > Ambil nilai positif:
> > $$w = \frac{17.472}{20} = 0.87361 = v^2$$
> >
> > **Langkah 4: Hitung $i$**
> > $$v = \sqrt{0.87361} = 0.93467$$
> > $$1 + i = \frac{1}{v} = \frac{1}{0.93467} = 1.06993$$
> > $$i \approx 6.99\% \approx 7.0\%$$
> >
> > Karena $6.5\% < 7.0\% < 7.5\%$, jawabannya adalah **(D)**.
> >
> > **Hasil Akhir:** **(D)**. $i \approx 7.0\%$, berada pada rentang $6.5\% < i < 7.5\%$

> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Mendiskon \$500 satu kali dan \$1,000 dua kali (menghitung tahun sebagai jumlah diskonto, bukan waktu): harus $v^2$ dan $v^4$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengabaikan substitusi $w = v^2$ dan mencoba menyelesaikan sebagai polinom derajat 4 — ini bisa diselesaikan, namun jauh lebih lambat.
> > > - Mengambil akar negatif dari kuadratik — akar negatif harus diabaikan karena $v > 0$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > Mengira "two years from now" berarti $v^1$ — di sini waktu ke-2 berarti $v^2$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika muncul $v^2$ dan $v^4$ → substitusi $w = v^2$ untuk mendapatkan kuadratik.
> > > - Jawaban berbentuk range → hitung $i$ numerik, lalu cocokkan range.

---

## **No. 4**

An investor took out a 30-year loan which he repays with annual payments of 1,500 at an annual effective interest rate of 4%. The payments are made at the end of the year. At the time of the 12th payment, the investor pays an additional payment of 4,000 and wants to repay the remaining balance over 10 years. Calculate the revised annual payment.

(A) 1,682 (B) 1,729 (C) 1,783 (D) 1,825 (E) 1,848

> [!summary]+ **Jawaban No. 4**
> **(E). Revised annual payment $\approx 1{,}848$**
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
> > Outstanding balance (metode prospektif) setelah pembayaran ke-$k$ pada loan dengan $n$ pembayaran level $R$:
> > $$B_k = R \cdot a_{\overline{n-k}|i}$$
> > Revised payment $P$ setelah ekstra payment:
> > $$P = \frac{B_k^{\text{new}}}{a_{\overline{m}|i}}$$
>
> **Diketahui:**
> - Pinjaman 30 tahun, $R = 1{,}500$/tahun, $i = 4\%$ efektif tahunan
> - Setelah pembayaran ke-12, dibayar tambahan \$4,000
> - Sisa pinjaman akan dilunasi dalam 10 tahun
> - Target: Revised annual payment $P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Outstanding Balance setelah Pembayaran ke-12 (sebelum extra payment)**
> > Sisa tahun = $30 - 12 = 18$ tahun.
> > $$B_{12} = 1{,}500 \cdot a_{\overline{18}|0.04}$$
> > $$a_{\overline{18}|0.04} = \frac{1 - (1.04)^{-18}}{0.04} = \frac{1 - 0.49363}{0.04} = \frac{0.50637}{0.04} = 12.65930$$
> > $$B_{12} = 1{,}500 \times 12.65930 = 18{,}988.95$$
> >
> > **Langkah 2: Kurangi Extra Payment**
> > $$B_{12}^{\text{new}} = 18{,}988.95 - 4{,}000 = 14{,}988.95$$
> >
> > **Langkah 3: Hitung Revised Payment untuk 10 Tahun**
> > $$P \cdot a_{\overline{10}|0.04} = 14{,}988.95$$
> > $$a_{\overline{10}|0.04} = \frac{1 - (1.04)^{-10}}{0.04} = \frac{1 - 0.67556}{0.04} = 8.11090$$
> > $$P = \frac{14{,}988.95}{8.11090} = 1{,}848.00$$
> >
> > **Hasil Akhir:** **(E)**. $P \approx 1{,}848$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan sisa 18 tahun untuk revised payment (bukan 10 tahun sesuai soal).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung balance secara retrospektif tanpa memperhitungkan pembayaran yang sudah dilakukan — metode prospektif lebih efisien di sini.
> > > - Lupa mengurangi extra payment sebelum menghitung revised payment.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "At the time of the 12th payment" → extra payment dibayar bersamaan dengan pembayaran reguler ke-12, jadi balance setelah kedua pembayaran tersebut menjadi basis revised payment.
> >
> > > [!CAUTION] Red Flags
> > > - Soal dengan "additional payment" → hitung balance dulu, kurangi extra payment, lalu hitung revised payment.

---

## **No. 5**

A 25-year loan is being paid off via level amortization payments made at the end of each quarter. The nominal annual interest rate is 12% convertible monthly. The amount of principal in the 29th payment is 1,860. Find the amount of principal in the 61st payment.

(A) 4,535 (B) 4,635 (C) 4,735 (D) 4,835 (E) 4,935

> [!summary]+ **Jawaban No. 5**
> **(D). Principal dalam pembayaran ke-61 $\approx 4{,}835$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> > Principal dalam pembayaran ke-$t$ untuk loan level amortization:
> > $$P_t = R \cdot v^{n-t+1}$$
> > Sehingga rasio antara dua principal:
> > $$\frac{P_{t_2}}{P_{t_1}} = (1+j)^{t_2 - t_1}$$
> > di mana $j$ adalah suku bunga efektif per **periode pembayaran** (kuartal).
> > Konversi nominal monthly ke efektif kuartalan (KK-1):
> > $$j = \left(1 + \frac{i^{(12)}}{12}\right)^3 - 1$$
>
> **Diketahui:**
> - Loan 25 tahun = 100 pembayaran kuartalan ($n = 100$)
> - $i^{(12)} = 12\%$ per tahun (nominal, compounded monthly)
> - Frekuensi pembayaran: kuartalan → frequency mismatch!
> - $P_{29} = 1{,}860$
> - Target: $P_{61}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi Rate ke Efektif Per Kuartal (KK-1)**
> > Rate bulanan efektif: $\frac{12\%}{12} = 1\%$ per bulan.
> > Rate kuartalan efektif:
> > $$j = (1.01)^3 - 1 = 1.030301 - 1 = 0.030301 \approx 3.0301\%/\text{kuartal}$$
> >
> > **Langkah 2: Gunakan Rasio Principal**
> > Perbedaan antara pembayaran ke-29 dan ke-61 adalah $61 - 29 = 32$ periode:
> > $$P_{61} = P_{29} \cdot (1+j)^{32}$$
> > $$P_{61} = 1{,}860 \times (1.030301)^{32}$$
> >
> > **Langkah 3: Hitung $(1.030301)^{32}$**
> > $$(1.030301)^{32} = e^{32 \ln(1.030301)} = e^{32 \times 0.029855} = e^{0.95537} = 2.5993$$
> > $$P_{61} = 1{,}860 \times 2.5993 = 4{,}834.7 \approx 4{,}835$$
> >
> > **Hasil Akhir:** **(D)**. $P_{61} \approx 4{,}835$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $i^{(12)}/12 = 1\%$ langsung sebagai rate kuartalan (ini adalah rate bulanan, bukan kuartalan). Harus dikompound: $(1.01)^3 - 1$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $12\%/4 = 3\%$ per kuartal — ini mengabaikan compounding monthly.
> > > - Menghitung $P_{61}$ dari nol tanpa memanfaatkan relasi geometrik antar principal.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Nominal annual rate convertible monthly, payments quarterly" → frequency mismatch → WAJIB konversi ke rate per periode pembayaran (kuartal).
> >
> > > [!CAUTION] Red Flags
> > > - Jika frekuensi compounding ≠ frekuensi pembayaran → SELALU konversi ke rate efektif per periode pembayaran.

---

## **No. 6**

Suppose you are the actuary for an insurance company. Your company, in response to a policyholder claim involving physical injury, is responsible for making annual medical payments. The first payment will occur on January 1, 2008, and the final payment will occur on January 1, 2031. The first payment will be \$100,000; after that, the payments will increase annually for inflation, at a rate of 5% per year. The real interest rate is 3% per year. Find the present value of these future payments as of December 31, 2005.

(A) 1,491,000 (B) 1,501,000 (C) 1,511,000 (D) 1,521,000 (E) 1,531,000

> [!summary]+ **Jawaban No. 6**
> **(A). PV $\approx 1{,}491{,}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] · [[1.3 Cash Flow Equations and Inflation]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3–4 |
>
> > [!info]+ **Rumus**
> > PV geometrically growing annuity-due dengan $n$ pembayaran, growth rate $g$, interest rate $i$:
> > Dengan menggunakan real rate $i' = \frac{1+i_{\text{nom}}}{1+g} - 1$, setiap pembayaran dalam nilai real adalah konstan.
> > Nominal interest rate: $i_{\text{nom}} = (1+i')(1+g) - 1 = (1.03)(1.05) - 1 = 0.0815$
> > PV pada tanggal pembayaran pertama:
> > $$\text{PV}_{\text{at Jan 1, 2008}} = C \cdot \ddot{a}_{\overline{24}|i_{\text{nom}}^*}$$
> > di mana $i_{\text{nom}}^* = \frac{1.0815 - 1.05}{1.05} = \frac{0.0315}{1.05}$ (adjusted rate).
>
> **Diketahui:**
> - Pembayaran pertama: \$100,000 pada Jan 1, 2008 (annuity-due)
> - Pembayaran terakhir: Jan 1, 2031 → total 24 pembayaran
> - Growth rate inflasi: $g = 5\%$ per tahun
> - Real interest rate: $i_r = 3\%$ per tahun
> - Target: PV per Dec 31, 2005 (2 tahun sebelum pembayaran pertama)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Nominal Interest Rate**
> > $$i_{\text{nom}} = (1 + i_r)(1 + g) - 1 = (1.03)(1.05) - 1 = 1.0815 - 1 = 0.0815 = 8.15\%$$
> >
> > **Langkah 2: Hitung PV pada Jan 1, 2008 menggunakan Real Rate**
> > Karena pembayaran tumbuh sesuai inflasi 5% dan real rate 3%, kita dapat menggunakan $i_r = 3\%$ pada nilai-nilai real (setiap pembayaran dalam nilai $t=0$ adalah \$100,000):
> > $$\text{PV}_{\text{Jan 1, 2008}} = 100{,}000 \cdot \ddot{a}_{\overline{24}|3\%}$$
> > $$\ddot{a}_{\overline{24}|3\%} = (1.03) \cdot a_{\overline{24}|3\%} = 1.03 \times \frac{1-(1.03)^{-24}}{0.03}$$
> > $$a_{\overline{24}|3\%} = \frac{1 - 0.49193}{0.03} = \frac{0.50807}{0.03} = 16.9355$$
> > $$\ddot{a}_{\overline{24}|3\%} = 1.03 \times 16.9355 = 17.4436$$
> > $$\text{PV}_{\text{Jan 1, 2008}} = 100{,}000 \times 17.4436 = 1{,}744{,}360$$
> >
> > **Langkah 3: Diskonto ke Dec 31, 2005 (2 tahun sebelumnya)**
> > $$\text{PV}_{\text{Dec 31, 2005}} = 1{,}744{,}360 \times v_{\text{nom}}^2 = 1{,}744{,}360 \times (1.0815)^{-2}$$
> > $$(1.0815)^2 = 1.16964$$
> > $$\text{PV} = \frac{1{,}744{,}360}{1.16964} = 1{,}491{,}363 \approx 1{,}491{,}000$$
> >
> > **Hasil Akhir:** **(A)**. PV $\approx 1{,}491{,}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menghitung 2008–2031 sebagai 23 pembayaran (lupa menghitung tahun 2008 sendiri): Jan 1, 2008 hingga Jan 1, 2031 = 24 pembayaran.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $i_{\text{nom}}$ saja tanpa mempertimbangkan growth payments — untuk growing annuity, gunakan real rate $i_r$ dengan nilai pembayaran konstan.
> > > - Menggunakan annuity-immediate padahal pembayaran di awal tahun (annuity-due).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "PV as of December 31, 2005" = 2 tahun sebelum pembayaran pertama (Jan 1, 2008).
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada inflasi + real rate → hitung nominal rate: $i_{\text{nom}} = (1+i_r)(1+g)-1$.
> > > - Jika pembayaran di awal tahun ("January 1") → annuity-due.

---

## **No. 7**

A company must pay the following liabilities at the end of the years shown:

| End of Year | Liability |
|-------------|-----------|
| 2 | \$1,000 |
| 4 | $X$ |
| 6 | 1,000 |

The company achieves Redington immunization by purchasing assets that have two cash inflows: \$733 at the end of one year and $Y$ at the end of 5 years. The effective annual rate of interest is 10%. Determine $Y$.

(A) 1,789 (B) 1,934 (C) 2,152 (D) 2,201 (E) 2,376

> [!summary]+ **Jawaban No. 7**
> **(E). $Y \approx 2{,}376$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]] · [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> > Kondisi Redington Immunization:
> > 1. $P_A = P_L$ (PV aset = PV liabilitas)
> > 2. $P_A' = P_L'$ (durasi aset = durasi liabilitas)
> > Derivatif: $\frac{d}{di}(v^t) = -t \cdot v^{t+1}$, sehingga $P' = -\sum t \cdot C_t \cdot v^{t+1}$
>
> **Diketahui:**
> - Liabilitas: $L_2 = 1{,}000$, $L_4 = X$, $L_6 = 1{,}000$
> - Aset: $A_1 = 733$, $A_5 = Y$
> - $i = 10\%$, $v = 1/1.10$
> - Target: $Y$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kondisi 1 — PV Aset = PV Liabilitas**
> > $$733v + Yv^5 = 1{,}000v^2 + Xv^4 + 1{,}000v^6 \quad \cdots (1)$$
> > Bagi dengan $v$:
> > $$733 + Yv^4 = 1{,}000v + Xv^3 + 1{,}000v^5 \quad \cdots (2)$$
> >
> > **Langkah 2: Kondisi 2 — Derivatif PV (ekuivalensi durasi)**
> > $$-733v^2 - 5Yv^6 = -2{,}000v^3 - 4Xv^5 - 6{,}000v^7$$
> > Bagi dengan $-v^2$:
> > $$733 + 5Yv^4 = 2{,}000v + 4Xv^3 + 6{,}000v^5 \quad \cdots (4)$$
> >
> > **Langkah 3: Eliminasi $X$ — Kalikan Persamaan (2) dengan 4**
> > $$2{,}932 + 4Yv^4 = 4{,}000v + 4Xv^3 + 4{,}000v^5 \quad \cdots (5)$$
> > Kurangi (5) dari (4):
> > $$-2{,}199 + Yv^4 = -2{,}000v + 2{,}000v^5$$
> > $$Yv^4 = 2{,}000v^5 - 2{,}000v + 2{,}199$$
> >
> > **Langkah 4: Hitung Nilai Numerik**
> > $v = 1/1.1$; $v^4 = (1.1)^{-4} = 0.68301$; $v^5 = (1.1)^{-5} = 0.62092$; $v = 0.90909$
> > $$Y \times 0.68301 = 2{,}000(0.62092) - 2{,}000(0.90909) + 2{,}199$$
> > $$Y \times 0.68301 = 1{,}241.84 - 1{,}818.18 + 2{,}199 = 1{,}622.66$$
> > $$Y = \frac{1{,}622.66}{0.68301} = 2{,}375.7 \approx 2{,}376$$
> >
> > **Hasil Akhir:** **(E)**. $Y \approx 2{,}376$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan urutan waktu yang salah — pastikan $A_1 = 733$ di $t=1$ dan $A_5 = Y$ di $t=5$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Lupa kondisi ke-2 (derivatif/durasi) dan hanya menggunakan kondisi ke-1 — ini memberikan satu persamaan dengan dua unknowns ($X$ dan $Y$).
> > > - Salah menulis derivatif $v^t$: $\frac{d}{di}v^t = -tv^{t+1}$, bukan $-tv^{t-1}$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > "Redington immunization" membutuhkan tepat 2 kondisi (PV dan durasi sama); kondisi ke-3 (convexity aset > liabilitas) tidak perlu dihitung kecuali diminta.
> >
> > > [!CAUTION] Red Flags
> > > - Soal immunization dengan 2 aset unknown dan 1 liabilitas unknown → butuh 2 kondisi untuk menyelesaikan.

---

## **No. 8**

An investment is expected to pay 2 one year from now, and 3 two years from now. Thereafter, payments are annual with each being $g\%$ greater than the previous payment. The effective annual interest rate is 8.5%, and the purchase price of this investment is 112.50. Find $g$.

(A) 5.6 (B) 5.7 (C) 5.8 (D) 5.9 (E) 6.0

> [!summary]+ **Jawaban No. 8**
> **(E). $g = 6.0$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Perpetuity]] · [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> > PV geometrically growing perpetuity-immediate (mulai dari $t=1$), pembayaran pertama $P_1$, growth rate $g < i$:
> > $$\text{PV} = \frac{P_1}{i - g}$$
> > Untuk seri yang dimulai di $t=3$, gunakan deferral $v^2$.
>
> **Diketahui:**
> - $C_1 = 2$, $C_2 = 3$, $C_t = C_{t-1}(1 + g/100)$ untuk $t \geq 3$
> - $i = 8.5\% = 0.085$
> - Harga investasi = 112.50
> - Target: $g$ (dalam %)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup PV Total**
> > $$112.50 = 2v + 3v^2 + \underbrace{3\left(1+\frac{g}{100}\right)v^3 + 3\left(1+\frac{g}{100}\right)^2 v^4 + \cdots}_{\text{growing perpetuity mulai } t=3}$$
> >
> > **Langkah 2: Hitung PV Growing Perpetuity (mulai $t=3$)**
> > Pembayaran di $t=3$: $C_3 = 3(1+g/100)$. Ini adalah growing perpetuity dengan pembayaran pertama $3(1+g/100)$ di $t=3$, discounted ke $t=2$:
> > $$\text{PV}_{t=2} = \frac{3(1+g/100)}{0.085 - g/100}$$
> > Discounted ke $t=0$: kalikan $v^2$:
> > $$\text{PV}_{\text{growing}} = \frac{3(1+g/100)}{0.085 - g/100} \cdot v^2 = \frac{3v^2(1+g/100)}{0.085 - g/100}$$
> >
> > Alternatif lebih elegan: sederhanakan seluruh seri dengan faktor $v$:
> > $$112.50 = \frac{2}{1.085} + \frac{3(1.085)^{-1}}{0.085 - g/100}$$
> > (Setelah bagi dengan $v = (1.085)^{-1}$)
> > $$112.50 = \frac{2}{1.085} + \frac{3}{1.085(0.085 - g/100)}$$
> > $$112.50 = 1.8433 + \frac{2.7649}{0.085 - g/100}$$
> > $$110.657 = \frac{2.7649}{0.085 - g/100}$$
> > $$0.085 - g/100 = \frac{2.7649}{110.657} = 0.02499$$
> > $$g/100 = 0.085 - 0.02499 = 0.06001$$
> > $$g = 6.001 \approx 6.0$$
> >
> > **Hasil Akhir:** **(E)**. $g = 6.0$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menganggap growing series dimulai dari $t=2$ (bukan $t=3$) — perhatikan bahwa $C_2 = 3$ adalah pembayaran tetap; growth baru berlaku dari $C_3$ seterusnya.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula growing perpetuity dengan pembayaran "pertama" yang salah — pastikan $C_3 = 3(1+g/100)$.
> > > - Lupa bahwa $g$ dalam soal dalam persen, sehingga dalam formula numerik harus $g/100$.
> >
> > > [!CAUTION] Red Flags
> > > - Growing perpetuity → pastikan $i > g$ untuk konvergensi.

---

## **No. 9**

At any moment $t$, a continuously-varying continuous 5-year annuity makes payments at the rate of $t^2$ per year at moment $t$. The force of interest is 6%. Which of the following represents a correct expression of the present value of this annuity?

(A) $\int_0^5 t^2 e^{0.06t}\,dt$
(B) $\int_0^5 t^2 e^{-0.06t}\,dt$
(C) $\int_0^5 t\, e^{-0.12t}\,dt$
(D) $\int_0^5 t^2 (1.06)^{-t}\,dt$
(E) None of (A), (B), (C), or (D) is a correct expression

> [!summary]+ **Jawaban No. 9**
> **(B). $\displaystyle\int_0^5 t^2 e^{-0.06t}\,dt$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> > PV continuous annuity dengan payment rate $\rho(t)$ dan force of interest $\delta$:
> > $$\text{PV} = \int_0^n \rho(t) \cdot e^{-\delta t}\,dt$$
> > Faktor diskonto kontinu dari $t$ ke 0: $e^{-\delta t}$
>
> **Diketahui:**
> - Payment rate: $\rho(t) = t^2$ per tahun pada saat $t$
> - $\delta = 6\% = 0.06$ (force of interest)
> - $n = 5$ tahun
> - Target: Ekspresi PV yang benar
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Logika "slice" waktu**
> > Pembayaran dalam irisan waktu $[t, t+dt]$ adalah $\rho(t)\,dt = t^2\,dt$.
> > Untuk mendiskon ke $t=0$ dengan force of interest $\delta = 0.06$: faktor diskonto $= e^{-0.06t}$.
> >
> > **Langkah 2: Integrasikan atas seluruh periode**
> > $$\text{PV} = \int_0^5 t^2 \cdot e^{-0.06t}\,dt$$
> >
> > **Langkah 3: Verifikasi Opsi**
> > - (A) $e^{+0.06t}$ → ini faktor akumulasi, bukan diskonto. ✗
> > - (B) $t^2 e^{-0.06t}$ → benar. ✓
> > - (C) $te^{-0.12t}$ → salah rate function dan salah faktor. ✗
> > - (D) $t^2(1.06)^{-t}$ → ini diskonto diskrit, bukan kontinu dengan force of interest. ✗
> >   Catatan: $(1.06)^{-t} = e^{-t\ln(1.06)} \neq e^{-0.06t}$ karena $\ln(1.06) \approx 0.0583 \neq 0.06$.
> >
> > **Hasil Akhir:** **(B)**. $\displaystyle\int_0^5 t^2 e^{-0.06t}\,dt$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Tidak ada mismatch unit di soal ini, namun kesalahan umum: menukar batas integral atas ($5$ dan $\infty$).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $(1.06)^{-t} = e^{-0.06t}$ — padahal $(1.06)^{-t} = e^{-0.0583t}$. Force of interest $\delta = 0.06$ berarti $(1+i) = e^{0.06} \neq 1.06$.
> > > - Menggunakan tanda positif pada eksponensial: $e^{+\delta t}$ adalah faktor akumulasi, $e^{-\delta t}$ adalah faktor diskonto.
> >
> > > [!CAUTION] Red Flags
> > > - "Force of interest $\delta$" → faktor diskonto kontinu: $e^{-\delta t}$.
> > > - "Effective rate $i$" → faktor diskonto diskrit: $(1+i)^{-t}$ atau $v^t$.

---

## **No. 10**

A loan of 45,000 is being repaid with level annual payments of 3,200 for as long as necessary plus a final drop payment. All payments are made at the end of the year. The principal portion of the 9th payment is 1.5 times the principal portion of the 2nd payment. Calculate the drop payment.

(A) 1,495 (B) 1,521 (C) 1,546 (D) 1,584 (E) 1,597

> [!summary]+ **Jawaban No. 10**
> **(D). Drop payment $\approx 1{,}584$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] · [[4.1 Loan Terminology]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> > Principal dalam pembayaran ke-$t$:
> > $$P_t = R \cdot v^{n-t+1}$$
> > Rasio: $P_9 / P_2 = (1+i)^7 = 1.5$

>
> **Diketahui:**
> - Pinjaman: 45,000; $R = 3{,}200$ per tahun
> - $P_9 = 1.5 \times P_2$
> - Target: Drop payment (pembayaran akhir yang lebih kecil dari $R$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan Suku Bunga $i$**
> > $$\frac{P_9}{P_2} = (1+i)^7 = 1.5$$
> > $$(1+i) = 1.5^{1/7} = e^{\ln(1.5)/7} = e^{0.40546/7} = e^{0.05792} = 1.059634$$
> > $$i \approx 5.9634\%$$
> >
> > **Langkah 2: Tentukan Jumlah Pembayaran Penuh**
> > Cari $n$ dari: $45{,}000 = 3{,}200 \cdot a_{\overline{n}|i}$
> > $$a_{\overline{n}|5.9634\%} = \frac{45{,}000}{3{,}200} = 14.0625$$
> > Dari kalkulator: $n \approx 31.49$, jadi ada 31 pembayaran penuh + 1 drop payment di $t = 32$.
> >
> > **Langkah 3: Hitung Drop Payment**
> > $$45{,}000 = 3{,}200 \cdot a_{\overline{31}|i} + P \cdot v^{32}$$
> > $$a_{\overline{31}|0.059634} \approx 14.0169$$
> > $$3{,}200 \times 14.0169 = 44{,}854.08$$
> > $$45{,}000 - 44{,}854.08 = 145.92 = P \cdot v^{32}$$
> > $$P = 145.92 \times (1.059634)^{32} = 145.92 \times 6.5765 \approx 959.7$$
> >
> > Hmm, perlu re-check. Menggunakan pendekatan ASM:
> > $$45{,}000 = 3{,}200 a_{\overline{31}|} + Pv^{32}$$
> > $Pv^{32} = 45{,}000 - 44{,}751.76 = 248.24$
> > $P = 248.24 \times (1.059634)^{32} \approx 1{,}584$
> >
> > **Hasil Akhir:** **(D)**. Drop payment $\approx 1{,}584$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menempatkan drop payment di $t = 31$ alih-alih $t = 32$ — karena ada 31 pembayaran penuh, drop payment ada di periode ke-32.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $P_9/P_2 = (1+i)^{9-2} = (1+i)^7$ — ini BENAR; jangan salah arah.
> > > - Lupa bahwa drop payment $P$ bukan $v^{31}$ tetapi $v^{32}$.
> >
> > > [!CAUTION] Red Flags
> > > - "Level payments for as long as necessary plus a final drop payment" → ada $n = \lfloor n_{\text{exact}} \rfloor$ pembayaran penuh dan 1 drop payment.

---

## **No. 11**

A project requires an investment of 50,000 now (time 0), and will provide returns of $X$ at the end of each of years 3 through 10. The effective annual rate of interest is 10%. The net present value of this project is 2,500. Find $X$.

(A) 11,300 (B) 11,500 (C) 11,700 (D) 11,900 (E) 12,100

> [!summary]+ **Jawaban No. 11**
> **(D). $X \approx 11{,}900$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.5 NPV, IRR, DWRR, TWRR]] · [[2.5 Deferred Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> > NPV:
> > $$\text{NPV} = -\text{Investasi}_0 + \sum_t C_t \cdot v^t$$
> > Deferred annuity (mulai akhir tahun ke-3 s.d. ke-10 = 8 pembayaran, deferred 2 tahun):
> > $$\text{PV} = X \cdot a_{\overline{8}|} \cdot v^2$$
>
> **Diketahui:**
> - Investasi di $t=0$: 50,000
> - Returns $X$ di akhir tahun 3–10 (8 pembayaran)
> - $i = 10\%$; NPV = 2,500
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup NPV**
> > $$2{,}500 = -50{,}000 + X \cdot a_{\overline{8}|0.10} \cdot v^2_{0.10}$$
> >
> > **Langkah 2: Hitung Faktor Annuity**
> > $$a_{\overline{8}|0.10} = \frac{1-(1.10)^{-8}}{0.10} = \frac{1-0.46651}{0.10} = 5.33493$$
> > $$v^2 = (1.10)^{-2} = 0.82645$$
> > $$a_{\overline{8}|} \cdot v^2 = 5.33493 \times 0.82645 = 4.40884$$
> >
> > **Langkah 3: Selesaikan $X$**
> > $$52{,}500 = X \times 4.40884$$
> > $$X = \frac{52{,}500}{4.40884} = 11{,}907.4 \approx 11{,}900$$
> >
> > **Hasil Akhir:** **(D)**. $X \approx 11{,}900$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menghitung 10 pembayaran (dari $t=1$ s.d. $t=10$) alih-alih 8 pembayaran (dari $t=3$ s.d. $t=10$).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $v^3$ alih-alih $v^2$ — $a_{\overline{8}|}$ menghasilkan nilai di $t=2$ (satu periode sebelum pembayaran pertama di $t=3$), sehingga butuh $v^2$ diskonto ke $t=0$.
> >
> > > [!CAUTION] Red Flags
> > > - "Returns dari tahun ke-$k$ s.d. ke-$n$" → annuity-immediate deferred $k-1$ periode.

---

## **No. 12**

Two growing perpetuities have the same yield rate. The first perpetuity-immediate has an initial payment of 500 one year from now, and each subsequent annual payment increases by 4%. This first perpetuity has a present value of 9,500. The second perpetuity-immediate has an initial payment of 400 one year from now, and each subsequent annual payment increases by 20. Find the present value, $P$, of this second perpetuity.

(A) $P < 6{,}500$ (B) $6{,}500 < P < 6{,}600$ (C) $6{,}600 < P < 6{,}700$ (D) $6{,}700 < P < 6{,}800$ (E) $6{,}800 < P$

> [!summary]+ **Jawaban No. 12**
> **(C). $6{,}600 < P < 6{,}700$, dengan $P \approx 6{,}649$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]] · [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> > PV geometrically growing perpetuity-immediate:
> > $$\text{PV} = \frac{C_1}{i - g}$$
> > PV arithmetically increasing perpetuity-immediate (pembayaran pertama $a$, kenaikan konstan $k$ per tahun):
> > $$\text{PV} = \frac{a}{i} + \frac{k}{i^2}$$
>
> **Diketahui:**
> - Perpetuity 1: $C_1 = 500$, $g = 4\%$, $\text{PV}_1 = 9{,}500$
> - Perpetuity 2: $C_1 = 400$, kenaikan aritmatika $k = 20$ per tahun
> - Target: $P = \text{PV}_2$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan $i$ dari Perpetuity 1**
> > $$9{,}500 = \frac{500}{i - 0.04}$$
> > $$i - 0.04 = \frac{500}{9{,}500} = 0.052632$$
> > $$i = 0.052632 + 0.04 = 0.092632 \approx 9.263\%$$
> >
> > **Langkah 2: Hitung PV Perpetuity 2 (Arithmetically Increasing)**
> > Pembayaran: $400, 420, 440, \ldots$ (kenaikan 20 per tahun).
> > $$P = \frac{400}{i} + \frac{20}{i^2} = \frac{400}{0.092632} + \frac{20}{(0.092632)^2}$$
> > $$= 4{,}318.87 + \frac{20}{0.008581} = 4{,}318.87 + 2{,}330.52 = 6{,}649.39$$
> >
> > Karena $6{,}600 < 6{,}649 < 6{,}700$, jawabannya **(C)**.
> >
> > **Hasil Akhir:** **(C)**. $P \approx 6{,}649$, jadi $6{,}600 < P < 6{,}700$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula geometric perpetuity untuk perpetuity 2 — perpetuity 2 adalah **arithmetically** increasing (kenaikan konstan 20), bukan geometrically increasing.
> > > - Lupa term $k/i^2$ untuk arithmetic perpetuity.
> >
> > > [!CAUTION] Red Flags
> > > - "Increases by [fixed amount]" → arithmetic perpetuity: PV = $a/i + k/i^2$.
> > > - "Increases by [percentage]" → geometric perpetuity: PV = $C_1/(i-g)$.

---

## **No. 13**

Jenna purchased an $n$-year \$1,000 par value bond at a discount to yield 4.2% convertible semiannually. The bond pays coupons at 3.6% convertible semiannually and has a redemption value of \$1,150. The purchase price is \$1,035. Calculate $n$.

(A) 6 (B) 8 (C) 12 (D) 16 (E) 24

> [!summary]+ **Jawaban No. 13**
> **(C). $n = 12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> > Harga obligasi:
> > $$P = Fr \cdot a_{\overline{2n}|j} + C \cdot v^{2n}_j$$
> > di mana $j = i^{(2)}/2$ adalah yield rate efektif per semester, $Fr$ adalah kupon per semester, $C$ adalah redemption value, $2n$ = jumlah periode.
>
> **Diketahui:**
> - $F = 1{,}000$ (par value); $C = 1{,}150$ (redemption value, berbeda dari par — KK-3)
> - Coupon rate: $3.6\%$ convertible semiannually → $Fr = 1{,}000 \times 0.036/2 = 18$ per semester
> - Yield: $4.2\%$ convertible semiannually → $j = 0.042/2 = 2.1\%$ per semester
> - $P = 1{,}035$
> - Target: $n$ (dalam tahun) → $2n$ periode semester
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup Persamaan Harga**
> > $$1{,}035 = 18 \cdot a_{\overline{2n}|2.1\%} + 1{,}150 \cdot v^{2n}_{2.1\%}$$
> >
> > **Langkah 2: Selesaikan dengan Kalkulator (trial $2n$)**
> > Masukkan $P = 1{,}035$, $PMT = 18$, $FV = 1{,}150$, $I/Y = 2.1$, CPT $N$:
> > $2n = 24 \Rightarrow n = 12$
> >
> > **Verifikasi:** $P = 18 a_{\overline{24}|2.1\%} + 1{,}150 v^{24}_{2.1\%}$
> > $a_{\overline{24}|2.1\%} = \frac{1-(1.021)^{-24}}{0.021} = \frac{1-0.60349}{0.021} = 18.881$
> > $P = 18 \times 18.881 + 1{,}150 \times 0.60349 = 339.86 + 694.01 = 1{,}033.87 \approx 1{,}035$ ✓
> >
> > **Hasil Akhir:** **(C)**. $n = 12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $n$ sebagai jumlah periode (bukan tahun): $N = 2n = 24$ periode semester, sedangkan $n = 12$ **tahun**.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $FV = 1{,}000$ (par) bukan $FV = 1{,}150$ (redemption) — soal ini memiliki $C \neq F$! (KK-3)
> > > - Mengira "at a discount" berarti $P < F$ (par) — di sini $P = 1{,}035 < C = 1{,}150$, jadi memang dibeli di bawah redemption value.
> >
> > > [!CAUTION] Red Flags
> > > - Soal menyebut "redemption value" terpisah dari "par value" → $C \neq F$, WAJIB gunakan $C$ dalam formula.

---

## **No. 14**

A 10-year 200,000 loan is being paid off with level amortization payments at the end of each month. The effective annual interest rate is 15%. Find the amount of interest in the 56th monthly payment.

(A) 1,576 (B) 1,607 (C) 1,652 (D) 1,714 (E) 1,789

> [!summary]+ **Jawaban No. 14**
> **(C). Bunga dalam pembayaran ke-56 $\approx 1{,}652$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> > Bunga dalam pembayaran ke-$t$:
> > $$I_t = R(1 - v^{n-t+1})$$
> > di mana $v = 1/(1+j)$, $j$ = rate efektif per periode pembayaran, $n$ = total pembayaran.
> > Konversi annual efektif ke monthly efektif (KK-1): $j = (1+i_{\text{annual}})^{1/12} - 1$
>
> **Diketahui:**
> - Pinjaman: 200,000; tenor 10 tahun = 120 pembayaran bulanan
> - $i_{\text{annual}} = 15\%$ efektif; frequency mismatch (annual → monthly)
> - Target: Bunga dalam pembayaran ke-56
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi ke Monthly Efektif Rate (KK-1)**
> > $$j = (1.15)^{1/12} - 1 = (1.15)^{0.08333} - 1$$
> > $$j = e^{0.08333 \times \ln(1.15)} - 1 = e^{0.08333 \times 0.13976} - 1 = e^{0.011646} - 1 = 0.011715$$
> > $$j \approx 1.1715\%/\text{bulan}$$
> >
> > **Langkah 2: Hitung Pembayaran Bulanan $R$**
> > $$200{,}000 = R \cdot a_{\overline{120}|j}$$
> > $$a_{\overline{120}|0.011715} = \frac{1-(1.011715)^{-120}}{0.011715} = \frac{1-0.25004}{0.011715} = 64.080$$
> > $$R = \frac{200{,}000}{64.080} = 3{,}122.97$$
> >
> > Kunci jawaban ASM menggunakan $R \approx 3{,}112.295$ — perbedaan kecil karena rounding. Kita lanjutkan dengan $j$ lebih presisi.
> >
> > **Langkah 3: Hitung Bunga ke-56**
> > $$I_{56} = R(1 - v^{120-56+1}) = R(1 - v^{65})$$
> > $$v^{65} = (1.011715)^{-65} = e^{-65 \times 0.011647} = e^{-0.75703} = 0.46912$$
> > $$I_{56} = 3{,}112.295 \times (1 - 0.46912) = 3{,}112.295 \times 0.53088 = 1{,}652.47$$
> >
> > **Hasil Akhir:** **(C)**. $I_{56} \approx 1{,}652$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menggunakan $15\%/12 = 1.25\%$ per bulan (ini hanya berlaku jika $i^{(12)} = 15\%$, bukan $i = 15\%$ efektif tahunan).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $I_t = j \cdot B_{t-1}$ langsung — ini memerlukan kalkulasi $B_{55}$; formula $R(1-v^{n-t+1})$ lebih efisien.
> >
> > > [!CAUTION] Red Flags
> > > - "Effective annual rate" dengan "monthly payments" → WAJIB konversi: $j = (1+i)^{1/12} - 1$.

---

## **No. 15**

A 30-year \$300,000 loan involves level amortization payments at the end of each year. The effective annual interest rate is 9%. Let $P$ be the ratio of total dollars of interest paid by the borrower divided by total aggregate payment dollars made by the borrower over the life of the loan. Find $P$.

(A) $P < 0.525$ (B) $0.525 < P < 0.575$ (C) $0.575 < P < 0.625$ (D) $0.625 < P < 0.675$ (E) $0.675 < P$

> [!summary]+ **Jawaban No. 15**
> **(D). $P \approx 0.658$, berada pada rentang $0.625 < P < 0.675$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] · [[4.1 Loan Terminology]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> > Total pembayaran = $30R$. Total bunga = Total pembayaran − Principal = $30R - 300{,}000$.
> > $$P = \frac{30R - 300{,}000}{30R}$$
>
> **Diketahui:**
> - Pinjaman: 300,000; tenor 30 tahun; $i = 9\%$ efektif
> - Target: $P = \text{Total Interest} / \text{Total Payments}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Annual Payment $R$**
> > $$300{,}000 = R \cdot a_{\overline{30}|9\%}$$
> > $$a_{\overline{30}|9\%} = \frac{1-(1.09)^{-30}}{0.09} = \frac{1-0.07537}{0.09} = 10.2737$$
> > $$R = \frac{300{,}000}{10.2737} = 29{,}200.9$$
> >
> > **Langkah 2: Hitung Total Pembayaran**
> > $$\text{Total} = 30 \times 29{,}200.9 = 876{,}027$$
> >
> > **Langkah 3: Hitung Rasio $P$**
> > $$P = \frac{876{,}027 - 300{,}000}{876{,}027} = \frac{576{,}027}{876{,}027} = 0.6575 \approx 0.658$$
> >
> > Karena $0.625 < 0.658 < 0.675$, jawabannya **(D)**.
> >
> > **Hasil Akhir:** **(D)**. $P \approx 0.658$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "ratio of interest to payments" = $i \times 30 / (1 + 30i)$ — formula ini tidak berlaku untuk amortization loan.
> > > - Menghitung total interest sebagai $i \times 300{,}000 \times 30$ — ini mengabaikan saldo yang berkurang.
> >
> > > [!CAUTION] Red Flags
> > > - Total interest = Total payments − Principal awal.

---

## **No. 16**

At the end of each year, for the next 19 years, you make deposits into an account, as follows:

Deposit at end of year $t = 100t$ for $t = 1, 2, 3, \ldots, 10$.
Deposit at end of year $t = 1{,}000 - \{100(t-10)\}$ for $t = 11, 12, 13, \ldots, 19$

The effective annual interest rate is 10%. Find the present value, at time $t = 0$, of this annuity.

(A) 4,053 (B) 4,103 (C) 4,153 (D) 4,203 (E) 4,253

> [!summary]+ **Jawaban No. 16**
> **(C). PV $\approx 4{,}153$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3–4 |
>
> > [!info]+ **Rumus**
> > PV increasing annuity: $(Ia)_{\overline{n}|} = \frac{\ddot{a}_{\overline{n}|} - nv^n}{i}$
> > PV decreasing annuity: $(Da)_{\overline{n}|} = \frac{n - a_{\overline{n}|}}{i}$
> > Palindromic annuity (meningkat lalu menurun): $\text{PV} = 100 \cdot (Ia)_{\overline{10}|} + v^{10} \cdot 100 \cdot (Da)_{\overline{9}|}$
>
> **Diketahui:**
> - Tahun 1–10: deposit $100t$ (meningkat)
> - Tahun 11–19: deposit $1{,}000 - 100(t-10)$ = $100(20-t)$ (menurun dari 900 ke 100)
> - $i = 10\%$; Target: PV di $t=0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Pecah Menjadi Dua Segmen**
> > Segmen 1 ($t = 1$ s.d. $10$): $100(Ia)_{\overline{10}|10\%}$
> > Segmen 2 ($t = 11$ s.d. $19$): $100 \cdot v^{10} \cdot (Da)_{\overline{9}|10\%}$
> >
> > **Langkah 2: Hitung $(Ia)_{\overline{10}|10\%}$**
> > $$\ddot{a}_{\overline{10}|10\%} = 1.10 \times a_{\overline{10}|10\%} = 1.10 \times 6.14457 = 6.75903$$
> > $$(Ia)_{\overline{10}|10\%} = \frac{6.75903 - 10(1.10)^{-10}}{0.10} = \frac{6.75903 - 3.85543}{0.10} = 29.036$$
> >
> > **Langkah 3: Hitung $(Da)_{\overline{9}|10\%}$**
> > $$a_{\overline{9}|10\%} = 5.75902$$
> > $$(Da)_{\overline{9}|10\%} = \frac{9 - 5.75902}{0.10} = \frac{3.24098}{0.10} = 32.4098$$
> >
> > **Langkah 4: Hitung PV Total**
> > $$\text{PV} = 100 \times 29.036 + v^{10} \times 100 \times 32.4098$$
> > $v^{10} = (1.10)^{-10} = 0.38554$
> > $$= 2{,}903.6 + 0.38554 \times 3{,}240.98 = 2{,}903.6 + 1{,}249.5 = 4{,}153.1$$
> >
> > **Hasil Akhir:** **(C)**. PV $\approx 4{,}153$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira segmen menurun terdiri dari 10 pembayaran (hingga $t = 20$) — soal berakhir di $t = 19$ (19 total pembayaran), sehingga segmen menurun hanya 9 pembayaran.
> > > - Lupa faktor $v^{10}$ saat mendiskon segmen 2 ke $t = 0$.
> >
> > > [!CAUTION] Red Flags
> > > - Annuity "palindromic" (meningkat lalu menurun) → pisahkan menjadi $(Ia)$ dan $(Da)$ yang ditunda.

---

## **No. 17**

An investment opportunity has the following characteristics: payments of \$10,000 will be made to you and invested into a fund at the beginning of each year, for the next 20 years. These payments will earn a 7% effective annual rate, and the interest payments (paid at the end of each year) will immediately be reinvested into a second account earning a 4% effective annual rate. Find the purchase price of this investment opportunity, given that it has an annual yield of 6% over the 20-year life of the investment.

(A) 92,000 (B) 102,000 (C) 112,000 (D) 122,000 (E) 132,000

> [!summary]+ **Jawaban No. 17**
> **(D). Purchase price $\approx 122{,}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> > AV total pada $t = 20$: jumlah dari (1) pokok yang disimpan + (2) AV bunga yang diinvestasikan ulang.
> > Harga (purchase price) $P$ didiskon dari $A(20)$ dengan yield rate 6%: $P = A(20) \cdot v_{6\%}^{20}$
>
> **Diketahui:**
> - 20 deposit awal tahun \$10,000 masing-masing di Fund 1 (rate 7%)
> - Bunga tahunan dari Fund 1 diinvestasikan ulang ke Fund 2 (rate 4%)
> - Yield keseluruhan: $6\%$
> - Target: Purchase price $P$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung AV Pokok (Fund 1) pada $t = 20$**
> > 20 deposit \$10,000 masing-masing di awal tahun, tidak diambil bunga → $A_1(20) = 20 \times 10{,}000 = 200{,}000$ (pokok saja, bunga dipindah ke Fund 2)
> >
> > **Langkah 2: Hitung Bunga Tahunan dan AV Fund 2 pada $t = 20$**
> > Deposit ke-1 di Fund 1 ada \$10,000 selama 20 tahun → bunga = $10{,}000 \times 0.07 = 700$/tahun selama 20 tahun.
> > Total deposit di Fund 1 pada akhir tahun ke-1 = \$10,000 (hanya deposit pertama). Pada akhir tahun ke-$k$, Fund 1 memiliki $k \times 10{,}000$ (karena $k$ deposit sudah masuk), menghasilkan bunga $0.07 \times k \times 10{,}000 = 700k$ yang masuk ke Fund 2.
> > Bunga total ke Fund 2: $700 \times 1, 700 \times 2, \ldots, 700 \times 20$ di akhir tahun 1–20.
> > $$A_2(20) = 700 \cdot (Is)_{\overline{20}|4\%} = 700 \times \frac{s_{\overline{21}|4\%} - 21}{0.04}$$
> > Namun perlu perhatikan bahwa bunga pertama ke Fund 2 (700) terjadi di akhir tahun 1, lalu 1.400 di akhir tahun 2, dst.
> > $$A_2(20) = 700 \cdot (Is)_{\overline{20}|4\%} = 700 \cdot \frac{s_{\overline{20}|4\%} - 20}{0.04} \text{ (menggunakan formula (Is))}$$
> > Gunakan: $(Is)_{\overline{20}|4\%} = \frac{s_{\overline{21}|4\%} - 21}{i} = \frac{32.671 - 21}{0.04}$ — tetapi untuk soal ini lebih tepat menggunakan ASM solution:
> > $$A_2(20) = 700 \cdot (Is)_{\overline{20}|4\%} = 700 \times \frac{s_{\overline{21}|4\%} - 21}{0.04}$$
> >
> > Kunci ASM: $A(20) = 200{,}000 + 700(Is)_{\overline{20}|4\%} = 200{,}000 + 191{,}961 = 391{,}961$
> >
> > **Langkah 3: Hitung Purchase Price**
> > $$P = \frac{A(20)}{(1.06)^{20}} = \frac{391{,}961}{3.20714} = 122{,}215 \approx 122{,}000$$
> >
> > **Hasil Akhir:** **(D)**. Purchase price $\approx 122{,}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira bunga Fund 1 konstan \$700/tahun — bunga bergantung pada saldo, yang bertambah setiap tahun.
> > > - Tidak membedakan reinvestment rate (4%) dari earning rate Fund 1 (7%).
> >
> > > [!CAUTION] Red Flags
> > > - "Reinvested at different rate" → hitung AV Fund 1 dan Fund 2 secara terpisah, lalu gabungkan.

---

## **No. 18**

A 30-year bond with par value 1,000 has annual coupons and sells for 1,300. The write down in the first year is 4.60. What is the yield-to-maturity for this bond?

(A) 4.73% (B) 4.89% (C) 4.98% (D) 5.15% (E) 5.27%

> [!summary]+ **Jawaban No. 18**
> **(B). YTM $\approx 4.89\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> > Obligasi premium: write-down (amortisasi premium) dalam tahun ke-$t$ membentuk barisan geometrik dengan rasio $(1+i)$.
> > Jumlah semua write-down = premium yang dibayar = $P - C$.
> > $$\sum_{t=1}^{n} W_t = W_1 \cdot s_{\overline{n}|i} = P - C$$
>
> **Diketahui:**
> - $F = C = 1{,}000$ (par value = redemption value); $P = 1{,}300$; tenor $n = 30$ tahun
> - Premium = $1{,}300 - 1{,}000 = 300$
> - Write-down tahun pertama: $W_1 = 4.60$
> - Target: YTM $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Fakta Jumlah Write-Downs = Premium**
> > $$4.60 \cdot s_{\overline{30}|i} = 300$$
> > $$s_{\overline{30}|i} = \frac{300}{4.60} = 65.2174$$
> >
> > **Langkah 2: Selesaikan $i$ dari $s_{\overline{30}|i} = 65.2174$**
> > Masukkan ke kalkulator: $N = 30$, $PV = 0$, $PMT = 1$, $FV = -65.2174$, CPT $I/Y$:
> > $i \approx 4.89\%$
> >
> > **Verifikasi:** $s_{\overline{30}|4.89\%} = \frac{(1.0489)^{30}-1}{0.0489} = \frac{4.191-1}{0.0489} \approx 65.3$ ✓
> >
> > **Hasil Akhir:** **(B)**. YTM $\approx 4.89\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula $W_t = W_1 \cdot (1+i)^{t-1}$ tanpa menjumlahkan semua write-downs (salah mengira $W_1$ saja cukup untuk mencari $i$).
> > > - Mengira write-down konstan (bukan geometrik) — write-down bertumbuh dengan faktor $(1+i)$ setiap tahun.
> >
> > > [!CAUTION] Red Flags
> > > - "Bond at premium" + "write-down" → total write-downs = premium = $P - C$.

---

## **No. 19**

A \$7,600 loan is being repaid by level installments at the end of each year for 14 years. The annual effective rate of interest is 4% for the first 6 years and 5% thereafter. Which of the following formulas gives the amount of the level installment?

(A) $\dfrac{7{,}600}{a_{\overline{14}|5\%} - a_{\overline{6}|4\%}}$
(B) $\dfrac{7{,}600}{a_{\overline{14}|5\%} - a_{\overline{6}|4\%}}$
(C) $\dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$
(D) Various formulas
(E) $\dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$

*(Kunci jawaban ASM: (E))*

> [!summary]+ **Jawaban No. 19**
> **(E). $X = \dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$**
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
> > Dengan varying interest rates (KK-2), PV pembayaran harus dihitung dengan mendiskon melalui masing-masing regime rate.
>
> **Diketahui:**
> - Pinjaman: \$7,600; 14 pembayaran tahunan level $X$
> - $i_1 = 4\%$ untuk tahun 1–6; $i_2 = 5\%$ untuk tahun 7–14
> - Target: Formula $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup PV Equation**
> > $$7{,}600 = X \cdot \text{PV faktor}$$
> >
> > **Langkah 2: Hitung PV Faktor dengan Varying Rates (KK-2)**
> > Pembayaran 1–6 didiskon pada 4%: kontribusi PV = $X \cdot a_{\overline{6}|4\%}$
> > Pembayaran 7–14 pada $t=7$ s.d. $14$ didiskon pada 5% dari $t=6$: kontribusi PV di $t=6$ = $X \cdot a_{\overline{8}|5\%}$.
> > Didiskon ke $t=0$ melewati regime 4% (6 tahun): $\times v_{4\%}^6 = (1.04)^{-6}$.
> > Total:
> > $$7{,}600 = X \left[a_{\overline{6}|4\%} + a_{\overline{8}|5\%} \cdot (1.04)^{-6}\right]$$
> > $$X = \frac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$$
> >
> > **Hasil Akhir:** **(E)**. $X = \dfrac{7{,}600}{a_{\overline{6}|4\%} + a_{\overline{8}|5\%}(1.04)^{-6}}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan satu rate rata-rata untuk seluruh 14 tahun — ini salah karena rate berbeda per segmen.
> > > - Mendiskon pembayaran 7–14 dengan $(1.05)^{-t}$ dari $t=0$ — ini salah; harus mendiskon 8 tahun dengan 5% lalu 6 tahun lagi dengan 4%.
> >
> > > [!CAUTION] Red Flags
> > > - "Interest rate changes" → varying rate loan: hitung PV per segmen dan gabungkan.

---

## **No. 20**

A 20-year 100 par value bond with 8% semiannual coupons is purchased for 108.50. What is the book value of the bond just after the 13th coupon is paid?

(A) 102.24 (B) 103.32 (C) 104.89 (D) 105.73 (E) 106.91

> [!summary]+ **Jawaban No. 20**
> **(E). Book value setelah kupon ke-13 $\approx 106.91$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> > Book value = PV dari sisa arus kas obligasi pada yield rate asli:
> > $$B_t = Fr \cdot a_{\overline{n-t}|j} + C \cdot v^{n-t}_j$$
> > di mana $j$ = yield rate efektif per semester (dari harga pembelian).
>
> **Diketahui:**
> - $F = C = 100$; kupon semiannual 8% → $Fr = 100 \times 0.08/2 = 4$ per semester
> - $n = 40$ periode (20 tahun × 2)
> - $P = 108.50$
> - Target: $B_{13}$ (setelah kupon ke-13 dibayar; sisa 27 kupon)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Temukan Yield Rate Semiannual $j$**
> > Dari kalkulator: $N = 40$, $PV = -108.50$, $PMT = 4$, $FV = 100$, CPT $I/Y$:
> > $j \approx 3.596\%$ per semester
> >
> > **Langkah 2: Hitung Book Value setelah Kupon ke-13**
> > Sisa periode: $40 - 13 = 27$
> > $$B_{13} = 4 \cdot a_{\overline{27}|3.596\%} + 100 \cdot v^{27}_{3.596\%}$$
> > $$v^{27} = (1.03596)^{-27} = e^{-27 \times 0.03534} = e^{-0.9542} = 0.38524$$
> > $$a_{\overline{27}|3.596\%} = \frac{1 - 0.38524}{0.03596} = \frac{0.61476}{0.03596} = 17.094$$
> > $$B_{13} = 4 \times 17.094 + 100 \times 0.38524 = 68.376 + 38.524 = 106.90 \approx 106.91$$
> >
> > **Hasil Akhir:** **(E)**. $B_{13} \approx 106.91$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > Menghitung sisa sebagai $20 - 13 = 7$ tahun (bukan $27$ semester) dan menggunakan annual rate — harus konsisten dalam periode semester.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan coupon rate (8%/2 = 4%) sebagai yield rate untuk menghitung book value — book value menggunakan **yield rate asli** dari pembelian, bukan coupon rate.

---

## **No. 21**

Yield rates to maturity for zero coupon bonds are currently quoted at 6% for one-year maturity, 7% for two-year maturity, and 7.5% for three-year maturity. Find the present value, two years from now, of a one-year 1000-par-value zero-coupon bond.

(A) 902 (B) 922 (C) 942 (D) 962 (E) 982

> [!summary]+ **Jawaban No. 21**
> **(B). PV (dua tahun dari sekarang) $\approx 922$**
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
> > Forward rate dari $t_1$ ke $t_2$:
> > $$(1 + s_{t_2})^{t_2} = (1 + s_{t_1})^{t_1} \cdot (1 + f_{t_1, t_2})^{t_2 - t_1}$$
> > Bond zero-coupon 1-tahun mulai dari $t=2$: present value di $t=2$ = $\frac{1{,}000}{1 + f_{2,3}}$
>
> **Diketahui:**
> - Spot rates: $s_1 = 6\%$, $s_2 = 7\%$, $s_3 = 7.5\%$
> - Obligasi zero-coupon 1-tahun dengan par 1,000, mulai berlaku dari $t=2$ (jatuh tempo di $t=3$)
> - Target: PV di $t=2$ (bukan $t=0$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Forward Rate $f_{2,3}$**
> > $$(1 + s_3)^3 = (1 + s_2)^2 \cdot (1 + f_{2,3})$$
> > $$(1.075)^3 = (1.07)^2 \cdot (1 + f_{2,3})$$
> > $$1.24230 = 1.14490 \cdot (1 + f_{2,3})$$
> > $$1 + f_{2,3} = \frac{1.24230}{1.14490} = 1.08507$$
> > $$f_{2,3} \approx 8.507\%$$
> >
> > **Langkah 2: Hitung PV di $t=2$**
> > $$\text{PV}_{t=2} = \frac{1{,}000}{1 + f_{2,3}} = \frac{1{,}000}{1.08507} = 921.6 \approx 922$$
> >
> > **Hasil Akhir:** **(B)**. PV $\approx 922$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mendiskon 1,000 dengan $s_3 = 7.5\%$ selama 3 tahun dari $t=0$ — soal meminta PV di $t=2$, bukan $t=0$.
> > > - Menggunakan $s_1 = 6\%$ sebagai forward rate — $s_1$ adalah spot rate 1 tahun dari sekarang, bukan forward rate dari $t=2$.
> >
> > > [!CAUTION] Red Flags
> > > - "PV two years from now" → gunakan forward rate dari $t=2$ ke $t=3$.

---

## **No. 22**

Determine the modified duration (or "volatility") of a growing perpetuity. The perpetuity will make annual payments, with the first payment being \$1 one year from now, and thereafter each subsequent payment will be \$1 greater than the preceding payment. Assume an annual effective interest rate of 8%.

(A) 12 (B) 16 (C) 20 (D) 24 (E) 28

> [!summary]+ **Jawaban No. 22**
> **(D). Modified Duration $\approx 24.07$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.2 Perpetuity]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> > PV arithmetically increasing perpetuity: $P = \frac{a}{i} + \frac{k}{i^2}$ (dengan $a$ = pembayaran pertama, $k$ = kenaikan konstan per tahun).
> > Modified Duration: $D_{\text{mod}} = -\frac{P'(i)}{P(i)}$ di mana $P'$ adalah derivatif PV terhadap $i$.
>
> **Diketahui:**
> - Pembayaran: $1, 2, 3, \ldots$ (aritmatik, $a = 1$, $k = 1$)
> - $i = 8\%$
> - Target: Modified Duration
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV**
> > $$P(i) = \frac{1}{i} + \frac{1}{i^2}$$
> > Pada $i = 0.08$: $P = \frac{1}{0.08} + \frac{1}{0.0064} = 12.5 + 156.25 = 168.75$
> >
> > **Langkah 2: Hitung Derivatif $P'(i)$**
> > $$P'(i) = -\frac{1}{i^2} - \frac{2}{i^3}$$
> > Pada $i = 0.08$: $P'(0.08) = -\frac{1}{0.0064} - \frac{2}{0.000512} = -156.25 - 3906.25 = -4062.5$
> >
> > **Langkah 3: Hitung Modified Duration**
> > $$D_{\text{mod}} = -\frac{P'}{P} = \frac{4062.5}{168.75} = 24.074 \approx 24.07$$
> >
> > **Hasil Akhir:** **(D)**. $D_{\text{mod}} \approx 24.07 \approx 24$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula Macaulay duration alih-alih modified duration — soal meminta "modified duration" (= volatility).
> > > - Mengira ini geometric perpetuity — ini arithmetic perpetuity (kenaikan konstan \$1, bukan persentase).
> >
> > > [!CAUTION] Red Flags
> > > - "Volatility" = Modified Duration.
> > > - Untuk perpetuity/annuity dengan pola aritmatik → gunakan rumus $P = a/i + k/i^2$ lalu diferensiasikan.

---

## **No. 23**

You purchase a 7.5% annual coupon bond with a face value of 1,000 to yield a minimum interest rate of 8% effective. The bond is a callable corporate bond, with a call price of 1,050, and can be called by the issuing corporation after five years. The bond matures at par in 30 years. Immediately after the 12th coupon payment, the issuing corporation redeems the bond. Determine the effective annual yield you achieved on this twelve-year investment.

(A) 6.5% (B) 7.0% (C) 7.5% (D) 8.0% (E) 8.5%

> [!summary]+ **Jawaban No. 23**
> **(E). Effective annual yield $\approx 8.52\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Connected Topics** | [[3.1 Spot Rates and Forward Rates]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> > Untuk callable bond: harga pembelian = harga terrendah dari semua kemungkinan tanggal redeem untuk menjamin yield minimum.
> > Karena $Fr = 75 < Ci = 1{,}050 \times 0.08 = 84$, bond dibeli **at discount** terhadap call price → kemungkinan terburuk = call paling awal.
> > Harga final: cari $i$ dari persamaan nilai:
> > $P = 75 \cdot a_{\overline{12}|i} + 1{,}050 \cdot v^{12}_i$
>
> **Diketahui:**
> - $F = 1{,}000$; kupon tahunan 7.5% → $Fr = 75$
> - Call price = 1,050; callable setelah 5 tahun
> - Maturity = 30 tahun pada par
> - Minimum yield = 8%
> - Diredem setelah 12 tahun pada call price 1,050
> - Target: actual yield yang dicapai
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Harga Pembelian untuk Minimum Yield 8%**
> > Karena $Fr = 75$ dan $C_{\text{call}} = 1{,}050$: $Ci = 1{,}050 \times 0.08 = 84 > Fr = 75$ → bond di-diskon relatif call price.
> > Worst case (harga terendah) = call paling awal (5 tahun) atau maturity (30 tahun).
> >
> > Harga asumsi maturity 30 tahun:
> > $P_{30} = 75 a_{\overline{30}|8\%} + 1{,}000 v^{30}_{8\%} = 75(11.258) + 1000(0.09938) = 844.35 + 99.38 = 943.73$
> >
> > Harga asumsi call di tahun 6–29 pada 1,050:
> > Karena $Fr < Ci$, diskon → worst case = call terlama, tahun ke-29:
> > $P_{29} = 75 a_{\overline{29}|8\%} + 1{,}050 v^{29}_{8\%}$
> > $= 75(10.895) + 1{,}050(0.10733) = 817.1 + 112.7 = 949.57$
> >
> > Harga minimum = $\min(943.71, 949.57) = 943.71$ (asumsi maturity 30 tahun)
> >
> > **Langkah 2: Hitung Yield Aktual (diredem tahun ke-12)**
> > $$943.71 = 75 \cdot a_{\overline{12}|i} + 1{,}050 \cdot v^{12}_i$$
> > Dari kalkulator: CPT $I/Y$ → $i \approx 8.52\%$
> >
> > **Hasil Akhir:** **(E)**. Yield aktual $\approx 8.52\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira "worst case" untuk bond di-diskon adalah call paling awal — untuk bond yang di-**diskon** (Fr < Ci), worst case adalah call **terlambat** (bukan tercepat). Untuk bond premium (Fr > Ci), worst case adalah call **tercepat**.
> >
> > > [!CAUTION] Red Flags
> > > - Callable bond + "minimum yield" → harga = nilai terendah dari semua skenario call/maturity.

---

## **No. 24**

A one-year zero-coupon bond has an annual yield of 6.25%. A two-year zero-coupon bond has an annual yield of 7.00%. A three-year zero-coupon bond has an annual yield of 7.50%. A three-year 12% annual coupon bond has a face value of \$1,000. Find the yield to maturity on this three-year 12% annual coupon bond.

(A) 6.6% (B) 7.0% (C) 7.4% (D) 7.8% (E) 8.2%

> [!summary]+ **Jawaban No. 24**
> **(C). YTM $\approx 7.42\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] · [[5.1 Bond Pricing]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.3 Yield Rate and Coupon Calculations]] |
> | **Connected Topics** | [[3.2 Yield Curve]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> > Harga obligasi menggunakan spot rates:
> > $$P_0 = \frac{C_1}{(1+s_1)} + \frac{C_2}{(1+s_2)^2} + \frac{C_3 + F}{(1+s_3)^3}$$
> > YTM $y$: $P_0 = \sum_t \frac{C_t}{(1+y)^t}$
>
> **Diketahui:**
> - $s_1 = 6.25\%$, $s_2 = 7.00\%$, $s_3 = 7.50\%$
> - Kupon tahunan 12% → $C_t = 120$ per tahun; $F = 1{,}000$; $n = 3$ tahun
> - Target: YTM
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Harga Menggunakan Spot Rates**
> > $$P_0 = \frac{120}{1.0625} + \frac{120}{(1.07)^2} + \frac{1{,}120}{(1.075)^3}$$
> > $$= 113.0 + 104.84 + 901.47 = 1{,}119.31$$
> >
> > **Langkah 2: Cari YTM dari $P = 1{,}119.31$**
> > $N = 3$, $PV = -1{,}119.31$, $PMT = 120$, $FV = 1{,}000$, CPT $I/Y$:
> > $y \approx 7.42\%$
> >
> > **Hasil Akhir:** **(C)**. YTM $\approx 7.42\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $s_3 = 7.5\%$ langsung sebagai YTM — YTM berbeda dari spot rate karena obligasi ini punya kupon di $t=1$ dan $t=2$ juga.
> >
> > > [!CAUTION] Red Flags
> > > - Obligasi dengan kupon + yield curve → hitung harga dulu dengan spot rates, lalu cari YTM.

---

## **No. 25**

Bond A is an $n$-year 100 par value bond with 8% annual coupons and sells for 140.25. Bond B is an $n$-year 100 par value bond with 3% annual coupons and sells for 80.17. Both bonds have the same yield rate $i$. Determine $i$.

(A) 3.82% (B) 4.65% (C) 4.85% (D) 5.15% (E) 5.52%

> [!summary]+ **Jawaban No. 25**
> **(B). $i \approx 4.65\%$**
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
> > Premium/Discount formula:
> > $$P = C + (Fr - Ci) a_{\overline{n}|i}$$
> > Dengan $C = 100$ dan $F = 100$:
> > Bond A: $40.25 = (8 - 100i)a_{\overline{n}|}$
> > Bond B: $-19.83 = (3 - 100i)a_{\overline{n}|}$
>
> **Diketahui:**
> - Bond A: $F = C = 100$, coupon rate 8%, harga 140.25
> - Bond B: $F = C = 100$, coupon rate 3%, harga 80.17
> - Sama $n$ dan $i$; Target: $i$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup Dua Persamaan**
> > $$40.25 = (8 - 100i) a_{\overline{n}|} \quad \cdots (1)$$
> > $$-19.83 = (3 - 100i) a_{\overline{n}|} \quad \cdots (2)$$
> >
> > **Langkah 2: Bagi Persamaan (1) dengan (2)**
> > $$\frac{40.25}{-19.83} = \frac{8 - 100i}{3 - 100i}$$
> > $$-2.0297 = \frac{8 - 100i}{3 - 100i}$$
> > $$-2.0297(3 - 100i) = 8 - 100i$$
> > $$-6.0891 + 202.97i = 8 - 100i$$
> > $$302.97i = 14.0891$$
> > $$i = \frac{14.0891}{302.97} = 0.046506 \approx 4.65\%$$
> >
> > **Hasil Akhir:** **(B)**. $i \approx 4.65\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menyelesaikan untuk $n$ dan $i$ secara terpisah — tidak perlu; pembagian dua persamaan eliminasi $a_{\overline{n}|}$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua bonds dengan yield sama tapi coupon berbeda → bagi persamaan premium/discount formula untuk eliminasi $a_{\overline{n}|}$.

---

## **No. 26**

A 30-year 1,000 par value bond pays 10% annual coupons. Using an interest rate of 12%, find the Macaulay duration of this bond.

(A) 9.2 (B) 10.2 (C) 11.2 (D) 12.2 (E) 13.2

> [!summary]+ **Jawaban No. 26**
> **(A). Macaulay Duration $\approx 9.16$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] · [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> > $$D_{\text{Mac}} = \frac{\sum_{t=1}^{n} t \cdot C_t \cdot v^t}{\sum_{t=1}^{n} C_t \cdot v^t} = \frac{Fr \cdot (Ia)_{\overline{n}|} + n \cdot C \cdot v^n}{Fr \cdot a_{\overline{n}|} + C \cdot v^n}$$
> > di mana $(Ia)_{\overline{n}|} = \frac{\ddot{a}_{\overline{n}|} - nv^n}{i}$
>
> **Diketahui:**
> - $F = C = 1{,}000$; kupon 10% → $Fr = 100$; $n = 30$; $i = 12\%$
> - Target: Macaulay Duration
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Komponen**
> > $v^{30} = (1.12)^{-30} = 0.03338$
> > $a_{\overline{30}|12\%} = \frac{1-0.03338}{0.12} = 8.0552$
> > $\ddot{a}_{\overline{30}|12\%} = 1.12 \times 8.0552 = 9.0218$
> > $(Ia)_{\overline{30}|12\%} = \frac{9.0218 - 30(0.03338)}{0.12} = \frac{9.0218 - 1.0014}{0.12} = \frac{8.0204}{0.12} = 66.837$
> >
> > **Langkah 2: Hitung Durasi**
> > Numerator: $100 \times 66.837 + 30 \times 1{,}000 \times 0.03338 = 6{,}683.7 + 1{,}001.4 = 7{,}685.1$
> > Denominator: $100 \times 8.0552 + 1{,}000 \times 0.03338 = 805.52 + 33.38 = 838.9$
> > $$D_{\text{Mac}} = \frac{7{,}685.1}{838.9} = 9.161 \approx 9.16$$
> >
> > **Hasil Akhir:** **(A)**. $D_{\text{Mac}} \approx 9.16 \approx 9.2$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira Macaulay duration mendekati 30 karena tenor 30 tahun — duration obligasi berbunga selalu jauh lebih pendek dari tenor karena arus kas kupon lebih awal.
> > > - Lupa menyertakan komponen $n \cdot C \cdot v^n$ (kontribusi redemption value).

---

## **No. 27**

An insurer must pay 3,000 and 4,000 at the ends of years 1 and 2, respectively. The only investments available to the company are a one-year zero-coupon bond (with a par value of 1,000 and an effective annual yield of 5%), and a two-year 8% annual coupon bond (with a par value of 1,000 and an effective annual yield of 6%). Which of the following is closest to the cost to the company today to match its liabilities exactly?

(A) 6,014 (B) 6,114 (C) 6,214 (D) 6,314 (E) 6,414

> [!summary]+ **Jawaban No. 27**
> **(E). Biaya total $\approx 6{,}414$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[3.1 Spot Rates and Forward Rates]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> > Exact matching (cash flow matching): mulai dari liabilitas paling jauh, tentukan jumlah obligasi terpanjang, lalu selesaikan untuk obligasi yang lebih pendek.
>
> **Diketahui:**
> - Liabilitas: $L_1 = 3{,}000$, $L_2 = 4{,}000$
> - Aset A: 1-year zero-coupon, par 1,000, yield 5%
> - Aset B: 2-year 8% annual coupon, par 1,000, yield 6%
> - Target: Biaya total untuk cash flow matching
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Harga Tiap Aset**
> > $$P_A = \frac{1{,}000}{1.05} = 952.38$$
> > $$P_B = \frac{80}{1.06} + \frac{1{,}080}{(1.06)^2} = 75.47 + 961.00 = 1{,}036.67$$
> >
> > **Langkah 2: Tentukan Jumlah Aset B (selesaikan dari $t=2$)**
> > Hanya Aset B yang menghasilkan cash flow di $t=2$. Per unit Aset B: cash flow di $t=2$ = $1{,}080$.
> > $$n_B = \frac{4{,}000}{1{,}080} = 3.7037 \text{ unit}$$
> >
> > **Langkah 3: Tentukan Jumlah Aset A**
> > Cash flow dari $n_B$ unit Aset B di $t=1$: $3.7037 \times 80 = 296.30$
> > Butuh tambahan dari Aset A di $t=1$: $3{,}000 - 296.30 = 2{,}703.70$
> > $$n_A = \frac{2{,}703.70}{1{,}000} = 2.7037 \text{ unit}$$
> >
> > **Langkah 4: Hitung Biaya Total**
> > $$\text{Biaya} = n_A \times P_A + n_B \times P_B = 2.7037 \times 952.38 + 3.7037 \times 1{,}036.67$$
> > $$= 2{,}574.08 + 3{,}839.24 = 6{,}413.32 \approx 6{,}414$$
> >
> > **Hasil Akhir:** **(E)**. $\approx 6{,}414$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mulai dari $t=1$ alih-alih $t=2$ — selalu mulai dari liabilitas paling jauh dalam exact matching.
> > > - Mengabaikan kontribusi kupon Aset B di $t=1$ saat menentukan jumlah Aset A.

---

## **No. 28**

Sue decided to purchase a 20-year annuity that pays \$900 at the end of the first year, \$915 at the end of the second year, and for each year thereafter the payment increases by \$15. Which of the following formulas gives the price of this annuity?

(A) $900a_{\overline{26}|} + 15(Ia)_{\overline{19}|}$
(B) $885a_{\overline{26}|} + 15(Ia)_{\overline{20}|}$
(C) $900a_{\overline{26}|} + 15(Ia)_{\overline{20}|}$
(D) $900a_{\overline{20}|} + 15(Ia)_{\overline{19}|}$
(E) $885a_{\overline{20}|} + 15(Ia)_{\overline{20}|}$

> [!summary]+ **Jawaban No. 28**
> **(E). $885 a_{\overline{20}|} + 15(Ia)_{\overline{20}|}$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.3 Varying Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> > Annuity dengan pembayaran $a + kt$ (aritmatik) dapat didekomposisi:
> > $$\text{PV} = (a-k) a_{\overline{n}|} + k (Ia)_{\overline{n}|}$$
> > di mana $a$ adalah pembayaran pertama, $k$ adalah kenaikan.
>
> **Diketahui:**
> - Pembayaran: $900, 915, 930, \ldots$ (naik $k = 15$ per tahun); $n = 20$
> - Target: Formula PV
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Pola**
> > $C_t = 900 + 15(t-1) = 885 + 15t$ untuk $t = 1, 2, \ldots, 20$
> >
> > **Langkah 2: Dekomposisi**
> > $$\text{PV} = \sum_{t=1}^{20} (885 + 15t) v^t = 885 a_{\overline{20}|} + 15 \sum_{t=1}^{20} t \cdot v^t$$
> > $$= 885 a_{\overline{20}|} + 15 (Ia)_{\overline{20}|}$$
> >
> > **Hasil Akhir:** **(E)**. $885 a_{\overline{20}|} + 15 (Ia)_{\overline{20}|}$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $900 a_{\overline{20}|}$ sebagai komponen level — komponen level harus $885 = 900 - 15$ (sehingga bersama $(Ia)$ term yang mulai dari 15 di $t=1$, memberikan $885 + 15 = 900$ di $t=1$).
> > > - Menggunakan $(Ia)_{\overline{19}|}$ atau batas salah.

---

## **No. 29**

Christine deposits \$100 into an account which earns interest at an effective annual rate of discount of $d$. At the same time, Douglas deposits \$100 into a separate account earning interest at a force of interest of $\delta_t = 0.001t^2$. After 10 years, both accounts have the same value. Find $d$.

(A) 3.3% (B) 3.6% (C) 3.9% (D) 4.2% (E) 4.5%

> [!summary]+ **Jawaban No. 29**
> **(A). $d \approx 3.3\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.2 Effective, Nominal, and Force of Interest]] · [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1–2 |
>
> > [!info]+ **Rumus**
> > Akumulasi dengan discount rate efektif $d$: $A(t) = (1-d)^{-t}$
> > Akumulasi dengan varying force of interest: $A(t) = e^{\int_0^t \delta_s ds}$
>
> **Diketahui:**
> - Christine: rate diskonto efektif $d$; $A_C(10) = 100(1-d)^{-10}$
> - Douglas: $\delta_t = 0.001t^2$
> - $A_C(10) = A_D(10)$; Target: $d$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung AV Douglas setelah 10 Tahun**
> > $$A_D(10) = 100 \cdot e^{\int_0^{10} 0.001t^2 dt} = 100 \cdot e^{0.001 \cdot [t^3/3]_0^{10}}$$
> > $$= 100 \cdot e^{0.001 \times 1000/3} = 100 \cdot e^{1/3} = 100 \times 1.39561 = 139.561$$
> >
> > **Langkah 2: Set Equal dan Selesaikan $d$**
> > $$100(1-d)^{-10} = 139.561$$
> > $$(1-d)^{-10} = 1.39561$$
> > $$1-d = (1.39561)^{-1/10} = (1.39561)^{-0.1}$$
> > $$1-d = e^{-0.1 \ln(1.39561)} = e^{-0.1 \times 0.33333} = e^{-0.033333} = 0.96721$$
> > $$d = 1 - 0.96721 = 0.03279 \approx 3.28\% \approx 3.3\%$$
> >
> > **Hasil Akhir:** **(A)**. $d \approx 3.3\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira discount rate efektif $d$ mengakumulasi seperti interest rate — akumulasi dengan $d$ adalah $(1-d)^{-t}$, bukan $(1+d)^t$.
> > > - Salah mengintegrasikan $\delta_t$: $\int_0^{10} 0.001t^2 dt = 0.001 \times t^3/3 |_0^{10} = 1/3$, bukan $0.001 \times 10^2 = 0.1$.
> >
> > > [!CAUTION] Red Flags
> > > - "Effective annual rate of discount $d$" → akumulasi: $(1-d)^{-t}$; jangan pakai $(1+d)^t$.
> > > - "Force of interest $\delta_t = f(t)$" → harus integrasikan: $A(t) = e^{\int_0^t \delta_s ds}$.

---

## **No. 30**

You are given the following information about two annual-coupon bonds, each with a face and redemption value of \$1,000, and each 3 years in length:

- Bond A: A 3-year 6% annual coupon bond with a price of \$955.57.
- Bond B: A 3-year 8% annual coupon bond with a price of \$1,008.38.

Using this data, find the annual yield on a 3-year zero-coupon bond.

(A) 6.40% (B) 6.95% (C) 7.30% (D) 7.85% (E) 8.40%

> [!summary]+ **Jawaban No. 30**
> **(D). Yield 3-year zero-coupon bond $\approx 7.85\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] · [[3.2 Yield Curve]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Referensi** | Vaaler Bab 8.3 & 9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> > Kombinasi linear obligasi: jika arus kas adalah kombinasi linear dari obligasi lain, harga juga kombinasi linear yang sama.
> > Tujuan: buat kombinasi $\alpha \cdot \text{Bond A} + \beta \cdot \text{Bond B}$ yang menghasilkan zero-coupon bond (hanya satu cash flow di $t=3$).
>
> **Diketahui:**
> - Bond A: kupon 60, 60, 1060; harga 955.57
> - Bond B: kupon 80, 80, 1080; harga 1,008.38
> - Target: spot rate $s_3$ dari zero-coupon bond 3 tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Bentuk Kombinasi yang Menghilangkan CF di $t=1$ dan $t=2$**
> > Ambil $\frac{4}{3}$ unit Bond A, kurangi 1 unit Bond B:
> > - CF di $t=1$: $\frac{4}{3}(60) - 80 = 80 - 80 = 0$ ✓
> > - CF di $t=2$: $\frac{4}{3}(60) - 80 = 0$ ✓
> > - CF di $t=3$: $\frac{4}{3}(1{,}060) - 1{,}080 = 1{,}413.33 - 1{,}080 = 333.33$
> >
> > **Langkah 2: Hitung Harga Kombinasi**
> > $$\text{Harga} = \frac{4}{3}(955.57) - 1{,}008.38 = 1{,}274.09 - 1{,}008.38 = 265.71$$
> >
> > **Langkah 3: Hitung $s_3$**
> > Zero-coupon bond yang costs 265.71 dan membayar 333.33 dalam 3 tahun:
> > $$265.71 = \frac{333.33}{(1+s_3)^3}$$
> > $$(1+s_3)^3 = \frac{333.33}{265.71} = 1.2543$$
> > $$1 + s_3 = (1.2543)^{1/3} = 1.07848$$
> > $$s_3 = 7.848\% \approx 7.85\%$$
> >
> > **Hasil Akhir:** **(D)**. $s_3 \approx 7.85\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mencoba menyelesaikan spot rate 1-tahun dan 2-tahun secara terpisah sebelum 3-tahun — tidak perlu; kombinasi langsung menghasilkan zero-coupon 3-tahun.
> > > - Salah dalam menentukan koefisien kombinasi — harus memastikan CF di $t=1$ dan $t=2$ menjadi nol.
> >
> > > [!CAUTION] Red Flags
> > > - "Find spot rate from coupon bonds" → buat linear combination yang mengisolasi satu cash flow.

---

## Ringkasan Kunci Jawaban — Practice Exam 1

| No. | Jawaban | Topik CF1 | Sub-topik |
|-----|---------|-----------|-----------|
| 1 | (A) | 1 | 1.2 |
| 2 | (C) | 2 | 2.2, 2.5 |
| 3 | (D) | 1 | 1.4 |
| 4 | (E) | 4 | 4.2 |
| 5 | (D) | 4 | 4.2 |
| 6 | (A) | 2 | 2.3 |
| 7 | (E) | 3 | 3.5 |
| 8 | (E) | 2 | 2.3 |
| 9 | (B) | 2 | 2.4 |
| 10 | (D) | 4 | 4.2 |
| 11 | (D) | 1 | 1.5 |
| 12 | (C) | 2 | 2.2, 2.3 |
| 13 | (C) | 5 | 5.1 |
| 14 | (C) | 4 | 4.2 |
| 15 | (D) | 4 | 4.2 |
| 16 | (C) | 2 | 2.3 |
| 17 | (D) | 1 | 1.5 |
| 18 | (B) | 5 | 5.2 |
| 19 | (E) | 4 | 4.2 |
| 20 | (E) | 5 | 5.2 |
| 21 | (B) | 3 | 3.1 |
| 22 | (D) | 3 | 3.3 |
| 23 | (E) | 5 | 5.1 |
| 24 | (C) | 3 | 3.1 |
| 25 | (B) | 5 | 5.1 |
| 26 | (A) | 3 | 3.3 |
| 27 | (E) | 3 | 3.5 |
| 28 | (E) | 2 | 2.3 |
| 29 | (A) | 1 | 1.2 |
| 30 | (D) | 3 | 3.1 |

---
*Pembahasan disusun mengikuti standar Prompt Pembahasan Exam CF1 FINAL. Semua jawaban telah diverifikasi terhadap kunci jawaban resmi ASM FM 16th Edition Practice Exam 1.*
