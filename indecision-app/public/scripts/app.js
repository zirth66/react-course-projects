"use strict";

console.log("App.js is running");

var app = {
    title: "Indecision App",
    subtitle: "When you cant decide",
    options: ["One", "Two"]

    // JSX - JavaScript XML
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
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
var user = {
    name: "Daniel",
    age: 40,
    location: "Sweden"
};
var getLocation = function getLocation(location) {
    return location ? React.createElement(
        "p",
        null,
        "Location: ",
        location
    ) : "";
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

// Render this template in this element
ReactDOM.render(template, appRoot);
