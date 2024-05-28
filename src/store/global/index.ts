// globalSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  blogPost: any | null; // Define the type of blogPost here
}

const initialState: GlobalState = {
  blogPost: null, // Initial value is null
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setBlogPost: (state, action: PayloadAction<any>) => {
      state.blogPost = action.payload;
    },
  },
});

export const { setBlogPost } = globalSlice.actions;

export const selectBlogPost = (state: any) => state.global.blogPost;

export default globalSlice.reducer;
