window.addEventListener("load", () => {
  const html = document.querySelector("html");
  const topNav = document.querySelector(".top-nav");
  const topNavMobile = document.querySelector(".top-nav-mobile");
  const subMenu = document.querySelector(".top-nav-mobile .sub-menu");
  const goup = document.querySelector(".top-nav-mobile .goup");
  const moreBtn = document.querySelector(".more");
  const purchase = document.querySelector(".purchase");
  const purchaseCloseBtn = document.querySelector(".purchase-close-btn");
  const menu = document.querySelector("main .menu");
  const background = document.querySelector(".background");

  document.querySelector(".background").offsetHeight + "px";

  //제품클릭시 제품내용변경을 위한 변수
  const goodsImage = document.querySelector(".goods-image");
  let goodsTitle = document.querySelector(".goods-title");
  const perPrice = document.querySelector(".goods-price .per-price");
  let intedPerPrice;

  //하트이미지 클릭시 장바구니에 넣기위한 변수
  const shoppingBag = document.querySelector(".shopping-bag");
  let bagImg = document.querySelector(".shopping-bag img");

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
  const dibImg = document.querySelector(".dib img");

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

  const list = $(".list-wrapper .list");

  window.addEventListener("scroll", () => {
    const mobileHeader = topNavMobile.style.display;
    if (
      html.scrollTop > background.offsetHeight - menu.offsetHeight &&
      topNav.offsetHeight !== 0
    ) {
      //pc일때 fixed 위치조정
      menu.style.position = "fixed";
      menu.style.top = topNav.offsetHeight + "px";
    } else {
      menu.style.position = "relative";
      menu.style.top = 0;
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

    // tabindex 변경
    const tabControls = document.querySelectorAll(".tab-control");
    for (let i = 0; i < tabControls.length; i++) {
      tabControls[i].setAttribute("tabindex", "-1");
    }

    purchase.classList.remove("open");
    purchase.classList.add("close");
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
        ' <li class="item" >' +
        '<a href="#" ' +
        "><img  " +
        'src="' +
        item.imagePath +
        '" ' +
        ' alt="' +
        item.title +
        '" data-price=' +
        item.price +
        ' />"' +
        "<h5 data-reviewcount='" +
        item.reviewCount +
        "' data-rating='" +
        item.rating +
        "' >" +
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

          const trList = $("table tr");
          const commentsPerPage = 5;

          if (html.scrollTop === 0) html.scrollTop += 1;
          if (purchase.classList.contains("close")) {
            purchase.classList.remove("close");
            purchase.classList.add("open");
          }

          const selectedGoods = this.querySelector("img");
          const selectedGoodsReviews =
            this.querySelector("h5").dataset.reviewcount;
          const selectedGoodsRating = this.querySelector("h5").dataset.rating;

          goodsImage.src = selectedGoods.src;
          goodsImage.alt = selectedGoods.alt;
          goodsTitle.innerText = selectedGoods.alt;

          //장바구니 이미지 클래스 초기화
          bagImg.classList.remove("hidden");

          //제품 리뷰수 변경
          if (selectedGoodsReviews > 0) {
            const reviewCount = document.createElement("span");
            reviewCount.classList.add("review-count");
            reviewCount.innerText = "(" + selectedGoodsReviews + ")";
            goodsTitle.appendChild(reviewCount);
          }

          //제품 평점변경
          if (selectedGoodsRating > 0) {
            const rating = document.createElement("span");
            rating.classList.add("rating");

            for (let i = 0; i < selectedGoodsRating; i++) {
              const svg = document.createElement("svg");
              svg.classList.add("rating-star");
              rating.appendChild(svg);
            }
            //평점이 마지막 svg 태그 제어한뒤 .5로 끝날경우 반개짜리별로 추가
            if (selectedGoodsRating % 1) {
              const svg = document.createElement("svg");
              svg.classList.add("rating-half-star");
              rating.removeChild(rating.lastChild);
              rating.appendChild(svg);
            }
            goodsTitle.appendChild(rating);
          }

          dibImg.classList.remove("clicked");
          perPrice.innerText = selectedGoods.dataset.price;

          //리뷰란 페이저생성
          const reviewPager = document.querySelector(
            ".goods-review .review-pager"
          );
          reviewPager.innerHTML = "";
          removeClass(trList, "active");

          let liCounts = selectedGoodsReviews / commentsPerPage;
          for (let i = 0; i < liCounts; i++) {
            const newLi = document.createElement("li");
            const newA = document.createElement("a");
            newA.setAttribute("href", "#");
            newA.innerText = i + 1;
            newA.setAttribute("class", "tab-control");
            newLi.appendChild(newA);
            newA.addEventListener("click", function (e) {
              e.preventDefault();
              getCommetns(newA.innerText, selectedGoodsReviews);
            });
            reviewPager.appendChild(newLi);

            //첫번쨰 a 태그는 click 이벤트 호출
            if (i === 0) {
              const event = new Event("click");
              newA.dispatchEvent(event);
            }
          }

          //a 태그를 동적으로 만든후 click 이벤트 자동호출

          //가격을 localString 으로 바꾸고 int 로 바뀐값을 별도로 또 사용
          //localString 을 적용하면 숫자가 아니게됨
          intedPerPrice = selectedGoods.dataset.price;
          perPrice.innerText = Number(perPrice.innerText).toLocaleString("en");

          quantity.innerText = 1;
          totalPrice.innerText = Number(
            selectedGoods.dataset.price
          ).toLocaleString("en");

          //tabindex 변경
          const tabControls = document.querySelectorAll(".tab-control");
          console.log(tabControls);
          for (let i = 0; i < tabControls.length; i++) {
            tabControls[i].setAttribute("tabindex", 0);
          }
        });
    });
  } //addItem

  /**
   * 배열을 파라미터로 받아 클래스를 제거하는 함수
   * @param {Array} list
   * @param {string} className
   */
  function removeClass(list, className) {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove(className);
    }
  }

  /**
   * 상품이미지 클릭시 a태그의 의 innerText 와 전체리뷰수를 파라미터로 받아
   * 보여줄  tr 태그만 클래스를 추가해주는 함수 (댓글을 불러오는 함수)
   * @param {string} pagernumberText
   * @param {string} reviewCountsText
   */
  function getCommetns(pagernumberText, reviewCountsText) {
    const pagernumber = parseInt(pagernumberText);
    const reviewCounts = parseInt(reviewCountsText);
    const nav = document.querySelectorAll(".review-pager li");

    const trList = $("table tr");
    const commentsPerPage = 5;

    removeClass(nav, "active");
    nav[pagernumber - 1].classList.add("active");
    removeClass(trList, "active");

    if (pagernumberText > 1) {
      //
      if (nav.length === pagernumber) {
        for (
          let i = commentsPerPage * (pagernumber - 1);
          i < reviewCountsText;
          i++
        ) {
          trList[i].classList.add("active");
        }
      } else {
        //
        for (
          let i = commentsPerPage * (pagernumber - 1);
          i < pagernumber * commentsPerPage;
          i++
        ) {
          trList[i].classList.add("active");
        }
      }
    } else {
      //
      if (reviewCounts < 6) {
        for (let i = 0; i < reviewCounts; i++) {
          trList[i].classList.add("active");
        }
      } else {
        for (let i = 0; i < commentsPerPage; i++) {
          trList[i].classList.add("active");
        }
      }
    }
  }

  //하트클릭시 이미지변경
  dibImg.addEventListener("click", function () {
    if (!dibImg.classList.contains("clicked")) {
      dibImg.classList.add("clicked");
      bagImg.src = goodsImage.src;
      bagImg.alt = goodsImage.alt;
      shoppingBag.classList.add("rotate");
      bagImg.classList.add("shown");
      setTimeout(() => {
        bagImg.classList.remove("shown");
        bagImg.classList.add("hidden");
        shoppingBag.classList.remove("rotate");
      }, 300);
    } else {
      dibImg.classList.remove("clicked");
    }

    bagImg.classList.remove("hidden");
  });

  //제품수량 + 버튼
  quantityPlusBtn.addEventListener("click", () => {
    let number = parseInt(quantity.innerText);
    number += 1;
    quantity.innerText = number;
    updatedTotalPrice = number * parseInt(intedPerPrice);
    totalPrice.innerText = Number(updatedTotalPrice).toLocaleString("en");
  });
  //제품수량 - 버튼
  quantityMinusBtn.addEventListener("click", () => {
    let number = parseInt(quantity.innerText);
    number -= 1;
    if (number <= 0) number = 1;
    quantity.innerText = number;
    updatedTotalPrice = number * parseInt(intedPerPrice);
    totalPrice.innerText = Number(updatedTotalPrice).toLocaleString("en");
  });
});
