import React, { useEffect, useState } from "react";
import "../assets/css/cvgeneration.css";
import SelectionForm from "../components/SelectionForm";
import { useNavigate } from 'react-router-dom';
import Loading from "../components/Loading";



const CVGenerationPage = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const [pdfURL, setPdfURL] = useState("");
    const nextPage = (e) => {
        e.preventDefault();
        navigate("/cv-analysis");
    }

    useEffect(()=> {
        setPdfURL(localStorage.getItem("cv_pdf_url"));
    }, [])

    
    

    return (
        <div className="main">
            <div className="cv-generation-page">
                <div className="left-page">
                    <SelectionForm setPdfURL={setPdfURL} setCode={setCode} setIsLoading={setIsLoading}></SelectionForm>

                </div>


                <div className="right-page">
                    <div className="code-editor-btns">
                        {/* <button>Recompile</button> */}
                        <button onClick={nextPage}>Analyze Script</button>

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


export default CVGenerationPage;