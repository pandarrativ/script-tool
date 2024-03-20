import React , { useEffect, useState } from 'react';
import Chat from '../components/Chat';
import "../assets/css/cvrefinement.css";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useNavigate } from 'react-router-dom';
import { CVRefinementRouter } from '../config/routerConfig';
import axios from 'axios';
import Loading from '../components/Loading';

function CVRefinementPage(props) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [advice, setAdvice] = useState([]);
    const [jobInfo, setJobInfo] = useState({});
    const [pdfURL, setPdfURL] = useState("");

    const nextPage = (e) => {
        e.preventDefault();
        navigate("/cl-generation");
    }    
    // read some information from localstorage, and render this page when first loaded
    useEffect(() =>{
        setJobInfo(JSON.parse(localStorage.getItem("job-info")));
        setPdfURL(localStorage.getItem("cv_pdf_url"));
    },[])

    // function for next suggestions
    const nextPoint = (e) => {
        e.preventDefault();

        setIsLoading(true);
        axios.post(CVRefinementRouter, {
            cv_id: localStorage.getItem("cv_id"),
            job:"Software Engineer",
            company:"Amazon",
            jd: jobInfo.jd,
        })
        .then((resp) => {
            // console.log(resp.data);   
            setAdvice(resp.data);   
            setIsLoading(false);  
        })
        .catch((e) => {
            console.log(e);
            alert(e);
        })
    }


    return (
        <div className='main'>
            <div className='cv-refinement'>
                <div className="cv-refinement-left">
                    <div className='cv-refinement-heading'>Resume Refinement</div>
                    <div className='cv-refinement-left-top'>
                        <div className='cv-refinement-point'>
                            <span>Point</span>
                            <div className='cv-refinement-point-block'>
                                <p>{advice.point}</p>
                            </div>
                        </div>

                        <div className='cv-refinement-suggesttion'>
                            <span>Suggestions</span>
                            <div className='cv-refinement-suggesttion-block'>
                                <p>{advice.suggestions}</p>
                            </div>
                            <div className='cv-refinement-btns'>
                                <button>Apply</button>
                                <button onClick={nextPoint}>Next Suggestion</button>
                            </div>
                        </div>
                    </div>
                    <div className='cv-refinement-left-bottom'>
                        <Chat 
                            lightMode={props.lightMode}
                            messageSettings={`You are a helping assistant. The user now is preparing applying for ${jobInfo.job}. You need to help him to refine his cv. Control your response in 100 words.`}
                            firstSentence={`Hi there! I am here to help you understand which part you need to highlight in your CV.`}
                        ></Chat>
                    </div>
                </div>

                <div className="cv-refinement-right">
                    <div className="code-editor-btns">
                        <button onClick={nextPage}>Get Cover Letter</button>

                    </div>

                    <iframe
                            title="pdf-viewer"
                            width="100%"
                            height="830px"
                            src={pdfURL}
                    ></iframe>

                </div>
            </div>

            <Loading isLoading={isLoading}></Loading>
        </div>
    );
}

export default CVRefinementPage;