import React, {Component} from 'react';

export default class Home extends Component {
    static async getServerSideProps({store}) {
        store.dispatch({
            type: 'SHOW_FULLPAGE_LOADER',
            payload: true
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }


    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
        <h1 onClick={this.increment}>{this.state.count}</h1>
        );
    }
}