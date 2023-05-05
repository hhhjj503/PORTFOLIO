window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const header = document.querySelector("header");
  const headerAs = document.querySelectorAll("header a"); //헤더클릭시 스크롤이동
  const graph = document.querySelector(".graph"); //그래프클래스제어
  const items = document.querySelectorAll(".item"); //스크롤이동할 타이틀컴포넌트
  const skills = document.querySelector(".skills");
  const portfolio = document.querySelector(".portfolio");
  const goup = document.querySelector(".goup");

  let itemsOffsetTops = [];
  //헤더길이도 뺴기
  for (let i = 0; i < headerAs.length; i++) {
    itemsOffsetTops.push(
      items[i].getBoundingClientRect().top +
        window.pageYOffset -
        header.offsetHeight
    );
  }
  itemsOffsetTops[headerAs.length - 1] = html.scrollHeight;

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
  }
});
