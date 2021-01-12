// Навигация в мобильной версии
var openNavButton = document.querySelector('.main-nav__toggle');
var closeButton = document.querySelector('.main-nav__close');
var mainNav = document.querySelector('.main-nav__list');

openNavButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.remove("main-nav__list--close");
  openNavButton.classList.add("main-nav__toggle--closed");
});
closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.add('main-nav__list--close');
  openNavButton.classList.remove("main-nav__toggle--closed");
});
