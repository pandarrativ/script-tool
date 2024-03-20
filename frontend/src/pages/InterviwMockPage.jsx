import React, { useEffect, useState } from 'react';
import "../assets/css/interviewmock.css"
import Chat from '../components/Chat';
import Conversation from '../components/Conversation';
import SampleImg from "../assets/imgs/sample_backgroud.jpg";
import Loading from '../components/Loading';

function InterviwMockPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [jobInfo, setJobInfo] = useState({});
    useEffect(() =>{
        setJobInfo(JSON.parse(localStorage.getItem("job-info")));
    },[])


    return (
        <div className='main'>
            <div className='interviw-mock'>
                <div className="interviw-mock-left">
                        <div className='interviw-mock-heading'>Interview Mock</div>
                        <div className='interviw-mock-left-top'>
                            <div className='interviw-mock-position'>
                                <img src={SampleImg} alt="sample img"></img>
                                <div className='interviw-mock-position-info'>
                                    <div className='interviw-mock-job'>{jobInfo.job}</div>
                                    <div className='interviw-mock-company'>{jobInfo.company}</div>
                                </div>
                            </div>

                            <div className='interviw-mock-notes'>
                                <span>Take notes here:</span>
                                <div className='interviw-mock-notes-block'>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='interviw-mock-left-bottom'>
                            <Chat 
                                lightMode={props.lightMode}
                                messageSettings={`You are a helping assistant. The user now is doing mock interview for ${jobInfo.job}. You need to help him answer his questions. Control your response in 100 words.`}
                                firstSentence="Hi there! If you meet some questions don't know how to answer, I could give you a sample answer."
                            ></Chat>
                        </div>
                </div>

                <div className='interviw-mock-right'>
                    <Conversation 
                        conversationType={"mock-interview"}
                        lightMode={props.lightMode}
                        characterName={"HR"}
                        info={"Active now"}
                        firstSentence={`Hi, I'm HR at the company. How are you today?`}
                        showEndBtn={true}
                        setIsLoading={setIsLoading}
                    ></Conversation>
                </div>
            </div>

            <Loading isLoading={isLoading}></Loading>
        </div>
    );
}

export default InterviwMockPage;