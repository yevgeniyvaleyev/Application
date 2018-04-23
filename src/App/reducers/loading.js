import { 
  DATA_FETCH_START, 
  DATA_FETCH_SUCCESS, 
  DATA_FETCH_ERROR 
} from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case DATA_FETCH_START:
      return true;
    case DATA_FETCH_SUCCESS:
    case DATA_FETCH_ERROR:
      return false;
    default:
      return state;
  }
};