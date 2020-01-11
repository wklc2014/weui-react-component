/**
 * 选项卡页面
 * 直播
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewsList from '../../components/common/news-list.js';
import LoadingMore from '../../components/loadmore/index.js';
import styles from './styles.less';

class NewsPage extends Component {

  static defaultProps = {
    hotList: [],
    newsList: [],
    loading: false,
  }

  componentDidMount() {
    this.props.getNewsList();
  }

  render() {
    const { hotList, newsList, loading } = this.props;

    if (loading) return <LoadingMore text="新闻列表加载中..." />;

    return (
      <div>
        <NewsList
          className={styles.hotList}
          title="推荐新闻"
          list={hotList}
          showInfos
        />
        <NewsList
          className={styles.hotList}
          title="最新新闻"
          list={newsList}
          showInfos
        />
      </div>
    )
  }
}

NewsPage.propTypes = {
  hotList: propTypes.array,
  newsList: propTypes.array,
  loading: propTypes.bool,
}

export default NewsPage;