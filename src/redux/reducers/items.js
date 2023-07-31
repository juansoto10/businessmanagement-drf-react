import {
  GET_ITEMS_LIST_SUCCESS,
  GET_ITEMS_LIST_FAIL,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  GET_ITEMS_LIST_CATEGORY_SUCCESS,
  GET_ITEMS_LIST_CATEGORY_FAIL,
//   GET_SEARCH_ITEM_SUCCESS,
//   GET_SEARCH_ITEM_FAIL,
} from '../actions/types';

const initialState = {
  items_list: null,
  items_list_category: null,
//   filtered_items: null,
  item: null,
  count: null,
  next: null,
  previous: null
};

export default function item(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
      case GET_ITEMS_LIST_CATEGORY_SUCCESS:
          return {
              ...state,
              items_list_category: payload.results.items,
              count: payload.count,
              next: payload.next,
              previous: payload.previous,
          }
      case GET_ITEMS_LIST_CATEGORY_FAIL:
          return {
              ...state,
              items_list_category: null,
              count: null,
              next: null,
              previous: null,
          }
      case GET_ITEMS_LIST_SUCCESS:
          return {
              ...state,
              items_list: payload.results.items,
              count: payload.count,
              next: payload.next,
              previous: payload.previous,
          }
      case GET_ITEMS_LIST_FAIL:
          return {
              ...state,
              items_list: null,
              count: null,
              next: null,
              previous: null,
          }
      case GET_ITEM_SUCCESS:
          return {
              ...state,
              item: payload.item,
          }
      case GET_ITEM_FAIL:
          return {
              ...state,
              item: null,
          }
    //   case GET_SEARCH_ITEM_SUCCESS:
    //       return {
    //           ...state,
    //           filtered_items: payload.filtered_items
    //       }
    //   case GET_SEARCH_ITEM_FAIL:
    //       return {
    //           ...state,
    //           filtered_items: null
    //       }
      default:
          return state
  }
}
