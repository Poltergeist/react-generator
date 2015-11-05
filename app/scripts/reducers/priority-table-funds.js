import clone from 'lodash.clone';

import {
  SET_FUNDS
} from '../constants/action-types';

/**
 * Initial state of the priority table funds.
 * @type {Object}
 */
const initialState = {
  a: {
    value: 450000,
    selected: false
  },
  b: {
    value: 275000,
    selected: false
  },
  c: {
    value: 140000,
    selected: false
  },
  d: {
    value: 50000,
    selected: false
  },
  e: {
    value: 6000,
    selected: false
  }
};

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
