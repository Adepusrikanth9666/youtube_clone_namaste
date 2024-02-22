import { configureStore } from "@reduxjs/toolkit";
import appSlicerReducer from "../utils/appSlice";
const appStore = configureStore({
  reducer: {
    app: appSlicerReducer,
  },
});

export default appStore;
