const slides = document.querySelectorAll(".slider-bg img");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showNextSlide, 5000); 
