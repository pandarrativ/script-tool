import React, { useState } from 'react';
import "../assets/css/home.css"
import IconUploadDark from "../assets/icons/icon_upload_dark.svg";
import IconAddDark from "../assets/icons/icon_add_dark.svg";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { masterAgentActions } from '../redux/materaAgentSlice';
// import { initScriptCreation } from '../redux/scriptCreationSlice';

import axios from 'axios';
import { scriptCreationDataRouter } from '../config/routerConfig';
import { scriptCreationActions } from '../redux/scriptCreationSlice';

function Home(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const agentName = useSelector((state) => state.localState.widgetInfo.sageFullName);

    const createCV = (e) => {
        e.preventDefault();
        // dispatch(masterAgentActions.initMessages());

        // dispatch(initScriptCreation()).then(() => navigate("/script-creation")).catch((e) => alert(e));
        axios.post(scriptCreationDataRouter, {
            task:"NEW_SCRIPT_CREATION",
            user_id:"test01",
            agentName:agentName, 
        })
        .then((resp) => {
            // console.log(resp.data);
            dispatch(scriptCreationActions.initScriptCreation({data:resp.data}));
        })
        .then(() => navigate("/script-creation"))
        .catch((e) => alert(e));

    }

    const [filename, setFilename] = useState("");

    const receiveCV = (e) => {
        setFilename(e.target.value.split("\\").pop());
    }

    const uploadCV = (e) => {
        e.preventDefault();

    }


    const renderCVs = () => {
        return (
            <>
                {/* <div className='home-cv-block'>
                    <button className='home-cv-btn home-cv-useit'>Modify!</button>
                    <button className='home-cv-btn home-cv-preview'>Preview</button>
                    <div className='home-cv-info'>Script 1: Your Youth is Dogshit!</div>
                    <div className='home-cv-time'>Last Editing:10/20 12:13</div>
                </div>
                <div className='home-cv-block'>
                    <button className='home-cv-btn home-cv-useit'>Modify!</button>
                    <button className='home-cv-btn home-cv-preview'>Preview</button>
                    <div className='home-cv-info'>Script 2: My Youth Only Has a Dog!</div>
                    <div className='home-cv-time'>Last Editing:1/16 16:45</div>
                </div> */}
            </>
        );
    }

    return (
 
            <div className='home'>
                <div className='home-left-page'>
                    <div className='home-left-heading'>
                        Your Script Collections
                    </div>

                    <div className='home-left-body'>
                        {renderCVs()}
                    </div>




                    <div className='home-left-bottom'>
                        {/* <button >Create A New Script</button> */}
                        <form className='home-upload-cv home-bottom-block' onSubmit={uploadCV}>
                            <div className='home-form-heading'>Upload Template</div>

                            <div className='home-form-body'>
                                <label htmlFor="cv-upload" className='home-form-label'>
                                    <img src={IconUploadDark} alt="icon upload" className='home-form-icon'></img>
                                    <span>{filename ? filename : "Drag and Drop"}</span>
                                    </label>
                                <input type="file" id="cv-upload" name="cv-upload" className="cv-upload" onChange={receiveCV}/>
                                <button className='home-form-btn' type="submit">Upload</button>
                            </div>
                            
                        </form>

                        <div className='home-create-cv home-bottom-block'>
                            <div className='home-form-heading'>Create A Script</div>

                            <button className='home-form-body' onClick={createCV}>
                                <div className='home-form-label'>
                                    <img src={IconAddDark} alt="icon upload" className='home-form-icon'></img>
                                    <span>Recommended</span>
                                    </div>
                                <div className='home-form-btn'>Start</div>
                            </button>
        
                        </div>
                    </div>
                </div>


                <div className='home-right-page'>

                </div>
            </div>

    );
}

export default Home;