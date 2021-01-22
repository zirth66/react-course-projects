"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  "WTF"
);
var appRoot = document.getElementById("app");

// Render this template in this element
ReactDOM.render(template, appRoot);
