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

PizzaConstructor.prototype.PizzaPriceFinal = function(pizzaObject, pizzaSizePriceObjectArray, pizzaToppingsPriceObjectArray) {
  var tempFinalPrice = 0;

}

function PriceConstructor(singleItem, price) {
  this.singleItem = singleItem,
  this.price = price,
  this.id = 0
}

//The below function creates the price array with an index
function priceArrayCreate(arrayOfStringItems, arrayOfPrices) {
var tempObjectPairs = [];
  for (i = 0; i < arrayOfStringItems.length; i++) {
    var tempObjectPair = new PriceConstructor(arrayOfStringItems[i],arrayOfPrices[i]);
    tempObjectPair.id = i;  //a better way to assign a unique ID when your starting data is fixed
    tempObjectPairs.push(tempObjectPair);
  }
  return tempObjectPairs;
}

//Test Database
var userPizza1 = new PizzaConstructor("small", ["onions", "pineapples"]);
var userPizza2 = new PizzaConstructor("medium", ["pineapples"]);
var userPizza3 = new PizzaConstructor("large", ["sasuage", "bacon", "pepperoni"])
var usersNewListofPizzas = new UserPizzasArray();
usersNewListofPizzas.addNewPizza(userPizza1);
usersNewListofPizzas.addNewPizza(userPizza2);
usersNewListofPizzas.addNewPizza(userPizza3);
console.log(usersNewListofPizzas);

var pizzaAvalibleSizes = ["small", "medium", "large"];
var pizzaAvalibleSizesPrices = [10, 20, 30];
var pizzaSizePriceObjectArray = priceArrayCreate(pizzaAvalibleSizes, pizzaAvalibleSizesPrices);
console.log(pizzaSizePriceObjectArray);

var pizzaAvalibleToppings = ["pineapples", "onions", "sasuage", "bacon", "pepperoni"];
var pizzaAvalibleToppingsPrices = [1,2,3,4,5];
var pizzaToppingsPriceObjectArray = priceArrayCreate(pizzaAvalibleToppings, pizzaAvalibleToppingsPrices);
console.log(pizzaToppingsPriceObjectArray);











//UI Logic
$(document).ready(function() {

});
