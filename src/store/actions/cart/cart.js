import * as actionsTypes from "./actionsTypes";
import axios from "axios";
import { ENDPOINT, token } from "../../../utils/globals";

export const getListCart = () => {
  const request =  axios.get(`${ENDPOINT}carts`,  {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      console.log(response, "Respon getListCart");
      return dispatch({
        type: actionsTypes.GET_LIST_CART,
        payload: response.data.data.rows,
      });
    });
  };
};

export const addToCart = (data) => {
  const request =  axios.post(`${ENDPOINT}carts`,data, {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      console.log(response, "respon cart ");
      dispatch({
        type: actionsTypes.ADD_TO_CART,
        payload: response.data.data.rows,
      });
    });
  };
};

export const deleteFromCart = (id) => {
  
  const request =  axios.delete(`${ENDPOINT}carts`,id,  {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.DELETE_FROM_CART,
        payload: response.data,
      });
      return dispatch(getListCart());
    });
  };
};

export const updateOnCart = (id, data) => {

  const request =  axios.put(`${ENDPOINT}cars`, id,data, {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.UPDATE_ON_CART,
        payload: response.data,
      });

      return dispatch(getListCart());
    });
  };
};

/* export const addToCart = (id) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: actionsTypes.REMOVE_ITEM,
    id,
  };
};
export const subtractQuantity = (id) => {
  return {
    type: actionsTypes.SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: actionsTypes.ADD_QUANTITY,
    id,
  };
}; */