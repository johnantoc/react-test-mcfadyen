import { AppStore } from "@/store";
import { appStateSliceName } from "@/store/slices/appStateSlice";

const getAppReducer = (state: any) => state[appStateSliceName];

export const selectedSize = (state: AppStore) =>
  getAppReducer(state).selectedSize;
