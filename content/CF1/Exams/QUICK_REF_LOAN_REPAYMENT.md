# 📄 LOAN REPAYMENT — QUICK REFERENCE CARD
**Print this. Scan 10 min before exam. Solve 3 traps immediately.**

---

## FORMULA BANK (Memorize These Cold)

### Level Payment & OB
$$R = \frac{L}{a_{\overline{n}|i}} = \frac{L \cdot i}{1 - v^n}$$
$$\text{OB}_t^{\text{pro}} = R \cdot a_{\overline{n-t}|i} = R \cdot \frac{1 - v^{n-t}}{i}$$
$$\text{OB}_t^{\text{retro}} = L(1+i)^t - R \cdot s_{\overline{t}|i}$$

### Interest & Principal Components
$$I_t = i \cdot \text{OB}_{t-1} = R(1 - v^{n-t+1})$$
$$PR_t = R - I_t = R \cdot v^{n-t+1}$$
$$PR_{t+s} = PR_t \cdot (1+i)^s \quad \text{(geometric growth)}$$

### Aggregate
$$\sum_{t=1}^{n} I_t = nR - L$$
$$\sum_{t=1}^{n} PR_t = L$$

---

## 🚨 TOP 3 JEBAKAN (Do These First When Panicked)

### TRAP #1: Exponent $n - t + 1$ vs $n - t$
**Wrong:** $PR_t = R \cdot v^{n-t}$ ❌  
**Right:** $PR_t = R \cdot v^{n-t+1}$ ✓

**When:** "Pokok pada pembayaran ke-$t$" always uses $n - t + 1$.

**Example:** $PR_3$ di 10-year loan = $R \cdot v^{10-3+1} = R \cdot v^8$, bukan $v^7$.

---

### TRAP #2: Geometric Relationship
**Formula:** $PR_{t+s} = PR_t \cdot (1+i)^s$

**Equivalently:** $\frac{PR_b}{PR_a} = (1+i)^{b-a}$

**When:** Soal memberi 2 principal values di periode berbeda, minta rate atau principal di period ketiga.

**Fast Check:**
- $PR_{20} = 3 \times PR_5$ dan jarak 15 periode? → $(1+i)^{15} = 3$ → $i = 3^{1/15} - 1$ ✓

---

### TRAP #3: Rate Conversion (Annual ↔ Monthly ↔ Quarterly)
**Nominal $r$, converted $m$ times per year:**
$$i_{\text{per period}} = \frac{r}{m}$$

**Example:** 6% nominal converted quarterly → $i_q = 6\% / 4 = 1.5\%$ per quarter.

**Annual Effective from Monthly:**
$$(1 + i_{\text{monthly}})^{12} - 1 = i_{\text{annual}}$$

**When:** Problem gives "7.5% per year dikonversi bulanan" → always use $7.5\%/12$ per bulan.

---

## 🔴 RED FLAGS — STOP & REREAD

| Flag | What to Check |
|------|--------------|
| "Pada pembayaran ke-$t$" | Is it asking for $I_t$, $PR_t$, or $\text{OB}_t$? Each is different. |
| "Saldo setelah pembayaran ke-$t$" | This is $\text{OB}_t$ (AFTER payment), not $\text{OB}_{t-1}$ (before). |
| "Nominal X% dikonversi Y" | Divide by Y. Period rate = X% / Y. |
| "Pokok yang dibayarkan adalah..." | This is $PR_t$, triggers geometric formula. |
| "Principal = Interest" | Sets up equation $PR_t = I_t$; solve for unknown. |
| "Refinance / Rate change" | Multi-step: OB at refi point, new loan with new rate. |

---

## DECISION TREE (30 sec to pick right formula)

```
Soal asks for...?
│
├─ "Cicilan tetap" (level payment)?
│  └─ L = R · a_n  →  R = L / a_n  ✓
│
├─ "Saldo pinjaman" / OB?
│  ├─ Prospective: OB_t = R · a_{n-t}  (faster, default)
│  └─ Retrospective: OB_t = L(1+i)^t - R·s_t  (backup check)
│
├─ "Bunga / Pokok pada pembayaran ke-t"?
│  ├─ I_t = R(1 - v^{n-t+1})  ← bunga
│  └─ PR_t = R · v^{n-t+1}  ← pokok
│
├─ "Perbandingan PR di dua periode"?
│  └─ PR_b / PR_a = (1+i)^{b-a}  → solve for i or PR
│
├─ "Saldo setelah 5 tahun, terus pembayaran baru"?
│  └─ Multi-step: (1) hitung OB_5; (2) treat sebagai L_new; (3) hitung R_new
│
└─ "Rate dalam per-tahun, pembayaran per-bulan"?
   └─ Convert: i_monthly = i_annual / 12
```

---

## FORMULAE CHEAT SHEET (Copy to Exam Paper First 30 sec)

$$a_n = \frac{1-v^n}{i}, \quad s_n = \frac{(1+i)^n - 1}{i}, \quad v = \frac{1}{1+i}$$

$$v^{n-t+1}, \quad 1 - v^{n-t+1}$$

$$\text{Total Interest} = nR - L$$

---

## SAMPLE PANIC SOLVE (1 Min)

**Problem:** "Pinjaman 100jt, 10 pembayaran tahunan, 6% per tahun. Pokok pada pembayaran ke-3?"

**Solve:**
1. $v = 1/1.06 = 0.943396$
2. $a_{10} = (1 - v^{10})/0.06 = 7.3601$
3. $R = 100 / 7.3601 = 13.587$
4. $PR_3 = 13.587 \times v^{10-3+1} = 13.587 \times v^8$
5. $v^8 = 0.6302$
6. $PR_3 = 13.587 \times 0.6302 = 8.56$ ✓

**Total time:** < 2 min.

---

## PRE-EXAM CHECKLIST (Do night before)

- [ ] Memorize $a_n = \frac{1-v^n}{i}$ formula
- [ ] Know $PR_t = R \cdot v^{n-t+1}$, **not** $v^{n-t}$
- [ ] Know $\text{OB}_t = R \cdot a_{n-t}$ (prospective, faster)
- [ ] Practice 1 "rate from PR" problem (use ratio method)
- [ ] Practice 1 "refinancing" problem (OB midpoint + new rate)
- [ ] Do 1 conversion problem (annual→monthly or vice versa)

---

**Good luck. You got this.** 💪
