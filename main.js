window.onload = function () {
  const lis = document.querySelectorAll(".random");
  for (let i = 0; lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
      changeColor(lis[i]);
    });
    lis[i].addEventListener("mouseleave", function () {
      originalColor(lis[i]);
    });
  }

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
};
