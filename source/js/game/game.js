window.onload = function () {
  const depth1 = document.querySelector("main .contents .menu .depth1");
  const lis = depth1.children;
  const imgScreen = document.querySelector(".image_screen");
  const items = document.querySelectorAll(".promotion .items .item");

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseenter", function () {
      addShow(lis);
    });

    lis[i].addEventListener("mouseleave", function () {
      removeShow(lis);
    });
  }

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      imgChange(items[i]);
    });
  }

  function addShow(lis) {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.add("show");
    }
    depth1.classList.add("show");
  }

  function removeShow(lis) {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("show");
    }
    depth1.classList.remove("show");
  }

  function imgChange(item) {
    const number = item.querySelector(".image_number");
    const imgPath = imgScreen.style.backgroundImage;
    const numberChk = imgPath.indexOf(number.innerText);
    if (0 < numberChk) return;

    imgScreen.classList.add("black");
    const startIndex = imgPath.indexOf("/source");
    const lastIndex = imgPath.lastIndexOf("/") + 1;
    const slicedPath = imgPath.slice(startIndex, lastIndex);
    const path = "../.." + slicedPath + number.innerText + ".png";
    imgScreen.style.backgroundImage = "url('" + path + "'";
    imgScreen.classList.remove("black");
  }
};
