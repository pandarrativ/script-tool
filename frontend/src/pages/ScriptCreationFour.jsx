import React, {useState, useEffect, useRef} from 'react';
import MyEditor from '../components/MyEditor';
import Conversation from '../components/Conversation';
import { promptQuestions_two } from '../utils/util';
import { useNavigate } from 'react-router-dom';
import IconLoading from "../assets/icons/Loading.svg";
import ChatWidget from '../components/ChatWidget';
import { getTreatmentStructure, structureTreatmentResponse } from '../utils/editorUtils';
import axios from 'axios';
import { scriptToolTaskRouter } from '../config/routerConfig';


function ScriptCreationFour(props) {

    const editorRef = useRef();
    // const nextPage = (e) => {
    //     e.preventDefault();
    //     console.log(getEditorRawContent());

    //     localStorage.setItem("script_tool_treatment_raw", JSON.stringify(getEditorRawContent()));
    //     localStorage.setItem("script_tool_treatment_text", getEditorTextContent());
    //     // console.log(getEditorTextContent());
    //     navigate("/script-creation-5");
    // }

     // init data
     useEffect(() => {

        const editorRawData = JSON.parse(localStorage.getItem("script_tool_treatment_raw"));
        // console.log(editorRawData);
        if(editorRawData && editorRef.current) editorRef.current.setRawContent(editorRawData);
    }, [])

    //////////////////////////////////////////////////////////////
    // for editor

    const getEditorRawContent = () => {
        if(editorRef.current) return editorRef.current.getRawContent();
    }

    const getEditorTextContent = () => {
        if(editorRef.current) return editorRef.current.getTextContent();
    }

  
    const setTreatmentStructure = (e) => {
        e.preventDefault();
        if(editorRef.current) editorRef.current.setRawContent(getTreatmentStructure());
    }

    const generateTreatmentByAI = (e) => {
        e.preventDefault();

        axios.post(scriptToolTaskRouter, {
            task:"CREATE_TREATMENT",
            togline:localStorage.getItem("script_tool_logline_text"),
            beat_sheet:localStorage.getItem("script_tool_beatsheet_text"),
        })
        .then((resp) => {
            console.log(resp.data);
            if(editorRef.current) editorRef.current.setRawContent(structureTreatmentResponse(resp.data));
        })
        .catch((e) => {
            console.log(e);
        })
    }


    return (

            <div className='script-creation-four '>
                <div className='body-top'>
                    <MyEditor showTools={true} ref={editorRef}></MyEditor>
                </div>


                <div className='button-container'>
                    <button className='script-creation-btn' onClick={setTreatmentStructure}>Format Template</button>
                    <button className='script-creation-btn' onClick={generateTreatmentByAI}>AI-Generated Treatment</button>
                    <button className='script-creation-btn' onClick={props.nextStep}>Next Step</button>
                </div>
           
            </div>

    );
}

export default ScriptCreationFour;