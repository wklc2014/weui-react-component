/**
 * 选项卡页面
 * 直播
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewsList from '../../components/common/news-list.js';
import styles from './styles.less';

class LivePage extends Component {

  static defaultProps = {
    topList: [],
  }

  render() {
    const { topList } = this.props;

    return (
      <div>
        <NewsList
          className={styles.topList}
          title="头条新闻"
          list={topList}
        />
      </div>
    )
  }
}

LivePage.propTypes = {
  topList: propTypes.array,
}

export default LivePage;