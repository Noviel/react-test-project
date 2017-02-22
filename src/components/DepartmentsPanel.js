// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import Department from './Department';
import { connect } from 'react-redux';
import { remove, add, update } from '../redux/modules/departments';
import CustomTablePanel from './lib/CustomTablePanel';

const mapStateToProps = (state) => {
  return {
    departments: state.departments.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export class DepartmentsPanel extends Component {

  static propTypes = {
    departments: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    departments: []
  }

  render() {
    const { departments, dispatch } = this.props;
    return <CustomTablePanel list={departments} dispatch={dispatch} RowElement={Department}
                             remove={remove} update={update} add={() => add({ name: 'New Department'})}
                             header={['#', 'name']}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsPanel);