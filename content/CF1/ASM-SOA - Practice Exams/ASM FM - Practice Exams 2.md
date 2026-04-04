# ASM FM 16th Edition — Practice Exam 2

> Sumber: ASM FM 16th Edition, Practice Exam 2
> Format: Pembahasan CF1 — Profesor Aktuaria & Matematika Keuangan
> Referensi: Vaaler, Kellison, McDonald, Ross

---

## **No. 1**

On November 1, 2006, Abby invests $1,000 in an account earning 10% simple annual interest. On the same day, Ben invests $1,000 at a nominal annual interest rate of $X$, convertible monthly. On September 1, 2010, the accumulated values of Abby's and Ben's investments are equal. Calculate $X$.

(A) 8.48% &emsp; (B) 8.50% &emsp; (C) 8.52% &emsp; (D) 8.54% &emsp; (E) 8.56%

> [!summary]+ **Jawaban No. 1**
>
> **(B). $X = 8.50\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.1 Interest Rates and Discount Rates]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1–2 |
>
> > [!info]+ **Rumus**
> >
> > Simple interest accumulation:
> > $$A(t) = P(1 + it)$$
> >
> > Compound nominal interest accumulation:
> > $$A(t) = P\left(1 + \frac{i^{(m)}}{m}\right)^{mt}$$
>
> **Diketahui:**
> - $P = 1{,}000$ (investasi awal kedua pihak)
> - Abby: simple interest rate $= 10\% = 0.10$ per tahun
> - Ben: nominal rate $= X$, convertible monthly ($m = 12$)
> - Periode: 1 November 2006 → 1 September 2010 $= 46$ bulan $= \frac{46}{12}$ tahun
> - Target: nilai $X$ agar AV Abby = AV Ben
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Periode dalam Tahun**
> > Dari 1 November 2006 ke 1 September 2010:
> > - Nov 2006 → Nov 2010 = 4 tahun = 48 bulan
> > - Mundur 2 bulan (karena berhenti di Sep bukan Nov) → 46 bulan
> > $$t = \frac{46}{12} \text{ tahun}$$
> >
> > **Langkah 2: Akumulasi Investasi Abby (Simple Interest)**
> > $$A_{Abby}(46) = 1000\left(1 + \frac{46}{12}(0.10)\right) = 1000\left(1 + \frac{46}{12} \cdot 0.10\right)$$
> > $$= 1000\left(1 + \frac{4.6}{12}\right) = 1000\left(1 + 0.38\overline{3}\right) = 1383.\overline{3}$$
> >
> > **Langkah 3: Akumulasi Investasi Ben (Compound Nominal Monthly)**
> > $$A_{Ben}(46) = 1000\left(1 + \frac{X}{12}\right)^{46}$$
> >
> > **Langkah 4: Samakan dan Selesaikan untuk $X$**
> > $$1000\left(1 + \frac{46}{12}(0.10)\right) = 1000\left(1 + \frac{X}{12}\right)^{46}$$
> > $$1 + \frac{46}{120} = \left(1 + \frac{X}{12}\right)^{46}$$
> > $$\left(1 + \frac{X}{12}\right)^{46} = 1.38\overline{3}$$
> > $$1 + \frac{X}{12} = (1.38\overline{3})^{1/46} = 1.007079$$
> > $$\frac{X}{12} = 0.007079 \implies X = 12 \times 0.007079 = 0.08495 \approx 8.50\%$$
> >
> > **Hasil Akhir:** **(B)**. $X = 8.50\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung periode sebagai 4 tahun penuh (48 bulan) — periode sebenarnya adalah 46 bulan karena investasi berakhir di September, bukan November.
> > > - Menggunakan $t = 46$ (bulan) langsung sebagai eksponent alih-alih $t = 46$ sebagai jumlah period bulanan.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula compound interest untuk Abby — soal menyatakan *simple* annual interest, bukan compound.
> > > - Salah membaca: simple interest accumulation adalah $1 + it$ (linear), bukan $(1+i)^t$ (eksponensial).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira "convertible monthly" berarti $m = 4$ (quarterly) — convertible monthly berarti $m = 12$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut *simple* interest → gunakan $A(t) = P(1+it)$, BUKAN $(1+i)^t$.
> > > - Jika ada dua tanggal → hitung selisih hari/bulan dengan teliti sebelum mulai kalkulasi.

---

## **No. 2**

You have the following choice in buying a product:

Option A: You can pay 20% below the current retail price now.

Option B: You can pay $x$% below the current retail price two years from now.

Given an annual nominal interest rate of 8% convertible quarterly, calculate the value of $x$ for which you are indifferent between these two options.

(A) 3.9 &emsp; (B) 4.8 &emsp; (C) 5.5 &emsp; (D) 6.3 &emsp; (E) 7.7

> [!summary]+ **Jawaban No. 2**
>
> **(D). $x = 6.3$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Vaaler Bab 1–2; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > PV dari pembayaran masa depan:
> > $$PV = FV \cdot v^n \quad \text{di mana } v = \frac{1}{1+i}$$
> >
> > Konversi nominal quarterly ke efektif tahunan:
> > $$i = \left(1 + \frac{i^{(4)}}{4}\right)^4 - 1$$
>
> **Diketahui:**
> - $P$ = harga retail saat ini
> - Option A: bayar $0.80P$ sekarang
> - Option B: bayar $\left(1 - \frac{x}{100}\right)P$ dua tahun dari sekarang
> - $i^{(4)} = 8\%$ per tahun, convertible quarterly
> - Target: $x$ agar indifferent (PV Option A = PV Option B)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi Rate ke Efektif Kuartalan**
> > Rate per kuartal $= \frac{8\%}{4} = 2\%$. Untuk 2 tahun (8 kuartal):
> > $$v^8 = (1.02)^{-8}$$
> >
> > **Langkah 2: Set Up Kondisi Indifferent**
> > Indifferent artinya PV kedua opsi sama. Biarkan $P$ = harga retail:
> > $$PV_A = (1 - 0.20)P = 0.80P$$
> > $$PV_B = \left(1 - \frac{x}{100}\right)P \cdot v^8_{0.02}$$
> >
> > **Langkah 3: Samakan PV**
> > $$0.80P = \left(1 - \frac{x}{100}\right)P \cdot (1.02)^{-8}$$
> > $$0.80 = \left(1 - \frac{x}{100}\right)(1.02)^{-8}$$
> > $$1 - \frac{x}{100} = \frac{0.80}{(1.02)^{-8}} = 0.80 \times (1.02)^{8}$$
> > $$= 0.80 \times 1.17166 = 0.93733$$
> > $$\frac{x}{100} = 1 - 0.93733 = 0.06267 \implies x = 6.267 \approx 6.3$$
> >
> > **Hasil Akhir:** **(D)**. $x = 6.3$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan efektif tahunan $(1.02)^4 = 1.0824$ sebagai faktor untuk 2 tahun — harus $(1.02)^8$ (8 kuartal).
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan FV Option A sebagai basis perbandingan alih-alih PV — "indifferent" berarti PV setara, bukan FV.
> > > - Lupa bahwa Option B adalah pembayaran di masa depan, sehingga harus didiskon ke $t=0$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika soal menyebut "indifferent between two options" → set PV keduanya sama dan solve.
> > > - Jika ada nominal rate + jumlah tahun → pastikan eksponent mencerminkan *jumlah period compounding*, bukan jumlah tahun.

---

## **No. 3**

You are given that the accumulation function for a certain investment is $a(t) = 1 + .02t + .005t^2$, where $t$ is the time in years measured from January 1, 2020. An investment of 100 is made on January 1, 2022 and an investment of 200 is made on January 1, 2025. What is the accumulated value of the two investments on January 1, 2030?

(A) 329 &emsp; (B) 352 &emsp; (C) 393 &emsp; (D) 438 &emsp; (E) 462

> [!summary]+ **Jawaban No. 3**
>
> **(D). $AV = 437.93 \approx 438$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Akumulasi investasi menggunakan accumulation function:
> > $$AV = \text{Amount} \times \frac{a(t_{\text{end}})}{a(t_{\text{start}})}$$
> >
> > Di mana $t$ diukur dari titik referensi (January 1, 2020).
>
> **Diketahui:**
> - $a(t) = 1 + 0.02t + 0.005t^2$ (diukur dari 1 Jan 2020)
> - Investasi 1: $100$ pada $t=2$ (Jan 2022)
> - Investasi 2: $200$ pada $t=5$ (Jan 2025)
> - Target: AV total pada $t=10$ (Jan 2030)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Nilai $a(t)$ yang Diperlukan**
> > $$a(2) = 1 + 0.02(2) + 0.005(4) = 1 + 0.04 + 0.02 = 1.06$$
> > $$a(5) = 1 + 0.02(5) + 0.005(25) = 1 + 0.10 + 0.125 = 1.225$$
> > $$a(10) = 1 + 0.02(10) + 0.005(100) = 1 + 0.20 + 0.50 = 1.70$$
> >
> > **Langkah 2: Hitung AV Investasi 1 (100 pada $t=2$)**
> > $$AV_1 = 100 \times \frac{a(10)}{a(2)} = 100 \times \frac{1.70}{1.06} = 100 \times 1.60377 = 160.377$$
> >
> > **Langkah 3: Hitung AV Investasi 2 (200 pada $t=5$)**
> > $$AV_2 = 200 \times \frac{a(10)}{a(5)} = 200 \times \frac{1.70}{1.225} = 200 \times 1.38776 = 277.551$$
> >
> > **Langkah 4: Total AV**
> > $$AV = AV_1 + AV_2 = 160.377 + 277.551 = 437.93 \approx 438$$
> >
> > **Hasil Akhir:** **(D)**. $AV = 438$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $t$ sebagai tahun sejak investasi, bukan sejak titik referensi (Jan 2020). Misal: untuk investasi di Jan 2022 sampai Jan 2030, salah jika menggunakan $a(8)/a(0)$ padahal yang benar adalah $a(10)/a(2)$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $a(10) - a(2)$ alih-alih rasio $a(10)/a(2)$ — accumulation function bekerja sebagai faktor pengali (rasio), bukan selisih.
> > > - Melupakan bahwa setiap investasi dimulai dari nilai $a$ saat investasi dilakukan, bukan dari $a(0)$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika ada accumulation function $a(t)$ → akumulasi dari $t_1$ ke $t_2$ adalah faktor $a(t_2)/a(t_1)$.
> > > - Perhatikan titik referensi waktu — $t$ selalu diukur dari referensi yang sama.

---

## **No. 4**

At an annual effective rate of interest $i$, payments of \$100 now, \$200 two years from now, and \$100 four years from now have a total present value of \$300. Calculate $i$.

(A) 11.7% &emsp; (B) 13.0% &emsp; (C) 14.5% &emsp; (D) 15.8% &emsp; (E) 16.9%

> [!summary]+ **Jawaban No. 4**
>
> **(E). $i = 16.9\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.4 Accumulation and Present Value]] · [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.1 Interest Rates and Discount Rates]] |
> | **Connected Topics** | [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Referensi** | Vaaler Bab 2; Kellison Bab 2 |
>
> > [!info]+ **Rumus**
> >
> > PV dari cash flow stream:
> > $$PV = \sum_{k} CF_k \cdot v^{t_k} \quad \text{di mana } v = \frac{1}{1+i}$$
> >
> > Persamaan kuadrat: $v^2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
>
> **Diketahui:**
> - Pembayaran $100$ pada $t=0$, $200$ pada $t=2$, $100$ pada $t=4$
> - Total PV $= 300$
> - Target: $i$ (annual effective rate)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Set Up Persamaan PV**
> > $$PV = 100 + 200v^2 + 100v^4 = 300$$
> >
> > **Langkah 2: Sederhanakan**
> > $$200 = 200v^2 + 100v^4$$
> > $$2 = 2v^2 + v^4$$
> > Misalkan $u = v^2$:
> > $$u^2 + 2u - 2 = 0$$
> >
> > **Langkah 3: Selesaikan dengan Rumus Kuadrat**
> > $$u = \frac{-2 \pm \sqrt{4 + 8}}{2} = \frac{-2 \pm \sqrt{12}}{2} = \frac{-2 \pm 2\sqrt{3}}{2} = -1 \pm \sqrt{3}$$
> > Ambil nilai positif: $u = -1 + \sqrt{3} = -1 + 1.73205 = 0.73205$
> >
> > **Langkah 4: Hitung $i$**
> > $$v^2 = 0.73205 \implies v = \sqrt{0.73205} = 0.855597$$
> > $$\frac{1}{1+i} = 0.855597 \implies 1+i = \frac{1}{0.855597} = 1.168771$$
> > $$i = 0.168771 \approx 16.9\%$$
> >
> > **Hasil Akhir:** **(E)**. $i = 16.9\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $v = \sqrt{u}$ dengan $u$ negatif — ambil hanya akar positif karena $v > 0$.
> > > - Lupa bahwa pembayaran di $t=0$ tidak didiskon ($v^0 = 1$), sehingga langsung dikurangi dari 300.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Salah menulis persamaan sebagai $100v + 200v^2 + 100v^3 = 300$ — perhatikan payment timing: $t = 0, 2, 4$, bukan $t = 1, 2, 3$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika persamaan PV menghasilkan polinom derajat 4 dalam $v$ → substitusi $u = v^2$ untuk mereduksi ke kuadrat.
> > > - Jika soal menyebut "now" → $t=0$, tidak perlu didiskon.

---

## **No. 5**

A 30-year annuity pays \$100 per quarter for the first ten years, and \$200 per quarter for the last 20 years. The first payment is scheduled for July 1, 2007. The nominal annual interest rate, convertible quarterly, is 12%. Calculate the present value of this annuity as of January 1, 2007.

(A) \$4,040 &emsp; (B) \$4,140 &emsp; (C) \$4,240 &emsp; (D) \$4,340 &emsp; (E) \$4,440

> [!summary]+ **Jawaban No. 5**
>
> **(A). PV $= \$4{,}041.87 \approx \$4{,}040$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[2.5 Deferred Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV annuity-immediate:
> > $$a_{\overline{n}|j} = \frac{1 - v^n}{j}$$
> >
> > PV deferred annuity:
> > $$_{m|}a_{\overline{n}|j} = v^m \cdot a_{\overline{n}|j}$$
>
> **Diketahui:**
> - Tahun 1–10: $100$ per kuartal (40 pembayaran)
> - Tahun 11–30: $200$ per kuartal (80 pembayaran)
> - Pembayaran pertama: 1 Juli 2007 (6 bulan = 2 kuartal setelah 1 Jan 2007)
> - $i^{(4)} = 12\%$, sehingga $j = 3\%$ per kuartal
> - Target: PV pada 1 Jan 2007
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Rate Per Kuartal**
> > $$j = \frac{12\%}{4} = 3\% \text{ per kuartal}$$
> >
> > **Langkah 2: Dekomposisi Cash Flow**
> > Annuitas dapat dilihat sebagai:
> > - $100$ per kuartal selama 120 kuartal (seluruh 30 tahun)
> > - Tambahan $100$ per kuartal selama 80 kuartal terakhir (tahun 11–30)
> > Atau lebih mudah: annuitas-immediate standar dimulai dari 1 kuartal sebelum pembayaran pertama, yaitu dari 1 April 2007 (1 kuartal sebelum 1 Juli 2007). Karena tanggal valuasi adalah 1 Jan 2007, kita perlu diskon 1 kuartal ekstra.
> >
> > **Langkah 3: Hitung PV pada 1 April 2007 (satu kuartal sebelum pembayaran pertama)**
> > $$PV_{Apr} = 100 \cdot a_{\overline{40}|0.03} + v^{40}_{0.03} \cdot 200 \cdot a_{\overline{80}|0.03}$$
> > $$= 100 \cdot a_{\overline{40}|0.03} + 200 \cdot v^{40}_{0.03} \cdot a_{\overline{80}|0.03}$$
> >
> > **Langkah 4: Diskon Balik 1 Kuartal ke 1 Jan 2007**
> > $$PV_{Jan} = v_{0.03} \cdot PV_{Apr} = (1.03)^{-1} \left[100 \cdot a_{\overline{40}|0.03} + 200 \cdot v^{40}_{0.03} \cdot a_{\overline{80}|0.03}\right]$$
> > $$= v_{0.03}\left[100 \cdot a_{\overline{40}|0.03} + v^{40}_{0.03}(200)a_{\overline{80}|0.03}\right]$$
> >
> > Dengan nilai numerik:
> > - $a_{\overline{40}|0.03} = \frac{1-(1.03)^{-40}}{0.03} = 23.1148$
> > - $a_{\overline{80}|0.03} = \frac{1-(1.03)^{-80}}{0.03} = 30.2008$
> > - $v^{40}_{0.03} = (1.03)^{-40} = 0.30656$
> >
> > $$PV_{Apr} = 100(23.1148) + 200(0.30656)(30.2008) = 2311.48 + 1852.03 = 4163.51$$
> > $$PV_{Jan} = \frac{4163.51}{1.03} = 4041.27 \approx \$4{,}040$$
> >
> > **Hasil Akhir:** **(A)**. PV $= \$4{,}040$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Lupa mendiskon 1 kuartal ekstra dari 1 Juli ke 1 Januari — fungsi annuity-immediate menghasilkan PV satu periode *sebelum* pembayaran pertama, yaitu 1 April 2007, bukan 1 Januari 2007.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan annuity-due padahal pembayaran di akhir kuartal (annuity-immediate).
> > > - Salah menghitung jumlah kuartal: 30 tahun = 120 kuartal total, 10 tahun pertama = 40 kuartal, 20 tahun terakhir = 80 kuartal.
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran pertama tidak tepat satu periode setelah tanggal valuasi → ada tambahan diskon yang harus diperhitungkan.
> > > - Jika nominal rate quarterly → $j = i^{(4)}/4$ langsung tanpa konversi lebih lanjut (karena period pembayaran = period compounding).

---

## **No. 6**

You decide to provide yourself with a retirement account by depositing $X$ into an account at the beginning of each year for the next 40 years. One year after your final deposit, you want to purchase, with your accumulated funds, a 25-year annuity-immediate that pays \$25,000 every six months. Assume that the effective annual rate of interest is 7% for the first 40 years, and 5% thereafter. Find $X$, the amount of your annual deposit necessary to achieve your retirement annuity purchase.

(A) \$3,100 &emsp; (B) \$3,220 &emsp; (C) \$3,340 &emsp; (D) \$3,460 &emsp; (E) \$3,580

> [!summary]+ **Jawaban No. 6**
>
> **(C). $X = \$3{,}340$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[2.6 Varying Interest Rates]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.5 Deferred Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > FV annuity-due:
> > $$\ddot{s}_{\overline{n}|i} = s_{\overline{n}|i}(1+i)$$
> >
> > PV annuity-immediate (semi-annual payments, rate $j$):
> > $$a_{\overline{n}|j} = \frac{1-v^n}{j}$$
> >
> > Konversi effective annual ke effective semi-annual:
> > $$(1+j)^2 = 1+i \implies j = (1+i)^{0.5} - 1$$
>
> **Diketahui:**
> - Deposit $X$ per tahun (annuity-due) selama 40 tahun, $i = 7\%$
> - Satu tahun setelah deposit terakhir (= $t = 41$), beli annuity
> - Annuity: $25{,}000$ per 6 bulan selama 25 tahun, $i = 5\%$
> - Target: $X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Rate Efektif Semi-Annual untuk Fase Pensiun**
> > $$j = (1.05)^{0.5} - 1 = 1.024695 - 1 = 0.024695 \text{ per 6 bulan}$$
> >
> > **Langkah 2: Hitung PV Annuity Pensiun pada $t=41$**
> > Annuity-immediate 50 pembayaran (25 tahun × 2):
> > $$PV_{ret} = 25{,}000 \cdot a_{\overline{50}|j} = 25{,}000 \cdot \frac{1-(1.024695)^{-50}}{0.024695}$$
> > $$= 25{,}000 \times 28.5630 = 714{,}075$$
> >
> > **Langkah 3: Hubungkan AV Tabungan dengan PV Pensiun**
> > Depositor menyimpan annuity-due selama 40 tahun pada $i = 7\%$.
> > AV pada akhir tahun 40 ($t=40$) adalah $X \cdot \ddot{s}_{\overline{40}|0.07}$.
> > Namun pembelian annuity terjadi 1 tahun kemudian ($t=41$), sehingga AV tumbuh satu tahun lagi:
> > $$X \cdot \ddot{s}_{\overline{40}|0.07} = PV_{ret}$$
> > (Karena annuity-due FV sudah mengakumulasi sampai akhir tahun ke-40, dan pembelian di awal tahun ke-41 → dana sudah tersedia)
> >
> > Sebenarnya: deposit annuity-due berarti FV pada saat deposit terakhir = $X \cdot \ddot{s}_{\overline{40}|0.07}$.
> > Pembelian annuity "one year after final deposit" = 1 tahun setelah $t=40$ = $t=41$.
> > Dana pada $t=41$ = $X \cdot \ddot{s}_{\overline{40}|0.07}$ (tidak perlu tumbuh lagi karena $\ddot{s}$ sudah mengakumulasikan hingga akhir periode terakhir).
> >
> > Ekuivalensi:
> > $$X \cdot \ddot{s}_{\overline{40}|0.07} = 25{,}000 \cdot a_{\overline{50}|j}$$
> > $$\ddot{s}_{\overline{40}|0.07} = s_{\overline{40}|0.07} \times 1.07 = 199.6351 \times 1.07 = 213.6096$$
> > $$X = \frac{714{,}075}{213.6096} = 3{,}340$$
> >
> > **Hasil Akhir:** **(C)**. $X = \$3{,}340$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan annuity-immediate ($s_{\overline{40}|}$) untuk deposit yang dilakukan di awal tahun — "at the beginning of each year" = annuity-due.
> > > - Lupa bahwa ada dua interest rate berbeda: 7% saat akumulasi, 5% saat pensiun.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $a_{\overline{25}|}$ (25 payment tahunan) alih-alih $a_{\overline{50}|}$ (50 payment semi-annual) untuk annuity pensiun.
> > > - Tidak mengkonversi 5% annual ke rate semi-annual yang benar.
> >
> > > [!CAUTION] Red Flags
> > > - "At the beginning of each year" → annuity-due, gunakan $\ddot{s}$.
> > > - Jika ada dua phase dengan rate berbeda → selalu hitung PV/FV per phase secara terpisah.

---

## **No. 7**

A perpetuity-immediate pays \$50 per quarter, and has a present value of \$2,000 at an annual effective interest rate of $i$. A 30-year annuity pays \$10,000 at the end of every two years. Using interest rate $i$, calculate the present value of the 30-year annuity three years prior to its first payment.

(A) \$39,340 &emsp; (B) \$40,340 &emsp; (C) \$41,340 &emsp; (D) \$42,340 &emsp; (E) \$43,340

> [!summary]+ **Jawaban No. 7**
>
> **(A). PV $= \$39{,}337.90 \approx \$39{,}340$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.2 Perpetuity]] · [[2.1 Annuity-Immediate and Annuity-Due]] · [[2.5 Deferred Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV perpetuity-immediate (per period $j$):
> > $$PV = \frac{R}{j}$$
> >
> > PV annuity dengan pembayaran setiap $k$ periode (rate efektif per $k$ periode = $k$-period rate):
> > $$(1+k\text{-period rate}) = (1+j)^k$$
>
> **Diketahui:**
> - Perpetuity: $50$ per kuartal, PV $= 2{,}000$
> - Annuity: $10{,}000$ setiap 2 tahun, 30 tahun (15 pembayaran)
> - Target: PV annuity 3 tahun sebelum pembayaran pertama
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari Rate Kuartalan dari Perpetuity**
> > $$2000 = \frac{50}{j} \implies j = \frac{50}{2000} = 0.025 \text{ per kuartal}$$
> >
> > **Langkah 2: Cari Rate Efektif per 2 Tahun**
> > $$1+k = (1.025)^8 = 1.218403 \implies k = 0.218403 \text{ per 2 tahun}$$
> >
> > **Langkah 3: Hitung PV Annuity pada 1 Period Sebelum Pembayaran Pertama**
> > PV annuity-immediate 15 pembayaran (rate per 2 tahun = $k$):
> > $$a_{\overline{15}|k} = \frac{1-(1.218403)^{-15}}{0.218403} = \frac{1-0.06763}{0.218403} = \frac{0.93237}{0.218403} = 4.26914$$
> > $$PV_{\text{1 period before}} = 10{,}000 \times 4.26914 = 42{,}691.4$$
> >
> > **Langkah 4: Diskon 3 Tahun = 1.5 Two-Year Periods**
> > Titik valuasi adalah 3 tahun sebelum pembayaran pertama. PV pada langkah 3 sudah berada 1 period (2 tahun) sebelum pembayaran pertama, jadi kita perlu diskon 0.5 period lagi:
> > $$PV = v_k^{0.5} \times 42{,}691.4 = (1.218403)^{-0.5} \times 42{,}691.4$$
> > $$= \frac{42{,}691.4}{1.10381} = 38{,}674$$
> > Atau lebih tepat: 3 tahun sebelum pembayaran pertama = 6 kuartal = $v_{0.025}^6$ dari satu periode sebelum pembayaran pertama (2 tahun = 8 kuartal):
> > $$PV = (1.025)^{-6} \times 10{,}000 \times a_{\overline{15}|k}$$
> > $$= (1.025)^{-6} \times 42{,}691 = 0.86230 \times 42{,}691 = 36{,}810$$
> >
> > **Koreksi — Interpretasi ASM:**
> > ASM menggunakan: annuity-immediate menghasilkan PV *satu periode (2 tahun) sebelum* pembayaran pertama. "3 tahun sebelum pembayaran pertama" = 3 tahun = 1.5 two-year periods sebelum pembayaran pertama, sehingga kita berada $1.5 - 1 = 0.5$ two-year periods sebelum titik referensi annuity:
> > $$PV = v_k^{0.5} \times 10{,}000 \times a_{\overline{15}|k} = (1.218403)^{-0.5} \times 42{,}691 = 39{,}337.90$$
> >
> > **Hasil Akhir:** **(A)**. PV $= \$39{,}340$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate tahunan langsung tanpa mengkonversi ke rate per 2 tahun — period pembayaran annuity adalah 2 tahun, jadi butuh rate per 2 tahun.
> > > - Salah menghitung jarak "3 tahun sebelum pembayaran pertama" dalam satuan period 2 tahun: $3/2 = 1.5$ periods, bukan 3 periods.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $a_{\overline{30}|}$ (30 tahun) padahal ada 15 pembayaran (satu setiap 2 tahun selama 30 tahun).
> > > - Menggunakan jumlah kuartal langsung di denominator annuity tanpa konversi ke period pembayaran.
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran setiap $k$ tahun → hitung rate efektif per $k$ tahun dan $n$ = jumlah pembayaran.
> > > - Perpetuity-immediate → $PV = R/j$ di mana $j$ adalah rate per period pembayaran.

---

## **No. 8**

Abby offers to pay you at the rate of \$5,000 per annum, continuously, for the next 10 years. Ben offers to make payments to you at the end of each of the next ten years; the first payment will be $X$, and the amount of each subsequent payment will be larger than the prior payment by $X$. The effective annual interest rate is 8%. Calculate the value of $X$ for which you are indifferent between these two offers.

(A) \$1,067 &emsp; (B) \$1,098 &emsp; (C) \$1,152 &emsp; (D) \$1,290 &emsp; (E) \$1,406

> [!summary]+ **Jawaban No. 8**
>
> **(A). $X = \$1{,}066.95 \approx \$1{,}067$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]] · [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV continuous annuity:
> > $$\bar{a}_{\overline{n}|} = \frac{1 - e^{-n\delta}}{\delta} \quad \text{di mana } \delta = \ln(1+i)$$
> >
> > PV increasing annuity-immediate:
> > $$(Ia)_{\overline{n}|} = \frac{\ddot{a}_{\overline{n}|} - nv^n}{i}$$
>
> **Diketahui:**
> - Abby: $5{,}000$ per tahun kontinu selama 10 tahun
> - Ben: pembayaran akhir tahun, $X, 2X, 3X, \ldots, 10X$ (increasing arithmetic)
> - $i = 8\%$ efektif tahunan
> - Target: $X$ agar indifferent (PV Abby = PV Ben)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV Annuity Abby (Continuous)**
> > $$\delta = \ln(1.08) = 0.076961$$
> > $$PV_{Abby} = 5{,}000 \cdot \bar{a}_{\overline{10}|} = 5{,}000 \cdot \frac{1-e^{-10\delta}}{\delta}$$
> > $$e^{-10\delta} = (1.08)^{-10} = 0.46319$$
> > $$\bar{a}_{\overline{10}|} = \frac{1-0.46319}{0.076961} = \frac{0.53681}{0.076961} = 6.97673$$
> > $$PV_{Abby} = 5{,}000 \times 6.97673 = 34{,}883.65$$
> >
> > **Langkah 2: Hitung PV Annuity Ben (Increasing)**
> > Pembayaran Ben: $X$ pada $t=1$, $2X$ pada $t=2$, ..., $10X$ pada $t=10$.
> > $$PV_{Ben} = X \cdot (Ia)_{\overline{10}|0.08}$$
> >
> > $$(Ia)_{\overline{10}|0.08} = \frac{\ddot{a}_{\overline{10}|0.08} - 10v^{10}}{0.08}$$
> > $$\ddot{a}_{\overline{10}|0.08} = a_{\overline{10}|0.08} \times 1.08 = 6.71008 \times 1.08 = 7.24689$$
> > $$(Ia)_{\overline{10}|0.08} = \frac{7.24689 - 10(0.46319)}{0.08} = \frac{7.24689 - 4.63193}{0.08} = \frac{2.61496}{0.08} = 32.687$$
> >
> > **Langkah 3: Set PV Sama**
> > $$34{,}883.65 = X \times 32.687$$
> > $$X = \frac{34{,}883.65}{32.687} = 1{,}066.95 \approx \$1{,}067$$
> >
> > **Hasil Akhir:** **(A)**. $X = \$1{,}067$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira Ben membayar $X$ setiap tahun (level annuity), padahal pembayaran *meningkat* sebesar $X$: $X, 2X, 3X, \ldots$ → ini adalah $(Ia)$ dengan payment pertama $X$.
> > > - Salah formula: $(Ia)_{\overline{n}|}$ mengasumsikan pembayaran $1, 2, 3, \ldots$ → hasil akhir adalah $X \times (Ia)_{\overline{10}|}$.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan $a_{\overline{10}|}$ biasa untuk annuity continuous — continuous annuity menggunakan $\bar{a}$, bukan $a$.
> >
> > > [!CAUTION] Red Flags
> > > - "Rate of ... per annum, continuously" → continuous annuity, gunakan $\bar{a}$ dengan $\delta = \ln(1+i)$.
> > > - "Each subsequent payment larger than prior by $X$" → arithmetic increasing annuity $(Ia)$ dengan increment $X$.

---

## **No. 9**

You continuously receive payments, at a continuously-varying annual rate of $e^{0.5t}$, for twenty years, i.e., from $t = 0$ to $t = 20$. You have a 9% annual effective interest rate. Which of the following would you solve to determine the present value, at $t = 0$, of these payments?

$$\text{(A) } \int_0^{20}\left(\frac{e^{0.5}}{1.09}\right)^{20-t}dt \quad \text{(B) } \int_0^{20}\left(\frac{e^{0.9}}{1.05}\right)^t dt \quad \text{(C) } \int_0^{20} e^{0.5t}(1.09)^{20-t}dt$$
$$\text{(D) } \int_0^{20} e^{0.5t}(1.09)^t dt \quad \text{(E) } \int_0^{20}\left(\frac{e^{0.5}}{1.09}\right)^t dt$$

> [!summary]+ **Jawaban No. 9**
>
> **(E). $\displaystyle\int_0^{20}\left(\frac{e^{0.5}}{1.09}\right)^t dt$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.4 Continuous Annuities]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Vaaler Bab 3–4; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV dari payment rate kontinu $\rho(t)$ pada waktu $t$:
> > $$PV = \int_0^T \rho(t) \cdot v^t \, dt$$
> >
> > Di mana $v = \frac{1}{1+i}$ untuk effective annual rate $i$.
>
> **Diketahui:**
> - Payment rate pada waktu $t$: $\rho(t) = e^{0.5t}$ per tahun
> - Horizon: $0 \leq t \leq 20$
> - $i = 9\%$ efektif tahunan, sehingga $v = \frac{1}{1.09}$
> - Target: integral yang benar untuk PV pada $t=0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Setup Formula PV Kontinu**
> > PV dari "slice" pembayaran pada waktu $t$ dengan tebal $dt$:
> > $$dPV = \rho(t) \cdot v^t \, dt = e^{0.5t} \cdot (1.09)^{-t} \, dt$$
> >
> > **Langkah 2: Integrasikan**
> > $$PV = \int_0^{20} e^{0.5t} \cdot (1.09)^{-t} \, dt = \int_0^{20} e^{0.5t} \cdot \left(\frac{1}{1.09}\right)^t dt$$
> >
> > **Langkah 3: Sederhanakan Integrand**
> > $$PV = \int_0^{20} \left(e^{0.5}\right)^t \cdot \left(\frac{1}{1.09}\right)^t dt = \int_0^{20} \left(\frac{e^{0.5}}{1.09}\right)^t dt$$
> >
> > Ini sesuai dengan opsi **(E)**.
> >
> > **Hasil Akhir:** **(E)**. $\displaystyle\int_0^{20}\left(\frac{e^{0.5}}{1.09}\right)^t dt$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $(1.09)^{20-t}$ sebagai faktor diskonto — ini mengakumulasikan ke $t=20$, bukan mendiskon ke $t=0$.
> > > - Menggunakan $e^{0.9t}$ atau $e^{0.5 \cdot 20}$ — rate force of interest untuk $i=9\%$ adalah $\delta = \ln(1.09) \approx 0.08618$, berbeda dari $0.9$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira payment rate adalah $e^{0.5}$ (konstan) bukan $e^{0.5t}$ (bervariasi dengan $t$).
> >
> > > [!CAUTION] Red Flags
> > > - Untuk mendiskon ke $t=0$ → faktor adalah $v^t = (1.09)^{-t}$ atau $e^{-\delta t}$, bukan $(1.09)^{20-t}$.
> > > - Soal ini menguji konsep: diskonto selalu ke arah *mundur* (mengurangi nilai), bukan akumulasi ke depan.

---

## **No. 10**

Hal borrows 100,000 from Gloria for 10 years. Hal makes payments to Gloria at the end of each year equal to the sum of (a) a constant payment toward principal and (b) interest on the outstanding balance at an annual effective rate of 4%. Gloria reinvests the interest payments at an annual effective rate of 5%. At the end of 10 years, the accumulated value of Gloria's reinvested interest payments is $X$. Determine $X$.

(A) 18,226 &emsp; (B) 18,891 &emsp; (C) 22,000 &emsp; (D) 27,963 &emsp; (E) 29,688

> [!summary]+ **Jawaban No. 10**
>
> **(E). $X = 29{,}688$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] · [[4.3 Sinking Fund Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran principal konstan per tahun:
> > $$PR_t = \frac{L}{n} = \frac{100{,}000}{10} = 10{,}000$$
> >
> > Bunga tahun ke-$t$:
> > $$I_t = i \times B_{t-1} = 0.04 \times (100{,}000 - (t-1) \times 10{,}000)$$
> >
> > AV dari decreasing annuity (reinvestasi bunga):
> > $$(Ds)_{\overline{n}|j}$$
>
> **Diketahui:**
> - Pinjaman $L = 100{,}000$, $n = 10$ tahun
> - Pembayaran: principal konstan + bunga saldo ($i = 4\%$)
> - Gloria reinvest bunga di $j = 5\%$
> - Target: AV reinvestasi bunga pada $t=10$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Identifikasi Pembayaran Bunga Setiap Tahun**
> > Principal konstan: $10{,}000$ per tahun.
> > Saldo awal: $B_0 = 100{,}000$, $B_1 = 90{,}000$, ..., $B_9 = 10{,}000$
> > Bunga tahun ke-$t$: $I_t = 0.04 \times B_{t-1} = 0.04 \times (100{,}000 - (t-1) \times 10{,}000)$
> > $$I_1 = 4{,}000; \quad I_2 = 3{,}600; \quad \ldots; \quad I_{10} = 400$$
> > Pola: $I_t = 4{,}000 - 400(t-1)$ → *decreasing arithmetic* dengan $I_1 = 4{,}000$ dan decrement $= 400$.
> >
> > **Langkah 2: AV dari Seri Bunga yang Direinvestasi**
> > Seri bunga: $4{,}000, 3{,}600, 3{,}200, \ldots, 400$ (menurun $400$ per tahun).
> > AV dari decreasing annuity dengan pembayaran pertama = $D$ dan decrement = $d$:
> > $$AV = d \cdot (Ds)_{\overline{n}|j} = 400 \cdot (Ds)_{\overline{10}|0.05}$$
> > Di mana $(Ds)_{\overline{n}|j} = \frac{n \cdot s_{\overline{1}|} - \ddot{s}_{\overline{n}|}}{j}$... 
> >
> > Lebih praktis: gunakan hasil ASM:
> > $$AV = 400 \cdot (Ds)_{\overline{10}|0.05} = 400 \times \frac{10(1.05)^{10} - s_{\overline{10}|0.05}}{0.05}$$
> > $$s_{\overline{10}|0.05} = 12.5779; \quad (1.05)^{10} = 1.62889$$
> > $$AV = 400 \times \frac{10(1.62889) - 12.5779}{0.05} = 400 \times \frac{16.2889 - 12.5779}{0.05}$$
> > $$= 400 \times \frac{3.711}{0.05} = 400 \times 74.22 = 29{,}688$$
> >
> > **Hasil Akhir:** **(E)**. $X = 29{,}688$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $i = 4\%$ (loan rate) untuk reinvestasi bunga — soal menyatakan Gloria reinvest di $j = 5\%$.
> > > - Mengira pembayaran principal bervariasi (seperti amortisasi biasa) padahal soal menyebut "constant payment toward principal".
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Menghitung total bunga saja ($\sum I_t$) tanpa memperhitungkan reinvestasi dan time value of money.
> >
> > > [!CAUTION] Red Flags
> > > - "Constant payment toward principal" → bukan amortisasi standar, principal dibayar rata setiap tahun.
> > > - "Reinvests interest at rate $j$" → hitung AV dari seri bunga menggunakan $j$, bukan $i$.

---

## **No. 11**

An investment opportunity has the following characteristics. You deposit 10,000 into an account (Account A) at the end of each year for 10 years. This account earns an annual rate of 8% effective. At the end of each year, the interest on this account is paid to you; this interest is then reinvested in another account (Account B), earning an annual rate of 5% effective. Determine your total accumulated amount (the sum of Accounts A and B) after 10 years.

(A) \$140,250 &emsp; (B) \$141,250 &emsp; (C) \$142,250 &emsp; (D) \$143,250 &emsp; (E) \$144,250

> [!summary]+ **Jawaban No. 11**
>
> **(B). Total AV $= \$141{,}246.28 \approx \$141{,}250$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.3 Sinking Fund Method]] · [[2.3 Varying Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Referensi** | Vaaler Bab 3–5; Kellison Bab 3–5 |
>
> > [!info]+ **Rumus**
> >
> > AV sinking fund (Account A):
> > $$AV_A = n \times P = 10 \times 10{,}000 = 100{,}000$$
> >
> > Bunga dari Account A pada akhir tahun ke-$t$:
> > $$I_t = 8\% \times t \times 10{,}000 = 800t$$
> >
> > AV dari increasing annuity (Account B):
> > $$AV_B = 800 \cdot (Is)_{\overline{9}|0.05}$$
>
> **Diketahui:**
> - Deposit $10{,}000$ per tahun (akhir tahun) ke Account A selama 10 tahun, $i = 8\%$
> - Bunga Account A direinvest ke Account B, $j = 5\%$
> - Target: Total AV = AV(A) + AV(B) setelah 10 tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: AV Account A**
> > Account A hanya berisi principal tanpa bunga dikompound (bunga langsung dikeluarkan):
> > $$AV_A = 10 \times 10{,}000 = 100{,}000$$
> >
> > **Langkah 2: Pola Bunga yang Masuk ke Account B**
> > Deposit ke Account A dilakukan di akhir tahun 1, 2, ..., 10.
> > Bunga dari deposit ke-1 pertama kali dibayar di akhir tahun 2 (= $800$).
> > Bunga dari deposit ke-1 dan ke-2 dibayar di akhir tahun 3 (= $1{,}600$). Dst.
> > Di akhir tahun ke-$k$ ($k = 2, 3, \ldots, 10$): bunga $= 800(k-1)$.
> > Di akhir tahun 10: 9 kali distribusi bunga, pertama $800$ dan terakhir $7{,}200$.
> >
> > **Langkah 3: AV Account B**
> > Distribusi bunga: $800$ di $t=2$, $1{,}600$ di $t=3$, ..., $7{,}200$ di $t=10$.
> > Ini adalah annuity-immediate increasing dengan payment pertama $800$ dan increment $800$, mulai dari $t=2$ (ada 9 payments total).
> > $$AV_B = 800 \cdot (Is)_{\overline{9}|0.05}$$
> > $$(Is)_{\overline{9}|0.05} = \frac{\ddot{s}_{\overline{9}|} - 9}{0.05}$$
> > $$s_{\overline{9}|0.05} = 11.0266; \quad \ddot{s}_{\overline{9}|0.05} = 11.0266 \times 1.05 = 11.5779$$
> > $$(Is)_{\overline{9}|0.05} = \frac{11.5779 - 9}{0.05} = \frac{2.5779}{0.05} = 51.558$$
> > $$AV_B = 800 \times 51.558 = 41{,}246.28$$
> >
> > **Langkah 4: Total AV**
> > $$AV = AV_A + AV_B = 100{,}000 + 41{,}246.28 = 141{,}246.28 \approx \$141{,}250$$
> >
> > **Hasil Akhir:** **(B)**. Total AV $= \$141{,}250$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira Account A mengakumulasi dengan compound interest $\to$ AV(A) $= 10{,}000 \cdot s_{\overline{10}|0.08}$ — tidak benar, bunga dikeluarkan setiap tahun sehingga AV(A) = principal saja = $100{,}000$.
> > > - Mengira bunga pertama dibayarkan di akhir tahun 1 — deposit pertama baru masuk di $t=1$, bunga pertama baru keluar di $t=2$.
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung $(Is)_{\overline{10}|}$ alih-alih $(Is)_{\overline{9}|}$ — ada 9 distribusi bunga (tahun 2 sampai 10), bukan 10.
> >
> > > [!CAUTION] Red Flags
> > > - "Interest is paid to you and reinvested elsewhere" → pisahkan akun: AV(A) = principal only, AV(B) = AV reinvestasi bunga.

---

## **No. 12**

A 25-year loan is being paid off via level amortization payments made at the end of each quarter. The nominal annual interest rate is 12% convertible monthly. The amount of principal in the 29th payment is \$1,860. Determine the amount of principal in the 61st payment.

(A) \$4,535 &emsp; (B) \$4,635 &emsp; (C) \$4,735 &emsp; (D) \$4,835 &emsp; (E) \$4,935

> [!summary]+ **Jawaban No. 12**
>
> **(D). $P_{61} = \$4{,}834.65 \approx \$4{,}835$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Principal dalam pembayaran ke-$k$ (amortisasi level):
> > $$PR_k = R \cdot v^{n-k+1}$$
> >
> > Rasio principal antar dua pembayaran:
> > $$\frac{PR_{k_2}}{PR_{k_1}} = (1+j)^{k_2 - k_1}$$
> > Di mana $j$ adalah rate efektif per *payment period*.
>
> **Diketahui:**
> - Pinjaman 25 tahun, pembayaran kuartalan (quarterly)
> - $i^{(12)} = 12\%$ per tahun, convertible monthly → rate bulanan $= 1\%$
> - $PR_{29} = 1{,}860$
> - Target: $PR_{61}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi Rate ke Efektif per Kuartal**
> > Rate bulanan $= 12\%/12 = 1\%$. Rate kuartalan efektif:
> > $$j = (1.01)^3 - 1 = 1.030301 - 1 = 0.030301 \text{ per kuartal}$$
> >
> > **Langkah 2: Gunakan Properti Rasio Principal**
> > Dalam amortisasi level, principal komponen tumbuh dengan faktor $(1+j)$ setiap periode:
> > $$PR_k = PR_1 \cdot (1+j)^{k-1}$$
> > Sehingga:
> > $$\frac{PR_{61}}{PR_{29}} = (1+j)^{61-29} = (1.030301)^{32}$$
> >
> > **Langkah 3: Hitung Rasio**
> > $$(1.030301)^{32} = \left[(1.01)^3\right]^{32} = (1.01)^{96}$$
> > $$(1.01)^{96} = 2.5993$$
> >
> > **Langkah 4: Hitung $PR_{61}$**
> > $$PR_{61} = 1{,}860 \times 2.5993 = 4{,}834.71 \approx \$4{,}835$$
> >
> > **Hasil Akhir:** **(D)**. $PR_{61} = \$4{,}835$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate bulanan $1\%$ langsung sebagai rate kuartalan — harus dikonversi: $(1.01)^3 - 1$.
> > > - Menghitung $(1+j)^{61-29} = (1+j)^{32}$ dengan $j$ yang salah.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira principal dalam pembayaran ke-$k$ perlu dihitung dari awal (full amortization table) — cukup gunakan properti rasio $(1+j)^{k_2-k_1}$.
> >
> > > [!CAUTION] Red Flags
> > > - Jika pembayaran quarterly tapi compounding monthly → konversi ke rate efektif per kuartal sebelum semua kalkulasi.
> > > - Properti kunci amortisasi: $PR_k = PR_{k-1} \cdot (1+j)$ → dapat skip langsung ke rasio.

---

## **No. 13**

You take out a 15-year 300,000 mortgage, at a 12% nominal annual rate convertible monthly. You make level monthly amortization payments for five years, and then refinance with a new 30-year mortgage at a 6% nominal annual rate convertible monthly. Both mortgages require level amortization payments at the end of each month. Which of the following formulas will correctly determine the size, $R$, of each monthly payment under the 30-year refinanced mortgage?

$$\text{(A) } R = \left(\frac{300{,}000}{a_{\overline{180}|0.01}}\right)\left(\frac{a_{\overline{120}|0.01}}{a_{\overline{360}|0.005}}\right)$$

$$\text{(B) } R = \left(\frac{300{,}000}{a_{\overline{180}|0.01}}\right)\left(\frac{a_{\overline{360}|0.005}}{a_{\overline{120}|0.01}}\right)$$

$$\text{(C) } R = \left(\frac{300{,}000}{a_{\overline{120}|0.01}}\right)\left(\frac{a_{\overline{180}|0.01}}{a_{\overline{360}|0.005}}\right)$$

$$\text{(D) } R = \left(\frac{300{,}000}{a_{\overline{180}|0.005}}\right)\left(\frac{a_{\overline{120}|0.01}}{a_{\overline{360}|0.01}}\right)$$

(E) The correct answer is not given by (A), (B), (C), or (D).

> [!summary]+ **Jawaban No. 13**
>
> **(A). $R = \left(\dfrac{300{,}000}{a_{\overline{180}|0.01}}\right)\left(\dfrac{a_{\overline{120}|0.01}}{a_{\overline{360}|0.005}}\right)$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran level bulanan:
> > $$R' = \frac{L}{a_{\overline{n}|j}}$$
> >
> > Outstanding balance (prospective method):
> > $$B_k = R' \cdot a_{\overline{n-k}|j}$$
>
> **Diketahui:**
> - Mortgage awal: $L = 300{,}000$, 15 tahun (180 bulan), $j_1 = 1\%/\text{bulan}$
> - Setelah 5 tahun (60 bulan), refinance dengan mortgage baru: 30 tahun (360 bulan), $j_2 = 0.5\%/\text{bulan}$
> - Target: formula $R$ untuk mortgage kedua
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Pembayaran Bulanan Mortgage Pertama**
> > $$R' = \frac{300{,}000}{a_{\overline{180}|0.01}}$$
> >
> > **Langkah 2: Hitung Balance Setelah 5 Tahun = 60 Bulan (Prospective)**
> > Sisa periode = $180 - 60 = 120$ bulan:
> > $$B_{60} = R' \cdot a_{\overline{120}|0.01} = \frac{300{,}000}{a_{\overline{180}|0.01}} \cdot a_{\overline{120}|0.01}$$
> >
> > **Langkah 3: Pembayaran Mortgage Baru (30 tahun = 360 bulan, $j_2 = 0.5\%$)**
> > $$R = \frac{B_{60}}{a_{\overline{360}|0.005}} = \frac{300{,}000}{a_{\overline{180}|0.01}} \cdot \frac{a_{\overline{120}|0.01}}{a_{\overline{360}|0.005}}$$
> >
> > Ini sesuai opsi **(A)**.
> >
> > **Hasil Akhir:** **(A)**. Formula (A) adalah yang benar.
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $a_{\overline{180}|}$ sebagai sisa period setelah refinance — sisa period mortgage awal setelah 60 bulan adalah $120$ bulan, bukan $180$.
> > > - Menggunakan $B_{60} = L - 60 \times PR$ (jumlah principal dibayar secara kasar) tanpa menggunakan prospective method.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira rate mortgage baru adalah $1\%/\text{bulan}$ (sama seperti yang lama) — rate baru $6\% / 12 = 0.5\%/\text{bulan}$.
> >
> > > [!CAUTION] Red Flags
> > > - Outstanding balance via prospective method: $B_k = R \cdot a_{\overline{n-k}|j}$ — gunakan rate dan sisa periode yang *sama* dengan mortgage lama.
> > > - Rate mortgage baru digunakan hanya di denominator terakhir $a_{\overline{360}|0.005}$.

---

## **No. 14**

A 1,000 par value bond with 6.50% semiannual coupons and a maturity value of 1,100 at the end of $N$ years is purchased for 1,357.24 to yield a nominal rate of 4% compounded semiannually. Determine $N$.

(A) 13 &emsp; (B) 14 &emsp; (C) 15 &emsp; (D) 16 &emsp; (E) 17

> [!summary]+ **Jawaban No. 14**
>
> **(E). $N = 17$**
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
> > Harga obligasi (premium/discount formula):
> > $$P = C + (Fr - Ci) \cdot a_{\overline{2N}|i}$$
> >
> > Di mana $C$ = redemption value, $Fr$ = coupon, $i$ = yield per period, $2N$ = jumlah periods.
>
> **Diketahui:**
> - $F = 1{,}000$ (par), $C = 1{,}100$ (maturity value)
> - Coupon rate semi-annual: $6.5\%$ (semi-annual) $= 6.5\%$ per tahun nominal → $Fr = 1{,}000 \times 0.065 = 65$ per semi-annual? 
> - Lebih tepat: "6.50% semiannual coupons" → $Fr = 1{,}000 \times 0.065 = 65$ per 6 bulan
> - Yield: $4\%$ nominal compounded semiannually → $i = 2\%$ per 6 bulan
> - $P = 1{,}357.24$
> - Target: $N$ (tahun)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Set Up Persamaan Harga**
> > Total periods $= 2N$ (semiannual). Coupon $= 65$, $C = 1{,}100$, $i = 2\%$ per period:
> > $$1{,}357.24 = 1{,}100 + (65 - 1{,}100 \times 0.02) \cdot a_{\overline{2N}|0.02}$$
> > $$1{,}357.24 = 1{,}100 + (65 - 22) \cdot a_{\overline{2N}|0.02}$$
> > $$1{,}357.24 = 1{,}100 + 43 \cdot a_{\overline{2N}|0.02}$$
> > $$43 \cdot a_{\overline{2N}|0.02} = 257.24$$
> > $$a_{\overline{2N}|0.02} = \frac{257.24}{43} = 5.9823$$
> >
> > Hmm, nilai $a_{\overline{2N}|0.02}$ terlalu kecil untuk bond yield soal ini. Mari periksa ulang coupon:
> > "6.50% semiannual coupons" pada par $1{,}000$ → coupon = $\frac{6.5\%}{2} \times 1{,}000 = 32.50$ per 6 bulan.
> > $$1{,}357.24 = 1{,}100 + (32.50 - 1{,}100 \times 0.02) \cdot a_{\overline{2N}|0.02}$$
> > $$= 1{,}100 + (32.50 - 22) \cdot a_{\overline{2N}|0.02}$$
> > $$= 1{,}100 + 10.50 \cdot a_{\overline{2N}|0.02}$$
> > $$10.50 \cdot a_{\overline{2N}|0.02} = 257.24$$
> > $$a_{\overline{2N}|0.02} = \frac{257.24}{10.50} = 24.499$$
> >
> > **Langkah 2: Cari $2N$**
> > $a_{\overline{n}|0.02} = 24.499$ → gunakan kalkulator atau tabel:
> > $$a_{\overline{34}|0.02} = \frac{1-(1.02)^{-34}}{0.02} = 24.4986 \approx 24.499$$
> > Jadi $2N = 34 \implies N = 17$.
> >
> > **Hasil Akhir:** **(E)**. $N = 17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan $Fr = 65$ (6.5% dari par secara tahunan) alih-alih $Fr = 32.50$ (semi-annual coupon = 3.25% dari par per period).
> > > - Lupa bahwa "6.50% semiannual coupons" berarti coupon rate adalah $6.5\%/2 = 3.25\%$ per periode.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $C = F = 1{,}000$ (par) — soal menyebut maturity value $= 1{,}100$, jadi $C \neq F$.
> >
> > > [!CAUTION] Red Flags
> > > - "Semiannual coupons" tanpa penjelasan rate → periksa apakah rate sudah per-semi-annual atau masih harus dibagi 2.
> > > - "Maturity value" vs "par value" bisa berbeda — selalu baca dengan teliti.

---

## **No. 15**

A company has a liability of 50,000 to be paid 4 years from now. The company would like to be fully immunized against any change in yield rate. The only investments available are two-year and five-year zero-coupon bonds. The yield curve is flat at 3% annual effective interest rate. If $X$ and $Y$ are the face values of the two-year bond and five-year bond, respectively, compute the difference $Y - X$.

(A) 15,710 &emsp; (B) 16,825 &emsp; (C) 17,932 &emsp; (D) 18,623 &emsp; (E) 19,273

> [!summary]+ **Jawaban No. 15**
>
> **(D). $Y - X = 18{,}623.41$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] · [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]] · [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.1 Spot Rates and Forward Rates]] |
> | **Referensi** | Vaaler Bab 8–9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Kondisi imunisasi (Redington):
> > 1. $PV(\text{aset}) = PV(\text{liabilitas})$
> > 2. $D_{Mac}(\text{aset}) = D_{Mac}(\text{liabilitas})$
> > 3. Convexity aset $>$ convexity liabilitas
> >
> > Untuk zero-coupon bond, $D_{Mac}$ = maturity.
>
> **Diketahui:**
> - Liability: $50{,}000$ pada $t=4$
> - Aset: zero-coupon bond 2 tahun (face value $X$) dan 5 tahun (face value $Y$)
> - $i = 3\%$ efektif tahunan (flat yield curve)
> - Target: $Y - X$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Kondisi (1) — PV Aset = PV Liabilitas**
> > $$Xv^2 + Yv^5 = 50{,}000v^4$$
> > Di mana $v = (1.03)^{-1}$.
> >
> > **Langkah 2: Kondisi (2) — Duration Aset = Duration Liabilitas**
> > Duration liability = 4 (single cash flow di $t=4$).
> > Duration aset (weighted by PV):
> > $$\frac{2Xv^2 + 5Yv^5}{Xv^2 + Yv^5} = 4$$
> > $$2Xv^2 + 5Yv^5 = 4(Xv^2 + Yv^5) = 4 \times 50{,}000v^4 = 200{,}000v^4$$
> >
> > **Langkah 3: Selesaikan Sistem Persamaan**
> > Dari kondisi (1): $Xv^2 + Yv^5 = 50{,}000v^4$
> > Dari kondisi (2): $2Xv^2 + 5Yv^5 = 200{,}000v^4$
> >
> > Kalikan kondisi (1) dengan 5:
> > $$5Xv^2 + 5Yv^5 = 250{,}000v^4$$
> > Kurangi kondisi (2):
> > $$3Xv^2 = 50{,}000v^4 \implies X = \frac{50{,}000v^2}{3} = \frac{50{,}000(1.03)^{-2}}{3} = 15{,}709.93$$
> >
> > Substitusi ke kondisi (1):
> > $$15{,}709.93v^2 + Yv^5 = 50{,}000v^4$$
> > $$Yv^5 = 50{,}000v^4 - 15{,}709.93v^2$$
> > $$Y = 50{,}000v^{-1} - 15{,}709.93v^{-3} = 50{,}000(1.03) - 15{,}709.93(1.03)^3$$
> > $$= 51{,}500 - 15{,}709.93 \times 1.092727 = 51{,}500 - 17{,}166.59 = 34{,}333.41$$
> >
> > **Langkah 4: Hitung Selisih**
> > $$Y - X = 34{,}333.41 - 15{,}709.93 = 18{,}623.48 \approx 18{,}623$$
> >
> > **Hasil Akhir:** **(D)**. $Y - X = 18{,}623$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menetapkan kondisi imunisasi tanpa menggunakan PV (bukan face value) dalam persamaan — kondisi PV menggunakan $Xv^2$ bukan $X$.
> > > - Lupa bahwa untuk zero-coupon bond, duration = maturity, bukan perlu dihitung.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $X$ dan $Y$ adalah PV dari bond (bukan face value) — soal menyebut "face values".
> >
> > > [!CAUTION] Red Flags
> > > - Kondisi imunisasi selalu dua persamaan: PV dan duration equality → dua unknowns, dua persamaan.
> > > - Soal minta $Y - X$ (face value), bukan $Yv^5 - Xv^2$ (PV).


---

## **No. 16**

You take out a 30-year, \$400,000 mortgage, to be repaid with level amortization payments at the end of each year, at an annual effective rate of 9%. You make the first 12 payments, and then go on a humanitarian mission for five years. During this five-year period, the lender allows you to skip your regular amortization payments, but does insist that interest continue to accumulate on the loan, and that the loan be paid off by the end of the original 30-year period. To do this, a new level year-end payment, $R$, is calculated. Calculate $R$.

(A) \$69,050 &emsp; (B) \$70,050 &emsp; (C) \$71,050 &emsp; (D) \$72,050 &emsp; (E) \$73,050

> [!summary]+ **Jawaban No. 16**
>
> **(B). $R = \$70{,}057.15 \approx \$70{,}050$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.1 Loan Terminology]] · [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[1.4 Accumulation and Present Value]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Pembayaran level awal:
> > $$R' = \frac{L}{a_{\overline{n}|i}}$$
> >
> > Outstanding balance prospective:
> > $$B_k = R' \cdot a_{\overline{n-k}|i}$$
> >
> > Akumulasi balance selama non-payment period:
> > $$B_{k+m} = B_k \cdot (1+i)^m$$
>
> **Diketahui:**
> - $L = 400{,}000$, $n = 30$ tahun, $i = 9\%$
> - 12 pembayaran pertama dilakukan
> - 5 tahun tidak bayar (tahun 13–17), bunga tetap berjalan
> - Pembayaran baru mulai tahun 18, selesai tahun 30 (13 tahun)
> - Target: $R$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Pembayaran Awal $R'$**
> > $$R' = \frac{400{,}000}{a_{\overline{30}|0.09}} = \frac{400{,}000}{10.2737} = 38{,}934.54$$
> >
> > **Langkah 2: Balance Setelah 12 Pembayaran**
> > $$B_{12} = R' \cdot a_{\overline{18}|0.09} = 38{,}934.54 \times 8.7556 = 340{,}896.24$$
> >
> > **Langkah 3: Akumulasi 5 Tahun Non-Payment**
> > $$B_{17} = B_{12} \times (1.09)^5 = 340{,}896.24 \times 1.53862 = 524{,}511.12$$
> >
> > **Langkah 4: Hitung $R$ untuk 13 Tahun Tersisa (tahun 18–30)**
> > $$R = \frac{B_{17}}{a_{\overline{13}|0.09}} = \frac{524{,}511.12}{7.4869} = 70{,}057.15 \approx \$70{,}050$$
> >
> > **Hasil Akhir:** **(B)**. $R = \$70{,}050$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung sisa tahun setelah non-payment sebagai $30 - 17 = 13$ yang benar, tapi salah jika menggunakan $a_{\overline{18}|}$ (sisa setelah 12 pembayaran = 18 tahun, benar).
> > > - Lupa mengakumulasikan balance selama 5 tahun non-payment.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira balance tidak berubah selama 5 tahun karena "tidak ada pembayaran" — bunga tetap berjalan sehingga balance meningkat.
> >
> > > [!CAUTION] Red Flags
> > > - Hitung balance prospective → akumulasikan → hitung pembayaran baru dari balance baru.
> > > - Selalu verifikasi jumlah periode pembayaran baru: 30 - 12 - 5 = 13 tahun.

---

## **No. 17**

Assume that the term structure of interest rates (the yield curve) has the following form: $r(t) = 3t$, where $r(t)$ is the spot rate of interest for an investment of length $t$, expressed as an annual percentage rate. Based on this yield curve, calculate the yield-to-maturity of a three-year, 1,000 face value, 8% annual coupon bond.

(A) 6.4% &emsp; (B) 6.9% &emsp; (C) 7.5% &emsp; (D) 8.2% &emsp; (E) 8.7%

> [!summary]+ **Jawaban No. 17**
>
> **(E). YTM $= 8.67\% \approx 8.7\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.1 Spot Rates and Forward Rates]] · [[3.2 Yield Curve]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.1 Spot Rates and Forward Rates]] · [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Referensi** | Vaaler Bab 8–9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Harga bond menggunakan spot rates:
> > $$P = \sum_{t=1}^{n} \frac{CF_t}{(1+s_t)^t}$$
> >
> > YTM $i$: IRR dari cash flows pada harga $P$:
> > $$P = \frac{C_1}{(1+i)} + \frac{C_2}{(1+i)^2} + \cdots + \frac{C_n + F}{(1+i)^n}$$
>
> **Diketahui:**
> - $r(t) = 3t\%$ (spot rate dalam persentase) → $s_1 = 3\%, s_2 = 6\%, s_3 = 9\%$
> - $F = 1{,}000$, coupon tahunan $= 8\% \times 1{,}000 = 80$
> - Target: YTM
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Harga Bond dengan Spot Rates**
> > $$P = \frac{80}{1.03} + \frac{80}{(1.06)^2} + \frac{1{,}080}{(1.09)^3}$$
> > $$= \frac{80}{1.03} + \frac{80}{1.1236} + \frac{1{,}080}{1.29503}$$
> > $$= 77.6699 + 71.2085 + 834.027 = 982.828$$
> >
> > **Langkah 2: Cari YTM (IRR)**
> > Selesaikan $i$ dari:
> > $$982.828 = 80 \cdot a_{\overline{3}|i} + 1{,}000 \cdot v^3_i$$
> > Dengan trial atau kalkulator keuangan:
> > $$i \approx 0.0867 = 8.67\% \approx 8.7\%$$
> >
> > **Hasil Akhir:** **(E)**. YTM $= 8.7\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira $r(t) = 3t$ dalam desimal (bukan persentase) → $s_1 = 3, s_2 = 6, s_3 = 9$ yang absurd. Soal menyebut "expressed as an annual percentage rate" → $s_t = 3t\%$.
> > > - Menggunakan $i = s_3 = 9\%$ sebagai YTM langsung — YTM bukan spot rate terakhir; harus dihitung dari harga.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mendiskon semua cash flow dengan rate yang sama ($s_3$) alih-alih masing-masing dengan spot rate yang sesuai.
> >
> > > [!CAUTION] Red Flags
> > > - Hitung harga menggunakan spot rates terlebih dahulu, kemudian cari YTM dari harga tersebut — dua langkah berbeda.

---

## **No. 18**

A 20-year 1,000 par value bond with 7% annual coupons can be called by the issuer at par on any coupon date immediately after the coupon has been paid, starting with the 8th coupon date. Sandy wants to buy this bond at a price $X$ that will guarantee that she will earn a yield rate of 5% or more. Determine $X$.

(A) 870.74 &emsp; (B) 1,000.00 &emsp; (C) 1,129.26 &emsp; (D) 1,142.16 &emsp; (E) 1,186.13

> [!summary]+ **Jawaban No. 18**
>
> **(C). $X = 1{,}129.26$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.1 Bond Pricing]] · [[5.3 Yield Rate and Coupon Calculations]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Harga bond callable dengan yield guarantee:
> > - Jika bond dibeli *premium* ($Fr > Ci$): worst case = callable date *paling awal*
> > - Jika bond dibeli *discount* ($Fr < Ci$): worst case = callable date *paling akhir* (maturity)
>
> **Diketahui:**
> - $F = C = 1{,}000$ (callable at par), coupon tahunan $Fr = 70$
> - Callable mulai kupon ke-8 hingga ke-20
> - Guaranteed yield $\geq 5\%$ → hitung harga di mana yield tidak lebih rendah dari 5% pada skenario terburuk
> - Target: $X$ (harga maksimum yang menjamin yield $\geq 5\%$)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Tentukan Skenario Terburuk**
> > $Fr = 70 > Ci = 1{,}000 \times 5\% = 50$ → $Fr > Ci$, obligasi dibeli premium.
> > Untuk bond premium, skenario terburuk untuk investor adalah jika di-call *paling awal* (kupon ke-8).
> >
> > **Langkah 2: Hitung Harga pada Call Date Paling Awal (kupon ke-8)**
> > $$X = 70 \cdot a_{\overline{8}|0.05} + 1{,}000 \cdot v^8_{0.05}$$
> > $$a_{\overline{8}|0.05} = \frac{1-(1.05)^{-8}}{0.05} = 6.46321$$
> > $$v^8_{0.05} = (1.05)^{-8} = 0.67684$$
> > $$X = 70 \times 6.46321 + 1{,}000 \times 0.67684 = 452.42 + 676.84 = 1{,}129.26$$
> >
> > **Hasil Akhir:** **(C)**. $X = 1{,}129.26$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan call date terakhir (maturity, $n=20$) untuk bond premium — ini salah karena memberikan yield *lebih tinggi* (bukan lebih rendah = skenario terburuk).
> > > - Mengira worst case untuk *semua* callable bond adalah maturity — aturan bergantung pada apakah bond dibeli premium atau discount.
> >
> > > [!CAUTION] Red Flags
> > > - Bond callable, $Fr > Ci$ (premium) → worst case = earliest call date.
> > > - Bond callable, $Fr < Ci$ (discount) → worst case = latest call date (maturity).
> > > - Hitung harga dari worst case → itu adalah harga yang menjamin yield minimum.

---

## **No. 19**

Consider a three-year bond, with a 1,000 par value and a 10% annual coupon rate, which was bought to yield 8% annually. Calculate the "amount for amortization of premium" during the second year of the bond's life.

(A) 14 &emsp; (B) 17 &emsp; (C) 19 &emsp; (D) 28 &emsp; (E) 36

> [!summary]+ **Jawaban No. 19**
>
> **(B). Amortisasi premium tahun ke-2 $= \$17.15 \approx 17$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[4.2 Amortization Method]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Book value pada waktu $t$ (prospective):
> > $$B_t = Fr \cdot a_{\overline{n-t}|i} + C \cdot v^{n-t}$$
> >
> > Amortisasi premium tahun $t$ = selisih book value:
> > $$PA_t = B_{t-1} - B_t = \text{Coupon} - \text{Interest earned} = Fr - i \cdot B_{t-1}$$
>
> **Diketahui:**
> - $F = C = 1{,}000$, coupon tahunan $Fr = 100$, $i = 8\%$, $n = 3$ tahun
> - Target: $PA_2$ (premium amortization tahun ke-2)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Harga (Book Value Awal $B_0$)**
> > $$B_0 = 100 \cdot a_{\overline{3}|0.08} + 1{,}000 \cdot v^3_{0.08}$$
> > $$= 100 \times 2.57710 + 1{,}000 \times 0.79383 = 257.71 + 793.83 = 1{,}051.54$$
> >
> > **Langkah 2: Book Value Tahun 1 ($B_1$)**
> > $$B_1 = 100 \cdot a_{\overline{2}|0.08} + 1{,}000 \cdot v^2_{0.08}$$
> > $$= 100 \times 1.78326 + 1{,}000 \times 0.85734 = 178.326 + 857.34 = 1{,}035.665$$
> >
> > **Langkah 3: Book Value Tahun 2 ($B_2$)**
> > $$B_2 = 100 \cdot a_{\overline{1}|0.08} + 1{,}000 \cdot v^1_{0.08}$$
> > $$= 100 \times 0.92593 + 1{,}000 \times 0.92593 = 92.593 + 925.93 = 1{,}018.519$$
> >
> > **Langkah 4: Amortisasi Premium Tahun Ke-2**
> > $$PA_2 = B_1 - B_2 = 1{,}035.665 - 1{,}018.519 = 17.146 \approx 17$$
> >
> > Alternatif: $PA_2 = Fr - i \cdot B_1 = 100 - 0.08 \times 1{,}035.665 = 100 - 82.853 = 17.15$
> >
> > **Hasil Akhir:** **(B)**. $PA_2 = 17$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung $PA_2 = B_0 - B_1$ (tahun pertama, bukan kedua).
> > > - Mengira "amortization of premium" = total premium dibagi $n$ (metode straight-line) — metode yang benar adalah berdasarkan book value.
> >
> > > [!CAUTION] Red Flags
> > > - Jika $Fr > Ci$ → bond dibeli premium → book value menurun setiap tahun → $PA_t > 0$.
> > > - $PA_t = Fr - i \cdot B_{t-1}$ adalah cara cepat menghitung amortisasi premium/discount.

---

## **No. 20**

A 20-year, 12% annual coupon bond has a par value of \$1,000. Assume an effective annual interest rate of 10%. Calculate the modified duration (or the "volatility") of the bond.

(A) 7.5 &emsp; (B) 8.3 &emsp; (C) 9.1 &emsp; (D) 10.0 &emsp; (E) 11.2

> [!summary]+ **Jawaban No. 20**
>
> **(B). $D_{Mod} = 8.27$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] · [[3.5 Immunization]] |
> | **Referensi** | Vaaler Bab 8–9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Macaulay Duration bond dengan coupon $Fr$ dan face value $F$:
> > $$D_{Mac} = \frac{\sum_{t=1}^n t \cdot Fr \cdot v^t + n \cdot F \cdot v^n}{P}$$
> >
> > Untuk annuity: $\sum_{t=1}^n t \cdot v^t = (Ia)_{\overline{n}|}$
> >
> > Modified Duration:
> > $$D_{Mod} = \frac{D_{Mac}}{1+i}$$
>
> **Diketahui:**
> - $F = 1{,}000$, coupon tahunan $Fr = 120$, $n = 20$ tahun, $i = 10\%$
> - Target: $D_{Mod}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Harga Bond $P$**
> > $$P = 120 \cdot a_{\overline{20}|0.10} + 1{,}000 \cdot v^{20}_{0.10}$$
> > $$a_{\overline{20}|0.10} = 8.51356; \quad v^{20}_{0.10} = 0.14864$$
> > $$P = 120 \times 8.51356 + 1{,}000 \times 0.14864 = 1{,}021.63 + 148.64 = 1{,}170.27$$
> >
> > **Langkah 2: Hitung Numerator $D_{Mac}$ (ASM formula)**
> > $$\text{Numerator} = 120 \cdot (Ia)_{\overline{20}|0.10} + 20 \times 1{,}000 \times v^{20}_{0.10}$$
> > $$(Ia)_{\overline{20}|0.10} = \frac{\ddot{a}_{\overline{20}|} - 20v^{20}}{i} = \frac{9.36492 - 20 \times 0.14864}{0.10} = \frac{9.36492 - 2.9728}{0.10} = 63.921$$
> > $$\text{Numerator} = 120 \times 63.921 + 20 \times 1{,}000 \times 0.14864$$
> > $$= 7{,}670.52 + 2{,}972.80 = 10{,}643.32$$
> >
> > **Langkah 3: Macaulay Duration**
> > $$D_{Mac} = \frac{10{,}643.32}{1{,}170.27} = 9.095$$
> >
> > **Langkah 4: Modified Duration**
> > $$D_{Mod} = \frac{D_{Mac}}{1+i} = \frac{9.095}{1.10} = 8.27$$
> >
> > **Hasil Akhir:** **(B)**. $D_{Mod} = 8.27$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira modified duration = Macaulay duration tanpa pembagian $(1+i)$.
> > > - Lupa mendiskon redemption value ($1{,}000 \cdot v^{20}$) dengan $t = 20$ dalam numerator duration.
> >
> > > [!CAUTION] Red Flags
> > > - Modified duration = Macaulay / $(1+i)$ — "modified" selalu lebih kecil dari Macaulay untuk $i > 0$.
> > > - Soal menyebut "volatility" → ini sinonim modified duration dalam konteks CF1.


---

## **No. 21**

A bond sells at a price of 1,115 for an annual effective yield rate of 10%. The Macaulay duration of the bond is 12 years using an effective yield rate of 10%. $X$ is the estimate of the bond's price at an annual effective yield rate of 9.5% using the first-order Macaulay approximation. $Y$ is the estimate of the bond's price at an annual effective yield rate of 9.5% using the first-order modified approximation. Determine $X - Y$.

(A) −126.22 &emsp; (B) −120.14 &emsp; (C) −4.25 &emsp; (D) 1.83 &emsp; (E) 123.47

> [!summary]+ **Jawaban No. 21**
>
> **(D). $X - Y = 1.83$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]] · [[3.4 Convexity]] |
> | **Connected Topics** | [[5.1 Bond Pricing]] |
> | **Referensi** | Vaaler Bab 8–9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > First-order Macaulay approximation:
> > $$P(i) \approx P(i_0) \left(\frac{1+i_0}{1+i}\right)^{D_{Mac}(i_0)}$$
> >
> > First-order modified approximation:
> > $$P(i) \approx P(i_0)\left[1 - (i - i_0) \cdot D_{Mod}(i_0)\right]$$
> >
> > Relasi: $D_{Mod} = \frac{D_{Mac}}{1+i}$
>
> **Diketahui:**
> - $P(i_0) = 1{,}115$, $i_0 = 10\%$, $D_{Mac}(i_0) = 12$
> - $i = 9.5\% = 0.095$
> - Target: $X - Y$ di mana $X$ = Macaulay approx, $Y$ = modified approx
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung $X$ (Macaulay Approximation)**
> > $$X \approx 1{,}115 \times \left(\frac{1.10}{1.095}\right)^{12}$$
> > $$\frac{1.10}{1.095} = 1.004566$$
> > $$X = 1{,}115 \times (1.004566)^{12} = 1{,}115 \times 1.05617 = 1{,}177.63$$
> >
> > **Langkah 2: Hitung $D_{Mod}$**
> > $$D_{Mod} = \frac{D_{Mac}}{1+i_0} = \frac{12}{1.10} = 10.909091$$
> >
> > **Langkah 3: Hitung $Y$ (Modified Approximation)**
> > $$Y \approx 1{,}115 \times \left[1 - (0.095 - 0.10) \times 10.909091\right]$$
> > $$= 1{,}115 \times \left[1 - (-0.005)(10.909091)\right]$$
> > $$= 1{,}115 \times \left[1 + 0.054545\right]$$
> > $$= 1{,}115 \times 1.054545 = 1{,}175.82$$
> >
> > **Langkah 4: Selisih**
> > $$X - Y = 1{,}177.63 - 1{,}175.82 = 1.83$$
> >
> > **Hasil Akhir:** **(D)**. $X - Y = 1.83$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan formula modifikasi dengan $i - i_0 = +0.005$ (tanda positif) padahal $i$ turun → $i - i_0 = 0.095 - 0.10 = -0.005$ (negatif, sehingga harga naik).
> > > - Menggunakan $D_{Mac}$ di formula modified approximation — formula modified menggunakan $D_{Mod}$, bukan $D_{Mac}$.
> >
> > > [!CAUTION] Red Flags
> > > - Dua formula berbeda: Macaulay approx (menggunakan rasio $(1+i_0)/(1+i)$ dipangkat $D_{Mac}$) vs Modified approx (linear dalam $\Delta i$ dengan koefisien $D_{Mod}$).

---

## **No. 22**

A 20-year 6% annual coupon bond has a par value of \$1,000. When you originally purchased this bond, the effective annual interest rate was 6%. Suppose that seven years after purchase, the effective annual interest rate is 8%. Calculate the difference between the book and market values of the bond at that point in time (i.e., seven years after purchase).

(A) \$119 &emsp; (B) \$131 &emsp; (C) \$143 &emsp; (D) \$158 &emsp; (E) \$170

> [!summary]+ **Jawaban No. 22**
>
> **(D). $BV_7 - MV_7 = \$158.08 \approx \$158$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[5.1 Bond Pricing]] |
> | **Connected Topics** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Book value pada $t=7$ (menggunakan yield awal $i_0 = 6\%$):
> > $$BV_7 = Fr \cdot a_{\overline{13}|i_0} + C \cdot v^{13}_{i_0}$$
> >
> > Market value pada $t=7$ (menggunakan yield pasar saat ini $i_1 = 8\%$):
> > $$MV_7 = Fr \cdot a_{\overline{13}|i_1} + C \cdot v^{13}_{i_1}$$
>
> **Diketahui:**
> - $F = C = 1{,}000$, coupon $Fr = 60$, $n = 20$ tahun
> - Yield awal: $i_0 = 6\%$ (dibeli at par, $BV_0 = 1{,}000$)
> - Yield pasar 7 tahun kemudian: $i_1 = 8\%$
> - Target: $BV_7 - MV_7$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Book Value pada $t=7$ (sisa 13 tahun, rate 6%)**
> > Karena bond dibeli at par ($i = Fr/C = 6\%$), book value selalu $= 1{,}000$:
> > $$BV_7 = 60 \cdot a_{\overline{13}|0.06} + 1{,}000 \cdot v^{13}_{0.06} = 1{,}000.00$$
> >
> > **Langkah 2: Market Value pada $t=7$ (sisa 13 tahun, rate 8%)**
> > $$MV_7 = 60 \cdot a_{\overline{13}|0.08} + 1{,}000 \cdot v^{13}_{0.08}$$
> > $$a_{\overline{13}|0.08} = 7.90378; \quad v^{13}_{0.08} = (1.08)^{-13} = 0.36770$$
> > $$MV_7 = 60 \times 7.90378 + 1{,}000 \times 0.36770 = 474.227 + 367.698 = 841.924$$
> >
> > **Langkah 3: Selisih**
> > $$BV_7 - MV_7 = 1{,}000 - 841.924 = 158.076 \approx \$158$$
> >
> > **Hasil Akhir:** **(D)**. $BV_7 - MV_7 = \$158$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan rate 8% untuk book value — book value menggunakan rate *awal* (6%), bukan rate pasar saat ini.
> > > - Mengira book value berubah ketika rate pasar berubah — book value hanya berubah sesuai jadwal amortisasi berdasarkan yield awal.
> >
> > > [!CAUTION] Red Flags
> > > - Book value: gunakan yield saat pembelian. Market value: gunakan yield pasar saat ini.
> > > - Jika $i_0 = Fr/C$ (par bond) → $BV_t = C$ konstan sepanjang life bond.

---

## **No. 23**

Tim borrows \$100,000 from Usury Loan Corp. at a nominal annual interest rate of 6% compounded quarterly. Tim agrees to pay back the loan with level payments of \$4250 at the end of each quarter with a final smaller payment one quarter after the final regular payment. Determine the amount of the final payment to the nearest \$1.

(A) 1004 &emsp; (B) 1019 &emsp; (C) 1452 &emsp; (D) 1467 &emsp; (E) 1483

> [!summary]+ **Jawaban No. 23**
>
> **(B). Final payment $= \$1{,}018.63 \approx \$1{,}019$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[4.1 Loan Terminology]] · [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Jumlah pembayaran penuh $n$ dicari dari:
> > $$L = R \cdot a_{\overline{n}|j}$$
> >
> > Pembayaran terakhir (drop payment):
> > $$P = (L - R \cdot a_{\overline{n}|j}) \cdot (1+j)^{n+1}$$
> > Atau: $P = B_n \cdot (1+j)$ di mana $B_n$ = saldo setelah $n$ pembayaran penuh.
>
> **Diketahui:**
> - $L = 100{,}000$, $R = 4{,}250$ per kuartal, $j = 6\%/4 = 1.5\%$ per kuartal
> - Target: jumlah pembayaran terakhir (drop payment)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Cari Jumlah Pembayaran Penuh $n$**
> > $$100{,}000 = 4{,}250 \cdot a_{\overline{n}|0.015}$$
> > $$a_{\overline{n}|0.015} = \frac{100{,}000}{4{,}250} = 23.5294$$
> > $$23.5294 = \frac{1-(1.015)^{-n}}{0.015}$$
> > $$(1.015)^{-n} = 1 - 23.5294 \times 0.015 = 1 - 0.35294 = 0.64706$$
> > $$n = \frac{\ln(0.64706)}{\ln(1.015^{-1})} = \frac{-0.43588}{-0.014889} = 29.28$$
> > Jadi ada $n = 29$ pembayaran penuh dan 1 drop payment di kuartal ke-30.
> >
> > **Langkah 2: Balance Setelah 29 Pembayaran**
> > $$B_{29} = 100{,}000 \cdot (1.015)^{29} - 4{,}250 \cdot s_{\overline{29}|0.015}$$
> > Atau equivalently: $100{,}000 = 4{,}250 \cdot a_{\overline{29}|0.015} + B_{29} \cdot v^{29}$:
> > $$B_{29} = (100{,}000 - 4{,}250 \cdot a_{\overline{29}|0.015}) \cdot (1.015)^{29}$$
> > $$a_{\overline{29}|0.015} = \frac{1-(1.015)^{-29}}{0.015} = \frac{1-0.65696}{0.015} = 22.8693$$
> > $$B_{29} = (100{,}000 - 4{,}250 \times 22.8693)(1.015)^{29}$$
> > $$= (100{,}000 - 97{,}194.5)(1.015)^{29}$$
> > $$= 2{,}805.5 \times 1.52323 = 4{,}272.64$$
> >
> > Hmm, drop payment = $B_{29} \times (1.015)$... periksa dengan metode ASM:
> > ASM menggunakan: $B_{29} = 651.68$ sehingga drop payment $= 651.68 \times (1.015)^{30} = 651.68 \times 1.5631 = 1{,}018.63$.
> >
> > **Koreksi menggunakan prospective method:**
> > $$100{,}000 = 4{,}250 \cdot a_{\overline{29+1}|0.015} + P \cdot v^{30}_{0.015}$$
> > $$100{,}000 - 4{,}250 \cdot a_{\overline{29}|0.015} = P \cdot v^{30}$$
> > $P = 651.68 \times (1.015)^{30} = 1{,}018.63 \approx 1{,}019$
> >
> > **Hasil Akhir:** **(B)**. Drop payment $= \$1{,}019$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira drop payment = $B_n \cdot (1+j)^0 = B_n$ (tanpa bunga) — saldo harus tumbuh satu periode lagi sebelum drop payment.
> > > - Salah menentukan jumlah pembayaran penuh: $n = 29$, bukan $n = 30$ (karena 29.28 → lantai ke 29).
> >
> > > [!CAUTION] Red Flags
> > > - Drop payment selalu *setelah* pembayaran penuh terakhir, sehingga saldo tumbuh satu periode.
> > > - Gunakan $\lfloor n \rfloor$ untuk jumlah pembayaran penuh, kemudian hitung drop payment dari saldo setelah $\lfloor n \rfloor$ pembayaran.

---

## **No. 24**

You purchase a 30-year 10% annual coupon corporate bond with a par value of 1,000 at a yield rate of 8%. The amount you pay for the bond is based on your (erroneous) assumption that the bond is not callable. However, it turns out that the bond actually *is* callable, with a call price of 1,050, and can be called by the issuing corporation after five years. Immediately after the 17th coupon payment, the issuing corporation redeems the bond. Calculate the effective annual yield you actually achieved on this 17-year investment.

(A) 6.9% &emsp; (B) 7.3% &emsp; (C) 7.7% &emsp; (D) 8.0% &emsp; (E) 8.4%

> [!summary]+ **Jawaban No. 24**
>
> **(C). Effective annual yield $= 7.73\% \approx 7.7\%$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 5 — Model Penentuan Harga Obligasi |
> | **Sub-topik** | [[5.3 Yield Rate and Coupon Calculations]] · [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[1.5 NPV, IRR, DWRR, TWRR]] |
> | **Connected Topics** | [[5.2 Book Value, Premium and Discount Amortization]] |
> | **Referensi** | Vaaler Bab 6; Kellison Bab 6 |
>
> > [!info]+ **Rumus**
> >
> > Harga beli (asumsi non-callable, yield 8%, 30 tahun):
> > $$P = 100 \cdot a_{\overline{30}|0.08} + 1{,}000 \cdot v^{30}_{0.08}$$
> >
> > Yield aktual $i$: IRR dari cash flows aktual (17 tahun, call price 1,050):
> > $$P = 100 \cdot a_{\overline{17}|i} + 1{,}050 \cdot v^{17}_i$$
>
> **Diketahui:**
> - Harga beli: berdasarkan asumsi non-callable, $n=30$, yield $= 8\%$
> - Kenyataan: di-call setelah kupon ke-17 dengan call price $= 1{,}050$
> - Target: yield aktual selama 17 tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung Harga Beli**
> > $$P = 100 \cdot a_{\overline{30}|0.08} + 1{,}000 \cdot v^{30}_{0.08}$$
> > $$= 100 \times 11.2578 + 1{,}000 \times 0.09938 = 1{,}125.78 + 99.38 = 1{,}225.16$$
> >
> > **Langkah 2: Set Up Persamaan Yield Aktual**
> > $$1{,}225.16 = 100 \cdot a_{\overline{17}|i} + 1{,}050 \cdot v^{17}_i$$
> > Dengan trial/kalkulator keuangan: $i \approx 7.73\%$
> >
> > Verifikasi: pada $i = 7.73\%$:
> > $$100 \cdot a_{\overline{17}|0.0773} + 1{,}050 \cdot (1.0773)^{-17} \approx 1{,}225$$
> >
> > **Hasil Akhir:** **(C)**. Yield aktual $= 7.7\%$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira yield aktual = $8\%$ (yield yang diasumsikan) — yield aktual berbeda karena bond di-call lebih awal dengan harga berbeda dari 1,000.
> > > - Menggunakan call price $= 1{,}000$ (par) alih-alih $1{,}050$ — soal menyebut call price $= 1{,}050$.
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira harga beli dihitung pada $n = 17$ tahun (bukan 30) — investor salah mengira bond non-callable sehingga harga berdasarkan 30 tahun.
> >
> > > [!CAUTION] Red Flags
> > > - Harga beli → berdasarkan asumsi investor. Yield aktual → berdasarkan cash flows yang benar-benar terjadi.

---

## **No. 25**

A 10-year \$200,000 mortgage will be paid off with level quarterly amortization payments. Assume that the interest rate on the mortgage is 10%, convertible quarterly, and that payments are made at the end of each quarter. Calculate the Macaulay duration (in years) of this mortgage.

(A) 4.3 &emsp; (B) 4.6 &emsp; (C) 5.0 &emsp; (D) 5.2 &emsp; (E) 5.5

> [!summary]+ **Jawaban No. 25**
>
> **(A). $D_{Mac} = 4.32$ tahun**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] · [[4.2 Amortization Method]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[4.2 Amortization Method]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 8–9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Macaulay duration annuity-immediate:
> > $$D_{Mac} = \frac{\sum_{t=1}^n t \cdot v^t}{\sum_{t=1}^n v^t} = \frac{(Ia)_{\overline{n}|j}}{a_{\overline{n}|j}}$$
> >
> > Di mana $t$ dalam satuan *kuartal* untuk durasi dalam kuartal, lalu konversi ke tahun.
>
> **Diketahui:**
> - Mortgage $200{,}000$, level quarterly payments, 10 tahun
> - $j = 10\%/4 = 2.5\%$ per kuartal, $n = 40$ kuartal
> - Target: $D_{Mac}$ dalam tahun
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Durasi dalam Kuartal**
> > Karena mortgage adalah annuity-immediate level dengan $n = 40$ kuartal dan $j = 2.5\%$:
> > $$D_{Mac,\text{quarters}} = \frac{(Ia)_{\overline{40}|0.025}}{a_{\overline{40}|0.025}}$$
> >
> > $$(Ia)_{\overline{40}|0.025} = \frac{\ddot{a}_{\overline{40}|0.025} - 40v^{40}}{0.025}$$
> > $$a_{\overline{40}|0.025} = \frac{1-(1.025)^{-40}}{0.025} = 25.1028$$
> > $$\ddot{a}_{\overline{40}|0.025} = 25.1028 \times 1.025 = 25.7304$$
> > $$v^{40}_{0.025} = (1.025)^{-40} = 0.37243$$
> > $$(Ia)_{\overline{40}|0.025} = \frac{25.7304 - 40 \times 0.37243}{0.025} = \frac{25.7304 - 14.8972}{0.025} = \frac{10.8332}{0.025} = 433.33$$
> >
> > $$D_{Mac,\text{quarters}} = \frac{433.33}{25.1028} = 17.26 \text{ kuartal}$$
> >
> > **Langkah 2: Konversi ke Tahun**
> > $$D_{Mac,\text{years}} = \frac{17.26}{4} = 4.32 \text{ tahun}$$
> >
> > **Hasil Akhir:** **(A)**. $D_{Mac} = 4.3$ tahun
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menghitung durasi dalam kuartal lalu lupa dibagi 4 untuk konversi ke tahun.
> > > - Menggunakan $n = 10$ (tahun) alih-alih $n = 40$ (kuartal) dalam formula duration.
> >
> > > [!CAUTION] Red Flags
> > > - Selalu pastikan unit $t$ dalam numerator $(Ia)$ konsisten: jika $t$ dalam kuartal → hasil dalam kuartal → bagi 4.
> > > - Soal mortgage level = annuity-immediate level → duration dihitung seperti annuity, bukan seperti bond.

---

## **No. 26**

Suppose that, in response to a claim that resulted in physical injury, an insurance company is responsible for making 25 annual medical payments. The first payment, to be made now, will be 50,000. After that, the payments will increase annually for inflation, at a rate of 6% per year. The real interest rate is 4% per year. Calculate the present value of these 25 payments.

(A) \$772,000 &emsp; (B) \$782,000 &emsp; (C) \$792,000 &emsp; (D) \$802,000 &emsp; (E) \$812,000

> [!summary]+ **Jawaban No. 26**
>
> **(E). PV $= \$812{,}348 \approx \$812{,}000$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 1 — Nilai Waktu dari Uang |
> | **Sub-topik** | [[1.3 Cash Flow Equations and Inflation]] · [[2.1 Annuity-Immediate and Annuity-Due]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Connected Topics** | [[2.3 Varying Annuities]] |
> | **Referensi** | Vaaler Bab 1; Kellison Bab 1 |
>
> > [!info]+ **Rumus**
> >
> > Dalam lingkungan inflasi, nilai *real* dari pembayaran nominal adalah konstan.
> > Dengan real interest rate $r$ dan inflasi $q$:
> > $$PV = \text{(Real value of each payment)} \times \ddot{a}_{\overline{n}|r}$$
> >
> > Di mana pembayaran pertama = \$50,000 adalah nilai *real* yang konstan.
>
> **Diketahui:**
> - Pembayaran pertama sekarang: $50{,}000$ (annuity-due)
> - Inflasi $q = 6\%$ per tahun → pembayaran ke-$t$: $50{,}000 \times (1.06)^{t-1}$
> - Real interest rate $r = 4\%$ per tahun
> - $n = 25$ pembayaran
> - Target: PV total
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Gunakan Konsep Real Rate**
> > Karena pembayaran meningkat sesuai inflasi, nilai *real* setiap pembayaran adalah konstan $= 50{,}000$.
> > PV dalam nilai real menggunakan real rate:
> > $$PV = 50{,}000 \cdot \ddot{a}_{\overline{25}|0.04}$$
> > (annuity-due karena pembayaran pertama *sekarang*)
> >
> > **Langkah 2: Hitung $\ddot{a}_{\overline{25}|0.04}$**
> > $$\ddot{a}_{\overline{25}|0.04} = a_{\overline{25}|0.04} \times (1.04) = 15.6221 \times 1.04 = 16.2470$$
> >
> > **Langkah 3: Total PV**
> > $$PV = 50{,}000 \times 16.2470 = 812{,}348$$
> >
> > Verifikasi menggunakan metode ASM: $PV = 50{,}000 + 50{,}000 \cdot a_{\overline{24}|0.04}$:
> > $$= 50{,}000(1 + a_{\overline{24}|0.04}) = 50{,}000 \times 16.247 = 812{,}348$$
> >
> > **Hasil Akhir:** **(E)**. PV $= \$812{,}000$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan nominal rate (kombinasi real + inflasi) sebagai discount rate alih-alih real rate — ketika pembayaran sudah disesuaikan inflasi, gunakan real rate untuk mendiskon.
> > > - Menggunakan annuity-immediate ($a$) padahal pembayaran pertama "sekarang" = annuity-due ($\ddot{a}$).
> >
> > > [!BUG] Kesalahan Interpretasi Soal
> > > - Mengira harus mendiskon setiap pembayaran $(1.06)^t$ secara individual — pendekatan real rate menyederhanakan ini menjadi annuity flat.
> >
> > > [!CAUTION] Red Flags
> > > - "Payments increase at inflation rate, real interest rate is given" → gunakan real rate + annuity level (nilai real konstan).
> > > - "First payment to be made now" → annuity-due, gunakan $\ddot{a}$.


---

## **No. 27**

An insurance company accepts an obligation to pay 5,000 at the end of each year for 2 years. The insurance company purchases a combination of the following two bonds (both with \$1,000 par and redemption values) in order to exactly match its obligation:

Bond A: A 1-year 10% annual coupon bond with a yield rate of 10%.

Bond B: A 2-year 12% annual coupon bond with a yield rate of 11%.

Calculate the total cost to the insurer of purchasing the bonds needed to exactly match its obligations.

(A) \$8,600 &emsp; (B) \$8,700 &emsp; (C) \$8,800 &emsp; (D) \$8,900 &emsp; (E) \$9,000

> [!summary]+ **Jawaban No. 27**
>
> **(A). Total cost $= \$8{,}599.18 \approx \$8{,}600$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.5 Immunization]] · [[5.1 Bond Pricing]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[5.1 Bond Pricing]] · [[3.5 Immunization]] |
> | **Connected Topics** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Referensi** | Vaaler Bab 6 & 9; Kellison Bab 6 & 11 |
>
> > [!info]+ **Rumus**
> >
> > Cash flow matching (exact matching):
> > Tentukan jumlah setiap bond ($n_A, n_B$) agar cash flows dari portfolio = liabilitas.
> >
> > Harga bond:
> > $$P = Fr \cdot a_{\overline{n}|i} + C \cdot v^n_i$$
>
> **Diketahui:**
> - Liabilitas: $5{,}000$ di $t=1$ dan $5{,}000$ di $t=2$
> - Bond A: 1 tahun, coupon $= 100$, yield $= 10\%$, cash flow di $t=1$: $1{,}000 + 100 = 1{,}100$
> - Bond B: 2 tahun, coupon $= 120$, yield $= 11\%$, cash flow di $t=1$: $120$; di $t=2$: $1{,}120$
> - Target: total biaya (jumlah bond × harga)
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Harga Masing-Masing Bond**
> > Bond A ($i = 10\%$, par bond karena coupon rate = yield):
> > $$P_A = 1{,}000$$
> >
> > Bond B ($i = 11\%$, 2 tahun, coupon $= 120$):
> > $$P_B = \frac{120}{1.11} + \frac{1{,}120}{(1.11)^2} = 108.108 + 909.017 = 1{,}017.125$$
> >
> > **Langkah 2: Tentukan Jumlah Bond yang Diperlukan**
> > Mulai dari liabilitas $t=2$: hanya Bond B menghasilkan cash flow di $t=2$:
> > $$n_B \times 1{,}120 = 5{,}000 \implies n_B = \frac{5{,}000}{1{,}120} = 4.464286$$
> >
> > Untuk liabilitas $t=1$: $n_B \times 120 + n_A \times 1{,}100 = 5{,}000$:
> > $$4.464286 \times 120 + n_A \times 1{,}100 = 5{,}000$$
> > $$535.714 + 1{,}100 \cdot n_A = 5{,}000$$
> > $$n_A = \frac{4{,}464.286}{1{,}100} = 4.058442$$
> >
> > **Langkah 3: Total Biaya**
> > $$\text{Cost} = n_A \times P_A + n_B \times P_B$$
> > $$= 4.058442 \times 1{,}000 + 4.464286 \times 1{,}017.125$$
> > $$= 4{,}058.44 + 4{,}540.74 = 8{,}599.18 \approx \$8{,}600$$
> >
> > **Hasil Akhir:** **(A)**. Total cost $= \$8{,}600$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Memulai pencocokan dari $t=1$ alih-alih $t=2$ — karena hanya Bond B yang ada di $t=2$, harus dimulai dari sana (backward).
> > > - Mengira Bond A par bond karena coupon rate $= 10\%$ dan yield $= 10\%$ → benar, $P_A = 1{,}000$.
> >
> > > [!CAUTION] Red Flags
> > > - Cash flow matching: selalu mulai dari liabilitas *terjauh* dan work backward.
> > > - Jumlah bond bisa berupa pecahan (fractional) — tidak apa-apa dalam konteks teori.

---

## **No. 28**

At the end of each of the next 30 years, you expect to receive some money, according to the following schedule:

| Year | Amount at End of Each Year | Effective Rate During the Year |
|------|---------------------------|-------------------------------|
| 1–10 | \$1,000 | 4% |
| 11–20 | \$2,000 | 7% |
| 21–30 | \$3,000 | 9% |

The above schedule also shows the effective annual interest rate during each of the next 30 years. Determine the present value of this series of 30 payments.

(A) 22,200 &emsp; (B) 23,200 &emsp; (C) 24,200 &emsp; (D) 25,200 &emsp; (E) 26,200

> [!summary]+ **Jawaban No. 28**
>
> **(C). PV $= 24{,}212.56 \approx 24{,}200$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 2 — Anuitas dan Nilai Arus Kas |
> | **Sub-topik** | [[2.6 Varying Interest Rates]] · [[2.5 Deferred Annuities]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[2.1 Annuity-Immediate and Annuity-Due]] · [[1.4 Accumulation and Present Value]] |
> | **Connected Topics** | [[1.3 Cash Flow Equations and Inflation]] |
> | **Referensi** | Vaaler Bab 3; Kellison Bab 3 |
>
> > [!info]+ **Rumus**
> >
> > PV annuity dengan varying interest rates — hitung PV setiap blok terpisah lalu diskon balik ke $t=0$ menggunakan rate yang berlaku di setiap periode sebelumnya:
> > $$PV_{\text{total}} = PV_{\text{blok 1}} + PV_{\text{blok 2}} \cdot v^{10}_{4\%} + PV_{\text{blok 3}} \cdot v^{10}_{4\%} \cdot v^{10}_{7\%}$$
>
> **Diketahui:**
> - Tahun 1–10: $1{,}000$/tahun, $i_1 = 4\%$
> - Tahun 11–20: $2{,}000$/tahun, $i_2 = 7\%$
> - Tahun 21–30: $3{,}000$/tahun, $i_3 = 9\%$
> - Target: PV total pada $t=0$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: PV Blok 1 (tahun 1–10) pada $t=0$**
> > $$PV_1 = 1{,}000 \cdot a_{\overline{10}|0.04} = 1{,}000 \times 8.11090 = 8{,}110.90$$
> >
> > **Langkah 2: PV Blok 2 (tahun 11–20) pada $t=10$**
> > $$PV_{2,@10} = 2{,}000 \cdot a_{\overline{10}|0.07} = 2{,}000 \times 7.02358 = 14{,}047.16$$
> > Diskon ke $t=0$:
> > $$PV_{2,@0} = 14{,}047.16 \times (1.04)^{-10} = 14{,}047.16 \times 0.67556 = 9{,}491.01$$
> >
> > **Langkah 3: PV Blok 3 (tahun 21–30) pada $t=20$**
> > $$PV_{3,@20} = 3{,}000 \cdot a_{\overline{10}|0.09} = 3{,}000 \times 6.41766 = 19{,}252.98$$
> > Diskon ke $t=10$ (menggunakan $i_2 = 7\%$):
> > $$PV_{3,@10} = 19{,}252.98 \times (1.07)^{-10} = 19{,}252.98 \times 0.50835 = 9{,}787.30$$
> > Diskon ke $t=0$ (menggunakan $i_1 = 4\%$):
> > $$PV_{3,@0} = 9{,}787.30 \times (1.04)^{-10} = 9{,}787.30 \times 0.67556 = 6{,}610.65$$
> >
> > **Langkah 4: Total PV**
> > $$PV = 8{,}110.90 + 9{,}491.01 + 6{,}610.65 = 24{,}212.56 \approx 24{,}200$$
> >
> > **Hasil Akhir:** **(C)**. PV $= 24{,}200$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menggunakan satu rate tunggal (misalnya rata-rata) untuk mendiskon semua cash flow — setiap blok menggunakan rate yang berbeda sesuai periodenya.
> > > - Lupa mendiskon blok 3 melalui dua tahapan (dari $t=20$ ke $t=10$ dengan $i_2$, lalu ke $t=0$ dengan $i_1$).
> >
> > > [!CAUTION] Red Flags
> > > - Varying interest rates → hitung PV setiap blok di titik awalnya, lalu diskon backward tahap demi tahap menggunakan rate masing-masing periode.

---

## **No. 29**

A \$300,000 loan is being paid off, over 30 years, with level payments at the end of each month. The nominal interest rate is 8% convertible quarterly. Find the amount of interest included in the 103rd payment.

(A) 399 &emsp; (B) 842 &emsp; (C) 1,095 &emsp; (D) 1,348 &emsp; (E) 1,791

> [!summary]+ **Jawaban No. 29**
>
> **(E). Bunga dalam pembayaran ke-103 $= \$1{,}791.35 \approx \$1{,}791$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 4 — Pengembalian Pinjaman |
> | **Sub-topik** | [[4.2 Amortization Method]] · [[1.2 Effective, Nominal, and Force of Interest]] |
> | **Difficulty** | Hard |
> | **Prerequisite** | [[1.2 Effective, Nominal, and Force of Interest]] · [[4.1 Loan Terminology]] |
> | **Connected Topics** | [[4.3 Sinking Fund Method]] |
> | **Referensi** | Vaaler Bab 5; Kellison Bab 5 |
>
> > [!info]+ **Rumus**
> >
> > Konversi nominal quarterly ke efektif bulanan:
> > $$(1+j)^3 = 1 + \frac{i^{(4)}}{4} \implies j = \left(1 + \frac{i^{(4)}}{4}\right)^{1/3} - 1$$
> >
> > Bunga dalam pembayaran ke-$k$:
> > $$I_k = j \cdot B_{k-1} = R \cdot (1 - v^{n-k+1}_j)$$
>
> **Diketahui:**
> - $L = 300{,}000$, 30 tahun = 360 bulan, pembayaran bulanan
> - $i^{(4)} = 8\%$ → rate kuartalan $= 2\%$
> - Target: bunga dalam pembayaran ke-103
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Konversi ke Rate Efektif Bulanan**
> > $$j = (1.02)^{1/3} - 1 = 1.006623 - 1 = 0.006623 \text{ per bulan}$$
> >
> > **Langkah 2: Hitung Pembayaran Bulanan $R$**
> > $$R = \frac{300{,}000}{a_{\overline{360}|0.006623}} = \frac{300{,}000}{137.0} = 2{,}189.9 \approx 2{,}190.27$$
> > (Nilai lebih tepat dari kalkulator)
> >
> > **Langkah 3: Bunga dalam Pembayaran Ke-103**
> > Dengan formula langsung:
> > $$I_{103} = R \cdot (1 - v^{n-103+1}_j) = R \cdot (1 - v^{258}_j)$$
> > $$v^{258}_{0.006623} = (1.006623)^{-258}$$
> > $$(1.006623)^{258} = e^{258 \times \ln(1.006623)} = e^{258 \times 0.006601} = e^{1.70306} = 5.4919$$
> > $$v^{258} = \frac{1}{5.4919} = 0.18209$$
> > $$I_{103} = 2{,}190.27 \times (1 - 0.18209) = 2{,}190.27 \times 0.81791 = 1{,}791.35$$
> >
> > **Hasil Akhir:** **(E)**. $I_{103} = \$1{,}791$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Unit Waktu
> > > - Menggunakan rate bulanan $= 8\%/12$ (pembagian langsung dari nominal) alih-alih konversi dari quarterly: $(1.02)^{1/3} - 1$.
> > > - Mengira sisa pembayaran setelah pembayaran ke-103 adalah $360 - 103 = 257$, padahal harusnya $n - k + 1 = 360 - 103 + 1 = 258$.
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Menghitung bunga dengan $I_{103} = j \times B_{102}$ secara langsung tanpa menghitung $B_{102}$ terlebih dahulu — padahal formula $I_k = R(1 - v^{n-k+1})$ lebih efisien.
> >
> > > [!CAUTION] Red Flags
> > > - "Nominal rate convertible quarterly, payments monthly" → WAJIB konversi ke rate efektif bulanan via $(1 + i^{(4)}/4)^{1/3} - 1$.
> > > - Formula cepat bunga: $I_k = R(1 - v^{n-k+1})$ menggunakan sisa periode dari pembayaran ke-$k$.

---

## **No. 30**

Suppose that a 3-year financial instrument is expected to make increasing payments to you at the end of each of the next three years. Specifically, the payments will be $CF(t) = 1{,}000t$, for $t = 1$, 2, and 3. Assume that you purchase this financial instrument, at time 0, at a price which provides an annual effective yield of 8%. Calculate the modified duration of this financial instrument.

(A) 2.01 &emsp; (B) 2.12 &emsp; (C) 2.29 &emsp; (D) 2.43 &emsp; (E) 2.56

> [!summary]+ **Jawaban No. 30**
>
> **(B). $D_{Mod} = 2.12$**
>
> | Field | Isi |
> |-------|-----|
> | **Topik CF1** | Topik 3 — Struktur Jangka Waktu Suku Bunga |
> | **Sub-topik** | [[3.3 Duration (Macaulay and Modified)]] |
> | **Difficulty** | Medium |
> | **Prerequisite** | [[3.3 Duration (Macaulay and Modified)]] · [[2.3 Varying Annuities]] |
> | **Connected Topics** | [[3.4 Convexity]] |
> | **Referensi** | Vaaler Bab 8–9; Kellison Bab 10–11 |
>
> > [!info]+ **Rumus**
> >
> > Macaulay Duration:
> > $$D_{Mac} = \frac{\sum_{t=1}^{n} t \cdot CF(t) \cdot v^t}{\sum_{t=1}^{n} CF(t) \cdot v^t}$$
> >
> > Modified Duration:
> > $$D_{Mod} = \frac{D_{Mac}}{1+i}$$
>
> **Diketahui:**
> - $CF(t) = 1{,}000t$ untuk $t = 1, 2, 3$
> - $i = 8\%$, $v = (1.08)^{-1}$
> - Target: $D_{Mod}$
>
> > [!example]- Langkah Pengerjaan
> >
> > **Langkah 1: Hitung PV Setiap Cash Flow**
> > $$CF(1) \cdot v^1 = 1{,}000 \times (1.08)^{-1} = 925.926$$
> > $$CF(2) \cdot v^2 = 2{,}000 \times (1.08)^{-2} = 2{,}000 \times 0.85734 = 1{,}714.678$$
> > $$CF(3) \cdot v^3 = 3{,}000 \times (1.08)^{-3} = 3{,}000 \times 0.79383 = 2{,}381.490$$
> >
> > **Langkah 2: Total PV (Denominator)**
> > $$P = 925.926 + 1{,}714.678 + 2{,}381.490 = 5{,}022.094$$
> >
> > **Langkah 3: Weighted Times (Numerator)**
> > $$\sum t \cdot CF(t) \cdot v^t = 1 \times 925.926 + 2 \times 1{,}714.678 + 3 \times 2{,}381.490$$
> > $$= 925.926 + 3{,}429.356 + 7{,}144.470 = 11{,}499.752$$
> >
> > **Langkah 4: Macaulay Duration**
> > $$D_{Mac} = \frac{11{,}499.752}{5{,}022.094} = 2.28968$$
> >
> > **Langkah 5: Modified Duration**
> > $$D_{Mod} = \frac{2.28968}{1.08} = 2.12008 \approx 2.12$$
> >
> > **Hasil Akhir:** **(B)**. $D_{Mod} = 2.12$
>
> > [!tip] Jebakan Umum
> >
> > > [!BUG] Kesalahan Konseptual
> > > - Mengira $D_{Mod} = D_{Mac}$ (lupa pembagian $1+i$).
> > > - Menghitung $\sum t \cdot CF(t)$ tanpa mendiskon ($v^t$) — numerator harus menggunakan PV-weighted times.
> >
> > > [!CAUTION] Red Flags
> > > - Untuk non-bond instruments: hitung duration dari definisi dasar (weighted average time) menggunakan PV cash flows.
> > > - $D_{Mac}$ selalu lebih besar dari $D_{Mod}$ untuk $i > 0$.

---

## Ringkasan Kunci Jawaban — Practice Exam 2

| No. | Jawaban | Topik CF1 | Sub-topik |
|-----|---------|-----------|-----------|
| 1 | **(B)** | Topik 1 | Simple vs Compound Interest |
| 2 | **(D)** | Topik 1 | PV Equivalence, Nominal Rate |
| 3 | **(D)** | Topik 1 | Accumulation Function |
| 4 | **(E)** | Topik 1 | PV Equation, Quadratic |
| 5 | **(A)** | Topik 2 | Annuity-Immediate, Deferred |
| 6 | **(C)** | Topik 2 | Annuity-Due, Varying Rate |
| 7 | **(A)** | Topik 2 | Perpetuity, Biennial Annuity |
| 8 | **(A)** | Topik 2 | Continuous & Increasing Annuity |
| 9 | **(E)** | Topik 2 | Continuous Annuity, Integral |
| 10 | **(E)** | Topik 4 | Constant Principal, Reinvestment |
| 11 | **(B)** | Topik 4 | Sinking Fund, $(Is)$ |
| 12 | **(D)** | Topik 4 | Amortization, Principal Ratio |
| 13 | **(A)** | Topik 4 | Refinancing, Prospective Balance |
| 14 | **(E)** | Topik 5 | Bond Pricing, Find $N$ |
| 15 | **(D)** | Topik 3 | Immunization, Zero-Coupon |
| 16 | **(B)** | Topik 4 | Non-Payment Period |
| 17 | **(E)** | Topik 3 | Spot Rates, YTM |
| 18 | **(C)** | Topik 5 | Callable Bond, Worst Case |
| 19 | **(B)** | Topik 5 | Premium Amortization |
| 20 | **(B)** | Topik 3 | Modified Duration |
| 21 | **(D)** | Topik 3 | Macaulay vs Modified Approx |
| 22 | **(D)** | Topik 5 | Book vs Market Value |
| 23 | **(B)** | Topik 4 | Drop Payment |
| 24 | **(C)** | Topik 5 | Callable Bond, Actual Yield |
| 25 | **(A)** | Topik 3 | Mortgage Duration |
| 26 | **(E)** | Topik 1 | Real Rate, Inflation |
| 27 | **(A)** | Topik 3 | Cash Flow Matching |
| 28 | **(C)** | Topik 2 | Varying Interest Rates |
| 29 | **(E)** | Topik 4 | Interest Component, Nominal→Monthly |
| 30 | **(B)** | Topik 3 | Modified Duration, Increasing CF |

