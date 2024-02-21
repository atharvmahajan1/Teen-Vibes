import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    PromptRequest: (state) => {
      state.loading = true;
    },
    PromptSuccess: (state, action) => {
      state.loading = false;
      state.prompt = action.payload;
    },
    PromptFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Clear Errors
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const { PromptRequest, PromptSuccess, PromptFailure, clearErrors } =
  promptSlice.actions;

export default promptSlice.reducer;
