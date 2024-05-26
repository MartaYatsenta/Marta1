function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    var burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('active');
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    var menuIcon = document.querySelector('.menu-icon');
    var burgerMenu = document.querySelector('.burger');

    if (!menuIcon.contains(event.target) && !burgerMenu.contains(event.target)) {
        if (burgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});


// SLIDER 
     
class Slider {
    constructor(sliderSelector, prevBtnSelector, nextBtnSelector) {
        this.slider = document.querySelector(sliderSelector);
        this.slides = this.slider.querySelectorAll('.slide-card');
        this.prevButton = document.querySelector(prevBtnSelector);
        this.nextButton = document.querySelector(nextBtnSelector);
        this.slideIndex = 0;

        this.showSlide(this.slideIndex);

        this.prevButton.addEventListener('click', this.prevSlide.bind(this));
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));

        this.startAutoSlide();
    }

    showSlide(index) {
        if (index >= this.slides.length) {
            this.slideIndex = 0;
        } else if (index < 0) {
            this.slideIndex = this.slides.length - 1;
        }
        this.slides.forEach((slide, i) => {
            if (i === this.slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    prevSlide() {
        this.slideIndex--;
        this.showSlide(this.slideIndex);
    }

    nextSlide() {
        this.slideIndex++;
        this.showSlide(this.slideIndex);
    }

    startAutoSlide() {
        setInterval(() => {
            this.slideIndex++;
            this.showSlide(this.slideIndex);
        }, 4000);
    }
}

const mySlider = new Slider('.slider-wrapper', '.prev-btn', '.next-btn');
