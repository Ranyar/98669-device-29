const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");

const button1 = document.querySelector(".slider-button-1");
const button2 = document.querySelector(".slider-button-2");
const button3 = document.querySelector(".slider-button-3");


button2.onclick = function () {
 console.log('Отладка');
};

/* button2.addEventListener("click", function (evt) {
  evt.preventDefault();
    console.log('Нажали на кнопку слайдера, отладка');
      slide1.classList.add("slide-hidden");
      slide2.classList.toggle("slide-hidden");
      slide3.classList.add("slide-hidden");
}); */
