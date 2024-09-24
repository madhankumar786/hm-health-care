// src/features/packages/packagesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/apiClient';
import { ItemList } from 'types';

// Define an async thunk to fetch packages data
export const fetchPackages = createAsyncThunk<ItemList>(
  'packages/fetchPackages',
  async () => {
    const response = await apiClient.get('/packages'); // Axios instance used here
    return response.data;
  }
);

interface PackagesState {
  data: ItemList;
  loading: boolean;
  error: string | null;
}

const initialState: PackagesState = {
  data: [],
  loading: false,
  error: null,
};

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPackages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPackages.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPackages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch packages';
    });
  },
});

export default packagesSlice.reducer;
