import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../utils/api/apiClient'; 
import { ItemList } from 'types';

interface OrgansPackageState {
    data: ItemList;
    loading: boolean;
    error: string | null;
}

const initialState: OrgansPackageState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchOrgansPackages = createAsyncThunk('organsPackages/fetchOrgansPackages', async () => {
    const response = await apiClient.get('/organs'); 
    return response.data;
});

const organsPackageSlice = createSlice({
    name: 'organsPackages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrgansPackages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrgansPackages.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchOrgansPackages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch organs packages';
            });
    },
});

export default organsPackageSlice.reducer;
