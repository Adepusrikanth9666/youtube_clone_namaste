import { configureStore } from "@reduxjs/toolkit";
import appSlicerReducer from "../utils/appSlice";
import searchSliceReducer from "../utils/searchSlice";
import chatSliceReducer from "../utils/chatSlice";
const appStore = configureStore({
  reducer: {
    app: appSlicerReducer,
    search: searchSliceReducer,
    chat: chatSliceReducer,
  },
});

export default appStore;
