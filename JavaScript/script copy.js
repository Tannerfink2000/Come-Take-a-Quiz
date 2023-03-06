// Define quiz questions and answers
const questions = [
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    },
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    },
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    },
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    },
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    }
  ];
  
  // Define variables
  var startButton = document.getElementById("start");
  var quizContainer = document.getElementById("quiz-container");
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var resultContainer = document.getElementById("result-container");
  var resultText = document.getElementById("result-text");
  var scoreContainer = document.getElementById("score-container");
  var scoreElement = document.getElementById("score");
  var submitContainer = document.getElementById("submit-container");
  var initialsForm = document.getElementById("initials-form");
  var initialsInput = document.getElementById("initials");
  var submitButton = document.getElementById("submit");
  
  var currentQuestion = 0;
  var score = 0;
  var timeLeft = 60;
  var timerInterval;
  
  function startButton() {
    window.location.href = "question.html";
  }
  // Function to start the quiz
  function startQuiz() {
    startButton.classList.add("hide");
    quizContainer.classList.remove("hide");
    timerInterval = setInterval(function() {
      timeLeft--;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
    showQuestion();
  }
  
  // Function to show the current question
  function showQuestion() {
    var question = questions[currentQuestion];
    questionElement.innerText = question.question;
    choicesElement.innerHTML = "";
    for (var i = 0; i < question.choices.length; i++) {
      var choice = question.choices[i];
      var button = document.createElement("button");
      button.innerText = choice;
      button.classList.add("choice");
      button.addEventListener("click", function() {
        if (i === question.answer) {
          resultText.innerText = "Correct!";
          score++;
        } else {
          resultText.innerText = "Incorrect.";
          timeLeft -= 10;
        }
        resultContainer.classList.remove("hide");
        setTimeout(function() {
          resultContainer.classList.add("hide");
          currentQuestion++;
          if (currentQuestion < questions.length) {
            showQuestion();
          } else {
            endQuiz();
          }
        }, 1000);
      });
      choicesElement.appendChild(button);
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.classList.add("hide");
    submitContainer.classList.remove("hide");
    scoreElement.innerText = score;
  }
  
  // Event listener to start the quiz
  startButton.addEventListener("click", startQuiz);
  
  // Event listener to submit the user's initials and score
  initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var initials = initialsInput.value.toUpperCase();
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({initials: initials, score: score});
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "highscores.html";
  });
  