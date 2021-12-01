var startButton = document.getElementById('start')
var next = document.getElementById('next-button')
var quizBoxQuestions = document.getElementById('quiz-container')
var answerChoices = document.getElementById('btn')



var highScoreBtn = document.querySelector("#scores");


function startQuiz() {
    // when user clicks start 1. the start button will hide 2. the timer starts 3. first question populate

    startButton.classList.add('hide')
    myTimer()
    displayQuestions()

}

var sec = 12;
var time = setInterval(myTimer, 1000);


function myTimer() {
   document.getElementById('timer').innerHTML = sec + "sec left";

   sec--;
   if (sec == -1) {
      clearInterval(time);
       alert("Out of time");
       
       reset;   
   }
}


function displayQuestions () {
   

}

    var quizQuestions = [
        {
            quiz: "How can you see if a function is working?",
            choices: ["console log", "windows", "github", "git status"],
            answer: "alerts"
        },
        {
            quiz: "How do you close out a function",
            choices: ["curly braces", "quotations", "parentheses", "leave the program"],
            answer: "parentheses"
        },
        {
            quiz: "What does CSS stand for?",
            choices: ["Waterfall", "Cascading Style Sheet", "the styling Duh", "what"],
            answer: "Cascading Style Sheet"
        },
        {
        quiz: "What attribute do you use for an image?",
            choices: ["SRC", "IMG", "REF", "LOVE"],
            answer: "IMG"
        },
    
    ];
    
      




    function showQuestion() {

    //the next question and possible answers populate


}






startButton.addEventListener('click', startQuiz,)
next.addEventListener('click', displayQuestions)


