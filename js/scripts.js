//Bussiness Logic for creating a list of the user's pizzas
function UserPizzasArray() {
  this.pizzas = [],
  this.id = -1
} //initializes the user's list of pizzaSize
UserPizzasArray.prototype.addNewPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}
UserPizzasArray.prototype.assignId = function() {
  this.id += 1;
  return this.id;
} //Note every pizza object in here should have an id property.

//Bussiness Logic for individual pizza objects
function PizzaConstructor(pizzaSize, pizzaToppings, pizzaPriceFinal) {
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings
}

//Logic for determining the intial price of a single pizza object
PizzaConstructor.prototype.PizzaPriceFinal = function() {
  var tempFinalPrice = 0;
  if (this.pizzaSize === "small") {
    tempFinalPrice += 10;
  } else if (this.pizzaSize === "medium") {
    tempFinalPrice += 20;
  } else if (this.pizzaSize === "large") {
    tempFinalPrice += 30;
  } else {}
  console.log("Pan Price price: " + tempFinalPrice);
  for (i = 0; i < this.pizzaToppings.length; i++) {
    if (this.pizzaToppings[i] === "sausage") {
      tempFinalPrice += 5;
    } else if (this.pizzaToppings[i] === "bacon") {
      tempFinalPrice += 4;
    } else if (this.pizzaToppings[i] === "pepperoni") {
      tempFinalPrice += 3;
    } else if (this.pizzaToppings[i] === "pineapples") {
      tempFinalPrice += 2;
    } else if (this.pizzaToppings[i] === "onions") {
      tempFinalPrice += 1;
    } else {}
    console.log("Pan Price price: " + tempFinalPrice);
    return tempFinalPrice;
  }
}
//Test Database of user's pizzas
var pizza1 = new PizzaConstructor("small", ["onions", "pineapples"]);
var pizza2 = new PizzaConstructor("medium", ["pineapples"]);
var pizza3 = new PizzaConstructor("large", ["sausage", "bacon", "pepperoni", "pineapples", "onions"])
var pizzas = new UserPizzasArray();
pizzas.addNewPizza(pizza1);
pizzas.addNewPizza(pizza2);
pizzas.addNewPizza(pizza3);
console.log(pizzas);










//UI Logic
$(document).ready(function() {

});
