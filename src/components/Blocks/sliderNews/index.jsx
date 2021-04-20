import React from 'react';
import './index.scss';

import newsJSON from '@/dataDB/news.json';

// UiKit
import SliderArrows from '@/components/UiKit/SliderArrows/index.jsx';
import SwitchListMap from '@/components/UiKit/SwitchListMap/index.jsx';

export default class SliderNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 2,
      pointGreenIndex: 0,
      countPoint: 4,
      sliderleft: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const sliderNews = document.querySelector('.slider-news');

    // item слайдера (новость)
    const sliderItemWidth = sliderNews.querySelector('.slider-news__item').offsetWidth;
    let sliderItemCount = sliderNews.querySelectorAll('.slider-news__item').length / 4;

    const prevItem = () => {
      if ( Math.abs(Number( sliderNews.style.left.replace('px','') )) > sliderItemWidth * 4 ) {
        this.setState({sliderleft: this.state.sliderleft -= sliderItemWidth * 4});
        sliderNews.style.left = -this.state.sliderleft + 'px';
      } else {
        this.setState({sliderleft: this.state.sliderleft = 0});
        sliderNews.style.left = -this.state.sliderleft + 'px';
      }
    }

    const nextItem = () => {
      if (  Math.abs(Number( sliderNews.style.left.replace('px','') )) < (sliderItemWidth * 4) * Math.ceil(sliderItemCount) ) {
        this.setState({sliderleft: this.state.sliderleft += sliderItemWidth * 4});
        sliderNews.style.left = -this.state.sliderleft + 'px';
      }
    }

    const sliderArrows = document.querySelectorAll('.sliderArrows')[this.state.index - 1];
    const points = sliderArrows.querySelectorAll('.sliderArrows__point');
    const left = sliderArrows.querySelector('.sliderArrows__left');
    const right = sliderArrows.querySelector('.sliderArrows__right');

    let target = e.target.children[0] || e.target;

    if ( target.className.includes('sliderArrows__left') && this.state.pointGreenIndex - 1 >= 0 ) {

      // Переключаем элемент
      prevItem();

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
    } else if ( target.className.includes('sliderArrows__right') && this.state.pointGreenIndex + 1 < Math.ceil(sliderItemCount)) {

      // Переключаем элемент
      nextItem();

      // Удаляем цвет точки
      points[this.state.pointGreenIndex].classList.remove('sliderArrows__green');

      // Меняем цвет стрелки
      if (this.state.pointGreenIndex + 1 === this.state.countPoint - 1) {
        left.classList.add('sliderArrows__green');
        right.classList.remove('sliderArrows__green');
      }

      // Добавляем цвет точки
      points[this.state.pointGreenIndex + 1].classList.add('sliderArrows__green');
      // Запоминаем на какой точке цвет
      this.setState({pointGreenIndex: this.state.pointGreenIndex + 1});
    }

  }

  componentDidMount() {
    const newsWrapper = document.querySelector('.news-wrapper');

    let newsTitle = newsWrapper.querySelector('.news__title');
    const newsTitleHeight = newsTitle.offsetHeight + Number( getComputedStyle(newsTitle).marginBottom.replace('px','') );

    let newsHeader = newsWrapper.querySelector('.news__header');
    const newsHeaderHeight = newsHeader.offsetHeight + Number( getComputedStyle(newsHeader).marginBottom.replace('px','') );
    
    const sliderNewsHeight = newsWrapper.querySelector('.slider-news').offsetHeight;

    // Высчитываем и устанавливаем высоту обертке слайдера.
    newsWrapper.style.minHeight = newsTitleHeight + newsHeaderHeight + sliderNewsHeight + 5 + 'px';

    let SliderArrowsCount = document.querySelectorAll('.sliderArrows').length;
    
    // Какой по счету такой элемент на странице?
    let SliderArrowsIndex = 2;

    if (SliderArrowsCount === 1) {
      SliderArrowsIndex = 1;
    }

    this.setState({index: SliderArrowsIndex});
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="news-wrapper">
            <div className="news__title">А что у нас нового?</div>
            <div className="news__header">
              <SwitchListMap index="3" text="Новости, История жителей, Полезные статьи"></SwitchListMap>
              <SliderArrows index={this.state.index} countPoint={this.state.countPoint} onClick={this.handleClick}></SliderArrows>
            </div>

            <div className="slider-news">

              {
                Object.keys(newsJSON).map( (news) => {
                  return (
                    <div className="slider-news__item" key={newsJSON[news].id}>

                      <div className="slider-news__header">
                        <img src={newsJSON[news].image} alt={newsJSON[news].title}></img>
                      </div>

                      <div className="slider-news__main">
                        <div className="slider-news__title">{newsJSON[news].title}</div>
                        <div className="slider-news__description">{newsJSON[news].description}</div>
                      </div>

                      <div className="slider-news__footer">
                        <a className="slider-news__link" href="#">Читать далее</a>
                        <span className="slider-news__date">{newsJSON[news].date}</span>
                      </div>

                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}