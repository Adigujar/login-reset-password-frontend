import React, { useState } from "react";
import './login.css'



function Resigter() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(true);

    const handleResigter=()=>{
        fetch('https://login-reset-password.herokuapp.com/register-user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then((res) => res.json())
    .then((res) => {if(res){
        setShow(false)
        setMessage(res.message)}
    });
  }
    

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col">
                <div className="col-md-6 offset-md-3 b1  bg3 r2 text-center " >
                    <h1 className="mt-5 bg2 r1">Register</h1>
                        <div className="form-group text-left mt-3">
                            <label for="email"><strong>&nbsp;Email :</strong></label>
                            <input type="email" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required></input>
                        </div>
                        <div className="form-group text-left mt-3">
                            <label for="password"><strong>&nbsp;Password :</strong></label>
                            <input type="password" className="form-control" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required></input>
                        </div>
                        <div className="col mt-5 mb-4 p-0">
                            <button type="submit" className="btn btn-primary mr-4" onClick={handleResigter}>Register</button>
                            <a href="/" className="card-link text-info"><span className="text-info">Already a user? </span>Login</a>
                        </div>
                        {show===true?<div></div>:
                        <div classNameName="bg1 r1">
                            <p>{message}</p>
                        </div>}
                  
                </div> 
            </div>
        </div>
    </div>
    );
  }
  
export default Resigter;
  
