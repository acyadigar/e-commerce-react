import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../api";

export const fetchMe = createAsyncThunk('user/me', async (token) => {
  const response = await http.post('/auth/me', token)
  return response.data
})

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id)
    }
  },
  extraReducers: {
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

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;
