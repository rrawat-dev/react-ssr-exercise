import React, {Component} from 'react';
import HomePage from '../components/pages/HomePage/HomePage.connect';
import { fetchNewsAsyncAction } from '../redux/actions/news.actions';

export default class Home extends Component {
    static async getServerSideProps({req, store}) {
        const options = {"params": req.query || {}};

        return store.dispatch(fetchNewsAsyncAction(options));
    }

    constructor(props) {
        super(props);
    }


    render() {
        return <HomePage />;
    }
}