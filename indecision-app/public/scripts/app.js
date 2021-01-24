"use strict";

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
    //console.log(arguments) // arguments is not defined
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

var user = {
    name: "Daniel",
    cities: ["Kristinehamn", "Göteborg", "Sunne"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
