import React, { useEffect, useState } from 'react';
import ScriptCreationOne from "../pages/ScriptCreationOne";
import ScriptCreationTwo from "../pages/ScriptCreationTwo";
import ScriptCreationThree from "../pages/ScriptCreationThree";
import ScriptCreationFour from "../pages/ScriptCreationFour";
import ScriptCreationFive from "../pages/ScriptCreationFive";
import IconLoading from "../assets/icons/Loading.svg";
import IconMenu from "../assets/icons/menu.svg";
import ChatWidget from "../components/ChatWidget";


import { useDispatch, useSelector } from 'react-redux';
import { scriptCreationActions, updateScriptionCreationData } from '../redux/scriptCreationSlice';
import { acivatePage } from '../redux/scriptCreationSlice';

import LoglineIcon from "../assets/icons/header_bookmark.svg";
import Elements from '../components/Elements';
import { localStateSliceActions } from '../redux/localStateSlice';
import ToastMessages from '../components/ToastMessages';
import Conversation from '../components/Conversation';
import SceneScript from '../components/SceneScript';
import ScriptCreationDisplay from './ScriptCreationDisplay';

function ScriptCreation(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    // const [rightPanel, setRightPanel] = useState("");
    const rightPanel = useSelector((state) => state.localState.rightPanel);

    const scriptCreationData = useSelector((state) => state.scriptCreation.data);
    const isElementChanged = useSelector((state) => state.localState.elementChanged);
    const dispatch = useDispatch();


    const goNextStep = (stageName) => {
        if(!scriptCreationData.activatedStages.includes(stageName)){
            dispatch(acivatePage({script_id:scriptCreationData._id, stageName:stageName}))
            .then(() => {
                dispatch(scriptCreationActions.setCurrentStage({stageName:stageName}));         
            })
            .catch((e) => alert(e));
        }else{
            dispatch(scriptCreationActions.setCurrentStage({stageName:stageName}));  
        }
    }


    const renderCurrentStage = () => {
        if(scriptCreationData.currentStage === "Logline"){
            return <ScriptCreationOne
                        nextStep={() => goNextStep("Outline")}
                    ></ScriptCreationOne>;
        }else if(scriptCreationData.currentStage === "Outline"){
            return <ScriptCreationTwo
                        nextStep={() => goNextStep("Scenes")}
                    ></ScriptCreationTwo>;
        // }else if(scriptCreationData.currentStage === "Plot"){
        //     return <ScriptCreationThree
        //                 nextStep={() => goNextStep("Treatment")}
        //             ></ScriptCreationThree>;
        // }else if(scriptCreationData.currentStage === "Treatment"){
        //     return <ScriptCreationFour
        //                 nextStep={() => goNextStep("Scenes")}
        //             ></ScriptCreationFour>;
        }else if(scriptCreationData.currentStage === "Scenes"){
            return <ScriptCreationFive nextStep={() => goNextStep("ScreenPlay")}/>;
        }else if(scriptCreationData.currentStage === "ScreenPlay"){
            return <ScriptCreationDisplay></ScriptCreationDisplay>
        }

    }

    const renderRightPanel = () => {
        if(rightPanel === "toolbar-elements"){
            return <Elements></Elements>;
        }else if(rightPanel === "toolbar-conversation"){
            return <Conversation></Conversation>
        }else if(rightPanel === "toolbar-toasts"){
            return <ToastMessages></ToastMessages>
        }else if(rightPanel === "toolbar-screenplay"){
            return <SceneScript></SceneScript>
        }else{
            return ""
        }
    }



    return (
        <div className='main'>
            <div className='script-creation'>
                <div className='script-creation-toolbar'>
                    <div className="script-creation-toolbar-item">
                       
                        {/* top tool bar */}
                        <button id='top-toolbar-menu' onClick={() => setShowMenu(!showMenu)} title="Section Menu">
                            <img src={IconMenu} alt=""></img>
                        </button>

                        <input className='script-name' 
                            value={scriptCreationData.name} 
                            onChange={(e) => dispatch(scriptCreationActions.setName({name:e.target.value}))}
                            onBlur={() => dispatch(updateScriptionCreationData({script_id:scriptCreationData._id, dataName:"name", dataValue:scriptCreationData.name}))}
                        ></input>

                        <button id="toolbar-conversation" title="Conversation" onClick={() => {
                            if(rightPanel === "toolbar-conversation"){
                                dispatch(localStateSliceActions.setRightPanel({rightPanel:""}));
                            }else{
                                // setRightPanel("toolbar-conversation");
                                dispatch(localStateSliceActions.setRightPanel({rightPanel:"toolbar-conversation"}))
                            }
                        }}>
                            <img src={LoglineIcon} alt=""></img>
                        </button>

                        <button id="toolbar-elements" title="Elements" onClick={() => {
                            if(rightPanel === "toolbar-elements"){
                                if(isElementChanged){
                                    dispatch(updateScriptionCreationData({script_id:scriptCreationData._id, dataName:"elements", dataValue:scriptCreationData.elements}))
                                    .then(() => {
                                        dispatch(localStateSliceActions.setElementChanged(false));
                                        // setRightPanel("");
                                        dispatch(localStateSliceActions.setRightPanel({rightPanel:""}));
                                    })
                                    .catch((e) => alert(e));
                                    
                                }else{
                                    // setRightPanel("");
                                    dispatch(localStateSliceActions.setRightPanel({rightPanel:""}));
                                }
                                
                            }else{
                                // setRightPanel("toolbar-elements");
                                dispatch(localStateSliceActions.setRightPanel({rightPanel:"toolbar-elements"}));
                            }
                        }}>
                            <img src={LoglineIcon} alt=""></img>
                        </button>

                        <button id="toolbar-toasts" title="Tips" onClick={() => {
                            if(rightPanel === "toolbar-toasts"){
                                // setRightPanel("");
                                dispatch(localStateSliceActions.setRightPanel({rightPanel:""}));
                            }else{
                                // setRightPanel("toolbar-toasts");
                                dispatch(localStateSliceActions.setRightPanel({rightPanel:"toolbar-toasts"}));
                            }
                        }}>
                            <img src={LoglineIcon} alt=""></img>
                        </button>
                    </div> 
                </div>


                <div className='script-creation-mainbody'>
                    <div className={`script-creation-navbar navbar-showmenu-${showMenu}`}>
                        <div className='tool-menu-top'>
                            <div className='tool-menu-item'>
                                <button className={`tool-top-btn tool-top-btn-activated-${scriptCreationData.activatedStages.includes("Logline")}`} onClick={() => {
                                            if(scriptCreationData.activatedStages.includes("Logline")){
                                                dispatch(scriptCreationActions.setCurrentStage({stageName:"Logline"})); 
                                            }
                                        }}>
                                    <img src={LoglineIcon} alt="a menu icon"></img>
                                    <span>Logline</span>
                                </button>
                            </div>
                            <div className='tool-menu-item'>
                                <button className={`tool-top-btn tool-top-btn-activated-${scriptCreationData.activatedStages.includes("Outline")}`} onClick={() => {
                                            if(scriptCreationData.activatedStages.includes("Outline")){
                                                dispatch(scriptCreationActions.setCurrentStage({stageName:"Outline"})); 
                                            }
                                        }}>
                                    <img src={LoglineIcon} alt="a menu icon"></img>
                                    <span>Outline</span>
                                </button>
                            </div>
                            {/* <div className='tool-menu-item'>
                                <button className={`tool-top-btn tool-top-btn-activated-${scriptCreationData.activatedStages.includes("Plot")}`} onClick={() => {
                                            if(scriptCreationData.activatedStages.includes("Plot")){
                                                dispatch(scriptCreationActions.setCurrentStage({stageName:"Plot"})); 
                                            }
                                        }}>
                                    <img src={LoglineIcon} alt="a menu icon"></img>
                                    <span>Plot</span>
                                </button>
                            </div>
                            <div className='tool-menu-item'>
                                <button className={`tool-top-btn tool-top-btn-activated-${scriptCreationData.activatedStages.includes("Treatment")}`} onClick={() => {
                                            if(scriptCreationData.activatedStages.includes("Treatment")){
                                                dispatch(scriptCreationActions.setCurrentStage({stageName:"Treatment"})); 
                                            }
                                        }}>
                                    <img src={LoglineIcon} alt="a menu icon"></img>
                                    <span>Treatment</span>
                                </button>
                            </div> */}

                            <div className='tool-menu-item'>
                                <button className={`tool-top-btn tool-top-btn-activated-${scriptCreationData.activatedStages.includes("Scenes")}`} onClick={() => {
                                            if(scriptCreationData.activatedStages.includes("Scenes")){
                                                dispatch(scriptCreationActions.setCurrentStage({stageName:"Scenes"})); 
                                            }
                                        }}>
                                    <img src={LoglineIcon} alt="a menu icon"></img>
                                    <span>Scenes</span>
                                </button>
                            </div>

                            <div className='tool-menu-item'>
                                <button className={`tool-top-btn tool-top-btn-activated-${scriptCreationData.activatedStages.includes("ScreenPlay")}`} onClick={() => {
                                            if(scriptCreationData.activatedStages.includes("ScreenPlay")){
                                                dispatch(scriptCreationActions.setCurrentStage({stageName:"ScreenPlay"})); 
                                            }
                                        }}>
                                    <img src={LoglineIcon} alt="a menu icon"></img>
                                    <span>ScreenPlay</span>
                                </button>
                            </div>

                        </div>
                    </div>



                    <div className={`script-creation-body body-showmenu-${showMenu} script-creation-${scriptCreationData.currentStage}`}>
                        {renderCurrentStage()}
                    </div>

                    <div className={`script-creation-toolpanel toolpanel-${rightPanel}`}>
                            {renderRightPanel()}
                    </div>


                </div>



            </div>
            


            <ChatWidget ></ChatWidget>


            {/* loading */}
            <div className={`loading-container isloading-${isLoading}`}>
                <img className="loading" src={IconLoading} alt="loading icon"></img>
            </div>
            <div className={`loading-background isloading-${isLoading}`}></div>
        </div>
    );
}

export default ScriptCreation;