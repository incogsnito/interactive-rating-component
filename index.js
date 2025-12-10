const ratingComponent = document.querySelector(".rating__component");

const rating = document.querySelectorAll("li");

const submit = document.querySelector("button");

const box = document.querySelector(".box");

submit.addEventListener("click", () => {
  //Makes white box display for now.
  ratingComponent.style.display = "none";
  box.style.display = "block";

});

rating.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "hsl(25, 97%, 53%)";
  });
});


for(let i = 0; i <= 4; i++){
  console.log("Hello")
}