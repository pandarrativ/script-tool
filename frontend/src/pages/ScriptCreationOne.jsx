import React, {useEffect, useRef} from 'react';
import MyEditor from '../components/MyEditor';
import axios from 'axios';
import { scriptToolTaskRouter } from '../config/routerConfig';
import LoglineFlow from '../components/flow-components/LoglineFlow';
import { useDispatch, useSelector } from 'react-redux';
import "../assets/css/flow.css";

import { scriptCreationActions, updateScriptionCreationData } from '../redux/scriptCreationSlice';


function ScriptCreationOne(props) {
    const script_id = useSelector((state) => state.scriptCreation.data._id);
    const loglineData = useSelector((state) => state.scriptCreation.data.loglineData);
    const dispatch = useDispatch();
    const editorRef = useRef();
    // init data
    useEffect(() => {
        if(loglineData.loglineRawContent){
            editorRef.current.setRawContent(loglineData.loglineRawContent)
        }
    }, [])

    // --------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------



    // for editor
    const getEditorRawContent = () => {
        if(editorRef.current) return editorRef.current.getRawContent();
    }

    const getEditorTextContent = () => {
        if(editorRef.current) return editorRef.current.getTextContent();
    }

    const generateToglineByAI = (e) => {
        e.preventDefault();

        axios.post(scriptToolTaskRouter, {
            script_id: script_id,
            task:"CREATE_LOGLINE",
            when:loglineData.loglineWhen,
            who:loglineData.loglineWho,
            what:loglineData.loglineWhat,
            why:loglineData.loglineWhy,
            how:loglineData.loglineHow,
            where:loglineData.loglineWhere,
            but:loglineData.loglineBut,
        })
        .then((resp) => {
            console.log(resp.data);
            if(editorRef.current) {
                editorRef.current.setTextContent(resp.data.logline);
                // localStorage.setItem("script_tool_logline_raw", JSON.stringify(getEditorRawContent()));
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    // store current data and go to next Stpe
    const storeAndNextStep = () => {
        dispatch(scriptCreationActions.setLoglineDataState({dataName:"loglineContent", dataValue:editorRef.current.getTextContent()}));
        dispatch(scriptCreationActions.setLoglineDataState({dataName:"loglineRawContent", dataValue:editorRef.current.getRawContent()}));
        // loglineData.loglineContent = editorRef.current.getTextContent();
        // loglineData.loglineRawContent = editorRef.current.getRawContent();
        dispatch(updateScriptionCreationData({script_id:script_id, dataName:"loglineData", dataValue:loglineData}))
        .then(() => props.nextStep())
        .catch((e) => alert(e));
        
    }


    return (
            <div className='script-creation-one'>
                <div className='body-top'>
                    <MyEditor  showTools={true} ref={editorRef}></MyEditor>
                    <LoglineFlow></LoglineFlow>
                </div>
          
                <div className='button-container'>
                    <button className='script-creation-btn' onClick={generateToglineByAI}>AI-Generated Togline</button>        
                    <button className='script-creation-btn' onClick={storeAndNextStep}>Next Step</button>        
                </div>
               
            </div>
            
    );
}

export default ScriptCreationOne;