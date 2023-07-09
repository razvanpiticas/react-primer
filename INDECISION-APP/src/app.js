class IndecisionApp extends React.Component {

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of your computer";
        const options = ["Thing One", "Thing Two", "Thing Four"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    };
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (

            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subtitle}</h1>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("handle Pick");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert("Remove All");
    }

    render() {

        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {
                        this.props.options.map(i => <Option key={i} optionText={i} />)
                    }
                </ol>

            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));