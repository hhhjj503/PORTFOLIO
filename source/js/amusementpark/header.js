window.addEventListener("load", () => {
  //상세페이지별 공통변수(night show 페이지 제외)
  const html = document.querySelector("html");

  const hNav = document.querySelector("header .h-nav");
  const hMobileNav = document.querySelector("header .mobile-nav");
  const subMenu = document.querySelector(".mobile-nav .sub-menu");
  const mobileGotop = document.querySelector(".mobile-nav .goup");
  const gotop = document.querySelector(".gotop");

  //gotop 버튼
  gotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      hNav.classList.add("scrolldown");
      hMobileNav.classList.add("scrolldown");
    } else {
      hNav.classList.remove("scrolldown");
      hMobileNav.classList.remove("scrolldown");
    }
  });

  hMobileNav.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //click 이벤트 작동하지 않을때
  mobileGotop.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });
});
