import React, { useEffect, useState } from 'react';
import { Handle } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { scriptCreationActions } from '../../redux/scriptCreationSlice';
import axios from 'axios';
import { scriptToolTaskRouter } from '../../config/routerConfig';


export const LoglineNode = ({ data }) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    // const dd = useSelector((state) => state.scriptCreation.data);
    const scriptCreationData = useSelector((state) => state.scriptCreation.data);
    // read local data
    useEffect(()=> {
        // console.log(data.storageName);
        // console.log(dd);
        // console.log(info);
        setInputValue(scriptCreationData.loglineData[data.storageName]);
    }, [])

    // handle input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
        // localStorage.setItem(data.storageName, event.target.value);
        dispatch(scriptCreationActions.setLoglineDataState({dataName:data.storageName, dataValue:event.target.value}))

    };

    const randomizeInfo = () => {
        axios.post(scriptToolTaskRouter, {
            task: "RANDOMIZE_LOGLINE_ELEMENTS",
            elementName: data.title,
            loglineData: scriptCreationData.loglineData,
            outlineData: scriptCreationData.outlineData,
            scenesData: scriptCreationData.scenesData,
        })
        .then((resp) => {
            console.log(resp.data[data.title])
            setInputValue(resp.data[data.title]);
            dispatch(scriptCreationActions.setLoglineDataState({dataName:data.storageName, dataValue:resp.data[data.title]}))
        })
        .catch((e) => alert(e));
    }



    return (
        <div className="togline-node">
        <Handle type="target"  />
        <div className='togline-node-title'>{data.title}</div>
        <textarea 
            value={inputValue} 
            onChange={handleChange} 
        />
        <button onClick={randomizeInfo}>Randomize</button>
        <Handle type="source" />
        </div>
    );
};