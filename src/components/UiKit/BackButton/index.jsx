import React from 'react';
import './index.scss';

export default class BackButton extends React.Component {
  render() {
    return (
      <div className="backButton">
        <div className="backButton__topArrow"></div>
      </div>
    )
  }
}