import React from 'react';
import SampleProfile from "../assets/imgs/sample_profile.jpg";

function MessageAvatar(props) {
    return (
    <div className={`message-avatar message-avatar-me-${props.fromMe}`}>
        <div className='message-avatar-profile'>
            <img src={SampleProfile} alt="sample profile"></img>
        </div>
        <div className="message-avatar-body">
            <div className='message-avatar-username'>{props.username}</div>
            <div className="message-avatar-content">
                <p>{props.content}</p>
            </div>
        </div>

    </div>
    );
}

export default MessageAvatar;