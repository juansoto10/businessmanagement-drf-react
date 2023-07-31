import {
    GET_ITEM_CATEGORIES_SUCCESS,
    GET_ITEM_CATEGORIES_FAIL,
  } from '../actions/types';
  
  const initialState = {
    item_categories: null,
  };
  
  
  export default function itemCategories(state = initialState, action) {

    const { type, payload } = action;
  
    switch(type) {
      case GET_ITEM_CATEGORIES_SUCCESS:
        return {
          ...state,
          item_categories: payload.item_categories
        }
      case GET_ITEM_CATEGORIES_FAIL:
        return {
          ...state,
          item_categories: null
        }
      default:
        return state
    }

  }
  