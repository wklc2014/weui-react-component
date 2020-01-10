/**
 * 新闻列表
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { DEFAULT_IMAGE } from '../../utils/const.js';
import styles from './styles.less';

function Title({ text }) {
   if (!text) return null;
   const cls = styles.newsListTitle + ' weui-panel__hd';
   return <div className={cls}>{text}</div>;
}

function Item(props) {
  const {
    src = DEFAULT_IMAGE,
    title = '',
    time = '',
    commentCount = '',
    infos = false,
  } = props;
  const cls = styles.newsListItem + ' weui-media-box weui-media-box_appmsg';
  return (
    <div className={cls}>
      <div className="weui-media-box__hd">
        <img className="weui-media-box__thumb" src={src} alt={title} />
      </div>
      <div className="weui-media-box__bd">
        <p className="weui-media-box__desc">{title}</p>
        {infos && (
          <ul className="weui-media-box__info">
            <li className="weui-media-box__info__meta">{time}</li>
            <li className="weui-media-box__info__meta comment__meta">{commentCount}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

function NewsList(props) {

  const { className, title, list, showInfos } = props;
  const cls = className + ' weui-panel';

  return (
    <div className={cls}>
      <Title text={title} />
      <div className="weui-panel__bd">
        {is.not.array(list) ? null : list.map((v, i) => {
          const ItemProps = {
            key: v.id || i,
            src: v.src,
            title: v.title,
            time: v.time,
            commentCount: v.commentCount,
            infos: showInfos,
          }
          return <Item {...ItemProps} />;
        })}
      </div>
    </div>
  )
}

NewsList.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  list: propTypes.array,
  showInfo: propTypes.bool,
}

NewsList.defaultProps = {
  className: '',
  title: '',
  list: [],
  showInfo: false,
}

export default NewsList;