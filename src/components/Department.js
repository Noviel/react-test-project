// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import EditableRow from './lib/EditableRow';

export default class Department extends Component {

  static propTypes = {
    onRemove: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    index: React.PropTypes.number
  }

  render() {
    const { name, onSave, onRemove, index } = this.props;

    return (
      <EditableRow index={index} onSave={onSave} onRemove={onRemove} fields={{ name }} />
    )
  }
}