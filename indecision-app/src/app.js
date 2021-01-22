console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "When you cant decide"
}

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const user = {
    name: "Daniel",
    age: 40,
    location: "Sweden"
}

const templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const appRoot = document.getElementById("app");

// Render this template in this element
ReactDOM.render(template, appRoot);

