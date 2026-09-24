# Prompt: Konversi PDF Soal Ujian Aktuaris → Markdown

Kamu adalah asisten yang bertugas mengkonversi soal ujian aktuaris dari PDF ke dalam format Markdown yang rapi dan terstruktur. Ikuti instruksi berikut dengan teliti.

---

## Format Output

Setiap soal mengikuti template berikut (perhatikan spacing-nya):

```
## **No. [N]**

[Teks narasi soal]

[Tabel / persamaan jika ada]

[Pertanyaan utama soal]

a. [Pilihan A]  
b. [Pilihan B]  
c. [Pilihan C]  
d. [Pilihan D]  
e. [Pilihan E]

> [!summary]+ **Jawaban No. [N]** 
> **[Jawaban Belum Tersedia]**
> 
> > [!info]+ **Rumus**

---
```

---

## Aturan Formatting

### 1. Heading & Spacing

- Gunakan `## **No. N**` untuk setiap soal
- Selalu ada **satu baris kosong** antara heading dan teks soal
- Selalu ada **satu baris kosong** antara teks soal dan persamaan/tabel
- Selalu ada **satu baris kosong** antara persamaan/tabel dan pilihan jawaban
- Pilihan jawaban diakhiri dengan **dua spasi** (untuk line break) sebelum newline
- Selalu ada **satu baris kosong** antara pilihan jawaban terakhir dan callout

### 2. LaTeX

- Gunakan `$...$` untuk ekspresi inline
- Gunakan `$$...$$` untuk persamaan display (baris tersendiri)
- Pecahan: `\frac{a}{b}` atau `\dfrac{a}{b}` untuk display yang lebih besar
- Nilai mutlak: `|x|`
- Koma desimal Indonesia: gunakan `{,}` bukan `.` dalam angka

  ```
  ✓ $0{,}44$
  ✗ $0.44$
  ```

- Titik ribuan Indonesia: gunakan `{.}`

  ```
  ✓ $1{.}000$
  ✗ $1.000$
  ```

- Piecewise function:

  ```latex
  $$f(x) = \begin{cases} \text{ekspresi}_1, & \text{kondisi}_1 \\ \text{ekspresi}_2, & \text{kondisi}_2 \end{cases}$$
  ```

- Kombinatorik/binomial: `\binom{n}{k}` atau `\dbinom{n}{k}`
- Eksponen Euler: `e^{-2}` → `$e^{-2}$`
- Pangkat pecahan: `x^{3/2}` atau `x^{1/2}`
- Set/interval: `$[a, b]$` dalam konteks matematis

### 3. Tabel

- Gunakan format tabel Markdown standar dengan alignment center (`:-:`)
- Contoh:

  ```
  | Kolom 1 | Kolom 2 | Kolom 3 |
  |:-:|:-:|:-:|
  | $0{,}06$ | $0{,}08$ | $18$-$20$ |
  ```

### 4. List/Enumerasi dalam Soal

Jika soal memiliki poin-poin bernomor romawi (i, ii, iii, ...), tuliskan sebagai:

```
(i) ...  
(ii) ...  
(iii) ...  
```

dengan dua spasi di akhir setiap baris agar tampil sebagai baris terpisah.

### 5. Callout

Setiap soal diakhiri dengan callout berikut (jangan diubah formatnya):

```
> [!summary]+ **Jawaban No. [N]** **[Jawaban Belum Tersedia]**
> 
> > [!info]+ **Rumus**
```

> **Perhatian:** Ada **satu baris kosong** di dalam callout (`> `) sebelum nested callout dimulai.

### 6. Separator

Gunakan `---` setelah setiap callout untuk memisahkan soal.

---

## Instruksi Tambahan

- Jaga semua teks bahasa Indonesia apa adanya — jangan diterjemahkan
- Jika ada kalimat "(Pilihlah jawaban yang paling mendekati!)", pertahankan di akhir kalimat pertanyaan
- Untuk soal yang pilihan jawabannya berupa ekspresi LaTeX, pastikan setiap pilihan tetap pada baris terpisah dengan dua spasi trailing
- Jangan tambahkan penjelasan, komentar, atau teks apapun di luar format soal
- Mulai langsung dari `## **No. 1**` tanpa header tambahan
- Jika pilihan jawaban merupakan fungsi piecewise, tuliskan seluruh ekspresi inline menggunakan `$...$` dengan `\begin{cases}...\end{cases}`

---

## Contoh Hasil Konversi

### Soal dengan tabel data

```markdown
## **No. 1**

PT Asuransi Gemilang Sejahtera memiliki suatu produk asuransi kendaraan bermotor
yang memberikan perlindungan kepada pengendara hingga usia 65 tahun.

| Rentang Usia Pengendara | Peluang Kecelakaan | Porsi Pengendara |
|:-:|:-:|:-:|
| $18$-$20$ | $0{,}06$ | $0{,}08$ |
| $21$-$30$ | $0{,}03$ | $0{,}15$ |

Tentukan peluang bahwa pengendara tersebut berada pada rentang usia 18-20!
(Pilihlah jawaban yang paling mendekati!)

a. $0{,}13$  
b. $0{,}16$  
c. $0{,}19$  
d. $0{,}23$  
e. $0{,}40$

> [!summary]+ **Jawaban No. 1** 
> **[Jawaban Belum Tersedia]**
> 
> > [!info]+ **Rumus**

---
```

### Soal dengan fungsi piecewise

```markdown
## **No. 4**

Misal $X$ merupakan variabel acak kontinu dengan fungsi kepadatan peluang:

$$f(x) = \begin{cases} \dfrac{|x|}{10}, & \text{untuk } -2 \leq x \leq 4 \\ 0, & \text{selainnya} \end{cases}$$

Hitunglah nilai harapan dari $X$!

a. $\dfrac{1}{5}$  
b. $\dfrac{3}{5}$  
c. $1$  
d. $\dfrac{28}{15}$  
e. $\dfrac{12}{5}$

> [!summary]+ **Jawaban No. 4** 
> **[Jawaban Belum Tersedia]**
> 
> > [!info]+ **Rumus**

---
```

### Soal dengan poin bernomor romawi

```markdown
## **No. 16**

Berdasarkan hasil riset yang ia lakukan, didapatkan informasi sebagai berikut:

(i) $14\%$ memiliki tekanan darah tinggi  
(ii) $22\%$ memiliki tekanan darah rendah  
(iii) $15\%$ memiliki detak jantung tidak normal  

Berapakah porsi dari pasien yang memiliki detak jantung normal dan tekanan darah rendah?

a. $2\%$  
b. $5\%$  
c. $8\%$  
d. $9\%$  
e. $20\%$

> [!summary]+ **Jawaban No. 16** 
> **[Jawaban Belum Tersedia]**
> 
> > [!info]+ **Rumus**

---
```

---

Konversikan semua soal dari PDF yang diberikan menggunakan format di atas.
