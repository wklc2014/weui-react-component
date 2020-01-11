/**
 * 加载中
 */
import React from 'react';
import propTypes from 'prop-types';

const LoadingMore = (props) => {

  const { text } = props;

  return (
    <div className="weui-loadmore">
      <i className="weui-loading"></i>
      {text && <span className="weui-loadmore__tips">{text}</span>}
    </div>
  )
}

LoadingMore.propTypes = {
  text: propTypes.any,
}

LoadingMore.defaultProps = {
  text: '',
}

export default LoadingMore;
