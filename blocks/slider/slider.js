const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

slider.addEventListener('mousedown', (e) => startDragging(e));
slider.addEventListener('mouseup', () => stopDragging());
slider.addEventListener('mouseleave', () => stopDragging());
slider.addEventListener('mousemove', (e) => drag(e));

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
