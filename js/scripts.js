// business logik

function PizzaOven() {
  this.size = "";
  this.toppings = [];
  this.price = 0;
  this.custName = "";
  this.bakeTime = 0;
}

PizzaOven.prototype.getToppings = function() {
  let toppings = [];
  const selections = document.querySelectorAll("input[type=checkbox]:checked") 
  for (i = 0; i < selections.length; i++) {
    this.toppings.push(selections[i].value);
  }
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


PizzaOven.prototype.addName = function(name) {
  this.custName = name;
}

PizzaOven.prototype.getBakeTime = function() {
  this.bakeTime = Math.floor(Math.random() * 101);
}


// ui logik

function handleFormSubmission() {
  event.preventDefault()
  let custName = document.getElementById("cust-name").value;
  let size = document.getElementById("sizes");
  let sizeValue = size.options[size.selectedIndex].value
  console.log('lets bake a pie:')
  let pizza = new PizzaOven();
  pizza.addSize(sizeValue);
  pizza.getToppings();
  pizza.addName(custName);
  pizza.getBakeTime();
  pizza.pizzaPrice(pizza);
  console.log('mmm, pizza! ', pizza)
}


window.addEventListener("load", function() {
  document.querySelector("form#pizza-builder").addEventListener("submit", handleFormSubmission);
})