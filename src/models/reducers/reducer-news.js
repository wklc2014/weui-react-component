import ACTION_TYPES from '../action-types/index.js';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_NEWS_LIST:
      return { ...state, newsList: payload };
    case ACTION_TYPES.LOADING_NEWS_LIST:
      return { ...state, loading: payload };
    default:
      return state;
  }
}