window.addEventListener("load", function () {
  //상세페이지별 공통변수
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");

  //아쿠아리움 페이지 슬라이더 사용을 위한 변수
  const as = document.querySelectorAll(".event-slider a");
  const prev = document.querySelector(".btn-wrapper .prev");
  const next = document.querySelector(".btn-wrapper .next");
  const indexBtns = document.querySelectorAll(
    ".index-button-wrapper .index-button"
  );
  let index = 0;

  const indexBtn1 = document.querySelector(
    ".index-button-wrapper .index-button1"
  );
  const indexBtn2 = document.querySelector(
    ".index-button-wrapper .index-button2"
  );
  const indexBtn3 = document.querySelector(
    ".index-button-wrapper .index-button3"
  );

  const sliderItems = $(".event-slider .item");

  //스크롤 내리면 헤드메뉴 투명하게
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      topNav.style.opacity = "0";
      topNavMobile.style.opacity = "0";
    } else {
      topNav.style.opacity = "1";
      topNavMobile.style.opacity = "1";
    }
  });

  topNavMobile.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //모바일 에러용
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });

  // ---------------------------------------------------------------------------------

  for (let i = 0; i < as.length; i++) {
    as[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  //시에마 슬라이드 생성
  const siemaSlider = new Siema({
    selector: ".event-slider",
    duration: 1000,
    easing: "ease-out",
    perPage: 1,
    startIndex: 0,
    threshold: 216,
    loop: true,
    onChange: function () {
      sliderItems.find("h3").removeClass("active");
      sliderItems.eq(this.currentSlide).find("h3").addClass("active");
    },
  });

  prev.addEventListener("click", () => {
    siemaSlider.prev();
    changeIndex(index - 2);
  });

  next.addEventListener("click", () => {
    siemaSlider.next();
    changeIndex();
  });

  indexBtn1.addEventListener("click", () => {
    siemaSlider.goTo(0);
    changeIndex(0);
  });

  indexBtn2.addEventListener("click", () => {
    siemaSlider.goTo(1);
    changeIndex(1);
  });

  indexBtn3.addEventListener("click", () => {
    siemaSlider.goTo(2);
    changeIndex(2);
  });

  changeIndex();

  const timer = setInterval(autoslider, 4000);

  /**
   *슬라이드 인덱스를 다음 슬라이드로 증가시키고 슬라이더 내부의 타이틀 엘리먼트를 표시해주는 함수
   *(실행시 전역 index 변수의 값이 1씩 증가)
   * @param {number} num 숫자타입의 인덱스번호
   * (입력이 안될경우 전역 변수인 index 변수 자동사용)
   */
  function changeIndex(num) {
    if (!(num === undefined)) index = num;
    if (index > indexBtns.length - 1) index = 0;
    if (index < 0) index = indexBtns.length - 1;

    for (let i = 0; i < indexBtns.length; i++) {
      indexBtns[i].classList.remove("selected");
    }
    indexBtns[index].classList.add("selected");

    index++;
  }

  /**
   * changeIndex를 무한 실행해 주는 함수
   */
  function autoslider() {
    siemaSlider.next();
    changeIndex();
  }
});
