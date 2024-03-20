import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { scriptCreationDataRouter } from "../config/routerConfig";

// // default state
// data = {
//     "_id":script_id,
//     "name":"<Enter_Script_Name>",
//     "user_id":user_id,
//     "agent":agent,
//     "start_time":get_current_time(),
//     "last_updated_time":get_current_time(),
//     "currentStage":"Logline",
//     "activatedStages":["Logline"],
//     "loglineData":{
//         "loglineContent":"",
//         "loglineRawContent":"",
//         "loglineWhen":"",
//         "loglineWho":"",
//         "loglineWhat":"",
//         "loglineWhy":"",
//         "loglineHow":"",
//         "loglineWhere":"",
//         "loglineBut":"",
//     },
//     "outlineData":{
//         "structureType":"",
//         "outlineContent":"",
//         "outlineRawContent":"",
//     },
//     "scenesData":{
//         "sceneType":"",
//     },
//     "elements":[
//         {"element":"LOCATION", "items":["New York", "Boston","a","b","c","e"]},
//         {"element":"CHARACTER", "items":["Bennett"]},
//         {"element":"PROP", "items":[]},
//     ],
//     "toastMessages":[],
//     "conversationMessages":[],
// }

// export const initScriptCreation = createAsyncThunk(
//     "scriptCreation/initScriptCreation",
//     async () => {
//         const resp = await axios.post(scriptCreationDataRouter, {
//                 task:"NEW_SCRIPT_CREATION",
//                 user_id:"test01",
//         });
//         return resp.data;
//     }
// )

export const acivatePage = createAsyncThunk(
    "scriptCreation/acivatePage",
    async (props) => {
        // console.log(props.script_id);
        // console.log(props.stageName);
        await axios.post(scriptCreationDataRouter, {
                task:"ACTIVATE_PAGE",
                script_id:props.script_id,
                stageName:props.stageName,
        });
        return props.stageName;
    }
)


export const updateScriptionCreationData = createAsyncThunk(
    "scriptCreation/updateScriptionCreationData",
    async (props) => {
        const resp = await axios.post(scriptCreationDataRouter, {
                task:"UPDATE_SCRIPT_CREATION_DATA",
                script_id:props.script_id,
                dataName: props.dataName,
                dataValue: props.dataValue,
        });
        return resp.data;
    }  
)



const scriptCreationSlice = createSlice({
    name:"scriptCreation",
    initialState: {data:undefined},
    reducers:{
        initScriptCreation: (state, action) => {
            state.data = action.payload.data;
        },
        // acivatePage: (state, action) => {

        //     state.data.activatedStages.push(action.payload.stageName);
        // },
        setName: (state, action) => {
            state.data.name = action.payload.name;
        },
        setCurrentStage: (state, action) => {
            state.data.currentStage = action.payload.stageName;
        },
        setLoglineDataState: (state, action) => {
            const dataName = action.payload.dataName;
            const dataValue = action.payload.dataValue;
            state.data.loglineData[dataName] = dataValue;
        },
        setOutlineDataState: (state, action) => {
            const dataName = action.payload.dataName;
            const dataValue = action.payload.dataValue;
            state.data.outlineData[dataName] = dataValue;
        },
        setScenesType: (state, action) => {
            // state.data.scenesData.sceneType = action.payload.sceneType;
            state.data.scenesData.nodesData = action.payload.nodesData;
        },
        addElement: (state, action) => {
            state.data.elements.push({element:action.payload.elementName, items:[]})
        },
        addElementItem: (state, action) => {
            const elementName = action.payload.elementName;
            const item = action.payload.item;
            for(let i=0; i<state.data.elements.length; i++){
                if(state.data.elements[i].element === elementName){
                    state.data.elements[i].items.push(item);
                    break;
                }
            }

        },
        removeElementItem: (state, action) => {
            const elementName = action.payload.elementName;
            const item = action.payload.item;
            for(let i=0; i<state.data.elements.length; i++){
                if(state.data.elements[i].element === elementName){
                    state.data.elements[i].items = state.data.elements[i].items.filter(it => it !== item);
                    break;
                }
            }
        },
        addToastMessage: (state, action) => {
            state.data.toastMessages.unshift({timestamp:action.payload.timestamp, content:action.payload.content, taskType:action.payload.taskType});
        },
        addConversationMessages: (state, action) => {
            state.data.conversationMessages.push({role:action.payload.role, content:action.payload.content});
        },
        deleteSceneNode: (state, action) => {
            let nodeData = state.data.scenesData.nodesData.nodes.filter(item => item.id !== action.payload.deletedId);
            state.data.scenesData.nodesData.nodes = nodeData;
            // state.data.scenesData.nodesData.nodes = state.data.scenesData.nodesData.nodes.filter(item => item.id !== action.payload.deletedId);
        },
        deleteSceneEdge: (state, action) => {
            let edgeData = state.data.scenesData.nodesData.edges.filter(item => item.id !== action.payload.deletedId);
            state.data.scenesData.nodesData.edges = edgeData;
        },
        addSceneNode: (state, action) => {
            state.data.scenesData.nodesData.nodes.push(action.payload.nodeData);
            // state.data.scenesData.nodesData.nodes = state.data.scenesData.nodesData.nodes.filter(item => item.id !== action.payload.deletedId);
        },
        addSceneEdge: (state, action) => {
            state.data.scenesData.nodesData.edges.push(action.payload.edgeData);
        },
        updateSceneNodeInfo: (state, action) => {
            const { id, attributeName, newData } = action.payload;
            const index = state.data.scenesData.nodesData.nodes.findIndex(item => item.id === id);
            if (index !== -1) {
                state.data.scenesData.nodesData.nodes[index][attributeName] = newData;
            }
        },
        updateSceneNodeData: (state, action) => {
            const { id, attributeName, newData } = action.payload;
            const index = state.data.scenesData.nodesData.nodes.findIndex(item => item.id === id);
            if (index !== -1) {
                state.data.scenesData.nodesData.nodes[index]["data"][attributeName] = newData;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(initScriptCreation.fulfilled, (state, action) => {
            //     state.data = action.payload;
            // })
            // .addCase(initScriptCreation.rejected, (state, action) => {
            //     throw new Error(action.error.message);
            // })
            .addCase(acivatePage.fulfilled, (state, action) => {
                state.data.activatedStages.push(action.payload);
            })
            .addCase(acivatePage.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
            .addCase(updateScriptionCreationData.fulfilled, (state, action) => {
                console.log("data stored");
            })
            .addCase(updateScriptionCreationData.rejected, (state, action) => {
                throw new Error(action.error.message);
            })
    },
})


export default scriptCreationSlice;
export const  scriptCreationActions = scriptCreationSlice.actions;