import { combineReducers } from 'redux';
import drinkList from './drinkList';
import currentAlcohol from './currentAlcohol';

const combinedReducer = combineReducers({
  currentAlcohol,
  cocktailList: drinkList,
});

export default combinedReducer;
