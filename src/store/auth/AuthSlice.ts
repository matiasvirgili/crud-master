import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    isLoading: false,
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.isLoading = true;
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.isLoading = false;
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state) => {
      state.status = "not-authenticated";
      state.isLoading = false;
      state.user = {};
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
