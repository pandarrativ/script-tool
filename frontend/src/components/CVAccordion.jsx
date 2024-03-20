import React, { useState } from 'react';
import ArrowLightUp from "../assets/icons/icon-arrow-light-up.svg";
import ArrowLightDown from "../assets/icons/icon-arrow-light-down.svg";
import ArrowDarkUp from "../assets/icons/icon-arrow-dark-up.svg";
import ArrowDarkDown from "../assets/icons/icon-arrow-dark-down.svg";
import "../assets/css/accordion.css";



function CVAccordion(props) {
    const [show, setShow] = useState(false);
    const toggleShow = (e) =>{
        e.preventDefault();
        setShow(!show);
    }


    const renderIcon = () => {
        if(props.lightMode && show){
            return ArrowLightUp;
        }else if(props.lightMode && ! show){
            return ArrowLightDown;
        }else if(!props.lightMode && show){
            return ArrowDarkUp;
        }else{
            return ArrowDarkDown;
        }
    }
    return (
    <div className='accordion'>
        <button className="accordion-button" onClick={toggleShow}>{props.title}<img src={renderIcon()} alt="arrow" className='accordion-arrow'></img></button>
        <div className={`accordion-content accordion-show-${show}`}>
            <p>{props.content}</p>
        </div>
      </div>
    );
}

export default CVAccordion;