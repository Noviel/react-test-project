// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Menu from './Menu';
import Content from './Content';
import createStore from '../redux/store';
import { departmentId } from '../redux/modules/departments';
import { employeeId } from '../redux/modules/employees';

const store = createStore({
  app: {
    activeTab: 'employees'
  },
  departments: {
    list: [ {name: 'Dep #1', id: departmentId.next()},
            {name: 'Dep #2', id: departmentId.next()},
            {name: 'Dep #3', id: departmentId.next()} ],
    lastAddedId: departmentId.current()
  },
  employees: {
    list: [ {firstName: 'Cristal', lastName: 'Darling', departmentId: 1337, id: employeeId.next()},
            {firstName: 'Deloise', lastName: 'Zertuche', departmentId: 404, id: employeeId.next()},
            {firstName: 'Marta', lastName: 'Reedy', departmentId: 42, id: employeeId.next()},
            {firstName: 'Richard', lastName: 'Conroy', departmentId: 777, id: employeeId.next()},
            {firstName: 'Janie', lastName: 'Wilburn', departmentId: 12, id: employeeId.next()},
            {firstName: 'Jody', lastName: 'Loflin', departmentId: 543, id: employeeId.next()} ],
    lastAddedId: employeeId.current()
  }
});

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