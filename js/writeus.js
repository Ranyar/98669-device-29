const contactsLink = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal-writeus");
const contactsClose = contactsPopup.querySelector(".modal-close");

contactsLink.onclick = function () {
  console.log('Клик по кнопке, отладка');
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
    console.log('Добавили класс, отладка');
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contacts.classList.remove("modal-show");
    }
  }
});
