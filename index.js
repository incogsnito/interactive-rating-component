const ratingComponent = document.querySelector(".rating__component");

const rating = document.querySelectorAll("li");

const submit = document.querySelector("button");

const box = document.querySelector(".thank-you");


submit.addEventListener("click", () => {
  ratingComponent.style.display = "none";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.gap = "3em";

});

rating.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "hsl(25, 97%, 53%)";
  });
});



