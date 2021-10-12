import { createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { stat } from "fs";
import { User, UserService } from "orlandini-sdk";

export const fetchAllEditors = createAsyncThunk('editor/fetchAllEditors',
    async function () {
        return UserService.getAllEditors();
    }
);

interface EditorStoreState {
    editorsList: User.EditorSummary[],
    fetching: boolean
}

const initialState: EditorStoreState = {
    editorsList: [],
    fetching: false
}

export const editorReducer = createReducer(initialState, (builder) => {

    const pending = isPending(fetchAllEditors);
    const rejected = isRejected(fetchAllEditors);
    const fulfilled = isFulfilled(fetchAllEditors);


    builder.addCase(fetchAllEditors.fulfilled, (state, action) => {
        state.editorsList = action.payload;
    })
        .addMatcher(pending, (state) => {
            state.fetching = true; 
        })
        .addMatcher(rejected, (state) => {
            state.fetching = false;
        })
        .addMatcher(fulfilled, (state) => {
            state.fetching = false;
        })
})