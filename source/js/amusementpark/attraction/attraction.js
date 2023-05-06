window.addEventListener("load", () => {
  //상세페이지별 공통변수
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");
  const gotop = document.querySelector(".gotop");

  //어트랙션 페이지의 변수
  const hidings = document.querySelectorAll("a.hiding + *"); //a 태그 다음의 엘리먼트 한개만 선택
  const wheelDown = document.querySelector(".wheel-down");
  const attractionNav = document.querySelectorAll(".attraction-nav a");
  const attractions = document.querySelectorAll(".attraction");
  let attractionsOffsetTop = [];
  let userScreenHeight = 0;

  //attraction offsetTop push
  pushWindowInnerHeight();

  //gotop 버튼
  gotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  window.addEventListener(
    "scroll",
    throttle(() => {
      const currentTop = html.scrollTop;
      for (let i = 0; i < hidings.length; i++) {
        if (currentTop >= hidings[i].dataset.offtop) {
          showElements(hidings[i]);
          setTimeout(() => {
            attractions[i].querySelector(".info").classList.add("active");
          }, 700);
        }
        if (currentTop > attractions[i].offsetTop - 50) {
          for (let i = 0; i < attractions.length; i++) {
            removeClass(attractionNav[i], "active");
          }
          addClass(attractionNav[i], "active");
        }
      }
    })
  );

  window.addEventListener("resize", function () {
    pushWindowInnerHeight();
  });

  //pageNav click event
  for (let i = 0; i < attractionNav.length; i++) {
    attractionNav[i].addEventListener("click", (e) => {
      e.preventDefault();
      //
      for (let j = 0; j < attractionNav.length; j++) {
        removeClass(attractionNav[j], "active");
      }
      html.scrollTop = attractionsOffsetTop[i];
      addClass(attractionNav[i], "active");
      showElements(hidings[i]);
    });
  }

  //어트랙션별 offsettop 위치를 data-offtop 값으로 설정
  for (let i = 0; i < hidings.length; i++) {
    hidings[i].dataset.offtop = hidings[i].getBoundingClientRect().top;
  }

  /**
   * 엘리먼트의 css 를 변경
   * @param {element} element
   */
  function showElements(element) {
    element.style.top = "0px";
    element.style.opacity = "1";
  }

  /**
   * 엘리먼트의 클래스를 제거해주는 함수
   * @param {element} element
   * @param {string} className
   */
  function removeClass(element, className) {
    element.classList.remove(className);
  }

  /**
   * 엘리먼트의 클래스를 추가해주는 함수
   * @param {element} element
   * @param {string} className
   */
  function addClass(element, className) {
    element.classList.add(className);
  }

  /**
   * 사용자의 window.innerHeight 를 가져와
   * 배수로 증가하여 offset 배열에 추가하는 함수
   */
  function pushWindowInnerHeight() {
    userScreenHeight = 0;
    attractionsOffsetTop = [];
    for (let i = 0; i < attractions.length; i++) {
      attractionsOffsetTop.push(userScreenHeight);
      userScreenHeight += window.innerHeight;
    }
  }

  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      wheelDown.classList.add("fadeout");
      topNav.classList.add("scrolldown");
      topNavMobile.classList.add("scrolldown");
    } else {
      wheelDown.classList.remove("fadeout");
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

  function throttle(callback, limit = 1000 / 15) {
    let waiting = false;
    return function () {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  } //throttle
});
