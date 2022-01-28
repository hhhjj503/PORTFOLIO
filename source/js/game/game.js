window.onload = function () {
  const depth1 = document.querySelector("main .contents .menu .depth1");
  const lis = depth1.children;
  console.log(depth1);
  console.log(lis);
  console.log(lis[0].querySelector("a"));

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseenter", function () {
      addShow(lis);
    });

    lis[i].addEventListener("mouseleave", function () {
      removeShow(lis);
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
};
