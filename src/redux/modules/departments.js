// Created by snov on 22.02.2017.
//

import createActionConstants from '../lib/create-action-constants';
import createReducer from '../lib/'
import { generateId } from '../../helpers'

export const departmentId = generateId(0);

// actions and action creators
//
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const UPDATE = 'UPDATE';

const ACTIONS = createActionConstants(
  'react-test-project', 'departments',
  [
    ADD,
    REMOVE,
    UPDATE
  ]
);

export function add(data) {
  return {
    type: ACTIONS.ADD,
    id: departmentId.next(),
    data
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
export default createReducer({ }, {
  [ACTIONS.ADD](state, action) {
    const { name } = action.data,
            id = action.id;
    return {
      list: [
        ...state.list,
        { id, name }
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

        return {...el, name: action.data.name };
      }),
      lastAddedId: state.lastAddedId
    };
  },

})