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
PizzaConstructor.prototype.PizzaPriceFinal = function(pizzaSizePriceObjectArray, pizzaToppingsPriceObjectArray) {
  var tempFinalPrice = 0;
  var tempSize = this.pizzaSize;
  var tempToppings = this.pizzaToppings;
  console.log(tempFinalPrice, tempSize, tempToppings);
  for (i = 0; i < Object.keys(pizzaSizePriceObjectArray).length; i++)
  if (tempSize === pizzaSizePriceObjectArray.) {
    return
  }

}

//Logic for creating an empty prices object
function pricesArray() {
  this.priceListing = [],
  this.id = -1
}
//Logic for creating methods for the pricesArray object
pricesArray.prototype.addNewPrice = function(priceListing) {
  priceListing.id = this.assignId();
  this.priceListing.push(priceListing);
}
pricesArray.prototype.assignId = function() {
  this.id += 1;
  return this.id;
}
pricesArray.prototype.findAPriceForThis = function (someString) {
  console.log(this.length);
  for (i = 0; i < this.length; i++) {

  }
}

//Logic for the price constructor
function PriceConstructor(thingToBuy, price) {
  this.thingToBuy = thingToBuy,
  this.price = price,
  this.id = 0
}

//The below function creates the price array with an index
function priceArrayCreate(arrayOfStringItems, arrayOfPrices) {
  var tempObjectPairs = new pricesArray();
//console.log(tempObjectPairs);
  for (i = 0; i < arrayOfStringItems.length; i++) {
    var tempObjectPair = new PriceConstructor(arrayOfStringItems[i],arrayOfPrices[i]);
    tempObjectPairs.addNewPrice(tempObjectPair);
  }
  return tempObjectPairs;
}

//Test Database of user's pizzas
var userPizza1 = new PizzaConstructor("small", ["onions", "pineapples"]);
var userPizza2 = new PizzaConstructor("medium", ["pineapples"]);
var userPizza3 = new PizzaConstructor("large", ["sasuage", "bacon", "pepperoni"])
var usersNewListofPizzas = new UserPizzasArray();
usersNewListofPizzas.addNewPizza(userPizza1);
usersNewListofPizzas.addNewPizza(userPizza2);
usersNewListofPizzas.addNewPizza(userPizza3);
console.log(usersNewListofPizzas);
//Test Database of pizza size prices
var pizzaAvalibleSizes = ["small", "medium", "large"];
var pizzaAvalibleSizesPrices = [10, 20, 30];
var pizzaSizePriceObjectArray = priceArrayCreate(pizzaAvalibleSizes, pizzaAvalibleSizesPrices);
console.log(pizzaSizePriceObjectArray);
//Test Database of pizza toppings prices
var pizzaAvalibleToppings = ["pineapples", "onions", "sasauge", "bacon", "pepperoni"];
var pizzaAvalibleToppingsPrices = [1,2,3,4,5];
var pizzaToppingsPriceObjectArray = priceArrayCreate(pizzaAvalibleToppings, pizzaAvalibleToppingsPrices);
console.log(pizzaToppingsPriceObjectArray);











//UI Logic
$(document).ready(function() {

});
