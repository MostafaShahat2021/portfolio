// global variables
const hamburgerMenu = document.querySelector('#hum');
const mobMenu = document.querySelector('.mob-menu');
const closebtn = document.getElementById('close');
const portfolio = document.getElementsByClassName('portfolio-link');

// mobile menu appears
function openMobileMenu() {
  mobMenu.classList.add('active');
}
hamburgerMenu.addEventListener('click', openMobileMenu);

// mobile menu disappears
function closeMobileMenue() {
  mobMenu.classList.remove('active');
}
closebtn.addEventListener('click', closeMobileMenue);

// when user click mobile menu options, the mobile menu disappears
function linkclose() {
  mobMenu.classList.remove('active');
}

(function closeLink() {
  for (let i = 0; i < portfolio.length; i += 1) {
    portfolio[i].addEventListener('click', linkclose);
  }
}());