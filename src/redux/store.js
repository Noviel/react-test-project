// Created by snov on 11.02.2017.
//

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

import { departmentId } from './modules/departments';
import { employeeId } from './modules/employees';

function _createStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
}

export const store = _createStore({
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

export default _createStore;