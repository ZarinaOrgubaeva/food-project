import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snakebar: {
    isOpen: false,
    message: "",
    severity: "",
  },
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showSnakebar(state, action) {
      state.snakebar.isOpen = true;
      state.snakebar.message = action.payload.message;
      state.snakebar.severity = action.payload.severity;
    },
    closeSnakebar(state) {
      state.snakebar = initialState.snakebar;
    },
  },
});
export const uiActions = uiSlice.actions;
