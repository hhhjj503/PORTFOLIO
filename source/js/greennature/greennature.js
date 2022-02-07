window.onload = function () {
  //헤더 메뉴 li , a 태그
  const lis = document.querySelectorAll("header .h_wrapper .h_menu1 > li");
  const as = document.querySelectorAll("header .h_wrapper .h_menu1 > li > a");
  //depth1 클래스가 있는 li 태그만 다시 쿼리
  const depth1Lis = document.querySelectorAll(
    "header .h_wrapper .h_menu1 > li.depth1"
  );
  //서브메뉴가 있는 depth2 클래스가 있는 li 태그만 다시 쿼리
  const depth2Lis = document.querySelectorAll(
    "header .h_wrapper .h_menu1 > li.depth2"
  );

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

  //하단이미지 이동버튼
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  //all 메뉴버튼 class add show_all_menu
  const topUl = document.querySelector(".tbn ul");
  const hWrapper = document.querySelector("header .h_wrapper");
  const allMenu = document.querySelector("header .h_wrapper .all_menu");
  const allMenuBtn = document.querySelector(".all_menu_btn svg");
  const hMenu1 = document.querySelector("header .h_wrapper .h_menu1");
  const hMenu1Lis = document.querySelectorAll(
    "header .h_wrapper .h_menu1 > li"
  );
  const hMenu1As = document.querySelectorAll(
    "header .h_wrapper .h_menu1 > li > a"
  );
  const hMenu1Title = document.querySelector("header .h_wrapper .title a");
  const hMenu2 = document.querySelector("header .h_wrapper .h_menu2");

  //all 메뉴버튼 class aad hide
  const homeBtn = document.querySelector(
    "header .h_wrapper .h_menu2 li.home_btn"
  );
  const allMenuBtnLi = document.querySelector(
    "header .h_wrapper .h_menu2 li.all_menu_btn"
  );
  const allMenuBtnX = document.querySelector(
    "header .h_wrapper .h_menu2 li.all_menu_x"
  );

  //상단에서 두번째 메뉴를 벗어나면 hovred class 제거
  hMenu1.addEventListener("mouseleave", function () {
    depth2RemoveHovered(depth2Lis);
  });

  //전체메뉴를 화면에 잘 보이기 위해 css 변경
  allMenuBtn.addEventListener("click", function () {
    topUl.classList.add("show_all_menu");
    hWrapper.classList.add("show_all_menu");
    hMenu1.classList.add("show_all_menu");
    for (let i = 0; i < hMenu1Lis.length; i++) {
      hMenu1Lis[i].classList.add("show_all_menu");
    }
    for (let i = 0; i < hMenu1As.length; i++) {
      hMenu1As[i].classList.add("show_all_menu");
    }
    hMenu1Title.classList.add("show_all_menu");
    hMenu2.classList.add("show_all_menu");
    homeBtn.classList.add("hide");
    allMenuBtn.classList.add("hide");
    allMenuBtnLi.classList.add("hide");
    allMenuBtnX.classList.add("show_all_menu");
    allMenu.classList.add("show_all_menu");
  });

  //전체메뉴를 화면에 잘 보이기 위해 css 변경한걸 제거
  allMenuBtnX.addEventListener("click", function () {
    allMenu.classList.remove("show_all_menu");
    topUl.classList.remove("show_all_menu");
    hWrapper.classList.remove("show_all_menu");
    hMenu1.classList.remove("show_all_menu");
    hMenu1Title.classList.remove("show_all_menu");
    for (let i = 0; i < hMenu1Lis.length; i++) {
      hMenu1Lis[i].classList.remove("show_all_menu");
    }
    for (let i = 0; i < hMenu1As.length; i++) {
      hMenu1As[i].classList.remove("show_all_menu");
    }
    hMenu2.classList.remove("show_all_menu");
    homeBtn.classList.remove("hide");
    allMenuBtn.classList.remove("hide");
    allMenuBtnLi.classList.remove("hide");
    allMenuBtnX.classList.remove("show_all_menu");
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

  //하단 슬라이더
  slideWidth = 2100; //350(320 + 30(마진)) * 6
  next.addEventListener("click", function () {
    let slider = document.querySelector(".slider");
    let sliderImg = document.querySelectorAll(".slider .a_item");
    let cloneSlide_first = sliderImg[0].cloneNode(true); //next가 넘어가면 배열의 첫번째 노드를 복사

    slider.style.width = +(slideWidth + 350) + "px"; //길이 연장 +350 7개 노드길이로 변경
    slider.append(cloneSlide_first); //복사한 첫번째 노드를 배열의 맨뒤에 갖다붙임
    slider.style.left = -350 + "px"; //다음 노드로 이동

    slider.removeChild(slider.firstElementChild);
    slider.style.width = -(slideWidth - 350) + "px"; //연장된 길이를 다시 6개 길이로 복구
  });

  prev.addEventListener("click", function () {
    let slider = document.querySelector(".slider");
    let sliderImg = document.querySelectorAll(".slider .a_item");
    let cloneSlide_last = sliderImg[5].cloneNode(true); //next가 넘어가면 배열의 첫번째 노드를 복사

    slider.style.transition = `${0.5}s ease-out`;
    slider.style.width = +(slideWidth + 350) + "px"; //길이 연장 +350 7개 노드길이로 변경
    slider.insertBefore(cloneSlide_last, slider.firstElementChild); //복사한 첫번째 노드를 배열의 맨뒤에 갖다붙임

    slider.style.right = -350 + "px"; //다음 노드로 이동
    slider.removeChild(slider.lastElementChild);

    slider.style.width = -(slideWidth - 350) + "px"; //연장된 길이를 다시 6개 길이로 복구
  });
};
