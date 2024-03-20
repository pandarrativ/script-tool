// MyComponent.js
import React from 'react';
import "../assets/css/header.css";
import Icon from "../assets/icons/yoda_circle.svg";
import IconHome from "../assets/icons/header_home.svg";
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';


function Header(props) {
  const navigate = useNavigate();

  // Your component code here
  return (
    <div className='header'>
      <img src={Icon} alt="icon brid" className='icon-bird'></img>
      <div className='table'>
        <button onClick={() => {navigate("/home")}}>
          <img src={IconHome} alt="icon home" className='icon-home table-icons' ></img>
          <div className='table-text'>Home</div>
        </button>

        <button onClick={() => {navigate("/agent-selection")}}>
          <img src={IconHome} alt="icon home" className='icon-home table-icons' ></img>
          <div className='table-text'>Agent</div>
        </button>
        
      </div>
      <Switch defaultChecked  onChange={props.toggleColorMode}/>
      {/* <button onClick={props.toggleColorMode} className='change-mode-btn'>Change Mode</button> */}
    </div>
  );
}

export default Header;
