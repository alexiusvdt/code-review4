// business logik

function PizzaOven() {
  this.pizzaSize = "";
  this.pizzaToppings = [];
}

PizzaOven.prototype.addTopping = function(topping) {
  this.pizzaToppings.push(topping);
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