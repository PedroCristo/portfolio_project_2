
 // Declare const and for DOM element 
 const getQuizBtn = document.getElementById('get-quiz-btn');

/**
 *  Get a random quiz to play
 * */
 getQuizBtn.addEventListener('click', () => {
   
    let quizPageArray = ['pages/game-1.html', 'pages/game-2.html', 'pages/game-3.html'];
    const QUIZ_PAGE_ARRAY_INDEX = Math.floor(Math.random() * quizPageArray.length);
    quizPageArray = quizPageArray[QUIZ_PAGE_ARRAY_INDEX];
  
    return window.location.assign(quizPageArray);
    
  });
  