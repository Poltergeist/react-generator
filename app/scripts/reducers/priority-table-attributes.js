import clone from 'lodash.clone';

import { priorityTable } from '../constants/default-data';

import {
  ATTRIBUTES,
  SET_PRIORITY
} from '../constants/action-types';

/**
 * Initial state of the priority table attributes.
 * @type {Object}
 */
const initialState = priorityTable.attributes;

/**
 * Handle the title
 * @param  {Array} state The old state
 * @param  {Symbol} action The action to apply
 * @return {Array} The new state
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRIORITY:
      if (action.subtype === ATTRIBUTES) {
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
