window.onload = function () {
  const title = document.querySelector(".title");
  const gender = document.querySelector("input[name='gender']:checked");
  const name = document.querySelector("input[name='name']");
  const nickname = document.querySelector("input[name='nickname']");
  const age = document.querySelector("input[name='age']");
  const birthday = document.querySelector("input[name='birthday']");
  const text = document.querySelector(".f_textarea");

  const sContents = document.querySelector(".s_contents");
  const button = document.querySelector(".s_btn");
  const contents = document.querySelectorAll(".f_contents");

  button.addEventListener("click", function () {
    check();
  });

  function check() {
    if (name.value == "") {
      alert("이름을 입력해 주세요.");
      name.focus();
    } else if (nickname.value == "") {
      alert("닉네임을 입력해 주세요.");
      nickname.focus();
    } else if (age.value == "") {
      alert("나이를 입력해 주세요.");
      age.focus();
    } else if (birthday.value == "") {
      alert("생일을 입력해 주세요.");
      birthday.focus();
    } else if (text.value == "") {
      alert("소개를 입력해 주세요.");
      text.focus();
    } else {
      title.innerText = "안녕하세요 " + name.value + "님!";
      contents[0].innerText = gender.value;
      gender.remove();
      contents[1].innerText = name.value;
      name.remove();
      contents[2].innerText = nickname.value;
      nickname.remove();
      contents[3].innerText = age.value;
      age.remove();
      contents[4].innerText = birthday.value;
      birthday.remove();
      contents[5].innerText = text.value;
      text.remove();
      button.classList.add("submitted");
      sContents.classList.add("submitted");
    }
  }
};
