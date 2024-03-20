import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import iconIdea from "../assets/icons/Idea.svg";
import "../assets/css/toastmessages.css";
import { formatWidgetTime } from '../utils/util';

function ToastMessages(props) {
    const widgetName = useSelector((state) => state.localState.widgetInfo.widgetName);
    const toastMessages = useSelector((state) => state.scriptCreation.data.toastMessages);
    // const dispatch = useDispatch();
    const viewRef = useRef();



    return (
        <div className='toast-messages'>
            <div ref={viewRef}></div>
            {toastMessages.map((item, i) => {
                return (
                    <div className='toast-messages-block' key={i}>
                        <div className='toast-messages-block-top'>
                            <img src={iconIdea} alt="idea"></img>
                            <div className='toast-messages-block-name'>{widgetName}</div>
                            <div className='toast-messages-block-time'>{formatWidgetTime(item.timestamp)}</div>
                        </div>
                        <div className='toast-messages-block-body'>{item.content}</div>

                    </div>

                );
            })}
            
        </div>
    );
}

export default ToastMessages;