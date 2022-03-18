import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading'

function Loginscreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading, error} = loginstate

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('currentUser')) {
            window.location.href='/'
        }
    }, [])

    function login() {
        
            const user = {
                email,
                password
            }
            // console.log(user);
            dispatch(loginUser(user));
    }
  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded" style={{textAlign:'left'}}>
                <h2 style={{fontSize: '35px', textAlign:'center', fontWeight:'bold', margin:'15px'}}>Login</h2>
                {loading && (<Loading />)}
                {error && (<Error error="Invalid Credentials" />)}
                <div>
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                    <button onClick={login} className="btn mt-4 mb-3" >LOGIN</button>
                    <br />
                    <a style={{color:"black"}}  href="/register">Click Here To Register</a>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Loginscreen
