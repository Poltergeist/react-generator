import { combineReducers } from 'redux';

import {
  FUNDS,
  ATTRIBUTES
} from '../constants/action-types';

import { priorityTable } from '../constants/default-data';

import rows from './priority-table-rows';

export default combineReducers({
  attributes: rows(priorityTable.attributes, ATTRIBUTES),
  funds: rows(priorityTable.funds, FUNDS)
});
