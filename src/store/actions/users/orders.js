import * as actionsTypes from "./actionsTypes";
import axios from "axios";
import { ENDPOINT, token } from "../../../utils/globals";
export const addOrder = (data) =>{

  const request =  axios.get(`${ENDPOINT}addOrder`,data,  {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      console.log(response, "Respon addorder");
      return dispatch({
        type: actionsTypes.ADD_ORDER,
        payload: response.data,
      });
      return dispatch(addOrder());
    });
    };
};

export const deleteFromOrder = (id) => {
  
  const request =  axios.delete(`${ENDPOINT}orders`,id,  {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.DELETE_FROM_ORDER,
        payload: response.data,
      });
      return dispatch(addOrder());
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

      return dispatch(addOrder());
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