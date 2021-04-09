import React from 'react';
import './index.scss';

{/*
  <Button value="Normal"></Button>
    OR
  <Button value="Normal" disabled></Button>
    OR
  <Button value="Normal" style="outline"></Button>
    OR
  <Button value="Normal" style="outline" disabled></Button>
*/}

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.disabled) {
      return <button className="green-button" disabled>{this.props.value}</button>
    } else if (this.props.style === 'outline') {
      return <button className="green-button green-button_outline">{this.props.value}</button>
    } else if (this.props.style === 'ouline' && this.props.disabled) {
      return <button className="green-button green-button_outline" disabled>{this.props.value}</button>
    } else {
      return <button className="green-button">{this.props.value}</button>
    }
  }
}