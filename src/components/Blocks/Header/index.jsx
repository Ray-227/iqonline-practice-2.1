import React from 'react';
import './index.scss';

import Menu from './Menu/index.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <Menu></Menu>
        </div>
      </div>
    )
  }
}

