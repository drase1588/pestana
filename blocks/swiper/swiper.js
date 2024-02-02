// main.js

// Function to dynamically load CSS file
function loadCSS(filename) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filename;
    document.head.appendChild(link);
}

// Function to dynamically load JS file
function loadJS(filename, callback) {
    var script = document.createElement('script');
    script.src = filename;
    script.onload = callback;
    document.body.appendChild(script);
}

loadCSS('https://unpkg.com/swiper/swiper-bundle.min.css');
loadJS('https://unpkg.com/swiper/swiper-bundle.min.js', function () {
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var swiperBlock = document.querySelector('.swiper.block');
    var swiperDiv = document.querySelector('.swiper');

    if (swiperWrapper) {
        swiperWrapper.classList.remove('swiper-wrapper');
        swiperWrapper.classList.add('swiper');
    } else {
        console.log("Element with class 'swiper-wrapper' not found");
    }

    if (swiperBlock) {
        swiperBlock.classList.remove('block');
        swiperBlock.classList.remove('swiper');
        swiperBlock.classList.add('swiper-wrapper');
    } else {
        console.log("Element with class 'swiper block' not found");
    }

    if (swiperDiv) {
        console.log("found");
        var innermostDivs = swiperDiv.querySelectorAll('.swiper-wrapper > div');

        innermostDivs.forEach(function (div) {
            div.classList.add('swiper-slide');
        });
    } else {
        console.log("not found");
    }

    var swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3.5,
        spaceBetween: 30,
    });
});
