import assert from 'assert';
import title from '../../app/scripts/reducers/priority-table-funds';
import {
  SET_FUNDS
} from '../../app/scripts/constants/action-types';

const initialState = {
  a: {
    value: 450000,
    selected: false
  },
  b: {
    value: 275000,
    selected: false
  },
  c: {
    value: 140000,
    selected: false
  },
  d: {
    value: 50000,
    selected: false
  },
  e: {
    value: 6000,
    selected: false
  }
};

describe('Priority table funds reducer', () => {
  it('exists', () => {
    assert.equal(typeof title, 'function');
  });

  it('returns the initial state', () => {
    const newState = title(undefined, {}), // eslint-disable-line
      expectedState = initialState;

    assert.deepEqual(newState, expectedState);
  });

  it('updates the selected funds on set funds event', () => {
    const newState = title(
      null,
      {
        type: SET_FUNDS,
        selected: 'a'
      }),
      expectedState = {
        a: {
          value: 450000,
          selected: true
        },
        b: {
          value: 275000,
          selected: false
        },
        c: {
          value: 140000,
          selected: false
        },
        d: {
          value: 50000,
          selected: false
        },
        e: {
          value: 6000,
          selected: false
        }
      };

    assert.deepEqual(newState, expectedState);
  });

  it('updates the selected funds on set funds event again', () => {
    let oldState = {
        a: {
          value: 450000,
          selected: true
        },
        b: {
          value: 275000,
          selected: false
        },
        c: {
          value: 140000,
          selected: false
        },
        d: {
          value: 50000,
          selected: false
        },
        e: {
          value: 6000,
          selected: false
        }
      },
      newState = title(
        oldState,
        {
          type: SET_FUNDS,
          selected: 'b'
        }
      ),
      expectedState = {
        a: {
          value: 450000,
          selected: false
        },
        b: {
          value: 275000,
          selected: true
        },
        c: {
          value: 140000,
          selected: false
        },
        d: {
          value: 50000,
          selected: false
        },
        e: {
          value: 6000,
          selected: false
        }
      };

    assert.deepEqual(newState, expectedState);
  });
});
