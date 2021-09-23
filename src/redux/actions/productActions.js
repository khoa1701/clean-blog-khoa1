import { ActionTypes } from '../contants/action-types';

export const setApi = (Apidata) => ({
  type: ActionTypes.SET_API,
  payload: Apidata,
});

export const setProducts = (Apidata) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: Apidata,
});

export const selectedProduct = (Apidata) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: Apidata,
});

export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});
