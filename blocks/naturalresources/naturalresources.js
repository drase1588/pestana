//seleciona o container principal
const naturalresourcesContainer = document.querySelector(
  ".naturalresources-wrapper"
);
//elementos que queremos mover
const columnsWrapper = document.querySelector(".columns-wrapper");
const naturalresourcessWrapper = document.querySelector(
  ".naturalresources-wrapper"
);

//move os elementos para o final do 'naturalresources-container'
naturalresourcesContainer.insertAdjacentElement("afterend", columnsWrapper);
naturalresourcesContainer.insertAdjacentElement(
  "afterend",
  naturalresourcessWrapper
);
//seleciona bloco para manipular
const naturalresourcesBlock = document.querySelector(".naturalresources.block");

//novo wrapper para os divs fora do Swiper
const defaultContentWrapper = document.createElement("div");
defaultContentWrapper.className = "defaultnaturalresources-content-wrapper";

//move divs -> default-content-wrapper
Array.from(naturalresourcesBlock.children)
  .slice(0, 2)
  .forEach((child) => {
    defaultContentWrapper.appendChild(child);
  });

//cria o swiper-container e os elementos relacionados
const swiperContainer = document.createElement("div");
swiperContainer.className =
  "swiper swiper-initialized swiper-horizontal swiper-android swiper-backface-hidden swiper-container";

const swiperWrapper = document.createElement("div");
swiperWrapper.className = "swiper-wrapper";

//add os elementos restantes do 'naturalresources block' como slides do Swiper
Array.from(naturalresourcesBlock.children).forEach((child) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.appendChild(child);
  swiperWrapper.appendChild(slide);
});

//add o swiper-wrapper ao swiper-container
swiperContainer.appendChild(swiperWrapper);

//del o antigo 'naturalresources block'
naturalresourcesBlock.remove();

//insere o 'defaultContentWrapper' e o 'swiperContainer' no DOM
naturalresourcesContainer.appendChild(defaultContentWrapper);
naturalresourcesContainer.appendChild(swiperContainer);

//botões de navegação ao swiper-container
const swiperButtonPrev = document.createElement("div");
swiperButtonPrev.className = "swiper-button-prev";
swiperContainer.appendChild(swiperButtonPrev);

const swiperButtonNext = document.createElement("div");
swiperButtonNext.className = "swiper-button-next";
swiperContainer.appendChild(swiperButtonNext);

//inicializa o Swiper
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
      this.el.style.marginRight = "1vh";
      this.el.style.overflow = "hidden";
    },
  },
});
