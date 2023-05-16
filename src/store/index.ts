import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { apiStateSlice } from "./slices/apiStateSlice";
import appStateSlice, { appStateSliceName } from "./slices/appStateSlice";

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  /**
   * @description - Takes care of creating the store and reducers. For dev env added redux-logger.
   */
  const appReducer = combineReducers({
    // can add other reducers as well here.
    [apiStateSlice.reducerPath]: apiStateSlice.reducer,
    [appStateSliceName]: appStateSlice,
  });

  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };

  if (isServer) {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => {
        const middleWare = getDefaultMiddleware({
          serializableCheck: false,
        }).concat(apiStateSlice.middleware);
        if (process.env.NODE_ENV === `development`) middleWare.concat([logger]);
        return middleWare;
      },
    });
  }

  const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: [apiStateSlice.reducerPath],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      const middleWare = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiStateSlice.middleware);
      if (process.env.NODE_ENV === `development`) middleWare.concat([logger]);
      return middleWare;
    },
  });

  (store as any).__persistor = persistStore(store);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
