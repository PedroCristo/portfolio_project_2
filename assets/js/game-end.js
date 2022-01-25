
/*******************************
 ********* GAME END  ***********
 *******************************/

// Declare const for DOM elements 

 const username = document.getElementById('username');
 const finalScore = document.getElementById('final-score');
 const lastScore = localStorage.getItem('lastScore');
 const saveScore = document.getElementById('save-score');

 const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


// Enable the button when the user remove the cursor from the input

 username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});


// Show to the users the last score 
 
 finalScore.innerText = lastScore;


// Save users last score and username
 
 saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(6);

    
    // Brings the user to the right page depends on the score made by the user in the last game played
    
    const GOLD_TROPHY_SCORE =  MAX_NUMBER_QUESTIONS  * CORRECT_QUESTION;
    const SILVER_TROPHY_SCORE = ( MAX_NUMBER_QUESTIONS  - 1) * CORRECT_QUESTION;
    const BRONZE_TROPHY_SCORE = ( MAX_NUMBER_QUESTIONS  - 2) * CORRECT_QUESTION;


     if (lastScore == GOLD_TROPHY_SCORE) {

        window.location.assign('trophy-gold.html');

    } else if (lastScore == SILVER_TROPHY_SCORE) {
      
        window.location.assign('trophy-silver.html');


    } else if (lastScore == BRONZE_TROPHY_SCORE) {

        window.location.assign('trophy-bronze.html');

    } else {
        
        window.location.assign('scores.html');

    }

    localStorage.setItem('highScores', JSON.stringify(highScores));

};