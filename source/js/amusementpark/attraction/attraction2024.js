window.addEventListener("DOMContentLoaded", () => {
  //scroll-up
  const scrollUpLink = document.querySelector(".up-link");
  const html = document.querySelector("html");

  //모바일 사이드용 메뉴 open close
  const mobileHeaderMenuBtn = document.querySelector(".mobile-side-menu-btn");
  const mobileHeaderMenuCloseBtn = document.querySelector(
    ".mobile-side-menu-close-btn"
  );
  const mobileSideMenu = document.querySelector(".mobile-side-menu");

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
