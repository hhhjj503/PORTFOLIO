window.addEventListener("load", () => {
  //상세페이지별 공통변수
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");

  //어트랙션 페이지의 변수
  const hidings = document.querySelectorAll("a.hiding + *"); //a 태그 다음의 엘리먼트 한개만 선택
  const wheelDown = document.querySelector(".wheel-down");

  //어트랙션별 offsettop 위치를 data-offtop 값으로 설정
  for (let i = 0; i < hidings.length; i++) {
    hidings[i].dataset.offtop = hidings[i].getBoundingClientRect().top;
  }

  window.addEventListener("scroll", () => {
    const currentTop = html.scrollTop;
    for (let i = 0; i < hidings.length; i++) {
      if (currentTop >= hidings[i].dataset.offtop) {
        showElements(hidings[i]);
      }
    }
  });

  /**
   * 엘리먼트의 css 를 변경
   * @param {element} element
   */
  function showElements(element) {
    element.style.top = "0px";
    element.style.opacity = "1";
  }

  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      wheelDown.classList.add("fadeout");
      topNav.style.opacity = "0";
      topNavMobile.style.opacity = "0";
    } else {
      wheelDown.classList.remove("fadeout");

      topNav.style.opacity = "1";
      topNavMobile.style.opacity = "1";
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
