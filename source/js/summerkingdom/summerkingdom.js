window.onload = function () {
  const trigger = new ScrollTrigger.default();
  trigger.add("[data-trigger]");

  const imgWrapper = document.querySelector(
    "main .main_items .banner_wrapper .banner .img_wrapper"
  );
  const curtains = document.querySelectorAll(
    "main .main_items .banner_wrapper .banner .curtain"
  );
  const imgs = document.querySelectorAll(
    "main .main_items .banner_wrapper .banner .img_wrapper .img"
  );
  const body = document.querySelector("body");
  const banner = document.querySelector(
    "main .main_items .banner_wrapper .banner"
  );

  //새로고침시 스크롤 최상단으로 이동
  setTimeout(() => {
    scrollTo(0, 0);
  }, 100);

  //dom 에 banner 가 로딩이 됐을시간일때쯤 클래스추가
  setTimeout(() => {
    banner.classList.add("loaded");
  }, 1100);

  //banner 에 클래스가 추가된뒤에 스크롤 화면에 표시
  setTimeout(() => {
    body.style.overflowY = "auto";
  }, 1300);

  setTimeout(() => {
    window.addEventListener("scroll", function () {
      let currentScroll = document.querySelector("html").scrollTop;
      if (currentScroll > 0) {
        clearInterval(changeImgByScroll);
        for (let i = 0; i < curtains.length; i++) {
          curtains[i].classList.add("opened");
        }
      } else {
        for (let i = 0; i < curtains.length; i++) {
          curtains[i].classList.remove("opened");
        }
        changeImgByScroll = setInterval(() => {
          chageImg();
        }, 800);
      }
    });
  }, 1200);

  //이미지를 바꾸는 무한 함수
  let changeImgByScroll = setInterval(() => {
    chageImg();
  }, 800);

  //인덱스에 따라 이미지 변경
  let imgIndex = 0;
  function chageImg() {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("show");
    }
    imgs[imgIndex].classList.add("show");
    imgIndex++;
    if (imgIndex >= 3) {
      imgIndex = 0;
    }
  }
};
