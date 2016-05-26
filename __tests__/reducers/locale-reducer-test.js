jest.unmock('../../src/state/locale/reducers.js');
jest.unmock('../../src/state/actionTypes.js');

import _ from 'lodash';
import {actionTypes} from '../../src/state/actionTypes.js';
import {localeMessages} from '../../src/state/locale/reducers.js';

describe('Locale reducers', ()=> {

  it('action types exist', ()=> {
    expect(actionTypes).toBeDefined();
    expect(actionTypes.GET_LOCALE_MESSAGES).toBeDefined();
    expect(actionTypes.GET_LOCALE_MESSAGES_SUCCESS).toBeDefined();
  });

  it('locale reducer exists', ()=> {
    return expect(localeMessages).toBeDefined();
  });

  it('works on request', ()=> {
    const action = {type: actionTypes.GET_LOCALE_MESSAGES};
    const state = localeMessages({}, action);
    return expect(state).toBeDefined();
  });

  it('works on success', ()=> {
    const action = {
      type: actionTypes.GET_LOCALE_MESSAGES_SUCCESS,
      res: {
        data: {messages: [{message: 'hi'}]}
      }
    };
    const state = localeMessages({}, action);
    return expect(state).toBeDefined();
  });

});
