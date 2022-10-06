window.addEventListener("load", function () {
  const mainImg = document.querySelector(".main_img");
  const slider = document.querySelector(".benefits .slider");

  const img = new Image();
  img.src = mainImg.dataset.path;

  const timer = infiniteSlider();

  setInterval(function () {
    infiniteSlider();
  }, 3000);

  function infiniteSlider() {
    const slides = document.querySelectorAll(".slider .slide");
    setTimeout(() => {
      slider.style.transition = "1s ease-in-out";
      slider.style.left = "-320px";
    }, 500);
    setTimeout(() => {
      const firstslide = slides[0].cloneNode(true);
      slides[0].remove();
      slider.appendChild(firstslide);
      slider.style.transition = "none";
      slider.style.left = "0px";
    }, 2500);
  }
});
