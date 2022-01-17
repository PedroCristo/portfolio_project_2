
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