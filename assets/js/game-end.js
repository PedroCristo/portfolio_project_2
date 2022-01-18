
/*******************************
 ********* GAME END  ***********
 *******************************/

/**
 * Declare const for DOM elements 
 */
 const username = document.getElementById('username');
 const saveScore = document.getElementById('save-score');
 const finalScore = document.getElementById('final-score');
 const lastScore = localStorage.getItem('lastScore');
 
 const highScores = JSON.parse(localStorage.getItem('highScores')) || [];