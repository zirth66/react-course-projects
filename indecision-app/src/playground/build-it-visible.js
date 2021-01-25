let text = ""
let visibility = false
const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const appRoot = document.getElementById("app");

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? "Hide details" : "Show details"}</button>
            {visibility && (
                <div>
                    <p>This is the details</p>
                </div>
            )
            }
        </div>
    )
    ReactDOM.render(jsx, appRoot);
}
render()







