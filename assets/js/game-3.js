
/*******************************
 ********** GAME 3 *************
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
     question: 'What is the official language of Barbados?',
     choice1: 'Spanish',
     choice2: 'Barbadian',
     choice3: 'Portuguese',
     choice4: 'English',
     correctAnswer: 4
   },
   {
     question: 'In WHICH state is the Australian city of Townsville?',
     choice1: 'Queensland',
     choice2: 'Tasmania',
     choice3: 'New South Wales',
     choice4: 'Victoria',
     correctAnswer: 1
   },
   {
     question: 'Dutch is the official language of which European country?',
     choice1: 'Belgium',
     choice2: 'Netherlands',
     choice3: 'Luxembourg',
     choice4: 'France',
     correctAnswer: 2
   },
     {
     question: 'Mesopotamia is now called WHAT?',
     choice1: 'Sri Lanka',
     choice2: 'Palestine',
     choice3: 'Thailand',
     choice4: 'Iraq',
     correctAnswer: 4
   },
     {
     question: 'Which of the US states is represented by the initials MO?',
     choice1: 'Missouri',
     choice2: 'Mississippi',
     choice3: 'Montana',
     choice4: 'Massachusetts',
     correctAnswer: 1
   },
   {
     question: 'Which country, once led by Lech Walesa, does not border the Black Sea?',
     choice1: 'Bulgaria',
     choice2: 'Russia',
     choice3: 'Romania',
     choice4: 'poland',
     correctAnswer: 4
   },
   {
     question: 'In which US state would you find the Everglades?',
     choice1: 'California',
     choice2: 'Tennessee',
     choice3: 'Florida',
     choice4: 'Washington',
     correctAnswer: 3
   },
   {
     question: 'Indonesia is part of which continent?',
     choice1: 'Africa',
     choice2: 'Asia',
     choice3: 'Europe',
     choice4: 'America',
     correctAnswer: 2
   },
   {
     question: 'In which country are the Southern Alps?',
     choice1: 'New Zealand',
     choice2: 'Switzerland',
     choice3: 'India',
     choice4: 'Argentina',
     correctAnswer: 1
   },
   {
     question: 'Which continent has the highest mountains?',
     choice1: 'Antarctica',
     choice2: 'Asia',
     choice3: 'Europe',
     choice4: 'America',
     correctAnswer: 2
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

