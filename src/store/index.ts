import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { apiStateSlice } from "./slices/apiStateSlice";
import appStateSlice, { appStateSliceName } from "./slices/appStateSlice";

/**
 * @description - Takes care of creating the store and reducers. For dev env added redux-logger.
 *
 */
const appReducer = combineReducers({
  // can add other reducers as well here.
  [apiStateSlice.reducerPath]: apiStateSlice.reducer,
  [appStateSliceName]: appStateSlice,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middleWare = getDefaultMiddleware({
        serializableCheck: false,
      }).concat(apiStateSlice.middleware);
      if (process.env.NODE_ENV === `development`) middleWare.concat([logger]);
      return middleWare;
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
