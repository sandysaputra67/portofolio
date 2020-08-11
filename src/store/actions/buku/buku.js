import * as actionsTypes from './actionsTypes';
import axios from "axios";
import { ENDPOINT, token } from "../../../utils/globals";

export const getListbuku = () => {  
const request =  axios.get(`${ENDPOINT}books`,  {
  headers: {
    'Authorization': token 
  }
});
  return (dispatch) => {
    request.then((response) => {
      console.log(response, "Respon Gtlist");
      return dispatch({
        type: actionsTypes.GET_BUKU,
        payload: response.data.data.rows,
      });
    });
  };
};

export const getBukuById = (id) => {
  const request =  axios.get(`${ENDPOINT}books`,id, {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_BUKU_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateBuku = (id, data) => {
const request =  axios.put(`${ENDPOINT}books`,id,data, {
  headers: {
    'Authorization': token 
  }
});
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.UPDATE_BUKU,
        payload: response.data,
      });
      return dispatch(getListbuku());
    });
  };
};

export const deleteBuku = (id) => {
  const request =  axios.delete(`${ENDPOINT}books`, id, {
    headers: {
      'Authorization': token 
    }
  });
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.GET_BUKU_BY_ID,
        payload: response.data,
      });
      return dispatch(getListbuku());
    });
  };
};

export const addBuku = (data) => {
  const formData = new FormData()
  formData.append("stok",data.stok);
  formData.append("sinopsis",data.sinopsis)
  formData.append("kategori_id",data.kategori_id)
  formData.append("title",data.title)
  formData.append("harga",data.harga)
  formData.append("deskripsi",data.deksripsi)
  formData.append("author",data.author)
  formData.append("image_url",data.image_url)
  formData.append("no_isbn",data.no_isbn)
  formData.append("berat",data.berat)
  

  const request =  axios.post(`${ENDPOINT}books`, formData, {

    headers: {
      'Authorization': token,
      'Content-Type': 'multipart/form-data'

      
    }
  });
  
  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.ADD_BUKU,
        payload: response.data,
      });
    });
  };
};