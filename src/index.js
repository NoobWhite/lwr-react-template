
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: '大笨钟'
        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('static getDerivedStateFromProps', props, state);
    }

    componentDidMount() {
        console.log('componentDidMount', this.state.count);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count === 3) {
            return false;
        }
        console.log('shouldComponentUpdate', this.state.count, nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', this.state.count, prevProps, prevState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', this.state.count, prevProps, prevState);
        console.log('==========================================');
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error);
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo);
    }

    handleAdd() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        console.log('render', this.state.count);
        return (
            <div>
                你好，我的{this.state.name}{this.state.count}
                <button onClick={() => this.handleAdd()}>点击新增Count</button>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'))
