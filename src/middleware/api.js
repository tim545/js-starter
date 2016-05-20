// api middleware

import {CALL_API, API_HEADERS, API_ROOT} from '../const.js';
import * as $ from 'jquery';

const api = store=> next=> action=> {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let {endpoint} = callAPI;
  const {types, method} = callAPI;

  if (typeof endpoint === 'function') endpoint = endpoint(store.getState());
  if (typeof endpoint !== 'string') throw new Error('Specify a string endpoint URL.');

  if (!Array.isArray(types) || types.length !== 3) throw new Error('Expected an array of three action types.');
  if (!types.every(type=> typeof type === 'string')) throw new Error('Expected action types to be strings.');

  const [requestType, successType, failureType] = types;
  next({type: requestType});

  return $.ajax({
    headers: API_HEADERS,
    url: `${API_ROOT}${endpoint}`,
    method: method,
    dataType: 'json',
    success: (data)=> {
      next({
        res: data,
        type: successType
      });
    },
    error: (data)=> {
      next({
        error: data,
        type: failureType
      });
    }
  });
};

export {api};
