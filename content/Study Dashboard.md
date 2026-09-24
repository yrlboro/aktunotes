---
cssclasses:
  - study-dashboard
dashboard_title: Study Command Center
exam_1_name: ASAI Exam Day 1
exam_1_date: 2026-11-23
exam_1_subjects:
  - CF1
  - CF4
exam_2_name: ASAI Exam Day 2
exam_2_date: 2026-11-24
exam_2_subjects:
  - CF2
subjects:
  - CF1
  - CF2
  - CF3
  - CF4
  - TA1
  - TA2
  - TA3
  - BA1
  - BA2
  - BA3
  - BA4G
timer_default: 25
timer_presets:
  - 25
  - 50
  - 90
agenda_max_tasks: 8
agenda_include_overdue: true
progress_cf1: 60
progress_cf2: 50
progress_cf3: 100
progress_cf4: 5
progress_ta1: 0
progress_ta2: 0
progress_ta3: 0
progress_ba1: 0
progress_ba2: 0
progress_ba3: 0
progress_ba4g: 0
focus_subject: CF4
focus_topic: Taxation Principles
focus_goal: Understand → Drill → Recall
---

# Study Command Center

```dataviewjs
const page = dv.current();

// ============================================================
// SETTINGS FROM PROPERTIES
// ============================================================

const title = page.dashboard_title ?? "Study Command Center";

const subjects = Array.from(page.subjects ?? []);

const timerDefault = Number(page.timer_default ?? 25);
const timerPresets = Array.from(page.timer_presets ?? [25, 50, 90]).map(Number);

const agendaMaxTasks = Number(page.agenda_max_tasks ?? 8);
const agendaIncludeOverdue = page.agenda_include_overdue ?? true;

const progress = {
    CF1: Number(page.progress_cf1 ?? 0),
    CF2: Number(page.progress_cf2 ?? 0),
    CF3: Number(page.progress_cf3 ?? 0),
    CF4: Number(page.progress_cf4 ?? 0),
    TA1: Number(page.progress_ta1 ?? 0),
    TA2: Number(page.progress_ta2 ?? 0),
    TA3: Number(page.progress_ta3 ?? 0),
    BA1: Number(page.progress_ba1 ?? 0),
    BA2: Number(page.progress_ba2 ?? 0),
    BA3: Number(page.progress_ba3 ?? 0),
    BA4G: Number(page.progress_ba4g ?? 0)
};

const visibleProgress = Object.fromEntries(
    Object.entries(progress).filter(([subject]) => subjects.includes(subject))
);


// ============================================================
// ROOT
// ============================================================

const root = dv.container;
root.classList.add("study-command-center");


// ============================================================
// DATE / GREETING
// ============================================================

const now = new Date();
const hour = now.getHours();

let greeting = "Good Evening";
if (hour < 12) greeting = "Good Morning";
else if (hour < 18) greeting = "Good Afternoon";

const dateText = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});


// ============================================================
// HEADER
// ============================================================

const header = document.createElement("div");
header.className = "study-header";

header.innerHTML = `
    <div>
        <div class="study-eyebrow">${greeting.toUpperCase()}</div>
        <div class="study-title">${title}</div>
    </div>

    <div class="study-date">
        ${dateText}
    </div>
`;

root.appendChild(header);


// ============================================================
// MAIN GRID
// ============================================================

const grid = document.createElement("div");
grid.className = "study-grid";

root.appendChild(grid);


// ============================================================
// TIMER
// ============================================================

const timerCard = document.createElement("div");
timerCard.className = "study-card timer-card";

grid.appendChild(timerCard);

let duration = timerDefault * 60;
let remaining = duration;
let timerInterval = null;
let running = false;

timerCard.innerHTML = `
    <div class="card-label">FOCUS TIMER</div>

    <div class="timer-display">${String(timerDefault).padStart(2, "0")}:00</div>

    <div class="timer-presets">
        ${timerPresets
            .map(min => `<button data-min="${min}">${min}</button>`)
            .join("")}
    </div>

    <div class="timer-actions">
        <button class="timer-start">START</button>
        <button class="timer-reset">RESET</button>
    </div>
`;

const display = timerCard.querySelector(".timer-display");
const startBtn = timerCard.querySelector(".timer-start");
const resetBtn = timerCard.querySelector(".timer-reset");

function updateDisplay() {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    display.textContent =
        `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function stopTimer(buttonText = "START") {
    clearInterval(timerInterval);
    timerInterval = null;
    running = false;
    startBtn.textContent = buttonText;
}

function startTimer() {
    if (running) {
        stopTimer("RESUME");
        return;
    }

    running = true;
    startBtn.textContent = "PAUSE";

    timerInterval = setInterval(() => {
        if (remaining > 0) {
            remaining--;
            updateDisplay();
        } else {
            stopTimer("START");
            display.textContent = "DONE!";
        }
    }, 1000);
}

startBtn.onclick = startTimer;

resetBtn.onclick = () => {
    stopTimer("START");
    remaining = duration;
    updateDisplay();
};

timerCard.querySelectorAll(".timer-presets button").forEach(btn => {
    btn.onclick = () => {
        stopTimer("START");

        const minutes = Number(btn.dataset.min);

        duration = minutes * 60;
        remaining = duration;

        updateDisplay();
    };
});

updateDisplay();


// ============================================================
// TODAY AGENDA
// ============================================================

const agendaCard = document.createElement("div");
agendaCard.className = "study-card agenda-card";

grid.appendChild(agendaCard);

const agendaTitle = document.createElement("div");
agendaTitle.className = "card-label";
agendaTitle.textContent = "TODAY";

agendaCard.appendChild(agendaTitle);

const agendaContent = document.createElement("div");
agendaContent.className = "agenda-content";

agendaCard.appendChild(agendaContent);

const today = dv.date("today");
let tasks = [];

for (const p of dv.pages()) {
    for (const task of p.file.tasks) {
        if (!task.completed && task.due) {
            const shouldInclude = agendaIncludeOverdue
                ? task.due <= today
                : task.due.toISODate() === today.toISODate();

            if (shouldInclude) tasks.push(task);
        }
    }
}

tasks.sort((a, b) => {
    if (!a.due || !b.due) return 0;
    return a.due.toMillis() - b.due.toMillis();
});

if (tasks.length === 0) {
    agendaContent.innerHTML = `
        <div class="empty-agenda">
            No scheduled study tasks today.
        </div>
    `;
} else {
    for (const task of tasks.slice(0, agendaMaxTasks)) {
        const item = document.createElement("div");
        item.className = "agenda-item";

        item.innerHTML = `
            <span class="agenda-checkbox">□</span>
            <span>${task.text}</span>
        `;

        agendaContent.appendChild(item);
    }
}


// ============================================================
// EXAM COUNTDOWN — MULTIPLE EXAM DATES
// ============================================================

const exams = [
    {
        name: page.exam_1_name ?? "ASAI Examination",
        date: page.exam_1_date,
        subjects: Array.from(page.exam_1_subjects ?? []),
        className: "exam-one"
    },
    {
        name: page.exam_2_name ?? "ASAI Examination",
        date: page.exam_2_date,
        subjects: Array.from(page.exam_2_subjects ?? []),
        className: "exam-two"
    }
];

const examWrapper = document.createElement("div");
examWrapper.className = "exam-wrapper";

root.appendChild(examWrapper);

for (const examData of exams) {

    if (!examData.date) continue;

    // Obsidian/Dataview date property -> Luxon DateTime
    const examDate = dv.date(examData.date);
    const todayDate = dv.date("today");

    let daysRemaining = "—";
    let formattedDate = "DATE NOT SET";

    if (examDate) {

        daysRemaining = Math.max(
            0,
            Math.ceil(
                examDate.diff(todayDate, "days").days
            )
        );

        formattedDate =
            examDate
                .toFormat("dd LLL yyyy")
                .toUpperCase();
    }

    const card = document.createElement("div");

    card.className =
        `study-card countdown-card ${examData.className}`;

    card.innerHTML = `
        <div>
            <div class="card-label">
                ${String(examData.name).toUpperCase()}
            </div>

            <div class="exam-date-label">
                ${formattedDate}
            </div>

            <div class="countdown-subtitle">
                ${examData.subjects.join(" · ")}
            </div>
        </div>

        <div class="countdown-number">
            <span>${daysRemaining}</span>
            <small>DAYS</small>
        </div>
    `;

    examWrapper.appendChild(card);
}


// ============================================================
// SUBJECT PROGRESS
// ============================================================

const progressSection = document.createElement("div");
progressSection.className = "study-card progress-card";

root.appendChild(progressSection);

const progressTitle = document.createElement("div");
progressTitle.className = "card-label";
progressTitle.textContent = "STUDY PROGRESS";

progressSection.appendChild(progressTitle);

for (const [subject, rawValue] of Object.entries(visibleProgress)) {

    const value = Math.max(0, Math.min(100, Number(rawValue) || 0));

    const row = document.createElement("div");
    row.className = "progress-row";

    row.innerHTML = `
        <div class="progress-info">
            <span>${subject}</span>
            <span>${value}%</span>
        </div>

        <div class="progress-track">
            <div
                class="progress-fill"
                style="width:${value}%">
            </div>
        </div>
    `;

    progressSection.appendChild(row);
}
```
---

> [!tip] TODAY'S FOCUS
> **Main subject:** `= this.focus_subject`  
> **Current topic:** `= this.focus_topic`  
> **Goal:** `= this.focus_goal`
