import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface TestPackageData {
  title: string;
  description: string;
  price: number;
  shortDescription: string;
  samplesRequired: string[];
  testsIncluded: string[];
}

interface TestPackageDetailsState {
  testPackageData: TestPackageData | null;
  loading: boolean;
  error: string | null;
}

const initialState: TestPackageDetailsState = {
  testPackageData: null,
  loading: false,
  error: null
};

export const fetchTestPackageData = createAsyncThunk(
  'testPackageDetails/fetchTestPackageData',
  async (testId: number) => {
    const response = await axios.get(`http://localhost:7000/testsData/${testId}`);
    return response.data;
  }
);

const testPackageDetailsSlice = createSlice({
  name: 'testPackageDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestPackageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestPackageData.fulfilled, (state, action) => {
        state.loading = false;
        state.testPackageData = action.payload;
      })
      .addCase(fetchTestPackageData.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch test package data';
      });
  }
});

export default testPackageDetailsSlice.reducer;
