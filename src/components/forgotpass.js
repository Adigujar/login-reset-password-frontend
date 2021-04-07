import React, { useState, useEffect } from "react";
import './login.css'

function Forgotpass() {
    const [rootUrl, setRootUrl] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(true);

    useEffect(() => {
        setRootUrl(`${window.location.href}/newpass`);
    }, []);

    const handleForgotpass=()=>{
        console.log(rootUrl)
        fetch('https://login-reset-password.herokuapp.com/forgot-password', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        targetUrl:rootUrl,
      })
    }).then((res) => res.json())
    .then((res) => {if(res){
        setShow(false)
        setMessage(res.message)}
    });
  }
    return (
        <div className="container mt-5 ">
        <div className="row">
            <div className="col ">
                <div className="col-md-6 offset-md-3 b1 r2 bg3 text-center ">
                    <h1 className="mt-5 bg2 r1">Reset Password</h1>
                        <div className="form-group text-left mt-4">
                            <label for="email"><strong>&nbsp;Email :</strong></label>
                            <input type="email" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required></input>
                        </div>
                        <div className="col mt-4 mb-4 p-0">
                            <button type="submit" id="button" className="btn btn-primary mr-2" onClick={handleForgotpass}>Send verification link to mail</button>
                            <a href="/" className="card-link text-info ml-3"><span className="text-info">Know your password? </span>Login</a>
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
  
export default Forgotpass;
  
