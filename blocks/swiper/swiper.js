var swiperWrapper = document.querySelector('.swiper-wrapper');
var swiperBlock = document.querySelector('.swiper.block');
var swiperDiv = document.querySelector('.swiper');
var swiperButtonPrev = document.querySelector('.section > div:nth-child(3)');
var swiperButtonNext = document.querySelector('.section > div:nth-child(4)');

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

if (swiperButtonPrev) {
    swiperButtonPrev.classList.add('swiper-button-prev');
} else {
    console.log("Element not found");
}

if (swiperButtonNext) {
    swiperButtonNext.classList.add('swiper-button-next');
} else {
    console.log("Element not found");
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
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2.5,
        },
        970: {
            slidesPerView: 3.5,
        },
    },


});
