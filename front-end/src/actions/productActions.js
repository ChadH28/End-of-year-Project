import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_SAVE_FAIL,
} from "../components/constants/productConstants";
import axios from 'axios';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST 
        });
        const {data} = await axios.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        });  
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message
        });
    } 
}

const descriptionProduct = (productId) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
            payload: productId
        });
        const {data} = await axios.get('/api/products/' + productId);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.message
        });
    }
};

const saveProduct = (product) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
        dispatch({
            type: PRODUCT_SAVE_REQUEST,
            payload: product
        });
        
            const {data} = await axios.post('/api/products',product);
            dispatch({
                type: PRODUCT_SAVE_SUCCESS,
                payload: data
            });

    } catch (err) {
        dispatch({
            type: PRODUCT_SAVE_FAIL,
            payload: err.response.msg
        });
    }
};

export {
    listProducts,
    descriptionProduct,
    saveProduct
};