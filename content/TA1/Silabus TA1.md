# TA1 – Metode Statistika: Index Materi

**Ujian:** 3 jam | 30 soal pilihan ganda **Referensi Utama:** Frees (2010), London (1997), Dickson et al. (2009)

---

## Topik 1: Analisis Survival (15–25%)

- [[1.1 Survival and Lifetime Variables]] — Data survival (kesintasan, lama hidup) dan sisa usia, variabel acak $T$
- [[1.2 Survival and Hazard Functions]] — Fungsi survival $S(t)$, fungsi hazard (*force of mortality*) $\mu_x$, fungsi distribusi dan densitas, serta hubungan antar fungsi
- [[1.3 Curtate Future Lifetime]] — Variabel acak sisa usia diskrit $K_x$
- [[1.4 Parametric Survival Models]] — Model konstan hazard, Gompertz–Makeham, De Moivre, dan Weibull
- [[1.5 Censoring and Non-Parametric Estimation]] — Jenis-jenis sensor data; estimator Kaplan-Meier, Nelson-Aalen, *Cox proportional hazards*, estimator densitas Kernel
- [[1.6 Maximum Likelihood Estimation for Survival]] — Estimasi parameter model survival parametrik via *maximum likelihood estimation* (MLE)

### Hasil Pembelajaran
- Mendefinisikan data survival (kesintasan, lama hidup) dan sisa usia, serta variabel acaknya.
- Mendefinisikan fungsi distribusi dan densitas untuk variabel acak survival, fungsi survival, *force of mortality* (fungsi *hazard*), serta menjelaskan hubungan di antara fungsi-fungsi tersebut.
- Mendefinisikan variabel acak sisa usia *curtate* (waktu survival diskrit).
- Menjelaskan model survival parametrik, seperti model konstan hazard, Gompertz–Makeham, De Moivre, dan Weibull.
- Menjelaskan berbagai macam cara bagaimana data sisa usia dapat tersensor.
- Estimasi distribusi survival dan kerugian empirik menggunakan:
  - Estimator Kaplan-Meier, termasuk aproksimasi untuk data besar
  - Estimator Nelson-Aalen
  - *Cox proportional hazards*
  - Estimator densitas Kernel
- Estimasi parameter model survival parametrik menggunakan *maximum likelihood estimation* (MLE).

### Referensi
- Frees, E. W. (2010). *Regression Modeling with Actuarial and Financial Applications*, Bab 14.
- London, D. (1997). *Survival Models and Their Estimation* (3rd ed.), Bab 1–8.

---

## Topik 2: Model Multiple State, Model Markov, dan Estimasinya (10–20%)

- [[2.1 Multiple State and Markov Models]] — Definisi model *multiple state* dan proses Markov; probabilitas transisi antar *state*
- [[2.2 MLE for Transition Intensities]] — *Maximum likelihood estimators* untuk intensitas transisi dengan asumsi *piecewise constant*
- [[2.3 Age-Dependent Transition Intensities]] — Estimasi intensitas transisi berdasarkan usia secara eksak maupun pendekatan sampel besar

### Hasil Pembelajaran
- Mendefinisikan model *multiple state* dan proses Markov.
- Mendapatkan *maximum likelihood estimators* untuk intensitas transisi pada model perpindahan antar *state* dengan intensitas transisi *piecewise constant*.
- Mengestimasi intensitas transisi berdasarkan usia, secara eksak maupun menggunakan pendekatan sampel besar.

### Referensi
- Dickson, D. C. M., Hardy, M. R., Waters, H. R. (2009). *Actuarial Mathematics for Life Contingent Risks*, Bab 8.
- London, D. (1997). *Survival Models and Their Estimation* (3rd ed.), Bab 10.

---

## Topik 3: Analisis Regresi (20–25%)

- [[3.1 Explanatory and Response Variables]] — Identifikasi variabel prediktor dan variabel respon; analisis korelasi linear
- [[3.2 Simple Linear Regression]] — Estimasi kuadrat terkecil untuk parameter kemiringan (*slope*) dan intersep
- [[3.3 Multiple Linear Regression Interpretation]] — Inferensial statistik pada parameter *slope*; ukuran *goodness of fit* $R^2$; prediksi mean respon dengan batas kepercayaan
- [[3.4 Residual Analysis and Model Validation]] — Penggunaan residual untuk memeriksa kesesuaian dan validitas model regresi linier
- [[3.5 Variable Selection Criteria]] — Kriteria kecocokan model untuk pemilihan variabel prediktor yang tepat

### Hasil Pembelajaran
- Mengidentifikasi apakah suatu variabel termasuk variabel prediktor atau respon.
- Menjelaskan hubungan linear antar variabel menggunakan analisis korelasi.
- Menghitung estimasi kuadrat terkecil dari parameter kemiringan (*slope*) dan intersep pada model regresi linier sederhana.
- Menginterpretasikan output regresi linier berganda:
  - Menentukan parameter *slope* menggunakan statistika inferensial.
  - Menjelaskan ukuran kecocokan (*goodness of fit*) pada model regresi linier.
  - Menggunakan *fitted linear relationship* untuk memprediksi mean dari respon atau titik, dengan batas kepercayaan tertentu.
  - Menggunakan residual untuk memeriksa kesesuaian dan validitas dari model regresi linier.
- Menggunakan kriteria kecocokan model untuk memilih variabel prediktor yang tepat.

### Referensi
- Frees, E. W. (2010). *Regression Modeling with Actuarial and Financial Applications*, Bab 1–6.

---

## Topik 4: Model Linier Tergeneralisasi (15–25%)

- [[4.1 Exponential Family of Distributions]] — Definisi keluarga distribusi Eksponensial; anggota: binomial, Poisson, eksponensial, gamma, normal
- [[4.2 GLM Concepts and Link Functions]] — Konsep model linier tergeneralisasi (GLM), fungsi penghubung (*link function*), dan fungsi penghubung kanonik
- [[4.3 GLM Variables and Interaction Terms]] — Variabel kontinu, faktor kategorik, dan komponen interaksi dalam GLM
- [[4.4 GLM Hypothesis Testing and Model Fit]] — Uji statistik kecocokan model: *Pearson's chi-square test* dan *likelihood ratio test* (LRT)
- [[4.5 GLM Actuarial Applications]] — Penerapan GLM pada permasalahan aktuaria dan interpretasi hasilnya

### Hasil Pembelajaran
- Mendefinisikan distribusi keluarga Eksponensial.
- Menunjukkan bahwa distribusi berikut merupakan anggota dari keluarga eksponensial: binomial, Poisson, eksponensial, gamma, normal.
- Menjelaskan konsep model linier tergeneralisasi (GLM), fungsi penghubung, dan fungsi penghubung kanonik dalam GLM.
- Menjelaskan apa yang dimaksud dengan variabel, faktor bertipe kategorik, dan komponen interaksi.
- Menerapkan uji statistik untuk menentukan kecocokan suatu model, termasuk *Pearson's chi-square test* dan *likelihood ratio test* (LRT).
- Menerapkan GLM pada permasalahan aktuaria, dan menginterpretasikan hasilnya.

### Referensi
- Frees, E. W. (2010). *Regression Modeling with Actuarial and Financial Applications*, Bab 13: Generalized Linear Models.

---

## Topik 5: Analisis Runtun Waktu (20–25%)

- [[5.1 Stationary and Non-Stationary Time Series]] — Konsep dan sifat runtun waktu univariat stasioner dan non-stasioner; deret acak stasioner; konsep filter
- [[5.2 Time Series Operators]] — Notasi operator *backwards shift*, *backwards difference*, dan akar persamaan karakteristik
- [[5.3 AR MA ARMA ARIMA Models]] — Konsep dan sifat dasar model AR, MA, ARMA, dan ARIMA; estimasi dan interpretasi parameter
- [[5.4 Random Walk Models]] — Konsep *random walk* diskrit dan *random walk* dengan *increment* berdistribusi normal, dengan dan tanpa *drift*
- [[5.5 Multivariate and Cointegrated Time Series]] — Konsep dasar model autoregresif multivariat; konsep runtun waktu kointegrasi
- [[5.6 ARCH GARCH Models]] — Konsep dasar model ARCH dan GARCH untuk pemodelan volatilitas

### Hasil Pembelajaran
- Menjelaskan konsep dan sifat runtun waktu univariat stasioner dan non-stasioner.
- Menjelaskan konsep deret acak stasioner.
- Menjelaskan konsep filter yang diaplikasikan pada deret acak stasioner.
- Memahami notasi operator *backwards shift*, *backwards difference*, dan konsep akar persamaan karakteristik dari runtun waktu.
- Menjelaskan konsep dan sifat dasar model runtun waktu *autoregressive* (AR), *moving average* (MA), *autoregressive moving average* (ARMA), dan *autoregressive integrated moving average* (ARIMA).
- Menjelaskan konsep dan sifat *random walk* diskrit dan *random walk* dengan *increment* yang berdistribusi normal, baik dengan maupun tanpa *drift*.
- Menjelaskan konsep dasar model autoregresif multivariat.
- Menjelaskan konsep runtun waktu kointegrasi.
- Menjelaskan konsep dasar model ARCH dan GARCH.

### Referensi
- Frees, E. W. (2010). *Regression Modeling with Actuarial and Financial Applications*, Bab 7–9.

---

## Bobot Soal

| Topik | Bobot |
|---|---|
| 1. Analisis Survival | 15–25% |
| 2. Model Multiple State, Model Markov, dan Estimasinya | 10–20% |
| 3. Analisis Regresi | 20–25% |
| 4. Model Linier Tergeneralisasi | 15–25% |
| 5. Analisis Runtun Waktu | 20–25% |

## Tags
#TA1 #Index #MetodeStatistika
