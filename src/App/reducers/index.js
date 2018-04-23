import { combineReducers } from 'redux';
import items from './items';
import filter from './filter';
import loading from './loading';

export default combineReducers({
  items,
  loading,
  filter
});
