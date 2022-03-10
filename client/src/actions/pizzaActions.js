import axios from 'axios';
// to get data from backend redux thunk function is dispatch
export const getAllPizzas=()=>dispatch=> {
    // whenever we call the getAllPizzas function it calls reducers
    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        const response = axios.get('/api/pizzas/getpizzas');
        console.log(response)
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}