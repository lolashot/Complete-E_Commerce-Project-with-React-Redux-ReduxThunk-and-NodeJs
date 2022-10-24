import axios from 'axios';
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
  
} from '../constants/productsConstant'

export const getProducts =  () => {
    return async (dispatch) => {

    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })
        
        const data  = await axios.get('/api/v1/products');

          dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error',error);
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error
        })

    }
}

}

export const clearErrors = () => async (dispatch)=> {
    dispatch({
        type: CLEAR_ERRORS
    })
}

