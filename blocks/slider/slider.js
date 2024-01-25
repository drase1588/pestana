const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const leftButton = document.querySelector('.arrows-wrapper .arrows > div:first-child');
const rightButton = document.querySelector('.arrows-wrapper .arrows > div:nth-child(2)');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let currentSlide = 0;
let totalSlides = 0.65;

slider.addEventListener('mousedown', (e) => startDragging(e));
slider.addEventListener('mouseup', () => stopDragging());
slider.addEventListener('mouseleave', () => stopDragging());
slider.addEventListener('mousemove', (e) => drag(e));

leftButton.addEventListener('click', function() {
    console.log("left");
    currentSlide = (currentSlide - 0.2 + totalSlides) % totalSlides;
    updateSlider();
  });

  rightButton.addEventListener('click', function() {
    console.log("rigth");
    currentSlide = Math.min(currentSlide + 0.1, totalSlides - 1);
    updateSlider();
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
    const translate = newX - startPosition;

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
    const translateValue = -currentSlide * sliderWrapper.offsetWidth + 'px';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

