export const initNodeConfig = (onDeleteNode, onDeleteEdge, setRightPanel) => {
    return {  
        "ZigZag":{
            nodes:[
                {
                    id: 'node-1',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -3000, y: 1500 },
                    data: { title: 'Scene 1', nodeId:1, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-2',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -2500, y: 800 },
                    data: { title: 'Scene 2', nodeId:2, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-3',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -2000, y: 100 },
                    data: { title: 'Scene 3', nodeId:3, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-4',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -1500, y: 1000 },
                    data: { title: 'Scene 4', nodeId:4, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-5',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -1000, y: 100 },
                    data: { title: 'Scene 5', nodeId:5, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-6',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -500, y: -800 },
                    data: { title: 'Scene 6', nodeId:6, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-7',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 0, y: -1700 },
                    data: { title: 'Scene 7', nodeId:7, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-8',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 500, y: -1000 },
                    data: { title: 'Scene 8', nodeId:8, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-9',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 1000, y: -300 },
                    data: { title: 'Scene 9', nodeId:9, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-10',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 1500, y: 400 },
                    data: { title: 'Scene 10', nodeId:10, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-11',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 2000, y: 1100 },
                    data: { title: 'Scene 11', nodeId:11, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-12',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 2500, y: 1700 },
                    data: { title: 'Scene 12', nodeId:12, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },

            ],
            edges:[
                { id: 'edge-1', type: "ScenesEdge", source: 'node-1', target: 'node-2', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-2', type: "ScenesEdge", source: 'node-2', target: 'node-3', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-3', type: "ScenesEdge", source: 'node-3', target: 'node-4', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-4', type: "ScenesEdge", source: 'node-4', target: 'node-5', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-5', type: "ScenesEdge", source: 'node-5', target: 'node-6', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-6', type: "ScenesEdge", source: 'node-6', target: 'node-7', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-7', type: "ScenesEdge", source: 'node-7', target: 'node-8', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-8', type: "ScenesEdge", source: 'node-8', target: 'node-9', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-9', type: "ScenesEdge", source: 'node-9', target: 'node-10', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-10', type: "ScenesEdge", source: 'node-10', target: 'node-11', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-11', type: "ScenesEdge", source: 'node-11', target: 'node-12', animated: true, data: { onDelete: onDeleteEdge}},
            ],
        },
        "Tree":{
            nodes:[
                {
                    id: 'node-1',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 0, y: -1200 },
                    data: { title: 'Scene 1', nodeId:1, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-2',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -500, y: -500 },
                    data: { title: 'Scene 2', nodeId:2, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-3',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 500, y: -500 },
                    data: { title: 'Scene 3', nodeId:3, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-4',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -750, y: 200 },
                    data: { title: 'Scene 4', nodeId:4, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-5',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -750, y: 200 },
                    data: { title: 'Scene 5', nodeId:5, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-6',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: -250, y: 200 },
                    data: { title: 'Scene 6', nodeId:6, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-7',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 250, y: 200 },
                    data: { title: 'Scene 7', nodeId:7, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-8',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 500, y: -1000 },
                    data: { title: 'Scene 8', nodeId:8, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-9',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 1000, y: -300 },
                    data: { title: 'Scene 9', nodeId:9, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-10',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 1500, y: 400 },
                    data: { title: 'Scene 10', nodeId:10, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-11',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 2000, y: 1100 },
                    data: { title: 'Scene 11', nodeId:11, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },
                {
                    id: 'node-12',
                    type: 'SceneNode1', // Use the custom node type
                    position: { x: 2500, y: 1700 },
                    data: { title: 'Scene 12', nodeId:12, onDelete: onDeleteNode, setRightPanel:setRightPanel},
                },

            ],
            edges:[
                { id: 'edge-1', type: "ScenesEdge", source: 'node-1', target: 'node-2', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-2', type: "ScenesEdge", source: 'node-2', target: 'node-3', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-3', type: "ScenesEdge", source: 'node-3', target: 'node-4', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-4', type: "ScenesEdge", source: 'node-4', target: 'node-5', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-5', type: "ScenesEdge", source: 'node-5', target: 'node-6', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-6', type: "ScenesEdge", source: 'node-6', target: 'node-7', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-7', type: "ScenesEdge", source: 'node-7', target: 'node-8', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-8', type: "ScenesEdge", source: 'node-8', target: 'node-9', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-9', type: "ScenesEdge", source: 'node-9', target: 'node-10', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-10', type: "ScenesEdge", source: 'node-10', target: 'node-11', animated: true, data: { onDelete: onDeleteEdge}},
                { id: 'edge-11', type: "ScenesEdge", source: 'node-11', target: 'node-12', animated: true, data: { onDelete: onDeleteEdge}},
            ],
        },
        "Snowflake":{
            nodes:[],
            edges:[],
        },
    }
};