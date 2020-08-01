import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDescriptionReducer, productSaveReducer} from './components/reducers/productReducer'
import { cartReducer } from './components/reducers/cartReducer';
import { userSigninReducer, userRegisterReducer } from './components/reducers/userReducer';

const initialState = { userSignin: {}};

const reducer = combineReducers({
    productList: productListReducer,
    productDescription: productDescriptionReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;