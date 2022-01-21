window.onload = function () {
  const leftMenus = document.querySelectorAll(".left_menu ul li a");
  const subMenus = document.querySelectorAll(".sub_menu");
  const body = document.querySelector("body");

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

  const mobile_left_side = document.querySelector(".mobile_left_side");
  const menu_btn = document.querySelector(".menu_btn");
  const deco1 = document.querySelector(".menu_btn .deco1");
  const deco2 = document.querySelector(".menu_btn .deco2");
  const deco3 = document.querySelector(".menu_btn .deco3");

  menu_btn.addEventListener("click", function () {
    if (!mobile_left_side.classList.contains("mobile_clicked")) {
      mobile_left_side.classList.add("mobile_clicked");
      deco1.classList.add("btn_clicked");
      deco2.classList.add("btn_clicked");
      deco3.classList.add("btn_clicked");
      body.classList.add("modal");
    } else {
      mobile_left_side.classList.remove("mobile_clicked");
      deco1.classList.remove("btn_clicked");
      deco2.classList.remove("btn_clicked");
      deco3.classList.remove("btn_clicked");
      body.classList.remove("modal");
    }
  });
};
