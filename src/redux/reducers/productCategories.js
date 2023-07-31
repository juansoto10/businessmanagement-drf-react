import {
  GET_PRODUCT_CATEGORIES_SUCCESS,
  GET_PRODUCT_CATEGORIES_FAIL,
} from '../actions/types';

const initialState = {
  product_categories: null,
};


export default function productCategories(state = initialState, action) {

  const { type, payload } = action;

  switch(type) {
    case GET_PRODUCT_CATEGORIES_SUCCESS:
      return {
        ...state,
        product_categories: payload.product_categories
      }
    case GET_PRODUCT_CATEGORIES_FAIL:
      return {
        ...state,
        product_categories: null
      }
    default:
      return state
  }

}
