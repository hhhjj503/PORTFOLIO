window.addEventListener("load", function () {
  const labels = document.querySelectorAll("label");

  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const clickEvent = new Event("click");
        labels[i].dispatchEvent(clickEvent);
      }
    });
  }
});
