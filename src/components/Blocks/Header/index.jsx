import React from 'react';
import './index.scss';

import Menu from './Menu/index.jsx';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu></Menu>
    )
  }
}

