import axios from 'axios';
import {
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_FAIL,

  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,

  GET_PRODUCTS_LIST_CATEGORY_SUCCESS,
  GET_PRODUCTS_LIST_CATEGORY_FAIL,
  
  // GET_SEARCH_PRODUCT_SUCCESS,
  // GET_SEARCH_PRODUCT_FAIL,
} from "./types"


export const get_products_list = () => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/products`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_PRODUCTS_LIST_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_PRODUCTS_LIST_FAIL
    });
  }
}

export const get_products_list_page = (p) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/products?p=${p}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_PRODUCTS_LIST_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_PRODUCTS_LIST_FAIL
    });
  }
}

// Category Items

export const get_products_list_category = (category_id) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/products/category/${category_id}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCTS_LIST_CATEGORY_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_PRODUCTS_LIST_CATEGORY_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_PRODUCTS_LIST_CATEGORY_FAIL
    });
  }
}


export const get_products_list_category_page = (category_id, p) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/products/category/${category_id}?p=${p}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCTS_LIST_CATEGORY_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_PRODUCTS_LIST_CATEGORY_FAIL
      });
    }
  } catch {
    dispatch({
      type: GET_PRODUCTS_LIST_CATEGORY_FAIL
    });
  }
}

// Product

export const get_product = (slug) => async dispatch => {

  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/products/${slug}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: GET_PRODUCT_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_FAIL
    });
  }
};


// export const search_product = (search_term) => async dispatch => {

//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   };

//   try {
    
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/inventory/products/search/${search_term}`, config);

//     if (res.status === 200) {
//       dispatch({
//         type: GET_SEARCH_PRODUCT_SUCCESS,
//         payload: res.data
//       });
//     } else {
//       dispatch({
//         type: GET_SEARCH_PRODUCT_FAIL
//       });
//     }
//   } catch (err) {
//     dispatch({
//       type: GET_SEARCH_PRODUCT_FAIL
//     });
//   }

// }
