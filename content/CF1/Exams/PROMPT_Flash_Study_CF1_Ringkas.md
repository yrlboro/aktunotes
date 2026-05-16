# PROMPT: Generate Flash Study CF1 (Versi Ringkas)

## Input
File markdown pembahasan 30 soal dari ujian CF1 (format: No. · Topik · Subtopik · Pembahasan bertingkat).

## Output
File markdown **Flash Study** dengan struktur per soal:

```
## No. X — Topik Y · Judul Soal

**Subtopik:** [subtopic link]

**Inti soal:** [1-2 kalimat bahasa manusia, nggak jargon — what's the actual problem?]

- Langkah 1: [formula/action]
- Langkah 2: [formula/action]
- Langkah 3: [formula/action]

**Kenapa:** [Alasan pendekatan — pitfall, insight, atau shortcut kunci]
```

## Guideline

### Inti Soal (Feynman-style)
- Tulis seperti menjelaskan ke orang awam
- Hindari jargon teknis (atau jelaskan jika harus pakai)
- Fokus: masalah konkret apa sih yang soal tanyakan?
- Contoh baik: *"Uang udah tumbuh sampai tahun ke-4. Suku bunganya beda tiap tahun. Cari nilai uang itu di tahun ke-7."*
- Contoh buruk: *"Hitung akumulasi dengan varying interest rates untuk periode multi-tahun."*

### Langkah (Bullet points)
- Linear, tidak exploratory
- Setiap bullet = 1 aksi konkret (formula, substitusi, atau keputusan)
- Jangan "coba-coba" atau "mari kita lihat apakah..."
- Format: `[Aksi]: [detail]` atau langsung formula

### Kenapa (Red flags & shortcuts)
- **Pitfall:** Kesalahan umum yang soal dirancang untuk jebak
- **Insight:** Mengapa pendekatan ini yang paling efisien
- **Shortcut:** Jika ada cara cepatnya (vs brute force)
- Contoh baik: *"Jangan rata-rata forward rate dulu lalu discount — discounting bersifat non-linear. Hitung PV per skenario, baru ambil expected value."*

## Output Akhir
- **Judul file:** `Flash_Study_CF1_[PERIODE].md`
- **Struktur:** 30 soal berurut, setiap soal = 4 bagian (Subtopik, Inti, Langkah, Kenapa)
- **Bonus akhir file:** Tabel ringkasan topik (soal mana untuk topik apa, subtopik yang muncul)
- **Length target:** ~2–3 baris per "Inti soal", ~3–4 bullet "Langkah", ~2–3 baris "Kenapa"

## Contoh Output Ideal

```
## No. 8 — Topik 2 · Penjumlahan Annuity-Immediate FV

**Subtopik:** Annuity-Immediate and Annuity-Due

**Inti soal:** Hitung jumlah dari 10 buah accumulated value anuitas ($s̄₁ + s̄₂ + ⋯ + s̄₁₀$). Kelihatan harus satu-satu, tapi ada cara cepatnya.

- Gunakan identitas: $\sum_{t=1}^{n} s_{\overline{t}|} = (\ddot{s}_{\overline{n}|} - n)/i$
- Hitung $\ddot{s}_{\overline{10}|10\%} = s_{\overline{10}|} \times 1{,}1$
- Substitusi ke identitas

**Kenapa:** Brute force (hitung satu-satu) berisiko error kumulatif dan makan waktu. Identitas tertutup jauh lebih efisien. Jangan tukar $s$ dan $\ddot{s}$ — bedanya adalah $(1+i)$.
```

## Catatan Khusus
- **Jika soal punya anomali** (e.g., kunci jawaban tidak konsisten seperti No. 17): flag dengan **"Catatan:"** tapi tetap tampilkan pendekatan yang benar.
- **Untuk soal sulit/tricky** (e.g., No. 3, 14, 23): sorot "Tricky" di bagian "Inti soal" atau "Kenapa" agar user tau ini prone error.
- **Math notation:** Pakai LaTeX inline/display, konsisten dengan format dokumen asli.
