// ==========================
// CELL STUDYHUB QUIZ
// ==========================

const quiz = [
{
question: "What is the basic structural and functional unit of life?",
options: ["Cell", "Tissue", "Organ", "Organ System"],
answer: 0
},
{
question: "Who discovered the cell?",
options: ["Isaac Newton", "Robert Hooke", "Charles Darwin", "Albert Einstein"],
answer: 1
},
{
question: "Which organelle controls all the activities of a cell?",
options: ["Cell Wall", "Nucleus", "Ribosome", "Mitochondria"],
answer: 1
},
{
question: "Plant cells have an extra outer covering called?",
options: ["Cell Membrane", "Cell Wall", "Nucleus", "Cytoplasm"],
answer: 1
},
{
question: "Mitochondria are known as the ____ of the cell.",
options: ["Kitchen", "Powerhouse", "Brain", "Heart"],
answer: 1
}
];

let currentQuestion = 0;
let score = 0;

document.getElementById("startQuiz").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("quizBox").innerHTML = `
        <div class="quiz-container">
            <h3 id="question"></h3>
            <div id="options"></div>
            <button id="nextBtn" style="display:none;">Next ➜</button>
        </div>
    `;
    loadQuestion();
}

function loadQuestion() {
    const q = quiz[currentQuestion];

    document.getElementById("question").innerHTML =
        `Question ${currentQuestion + 1} of ${quiz.length}<br><br>${q.question}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.innerText = option;

        btn.onclick = function () {

            const buttons = document.querySelectorAll(".option");

            buttons.forEach((b) => b.disabled = true);

            if (index === q.answer) {
                btn.style.background = "#16a34a";
                score++;
            } else {
                btn.style.background = "#dc2626";
                buttons[q.answer].style.background = "#16a34a";
            }

            document.getElementById("nextBtn").style.display = "inline-block";
        };

        optionsDiv.appendChild(btn);
    });

    document.getElementById("nextBtn").onclick = nextQuestion;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    let percentage = Math.round((score / quiz.length) * 100);

    let message = "";

    if (percentage >= 90)
        message = "🏆 Excellent!";
    else if (percentage >= 70)
        message = "🌟 Very Good!";
    else if (percentage >= 50)
        message = "👍 Good!";
    else
        message = "📚 Keep Practicing!";

    document.getElementById("quizBox").innerHTML = `

<div class="quiz-container">

<h1>🎉 Quiz Completed</h1>

<h2>${score} / ${quiz.length}</h2>

<h3>${percentage}%</h3>

<p>${message}</p>

<p>✅ Correct : ${score}</p>

<p>❌ Wrong : ${quiz.length-score}</p>

<button onclick="location.reload()">

Restart Quiz

</button>

</div>

`;
}
