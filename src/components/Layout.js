import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="wrap">
          <div className="header">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blog'>Blog Index</Link></li>
              <li><Link to='/blog/3'>Blog # 3</Link></li>
            </ul>
          </div>
          <div className="app-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
