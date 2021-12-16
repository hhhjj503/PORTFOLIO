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
  const subBtn = document.querySelector(".sub_btn");
  signupBtn.addEventListener("click", function () {
    location.href = "../../PORTFOLIO/pages/musicheart_join.html";
  });
  subBtn.addEventListener("click", function () {
    location.href = "../../PORTFOLIO/pages/musicheart_join.html";
  });
};
