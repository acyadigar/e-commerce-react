import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../api";

export const register = createAsyncThunk("user/register", async (user) => {
  const response = await http.post("/auth/register", user);
  return response.data;
});

export const login = createAsyncThunk("user/login", async (user) => {
  const response = await http.post("/auth/login", user);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
