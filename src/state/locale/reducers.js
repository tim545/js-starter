
import {actionTypes} from '../actionTypes.js';
import _ from 'lodash';

const localeMessages = (state = {}, action)=> {
  switch (action.type) {

    case actionTypes.GET_LOCALE_MESSAGES:
      return _.assign({}, state, {
        isLoading: true,
        data: []
      });

    case actionTypes.GET_LOCALE_MESSAGES_SUCCESS:
      return _.assign({}, state, {
        isLoading: false,
        data: action.data
      });

    default:
      return state;
  }
};

export {localeMessages};
