const openButton = document.querySelector(".form__button");
//Модальное окно с сообщением об успешной отправке
const successPopup = document.querySelector(".modal-success");
const popupSuccessClose = successPopup.querySelector(".modal-success__button");
//Модальное окно с сообщением об ошибке
const failPopup = document.querySelector(".modal-fail");
const popupFailClose = failPopup.querySelector(".modal-fail__button");
//Обязательные поля для заполнения формы
//ФИО
const nameForm = document.querySelector(".form__name");
const surnameForm = document.querySelector(".form__surname");
//Контактная информация
const telephoneForm = document.querySelector(".form__telephone");
const emailForm = document.querySelector(".form__email");

const isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

//Если все формы заполнены, появляется сообщение об успешной отправке
openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    successPopup.classList.add("modal-success__show");

    if (storage) {
        nameForm.value = storage;
        surnameForm.focus();
    } else {
        nameForm.focus();
    }
});

popupSuccessClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    successPopup.classList.remove("modal-success__show");
});

//Если формы не заполнены, появляется сообщение об ошибке
openButton.addEventListener("click", function (evt) {
    if (!nameForm.value || !surnameForm.value || !telephoneForm.value || !emailForm.value) {
        evt.preventDefault();
        successPopup.classList.remove("modal-success__show");
        failPopup.offsetWidth = failPopup.offsetWidth;
        failPopup.classList.add("modal-fail__show");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameField.value);
        }
    }
});

popupFailClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  failPopup.classList.remove("modal-fail__show");
});

// Навигация в мобильной версии
const openNavButton = document.querySelector('.main-nav__toggle');
const closeButton = document.querySelector('.main-nav__close');
const mainNav = document.querySelector('.main-nav__list');

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
