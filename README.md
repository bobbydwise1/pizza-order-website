# _Pizza Ordering Website_

#### _Create Pizza Ordering Website using Object Orientated JavaScript._

#### By _Robert Lee_

## Description

_A website that allows the user to order pizza.  The user has the ability to pick different toppings, and a pizza size.  This website must utilize JavaScript objects._

## Setup/Installation Requirements

* Clone this repository using `git clone https://github.com/ `
* Navigate to the downloaded repo
* Launch `index.html` in a browser of your choice

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, jQuery, Git._

## Specifications

* Note, the website does not have user registration.
* Have a form that asks the user for their full name, address, and phone number, with a "Submit" button.
* Then display a form that shows the following options to the user:  A radio select for a pizza size, and a checkbox list for various pizza toppings.

* The user's pizza is created using a pizza JavaScript object.  We note that the pizza JavaScript object has at least the following properties: size, toppings, and price.

  * Input = User selects a pizza size from a radio list.  (Medium, Large, Family sizes.)
  * Output = graphic of a pizza pie of the relative sizes.  Note this graphic output should update immediately upon user selection.

  * Input = User is able to select pizza toppings via a "checkbox".
  * Output = graphics of the topping is overlayed on the pizza pie graphic immediately.

  * Input = If a topping is already selected, the user unchecks the box to unselect it.
  * Output = graphics of the topping is removed from the pizza pie graphic immediately.

  * Input = When ever the user changes pizza size or topping.
  * Output = There is a price adjustment shown on the side bar

* When the user is satisfied with their order, a unique pizza object is created.  There is a "Checkout" button to proceed to payment and ordering.
  * Input = User selects the "Checkout" button.
  * Output = User is shown a new "Checkout" screen.

* On the Checkout Screen, the user has the ability to review the pizza they ordered and the price.  There is then a confirm button and a cancel button.
  * Input = User picks the confirm button.
  * Output = User is shown "Your pizza is order has been confirmed".

  * Input = User picks the cancel button.
  * Output = User is asked "Are you sure?"  With a YES or NO option.

* (OPTIONAL) Allow the user to create more than 1 pizza, and properly sum the total price.

* (OPTIONAL) Create a receipt graphic.

### License

MIT License

Copyright (c) 2018, _Robert Lee_

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
