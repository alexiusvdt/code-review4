// business logik

function PizzaOven() {
  this.pizzaSize = "";
  this.pizzaToppings = [];
  this.pizzaPrice = 0;
}

PizzaOven.prototype.addTopping = function(topping) {
  this.pizzaToppings.push(topping);
}

PizzaOven.prototype.addSize = function(size) {
  this.pizzaSize = size;
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