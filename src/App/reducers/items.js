import { DATA_FETCH_SUCCESS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
};
