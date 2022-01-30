/*******************************
 ********** GLOBAL *************
 *******************************/

// Const with the value of correct question points and max number of questions per quiz
const CORRECT_QUESTION = 25;
const MAX_NUMBER_QUESTIONS = 10;

// Const to calculate if the number of correct questions give by the user is 8, 9 or 10
const GOLD_TROPHY_SCORE =  MAX_NUMBER_QUESTIONS  * CORRECT_QUESTION;
const SILVER_TROPHY_SCORE = ( MAX_NUMBER_QUESTIONS  - 1) * CORRECT_QUESTION;
const BRONZE_TROPHY_SCORE = ( MAX_NUMBER_QUESTIONS  - 2) * CORRECT_QUESTION;