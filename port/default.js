alert( "I pray this message meets you in good health!!" )



const carouselImages = document.querySelector('.carousel_images');
const carouselButtons = document.querySelectorAll('.carousel_button');
const numberOfImages = document.querySelectorAll('.carousel_images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id === 'Previous'){
        if (imageIndex !== 1) {
            imageIndex --;
            translateX += 300;
        }
    } else {
        if (imageIndex !== numberOfImages) {
            imageIndex++;
            translateX -= 300;
        }
    }

    carouselImages.getElementsByClassName.transform = `translateX(${translateX}px)`;
});
});

// function modulo(number, mod) {
//     let result = number % mod;
//     if (result < 0) {
//       result += mod;
//      }    
//        return result;
//  }

// function setUpCarousel(carousel) {
//     const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    
//     const buttonNext = carousel.querySelector('[data-carousel-button-next]');
    
//     const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

// let currentSlide= 0;
// const numSlides = slidesContainer.children.length;
// }

// const lnumbers= [1,2,3,4,5,6,7];
// let currentSlide = "";
// numbers.forEach(carousel);
// carousel(value,index,array) {
//     currentSlide += value  + "<slides>";
// }



// function handleNext(slides) {
//     currentSlide = modulo(currentSlide + 1, numSides);
//     changeSlide(currentSlide)
//     slidesContainer.children[currentSlide];.setAttribute
//     ('aria-hidden', true);

//     currentSlide = modulo(currentSlide + 1, numSlides);
    
//     slidesContainer.children[currentSlide].setAttribute
//     ('aria-hidden', false);
//     carousel.style.setProperty
//     ('--current-slide', currentSlide)
//     }

// function handlePrevious(carousel) {
//     slidesContainer.children[currentSlide].setAttribute
//     ('aria-hidden', true);
    
//     currentSlide = modulo(currentSlide - 1, numSlides);

//     slidesContainer.childeren[currentSlide].setAttribute
//     ('aria-hidden', false);
//     carousel.style.setProperty('--current-slide', currentSlide);
// }



// class Carousel {
//     constructor(carousel) {
//     this.carousel= carousel;
//     this.buttonPrevious = carousel.querySelector
//     ('[data-carousel-button-previous]');
//     this.buttonNext = carousel.querySelector
//     ('[data-carousel-button-next]');
//     this.slidesContainer = carousel.querySelector
//     ('[data-carousel-slides-container]');
    
//     let currentSlide= 0;
//     const numSlides = slidesContainer.
//     children.length;

//     this.buttonNext.addEventListener
//     ('click', this.handleNext.bind(globalThis));
//     this.buttonPrevious.addEventListener
//     ('click', this.handlePrevious,bins(this));
// }

// handleNext() {
//     this.currentSlide = modulo(currentSlide + 1,
//     numSlides);
//     this.carousel.style.setProperty
//     ('--current-slide', currentSlide)
//     }

// handlePrevious() {
//     this.currentSlide = modulo(currentSlide - 1,
//     numSlides);
//     this.carousel.style.setProperty
//     ('--current-slide', currentSlide);
// }
// }

// const carousel = querySelectorAll('[data-carousel]');
// carousel.forEach(setUpCarousel);
// setUpCarousel(carouselCarousel1)
// setUpCarousel(carouselCarousel2)
// setUpCarousel(carouselCarousel3)
// setUpCarousel(carouselCarousel4)
// setUpCarousel(carouselCarousel5)
// setUpCarousel(carouselCarousel6)
// setUpCarousel(carouselCarousel7)
