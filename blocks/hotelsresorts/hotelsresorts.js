var swiperWrapper = document.querySelector(".hotelsresorts-wrapper");
var swiperBlock = document.querySelector(".hotelsresorts.block");
var swiperDiv = document.querySelector(".hotelsresorts");
var swiperButtonPrev = document.querySelector(".section > div:nth-child(3)");
var swiperButtonNext = document.querySelector(".section > div:nth-child(4)");

if (swiperWrapper) {
  swiperWrapper.classList.remove("hotelsresorts-wrapper");
  swiperWrapper.classList.add("swiper");
} else {
  console.log("Element with class 'hotelsresorts-wrapper' not found");
}

if (swiperBlock) {
  swiperBlock.classList.remove("block");
  swiperBlock.classList.remove("hotelsresorts");
  swiperBlock.classList.add("swiper-wrapper");
} else {
  console.log("Element with class 'hotelsresorts block' not found");
}

if (swiperButtonPrev) {
  swiperButtonPrev.classList.add("swiper-button-prev");
} else {
  console.log("Element not found");
}

if (swiperButtonNext) {
  swiperButtonNext.classList.add("swiper-button-next");
} else {
  console.log("Element not found");
}

if (swiperDiv) {
  console.log("found");
  var innermostDivs = swiperDiv.querySelectorAll(".swiper-wrapper > div");

  innermostDivs.forEach(function (div) {
    div.classList.add("swiper-slide");
  });
} else {
  console.log("not found");
}

var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
