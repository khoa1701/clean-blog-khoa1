/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { productReducer, selectedProductsReducer } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
