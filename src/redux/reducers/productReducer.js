/* eslint-disable no-console */
import { ActionTypes } from '../contants/action-types';

const initialState = {
  homeheader: [
    {
      page_heading: 'Clean Blog',
      sub_heading: 'A Blog Theme by Start Bootstrap',
    },
  ],
  aboutheader: [
    {
      page_heading: 'About Me',
      sub_heading: 'This is what I do',
    },
  ],
  contactheader: [
    {
      page_heading: 'Contact Me',
      sub_heading: 'Have questions? I have answers.',
    },
  ],
  postheader: [
    {
      post_heading: 'Man must explore, and this is exploration at its greatest',
      page_heading: 'Problems look mighty small from 150 miles up',
      meta: 'Posted by Start Bootstrap on August 24, 2021',
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
