window.onload = function () {
  const html = document.querySelector("html");
  const entrance = document.querySelector(".entrance");
  const items = document.querySelectorAll(".technology .item");
  const scores = document.querySelectorAll(".technology .score");
  const bars = document.querySelectorAll(".technology .score .bar");
  const lists = document.querySelectorAll(".portfolio .list");
  const pagemoves = document.querySelectorAll(".pagemove");

  for (let i = 0; i < 1; i++) {
    const img = new Image();
    img.src = entrance.dataset.path;
  }

  for (const item of items) {
    const path = new Image();
    path.src = item.dataset.path;
  }

  for (const list of lists) {
    const path = new Image();
    path.src = list.dataset.path;
  }

  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundImage = "url(" + lists[i].dataset.path + ")";
  }

  window.addEventListener("scroll", function () {
    scrollEvent();
  });

  function scrollEvent() {
    const documentHeight = html.scrollHeight;
    const showValue = documentHeight * 0.21;
    let currentValue = html.scrollTop;

    if (currentValue > showValue) {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add("show");
      }
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          const score = scores[i].dataset.score;
          bars[i].style.backgroundColor = bars[i].dataset.color;
          bars[i].style.width = `${score}%`;
        }
      }, 1300);
    }
  }
};
