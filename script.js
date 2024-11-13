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

// Open and close pop-up form
document.getElementById('openFormBtn').addEventListener('click', function () {
  document.getElementById('waitlistFormContainer').classList.remove('hidden');
});

document.getElementById('closeFormBtn').addEventListener('click', function () {
  document.getElementById('waitlistFormContainer').classList.add('hidden');
});

document.getElementById('joinForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    restaurantName: document.getElementById('restaurantName').value,
    city: document.getElementById('city').value,
    contactNumber: document.getElementById('contactNumber').value,
    email: document.getElementById('email').value
  };

  fetch('https://script.google.com/macros/s/AKfycbxIyKKWcWy_g-q53SuIybJ6369VnGC3Yo_evsCZ5vyIL3Uwl1lKOg1qUhtKNsR9dpQcjQ/exec', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting the form. Please try again later.');
  });
});
