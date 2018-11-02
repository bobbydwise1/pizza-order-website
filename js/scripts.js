//Bussiness Logic for creating a history object of user's pizzas.  Not used on this version.
function UserPizzasArray() {
  this.pizzas = [],
  this.id = 0
}
UserPizzasArray.prototype.addNewPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}
UserPizzasArray.prototype.assignId = function() {
  this.id += 1;
  return this.id;
}

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
      pizzaUser = new PizzaConstructor(size, choosenToppings);
      pizzasOfTheUser.addNewPizza(pizzaUser);  //This is an ongoing history of the pizzas - Not used
      $("span#outputPrice").html(pizzaUser.pizzaPriceFinal());
      // console.log(pizzaUser);
      // console.log(pizzasOfTheUser);
  });
});
