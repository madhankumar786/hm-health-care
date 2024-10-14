import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CartState {
  cartItems: Array<any>; 
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
  cartItems: [],
  status: 'idle',
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('http://localhost:7000/cart');
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (test: any) => {
  const response = await axios.post('http://localhost:7000/cart', test);
  return response.data;
});

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
