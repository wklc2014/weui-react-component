/**
 * 选项卡页面
 * 直播
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewsList from '../../components/common/news-list.js';
import styles from './styles.less';

class NewsPage extends Component {

  static defaultProps = {
    hotList: [],
  }

  render() {
    const { hotList } = this.props;

    return (
      <div>
        <NewsList
          className={styles.hotList}
          title="推荐新闻"
          list={hotList}
          showInfos
        />
      </div>
    )
  }
}

NewsPage.propTypes = {
  hotList: propTypes.array,
}

export default NewsPage;