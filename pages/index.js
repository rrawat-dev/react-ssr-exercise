import React, {Component} from 'react';
import HomePage from '../components/pages/HomePage/HomePage.connect';
import { fetchNewsAsyncAction } from '../redux/actions/news.actions';

export default class Home extends Component {
    static async getServerSideProps({store}) {
        return store.dispatch(fetchNewsAsyncAction());
    }

    constructor(props) {
        super(props);
    }


    render() {
        return <HomePage />;
    }
}