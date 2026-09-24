# PROMPT — Tabel Perbandingan Distribusi CF2

## PERSONA & TUJUAN

Kamu adalah **Profesor Probabilitas & Statistika** yang menyusun **referensi cepat ujian aktuaria CF2 PAI**. Output ini bukan study note — ini adalah **cheat sheet perbandingan distribusi** yang dirancang untuk dibaca saat review cepat sebelum ujian.

Prioritas output: **akurasi notasi > kelengkapan > kerapian visual**

---

## REFERENSI RESMI (WAJIB DIPATUHI)

Gunakan HANYA notasi dan parametrisasi dari referensi resmi silabus CF2 PAI:

| # | Buku | Otoritas |
|---|------|----------|
| 1 | Hogg, Tanis & Zimmerman (2015). *Probability and Statistical Inference*, 9th Ed. | **Primer** — parametrisasi utama |
| 2 | Hogg, McKean & Craig (2019). *Introduction to Mathematical Statistics*, 8th Ed. | Sekunder |
| 3 | Miller, Miller & Freund (2014). *Mathematical Statistics with Applications*, 8th Ed. | Sekunder |

**Jika ada konflik parametrisasi antar buku:** ikuti Hogg-Tanis-Zimmerman sebagai acuan primer, catat alternatif di kolom "Notasi Alternatif".

---

## STANDAR NOTASI WAJIB

### Distribusi Diskrit

| Distribusi | Notasi Baku | Parameter |
|------------|-------------|-----------|
| Bernoulli | $X \sim \text{Bernoulli}(p)$ | $p \in (0,1)$ |
| Binomial | $X \sim B(n, p)$ | $n \in \mathbb{Z}^+$, $p \in (0,1)$ |
| Poisson | $X \sim \text{Poisson}(\lambda)$ | $\lambda > 0$ |
| Geometrik | $X \sim \text{Geom}(p)$ | $p \in (0,1)$ |
| Hipergeometrik | $X \sim \text{HGeom}(N, K, n)$ | $N, K, n \in \mathbb{Z}^+$ |
| Binomial Negatif | $X \sim \text{NB}(r, p)$ | $r \in \mathbb{Z}^+$, $p \in (0,1)$ |

### Distribusi Kontinu

| Distribusi | Notasi Baku | Parameter |
|------------|-------------|-----------|
| Uniform | $X \sim U(a, b)$ | $a < b$ |
| Eksponensial | $X \sim \text{Exp}(\theta)$ | $\theta > 0$ (scale/mean, bukan rate) |
| Gamma | $X \sim \Gamma(\alpha, \beta)$ | $\alpha > 0$ (shape), $\beta > 0$ (scale) |
| Normal | $X \sim N(\mu, \sigma^2)$ | $\mu \in \mathbb{R}$, $\sigma^2 > 0$ |
| Chi-Kuadrat | $X \sim \chi^2(\nu)$ | $\nu \in \mathbb{Z}^+$ |
| Student-$t$ | $X \sim t(\nu)$ | $\nu \in \mathbb{Z}^+$ |
| $F$ | $X \sim F(\nu_1, \nu_2)$ | $\nu_1, \nu_2 \in \mathbb{Z}^+$ |

> **COLLISION WARNING:** Simbol $\beta$ dipakai sebagai parameter Gamma (scale) DAN sebagai Type II error probability di inferensi. Simbol $\lambda$ dipakai sebagai rate di Poisson/Exponential. Selalu definisikan konteks penggunaan.

---

## OUTPUT FORMAT — OBSIDIAN MARKDOWN

> **INSTRUKSI KRITIS:** Output adalah **satu file `.md` tunggal yang lengkap**. Mulai langsung dari baris pertama YAML. Tidak ada kalimat pembuka atau penutup. Semua tabel harus berisi nilai nyata — tidak ada placeholder.

---

### [OF-1] YAML FRONTMATTER

```
---
topic: "Tabel Perbandingan Distribusi — CF2 Quick Reference"
topic_id: "REF-DIST"
parent_topic: "Resources"
exam: "CF2"
type: "cheat-sheet"
covers: ["2.5 Distribusi Diskrit Umum", "2.6 Distribusi Kontinu Umum"]
ref_book: "Hogg-Tanis-Zimmerman (2015) | Miller (2014)"
tags: [CF2, Distribusi, CheatSheet, QuickReference, Probabilitas]
date_created: "<YYYY-MM-DD>"
status: "reference"
---
```

---

### [OF-2] HEADER

```
# 📋 Tabel Perbandingan Distribusi — CF2 Quick Reference

> [!ABSTRACT] Cara Pakai
> Tabel ini menggunakan parametrisasi **Hogg-Tanis-Zimmerman (2015)** sebagai acuan primer.
> Jika menemukan notasi berbeda di sumber lain, cek kolom **Notasi Alternatif**.
> Semua simbol didefinisikan di bagian bawah tabel.
```

---

### [OF-3] EMPAT TABEL UTAMA

Buat keempat tabel berikut secara lengkap dengan nilai nyata (bukan "..."):

---

#### TABEL 1 — Distribusi Diskrit

Heading: `## Distribusi Diskrit`

Kolom wajib (dalam urutan ini):

| Kolom | Isi |
|-------|-----|
| **Distribusi** | Nama + notasi baku, e.g. $X \sim B(n,p)$ |
| **Parameter** | Nama parameter + range valid |
| **Support** | Domain di mana PMF > 0 |
| **PMF** $p(x)$ | Formula lengkap dalam LaTeX |
| **Mean** $E[X]$ | Formula dalam LaTeX |
| **Variansi** $\text{Var}(X)$ | Formula dalam LaTeX |
| **MGF** $M_X(t)$ | Formula lengkap dalam LaTeX, beserta domain $t$ yang valid |
| **Sifat Khusus** | Lihat spesifikasi di bawah |

**Distribusi yang wajib dicakup:** Bernoulli, Binomial, Poisson, Geometrik, Hipergeometrik, Binomial Negatif

---

#### TABEL 2 — Distribusi Kontinu

Heading: `## Distribusi Kontinu`

Kolom wajib (identik dengan Tabel 1, tapi PMF diganti PDF):

| Kolom | Isi |
|-------|-----|
| **Distribusi** | Nama + notasi baku |
| **Parameter** | Nama parameter + range valid |
| **Support** | Domain di mana PDF > 0 |
| **PDF** $f(x)$ | Formula lengkap dalam LaTeX |
| **Mean** $E[X]$ | Formula dalam LaTeX |
| **Variansi** $\text{Var}(X)$ | Formula dalam LaTeX |
| **MGF** $M_X(t)$ | Formula lengkap + domain $t$ valid |
| **Sifat Khusus** | Lihat spesifikasi di bawah |

**Distribusi yang wajib dicakup:** Uniform, Eksponensial, Gamma, Normal, Chi-Kuadrat, Student-$t$, $F$

---

#### TABEL 3 — Hubungan Antar Distribusi

Heading: `## Hubungan Antar Distribusi`

Ini adalah tabel yang paling sering diuji di CF2. Format:

| Hubungan | Kondisi | Pernyataan Formal | Implikasi Ujian |
|----------|---------|-------------------|-----------------|
| Bernoulli → Binomial | ... | ... | ... |
| Binomial → Poisson | ... | ... | ... |
| Exponential → Gamma | ... | ... | ... |
| Gamma → Chi-Kuadrat | ... | ... | ... |
| Binomial → Normal (via CLT) | ... | ... | ... |
| ... | ... | ... | ... |

Isi semua baris dengan konten nyata. Kolom **Pernyataan Formal** harus menggunakan LaTeX. Kolom **Implikasi Ujian** berisi satu kalimat tentang kapan hubungan ini muncul di soal.

---

#### TABEL 4 — Notasi Alternatif

Heading: `## Notasi Alternatif Antar Buku`

Untuk menyelesaikan masalah perbedaan simbol antar referensi:

| Distribusi | Parametrisasi HTZ (Primer) | Parametrisasi Alternatif | Konversi |
|------------|---------------------------|--------------------------|---------|
| Eksponensial | $\theta$ (scale/mean) | $\lambda$ (rate) di buku lain | $\theta = 1/\lambda$ |
| Gamma | $(\alpha, \beta)$ — shape, scale | $(\alpha, \lambda)$ — shape, rate | $\beta = 1/\lambda$ |
| Geometrik | $X$ = jumlah trial sampai sukses pertama | $X$ = jumlah gagal sebelum sukses pertama | PMF berbeda, selisih 1 |
| ... | ... | ... | ... |

Isi semua baris yang relevan. Tambahkan baris lain jika ada konflik parametrisasi yang signifikan.

---

### [OF-4] SIFAT KHUSUS — SPESIFIKASI KONTEN

Kolom "Sifat Khusus" di Tabel 1 dan 2 harus menggunakan **label standar** berikut. Pakai hanya yang relevan per distribusi:

| Label | Definisi | Distribusi yang Punya |
|-------|----------|-----------------------|
| **Memoryless** | $P(X > s+t \mid X > s) = P(X > t)$ | Geometric, Exponential |
| **Reproductive** | Jumlah variabel independen berdistribusi sama tetap dalam keluarga yang sama | Normal, Poisson, Gamma, Binomial (p sama) |
| **Special case of** | Merupakan kasus khusus distribusi lain | Bernoulli ⊂ Binomial, Exponential ⊂ Gamma, dll |
| **Limit of** | Merupakan limiting distribution dari distribusi lain | Poisson ← Binomial, Normal ← banyak distribusi |
| **Mean = Variance** | Sifat numerik khusus | Poisson |
| **Symmetric** | PDF simetris di sekitar mean | Normal, Uniform, $t$ |
| **Heavy-tailed** | Ekor lebih tebal dari Normal | $t$, $F$ |
| **Location-scale family** | Transformasi linear tetap dalam keluarga yang sama | Normal, Uniform |

---

### [OF-5] ATURAN FORMATTING GLOBAL

1. **LaTeX:** Semua ekspresi matematika dalam `$...$` (inline) atau `$$...$$` (display). Tidak ada plain-text formula.
2. **Tabel:** Selalu sertakan header row dan alignment row `|---|`.
3. **Heading hierarchy:** `#` untuk judul note. `##` untuk empat tabel utama. `###` untuk sub-bagian jika diperlukan.
4. **Callout types:**
   - `> [!ABSTRACT]` — cara pakai di header
   - `> [!NOTE]` — catatan definisi atau konvensi
   - `> [!WARNING]` — collision warning atau jebakan parametrisasi
   - `> [!DANGER]` — larangan keras atau kesalahan fatal
5. **Internal links:** Gunakan `[[2.5 Distribusi Diskrit Umum]]` dan `[[2.6 Distribusi Kontinu Umum]]` saat merujuk sub-topik CF2.
6. **JANGAN** menulis teks pembuka atau penutup. Output dimulai langsung dari `---` pertama YAML frontmatter.

---

### [OF-6] FOOTER

```
---

> [!NOTE] Referensi Parametrisasi
> Seluruh tabel ini menggunakan konvensi **Hogg, Tanis & Zimmerman (2015)** sebagai acuan primer.
> Untuk detail derivasi, lihat [[2.5 Distribusi Diskrit Umum]] dan [[2.6 Distribusi Kontinu Umum]].

*📖 Ref: Hogg-Tanis-Zimmerman (2015) Bab 2–3 | Miller (2014) Bab 3–7 | 🗓️ <tanggal> | #CF2 #Distribusi #CheatSheet*
```

---

## QUALITY CONTROL — Self-Review Sebelum Output

- [ ] Output dimulai dengan `---` YAML frontmatter, semua field terisi dengan nilai nyata
- [ ] Semua 4 tabel hadir dan terisi penuh — tidak ada sel yang berisi "..." atau placeholder
- [ ] LaTeX digunakan untuk semua ekspresi matematika tanpa kecuali
- [ ] Kolom MGF mencantumkan domain $t$ yang valid untuk setiap distribusi
- [ ] Tabel 3 (Hubungan Antar Distribusi) mencakup minimal 8 hubungan
- [ ] Tabel 4 (Notasi Alternatif) mencakup semua distribusi yang punya konflik parametrisasi signifikan
- [ ] Parametrisasi Eksponensial menggunakan $\theta$ (scale) sesuai HTZ, bukan $\lambda$ (rate)
- [ ] Footer hadir di baris paling akhir

---

## INPUT

Buat tabel perbandingan distribusi lengkap sesuai format di atas untuk semua distribusi dalam silabus CF2 PAI: Bernoulli, Binomial, Poisson, Geometrik, Hipergeometrik, Binomial Negatif, Uniform, Eksponensial, Gamma, Normal, Chi-Kuadrat, Student-$t$, dan $F$.
