window.onload = function () {
  const imgItems = document.querySelectorAll(".img_item");
  const biggerImg = document.querySelector(".bigger_img");

  imgItems[0].classList.add("clicked");
  slicedPath(imgItems[0]);

  for (let i = 0; i < imgItems.length; i++) {
    imgItems[i].addEventListener("click", function () {
      clicked(imgItems, imgItems[i]);
    });
  }

  function clicked(imgItems, imgItem) {
    for (let i = 0; i < imgItems.length; i++) {
      imgItems[i].classList.remove("clicked");
    }
    slicedPath(slicedPath(imgItem));
  }

  function slicedPath(imgItem) {
    imgItem.classList.add("clicked");
    const imgPath = imgItem.style.backgroundImage;
    const startIndex = imgPath.indexOf("/source");
    const lastIndex = imgPath.lastIndexOf(")") - 1;
    const slicedPath = imgPath.slice(startIndex, lastIndex);
    const path = "../.." + slicedPath;
    biggerImg.style.backgroundImage = "url('" + path + "'";
  }
};
