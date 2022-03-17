import axios from 'axios';
export const registerUser = (user,error) =>async dispatch=> {
    dispatch({type: 'USER_REGISTER_REQUEST'})
    try {
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})      
    }
}