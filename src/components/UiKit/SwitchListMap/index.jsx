import React from 'react';
import './index.scss';

{/* <SwitchListMap index="NUMBER start 1" text="One text, two text, three text"></SwitchListMap> */}

export default class SwitchListMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      target: 0,
      index: 0,
      text: this.props.text.split(',').map(item => item.trim())
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!e.target.className.includes('switchListMap__text_active')) {
      e.target.classList.add('switchListMap__text_active');

      let switchListMap = document.querySelectorAll('.switchListMap')[this.state.index];
      switchListMap.querySelectorAll('.switchListMap__text')[this.state.target].classList.remove('switchListMap__text_active');
      
      this.setState({target: e.target.getAttribute('data-index')});
    }
  }

  componentDidMount() {
    let switchIndex = Number(this.props.index) - 1;

    if (document.querySelectorAll('.switchListMap').length === 1) {
      switchIndex = 0; 
    }

    this.setState({index: switchIndex});
  }

  render() {
    return (
      <div className="switchListMap">

        { this.state.text.map( (text, indx) => {
          if (indx === 0) {
            return <span key={Number(this.props.index) - 1 + indx} data-index={indx} className="switchListMap__text switchListMap__text_active" onClick={this.handleClick}>{text}</span>
          } else {
            return <span key={Number(this.props.index) - 1 + indx} data-index={indx} className="switchListMap__text" onClick={this.handleClick}>{text}</span>
          }
        }) }

        <div className="switchListMap__switch"></div>
      </div>
    )
  }
}