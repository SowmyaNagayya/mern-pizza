//combine all reducers and combine it
import { combineReducers } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducers';

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
};
const composeEnhancers = composeWithDevTools({});
//to create store we use 1st finalReducer, initialState, composeEnhancers
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store