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
            <button className="button">{text}</button>
        );
    }
}

const $sample = document.getElementById('js-sample');

ReactDOM.render(<SampleComponent text="button" onClick="{this.setClass}" />, $sample);