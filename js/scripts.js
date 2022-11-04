// business logik

function PizzaOven() {
  this.size = "";
  this.toppings = [];
  this.price = 0;
}

PizzaOven.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

PizzaOven.prototype.addSize = function(size) {
  this.size = size;
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