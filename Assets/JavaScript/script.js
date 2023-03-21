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

  function start() {
    window.location.href = "question.html";
  }
  
  localStorage.setItem("currentPage","start")