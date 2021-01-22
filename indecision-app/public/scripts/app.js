"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "WTF"
    ),
    React.createElement(
        "p",
        null,
        "This is someone info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Zirth Starfighter"
    ),
    React.createElement(
        "p",
        null,
        "Age: Eternal"
    ),
    React.createElement(
        "p",
        null,
        "Location: Cyberspace"
    )
);

var appRoot = document.getElementById("app");

// Render this template in this element
ReactDOM.render(templateTwo, appRoot);
