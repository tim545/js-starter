
import {actionTypes} from '../actionTypes.js';
import _ from 'lodash';

const userDetails = (state = {}, action)=> {
  switch (action.type) {
    case actionTypes.GET_USER:
      return _.assign({}, state, {
        isLoading: true,
        data: []
      });
    case actionTypes.GET_USER_SUCCESS:
      // Return to the component
      return _.assign({}, state, {
        isLoading: false,
        data: action.res.results[0]
      });
    case actionTypes.GET_USER_FAIL:
      return _.assign({}, state, {
        isLoading: false,
        isErr: action.res.message
      });
    default:
      return state;
  }
};

export {userDetails};
