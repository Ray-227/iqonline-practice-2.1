import React from 'react';
import './index.scss';

{/* <DropDown index="3" title="Test 3" li="text, text, text"></DropDown> */}

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: Number(this.props.index) - 1,
      li: this.props.li.split(',').map(item => item.trim())
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let dropDown = document.querySelectorAll('.dropDown')[this.state.index];

    dropDown.querySelector('.dropDown__arrow').classList.toggle('dropDown__arrow_active');

    dropDown.querySelector('.dropDown__ul').classList.toggle('dropDonw__ul_open');

    dropDown.querySelector('.dropDown__line').classList.toggle('dropDown__line_show');
  }

  render() {
    return (
      <div className="dropDown">
        <div className="dropDown__title" onClick={this.handleClick}>{this.props.title} <span className="dropDown__arrow"></span></div>
        <ul className="dropDown__ul">
        <div className="dropDown__line"></div>
          {
            this.state.li.map( (text, indx) => {
              return <li className="dropDonw__li" key={this.state.index + indx}><a href="#">{text}</a></li>
            })
          }
        </ul>
      </div>
    )
  }
}