import React, { useEffect, useState } from 'react';
import Chat from '../components/Chat';
import "../assets/css/clgeneration.css";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useNavigate } from 'react-router-dom';
import { clGenerationRouter } from '../config/routerConfig';
import axios from 'axios';
import Loading from '../components/Loading';

function CLGenerationPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const [fitting, setFitting] = useState();
    const [jobInfo, setJobInfo] = useState({});
    useEffect(() =>{
            setFitting(JSON.parse(localStorage.getItem("fitting_analysis_resp")).reason );
            setJobInfo(JSON.parse(localStorage.getItem("job-info")));
        },[])

        
    const nextPage = (e) => {
        e.preventDefault();
        navigate("/mock-interview");
    }

    const onChange = React.useCallback((val, viewUpdate) => {
        setCode(val);
      }, []);
    
 

    const generateCL = (e) => {
        e.preventDefault();

        setIsLoading(true);
        axios.post(clGenerationRouter, {
            cv_id: localStorage.getItem("cv_id"),
            job:"Software Engineer",
            company:"Amazon",
            jd: jobInfo.jd,
        })
        .then((resp) => {
            // console.log(resp.data);   
            setCode(resp.data);
            setIsLoading(false);
        })
        .catch((e) => {
            console.log(e);
            alert(e);
        })

    }

    return (
        <div className='main'>
            <div className='cl-generation'>
                <div className="cl-generation-left">
                    <div className='cl-generation-heading'>Cover Letter Generation</div>
                    <div className='cl-generation-left-top'>
                        <div className='cl-generation-jd'>
                            <span>Job Description</span>
                            <div className='cl-generation-jd-block'>
                                <p>{jobInfo.jd}</p>
                            </div>
                        </div>

                        <div className='cl-generation-suggesttion'>
                            <span>Highlight points of your strength and fitting reason</span>
                            <div className='cl-generation-suggesttion-block'>
                                <p>{fitting}</p>
                            </div>
                        </div>
                    </div>
                    <div className='cl-generation-left-bottom'>
                        <Chat 
                            lightMode={props.lightMode}
                            messageSettings={`You are a helping assistant. The user now is preparing applying for ${jobInfo.job}. You need to help him with his cover letter. Control your response in 100 words.`}
                            firstSentence={`Hi there! I am here to help you make the editing accoridng to your own thoughts.`}
                        
                        ></Chat>
                    </div>
                </div>

                <div className="cl-generation-right">
                    <div className="code-editor-btns">
                        <button onClick={generateCL}>Generate CL</button>
                        <button onClick={nextPage}>Mock Interview</button>

                    </div>

                    {/* <Document file={"sample.pdf"}>
                        <Page pageNumber={1} />
                    </Document> */}

                    {props.lightMode ?
                        <CodeMirror
                            value={code}
                            onChange={onChange}
                            className="cvgeneration-code-editor"
                            height="830px"
                            width="830px"
                            mode="javascript"
                        ></CodeMirror>
                        :
                        <CodeMirror
                            value={code}
                            onChange={onChange}
                            className="cvgeneration-code-editor"
                            height="830px"
                            width="830px"
                            theme={vscodeDark}
                        ></CodeMirror>
                    }
                </div>
            </div>

            <Loading isLoading={isLoading}></Loading>
        </div>
    );
}

export default CLGenerationPage;