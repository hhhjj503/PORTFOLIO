document.addEventListener("DOMContentLoaded", () => {
  let bannerImgsSlider = undefined;
  let memberInfoSlider = undefined;
  let gallerySlider = undefined;
  let mvSliderWrap = undefined;

  initializeSwipers();

  //scroll-up
  const scrollUpLink = document.querySelector(".up-link");
  const html = document.querySelector("html");

  scrollUpLink.addEventListener("click", function () {
    html.scrollTop = 0;
  });
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 1) scrollUpLink.classList.add("active");
    else scrollUpLink.classList.remove("active");
  });
  window.addEventListener("resize", () => {
    bannerImgsSlider.destroy();
    memberInfoSlider.destroy();
    gallerySlider.destroy();
    mvSliderWrap.destroy();

    initializeSwipers();
  });

  //swiper 오작동 예방을 위한 재할당 함수
  function initializeSwipers() {
    bannerImgsSlider = new Swiper(".banner-imgs-slider", {
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
        el: ".banner-imgs-slider-pagenation",
        clickable: "true",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".banner-controller .next-btn",
        prevEl: ".banner-controller .previous-btn",
      },
    });

    memberInfoSlider = new Swiper(".member-slider-wrap .swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      spaceBetween: 30,
      touchRatio: false,

      // Navigation arrows
      navigation: {
        nextEl: ".member-info-controller .next-btn",
        prevEl: ".member-info-controller .previous-btn",
      },

      breakpoints: {
        319: { touchRatio: true, slidesPerView: 1.5, spaceBetween: 20 },

        551: { touchRatio: true, slidesPerView: 2 },

        769: {
          slidesPerView: 4,
        },
      },
    });

    gallerySlider = new Swiper(".gallery-slider-wrap .swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      touchRatio: false,

      // Navigation arrows
      navigation: {
        nextEl: ".gallery-controller .next-btn",
        prevEl: ".gallery-controller .previous-btn",
      },

      breakpoints: {
        319: {
          touchRatio: true,
          slidesPerView: 1.5,
          spaceBetween: 20,
          centeredSlides: true,
        },

        481: {
          touchRatio: true,
          slidesPerView: 2.5,
          spaceBetween: 30,
          centeredSlides: true,
        },

        769: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
    });

    mvSliderWrap = new Swiper(".mv-slider-wrap .swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 4,
      touchRatio: false,

      // Navigation arrows
      navigation: {
        nextEl: ".mv-slider-controller .next-btn",
        prevEl: ".mv-slider-controller .previous-btn",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        769: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1201: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
});
