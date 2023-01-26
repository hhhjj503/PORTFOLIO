window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");
  const moreBtn = document.querySelector(".more");

  let addedItemCount = 5;
  let added = 0;
  let allData = [];

  const list = $(".list-wrapper .list");

  //스크롤 내리면 헤드메뉴 투명하게
  window.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
      topNav.style.opacity = "0";
      topNavMobile.style.opacity = "0";
    } else {
      topNav.style.opacity = "1";
      topNavMobile.style.opacity = "1";
    }
  });

  //모바일 메뉴 클릭시 아코디언
  topNavMobile.addEventListener("click", () => {
    subMenu.classList.toggle("opened");
  });

  //모바일
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });

  /*-------------------------------메이슨리 라이브러리-------------------------------------- */

  $.getJSON("../../source/data/amusementpark/list.json", initItems);

  function initItems(data) {
    allData = data;
    addItem();

    moreBtn.onclick = function () {
      addItem();
    };
  }

  function addItem() {
    let slicedData;
    let elements = [];

    slicedData = allData.slice(added, added + addedItemCount);

    $.each(slicedData, function (i, item) {
      const elementText =
        ' <li class="item">' +
        '<a href="#"' +
        "><img " +
        'src="' +
        item.imagePath +
        '"' +
        ' alt="' +
        item.title +
        '"' +
        "/>" +
        "<h5>" +
        item.title +
        "</h5>" +
        "</a>" +
        "</li>";
      elements.push($(elementText).get(0));
    });
    added = added + addedItemCount;

    if (added > allData.length) {
      added = allData.length;
      moreBtn.classList.add("nomore");
    }

    list.append(elements);

    list.imagesLoaded(function () {});
  }
});
