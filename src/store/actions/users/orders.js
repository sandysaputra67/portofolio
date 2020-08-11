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

export const update = (id, data) => {

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