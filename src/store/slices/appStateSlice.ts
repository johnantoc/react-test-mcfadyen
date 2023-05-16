import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

type InitialState = {
  selectedSize: string;
};

const initialState: InitialState = {
  selectedSize: "",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    selectSize: (state, actions) => ({
      ...state,
      selectedSize: actions.payload,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default appStateSlice.reducer;

export const { selectSize } = appStateSlice.actions;

export const appStateSliceName = appStateSlice.name;
