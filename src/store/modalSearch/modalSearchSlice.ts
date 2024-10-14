import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  apiClient  from '../../utils/api/apiClient'; 

// initial state 
interface ModalSearchState {
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ModalSearchState = {
  results: [],
  loading: false,
  error: null,
};

export const fetchSearchResults = createAsyncThunk(
  'modalSearch/fetchSearchResults',
  async (query: string, { rejectWithValue }) => {
    try {
    //   const response = await apiClient.get(`/testsData?q=${query}`);
      const response = await apiClient.get(`/testsData?title_like=${query}`);
      const filteredResults = response.data.filter((test: any) =>
        test.title.toLowerCase().includes(query.toLowerCase())
      );
         console.log('inside fetchSearchResult786')
      return filteredResults;
    //   return response.data; 
    } catch (err: any) {
      return rejectWithValue('Failed to fetch search results');
    }
  }
);

const modalSearchSlice = createSlice({
  name: 'modalSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default modalSearchSlice.reducer;
