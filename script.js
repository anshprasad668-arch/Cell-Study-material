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
},
    {
question: "Which organelle is known as the powerhouse of the cell?",
options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
answer: 2
},

{
question: "The jelly-like substance inside the cell is called:",
options: ["Cell Wall", "Cytoplasm", "Nucleus", "Vacuole"],
answer: 1
},

{
question: "Which organelle contains the genetic material of the cell?",
options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"],
answer: 0
},

{
question: "Which structure allows substances to enter and leave the cell?",
options: ["Cell Wall", "Cell Membrane", "Nucleus", "Cytoplasm"],
answer: 1
},

{
question: "The cell wall is mainly made up of:",
options: ["Protein", "Cellulose", "Fat", "Starch"],
answer: 1
},

{
question: "Which organelle is responsible for protein synthesis?",
options: ["Ribosome", "Golgi Body", "Mitochondria", "Lysosome"],
answer: 0
},

{
question: "Which organelle is called the 'suicide bag' of the cell?",
options: ["Ribosome", "Lysosome", "Nucleus", "Chloroplast"],
answer: 1
},

{
question: "Chloroplast is found only in:",
options: ["Animal Cells", "Plant Cells", "Bacterial Cells", "Fungal Cells"],
answer: 1
},

{
question: "Which pigment gives plants their green colour?",
options: ["Haemoglobin", "Melanin", "Chlorophyll", "Carotene"],
answer: 2
},

{
question: "Which organelle stores food, water and wastes?",
options: ["Vacuole", "Ribosome", "Golgi Body", "Nucleus"],
answer: 0
},

{
question: "Who first observed living cells?",
options: ["Robert Hooke", "Anton van Leeuwenhoek", "Robert Brown", "Schleiden"],
answer: 1
},

{
question: "Which of the following is absent in animal cells?",
options: ["Cell Membrane", "Cell Wall", "Nucleus", "Mitochondria"],
answer: 1
},

{
question: "The nucleus is surrounded by a:",
options: ["Cell Wall", "Nuclear Membrane", "Cell Membrane", "Cytoplasm"],
answer: 1
},

{
question: "The smallest unit capable of performing all life processes is:",
options: ["Tissue", "Organ", "Cell", "Organ System"],
answer: 2
},

{
question: "Which cell organelle helps in photosynthesis?",
options: ["Golgi Body", "Chloroplast", "Lysosome", "Ribosome"],
answer: 1
},
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

