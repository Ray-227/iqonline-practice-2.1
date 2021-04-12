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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    const sliderArrows = document.querySelectorAll('.sliderArrows')[this.state.index];
    const points = sliderArrows.querySelectorAll('.sliderArrows__point');
    const left = sliderArrows.querySelector('.sliderArrows__left');
    const right = sliderArrows.querySelector('.sliderArrows__right');

    let target = e.target.children[0] || e.target;

    if ( target.className.includes('sliderArrows__left') && this.state.pointGreenIndex - 1 >= 0 ) {
      // Удаляем цвет точки
      points[this.state.pointGreenIndex].classList.remove('sliderArrows__green');

      // Меняем цвет стрелки
      if (this.state.pointGreenIndex - 1 === 0) {
        left.classList.remove('sliderArrows__green');
        right.classList.add('sliderArrows__green');
      }

      // Добавляем цвет точки
      points[this.state.pointGreenIndex - 1].classList.add('sliderArrows__green');
      // Запоминаем на какой точке цвет
      this.setState({pointGreenIndex: this.state.pointGreenIndex - 1});
    } else if ( target.className.includes('sliderArrows__right') && this.state.pointGreenIndex + 1 <= this.state.countPoint) {
      points[this.state.pointGreenIndex].classList.remove('sliderArrows__green');

      // Меняем цвет стрелки
      if (this.state.pointGreenIndex + 1 === this.state.countPoint) {
        left.classList.add('sliderArrows__green');
        right.classList.remove('sliderArrows__green');
      }

      // Добавляем цвет точки
      points[this.state.pointGreenIndex + 1].classList.add('sliderArrows__green');
      // Запоминаем на какой точке цвет
      this.setState({pointGreenIndex: this.state.pointGreenIndex + 1});
    }

  }

  render() {
    let countPoint = this.renderPoint(this.props.countPoint);

    return (
      <div key={this.state.index} className="sliderArrows">

        <div className="sliderArrows__boxArrow" onClick={this.handleClick}>
          <div className="sliderArrows__left"></div>
        </div>
          {countPoint}
        <div className="sliderArrows__boxArrow" onClick={this.handleClick}>
          <div className="sliderArrows__right sliderArrows__green"></div>
        </div>
        
      </div>
    )
  }
}