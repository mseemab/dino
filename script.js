// script.js

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Initialize AOS
AOS.init();

// Initialize Typed.js
var typed = new Typed('#typed-text', {
  strings: ["Engaged", "Loyal", "Repeat"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
});