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
function PizzaConstructor(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings
}

//Logic for determining the intial price of a single pizza object
PizzaConstructor.prototype.pizzaPriceFinal = function() {
  var tempFinalPrice = 0;
  if (this.pizzaSize === "small") {
    tempFinalPrice += 10;
  } else if (this.pizzaSize === "medium") {
    tempFinalPrice += 20;
  } else if (this.pizzaSize === "large") {
    tempFinalPrice += 30;
  } else {}
  for (i = 0; i < this.pizzaToppings.length; i++) {
    if (this.pizzaToppings[i] === "sausage") {
      tempFinalPrice += 5;
    }
    if (this.pizzaToppings[i] === "bacon") {
      tempFinalPrice += 4;
    }
    if (this.pizzaToppings[i] === "pepperoni") {
      tempFinalPrice += 3;
    }
    if (this.pizzaToppings[i] === "pineapples") {
      tempFinalPrice += 2;
    }
    if (this.pizzaToppings[i] === "onions") {
      tempFinalPrice += 1;
    }
  }
  return tempFinalPrice;

}
//Test Database of user's pizzas
// var pizza1 = new PizzaConstructor("small", ["onions", "pineapples"]);
// var pizza2 = new PizzaConstructor("medium", ["pineapples"]);
// var pizza3 = new PizzaConstructor("large", ["sausage", "bacon", "pepperoni", "pineapples", "onions"])
// var pizzas = new UserPizzasArray();
// pizzas.addNewPizza(pizza1);
// pizzas.addNewPizza(pizza2);
// pizzas.addNewPizza(pizza3);
// console.log(pizzas);
// console.log("1st pizza costs: " + pizza1.pizzaPriceFinal());
// console.log("2nd pizza costs: " + pizza2.pizzaPriceFinal());
// console.log("3rd pizza costs: " + pizza3.pizzaPriceFinal());







var pizzasOfTheUser = new UserPizzasArray();
//UI Logic
$(document).ready(function() {
  $("form#checkbox-pizza-toppings").submit(function(event){
      event.preventDefault();
      var size = $("input:radio[name=input-size]:checked").val();
      var choosenToppings = [];
      $("input:checkbox[name=checkbox-pizza-toppings]:checked").each(function() {
        choosenToppings.push($(this).val());
      });
      console.log(size, choosenToppings);
      pizzaUser = new PizzaConstructor(size, choosenToppings);
      console.log(pizzaUser);
      pizzasOfTheUser.addNewPizza(pizzaUser);
      $("span#outputPrice").html(pizzasOfTheUser.pizzas[0].pizzaPriceFinal());
  });
});
