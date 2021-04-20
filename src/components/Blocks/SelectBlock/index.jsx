import React from 'react';
import './index.scss';

export default class SelectBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row select-block-img select-block-margin d-flex justify-content-center align-items-center">
          <div className="col-8">
            <div className="select-block">
              <div className="select-block__left-line"></div>
              <div className="select-block-text">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

