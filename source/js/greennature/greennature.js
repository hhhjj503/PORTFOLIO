window.onload = function () {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  slideWidth = 2100; //350(320 + 30(마진)) * 6
  next.addEventListener("click", function () {
    let slider = document.querySelector(".slider");
    let sliderImg = document.querySelectorAll(".slider .a_item");

    let cloneSlide_first = sliderImg[0].cloneNode(true); //next가 넘어가면 배열의 첫번째 노드를 복사

    slider.style.width = +(slideWidth + 350) + "px"; //길이 연장 +350 7개 노드길이로 변경
    slider.append(cloneSlide_first); //복사한 첫번째 노드를 배열의 맨뒤에 갖다붙임
    slider.style.left = -350 + "px"; //다음 노드로 이동
    slider.removeChild(slider.firstElementChild);
    slider.style.width = -(slideWidth - 350) + "px"; //연장된 길이를 다시 6개 길이로 복구
  });

  prev.addEventListener("click", function () {
    let slider = document.querySelector(".slider");
    let sliderImg = document.querySelectorAll(".slider .a_item");
    console.log(sliderImg);
    let cloneSlide_last = sliderImg[5].cloneNode(true); //next가 넘어가면 배열의 첫번째 노드를 복사

    slider.style.width = +(slideWidth + 350) + "px"; //길이 연장 +350 7개 노드길이로 변경
    slider.insertBefore(cloneSlide_last, slider.firstElementChild); //복사한 첫번째 노드를 배열의 맨뒤에 갖다붙임

    slider.style.left = -350 + "px"; //다음 노드로 이동
    slider.style.transition = `${0.5}s ease-in-out`;

    slider.style.width = -(slideWidth - 350) + "px"; //연장된 길이를 다시 6개 길이로 복구
  });
};
