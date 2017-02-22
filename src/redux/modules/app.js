// Created by snov on 22.02.2017.
//

import createActionConstants from '../lib/create-action-constants';
import createReducer from '../lib/'

const SELECT_TAB = 'SELECT_TAB';

const ACTIONS = createActionConstants(
  'react-test-project', 'app',
  [
    SELECT_TAB
  ]
);

export function selectTab(tab) {
  return {
    type: ACTIONS.SELECT_TAB,
    tab
  }
}

export default createReducer({}, {
  [ACTIONS.SELECT_TAB](state, action) {
    return { activeTab: action.tab }
  }
})