 // Select the right questions choose by the user per topic and start new game
  
 document.addEventListener("DOMContentLoaded", () => {

    const quizCategory = document.getElementById('category').dataset.category;
    newGame(quizCategory);
  })

