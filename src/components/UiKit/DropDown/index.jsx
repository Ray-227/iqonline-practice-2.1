import React from 'react';
import './index.scss';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: Number(this.props.index) - 1
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let dropDown = document.querySelectorAll('.dropDown')[this.state.index];

    dropDown.querySelector('.dropDown__arrow').classList.toggle('dropDown__arrow_active');

    dropDown.querySelector('.dropDown__ul').classList.toggle('dropDonw__ul_open');
  }

  render() {
    return (
      <div className="dropDown">
        <div className="dropDown__title" onClick={this.handleClick}>Коттеджные поселки <span className="dropDown__arrow"></span></div>
        <div className="dropDown__line"></div>
        <ul className="dropDown__ul">
          <li className="dropDonw__li"><a href="#">Альпийская долина</a></li>
          <li className="dropDonw__li"><a href="#">Есенино</a></li>
          <li className="dropDonw__li"><a href="#">Ёлки</a></li>
          <li className="dropDonw__li"><a href="#">Выбрать участок</a></li>
        </ul>
      </div>
    )
  }
}