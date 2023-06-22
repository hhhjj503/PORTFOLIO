window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const attracionNavs = document.querySelectorAll(".attraction-nav a");
  const attractions = document.querySelectorAll(".attraction");

  let attractionsOffsetTops = [];
  attractionsOffsetTops = getOffsetTop();

  for (let i = 0; i < attracionNavs.length; i++) {
    attracionNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      html.scrollTop = attractionsOffsetTops[i];
      activeStyle(attracionNavs, i);
    });
  }

  window.addEventListener("resize", function () {
    setTimeout(() => {
      attractionsOffsetTops = [];
      attractionsOffsetTops = getOffsetTop();
    }, 100);
  });

  window.addEventListener(
    "scroll",
    throttle(() => {
      let currentTop = html.scrollTop;
      for (let i = 0; i < attractionsOffsetTops.length; i++) {
        if (currentTop >= attractionsOffsetTops[i] - 50) {
          activeStyle(attracionNavs, i);
        }
      }
    })
  );

  function getOffsetTop() {
    const attractionsTemp = document.querySelectorAll(".attraction");
    let newArray = [];
    for (let i = 0; i < attractionsTemp.length; i++) {
      newArray.push(
        window.scrollY + attractionsTemp[i].getBoundingClientRect().top
      );
    }
    return newArray;
  } //offsetTop 다시 받는 메서드

  function activeStyle(array, styleIndex) {
    for (let i = 0; i < array.length; i++) {
      attracionNavs[i].classList.remove("active");
    }
    attracionNavs[styleIndex].classList.add("active");
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
