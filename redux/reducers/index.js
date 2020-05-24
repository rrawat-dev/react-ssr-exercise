import { combineReducers } from 'redux';
import news from './news.reducer';
import fullPageLoader from './fullPageLoader.reducer';

export default combineReducers({
    news,
    fullPageLoader
});