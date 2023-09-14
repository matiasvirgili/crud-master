import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./login/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
