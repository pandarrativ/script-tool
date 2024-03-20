import React, { useCallback } from 'react';
import ReactFlow, { addEdge,Background,useNodesState,useEdgesState} from 'reactflow';


import "../../assets/css/flow.css";
import { LoglineNode } from './LoglineNode';


const nodeTypes = {
  custom: LoglineNode,
};


const initNodes = () => {
  return [
    {
      id: '1',
      type: 'custom',
      position: { x: 0, y: 0 },
      data: {
        title:"When?",
        storageName:"loglineWhen",
      },
      draggable: false,
    },
    {
      id: '2',
      type: 'custom',
      position: { x: 225, y: 0 },
      data: {
        title:"Who?",
        storageName:"loglineWho",
      },
      draggable: false,
    },
    {
      id: '3',
      type: 'custom',
      position: { x: 450, y: 0 },
      data: {
        title:"What?",
        storageName:"loglineWhat",
      },
      draggable: false,
    },
    {
      id: '4',
      type: 'custom',
      position: { x: 0, y: 200 },
      data: {
        title:"Why?",
        storageName:"loglineWhy",
      },
      draggable: false,
    },
    {
      id: '5',
      type: 'custom',
      position: { x: 150, y: 200 },
      data: {
        title:"How?",
        storageName:"loglineHow",
      },
      draggable: false,
    },
    {
      id: '6',
      type: 'custom',
      position: { x: 300, y: 200 },
      data: {
        title:"Where?",
        storageName:"loglineWhere",
      },
      draggable: false,
    },
    {
      id: '7',
      type: 'custom',
      position: { x: 450, y: 200 },
      data: {
        title:"But?",
        storageName:"loglineBut",
      },
      draggable: false,
    },
   
  ];
} 




const LoglineFlow = () => {
    // const 
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);



  return (
    <div className='flow-container'>
        <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
        >
        <Background color="#aaa" gap={16} />
        </ReactFlow>
    </div>
  );
};

export default LoglineFlow;
