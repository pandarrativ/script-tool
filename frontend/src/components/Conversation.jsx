import React, { useEffect, useState, useRef } from 'react';
import Message from "./Message";
import axios from 'axios';
import { conversationRouter } from '../config/routerConfig';
import ChatContainer from './ChatContainer';
import { useDispatch, useSelector } from 'react-redux';
import SenderIconDark from "../assets/icons/icon_message_send_light.svg";
import SenderIconLight from "../assets/icons/icon_message_send_light.svg";

import "../assets/css/conversation.css"
import { scriptCreationActions } from '../redux/scriptCreationSlice';

const Conversation = (props) => {
  // const [msgs, setMsgs] = useState([
  //   {role:"assistant", content:"I am here to help!"},
  //   {role:"user", content:"I am here to help!"},
  // ]);
  // const messages = useSelector((state) => state.widgetAgent.messages);
  const scriptCreationData = useSelector((state) => state.scriptCreation.data);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(""); 


  // send message to gpt
  const sendToGPT = () => {
    // setMsgs([...msgs, {role:"assistant", content:"A sample AI response."}])
    // props.setIsLoading(true);
    axios.post(conversationRouter, {
      script_id:scriptCreationData._id,
      task:"CHAT",
      messages:scriptCreationData.conversationMessages,
      scriptInfo:{
        togline:scriptCreationData.loglineData,
        outline:scriptCreationData.outlineData,
        scenes:scriptCreationData.scenesData,
        elements:scriptCreationData.elements,
      }
    })
    .then((resp) => {
      console.log(resp.data)
      dispatch(scriptCreationActions.addConversationMessages({role:"assistant", content:resp.data}));
      // setMsgs([...msgs, {role:"assistant", content:resp.data}])
      // props.setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // user send chat  to the panel
  const chat = (e) => {
    e.preventDefault();
    // const input = document.querySelector(".conversation-input-content").value;
    // console.log()
    if(!inputValue){
      alert("type something!")
    }else{
      dispatch(scriptCreationActions.addConversationMessages({role:"user", content:inputValue}));
      // .then(() => {
      //   setInputValue("");
      //   sendToGPT();
      // })
      // .catch((e) => alert(e));
      // sendToGPT();
      // setInputValue("");

      // add user input to prompt and page
      // setMsgs([...msgs, {role:"user", content:input}]);
      // document.querySelector(".conversation-input-content").value = "";
    }
  }

  // send message to gpt when prompt is updated by user
  useEffect( () => {
    // wait for Ai respnse
    if(scriptCreationData.conversationMessages.length >0 && scriptCreationData.conversationMessages[scriptCreationData.conversationMessages.length - 1].role === "user"){
      sendToGPT();
      setInputValue("");
    }
    // else if(msgs.length >0 && !msgs[msgs.length - 1].waitResponse){ // wait for answer for prompt questions
      
    // }
  }, [scriptCreationData.conversationMessages])

  // scroll to bottom
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scriptCreationData.conversationMessages]);



  return (
    <div className='conversation'>
      
      <div className='conversation-header'>
        <div className='conversation-heading'>AI Conversation</div>
        {/* <div className='conversation-options'>
            <button>Introduction</button>
            <button>Step by Step Guidance</button>
            <button>Brainstorming</button>
        </div> */}
      </div>

      <div className='messages'>
          {scriptCreationData.conversationMessages.map( (item, i) => {
            return (
              <div className={`messgae-box messgae-box-${item.role === "user" ? "right":"left"}`}  ref={scrollRef} key={i} >
                <Message fromMe={item.role === "user"} content={item.content} ></Message>
              </div>
            );
          })}
      </div>


      {/* <ChatContainer chat={chat} lightMode={props.lightMode} ></ChatContainer> */}
      <div className="chat-container"> 
            <form className='conversation-input'>
                <input 
                  type="text" 
                  placeholder='Send your message here' 
                  className='conversation-input-content' 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button type='submit' onClick={chat} className="chat-message-input">
                    <img src={props.lightMode ? SenderIconLight: SenderIconDark} alt="icon for emoji folder"></img>
                </button>
            </form>
        </div>
    </div>
  );

}

export default Conversation;