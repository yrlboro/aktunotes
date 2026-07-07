# Flash Study — CF1 Oktober 2024
> 30 soal · 7 topik · Format: Topik · Subtopik · Inti Soal · Cara Pengerjaan · Alasan

---

## No. 1 — Topik 1 · Akumulasi dengan Suku Bunga Efektif Berubah-ubah

**Subtopik:** Interest Rates & Discount Rates / Accumulation

**Inti soal:** Uang udah tumbuh sampai tahun ke-4. Suku bunganya beda tiap tahun. Cari nilai uang itu di tahun ke-7.

- Identifikasi $i_t$ untuk $t = 5, 6, 7$ (substitusi $t$ ke rumus)
- Hitung $A(7) = A(4) \cdot (1+i_5)(1+i_6)(1+i_7)$

**Kenapa:** Akumulasi dengan suku bunga berbeda per tahun = produk faktor $(1+i_t)$, bukan penjumlahan dan bukan rata-rata. Indeks mulai dari $t = m+1$, bukan $t = m$.

---

## No. 2 — Topik 1 · Equation of Value & Faktorisasi

**Subtopik:** Cash Flow Equations

**Inti soal:** Dua rangkaian pembayaran yang berbeda waktu punya PV yang sama. Cari PV itu ($K$) — tapi kita harus cari $v$ dulu dari syarat kesamaan itu.

- Set PV rangkaian (i) = PV rangkaian (ii): $121(1+v) = 144v^2(1+v)$
- Faktorkan dan bagi dengan $(1+v)$ → $v = 11/12$
- Substitusi kembali ke salah satu rangkaian untuk dapat $K$

**Kenapa:** Angka yang merupakan kuadrat sempurna (121 = 11², 144 = 12²) → sinyal kuat untuk difaktorkan. Tanpa faktorisasi, persamaan jadi kubik yang sulit diselesaikan manual.

---

## No. 3 — Topik 1 · Nominal Discount Rate & Multiple Periods

**Subtopik:** Effective, Nominal, and Force of Interest

**Inti soal:** Ada dua deposit di waktu berbeda, suku bunga ganti di tengah jalan. Diketahui nilai akhir totalnya. Cari suku bunga di fase pertama (yang dinyatakan sebagai discount rate nominal).

- Hitung faktor akumulasi periode kedua: $(1{,}03)^{40}$ (tahun 10–30) dan $(1{,}03)^{30}$ (tahun 15–30)
- Set up equation of value di $t=30$: deposit 100 juta (× faktor diskon nominal × faktor bunga nominal) + deposit 200 juta (× faktor bunga nominal) = 1.000 juta
- Isolasi faktor diskon nominal → hitung $d$ dengan logaritma

**Kenapa:** Diskon nominal kuartalan → faktor akumulasi = $(1 - d/4)^{-40}$, **bukan** $(1 + d/4)^{40}$. Dua deposit masuk di waktu berbeda (t=0 dan t=15), jadi dihitung terpisah.

---

## No. 4 — Topik 1 · Force of Interest → Suku Bunga Efektif

**Subtopik:** Effective, Nominal, and Force of Interest

**Inti soal:** Dua dana tumbuh dengan cara beda — satu pakai force of interest, satu pakai suku bunga efektif biasa. Keduanya sama nilainya di tahun ke-9. Cari suku bunga efektif itu.

- Integralkan $\delta_t = 0{,}5(1+t)^{-2}$ dari 0 ke 9 → hasil = 0,45
- Faktor akumulasi Dana X = $e^{0{,}45}$
- Samakan dengan $(1+i)^9$, selesaikan: $i = e^{0{,}05} - 1 \approx 5{,}13\%$

**Kenapa:** Force of interest memerlukan integrasi untuk mendapat faktor akumulasi. Hasil integral harus di-eksponenkan ($e^{\int \delta_t dt}$) — langsung dipakai sebagai rate adalah kesalahan klasik.

---

## No. 5 — Topik 1 · Dua Force of Interest Linear, Cari Titik Kesamaan

**Subtopik:** Effective, Nominal, and Force of Interest

**Inti soal:** Dua dana tumbuh dengan force of interest yang beda (sama-sama linear dalam $t$). Diketahui di $t=0$ mereka sama. Cari kapan mereka bakal sama lagi.

- Samakan integral kedua force of interest dari 0 ke $n$
- $an + bn^2/2 = gn + hn^2/2$
- Bagi dengan $n > 0$ → $n = 2(a-g)/(h-b)$

**Kenapa:** "Dana A = Dana B" artinya *akumulasi* sama, bukan $\delta$ sama. Integral force of interest linear menghasilkan persamaan kuadratik dalam $n$ dengan dua akar: $n=0$ (trivial) dan $n > 0$ (yang diminta).

---

## No. 6 — Topik 2 · Annuity-Due + Inflasi Harga Target

**Subtopik:** Annuity-Due, Accumulated Value

**Inti soal:** Seseorang menabung rutin di awal tahun untuk beli barang 10 tahun lagi. Harganya bakal naik karena inflasi. Sebagian tabungan sudah ada, sebagian lagi ditambah $X$ — cari $X$.

- Hitung target harga di t=10: $200(1{,}04)^{10}$
- Hitung AV pembayaran 20 juta (t=0 s/d t=5) ke t=10: $20 \cdot \ddot{s}_{\overline{6}|10\%} \times (1{,}1)^4$
- Hitung AV pembayaran $X$ (t=3 s/d t=5) ke t=10: $X \cdot \ddot{s}_{\overline{3}|10\%} \times (1{,}1)^4$
- Set up equation of value, selesaikan $X$

**Kenapa:** "Awal tahun ke-k" = $t = k-1$. Pembayaran di awal tahun → annuity-**due** ($\ddot{s}$), bukan immediate. Harga target harus disesuaikan inflasi, bukan pakai harga nominal sekarang.

---

## No. 7 — Topik 1 · DWRR = 0% untuk Cari X, lalu Hitung TWRR

**Subtopik:** NPV, IRR, DWRR, TWRR

**Inti soal:** Ada investasi dengan dua deposit di tengah tahun. Diketahui DWRR = 0% — pakai info itu untuk cari besar depositnya. Lalu hitung TWRR (ukuran performa manajer investasi).

- DWRR = 0% → interest earned = 0 → $B_1 - B_0 - \sum C_k = 0$ → selesaikan $X$
- Bagi periode menjadi 3 sub-periode berdasarkan waktu cash flow
- TWRR: kalikan rasio return tiap sub-periode

**Kenapa:** DWRR = 0% punya shortcut: selisih saldo = total deposit (interest earned = 0), sehingga $X$ langsung bisa ditemukan tanpa perlu menghitung denominator. TWRR tidak terpengaruh besarnya/timing deposit, hanya performa per sub-periode.

---

## No. 8 — Topik 2 · Penjumlahan $\sum s_{\overline{t}|}$ dengan Identitas Tertutup

**Subtopik:** Annuity-Immediate and Annuity-Due

**Inti soal:** Hitung jumlah dari 10 buah accumulated value anuitas ($s_{\overline{1}|} + s_{\overline{2}|} + \cdots + s_{\overline{10}|}$). Kelihatan harus dihitung satu-satu, tapi ada cara cepatnya.

- Gunakan identitas: $\sum_{t=1}^{n} s_{\overline{t}|} = (\ddot{s}_{\overline{n}|} - n)/i$
- Hitung $\ddot{s}_{\overline{10}|10\%} = s_{\overline{10}|} \times 1{,}1$
- Substitusi

**Kenapa:** Menghitung $s_{\overline{t}|}$ satu per satu (brute force) berisiko error kumulatif dan makan waktu. Identitas tertutup jauh lebih efisien. Jangan tukar $s$ dan $\ddot{s}$.

---

## No. 9 — Topik 2 · Integral dari Continuous Annuity

**Subtopik:** Continuous Annuities

**Inti soal:** Dikasih nilai integral dari continuous annuity (bukan anuitasnya langsung). Cari nilai anuitasnya sendiri.

- Tulis $\bar{a}_{\overline{t}|} = (1 - e^{-\delta t})/\delta$ dan integralkan dari 0 ke $n$
- Hasil: $(n - \bar{a}_{\overline{n}|})/\delta = 100$
- Selesaikan: $\bar{a}_{\overline{n}|} = n - 100\delta$

**Kenapa:** $\int \bar{a}_{\overline{t}|} dt$ bukan sama dengan $\bar{a}_{\overline{n}|}$ — itu "integral dari anuitas", beda konsep. Harus integralkan eksplisit, dan kenali bahwa hasilnya bisa dinyatakan kembali dalam bentuk $\bar{a}_{\overline{n}|}$ itu sendiri.

---

## No. 10 — Topik 2 · Annuity-Due Ganda → Cari $i$ via Relasi $\ddot{a}_{\overline{2n}|}$

**Subtopik:** Annuity-Immediate and Annuity-Due

**Inti soal:** Dikasih dua nilai annuity-due untuk tenor $n$ dan $2n$. Cari suku bunga $i$ yang menghasilkan dua nilai itu sekaligus.

- Gunakan relasi: $\ddot{a}_{\overline{2n}|} = \ddot{a}_{\overline{n}|}(1 + v^n)$ → cari $v^n = 0{,}6$
- Dari $\ddot{a}_{\overline{n}|} = (1-v^n)/d$ → cari $d$
- Konversi $d$ ke $i$: $i = d/(1-d)$

**Kenapa:** Jika dua nilai $\ddot{a}$ diberikan untuk $n$ dan $2n$, cara paling efisien adalah pakai relasi rasio untuk isolasi $v^n$. Lalu pakai $\ddot{a}_{\overline{n}|}$ untuk cari $d$ (bukan $i$, karena penyebutnya $d$).

---

## No. 11 — Topik 5 · Harga Obligasi → Cari Par Value

**Subtopik:** Bond Pricing

**Inti soal:** Semua info obligasi dikasih kecuali par value-nya. Harga beli sudah diketahui. Balikkan formula harga obligasi untuk cari par.

- Hitung kupon per periode dari rate kupon (kuartalan): $Fr = F \times 2\%$
- Hitung PV obligasi: $P = Fr \cdot a_{\overline{40}|3\%} + 160 \cdot v^{40}$
- Set $P = 86{,}040$ dan selesaikan $F$

**Kenapa:** Redemption value ($C$) dan par value ($F$) bisa berbeda. Kupon dihitung dari $F$, bukan dari $C$. Hitung semua per periode (40 periode kuartalan untuk 10 tahun).

---

## No. 12 — Topik 5 · Harga Obligasi dengan Redemption Berbeda via Premium/Discount Formula

**Subtopik:** Bond Pricing

**Inti soal:** Obligasi yang sama (tenor, kupon, yield sama) tapi redemption value berubah dari 100 jadi 120. Diketahui harga lama, cari harga baru — tanpa perlu tahu $n$ eksplisit.

- Dari Kasus 1 ($F = C = 100$, $P = 130$): gunakan premium formula → cari $a_{\overline{n}|3\%} = 20$
- Untuk Kasus 2 ($C = 120$): substitusi ke formula dengan $C$ baru, pakai $a_{\overline{n}|3\%}$ yang sama

**Kenapa:** Saat tenor sama dan yield sama, $a_{\overline{n}|}$ tidak berubah. Formula premium/discount memisahkan peran $F$, $C$, dan $j$ sehingga bisa dipakai dua kali untuk eliminasi $n$ yang tidak diketahui.

---

## No. 13 — Topik 5 · Amortisasi Premium → Book Value Prospektif

**Subtopik:** Book Value, Premium and Discount Amortization

**Inti soal:** Diketahui seberapa besar premium yang diamortisasi di tahun ke-10. Dari situ, cari book value obligasi di akhir tahun ke-10.

- Dari $\text{Amort}_{10} = (Fr - Ci) \cdot v^9 = 2$ → selesaikan $Fr$
- Hitung $B_{10} = C + (Fr - Ci) \cdot a_{\overline{8}|5\%}$

**Kenapa:** Formula amortisasi premium $\text{Amort}_t = (Fr - Ci) \cdot v^{n-t+1}$ memberi akses ke $Fr$ tanpa tahu $P$ awal. Setelah $Fr$ diketahui, book value dihitung prospektif (sisa anuitas + PV redemption).

---

## No. 14 — Topik 5 · Obligasi dengan Kupon Meningkat Geometris

**Subtopik:** Bond Pricing

**Inti soal:** Obligasi biasa, tapi kuponnya naik 4% tiap periode. Cari kupon pertama $X$.

- Interpretasi: kupon per semester ke-$t$ = $X(1{,}04)^{t-1}$ (meningkat 4% tiap semester, bukan tiap tahun)
- Hitung geometric series: $\sum_{t=1}^{20}(1{,}04)^{t-1} v^t = v(1-w^{20})/(1-w)$ di mana $w = 1{,}04/1{,}06$
- Set up equation of value, selesaikan $X$

**Kenapa:** "Kupon meningkat 4% per tahun" tapi dibayar semi-annual → kenaikan terjadi tiap semester. Geometric series dengan rasio $w = (1+g) \cdot v_{periode}$. Jika salah interpretasi (per tahun), hasilnya tidak akan cocok dengan opsi.

---

## No. 15 — Topik 3 · Harga Obligasi dengan Forward Rates + Expected Value

**Subtopik:** Spot Rates and Forward Rates

**Inti soal:** Suku bunga ke depan tidak pasti — ada dua skenario yang sama-sama mungkin terjadi. Cari ekspektasi harga obligasi hari ini.

- Hitung PV obligasi untuk tiap skenario secara terpisah menggunakan forward rate sebagai discount factor kumulatif
- Rata-ratakan PV dua skenario (probabilitas sama = 50%)

**Kenapa:** Tidak boleh rata-rata forward rate dulu lalu discount — discounting bersifat non-linear. Harus hitung PV per skenario, baru ambil expected value.

---

## No. 16 — Topik 3 · Modified Duration Obligasi Standar

**Subtopik:** Duration (Macaulay and Modified)

**Inti soal:** Obligasi standar dengan kupon dan yield diketahui. Cari modified duration — ukuran seberapa sensitif harga obligasi terhadap perubahan suku bunga.

- Hitung PV tiap cash flow: $C_t \cdot v^t$
- $D_{Mac} = \sum t \cdot PV(C_t) / P$
- $D_{Mod} = D_{Mac} / (1+i)$

**Kenapa:** Modified duration = Macaulay duration dibagi $(1+i)$. Sering dilaporkan Macaulay sebagai jawabannya — perhatikan soal meminta yang mana. Cash flow tahun terakhir harus termasuk par value.

---

## No. 17 — Topik 1 · NPV dengan Fisher Equation (Market Rate)

**Subtopik:** Cash Flow Equations and Inflation

**Inti soal:** Dikasih real rate dan inflasi. Hitung NPV proyek menggunakan market rate (gabungan keduanya via Fisher equation).

- Hitung market rate: $i_{market} = (1+i_{real})(1+\pi) - 1$
- Hitung NPV: $\sum C_t / (1+i_{market})^t$

**Catatan:** Kunci jawaban resmi PAI (a) = −23,21 tidak konsisten dengan perhitungan Fisher exact yang menghasilkan −19,31. Prinsip: gunakan Fisher exact, bukan aproksimasi $r + \pi$.

---

## No. 18 — Topik 3 · Forward Rate dari Zero-Coupon Bond

**Subtopik:** Spot Rates and Forward Rates

**Inti soal:** Dikasih harga dua zero-coupon bond dengan tenor berbeda. Cari forward rate untuk tahun ke-2 — berapa return yang "dijanjikan" pasar untuk uang yang dipinjamkan dari t=1 ke t=2.

- Spot rate: $s_1 = F/P_1 - 1$; $(1+s_2)^2 = F/P_2$
- Forward rate shortcut: $f_{1,2} = P_1/P_2 - 1$

**Kenapa:** Untuk ZCB, forward rate = rasio harga ZCB tenor pendek terhadap tenor panjang, dikurangi 1. Ini shortcut yang sangat efisien dibanding menghitung spot rates satu per satu.

---

## No. 19 — Topik 3 · Rasio Modified Convexity / Modified Duration

**Subtopik:** Convexity

**Inti soal:** Hitung rasio convexity terhadap modified duration dari dua cash flow — ukuran seberapa "melengkung" sensitivitas harga dibanding yang linear.

- Hitung PV tiap cash flow
- $D_{Mod} = \sum t \cdot PV(C_t) / [(1+i) \cdot P]$
- $C_{Mod} = \sum t(t+1) \cdot PV(C_t) / [(1+i)^2 \cdot P]$
- Hitung rasio $C_{Mod}/D_{Mod}$

**Kenapa:** Modified convexity pakai $t(t+1)$ dan dibagi $(1+i)^2$, bukan $t^2$ (itu Macaulay convexity). Pastikan numerator dan denominator menggunakan definisi yang konsisten (keduanya "modified").

---

## No. 20 — Topik 4 · Amortisasi dengan Frekuensi Pembayaran Setiap 2 Tahun

**Subtopik:** Amortization Method

**Inti soal:** Pinjaman dicicil setiap dua tahun (bukan tahunan). Diketahui bunga di cicilan ke-4. Cari pokok yang dibayar di cicilan ke-7 — tanpa tahu berapa total cicilan.

- Konversi rate ke per 2 tahun: $j = (1{,}13)^2 - 1$
- Dari $I_4 = R(1 - v^{n-3})$ → selesaikan $n$ (jumlah pembayaran)
- $P_7 = R \cdot v^{n-6}$

**Kenapa:** Cicilan setiap 2 tahun → rate harus dikompound ke basis 2 tahun. Formula bunga dan pokok ke-$t$ menggunakan $v$ per periode pembayaran.

---

## No. 21 — Topik 4 · Selisih Total Pembayaran: Lump Sum vs Level Payments

**Subtopik:** Amortization Method

**Inti soal:** Peminjam punya dua pilihan melunasi utang: bayar sekaligus di akhir (lump sum) atau cicil rutin 10 tahun. Diketahui selisih total nominalnya. Cari besar pinjaman awal.

- Lump sum di t=10: $X(1{,}06)^{10}$
- Total level payments: $10 \times (X / a_{\overline{10}|6\%})$
- Selisih = 356,54 → selesaikan $X$

**Kenapa:** Soal membandingkan **total nominal yang dibayar** (bukan present value). PV keduanya selalu sama (= $X$). Yang berbeda hanyalah jumlah total yang dikeluarkan. Jangan hitung PV selisih.

---

## No. 22 — Topik 4 · Kombinasi Bunga Periode $t$ dan Pokok Periode $t+1$

**Subtopik:** Amortization Method

**Inti soal:** Dari tabel amortisasi pinjaman $a_{\overline{n}|}$, ambil komponen bunga periode $t$ dan komponen pokok periode $t+1$ — jumlahkan dan nyatakan dalam bentuk tertutup.

- $I_t = 1 - v^{n-t+1}$; $P_{t+1} = v^{n-t}$
- $X = I_t + P_{t+1} = 1 + v^{n-t}(1-v) = 1 + v^{n-t} \cdot d$

**Kenapa:** Pinjaman $= a_{\overline{n}|}$ → level payment $= 1$. Identitas $1 - v = d$ (discount rate efektif) kunci untuk menyederhanakan hasilnya ke opsi jawaban. Jangan campur periode $t$ dan $t+1$.

---

## No. 23 — Topik 4 · Sinking Fund dengan Pembayaran ke Kreditur > Bunga Pinjaman

**Subtopik:** Sinking Fund Method

**Inti soal:** Pinjaman dilunasi pakai sinking fund, tapi pembayaran ke kreditur ternyata lebih besar dari bunga murni — artinya ada pelunasan pokok parsial juga. Cari berapa yang harus disetorkan ke sinking fund.

- Hitung outstanding balance di t=12 secara retrospektif: $OB_{12} = 80(1{,}08)^{12} - 8 \cdot s_{\overline{12}|8\%}$
- Sinking fund menutup sisa: $X \cdot s_{\overline{12}|4\%} = OB_{12}$

**Kenapa:** Pembayaran ke kreditur (8 juta) > bunga pinjaman (6,4 juta = 8% × 80) → ada pelunasan pokok parsial tiap tahun. SF tidak perlu menutup seluruh 80 juta, hanya sisa outstanding balance di akhir tenor.

---

## No. 24 — Topik 4 · Amortisasi vs Sinking Fund untuk Cari Rate Bersama

**Subtopik:** Sinking Fund Method

**Inti soal:** Dua orang ambil pinjaman sama besar, satu pakai amortisasi, satu pakai sinking fund. Dari info total pembayaran salah satunya, cari rate pinjaman — lalu pakai rate itu untuk hitung besar pinjaman.

- Jennie: $i + 1/s_{\overline{17}|4{,}62\%} = 0{,}10$ → selesaikan $i \approx 6\%$
- Jason: $L = 5 \cdot a_{\overline{17}|6\%}$

**Kenapa:** Kedua peminjam menggunakan rate pinjaman yang sama ($i$). Persamaan total pembayaran Jennie (bunga + SF deposit = 10% pinjaman) memberikan satu persamaan dengan satu unknown ($i$), karena $s_{\overline{17}|4{,}62\%}$ bisa dihitung langsung.

---

## No. 25 — Topik 6 · Status Moneyness Opsi (In/At/Out-of-the-Money)

**Subtopik:** Options — Call and Put

**Inti soal:** Dikasih tiga opsi (call dan put). Tentukan mana yang in-the-money — yaitu opsi yang langsung menguntungkan jika dieksekusi sekarang.

- Call ITM: $S > K$
- Put ITM: $S < K$
- At-the-money ($S = K$) ≠ in-the-money
- Premi tidak memengaruhi status moneyness

---

## No. 26 — Topik 6 · Put-Call Parity untuk Cari Risk-Free Rate

**Subtopik:** Forwards and Futures

**Inti soal:** Dikasih forward price, harga call, dan harga put dengan strike yang sama. Gunakan hubungan put-call parity untuk balikkan dan cari risk-free rate.

- $C - P = (F_{0,T} - K)/(1+r)$
- $23{,}86 - 11{,}79 = (163{,}13 - 150)/(1+r)$
- Selesaikan $r$

**Kenapa:** Jika forward price, call, dan put dengan strike sama diberikan → langsung pakai put-call parity dalam versi forward. Ingat bahwa $(F-K)$ harus didiskon, tidak langsung sama dengan $C - P$.

---

## No. 27 — Topik 6 · Profit Portfolio Saham + Put (Protective Put)

**Subtopik:** Options — Call and Put, Option Strategies

**Inti soal:** Beli dua saham sekaligus asuransinya (put option). Di akhir kontrak, harga kedua saham sama. Hitung total profit dari seluruh posisi.

- FV biaya awal tiap saham: $(S_0 + \text{premi put}) \times (1 + r_{semester})$
- Payoff tiap saham: $S_T + \max(K - S_T, 0)$
- Profit = payoff − FV biaya awal; jumlahkan keduanya

**Kenapa:** "Profit at expiration" = payoff minus future value semua biaya awal (bukan biaya awal mentah). Rate nominal semi-annual 8% → 4% per semester. Hitung profit saham A dan B secara terpisah lalu dijumlahkan.

---

## No. 28 — Topik 7 · CAPM: Expected Return Saham

**Subtopik:** CAPM and Factor Models

**Inti soal:** Dikasih risk-free rate, expected market return, dan beta saham. Pakai CAPM untuk hitung berapa return yang seharusnya dihasilkan saham itu.

- $E(R_i) = R_f + \beta_i [E(R_m) - R_f]$
- Pastikan yang dikalikan $\beta$ adalah **market risk premium** $= E(R_m) - R_f$, bukan $E(R_m)$ langsung

---

## No. 29 — Topik 7 · Expected Return dan Beta Portofolio (Weighted Average)

**Subtopik:** Mean-Variance Portfolio Theory

**Inti soal:** Portofolio terdiri dari 4 saham dengan nilai investasi berbeda. Hitung expected return dan beta portofolio — keduanya adalah rata-rata tertimbang berdasarkan nilai investasi.

- Bobot $w_i$ = nilai investasi / total investasi
- $E(R_P) = \sum w_i E(R_i)$; $\beta_P = \sum w_i \beta_i$

**Kenapa:** Bobot ditentukan oleh nilai investasi, bukan jumlah saham yang sama. Pakai equal weight (1/4) adalah jebakan yang menghasilkan angka berbeda (13,25% vs 14,9%).

---

## No. 30 — Topik 7 · Total Uang Diterima dari Penjualan Saham

**Subtopik:** Mean-Variance Portfolio Theory

**Inti soal:** Beli saham, dapat dividen, lalu jual. Soal tanya berapa total uang yang masuk ke kantong — bukan berapa untungnya.

- Total diterima = $n \times (P_1 + D)$ = hasil jual saham + dividen
- Bukan profit (profit = total diterima − modal awal)

**Kenapa:** "Uang yang diterima" ≠ "profit". Soal meminta total cash yang masuk (harga jual + dividen), bukan keuntungan bersih. Jangan lupa dividen juga diterima bersamaan dengan hasil jual.

---

## Ringkasan Topik

| Topik | Soal | Subtopik yang Muncul |
|:------|:-----|:---------------------|
| Topik 1 — TVM | 1, 2, 3, 4, 5, 7, 17 | Akumulasi, Nominal/Diskon, Force of Interest, DWRR/TWRR, Inflasi |
| Topik 2 — Anuitas | 6, 8, 9, 10 | Annuity-due, Continuous, Sum identities |
| Topik 3 — Term Structure | 15, 16, 18, 19 | Forward rates, Duration, Modified Duration, Convexity |
| Topik 4 — Pinjaman | 20, 21, 22, 23, 24 | Amortisasi, Sinking Fund, perbandingan metode |
| Topik 5 — Obligasi | 11, 12, 13, 14 | Harga, Premium/Discount formula, Book Value, Geometric coupon |
| Topik 6 — Derivatif | 25, 26, 27 | Moneyness, Put-Call Parity, Protective Put, Profit |
| Topik 7 — Portofolio | 28, 29, 30 | CAPM, Beta portofolio, Return saham |
