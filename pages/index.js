import React, {Component} from 'react';

export default class Home extends Component {
    static async getServerSideProps() {
        console.log('getServerProps()');
        return {
            fname: "Rakesh"
        };
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