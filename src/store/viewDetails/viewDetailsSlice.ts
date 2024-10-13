// src/store/slices/viewDetailsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../utils/api/apiClient'; // Assuming you're using an apiClient instance

interface PackageDetailsState {
  data: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PackageDetailsState = {
  data: null,
  status: 'idle',
  error: null,
};

// Async thunk to fetch package details
export const getPackageDetails = createAsyncThunk(
  'viewDetails/getPackageDetails',
  async (id: number) => {
    const response = await apiClient.get(`/testsData/${id}`);
    return response.data;
  }
);

const viewDetailsSlice = createSlice({
  name: 'viewDetails',
  initialState,
  reducers: {
    clearPackageDetails: (state) => {
      state.data = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPackageDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPackageDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getPackageDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch package details';
      });
  },
});

export const { clearPackageDetails } = viewDetailsSlice.actions;
export default viewDetailsSlice.reducer;
