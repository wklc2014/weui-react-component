import { combineReducers } from 'redux';
import reducer_live from './reducer-live.js';
import reducer_news from './reducer-news.js';

const rootReducer = combineReducers({
    _live: reducer_live,
    _news: reducer_news,
});

export default rootReducer;