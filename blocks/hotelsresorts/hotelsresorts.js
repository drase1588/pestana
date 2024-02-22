//container principal e o elemento 'hotelsresorts block'
const hotelsResortsContainer = document.querySelector(
  ".hotelsresorts-container"
);

//elementos que queremos mover
const columnsWrapper = document.querySelector(".columns-wrapper");

//move os elementos para o final do 'hotelsresorts-container'
hotelsResortsContainer.insertAdjacentElement("afterend", columnsWrapper);

const hotelsResortsBlock = document.querySelector(".hotelsresorts.block");

//cria o swiper-container e os elementos relacionados
const swiperContainer = document.createElement("div");
swiperContainer.className =
  "swiper swiper-initialized swiper-horizontal swiper-android swiper-backface-hidden swiper-container";

const swiperWrapper = document.createElement("div");
swiperWrapper.className = "swiper-wrapper";

//cria uma nova div para 'hotelsresorts block' fora do swiper-slide
const newHotelsResortsBlock = document.createElement("div");
newHotelsResortsBlock.className = "hotelsresorts block";

//move todos os elementos de 'hotelsresorts block', exceto os últimos 3 divs, para o novo 'hotelsresorts block'
Array.from(hotelsResortsBlock.children)
  .slice(0, -6)
  .forEach((child) => {
    newHotelsResortsBlock.appendChild(child.cloneNode(true));
  });

//add o novo 'hotelsresorts block' ao DOM, antes do swiper-container
hotelsResortsContainer.insertBefore(
  newHotelsResortsBlock,
  hotelsResortsContainer.firstChild
);

//add os últimos 3 divs do original 'hotelsresorts block' ao swiper-wrapper como slides
Array.from(hotelsResortsBlock.children)
  .slice(-6)
  .forEach((child) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.appendChild(child.cloneNode(true));
    swiperWrapper.appendChild(slide);
  });

//delete o original 'hotelsresorts block'
hotelsResortsBlock.remove();

//add o swiper-wrapper ao swiper-container
swiperContainer.appendChild(swiperWrapper);

//insere o swiper-container no DOM
hotelsResortsContainer.appendChild(swiperContainer);

//add botões de navegação, se necessário
const swiperButtonPrev = document.createElement("div");
swiperButtonPrev.className = "swiper-button-prev";
swiperContainer.appendChild(swiperButtonPrev);

const swiperButtonNext = document.createElement("div");
swiperButtonNext.className = "swiper-button-next";
swiperContainer.appendChild(swiperButtonNext);

const swiper = new Swiper(swiperContainer, {
  spaceBetween: 10,
  loop: true,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  on: {
    init: function () {
      this.el.style.width = "40%"; //largura do container Swiper
      this.el.style.marginLeft = "auto";
      this.el.style.marginRight = "15vh";
      this.el.style.overflow = "hidden";
    },
  },
});
