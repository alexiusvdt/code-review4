// business logik
function PizzaOven(sizeValue, custName) {
  this.size = sizeValue;
  this.toppings = [];
  this.price = 0;
  this.custName = custName;
  this.bakeTime = 0;
}

PizzaOven.prototype.getToppings = function () {
  const selections = document.querySelectorAll("input[type=checkbox]:checked")
  for (let i = 0; i < selections.length; i++) {
    this.toppings.push(selections[i].value);
  }
}

PizzaOven.prototype.pizzaPrice = function () {
  let baseCost = 15
  let toppingCost = this.toppings.length
  if (this.size === "x-large") {
    baseCost = 26.00
  } else if (this.size === "large") {
    baseCost = 21.00
  }
  let price = baseCost + (toppingCost * 0.75)
  this.price = price
}

PizzaOven.prototype.getBakeTime = function () {
  this.bakeTime = Math.floor((Math.random() * 101) + 1);
}


// ui logik

function handleFormSubmission() {
  event.preventDefault();
  resetHidden();
  let custName = document.getElementById("cust-name").value;
  let size = document.getElementById("sizes");
  let sizeValue = size.options[size.selectedIndex].value;
  // console.log('lets bake a pie:')
  let pizza = new PizzaOven(sizeValue, custName);
  pizza.getBakeTime();
  pizza.getToppings();
  pizza.pizzaPrice();
  // console.log('mmm, pizza! what a beauty: ', pizza)
  printOrder(pizza);
}

function resetHidden() {
  document.getElementById("order-result").setAttribute("name", "-hidden");
}

function printOrder(pizza) {
  document.querySelector("[name=-hidden").removeAttribute("name");
  document.getElementById("order-name").innerText = pizza.custName;
  document.getElementById("bake-time").innerText = pizza.bakeTime;
  document.getElementById("order-cost").innerText = Intl.NumberFormat('en-US', { style: 'currency', currency: "USD" }).format(pizza.price);
}

window.addEventListener("load", function () {
  document.querySelector("form#pizza-builder").addEventListener("submit", handleFormSubmission);
  // document.querySelector("#bake-it").addEventListener("click", handleFormSubmission);
})