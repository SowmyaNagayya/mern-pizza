import axios from 'axios';
export const registerUser = (user,error) =>async dispatch=> {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try {
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href='/'
    } catch {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})      
    }
}

export const loginUser = (user,error) =>async dispatch=> {
    dispatch({type: 'USER_LOGIN_REQUEST'})
    try {
        const response = await axios.post('/api/users/login', user)
        console.log(response)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data})
    } catch {
        dispatch({type: 'USER_LOGIN_FAILED', payload: error})      
    }
}