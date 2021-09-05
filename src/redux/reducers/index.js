/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { productReducer, selectedProductsReducer } from './productReducer';
import { setApi } from './reducerApi';

const reducers = combineReducers({
  apidata: setApi,
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
