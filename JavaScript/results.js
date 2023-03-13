// Get the form and input elements
const form = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");

// Listen for form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get initials value from input and save to localStorage
  const initials = initialsInput.value;
  localStorage.setItem("highscoreInitials", initials);

  // Show highscores page
  showHighscores();
});

// Function to show highscores page
function showHighscores() {
  // Hide unnecessary elements
  const submitContainer = document.getElementById("submit-container");
  const resultContainer = document.getElementById("result-container");
  const restartContainer = document.getElementById("restart-container");
  
  if (submitContainer) {
    submitContainer.classList.add("hide");
  }
  if (resultContainer) {
    resultContainer.classList.add("hide");
  }
  if (restartContainer) {
    restartContainer.classList.remove("hide");
  }

  // Get highscore list element
  const highscoreList = document.getElementById("highscore-list");

  // Get highscores from localStorage
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  // Add current score to highscores
  const currentScore = {
    initials: localStorage.getItem("highscoreInitials"),
    score: localStorage.getItem("highscore"),
  };
  highscores.push(currentScore);

  // Sort highscores by score (highest to lowest)
  highscores.sort((a, b) => b.score - a.score);

  // Update highscore list element with new highscores
  highscoreList.innerHTML = "";
  for (let i = 0; i < highscores.length; i++) {
    const highscore = highscores[i];
    const listItem = document.createElement("li");
    listItem.innerText = `${highscore.initials}: ${highscore.score}`;
    highscoreList.appendChild(listItem);
  }

  // Save updated highscores to localStorage
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Get play again button and add click event listener
const playAgainButton = document.getElementById("play-again");
playAgainButton.addEventListener("click", function(event) {
  // Prevent default link behavior
  event.preventDefault();

  // Go back to question page
  window.location.href = "question.html";
});
