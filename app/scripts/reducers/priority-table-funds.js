import clone from 'lodash.clone';

import { priorityTable } from '../constants/default-data';

import {
  SET_FUNDS
} from '../constants/action-types';

/**
 * Initial state of the priority table funds.
 * @type {Object}
 */
const initialState = priorityTable.funds;

/**
 * Handle the title
 * @param  {Array} state The old state
 * @param  {Symbol} action The action to apply
 * @return {Array} The new state
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FUNDS:
      let newState = clone(initialState, true);
      newState[action.selected].selected = true;
      return newState;

    default:
      return state;
  }
}
