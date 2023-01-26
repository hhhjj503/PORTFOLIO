window.onload = function () {
  //변수선언
  const html = document.querySelector("html");
  const entrance = document.querySelector(".entrance");
  const items = document.querySelectorAll(".technology .item");
  const scores = document.querySelectorAll(".technology .score");
  const bars = document.querySelectorAll(".technology .score .bar");
  const lists = document.querySelectorAll(".portfolio .list");
  const pagemoves = document.querySelectorAll(".pagemove");
  let imgCheck = false;

  /*------------------------------- 이미지로드 ----------------------------*/
  for (let i = 0; i < 1; i++) {
    const img = new Image();
    img.src = entrance.dataset.path;
    img.addEventListener("load", () => {
      imgCheck = true;
      if (imgCheck) {
        const loadingAnimationWrapper = document.querySelector(
          ".loading-animation-wrapper"
        );
        setTimeout(() => {
          loadingAnimationWrapper.classList.add("loaded");
        }, 2000);
        setTimeout(() => {
          loadingAnimationWrapper.classList.add("hide");
        }, 2500);
      }
    });
  }

  for (const item of items) {
    const path = new Image();
    path.src = item.dataset.path;
  }

  for (const list of lists) {
    const path = new Image();
    path.src = list.dataset.path;
  }

  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundImage = "url(" + lists[i].dataset.path + ")";
  }

  /*------------------------------- throttle.js ----------------------------*/
  window.addEventListener(
    "scroll",
    $.throttle(1000 / 15, function () {
      scrollEvent();
    })
  ); //$.throttle

  /*------------------------------- 스크롤 내릴시 SKILLS 애니메이션 적용 ----------------------------*/
  function scrollEvent() {
    const documentHeight = html.scrollHeight;
    const showValue = documentHeight * 0.21;
    let currentValue = html.scrollTop;

    if (currentValue > showValue) {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add("show");
      }
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          const score = scores[i].dataset.score;
          bars[i].style.backgroundColor = bars[i].dataset.color;
          bars[i].style.width = `${score}%`;
        }
      }, 1300);
    }
  } //scrollEvent
};
