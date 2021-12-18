window.onload = function () {
  const imgItems = document.querySelectorAll(".img_item");
  const biggerImg = document.querySelector(".bigger_img");
  const imgTitles = document.querySelectorAll(".img_title");

  imgItems[0].classList.add("clicked");
  slicedPath(imgItems[0]);
  imgTitles[0].classList.add("title_clicked");

  for (let i = 0; i < imgItems.length; i++) {
    imgItems[i].addEventListener("click", function () {
      imgClicked(imgItems, imgItems[i]);
      titleClicked(imgTitles, imgTitles[i]);
    });
  }

  function imgClicked(imgItems, imgItem) {
    for (let i = 0; i < imgItems.length; i++) {
      imgItems[i].classList.remove("clicked");
    }
    slicedPath(imgItem);
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

  function titleClicked(imgTitles, imgTitle) {
    for (let i = 0; i < imgTitles.length; i++) {
      imgTitles[i].classList.remove("title_clicked");
    }
    imgTitle.classList.add("title_clicked");
  }
};
