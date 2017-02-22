// Created by snov on 22.02.2017.
//


import createActionConstants from '../lib/create-action-constants';
import createReducer from '../lib/'
import { generateId } from '../../helpers'

export const employeeId = generateId(0);

// actions and action creators
//
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const UPDATE = 'UPDATE';

const ACTIONS = createActionConstants(
  'react-test-project', 'employees',
  [
    ADD, REMOVE, UPDATE
  ]
);

export function add({ firstName, lastName, departmentId }) {
  return {
    type: ACTIONS.ADD,
    id: employeeId.next(),
    firstName,
    lastName,
    departmentId
  }
}

export function remove(id) {
  return {
    type: ACTIONS.REMOVE,
    id
  }
}

export function update(id, data) {
  return {
    type: ACTIONS.UPDATE,
    id,
    data
  }
}

// reducer
//
export default createReducer([], {
  [ACTIONS.ADD](state, action) {
    const { firstName, lastName, departmentId, id} = action;
    return {
      list: [
        ...state.list,
        {
          id, firstName, lastName, departmentId,
        }
      ],
      lastAddedId: id
    }
  },

  [ACTIONS.REMOVE](state, action) {
    return {
      list: state.list.filter(el => el.id !== action.id),
      lastAddedId: state.lastAddedId
    }
  },

  [ACTIONS.UPDATE](state, action) {
    return {
      list: state.list.map(el => {
        if (el.id !== action.id) return {...el};
        const newFields = {};

        Object.keys(action.data).forEach((key) => {
          const prop = action.data[key];
          if (typeof prop !== 'undefined') {
            newFields[key] = prop;
          }
        });

        return {...el, ...newFields };
      }),
      lastAddedId: state.lastAddedId
    };
  },

})