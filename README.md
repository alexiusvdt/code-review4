# Urza's Pizza Mine

#### By Alex Johnson

#### a short code review project for javascript (week 4)

## Technologies Used

* HTML
* CSS
* JavaScript
* bootstrap

## Description/objectives
Pizza Parlor
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.


Check out the live [github pages site](https://alexiusvdt.github.io/code-review4/)

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## TESTS

Describe PizzaOven()

Test: It should return a PizzaOven object with properties for size, toppings, and price as well as customer name
code: let pizza = new PizzaOven("large", ["pineapple", "tomato"], 10.99);
result: PizzaOven {size: "large", toppings ["pineapple", "tomato"], 10.99, "Geoff"}


Describe PizzaOven.prototype.addToppings

Test: It should add any selected topping(s) to the PizzaOven.pizzaToppings property.
code: PizzaOven.prototype.addTopping("Salami");
result: PizzaOven {size: "", toppings ["Salami"]}


Describe PizzaOven.prototype.addSize

Test: It should add a size to the PizzaOven.pizzaSize property.
code: PizzaOven.prototype.addSize("large");
result: PizzaOven {size: "large", toppings []}


Describe PizzaOven.prototype.pizzaPrice

Test: it should return a price based on property values of the PizzaOven
code: PizzaOven.prototype.pizzaPrice(), PizzaOven (size: "large", toppings ["ham", "cheese"], price: ); 
result: PizzaOven.price: 22.50
cost logic:
pie sizes: regular, large, x-large| 15.00, 21.00, 26.00
toppings: .75 ea


Describe PizzaOven.prototype.bakeTime

Test: it should return a random integer (x) where 0 <= x <= 100
code: PizzaOven.prototype.bakeTime
result: random integer (x) where 0 <= x <= 100


Describe PizzaOven.prototype.assemblePie

Test: it should run the various prototype methods required to populate an order for the customer
code: PizzaOven.prototype.assemblePie
result: all PizzaOven.prototypes performed to instance of object


Describe OrderTracker()

Test: it will create an Object called OrderTracker with no properties
code: OrderTracker
result: OrderTracker



# ideas for addl tests:
* allow user to order multiple pizzas at once
* provide user with preset pizza options instead of entirely a la carte
* add premium toppings that cost more
* add premium crusts
* add premium sauces

## Known Bugs

* If you find additional bugs not listed here, please email me at alex.johnson293@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**


## Additional thanks

* coffee
* Richard Garfield, PhD
* Susuwatari - feline debugger extraordinaire and moral support


## License
MIT License

Copyright (c) 2022 Alex Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.