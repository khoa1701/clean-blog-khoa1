/* eslint-disable import/named */
import { ActionTypes } from '../contants/action-types';

export const setApi = (Apidata) => ({
  type: ActionTypes.SET_API,
  payload: Apidata,
});

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});
export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});
