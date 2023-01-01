window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");
  const hidings = document.querySelectorAll("a.hiding + *");
  const wheelDown = document.querySelector(".wheel-down");

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

  //click 이벤트 작동하지 않음
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });
});
