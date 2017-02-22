// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTab } from '../redux/modules/app';

const mapStateToProps = (state) => {
  return {
    activeTab: state.app.activeTab
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export function MenuItem({ tab, dispatch, activeTab, name })  {
  return (
    <li role='presentation' className={ activeTab === tab ? 'active' : '' }>
      <a href='' onClick={(e) => { e.preventDefault(); dispatch(selectTab(tab))}}>{name}</a>
    </li>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);