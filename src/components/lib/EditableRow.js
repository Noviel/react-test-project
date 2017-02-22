// Created by snov on 22.02.2017.
//

import React, { Component} from 'react';
import EditableLabel from './EditableLabel';

export default class EditableRow extends Component {

  state = {
    // is component in edit mode
    active: false,
    // edit data
    data: { }
  }

  static propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    fields: React.PropTypes.object.isRequired,
    index: React.PropTypes.number
  }

  static defaultProps = {
    value: '',
    fields: []
  }

  handleLabelChange = (name, value) => {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          [name]: value
        }
      }
    });
  }

  finishEditing = () => {
    this.setState({
      data: {...this.props.fields},
      active: false
    });
  }

  startEditing = () => {
    this.setState({
      data: {...this.props.fields},
      active: true
    });
  }

  render() {
    let elementKey = 0;
    const { index, onRemove, onSave, fields } = this.props;
    const { active, data } = this.state;

    const indexElement = <th>{index}</th>;

    const editButtons = (active) ?
      <th className="btn-group" role="group">
          <button className='btn btn-default' onClick={() => { this.finishEditing(); onSave(data); }}>Save</button>
          <button className='btn btn-default' onClick={() => { this.finishEditing(); }}>Cancel</button>
      </th>
      :
      <th><button className='btn btn-default' onClick={this.startEditing}>Edit</button></th>;

    const labels = fields ?
      Object.keys(fields).map((el) => {
        return (
          <td className='col-md-2' key={elementKey++}>
            <EditableLabel dataName={el} value={fields[el]} active={active} onChange={(value) => { this.handleLabelChange(el, value); }}/>
          </td>
        )
      })
      : null;

    return (
      <tr>
        {indexElement}
        {labels}
        {editButtons}
        <th className='col-md-2'><button className='btn btn-danger' onClick={onRemove}>X</button></th>
      </tr>
    )
  }
}