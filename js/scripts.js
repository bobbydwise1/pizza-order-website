//Bussiness Logic
function PizzaConstructor(pizzaSize, pizzaToppings, pizzaPriceFinal) {
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings,
  this.pizzaPriceFinal = pizzaPriceFinal
}

function PriceConstructor(singleItem, price) {
  this.singleItem = singleItem,
  this.price = price
}

var pizzaAvalibleSizes = ["small", "medium", "large"];
var pizzaAvalibleSizesPrices = [10, 20, 30];

function PizzaSizePricesArray(pizzaAvalibleSizes,pizzaAvalibleSizesPrices) {
  for (i = 0; i < pizzaAvalibleSizes.length; i++) {
    
  }
//var pizzaSizePrices = new PriceConstructor(pizzaAvalibleSizes, pizzaAvalibleSizesPrices);

var pizzaAvalibleToppings = ["pineapples", "onions", "sasuage", "bacon", "pepperoni"];
var pizzaAvalibleToppingsPrices = [1,2,3,4,5];
//var pizzaToppingsPrices = new PriceConstructor(pizzaAvalibleToppings, pizzaAvalibleToppingsPrices);

var pizza1 = new PizzaConstructor("string", "string", "string");
console.log(pizza1);


//UI Logic
$(document).ready(function() {

});
