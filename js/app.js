


const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");
btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});

btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
});

let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
});

const ALL_LINKS_BURGER = document.querySelectorAll('.burger__open li');

ALL_LINKS_BURGER.forEach((link)=>{
	link.addEventListener('click', ()=>{
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.toggle("close");
	});
});


////part right


const imageComparisonSlider = document.querySelector('[data-component="image-comparison-slider"]')

function setSliderstate(e, element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');

  if (e.type === 'input') {
    sliderRange.classList.add('image-comparison__range--active');
    return;
  }

  sliderRange.classList.remove('image-comparison__range--active');
  element.removeEventListener('mousemove', moveSliderThumb);
}

function moveSliderThumb(e) {
  const sliderRange = document.querySelector('[data-image-comparison-range]');
  const thumb = document.querySelector('[data-image-comparison-thumb]');
  let position = e.layerY - 20;

  if (e.layerY <= sliderRange.offsetTop) {
    position = -20;
  }

  if (e.layerY >= sliderRange.offsetHeight) {
    position = sliderRange.offsetHeight - 20;
  }

  thumb.style.top = `${position}px`;
}


function createWidthRightText(){
	let wLeft = document.querySelector('.image-comparison__image-wrapper');
	let wRightText = document.querySelector('.image-comparison__caption--after');
	
  if(wRightText){
    wRightText.style.width = `calc(100% - ${wLeft.offsetWidth + 25}px)`;
  }
	
}

createWidthRightText();

function moveSliderRange(e, element) {
  const value = e.target.value;
  const slider = element.querySelector('[data-image-comparison-slider]');
  const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');

  slider.style.left = `${value}%`;
  imageWrapperOverlay.style.width = `${value}%`;

  element.addEventListener('mousemove', moveSliderThumb);

  if(element){
    setSliderstate(e, element);
  }
 

  createWidthRightText();
}



function init(element) {
  const sliderRange = element.querySelector('[data-image-comparison-range]');

  if ('ontouchstart' in window === false) {
    sliderRange.addEventListener('mouseup', e => setSliderstate(e, element));
    sliderRange.addEventListener('mousedown', moveSliderThumb);
  }

  sliderRange.addEventListener('input', e => moveSliderRange(e, element));
  sliderRange.addEventListener('change', e => moveSliderRange(e, element));
}


if(imageComparisonSlider){
  init(imageComparisonSlider);
}



window.addEventListener('load', ()=>{
  if(document.querySelector('.initial__price')){
    document.querySelector('h1').classList.add('active');
    document.querySelector('.initial__text p').classList.add('active');
    document.querySelector('.image-comparison').classList.add('active');
    document.querySelector('.initial__price').classList.add('active');
    document.querySelector('.initial__more').classList.add('active');
  }

  if(document.querySelector('.about__text h2')){
    document.querySelector('.about__text h2').classList.add('active');
    document.querySelector('.p1').classList.add('active');
    document.querySelector('.p2').classList.add('active');
    document.querySelector('.p3').classList.add('active');
    document.querySelector('.about__img').classList.add('active');
  }


  if(document.querySelector('.t-left')){

    const services = document.querySelectorAll('.t-left');

    services.forEach((el)=>{
      el.classList.add('active');
    });

    document.querySelector('.about__img').classList.add('active');
  }
    
});


const swiper = new Swiper('.swiper', {
  speed: 400,

  navigation: {
    nextEl: '.arrow__next',
    prevEl: '.arrow__prev',
  },
  slidesPerView: 'auto',
  freeMode: true,
 
  breakpoints: {
    0:{
     
      spaceBetween: 14,
    },

    600:{
      
      spaceBetween: 20,

    }
  }
});


const OPEN_CARD_BUTTON = document.querySelectorAll('.swiper__slide-plus');

if(OPEN_CARD_BUTTON){

  OPEN_CARD_BUTTON.forEach((button)=>{

      button.addEventListener('click', ()=>{
        const ALL_SLIDES = document.querySelectorAll('.swiper-slide');
        ALL_SLIDES.forEach((el)=>{
          el.classList.remove('active');
        });
        button.parentElement.parentElement.classList.add('active');
        button.parentElement.parentElement.classList.add('.swiper-slide-active');
      });




      


  });

}

