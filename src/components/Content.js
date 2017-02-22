// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DepartmentsPanel from './DepartmentsPanel';
import EmployeesPanel from './EmployeesPanel';

const contentProps = {
  activeTab: React.PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.app.activeTab
  }
};

export function Content({ activeTab }) {
  switch (activeTab) {
    case 'departments':
      return <DepartmentsPanel/>;
    case 'employees':
      return <EmployeesPanel/>;
    default:
      return <div>Unknown tab ${activeTab}</div>
  }
}

Content.propTypes = contentProps;


export default connect(mapStateToProps)(Content);