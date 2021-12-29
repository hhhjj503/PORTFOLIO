window.onload = function () {
  //a태그
  const leftMenus = document.querySelectorAll(".left_menu ul li a");
  //하위메뉴
  const subMenus = document.querySelectorAll(".sub_menu");

  for (let i = 0; i < leftMenus.length; i++) {
    leftMenus[i].addEventListener("click", function () {
      colorChanged(leftMenus, leftMenus[i]);
      clicked(subMenus, subMenus[i]);
    });
  }

  function colorChanged(leftMenus, leftMenu) {
    if (!leftMenu.classList.contains("color_changed")) {
      for (let i = 0; i < subMenus.length; i++) {
        leftMenus[i].classList.remove("color_changed");
      }
      leftMenu.classList.add("color_changed");
    } else {
      leftMenu.classList.remove("color_changed");
    }
  }

  function clicked(subMenus, sub) {
    if (!sub.classList.contains("clicked")) {
      for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].classList.remove("clicked");
      }
      sub.classList.add("clicked");
    } else {
      sub.classList.remove("clicked");
    }
  }
};
