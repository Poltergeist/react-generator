import {
  SET_TITLE,
  RESET_TITLE
} from '../constants/action-types';

/**
 * Initial state of the title
 * @type {String}
 */
const initialState = 'Shadowrun Generator';

/**
 * Handle the title
 * @param  {Array} state The old state
 * @param  {Symbol} action The action to apply
 * @return {Array} The new state
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return action.title;

    case RESET_TITLE:
      return initialState;

    default:
      return state;
  }
}
