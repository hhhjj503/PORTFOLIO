window.onload = function () {
  const screen = document.querySelector(".screen");
  const pathWrappers = document.querySelectorAll(
    "main .img_index .index_paths .path_wrapper"
  );
  const indexs = document.querySelectorAll(".path_wrapper .index");
  const paths = document.querySelectorAll(".path_wrapper .path");
  let currentIndex = 0;
  let nextIndex = currentIndex + 1;
  let clickedIndex = 0;
  const wrapperCnt = 5;

  for (let i = 0; i < pathWrappers.length; i++) {
    pathWrappers[i].addEventListener("click", function () {
      changeImg(pathWrappers, pathWrappers[i], indexs[i], paths[i]);
    });
  }

  pathWrappers[0].classList.add("clicked");

  setInterval(() => {
    nextIndex = currentIndex + 1;
    console.log(currentIndex, clickedIndex, nextIndex);
    if (nextIndex >= wrapperCnt) {
      nextIndex = 0;
      changeImg(
        pathWrappers,
        pathWrappers[nextIndex],
        indexs[nextIndex],
        paths[nextIndex]
      );
      return;
    }
    changeImg(
      pathWrappers,
      pathWrappers[nextIndex],
      indexs[nextIndex],
      paths[nextIndex]
    );
  }, 3000);

  // 메인배너 이미지 변경
  function changeImg(pathWrappers, pathWrapper, index, path) {
    clickedIndex = parseInt(index.innerHTML);
    currentIndex = clickedIndex;
    for (let i = 0; i < pathWrappers.length; i++) {
      pathWrappers[i].classList.remove("clicked");
    }
    nextIndex = currentIndex;
    screen.style.backgroundImage = "url('" + path.innerHTML + "')";
    pathWrapper.classList.add("clicked");
  }
};
