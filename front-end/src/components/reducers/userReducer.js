import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL
} from "../constants/userContants";

// user sign-in reducer
function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return {
        loading: true
      };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      };
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    case USER_LOGOUT:
      return {};
    default: return state;
  }
}

// updating user reducer
function userUpdateReducer(state = {}, action) {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

// Register reducer
function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer
}