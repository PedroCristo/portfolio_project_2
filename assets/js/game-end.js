
/*******************************
 ********* GAME END  ***********
 *******************************/

/**
 * Declare const for DOM elements 
 */
 const username = document.getElementById('username');
//  const saveScore = document.getElementById('save-score');
 const finalScore = document.getElementById('final-score');
 const lastScore = localStorage.getItem('lastScore');
 
 const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/**
 * Enable the button when the user remove the cursor from the input
 */
 username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value;
});


/**
 * Show to the users the last score 
 */
 finalScore.innerText = lastScore;


/**
 * Save users last score and username
 */
 saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: lastScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(7);

/**
 * Brings the user to the right page depends on the score made by the user in the last game played
 */

     if (lastScore == 250) {

        window.location.assign('/pages/trophy-gold.html');

    } else if (lastScore == 225) {
      
        window.location.assign('/pages/trophy-silver.html');


    } else if (lastScore == 200) {

        window.location.assign('/pages/trophy-bronze.html');

    } else {
        
        window.location.assign('/pages/scores.html');

    }

    localStorage.setItem('highScores', JSON.stringify(highScores));

};