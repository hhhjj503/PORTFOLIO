window.onload = function () {
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
  const signupBtn = document.querySelector(".sign_up_btn");
  const loginBtn = document.querySelector(".login_btn");
  const subBtn = document.querySelector(".sub_btn");
  const mobileHMenu = document.querySelector(".mobile_h_menu");
  const mobileHMenuBtn = document.querySelector(".mobile_h_menu_btn");

  signupBtn.addEventListener("click", function () {
    location.href = "../../pages/musicheart/join.html";
  });
  subBtn.addEventListener("click", function () {
    location.href = "../../pages/musicheart/join.html";
  });

  loginBtn.addEventListener("click", function () {
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
