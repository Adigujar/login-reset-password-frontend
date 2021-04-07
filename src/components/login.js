import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import './login.css'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(true);
    
    const handleLogin=()=>{
        fetch('https://login-reset-password.herokuapp.com/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then((res) => res.json())
    .then((res) => {if(res.message==="user logged in successfully"){
        history.push('/welcome')

    }else{
        setMessage(res.message)
        setShow(false)
    }
    });
  }
    

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col">
                <div className="col-md-6 offset-md-3 b1 r2 bg3 text-center ">
                    <h1 className="mt-5 bg2 r1">User Login</h1>
                        <div className="form-group text-left mt-4">
                            <label for="email"><strong>&nbsp;Email :</strong></label>
                            <input type="email" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required></input>
                        </div>
                        <div className="form-group text-left mt-3">
                            <label for="password"><strong>&nbsp;Password :</strong></label>
                            <input type="password" className="form-control" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required></input>
                        </div>
                        <div className="col mt-5 p-0">
                            <button type="submit" className="btn btn-primary mr-4" onClick={handleLogin}>Login</button>
                            <a href="/resigter" className="card-link text-info"><span className="text-info">Not a user? </span>Register now</a>
                        </div>
                        <div className="col p-0 mt-3 mb-4">
                            <a href="/forgotpass" className="card-link text-danger">forgot password?</a>
                        </div>
                        {show===true?<div></div>:
                        <div className="bg1 r1">
                            <p>{message}</p>
                        </div>}
                
                </div>
            </div>
        </div>
    </div>
    
      
    );
  }
  
export default Login;
  
