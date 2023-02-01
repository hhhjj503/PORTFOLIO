window.addEventListener("load", function () {
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");

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

  //모바일 메뉴 클릭시 아코디언
  topNavMobile.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //모바일 에러용
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });

  /* ---------------------------------- 배너 슬라이드 ------------------------------------------------ */

  //슬라이드 a 태그 기본기능 방지
  for (let i = 0; i < as.length; i++) {
    as[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  //시에마 슬라이드
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
  console.log(sliderItems);
  prev.addEventListener("click", () => {
    //changeColor 메서드가 끝날때 index 값을 증가시키기 때문에
    //prev 는 index 에서 -2 를 빼야함
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

  function autoslider() {
    siemaSlider.next();
    changeIndex();
  }
});
