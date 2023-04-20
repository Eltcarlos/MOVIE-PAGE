import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  authState: authSlice.reducer,
});

const persistreducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistreducer,
  middleware: [thunk],
});
