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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;
