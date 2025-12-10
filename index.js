const ratingComponent = document.querySelector(".rating__component");

const rating = document.querySelectorAll("li");

const submit = document.querySelector("a");

const box = document.querySelector(".box");

submit.addEventListener("click", () => {
  //Makes white box display for now.
  ratingComponent.style.display = "none";
  box.style.display = "block";
});

rating.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "white";
    item.style.color = "hsl(216, 12%, 8%)";
  });
});

const myItems = document.querySelectorAll(".my-item");

myItems.forEach((item) => {
  item.textContent += " - Modified!";
  item.style.color = "red";
});
