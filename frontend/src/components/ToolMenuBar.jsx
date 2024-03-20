import React from 'react';
import toolsIcon from "../assets/icons/tools.svg";
import "../assets/css/toolmenu.css";
import { useNavigate } from 'react-router-dom';


function ToolMenuBar(props) {
    const navigate = useNavigate();

    return (
        <div className='tool-menu-bar'>
            <div className='tool-menu-top'>
                <div className='tool-menu-item'>
                    <button className='tool-top-btn' onClick={() => {navigate("/script-creation-1")}}>Logline</button>
                </div>
                <div className='tool-menu-item'>
                    <button className='tool-top-btn' onClick={() => {navigate("/script-creation-2")}}>Outline</button>
                </div>
                <div className='tool-menu-item'>
                    <button className='tool-top-btn' onClick={() => {navigate("/script-creation-3")}}>Plot</button>
                </div>
                <div className='tool-menu-item'>
                    <button className='tool-top-btn' onClick={() => {navigate("/script-creation-4")}}>Treatment</button>
                </div>
                <div className='tool-menu-item'>
                    <button className='tool-top-btn' onClick={() => {navigate("/script-creation-5")}}>ScreenPlay</button>
                </div>
            </div>

            <div className='tool-menu-bottom'>
                <button className='tool-bottom-btn'>
                    <img src={toolsIcon} alt="a icon for tools bar"></img>
                </button>
            </div>
        </div>
      );
}

export default ToolMenuBar;