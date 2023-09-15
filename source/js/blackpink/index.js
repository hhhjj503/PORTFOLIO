window.addEventListener("load", () => {
  //h1
  const deco = document.querySelector("h1 .deco");
  //section.banner
  const bannerIndexs = document.querySelectorAll(".banner .controls .index");
  const bannerPlay = document.querySelector(".banner .controls .play");
  const bannerStop = document.querySelector(".banner .controls .stop");
  const bannerUl = document.querySelector(".banner ul");
  let bannerStartIndex = 0;
  let bannerLastIndex = bannerIndexs.length;
  let bannerSliding = true;
  //section.intro
  const thumbnailViewer = document.querySelector(
    ".intro .thumbnail .thumbnail-viewer"
  );
  const thumbLis = document.querySelectorAll(".intro .thumbnail li");
  const imagesListUl = document.querySelector(".intro .original .images-list");
  const imagesListLis = document.querySelectorAll(
    ".intro .original .images-list li"
  );
  const sizeCoverBtn = document.querySelector(
    ".intro .size-controls .size-cover"
  );
  const sizeContainBtn = document.querySelector(
    ".intro .size-controls .size-contain"
  );
  const translateKorea = document.querySelector(".intro .translate .korea");
  const translateEnglish = document.querySelector(".intro .translate .english");
  const introDescPs = document.querySelectorAll(".intro .intro-desc p");
  //section.members
  const membersSection = document.querySelector(".members");
  const membersMember = document.querySelectorAll(".members .member");
  const html = document.querySelector("html");
  const memberThreshold =
    window.pageYOffset +
    membersSection.getBoundingClientRect().top -
    html.scrollHeight * 0.1;
  //section.news
  const newsSection = document.querySelector(".news");
  const newsListViewer = document.querySelector(".news .news-list-viewer");
  const newsThreshold =
    window.pageYOffset +
    newsSection.getBoundingClientRect().top -
    html.scrollHeight * 0.08;
  const newsUl = document.querySelector(".news .news-list-viewer .news-list");
  const newsListLis = document.querySelectorAll(
    ".news .news-list-viewer .news-list li"
  );
  const newsBeforeBtn = document.querySelector(".news .news-controls .before");
  const newsNextBtn = document.querySelector(".news .news-controls .next");
  const newsProgressBar = document.querySelector(".news .news-controls .bar");
  const progressValue = 100 / newsListLis.length;
  const newsStartIndex = document.querySelector(
    ".news .news-controls .start-number"
  );
  const newsLastIndex = document.querySelector(
    ".news .news-controls .last-number"
  );
  let newsCurrentIndex = 1;
  let newsOffsetLeft = 0;
  //section.albums
  const albumsSection = document.querySelector(".albums");
  const albumsBGPlay = document.querySelector(".albums .albums-controls .play");
  const albumsBGStop = document.querySelector(".albums .albums-controls .stop");

  //section.albums
  //all 버튼 기능부터 추가하면됨
  albumsBGPlay.addEventListener("click", function () {
    addClass(albumsSection, "active");
  });
  albumsBGStop.addEventListener("click", function () {
    removeClass(albumsSection, "active");
  });

  //section.news
  newsLastIndex.innerText = "0" + newsListLis.length;
  newsStartIndex.innerText = "0" + newsCurrentIndex;
  plusWidthValue(newsProgressBar, newsCurrentIndex, progressValue, "%");
  newsBeforeBtn.addEventListener("click", function () {
    if (newsCurrentIndex <= 1) {
      newsCurrentIndex = 1;
      return;
    }
    newsCurrentIndex--;
    newsStartIndex.innerText = "0" + newsCurrentIndex;
    minusWidthValue(newsProgressBar, newsCurrentIndex, progressValue, "%");
    //
    newsOffsetLeft =
      newsOffsetLeft - (newsListLis[newsCurrentIndex - 1].offsetWidth + 40);
    newsOffsetLeft = Number.parseInt(newsOffsetLeft);
    newsUl.style.left = -newsOffsetLeft + "px";
    console.log(newsOffsetLeft);
  });
  newsNextBtn.addEventListener("click", function () {
    if (newsCurrentIndex == newsListLis.length) {
      newsCurrentIndex = newsListLis.length;
      return;
    }
    newsCurrentIndex++;
    newsStartIndex.innerText = "0" + newsCurrentIndex;
    plusWidthValue(newsProgressBar, newsCurrentIndex, progressValue, "%");
    //
    newsOffsetLeft =
      newsOffsetLeft + newsListLis[newsCurrentIndex - 1].offsetWidth + 40; //margin 40
    newsOffsetLeft = Number.parseInt(newsOffsetLeft);
    newsUl.style.left = -newsOffsetLeft + "px";
    console.log(newsOffsetLeft);
  });
  function plusWidthValue(element, currentIndex, value, unit) {
    element.style.width = currentIndex * value + unit;
  }
  function minusWidthValue(element, currentIndex, value, unit) {
    element.style.width = currentIndex * value + unit;
  }
  window.addEventListener(
    "scroll",
    throttle(() => {
      const currentScrollTop = html.scrollTop;
      if (currentScrollTop >= memberThreshold) {
        addAllClass(membersMember, "active");
      } else {
        removeAllClass(membersMember, "active");
      }

      if (currentScrollTop >= newsThreshold) {
        addClass(newsListViewer, "active");
      } else {
        removeClass(newsListViewer, "active");
      }
    })
  );

  //section.intro
  translateKorea.addEventListener("click", function () {
    removeAllClass(introDescPs, "active");
    addClass(introDescPs[0], "active");
  });
  translateEnglish.addEventListener("click", function () {
    removeClass(introDescPs[0], "active");
    addClass(introDescPs[1], "active");
  });
  sizeCoverBtn.addEventListener("click", function () {
    for (let i = 0; i < imagesListLis.length; i++) {
      removeAllClass(imagesListLis, "contain");
    }
  });
  sizeContainBtn.addEventListener("click", function () {
    for (let i = 0; i < imagesListLis.length; i++) {
      addAllClass(imagesListLis, "contain");
    }
  });

  //section.banner
  let bannerAutoSlide = setInterval(function () {
    let event = new Event("click");
    bannerIndexs[bannerStartIndex].dispatchEvent(event);
  }, 3000);
  for (let i = 0; i < thumbLis.length; i++) {
    thumbLis[i].addEventListener("click", function () {
      removeAllClassThenAddClass(thumbLis, thumbLis[i], "active");
      if (i < thumbLis.length) offTopPosition(thumbnailViewer, i * 20, "%");
      offTopPosition(imagesListUl, -(i * 100), "%");
    });
  }
  for (let i = 0; i < bannerIndexs.length; i++) {
    bannerIndexs[i].addEventListener("click", function () {
      removeAllClassThenAddClass(bannerIndexs, bannerIndexs[i], "active");
      offLEftPosition(bannerUl, -(i * 100), "%");
      bannerStartIndex++;
      if (bannerLastIndex <= bannerStartIndex) bannerStartIndex = 0;
    });
  }
  bannerPlay.addEventListener("click", function () {
    if (bannerSliding == false) {
      bannerAutoSlide = setInterval(function () {
        let event = new Event("click");
        bannerIndexs[bannerStartIndex].dispatchEvent(event);
      }, 3500);
    }
    bannerSliding = true;
  });
  bannerStop.addEventListener("click", function () {
    bannerSliding = false;
    clearInterval(bannerAutoSlide);
  });

  //h1
  setTimeout(() => {
    deco.classList.add("rotate");
  }, 500);

  function removeAllClassThenAddClass(elements, element, className) {
    removeAllClass(elements, className);
    addClass(element, className);
  }

  function addAllClass(element, className) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add(className);
    }
  }

  function addClass(element, className) {
    element.classList.add(className);
  }

  function removeAllClass(element, className) {
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove(className);
    }
  }

  function removeClass(element, className) {
    element.classList.remove(className);
  }

  function offLEftPosition(element, value, unit) {
    element.style.left = value + unit;
  }

  function offTopPosition(element, value, unit) {
    element.style.top = value + unit;
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
