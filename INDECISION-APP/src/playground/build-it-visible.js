// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

const appRoot = document.getElementById("app");

let visible = false;

const toggleVisibility = () => {
    if(visible){
        visible = false;
    } else {
        visible = true;
    }
    
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visible ? "Hide details" : "Show details"}</button>
            {visible && <p>Hey. These are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

