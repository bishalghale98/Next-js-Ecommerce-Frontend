import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // add more reducers here
});

export default rootReducer;
