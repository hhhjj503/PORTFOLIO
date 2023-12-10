window.addEventListener("load", () => {
  const html = document.querySelector("html");

  const scrollNavigatorInner = document.querySelector(
    ".scroll-navigator__inner"
  );
  const jsScrollHeight = document.querySelector(".js-scroll-height");
  const scrollNavigatorLink = document.querySelectorAll(
    ".scroll-navigator__link"
  );
  let scrollNavigatorDestination = [];
  scrollNavigatorDestination = getOffsetTop(".js-offsettop");
  changeHeightValue(jsScrollHeight.offsetHeight, scrollNavigatorInner);

  for (let i = 0; i < scrollNavigatorLink.length; i++) {
    scrollNavigatorLink[i].addEventListener("click", function (e) {
      e.preventDefault();
      html.scrollTop = scrollNavigatorDestination[i];
      activeStyle(scrollNavigatorLink, i);
    });
  }

  window.addEventListener("resize", function () {
    setTimeout(() => {
      scrollNavigatorDestination = [];
      scrollNavigatorDestination = getOffsetTop(".js-offsettop");
      changeHeightValue(jsScrollHeight.offsetHeight, scrollNavigatorInner);
    }, 300);
  });

  window.addEventListener(
    "scroll",
    throttle(() => {
      let currentTop = html.scrollTop;
      for (let i = 0; i < scrollNavigatorDestination.length; i++) {
        if (currentTop >= scrollNavigatorDestination[i] - 50) {
          activeStyle(scrollNavigatorLink, i);
        }
      }
    })
  );

  function changeHeightValue(value, elment) {
    elment.style.height = value + "px";
  }

  function getOffsetTop(claaName) {
    const tempOffsetTop = document.querySelectorAll(claaName);
    let newArray = [];
    for (let i = 0; i < tempOffsetTop.length; i++) {
      newArray.push(
        window.scrollY + tempOffsetTop[i].getBoundingClientRect().top
      );
    }
    return newArray;
  } //offsetTop 다시 받는 메서드

  function activeStyle(array, styleIndex) {
    for (let i = 0; i < array.length; i++) {
      scrollNavigatorLink[i].classList.remove("active");
    }
    scrollNavigatorLink[styleIndex].classList.add("active");
  }

  function throttle(callback, limit = 1000 / 15) {
    let waiting = false;
    return function () {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  } //throttle
});
