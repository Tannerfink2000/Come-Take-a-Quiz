// Define quiz questions and answers
const questions = [
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    }
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    }
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    }
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    }
    {
      question: "",
      choices: ["", "", "", ""],
      answer: 
    }
  ];
  
  // Define variables
  const startButton = document.getElementById("start");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  const scoreContainer = document.getElementById("score-container");
  const scoreElement = document.getElementById("score");
  const submitContainer = document.getElementById("submit-container");
  const initialsForm = document.getElementById("initials-form");
  const initialsInput = document.getElementById("initials");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
  
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
    let question = questions[currentQuestion];
    questionElement.innerText = question.question;
    choicesElement.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
      let choice = question.choices[i];
      let button = document.createElement("button");
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
    let initials = initialsInput.value.toUpperCase();
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({initials: initials, score: score});
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "highscores.html";
  });
  