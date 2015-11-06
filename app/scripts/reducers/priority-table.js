import { combineReducers } from 'redux';
import funds from './priority-table-funds';
import attributes from './priority-table-attributes';

export default combineReducers({
  attributes,
  funds
});
