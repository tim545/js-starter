
import {CALL_LOCALE} from '../../const.js';

const getLocaleMessages = ()=> {
  return {
    [CALL_LOCALE]: {
      locale: document.documentElement.lang
    }
  };
};

export {getLocaleMessages};
