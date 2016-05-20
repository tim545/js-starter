// Locale middleware

import * as $ from 'jquery';

import {CALL_LOCALE} from '../const.js';
import {actionTypes} from '../state/actionTypes.js';

const locale = ()=> next=> action=> {
  const callLocale = action[CALL_LOCALE];
  if (typeof callLocale === 'undefined') {
    return next(action);
  }

  const localeStr = callLocale.locale;

  next({type: actionTypes.GET_LOCALE_MESSAGES});

  return $.ajax({
    url: `/locale/${localeStr}/${localeStr}.json`,
    method: 'GET',
    dataType: 'json',
    cache: true,
    success: (data)=> {
      next({
        type: actionTypes.GET_LOCALE_MESSAGES_SUCCESS,
        data: data
      });
    },
    error: ()=> {
      console.log('Failed to load language data');
    }
  });
};

export {locale};
