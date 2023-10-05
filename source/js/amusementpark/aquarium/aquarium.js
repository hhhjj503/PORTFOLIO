window.addEventListener("load", function () {
  //상세페이지별 공통변수, 아쿠아리움 페이지용 추가기능을 위한 쿼리
  const html = document.querySelector("html");
  const hNav = document.querySelector(".h-nav");
  const mobileMenu = document.querySelector(".mobile-menu"); //mobile-nav > mobile-menu

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
  const pauseBtn = document.querySelector(".index-button-wrapper .pause");
  const playBtn = document.querySelector(".index-button-wrapper .play");
  let sliderWorking = true;

  const bannerWrapper = document.querySelector("main .banner-wrapper.bg-img");
  //이미지미리로드
  const imgSourceArray = [];
  imgSourceArray.push(
    "../../source/images/amusementpark/aquarium/dmitry-bukhantsov-IBrZ-TXYWY8.jpg"
  );

  for (let i = 0; i < imgSourceArray.length; i++) {
    let img = new Image();
    img.src = imgSourceArray[i];
  }

  const sliderItems = $(".event-slider .item");

  //스크롤 내리면 헤드메뉴 투명하게
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      hNav.classList.add("scrolldown");
      mobileMenu.classList.add("scrolldown");
    } else {
      hNav.classList.remove("scrolldown");
      mobileMenu.classList.remove("scrolldown");
    }
  });
  // ---------------------------------------------------------------------------------//

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
  pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    sliderWorking = false;
  });
  playBtn.addEventListener("click", () => {
    if (!sliderWorking) {
      sliderWorking = true;
      timer = setInterval(autoslider, 4000);
    }
  });

  changeIndex();

  let timer = setInterval(autoslider, 4000);

  //moment js 시간 타이머
  let currentTime = moment();
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  let countdownTitle = document.querySelector(".countdown-title");

  if (currentTime.hours() >= 10 && currentTime.hours() <= 20) {
    const countdown = setInterval(function () {
      countdownTitle.innerText = "OPEN";
      timeCountdown();
    }, 1000);
  }

  bannerWrapper.classList.add("loaded");

  /**
   * 마감 closed 시간까지 남은 시간을 계산하는 함수
   */
  function timeCountdown() {
    const closingTime = moment("21:00:00", "hh:mm:ss");
    currentTime = moment();
    let leftTime = moment.duration(closingTime.diff(currentTime));
    const leftHours = leftTime.hours();
    const leftMinutes = leftTime.minutes();
    const leftSeconds = leftTime.seconds();
    if (leftHours < 10) {
      hours.innerText = "0" + leftHours;
    } else {
      hours.innerText = leftHours;
    }
    if (leftMinutes < 10) {
      minutes.innerText = "0" + leftMinutes;
    } else {
      minutes.innerText = leftMinutes;
    }
    if (leftSeconds < 10) {
      seconds.innerText = "0" + leftSeconds;
    } else {
      seconds.innerText = leftSeconds;
    }
  }

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
