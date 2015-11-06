import assert from 'assert';
import rowsReducer from '../../app/scripts/reducers/priority-table-rows';
import { priorityTable } from '../../app/scripts/constants/default-data';
import {
  FUNDS,
  ATTRIBUTEPOINTS,
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
            value: 275000
          },
          {
            value: 140000
          },
          {
            value: 50000
          },
          {
            value: 6000
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
          value: 275000
        },
        {
          value: 140000
        },
        {
          value: 50000
        },
        {
          value: 6000
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
            value: 450000
          },
          {
            value: 275000,
            selected: true
          },
          {
            value: 140000
          },
          {
            value: 50000
          },
          {
            value: 6000
          }
        ];

      assert.deepEqual(newState, expectedState);
    });
  });
  describe('with attributePoints', () => {
    const initialState = priorityTable.attributePoints,
      attributePoints = rowsReducer(initialState, ATTRIBUTEPOINTS);
    it('exists', () => {
      assert.equal(typeof attributePoints, 'function');
    });

    it('returns the initial state', () => {
      const newState = attributePoints(undefined, {}), // eslint-disable-line
        expectedState = initialState;

      assert.deepEqual(newState, expectedState);
    });

    it('updates the selected attributePoints on set attributePoints event', () => {
      const newState = attributePoints(
        null,
        {
          type: SET_PRIORITY,
          subtype: ATTRIBUTEPOINTS,
          selected: 0
        }),
        expectedState = [
          {
            value: 24,
            selected: true
          },
          {
            value: 20
          },
          {
            value: 16
          },
          {
            value: 14
          },
          {
            value: 12
          }
        ];

      assert.deepEqual(newState, expectedState);
    });

    it('updates the selected attributePoints on set attributePoints event again', () => {
      let oldState = [
        {
          value: 24,
          selected: true
        },
        {
          value: 20
        },
        {
          value: 16
        },
        {
          value: 14
        },
        {
          value: 12
        }
        ],
        newState = attributePoints(
          oldState,
          {
            type: SET_PRIORITY,
            subtype: ATTRIBUTEPOINTS,
            selected: 1
          }
        ),
        expectedState = [
          {
            value: 24
          },
          {
            value: 20,
            selected: true
          },
          {
            value: 16
          },
          {
            value: 14
          },
          {
            value: 12
          }
        ];

      assert.deepEqual(newState, expectedState);
    });
  });
});
