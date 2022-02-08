window.onload = function () {
  const lis = document.querySelectorAll(".random");
  const dlis = document.querySelectorAll(".detail");
  const screen = document.querySelector(".dt_screen .dt_text");
  const scrollDefaultValue = document.querySelector("html").scrollTop;
  const bgRound = document.querySelector(
    ".contents .contents_items .tech_detail .dt_screen .dt_round .bg_round"
  );
  const textRound = document.querySelector(
    ".contents .contents_items .tech_detail .dt_screen .dt_round .text_round"
  );

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
      changeColor(lis[i]);
    });
    lis[i].addEventListener("mouseleave", function () {
      originalColor(lis[i]);
    });
  }

  window.addEventListener("scroll", function () {
    movedScroll();
  });

  for (let i = 0; i < dlis.length; i++) {
    dlis[i].addEventListener("click", function () {
      screenShow(dlis, dlis[i]);
    });
  }

  screenShow(dlis, dlis[0]);

  //기술란을 누르면 관련된 설명을 화면에 표시
  function screenShow(dlis, li) {
    for (let i = 0; i < dlis.length; i++) {
      dlis[i].classList.remove("screen");
    }
    //div 기술란 내용 가져오기
    const screenText = li.querySelector("div").innerText;

    // .score 의 점수가져오기
    const scoreText = li.querySelector(".score").textContent;

    // score 의 점수를 textRound 화면에 표시
    textRound.innerText = scoreText;

    if (!li.classList.contains("screen")) {
      li.classList.add("screen");
      screen.innerHTML = screenText;
    } else {
      li.classList.remove("screen");
    }
    bgRoundBar(parseInt(scoreText));
  }

  // 자식태그를 삭제하는 메서드
  function removeAllChild(parent) {
    while (parent.hasChildNodes()) {
      parent.removeChild(bgRound.firstChild);
    }
    return true;
  }

  //기술란의 score 점수에 따라 자식태그를 생성하는 메서드
  function bgRoundBar(score) {
    const chk = removeAllChild(bgRound);
    if (chk == true) {
      //divBar 의 추가할 개수 (score / 10) * 12
      let degs = (score / 10) * 12; //120 개가 100%
      let deg = 0; //각을 3도씩 기울임
      for (let i = 0; i < degs; i++) {
        setTimeout(() => {
          let divBar = document.createElement("div");
          setTimeout(function () {
            divBar.setAttribute("class", "bar");
            divBar.style.transition = "0.5s ease-in-out";
          }, 170);
          divBar.style.transform = "rotate(" + deg + "deg)";
          bgRound.appendChild(divBar);
          deg += 3;
        });
      }
    }
  }

  // 기술란의 글씨 컬러 랜덤 변경
  function changeColor(li) {
    const colorValue = makingcolor();
    li.style.color = colorValue;

    if (li.style.color === "white") {
      li.style.textShadow =
        "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000";
    }
  }

  function makingcolor() {
    const color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    return color;
  }

  function originalColor(li) {
    li.style.color = "white";
    li.style.textShadow = "none";
  }

  // 특정길이가 아래로 스크롤되면 TOP 버튼표시
  function movedScroll() {
    const currentScrollTop = document.querySelector("html").scrollTop;
    const scrolled = 130;
    const topBtn = document.querySelector(".top_btn");

    if (Math.abs(currentScrollTop - scrollDefaultValue) < scrolled) {
      topBtn.classList.remove("scrolled");
    }

    if (currentScrollTop > scrollDefaultValue && currentScrollTop > scrolled) {
      topBtn.classList.add("scrolled");
    }
  }
};
