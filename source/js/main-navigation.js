const openButton = document.querySelector('.main-nav__toggle');
const closeButton = document.querySelector('.main-nav__close');
const mainNav = document.querySelector('.main-nav__list');
const navClosed = document.querySelector('.main-nav__list--closed');

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.add('.main-nav__close');
  mainNav.classList.remove(".main-nav__list");
});
