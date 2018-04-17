import { DATA_AVAILABLE, FILTER_TERM, FILTER_NAT, FILTER_GENDER } from './App.actions';

const initialState = {
  loading: true,
  data: [],
  backupedData: [],
  searchTerm: '',
  gender: '',
  nat: ''
};

export default (state = initialState, action) => {

  const filterAndSearch = (data, searchTerm, nat, gender) => {

    let returnedList = data.filter((user) => {
      return user.name.first.indexOf(searchTerm) > -1;
    });

    if (nat) {
      returnedList = returnedList.filter((user) => {
        return user.nat === nat;
      });
    }

    if (gender) {
      returnedList = returnedList.filter((user) => {
        return user.gender === gender;
      });
    }

    return returnedList;
  };

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
        data: state.backupedData.filter((user)=>{
          return user.name.first.indexOf(action.searchTerm) > -1
        }),
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

    default:
      return state;
  }
};
