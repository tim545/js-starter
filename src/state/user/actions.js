
import {CALL_API} from '../../const.js';
import {actionTypes} from '../actionTypes.js';

const getUser = ()=> {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: 'api/',
      types: [actionTypes.GET_USER, actionTypes.GET_USER_SUCCESS, actionTypes.GET_USER_FAIL]
    }
  };
};

export {getUser};
