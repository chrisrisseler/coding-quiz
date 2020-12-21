var start = document.getElementById("startButton");
var quiz = document.getElementById("quiz");
var score = document.getElementById("score")
var highScore = document.getElementById("highScoreButton");
var questionDiv = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var timerEl = document.getElementById("timer")




function startTimer(){
    var timer = 70;

    var timeInterval = setInterval(function(){
        if (timer > 1){
            timerEl.textContent = timer + " seconds";
            timer --;
        }
        else if (timer === 1){
            timerEl.textContent = timer + "second";
            timer --;
        }
        else{
            timerEl.textContent = ""
            clearInterval(timeInterval)
        }
    }, 1000);
}



score = 0
var userChoice = ""

var questions = [
    {
        question: "What does HTML Stand for?",
        choiceA: "Hyper Text Markup Language",
        choiceB: "Holy Tacos My Lord",
        choiceC: "Hardly Taken My Lamb",
        choiceD: "Home Tool Making Language",
        correct: "A",
    },
    {
        question: "What is CSS?",
        choiceA: "The structure of a website.",
        choiceB: "The style of the website.",
        choiceC: "The interactions with the website.",
        choiceD: "This isn't a thing.",
        correct: "B",
    },
    {
        question: "What is Javascript?",
        choiceA: "The structure of a website.",
        choiceB: "The style of a website.",
        choiceC: "The interactions with a website.",
        choiceD: "This doesn't exist.",
        correct: "C",
    },
    {
        question: "Arrays start with ______",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "-1",
        correct: "A",
    },
    {
        question: "How many equals do you need to check both type and value?",
        choiceA: "1",
        choiceB: "2",
        choiceC: "3",
        choiceD: "4",
        correct: "C",
    },
    {
        question: "What does DOM stand for?",
        choiceA: "Dangerous Only Maker",
        choiceB: "Danger Object Model",
        choiceC: "Document Only Model",
        choiceD: "Document Object Model",
        correct: "D",
    },
    {
        question: "The identifier that uses # to call is",
        choiceA: "ID",
        choiceB: "Class",
        choiceC: "Margin",
        choiceD: "Object",
        correct: "A",
    }
]

start.addEventListener("click", function () {
    start.style.display = "none";
    highScore.style.display = "none";
    quiz.style.display = "block";
    startTimer();
    renderQuestion()
})


function renderQuestion() {
    
    for (i = 0; i < questions.length; i++) {
        questionDiv.textContent = questions[i].question

        var buttonA = document.createElement("button")
        buttonA.textContent = "Choice A"
        choiceA.textContent = questions[i].choiceA
        choiceA.appendChild(buttonA)

        var buttonB = document.createElement("button")
        buttonB.textContent = "Choice B"
        choiceB.textContent = questions[i].choiceB
        choiceB.appendChild(buttonB)

        var buttonC = document.createElement("button")
        buttonC.textContent = "Choice C"
        choiceC.textContent = questions[i].choiceC
        choiceC.appendChild(buttonC)

        var buttonD = document.createElement("button")
        buttonD.textContent = "Choice D"
        choiceD.textContent = questions[i].choiceD
        choiceD.appendChild(buttonD)

        buttonA.addEventListener("click", function () {
            userChoice = "A"
            // console.log(userChoice)
        })
        buttonA.addEventListener("click", function () {
            userChoice = "B"
        })
        buttonA.addEventListener("click", function () {
            userChoice = "C"
        })
        buttonA.addEventListener("click", function () {
            userChoice = "D"
        })


        // console.log(questions[i].correct)
        if(questions[i].correct === userChoice){
            score++
        }


    }
}

