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
    if (colorValue === "white") {
      li.style.border = "1px solid #000000";
    }
  }

  function makingcolor() {
    const color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    return color;
  }

  function originalColor(li) {
    li.style.color = "white";
    li.style.border = "none";
  }
};
