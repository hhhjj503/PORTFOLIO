window.addEventListener("load", function () {
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
  let bannerSwiper = undefined;
  let photoSlider = undefined;

  const creatureNames = document.querySelectorAll(".creature-name");
  const creatureInfo = document.querySelector(".creature-info");

  //js를 이용한 미디어 쿼리
  const jsMediaQuery = window.matchMedia("screen and (min-width : 1051px)");

  //이미지 미리로드
  const preloadImgs = document.querySelectorAll("img");

  function preload(array) {
    for (let i = 0; i < array.lenght; i++) {
      const img = new Image();
      img.src = array[i].src;
    }
  }

  preload(preloadImgs);

  initializeSwipers();
  setPaddingLeftValue();

  //스크롤시 위로가기 기능
  scrollUpLink.addEventListener("click", function () {
    html.scrollTop = 0;
  });
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 1) scrollUpLink.classList.add("active");
    else scrollUpLink.classList.remove("active");
  });

  //모바일 헤더메뉴펼치기
  mobileHeaderMenuBtn.addEventListener("click", function () {
    mobileSideMenu.classList.add("active");
  });
  mobileHeaderMenuCloseBtn.addEventListener("click", function () {
    mobileSideMenu.classList.remove("active");
  });

  //swiper 버튼
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

  window.addEventListener("resize", () => {
    photoSlider.destroy();

    initializeSwipers();
    if (jsMediaQuery.matches) {
      setPaddingLeftValue();
    }
  });

  //creature name 요소의 padding 값을 동적으로 변경
  function setPaddingLeftValue() {
    creatureNames.forEach((creature) => {
      const marginValue = getComputedStyle(creatureInfo).marginLeft;
      creature.style.paddingLeft = marginValue;
      creature.style.paddingRight = marginValue;
    });
  }

  //배너슬라이드는 destroy 사용하지않음
  bannerSwiper = new Swiper(".banner .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    touchRatio: false,
    autoplay: {
      delay: "2000",
      disableOnInteraction: false,
    },
    speed: 1500,

    // Navigation arrows
    navigation: {
      nextEl: ".banner-controls .banner-controls-next-btn",
      prevEl: ".banner-controls .banner-controls-prev-btn",
    },

    pagination: {
      el: ".banner-indexes",
      clickable: "true",
    },

    breakpoints: {
      319: { touchRatio: true },

      551: { touchRatio: false },
    },
  });

  function initializeSwipers() {
    photoSlider = new Swiper(".photos .swiper", {
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
        319: { slidesPerView: 2.5, spaceBetween: 20, touchRatio: true },

        551: { slidesPerView: 2.5, spaceBetween: 20 },

        821: { slidesPerView: 2.5, spaceBetween: 20 },

        1201: {
          slidesPerView: 3,
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
