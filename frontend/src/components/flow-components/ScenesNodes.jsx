import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Handle, Position, useStore } from 'reactflow';
import iconCloseBtn from "../../assets/icons/Icon_close.svg";
import iconCloseDark from "../../assets/icons/close_dark.svg";
import iconMinimize from "../../assets/icons/node-minimize.svg";
import iconMaximize from "../../assets/icons/node-maximize.svg";
import iconColorPicker from "../../assets/icons/color-picker.svg";
import { useDispatch, useSelector } from 'react-redux';
import scriptCreationSlice, { scriptCreationActions } from '../../redux/scriptCreationSlice';
import { localStateSliceActions } from '../../redux/localStateSlice';
import axios from 'axios';
import { documentSliceActions } from '../../redux/docomentSlice';
import { scriptCreationDataRouter } from '../../config/routerConfig';




export const HeadNode = ({data}) => {
    return (
      <div className="scenes-head-node scenes-node">
        <span>{data.label}</span>
        <Handle
            type="source"
            position={Position.Right}
            id="scens-node-0"
        />
      </div>
    );
  };
  
  // CustomNode2.js
export const SceneNode1 = ({id,data}) => {
  const dispatch = useDispatch();
  const script_id = useSelector((state) => state.scriptCreation.data._id);
 
  useEffect(() => {
    console.log(data.document_id)
  }, [])


  // const zoomSize = useStore((store) => store.transform[2]);
  let zoomLevel = useStore((store) => {
    let zoomSize = store.transform[2];
    if(zoomSize < 0.3){
      return 1;
    }else if(zoomSize < 0.8){
      return 2;
    }else if (zoomSize < 1){
      return 3;
    }else{
      return 4;
    }
  });

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [nodeColor, setNodeColor] = useState("#A4A3A5");
  const toggleShowColorPicker = () => {setShowColorPicker(!showColorPicker)};
  const setColor = (c) => {setNodeColor(c)}; 

    // values:   // order, title,time,  characters, summary   |  script 
    const [order, setOrder] = useState(data.order);
    const [title, setTitle] = useState(data.title);
    const [characters, setCharacters] = useState(data.characters);
    const [location, setLocation] = useState(data.location);
    const [time, setTime] = useState(data.time);
    const [summary, setSummary] = useState(data.summary);

    const updateOrder = (e) => {
      setOrder(e.target.value);
      dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"order", newData:e.target.value}));
    }
    const updateTitle = (e) => {
      setTitle(e.target.value);
      dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"title", newData:e.target.value}));
    }
    const updateCharacters = (e) => {
      setCharacters(e.target.value);
      dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"characters", newData:e.target.value}));
    }
    const updateLocation = (e) => {
      setLocation(e.target.value);
      dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"location", newData:e.target.value}));
    }
    const updateTime = (e) => {
      setTime(e.target.value);
      dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"time", newData:e.target.value}));
    }
    const updateSummary = (e) => {
      setSummary(e.target.value);
      dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"summary", newData:e.target.value}));
    }


    const openSceneScript = () => {
      axios.post(scriptCreationDataRouter, {
        task: "GET_OR_INIT_SCRIPT",
        script_id: script_id,
        document_id: data.document_id ? data.document_id: "",
      })
      .then((resp) => {
        dispatch(scriptCreationActions.updateSceneNodeData({id:id, attributeName:"document_id", newData:resp.data._id}))
        dispatch(documentSliceActions.setDocumentId({document_id:resp.data._id}));
        dispatch(documentSliceActions.setDocumentContent({textContent:resp.data.textContent, rawContent:resp.data.rawContent}));
      })
      .then(() => dispatch(localStateSliceActions.setRightPanel({rightPanel:"toolbar-screenplay"})))
      .catch((e) => alert(e));
    }



  // level 1: a dot
  // level 2: order + dot + title 
  // level 3: order + title + btns + summary
  // level 4: order +title +btns + character + time + summary
  const renderNode = () => {
    if(zoomLevel === 1){
      return renderLevelOne();
    }else if(zoomLevel === 2){
      return renderLevelTwo();
    }else if(zoomLevel === 3){
      return renderLevelThree();
    }else{
      return renderLevelFour();
    }
  }

  const renderLevelOne = () => {
    return (
      <div className='scene-node-l1-body' style={{backgroundColor:nodeColor}}>
        <input 
          className='scene-node-l1-order' 
          value={order} 
          onChange={(e) => updateOrder(e)}
          ></input>
      </div>
    );
  }

  const renderLevelTwo = () => {
    return (
      <div className='scene-node-l2-body'  style={{backgroundColor:nodeColor}}>
       
          <input className='scene-node-l2-order' value={order}  onChange={(e) => updateOrder(e)}></input>
          <input className='scene-node-l2-title' value={title}  onChange={(e) => updateTitle(e)}></input>
      </div>
    );
  }

  const renderLevelThree = () => {
    return (
      <div className='scene-node-l3-body'>
          <div className='scene-node1-l3-top' style={{backgroundColor:nodeColor}}>
            <input className='scene-node-l3-order' value={order}  onChange={(e) => updateOrder(e)}></input>
            <input className='scene-node-l3-title' value={title}  onChange={(e) => updateTime(e)}></input>
            {renderColorPicker()}
            <button className='scene-node1-close-btn' onClick={() => dispatch(scriptCreationActions.deleteSceneNode({deletedId:id}))}>
              <img src={iconCloseBtn} alt="close button icon"></img>
            </button>
          </div>

          <div className='scene-node1-l3-bottom'>
            <textarea className='scene-node1-textarea' value={summary} onChange={(e) => updateSummary(e)}></textarea>
          </div>
      </div>
    );
  }



  const renderLevelFour = () => {
    return (
      <div className='scene-node1-l4'>
        <div className='scene-node1-top' style={{backgroundColor:nodeColor}}>
          <input className='scene-node-l4-order' value={order}  onChange={(e) => updateOrder(e)}></input>
          <input className='scene-node-l4-title' value={title}  onChange={(e) => updateTitle(e)}></input>
          {renderColorPicker()}
          <button className='scene-node1-close-btn' onClick={() => dispatch(scriptCreationActions.deleteSceneNode({deletedId:id}))}>
            <img src={iconCloseBtn} alt="close button icon"></img>
          </button>
        </div>

        <div className='scene-node1-body'>
          <div className='scene-node1-body-0 scene-node1-body-section'>
            <span>Location</span>
              <input className='scene-node1-input' value={location} onChange={(e) => updateLocation(e)}></input>
          </div>
          <div className='scene-node1-body-1 scene-node1-body-section'>
            <span>Time</span>
              <input className='scene-node1-input' value={time} onChange={(e) => updateTime(e)}></input>
          </div>
          <div className='scene-node1-body-2 scene-node1-body-section'>
            <span>Characters</span>
            <input className='scene-node1-input' value={characters} onChange={(e) => updateCharacters(e)}></input>
          </div> 
        
        <div className='scene-node1-body-3 scene-node1-body-section'>
          <span>Summary</span>
          <textarea className='scene-node1-textarea' value={summary} onChange={(e) => updateSummary(e)}></textarea>
        </div>

        <div className='scene-node1-body-4 scene-node1-body-section'>
          <button 
            className='scene-node1-btns' 
            onClick={openSceneScript} 
            style={{backgroundColor:nodeColor+"60"}}
          >Create Script</button>
        </div>
          
      </div>
    </div>
    );
  }


  const renderColorPicker = () => {
    return (
      <div className='scene-node1-color-picker'>
          <button className='scene-node1-close-btn' onClick={toggleShowColorPicker}>
            <img src={iconColorPicker} alt="color picker button icon"></img>
          </button>
          {showColorPicker ? 
          <div className='scene-node1-color-picker-btns'>
            <button className='color-picker-btn' style={{backgroundColor:"#A4A3A5"}} onClick={() => setColor("#A4A3A5")}></button>
            <button className='color-picker-btn' style={{backgroundColor:"#da2c38"}} onClick={() => setColor("#da2c38")}></button>
            <button className='color-picker-btn' style={{backgroundColor:"#226f54"}} onClick={() => setColor("#226f54")}></button>
            <button className='color-picker-btn' style={{backgroundColor:"#ed7d3a"}} onClick={() => setColor("#ed7d3a")}></button>
            <button className='color-picker-btn' style={{backgroundColor:"#87c38f"}} onClick={() => setColor("#87c38f")}></button>
            <button className='color-picker-btn' style={{backgroundColor:"#2274a5"}} onClick={() => setColor("#2274a5")}></button>
          </div>: ""}
      </div>
    );
  }



    return (
      <div className='scenes-scene-node1 scenes-node'>
        
        {renderNode()}


        <Handle
            type="target"
            position={Position.Left}
            id={`scens-node-${data.nodeId}-left`}
        />
        <Handle
            type="source"
            position={Position.Right}
            id={`scens-node-${data.nodeId}-right`}
        />  
        
        {/* <Handle
            type="target"
            position={Position.Top}
            id={`scens-node-${data.nodeId}-top`}
        />
        <Handle
            type="source"
            position={Position.Bottom}
            id={`scens-node-${data.nodeId}-bottom`}
        />   */}
      </div>
    );
  };


export const SceneNote1 = ({id, data}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to recalculate
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]); // Recalculate on value change

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className='scene-note1'>
      <button className='scene-note1-close-btn scene-node1-close-btn' onClick={() => dispatch(scriptCreationActions.deleteSceneNode({deletedId:id}))}>
          <img src={iconCloseDark} alt="close button icon"></img>
      </button>
      <textarea className='scene-note1-textarea'
              ref={textareaRef}
              value={value}
              onChange={handleChange}
              style={{ overflowY: 'hidden' }}
      ></textarea>
    </div>
  );
} ;