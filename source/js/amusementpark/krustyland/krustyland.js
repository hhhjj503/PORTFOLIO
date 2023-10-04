window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const moreBtn = document.querySelector(".more");
  const menu = document.querySelector("main .menu");
  const background = document.querySelector(".banner-wrapper.bg-img");

  document.querySelector(".banner-wrapper.bg-img").offsetHeight + "px";

  //제품리스트를 제이슨으로 받아와 담기위한 배열과 카운트 선언
  let addedItemCount = 5;
  let added = 0;
  let allData = [];

  //이미지미리로드
  const imgSourceArray = [];
  imgSourceArray.push(
    "../../source/images/amusementpark/krustyland/star-solid.svg"
  );
  imgSourceArray.push(
    "../../source/images/amusementpark/krustyland/star-half-stroke-solid.svg"
  );
  imgSourceArray.push(
    "../../source/images/amusementpark/krustyland/heart-solid.svg"
  );
  for (let i = 0; i < imgSourceArray.length; i++) {
    let img = new Image();
    img.src = imgSourceArray[i];
  }

  const goodsUl = $(".goods-wrapper .goods-ul");

  window.addEventListener("scroll", () => {
    if (
      html.scrollTop > background.offsetHeight
      //- menu.offsetHeight && topNav.offsetHeight !== 0
    ) {
      //pc일때 fixed 위치조정
      menu.style.position = "fixed";
      menu.style.top = "0px";
    } else {
      menu.style.position = "relative";
      menu.style.top = 0;
    }
  });

  //제이슨 파일 데이터로 li 만들기=
  $.getJSON("../../source/data/amusementpark/list.json", initItems);

  function initItems(data) {
    allData = data;
    addItem();

    moreBtn.onclick = function () {
      addItem();
    };
  } //initItems

  /**
   * 제품리스트에 항목을 추가
   */
  function addItem() {
    let slicedData;
    let elements = [];

    slicedData = allData.slice(added, added + addedItemCount);

    $.each(slicedData, function (i, item) {
      const elementText =
        ' <li class="goods-li" >' +
        '<a href="./product.html" ' +
        '><img  src="' +
        item.imagePath +
        '" ' +
        ' alt="' +
        item.title +
        '"  />' +
        '<h5 data-index="' +
        item.index +
        '" data-rating="' +
        item.rating +
        '" >' +
        item.title +
        "</h5>" +
        "</a>" +
        "</li>";

      //클릭시 h5 의 index 값을 가져와 json 파일로 만드는 코드 만들기
      const element = $(elementText).get(0);

      elements.push(element);
    });
    added = added + addedItemCount;

    if (added > allData.length - 1) {
      added = allData.length - 1;
      moreBtn.classList.add("nomore");
    }

    goodsUl.append(elements);

    goodsUl.imagesLoaded(function () {
      goodsUl.find("li").addClass("loaded");
    });
  } //addItem
});
