window.addEventListener("load", function () {
  let bannerSwiper = undefined;
  let memberSlider = undefined;
  let cardSlider = undefined;

  swiperInit();

  function swiperInit() {
    bannerSwiper = new Swiper(".banner-slider", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      touchRatio: true,
      autoplay: {
        delay: "1000",
      },
      speed: 1000,
      effect: "fade",

      // If we need pagination
      pagination: {
        el: ".banner-slider-pagenation",
        clickable: "true",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".banner-next-btn",
        prevEl: ".banner-previous-btn",
      },
    });

    memberSlider = new Swiper(".member-slider", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      touchRatio: true,

      speed: 1000,
      effect: "slide",

      // If we need pagination
      pagination: {
        el: ".member-slider-pagenation",
        clickable: "true",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".member-next-btn",
        prevEl: ".member-previous-btn",
      },
    });

    cardSlider = new Swiper(".card-slider", {
      // Optional parameters
      direction: "horizontal",
      loopedSlides: 1,
      loop: true,
      slidesPerView: 5.5,
      slideToClickedSlide: true,

      speed: 1500,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true,

      // If we need pagination
      pagination: {
        el: ".card-slider-pagenation",
        clickable: "true",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".card-next-btn",
        prevEl: ".card-previous-btn",
      },

      breakpoints: {
        319: {
          touchRatio: true,
          slidesPerView: 2.5,
          spaceBetween: 20,
          centeredSlides: true,
        },

        481: {
          touchRatio: true,
          slidesPerView: 3.5,
          spaceBetween: 30,
          centeredSlides: true,
        },

        769: {
          slidesPerView: 5.5,
          spaceBetween: 30,
        },
      },
    });
  }

  AOS.init({
    offset: 150, // Global settings:
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });

  setTimeout(function () {
    AOS.refresh();
  }, 1000);
});
