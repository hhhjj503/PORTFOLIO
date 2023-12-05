window.addEventListener("load", () => {
  //.header
  const headerChar = document.querySelector(".header__char");

  //.banner
  const sliderBtnIndexs = document.querySelectorAll(".slider__btn--index");
  const sliderBtnPlay = document.querySelector(".slider__btn--play");
  const sliderBtnStop = document.querySelector(".slider__btn--stop");
  const sliderUl = document.querySelector(".slider__ul");
  let sliderStartIndex = 0;
  let sliderLastIndex = sliderBtnIndexs.length;
  let sliderSliding = true;

  //.intro
  const btnSliderBtnViewer = document.querySelector(".btn-slider__btn-viewer");
  const btnSliderBtnLis = document.querySelectorAll(".btn-slider__btn-li");
  const btnSliderSliderUl = document.querySelector(".btn-slider__slider-ul");
  const btnSliderSliderImg = document.querySelectorAll(
    ".btn-slider__slider-img"
  );
  const sizeCoverBtn = document.querySelector(".btn-slider__size-btn_cover");
  const sizeContainBtn = document.querySelector(
    ".btn-slider__size-btn_contain"
  );
  const btnSliderMobileBtnViewer = document.querySelector(
    ".btn-slider__mobile-btn-viewer"
  );
  const btnSliderMobileBtnLis = document.querySelectorAll(
    ".btn-slider__mobile-btn-li"
  );

  const langSelectorBtnKor = document.querySelector(".lang-selector__btn--kor");
  const langSelectorBtnEng = document.querySelector(".lang-selector__btn--eng");
  const langSelectorP = document.querySelectorAll(".lang-selector__p");

  //.members
  const membersSection = document.querySelector(".members");
  const membersMember = document.querySelectorAll(".vertical-media");
  const html = document.querySelector("html");
  let memberThreshold =
    window.pageYOffset +
    membersSection.getBoundingClientRect().top -
    html.scrollHeight * 0.1;

  //
  //section.news
  const newsSection = document.querySelector(".news");
  const arrowSlider = document.querySelector(".arrow-slider__slider");
  let arrowSliderThreshold =
    window.pageYOffset +
    newsSection.getBoundingClientRect().top -
    html.scrollHeight * 0.08;
  const arrowSliderUl = document.querySelector(".arrow-slider__ul");
  const arrowSliderLis = document.querySelectorAll(".arrow-slider__li");

  const arrowSliderBtnBefore = document.querySelector(
    ".arrow-slider__btn--before"
  );
  const arrowSliderBtnNext = document.querySelector(".arrow-slider__btn--next");
  const arrowSliderBar = document.querySelector(".arrow-slider__bar");
  const progressValue = 100 / arrowSliderLis.length;
  const arrowSliderNumStart = document.querySelector(
    ".arrow-slider__num--start"
  );
  const arrowSliderNumLast = document.querySelector(".arrow-slider__num--last");
  let arrowSliderCurrentIndex = 1;
  let newsOffsetLeft = 0;

  //section.albums
  const albumsSection = document.querySelector(".albums");
  const albumsBGPlay = document.querySelector(".albums__btn--play");
  const albumsBGStop = document.querySelector(".albums__btn--stop");
  const switchingLis = document.querySelectorAll(".switching-li__li");
  const switchingLiImgBtns = document.querySelectorAll(
    ".switching-li__img-btn"
  );
  const albumNames = [
    "square-one",
    "square-two",
    "square-up",
    "kill-this-love",
    "the-album",
    "born-pink",
  ];
  const switchingLiControlBtn = document.querySelector(
    ".switching-li__control-btn"
  );

  //section.game
  const rankGameUnitImg = document.querySelectorAll(".rank-game__unit-img");
  const rankGameUnit = document.querySelector(".rank-game__unit");
  const rankGameBtnStart = document.querySelector(".rank-game__btn--start");
  const rankGameBtnReset = document.querySelector(".rank-game__btn--reset");
  let moving = false;
  let scores = [0, 0, 0, 0];
  let urls = [
    "url(../../source/images/blackpink/0000926654.jpg)", //제니이미지
    "url(../../source/images/blackpink/roseyg.jpg)", //로제이미지
    "url(../../source/images/blackpink/0002650199.jpg)", //리사이미지
    "url(../../source/images/blackpink/0001567912_0019.jpg)", //지수이미지
  ];
  const result = document.querySelector(".rank-game__result");
  //
  //scroll-up
  const scrollUp = document.querySelector(".scroll-up");

  scrollUp.addEventListener("click", function () {
    html.scrollTop = 0;
  });

  rankGameBtnStart.addEventListener("click", function () {
    removeClass(this, "active");
    moving = setInterval(function () {
      const limit =
        rankGameUnit.offsetHeight - rankGameUnitImg[0].offsetHeight * 1.5;

      for (let i = 0; i < rankGameUnitImg.length; i++) {
        scores[i] = scores[i] + Math.floor(Math.random() * (100 - 50) + 50);
        rankGameUnitImg[i].style.top = scores[i] + "px";

        if (scores[i] > limit) {
          clearInterval(moving);
          const maxScore = Math.max(...scores);

          for (let j = 0; j < scores.length; j++) {
            if (maxScore === scores[j]) {
              result.style.backgroundImage = urls[j];
              addClass(result, "active");
            }
          }
          addClass(rankGameBtnReset, "active");
        }
      }
    }, 1000);
  });

  rankGameBtnReset.addEventListener("click", function () {
    scores = [0, 0, 0, 0];
    for (let i = 0; i < rankGameUnitImg.length; i++) {
      rankGameUnitImg[i].style.top = 0 + "px";
      removeClass(rankGameBtnReset, "active");
      addClass(rankGameBtnStart, "active");
      removeClass(result, "active");
    }
  });

  window.addEventListener("resize", function () {
    memberThreshold =
      window.pageYOffset +
      membersSection.getBoundingClientRect().top -
      html.scrollHeight * 0.1;
    arrowSliderThreshold =
      window.pageYOffset +
      newsSection.getBoundingClientRect().top -
      html.scrollHeight * 0.08;
  }); //resize 이벤트
  //
  //section.albums
  switchingLiControlBtn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      addAllClass(switchingLiImgBtns, "active");
      addAllClass(switchingLis, "active");
    }
  });

  for (let i = 0; i < switchingLis.length; i++) {
    if (switchingLis[i].classList.contains(albumNames[0])) {
      addClass(switchingLis[i], "active");
    }
  } //홈페이지 로딩시 default active 할 요소

  for (let i = 0; i < switchingLiImgBtns.length; i++) {
    switchingLiImgBtns[i].addEventListener("click", function () {
      let addingClass = false;
      const albumName = albumNames[i];
      if (!addingClass) {
        addingClass = true;
        removeAllClass(switchingLiImgBtns, "active");
        addClass(switchingLiImgBtns[i], "active");
        removeAllClass(switchingLis, "active");
        for (let j = 0; j < switchingLis.length; j++)
          if (switchingLis[j].classList.contains(albumName)) {
            addClass(switchingLis[j], "active");
            addingClass = false;
          }
      }
    });
  } //album 버튼 클릭이벤트

  albumsBGPlay.addEventListener("click", function () {
    addClass(albumsSection, "active");
  });
  albumsBGStop.addEventListener("click", function () {
    removeClass(albumsSection, "active");
  }); //앨범섹션 배경이미지 변경

  //section.news
  arrowSliderNumLast.innerText = "0" + arrowSliderLis.length;
  arrowSliderNumStart.innerText = "0" + arrowSliderCurrentIndex;
  plusWidthValue(arrowSliderBar, arrowSliderCurrentIndex, progressValue, "%");
  arrowSliderBtnBefore.addEventListener("click", function () {
    if (arrowSliderCurrentIndex <= 1) {
      arrowSliderCurrentIndex = arrowSliderLis.length;
      newsOffsetLeft =
        arrowSliderLis[arrowSliderCurrentIndex - 1].offsetWidth *
          arrowSliderLis.length -
        120; //중복되는 margin 제거
      arrowSliderUl.style.left = -newsOffsetLeft + "px";
    } else {
      arrowSliderCurrentIndex--;
      newsOffsetLeft =
        newsOffsetLeft -
        (arrowSliderLis[arrowSliderCurrentIndex - 1].offsetWidth + 40);
      newsOffsetLeft = Number.parseInt(newsOffsetLeft);
      arrowSliderUl.style.left = -newsOffsetLeft + "px";
    }
    arrowSliderNumStart.innerText = "0" + arrowSliderCurrentIndex;
    minusWidthValue(
      arrowSliderBar,
      arrowSliderCurrentIndex,
      progressValue,
      "%"
    );
  }); //뉴스 슬라이더 다음버튼
  arrowSliderBtnNext.addEventListener("click", function () {
    if (arrowSliderCurrentIndex == arrowSliderLis.length) {
      arrowSliderCurrentIndex = 1;
      newsOffsetLeft = 0;
      arrowSliderUl.style.left = 0 + "px";
    } else {
      arrowSliderCurrentIndex++;
      newsOffsetLeft =
        newsOffsetLeft +
        arrowSliderLis[arrowSliderCurrentIndex - 1].offsetWidth +
        40; //margin 40
      newsOffsetLeft = Number.parseInt(newsOffsetLeft);
      arrowSliderUl.style.left = -newsOffsetLeft + "px";
    }
    plusWidthValue(arrowSliderBar, arrowSliderCurrentIndex, progressValue, "%");
    arrowSliderNumStart.innerText = "0" + arrowSliderCurrentIndex;
  }); //뉴스 슬라이더 이전버튼
  function plusWidthValue(element, currentIndex, value, unit) {
    element.style.width = currentIndex * value + unit;
  }
  function minusWidthValue(element, currentIndex, value, unit) {
    element.style.width = currentIndex * value + unit;
  }
  window.addEventListener(
    "scroll",
    throttle(() => {
      const currentScrollTop = html.scrollTop;
      if (currentScrollTop >= memberThreshold) {
        addAllClass(membersMember, "active");
      } else {
        removeAllClass(membersMember, "active");
      }

      if (currentScrollTop >= arrowSliderThreshold) {
        addClass(arrowSlider, "active");
      } else {
        removeClass(arrowSlider, "active");
      }

      if (currentScrollTop > 200) {
        addClass(scrollUp, "active");
      } else removeClass(scrollUp, "active");
    })
  ); //스크롤하면 member 화면에 표시

  //section.intro
  langSelectorBtnKor.addEventListener("click", function () {
    removeAllClass(langSelectorP, "active");
    addClass(langSelectorP[0], "active");
  });
  langSelectorBtnEng.addEventListener("click", function () {
    removeClass(langSelectorP[0], "active");
    addClass(langSelectorP[1], "active");
  });
  sizeCoverBtn.addEventListener("click", function () {
    for (let i = 0; i < btnSliderSliderImg.length; i++) {
      removeAllClass(btnSliderSliderImg, "contain");
    }
  });
  sizeContainBtn.addEventListener("click", function () {
    for (let i = 0; i < btnSliderSliderImg.length; i++) {
      addAllClass(btnSliderSliderImg, "contain");
    }
  });
  for (let i = 0; i < btnSliderBtnLis.length; i++) {
    btnSliderBtnLis[i].addEventListener("click", function () {
      removeAllClassThenAddClass(btnSliderBtnLis, btnSliderBtnLis[i], "active");
      if (i < btnSliderBtnLis.length)
        offTopPosition(btnSliderBtnViewer, i * 20, "%");
      offTopPosition(btnSliderSliderUl, -(i * 100), "%");
    });
  } //썸네일 클릭시 original 이미지 슬라이드

  for (let i = 0; i < btnSliderMobileBtnLis.length; i++) {
    btnSliderMobileBtnLis[i].addEventListener("click", function () {
      removeAllClassThenAddClass(
        btnSliderMobileBtnLis,
        btnSliderMobileBtnLis[i],
        "active"
      );
      if (i < btnSliderMobileBtnLis.length) {
        offLeftPosition(btnSliderMobileBtnViewer, i * 20, "%");
      }
      offTopPosition(btnSliderSliderUl, -(i * 100), "%");
    });
  } //모바일 썸네일 클릭시 대형이미지 슬라이드

  //section.banner
  let bannerAutoSlide = setInterval(function () {
    let event = new Event("click");
    sliderBtnIndexs[sliderStartIndex].dispatchEvent(event);
  }, 3000); //자동배너 슬라이더

  for (let i = 0; i < sliderBtnIndexs.length; i++) {
    sliderBtnIndexs[i].addEventListener("click", function () {
      removeAllClassThenAddClass(sliderBtnIndexs, sliderBtnIndexs[i], "active");
      offLEftPosition(sliderUl, -(i * 100), "%");
      sliderStartIndex++;
      if (sliderLastIndex <= sliderStartIndex) sliderStartIndex = 0;
    });
  } //배너 인덱스 클릭이벤트
  sliderBtnPlay.addEventListener("click", function () {
    if (sliderSliding == false) {
      bannerAutoSlide = setInterval(function () {
        let event = new Event("click");
        sliderBtnIndexs[sliderStartIndex].dispatchEvent(event);
      }, 3500);
    }
    sliderSliding = true;
  }); //배너슬라이드 플레이
  sliderBtnStop.addEventListener("click", function () {
    sliderSliding = false;
    clearInterval(bannerAutoSlide);
  }); //배너슬라이드 멈춤

  //h1
  setTimeout(() => {
    headerChar.classList.add("header__char--rotate");
  }, 500);

  function removeAllClassThenAddClass(elements, element, className) {
    removeAllClass(elements, className);
    addClass(element, className);
  }

  function addAllClass(element, className) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add(className);
    }
  }

  function addClass(element, className) {
    element.classList.add(className);
  }

  function removeAllClass(element, className) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove(className);
    }
  }

  function removeClass(element, className) {
    element.classList.remove(className);
  }

  function offLEftPosition(element, value, unit) {
    element.style.left = value + unit;
  }

  function offTopPosition(element, value, unit) {
    element.style.top = value + unit;
  }

  function offLeftPosition(element, value, unit) {
    element.style.left = value + unit;
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
