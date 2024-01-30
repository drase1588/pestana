const slider = document.querySelector('.slider');               
const sliderWrapper = document.querySelector('.slider-wrapper'); 
const leftButton = document.querySelector('.arrows-wrapper > .arrows > div > div:first-child'); // Left arrow button
const rightButton = document.querySelector('.arrows-wrapper > .arrows > div > div:nth-child(3)'); // Right arrow button

// Variables for tracking drag state and slider position
let isDragging = false;         // Flag indicating whether the slider is currently being dragged
let startPosition = 0;          // Initial mouse position when dragging starts
let currentTranslate = 0;       // Current translation (position) of the slider
let currentSlide = 0;           // Index of the current slide
let totalSlides = 1;            // Total number of slides in the slider

// Event listeners for mouse events on the slider
slider.addEventListener('mousedown', (e) => startDragging(e));   // Start dragging on mouse down
slider.addEventListener('mouseup', () => stopDragging());        // Stop dragging on mouse up
slider.addEventListener('mouseleave', () => stopDragging());     // Stop dragging when the mouse leaves the slider
slider.addEventListener('mousemove', (e) => drag(e));             // Update slider position while dragging

// Event listeners for left and right arrow buttons
leftButton.addEventListener('click', function() {
    // Calculate the index of the previous slide considering a smooth transition effect

    // The `currentSlide` variable represents the index of the current slide being displayed.
    // The formula `(currentSlide - 0.2 + totalSlides) % totalSlides` is used to calculate
    // the new index for the previous slide with a slight transition effect.

    // - Subtracting 0.2: This introduces a small decrement to the current index, creating a visual transition.
    // - Adding `totalSlides`: Ensures that the result is positive, accounting for potential negative values.
    // - Modulo `totalSlides`: Wraps around to the last slide if the result goes beyond the total number of slides.

    currentSlide = (currentSlide - 0.2 + totalSlides) % totalSlides;  
     // Calculate the new position to display the previous slide on the screen    
    currentTranslate = -currentSlide * sliderWrapper.offsetWidth;
    updateSlider();
    console.log("left");
});

rightButton.addEventListener('click', function() {
    // Calculate the index of the previous slide considering a smooth transition effect

    // The `currentSlide` variable represents the index of the current slide being displayed.
    // The formula `(currentSlide + 0.2) % totalSlides` is used to calculate
    // the new index for the next slide with a slight transition effect.

    // - Adding 0.2: This introduces a small increment to the current index, creating a visual transition.
    // - Modulo `totalSlides`: Ensures that the result stays within the range of available slides.
    //   If the result goes beyond the total number of slides, it wraps around to the first slide.

    currentSlide = (currentSlide + 0.2) % totalSlides;

    // Calculate the new position to display the next slide on the screen
    currentTranslate = -currentSlide * sliderWrapper.offsetWidth;
    updateSlider();
    console.log("right");
});


// Functions for handling drag events

function startDragging(e) {
    // Start tracking the drag state
    isDragging = true;
    startPosition = e.clientX - currentTranslate;
}

function stopDragging() {
    // Stop tracking the drag state
    isDragging = false;
}

function drag(e) {
    // Update the slider position while dragging
    if (!isDragging) return;

    e.preventDefault();

    const newX = e.clientX;
    const translate = (newX - startPosition) * 3;

    // Restrict the slider movement within its bounds
    if (translate < 0) {
        currentTranslate = Math.max(translate, -slider.offsetWidth + sliderWrapper.offsetWidth);
    } else {
        currentTranslate = Math.min(translate, 0);
    }

    // Set the new slider position
    setSliderPosition();
}

// Functions for updating and setting the slider position
function setSliderPosition() {
    // Apply the translation to the slider element
    slider.style.transform = `translateX(${currentTranslate}px)`;
}

function updateSlider() {
    // Update the slider position based on the current slide index
    if (currentSlide === 0) {
        currentTranslate = 0;
    } else {
        currentTranslate = -currentSlide * sliderWrapper.offsetWidth;
    }

    // Apply the new translation value to the slider element
    const translateValue = currentTranslate + 'px';
    slider.style.transform = 'translateX(' + translateValue + ')';
}
