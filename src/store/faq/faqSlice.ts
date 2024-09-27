// src/store/faq/faqSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FAQList } from 'types'; 
import apiClient from '../../utils/api/apiClient'; 

interface FAQState {
    data: FAQList;
    loading: boolean;
    error: string | null;
}

const initialState: FAQState = {
    data: [],
    loading: false,
    error: null,
};

// Async thunk for fetching FAQs
export const fetchFAQ = createAsyncThunk<FAQList>(
    'faq/fetchFAQ',
    async () => {
        const response = await apiClient.get('/faq'); 
        return response.data; 
    }
);

const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFAQ.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchFAQ.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchFAQ.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch FAQs';
        });
    },
});

export default faqSlice.reducer;
