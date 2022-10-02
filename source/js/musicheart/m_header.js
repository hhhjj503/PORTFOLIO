window.addEventListener("load", function () {
  const mobileHMenu = document.querySelector(".mobile_h_menu");
  const mobileHMenuBtn = document.querySelector(".mobile_h_menu_btn");

  mobileHMenuBtn.addEventListener("click", function () {
    if (mobileHMenuBtn.classList.contains("clicked")) {
      mobileHMenuBtn.classList.remove("clicked");
      mobileHMenu.classList.remove("clicked");
    } else {
      mobileHMenuBtn.classList.add("clicked");
      mobileHMenu.classList.add("clicked");
    }
  });
});
