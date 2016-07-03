class SampleComponent extends React.Component {
    render() {
        const {text} = this.props;
        return (
            React.createElement("button", null, text)
        );
    }
}

const $sample = document.getElementById('js-sample');

ReactDOM.render(React.createElement(SampleComponent, {text: "button"}), $sample);