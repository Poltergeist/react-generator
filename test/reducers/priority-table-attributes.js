import assert from 'assert';
import attributes from '../../app/scripts/reducers/priority-table-attributes';
import { priorityTable } from '../../app/scripts/constants/default-data';
import {
  SET_ATTRIBUTES
} from '../../app/scripts/constants/action-types';

const initialState = priorityTable.attributes;

describe('Priority table attributes reducer', () => {
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
        type: SET_ATTRIBUTES,
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
          type: SET_ATTRIBUTES,
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
