const brow = navigator.userAgent;
if (brow.match("Windows | Linux")) {
  window.location.href = "../index.html";
}

window.onload = function () {
  const signup = document.querySelector(".sign-up");
  const login = document.querySelector(".login");
  const subBtn = document.querySelector(".sub-btn");
  const mobileHMenu = document.querySelector(".mobile-h-menu");
  const mobileHMenuBtn = document.querySelector(".mobile-h-menu-btn");

  signup.addEventListener("click", function () {
    location.href = "../../../pages/musicheart/mobile/join.html";
  });
  subBtn.addEventListener("click", function () {
    location.href = "../../../pages/musicheart/mobile/join.html";
  });

  login.addEventListener("click", function () {
    location.href = "../../../pages/musicheart/mobile/login.html";
  });

  mobileHMenuBtn.addEventListener("click", function () {
    if (mobileHMenuBtn.classList.contains("clicked")) {
      mobileHMenuBtn.classList.remove("clicked");
      mobileHMenu.classList.remove("clicked");
    } else {
      mobileHMenuBtn.classList.add("clicked");
      mobileHMenu.classList.add("clicked");
    }
  });
};
