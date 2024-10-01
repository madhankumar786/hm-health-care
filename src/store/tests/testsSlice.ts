import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from 'utils/api/apiClient';
import {TestList } from 'types'

// Define the shape of a test object
interface Test {
  title: string;
  description: string;
  price: number;
  link: string;
  type: string;
  timeTaken: string;
}

// Define the initial state
interface TestsState {
  tests: Test[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

// Initial state for the slice
const initialState: TestsState = {
  tests: [],
  loading: false,
  error: null,
  hasMore: true,  
};

// Async thunk to fetch tests data from API
export const fetchTests = createAsyncThunk<TestList,number>('tests/fetchTests', async (page: number, { getState }) => {
  const { tests }: any = getState(); // Access the current state
  const limit = 9; // Adjust the limit as needed
  const response = await apiClient.get(`/testsData?_page=${page}&_limit=9`);
  return response.data;
});

// Create the slice
const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTests.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length < 9) {
          state.hasMore = false;
        }
        state.tests =  [...state.tests, ...action.payload];
      })
      .addCase(fetchTests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tests';
      });
  },
});

export default testsSlice.reducer;
