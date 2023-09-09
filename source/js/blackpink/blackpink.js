window.addEventListener("load", () => {
  const deco = document.querySelector("h1 .deco");

  setTimeout(() => {
    deco.classList.add("rotate");
  }, 500);
});
