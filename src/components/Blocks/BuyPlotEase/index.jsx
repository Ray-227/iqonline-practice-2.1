import React from 'react';
import './index.scss';

import SwitchListMap from '@/components/UiKit/SwitchListMap/index.jsx';

const Poidet = () => (
<svg width="54" height="39" viewBox="0 0 54 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse rx="19.2448" ry="18.0553" transform="matrix(0.994399 -0.105694 0.116378 0.993205 19.3634 20.5992)" fill="#7EC95C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3845 22.8351L53.687 30.138C54.1043 30.5551 54.1043 31.2315 53.6872 31.6488L50.464 34.872C50.0524 35.2836 49.3647 35.2836 48.9531 34.872L41.6504 27.5693L37.5709 31.6488C37.0008 32.2188 35.9964 31.9507 35.7847 31.1744L34.0813 24.9285H5.06843C4.47841 24.9285 4 24.4501 4 23.86V1.06794C4 0.477922 4.47841 -0.000488281 5.06843 -0.000488281H41.5357C42.1257 -0.000488281 42.6041 0.477922 42.6041 1.06794V14.9551L49.9897 16.9694C50.7658 17.1811 51.0341 18.1855 50.464 18.7556L46.3845 22.8351ZM6.13671 2.13637V22.7916H33.4984L30.9497 13.4462C30.7361 12.6634 31.4787 11.9208 32.2615 12.1344L40.4674 14.3723V2.13637H6.13671ZM42.4059 25.3031L49.7086 32.6058L51.4209 30.8935L44.1182 23.5908C43.701 23.1736 43.701 22.4972 44.1182 22.0799L47.6514 18.5466L33.5032 14.6881L37.3618 28.8362L40.895 25.3031C41.3066 24.8915 41.9943 24.8914 42.4059 25.3031ZM19.8832 27.3503H26.7209C29.1951 27.3503 31.2081 29.3632 31.2081 31.8376C31.2081 34.3118 29.1951 36.3248 26.7209 36.3248H19.8832C17.409 36.3248 15.396 34.3118 15.396 31.8376C15.396 29.3634 17.409 27.3503 19.8832 27.3503ZM19.8832 34.188H26.7209C28.0169 34.188 29.0713 33.1335 29.0713 31.8376C29.0713 30.5417 28.0169 29.4872 26.7209 29.4872H19.8832C18.5873 29.4872 17.5328 30.5415 17.5328 31.8376C17.5328 33.1336 18.5872 34.188 19.8832 34.188Z" fill="#675A54"/>
</svg>

);

export default class SelectPlots extends React.Component {
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-8">

          <div className="switch-list-map">

            <div className="switch-list-map__title">Купить участок просто</div>
            <div className="switch-list-map__swicth">
              <SwitchListMap index="2" text="Этапы покупки, Рассрочка, Ипотека"></SwitchListMap>
            </div>

            <div className="switch-list-map__info">

              <div className="switch-list-map__item">
                <div className="switch-list-map__content">
                  <div className="switch-list-map__num">1</div>
                  <div className="switch-list-map__icon"><Poidet></Poidet></div>
                  <div className="switch-list-map__desc">Оставьте заявку на обратный звонок</div>
                </div>
              </div>
              <div className="switch-list-map__item">
                <div className="switch-list-map__content">
                  <div className="switch-list-map__num">1</div>
                  <div className="switch-list-map__icon"><Poidet></Poidet></div>
                  <div className="switch-list-map__desc">Оставьте заявку на обратный звонок</div>
                </div>
              </div>
              <div className="switch-list-map__item">
                <div className="switch-list-map__content">
                  <div className="switch-list-map__num">1</div>
                  <div className="switch-list-map__icon"><Poidet></Poidet></div>
                  <div className="switch-list-map__desc">Оставьте заявку на обратный звонок</div>
                </div>
              </div>
              <div className="switch-list-map__item">
                <div className="switch-list-map__content">
                  <div className="switch-list-map__num">1</div>
                  <div className="switch-list-map__icon"><Poidet></Poidet></div>
                  <div className="switch-list-map__desc">Оставьте заявку на обратный звонок</div>
                </div>
              </div>

            </div>
            
          </div>

        </div>
      </div>
    )
  }
}

