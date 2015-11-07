import clone from 'lodash.clone';

import {
  SET_PRIORITY
} from '../constants/action-types';
export default function(defaultState, subtype) {
  /**
   * Initial state of the priority table funds.
   * @type {Object}
   */
  const initialState = defaultState;

  /**
   * Handle the funds
   * @param  {Array} state The old state
   * @param  {Symbol} action The action to apply
   * @return {Array} The new state
   */
  return (state = initialState, action) => {
    switch (action.type) {
      case SET_PRIORITY:
        if (action.subtype === subtype) {
          let newState = clone(initialState, true);
          newState[action.selected].selected = true;
          return newState;
        }
        state[action.selected].selected = false;
        return state;

      default:
        return state;
    }
  };
}
