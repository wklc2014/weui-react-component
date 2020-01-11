import * as APIS from '../../utils/api.js';
import request from '../../utils/request.js';

export function getNewsList(params) {
  return request(APIS.getNewsList, params);
}