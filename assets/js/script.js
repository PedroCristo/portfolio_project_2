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