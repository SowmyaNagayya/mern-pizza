import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'

function Loginscreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    function login() {
        
            const user = {
                email,
                password
            }
            console.log(user);
            dispatch(loginUser(user));
    }
  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5" style={{textAlign:'left'}}>
                <h2 style={{fontSize: '35px', textAlign:'center', fontWeight:'bold', margin:'15px'}}>Login</h2>
                <div>
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                    <button onClick={login} className="btn mt-4" >LOGIN</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Loginscreen
