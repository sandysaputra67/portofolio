import * as actionsTypes from "./actionsTypes";
import axios from "axios";
import { ENDPOINT, token } from "../../../utils/globals";

export const getListUser = () => {
  const request =  axios.get(`${ENDPOINT}users`,  {
    headers: {
      'Authorization': token 
    }
  });
  
  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      return dispatch({
        type: actionsTypes.GET_USER,
        payload: response.data,
      });
    });
  };
};

export const getUserById = (id) => {
  const request =  axios.get(`${ENDPOINT}users`, id, {
    headers: {
      'Authorization': token 
    }
  });

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_USER_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateUser = (id, data) => {
  const request =  axios.put(`${ENDPOINT}users`,id,data,  {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.UPDATE_USER,
        payload: response.data,
      });

      return dispatch(getListUser());
    });
  };
};

/* export const deleteUser = (id) => {
  const request = axios.delete(`${ENDPOINT}/${token}/users/${id}`);

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.GET_USER_BY_ID,
        payload: response.data,
      });
      return dispatch(getListUser());
    });
  };
}; */

export const addUser = (data) => {
  const request =  axios.post(`${ENDPOINT}register`,data,  {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({
        type: actionsTypes.ADD_USER,
        payload: response.data,
      });
    });
  };
};