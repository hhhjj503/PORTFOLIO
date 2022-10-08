window.addEventListener("load", () => {
  //하단 슬라이더
  let currentIndex = 0;
  let slider = document.querySelector(".slider"); //ul
  let sliderImg = document.querySelectorAll(".slider .a-item"); //ul li
  const slidesCnt = sliderImg.length;

  //하단이미지 이동버튼
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  makeClone();

  function makeClone() {
    for (let i = 0; i < slidesCnt; i++) {
      let clonedSlider = sliderImg[i].cloneNode(true);
      clonedSlider.classList.add("clone");
      slider.appendChild(clonedSlider);
    }
    for (let i = slidesCnt - 1; i >= 0; i--) {
      let clonedSlider = sliderImg[i].cloneNode(true);
      clonedSlider.classList.add("clone");
      slider.prepend(clonedSlider);
    }
  }

  updateWidth();
  setiInitialPosition();
  setTimeout(() => {
    slider.classList.add("sliding");
  }, 100);

  function updateWidth() {
    const newSliderImg = document.querySelectorAll(".slider .a-item");
    const newSlidesCnt = newSliderImg.length;

    const newWidth = 350 * newSlidesCnt + "px";
    slider.style.width = newWidth;
  }

  function setiInitialPosition() {
    const initPositionValue = -(350 * 6) + "px";
    slider.style.transform = `translateX(${initPositionValue})`;
  }

  next.addEventListener("click", function () {
    moveSlider(currentIndex + 1);
  });

  prev.addEventListener("click", function () {
    moveSlider(currentIndex - 1);
  });

  function moveSlider(cnt) {
    slider.style.left = -(cnt * 350) + "px";
    currentIndex = cnt;
    if (currentIndex == slidesCnt || currentIndex == -slidesCnt) {
      setTimeout(() => {
        slider.classList.remove("sliding");
        slider.style.left = "0px";
        currentIndex = 0;
      }, 500);
      setTimeout(() => {
        slider.classList.add("sliding");
      }, 600);
    }
  }
});
