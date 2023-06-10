window.onload = function () {
  //헤더 메뉴 li , a 태그
  const lis = document.querySelectorAll("header .h-wrapper .h-menu1 > li");
  const as = document.querySelectorAll("header .h-wrapper .h-menu1 > li > a");
  const header = document.querySelector("header");
  //depth1 클래스가 있는 li 태그만 다시 쿼리
  const depth1Lis = document.querySelectorAll(
    "header .h-wrapper .h-menu1 > li.depth1"
  );
  //서브메뉴가 있는 depth2 클래스가 있는 li 태그만 다시 쿼리
  const depth2Lis = document.querySelectorAll(
    "header .h-wrapper .h-menu1 > li.depth2"
  );
  const depth2As = document.querySelectorAll(
    "header .h-wrapper .h-menu1 > li.depth2 a"
  );

  //헤더를 화면에 늦게 띄우기 위한 기능
  setTimeout(() => {
    header.classList.add("opened");
  }, 10);

  //서브메뉴가 없는 depth1 에 hover 되면 depth2 의 hovered class 제거
  for (let i = 0; i < depth1Lis.length; i++) {
    depth1Lis[i].addEventListener("mouseenter", function () {
      depth2RemoveHovered(depth2Lis);
    });
  }

  //기본높이
  let originalHeight = 239;

  //depth2 li 중에 처음 hover 된 li 만 hovered class 추가
  for (let i = 0; i < depth2Lis.length; i++) {
    depth2Lis[i].addEventListener("mouseenter", function () {
      const chk = depth2ChkHovered(depth2Lis);
      if (chk == true) {
        depth2AddHovered(depth2Lis[i]);
      }
    });
    depth2Lis[i].addEventListener("mouseeleave", function () {
      depth2ChkHovered(depth2Lis);
    });
  }

  //depth2 li 들 중 hovered class 가 추가된게 있으면 false 반환
  function depth2ChkHovered(depth2Lis) {
    let chk = true;
    for (let i = 0; i < depth2Lis.length; i++) {
      if (depth2Lis[i].classList.contains("hovered")) {
        chk = false;
      }
    }
    return chk;
  }

  //depth2ChkHovered 반환값이 true 이면(hover 된 li 가 없으면) hovered class 추가
  function depth2AddHovered(depth2li) {
    depth2li.classList.add("hovered");
  }

  function depth2RemoveHovered(depth2Lis) {
    for (let i = 0; i < depth2Lis.length; i++) {
      if (depth2Lis[i].classList.contains("hovered")) {
        depth2Lis[i].classList.remove("hovered");
        break;
      }
    }
  }

  //all 메뉴버튼 class add show-all-menu
  const topUl = document.querySelector(".tbn ul");
  const hWrapper = document.querySelector("header .h-wrapper");
  const allMenu = document.querySelector("header .h-wrapper .all-menu");
  const allMenuBtn = document.querySelector(".all-menu-btn");
  const hMenu1 = document.querySelector("header .h-wrapper .h-menu1");
  const hMenu1Lis = document.querySelectorAll(
    "header .h-wrapper .h-menu1 > li"
  );
  const hMenu1As = document.querySelectorAll(
    "header .h-wrapper .h-menu1 > li > a"
  );
  const hMenu1Title = document.querySelector("header .h-wrapper .title a");
  const hMenu2 = document.querySelector("header .h-wrapper .h-menu2");

  //all 메뉴버튼 class aad hide
  const homeBtn = document.querySelector(
    "header .h-wrapper .h-menu2 li.home-btn"
  );
  const allMenuBtnLi = document.querySelector(
    "header .h-wrapper .h-menu2 li.all-menu-btn"
  );
  const allMenuBtnX = document.querySelector(
    "header .h-wrapper .h-menu2 li.all-menu-x"
  );

  //상단에서 두번째 메뉴를 벗어나면 hovred class 제거
  hMenu1.addEventListener("mouseleave", function () {
    depth2RemoveHovered(depth2Lis);
  });

  //전체메뉴를 화면에 잘 보이기 위해 css 변경
  allMenuBtn.addEventListener("click", function () {
    showAllMenu();
  });
  allMenuBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") showAllMenu();
  });

  //전체메뉴를 화면에 잘 보이기 위해 css 변경한걸 제거
  allMenuBtnX.addEventListener("click", function () {
    hideAllMenu();
  });
  allMenuBtnX.addEventListener("keydown", function (e) {
    if (e.key === "Enter") hideAllMenu();
  });

  //a 태그밑의 밑줄을 위한 class 추가 제거
  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseenter", function () {
      as[i].classList.add("show");
    });
    lis[i].addEventListener("mouseleave", function () {
      as[i].classList.remove("show");
    });
  }

  function showAllMenu() {
    topUl.classList.add("show-all-menu");
    hWrapper.classList.add("show-all-menu");
    hMenu1.classList.add("show-all-menu");
    for (let i = 0; i < hMenu1Lis.length; i++) {
      hMenu1Lis[i].classList.add("show-all-menu");
    }
    for (let i = 0; i < hMenu1As.length; i++) {
      hMenu1As[i].classList.add("show-all-menu");
    }
    hMenu1Title.classList.add("show-all-menu");
    hMenu2.classList.add("show-all-menu");
    homeBtn.classList.add("hide");
    allMenuBtn.classList.add("hide");
    allMenuBtnLi.classList.add("hide");
    allMenuBtnX.classList.add("show-all-menu");
    allMenu.classList.add("show-all-menu");
  }

  function hideAllMenu() {
    allMenu.classList.remove("show-all-menu");
    topUl.classList.remove("show-all-menu");
    hWrapper.classList.remove("show-all-menu");
    hMenu1.classList.remove("show-all-menu");
    hMenu1Title.classList.remove("show-all-menu");
    for (let i = 0; i < hMenu1Lis.length; i++) {
      hMenu1Lis[i].classList.remove("show-all-menu");
    }
    for (let i = 0; i < hMenu1As.length; i++) {
      hMenu1As[i].classList.remove("show-all-menu");
    }
    hMenu2.classList.remove("show-all-menu");
    homeBtn.classList.remove("hide");
    allMenuBtn.classList.remove("hide");
    allMenuBtnLi.classList.remove("hide");
    allMenuBtnX.classList.remove("show-all-menu");
  }
};
