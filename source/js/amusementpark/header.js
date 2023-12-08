window.addEventListener("load", () => {
  const html = document.querySelector("html");

  const headerNav = document.querySelector(".header__nav");
  const downSlidingHeader = document.querySelector(".downSliding-header");
  const downSlidingHeaderNav = document.querySelector(
    ".downSliding-header__nav"
  );
  const downSlidingHeaderUpBtn = document.querySelector(
    ".downSliding-header__up-btn"
  );

  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      headerNav.classList.add("scrolldown");
      downSlidingHeader.classList.add("scrolldown");
    } else {
      headerNav.classList.remove("scrolldown");
      downSlidingHeader.classList.remove("scrolldown");
    }
  });

  downSlidingHeader.addEventListener("click", () => {
    downSlidingHeaderNav.classList.toggle("downSliding-header__nav--is-open");
  });
});
