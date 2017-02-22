// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';

export default class ControlledInput extends Component {

  static propTypes = {
    initialValue: React.PropTypes.any,
    onChange: React.PropTypes.func
  };

  state = {
    value: this.props.initialValue
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { onChange } = this.props;
    return <input type='text' value={this.state.value} onChange={e => { onChange(e.target.value); this.handleChange(e); }}/>;
  }
}