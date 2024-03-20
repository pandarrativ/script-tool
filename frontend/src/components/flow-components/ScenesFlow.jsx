import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, { applyNodeChanges ,MiniMap,Controls,Background,useNodesState,useEdgesState ,ControlButton , useReactFlow, ReactFlowProvider,Panel  } from 'reactflow';
import iconFlowNode from "../../assets/icons/flow-node.svg";
import iconAddNotes from "../../assets/icons/add-note.svg";
import "../../assets/css/flow.css";

import { HeadNode, SceneNode1, SceneNote1 } from './ScenesNodes';
import { ScenesEdge } from './ScenesEdge';

import { initNodeConfig } from '../../config/sceneNodesConfig';
import { useDispatch, useSelector } from 'react-redux';
import { scriptCreationActions } from '../../redux/scriptCreationSlice';



const nodeTypes = {
    HeadNode: HeadNode,
    SceneNode1: SceneNode1,
    SceneNote1: SceneNote1
};

const edgeTypes = {
    ScenesEdge: ScenesEdge,
  };

const minimapStyle = {
  height: 120,
};





function ScenesFlow(props) {
  const dispatch = useDispatch();
  const scenesData = useSelector((state) => state.scriptCreation.data.scenesData);

    
    // const 
    const { setViewport} = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    // Synchronize React Flow's nodes with Redux nodes
    useEffect(() => {
      console.log(scenesData.nodesData.nodes);
      setNodes(scenesData.nodesData.nodes);
      setEdges(scenesData.nodesData.edges);
    }, [scenesData, setNodes]);


    // init the starting view size and position
    const handleTransform = useCallback(() => {
        setViewport({ x: 900, y: 400, zoom: 0.2 }, { duration: 200 });
      }, [setViewport]); 
    
    // default viewpoint
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          handleTransform();
        }, 200); // Adjust the delay as needed
      
        return () => clearTimeout(timeoutId);
      }, [handleTransform]);
    
    const addNewSceneNode1 = () => {
        const nodeCounts = scenesData.nodesData.nodes.length + 1;
        const newNode = {
            id: `node-${nodeCounts}`,
            type: 'SceneNode1', // Use the custom node type
            position: { x: 50, y: 500 },
            data: { title: `Scene ${nodeCounts}`, nodeId:nodeCounts},
          };
          dispatch(scriptCreationActions.addSceneNode({nodeData:newNode}));
    }

    // save data on change
    const handleNodesChange = (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
      // Check for position changes indicating the end of a drag operation
      changes.forEach((change) => {
        if (change.type === 'position' && change.dragging) {
          dispatch(scriptCreationActions.updateSceneNodeInfo({id:change.id, attributeName:"position", newData:change.position }))
        }
      });
    };

    //  add notes
    const addNewSceneNote1 = () => {
      const nodeCounts = scenesData.nodesData.nodes.length + 1;
        const newNode = {
            id: `node-${nodeCounts}`,
            type: 'SceneNote1', // Use the custom node type
            position: { x: 50, y: 500 },
            data: {nodeId:nodeCounts},
          };
          dispatch(scriptCreationActions.addSceneNode({nodeData:newNode}));
          // setNodes([...nodes, newNode]);
          // setNodeCounts(nodeCounts +1);
    }

    //  set maximum edge for each handle
    // const onConnect = useCallback((params) => {

    //     const sourceAlreadyConnected = edges.some(edge => edge.source === params.source && edge.sourceHandle === params.sourceHandle);
    //     const targetAlreadyConnected = edges.some(edge => edge.target === params.target && edge.targetHandle === params.targetHandle);
    
    //     if (!sourceAlreadyConnected && !targetAlreadyConnected) {
    //         const newEdge = {
    //             ...params,
    //             type: 'ScenesEdge', // Use your custom edge type identifier
    //             data: { onDelete: onDeleteEdge }, // Assuming you have an onDeleteEdge function
    //         };
    
    //         setEdges((eds) => addEdge(newEdge, eds));

    //     } else {
    //         alert("You can only have one edge!")
    //     }
    // }, [edges]);

    //  set edge onConnect
    const onConnect = useCallback((params) => {
      const edgeCounts = scenesData.nodesData.edges.length + 1;
      const newEdge = {
            ...params,
            id: `node-${edgeCounts}`,
            animated: true,
            type: 'ScenesEdge', // Use your custom edge type identifier
        };
        dispatch(scriptCreationActions.addSceneEdge({edgeData:newEdge}))
      // setEdges((eds) => addEdge(newEdge, eds));
  }, [edges]);


    return (
        <div className='flow-container' id="scenes-flow">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={handleNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}  // set maximun edges connected
                minZoom={0.1}
                maxZoom={2.5}
                // defaultZoom={0.2}
                attributionPosition="top-right"
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
     
    

    
            >
            <MiniMap style={minimapStyle} zoomable pannable />
        
            <Controls>
                {/* add node */}
                <ControlButton onClick={addNewSceneNode1} title="Add Node">
                    <img className='flow-control-icon' src={iconFlowNode} alt="node"></img>
                </ControlButton>
                {/* add notes */}
                <ControlButton onClick={addNewSceneNote1}>
                    <img src={iconAddNotes} className='flow-control-icon' alt="add notes button"></img>
                </ControlButton>
            </Controls>

            <Panel position="top-right" id='scene-flow-panel'>
                <button onClick={props.storeAndNextStep}>Next Step</button>
            </Panel>
            <Background color="#aaa" gap={16} />
            </ReactFlow>

        </div>


      );
}

export default ScenesFlow;


export const ScenesFlowWrapper = (props) => (
    <ReactFlowProvider>
      <ScenesFlow storeAndNextStep={props.storeAndNextStep}/>
    </ReactFlowProvider>
  );