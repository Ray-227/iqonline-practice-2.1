import React from 'react';
import './index.scss';

export default class About extends React.Component {
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <div className="about">
            <div className="about__title">О компаний</div>

            <div className="about__grid">

              <div className="about__grid-item">
                <div className="about__item-one">
                </div>
              </div>

              <div className="about__grid-item">
                <div className="about__item-content">
                  <div className="about__item-title">Более 8 лет на рынке</div>
                  <div className="about__item-desc">Девелоперская компания «Навигатор» осуществляет продажу земельных участков с готовыми коммуникациями в коттеджных поселках города Тюмени</div>
                </div>
              </div>
              <div className="about__grid-item">
                <div className="about__grid-item-flex">
                  <div className="about__grid-item-left">
                    <div className="about__item-content">
                      <div className="about__item-title_light">Профессиональная юридическая поддержка</div>
                      <div className="about__item-desc_light">Гарант юридической чистоты сделки</div>
                    </div>
                  </div>
                  <div className="about__grid-item-right">
                    <div className="about__item-content">
                      <div className="about__item-title">Собственная обслуживающая компания</div>
                      <div className="about__item-desc">Круглый год следит за чистотой и порядком в поселках</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__grid-item">
                <div className="about__item-content">
                  <div className="about__item-title">Удобное расположение</div>
                  <div className="about__item-desc">Земельные участки расположенны на популярных трактах города в экологически чистых районах.</div>
                </div>
              </div>
              <div className="about__grid-item">
                <div className="about__item-content">
                  <div className="about__item-title_light">Уникальные места</div>
                  <div className="about__item-desc_light">Каждый поселок имеет свою концепцию и отличие. Вы сможете купить земельный участок на берегу реки, рядом с лесом, на холмах или выбрать отличный видовой участок</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

