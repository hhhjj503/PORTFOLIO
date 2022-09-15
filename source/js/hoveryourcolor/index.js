window.addEventListener("load", function () {
  const links = document.querySelectorAll(".container p > a");
  let bg = document.querySelector(".bg");
  const title = document.querySelector("h2");
  const divLeft = this.document.querySelector("div.left");
  const divRight = this.document.querySelector("div.right");

  //팝업 관련 변수
  const popUp = document.querySelector(".popup");
  const noToday = document.querySelector(".no_today");
  const okBtn = document.querySelector(".okbtn");

  for (const link of links) {
    const img = new Image();
    img.src = link.dataset.path;
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function (e) {
      changeBG(e, links);
    });
    links[i].addEventListener("mouseleave", function (e) {
      leaveBG(links);
    });
  }

  //쿠키생성
  createCookie();
  //오늘하루 보지않기
  noToday.addEventListener("click", function () {
    expiredCookieDate();
    popUp.classList.remove("notvisited");
  });
  //확인버튼 누르면 팝업창 종료
  okBtn.addEventListener("click", function () {
    popUp.classList.remove("notvisited");
  });

  //방문 여부를 확인해 쿠키가 없으면 쿠키생성
  function createCookie() {
    const currentCookie = document.cookie;
    let cookieCheck = currentCookie.indexOf("visited");
    if (cookieCheck == -1) {
      const setCookie = "HoverYourColor = visited;";
      document.cookie = setCookie;
      popUp.classList.add("notvisited");
    } else {
      cookieCheck = currentCookie.indexOf("expired");
      if (cookieCheck > -1) {
        popUp.classList.remove("notvisited");
      } else {
        popUp.classList.add("notvisited");
      }
    }
  }

  //오늘하루 보지않기 누를시 만료쿠키로 다시 생성
  function expiredCookieDate() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let setCookie = "";
    setCookie += "HoverYourColor = visited_expired;";
    setCookie += `expires = ${date.toUTCString()}`;
    document.cookie = setCookie;
  }

  //배경이미지 변경 mouseenter
  function changeBG(e, links) {
    const path = e.target.getAttribute("data-path");
    divLeft.classList.add("open");
    divRight.classList.add("open");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("hidden");
    }
    title.style.opacity = 0;
    e.target.classList.remove("hidden");
    bg.style.backgroundImage = `url(${path})`;
    bg.style.opacity = 1;
  }

  //배경이미지 변경 mouseleave
  function leaveBG(links) {
    bg.style.opacity = 0;
    divLeft.classList.remove("open");
    divRight.classList.remove("open");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("hidden");
    }
    title.style.opacity = 1;
  }
});
