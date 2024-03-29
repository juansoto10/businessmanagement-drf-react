import axios from 'axios'
import {
  GET_ITEM_CATEGORIES_SUCCESS,
  GET_ITEM_CATEGORIES_FAIL
} from './types'


export const get_item_categories = () => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/items/`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_ITEM_CATEGORIES_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_ITEM_CATEGORIES_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ITEM_CATEGORIES_FAIL
    });
  }

}
