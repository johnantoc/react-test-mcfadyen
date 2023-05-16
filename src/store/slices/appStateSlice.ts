import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    selectedSize: null,
  },
  reducers: {
    selectedSize: (state: any, actions: any) => ({
      ...state,
      ...actions.payload,
    }),
  },
});

export default appStateSlice.reducer;

export const { selectedSize } = appStateSlice.actions;

export const appStateSliceName = appStateSlice.name;
