import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../api";

export const fetchProducts = async () => {
  const response = await http.get("product");
  return response.data;
}

export const fetchProduct = async (id) => {
  const response = await http.get(`product/${id}`);
  return response.data;
}

export const addProduct = createAsyncThunk("products/add", async (product) => {
  const response = await http.post("product", product)
  return response.data;
})

export const editProduct = createAsyncThunk("products/edit", async (product) => {
  const response = await http.put(`product/${product.id}`, product)
  return response.data
})

export const productSlice = createSlice({
  name: "products",
  initialState: { 
    data: [],
    loading: false,
    status: null
  },
  reducers: {
    resetStatus: (state) => {
      state.status = null
    },
  },
  extraReducers: {
    // Adding Product
    [addProduct.fulfilled]: (state) => {
      state.status = 'Success'
      state.loading = false
    },
    [addProduct.rejected]: (state, action) => {
      state.status = action.error
      state.loading = false
    },
    [addProduct.pending]: (state) => {
      state.loading = true
    },
    // Editing Product
    [editProduct.fulfilled]: (state) => {
      state.status = 'Success'
      state.loading = false
    },
    [editProduct.rejected]: (state, action) => {
      state.status = action.error
      state.loading = false
    },
    [editProduct.pending]: (state) => {
      state.loading = true
    },
  },
});

export const { resetStatus } = productSlice.actions
export default productSlice.reducer;
