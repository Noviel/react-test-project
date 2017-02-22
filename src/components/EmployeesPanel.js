// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import Employee from './Employee';
import { connect } from 'react-redux';
import { remove, add, update } from '../redux/modules/employees';
import CustomTablePanel from './lib/CustomTablePanel';

const mapStateToProps = (state, ownProps) => {
  return {
    employees: state.employees.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export class EmployeesPanel extends Component {

  static propTypes = {
    employees: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    employees: []
  }

  render() {
    const { employees, dispatch } = this.props;
    return <CustomTablePanel list={employees} dispatch={dispatch} RowElement={Employee}
                             remove={remove} update={update} add={() => add({firstName: 'John', lastName: 'Doe', departmentId: 666})}
                             header={['#', 'FirstName', 'LastName', 'Department ID']}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPanel);