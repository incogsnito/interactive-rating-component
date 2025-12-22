const ratingComponent = document.querySelector(".rating__component");

const rating = document.querySelectorAll("li");

const submit = document.querySelector("button");

const box = document.querySelector(".thank-you");

const afterRate = document.querySelector(".rate");

box.classList.add("invisible");

let selectedRating = null;

//Changes state

rating.forEach((item) => {
  item.addEventListener("click", (e) => {
    // Grabs the id(data);
    const target = e.target;
    const targetId = e.target.id;

    // cycles through, removes active class
    rating.forEach((num) => {
      num.classList.remove("active");
    });

    // Brings back one active class
    item.classList.add("active");

    // Gives var a new value
    selectedRating = targetId;
  });
});

submit.addEventListener("click", () => {
  if (selectedRating) {
    ratingComponent.classList.add("invisible");
    box.classList.remove("invisible") && add("thank-you");
    afterRate.textContent = "You selected " + selectedRating + " out of 5";
  } else {
    alert("Please select a rating first");
  }
});
