// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Menu from './Menu';
import Content from './Content';
import { store } from '../redux/store';

export default function () {
  return (
    <Provider store={store}>
      <div>
        <Menu className='col-sm-3 col-md-2'/>
        <Content className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2'/>
      </div>
    </Provider>
  )
}