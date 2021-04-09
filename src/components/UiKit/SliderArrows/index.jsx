import React from 'react';
import './index.scss';

export default class SliderArrows extends React.Component {
  render() {
    return (
      <div className="sliderArrows">

        <div className="sliderArrows__boxArrow">
          <div className="sliderArrows__left"></div>
        </div>

        <div className="sliderArrows__point sliderArrows__green"></div>
        <div className="sliderArrows__point"></div>

        <div className="sliderArrows__boxArrow">
          <div className="sliderArrows__right sliderArrows__green"></div>
        </div>
        
      </div>
    )
  }
}