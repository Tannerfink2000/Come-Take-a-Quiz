var question = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')
var choices = document.querySelectorAll('.choice-text')
var timerEl = document.querySelector('#timer');

var questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers:["A) let", "B) declare","C) var","D) set"],
        correct:"A) let"
    },
    {
        question: "How do you add a comment in JavaScript code?",
        answers:["A) // comment", "B) <!-- comment -->","C) /* comment */","D) all of the above"],
        correct:"A) // comment"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers:["A) string", "B) boolean","C) integer","D) array"],
        correct:"C) integer"
    },
    {
        question: "How do you declare a function in JavaScript?",
        answers:["A) function myFunction()", "B) myFunction()","C) def myFunction()","D) declare myFunction()"],
        correct:"A) function myFunction()"
    },
    {
        question: "Which built-in JavaScript function is used to convert a string to a number?",
        answers:["A) parseInt()", "B) toString()","C) parseFloat()","D) toNumber()"],
        correct:"A) parseInt()"
    },
    
]
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var timerInterval;

function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    localStorage.setItem("mostRecentScore", score);
    window.location.href = "results.html";
}

function updateQuestion() {
    question.textContent = questions[currentQuestion].question;
    for (var i = 0; i < choices.length; i++) {
        choices[i].textContent = questions[currentQuestion].answers[i];
    }
}

function checkAnswer(e) {
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.textContent;
    var correctAnswer = questions[currentQuestion].correct;
    
    if (selectedAnswer === correctAnswer) {
        score++;
        scoreText.textContent= score * 100
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        updateQuestion();
    } else {
        var finalScore = score * 100;
        localStorage.setItem("score", finalScore);
        window.location.href = "results.html";
    }
}

updateQuestion();
startTimer();

for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", checkAnswer);
}

localStorage.setItem("currentPage","game")

