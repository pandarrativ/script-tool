import React from "react";
import SenderIconDark from "../assets/icons/icon_message_send_light.svg";
import SenderIconLight from "../assets/icons/icon_message_send_light.svg";

const ChatContainer = (props) => {
    return (
        <div className="chat-container"> 
            <form className='conversation-input'>
                <input type="text" placeholder='Send your message here' className='conversation-input-content'></input>
                <button type='submit' onClick={props.chat} className="chat-message-input">
                    <img src={props.lightMode ? SenderIconLight: SenderIconDark} alt="icon for emoji folder"></img>
                </button>
            </form>
        </div>
    );
}


export default ChatContainer;