// cartSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CartState {
  cartItems: Array<any>; // You can replace 'any' with the correct type for your test data
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  cartItems: [],
  status: 'idle',
};

// Async thunk to fetch the cart from db.json
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('http://localhost:7000/cart');
  return response.data;
});

// Async thunk to add a test to the cart in db.json
export const addToCart = createAsyncThunk('cart/addToCart', async (test: any) => {
  const response = await axios.post('http://localhost:7000/cart', test);
  return response.data;
});

// Async thunk to remove a test from the cart in db.json
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (testId: number) => {
  await axios.delete(`http://localhost:7000/cart/${testId}`);
  return testId;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.cartItems = action.payload;
        state.status = 'idle';
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.cartItems.push(action.payload);
        state.status = 'idle';
      })
      .addCase(removeFromCart.fulfilled, (state, action: PayloadAction<number>) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        state.status = 'idle';
      })
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default cartSlice.reducer;
