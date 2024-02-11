window.addEventListener("DOMContentLoaded", function () {
  //scroll-up
  const scrollUpLink = document.querySelector(".up-link");
  const html = document.querySelector("html");

  //모바일 사이드용 메뉴 open close
  const mobileHeaderMenuBtn = document.querySelector(".mobile-side-menu-btn");
  const mobileHeaderMenuCloseBtn = document.querySelector(
    ".mobile-side-menu-close-btn"
  );
  const mobileSideMenu = document.querySelector(".mobile-side-menu");

  //배너 멈춤 플레이 컨트롤 버튼
  const bannerStopBtn = document.querySelector(
    ".banner-index-controls-stop-btn"
  );
  const bannerPlayBtn = document.querySelector(
    ".banner-index-controls-play-btn"
  );

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

  const bannerSwiper = new Swiper(".banner .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    touchRatio: false,
    autoplay: {
      delay: "2000",
      disableOnInteraction: false,
    },
    speed: 800,

    // Navigation arrows
    navigation: {
      nextEl: ".banner-controls .banner-controls-next-btn",
      prevEl: ".banner-controls .banner-controls-prev-btn",
    },

    pagination: {
      el: ".banner-indexes",
      clickable: "true",
    },
  });
  const photoSlider = new Swiper(".photos .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    touchRatio: false,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: ".photo-controls-next-btn",
      prevEl: ".photo-controls-prev-btn",
    },

    breakpoints: {
      321: { slidesPerView: 2.5, spaceBetween: 20 },

      551: { slidesPerView: 2.5, spaceBetween: 20 },

      821: { slidesPerView: 2.5, spaceBetween: 20 },

      1201: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  scrollUpLink.addEventListener("click", function () {
    html.scrollTop = 0;
  });
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 1) scrollUpLink.classList.add("active");
    else scrollUpLink.classList.remove("active");
  });

  mobileHeaderMenuBtn.addEventListener("click", function () {
    mobileSideMenu.classList.add("active");
  });
  mobileHeaderMenuCloseBtn.addEventListener("click", function () {
    mobileSideMenu.classList.remove("active");
  });
});
