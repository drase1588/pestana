const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const leftButton = document.querySelector('.arrows-wrapper > .arrows > div > div:first-child');
const rightButton = document.querySelector('.arrows-wrapper > .arrows > div > div:nth-child(3)');
const title = document.querySelector('.slider-wrapper .slider > div:first-child');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let currentSlide = 0;
let totalSlides = 1;

slider.addEventListener('mousedown', (e) => startDragging(e));
slider.addEventListener('mouseup', () => stopDragging());
slider.addEventListener('mouseleave', () => stopDragging());
slider.addEventListener('mousemove', (e) => drag(e));

leftButton.addEventListener('click', function() {
    currentSlide = (currentSlide - 0.2 + totalSlides) % totalSlides;      
    currentTranslate = -currentSlide * sliderWrapper.offsetWidth;
    updateSlider();
    console.log("left");
    
});

rightButton.addEventListener('click', function() {
    currentSlide = (currentSlide + 0.2) % totalSlides;
    currentTranslate = -currentSlide * sliderWrapper.offsetWidth;
    updateSlider();
    console.log("right");
});




function startDragging(e) {
    isDragging = true;
    startPosition = e.clientX - currentTranslate;
}

function stopDragging() {
    isDragging = false;
}

function drag(e) {
    if (!isDragging) return;

    e.preventDefault();

    const newX = e.clientX;
    const translate = (newX - startPosition) * 3;

    if (translate < 0) {
        currentTranslate = Math.max(translate, -slider.offsetWidth + sliderWrapper.offsetWidth);
    } else {
        currentTranslate = Math.min(translate, 0);
    }

    setSliderPosition();
}

function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function updateSlider() {
    if (currentSlide === 0) {
        currentTranslate = 0;
    } else {
        currentTranslate = -currentSlide * sliderWrapper.offsetWidth;
    }

    const translateValue = currentTranslate + 'px';
    slider.style.transform = 'translateX(' + translateValue + ')';
}



