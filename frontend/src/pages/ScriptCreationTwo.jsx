import React, {useEffect, useRef, useState} from 'react';
import MyEditor from '../components/MyEditor';
import { getFiveActStructure, getHeroJourneyStructure, getSevenPointStructure, getThreeActStructure, structureFiveActResponse, structureHeroJourneyResponse, structureSevenPointResponse, structureThreeActResponse } from '../utils/editorUtils';
import axios from 'axios';
import { scriptCreationDataRouter, scriptToolTaskRouter } from '../config/routerConfig';
import { useDispatch, useSelector } from 'react-redux';
import { scriptCreationActions, updateScriptionCreationData } from '../redux/scriptCreationSlice';

function ScriptCreationTwo(props) {
    const editorRef = useRef();
    const [structureType, setStructureType] = useState();
    const dispatch = useDispatch();
    const scriptCreationData = useSelector((state) => state.scriptCreation.data);
    // init data
    useEffect(() => {
        if(scriptCreationData.outlineData.outlineRawContent){
            editorRef.current.setRawContent(scriptCreationData.outlineData.outlineRawContent)
        }
    }, [])

    // set structure tempate
    const setSelectOption = (e) => {
        const type = e.target.value
        setStructureType(type);
        if(type === "Three-Act Structure"){
            editorRef.current.setRawContent(getThreeActStructure());
        }else if(type === "Hero's Journey"){
            editorRef.current.setRawContent(getHeroJourneyStructure());
        }else if(type === "Five-Act Structure"){
            editorRef.current.setRawContent(getFiveActStructure());
        }else if(type === "Seven-Point Story Structure"){
            editorRef.current.setRawContent(getSevenPointStructure());
        }
    }



    //////////////////////////////////////////////////////////////
    // for editor
    //////////////////////////////////////////////////////////////
    // for editor
    const getEditorRawContent = () => {
        if(editorRef.current) return editorRef.current.getRawContent();
    }

    const getEditorTextContent = () => {
        if(editorRef.current) return editorRef.current.getTextContent();
    }


    const generateOutlineByAI = (e) => {
        e.preventDefault();

        axios.post(scriptToolTaskRouter, {
            script_id: scriptCreationData._id,
            task:"CREATE_BEAT_SHEET",
            logline:scriptCreationData.loglineData.loglineContent,
            structureType: structureType,
           
        })
        .then((resp) => {
            console.log(resp.data);
            if(structureType === "Three-Act Structure"){
                editorRef.current.setRawContent(structureThreeActResponse(resp.data));
            }else if(structureType === "Hero's Journey"){
                editorRef.current.setRawContent(structureHeroJourneyResponse(resp.data));
            }else if(structureType === "Five-Act Structure"){
                editorRef.current.setRawContent(structureFiveActResponse(resp.data));
            }else if(structureType === "Seven-Point Story Structure"){
                editorRef.current.setRawContent(structureSevenPointResponse(resp.data));
            }
            // if(editorRef.current) editorRef.current.setRawContent(structureBeatSheetResponse(resp.data));
        })
        .catch((e) => {
            console.log(e);
        })
    }


    // store current data and go to next Stpe
    const storeAndNextStep = () => {
        // store current data locally
        dispatch(scriptCreationActions.setOutlineDataState({dataName:"structureType", dataValue:structureType}));
        dispatch(scriptCreationActions.setOutlineDataState({dataName:"outlineContent", dataValue:editorRef.current.getTextContent()}));
        dispatch(scriptCreationActions.setOutlineDataState({dataName:"outlineRawContent", dataValue:editorRef.current.getRawContent()}));
        // store data in database
        dispatch(updateScriptionCreationData({script_id:scriptCreationData._id, dataName:"outlineData", dataValue:scriptCreationData.outlineData}))
        .then(() => {
            if(Object.keys(scriptCreationData.scenesData.nodesData).length === 0){
                setTimeout(() => {
                    axios.post(scriptToolTaskRouter, {
                        task: "INIT_NODES_SETTINGS",
                        script_id: scriptCreationData._id,
                        logline: scriptCreationData.loglineData.loglineContent,
                        outline: scriptCreationData.outlineData.outlineContent,
                    })
                    .then((resp) => {
                        console.log(resp.data);
                        dispatch(scriptCreationActions.setScenesType({nodesData:resp.data}))
                    })
                    .then(() => props.nextStep())
                    .catch((e) => alert(e));
                }, 500)
            }
        })
        .catch((e) => alert(e)); 
    }


    // const storeAndNextStep = () => {
    //     dispatch(updateScriptionCreationData({script_id:scriptCreationData._id, dataName:"scenesData", dataValue:scriptCreationData.scenesData}))
    //     .then(() => {
    //         setTimeout(() => {
    //             axios.post(scriptCreationDataRouter, {
    //                 task: "FIND_ALL_DOCUMENTS",
    //                 script_id: scriptCreationData._id,
    //             })
    //             .then((resp) => {
    //                 dispatch(documentSliceActions.setScripts({scripts:resp.data}))
    //             })
    //             .catch((e) => alert(e));
    //         }, 500)
    //     })
    //     .then(() => {
    //         setTimeout(() => props.nextStep(), 1000)
    //     })
    //     .catch((e) => alert(e)); 
    // }





    return (

            <div className='script-creation-two'>
                <div className='body-top'>
                  <MyEditor showTools={true} ref={editorRef}></MyEditor>
                </div>


                <div className='button-container'>
                    <select className='script-creation-select' onChange={setSelectOption}>
                        <option value="">--Select Structure Template--</option>
                        <option value="Three-Act Structure">Three-Act Structure</option>
                        <option value="Hero's Journey">Hero's Journey</option>
                        <option value="Five-Act Structure">Five-Act Structure</option>
                        <option value="Seven-Point Story Structure">Seven-Point Story Structure</option>
                        {/* <option value="Nonlinear Narrative">Nonlinear Narrative</option> */}
                        {/* <option value="Customize">Customize</option> */}

                    </select>
                    {/* if select a structure type */}
                    {structureType && <button className='script-creation-btn' onClick={generateOutlineByAI}>AI-Generated Outline</button>}
                    <button className='script-creation-btn' onClick={storeAndNextStep}>Next Step</button>   
                        
                </div>
            </div>

    );
}
export default ScriptCreationTwo;