import React, { useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import './login.css'

function Newpass() {
    
    const [show, setShow] = useState(true);
    const [id, setId] = useState('');
    const [key, setKey] = useState('');
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const history = useHistory();



    useEffect(() => {
        const urlString = window.location.href;
        const url = new URL(urlString);
        setId(url.searchParams.get("id"))
        setKey(url.searchParams.get("rps"))
    }, [])

    useEffect(() => {
        if(id?.length > 0){
             fetch('https://login-reset-password.herokuapp.com/verify-random-string', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: id,
        verificationString: key,
      })
    }).then( (res) =>  res.json())
    .then((res) => {if(res.message==="verification string valid"){
            setShow(false)
    }else{
        console.log(res.message)
    }
})}
}, [id,key])

const handleChange=()=>{

    if(password1===password2){
        fetch('https://login-reset-password.herokuapp.com/assign-password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: id,
                verificationString: key,
                password: password1,
            })
            }).then((res) => res.json())
            .then((res) => {if(res.message==="password changed successfully"){
                
                history.push('/')

            }
            });
    }

  
}


return (
    <div>
        {show===true?<div> <h2>VERFIYING PLEASE WAIT....If NOT REDIRECTED TO CHANGE PASSWORD THE VERFICATION LINK HAS EXPIRED/INCORRECT</h2></div>:
            <div className="container mt-5" >
                <div className="row">
                    <div className="col">
                        <div className="col-md-6 offset-md-3 b1 r2 bg3 text-center ">
                            <h1 className="mt-5 bg2 r1">Change Password</h1>
                                <div className="form-group text-left mt-4">
                                    <label for="password"><strong>&nbsp;New Password :</strong></label>
                                    <input type="password" className="form-control" name="password1" id="password1" onChange={(e) => setPassword1(e.target.value)} placeholder="Enter your password" required></input>
                                </div>
                                <div className="form-group text-left mt-4">
                                    <label for="password"><strong>&nbsp;Repeat Password :</strong></label>
                                    <input type="password" className="form-control" name="password2" id="password2" onChange={(e) => setPassword2(e.target.value)} placeholder="Enter your password" required></input>
                                </div>
                                <div className="col mt-4 p-0">
                                    <button type="submit" className="btn btn-primary mr-4 mb-4" onClick={handleChange}>Change Password</button>
                                </div>
                                
                        
                        </div>
                    </div>
                </div>
            </div>}
    </div>
    
);
}

export default Newpass;
  
