//Bussiness Logic
function PizzaConstructor(pizzaSize, pizzaToppings, pizzaPriceFinal) {
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings
}

PizzaConstructor.prototype.PizzaPriceFinal = function(pizzaObject, pizzaPropertyArray, ojectArrayString, objectArrayPrice) {
  var tempFinalPrice = 0;
  pizzaObject.forEach()
}

function PriceConstructor(singleItem, price, id) {
  this.singleItem = singleItem,
  this.price = price,
  this.id = id
}

function priceSummer(stringToSearch,priceArray) {
  var tempPrice = priceArray.singleItem.search(stringToSearch);
}

//The below function creates the price array with an index
function priceArrayCreate(arrayOfStringItems, arrayOfPrices) {
var tempObjectPairs = [];
  for (i = 0; i < arrayOfStringItems.length; i++) {
    var tempObjectPair = new PriceConstructor(arrayOfStringItems[i],arrayOfPrices[i], i);
    tempObjectPairs.push(tempObjectPair);
  }
  return tempObjectPairs;
}

function insertIndexToAnArrayOfObjects(arrayOfObjects) {
  for (i = 0; i < arrayOfObjects.length; i++) {
    arrayOfObjects[i].push(i);
  }
  return arrayOfObjects;
}

var userPizza1 = new PizzaConstructor("small", ["onions", "pineapples"]);
var userPizza2 = new PizzaConstructor("small", ["pineapples"]);
var userPizzasArray = [userPizza1,userPizza2];
console.log(userPizzasArray);

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
