import {
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCTS_LIST_CATEGORY_SUCCESS,
  GET_PRODUCTS_LIST_CATEGORY_FAIL,
//   GET_SEARCH_PRODUCT_SUCCESS,
//   GET_SEARCH_PRODUCT_FAIL,
} from '../actions/types';

const initialState = {
  products_list: null,
  products_list_category: null,
//   filtered_products: null,
//   product: null,
  count: null,
  next: null,
  previous: null
};

export default function product(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
      case GET_PRODUCTS_LIST_CATEGORY_SUCCESS:
          return {
              ...state,
              products_list_category: payload.results.products,
              count: payload.count,
              next: payload.next,
              previous: payload.previous,
          }
      case GET_PRODUCTS_LIST_CATEGORY_FAIL:
          return {
              ...state,
              products_list_category: null,
              count: null,
              next: null,
              previous: null,
          }
      case GET_PRODUCTS_LIST_SUCCESS:
          return {
              ...state,
              products_list: payload.results.products,
              count: payload.count,
              next: payload.next,
              previous: payload.previous,
          }
      case GET_PRODUCTS_LIST_FAIL:
          return {
              ...state,
              products_list: null,
              count: null,
              next: null,
              previous: null,
          }
      case GET_PRODUCT_SUCCESS:
          return {
              ...state,
              product: payload.product,
          }
      case GET_PRODUCT_FAIL:
          return {
              ...state,
              product: null,
          }
    //   case GET_SEARCH_PRODUCT_SUCCESS:
    //       return {
    //           ...state,
    //           filtered_products: payload.filtered_products
    //       }
    //   case GET_SEARCH_PRODUCT_FAIL:
    //       return {
    //           ...state,
    //           filtered_products: null
    //       }
      default:
          return state
  }
}
