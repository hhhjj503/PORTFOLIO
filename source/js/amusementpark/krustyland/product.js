window.addEventListener("load", function () {
  const html = document.querySelector("html");
  const mainBar = document.querySelector(".main__bar");
  const mainBanner = document.querySelector(".main__banner");

  window.addEventListener("scroll", () => {
    if (
      html.scrollTop > mainBanner.offsetHeight
      //- mainBar.offsetHeight && topNav.offsetHeight !== 0
    ) {
      //pc일때 fixed 위치조정
      mainBar.style.position = "fixed";
      mainBar.style.top = "0px";
    } else {
      mainBar.style.position = "relative";
      mainBar.style.top = 0;
    }
  });

  /*
  const reviewPager = document.querySelector(".goods-review .review-pager");
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
  }*/

  //a 태그를 동적으로 만든후 click 이벤트 자동호출

  //가격을 localString 으로 바꾸고 int 로 바뀐값을 별도로 또 사용
  //localString 을 적용하면 숫자가 아니게됨

  /*
  intedPerPrice = selectedGoods.dataset.price;
  perPrice.innerText = Number(perPrice.innerText).toLocaleString("en");

  quantity.innerText = 1;
  productTotalPrice.innerText = Number(selectedGoods.dataset.price).toLocaleString(
    "en"
  );*/

  //하트이미지 클릭시 이미지변경후 애니메이션 효과작동
  const productHeartBtn = document.querySelector(".product__heart-btn");
  const productHeartImg = document.querySelector(".product__heart-img");
  const productBag = document.querySelector(".product__bag");
  const productBagImg = document.querySelector(".product__bag-img");
  const sliderSlideImg = document.querySelector(".slider__slide .img");

  const heartImgSource =
    "../../source/images/amusementpark/krustyland/heart-regular.svg";
  const FilledHeartImgSource =
    "../../source/images/amusementpark/krustyland/heart-solid.svg";

  let productHeartImgWorking = false;
  productHeartImg.addEventListener("click", function () {
    if (
      !productHeartImg.classList.contains("clicked") &&
      productHeartImgWorking == false
    ) {
      bagImgAnimation();
      productHeartImg.src = FilledHeartImgSource;
    } else {
      //하트이미지로 변경
      productHeartImg.src = heartImgSource;
      removeClass(productHeartImg, "clicked");
    }
    removeClass(productBagImg, "hidden");
  });

  productHeartBtn.addEventListener("keydown", function (e) {
    if (e.key != "Enter") return;
    if (
      !productHeartImg.classList.contains("clicked") &&
      productHeartImgWorking == false
    ) {
      bagImgAnimation();
      productHeartImg.src = FilledHeartImgSource;
    } else {
      //하트이미지로 변경
      productHeartImg.src = heartImgSource;
      removeClass(productHeartImg, "clicked");
    }
    removeClass(productBagImg, "hidden");
  });

  //제품수량 + 버튼
  const quantityControlBtnPlus = this.document.querySelector(
    ".quantity__control-btn--plus"
  );
  const quantityControlBtnMinus = this.document.querySelector(
    ".quantity__control-btn--minus"
  );
  const quantityCount = document.querySelector(".quantity__count");
  const productTotalPrice = document.querySelector(".product__total-price");
  const intedPerPrice = productTotalPrice.innerText.replace(",", "");
  let updatedproductTotalPrice = 0;

  quantityControlBtnPlus.addEventListener("click", () => {
    let quantity = parseInt(quantityCount.innerText);

    quantity += 1;
    quantityCount.innerText = quantity;
    updatedproductTotalPrice = quantity * parseInt(intedPerPrice);
    productTotalPrice.innerText = Number(
      updatedproductTotalPrice
    ).toLocaleString("en");
  });

  //제품수량 - 버튼
  quantityControlBtnMinus.addEventListener("click", () => {
    let quantity = parseInt(quantityCount.innerText);
    quantity -= 1;
    if (quantity <= 0) quantity = 1;
    quantityCount.innerText = quantity;
    updatedproductTotalPrice = quantity * parseInt(intedPerPrice);
    productTotalPrice.innerText = Number(
      updatedproductTotalPrice
    ).toLocaleString("en");
  });

  function getImgSource(sourceImg, unSourcedImg) {
    unSourcedImg.src = sourceImg.src;
  }
  function getImgAlt(altImg, unAltedimg) {
    unAltedimg.alt = altImg.alt;
  }

  function addClass(element, className) {
    element.classList.add(className);
  }

  function removeClass(element, className) {
    element.classList.remove(className);
  }

  function bagImgAnimation() {
    productHeartImgWorking = true;

    //애니메이션 효과를 위한 클래스추가
    addClass(productHeartImg, "clicked");
    getImgSource(sliderSlideImg, productBagImg);
    getImgAlt(sliderSlideImg, productBagImg);
    addClass(productBagImg, "shown");
    addClass(productBag, "rotate");

    //애니메이션 시간이 지난뒤 다시 숨김
    setTimeout(() => {
      removeClass(productBag, "rotate");
      removeClass(productBagImg, "shown");
      addClass(productBagImg, "hidden");
    }, 300);

    setTimeout(() => {
      productHeartImgWorking = false;
    }, 700);
  }

  /**
   * 상품이미지 클릭시 a태그의 의 innerText 와 전체리뷰수를 파라미터로 받아
   * 보여줄  tr 태그만 클래스를 추가해주는 함수 (댓글을 불러오는 함수)
   * @param {string} pagernumberText
   * @param {string} reviewCountsText
   */
  /*
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
  }*/
});
