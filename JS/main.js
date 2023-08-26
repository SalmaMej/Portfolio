// text animation
var slides = document.querySelectorAll('.title_animation p');
// initialize the slide index
var slideIndex = 0;
// show the 1st slide
slides[slideIndex].classList.add('visible');
// start the slide show
setInterval(function () {
  // hide current slide
  slides[slideIndex].classList.remove('visible');
  slides[slideIndex].classList.add('hidden');
  //   calculate the index of next slide
  slideIndex = (slideIndex + 1) % slides.length;
  // show the next slide
  slides[slideIndex].classList.remove('hidden');
  slides[slideIndex].classList.add('visible');
}, 2000); // changes slid every 3s

// btn open/ close
let mobileNav = document.querySelector('.mobile_menu');
document.querySelector('.OC_btn').onclick = () => {
  mobileNav.classList.add('active');
};

document.querySelector('.closebtn').onclick = () => {
  mobileNav.classList.remove('active');
};

// card animation tilt
VanillaTilt.init(document.querySelectorAll('.box'), {
  max: 15,
  speed: 200,
});
