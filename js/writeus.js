const contactsLink = document.querySelector(".contacts-button");
const contactsPopup = document.querySelector(".modal-writeus");
const contactsClose = contactsPopup.querySelector(".modal-close");

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
});
