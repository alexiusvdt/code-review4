// business logik

function PizzaOven() {
  this.size = "";
  this.toppings = [];
  this.price = 0;
  this.custName = "";
  
}

PizzaOven.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

PizzaOven.prototype.addSize = function(size) {
  this.size = size;
}

PizzaOven.prototype.pizzaPrice = function(pizzaToPrice) {
  let baseCost = 15
  let toppingCost = pizzaToPrice.toppings.length
  if (pizzaToPrice.size === "x-large") {
    baseCost = 26.00
  } else if (pizzaToPrice.size === "large") {
    baseCost = 21.00
  }
  let price = baseCost + (toppingCost * 0.75)
  this.price = price  
}
  
function getToppings() {
  let toppings = [];
  const selections = document.querySelectorAll("input[type=checkbox]:checked") 
  for (i = 0; i < selections.length; i++) {
    toppings.push(selections[i].value);
  }
}


// ui logik

function handleFormSubmission() {
  event.preventDefault()
  let custName = document.getElementById("cust-name").value;
  let size = document.getElementById("sizes");
  let sizeValue = size.options[size.selectedIndex].value
    // console.log('customername ', custName, "wants a ", sizeValue);
  let pizza = new PizzaOven()
  pizza.addSize(sizeValue);
  toppings = getToppings()
  console.log('getToppings() successful ')
  pizza.addTopping(toppings);
  console.log('pizza toppings added to object!', pizza)
}


window.addEventListener("load", function() {
  document.querySelector("form#pizza-builder").addEventListener("submit", handleFormSubmission);
})