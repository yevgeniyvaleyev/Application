import * as creators from './action-creators';

const api = 'https://randomuser.me/api/?results=5000';

export function getData() {
    return (dispatch) => {
      dispatch(creators.onDataFetchStarted());
      return fetch(api)
        .then((response) => response.json())
        .then(({results}) => { dispatch(creators.onDataFetchSuccess(results))})
        .catch(() => { dispatch(creators.onDataFetchError())})
    };
}

export function filterByNationality (nationality) {
  return (dispatch) => {
    dispatch(creators.filterByNationality(nationality));
  };
}

export function filterByGender (gender) {
  return (dispatch) => {
    dispatch(creators.filterByGender(gender));
  };
}

export function filterByName (name) {
  return (dispatch) => {
    dispatch(creators.filterByName(name));
  };
}
