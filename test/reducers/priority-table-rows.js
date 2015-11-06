import assert from 'assert';
import rowsReducer from '../../app/scripts/reducers/priority-table-rows';
import { priorityTable } from '../../app/scripts/constants/default-data';
import {
  FUNDS,
  ATTRIBUTES,
  SET_PRIORITY
} from '../../app/scripts/constants/action-types';

describe('Priority table rows reducer', () => {
  describe('with funds', () => {
    const initialState = priorityTable.funds,
      funds = rowsReducer(initialState, FUNDS);
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
  describe('with attributes', () => {
    const initialState = priorityTable.attributes,
      attributes = rowsReducer(initialState, ATTRIBUTES);
    it('exists', () => {
      assert.equal(typeof attributes, 'function');
    });

    it('returns the initial state', () => {
      const newState = attributes(undefined, {}), // eslint-disable-line
        expectedState = initialState;

      assert.deepEqual(newState, expectedState);
    });

    it('updates the selected attributes on set attributes event', () => {
      const newState = attributes(
        null,
        {
          type: SET_PRIORITY,
          subtype: ATTRIBUTES,
          selected: 0
        }),
        expectedState = [
          {
            value: 24,
            selected: true
          },
          {
            value: 20,
            selected: false
          },
          {
            value: 16,
            selected: false
          },
          {
            value: 14,
            selected: false
          },
          {
            value: 12,
            selected: false
          }
        ];

      assert.deepEqual(newState, expectedState);
    });

    it('updates the selected attributes on set attributes event again', () => {
      let oldState = [
        {
          value: 24,
          selected: true
        },
        {
          value: 20,
          selected: false
        },
        {
          value: 16,
          selected: false
        },
        {
          value: 14,
          selected: false
        },
        {
          value: 12,
          selected: false
        }
        ],
        newState = attributes(
          oldState,
          {
            type: SET_PRIORITY,
            subtype: ATTRIBUTES,
            selected: 1
          }
        ),
        expectedState = [
          {
            value: 24,
            selected: false
          },
          {
            value: 20,
            selected: true
          },
          {
            value: 16,
            selected: false
          },
          {
            value: 14,
            selected: false
          },
          {
            value: 12,
            selected: false
          }
        ];

      assert.deepEqual(newState, expectedState);
    });
  });
});
