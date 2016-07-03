class SampleComponent extends React.Component {
    render() {
        const {text} = this.props;
        return (
            <button>{text}</button>
        );
    }
}

const $sample = document.getElementById('js-sample');

ReactDOM.render(<SampleComponent text="button" />, $sample);