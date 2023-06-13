window.addEventListener("load", function () {
  const tbn = document.querySelector(".tbn");
  const shortcutsAccess = document.querySelector(".shortcuts-accessbility");
  const header = document.querySelector("header");
  const mainNav = document.querySelector(".main-nav");
  const level1s = document.querySelectorAll(".level1.deeper");
  const level2s = document.querySelectorAll(".level2");
  const level2As = document.querySelectorAll(".level2 .right-side a");
  const shortcuts = document.querySelector(".shortcuts");
  const shortcutsBtn = document.querySelector(".shortcuts-btn");
  const shortcutsCloseBtn = document.querySelector(".shortcuts-close-btn");

  header.style.top = tbn.offsetHeight + "px";

  //mainNav
  mainNav.addEventListener("mouseenter", function () {});

  //shortcutsAccess
  shortcutsAccess.addEventListener("click", function () {
    addClass(shortcuts, "active");
  });
  shortcutsAccess.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addClass(shortcuts, "active");
  });

  //shortcutsBtn
  shortcutsBtn.addEventListener("click", function () {
    addClass(shortcuts, "active");
  });
  shortcutsBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") addClass(shortcuts, "active");
  });

  //shortcutsCloseBtn
  shortcutsCloseBtn.addEventListener("click", function () {
    removeClass(shortcuts, "active");
  });
  shortcutsCloseBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") removeClass(shortcuts, "active");
  });

  //level1s
  for (let i = 0; i < level1s.length; i++) {
    level1s[i].addEventListener("mouseenter", function () {
      addClass(level1s[i], "hovered");
      level2s.forEach((level2) => (level2.style.display = "none"));
      changeDisplayStyle(level2s[i], "block");
    });
    level1s[i].addEventListener("mouseleave", function () {
      removeClass(level1s[i], "hovered");
    });
  }

  function addClass(element, classString) {
    element.classList.add(classString);
  }

  function removeClass(element, classString) {
    element.classList.remove(classString);
  }

  function changeDisplayStyle(element, value) {
    element.style.display = value;
  }
});
