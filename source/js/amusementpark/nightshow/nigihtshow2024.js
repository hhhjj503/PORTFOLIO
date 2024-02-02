window.addEventListener("DOMContentLoaded", () => {
  const bannerSwiper = new Swiper(".banner .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    touchRatio: false,
    autoplay: {
      delay: "2000",
      disableOnInteraction: false,
    },
    speed: 600,

    //myswiper.autoplay.stop()
    //swiper.pause() .resume() .stop()
    //myswiper.autoplay.splay()

    pagination: {
      el: ".banner-indexes",
      clickable: "true",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".banner-controls .banner-controls-btn-right",
      prevEl: ".banner-controls .banner-controls-btn-left",
    },
  });

  bannerSwiper.on("doubleClick", () => {});

  const gallerySwiper = new Swiper(".gallery .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    touchRatio: false,

    // Navigation arrows
    navigation: {
      nextEl: ".gallery-controls .gallery-controls-btn-right",
      prevEl: ".gallery-controls .gallery-controls-btn-left",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      481: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },

      769: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },

      1201: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  const festivalSwiper = new Swiper(".festival-gallery .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    //touchRatio: false,

    // Navigation arrows
    navigation: {
      nextEl: ".festival-gallery-controls .festival-gallery-controls-btn-right",
      prevEl: ".festival-gallery-controls .festival-gallery-controls-btn-left",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      481: {
        slidesPerView: 1,
      },

      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1201: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
    },
  });

  //scroll-up
  const scrollUpLink = document.querySelector(".up-link");
  const html = document.querySelector("html");
  const bannerStopBtn = document.querySelector(".banner-stop-btn");
  const bannerPlayBtn = document.querySelector(".banner-play-btn");

  scrollUpLink.addEventListener("click", function () {
    html.scrollTop = 0;
  });
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 1) scrollUpLink.classList.add("active");
    else scrollUpLink.classList.remove("active");
  });

  bannerStopBtn.addEventListener("click", () => {
    bannerSwiper.autoplay.stop();
    bannerStopBtn.classList.remove("active");
    bannerPlayBtn.classList.add("active");
  });

  bannerPlayBtn.addEventListener("click", () => {
    bannerSwiper.autoplay.start();
    bannerPlayBtn.classList.remove("active");
    bannerStopBtn.classList.add("active");
  });
});
