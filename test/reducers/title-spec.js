import assert from 'assert';
import title from '../../app/scripts/reducers/title';
import {
  SET_TITLE,
  RESET_TITLE
} from '../../app/scripts/constants/action-types';

const initialState = 'Shadowrun Generator';

describe('title reducer', () => {
  it('exists', () => {
    assert.equal(typeof title, 'function');
  });

  it('returns the initial state', () => {
    const newState = title(undefined, {}), // eslint-disable-line
      expectedState = initialState;

    assert.deepEqual(newState, expectedState);
  });

  it('updates the title on set title event', () => {
    const newState = title(
      null,
      {
        type: SET_TITLE,
        title: '123'
      }),
      expectedState = '123';

    assert.deepEqual(newState, expectedState);
  });

  it('resets the title on reset', () => {
    const newState = title(
      '123',
      {
        type: RESET_TITLE
      }),
      expectedState = initialState;

    assert.deepEqual(newState, expectedState);
  });
});
