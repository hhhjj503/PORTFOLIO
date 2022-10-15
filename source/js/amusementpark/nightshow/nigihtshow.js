window.addEventListener("load", () => {
  const mainImg = document.querySelector(".main_img");
  const slider = document.querySelector(".contents .slider");
  const overlay = document.querySelector(".overlay");
  const overlayImg = document.querySelector(".overlay img");
  const hidings = document.querySelectorAll("a.hiding + *");
  const html = document.querySelector("html");

  //모바일 메뉴
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");

  topNavMobile.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //click 이벤트 작동하지 않음
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });

  for (let i = 0; i < hidings.length; i++) {
    hidings[i].dataset.offtop = hidings[i].getBoundingClientRect().top - 800;
  }

  window.addEventListener("scroll", () => {
    const currentTop = html.scrollTop;
    for (let i = 0; i < hidings.length; i++) {
      if (currentTop >= hidings[i].dataset.offtop) {
        showElements(hidings[i]);
      }
    }
  });

  function showElements(element) {
    element.style.top = "0px";
    element.style.opacity = "1";
  }

  const img = new Image();
  img.src = mainImg.dataset.path;

  intializeSlides();

  //무한슬라이더 작동시작
  setInterval(() => {
    infiniteSlider();
  }, 3000);

  overlay.addEventListener("click", function () {
    this.classList.remove("visible");
  });

  //첫슬라이더 초기화
  function intializeSlides() {
    const slides = document.querySelectorAll(".slider .slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].addEventListener("click", function () {
        const img = slides[i].querySelector("img");
        overlayImg.src = img.getAttribute("src");
        overlay.classList.add("visible");
      });
    }
  }

  //슬라이더이미지 누르면 큰 이미지 보여주기
  function overlayImage(slide) {
    slide.addEventListener("click", () => {
      const img = slide.querySelector("img");
      overlayImg.src = img.getAttribute("src");
      overlay.classList.add("visible");
    });
  }

  //무한 슬라이더
  function infiniteSlider() {
    const slides = document.querySelectorAll(".slider .slide");
    setTimeout(() => {
      slider.style.transition = "1s ease-in-out";
      slider.style.left = "-320px";
    }, 1000);
    setTimeout(() => {
      const firstslide = slides[0].cloneNode(true);
      slides[0].remove();
      overlayImage(firstslide);
      slider.appendChild(firstslide);
      slider.style.transition = "none";
      slider.style.left = "0px";
    }, 2200);
  }
});
