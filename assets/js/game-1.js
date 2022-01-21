
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
     question: 'On June 3, 2016, this heavyweight boxer, known as “the Greatest,” died at age 74.',
     choice1: 'Mike Tyson',
     choice2: 'Joe Louis',
     choice3: 'Muhammad Ali',
     choice4: 'Rocky Balboa',
     correctAnswer: 3
   },
   {
     question: 'Which of the following sports is not part of the triathlon?',
     choice1: 'Cycling',
     choice2: 'Swimming',
     choice3: 'Horse Riding',
     choice4: 'Running',
     correctAnswer: 3
   },
   {
     question: 'Where can you find arnis being widely practiced?',
     choice1: 'Philippines',
     choice2: 'Suriname',
     choice3: 'India',
     choice4: 'China',
     correctAnswer: 1
   },
     {
     question: 'What player was the first to win five straight Wimbledon tennis titles?',
     choice1: 'Roger Federer',
     choice2: 'Andre Agassi',
     choice3: 'Bjorn Borg',
     choice4: 'Arthur Ashe',
     correctAnswer: 3
   },
     {
     question: 'Who won the 2017 Formula One World Drivers Championship?',
     choice1: 'Sebastian Vettel',
     choice2: 'Lewis Hamilton',
     choice3: 'Nico Rosberg',
     choice4: 'Max Verstappen',
     correctAnswer: 2
   },
   {
     question: 'In polo, what is a period of play called?',
     choice1: 'Half',
     choice2: 'Set',
     choice3: 'Quarter',
     choice4: 'Chukka',
     correctAnswer: 4
   },
   {
     question: 'How many years old are horses that run in the Kentucky Derby?',
     choice1: '3',
     choice2: '5',
     choice3: '2',
     choice4: '8',
     correctAnswer: 1
   },
   {
     question: 'In tennis, what follows a deuce?',
     choice1: 'Advection',
     choice2: 'Adverb',
     choice3: 'Advantage',
     choice4: 'Adverb',
     correctAnswer: 3
   },
   {
     question: 'In what sport would one find an Albion round?',
     choice1: 'Tennis',
     choice2: 'Archery',
     choice3: 'Croquet',
     choice4: 'badminton',
     correctAnswer: 2
   },
   {
     question: 'Which team won the Champions League in 1961 and 1962?',
     choice1: 'Liverpool',
     choice2: 'Real Madrid',
     choice3: 'Barcelona',
     choice4: 'Benfica',
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
   getNewQuestion();
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
    * Update the progress any time the user answer a question
    */ 
   progressBarFull.style.width = `${(questionCounter / maxNumberQuestions) * 100}%`;
 
   /**
    * Update the question to show the user after last question is answered
    */ 
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
   
    /**
    * Update the answers to show the user after last question is answered
    */ 
   choices.forEach(choice => {
     const choiceNumber = choice.dataset.choice;
     choice.innerText = currentQuestion['choice' + choiceNumber];
   });
 
   availableQuestions.splice(questionIndex, 1);
   acceptingAnswers = true;

    /**
    * Update the progress bar any time the user answer a question
    */ 
   progressBarFull.style.width = `${(questionCounter / maxNumberQuestions) * 100}%`;
 };
 
   /**
    *Compare the answer chosen by the user with the right answer if true the user will see a message in green if wrong the message will be in red
    */ 
 choices.forEach(choice => {
   choice.addEventListener('click', e => {
     if (!acceptingAnswers) return;
 
     acceptingAnswers = false;
     const selectedChoice = e.target;
     const selectedAnswer = selectedChoice.dataset.choice;
     const classToApply =
     selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';
 
     /**
      * Array of available right answer message reply back to the user
      */
     let rightAnswerReply = ['YOUR ANSWER IS RIGHT! WELL DONE!', 'RIGHT ANSWER!', 'RIGHT ANSWER! YOU ARE DOING WELL!'];
     const rightAnswerReplyIndex = Math.floor(Math.random() * rightAnswerReply.length);
     rightAnswerReply = rightAnswerReply[rightAnswerReplyIndex];
 
     /**
      * Array of available wrong answer message reply back to the user 
      */
 
     let wrongAnswerReply = ['WRONG ANSWER!', 'WRONG ANSWER! TRY AGAIN!', 'WRONG ANSWER! ARE YOU WELL TODAY?'];
     const wrongAnswerReplyIndex = Math.floor(Math.random() * wrongAnswerReply.length);
     wrongAnswerReply = wrongAnswerReply[wrongAnswerReplyIndex];
   
 
     if (selectedAnswer == currentQuestion.correctAnswer ) {
      incrementScore(correctQuestion);

      if (questionCounter <= 2){

        question.innerHTML = 'RIGHT ANSWER!';

      } else if (questionCounter == maxNumberQuestions) {
        question.innerHTML = 'YOUR ANSWER IS RIGHT! WELL DONE!';
 
      } else {
        
        question.innerHTML = rightAnswerReply;
      }
 
        question.classList.add('correct-text');
 
     } else {
 
       if(questionCounter == maxNumberQuestions || questionCounter <= 2) {
         question.innerHTML = 'WRONG ANSWER!';
 
       } else {
         
         question.innerHTML = wrongAnswerReply;
       }
       
       question.classList.add('incorrect-text');
     }
 
       selectedChoice.parentElement.classList.add(classToApply);
   

    /**
     * Set the time out that user will see the reply message back after answered a question
     */
     setTimeout(() => {
       selectedChoice.parentElement.classList.remove(classToApply);
       question.classList.remove('correct-text');
       question.classList.remove('incorrect-text');
       getNewQuestion();
     }, 2000);
   });
 });
 
  /**
   * Update and shows the user the score
   */ 
 incrementScore = num => {
   score += num;
   scoreText.innerText = score;
 };
 

 /**
  * Call the newGame function
  */
 newGame();

