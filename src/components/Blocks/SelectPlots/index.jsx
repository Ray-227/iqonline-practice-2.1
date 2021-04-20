import React from 'react';
import './index.scss';
import SelectBlock from '@/components/Blocks/SelectBlock/index.jsx';
import Button from '@/components/UiKit/Button/index.jsx';

export default class SelectPlots extends React.Component {
  render() {
    return (
      <SelectBlock>
        <div className="select-plots">
          <div className="select-titile">Выберите свой участок</div>
          <div className="select-plots__range-block">
            <div className="select-plots__range-select">
              <div className="select-plots__range-text">Стоимость</div>
              <div className="select-plots__range">
                <input type="range" min="350000" max="2000000"></input>
              </div>
            </div>
            <div className="select-plots__range-select">
              <div className="select-plots__range-text">Размер участка</div>
              <div className="select-plots__range">
                <input type="range" min="350000" max="2000000"></input>
              </div>
            </div>
            <Button value="Подобрать участок"></Button>
          </div>
        </div>
      </SelectBlock>
    )
  }
}

