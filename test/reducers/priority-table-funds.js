import assert from 'assert';
import funds from '../../app/scripts/reducers/priority-table-funds';
import { priorityTable } from '../../app/scripts/constants/default-data';
import {
  FUNDS,
  SET_PRIORITY
} from '../../app/scripts/constants/action-types';

const initialState = priorityTable.funds;

describe('Priority table funds reducer', () => {
  it('exists', () => {
    assert.equal(typeof funds, 'function');
  });

  it('returns the initial state', () => {
    const newState = funds(undefined, {}), // eslint-disable-line
      expectedState = initialState;

    assert.deepEqual(newState, expectedState);
  });

  it('updates the selected funds on set funds event', () => {
    const newState = funds(
      null,
      {
        type: SET_PRIORITY,
        subtype: FUNDS,
        selected: 0
      }),
      expectedState = [
        {
          value: 450000,
          selected: true
        },
        {
          value: 275000,
          selected: false
        },
        {
          value: 140000,
          selected: false
        },
        {
          value: 50000,
          selected: false
        },
        {
          value: 6000,
          selected: false
        }
      ];

    assert.deepEqual(newState, expectedState);
  });

  it('updates the selected funds on set funds event again', () => {
    let oldState = [
      {
        value: 450000,
        selected: true
      },
      {
        value: 275000,
        selected: false
      },
      {
        value: 140000,
        selected: false
      },
      {
        value: 50000,
        selected: false
      },
      {
        value: 6000,
        selected: false
      }
      ],
      newState = funds(
        oldState,
        {
          type: SET_PRIORITY,
          subtype: FUNDS,
          selected: 1
        }
      ),
      expectedState = [
        {
          value: 450000,
          selected: false
        },
        {
          value: 275000,
          selected: true
        },
        {
          value: 140000,
          selected: false
        },
        {
          value: 50000,
          selected: false
        },
        {
          value: 6000,
          selected: false
        }
      ];

    assert.deepEqual(newState, expectedState);
  });
});
