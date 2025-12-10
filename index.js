const ratingComponent = document.querySelector(".rating__component");

const rating = document.querySelectorAll("li");

const submit = document.querySelector("a");

const box = document.querySelector(".box");

submit.addEventListener('click', ()=> {    //Makes white box display for now.
  ratingComponent.style.display = "none";
  box.style.display = "block";   
});

