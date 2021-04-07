import React from "react";
import {useHistory} from 'react-router-dom';
import './login.css'
import Welcomeimg from './download.jpg'

function Welcome() {
    
    const history = useHistory();

    const Handlelogout=()=>{
        history.push('/')
    }
    
    return (
        <div className="container mt-5  centerimg">
            <img className="" src={Welcomeimg} alt="Welcome" />
            <div class="col mt-5 mb-4 p-0">
                <button type="submit" class="btn btn-primary mr-4" onClick={Handlelogout} >Logout</button>
                            
        </div>
        </div>
        
    
      
    );
  }
  
export default Welcome;
  
