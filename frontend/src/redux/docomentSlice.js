import { createSlice } from "@reduxjs/toolkit";
import { getEmptyRawContent } from "../utils/editorUtils";

const initialState = {
    document_id:"",
    document:{textContent:"", rawContent:getEmptyRawContent()},
    scripts: [],
}

const documentSlice = createSlice({
    name:"documentSlice",
    initialState: initialState,
    reducers:{
        setDocumentId: (state, action) => {
            console.log(action.payload.document_id)
            state.document_id = action.payload.document_id;
        },
        setDocumentContent: (state, action) => {
            // const {textContent, rawContent} = action.payload;
            state.document.textContent = action.payload.textContent;
            state.document.rawContent = action.payload.rawContent;
        },
        cleanDocument: (state, action) => {
            state = initialState;
        },
        setScripts : (state, action) => {
            state.scripts = action.payload.scripts;
        }
    }
});

export const documentSliceActions = documentSlice.actions;
export default documentSlice;



