window.addEventListener("load", () => {
  const gotop = document.querySelector(".gotop");

  //gotop 버튼
  gotop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
});
