window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const header = document.querySelector(".header");
  const headerLink = document.querySelectorAll(".header-link"); //헤더클릭시 스크롤이동
  const jsOfftopElement = document.querySelectorAll(".js-offtop-element"); //스크롤이동할 엘리먼트 쿼리용 클래스
  const graph = document.querySelector(".graph"); //그래프클래스제어
  const graphColorLine = document.querySelector(".graph-color-line"); // deco-line > color-line
  const vertexLis = document.querySelectorAll(".graph-vertex-li");
  const skills = document.querySelector("#skills");
  const portfolio = document.querySelector("#portfolio");
  const gotop = document.querySelector(".gotop");

  let jsOfftopElementOffsetTops = [];
  let vertexLisOffsetLefts = [];
  let vertexLisIndex = 0;
  //배열에 스크롤 이벤트 트리거가 되는 엘리먼트의 top 값을 저장
  saveOffsetTop();
  saveOffsetLeft();

  //헤더메뉴 클릭시 스크롤이동
  for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener("click", () => {
      //e.preventDefault();
      window.scrollTo({
        top: jsOfftopElementOffsetTops[i],
        left: 0,
      });
    });

    /*headerLink[i].addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        window.scrollTo({
          top: jsOfftopElementOffsetTops[i],
          left: 0,
          behavior: "smooth",
        });
        const event = new Event("click");
        wrappers[i].dispatchEvent(event);
      }
    });*/
  }

  //vertex에 기본적인 이벤트 추가
  for (let i = 0; i < vertexLis.length; i++) {
    vertexLis[i].addEventListener("mouseenter", () => {
      vertexLis.forEach((vertex) => vertex.classList.remove("active"));
      vertexLis[i].classList.add("active");
      vertexLisIndex = i;
      graphColorLine.style.width = vertexLisOffsetLefts[i] + "px";
    });
    vertexLis[i].addEventListener("click", () => {
      vertexLis.forEach((vertex) => vertex.classList.remove("active"));
      vertexLis[i].classList.add("active");
      vertexLisIndex = i;
      graphColorLine.style.width = vertexLisOffsetLefts[i] + "px";
    });
    vertexLis[i].addEventListener("mouseleave", () => {
      vertexLis[i].classList.remove("active");
    });
    vertexLis[i].addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        vertexLis.forEach((vertex) => vertex.classList.remove("active"));
        vertexLis[i].classList.add("active");
        graphColorLine.style.width = vertexLis[i].offsetLeft + "px";
      }
    });
  }

  setTimeout(() => {
    graphColorLine.classList.add("active");
  }, 1500);
  setTimeout(() => {
    const event = new Event("mouseenter");
    vertexLis[0].dispatchEvent(event);
  }, 2000);

  //위로가기버튼
  gotop.addEventListener("click", (e) => {
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
      const skillsTrigger = jsOfftopElementOffsetTops[1] * 0.4;
      const portfolioTrigger = jsOfftopElementOffsetTops[2] * 0.9;

      if (html.scrollTop > skillsTrigger) skills.classList.add("active");
      else skills.classList.remove("active");

      if (html.scrollTop > portfolioTrigger) portfolio.classList.add("active");
      else portfolio.classList.remove("active");

      if (html.scrollTop > html.scrollHeight * 0.02)
        gotop.classList.add("active");
      else gotop.classList.remove("active");
    }),
    { passive: true }
  );

  //윈도우 사이즈 변경시 트리거 top 값 다시 저장
  window.addEventListener("resize", () => {
    saveOffsetLeft();
    saveOffsetTop();
    graphColorLine.style.width = vertexLisOffsetLefts[vertexLisIndex] + "px";
    for (let i = 0; i < vertexLis.length; i++) {
      vertexLis[i].addEventListener("mouseenter", () => {
        vertexLis.forEach((vertex) => vertex.classList.remove("active"));
        vertexLis[i].classList.add("active");
        graphColorLine.style.width = vertexLis[i].offsetLeft + "px";
      });
      vertexLis[i].addEventListener("mouseleave", () => {
        vertexLis[i].classList.remove("active");
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
    jsOfftopElementOffsetTops = [];
    for (let i = 0; i < headerLink.length; i++) {
      jsOfftopElementOffsetTops.push(
        jsOfftopElement[i].getBoundingClientRect().top +
          window.pageYOffset -
          header.offsetHeight
      );
    }
    jsOfftopElementOffsetTops[headerLink.length - 1] = html.scrollHeight;
  } //창 사이즈 변경시 top값 다시저장

  function saveOffsetLeft() {
    vertexLisOffsetLefts = [];
    for (let i = 0; i < vertexLis.length; i++) {
      vertexLisOffsetLefts.push(vertexLis[i].offsetLeft);
    }
  } //창 사이즈 변경시 vertex left값 다시저장
});
