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
  const thumbnailViewerMobile = document.querySelector(
    ".intro .thumbnail-mobile .thumbnail-viewer-mobile"
  );
  const thumbLisMobile = document.querySelectorAll(
    ".intro .thumbnail-mobile li"
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
  const allSongs = document.querySelectorAll(".albums .all-songs-wrapper li");
  const albums = document.querySelectorAll(".albums .albums-wrapper .album");
  const albumNames = [
    "square-one",
    "square-two",
    "square-up",
    "kill-this-love",
    "the-album",
    "born-pink",
  ];
  const showAll = document.querySelector(".albums .albums-wrapper .show-all");
  //section.game
  const unitImages = document.querySelectorAll(".game .units .unit div");
  const unit = document.querySelector(".game .units .unit");
  const gameStart = document.querySelector(".game .game-start");
  const gameReset = document.querySelector(".game .game-reset");
  let moving = false;
  let scores = [0, 0, 0, 0];
  let urls = [
    "url(../../source/images/blackpink/0000926654.jpg)", //제니이미지
    "url(../../source/images/blackpink/roseyg.jpg)", //로제이미지
    "url(../../source/images/blackpink/0002650199.jpg)", //리사이미지
    "url(../../source/images/blackpink/0001567912_0019.jpg)", //지수이미지
  ];
  const result = document.querySelector(".game .game-wrapper .result");

  gameStart.addEventListener("click", function () {
    removeClass(this, "active");
    moving = setInterval(function () {
      const limit = unit.offsetHeight - unitImages[0].offsetHeight * 1.5;

      for (let i = 0; i < unitImages.length; i++) {
        scores[i] = scores[i] + Math.floor(Math.random() * (100 - 50) + 50);
        unitImages[i].style.top = scores[i] + "px";

        if (scores[i] > limit) {
          clearInterval(moving);
          const maxScore = Math.max(...scores);

          for (let j = 0; j < scores.length; j++) {
            if (maxScore === scores[j]) {
              result.style.backgroundImage = urls[j];
              addClass(result, "active");
            }
          }
          addClass(gameReset, "active");
        }
      }
    }, 1000);
  });

  gameReset.addEventListener("click", function () {
    scores = [0, 0, 0, 0];
    for (let i = 0; i < unitImages.length; i++) {
      unitImages[i].style.top = 0 + "px";
      removeClass(gameReset, "active");
      addClass(gameStart, "active");
      removeClass(result, "active");
    }
  });

  window.addEventListener("resize", function () {
    memberThreshold =
      window.pageYOffset +
      membersSection.getBoundingClientRect().top -
      html.scrollHeight * 0.1;
    newsThreshold =
      window.pageYOffset +
      newsSection.getBoundingClientRect().top -
      html.scrollHeight * 0.08;
  }); //resize 이벤트

  //section.albums
  showAll.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      addAllClass(albums, "active");
      addAllClass(allSongs, "active");
    }
  });

  for (let i = 0; i < allSongs.length; i++) {
    if (allSongs[i].classList.contains(albumNames[0])) {
      addClass(allSongs[i], "active");
    }
  } //홈페이지 로딩시 default active 할 요소

  for (let i = 0; i < albums.length; i++) {
    albums[i].addEventListener("click", function () {
      let addingClass = false;
      const albumName = albumNames[i];
      if (!addingClass) {
        addingClass = true;
        removeAllClass(albums, "active");
        addClass(albums[i], "active");
        removeAllClass(allSongs, "active");
        for (let j = 0; j < allSongs.length; j++)
          if (allSongs[j].classList.contains(albumName)) {
            addClass(allSongs[j], "active");
            addingClass = false;
          }
      }
    });
  } //album 버튼 클릭이벤트

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
      newsCurrentIndex = newsListLis.length;
      newsOffsetLeft =
        newsListLis[newsCurrentIndex - 1].offsetWidth * newsListLis.length -
        120; //중복되는 margin 제거
      newsUl.style.left = -newsOffsetLeft + "px";
    } else {
      newsCurrentIndex--;
      newsOffsetLeft =
        newsOffsetLeft - (newsListLis[newsCurrentIndex - 1].offsetWidth + 40);
      newsOffsetLeft = Number.parseInt(newsOffsetLeft);
      newsUl.style.left = -newsOffsetLeft + "px";
    }
    newsStartIndex.innerText = "0" + newsCurrentIndex;
    minusWidthValue(newsProgressBar, newsCurrentIndex, progressValue, "%");
  }); //뉴스 슬라이더 다음버튼
  newsNextBtn.addEventListener("click", function () {
    if (newsCurrentIndex == newsListLis.length) {
      newsCurrentIndex = 1;
      newsOffsetLeft = 0;
      newsUl.style.left = 0 + "px";
    } else {
      newsCurrentIndex++;
      newsOffsetLeft =
        newsOffsetLeft + newsListLis[newsCurrentIndex - 1].offsetWidth + 40; //margin 40
      newsOffsetLeft = Number.parseInt(newsOffsetLeft);
      newsUl.style.left = -newsOffsetLeft + "px";
    }
    plusWidthValue(newsProgressBar, newsCurrentIndex, progressValue, "%");
    newsStartIndex.innerText = "0" + newsCurrentIndex;
  }); //뉴스 슬라이더 이전버튼
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
  for (let i = 0; i < thumbLis.length; i++) {
    thumbLis[i].addEventListener("click", function () {
      removeAllClassThenAddClass(thumbLis, thumbLis[i], "active");
      if (i < thumbLis.length) offTopPosition(thumbnailViewer, i * 20, "%");
      offTopPosition(imagesListUl, -(i * 100), "%");
    });
  } //썸네일 클릭시 대형이미지 슬라이드

  for (let i = 0; i < thumbLisMobile.length; i++) {
    thumbLisMobile[i].addEventListener("click", function () {
      removeAllClassThenAddClass(thumbLisMobile, thumbLisMobile[i], "active");
      if (i < thumbLisMobile.length) {
        offLeftPosition(thumbnailViewerMobile, i * 20, "%");
      }
      offTopPosition(imagesListUl, -(i * 100), "%");
    });
  } //모바일 썸네일 클릭시 대형이미지 슬라이드

  //section.banner
  let bannerAutoSlide = setInterval(function () {
    let event = new Event("click");
    bannerIndexs[bannerStartIndex].dispatchEvent(event);
  }, 3000);

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

  function offLeftPosition(element, value, unit) {
    element.style.left = value + unit;
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
