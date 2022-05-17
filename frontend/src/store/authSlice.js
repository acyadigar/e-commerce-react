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

export const fetchMe = createAsyncThunk('user/me', async (token) => {
  const response = await http.post('/auth/me', token)
  return response.data
})

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loading: true // when initialized directly fetchs user
   },
  reducers: {
    logout: (state) => {
      state.token = null
      state.user = null
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      state.loading = false
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      state.loading = false
    },
    [fetchMe.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      state.loading = false
    },
    [fetchMe.pending]: (state) => {
      state.loading = true
    }
  },
});

export const { logout } = authSlice.actions
export default authSlice.reducer;
