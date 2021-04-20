import React, { Fragment } from 'react';
import './index.scss';

// import {Time, Leaf, Infrastructure, Lightbulb, GreenLock, GreenSandyGlass, GreenCircleArrow} from '@/svg/getSvgImages.jsx';


// ===[ Blocks ]===
// 1
import Header from '@/components/Blocks/Header/index.jsx';
// 2
import SliderPorts from '@/components/Blocks/sliderProts/index.jsx';
//3 - за конейнером
import SelectPlots from '@/components/Blocks/SelectPlots/index.jsx';
//4
import About from '@/components/Blocks/About/index.jsx';
//5
import BuyPlotEase from '@/components/Blocks/BuyPlotEase/index.jsx';
//6 - за контейнером
import SighUpToView from '@/components/Blocks/SighUpToView/index.jsx';
// 7
import WhyAreWe from "@/components/Blocks/WhyAreWe/index.jsx";
// 9
import SliderNews from '@/components/Blocks/sliderNews/index.jsx';
// 10 - за контейнер
import Footer from '@/components/Blocks/Footer/index.jsx';


export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid container-fluid_padding50">
          <Header></Header>
          <SliderPorts></SliderPorts>
        </div>
        <SelectPlots></SelectPlots>
        <div className="container-fluid container-fluid_padding50">
          <About></About>
          <BuyPlotEase></BuyPlotEase>
        </div>
        <SighUpToView></SighUpToView>
        <div className="container-fluid container-fluid_padding50">
          <WhyAreWe></WhyAreWe>
          <SliderNews></SliderNews>
        </div>
        <Footer></Footer>
      </Fragment>
    )
  }
}