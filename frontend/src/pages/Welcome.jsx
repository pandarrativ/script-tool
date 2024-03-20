// MyComponent.js
import React from 'react';
import "../assets/css/welcome.css";
import WelcomeLogo from "../assets/icons/welcome-logo.svg";
import WelcomeImg from "../assets/imgs/welcome-img.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { tempUserRouter } from '../config/routerConfig';


function Welcome() {
  // Your component code here
  const navigate = useNavigate();
  const goLogin = (e) =>{ 
    navigate("/home");
    // axios.post(tempUserRouter)
    // .then((resp) => {
    //   console.log(resp.data);
    //   localStorage.setItem("temp-id", resp.data);
    //   localStorage.setItem("user-info", JSON.stringify({
    //     name:"Bennet",
    //     user_id:resp.data,
    //   }));
    // })
    // .catch((e) => {
    //   console.log(e);
    // })
  }


  return (
    <div className='welcome'>
        <div className='left-welcome'>
          <img src={WelcomeImg} alt="welcome logo" className='welcome-img'/>
        </div>


        <div className='right-welcome'>
            <div className='right-welcome-body'> 
            
                <img src={WelcomeLogo} alt="welcome logo" className='welcome-logo'/>

                <div className='welcome-heading'>Welcome to</div>
                <div className='welcome-content'>script creation platform! </div>
                <button className='welcome-button' onClick={goLogin}>Let's Begin</button>
            </div>
        </div>
    </div>
  );
}

export default Welcome;