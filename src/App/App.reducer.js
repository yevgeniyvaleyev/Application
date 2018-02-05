import { DATA_AVAILABLE } from './App.actions';

const initialState = {
  loading: true,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    default:
      return state;
  }
};
