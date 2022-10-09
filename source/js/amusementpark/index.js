window.addEventListener("load", () => {
  const footer = document.querySelector("footer");
  const types = document.querySelectorAll(".type");
  const descs = document.querySelectorAll(".desc");
  const backgrounds = document.querySelectorAll(".background");

  for (let i = 0; i < types.length; i++) {
    types[i].addEventListener("mouseover", () => {
      changeColor(descs[i]);
    });
  }

  for (const background of backgrounds) {
    const img = new Image();
    img.src = background.dataset.path;
  }

  function changeColor(color) {
    footer.style.backgroundColor = color.dataset.color;
  }
});
