import { ActionTypes } from '../contants/action-types';

const initialState = {
  bodyabout: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!',
    },
  ],
  homeheader: [
    {
      pageHeading: 'Clean Blog',
      subHeading: 'A Blog Theme by Start Bootstrap',
    },
  ],
  aboutheader: [
    {
      pageheading: 'About Me',
      subheading: 'This is what I do',
    },
  ],
  contactheader: [
    {
      pageheading: 'Contact Me',
      subheading: 'Have questions? I have answers.',
    },
  ],
  postheader: [
    {
      postheading: 'Man must explore, and this is exploration at its greatest',
      postheading1: 'Problems look mighty small from 150 miles up',
      meta: 'on August 24, 2021',
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, api: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
