"use strict";

var getFirstName = function getFirstName(fullName) {
    return fullName.split(" ")[0];
};
console.log(getFirstName("Daniel Persson"));

var getLastName = function getLastName(fullName) {
    return fullName.split(" ")[1];
};
console.log(getLastName("Daniel Persson"));
