import clone from 'lodash.clone';

import { priorityTable } from '../constants/default-data';

import {
  FUNDS,
  SET_PRIORITY
} from '../constants/action-types';

/**
 * Initial state of the priority table funds.
 * @type {Object}
 */
const initialState = priorityTable.funds;

/**
 * Handle the funds
 * @param  {Array} state The old state
 * @param  {Symbol} action The action to apply
 * @return {Array} The new state
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRIORITY:
      if (action.subtype === FUNDS) {
        let newState = clone(initialState, true);
        newState[action.selected].selected = true;
        return newState;
      }
      state[action.selected].selected = false;
      return state;

    default:
      return state;
  }
}
