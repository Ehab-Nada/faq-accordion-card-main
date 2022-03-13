let question = document.querySelectorAll(".q");
let icon = document.querySelectorAll(".icon");

window.onload = function () {
  question[1].click();
};

question.forEach((e) => {
  e.addEventListener("click", function () {
    answer = e.parentElement.nextElementSibling;
    if (answer.className === "answer") {
      answer.className += " active";
      answer.style.display = "block";
      e.style.fontWeight = "700";
      e.nextElementSibling.style.transform = "rotate(180deg)";
    } else if (answer.className === "answer active") {
      answer.className = "answer";
      answer.style.display = "none";
      e.style.fontWeight = "400";
      e.nextElementSibling.style.transform = "rotate(0deg)";
    }
  });
});
icon.forEach((e) => {
  e.addEventListener("click", function () {
    answer = e.parentElement.nextElementSibling;
    if (answer.className === "answer") {
      answer.className += " active";
      answer.style.display = "block";
      e.style.transform = "rotate(180deg)";
      e.previousElementSibling.style.fontWeight = "700";
    } else if (answer.className === "answer active") {
      answer.className = "answer";
      answer.style.display = "none";
      e.style.transform = "rotate(0deg)";
      e.previousElementSibling.style.fontWeight = "400";
    }
  });
});
