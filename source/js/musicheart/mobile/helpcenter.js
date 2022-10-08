window.onload = function () {
  const questions = document.querySelectorAll(".question");
  const answers = document.querySelectorAll(".answer");

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
      show(answers[i]);
    });
  }

  function show(answer) {
    if (!answer.classList.contains("show")) {
      answer.classList.add("show");
    } else {
      answer.classList.remove("show");
    }
  }
};
