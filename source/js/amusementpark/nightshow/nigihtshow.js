import { intializeSlides, sliderStart } from "./overlay-slider.js";

window.addEventListener("load", () => {
  const html = document.querySelector("html");

  const hidingThresholds = document.querySelectorAll(".hidingThreshold"); //hiding > hidingThreshold
  const hiddenElements = document.querySelectorAll(".hidingThreshold + *"); //hidings > hiddenElements

  //슬라이더 초기화
  intializeSlides();
  //overlay slider 모듈 작동
  sliderStart();

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

  //뒤로가기, 새로고침 차단
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";
  });

  /**
   * 엘리먼트의 top=0px, opacity=1 로 변경
   * @param {*} element
   *
   */
  function showElements(element) {
    element.style.top = "0px";
    element.style.opacity = "1";
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
