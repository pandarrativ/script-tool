import React from 'react';
import IconDark from "../assets/icons/icon-radio-dark.svg";
import IconLight from "../assets/icons/icon-radio-light.svg";

function SoftSkillBlock(props) {
    const readMore = (e) =>{
        e.preventDefault();
    }

    return (
        <div className='softskill-block'>
            <img className='softskill-block-icon' alt="icon" src={props.lightMode ? IconLight : IconDark}></img>
            <div className='softskill-block-body'>
                <div className='softskill-block-title'>Communication</div>
                <div className='softskill-block-content'>
                    Learn if your resume ddaasdadadasdasdsdasdemonstrates comminication skills
                </div>
            </div>
            <button className='softskill-block-btn' onClick={readMore}>MORE</button>
            
        </div>
    );
}

export default SoftSkillBlock;