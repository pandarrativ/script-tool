import React, {useState, useRef, useEffect} from 'react';
import Message from './Message';
import ChatContainer from './ChatContainer';
import "../assets/css/conversationmodal.css";
import IconClose from "../assets/icons/close.svg";


function ConversationModal(props) {
    const [msgs, setMsgs] = useState([]);
    // scroll to bottom
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgs]);


    return (
        <div className='conversation-modal'>
            <div className='conversation-title'>Mock Dialogue <button className='modal-close' onClick={props.closeModal}><img src={IconClose} alt="close button"></img></button></div>
             <div className='conversation-characters'>
               
                <div className='conversation-character'>John</div>
                <div className='conversation-character'>Lisa</div>
                <div className={`conversation-character conversation-character-me`}>Bennette</div>
                
            </div>

            <div className='modal-messages'>
                {/* <Message fromMe={false}></Message> */}
                {msgs.map( (item, i) => {
                    return (
                    <div className={`messgae-box messgae-box-${item.fromMe ? "right":"left"}`}  ref={scrollRef} key={i} >
                        <Message fromMe={item.fromMe} content={item.content} time={item.time}></Message>
                    </div>
                    );
                })}
            </div>

            <ChatContainer ></ChatContainer>
        </div>
    );
}

export default ConversationModal;