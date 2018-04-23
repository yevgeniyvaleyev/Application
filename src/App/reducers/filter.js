import { 
  FILTER_ITEMS_BY_GENDER,
  FILTER_ITEMS_BY_NATIONALITY,
  FILTER_ITEMS_BY_NAME
 } from '../actions/types';
import { combineReducers } from 'redux';

const getFilterReducer = (type, defaultState = '') => (state = defaultState, action) => {
  if (action.type === type) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  gender: getFilterReducer(FILTER_ITEMS_BY_GENDER),
  name: getFilterReducer(FILTER_ITEMS_BY_NAME, 'oa'),
  nationality: getFilterReducer(FILTER_ITEMS_BY_NATIONALITY, 'DE'), // just for demonstration
});

export const hasFiltering = ({filter}) => 
  filter.gender || filter.name || filter.nationality;

export const getItems = ({items, filter}) => {
  var filtered = [...items];

  if (filter.nationality) {
    filtered = filtered.filter((item) => item.nat === filter.nationality)
  }

  if (filter.gender) {
    filtered = filtered.filter((item) => item.gender === filter.gender)
  }

  if (filter.name) {
    filtered = filtered.filter((item) => 
      item.name.first.includes(filter.name) || item.name.last.includes(filter.name))
  }

  return filtered;
}