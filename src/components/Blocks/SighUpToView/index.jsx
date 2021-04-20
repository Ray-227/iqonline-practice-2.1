import React from 'react';
import './index.scss';

import SelectBlock from '@/components/Blocks/SelectBlock/index.jsx';
import Button from '@/components/UiKit/Button/index.jsx';

export default class SighUpToView extends React.Component {
  render() {
    return (
      <SelectBlock>
        <div className="select-plots">
          <div className="sighn-up-to-view__header">
            <div className="select-titile sighn-up-to-view__title">Запишитесь<br></br>на просмотр</div>
            <div className="sighn-up-to-view__description">Эксперт по недвижимости быстро подберет вам подходящий вариант земельного участка. А еще проведёт вам экскурсию по счастливой загородной жизни.</div>
          </div>
          <div className="select-plots__range-block">
            <div className="select-plots__range-select">
              <input type="text" placeholder="Имя"></input>
            </div>
            <div className="select-plots__range-select">
              <input type="text" placeholder="Фамилия"></input>
            </div>
            <Button value="Записаться"></Button>
          </div>
        </div>
      </SelectBlock>
    )
  }
}