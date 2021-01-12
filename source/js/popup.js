var openButton = document.querySelector(".form__button");
//Модальное окно с сообщением об успешной отправке
var successPopup = document.querySelector(".modal-success");
var popupSuccessClose = successPopup.querySelector(".modal-success__button");
//Модальное окно с сообщением об ошибке
var failPopup = document.querySelector(".modal-fail");
var popupFailClose = failPopup.querySelector(".modal-fail__button");
//Обязательные поля для заполнения формы
//ФИО
var nameForm = document.querySelector(".form__name");
var surnameForm = document.querySelector(".form__surname");
//Контактная информация
var telephoneForm = document.querySelector(".form__telephone");
var emailForm = document.querySelector(".form__email");

var isStorageSupport = true;
var storage = "";

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
