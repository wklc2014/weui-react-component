import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from '../../pages/home/index.js';
import Live from '../../pages/live/index-container.js';
import News from '../../pages/news/index-container.js';
import styles from '../styles.less';

class SiteRoute extends Component {

  static defaultProps = {

  }

  render() {
    const cls = styles.siteRoute + ' weui-tab__panel'

    return (
      <div className={cls}>
        <Route path="/" exact component={Home} />
        <Route path="/live" exact component={Live} />
        <Route path="/news" exact component={News} />
      </div>
    )
  }
}

SiteRoute.propTypes = {

}

export default SiteRoute;