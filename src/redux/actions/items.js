import axios from 'axios';
import {
  GET_ITEMS_LIST_SUCCESS,
  GET_ITEMS_LIST_FAIL,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  GET_ITEMS_LIST_CATEGORY_SUCCESS,
  GET_ITEMS_LIST_CATEGORY_FAIL,
  // GET_SEARCH_ITEM_SUCCESS,
  // GET_SEARCH_ITEM_FAIL,
} from "./types"


export const get_items_list = () => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/items`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_ITEMS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_ITEMS_LIST_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_ITEMS_LIST_FAIL
    });
  }
}

export const get_items_list_page = (p) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/items?p=${p}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_ITEMS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_ITEMS_LIST_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_ITEMS_LIST_FAIL
    });
  }
}

// Category Items

export const get_items_list_category = (category_id) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/items/category/${category_id}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_ITEMS_LIST_CATEGORY_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_ITEMS_LIST_CATEGORY_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_ITEMS_LIST_CATEGORY_FAIL
    });
  }
}


export const get_items_list_category_page = (category_id, p) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/items/category/${category_id}?p=${p}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_ITEMS_LIST_CATEGORY_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_ITEMS_LIST_CATEGORY_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_ITEMS_LIST_CATEGORY_FAIL
    });
  }
}

// Item

export const get_item = (slug) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/items/${slug}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_ITEM_SUCCESS,
        payload: res.data
      })
    } else {
      dispatch({
        type: GET_ITEM_FAIL
      })
    }
  } catch (err) {
    dispatch({
      type: GET_ITEM_FAIL
    })
  }
}


// export const search_item = (search_term) => async dispatch => {

//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   };

//   try {
    
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/items/search/${search_term}`, config);

//     if (res.status === 200) {
//       dispatch({
//         type: GET_SEARCH_ITEM_SUCCESS,
//         payload: res.data
//       });
//     } else {
//       dispatch({      });
//     }
//   } catch (err) {
//     dispatch({
//       type: GET_SEARCH_ITEM_FAIL
//     });
//   }

// }
