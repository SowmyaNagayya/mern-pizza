import axios from 'axios';
// to get data from backend redux thunk function is dispatch
export const getAllPizzas=()=>async dispatch=> {
    // whenever we call the getAllPizzas function it calls reducers
    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('/api/pizzas/getallpizzas');
        console.log(response)
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}

//filter 
export const filterPizzas=(searchkey, category)=>async dispatch=> {
    var filteredPizzas;
    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        const response = await axios.get('/api/pizzas/getallpizzas');
        console.log(response)
        filteredPizzas = response.data.filter(pizza=> pizza.name.toLowerCase().includes(searchkey))
        // search category
        if(category!='all') {
            filteredPizzas = response.data.filter(pizza=> pizza.category.toLowerCase()===category)
        }
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: filteredPizzas})
    } catch (error) {
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}