import React from 'react';

function WidgetMessage(props) {
    return (
        <div className={`widget-message widget-message-me-${props.fromMe}`}>
            {!props.fromMe  &&
            <div className='widget-profile-container'>
                <div className='widget-profile img-box'>
                    <img src={props.profile} className='box-img'></img>
                </div>
            </div>
             
            }
    
            <div className='widget-content'>
               {props.content}
            </div>
        </div>
    );
}

export default WidgetMessage;