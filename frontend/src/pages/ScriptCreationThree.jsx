import React, {useState, useEffect} from 'react';
import MyCanvas from '../components/MyCanvas';
import { plotLine } from '../utils/plots/plotsettings';


function ScriptCreationThree(props) {
     // init data
     useEffect(() => {

    }, [])

    return (
            <div className='script-creation-three'>
                <div className='body-top'>
                  <MyCanvas data={plotLine}></MyCanvas>
                </div>


                <div className='button-container'>
                    <button className='script-creation-btn' onClick={() => {}}>AI-suggestions</button>
                    <button className='script-creation-btn' onClick={props.nextStep}>Next Step</button>
                </div>

            </div>
    );
}

export default ScriptCreationThree;