window.addEventListener("load", function () {
  const html = document.querySelector("html");
  const menu = document.querySelector(".menu");
  const background = document.querySelector(".banner-wrapper"); //background > banner-wrapper

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
  totalPrice.innerText = Number(selectedGoods.dataset.price).toLocaleString(
    "en"
  );*/

  //하트클릭시 이미지변경
  const dibImg = document.querySelector(".dib img");
  const shoppingBag = document.querySelector(".shopping-bag");
  const bagImg = document.querySelector(".shopping-bag img");
  const productImg = document.querySelector(".slider img");

  const heartImg =
    "../../source/images/amusementpark/krustyland/heart-regular.svg";
  const FillHeartImg =
    "../../source/images/amusementpark/krustyland/heart-solid.svg";
  dibImg.addEventListener("click", function () {
    if (!dibImg.classList.contains("clicked")) {
      dibImg.classList.add("clicked");
      bagImg.src = productImg.src;
      bagImg.alt = productImg.alt;
      shoppingBag.classList.add("rotate");
      bagImg.classList.add("shown");
      setTimeout(() => {
        bagImg.classList.remove("shown");
        bagImg.classList.add("hidden");
        shoppingBag.classList.remove("rotate");
      }, 300);
      dibImg.src = FillHeartImg;
    } else {
      dibImg.src = heartImg;
      dibImg.classList.remove("clicked");
    }

    bagImg.classList.remove("hidden");
  });

  dibImg.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      if (!dibImg.classList.contains("clicked")) {
        dibImg.classList.add("clicked");
        bagImg.src = productImg.src;
        bagImg.alt = productImg.alt;
        shoppingBag.classList.add("rotate");
        bagImg.classList.add("shown");
        setTimeout(() => {
          bagImg.classList.remove("shown");
          bagImg.classList.add("hidden");
          shoppingBag.classList.remove("rotate");
        }, 300);
        dibImg.src = FillHeartImg;
      } else {
        dibImg.src = heartImg;
        dibImg.classList.remove("clicked");
      }
    }

    bagImg.classList.remove("hidden");
  });

  //제품수량 + 버튼
  const quantityPlusBtn = this.document.querySelector(".plus");
  const quantityMinusBtn = this.document.querySelector(".minus");
  const value = document.querySelector(".value");
  const totalPrice = document.querySelector(".total-price");
  const intedPerPrice = totalPrice.innerText.replace(",", "");
  let updatedTotalPrice = 0;

  quantityPlusBtn.addEventListener("click", () => {
    let quantity = parseInt(value.innerText);

    quantity += 1;
    value.innerText = quantity;
    updatedTotalPrice = quantity * parseInt(intedPerPrice);
    totalPrice.innerText = Number(updatedTotalPrice).toLocaleString("en");
  });

  //제품수량 - 버튼
  quantityMinusBtn.addEventListener("click", () => {
    let quantity = parseInt(value.innerText);
    quantity -= 1;
    if (quantity <= 0) quantity = 1;
    value.innerText = quantity;
    updatedTotalPrice = quantity * parseInt(intedPerPrice);
    totalPrice.innerText = Number(updatedTotalPrice).toLocaleString("en");
  });

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
