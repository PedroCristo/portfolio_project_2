/*******************************
 *********** SCRIPT ************
 *******************************/
// Declare const and variables for DOM elements (toggler menu)
 const menuToggle = document.querySelector('.toggler');
 const heroSection = document.querySelector('.hero-section');
 const openMenu = document.querySelector('.fa');
 const closeMenu = document.querySelector('.fa-times');
 const menuLeft = document.querySelector('.menu');
 
/**
* Remove and add classlist for toggler menu
* */
 menuToggle.addEventListener('click', () => {

     menuToggle.classList.toggle('active');
     heroSection.classList.toggle('active');
     openMenu.classList.toggle('active');
     closeMenu.classList.toggle('active');
     menuLeft.classList.toggle('active');

 });


// Declare const and variables for DOM elements (day/night mode)
 const getDate = new Date();
 const timeHour = getDate.getHours();
 const faMoon = document.querySelector('.fa-moon');
 const faSun = document.querySelector('.fa-sun');
 const body =  document.getElementById('body');
 
 /**
  * Change background color (onload) menu day/night mode
  * */ 
  window.addEventListener('load', () => {
      if(timeHour >= 8 && timeHour <= 19) {

        body.classList.remove('active');
        faMoon.classList.add('active');
        
    } else {
        
        body.classList.add('active');
        faSun.classList.add('active');

      }
  });

   /**
   * Fancy Text Animation
   * This code was taken from the follow tutorial
   * Dev ED
   * (https://www.youtube.com/watch?v=GUEB9FogoP8)
   */
    const text = document.querySelector('.fancy-text');
    const strText = text.textContent;
    const splitText = strText.split('');
    text.textContent = '';
  
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += '<span>' + splitText[i] + '</span>';
    }
  
    let char = 0;
    let timer = setInterval(onTick, 60);
  
    function onTick() {
      const span = text.querySelectorAll('span')[char];
      span.classList.add('fade');
      char++;
  
      if(char === splitText.length) {
          complete();
          return;
      }
    }
  
    function complete() {
        clearInterval(timer);
        timer = null;
    }
  
