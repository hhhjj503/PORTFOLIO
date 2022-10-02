window.onload = function () {
  const brow = navigator.userAgent;
  if (
    brow.match(
      "ios | Android | Symbian | Apple | Samsung | LG | Biackberry | iPhone | Gallaxy"
    )
  ) {
    window.location.href = "../../../pages/musicheart/mobile/index.html";
  }

  const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const signup = document.querySelector(".sign_up");
  const login = document.querySelector(".login");
  const subBtn = document.querySelector(".sub_btn");
  const mobileHMenu = document.querySelector(".mobile_h_menu");
  const mobileHMenuBtn = document.querySelector(".mobile_h_menu_btn");

  signup.addEventListener("click", function () {
    location.href = "../../pages/musicheart/join.html";
  });
  subBtn.addEventListener("click", function () {
    location.href = "../../pages/musicheart/join.html";
  });

  login.addEventListener("click", function () {
    location.href = "../../pages/musicheart/login.html";
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
