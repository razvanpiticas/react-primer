const appRoot = document.getElementById("app");

const app = {
    title: "Indecision App",
    subtitle: "super duper app",
    options: []
};

const user = {
    name: "Pete",
    age: 35,
    location: "New York"
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";

        render();
    }
};

const onRemoveAll = () => {
    app.options = [];

    render();
};

const getLocation = (location) => location ? <p>Location: {location}</p> : undefined;

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map(i => {
                        return <li key={i}>{i}</li>
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
