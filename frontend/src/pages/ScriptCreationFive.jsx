import React from 'react';
import ScenesFlow, { ScenesFlowWrapper } from '../components/flow-components/ScenesFlow';
import { useDispatch, useSelector } from 'react-redux';

import typeTreeIcon from "../assets/imgs/scenes/type-tree.webp";
import typeZigzagIcon from "../assets/imgs/scenes/type-zigzag.webp";
import typeSnowFlakeIcon from "../assets/imgs/scenes/type-snowflake.webp";
import { scriptCreationActions, updateScriptionCreationData } from '../redux/scriptCreationSlice';
import axios from 'axios';
import { scriptCreationDataRouter } from '../config/routerConfig';
import { documentSliceActions } from '../redux/docomentSlice';


const sceneSelectionTypes = [
    {
        type:"ZigZag",
        image:typeZigzagIcon,
        description: "A zigzag structure weaves a narrative by alternating between chronological order and reverse chronology, creating a dynamic storyline that oscillates, revealing plot intricacies through shifting timelines.",
    },
    {
        type:"Tree",
        image:typeTreeIcon,
        description: "A tree-like structure represents a hierarchical arrangement where a central storyline branches out into multiple sub-stories, each further dividing into finer details, resembling the branches and leaves of a tree, creating a complex network of narratives.",
    },
    {
        type:"Snowflake",
        image:typeSnowFlakeIcon,
        description: "In a snowflake structure, the narrative unfolds from a central event, branching out into interconnected stories and perspectives, inviting the audience to explore the depth and breadth of the storyline.",
    },
];



function ScriptCreationFive(props) {
    const scriptCreationData = useSelector((state) => state.scriptCreation.data);
    const dispatch = useDispatch();


    // const initNodesData = (sceneType) => {
    //     axios.post(scriptCreationDataRouter, {
    //         task: "INIT_NODES_SETTINGS",
    //         script_id: scriptCreationData._id,
    //         sceneType: sceneType,
    //     })
    //     .then((resp) => {
    //         // console.log(resp.data);
    //         dispatch(scriptCreationActions.setScenesType({sceneType:sceneType, nodesData:resp.data}));
    //     })
    //     .catch((e) => alert(e));
    // }


    const storeAndNextStep = () => {
        dispatch(updateScriptionCreationData({script_id:scriptCreationData._id, dataName:"scenesData", dataValue:scriptCreationData.scenesData}))
        .then(() => {
            setTimeout(() => {
                axios.post(scriptCreationDataRouter, {
                    task: "FIND_ALL_DOCUMENTS",
                    script_id: scriptCreationData._id,
                })
                .then((resp) => {
                    dispatch(documentSliceActions.setScripts({scripts:resp.data}))
                })
                .catch((e) => alert(e));
            }, 500)
        })
        .then(() => {
            setTimeout(() => props.nextStep(), 1000)
        })
        .catch((e) => alert(e)); 
    }


    // const renderSceneSelection = () => {
    //     return (
    //     <div className='scene-type-selectin'>
    //         <div className='scene-type-selectin-title'>Pick a story structure!</div>
    //         <div className='scene-type-selectin-body'>
    //             {sceneSelectionTypes.map((item, i) => {
    //                 return (
    //                     <div className='selection-card' key={i}>
    //                         <img className='selection-img' src={item.image} alt="a sample"></img>
    //                         <div className='selection-typename'>{item.type}</div>
    //                         <div className='selection-content'>{item.description}</div>
    //                         <button className='type-selection-btn' onClick={() =>initNodesData(item.type)}>Select</button>
    //                     </div>
    //                 );
    //             })}

    //         </div>
    //     </div>
    //     );
    // }


    return (
            <div className='script-creation-five'>
                <div className='script-creation-five-body'>
                    {/* {scriptCreationData.scenesData.sceneType ? <ScenesFlowWrapper storeAndNextStep={storeAndNextStep}></ScenesFlowWrapper> : renderSceneSelection()} */}
                    <ScenesFlowWrapper storeAndNextStep={storeAndNextStep}></ScenesFlowWrapper>
                </div>

            </div>

    );
}

export default ScriptCreationFive;