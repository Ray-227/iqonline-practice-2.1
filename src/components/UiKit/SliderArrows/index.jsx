import React from 'react';
import './index.scss';

{/* <SliderArrows index="1" countPoint="2"></SliderArrows> */}

export default class SliderArrows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: Number(this.props.index) - 1,
      pointGreenIndex: 0,
      countPoint: Number(this.props.countPoint) - 1
    }

    this.renderPoint = this.renderPoint.bind(this);
  }

  renderPoint(i) {
    let content = [];
    let countPoint = Number(this.props.countPoint);

    for (let i = 0; i < countPoint; i++) {
      if (i === 0) {
        content.push(<div key={this.state.index + i} className="sliderArrows__point sliderArrows__green"></div>);
      } else {
        content.push(<div key={this.state.index + i} className="sliderArrows__point"></div>)
      }
    }

    return content;
  }

  render() {
    let countPoint = this.renderPoint(this.props.countPoint);

    return (
      <div key={this.state.index} className="sliderArrows">

        <div className="sliderArrows__boxArrow" onClick={this.props.onClick}>
          <div className="sliderArrows__left"></div>
        </div>
          {countPoint}
        <div className="sliderArrows__boxArrow" onClick={this.props.onClick}>
          <div className="sliderArrows__right sliderArrows__green"></div>
        </div>
        
      </div>
    )
  }
}