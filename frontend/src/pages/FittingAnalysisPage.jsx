import React, { useEffect, useState } from 'react';
import Conversation from '../components/Conversation';
import "../assets/css/conversation.css";
import "../assets/css/fittinganalysis.css";
import SampleImg from "../assets/imgs/image.png";
import { useNavigate } from 'react-router-dom';
import TransitionsModal from '../components/TransitionsModal';


function FittingAnalysisPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [jobInfo, setJobInfo] = useState({});
    const [resp, setResp] = useState({});
    useEffect(() => {
        if(! localStorage.getItem("job-info")){
            alert("Please select a job first!")
            navigate("/home");
        }

        if(! localStorage.getItem("cv_id")){
            alert("Please create your resume first!")
            navigate("/home");
        }

        if(! localStorage.getItem("fitting_analysis_resp")){
            alert("Please select a job first!")
            navigate("/job-search");
        }
     
        setJobInfo(JSON.parse(localStorage.getItem("job-info")));
        setResp(JSON.parse(localStorage.getItem("fitting_analysis_resp")));
    },[])

    const nextPage = (e) => {
        e.preventDefault();
        navigate("/cv-refinement");
    }




    return (
        <div className='main'>
            <div className='fitanalysis-page'>
                <div className='fitanalysis-page-left'>
                    <div className='fitanalysis-page-left-heading'>
                        Fitting Analysis
                    </div>

                    <div className='fitanalysis-page-position-block'>
                        <img src={SampleImg} alt="sample img" className='fitanalysis-position-img'></img>
                        
                        <div className='fitanalysis-position-info'>
                            <div className='fitanalysis-position'>{jobInfo.job}</div>

                            <div className='fitanalysis-company'>{jobInfo.company}</div>
                            <div className='fitanalysis-info-list'>
                                <div>Part-time</div>
                                <div>Remote, Hibrid</div>
                                <div>$ 143K/yr - $ 204 K/yr</div>
                            </div>

                            {/* <button className='fitanalysis-position-btn'>See Job Description</button> */}
                            <div className='fitanalysis-position-btn'>
                                <TransitionsModal
                                    lightMode={props.lightMode}    
                                    jd={jobInfo.jd}
                                ></TransitionsModal>
                            </div>
                            
                        </div>
                    </div>

                    <div className='fitanalysis-page-left-score'>
                        Fitting score:80
                    </div>

                    <div className='fitanalysis-page-left-reason'>
                        <p>{"Fitting Reason: " + resp.reason}</p>
                    </div>


                    <div className='fitanalysis-page-left-whyyou'>
                        <p>{"Why you: " + resp.why_me}</p>
                    </div>

                    <div className='fitanalysis-page-left-btns'>
                        <button onClick={nextPage}>Help me refine the CV to fit better</button>
                    </div>
                </div>

                <div className='fitanalysis-page-right'>
                    <Conversation 
                        conversationType={"fitting-analysis"}
                        lightMode={props.lightMode}
                        characterName={"HR <You could ask HR any questions about fitting>"}
                        info={"Active now"}
                        firstSentence={`Hi, I'm HR at the company. Do you have any doubt about fitting?`}
                        showEndBtn={false}
                        setIsLoading={setIsLoading}
                    ></Conversation>
                </div>
            </div>
        </div>
    );
}

export default FittingAnalysisPage;