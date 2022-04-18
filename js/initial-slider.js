'use strict';

import { refs } from './refs.js';

if(refs.homeSlider) {
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
if(refs.pressSlider) {
  const swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    speed: 1000,
    grabCursor: false,
    spaceBetween: 30,
    mousewheel: true,
     keyboard: {
        enabled: true,
    },
    breakpoints: {
      768: {
        centeredSlides: true,
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      }
    }
  });
} 

if(document.querySelector('.mySwiper3')) {
  const swiper = new Swiper(".mySwiper3", {
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


const projectSlider = document.querySelector('.js-project .swiper');
const 

console.log('projectSlider', projectSlider);

projectSlider.classList.add(`mySwiper${Math.ceil(Math.random())}`)

// Math.random()


