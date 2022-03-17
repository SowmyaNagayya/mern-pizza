import React, {useState, useEffect} from 'react'

function Registerscreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    function register() {
        if(password!==cpassword) {
            alert("Passwrod not matched");
        } else {
            const user = {
                name,
                email,
                password
            }
            console.log(user);
        }
    }
  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5" style={{textAlign:'left'}}>
                <h2 style={{fontSize: '35px', textAlign:'center', fontWeight:'bold', margin:'15px'}}>Register</h2>
                <div>
                    <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=> {setName(e.target.value)}}/>
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                    <input required type="text" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e)=> {setCpassword(e.target.value)}}/>
                    <button onClick={register} className="btn mt-4" >REGISTER</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Registerscreen
