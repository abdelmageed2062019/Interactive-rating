var numbers = document.querySelectorAll(".rate-item");
var btn = document.querySelector(".btn");
var cardContainer = document.getElementById("cardContainer");
var thanks = document.querySelector(".thanks");
var rateResult = document.getElementById("rateResult");

var rate = 0;
var rateNum = null;

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    numbers.forEach((button) => {
      button.classList.remove("active");
    });
    rateNum = num;
    rateNum.classList.add("active");
    rate = Number(num.innerHTML);
  });
});

btn.addEventListener("click", () => {
  if (rate === 0) {
    return;
  } else {
    cardContainer.style.display = "none";
    thanks.style.display = "flex";
    rateResult.innerHTML = `
          You selected ${rate} out of 5
     `;
  }
});
