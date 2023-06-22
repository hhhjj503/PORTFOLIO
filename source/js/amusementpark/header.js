window.addEventListener("load", () => {
  //상세페이지별 공통변수
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");
  const gotop = document.querySelector(".gotop");

  //gotop 버튼
  gotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      topNav.classList.add("scrolldown");
      topNavMobile.classList.add("scrolldown");
    } else {
      topNav.classList.remove("scrolldown");
      topNavMobile.classList.remove("scrolldown");
    }
  });

  topNavMobile.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //click 이벤트 작동하지 않을때
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });
});
