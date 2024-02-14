window.addEventListener("load", () => {
  //scroll-up
  const scrollUpLink = document.querySelector(".up-link");
  const html = document.querySelector("html");
  const bannerStopBtn = document.querySelector(".banner-stop-btn");
  const bannerPlayBtn = document.querySelector(".banner-play-btn");

  //모바일 사이드용 메뉴 open close
  const mobileHeaderMenuBtn = document.querySelector(".mobile-side-menu-btn");
  const mobileHeaderMenuCloseBtn = document.querySelector(
    ".mobile-side-menu-close-btn"
  );
  const mobileSideMenu = document.querySelector(".mobile-side-menu");

  //스와이퍼 오류방지를 위한 변수선언
  let festivalSwiper = undefined;

  //이미지 미리로드
  const preloadImgs = document.querySelectorAll("img");

  function preload(array) {
    for (let i = 0; i < array.lenght; i++) {
      const img = new Image();
      img.src = array[i].src;
    }
  }

  preload(preloadImgs);

  scrollUpLink.addEventListener("click", function () {
    html.scrollTop = 0;
  });
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 1) scrollUpLink.classList.add("active");
    else scrollUpLink.classList.remove("active");
  });

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
        slidesPerView: 2.5,
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

  initializeSwipers();

  window.addEventListener("resize", () => {
    festivalSwiper.destroy();

    initializeSwipers();
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

  mobileHeaderMenuBtn.addEventListener("click", function () {
    mobileSideMenu.classList.add("active");
  });
  mobileHeaderMenuCloseBtn.addEventListener("click", function () {
    mobileSideMenu.classList.remove("active");
  });

  //오류작동방지를 위한 siwper 재배치
  function initializeSwipers() {
    festivalSwiper = new Swiper(".festival-gallery .swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      //touchRatio: false,

      // Navigation arrows
      navigation: {
        nextEl:
          ".festival-gallery-controls .festival-gallery-controls-btn-right",
        prevEl:
          ".festival-gallery-controls .festival-gallery-controls-btn-left",
      },

      breakpoints: {
        0: { slidesPerView: 1.5, spaceBetween: 20 },

        487: { slidesPerView: 1.5, spaceBetween: 20 },

        551: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },

        1201: {
          slidesPerView: 4.5,
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
  AOS.refresh();
});
