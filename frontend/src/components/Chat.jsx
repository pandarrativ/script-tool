import React, {useState, useEffect, useRef} from 'react';
import MessageAvatar from './MessageAvatar';
import SenderIconDark from "../assets/icons/icon_message_send.svg";
import SenderIconLight from "../assets/icons/icon_message_send_light.svg";
import { GPTChatRouter } from '../config/routerConfig';
import axios from 'axios';

function Chat(props) {
    const [msgs, setMsgs] = useState([
        {role:"system", content:props.messageSettings},
        {role:"assistant", content:props.firstSentence},
    ]);

    
    // add user input to prompt and page
    const chat = (e) => {
        e.preventDefault();
        const input = document.querySelector(".chat-input-content").value;
        if(!input){
          alert("type something!")
        }else{
          setMsgs([...msgs, {role:"user", content:input}])
          document.querySelector(".chat-input-content").value = "";
        }
    }

    // method to send msg to gpt
    const sendToGPT = () => {
        axios.post(GPTChatRouter, {
          messages:msgs
        })
        .then((resp) => {
          setMsgs([...msgs, {role:"assistant", content:resp.data}])
        })
        .catch((error) => {
          console.log(error);
        })
    }

    // send message to gpt when prompt is updated by user
    useEffect( () => {
        if(msgs[msgs.length - 1].role === "user"){
        sendToGPT();
        }
    }, [msgs])


    // scroll to bottom
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgs]);
    


    return (
        <div className='chat'>
            <div className='chat-body'>
                
                {msgs.map((item, i) => {
                    if(item.role !== "system"){
                        return (
                            <div ref={scrollRef} key={i} >
                                <MessageAvatar 
                                    fromMe={item.role === "user"} 
                                    username={item.role === "user" ? "temp_user" : "Support"} 
                                    content={item.content} 
                                ></MessageAvatar>
                            </div>
                        )
                    }
                    
                })}
            </div>

            <form className='conversation-input' onSubmit={chat}>
                    <input type="text" placeholder='Type in...' className='chat-input-content'></input>
                    <button type='submit' onClick={props.chat} className="chat-message-input">
                        <img src={props.lightMode ? SenderIconLight: SenderIconDark} alt="icon for emoji folder"></img>
                    </button>
            </form>
        </div>
    );
}

export default Chat;