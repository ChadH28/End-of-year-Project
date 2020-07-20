import axios from 'axios';

// signin actions
const signin = (email, password) => async (dispatch) => {
    dispatch({
        type:USER_SIGNIN_REQUEST,
        payload: { email, password }
    });
    try {
        const {data} = await axios.post("/api/users/signin", { email, password });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.message
        });
    }
}
// register actions
const register = (name, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { name, email, password }
    });
    try {
        const { data } = await axios.post("/api/users/register", { name, email, password });
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.message
        });
    }
  }

export {
    signin,
    register
};