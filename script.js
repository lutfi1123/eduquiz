const pages = document.querySelectorAll(".page");

function showPage(pageId) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

/* DATA QUIZ */
const questions = [
    {
        q: "Apa kepanjangan HTML?",
        o: ["Hyper Text Markup Language", "High Tool Machine", "Hyperlink Text", "Home Tool Markup"],
        a: 0
    },
    {
        q: "CSS berfungsi untuk?",
        o: ["Logika", "Database", "Tampilan", "Server"],
        a: 2
    },
    {
        q: "JavaScript digunakan untuk?",
        o: ["Desain", "Struktur", "Interaksi", "Styling"],
        a: 2
    }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const finalScoreEl = document.getElementById("finalScore");

function loadQuestion() {
    questionEl.textContent = questions[index].q;
    optionBtns.forEach((btn, i) => {
        btn.textContent = questions[index].o[i];
    });
}

function checkAnswer(choice) {
    if (choice === questions[index].a) {
        score += 10;
    }
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        finalScoreEl.textContent = "Skor: " + score;
        showPage("score");
    }
}

loadQuestion();