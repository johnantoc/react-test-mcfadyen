import { AppStore } from "../index";
import { appStateSliceName } from "../slices/appStateSlice";

const getAppReducer = (state: any) => state[appStateSliceName];

export const selectedSize = (state: AppStore) =>
  getAppReducer(state).selectedSize;
