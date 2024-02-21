import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserReducers";

const store = configureStore({
  reducer: {
    user: userReducer.user,
  },
});

export default store;
