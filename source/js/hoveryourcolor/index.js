window.addEventListener("load", function () {
  const links = document.querySelectorAll(".container p > a");
  let bg = document.querySelector(".bg");
  const title = document.querySelector("h2");
  const divLeft = this.document.querySelector("div.left");
  const divRight = this.document.querySelector("div.right");

  for (const link of links) {
    const img = new Image();
    img.src = link.dataset.path;
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function (e) {
      changeBG(e, links);
    });
    links[i].addEventListener("mouseleave", function (e) {
      leaveBG(links);
    });
  }

  function changeBG(e, links) {
    const path = e.target.getAttribute("data-path");
    divLeft.classList.add("open");
    divRight.classList.add("open");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("hidden");
    }
    title.style.opacity = 0;
    e.target.classList.remove("hidden");
    bg.style.backgroundImage = `url(${path})`;
    bg.style.opacity = 1;
  }

  function leaveBG(links) {
    bg.style.opacity = 0;
    divLeft.classList.remove("open");
    divRight.classList.remove("open");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("hidden");
    }
    title.style.opacity = 1;
  }
});
