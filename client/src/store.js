//combine all reducers and combine it
import { combineReducers } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducers';
import { registerUserReducer } from './reducers/userReducer';
import { loginUserReducer } from './reducers/userReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
};
const composeEnhancers = composeWithDevTools({});
//to create store we use 1st finalReducer, initialState, composeEnhancers
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store