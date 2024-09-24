// src/store/faq/faqSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FAQ, FAQList } from 'types'; // Adjust the import path
import apiClient from '../../api/apiClient'; // Your axios instance

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
        const response = await apiClient.get('/faq'); // Adjust the endpoint if needed
        return response.data; // Ensure this matches FAQList
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
            state.data = action.payload; // Ensure this is FAQList
        });
        builder.addCase(fetchFAQ.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch FAQs';
        });
    },
});

export default faqSlice.reducer;
