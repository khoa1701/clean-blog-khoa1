/* eslint-disable import/prefer-default-export */
import { ActionTypes } from '../contants/action-types';

const Apidata = {
  api: [],
};

export const setApi = (state = Apidata, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_API:
      return { ...state, api: payload };
    default:
      return state;
  }
};
