import React from "react";
// import ChatBot from "../assets/icons/chat_bot_2.svg";
import AILight from "../assets/icons/AI-light.svg";


const Message = (props) => {    
    return (
        <div className={`message message-me-${props.fromMe}`}>
            {
                props.fromMe ? "" :
                <div className="message-bot img-box">
                    <img className="box-img" src={AILight} alt="a chat bot"></img>
                </div>
            }
            <div className="message-body">
                <div className="message-content">
                    <p>{props.content}</p>
                </div>
            </div>

        </div>
    );
};


export default Message;