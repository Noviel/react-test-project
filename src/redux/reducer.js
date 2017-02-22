// Created by snov on 11.02.2017.
//
// Root Application Reducer

import { combineReducers } from 'redux';
import departments from './modules/departments';
import employees from './modules/employees';
import app from './modules/app';

export default combineReducers({
  app,
  departments,
  employees
});