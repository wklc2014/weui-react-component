import React, { Component } from 'react';
import { Link } from "react-router-dom";
import navConfigs from '../common/nav-config.js';
import styles from '../styles.less';

function SiteNav(props) {

  const cls = styles.siteNav + ' weui-navbar'

  return (
    <div className={cls}>
      {navConfigs.map((v, i) => {
        const key = `nav-${i}`;
        const { path, name } = v;
        return (
          <div className="weui-navbar__item" key={key}>
            <Link to={path}>{name}</Link>
          </div>
        );
      })}
    </div>
  )
}

SiteNav.propTypes = {

}

SiteNav.defaultProps = {

}

export default SiteNav;