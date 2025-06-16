import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";
import { set } from "react-hook-form";

const initialState = {
  user: null,
  error: null,
  loading: false,
  role: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserNull: () => initialState,
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
       
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || "Login failed";
        state.loading = false;
      });
  },
});

export const { setUserNull, setRole } = authSlice.actions;

export default authSlice.reducer;
