import React from 'react';
import './index.scss';

import plotsJSON from '@/dataDB/plots.json';

// UiKit
import SliderArrows from '@/components/UiKit/SliderArrows/index.jsx';
import CircleArrowCenter from '@/components/UiKit/CircleArrowCenter/index.jsx';
import SwitchListMap from '@/components/UiKit/SwitchListMap/index.jsx';


const GreenLock = () => (
  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.2857 6.18701H0V17.1861H14.2857V6.18701Z" fill="#7EC95C"/>
  <path d="M9.28571 10.9991C9.28571 9.86003 8.32643 8.9368 7.14286 8.9368C5.95929 8.9368 5 9.86003 5 10.9991C5 11.9045 5.61 12.6655 6.45357 12.9425C6.44571 12.9824 6.42857 13.0195 6.42857 13.0614V14.4363C6.42857 14.8158 6.74857 15.1237 7.14286 15.1237C7.53714 15.1237 7.85714 14.8158 7.85714 14.4363V13.0614C7.85714 13.0195 7.84 12.9824 7.83214 12.9425C8.67571 12.6655 9.28571 11.9045 9.28571 10.9991Z" fill="#48AD19"/>
  <path d="M3.57142 4.8121C3.57142 2.91682 5.17357 1.37489 7.14285 1.37489C9.11214 1.37489 10.7143 2.91682 10.7143 4.8121V6.18699H12.1429V4.8121C12.1429 2.15857 9.9 0 7.14285 0C4.38571 0 2.14285 2.15857 2.14285 4.8121V6.18699H3.57142V4.8121Z" fill="#48AD19"/>
  </svg>
);

const GreenSandyGlass = () => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.79217 7.97784H6.49347C4.13439 7.13415 2.59738 5.15529 2.59738 2.961V1.01001H11.6883V2.961C11.6883 5.15529 10.1513 7.13415 7.79217 7.97784Z" fill="#7EC95C"/>
  <path d="M6.49347 7.97708H7.79217C10.1513 8.82078 11.6883 10.7997 11.6883 12.994V14.945H2.59738V12.994C2.59738 10.7997 4.13439 8.82078 6.49347 7.97708Z" fill="#7EC95C"/>
  <path d="M0.649351 1.59015H1.2987H2.5974H13.6364C13.9955 1.59015 14.2857 1.32995 14.2857 1.00935C14.2857 0.688755 13.9955 0.428558 13.6364 0.428558H2.5974H1.2987H0.649351C0.29026 0.428558 0 0.688755 0 1.00935C0 1.32995 0.29026 1.59015 0.649351 1.59015Z" fill="#48AD19"/>
  <path d="M13.6357 14.3632H1.9474C1.94545 14.3632 1.9435 14.3644 1.94091 14.3644H0.64935C0.29026 14.3644 0 14.6246 0 14.9452C0 15.2658 0.29026 15.526 0.64935 15.526H2.5974C2.59935 15.526 2.6013 15.5248 2.60389 15.5248H13.6357C13.9948 15.5248 14.2851 15.2646 14.2851 14.944C14.2851 14.6234 13.9948 14.3632 13.6357 14.3632Z" fill="#48AD19"/>
  </svg>
);

const GreenCircleArrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7.14286" cy="7.85715" r="7.14286" fill="#7EC95C"/>
  <path d="M7.60502 3.57144H6.59663V11.0232H7.60502V3.57144Z" fill="#48AD19"/>
  <path d="M7.10084 11.4889L3.57144 8.41172L4.31564 7.76297L7.10084 10.1914L9.88604 7.76297L10.6302 8.41172L7.10084 11.4889Z" fill="#48AD19"/>
  </svg>
);


export default class SliderProts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const sliderProtsWrapper = document.querySelector('.sliderProts-wrapper');
    const sliderProtsWrapperHeader = sliderProtsWrapper.querySelector('.sliderProts-wrapper__header');
    const sliderProts = sliderProtsWrapper.querySelector('.sliderProts');
    sliderProtsWrapper.style.minHeight = Number(sliderProts.offsetHeight) + Number(sliderProtsWrapperHeader.scrollHeight) + Number(getComputedStyle(sliderProtsWrapperHeader).marginBottom.replace('px','')) + "px";

    
    const sliderProtsItem = sliderProts.querySelectorAll('.sliderProts__item');

    sliderProtsItem.forEach( item => {
    })
  }

  render() {
    return (
      <div className="row">
      <div className="col-12">
      <div className="sliderProts-wrapper">
        <div className="sliderProts-wrapper__header">
          <SwitchListMap index="1" text="Списком, На карте"></SwitchListMap>
          <SliderArrows index="1" countPoint="2"></SliderArrows>
        </div>

        <div className="sliderProts">
          {
            Object.keys(plotsJSON).map( (plot) => {
              return (
                <div className="sliderProts__item" key={plotsJSON[`${plot}`].id}>
                  <div className="sliderProts__header">
                    <div className="sliderProts__logo">
                      <img src={plotsJSON[`${plot}`].logo} alt="Logo"></img>
                    </div>
                    <div className="sliderProts__image">
                      <img src={plotsJSON[`${plot}`].image} alt={plotsJSON[`${plot}`].title}></img>
                    </div>
                    <div className="sliderProts__title">{plotsJSON[`${plot}`].title}</div>
                  </div>

                  <div className="sliderProts__main">
                    <div className="sliderProts__description">{plotsJSON[`${plot}`].description}</div>
                    
                    <div className="sliderProts__info"><GreenLock></GreenLock>{plotsJSON[`${plot}`].sold} продано</div>
                    <div className="sliderProts__info"><GreenSandyGlass></GreenSandyGlass>{plotsJSON[`${plot}`].booked} забронировано</div>
                    <div className="sliderProts__info"><GreenCircleArrow></GreenCircleArrow>{plotsJSON[`${plot}`].available} доступно</div>
                  </div>

                  <div className="sliderProts__footer">
                    <div className="sliderProts__size">Участки от {plotsJSON[`${plot}`].sizeMin} до {plotsJSON[`${plot}`].sizeMax} соток</div>
                    <a className="sliderProts__link" href="#"><CircleArrowCenter></CircleArrowCenter></a>
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