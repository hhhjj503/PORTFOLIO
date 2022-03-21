window.onload = function () {
  const screen = document.querySelector(".screen");
  const pathWrappers = document.querySelectorAll(
    "main .img_index .index_paths .path_wrapper"
  );
  const indexs = document.querySelectorAll(".path_wrapper .index");
  const paths = document.querySelectorAll(".path_wrapper .path");
  let currentIndex = 0;
  const wrapperCnt = 5;

  for (let i = 0; i < pathWrappers.length; i++) {
    pathWrappers[i].addEventListener("click", function () {
      changeImg(pathWrappers, pathWrappers[i], indexs[i], paths[i]);
    });
  }

  pathWrappers[0].classList.add("clicked");

  setInterval(() => {
    currentIndex += 1;
    if (currentIndex >= wrapperCnt) {
      currentIndex = 0;
    }
    changeImg(
      pathWrappers,
      pathWrappers[currentIndex],
      indexs[currentIndex],
      paths[currentIndex]
    );
  }, 2000);

  // 메인배너 이미지 변경
  function changeImg(pathWrappers, pathWrapper, index, path) {
    const intIndex = parseInt(index.innerHTML);
    if (currentIndex == intIndex) return;
    for (let i = 0; i < pathWrappers.length; i++) {
      pathWrappers[i].classList.remove("clicked");
    }
    screen.style.backgroundImage = "url('" + path.innerHTML + "')";
    pathWrapper.classList.add("clicked");
    currentIndex = intIndex;
    alert(currentIndex + typeof currentIndex);
    alert("???");
  }
};
