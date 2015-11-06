import * as actionTypes from '../constants/action-types';

export function setPriority(row, select) {
  return {
    type: actionTypes.SET_PRIORITY,
    subtype: row,
    selected: select
  };
}
