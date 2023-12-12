const html = document.querySelector("html");
const overlaySlider = document.querySelector(".overlay-slider");
const overlaySliderPauseBtn = document.querySelector(
  ".overlay-slider__pause-btn"
); //controller > slider-controls
const overlaySliderPlayBtn = document.querySelector(
  ".overlay-slider__play-btn"
);
const overlay = document.querySelector(".overlay-slider__overlay");
const overlayImg = document.querySelector(".overlay-slider__overlay-img");

let sliderWorking = true;
let timer = undefined;

overlaySliderPauseBtn.addEventListener("click", function () {
  clearInterval(timer);
  sliderWorking = false;
});
overlaySliderPlayBtn.addEventListener("click", function () {
  if (!sliderWorking) {
    sliderWorking = true;
    timer = setInterval(infiniteSlider, 3000);
  }
});

//슬라이더 초기화
//intializeSlides();

//무한슬라이더 작동시작
//sliderStart();

export function sliderStart() {
  timer = setInterval(infiniteSlider, 3000);
}

//슬라이드 클릭시 오버레이 이미지 visible
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
export function intializeSlides() {
  const overlaySlides = document.querySelectorAll(".overlay-slider__slide");
  for (let i = 0; i < overlaySlides.length; i++) {
    overlaySlides[i].addEventListener("click", function () {
      const overlaySlideImg = overlaySlides[i].querySelector("img");
      overlayImg.src = overlaySlideImg.getAttribute("src");
      overlayImg.alt = overlaySlideImg.getAttribute("alt");
      overlay.classList.add("visible");
    });
    overlaySlides[i].addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        overlaySlides[i].dispatchEvent(new Event("click"));
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
 * moveLeft 을 호출해 슬라이더에 -left 값을준뒤
 * cloneSlide 를 통해 -left 값이 적용되 화면에 보이지않는 슬라이드 하나를 삭제한뒤
 * 복사해 마지막위치로 이동하는 함수를 계속 반복호출
 */
export function infiniteSlider() {
  setTimeout(() => {
    moveLeft("-300px");
  }, 500);
  setTimeout(() => {
    cloneSlide();
  }, 2000);
}

/**
 * 슬라이더에 left : -300px css 를 적용하는 함수
 */
function moveLeft(leftValue) {
  overlaySlider.style.transition = "1s ease-in-out";
  overlaySlider.style.left = leftValue;
}

/**
 * 현재 슬라이더의 첫번쨰 항목을 복사한뒤 삭제해 마지막 항목으로 추가하는 함수
 */
function cloneSlide() {
  const overlaySlides = document.querySelectorAll(".overlay-slider__slide");
  const firstslide = overlaySlides[0].cloneNode(true);
  overlaySlides[0].remove();
  overlayImage(firstslide);
  overlaySlider.appendChild(firstslide);
  overlaySlider.style.transition = "none";
  overlaySlider.style.left = "0px";
}
