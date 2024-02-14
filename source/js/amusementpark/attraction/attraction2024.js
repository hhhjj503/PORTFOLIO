window.addEventListener("load", () => {
  //scroll-up
  const scrollUpLink = document.querySelector(".up-link");
  const html = document.querySelector("html");

  //모바일 사이드용 메뉴 open close
  const mobileHeaderMenuBtn = document.querySelector(".mobile-side-menu-btn");
  const mobileHeaderMenuCloseBtn = document.querySelector(
    ".mobile-side-menu-close-btn"
  );
  const mobileSideMenu = document.querySelector(".mobile-side-menu");

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

  mobileHeaderMenuBtn.addEventListener("click", function () {
    mobileSideMenu.classList.add("active");
  });
  mobileHeaderMenuCloseBtn.addEventListener("click", function () {
    mobileSideMenu.classList.remove("active");
  });

  AOS.init({
    offset: 150, // Global settings:
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });

  AOS.refresh();
});
