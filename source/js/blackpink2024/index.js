document.addEventListener("DOMContentLoaded", () => {
  const bannerImgsSlider = new Swiper(".banner-imgs-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    touchRatio: false,
    autoplay: {
      delay: "1500",
    },
    speed: 700,
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

  const memberInfoSlider = new Swiper(".member-slider-wrap .swiper", {
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
      320: {
        slidesPerView: 1,
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      769: {
        slidesPerView: 4,
      },
    },
  });

  const gallerySlider = new Swiper(".gallery-slider-wrap", {
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
      320: {
        slidesPerView: 1,
      },

      481: {
        slidesPerView: 1.77,
        spaceBetween: 30,
      },

      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const mvSliderWrap = new Swiper(".mv-slider-wrap .swiper", {
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
        slidesPerView: 1,
      },

      769: {
        slidesPerView: 4,
      },
    },
  });
});
