window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  let slides = document.querySelectorAll(".slide");
  const pageLabels = document.querySelector(".pagelabels");
  let left = 0;

  for (let i = 0; i < slides.length; i++) {
    //slides left 초기설정

    //input 태그 동적생성
    let input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "slide_btn");
    input.setAttribute("class", "slide_control");
    input.setAttribute("type", "radio");
    input.setAttribute("id", `slide_control${i}`);
    input.setAttribute("data-left", `${left}`);
    if (i == 0) {
      input.checked = true;
    }
    slider.insertBefore(input, pageLabels);

    //label 태그 동적생성
    const label = document.createElement("label");
    label.htmlFor = `slide_control${i}`;
    label.addEventListener("mouseenter", function () {
      label.classList.add("hovered");
    });
    label.addEventListener("mouseleave", function () {
      label.classList.remove("hovered");
    });
    pageLabels.appendChild(label);
    //slide 마다 left 값 추가
    slides[i].style.left = `${left}%`;
    left += 100;
  }

  //생성된 labels 과 inputs 사용
  let labels = document.querySelectorAll("label");
  let inputs = document.querySelectorAll("input");
  //첫인덱스에 checked 클래스 추가 (얇은 동그라미 표시)
  inputs[0].classList.add("checked");
  labels[0].classList.add("checked");

  let currentWheelIndex = 0;
  const maxWheelIndex = labels.length - 1;

  //label 에 클릭이벤트 추가 , wheelIndex 변경
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function () {
      changeImage(inputs[i], labels[i]);
      const leftValue = inputs[i].dataset.left;
      moveLeft(leftValue);
      currentWheelIndex = i;
    });
  }

  //마우스 휠 스크롤 슬라이드 만들기
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      ++currentWheelIndex;
      if (currentWheelIndex > maxWheelIndex) currentWheelIndex = 0;
      const leftValue = inputs[currentWheelIndex].dataset.left;
      changeImage(inputs[currentWheelIndex], labels[currentWheelIndex]);
      moveLeft(leftValue);
    }
    if (e.deltaY < 0) {
      --currentWheelIndex;
      if (currentWheelIndex < 0) currentWheelIndex = 4;
      const leftValue = inputs[currentWheelIndex].dataset.left;
      changeImage(inputs[currentWheelIndex], labels[currentWheelIndex]);
      moveLeft(leftValue);
    }
  });

  function changeImage(input, label) {
    for (let i = 0; i < labels.length; i++) {
      inputs[i].classList.remove("checked");
      labels[i].classList.remove("checked");
    }
    input.classList.add("checked");
    label.classList.add("checked");
  }

  function moveLeft(leftValue) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(-${leftValue}%)`;
    }
  }
});
