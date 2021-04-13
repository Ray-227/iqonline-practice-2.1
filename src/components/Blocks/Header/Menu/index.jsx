import React from 'react';
import './index.scss';

import Button from '@/components/UiKit/Button/index.jsx';
import DropDown from '@/components/UiKit/DropDown/index.jsx';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">

        <div className="menu__logo"></div>

        <div className="menu__ul">
          <div className="menu__li"><DropDown index="1" title="О компании" li="texttexttext, text, text, text, text, text, text, text"></DropDown></div>
          <div className="menu__li"><DropDown index="2" title="Коттеджные поселки" li="text, texttext, text"></DropDown></div>
          <div className="menu__li"><DropDown index="3" title="Покупателям" li="text, texttexttexttexttext, text, text"></DropDown></div>
          <div className="menu__li"><a href="#">Обслуживающая компания</a></div>
          <div className="menu__li"><a href="#">Таунхаусы</a></div>
        </div>

        <div className="menu__phone"></div>

        <Button value="Заказать звонок"></Button>

      </div>
    )
  }
}

