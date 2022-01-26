 // Select the right category choose by the user and start new game
  
 document.addEventListener("DOMContentLoaded", () => {

    const quizCategory = document.getElementById('category').dataset.category;
    newGame(quizCategory);
  });



  