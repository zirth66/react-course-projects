console.log("App.js is running");

// JSX - JavaScript XML
//const template = <p>This is JSX from app.js</p>;
var template = /*#__PURE__*/React.createElement("h1", {
    id: "someid"
  }, "This is JSX from app.js");
const appRoot = document.getElementById("app");

// Render this template in this element
ReactDOM.render(template, appRoot);