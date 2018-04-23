import * as types from './types';

export const onDataFetchStarted = () => ({ 
  type: types.DATA_FETCH_START 
});

export const onDataFetchError = () => ({ 
  type: types.DATA_FETCH_ERROR 
});

export const onDataFetchSuccess = (items) => ({ 
  type: types.DATA_FETCH_SUCCESS, 
  payload: items
});

export const filterByNationality = (nationality) => ({ 
  type: types.FILTER_ITEMS_BY_NATIONALITY, 
  payload: nationality
});

export const filterByGender = (gender) => ({ 
  type: types.FILTER_ITEMS_BY_GENDER, 
  payload: gender
});

export const filterByName = (name) => ({ 
  type: types.FILTER_ITEMS_BY_NAME, 
  payload: name
});