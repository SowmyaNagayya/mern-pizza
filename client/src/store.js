//combine all reducers and combine it
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducers'

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer
})

const initialState = {}
const composeEnhancers = composeWithDevTools({})
//to create store we use 1st finalReducer, initialState, composeEnhancers
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store