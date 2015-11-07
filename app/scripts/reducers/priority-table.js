import { combineReducers } from 'redux';

import {
  FUNDS,
  ATTRIBUTEPOINTS,
  METATYPES,
  MAGICORRESONANCE,
  SKILLPOINTS
} from '../constants/action-types';

import { priorityTable } from '../constants/default-data';

import rows from './priority-table-rows';

export default combineReducers({
  attributePoints: rows(priorityTable.attributePoints, ATTRIBUTEPOINTS),
  funds: rows(priorityTable.funds, FUNDS),
  metaTypes: rows(priorityTable.metaTypes, METATYPES),
  skillPoints: rows(priorityTable.skillPoints, SKILLPOINTS),
  magicOrResonance: rows(priorityTable.magicOrResonance, MAGICORRESONANCE)
});
