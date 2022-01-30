/*******************************
 *********** SCORES ************
 *******************************/

 
// Declare const for DOM elements 
  const highScoresList = document.getElementById('highScoresList');
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  
  
/**
 * Show to the users the highscores board returning a list with username, score and medal if the user get a score over 199
 * */ 
highScoresList.innerHTML = highScores
.map(score => {
  if (score.score == GOLD_TROPHY_SCORE) {

    return `<li class="high-score">${score.name} - ${score.score} - <i class="fas fa-medal gold-color"></i></li>`;
    
  } else if (score.score == SILVER_TROPHY_SCORE) {

    return `<li class="high-score">${score.name} - ${score.score} - <i class="fas fa-medal silver-color"></i></li>`;

  } else if (score.score == BRONZE_TROPHY_SCORE) {
    
    return `<li class="high-score">${score.name} - ${score.score} - <i class="fas fa-medal bronze-color"></i></li>`;

  } else {

    return `<li class="high-score">${score.name} - ${score.score}`;

  }
})
.join("");