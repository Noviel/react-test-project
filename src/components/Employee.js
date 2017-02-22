// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import EditableRow from './lib/EditableRow';

export default class Employee extends Component {

  static propTypes = {
    onRemove: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    departmentId: React.PropTypes.any.isRequired,
    index: React.PropTypes.number
  }

  render() {
    const {index, firstName, lastName, departmentId, onSave, onRemove} = this.props;

    return (
      <EditableRow index={index} onSave={onSave} onRemove={onRemove} fields={{firstName, lastName, departmentId}}/>
    )
  }
}