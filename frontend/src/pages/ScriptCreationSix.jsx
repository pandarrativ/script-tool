import React, {useState, useEffect} from 'react';
import Conversation from '../components/Conversation';
import { promptQuestions_two } from '../utils/util';
import MyEditor from '../components/MyEditor';
import { useNavigate } from 'react-router-dom';
import IconLoading from "../assets/icons/Loading.svg";
import ChatWidget from '../components/ChatWidget';

function ScriptCreationSix(props) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const nextPage = (e) => {
        e.preventDefault();
        navigate("/home");
        sessionStorage.removeItem("sage-messages");
    }


     // init data
     useEffect(() => {
        const asyncUseEffect = async () => {
            setCurrentSage(JSON.parse(localStorage.getItem("sage-info")));   
            const storedAgentMessages = JSON.parse(sessionStorage.getItem("sage-messages"));
            if(storedAgentMessages){
                setWidgetMessages(storedAgentMessages.messageList);  // loading sage
            }
            
        };
        asyncUseEffect()
    }, [])

    // --------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------
    // For sage agent(widget)
    const [currentSage, setCurrentSage] = useState({});
    const [widgetMessages, setWidgetMessages] = useState([]);
    const [widgetMsg, setWidhetMsg] = useState("");
    // (1)send messages to gpt to get response; (2) store message locally
    const sendMessageWidget = () => {
        // sample response
        let newMessagesList = [...widgetMessages, {role:"assistant", content:"Sample response", waitResponse:false}];
        setWidgetMessages(newMessagesList)
        sessionStorage.setItem("sage-messages", JSON.stringify({messageList:newMessagesList}));
    }
    // handle user input
    const sendMessage = (e) => {
        e.preventDefault();
        setWidgetMessages([...widgetMessages, {role:"user", content:widgetMsg, waitResponse:true}]);
        setWidhetMsg("");
    }
    // when user input, trigger gpt; 
    useEffect(() => {
        if(widgetMessages.length > 0 && widgetMessages[widgetMessages.length - 1].waitResponse){
            sendMessageWidget();
        }
    }, [widgetMessages])
    // when user input, add input to msg
    const handleMsgChange = (e) => {
        setWidhetMsg(e.target.value);
    }


    return (
        <div className='main'>
            <div className='script-creation-six script-creation'>
                <div className='script-creation-left'>
                  <MyEditor showTools={true}></MyEditor>

                </div>

                <div className='script-creation-right'>
                    <Conversation 
                        title="ScreenPlay Agent"
                        // promptQuestions={promptQuestions_two}
                    ></Conversation>
                    <div className='button-container'>
                        <button className='script-creation-btn' onClick={nextPage}>Home</button>
                    </div>
                </div>
            </div>
            

             {/* <ChatWidget currentSage={currentSage} messages={widgetMessages} msg={widgetMsg} sendMessage={sendMessage} handleMsgChange={handleMsgChange}></ChatWidget> */}
             {currentSage.sageFullName !== "None" && 
                <ChatWidget currentSage={currentSage} messages={widgetMessages} msg={widgetMsg} sendMessage={sendMessage} handleMsgChange={handleMsgChange}></ChatWidget>
            }


            {/* loading */}
            <div className={`loading-container isloading-${isLoading}`}>
                <img className="loading" src={IconLoading} alt="loading icon"></img>
            </div>
            <div className={`loading-background isloading-${isLoading}`}></div>
        </div>
    );
}

export default ScriptCreationSix;