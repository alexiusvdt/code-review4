// business logik

function PizzaOven() {
  this.pizzaSize = "";
  this.pizzaToppings = {};
}




// ui logik

function handleFormSubmission() {
  event.preventDefault
  //get data from pizza object 
  //etc
}


window.addEventListener("load", function() {
  document.querySelector("form#id").addEventListener("submit", handleFormSubmission)
})