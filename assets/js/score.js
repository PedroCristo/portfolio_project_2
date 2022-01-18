/*******************************
 *********** SCORES ************
 *******************************/

 /**
 * Declare const for DOM elements 
 */
  const highScoresList = document.getElementById('highScoresList');
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];