const openButton = document.querySelector('.main-nav__toggle');
const closeButton = document.querySelector('.main-nav__close');
const mainNav = document.querySelector('.main-nav__list');

openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.remove(".main-nav__list--close");
});
closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.add('.main-nav__list--close');
});
