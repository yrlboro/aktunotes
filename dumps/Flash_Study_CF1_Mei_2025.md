# Flash Study CF1 — Periode Mei 2025

---

## No. 1 — Topik 3 · Forward Rate dari Spot Rate

**Subtopik:** [[3.1 Spot Rates and Forward Rates]]

**Inti soal:** Dikasih tabel spot rate 1–5 tahun. Cari "forward rate tahun keempat" — artinya rate yang berlaku selama tahun ke-4 (dari akhir tahun 3 ke akhir tahun 4).

- Identifikasi: "forward rate tahun ke-$n$" = $f_{n-1,n}$, bukan $f_{n,n+1}$
- Terapkan: $f_{3,4} = \dfrac{(1+s_4)^4}{(1+s_3)^3} - 1 = \dfrac{(1{,}045)^4}{(1{,}05)^3} - 1$
- Hitung: $\dfrac{1{,}19252}{1{,}15763} - 1 \approx 2{,}0\%$

**Kenapa:** Jebakan utama: "tahun keempat" ≠ $f_{4,5}$. Forward rate **selama** tahun ke-4 = $f_{3,4}$. Jangan selisihkan spot rate secara linear — forward rate itu rasio akumulasi, bukan selisih.

---

## No. 2 — Topik 1 · Konversi Multi-Rate: $\delta + i^{(6)}$

**Subtopik:** [[1.2 Effective, Nominal, and Force of Interest]]

**Inti soal:** Dikasih tingkat diskonto nominal $d^{(4)} = 0{,}064$. Minta $\delta + i^{(6)}$. Ini soal pipeline konversi: nominal discount → effective rate → force of interest + nominal interest.

- Konversi ke $v$: $(1 - 0{,}016)^4 = 0{,}93744$, maka $i = 1/v - 1 = 0{,}06674$
- Hitung $\delta = \ln(1{,}06674) = 0{,}06458$
- Hitung $i^{(6)} = 6[(1{,}06674)^{1/6} - 1] = 0{,}06493$, lalu jumlahkan: $\approx 0{,}129$

**Kenapa:** Dua jebakan sekaligus: (1) $d^{(4)}$ pakai formula diskonto $(1 - d^{(m)}/m)^m$, bukan bunga. (2) Rate per kuartal = $0{,}064/4 = 0{,}016$, bukan $0{,}064$. Kalau salah satu ketuker, hasil melenceng jauh.

---

## No. 3 — Topik 1 · Equation of Value: Dua Cara Lunasi Pinjaman

**Subtopik:** [[1.3 Cash Flow Equations and Inflation]]

**Inti soal:** Ada dua cara membayar pinjaman $K$ yang nilainya sama. Cara 1: bayar sekarang + 1 tahun. Cara 2: bayar di tahun ke-2 dan ke-3. Cari $K$.

- Samakan PV keduanya: $475(1+v) = 570v^2(1+v)$
- Faktorkan $(1+v)$ → sederhanakan: $475 = 570v^2$, maka $v^2 = 5/6$
- $v = \sqrt{5/6} = 0{,}91287$; lalu $K = 475 + 475v = 475(1 + 0{,}91287) \approx 909$

**Kenapa:** **Tricky** — banyak yang langsung expand persamaan tanpa sadar ada faktor $(1+v)$ di kedua sisi yang bisa dibagi. Memfaktorkan itu kunci; tanpa itu persamaan kuadrat dalam $v$ lebih susah.

---

## No. 4 — Topik 1 · Accumulated Value: Dua Rekening, Nilai Sama

**Subtopik:** [[1.4 Accumulation and Present Value]]

**Inti soal:** Shanice setor $1.000$ di 2023. Grace setor $500$ di 2024 dan $600$ di 2025. Di 2027 keduanya bernilai sama. Cari suku bunga.

- Set up: $1{.}000(1+i)^4 = 500(1+i)^3 + 600(1+i)^2$
- Bagi $(1+i)^2$: $1{.}000(1+i)^2 = 500(1+i) + 600$
- Substitusi $x = 1+i$ → kuadrat $10x^2 - 5x - 6 = 0$ → $x = 1{,}064$, maka $i = 6{,}4\%$

**Kenapa:** Hitung jarak waktu dari tanggal setoran ke focal date (2027) dengan teliti — dari 2023 itu 4 tahun, dari 2024 itu 3 tahun, dst. Off by one di sini → jawaban salah semua.

---

## No. 5 — Topik 1 · TWRR (Time-Weighted Rate of Return)

**Subtopik:** [[1.5 NPV, IRR, DWRR, TWRR]]

**Inti soal:** Ada rekening dengan deposit dan penarikan di tengah tahun. Cari return setahun menggunakan metode time-weighted (TWRR).

- Bagi jadi 3 sub-periode oleh tiap transaksi; hitung growth factor masing-masing
- $r_1 = 105{.}000/100{.}000$; $r_2 = 112{.}000/115{.}000$; $r_3 = 95{.}000/82{.}000$
- $1 + i_{TW} = r_1 \times r_2 \times r_3 = 1{,}18469 \approx 18{,}5\%$

**Kenapa:** Saldo awal sub-periode berikutnya = saldo sebelum transaksi ± transaksi. "Saldo sebelum deposit" bukan saldo awal sub-periode kedua — deposit harus ditambahkan dulu.

---

## No. 6 — Topik 1 · DWRR (Dollar-Weighted Rate of Return)

**Subtopik:** [[1.5 NPV, IRR, DWRR, TWRR]]

**Inti soal:** Data rekening sama dengan No. 5. Cari return setahun menggunakan metode dollar-weighted (DWRR) — pendekatan simple interest.

- Hitung interest earned: $I = 95{.}000 - 100{.}000 - (10{.}000 - 30{.}000) = 15{.}000$
- Hitung exposure: $E = 100{.}000 + 10{.}000 \times \frac{10}{12} - 30{.}000 \times \frac{4}{12} = 98{.}333$
- $i_{DW} = 15{.}000 / 98{.}333 \approx 15{,}3\%$

**Kenapa:** DWRR ≠ TWRR. DWRR pakai simple interest dengan weighted capital; penarikan mengurangi exposure (negatif). Fraksi waktu dihitung dari tanggal transaksi ke akhir tahun — 1 Maret = $2/12$ dari awal tahun, sisa = $10/12$.

---

## No. 7 — Topik 1 · Equivalent Rate: Dua Periode Berbeda

**Subtopik:** [[1.2 Effective, Nominal, and Force of Interest]]

**Inti soal:** Dana tumbuh 5 tahun dengan force of interest $\delta = 0{,}05$, lalu 10 tahun dengan diskonto nominal $d^{(4)} = 6\%$. Cari rate nominal bulanan yang setara untuk 15 tahun keseluruhan.

- $AF_1 = e^{0{,}05 \times 5} = e^{0{,}25} = 1{,}28403$
- $1+i_2 = 1/(1-0{,}015)^4 = 1{,}06215$; $AF_2 = (1{,}06215)^{10} = 1{,}82226$
- $AF_{15} = 1{,}28403 \times 1{,}82226 = 2{,}34025$ → $(AF_{15})^{1/15} = 1{,}05844$ → $i^{(12)} = 5{,}71\%$

**Kenapa:** Force of interest pakai $e^{\delta t}$, bukan $(1+\delta)^t$. Diskonto nominal pakai $(1 - d^{(m)}/m)^m$, bukan rumus bunga. Kalau dua formula ini ketuker → dua kesalahan sekaligus.

---

## No. 8 — Topik 2 · Anuitas Geometrik Kuartalan

**Subtopik:** [[2.3 Varying Annuities]]

**Inti soal:** Anuitas 10 tahun, bayar $100$ per kuartal di tahun 1, naik $5\%$ setiap tahun (bukan setiap kuartal). Suku bunga $8\%$ nominal konversi kuartalan. Cari PV.

- Konversi: $j = 2\%$ per kuartal; $i_{eff} = (1{,}02)^4 - 1 = 8{,}243\%$
- PV 4 kuartal untuk 1 tahun: $a_{\overline{4}|2\%} = 3{,}80773$
- Sumasi geometrik 10 blok tahunan: $PV = 100 \times 3{,}80773 \times \sum_{k=0}^{9}(1{,}05/1{,}08243)^k \approx 3{,}333$

**Kenapa:** **Tricky** — peningkatan $5\%$ per **tahun**, bukan per kuartal. Jadi tiap blok 4 pembayaran dianggap satu unit, lalu antar blok tumbuh geometrik. Gunakan efektif tahunan untuk rasio geometric series.

---

## No. 9 — Topik 2 · Rasio Annuity: Cari $i$

**Subtopik:** [[2.1 Annuity-Immediate and Annuity-Due]]

**Inti soal:** $a_{\overline{10}|} = X$ dan $a_{\overline{20}|} = 1{,}5X$. Cari suku bunga $i$.

- Gunakan identitas: $a_{\overline{20}|} = a_{\overline{10}|}(1 + v^{10})$
- Substitusi: $1{,}5 = 1 + v^{10}$ → $v^{10} = 0{,}5$
- $(1+i)^{10} = 2$ → $i = 2^{0{,}1} - 1 \approx 7{,}2\%$

**Kenapa:** Jangan coba $a_{\overline{20}|} = 2 \times a_{\overline{10}|}$ — itu linear scaling yang salah. Identitas $a_{\overline{2n}|} = a_{\overline{n}|}(1+v^n)$ adalah shortcut yang langsung eliminate $X$ dan beri $v^{10}$ secara bersih.

---

## No. 10 — Topik 2 · Increasing Annuity Aritmatika: Cari Kenaikan $X$

**Subtopik:** [[2.3 Varying Annuities]]

**Inti soal:** Menabung 300 bulan, pembayaran pertama $100$, naik $X$ per bulan (aritmatika). Target FV = $250.000$. Cari $X$.

- $j = 6{,}3\%/12 = 0{,}525\%$; hitung $s_{\overline{300}|} = 725{,}951$ dan $(Is)_{\overline{300}|} = (\ddot{s}_{\overline{300}|} - 300)/j$
- Setup: $250{.}000 = 100 \cdot s_{\overline{300}|} + X \cdot (Is)_{\overline{300}|}$
- Selesaikan: $X = (250{.}000 - 72{.}595) / 81{.}859 \approx 2{,}19$

**Kenapa:** "Meningkat sebesar $X$" = aritmatika, bukan geometrik. Kenaikan dimulai dari pembayaran **kedua** — bulan 1 = $100$, bulan 2 = $100+X$. Pakai $(Is)$ karena ini FV, bukan $(Ia)$.

---

## No. 11 — Topik 2 · Dua Fase Akumulasi + Anuitas Distribusi

**Subtopik:** [[2.1 Annuity-Immediate and Annuity-Due]]

**Inti soal:** Menabung $100$/bulan selama 10 tahun pertama, lalu $200$/bulan selama 10 tahun berikutnya ($i^{(12)} = 6\%$). Hasil dipakai beli anuitas 30 tahun bulanan ($i^{(12)} = 8\%$). Cari bayaran bulanannya.

- $FV_1 = 100 \cdot s_{\overline{120}|0{,}5\%} \cdot (1{,}005)^{120}$ (akumulasikan ke $t=20$)
- $FV_2 = 200 \cdot s_{\overline{120}|0{,}5\%}$; total $FV = FV_1 + FV_2 = 62{.}593$
- $R = FV / a_{\overline{360}|0{,}667\%} \approx 459$

**Kenapa:** $FV_1$ harus dikalikan $(1{,}005)^{120}$ ekstra untuk mengakumulasikannya dari akhir 10 tahun pertama ke akhir 20 tahun. Banyak yang lupa ini. Fase distribusi pakai rate yang berbeda ($8\%$), jangan campur.

---

## No. 12 — Topik 2 · Increasing + Level Annuity: Dekomposisi

**Subtopik:** [[2.3 Varying Annuities]]

**Inti soal:** Anuitas 20 tahun: tahun 1–10 naik dari $100$ ke $1.000$ (masing-masing +$100$); tahun 11–20 tetap $1.000$. Suku bunga $7{,}5\%$. Cari PV.

- Bagian increasing: $PV_1 = 100 \cdot (Ia)_{\overline{10}|7{,}5\%} = 100 \times 33{,}694 = 3{.}369$
- Bagian level deferred: $PV_2 = 1{.}000 \cdot v^{10} \cdot a_{\overline{10}|7{,}5\%} = 3{.}330$
- Total: $PV = 3{.}369 + 3{.}330 = 6{.}700$

**Kenapa:** Jangan pakai $(Ia)_{\overline{20}|}$ untuk seluruh 20 tahun — pembayaran konstan setelah tahun 10. Dekomposisi = increasing part + deferred level part. Bagian kedua wajib dikalikan $v^{10}$.

---

## No. 13 — Topik 2 · Annuity-Due: Level + Geometrik Dua Segmen

**Subtopik:** [[2.3 Varying Annuities]]

**Inti soal:** Annuity-due 20 tahun: 10 pembayaran pertama $100$ (di awal tahun 1–10), 10 pembayaran berikutnya tumbuh $6\%$ per tahun dari $106$. Suku bunga $8\%$. Cari PV.

- $PV_1 = 100 \cdot \ddot{a}_{\overline{10}|8\%} = 724{,}69$ (di $t=0$)
- $PV_{t=10} = 106 \cdot \dfrac{1-(1{,}06/1{,}08)^{10}}{1-1{,}06/1{,}08} = 975{,}89$ (geometric series, pembayaran pertama di $t=10$)
- $PV_2 = 975{,}89 \times v^{10} = 452{,}03$; total $\approx 1{.}177$

**Kenapa:** **Tricky** — dua jebakan sekaligus: (1) annuity-due, jadi pembayaran ke-11 ada di $t=10$ (bukan $t=11$). (2) Formula geometric series menghasilkan PV **tepat di titik pembayaran pertama** — langsung diskonto $v^{10}$ ke $t=0$.

---

## No. 14 — Topik 2 · Increasing Annuity FV: Cari $P$

**Subtopik:** [[2.3 Varying Annuities]]

**Inti soal:** Tasya setor $100$/tahun selama 20 tahun. Putri setor $P, 2P, \ldots, 20P$ selama 20 tahun. FV sama di $t=20$. Suku bunga $5\%$. Cari $P$.

- $FV_T = 100 \cdot s_{\overline{20}|5\%} = 3{.}307$
- $(Is)_{\overline{20}|} = (\ddot{s}_{\overline{20}|} - 20)/0{,}05 = 294{,}39$; maka $FV_P = P \cdot (Is)_{\overline{20}|}$
- $P = 3{.}307 / 294{,}39 \approx 11{,}23$

**Kenapa:** Samakan FV, bukan PV. Gunakan $(Is)$ (future value increasing), bukan $(Ia)$. Formula $(Is)_{\overline{n}|} = (\ddot{s}_{\overline{n}|} - n)/i$ — jangan tukar $s$ dan $\ddot{s}$.

---

## No. 15 — Topik 4 · Rasio Principal: Cari Suku Bunga

**Subtopik:** [[4.2 Amortization Method]]

**Inti soal:** Pinjaman 40 tahun, cicilan tetap. $PR_{20} = 166{,}59$ dan $PR_{25} = 244{,}78$. Cari suku bunga.

- Gunakan rasio: $PR_{25}/PR_{20} = (1+i)^{25-20} = (1+i)^5$
- $(1+i)^5 = 244{,}78/166{,}59 = 1{,}46933$
- $1+i = (1{,}46933)^{0{,}2} = 1{,}08$ → $i = 8{,}0\%$

**Kenapa:** Principal repaid tumbuh geometrik dengan faktor $(1+i)$ per periode — ini properti unik amortisasi. Tidak perlu cari $R$ atau pinjaman awal. Selisih periode ($25-20=5$) harus tepat.

---

## No. 16 — Topik 4 · Cari Pembayaran dari PR

**Subtopik:** [[4.2 Amortization Method]]

**Inti soal:** Pinjaman 30 tahun, $PR_5 = 159{,}68$ dan $PR_{10} = 213{,}73$. Cari pembayaran tetap $R$.

- Cari $i$ dari rasio: $(1+i)^5 = 213{,}73/159{,}68 = 1{,}33843$ → $i = 6\%$
- Cari $R$: $PR_5 = R \cdot v^{n-5+1} = R \cdot v^{26}$
- $v^{26} = (1{,}06)^{-26} = 0{,}21981$ → $R = 159{,}68/0{,}21981 \approx 726$

**Kenapa:** Eksponen di $PR_t = R \cdot v^{n-t+1}$ adalah **sisa periode** bukan periode yang sudah lewat. Untuk $t=5$, $n=30$: eksponen = $30-5+1 = 26$, bukan $25$.

---

## No. 17 — Topik 4 · Interest Portion: Cari $I_{20}$ dari $I_{10}$

**Subtopik:** [[4.2 Amortization Method]]

**Inti soal:** Pinjaman 30 tahun, $i = 7\%$. $I_{10} = 366{,}74$. Cari $I_{20}$.

- Dari $I_{10}$: $R(1 - v^{21}) = 366{,}74$ → $R = 366{,}74/0{,}75849 = 483{,}42$
- Hitung $I_{20} = R(1 - v^{11}) = 483{,}42 \times (1 - 0{,}47509)$
- $I_{20} \approx 253{,}80$

**Kenapa:** Interest portion tidak punya hubungan geometrik langsung antar periode — harus cari $R$ dulu, lalu hitung ulang. Jangan coba rasio $I_{20}/I_{10}$ seperti principal. Eksponen: $I_t = R(1 - v^{n-t+1})$.

---

## No. 18 — Topik 2 · Akumulasi Bulanan + Penarikan Geometrik Tahunan

**Subtopik:** [[2.3 Varying Annuities]]

**Inti soal:** Menabung $X$/bulan selama 25 tahun ($i^{(12)} = 6\%$). Saat pensiun, tarik $10.000$/tahun (naik $3\%$/tahun) selama 25 tahun. Suku bunga tetap sama. Cari $X$.

- Konversi ke efektif tahunan: $i_{eff} = (1{,}005)^{12} - 1 = 6{,}1678\%$
- PV penarikan geometrik di pensiun: $PV = 10{.}000 \times \dfrac{1-(1{,}03/1{,}06168)^{25}}{0{,}06168-0{,}03} = 168{.}550$
- FV akumulasi: $X \cdot s_{\overline{300}|0{,}5\%} = 168{.}550$ → $X \approx 242$

**Kenapa:** Pembayaran bulanan dan penarikan tahunan → harus konversi ke basis yang sama via efektif tahunan. Jangan pakai $6\%$ langsung untuk fase tahunan — itu nominal, bukan efektif.

---

## No. 19 — Topik 2 · Perpetuitas + Annuity: Cari $X$

**Subtopik:** [[2.2 Perpetuity]]

**Inti soal:** PV(perpetuitas $6.000$/tahun) + PV(perpetuitas $8.000$ setiap 4 tahun) = PV(anuitas $X$/tahun, 30 tahun). Suku bunga $6\%$ nominal konversi kuartalan.

- $i_{eff} = (1{,}015)^4 - 1 = 6{,}136\%$
- $PV_1 = 6{.}000/0{,}06136 = 97{.}780$; $PV_2 = 8{.}000/((1{,}06136)^4-1) = 29{.}826$
- $X = (PV_1 + PV_2)/a_{\overline{30}|6{,}136\%} \approx 9{.}400$

**Kenapa:** Perpetuitas yang bayar setiap $k$ tahun pakai penyebut $(1+i)^k - 1$, bukan $i$. Jangan pakai $i = 6\%$ langsung — harus konversi dulu ke efektif tahunan.

---

## No. 20 — Topik 2 · Gordon Growth Model: Cari Required Return

**Subtopik:** [[2.2 Perpetuity]]

**Inti soal:** Saham harga $39{,}35$, dividen berikutnya $1{,}00$ satu tahun lagi, tumbuh $6\%$ per tahun selamanya. Cari required return $i$.

- Gordon Growth Model: $P_0 = D_1/(i-g)$
- $39{,}35 = 1{,}00/(i - 0{,}06)$
- $i - 0{,}06 = 1/39{,}35 = 0{,}02541$ → $i \approx 8{,}54\%$

**Kenapa:** $i = D_1/P_0 + g$ — dividend yield + growth rate. Jangan lupa tambahkan $g$. $6\%$ itu growth rate dividen, bukan discount rate.

---

## No. 21 — Topik 3 · Durasi Modifikasi Portofolio

**Subtopik:** [[3.3 Duration (Macaulay and Modified)]]

**Inti soal:** Tiga obligasi dengan market value dan modified duration masing-masing. Cari modified duration portofolio keseluruhan.

- Total $V = 3{.}000 + 7{.}000 + 10{.}000 = 20{.}000$; bobot: $0{,}15$, $0{,}35$, $0{,}50$
- $D_{Mod,P} = 0{,}15 \times 4{,}615 + 0{,}35 \times 9{,}323 + 0{,}50 \times 19{,}085$
- $= 0{,}692 + 3{,}263 + 9{,}543 = 13{,}498 \approx 13{,}5$

**Kenapa:** Weighted average berdasarkan market value, bukan simple average, bukan berdasarkan tenor. Soal menyebut "senilai" = market value, bukan face value.

---

## No. 22 — Topik 3 · Durasi Macaulay Obligasi

**Subtopik:** [[3.3 Duration (Macaulay and Modified)]]

**Inti soal:** Obligasi 10 tahun, par $1.000$, kupon $8\%$, yield $6{,}5\%$. Hitung durasi Macaulay.

- Hitung harga: $P = 80 \cdot a_{\overline{10}|6{,}5\%} + 1{.}000 \cdot v^{10} = 1{.}107{,}83$
- Hitung $(Ia)_{\overline{10}|} = (\ddot{a}_{\overline{10}|} - 10v^{10})/i = 35{,}827$
- $D_{Mac} = (80 \times 35{,}827 + 10{.}000 \times v^{10})/1{.}107{,}83 \approx 7{,}4$

**Kenapa:** Jangan tukar Macaulay dengan modified duration — hubungannya $D_{Mod} = D_{Mac}/(1+i)$. Redemption value wajib masuk di pembilang ($10 \times 1{.}000 \times v^{10}$) dan penyebut (harga bond).

---

## No. 23 — Topik 5 · Realized Yield dengan Reinvestment Rate Berbeda

**Subtopik:** [[5.3 Yield Rate and Coupon Calculations]]

**Inti soal:** Obligasi 10 tahun, kupon $8\%$ semi-annual, yield $7{,}5\%$ semi-annual. Kupon diinvest ulang pada $7\%$ semi-annual. Cari realized yield nominal semi-annual.

**Tricky** — reinvestment rate ≠ yield.

- Harga beli: $P = 40 \cdot a_{\overline{20}|3{,}75\%} + 1{.}000 \cdot v^{20} = 1{.}034{,}88$
- $FV_{kupon} = 40 \cdot s_{\overline{20}|3{,}5\%} = 1{.}131{,}19$; total $FV = 2{.}131{,}19$
- $1{.}034{,}88(1+y)^{20} = 2{.}131{,}19$ → $y = 3{,}68\%$ per semester → $i^{(2)} = 7{,}36\%$

**Kenapa:** Kalau diasumsikan reinvestment rate = yield, realized yield = YTM dan soal trivial. Karena beda ($7\%$ vs $7{,}5\%$), harus hitung FV total secara eksplisit lalu solve untuk actual return.

---

## No. 24 — Topik 5 · Realized Yield Investasi Gabungan Dua Obligasi

**Subtopik:** [[5.3 Yield Rate and Coupon Calculations]]

**Inti soal:** Beli zero-coupon bond dan coupon bond sekaligus. Kupon bond diinvest ulang pada $6{,}5\%$ semi-annual. Cari realized effective annual yield gabungan.

- $P_1 = 1{.}000 \times (1{,}06)^{-5} = 747{,}26$ (zero-coupon)
- $P_2 = 40 \cdot a_{\overline{10}|3{,}5\%} + 1{.}000 \cdot v^{10}_{3{,}5\%} = 1{.}041{,}58$
- $FV_{total} = 1{.}000 + 1{.}000 + 40 \cdot s_{\overline{10}|3{,}25\%} = 2{.}463{,}87$; solve $(1{,}788{,}84)(1+y)^5 = 2{.}463{,}87$ → $y \approx 6{,}6\%$

**Kenapa:** Realized yield gabungan ≠ rata-rata yield dua bond. Hitung total cost, total FV (termasuk reinvested coupons), lalu solve. Zero-coupon tidak ada kupon untuk diinvest ulang — hanya FV redemption.

---

## No. 25 — Topik 5 · Amortisasi Diskonto: Yield Berubah di Tengah Tenor

**Subtopik:** [[5.2 Book Value, Premium and Discount Amortization]]

**Inti soal:** Obligasi 20 tahun, kupon $4\%$, yield $5\%$ untuk 12 tahun pertama lalu $6\%$ setelahnya. Hitung amortisasi diskonto pada kupon ke-8.

**Tricky** — harus hitung mundur dari $t=12$.

- Hitung $B_{12}$ dulu dengan yield $6\%$ (prospektif dari $t=12$ ke maturity)
- Hitung $B_7$ dan $B_8$ dengan yield $5\%$ menggunakan $B_{12}$ sebagai lump sum
- $\text{Amort}_8 = i_1 \cdot B_7 - Fr = 0{,}05 \times 4{.}297 - 200 = +14{,}85$ → dilaporkan $-15$ (konvensi diskonto)

**Kenapa:** Yield berubah di $t=12$ → book value **wajib** dihitung bertingkat: $B_{12}$ dulu pakai yield $6\%$, baru $B_t$ pakai yield $5\%$ dengan $B_{12}$ sebagai lump sum. Tanda negatif karena konvensi "akumulasi diskonto" untuk discount bond.

---

## No. 26 — Topik 5 · Callable Bond: Cari Par Value dan Harga Non-Callable

**Subtopik:** [[5.1 Bond Pricing]]

**Inti soal:** Obligasi callable 15 tahun, kupon $5\%$ semi-annual, harga $2.345$, callable at par $X$ mulai tahun 10, minimum yield $4\%$ semi-annual. Kelvin punya versi non-callable identik. Cari harga Kelvin.

- Callable premium bond → worst case = earliest call (semester 20): $2{.}345 = X(0{,}025 \cdot a_{\overline{20}|2\%} + v^{20}_{2\%})$ → $X = 2{.}168$
- Harga Kelvin: $P = 54{,}2 \cdot a_{\overline{30}|2\%} + 2{.}168 \cdot v^{30}_{2\%} = 2{.}411$
- Yield tetap $j = 2\%$ per semester

**Kenapa:** Untuk callable premium bond, worst-case yield dihitung dari earliest call date. Par value $X$ tidak diketahui langsung — harus dicari dari harga dan yield. Non-callable pakai full 30 semester.

---

## No. 27 — Topik 3 · Swap Rate → Spot Rate yang Hilang

**Subtopik:** [[3.1 Spot Rates and Forward Rates]]

**Inti soal:** Diketahui $s_1 = 5{,}2\%$, $s_3 = 7{,}1\%$, dan swap rate 3-tahun = $7\%$. Cari $s_2$.

- Swap rate = coupon rate par bond: $\frac{0{,}07}{1{,}052} + \frac{0{,}07}{(1+s_2)^2} + \frac{1{,}07}{(1{,}071)^3} = 1$
- Hitung dua suku yang diketahui: $0{,}06654 + 0{,}87102 = 0{,}93756$
- $\frac{0{,}07}{(1+s_2)^2} = 0{,}06244$ → $(1+s_2)^2 = 1{,}12107$ → $s_2 \approx 5{,}9\%$

**Kenapa:** Swap rate = coupon rate dari bond yang dijual at par (par bond yield). Bukan spot rate itu sendiri. Pembayaran terakhir = $1 + R$ (principal + coupon). Gunakan par bond equation untuk relate ke spot rates.

---

## No. 28 — Topik 6 · Put-Call Parity dengan Continuous Dividends

**Subtopik:** [[6.1 Options – Call and Put]]

**Inti soal:** Saham $85$, dividen kontinu $\delta = 0{,}02$, risk-free $r = 0{,}04$, $T = 0{,}5$. Call $4{,}91$, put $4{,}56$. Cari strike price $K$.

- Terapkan: $C - P = S_0 e^{-\delta T} - K e^{-rT}$
- $0{,}35 = 85 \cdot e^{-0{,}01} - K \cdot e^{-0{,}02} = 84{,}154 - 0{,}98020K$
- $K = (84{,}154 - 0{,}35)/0{,}98020 \approx 85{,}5$

**Kenapa:** Ada continuous dividend → $S_0$ harus dikali $e^{-\delta T}$ (prepaid forward price). Tanpa adjustment ini → pakai $S_0$ langsung dan jawaban salah. $\delta$ di sini = dividend yield, bukan force of interest.

---

## No. 29 — Topik 6 · Put-Call Parity: Cari Harga Put (No Dividends)

**Subtopik:** [[6.1 Options – Call and Put]]

**Inti soal:** Saham $100$, $r = 5\%$ continuous, no dividends. Call Eropa $K=95$, $T=0{,}5$, harga $8$. Cari harga put wajar.

- $P = C - S_0 + Ke^{-rT} = 8 - 100 + 95 \cdot e^{-0{,}025}$
- $95 \times 0{,}97531 = 92{,}654$
- $P = 8 - 100 + 92{,}654 = 0{,}65$

**Kenapa:** "Tingkat bunga bebas risiko terus-menerus" → wajib pakai $e^{-rT}$, bukan $(1+r)^{-T}$. Tidak ada dividend → formula standar tanpa $e^{-\delta T}$.

---

## No. 30 — Topik 1 · ROI = Capital Gain + Dividend

**Subtopik:** [[1.5 NPV, IRR, DWRR, TWRR]]

**Inti soal:** Beli 200 lembar saham di $2.450$, dapat dividen $120$/lembar, jual di $2.680$. Cari ROI.

- Capital gain per lembar $= 2{.}680 - 2{.}450 = 230$
- Total gain per lembar $= 230 + 120 = 350$
- $ROI = 350 / 2{.}450 = 14{,}3\%$

**Kenapa:** ROI = (total gain) / (initial investment). Tiga jebakan pilihan jawaban: $9{,}4\%$ = hanya capital gain; $4{,}9\%$ = hanya dividend yield; $114{,}3\%$ = (harga jual + dividen) / harga beli tanpa mengurangi harga beli.

---

## Tabel Ringkasan Topik

| No. | Topik | Subtopik |
|-----|-------|----------|
| 1 | Topik 3 — Struktur Jangka Waktu | Spot & Forward Rates |
| 2 | Topik 1 — TVM | Nominal & Force of Interest |
| 3 | Topik 1 — TVM | Equation of Value |
| 4 | Topik 1 — TVM | Accumulation & PV |
| 5 | Topik 1 — TVM | TWRR |
| 6 | Topik 1 — TVM | DWRR |
| 7 | Topik 1 — TVM | Nominal & Force of Interest |
| 8 | Topik 2 — Anuitas | Varying Annuities (Geometric) |
| 9 | Topik 2 — Anuitas | Annuity-Immediate |
| 10 | Topik 2 — Anuitas | Varying Annuities (Arithmetic) |
| 11 | Topik 2 — Anuitas | Annuity-Immediate (Multi-phase) |
| 12 | Topik 2 — Anuitas | Varying Annuities (Increasing+Level) |
| 13 | Topik 2 — Anuitas | Varying Annuities (Annuity-Due + Geometric) |
| 14 | Topik 2 — Anuitas | Varying Annuities (Increasing FV) |
| 15 | Topik 4 — Pinjaman | Amortization: Cari $i$ |
| 16 | Topik 4 — Pinjaman | Amortization: Cari $R$ |
| 17 | Topik 4 — Pinjaman | Amortization: Interest Portion |
| 18 | Topik 2 — Anuitas | Varying Annuities (Geometric Withdrawal) |
| 19 | Topik 2 — Anuitas | Perpetuity (k-year) |
| 20 | Topik 2 — Anuitas | Perpetuity (Gordon Growth Model) |
| 21 | Topik 3 — Struktur Jangka Waktu | Modified Duration Portofolio |
| 22 | Topik 3 — Struktur Jangka Waktu | Macaulay Duration |
| 23 | Topik 5 — Obligasi | Realized Yield (Reinvestment) |
| 24 | Topik 5 — Obligasi | Realized Yield Gabungan |
| 25 | Topik 5 — Obligasi | Book Value + Discount Amortization |
| 26 | Topik 5 — Obligasi | Callable Bond Pricing |
| 27 | Topik 3 — Struktur Jangka Waktu | Swap Rate → Spot Rate |
| 28 | Topik 6 — Derivatif | Put-Call Parity (Continuous Dividend) |
| 29 | Topik 6 — Derivatif | Put-Call Parity (No Dividend) |
| 30 | Topik 1 — TVM | ROI (Return on Investment) |

### Distribusi Topik

| Topik | Jumlah Soal | No. Soal |
|-------|------------|----------|
| Topik 1 — TVM | 6 | 2, 3, 4, 5, 6, 7, 30 |
| Topik 2 — Anuitas | 10 | 8, 9, 10, 11, 12, 13, 14, 18, 19, 20 |
| Topik 3 — Struktur Jangka Waktu | 4 | 1, 21, 22, 27 |
| Topik 4 — Pinjaman | 3 | 15, 16, 17 |
| Topik 5 — Obligasi | 4 | 23, 24, 25, 26 |
| Topik 6 — Derivatif | 2 | 28, 29 |
| Topik 7 — CAPM | 0 | — |

> **Catatan:** Topik 2 (Anuitas) mendominasi soal Mei 2025 dengan 10 soal, hampir sepertiga ujian. Fokus khusus pada varying annuities (aritmatika + geometrik) dan multi-phase accumulation.
