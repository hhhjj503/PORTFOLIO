window.onload = function () {
  const lis = document.querySelectorAll(".random");
  const dlis = document.querySelectorAll(".detail");
  const screen = document.querySelector(".dt_screen");
  const scrollDefaultValue = document.querySelector("html").scrollTop;

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
      changeColor(lis[i]);
    });
    lis[i].addEventListener("mouseleave", function () {
      originalColor(lis[i]);
    });
  }

  window.addEventListener("scroll", function () {
    movedScroll();
  });

  for (let i = 0; i < dlis.length; i++) {
    dlis[i].addEventListener("click", function () {
      screenShow(dlis, dlis[i]);
    });
  }

  screenShow(dlis, dlis[0]);

  function changeColor(li) {
    const colorValue = makingcolor();
    li.style.color = colorValue;

    if (li.style.color === "white") {
      li.style.textShadow =
        "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000";
    }
  }

  function makingcolor() {
    const color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    return color;
  }

  function originalColor(li) {
    li.style.color = "white";
    li.style.textShadow = "none";
  }

  function movedScroll() {
    const currentScrollTop = document.querySelector("html").scrollTop;
    const scrolled = 130;
    const topBtn = document.querySelector(".top_btn");

    if (Math.abs(currentScrollTop - scrollDefaultValue) < scrolled) {
      topBtn.classList.remove("scrolled");
    }

    if (currentScrollTop > scrollDefaultValue && currentScrollTop > scrolled) {
      topBtn.classList.add("scrolled");
    }
  }

  function screenShow(dlis, li) {
    for (let i = 0; i < dlis.length; i++) {
      dlis[i].classList.remove("screen");
    }
    const screenText = li.querySelector("div").innerText;
    if (!li.classList.contains("screen")) {
      li.classList.add("screen");
      screen.innerHTML = screenText;
    } else {
      li.classList.remove("screen");
    }
  }
};
