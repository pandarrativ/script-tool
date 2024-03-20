import React, {useState, useEffect} from 'react';
import MyEditor from '../components/MyEditor';
import { useNavigate } from 'react-router-dom';
import IconLoading from "../assets/icons/Loading.svg";
import ChatWidget from '../components/ChatWidget';
import { useSelector } from 'react-redux';

function ScriptCreationDisplay(props) {
    // const [editorData, setEditorData] = useState([1,2,3,4]);
    const scriptsDocuments = useSelector((state) => state.documentSlice.scripts);
    const navigate = useNavigate();
    const nextPage = (e) => {
        e.preventDefault();
        navigate("/home");
    }


    return (
        <div className='script-display'>
                <div className='body-top'>
                    <div className='script-display-pages'>
                        {
                            scriptsDocuments.map((item, i) => {
                                return (
                                    <div className='script-display-container'  key = {i}>
                                        <MyEditor showTools={false}  rawContent={item.rawContent} textContent={item.textContent}></MyEditor>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className='button-container'>
                    <button className='script-creation-btn' onClick={nextPage}>Home</button>
                </div>
            
        </div>
    );
}



export default ScriptCreationDisplay;