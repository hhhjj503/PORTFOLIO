window.addEventListener("load", function () {
  //아쿠아리움 페이지 슬라이더 사용을 위한 변수
  const sliderBtnPrev = document.querySelector(".slider__btn--prev");
  const sliderBtnNext = document.querySelector(".slider__btn--next");
  const sliderIndexs = document.querySelectorAll(".slider__index");
  let SliderIndexNum = 0;

  const sliderIndex1 = document.querySelector(".slider__index--1");
  const sliderIndex2 = document.querySelector(".slider__index--2");
  const sliderIndex3 = document.querySelector(".slider__index--3");
  const sliderBtnPause = document.querySelector(".slider__btn--pause");
  const sliderBtnPlay = document.querySelector(".slider__btn--play");
  let sliderWorking = true;

  //이미지미리로드
  const imgSourceArray = [];
  imgSourceArray.push(
    "../../source/images/amusementpark/aquarium/dmitry-bukhantsov-IBrZ-TXYWY8.jpg"
  );

  for (let i = 0; i < imgSourceArray.length; i++) {
    let img = new Image();
    img.src = imgSourceArray[i];
  }

  const sliderSlides = $(".slider__slide");

  // ---------------------------------------------------------------------------------//

  //시에마 슬라이드 생성
  const siemaSlider = new Siema({
    selector: ".slider",
    duration: 1000,
    easing: "ease-out",
    perPage: 1,
    startIndex: 0,
    threshold: 216,
    loop: true,
    onChange: function () {
      sliderSlides.find("h3").removeClass("active");
      sliderSlides.eq(this.currentSlide).find("h3").addClass("active");
    },
  });

  sliderBtnPrev.addEventListener("click", () => {
    siemaSlider.prev();
    changeIndex(index - 2);
  });

  sliderBtnNext.addEventListener("click", () => {
    siemaSlider.next();
    changeIndex();
  });

  sliderIndex1.addEventListener("click", () => {
    siemaSlider.goTo(0);
    changeIndex(0);
  });

  sliderIndex2.addEventListener("click", () => {
    siemaSlider.goTo(1);
    changeIndex(1);
  });

  sliderIndex3.addEventListener("click", () => {
    siemaSlider.goTo(2);
    changeIndex(2);
  });
  sliderBtnPause.addEventListener("click", () => {
    clearInterval(timer);
    sliderWorking = false;
  });
  sliderBtnPlay.addEventListener("click", () => {
    if (!sliderWorking) {
      sliderWorking = true;
      timer = setInterval(autoslider, 4000);
    }
  });

  changeIndex();

  let timer = setInterval(autoslider, 4000);

  //moment js 시간 타이머
  let currentTime = moment();
  let timerHours = document.querySelector(".timer__time--hours");
  let timerMinutes = document.querySelector(".timer__time--minutes");
  let timerSeconds = document.querySelector(".timer__time--seconds");
  let timerBusinessStatus = document.querySelector(".timer__business-status");

  if (currentTime.hours() >= 10 && currentTime.hours() <= 20) {
    const countdown = setInterval(function () {
      timerBusinessStatus.innerText = "OPEN";
      timeCountdown();
    }, 1000);
  }

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
      timerHours.innerText = "0" + leftHours;
    } else {
      timerHours.innerText = leftHours;
    }
    if (leftMinutes < 10) {
      timerMinutes.innerText = "0" + leftMinutes;
    } else {
      timerMinutes.innerText = leftMinutes;
    }
    if (leftSeconds < 10) {
      timerSeconds.innerText = "0" + leftSeconds;
    } else {
      timerSeconds.innerText = leftSeconds;
    }
  }

  /**
   *슬라이드 인덱스를 다음 슬라이드로 증가시키고 슬라이더 내부의 타이틀 엘리먼트를 표시해주는 함수
   *(실행시 전역 SliderIndexNum 변수의 값이 1씩 증가)
   * @param {number} num 숫자타입의 인덱스번호
   * (입력이 안될경우 전역 변수인 SliderIndexNum 변수 자동사용)
   */
  function changeIndex(num) {
    if (!(num === undefined)) SliderIndexNum = num;
    if (SliderIndexNum > sliderIndexs.length - 1) SliderIndexNum = 0;
    if (SliderIndexNum < 0) SliderIndexNum = sliderIndexs.length - 1;

    for (let i = 0; i < sliderIndexs.length; i++) {
      sliderIndexs[i].classList.remove("selected");
    }
    sliderIndexs[SliderIndexNum].classList.add("selected");
    SliderIndexNum++;
  }

  /**
   * changeIndex를 무한 실행해 주는 함수
   */
  function autoslider() {
    siemaSlider.next();
    changeIndex();
  }
});
