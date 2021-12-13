window.onload = function () {
  const lis = document.querySelectorAll(".random");
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
};
