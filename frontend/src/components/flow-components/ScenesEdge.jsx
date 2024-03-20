import React from 'react';
import { getBezierPath, getEdgeCenter, getMarkerEnd } from 'react-flow-renderer';
import { useStore } from 'reactflow';
import { useDispatch } from 'react-redux';
import { scriptCreationActions } from '../../redux/scriptCreationSlice';

import iconCloseDark from "../../assets/icons/close_dark.svg";
export const ScenesEdge = ({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, data, arrowHeadType, markerEndId}) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const dispatch = useDispatch();
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({ sourceX, sourceY, targetX, targetY });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  let zoomLevel = useStore((store) => {
    let zoomSize = store.transform[2];
    if(zoomSize < 0.3){
      return 1;
    }else if(zoomSize < 0.8){
      return 2;
    }else if (zoomSize < 1.1){
      return 3;
    }else{
      return 4;
    }
  });

  let strokeWidthMapping = (zoomLevel) => {
    if(zoomLevel == 1){
      return 10;
    }else if(zoomLevel == 2){
      return 7;
    }else if(zoomLevel == 3){
      return 2;
    }else{
      return 1;
    }
  }


  return (
    <>
      <path
        id={id}
        style={{strokeWidth:strokeWidthMapping(zoomLevel)}}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
         
      {/* <circle cx={edgeCenterX} cy={edgeCenterY} r={4} fill="#222" /> */}
      {/* <text>
        <textPath href={`#${id}`} style={{ fontSize: '12px' }} startOffset="50%" textAnchor="middle">
          {data.text}
        </textPath>
      </text> */}
      <foreignObject width={20} height={20} x={edgeCenterX - 10} y={edgeCenterY -10} className="edgebutton-foreignobject" >

        <button className='scene-edge-btn' onClick={() => dispatch(scriptCreationActions.deleteSceneEdge({deletedId:id}))}>
            <img src={iconCloseDark} alt="close button"></img>
        </button>

      </foreignObject>
    </>
  );
};
