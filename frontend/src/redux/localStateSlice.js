import { createSlice } from "@reduxjs/toolkit";
import { defaultSage } from "../config/SageConfig";



const localStateSlice = createSlice({
    name:"localState",
    initialState: {
        user_id:"test01",
        widgetInfo:defaultSage,
        showModal:false,
        elementChanged:false,
        rightPanel : "",
    },
    reducers:{
        toggleShowModal: (state, action) =>{
            state.showModal =! state.showModal;
        },
        setElementChanged: (state, action) => {
            state.elementChanged = action.payload.newState;
        },
        setCurrentAgent: (state, action) => {
            state.widgetInfo = action.payload.widgetInfo;
        },
        setRightPanel: (state, action) => {
            state.rightPanel = action.payload.rightPanel;
        }

    },

})


export default localStateSlice;
export const  localStateSliceActions = localStateSlice.actions;