
/*******************************
 ********** GAME 2 *************
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
     question: 'Until 1867, which country was under the control of military leaders called Shoguns?',
     choice1: 'Belgium',
     choice2: 'Thailand',
     choice3: 'Japan',
     choice4: 'Ireland',
     correctAnswer: 3
   },
   {
     question: 'Who preceded Queen Victoria on the British throne?',
     choice1: 'Edward V',
     choice2: 'George V',
     choice3: 'George IV',
     choice4: 'William IV',
     correctAnswer: 4
   },
   {
     question: 'In which city was Mozart born?',
     choice1: 'Athens',
     choice2: 'Salzburg',
     choice3: 'Lisbon',
     choice4: 'Rome',
     correctAnswer: 2
   },
     {
     question: 'The mother of George VI was WHO?',
     choice1: 'Queen Alexandra',
     choice2: 'Queen Caroline',
     choice3: 'Queen Mary',
     choice4: 'Queen Victoria',
     correctAnswer: 3
   },
     {
     question: 'What was discovered in California in 1848?',
     choice1: 'Gravity',
     choice2: 'Perfume',
     choice3: 'Oil',
     choice4: 'Gold',
     correctAnswer: 4
   },
   {
     question: 'Which country conducted the first successful turbine-equipped jet flight in 1939?',
     choice1: 'Italy',
     choice2: 'USA',
     choice3: 'Germany',
     choice4: 'England',
     correctAnswer: 3
   },
   {
     question: 'How long did World War II last?',
     choice1: '6 years',
     choice2: '8 years',
     choice3: '4 years',
     choice4: '3 years',
     correctAnswer: 1
   },
   {
     question: 'What is the historical name of Sri Lanka?',
     choice1: 'Myanmar',
     choice2: 'Colombo',
     choice3: 'Ceylon',
     choice4: 'Badulla',
     correctAnswer: 3
   },
   {
     question: 'Which of these countries remained neutral during World War II?',
     choice1: 'United Kingdom',
     choice2: 'Switzerland',
     choice3: 'Japan',
     choice4: 'France',
     correctAnswer: 2
   },
   {
     question: 'The Ottoman Empire was dissolved after their loss in which war?',
     choice1: 'Crimean War',
     choice2: 'Serbia Revolution',
     choice3: 'Second Balkan War',
     choice4: 'World War 1',
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

