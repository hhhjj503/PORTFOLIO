window.onload = function () {
  const triangles = document.querySelectorAll(".card_wrapper .triangle");
  const as = document.querySelectorAll(".card_wrapper a");
  const orderContent = document.querySelectorAll(".order_content");
  const xBtn = document.querySelectorAll(".xBtn");

  for (let i = 0; i < as.length; i++) {
    as[i].addEventListener("click", function () {
      showContent(i, triangles, triangles[i], as, as[i], orderContent);
    });
  }

  //상담창 닫는 버튼

  xBtn[0].addEventListener("click", function () {
    for (let i = 0; i < orderContent.length; i++) {
      orderContent[i].classList.remove("show");
    }
    for (let i = 0; i < as.length; i++) {
      as[i].classList.remove("clicked");
      triangles[i].classList.remove("clicked");
    }
  });
  xBtn[1].addEventListener("click", function () {
    for (let i = 0; i < orderContent.length; i++) {
      orderContent[i].classList.remove("show");
    }
    for (let i = 0; i < as.length; i++) {
      as[i].classList.remove("clicked");
      triangles[i].classList.remove("clicked");
    }
  });

  //문의상자를 클릭하면 하단의 div 태그에 show 를 추가
  // 하단의 작은 삼각형에 clicked 추가를 위한 triangles 도 필요
  function showContent(num, triangles, triangle, as, a, orderContent) {
    const order = a.querySelector(".order").innerText;

    for (let i = 0; i < as.length; i++) {
      as[i].classList.remove("clicked");
    }
    for (let i = 0; i < triangles.length; i++) {
      triangles[i].classList.remove("clicked");
    }
    a.classList.add("clicked");
    if (
      order == "01" ||
      order == "02" ||
      order == "03" ||
      order == "04" ||
      order == "05"
    ) {
      triangles[num].classList.add("clicked");
      orderContent[1].classList.remove("show");
      orderContent[0].classList.add("show");
    } else if (
      order == "06" ||
      order == "07" ||
      order == "08" ||
      order == "09" ||
      order == "10"
    ) {
      triangles[num - 1].classList.add("clicked");
      orderContent[0].classList.remove("show");
      orderContent[1].classList.add("show");
    }
  }
};
