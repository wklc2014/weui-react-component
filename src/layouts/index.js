import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { HashRouter as Router } from "react-router-dom";
import store from '../models/stores/index.js';
import SiteNav from './components/site-nav.js';
import SiteRoute from './components/site-route.js';

class MainLayout extends Component {

  static defaultProps = {

  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="weui-tab">
            <SiteNav />
            <SiteRoute />
          </div>
        </Router>
      </Provider>
    )
  }
}

MainLayout.propTypes = {

}

export default MainLayout;