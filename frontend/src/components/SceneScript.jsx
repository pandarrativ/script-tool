import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyEditor from './MyEditor';
import { localStateSliceActions } from '../redux/localStateSlice';
import { documentSliceActions } from '../redux/docomentSlice';
import axios from 'axios';
import { scriptCreationDataRouter, scriptToolTaskRouter } from '../config/routerConfig';


function SceneScript(props) {
    const editorRef = useRef();
    const scriptCreationData = useSelector((state) => state.scriptCreation.data);
    const document_id = useSelector((state) => state.documentSlice.document_id);
    const textContent = useSelector((state) => state.documentSlice.document.textContent);
    const rawContent = useSelector((state) => state.documentSlice.document.rawContent);
    const dispatch = useDispatch();

    useEffect(() => {
        if(editorRef.current){
            if( Object.keys(rawContent).length !== 0){
                editorRef.current.setRawContent(rawContent);
            }else{
                editorRef.current.setTextContent(textContent);
                
            }
        }
    }, [])

    // close the screenscript and save data
    const close = () => {
        if(document_id){
            axios.post(scriptCreationDataRouter, {
                task: "UPDATE_DOCUMENT",
                script_id: scriptCreationData._id,
                document_id: document_id,
                textContent: editorRef.current.getTextContent(),
                rawContent: editorRef.current.getRawContent(),
            })
            .then((resp) => {
                dispatch(localStateSliceActions.setRightPanel({setRightPanel:""}));
                dispatch(documentSliceActions.cleanDocument());
            })
            .catch((e) => alert(e));
        }else{
            dispatch(localStateSliceActions.setRightPanel({setRightPanel:""}));
            dispatch(documentSliceActions.cleanDocument());
        }
    }

    //
    const AIGenerateScene= () => {
        const nodesData = scriptCreationData.scenesData.nodesData.nodes;
        // console.log(nodesData);
        const theData = nodesData.filter((item) => item.data.document_id === document_id);


        if(theData){
            axios.post(scriptToolTaskRouter, {
                script_id: scriptCreationData._id,
                task:"AI_GENERATE_SCENE",
                logline: scriptCreationData.loglineData.loglineContent,
                outline: scriptCreationData.outlineData.outlineContent,
                sceneData: theData[0].data,
            })
            .then((resp) => {
                // console.log(resp.data.Content);
                if(editorRef.current) {
                    editorRef.current.setTextContent(resp.data.Content);
                    // localStorage.setItem("script_tool_logline_raw", JSON.stringify(getEditorRawContent()));
                }
            })
            .catch((e) => {
                console.log(e);
            })
        }else{
            alert("Data not match!")
        }
 
    }


    return (
        <div className='scene-script'>
                <MyEditor  showTools={true} ref={editorRef}></MyEditor>

          
                <div className='button-container'>
                    <button className='script-creation-btn' onClick={AIGenerateScene}>AI-Generated Scene</button>
                    <button className='script-creation-btn' onClick={close}>Close</button>        
                
                </div>
        </div>
    );
}

export default SceneScript;