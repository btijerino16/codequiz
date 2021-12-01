var startButton = document.getElementById('startgame')
var quizContainer = document.getElementById('quiz-container')
var quizBoxQuestions = document.getElementById('quiz-box-questions')
var answerChoices = document.getElementById('answerbtns')
var questions = document.getElementById('questions')




var questions = [
    {
        one: "How can you see if a function is working?",
        choices: ["console log", "windows", "github", "git status"],
        answer: "alerts"
    },
    {
        two: "How do you close out a function",
        choices: ["curly braces", "quotations", "parentheses", "leave the program"],
        answer: "parentheses"
    },
    {
        three: "What does CSS stand for?",
        choices: ["Waterfall", "Cascading Style Sheet", "the styling Duh", "what"],
        answer: "Cascading Style Sheet"
    },
    {
        four: "What attribute do you use for an image?",
        choices: ["SRC", "IMG", "REF", "LOVE"],
        answer: "IMG"
    },

];



function startQuiz() {
    // when user clicks start 1. the start button will hide 2. the timer starts 3. first question populate

    startButton.classList.add('hide')
    setInterval(questions)


}

function displayQuestions ()
{


}

function clickNext() {

    //the next question and possible answers populate



}



function timeInterval() {
    // when this function starts, it will start a timer on the quiz, deduct if answer wrong, add time if answer right



}


startButton.addEventListener('click', startQuiz)
