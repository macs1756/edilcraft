


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


  if(document.querySelector('.portfolio h2')){
    document.querySelector('.portfolio h2').classList.add('active');
    document.querySelector('.portfolio__first p').classList.add('active');
  }

  if(document.querySelector('.contact h2')){

    document.querySelector('.contact h2').classList.add('active');

    document.querySelector('.contact__net-form').classList.add('active');

    document.querySelector('.contact__net-graph').classList.add('active');

  }
    
});


if(document.querySelector('.swiper')){
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
}

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






var input = document.querySelector("#phone");








window.intlTelInput(input, {

	separateDialCode: true,
	initialCountry: "it",
		
});

const FORM_NAME = document.querySelector('#name');

const FORM_PHONE = document.querySelector('#phone');

const FORM_SEND = document.querySelector('#form_send');


FORM_SEND.addEventListener('click', ()=>{

  

  if(FORM_NAME.value.length >= 3){

     FORM_NAME.style.border = '1px solid transparent';

  }else{
    FORM_NAME.style.border = '1px solid red';
  }

  if(+FORM_PHONE.value.length >= 5 && typeof +FORM_PHONE.value !== 'string'){
    FORM_PHONE.style.border = '1px solid transparent';
  }else{
    FORM_PHONE.style.border = '1px solid red';
  }

  let dialCode = document.querySelector('.iti__selected-dial-code').innerText;
  const FULL_TELL = dialCode + FORM_PHONE.value;





  if(FORM_NAME.value.length >= 3 && +FORM_PHONE.value.length >= 5 && typeof +FORM_PHONE.value !== 'string'){

    async function postMail(){
		    
      FORM_SEND.setAttribute('disabled', true);
    
      let res = await fetch("https://sel", {
        method: "POST",
        body: JSON.stringify({
         name: FORM_NAME.value,
         tell: FULL_TELL,
       
        }),
      });
     
      if(res.ok){
       
        FULL_TELL = '';
        FORM_PHONE.value = '';
        FORM_NAME.value = '';
        document.querySelector('.form__success-text').style.opacity = '1';
    
        FORM_SEND.removeAttribute('disabled');
    
      }else{
        alert('error send messange');
      }	
    }
    
    postMail();

  }





});