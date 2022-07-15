import *  as actionTypes from './actionsTypes'
import axios from 'axios'
import { ENDPOINT, token } from '../../../utils/globals'

export const addOrder = (data) => {
    const request = axios.post(`${ENDPOINT}orders`, data, {
        headers: {
            'Authorization': token
        }
    });
    return (dispatch) => {
        request.then((response) => {
            console.log(response, "Respon addordercoba");
            return dispatch({
                type: actionTypes.ADD_ORDER,
                payload: response.data.data.rows,
            });
        })
        .catch((error)=>{
            console.log(error.response)
        });
    };
    
};
export const getlistOrder = () => {
 
    const request = axios.get(`${ENDPOINT}orders`, {
        headers: {
            'Authorization': token
        }
    });
    return (dispatch) => {
        request.then((response) => {
            console.log(response, "Respon getlistorder");
            return dispatch({
                type: actionTypes.GET_LIST_ORDER,
                payload: response.data.data.rows,
            });
        });
    };
};

export const getOrderById = () => {
    const request = axios.get(`${ENDPOINT}orders`, {
        headers: {
            'Authorization': token
        }
    });
    return (dispatch) => {
        request.then((response) => {
            console.log(response, "Respon getOrderById");
            return dispatch({
                type: actionTypes.GET_ORDER_BY_ID,
                payload: response.data.data.rows,
            });
        });
    };
};
