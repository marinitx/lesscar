// public/toggleMenu.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
  
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');
      });

    overlay.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  });