window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");
  const moreBtn = document.querySelector(".more");
  const purchase = document.querySelector(".purchase");
  const purchaseCloseBtn = document.querySelector(".purchase-close-btn");

  //제품클릭시 제품내용변경을 위한 변수
  const goodsImage = document.querySelector(".goods-image");
  let goodsTitle = document.querySelector(".goods-title");
  const perPrice = document.querySelector(".goods-price .per-price");
  let intedPerPrice;
  const quantityMinusBtn = document.querySelector(
    ".goods-quantity .quantity-box .minus"
  );
  const quantityPlusBtn = document.querySelector(
    ".goods-quantity .quantity-box .plus"
  );
  let quantity = document.querySelector(
    ".goods-quantity .quantity-box .quantity"
  );
  let totalPrice = document.querySelector(".goods-total-price .total-price");

  //제품리스트를 제이슨으로 받아와 담기위한 배열과 카운트 선언
  let addedItemCount = 5;
  let added = 0;
  let allData = [];

  //list 는 라이브러리를 위해 제이쿼리사용
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

  //모바일 에러용
  goup.addEventListener("mouseenter", () => {
    subMenu.classList.toggle("opened");
  });

  //구매창 버튼 클릭시 창닫기
  purchaseCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    purchase.classList.remove("open");
    purchase.classList.add("close");
  });

  /*-------------------------------제이슨 파일 데이터로 li 만들기-------------------------------------- */

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
        ' <li class="item" >' +
        '<a href="#"' +
        "><img " +
        'src="' +
        item.imagePath +
        '"' +
        ' alt="' +
        item.title +
        '" data-price=' +
        item.price +
        ' />"' +
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

    list.imagesLoaded(function () {
      list
        .find("li")
        .addClass("loaded")

        //리스트 클릭시 제품 구매창의 데이터를 제품에 맞게 변경 ,관련데이터는 li 안의 img 태그에 있음
        //이미지 goodsImage , 타이틀 goodsTitle, 가격 perPrice, 수량 quantityPlus quantity quantityMinus, 총합 totalPrice
        .click(function (e) {
          e.preventDefault();
          if (html.scrollTop === 0) html.scrollTop += 1;

          if (purchase.classList.contains("close")) {
            purchase.classList.remove("close");
            purchase.classList.add("open");
          }

          const selectedGoods = this.querySelector("img");
          console.log(selectedGoods);

          goodsImage.src = selectedGoods.src;
          goodsTitle.innerText = selectedGoods.alt;
          perPrice.innerText = selectedGoods.dataset.price;

          //가격을 localString 으로 바꾸고 int 로 바뀐값을 별도로 또 사용
          //localString 을 적용하면 숫자가 아니게됨
          intedPerPrice = selectedGoods.dataset.price;
          perPrice.innerText = Number(perPrice.innerText).toLocaleString("en");

          quantity.innerText = 1;
          totalPrice.innerText = Number(
            selectedGoods.dataset.price
          ).toLocaleString("en");
        });
    });
  }

  quantityPlusBtn.addEventListener("click", () => {
    let number = parseInt(quantity.innerText);
    number += 1;
    quantity.innerText = number;
    updatedTotalPrice = number * parseInt(intedPerPrice);
    totalPrice.innerText = Number(updatedTotalPrice).toLocaleString("en");
  });
  quantityMinusBtn.addEventListener("click", () => {
    let number = parseInt(quantity.innerText);
    number -= 1;
    if (number <= 0) number = 1;
    quantity.innerText = number;
    updatedTotalPrice = number * parseInt(intedPerPrice);
    totalPrice.innerText = Number(updatedTotalPrice).toLocaleString("en");
  });
});