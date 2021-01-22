console.log("App.js is running");

// JSX - JavaScript XML
const template = (
    <div>
        <h1>WTF</h1> 
        <p>This is someone info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const templateTwo = (
    <div>
        <h1>Zirth Starfighter</h1>
            <p>Age: Eternal</p>
            <p>Location: Cyberspace</p>
    </div>
);

const appRoot = document.getElementById("app");

// Render this template in this element
ReactDOM.render(templateTwo, appRoot);

