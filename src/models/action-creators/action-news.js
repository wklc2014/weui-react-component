import is from 'is_js';
import moment from 'moment';
import Mock from 'mockjs';
import * as services from '../services/index.js';
import ACTION_TYPES from '../action-types/index.js';

export function getNewsList() {
  return (dispatch, getState) => {

    dispatch({
      type: ACTION_TYPES.LOADING_NEWS_LIST,
      payload: true,
    })

    services.getNewsList().then(resp => {
      // const data = resp;
      const data = resp.data;
      const list = is.array(data) ? data : [];
      const filterList = list.filter(v => v.thumbnail.indexOf('http://tu.duoduocdn.com') === -1);
      // console.error('>>>', JSON.stringify(filterList));
      const newsList = filterList.map((v, i) => {
          return {
            id: i,
            src: v.thumbnail,
            title: v.title,
            label: v.label,
            type: v.type,
            time: moment(v.createtime).format('MM-DD HH:mm'),
            commentCount: Mock.Random.natural(0, 999),
          }
        })
      dispatch({
        type: ACTION_TYPES.GET_NEWS_LIST,
        payload: newsList,
      })
      dispatch({
        type: ACTION_TYPES.LOADING_NEWS_LIST,
        payload: false,
      })
    }).catch(e => {
      dispatch({
        type: ACTION_TYPES.LOADING_NEWS_LIST,
        payload: false,
      })
    })
  }
}



