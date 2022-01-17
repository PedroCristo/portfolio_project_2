/**
 * Toggler menu
 */ 
 const menuToggle = document.querySelector('.toggler');
 const heroSection = document.querySelector('.hero-section');
 const openMenu = document.querySelector('.fa');
 const closeMenu = document.querySelector('.fa-times');
 const menuLeft = document.querySelector('.menu');
 
 
 menuToggle.addEventListener('click', () => {
       
     menuToggle.classList.toggle('active');
     heroSection.classList.toggle('active');
     openMenu.classList.toggle('active');
     closeMenu.classList.toggle('active');
     menuLeft.classList.toggle('active');
 });


/**
 * Change background color (onload) menu day/night mode
 */
 const dt = new Date();
 const th = dt.getHours();
 const faMoon = document.querySelector('.fa-moon');
 const faSun = document.querySelector('.fa-sun');
 const body =  document.getElementById('body');
 
  function changeColorBg() {
      if(th >= 8 && th <= 19) {

        body.classList.remove('active');
        faMoon.classList.add('active');
        
    } else {
        
        body.classList.add('active');
        faSun.classList.add('active');

      }
  }
