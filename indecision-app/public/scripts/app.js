"use strict";

var text = "";
var visibility = false;
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById("app");

var render = function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            visibility ? "Hide details" : "Show details"
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "This is the details"
            )
        )
    );
    ReactDOM.render(jsx, appRoot);
};
render();
