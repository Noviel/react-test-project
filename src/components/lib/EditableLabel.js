// Created by snov on 22.02.2017.
//

import React, { Component} from 'react';
import ControlledInput from './ControlledInput';

export default class EditableLabel extends Component {

  static propTypes = {
    value: React.PropTypes.any,
    active: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
    active: false
  }

  render() {
    const { value, active, onChange } = this.props;
    return (active) ? <ControlledInput initialValue={value} onChange={onChange}/> : <div>{value}</div>;
  }
}