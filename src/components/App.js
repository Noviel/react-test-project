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
      <div className ='jumbotron'>
        <Menu/>
        <Content/>
      </div>
    </Provider>
  )
}