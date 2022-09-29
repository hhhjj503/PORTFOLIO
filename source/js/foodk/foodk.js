window.onload = function () {
  const screen = document.querySelector(".screen");
  const pathWrappers = document.querySelectorAll(
    "main .img_index .index_paths .path_wrapper"
  );
  const indexs = document.querySelectorAll(".path_wrapper .index");
  const paths = document.querySelectorAll(".path_wrapper .path");
  const bestMenus = document.querySelector(
    "main .best_menu_wrapper .best_menus"
  );
  const side = document.querySelector(".side ul");
  const tdeco = document.querySelector("aside .tdeco");
  const bdeco = document.querySelector("aside .bdeco");
  let currentIndex = 0;
  let nextIndex = currentIndex + 1;
  let clickedIndex = 0;
  const wrapperCnt = 5;

  for (const path of paths) {
    const img = new Image();
    img.src = path.dataset.path;
  }

  for (let i = 0; i < pathWrappers.length; i++) {
    pathWrappers[i].addEventListener("click", function () {
      changeImg(pathWrappers, pathWrappers[i], indexs[i], paths[i]);
    });
  }

  pathWrappers[0].classList.add("clicked");

  //스크롤Y축이 작을경우의 이벤트를 위한 기본스크롤 위치 이동
  setTimeout(() => {
    setTimeout(() => {
      scrollTo(0, 2);
    }, 100);
  }, 50);

  // scroll 된 위치를 계산하여 메뉴를 화면에 띄우고 한번실행되면 이벤트제거 true,false
  let scrolled = false;
  //스크롤의 총 길이가 1000보다 작으면 바로 클래스 추가 (스크롤이 나타나지 않음)
  // 1000 이상이면(스크롤이 나타나면) 이벤트를 추가
  const minScrollHeight = document.querySelector("html").scrollHeight;
  if (minScrollHeight <= 1000) {
    bestMenus.classList.add("scrolled");
  } else {
    window.addEventListener("scroll", function () {
      if (scrolled == true) {
        window.removeEventListener("scroll", function () {});
      } else {
        scrolledEvent();
      }
    });
  }

  //aside 의 위아래 로고원에 애니메이션추가
  side.addEventListener("mouseover", function () {
    tdeco.classList.add("round");
    bdeco.classList.add("round");
  });
  side.addEventListener("mouseleave", function () {
    tdeco.classList.remove("round");
    bdeco.classList.remove("round");
  });

  //스크롤을 감지해 메뉴를 화면에 띄우는 이벤트
  function scrolledEvent() {
    const scrollHeight = document.querySelector("html").scrollHeight;
    const scrolledValue = scrollHeight * 0.22;

    const currentScroll = document.querySelector("html").scrollTop;
    if (currentScroll > scrolledValue) {
      bestMenus.classList.add("scrolled");
      scrolled = true;
    }
  }

  //배너이미지 무한 변경
  setInterval(() => {
    nextIndex = currentIndex + 1;
    if (nextIndex >= wrapperCnt) {
      nextIndex = 0;
      changeImg(
        pathWrappers,
        pathWrappers[nextIndex],
        indexs[nextIndex],
        paths[nextIndex]
      );
      return;
    }
    changeImg(
      pathWrappers,
      pathWrappers[nextIndex],
      indexs[nextIndex],
      paths[nextIndex]
    );
  }, 3000);

  // 메인배너 이미지 변경
  function changeImg(pathWrappers, pathWrapper, index, path) {
    //누른인덱스, 누른인덱스값을 저장할 현재인덱스, 현재인덱스에 1을 추가한 다음인덱스
    clickedIndex = parseInt(index.innerHTML);
    currentIndex = clickedIndex;
    for (let i = 0; i < pathWrappers.length; i++) {
      pathWrappers[i].classList.remove("clicked");
    }
    nextIndex = currentIndex;
    screen.style.backgroundImage = "url('" + path.innerHTML + "')";
    pathWrapper.classList.add("clicked");
  }
};
