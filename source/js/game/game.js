window.onload = function () {
  const depth1 = document.querySelector("main .contents .menu .depth1");
  const lis = depth1.children;
  const imgScreen = document.querySelector(".image-screen");
  const items = document.querySelectorAll(".promotion .items .item");
  const games = document.querySelectorAll("main .game-login .games > .game");
  const radios = document.querySelectorAll("main .filter .filter-box input");
  const radiolabels = document.querySelectorAll(
    "main .filter .filter-box label"
  );
  const mGameLis = document.querySelectorAll(
    "main .all-games .all-games-wrapper ul > li"
  );

  //필터 label 중 all 은 기본선택
  radiolabels[0].classList.add("clicked");

  //헤더 메뉴
  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseenter", function () {
      addShow(lis);
    });

    lis[i].addEventListener("mouseleave", function () {
      removeShow(lis);
    });
  }

  //배너 이미지 변경
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      imgChange(items[i]);
    });
  }

  // 배너아래 미니이미지 확대축소
  for (let i = 0; i < games.length; i++) {
    games[i].addEventListener("mouseenter", function () {
      biggerAdd(games[i]);
    });
    games[i].addEventListener("mouseleave", function () {
      biggerRemove(games[i]);
    });
  }

  // filter 라디오버튼 checked 관리
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
      radioChknFilter(radios, radios[i], mGameLis, radiolabels, radiolabels[i]);
    });
  }

  //헤더메뉴
  function addShow(lis) {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.add("show");
    }
    depth1.classList.add("show");
  }

  function removeShow(lis) {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("show");
    }
    depth1.classList.remove("show");
  }

  //배너 이미지 변경
  let imgChanging = false;
  function imgChange(item) {
    if (imgChanging == true) return;
    const block = document.querySelector("main .banner .screen .block");
    const number = item.querySelector(".image-number");
    const imgPath = imgScreen.style.backgroundImage;
    const numberChk = imgPath.indexOf(number.innerText);
    if (0 < numberChk) return;
    imgChanging = true;
    block.classList.add("locked");
    setTimeout(() => {
      const startIndex = imgPath.indexOf("/source");
      const lastIndex = imgPath.lastIndexOf("/") + 1;
      const slicedPath = imgPath.slice(startIndex, lastIndex);
      const path = "../.." + slicedPath + number.innerText + ".png";
      imgScreen.style.backgroundImage = "url('" + path + "'";
    }, 1000);
    setTimeout(() => {
      block.classList.remove("locked");
    }, 1500);
    setTimeout(() => {
      imgChanging = false;
    }, 2000);
  }

  // 배너아래 미니이미지 확대축소
  function biggerAdd(game) {
    const image = game.querySelector(".g-img");
    image.classList.add("bigger");
  }

  function biggerRemove(game) {
    const image = game.querySelector(".g-img");
    image.classList.remove("bigger");
  }

  //라디오버튼 누르면 하단 게임목록 필터링, 라벨태그 클래스 추가 제거관리
  function radioChknFilter(radios, radio, mGameLis, radiolabels, radiolabel) {
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    radio.checked = true;

    for (let i = 0; i < radiolabels.length; i++) {
      radiolabels[i].classList.remove("clicked");
    }
    radiolabel.classList.add("clicked");

    for (let i = 0; i < mGameLis.length; i++) {
      if (!mGameLis[i].classList.contains("m-show")) {
        mGameLis[i].classList.add("m-show");
      }
    }

    if (radio.value == "all") {
      return;
    } else {
      for (let i = 0; i < mGameLis.length; i++) {
        if (!mGameLis[i].classList.contains(radio.value)) {
          mGameLis[i].classList.remove("m-show");
        }
      }
    }
  }

  //라디오버튼 클릭하면 주황색
};
