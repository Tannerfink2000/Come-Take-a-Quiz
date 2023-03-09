var question = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')
var choices = document.querySelectorAll('.choice-text')
var questions = [
    {
        question: "what is an object?",
        answers:["1", "2","4","3"],
        correct:"1"
    },
    {
        question: "what is an object",
        answers:["2", "1","4","3"],
        correct:"1"
    }
]
function updateQuestion(potato) {
    question.textContent=questions[potato].question
    for(var i = 0;i<choices.length; i++) {
        choices[i].textContent=questions[potato].answers[i]
    }

}

updateQuestion(1)

