import React, {  useState } from 'react';
import IconClose from "../assets/icons/Icon_close.svg";
import "../assets/css/chatwidget.css";
import { useDispatch, useSelector } from 'react-redux';
import { agentChatRouter } from '../config/routerConfig';
import axios from 'axios';
import { widgetAgentActions } from '../redux/widgetAgentSlice';
import Draggable from 'react-draggable';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { scriptCreationActions } from '../redux/scriptCreationSlice';

function ChatWidget(props) {
    // const [currentAgent, setCurrentAgent] = useState();
    const currentAgent = useSelector((state) => state.localState.widgetInfo);
    // const messages = useSelector((state) => state.widgetAgent.messages);
    const scriptCreationData = useSelector((state) => state.scriptCreation.data);
    const dispatch = useDispatch();

    // allow dragging
  

    //////////////////////////////// if show ///////////////////////////////////////
    const [showChat, setShowChat] = useState(false);
    const toggleShow = (e) => {
        e.preventDefault();
        setShowChat(!showChat);
    }


   const askWdigetTask = (task) => {
        axios.post(agentChatRouter, {
            script_id:scriptCreationData._id,
            agentName:currentAgent.sageFullName,
            task: task,
            script_data : scriptCreationData, 
        })
        .then((resp) => {
            let respContent = resp.data;
            toast(respContent.content);
            dispatch(scriptCreationActions.addToastMessage({timestamp:respContent.timestamp, content:respContent.content, taskType:respContent.taskType}));
            toggleShow();
        })
        .catch((error) => {
            console.log(error);
        })
    }



    return (

            <Draggable>
            <div style={{cursor: 'move' , zIndex: 100000}} >
                <div className='chat-widget'>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={8000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                    <div className='widget'>
                        <div className='widget-img-box img-box' onClick={toggleShow}>
                            <img src={ currentAgent.image} className='box-img' alt="a chat widget img" onClick={(e) => e.preventDefault()}></img>
                        </div>
                    </div>
                    
                    <div className={`widget-chat widget-chat-${showChat}`}>
                        <div className='widget-chat-header'>
                            <div className='widget-chat-heading'>{ currentAgent.sageName}</div>
                            <button className='widget-close-btn' onClick={toggleShow}>
                                <img src={IconClose} alt="icon for close the widget" ></img>
                            </button>
                        </div>
        
                        <div className='widget-chat-body'>

            
                            <div className='widget-block'>
                                <button onClick={() => askWdigetTask("ASK_OPINION")}>Ask his opinion</button>
                                <button onClick={() => askWdigetTask("STORY_STRUCTURE")}>Ask about structure</button>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
          </Draggable>
           
    );
}

export default ChatWidget;