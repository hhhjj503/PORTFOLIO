window.addEventListener("load", () => {
  const html = document.querySelector("html");

  const attractionWrapper = document.querySelector(".attraction-wrapper");
  const absoluteNav = document.querySelector(".absolute-nav");
  const attracionNavs = document.querySelectorAll(".attraction-nav-ul a");
  const attractions = document.querySelectorAll(".attraction");

  let attractionsOffsetTops = [];
  attractionsOffsetTops = getOffsetTop();
  changeHeightValue(attractionWrapper.offsetHeight, absoluteNav);

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
      changeHeightValue(attractionWrapper.offsetHeight, absoluteNav);
    }, 300);
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

  function changeHeightValue(value, elment) {
    elment.style.height = value + "px";
  }

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
