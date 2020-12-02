var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("background1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = " none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot active", "dot");
  }
  slides[slideIndex - 1].style.display = " block";
  dots[slideIndex - 1].className += " active";
}

function displayform() {

  var i = document.getElementsByClassName("box");
  var j = i[0];

  j.style.display = "block";


}

function closeForm() {

  var i = document.getElementsByClassName("box");
  var j = i[0];

  j.style.display = "";


}
