import { createAction, createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { Post, PostService } from "orlandini-sdk";

interface PostSliceState {
    paginated?: Post.Paginated,
    fetching: boolean;
    counter: number;
}

const initialState: PostSliceState = {
    paginated: {
        page: 0,
        size: 0,
        totalElements: 0,
        totalPages: 1,
        content: []
    },
    fetching: false,
    counter: 0
};

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async function (query: Post.Query) {
        const posts = await PostService.getAllPosts(query);
        return posts;
    }
);

export const increment = createAction('post/increment');

export const postReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment,(state) => {
        state.counter++;
    }).addCase(fetchPosts.fulfilled, (state, action) => {
        state.paginated = action.payload;
    }).addMatcher(isPending, (state) => {
        state.fetching = true;
    }).addMatcher(isFulfilled, (state) => {
        state.fetching = false;
    }).addMatcher(isRejected, (state) => {
        state.fetching = false;
    })
});

