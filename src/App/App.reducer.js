import { filterAndSearch } from './helpers/filterAndSearch';

import { DATA_AVAILABLE, FILTER_TERM, FILTER_NAT, FILTER_GENDER, RESET_STATE } from './App.actions';


const initialState = {
  loading: true,
  data: [],
  backupedData: [],
  searchTerm: '',
  gender: '',
  nat: ''
};


export default (state = initialState, action) => {

  switch (action.type) {
    case DATA_AVAILABLE:
      return {
        ...state,
        loading: false,
        data: action.data,
        backupedData: action.data
      };

    case FILTER_TERM:
      return {
        ...state,
        loading: false,
        data: filterAndSearch(state.backupedData, action.searchTerm, state.nat, state.gender),
        searchTerm: action.searchTerm
      };

    case FILTER_NAT:
      return {
        ...state,
        loading: false,
        data: filterAndSearch(state.backupedData, state.searchTerm, action.nat, state.gender),
        nat: action.nat
      };

    case FILTER_GENDER:
      return {
        ...state,
        loading: false,
        data: filterAndSearch(state.backupedData, state.searchTerm, state.nat, action.gender),
        gender: action.gender
      };

    case RESET_STATE:
      return {
        ...state,
        loading: false,
        data: state.backupedData,
        searchTerm: '',
        gender: '',
        nat: ''
      };

    default:
      return state;
  }
};
