import * as actionsTypes from './actionsTypes';
import axios from "axios";
import { ENDPOINT, token } from "../../../utils/globals";

export const getListkategori = () => {  
const request =  axios.get(`${ENDPOINT}kategori`,  {
  headers: {
    'Authorization': token 
  }
});
  return (dispatch) => {
    request.then((response) => {
      console.log(response, " cek");
      return dispatch({
        type: actionsTypes.GET_KATEGORI,
        payload: response.data.data.rows,
      });
    });
  };
};

export const getkategoriById = (id) => {
  const request =  axios.get(`${ENDPOINT}kategori`,id, {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_KATEGORI_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updatekategori = (id, data) => {
const request =  axios.put(`${ENDPOINT}kategori`,id,data, {
  headers: {
    'Authorization': token 
  }
});
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.UPDATE_KATEGORI,
        payload: response.data,
      });
      return dispatch(getListkategori());
    });
  };
};

export const deletekategori = (id) => {
  const request =  axios.delete(`${ENDPOINT}kategori`, id, {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.GET_KATEGORI_BY_ID,
        payload: response.data,
      });
      return dispatch(getListkategori());
    });
  };
};

export const addkategori = (data) => {
  const request =  axios.post(`${ENDPOINT}kategori`,data, {
    headers: {
        'Authorization': token 
      }
    });
  
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.ADD_KATEGORI,
        payload: response.data,
      });
    });
  };
};