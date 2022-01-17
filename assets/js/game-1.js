
/*******************************
 ********** GAME 1 *************
 *******************************/

/**
 * Declare const and variables for DOM elements 
 */

 const question = document.getElementById('question');
 const choices = Array.from(document.getElementsByClassName('choice-text'));
 const progressText = document.getElementById('progress-text');
 const scoreText = document.getElementById('score');
 const progressBarFull = document.getElementById('progress-bar-full');
 
 
 let currentQuestion = {};
 let acceptingCorrectAnswers = true;
 let score = 0;
 let questionCounter = 0;
 let availableQuestions = [];

 /**
 * Constants with the value of correct questions points and number of max questions per quiz 
 */
const correctQuestion = 25;
const maxNumberQuestions = 10;

 /**
 * Quiz questions array
 */

let questions = [
    {
      question: "On June 3, 2016, this heavyweight boxer, known as “the Greatest,” died at age 74.",
      choice1: "Mike Tyson",
      choice2: "Joe Louis",
      choice3: "Muhammad Ali",
      choice4: "Rocky Balboa",
      correctAnswer: 3
    },
    {
      question: "In Australian football, what is the maximum number of players allowed on the field at a time?",
      choice1: "28",
      choice2: "14",
      choice3: "40",
      choice4: "36",
      correctAnswer: 4
    },
    {
      question: "Where can you find arnis being widely practiced?",
      choice1: "Philippines",
      choice2: "Suriname",
      choice3: "India",
      choice4: "China",
      correctAnswer: 1
    },
      {
      question: "What player was the first to win five straight Wimbledon tennis titles?",
      choice1: "Roger Federer",
      choice2: "Andre Agassi",
      choice3: "Bjorn Borg",
      choice4: "Arthur Ashe",
      correctAnswer: 3
    },
      {
      question: "Who ran the first four-minute mile?",
      choice1: "Banastre Tarleton",
      choice2: "Roger Bannister",
      choice3: "Roger Ramjet",
      choice4: "Roger Moore",
      correctAnswer: 2
    },
    {
      question: "In polo, what is a period of play called?",
      choice1: "Half",
      choice2: "Set",
      choice3: "Quarter",
      choice4: "Chukka",
      correctAnswer: 4
    },
    {
      question: "How many years old are horses that run in the Kentucky Derby?",
      choice1: "3",
      choice2: "5",
      choice3: "2",
      choice4: "8",
      correctAnswer: 1
    },
    {
      question: "In tennis, what follows a deuce?",
      choice1: "Advection",
      choice2: "Adverb",
      choice3: "Advantage",
      choice4: "Adverb",
      correctAnswer: 3
    },
    {
      question: "In what sport would one find an Albion round?",
      choice1: "Tennis",
      choice2: "Archery",
      choice3: "Croquet",
      choice4: "badminton",
      correctAnswer: 2
    },
    {
      question: "Which team won the Champions League in 1961 and 1962?",
      choice1: "Liverpool",
      choice2: "Real Madrid",
      choice3: "Barcelona",
      choice4: "Benfica",
      correctAnswer: 4
    }
  
  ];
  

  
/**
 * Function start a new game
 */
newGame = () => {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions];
  };

 /**
 * Function get a new question
 */
getNewQuestion = () => {
    localStorage.setItem('lastScore', score);
 if (availableQuestions.length === 0 || questionCounter >= maxNumberQuestions) {

   /**
    * Brings the user to the game end page after the quiz is finished
    */
  return window.location.assign('game-end.html');
}

 /**
 * Shows the user the number of question is answering
 */ 
 questionCounter++;
 progressText.innerText ='Question ' +  questionCounter + '/' + maxNumberQuestions;

 /**
  * Update the question to show the user after last question is answered
  */ 
 const questionIndex = Math.floor(Math.random() * availableQuestions.length);
 currentQuestion = availableQuestions[questionIndex];
 question.innerText = currentQuestion.question;
 
};
