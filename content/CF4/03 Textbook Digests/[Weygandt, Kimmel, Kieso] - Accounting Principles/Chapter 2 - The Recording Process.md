---
type: "condensed-book"
exam: "CF4"
book: "Accounting Principles"
author: "Weygandt, Kimmel & Kieso"
chapter: "2"
chapter_title: "The Recording Process"
cf4_topics: ["1.3", "1.4", "1.5"]
cf4_relevance: "High"
source_scope: "Chapter 2 — The Recording Process"
compression_level: "Condensed"
tags: [CF4, CondensedBook, Weygandt, RecordingProcess, DebitCredit, JournalLedger]
date_created: "2026-08-24"
status: "study-note"
---

# Weygandt — Chapter 2: The Recording Process

> [!ABSTRACT] Chapter in One View
> Chapter 1 menunjukkan bagaimana business transactions memengaruhi accounting equation. Chapter 2 menjawab pertanyaan berikutnya: **bagaimana ribuan transaksi tersebut dicatat secara sistematis sehingga perusahaan dapat mengetahui balance setiap account dan akhirnya menyusun financial statements?** Weygandt memperkenalkan **account**, **T-account**, **debit**, **credit**, **normal balance**, dan **double-entry system** sebagai bahasa mekanis pencatatan. Setelah itu chapter membangun recording process:
>
> ```text
> Analyze transaction
> ↓
> Journalize
> ↓
> Post to ledger
> ↓
> Prepare trial balance
> ```
>
> Debit tidak berarti “buruk” atau “uang keluar”, dan credit tidak berarti “baik” atau “uang masuk”. Debit hanya berarti **left side**, credit berarti **right side**. Assets, drawings, dan expenses bertambah dengan debit; liabilities, owner's capital, dan revenues bertambah dengan credit. Journal menyimpan transactions secara chronological, ledger mengelompokkan transactions berdasarkan account, dan trial balance menguji apakah total debit sama dengan total credit setelah posting. Untuk CF4, chapter ini sangat relevan dengan [[1.4 Company Account Structure]] dan terutama [[1.5 Financial Statements Construction]] karena memberikan mechanics yang menghubungkan economic event dengan angka pada financial statements.

---

## 1. Why This Chapter Exists

Chapter 1 menggunakan accounting equation untuk menganalisis transaksi dalam bentuk tabel:

$$
Assets = Liabilities + Owner's\ Equity
$$

Cara tersebut sangat berguna untuk membangun intuisi, tetapi tidak praktis untuk real company.

Perusahaan besar dapat memiliki ribuan atau jutaan transactions. Jika setiap transaction hanya ditambahkan ke satu tabel accounting equation besar, perusahaan akan kesulitan mengetahui:

- berapa current balance cash;
- berapa total accounts receivable;
- berapa amount yang masih owed kepada suppliers;
- berapa revenue yang telah earned;
- berapa total wage expense;
- transaksi apa yang menyebabkan perubahan suatu account.

Feature story mengenai MF Global menggambarkan risiko jika accounting records buruk. Ketika perusahaan menghadapi financial distress, regulators dan auditors kesulitan menentukan angka mana yang dapat dipercaya dan bagaimana customer funds telah diperlakukan. Lesson dari opening story bukan detail kasusnya, tetapi:

> **A company must be able to trace financial information from individual transactions to account balances.**

Chapter ini karena itu mengubah framework dari:

```text
Transaction
↓
Accounting equation table
```

menjadi recording architecture yang scalable:

```text
Transaction evidence
↓
Analyze accounts
↓
Journal
↓
Ledger
↓
Trial balance
↓
Financial statements
```

> [!INFO] CF4 Connection
> Weygandt Chapter 2 secara resmi termasuk referensi Topik 1 CF4. Untuk exam understanding, detail bookkeeping penting terutama karena ia membantu kita menentukan **account affected → debit/credit → statement impact**, bukan karena CF4 bertujuan menjadikan peserta sebagai bookkeeper.

---

## 2. Chapter Map

```text
Chapter 2 — The Recording Process
├── Accounts, Debits, and Credits
│   ├── The Account
│   ├── Debits and Credits
│   ├── Double-Entry System
│   ├── Normal Balances
│   ├── Assets and Liabilities
│   ├── Owner's Equity
│   └── Summary of Debit/Credit Rules
├── Steps in the Recording Process
│   ├── Transaction Evidence
│   ├── Journal
│   ├── Journalizing
│   ├── Simple Entry
│   └── Compound Entry
├── The Ledger and Posting
│   ├── General Ledger
│   ├── Chart of Accounts
│   ├── Three-Column Account
│   └── Posting
├── The Recording Process Illustrated
│   └── Complete transaction flow
└── Trial Balance
    ├── Purpose
    ├── Preparation
    └── Limitations
```

| Textbook Section | CF4 Relevance | Connected Syllabus Note |
|---|---|---|
| Accounts, debits, credits | Very High | [[1.3 Accounting Concepts and Sustainability]], [[1.5 Financial Statements Construction]] |
| Double-entry system | Very High | [[1.5 Financial Statements Construction]] |
| Normal balances | Very High | [[1.5 Financial Statements Construction]] |
| Journal and journalizing | High | [[1.5 Financial Statements Construction]] |
| Ledger and posting | High | [[1.4 Company Account Structure]], [[1.5 Financial Statements Construction]] |
| Chart of accounts | High supporting | [[1.4 Company Account Structure]] |
| Full recording-process illustration | High | [[1.5 Financial Statements Construction]] |
| Trial balance | Very High | [[1.5 Financial Statements Construction]] |
| Detailed manual posting references/page numbering | Supporting | — |

---

## 3. The Account

Chapter 1 melihat categories besar seperti cash, equipment, accounts payable, revenue, dan expense. Chapter 2 formalizes masing-masing category tersebut sebagai **account**.

An **account** adalah individual accounting record yang menunjukkan increases dan decreases dalam specific:

- asset;
- liability;
- owner's equity item.

Perusahaan tidak cukup mengetahui bahwa total assets berubah. Ia perlu mengetahui **asset mana** yang berubah.

Contoh:

```text
Assets
├── Cash
├── Accounts Receivable
├── Supplies
├── Prepaid Insurance
├── Equipment
└── Land
```

Liabilities juga dipisahkan:

```text
Liabilities
├── Accounts Payable
├── Notes Payable
├── Salaries and Wages Payable
└── Unearned Revenue
```

Hal yang sama berlaku untuk owner's equity, revenue, dan expenses.

### Why Accounts Matter

Accounts memungkinkan company menjawab:

> "Berapa cash sekarang?"

tanpa membaca ulang setiap transaksi sejak perusahaan berdiri.

Setiap transaction memperbarui specific accounts, dan cumulative effects akhirnya menghasilkan ending balance.

---

## 4. T-Account

Textbook menggunakan **T-account** sebagai simplified form dari account.

Bentuknya:

```text
          Account Name
      -------------------
      Debit       Credit
      Left         Right
```

Secara konseptual, huruf "T" hanya visual aid untuk membagi account menjadi dua sisi.

> [!WARNING] Important Distinction
> **Debit ≠ increase.**
>
> **Credit ≠ decrease.**
>
> Debit hanya berarti **left side** dan credit hanya berarti **right side**.
>
> Apakah debit menaikkan atau menurunkan balance tergantung **jenis account**.

Ini adalah salah satu distinction terpenting seluruh chapter.

---

## 5. Debits and Credits

Istilah:

- **debit (Dr.)** = left side;
- **credit (Cr.)** = right side.

Setiap account memiliki two-sided structure sehingga accounting dapat merekam increases dan decreases secara systematic.

Misalnya untuk Cash:

```text
Cash
Debit              Credit
increase            decrease
```

Tetapi untuk Accounts Payable:

```text
Accounts Payable
Debit              Credit
decrease            increase
```

Jadi tidak ada universal rule:

> debit = naik

atau:

> credit = turun.

Rule selalu ditentukan oleh classification account.

---

## 6. Double-Entry System

Accounting menggunakan **double-entry system**.

Artinya:

> setiap transaction dicatat dengan effect yang sama dalam debit dan credit sehingga total debit untuk transaction sama dengan total credit.

Secara formal:

$$
Total\ Debits = Total\ Credits
$$

Ini merupakan mechanical representation dari accounting equation:

$$
Assets = Liabilities + Owner's\ Equity
$$

### Example — Owner Invests Cash

Owner invests $15,000 cash.

Economic effect:

- Cash ↑ $15,000;
- Owner's Capital ↑ $15,000.

Entry:

```text
Dr Cash                 15,000
    Cr Owner's Capital          15,000
```

Mengapa?

- Cash adalah asset → asset increase = debit.
- Owner's Capital adalah equity → equity increase = credit.

Total debit = total credit.

### Double Entry Does Not Mean "Two Accounts Only"

Satu transaction minimal memiliki:

- satu debit;
- satu credit.

Tetapi transaction dapat melibatkan tiga atau lebih accounts.

Yang harus equal adalah **total amount**, bukan number of accounts.

---

## 7. Normal Balance

**Normal balance** adalah sisi account tempat **increase** biasanya dicatat.

Karena assets naik dengan debit:

> assets normally have debit balances.

Karena liabilities naik dengan credit:

> liabilities normally have credit balances.

Normal balance membantu mendeteksi apakah account terlihat reasonable.

### Core Rule

| Account Type | Increase | Decrease | Normal Balance |
|---|---|---|---|
| Assets | Debit | Credit | Debit |
| Liabilities | Credit | Debit | Credit |
| Owner's Capital | Credit | Debit | Credit |
| Owner's Drawings | Debit | Credit | Debit |
| Revenues | Credit | Debit | Credit |
| Expenses | Debit | Credit | Debit |

Ini adalah table paling penting dalam chapter.

---

## 8. Why Asset Accounts Increase with Debits

Accounting equation menempatkan assets pada left side:

$$
Assets = Liabilities + Owner's\ Equity
$$

Karena debit juga left side dari T-account, textbook menggunakan convention:

```text
Asset increase → Debit
Asset decrease → Credit
```

Contoh:

### Receive Cash from Owner

```text
Dr Cash
    Cr Owner's Capital
```

Cash bertambah.

### Pay Cash for Rent

```text
Dr Rent Expense
    Cr Cash
```

Cash berkurang, sehingga Cash di-credit.

### Buy Equipment for Cash

```text
Dr Equipment
    Cr Cash
```

Equipment naik, Cash turun.

> [!TIP] Cara Berpikir
> Jangan menghafal "cash always debit."  
> Cash adalah asset:
>
> - cash **increase** → debit;
> - cash **decrease** → credit.

---

## 9. Liability Accounts

Liabilities berada di right side accounting equation sehingga convention-nya opposite assets:

```text
Liability increase → Credit
Liability decrease → Debit
```

### Purchase Supplies on Account

```text
Dr Supplies
    Cr Accounts Payable
```

- Supplies ↑ → debit.
- Accounts Payable ↑ → credit.

### Pay Accounts Payable

```text
Dr Accounts Payable
    Cr Cash
```

- liability ↓ → debit;
- cash ↓ → credit.

> [!WARNING] Important Distinction
> **Payment of an existing payable is not automatically a new expense.**
>
> Jika expense/asset telah recognized saat obligation muncul, payment kemudian hanya mengurangi liability dan cash.

---

## 10. Owner's Equity Accounts

Chapter 1 menunjukkan bahwa owner's equity berubah karena:

- owner investment;
- revenue;
- drawings;
- expenses.

Chapter 2 memisahkan effects tersebut menjadi accounts yang berbeda.

### 10.1 Owner's Capital

Owner's Capital bertambah karena owner investment.

```text
Increase Capital → Credit
Decrease Capital → Debit
```

Normal balance = credit.

### 10.2 Owner's Drawings

Drawings mengurangi owner's equity tetapi dicatat dalam separate account.

Karena effect-nya opposite capital:

```text
Increase Drawings → Debit
Decrease Drawings → Credit
```

Normal balance = debit.

### 10.3 Revenue

Revenue meningkatkan owner's equity.

Karena itu revenue mengikuti debit-credit pattern yang sama dengan Owner's Capital:

```text
Revenue increase → Credit
Revenue decrease → Debit
```

Normal balance = credit.

### 10.4 Expenses

Expenses menurunkan owner's equity.

Karena itu expense mengikuti opposite pattern:

```text
Expense increase → Debit
Expense decrease → Credit
```

Normal balance = debit.

---

## 11. The Expanded Equation and Debit/Credit Logic

Chapter menghubungkan debit-credit rules dengan expanded accounting equation:

$$
Assets
=
Liabilities
+
Owner's\ Capital
-
Owner's\ Drawings
+
Revenues
-
Expenses
$$

Secara intuitive:

```text
LEFT / Debit-normal
Assets
Drawings
Expenses

RIGHT / Credit-normal
Liabilities
Capital
Revenues
```

Mnemonic yang aman:

> **ADE = Debit-normal**
>
> **Assets, Drawings, Expenses**

dan sisanya:

> **Liabilities, Capital, Revenues = Credit-normal**

Tetapi mnemonic sebaiknya digunakan setelah memahami economic logic.

---

## 12. Summary of Debit/Credit Rules

Textbook's Illustration 2-11 adalah visual central chapter. Dalam condensed form:

| Element | Debit Effect | Credit Effect |
|---|---:|---:|
| Assets | Increase | Decrease |
| Liabilities | Decrease | Increase |
| Owner's Capital | Decrease | Increase |
| Owner's Drawings | Increase | Decrease |
| Revenues | Decrease | Increase |
| Expenses | Increase | Decrease |

### Relationship to Financial Statements

```text
Balance Sheet:
Assets → debit-normal
Liabilities → credit-normal
Owner's Capital → credit-normal

Income Statement:
Revenues → credit-normal
Expenses → debit-normal

Owner's Equity Statement:
Capital → credit-normal
Drawings → debit-normal
```

> [!INFO] CF4 Connection
> Table ini adalah mechanics foundation untuk menyusun financial statements dari daftar transactions. Namun untuk exam, selalu mulai dari **economic substance → account classification → increase/decrease → debit/credit**.

---

## 13. Steps in the Recording Process

Setelah debit-credit rules dipahami, textbook menyusun recording process dalam tiga basic steps:

1. **Analyze each transaction for its effects on accounts.**
2. **Enter the transaction information in a journal.**
3. **Transfer journal information to the appropriate ledger accounts.**

Alurnya:

```text
Business document / evidence
↓
Analyze transaction
↓
Journalize
↓
Post
↓
Ledger balances
```

Textbook menekankan bahwa transaction biasanya didukung oleh business documents seperti:

- sales receipt;
- check;
- bill/invoice.

Documents memberikan evidence bahwa economic event benar-benar terjadi.

---

## 14. Why Use a Journal?

Secara teknis company dapat langsung memasukkan transaction ke individual accounts, tetapi hampir semua accounting systems menggunakan **journal** terlebih dahulu.

Journal adalah **book of original entry**: tempat transaction pertama kali dicatat secara formal.

Journal memiliki tiga benefits utama.

### 14.1 Complete Effect in One Place

Satu journal entry menunjukkan seluruh accounts yang affected oleh satu transaction.

### 14.2 Chronological Record

Transactions ditampilkan menurut date sehingga user dapat melihat sequence kejadian.

### 14.3 Error Detection

Debit dan credit satu entry berada berdekatan sehingga equality lebih mudah diperiksa.

---

## 15. General Journal

**General journal** adalah basic form of journal.

Typical columns:

| Date | Account Titles and Explanation | Ref. | Debit | Credit |
|---|---|---:|---:|---:|

Basic layout entry:

```text
Date
    Debit account       amount
        Credit account          amount
    Explanation
```

Textbook convention:

1. debit account ditulis lebih dulu;
2. credit account di-indent;
3. explanation dapat diberikan di bawahnya.

### Example — Owner Investment

```text
Sept. 1
Cash                         15,000
    Owner's Capital                  15,000
Owner's investment of cash in business
```

---

## 16. Journalizing

**Journalizing** adalah process memasukkan transaction data ke journal.

Safe procedure:

```text
1. Identify accounts affected
2. Determine account classification
3. Determine increase/decrease
4. Apply debit/credit rule
5. Check total debits = total credits
6. Record entry chronologically
```

### Example — Purchase Equipment for Cash

Business buys equipment $7,000 cash.

Economic effect:

- Equipment ↑;
- Cash ↓.

Classification:

- both assets.

Debit-credit:

- Equipment increase → debit;
- Cash decrease → credit.

Journal:

```text
Equipment                    7,000
    Cash                             7,000
```

Notice:

> No expense account appears.

This is an asset exchange.

---

## 17. Simple and Compound Entries

### 17.1 Simple Entry

A **simple entry** involves only two accounts.

Example:

```text
Dr Rent Expense      900
    Cr Cash                  900
```

### 17.2 Compound Entry

A **compound entry** involves three or more accounts.

Example: pay $3,000 where:

- $2,000 refundable deposit;
- $1,000 prepaid rent.

```text
Dr Deposit            2,000
Dr Prepaid Rent       1,000
    Cr Cash                   3,000
```

The key is still:

$$
Total\ Debits = Total\ Credits
$$

> [!WARNING] Important Distinction
> **Compound entry ≠ multiple transactions.**
>
> One economic transaction can affect several accounts and still be recorded as one compound entry.

---

## 18. Representative Journal Entries

The chapter's full examples are repetitive by design. The core patterns are more important than memorizing every amount.

### A. Owner invests cash

```text
Dr Cash
    Cr Owner's Capital
```

Effect:

- asset ↑;
- equity ↑.

### B. Purchase asset for cash

```text
Dr Equipment
    Cr Cash
```

Effect:

- one asset ↑;
- another asset ↓.

### C. Purchase supplies on account

```text
Dr Supplies
    Cr Accounts Payable
```

Effect:

- asset ↑;
- liability ↑.

### D. Receive cash before service is earned

```text
Dr Cash
    Cr Unearned Service Revenue
```

Effect:

- asset ↑;
- liability ↑.

Cash receipt is not yet revenue because company still owes service.

### E. Earn service revenue for cash

```text
Dr Cash
    Cr Service Revenue
```

Effect:

- asset ↑;
- revenue ↑;
- equity ↑.

### F. Earn revenue on account

```text
Dr Accounts Receivable
    Cr Service Revenue
```

Cash unchanged.

### G. Pay operating expense

```text
Dr Salaries and Wages Expense
    Cr Cash
```

Expense ↑, equity ↓, cash ↓.

### H. Owner withdraws cash

```text
Dr Owner's Drawings
    Cr Cash
```

Drawings ↑ and equity ultimately ↓, but it is **not an expense**.

---

## 19. The Ledger

Journal answers:

> "Apa transactions yang terjadi, dalam urutan waktu?"

But company also needs to answer:

> "Apa yang terjadi pada Cash selama month?"

Untuk itu digunakan **ledger**.

A **ledger** adalah entire group of accounts maintained by a company.

### Journal vs Ledger

| Journal | Ledger |
|---|---|
| Organized by date | Organized by account |
| Shows transaction as a whole | Shows history of each account |
| Book of original entry | Accumulation/classification layer |
| Best for chronology | Best for balance |

Mental model:

```text
Journal:
Jan 1 transaction
Jan 2 transaction
Jan 3 transaction

Ledger:
Cash → all cash effects
AR → all receivable effects
Revenue → all revenue effects
etc.
```

---

## 20. General Ledger

A **general ledger** contains all major accounts.

Textbook groups accounts generally in order:

1. assets;
2. liabilities;
3. owner's capital;
4. owner's drawings;
5. revenues;
6. expenses.

Example structure:

```text
Assets
101 Cash
112 Accounts Receivable
126 Supplies
130 Prepaid Insurance
157 Equipment

Liabilities
200 Notes Payable
201 Accounts Payable
209 Unearned Service Revenue

Owner's Equity
301 Owner's Capital
306 Owner's Drawings

Revenue
400 Service Revenue

Expenses
726 Salaries and Wages Expense
729 Rent Expense
```

---

## 21. Chart of Accounts

A **chart of accounts** adalah list of accounts beserta numbers yang mengidentifikasi location/order account dalam ledger.

Example logic:

```text
100s → Assets
200s → Liabilities
300s → Owner's Equity
400s → Revenues
700s → Expenses
```

Specific numbering systems dapat berbeda antar company.

### Why It Matters

Chart of accounts creates organization.

Account number tidak memiliki economic meaning universal. Ia adalah company-specific coding system.

> [!INFO] CF4 Connection
> Konsep chart of accounts membantu memahami [[1.4 Company Account Structure]]: financial statements mengagregasikan banyak specific ledger accounts ke statement line items yang lebih broad.

---

## 22. Three-Column Form of Account

Selain T-account, chapter menggunakan practical ledger format yang memiliki columns:

- debit;
- credit;
- balance.

Example:

| Date | Explanation | Ref. | Debit | Credit | Balance |
|---|---|---|---:|---:|---:|

Benefit utamanya:

> ending balance dapat dilihat langsung tanpa menjumlah ulang seluruh T-account setiap kali.

Untuk account dengan normal debit balance:

$$
Ending\ Balance
=
Beginning\ Debit\ Balance
+
Debits
-
Credits
$$

Untuk normal credit account, logic-nya reversed.

---

## 23. Posting

**Posting** adalah transferring journal entries ke ledger accounts.

Journalization mencatat transaction secara chronological.

Posting memindahkan effect tersebut ke each specific account.

Flow:

```text
Journal Entry
Dr Cash 10,000
    Cr Owner's Capital 10,000
↓
Cash Ledger +10,000
Owner's Capital Ledger +10,000
```

### Basic Posting Steps

Textbook memberi four-step manual procedure:

1. post debit date, journal page/reference, dan amount ke debit account di ledger;
2. masukkan account number di reference column journal;
3. post credit information ke credit account di ledger;
4. masukkan credit account number di journal reference.

Detail ini terutama manual-system procedure.

Economic lesson-nya:

> Posting memastikan bahwa effect dari satu transaction yang tersimpan bersama di journal sekarang terakumulasi pada histories dari masing-masing accounts.

---

## 24. Why Posting Is Necessary

Suppose journal memiliki:

```text
Oct 1  Dr Cash 10,000
Oct 2  Dr Cash 1,200
Oct 3  Cr Cash   900
Oct 4  Cr Cash   600
...
```

Journal menunjukkan chronology tetapi tidak langsung memberi ending cash.

Setelah posting ke Cash ledger:

```text
Beginning / debit effects
− credit effects
= current Cash balance
```

Textbook example menunjukkan ledger cash dengan multiple transactions dan cumulative ending balance.

Jadi:

```text
Journal = individual transaction memory
Ledger = account-level cumulative memory
```

---

## 25. The Recording Process Illustrated

Chapter kemudian menyatukan seluruh mechanics dengan series of transactions.

Walaupun angka individual bukan bagian yang harus dihafal, methodology harus dipahami.

Untuk setiap transaction:

### Step 1 — Analyze

Tentukan:

- accounts;
- classifications;
- increase/decrease.

### Step 2 — Journalize

Apply debit-credit rules.

### Step 3 — Post

Update relevant ledger account balances.

### Example — Borrowing

Suppose company signs note and receives $5,000 cash.

Analysis:

- Cash asset ↑;
- Notes Payable liability ↑.

Journal:

```text
Dr Cash              5,000
    Cr Notes Payable         5,000
```

Ledger:

```text
Cash
+5,000

Notes Payable
+5,000 credit balance
```

Economic meaning:

- company has more resources;
- but has matching obligation;
- no revenue generated.

### Example — Cash Received in Advance

Company receives $1,200 cash before earning service.

```text
Dr Cash                        1,200
    Cr Unearned Service Revenue       1,200
```

Why liability?

Because company owes future service or refund if service is not delivered.

> [!WARNING] Important Distinction
> **Cash receipt ≠ earned revenue.**
>
> Accounting looks at whether performance obligation/economic earning has occurred, not merely cash movement.

### Example — Revenue Earned

When service is performed:

```text
Dr Cash / Accounts Receivable
    Cr Service Revenue
```

Revenue is credited because revenue increases owner's equity.

### Example — Expense Paid

```text
Dr Rent Expense
    Cr Cash
```

Expense is debited because expense decreases owner's equity.

---

## 26. From Journal to Ledger to Balance

A useful way to visualize the chapter:

```text
Economic Event
"Paid rent $900"
↓
Account analysis
Rent Expense ↑
Cash ↓
↓
Journal
Dr Rent Expense 900
    Cr Cash 900
↓
Posting
Rent Expense ledger +900 debit
Cash ledger +900 credit
↓
Updated balances
↓
Trial Balance
↓
Financial Statements
```

This is the central bridge from real-world activity to reported accounting numbers.

---

## 27. Trial Balance

After journalizing and posting, company prepares a **trial balance**.

A trial balance is:

> a list of accounts and their balances at a given time.

Its primary purpose is to prove equality of debit and credit balances after posting.

### Basic Format

| Account | Debit | Credit |
|---|---:|---:|
| Cash | X | |
| Accounts Receivable | X | |
| Equipment | X | |
| Accounts Payable | | X |
| Owner's Capital | | X |
| Owner's Drawings | X | |
| Service Revenue | | X |
| Salaries Expense | X | |
| **Total** | **XX** | **XX** |

The key test:

$$
Total\ Debit\ Balances
=
Total\ Credit\ Balances
$$

---

## 28. How to Prepare a Trial Balance

Textbook procedure:

1. list account titles and balances;
2. enter debit balances in debit column;
3. enter credit balances in credit column;
4. total each column;
5. verify equality.

Accounts are generally listed in ledger order.

### Example Logic

Suppose balances:

- Cash = debit 5,000
- Equipment = debit 20,000
- Accounts Payable = credit 4,000
- Owner's Capital = credit 18,000
- Service Revenue = credit 8,000
- Rent Expense = debit 3,000
- Salaries Expense = debit 2,000

Debit total:

$$
5{,}000+20{,}000+3{,}000+2{,}000
=
30{,}000
$$

Credit total:

$$
4{,}000+18{,}000+8{,}000
=
30{,}000
$$

Trial balance balances.

But this does **not** prove every transaction is correct.

---

## 29. What a Trial Balance Can Detect

A trial balance may reveal certain errors because debit total and credit total no longer match.

Examples:

- one side of journal entry not posted;
- debit amount posted incorrectly while credit is correct;
- debit posted as credit;
- arithmetic error in account balance;
- different amounts used for debit and credit.

If difference exists, company must investigate.

---

## 30. What a Trial Balance Cannot Detect

A balanced trial balance does **not** guarantee accounting records are correct.

Several errors can preserve equality.

### 30.1 Transaction Completely Omitted

If both debit and credit are omitted:

$$
Debit\ total = Credit\ total
$$

still holds.

### 30.2 Correct Entry Posted Twice

Both sides doubled equally.

Trial balance still balances.

### 30.3 Wrong Accounts, Correct Sides and Amounts

Example:

Purchase computer on account should be:

```text
Dr Equipment
    Cr Accounts Payable
```

but company records:

```text
Dr Supplies
    Cr Accounts Payable
```

Debits still equal credits.

Trial balance cannot identify classification error.

### 30.4 Equal Error on Both Sides

If transaction amount $250 is incorrectly recorded as $25 on both debit and credit:

trial balance remains equal.

> [!WARNING] Important Distinction
> **Balanced trial balance ≠ correct financial statements.**
>
> Trial balance tests **arithmetic equality**, not economic correctness.

This is one of the most important conceptual lessons of the chapter.

---

## 31. Trial Balance as a Bridge to Financial Statements

The trial balance is not itself a financial statement.

It is an internal accounting schedule used between:

```text
Ledger
↓
Trial Balance
↓
Financial Statement Preparation
```

At this early stage of the textbook, trial balance supplies account balances that later become:

- income statement items;
- owner's equity statement items;
- balance sheet items.

Later accounting chapters introduce adjustments before final statements, but Chapter 2's core lesson is that ledger account balances must first be organized and verified.

---

## 32. Debit/Credit Does Not Describe Cash Direction

This misconception deserves separate treatment.

Consider four transactions:

### Cash Received from Owner

```text
Dr Cash
    Cr Capital
```

Cash inflow → Cash debit.

### Cash Received from Customer for Earned Revenue

```text
Dr Cash
    Cr Revenue
```

Cash inflow → Cash debit.

### Cash Paid for Equipment

```text
Dr Equipment
    Cr Cash
```

Cash outflow → Cash credit.

### Revenue Earned on Credit

```text
Dr Accounts Receivable
    Cr Revenue
```

No cash flow at all, but still debit and credit.

Therefore:

> debit/credit is an **accounting position convention**, not a cash-flow vocabulary.

---

## 33. Economic Substance Before Debit/Credit

The safest reasoning process for CF4 is:

```text
1. What happened economically?
↓
2. Which accounts changed?
↓
3. What type of account is each?
↓
4. Did each account increase or decrease?
↓
5. Apply debit/credit rules
↓
6. Verify total Dr = total Cr
↓
7. Identify financial statement effect
```

Example:

> Company purchases supplies on account.

Do not start:

> "Debit apa ya?"

Start:

1. company now has more supplies → asset ↑;
2. company owes supplier → liability ↑;
3. asset increase = debit;
4. liability increase = credit.

Thus:

```text
Dr Supplies
    Cr Accounts Payable
```

This reasoning is much safer than rote memorization.

---

## 34. Relationship to Accounting Equation

Double-entry system is not separate from accounting equation.

It is the operational mechanism that preserves it.

Example:

### Equipment Purchased on Account — $10,000

Economic equation:

$$
Assets +10{,}000
=
Liabilities +10{,}000
$$

Journal:

```text
Dr Equipment           10,000
    Cr Accounts Payable        10,000
```

### Pay $4,000 of Payable

Economic equation:

$$
Assets -4{,}000
=
Liabilities -4{,}000
$$

Journal:

```text
Dr Accounts Payable     4,000
    Cr Cash                     4,000
```

Both representations describe the same economic effect at different levels.

---

## 35. Relationship to Financial Statements

Debit-credit rules determine how transactions build statement balances.

### Balance Sheet

Assets normally debit.

Liabilities and capital normally credit.

### Income Statement

Revenues normally credit.

Expenses normally debit.

### Owner's Equity Statement

Drawings normally debit.

Net income enters through the effects of revenue and expenses.

Mental model:

```text
Revenue credits
− Expense debits
↓
Net Income
↓
Owner's Equity
↓
Balance Sheet
```

> [!INFO] CF4 Connection
> This linkage explains why a transaction classification error can affect both income statement and balance sheet even when trial balance still balances.

---

## 36. Errors Can Be Balanced Yet Economically Wrong

Suppose company buys equipment $5,000 cash.

Correct:

```text
Dr Equipment     5,000
    Cr Cash              5,000
```

Incorrect:

```text
Dr Rent Expense  5,000
    Cr Cash              5,000
```

Both entries satisfy:

$$
Debits = Credits
$$

But financial statements differ dramatically.

Correct treatment:

- equipment ↑;
- cash ↓;
- current profit unaffected immediately.

Incorrect treatment:

- cash ↓;
- expense ↑;
- net income ↓;
- equity ↓;
- equipment understated.

So bookkeeping balance does not ensure faithful economic classification.

This is why understanding accounts matters beyond mechanical entry.

---

## 37. Chapter's Main Worked Logic — One Short Integrated Example

Assume a new business has these transactions:

### Transaction 1 — Owner invests $20,000 cash

```text
Dr Cash                 20,000
    Cr Owner's Capital          20,000
```

Balances:

- Cash = 20,000 Dr
- Capital = 20,000 Cr

### Transaction 2 — Buy equipment $6,000 cash

```text
Dr Equipment             6,000
    Cr Cash                      6,000
```

Balances:

- Cash = 14,000 Dr
- Equipment = 6,000 Dr
- Capital = 20,000 Cr

### Transaction 3 — Buy supplies $2,500 on account

```text
Dr Supplies              2,500
    Cr Accounts Payable          2,500
```

### Transaction 4 — Earn service revenue $5,000 cash

```text
Dr Cash                  5,000
    Cr Service Revenue           5,000
```

### Transaction 5 — Pay rent $1,000

```text
Dr Rent Expense          1,000
    Cr Cash                      1,000
```

### Transaction 6 — Owner withdraws $500

```text
Dr Owner's Drawings        500
    Cr Cash                        500
```

### Ending Ledger Balances

Cash:

$$
20{,}000-6{,}000+5{,}000-1{,}000-500
=
17{,}500
$$

Other balances:

- Equipment = 6,000 Dr
- Supplies = 2,500 Dr
- Accounts Payable = 2,500 Cr
- Capital = 20,000 Cr
- Drawings = 500 Dr
- Service Revenue = 5,000 Cr
- Rent Expense = 1,000 Dr

### Trial Balance

Debits:

$$
17{,}500+6{,}000+2{,}500+500+1{,}000
=
27{,}500
$$

Credits:

$$
2{,}500+20{,}000+5{,}000
=
27{,}500
$$

Trial balance balances.

### Economic Interpretation

Net income:

$$
5{,}000-1{,}000=4{,}000
$$

Ending owner's equity conceptually:

$$
20{,}000+4{,}000-500
=
23{,}500
$$

Balance sheet:

$$
Assets
=
17{,}500+6{,}000+2{,}500
=
26{,}000
$$

$$
Liabilities+Equity
=
2{,}500+23{,}500
=
26{,}000
$$

The integrated example shows that:

```text
Journal entries
↓
Ledger balances
↓
Trial balance
↓
Income and equity effects
↓
Financial statements
```

all represent the same underlying transactions.

---

## 38. A Look at IFRS

The basic mechanics in this chapter are not uniquely U.S. accounting mechanics.

The fundamental recording logic—accounts, debit/credit equality, journals, ledgers, and trial-balance concepts—supports financial reporting systems under different reporting frameworks.

The differences between GAAP and IFRS matter more for:

- recognition;
- measurement;
- presentation;
- disclosure;

than for the basic idea that accounting systems use balanced entries to record transactions.

> [!NOTE] Textbook Context
> Chapter 2's main learning value is therefore largely framework-neutral: **double-entry mechanics are a recording system; accounting standards determine how economic events should be classified and measured before/while they are recorded.**

---

## Chapter Synthesis

Jika seluruh Chapter 2 hanya boleh dipahami sebagai satu cerita, ceritanya adalah:

**Chapter 1 memberi kita accounting equation. Chapter 2 mengubah equation tersebut menjadi operating system untuk mencatat transaksi.**

Perusahaan tidak menyimpan seluruh history hanya dalam satu equation. Ia membuat separate **accounts** untuk setiap major financial item. Setiap account memiliki left side (debit) dan right side (credit). Double-entry rules memastikan bahwa total debit selalu sama dengan total credit.

Rules-nya mengikuti structure accounting equation:

```text
Debit-normal:
Assets
Drawings
Expenses

Credit-normal:
Liabilities
Capital
Revenues
```

Transaction kemudian berjalan melalui information pipeline:

```text
Business evidence
↓
Analyze account effects
↓
Journalize transaction
↓
Post to ledger
↓
Determine account balances
↓
Prepare trial balance
↓
Prepare financial statements
```

Journal menjaga **chronology**. Ledger menjaga **account-level history**. Trial balance memastikan **arithmetic equality**.

Namun chapter juga mengajarkan limitation penting: accounting records dapat mathematically balanced tetapi economically wrong. Salah memilih account, menghilangkan transaction seluruhnya, atau mencatat amount salah pada both sides dapat membuat trial balance tetap balance.

Karena itu pemahaman accounting bukan:

> "Debit harus sama dengan credit."

Melainkan:

> **Economic event harus diklasifikasikan secara benar, lalu double-entry memastikan mechanical consistency.**

Untuk CF4, inilah bridge yang menghubungkan business transactions dengan financial statements.

---

## Key Concepts

| Concept | Meaning | Why It Matters | CF4 Link |
|---|---|---|---|
| Account | Record increases/decreases suatu financial item | Basic unit recording | [[1.4 Company Account Structure]] |
| T-account | Simplified two-sided account | Visualize debit/credit | [[1.5 Financial Statements Construction]] |
| Debit | Left side | Not synonymous with increase | [[1.5 Financial Statements Construction]] |
| Credit | Right side | Not synonymous with decrease | [[1.5 Financial Statements Construction]] |
| Double-entry | Equal debit and credit effect | Preserves accounting balance | [[1.5 Financial Statements Construction]] |
| Normal balance | Side where account normally increases | Helps classify balances | [[1.5 Financial Statements Construction]] |
| Asset | Debit-normal | Statement of financial position | [[1.4 Company Account Structure]] |
| Liability | Credit-normal | Statement of financial position | [[1.4 Company Account Structure]] |
| Capital | Credit-normal | Owner claim | [[1.4 Company Account Structure]] |
| Drawings | Debit-normal | Reduces owner equity | [[1.5 Financial Statements Construction]] |
| Revenue | Credit-normal | Increases equity through income | [[1.5 Financial Statements Construction]] |
| Expense | Debit-normal | Decreases equity through income | [[1.5 Financial Statements Construction]] |
| Journal | Chronological original record | Shows complete transaction effect | [[1.5 Financial Statements Construction]] |
| Journalizing | Recording transaction in journal | First formal recording step | [[1.5 Financial Statements Construction]] |
| Simple entry | Two-account entry | Basic double entry | [[1.5 Financial Statements Construction]] |
| Compound entry | Three+ account entry | Handles multi-account transaction | [[1.5 Financial Statements Construction]] |
| Ledger | Entire group of accounts | Provides account histories | [[1.4 Company Account Structure]] |
| General ledger | Main set of all accounts | Core accounting database concept | [[1.4 Company Account Structure]] |
| Chart of accounts | Account list + numbers | Organizes ledger structure | [[1.4 Company Account Structure]] |
| Posting | Journal → ledger transfer | Accumulates account effects | [[1.5 Financial Statements Construction]] |
| Trial balance | List of ending account balances | Checks debit-credit equality | [[1.5 Financial Statements Construction]] |

---

## Compression Notes

### Retained in Detail

- purpose of separate accounts;
- T-account structure;
- debit and credit definitions;
- double-entry system;
- normal balances;
- debit/credit rules for all major account types;
- expanded equation relationship;
- recording-process steps;
- journal purpose and format;
- journalizing mechanics;
- simple vs compound entries;
- representative transaction entries;
- ledger and general ledger;
- chart of accounts;
- posting logic;
- trial-balance construction;
- trial-balance limitations;
- integrated journal → ledger → trial balance example.

### Condensed

- MF Global opening story;
- individual company anecdotes;
- manual reference-column procedures;
- repeated journal entries with similar mechanics;
- full Softbyte ledger reproduction;
- repeated DO IT! exercises;
- detailed account-number lists;
- every practice transaction from the chapter;
- textbook multiple-choice review.

### Omitted / Beyond CF4

- website/resources instructions;
- WileyPLUS directions;
- large exercise sets;
- homework-specific posting instructions;
- full manual bookkeeping forms;
- detailed page-reference mechanics;
- repetitive computational practice;
- ethics exercises not adding new conceptual recording content.

> [!IMPORTANT] Scope Note
> Weygandt Chapter 2 adalah referensi resmi Topik 1 CF4. Detail debit-credit dan transaction recording dipertahankan karena mendukung kemampuan menyusun financial statements sederhana. Manual clerical details seperti reference-column posting dipadatkan karena learning value untuk CF4 lebih rendah dibanding understanding atas **classification, direction, double-entry, dan statement impact**.

---

## CF4 Connection Map

```text
Business Transaction
        ↓
Account Identification
        ↓
Debit / Credit
        ↓
Journal
        ↓
Ledger
        ↓
Trial Balance
        ↓
[[1.5 Financial Statements Construction]]
        ↓
Financial Statements
        ↓
[[1.4 Company Account Structure]]
        ↓
[[1.6 Financial Ratios and Interpretation]]
```

Chapter 2 terutama menjadi mechanics layer antara [[1.3 Accounting Concepts and Sustainability]] dan [[1.5 Financial Statements Construction]].

---

## Quick Reading Review

- Account adalah record untuk specific asset, liability, equity, revenue, atau expense item.
- T-account memiliki debit di kiri dan credit di kanan.
- **Debit tidak selalu increase; credit tidak selalu decrease.**
- Double-entry mengharuskan:
  $$
  Total\ Debits=Total\ Credits
  $$
- Assets naik dengan debit dan normal balance-nya debit.
- Liabilities naik dengan credit dan normal balance-nya credit.
- Owner's Capital naik dengan credit.
- Owner's Drawings naik dengan debit.
- Revenues naik dengan credit.
- Expenses naik dengan debit.
- Shortcut: **Assets + Drawings + Expenses = debit-normal**.
- Journal menyimpan transactions secara chronological.
- Journal adalah **book of original entry**.
- Journalizing = entering transaction data into journal.
- Simple entry memiliki dua accounts.
- Compound entry memiliki tiga atau lebih accounts.
- Ledger = entire group of company accounts.
- General ledger menunjukkan cumulative effect per account.
- Chart of accounts adalah list accounts + identifying numbers.
- Posting = transfer journal information ke ledger.
- Journal menjawab **what happened and when**.
- Ledger menjawab **what happened to this account**.
- Trial balance adalah list account balances pada suatu waktu.
- Primary purpose trial balance = verify equality debit and credit after posting.
- Trial balance membantu financial statement preparation.
- Balanced trial balance tidak membuktikan seluruh records correct.
- Completely omitted transaction tidak membuat trial balance out of balance.
- Wrong account dengan correct debit/credit amount dapat tetap balance.
- Correct entry posted twice dapat tetap balance.
- Equal wrong amount pada debit dan credit dapat tetap balance.
- Purchase asset for cash: debit asset acquired, credit Cash.
- Purchase on account: debit asset, credit payable.
- Pay payable: debit payable, credit Cash.
- Cash received in advance: debit Cash, credit unearned revenue liability.
- Revenue earned: credit Revenue.
- Expense incurred: debit Expense.
- Drawings = debit-normal tetapi **bukan expense**.
- Borrowing creates liability, **bukan revenue**.
- Economic substance harus ditentukan sebelum debit/credit.

---

## Source Traceability

| Condensed Section | Textbook Source |
|---|---|
| Why This Chapter Exists / MF Global context | Weygandt, Kimmel & Kieso, Chapter 2 Feature Story |
| Accounts | Chapter 2, Learning Objective 1 — The Account |
| T-account | Chapter 2, Learning Objective 1 |
| Debit and credit | Chapter 2, Learning Objective 1 — Debits and Credits |
| Double-entry system | Chapter 2, Learning Objective 1 |
| Normal balance | Chapter 2, Learning Objective 1 |
| Assets and liabilities rules | Chapter 2, Learning Objective 1 |
| Owner's capital / drawings | Chapter 2, Learning Objective 1 |
| Revenue / expense rules | Chapter 2, Learning Objective 1 |
| Summary debit-credit rules | Chapter 2, Illustration 2-11 |
| Steps in recording process | Chapter 2, Learning Objective 2 |
| Transaction evidence | Chapter 2 — Steps in the Recording Process |
| Journal | Chapter 2, Learning Objective 2 |
| Journalizing | Chapter 2, Learning Objective 2 |
| Simple / compound entries | Chapter 2, Learning Objective 2 |
| Ledger | Chapter 2, Learning Objective 3 |
| General ledger | Chapter 2, Learning Objective 3 |
| Chart of accounts | Chapter 2, Learning Objective 3 |
| Three-column account | Chapter 2, Learning Objective 3 |
| Posting | Chapter 2, Learning Objective 3 |
| Full recording-process illustration | Chapter 2 — The Recording Process Illustrated |
| Trial balance definition and purpose | Chapter 2, Learning Objective 4 |
| Trial balance preparation | Chapter 2, Learning Objective 4 |
| Trial balance limitations | Chapter 2, Learning Objective 4 |
| IFRS context | Chapter 2 — A Look at IFRS |
