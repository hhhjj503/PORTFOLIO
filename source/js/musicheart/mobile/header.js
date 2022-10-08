window.addEventListener("load", function () {
  const mobileHMenu = document.querySelector(".mobile-h-menu");
  const mobileHMenuBtn = document.querySelector(".mobile-h-menu-btn");

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
