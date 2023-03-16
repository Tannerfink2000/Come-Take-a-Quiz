// Get the form and input elements
const form = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");
const submitContainer = document.getElementById("submit-container");
const resultContainer = document.getElementById("result-container");
const restartContainer = document.getElementById("restart-container");
const highscoreList = document.getElementById("highscore-list");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  

// Listen for form submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get initials value from input and save to localStorage
  const initials = initialsInput.value;
  localStorage.setItem("highscoreInitials", initials);

  console.log ("clicked form")
  // Show highscores page
  showHighscores();
});

for (let i = 0; i < highscores.length; i++) {
  const highscore = highscores[i];
  const listItem = document.createElement("li");
  listItem.innerText = `${highscore.initials}: ${highscore.score}`;
  highscoreList.appendChild(listItem);
}
// Function to show highscores page
function showHighscores() {
  // Hide unnecessary elements
  
  if (submitContainer) {
    submitContainer.classList.add("hide");
  }
  if (resultContainer) {
    resultContainer.classList.add("hide");
  }
  if (restartContainer) {
    restartContainer.classList.remove("hide");
  }

  console.log (highscores)
  // Add current score to highscores
  const currentScore = {
    initials: localStorage.getItem("highscoreInitials"),
    score: localStorage.getItem("score"),
  };
  highscores.push(currentScore);

  // Sort highscores by score (highest to lowest)
  highscores.sort((a, b) => b.score - a.score);

  console.log(highscores)
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

if (localStorage.getItem("currentPage")==="start") {
    submitContainer.classList.add("hide")
}

// Get play again button and add click event listener
//const playAgainButton = document.getElementById("play-again");
//playAgainButton.addEventListener("click", function(event) {
  // Prevent default link behavior
  //event.preventDefault();

  // Go back to question page
 // window.location.href = "question.html";
//});
