class SampleComponent extends React.Component {
    constructor(pops){
        super(pops);

        this.setClass();
    }

    setClass() {
        this.className += ' is-active';
    }

    render() {
        const {text} = this.props;

        return (
            React.createElement("button", {className: "button"}, text)
        );
    }
}

const $sample = document.getElementById('js-sample');

ReactDOM.render(React.createElement(SampleComponent, {text: "button", onClick: "{this.setClass}"}), $sample);