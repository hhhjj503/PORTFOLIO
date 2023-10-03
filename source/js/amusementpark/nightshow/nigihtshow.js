window.addEventListener("load", () => {
  const html = document.querySelector("html");

  const bannerImg = document.querySelector(".banner-wrapper .img");
  const slider = document.querySelector(".contents .slider");
  const pauseBtn = document.querySelector(".slider-controls .pause"); //controller > controls
  const playBtn = document.querySelector(".slider-controls .play");
  const overlay = document.querySelector(".overlay");
  const overlayImg = document.querySelector(".overlay img");

  const hidingThresholds = document.querySelectorAll(".hidingThreshold"); //hiding > hidingThreshold
  const hiddenElements = document.querySelectorAll(".hidingThreshold + *"); //hidings > hiddenElements

  const gotop = document.querySelector(".gotop");
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelector("textarea");

  //모바일 메뉴
  const hMobileNav = document.querySelector("header .mobile-nav"); //top-nav-mobile > mobile-nav
  const subMenu = document.querySelector(".mobile-nav .sub-menu");
  const goup = document.querySelector(".mobile-nav .goup");

  hMobileNav.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //gotop 버튼
  gotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });

  //click 이벤트 작동하지 않음
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });

  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].dataset.offtop =
      hiddenElements[i].getBoundingClientRect().top - 1000;
    hidingThresholds[i].addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault(); //a태그의 enter 키 차단
      }
    });
  }

  window.addEventListener(
    "scroll",
    throttle(() => {
      const currentTop = html.scrollTop;
      for (let i = 0; i < hiddenElements.length; i++) {
        if (currentTop >= hiddenElements[i].dataset.offtop) {
          showElements(hiddenElements[i]);
        }
      }
    })
  );

  function showElements(element) {
    element.style.top = "0px";
    element.style.opacity = "1";
  }

  const img = new Image();
  img.src = bannerImg.dataset.path;
  let sliderWorking = true;

  pauseBtn.addEventListener("click", function () {
    clearInterval(timer);
    sliderWorking = false;
  });
  playBtn.addEventListener("click", function () {
    if (!sliderWorking) {
      sliderWorking = true;
      timer = setInterval(infiniteSlider, 4000);
    }
  });

  //뒤로가기, 새로고침 차단
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  intializeSlides();

  //무한슬라이더 작동시작
  let timer = setInterval(infiniteSlider, 4000);

  overlay.addEventListener("click", function () {
    this.classList.remove("visible");
  });
  html.addEventListener("keydown", function (e) {
    if (overlay.classList.contains("visible") && e.key === "Escape") {
      overlay.classList.remove("visible");
    }
  });

  /**
   * 슬라이더를 초기화하는 함수
   */
  function intializeSlides() {
    const slides = document.querySelectorAll(".slider .slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].addEventListener("click", function () {
        const img = slides[i].querySelector("img");
        overlayImg.src = img.getAttribute("src");
        overlayImg.alt = img.getAttribute("alt");
        overlay.classList.add("visible");
      });
      slides[i].addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          slides[i].dispatchEvent(new Event("click"));
        }
      });
    }
  }

  /**
   * 슬라이드에 클릭한 슬라이드 이미지를 전체화면으로 표시하는 이벤트를 추가해주는 함수
   * @param {element} slide
   */
  function overlayImage(slide) {
    slide.addEventListener("click", function () {
      const img = slide.querySelector("img");
      overlayImg.src = img.getAttribute("src");
      overlayImg.alt = img.getAttribute("alt");
      overlay.classList.add("visible");
    });
    slide.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const event = new Event("click");
        this.dispatchEvent(event);
      }
    });
  }

  /**
   * addStyle 을 호출해 슬라이더에 -left 값을준뒤
   * cloneSlide 를 통해 -left 값이 적용되 화면에 보이지않는 슬라이드 하나를 삭제한뒤
   * 복사해 마지막위치로 이동하는 함수를 계속 반복호출
   */
  function infiniteSlider() {
    setTimeout(() => {
      addStyle();
    }, 500);
    setTimeout(() => {
      cloneSlide();
    }, 1500);
  }

  /**
   * 슬라이더에 left : -300px css 를 적용하는 함수
   */
  function addStyle() {
    slider.style.transition = "1s ease-in-out";
    slider.style.left = "-300px";
  }

  /**
   * 현재 슬라이더의 첫번쨰 항목을 복사한뒤 삭제해 마지막 항목으로 추가하는 함수
   */
  function cloneSlide() {
    const slides = document.querySelectorAll(".slider .slide");
    const firstslide = slides[0].cloneNode(true);
    slides[0].remove();
    overlayImage(firstslide);
    slider.appendChild(firstslide);
    slider.style.transition = "none";
    slider.style.left = "0px";
  }

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
