import React from 'react';
import {connect} from "react-redux";
import { fetchNewsAsyncAction, hideNewsItemAsyncAction, upvoteNewsItemAsyncAction } from '../../../redux/actions/news.actions';

import NewsList from './NewsList.component';

function mapStateToProps(state) {

    let hiddenNewsItems = [];
    let upvotedNewsItems = {};

    if (global && global.localStorage) {
        hiddenNewsItems = JSON.parse(localStorage.getItem('hiddenNewsItems') || '[]');
        upvotedNewsItems = JSON.parse(localStorage.getItem('upvotedNewsItems') || '{}');
    }

    const upvotedNewsItemsKeys = Object.keys(upvotedNewsItems);

    return {
        fullPageLoader: state.fullPageLoader,
        news: {
            ...state.news,
            hits: (state.news.hits || []).filter((item) => {
                return hiddenNewsItems.indexOf(item.objectID) === -1;
            }).map((item) => {
                if (upvotedNewsItemsKeys.indexOf(item.objectID) > -1) {
                    return {
                        ...item,
                        points: upvotedNewsItems[item.objectID].points
                    };
                }

                return item;
            })
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNews: (options) => dispatch(fetchNewsAsyncAction(options)),
        hideNewsItem: (id) => dispatch(hideNewsItemAsyncAction(id)),
        upvoteNewsItem: (id, points) => dispatch(upvoteNewsItemAsyncAction(id, points)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);