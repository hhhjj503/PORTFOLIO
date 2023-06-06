window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const header = document.querySelector("header");
  const headerAs = document.querySelectorAll("header a"); //헤더클릭시 스크롤이동
  const graph = document.querySelector(".graph"); //그래프클래스제어
  const items = document.querySelectorAll(".item"); //스크롤이동할 타이틀컴포넌트
  const decoLine = document.querySelector(".deco-line");
  const vertexs = document.querySelectorAll(".vertex");
  const skills = document.querySelector(".skills");
  const portfolio = document.querySelector(".portfolio");
  const goup = document.querySelector(".goup");

  let itemsOffsetTops = [];
  let vertexsOffsetLefts = [];
  let vertexsIndex = 0;
  //배열에 스크롤 이벤트 트리거가 되는 엘리먼트의 top 값을 저장
  saveOffsetTop();
  saveOffsetLeft();

  //헤더메뉴 클릭시 스크롤이동
  for (let i = 0; i < headerAs.length; i++) {
    headerAs[i].addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: itemsOffsetTops[i],
        left: 0,
        behavior: "smooth",
      });
    });
  }

  console.log(vertexsOffsetLefts);
  //vertex 이벤트
  for (let i = 0; i < vertexs.length; i++) {
    vertexs[i].addEventListener("mouseenter", () => {
      vertexs.forEach((vertex) => vertex.classList.remove("active"));
      vertexs[i].classList.add("active");
      vertexsIndex = i;
      decoLine.style.width = vertexsOffsetLefts[i] + "px";
    });
    vertexs[i].addEventListener("mouseleave", () => {
      vertexs[i].classList.remove("active");
    });
  }

  setTimeout(() => {
    decoLine.classList.add("active");
  }, 1500);
  setTimeout(() => {
    const event = new Event("mouseenter");
    vertexs[0].dispatchEvent(event);
  }, 2000);

  //위로가기버튼
  goup.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  graph.classList.add("active");

  //스크롤 이벤트  + throttle
  window.addEventListener(
    "scroll",
    throttle(() => {
      const skillsTrigger = itemsOffsetTops[1] * 0.7;
      const portfolioTrigger = itemsOffsetTops[2] * 0.9;

      if (html.scrollTop > skillsTrigger) skills.classList.add("active");
      else skills.classList.remove("active");

      if (html.scrollTop > portfolioTrigger) portfolio.classList.add("active");
      else portfolio.classList.remove("active");

      if (html.scrollTop > html.scrollHeight * 0.5)
        goup.classList.add("active");
      else goup.classList.remove("active");
    }),
    { passive: true }
  );

  //윈도우 사이즈 변경시 트리거 top 값 다시 저장
  window.addEventListener("resize", () => {
    saveOffsetLeft();
    saveOffsetTop();
    decoLine.style.width = vertexsOffsetLefts[vertexsIndex] + "px";
    for (let i = 0; i < vertexs.length; i++) {
      vertexs[i].addEventListener("mouseenter", () => {
        vertexs.forEach((vertex) => vertex.classList.remove("active"));
        vertexs[i].classList.add("active");
        decoLine.style.width = vertexs[i].offsetLeft + "px";
      });
      vertexs[i].addEventListener("mouseleave", () => {
        vertexs[i].classList.remove("active");
      });
    }
  });

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

  function saveOffsetTop() {
    itemsOffsetTops = [];
    for (let i = 0; i < headerAs.length; i++) {
      itemsOffsetTops.push(
        items[i].getBoundingClientRect().top +
          window.pageYOffset -
          header.offsetHeight
      );
    }
    itemsOffsetTops[headerAs.length - 1] = html.scrollHeight;
  } //창 사이즈 변경시 top값 다시저장

  function saveOffsetLeft() {
    vertexsOffsetLefts = [];
    for (let i = 0; i < vertexs.length; i++) {
      vertexsOffsetLefts.push(vertexs[i].offsetLeft);
    }
  } //창 사이즈 변경시 vertex left값 다시저장
});
