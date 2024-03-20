// import { createSlice } from "@reduxjs/toolkit";
// import { defaultSage } from "../config/SageConfig";

// // {
// //     sageName:"AI",
// //     sageFullName:"AI",
// //     country:"AI director (default).",
// //     movies:"",
// //     description:"",
// //     image:ImgDefault,  
// // },

// const widgetAgentSlice = createSlice({
//     name:"widgetAgent",
//     initialState:{
//         widgetInfo:defaultSage,
//         toastMessages:[],
//     },
//     reducers:{
//         addMessage: (state, action) => {
//             state.toastMessages.unshift({timestamp:action.payload.timestamp, content:action.payload.content, taskType:action.payload.taskType});
//         },
//         cleanMessage: (state, action) => {
//             state.toastMessages = [];
//         },
//         setCurrentAgent: (state, action) => {
//             state.widgetInfo = action.payload.widgetInfo;
//         },
//     }
// });

// export const widgetAgentActions = widgetAgentSlice.actions;
// export default widgetAgentSlice;



